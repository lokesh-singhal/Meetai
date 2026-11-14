import mongoose, { Schema, Document } from "mongoose";

export interface IParticipant extends Document {
    meetingId: mongoose.Types.ObjectId,
    userId?: mongoose.Types.ObjectId,
    role: "host" | "co-host" | "participant",
    livekitIdentity: string,
    joinedAt: Date,
    leftAt?: Date,
    isGuest: boolean,
    
    createdAt: Date,
    updatedAt: Date
}

const participantSchema = new Schema({
    meetingId: {
        type: Schema.Types.ObjectId,
        ref: "Meeting",
        required: true
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "AuthUser",
    },

    role: {
        type: String,
        enum: ["host", "co-host", "participant"],
        default: "participant"
    },

    livekitIdentity: {
        type: String,
        required: true,
    },

    joinedAt: {
        type: Date,
        default: Date.now,
    },

    leftAt: {
        type: Date
    },

    isGuest: {
        type: Boolean, 
    }
}, {timestamps: true});


const ParticipantModel = mongoose.models.Participant as mongoose.Model<IParticipant> || mongoose.model<IParticipant>("Participant", participantSchema);

export default ParticipantModel;
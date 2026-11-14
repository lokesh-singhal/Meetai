import mongoose, { Schema, Document } from "mongoose"

export interface IMeeting extends Document {
    title: string;
    description?: string;

    meetingCode: string;
    hostId: mongoose.Types.ObjectId;
    livekitRoomName: string;

    status: "scheduled" | "live" | "ended";

    scheduledAt?: Date;
    startedAt?: Date;
    endedAt?: Date;

    settings: {
        allowChat: boolean;
        allowScreenShare: boolean;
        waitingRoom: boolean;
        recordingEnabled: boolean;
        aiEnabled: boolean;
    };

    createdAt: Date;
    updatedAt: Date;
}

const meetingSchema = new Schema({
    hostId: {
        type: Schema.Types.ObjectId,
        ref: "AuthUser",
        required: true
    },

    meetingCode: {
        type: String,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    livekitRoomName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        trim: true,
        maxlength: 500
    },

    status: {
        type: String,
        enum: ["scheduled", "live", "ended"],
        default: "scheduled",

    },

    scheduledAt: {
        type: Date,
    },

    startedAt: {
        type: Date,
    },

    endedAt: {
        type: Date,
    },

    setting: {
        allowChat: {
            type: Boolean,
            default: true
        },

        allowScreenShare: {
            type: Boolean,
            default: true
        },

        waitingRoom: {
            type: Boolean,
            default: false
        },

        recordingEnabled: {
            type: Boolean,
            default: false
        },

        aiEnabled: {
            type: Boolean,
            default: true
        },
    },
}, { timestamps: true, })

const MeetingModel = (mongoose.models.Meeting as mongoose.Model<IMeeting>) || mongoose.model<IMeeting>("Meeting", meetingSchema);

export default MeetingModel;
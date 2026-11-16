import mongoose, { Schema, Document } from "mongoose";

export interface IParticipantSession extends Document {
  meetingId: mongoose.Types.ObjectId;
  participantId: mongoose.Types.ObjectId;
  joinedAt: Date;
  leftAt?: Date | null;
  status: "active" | "ended";
  createdAt: Date;
  updatedAt: Date;
}

const ParticipantSessionSchema = new Schema<IParticipantSession>(
  {
    meetingId: {
      type: Schema.Types.ObjectId,
      ref: "Meeting",
      required: true,
      index: true,
    },

    participantId: {
      type: Schema.Types.ObjectId,
      ref: "Participant",
      required: true,
      index: true,
    },

    joinedAt: {
      type: Date,
      default: Date.now,
    },

    leftAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: ["active", "ended"],
      default: "active",
    },
  },
  { timestamps: true }
);

ParticipantSessionSchema.index({
  meetingId: 1,
  participantId: 1,
  joinedAt: -1,
});

const ParticipantSession = mongoose.models.ParticipantSession as mongoose.Model<IParticipantSession> || mongoose.model<IParticipantSession>("ParticipantSession", ParticipantSessionSchema);

export default ParticipantSession;
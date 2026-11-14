import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITranscript extends Document {
    meetingId: mongoose.Types.ObjectId;
    speakerId: string;
    speakerName: string;
    text: string;
    startTime: number;
    endTime: number;
    language: string;
    createdAt: Date;
    updatedAt: Date;
}

const TranscriptSchema = new Schema<ITranscript>(
    {
        meetingId: {
            type: Schema.Types.ObjectId,
            ref: "Meeting",
            required: true,
        },

        speakerId: {
            type: String,
            required: true,
        },

        speakerName: {
            type: String,
            required: true,
            trim: true,
        },

        text: {
            type: String,
            required: true,
            trim: true,
        },

        startTime: {
            type: Number,
            required: true,
            min: 0,
        },

        endTime: {
            type: Number,
            required: true,
            min: 0,
        },

        language: {
            type: String,
            default: "en",
        },
    },
    { timestamps: true }
);

TranscriptSchema.index({ meetingId: 1, startTime: 1 });

const TranscriptModel = mongoose.models.Transcript as mongoose.Model<ITranscript> || mongoose.model<ITranscript>("Transcript", TranscriptSchema);

export default TranscriptModel;
import mongoose, { Schema, Document } from "mongoose";

export interface IActionItem {
  task: string;
  assignedTo?: string;
  deadline?: Date;
  completed: boolean;
}

export interface IMeetingSummary extends Document {
  meetingId: mongoose.Types.ObjectId;
  summary: string;
  keyPoints: string[];
  decisions: string[];
  actionItems: IActionItem[];
  generatedBy: "ai" | "manual";
  createdAt: Date;
  updatedAt: Date;
}

const actionItemSchema = new Schema({
    task: {
        type: String,
        required: true,
        trim: true,
    },
    assignedTo: {
        type: String,
        default: null,
    },
    deadline: {
        type: Date,
        default: null,
    },
    completed: {
        type: Boolean,
        default: false,
    },
},
    { _id: true }
);


const summarySchema = new Schema({
    meetingId: {
        type: Schema.Types.ObjectId,
        ref: "Meeting",
        required: true,
        unique: true
    },

    summary: {
        type: String,
        trim: true,
        required: true
    },

    keyPoints: {
        type: [String],
        default: [],
    },

    decisions: {
        type: [String],
        default: []
    },

    actionItems: {
      type: [actionItemSchema],
      default: [],
    },

    generatedBy: {
        type: String,
        enum: ["ai", "manual"],
        default: "ai"
    }
}, {timestamps: true});

const MeetingSummaryModel = mongoose.models.MeetingSummary as mongoose.Model<IMeetingSummary> || mongoose.model<IMeetingSummary>("MeetingSummary", summarySchema);

export default MeetingSummaryModel;
import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  meetingId: mongoose.Types.ObjectId;
  senderId: string;
  senderName: string;
  receiverId: string | null;
  content: string;
  type: "text" | "system";
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema({
    meetingId: {
        type: Schema.Types.ObjectId,
        ref: "Meeting",
        required: true
    },

    senderId: {
        type: Schema.Types.ObjectId,
        ref: "AuthUser",
        required: true
    },

    senderName: {
        type: String,
        trim: true,
        required: true
    },

    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "AuthUser",
        default: null
    },

    content: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },

    type: {
        type: String,
        enum: ["text", "system"],
        default: "text",
    }
}, {timestamps: true});

messageSchema.index({meetingId: 1, createdAt: -1});

const MessageModel = mongoose.models.Message as mongoose.Model<IMessage> || mongoose.model<IMessage>("Message", messageSchema);

export default MessageModel;
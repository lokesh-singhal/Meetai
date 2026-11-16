import { auth } from "@/lib/auth";
import dbConnect from "@/lib/db";
import MeetingModel from "@/models/Meeting";
import ParticipantModel from "@/models/Participant";
import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";


export const runtime = "nodejs";
export async function POST(req: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: req.headers });
        if (!session) {
            return NextResponse.json({ message: "Unauthorized access" }, { status: 400 });
        }

        const { meetingId } = await req.json();
        if (!meetingId) {
            return NextResponse.json({ message: "MeetingId is required" }, { status: 400 });
        }

        await dbConnect();

        const meeting = await MeetingModel.findById(meetingId);
        if (!meeting) {
            return NextResponse.json({ message: "Meeting room not found" }, { status: 404 });
        }

        if (meeting.status == "ended") {
            return NextResponse.json({ message: "This meeting has ended" }, { status: 400 });
        }

        const participant = await ParticipantModel.findOneAndUpdate({
            meetingId: meeting._id,
            userId: session.user.id
        }, {
            $setOnInsert: {
                meetingId: meeting._id,
                userId: session.user.id,
                displayName: session.user.name || "Participant",
                role:
                    meeting.hostId.equals(session.user.id)
                        ? "host"
                        : "participant",
                livekitIdentity: `user_${session.user.id}`,
                isGuest: false,
            }
        }, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
        });

        const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
            identity: participant.livekitIdentity,
            name: participant.displayName,
            ttl: "10m"
        })

        token.addGrant({
            roomJoin: true,
            room: meeting.livekitRoomName,
            canPublish: true,
            canSubscribe: true,
            canPublishData: true,
        });

        const jwt = await token.toJwt();

        return NextResponse.json({
            token: jwt,
            serverUrl: process.env.LIVEKIT_URL,
            participant: {
                id: participant._id.toString(),
                identity: participant.livekitIdentity,
                name: participant.displayName,
                role: participant.role,
            },
        });
    } catch (error) {
        console.error("LiveKit token generation error:", error);

        return NextResponse.json(
            { error: "Failed to generate LiveKit token" },
            { status: 500 }
        );
    }
}
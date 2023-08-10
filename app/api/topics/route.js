import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Create topics
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  const topic = await Topic.create({ title, description });
  return NextResponse.json(topic, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json(topics);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const topic = await Topic.findByIdAndDelete(id);
  return NextResponse.json(topic, { status: 200 });
}

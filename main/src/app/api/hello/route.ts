import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({message: "Hello, World! This is the backend route"})
}
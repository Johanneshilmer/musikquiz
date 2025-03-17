import {NextResponse} from "next/server";
export async function GET() {
  const posts = [
    { title: "hello, world!"},
    {title: "Goodbye, world!"},
  ];
  return NextResponse.json(posts);
}
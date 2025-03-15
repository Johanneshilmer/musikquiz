import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  return NextResponse.json(data)
}
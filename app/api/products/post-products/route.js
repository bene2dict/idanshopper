import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json("Hello there");
  } catch (error) {
    return NextResponse.json(error);
  }
}

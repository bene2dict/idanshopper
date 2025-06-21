import isValidUrl from "@/helper/isValidUrl";
import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  const data = await NextRequest.json();
  const { url } = data;
  try {
    const isValid = isValidUrl(url);

    if (!isValid) {
    } else {
      return NextResponse.json({
        success: true,
        message: "Validation completed successfully",
        url,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred during validation",
    });
  }
}

import isValidUrl from "@/lib/actions/localActions/isValidUrl";
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req, res) {
  const data = await req.json();
  const { url } = data;
  try {
    const isValidURL = isValidUrl(url);

    if (!isValidURL) {
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

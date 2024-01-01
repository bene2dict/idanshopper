import isValidUrl from "@/lib/actions/localActions/isValidUrl";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { url } = data;
  try {
    const isValidURL = isValidUrl(url);

    if (isValidURL) {
      return NextResponse.json({
        success: true,
        message: "Validation completed successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        title: "Oops! We got an error due to an invalid link",
        message: "A valid link is gotten from jumia.com or konga.com",
        links: {
          one: "https://www.jumia.com.ng/sony-playstation-5-console-standard-edition-257094579.html",
          two: "https://www.konga.com/product/sony-playstation-5-digital-edition-5842154",
        },
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({
      success: false,
      message: "An error occurred during validation",
    });
  }
}

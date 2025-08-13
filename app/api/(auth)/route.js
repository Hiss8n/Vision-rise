import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("heello nextjs")
}

export default GET;
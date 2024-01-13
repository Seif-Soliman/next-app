import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch from db
  //if not found --> 404
  //else return data

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "seif" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate body
  const body = await request.json();
  //if invalid ret 400
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  //else fetch user w/ given id
  //if doesnt exist ret 404
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }
  //else update user
  const updated = NextResponse.json({ id: 1, name: body.name });
  //ret updated user
  return updated;
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch user from db
  //if not found ret 404
  //else delete db
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}

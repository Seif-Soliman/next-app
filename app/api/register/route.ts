import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return NextResponse.json({ error: "User Already Exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const userCreate = await prisma.user.create({
    data: {
      hashedPassword,
      email: body.email,
    },
  });
  return NextResponse.json({ email: userCreate.email }, { status: 201 });
}

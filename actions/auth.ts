"use server";

import { prisma } from "@/lib/prisma";

export async function registerUser(data: {
  name: string;
  email: string;
  mobile?: string;
  password: string;
}) {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  await prisma.user.create({
    data,
  });

  return {
    success: true,
    message: "Account created successfully.",
  };
}
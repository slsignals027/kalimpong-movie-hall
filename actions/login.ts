"use server";

import { prisma } from "@/lib/prisma";

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  if (user.password !== data.password) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  return {
    success: true,
    message: "Login successful.",
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  };
}
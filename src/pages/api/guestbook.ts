import { PrismaClient } from "@prisma/client";
import type { APIRoute } from "astro";
import { z } from "astro:content";

const prisma = new PrismaClient();

export const get: APIRoute = async () => {
  const messages = await prisma.guestbookMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 200,
  });

  return {
    body: JSON.stringify({
      status: "Success",
      data: messages,
    }),
  };
};

const ResponseSchema = z.object({
  message: z
    .string({
      required_error: "Please provide a message",
    })
    .min(1)
    .max(500)
    .trim(),
});

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();
  const result = await ResponseSchema.safeParseAsync(body);

  if (!result.success) {
    return {
      status: 400,
      body: JSON.stringify({
        message: "Bad Request",
        errors: result.error.errors,
      }),
    };
  }

  const { message } = result.data;

  await prisma.guestbookMessage.create({
    data: {
      message,
      githubID: "123",
    },
  });

  return {
    status: 201,
    body: JSON.stringify({
      status: "Success",
    }),
  };
};

import { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  return {
    body: JSON.stringify({
      message: "This was a GET!",
    }),
  };
};

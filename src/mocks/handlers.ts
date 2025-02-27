import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", async ({ request }) => {
    return HttpResponse.json({ id: 1, name: "John Doe", email: "john@example.com" });
  }),
];

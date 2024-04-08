import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/hello/:name", (req) => `Hello ${req.params.name}`)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

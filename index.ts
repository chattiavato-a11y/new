/**
 * Chattia Worker (sanitized)
 *
 * Returns a safe placeholder for API requests.
 */

type ExportedHandler<TEnv> = {
  fetch(request: Request, env: TEnv, ctx: ExecutionContext): Promise<Response>;
};

type Env = Record<string, never>;

export default {
  /**
   * Main request handler for the Worker
   */
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // API route placeholder (LLM functionality removed)
    if (url.pathname === "/api/chat") {
      return new Response(
        JSON.stringify({
          message: "Chat backend is intentionally disabled. No AI or external services are invoked.",
        }),
        {
          status: 501,
          headers: { "content-type": "application/json" },
        },
      );
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;

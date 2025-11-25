// server_edge.js — sanitized placeholder (no environment variables or provider calls)
// Responds with a fixed message indicating that remote AI connectivity is disabled.

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(url.origin) });
  }

  if (url.pathname === "/api/chat") {
    return new Response(
      JSON.stringify({
        message: "Edge chatbot connectivity is disabled. No secrets, keys, or external AI providers are used.",
      }),
      {
        status: 501,
        headers: { "content-type": "application/json", ...corsHeaders(url.origin) },
      },
    );
  }

  return new Response("Not found", { status: 404, headers: corsHeaders(url.origin) });
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Vary": "Origin",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
}

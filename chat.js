// chat.js — sanitized client placeholder (no external AI calls)
// Usage: import this script in a page that defines appendMessage(role, text, meta?)
// The handler now echoes locally without contacting any backend or LLM provider.

async function sendMessage(userText) {
  // 1) Show user's message
  appendMessage("user", userText);

  try {
    // 2) Provide a deterministic local response
    const replyText = "Chattia backend is offline. This is a local placeholder response.";

    // 3) Render assistant response
    appendMessage("assistant", replyText, {
      confidence: "n/a",
      escalated: false,
      usedFallback: true,
    });
  } catch (err) {
    console.error("chat error", err);
    appendMessage("assistant", "Temporary issue processing your message.", {
      confidence: "n/a",
      usedFallback: true,
    });
  }
}

// Simple DOM helper stub — adjust to your actual UI
function appendMessage(role, text, meta) {
  // Your existing rendering logic here
  console.log(`${role}:`, text, meta || {});
}

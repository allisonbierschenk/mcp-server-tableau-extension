document.addEventListener("DOMContentLoaded", () => {
  tableau.extensions.initializeAsync().then(() => {
    document.getElementById("sendBtn").addEventListener("click", sendToMCP);
  });
});

function sendToMCP() {
  const userInput = document.getElementById("userInput").value;
  fetch("https://YOUR_MCP_SERVER/api/your-endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: userInput })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("response").innerText = data.result || JSON.stringify(data);
  })
  .catch(err => {
    document.getElementById("response").innerText = "Error: " + err;
  });
}

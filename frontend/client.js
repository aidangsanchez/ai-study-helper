document.getElementById("summarizeBtn").addEventListener("click", () => {
  const text = document.getElementById("notes").value;

  fetch("http://127.0.0.1:5000/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.summary;
  })
  .catch(err => {
    document.getElementById("output").innerText = "Error connecting to backend.";
  });
});

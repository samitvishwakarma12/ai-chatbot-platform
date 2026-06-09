document.getElementById("submit-prompt-btn").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;

    const responseBox = document.getElementById("response");
    responseBox.innerText = "Thinking...";

    try {
        const res = await fetch("http://127.0.0.1:8000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await res.json();

        responseBox.innerText = data.response;
    } catch (err) {
        responseBox.innerText = "Error: " + err.message;
    }
});
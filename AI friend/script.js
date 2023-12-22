const speechInput = document.getElementById("speechInput");

function startSpeechRecognition() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript.toLowerCase();
    speechInput.value = result;
    handleSpeechInput(result);
  };

  recognition.start();
}

function handleSpeechInput(input) {
  let response = "";

  if (input.includes("hello")) {
    response = "Hello there! How can I assist you today?";
  } else if (input.includes("how are you")) {
    response = "I am just a computer program, but I am here and ready to help!";
  } else if (input.includes("praveen" || "praveen.")) {
    response =
      "hello prabin. you are a very good cricketer. i was amazed by seeing your spectacular century.";
  } else if (input.includes("narendra" || "Mr. narendra")) {
    response =
      "Good afternoon sir.. we all are blessed to have you.\n Your teaching and mentorship has really nurtured us. \n thank you for everything.";
  } else {
    response =
      "I didn't quite catch that. Can you please repeat or ask something else?";
  }

  speakResponse(response);
}

function speakResponse(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(utterance);
}

speechInput.addEventListener("focus", () => {
  speechSynthesis.cancel();
});

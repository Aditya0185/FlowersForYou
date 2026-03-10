document.addEventListener("DOMContentLoaded", () => {
  const message =
    "Hey Kamana, you’re smart — you’ve got this, so study well and All the best for your exams 💐. Hope every paper goes amazing — just like you. ✨";

  const target = document.getElementById("congrats-text");

  if (!target) {
    console.error("Element with id 'congrats-text' not found.");
    return;
  }

  // Start flowers earlier
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 300);

  // Start text after flowers begin, not at the exact same moment
  let index = 0;

  function typeCharacter() {
    if (index < message.length) {
      target.textContent += message.charAt(index);
      index++;
      setTimeout(typeCharacter, 55);
    }
  }

  setTimeout(typeCharacter, 1200);
});

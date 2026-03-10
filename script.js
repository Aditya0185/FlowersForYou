window.onload = () => {

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

 
  const message = "Hey Kamana, you’re smart — you’ve got this, so study well and All the best for your exams 💐. Hope every paper goes amazing — just like you. ✨";
  

  const target = document.getElementById("congrats-text");

  if (!target) {
    console.error("Element with id 'congrats-text' not found.");
    return;
  }

  let index = 0;

  function typeCharacter() {
    if (index < message.length) {
      target.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeCharacter, 40); 
    }
  }

  setTimeout(typeCharacter, 1000); 
};

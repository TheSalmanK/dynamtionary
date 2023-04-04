console.log("did someone invite dynamtionary to the party?");

// need to get ref to the first textarea
// const textArea = document.getElementById()
// const textArea = document.getElementsByTagName
const textArea = document.querySelector("textarea");
textArea.addEventListener("input", (inputEvent) => {
  const tokens = textArea.value.split(" ");
  // console.log("input event fired!", inputEvent, "textarea", );
  console.log('tokens', tokens)
});

// textArea.addEventListener("input", function() {

// });

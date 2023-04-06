console.log("did someone invite dynamtionary to the party?");

// need to get ref to the first textarea
// const textArea = document.getElementById()
// const textArea = document.getElementsByTagName
const theDiv = document.querySelector('div')
const textArea = document.querySelector("textarea");
textArea.addEventListener("input", (inputEvent) => {
  const tokens = textArea.value.split(" ");
  // console.log("input event fired!", inputEvent, "textarea", );
  // console.log('tokens', tokens)
  const spans = tokens.map(str2Span)
  // console.log(spans)

  theDiv.innerHTML = '';
  //now need to put those spans into the document
  // need a ref to the div
  theDiv.append(...spans)
  // if i'm not comfortable with the spread operator, i coudl use a for loop or for each here instead, eg
  // spans.forEach((span) => theDiv.append(span))

  // have a little problem.
  // right now this thing always behaves like there's no text in the div yet whic only true 1st time. maybe shoudl clear the div before adding to it... see above

});

//needd a funciton that expects to convert a stringto a span

function str2Span(str) {
  const span = document.createElement('span')
  span.innerText = str;
  return span
}
const knownWords = new Set();

const learnElem = document.getElementById('learn');
// console.log(learnElem)
learnElem.addEventListener('keyup', (ev) => {
  // console.log(ev.key)
  // console.log(ev.key === 'Return')
  // console.log(ev.key === 'Enter')
  if (ev.key === 'Enter') {
    knownWords.add(learnElem.value)
    learnElem.value = ''
  }
})


// textArea.addEventListener("input", function() {

// });

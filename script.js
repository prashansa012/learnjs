function changeBackgroundColor() {
  // Generate a random hex color
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the random color to the body background
  document.body.style.backgroundColor = randomColor;
}
let clickCount = 0;
let oldText = "";
function changeH1Text() {
  let h1 = document.getElementById("myh1");
  if (clickCount % 2 == 0) {
    oldText = h1.innerText;
    h1.innerText = "hello! " + (Math.random() * 100).toFixed(2);
  } else {
    h1.innerText = oldText;
  }
  clickCount++;
}

function changeH2Text() {
  let h2 = document.getElementById("myh2");
  h2.innerText = "lets learn it✌️";
}

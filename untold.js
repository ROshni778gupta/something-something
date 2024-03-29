const text =
  "Dear BestFriend ,  I wnna Say Something.         Every passing day without you feels like a piece of me is missing. Your laughter, your kindness, your unwavering support—these are the things I find myself craving more than ever. Life seems a little less colorful without your presence by my side. There's a void in my heart that only your friendship can fill. Do you remember the countless adventures we embarked on? From spontaneous roaming dominics and commerce block, each memory is etched in my mind like a precious gem. Those moments weren't just fleeting instances; they were the building blocks of a bond that I hold dearer than words can express , knowing that soon we'll be able to wrap each other in tight hugs and pick up right where we left off. Until that moment arrives, know that you are dearly missed and loved more than words can convey.    ....................  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

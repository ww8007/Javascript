const number = document.getElementById("number");

const buttons = document.querySelectorAll("button");

const [increase, decrease] = buttons;

increase.onclick = () => {
  const mynum = parseInt(number.innerText, 10);
  console.log(number.innerText);
  number.innerText = mynum + 1;
  console.log("+1");
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

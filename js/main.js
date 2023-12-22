const BTN = document.querySelector("#btn");
const input = document.querySelector("#inp");

const randomNum = () => {
  let Num = Math.floor(Math.random() * 100) + 1;
  return Num;
};

let AInum = randomNum();

const check = () => {
  console.log(inp.value);
  let num = inp.value;
  console.log(AInum);
  if (num == AInum) {
    console.log("Congratulations...\nyou guessed it..");
  } else if (num > AInum) {
    console.log(
      "Your num is greater than the original num;\nTry guessing smaller nums.."
    );
  } else if (num < AInum) {
    console.log(
      "Your num is smaller than the original num;\nTry guessing bigger nums.."
    );
  } else {
    console.log("Only nums are valid");
  }

  inp.value = "";
};

BTN.addEventListener("click", (e) => {
  e.preventDefault;
  check();
});

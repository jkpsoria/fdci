import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

var con = [
  "#DFFF00",
  "#E4D00A",
  "#00FFFF",
  "#023020",
  "#7DF9FF",
  "#50C878",
  "#5F8575",
  "#4F7942",
  "#228B22",
  "#7CFC00",
  "#008000",
  "#355E3B",
  "#00A36C",
  "#2AAA8A",
  "#4CBB17",
  "#90EE90",
  "#32CD32",
  "#478778",
  "#0BDA51",
  "#98FB98",
  "#8A9A5B",
  "#0FFF50",
  "#ECFFDC",
  "#808000",
  "#C1E1C1",
  "#C9CC3F",
  "#B4C424",
  "#93C572",
  "#96DED1",
  "#8A9A5B",
  "#2E8B57",
  "#9FE2BF",
  "#009E60",
  "#00FF7F",
  "#008080",
  "#40E0D0",
  "#C4B454",
  "#40B5AD",
  "#40826D",
];

const btn = document.querySelector("#yes");

const clickHandler = () => {
  alert("You clicked the button!");
};

btn.addEventListener("click", clickHandler);

let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.tv-asahi.co.jp/shinchan/character/img/01.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/02.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/03.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/04.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/05.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/10.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/13.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/12.png",
"https://www.tv-asahi.co.jp/shinchan/character/img/11.png",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src',url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}

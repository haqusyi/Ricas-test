// アルバムデータの作成
let album = [
  { src: 'img/web/ryusui.png', msg: '流水マップ'},
  { src: 'img/web/beku1.png', msg: 'ベクトル1'},
  { src: 'img/web/beku2.png', msg: 'ベクトル2'},
  { src: 'img/web/beku3.png', msg: 'ベクトル3'},
  { src: 'img/web/beku4.png', msg: 'ベクトル4'},
  { src: 'img/web/beku5.png', msg: 'ベクトル5'}
];

//定点カメラの作成
let side = [
  {src: 'img/web/ryusui.png', msg: '定点カメラ'},
  {src: 'img/web/ryusui.png', msg: '定点カメラ'},
  {src: 'img/web/ryusui.png', msg: '定点カメラ'},
  {src: 'img/web/ryusui.png', msg: '定点カメラ'},
  {src: 'img/web/ryusui.png', msg: '定点カメラ'},
  {src: 'img/web/ryusui.png', msg: '定点カメラ'}
];


// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let subImage = document.createElement('img');
subImage.setAttribute('src', side[0].src);
subImage.setAttribute('alt', side[0].msg);


let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let subMsg = document.createElement('p');
subMsg.innerText = subImage.alt;


let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

let subFlame = document.querySelector('#gallery2 .sub');
subFlame.insertBefore(subImage, null);
subFlame.insertBefore(subMsg, null);


// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

let sidebyFlame = document.querySelector('#gallery2 .sideby');
for (let i = 0; i < side.length; i++) {
  let sidebyImage = document.createElement('img');
  sidebyImage.setAttribute('src', side[i].src);
  sidebyImage.setAttribute('alt', side[i].msg);
  sidebyFlame.insertBefore(sidebyImage, null);
}


// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

sidebyFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    subImage.src = event.target.src;
    subMsg.innerText = event.target.alt;
  }
});





// 時刻を更新する関数
function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // フォーマットを調整（例: HH:MM:SS）
  const formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;

  // HTMLに表示
  document.getElementById('current-time').textContent = formattedTime;
}

// 0埋め関数
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// 1秒ごとに時間を更新
setInterval(updateTime, 1000);

// 初回表示
updateTime();

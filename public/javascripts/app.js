// アイコンデータ作成
let icon = 'image/web/rog.png';
// アルバムデータの作成
let album = [
  { src: 'images/web/ryusui.png', msg: '流水マップ'},
  { src: 'images/web/beku1.png', msg: 'ベクトル1'},
  { src: 'images/web/beku2.png', msg: 'ベクトル2'},
  { src: 'images/web/beku3.png', msg: 'ベクトル3'},
  { src: 'images/web/beku4.png', msg: 'ベクトル4'},
  { src: 'images/web/beku5.png', msg: 'ベクトル5'}
];

//定点カメラデータの作成
let side = [
  {src: 'images/web/ryusui.png', msg: '定点カメラ'},
  {src: 'images/web/ryusui.png', msg: '定点カメラ'},
  {src: 'images/web/ryusui.png', msg: '定点カメラ'},
  {src: 'images/web/ryusui.png', msg: '定点カメラ'},
  {src: 'images/web/ryusui.png', msg: '定点カメラ'},
  {src: 'images/web/ryusui.png', msg: '定点カメラ'}
];



// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let subImage = document.createElement('img');
subImage.setAttribute('src', side[0].src);
subImage.setAttribute('alt', side[0].msg);


// アイコンの表示
let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let subMsg = document.createElement('p');
subMsg.innerText = subImage.alt;

// 細かい表示位置調整

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);
console.log(mainFlame);

let subFlame = document.querySelector('#gallery2 .sub');
subFlame.insertBefore(subImage, null);
subFlame.insertBefore(subMsg, null);
console.log(subFlame);


//ドロップダウンメニューから画像を変更する
document.getElementById("thumbSelect").addEventListener("change", function() {
  var selector = document.getElementById("thumbSelect"); // ドロップダウンメニューのIDを取得します。
  var selectedValue = selector.options[selector.selectedIndex].value; // 選択された値を取得します。

  mainImage.src = album[selectedValue].src; // 選択された値に対応する画像を表示します。
  mainMsg.innerText = album[selectedValue].msg; // 選択された値に対応するメッセージを表示します。
});

document.getElementById("sidebybSelect").addEventListener("change", function() {
  var selector = document.getElementById("sidebybSelect"); // ドロップダウンメニューのIDを取得します。
  var selectedValue = selector.options[selector.selectedIndex].value; // 選択された値を取得します。

  subImage.src = album[selectedValue].src; // 選択された値に対応する画像を表示します。
  subMsg.innerText = album[selectedValue].msg; // 選択された値に対応するメッセージを表示します。
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

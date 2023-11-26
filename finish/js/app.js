
// アルバムデータの作成
let album = [
  { src: 'img/web/ryusui.png', msg: '流水マップ'},
  { src: 'img/web/beku1.png', msg: 'ベクトル1'},
  { src: 'img/web/beku2.png', msg: 'ベクトル2'},
  { src: 'img/web/beku3.png', msg: 'ベクトル3'},
  { src: 'img/web/beku4.png', msg: 'ベクトル4'},
  { src: 'img/web/beku5.png', msg: 'ベクトル5'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);


let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

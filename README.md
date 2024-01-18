これはWiconに使用予定のテスト段階のものになります
1/11   ローカル環境のみ,サーバ接続はできないが一応expressを使用

start
1.node.js及びexpressのダウンロードをしてください
node.js:https://nodejs.org/ja/download/
express:https://docs.npmjs.com/cli/init
2.コンソールでtestappフォルダに移動してください.
3.expressを導入するために以下を入力して実行してください。
npm install express-generator -g
確認のために以下を入力して表示されれば問題ありません。
express -h
４．コンソールで以下を入力して実行してください
cd testapp
npm install
5.コンソールで以下を入力して実行してください
cd testapp/view
npm start
6.ブラウザで以下を入力して実行してください
http://localhost:3000/
ページが表示されればOKです。

参考資料
https://www.profuture.co.jp/mk/column/51055

https://zenn.dev/wkb/books/node-tutorial


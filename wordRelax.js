var firstWord = 'リンゴ'; // 最初の文字を決める
var endWord = 'ン';

var body = document.body; // <body>を作る

var firstWordDiv = document.createElement('div'); // <div>作成
body.appendChild(firstWordDiv);　// <body>の中に<div>作成
firstWordDiv.textContent = firstWord;

var form = document.createElement('form'); // <form>作成
body.appendChild(form);　// <body>の中に<form>作成

var input = document.createElement('input'); // <input>作成
input.type = Text; // inputする値はtextで設定
var button = document.createElement('button'); // <button>作成
button.textContent = `button`; // 作成したボタンを表示
form.appendChild(input); // <body>の<form>の中に<input>を入れる
form.appendChild(button); // <body>の<form>の中に<button>を入れる

var result = document.createElement('div'); // 結果を表示させる<div>作成
body.appendChild(result); //<body>の中に<div>作成

var end =document.createElement('div');
body.appendChild(end);


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if ( firstWord[firstWord.length - 1] === input.value[0] ) { // 文字の最後の文字（左辺）と次の文字の最初の文字（右辺）が一緒だった場合
        result.textContent = 'OK';
    } else if ( input.value[0] === endWord ) {
               console.log(stop);
               end.textContent = 'FINISH';
    } else {
        result.textContent = 'NK';
    }
});

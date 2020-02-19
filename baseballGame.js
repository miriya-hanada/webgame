var body = document.body; // <body>を作る
var form = document.createElement('form'); // <form>作成
var 入力 = document.createElement('input'); // <input>作成
var 結果 = document.createElement('div'); // <div>作成
var ボタン = document.createElement('button'); // <button>作成
var 過程 = document.createElement('div'); // <div>作成

body.appendChild(form); // <body>の中に<form>作成
form.appendChild(入力); // <body>の<form>の中に<input>を入れる
body.appendChild(結果); // <body>の中に<div>作成
ボタン.textContent = 'ボタン';
form.appendChild(ボタン); // <body>の<form>の中に<button>を入れる
body.appendChild(過程); // <body>の中に<div>作成

// 入力.maxLength = 4;
入力.type = 'number'; // inputする文字は数値型だからnumber
var 数字入れ = [];

function 数字選択 () {
    var 数字たち = [1,2,3,4,5,6,7,8,9]; // 1~9使えるよと宣言
    for ( var i = 0; i < 4; i ++ ) { // その中でも4つの数字を使うよ宣言
        var 数字ランダム = 数字たち.splice(Math.floor(Math.random() * 数字たち.length), 1)[0];
        数字入れ.push(数字ランダム);
    }
    console.log(数字入れ);
    return 数字入れ;
}

数字選択();


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (入力.value === 数字入れ.join('')) { //
        結果.textContent = 'ゲーム終わり！';
        alert('初期化します。');
        数字入れ = [];
        数字選択();
    } else {
        var 入力配列 = 入力.value.split('');
        var strike = 0;
        var ball = 0;
        for ( var i = 0; i <4; i++) {
            if (Number(入力配列[i]) === 数字入れ[i]) {
                strike++;
            } else if (数字入れ.indexOf(Number(入力配列[i])) > -1 ) { 
                ball++;
            }
            過程.textContent = `strikeは${strike}、ballは${ball}`
        }
        var 間違い回数 =0;
    if (間違い回数 > 3) {
        結果.textContent = '3回間違えました。 正解は' + 数字入れ.join('') + 'でした。'
        数字入れ = [];
        数字選択();
        console.log(間違い回数);
    } else {
        結果.textContent = 'まだ。。';
    }
    }
});

var numberOne = Math.ceil(Math.random() * 9); // 〇*〇の値をランダムに出すための宣言
var numberTwo = Math.ceil(Math.random() * 9);

var sum = numberOne * numberTwo;

var process = document.createElement('div'); //　<div>の中に九九の過程を入れる
document.body.append(process); //　htmlの<body>部分に過程を表示させる
process.textContent = `${numberOne} * ${numberTwo} = ?`;

var form = document.createElement('form'); // 九九の答えを入力する<form>作成
document.body.append(form); // htmlのbody部分にフォームを表示させる

var input = document.createElement('input'); // <input>で値を入力する機能の取り入れる時createElementを使用
var button = document.createElement('button');// <button>機能追加
button.textContent = `button`; // 作成したボタンを表示
form.appendChild(input); //  <body>の<form>の中に<input>を入れる
form.appendChild(button); // <body>の<form>の中に<button>を入れる

var result = document.createElement('div'); // 結果を表示させる<div>作成
document.body.append(result); // <body>の中に<div>作成

var count = 0;


form.addEventListener('submit', function (e) { //ボタンを押したとき結果表示
    if ( count === 5) { // ５回目にリセット
        return;
    }
    e.preventDefault(); //結果が止まって表示されない変数を止める呪文
    if ( numberOne * numberTwo === Number(input.value) ) { // 左辺は数字、右辺は文字となってるからnumberを使用し=にする
        result.textContent= 'OK';
        abc (); // function abcの中にソースを入れたのを呼び出し
    } else {
        result.textContent= 'NK';
        abc ();
    }
});

function abc () {
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    process.textContent = `${numberOne} * ${numberTwo} = ?`;
    input.value = '';
    count+=1;
    console.log(stop, count);
}



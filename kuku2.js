var numberOne = Math.ceil(Math.random() * 9); // kukuと同じソース取り入れる
var numberTwo = Math.ceil(Math.random() * 9);

var sum = numberOne * numberTwo;

var process = document.querySelector('#process'); // htmlで定義されたタグを取り入れる時querySelectorを使用
var form = document.querySelector('#formTag');
var inputNumber = document.querySelector('#inputNumber')
var count = 0;
process.textContent = `${numberOne} * ${numberTwo} = ?`; // <body>の<div>の<form>の中に表示

form.addEventListener('click', function (e) {
    e.preventDefault();
    if ( numberOne * numberTwo === Number(inputNumber.value) ) { // 左辺は数字、右辺は文字となってるからnumberを使用し=にする
        result.textContent= 'OK';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        process.textContent = `${numberOne} * ${numberTwo} = ?`;
        inputNumber.value = '';
        count+=1;
        console.log(stop, count);
    } else {
        result.textContent= 'NK';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        process.textContent = `${numberOne} * ${numberTwo} = ?`;
        inputNumber.value = '';
        count+=1;
        console.log(stop, count);
    }


});

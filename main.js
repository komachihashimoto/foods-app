'use strict';

const textBox = document.getElementById('textBox');

document.getElementById("selectBtn").addEventListener("click", function() {
  let genre = ["寿司", "ラーメン", "焼肉", "イタリアン", "中華", "カレー", "天ぷら", "うどん", "そば",
  "ハンバーガー", "ピザ","韓国料理","ファミレス","牛丼","かつ丼","ハンバーグ","オムライス"];
  let foods = [];
  for(let i = 0; i < 3; i++){
      let index = Math.floor(Math.random() * genre.length);
      foods.push("・" + genre[index]);
      genre.splice(index, 1);
  };
  textBox.innerText = foods.join('\n');
});
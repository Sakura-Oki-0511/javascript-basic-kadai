// ボタンとテキストを取得
let button = document.getElementById('btn');
let text = document.getElementById('text');

// ボタンがクリックされた時のイベントリスナー
button.addEventListener('click', function() {
    // テキストを書き換える
    text.textContent = "ボタンをクリックしました";
});
// ボタンとテキストを取得
let button = document.getElementById('btn');
let text = document.getElementById('text');

// ボタンがクリックされた時のイベントリスナー
button.addEventListener('click', function() {
    // 2秒後にテキストを書き換える
    setTimeout(function() {
        text.textContent = "ボタンをクリックしました";
    }, 2000); // 2000ミリ秒 = 2秒
});
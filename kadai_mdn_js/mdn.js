// 今日の日付を取得
let today = new Date();

// 年、月、日を取得
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月は0から始まるので+1
let day = today.getDate();

// 指定の形式で日付を表示
let formattedDate =`${year}年${month}月${day}日`;

console.log(formattedDate);
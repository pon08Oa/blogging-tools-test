// XMLHttpRequestを使ってjsonデータを読み込む
let requestURL = 'data.json';//jsonへのパス
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
 
// JSONデータをJavaScriptオブジェクトに変換
request.onload = function () {
  let data = request.response;
  data = JSON.parse(JSON.stringify(data));
  dataArray(data);
}
 
// foreachでJSONデータをHTMLに出力
function dataArray(els) {
  // JSONデータを出力したいHTML要素を指定
  let array = document.querySelector('.array');
  els.forEach(el => {
    let name = el.name;
    let school_year = el.school_year;
    let japanese = el.test.japanese;
    let english = el.test.english;
    let code = '<ul>'+
    '<li>名前：' + name + '</li>'+
    '<li>学年：' + school_year + '年</li>'+
    '<li>国語：' + japanese + '点</li>'+
    '<li>英語：' + english + '点</li>'+
    '</ul>';
    array.insertAdjacentHTML('beforeend',code);
  });
}
function add(a, b) {
  return a + b;
}

let addCurry = curry(add);

addCurry(1)(2);

function ajax(type, url, data) {
  let xml = new XMLHttpRequest();
  xml.open(type, url, true);
  xml.send(data);
}

ajax("POST", "www.baidu.com", 'name="wn"');
ajax("POST", "www.baidu1.com", 'name="wn"');
ajax("POST", "www.baidu2.com", 'name="wn"');


//利用curry
let ajaxCurry = curry(ajax)

//以post类型请求
let post = ajaxCurry('POST')
// post('www.baidu.com', 'name="wn"')

let postFormTest = post('www.baidu.com')
postFormTest('name="wn"')



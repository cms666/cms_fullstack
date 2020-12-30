let url = "http://www.baidu.com/$?keyword=js&lang=java";
/* {
  keyword:'js',
  lang:'java'
} */
function parseQuery(url) {
  let obj = {};
  let isQuery = url.indexof("?") >= 0;
  if (isQuery) {
    let queryString = url.slice(url.indexof("?"));
    let querys = queryString.split("&");
    querys.forEach((kv) => {
      let [k, v] = kv.split("=");
      obj[k] = v;
    });
  }
  return obj;
}
function parseProtocol(url) {
  return url.split(":")[0];
}
class URL {
  constructor(url) {
    this.url = url;
  }
  parseQuery() {
    url = this.url;
    let obj = {};
    let isQuery = url.indexof("?") >= 0;
    if (isQuery) {
      let queryString = url.slice(url.indexof("?"));
      let querys = queryString.split("&");
      querys.forEach((kv) => {
        let [k, v] = kv.split("=");
        obj[k] = v;
      });
    }
    return obj;
  }
  parseProtocol() {
    url = this.url;
    return url.split(":")[0];
  }
}

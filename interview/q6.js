var END = Math.pow(2,53)

var START = END - 100
var count = 0
for(var i = START; i <= END;i++){
  count++
}
console.log(count); //for 无限执行  js最大数限制i
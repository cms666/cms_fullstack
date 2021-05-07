/* 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。 */
var generate = function(numRows) {
  let rowarr=[]
  for(let i =0;i<numRows;i++){
    let row=[1]
    for(let j=1;j<i;j++){
      row.push(rowarr[i-1][j-1]+rowarr[i-1][j])
    }
    if(i>=1){
      row.push(1)
    }
    rowarr.push(row)
  }
  return rowarr
}
console.log(generate(5));
function showCase(value){
  switch ( value){ //switch 内部使用严格模式 === 进行判断
    case 'A':
      console.log('case A');
      break;
    case 'B':
      console.log('case B');
      break;
    case 'C':
      console.log('case C');
      break;
    case undefined:
      console.log('case undefined');
      break;
    default:
      console.log('do not know');
  }
}
showCase(new String('A')) //{A}
showCase(String('A'))  //'A'
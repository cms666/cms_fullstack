/* function test(){
  var food = 'apple'
  function a(){
    console.log(food);
    food='banana'
  }
}
function b(){
  console.log(food);
} */



function fruit(){
  var food='apple'
  var obj={
    eatfood:function(){
      if(food!=''){
        console.log('I am eating ' + food);
        food=''
      }else{
        console.log('nothing');
      }
    },
    pushfood:function(myfood){
      food = myfood
    }
  }
  return obj
}
var person = fruit()
person.eatfood()
person.eatfood()
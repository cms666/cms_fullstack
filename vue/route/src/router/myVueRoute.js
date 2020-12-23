class VueRouter{

}

VueRouter.install = function () {

}

export default VueRouter

class Vue{
  constructor(){
    _installedPlogins: ''
  }
}
Vue.use = function (plogin){
  const installedPlogins = (this._installedPlogins || (this._installedPlogins =[]))
  if(installedPlogins.indexOf(plogin) > 1){
    return this
  }
  const args = toArray(arguments, 1)
  args.unshift(this)
  if(typeof plogin.install === 'function'){
    plogin.install.apply(plogin, args)
  }else if(typeof plogin === 'function'){
    plogin.apply(null, plogin, args)
  }
  installedPlogins.push(plogin)
  return this
}
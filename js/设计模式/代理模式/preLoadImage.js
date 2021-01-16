class PreLoadImage{
  //占位图
  // static LOADING_RUL = 'XXX'

  constructor(imgNode){
    this.imgNode = imgNode
  }

  setSrc(imgUrl){
    // this.imgNode.src = PreLoadImage.LOADING_RUL

    // const image = new Image()
    // image.src = targetUrl
    // image.onload = ()=>{  //targetUrl 已缓存
      this.imgNode.src = imgUrl
    // }
  }
}

class ProxyImage {
   static LOADING_RUL = 'XXX'

  constructor(targetImage){
    this.targetImage = targetImage
  }

  setSrc(targetUrl){
    this.targetImage.setSrc(ProxyImage.LOADING_URL)

    const virtualImage = new Image()
    virtualImage.onload = () =>{
      this.targetImage.setSrc(targetUrl)
    }
    virtualImage.src = targetUrl
  }
}
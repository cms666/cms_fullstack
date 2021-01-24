const base = (img) =>{
  wx.getFileSystemManager().readFileSync(img, "base64")
}

export default base
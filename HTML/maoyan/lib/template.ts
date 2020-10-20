interface Movie{
  src:string
  title:string
  desc:string
}
type IMovieListFunc = (Movies:Movie) => string
const getMovieListTemplate :IMovieListFunc = (Movies) =>`
<a href="javascript:" class="weui-media-box weui-media-box_appmsg">
<div class="weui-media-box__hd">
    <img class="weui-media-box__thumb" src="${Movies.src}" alt="">
</div>
<div class="weui-media-box__bd">
    <h4 class="weui-media-box__title">${Movies.title}</h4>
    <p class="weui-media-box__desc">${Movies.desc}</p>
</div>
</a>
`
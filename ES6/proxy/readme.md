# defineProperty 和 proxy 的区别 
defineProperty 只能定义属性的读(get)和写(set)，proxy可以定义属性的更多行为，比如in，delete...

let proxy = new Proxy(target, handle)
target: 要拦截的目标对象
handle：一个对象，用来定制拦截行为
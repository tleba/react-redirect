## react 重定向跳转页面（redirect）
* 通过onClick点击事件触发，修改state中的redirect字段，在render中判断当前redirect是否为空，若为空则不处理，若有值则跳转至对应页面。
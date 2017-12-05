import './index.css'
import Icon from './image/01-find.png'
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(y)
function component() {
  var element = document.createElement('div')
  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)
  return element;
}
document.write('<h1 style="font-size: 1rem">前端主页</h1>')
document.body.appendChild(component());


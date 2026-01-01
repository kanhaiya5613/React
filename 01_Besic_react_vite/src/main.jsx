import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Kanhaiya from './Kanhaiya.jsx'
import { Children } from 'react'
function myApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'click me to visit google'
)
// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

ReactDOM.createRoot(document.getElementById('root')).
render(
  <App/>
)

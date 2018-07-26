import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tesseract from 'tesseract.js'


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}



// 函数式申明组件
const HelloWorld = ({name}) =>{
  const sayHi = (event) => {
    alert(`Hi ${name}`)
  }

  return (
    <div>
      <a href="/" onClick={sayHi}>Say hi</a>
    </div>
  )
}

HelloWorld.propTypes = {

}


ReactDOM.render(<ShoppingList/>,document.getElementById('root'))

export default ShoppingList;
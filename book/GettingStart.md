# 组件

#### 在react中所有的内容都可以通过组件的形式表示，并且有许多不同类型对组件。在这里我们从`React.Component`这个基类开始

```jsx
import React from 'react'
import autoBind from 'autobind-decorator';

class ShoppingList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show : false,
    }

    /**
     * 注意如果没有绑定this，在调用是会丢失函数的this指向 
     */
    this.show = this.show.bind(this);
  }

  show(show){
    this.setState({show});
  }

  @autoBind
  hide(){
    this.setState({show:false});
  }

  render() {
    return (
      <div className="shopping-list" onClick={this.show} >
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

// Example usage: <ShoppingList name="Mark" />
```
一个组件有他自己的属性我们称之为props，组件通过render方法来渲染页面内容，返回的内容使用的就是jsx的语法，JSX的语法的作用就是实现React.createElement

```jsx
// ShoppingList 组件中的render方法实际实现的是createElement方法
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```
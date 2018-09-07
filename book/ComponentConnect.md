# 组件之间相互通信

父 -> 子
```jsx
class Son extends React.Component {
  render() {
    return (
      <div>{props.memo}</div>
    );
  }
}

class Father extends React.Component {
  return (){
    return (
      <div>
        <Son memo="Hello World" />
      </div>
    )
  }
}
```

子 -> 父
```jsx
class Son extends React.Component {
  render() {
    return (
      <div onClick={()=>{
        this.props.changeHandle('我在子类改变了父类的属性');
      }}>改变父类状态</div>
    );
  }
}

class Father extends React.Component {
  constructor(){
    super(props);
    this.state({
      memo:'Hello World',
    })
  }

  changeMemo(memo){
    this.setState({memo});
  }

  render(){
    return (
      <div>
        <Son memo="Hello World"
          changeHandle={this.changeMemo}
        />
      </div>
    )
  }
}
```

子 -> 子
```jsx
class Son1 extends React.Component {
  render() {
    return (
      <div>{this.props.memo}</div>
    );
  }
}

class Son2 extends React.Component {
  render() {
    return (
      <div onClick={()=>{
        this.props.changeHandle('我在子类改变了父类的属性');
      }}>改变父类状态</div>
    );
  }
}

class Father extends React.Component {
  constructor(){
    super(props);
    this.state({
      memo:'Hello World',
    })
  }

  changeMemo(memo){
    this.setState({memo});
  }

  render(){
    return (
      <div>
        <Son1 memo="Hello World"/>
        <Son2 changeHandle={this.changeMemo}/>
      </div>
    )
  }
}
```

祖父 -> 子孙
典型代表 `Redux` 和 `Mobx`
# 生命周期函数

#### 第一次Render

> getDefaultProps
> getInitialState
> componentWillMount
> render
> componentDidMount

#### Props 改变
> componentWillReceiveProps
> shouldComponentUpdate
> componentWillUpdate
> render
> componentDidUpdate

#### State 改变
> shouldComponentUpdate
> componentWillUpdate
> render
> componentDidUpdate

#### 组件卸载
> componentWillUnmount


```jsx
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'autobind-decorator';
import Api from './api';

class HelloWorld extends React.Component {

  // getDefaultProps
  static defaultProps = {
    memo: 'Hello World',
  }

  static propTypes = {
    memo: PropTypes.string,
  }


  constructor(props){
    super(props);
    // getInitialState
    this.state = {
      tick : 0,
    }
  }

  tickHandle(){
    const { tick } = this.state;

    this.timer = setInternal(()=>{
      this.setState({tick: tick + 1});
    },1000)
  }

  // 无法使用setState()重新渲染
  componentWillMount(){}

  componentWillReceiveProps(){}

  shouldComponentUpdate(){
    const { tick } = this.state;
    return tick < 10;
  }

  componentWillUpdate(){}

  componentDidUpdate(){}

  componentDidMount(){
    Api.getUserInfo((data)=>{});
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    const { memo } = this.props;
    const { tick } = this.state;

    return (
      <div className="demo" >
        <p>{memo}</p>
        <div>计数：{tick}<div>
      </div>
    );
  }
}
```

## 还有一种无状态组件，如果只是单纯渲染，可以使用这个

```jsx
const statelessComponent = (props) => <div>{props.children}</div>
statelessComponent.propType = {
  ...
}
```
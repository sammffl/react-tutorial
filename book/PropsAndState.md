# Props & State
#### props
组件的属性，他是从父组件传入的数据，必须要记住props是只读的

props属性的两种显示
```jsx
class Son extends React.Component {
  render() {
    const {data} = this.props;


    return (
      <div>
        <p>{data.test}</p>
        <p>{this.props.children}</p>
      </div> 
    );
  }
}

// 父组件
class Father extends React.Component {
  render() {
    return (
      <div>
        <Son data={test:1}>
          <p>p 标签的内容会存放在 this.props.children</p>
        </Son>
      </div>
    );
  }
}
```

属性默认值

```jsx
Son.defaultProps = {
  data: { 
    test: 0
  }
};

```


对属性做类型验证
```jsx
import PropTypes from 'prop-types';

Son.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired

};
```


#### state
相对于props的不可变，state因为它的灵活可变可能会导致页面的未知错误，所以一定要区分state和props的使用场景

state主要用于改变组建自身的状态，类似页面中与用户交互的部分，绝对不要把需要展示的业务数据存入state中，项目后期有无法预计的不可控性，并且代码可读性特别差


```jsx
class Foo extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      flag: true,
    };
  }

  render() {
    const {flag} = this.state;


    return (
      <div>
        {!!flag && <button>submit</button>}
      </div> 
    );
  }
}
```
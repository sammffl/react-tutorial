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
import React from 'react';
import {ThemeContext, themes} from './theme-context';

class Item extends React.Component {

  componentDidMount(){

  }

  render() {
    const {data, children} = this.props;
    console.log(this.props)
    return (
      <div>{data.text}</div>
    )
  }
}

export default props => (
  <ThemeContext.Consumer>
    {d => <Item {...props} data={d}/>}
  </ThemeContext.Consumer>
);
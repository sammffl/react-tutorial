import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContext, themes} from './theme-context';

export default class Section extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          context => {
            return (
              <div>
                <p>{context.text}</p>
                <div>{this.props.children}</div>
              </div>  
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
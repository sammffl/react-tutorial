import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeContext, themes} from './theme-context';
import Section from './Section';
import Item from './item';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <ThemeContext.Provider value={{text: 'Hi, my baby'}}>
        <Section>
          <Item />
        </Section>
        </ThemeContext.Provider>
      </div>
    );
  }
}


ReactDOM.render(<ShoppingList/>,document.getElementById('root'))

export default ShoppingList;
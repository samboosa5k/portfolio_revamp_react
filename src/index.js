import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window';
import Menu from './components/Menu';
import './index.scss';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      page: 'home',
      menuItems: ['home', 'skills', 'projects', 'about', 'contact'],

    }
    this.switchPage = this.switchPage.bind( this );
  }

  switchPage( pageName ) {
    this.setState( { page: pageName } );
  }

  render() {
    return (
      <>
        <Menu
          handleMenu={this.switchPage}
          menuItems={this.state.menuItems}
        />

        <Window
          page={this.state.page}
          path={'content/all.json'} />
      </>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );

import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window';
import './index.css';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      page: '',
      content: []
    }
  }

  componentDidMount() {
    this.setState( { page: 'skills' } );
  }

  render() {
    return (
      <>
        {
          <Window
            page={this.state.page}
            content={this.state.content}
            path={'content/' + this.state.page + '.json'} />
        }
      </>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );

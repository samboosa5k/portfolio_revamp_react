import React from 'react';

class Home extends React.Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        fetch( 'content/home.json' )
            .then( response => response.json() )
            .then( data => {
                this.setState( { content: data, currentPage: this.props.page } );
            } );
    }

    componentDidUpdate() {
        ( this.state.content === '' ) ?
            this.setState( { content: this.props.content } ) : console.log( 'Child already has state' );
    }

    render() {
        let windowContent = 'Loading...';
        if ( this.state.content !== '' ) {
            windowContent = this.state.content.content.map( item => (
                <p>{item}</p>

            ) )
        }
        return (
            <>
                <h4>{this.state.content['title']}</h4>
                {windowContent}

            </>
        );
    }
}

export default Home;
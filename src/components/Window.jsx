import React from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Window extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            content: ''
        }
    }

    componentDidUpdate() {
        ( this.state.content === '' ) ?
            fetch( this.props.path )
                .then( response => response.json() )
                .then( data => {
                    this.setState( { content: data[this.props.page] } );
                } ) : console.log( 'already updated' );
    }

    render() {
        return (
            <>
                {
                    ( () => {
                        switch ( this.props.page ) {
                            case 'home':
                                return <Home content={this.state.content} />;
                            case 'skills':
                                return <Skills content={this.state.content} />;
                            case 'projects':
                                return <Projects content={this.state.content} />;
                            case 'about':
                                return <About content={this.state.content} />;
                            case 'contact':
                                return <Contact content={this.state.content} />;
                            default:
                                console.log( this.props.page );
                        }
                    } )()
                }
            </>
        );
    }
}

export default Window;
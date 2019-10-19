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
            content: '',
            currentPage: ''
        }
    }

    componentDidUpdate( nextProps ) {
        ( this.state.currentPage !== nextProps.page ) ?
            fetch( this.props.path )
                .then( response => response.json() )
                .then( data => {
                    this.setState( { content: data } );
                } ) : console.log( 'already updated' );
    }

    render() {
        return (
            <>
                {
                    ( () => {
                        switch ( this.props.page ) {
                            case 'home':
                                return <Home
                                    content={this.state.content[this.props.page]}
                                    page={this.props.page}
                                />;
                                break;
                            case 'skills':
                                return <Skills
                                    content={this.state.content[this.props.page]}
                                    page={this.props.page}
                                />;
                                break;
                            case 'projects':
                                return <Projects
                                    content={this.state.content[this.props.page]}
                                    page={this.props.page}
                                />;
                                break;
                            case 'about':
                                return <About
                                    content={this.state.content[this.props.page]}
                                    page={this.props.page}
                                />;
                                break;
                            case 'contact':
                                return <Contact
                                    content={this.state.content[this.props.page]}
                                    page={this.props.page}
                                />;
                                break;
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
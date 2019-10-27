import React from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import TitleBar from './subcomponents/TitleBar';
import ConsoleText from './subcomponents/ConsoleText';

class Window extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            content: '',
            currentPage: '',
        }
    }

    componentDidMount() {
        fetch( this.props.path )
            .then( response => response.json() )
            .then( data => {
                this.setState( { content: data, currentPage: this.props.page } );
            } );
    }

    componentDidUpdate() {
        if ( this.state.currentPage !== this.props.page ) {
            this.setState( { currentPage: this.props.page } );
        }
    }

    render() {
        return (
            <div className="window">
                <TitleBar page={this.props.page} />
                <div className="window__content">
                    <ConsoleText content={this.state.content['miscellaneous']} />
                    {
                        ( () => {
                            switch ( this.props.page ) {
                                case 'home':
                                    return <Home
                                        content={this.state.content[this.props.page]}
                                        page={this.props.page}
                                    />;
                                case 'skills':
                                    return <Skills
                                        content={this.state.content[this.props.page]}
                                        page={this.props.page}
                                    />;
                                case 'projects':
                                    return <Projects
                                        content={this.state.content[this.props.page]}
                                        page={this.props.page}
                                    />;
                                case 'about':
                                    return <About
                                        content={this.state.content[this.props.page]}
                                        page={this.props.page}
                                    />;
                                case 'contact':
                                    return <Contact
                                        content={this.state.content[this.props.page]}
                                        page={this.props.page}
                                    />;
                                default:
                                    console.log( this.props.page );
                            }
                        } )()
                    }
                </div>
            </div>
        );
    }
}

export default Window;
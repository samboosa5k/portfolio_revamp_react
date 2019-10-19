import React from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';

class Window extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            content: ''
        }
    }

    componentDidUpdate() {
        console.log( this.props.path );
        /* ( this.state.content === '' ) ?
            fetch( this.props.path )
                .then( response => response.json() )
                .then( data => {
                    const useableData = {
                        'title': data['title'],
                        'image': data['image'],
                        'layout': data['layout'],
                        'url': data['url'],
                        'content': data['content'],
                    };
                    this.setState( { content: useableData } );
                } ) : console.log( 'already updated' ); */
    }

    render() {

        return (

            <>
                {
                    ( this.props.page === 'home' ) ?
                        <Home content={this.state.content} /> :
                        ( this.props.page === 'skills' ) ?
                            <Skills content={this.state.content} /> :
                            <About content={this.state.content} />
                }
                {/* {
                    ( this.props.page === 'home' ) ?
                        <Home content={this.state.content} /> :

                        ( this.props.page === 'skills' ) ?
                            <Skills content={this.state.content} /> :

                            ( this.props.page === 'about-me' ) ?
                                <About content={this.state.content} /> :

                                ( this.props.page === 'projects' ) ?
                                    <Projects content={this.state.content} /> :

                                    <Contact content={this.state.content} />
                } */}
            </>
        );
    }
}

export default Window;
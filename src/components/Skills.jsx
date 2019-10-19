import React from 'react';

class Skills extends React.Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.state = {
            content: ''
        }
    }

    componentDidUpdate() {
        ( this.state.content === '' ) ?
            this.setState( { content: this.props.content } ) : console.log( 'Child already has state' );
    }

    componentWillUnmount() {
        this.setState( { content: '' } )
    }

    render() {
        return (
            <>
                <h1>{this.state.content['title']}</h1>
                <p>{this.state.content['content']}</p>
            </>
        );
    }
}

export default Skills;
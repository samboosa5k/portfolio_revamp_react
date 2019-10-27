import React from 'react';

class About extends React.Component {
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

    render() {
        let windowContent = 'Loading...';
        if ( this.state.content !== '' ) {
            windowContent = this.state.content.content.map( ( item, key ) => (
                <>
                    <p>{item}</p>
                </>
            ) )
        }

        return (
            <>
                <h4>{this.state.content['title']}</h4>
                {/* <p>{this.state.content['content']}</p> */}
                {windowContent}
            </>
        );
    }
}

export default About;
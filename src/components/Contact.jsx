import React from 'react';

class Contact extends React.Component {
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
                    <p key={key}>{item}             <a href="#">LINK</a></p>
                </>
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

export default Contact;
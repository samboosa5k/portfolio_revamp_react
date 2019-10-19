import React from 'react';

class Contact extends React.Component {
    constructor( props ) {
        super( props );
        this.props = props;
    }

    render() {
        return (
            <>
                <h1>{this.props.content.title}</h1>
                <p>{this.props.content.content}</p>
            </>
        );
    }
}

export default Contact;
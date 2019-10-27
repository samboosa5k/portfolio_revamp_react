import React from 'react';

class ConsoleText extends React.Component {
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
        return (
            <>
                <div className="window__commandLineText">
                    {this.state.content['consoleText1']}
                    <br />
                    {this.state.content['consoleText2']}
                    <br />
                </div>
            </>
        );
    }
}

export default ConsoleText;
import React from 'react';

class TitleBar extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            selected: ''
        }
    }

    render() {
        return (
            <>

                <div className="window__titleBar"><img src="content/img/icon.png" alt="smiley_icon" /><span>./{this.props.page}.jsx - Jasper Verbon</span></div>
            </>
        );
    }
}

export default TitleBar;
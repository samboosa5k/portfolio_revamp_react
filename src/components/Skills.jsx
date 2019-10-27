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

    /*   componentWillUnmount() {
          this.setState( { content: '' } )
      }
   */

    render() {
        let windowContent = 'Loading...';
        if ( this.state.content !== '' ) {
            windowContent = this.state.content.content.map( ( item, key ) => (
                ( item.indexOf( '<' ) === -1 ) ?
                    <p key="key" style={{
                        marginLeft: "4rem", color: "rgb( " + ( 255 / key * 4 ) + ", 255," + 255 / key * 10 + " )"
                    }
                    } className="content__list" > {item}</p>
                    :
                    <p key="key" style={{ color: "white" }} className="content__list" > {item}</p>

            ) )
        }
        return (
            <>
                <h4 className="content__title">{this.state.content['title']}</h4>
                {windowContent}
            </>
        );
    }
}

export default Skills;
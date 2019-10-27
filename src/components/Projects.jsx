import React from 'react';

class Projects extends React.Component {
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
                    <div key={key} className="projects-title">
                        <p>###############################</p>
                        <a className="projects-link" href={this.state.content.url[key]}><p>{this.state.content.header[key]}</p></a>
                        <p>###############################</p>
                        <div className="projects-skills"><p>SKILLS: {this.state.content.languages[key]}</p></div>
                    </div>
                    <div key={key} className="projects-section">
                        <img className="projects-section__image" src={this.state.content.image[key]} />
                        <div>
                            {item.split( "|" ).map( ( elem, key ) => (
                                <p className="elem">{elem}</p>
                            ) )}

                        </div>
                    </div>
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

export default Projects;
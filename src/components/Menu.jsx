import React from 'react';

class Menu extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            selected: ''
        }
    }

    handleMenuClick( e, pageName ) {
        e.preventDefault();
        this.props.handleMenu( pageName );
    }

    render() {
        return (
            <>
                <a onClick={( e ) => this.handleMenuClick( e, 'home' )} href="/home"><span>Home</span></a>

                <a onClick={( e ) => this.handleMenuClick( e, 'skills' )} href="/skills"><span>Skills</span></a>

                <a onClick={( e ) => this.handleMenuClick( e, 'projects' )} href="/projects"><span>Projects</span></a>

                <a onClick={( e ) => this.handleMenuClick( e, 'about' )} href="/about"><span>About</span></a>

                <a onClick={( e ) => this.handleMenuClick( e, 'contact' )} href="/contact"><span>Contact</span></a>
            </>
        );
    }
}

export default Menu;
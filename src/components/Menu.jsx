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
        this.setState( { selected: pageName } );
        this.props.handleMenu( pageName );
    }

    render() {
        return (
            <>
                <a className={this.state.selected === 'home' ? 'menu-button__selected' : 'menu-button'}
                    onClick={( e ) => this.handleMenuClick( e, 'home' )} href="/home">
                    <span>Home</span>
                </a>

                <a className={this.state.selected === 'skills' ? 'menu-button__selected' : 'menu-button'}
                    onClick={( e ) => this.handleMenuClick( e, 'skills' )} href="/skills">
                    <span>Skills</span>
                </a>

                <a className={this.state.selected === 'projects' ? 'menu-button__selected' : 'menu-button'}
                    onClick={( e ) => this.handleMenuClick( e, 'projects' )} href="/projects">
                    <span>Projects</span>
                </a>

                <a className={this.state.selected === 'about' ? 'menu-button__selected' : 'menu-button'}
                    onClick={( e ) => this.handleMenuClick( e, 'about' )} href="/about">
                    <span>About</span>
                </a>

                <a className={this.state.selected === 'contact' ? 'menu-button__selected' : 'menu-button'}
                    onClick={( e ) => this.handleMenuClick( e, 'contact' )} href="/contact">
                    <span>Contact</span>
                </a>
            </>
        );
    }
}

export default Menu;
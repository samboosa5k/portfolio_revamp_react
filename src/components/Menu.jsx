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
            <div className="menu">
                {
                    this.props.menuItems.map( ( item, index ) => (
                        <a key={index} className={this.state.selected === item ? 'menu-button__selected' : 'menu-button'}
                            onClick={( e ) => this.handleMenuClick( e, item )} href={"/" + item}>
                            <span>{item}</span>
                        </a>
                    ) )
                }
            </div>
        );
    }
}

export default Menu;
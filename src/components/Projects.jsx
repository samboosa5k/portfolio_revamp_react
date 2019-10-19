import React from 'react';

class Window extends React.Component {
    constructor( props ) {
        this.props = props;
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <>
                <h1 className="content_title">{this.props.title}</h1>
                {


                    ( this.props.image !== null ) ?
                        <img src={this.props.image} alt={this.props.url + "_image"} className="content_image" /> :
                        <>
                            {
                                this.props.image.map( ( image, index ) => (
                                    <img src={image} alt={image[index].url + "_image_" + index} className="content_image" />
                                ) )
                            }
                        </>


                }
            </>
        );
    }
}

export default Window;
import React from 'react';

export default class MovieItem extends React.Component {

    render(){
        // 1. Use props (properties) to obtain movie parameters
        const movie = this.props.movie;
        const isRecommended = this.props.recommended;

        let bgColor = "transparent";
        if (isRecommended){
            bgColor = "#FFE050";
        }
        
        // 2. Return a graphical representation of the MovieItem (some HTML)
        return <div style={{backgroundColor: bgColor}}>
            <img src={movie.img} />
            {movie.title} ({movie.year})
        </div>;
    }

}
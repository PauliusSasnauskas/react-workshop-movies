import React from 'react';

export default class MovieItem extends React.Component {

    render(){
        const movie = this.props.movie;
        const isRecommended = this.props.recommended;

        let bgColor = "transparent";
        if (isRecommended){
            bgColor = "#FFE050";
        }
        
        return <div style={{backgroundColor: bgColor}}>
            <img src={movie.img} />
            {movie.title} ({movie.year})
        </div>;
    }

}
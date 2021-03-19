import React from 'react';

export default class MovieItem extends React.Component {

    render(){
        // 1. Use props (properties) to obtain movie parameters
        const movie = this.props.movie;
        
        // 2. Return a graphical representation of the MovieItem (some HTML)
        return <div>
            <img src={movie.img} />
            {movie.title} ({movie.year})
        </div>;
    }

}
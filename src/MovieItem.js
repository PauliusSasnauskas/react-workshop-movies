import React from 'react';

export default class MovieItem extends React.Component {

    // 1. Define an initial state
    constructor(props){
        super(props);
        
        this.state = {
            isWatched: false
        }
    }

    // 3. Define a function which changes the state
    changeWatched(){
        console.log("Changed!");
    }

    render(){
        const movie = this.props.movie;
        const isRecommended = this.props.recommended;

        // 4. Change the appearance of the component whether it is watched or not
        let bgColor = "transparent";
        if (isRecommended){
            bgColor = "#FFE050";
        }
        
        // 2. Add a checkbox with an onChange function

        return <div style={{backgroundColor: bgColor}}>
            <input type="checkbox" checked={this.state.isWatched} onChange={this.changeWatched} />
            <img src={movie.img} />
            {movie.title} ({movie.year})
        </div>;
    }

}
import React from 'react';

export default class MovieItem extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            isWatched: false
        }

        this.changeWatched = this.changeWatched.bind(this);
    }

    changeWatched(){
        this.setState((oldState) => {
            return { isWatched: !oldState.isWatched };
        })
    }

    render(){
        const movie = this.props.movie;
        const isRecommended = this.props.recommended;

        let bgColor = "transparent";
        if (isRecommended){
            bgColor = "#FFE050";
        }
        if (this.state.isWatched){
            bgColor = "#AAAAAA";
        }

        return <div style={{backgroundColor: bgColor}}>
            <input type="checkbox" checked={this.state.isWatched} onChange={this.changeWatched} />
            <img src={movie.img} />
            {movie.title} ({movie.year})
        </div>;
    }

}
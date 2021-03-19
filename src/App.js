import React from 'react';
import './App.css';
import MovieItem from './MovieItem';

export default class App extends React.Component {

  render(){
    const movies = [
      { id: 1, title: "Forrest Gump", year: 1994, img: "posters/forrest-gump.jpg" },
      { id: 2, title: "Chain Reaction", year: 1996, img: "posters/chain-reaction.jpg" },
      { id: 3, title: "Tom and Jerry", year: 2021, img: "posters/tomnjerry.jpg" },
      { id: 4, title: "Bohemian Rhapsody", year: 2018, img: "posters/bohemianrhapsody.jpg" },
      { id: 5, title: "Spider-Man 3", year: 2007, img: "posters/spooderman3.jpg" },
      { id: 6, title: "La La Land", year: 2016, img: "posters/lalala.jpg" },
    ];

    const recommendedMovies = [1, 4, 6];
    
    const movieItems = [];
    for (let i = 0; i < movies.length; i++){
      const isMovieRecommended = recommendedMovies.includes(movies[i].id);

      movieItems.push(<MovieItem movie={movies[i]} recommended={isMovieRecommended} />);
    }

    return (
      <div>

        {movieItems}
        
      </div>
    );
  }
}
# Your task:
- Show a list of movies to the user.
- Each movie item should show its poster image, title and year.
- The movies which are recommended (defined in the recommendedMovies array, let's say they come from another data source, like a database) should be highlighted in a color and style of your choice.
The result should look something like shown in `TASK RESULT.png`


## Hints
Start with MovieItem.js.
Create a component for the movie item. The movie item component should take in props (properties) - a movie object as a whole, or the poster image, title, and year separately. The component should handle how the movie is represented to the user.
Then, in App.js, add a loop iterating the movies array and adding a MovieItem element. These elements should be returned in the render method.
To differentiate which movies should be highlighted, add another property to the component. The component should then check if the property is active, and style (highlight) the movie item accordingly.

## Additional tasks
- Display the movies sorted by year
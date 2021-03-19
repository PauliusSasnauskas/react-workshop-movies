# Your task
Add checkboxes which show which movies have been watched.
The movies with checked checkboxes should be a different color (of your choice) than the rest
The result should look something like shown in `TASK2 RESULT.png`

## Hints
In MovieItem.js define an initial state (this can be a property called isWatched, which is initially false).
Add the checkbox to the component. The checkbox should have a checked property and an onChange function. You can define this function and call it changeWatched.
The changeWatched function should change the state of the isWatched variable (note: use setState).
If you used a class function, you might need to add the bind code for the function to work.

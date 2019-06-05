import { movies } from './data.json';

// Write Javascript code!
function display(toShow) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML += `<div>${toShow.join('<br>')}</div>`;
}


// the display function above will write out each element as a separate piece of HTML
// remember the backtick and interpolation makes creating strings easy:
// let name = "Joe"
// `name: ${name}` = "name: Joe"
// the solutions are here: https://stackblitz.com/edit/array-map-solution


// create a new array with just the titles of the movies
let titles = movies.map(movie => {
  return movie.title
})

//display(titles);

let cast = movies.map(movie => {
    return `<b>${movie.title}</b><br>Starring: ${movie.cast.join(', ')}<br><br>`; 
})
//display(cast);

// map the array so that 
let ratings = movies.map( movie => {
    return `${movie.title} - ${movie.score > 8.5 ? `<b>Great</b>` : 'Good'}`
})    
//display(ratings);

let html = movies.map(movie => {
    return `
      <img src="${movie.img}" style="height:100px; float: left" >
      <h2>${movie.title} (${movie.yearReleased})</h2>
      <div style="margin-bottom: 10px>">
        Directed By ${movie.director}<br>
        Starring: ${movie.cast.join(', ')}
      </div>
    `
})

display(html);
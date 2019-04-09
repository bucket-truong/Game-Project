$(document).ready(() => {
  let grid = {
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
    a6: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    d5: "",
    d6: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
  }
  const coordinates = Object.keys(grid)

  //button functionality
  $('td').on('click', (e) => {

  })
let placeBomb = () => {
  let counter = 1
  while(counter <= 5) {
    let randomCoord = coordinates[Math.floor(Math.random() * coordinates.length)]
    grid[randomCoord] = "bomb"
    counter++
  }
}
placeBomb()
console.log(grid);
  //define coordinates with object
  //create bomb counter
  //create bomb
  //randomize and set one bomb per coordinate
  //increment bomb counter












})

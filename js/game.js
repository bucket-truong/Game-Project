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
  let player = {
    lives: 3,
    score: 0,
    clicked: []
  }


  //button functionality
  $('td').on('click', (e) => {
    let selected = e.target.id
    //check if the button was clicked already

      //alert, button already clicked

    // if not clicked
      //add selected to clicked array


    let value = grid[selected]
    if (value == "bomb") {
      $('#' + selected).css("background-color", "red")

      if(player.lives <= 1) {
        alert('Bomb Hit, You Lose')
        reset()
      }
      player.lives -= 1
    } else if (value == "heart") {
      $('#' + selected).css("background-color", "pink")

      if (player.lives < 3) {
        player.lives += 1
      }
    } else {
      if (player.score < 10) {
        $('#' + selected).css("background-color", "#00af14")
        player.score += 1
      } else {
        alert("round won")
      }
    }
    displayAttr()
  })

let placeBomb = () => {
  let counter = 1
  while(counter <= 6) {
    let randomCoord = coordinates[Math.floor(Math.random() * coordinates.length)]
    grid[randomCoord] = "bomb"
    counter++
  }
}
placeBomb()

  let placeHeart = () => {
    let counter = 1
    while (counter <= 3) {
      let randomCoord = coordinates[Math.floor(Math.random() * coordinates.length)]
      grid[randomCoord] = "heart"
      counter++
    }
  }
placeHeart()
console.log(grid);

let displayAttr = () => {
  $('#stats').remove()
  let display = "<div id='stats'>"
  display += "Score: " + player.score
  display += "<br /> Lives: " + player.lives
  display += "</div>"
  $('#container-bg').append(display)
}
displayAttr()

$('#restart').on('click',() => {
  reset()
})

let reset = () => {
  location.reload()
}


//







})

window.onload = function() {
    
    
    let suit = Math.floor(Math.random() * 4 + 1)
    let CardNumberArray = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K']
    let cardDiv = document.getElementById("card")
    let widthInput = document.getElementById("width")
    let heightInput = document.getElementById("height")

    let cardNumber = CardNumberArray[Math.floor(Math.random() * 13)]
    console.log(cardNumber)

    widthInput.addEventListener('change', (event) => {
        cardDiv.style.width = `${event.target.value}px`
    })
    heightInput.addEventListener('change', (event) => {
        cardDiv.style.height = `${event.target.value}px`
    })

    // spade
    if(suit === 1) {
        cardDiv.classList.add("spades");
        cardDiv.innerHTML = `<span class='span-top-left'>♠</span><h1>${cardNumber}</h1><span class='span-bottom-right'>♠</span>`
    }

    //clubs
    if(suit === 2) {
        cardDiv.classList.add("clubs");
        cardDiv.innerHTML = `<span class='span-top-left'>♣</span><h1>${cardNumber}</h1><span class='span-bottom-right'>♣</span>`
    }

    //hearts
    if(suit === 3) {
        cardDiv.classList.add("hearts");
        cardDiv.innerHTML = `<span class='span-top-left'>♥</span><h1>${cardNumber}</h1><span class='span-bottom-right'>♥</span>`
    }

    //diamond
    if(suit === 4) {
        cardDiv.classList.add("diamonds");
        cardDiv.innerHTML = `<span class='span-top-left'>♦</span><h1>${cardNumber}</h1><span class='span-bottom-right'>♦</span>`
    }

};

var timeleft = 9;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    
    document.getElementById("countdown").innerHTML = "Finished";
    timeleft = 10;
    window.onload();
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
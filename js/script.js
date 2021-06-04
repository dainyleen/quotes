//  create an array of objects
const quotes = [
  {
    quote: "You don't need a degree in computer science to work in tech, you need gumption and focus. It's okay not to know something as long as you show that you're intelligent enought to learn it.",
    source: "Lynn Root",
    reference: "Glamour",
    year: 2014
  },
  {
    quote: "I can accept failure, everyone fails at something. But I cannot accept not trying.",
    source: "Michael Jordan"
  },
  {
    quote: "A person who is happy is not because everything is right in his life. He is happy because his attitude towards everything in his life is right.",
    source: "Sundar Pichai",
    reference: "Google"
  },
]

// create a function
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  let randomQuote = arr[randomNumber]
  console.log('randomNumber')
  return randomQuote
}

getRandomQuote()

// create another another function

// event listener: this is already given 
// document.getElementById('load-quote').addEventListener('click', printQuote, false)
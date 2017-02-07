
  $(document).ready(function(){

    var randomQuote, randomNum, author;
    getQuote();
  function getQuote(){
    //Made quotes array to global var
    var quotes = ["Give me a scotch, I'm starving.", "What is the point of owning a race car if you can't drive it?", "I'm a huge fan of the way you lose control and turn into an enourmous green rage monster.", "You know, he question I get asked most often is, 'Tony, how do you go to the bathroom in your suit?' [Long pause] Just like that.", "I already told you, I don't want to join your super secret boy band.", "You know, it's times like these when I realize what a superhero I am.", "My name is Tony Stark and I'm not afraid of you. I know you're a coward so I've decided, that you just died pal."];
    var author1 =["-Iron Man 1", "-Iron Man 2", "-The Avengers", "-Iron Man 2", "-Iron Man 2", "-Iron Man 3", "-Iron Man 3"];
      randomNum = Math.floor(Math.random()*quotes.length);
     randomQuote = quotes[randomNum];
     author = author1[randomNum];
    $(".quote").text(randomQuote);
      $(".author").text(author);

   

  }
      $('#tweet').on("click",function(){
      window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author );
    });
      
    $("#newQuote").on("click", function(){
      getQuote();
    });
    

  });

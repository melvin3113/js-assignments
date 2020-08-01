$(document).ready(function(){
  showQuote();
  
  $("#requestquote").on("click", function()
  {
    showQuote();
  })
  
  function showQuote()
  {
    var quotes = ["Whatever the mind of man can conceive and believe, it can achieve. Napoleon Hill", "Strive not to be a success, but rather to be of value. Albert Einstein", "I attribute my success to this: I never gave or took any excuse.Florence Nightingale", "You miss 100% of the shots you don’t take.Wayne Gretzky", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.Michael Jordan", "The most difficult thing is the decision to act, the rest is merely tenacity. ^Amelia Earhart", "Every strike brings me closer to the next home run. ^Babe Ruth", "Definiteness of purpose is the starting point of all achievement. ^W. Clement Stone", "Life isn’t about getting and having, it’s about giving and being. ^Kevin Kruse", "Life is what happens to you while you’re busy making other plans. ^John Lennon", "We become what we think about. ^Earl Nightingale", "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. ^Mark Twain", "Life is 10% what happens to me and 90% of how I react to it. ^Charles Swindoll"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('^');
    $("#quoteContainer").empty();
    $("#quoteContainer").html("<div><p class='quote'>" + entry[0] + "</p><p class='quote author'>-- " + entry[1] + "</p></div>")
  }
});
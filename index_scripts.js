//GLOBAL VARIABLES


// MAIN CODE ***********//
$(document).ready(function() {
    getQuote();
     tweetQuote();     //sets a custom href for the tweet button.
 });
//**********************//


 function getQuote() {
     //execute after webpage is loaded.
     afterClick();
 }

 function afterClick() {
     $("#quoteBtn").on("click", function() {
         myWrite();
     });
 }


/**
 * Gets quote from forismatic API and writes to html doc.
 */
function myWrite() {
     $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (json) {
          var quoteText = json["quoteText"].toString();
          var author = "-";
          if(json["quoteAuthor"].toString() == null)
              author += "Unknown";
          else
              author += json["quoteAuthor"].toString();
          $(".quote").html(quoteText);
          $("#author").html(author);
     });
 }

/**
 *
 */
function tweetQuote() {
      $("#tweetBtn").on("click", function() {
           const qTxt = document.getElementsByClassName("quote");
           let tweet = qTxt[0].innerText;
          const defaultTxt = "Click the 'New Quote' button to get an amazing quote!";
          const error = "Please click the button";

            //check if quote has been obtained.
           if(tweet !== defaultTxt && tweet !== error){
               generateTweet(tweet);
           } else {
               $(".quote").html(error);
          }
      })
 }

 function generateTweet(tweet) {
     const tweetAPI = "https://twitter.com/intent/tweet?";
     let Tweet = {};
     Tweet.url = encodeURI("https://codepen.io/Lord_of_Fluff/full/rdwdLN/");

     let entities = {};
     entities.hashtags = ["inspire", "quote", "forismatic"];
     Tweet.entity = entities;

     const someElement = document.getElementById("author");
     let author = someElement.innerText;
     if(author.toString() === "-")
         author += "Unknown";

     Tweet.text = ("\"" + tweet + "\" " + author);

     const quoteStatement = "text=" +Tweet.text.toString();
     const hashtagStatement = "&hashtags="
         + Tweet.entity.hashtags.toString();
     const urlStatement = "&url=" + Tweet.url;
     console.log(Tweet.url);

     window.open(tweetAPI.toString() + quoteStatement.toString() + hashtagStatement.toString()
         + urlStatement);
     }
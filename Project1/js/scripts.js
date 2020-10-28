//Greeting message for site
var user = 'Miyazaki movie enthusiast';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! These are reviews of my favorite Studio Ghibli movies.';
var greetingEl = document.getElementById('greeting');
//author of site
var author ='by Presa Theppanya';
    authorEl = document.getElementById('author');
    
authorEl.textContent = author;

greetingEl.textContent = greeting;

//movie price
var price = 19.99,
    priceEl = document.getElementById('Movie Price');

//movie
var movie = 'My Neighbor Totoro';

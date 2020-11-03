//Greeting message for site
var user = 'Miyazaki movie enthusiast';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! These are descriptions of my favorite Studio Ghibli movies.';
var greetingEl = document.getElementById('greeting');
//author of site
var author ='by Presa Theppanya';
    authorEl = document.getElementById('author');
    
authorEl.textContent = author;

greetingEl.textContent = greeting;

//write date
var dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

(function() {

    var data = [
        {
            name: 'My Neighbor Totoro',
            description: 'One of the most endearing and internationally renowned films of all time, My Neighbor Totoro is a deceptively simple tale of two girls, Satsuki and Mei, who move with their  to a new house in the countryside.',
            review: '"One of the most beloved of all family films-Roger Ebert."',
            url: 'https://www.amazon.com/Neighbor-Totoro-Bluray-Combo-Blu-ray/dp/B074128LDH/ref=sr_1_2?crid=3IA3KX8WQ6CL8&dchild=1&keywords=my+neighbor+totoro+blu+ray&qid=1603849921&sprefix=my+neigh%2Caps%2C188&sr=8-2',
            ratings: 7264,
            stars: '5 out of 5',
            price: 'Blu-Ray: $14.99',
            selector: 'p1'
        },
        {
            name: 'Kikis Delivery Service',
            description: 'From the legendary Hayao Miyazaki comes the beloved story of a resourceful young witch who uses her broom to create a delivery service, only to lose her gift of flight in a moment of self-doubt. Rarely has the animators art been so brilliantly rendered as in this delightfully imaginative film-a timeless story of a young girl finding her way in the world.',
            r: '"A beautifuuly animated, kind-hearted gem."-Leonard Maltin',
            url: 'https://www.amazon.com/Kikis-Delivery-Service-Bluray-Blu-ray/dp/B074128LDG/ref=sr_1_5?crid=2JGVTR80KFZER&dchild=1&keywords=kikis+delivery+service&qid=1603852053&sprefix=kiki%2Caps%2C194&sr=8-5',
            ratings: 3337,
            stars: '5 out of 5',
            price: 'Blu-Ray: $14.99',
            selector: 'p2'
        },
        {
            name: 'Spirited Away',
            description: 'When Chihiro is whisked away into a breathtaking world full of spirits and demons, she must use all her wits in order to free herself and her parents from the scoreless Yubaba, in Hayao Miyazaki Academy Award winning masterpiece. Spirited away cemented Hayao Miyazaki reputation as an icon of inspired animation and wondrous, lyrical storytelling.',
            Review: '"Nothing less than Magicial!"-Joe Morgenstern',
            url: 'https://www.amazon.com/Spirited-Away-Bluray-Combo-Blu-ray/dp/B074121MFR/ref=sr_1_2?crid=HIDRUOIW0P8A&dchild=1&keywords=spirited+away+blu+ray&qid=1603853355&sprefix=spirited+away%2Caps%2C177&sr=8-2',
            ratings: 11185,
            stars: '5 out of 5',
            price: 'Blu-Ray: $14.99',
            selector: 'p3'
        }
    ];

    function Movie(data) {
        this.name = data.name;
        this.description = data.description;
        this.review = data.review;
        this.url = data.url;
        this.ratings = data.ratings;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.ratings.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    };

    /*******************
     * Utility Functions
     *******************/

    //Returns today's date, format
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    //Return DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);   
    };

    //Writes the extension object data to the
    //appropriate DOM elements utilizing the package selector property.
    var writeMovieInfo = function(movie) {
        //Get reference to DOM elements
        var selector = movie.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            reviewEl = getEl(selector + '-review'),
            ratingsEl = getEl(selector + '-'),
            starsEl = getEl(selector + '-stars'),
            priceEl = getEl(selector + '-price');
    
        //Write Movie to the DOM elements
        nameEl.textContent = movie.name;
        descEl.textContent = movie.description;
        reviewEl.textContent = movie.review;
        ratingsEl.textContent = movie.getFormattedDownloads();
        starsEl.textContent = movie.getFormattedStars();
        priceEl.textContent = movie.price;
    };

    //write Movies data 1 by 1
    var kikis = new Movies(data[0]);
    writeMovieInfo(kikis);

    var spirited = new Movies(data[1]);
    writeMovieInfo(spirited);

    var totoro = new Movies(data[2]);
    writeMovieInfo(totoro);

} );
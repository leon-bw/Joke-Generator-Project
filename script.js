// Create a page that makes a request to the chuck norris api and gets a random chuck norris joke and puts it into the page, create a button that will allows us to get a new joke every time its clicked

// Add an event listener
// create a function that will make a request
// Get the data that is sent back and get the joke
// Display the joke on the page

const button = document.querySelector(".card__btn");


function getNewJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            const joke = document.querySelector(".card__joke");
            joke.textContent = `${data.value}`;
        }

    }

    xhr.send();

};



// Event Listeners

button.addEventListener("click", getNewJoke);

document.addEventListener("DOMContentLoaded", getNewJoke);

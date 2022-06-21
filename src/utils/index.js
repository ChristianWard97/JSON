const fs = require("fs");

const addMovie = (movieObj) => {
    try {

        // we use JSON.stringify to turn our object into a string
        const stringyObj = JSON.stringify(movieObj);
        // we use file sync package 'fs' to create a file called storage.json
        // and add whatever data we pass into our terminal.
        fs.writeFileSync('./storage.json', stringyObj);
        // catch any errors that may occur in the try block
    } catch (error) {
        console.log(error);
    };
};

const listMovies = () => {
    try {
        //we use filysync 'fs' and the built in readFileSync to
        // read data in the .json file
        const movieList = fs.readFileSync('./storage.json');
        console.log(movieList)
    } catch (error){
        console.log(error);
    };
};

//export our functions to use in the rest of the app
module.exports = {addMovie, listMovies};
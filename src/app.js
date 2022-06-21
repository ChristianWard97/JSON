const yargs = require("yargs");

const { addMovie, listMovie } = require("./utils");

const app = (yargsObj) => {
    if (yargsObj.add) {
        addMovie({title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.list) {
        listMovie();
    } else {
        console.log("Incorrect Command");
    };
};

app(yargs.argv);


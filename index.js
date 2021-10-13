/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
/**
The views setting tells Express what directory it should use as the source of view template files. 
In this case, you set the views directory as the source using the path.join() method, which creates a cross-platform file path.
The view engine setting tells Express what template engine to use, which in this case, is pug.
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
/**
The first argument of res.render() is a string that represents the file path of a template, within the templates source directory, views.
It renders the file and then sends the rendered HTML to the client (as a string). 
The extension for the template file defaults to .pug because Pug is the default view engine. 

The second argument is optional. This represents an object that the controller passes to the template. 
The properties of this object become local variables in the template. So { title: "Home" } defines a local variable called title,
in index.pug. Index.pug doesn't actually use "title" locally. It is used by the template that index.pug extends (layout.pug)
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
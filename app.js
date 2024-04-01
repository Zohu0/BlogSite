const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Blog = require("./models/blog.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/blog';

const main = async () => {
    await mongoose.connect(MONGO_URL);
};

main().then(() => { 
    console.log("Connected to db");
}).catch((err)=>{
    console.error("Error connecting to db:", err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Home route
app.get("/", async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        res.render("blogs/home.ejs", {allBlogs});
    } catch (error) {
        console.error("Error rendering home page:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Blog route
app.get("/blogs", async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        const deviceWidth = req.headers['device-width'] || 0;
        res.render("blogs/blog.ejs", {allBlogs, deviceWidth});
    } catch (error) {
        console.error("Error rendering blog page:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Addblog route
app.get("/blogs/addblog", (req, res) => {
    res.render("blogs/addblog.ejs");
});


// Blog show route
app.get("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }
        res.render("blogs/blogshow.ejs", { blog });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).send("Internal Server Error");
    }
});



// AddingBlog Route
app.post("/blogs", async (req, res) => {
    try {
        const newBlog = new Blog(req.body.blog);
        await newBlog.save();
        res.redirect("/blogs");
    } catch (error) {
        console.error("Error adding new blog:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
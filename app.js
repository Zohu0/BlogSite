const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Blog = require("./models/blog.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/blog";


const main = async () => {
    await mongoose.connect(MONGO_URL);
};

main().then(() => { 
    console.log("Connected to db")
}).catch((err)=>{
    console.log(err)
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))


// Home route
app.get("/", async(req, res) => {
    const allBlogs = await Blog.find({})
    res.render("blogs/home.ejs", {allBlogs})
});


// Blog route
app.get("/blogs", async (req, res) => {
    const allBlogs = await Blog.find({})
    res.render("blogs/blog.ejs", {allBlogs})
})


// Add blog route
app.get("/blogs/addblog", (req, res) => {
    res.render("blogs/addblog.ejs")
});


// Blog show route
app.get("/blogs/:id", async (req, res) => {
    let {id} = req.params;
    const blog = await Blog.findById(id);
    res.render("blogs/blogshow.ejs", {blog})
})


//Home latest blog show route
app.get("/:id", async (req, res) => {
    let {id} = req.params;
    const blog = await Blog.findById(id);
    res.render("blogs/latestshow.ejs", {blog})
})


// Adding Blog Route
app.post("/blogs", async (req, res) => {
    const newBlog = new Blog(req.body.blog);
    await newBlog.save();
    res.redirect("/blogs");
})






// app.get("/testblog", async (req,res)=>{
//     let sampleListing = new Blog({
//         title: "My new villa",
//         author: "Near the beach",
//         content: "Hey this this test",
//     })

//     await sampleListing.save()
//     console.log("sample was saved")
//     res.send("Successfull testing");
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
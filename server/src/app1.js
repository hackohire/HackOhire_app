const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post1 = require("../models/profilepost");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProfileDatas',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/ProfileDatas', (req, res) => {
  Post1.find({}, ' companies projects positions two_years_goal five_years_goal' ,function (error, ProfileDatas) {
    if (error) { console.error(error); }
    res.send({
        ProfileDatas : ProfileDatas
    })
  }).sort({_id:-1})
})

app.post('/ProfileDatas', (req, res) => {
  var db = req.db;
  var companies = req.body.companies;
  var projects = req.body.projects;
  var positions = req.body.positions;
  var two_years_goal = req.body.two_years_goal;
  var five_years_goal = req.body.five_years_goal;

  var new_post1 = new Post1({
    companies: companies,
    projects:projects,
    positions:positions,
    two_years_goal:two_years_goal,
    five_years_goal:five_years_goal

  })

  new_post1.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!',
    })
    console.log("done");
  })
})


app.listen(process.env.PORT || 8081)
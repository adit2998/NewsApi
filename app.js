const NewsAPI = require('newsapi');
//use a new key. Key available on newsapi.org
const newsapi = new NewsAPI(''); // use the obtained key within the quotes
var express = require('express');
var app = express();
app.set("view engine", "ejs");

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

/*
newsapi.v2.sources({
  q: 'blockchain',
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  ]
});
*/

/*
newsapi.v2.everything({
  q: 'blockchain whitepaper ',
  //sources: 'bbc-news,the-verge',
  //domains: 'bbc.co.uk, techcrunch.com',
  //from: '2019-01-24',
  //to: '2019-02-24',
  //category: 'technology',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(

  response => {
  console.log(response);
  
});
*/

app.get("/", function(req, res){
  //res.send("App works");
  newsapi.v2.everything({
  q: 'blockchain whitepaper',
  //sources: 'bbc-news,the-verge',
  //domains: 'bbc.co.uk, techcrunch.com',
  //from: '2019-01-24',
  //to: '2019-02-24',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(

  response => {
  //console.log(response);
  var articles = response["articles"];
  //res.send(response["articles"][0]["title"]);
  //res.send(articles);
  res.render("results", {articles : articles});
  });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running");
});

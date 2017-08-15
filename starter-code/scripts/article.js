'use strict';

var articles = [];

function Article (rawDataObj) {
  // TODO: Use the JS object passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title
  this.category = rawDataObj.category
  this.author = rawDataObj.author
  this.authorUrl = rawDataObj.authorUrl
  this.publishedOn = rawDataObj.publishedOn
  this.body = rawDataObj.body
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  /* TODO: This cloned article still has a class of template.
  However, in our modules.css stylesheet, we gave all elements
  with a class of template a display of none. Let's make
  sure we're not accidentally hiding our cloned article! */
  // var $newCategory = $('div.byline')
  // $newCategory.text(this.category)
  $newArticle.children().removeClass('template')

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);

  /* TODO: Now use jQuery traversal and setter methods to fill in the rest
  of the current template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */
  var $newTitle = $('h1');
  $newTitle.text(this.title)
  $('a[href = "this.authorUrl"]')
  $('a').href('""', 'this.authorUrl')
  $('time[datetime = "this.publishedOn"]')
  $('time').datetime('2000-01-01', 'this.publishedOn')
  $('article-body').text(this.body)
  $('#articles').append($newArticle)

  // Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

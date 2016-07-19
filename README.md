Unit 1

INTRO AND SETUP

Q: Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?

A: Far and away the most popular framework. If you want a job, know Angular.

Q: People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

A: 1. Templating belongs on the server side. 2. Performance issues. 3. Dependency injection is not minification friendly. 4. Angular 2.

Q: Is Angular an MVC framework?

A: Angular is MV WHATEVER. Commonly looked at as MVVM - Model View Viewmodel

Q: Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?

A: ng-app represents the Angular directive ngApp which tells the HTML element that Angular should be used in the application. ng stands for Angular.


DATA BINDING

Q: What does ng-model do?

A: ng-model lets you use a value from an input element (select, textarea, etc) elsewhere on the page by binding the value to the scope.

Q: What is "dirty checking"?

A: dirty checking is when Angular looks for changes to values while it is running.

Q: Find a way to set the initial  value of "name" as "BoJack" (without writing a controller)

A: Add || 'BoJack' inside 'name' call.

Q: What are those {{ }} expressions? Are they handlebars?

A: They reference ng-model values, displaying the information. They are NOT handlebars.

Q: Explain what two-way binding is.

A: Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s), and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model. When app data changes, so does the UI, and conversely.


EXPRESSIONS AND BUILT-IN FILTERS

Q: What does this tell you about the context of Angular expressions?

A: ???

Q: What are Angular expressions? How do they compare to tags from templating engines you've used before?

A: A way to pass in input data in real time. Javascript-like snippets that are usually placed in brackets. Similar, but everything you need is done on a single page.

Q: What happens when you write invalid code in an expression? What type of error do you get?

A: It breaks all the other expressions. Syntax error.

Q: What are Angular filters? Describe what a filter does and then name four built in filters, including one that we haven't used yet.

A: Bits of code that format data before it's displayed. Currency, date, json, limitTo.

Q: What's the syntax for filters?

A: {{expression | filter}}

Q: Can you use more than one filter?

A: Yes

Q: We'll soon see how to create custom filters. What is a use case for a custom filter?

A: Specific formatting. 

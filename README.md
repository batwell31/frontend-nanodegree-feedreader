# Jasmine Feed Reader Testing #

This was the 4th project of my Front-End Web Developer Nanodegree program.  It was given to me by Udacity.  I had to fill in the tests, and make them work for the expected result.  Udacity gave a lot of helpful `TODO: Comments` to help guide me with this.

## HOW TO RUN THIS UNIT TEST ##

* Download, or Clone the repository to your computer.
* Open the project folder into your code Editor.
* Open `index.html`

1) Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
2) Return the allFeeds variable to a passing state.
3) Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
4) Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
5) Write a new test suite named "The menu".
6) Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7) Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8) Write a test suite named "Initial Entries".
9) Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
10) Write a test suite named "New Feed Selection".
11) Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
12) No test should be dependent on the results of another.
13) Callbacks should be used to ensure that feeds are loaded before they are tested.
14) Implement error handling for undefined variables and out-of-bound array access.
15) When complete - all of your tests should pass.

## ACKNOWLEDGEMENTS ##

Udacity suplied me with all the files, and had me add to the `feedreader.js` file.  I followed the steps above "HOW TO RUN THIS UNIT TEST" to make this test complete!

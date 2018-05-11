/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have URL defined, and URL should not be empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name defined, and the name should not be empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        var body = $('body'),
            menuIcon = $('.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
    * hidden by default. You'll have to analyze the HTML and
    * the CSS to determine how we're performing the
    * hiding/showing of the menu element.
    */
        it('the menu element should be hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('the menu should change visibility when clicked', function () {
            //checks if menu-hidden is false when clicked the first time
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            //checks if menu-hidden is true when clicked the second time
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //calls the loadfeed function feed & uses done() as argument for beforeEach()
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('should have at least a single .entry element within the .feed container', function (done) {
            //defines the to be checked entries
            var entries = $('.entry');
            //expects that there is at least one entry
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
            * by the loadFeed function that the content actually changes.
            * Remember, loadFeed() is asynchronous.
            */
        var previousUrl;
        var newUrl;

        beforeEach(function (done) {
            // checks the previous Url for the entry-link
            previousUrl = $('.entry-link').attr('href');
            // calls next feed with loadFeed
            loadFeed(1, done);
        });
        // checks the new Url does not match the Url of the previous feed
        newUrl = $('.entry-link').attr('href');
        it('content should change when new feed is loaded by the loadFeed function', function (done) {
            expect(newUrl).not.toBe(previousUrl);
            done();
        });
    })
}());
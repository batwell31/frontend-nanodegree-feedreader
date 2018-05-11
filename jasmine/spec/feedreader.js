$(function () {    
   
    // "RSS Feeds" suite
    describe('RSS Feeds', function () {
        
        // makes sure the allFeeds object is defined, and never empty.
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        // test loops through each feed in the allFeeds object
        // ensures it has a URL defined and that the URL is not empty.
        it('should have URL defined, and URL should not be empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        
        // test that loops through the allFeeds object to make sure the NAME
        // is defined, and that it is not empty
        it('should have a name defined, and the name should not be empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    // "The menu" suite
    describe('The menu', function () {
        
        // defines the body/menu icon link element
        var body = $('body'),
            menuIcon = $('.menu-icon-link');
            
        // tests to make sure the menu element is hidden by default
        it('the menu element should be hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // tests to make sure the menu changes visibility when clicked
        it('the menu should change visibility when clicked', function () {
            
            //checks if menu-hidden is false when clicked the first time
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            //checks if menu-hidden is true when clicked the second time
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    // "Initial Entries" suite
    describe('Initial Entries', function () {

        // calls the loadfeed function feed & uses done() as argument for beforeEach()
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        
        // tests that there is at least one entry element inside the feed container
        it('should have at least a single .entry element within the .feed container', function (done) {
           
            // uses the  parent-child relationship
            var entriesInContainer = $('.feed.entry');

            //expects that there is at least one entry
            expect(entriesInContainer.length).toBeGreaterThan(0);
            done();
        });
    });
    
    // "New Feed Selection" suite
    describe('New Feed Selection', function () {
        
        var initialContent;

        beforeEach(function (done) {
            loadFeed(0, function () {
                // targets the .feed element and saves it to the variable initialContent
                initialContent = document.querySelector('.feed').innerHTML;

                loadFeed(1, function () {
                    done();
                });
            });
        });

        // tests that the content changes by the loadFeed function when a new feed is loaded
        it('When a new feed is loaded by the loadFeed function the content changes', function () {
            // targets the feed element, and saves it into the variable newContent
            var newContent = document.querySelector('.feed').innerHTML;
            
            // expects new content not to be the initial content
            expect(newContent).not.toBe(initialContent);
        });
    })
}());
$(function () {    
   
    // "RSS Feeds" suite
    describe('RSS Feeds', function () {
        
        // makes sure the allFeeds object is defined, and never empty.
        it('are defined', function () {
            // expects allFeeds object to be defined + exist
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        // test loops through each feed in the allFeeds object
        it('should have URL defined, and URL should not be empty', function () {
            allFeeds.forEach(function (feed) {
                // expects feed URL to be defined + exist
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // test loops through allFeeds object
        it('should have a name defined, and the name should not be empty', function () {
            allFeeds.forEach(function (feed) {
                // expects feed name to be defined + exist
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
            
        // test
        it('the menu element should be hidden by default', function () {
            // expects the menu element to be hidden by default
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // test
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
           
            // targets the feed container element into a variable called feed
            var feed = $('.feed');

            //expects that there is at least one entry in the feed container
            expect(feed.children().length).toBeGreaterThan(0);
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

        // test
        it('When a new feed is loaded by the loadFeed function the content changes', function () {
            // targets the feed element, and saves it into the variable newContent
            var newContent = document.querySelector('.feed').innerHTML;
            
            // expects new content not to be the initial content
            expect(newContent).not.toBe(initialContent);
        });
    })
}());
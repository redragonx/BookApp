/**
 * The router the book app
 *
 */

// For debugging
Iron.utils.debug = true;

// Designate layout
Router.configure({
    layoutTemplate:'layout'
});

// Routes
Router.map(function(){
    // Route this to the index page, entry
    this.route('about', {path: '/'});
    this.route('bookAdd', {path: 'bookAdd'});
    // route this to the book list page
    this.route('bookList', {path: 'bookList'});
});

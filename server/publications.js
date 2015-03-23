/*
 * Meteor publications for database objects
 */

Meteor.publish('books', function() {
    return Books.find();
});

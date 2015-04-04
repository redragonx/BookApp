if (Meteor.isClient) {

  Meteor.subscribe('books');

  Template.bookList.helpers({
    allBooksCollection: function () {
        return Books.find();
    }
});
}

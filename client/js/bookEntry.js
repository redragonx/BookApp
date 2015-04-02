if (Meteor.isClient) {
  // This code only runs on the client
  Template.bookListTable.helpers({
    books: function () {
      return Books.find();
    }
  });
}

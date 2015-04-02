if (Meteor.isClient) {

  Meteor.subscribe('books');



  // This code only runs on the client
  Template.bookListTable.helpers({
    
  });

  Template.bookListTable.all_books = function () {
  	return Books.find();
  }

}

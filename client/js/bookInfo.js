if (Meteor.isClient) {
	
	Meteor.subscribe('books');

	Template.bookInfo.helpers({
    	
    });

    Template.bookInfo.events({

	    'click .btn_add': function() {

	    	// You'll need to get these values from the html
	    	var bookISBN = document.getElementById("bookISBNField").value;
	    	var bookName = document.getElementById("bookNameField").value;
	    	var price = document.getElementById("bookPriceField").value;
	    	var condition = document.getElementById("bookConditionField").value;
	    	var seller = document.getElementById("sellerNameField").value;
	    	var phone = document.getElementById("sellerTelField").value;
	    	var email = document.getElementById("sellerEmailField").value;
	    	// Add the book to the database
	    	Books.insert({
	    		isbn: bookISBN,
	    		name: bookName, 
	    		price: price, 
	    		condition: condition, 
	    		seller: seller, 
	    		phone: phone, 
	    		email: email
	    	});

	     }

    });



}
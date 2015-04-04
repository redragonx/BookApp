if (Meteor.isClient) {
	
	Meteor.subscribe('books');

	Template.bookList.helpers({
		
		isBooksEmpty: function () {
			if (Books.find().fetch().length == 0)
			{
				return true;
			}
			return false;
		}    	
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
	    
	    	// Simple form check...
	    	if (bookISBN != "" &&
	    	 bookName != "" &&
	    	 price != "" &&
	    	 condition != "" &&
	    	 seller != "" &&
	    	 phone != "" &&
	    	 email != "")
	    	{
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
		}
    });
}
$(document).ready(function(){



/* SERVER USED */
//http://rest.learncode.academy/




/* BACK BUTTON */
	var back = $("#backHome");
	back.on("click", goBack);

	function goBack(){
		open("../../index.html", "_top");
	};


/* AJAX */
	var count = 1;
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var truth = 'smile';
	
	var orderTemplate = $('#order-template').html();
	var orderTemplate1 = $('#order-template1').html();



/* ADDS ORDER */
	function addOrder(order){
		if(truth == 'smile')
			//{$orders.append('<li>my order: ' + order.id +'</li>');}
			{$orders.append(Mustache.render(orderTemplate, order));}
		if(truth == 'gay'){
			//$orders.append('<li>Name: '+ order.name +'      My Order: ' + order.age +'</li>')
		    $orders.append(Mustache.render(orderTemplate1, order));
		    console.log("Friend added!", order); //the new item is returned with an ID
		}
	};


/* GET ORDER */
	$.ajax({
	  type: 'GET',
	  url: 'http://rest.learncode.academy/api/johnbob/friends',
	  success: function(data) {
	    console.log("I have friends!", data); //returns all of johnbob's friends
	    $.each(data, function(i, order){
	    	
	    	if(count<10){
	    		truth = 'smile';
	    		addOrder(order);
	    		count++;
	    	}
	    })
	  },
	  error: function(){
	  	alert('error loading function');
	  }
	});



/* POST ORDER */
	$('#add-order').on('click', function(){
		var order = {
			name: $name.val(),
			age: $drink.val()
		}


		$.ajax({
		  type: 'POST',
		  url: 'http://rest.learncode.academy/api/johnbob/friends',
		  data: order,
		  success: function(data) {
		  	truth = 'gay';
		  	addOrder(data);
		  },
		  error: function(){
		  	alert("Boogie");
		  }
		});
	});



/* DELETE ORDER */
	//delegate can refer to elements that don't exist yet and also those that do exist
	$orders.delegate('.remove', 'click', function(){

		//Gets closest <li> tag that 
		var $li = $(this).closest('li');
		
		$.ajax({
		  type: 'DELETE',
		  url: 'http://rest.learncode.academy/api/johnbob/friends/' + $(this).attr('data-id'),
		  success: function() {
		    //no data...just a success (200) status code
		    $li.fadeOut(300, function(){
		    	$(this).remove();
		    })
		    
		    console.log('Friend Deleted Successfully!');
		  }
		});
	});



/* EDIT/UPDATE ORDER */
	$orders.delegate('.editOrder', 'click', function(){	
		var $li = $(this).closest('li');
		$li.find('input.name').val($li.find('span.name').html());
		$li.find('input.drink').val($li.find('span.drink').html());
		$li.addClass('edit');
	});


	$orders.delegate('.cancelEdit', 'click', function(){
		var $li = $(this).closest('li').removeClass('edit');
	});

	$orders.delegate('.saveEdit', 'click', function(){
		var $li = $(this).closest('li');
		var order = {
			name: $li.find('input.name').val(),
			drink: $li.find('input.drink').val()
		};

		$.ajax({
			type: 'PUT',
			url: 'http://rest.learncode.academy/api/johnbob/friends/' + $li.attr('data-id'),
			data: order,
			success: function(data) {
				$li.find('span.name').html(order.name);
				$li.find('span.drink').html(order.drink);
				$li.removeClass('edit');
			},
			error: function(){
			  alert("Boogie");
			}
		});
	});

});
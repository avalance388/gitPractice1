$(function(){
	
	/* BACK BUTTON */
	var back = $("#backHome");
	back.on("click", goBack);

	function goBack(){
		open("../../index.html", "_top");
	};


	/* First Class Functions - Callback */
	function add(first, second, callback){
		console.log(first+second);
		//Make optional
		if(callback){
			callback();
		}
	}

	function logDone(){
		console.log('done');
	}

	add(2,3, logDone);
	add(4,5);
	add(9,9, function(){
		console.log('JellyBean');
	});


	/*  Closures  */
	var a = 1;
	var btnA = $("#buttonA");
	var btnB = $("#buttonB")
	
	btnA.on("click", function(){
		a++;
		console.log(a);
	});

	btnB.on("click", function(){
		console.log(a);
	});

	//IF BELOW: var a will then be dumped as garbage
	//This is because nothing is referencing it
	//No point in keeping it

	//btnA.off('click');
	//btnB.off('click'); 


	/* Context */
	
	//Object it sits on
	console.log(this);

	//context is that this refers to object it is in
	//if in function: Depends on which object function is in
	var obj = {
		foo: function(one, two, three){
			console.log(this);
			console.log(this === window);
		}
	}


/* Methods of Changing Context 

	//Creates object w/ 'this' context of Window
	obj.foo.call(window);
	//Same thing but passes parameters
	obj.foo.call(window, 1, 2, 3);

	//Same thing but only Takes only two arguments
	//Put second argument into array
	obj.foo.apply(window, [1,2,4]);

	//Returns bound function
	//function that always executes Foo with context of
	//of Window
	var myBoundFoo = obj.foo.bind(window);

	myBoundFoo();
	obj.foo()

*/
	//Using this example
	$('li').on('click', function(){
		var count = parseInt($(this).find('span').html());
		$(this).find('span').html(count+1);
	})

	//Example 2
	$('#opendiv').on('click', function() {
		$('#div1').slideToggle(300, function(){
			$(this).toggleClass("active");
		}.bind(this));
	});

});
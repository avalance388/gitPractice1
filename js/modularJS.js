$(function(){

/* BACK BUTTON */
	var back = $("#backHome");
	back.on("click", goBack);

	function goBack(){
		open("../../index.html", "_top");
	};
});


	(function() {
		var people = {
			people: ['Chalmers', 'Cole', 'JAMES'],
			init: function(){
				this.cacheDom();
				this.bindEvents();
				this.render();
			},
			cacheDom: function() {
				this.$el = $('#peopleModule');
				this.$button = this.$el.find('button');
				this.$input = this.$el.find('input');
				this.$ul = this.$el.find('ul');
				this.template = this.$el.find('#people-template').html();
			},
			bindEvents: function(){
				this.$button.on('click', this.addPerson.bind(this));
				this.$ul.delegate('i.del','click', this.deletePerson.bind(this));
			},
			render: function() {
				var data = {
					people: this.people,
				};
				this.$ul.html(Mustache.render(this.template,data));
			},
			addPerson: function(){
				this.people.push(this.$input.val());
				this.render();
				this.$input.val('');
			},
			deletePerson: function(e){
				var $remove = $(e.target).closest('li');
				var i= this.$ul.find('li').index($remove);

				this.people.splice(i,1);
				this.render();
			}
		};

		people.init();
	})()


/* Original Messy Version

	(function(){
		$('#peopleModule').find('button').on('click', function(){
			people.push($('#peopleModule').find('input').val());
			$('#peopleModule').find('input').val('');
			//data for mustache template
			var data = {
				people: people,
			};
			$('#peopleModule').find('ul').html(Mustache.rendr(template,data));
		})

		$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
			var $remove = $(e.target).closest('li');
			var i= $('#peopleModule').find('ul').find('li').index($remove);

			$remove.remove();
			people.splice(i,1);
		});
	})()

*/
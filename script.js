/* Exercise 1: Wish list */

$(document).ready(function() {

	function addToList() {
		
			var item = $("input").val();
			$("ol#items").append("<li>" + "<span class='label pending'>Pending</span>" + item + "</li>");
			$("input").val("");
			$("input").focus();
			updateTotal();
		
	};

	$("#add-to-list").on('click', addToList);

	$(document).on('click','.pending',function() {
		$(this).parent().append("<span class='label success'>Done! Way to go!</span>");
		$(this).parent().attr("class", 'completed');
		$(this).remove();
		updateTotal();
	});

	function updateTotal() {
		var pending = $(".pending").length;
		var success = $(".success").length;
		$(".total").text("Pending: " + pending + " " + "Completed: " + success);
	};

});
$(document).ready(function() {

/* Global variables*/
	var checkMark = '<span class="check"><i class="fa fa-check"></i></span>'
	var removeMark = '<span class="remove"><i class="fa fa-times"></i></span>'
/* Use 'Return' key to add li item */
	$('#add-item').keydown(function(e) {
		if(e.keyCode == 13) {
			postItem();
		};
	});

/* Add li item and clear text input field */
	function postItem() {
		var item = $('#add-item').val();
		var unique = '<li id="todo">' + checkMark + item + removeMark + '<hr />' + '</li>';
		$('ul').prepend(unique);
		$('#add-item').val('');
	};

/* Use checkMark to strike li item */
	$('ul').on('click', '.check', function() {
		$(this).closest('li').addClass('finish');
		$(this).remove();
		console.log('Finished!');
	});

/* Use removeMark to delete li item */
	$('ul').on('click', '.remove', function() {
		$(this).closest('li').addClass('delete');
		console.log('Deleted!');
	});
});
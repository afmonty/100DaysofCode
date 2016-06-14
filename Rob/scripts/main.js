var list = [];
var form = $('.add');


form.submit( (e) => {
	e.preventDefault();
	var item = $('.item').val();
	var url = $('.itemLink').val();
	list.push({
		item: item,
		url: url,
		status: 'new'
	})
	console.log(url);
	$('.item').val('');
	$('.itemLink').val('');
	display(list);
})
 var display = function(list) {
 	$('.display').html('');
 	for(var i = 0; i < list.length; i++) {
 		$('.display').append(
 			`<div class = 'twelve columns'>
 				<div class = 'row'>
 					<span class='title four columns'>${list[i].item}</span>
 					<a href = '${list[i].url}' class = ' three columns url'>Look at this</a>
 					<span class = 'status two columns'>${list[i].status}</span>
 					<input type = 'checkbox' class = 'delete'></input>
 				</div>
 			</div>`
 		)
 	}
 }
 
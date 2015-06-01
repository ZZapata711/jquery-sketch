var initial_size = 15;

$(document).ready(function(){
	populate(initial_size);
});

function populate(size){
	$('.main-table').empty();
	
	var $size = size;
	switch($size){
		case 15:
			 $cl = 'box';
			break;
		case 31:
			 $cl = 'bigger-box';
			break;
		case 63:
			 $cl = 'biggest-box';
			break;
		default:
			break;
	}
			
	console.log($cl);
	for(var i=0; i < $size; i++){
		$tr = $("<tr></tr>");
		for(var j=0; j < $size; j++){
			$div = $("<div class=" +$cl+"></div>");
			$div.css('background-color', 'lightslategrey');
			$tr.append($("<td></td>").append($div));
			}
		$(".main-table").append($tr);
	}
	run();
};

function run(){
	$('.box').hover(function(){
		$(this).css('background-color', 'black');
	});
	
	$('button').click(function(){
		populate($(this).val());
	});
};

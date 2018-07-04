$(document).ready(function(){

	var code = $(".codemirror.textarea")[0];
	var editor = Codemirror.fromTextArea(code,{lineNumbers : true});

});
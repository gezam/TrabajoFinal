
$(document).ready(function() {

	$('#buscar').click(function () {
	Api($('#entrada').val());
		$('#texto').html("<br>");
		$('#imagen').html("");
		$('#video').html("");
	});	
	
});

function Api(nombreautor){
		
		$.ajax({
		url: 'https://api.themoviedb.org/3/search/person?api_key=5fba32d75f788fe5f5adf4c2558c22ca&language=en-US&query='+nombreautor+'&page=1&include_adult=false',
		type: 'GET',
		dataType: 'json',		
		})
		.done(function(data) {
		debugger
		
		$.each(data.results, function(index, el) {
			debugger
			for (var i = 0; i < data.total_results; i++) {
				debugger
				$('#imagen').append('<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2'+el.known_for[i].poster_path+'""<br> <br><br>')
				$('#texto').append(el.known_for[i].title+'<br><br>')
				$('#texto').append(el.known_for[i].overview+' <br><br>')
				$('#texto').append('Fecha de lanzamiento: '+el.known_for[i].release_date+'<br><br><br><br>')
				otraapi(el.known_for[i].id);

			}
		}); 
		debugger
		console.log("success");
		})
		.fail(function(data) {
		debugger
		console.log("error");
		})
}

function otraapi(id){

	$.ajax({
		url: 'https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=5fba32d75f788fe5f5adf4c2558c22ca&language=en-US',
		type: 'GET',
		dataType: 'json',		
	})
	.done(function(data) {
		debugger
		$("#video").append('<iframe width="450" height="270" src="https://www.youtube.com/embed/'+data.results[0].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br><br>');
	})

	.fail(function(data) {
		debugger
		console.log("error");
	})
	
}

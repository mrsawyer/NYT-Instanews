$(function(){
    
    //USE FILTER METHOD

    $('#mySelect').change(function() {
       var selectedSection = $(this).find('option:selected').val();
        var url = "https://api.nytimes.com/svc/topstories/v2/" + selectedSection + ".json";
        url += '?' + $.param({
            'api-key': "49c6bed2e4044da2b7c4687f958f8164"
        });
        console.log(url);
        $.ajax({
            url: url,
            method: 'GET',
        })
        .done(function(result) {
            $('#search').toggleClass('resultsHeader');
            $('#results').toggleClass('resultsSection');
            var articleData = '';
            console.log(result);
            $.each(result.results, function( key, value ){
                articleData += '<li>';
                // articleData += '<img src="' + value.multimedia[4].url + '"/>';
                articleData += '<p>' + value.abstract +'</p>'
                articleData += '</li>';
            });
            $('.searchResults').append(articleData);
        })

        .fail(function(err) {
            throw err;
        });
    });
});
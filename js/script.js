$(function(){
    

    $('#mySelect').change(function(e) {
        e.preventDefault();
        $('.searchResults').empty();
        $('#results').prepend('<div class="load"><img src="../images/ajax-loader.gif"/></div>');
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

            $('#search').addClass('resultsHeader');
            $('#results').addClass('resultsSection');
            var articleData = '';
            var articles = result.results;
            var articlesWithPics = articles.filter(function(options){
                    return options.multimedia.length !== 0;
                })

            var topArticles = articlesWithPics.slice(0,12);

            console.log(topArticles);

            $.each(topArticles, function( key, value ){
                articleData += '<li>';
                articleData += '<div class="articleWrap" style="background-image: url('+value.multimedia[4].url+')">';
                articleData += '<p class="abstract">' + value.abstract +'</p></div>'
                articleData += '</li>';
            });
            $('.searchResults').append(articleData);

        })

        .fail(function(err) {
            $('.searchResults').append('No data to load');
        })

        .always(function(){ $('.load').remove();});
    });

});
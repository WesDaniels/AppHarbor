$('.siteArticle').click(function () {
    $.ajax({
        url: 'dataservices/SiteArticles.svc/load/' + this.id,
        success: function (data) {
            $.each(data, function (i, item) {
                $('#contentText').html(item)
            });
        }
    });
});
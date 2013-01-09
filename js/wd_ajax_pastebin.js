function getPastebin(id) {
    var start = new Date()
    $('#' + id).after('<div class=\'api-talk\' >API: Retrive http://pastebin.com/raw.php?i=' + id + '</div>');
    $.ajax({
        url: 'dataservices/pastebin/pastebinproxy.svc/' + id,
        success: function (data) {
            $.each(data, function (i, item) {
                $('#' + id).html(htmlEncode(item));
            });
            prettyPrint();
        }
    });
}

function htmlEncode(value) {
    if (value) {
        return jQuery('<div />').text(value).html();
    } else {
        return '';
    }
}
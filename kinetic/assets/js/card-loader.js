// Loads a specific script if requested in the URL or loads the default card script

var card = 'default';
var custom;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    custom = {};
    while (match = search.exec(query))
    {
        if (decode(match[1]).toLowerCase() == 'card')
        {
            card = decode(match[2]).toLowerCase();
        }
        else
        {
           custom[decode(match[1])] = decode(match[2]);
        }
    }
})();

$.getScript('assets/js/cards/' + card + '.js', function() {
    
    if (headline)
    {
        var to = custom.to ? ' ' + custom.to : '';
        $('h1').text(headline + to);
    }
})
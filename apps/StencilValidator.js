var EightyApp = function() {
  	// processDocument returns scraped data
    this.processDocument = function(html, url, headers, status, cheerio) {
        var $ = cheerio;
        var app = this;
        var $html = app.parseHtml(html, cheerio);
        var object = new Object();

        var title = $html.find('title').first().text();
        var stencil = false;
        $html.find('[data-stencil-stylesheet]').each(function(i, obj){
            stencil = true;
        })
        
        object.url = url;
        object.title = title;
        object.stencil = stencil;

        return JSON.stringify(object);
    }

    // parseLinks returns the next set of links to crawl
    this.parseLinks = function(html, url, headers, status, cheerio) {
        var app = this;
        var $html = app.parseHtml(html, cheerio);
        var links = [];

        // generate the set of links you want to crawl next

        return links;
    }
}

module.exports = function(EightyAppBase) {
    EightyApp.prototype = new EightyAppBase();
    return new EightyApp();
}

function Navigation(elem) {
    // Methods
    var init, bindEvents;

    // Elems
    var $search = $(elem);
    var $searchForm = $('.js-search-form', $search);
    var $searchLoading = $('.js-search-loading', $search);
    var $searchResults = $('.js-search-results', $search);
    var $searchInput = $('.js-search-input', $search);

    // Vars
    var inSearch;
    var timer = null;

    init = function () {
        $searchForm.on('submit', function (e) {
            e.preventDefault();
            doSearch($(this).serializeObject());
        });
        $searchInput.on('keydown', canSearch);
    }
}
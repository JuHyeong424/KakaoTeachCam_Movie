async function loadMovies() {
    let movies;

    if (isSearching) {
        const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${currentPage}`;
        const result = await searchMovies(API_SEARCH_URL, currentPage);
        movies = result.results;
        MAX_PAGE = result.total_pages; // 검색 결과에 따라 페이지 수 조정
    } else {
        movies = await fetchMovies(currentPage);
        MAX_PAGE = 500; // 기본값
    }

    renderMovies(movies);
    updateNavigation(currentPage);
    highlightCurrentPage(currentPage);
}
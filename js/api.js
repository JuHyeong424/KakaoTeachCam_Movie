async function fetchMovies(page = 1) {
    const url = `${API_BASE_URL}/popular?page=${page}`;
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json.results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function searchMovies(API_SEARCH_URL, page = 1) {
    const url = `${API_SEARCH_URL}&page=${page}`;
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return {
            results: json.results,
            total_pages: json.total_pages
        }
    } catch (err) {
        console.log(err);
        return {
            results: [],
            total_pages: 0,
        };
    }
}

async function detailMovies(ID) {
    const url = `${API_BASE_URL}/${ID}?language=en-US`;

    try {
        const res = await fetch(url, options);
        const json = await res.json()
        return {
            title: json.title,
            genres: json.genres,
            homepage: json.homepage,
            runtime: json.runtime,
            overview: json.overview,
            release_date: json.release_date,
            vote: json.vote_average,
            poster: json.poster_path,
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}
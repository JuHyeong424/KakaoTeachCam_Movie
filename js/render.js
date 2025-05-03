// 카드 만들기
function renderMovies(movies) {
    const row = document.querySelector(".row.row-cols-1.row-cols-md-4.g-4");
    row.innerHTML = '';

    movies.forEach(movie => {
        const imagePath = movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : '/img/OIP.jpeg';

        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100" id="${movie.id}">
                <img src="${imagePath}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview ? movie.overview.substring(0, 100) + '...' : 'No description available.'}</p>
                    <small class="text-muted">출시일: ${movie.release_date || 'Unknown'}</small><br>
                    <small class="text-muted">평점: ${movie.vote_average}</small>
                </div>
            </div>
        `;
        row.appendChild(col);
    });
}
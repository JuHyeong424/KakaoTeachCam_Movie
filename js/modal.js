// 모달
async function showModal(ID) {
    const result = await detailMovies(ID);
    const genre = result.genres.map(item => item.name).join(', ');

    document.getElementById('custom-modal-img').src = `${IMAGE_BASE_URL}${result.poster}`;
    document.getElementById('custom-modal-title').textContent = 'Title: ' + result.title;
    document.getElementById('custom-modal-genres').textContent = "Genre: " + genre;
    document.getElementById('custom-modal-homepage').textContent = "Homepage: " + result.homepage;
    document.getElementById('custom-modal-runtime').textContent = "Runtime: " + result.runtime + "min";
    document.getElementById('custom-modal-vote').textContent = "Rate: " + result.vote;
    document.getElementById('custom-modal-release').textContent = "Release Date: " + result.release_date;
    document.getElementById('custom-modal-desc').textContent = "Content: " + result.overview;

    document.getElementById("custom-modal").style.display = 'flex';
}

document.querySelector(".custom-close-btn").addEventListener("click", () => {
    document.getElementById("custom-modal").style.display = 'none';
});

// 모달 외부 클릭 시 닫기
document.getElementById("custom-modal").addEventListener("click", function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
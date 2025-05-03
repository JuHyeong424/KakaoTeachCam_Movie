async function pageSearch() {
    const input = document.getElementById('page-input');
    const page = Number(input.value);

    if (!isNaN(page) && page >= 1 && page <= MAX_PAGE) {
        currentPage = page;
        await loadMovies();
    } else {
        alert("1부터 500 사이 숫자를 입력하세요.");
    }

    input.value = '';
}
async function handleSearch() {
    const input = document.querySelector('.form-control.form-control-dark.text-bg-dark');
    const text = input.value.trim().toLowerCase();

    if (!text) {
        alert('검색어를 입력하세요.');
        return;
    }

    isSearching = true;
    searchQuery = text;
    currentPage = 1;

    await loadMovies();

    input.value = '';
}
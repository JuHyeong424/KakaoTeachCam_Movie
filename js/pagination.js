// 현재 페이지내비게이션 색 변화
function highlightCurrentPage(currentPage) {
    document.querySelectorAll('.page-item').forEach(item => item.classList.remove('active'));

    document.querySelectorAll('.page-link').forEach(link => {
        if (Number(link.textContent) === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
}

// 5 그룹 단위로 페이지 이동
function updateNavigation(currentPage) {
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;

    for (let i = 1; i <= 5; i++) {
        const nav = document.querySelector(`#page-link-${i}`);
        const newPageNum = startPage + (i - 1);

        if (nav) {
            if (newPageNum <= MAX_PAGE) {
                nav.textContent = newPageNum;
                nav.parentElement.style.display = ''; // 다시 보여줌
            } else {
                nav.parentElement.style.display = 'none'; // 초과하면 숨김
            }
        }
    }
}

let currentPage = 1;
let isSearching = false;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', async () => {
    await loadMovies();

    // 페이지 버튼 클릭
    document.querySelectorAll(".page-link").forEach(link => {
        link.addEventListener('click', async e => {
            e.preventDefault();
            const text = link.textContent.trim();

            if (text === 'Previous' && currentPage > 1) {
                currentPage--;
            } else if (text === 'Next' && currentPage < MAX_PAGE) {
                currentPage++;
            } else if (!isNaN(Number(text))) {
                currentPage = Number(text);
            }

            await loadMovies();
        });
    });

    // 페이지 번호 직접 입력
    document.getElementById('page-go').addEventListener('click', async (e) => {
        e.preventDefault();
        await pageSearch();
    });

    document.getElementById('page-input').addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await pageSearch();
        }
    });

    // 검색 기능
    document.querySelector('.search-btn').addEventListener('click', async (e)  => {
        e.preventDefault();
        await handleSearch();
    });

    document.querySelector('.form-control.form-control-dark.text-bg-dark').addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleSearch();
        }
    })

    // card를 누르면 id를 바로 가져오도록
    document.querySelector(".row.row-cols-1.row-cols-md-4.g-4").addEventListener('click', async (e) => {
        const card = e.target.closest('.card'); // 클릭한 것이 card면 가져오기
        if (card) {
            const movieId = card.getAttribute('id');
            if (movieId) {
                await showModal(movieId);
            }
        }
    });

    // home 클릭 시 home으로 이동
    document.querySelector('.nav-link.px-2.text-secondary').addEventListener('click', async(e) => {
        e.preventDefault();
        isSearching = false;
        currentPage = 1;
        await loadMovies();
    })
});

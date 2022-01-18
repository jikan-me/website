function search() {
    var query = document.getElementById('search_query').value;

    var requestUrl = `https://api.jikan.moe/v4/anime?q=${query}&sfw`;
    document.getElementById('search_query_url').innerHTML = 'fetching...';
    document.getElementById('search_query_url').href = 'javascript:void(null)';

    let startTime = new Date().getTime();

    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        let timeTaken = new Date().getTime() - startTime;

        document.getElementById('search_query_url').innerHTML = requestUrl;
        document.getElementById('search_query_url').href = requestUrl;


        var node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}

        const maxResults = 16;
        let i = 1;
        
        try {
            data.data.forEach(item => {
                // filter limit client side
                if (i > maxResults) {
                    throw BreakException;
                }
    
                document.getElementById('search_results')
                .insertAdjacentHTML(
                    'beforeend',
                    `
                    <a href="${item.url}" class="card">
                        <div class="card__image">
                            <img loading="lazy" src="${item.images.jpg.large_image_url}" alt="${item.title}" />
                        </div>
                        <div class="card__name">
                            <span>${item.title}</span> 
                        </div>
                    </a>
                    `
                );
    
                i++;
            });
        } catch (e) {
            //
        }

    });
}

document.getElementById('search').onclick = () => search();
document.getElementById('search_query').onkeydown = (event) => {
    if (event.keyCode === 13) {
        search();
    }
};

window.addEventListener('load', () => {
    fetch('https://api.github.com/repos/jikan-me/jikan/contributors')
    .then(response => response.json())
    .then(data => {
        data.forEach(node => {
            document.getElementById('contributors').insertAdjacentHTML(
                'beforeend',
                `<a target="_blank" href="https://github.com/${node.login}" title="${node.login}">
                        <img alt="${node.login}" src="${node.avatar_url}" />
                </a>`
            );
        })
    })
    .catch(error => console.error(error));
});
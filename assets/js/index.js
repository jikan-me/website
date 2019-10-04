function search() {
    var query = document.getElementById('search_query').value;

    if (query.length < 3) {
        alert('Error: Requires atleast 3 or more characters');
        return;
    }

    var requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16`;
    document.getElementById('search_query_url').innerHTML = 'working...';
    document.getElementById('search_query_url').href = 'javascript:void(null)';
    

    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('search_query_url').innerHTML = requestUrl;
        document.getElementById('search_query_url').href = requestUrl;

        var node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}

        data.results.forEach(item => {
            document.getElementById('search_results')
            .insertAdjacentHTML(
                'beforeend',
                `
                <a href="${item.url}" class="card">
                    <div class="card__image">
                        <img src="${item.image_url}" />
                    </div>
                    <div class="card__name">
                        <span>${item.title}</span> 
                    </div>
                </a>
                `
            );
        });
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
            console.log(node);
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
function search() {
    var query = document.getElementById('search_query').value;

    if (query.length < 3) {
        alert('Error: Requires atleast 3 or more characters');
        return;
    }

    var requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}`;
    document.getElementById('search_query_url').innerHTML = 'fetching...';
    document.getElementById('request_cached').innerHTML = '-';
    document.getElementById('request_time_taken').innerHTML = '-';
    document.getElementById('search_query_url').href = 'javascript:void(null)';
    document.getElementById('request_cached').style.color = 'rgba(255,255,255,.6)';
    
    let startTime = new Date().getTime();

    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        let timeTaken = new Date().getTime() - startTime;

        document.getElementById('search_query_url').innerHTML = requestUrl;
        document.getElementById('search_query_url').href = requestUrl;
        document.getElementById('request_cached').innerHTML = data.request_cached;
        document.getElementById('request_cached').style.color = '#FF0000';
        document.getElementById('request_time_taken').innerHTML = `${timeTaken}ms`;


        if (data.request_cached) {
            document.getElementById('request_cached').style.color = '#00FF00';
        }

        var node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}

        const maxResults = 16;
        let i = 1;
        
        try {
            data.results.forEach(item => {
                // hide NSFW
                if (item.rated === "Rx") {
                    return;
                }

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
                            <img loading="lazy" src="${item.image_url}" alt="${item.title}" />
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
console.log("This is news api project.");
// api key: 138733d9154a4031b34d2643749d66ce
// api website: https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=138733d9154a4031b34d2643749d66ce

// initiallizing the news api parameters
let source = 'bbc-news'
let apiKey = '138733d9154a4031b34d2643749d66ce'

// Grabing the news container
let newsAccordion = document.getElementById('newsAccordion');

// Creating a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when reponse is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        console.log(articles);

        let newsHtml = "";
        articles.forEach(function (element, index) {
            console.log(element, index);
            console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;

            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}

xhr.send();
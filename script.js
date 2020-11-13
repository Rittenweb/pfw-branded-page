window.addEventListener('DOMContentLoaded', init);

function init() {
  const newsFeed = document.querySelector('.newsfeed');
  window.jsonData.contentlets.forEach((articleData) => {
    const article = document.createElement('article');
    article.classList.add('media')
    const thumbnail = document.createElement('i');
    thumbnail.classList.add('far', 'fa-newspaper', 'fa-3x', 'mr-3');
    const mediaBody = document.createElement('div');
    mediaBody.classList.add('media-body')
    const titleElement = document.createElement('h2');
    titleElement.classList.add('mt-0')
    titleElement.textContent = articleData.title;
    const bodyElement = document.createElement('p');
    bodyElement.innerHTML = articleData.NewsBody.slice(0, 200) + " ..."
    const dateElement = document.createElement('p');
    const date = new Date(articleData.NewsPublishDate);
    dateElement.textContent = date.getMonth() + " / " + date.getDate() + " / " + date.getFullYear();
    dateElement.classList.add('news-date')
    article.appendChild(thumbnail);
    article.appendChild(mediaBody);
    mediaBody.appendChild(titleElement)
    mediaBody.appendChild(bodyElement)
    mediaBody.appendChild(dateElement)
    newsFeed.appendChild(article);
  })
}
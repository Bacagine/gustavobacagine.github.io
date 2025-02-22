document.addEventListener("DOMContentLoaded", function () {
  fetch("posts/posts.json")
  .then(response => response.json())
  .then(posts => {
    let blogContainer = document.querySelector(".blog-container");
    posts.forEach(post => {
      let article = document.createElement("article");
      article.classList.add("post");
      article.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p><small>Publicado em ${post.date}</small></p>
        <p>${post.summary}</p>
        <a href="${post.url}">Leia mais...</a>
      `;
       blogContainer.appendChild(article);
    });
  })
  .catch(error => console.error("Erro ao carregar os posts:", error));
});


document.querySelector(".js-posts"),document.querySelector("load-more-btn"),new class{fetchPost(){return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}};
//# sourceMappingURL=index.16ef329a.js.map

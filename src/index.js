
import { jsonplaceholderAPI, } from "./jsonplaceholder-API";

import createPostsCards from './templates/posts.hbs';

const postWrapperEl = document.querySelector('.js-posts');

const loadMoreBtnEl = document.querySelector('.load-more-btn');

const JSONPlaceholderAPI = new jsonplaceholderAPI();




const handleLoadPosts = () => {
    JSONPlaceholderAPI.page += 1;


    JSONPlaceholderAPI.fetchPost()
.then(data => {
    postWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data) );

    
})
.catch(err => {
    console.log(err);
}).finally(() => {
    const { count, page } = JSONPlaceholderAPI;
    if (100 / count === page) {
        loadMoreBtnEl.remove();
    }
});

};

loadMoreBtnEl.addEventListener('click', handleLoadPosts);

handleLoadPosts(); 
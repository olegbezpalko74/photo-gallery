
import { jsonplaceholderAPI, jsonplaceholderAPI } from "./jsonplaceholder-API";

const postWrapperEl = document.querySelector('.js-posts');

const loadMoreBtnEl = document.querySelector('load-more-btn');

const JSONPlaceholderAPI = new jsonplaceholderAPI();




const handleLoadMoreBtnClick = () => {
    JSONPlaceholderAPI.fetchPost()
.then(data => {
    postWrapperEl.insertAdjacentHTML('beforeend' ,)
})
.catch(err => {
    console.log(err);
});

}
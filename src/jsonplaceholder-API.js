export class jsonplaceholderAPI {
    fetchPost() {
        return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2')
        .then( res => {
           if (!res.ok) {
            throw new Error(res.status);
           } 
           return res.json();
        });
    }
};

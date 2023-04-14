
//   const API_KEY = '35175189-c12a0054f01822697a791b4bc';
//   const BASE_URL = 'https://unsplash.com';


export class unsplashAPI {
    #API_KEY = '35175189-c12a0054f01822697a791b4bc';

    #BAASE_URL = 'https://unsplash.com';
    #BASE_SEARCH_PARAMS = {
        per_page: 12,
        color: 'black_and_whate',
        client_id: this.#API_KEY,

    }

    query = null;
    page = 0;

    fetchPhotos() {
        const searchParams = new URLSearchParams( {
            ...this.#BASE_SEARCH_PARAMS,
            page: this.page,
            query: this.query,
           

        });


        return fetch(`${this.#BAASE_URL}/search/
        photos?${searchParams}`)
        .then( res => {
                        if (!res.ok) {
                         throw new Error(res.status);
                        } 
                        return res.json();
                     });

    }
}





















// export class jsonplaceholderAPI {

//     #BASE_URL = 'https://jsonplaceholder.typicode.com';

//     page = 0;

//     count = 20;

//     fetchPost() {

//         return fetch(`${this.#BASE_URL}/posts?_limit=${this.count}&_page=${this.page} `)
//         .then( res => {
//            if (!res.ok) {
//             throw new Error(res.status);
//            } 
//            return res.json();
//         });
//     }
// }

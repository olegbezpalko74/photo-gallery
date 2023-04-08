fetch('https://jsonplaceholder.typicode.com/comments')
.then( res => {
   if (!res.ok) {
    throw new Error(res.status);
   } 
   return res.json();
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
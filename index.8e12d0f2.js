fetch("https://jsonplaceholder.typicode.com/comments").then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o)})).catch((function(o){console.log(o)}));
//# sourceMappingURL=index.8e12d0f2.js.map

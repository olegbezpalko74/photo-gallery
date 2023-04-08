fetch("https://jsonplaceholder.typicode.com/comments").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.ccead05e.js.map

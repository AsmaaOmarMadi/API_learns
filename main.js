async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    const result = products.map(function(e){
        return `
        <div class="post">
        <h2  >${e.title}</h2>
        <h3>${e.price}</h3>
        <div class = image >
        <img class = thumbnail src = "${e.thumbnail}"/>
        </div>
        </div>
        `;
    }).join('');
    document.querySelector(".products").innerHTML = result;
}
getProducts();

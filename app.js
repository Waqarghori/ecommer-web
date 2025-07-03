let getDiv = document.querySelector('.main')
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data.products);
    data.products.map((abc)=>{
        getDiv.innerHTML += `<div class="card">
  <img src="${abc.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${abc.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    })
});

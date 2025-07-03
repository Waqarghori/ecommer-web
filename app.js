let getDiv = document.querySelector('.main')
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    data.products.map((abc)=>{
        getDiv.innerHTML += `<div class="card">
  <img src="${abc.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${abc.title}</h3>
    <p class="card-text">${abc.description}</p>
    <p><b>${abc.warrantyInformation}</b></p>
    <h5><b>Price: ${abc.price}$</b></h5>
    <a href="#" class="btn btn-primary">Order Now</a>
  </div>
</div>`
    })
});

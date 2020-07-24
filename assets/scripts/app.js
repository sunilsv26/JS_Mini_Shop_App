const productList = {
    products:[
        {
            title:'TCL 4k UHD',
            imageUrl:`https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
            Price: 'Rs.24000',
            spec:'You will love it',
        },
        {
            title:'TCL 4k UHD',
            imageUrl:`https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
            Price: 'Rs.24000',
            spec: 'True inspiration'
        },
    ],

    render(){
        const prodDom = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
              <img src="${prod.imageUrl} alt ="${prod.title}"></img>
              <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>${prod.Price}</h3>
              <p>${prod.spec}</p>
              <button>Add to Cart</button>
              </div>
            </div> 
            `
            ;
            prodList.append(prodEl)
        };
        prodDom.append(prodList)
    }
}

productList.render();
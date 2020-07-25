class Product {
  /* title;
    imageUrl;
    Price;
    spec; */

  constructor(title, img, prce, dscrptn) {
    this.title = title;
    this.imageUrl = img;
    this.Price = prce;
    this.spec = dscrptn;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart(){
      console.log('Adding product to cart');
      console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
            <div>
              <img src="${this.product.imageUrl} alt ="${this.product.title}"></img>
              <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.Price}</h3>
              <p>${this.product.spec}</p>
              <button>Add to Cart</button>
              </div>
            </div> 
            `;
    const addToCartBtn = prodEl.querySelector('button');
    addToCartBtn.addEventListener('click',this.addToCart.bind(this))
    return prodEl;
    
  }
}

class ProductList {
  products = [
    new Product(
      "TCL 4k UHD",
      `https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
      "Rs.24000",
      "You will love it"
    ),
    new Product(
      "TCL 4k UHD",
      `https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
      "Rs.24000",
      "True inspiration"
    ),
  ];
  render() {
    const prodDom = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    prodDom.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

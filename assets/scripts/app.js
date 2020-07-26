class Product {
  constructor(title, img, prce, dscrptn) {
    this.title = title;
    this.imageUrl = img;
    this.Price = prce;
    this.spec = dscrptn;
  }
}
class Component{
  constructor(prodDom){
    this.prodDom = prodDom;
  }

  createRootElement(tag,cssClasses,attributes){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length>0){
      for (const attr of attributes){
        rootElement.setAttribute(attr.name,attr.value);
      }
    }
    document.getElementById(this.prodDom).append(rootElement);
    return rootElement; 
  }
  
}

class ElementAttribute{
  constructor(attrName,attrValue){
    this.name = attrName;
    this.value=attrValue
  }
}


class ProductItem extends Component {
  constructor(product,prodDom) {
    super(prodDom)
    this.product = product; 
  }


  addToCart(){
      App.addProductToCart(this.product)
  }

  render() {
    const prodEl = this.createRootElement('li','product-item') ;
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
    
  }
}



class ShoppingCart extends Component{
    items= [];

    get totalSum(){
        const sum = this.items.reduce((preVal,curItem)=>{
            return preVal + curItem.Price;
        },0);
        return sum;
        
    } 
    
    constructor(prodDom){
      super(prodDom);
    }

    addProduct (product){
        this.items.push(product); 
        this.totalOutput.innerHTML = `<h2>Total: ${this.totalSum}</h2>`
    }

    orderNow(){
      console.log(this.items)

    }

    render(){
        const cartEl=this.createRootElement('section','cart');
        cartEl.innerHTML =`
        <h2>Total: ${this.totalSum}</h2>
        <button>Order Now</button>
        `;
        const orderBtn = cartEl.querySelector('button');
        orderBtn.addEventListener('click',this.orderNow.bind(this))
        this.totalOutput = cartEl.querySelector('h2')
        return cartEl;
    }
}

class ProductList extends Component{
  products = [
    new Product(
      "TCL 4k UHD",
      `https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
      24000,
      "You will love it"
    ),
    new Product(
      "TCL 4k UHD",
      `https://assets.products-live.ao.com/Images/e9f3edf8-056f-425a-9b17-06a09c6ca869/1280x1280/55dp628_tcl_ledtv_01c.jpg`,
      48000,
      "True inspiration"
    ),
  ];
  
  render() {
    const prodList = this.createRootElement('ul','product-list',[new ElementAttribute('id','prod-list')])
    for (const prod of this.products) {
      const productItem = new ProductItem(prod,'prod-list');
      productItem.render();
    }

  }
  constructor(prodDom){
    super(prodDom)
  }
}

class Shop {
    render(){

        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
    }
}

class App {
    static init(){
        const shop =new Shop();
        shop.render()
        this.cart = shop.cart
        
    }
 
    static addProductToCart (product){
        this.cart.addProduct(product)
    }
}

App.init();
 


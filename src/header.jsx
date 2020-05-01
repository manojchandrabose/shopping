import React, { Component } from 'react';
import './App.css';
import star from './star.png';
import cart from './cart.png';

const imgUrl = `${'https://i.picsum.photos/id/'}_id_${'/200/200.jpg'}`;

const Arr = [1,2,3,4,5,6,7,8,9,10,11,12];
const ProductArr = [];
Arr.map((item) => {

  ProductArr.push({
    id: item, 
    name: `${'Product'}${item}`, 
    price: Math.floor(Math.random()*(999-100+1)+100),
    img: imgUrl.replace(/_id_/gi, item),
    qty: 1,
    discount: Math.floor(Math.random()*(50-10+1)+10)
  });

});

class Header extends Component {

state = {
  home: true,
  cart: false,
  subtotal: '',
  inputVal: '',
  prodArr: [],
  cartArr: [],
  hightolow: false,
  lowtohigh: false,
  cartmsg: false,
  minprice: 100,
  maxprice: 1000
}

componentDidMount() {
  this.setState({prodArr: ProductArr})
}

clickMe = (id) => {
  this.setState({
    cartArr: [...this.state.cartArr, ...ProductArr.filter(item => item.id === id)]
  }, () => this.setState({subtotal: this.state.cartArr.reduce( ( sum, { price } ) => sum + parseInt(price), 0 )}));
  setTimeout(() => {
    this.setState({cartmsg: true})
  }, 500);
  setTimeout(() => {
    this.setState({cartmsg: false})
  }, 3000);
}

gotoCart = () => {
  // eslint-disable-next-line no-restricted-globals
  // let conf = confirm("Are You Sure You Wanna Go To Cart");
  // if (conf === true) {
  //   this.setState({cart: true, home: false});
  // }
  this.setState({cart: true, home: false});
}

gotoHome = () => {
  // eslint-disable-next-line no-restricted-globals
  // let conf = confirm("Are You Sure You Wanna Go To Home");
  // if (conf === true) {
  //   this.setState({cart: false, home: true});
  // }
  this.setState({cart: false, home: true});
}

removeMe = (id) => {
  // eslint-disable-next-line no-restricted-globals
  let conf = confirm("Are You Sure You Wanna Remove This Product");
  if (conf === true) {
    this.setState({cartArr: this.state.cartArr.filter(item => item.id !== id)});
  }
}

checkOut = () => {
  const rand = Math.floor((Math.random() * 1000000) + 99999);
  alert('Your Order is Success. Order id is 7000'+rand);
  window.location.reload();
}

decreseCnt = (index) => {
  const myIdex = this.state.cartArr[index];
  console.log(myIdex.qty);
  if (myIdex.qty > 1) {
    const updatedcartArr = this.state.cartArr;
    updatedcartArr[index].qty = parseInt(updatedcartArr[index].qty) - 1;
    this.setState({cartArr: updatedcartArr
    }, this.updatePrice('decreseCnt'));
  } else {
    alert('Qty cannot less than 1');
  }
}

increseCnt = (index) => {
  const updatedcartArr = this.state.cartArr;
  updatedcartArr[index].qty = parseInt(updatedcartArr[index].qty) + 1;
  this.setState({cartArr: updatedcartArr
  }, this.updatePrice('increseCnt'));
}

updatePrice = (cnt) => {
  console.log(cnt);
  this.setState({subtotal: this.state.cartArr.reduce( ( sum, { price } ) => sum + parseInt(price), 0 )});
}

searchText = (e) => {
  const searchTerm = e.target.value;
  if (searchTerm.length > 0) {
    this.setState({prodArr: ProductArr.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))});
  } else {
    this.setState({prodArr: ProductArr})
  }
}

priceLowToHigh = () => {
  const priceLowToHigh = this.state.prodArr;
  priceLowToHigh.sort((a,b) => (a.price < b.price) ? -1 : (a.price > b.price ? 1 : 0))
  this.setState({prodArr: priceLowToHigh, lowtohigh: true, hightolow: false, discountby: false })
}
priceHighToLow = () => {
  const priceLowToHigh = this.state.prodArr;
  priceLowToHigh.sort((a,b) => (a.price > b.price) ? -1 : (a.price < b.price ? 1 : 0))
  this.setState({prodArr: priceLowToHigh, lowtohigh: false, hightolow: true, discountby: false })
}
discountFilter = () => {
  const priceByDiscount = this.state.prodArr;
  priceByDiscount.sort((a,b) => (a.discount > b.discount) ? -1 : (a.discount < b.discount ? 1 : 0))
  this.setState({prodArr: priceByDiscount, lowtohigh: false, hightolow: false, discountby: true })
}

selectMinChange = (e) => {
  this.setState({minprice: e.target.value})
}
selectMaxChange = (e) => {
  this.setState({maxprice: e.target.value})
}

seachProductbyPrice = () => {
  const { minprice, maxprice } = this.state;
  this.setState({prodArr: ProductArr.filter(item => item.price >= minprice && item.price <= maxprice)})
}

render() {
const { cartArr, subtotal, prodArr, cartmsg } = this.state;
const lowtohigh = this.state.lowtohigh ? "cornflowerblue" : "blackcolor";
const hightolow = this.state.hightolow ? "cornflowerblue" : "blackcolor";
const discountby = this.state.discountby ? "cornflowerblue" : "blackcolor";

return (

<div className="products">
  <div className="page-title">
    <img src={star} alt="Home" onClick={this.gotoHome} style={{width: '50px', cursor: 'pointer'}} />
    <img src={cart} alt="Cart" onClick={this.gotoCart} style={{float: 'right', width: '50px', cursor: 'pointer'}} />
    <span style={{cursor: 'pointer', float: 'right', position: 'relative', top: '10px', left: '35px'}}>{this.state.cartArr.length}</span>
    <input type="text" style={{float: 'right', padding: '5px', margin: '5px 0px'}} placeholder="search product" onChange={this.searchText} />
  </div>
  {this.state.home === true && (
  <div>
  <div className="product-filter">
    <div className="filter-info">
      <h5>Filters</h5>
      {/* <input style={{width: '70px', fontSize: '12px'}} type="text" placeholder="Min: 100" /> */}
      <select onChange={this.selectMinChange}>
        <option value="100">100</option>
        <option value="200">199</option>
        <option value="300">299</option>
        <option value="400">399</option>
        <option value="500">499</option>
      </select>
      -
      {/* <input type="text" placeholder="Max: 999" style={{width: '70px', fontSize: '12px'}} /> */}
      <select onChange={this.selectMaxChange}>
        <option value="600">599</option>
        <option value="700">699</option>
        <option value="800">799</option>
        <option value="900">899</option>
        <option value="1000">999</option>
      </select>
      <button style={{width: '70px', marginLeft: '10px', color: 'white', backgroundColor: 'cornflowerblue', border: 'cornflowerblue'}} onClick={this.seachProductbyPrice}>Apply</button>
    </div>
  </div>
  <div className="products-grid">
  {cartmsg === true && (
    <div className="addcart-msg">
      <span style={{color: 'green'}}>Product Added To Cart Sucessfully!!</span>
    </div>
  )}
    <div className="product-sort">
    <span style={{fontWeight: '600'}} >Sort By:</span>
    <span onClick={this.priceLowToHigh} className={lowtohigh}>Price: Low to High</span>
    <span onClick={this.priceHighToLow} className={hightolow}>Price: High to Low</span>
    <span onClick={this.discountFilter} className={discountby}>Disount</span>
    </div>
    {prodArr.map((items) => (
    <div className="product-card" key={items.id}>
      <div className="product-image">
        <img src={items.img} alt={items.name}/>
      </div>
      <div className="product-info">
        <h5>{items.name}</h5>
        <div style={{marginBottom: '10px'}}>
        <span style={{fontWeight: '500'}}>${items.price}.00</span>
        <span style={{color: 'green', paddingLeft: '20px', fontWeight: '500'}}>{items.discount} % off</span>
        </div>
        <div style={{marginLeft: '3rem'}}>
        <button onClick={() => this.clickMe(items.id)} disabled={this.state.cartArr.findIndex(x => x.id === items.id) !== -1}>Add To Cart</button>
        </div>
      </div>
    </div>
    ))}
  </div>
  </div>
  )}
  {this.state.cart === true && (
    
    <div style={{float: 'left', width: '100%', paddingTop: '25px', minHeight: '600px'}}>

      <h4>SHOPPING CART</h4>

    <div className="product-cart" style={{width: '75%', float: 'left'}}>

      {cartArr.length > 0 && cartArr.map((items, index) => (
        
        <div className="product-card" style={{width: '100%', float: 'left'}} key={items.id}>
          <div className="product-image">
            <div style={{float: 'left'}}>
            <img src={items.img} alt={items.name}/>
            </div>
            <div style={{float: 'left', padding: '30px'}}>
              <h5 style={{paddingBottom: '25px'}} >{items.name}</h5>
              <h6>${items.price}.00</h6>
            </div>
            <div style={{float: 'left', padding: '50px'}}>
              <button style={{width: '35px', marginRight: '10px'}} onClick={() => this.decreseCnt(index)}>-</button>
              <input onChange={(e) => this.setState({inputVal: e.target.value})} style={{width: '75px', marginRight: '10px'}} type="text" value={items.qty}></input>
              <button style={{width: '35px'}} onClick={() => this.increseCnt(index)}>+</button>
            </div>
            <div style={{float: 'left', padding: '50px'}}>
              <input onClick={() => this.removeMe(items.id)} type="button" style={{borderRadius: 'none', marginRight: '10px'}} value="Remove"/>
            </div>
          </div>
        </div>
      
      ))}
      
    </div>

    
    {cartArr.length > 0 && (

    <div className="price-details">
      <h5>PRICE DETAILS</h5>
      <div><span>Price :</span><span style={{float: 'right'}}>${subtotal}</span></div>
      <div><span>Qty :</span><span style={{float: 'right'}}>{cartArr.length}</span></div>
      <br />
      <div><span>Total Payable :</span><span style={{float: 'right'}}>${subtotal}</span></div>
      <br />
      <button style={{width: '100%', height: '40px'}} onClick={this.checkOut}>Checkout</button>
    </div>
    )}
    
    { cartArr.length === 0 && (
      <div >
        <span>Oops!! Your cart is empty.</span>
      </div>
    )}

    </div>


    
  )}
  <div className="copyright">
    <span style={{color: '#fff'}}>Copyright</span>
    </div>
</div>

);

}

}

export default Header;
import React, { Component } from 'react';
import './App.css';

const imgUrl = `${'https://i.picsum.photos/id/'}_id_${'/200/200.jpg'}`;

const Arr = [1,2,3,4,5,6,7,8,9,10,11,12];
const ProductArr = [];
Arr.map((item) => {

  ProductArr.push({
    id: item, 
    name: `${'Product'}${item}`, 
    price: Math.floor(Math.random()*(999-100+1)+100),
    img: imgUrl.replace(/_id_/gi, item),
    qty: 1
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
  lowtohigh: false
}

componentDidMount() {
  this.setState({prodArr: ProductArr})
}

clickMe = (id) => {
  this.setState({
    cartArr: [...this.state.cartArr, ...ProductArr.filter(item => item.id === id)]
  }, () => this.setState({subtotal: this.state.cartArr.reduce( ( sum, { price } ) => sum + parseInt(price), 0 )}));
  setTimeout(() => {
    alert('Product Added To Cart Sucessfully!!')
  }, 500);
}

gotoCart = () => {
  // eslint-disable-next-line no-restricted-globals
  let conf = confirm("Are You Sure You Wanna Go To Cart");
  if (conf === true) {
    this.setState({cart: true, home: false});
  }
}

gotoHome = () => {
  // eslint-disable-next-line no-restricted-globals
  let conf = confirm("Are You Sure You Wanna Go To Home");
  if (conf === true) {
    this.setState({cart: false, home: true});
  }
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
  if (myIdex.qty < 1) {
    // myIdex.qty = myIdex.qty - 1;
    // this.setState({cartArr: [...this.state.cartArr, myIdex]})
  } else {
    alert('Qty cannot less than 1');
  }
}

increseCnt = (index) => {
  // const objIndex = this.state.cartArr.findIndex((obj => obj.id === index));
  // myArray[objIndex].qty = myArray[objIndex].qty+1;
  // this.setState({cartArr: myArray})
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
  this.setState({prodArr: priceLowToHigh, lowtohigh: true, hightolow: false })
}
priceHighToLow = () => {
  const priceLowToHigh = this.state.prodArr;
  priceLowToHigh.sort((a,b) => (a.price > b.price) ? -1 : (a.price < b.price ? 1 : 0))
  this.setState({prodArr: priceLowToHigh, lowtohigh: false, hightolow: true })
}


render() {
const { cartArr, subtotal, prodArr } = this.state;
const lowtohigh = this.state.lowtohigh ? "cornflowerblue" : "blackcolor";
const hightolow = this.state.hightolow ? "cornflowerblue" : "blackcolor";

return (

<div className="products">
  <div className="page-title">
    <span style={{float: 'left', cursor: 'pointer'}} onClick={this.gotoHome}>HOME</span>
    <span style={{float: 'right', cursor: 'pointer'}} onClick={this.gotoCart}>CART({this.state.cartArr.length})</span>
    <input type="text" style={{float: 'right', paddingLeft: '5px', marginRight: '10px'}} placeholder="search product" onChange={this.searchText} />
  </div>
  {this.state.home === true && (
  <div>
  <div className="product-filter">
    <div className="filter-info">
      <h5>Filters</h5>
      <input style={{width: '70px', fontSize: '12px'}} type="text" placeholder="Min: 100" />
      -
      <input type="text" placeholder="Max: 999" style={{width: '70px', fontSize: '12px'}} />
      <button style={{width: '70px', marginLeft: '10px'}} onClick={this.seachProductbyPrice}>search</button>
    </div>
  </div>
  <div className="products-grid">
    <div className="product-sort">
    <span style={{fontWeight: '600'}} >Sort:</span>
    <span onClick={this.priceLowToHigh} className={lowtohigh}>Price: Low to High</span>
    <span onClick={this.priceHighToLow} className={hightolow}>Price: High to Low</span>
    </div>
    {prodArr.map((items) => (
    <div className="product-card" key={items.id}>
      <div className="product-image">
        <img src={items.img} alt={items.name}/>
      </div>
      <div className="product-info">
        <h5>{items.name}</h5>
        <h6>${items.price}.00</h6>
        <button onClick={() => this.clickMe(items.id)} disabled={this.state.cartArr.findIndex(x => x.id === items.id) !== -1}>Add To Cart</button>
      </div>
    </div>
    ))}
  </div>
  </div>
  )}
  {this.state.cart === true && (
    
    <div style={{float: 'left', width: '100%', paddingTop: '25px'}}>

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
</div>

);

}

}

export default Header;
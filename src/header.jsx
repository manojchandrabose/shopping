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
  cartArr: []
}

// componentDidMount() {
//   const cartData = this.state.cartArr.length > 0 && ProductArr.filter(item => this.state.cartArr.indexOf(item.id) !== -1);
//   const subtotal = this.state.cartArr.length > 0 && cartData.reduce( ( sum, { price } ) => sum + parseInt(price), 0 );
//   const totalqty = this.state.cartArr.length > 0 && this.state.cartArr.length;
// }

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
    this.setState({cartArr: this.state.cartArr.filter(item => item !== id)});
  }
}

checkOut = () => {
  const rand = Math.floor((Math.random() * 1000000) + 99999);
  alert('Your Order is Success. Order id is 7000'+rand);
  window.location.reload();
}

decreseCnt = (index) => {
  const myIdex = this.state.cartArr[index];
  myIdex.qty = myIdex.qty - 1;
  myIdex.price = myIdex.price * myIdex.qty;
  console.log(myIdex);
}

increseCnt = (index) => {
  const myIdex = this.state.cartArr[index];
  myIdex.qty = myIdex.qty + 1;
  myIdex.price = myIdex.price * myIdex.qty;
  this.setState({cartArr: [...this.state.cartArr, ...myIdex]})
}

render() {

  const { cartArr, subtotal } = this.state;
  console.log(cartArr);

return (

<div className="products">
  <div className="page-title">
    <span style={{float: 'left', cursor: 'pointer'}} onClick={this.gotoHome}>HOME</span>
    <span style={{float: 'right', cursor: 'pointer'}} onClick={this.gotoCart}>CART({this.state.cartArr.length})</span>
  </div>
  {this.state.home === true && (
  <div>
  <div className="product-filter">
    <div className="filter-info">
      <h5>Filters</h5>
    </div>
  </div>
  <div className="products-grid">
    <div className="product-sort">

    </div>
    {ProductArr.map((items) => (
    <div className="product-card" key={items.id}>
      <div className="product-image">
        <img src={items.img} alt={items.name}/>
      </div>
      <div className="product-info">
        <h5>{items.name}</h5>
        <h6>${items.price}.00</h6>
        <button onClick={() => this.clickMe(items.id)} disabled={this.state.cartArr.indexOf(items.id) !== -1}>Add To Cart</button>
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
    
    { !cartArr && (
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
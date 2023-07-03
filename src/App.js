
import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

import firebase from './index'


class App extends React.Component {

  constructor()
    {
        super();
        this.state={
            products:[],
            loading:true
        }
    }

   componentDidMount()
   {

    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
     
      const products=snapshot.docs.map((doc)=>{
        
        const data = doc.data();
        data['id']=doc.id;
        return data;
      })

      this.setState(
        {
            products,
            loading:false
        }
      )
    });

   }

    handleIncreaseQuantity = (product)=>
    {
        const {products} =this.state;

        const index= products.indexOf(product);
        products[index].qty+=1;

        this.setState(
            {
                products
            }
        )

    }

    handleDecreaseQuantity = (product)=>
    {
        const {products} =this.state;

        const index= products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        products[index].qty-=1;
        

        this.setState(
            {
                products

            }
        )

    }

    handleDeleteProduct = (id)=>
    {
        const{products} =this.state;

        const items=products.filter((item)=>{
            return item.id!==id})
        

        this.setState({
            products:items
        })


    }

    getCartCount()
    {
      const {products}=this.state;

      let count =0;
      products.forEach((product)=>{
        count+=product.qty
      })

      return count;
    }

    cartTotal()
    {
      const {products}=this.state;

      let total =0;
      products.forEach((product)=>{
        total+=(product.qty*product.price)
      })

      return total;
    }
    render(){
        const {loading}= this.state;
      return (
        <div className="App" style={{backgroundImage: "url('https://i.pinimg.com/222x/1f/75/1c/1f751cd55f2853a18c2e4a23e01e86a0.jpg')",backgroundSize:'cover'}}>
          <Navbar 
          count={this.getCartCount()}/>
        <Cart
        products={this.state} 
        increaseQuantity={this.handleIncreaseQuantity}
        decreaseQuantity={this.handleDecreaseQuantity}
        onDelete={this.handleDeleteProduct}/>

        {loading&& <h1 style={{color:'white'}}>Loading Products....</h1>}


        <div style={{fontSize:25,paddingLeft:20,color:'white'}}>Total : {this.cartTotal()}</div>
        </div>
      );
    }
  
}

export default App;

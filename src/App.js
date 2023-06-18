
import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {

  constructor()
    {
        super();
        this.state={
            products:[
                {
                    title:'Mobile Phone',
                    price:'1000',
                    qty:1,
                    img:'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                    id:1
                },
                {
                    title:'Laptop',
                    price:'5000',
                    qty:4,
                    img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    id:2
                },
                {
                    title:'Watch',
                    price:'300',
                    qty:10,
                    img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                    id:3
                }
            ]
        }
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
      return (
        <div className="App" style={{backgroundImage: "url('https://i.pinimg.com/222x/1f/75/1c/1f751cd55f2853a18c2e4a23e01e86a0.jpg')",backgroundSize:'cover'}}>
          <Navbar 
          count={this.getCartCount()}/>
        <Cart
        products={this.state} 
        increaseQuantity={this.handleIncreaseQuantity}
        decreaseQuantity={this.handleDecreaseQuantity}
        onDelete={this.handleDeleteProduct}/>

        <div style={{fontSize:25,paddingLeft:20,color:'white'}}>Total : {this.cartTotal()}</div>
        </div>
      );
    }
  
}

export default App;

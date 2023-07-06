
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
        this.db=firebase.firestore()
    }

   componentDidMount()
   {

    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
     
    //   const products=snapshot.docs.map((doc)=>{
        
    //     const data = doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })

    //   this.setState(
    //     {
    //         products,
    //         loading:false
    //     }
    //   )
    // });

    this.db
    .collection('products')
    // .where('price','<',1000)
    // .where('title','==','Mug')
    .orderBy('price','desc')
    .onSnapshot((snapshot) => {
     
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
        // products[index].qty+=1;

        // this.setState(
        //     {
        //         products
        //     }
        // )

        const docRef = this.db.collection('products').doc(products[index].id)

        docRef
        .update(
            {
                qty:products[index].qty+1
            }
        )
        .then(()=>
        {
            console.log("Updated Successfully")
        })
        .catch((error)=>
        {
            console.log("Error Occured : ",error)
        })

    }

    handleDecreaseQuantity = (product)=>
    {
        const {products} =this.state;

        const index= products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        // products[index].qty-=1;
        

        // this.setState(
        //     {
        //         products

        //     }
        // )

        const docRef = this.db.collection('products').doc(products[index].id)

        docRef
        .update(
            {
                qty:products[index].qty-1
            }
        )
        .then(()=>
        {
            console.log("Updated Successfully")
        })
        .catch((error)=>
        {
            console.log("Error Occured : ",error)
        })

    }

    handleDeleteProduct = (id)=>
    {
        const{products} =this.state;

        // const items=products.filter((item)=>{
        //     return item.id!==id})
        

        // this.setState({
        //     products:items
        // })

        const docRef = this.db.collection('products').doc(id)

        docRef
        .delete()
        .then(()=>
        {
            console.log("Deleted Successfully")
        })
        .catch((error)=>
        {
            console.log("Error Occured : ",error)
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

    // addProduct=()=>
    // {
    //     this.db
    //     .collection('products')
    //     .add(
    //         {
    //             title:'Mug',
    //                 price:'450',
    //                 qty:10,
    //                 img:'https://m.media-amazon.com/images/I/61dCM74pPiL._AC_UY1100_.jpg',
    //         }
    //     )
    //     .then((docRef)=>{
    //         console.log("Product added successfully : ",docRef)
    //     })
    //     .catch((error)=>
    //     {
    //         console.log("Error Occured : ",error)
    //     })
    // }


    render(){
        const {loading}= this.state;
      return (
        <div className="App" style={{backgroundImage: "url('https://i.pinimg.com/222x/1f/75/1c/1f751cd55f2853a18c2e4a23e01e86a0.jpg')",backgroundSize:'cover'}}>
          <Navbar 
          count={this.getCartCount()}/>
          {/* <button onClick={this.addProduct}style={{padding:10,fontSize:20}}>Add Product</button> */}
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

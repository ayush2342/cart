import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    title:'Mobile Phone',
                    price:'1000',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    title:'Laptop',
                    price:'5000',
                    qty:4,
                    img:'',
                    id:2
                },
                {
                    title:'Watch',
                    price:'300',
                    qty:10,
                    img:'',
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
        if(products[index].qty==0)
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

    render()
    {
        const {products}=this.state;
        return(
        <div className='cart'>
            {
            products.map((product)=>
            {
                return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    increaseQuantity={this.handleIncreaseQuantity}
                    decreaseQuantity={this.handleDecreaseQuantity}
                    />
                    ) 
            })}
           
        </div>
        )
    }
}


export default Cart;
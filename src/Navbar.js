import React from 'react';

const Navbar =(props)=>{

        return(
            <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
            <img style={styles.cartLogo} src="https://t3.ftcdn.net/jpg/03/05/96/10/240_F_305961049_jSajJ37lNv4RwnTZEXKpFfHlKGSqg8gF.jpg" alt="cart-icon" />

              <img style={styles.cartIcon} src="https://t4.ftcdn.net/jpg/01/86/94/37/240_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg" alt="cart-icon" />
              <span style={styles.cartCount}>{props.count}</span>
            </div>
          </div>
        )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    cartLogo:{
        height: 35,
        width:50,
        position:'absolute',
        right:1300
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar;
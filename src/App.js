import './App.scss';
import Cart from './components/Cart/Cart';
import Main from './components/Main/Main';
import data from './data';
import { useState } from 'react';



const App = () => {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);
  const [product, setProduct] = useState(products)

  const handleAdd = (item) => {
    const exist = cartItem.find((val) => val.id === item.id)
    const selectItem = products.find((val) => val.id === item.id)

    if (selectItem) {
      setProduct(
        product.map((val) => {
          if (val.id === item.id) {
            return {
              ...val,
              clicked: true
            }
          }
          return val
        })
      )
    } else {
      setProduct([...product, { ...product, clicked: true }])
    }
    if (exist) {
      setCartItem(
        cartItem.map((val) => {
          if (val.id === item.id) {
            return {
              ...val,
              qty: exist.qty + 1
            }
          }
          return val
        }
        )
      );
    }
    else {
      setCartItem([...cartItem, { ...item, qty: 1 }])
    }
  }


  const handleRemove = (product) => {
    const exist = cartItem.find((val) => val.id === product.id)
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((val) => val.id !== product.id))
    } else {
      setCartItem(
        cartItem.map((val) => {
          if (val.id === product.id) {
            return {
              ...val,
              qty: exist.qty - 1
            }
          }
          return val
        }
        )
      );
    }
  }

  const handleCancle = (item) => {
    const newCartItem = cartItem.filter(val => val.id !== item.id)
    setCartItem(newCartItem)
    const selectItem = products.find((val) => val.id === item.id)

    if (selectItem) {
      setProduct(
        product.map((val) => {
          if (val.id === item.id) {
            return {
              ...val,
              clicked: false
            }
          }
          return val
        })
      )
    } else {
      setProduct([...product, { ...product, clicked: false }])
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Main handleAdd={handleAdd} handleCancle={handleCancle} product={product}></Main>
          </div>
          <div className="col-4">
            <Cart handleAdd={handleAdd} handleRemove={handleRemove} handleCancle={handleCancle} cartItem={cartItem} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

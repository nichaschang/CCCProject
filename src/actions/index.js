// 老師範例
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

export const addValueAsync = value => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add value')
      dispatch(addValue(value))
    },1000)
  }
}

//跟server要資料
//呼叫購物車
export const sendCart =item=>{
  return {type:'SHOW_CART',value:item}
}
export const getShopCart = item => {
  return async dispatch => {
    const request = new Request('http://localhost:5555/shopcart', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(sendCart(data))
  }
}
//更改購物車內容
export const updateCart=item=>{
  return {type:'ADD_ITEM',value:item}
}

// export const updateShopCart = (item) => {
//   return async dispatch => {
//     const request = new Request(`http://localhost:5555/shopcart`, {
//       method: 'PATCH',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//     const res = await fetch(request)
//     const data = await res.json()

//     console.log('data', data)
//     dispatch(updateCart())
//   }
// }
//呼叫產品
export const sendProduct =val=>{
  return {type:'SHOW_PRODUCT',value:val}
}
export const getProduct = val => {
  return async dispatch => {
    const request = new Request('http://localhost:5555/product', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('data', data)
    dispatch(sendProduct(data))
  }
}
//----stacey 優惠券 -------
//回傳coupon
export const showCoupon = val =>{
    return {type:'SHOW_VALUE',value:val}
}
//跟server要資料
export const formServerCouponData = val => {
    return async dispatch => {
      const request = new Request('http://localhost:5555/coupon', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(request)
      const data = await res.json()
  
      console.log('data', data)
      dispatch(showCoupon(data))
    }
  }

//領取的動作
export const getCoupon = (item) => {
    return async dispatch => {
      const request = new Request(`http://localhost:5555/coupon/${item.cp_id}`, {
        method: 'PATCH',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: `{"geted":${!item.geted},"cp_getedCount":${+item.cp_getedCount+5}}`,
  

      })
      const res = await fetch(request)
      const data = await res.json()
  
      console.log('data', data)
      dispatch(formServerCouponData())
    }
  }

//篩選的動作
export const addFilterCoupon = val =>{
  console.log('999')
  return {type:'ADD_VALUE',value:val}
}
export const minusFilterCoupon = val =>{
  return {type:'MINUS_VALUE',value:val}
}


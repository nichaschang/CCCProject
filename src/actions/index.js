// 老師範例
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

// export const addValueAsync = value => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('delay 3s to add value')
//       dispatch(addValue(value))
//     },1000)
//   }
// }

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })


// 購物車內變更
export const updateShopCart = (item) => {
  return async dispatch => {
    const request = new Request(`http://localhost:5555/shopcart?${item.pid}`, {
      method: 'PATCH',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: `{"count":${+item.count+1}}`,

    })
    const res = await fetch(request)
    const data = await res.json()
    
    console.log('data', data)
    dispatch(getShopCart())
  }
}

//跟server要資料
//呼叫購物車
export const sendCart =value=>{
      return {type:'SHOW_CART',value:value}
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

//加入購物車
export const addShopCart =value=>{
      return {type:'SHOW_CART',value:value}
  }
  
export const addShopCartItem = item => {
  // {...item,count:1}
  
  console.log({...item,count:1})
  return async dispatch => {
    const request = new Request('http://localhost:5555/shopcart', {
      method: 'POST',
      body:[...request,item],
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(addShopCart(data))
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


import { combineReducers } from 'redux'
//老師範例
// 第一步：建立reducer
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value
//     case 'MINUS_VALUE':
//       return state - action.value
//     default:
//       return state
//   }
// }



const AddShopCartCount=(state=0,action)=>{
  // action.total.find()
    switch (action.type){
      case 'ADD_VALUE':
        return state+action.value
      case 'MINUS_VALUE':
        return state-action.value
      default:
        return state
    }
}




//呼叫會員購物車
const getShop = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_CART':
      return action.value
    default :
      return state
  }
}


//優惠券
const getCouponData = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_VALUE':
      return action.value
    case '':
    default :
      return state
  }
}

//優惠券篩選
const filterCoupon = (state=[],action)=>{
  switch (action.type){
    case 'ADD_VALUE':
      return [action.value,...state]
    case 'MINUS_VALUE':
      let ind = state.indexOf(action.value)
      return state.map((val,ind)=>{
        
      })
    default :
      return state
  }
}




// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
  getCouponData,filterCoupon,getShop,AddShopCartCount
})

export { rootReducer }

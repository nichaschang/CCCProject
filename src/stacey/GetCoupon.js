import React ,{useEffect ,useState}from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'
import CouponItem from './components/CouponItem'



//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData,getCoupon} from '../actions/index'

function GetCoupon(props) {
  console.log('vendor',props.vendor)
  console.log('vendor',props.vendor.length)

  const vendor =['apple','apple2']

  useEffect(()=>{
    props.formServerCouponData()
  },[])

  const filterNum = props.vendor.length

  const filterCouponItem = props.data.map((val,ind)=>{
    if(vendor.indexOf(val.cp_vendor) > -1){
      return <CouponItem key={ind} data={props.data[ind]} />
    }
  })

  const allCouponItem = props.data.map((val,ind)=>{
    return <CouponItem key={ind} data={val} />
  })

  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        <SideFilter />
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            {/* {props.data.map((val,ind)=>{
              return <CouponItem key={ind} data={val} />
            })} */}
            {filterNum?filterCouponItem:allCouponItem}
            {/* 篩選品牌 */}
            
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData ,
            vendor: store.filterCoupon,}
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    formServerCouponData,getCoupon
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))

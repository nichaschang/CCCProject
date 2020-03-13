import React  from 'react'
import {Link} from 'react-router-dom'

function OrderInfo(){


function getMonth(){
    let MonthBox=[]
        for(let i=1;i<=12;i++){
            MonthBox.push(<option value={i}>{i}</option>)
        }   
        return MonthBox
    }
function getYear(){
let yearBox=[]
    for(let i=1920;i<=2020;i++){
     yearBox.push(<option value={i}>{i}</option>)
    }   
    return yearBox
}
    return (<>
    <div className="container bg-white" style={{width:'1300px' ,height:'1450px'}}>
        <div className="px-4 border" style={{width:'950px'}}>
            <div className="form-row d-flex flex-column">
            <h2 className="border-bottom p-3" style={{display:'block'}}>訂購人資料</h2>
                <div className="col my-3">
                    <h4>訂購人姓名</h4>
                    <input type="text" className="form-control" placeholder="First name" style={{border:'none',borderBottom:'1px solid #ddd'}}/>
                </div>
                <div className="col my-3">
                    <h4>訂購人電話</h4>
                    <input type="text" className="form-control" placeholder="Last name" style={{border:'none',borderBottom:'1px solid #ddd'}}/>
                </div>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
            </div>
            <div>
                <div className="form-row d-flex flex-column my-5" style={{width:'975px'}}>
                    <h2 className="border-bottom p-3" style={{display:'block'}}>運送方式</h2>
                </div>
                <div className="d-flex">
                    <div className="custom-control custom-checkbox mr-5">
                        <input type="radio" className="custom-control-input" name="checkshipping" id="Seven-store"/>
                        <label className="custom-control-label" htmlFor="Seven-store">7-11超商</label>
                        <Link to="/OrderInfo" className="ml-3">選擇門市</Link>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input" name="checkshipping" id="HiLife"/>
                        <label className="custom-control-label" htmlFor="HiLife">萊爾富</label>
                        <Link to="/OrderInfo" className="ml-3">選擇門市</Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="form-row d-flex flex-column my-5" style={{width:'975px'}}>
                    <h2 className="border-bottom p-3" style={{display:'block'}}>選擇付款方式</h2>
                </div>
                <div className="d-flex">
                    <div className="custom-control custom-checkbox mr-5">
                        <input type="radio" className="custom-control-input" name="payment" id="COD"/>
                        <label className="custom-control-label" htmlFor="COD">貨到付款</label>
                    </div>
                    <div className="custom-control custom-checkbox mr-5">
                        <input type="radio" className="custom-control-input" name="payment" id="CreditCard"/>
                        <label className="custom-control-label" htmlFor="CreditCard">信用卡一次付清</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input" name="payment" id="ATM"/>
                        <label className="custom-control-label" htmlFor="ATM">ATM轉帳</label>
                    </div>
                </div>
            </div>
            <div className="form-row my-5  d-flex align-items-center">
                <div className='col-1'>
                    <h4>信用卡號</h4>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="City"/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="State"/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Zip"/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Zip"/>
                </div>
            </div>         
            <div className="form-row my-5 d-flex align-items-center">
                <div className='col-1'>
                    <h4>有效期限</h4>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <select className="custom-select mr-3">
                        {getMonth()}
                    </select>
                    <span>月</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <select className="custom-select mr-3">
                        {getYear()}
                    </select>
                    <span>年</span>
                </div>
            </div>       
            <div className="form-row my-5 d-flex align-items-center">
                <div className='col-1'>
                    <h4>檢核碼</h4>
                </div>
                <div className="col-5 d-flex align-items-center">
                    <input type="text" className="form-control mr-3 w-25" placeholder="Number"/>
                    <p style={{width:'50%',margin:0,}}>卡片背面，後三碼</p>
                </div>
            </div>            
            <div className="form-row my-5 d-flex align-items-center">
            <div className='col-1'>
                <h4>發票</h4>
            </div>
            <div className="custom-control custom-checkbox mr-5">
                    <input type="radio" className="custom-control-input" name="invoice" id="invoice"/>
                    <label className="custom-control-label" htmlFor="COD">個人電子發票</label>
                </div>
                <div className="custom-control custom-checkbox mr-5">
                    <input type="radio" className="custom-control-input" name="invoice" id="donate"/>
                    <label className="custom-control-label" htmlFor="donate">捐贈發票</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="radio" className="custom-control-input" name="invoice" id="company"/>
                    <label className="custom-control-label" htmlFor="company">公司戶電子發票</label>
                </div>
            </div>    
            
            <div className="form-row my-5 d-flex align-items-center">
                <div className='col-1'>
                    <h4>統一編號</h4>
                </div>
                <div className="col-10 d-flex align-items-center">
                    <input type="text" className="form-control mr-3 w-25" placeholder="Number"/>
                </div>  
            </div>   
        </div>
        <buttno className='btn btn-danger'>上一步</buttno>
        <buttno className='btn btn-danger'>結帳</buttno>
    </div>
    </>)
}
export default OrderInfo

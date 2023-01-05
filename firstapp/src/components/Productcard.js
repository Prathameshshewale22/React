import { useEffect,useState } from 'react';
import {PenFill, PersonCircle,Trash} from 'react-bootstrap-icons';
import {Link, useLocation} from 'react-router-dom';

const Productcard=(props)=>{

     let[prodarr,setprodarr]=useState({pid:"",pname:"",price:""});
     console.log(prodarr);
     let state=useLocation().state;

useEffect(()=>{
    setprodarr({...state.product});
},[]);

//     const deleteProd=(id)=>{
//         props.removeProd(id);
//  }

//  const updateProd=(products)=>{
//     props.editproduct(products);
    
//  }
 // <div className="col-md-2" onClick={()=>{updateProd(props.products)}}>
 /*<Link to={{pathname:"/edit" ,state:{product:props.products}}}>
 <PenFill></PenFill>
 </Link>
  <div className="col-md-2" onClick={()=>{deleteProd(props.products.pid)}}>
          <Trash></Trash>
  </div>*/
    return(
        <div>
        <div className="container">
        <div className="row">
            <div className="col-md-1">
                <PersonCircle></PersonCircle>
            </div>
            <div className="col-md-7">
               <span>{prodarr.pid}</span>&nbsp;&nbsp;
               <span>{prodarr.pname}</span>&nbsp;&nbsp;
               <span>{prodarr.price}</span>&nbsp;&nbsp;
            </div>
            
            <Link to="/list">
            <button type="button" name="btn" id="btn">Back</button>
            </Link>
           
        </div>
        </div>
        </div>
    )
}
export default Productcard;
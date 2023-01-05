
import { useState, useEffect} from "react";
// import Productcard from "./Productcard";
// import Editprod from "./Editprod";
import ProductService from "./ProductService";
import {Link} from 'react-router-dom';

const Productlist=(props)=>{
  let[flag,setflag]=useState(false);
  let[prodob,setprod]=useState([]);

  useEffect(()=>{
    ProductService.getproduct()
    .then((response)=>{
       console.log("in useffect of prodlist initialization");
       console.log(response.data);
       setprod(response.data);
    })
    .catch((err)=>{console.log("error occured",err)});
   },[]);
    
    const deleteData=(pid)=>{
        ProductService.deleteproduct(pid)
        .then((result)=>{
            console.log(result);
            {flag? setflag(false):setflag(true)};
        })
        .catch(()=>{});
        
    }
    useEffect(()=>{
      ProductService.getproduct()
      .then((response)=>{
         console.log("in useffect of prodlist initialization");
         console.log(response.data);
         setprod(response.data);
      })
      .catch((err)=>{console.log("error occured",err)});
     },[flag]);
    // const changeprod=(ob)=>{
    //     setflag(true);
    //     setprod({pid:"",pname:"",price:""});
    //     setprod({...ob});
    // }
  //
      // const editData=(ob)=>{
      //   props.Updatedata(ob);
      // }



   const renderlist=()=>{
    console.log(props.product);
     return prodob.map((prod,index)=>{
        return <tr><td>{prod.pid}</td><td>{prod.pname}</td>{prod.price}
        <td>
          <button type="button" className="btn btn-danger" name="btn" id="btn" onClick={()=>deleteData(prod.pid)}>Delete</button>
        </td>
        <td>
          <Link to={{pathname:"/view",state:{product:prod}}}>
          <button type="button" className="btn btn-danger" name="viewprod" id="viewprod" >view</button>
          </Link>
          <Link to={{pathname:"/edit",state:{product:prod}}}>
          <button type="button" name="editbtn" id="editbtn" class="btn btn-success">Edit</button>
          </Link>
        </td>
        </tr>
      });
    }
    // const editprod=(ob)=>{
    //   props.updateprod(ob);
    //   setflag(false);
    // }
  // {flag?<div><Editprod product={prodob} modifyprod={editprod}></Editprod></div>:" "}
    return(
<div>
    <h1>Product List </h1>
    <Link to="/add">
      <button type="button" name="btn" id="btn">Addproduct</button>
    </Link>
    <table>
      <thead>
        <th>ProductId</th><th>Product name</th><th>Price</th>
      </thead>
      <tbody>
      {renderlist()};
      </tbody>
    </table>
      
     
    
   
</div>
    )
}
export default Productlist;
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ProductService from "./ProductService";
// import {Link} from 'react-router-dom'
const Editprod=()=>{
    let[pd,setprodob]=useState({pid:"",pname:"",price:""});
    let state=useLocation().state;
     let history=useHistory();
     useEffect(()=>{
        setprodob({...state.product})
    },[]);

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setprodob({...pd,[name]:value});
    }

    const updateproduct=()=>{
        console.log(pd);
       ProductService.updateproduct(pd)
       .then((result)=>{
        console.log(result.data);
        history.push("/list");
        })
        .catch(()=>{});
    //    setprodob({pid:"",pname:"",price:""});
      
    }




    return(
        <div>
            <form>
            <div class="form-group">
                <label for="pid">Product Id</label>
                <input type="text" class="form-control" id="pid" name="pid"
                value={pd.pid} 
                onChange={handleChange}
                placeholder="enter pid"/>
                
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="pname" 
                value={pd.pname} 
                onChange={handleChange}
                placeholder="enter name"/>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" name="price" 
                value={pd.price} 
                onChange={handleChange} placeholder="enter price"/>
            </div>
            <button type="button" class="btn btn-primary" onClick={updateproduct}>Update Product</button>
        </form>
        </div>
    )
}

export default Editprod;
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import productService from './ProductService';
const Productadd=(props)=>{
     let [prodob,setprod]=useState({pid:"",pname:"",price:""});
     let history=useHistory();
    const handleChange=(event)=>{
        let{name,value}=event.target
        setprod({...prodob,[name]:value});
     }
    
     const addData=()=>{
        productService.addproduct(prodob)
        .then((result)=>{
           console.log(result);
           history.push("/list");
        })
        .catch(()=>{});
     };

    return(
    <div>
        <form>
            <div class="form-group">
                <label for="pid">Product Id</label>
                <input type="text" class="form-control" id="pid" name="pid"
                value={prodob.pid} 
                onChange={handleChange}
                placeholder="enter pid"/>
                
            </div>
            <div class="form-group">
                <label for="name"> product Name</label>
                <input type="text" class="form-control" id="name" name="pname" 
                value={prodob.pname} 
                onChange={handleChange}
                placeholder="enter name"/>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" name="price" 
                value={prodob.price} 
                onChange={handleChange} placeholder="enter price"/>
            </div>
            
            <button type="button" class="btn btn-primary" onClick={addData}>Add Product</button>
        
        </form>
    </div>
        
    )
}
export default Productadd;
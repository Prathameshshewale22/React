
import axios from 'axios';

class ProductService{
    constructor(){
        this.baseurl="http://localhost:4000/"
    }
    getproduct(){
        return axios.get(this.baseurl+"product");
    }

    addproduct(prod){
       return axios.post(this.baseurl+"product",prod);
    }

    deleteproduct(pid){
        return axios.delete(this.baseurl+"product/"+pid);
    }

    updateproduct(prod){
        return axios.put(this.baseurl+"product/"+prod.pid,prod);
    }
}

export default new ProductService();
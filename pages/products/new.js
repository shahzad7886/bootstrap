import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function NewProduct() {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [goToProduct, setgoToProduct] = useState('false');
const router = useRouter();
async function createProduct(ev) {
  ev.preventDefault();
  const data ={title, description, price}
await axios.post('/api/products' , data)
setgoToProduct(true);
if (goToProduct) {
  router.replace('/products');
}

}

// if (goToProduct) {
//   Router.push('/products');
// }
 
  return (
    <Layout>
      {/* <form onSubmit={createProduct}>

      <label>Product Name</label>
      <input type='text' placeholder='Product'
      value={title} onChange={ev => setTitle(ev.target.value)} />
      <label>Product Description</label>
      <textarea  placeholder='Description'
       value={description} onChange={ev => setDescription(ev.target.value)} />
      <label>Product Price (In USD)</label>
      <input type='number' placeholder='Price'
       value={price} onChange={ev => setPrice(ev.target.value)}/>
<button type="submit" className="btn-primary">Save</button>
      {/* 


      </form> */}
      <ProductForm />
    </Layout>
  );
}
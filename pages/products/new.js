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

 
  return (
    <Layout>
  <h1>Add New Product</h1>
      <ProductForm />
    </Layout>
  );
}
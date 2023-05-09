
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { Product } from '../types/product';
import { db } from '../firebase-config';

const productsCollection = collection(db, 'products');

export const getProductsDB = async () :Promise<Product[]> => {
  const result = await getDocs(productsCollection);
  const products = result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Product[]
  return products
}

export const getProductDB = async (id:string) : Promise<Product> => {
  const docProduct =  doc(db,'products', id);
  const result = await getDoc(docProduct);
  const product = {...result.data(), id }  as Product
  return product
}


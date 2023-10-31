import axios from 'axios';
import { Products } from '../interfaces/fakestore.interface';

export const getFakeStore = () => {
    return axios.get<Products>('https://fakestoreapi.com/products');
}


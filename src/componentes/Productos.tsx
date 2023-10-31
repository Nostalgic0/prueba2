import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { getFakeStore } from '../services/fakestore.service';
import { Products } from '../interfaces/fakestore.interface';
import { JsxElement } from 'typescript';

interface Iprops {
    background?: string;
    color?: string;

}

function Productos({ background, color }: Iprops) {
    const [loading, setLoading] = useState(false)
    const [productosInfo, setProductosInfo] = useState<Products>();
    const [data, setData] = useState<any>([])


    const handleSearch = () => {
        getDataAsync()
    }

    const getDataAsync = async () => {
        setLoading(true)
        try {
            const response = await getFakeStore()

            setData(response.data)


            //setProductosInfo(productosData);

            console.log(response.data);

            setLoading(false);
        } catch (error) {
            console.error(error)
        }
        setLoading(false)

    }

    useEffect(() => {
        getDataAsync();
    }, []);

    return (
        <div className="App" style={{ background, color }}>
            <header className="App-header">

                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((producto: any) => (
                            <tr >
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                            </tr>
                        )) : ''}
                        {/* <tr>
                            <td>{productosInfo ? productosInfo.title : ''}</td>
                            <td>{productosInfo ? productosInfo.price : ''}</td>
                        </tr> */}
                        {/* {productosInfo ? productosInfo.title.map((title: string, index: any) => (
                            <tr key={index}>
                                <td>{title}</td>

                            </tr>
                        )) : ''
                        } */}

                    </tbody>

                </table>
            </header>
        </div>
    );
}

export default Productos;

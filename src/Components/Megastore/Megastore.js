import React, { useEffect, useState } from 'react';
import data from '../../data'
import MegaDetails from '../MegaDetails/MegaDetails';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { megaList } from '../../Redux/Actions/Action';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
const Megastore = () => {

    // const [megaStore, setMegaStore] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { megaStore } = productList;

    useEffect(() => {

        dispatch(megaList())

        // const fetchData = async () =>{

        // const {data} = await axios.get('/api/megaStore')
        // setMegaStore(data)

        // };
        // fetchData();
    }, [])

    console.log('store', megaStore)
    // console.log('data', data.data)
    return (
        <section className="row container-fluid dark-mode">

            <div className="col-md-1">
                <Header></Header>
            </div>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 row">
                {



                    megaStore.map(d1 => (d1.map(d2 => <MegaDetails mega={d2} ></MegaDetails>)))
                }
            </div>

        </section>

    );
};

export default Megastore;
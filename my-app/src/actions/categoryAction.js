import { HEAD_DATA } from './actionTypes';
import axios from 'axios';
const resp = require('../assets/json/head.json')
export const getHeaderData = ()=> async (dispatch) =>{
    // let resp = await axios({
    //     method: 'get',
    //     url: 'src/assets/json/head.json',
    // });
    dispatch({
        type: HEAD_DATA,
        obj: resp.data
    });
}
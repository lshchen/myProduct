import { LIST_DATA } from './actionTypes';
import { CHANGEREADYSTATE } from './scrollViewActionsTypes.js';
import axios from 'axios';

export const getListData = (page)=> (dispatch) =>{
    dispatch({
        type: CHANGEREADYSTATE,
        obj: false
    });
    const resp = require('../assets/json/homelist.json');
    window.setTimeout(()=>{
        dispatch({
            type: LIST_DATA,
            currentPage: page,
            obj: resp.data
        });

        dispatch({
            type: CHANGEREADYSTATE,
            obj: true
        });

    },1500);
    // axios({
    //     method: 'get',
    //     url: './json/homelist.json'
    // }).then((resp)=>{
    // });

}
import {configureStore} from '@reduxjs/toolkit';
import sample1Reducer from './sample1'
export default configureStore({
    reducer:{
        sample1 : sample1Reducer
    }
})
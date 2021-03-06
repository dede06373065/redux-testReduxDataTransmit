// function actionCreateIncrement(data){
//     return {type:'increment',data}
// }

import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
          dispatch( createIncrementAction(data))

        },time)
    }

}

// function actionCreateDecrement(data){
//     return {type:'decrement',data}

// }
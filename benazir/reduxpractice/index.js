
//dispatch(action)======> reducer(state,action)

//const reducer = (state,action)=>{
    //normal way
    // if(action.type==="INC_COUNT"){
    //     return {...state, count: state.count+action.payload}
    // }
    // if(action.type==="DEC_COUNT"){
    //     return {...state, count: state.count-action.payload}
    // }

    // return state;
// Better way

// switch (action.type){
//     case "INC_COUNT":return {...state, count: state.count+action.payload}
     

// case "DEC_COUNT":return {...state, count: state.count-action.payload}
     

// default : {
//     return state;
// }
// }

//state is read only;
//reducer should return that will become our updated state

//pure function
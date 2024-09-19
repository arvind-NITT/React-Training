import { createContext ,useState,useContext} from 'react';
import { useReducer } from "react";
import Items from './Items';

const MyContext = createContext();


export const useMyContext = () => {
    return useContext(MyContext);
};



export const HooksProvider = ({ children }) => {
    

    const Initialstate = {Items:[],input:''}
function Reducer(state,action){

   switch(action.type){
    case 'add':
        return {
             ...state,
             Items:[...state.Items,{name:action.item.name,description:action.item.description}],
             input:''
        };
        case 'delete':
        return {
             ...state,
             Items:state.Items.filter(item=> item.title != action.id)
        };
        case 'sort':
                const sortedItems = [...state.Items].sort((a, b) => {
                    if (action.action === '1') { 
                        return a.name.localeCompare(b.name);
                    } else if (action.action === '2') { 
                        return a.description.localeCompare(b.description);
                    }
                    return 0;
                });
                return {
                    ...state,
                    Items: sortedItems
                };
            default:
                return state;
}
}
const [state, dispatch] = useReducer(Reducer,Initialstate);
    return (
        <MyContext.Provider value={{Items,Initialstate,state,dispatch}}>
            {children}
        </MyContext.Provider>
    );
};
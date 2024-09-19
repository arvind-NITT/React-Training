import React, { useEffect, useState } from "react";
import { useMyContext } from "./HookContext";
import { useReducer } from "react";




export default function Items() {
    const context  = useMyContext();
    const {Items,Initialstate,state,dispatch} = context;
    
     const [newItem,setNewItem]= useState({name:'',description:''});
     const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        
        console.log(state);
    }, [state,Initialstate]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'add',item:newItem})
        setNewItem({ name: '', description: '' });
    };
   
      
        const handleChange = (event) => {
          setSelectedValue(event.target.value);
          dispatch({type:'sort',action :event.target.value})
          
        };

    return (
        <>
            <h2>Items</h2>
            <h3>Sort by: 
            <select
        className="form-select"
        aria-label="Default select example"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          Open this select menu
        </option>
        <option value="1">Title</option>
        <option value="2">Description</option>
      </select>
            </h3>
            <div>
                {state.Items.map((item)=>{
                   return <div>
                    <h2>{item.name}</h2>
                        <h4>{item.description}</h4>
                        <button type="button" onClick={()=>dispatch({type:'delete',id:item.title})}>delete</button>
                    </div>
                })}
            </div>
            <div>
                Add a new Item
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            value={newItem.name} 
                            onChange={onChange} 
                            placeholder="name" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            value={newItem.description} 
                            onChange={onChange} 
                            rows="3"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

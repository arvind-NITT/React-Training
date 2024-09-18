import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PostDetails from './component/PostDetails';
function App() {


  const fetchData = async () => {
    try {
      const response = await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json(); // Parse JSON from the response
      console.log(result);
      var dat = result.filter(ele=> ele.id == 8);
      if(dat.length>0) console.log(dat[0].name);
      else console.log("Sorry not found");
    } catch (error) {
      console.log(error); // Set error if there's an issue
    } 
  };
  return (
    <div className="App">
       
          <PostDetails/>
    </div>
  );
}

export default App;

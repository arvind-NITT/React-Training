import { useState } from "react";

function Structure() {


    return (
        <>
            <div >
                <div class="container text-center  border" style={{ width: "100vw", height: "100vh" }}>
            <div className="row h-100">
                <div className="col-2">
 weihu
                </div>
                <div className="col-10 h-100">
                     
                    <div class="row w-100  border">
                        <div className="col " style={{height:"100px"}}> welcome </div>
                    </div>
                    <div class="row w-100 h-100 border">
                        <div className=" row w-100 " style={{height:"70px"}}>
                             <div className="col-3">May</div>
                             <div className="col-3">Board</div>
                             <div className="col-3">Create task</div>

                        </div>
                        <div class="col m-1 border h-100">
                            Todo List
                            <div class="row h-50 border">
                                <div class="col-12 border">
                                    todo 1</div>
                               
                            </div>
                            <div class="row  h-25 border">
                                 todo2
                            </div>
                            <div class="row  h-25 border">
                                todo3
                                </div>
                        </div>
                        <div class="col  m-1 h-100 border">
                            In progress
                            <div class="row mt-1 h-50 border">
                             
                                <div class="col-12 border"> progress 1</div>
                            </div>
                            <div class="row mt-1  h-25 border">
                                <div class="col-12 border">progress 2</div>
                               
                            </div>
                            
                            
                        </div>
                        <div class="col m-1 h-100 border">
                            In review
                            <div class="row h-25 border">
                                <div class="col-12 border">review 1</div>
                                
                            </div>
                            <div class="row h-25 border">
                                <div class="col-12 border">review 2</div>
                                
                            </div>
                            <div class="row h-25 border">
                                <div class="col-12 border">review 3</div>
                                
                            </div>
                            <div class="row h-25 border">
                                <div class="col-12 border">review 4</div>
                                
                            </div>
                        </div>
                        <div class="col m-1 h-100 border">
                            Done
                            <div class="row h-50 border">
                                <div class="col-12 border">Done1 </div>
                                
                            </div>
                            <div class="row h-25 border">
                                <div class="col-12 border">Done 2</div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>

                   
                </div>
            </div>
        </>
    )
}


export default Structure;
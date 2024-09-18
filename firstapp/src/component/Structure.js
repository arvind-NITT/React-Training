import { useState } from "react";

function Structure() {


    return (
        <>
            <div >
                <div class="container text-center  border" style={{ width: "100vw", height: "100vh" }}>
                    <div class="row w-100 h-100 border">
                        <div class="col border h-100">
                            
                            <div class="row h-50 border">
                                <div class="col-12 border">.col-6</div>
                               
                            </div>
                            <div class="row  h-25 border">
                                <div class="col-6 border">.col-6</div>
                                <div class="col-6 border">.col-6</div>
                            </div>
                        </div>
                        <div class="col h-100 border">
                            <div class="row h-25 border">
                                <div class="col-6 border">.col-6</div>
                                <div class="col-6 border">.col-6</div>
                            </div>
                            <div class="row  h-50 border">
                                <div class="col-12 border">.col-6</div>
                               
                            </div>
                            <div class="row  h-25 border">
                                <div class="col-6 border">.col-6</div>
                                <div class="col-6 border">.col-6</div>
                            </div>
                            
                        </div>
                        <div class="col h-100 border">
                            
                            <div class="row h-25 border">
                                <div class="col-12 border">.col-6</div>
                                
                            </div>
                            <div class="row h-75 border">
                                <div class="col-6 border">.col-6</div>
                                <div class="col-6 border">.col-6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Structure;
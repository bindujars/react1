import React from 'react'

export default function Header(){
   // {/*var screen=document.getElementById("bckgnd");
   // function btnClk(value){
     //   console.log("insidefunction");
       // bckgnd.value+=value;
        //}*/}


    {/* var screen=document.getElementById("bckGnd");
function btnClk(){
bckGnd.value+=value;
}
function clear(){
    bckGnd.value=" ";
}

function result(){
    if(document.getElementById('bckGnd').value!=1234){
        alert('Wrong pin number. Please try again.');
        return false;
    }
    if(document.getElementById('bckGnd').value==1234){
        alert('Login is successful!');
        return true;
    }
}*/}


    return(
        

        <div>
        <h1>ENTER PIN NUMBER</h1>
        <div className="container">
            <form action="">
                <input type="text" id="bckGnd"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="7"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="8"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="9"onClick="btnClk(value)"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="4"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="5"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="6"onClick="btnClk(value)"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="1"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="2"onClick="btnClk(value)"/>
                <input className="button number" type="button" value="3"onClick="btnClk(value)"/>
                <br/>
                <input className="button Clear" type="button" value="C"onClick="clear()" id="clear"/>
                <input className="button number" type="button" value="0"onClick="btnClk(value)"/>
                <input className="button Result" type="button" value="Submit"onClick="Result()" id="submit"/>
                </form>
            </div>
            </div>
    )
}
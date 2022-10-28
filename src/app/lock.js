var screen=document.getElementById("bckGnd");
function btnClk(value){
bckGnd.value+=value;
}
function clear(){
    bckGnd.value=" ";
}

function Result(){
    if(document.getElementById('bckGnd').value!=1234){
        alert('Wrong pin number. Please try again.');
        return false;
    }
    if(document.getElementById('bcGgnd').value==1234){
        alert('Login is successful!');
        return true;
    }
}

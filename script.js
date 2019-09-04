//#input-amount check number
function checkNum(e){
    var keyVal = event.keyCode;
 
        if(((keyVal >= 48) && (keyVal <= 57))){
            return true;
        }
        else{
            alert("Please input Number only.");
            return false;
        }
    }



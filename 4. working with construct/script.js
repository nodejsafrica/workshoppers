"use strict"

//VARIABLES
let ussdCode, 
    airtime,
    data,
    balance;

//Function decalartion 
function ussd(ussdkey){  
    /**
     * use of switch case 
     */
    switch (ussdkey) {
        case "1":
            document.querySelector('#dom-stdout1').innerText = '1. N100';
            document.querySelector('#dom-stdout2').innerText = '1. N200';
            document.querySelector('#dom-stdout3').innerText = '1. N300';
        break;
        case "2":
            document.querySelector('#dom-stdout1').innerText = '1. 200MB';
            document.querySelector('#dom-stdout2').innerText = '2. 300MB';
            document.querySelector('#dom-stdout3').innerText = '3. 400MB';

        break;
        case "3":
            document.querySelector('#dom-stdout').innerText = 'Your balance is N0.00';
        break;
        default:
            document.querySelector('#dom-stdout').innerText = 'Invalid Option';
        break;
    }
}

//Invoke the function 
(function(){
   document.querySelector("#btn-click").addEventListener('click', function(){
    ussdCode = document.querySelector("#ussdcode").value;    
        if(ussdCode == "*141#"){
            document.querySelector("#dom-stdout1").innerText = `Please select 1 - 3`;
            document.querySelector("#dom-stdout2").innerText = `1. Borrow Airtime`;
            document.querySelector("#dom-stdout3").innerText = `2. Borrow Data`;
            document.querySelector("#dom-stdout4").innerText = `3. Check Balance`;
            document.querySelector("#btn-send").addEventListener('click', function(){
                let ussdkey = document.querySelector("#ussdkey").value;
                ussd(ussdkey)
            });
        }else{
            document.querySelector('#dom-stdout').innerText = 'Invalid Option'
        }       
    });

})();





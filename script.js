let counterval =document.getElementById('counter');


function increment(){
        let newcount=parseInt(counterval.innerText);
        newcount=newcount+1;
        counterval.innerText=newcount;
};


function decrement(){
    let newcount=parseInt(counterval.innerText);
    newcount=newcount-1;
    counterval.innerText=newcount;
};
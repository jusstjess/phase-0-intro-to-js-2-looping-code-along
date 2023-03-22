// Code your solutions in this file
const messages = [];
function writeCards(names,event){
    
    for(let i=0; i<names.length;i++) {
    
     let customMsg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     messages.push(customMsg)
    }
    return messages; 
}
function countDown(number){
    while(number > -1){
    console.log(number);
    number-- ;
    }
}

 


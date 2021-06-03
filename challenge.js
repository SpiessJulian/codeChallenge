/*const challenge = function(list){
    let amount = 0;
    let resList = [];
    for(let i = 0; i < list.length; i++){
        if(list[i] === 0){
            amount++;
        }else{
            resList.push(list[i]);
        }
    }
    for(let i = 0; i < amount; i++){
        resList.push(0);
    }
   return resList;
}*/


const challenge = function(list){
    let amount = 0;
    const resList = list;
    const n = list.length;

    for(let i = 0; i < n; i++){
        if(resList[i] !== 0){
            resList[amount++] = resList[i];
        }
    }
    while(amount < n){
        resList[amount++] = 0;
    }
   return resList;
}

console.log(challenge([4,8,0,9,2,5,0,3,3,0]));
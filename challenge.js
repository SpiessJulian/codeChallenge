/*
First approach;
const challenge = function(list){
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
    //Moving 0s:
    let amount = 0;
    const resList = list;
    let n = list.length;

    for(let i = 0; i < n; i++){
        if(resList[i] !== 0){
            resList[amount++] = resList[i];
        }
    }
    while(amount < n){
        resList[amount++] = 0;
    }
   console.log(resList);

   for(let i = (n-1); i >= 0; i--){
        if(resList[i] === 0){
            resList.pop();
        }else{
            break;
        }
   }

   console.log(resList);


   //adding 1 unit:
    n = resList.length;
    resList[n-1] += 1;
    let carry = resList[n-1]/10;
    resList[n-1] = resList[n-1] % 10;

    for(let i = n - 2; i >= 0; i--){
        if(carry === 1){
            resList[i] += 1;
            carry = resList[i]/10;
            resList[i] = resList[i] % 10;
        }
    }

    if(carry === 1) resList.unshift(1)


    console.log(resList);

    //Multiplying -1 in evens
    n = resList.length;

    for(let i = 0; i < n; i++){
        if( i % 2 === 0){
            resList[i] = resList[i] * -1;
        }
    }

    console.log(resList);


    //Max sum of subarray
    let maxSum = -Infinity;
    let currSum = 0;

    for(let i = 0; i < resList.length; i++){
        currSum = Math.max(resList[i], currSum + resList[i]);
        maxSum = Math.max(currSum, maxSum);
    }

    console.log(maxSum);

}

//challenge([4,8,0,9,2,5,0,3,3,0]);

challenge([4,8,9,2,5,8,4,8,0]);
let numbersAlready = [];
let itemList=[
["c5.png",["compost"]], ["c15.png",["compost"]], ["l4.png",["landfill"]], 
["l7.png",["landfill"]], ["l9.png",["landfill"]], ["l2.png",["landfill"]], ["r1.png",["landfill"]],
["r3.png",["recycle"]], ["r6.png",["recycle"]], ["r6.png",["recycle"]], ["r8.png",["recycle"]], ["r10.png",["recycle"]],
["r13.png"["recycle"]], ["r17.png",["recycle"]], ["r18.png",["recycle"]], ["t14.png",["landfill"]],
["t15.png",["landfill"]], ["t16.png",["landfill"]], ["t17.png",["landfill"]]
];
let itemListAmount = itemList.length;
let itemNumber = itemListAmount - 1;
let number;
let itemVal;


function randomNumber(){
    let alreadyUsed = numbersAlready.length;
    if (alreadyUsed == itemListAmount){
        numbersAlready = [];
    }
    //resets alr selected numbers if all have been used


    itemNumber = Math.floor(Math.random() * itemListAmount) + 0;
    //generates the number of an unselected item
    let hasNumber = numbersAlready.includes(itemNumber);
    //hasnumber is a bool that determines if a number is alr used

    while (hasNumber == true){
        //if a number has already been used...
        itemNumber = Math.floor(Math.random() * itemListAmount) + 0;
        //generate a new number
        hasNumber = numbersAlready.includes(itemNumber);
        //check if its alr used
    }

    numbersAlready.push(itemNumber);
    //registers the item number as alr used

    return itemNumber;
}


function randomItem(){
    item = itemList[itemNumber][0];
    return item;
}

function getVal(){
    itemVal = itemList[itemNumber][1];
    return itemVal;
}



let score=0;

function sort(itemVal, binType, score){
    if (binType == itemVal){
        score += 1
    }
    else {
        score -= 1
    }

    let newItemNum = randomNumber()
    randomItem(newItemNum)
    getVal(newItemNum)
}




// function sortingTrash(itemVal, score){
//     binType = landfill;
//     if (binType == itemVal){
//         //Run the animation for correct answer
//         score=score+1;
//     }else{
//         //Run the animation for incorrect anwswer
//     }

// }
// function sortingRecycle(itemVal, score){
//     binType = recycle;
//     if (binType == itemVal){
//         //Run the animation for correct answer
//         score=score+1;
//     } else{
//         //Run the animation for incorrect anwswer
//     }

// }
// function sortingCompost(itemVal, score){
//     binType = compost;
//     if (binType == itemVal){
//         //Run the animation for correct answer
//         score=score+1;
//     } else{
//         //Run the animation for incorrect anwswer
//     }
// }
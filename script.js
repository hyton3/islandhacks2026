let numbersAlready = [];
let itemList=[
["images/c5.png","compost"], ["images/c15.png","compost"], ["images/l4.png","landfill"], 
["images/l7.png","landfill"], ["images/l9.png","landfill"], ["images/l2.png","landfill"], ["images/r1.png","landfill"],
["images/r3.png","recycle"], ["images/r6.png","recycle"], ["images/r8.png","recycle"], ["images/r10.png","recycle"],
["images/r13.png","recycle"], ["images/r17.png","recycle"], ["images/r18.png","recycle"], ["images/t14.png","landfill"],
["images/t15.png","landfill"], ["images/t16.png","landfill"], ["images/t17.png","landfill"]
];
let itemListAmount = itemList.length;
let itemNumber = itemListAmount - 1;
let number;
let itemVal = "recycle";


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


function randomItem(num){
    item = itemList[num][0];
    return item;
}

function getVal(num){
    iv = itemList[num][1];
    return iv;
}



let score=0;
let imgElement = document.getElementById("renderedItemDiv")

function sort(e){
    if (e.id == itemVal){
        score += 1
    }
    else {
        score -= 1
    }
    console.log(score)


    let newItemNum = randomNumber()
    imgElement.style.backgroundImage = `url('${randomItem(newItemNum)}')`
    itemVal = getVal(newItemNum)
    console.log(`url('${randomItem(newItemNum)}')`)
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
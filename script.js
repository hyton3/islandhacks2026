let numbersAlready = [];

function itemGeneration(){
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

    function generateItem(){
        function randomNumber(){

            let alreadyUsed = numbersAlready.length;
            if (alreadyUsed == itemListAmount){
                numbersAlready = [];
            }

            itemNumber = Math.floor(Math.random() * itemListAmount) + 0;
            let hasNumber = numbersAlready.includes(itemNumber);
            while (hasNumber == true){
                itemNumber = Math.floor(Math.random() * itemListAmount) + 0;
                hasNumber = numbersAlready.includes(itemNumber);
            }
            numbersAlready.push(itemNumber);
            return itemNumber;
        }
        
        function randomItem(){
            item = itemList[itemNumber];
            return item;
        }
        
        function getVal(){
            itemVal = itemList[itemNumber][1];
            return itemVal;
        }
    randomNumber();
    randomItem();
    getVal();
    }
    generateItem();
}


//if it doesnt work, take this var and put in every function
let binType;
let score=0;
function sortingTrash(itemVal, score){
    binType = landfill;;
    if (binType == itemVal){
        //Run the animation for correct answer
        score=score+1;
    }else{
        //Run the animation for incorrect anwswer
    }

}
function sortingRecycle(itemVal, score){
    binType = recycle;
    if (binType == itemVal){
        //Run the animation for correct answer
        score=score+1;
    } else{
        //Run the animation for incorrect anwswer
    }

}
function sortingCompost(itemVal, score){
    binType = compost;
    if (binType == itemVal){
        //Run the animation for correct answer
        score=score+1;
    } else{
        //Run the animation for incorrect anwswer
    }
}
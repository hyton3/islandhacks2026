


function itemGeneration(){
    let itemList=[["Item 1",[1]], ["Item 2",[1]], ["Item 3",[1]], 
    ["Item 4",[1]], ["Item 5",[1]], ["Item 6",[1]], ["Item 7",[1]], ["Item 8",[1]], ["Item 9",[1]], 
    ["Item 10",[1]]
    ];
    let itemListAmount = itemList.length;
    let itemNumber = itemListAmount - 1;
    let number;
    let itemVal;

    function generateItem(){
        function randomNumber(){
            itemNumber = Math.floor(Math.random() * itemListAmount) + 0;
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
itemGeneration();


//if it doesnt work, take this var and put in every function
let binType;
let score=0;
function sortingTrash(itemVal, score){
    binType = trash;
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
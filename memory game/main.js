document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("What Is You name?");
    //condition to handle the name of the user if entered or not
    if(yourName == null || yourName == "") {
       document.querySelector(".name span").innerHTML ='guest' 
    }else{
        document.querySelector(".name span").innerHTML = yourName;
    }

    //after the name was showed --> remove the button screen
      document.querySelector(".control-buttons").remove()  
};


// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);


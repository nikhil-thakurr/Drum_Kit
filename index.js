
// document.querySelector("button").addEventListener("click",onclickbtn);

//hers ()  is not added as it ll immediately call the func and we dont want that

// function onclickbtn(){
//     alert("hey")
// }


// document.querySelector("button").addEventListener("click",function (){
//     alert("hey")
// });

// another way is anonymous func

var numberOfDrumBtns=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumBtns;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();

        var btnInnerHTML=this.innerHTML;
        makeSound(btnInnerHTML);
       
    });

    //Audio() creates a new html audio element which contains whole lot of properties and methods such as set time,date ,play,pause etc

}

document.addEventListener("keydown",function(event){
   makeSound(event.key)
})


function makeSound(key){
    switch(key){
        case"w":
        var audio1=new Audio("sounds/tom-1.mp3");
           audio1.play();
           break;
        case"a":
        var audio2=new Audio("sounds/tom-2.mp3");
           audio2.play();
           break;
        case"s":
        var audio3=new Audio("sounds/tom-3.mp3");
           audio3.play();
           break;
        case"d":
        var audio4=new Audio("sounds/tom-4.mp3");
           audio4.play();
           break;
        case"j":
        var audio5=new Audio("sounds/crash.mp3");
           audio5.play();
           break;
        case"k":
        var audio6=new Audio("sounds/kick-bass.mp3");
           audio6.play();
           break;
        case"l":
        var audio7=new Audio("sounds/snare.mp3");
           audio7.play();
           break;
    }
}

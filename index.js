


let seltAll = document.querySelectorAll(".drum");
for(var i = 0;i <= 6;i++){


    //if clicked on scren
seltAll[i].addEventListener("click",function (){

var x = this.innerHTML;

keyPress(x);
animation(x);

}) 


//if button is pressed
seltAll[i].addEventListener("keydown" , function (event){
    keyPress(event.key);
    
    animation(event.key);
})





function keyPress(key){
    switch (key) {
        case "w":
        new Audio('sounds/tom-1.mp3').play();
            break;
    
        case "a":  
        new Audio('sounds/tom-2.mp3').play();
        break;
    
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
    
            case "d":
                new Audio('sounds/tom-4.mp3').play();
                break;
    
        case "j":
            new Audio('sounds/crash.mp3').play();
            break;
    
    
            case "k":
                new Audio('sounds/kick-bass.mp3').play();
                break;
    
                case "l":
                    new Audio('sounds/snare.mp3').play();
                    break;
                
    
        default:
            
            break;
    }
    
    
}


function animation(key){
    console.log(key);
    var x = document.querySelector("."+key);
    x.classList.add("animation");

    setTimeout(function (){
        x.classList.remove("animation"); 
    } , 300)
}



}



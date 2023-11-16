// old method with array

/*let array = document.querySelectorAll(".buttons");
for (let i=0; i<array.length; i++){
    array[i].addEventListener("click", function(){
        let thisMethod = this.innerHTML;
        mysound(thisMethod);
        opasityAnimation(thisMethod);
    });

    array[i].addEventListener("keydown" , function(){
        let thisMethod = this.innerHTML;
        mysound1(thisMethod);
        opasityAnimation(thisMethod);
    
    });
}


function mysound(key){
    switch(key){
        case "M":
            let sound1 = new Audio("sounds/1.mp3");
            sound1.play();
            break;
        case "a":
            let sound2 = new Audio("sounds/2.wav");
            sound2.play();
            break;
        case "s":
            let sound3 = new Audio("sounds/3.mp3");
            sound3.play();
            break;
        case "d":
            let sound4 = new Audio("sounds/4.mp3");
            sound4.play();
            break;
        case "j":
            let sound5 = new Audio("sounds/5.mp3");
            sound5.play();
            break;
                    
        case "k":
            let sound6 = new Audio("sounds/6.wav");
                sound6.play();
                break;
        case "l":
            let sound7 = new Audio("sounds/7.wav");
            sound7.play();
            break;
        default:
            alert("wrong key press");
        
    }
}


function mysound1(key1){
    switch(key1){
        case "M":
            let sound1 = new Audio("sounds/1.mp3");
            sound1.play();
            break;
        case "a":
            let sound2 = new Audio("sounds/2.wav");
            sound2.play();
            break;
        case "s":
            let sound3 = new Audio("sounds/3.mp3");
            sound3.play();
            break;
        case "d":
            let sound4 = new Audio("sounds/4.mp3");
            sound4.play();
            break;
        case "j":
            let sound5 = new Audio("sounds/5.mp3");
            sound5.play();
            break;
                    
        case "k":
            let sound6 = new Audio("sounds/6.wav");
                sound6.play();
                break;
        case "l":
            let sound7 = new Audio("sounds/7.wav");
            sound7.play();
            break;
        default:
            alert("wrong key press");
        
    }
}

const opasityAnimation = (key) => {
    ActiveButton = document.querySelector(`.${key}`);
    ActiveButton.classList.add("pressed");

    setTimeout(() => {
        ActiveButton.classList.remove("pressed");
    },100)

}
*/




// [practice]..................

/*document.getElementById("button-1").addEventListener("click", function(){
    mysound();
});

document.getElementById("button-2").addEventListener("click", function(){
    mysound1();
});



function mysound(){
   let sound1 = new Audio("sounds/1.mp3");
   sound1.play();
}

function mysound1(){
    let sound1 = new Audio("sounds/2.wav");
    sound1.play();
 }
 */







//  event selegation ..............

const elementsofDrum = document.getElementById('parent');

elementsofDrum.addEventListener('click', (e) => {
    const target = e.target.innerHTML;
    console.log(e.target.innerHTML);
    // console.log(e.target); //purpose of target
    // console.log(target);// purpose of innerHTML
    creatsound(target);
    opasityAnimation(target);

})

elementsofDrum.addEventListener('keydown', (e) => {
    const target = e.key;
    let array = ['m','a','s','d','j','l','k'];
    if (array.includes(target)===false){
        alert("wrong key press");
        return;
    }
    creatsound(target);
    opasityAnimation(target);

})

const creatsound = (key) => {
    let sound = new Audio(`sounds/${key}.mp3`);
    sound.play();
    // console.log(sound);
}


const opasityAnimation = (key) => {
    let opacity = document.querySelector(`.${key}`);
    opacity.classList.add("pressed");

    
    setTimeout(() => {
        opacity.classList.remove("pressed");
    },100)

}



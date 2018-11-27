$(document).ready(() => {
    
    const button = $("#button")

    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "black"];
    let count = 0;

    button.on("click", ()=>{
        count++
        if(count >= colors.length){
            count = 0;
            $("#body").css("background", colors[count])
        }else{
            $("#body").css("background", colors[count])
        }
   })

 });

var a = ["Orange","Blue","AliceBlue","Chocolate","BlueViolet","CornflowerBlue","DarkGoldenRod","DarkGreen","DarkGreen","GreenYellow","Maroon","MediumBlue","PaleVioletRed","OrangeRed","SaddleBrown","Tomato","Yellow","Navy","Orchid","PaleGreen","PaleVioletRed","Lime","Magenta","DarkSlateGray","DarkGrey","Crimson","HoneyDew"]
var index = 0;

document.querySelector("#submit").addEventListener("click",()=>{
    if(index>a.length-1){
        index = 0;
    }
    document.body.style.backgroundColor = a[index++];
})
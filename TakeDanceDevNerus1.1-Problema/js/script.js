let count = 1;
document.getElementById("card").checked = true;

setInterval( function(){
        nextImage();
    }, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;

}
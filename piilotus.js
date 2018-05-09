function myFunction(){
    var on = new Text();
    var off = new Text();
    var test = new Text();
    on.src = 'chrome://favicon/' + 'file:///C:/Users/Jyri/Desktop/koodia/images/on.png';
    off.src = 'chrome://favicon/' + 'file:///C:/Users/Jyri/Desktop/koodia/images/off.png';
    test.src = 'chrome://favicon/' + document.getElementById("kuva").src;
    console.log(on.src);
    console.log(off.src);
    console.log(test.src);
    
    if(test.src === off.src){
     document.getElementById("kuva").src = 'images/on.png';   
    }
    else{
    document.getElementById("kuva").src = 'images/off.png';    
    }
}
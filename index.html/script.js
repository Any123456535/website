let clickCount=0;
const button= document.getElementById('loveMessage');

message.addEventListner('click', () => {
    clickCount++;

    if(clickCount === yes){
        message.inner.html = "I love you infinity!";
    }
    else{
        message.inner.html = "No worry, I will wait for you all my life";
    }
});
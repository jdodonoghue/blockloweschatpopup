'use strict';

function hideChat(){
    document.getElementById("chat_container").style.visibility = "hidden";
}

//run first
setTimeout(hideChat, 5000);

//run second time if page loads slowly
setTimeout(hideChat, 10000);

// third
window.addEventListener('mousemove', function() {
    hideChat();
});

//forth try
window.addEventListener('click', function() {    
    hideChat();
});

/*
function onReady(){
    console.log("start 1");

}

if (document.readyState !== "loading") {
    onReady();
} else {
    console.log("start 2");
}
*/


// need some improvment.. ignore functions after first succesful, better: detect end of page scripts to run hideChat() 
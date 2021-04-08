
var button = document.getElementById("btn");
button.innerHTML = 'Light mode';
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.setAttribute('onclick', 'swapStyle("new_style.css")');

function swapStyle(sheet){
    document.getElementById('MyLink').setAttribute('href', sheet);
    var icons = document.getElementById('iconl')
    if (sheet === "new_style.css"){
        button.innerHTML = 'Dark mode';
        button.setAttribute('onclick', 'swapStyle("style.css")');
        icons.setAttribute('href', 'icon.png')
    }
    else if (sheet == "style.css"){
        button.innerHTML = 'Light mode';
        button.setAttribute('onclick', 'swapStyle("new_style.css")');
        icons.setAttribute('href', 'icon2.png')
    }
    
}

function scrollWin(x, y) {
    window.scrollBy(x, y);
}
function back_Top(x, y){
    window.scrollBy(x, y)
}
function scrollWinc(x, y){
    window.scrollBy(x, y)
}
function Top(x, y){
    window.scrollBy(x, y);
}
/*
window.onload=()=>{
    
    var button = document.createElement("button");
    button.innerHTML = "Light theme";


    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    var findlink = document.getElementById("myLinkId");

    function hello(){
        if (button.innerHTML == "Light theme"){
            button.innerHTML = "Dark theme";
            findlink.href = "new_style.css";
        }
        else if (button.innerHTML == "Dark theme"){
            button.innerHTML = "Light theme";
            
        }
        
    }

    button.addEventListener ("click", hello);

};

*/

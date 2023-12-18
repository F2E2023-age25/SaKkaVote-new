// Overlay btn close 監聽
const tsai01 = document.querySelector("#tsai01");
const han02 = document.querySelector("#han02");
const song03 = document.querySelector("#song03");

function close01(){
    tsai01.style.display = "none";
}
function close02(){
    han02.style.display = "none";
}
function close03(){
    song03.style.display = "none";
}

function open01(){
    tsai01.style.display = "flex";
    tsai01.style.position = "fixed";
}
function open02(){
    han02.style.display = "flex";
    han02.style.position = "fixed";
}
function open03(){
    song03.style.display = "flex";
    song03.style.position = "fixed";
}



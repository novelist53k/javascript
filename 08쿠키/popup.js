function createCookie(name) {
    var date = new Date();
    date.setDate(date.getDate() + 1);

    var cookie = "";
    cookie += name + "=true;";
    cookie += date.toUTCString();
    
    document.cookie = cookie;

}

function getCookie(name) {
    var cookies = document.cookie.split("; ");

    for(var i in cookies) {
        if(cookies[i].search(name) != -1) { // 쿠키 탐색
            return true;
        }
    }
    return false;
}

function deleteCookie(name) {
    console.log(name + " will be deleted");
}
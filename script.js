function foo(){
    var res = document.getElementsByTagName("input");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].value);
    }
}

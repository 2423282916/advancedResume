window.onload = function() {
    var tabList = document.getElementById("tab-list");
    var aLis = tabList.getElementsByTagName("li");
    var tDiv = document.getElementById("tDiv");
    var contents = tDiv.getElementsByTagName("div");

    for(var i = 0; i < aLis.length; i++) {
        aLis[i].index = i;
        aLis[i].onclick = function() {
            for(var j = 0; j < aLis.length; j++) {
                aLis[j].className = '';
            }
            this.className = "tab-active";

            for(var j = 0; j < contents.length; j++) {
                contents[j].className = "tab-content tab-content-hide";
            }
            contents[this.index].className = "tab-content tab-content-show";
        };
    }
};

function dianZan(e){
    // 获取a标签下的span元素，在ie678中没有firstElementChild
    var child=e.firstElementChild;
    if(child.style.color==""){
        child.style.color="red";
    }else{
        child.style.color="";
    }
}
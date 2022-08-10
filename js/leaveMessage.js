document.getElementById("btn").onclick = function () {
    // 创建perMessage
    var div1 = document.createElement("div");
    // 创建personal
    var div2 = document.createElement("div");
    // 创建perImg
    var div3 = document.createElement("div");
    // 创建img
    var img1 = document.createElement("img");
    // 创建message
    var div4 = document.createElement("div");
    var p = document.createElement("p");
    // 创建imgLIst，作为头像
    var imgList = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"]
    // 为img1头像图片
    // Math.floor(Math.random() * 10) [0,10)的整数
    var num=Math.floor(Math.random()*10)+1
    img1.src="../img/"+"image"+num+".jpg";
    // 为各个元素添加类名
    div1.className = "perMessage";
    div2.className = "personal";
    div3.className = "perImg";
    img1.alt = "头像";
    div4.className = "message";
    // 理清关系，将子元素追加到父元素中
    document.getElementById("ct").appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div4);
    div2.appendChild(div3);
    div3.appendChild(img1);
    div4.appendChild(p);
    // 获取input输入框的值
    var input = document.getElementById("input").value;
    // console.log("input", input);
    p.innerHTML = input;
};
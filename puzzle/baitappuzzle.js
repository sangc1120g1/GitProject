/*function clickme(ele){
    let img1 = ele.getAttribute("src")
    if (img1=="meo1.jpg"){
        ele.src="khi1.jpg"
    }else if (img1=="khi1.jpg"){
        ele.src="panda1.jpg"
    }else {
        ele.src="meo1.jpg"
    }
}
function clickme1(ele1){
    let img2 = ele1.getAttribute("src")
    if (img2=="meo2.jpg"){
        ele1.src="khi2.jpg"
    }else if (img2=="khi2.jpg"){
        ele1.src="panda2.jpg"
    }else {
        ele1.src="meo2.jpg"
    }
}
function clickme2(ele){
    let img3 = ele.getAttribute("src")
    if (img3=="meo3.jpg"){
        ele.src="khi3.jpg"
    }else if (img3=="khi3.jpg"){
        ele.src="panda3.jpg"
    }else {
        ele.src="meo3.jpg"
    }
}
function clickme3(ele){
    let img4 = ele.getAttribute("src")
    if (img4=="meo4.jpg"){
        ele.src="khi4.jpg"
    }else if (img4=="khi4.jpg"){
        ele.src="panda4.jpg"
    }else {
        ele.src="meo4.jpg"
    }
}
function clickme4(ele){
    let img5 = ele.getAttribute("src")
    if (img5=="meo5.jpg"){
        ele.src="khi5.jpg"
    }else if (img5=="khi5.jpg"){
        ele.src="panda5.jpg"
    }else {
        ele.src="meo5.jpg"
    }
}*/
function clickme(elm,num){
    let img1 = "meo"+num+".jpg"
    let img2 = "khi"+num+".jpg"
    let img3 = "panda"+num+".jpg"
    Function(elm,img1,img2,img3)
    css()
}
function Function(elm,img1,img2,img3) {
    let img = elm.getAttribute("src")
    if (img==img1){
        elm.src=img2
    }else if (img==img2){
        elm.src=img3
    }else {
        elm.src=img1
    }
}
 function css() {
     let cc = "box-shadow: blue 4px 4px 9px;padding: 10px;"
     let a = "box-shadow: red 4px 4px 9px;padding: 10px;"
     let b = document.getElementById("cl1").getAttribute("src")
     let c = document.getElementById("cl2").getAttribute("src")
     let d = document.getElementById("cl3").getAttribute("src")
     let e = document.getElementById("cl4").getAttribute("src")
     let f = document.getElementById("cl5").getAttribute("src")
     if (b == "meo1.jpg" && c == "meo2.jpg" && d == "meo3.jpg" && e == "meo4.jpg" && f == "meo5.jpg") {
         document.getElementById("cl1").style = a
         document.getElementById("cl2").style = a
         document.getElementById("cl3").style = a
         document.getElementById("cl4").style = a
         document.getElementById("cl5").style = a
     } else if (b == "khi1.jpg" && c == "khi2.jpg" && d == "khi3.jpg" && e == "khi4.jpg" && f == "khi5.jpg") {
         document.getElementById("cl1").style = a
         document.getElementById("cl2").style = a
         document.getElementById("cl3").style = a
         document.getElementById("cl4").style = a
         document.getElementById("cl5").style = a
     } else if (b == "panda1.jpg" && c == "panda2.jpg" && d == "panda3.jpg" && e == "panda4.jpg" && f == "panda5.jpg") {
         document.getElementById("cl1").style = a
         document.getElementById("cl2").style = a
         document.getElementById("cl3").style = a
         document.getElementById("cl4").style = a
         document.getElementById("cl5").style = a
     } else {
         document.getElementById("cl1").style = cc
         document.getElementById("cl2").style = cc
         document.getElementById("cl3").style = cc
         document.getElementById("cl4").style = cc
         document.getElementById("cl5").style = cc
     }
 }


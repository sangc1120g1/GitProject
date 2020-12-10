function showing(num){
    document.name.ip.value=document.name.ip.value+num;
}
function bang(){
       let evalo = eval(document.name.in.value);
       document.name.in.value = evalo;
}
function xoa(){
    document.name.in.value= ''
}
function percent(){
    document.name.in.value= 1/100*eval(document.name.in.value)
}
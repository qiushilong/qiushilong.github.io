window.onresize=function (){
   getHeight();
}
function getHeight(){
    let headerHeight = document.getElementsByTagName("header").item(0).offsetHeight;
    let footerHeight =document.getElementsByTagName("footer").item(0).offsetHeight;
    let ableHeight=window.innerHeight-headerHeight-footerHeight;
    let scroll=document.getElementsByClassName("able-to-scroll").item(0);
    scroll.style.height=ableHeight+"px";
    scroll.style.overflow="auto";
    console.log(ableHeight);
}
getHeight();

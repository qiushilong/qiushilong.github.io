window.onload=function (){
    let guanli=document.getElementsByClassName("guan-li").item(0);
    guanli.onclick=function (){
        let count=0;
        let foot=document.getElementsByClassName("footer-in").item(0);
        let items=Array.from(document.getElementsByClassName("delete"));
        let all=document.getElementsByClassName("select-all").item(0);
        let s=document.getElementById("shanchu");
        //图片的全选中与全非选中
        all.onclick=function (){
            if(all.className=="select-all"){
                all.className+=" active-selected";
                items.forEach(function (ele){
                    ele.className+=" active-selected";
                })
                count=items.length;
            }
            else {
                all.className="select-all";
                items.forEach(function (ele){
                    ele.className="delete";
                })
                count=0;
            }
            s.innerText=`删除(${count})`;
        }
        //点击管理的显示的状态
        let str=guanli.innerHTML;
        if(str=="管理"){
            guanli.innerHTML="取消";
            foot.style.visibility="visible";
            items.forEach(function (ele){
                ele.style.visibility='visible';
                ele.onclick=function (){
                    count=compare(ele,'delete',count);
                    s.innerText=`删除(${count})`;
                }
            },this);
        }
        else {
            guanli.innerHTML="管理";
            foot.style.visibility="hidden";
            items.forEach(function (ele){
                ele.style.visibility='hidden';
            },this);
        }
        //删除弹窗
        s.onclick=function (){
            let tanchuang=document.getElementsByClassName("tanchuang").item(0);
            tanchuang.style.display="block";
            let results=Array.from(tanchuang.getElementsByTagName("p"));
            results.forEach(function (ele){
                ele.onclick=function (){
                    tanchuang.style.display="none";
                }
            })
        }

    }
    function compare(ele,str,count){
        if(ele.className==str){
            ele.className+=" active-selected";
            return ++count;
        }else{
            ele.className=str;
            return --count;
        }
    }
}
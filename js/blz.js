window.onload = function () {

    //导航定位
    var nav1 = document.querySelector('.nav1');
    var nav2 = document.querySelector('.nav2');

    document.onscroll = function () {
        // console.log(11);
        // window.pageYOffset 页面被卷去的头部
        // console.log(window.pageYOffset);
        // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
        // if (window.pageYOffset > 0 && window.pageYOffset <= 80) {
        //     nav2.style.top = nav2.offsetTop - window.pageYOffset + 'px';
        // }
        if (window.pageYOffset >= 0 && window.pageYOffset <= 80) {
            nav2.style.top = '80px';
            nav2.style.poistion = 'absolute';
        }
        else {
            nav2.style.top = '0px';
            nav2.style.poistion = 'fixed';
        }
    }

    //锚点移动
    function windowmove(target, callback) {
        clearInterval(window.timer);
        window.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 5;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset >= target - 5 && window.pageYOffset <= target + 5) {
                clearInterval(window.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }

    var as = document.querySelectorAll('.nav2 a');
    as[0].onclick = function () {
        windowmove(900);
        for (var j = 0; j < as.length; j++) {
            as[j].className = '';
        }
        this.className = 'in';
    }
    as[1].onclick = function () {
        windowmove(2160);
        for (var j = 0; j < as.length; j++) {
            as[j].className = '';
        }
        this.className = 'in';
    }
    as[2].onclick = function () {
        windowmove(6360);
        for (var j = 0; j < as.length; j++) {
            as[j].className = '';
        }
        this.className = 'in';
    }

    // 技能图切换
    var lis = document.querySelectorAll('.skill_gif_show ul li');
    var btns = document.querySelectorAll('.skill_gif_show ul li .skill_label');

    for (var i = 0; i < btns.length; i++) {
        btns[i].onmouseover = function () {
            // flag1表示被触发的按钮，flag2表示本来显示的按钮
            var flag1, flag2;
            for (var j = 0; j < btns.length; j++) {
                if (this == btns[j])
                    flag1 = j;
                if (btns[j].className == 'skill_label on')
                    flag2 = j;
            }
            console.log(flag1);
            console.log(flag2);
            if (flag1 == flag2)
                return;
            if (flag1 > flag2) {
                for (var j = flag2 + 1; j <= flag1; j++) {
                    animate(lis[j], 112 * j);
                    btns[flag2].className = 'skill_label';
                    btns[flag1].className = 'skill_label on';
                }
            } else {
                for (var j = flag1 + 1; j <= flag2; j++) {
                    animate(lis[j], 112 * j + 643);
                    btns[flag2].className = 'skill_label';
                    btns[flag1].className = 'skill_label on';
                }
            }
        }
    }


    //语音
    var music = document.querySelector('.skin_voice .tc audio');
    var lis2 = document.querySelectorAll('.skin_voice .tc ul li');
    for (var j = 0; j < lis2.length; j++) {
        lis2[j].onclick = function () {
            music.src = 'music/1.mp3';
            music.play();
            this.firstElementChild.src = 'img/voice2.png';
        }
    }

}
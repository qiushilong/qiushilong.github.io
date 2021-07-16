window.addEventListener('load', function () {

    // 轮播图
    var slideshow = document.querySelector('.slideshow');
    var lb_pic = document.querySelector('.lb ul');
    var lb_btn = document.querySelectorAll('.adBtn a');
    var timer = null;
    // 图片的宽度
    var pic_width = lb_pic.firstElementChild.firstElementChild.width;
    //表示到哪个按钮了
    var flag = 0;

    for (var i = 0; i < lb_btn.length; i++) {
        lb_btn[i].addEventListener('mouseover', function () {
            // 改按钮格式
            for (var j = 0; j < lb_btn.length; j++) {
                lb_btn[j].className = '';
            }
            this.className = 'on';
            // 图片滚动
            for (var j = 0; j < lb_btn.length; j++) {
                if (lb_btn[j] === this) {
                    flag = j;
                    animate(lb_pic, flag * (-pic_width));
                    return;
                }
            }
        });
    }

    timer = window.setInterval(function () {
        if (flag < 4)
            flag++;
        else
            flag = 0;
        // 改按钮
        for (var j = 0; j < lb_btn.length; j++) {
            lb_btn[j].className = '';
        }
        lb_btn[flag].className = 'on';
        animate(lb_pic, flag * (-pic_width));
    }, 2000);

    slideshow.addEventListener('mouseover', function () {
        clearInterval(timer);
    });
    slideshow.addEventListener('mouseout', function () {
        timer = window.setInterval(function () {
            if (flag < 4)
                flag++;
            else
                flag = 0;
            // 改按钮
            for (var j = 0; j < lb_btn.length; j++) {
                lb_btn[j].className = '';
            }
            lb_btn[flag].className = 'on';
            animate(lb_pic, flag * (-pic_width));
        }, 2000);
    });


    //信息栏
    var lb_ul = document.querySelector('.little_title');
    var lb_msg = document.querySelectorAll('.title ul li a');


    for (var i = 0; i < lb_msg.length; i++) {
        lb_msg[i].addEventListener('mouseover', function () {
            // 改按钮格式
            for (var j = 0; j < lb_msg.length; j++) {
                lb_msg[j].className = '';
            }
            this.className = 'on2';
            // 图片滚动
            for (var j = 0; j < lb_msg.length; j++) {
                if (lb_msg[j] === this) {
                    animate(lb_ul, j * (-325));
                    return;
                }
            }
        });
    }

    //缩小页面时，图片不缺失
    var nav1 = document.querySelector('.nav1');
    var nav = document.querySelector('nav');
    var footer = document.querySelector('footer');


    function change() {
        if (window.innerWidth < 1536) {
            nav1.style.width = "1519.2px";
            nav.style.width = "1519.2px";
            footer.style.width = "1519.2px";
            // console.log(true);
        } else {
            nav1.style.width = "100%";
            nav.style.width = "100%";
            footer.style.width = "100%";
        }
    }
    change();

    //
    window.addEventListener('resize', function () {
        change();
    })

})
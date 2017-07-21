//首頁 gallery==========================================

$(function(){
    if($(".gallery_1").length > 0){
        $(".gallery_1 .run .inner").bxSlider({
            captions : false,
            auto : true,
            controls:false,	
            pause : 4000,
            autoHover : true, //懸停
            autoDelay : 0
        });
    }
    
});

//gallery_4 相關推薦=======================================================================
$(function () {
    if ($(".gallery_3").length > 0) {
        var oPc = {
            slideWidth: 215,  //因為有margin-left會讓圖片變小，所以在初始化的時候設大一點
            slideMargin:15,
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            pager: false
        }

        var oPcm = {
            slideWidth: 175,
            slideMargin:15,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            pager: false
        }

        var oTablet = {
            slideWidth: 175,
            slideMargin:15,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            pager: false
        }

        var oMobile = {
            slideWidth: 145,
            slideMargin:15,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            pager: true,
            controls : false
        }

        // 桌機1220
        if ($(window).width() > 1220) {
            var gallery_3 = $(".gallery_3 .run .inner").bxSlider(oPc);
        }//小於桌機
        else if ($(window).width() < 1221 && $(window).width() > 768) {
            var gallery_3 = $(".gallery_3 .run .inner").bxSlider(oPcm);
        } // 平板
        else if ($(window).width() < 769 && $(window).width() > 640){
                var gallery_3 = $(".gallery_3 .run .inner").bxSlider(oTablet);
        }
        //手機
        else {
            var gallery_3 = $(".gallery_3 .run .inner").bxSlider(oMobile);
        }

        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;
        $(window).on("resize", function () {

            if (oScrollTimer) {
                clearTimeout(oScrollTimer);
            };

            oScrollTimer = setTimeout(function () {
                if ($(window).width() > 1220) {
                    gallery_3.reloadSlider(oPc);
                } else if ($(window).width() < 1221 && $(window).width() >768) {
                    gallery_3.reloadSlider(oPcm);
                }else if ($(window).width() < 769 && $(window).width() > 640) {
                    gallery_3.reloadSlider(oTablet);
                }else {
                    gallery_3.reloadSlider(oMobile);
                }
            }, 100);

        });

    }

});

//gallery_4 相關推薦=======================================================================
$(function () {
    if ($(".gallery_4").length > 0) {
        var oPc = {
            slideWidth: 215,  //因為有margin-left會讓圖片變小，所以在初始化的時候設大一點
            slideMargin:15,
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            pager: false
        }

        var oPcm = {
            slideWidth: 175,
            slideMargin:15,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            pager: false
        }

        var oTablet = {
            slideWidth: 175,
            slideMargin:15,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            pager: false
        }

        var oMobile = {
            slideWidth: 145,
            slideMargin:15,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            pager: true,
            controls : false
        }

        // 桌機1220
        if ($(window).width() > 1220) {
            var gallery_4 = $(".gallery_4 .run .inner").bxSlider(oPc);
        }//小於桌機
        else if ($(window).width() < 1221 && $(window).width() > 768) {
            var gallery_4 = $(".gallery_4 .run .inner").bxSlider(oPcm);
        } // 平板
        else if ($(window).width() < 769 && $(window).width() > 640){
                var gallery_4 = $(".gallery_4 .run .inner").bxSlider(oTablet);
        }
        //手機
        else {
            var gallery_4 = $(".gallery_4 .run .inner").bxSlider(oMobile);
        }

        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;
        $(window).on("resize", function () {

            if (oScrollTimer) {
                clearTimeout(oScrollTimer);
            };

            oScrollTimer = setTimeout(function () {
                if ($(window).width() > 1220) {
                    gallery_4.reloadSlider(oPc);
                } else if ($(window).width() < 1221 && $(window).width() >768) {
                    gallery_4.reloadSlider(oPcm);
                }else if ($(window).width() < 769 && $(window).width() > 640) {
                    gallery_4.reloadSlider(oTablet);
                }else {
                    gallery_4.reloadSlider(oMobile);
                }
            }, 100);

        });

    }

});


//gallery_5 相關推薦=======================================================================
    $(function(){
        if($(".gallery_5").length > 0){
            var oPc ={
                slideWidth: 380,
                slideMargin:30,
                minSlides:3,
                maxSlides:3,
                moveSlides:1,
                pager: false,
                onSliderLoad:function(){
                    $(".gallery_5 .run .inner .piece a.pic img").show();
                }
            }

            var oPcm ={
                slideWidth: 250,
                slideMargin:30,
                minSlides:3,
                maxSlides:3,
                moveSlides:1,
                pager: false,
                onSliderLoad:function(){
                    $(".gallery_5 .run .inner .piece a.pic img").show();
                }
            }

            var oTablet ={
                slideWidth: 250,
                slideMargin:15,
                minSlides:2,
                maxSlides:2,
                moveSlides:1,
                pager: false,
                onSliderLoad:function(){
                    $(".gallery_5 .run .inner .piece a.pic img").show();
                }
            }

            var oMobile ={
                slideWidth: 250,
                minSlides:1,
                maxSlides:1,
                moveSlides:1,
                pager: true,
                onSliderLoad:function(){
                    $(".gallery_5 .run .inner .piece a.pic img").show();
                }
            }

            // 桌機
            if ($(window).width() > 1220) {
                var gallery_5 =$(".gallery_5 .run .inner").bxSlider(oPc);
            }
             // 1024
            else if ($(window).width() < 1221 && $(window).width() > 768) {
                var gallery_5 =$(".gallery_5 .run .inner").bxSlider(oPcm);
            }
            // 平板
            else if ($(window).width() < 769 && $(window).width() > 414) {
                var gallery_5 =$(".gallery_5 .run .inner").bxSlider(oTablet);
            }
            //手機
            else{
                var gallery_5 =$(".gallery_5 .run .inner").bxSlider(oMobile);
            }
            
            //重新計算寬度   加setTimeOut
            var oScrollTimer = null;
            $(window).on("resize", function () {

                if(oScrollTimer){
                    clearTimeout(oScrollTimer);
                };

                oScrollTimer = setTimeout(function(){
                    if($(window).width() > 1220){
                        gallery_5.reloadSlider(oPc);
                    }else if($(window).width() < 1221 && $(window).width() > 768){
                        gallery_5.reloadSlider(oPcm);
                    }else if($(window).width() < 769 && $(window).width() > 640){
                        gallery_5.reloadSlider(oTablet);
                    }else{
                        gallery_5.reloadSlider(oMobile);
                    }
                },100);

            }).trigger("resize");
            
        }

    });

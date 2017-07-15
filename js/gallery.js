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
// product_detail gallery_2 商品大圖切換==================================================
$(function(){
    
    if($(".gallery_2").length>0){
         var oPc = {
            slideWidth: 100,
            mode: 'vertical',
            pager: false,
            nextSelector: ".gallery_2 .operate .prev span",
            prevSelector: ".gallery_2 .operate .next span",
            nextText: "",
            prevText: "",
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            onSliderLoad: function (currentIndex) {
                $(".gallery_2 .run .inner .piece img").show();
                var $slideElement = $(".gallery_2 .run .inner .piece").eq(currentIndex + 5); //自訂選擇器名稱
                var currentImg = $slideElement.find("img").attr("src");
                $(".stage img").attr("src", currentImg);
            }
        }

        var oMobile = {
            pager: true,
            controls:false,	
            auto : true,
            pause : 4000,
            autoHover : true, //懸停
            autoDelay : 0,
            slideWidth: 400,
            minSlides: 1,
            maxSlides: 1,
        }

        // 桌機
        if ($(window).width() <= 768) {
            var gallery_2 = $(".gallery_2 .run .inner").bxSlider(oMobile);
        }
        // 手機
        else{
            var gallery_2 = $(".gallery_2 .run .inner").bxSlider(oPc);
        }

        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;
        $(window).on("resize", function () {

            if(oScrollTimer){
                clearTimeout(oScrollTimer);
            };

            oScrollTimer = setTimeout(function(){
                if ($(window).width() <= 768) {
                    gallery_2.reloadSlider(oMobile);
                } else {
                    gallery_2.reloadSlider(oPc);
                }
            },100);

        }).trigger("resize");

        //寫入目前圖片
        function getCurrentImg() {
            var current = gallery_2.getCurrentSlide() + 5;
            var currentImg = $(".piece").eq(current).find("img").attr("src");
            //alert(current);
            $(".stage img").attr("src", currentImg);
        }

        $(".operate").find(".getImg").on("click", getCurrentImg);

    }

   
});


//gallery_3 推薦商品 ======================================================================
$(function(){
    if($(".gallery_3").length > 0){
        var oPc ={
            slideWidth: 200,
            minSlides:5,
            maxSlides:5,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_3 .run .inner .piece a.pic img").show();
            }
        }

        var oTablet ={
            slideWidth: 160,
            minSlides:3,
            maxSlides:3,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_3 .run .inner .piece a.pic img").show();
            }
        }

        var oMobile ={
            slideWidth: 130,
            minSlides:2,
            maxSlides:2,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_3 .run .inner .piece a.pic img").show();
            }
        }

        // 桌機
        if ($(window).width() > 768) {
            var gallery_3 =$(".gallery_3 .run .inner").bxSlider(oPc);
        }
        // 平板
        else if ($(window).width() < 769 && $(window).width() > 640) {
            var gallery_3 =$(".gallery_3 .run .inner").bxSlider(oTablet);
        }
        //手機
        else{
            var gallery_3 =$(".gallery_3 .run .inner").bxSlider(oMobile);
        }
        
        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;
        $(window).on("resize", function () {

            if(oScrollTimer){
                clearTimeout(oScrollTimer);
            };

            oScrollTimer = setTimeout(function(){
                if($(window).width() > 768){
                    gallery_3.reloadSlider(oPc);
                }else if($(window).width() < 769 && $(window).width() > 640){
                    gallery_3.reloadSlider(oTablet);
                }else{
                    gallery_3.reloadSlider(oMobile);
                }
            },100);

        }).trigger("resize");
        
    }

});


//gallery_4 相關推薦=======================================================================
$(function(){
    if($(".gallery_4").length > 0){
        var oPc ={
            slideWidth: 200,
            minSlides:5,
            maxSlides:5,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_4 .run .inner .piece a.pic img").show();
            }
        }

        var oTablet ={
            slideWidth: 160,
            minSlides:3,
            maxSlides:3,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_4 .run .inner .piece a.pic img").show();
            }
        }

        var oMobile ={
            slideWidth: 130,
            minSlides:2,
            maxSlides:2,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_4 .run .inner .piece a.pic img").show();
            }
        }

        // 桌機
        if ($(window).width() > 768) {
            var gallery_4 =$(".gallery_4 .run .inner").bxSlider(oPc);
        }
        // 平板
        else if ($(window).width() < 769 && $(window).width() > 640) {
            var gallery_4 =$(".gallery_4 .run .inner").bxSlider(oTablet);
        }
        //手機
        else{
            var gallery_4 =$(".gallery_4 .run .inner").bxSlider(oMobile);
        }
        
        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;
        $(window).on("resize", function () {

            if(oScrollTimer){
                clearTimeout(oScrollTimer);
            };

            oScrollTimer = setTimeout(function(){
                if($(window).width() > 768){
                    gallery_4.reloadSlider(oPc);
                }else if($(window).width() < 769 && $(window).width() > 640){
                    gallery_4.reloadSlider(oTablet);
                }else{
                    gallery_4.reloadSlider(oMobile);
                }
            },100);

        }).trigger("resize");
        
    }

});


//gallery_5 相關推薦=======================================================================
$(function(){
    if($(".gallery_5").length > 0){
        var oPc ={
            slideWidth: 380,
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
            minSlides:2,
            maxSlides:2,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_5 .run .inner .piece a.pic img").show();
            }
        }

        var oMobile ={
            slideWidth: 320,
            minSlides:1,
            maxSlides:1,
            moveSlides:1,
            pager: false,
            onSliderLoad:function(){
                $(".gallery_5 .run .inner .piece a.pic img").show();
            }
        }

        // 桌機
        if ($(window).width() > 768) {
            var gallery_5 =$(".gallery_5 .run .inner").bxSlider(oPc);
        }
        // 平板
        else if ($(window).width() < 769 && $(window).width() > 640) {
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
                if($(window).width() > 768){
                    gallery_5.reloadSlider(oPc);
                }else if($(window).width() < 769 && $(window).width() > 640){
                    gallery_5.reloadSlider(oTablet);
                }else{
                    gallery_5.reloadSlider(oMobile);
                }
            },100);

        }).trigger("resize");
        
    }

});

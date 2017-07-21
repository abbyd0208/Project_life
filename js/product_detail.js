(function(){
     
    
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
            maxSlides: 1
        }

        // 桌機
        if ($(window).width() > 768) {
            var gallery_2 = $(".gallery_2 .run .inner").bxSlider(oPc);
        }
        // 手機
        else if ($(window).width() < 769) {
            var gallery_2 = $(".gallery_2 .run .inner").bxSlider(oMobile);
        }

        //重新計算寬度   加setTimeOut
        var oScrollTimer = null;

        $(window).on("resize", function () {
            //計時器歸零
            if(oScrollTimer){clearTimeout(oScrollTimer);}
            
            oScrollTimer = setTimeout(function(){
                
                if($(window).width() > 768){
                    $(".info_1").append("T-");
                    gallery_2.reloadSlider(oPc);
                }else if($(window).width() < 769){
                    gallery_2.reloadSlider(oMobile);
                }
            },0);
        })

        //寫入目前圖片
        function getCurrentImg() {
            var current = gallery_2.getCurrentSlide() + 5;
            var currentImg = $(".piece").eq(current).find("img").attr("src");
            //alert(current);
            $(".stage img").attr("src", currentImg);
        }

        $(".operate").find(".getImg").on("click", getCurrentImg);

    }


})()
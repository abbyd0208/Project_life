

//測選單打開================================================
$(function(){
    //選單高度
    var iWinH;
    var menuState;

    // 選單打開
    function fnOpen(){
        iWinH = window.innerHeight;
        menuState = 1;
        $(".wrapper").css({"height":iWinH,"overflow":"hidden"}).addClass("side_open");
        $("#main_nav").css({"height":iWinH}).addClass("menu_open").fadeIn();
    }

    function fnClose(){
        $(".wrapper").css({"height":"auto","overflow":"visible"}).removeClass("side_open");
        $("#main_nav").css({"height":"auto"}).removeClass("menu_open").fadeOut();
        //回到桌機版時選單會消失
    }

    //resize
    function deviceChange(){
        iWinH = window.innerHeight;
        menuState = 0;
        $("#main_nav").css({"height":iWinH});

        if($(window).width() > 768) {
            //桌機
            $("#main_nav .inner > ul > li").addClass("menu_hover");//取消hover樣式
            $("#main_nav").css({"display":"block","height":"auto"});//回到桌機版時選單會消失，高度復原
            $(".wrapper").removeClass("side_open");//回到桌機版時覆蓋那層會顯現
        }else if($(window).width() < 769){
            //("平板")
            $("#main_nav .inner > ul > li").removeClass("menu_hover");   
            $(".top_bar .menu_2 .operate .pc_only").removeClass("menu_hover");
            if($("#main_nav ").hasClass("menu_open")){
                $("#main_nav").css({"display":"block"});
            }else{
                $("#main_nav").css({"display":"none"});
            }
        }
    } 
    
    deviceChange();

    //重新計算高度   加setTimeOut
    $(window).on("resize",deviceChange);;



    //點擊
    $(".wrapper").on("click", ".btn_side_open",fnOpen);
    $(".btn_side_close").on("click", fnClose);
});


// 側選單點展開=========================================================
$(function(){
    var mainNav = $("#main_nav > .inner");
    var first = mainNav.find("ul").find("li").children("a.first");
    var second = first.parents().find(".second>li>a");
    var third = second.parents().find(".third");

    // 第一層
    first.on("click",function(e){
        e.preventDefault();   //解除連結效果
        first.removeClass("show_second");
        $(this).addClass("show_second");
    });

    // 第二層
    second.on("click",function(e){

        second.removeClass("show_third");
        $(this).addClass("show_third");
        
        if($(this).next().hasClass("third")){
            return false;
        }else{
            return true;
        }
    });

});



//頁籤 商品資訊切換 product_detail.htm=====================================
$(function(){
	//初始
	$("#tab_switch .tab_menu a").eq(0).addClass("current");
    $("#tab_switch .tab_content .piece").eq(0).show().siblings().hide();

	$("#tab_switch .tab_menu a").on("mouseover click",function(e){
		e.preventDefault();
		var iNo = $(this).index();
		$("#tab_switch .tab_content .piece").eq(iNo).show().siblings().hide();
		$("#tab_switch .tab_menu a").eq(iNo).addClass("current").siblings().removeClass("current");
	});
});



//讓捲軸用動畫的方式移動到到指定id位罝 news.htm======================
$(function(){
    $("#scrollgo").click(function(){
        var sGoTo = $(this).attr("rel"); //取得目標物的id class
        var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
        
        $body.animate({
            scrollTop: $(sGoTo).offset().top-38
        }, 500);
        return false;
    });
});





// gototop ======================================
$(function(){
	
	var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //滾回的位置
	var iScrollPointB = 20; //滾到的位置 出現gototop
	
	//滾動事件
	var oScrollTimer = null;
	$(window).on("scroll", function(){

		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function(){
							if( $(window).scrollTop() > iScrollPointB) {
								$goToTop.css({"opacity":"0.6", "bottom":"70px"});	
							} else {
								$goToTop.css({"opacity":"0", "bottom":"30px"});	
							}
						}, 200);
	});
	
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 150);
		return false;
	});
//---	
});

// JavaScript Document
// 收疊設計 ===================================================
$(function () {
    $(".section_shop_guide .list h4").on("click", function () {
        $(this).next("p").slideToggle();
    });
});

// 表格 按鈕動作  ===================================================
$(function () {
	$("table .btn-holder").on("click", function (event) {
		event.preventDefault();
		if ( $(this).hasClass("favorite") ){
			alert("收藏");
		} else if ($(this).hasClass("delete")) {
			alert("刪除");
		} else if ($(this).hasClass("cart")) {
			alert("加入購物車");
		}
		$(this).parents("tr").remove();
	});
});



// 假input===================================
$(function(){

    function toggleMenu(e){
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass("show");
    }

    function sgetVal(e){
        e.preventDefault();
        var val = $(this).html();
        $("#order").html(val);
    }

    var $selector1 = $("#select_box .item_1");
    var $selector2 = $("#select_box .item_2");

    $selector1.find("#order").on("click",toggleMenu);
    $selector1.find(".sub>a").on("click",sgetVal);
    $selector2.find("a").on("click",toggleMenu);

});

// range===================================
$(function(){

    if($("#range").length>0){
        var $range = $("#range");
        $range.ionRangeSlider({
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            onFinish: function (data) {
            alert("最低"+data.from+"元 + 最低金額"+data.to);
            }
        });

    }
   
});

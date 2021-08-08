$(function(){

	//グローバルナビゲーション
$(".btn-gnavi").on("click", function(){
    var rightVal = 0;
    if($(this).hasClass("open")){
        rightVal= -300;
        $(this).removeClass("open");
    }
    else{
        $(this).addClass("open");
    }
    $(".global-navi").stop().animate({
        right:rightVal
    }, 300);
});

//スライドショー
    var imgList = [
       "images/slider/img01.jpg",
		"images/slider/img02.jpg",
		"images/slider/img03.jpg",
		"images/slider/img04.jpg",
		"images/slider/img05.jpg" 
    ];
for(var i =0; i< imgList.length; i++){
    var slide = document.createElement("Li");
    slide.innerHTML = "<img src='"+ imgList[i]
    +"'>";
    document.getElementsByClassName("slider-inner")
    [0].appendChild(slide);
    var nav = document.createElement("Li");
    nav.setAttribute("data-nav-index", i);
    nav.style.backgroundImage="url("+
        imgList[i]+")";
    nav.style.width = 100 / imgList.length + "%";
		document.getElementsByClassName("nav")[0].appendChild(nav);
}
var length = imgList.length - 1;
	var slider = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
	var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var nowIndex = 0;
	var isChanging = false;
	var slideTimer;
	slider[nowIndex].classList.add("show");
	nav[nowIndex].classList.add("current");

	function sliderSlide(val) {
		if(isChanging) return false;
		isChanging = true;
		slider[nowIndex].classList.remove("show");
		nav[nowIndex].classList.remove("current");
		nowIndex = val;
		slider[nowIndex].classList.add("show");
		nav[nowIndex].classList.add("current");
		slideTimer = setTimeout(function(){
			isChanging = false;
		}, 600);
	}
	document.getElementById("arrow-prev").addEventListener("click", function(){
		var index = nowIndex - 1;
		if(index < 0) index = length;
		sliderSlide(index);
	}, false);
	document.getElementById("arrow-next").addEventListener("click", function(){
		var index = nowIndex + 1;
		if(index > length) index = 0;
		sliderSlide(index);
	}, false);
	for(var i = 0; i < nav.length; i++) {
		nav[i].onclick = function(){
			var index = Number(this.getAttribute("data-nav-index"));
			sliderSlide(index);
		};
	}
	//ポップアップ用colorbox
$(".popup").colorbox({
    fixed:true,
    iframe: true,
    innerWidth: 640,
    innerHeight: 359
});

    
//Google Maps
function initMap(){
    var pos = {lat: 35.681763, lng: 139.767020};
var opts = {
    zoom:15,
    center:new google.maps.LatLng(pos)
};
  var map = new google.maps.Map(document.getElementById("map"), opts); 
    
     var marker = new google.maps.Marker({
      position: pos,
      map: map
       });  
}
initMap();
 





























































































































	// 地図の初期化処理を実行

});
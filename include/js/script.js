//모달창 띄우기
function openModal(modalname){
    //document.get
    $("#"+modalname).fadeIn(300);
}

function closeModal(modalname){
    //document.get
    $("#"+modalname).fadeOut(300);
}

function goTo(name) {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
}

$(function(){ 
	$(".tab_list ul li").click(function(){
		var now_tab = $(this).index();
		$(this).parent().find("li").removeClass("on");
		$(this).parent().find("li").eq(now_tab).addClass("on");
		$(this).parents(".tab_area").find(".tab_cont").removeClass("on");
		$(this).parents(".tab_area").find(".tab_cont").eq(now_tab).addClass("on");
	});
});
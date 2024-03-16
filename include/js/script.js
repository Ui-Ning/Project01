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

/* 메인 슬라이드 */
$(function(){
	$("#Img_slide01").slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
		infinite : true, 	//무한 반복 옵션
		slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		autoplaySpeed: 2800, // 다음이미지로 넘어갈 시간
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : false,			// 자동 스크롤 사용 여부
		vertical : false,		// 세로 방향 슬라이드 옵션
		draggable : true, 	//드래그 가능 여부
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 560, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow : 1,
					slidesToScroll : 1
				} 
			}
		]
	});

	$("#Img_slide02").slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
		infinite : true, 	//무한 반복 옵션
		slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		autoplaySpeed: 2800, // 다음이미지로 넘어갈 시간
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : false,			// 자동 스크롤 사용 여부
		vertical : false,		// 세로 방향 슬라이드 옵션
		draggable : true, 	//드래그 가능 여부
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 560, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow : 1,
					slidesToScroll : 1
				} 
			}
		]
	});

	$("#Img_slide03").slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
		infinite : true, 	//무한 반복 옵션
		slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		autoplaySpeed: 2800, // 다음이미지로 넘어갈 시간
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : false,			// 자동 스크롤 사용 여부
		vertical : false,		// 세로 방향 슬라이드 옵션
		draggable : true, 	//드래그 가능 여부
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 560, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow : 1,
					slidesToScroll : 1
				} 
			}
		]
	});

	$("#Img_slide04").slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
		infinite : true, 	//무한 반복 옵션
		slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		autoplaySpeed: 2800, // 다음이미지로 넘어갈 시간
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : false,			// 자동 스크롤 사용 여부
		vertical : false,		// 세로 방향 슬라이드 옵션
		draggable : true, 	//드래그 가능 여부
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 560, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow : 1,
					slidesToScroll : 1
				} 
			}
		]
	});

	$("#Img_slide05").slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
		infinite : true, 	//무한 반복 옵션
		slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		autoplaySpeed: 2800, // 다음이미지로 넘어갈 시간
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : false,			// 자동 스크롤 사용 여부
		vertical : false,		// 세로 방향 슬라이드 옵션
		draggable : true, 	//드래그 가능 여부
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 560, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow : 1,
					slidesToScroll : 1
				} 
			}
		]
	});
});

$(function(){
	$('.slick_toggle').click(function(){
		if($(this).hasClass('slick_stop')){
			$(this).parent().parent().parent().slick('slickPause');
			$(this).removeClass('slick_stop');
			$(this).addClass('slick_play');
		} else {
			$(this).parent().parent().parent().slick('slickPlay');
			$(this).removeClass('slick_play');
			$(this).addClass('slick_stop');
		}
	});

	$('.slick-prev').click(function(){
		$(this).parent().parent().parent().slick('slickPrev');
	});

	$('.slick-next').click(function(){
		$(this).parent().parent().parent().slick('slickNext');
	});
});
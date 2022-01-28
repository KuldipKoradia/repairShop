// on page scroll animations js
$(window).on('load',function() {
	$('.loader-wrapper').fadeOut('slow');
	$(function() {
		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(e) {
				if (!e.isIntersecting) return;
				e.target.classList.add('move'); // 交差した時の処理
				observer.unobserve(e.target);
				// target element:
				//   e.target				ターゲット
				//   e.isIntersecting		交差しているかどうか
				//   e.intersectionRatio	交差している領域の割合
				//   e.intersectionRect		交差領域のgetBoundingClientRect()
				//   e.boundingClientRect	ターゲットのgetBoundingClientRect()
				//   e.rootBounds			ルートのgetBoundingClientRect()
				//   e.time					変更が起こったタイムスタンプ
			})
		},{
			// オプション設定
			rootMargin: '0px 0px -5% 0px' //下端から5%入ったところで発火
			//threshold: [0, 0.5, 1.0]
		});
		var target = document.querySelectorAll('.io'); //監視したい要素をNodeListで取得
		for(var i = 0; i < target.length; i++ ) {
			observer.observe(target[i]); // 要素の監視を開始
		}
		//アニメーションによる各要素のはみ出しを解消
		$("body").wrapInner("<div style='overflow:hidden;'></div>");
		// $("#id_selectbox").on("change", function() {
		// 	$(this).removeClass("holder_col").addClass("active_col");
		// });
	});
});

$(document).ready(function(){
	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$(this).toggleClass('open_menu');
		$(".custom_navbar").slideToggle();
	});
	$(window).resize(function(){
		$('.navbar_toggler').removeClass('open_menu');
		$('.custom_navbar').removeAttr('style');
	});

	// nationwide tab JS
	$('.nationwide_list_tab_title ul li a').click(function(){
		$('.nationwide_list_tab_title ul li a').removeClass('active_tab');
		$(this).addClass('active_tab');
		var tagid = $(this).data('tag');
		$('.nationwide_list_tab_content .nationwide_tab_content').removeClass('tab_content_active').hide();
		$('#'+tagid).addClass('tab_content_active').show();
	});

    // article slider JS
    $('.article_slider').slick({
    	dots: true,
    	infinite: true,
    	centerMode: true,
    	centerPadding: '450px',
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	nextArrow: '<a href="#" class="slick-next slick-arrow article_next"><i class="fas fa-chevron-right"></i></a>',
    	prevArrow: '<a href="#" class="slick-prev slick-arrow article_prev"><i class="fas fa-chevron-left"></i></a>',
    	// responsive: [
    	// {
    	// 	breakpoint: 768,
    	// 	settings: {
    	// 		arrows: false,
    	// 		centerMode: true,
    	// 		centerPadding: '40px',
    	// 		slidesToShow: 3
    	// 	}
    	// },
    	// {
    	// 	breakpoint: 480,
    	// 	settings: {
    	// 		arrows: false,
    	// 		centerMode: true,
    	// 		centerPadding: '40px',
    	// 		slidesToShow: 1
    	// 	}
    	// }
    	// ]
    });

	// got to page top js
	// $(window).on('load scroll',function(){
	// 	var	windowTop = $(window).scrollTop();
	// 	if(windowTop > 600) {
	// 		$('.pagetop').fadeIn();
	// 	} else {
	// 		$('.pagetop').fadeOut();
	// 	}
	// });
	// $('.pagetop').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('body,html').animate({
	// 		scrollTop: 0,
	// 	}, 800);
	// });
});
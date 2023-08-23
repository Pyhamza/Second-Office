var $html,
		$body_var,
		$base_var,
		rem = 10,
		rem_test = 10,
		window_height,
		window_width,
		vert_percent,
		hor_percent,
		hor_constant = 1920,
		vert_constant = 1080,
		touchstart = false,
		page_load = false,
		$mobile = false,
		first_load = false,
		a_array = {},
		$linear,
		$easeInOut_1,
		$easeOut_1,
		$easeIn_1,
		$easeInOut_2,
		$easeOut_2,
		$easeIn_2,
		$easeInOut_3,
		$easeOut_3,
		$easeIn_3,
		$bounce,
		touchstart = false,
		side_b_open = false,
		menu_open = false,
		landing_cell_first = false,
		landing_cell_flag = false,
		active_page = 1,
		new_active_page = false,
		clickPointY = 0,
		cell_b_active = 1,
		cell_b_amount = 11,
		cell_slide = 0,
		landing_loading_line_sub,
		portfolio_case_click = false,
		about_tabs = 3,
		about_active_tab = 1,
		about_slider_active = false,
		about_slider_time_start = false,
		$scroll_fired = false,
		portfolio_see_more_click = false,
		page_id;

var pages_array = ['loading', 'landing', 'contacts', 'clients', 'service', 'portfolio', 'portfolio_single', 'about'];

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

var JD = {};

JD.debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
				args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);
		if (callNow) {
			func.apply(context, args);
		}
	};
};

$(function() {
    console.log( "ready!" );
});

function custom_ease() {
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.089,0.175 0.328,0.898 0.742,0.978 0.812,0.991 0.928,1 1,1"));
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.402,0.378 0.314,0.48 0.565,0.775 0.603,0.82 0.78,1 1,1"));
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.324,0.404 0.192,0.688 0.446,0.886 0.576,0.987 0.78,1 1,1"));
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.216,0.044 0.475,0.274 0.624,0.372 0.896,0.55 0.934,0.796 1,1"));
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.19,0 0.538,0 0.538,0 0.538,0 0.517,0.008 0.674,0.388 0.854,0.824 0.816,0.966 1,1"));
	a_array.custom_ease.push(CustomEase.create("custom", "M0,0 C0.078,0.02 0.136,0.02 0.202,0.11 0.328,0.281 0.6,0.689 0.8,0.9 0.875,0.98 0.949,0.99 1,1"));
}

var THEME_BASEURL = '';

$(window).on('load', function () {
	$html = $('html');
	$body_var = $('body');
	$base_var = $('.base');

	load();
	resize_f();
	global_anim();
	loading();
	landing();

	a_array.loading_tl.play();

});

function load() {

	landing_loading_line_sub = $('.landing_loading_line_sub');
	a_array.cell_tl_array = [];

	a_array.custom_ease = [];
	a_array.loading_el_a = [];

	a_array.global_el = {
		section_b: [],
		scene_section_b: [],
		html: $('html'),
		body_var: $('body'),
		base_var: $('.base'),
		cover_bg_w: $('.cover_bg_w'),
		cover_bg: $('.cover_bg'),
		main_menu_b_w: $('.main_menu_b_w'),
		main_menu_b: $('.main_menu_b'),
		menu_btn: $('.menu_btn'),
		menu_btn_white: $('.menu_btn_white'),
		menu_btn_red: $('.menu_btn_red'),
		menu_btn_line_sub: $('.menu_btn_line_sub'),
		menu_btn_text_sub: $('.menu_btn_text_sub'),
		menu_btn_line: $('.menu_btn_line'),
		menu_btn_text: $('.menu_btn_text'),
		main_m_social_b: $('.main_m_social_b'),
		main_m_contact_address_sub: [],
		main_menu_link: [],
		main_menu_link_full: $('.main_menu_link'),
		main_menu_gf_el_menu: $('.main_menu_gf_el_menu'),
		main_menu_link_text_w: $('.main_menu_link_text_w'),
		main_menu_link_text: $('.main_menu_link_text'),
		main_menu_link_line: $('.main_menu_link_line'),
		clients_link: $('.clients_link'),
		clients_link_ico: $('.clients_link_ico'),
		clients_link_text: $('.clients_link_text'),
		social_menu: $('.social_menu'),
		copyright: $('.copyright'),
		copyright_sub: $('.copyright_sub'),
		logo: $('.logo'),
		logo_sub: $('.logo_sub'),
		page_info: $('.page_info'),
		address_side_b: $('.address_side_b'),
		portfolio_link_btn: $('.portfolio_link_btn'),
		portfolio_link_btn_ico: $('.portfolio_link_btn_ico'),
		portfolio_link_btn_ico_sub: $('.portfolio_link_btn_ico_sub'),
		page_info_text_sub_l: [],
		page_info_text_sub_line: []
	};

	custom_ease();

	a_array.loading_el_a = {
		loader_counter: $('.loader_counter'),
		loader_bg: $('.loader_bg'),
		loader_b: $('.section_b.loading_mod')
	};



	$linear = Power0.easeNone;
	$easeInOut_1 = Power1.easeInOut;
	$easeOut_1 = Power1.easeOut;
	$easeIn_1 = Power1.easeIn;
	$easeInOut_2 = Power2.easeInOut;
	$easeOut_2 = Power2.easeOut;
	$easeIn_2 = Power2.easeIn;
	$easeInOut_3 = Power3.easeInOut;
	$easeOut_3 = Power3.easeOut;
	$easeIn_3 = Power3.easeIn;
	$bounce = CubicBezier.config(0.89, 1.01, 0.99, 0.9);

	$.getCss(['styles/global_assets.css'], function(){
		page_load = true;
	});
}


function animated_fill($el_one, $el_one_sub, $el_two, $el_two_sub, $direction, $time, $delay) {
	$time = $time == undefined ? .5 : $time;
	$delay = $delay == undefined ? 0 : $delay;
	$direction = $direction == undefined ? "start" : $direction;


	TweenMax.set([$el_one, $el_one_sub, $el_two, $el_two_sub], {clearProps: "all"})
	TweenMax.set($el_one_sub, {opacity: 1})
	if ($direction == "start") {
		TweenMax.staggerFrom([$el_one_sub, $el_one], $time, {
			cycle: {
				xPercent: [100, -100]
			},
			ease: Power2.easeInOut,
			delay: $delay
		}, 0);

		TweenMax.staggerTo([$el_two_sub, $el_two], $time, {
			cycle: {
				xPercent: [-100, 100]
			},
			delay: $delay,
			ease: Power2.easeInOut
		}, 0);
	}
	else if ($direction == "end") {
		TweenMax.staggerTo([$el_one_sub, $el_one], $time, {
			cycle: {
				xPercent: [-100, 100]
			},
			ease: Power2.easeInOut,
			delay: $delay
		}, 0);

		TweenMax.staggerFrom([$el_two_sub, $el_two], $time, {
			cycle: {
				xPercent: [100, -100]
			},
			delay: $delay,
			ease: Power2.easeInOut
		}, 0);
	}
	else if ($direction == "back_start") {
		TweenMax.staggerFrom([$el_one_sub, $el_one], $time, {
			cycle: {
				xPercent: [-100, 100]
			},
			ease: Power2.easeInOut,
			delay: $delay
		}, 0);

		TweenMax.staggerTo([$el_two_sub, $el_two], $time, {
			cycle: {
				xPercent: [100, -100]
			},
			delay: $delay,
			ease: Power2.easeInOut
		}, 0);
	}
	else if ($direction == "back_end") {
		TweenMax.staggerFromTo([$el_one_sub, $el_one], $time, {
					cycle: {
						xPercent: [0, 0]
					},
					delay: $delay,
					ease: Power2.easeInOut
				},
				{
					cycle: {
						xPercent: [100, -100]
					},
					delay: $delay,
					ease: Power2.easeInOut
				}, 0);

		TweenMax.staggerFromTo([$el_two_sub, $el_two], $time, {
					cycle: {
						xPercent: [-100, 100]
					},
					delay: $delay,
					ease: Power2.easeInOut
				},
				{
					cycle: {
						xPercent: [0, 0]
					},
					delay: $delay,
					ease: Power2.easeInOut
				}, 0);

	}
}

function cell_anim_f($el, $conteiner, $time, $paused, $derection, $new_el, $index) {

	$paused = $paused == undefined ? false : $paused;
	$new_el = $new_el == undefined ? true : $new_el;
	$time = $time == undefined ? .4 : $time;
	$derection = $derection == undefined ? 101 : $derection;

	var cell_time = $time;
	var cell_time_shift = cell_time * .85;
	var cell_ease = $easeOut_2;

	if($index) {
		var $el_for_clear;
		var $container_for_clear;
		if ($conteiner.hasClass('first_mod')) {
			$el_for_clear = a_array.scene_bg_el_array[1];
			$container_for_clear = a_array.scene_bg_b_array[1];
		} else {
			$el_for_clear = a_array.scene_bg_el_array[0];
			$container_for_clear = a_array.scene_bg_b_array[0];
		}

		TweenMax.set($conteiner, {
			display: "none",
			className: $index
		});
		TweenMax.set($el, {
			clearProps: "all",
			onComplete: function () {
				TweenMax.set($container_for_clear, {className: '-=before_mod'});
			}
		});
	}
	TweenMax.set($conteiner, {
		display: "block"
	});
	TweenMax
			.to($el[0], cell_time, {
				yPercent: $derection,
				ease: $easeOut_1
			})
	TweenMax.set($el, {opacity: 1, delay: cell_time});
	TweenMax.from($el[1], cell_time, {
		yPercent: 100,
		xPercent: 100,
		ease: cell_ease,
		delay: cell_time
	})
	TweenMax.from($el[2], cell_time, {
		yPercent: -100,
		ease: cell_ease,
		delay: cell_time * 2 - cell_time_shift
	})
	TweenMax.from($el[3], cell_time, {
		xPercent: 100,
		yPercent: -100,
		ease: cell_ease,
		delay: cell_time * 2 - cell_time_shift
	})
	TweenMax.from($el[4], cell_time, {
		xPercent: -100,
		delay: cell_time * 2 - cell_time_shift,
		ease: cell_ease
	})

	TweenMax.from($el[5], cell_time, {
		xPercent: 100,
		delay: cell_time * 3 - cell_time_shift * 2,
		ease: cell_ease
	})
	TweenMax.from($el[6], cell_time, {
		xPercent: -100,
		yPercent: -100,
		delay: cell_time * 3 - cell_time_shift * 2,
		ease: cell_ease
	})
	TweenMax.from($el[7], cell_time, {
		yPercent: 100,
		delay: cell_time * 4 - cell_time_shift * 3,
		ease: cell_ease
	})
	TweenMax.from($el[8], cell_time, {
		xPercent: -100,
		yPercent: 100,
		delay: cell_time * 4 - cell_time_shift * 3,
		ease: cell_ease,
		onComplete: function () {
			if($index) {
				landing_img_slider();
			}
		}
	})

}

function text_line_anim($line_selector, $time, $shift) {
	console.log('text_line_anim');

	var line_count = 0;
	$time = $time == undefined ? .5 : $time;
	$shift = $shift == undefined ? .25 : $shift;

	var tl = new TimelineMax();
	tl
			.addLabel('start');

	$line_selector.each(function () {
		var $sub_this = $(this);
		var counter = {var: 0};

		tl
				.to(counter, $time, {
					var: 100,
					onUpdate: function () {
						TweenMax.set($sub_this, {backgroundSize: Math.ceil(counter.var) + '% 98%'});
					},
					onComplete: function () {
						TweenMax.set($sub_this, {className: '+=step_two'});
						TweenMax.to(counter, $time, {
							var: 0,
							onUpdate: function () {
								TweenMax.set($sub_this, {backgroundSize: Math.ceil(counter.var) + '% 98%'});
							},
							ease: $linear
						})
					},
					ease: $linear
				}, 'start+=' + $shift * line_count);

		line_count++;
	});

	return tl;
}

function text_line_anim_new($line, $sub_line, $time, $shift) {
	// console.log('text_line_anim');

	var line_count = 0;
	$time = $time == undefined ? .5 : $time;
	$shift = $shift == undefined ? .25 : $shift;

	var tl = new TimelineMax();
	tl
			.addLabel('start');

	$.each( $line, function( key, value ) {
		var $this = value;
		var $sub_this = $sub_line[key];

		// console.log($this, $sub_this);

		tl
				.to($sub_this, $time, {
					xPercent: 101,
					onComplete: function () {
						TweenMax.set($this, {className: '+=step_two'});
						TweenMax.to($sub_this, $time, {
							xPercent: 205,
							ease: $linear
						})
					},
					ease: $linear
				}, 'start+=' + $shift * line_count);

		line_count++;
	});

	return tl;
}


function bg_anim($line_selector, $time) {
	console.log('bg_anim');

	var counter = {var: 0};
	$time = $time == undefined ? .5 : $time;

	var tl = new TimelineMax();
	tl
			.to(counter, $time, {
				var: 100,
				onUpdate: function () {
					TweenMax.set($line_selector, {backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.25) 0%,rgba(0,0,0,.25)' + Math.ceil(counter.var) + '%,rgba(0,0,0,0) ' + Math.ceil(counter.var) + '%,rgba(0,0,0,0) 100%)'});
				},
				ease: $linear
			});

	return tl;
}

function global_anim() {
	$('.section_b').each(function () {
		var $this = $(this);

		a_array.global_el.section_b.push($this);
		a_array.global_el.scene_section_b.push( $('.scene_section_b', $this));
	});

	a_array.global_el.main_menu_link_full.each(function () {
		var $this = $(this);

		a_array.global_el.main_menu_link.push($this);
	});



	$('.main_m_contact_address_sub').each(function () {
		var $this = $(this);

		a_array.global_el.main_m_contact_address_sub.push($this);
	});
	$('.page_info_text_sub_l').each(function () {
		var $this = $(this);

		a_array.global_el.page_info_text_sub_l.push($this);
		a_array.global_el.page_info_text_sub_line.push($('.line_sub' ,$this));
	});

	a_array.global_el.main_m_contact_address_sub.reverse();

	var $time = .33;
	var $side_contact_btn = $(".side_contact_btn");
	var $el_one = $('.side_contact_btn_one');
	var $el_one_sub = $('.side_contact_btn_one_sub');
	var $el_two = $('.side_contact_btn_two');
	var $el_two_sub = $('.side_contact_btn_two_sub');

	a_array.side_contact_hover = new TimelineMax({
		paused: true,
		onComplete: function () {
		}
	});

	a_array.side_contact_hover

			.set($el_one_sub, {opacity: 1})
			.from($el_one_sub, $time, {
				xPercent: 100,
				ease: Power2.easeInOut
			}, 0)
			.from($el_one, $time, {
				xPercent: -100,
				ease: Power2.easeInOut
			}, 0)

			.to($el_two_sub, $time, {
				xPercent: -100,
				ease: Power2.easeInOut
			}, 0)
			.to($el_two, $time, {
				xPercent: 100,
				ease: Power2.easeInOut
			}, 0);

	$side_contact_btn.hover(
			function () {
				console.log('hover');
				a_array.side_contact_hover.play();
			},
			function () {
				if (a_array.side_contact_hover.progress() != 0 && !side_b_open) {
					console.log('hover out', a_array.side_contact_hover.progress());
					a_array.side_contact_hover.reverse();
				}
			}
	);

	$side_contact_btn.on('click', function () {
		console.log('$side_contact_btn click');

		if (!side_b_open) {
			a_array.side_contact_open.play();
			a_array.side_contact_open_sub.play();
			side_b_open = true;
			page_animation_manage('stop');

		} else if (a_array.side_contact_open.progress() == 1) {
			side_contact_close();
		}
		return false;
	});

	function side_contact_close() {
		a_array.side_contact_open.reverse();
		side_b_open = false;
	}


	a_array.side_contact_open = new TimelineMax({
		paused: true,
		onReverseComplete: function () {
			console.log('side_contact_open');

			a_array.side_contact_open_sub.seek(0).pause();
			if(!menu_open) {
				page_animation_manage('play');
				// TweenMax.set(a_array.global_el.address_side_b, {display: 'none'});
			}
		},
		onComplete: function () {
			console.log('side_contact_open')
		}
	});
	a_array.side_contact_open
			.set(a_array.global_el.address_side_b, {display: 'block'})
			.set(a_array.global_el.base_var, {className: '+=will_change'})
			.addLabel('start', '+=.1')
			.to(a_array.global_el.address_side_b, .8, {
				xPercent: (153 / 790) * 100,
				ease: a_array.custom_ease[1]
			}, 'start')
			.to(a_array.global_el.base_var, .8, {
				xPercent: (790 / hor_constant) * 100 - (153 / hor_constant) * 100,
				ease: a_array.custom_ease[1]
			}, 'start')
			.to($('.address_side_open_cover'), .8, {
				opacity: .35,
				ease: a_array.custom_ease[1]
			}, 'start')
			.to($el_one_sub, .8, {
				className: '+=side_open',
				ease: a_array.custom_ease[1]
			}, 'start')

	;

	a_array.side_contact_open_sub = new TimelineMax({
		paused: true,
		onComplete: function () {

		}
	});


	var line_count = 0;
	var $time = .5;
	var $shift = .25;

	a_array.side_contact_open_sub
			.addLabel('start', '+=.4');

	$('.address_side_hline_sub_w').each(function () {
		var $sub_this = $(this);

		a_array.side_contact_open_sub
				.from($('.address_side_hline_sub_ww', $sub_this), $time * 2, {
					xPercent: -101,
					ease: a_array.custom_ease[2]
				}, 'start+=' + $shift * line_count)
				.from($('.address_side_hline_sub', $sub_this), $time * 2, {
					xPercent: 101,
					ease: a_array.custom_ease[2]
				}, 'start+=' + $shift * line_count);

		line_count++;
	});

	a_array.side_contact_open_sub
			.staggerFrom($('.stagger_el', a_array.global_el.address_side_b), $time * 1.4, {
				xPercent: 101,
				ease: a_array.custom_ease[2]
			}, .1, 'start')
			.staggerFrom([$('.address_side_map_link_text_sub', a_array.global_el.address_side_b), $('.address_side_map_link_ar', a_array.global_el.address_side_b)], .33, {
				opacity: 0,
				ease: a_array.custom_ease[2]
			}, .1, 'start+=.9')


	$body_var.on('click', function (e) {
		if (side_b_open) {
			var $this = $(e.target);
			var $parent = $(e.target).closest('.address_side_b');
			// console.log($parent.length);
			if (a_array.side_contact_open_sub.progress() == 1
					&& !$this.hasClass('address_side_b')
					&& !$parent.length) {
				console.log('$body_var click');

				side_contact_close();
				if (!$this.hasClass('side_contact_btn')) {
					a_array.side_contact_hover.reverse();
				}
				return false;
			}
		}
	});

	a_array.global_el.menu_btn.on('click', function (event) {
		if (menu_open) {
			menu_open = false;
			main_menu('close');
			// a_array.menu_open.reverse();
			// $body_var.removeClass('menu_open_mod');
		}
		else {
			menu_open = true;
			main_menu('open');

			if (a_array.side_contact_open_sub.progress() == 1) {
				side_contact_close();
			}
			// a_array.menu_open.play();
			// a_array.menu_open_sub.play();
			// $body_var.addClass('menu_open_mod');
		}
		console.log('menu_btn click');
		return false;
	});

	a_array.global_el.main_menu_link_full.on('click', function (event) {
		var $this = $(this);
		var link_index = parseInt($this.data('link'));
		TweenMax.to(this, .15, {
			scale:.9,
			ease:$easeIn_1,
			onComplete:function () {
				if (menu_open && link_index != active_page) {
					menu_open = false;
					new_active_page = link_index;
					main_menu('close', $this);
					console.log('menu 1');
				} else if (menu_open && link_index == active_page) {
					menu_open = false;
					main_menu('close');
					console.log('menu 2');
				}
		}});

		// console.log('main_menu_link click');
		return false;
	});

	a_array.global_el.main_menu_link_full.hover(over, out);

	function over(){
		var $this = $(this);
		var link_index = parseInt($this.data('link'));
		if (menu_open && link_index != active_page) {
			TweenMax.to(this, .3, {xPercent:5})
		}
	}

	function out(){
		var $this = $(this);
		var link_index = parseInt($this.data('link'));
		if (menu_open && link_index != active_page) {
			TweenMax.to(this, .3, {xPercent: 0})
		}
	}



	$('.portfolio_link_btn').on('click', function (event) {
		new_active_page = 4;
		if(active_page < 6) {
			TweenMax.set(a_array.global_el.main_menu_link[active_page - 1], {className: '-=active_mod'});
		}
		TweenMax.set(a_array.global_el.main_menu_link[new_active_page - 1], {className:'+=active_mod'});

		page_nav('portfolio_link_btn');
		console.log('portfolio_link_btn click');
		return false;
	});

	$('.clients_link').on('click', function () {
		console.log('clients_link click', active_page);
		if(active_page != 6) {
			new_active_page = 6;
			if (active_page < 6) {
				TweenMax.set(a_array.global_el.main_menu_link[active_page - 1], {className: '-=active_mod'});
			}
			clients_go();
		}
		return false;
	});

	a_array.global_el.logo.on('click', function () {
		if(active_page != 1) {
			new_active_page = 1;
			if(active_page != 6){
				TweenMax.set(a_array.global_el.main_menu_link[active_page - 1], {className: '-=active_mod'});
			}
			TweenMax.set(a_array.global_el.main_menu_link[new_active_page - 1], {className: '+=active_mod'});
			page_nav('logo');
			console.log('logo click');
		}
		return false;
	});
}

function main_menu($direction, $link) {
	console.log('main_menu fire');
	if($direction == 'open'){
		page_animation_manage('stop');

		TweenMax.set(a_array.global_el.main_menu_link_full, {clearProps:'all'});

		TweenMax.set(a_array.global_el.main_menu_b_w, {
			display:"block",
			skewX: "10deg",
			skewType: "simple",
			transformOrigin: '0 0'
		});
		TweenMax.set(a_array.global_el.main_menu_b, {
			skewX: "-10deg",
			skewType: "simple",
			transformOrigin: '0 0'
		});
		TweenMax.staggerTo([a_array.global_el.main_menu_b_w, a_array.global_el.main_menu_b], .8, {
			cycle: {
				xPercent: [-50, 100]
			},
			skewX: "0deg",
			skewType: "simple",
			ease: $easeOut_1
		})
		TweenMax.staggerTo([a_array.global_el.menu_btn_white, a_array.global_el.menu_btn_red], .3, {
			cycle: {
				opacity: [1, 0]
			},
			ease: $linear
		}, 0)

		TweenMax.to([a_array.global_el.menu_btn_line_sub, a_array.global_el.menu_btn_text_sub], .3, {
			xPercent: 100,
			ease: $linear
		})
		TweenMax.set(a_array.global_el.menu_btn_line, {xPercent: 104, delay: .3})
		TweenMax.set(a_array.global_el.menu_btn_text, {xPercent: -253, delay: .3})
		TweenMax.staggerFromTo([a_array.global_el.menu_btn_line_sub, a_array.global_el.menu_btn_text_sub], .3, {
			cycle: {
				xPercent: [-100, 100]
			},
			ease: $linear
		}, {
			xPercent: 0,
			delay: .3,
			ease: $linear
		})
		TweenMax.to(a_array.global_el.menu_btn_text, .3, {
			xPercent: -145,
			delay: .3,
			ease: $linear
		})


		TweenMax.staggerFrom([a_array.global_el.main_m_social_b, a_array.global_el.main_m_contact_address_sub[0], a_array.global_el.main_m_contact_address_sub[1],a_array.global_el.main_m_contact_address_sub[2]], .7, {
			yPercent: 101,
			ease: a_array.custom_ease[1]
		}, .15)
		TweenMax.from(a_array.global_el.main_menu_gf_el_menu, .7, {
			opacity: 0,
			delay: .2,
			ease: a_array.custom_ease[1]
		})

		TweenMax.staggerFrom(a_array.global_el.main_menu_link_text_w, .7, {
			xPercent: -101,
			delay: .4,
			ease: a_array.custom_ease[1]
		}, .15)
		TweenMax.staggerFrom(a_array.global_el.main_menu_link_text, .7, {
			xPercent: 101,
			delay: .405,
			ease: a_array.custom_ease[1]
		}, .15)
		TweenMax.staggerFrom(a_array.global_el.main_menu_link_line, .7, {
			xPercent: 101,
			delay: .6,
			ease: a_array.custom_ease[1]
		}, .15)

	}
	else if($direction == 'close'){
		TweenMax.staggerTo([a_array.global_el.main_menu_b_w, a_array.global_el.main_menu_b], .8, {
			xPercent: 0,
			cycle: {
				skewX: ["10deg", "-10deg"]
			},
			skewType: "simple",
			ease: $easeOut_1,
			onComplete:function () {
				TweenMax.set(a_array.global_el.main_menu_b_w, {
					display:"none"
				});
				if($link){
					a_array.global_el.main_menu_link_full.removeClass('active_mod');
					$link.addClass('active_mod');
					page_nav('menu');
				}else {
					page_animation_manage('play');
				}
			}

		})
		TweenMax.staggerTo([a_array.global_el.menu_btn_white, a_array.global_el.menu_btn_red], .3, {
			cycle: {
				opacity: [0, 1]
			},
			ease: $linear
		})

		TweenMax.to([a_array.global_el.menu_btn_line_sub, a_array.global_el.menu_btn_text_sub], .3, {
			xPercent: 0,
			ease: $linear
		})
		TweenMax.set(a_array.global_el.menu_btn_line, {xPercent: 0, delay: .3})
		TweenMax.set(a_array.global_el.menu_btn_text, {xPercent: 0, delay: .3})
		TweenMax.staggerFromTo([a_array.global_el.menu_btn_line_sub, a_array.global_el.menu_btn_text_sub], .3, {
			cycle: {
				xPercent: [100, -100]
			},
			ease: $linear
		}, {
			xPercent: 0,
			delay: .3,
			ease: $linear
		})
		TweenMax.to(a_array.global_el.menu_btn_text, .3, {
			xPercent: 0,
			delay: .3,
			ease: $linear
		})
	}
}

function page_nav($text) {
	console.log(new_active_page, $text);
	TweenMax.set(a_array.global_el.cover_bg_w, {display:'block'});
	TweenMax.set(a_array.global_el.section_b[new_active_page], {
		zIndex:10,
		display:'block',
		opacity:0,
		onComplete:function () {
			next_page_init();
			// page_animation_manage('stop');

			TweenMax.to(a_array.global_el.cover_bg, .5, {
				xPercent: 110,
				onComplete: function () {
					if (new_active_page == 4 || new_active_page == 7) {
						TweenMax.set($body_var, {className: '+=portfolio_pages_mod'});
					}else {
						TweenMax.set($body_var, {className: '-=portfolio_pages_mod'});
						portfolio_s_close();
					}

					var page_info_class = false;

					if (new_active_page == 1) {
						page_info_class = 'page_info landing_mod';
					}
					else if (new_active_page == 2) {
						page_info_class = 'page_info about_us_mod';
					}
					else if (new_active_page == 3) {
						page_info_class = 'page_info services_mod';
					}
					else if (new_active_page == 4) {
						page_info_class = 'page_info portfolio_mod';
					}
					else if (new_active_page == 5) {
						page_info_class = 'page_info contact_mod';
					}

					TweenMax.set(a_array.global_el.page_info,{className:page_info_class});
					TweenMax.set(a_array.global_el.page_info_text_sub_l,{clearProps:'all', className:'-=step_two'});
					TweenMax.set(a_array.global_el.page_info_text_sub_line,{clearProps:'all'});

					TweenMax.set(a_array.global_el.section_b[active_page], {clearProps: 'all'});
					TweenMax.set(a_array.global_el.section_b[new_active_page], {opacity:1})
					TweenMax.to(a_array.global_el.cover_bg, .5, {
						xPercent: 230,
						onComplete:function () {
							TweenMax.set(a_array.global_el.cover_bg_w, {display:'none'});
							TweenMax.set(a_array.global_el.cover_bg, {xPercent: 0});
							next_page_start();
							TweenMax.delayedCall(1, page_animation_manage, ['play']);
						}
					})
				}
			});
		}
	});


	function next_page_init() {
		if (new_active_page == 1) {
			TweenMax.set(a_array.scene_bg_el_array[0], {
				clearProps: "all"
			});
			TweenMax.set(a_array.scene_bg_el_array[1], {
				clearProps: "all"
			});
			TweenMax.set(a_array.scene_bg_b_array[0], {
				className:'scene_bg_b first_mod landing_mod init_mod img_1'
			});

			TweenMax.set(a_array.scene_bg_b_array[1], {
				className:'scene_bg_b second_mod landing_mod loaded_mod before_mod'
			});
			cell_b_active = 1;

			a_array.landing_img_slider.seek(0).pause();
			a_array.landing_tl.seek(0).pause();
		}
		else if (new_active_page == 2) {
			if (a_array.about_tl === undefined) {
				about();
			} else {
				a_array.about_tl.seek(0).pause();
			}

		} else if (new_active_page == 3 ) {
			if (a_array.services_tl === undefined) {
				services();
			} else {
				a_array.services_tl.seek(0).pause();
			}
		} else if (new_active_page == 4 ) {
			if (a_array.portfolio_tl === undefined) {
				portfolio();
			} else {
				portfolio_a_fill_clear();
				a_array.portfolio_tl.seek(0).pause();
			}
		} else if (new_active_page == 5 ) {
			if (a_array.contacts_tl === undefined) {
				contacts();
			} else {
				a_array.contacts_tl.seek(0).pause();
			}
		} else if (new_active_page == 6 ) {
			if (a_array.clients_tl === undefined) {
				clients();
			} else {
				a_array.clients_tl.seek(0).pause();
			}
		} else if (new_active_page == 7 ) {
			if (a_array.portfolio_single_tl === undefined) {
				portfolio_single();
			} else {
				a_array.portfolio_single_tl.seek(0).pause();
			}
		}

		if (new_active_page == 5) {
			TweenMax.set(a_array.global_el.portfolio_link_btn, {yPercent: 300});
		} else {
			TweenMax.set(a_array.global_el.portfolio_link_btn, {yPercent: 0});
		}
	}

	function next_page_start() {
		var $time = 0;

		if (new_active_page == 1) {
			a_array.landing_tl.play();
		} else if (new_active_page == 2) {
			a_array.about_tl.play();
		} else if (new_active_page == 3) {
			a_array.services_tl.play();
		} else if (new_active_page == 4) {
			a_array.portfolio_tl.play();
		} else if (new_active_page == 5) {
			a_array.contacts_tl.play();
		} else if (new_active_page == 6) {
			a_array.clients_tl.play();
		} else if (new_active_page == 7) {
			a_array.portfolio_single_tl.play();
		}


		active_page = new_active_page;
	}


		// 	a_array.about_tl.play();
		// 	a_array.services_tl.play();
		// 	a_array.clients_tl.play();
		// 	a_array.contacts_tl.play();
		// 	a_array.portfolio_tl.play();
		// 	a_array.portfolio_single_tl.play();


}

function portfolio_single() {

	a_array.ptf_s_el_arr = {
		anim_end: false,
		container: $(".section_b.portfolio_single_mod"),
		portfolio_s_main_bg: $('.portfolio_s_main_bg'),
		portfolio_s_main_bg_img_w: $('.portfolio_s_main_bg_img_w'),
		portfolio_s_main_bg_img: $('.portfolio_s_main_bg_img'),
		portfolio_s_hline_sub_w: $('.portfolio_s_hline_sub_w'),
		portfolio_s_hline_sub_ww: $('.portfolio_s_hline_sub_ww'),

		portfolio_s_technology: $('.portfolio_s_technology'),

		portfolio_s_back_btn_text_w: $('.portfolio_s_back_btn_text_w'),
		portfolio_s_back_btn_text: $('.portfolio_s_back_btn_text'),

		portfolio_s_back_btn_arrow_w: $('.portfolio_s_back_btn_arrow_w'),
		portfolio_s_back_btn_arrow: $('.portfolio_s_back_btn_arrow'),

		portfolio_s_content_b_v2_bg: $('.portfolio_s_content_b_v2_bg'),

		portfolio_s_download_pdf_btn_sub: $('.portfolio_s_download_pdf_btn_sub'),
		portfolio_s_download_pdf_btn_sub_ww: $('.portfolio_s_download_pdf_btn_sub_ww'),

		portfolio_s_case_b_w: [],
		portfolio_s_case_b: [],

		step_two: false,
		step_three: false,
		step_four: false,
		step_five: false,
		step_six: false,
		animation: false
	};

	a_array.portfolio_s_content_array = [];
	a_array.portfolio_s_img_array = [];

	$('.portfolio_s_content_sub_w').each(function () {
		var $this = $(this);
		var sub_array = {
			container: $this,
			content_sub: [],
			content_sub_reversed: []
		};

		$('.portfolio_s_content_line', $this).each(function () {
			var $sub_this = $(this);

			sub_array.content_sub.push($sub_this);
			sub_array.content_sub_reversed.push($sub_this);
		});
		sub_array.content_sub_reversed.reverse();
		a_array.portfolio_s_content_array.push(sub_array);
	});

	$('.portfolio_s_img_wrap').each(function () {
		var $this = $(this);
		var sub_array = {
			container: $this,
			img_wrap: [],
			img: []
		};

		$('.portfolio_s_img_el_w', $this).each(function () {
			var $sub_this = $(this);

			sub_array.img_wrap.push($sub_this);
			sub_array.img.push($('.portfolio_s_img_el_img', $sub_this));
		});
		a_array.portfolio_s_img_array.push(sub_array);
	});

	$('.portfolio_s_case_b_w').each(function () {
		var $this = $(this);

		a_array.ptf_s_el_arr.portfolio_s_case_b_w.push($this);
		a_array.ptf_s_el_arr.portfolio_s_case_b.push($('.portfolio_s_case_b', $this));
	});

	$('.portfolio_s_back_btn_text_w').on('click', function (event) {
		portfolio_s_back();
		console.log('portfolio_s_back_btn_text_w click');
		return false;
	});

	$('.portfolio_s_case_b_w.prev_case').on('click', function (event) {
		portfolio_s_prev();
		console.log('prev_case click');
		return false;
	});

	$('.portfolio_s_case_b_w.next_case').on('click', function (event) {
		portfolio_s_next();
		console.log('next_case click');
		return false;
	});

	// portfolio_s_init();

	a_array.portfolio_single_tl = new TimelineMax({
		paused: true,
		onComplete:portfolio_s_go_clear
	});

	a_array.portfolio_single_tl
			// .call(portfolio_s_init)
			// .set(a_array.global_el.section_b[7],{opacity:1})
			.addLabel('start', '+=.1')
			.to(a_array.ptf_s_el_arr.portfolio_s_main_bg, .6, {
				yPercent:0,
				skewY: "0deg",
				skewType: "simple",
				ease: $easeOut_1
			}, 'start')
			.to(a_array.ptf_s_el_arr.portfolio_s_main_bg_img_w, .6, {
				yPercent:0,
				skewY: "0deg",
				skewType: "simple",
				ease: $easeOut_1
			}, 'start')

			.addLabel('second', '-=.4')
			.staggerFrom([a_array.ptf_s_el_arr.portfolio_s_back_btn_arrow_w, a_array.ptf_s_el_arr.portfolio_s_back_btn_arrow, a_array.ptf_s_el_arr.portfolio_s_back_btn_text_w, a_array.ptf_s_el_arr.portfolio_s_back_btn_text], .6, {
				cycle: {
					xPercent: [-100, 100, -100, 100]
				},
				ease: a_array.custom_ease[2]
			}, 'second')
			.from(a_array.ptf_s_el_arr.portfolio_s_hline_sub_ww, 1, {
				xPercent: -101,
				ease: a_array.custom_ease[2]
			}, 'second')
			.from($('.portfolio_s_hline_sub'), 1, {
				xPercent: 101,
				ease: a_array.custom_ease[2]
			}, 'second')
			.staggerFrom(a_array.portfolio_s_content_array[0].content_sub, .4, {
				yPercent: 500,
				opacity:0,
				ease: a_array.custom_ease[2]
			},.1, 'second+=.2')
			.staggerFrom(a_array.portfolio_s_content_array[1].content_sub, .4, {
				yPercent: 500,
				opacity:0,
				ease: a_array.custom_ease[2]
			},.1, '-=.4')
			.staggerFrom(a_array.portfolio_s_img_array[0].img_wrap, .8, {
				yPercent: 60,
				opacity:0,
				ease: a_array.custom_ease[2]
			},.1, '-=.1', portfolio_s_anim_end)
	;

	function portfolio_s_anim_end() {
		a_array.ptf_s_el_arr.anim_end = true;
		console.log('anim_end', a_array.portfolio_s_content_array[1].container);

		TweenLite.ticker.addEventListener("tick", portfolio_s_update);

		a_array.ptf_s_el_arr.animation = new TimelineMax({
				paused: true
			});

		a_array.ptf_s_el_arr.animation
				.addLabel('start')
				.to(a_array.ptf_s_el_arr.portfolio_s_hline_sub_w, .3, {
					yPercent: 300,
					ease: Linear.easeNone
				}, 'start')
				.to(a_array.ptf_s_el_arr.portfolio_s_hline_sub_w, .2, {
					yPercent: 400,
					opacity:0,
					ease: Linear.easeNone
				}, 'start+=.3')
				.to(a_array.portfolio_s_img_array[0].img_wrap[1], 1, {
					yPercent: -20,
					ease: Linear.easeNone
				},'start')
				.to(a_array.portfolio_s_content_array[1].container, 1, {
					yPercent: -100,
					ease: Linear.easeNone
				},'start')
		;
	}
}

function portfolio_click($index, $x, $y) {

	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_b, {display:'block'});

	TweenMax.set(a_array.ptf_el_arr.portfolio_cover, {yPercent:100*$index});

	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_click_dot_sub, {
		x:$x,
		y:$y,
		xPercent:-50,
		yPercent:-50,
		opacity:1
	})
	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub, {
		scale:0
	})

	TweenMax.to(a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub, .5, {
		scale: 25,
		delay: .1,
		ease: a_array.custom_ease[2]
	})

	TweenMax.staggerTo([a_array.ptf_el_arr.portfolio_cover_sub, a_array.ptf_el_arr.portfolio_cover_sub_sub, a_array.ptf_el_arr.portfolio_cover_click_dot], .8, {
		cycle: {
			yPercent: [50, -100, 400]
		},
		delay: .5,
		ease: a_array.custom_ease[2]
	}, 0);

	TweenMax.to(a_array.ptf_el_arr.portfolio_cover, 1, {

		rotation: 10,
		delay: .3,
		ease: a_array.custom_ease[2]
	})

	TweenMax.staggerTo([a_array.ptf_el_arr.portfolio_cover_w, a_array.ptf_el_arr.portfolio_cover], .7, {
		cycle: {
			xPercent: [100, -100]
		},
		delay: 1.3,
		ease: a_array.custom_ease[2],
		onComplete:clear
	})

	function clear() {
		TweenMax.set([a_array.ptf_el_arr.portfolio_cover_b, a_array.ptf_el_arr.portfolio_cover_w, a_array.ptf_el_arr.portfolio_cover, a_array.ptf_el_arr.portfolio_cover_sub, a_array.ptf_el_arr.portfolio_cover_sub_sub, a_array.ptf_el_arr.portfolio_cover_click_dot, a_array.ptf_el_arr.portfolio_cover_click_dot_sub, a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub], {clearProps: 'all', delay: .1})
	}
}


function portfolio_s_go($index, $x, $y) {

	console.log(4);
	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_b, {display: 'block'});
	TweenMax.set(a_array.ptf_el_arr.portfolio_cover, {yPercent: 100 * $index});
	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_click_dot_sub, {
		x: $x,
		y: $y,
		xPercent: -50,
		yPercent: -50,
		opacity: 1
	});
	TweenMax.set(a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub, {
		scale: 0
	});

	TweenMax.set(a_array.global_el.section_b[7], {
		zIndex: 10,
		display: 'block',
		opacity: 0,
		onComplete: function () {
			a_array.portfolio_single_tl.seek(0).pause();
			portfolio_s_init();

			TweenMax.to(a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub, .6, {
				scale: 25,
				delay: .1,
				ease: a_array.custom_ease[3]
			});


			TweenMax.to(a_array.ptf_el_arr.portfolio_cover, 1, {
				rotation: 10,
				delay: .7,
				ease: a_array.custom_ease[2]
			});

			TweenMax.staggerTo([a_array.ptf_el_arr.portfolio_cover_sub, a_array.ptf_el_arr.portfolio_cover_sub_sub, a_array.ptf_el_arr.portfolio_cover_click_dot], 1, {
				cycle: {
					yPercent: [50, -100, 400]
				},
				delay: .8,
				ease: a_array.custom_ease[2]
			}, 0, step_1);
		}
	});

	function step_1() {
		TweenMax.set(a_array.global_el.section_b[4], {clearProps: 'all'});
		TweenMax.set(a_array.global_el.section_b[7], {opacity: 1});
		TweenMax.set(a_array.global_el.logo_sub, {className: '+=portfolio_single_mod'});
		TweenMax.set(a_array.global_el.page_info, {opacity:0});

		TweenMax.staggerTo([a_array.ptf_el_arr.portfolio_cover_w, a_array.ptf_el_arr.portfolio_cover], .7, {
			cycle: {
				xPercent: [100, -100]
			},
			// delay: 1.3,
			ease: a_array.custom_ease[2]
		}, 0, step_2)
	}

	function step_2() {
		TweenMax.set(a_array.global_el.section_b[7],{opacity:1});
		a_array.portfolio_single_tl.play();
		active_page = 7;
		portfolio_case_click = false;
	}

}

function portfolio_s_go_clear() {
	TweenMax.set([a_array.ptf_el_arr.portfolio_cover_b, a_array.ptf_el_arr.portfolio_cover_w, a_array.ptf_el_arr.portfolio_cover, a_array.ptf_el_arr.portfolio_cover_sub, a_array.ptf_el_arr.portfolio_cover_sub_sub, a_array.ptf_el_arr.portfolio_cover_click_dot, a_array.ptf_el_arr.portfolio_cover_click_dot_sub, a_array.ptf_el_arr.portfolio_cover_click_dot_sub_sub], {
		clearProps: 'all',
		delay: .1
	})
}

function portfolio_s_back() {
		console.log(4);
		TweenMax.set(a_array.global_el.cover_bg_w, {display:'block'});
		TweenMax.set(a_array.global_el.section_b[4], {
			zIndex:10,
			display:'block',
			opacity:0,
			onComplete:function () {
				portfolio_a_fill_clear();
				a_array.portfolio_tl.seek(0).pause();

				TweenMax.to(a_array.global_el.cover_bg, .5, {
					xPercent: 110,
					onComplete: function () {
						portfolio_s_close();

						TweenMax.set(a_array.global_el.section_b[7], {clearProps: 'all'});
						TweenMax.set(a_array.global_el.section_b[4], {opacity:1});

						TweenMax.to(a_array.global_el.cover_bg, .5, {
							xPercent: 230,
							onComplete:function () {
								TweenMax.set(a_array.global_el.cover_bg_w, {display:'none'});
								TweenMax.set(a_array.global_el.cover_bg, {xPercent: 0});
								a_array.portfolio_tl.play();
								active_page = 4;
							}
						})
					}
				});
			}
		});
}

function portfolio_s_prev() {
	TweenMax.set(a_array.global_el.cover_bg_w, {
		display: 'block',
		onComplete: function () {
			TweenLite.ticker.removeEventListener("tick", portfolio_s_update);

			TweenMax.to(a_array.global_el.cover_bg, .5, {
				xPercent: 110,
				onComplete: function () {
					a_array.portfolio_single_tl.seek(0).pause();
					portfolio_s_init();

					TweenMax.to(a_array.global_el.cover_bg, .5, {
						xPercent: 230,
						onComplete: function () {
							TweenMax.set(a_array.global_el.cover_bg_w, {display:'none'});
							TweenMax.set(a_array.global_el.cover_bg, {xPercent: 0});
							a_array.portfolio_single_tl.play();
						}
					})
				}
			});
		}
	});
}

function portfolio_s_next() {
	TweenMax.set(a_array.global_el.cover_bg_w, {
		display: 'block',
		xPercent: 0,
		onComplete: function () {
			TweenLite.ticker.removeEventListener("tick", portfolio_s_update);

			TweenMax.to(a_array.global_el.cover_bg, .5, {
				xPercent: 110,
				onComplete: function () {
					a_array.portfolio_single_tl.seek(0).pause();
					portfolio_s_init();

					TweenMax.to(a_array.global_el.cover_bg, .5, {
						xPercent: 230,
						onComplete: function () {
							TweenMax.set(a_array.global_el.cover_bg_w, {display:'none'});
							TweenMax.set(a_array.global_el.cover_bg, {xPercent: 0});
							a_array.portfolio_single_tl.play();
						}
					})
				}
			});
		}
	});
}

function portfolio_s_init() {
	if(a_array.ptf_s_el_arr.anim_end){
		a_array.ptf_s_el_arr.container.scrollTop(0);

		a_array.ptf_s_el_arr.anim_end = false;
		a_array.ptf_s_el_arr.step_two = false;
		a_array.ptf_s_el_arr.step_three = false;
		a_array.ptf_s_el_arr.step_four = false;
		a_array.ptf_s_el_arr.step_five = false;
		a_array.ptf_s_el_arr.step_six = false;

		a_array.ptf_s_el_arr.animation.seek(0).paused();
	}

	// a_array.ptf_s_el_arr.animation = false;
	// a_array.ptf_s_el_arr = {
	// 		anim_end: false,
	// 		step_two: false,
	// 		step_three: false,
	// 		step_four: false,
	// 		step_five: false,
	// 		step_six: false,
	// 		animation: false
	// 	}

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_main_bg, {
		yPercent: -100,
		skewY: "-20deg",
		skewType: "simple",
		opacity: 1,
		transformOrigin: '0 100%'
	});
	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_main_bg_img_w, {
		yPercent: 100,
		skewY: "20deg",
		skewType: "simple",
		transformOrigin: '0 100%'
	});

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_case_b_w[0], {
		xPercent: -100,
		skewX: "-45deg",
		skewType: "simple",
		transformOrigin: '100% 0'
	});
	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_case_b[0], {
		xPercent: 100,
		skewX: "45deg",
		scale:1.1,
		skewType: "simple",
		transformOrigin: '100% 0'
	});

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_case_b_w[1], {
		xPercent: 100,
		skewX: "-30deg",
		skewType: "simple",
		transformOrigin: '0 100%'
	});
	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_case_b[1], {
		xPercent: -100,
		skewX: "30deg",
		scale:1.1,
		skewType: "simple",
		transformOrigin: '0 100%'
	});

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_content_b_v2_bg, {
		xPercent: -100,
		skewX: "-30deg",
		skewType: "simple",
		transformOrigin: '100% 0'
	});

	TweenMax.set(a_array.portfolio_s_content_array[2].content_sub, {
		yPercent: 500,
		opacity: 0
	})
	TweenMax.set(a_array.portfolio_s_img_array[1].img_wrap[0], {
		scale: 0
	});

	TweenMax.set(a_array.portfolio_s_img_array[2].img_wrap[0], {
		rotationY: -35,
		xPercent: -30,
		opacity: 0
	});

	TweenMax.set(a_array.portfolio_s_img_array[2].img_wrap[1], {
		opacity: 0,
		yPercent: 10,
		scale: .8
	});

	TweenMax.set(a_array.portfolio_s_img_array[2].img_wrap[2], {
		rotationY: 35,
		xPercent: 30,
		opacity: 0
	});

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_download_pdf_btn_sub_ww, {
			xPercent: -101
	});

	TweenMax.set(a_array.ptf_s_el_arr.portfolio_s_download_pdf_btn_sub, {
		xPercent: 101
	});
}

function portfolio_s_close() {
	TweenLite.ticker.removeEventListener("tick", portfolio_s_update);
	TweenMax.set(a_array.global_el.logo_sub, {className: '-=portfolio_single_mod'});
	TweenMax.set(a_array.global_el.page_info, {opacity:1});
}

function portfolio_s_update() {
	if (a_array.ptf_s_el_arr.anim_end) {
		var max = 130 * rem;
		var cur = a_array.ptf_s_el_arr.container.scrollTop();
		var first_step = cur / max;
		var step_h = cur + window_height;

		if (first_step > 1) {
			first_step = 1;
		}
		a_array.ptf_s_el_arr.animation.progress(first_step);

		if (!a_array.ptf_s_el_arr.step_two && step_h > 200*rem) {

			a_array.ptf_s_el_arr.step_two = true;
			TweenMax.to(a_array.portfolio_s_img_array[1].img_wrap[0], .6, {
				scale: 1,
				ease: a_array.custom_ease[0]
			});
		}

		if (!a_array.ptf_s_el_arr.step_three && step_h > 300 * rem) {

			a_array.ptf_s_el_arr.step_three = true;
			TweenMax.to(a_array.ptf_s_el_arr.portfolio_s_content_b_v2_bg, .8, {
				xPercent: 0,
				skewX: "0deg",
				skewType: "simple",
				ease: a_array.custom_ease[0]
			});
			TweenMax.staggerTo(a_array.portfolio_s_content_array[2].content_sub, .4, {
				yPercent: 0,
				opacity: 1,
				delay:.4,
				ease: a_array.custom_ease[2]
			}, .1)
		}

		if (!a_array.ptf_s_el_arr.step_four && step_h > 330 * rem) {

			a_array.ptf_s_el_arr.step_four = true;
			TweenMax.to(a_array.ptf_s_el_arr.portfolio_s_content_b_v2_bg, .8, {
				xPercent: 0,
				skewX: "0deg",
				skewType: "simple",
				ease: a_array.custom_ease[0]
			});
			TweenMax.staggerTo(a_array.portfolio_s_content_array[2].content_sub, .4, {
				yPercent: 0,
				opacity: 1,
				delay: .4,
				ease: a_array.custom_ease[2]
			}, .1)
		}

		if (!a_array.ptf_s_el_arr.step_five && step_h > 370 * rem) {

			a_array.ptf_s_el_arr.step_five = true;
			TweenMax.to(a_array.portfolio_s_img_array[2].img_wrap[0], .8, {
				rotationY: 0,
				xPercent:0,
				opacity: 1,
				// repeat:-1,
				ease: a_array.custom_ease[0]
			});

			TweenMax.to(a_array.portfolio_s_img_array[2].img_wrap[1], .8, {
				opacity: 1,
				yPercent:0,
				scale: 1,
				delay:.1,
				// repeat:-1,
				ease: a_array.custom_ease[0]
			});

			TweenMax.to(a_array.portfolio_s_img_array[2].img_wrap[2], .8, {
				rotationY: 0,
				xPercent:0,
				opacity: 1,
				delay:.1,
				// repeat:-1,
				ease: a_array.custom_ease[0]
			});

			TweenMax.staggerFrom(a_array.portfolio_s_img_array[2].img, .8, {
				scale:1.1,
				// repeat: -1,
				ease: a_array.custom_ease[0]
			},.1);
		}

		if (!a_array.ptf_s_el_arr.step_six && step_h > 450 * rem) {
			a_array.ptf_s_el_arr.step_six = true;

			TweenMax.to(a_array.ptf_s_el_arr.portfolio_s_download_pdf_btn_sub_ww, .6, {
				xPercent: 0,
				ease: a_array.custom_ease[2]
			});
			TweenMax.to(a_array.ptf_s_el_arr.portfolio_s_download_pdf_btn_sub, .6, {
				xPercent: 0,
				ease: a_array.custom_ease[2]
			});

			TweenMax.staggerTo([a_array.ptf_s_el_arr.portfolio_s_case_b_w[0], a_array.ptf_s_el_arr.portfolio_s_case_b_w[1], a_array.ptf_s_el_arr.portfolio_s_case_b[0], a_array.ptf_s_el_arr.portfolio_s_case_b[1]], .5, {
				xPercent: 0,
				skewX: "0",
				scale:1,
				skewType: "simple",
				// repeat: -1,
				cycle:{
					delay:[.2, 0, .2 , 0]
				}
				// transformOrigin: '100% 0'
			});
		}

	}
}


function portfolio() {

	a_array.ptf_el_arr = {
		portfolio_cases_one :$('#portfolio_cases_one'),
		portfolio_cases_two :$('#portfolio_cases_two'),
		portfolio_a_fill_container: false,
		portfolio_a_fill_case_b_w: false,
		portfolio_a_fill_case_b: false,
		portfolio_a_fill_case_bg: false,
		portfolio_a_fill_case_hline_sub: false,
		portfolio_a_fill_case_text_sub: false,
		portfolio_cover_b: $(".portfolio_cover_b"),
		portfolio_cover_w: $(".portfolio_cover_w"),
		portfolio_cover: $(".portfolio_cover"),
		portfolio_cover_sub: $('.portfolio_cover_sub'),
		portfolio_cover_sub_sub: $('.portfolio_cover_sub_sub'),
		portfolio_cover_click_dot: $('.portfolio_cover_click_dot'),
		portfolio_cover_click_dot_sub: $('.portfolio_cover_click_dot_sub'),
		portfolio_cover_click_dot_sub_sub: $('.portfolio_cover_click_dot_sub_sub'),
		portfolio_see_more: $('.portfolio_see_more'),
		portfolio_dot_w: false
	};

	var htmlStr = '';

	portfolio_array.forEach(function (item, i) {
		htmlStr += '<li class="portfolio_cases_item">';
		htmlStr += '<div data-index="' + i + '" class="portfolio_case_b_w">';
		htmlStr += '<figure class="portfolio_case_b" >';
		htmlStr += '<div class="portfolio_case_bg" >';
		htmlStr += '<img src="i/portfolio/' + item.image + '" alt="' + item.hline + '" class="portfolio_case_bg_img">';
		htmlStr += '</div>';
		htmlStr += '<span class="portfolio_case_arrow"></span>';
		htmlStr += '<figcaption class="portfolio_case_content">';
		htmlStr += '<h2 data-text="' + item.hline + '" class="portfolio_case_hline">';
		htmlStr += '<span class="portfolio_case_hline_sub">' + item.hline + '</span>';
		htmlStr += '</h2>';
		htmlStr += '<div data-text="' + item.text + '" class="portfolio_case_text">';
		htmlStr += '<span class="portfolio_case_text_sub">' + item.text + '</span>';
		htmlStr += '</div>';
		htmlStr += '</figcaption>';
		htmlStr += '</figure>';
		htmlStr += '</div>';
		htmlStr += '</li>';

		if (portfolio_array < 4 && portfolio_array == i + 1) {
			a_array.ptf_el_arr.portfolio_cases_one.html(htmlStr);
			htmlStr = '';
		}
		else if ((i + 1) == 4) {
			a_array.ptf_el_arr.portfolio_cases_one.html(htmlStr);
			htmlStr = '';
		} else if (portfolio_array < 8 && portfolio_array == i + 1) {
			a_array.ptf_el_arr.portfolio_cases_two.html(htmlStr);
			htmlStr = '';
		} else if ((i + 1) == 8) {
			a_array.ptf_el_arr.portfolio_cases_two.html(htmlStr);
			htmlStr = '';
		}
	});

	portfolio_fill();

	var $time = .9;

	a_array.portfolio_tl = new TimelineMax({
		// delay: 1,
		paused: true,
		onComplete:function () {
			TweenMax.delayedCall(1, portfolio_tl_done, []);
		}
	});
	a_array.portfolio_tl
			.set(a_array.global_el.section_b[4],{opacity:1})

			.addLabel('start', '+=.1')
			.call(portfolio_sub_tl, null, null, 'start')
			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start+.5')
			.from($('.download_pdf_btn'), $time, {yPercent: 101, ease: $linear}, 'start+=.6')
			.from(a_array.ptf_el_arr.portfolio_see_more, $time, {opacity: 0, ease: $linear}, 'start+=.6')
	;



	function portfolio_tl_done() {
		$scroll_fired = false;
	}

	function portfolio_sub_tl() {
		var $time = .9;

		TweenMax.staggerTo(a_array.ptf_el_arr.portfolio_a_fill_case_b_w, $time, {
			xPercent: 0,
			ease: a_array.custom_ease[0]
		}, $time * .266)
		TweenMax.staggerTo(a_array.ptf_el_arr.portfolio_a_fill_case_b, $time, {
			xPercent: 0,
			ease: a_array.custom_ease[0]
		}, $time * .266)
		TweenMax.staggerTo(a_array.ptf_el_arr.portfolio_a_fill_case_bg, $time * 1.1, {
			scale: 1,
			ease: a_array.custom_ease[0]
		}, $time * .266)
		TweenMax.staggerTo(a_array.ptf_el_arr.portfolio_a_fill_case_hline_sub, $time, {
			opacity: 1,
			xPercent: 0,
			ease: a_array.custom_ease[0],
			delay:.2
		}, $time * .266)
		TweenMax.staggerTo(a_array.ptf_el_arr.portfolio_a_fill_case_text_sub, $time, {
			opacity: 1,
			xPercent: 0,
			delay:.3,
			ease: a_array.custom_ease[0]
		}, $time * .266)
	}

	a_array.global_el.body_var.on('click', '.portfolio_case_b_w', function (e) {
		if(!portfolio_case_click) {
			portfolio_case_click = true;
			var $this = $(this);
			var $index = parseInt($this.data('index'));
			
			if($index + 1 > 4){
				$index = $index - 4;
			}

			var xPosition = e.offsetX;
			var yPosition = e.offsetY;


			portfolio_s_go($index, xPosition, yPosition);
			console.log('portfolio_case_b_w click', xPosition, yPosition, e);
		}
		return false;
	});

	a_array.ptf_el_arr.portfolio_see_more.on('click', function (e) {
		portfolio_see_more_click_f();

		return false;
	});
}

function portfolio_see_more_click_f(){
	if (!portfolio_see_more_click) {
		portfolio_see_more_click = true;
		TweenMax.set(a_array.global_el.cover_bg_w, {
			display: 'block',
			onComplete: function () {

				TweenMax.to(a_array.global_el.cover_bg, .5, {
					xPercent: 110,
					onComplete: function () {
						portfolio_fill();
						portfolio_a_fill_clear();
						a_array.portfolio_tl.seek(0).pause();

						TweenMax.to(a_array.global_el.cover_bg, .5, {
							xPercent: 230,
							onComplete: function () {
								TweenMax.set(a_array.global_el.cover_bg_w, {display:'none'});
								TweenMax.set(a_array.global_el.cover_bg, {xPercent: 0});
								portfolio_see_more_click = false;
								a_array.portfolio_tl.play();
							}
						})
					}
				});
			}
		});
	}
}

var portfolio_active_page = false;

function portfolio_fill() {

	if (!portfolio_active_page) {
		portfolio_active_page = true;
		a_array.ptf_el_arr.portfolio_a_fill_container = a_array.ptf_el_arr.portfolio_cases_one;

		TweenMax.set(a_array.ptf_el_arr.portfolio_cases_two,{className:'+=hide'});
		TweenMax.set(a_array.ptf_el_arr.portfolio_cases_one,{className:'-=hide'});

	} else {
		portfolio_active_page = false;
		a_array.ptf_el_arr.portfolio_a_fill_container = a_array.ptf_el_arr.portfolio_cases_two;

		TweenMax.set(a_array.ptf_el_arr.portfolio_cases_one, {className: '+=hide'});
		TweenMax.set(a_array.ptf_el_arr.portfolio_cases_two, {className: '-=hide'});
	}

	a_array.ptf_el_arr.portfolio_a_fill_case_b_w = $('.portfolio_case_b_w', a_array.ptf_el_arr.portfolio_a_fill_container)
	a_array.ptf_el_arr.portfolio_a_fill_case_b = $('.portfolio_case_b', a_array.ptf_el_arr.portfolio_a_fill_container)
	a_array.ptf_el_arr.portfolio_a_fill_case_bg = $('.portfolio_case_bg', a_array.ptf_el_arr.portfolio_a_fill_container)
	a_array.ptf_el_arr.portfolio_a_fill_case_hline_sub= $('.portfolio_case_hline_sub', a_array.ptf_el_arr.portfolio_a_fill_container)
	a_array.ptf_el_arr.portfolio_a_fill_case_text_sub = $('.portfolio_case_text_sub', a_array.ptf_el_arr.portfolio_a_fill_container)

}

function portfolio_a_fill_clear() {
	console.log('portfolio_a_fill_clear');

	TweenMax.set(a_array.global_el.page_info_text_sub_l,{clearProps:'all', className:'-=step_two'});
	TweenMax.set(a_array.global_el.page_info_text_sub_line,{clearProps:'all'});
	TweenMax.set(a_array.ptf_el_arr.portfolio_a_fill_case_b_w, {xPercent: -100});
	TweenMax.set(a_array.ptf_el_arr.portfolio_a_fill_case_b, {xPercent: 100});
	TweenMax.set(a_array.ptf_el_arr.portfolio_a_fill_case_bg, {scale: 1.2});
	TweenMax.set(a_array.ptf_el_arr.portfolio_a_fill_case_hline_sub, {opacity: 0,xPercent: -30});
	TweenMax.set(a_array.ptf_el_arr.portfolio_a_fill_case_text_sub, {opacity: 0,xPercent: -30});
}

function contacts() {

	var contacts_el = [];

	$('.contact_b').each(function () {
		var $sub_this = $(this);
		var sub_array = {
			'contact_hline': [],
			'contact_hline_sub': [],
			'stagger_el': $('.stagger_el', $sub_this),
			'contact_map_link_text': $('.contact_map_link_text_sub', $sub_this),
			'contact_map_link_ar': $('.contact_map_link_ar', $sub_this),
			'contact_bg': $('.contact_bg', $sub_this)
		};

		$('.contact_hline_sub', $sub_this).each(function () {
			var $this = $(this);
			sub_array.contact_hline.push($this);
			sub_array.contact_hline_sub.push($('.line_sub', $this));
		});

		contacts_el.push(sub_array);
	});

	a_array.contacts_tl = new TimelineMax({
		// delay: 1,
		paused: true
	});
	a_array.contacts_tl
			.set(a_array.global_el.section_b[5],{opacity:1})
			.set(contacts_el[0].contact_hline,{clearProps:'all', className:'-=step_two'})
			.set(contacts_el[0].contact_hline_sub,{clearProps:'all'})
			.set(contacts_el[1].contact_hline,{clearProps:'all', className:'-=step_two'})
			.set(contacts_el[1].contact_hline_sub,{clearProps:'all'})
			.set([contacts_el[0].contact_bg, contacts_el[1].contact_bg],{clearProps:'all', className:'-=step_two'})
			.addLabel('start', '+=.2')

			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start')
			// .call(text_line_anim, [a_array.global_el.page_info_text_sub_l[0]], null, 'start')

			.call(bg_anim, [contacts_el[0].contact_bg], null, 'start')
			.addLabel('first_b', '+=.5')
			.call(text_line_anim_new, [contacts_el[0].contact_hline, contacts_el[0].contact_hline_sub, .4, .15], null, 'first_b')
			.staggerFrom(contacts_el[0].stagger_el, .33, {
				xPercent: 121,
				ease: $easeOut_2
			}, .08, 'first_b+=.3')
			.addLabel('first_b_end')
			.staggerFrom([contacts_el[0].contact_map_link_text, contacts_el[0].contact_map_link_ar], .33, {
				opacity: 0,
				ease: $easeOut_2
			}, .2, 'first_b_end')

			.call(bg_anim, [contacts_el[1].contact_bg], null, 'start+=.4')
			.call(text_line_anim_new, [contacts_el[1].contact_hline, contacts_el[1].contact_hline_sub, .4, .15], null, 'first_b+=.4')
			.staggerFrom(contacts_el[1].stagger_el, .33, {
				xPercent: 121,
				ease: $easeOut_2
			}, .08, 'first_b+=.7')
			.addLabel('second_b_end')
			.staggerFrom([contacts_el[1].contact_map_link_text, contacts_el[1].contact_map_link_ar], .33, {
				opacity: 0,
				ease: $easeOut_2
			}, .2, 'second_b_end-=.3')

			.from($('.contacts_content_text'), .5, {
				opacity: 0,
				ease: $easeOut_2
			}, 'start+=1.5')
}

function clients() {

	a_array.clients_line = {
		line: [],
		sub_line: []
	};
	$('.clients_content_text_sub').each(function () {
		var $this = $(this);

		a_array.clients_line.line.push($this);
		a_array.clients_line.sub_line.push($('.line_sub', $this));
	});

	a_array.clients_tl = new TimelineMax({
		// delay: 1,
		paused: true
	});
	a_array.clients_tl
			.set(a_array.clients_line.line, {
				clearProps: 'all',
				className: '-=step_two'
			})
			.set(a_array.clients_line.sub_line, {
				clearProps: 'all'
			})
			.addLabel('start')
			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start')
			// .call(text_line_anim, [a_array.global_el.page_info_text_sub_l[0]], null, 'start')
			.call(text_line_anim_new, [a_array.clients_line.line, a_array.clients_line.sub_line, .4, .15], null, '-=.2')
			.staggerFrom($('.clients_el_sub'), .33, {
				scale: 1.5,
				opacity: 0,
				ease: $easeOut_2
			}, .08, '-=.3')
}

function clients_go() {

	page_animation_manage('stop');

	console.log(new_active_page);
	TweenMax.set(a_array.global_el.section_b[active_page], {clearProps: 'zIndex'});
	TweenMax.set(a_array.global_el.page_info, {className: 'page_info clients_mod'});
	TweenMax.set(a_array.global_el.page_info_text_sub_l, {
		clearProps: 'all',
		className: '-=step_two'
	});
	TweenMax.set(a_array.global_el.page_info_text_sub_line, {
		clearProps: 'all'
	});
	TweenMax.set(a_array.global_el.section_b[6], {
		zIndex: 10,
		display: 'block',
		yPercent: -101,
		skewY: "-20deg",
		skewType: "simple",
		transformOrigin: '0 100%'
	});

	TweenMax.set(a_array.global_el.scene_section_b[6], {
		yPercent: 101,
		skewY: "20deg",
		skewType: "simple",
		transformOrigin: '0 100%'
	});

	TweenMax.to(a_array.global_el.section_b[6], .7,{
		yPercent: 0,
		skewY: "0deg",
		skewType: "simple",
		transformOrigin: '0 100%',
		delay: .1,
		ease: a_array.custom_ease[0]
	});

	a_array.clients_tl.seek(0).pause();

	TweenMax.to(a_array.global_el.scene_section_b[6], .7,{
		yPercent: 0,
		skewY: "0deg",
		skewType: "simple",
		transformOrigin: '0 100%',
		delay: .1,
		ease: a_array.custom_ease[0],
		onComplete:function () {
			TweenMax.set(a_array.global_el.section_b[active_page], {clearProps: 'all'});
			a_array.clients_tl.play();
			active_page = 6;
			TweenMax.delayedCall(1, page_animation_manage, ['play']);
			TweenMax.set(a_array.global_el.portfolio_link_btn, {yPercent: 0});
		}
	});
}


function services() {
	a_array.scene_bg_el_services_array = [];
	a_array.scene_bg_b_services_array = [];

	$('.scene_bg_b.services_mod').each(function () {
		var $this = $(this);
		var scene_bg_el_array = [];

		a_array.scene_bg_b_services_array.push($this);

		$('.scene_bg_el', $this).each(function () {
			var $sub_this = $(this);

			if ($sub_this.hasClass('center_mod')) {
				$sub_this = $('.scene_bg_el_sub', $sub_this);
			}
			scene_bg_el_array.push($sub_this);
		});

		a_array.scene_bg_el_services_array.push(scene_bg_el_array);
	});

	a_array.services_line = {
		line: [],
		sub_line: []
	};
	$('.services_content_text_sub').each(function () {
		var $this = $(this);

		a_array.services_line.line.push($this);
		a_array.services_line.sub_line.push($('.line_sub', $this));
	});

	a_array.services_tl = new TimelineMax({
		delay: 1,
		paused: true
	});
	a_array.services_tl
			.set(a_array.global_el.section_b[3],{opacity:1})
			.set(a_array.scene_bg_el_services_array[0],{clearProps: "all"})

			.set(a_array.services_line.line, {
				clearProps: 'all',
				className: '-=step_two'
			})
			.set(a_array.services_line.sub_line, {
				clearProps: 'all'
			})
			.addLabel('start', '+=.2')
			.call(cell_anim_f, [a_array.scene_bg_el_services_array[0], a_array.scene_bg_b_services_array[0], .4, false, 101], 'start')
			.from($('.services_content_bg'), .4, {
				yPercent: -101,
				ease: $easeOut_1
			}, 'start')
			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start+=.6')
			// .call(text_line_anim, [a_array.global_el.page_info_text_sub_l[0]], null, 'start+=.6')
			.call(text_line_anim_new, [a_array.services_line.line, a_array.services_line.sub_line, .4, .15], null, 'start+=.8')
			.staggerFrom($('.services_el'), .33, {
				xPercent: -10,
				opacity: 0,
				ease: $easeOut_2
			}, .1, 'start+=1.2')
}


function about() {
	var about_loading_line_sub = $('.about_loading_line_sub');

	a_array.scene_bg_el_about_array = [];
	a_array.scene_bg_b_about_array = [];

	$('.scene_bg_b.about_mod').each(function () {
		var $this = $(this);
		var scene_bg_el_array = [];

		a_array.scene_bg_b_about_array.push($this);

		$('.scene_bg_el', $this).each(function () {
			var $sub_this = $(this);

			if ($sub_this.hasClass('center_mod')) {
				$sub_this = $('.scene_bg_el_sub', $sub_this);
			}
			scene_bg_el_array.push($sub_this);
		});

		a_array.scene_bg_el_about_array.push(scene_bg_el_array);
	});

	a_array.about_tabs_item_array = [];
	a_array.about_tab_btn_array = [];
	a_array.about_tab_btn_one_array = [];
	a_array.about_tab_btn_one_sub_array = [];

	a_array.about_tab_btn_two_array = [];
	a_array.about_tab_btn_two_sub_array = [];



	$('.about_tabs_l_item').each(function () {
		var $this = $(this);

		a_array.about_tabs_item_array.push($this);
		a_array.about_tab_btn_array.push($('.about_tab_btn_w',$this));
		a_array.about_tab_btn_one_array.push($('.about_tab_btn_one',$this));
		a_array.about_tab_btn_one_sub_array.push($('.about_tab_btn_one_sub',$this));

		a_array.about_tab_btn_two_array.push($('.about_tab_btn_two',$this));
		a_array.about_tab_btn_two_sub_array.push($('.about_tab_btn_two_sub',$this));
	});

	a_array.about_tab_content_array = [];

	$('.about_tab_content').each(function () {
		var $this = $(this);
		var sub_array = {
			container:$this,
			content_sub:[],
			content_sub_reversed:[]
		};

		$('.about_tab_content_sub', $this).each(function () {
			var $sub_this = $(this);

			sub_array.content_sub.push($sub_this);
			sub_array.content_sub_reversed.push($sub_this);
		});
		sub_array.content_sub_reversed.reverse();
		a_array.about_tab_content_array.push(sub_array);
	});

	console.log(a_array.about_tab_content_array);

	a_array.about_line = {
		line: [],
		sub_line: []
	};
	$('.about_content_text_sub').each(function () {
		var $this = $(this);

		a_array.about_line.line.push($this);
		a_array.about_line.sub_line.push($('.line_sub', $this));
	});

	$('.about_tab_btn_w').on('click', function (event) {
		var $this = $(this);
		var $delay = .25;
		var $time = .5;
		var $index = $this.data('index');
		console.log($index, about_active_tab, about_tabs);

		if(!about_slider_active){
			about_slider($index, $time, $delay);
		}

		console.log('about_tab_btn_w click')
		return false;
	});

	function about_slider_text(index_from, index_to){
		var array_from = a_array.about_tab_content_array[index_from];
		var array_to = a_array.about_tab_content_array[index_to];
		TweenMax.staggerTo(array_from.content_sub_reversed, .4, {
			yPercent: 500,
			opacity: 0,
			ease: a_array.custom_ease[0]
		}, .1, clear_past, [index_from, index_to]);

		function clear_past(index_from, index_to) {
			TweenMax.set(array_from.content_sub , {clearProps: 'all'});
			TweenMax.set(array_from.container, {clearProps: 'all'});
			TweenMax.set(array_to.container, {opacity: 1});

			TweenMax.staggerFrom(array_to.content_sub, .4, {
				yPercent: 500,
				opacity: 0,
				ease: a_array.custom_ease[0]
			}, .1, end);
		}

		function end() {
			about_slider_active = false;
		}
	}

	function about_slider($index, $time, $delay) {
		var index_from;
		var index_to;

		if (about_active_tab != $index) {
			about_slider_active = true;

			if (about_active_tab == 1) {
				if ($index == 2) {
					index_from = 0;
					index_to = 1;
					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[index_from], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'end', $time, 0);

					animated_fill(a_array.about_tab_btn_one_array[index_to], a_array.about_tab_btn_one_sub_array[index_to], a_array.about_tab_btn_two_array[index_to], a_array.about_tab_btn_two_sub_array[index_to], 'start', $time, $delay);


				}
				else if ($index == 3) {
					index_from = 0;
					index_to = 2;

					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[index_from], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'back_end', $time, 0);
					animated_fill(a_array.about_tab_btn_one_array[index_to], a_array.about_tab_btn_one_sub_array[index_to], a_array.about_tab_btn_two_array[index_to], a_array.about_tab_btn_two_sub_array[index_to], 'back_start', $time, $delay);
				}
			} else if (about_active_tab == 2) {
				if ($index == 1) {
					index_from = 1;
					index_to = 0;

					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[index_from], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'back_end', $time, 0);
					animated_fill(a_array.about_tab_btn_one_array[index_to], a_array.about_tab_btn_one_sub_array[index_to], a_array.about_tab_btn_two_array[index_to], a_array.about_tab_btn_two_sub_array[index_to], 'back_start', $time, $delay);
				}
				else if ($index == 3) {
					index_from = 1;
					index_to = 2;
					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[index_from], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'end', $time, 0);
					animated_fill(a_array.about_tab_btn_one_array[index_to], a_array.about_tab_btn_one_sub_array[index_to], a_array.about_tab_btn_two_array[index_to], a_array.about_tab_btn_two_sub_array[index_to], 'start', $time, $delay);
				}
			} else if (about_active_tab == 3) {
				if ($index == 1) {
					index_from = 2;
					index_to = 0;
					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[index_from], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'back_end', $time, 0);
					animated_fill(a_array.about_tab_btn_one_array[0], a_array.about_tab_btn_one_sub_array[0], a_array.about_tab_btn_two_array[0], a_array.about_tab_btn_two_sub_array[0], 'start', $time, $delay);
				}
				else if ($index == 2) {
					index_from = 2;
					index_to = 1;

					animated_fill(a_array.about_tab_btn_one_array[index_from], a_array.about_tab_btn_one_sub_array[2], a_array.about_tab_btn_two_array[index_from], a_array.about_tab_btn_two_sub_array[index_from], 'back_end', $time, 0);
					animated_fill(a_array.about_tab_btn_one_array[index_to], a_array.about_tab_btn_one_sub_array[index_to], a_array.about_tab_btn_two_array[index_to], a_array.about_tab_btn_two_sub_array[index_to], 'back_start', $time, $delay);

				}
			}
			about_slider_text(index_from, index_to);
			about_active_tab = $index;
		}
	}

	function about_tl_end() {
		if(active_page == 2){
			if (!about_slider_active && !about_slider_time_start) {
				about_slider_time_start = true;
				a_array.about_slider = TweenMax.to(about_loading_line_sub, 6*5, {
					xPercent: 101,
					ease: $linear,
					onComplete: function () {

						TweenMax.to(about_loading_line_sub, .25, {
							xPercent: 201,
							ease: $easeIn_2,
							onComplete: function () {
								TweenMax.set(landing_loading_line_sub, {xPercent: 0});
								if(active_page == 2){
									about_slider_time_start = false;
									a_array.about_slider.restart();
								} else {
									a_array.about_slider.seek(0).pause();
									about_slider_active = false;
									about_slider_time_start = false;
								}
							}
						});

						var $delay = .25;
						var $time = .5;
						console.log(about_slider_active);
						if (!about_slider_active) {
							var $index;
							if (about_active_tab < about_tabs) {
								$index = about_active_tab + 1;
							} else {
								$index = 1;
							}

							about_slider($index, $time, $delay);
						}
					}
				});
			}
		}else {
			a_array.about_slider.seek(0).pause();
			about_slider_active = false;
			about_slider_time_start = false;
		}

	}

	var $about_content_text_sub = $('.about_content_text_sub');

	a_array.about_tl = new TimelineMax({
		delay: 1,
		paused: true,
		onComplete:function () {
			if (a_array.about_slider === undefined){
				about_tl_end();
			}else {
				a_array.about_slider.seek(0).play();
			}

		}
	});

	// a_array.about_tab_btn_one_array,
	// a_array.about_tab_btn_one_sub_array,
	// 		a_array.about_tab_btn_two_array, a_array.about_tab_btn_two_sub_array
	a_array.about_tl
			.set(a_array.global_el.section_b[2],{opacity:1})
			.set(a_array.scene_bg_el_about_array[0],{clearProps: "all"})
			.set(a_array.scene_bg_el_about_array[0],{clearProps: "all"})
			.set(about_loading_line_sub,{xPercent: 0})
			.set(a_array.about_tab_content_array[0].container, {opacity:1})

			.set(a_array.about_line.line, {
				clearProps: 'all',
				className: '-=step_two'
			})
			.set(a_array.about_line.sub_line, {
				clearProps: 'all'
			})
			.addLabel('start', '+=.2')
			.call(cell_anim_f, [a_array.scene_bg_el_about_array[0], a_array.scene_bg_b_about_array[0], .4, false, 101], 'start')
			.from($('.about_content_bg'), .4, {
				yPercent: -101,
				ease: $easeOut_1
			}, 'start')
			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start+=.6')
			// .call(text_line_anim, [a_array.global_el.page_info_text_sub_l[0]], null, 'start+=.6')
			.call(text_line_anim_new, [a_array.about_line.line, a_array.about_line.sub_line, .4, .15], null, 'start+=.8')
			.addLabel('text')
			.staggerFrom(a_array.about_tab_btn_array, .5, {
				yPercent: -70,
				opacity: 0,
				ease: $easeOut_2
			}, .1, 'text-=.2')
			.staggerFrom(a_array.about_tab_content_array[0].content_sub, .4, {
				yPercent: 500,
				opacity: 0,
				ease: a_array.custom_ease[0]
			}, .1, 'text')
			.call(animated_fill, [a_array.about_tab_btn_one_array[0], a_array.about_tab_btn_one_sub_array[0], a_array.about_tab_btn_two_array[0], a_array.about_tab_btn_two_sub_array[0]], null, '-=.2')


}

function landing() {
	a_array.scene_bg_el_array = [];
	a_array.scene_bg_b_array = [];


	var cell_time = .4;
	var cell_time_shift = cell_time * .85;
	var cell_ease = $easeOut_2;
	TweenMax.set($body_var,{opacity: 1});
	TweenMax.set($('.logo'),{xPercent: -101});
	TweenMax.set($('.logo_sub'),{xPercent: 101});

	$('.scene_section_b')
			.append('<div class="scene_bg_b second_mod landing_mod loaded_mod before_mod">' +
					'<div class="scene_bg_el landing_mod center_mod">' +
					'<div class="scene_bg_el_sub landing_mod center_mod"></div>' +
					'</div>' +
					'<div class="scene_bg_el landing_mod left_top_mod"></div>' +
					'<div class="scene_bg_el landing_mod center_bottom_mod"></div>' +
					'<div class="scene_bg_el landing_mod left_bottom_mod"></div>' +
					'<div class="scene_bg_el landing_mod right_center_mod"></div>' +
					'<div class="scene_bg_el landing_mod left_center_mod"></div>' +
					'<div class="scene_bg_el landing_mod right_bottom_mod"></div>' +
					'<div class="scene_bg_el landing_mod center_top_mod"></div>' +
					'<div class="scene_bg_el landing_mod right_top_mod"></div>' +
					'</div></div>');

	$('.scene_bg_b.landing_mod').each(function () {
		var $this = $(this);
		var scene_bg_el_array = [];

		a_array.scene_bg_b_array.push($this);

		$('.scene_bg_el', $this).each(function () {
			var $sub_this = $(this);

			if ($sub_this.hasClass('center_mod')) {
				$sub_this = $('.scene_bg_el_sub', $sub_this);
			}
			scene_bg_el_array.push($sub_this);
		});

		a_array.scene_bg_el_array.push(scene_bg_el_array);
	});


	a_array.landing_line = {
		line: [],
		sub_line: []
	};
	$('.landing_content_text_line').each(function () {
			var $this = $(this);

		a_array.landing_line.line.push($this);
		a_array.landing_line.sub_line.push($('.line_sub', $this));
	});

	function manu_trigger_tl() {
		if(!first_load) {
			TweenMax.set(a_array.global_el.menu_btn, {opacity: 1, force3D:true});

			TweenMax.set(a_array.global_el.menu_btn, {className:'+=loaded_mod',delay:.9});

			TweenMax.staggerFrom($('.menu_btn_line_side'), .6, {
				xPercent: 101,
				cycle:{
					delay: [.1 , 0]
				},
				ease: $easeOut_2
			}, 0);

			TweenMax.staggerFrom([a_array.global_el.menu_btn_text, a_array.global_el.menu_btn_text_sub], .4, {
				xPercent: 101,
				delay: .1,
				ease: $easeOut_2
			}, 0);

			TweenMax.from(a_array.global_el.menu_btn_line_sub, .4, {
				xPercent: 101,
				delay: .5,
				ease: $easeOut_2
			});
		}
	}

	a_array.landing_tl = new TimelineMax({
		paused: true,
		onComplete: function () {
			if(!first_load){
				TweenMax.set(a_array.global_el.section_b[1],{className:'+=loaded_mod'});
				first_load = true;

				a_array.portfolio_arrow_anim = TweenMax.to(a_array.global_el.portfolio_link_btn_ico_sub, 1, {
					yPercent: -151,
					ease: a_array.custom_ease[4],
					repeat: -1,
					yoyo: true
				})


				a_array.menu_btn_anim = new TimelineMax({repeat:-1, yoyo:true,  repeatDelay:4.8, delay:2});

				a_array.menu_btn_anim
						.staggerTo([a_array.global_el.menu_btn_text, a_array.global_el.menu_btn_text_sub, a_array.global_el.menu_btn_line_sub], .5, {
							cycle: {
								xPercent: [101, -101, 101]
							},
							ease: a_array.custom_ease[5]
						})
						.set(a_array.global_el.menu_btn_line, {xPercent: 104})
						.set(a_array.global_el.menu_btn_text, {xPercent: -253})
						.set(a_array.global_el.menu_btn_line_sub, {xPercent: -101})
						.set(a_array.global_el.menu_btn_text_sub, {xPercent: 115})
						.addLabel('second')
						.to(a_array.global_el.menu_btn_line_sub, .5, {
							xPercent: 0,
							ease: a_array.custom_ease[5]
						}, 'second')
						.to(a_array.global_el.menu_btn_text_sub, .5, {
							xPercent: 0,
							ease: a_array.custom_ease[5]
						}, 'second')
						.to(a_array.global_el.menu_btn_text, .5, {
							xPercent: -139,
							ease: a_array.custom_ease[5]
						}, 'second')
			}
		}
	});

	a_array.landing_tl
			.set(a_array.global_el.section_b[1],{opacity:1})
			.set(a_array.scene_bg_el_array[0],{clearProps: "all"})

			.set(a_array.landing_line.line, {
				clearProps: 'all',
				className: '-=step_two'
			})
			.set(a_array.landing_line.sub_line, {
				clearProps: 'all'
			})
			.addLabel('start')
			.call(cell_anim_f, [a_array.scene_bg_el_array[0], a_array.scene_bg_b_array[0], .5, false, -101], 'start')
			.from($('.landing_content_bg'), cell_time, {
				yPercent: -100,
				ease: cell_ease
			}, 'start+=' + cell_time)
			.call(text_line_anim_new, [a_array.landing_line.line, a_array.landing_line.sub_line], null, 'start+=' + cell_time * 2)
			.call(manu_trigger_tl, [] , 'start+=' + cell_time * 1.3)
			.call(social_menu_link, [] , 'start+=' + cell_time * 1.3)
			.from($('.side_contact_btn_sub'), cell_time, {
				xPercent: -101,
				ease: cell_ease
			}, 'start+=' + cell_time * 2)
			.to($('.gph_container.landing_mod'), cell_time, {
				opacity: 1,
				ease: cell_ease
			}, 'start+=' + cell_time * 2)
			.to($('.landing_content_gph_el'), cell_time, {
				opacity: .07,
				ease: cell_ease
			}, 'start+=' + cell_time * 2)

			.call(logo)

			.call(text_line_anim_new, [a_array.global_el.page_info_text_sub_l, a_array.global_el.page_info_text_sub_line], null, 'start+=' + cell_time * 2)

			.addLabel('second_line')
			.call(second_line, [], null,'second_line')
			.call(portfolio_trigger, [], null,'second_line+=.21')
			.addLabel('end')
			.call(landing_img_slider, [], null,'end+=1')
	;

	function social_menu_link() {
		if (!first_load) {
			TweenMax.staggerTo($('.social_menu_link'), .6, {
				yPercent: -101,
				ease: $easeOut_2
			}, .2)
		}
	}

	function logo() {
		if(!first_load) {
			TweenMax.to([$('.logo'), $('.logo_sub')], .6, {
				xPercent: 0,
				ease: cell_ease
			});
		}
	}

	function second_line() {
		if(!first_load) {
			TweenMax.to($('.copyright_sub'), cell_time, {
				yPercent: -100,
				ease: cell_ease
			})
			TweenMax.to($('.clients_link_ico'), cell_time, {
				opacity: 1,
				ease: cell_ease
			})
			TweenMax.to($('.clients_link_text'), cell_time, {
				yPercent: -100,
				opacity: 1,
				ease: cell_ease
			})
		}
	}
	function portfolio_trigger() {
		if (!first_load) {
			TweenMax.to(a_array.global_el.portfolio_link_btn_ico, .6, {
				yPercent: 121,
				ease: $easeOut_2
			})
			TweenMax.to(a_array.global_el.portfolio_link_btn_ico_sub, .6, {
				yPercent: -101,
				ease: $easeOut_2
			})
			TweenMax.to($('.portfolio_link_btn_text'), .6, {
				yPercent: -100,
				opacity: 1,
				ease: $easeOut_2
			});
		}
	}
}
function page_animation_manage($direction) {
	if($direction == 'stop'){
		if (active_page == 1) {
			a_array.landing_img_slider.pause();

		}
		if (active_page == 2) {
			a_array.about_slider.pause();
		}

		if(active_page != 4 && active_page != 7){
			a_array.portfolio_arrow_anim.pause();
		}

		a_array.menu_btn_anim.pause();
	}else {
		if (active_page == 1) {
			a_array.landing_img_slider.play();
		}
		if (active_page == 2 && a_array.about_slider !== undefined) {
			a_array.about_slider.play();
		}
		if(active_page != 4 && active_page != 7 && !a_array.portfolio_arrow_anim.isActive()){
			a_array.portfolio_arrow_anim.play();
		}

		a_array.menu_btn_anim.play();
	}

	console.log($direction, active_page);
}



function landing_img_slider() {
	if(active_page == 1 && !side_b_open && !menu_open) {
		if (cell_b_active < cell_b_amount) {
			cell_b_active++;
		} else {
			cell_b_active = 1;
		}

		if (!landing_cell_first) {
			landing_cell_first = true;
			landing_cell_flag = true;
		}

		TweenMax.set(landing_loading_line_sub, {
			opacity: 1
		});

		if (a_array.about_tl === undefined) {
			about();
			console.log('about');
		}

		if (a_array.services_tl === undefined) {
			services();
			console.log('services');
		}
		if (a_array.portfolio_tl === undefined) {
			portfolio();
			console.log('portfolio');
		}
		if (a_array.contacts_tl === undefined) {
			contacts();
			console.log('contacts');
		}
		if (a_array.clients_tl === undefined) {
			clients();
			console.log('clients');
		}
		if (a_array.portfolio_single_tl === undefined) {
			portfolio_single();
			console.log('portfolio_single');
		}

		a_array.landing_img_slider = TweenMax.to(landing_loading_line_sub, 8 * .6, {
			xPercent: 101,
			ease: $linear,
			onComplete: function () {
				TweenMax.to(landing_loading_line_sub, .25, {
					xPercent: 201,
					ease: $easeIn_2
				});
				TweenMax.set(landing_loading_line_sub, {
					xPercent: 0,
					delay:.25
				});

				if (landing_cell_flag) {
					landing_cell_flag = false;

					cell_anim_f(a_array.scene_bg_el_array[1], a_array.scene_bg_b_array[1], .4, true, 101, false, 'scene_bg_b second_mod landing_mod loaded_mod before_mod img_' + cell_b_active);

				} else {
					landing_cell_flag = true;

					cell_anim_f(a_array.scene_bg_el_array[0], a_array.scene_bg_b_array[0], .4, true, 101, false, 'scene_bg_b first_mod landing_mod loaded_mod before_mod img_' + cell_b_active);
					// console.log(cell_b_active, a_array.cell_tl_array[0]);
				}
			}
		});
	}
	else {
		a_array.landing_img_slider.seek(0).pause();
	}
}

function loading() {

	var counter = {var: 0};
	var $time = 5*.6;
	var $small_time = .5;
	var $letter_time = .3;
	var $letter_first = [];
	var $letter_second = [];

	$('.letter', '.first_letter').each(function () {
		var $sub_this = $(this);

		$letter_first.push($sub_this);
	});

	$('.letter', '.second_letter').each(function () {
		var $sub_this = $(this);

		$letter_second.push($sub_this);
	});

	function letter_tl() {
		var letter_tl = new TimelineMax();

		letter_tl
				.addLabel('start')
				.to($letter_first[0], $letter_time, {
					yPercent: -100,
					ease: $easeOut_1
				}, 'start')
				.to($letter_second[0], $letter_time, {
					yPercent: -100,
					ease: $easeOut_1
				}, 'start+=' + $letter_time / 2)
				.addLabel('second', '+=' + (($time - $letter_time * 5.5) / 2))
				.to($letter_first[0], $letter_time, {
					yPercent: 100,
					ease: $easeIn_1
				}, 'second')
				.to($letter_second[0], $letter_time, {
					yPercent: 100,
					ease: $easeIn_1
				}, 'second+=' + $letter_time / 2)
				.to($letter_first[1], $letter_time, {
					yPercent: -100,
					ease: $easeIn_1
				}, 'second')
				.to($letter_second[1], $letter_time, {
					yPercent: -100,
					ease: $easeIn_1
				}, 'second+=' + $letter_time / 2)
				.addLabel('third', '+=' + (($time - $letter_time * 5.5) / 2))
				.to($letter_first[1], $letter_time, {
					yPercent: 100,
					ease: $easeIn_1
				}, 'third')
				.to($letter_second[1], $letter_time, {
					yPercent: 100,
					ease: $easeIn_1
				}, 'third+=' + $letter_time / 2)
				.to($letter_first[2], $letter_time, {
					yPercent: -100,
					ease: $easeIn_1
				}, 'third')
				.to($letter_second[2], $letter_time, {
					yPercent: -100,
					ease: $easeIn_1
				}, 'third+=' + $letter_time / 2)

		;

		return letter_tl;
	}


	a_array.loading_tl = new TimelineMax({
		delay: 1,
		paused: true,
		onComplete:function () {

		}
	});
	a_array.loading_tl
			.set($body_var,{className:'+=page_load_mod'})
			.set(a_array.global_el.section_b[0],{opacity:1, display:'block', zIndex:5})
			.addLabel('main_s')
			.to(a_array.loading_el_a.loader_counter, $time, {
				attr:{'data-text':5518},
				roundProps:"data-text",
				ease: $linear
			}, 'main_s')
			.from($('.loader_line'), $time, {
				xPercent: -101,
				ease: $linear
			}, 'main_s')
			.staggerFrom($('.loader_icon_b'), $small_time*1.3, {
				yPercent: 108,
				ease: $linear
			}, (($time * .95 - $small_time * 3) / 2), 'main_s')
			.add(letter_tl, 'main_s+=' + $letter_time / 2)
			.set(a_array.global_el.section_b[1],{display:'block', zIndex:10})
			.addLabel('second_s', '+=.5')
			.to(a_array.loading_el_a.loader_counter, ($small_time *2) * 1.3, {
				opacity: 0,
				ease: $linear
			}, 'second_s')
			.to($letter_first[2], $letter_time * 1.3, {
				yPercent: 101,
				ease: $easeIn_1
			}, 'second_s')
			.to($letter_second[2], $letter_time * 1.3, {
				yPercent: 101,
				ease: $easeIn_1
			}, 'second_s+=' + ($letter_time * 1.3) / 2)
			.to(a_array.loading_el_a.loader_bg, .5, {
				yPercent: -99,
				ease: $easeIn_1
			})
			.addLabel('third')
			.call(f_first_load,[], 'third')
			.to(a_array.loading_el_a.loader_bg, .54, {
				yPercent: -200,
				ease: $easeOut_1
			}, 'third')
			.set(a_array.global_el.section_b[0], {clearProps:'all'});
			// .set(a_array.global_el.section_b[0],{opacity:0})
	;



	function f_first_load() {
		a_array.landing_tl.play();
	}
}

// $(window).on('touchstart', function (event) {
// 	if (page_load) {
// 		touchstart = true;
// 		clickPointY = event.originalEvent.touches[0].pageY;
// 	}
// });
// $(window).on('touchmove', function (event) {
// 	if (page_load) {
// 		shift = event.originalEvent.touches[0].pageY - clickPointY;
// 		if (!$scroll_fired && !a_array.main_tl.isActive()) {
// 			if (shift > 0) {
// 				scroll_global(1);
// 			}
// 			if (shift < 0) {
// 				scroll_global(-1);
// 			}
// 		}
// 		return false;
// 	}
// });
//
// $(window).on('touchend', function (event) {
// 	if (page_load) {
// 		touchstart = false;
// 		clickPointY = 0;
// 		shift = 0;
//
// 		// return false;
// 	}
// });

JD.mousewheel_f = function (event) {
	if (page_load && active_page == 4 && !a_array.portfolio_tl.isActive()) {

		console.log('scroll_global');
		event.preventDefault();
		if (!$scroll_fired) {
			if (event.deltaY > 0) {
				scroll_global(1);
			}
			if (event.deltaY < 0) {
				scroll_global(-1);
			}
		}
		return false;
	}
};

JD.keydown_f = function (e) {
	console.log(e.which);
	if (e.which == 82) {
		TweenMax.set([a_array.global_el.html, a_array.global_el.base_var, a_array.global_el.body_var], {
			perspective: '3500px',
			transformStyle: 'preserve-3d'
		})
		TweenMax.set('.section_b', {transformStyle: 'preserve-3d'})
		TweenMax.set(a_array.global_el.body_var, {
			backgroundColor: '#000'
		})
		TweenMax.set('.landing_content_text', {
			perspective: '3500px',
			perspectiveOrigin: '1285px 760px',
			// transformStyle: 'preserve-3d',
		});
		TweenMax.set('.landing_content_b', {
			overflow:'visible'
		});

		TweenMax.set(a_array.landing_line.line, {transformStyle: 'preserve-3d'})
		TweenMax.to(a_array.global_el.body_var, 2, {rotationX: 30, rotationY: -35, z: -500})
		TweenMax.to('.section_b', 1, {z: 0, opacity: 1})
		TweenMax.staggerTo(a_array.landing_line.line, 2, {z: 100, delay: 1});
		TweenMax.to('.landing_content_text', 1, {color:'red', delay: 2})

		TweenMax.set(a_array.landing_line.line, {
			clearProps: 'all',
			className: '-=step_two',
			delay: 3
		})
		TweenMax.set(a_array.landing_line.sub_line, {
			clearProps: 'all',
			delay: 3
		})
		TweenMax.delayedCall(3, text_line_anim_new, [a_array.landing_line.line, a_array.landing_line.sub_line])
	}
	if (e.which == 84) {
		TweenMax.staggerTo(a_array.landing_line.line, 2, {z: 0});
		TweenMax.to(a_array.global_el.body_var, 2, {rotationX: 0, rotationY: 0, z: 0})
	}
	if (e.which == 81) {
		TweenMax.set([a_array.global_el.html, a_array.global_el.base_var, a_array.global_el.body_var], {
			perspective: '3500px',
			transformStyle: 'preserve-3d'
		})
		TweenMax.set(a_array.global_el.body_var, {
			backgroundColor:'#000'
		})
		//TweenMax.set(a_array.global_el.body_var, {perspective: 3500,transformStyle:'preserve-3d'})
		TweenMax.set('.section_b', {transformStyle: 'preserve-3d'})
		TweenMax.to(a_array.global_el.body_var, 2, {rotationX: 15, rotationY: -35, z: -500, delay: 1})
		TweenMax.to('.section_b', 1, {z: -560, opacity: .5, delay: 3})
	}
	if (e.which == 90) {
		TweenMax.to(a_array.global_el.body_var, 2, {rotationX: 0, rotationY: 0, z: 0, delay: 1})
		TweenMax.to('.section_b', 1, {z: 0, opacity: 1})
	}
	if (page_load && active_page == 4 && !a_array.portfolio_tl.isActive()) {
		e.preventDefault();
		if (!$scroll_fired && !a_array.main_tl.isActive()) {
			if (e.which == 38) {
				scroll_global(1);
			}
			if (e.which == 40) {
				scroll_global(-1);
			}
		}
		return false;
	}
};

$(window).on('mousewheel', JD.debounce(JD.mousewheel_f, 35, true));
$(window).on('keydown', JD.debounce(JD.keydown_f, 200));

function scroll_global($direction) {
	console.log('scroll_global');
	if (page_load && active_page == 4 && !a_array.portfolio_tl.isActive()) {
		if (!$scroll_fired) {
			portfolio_see_more_click_f();
			$scroll_fired = true;
		}
	}
}

$(window).on('resize', resize_f);

$(window).on('orientationchange', resize_f);

function resize_f() {
	window_width = $(window).width();
	window_height = $(window).height();
	var ratio = window_width / window_height;

	vert_percent = Math.round(window_height / 100);
	hor_percent = Math.round(window_width / 100);

	if ($body_var.hasClass('develop_mod')) {
		console.log('window ' + window_width + ' X ' + window_height);
	}
	if (window_height > window_width * .62) {
		rem = (window_width / hor_constant) * 10;
		console.log('hor_mod');
	}
	else {
		rem = (window_height / vert_constant) * 9;
		console.log('vert_mod');
	}

	if(rem_test > 7.6 && rem <= 7.6 && rem > 5 || rem_test < 5 && rem <= 7.6 && rem > 5){
		TweenMax.set(a_array.global_el.menu_btn, {className:'menu_btn step_2'})
	}else if(rem_test > 5 && rem <= 5){
		TweenMax.set(a_array.global_el.menu_btn, {className:'menu_btn step_3'})
	} else if(rem_test < 7.6 && rem > 7.6){
		TweenMax.set(a_array.global_el.menu_btn, {className:'menu_btn'})
	}


	$html.css('font-size', rem + 'px');
	rem_test = rem;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}


function loadScript(src, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (callback)script.onload = callback;
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src = src;
}

function pageWidget(pages) {
	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
	widgetWrap.prependTo("body");
	for (var i = 0; i < pages.length; i++) {
		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
	}
	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
	widgetStilization.prependTo(".widget_wrap");
}

function splitSpan($target, $type, $class) {

	var element = $target;
	// var text= element.innerHTML;
	var text = element[0].childNodes[0].data;
	text = text.replace(/(\r\n|\r|\n)(\r\n|\r|\n)/g, "$1 $2");
	var lines = text.split(/\r\n|\r|\n/);
	var s = "";
	for (var i = 0; i < lines.length; i++) {
		if (lines[i] == " ") lines[i] = "";
		s += (i + 1) + ": " + lines[i] + "\n";
	}
	console.log(s);

	// if($type== undefined){
	// 	$type = ' ';
	// }
	// $target.each(function () {
	// 	var text = $.trim($(this).text()),
	//
	// 		word = text.split($type),
	// 		str = "";
	// 	$.each(word, function (key, value) {
	// 		if (key != 0 && $type == ' ') {
	// 			str += " ";
	// 		}
	// 		if($target.hasClass('contacts_msg_w') && key == word.length-1){
	// 			str += "<a class='"+$class+"' href=mailto:'"+value+"'>" + value + "</a>";
	// 		}else {
	// 			str += "<span class='"+$class+"'>" + value + "</span>";
	// 		}
	// 	});
	// 	$(this).html(str);
	// });
}

$.extend({
    getCss: function(urls, callback, nocache){
        if (typeof nocache=='undefined') nocache=false; // default don't refresh
        $.when(
            $.each(urls, function(i, url){
                if (nocache) url += '?_ts=' + new Date().getTime(); // refresh?
                $.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                });
            })
        ).then(function(){
            if (typeof callback=='function') callback();
        });
    },
});

var portfolio_array = [
	{
		hline: 'Case stady #1',
		text: 'Live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights. Enamel pin keffiyeh salvia.',
		image: 'case_1.jpg'
	}, {
		hline: 'Case stady #2',
		text: 'Enamel pin keffiyeh salvia, live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights.',
		image: 'case_2.jpg'
	}, {
		hline: 'Case stady #3',
		text: 'Live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights. Enamel pin keffiyeh salvia.',
		image: 'case_3.jpg'
	}, {
		hline: 'Case stady #4',
		text: 'Enamel pin keffiyeh salvia, live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights.',
		image: 'case_4.jpg'
	}, {
		hline: 'Case stady #5',
		text: 'Live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights. Enamel pin keffiyeh salvia.',
		image: 'case_2.jpg'
	}, {
		hline: 'Case stady #6',
		text: 'Enamel pin keffiyeh salvia, live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights.',
		image: 'case_3.jpg'
	}, {
		hline: 'Case stady #7',
		text: 'Live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights. Enamel pin keffiyeh salvia.',
		image: 'case_4.jpg'
	}, {
		hline: 'Case stady #8',
		text: 'Enamel pin keffiyeh salvia, live-edge sustainable af PBR&B, hoodie viral chillwave unicorn dreamcatcher try-hard brunch post-ironic hella bicycle rights.',
		image: 'case_1.jpg'
	}
]


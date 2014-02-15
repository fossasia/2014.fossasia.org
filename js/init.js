/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var _settings = {

		// Fullscreen
			useFullScreen: true,
			
		// Section Transitions
			useSectionTransitions: true,

		// Fade in speed (in ms)
			fadeInSpeed: 1000,

		// skel
			skel: {
				prefix: 'css/style',
				resetCSS: true,
				useOrientation: true,
				boxModel: 'border',
				breakpoints: {
					'max': { range: '*', containers: 1440, hasStyleSheet: false },
					'wide': { range: '-1920', containers: 1360 },
					'normal': { range: '-1680', containers: 1200 },
					'narrow': { range: '-1280', containers: 960 },
					'narrower': { range: '-1000', containers: '95%', lockViewport: true },
					'mobile': { range: '-640', containers: '95%', grid: { gutters: 20 }, lockViewport: true },
					'mobile-narrow': { range: '-480', containers: '95%', grid: { collapse: true, gutters: 10 }, lockViewport: true, hasStyleSheet: false }
				}
			},

		// poptrox
			poptrox: {
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			}

	};

/*********************************************************************************/
/* jQuery Plugins                                                                */
/*********************************************************************************/

	// formerize | (c) n33.co | MIT
		jQuery.fn.formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };

	// scrolly | (c) n33.co | MIT
		jQuery.fn.scrolly=function(d,b){d||(d=1E3);b||(b=0);jQuery(this).off("click.scrolly").on("click.scrolly",function(f){var a=jQuery(this),c=a.attr("href"),e;"#"==c.charAt(0)&&(1<c.length&&0<(e=jQuery(c)).length)&&(c=e.offset().top,a.hasClass("scrolly-centered")?a=c-($(window).height()-e.outerHeight())/2:(a=Math.max(c,0),b&&(a="function"==typeof b?a-b():a-b)),f.preventDefault(),jQuery("body,html").stop().animate({scrollTop:a},d,"swing"))})};

	// scrollgress | (c) n33.co | MIT
		(function(){var d=$(window),h=$(document),k=1E3;jQuery.fn.scrollwatch=function(c){if(1<this.length){for(var b=0;b<this.length;b++)$(this[b]).scrollwatch(c);return this}var a=jQuery.extend({range:0.5,anchor:"top",init:null,on:null,off:null,delay:0},c),d=$(this),e;a.init&&a.init(d);d.data("scrollwatch-state",0).scrollgress(function(c){window.clearTimeout(e);e=window.setTimeout(function(){if(0==d.data("scrollwatch-state")){if(c>=-1*a.range&&c<=a.range&&(d.data("scrollwatch-state",1),a.on))a.on(d)}else if(c<-1*a.range||c>=a.range)d.data("scrollwatch-state",0),a.off&&a.off(d)},a.delay)},{anchor:a.anchor},"scrollwatch");return d};jQuery.fn.unscrollwatch=function(){if(1<this.length){for(var c=0;c<this.length;c++)$(this[c]).unscrollwatch();return this}c=$(this);c.removeData("scrollwatch-state",0).unscrollgress("scrollwatch");return c};jQuery.fn.scrollgress=function(c,b,a){if(1<this.length){for(var g=0;g<this.length;g++)$(this[g]).scrollgress(c,b,a);return this}a||(a="scrollgress");var e=jQuery.extend({anchor:"top",direction:"both",scope:"element",easing:0},b),f=$(this);f.data(a+"-id")||f.data(a+"-id",k++);b=f.data(a+"-id");a="scroll."+a+"-"+b;d.off(a).on(a,function(){var a=f.offset().top,b=f.outerHeight();h.height();switch(e.scope){default:case "element":switch(e.anchor){default:case "top":a=-1*((a-d.scrollTop())/b);break;case "center":a=-1*((a-d.scrollTop()-(d.height()-b)/2)/b);break;case "bottom":a=-1*((a-d.scrollTop()-(d.height()-b))/b)}break;case "window":switch(e.anchor){default:case "top":a=-1*((a-d.scrollTop())/d.height());break;case "center":a=-1*((a-d.scrollTop()-(d.height()-b)/2)/d.height());break;case "bottom":a=-1*((a-d.scrollTop()-(d.height()-b))/d.height())}}"forwards"==e.direction?a=Math.max(0,a):"backwards"==e.direction&&(a=Math.min(0,a));0<a?a=Math.max(0,a-e.easing/100):0>a&&(a=Math.min(0,a+e.easing/100));c(a,f)}).trigger("scroll");return f};jQuery.fn.unscrollgress=function(c){if(1<this.length){for(var b=0;b<this.length;b++)$(this[b]).unscrollgress(c);return this}c||(c="scrollgress");var b=$(this),a;if(!b.data(c+"-id"))return b;a=b.data(c+"-id");d.off("scroll."+c+"-"+a);b.removeData(c+"-id");return b}})();

/*********************************************************************************/
/* Initialize                                                                    */
/*********************************************************************************/

	// skel
		skel.init(_settings.skel);

	// jQuery
		jQuery(function() {

			var $window = $(window),
				$body = $('body'),
				$header = $('#header'),
				$all = $body.add($header),
				sectionTransitionState = false;

			// Disable animations/transitions until everything's loaded
				$all
					.addClass('loading')
					.fadeTo(0, 0.0001);
				
				$window.load(function() {
					window.setTimeout(function() {
						$all
							.fadeTo(_settings.fadeInSpeed, 1, function() {
								$body.removeClass('loading');
								$all.fadeTo(0, 1);
							});
					}, _settings.fadeInSpeed);
				});
				
			// Settings overrides
			
				// IE <= 9?
					if (skel.vars.IEVersion <= 9)
						_settings.useSectionTransitions = false;
			
				// Touch?
					if (skel.vars.isTouch) {
					
						// Disable section transitions
							_settings.useSectionTransitions = false;
							
						// Turn on touch mode
							$body.addClass('touch');
					
					}
					
				// Mobile?
					if (skel.isActive('mobile')) {
					
						// Reduce poptrox windowMargin
							_settings.poptrox.windowMargin = 5;
					
					}

			// Forms
				if (skel.vars.IEVersion < 10)
					$('form').formerize();

			// Gallery
				$('.gallery').poptrox(_settings.poptrox);

			// Events
			
				// State change (skel)
					skel.onStateChange(function() {

						// Force touch mode if we're in mobile
							if (skel.isActive('mobile'))
								$body.addClass('touch');
							else if (!skel.vars.isTouch)
								$body.removeClass('touch');
					
						// Section transitions
							if (_settings.useSectionTransitions) {
							
								if (!skel.isActive('mobile')) {
									
									if (!sectionTransitionState) {
									
										sectionTransitionState = true;
										
										// Generic sections
											$('.main.style1')
												.scrollwatch({
													delay:		50,
													range:		0.25,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});

											$('.main.style2')
												.scrollwatch({
													delay:		50,
													range:		0.5,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});
									
										// Work
											$('#work')
												.scrollwatch({
													delay:		25,
													range:		0.6,
													anchor:		'center',
													init:		function(t) { t.find('.row.images').addClass('inactive'); },
													on:			function(t) {
																	var	rows = t.find('.row.images'),
																		length = rows.length,
																		n = 0;
																	
																	rows.each(function() {
																		var row = $(this);
																		window.setTimeout(function() {
																			row.removeClass('inactive');
																		}, 100 * (length - n++));
																	});
																},
													off:		function(t) {
																	var	rows = t.find('.row.images'),
																		length = rows.length,
																		n = 0;
																	
																	rows.each(function() {
																		var row = $(this);
																		window.setTimeout(function() {
																			row.addClass('inactive');
																		}, 100 * (length - n++));
																	});
																}
												});

										// Contact
											$('#contact')
												.scrollwatch({
													delay:		25,
													range:		0.5,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});

										// Force scroll event
											window.setTimeout(function() {
												$window
													.trigger('resize')
													.trigger('scroll');
											}, 0);
												
									}

								}
								else {

									sectionTransitionState = false;

									// Generic sections
										$('.main.style1')
											.unscrollwatch()
											.removeClass('inactive');
										
										$('.main.style2')
											.unscrollwatch()
											.removeClass('inactive');
								
									// Work
										$('#work')
											.unscrollwatch()
											.find('.row.images').removeClass('inactive');

									// Contact
										$('#contact')
											.unscrollwatch()
											.removeClass('inactive');
								
								}

							}
						
					});

				// Resize
					$window.resize(function() {

						// Disable animations/transitions
							$body.addClass('loading');

						window.setTimeout(function() {

							// Update scrolly links
								$('a[href^=#]').scrolly(1500, $header.outerHeight() - 1);

							// Resize fullscreen elements
								if (_settings.useFullScreen
								&&	!skel.isActive('mobile')) {
									$('.fullscreen').each(function() {
									
										var $t = $(this),
											$c = $t.children('.content'),
											x = Math.max(100, Math.round(($window.height() - $c.outerHeight() - $header.outerHeight()) / 2) + 1);

										$t
											.css('padding-top', x)
											.css('padding-bottom', x);
									
									});
								}
								else
									$('.fullscreen')
										.css('padding-top', '')
										.css('padding-bottom', '');
								
								
							// Re-enable animations/transitions
								window.setTimeout(function() {
									$body.removeClass('loading');
									$window.trigger('scroll');
								}, 1000);

						}, 100);
					
					});
					
			// Trigger events on load
				$window.load(function() {
					$window
						.trigger('resize')
						.trigger('scroll');
				});

		});
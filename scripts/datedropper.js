jQuery.easing._dd_easing = function(d, a, i, s, e) {
	return -s * ((a = a / e - 1) * a * a * a - 1) + i
}, function(d) {
	d.fn.dateDropper = function(a) {
		return d(this).each(function() {
			if (d(this).is('input') && 'text' == d(this).attr('type')) {
				var i, s, e, r, t = (new Date).getFullYear(),
					n = (new Date).getDate(),
					o = (new Date).getMonth(),
					l = d('.dd-w').length,
					u = '<div class="dd-w dd-init" id="dd-w-' + l + '"><div class="dd-o"></div><div class="dd-c"><div class="dd-w-c"><div class="dd-b dd-m"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-b dd-d"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-b dd-y"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-s-b dd-s-b-m dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-d dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-y dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-s-y dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b-s"><i class="dd-icon-close" ></i></div><div class="dd-b dd-sub-y"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-s"><a><i class="dd-icon-check" ></i></a></div></div></div></div>';
				d('body').append(u);
				var c = d(this),
					f = d('#dd-w-' + l),
					b = function(d) {
						return !(d % 4 || !(d % 100) && d % 400)
					},
					m = function(d) {
						return 10 > d ? '0' + d : d
					},
					p = d.extend({
						animate: !0,
						init_animation: 'fadein',
						format: 'Y-m-d',
						lang: 'en',
						lock: !1,
						maxYear: t,
						minYear: 1970,
						yearsRange: 10,
						dropPrimaryColor: '#01CEFF',
						dropTextColor: '#333333',
						dropBackgroundColor: '#FFFFFF',
						dropBorder: '1px solid #08C',
						dropBorderRadius: 8,
						dropShadow: '0 0 10px 0 rgba(0, 136, 204, 0.45)',
						dropWidth: 124,
						dropTextWeight: 'bold'
					}, a),
					h = null,
					v = !1,
					g = function(d, a) {
						var i = !1;
						'#' == d[0] && (d = d.slice(1), i = !0);
						var s = parseInt(d, 16),
							e = (s >> 16) + a;
						e > 255 ? e = 255 : 0 > e && (e = 0);
						var r = (s >> 8 & 255) + a;
						r > 255 ? r = 255 : 0 > r && (r = 0);
						var t = (255 & s) + a;
						return t > 255 ? t = 255 : 0 > t && (t = 0), (i ? '#' : '') + (t | r << 8 | e << 16).toString(16)
					};
				switch (d('<style>#dd-w-' + l + ' { font-weight: ' + p.dropTextWeight + '; } #dd-w-' + l + ' .dd-w-c,#dd-w-' + l + ' .dd-ul li,#dd-w-' + l + ' .dd-s-b-ul ul { width:' + p.dropWidth + 'px; } #dd-w-' + l + ' .dd-w-c{color:' + p.dropTextColor + ';background:' + p.dropBackgroundColor + ';border:' + p.dropBorder + ';box-shadow:' + p.dropShadow + ';border-radius:' + p.dropBorderRadius + 'px}#dd-w-' + l + ' .dd-w-c,#dd-w-' + l + ' .dd-s-b{background:' + p.dropBackgroundColor + '}#dd-w-' + l + ' .dd-sun,#dd-w-' + l + ' .dd-s-b-ul li.dd-on{color:' + p.dropPrimaryColor + '}#dd-w-' + l + ' .dd-c .dd-s,#dd-w-' + l + ' .dd-s-b-s,#dd-w-' + l + ' .dd-s-b-sub-y,#dd-w-' + l + ' .dd-sub-y{background:' + p.dropPrimaryColor + ';color:' + p.dropBackgroundColor + '}#dd-w-' + l + ' .dd-c .dd-s a,#dd-w-' + l + ' .dd-c .dd-s a:hover{color:' + p.dropBackgroundColor + '}#dd-w-' + l + ' .dd-c:after{border-left:' + p.dropBorder + ';border-top:' + p.dropBorder + '}#dd-w-' + l + '.dd-bottom .dd-c:after{background:' + p.dropBackgroundColor + '}#dd-w-' + l + '.dd-top .dd-c:after{background:' + p.dropPrimaryColor + '}#dd-w-' + l + ' .dd-n,#dd-w-' + l + ' .dd-sun{color:' + p.dropPrimaryColor + '}#dd-w-' + l + ' .dd-sub-y .dd-n{color:' + p.dropBackgroundColor + '} #dd-w-' + l + ' .dd-c .dd-s:hover,#dd-w-' + l + ' .dd-s-b-s:hover { background:' + g(p.dropPrimaryColor, -20) + '; }</style>').appendTo('head'), p.lang) {
				case 'ens':
					var y = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
						k = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					break;
				default:
					var y = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
						k = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
				}
				var w = function() {
						f.find('.dd-d li,.dd-s-b li').show(), b(e) && 2 == i ? (f.find('.dd-d ul').width(29 * p.dropWidth), (30 == s || 31 == s) && (s = 29), f.find('li[data-id=30],li[data-id=31]').hide()) : b(e) || 2 != i ? 4 == i || 6 == i || 9 == i || 11 == i ? (f.find('.dd-d ul').width(30 * p.dropWidth), 31 == s && (s = 30), f.find('li[data-id=31]').hide()) : f.find('.dd-d ul').width(31 * p.dropWidth) : (f.find('.dd-d ul').width(28 * p.dropWidth), (29 == s || 30 == s || 31 == s) && (s = 28), f.find('li[data-id=29],li[data-id=30],li[data-id=31]').hide()), f.find('.dd-d li').each(function(a, s) {
							var r = d(this).attr('data-id'),
								r = new Date(i + '/' + r + '/' + e),
								r = r.getDay();
							0 == r || 6 == r ? d(this).addClass('dd-sun') : d(this).removeClass('dd-sun'), d(this).find('span').html(k[r])
						}), f.find('.dd-s-b-d li').each(function(a, s) {
							var r = d(this).attr('data-id'),
								r = new Date(i + '/' + r + '/' + e),
								r = r.getDay();
							0 == r || 6 == r ? d(this).addClass('dd-sun') : d(this).removeClass('dd-sun'), d(this).find('span').html(k[r].substr(0, 3))
						}), f.find('.dd-s-b li').removeClass('dd-on'), f.find('.dd-s-b-d li[data-id="' + s + '"],.dd-s-b-m li[data-id="' + i + '"],.dd-s-b-s-y li[data-id="' + e + '"],.dd-s-b-y li[data-id="' + r + '"]').addClass('dd-on'), p.animate ? f.hasClass('dd-init') ? (f.find('.dd-m .dd-ul').animate({
							scrollLeft: f.find('.dd-m li[data-id="' + i + '"]').index() * p.dropWidth
						}, 1200, 'swing'), setTimeout(function() {
							f.find('.dd-d .dd-ul').animate({
								scrollLeft: f.find('.dd-d li[data-id="' + s + '"]').index() * p.dropWidth
							}, 1200, 'swing'), setTimeout(function() {
								f.find('.dd-y .dd-ul').animate({
									scrollLeft: f.find('.dd-y li[data-id="' + e + '"]').index() * p.dropWidth
								}, 1200, 'swing', function() {
									v = !0, f.removeClass('dd-init')
								})
							}, 200)
						}, 400)) : (f.find('.dd-d .dd-ul').stop().animate({
							scrollLeft: f.find('.dd-d li[data-id="' + s + '"]').index() * p.dropWidth
						}, 260), f.find('.dd-m .dd-ul').stop().animate({
							scrollLeft: f.find('.dd-m li[data-id="' + i + '"]').index() * p.dropWidth
						}, 260), f.find('.dd-y .dd-ul').stop().animate({
							scrollLeft: f.find('.dd-y li[data-id="' + e + '"]').index() * p.dropWidth
						}, 260), f.find('.dd-sub-y .dd-ul').stop().animate({
							scrollLeft: f.find('.dd-sub-y li[data-id="' + r + '"]').index() * p.dropWidth
						}, 260)) : (setTimeout(function() {
							f.find('.dd-d .dd-ul').scrollLeft(f.find('.dd-d li[data-id="' + s + '"]').index() * p.dropWidth), f.find('.dd-m .dd-ul').scrollLeft(f.find('.dd-m li[data-id="' + i + '"]').index() * p.dropWidth), f.find('.dd-y .dd-ul').scrollLeft(f.find('.dd-y li[data-id="' + e + '"]').index() * p.dropWidth), f.find('.dd-sub-y .dd-ul').scrollLeft(f.find('.dd-sub-y li[data-id="' + r + '"]').index() * p.dropWidth)
						}, 1), f.hasClass('dd-init') && (f.removeClass('dd-init'), v = !0)), D(r)
					},
					C = function() {
						f.addClass('dd-bottom'), f.find('.dd-c').css({
							top: c.offset().top + c.innerHeight() - 6,
							left: c.offset().left + (c.innerWidth() / 2 - p.dropWidth / 2)
						}).addClass('dd-' + p.init_animation)
					},
					M = function() {
						f.find('.dd-c').addClass('dd-alert').removeClass('dd-' + p.init_animation), setTimeout(function() {
							f.find('.dd-c').removeClass('dd-alert')
						}, 500)
					},
					x = function() {
						if (p.lock) {
							var d = Date.parse(t + '-' + (o + 1) + '-' + n) / 1e3,
								a = Date.parse(e + '-' + i + '-' + s) / 1e3;
							if ('from' == p.lock) {
								if (d > a) return M(), !1
							} else if (a > d) return M(), !1
						}
						var r = new Date(i + '/' + s + '/' + e),
							r = r.getDay(),
							l = p.format.replace(/\b(d)\b/g, m(s)).replace(/\b(m)\b/g, m(i)).replace(/\b(Y)\b/g, e).replace(/\b(D)\b/g, k[r].substr(0, 3)).replace(/\b(l)\b/g, k[r]).replace(/\b(F)\b/g, y[i - 1]).replace(/\b(M)\b/g, y[i - 1].substr(0, 3)).replace(/\b(n)\b/g, i).replace(/\b(j)\b/g, s);
						c.val(l), f.find('.dd-c').addClass('dd-fadeout').removeClass('dd-' + p.init_animation), h = setTimeout(function() {
							f.hide(), f.find('.dd-c').removeClass('dd-fadeout')
						}, 400), c.change()
					},
					D = function(a) {
						f.find('.dd-s-b-s-y ul').empty();
						var i = parseInt(a),
							s = i + (p.yearsRange - 1);
						s > p.maxYear && (s = p.maxYear);
						for (var t = i; s >= t; t++) {
							if (t % p.yearsRange == 0) var n = t;
							f.find('.dd-s-b-s-y ul').append('<li data-id="' + t + '" data-filter="' + n + '">' + t + '</li>')
						}
						f.find('.dd-s-b-s-y ul').append('<div class="dd-clear"></div>'), r = parseInt(a), f.find('.dd-sub-y .dd-ul').scrollLeft(f.find('.dd-sub-y li[data-id="' + r + '"]').index() * p.dropWidth), f.find('.dd-s-b-s-y li').each(function(a, i) {
							d(this).click(function() {
								f.find('.dd-s-b-s-y li').removeClass('dd-on'), d(this).addClass('dd-on'), e = parseInt(d(this).attr('data-id')), f.find('.dd-s-b-y,.dd-s-b-s-y').removeClass('dd-show'), f.find('.dd-s-b-s,.dd-sub-y').hide(), w()
							})
						})
					},
					j = function() {
						f.find('.dd-s-b').each(function(a, e) {
							var r = d(this),
								t = 0;
							if (r.hasClass('dd-s-b-m') || r.hasClass('dd-s-b-d')) {
								if (r.hasClass('dd-s-b-m')) for (var n = 12, o = t; n > o; o++) r.find('ul').append('<li data-id="' + (o + 1) + '">' + y[o].substr(0, 3) + '<span>' + m(o + 1) + '</span></li>');
								if (r.hasClass('dd-s-b-d')) for (var n = 31, o = t; n > o; o++) r.find('ul').append('<li data-id="' + (o + 1) + '">' + m(o + 1) + '<span></span></li>')
							}
							if (r.hasClass('dd-s-b-y')) for (var o = p.minYear; o <= p.maxYear; o++) o % p.yearsRange == 0 && r.find('ul').append('<li data-id="' + o + '">' + o + '</li>');
							r.find('ul').append('<div class="dd-clear"></div>'), r.find('ul li').click(function() {
								(r.hasClass('dd-s-b-m') || r.hasClass('dd-s-b-d')) && (r.hasClass('dd-s-b-m') && (i = parseInt(d(this).attr('data-id'))), r.hasClass('dd-s-b-d') && (s = parseInt(d(this).attr('data-id'))), w(), r.removeClass('dd-show'), f.find('.dd-s-b-s').hide()), r.hasClass('dd-s-b-y') && (f.find('.dd-sub-y').show(), D(d(this).attr('data-id')), f.find('.dd-s-b-s-y').addClass('dd-show'))
							});
							var l = 0,
								u = !1;
							r.on('mousewheel DOMMouseScroll', function(d) {
								u = !0, (d.originalEvent.wheelDeltaY < 0 || d.originalEvent.detail > 0) && (l = r.scrollTop() + 100), (d.originalEvent.wheelDeltaY > 0 || d.originalEvent.detail < 0) && (l = r.scrollTop() - 100), r.stop().animate({
									scrollTop: l
								}, 600, '_dd_easing', function() {
									u = !1
								})
							}).on('scroll', function() {
								u || (l = r.scrollTop())
							})
						}), f.find('.dd-b').each(function(a, t) {
							var n, o = d(this),
								l = 0;
							if (o.hasClass('dd-m')) {
								for (var u = 0; 12 > u; u++) o.find('ul').append('<li data-id="' + (u + 1) + '">' + y[u].substr(0, 3) + '</li>');
								o.find('li').click(function() {
									return 'm' == p.format || 'n' == p.format || 'F' == p.format || 'M' == p.format ? !1 : void f.find('.dd-s-b-m').addClass('dd-show')
								})
							}
							if (o.hasClass('dd-d')) {
								for (var u = 1; 31 >= u; u++) o.find('ul').append('<li data-id="' + u + '"><strong>' + m(u) + '</strong><br><span></span></li>');
								o.find('li').click(function() {
									f.find('.dd-s-b-d').addClass('dd-show')
								})
							}
							if (o.hasClass('dd-y')) {
								for (var u = p.minYear; u <= p.maxYear; u++) {
									var c;
									u % p.yearsRange == 0 && (c = 'data-filter="' + u + '"'), o.find('ul').append('<li data-id="' + u + '" ' + c + '>' + u + '</li>')
								}
								o.find('li').click(function() {
									return 'Y' == p.format ? !1 : void f.find('.dd-s-b-y').addClass('dd-show')
								})
							}
							if (o.hasClass('dd-sub-y')) for (var u = p.minYear; u <= p.maxYear; u++) u % p.yearsRange == 0 && o.find('ul').append('<li data-id="' + u + '">' + u + '</li>');
							o.find('ul').width(o.find('li').length * p.dropWidth), o.find('.dd-n').click(function() {
								clearInterval(n);
								var a, t, l;
								o.hasClass('dd-y') && (t = e), o.hasClass('dd-m') && (t = i), o.hasClass('dd-d') && (t = s), o.hasClass('dd-sub-y') && (t = r), d(this).hasClass('dd-n-left') ? (a = o.find('li[data-id="' + t + '"]').prev('li'), l = a.length && a.is(':visible') ? parseInt(a.attr('data-id')) : parseInt(o.find('li:visible:last').attr('data-id'))) : (a = o.find('li[data-id="' + t + '"]').next('li'), l = a.length && a.is(':visible') ? parseInt(a.attr('data-id')) : parseInt(o.find('li:first').attr('data-id'))), o.hasClass('dd-y') && (e = l), o.hasClass('dd-m') && (i = l), o.hasClass('dd-d') && (s = l), o.hasClass('dd-sub-y') && (r = l), w()
							});
							var b = function() {
									if (v) {
										l = Math.round(o.find('.dd-ul').scrollLeft() / p.dropWidth);
										var d = parseInt(o.find('li').eq(l).attr('data-id'));
										o.hasClass('dd-y') && (e = d), o.hasClass('dd-m') && (i = d), o.hasClass('dd-d') && (s = d), o.hasClass('dd-sub-y') && (r = d)
									}
								};
							o.find('.dd-ul').on('scroll', function() {
								b()
							});
							var h = !1;
							o.find('.dd-ul').on('mousedown touchstart', function() {
								h || (h = !0), clearInterval(n), d(window).on('mouseup touchend touchmove', function() {
									h && (clearInterval(n), n = setTimeout(function() {
										w(), h = !1
									}, 780))
								})
							}), 'Y' == p.format && f.find('.dd-m,.dd-d').hide(), ('m' == p.format || 'n' == p.format || 'F' == p.format || 'M' == p.format) && f.find('.dd-y,.dd-d').hide()
						}), f.find('.dd-b li').click(function() {
							return 'm' == p.format || 'n' == p.format || 'F' == p.format || 'M' == p.format || 'Y' == p.format ? !1 : void f.find('.dd-s-b-s').show()
						}), f.find('.dd-s-b-s').click(function() {
							f.find('.dd-s-b').removeClass('dd-show'), f.find('.dd-s-b-s').hide()
						}), f.find('.dd-s').click(function() {
							x()
						}), f.find('.dd-o').click(function() {
							f.find('.dd-c').addClass('dd-fadeout').removeClass('dd-' + p.init_animation), h = setTimeout(function() {
								f.hide(), f.find('.dd-c').removeClass('dd-fadeout')
							}, 400)
						}), w()
					},
					z = function() {
						clearInterval(h), f.hasClass('dd-init') && (c.attr({
							readonly: 'readonly'
						}).blur(), i = o + 1, s = n, e = t, parseInt(c.attr('data-d')) && parseInt(c.attr('data-d')) <= 31 && (s = parseInt(c.attr('data-d'))), parseInt(c.attr('data-m')) && parseInt(c.attr('data-m')) <= 11 && (i = parseInt(c.attr('data-m')) + 1), parseInt(c.attr('data-y')) && 4 == c.attr('data-y').length && (e = parseInt(c.attr('data-y'))), e > p.maxYear && (p.maxYear = e), e < p.minYear && (p.minYear = e), j()), f.show(), C()
					};
				c.click(function() {
					z()
				}), c.bind('focusin focus', function(d) {
					d.preventDefault()
				}), d(window).resize(function() {
					C()
				})
			}
		})
	}
}(jQuery);
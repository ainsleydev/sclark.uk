/*! modernizr 3.13.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-svg-svgfilters-touchevents-webglextensions-webp-setclasses !*/
!(function (e, n, t, o) {
	function a(e, n) {
		return typeof e === n;
	}
	function r(e) {
		var n = p.className,
			t = Modernizr._config.classPrefix || "";
		if ((g && (n = n.baseVal), Modernizr._config.enableJSClass)) {
			var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
			n = n.replace(o, "$1" + t + "js$2");
		}
		Modernizr._config.enableClasses &&
			(e.length > 0 && (n += " " + t + e.join(" " + t)),
			g ? (p.className.baseVal = n) : (p.className = n));
	}
	function i() {
		return "function" != typeof t.createElement
			? t.createElement(arguments[0])
			: g
				? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
				: t.createElement.apply(t, arguments);
	}
	function s() {
		var e = t.body;
		return e || ((e = i(g ? "svg" : "body")), (e.fake = !0)), e;
	}
	function A(e, n, o, a) {
		var r,
			A,
			l,
			u,
			c = "modernizr",
			f = i("div"),
			d = s();
		if (parseInt(o, 10))
			for (; o--; ) (l = i("div")), (l.id = a ? a[o] : c + (o + 1)), f.appendChild(l);
		return (
			(r = i("style")),
			(r.type = "text/css"),
			(r.id = "s" + c),
			(d.fake ? d : f).appendChild(r),
			d.appendChild(f),
			r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(t.createTextNode(e)),
			(f.id = c),
			d.fake &&
				((d.style.background = ""),
				(d.style.overflow = "hidden"),
				(u = p.style.overflow),
				(p.style.overflow = "hidden"),
				p.appendChild(d)),
			(A = n(f, e)),
			d.fake && d.parentNode
				? (d.parentNode.removeChild(d), (p.style.overflow = u), p.offsetHeight)
				: f.parentNode.removeChild(f),
			!!A
		);
	}
	function l(e, t, o) {
		var a;
		if ("getComputedStyle" in n) {
			a = getComputedStyle.call(n, e, t);
			var r = n.console;
			if (null !== a) o && (a = a.getPropertyValue(o));
			else if (r) {
				var i = r.error ? "error" : "log";
				r[i].call(
					r,
					"getComputedStyle returning null, its possible modernizr test results are inaccurate",
				);
			}
		} else a = !t && e.currentStyle && e.currentStyle[o];
		return a;
	}
	function u(e, n) {
		if ("object" == typeof e) for (var t in e) m(e, t) && u(t, e[t]);
		else {
			e = e.toLowerCase();
			var o = e.split("."),
				a = Modernizr[o[0]];
			if ((2 === o.length && (a = a[o[1]]), void 0 !== a)) return Modernizr;
			(n = "function" == typeof n ? n() : n),
				1 === o.length
					? (Modernizr[o[0]] = n)
					: (!Modernizr[o[0]] ||
							Modernizr[o[0]] instanceof Boolean ||
							(Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
						(Modernizr[o[0]][o[1]] = n)),
				r([(n && !1 !== n ? "" : "no-") + o.join("-")]),
				Modernizr._trigger(e, n);
		}
		return Modernizr;
	}
	var c = [],
		f = {
			_version: "3.13.0",
			_config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
			_q: [],
			on: function (e, n) {
				var t = this;
				setTimeout(function () {
					n(t[e]);
				}, 0);
			},
			addTest: function (e, n, t) {
				c.push({ name: e, fn: n, options: t });
			},
			addAsyncTest: function (e) {
				c.push({ name: null, fn: e });
			},
		},
		Modernizr = function () {};
	(Modernizr.prototype = f), (Modernizr = new Modernizr());
	var d = [],
		p = t.documentElement,
		g = "svg" === p.nodeName.toLowerCase();
	Modernizr.addTest("canvas", function () {
		var e = i("canvas");
		return !(!e.getContext || !e.getContext("2d"));
	}),
		Modernizr.addTest(
			"svg",
			!!t.createElementNS &&
				!!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		);
	var h = f._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
	f._prefixes = h;
	var v = (function () {
		var e = n.matchMedia || n.msMatchMedia;
		return e
			? function (n) {
					var t = e(n);
					return (t && t.matches) || !1;
				}
			: function (e) {
					var n = !1;
					return (
						A("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
							n = "absolute" === l(e, null, "position");
						}),
						n
					);
				};
	})();
	(f.mq = v),
		Modernizr.addTest("touchevents", function () {
			if (
				"ontouchstart" in n ||
				n.TouchEvent ||
				(n.DocumentTouch && t instanceof DocumentTouch)
			)
				return !0;
			var e = ["(", h.join("touch-enabled),("), "heartz", ")"].join("");
			return v(e);
		});
	var m;
	!(function () {
		var e = {}.hasOwnProperty;
		m =
			a(e, "undefined") || a(e.call, "undefined")
				? function (e, n) {
						return n in e && a(e.constructor.prototype[n], "undefined");
					}
				: function (n, t) {
						return e.call(n, t);
					};
	})(),
		(f._l = {}),
		(f.on = function (e, n) {
			this._l[e] || (this._l[e] = []),
				this._l[e].push(n),
				Modernizr.hasOwnProperty(e) &&
					setTimeout(function () {
						Modernizr._trigger(e, Modernizr[e]);
					}, 0);
		}),
		(f._trigger = function (e, n) {
			if (this._l[e]) {
				var t = this._l[e];
				setTimeout(function () {
					var e;
					for (e = 0; e < t.length; e++) (0, t[e])(n);
				}, 0),
					delete this._l[e];
			}
		}),
		Modernizr._q.push(function () {
			f.addTest = u;
		}),
		Modernizr.addAsyncTest(function () {
			function e(e, n, t) {
				function o(n) {
					var o = !(!n || "load" !== n.type) && 1 === a.width;
					u(e, "webp" === e && o ? new Boolean(o) : o), t && t(n);
				}
				var a = new Image();
				(a.onerror = o), (a.onload = o), (a.src = n);
			}
			var n = [
					{
						uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
						name: "webp",
					},
					{
						uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
						name: "webp.alpha",
					},
					{
						uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
						name: "webp.animation",
					},
					{
						uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
						name: "webp.lossless",
					},
				],
				t = n.shift();
			e(t.name, t.uri, function (t) {
				if (t && "load" === t.type)
					for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri);
			});
		}),
		Modernizr.addTest("svgfilters", function () {
			var e = !1;
			try {
				e =
					"SVGFEColorMatrixElement" in n &&
					2 === SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
			} catch (e) {}
			return e;
		}),
		Modernizr.addTest("webgl", function () {
			return "WebGLRenderingContext" in n;
		}),
		Modernizr.addAsyncTest(function () {
			if (((Modernizr.webglextensions = !1), Modernizr.webgl)) {
				var e, n, t;
				try {
					(e = i("canvas")),
						(n = e.getContext("webgl") || e.getContext("experimental-webgl")),
						(t = n.getSupportedExtensions());
				} catch (e) {
					return;
				}
				void 0 !== n && (Modernizr.webglextensions = new Boolean(!0));
				for (var o = -1, a = t.length; ++o < a; ) Modernizr.webglextensions[t[o]] = !0;
				e = void 0;
			}
		}),
		(function () {
			var e, n, t, o, r, i, s;
			for (var A in c)
				if (c.hasOwnProperty(A)) {
					if (
						((e = []),
						(n = c[A]),
						n.name &&
							(e.push(n.name.toLowerCase()),
							n.options && n.options.aliases && n.options.aliases.length))
					)
						for (t = 0; t < n.options.aliases.length; t++)
							e.push(n.options.aliases[t].toLowerCase());
					for (o = a(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++)
						(i = e[r]),
							(s = i.split(".")),
							1 === s.length
								? (Modernizr[s[0]] = o)
								: ((Modernizr[s[0]] &&
										(!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean)) ||
										(Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
									(Modernizr[s[0]][s[1]] = o)),
							d.push((o ? "" : "no-") + s.join("-"));
				}
		})(),
		r(d),
		delete f.addTest,
		delete f.addAsyncTest;
	for (var w = 0; w < Modernizr._q.length; w++) Modernizr._q[w]();
	e.Modernizr = Modernizr;
})(window, window, document);

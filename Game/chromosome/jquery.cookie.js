(function(c) {
	"function" === typeof define && define.amd ? define(["jquery"], c) : "object" === typeof exports ? c(require("jquery")) : c(jQuery)
})(function(c) {
	function n(b) {
		b = f.json ? JSON.stringify(b) : String(b);
		return f.raw ? b : encodeURIComponent(b)
	}

	function m(b, e) {
		var a;
		if(f.raw) a = b;
		else a: {
			var d = b;0 === d.indexOf('"') && (d = d.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
			try {
				d = decodeURIComponent(d.replace(l, " "));
				a = f.json ? JSON.parse(d) : d;
				break a
			} catch(g) {}
			a = void 0
		}
		return c.isFunction(e) ? e(a) : a
	}
	var l = /\+/g,
		f =
		c.cookie = function(b, e, a) {
			if(void 0 !== e && !c.isFunction(e)) {
				a = c.extend({}, f.defaults, a);
				if("number" === typeof a.expires) {
					var d = a.expires,
						g = a.expires = new Date;
					g.setTime(+g + 864E5 * d)
				}
				return document.cookie = [f.raw ? b : encodeURIComponent(b), "=", n(e), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
			}
			a = b ? void 0 : {};
			for(var d = document.cookie ? document.cookie.split("; ") : [], g = 0, l = d.length; g < l; g++) {
				var h = d[g].split("="),
					k;
				k = h.shift();
				k = f.raw ? k : decodeURIComponent(k);
				h = h.join("=");
				if(b && b === k) {
					a = m(h, e);
					break
				}
				b || void 0 === (h = m(h)) || (a[k] = h)
			}
			return a
		};
	f.defaults = {};
	c.removeCookie = function(b, e) {
		if(void 0 === c.cookie(b)) return !1;
		c.cookie(b, "", c.extend({}, e, {
			expires: -1
		}));
		return !c.cookie(b)
	}
});
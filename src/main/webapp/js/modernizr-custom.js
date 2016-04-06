/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-input !*/
!function (e, n, t) {
    function s(e, n) {
        return typeof e === n
    }

    function a() {
        var e, n, t, a, o, i, f;
        for (var c in r)if (r.hasOwnProperty(c)) {
            if (e = [], n = r[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase());
            for (a = s(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++)i = e[o], f = i.split("."), 1 === f.length ? Modernizr[f[0]] = a : (!Modernizr[f[0]] || Modernizr[f[0]]instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), Modernizr[f[0]][f[1]] = a), l.push((a ? "" : "no-") + f.join("-"))
        }
    }

    function o(e) {
        var n = c.className, t = Modernizr._config.classPrefix || "";
        if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var s = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(s, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), u ? c.className.baseVal = n : c.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : u ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    var l = [], r = [], f = {
        _version: "3.2.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (e, n) {
            var t = this;
            setTimeout(function () {
                n(t[e])
            }, 0)
        },
        addTest: function (e, n, t) {
            r.push({name: e, fn: n, options: t})
        },
        addAsyncTest: function (e) {
            r.push({name: null, fn: e})
        }
    }, Modernizr = function () {
    };
    Modernizr.prototype = f, Modernizr = new Modernizr;
    var c = n.documentElement, u = "svg" === c.nodeName.toLowerCase(), p = i("input"), m = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "), d = {};
    Modernizr.input = function (n) {
        for (var t = 0, s = n.length; s > t; t++)d[n[t]] = !!(n[t]in p);
        return d.list && (d.list = !(!i("datalist") || !e.HTMLDataListElement)), d
    }(m), a(), o(l), delete f.addTest, delete f.addAsyncTest;
    for (var g = 0; g < Modernizr._q.length; g++)Modernizr._q[g]();
    e.Modernizr = Modernizr
}(window, document);
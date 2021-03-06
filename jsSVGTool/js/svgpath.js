SVGPath = function() {
    function p(a) {
        var b = new q;
        b.t = a.t;
        b.x = 96 > a.t.charCodeAt(0) ? g(a.x) : g(a.x - a.px);
        b.y = 96 > a.t.charCodeAt(0) ? g(a.y) : g(a.y - a.py);
        b.px = g(a.px);
        b.py = g(a.py);
        b.x1 = void 0 == a.x1 ? void 0 : 96 > a.t.charCodeAt(0) ? g(a.x1) : g(a.x1 - a.px);
        b.y1 = void 0 == a.y1 ? void 0 : 96 > a.t.charCodeAt(0) ? g(a.y1) : g(a.y1 - a.py);
        b.x2 = void 0 == a.x2 ? void 0 : 96 > a.t.charCodeAt(0) ? g(a.x2) : g(a.x2 - a.px);
        b.y2 = void 0 == a.y2 ? void 0 : 96 > a.t.charCodeAt(0) ? g(a.y2) : g(a.y2 - a.py);
        b.r1 = void 0 == a.r1 ? void 0 : g(a.r1);
        b.r2 = void 0 == a.r1 ? void 0 : g(a.r2);
        b.ar = void 0 == a.ar ? void 0 : g(a.ar);
        b.af = a.af;
        b.sf = a.sf;
        b.info = a.info;
        "M" == a.t && (b.info += "m " + g(a.x - a.px) + " " + g(a.y - a.py));
        "m" == a.t && (b.info += "M " + g(a.x) + " " + g(a.y));
        return b
    }

    function g(a) {
        if (0 > m || 0 === a % 1) return a;
        if (0 == m) return Math.round(a);
        var b = Math.pow(10, m);
        return Math.round(a * b) / b
    }

    function n(a, b, c, e, h, l) {
        return [l * (a - c) - h * (b - e) + c, h * (a - c) + l * (b - e) + e]
    }
    var m = -1,
        b = [],
        q = function() {
            this.t = "";
            this.sf = this.af = this.ar = this.r2 = this.r1 = this.y2 = this.x2 = this.y1 = this.x1 = this.py = this.px = this.y = this.x = void 0;
            this.info =
                ""
        };
    this["import"] = function(a) {
        a = a.replace(/\s/g, " ");
        a = a.trim();
        a = a.replace(/,/g, " ");
        a = a.replace(/([A-Za-z])([A-Za-z])/g, "$1 $2");
        a = a.replace(/([A-Za-z])(\d)/g, "$1 $2");
        a = a.replace(/([A-Za-z])(\.)/g, "$1 .");
        a = a.replace(/([A-Za-z])(-)/g, "$1 -");
        a = a.replace(/(\d)([A-Za-z])/g, "$1 $2");
        a = a.replace(/(\d)(-)/g, "$1 -");
        for (var d = /((?:-?[\d]*)\.\d+)((?:\.\d+)+)/g; d.test(a);) a = a.replace(d, "$1 $2");
        for (;
            /  /.test(a);) a = a.replace(/  /g, " ");
        a = a.split(" ");
        var d = "",
            c = 0,
            e = 0,
            h = 0,
            l = 0,
            g = 0,
            k = 0;
        for (b = []; k < a.length;) {
            var f =
                new q;
            if (64 < a[k].charCodeAt(0)) f.t = a[k++];
            else {
                if ("" == d) break;
                f.t = "M" == d ? "L" : "m" == d ? "l" : d
            }
            d = f.t;
            switch (f.t) {
                case "Z":
                case "z":
                    f.x = h;
                    f.y = l;
                    break;
                case "M":
                case "L":
                case "H":
                case "V":
                case "T":
                    f.x = "V" == f.t ? c : Number(a[k++]);
                    f.y = "H" == f.t ? e : Number(a[k++]);
                    h = "M" == f.t ? f.x : h;
                    l = "M" == f.t ? f.y : l;
                    break;
                case "m":
                case "l":
                case "h":
                case "v":
                case "t":
                    f.x = "v" == f.t ? c : c + Number(a[k++]);
                    f.y = "h" == f.t ? e : e + Number(a[k++]);
                    h = "m" == f.t ? f.x : h;
                    l = "m" == f.t ? f.y : l;
                    break;
                case "A":
                case "a":
                    f.r1 = Number(a[k++]);
                    f.r2 = Number(a[k++]);
                    f.ar =
                        Number(a[k++]);
                    f.af = Number(a[k++]);
                    f.sf = Number(a[k++]);
                    f.x = "A" == f.t ? Number(a[k++]) : c + Number(a[k++]);
                    f.y = "A" == f.t ? Number(a[k++]) : e + Number(a[k++]);
                    break;
                case "C":
                case "Q":
                case "S":
                    f.x1 = "S" == f.t ? void 0 : Number(a[k++]);
                    f.y1 = "S" == f.t ? void 0 : Number(a[k++]);
                    f.x2 = "Q" == f.t ? void 0 : Number(a[k++]);
                    f.y2 = "Q" == f.t ? void 0 : Number(a[k++]);
                    f.x = Number(a[k++]);
                    f.y = Number(a[k++]);
                    break;
                case "c":
                case "q":
                case "s":
                    f.x1 = "s" == f.t ? void 0 : c + Number(a[k++]);
                    f.y1 = "s" == f.t ? void 0 : e + Number(a[k++]);
                    f.x2 = "q" == f.t ? void 0 : c + Number(a[k++]);
                    f.y2 = "q" == f.t ? void 0 : e + Number(a[k++]);
                    f.x = c + Number(a[k++]);
                    f.y = e + Number(a[k++]);
                    break;
                default:
                    k++
            }
            f.px = c;
            f.py = e;
            c = f.x;
            e = f.y;
            b[g++] = f
        }
    };
    this["export"] = function() {
        for (var a = "", d = "", c = 0; c < b.length; c++) {
            var e = p(b[c]);
            switch (e.t) {
                case "Z":
                case "z":
                    a += e.t;
                    break;
                case "M":
                case "m":
                    a += e.t + e.x + " " + e.y;
                    break;
                case "L":
                    a += d == e.t || "M" == d ? " " : "L";
                    a += e.x + " " + e.y;
                    break;
                case "l":
                    a += d == e.t || "m" == d ? " " : "l";
                    a += e.x + " " + e.y;
                    break;
                case "H":
                case "h":
                    a += d == e.t ? " " : e.t;
                    a += e.x;
                    break;
                case "V":
                case "v":
                    a += d == e.t ? " " : e.t;
                    a += e.y;
                    break;
                case "A":
                case "a":
                    a += d == e.t ? " " : e.t;
                    a += e.r1 + " " + e.r2 + " " + e.ar + " " + e.af + " " + e.sf + " " + e.x + " " + e.y;
                    break;
                case "C":
                case "c":
                    a += d == e.t ? " " : e.t;
                    a += e.x1 + " " + e.y1 + " " + e.x2 + " " + e.y2 + " " + e.x + " " + e.y;
                    break;
                case "Q":
                case "q":
                    a += d == e.t ? " " : e.t;
                    a += e.x1 + " " + e.y1 + " " + e.x + " " + e.y;
                    break;
                case "S":
                case "s":
                    a += d == e.t ? " " : e.t;
                    a += e.x2 + " " + e.y2 + " " + e.x + " " + e.y;
                    break;
                case "T":
                case "t":
                    a += d == e.t ? " " : e.t, a += e.x + " " + e.y
            }
            d = e.t
        }
        a = a.replace(/ -/g, "-");
        a = a.replace(/-0\./g, "-.");
        a = a.replace(/ 0\./g, " .");
        a = a.replace(/([A-Za-z])0\./g,
            "$1.");
        return a = a.replace(/(\.\d+) \./g, "$1.")
    };
    this.exportlist = function() {
        for (var a = [], d = 0; d < b.length; d++) a[d] = p(b[d]);
        return a
    };
    this.analyse = function(a) {
        a = Number(a);
        isNaN(a) && (a = 0);
        0 > a && (a = 0);
        for (var d = 0; d < b.length; d++) b[d].info = "";
        for (d = 0; d < b.length; d++) b[d].x == b[d].px && "L" == b[d].t.toUpperCase() ? b[d].t = "L" == b[d].t ? "V" : "v" : b[d].y == b[d].py && "L" == b[d].t.toUpperCase() && (b[d].t = "L" == b[d].t ? "H" : "h");
        for (var c = -1, d = 0; d < b.length - 1; d++) {
            var e = b[d].x - b[d].px,
                h = b[d].y - b[d].py;
            "M" == b[d].t.toUpperCase() && "M" ==
                b[d + 1].t.toUpperCase() && (b[d].info = "X", b[d + 1].px = 0 == d ? 0 : b[d - 1].x, b[d + 1].py = 0 == d ? 0 : b[d - 1].y);
            "Z" == b[d].t.toUpperCase() && "Z" == b[d + 1].t.toUpperCase() && (b[d].info = "X");
            "L" == b[d].t.toUpperCase() || "H" == b[d].t.toUpperCase() || "V" == b[d].t.toUpperCase() ? (e = Math.atan2(h, e), 0 > e && (e += 2 * Math.PI), e == c && (b[d - 1].info = "X"), c = e) : c = -1
        }
        "M" != b[0].t.toUpperCase() && (b[0].t = 96 > b[0].t.charCodeAt(0) ? "M" : "m");
        "M" == b[b.length - 1].t.toUpperCase() && (b[b.length - 1].info = "X");
        for (d = b.length; d--;) "X" == b[d].info && b.splice(d, 1);
        if (0 !=
            a)
            for (d = 0; d < b.length - 1; d++) "Z" != b[d].t.toUpperCase() && (e = b[d].x - b[d + 1].x, h = b[d].y - b[d + 1].y, c = Math.sqrt(e * e + h * h), c <= a && (b[d].info = "D " + c + " "))
    };
    this.absolute = function() {
        for (var a = 0; a < b.length; a++) b[a].t = b[a].t.toUpperCase()
    };
    this.relative = function() {
        for (var a = 0; a < b.length; a++) b[a].t = b[a].t.toLowerCase()
    };
    this.round = function(a) {
        a = Number(a);
        isNaN(a) && (a = 0);
        0 > a && (a = -1);
        m = Math.floor(a)
    };
    this.move = function(a, d) {
        for (var c = 0; c < b.length; c++) b[c].x += a, b[c].y += d, b[c].px += a, b[c].py += d, b[c].x1 = void 0 == b[c].x1 ?
            void 0 : b[c].x1 + a, b[c].y1 = void 0 == b[c].y1 ? void 0 : b[c].y1 + d, b[c].x2 = void 0 == b[c].x2 ? void 0 : b[c].x2 + a, b[c].y2 = void 0 == b[c].y2 ? void 0 : b[c].y2 + d;
        b[0].px = 0;
        b[0].py = 0
    };
    this.flip = function(a, d) {
        for (var c = 0; c < b.length; c++) void 0 != a && (b[c].x = a + (a - b[c].x), b[c].px = a + (a - b[c].px), b[c].x1 = void 0 == b[c].x1 ? void 0 : a + (a - b[c].x1), b[c].x2 = void 0 == b[c].x2 ? void 0 : a + (a - b[c].x2), b[c].sf = void 0 == b[c].sf ? void 0 : (b[c].sf + 1) % 2), void 0 != d && (b[c].y = d + (d - b[c].y), b[c].py = d + (d - b[c].py), b[c].y1 = void 0 == b[c].y1 ? void 0 : d + (d - b[c].y1),
            b[c].y2 = void 0 == b[c].y2 ? void 0 : d + (d - b[c].y2), b[c].sf = void 0 == b[c].sf ? void 0 : (b[c].sf + 1) % 2);
        b[0].px = 0;
        b[0].py = 0
    };
    this.center = function(a, d) {
        for (var c = b[0].x, e = b[0].y, h = b[0].x, l = b[0].y, g = 1; g < b.length; g++) c = b[g].x < c ? b[g].x : c, e = b[g].y < e ? b[g].y : e, h = b[g].x > h ? b[g].x : h, l = b[g].y > l ? b[g].y : l;
        this.move(a - c - (h - c) / 2, d - e - (l - e) / 2)
    };
    this.scale = function(a) {
        a = Number(a);
        if (!(isNaN(a) || 0 >= a))
            for (var d = 0; d < b.length; d++) {
                var c = b[d];
                c.x *= a;
                c.y *= a;
                c.px *= a;
                c.py *= a;
                c.x1 = void 0 == c.x1 ? void 0 : a * c.x1;
                c.y1 = void 0 == c.y1 ? void 0 : a *
                    c.y1;
                c.x2 = void 0 == c.x2 ? void 0 : a * c.x2;
                c.y2 = void 0 == c.y2 ? void 0 : a * c.y2;
                c.r1 = void 0 == c.r1 ? void 0 : a * c.r1;
                c.r2 = void 0 == c.r2 ? void 0 : a * c.r2
            }
    };
    this.rotate = function(a, d, c) {
        c *= Math.PI / 180;
        var e = Math.sin(c);
        c = Math.cos(c);
        for (var h = 0; h < b.length; h++) {
            var g = n(b[h].x, b[h].y, a, d, e, c);
            b[h].x = g[0];
            b[h].y = g[1];
            g = n(b[h].px, b[h].py, a, d, e, c);
            b[h].px = g[0];
            b[h].py = g[1];
            void 0 != b[h].x1 && (g = n(b[h].x1, b[h].y1, a, d, e, c), b[h].x1 = g[0], b[h].y1 = g[1]);
            void 0 != b[h].x2 && (g = n(b[h].x2, b[h].y2, a, d, e, c), b[h].x2 = g[0], b[h].y2 = g[1]);
            if ("H" ==
                b[h].t || "V" == b[h].t) b[h].t = "L";
            if ("h" == b[h].t || "v" == b[h].t) b[h].t = "l"
        }
        b[0].px = 0;
        b[0].py = 0
    }
};
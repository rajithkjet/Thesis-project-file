﻿(function() {
    function k(b, a) {
        s[b] || (typeof console !== "undefined" && typeof console.warn == "function" && console.warn("[WARNING] " + b + " is deprecated and will be removed in version 1.0. Instead, use `" + a + "`."), s[b] = !0)
    }

    function t(b) {
        b.localize = i.localize.bind(i);
        b.timezone = i.timezone.bind(i);
        b.utc = i.utc.bind(i)
    }

    function r(b, a, e) {
        a && a.days && (e = a, a = void 0);
        e && k("`" + g + "(format, [date], [locale])`", "var s = " + g + ".localize(locale); s(format, [date])");
        return (e ? i.localize(e) : i)(b, a)
    }

    function u(b, a, e) {
        e ? k("`" + g +
            ".strftime(format, [date], [locale])`", "var s = " + g + ".localize(locale); s(format, [date])") : k("`" + g + ".strftime(format, [date])`", g + "(format, [date])");
        return (e ? i.localize(e) : i)(b, a)
    }

    function p(b, a, e) {
        function g(b, c, h, a) {
            for (var d = "", f = null, e = !1, i = b.length, j = !1, o = 0; o < i; o++) {
                var n = b.charCodeAt(o);
                if (e === !0)
                    if (n === 45) f = "";
                    else if (n === 95) f = " ";
                else if (n === 48) f = "0";
                else if (n === 58) j && typeof console !== "undefined" && typeof console.warn == "function" && console.warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),
                    j = !0;
                else {
                    switch (n) {
                        case 65:
                            d += h.days[c.getDay()];
                            break;
                        case 66:
                            d += h.months[c.getMonth()];
                            break;
                        case 67:
                            d += l(Math.floor(c.getFullYear() / 100), f);
                            break;
                        case 68:
                            d += g(h.formats.D, c, h, a);
                            break;
                        case 70:
                            d += g(h.formats.F, c, h, a);
                            break;
                        case 72:
                            d += l(c.getHours(), f);
                            break;
                        case 73:
                            d += l(v(c.getHours()), f);
                            break;
                        case 76:
                            d += Math.floor(a % 1E3) > 99 ? Math.floor(a % 1E3) : Math.floor(a % 1E3) > 9 ? "0" + Math.floor(a % 1E3) : "00" + Math.floor(a % 1E3);
                            break;
                        case 77:
                            d += l(c.getMinutes(), f);
                            break;
                        case 80:
                            d += c.getHours() < 12 ? h.am : h.pm;
                            break;
                        case 82:
                            d +=
                                g(h.formats.R, c, h, a);
                            break;
                        case 83:
                            d += l(c.getSeconds(), f);
                            break;
                        case 84:
                            d += g(h.formats.T, c, h, a);
                            break;
                        case 85:
                            d += l(w(c, "sunday"), f);
                            break;
                        case 87:
                            d += l(w(c, "monday"), f);
                            break;
                        case 88:
                            d += g(h.formats.X, c, h, a);
                            break;
                        case 89:
                            d += c.getFullYear();
                            break;
                        case 90:
                            k && m === 0 ? d += "GMT" : (f = c.toString().match(/\(([\w\s]+)\)/), d += f && f[1] || "");
                            break;
                        case 97:
                            d += h.shortDays[c.getDay()];
                            break;
                        case 98:
                            d += h.shortMonths[c.getMonth()];
                            break;
                        case 99:
                            d += g(h.formats.c, c, h, a);
                            break;
                        case 100:
                            d += l(c.getDate(), f);
                            break;
                        case 101:
                            d +=
                                l(c.getDate(), f == null ? " " : f);
                            break;
                        case 104:
                            d += h.shortMonths[c.getMonth()];
                            break;
                        case 106:
                            f = new Date(c.getFullYear(), 0, 1);
                            f = Math.ceil((c.getTime() - f.getTime()) / 864E5);
                            d += f > 99 ? f : f > 9 ? "0" + f : "00" + f;
                            break;
                        case 107:
                            d += l(c.getHours(), f == null ? " " : f);
                            break;
                        case 108:
                            d += l(v(c.getHours()), f == null ? " " : f);
                            break;
                        case 109:
                            d += l(c.getMonth() + 1, f);
                            break;
                        case 110:
                            d += "\n";
                            break;
                        case 111:
                            d += String(c.getDate()) + A(c.getDate());
                            break;
                        case 112:
                            d += c.getHours() < 12 ? h.AM : h.PM;
                            break;
                        case 114:
                            d += g(h.formats.r, c, h, a);
                            break;
                        case 115:
                            d +=
                                Math.floor(a / 1E3);
                            break;
                        case 116:
                            d += "\t";
                            break;
                        case 117:
                            f = c.getDay();
                            d += f === 0 ? 7 : f;
                            break;
                        case 118:
                            d += g(h.formats.v, c, h, a);
                            break;
                        case 119:
                            d += c.getDay();
                            break;
                        case 120:
                            d += g(h.formats.x, c, h, a);
                            break;
                        case 121:
                            d += ("" + c.getFullYear()).slice(2);
                            break;
                        case 122:
                            k && m === 0 ? d += j ? "+00:00" : "+0000" : (f = m !== 0 ? m / 6E4 : -c.getTimezoneOffset(), e = j ? ":" : "", n = Math.abs(f % 60), d += (f < 0 ? "-" : "+") + l(Math.floor(Math.abs(f / 60))) + e + l(n));
                            break;
                        default:
                            d += b[o]
                    }
                    f = null;
                    e = !1
                } else n === 37 ? e = !0 : d += b[o]
            }
            return d
        }
        var i = b || x,
            m = a || 0,
            k = e || !1,
            j = 0,
            q, b = function(b, c) {
                var a;
                c ? (a = c.getTime(), k && (c = new Date(c.getTime() + (c.getTimezoneOffset() || 0) * 6E4 + m))) : (a = Date.now(), a > j ? (j = a, q = new Date(j), a = j, k && (q = new Date(j + (q.getTimezoneOffset() || 0) * 6E4 + m))) : a = j, c = q);
                return g(b, c, i, a)
            };
        b.localize = function(a) {
            return new p(a || i, m, k)
        };
        b.timezone = function(a) {
            var c = m,
                b = k,
                e = typeof a;
            if (e === "number" || e === "string") b = !0, e === "string" ? (c = a[0] === "-" ? -1 : 1, e = parseInt(a.slice(1, 3), 10), a = parseInt(a.slice(3, 5), 10), c = c * (60 * e + a) * 6E4) : e === "number" && (c = a * 6E4);
            return new p(i, c,
                b)
        };
        b.utc = function() {
            return new p(i, m, !0)
        };
        return b
    }

    function l(b, a) {
        if (a === "" || b > 9) return b;
        a == null && (a = "0");
        return a + b
    }

    function v(b) {
        if (b === 0) return 12;
        else if (b > 12) return b - 12;
        return b
    }

    function w(b, a) {
        var a = a || "sunday",
            e = b.getDay();
        a === "monday" && (e === 0 ? e = 6 : e--);
        var g = Date.UTC(b.getFullYear(), 0, 1),
            i = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((Math.floor((i - g) / 864E5) + 7 - e) / 7)
    }

    function A(b) {
        var a = b % 10;
        b %= 100;
        if (b >= 11 && b <= 13 || a === 0 || a >= 4) return "th";
        switch (a) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd"
        }
    }
    var x = {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            AM: "AM",
            PM: "PM",
            am: "am",
            pm: "pm",
            formats: {
                D: "%m/%d/%y",
                F: "%Y-%m-%d",
                R: "%H:%M",
                T: "%H:%M:%S",
                X: "%T",
                c: "%a %b %d %X %Y",
                r: "%I:%M:%S %p",
                v: "%e-%b-%Y",
                x: "%D"
            }
        },
        i = new p(x, 0, !1),
        y = typeof module !== "undefined",
        j;
    y ? (j = module.exports = r, j.strftime = u) : (j = function() {
        return this || (0, eval)("this")
    }(), j.strftime = r);
    var g = y ? "require('strftime')" : "strftime",
        s = {};
    j.strftimeTZ = function(b, a, e, j) {
        if ((typeof e == "number" || typeof e == "string") && j == null) j = e, e = void 0;
        e ? k("`" + g + ".strftimeTZ(format, date, locale, tz)`", "var s = " + g + ".localize(locale).timezone(tz); s(format, [date])` or `var s = " + g + ".localize(locale); s.timezone(tz)(format, [date])") : k("`" +
            g + ".strftimeTZ(format, date, tz)`", "var s = " + g + ".timezone(tz); s(format, [date])` or `" + g + ".timezone(tz)(format, [date])");
        return (e ? i.localize(e) : i).timezone(j)(b, a)
    };
    j.strftimeUTC = function(b, a, e) {
        e ? k("`" + g + ".strftimeUTC(format, date, locale)`", "var s = " + g + ".localize(locale).utc(); s(format, [date])") : k("`" + g + ".strftimeUTC(format, [date])`", "var s = " + g + ".utc(); s(format, [date])");
        return (e ? z.localize(e) : z)(b, a)
    };
    j.localizedStrftime = function(b) {
        k("`" + g + ".localizedStrftime(locale)`", g + ".localize(locale)");
        return i.localize(b)
    };
    t(r);
    t(u);
    var z = i.utc();
    if (typeof Date.now !== "function") Date.now = function() {
        return +new Date
    }
})();
! function() {
    "use strict";
    var strptime = function(str, format, local) {
        return strptime.parse(str, format, local)
    };
    strptime.version = "0.0.1";
    var namespace;
    if (typeof module !== "undefined") {
        namespace = module.exports = strptime
    } else {
        namespace = function() {
            return this || (1, eval)("this")
        }()
    }
    namespace.strptime = strptime;
    ! function(strptime) {
        strptime.locale = {
            a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            f: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
            c: "%Y-%m-%d %H:%M:%S",
            P: ["am", "pm"],
            r: "%I:%M:%S %p",
            x: "%m/%d/%y",
            X: "%H:%M:%S",
            day: ["Yesterday", "Today", "Tomorrow"],
            bg: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            Bg: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            fg: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
            Date_dBY_year_in_HM: "%#B %-d, %Y at %-H:%M",
            Date_dBY_year: "%#B %-d, %Y",
            Date_dBY: "%#B %-d, %Y",
            Date_AdBY: "%A, %#B %-d, %Y",
            Date_dBA: "%#B %-d, %A",
            Date_df_in_HM: "%#f, %-d at %-H:%M",
            Date_dfY: "%-d %#f %Y",
            Date_dB_in_HM: "%#B %-d at %-H:%M",
            Date_df: "%-d %#f"
        }
    }(strptime);
    ! function(strptime) {
        var inArray = Array.prototype.indexOf || function(el) {
            var l = this.length;
            var i = 0;
            while (i < l) {
                if (el == this[i]) {
                    return i
                }
                i++
            }
            return -1
        };
        var locale = strptime.locale;
        var strRegNum2 = "[\\d\\s]?\\d";
        var strRegStr = "\\S+";
        var specifiers = {
            "%": "\\%",
            a: strRegStr,
            A: strRegStr,
            b: {
                reg: strRegStr,
                make: function(date, data, mod, gen) {
                    data = inArray.call(gen ? locale.bg : locale.b, toLetterCaseReverse(data, mod));
                    if (data === -1) {
                        return false
                    }
                    date.setUTCMonth(data);
                    return true
                }
            },
            h: {
                reg: strRegStr,
                make: function(date, data, mod, gen) {
                    data = inArray.call(gen ? locale.bg : locale.b, toLetterCaseReverse(data, mod));
                    if (data === -1) {
                        return false
                    }
                    date.setUTCMonth(data);
                    return true
                }
            },
            B: {
                reg: strRegStr,
                make: function(date, data, mod, gen) {
                    data = inArray.call(gen ? locale.Bg : locale.B, toLetterCaseReverse(data, mod));
                    if (data === -1) {
                        return false
                    }
                    date.setUTCMonth(data);
                    return true
                }
            },
            f: {
                reg: strRegStr,
                make: function(date, data, mod, gen) {
                    data = inArray.call(gen ? locale.fg : locale.f, toLetterCaseReverse(data, mod));
                    if (data === -1) {
                        return false
                    }
                    date.setUTCMonth(data);
                    return true
                }
            },
            g: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 0 || data > 99) {
                        return false
                    }
                    data = data + 100 * parseInt((new Date).getUTCFullYear() / 100, 10);
                    date.setUTCFullYear(data);
                    return true
                }
            },
            G: {
                reg: "\\d{4}",
                make: function(date, data) {
                    data = parseInt(data, 10);
                    date.setUTCFullYear(data);
                    return true
                }
            },
            d: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 1 || data > 31) {
                        return false
                    }
                    date.setUTCDate(data);
                    return true
                }
            },
            e: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 1 || data > 31) {
                        return false
                    }
                    date.setUTCDate(data);
                    return true
                }
            },
            H: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 0 || data > 23) {
                        return false
                    }
                    date.setUTCHours(data);
                    return true
                }
            },
            I: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 1 || data > 12) {
                        return false
                    }
                    date.setUTCHours(date.getUTCHours() + data);
                    return true
                }
            },
            m: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 1 || data > 12) {
                        return false
                    }
                    date.setUTCMonth(data - 1);
                    return true
                }
            },
            M: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 0 || data > 59) {
                        return false
                    }
                    date.setUTCMinutes(data);
                    return true
                }
            },
            n: "\\n",
            p: {
                reg: strRegStr,
                make: function(date, data) {
                    data = inArray.call(locale.P, data.toLowerCase());
                    if (data === -1) {
                        return false
                    }
                    if (data === 1) {
                        date.setUTCHours(date.getUTCHours() + 12)
                    }
                    return true
                }
            },
            P: {
                reg: strRegStr,
                make: function(date, data) {
                    data = inArray.call(locale.P, data.toLowerCase());
                    if (data === -1) {
                        return false
                    }
                    if (data === 1) {
                        date.setUTCHours(date.getUTCHours() + 12)
                    }
                    return true
                }
            },
            S: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 0 || data > 60) {
                        return false
                    }
                    date.setUTCSeconds(data);
                    return true
                }
            },
            t: "\\t",
            u: "\\d",
            U: strRegNum2,
            w: "\\d",
            W: strRegNum2,
            y: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 0 || data > 99) {
                        return false
                    }
                    data = data + 100 * parseInt((new Date).getUTCFullYear() / 100, 10);
                    date.setUTCFullYear(data);
                    return true
                }
            },
            Y: {
                reg: "\\d{4}",
                make: function(date, data) {
                    data = parseInt(data, 10);
                    date.setUTCFullYear(data);
                    return true
                }
            },
            z: {
                reg: "[+\\-]\\d{4}",
                make: function(date, data) {
                    var m = data.match(/^([+\-])(\d{2})(\d{2})$/);
                    if (!m) {
                        return false
                    }
                    var offset = (parseInt(m[2], 10) * 60 + parseInt(m[3], 10)) * 6e4;
                    if (m[1] === "+") {
                        offset = -offset
                    }
                    date.setTime(date.getTime() + offset);
                    return true
                }
            },
            l: {
                reg: strRegNum2,
                make: function(date, data) {
                    data = parseInt(data, 10);
                    if (data < 1 || data > 12) {
                        return false
                    }
                    date.setUTCHours(date.getUTCHours() + data);
                    return true
                }
            },
            s: {
                reg: "\\d+",
                make: function(date, data) {
                    data = parseInt(data, 10);
                    date.setTime(data * 1e3);
                    return true
                }
            },
            c: locale.c,
            r: locale.r,
            R: "%H:%M",
            T: "%H:%M:%S",
            x: locale.x,
            X: locale.X,
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            Date_iso: "%Y-%m-%dT%H:%M:%S",
            Date_dBY_year_in_HM: locale.Date_dBY_year_in_HM,
            Date_dBY_year: locale.Date_dBY_year,
            Date_dBY: locale.Date_dBY,
            Date_dBA: locale.Date_dBA,
            Date_AdBY: locale.Date_AdBY,
            Date_df_in_HM: locale.Date_df_in_HM,
            Date_dfY: locale.Date_dfY,
            Date_dB_in_HM: locale.Date_dB_in_HM,
            Date_dmY__dot: "%d.%m.%Y",
            Date_df: locale.Date_df,
            Date_FT: "%F %T",
            Date_dmY__minus: "%d-%m-%Y"
        };
        strptime.parse = function(str, format, local) {
            str = String(str);
            format = String(format);
            var loop = 5;
            while (/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g.test(format) && loop) {
                format = format.replace(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/, formatTransform);
                loop--
            }
            formatTransform.make = [];
            var reg = format.replace(/%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g, formatTransform);
            var match = str.match(new RegExp(reg));
            if (!match || !formatTransform.make.length) {
                return null
            }
            var date = new Date(Date.UTC(0, 0));
            for (var i = 0, l = formatTransform.make.length; i < l; i++) {
                var build = formatTransform.make[i];
                if (!build[0](date, match[i + 1], build[1], build[2])) {
                    return null
                }
            }
            if (local) {
                date.setTime(date.getTime() + date.getTimezoneOffset() * 6e4)
            }
            return date
        };

        function formatTransform(_, spec, mod, numPad, pos, str) {
            spec = String(spec);
            mod = String(mod);
            spec = spec.replace(/^[#_0\^\-!~]+/, "");
            var s = specifiers[spec];
            if (!s) {
                return _
            }
            var genitive = false;
            if (mod.indexOf("!") === -1 && spec.length === 1 && (mod.indexOf("~") > -1 || "bBf".indexOf(spec) > -1 && /%[0\-_]?d[\s]+$/.test(str.substr(0, pos)))) {
                genitive = true
            }
            if ((spec === "I" || spec === "l") && !/%[pP]/.test(str)) {
                throw new Error("Undefined AM/PM")
            }
            switch (typeof s) {
                case "function":
                    return s();
                case "string":
                    return s;
                case "object":
                    formatTransform.make.push([s.make, mod, genitive]);
                    return "(" + s.reg + ")";
                default:
                    return _
            }
        }

        function toLetterCaseReverse(str, mode) {
            str = String(str);
            mode = String(mode);
            if (mode.indexOf("#") !== -1) {
                return str.substr(0, 1).toUpperCase() + str.substr(1)
            }
            if (mode.indexOf("^") !== -1) {
                return str.substr(0, 1) + str.substr(1).toLowerCase()
            }
            return str
        }
    }(strptime)
}();
(function() {
    var COMPILED = !0,
        goog = goog || {};
    goog.global = this;
    goog.exportPath_ = function(a, b, c) {
        a = a.split(".");
        c = c || goog.global;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
    };
    goog.define = function(a, b) {
        var c = b;
        COMPILED || goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]);
        goog.exportPath_(a, c)
    };
    goog.DEBUG = !1;
    goog.LOCALE = "en";
    goog.TRUSTED_SITE = !0;
    goog.provide = function(a) {
        if (!COMPILED) {
            if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
            delete goog.implicitNamespaces_[a];
            for (var b = a;
                (b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) goog.implicitNamespaces_[b] = !0
        }
        goog.exportPath_(a)
    };
    goog.setTestOnly = function(a) {
        if (COMPILED && !goog.DEBUG) throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
    };
    COMPILED || (goog.isProvided_ = function(a) {
        return !goog.implicitNamespaces_[a] && !!goog.getObjectByName(a)
    }, goog.implicitNamespaces_ = {});
    goog.getObjectByName = function(a, b) {
        for (var c = a.split("."), d = b || goog.global, e; e = c.shift();)
            if (goog.isDefAndNotNull(d[e])) d = d[e];
            else return null;
        return d
    };
    goog.globalize = function(a, b) {
        var c = b || goog.global,
            d;
        for (d in a) c[d] = a[d]
    };
    goog.addDependency = function(a, b, c) {
        if (goog.DEPENDENCIES_ENABLED) {
            var d;
            a = a.replace(/\\/g, "/");
            for (var e = goog.dependencies_, f = 0; d = b[f]; f++) e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0;
            for (d = 0; b = c[d]; d++) a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0
        }
    };
    goog.ENABLE_DEBUG_LOADER = !0;
    goog.require = function(a) {
        if (!COMPILED && !goog.isProvided_(a)) {
            if (goog.ENABLE_DEBUG_LOADER) {
                var b = goog.getPathFromDeps_(a);
                if (b) {
                    goog.included_[b] = !0;
                    goog.writeScripts_();
                    return
                }
            }
            a = "goog.require could not find: " + a;
            goog.global.console && goog.global.console.error(a);
            throw Error(a);
        }
    };
    goog.basePath = "";
    goog.nullFunction = function() {};
    goog.identityFunction = function(a, b) {
        return a
    };
    goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
    };
    goog.addSingletonGetter = function(a) {
        a.getInstance = function() {
            if (a.instance_) return a.instance_;
            goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
            return a.instance_ = new a
        }
    };
    goog.instantiatedSingletons_ = [];
    goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
    goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {
        pathToNames: {},
        nameToPath: {},
        requires: {},
        visited: {},
        written: {}
    }, goog.inHtmlDocument_ = function() {
        var a = goog.global.document;
        return "undefined" != typeof a && "write" in a
    }, goog.findBasePath_ = function() {
        if (goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_())
            for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1; 0 <= b; --b) {
                var c = a[b].src,
                    d = c.lastIndexOf("?"),
                    d = -1 == d ? c.length :
                    d;
                if ("base.js" == c.substr(d - 7, 7)) {
                    goog.basePath = c.substr(0, d - 7);
                    break
                }
            }
    }, goog.importScript_ = function(a) {
        var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
        !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0)
    }, goog.writeScriptTag_ = function(a) {
        if (goog.inHtmlDocument_()) {
            var b = goog.global.document;
            if ("complete" == b.readyState) {
                if (/\bdeps.js$/.test(a)) return !1;
                throw Error('Cannot write "' + a + '" after document load');
            }
            b.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
            return !0
        }
        return !1
    }, goog.writeScripts_ = function() {
        function a(e) {
            if (!(e in d.written)) {
                if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires))
                    for (var g in d.requires[e])
                        if (!goog.isProvided_(g))
                            if (g in d.nameToPath) a(d.nameToPath[g]);
                            else throw Error("Undefined nameToPath for " + g);
                e in c || (c[e] = !0, b.push(e))
            }
        }
        var b = [],
            c = {},
            d = goog.dependencies_,
            e;
        for (e in goog.included_) d.written[e] || a(e);
        for (e = 0; e < b.length; e++)
            if (b[e]) goog.importScript_(goog.basePath + b[e]);
            else throw Error("Undefined script input");
    }, goog.getPathFromDeps_ = function(a) {
        return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
    }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
    goog.typeOf = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    goog.isDef = function(a) {
        return void 0 !== a
    };
    goog.isNull = function(a) {
        return null === a
    };
    goog.isDefAndNotNull = function(a) {
        return null != a
    };
    goog.isArray = function(a) {
        return "array" == goog.typeOf(a)
    };
    goog.isArrayLike = function(a) {
        var b = goog.typeOf(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    goog.isDateLike = function(a) {
        return goog.isObject(a) && "function" == typeof a.getFullYear
    };
    goog.isString = function(a) {
        return "string" == typeof a
    };
    goog.isBoolean = function(a) {
        return "boolean" == typeof a
    };
    goog.isNumber = function(a) {
        return "number" == typeof a
    };
    goog.isFunction = function(a) {
        return "function" == goog.typeOf(a)
    };
    goog.isObject = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    goog.getUid = function(a) {
        return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    };
    goog.removeUid = function(a) {
        "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
        try {
            delete a[goog.UID_PROPERTY_]
        } catch (b) {}
    };
    goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
    goog.uidCounter_ = 0;
    goog.getHashCode = goog.getUid;
    goog.removeHashCode = goog.removeUid;
    goog.cloneObject = function(a) {
        var b = goog.typeOf(a);
        if ("object" == b || "array" == b) {
            if (a.clone) return a.clone();
            var b = "array" == b ? [] : {},
                c;
            for (c in a) b[c] = goog.cloneObject(a[c]);
            return b
        }
        return a
    };
    goog.bindNative_ = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    goog.bindJs_ = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    goog.bind = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
        return goog.bind.apply(null, arguments)
    };
    goog.partial = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    };
    goog.mixin = function(a, b) {
        for (var c in b) a[c] = b[c]
    };
    goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date
    };
    goog.globalEval = function(a) {
        if (goog.global.execScript) goog.global.execScript(a, "JavaScript");
        else if (goog.global.eval)
            if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(a);
            else {
                var b = goog.global.document,
                    c = b.createElement("script");
                c.type = "text/javascript";
                c.defer = !1;
                c.appendChild(b.createTextNode(a));
                b.body.appendChild(c);
                b.body.removeChild(c)
            }
        else throw Error("goog.globalEval not available");
    };
    goog.evalWorksForGlobals_ = null;
    goog.getCssName = function(a, b) {
        var c = function(a) {
                return goog.cssNameMapping_[a] || a
            },
            d = function(a) {
                a = a.split("-");
                for (var b = [], d = 0; d < a.length; d++) b.push(c(a[d]));
                return b.join("-")
            },
            d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
                return a
            };
        return b ? a + "-" + d(b) : d(a)
    };
    goog.setCssNameMapping = function(a, b) {
        goog.cssNameMapping_ = a;
        goog.cssNameMappingStyle_ = b
    };
    !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
    goog.getMsg = function(a, b) {
        var c = b || {},
            d;
        for (d in c) {
            var e = ("" + c[d]).replace(/\$/g, "$$$$");
            a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
        }
        return a
    };
    goog.getMsgWithFallback = function(a, b) {
        return a
    };
    goog.exportSymbol = function(a, b, c) {
        goog.exportPath_(a, b, c)
    };
    goog.exportProperty = function(a, b, c) {
        a[b] = c
    };
    goog.inherits = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.superClass_ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    goog.base = function(a, b, c) {
        var d = arguments.callee.caller;
        if (goog.DEBUG && !d) throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (d.superClass_) return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
        for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor; g; g = g.superClass_ && g.superClass_.constructor)
            if (g.prototype[b] === d) f = !0;
            else if (f) return g.prototype[b].apply(a,
            e);
        if (a[b] === d) return a.constructor.prototype[b].apply(a, e);
        throw Error("goog.base called from a method of one name to a method of a different name");
    };
    goog.scope = function(a) {
        a.call(goog.global)
    };
    goog.string = {};
    goog.string.Unicode = {
        NBSP: "\u00a0"
    };
    goog.string.startsWith = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    goog.string.endsWith = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    goog.string.caseInsensitiveStartsWith = function(a, b) {
        return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length))
    };
    goog.string.caseInsensitiveEndsWith = function(a, b) {
        return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length))
    };
    goog.string.caseInsensitiveEquals = function(a, b) {
        return a.toLowerCase() == b.toLowerCase()
    };
    goog.string.subs = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    goog.string.collapseWhitespace = function(a) {
        return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    goog.string.isEmpty = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    goog.string.isEmptySafe = function(a) {
        return goog.string.isEmpty(goog.string.makeSafe(a))
    };
    goog.string.isBreakingWhitespace = function(a) {
        return !/[^\t\n\r ]/.test(a)
    };
    goog.string.isAlpha = function(a) {
        return !/[^a-zA-Z]/.test(a)
    };
    goog.string.isNumeric = function(a) {
        return !/[^0-9]/.test(a)
    };
    goog.string.isAlphaNumeric = function(a) {
        return !/[^a-zA-Z0-9]/.test(a)
    };
    goog.string.isSpace = function(a) {
        return " " == a
    };
    goog.string.isUnicodeChar = function(a) {
        return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
    };
    goog.string.stripNewlines = function(a) {
        return a.replace(/(\r\n|\r|\n)+/g, " ")
    };
    goog.string.canonicalizeNewlines = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    };
    goog.string.normalizeWhitespace = function(a) {
        return a.replace(/\xa0|\s/g, " ")
    };
    goog.string.normalizeSpaces = function(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    };
    goog.string.collapseBreakingSpaces = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    goog.string.trim = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    goog.string.trimLeft = function(a) {
        return a.replace(/^[\s\xa0]+/, "")
    };
    goog.string.trimRight = function(a) {
        return a.replace(/[\s\xa0]+$/, "")
    };
    goog.string.caseInsensitiveCompare = function(a, b) {
        var c = String(a).toLowerCase(),
            d = String(b).toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    };
    goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
    goog.string.numerateCompare = function(a, b) {
        if (a == b) return 0;
        if (!a) return -1;
        if (!b) return 1;
        for (var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0; f < e; f++) {
            var g = c[f],
                h = d[f];
            if (g != h) return c = parseInt(g, 10), !isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1
        }
        return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
    };
    goog.string.urlEncode = function(a) {
        return encodeURIComponent(String(a))
    };
    goog.string.urlDecode = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    };
    goog.string.newLineToBr = function(a, b) {
        return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
    };
    goog.string.htmlEscape = function(a, b) {
        if (b) return a.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;");
        if (!goog.string.allRe_.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(goog.string.amperRe_, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(goog.string.ltRe_, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(goog.string.gtRe_, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(goog.string.quotRe_, "&quot;"));
        return a
    };
    goog.string.amperRe_ = /&/g;
    goog.string.ltRe_ = /</g;
    goog.string.gtRe_ = />/g;
    goog.string.quotRe_ = /\"/g;
    goog.string.allRe_ = /[&<>\"]/;
    goog.string.unescapeEntities = function(a) {
        return goog.string.contains(a, "&") ? "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a
    };
    goog.string.unescapeEntitiesUsingDom_ = function(a) {
        var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            },
            c = document.createElement("div");
        return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, e) {
            var f = b[a];
            if (f) return f;
            if ("#" == e.charAt(0)) {
                var g = Number("0" + e.substr(1));
                isNaN(g) || (f = String.fromCharCode(g))
            }
            f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = f
        })
    };
    goog.string.unescapePureXmlEntities_ = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!isNaN(d)) return String.fromCharCode(d)
                    }
                    return a
            }
        })
    };
    goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
    goog.string.whitespaceEscape = function(a, b) {
        return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
    };
    goog.string.stripQuotes = function(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
            var e = 1 == c ? b : b.charAt(d);
            if (a.charAt(0) == e && a.charAt(a.length - 1) == e) return a.substring(1, a.length - 1)
        }
        return a
    };
    goog.string.truncate = function(a, b, c) {
        c && (a = goog.string.unescapeEntities(a));
        a.length > b && (a = a.substring(0, b - 3) + "...");
        c && (a = goog.string.htmlEscape(a));
        return a
    };
    goog.string.truncateMiddle = function(a, b, c, d) {
        c && (a = goog.string.unescapeEntities(a));
        if (d && a.length > b) {
            d > b && (d = b);
            var e = a.length - d;
            a = a.substring(0, b - d) + "..." + a.substring(e)
        } else a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
        c && (a = goog.string.htmlEscape(a));
        return a
    };
    goog.string.specialEscapeChars_ = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    };
    goog.string.jsEscapeCache_ = {
        "'": "\\'"
    };
    goog.string.quote = function(a) {
        a = String(a);
        if (a.quote) return a.quote();
        for (var b = ['"'], c = 0; c < a.length; c++) {
            var d = a.charAt(c),
                e = d.charCodeAt(0);
            b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d))
        }
        b.push('"');
        return b.join("")
    };
    goog.string.escapeString = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b[c] = goog.string.escapeChar(a.charAt(c));
        return b.join("")
    };
    goog.string.escapeChar = function(a) {
        if (a in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[a];
        if (a in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
        var b = a,
            c = a.charCodeAt(0);
        if (31 < c && 127 > c) b = a;
        else {
            if (256 > c) {
                if (b = "\\x", 16 > c || 256 < c) b += "0"
            } else b = "\\u", 4096 > c && (b += "0");
            b += c.toString(16).toUpperCase()
        }
        return goog.string.jsEscapeCache_[a] = b
    };
    goog.string.toMap = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a.charAt(c)] = !0;
        return b
    };
    goog.string.contains = function(a, b) {
        return -1 != a.indexOf(b)
    };
    goog.string.countOf = function(a, b) {
        return a && b ? a.split(b).length - 1 : 0
    };
    goog.string.removeAt = function(a, b, c) {
        var d = a;
        0 <= b && (b < a.length && 0 < c) && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
        return d
    };
    goog.string.remove = function(a, b) {
        var c = RegExp(goog.string.regExpEscape(b), "");
        return a.replace(c, "")
    };
    goog.string.removeAll = function(a, b) {
        var c = RegExp(goog.string.regExpEscape(b), "g");
        return a.replace(c, "")
    };
    goog.string.regExpEscape = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    goog.string.repeat = function(a, b) {
        return Array(b + 1).join(a)
    };
    goog.string.padNumber = function(a, b, c) {
        a = goog.isDef(c) ? a.toFixed(c) : String(a);
        c = a.indexOf("."); - 1 == c && (c = a.length);
        return goog.string.repeat("0", Math.max(0, b - c)) + a
    };
    goog.string.makeSafe = function(a) {
        return null == a ? "" : String(a)
    };
    goog.string.buildString = function(a) {
        return Array.prototype.join.call(arguments, "")
    };
    goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
    };
    goog.string.compareVersions = function(a, b) {
        for (var c = 0, d = goog.string.trim(String(a)).split("."), e = goog.string.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var h = d[g] || "",
                k = e[g] || "",
                l = RegExp("(\\d*)(\\D*)", "g"),
                m = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = l.exec(h) || ["", "", ""],
                    n = m.exec(k) || ["", "", ""];
                if (0 == p[0].length && 0 == n[0].length) break;
                var c = 0 == p[1].length ? 0 : parseInt(p[1], 10),
                    r = 0 == n[1].length ? 0 : parseInt(n[1], 10),
                    c = goog.string.compareElements_(c, r) || goog.string.compareElements_(0 ==
                        p[2].length, 0 == n[2].length) || goog.string.compareElements_(p[2], n[2])
            } while (0 == c)
        }
        return c
    };
    goog.string.compareElements_ = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    goog.string.HASHCODE_MAX_ = 4294967296;
    goog.string.hashCode = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_;
        return b
    };
    goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
    goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++
    };
    goog.string.toNumber = function(a) {
        var b = Number(a);
        return 0 == b && goog.string.isEmpty(a) ? NaN : b
    };
    goog.string.isLowerCamelCase = function(a) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a)
    };
    goog.string.isUpperCamelCase = function(a) {
        return /^([A-Z][a-z]*)+$/.test(a)
    };
    goog.string.toCamelCase = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    goog.string.toSelectorCase = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    goog.string.toTitleCase = function(a, b) {
        var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
        return a.replace(RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    };
    goog.string.parseInt = function(a) {
        isFinite(a) && (a = String(a));
        return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    goog.string.splitLimit = function(a, b, c) {
        a = a.split(b);
        for (var d = []; 0 < c && a.length;) d.push(a.shift()), c--;
        a.length && d.push(a.join(b));
        return d
    };
    goog.debug = {};
    goog.debug.Error = function(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, goog.debug.Error) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    goog.inherits(goog.debug.Error, Error);
    goog.debug.Error.prototype.name = "CustomError";
    goog.asserts = {};
    goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
    goog.asserts.AssertionError = function(a, b) {
        b.unshift(a);
        goog.debug.Error.call(this, goog.string.subs.apply(null, b));
        b.shift();
        this.messagePattern = a
    };
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
    goog.asserts.AssertionError.prototype.name = "AssertionError";
    goog.asserts.doAssertFailure_ = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) var e = e + (": " + c),
            f = d;
        else a && (e += ": " + a, f = b);
        throw new goog.asserts.AssertionError("" + e, f || []);
    };
    goog.asserts.assert = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.fail = function(a, b) {
        if (goog.asserts.ENABLE_ASSERTS) throw new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    goog.asserts.assertNumber = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertString = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertFunction = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertObject = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertArray = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertBoolean = function(a, b, c) {
        goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    goog.asserts.assertInstanceof = function(a, b, c, d) {
        !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3));
        return a
    };
    goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var a in Object.prototype) goog.asserts.fail(a + " should not be enumerable in Object.prototype.")
    };
    (function(a) {
        var b, c, d;
        (function() {
            var a = {},
                f = {};
            b = function(b, c, d) {
                a[b] = {
                    deps: c,
                    callback: d
                }
            };
            d = c = function(b) {
                function h(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var c = b.split("/").slice(0, -1), d = 0, e = a.length; d < e; d++) {
                        var f = a[d];
                        ".." === f ? c.pop() : "." !== f && c.push(f)
                    }
                    return c.join("/")
                }
                d._eak_seen = a;
                if (f[b]) return f[b];
                f[b] = {};
                if (!a[b]) throw Error("Could not find module " + b);
                for (var k = a[b], l = k.deps, k = k.callback, m = [], p, n = 0, r = l.length; n < r; n++) "exports" === l[n] ? m.push(p = {}) : m.push(c(h(l[n])));
                l =
                    k.apply(this, m);
                return f[b] = p || l
            }
        })();
        b("promise/all", ["./utils", "exports"], function(a, b) {
            var c = a.isArray,
                d = a.isFunction;
            b.all = function(a) {
                if (!c(a)) throw new TypeError("You must pass an array to all.");
                return new this(function(b, c) {
                    function e(a) {
                        return function(c) {
                            f[a] = c;
                            0 === --g && b(f)
                        }
                    }
                    var f = [],
                        g = a.length,
                        q;
                    0 === g && b([]);
                    for (var t = 0; t < a.length; t++)(q = a[t]) && d(q.then) ? q.then(e(t), c) : (f[t] = q, 0 === --g && b(f))
                })
            }
        });
        b("promise/asap", ["exports"], function(a) {
            function b() {
                return function() {
                    process.nextTick(d)
                }
            }

            function c() {
                return function() {
                    k.setTimeout(d, 1)
                }
            }

            function d() {
                for (var a = 0; a < l.length; a++) {
                    var b = l[a];
                    (0, b[0])(b[1])
                }
                l = []
            }
            var k = "undefined" !== typeof global ? global : void 0 === this ? window : this,
                l = [],
                m;
            m = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? b() : c();
            a.asap = function(a, b) {
                1 === l.push([a, b]) && m()
            }
        });
        b("promise/config", ["exports"], function(a) {
            var b = {
                instrument: !1
            };
            a.config = b;
            a.configure = function(a, c) {
                if (2 === arguments.length) b[a] = c;
                else return b[a]
            }
        });
        b("promise/polyfill",
            ["./promise", "./utils", "exports"],
            function(b, c, d) {
                var h = b.Promise,
                    k = c.isFunction;
                d.polyfill = function() {
                    var b;
                    b = "undefined" !== typeof global ? global : "undefined" !== typeof window && window.document ? window : a;
                    "Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise && function() {
                        var a;
                        new b.Promise(function(b) {
                            a = b
                        });
                        return k(a)
                    }() || (b.Promise = h)
                }
            });
        b("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(a, b, c, d, k, l, m,
            p) {
            function n(a) {
                if (!C(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof n)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [];
                r(a, this)
            }

            function r(a, b) {
                function c(a) {
                    z(b, a)
                }

                function d(a) {
                    w(b, a)
                }
                try {
                    a(c, d)
                } catch (e) {
                    d(e)
                }
            }

            function q(a, b, c, d) {
                var e = C(c),
                    f, g, h, k;
                if (e) try {
                    f = c(d), h = !0
                } catch (l) {
                    k = !0, g = l
                } else f = d, h = !0;
                v(b, f) || (e && h ? z(b, f) : k ? w(b, g) : a === A ? z(b, f) : a === B && w(b, f))
            }

            function t(a, b, c, d) {
                a = a._subscribers;
                var e = a.length;
                a[e] = b;
                a[e + A] = c;
                a[e + B] = d
            }

            function y(a, b) {
                for (var c, d, e = a._subscribers, f = a._detail, g = 0; g < e.length; g += 3) c = e[g], d = e[g + b], q(b, c, d, f);
                a._subscribers = null
            }

            function v(a, b) {
                var c = null,
                    d;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (K(b) && (c = b.then, C(c))) return c.call(b, function(c) {
                        if (d) return !0;
                        d = !0;
                        b !== c ? z(a, c) : F(a, c)
                    }, function(b) {
                        if (d) return !0;
                        d = !0;
                        w(a, b)
                    }), !0
                } catch (e) {
                    if (d) return !0;
                    w(a, e);
                    return !0
                }
                return !1
            }

            function z(a, b) {
                a === b ? F(a, b) : v(a, b) || F(a, b)
            }

            function F(a, b) {
                a._state === D && (a._state = u, a._detail = b, s.async(E, a))
            }

            function w(a, b) {
                a._state === D && (a._state = u, a._detail = b, s.async(x, a))
            }

            function E(a) {
                y(a, a._state = A)
            }

            function x(a) {
                y(a, a._state = B)
            }
            var s = a.config,
                K = b.objectOrFunction,
                C = b.isFunction;
            a = c.all;
            d = d.race;
            k = k.resolve;
            l = l.reject;
            s.async = m.asap;
            var D = void 0,
                u = 0,
                A = 1,
                B = 2;
            n.prototype = {
                constructor: n,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function(a, b) {
                    var c = this,
                        d = new this.constructor(function() {});
                    if (this._state) {
                        var e = arguments;
                        s.async(function() {
                            q(c._state, d, e[c._state - 1], c._detail)
                        })
                    } else t(this, d, a, b);
                    return d
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            n.all = a;
            n.race = d;
            n.resolve = k;
            n.reject = l;
            p.Promise = n
        });
        b("promise/race", ["./utils", "exports"], function(a, b) {
            var c = a.isArray;
            b.race = function(a) {
                if (!c(a)) throw new TypeError("You must pass an array to race.");
                return new this(function(b, c) {
                    for (var d, e = 0; e < a.length; e++)(d =
                        a[e]) && "function" === typeof d.then ? d.then(b, c) : b(d)
                })
            }
        });
        b("promise/reject", ["exports"], function(a) {
            a.reject = function(a) {
                return new this(function(b, c) {
                    c(a)
                })
            }
        });
        b("promise/resolve", ["exports"], function(a) {
            a.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === this ? a : new this(function(b) {
                    b(a)
                })
            }
        });
        b("promise/utils", ["exports"], function(a) {
            function b(a) {
                return "function" === typeof a
            }
            var c = Date.now || function() {
                return (new Date).getTime()
            };
            a.objectOrFunction = function(a) {
                return b(a) || "object" ===
                    typeof a && null !== a
            };
            a.isFunction = b;
            a.isArray = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
            a.now = c
        });
        c("promise/polyfill").polyfill()
    })(this);
    var Sk = Sk || {};
    Sk.configure = function(a) {
        Sk.output = a.output || Sk.output;
        goog.asserts.assert("function" === typeof Sk.output);
        Sk.debugout = a.debugout || Sk.debugout;
        goog.asserts.assert("function" === typeof Sk.debugout);
        Sk.uncaughtException = a.uncaughtException || Sk.uncaughtException;
        goog.asserts.assert("function" === typeof Sk.uncaughtException);
        Sk.read = a.read || Sk.read;
        goog.asserts.assert("function" === typeof Sk.read);
        Sk.timeoutMsg = a.timeoutMsg || Sk.timeoutMsg;
        goog.asserts.assert("function" === typeof Sk.timeoutMsg);
        goog.exportSymbol("Sk.timeoutMsg",
            Sk.timeoutMsg);
        Sk.sysargv = a.sysargv || Sk.sysargv;
        goog.asserts.assert(goog.isArrayLike(Sk.sysargv));
        Sk.python3 = a.python3 || Sk.python3;
        goog.asserts.assert("boolean" === typeof Sk.python3);
        Sk.imageProxy = a.imageProxy || "http://localhost:8080/320x";
        goog.asserts.assert("string" === typeof Sk.imageProxy);
        Sk.inputfun = a.inputfun || Sk.inputfun;
        goog.asserts.assert("function" === typeof Sk.inputfun);
        Sk.retainGlobals = a.retainglobals || !1;
        goog.asserts.assert("boolean" === typeof Sk.retainGlobals);
        Sk.debugging = a.debugging ||
            !1;
        goog.asserts.assert("boolean" === typeof Sk.debugging);
        Sk.breakpoints = a.breakpoints || function() {
            return !0
        };
        goog.asserts.assert("function" === typeof Sk.breakpoints);
        Sk.setTimeout = a.setTimeout;
        void 0 === Sk.setTimeout && (Sk.setTimeout = "function" === typeof setTimeout ? setTimeout : function(a, c) {
            a()
        });
        goog.asserts.assert("function" === typeof Sk.setTimeout);
        "execLimit" in a && (Sk.execLimit = a.execLimit);
        "yieldLimit" in a && (Sk.yieldLimit = a.yieldLimit);
        a.syspath && (Sk.syspath = a.syspath, goog.asserts.assert(goog.isArrayLike(Sk.syspath)),
            Sk.realsyspath = void 0, Sk.sysmodules = new Sk.builtin.dict([]));
        Sk.misceval.softspace_ = !1
    };
    goog.exportSymbol("Sk.configure", Sk.configure);
    Sk.uncaughtException = function(a) {
        throw a;
    };
    goog.exportSymbol("Sk.uncaughtException", Sk.uncaughtException);
    Sk.timeoutMsg = function() {
        return "Program exceeded run time limit."
    };
    goog.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);
    Sk.execLimit = Number.POSITIVE_INFINITY;
    Sk.yieldLimit = Number.POSITIVE_INFINITY;
    Sk.output = function(a) {};
    Sk.read = function(a) {
        throw "Sk.read has not been implemented";
    };
    Sk.sysargv = [];
    Sk.getSysArgv = function() {
        return Sk.sysargv
    };
    goog.exportSymbol("Sk.getSysArgv", Sk.getSysArgv);
    Sk.syspath = [];
    Sk.inBrowser = void 0 !== goog.global.document;
    Sk.debugout = function(a) {};
    (function() {
        void 0 !== goog.global.write ? Sk.output = goog.global.write : void 0 !== goog.global.console && void 0 !== goog.global.console.log ? Sk.output = function(a) {
            goog.global.console.log(a)
        } : void 0 !== goog.global.print && (Sk.output = goog.global.print);
        void 0 !== goog.global.print && (Sk.debugout = goog.global.print)
    })();
    Sk.inBrowser || (goog.global.CLOSURE_IMPORT_SCRIPT = function(a) {
        goog.global.eval(goog.global.read("support/closure-library/closure/goog/" + a));
        return !0
    });
    Sk.python3 = !1;
    Sk.inputfun = function(a) {
        return window.prompt(a)
    };
    goog.exportSymbol("Sk.python3", Sk.python3);
    goog.exportSymbol("Sk.inputfun", Sk.inputfun);
    void 0 === Sk.builtin && (Sk.builtin = {});
    Sk.dunderToSkulpt = {
        __eq__: "ob$eq",
        __ne__: "ob$ne",
        __lt__: "ob$lt",
        __le__: "ob$le",
        __gt__: "ob$gt",
        __ge__: "ob$ge",
        __hash__: "tp$hash",
        __abs__: "nb$abs",
        __neg__: "nb$negative",
        __pos__: "nb$positive",
        __int__: "nb$int_",
        __long__: "nb$lng",
        __float__: "nb$float_",
        __add__: "nb$add",
        __radd__: "nb$reflected_add",
        __sub__: "nb$subtract",
        __rsub__: "nb$reflected_subtract",
        __mul__: "nb$multiply",
        __rmul__: "nb$reflected_multiply",
        __div__: "nb$divide",
        __rdiv__: "nb$reflected_divide",
        __floordiv__: "nb$floor_divide",
        __rfloordiv__: "nb$reflected_floor_divide",
        __mod__: "nb$remainder",
        __rmod__: "nb$reflected_remainder",
        __divmod__: "nb$divmod",
        __rdivmod__: "nb$reflected_divmod",
        __pow__: "nb$power",
        __rpow__: "nb$reflected_power",
        __contains__: "sq$contains",
        __len__: "sq$length"
    };
    Sk.builtin.type = function(a, b, c) {
        var d, e;
        if (void 0 === b && void 0 === c) return a.ob$type;
        if ("dict" !== c.tp$name) throw new Sk.builtin.TypeError("type() argument 3 must be dict, not " + Sk.abstr.typeName(c));
        if (!Sk.builtin.checkString(a)) throw new Sk.builtin.TypeError("type() argument 1 must be str, not " + Sk.abstr.typeName(a));
        if ("tuple" !== b.tp$name) throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not " + Sk.abstr.typeName(b));
        d = function(a, b, c, e, f) {
            var g, h = this;
            if (!(this instanceof d)) return new d(a,
                b, c, e, f);
            e = e || [];
            h.$d = new Sk.builtin.dict([]);
            void 0 !== d.prototype.tp$base && (d.prototype.tp$base.sk$klass ? d.prototype.tp$base.call(this, a, b, c, e.slice(), f) : (g = e.slice(), g.unshift(d, this), Sk.abstr.superConstructor.apply(void 0, g)));
            g = Sk.builtin.type.typeLookup(h.ob$type, "__init__");
            return void 0 !== g ? (e.unshift(h), a = Sk.misceval.applyOrSuspend(g, a, b, c, e), function w(a) {
                return a instanceof Sk.misceval.Suspension ? f ? new Sk.misceval.Suspension(w, a) : Sk.misceval.retryOptionalSuspensionOrThrow(a) : h
            }(a)) : h
        };
        var f =
            Sk.ffi.remapToJs(a);
        e = !1;
        0 === b.v.length && Sk.python3 && (e = !0, Sk.abstr.setUpInheritance(f, d, Sk.builtin.object));
        var g, h, k, l = [];
        h = b.tp$iter();
        for (g = h.tp$iternext(); void 0 !== g; g = h.tp$iternext())
            if (void 0 === k && (k = g), g.prototype instanceof Sk.builtin.object || g === Sk.builtin.object) {
                for (; g.sk$klass && g.prototype.tp$base;) g = g.prototype.tp$base;
                !g.sk$klass && 0 > l.indexOf(g) && l.push(g);
                e = !0
            }
        if (1 < l.length) throw new Sk.builtin.TypeError("Multiple inheritance with more than one builtin type is unsupported");
        void 0 !==
            k && (goog.inherits(d, k), k.prototype instanceof Sk.builtin.object || k === Sk.builtin.object) && (d.prototype.tp$base = k);
        d.prototype.tp$name = f;
        d.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(f, d);
        e || (d.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr, d.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr);
        var m = new Sk.builtin.str("__module__");
        void 0 === c.mp$lookup(m) && c.mp$ass_subscript(m, Sk.globals.__name__);
        h = c.tp$iter();
        for (g = h.tp$iternext(); void 0 !== g; g = h.tp$iternext()) e =
            c.mp$subscript(g), void 0 === e && (e = null), d.prototype[g.v] = e, d[g.v] = e;
        d.__class__ = d;
        d.__name__ = a;
        d.sk$klass = !0;
        d.prototype.tp$descr_get = function() {
            goog.asserts.fail("in type tp$descr_get")
        };
        d.prototype.$r = function() {
            var a, b;
            a = this.tp$getattr("__repr__");
            if (void 0 !== a && a.im_func !== Sk.builtin.object.prototype.__repr__) return Sk.misceval.apply(a, void 0, void 0, void 0, []);
            if (void 0 !== d.prototype.tp$base && d.prototype.tp$base !== Sk.builtin.object && void 0 !== d.prototype.tp$base.prototype.$r) return d.prototype.tp$base.prototype.$r.call(this);
            b = c.mp$subscript(m);
            a = "";
            b && (a = b.v + ".");
            return new Sk.builtin.str("<" + a + f + " object>")
        };
        d.prototype.tp$str = function() {
            var a = this.tp$getattr("__str__");
            return void 0 !== a && a.im_func !== Sk.builtin.object.prototype.__str__ ? Sk.misceval.apply(a, void 0, void 0, void 0, []) : void 0 !== d.prototype.tp$base && d.prototype.tp$base !== Sk.builtin.object && void 0 !== d.prototype.tp$base.prototype.tp$str ? d.prototype.tp$base.prototype.tp$str.call(this) : this.$r()
        };
        d.prototype.tp$length = function() {
            var a;
            a = this.tp$getattr("__len__");
            if (void 0 !== a) return Sk.misceval.apply(a, void 0, void 0, void 0, []);
            a = Sk.abstr.typeName(this);
            throw new Sk.builtin.AttributeError(a + " instance has no attribute '__len__'");
        };
        d.prototype.tp$call = function(a, b) {
            var c = this.tp$getattr("__call__");
            if (c) return Sk.misceval.apply(c, void 0, void 0, b, a);
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not callable");
        };
        d.prototype.tp$iter = function() {
            var a;
            a = this.tp$getattr("__iter__");
            var b = Sk.abstr.typeName(this);
            if (a) return a = Sk.misceval.callsim(a);
            throw new Sk.builtin.TypeError("'" + b + "' object is not iterable");
        };
        d.prototype.tp$iternext = function(a) {
            var b, c = this.tp$getattr("next");
            if (c) return b = Sk.misceval.tryCatch(function() {
                return Sk.misceval.callsimOrSuspend(c)
            }, function(a) {
                if (!(a instanceof Sk.builtin.StopIteration)) throw a;
            }), a ? b : Sk.misceval.retryOptionalSuspensionOrThrow(b)
        };
        d.prototype.tp$getitem = function(a, b) {
            var c = this.tp$getattr("__getitem__");
            if (void 0 !== c) return c = Sk.misceval.applyOrSuspend(c, void 0, void 0, void 0, [a]), b ? c : Sk.misceval.retryOptionalSuspensionOrThrow(c);
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support indexing");
        };
        d.prototype.tp$setitem = function(a, b, c) {
            var d = this.tp$getattr("__setitem__");
            if (void 0 !== d) return a = Sk.misceval.applyOrSuspend(d, void 0, void 0, void 0, [a, b]), c ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a);
            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support item assignment");
        };
        b && (d.$d = new Sk.builtin.dict([]), d.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, b), a = Sk.builtin.type.buildMRO(d),
            d.$d.mp$ass_subscript(Sk.builtin.type.mroStr_, a), d.tp$mro = a);
        d.tp$setattr = Sk.builtin.type.prototype.tp$setattr;
        a = function(a, b, c) {
            d.prototype[a] = function() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(c, this);
                return Sk.misceval.callsim.apply(void 0, a)
            }
        };
        for (var p in Sk.dunderToSkulpt) b = Sk.dunderToSkulpt[p], d[p] && a(b, p, d[p]);
        return d
    };
    Sk.builtin.type.makeTypeObj = function(a, b) {
        Sk.builtin.type.makeIntoTypeObj(a, b);
        return b
    };
    Sk.builtin.type.makeIntoTypeObj = function(a, b) {
        goog.asserts.assert(void 0 !== a);
        goog.asserts.assert(void 0 !== b);
        b.ob$type = Sk.builtin.type;
        b.tp$name = a;
        b.$r = function() {
            var a, d = b.__module__,
                e = "";
            d && (e = d.v + ".");
            a = "class";
            d || (b.sk$klass || Sk.python3) || (a = "type");
            return new Sk.builtin.str("<" + a + " '" + e + b.tp$name + "'>")
        };
        b.tp$str = void 0;
        b.tp$getattr = Sk.builtin.type.prototype.tp$getattr;
        b.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
        b.tp$richcompare = Sk.builtin.type.prototype.tp$richcompare;
        b.sk$type = !0;
        return b
    };
    Sk.builtin.type.ob$type = Sk.builtin.type;
    Sk.builtin.type.tp$name = "type";
    Sk.builtin.type.$r = function() {
        return Sk.python3 ? new Sk.builtin.str("<class 'type'>") : new Sk.builtin.str("<type 'type'>")
    };
    Sk.builtin.type.prototype.tp$getattr = function(a) {
        var b, c;
        if (this.$d && (b = this.$d.mp$lookup(new Sk.builtin.str(a)), void 0 !== b)) return b;
        a = Sk.builtin.type.typeLookup(this, a);
        void 0 !== a && (null !== a && void 0 !== a.ob$type) && (c = a.ob$type.tp$descr_get);
        if (c) return c.call(a, null, this);
        if (void 0 !== a) return a
    };
    Sk.builtin.type.prototype.tp$setattr = function(a, b) {
        this[a] = b
    };
    Sk.builtin.type.typeLookup = function(a, b) {
        var c = a.tp$mro,
            d = new Sk.builtin.str(b),
            e, f, g;
        if (c)
            for (g = 0; g < c.v.length; ++g) {
                e = c.v[g];
                if (e.hasOwnProperty(b)) return e[b];
                f = e.$d.mp$lookup(d);
                if (void 0 !== f) return f;
                if (e.prototype && void 0 !== e.prototype[b]) return e.prototype[b]
            } else if (a.prototype) return a.prototype[b]
    };
    Sk.builtin.type.mroMerge_ = function(a) {
        for (var b, c, d, e, f, g, h = [];;) {
            for (c = 0; c < a.length && (b = a[c], 0 === b.length); ++c);
            if (c === a.length) return h;
            d = [];
            for (c = 0; c < a.length; ++c)
                if (b = a[c], 0 !== b.length) {
                    g = b[0];
                    f = 0;
                    a: for (; f < a.length; ++f)
                        for (e = a[f], b = 1; b < e.length; ++b)
                            if (e[b] === g) break a;
                    f === a.length && d.push(g)
                }
            if (0 === d.length) throw new Sk.builtin.TypeError("Nekonsekventas prioritātes tipu hierarhijā");
            d = d[0];
            h.push(d);
            for (c = 0; c < a.length; ++c) b = a[c], 0 < b.length && b[0] === d && b.splice(0, 1)
        }
    };
    Sk.builtin.type.buildMRO_ = function(a) {
        var b, c = [
                [a]
            ],
            d = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
        for (a = 0; a < d.v.length; ++a) c.push(Sk.builtin.type.buildMRO_(d.v[a]));
        b = [];
        for (a = 0; a < d.v.length; ++a) b.push(d.v[a]);
        c.push(b);
        return Sk.builtin.type.mroMerge_(c)
    };
    Sk.builtin.type.buildMRO = function(a) {
        return new Sk.builtin.tuple(Sk.builtin.type.buildMRO_(a))
    };
    Sk.builtin.type.prototype.tp$richcompare = function(a, b) {
        var c, d;
        if (a.ob$type == Sk.builtin.type && this.$r && a.$r) return d = this.$r(), c = a.$r(), d.tp$richcompare(c, b)
    };
    Sk.abstr = {};
    Sk.abstr.typeName = function(a) {
        return void 0 !== a.tp$name ? a.tp$name : "<invalid type>"
    };
    Sk.abstr.binop_type_error = function(a, b, c) {
        a = Sk.abstr.typeName(a);
        b = Sk.abstr.typeName(b);
        throw new Sk.builtin.TypeError("unsupported operand type(s) for " + c + ": '" + a + "' and '" + b + "'");
    };
    Sk.abstr.unop_type_error = function(a, b) {
        var c = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("bad operand type for unary " + {
            UAdd: "+",
            USub: "-",
            Invert: "~"
        } [b] + ": '" + c + "'");
    };
    Sk.abstr.boNameToSlotFuncLhs_ = function(a, b) {
        if (null !== a) switch (b) {
            case "Add":
                return a.nb$add ? a.nb$add : a.__add__;
            case "Sub":
                return a.nb$subtract ? a.nb$subtract : a.__sub__;
            case "Mult":
                return a.nb$multiply ? a.nb$multiply : a.__mul__;
            case "Div":
                return a.nb$divide ? a.nb$divide : a.__div__;
            case "FloorDiv":
                return a.nb$floor_divide ? a.nb$floor_divide : a.__floordiv__;
            case "Mod":
                return a.nb$remainder ? a.nb$remainder : a.__mod__;
            case "DivMod":
                return a.nb$divmod ? a.nb$divmod : a.__divmod__;
            case "Pow":
                return a.nb$power ? a.nb$power :
                    a.__pow__;
            case "LShift":
                return a.nb$lshift ? a.nb$lshift : a.__lshift__;
            case "RShift":
                return a.nb$rshift ? a.nb$rshift : a.__rshift__;
            case "BitAnd":
                return a.nb$and ? a.nb$and : a.__and__;
            case "BitXor":
                return a.nb$xor ? a.nb$xor : a.__xor__;
            case "BitOr":
                return a.nb$or ? a.nb$or : a.__or__
        }
    };
    Sk.abstr.boNameToSlotFuncRhs_ = function(a, b) {
        if (null !== a) switch (b) {
            case "Add":
                return a.nb$reflected_add ? a.nb$reflected_add : a.__radd__;
            case "Sub":
                return a.nb$reflected_subtract ? a.nb$reflected_subtract : a.__rsub__;
            case "Mult":
                return a.nb$reflected_multiply ? a.nb$reflected_multiply : a.__rmul__;
            case "Div":
                return a.nb$reflected_divide ? a.nb$reflected_divide : a.__rdiv__;
            case "FloorDiv":
                return a.nb$reflected_floor_divide ? a.nb$reflected_floor_divide : a.__rfloordiv__;
            case "Mod":
                return a.nb$reflected_remainder ? a.nb$reflected_remainder :
                    a.__rmod__;
            case "DivMod":
                return a.nb$reflected_divmod ? a.nb$reflected_divmod : a.__rdivmod__;
            case "Pow":
                return a.nb$reflected_power ? a.nb$reflected_power : a.__rpow__;
            case "LShift":
                return a.nb$reflected_lshift ? a.nb$reflected_lshift : a.__rlshift__;
            case "RShift":
                return a.nb$reflected_rshift ? a.nb$reflected_rshift : a.__rrshift__;
            case "BitAnd":
                return a.nb$reflected_and ? a.nb$reflected_and : a.__rand__;
            case "BitXor":
                return a.nb$reflected_xor ? a.nb$reflected_xor : a.__rxor__;
            case "BitOr":
                return a.nb$reflected_or ? a.nb$reflected_or :
                    a.__ror__
        }
    };
    Sk.abstr.iboNameToSlotFunc_ = function(a, b) {
        switch (b) {
            case "Add":
                return a.nb$inplace_add ? a.nb$inplace_add : a.__iadd__;
            case "Sub":
                return a.nb$inplace_subtract ? a.nb$inplace_subtract : a.__isub__;
            case "Mult":
                return a.nb$inplace_multiply ? a.nb$inplace_multiply : a.__imul__;
            case "Div":
                return a.nb$inplace_divide ? a.nb$inplace_divide : a.__idiv__;
            case "FloorDiv":
                return a.nb$inplace_floor_divide ? a.nb$inplace_floor_divide : a.__ifloordiv__;
            case "Mod":
                return a.nb$inplace_remainder;
            case "Pow":
                return a.nb$inplace_power;
            case "LShift":
                return a.nb$inplace_lshift ?
                    a.nb$inplace_lshift : a.__ilshift__;
            case "RShift":
                return a.nb$inplace_rshift ? a.nb$inplace_rshift : a.__irshift__;
            case "BitAnd":
                return a.nb$inplace_and;
            case "BitOr":
                return a.nb$inplace_or;
            case "BitXor":
                return a.nb$inplace_xor ? a.nb$inplace_xor : a.__ixor__
        }
    };
    Sk.abstr.uoNameToSlotFunc_ = function(a, b) {
        if (null !== a) switch (b) {
            case "USub":
                return a.nb$negative ? a.nb$negative : a.__neg__;
            case "UAdd":
                return a.nb$positive ? a.nb$positive : a.__pos__;
            case "Invert":
                return a.nb$invert ? a.nb$invert : a.__invert__
        }
    };
    Sk.abstr.binary_op_ = function(a, b, c) {
        var d, e = b.constructor.prototype instanceof a.constructor;
        if (e && (d = Sk.abstr.boNameToSlotFuncRhs_(b, c), void 0 !== d && (d = d.call ? d.call(b, a) : Sk.misceval.callsim(d, b, a), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$))) return d;
        d = Sk.abstr.boNameToSlotFuncLhs_(a, c);
        if (void 0 !== d && (d = d.call ? d.call(a, b) : Sk.misceval.callsim(d, a, b), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$) || !e && (d = Sk.abstr.boNameToSlotFuncRhs_(b, c), void 0 !== d && (d = d.call ? d.call(b,
                a) : Sk.misceval.callsim(d, b, a), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$))) return d;
        Sk.abstr.binop_type_error(a, b, c)
    };
    Sk.abstr.binary_iop_ = function(a, b, c) {
        var d;
        d = Sk.abstr.iboNameToSlotFunc_(a, c);
        if (void 0 !== d && (d = d.call ? d.call(a, b) : Sk.misceval.callsim(d, a, b), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$)) return d;
        d = Sk.abstr.iboNameToSlotFunc_(b, c);
        if (void 0 !== d && (d = d.call ? d.call(b, a) : Sk.misceval.callsim(d, b, a), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$)) return d;
        Sk.abstr.binop_type_error(a, b, c)
    };
    Sk.abstr.unary_op_ = function(a, b) {
        var c;
        c = Sk.abstr.uoNameToSlotFunc_(a, b);
        if (void 0 !== c && (c = c.call ? c.call(a) : Sk.misceval.callsim(c, a), void 0 !== c)) return c;
        Sk.abstr.unop_type_error(a, b)
    };
    Sk.abstr.numOpAndPromote = function(a, b, c) {
        if (null !== a && null !== b) {
            if ("number" === typeof a && "number" === typeof b) return c = c(a, b), (c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$) && Math.floor(c) === c ? [Sk.builtin.lng.fromInt$(a), Sk.builtin.lng.fromInt$(b)] : c;
            if (void 0 === a || void 0 === b) throw new Sk.builtin.NameError("Undefined variable in expression");
            if (a.constructor === Sk.builtin.lng) return [a, b];
            if (a.constructor !== Sk.builtin.int_ && a.constructor !== Sk.builtin.float_ || b.constructor !== Sk.builtin.complex) {
                if (a.constructor ===
                    Sk.builtin.int_ || a.constructor === Sk.builtin.float_) return [a, b];
                if ("number" === typeof a) return a = Sk.builtin.assk$(a), [a, b]
            } else return a = new Sk.builtin.complex(a), [a, b]
        }
    };
    Sk.abstr.boNumPromote_ = {
        Add: function(a, b) {
            return a + b
        },
        Sub: function(a, b) {
            return a - b
        },
        Mult: function(a, b) {
            return a * b
        },
        Mod: function(a, b) {
            var c;
            if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
            c = a % b;
            return 0 > c * b ? c + b : c
        },
        Div: function(a, b) {
            if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
            return a / b
        },
        FloorDiv: function(a, b) {
            if (0 === b) throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
            return Math.floor(a / b)
        },
        Pow: Math.pow,
        BitAnd: function(a,
            b) {
            var c = a & b;
            0 > c && (c += 4294967296);
            return c
        },
        BitOr: function(a, b) {
            var c = a | b;
            0 > c && (c += 4294967296);
            return c
        },
        BitXor: function(a, b) {
            var c = a ^ b;
            0 > c && (c += 4294967296);
            return c
        },
        LShift: function(a, b) {
            var c;
            if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
            c = a << b;
            return c > a ? c : a * Math.pow(2, b)
        },
        RShift: function(a, b) {
            var c;
            if (0 > b) throw new Sk.builtin.ValueError("negative shift count");
            c = a >> b;
            0 < a && 0 > c && (c &= Math.pow(2, 32 - b) - 1);
            return c
        }
    };
    Sk.abstr.numberBinOp = function(a, b, c) {
        var d;
        d = Sk.abstr.boNumPromote_[c];
        if (void 0 !== d) {
            d = Sk.abstr.numOpAndPromote(a, b, d);
            if ("number" === typeof d) return d;
            if (void 0 !== d && d.constructor === Sk.builtin.int_ || void 0 !== d && d.constructor === Sk.builtin.float_ || void 0 !== d && d.constructor === Sk.builtin.lng) return d;
            void 0 !== d && (a = d[0], b = d[1])
        }
        return Sk.abstr.binary_op_(a, b, c)
    };
    goog.exportSymbol("Sk.abstr.numberBinOp", Sk.abstr.numberBinOp);
    Sk.abstr.numberInplaceBinOp = function(a, b, c) {
        var d;
        d = Sk.abstr.boNumPromote_[c];
        if (void 0 !== d) {
            d = Sk.abstr.numOpAndPromote(a, b, d);
            if ("number" === typeof d) return d;
            if (void 0 !== d && d.constructor === Sk.builtin.int_ || void 0 !== d && d.constructor === Sk.builtin.float_ || void 0 !== d && d.constructor === Sk.builtin.lng) return d;
            void 0 !== d && (a = d[0], b = d[1])
        }
        return Sk.abstr.binary_iop_(a, b, c)
    };
    goog.exportSymbol("Sk.abstr.numberInplaceBinOp", Sk.abstr.numberInplaceBinOp);
    Sk.abstr.numberUnaryOp = function(a, b) {
        var c;
        if ("Not" === b) return Sk.misceval.isTrue(a) ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$;
        if (a instanceof Sk.builtin.bool) {
            c = Sk.builtin.asnum$(a);
            if ("USub" === b) return new Sk.builtin.int_(-c);
            if ("UAdd" === b) return new Sk.builtin.int_(c);
            if ("Invert" === b) return new Sk.builtin.int_(~c)
        } else {
            if ("USub" === b && a.nb$negative) return a.nb$negative();
            if ("UAdd" === b && a.nb$positive) return a.nb$positive();
            if ("Invert" === b && a.nb$invert) return a.nb$invert()
        }
        return Sk.abstr.unary_op_(a,
            b)
    };
    goog.exportSymbol("Sk.abstr.numberUnaryOp", Sk.abstr.numberUnaryOp);
    Sk.abstr.fixSeqIndex_ = function(a, b) {
        b = Sk.builtin.asnum$(b);
        0 > b && a.sq$length && (b += a.sq$length());
        return b
    };
    Sk.abstr.sequenceContains = function(a, b, c) {
        var d;
        if (a.sq$contains) return a.sq$contains(b);
        d = Sk.abstr.lookupSpecial(a, "__contains__");
        if (null != d) return Sk.misceval.isTrue(Sk.misceval.callsim(d, a, b));
        if (!Sk.builtin.checkIterable(a)) throw c = Sk.abstr.typeName(a), new Sk.builtin.TypeError("argument of type '" + c + "' is not iterable");
        a = Sk.misceval.iterFor(Sk.abstr.iter(a), function(a) {
            return Sk.misceval.richCompareBool(a, b, "Eq") ? new Sk.misceval.Break(!0) : !1
        }, !1);
        return c ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a)
    };
    Sk.abstr.sequenceConcat = function(a, b) {
        var c;
        if (a.sq$concat) return a.sq$concat(b);
        c = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + c + "' object can't be concatenated");
    };
    Sk.abstr.sequenceGetIndexOf = function(a, b) {
        var c, d, e;
        if (a.index) return Sk.misceval.callsim(a.index, a, b);
        if (Sk.builtin.checkIterable(a)) {
            e = 0;
            d = Sk.abstr.iter(a);
            for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext()) {
                if (Sk.misceval.richCompareBool(b, c, "Eq")) return new Sk.builtin.int_(e);
                e += 1
            }
            throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence");
        }
        c = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("argument of type '" + c + "' is not iterable");
    };
    Sk.abstr.sequenceGetCountOf = function(a, b) {
        var c, d, e;
        if (a.count) return Sk.misceval.callsim(a.count, a, b);
        if (Sk.builtin.checkIterable(a)) {
            e = 0;
            d = Sk.abstr.iter(a);
            for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext()) Sk.misceval.richCompareBool(b, c, "Eq") && (e += 1);
            return new Sk.builtin.int_(e)
        }
        c = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("argument of type '" + c + "' is not iterable");
    };
    Sk.abstr.sequenceGetItem = function(a, b, c) {
        if (a.mp$subscript) return a.mp$subscript(b);
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + a + "' object is unsubscriptable");
    };
    Sk.abstr.sequenceSetItem = function(a, b, c, d) {
        if (a.mp$ass_subscript) return a.mp$ass_subscript(b, c);
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + a + "' object does not support item assignment");
    };
    Sk.abstr.sequenceDelItem = function(a, b) {
        var c;
        if (a.sq$del_item) b = Sk.abstr.fixSeqIndex_(a, b), a.sq$del_item(b);
        else throw c = Sk.abstr.typeName(a), new Sk.builtin.TypeError("'" + c + "' object does not support item deletion");
    };
    Sk.abstr.sequenceRepeat = function(a, b, c) {
        c = Sk.builtin.asnum$(c);
        if (void 0 === Sk.misceval.asIndex(c)) throw a = Sk.abstr.typeName(c), new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + a + "'");
        return a.call(b, c)
    };
    Sk.abstr.sequenceGetSlice = function(a, b, c) {
        if (a.sq$slice) return b = Sk.abstr.fixSeqIndex_(a, b), c = Sk.abstr.fixSeqIndex_(a, c), a.sq$slice(b, c);
        if (a.mp$subscript) return a.mp$subscript(new Sk.builtin.slice(b, c));
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + a + "' object is unsliceable");
    };
    Sk.abstr.sequenceDelSlice = function(a, b, c) {
        if (a.sq$del_slice) b = Sk.abstr.fixSeqIndex_(a, b), c = Sk.abstr.fixSeqIndex_(a, c), a.sq$del_slice(b, c);
        else throw a = Sk.abstr.typeName(a), new Sk.builtin.TypeError("'" + a + "' doesn't support slice deletion");
    };
    Sk.abstr.sequenceSetSlice = function(a, b, c, d) {
        if (a.sq$ass_slice) b = Sk.abstr.fixSeqIndex_(a, b), c = Sk.abstr.fixSeqIndex_(a, c), a.sq$ass_slice(b, c, d);
        else if (a.mp$ass_subscript) a.mp$ass_subscript(new Sk.builtin.slice(b, c), d);
        else throw a = Sk.abstr.typeName(a), new Sk.builtin.TypeError("'" + a + "' object doesn't support slice assignment");
    };
    Sk.abstr.sequenceUnpack = function(a, b) {
        var c = [],
            d, e;
        if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
        d = Sk.abstr.iter(a);
        for (e = d.tp$iternext(); void 0 !== e && c.length < b; e = d.tp$iternext()) c.push(e);
        if (c.length < b) throw new Sk.builtin.ValueError("need more than " + c.length + " values to unpack");
        if (void 0 !== e) throw new Sk.builtin.ValueError("too many values to unpack");
        return c
    };
    Sk.abstr.objectFormat = function(a, b) {
        var c;
        null == b && (b = "");
        c = Sk.abstr.lookupSpecial(a, "__format__");
        if (null == c) throw new Sk.builtin.TypeError("Type " + Sk.abstr.typeName(a) + "doesn't define __format__");
        c = Sk.misceval.callsim(c, a, b);
        if (!Sk.builtin.checkString(c)) throw new Sk.builtin.TypeError("__format__ must return a str, not " + Sk.abstr.typeName(c));
        return c
    };
    Sk.abstr.objectAdd = function(a, b) {
        var c, d;
        if (a.nb$add) return a.nb$add(b);
        d = Sk.abstr.typeName(a);
        c = Sk.abstr.typeName(b);
        throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + d + "' and '" + c + "'");
    };
    Sk.abstr.objectNegative = function(a) {
        var b = Sk.builtin.asnum$(a);
        a instanceof Sk.builtin.bool && (a = new Sk.builtin.int_(b));
        if (a.nb$negative) return a.nb$negative();
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("bad operand type for unary -: '" + a + "'");
    };
    Sk.abstr.objectPositive = function(a) {
        var b = Sk.abstr.typeName(a),
            c = Sk.builtin.asnum$(a);
        a instanceof Sk.builtin.bool && (a = new Sk.builtin.int_(c));
        if (a.nb$negative) return a.nb$positive();
        throw new Sk.builtin.TypeError("bad operand type for unary +: '" + b + "'");
    };
    Sk.abstr.objectDelItem = function(a, b) {
        var c;
        if (null !== a) {
            if (a.mp$del_subscript) {
                a.mp$del_subscript(b);
                return
            }
            if (a.sq$ass_item) {
                c = Sk.misceval.asIndex(b);
                if (void 0 === c) throw c = Sk.abstr.typeName(b), new Sk.builtin.TypeError("secības indeksam jābūt veselam skaitlim, nevis '" + c + "'");
                Sk.abstr.sequenceDelItem(a, c);
                return
            }
        }
        c = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + c + "' objekts neatbalsta vienuma dzēšanu");
    };
    goog.exportSymbol("Sk.abstr.objectDelItem", Sk.abstr.objectDelItem);
    Sk.abstr.objectGetItem = function(a, b, c) {
        if (null !== a) {
            if (a.tp$getitem) return a.tp$getitem(b, c);
            if (a.mp$subscript) return a.mp$subscript(b, c);
            if (Sk.misceval.isIndex(b) && a.sq$item) return Sk.abstr.sequenceGetItem(a, Sk.misceval.asIndex(b), c)
        }
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + a + "' neatbalsta indeksēšanu");
    };
    goog.exportSymbol("Sk.abstr.objectGetItem", Sk.abstr.objectGetItem);
    Sk.abstr.objectSetItem = function(a, b, c, d) {
        if (null !== a) {
            if (a.tp$setitem) return a.tp$setitem(b, c, d);
            if (a.mp$ass_subscript) return a.mp$ass_subscript(b, c, d);
            if (Sk.misceval.isIndex(b) && a.sq$ass_item) return Sk.abstr.sequenceSetItem(a, Sk.misceval.asIndex(b), c, d)
        }
        a = Sk.abstr.typeName(a);
        throw new Sk.builtin.TypeError("'" + a + "' neatbalsta vienumu piešķiršanu");
    };
    goog.exportSymbol("Sk.abstr.objectSetItem", Sk.abstr.objectSetItem);
    Sk.abstr.gattr = function(a, b, c) {
        var d, e, f = Sk.abstr.typeName(a);
        if (null === a) throw new Sk.builtin.AttributeError("'" + f + "' object has no attribute '" + b + "'");
        void 0 !== a.tp$getattr && (e = a.tp$getattr("__getattribute__"));
        void 0 !== e && (d = Sk.misceval.callsimOrSuspend(e, new Sk.builtin.str(b)));
        d = Sk.misceval.chain(d, function(c) {
                var d;
                void 0 === c && void 0 !== a.tp$getattr && (c = a.tp$getattr(b), void 0 === c && (d = a.tp$getattr("__getattr__"), void 0 !== d && (c = Sk.misceval.callsimOrSuspend(d, new Sk.builtin.str(b)))));
                return c
            },
            function(a) {
                if (void 0 === a) throw new Sk.builtin.AttributeError("'" + f + "' object has no attribute '" + b + "'");
                return a
            });
        return c ? d : Sk.misceval.retryOptionalSuspensionOrThrow(d)
    };
    goog.exportSymbol("Sk.abstr.gattr", Sk.abstr.gattr);
    Sk.abstr.sattr = function(a, b, c, d) {
        var e = Sk.abstr.typeName(a),
            f;
        if (null === a) throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + b + "'");
        if (void 0 !== a.tp$getattr && (f = a.tp$getattr("__setattr__"), void 0 !== f)) return a = Sk.misceval.callsimOrSuspend(f, new Sk.builtin.str(b), c), d ? a : Sk.misceval.retryOptionalSuspensionOrThrow(a);
        if (void 0 !== a.tp$setattr) a.tp$setattr(b, c);
        else throw new Sk.builtin.AttributeError("'" + e + "' object has no attribute '" + b + "'");
    };
    goog.exportSymbol("Sk.abstr.sattr", Sk.abstr.sattr);
    Sk.abstr.iternext = function(a, b) {
        return a.tp$iternext(b)
    };
    goog.exportSymbol("Sk.abstr.iternext", Sk.abstr.iternext);
    Sk.abstr.iter = function(a) {
        var b, c, d = function(a) {
            this.idx = 0;
            this.myobj = a;
            this.getitem = Sk.abstr.lookupSpecial(a, "__getitem__");
            this.tp$iternext = function() {
                var a;
                try {
                    a = Sk.misceval.callsim(this.getitem, this.myobj, Sk.ffi.remapToPy(this.idx))
                } catch (b) {
                    if (b instanceof Sk.builtin.IndexError || b instanceof Sk.builtin.StopIteration) return;
                    throw b;
                }
                this.idx++;
                return a
            }
        };
        if (a.tp$getattr && (b = Sk.abstr.lookupSpecial(a, "__iter__")) && (c = Sk.misceval.callsim(b, a), c.tp$iternext)) return c;
        if (a.tp$iter) try {
            if (c = a.tp$iter(),
                c.tp$iternext) return c
        } catch (e) {}
        if (Sk.abstr.lookupSpecial(a, "__getitem__")) return new d(a);
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
    };
    goog.exportSymbol("Sk.abstr.iter", Sk.abstr.iter);
    Sk.abstr.lookupSpecial = function(a, b) {
        var c;
        if (a.ob$type) c = a.ob$type;
        else return null;
        return Sk.builtin.type.typeLookup(c, b)
    };
    goog.exportSymbol("Sk.abstr.lookupSpecial", Sk.abstr.lookupSpecial);
    Sk.abstr.markUnhashable = function(a) {
        a = a.prototype;
        a.__hash__ = Sk.builtin.none.none$;
        a.tp$hash = Sk.builtin.none.none$
    };
    Sk.abstr.setUpInheritance = function(a, b, c) {
        goog.inherits(b, c);
        b.prototype.tp$base = c;
        b.prototype.tp$name = a;
        b.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(a, b)
    };
    Sk.abstr.superConstructor = function(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        a.prototype.tp$base.apply(b, d)
    };
    Sk.builtin.object = function() {
        return this instanceof Sk.builtin.object ? this : new Sk.builtin.object
    };
    Sk.builtin.object.prototype.GenericGetAttr = function(a) {
        var b, c, d, e, f = new Sk.builtin.str(a);
        goog.asserts.assert("string" === typeof a);
        d = this.ob$type;
        goog.asserts.assert(void 0 !== d, "object has no ob$type!");
        if (e = this.$d || this.constructor.$d) {
            if (e.mp$lookup) b = e.mp$lookup(f);
            else if (e.mp$subscript) try {
                b = e.mp$subscript(f)
            } catch (g) {
                b = void 0
            } else "object" === typeof e && (b = e[a]);
            if (void 0 !== b) return b
        }
        a = Sk.builtin.type.typeLookup(d, a);
        void 0 !== a && (null !== a && void 0 !== a.ob$type) && (c = a.ob$type.tp$descr_get);
        if (c) return c.call(a,
            this, this.ob$type);
        if (void 0 !== a) return a
    };
    goog.exportSymbol("Sk.builtin.object.prototype.GenericGetAttr", Sk.builtin.object.prototype.GenericGetAttr);
    Sk.builtin.object.prototype.GenericPythonGetAttr = function(a, b) {
        return Sk.builtin.object.prototype.GenericGetAttr.call(a, b.v)
    };
    goog.exportSymbol("Sk.builtin.object.prototype.GenericPythonGetAttr", Sk.builtin.object.prototype.GenericPythonGetAttr);
    Sk.builtin.object.prototype.GenericSetAttr = function(a, b) {
        var c = Sk.abstr.typeName(this),
            d, e;
        goog.asserts.assert("string" === typeof a);
        e = this.$d || this.constructor.$d;
        if (e.mp$ass_subscript) {
            d = new Sk.builtin.str(a);
            if (this instanceof Sk.builtin.object && !this.ob$type.sk$klass && void 0 === e.mp$lookup(d)) throw new Sk.builtin.AttributeError("'" + c + "' object has no attribute '" + a + "'");
            e.mp$ass_subscript(new Sk.builtin.str(a), b)
        } else "object" === typeof e && (e[a] = b)
    };
    goog.exportSymbol("Sk.builtin.object.prototype.GenericSetAttr", Sk.builtin.object.prototype.GenericSetAttr);
    Sk.builtin.object.prototype.GenericPythonSetAttr = function(a, b, c) {
        return Sk.builtin.object.prototype.GenericSetAttr.call(a, b.v, c)
    };
    goog.exportSymbol("Sk.builtin.object.prototype.GenericPythonSetAttr", Sk.builtin.object.prototype.GenericPythonSetAttr);
    Sk.builtin.object.prototype.HashNotImplemented = function() {
        throw new Sk.builtin.TypeError("unhashable type: '" + Sk.abstr.typeName(this) + "'");
    };
    Sk.builtin.object.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
    Sk.builtin.object.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
    Sk.builtin.object.prototype.__getattr__ = Sk.builtin.object.prototype.GenericPythonGetAttr;
    Sk.builtin.object.prototype.__setattr__ = Sk.builtin.object.prototype.GenericPythonSetAttr;
    Sk.builtin.object.prototype.tp$name = "object";
    Sk.builtin.object.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("object", Sk.builtin.object);
    Sk.builtin.object.prototype.ob$type.sk$klass = void 0;
    Sk.builtin.object.prototype.__repr__ = function(a) {
        Sk.builtin.pyCheckArgs("__repr__", arguments, 0, 0, !1, !0);
        return a.$r()
    };
    Sk.builtin.object.prototype.__str__ = function(a) {
        Sk.builtin.pyCheckArgs("__str__", arguments, 0, 0, !1, !0);
        return a.$r()
    };
    Sk.builtin.object.prototype.__hash__ = function(a) {
        Sk.builtin.pyCheckArgs("__hash__", arguments, 0, 0, !1, !0);
        return a.tp$hash()
    };
    Sk.builtin.object.prototype.__eq__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__eq__", arguments, 1, 1, !1, !0);
        return a.ob$eq(b)
    };
    Sk.builtin.object.prototype.__ne__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__ne__", arguments, 1, 1, !1, !0);
        return a.ob$ne(b)
    };
    Sk.builtin.object.prototype.__lt__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__lt__", arguments, 1, 1, !1, !0);
        return a.ob$lt(b)
    };
    Sk.builtin.object.prototype.__le__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__le__", arguments, 1, 1, !1, !0);
        return a.ob$le(b)
    };
    Sk.builtin.object.prototype.__gt__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__gt__", arguments, 1, 1, !1, !0);
        return a.ob$gt(b)
    };
    Sk.builtin.object.prototype.__ge__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__ge__", arguments, 1, 1, !1, !0);
        return a.ob$ge(b)
    };
    Sk.builtin.object.prototype.$r = function() {
        return new Sk.builtin.str("<object>")
    };
    Sk.builtin.hashCount = 1;
    Sk.builtin.object.prototype.tp$hash = function() {
        this.$savedHash_ || (this.$savedHash_ = new Sk.builtin.int_(Sk.builtin.hashCount++));
        return this.$savedHash_
    };
    Sk.builtin.object.prototype.ob$eq = function(a) {
        return this === a ? Sk.builtin.bool.true$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.prototype.ob$ne = function(a) {
        return this === a ? Sk.builtin.bool.false$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.prototype.ob$lt = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.prototype.ob$le = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.prototype.ob$gt = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.prototype.ob$ge = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.object.pythonFunctions = "__repr__ __str__ __hash__ __eq__ __ne__ __lt__ __le__ __gt__ __ge__ __getattr__ __setattr__".split(" ");
    Sk.builtin.none = function() {
        this.v = null
    };
    Sk.abstr.setUpInheritance("NoneType", Sk.builtin.none, Sk.builtin.object);
    Sk.builtin.none.prototype.$r = function() {
        return new Sk.builtin.str("None")
    };
    Sk.builtin.none.prototype.tp$hash = function() {
        return new Sk.builtin.int_(0)
    };
    Sk.builtin.none.none$ = new Sk.builtin.none;
    Sk.builtin.NotImplemented = function() {};
    Sk.abstr.setUpInheritance("NotImplementedType", Sk.builtin.NotImplemented, Sk.builtin.object);
    Sk.builtin.NotImplemented.prototype.$r = function() {
        return new Sk.builtin.str("NotImplemented")
    };
    Sk.builtin.NotImplemented.NotImplemented$ = new Sk.builtin.NotImplemented;
    goog.exportSymbol("Sk.builtin.none", Sk.builtin.none);
    goog.exportSymbol("Sk.builtin.NotImplemented", Sk.builtin.NotImplemented);
    Sk.builtin.pyCheckArgs = function(a, b, c, d, e, f) {
        b = b.length;
        var g = "";
        void 0 === d && (d = Infinity);
        e && (b -= 1);
        f && (b -= 1);
        if (b < c || b > d) throw g = (c === d ? a + "() takes exactly " + c + " arguments" : b < c ? a + "() takes at least " + c + " arguments" : a + "() takes at most " + d + " arguments") + (" (" + b + " given)"), new Sk.builtin.TypeError(g);
    };
    goog.exportSymbol("Sk.builtin.pyCheckArgs", Sk.builtin.pyCheckArgs);
    Sk.builtin.pyCheckType = function(a, b, c) {
        if (!c) throw new Sk.builtin.TypeError(a + " must be a " + b);
    };
    goog.exportSymbol("Sk.builtin.pyCheckType", Sk.builtin.pyCheckType);
    Sk.builtin.checkSequence = function(a) {
        return null !== a && void 0 !== a.mp$subscript
    };
    goog.exportSymbol("Sk.builtin.checkSequence", Sk.builtin.checkSequence);
    Sk.builtin.checkIterable = function(a) {
        var b = !1;
        if (null !== a) try {
            return (b = Sk.abstr.iter(a)) ? !0 : !1
        } catch (c) {
            if (c instanceof Sk.builtin.TypeError) return !1;
            throw c;
        }
        return b
    };
    goog.exportSymbol("Sk.builtin.checkIterable", Sk.builtin.checkIterable);
    Sk.builtin.checkCallable = function(a) {
        return "function" === typeof a ? !(a instanceof Sk.builtin.none) && void 0 !== a.ob$type : void 0 !== a.tp$call || void 0 !== a.__call__
    };
    Sk.builtin.checkNumber = function(a) {
        return null !== a && ("number" === typeof a || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ || a instanceof Sk.builtin.lng)
    };
    goog.exportSymbol("Sk.builtin.checkNumber", Sk.builtin.checkNumber);
    Sk.builtin.checkComplex = function(a) {
        return Sk.builtin.complex._complex_check(a)
    };
    goog.exportSymbol("Sk.builtin.checkComplex", Sk.builtin.checkComplex);
    Sk.builtin.checkInt = function(a) {
        return null !== a && ("number" === typeof a && a === (a | 0) || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng)
    };
    goog.exportSymbol("Sk.builtin.checkInt", Sk.builtin.checkInt);
    Sk.builtin.checkFloat = function(a) {
        return null !== a && a instanceof Sk.builtin.float_
    };
    goog.exportSymbol("Sk.builtin.checkFloat", Sk.builtin.checkFloat);
    Sk.builtin.checkString = function(a) {
        return null !== a && a.__class__ == Sk.builtin.str
    };
    goog.exportSymbol("Sk.builtin.checkString", Sk.builtin.checkString);
    Sk.builtin.checkClass = function(a) {
        return null !== a && a.sk$type
    };
    goog.exportSymbol("Sk.builtin.checkClass", Sk.builtin.checkClass);
    Sk.builtin.checkBool = function(a) {
        return a instanceof Sk.builtin.bool
    };
    goog.exportSymbol("Sk.builtin.checkBool", Sk.builtin.checkBool);
    Sk.builtin.checkNone = function(a) {
        return a instanceof Sk.builtin.none
    };
    goog.exportSymbol("Sk.builtin.checkNone", Sk.builtin.checkNone);
    Sk.builtin.checkFunction = function(a) {
        return null !== a && void 0 !== a.tp$call
    };
    goog.exportSymbol("Sk.builtin.checkFunction", Sk.builtin.checkFunction);
    Sk.builtin.func = function(a, b, c, d) {
        var e;
        this.func_code = a;
        this.func_globals = b || null;
        if (void 0 !== d)
            for (e in d) c[e] = d[e];
        this.func_closure = c;
        return this
    };
    goog.exportSymbol("Sk.builtin.func", Sk.builtin.func);
    Sk.builtin.func.prototype.tp$name = "function";
    Sk.builtin.func.prototype.tp$descr_get = function(a, b) {
        goog.asserts.assert(void 0 !== a && void 0 !== b);
        return null == a ? this : new Sk.builtin.method(this, a)
    };
    Sk.builtin.func.prototype.tp$call = function(a, b) {
        var c, d, e, f, g, h, k;
        this.func_closure && a.push(this.func_closure);
        k = this.func_code.co_kwargs;
        h = [];
        if (this.func_code.no_kw && b) throw c = this.func_code && this.func_code.co_name && this.func_code.co_name.v || "<native JS>", new Sk.builtin.TypeError(c + "() takes no keyword arguments");
        if (b)
            for (g = b.length, e = (f = this.func_code.co_varnames) && f.length, d = 0; d < g; d += 2) {
                for (c = 0; c < e && b[d] !== f[c]; ++c);
                if (f && c !== e) {
                    if (c in a) throw c = this.func_code && this.func_code.co_name && this.func_code.co_name.v ||
                        "<native JS>", new Sk.builtin.TypeError(c + "() got multiple values for keyword argument '" + b[d] + "'");
                    a[c] = b[d + 1]
                } else if (k) h.push(new Sk.builtin.str(b[d])), h.push(b[d + 1]);
                else throw c = this.func_code && this.func_code.co_name && this.func_code.co_name.v || "<native JS>", new Sk.builtin.TypeError(c + "() got an unexpected keyword argument '" + b[d] + "'");
            }
        k && a.unshift(h);
        return this.func_code.apply(this.func_globals, a)
    };
    Sk.builtin.func.prototype.tp$getattr = function(a) {
        return this[a]
    };
    Sk.builtin.func.prototype.tp$setattr = function(a, b) {
        this[a] = b
    };
    Sk.builtin.func.prototype.ob$type = Sk.builtin.type.makeTypeObj("function", new Sk.builtin.func(null, null));
    Sk.builtin.func.prototype.$r = function() {
        return new Sk.builtin.str("<function " + (this.func_code && this.func_code.co_name && this.func_code.co_name.v || "<native JS>") + ">")
    };
    Sk.builtin.range = function(a, b, c) {
        var d = [],
            e;
        Sk.builtin.pyCheckArgs("range", arguments, 1, 3);
        Sk.builtin.pyCheckType("start", "integer", Sk.builtin.checkInt(a));
        void 0 !== b && Sk.builtin.pyCheckType("stop", "integer", Sk.builtin.checkInt(b));
        void 0 !== c && Sk.builtin.pyCheckType("step", "integer", Sk.builtin.checkInt(c));
        a = Sk.builtin.asnum$(a);
        b = Sk.builtin.asnum$(b);
        c = Sk.builtin.asnum$(c);
        void 0 === b && void 0 === c ? (b = a, a = 0, c = 1) : void 0 === c && (c = 1);
        if (0 === c) throw new Sk.builtin.ValueError("range() step argument must not be zero");
        if (0 < c)
            for (e = a; e < b; e += c) d.push(new Sk.builtin.int_(e));
        else
            for (e = a; e > b; e += c) d.push(new Sk.builtin.int_(e));
        return new Sk.builtin.list(d)
    };
    Sk.builtin.asnum$ = function(a) {
        return void 0 === a || null === a ? a : a instanceof Sk.builtin.none ? null : a instanceof Sk.builtin.bool ? a.v ? 1 : 0 : "number" === typeof a ? a : "string" === typeof a ? a : a instanceof Sk.builtin.int_ ? a.v : a instanceof Sk.builtin.float_ ? a.v : a instanceof Sk.builtin.lng ? a.cantBeInt() ? a.str$(10, !0) : a.toInt$() : a.constructor === Sk.builtin.biginteger ? 0 < a.trueCompare(new Sk.builtin.biginteger(Sk.builtin.int_.threshold$)) || 0 > a.trueCompare(new Sk.builtin.biginteger(-Sk.builtin.int_.threshold$)) ? a.toString() :
            a.intValue() : a
    };
    goog.exportSymbol("Sk.builtin.asnum$", Sk.builtin.asnum$);
    Sk.builtin.assk$ = function(a) {
        return 0 === a % 1 ? new Sk.builtin.int_(a) : new Sk.builtin.float_(a)
    };
    goog.exportSymbol("Sk.builtin.assk$", Sk.builtin.assk$);
    Sk.builtin.asnum$nofloat = function(a) {
        var b, c;
        if (void 0 === a || null === a) return a;
        if (a.constructor === Sk.builtin.none) return null;
        if (a.constructor === Sk.builtin.bool) return a.v ? 1 : 0;
        "number" === typeof a && (a = a.toString());
        a.constructor === Sk.builtin.int_ && (a = a.v.toString());
        a.constructor === Sk.builtin.float_ && (a = a.v.toString());
        a.constructor === Sk.builtin.lng && (a = a.str$(10, !0));
        a.constructor === Sk.builtin.biginteger && (a = a.toString());
        if (0 > a.indexOf(".") && 0 > a.indexOf("e") && 0 > a.indexOf("E")) return a;
        c = 0;
        0 <= a.indexOf("e") ?
            (b = a.substr(0, a.indexOf("e")), c = a.substr(a.indexOf("e") + 1)) : 0 <= a.indexOf("E") ? (b = a.substr(0, a.indexOf("e")), c = a.substr(a.indexOf("E") + 1)) : b = a;
        c = parseInt(c, 10);
        a = b.indexOf(".");
        if (0 > a) {
            if (0 <= c) {
                for (; 0 < c--;) b += "0";
                return b
            }
            return b.length > -c ? b.substr(0, b.length + c) : 0
        }
        b = 0 === a ? b.substr(1) : a < b.length ? b.substr(0, a) + b.substr(a + 1) : b.substr(0, a);
        for (a += c; a > b.length;) b += "0";
        return b = 0 >= a ? 0 : b.substr(0, a)
    };
    goog.exportSymbol("Sk.builtin.asnum$nofloat", Sk.builtin.asnum$nofloat);
    Sk.builtin.round = function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("round", arguments, 1, 2);
        if (!Sk.builtin.checkNumber(a)) throw new Sk.builtin.TypeError("a float is required");
        if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
        void 0 === b && (b = 0);
        if (a.__round__) return a.__round__(a, b);
        c = Sk.abstr.lookupSpecial(a, "__round__");
        if (null != c) return Sk.misceval.callsim(c, a, b)
    };
    Sk.builtin.len = function(a) {
        Sk.builtin.pyCheckArgs("len", arguments, 1, 1);
        if (a.sq$length) return new Sk.builtin.int_(a.sq$length());
        if (a.mp$length) return new Sk.builtin.int_(a.mp$length());
        if (a.tp$length) return new Sk.builtin.int_(a.tp$length());
        throw new Sk.builtin.TypeError("object of type '" + Sk.abstr.typeName(a) + "' has no len()");
    };
    Sk.builtin.min = function() {
        var a, b, c;
        Sk.builtin.pyCheckArgs("min", arguments, 1);
        c = Sk.misceval.arrayFromArguments(arguments);
        b = c[0];
        if (void 0 === b) throw new Sk.builtin.ValueError("min() arg is an empty sequence");
        for (a = 1; a < c.length; ++a) Sk.misceval.richCompareBool(c[a], b, "Lt") && (b = c[a]);
        return b
    };
    Sk.builtin.max = function() {
        var a, b, c;
        Sk.builtin.pyCheckArgs("max", arguments, 1);
        c = Sk.misceval.arrayFromArguments(arguments);
        b = c[0];
        if (void 0 === b) throw new Sk.builtin.ValueError("max() arg is an empty sequence");
        for (a = 1; a < c.length; ++a) Sk.misceval.richCompareBool(c[a], b, "Gt") && (b = c[a]);
        return b
    };
    Sk.builtin.any = function(a) {
        var b, c;
        Sk.builtin.pyCheckArgs("any", arguments, 1, 1);
        if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
        b = Sk.abstr.iter(a);
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext())
            if (Sk.misceval.isTrue(c)) return Sk.builtin.bool.true$;
        return Sk.builtin.bool.false$
    };
    Sk.builtin.all = function(a) {
        var b, c;
        Sk.builtin.pyCheckArgs("all", arguments, 1, 1);
        if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
        b = Sk.abstr.iter(a);
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext())
            if (!Sk.misceval.isTrue(c)) return Sk.builtin.bool.false$;
        return Sk.builtin.bool.true$
    };
    Sk.builtin.sum = function(a, b) {
        var c, d, e, f, g;
        Sk.builtin.pyCheckArgs("sum", arguments, 1, 2);
        Sk.builtin.pyCheckType("iter", "iterable", Sk.builtin.checkIterable(a));
        if (void 0 !== b && Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");
        c = void 0 === b ? new Sk.builtin.int_(0) : b;
        e = Sk.abstr.iter(a);
        for (f = e.tp$iternext(); void 0 !== f; f = e.tp$iternext()) {
            f instanceof Sk.builtin.float_ ? (g = !0, c instanceof Sk.builtin.float_ || (c = new Sk.builtin.float_(Sk.builtin.asnum$(c)))) :
                f instanceof Sk.builtin.lng && (g || c instanceof Sk.builtin.lng || (c = new Sk.builtin.lng(c)));
            if (void 0 !== c.nb$add && (d = c.nb$add(f), void 0 !== d && d !== Sk.builtin.NotImplemented.NotImplemented$)) {
                c = c.nb$add(f);
                continue
            }
            throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + Sk.abstr.typeName(c) + "' and '" + Sk.abstr.typeName(f) + "'");
        }
        return c
    };
    Sk.builtin.zip = function() {
        var a, b, c, d, e, f;
        if (0 === arguments.length) return new Sk.builtin.list([]);
        f = [];
        for (e = 0; e < arguments.length; e++)
            if (Sk.builtin.checkIterable(arguments[e])) f.push(Sk.abstr.iter(arguments[e]));
            else throw new Sk.builtin.TypeError("argument " + e + " must support iteration");
        d = [];
        for (c = !1; !c;) {
            b = [];
            for (e = 0; e < arguments.length; e++) {
                a = f[e].tp$iternext();
                if (void 0 === a) {
                    c = !0;
                    break
                }
                b.push(a)
            }
            c || d.push(new Sk.builtin.tuple(b))
        }
        return new Sk.builtin.list(d)
    };
    Sk.builtin.abs = function(a) {
        Sk.builtin.pyCheckArgs("abs", arguments, 1, 1);
        if (a instanceof Sk.builtin.int_) return new Sk.builtin.int_(Math.abs(a.v));
        if (a instanceof Sk.builtin.float_) return new Sk.builtin.float_(Math.abs(a.v));
        if (Sk.builtin.checkNumber(a)) return Sk.builtin.assk$(Math.abs(Sk.builtin.asnum$(a)));
        if (Sk.builtin.checkComplex(a)) return Sk.misceval.callsim(a.__abs__, a);
        if (a.tp$getattr) {
            var b = a.tp$getattr("__abs__");
            return Sk.misceval.callsim(b)
        }
        throw new TypeError("bad operand type for abs(): '" +
            Sk.abstr.typeName(a) + "'");
    };
    Sk.builtin.ord = function(a) {
        Sk.builtin.pyCheckArgs("ord", arguments, 1, 1);
        if (!Sk.builtin.checkString(a)) throw new Sk.builtin.TypeError("ord() expected a string of length 1, but " + Sk.abstr.typeName(a) + " found");
        if (1 !== a.v.length) throw new Sk.builtin.TypeError("ord() expected a character, but string of length " + a.v.length + " found");
        return new Sk.builtin.int_(a.v.charCodeAt(0))
    };
    Sk.builtin.chr = function(a) {
        Sk.builtin.pyCheckArgs("chr", arguments, 1, 1);
        if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("an integer is required");
        a = Sk.builtin.asnum$(a);
        if (0 > a || 255 < a) throw new Sk.builtin.ValueError("chr() arg not in range(256)");
        return new Sk.builtin.str(String.fromCharCode(a))
    };
    Sk.builtin.unichr = function(a) {
        Sk.builtin.pyCheckArgs("chr", arguments, 1, 1);
        if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("an integer is required");
        a = Sk.builtin.asnum$(a);
        try {
            return new Sk.builtin.str(String.fromCodePoint(a))
        } catch (b) {
            if (b instanceof RangeError) throw new Sk.builtin.ValueError(b.message);
            throw b;
        }
    };
    Sk.builtin.int2str_ = function(a, b, c) {
        var d, e = "";
        if (a instanceof Sk.builtin.lng) return d = "", 2 !== b && (d = "L"), e = a.str$(b, !1), a.nb$isnegative() ? new Sk.builtin.str("-" + c + e + d) : new Sk.builtin.str(c + e + d);
        a = Sk.misceval.asIndex(a);
        e = a.toString(b);
        return 0 > a ? new Sk.builtin.str("-" + c + e.slice(1)) : new Sk.builtin.str(c + e)
    };
    Sk.builtin.hex = function(a) {
        Sk.builtin.pyCheckArgs("hex", arguments, 1, 1);
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");
        return Sk.builtin.int2str_(a, 16, "0x")
    };
    Sk.builtin.oct = function(a) {
        Sk.builtin.pyCheckArgs("oct", arguments, 1, 1);
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");
        return Sk.builtin.int2str_(a, 8, "0")
    };
    Sk.builtin.bin = function(a) {
        Sk.builtin.pyCheckArgs("bin", arguments, 1, 1);
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object can't be interpreted as an index");
        return Sk.builtin.int2str_(a, 2, "0b")
    };
    Sk.builtin.dir = function(a) {
        var b, c, d, e, f, g, h;
        Sk.builtin.pyCheckArgs("dir", arguments, 1, 1);
        h = function(a) {
            var b = null;
            if (-1 !== "__bases__ __mro__ __class__ __name__ GenericGetAttr GenericSetAttr GenericPythonGetAttr GenericPythonSetAttr pythonFunctions HashNotImplemented constructor".split(" ").indexOf(a)) return null; - 1 !== a.indexOf("$") ? b = Sk.builtin.dir.slotNameToRichName(a) : "_" !== a.charAt(a.length - 1) ? b = a : "_" === a.charAt(0) && (b = a);
            return b
        };
        g = [];
        b = Sk.abstr.lookupSpecial(a, "__dir__");
        if (null != b) {
            c = Sk.misceval.callsim(b,
                a);
            if (!Sk.builtin.checkSequence(c)) throw new Sk.builtin.TypeError("__dir__ must return sequence.");
            c = Sk.ffi.remapToJs(c);
            for (e = 0; e < c.length; ++e) g.push(new Sk.builtin.str(c[e]))
        } else {
            for (e in a.constructor.prototype)(f = h(e)) && g.push(new Sk.builtin.str(f));
            if (a.$d)
                if (a.$d.tp$iter)
                    for (b = a.$d.tp$iter(), e = b.tp$iternext(); void 0 !== e; e = b.tp$iternext()) f = new Sk.builtin.str(e), (f = h(f.v)) && g.push(new Sk.builtin.str(f));
                else
                    for (f in a.$d) g.push(new Sk.builtin.str(f));
            d = a.tp$mro;
            !d && a.ob$type && (d = a.ob$type.tp$mro);
            if (d)
                for (e = 0; e < d.v.length; ++e)
                    for (c in b = d.v[e], b) b.hasOwnProperty(c) && (f = h(c)) && g.push(new Sk.builtin.str(f))
        }
        g.sort(function(a, b) {
            return (a.v > b.v) - (a.v < b.v)
        });
        return new Sk.builtin.list(g.filter(function(a, b, c) {
            return a !== c[b + 1]
        }))
    };
    Sk.builtin.dir.slotNameToRichName = function(a) {};
    Sk.builtin.repr = function(a) {
        Sk.builtin.pyCheckArgs("repr", arguments, 1, 1);
        return Sk.misceval.objectRepr(a)
    };
    Sk.builtin.open = function(a, b, c) {
        Sk.builtin.pyCheckArgs("open", arguments, 1, 3);
        void 0 === b && (b = new Sk.builtin.str("r"));
        return new Sk.builtin.file(a, b, c)
    };
    Sk.builtin.isinstance = function(a, b) {
        var c, d;
        Sk.builtin.pyCheckArgs("isinstance", arguments, 2, 2);
        if (!(Sk.builtin.checkClass(b) || b instanceof Sk.builtin.tuple)) throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");
        if (b === Sk.builtin.none.prototype.ob$type) return a instanceof Sk.builtin.none ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
        if (a.ob$type === b) return Sk.builtin.bool.true$;
        if (b instanceof Sk.builtin.tuple) {
            for (d = 0; d < b.v.length; ++d)
                if (Sk.misceval.isTrue(Sk.builtin.isinstance(a,
                        b.v[d]))) return Sk.builtin.bool.true$;
            return Sk.builtin.bool.false$
        }
        if (a instanceof b) return Sk.builtin.bool.true$;
        c = function(a, b) {
            var d, h;
            if (a === b) return Sk.builtin.bool.true$;
            if (void 0 === a.$d) return Sk.builtin.bool.false$;
            h = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
            for (d = 0; d < h.v.length; ++d)
                if (Sk.misceval.isTrue(c(h.v[d], b))) return Sk.builtin.bool.true$;
            return Sk.builtin.bool.false$
        };
        return c(a.ob$type, b)
    };
    Sk.builtin.hash = function(a) {
        Sk.builtin.pyCheckArgs("hash", arguments, 1, 1);
        if (a instanceof Object) {
            if (Sk.builtin.checkNone(a.tp$hash)) throw new Sk.builtin.TypeError(new Sk.builtin.str("unhashable type: '" + Sk.abstr.typeName(a) + "'"));
            if (void 0 !== a.tp$hash) {
                if (a.$savedHash_) return a.$savedHash_;
                a.$savedHash_ = a.tp$hash();
                return a.$savedHash_
            }
            void 0 === a.__id && (Sk.builtin.hashCount += 1, a.__id = Sk.builtin.hashCount);
            return new Sk.builtin.int_(a.__id)
        }
        if ("number" === typeof a || null === a || !0 === a || !1 === a) throw new Sk.builtin.TypeError("unsupported Javascript type");
        return new Sk.builtin.str(typeof a + " " + String(a))
    };
    Sk.builtin.getattr = function(a, b, c) {
        var d;
        Sk.builtin.pyCheckArgs("getattr", arguments, 2, 3);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("attribute name must be string");
        d = a.tp$getattr(b.v);
        if (void 0 === d) {
            if (void 0 !== c) return c;
            throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(a) + "' object has no attribute '" + b.v + "'");
        }
        return d
    };
    Sk.builtin.setattr = function(a, b, c) {
        Sk.builtin.pyCheckArgs("setattr", arguments, 3, 3);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("attribute name must be string");
        if (a.tp$setattr) a.tp$setattr(Sk.ffi.remapToJs(b), c);
        else throw new Sk.builtin.AttributeError("object has no attribute " + Sk.ffi.remapToJs(b));
        return Sk.builtin.none.none$
    };
    Sk.builtin.raw_input = function(a) {
        var b = Sk.importModule("sys");
        a && Sk.misceval.callsimOrSuspend(b.$d.stdout.write, b.$d.stdout, new Sk.builtin.str(a));
        return Sk.misceval.callsimOrSuspend(b.$d.stdin.readline, b.$d.stdin)
    };
    Sk.builtin.input = Sk.builtin.raw_input;
    Sk.builtin.jseval = function(a) {
        goog.global.eval(a)
    };
    Sk.builtin.jsmillis = function() {
        return (new Date).valueOf()
    };
    Sk.builtin.superbi = function() {
        throw new Sk.builtin.NotImplementedError("super is not yet implemented, please report your use case as a github issue.");
    };
    Sk.builtin.eval_ = function() {
        throw new Sk.builtin.NotImplementedError("eval is not yet implemented");
    };
    Sk.builtin.map = function(a, b) {
        var c, d, e, f, g, h;
        Sk.builtin.pyCheckArgs("map", arguments, 2);
        if (2 < arguments.length) {
            h = [];
            g = Array.prototype.slice.apply(arguments).slice(1);
            for (f in g) {
                if (!Sk.builtin.checkIterable(g[f])) throw c = parseInt(f, 10) + 2, new Sk.builtin.TypeError("argument " + c + " to map() must support iteration");
                g[f] = Sk.abstr.iter(g[f])
            }
            for (;;) {
                e = [];
                d = 0;
                for (f in g) c = g[f].tp$iternext(), void 0 === c ? (e.push(Sk.builtin.none.none$), d++) : e.push(c);
                if (d !== g.length) h.push(e);
                else break
            }
            b = new Sk.builtin.list(h)
        }
        if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" +
            Sk.abstr.typeName(b) + "' object is not iterable");
        e = [];
        c = Sk.abstr.iter(b);
        for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) a === Sk.builtin.none.none$ ? (d instanceof Array && (d = new Sk.builtin.tuple(d)), e.push(d)) : (d instanceof Array || (d = [d]), e.push(Sk.misceval.apply(a, void 0, void 0, void 0, d)));
        return new Sk.builtin.list(e)
    };
    Sk.builtin.reduce = function(a, b, c) {
        var d, e, f;
        Sk.builtin.pyCheckArgs("reduce", arguments, 2, 3);
        if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
        f = Sk.abstr.iter(b);
        if (void 0 === c && (c = f.tp$iternext(), void 0 === c)) throw new Sk.builtin.TypeError("reduce() of empty sequence with no initial value");
        e = c;
        for (d = f.tp$iternext(); void 0 !== d; d = f.tp$iternext()) e = Sk.misceval.callsim(a, e, d);
        return e
    };
    Sk.builtin.filter = function(a, b) {
        var c, d, e, f, g, h;
        Sk.builtin.pyCheckArgs("filter", arguments, 2, 2);
        if (!Sk.builtin.checkIterable(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
        c = function() {
            return []
        };
        h = function(a, b) {
            a.push(b);
            return a
        };
        g = function(a) {
            return new Sk.builtin.list(a)
        };
        b.__class__ === Sk.builtin.str ? (c = function() {
            return new Sk.builtin.str("")
        }, h = function(a, b) {
            return a.sq$concat(b)
        }, g = function(a) {
            return a
        }) : b.__class__ === Sk.builtin.tuple && (g = function(a) {
            return new Sk.builtin.tuple(a)
        });
        f = c();
        d = Sk.abstr.iter(b);
        for (e = d.tp$iternext(); void 0 !== e; e = d.tp$iternext()) c = a === Sk.builtin.none.none$ ? new Sk.builtin.bool(e) : Sk.misceval.callsim(a, e), Sk.misceval.isTrue(c) && (f = h(f, e));
        return g(f)
    };
    Sk.builtin.hasattr = function(a, b) {
        Sk.builtin.pyCheckArgs("hasattr", arguments, 2, 2);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("hasattr(): attribute name must be string");
        if (a.tp$getattr) return a.tp$getattr(b.v) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
        throw new Sk.builtin.AttributeError("Object has no tp$getattr method");
    };
    Sk.builtin.pow = function(a, b, c) {
        var d, e;
        Sk.builtin.pyCheckArgs("pow", arguments, 2, 3);
        c instanceof Sk.builtin.none && (c = void 0);
        if (Sk.builtin.checkComplex(a)) return a.nb$power(b, c);
        d = Sk.builtin.asnum$(a);
        e = Sk.builtin.asnum$(b);
        Sk.builtin.asnum$(c);
        if (!Sk.builtin.checkNumber(a) || !Sk.builtin.checkNumber(b)) {
            if (void 0 === c) throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.abstr.typeName(a) + "' and '" + Sk.abstr.typeName(b) + "'");
            throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" +
                Sk.abstr.typeName(a) + "', '" + Sk.abstr.typeName(b) + "', '" + Sk.abstr.typeName(c) + "'");
        }
        if (0 > d && b instanceof Sk.builtin.float_) throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");
        if (void 0 === c) {
            if (a instanceof Sk.builtin.float_ || b instanceof Sk.builtin.float_ || 0 > e) return new Sk.builtin.float_(Math.pow(d, e));
            d = new Sk.builtin.int_(d);
            e = new Sk.builtin.int_(e);
            d = d.nb$power(e);
            return a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng ? new Sk.builtin.lng(d) : d
        }
        if (!Sk.builtin.checkInt(a) ||
            !Sk.builtin.checkInt(b) || !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");
        if (0 > e) throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
        return a instanceof Sk.builtin.lng || (b instanceof Sk.builtin.lng || c instanceof Sk.builtin.lng) || Infinity === Math.pow(d, e) ? (a = new Sk.builtin.lng(a), a.nb$power(b, c)) : (new Sk.builtin.int_(Math.pow(d, e))).nb$remainder(c)
    };
    Sk.builtin.quit = function(a) {
        a = (new Sk.builtin.str(a)).v;
        throw new Sk.builtin.SystemExit(a);
    };
    Sk.builtin.issubclass = function(a, b) {
        var c, d;
        Sk.builtin.pyCheckArgs("issubclass", arguments, 2, 2);
        if (!(Sk.builtin.checkClass(b) || b instanceof Sk.builtin.tuple)) throw new Sk.builtin.TypeError("issubclass() arg 2 must be a classinfo, type, or tuple of classes and types");
        d = function(a, b) {
            var c, h;
            if (a === b) return !0;
            if (void 0 !== a.$d && a.$d.mp$subscript) h = a.$d.mp$subscript(Sk.builtin.type.basesStr_);
            else return !1;
            for (c = 0; c < h.v.length; ++c)
                if (d(h.v[c], b)) return !0;
            return !1
        };
        if (Sk.builtin.checkClass(b)) return a ===
            b ? !0 : d(a, b);
        if (b instanceof Sk.builtin.tuple) {
            for (c = 0; c < b.v.length; ++c)
                if (Sk.builtin.issubclass(a, b.v[c])) return !0;
            return !1
        }
    };
    Sk.builtin.globals = function() {
        var a, b = new Sk.builtin.dict([]);
        for (a in Sk.globals) b.mp$ass_subscript(new Sk.builtin.str(a), Sk.globals[a]);
        return b
    };
    Sk.builtin.divmod = function(a, b) {
        return Sk.abstr.numberBinOp(a, b, "DivMod")
    };
    Sk.builtin.format = function(a, b) {
        Sk.builtin.pyCheckArgs("format", arguments, 1, 2);
        return Sk.abstr.objectFormat(a, b)
    };
    Sk.builtin.reversed = function(a) {
        Sk.builtin.pyCheckArgs("reversed", arguments, 1, 1);
        var b = Sk.abstr.lookupSpecial(a, "__reversed__");
        if (null != b) return Sk.misceval.callsim(b, a);
        if (!Sk.builtin.checkSequence(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not a sequence");
        return new function(a) {
            this.idx = a.sq$length() - 1;
            this.myobj = a;
            this.getitem = Sk.abstr.lookupSpecial(a, "__getitem__");
            this.tp$iter = function() {
                return this
            };
            this.tp$iternext = function() {
                var a;
                if (!(0 > this.idx)) {
                    try {
                        a = Sk.misceval.callsim(this.getitem,
                            this.myobj, Sk.ffi.remapToPy(this.idx))
                    } catch (b) {
                        if (b instanceof Sk.builtin.IndexError) return;
                        throw b;
                    }
                    this.idx--;
                    return a
                }
            }
        }(a)
    };
    Sk.builtin.bytearray = function() {
        throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented");
    };
    Sk.builtin.callable = function() {
        throw new Sk.builtin.NotImplementedError("callable is not yet implemented");
    };
    Sk.builtin.delattr = function() {
        throw new Sk.builtin.NotImplementedError("delattr is not yet implemented");
    };
    Sk.builtin.execfile = function() {
        throw new Sk.builtin.NotImplementedError("execfile is not yet implemented");
    };
    Sk.builtin.frozenset = function() {
        throw new Sk.builtin.NotImplementedError("frozenset is not yet implemented");
    };
    Sk.builtin.help = function() {
        throw new Sk.builtin.NotImplementedError("help is not yet implemented");
    };
    Sk.builtin.iter = function() {
        throw new Sk.builtin.NotImplementedError("iter is not yet implemented");
    };
    Sk.builtin.locals = function() {
        throw new Sk.builtin.NotImplementedError("locals is not yet implemented");
    };
    Sk.builtin.memoryview = function() {
        throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented");
    };
    Sk.builtin.next_ = function() {
        throw new Sk.builtin.NotImplementedError("next is not yet implemented");
    };
    Sk.builtin.property = function() {
        throw new Sk.builtin.NotImplementedError("property is not yet implemented");
    };
    Sk.builtin.reload = function() {
        throw new Sk.builtin.NotImplementedError("reload is not yet implemented");
    };
    Sk.builtin.vars = function() {
        throw new Sk.builtin.NotImplementedError("vars is not yet implemented");
    };
    Sk.builtin.xrange = Sk.builtin.range;
    Sk.builtin.apply_ = function() {
        throw new Sk.builtin.NotImplementedError("apply is not yet implemented");
    };
    Sk.builtin.buffer = function() {
        throw new Sk.builtin.NotImplementedError("buffer is not yet implemented");
    };
    Sk.builtin.coerce = function() {
        throw new Sk.builtin.NotImplementedError("coerce is not yet implemented");
    };
    Sk.builtin.intern = function() {
        throw new Sk.builtin.NotImplementedError("intern is not yet implemented");
    };
    String.fromCodePoint || function() {
        var a = function() {
                var a;
                try {
                    var b = {},
                        c = Object.defineProperty;
                    a = c(b, "foo", b) && c
                } catch (d) {}
                return a
            }(),
            b = String.fromCharCode,
            c = Math.floor,
            d = function(a) {
                var d = [],
                    g, h, k = -1,
                    l = arguments.length;
                if (!l) return "";
                for (var m = ""; ++k < l;) {
                    h = Number(arguments[k]);
                    if (!isFinite(h) || 0 > h || 1114111 < h || c(h) != h) throw RangeError("Invalid code point: " + h);
                    65535 >= h ? d.push(h) : (h -= 65536, g = (h >> 10) + 55296, h = h % 1024 + 56320, d.push(g, h));
                    if (k + 1 == l || 16384 < d.length) m += b.apply(null, d), d.length = 0
                }
                return m
            };
        a ? a(String, "fromCodePoint", {
            value: d,
            configurable: !0,
            writable: !0
        }) : String.fromCodePoint = d
    }();
    Sk.builtin.BaseException = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.BaseException)) return b = Object.create(Sk.builtin.BaseException.prototype), b.constructor.apply(b, arguments), b;
        a = Array.prototype.slice.call(arguments);
        for (b = 0; b < a.length; ++b) "string" === typeof a[b] && (a[b] = new Sk.builtin.str(a[b]));
        this.args = new Sk.builtin.tuple(a);
        this.traceback = [];
        3 <= this.args.sq$length() && this.traceback.push({
            lineno: this.args.v[2],
            filename: this.args.v[1].v || "<unknown>"
        })
    };
    Sk.abstr.setUpInheritance("BaseException", Sk.builtin.BaseException, Sk.builtin.object);
    Sk.builtin.BaseException.prototype.tp$str = function() {
        var a, b;
        b = "" + this.tp$name;
        this.args && (b += ": " + (0 < this.args.v.length ? this.args.v[0].v : ""));
        b = 0 !== this.traceback.length ? b + (" - Līnija " + this.traceback[0].lineno) : b + " at <unknown>";
        if (4 < this.args.v.length) {
            b += "\n" + this.args.v[4].v + "\n";
            for (a = 0; a < this.args.v[3]; ++a) b += " ";
            b += "^\n"
        }
        return new Sk.builtin.str(b)
    };
    Sk.builtin.BaseException.prototype.toString = function() {
        return this.tp$str().v
    };
    goog.exportSymbol("Sk.builtin.BaseException", Sk.builtin.BaseException);
    Sk.builtin.Exception = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.Exception)) return b = Object.create(Sk.builtin.Exception.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.BaseException.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("Exception", Sk.builtin.Exception, Sk.builtin.BaseException);
    goog.exportSymbol("Sk.builtin.Exception", Sk.builtin.Exception);
    Sk.builtin.StandardError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.StandardError)) return b = Object.create(Sk.builtin.StandardError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.Exception.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("StandardError", Sk.builtin.StandardError, Sk.builtin.Exception);
    goog.exportSymbol("Sk.builtin.StandardError", Sk.builtin.StandardError);
    Sk.builtin.AssertionError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.AssertionError)) return b = Object.create(Sk.builtin.AssertionError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("AssertionError", Sk.builtin.AssertionError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.AssertionError", Sk.builtin.AssertionError);
    Sk.builtin.AttributeError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.AttributeError)) return b = Object.create(Sk.builtin.AttributeError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("AttributeError", Sk.builtin.AttributeError, Sk.builtin.StandardError);
    Sk.builtin.ImportError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.ImportError)) return b = Object.create(Sk.builtin.ImportError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("අභිප්‍රාය දෝෂ", Sk.builtin.ImportError, Sk.builtin.StandardError);
    Sk.builtin.IndentationError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.IndentationError)) return b = Object.create(Sk.builtin.IndentationError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("IndentationError", Sk.builtin.IndentationError, Sk.builtin.StandardError);
    Sk.builtin.IndexError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.IndexError)) return b = Object.create(Sk.builtin.IndexError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("IndexError", Sk.builtin.IndexError, Sk.builtin.StandardError);
    Sk.builtin.KeyError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.KeyError)) return b = Object.create(Sk.builtin.KeyError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("KeyError", Sk.builtin.KeyError, Sk.builtin.StandardError);
    Sk.builtin.NameError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.NameError)) return b = Object.create(Sk.builtin.NameError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("nominālās kļūdas", Sk.builtin.NameError, Sk.builtin.StandardError);
    Sk.builtin.UnboundLocalError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.UnboundLocalError)) return b = Object.create(Sk.builtin.UnboundLocalError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("UnboundLocalError", Sk.builtin.UnboundLocalError, Sk.builtin.StandardError);
    Sk.builtin.OverflowError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.OverflowError)) return b = Object.create(Sk.builtin.OverflowError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("OverflowError", Sk.builtin.OverflowError, Sk.builtin.StandardError);
    Sk.builtin.ParseError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.ParseError)) return b = Object.create(Sk.builtin.ParseError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("Gramatikas kļūdas", Sk.builtin.ParseError, Sk.builtin.StandardError);
    Sk.builtin.RuntimeError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.RuntimeError)) return b = Object.create(Sk.builtin.RuntimeError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("RuntimeError", Sk.builtin.RuntimeError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.RuntimeError", Sk.builtin.RuntimeError);
    Sk.builtin.SuspensionError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.SuspensionError)) return b = Object.create(Sk.builtin.SuspensionError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("SuspensionError", Sk.builtin.SuspensionError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.SuspensionError", Sk.builtin.SuspensionError);
    Sk.builtin.SystemExit = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.SystemExit)) return b = Object.create(Sk.builtin.SystemExit.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.BaseException.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("SystemExit", Sk.builtin.SystemExit, Sk.builtin.BaseException);
    goog.exportSymbol("Sk.builtin.SystemExit", Sk.builtin.SystemExit);
    Sk.builtin.SyntaxError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.SyntaxError)) return b = Object.create(Sk.builtin.SyntaxError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("SyntaxError", Sk.builtin.SyntaxError, Sk.builtin.StandardError);
    Sk.builtin.TokenError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.TokenError)) return b = Object.create(Sk.builtin.TokenError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("TokenError", Sk.builtin.TokenError, Sk.builtin.StandardError);
    Sk.builtin.TypeError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.TypeError)) return b = Object.create(Sk.builtin.TypeError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("TypeError", Sk.builtin.TypeError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.TypeError", Sk.builtin.TypeError);
    Sk.builtin.ValueError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.ValueError)) return b = Object.create(Sk.builtin.ValueError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("ValueError", Sk.builtin.ValueError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.ValueError", Sk.builtin.ValueError);
    Sk.builtin.ZeroDivisionError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.ZeroDivisionError)) return b = Object.create(Sk.builtin.ZeroDivisionError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("ZeroDivisionError", Sk.builtin.ZeroDivisionError, Sk.builtin.StandardError);
    Sk.builtin.TimeLimitError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.TimeLimitError)) return b = Object.create(Sk.builtin.TimeLimitError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("TimeLimitError", Sk.builtin.TimeLimitError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.TimeLimitError", Sk.builtin.TimeLimitError);
    Sk.builtin.IOError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.IOError)) return b = Object.create(Sk.builtin.IOError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("IOError", Sk.builtin.IOError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.IOError", Sk.builtin.IOError);
    Sk.builtin.NotImplementedError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.NotImplementedError)) return b = Object.create(Sk.builtin.NotImplementedError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("NotImplementedError", Sk.builtin.NotImplementedError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.NotImplementedError", Sk.builtin.NotImplementedError);
    Sk.builtin.NegativePowerError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.NegativePowerError)) return b = Object.create(Sk.builtin.NegativePowerError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("NegativePowerError", Sk.builtin.NegativePowerError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.NegativePowerError", Sk.builtin.NegativePowerError);
    Sk.builtin.ExternalError = function(a, b) {
        var c;
        if (!(this instanceof Sk.builtin.ExternalError)) return c = Object.create(Sk.builtin.ExternalError.prototype), c.constructor.apply(c, arguments), c;
        b = Array.prototype.slice.call(arguments);
        this.nativeError = b[0];
        b[0] instanceof Sk.builtin.str || (b[0] = "" + b[0]);
        Sk.builtin.StandardError.apply(this, b)
    };
    Sk.abstr.setUpInheritance("ExternalError", Sk.builtin.ExternalError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.ExternalError", Sk.builtin.ExternalError);
    Sk.builtin.OperationError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.OperationError)) return b = Object.create(Sk.builtin.OperationError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("OperationError", Sk.builtin.OperationError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.OperationError", Sk.builtin.OperationError);
    Sk.builtin.SystemError = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.SystemError)) return b = Object.create(Sk.builtin.SystemError.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.StandardError.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("SystemError", Sk.builtin.SystemError, Sk.builtin.StandardError);
    goog.exportSymbol("Sk.builtin.SystemError", Sk.builtin.SystemError);
    Sk.builtin.StopIteration = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.StopIteration)) return b = Object.create(Sk.builtin.StopIteration.prototype), b.constructor.apply(b, arguments), b;
        Sk.builtin.Exception.apply(this, arguments)
    };
    Sk.abstr.setUpInheritance("StopIteration", Sk.builtin.StopIteration, Sk.builtin.Exception);
    goog.exportSymbol("Sk.builtin.StopIteration", Sk.builtin.StopIteration);
    goog.exportSymbol("Sk", Sk);
    Sk.nativejs = {
        FN_ARGS: /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        FN_ARG_SPLIT: /,/,
        FN_ARG: /^\s*(_?)(\S+?)\1\s*$/,
        STRIP_COMMENTS: /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        formalParameterList: function(a) {
            var b, c, d = [];
            a = a.toString().replace(this.STRIP_COMMENTS, "").match(this.FN_ARGS)[1].split(this.FN_ARG_SPLIT);
            for (b in a) c = a[b], c.replace(this.FN_ARG, function(a, b, c) {
                d.push(c)
            });
            return d
        },
        func: function(a) {
            a.co_name = new Sk.builtin.str(a.name);
            a.co_varnames = Sk.nativejs.formalParameterList(a);
            return new Sk.builtin.func(a)
        },
        func_nokw: function(a) {
            a.co_name = new Sk.builtin.str(a.name);
            a.co_varnames = Sk.nativejs.formalParameterList(a);
            a.no_kw = !0;
            return new Sk.builtin.func(a)
        }
    };
    goog.exportSymbol("Sk.nativejs.func", Sk.nativejs.func);
    goog.exportSymbol("Sk.nativejs.func_nokw", Sk.nativejs.func_nokw);
    Sk.builtin.method = function(a, b) {
        this.im_func = a;
        this.im_self = b
    };
    goog.exportSymbol("Sk.builtin.method", Sk.builtin.method);
    Sk.builtin.method.prototype.tp$call = function(a, b) {
        goog.asserts.assert(this.im_self, "should just be a function, not a method since there's no self?");
        goog.asserts.assert(this.im_func instanceof Sk.builtin.func);
        a.unshift(this.im_self);
        return this.im_func.tp$call(a, b)
    };
    Sk.builtin.method.prototype.$r = function() {
        return new Sk.builtin.str("<bound method " + this.im_self.ob$type.tp$name + "." + (this.im_func.func_code && this.im_func.func_code.co_name && this.im_func.func_code.co_name.v || "<native JS>") + " of " + this.im_self.$r().v + ">")
    };
    Sk.misceval = {};
    Sk.misceval.Suspension = function(a, b, c) {
        this.isSuspension = !0;
        void 0 !== a && void 0 !== b && (this.resume = function() {
            return a(b.resume())
        });
        this.child = b;
        this.optional = void 0 !== b && b.optional;
        this.data = void 0 === c && void 0 !== b ? b.data : c
    };
    goog.exportSymbol("Sk.misceval.Suspension", Sk.misceval.Suspension);
    Sk.misceval.retryOptionalSuspensionOrThrow = function(a, b) {
        for (; a instanceof Sk.misceval.Suspension;) {
            if (!a.optional) throw new Sk.builtin.SuspensionError(b || "Cannot call a function that blocks or suspends here");
            a = a.resume()
        }
        return a
    };
    goog.exportSymbol("Sk.misceval.retryOptionalSuspensionOrThrow", Sk.misceval.retryOptionalSuspensionOrThrow);
    Sk.misceval.isIndex = function(a) {
        return Sk.builtin.checkInt(a) || Sk.abstr.lookupSpecial(a, "__index__") ? !0 : !1
    };
    goog.exportSymbol("Sk.misceval.isIndex", Sk.misceval.isIndex);
    Sk.misceval.asIndex = function(a) {
        var b;
        if (Sk.misceval.isIndex(a) && null !== a) {
            if (!0 === a) return 1;
            if (!1 === a) return 0;
            if ("number" === typeof a) return a;
            if (a.constructor === Sk.builtin.int_) return a.v;
            if (a.constructor === Sk.builtin.lng) return a.tp$index();
            if (a.constructor === Sk.builtin.bool) return Sk.builtin.asnum$(a);
            if (b = Sk.abstr.lookupSpecial(a, "__index__")) {
                a = Sk.misceval.callsim(b, a);
                if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__index__ returned non-(int,long) (type " + Sk.abstr.typeName(a) +
                    ")");
                return Sk.builtin.asnum$(a)
            }
            goog.asserts.fail("todo asIndex;")
        }
    };
    Sk.misceval.applySlice = function(a, b, c, d) {
        return a.sq$slice && Sk.misceval.isIndex(b) && Sk.misceval.isIndex(c) ? (b = Sk.misceval.asIndex(b), void 0 === b && (b = 0), c = Sk.misceval.asIndex(c), void 0 === c && (c = 1E100), Sk.abstr.sequenceGetSlice(a, b, c)) : Sk.abstr.objectGetItem(a, new Sk.builtin.slice(b, c, null), d)
    };
    goog.exportSymbol("Sk.misceval.applySlice", Sk.misceval.applySlice);
    Sk.misceval.assignSlice = function(a, b, c, d, e) {
        if (a.sq$ass_slice && Sk.misceval.isIndex(b) && Sk.misceval.isIndex(c)) e = Sk.misceval.asIndex(b) || 0, c = Sk.misceval.asIndex(c) || 1E100, null === d ? Sk.abstr.sequenceDelSlice(a, e, c) : Sk.abstr.sequenceSetSlice(a, e, c, d);
        else return c = new Sk.builtin.slice(b, c), null === d ? Sk.abstr.objectDelItem(a, c) : Sk.abstr.objectSetItem(a, c, d, e)
    };
    goog.exportSymbol("Sk.misceval.assignSlice", Sk.misceval.assignSlice);
    Sk.misceval.arrayFromArguments = function(a) {
        var b, c;
        if (1 != a.length) return a;
        b = a[0];
        b instanceof Sk.builtin.set ? b = b.tp$iter().$obj : b instanceof Sk.builtin.dict && (b = Sk.builtin.dict.prototype.keys.func_code(b));
        if (b instanceof Sk.builtin.list || b instanceof Sk.builtin.tuple) return b.v;
        if (Sk.builtin.checkIterable(b)) {
            a = [];
            b = Sk.abstr.iter(b);
            for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) a.push(c);
            return a
        }
        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object is not iterable");
    };
    goog.exportSymbol("Sk.misceval.arrayFromArguments", Sk.misceval.arrayFromArguments);
    Sk.misceval.swappedOp_ = {
        Eq: "Eq",
        NotEq: "NotEq",
        Lt: "GtE",
        LtE: "Gt",
        Gt: "LtE",
        GtE: "Lt",
        Is: "IsNot",
        IsNot: "Is",
        In_: "NotIn",
        NotIn: "In_"
    };
    Sk.misceval.richCompareBool = function(a, b, c, d) {
        var e, f, g, h, k, l, m;
        goog.asserts.assert(null !== a && void 0 !== a, "passed null or undefined parameter to Sk.misceval.richCompareBool");
        goog.asserts.assert(null !== b && void 0 !== b, "passed null or undefined parameter to Sk.misceval.richCompareBool");
        m = new Sk.builtin.type(a);
        h = new Sk.builtin.type(b);
        if (m !== h && ("GtE" === c || "Gt" === c || "LtE" === c || "Lt" === c)) {
            l = [Sk.builtin.float_.prototype.ob$type, Sk.builtin.int_.prototype.ob$type, Sk.builtin.lng.prototype.ob$type, Sk.builtin.bool.prototype.ob$type];
            k = [Sk.builtin.dict.prototype.ob$type, Sk.builtin.enumerate.prototype.ob$type, Sk.builtin.list.prototype.ob$type, Sk.builtin.str.prototype.ob$type, Sk.builtin.tuple.prototype.ob$type];
            f = l.indexOf(m);
            g = k.indexOf(m);
            l = l.indexOf(h);
            k = k.indexOf(h);
            if (m === Sk.builtin.none.prototype.ob$type) switch (c) {
                case "Lt":
                    return !0;
                case "LtE":
                    return !0;
                case "Gt":
                    return !1;
                case "GtE":
                    return !1
            }
            if (h === Sk.builtin.none.prototype.ob$type) switch (c) {
                case "Lt":
                    return !1;
                case "LtE":
                    return !1;
                case "Gt":
                    return !0;
                case "GtE":
                    return !0
            }
            if (-1 !==
                f && -1 !== k) switch (c) {
                case "Lt":
                    return !0;
                case "LtE":
                    return !0;
                case "Gt":
                    return !1;
                case "GtE":
                    return !1
            }
            if (-1 !== g && -1 !== l) switch (c) {
                case "Lt":
                    return !1;
                case "LtE":
                    return !1;
                case "Gt":
                    return !0;
                case "GtE":
                    return !0
            }
            if (-1 !== g && -1 !== k) switch (c) {
                case "Lt":
                    return g < k;
                case "LtE":
                    return g <= k;
                case "Gt":
                    return g > k;
                case "GtE":
                    return g >= k
            }
        }
        if ("Is" === c) return a instanceof Sk.builtin.int_ && b instanceof Sk.builtin.int_ ? 0 === a.numberCompare(b) : a instanceof Sk.builtin.float_ && b instanceof Sk.builtin.float_ ? 0 === a.numberCompare(b) :
            a instanceof Sk.builtin.lng && b instanceof Sk.builtin.lng ? 0 === a.longCompare(b) : a === b;
        if ("IsNot" === c) return a instanceof Sk.builtin.int_ && b instanceof Sk.builtin.int_ ? 0 !== a.numberCompare(b) : a instanceof Sk.builtin.float_ && b instanceof Sk.builtin.float_ ? 0 !== a.numberCompare(b) : a instanceof Sk.builtin.lng && b instanceof Sk.builtin.lng ? 0 !== a.longCompare(b) : a !== b;
        if ("In" === c) return Sk.misceval.chain(Sk.abstr.sequenceContains(b, a, d), Sk.misceval.isTrue);
        if ("NotIn" === c) return Sk.misceval.chain(Sk.abstr.sequenceContains(b,
            a, d), function(a) {
            return !Sk.misceval.isTrue(a)
        });
        f = {
            Eq: "ob$eq",
            NotEq: "ob$ne",
            Gt: "ob$gt",
            GtE: "ob$ge",
            Lt: "ob$lt",
            LtE: "ob$le"
        };
        g = f[c];
        if ((d = a.constructor.prototype.hasOwnProperty(g)) && (e = a[g](b)) !== Sk.builtin.NotImplemented.NotImplemented$) return Sk.misceval.isTrue(e);
        f = f[Sk.misceval.swappedOp_[c]];
        if ((g = b.constructor.prototype.hasOwnProperty(f)) && (e = b[f](a)) !== Sk.builtin.NotImplemented.NotImplemented$) return Sk.misceval.isTrue(e);
        if (a.tp$richcompare && void 0 !== (e = a.tp$richcompare(b, c)) && e != Sk.builtin.NotImplemented.NotImplemented$ ||
            b.tp$richcompare && void 0 !== (e = b.tp$richcompare(a, Sk.misceval.swappedOp_[c])) && e != Sk.builtin.NotImplemented.NotImplemented$) return Sk.misceval.isTrue(e);
        h = {
            Eq: "__eq__",
            NotEq: "__ne__",
            Gt: "__gt__",
            GtE: "__ge__",
            Lt: "__lt__",
            LtE: "__le__"
        };
        if ((f = Sk.abstr.lookupSpecial(a, h[c])) && !d && (e = Sk.misceval.callsim(f, a, b), e != Sk.builtin.NotImplemented.NotImplemented$) || (d = Sk.abstr.lookupSpecial(b, h[Sk.misceval.swappedOp_[c]])) && !g && (e = Sk.misceval.callsim(d, b, a), e != Sk.builtin.NotImplemented.NotImplemented$)) return Sk.misceval.isTrue(e);
        if (d = Sk.abstr.lookupSpecial(a, "__cmp__")) try {
            e = Sk.misceval.callsim(d, a, b);
            if (Sk.builtin.checkNumber(e)) {
                e = Sk.builtin.asnum$(e);
                if ("Eq" === c) return 0 === e;
                if ("NotEq" === c) return 0 !== e;
                if ("Lt" === c) return 0 > e;
                if ("Gt" === c) return 0 < e;
                if ("LtE" === c) return 0 >= e;
                if ("GtE" === c) return 0 <= e
            }
            if (e !== Sk.builtin.NotImplemented.NotImplemented$) throw new Sk.builtin.TypeError("comparison did not return an int");
        } catch (p) {
            throw new Sk.builtin.TypeError("comparison did not return an int");
        }
        if (d = Sk.abstr.lookupSpecial(b, "__cmp__")) try {
            e =
                Sk.misceval.callsim(d, b, a);
            if (Sk.builtin.checkNumber(e)) {
                e = Sk.builtin.asnum$(e);
                if ("Eq" === c) return 0 === e;
                if ("NotEq" === c) return 0 !== e;
                if ("Lt" === c) return 0 < e;
                if ("Gt" === c) return 0 > e;
                if ("LtE" === c) return 0 <= e;
                if ("GtE" === c) return 0 >= e
            }
            if (e !== Sk.builtin.NotImplemented.NotImplemented$) throw new Sk.builtin.TypeError("comparison did not return an int");
        } catch (n) {
            throw new Sk.builtin.TypeError("comparison did not return an int");
        }
        if (a instanceof Sk.builtin.none && b instanceof Sk.builtin.none || a instanceof Sk.builtin.bool &&
            b instanceof Sk.builtin.bool) {
            if ("Eq" === c) return a.v === b.v;
            if ("NotEq" === c) return a.v !== b.v;
            if ("Gt" === c) return a.v > b.v;
            if ("GtE" === c) return a.v >= b.v;
            if ("Lt" === c) return a.v < b.v;
            if ("LtE" === c) return a.v <= b.v
        }
        if ("Eq" === c) return a instanceof Sk.builtin.str && b instanceof Sk.builtin.str ? a.v === b.v : a === b;
        if ("NotEq" === c) return a instanceof Sk.builtin.str && b instanceof Sk.builtin.str ? a.v !== b.v : a !== b;
        a = Sk.abstr.typeName(a);
        b = Sk.abstr.typeName(b);
        throw new Sk.builtin.ValueError("don't know how to compare '" + a + "' and '" +
            b + "'");
    };
    goog.exportSymbol("Sk.misceval.richCompareBool", Sk.misceval.richCompareBool);
    Sk.misceval.objectRepr = function(a) {
        goog.asserts.assert(void 0 !== a, "trying to repr undefined");
        return null === a || a instanceof Sk.builtin.none ? new Sk.builtin.str("None") : !0 === a ? new Sk.builtin.str("True") : !1 === a ? new Sk.builtin.str("False") : "number" === typeof a ? new Sk.builtin.str("" + a) : a.$r ? a.constructor === Sk.builtin.float_ ? Infinity === a.v ? new Sk.builtin.str("inf") : -Infinity === a.v ? new Sk.builtin.str("-inf") : a.$r() : a.$r() : a.tp$name ? new Sk.builtin.str("<" + a.tp$name + " object>") : new Sk.builtin.str("<unknown>")
    };
    goog.exportSymbol("Sk.misceval.objectRepr", Sk.misceval.objectRepr);
    Sk.misceval.opAllowsEquality = function(a) {
        switch (a) {
            case "LtE":
            case "Eq":
            case "GtE":
                return !0
        }
        return !1
    };
    goog.exportSymbol("Sk.misceval.opAllowsEquality", Sk.misceval.opAllowsEquality);
    Sk.misceval.isTrue = function(a) {
        if (!0 === a) return !0;
        if (!1 === a || null === a || a.constructor === Sk.builtin.none || a.constructor === Sk.builtin.NotImplemented) return !1;
        if (a.constructor === Sk.builtin.bool) return a.v;
        if ("number" === typeof a) return 0 !== a;
        if (a instanceof Sk.builtin.lng) return a.nb$nonzero();
        if (a.constructor === Sk.builtin.int_ || a.constructor === Sk.builtin.float_) return 0 !== a.v;
        if (a.__nonzero__) {
            a = Sk.misceval.callsim(a.__nonzero__, a);
            if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__nonzero__ should return an int");
            return 0 !== Sk.builtin.asnum$(a)
        }
        if (a.__len__) {
            a = Sk.misceval.callsim(a.__len__, a);
            if (!Sk.builtin.checkInt(a)) throw new Sk.builtin.TypeError("__len__ should return an int");
            return 0 !== Sk.builtin.asnum$(a)
        }
        return a.mp$length ? 0 !== Sk.builtin.asnum$(a.mp$length()) : a.sq$length ? 0 !== Sk.builtin.asnum$(a.sq$length()) : !0
    };
    goog.exportSymbol("Sk.misceval.isTrue", Sk.misceval.isTrue);
    Sk.misceval.softspace_ = !1;
    Sk.misceval.print_ = function(a) {
        var b;
        Sk.misceval.softspace_ && ("\n" !== a && Sk.output(" "), Sk.misceval.softspace_ = !1);
        a = new Sk.builtin.str(a);
        b = Sk.importModule("sys");
        Sk.misceval.apply(b.$d.stdout.write, void 0, void 0, void 0, [b.$d.stdout, a]);
        b = function(a) {
            return "\n" === a || "\t" === a || "\r" === a
        };
        0 !== a.v.length && b(a.v[a.v.length - 1]) && " " !== a.v[a.v.length - 1] || (Sk.misceval.softspace_ = !0)
    };
    goog.exportSymbol("Sk.misceval.print_", Sk.misceval.print_);
    Sk.misceval.loadname = function(a, b) {
        var c;
        c = b[a];
        if (void 0 !== c) return c;
        c = Sk.builtins[a];
        if (void 0 !== c) return c;
        a = a.replace("_$rw$", "");
        a = a.replace("_$rn$", "");
        throw new Sk.builtin.NameError("'" + a + "' Nevar saprast, ko darīt");
    };
    goog.exportSymbol("Sk.misceval.loadname", Sk.misceval.loadname);
    Sk.misceval.call = function(a, b, c, d, e) {
        e = Array.prototype.slice.call(arguments, 4);
        return Sk.misceval.apply(a, b, c, d, e)
    };
    goog.exportSymbol("Sk.misceval.call", Sk.misceval.call);
    Sk.misceval.callAsync = function(a, b, c, d, e, f) {
        f = Array.prototype.slice.call(arguments, 5);
        return Sk.misceval.applyAsync(a, b, c, d, e, f)
    };
    goog.exportSymbol("Sk.misceval.callAsync", Sk.misceval.callAsync);
    Sk.misceval.callOrSuspend = function(a, b, c, d, e) {
        e = Array.prototype.slice.call(arguments, 4);
        return Sk.misceval.applyOrSuspend(a, b, c, d, e)
    };
    goog.exportSymbol("Sk.misceval.callOrSuspend", Sk.misceval.callOrSuspend);
    Sk.misceval.callsim = function(a, b) {
        b = Array.prototype.slice.call(arguments, 1);
        return Sk.misceval.apply(a, void 0, void 0, void 0, b)
    };
    goog.exportSymbol("Sk.misceval.callsim", Sk.misceval.callsim);
    Sk.misceval.callsimAsync = function(a, b, c) {
        c = Array.prototype.slice.call(arguments, 2);
        return Sk.misceval.applyAsync(a, b, void 0, void 0, void 0, c)
    };
    goog.exportSymbol("Sk.misceval.callsimAsync", Sk.misceval.callsimAsync);
    Sk.misceval.callsimOrSuspend = function(a, b) {
        b = Array.prototype.slice.call(arguments, 1);
        return Sk.misceval.applyOrSuspend(a, void 0, void 0, void 0, b)
    };
    goog.exportSymbol("Sk.misceval.callsimOrSuspend", Sk.misceval.callsimOrSuspend);
    Sk.misceval.apply = function(a, b, c, d, e) {
        a = Sk.misceval.applyOrSuspend(a, b, c, d, e);
        return a instanceof Sk.misceval.Suspension ? Sk.misceval.retryOptionalSuspensionOrThrow(a) : a
    };
    goog.exportSymbol("Sk.misceval.apply", Sk.misceval.apply);
    Sk.misceval.asyncToPromise = function(a, b) {
        return new Promise(function(c, d) {
            try {
                (function g(a) {
                    try {
                        for (var e = function() {
                                g(a.resume())
                            }, l = function(b) {
                                try {
                                    a.data.result = b, e()
                                } catch (c) {
                                    d(c)
                                }
                            }, m = function(b) {
                                try {
                                    a.data.error = b, e()
                                } catch (c) {
                                    d(c)
                                }
                            }; a instanceof Sk.misceval.Suspension;) {
                            var p = b && (b[a.data.type] || b["*"]);
                            if (p) {
                                var n = p(a);
                                if (n) {
                                    n.then(g, d);
                                    return
                                }
                            }
                            if ("Sk.promise" == a.data.type) {
                                a.data.promise.then(l, m);
                                return
                            }
                            if ("Sk.yield" == a.data.type) {
                                Sk.setTimeout(e, 0);
                                return
                            }
                            if (a.optional) a = a.resume();
                            else throw new Sk.builtin.SuspensionError("Unhandled non-optional suspension of type '" +
                                a.data.type + "'");
                        }
                        c(a)
                    } catch (r) {
                        d(r)
                    }
                })(a())
            } catch (e) {
                d(e)
            }
        })
    };
    goog.exportSymbol("Sk.misceval.asyncToPromise", Sk.misceval.asyncToPromise);
    Sk.misceval.applyAsync = function(a, b, c, d, e, f) {
        return Sk.misceval.asyncToPromise(function() {
            return Sk.misceval.applyOrSuspend(b, c, d, e, f)
        }, a)
    };
    goog.exportSymbol("Sk.misceval.applyAsync", Sk.misceval.applyAsync);
    Sk.misceval.chain = function(a, b) {
        for (var c = Array(arguments.length), d = 1, d = 1; d < arguments.length; d++) c[d] = arguments[d];
        d = 1;
        return function f(a) {
            for (; d < c.length;) {
                if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(f, a);
                a = c[d](a);
                d++
            }
            return a
        }(a)
    };
    goog.exportSymbol("Sk.misceval.chain", Sk.misceval.chain);
    Sk.misceval.tryCatch = function(a, b) {
        var c;
        try {
            c = a()
        } catch (d) {
            return b(d)
        }
        if (c instanceof Sk.misceval.Suspension) {
            var e = new Sk.misceval.Suspension(void 0, c);
            e.resume = function() {
                return Sk.misceval.tryCatch(c.resume, b)
            };
            return e
        }
        return c
    };
    goog.exportSymbol("Sk.misceval.tryCatch", Sk.misceval.tryCatch);
    Sk.misceval.iterFor = function(a, b, c) {
        var d = c,
            e = function(b) {
                d = b;
                return b instanceof Sk.misceval.Break ? b : a.tp$iternext(!0)
            };
        return function g(a) {
            for (; void 0 !== a;) {
                if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(g, a);
                if (a === Sk.misceval.Break || a instanceof Sk.misceval.Break) return a.brValue;
                a = Sk.misceval.chain(b(a, d), e)
            }
            return d
        }(a.tp$iternext(!0))
    };
    goog.exportSymbol("Sk.misceval.iterFor", Sk.misceval.iterFor);
    Sk.misceval.Break = function(a) {
        if (!(this instanceof Sk.misceval.Break)) return new Sk.misceval.Break(a);
        this.brValue = a
    };
    goog.exportSymbol("Sk.misceval.Break", Sk.misceval.Break);
    Sk.misceval.applyOrSuspend = function(a, b, c, d, e) {
        var f, g;
        if (null === a || a instanceof Sk.builtin.none) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not callable");
        if ("function" === typeof a) {
            if (a.sk$klass) return a.apply(null, [b, c, d, e, !0]);
            if (c)
                for (g = c.tp$iter(), c = g.tp$iternext(); void 0 !== c; c = g.tp$iternext()) e.push(c);
            if (b)
                for (g = Sk.abstr.iter(b), c = g.tp$iternext(); void 0 !== c; c = g.tp$iternext()) {
                    if (!Sk.builtin.checkString(c)) throw new Sk.builtin.TypeError("Function keywords must be strings");
                    d.push(c.v);
                    d.push(Sk.abstr.objectGetItem(b, c, !1))
                }
            if (void 0 !== d && 0 < d.length) {
                if (!a.co_varnames) throw new Sk.builtin.ValueError("Keyword arguments are not supported by this function");
                g = a.co_numargs - a.co_varnames.length;
                f = e.length - g;
                e = e.concat(a.$defaults.slice(f));
                for (c = 0; c < d.length; c += 2) {
                    b = a.co_varnames.indexOf(d[c]);
                    if (-1 === b) throw new Sk.builtin.TypeError("'" + d[c] + "' is an invalid keyword argument for this function");
                    if (b < f) throw new Sk.builtin.TypeError("Argument given by name ('" + d[c] + "') and position (" +
                        (b + g + 1) + ")");
                    e[b + g] = d[c + 1]
                }
            }
            return a.apply(null, e)
        }
        f = a.tp$call;
        if (void 0 !== f) {
            if (c)
                for (g = c.tp$iter(), c = g.tp$iternext(); void 0 !== c; c = g.tp$iternext()) e.push(c);
            if (b)
                for (g = Sk.abstr.iter(b), c = g.tp$iternext(); void 0 !== c; c = g.tp$iternext()) {
                    if (!Sk.builtin.checkString(c)) throw new Sk.builtin.TypeError("Function keywords must be strings");
                    d.push(c.v);
                    d.push(Sk.abstr.objectGetItem(b, c, !1))
                }
            return f.call(a, e, d, b)
        }
        f = a.__call__;
        if (void 0 !== f) return e.unshift(a), Sk.misceval.apply(f, b, c, d, e);
        throw new Sk.builtin.TypeError("'" +
            Sk.abstr.typeName(a) + "' object is not callable");
    };
    goog.exportSymbol("Sk.misceval.applyOrSuspend", Sk.misceval.applyOrSuspend);
    Sk.misceval.buildClass = function(a, b, c, d) {
        var e = Sk.builtin.type,
            f = {};
        b(a, f, []);
        f.__module__ = a.__name__;
        a = new Sk.builtin.str(c);
        d = new Sk.builtin.tuple(d);
        b = [];
        for (var g in f) f.hasOwnProperty(g) && (b.push(new Sk.builtin.str(g)), b.push(f[g]));
        b = new Sk.builtin.dict(b);
        return Sk.misceval.callsim(e, a, d, b)
    };
    goog.exportSymbol("Sk.misceval.buildClass", Sk.misceval.buildClass);
    Sk.builtin.seqtype = function() {
        throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.seqtype class");
    };
    Sk.abstr.setUpInheritance("SequenceType", Sk.builtin.seqtype, Sk.builtin.object);
    Sk.builtin.seqtype.sk$abstract = !0;
    Sk.builtin.seqtype.prototype.__len__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__len__", arguments, 0, 0, !1, !0);
        return new Sk.builtin.int_(a.sq$length())
    });
    Sk.builtin.seqtype.prototype.__iter__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__iter__", arguments, 0, 0, !1, !0);
        return a.tp$iter()
    });
    Sk.builtin.seqtype.prototype.__contains__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__contains__", arguments, 1, 1, !1, !0);
        return a.sq$contains(b) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$
    });
    Sk.builtin.seqtype.prototype.__getitem__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__getitem__", arguments, 1, 1, !1, !0);
        return a.mp$subscript(b)
    });
    Sk.builtin.seqtype.prototype.__add__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__add__", arguments, 1, 1, !1, !0);
        return a.sq$concat(b)
    });
    Sk.builtin.seqtype.prototype.__mul__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__mul__", arguments, 1, 1, !1, !0);
        if (!Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(b) + "'");
        return a.sq$repeat(b)
    });
    Sk.builtin.seqtype.prototype.__rmul__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__rmul__", arguments, 1, 1, !1, !0);
        return a.sq$repeat(b)
    });
    Sk.builtin.list = function(a, b) {
        var c, d, e;
        if (this instanceof Sk.builtin.list) b = b || !1;
        else return new Sk.builtin.list(a, b || !0);
        this.__class__ = Sk.builtin.list;
        if (void 0 === a) c = [];
        else if ("[object Array]" === Object.prototype.toString.apply(a)) c = a;
        else {
            if (Sk.builtin.checkIterable(a)) return c = [], d = Sk.abstr.iter(a), e = this,
                function g(a) {
                    for (;;) {
                        if (a instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(g, a);
                        if (void 0 === a) return e.v = c, e;
                        c.push(a);
                        a = d.tp$iternext(b)
                    }
                }(d.tp$iternext(b));
            throw new Sk.builtin.TypeError("expecting Array or iterable");
        }
        this.v = this.v = c;
        return this
    };
    Sk.abstr.setUpInheritance("list", Sk.builtin.list, Sk.builtin.seqtype);
    Sk.abstr.markUnhashable(Sk.builtin.list);
    Sk.builtin.list.prototype.list_iter_ = function() {
        var a = {
            tp$iter: function() {
                return a
            },
            $obj: this,
            $index: 0,
            tp$iternext: function() {
                return a.$index >= a.$obj.v.length ? void 0 : a.$obj.v[a.$index++]
            },
            tp$name: "list_iterator"
        };
        return a
    };
    Sk.builtin.list.prototype.list_concat_ = function(a) {
        var b, c;
        if (!a.__class__ || a.__class__ != Sk.builtin.list) throw new Sk.builtin.TypeError("can only concatenate list to list");
        c = this.v.slice();
        for (b = 0; b < a.v.length; ++b) c.push(a.v[b]);
        return new Sk.builtin.list(c, !1)
    };
    Sk.builtin.list.prototype.list_extend_ = function(a) {
        var b, c;
        if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
        if (this == a) {
            c = [];
            a = Sk.abstr.iter(a);
            for (b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) c.push(b);
            this.v.push.apply(this.v, c)
        } else
            for (a = Sk.abstr.iter(a), b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) this.v.push(b);
        return this
    };
    Sk.builtin.list.prototype.list_del_item_ = function(a) {
        a = Sk.builtin.asnum$(a);
        if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("list assignment index out of range");
        this.list_del_slice_(a, a + 1)
    };
    Sk.builtin.list.prototype.list_del_slice_ = function(a, b) {
        var c;
        a = Sk.builtin.asnum$(a);
        b = Sk.builtin.asnum$(b);
        c = [];
        c.unshift(b - a);
        c.unshift(a);
        this.v.splice.apply(this.v, c)
    };
    Sk.builtin.list.prototype.list_ass_item_ = function(a, b) {
        a = Sk.builtin.asnum$(a);
        if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("list assignment index out of range");
        this.v[a] = b
    };
    Sk.builtin.list.prototype.list_ass_slice_ = function(a, b, c) {
        a = Sk.builtin.asnum$(a);
        b = Sk.builtin.asnum$(b);
        if (Sk.builtin.checkIterable(c)) c = (new Sk.builtin.list(c, !1)).v.slice(0);
        else throw new Sk.builtin.TypeError("can only assign an iterable");
        c.unshift(b - a);
        c.unshift(a);
        this.v.splice.apply(this.v, c)
    };
    Sk.builtin.list.prototype.$r = function() {
        var a, b, c = [];
        a = Sk.abstr.iter(this);
        for (b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) b === this ? c.push("[...]") : c.push(Sk.misceval.objectRepr(b).v);
        return new Sk.builtin.str("[" + c.join(", ") + "]")
    };
    Sk.builtin.list.prototype.tp$richcompare = function(a, b) {
        var c, d, e, f, g;
        if (this === a && Sk.misceval.opAllowsEquality(b)) return !0;
        if (!a.__class__ || a.__class__ != Sk.builtin.list) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
        g = this.v;
        a = a.v;
        f = g.length;
        e = a.length;
        for (d = 0; d < f && d < e && (c = Sk.misceval.richCompareBool(g[d], a[d], "Eq"), c); ++d);
        if (d >= f || d >= e) switch (b) {
            case "Lt":
                return f < e;
            case "LtE":
                return f <= e;
            case "Eq":
                return f === e;
            case "NotEq":
                return f !== e;
            case "Gt":
                return f > e;
            case "GtE":
                return f >= e;
            default:
                goog.asserts.fail()
        }
        return "Eq" ===
            b ? !1 : "NotEq" === b ? !0 : Sk.misceval.richCompareBool(g[d], a[d], b)
    };
    Sk.builtin.list.prototype.tp$iter = Sk.builtin.list.prototype.list_iter_;
    Sk.builtin.list.prototype.sq$length = function() {
        return this.v.length
    };
    Sk.builtin.list.prototype.sq$concat = Sk.builtin.list.prototype.list_concat_;
    Sk.builtin.list.prototype.nb$add = Sk.builtin.list.prototype.list_concat_;
    Sk.builtin.list.prototype.nb$inplace_add = Sk.builtin.list.prototype.list_extend_;
    Sk.builtin.list.prototype.sq$repeat = function(a) {
        var b, c, d;
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
        a = Sk.misceval.asIndex(a);
        d = [];
        for (c = 0; c < a; ++c)
            for (b = 0; b < this.v.length; ++b) d.push(this.v[b]);
        return new Sk.builtin.list(d, !1)
    };
    Sk.builtin.list.prototype.nb$multiply = Sk.builtin.list.prototype.sq$repeat;
    Sk.builtin.list.prototype.nb$inplace_multiply = function(a) {
        var b, c, d;
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
        a = Sk.misceval.asIndex(a);
        d = this.v.length;
        for (c = 1; c < a; ++c)
            for (b = 0; b < d; ++b) this.v.push(this.v[b]);
        return this
    };
    Sk.builtin.list.prototype.sq$ass_item = Sk.builtin.list.prototype.list_ass_item_;
    Sk.builtin.list.prototype.sq$del_item = Sk.builtin.list.prototype.list_del_item_;
    Sk.builtin.list.prototype.sq$ass_slice = Sk.builtin.list.prototype.list_ass_slice_;
    Sk.builtin.list.prototype.sq$del_slice = Sk.builtin.list.prototype.list_del_slice_;
    Sk.builtin.list.prototype.sq$contains = function(a) {
        var b, c;
        b = this.tp$iter();
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext())
            if (Sk.misceval.richCompareBool(c, a, "Eq")) return !0;
        return !1
    };
    Sk.builtin.list.prototype.list_subscript_ = function(a) {
        var b, c;
        if (Sk.misceval.isIndex(a)) {
            if (c = Sk.misceval.asIndex(a), void 0 !== c) {
                0 > c && (c = this.v.length + c);
                if (0 > c || c >= this.v.length) throw new Sk.builtin.IndexError("list index out of range");
                return this.v[c]
            }
        } else if (a instanceof Sk.builtin.slice) return b = [], a.sssiter$(this, function(a, c) {
            b.push(c.v[a])
        }), new Sk.builtin.list(b, !1);
        throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(a));
    };
    Sk.builtin.list.prototype.list_ass_subscript_ = function(a, b) {
        var c, d, e;
        if (Sk.misceval.isIndex(a)) {
            if (c = Sk.misceval.asIndex(a), void 0 !== c) {
                0 > c && (c = this.v.length + c);
                this.list_ass_item_(c, b);
                return
            }
        } else if (a instanceof Sk.builtin.slice) {
            c = a.slice_indices_(this.v.length);
            if (1 === c[2]) this.list_ass_slice_(c[0], c[1], b);
            else {
                e = [];
                a.sssiter$(this, function(a, b) {
                    e.push(a)
                });
                d = 0;
                if (e.length !== b.v.length) throw new Sk.builtin.ValueError("attempt to assign sequence of size " + b.v.length + " to extended slice of size " +
                    e.length);
                for (c = 0; c < e.length; ++c) this.v.splice(e[c], 1, b.v[d]), d += 1
            }
            return
        }
        throw new Sk.builtin.TypeError("list indices must be integers, not " + Sk.abstr.typeName(a));
    };
    Sk.builtin.list.prototype.list_del_subscript_ = function(a) {
        var b, c, d, e;
        if (Sk.misceval.isIndex(a)) {
            if (e = Sk.misceval.asIndex(a), void 0 !== e) {
                0 > e && (e = this.v.length + e);
                this.list_del_item_(e);
                return
            }
        } else if (a instanceof Sk.builtin.slice) {
            e = a.slice_indices_(this.v.length);
            1 === e[2] ? this.list_del_slice_(e[0], e[1]) : (d = this, c = 0, b = 0 < e[2] ? 1 : 0, a.sssiter$(this, function(a, e) {
                d.v.splice(a - c, 1);
                c += b
            }));
            return
        }
        throw new Sk.builtin.TypeError("list indices must be integers, not " + typeof a);
    };
    Sk.builtin.list.prototype.mp$subscript = Sk.builtin.list.prototype.list_subscript_;
    Sk.builtin.list.prototype.mp$ass_subscript = Sk.builtin.list.prototype.list_ass_subscript_;
    Sk.builtin.list.prototype.mp$del_subscript = Sk.builtin.list.prototype.list_del_subscript_;
    Sk.builtin.list.prototype.__getitem__ = new Sk.builtin.func(function(a, b) {
        return Sk.builtin.list.prototype.list_subscript_.call(a, b)
    });
    Sk.builtin.list.prototype.list_sort_ = function(a, b, c, d) {
        var e, f, g, h, k = void 0 !== c && null !== c;
        f = void 0 !== b && null !== b;
        var l;
        if (void 0 === d) l = !1;
        else {
            if (d === Sk.builtin.none.none$) throw new Sk.builtin.TypeError("an integer is required");
            l = Sk.misceval.isTrue(d)
        }
        d = new Sk.builtin.timSort(a);
        a.v = [];
        h = new Sk.builtin.int_(0);
        if (k)
            for (d.lt = f ? function(a, c) {
                    var d = Sk.misceval.callsim(b, a[0], c[0]);
                    return Sk.misceval.richCompareBool(d, h, "Lt")
                } : function(a, b) {
                    return Sk.misceval.richCompareBool(a[0], b[0], "Lt")
                }, g = 0; g < d.listlength; g++) f =
                d.list.v[g], e = Sk.misceval.callsim(c, f), d.list.v[g] = [e, f];
        else f && (d.lt = function(a, c) {
            var d = Sk.misceval.callsim(b, a, c);
            return Sk.misceval.richCompareBool(d, h, "Lt")
        });
        l && d.list.list_reverse_(d.list);
        d.sort();
        l && d.list.list_reverse_(d.list);
        if (k)
            for (c = 0; c < d.listlength; c++) f = d.list.v[c][1], d.list.v[c] = f;
        c = 0 < a.sq$length();
        a.v = d.list.v;
        if (c) throw new Sk.builtin.OperationError("list modified during sort");
        return Sk.builtin.none.none$
    };
    Sk.builtin.list.prototype.list_reverse_ = function(a) {
        var b, c, d;
        Sk.builtin.pyCheckArgs("reverse", arguments, 1, 1);
        b = a.v.length;
        d = a.v;
        c = [];
        for (b -= 1; - 1 < b; --b) c.push(d[b]);
        a.v = c;
        return Sk.builtin.none.none$
    };
    Sk.builtin.list.prototype.__iter__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__iter__", arguments, 1, 1);
        return a.list_iter_()
    });
    Sk.builtin.list.prototype.append = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("append", arguments, 2, 2);
        a.v.push(b);
        return Sk.builtin.none.none$
    });
    Sk.builtin.list.prototype.insert = new Sk.builtin.func(function(a, b, c) {
        Sk.builtin.pyCheckArgs("insert", arguments, 3, 3);
        if (!Sk.builtin.checkNumber(b)) throw new Sk.builtin.TypeError("an integer is required");
        b = Sk.builtin.asnum$(b);
        0 > b && (b += a.v.length);
        0 > b ? b = 0 : b > a.v.length && (b = a.v.length);
        a.v.splice(b, 0, c);
        return Sk.builtin.none.none$
    });
    Sk.builtin.list.prototype.extend = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("extend", arguments, 2, 2);
        a.list_extend_(b);
        return Sk.builtin.none.none$
    });
    Sk.builtin.list.prototype.pop = new Sk.builtin.func(function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("pop", arguments, 1, 2);
        void 0 === b && (b = a.v.length - 1);
        if (!Sk.builtin.checkNumber(b)) throw new Sk.builtin.TypeError("an integer is required");
        b = Sk.builtin.asnum$(b);
        0 > b && (b += a.v.length);
        if (0 > b || b >= a.v.length) throw new Sk.builtin.IndexError("pop index out of range");
        c = a.v[b];
        a.v.splice(b, 1);
        return c
    });
    Sk.builtin.list.prototype.remove = new Sk.builtin.func(function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("remove", arguments, 2, 2);
        c = Sk.builtin.list.prototype.index.func_code(a, b);
        a.v.splice(Sk.builtin.asnum$(c), 1);
        return Sk.builtin.none.none$
    });
    Sk.builtin.list.prototype.index = new Sk.builtin.func(function(a, b, c, d) {
        var e, f;
        Sk.builtin.pyCheckArgs("index", arguments, 2, 4);
        if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers");
        if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers");
        e = a.v.length;
        f = a.v;
        c = void 0 === c ? 0 : c.v;
        0 > c && (c = 0 <= c + e ? c + e : 0);
        d = void 0 === d ? e : d.v;
        0 > d && (d = 0 <= d + e ? d + e : 0);
        for (e = c; e < d; ++e)
            if (Sk.misceval.richCompareBool(f[e], b, "Eq")) return new Sk.builtin.int_(e);
        throw new Sk.builtin.ValueError("list.index(x): x not in list");
    });
    Sk.builtin.list.prototype.count = new Sk.builtin.func(function(a, b) {
        var c, d, e, f;
        Sk.builtin.pyCheckArgs("count", arguments, 2, 2);
        f = a.v.length;
        e = a.v;
        for (c = d = 0; c < f; ++c) Sk.misceval.richCompareBool(e[c], b, "Eq") && (d += 1);
        return new Sk.builtin.int_(d)
    });
    Sk.builtin.list.prototype.reverse = new Sk.builtin.func(Sk.builtin.list.prototype.list_reverse_);
    Sk.builtin.list.prototype.sort = new Sk.builtin.func(Sk.builtin.list.prototype.list_sort_);
    Sk.builtin.list.prototype.sort.func_code.co_varnames = ["__self__", "cmp", "key", "reverse"];
    goog.exportSymbol("Sk.builtin.list", Sk.builtin.list);
    Sk.builtin.interned = {};
    Sk.builtin.str = function(a) {
        void 0 === a && (a = "");
        if (a instanceof Sk.builtin.str) return a;
        if (!(this instanceof Sk.builtin.str)) return new Sk.builtin.str(a);
        if (!0 === a) a = "True";
        else if (!1 === a) a = "False";
        else if (null === a || a instanceof Sk.builtin.none) a = "None";
        else if (a instanceof Sk.builtin.bool) a = a.v ? "True" : "False";
        else if ("number" === typeof a) a = a.toString(), "Infinity" === a ? a = "inf" : "-Infinity" === a && (a = "-inf");
        else if ("string" !== typeof a) {
            if (void 0 !== a.tp$str) {
                a = a.tp$str();
                if (!(a instanceof Sk.builtin.str)) throw new Sk.builtin.ValueError("__str__ didn't return a str");
                return a
            }
            return Sk.misceval.objectRepr(a)
        }
        if (Sk.builtin.interned["1" + a]) return Sk.builtin.interned["1" + a];
        this.__class__ = Sk.builtin.str;
        this.v = this.v = a;
        Sk.builtin.interned["1" + a] = this;
        return this
    };
    goog.exportSymbol("Sk.builtin.str", Sk.builtin.str);
    Sk.abstr.setUpInheritance("str", Sk.builtin.str, Sk.builtin.seqtype);
    Sk.builtin.str.prototype.mp$subscript = function(a) {
        var b;
        if (Sk.misceval.isIndex(a)) {
            a = Sk.misceval.asIndex(a);
            0 > a && (a = this.v.length + a);
            if (0 > a || a >= this.v.length) throw new Sk.builtin.IndexError("string index out of range");
            return new Sk.builtin.str(this.v.charAt(a))
        }
        if (a instanceof Sk.builtin.slice) return b = "", a.sssiter$(this, function(a, d) {
            0 <= a && a < d.v.length && (b += d.v.charAt(a))
        }), new Sk.builtin.str(b);
        throw new Sk.builtin.TypeError("string indices must be integers, not " + Sk.abstr.typeName(a));
    };
    Sk.builtin.str.prototype.sq$length = function() {
        return this.v.length
    };
    Sk.builtin.str.prototype.sq$concat = function(a) {
        if (!a || !Sk.builtin.checkString(a)) throw a = Sk.abstr.typeName(a), new Sk.builtin.TypeError("cannot concatenate 'str' and '" + a + "' objects");
        return new Sk.builtin.str(this.v + a.v)
    };
    Sk.builtin.str.prototype.nb$add = Sk.builtin.str.prototype.sq$concat;
    Sk.builtin.str.prototype.nb$inplace_add = Sk.builtin.str.prototype.sq$concat;
    Sk.builtin.str.prototype.sq$repeat = function(a) {
        var b, c;
        if (!Sk.misceval.isIndex(a)) throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(a) + "'");
        a = Sk.misceval.asIndex(a);
        c = "";
        for (b = 0; b < a; ++b) c += this.v;
        return new Sk.builtin.str(c)
    };
    Sk.builtin.str.prototype.nb$multiply = Sk.builtin.str.prototype.sq$repeat;
    Sk.builtin.str.prototype.nb$inplace_multiply = Sk.builtin.str.prototype.sq$repeat;
    Sk.builtin.str.prototype.sq$item = function() {
        goog.asserts.fail()
    };
    Sk.builtin.str.prototype.sq$slice = function(a, b) {
        a = Sk.builtin.asnum$(a);
        b = Sk.builtin.asnum$(b);
        0 > a && (a = 0);
        return new Sk.builtin.str(this.v.substr(a, b - a))
    };
    Sk.builtin.str.prototype.sq$contains = function(a) {
        if (!(a instanceof Sk.builtin.str)) throw new Sk.builtin.TypeError("TypeError: 'In <string> requires string as left operand");
        return -1 != this.v.indexOf(a.v)
    };
    Sk.builtin.str.prototype.tp$iter = function() {
        var a = {
            tp$iter: function() {
                return a
            },
            $obj: this,
            $index: 0,
            tp$iternext: function() {
                return a.$index >= a.$obj.v.length ? void 0 : new Sk.builtin.str(a.$obj.v.substr(a.$index++, 1))
            },
            tp$name: "str_iterator"
        };
        return a
    };
    Sk.builtin.str.prototype.tp$richcompare = function(a, b) {
        if (a instanceof Sk.builtin.str) switch (b) {
            case "Lt":
                return this.v < a.v;
            case "LtE":
                return this.v <= a.v;
            case "Eq":
                return this.v === a.v;
            case "NotEq":
                return this.v !== a.v;
            case "Gt":
                return this.v > a.v;
            case "GtE":
                return this.v >= a.v;
            default:
                goog.asserts.fail()
        }
    };
    Sk.builtin.str.prototype.$r = function() {
        var a, b, c, d, e = "'"; - 1 !== this.v.indexOf("'") && -1 === this.v.indexOf('"') && (e = '"');
        d = this.v.length;
        c = e;
        for (b = 0; b < d; ++b) a = this.v.charAt(b), a === e || "\\" === a ? c += "\\" + a : "\t" === a ? c += "\\t" : "\n" === a ? c += "\\n" : "\r" === a ? c += "\\r" : " " > a || 127 <= a ? (a = a.charCodeAt(0).toString(16), 2 > a.length && (a = "0" + a), c += "\\x" + a) : c += a;
        return new Sk.builtin.str(c + e)
    };
    Sk.builtin.str.re_escape_ = function(a) {
        var b, c, d = [],
            e = /^[A-Za-z0-9]+$/;
        for (c = 0; c < a.length; ++c) b = a.charAt(c), e.test(b) ? d.push(b) : "\\000" === b ? d.push("\\000") : d.push("\\" + b);
        return d.join("")
    };
    Sk.builtin.str.prototype.lower = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("lower", arguments, 1, 1);
        return new Sk.builtin.str(a.v.toLowerCase())
    });
    Sk.builtin.str.prototype.upper = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("upper", arguments, 1, 1);
        return new Sk.builtin.str(a.v.toUpperCase())
    });
    Sk.builtin.str.prototype.capitalize = new Sk.builtin.func(function(a) {
        var b, c, d;
        Sk.builtin.pyCheckArgs("capitalize", arguments, 1, 1);
        d = a.v;
        if (0 === d.length) return new Sk.builtin.str("");
        c = d.charAt(0).toUpperCase();
        for (b = 1; b < d.length; b++) c += d.charAt(b).toLowerCase();
        return new Sk.builtin.str(c)
    });
    Sk.builtin.str.prototype.join = new Sk.builtin.func(function(a, b) {
        var c, d, e;
        Sk.builtin.pyCheckArgs("join", arguments, 2, 2);
        Sk.builtin.pyCheckType("seq", "iterable", Sk.builtin.checkIterable(b));
        e = [];
        c = b.tp$iter();
        for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) {
            if (d.constructor !== Sk.builtin.str) throw new Sk.builtin.TypeError("TypeError: sequence item " + e.length + ": expected string, " + typeof d + " found");
            e.push(d.v)
        }
        return new Sk.builtin.str(e.join(a.v))
    });
    Sk.builtin.str.prototype.split = new Sk.builtin.func(function(a, b, c) {
        var d, e, f, g, h, k;
        Sk.builtin.pyCheckArgs("split", arguments, 1, 3);
        if (void 0 === b || b instanceof Sk.builtin.none) b = null;
        if (null !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a string");
        if (null !== b && "" === b.v) throw new Sk.builtin.ValueError("empty separator");
        if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("an integer is required");
        c = Sk.builtin.asnum$(c);
        k = /[\s]+/g;
        h = a.v;
        null === b ? h = goog.string.trimLeft(h) :
            (d = b.v.replace(/([.*+?=|\\\/()\[\]\{\}^$])/g, "\\$1"), k = RegExp(d, "g"));
        g = [];
        for (d = e = 0; null != (f = k.exec(h)) && f.index !== k.lastIndex && !(g.push(new Sk.builtin.str(h.substring(e, f.index))), e = k.lastIndex, d += 1, c && d >= c););
        h = h.substring(e);
        (null !== b || 0 < h.length) && g.push(new Sk.builtin.str(h));
        return new Sk.builtin.list(g)
    });
    Sk.builtin.str.prototype.strip = new Sk.builtin.func(function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("strip", arguments, 1, 2);
        if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("strip arg must be None or str");
        void 0 === b ? c = /^\s+|\s+$/g : (c = Sk.builtin.str.re_escape_(b.v), c = RegExp("^[" + c + "]+|[" + c + "]+$", "g"));
        return new Sk.builtin.str(a.v.replace(c, ""))
    });
    Sk.builtin.str.prototype.lstrip = new Sk.builtin.func(function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("lstrip", arguments, 1, 2);
        if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("lstrip arg must be None or str");
        void 0 === b ? c = /^\s+/g : (c = Sk.builtin.str.re_escape_(b.v), c = RegExp("^[" + c + "]+", "g"));
        return new Sk.builtin.str(a.v.replace(c, ""))
    });
    Sk.builtin.str.prototype.rstrip = new Sk.builtin.func(function(a, b) {
        var c;
        Sk.builtin.pyCheckArgs("rstrip", arguments, 1, 2);
        if (void 0 !== b && !Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("rstrip arg must be None or str");
        void 0 === b ? c = /\s+$/g : (c = Sk.builtin.str.re_escape_(b.v), c = RegExp("[" + c + "]+$", "g"));
        return new Sk.builtin.str(a.v.replace(c, ""))
    });
    Sk.builtin.str.prototype.partition = new Sk.builtin.func(function(a, b) {
        var c, d;
        Sk.builtin.pyCheckArgs("partition", arguments, 2, 2);
        Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(b));
        d = new Sk.builtin.str(b);
        c = a.v.indexOf(d.v);
        return 0 > c ? new Sk.builtin.tuple([a, Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr]) : new Sk.builtin.tuple([new Sk.builtin.str(a.v.substring(0, c)), d, new Sk.builtin.str(a.v.substring(c + d.v.length))])
    });
    Sk.builtin.str.prototype.rpartition = new Sk.builtin.func(function(a, b) {
        var c, d;
        Sk.builtin.pyCheckArgs("rpartition", arguments, 2, 2);
        Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(b));
        d = new Sk.builtin.str(b);
        c = a.v.lastIndexOf(d.v);
        return 0 > c ? new Sk.builtin.tuple([Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr, a]) : new Sk.builtin.tuple([new Sk.builtin.str(a.v.substring(0, c)), d, new Sk.builtin.str(a.v.substring(c + d.v.length))])
    });
    Sk.builtin.str.prototype.count = new Sk.builtin.func(function(a, b, c, d) {
        var e;
        Sk.builtin.pyCheckArgs("count", arguments, 2, 4);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
        if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        void 0 ===
            c ? c = 0 : (c = Sk.builtin.asnum$(c), c = 0 <= c ? c : a.v.length + c);
        void 0 === d ? d = a.v.length : (d = Sk.builtin.asnum$(d), d = 0 <= d ? d : a.v.length + d);
        e = b.v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        e = RegExp(e, "g");
        return (e = a.v.slice(c, d).match(e)) ? new Sk.builtin.int_(e.length) : new Sk.builtin.int_(0)
    });
    Sk.builtin.str.prototype.ljust = new Sk.builtin.func(function(a, b, c) {
        var d;
        Sk.builtin.pyCheckArgs("ljust", arguments, 2, 3);
        if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
        if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
        c = void 0 === c ? " " : c.v;
        b = Sk.builtin.asnum$(b);
        if (a.v.length >= b) return a;
        d = Array.prototype.join.call({
                length: Math.floor(b - a.v.length) + 1
            },
            c);
        return new Sk.builtin.str(a.v + d)
    });
    Sk.builtin.str.prototype.rjust = new Sk.builtin.func(function(a, b, c) {
        var d;
        Sk.builtin.pyCheckArgs("rjust", arguments, 2, 3);
        if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
        if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
        c = void 0 === c ? " " : c.v;
        b = Sk.builtin.asnum$(b);
        if (a.v.length >= b) return a;
        d = Array.prototype.join.call({
                length: Math.floor(b - a.v.length) + 1
            },
            c);
        return new Sk.builtin.str(d + a.v)
    });
    Sk.builtin.str.prototype.center = new Sk.builtin.func(function(a, b, c) {
        var d;
        Sk.builtin.pyCheckArgs("center", arguments, 2, 3);
        if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(b));
        if (void 0 !== c && (!Sk.builtin.checkString(c) || 1 !== c.v.length)) throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(c));
        c = void 0 === c ? " " : c.v;
        b = Sk.builtin.asnum$(b);
        if (a.v.length >= b) return a;
        d = Array.prototype.join.call({
            length: Math.floor((b - a.v.length) /
                2) + 1
        }, c);
        d = d + a.v + d;
        d.length < b && (d += c);
        return new Sk.builtin.str(d)
    });
    Sk.builtin.str.prototype.find = new Sk.builtin.func(function(a, b, c, d) {
        var e;
        Sk.builtin.pyCheckArgs("find", arguments, 2, 4);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
        if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        void 0 ===
            c ? c = 0 : (c = Sk.builtin.asnum$(c), c = 0 <= c ? c : a.v.length + c);
        void 0 === d ? d = a.v.length : (d = Sk.builtin.asnum$(d), d = 0 <= d ? d : a.v.length + d);
        e = a.v.indexOf(b.v, c);
        return new Sk.builtin.int_(e >= c && e < d ? e : -1)
    });
    Sk.builtin.str.prototype.index = new Sk.builtin.func(function(a, b, c, d) {
        var e;
        Sk.builtin.pyCheckArgs("index", arguments, 2, 4);
        e = Sk.misceval.callsim(a.find, a, b, c, d);
        if (-1 === Sk.builtin.asnum$(e)) throw new Sk.builtin.ValueError("substring not found");
        return e
    });
    Sk.builtin.str.prototype.rfind = new Sk.builtin.func(function(a, b, c, d) {
        var e;
        Sk.builtin.pyCheckArgs("rfind", arguments, 2, 4);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("expected a character buffer object");
        if (void 0 !== c && !Sk.builtin.checkInt(c)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
        void 0 ===
            c ? c = 0 : (c = Sk.builtin.asnum$(c), c = 0 <= c ? c : a.v.length + c);
        void 0 === d ? d = a.v.length : (d = Sk.builtin.asnum$(d), d = 0 <= d ? d : a.v.length + d);
        e = a.v.lastIndexOf(b.v, d);
        e = e !== d ? e : a.v.lastIndexOf(b.v, d - 1);
        return new Sk.builtin.int_(e >= c && e < d ? e : -1)
    });
    Sk.builtin.str.prototype.rindex = new Sk.builtin.func(function(a, b, c, d) {
        var e;
        Sk.builtin.pyCheckArgs("rindex", arguments, 2, 4);
        e = Sk.misceval.callsim(a.rfind, a, b, c, d);
        if (-1 === Sk.builtin.asnum$(e)) throw new Sk.builtin.ValueError("substring not found");
        return e
    });
    Sk.builtin.str.prototype.startswith = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("startswith", arguments, 2, 2);
        Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(b));
        return new Sk.builtin.bool(0 === a.v.indexOf(b.v))
    });
    Sk.builtin.str.prototype.endswith = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("endswith", arguments, 2, 2);
        Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(b));
        return new Sk.builtin.bool(-1 !== a.v.indexOf(b.v, a.v.length - b.v.length))
    });
    Sk.builtin.str.prototype.replace = new Sk.builtin.func(function(a, b, c, d) {
        var e, f;
        Sk.builtin.pyCheckArgs("replace", arguments, 3, 4);
        Sk.builtin.pyCheckType("oldS", "string", Sk.builtin.checkString(b));
        Sk.builtin.pyCheckType("newS", "string", Sk.builtin.checkString(c));
        if (void 0 !== d && !Sk.builtin.checkInt(d)) throw new Sk.builtin.TypeError("integer argument expected, got " + Sk.abstr.typeName(d));
        d = Sk.builtin.asnum$(d);
        f = RegExp(Sk.builtin.str.re_escape_(b.v), "g");
        if (void 0 === d || 0 > d) return new Sk.builtin.str(a.v.replace(f,
            c.v));
        e = 0;
        return new Sk.builtin.str(a.v.replace(f, function(a) {
            e++;
            return e <= d ? c.v : a
        }))
    });
    Sk.builtin.str.prototype.zfill = new Sk.builtin.func(function(a, b) {
        var c = a.v,
            d, e, f = "";
        Sk.builtin.pyCheckArgs("zfill", arguments, 2, 2);
        if (!Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(b));
        d = b.v - c.length;
        e = "+" === c[0] || "-" === c[0] ? 1 : 0;
        for (var g = 0; g < d; g++) f += "0";
        c = c.substr(0, e) + f + c.substr(e);
        return new Sk.builtin.str(c)
    });
    Sk.builtin.str.prototype.isdigit = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isdigit", arguments, 1, 1);
        return new Sk.builtin.bool(/^\d+$/.test(a.v))
    });
    Sk.builtin.str.prototype.isspace = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isspace", arguments, 1, 1);
        return new Sk.builtin.bool(/^\s+$/.test(a.v))
    });
    Sk.builtin.str.prototype.expandtabs = new Sk.builtin.func(function(a, b) {
        var c, d;
        Sk.builtin.pyCheckArgs("expandtabs", arguments, 1, 2);
        if (void 0 !== b && !Sk.builtin.checkInt(b)) throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(b));
        b = void 0 === b ? 8 : Sk.builtin.asnum$(b);
        c = Array(b + 1).join(" ");
        d = a.v.replace(/([^\r\n\t]*)\t/g, function(a, d) {
            return d + c.slice(d.length % b)
        });
        return new Sk.builtin.str(d)
    });
    Sk.builtin.str.prototype.swapcase = new Sk.builtin.func(function(a) {
        var b;
        Sk.builtin.pyCheckArgs("swapcase", arguments, 1, 1);
        b = a.v.replace(/[a-z]/gi, function(a) {
            var b = a.toLowerCase();
            return b === a ? a.toUpperCase() : b
        });
        return new Sk.builtin.str(b)
    });
    Sk.builtin.str.prototype.splitlines = new Sk.builtin.func(function(a, b) {
        var c = a.v,
            d = 0,
            e = a.v.length,
            f = [],
            g, h = 0;
        Sk.builtin.pyCheckArgs("splitlines", arguments, 1, 2);
        if (void 0 !== b && !Sk.builtin.checkBool(b)) throw new Sk.builtin.TypeError("boolean argument expected, got " + Sk.abstr.typeName(b));
        b = void 0 === b ? !1 : b.v;
        for (d = 0; d < e; d++)
            if (g = c.charAt(d), "\n" === c.charAt(d + 1) && "\r" === g) g = d + 2, h = c.slice(h, g), b || (h = h.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(h)), h = g;
            else if ("\n" === g && "\r" !== c.charAt(d - 1) || "\r" ===
            g) g = d + 1, h = c.slice(h, g), b || (h = h.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(h)), h = g;
        h < e && (h = c.slice(h, e), b || (h = h.replace(/(\r|\n)/g, "")), f.push(new Sk.builtin.str(h)));
        return new Sk.builtin.list(f)
    });
    Sk.builtin.str.prototype.title = new Sk.builtin.func(function(a) {
        var b;
        Sk.builtin.pyCheckArgs("title", arguments, 1, 1);
        b = a.v.replace(/[a-z][a-z]*/gi, function(a) {
            return a[0].toUpperCase() + a.substr(1).toLowerCase()
        });
        return new Sk.builtin.str(b)
    });
    Sk.builtin.str.prototype.isalpha = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isalpha", arguments, 1, 1);
        return new Sk.builtin.bool(a.v.length && goog.string.isAlpha(a.v))
    });
    Sk.builtin.str.prototype.isalnum = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isalnum", arguments, 1, 1);
        return new Sk.builtin.bool(a.v.length && goog.string.isAlphaNumeric(a.v))
    });
    Sk.builtin.str.prototype.isnumeric = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isnumeric", arguments, 1, 1);
        return new Sk.builtin.bool(a.v.length && goog.string.isNumeric(a.v))
    });
    Sk.builtin.str.prototype.islower = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("islower", arguments, 1, 1);
        return new Sk.builtin.bool(a.v.length && /[a-z]/.test(a.v) && !/[A-Z]/.test(a.v))
    });
    Sk.builtin.str.prototype.isupper = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("isupper", arguments, 1, 1);
        return new Sk.builtin.bool(a.v.length && !/[a-z]/.test(a.v) && /[A-Z]/.test(a.v))
    });
    Sk.builtin.str.prototype.istitle = new Sk.builtin.func(function(a) {
        var b = a.v,
            c = !1,
            d = !1,
            e, f;
        Sk.builtin.pyCheckArgs("istitle", arguments, 1, 1);
        for (e = 0; e < b.length; e++)
            if (f = b.charAt(e), !/[a-z]/.test(f) && /[A-Z]/.test(f)) {
                if (d) return new Sk.builtin.bool(!1);
                c = d = !0
            } else if (/[a-z]/.test(f) && !/[A-Z]/.test(f)) {
            if (!d) return new Sk.builtin.bool(!1);
            c = !0
        } else d = !1;
        return new Sk.builtin.bool(c)
    });
    Sk.builtin.str.prototype.nb$remainder = function(a) {
        var b, c;
        a.constructor === Sk.builtin.tuple || void 0 !== a.mp$subscript && a.constructor !== Sk.builtin.str || (a = new Sk.builtin.tuple([a]));
        c = 0;
        b = this.v.replace(/%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrs%])/g, function(b, e, f, g, h, k, l) {
            var m, p, n, r, q, t;
            g = Sk.builtin.asnum$(g);
            h = Sk.builtin.asnum$(h);
            if (void 0 === e || "" === e) m = c++;
            "" === h && (h = void 0);
            p = n = r = q = t = !1;
            f && (-1 !== f.indexOf("-") ? q = !0 : -1 !== f.indexOf("0") && (t = !0), -1 !== f.indexOf("+") ?
                n = !0 : -1 !== f.indexOf(" ") && (r = !0), p = -1 !== f.indexOf("#"));
            h && (h = parseInt(h.substr(1), 10));
            f = function(a, b) {
                var c, d, e, f;
                b = Sk.builtin.asnum$(b);
                e = !1;
                "number" === typeof a ? (0 > a && (a = -a, e = !0), f = a.toString(b)) : a instanceof Sk.builtin.float_ ? (f = a.str$(b, !1), 2 < f.length && ".0" === f.substr(-2) && (f = f.substr(0, f.length - 2)), e = a.nb$isnegative()) : a instanceof Sk.builtin.int_ ? (f = a.str$(b, !1), e = a.nb$isnegative()) : a instanceof Sk.builtin.lng && (f = a.str$(b, !1), e = a.nb$isnegative());
                goog.asserts.assert(void 0 !== f, "unhandled number format");
                c = !1;
                if (h)
                    for (d = f.length; d < h; ++d) f = "0" + f, c = !0;
                d = "";
                e ? d = "-" : n ? d = "+" + d : r && (d = " " + d);
                p && (16 === b ? d += "0x" : 8 !== b || (c || "0" === f) || (d += "0"));
                return [d, f]
            };
            b = function(a) {
                var b, c = a[0];
                a = a[1];
                if (g)
                    if (g = parseInt(g, 10), b = a.length + c.length, t)
                        for (; b < g; ++b) a = "0" + a;
                    else if (q)
                    for (; b < g; ++b) a += " ";
                else
                    for (; b < g; ++b) c = " " + c;
                return c + a
            };
            if (a.constructor === Sk.builtin.tuple) e = a.v[m];
            else if (void 0 !== a.mp$subscript && void 0 !== e) e = e.substring(1, e.length - 1), e = a.mp$subscript(new Sk.builtin.str(e));
            else if (a.constructor === Sk.builtin.dict ||
                a.constructor === Sk.builtin.list) e = a;
            else throw new Sk.builtin.AttributeError(a.tp$name + " instance has no attribute 'mp$subscript'");
            if ("d" === l || "i" === l) return b(f(e, 10));
            if ("o" === l) return b(f(e, 8));
            if ("x" === l) return b(f(e, 16));
            if ("X" === l) return b(f(e, 16)).toUpperCase();
            if ("f" === l || "F" === l || "e" === l || "E" === l || "g" === l || "G" === l) {
                m = Sk.builtin.asnum$(e);
                "string" === typeof m && (m = Number(m));
                if (Infinity === m) return "inf";
                if (-Infinity === m) return "-inf";
                if (isNaN(m)) return "nan";
                f = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(l.toLowerCase())];
                if (void 0 === h || "" === h)
                    if ("e" === l || "E" === l) h = 6;
                    else if ("f" === l || "F" === l) h = 7;
                f = m[f](h);
                Sk.builtin.checkFloat(e) && 0 === m && -Infinity === 1 / m && (f = "-" + f); - 1 !== "EFG".indexOf(l) && (f = f.toUpperCase());
                return b(["", f])
            }
            if ("c" === l) {
                if ("number" === typeof e) return String.fromCharCode(e);
                if (e instanceof Sk.builtin.int_) return String.fromCharCode(e.v);
                if (e instanceof Sk.builtin.float_) return String.fromCharCode(e.v);
                if (e instanceof Sk.builtin.lng) return String.fromCharCode(e.str$(10, !1)[0]);
                if (e.constructor === Sk.builtin.str) return e.v.substr(0,
                    1);
                throw new Sk.builtin.TypeError("an integer is required");
            }
            if ("r" === l) return l = Sk.builtin.repr(e), h ? l.v.substr(0, h) : l.v;
            if ("s" === l) {
                l = new Sk.builtin.str(e);
                if (h) return l.v.substr(0, h);
                g && (l.v = b([" ", l.v]));
                return l.v
            }
            if ("%" === l) return "%"
        });
        return new Sk.builtin.str(b)
    };
    var format = function(a) {
        var b, c, d, e = {};
        Sk.builtin.pyCheckArgs("format", arguments, 0, Infinity, !0, !0);
        b = new Sk.builtins.tuple(Array.prototype.slice.call(arguments, 1));
        c = new Sk.builtins.dict(a);
        if (void 0 === arguments[1]) return b.v;
        d = 0;
        if (0 !== c.size) {
            c = Sk.misceval.callsim(Sk.builtin.dict.prototype.items, c);
            for (var f in c.v) e[c.v[f].v[0].v] = c.v[f].v[1].v
        }
        for (var g in b.v) "0" !== g && (e[g - 1] = b.v[g].v);
        b = b.v[0].v.replace(/{(((?:\d+)|(?:\w+))?((?:\.(\w+))|(?:\[((?:\d+)|(?:\w+))\])?))?(?:\!([rs]))?(?:\:((?:(.)?([<\>\=\^]))?([\+\-\s])?(#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?))?}/g,
            function(a, b, c, f, g, n, r, q, t, y, v, z, F, w, E, x, s, K, C) {
                var D, u, A, B, G, H, I, J;
                w = Sk.builtin.asnum$(w);
                x = Sk.builtin.asnum$(x);
                if (void 0 !== n && "" !== n) u = e[c][n].v, d++;
                else if (void 0 !== g && "" !== g) u = e[c][g].v, d++;
                else if (void 0 !== c && "" !== c) u = e[c], d++;
                else if (void 0 === b || "" === b) a = e[d], d++, u = a;
                else if (b instanceof Sk.builtin.int_ || b instanceof Sk.builtin.float_ || b instanceof Sk.builtin.lng || !isNaN(parseInt(b, 10))) a = e[b], d++, u = a;
                "" === x && (x = void 0);
                if (void 0 === t || "" === t) t = " ";
                B = G = H = I = !1;
                q && (void 0 !== v && "" !== v && (-1 !== "-".indexOf(v) ?
                    I = !0 : -1 !== "+".indexOf(v) ? G = !0 : -1 !== " ".indexOf(v) && (H = !0)), z && (B = -1 !== "#".indexOf(z)), void 0 === w || "" === w || void 0 !== t && "" !== t || (t = " "), -1 !== "%".indexOf(s) && (J = !0));
                x && (x = parseInt(x, 10));
                D = function(a) {
                    if (void 0 === r || "" === r) return a;
                    if ("r" == r) return a = new Sk.builtin.str(a), a = Sk.builtin.repr(a), a.v;
                    if ("s" == r) return a = new Sk.builtin.str(a), a.v
                };
                A = function(a, b) {
                    var c;
                    J && (b += "%");
                    if (void 0 !== w && "" !== w)
                        if (w = parseInt(w, 10), c = b.length + a.length, I)
                            for (; c < w; ++c) b += t;
                        else if (-1 !== ">".indexOf(y))
                        for (; c < w; ++c) a =
                            t + a;
                    else if (-1 !== "^".indexOf(y))
                        for (; c < w; ++c) 0 === c % 2 ? a = t + a : 1 === c % 2 && (b += t);
                    else if (-1 !== "=".indexOf(y))
                        for (; c < w; ++c) b = t + b;
                    else
                        for (; c < w; ++c) b += t;
                    return D(a + b)
                };
                v = function(a, b) {
                    var c, d, e;
                    b = Sk.builtin.asnum$(b);
                    d = !1;
                    if (void 0 === q) return D(u);
                    "number" !== typeof a || x ? x ? (0 > a && (a = -a, d = !0), a = Number(a.toString(b)), e = a.toFixed(x)) : a instanceof Sk.builtin.float_ ? (e = a.str$(b, !1), 2 < e.length && ".0" === e.substr(-2) && (e = e.substr(0, e.length - 2)), d = a.nb$isnegative()) : a instanceof Sk.builtin.int_ ? (e = a.str$(b, !1), d = a.nb$isnegative()) :
                        a instanceof Sk.builtin.lng ? (e = a.str$(b, !1), d = a.nb$isnegative()) : e = a : (0 > a && (a = -a, d = !0), e = a.toString(b));
                    c = "";
                    d ? c = "-" : G ? c = "+" : H && (c = " ");
                    B && (16 === b ? c += "0x" : 8 === b && "0" !== e ? c += "0o" : 2 === b && "0" !== e && (c += "0b"));
                    "n" === s ? e = e.toLocaleString() : -1 !== ",".indexOf(E) && (d = e.toString().split("."), d[0] = d[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e = d.join("."));
                    return A(c, e)
                };
                if ("d" === s || "n" === s || "" === s || void 0 === s) return v(u, 10);
                if ("b" === s) return v(u, 2);
                if ("o" === s) return v(u, 8);
                if ("x" === s) return v(u, 16);
                if ("X" === s) return v(u,
                    16).toUpperCase();
                if ("f" === s || "F" === s || "e" === s || "E" === s || "g" === s || "G" === s) {
                    if (B) throw new Sk.builtin.ValueError("Alternate form (#) not allowed in float format specifier");
                    a = Sk.builtin.asnum$(u);
                    "string" === typeof a && (a = Number(a));
                    if (Infinity === a) return A("", "inf");
                    if (-Infinity === a) return A("-", "inf");
                    if (isNaN(a)) return A("", "nan");
                    z = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(s.toLowerCase())];
                    if (void 0 === x || "" === x)
                        if ("e" === s || "E" === s || "%" === s) x = 6;
                        else if ("f" === s || "F" === s) x = 6;
                    z = a[z](x); -
                    1 !== "EFG".indexOf(s) && (z = z.toUpperCase());
                    return v(z, 10)
                }
                if ("c" === s) {
                    if ("number" === typeof u) return A("", String.fromCharCode(u));
                    if (u instanceof Sk.builtin.int_) return A("", String.fromCharCode(u.v));
                    if (u instanceof Sk.builtin.float_) return A("", String.fromCharCode(u.v));
                    if (u instanceof Sk.builtin.lng) return A("", String.fromCharCode(u.str$(10, !1)[0]));
                    if (u.constructor === Sk.builtin.str) return A("", u.v.substr(0, 1));
                    throw new Sk.builtin.TypeError("an integer is required");
                }
                if (J) return void 0 === x && (x =
                    7), v(100 * u, 10)
            });
        return new Sk.builtin.str(b)
    };
    format.co_kwargs = !0;
    Sk.builtin.str.prototype.format = new Sk.builtin.func(format);
    Sk.builtin.tuple = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.tuple)) return new Sk.builtin.tuple(a);
        void 0 === a && (a = []);
        if ("[object Array]" === Object.prototype.toString.apply(a)) this.v = a;
        else if (Sk.builtin.checkIterable(a))
            for (this.v = [], a = Sk.abstr.iter(a), b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) this.v.push(b);
        else throw new Sk.builtin.TypeError("expecting Array or iterable");
        this.__class__ = Sk.builtin.tuple;
        this.v = this.v;
        return this
    };
    Sk.abstr.setUpInheritance("tuple", Sk.builtin.tuple, Sk.builtin.seqtype);
    Sk.builtin.tuple.prototype.$r = function() {
        var a, b;
        if (0 === this.v.length) return new Sk.builtin.str("()");
        b = [];
        for (a = 0; a < this.v.length; ++a) b[a] = Sk.misceval.objectRepr(this.v[a]).v;
        a = b.join(", ");
        1 === this.v.length && (a += ",");
        return new Sk.builtin.str("(" + a + ")")
    };
    Sk.builtin.tuple.prototype.mp$subscript = function(a) {
        var b, c;
        if (Sk.misceval.isIndex(a)) {
            if (c = Sk.misceval.asIndex(a), void 0 !== c) {
                0 > c && (c = this.v.length + c);
                if (0 > c || c >= this.v.length) throw new Sk.builtin.IndexError("tuple index out of range");
                return this.v[c]
            }
        } else if (a instanceof Sk.builtin.slice) return b = [], a.sssiter$(this, function(a, c) {
            b.push(c.v[a])
        }), new Sk.builtin.tuple(b);
        throw new Sk.builtin.TypeError("tuple indices must be integers, not " + Sk.abstr.typeName(a));
    };
    Sk.builtin.tuple.prototype.tp$hash = function() {
        var a, b, c = 1000003,
            d = 3430008,
            e = this.v.length;
        for (b = 0; b < e; ++b) {
            a = Sk.builtin.hash(this.v[b]).v;
            if (-1 === a) return new Sk.builtin.int_(-1);
            d = (d ^ a) * c;
            c += 82520 + e + e
        }
        d += 97531; - 1 === d && (d = -2);
        return new Sk.builtin.int_(d | 0)
    };
    Sk.builtin.tuple.prototype.sq$repeat = function(a) {
        var b, c, d;
        a = Sk.misceval.asIndex(a);
        d = [];
        for (c = 0; c < a; ++c)
            for (b = 0; b < this.v.length; ++b) d.push(this.v[b]);
        return new Sk.builtin.tuple(d)
    };
    Sk.builtin.tuple.prototype.nb$multiply = Sk.builtin.tuple.prototype.sq$repeat;
    Sk.builtin.tuple.prototype.nb$inplace_multiply = Sk.builtin.tuple.prototype.sq$repeat;
    Sk.builtin.tuple.prototype.tp$iter = function() {
        var a = {
            tp$iter: function() {
                return a
            },
            $obj: this,
            $index: 0,
            tp$iternext: function() {
                return a.$index >= a.$obj.v.length ? void 0 : a.$obj.v[a.$index++]
            },
            tp$name: "tuple_iterator"
        };
        return a
    };
    Sk.builtin.tuple.prototype.__iter__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__iter__", arguments, 1, 1);
        return a.tp$iter()
    });
    Sk.builtin.tuple.prototype.tp$richcompare = function(a, b) {
        var c, d, e, f, g;
        if (!a.__class__ || !Sk.misceval.isTrue(Sk.builtin.isinstance(a, Sk.builtin.tuple))) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
        g = this.v;
        a = a.v;
        f = g.length;
        e = a.length;
        for (d = 0; d < f && d < e && (c = Sk.misceval.richCompareBool(g[d], a[d], "Eq"), c); ++d);
        if (d >= f || d >= e) switch (b) {
            case "Lt":
                return f < e;
            case "LtE":
                return f <= e;
            case "Eq":
                return f === e;
            case "NotEq":
                return f !== e;
            case "Gt":
                return f > e;
            case "GtE":
                return f >= e;
            default:
                goog.asserts.fail()
        }
        return "Eq" === b ? !1 :
            "NotEq" === b ? !0 : Sk.misceval.richCompareBool(g[d], a[d], b)
    };
    Sk.builtin.tuple.prototype.sq$concat = function(a) {
        if (a.__class__ != Sk.builtin.tuple) throw a = 'can only concatenate tuple (not "' + (Sk.abstr.typeName(a) + '") to tuple'), new Sk.builtin.TypeError(a);
        return new Sk.builtin.tuple(this.v.concat(a.v))
    };
    Sk.builtin.tuple.prototype.sq$contains = function(a) {
        var b, c;
        b = this.tp$iter();
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext())
            if (Sk.misceval.richCompareBool(c, a, "Eq")) return !0;
        return !1
    };
    Sk.builtin.tuple.prototype.nb$add = Sk.builtin.tuple.prototype.sq$concat;
    Sk.builtin.tuple.prototype.nb$inplace_add = Sk.builtin.tuple.prototype.sq$concat;
    Sk.builtin.tuple.prototype.sq$length = function() {
        return this.v.length
    };
    Sk.builtin.tuple.prototype.index = new Sk.builtin.func(function(a, b) {
        var c, d = a.v.length,
            e = a.v;
        for (c = 0; c < d; ++c)
            if (Sk.misceval.richCompareBool(e[c], b, "Eq")) return new Sk.builtin.int_(c);
        throw new Sk.builtin.ValueError("tuple.index(x): x not in tuple");
    });
    Sk.builtin.tuple.prototype.count = new Sk.builtin.func(function(a, b) {
        var c, d = a.v.length,
            e = a.v,
            f = 0;
        for (c = 0; c < d; ++c) Sk.misceval.richCompareBool(e[c], b, "Eq") && (f += 1);
        return new Sk.builtin.int_(f)
    });
    goog.exportSymbol("Sk.builtin.tuple", Sk.builtin.tuple);
    Sk.builtin.dict = function(a) {
        var b, c, d;
        if (!(this instanceof Sk.builtin.dict)) return new Sk.builtin.dict(a);
        void 0 === a && (a = []);
        this.size = 0;
        if ("[object Array]" === Object.prototype.toString.apply(a))
            for (b = 0; b < a.length; b += 2) this.mp$ass_subscript(a[b], a[b + 1]);
        else if (a instanceof Sk.builtin.dict)
            for (c = Sk.abstr.iter(a), d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) b = a.mp$subscript(d), void 0 === b && (b = null), this.mp$ass_subscript(d, b);
        else if (Sk.builtin.checkIterable(a))
            for (c = Sk.abstr.iter(a), b = c.tp$iternext(); void 0 !==
                b; b = c.tp$iternext())
                if (b.mp$subscript) this.mp$ass_subscript(b.mp$subscript(0), b.mp$subscript(1));
                else throw new Sk.builtin.TypeError("element " + this.size + " is not a sequence");
        else throw new Sk.builtin.TypeError("object is not iterable");
        this.__class__ = Sk.builtin.dict;
        return this
    };
    Sk.abstr.setUpInheritance("dict", Sk.builtin.dict, Sk.builtin.object);
    Sk.abstr.markUnhashable(Sk.builtin.dict);
    var kf = Sk.builtin.hash;
    Sk.builtin.dict.prototype.key$lookup = function(a, b) {
        var c, d, e;
        for (e = 0; e < a.items.length; e++)
            if (c = a.items[e], d = Sk.misceval.richCompareBool(c.lhs, b, "Eq")) return c;
        return null
    };
    Sk.builtin.dict.prototype.key$pop = function(a, b) {
        var c, d, e;
        for (e = 0; e < a.items.length; e++)
            if (c = a.items[e], d = Sk.misceval.richCompareBool(c.lhs, b, "Eq")) return a.items.splice(e, 1), this.size -= 1, c
    };
    Sk.builtin.dict.prototype.mp$lookup = function(a) {
        var b = this[kf(a).v];
        if (void 0 !== b && (a = this.key$lookup(b, a))) return a.rhs
    };
    Sk.builtin.dict.prototype.mp$subscript = function(a) {
        Sk.builtin.pyCheckArgs("[]", arguments, 1, 2, !1, !1);
        var b;
        b = this.mp$lookup(a);
        if (void 0 !== b) return b;
        b = new Sk.builtin.str(a);
        throw new Sk.builtin.KeyError(b.v);
    };
    Sk.builtin.dict.prototype.sq$contains = function(a) {
        Sk.builtin.pyCheckArgs("__contains__()", arguments, 1, 1, !1, !1);
        return void 0 !== this.mp$lookup(a)
    };
    Sk.builtin.dict.prototype.mp$ass_subscript = function(a, b) {
        var c = kf(a),
            d = this[c.v];
        void 0 === d ? (d = {
            $hash: c,
            items: [{
                lhs: a,
                rhs: b
            }]
        }, this[c.v] = d, this.size += 1) : (c = this.key$lookup(d, a)) ? c.rhs = b : (d.items.push({
            lhs: a,
            rhs: b
        }), this.size += 1)
    };
    Sk.builtin.dict.prototype.mp$del_subscript = function(a) {
        Sk.builtin.pyCheckArgs("del", arguments, 1, 1, !1, !1);
        var b = this[kf(a).v];
        if (void 0 !== b && (b = this.key$pop(b, a), void 0 !== b)) return;
        b = new Sk.builtin.str(a);
        throw new Sk.builtin.KeyError(b.v);
    };
    Sk.builtin.dict.prototype.tp$iter = function() {
        var a, b, c, d, e = [];
        for (d in this)
            if (this.hasOwnProperty(d) && (c = this[d]) && void 0 !== c.$hash && void 0 !== c.items)
                for (b = 0; b < c.items.length; b++) e.push(c.items[b].lhs);
        return a = {
            tp$iter: function() {
                return a
            },
            $obj: this,
            $index: 0,
            $keys: e,
            tp$iternext: function() {
                return a.$index >= a.$keys.length ? void 0 : a.$keys[a.$index++]
            },
            tp$name: "dict_keyiterator"
        }
    };
    Sk.builtin.dict.prototype.$r = function() {
        var a, b, c, d = [];
        b = Sk.abstr.iter(this);
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) a = this.mp$subscript(c), void 0 === a && (a = null), a === this ? d.push(Sk.misceval.objectRepr(c).v + ": {...}") : d.push(Sk.misceval.objectRepr(c).v + ": " + Sk.misceval.objectRepr(a).v);
        return new Sk.builtin.str("{" + d.join(", ") + "}")
    };
    Sk.builtin.dict.prototype.mp$length = function() {
        return this.size
    };
    Sk.builtin.dict.prototype.get = new Sk.builtin.func(function(a, b, c) {
        Sk.builtin.pyCheckArgs("get()", arguments, 1, 2, !1, !0);
        var d;
        void 0 === c && (c = Sk.builtin.none.none$);
        d = a.mp$lookup(b);
        void 0 === d && (d = c);
        return d
    });
    Sk.builtin.dict.prototype.pop = new Sk.builtin.func(function(a, b, c) {
        Sk.builtin.pyCheckArgs("pop()", arguments, 1, 2, !1, !0);
        var d = kf(b),
            d = a[d.v];
        if (void 0 !== d && (d = a.key$pop(d, b), void 0 !== d)) return d.rhs;
        if (void 0 !== c) return c;
        d = new Sk.builtin.str(b);
        throw new Sk.builtin.KeyError(d.v);
    });
    Sk.builtin.dict.prototype.has_key = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("has_key()", arguments, 1, 1, !1, !0);
        return new Sk.builtin.bool(a.sq$contains(b))
    });
    Sk.builtin.dict.prototype.items = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("items()", arguments, 0, 0, !1, !0);
        var b, c, d, e = [];
        c = Sk.abstr.iter(a);
        for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) b = a.mp$subscript(d), void 0 === b && (b = null), e.push(new Sk.builtin.tuple([d, b]));
        return new Sk.builtin.list(e)
    });
    Sk.builtin.dict.prototype.keys = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("keys()", arguments, 0, 0, !1, !0);
        var b, c, d = [];
        b = Sk.abstr.iter(a);
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) d.push(c);
        return new Sk.builtin.list(d)
    });
    Sk.builtin.dict.prototype.values = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("values()", arguments, 0, 0, !1, !0);
        var b, c, d = [];
        c = Sk.abstr.iter(a);
        for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) b = a.mp$subscript(b), void 0 === b && (b = null), d.push(b);
        return new Sk.builtin.list(d)
    });
    Sk.builtin.dict.prototype.clear = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("clear()", arguments, 0, 0, !1, !0);
        var b, c;
        c = Sk.abstr.iter(a);
        for (b = c.tp$iternext(); void 0 !== b; b = c.tp$iternext()) a.mp$del_subscript(b)
    });
    Sk.builtin.dict.prototype.setdefault = new Sk.builtin.func(function(a, b, c) {
        try {
            return a.mp$subscript(b)
        } catch (d) {
            return void 0 === c && (c = Sk.builtin.none.none$), a.mp$ass_subscript(b, c), c
        }
    });
    Sk.builtin.dict.prototype.dict_merge = function(a) {
        var b, c, d;
        if (a instanceof Sk.builtin.dict)
            for (b = a.tp$iter(), c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) {
                d = a.mp$subscript(c);
                if (void 0 === d) throw new Sk.builtin.AttributeError("cannot get item for key: " + c.v);
                this.mp$ass_subscript(c, d)
            } else
                for (b = Sk.misceval.callsim(a.keys, a), b = Sk.abstr.iter(b), c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) {
                    d = a.tp$getitem(c);
                    if (void 0 === d) throw new Sk.builtin.AttributeError("cannot get item for key: " + c.v);
                    this.mp$ass_subscript(c,
                        d)
                }
    };
    var update_f = function(a, b, c) {
        if (void 0 !== c && ("dict" === c.tp$name || c.keys)) b.dict_merge(c);
        else if (void 0 !== c && Sk.builtin.checkIterable(c)) {
            var d, e = 0;
            c = Sk.abstr.iter(c);
            for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext(), e++) {
                if (!Sk.builtin.checkIterable(d)) throw new Sk.builtin.TypeError("cannot convert dictionary update sequence element #" + e + " to a sequence");
                if (2 === d.sq$length()) {
                    var f = Sk.abstr.iter(d);
                    d = f.tp$iternext();
                    f = f.tp$iternext();
                    b.mp$ass_subscript(d, f)
                } else throw new Sk.builtin.ValueError("dictionary update sequence element #" + e +
                    " has length " + d.sq$length() + "; 2 is required");
            }
        } else if (void 0 !== c) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(c) + "' object is not iterable");
        a = new Sk.builtins.dict(a);
        b.dict_merge(a);
        return Sk.builtin.none.none$
    };
    update_f.co_kwargs = !0;
    Sk.builtin.dict.prototype.update = new Sk.builtin.func(update_f);
    Sk.builtin.dict.prototype.__contains__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__contains__", arguments, 1, 1, !1, !0);
        return Sk.builtin.dict.prototype.sq$contains.call(a, b)
    });
    Sk.builtin.dict.prototype.__cmp__ = new Sk.builtin.func(function(a, b, c) {
        return Sk.builtin.NotImplemented.NotImplemented$
    });
    Sk.builtin.dict.prototype.__delitem__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__delitem__", arguments, 1, 1, !1, !0);
        return Sk.builtin.dict.prototype.mp$del_subscript.call(a, b)
    });
    Sk.builtin.dict.prototype.__getitem__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__getitem__", arguments, 1, 1, !1, !0);
        return Sk.builtin.dict.prototype.mp$subscript.call(a, b)
    });
    Sk.builtin.dict.prototype.__setitem__ = new Sk.builtin.func(function(a, b, c) {
        Sk.builtin.pyCheckArgs("__setitem__", arguments, 2, 2, !1, !0);
        return Sk.builtin.dict.prototype.mp$ass_subscript.call(a, b, c)
    });
    Sk.builtin.dict.prototype.__hash__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__hash__", arguments, 0, 0, !1, !0);
        return Sk.builtin.dict.prototype.tp$hash.call(a)
    });
    Sk.builtin.dict.prototype.__len__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__len__", arguments, 0, 0, !1, !0);
        return Sk.builtin.dict.prototype.mp$length.call(a)
    });
    Sk.builtin.dict.prototype.__getattr__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__getattr__", arguments, 1, 1, !1, !0);
        if (!Sk.builtin.checkString(b)) throw new Sk.builtin.TypeError("__getattr__ requires a string");
        return Sk.builtin.dict.prototype.tp$getattr.call(a, Sk.ffi.remapToJs(b))
    });
    Sk.builtin.dict.prototype.__iter__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__iter__", arguments, 0, 0, !1, !0);
        return Sk.builtin.dict.prototype.tp$iter.call(a)
    });
    Sk.builtin.dict.prototype.__repr__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__repr__", arguments, 0, 0, !1, !0);
        return Sk.builtin.dict.prototype.$r.call(a)
    });
    Sk.builtin.dict.prototype.ob$eq = function(a) {
        var b, c, d;
        if (this === a) return Sk.builtin.bool.true$;
        if (!(a instanceof Sk.builtin.dict)) return Sk.builtin.NotImplemented.NotImplemented$;
        if (this.size !== a.size) return Sk.builtin.bool.false$;
        b = this.tp$iter();
        for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext())
            if (d = this.mp$subscript(c), c = a.mp$subscript(c), !Sk.misceval.richCompareBool(d, c, "Eq")) return Sk.builtin.bool.false$;
        return Sk.builtin.bool.true$
    };
    Sk.builtin.dict.prototype.ob$ne = function(a) {
        a = this.ob$eq(a);
        return a instanceof Sk.builtin.NotImplemented ? a : a.v ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$
    };
    Sk.builtin.dict.prototype.copy = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.copy is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.fromkeys = new Sk.builtin.func(function(a, b) {
        throw new Sk.builtin.NotImplementedError("dict.fromkeys is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.iteritems = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.iteritems is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.iterkeys = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.iterkeys is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.itervalues = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.itervalues is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.popitem = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.popitem is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.viewitems = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.viewitems is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.viewkeys = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.viewkeys is not yet implemented in Skulpt");
    });
    Sk.builtin.dict.prototype.viewvalues = new Sk.builtin.func(function(a) {
        throw new Sk.builtin.NotImplementedError("dict.viewvalues is not yet implemented in Skulpt");
    });
    goog.exportSymbol("Sk.builtin.dict", Sk.builtin.dict);
    Sk.builtin.numtype = function() {
        throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.numtype class");
    };
    Sk.abstr.setUpInheritance("NumericType", Sk.builtin.numtype, Sk.builtin.object);
    Sk.builtin.numtype.sk$abstract = !0;
    Sk.builtin.numtype.prototype.__abs__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$abs) throw new Sk.builtin.NotImplementedError("__abs__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__abs__", arguments, 0, 0, !1, !0);
        return a.nb$abs()
    });
    Sk.builtin.numtype.prototype.__neg__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$negative) throw new Sk.builtin.NotImplementedError("__neg__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__neg__", arguments, 0, 0, !1, !0);
        return a.nb$negative()
    });
    Sk.builtin.numtype.prototype.__pos__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$positive) throw new Sk.builtin.NotImplementedError("__pos__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__pos__", arguments, 0, 0, !1, !0);
        return a.nb$positive()
    });
    Sk.builtin.numtype.prototype.__int__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$int_) throw new Sk.builtin.NotImplementedError("__int__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__int__", arguments, 0, 0, !1, !0);
        return a.nb$int_()
    });
    Sk.builtin.numtype.prototype.__long__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$lng) throw new Sk.builtin.NotImplementedError("__long__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__long__", arguments, 0, 0, !1, !0);
        return a.nb$lng()
    });
    Sk.builtin.numtype.prototype.__float__ = new Sk.builtin.func(function(a) {
        if (void 0 === a.nb$float_) throw new Sk.builtin.NotImplementedError("__float__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__float__", arguments, 0, 0, !1, !0);
        return a.nb$float_()
    });
    Sk.builtin.numtype.prototype.__add__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$add) throw new Sk.builtin.NotImplementedError("__add__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__add__", arguments, 1, 1, !1, !0);
        return a.nb$add(b)
    });
    Sk.builtin.numtype.prototype.__radd__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_add) throw new Sk.builtin.NotImplementedError("__radd__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__radd__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_add(b)
    });
    Sk.builtin.numtype.prototype.__sub__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$subtract) throw new Sk.builtin.NotImplementedError("__sub__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__sub__", arguments, 1, 1, !1, !0);
        return a.nb$subtract(b)
    });
    Sk.builtin.numtype.prototype.__rsub__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_subtract) throw new Sk.builtin.NotImplementedError("__rsub__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rsub__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_subtract(b)
    });
    Sk.builtin.numtype.prototype.__mul__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$multiply) throw new Sk.builtin.NotImplementedError("__mul__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__mul__", arguments, 1, 1, !1, !0);
        return a.nb$multiply(b)
    });
    Sk.builtin.numtype.prototype.__rmul__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_multiply) throw new Sk.builtin.NotImplementedError("__rmul__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rmul__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_multiply(b)
    });
    Sk.builtin.numtype.prototype.__div__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$divide) throw new Sk.builtin.NotImplementedError("__div__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__div__", arguments, 1, 1, !1, !0);
        return a.nb$divide(b)
    });
    Sk.builtin.numtype.prototype.__rdiv__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_divide) throw new Sk.builtin.NotImplementedError("__rdiv__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rdiv__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_divide(b)
    });
    Sk.builtin.numtype.prototype.__floordiv__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$floor_divide) throw new Sk.builtin.NotImplementedError("__floordiv__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__floordiv__", arguments, 1, 1, !1, !0);
        return a.nb$floor_divide(b)
    });
    Sk.builtin.numtype.prototype.__rfloordiv__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_floor_divide) throw new Sk.builtin.NotImplementedError("__rfloordiv__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rfloordiv__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_floor_divide(b)
    });
    Sk.builtin.numtype.prototype.__mod__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$remainder) throw new Sk.builtin.NotImplementedError("__mod__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__mod__", arguments, 1, 1, !1, !0);
        return a.nb$remainder(b)
    });
    Sk.builtin.numtype.prototype.__rmod__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_remainder) throw new Sk.builtin.NotImplementedError("__rmod__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rmod__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_remainder(b)
    });
    Sk.builtin.numtype.prototype.__divmod__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$divmod) throw new Sk.builtin.NotImplementedError("__divmod__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__divmod__", arguments, 1, 1, !1, !0);
        return a.nb$divmod(b)
    });
    Sk.builtin.numtype.prototype.__rdivmod__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_divmod) throw new Sk.builtin.NotImplementedError("__rdivmod__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rdivmod__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_divmod(b)
    });
    Sk.builtin.numtype.prototype.__pow__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$power) throw new Sk.builtin.NotImplementedError("__pow__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__pow__", arguments, 1, 1, !1, !0);
        return a.nb$power(b)
    });
    Sk.builtin.numtype.prototype.__rpow__ = new Sk.builtin.func(function(a, b) {
        if (void 0 === a.nb$reflected_power) throw new Sk.builtin.NotImplementedError("__rpow__ is not yet implemented");
        Sk.builtin.pyCheckArgs("__rpow__", arguments, 1, 1, !1, !0);
        return a.nb$reflected_power(b)
    });
    Sk.builtin.numtype.prototype.__coerce__ = new Sk.builtin.func(function(a, b) {
        throw new Sk.builtin.NotImplementedError("__coerce__ is not yet implemented");
    });
    Sk.builtin.numtype.prototype.nb$add = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_add = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_add = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$subtract = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_subtract = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_subtract = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$multiply = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_multiply = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_multiply = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$floor_divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_floor_divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_floor_divide = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$remainder = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_remainder = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_remainder = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$divmod = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_divmod = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$power = function(a, b) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$reflected_power = function(a, b) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$inplace_power = function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$abs = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$negative = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$positive = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$nonzero = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$isnegative = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.numtype.prototype.nb$ispositive = function() {
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.biginteger = function(a, b, c) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    };
    Sk.builtin.biginteger.canary = 0xdeadbeefcafe;
    Sk.builtin.biginteger.j_lm = 15715070 == (Sk.builtin.biginteger.canary & 16777215);
    Sk.builtin.biginteger.nbi = function() {
        return new Sk.builtin.biginteger(null)
    };
    Sk.builtin.biginteger.prototype.am1 = function(a, b, c, d, e, f) {
        for (var g; 0 <= --f;) g = b * this[a++] + c[d] + e, e = Math.floor(g / 67108864), c[d++] = g & 67108863;
        return e
    };
    Sk.builtin.biginteger.prototype.am2 = function(a, b, c, d, e, f) {
        for (var g, h, k = b & 32767, l = b >> 15; 0 <= --f;) h = this[a] & 32767, g = this[a++] >> 15, b = l * h + g * k, h = k * h + ((b & 32767) << 15) + c[d] + (e & 1073741823), e = (h >>> 30) + (b >>> 15) + l * g + (e >>> 30), c[d++] = h & 1073741823;
        return e
    };
    Sk.builtin.biginteger.prototype.am3 = function(a, b, c, d, e, f) {
        for (var g, h, k = b & 16383, l = b >> 14; 0 <= --f;) h = this[a] & 16383, g = this[a++] >> 14, b = l * h + g * k, h = k * h + ((b & 16383) << 14) + c[d] + e, e = (h >> 28) + (b >> 14) + l * g, c[d++] = h & 268435455;
        return e
    };
    Sk.builtin.biginteger.prototype.am = Sk.builtin.biginteger.prototype.am3;
    Sk.builtin.biginteger.dbits = 28;
    Sk.builtin.biginteger.prototype.DB = Sk.builtin.biginteger.dbits;
    Sk.builtin.biginteger.prototype.DM = (1 << Sk.builtin.biginteger.dbits) - 1;
    Sk.builtin.biginteger.prototype.DV = 1 << Sk.builtin.biginteger.dbits;
    Sk.builtin.biginteger.BI_FP = 52;
    Sk.builtin.biginteger.prototype.FV = Math.pow(2, Sk.builtin.biginteger.BI_FP);
    Sk.builtin.biginteger.prototype.F1 = Sk.builtin.biginteger.BI_FP - Sk.builtin.biginteger.dbits;
    Sk.builtin.biginteger.prototype.F2 = 2 * Sk.builtin.biginteger.dbits - Sk.builtin.biginteger.BI_FP;
    Sk.builtin.biginteger.BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    Sk.builtin.biginteger.BI_RC = [];
    var rr, vv;
    rr = 48;
    for (vv = 0; 9 >= vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
    rr = 97;
    for (vv = 10; 36 > vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
    rr = 65;
    for (vv = 10; 36 > vv; ++vv) Sk.builtin.biginteger.BI_RC[rr++] = vv;
    Sk.builtin.biginteger.int2char = function(a) {
        return Sk.builtin.biginteger.BI_RM.charAt(a)
    };
    Sk.builtin.biginteger.intAt = function(a, b) {
        var c = Sk.builtin.biginteger.BI_RC[a.charCodeAt(b)];
        return null == c ? -1 : c
    };
    Sk.builtin.biginteger.prototype.bnpCopyTo = function(a) {
        var b;
        for (b = this.t - 1; 0 <= b; --b) a[b] = this[b];
        a.t = this.t;
        a.s = this.s
    };
    Sk.builtin.biginteger.prototype.bnpFromInt = function(a) {
        this.t = 1;
        this.s = 0 > a ? -1 : 0;
        0 < a ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
    };
    Sk.builtin.biginteger.nbv = function(a) {
        var b = new Sk.builtin.biginteger(null);
        b.bnpFromInt(a);
        return b
    };
    Sk.builtin.biginteger.prototype.bnpFromString = function(a, b) {
        var c, d, e, f, g;
        if (16 == b) g = 4;
        else if (8 == b) g = 3;
        else if (256 == b) g = 8;
        else if (2 == b) g = 1;
        else if (32 == b) g = 5;
        else if (4 == b) g = 2;
        else {
            this.fromRadix(a, b);
            return
        }
        this.s = this.t = 0;
        d = a.length;
        e = !1;
        for (f = 0; 0 <= --d;) c = 8 == g ? a[d] & 255 : Sk.builtin.biginteger.intAt(a, d), 0 > c ? "-" == a.charAt(d) && (e = !0) : (e = !1, 0 === f ? this[this.t++] = c : f + g > this.DB ? (this[this.t - 1] |= (c & (1 << this.DB - f) - 1) << f, this[this.t++] = c >> this.DB - f) : this[this.t - 1] |= c << f, f += g, f >= this.DB && (f -= this.DB));
        8 == g &&
            0 !== (a[0] & 128) && (this.s = -1, 0 < f && (this[this.t - 1] |= (1 << this.DB - f) - 1 << f));
        this.clamp();
        e && Sk.builtin.biginteger.ZERO.subTo(this, this)
    };
    Sk.builtin.biginteger.prototype.bnpClamp = function() {
        for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;) --this.t
    };
    Sk.builtin.biginteger.prototype.bnToString = function(a) {
        var b, c, d, e, f, g;
        if (0 > this.s) return "-" + this.negate().toString(a);
        if (16 == a) g = 4;
        else if (8 == a) g = 3;
        else if (2 == a) g = 1;
        else if (32 == a) g = 5;
        else if (4 == a) g = 2;
        else return this.toRadix(a);
        b = (1 << g) - 1;
        d = !1;
        e = "";
        f = this.t;
        a = this.DB - f * this.DB % g;
        if (0 < f--)
            for (a < this.DB && 0 < (c = this[f] >> a) && (d = !0, e = Sk.builtin.biginteger.int2char(c)); 0 <= f;) a < g ? (c = (this[f] & (1 << a) - 1) << g - a, c |= this[--f] >> (a += this.DB - g)) : (c = this[f] >> (a -= g) & b, 0 >= a && (a += this.DB, --f)), 0 < c && (d = !0), d && (e += Sk.builtin.biginteger.int2char(c));
        return d ? e : "0"
    };
    Sk.builtin.biginteger.prototype.bnNegate = function() {
        var a = Sk.builtin.biginteger.nbi();
        Sk.builtin.biginteger.ZERO.subTo(this, a);
        return a
    };
    Sk.builtin.biginteger.prototype.bnAbs = function() {
        return 0 > this.s ? this.negate() : this
    };
    Sk.builtin.biginteger.prototype.bnCompareTo = function(a) {
        var b, c = this.s - a.s;
        if (0 !== c) return c;
        b = this.t;
        c = b - a.t;
        if (0 !== c) return 0 > this.s ? -c : c;
        for (; 0 <= --b;)
            if (0 !== (c = this[b] - a[b])) return c;
        return 0
    };
    Sk.builtin.biginteger.nbits = function(a) {
        var b = 1,
            c;
        0 !== (c = a >>> 16) && (a = c, b += 16);
        0 !== (c = a >> 8) && (a = c, b += 8);
        0 !== (c = a >> 4) && (a = c, b += 4);
        0 !== (c = a >> 2) && (a = c, b += 2);
        0 !== a >> 1 && (b += 1);
        return b
    };
    Sk.builtin.biginteger.prototype.bnBitLength = function() {
        return 0 >= this.t ? 0 : this.DB * (this.t - 1) + Sk.builtin.biginteger.nbits(this[this.t - 1] ^ this.s & this.DM)
    };
    Sk.builtin.biginteger.prototype.bnpDLShiftTo = function(a, b) {
        var c;
        for (c = this.t - 1; 0 <= c; --c) b[c + a] = this[c];
        for (c = a - 1; 0 <= c; --c) b[c] = 0;
        b.t = this.t + a;
        b.s = this.s
    };
    Sk.builtin.biginteger.prototype.bnpDRShiftTo = function(a, b) {
        var c;
        for (c = a; c < this.t; ++c) b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0);
        b.s = this.s
    };
    Sk.builtin.biginteger.prototype.bnpLShiftTo = function(a, b) {
        var c = a % this.DB,
            d = this.DB - c,
            e = (1 << d) - 1,
            f = Math.floor(a / this.DB),
            g = this.s << c & this.DM,
            h;
        for (h = this.t - 1; 0 <= h; --h) b[h + f + 1] = this[h] >> d | g, g = (this[h] & e) << c;
        for (h = f - 1; 0 <= h; --h) b[h] = 0;
        b[f] = g;
        b.t = this.t + f + 1;
        b.s = this.s;
        b.clamp()
    };
    Sk.builtin.biginteger.prototype.bnpRShiftTo = function(a, b) {
        var c, d, e, f, g;
        b.s = this.s;
        g = Math.floor(a / this.DB);
        if (g >= this.t) b.t = 0;
        else {
            f = a % this.DB;
            e = this.DB - f;
            d = (1 << f) - 1;
            b[0] = this[g] >> f;
            for (c = g + 1; c < this.t; ++c) b[c - g - 1] |= (this[c] & d) << e, b[c - g] = this[c] >> f;
            0 < f && (b[this.t - g - 1] |= (this.s & d) << e);
            b.t = this.t - g;
            b.clamp()
        }
    };
    Sk.builtin.biginteger.prototype.bnpSubTo = function(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e;) d += this[c] - a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d -= a[c], b[c++] = d & this.DM, d >>= this.DB;
            d -= a.s
        }
        b.s = 0 > d ? -1 : 0; - 1 > d ? b[c++] = this.DV + d : 0 < d && (b[c++] = d);
        b.t = c;
        b.clamp()
    };
    Sk.builtin.biginteger.prototype.bnpMultiplyTo = function(a, b) {
        var c = this.abs(),
            d = a.abs(),
            e = c.t;
        for (b.t = e + d.t; 0 <= --e;) b[e] = 0;
        for (e = 0; e < d.t; ++e) b[e + c.t] = c.am(0, d[e], b, e, 0, c.t);
        b.s = 0;
        b.clamp();
        this.s != a.s && Sk.builtin.biginteger.ZERO.subTo(b, b)
    };
    Sk.builtin.biginteger.prototype.bnpSquareTo = function(a) {
        for (var b, c = this.abs(), d = a.t = 2 * c.t; 0 <= --d;) a[d] = 0;
        for (d = 0; d < c.t - 1; ++d) b = c.am(d, c[d], a, 2 * d, 0, 1), (a[d + c.t] += c.am(d + 1, 2 * c[d], a, 2 * d + 1, b, c.t - d - 1)) >= c.DV && (a[d + c.t] -= c.DV, a[d + c.t + 1] = 1);
        0 < a.t && (a[a.t - 1] += c.am(d, c[d], a, 2 * d, 0, 1));
        a.s = 0;
        a.clamp()
    };
    Sk.builtin.biginteger.prototype.bnpDivRemTo = function(a, b, c) {
        var d, e, f, g, h, k, l, m, p, n, r, q;
        m = a.abs();
        if (!(0 >= m.t))
            if (h = this.abs(), h.t < m.t) null != b && b.fromInt(0), null != c && this.copyTo(c);
            else if (null == c && (c = Sk.builtin.biginteger.nbi()), n = Sk.builtin.biginteger.nbi(), r = this.s, q = a.s, a = this.DB - Sk.builtin.biginteger.nbits(m[m.t - 1]), 0 < a ? (m.lShiftTo(a, n), h.lShiftTo(a, c)) : (m.copyTo(n), h.copyTo(c)), p = n.t, m = n[p - 1], 0 !== m) {
            d = m * (1 << this.F1) + (1 < p ? n[p - 2] >> this.F2 : 0);
            h = this.FV / d;
            k = (1 << this.F1) / d;
            l = 1 << this.F2;
            e = c.t;
            f = e -
                p;
            g = null == b ? Sk.builtin.biginteger.nbi() : b;
            n.dlShiftTo(f, g);
            0 <= c.compareTo(g) && (c[c.t++] = 1, c.subTo(g, c));
            Sk.builtin.biginteger.ONE.dlShiftTo(p, g);
            for (g.subTo(n, n); n.t < p;) n[n.t++] = 0;
            for (; 0 <= --f;)
                if (d = c[--e] == m ? this.DM : Math.floor(c[e] * h + (c[e - 1] + l) * k), (c[e] += n.am(0, d, c, f, 0, p)) < d)
                    for (n.dlShiftTo(f, g), c.subTo(g, c); c[e] < --d;) c.subTo(g, c);
            null != b && (c.drShiftTo(p, b), r != q && Sk.builtin.biginteger.ZERO.subTo(b, b));
            c.t = p;
            c.clamp();
            0 < a && c.rShiftTo(a, c);
            0 > r && Sk.builtin.biginteger.ZERO.subTo(c, c)
        }
    };
    Sk.builtin.biginteger.prototype.bnMod = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.abs().divRemTo(a, null, b);
        0 > this.s && 0 < b.compareTo(Sk.builtin.biginteger.ZERO) && a.subTo(b, b);
        return b
    };
    Sk.builtin.biginteger.Classic = function(a) {
        this.m = a
    };
    Sk.builtin.biginteger.prototype.cConvert = function(a) {
        return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
    };
    Sk.builtin.biginteger.prototype.cRevert = function(a) {
        return a
    };
    Sk.builtin.biginteger.prototype.cReduce = function(a) {
        a.divRemTo(this.m, null, a)
    };
    Sk.builtin.biginteger.prototype.cMulTo = function(a, b, c) {
        a.multiplyTo(b, c);
        this.reduce(c)
    };
    Sk.builtin.biginteger.prototype.cSqrTo = function(a, b) {
        a.squareTo(b);
        this.reduce(b)
    };
    Sk.builtin.biginteger.Classic.prototype.convert = Sk.builtin.biginteger.prototype.cConvert;
    Sk.builtin.biginteger.Classic.prototype.revert = Sk.builtin.biginteger.prototype.cRevert;
    Sk.builtin.biginteger.Classic.prototype.reduce = Sk.builtin.biginteger.prototype.cReduce;
    Sk.builtin.biginteger.Classic.prototype.mulTo = Sk.builtin.biginteger.prototype.cMulTo;
    Sk.builtin.biginteger.Classic.prototype.sqrTo = Sk.builtin.biginteger.prototype.cSqrTo;
    Sk.builtin.biginteger.prototype.bnpInvDigit = function() {
        var a, b;
        if (1 > this.t) return 0;
        b = this[0];
        if (0 === (b & 1)) return 0;
        a = b & 3;
        a = a * (2 - (b & 15) * a) & 15;
        a = a * (2 - (b & 255) * a) & 255;
        a = a * (2 - ((b & 65535) * a & 65535)) & 65535;
        a = a * (2 - b * a % this.DV) % this.DV;
        return 0 < a ? this.DV - a : -a
    };
    Sk.builtin.biginteger.Montgomery = function(a) {
        this.m = a;
        this.mp = a.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << a.DB - 15) - 1;
        this.mt2 = 2 * a.t
    };
    Sk.builtin.biginteger.prototype.montConvert = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        a.abs().dlShiftTo(this.m.t, b);
        b.divRemTo(this.m, null, b);
        0 > a.s && 0 < b.compareTo(Sk.builtin.biginteger.ZERO) && this.m.subTo(b, b);
        return b
    };
    Sk.builtin.biginteger.prototype.montRevert = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        a.copyTo(b);
        this.reduce(b);
        return b
    };
    Sk.builtin.biginteger.prototype.montReduce = function(a) {
        for (var b, c, d; a.t <= this.mt2;) a[a.t++] = 0;
        for (d = 0; d < this.m.t; ++d)
            for (c = a[d] & 32767, b = c * this.mpl + ((c * this.mph + (a[d] >> 15) * this.mpl & this.um) << 15) & a.DM, c = d + this.m.t, a[c] += this.m.am(0, b, a, d, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV, a[++c]++;
        a.clamp();
        a.drShiftTo(this.m.t, a);
        0 <= a.compareTo(this.m) && a.subTo(this.m, a)
    };
    Sk.builtin.biginteger.prototype.montSqrTo = function(a, b) {
        a.squareTo(b);
        this.reduce(b)
    };
    Sk.builtin.biginteger.prototype.montMulTo = function(a, b, c) {
        a.multiplyTo(b, c);
        this.reduce(c)
    };
    Sk.builtin.biginteger.Montgomery.prototype.convert = Sk.builtin.biginteger.prototype.montConvert;
    Sk.builtin.biginteger.Montgomery.prototype.revert = Sk.builtin.biginteger.prototype.montRevert;
    Sk.builtin.biginteger.Montgomery.prototype.reduce = Sk.builtin.biginteger.prototype.montReduce;
    Sk.builtin.biginteger.Montgomery.prototype.mulTo = Sk.builtin.biginteger.prototype.montMulTo;
    Sk.builtin.biginteger.Montgomery.prototype.sqrTo = Sk.builtin.biginteger.prototype.montSqrTo;
    Sk.builtin.biginteger.prototype.bnpIsEven = function() {
        return 0 === (0 < this.t ? this[0] & 1 : this.s)
    };
    Sk.builtin.biginteger.prototype.bnpExp = function(a, b) {
        var c, d, e, f, g;
        if (4294967295 < a || 1 > a) return Sk.builtin.biginteger.ONE;
        d = Sk.builtin.biginteger.nbi();
        e = Sk.builtin.biginteger.nbi();
        f = b.convert(this);
        g = Sk.builtin.biginteger.nbits(a) - 1;
        for (f.copyTo(d); 0 <= --g;) b.sqrTo(d, e), 0 < (a & 1 << g) ? b.mulTo(e, f, d) : (c = d, d = e, e = c);
        return b.revert(d)
    };
    Sk.builtin.biginteger.prototype.bnModPowInt = function(a, b) {
        var c;
        c = 256 > a || b.isEven() ? new Sk.builtin.biginteger.Classic(b) : new Sk.builtin.biginteger.Montgomery(b);
        return this.exp(a, c)
    };
    Sk.builtin.biginteger.prototype.copyTo = Sk.builtin.biginteger.prototype.bnpCopyTo;
    Sk.builtin.biginteger.prototype.fromInt = Sk.builtin.biginteger.prototype.bnpFromInt;
    Sk.builtin.biginteger.prototype.fromString = Sk.builtin.biginteger.prototype.bnpFromString;
    Sk.builtin.biginteger.prototype.clamp = Sk.builtin.biginteger.prototype.bnpClamp;
    Sk.builtin.biginteger.prototype.dlShiftTo = Sk.builtin.biginteger.prototype.bnpDLShiftTo;
    Sk.builtin.biginteger.prototype.drShiftTo = Sk.builtin.biginteger.prototype.bnpDRShiftTo;
    Sk.builtin.biginteger.prototype.lShiftTo = Sk.builtin.biginteger.prototype.bnpLShiftTo;
    Sk.builtin.biginteger.prototype.rShiftTo = Sk.builtin.biginteger.prototype.bnpRShiftTo;
    Sk.builtin.biginteger.prototype.subTo = Sk.builtin.biginteger.prototype.bnpSubTo;
    Sk.builtin.biginteger.prototype.multiplyTo = Sk.builtin.biginteger.prototype.bnpMultiplyTo;
    Sk.builtin.biginteger.prototype.squareTo = Sk.builtin.biginteger.prototype.bnpSquareTo;
    Sk.builtin.biginteger.prototype.divRemTo = Sk.builtin.biginteger.prototype.bnpDivRemTo;
    Sk.builtin.biginteger.prototype.invDigit = Sk.builtin.biginteger.prototype.bnpInvDigit;
    Sk.builtin.biginteger.prototype.isEven = Sk.builtin.biginteger.prototype.bnpIsEven;
    Sk.builtin.biginteger.prototype.exp = Sk.builtin.biginteger.prototype.bnpExp;
    Sk.builtin.biginteger.prototype.toString = Sk.builtin.biginteger.prototype.bnToString;
    Sk.builtin.biginteger.prototype.negate = Sk.builtin.biginteger.prototype.bnNegate;
    Sk.builtin.biginteger.prototype.abs = Sk.builtin.biginteger.prototype.bnAbs;
    Sk.builtin.biginteger.prototype.compareTo = Sk.builtin.biginteger.prototype.bnCompareTo;
    Sk.builtin.biginteger.prototype.bitLength = Sk.builtin.biginteger.prototype.bnBitLength;
    Sk.builtin.biginteger.prototype.mod = Sk.builtin.biginteger.prototype.bnMod;
    Sk.builtin.biginteger.prototype.modPowInt = Sk.builtin.biginteger.prototype.bnModPowInt;
    Sk.builtin.biginteger.ZERO = Sk.builtin.biginteger.nbv(0);
    Sk.builtin.biginteger.ONE = Sk.builtin.biginteger.nbv(1);
    Sk.builtin.biginteger.prototype.bnClone = function() {
        var a = Sk.builtin.biginteger.nbi();
        this.copyTo(a);
        return a
    };
    Sk.builtin.biginteger.prototype.bnIntValue = function() {
        if (0 > this.s) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 === this.t) return -1
        } else {
            if (1 == this.t) return this[0];
            if (0 === this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    };
    Sk.builtin.biginteger.prototype.bnByteValue = function() {
        return 0 === this.t ? this.s : this[0] << 24 >> 24
    };
    Sk.builtin.biginteger.prototype.bnShortValue = function() {
        return 0 === this.t ? this.s : this[0] << 16 >> 16
    };
    Sk.builtin.biginteger.prototype.bnpChunkSize = function(a) {
        return Math.floor(Math.LN2 * this.DB / Math.log(a))
    };
    Sk.builtin.biginteger.prototype.bnSigNum = function() {
        return 0 > this.s ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
    };
    Sk.builtin.biginteger.prototype.bnpToRadix = function(a) {
        var b, c, d, e, f;
        null == a && (a = 10);
        if (0 === this.signum() || 2 > a || 36 < a) return "0";
        b = this.chunkSize(a);
        f = Math.pow(a, b);
        b = Sk.builtin.biginteger.nbv(f);
        c = Sk.builtin.biginteger.nbi();
        d = Sk.builtin.biginteger.nbi();
        e = "";
        for (this.divRemTo(b, c, d); 0 < c.signum();) e = (f + d.intValue()).toString(a).substr(1) + e, c.divRemTo(b, c, d);
        return d.intValue().toString(a) + e
    };
    Sk.builtin.biginteger.prototype.bnpFromRadix = function(a, b) {
        var c, d, e, f, g, h, k;
        this.fromInt(0);
        null == b && (b = 10);
        k = this.chunkSize(b);
        e = Math.pow(b, k);
        f = !1;
        for (d = h = g = 0; d < a.length; ++d)
            if (c = Sk.builtin.biginteger.intAt(a, d), 0 > c) {
                if ("-" == a.charAt(d) && 0 === this.signum() && (f = !0), "." == a.charAt(d)) break
            } else h = b * h + c, ++g >= k && (this.dMultiply(e), this.dAddOffset(h, 0), h = g = 0);
        0 < g && (this.dMultiply(Math.pow(b, g)), this.dAddOffset(h, 0));
        f && Sk.builtin.biginteger.ZERO.subTo(this, this)
    };
    Sk.builtin.biginteger.prototype.bnpFromNumber = function(a, b, c) {
        if ("number" == typeof b)
            if (2 > a) this.fromInt(1);
            else
                for (this.fromNumber(a, c), this.testBit(a - 1) || this.bitwiseTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), Sk.builtin.biginteger.op_or, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(b);) this.dAddOffset(2, 0), this.bitLength() > a && this.subTo(Sk.builtin.biginteger.ONE.shiftLeft(a - 1), this);
        this.fromString(a + "")
    };
    Sk.builtin.biginteger.prototype.bnToByteArray = function() {
        var a, b, c, d = this.t,
            e = [];
        e[0] = this.s;
        a = this.DB - d * this.DB % 8;
        c = 0;
        if (0 < d--)
            for (a < this.DB && (b = this[d] >> a) != (this.s & this.DM) >> a && (e[c++] = b | this.s << this.DB - a); 0 <= d;)
                if (8 > a ? (b = (this[d] & (1 << a) - 1) << 8 - a, b |= this[--d] >> (a += this.DB - 8)) : (b = this[d] >> (a -= 8) & 255, 0 >= a && (a += this.DB, --d)), 0 !== (b & 128) && (b |= -256), 0 === c && (this.s & 128) != (b & 128) && ++c, 0 < c || b != this.s) e[c++] = b;
        return e
    };
    Sk.builtin.biginteger.prototype.bnEquals = function(a) {
        return 0 === this.compareTo(a)
    };
    Sk.builtin.biginteger.prototype.bnMin = function(a) {
        return 0 > this.compareTo(a) ? this : a
    };
    Sk.builtin.biginteger.prototype.bnMax = function(a) {
        return 0 < this.compareTo(a) ? this : a
    };
    Sk.builtin.biginteger.prototype.bnpBitwiseTo = function(a, b, c) {
        var d, e, f = Math.min(a.t, this.t);
        for (d = 0; d < f; ++d) c[d] = b(this[d], a[d]);
        if (a.t < this.t) {
            e = a.s & this.DM;
            for (d = f; d < this.t; ++d) c[d] = b(this[d], e);
            c.t = this.t
        } else {
            e = this.s & this.DM;
            for (d = f; d < a.t; ++d) c[d] = b(e, a[d]);
            c.t = a.t
        }
        c.s = b(this.s, a.s);
        c.clamp()
    };
    Sk.builtin.biginteger.op_and = function(a, b) {
        return a & b
    };
    Sk.builtin.biginteger.prototype.bnAnd = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.bitwiseTo(a, Sk.builtin.biginteger.op_and, b);
        return b
    };
    Sk.builtin.biginteger.op_or = function(a, b) {
        return a | b
    };
    Sk.builtin.biginteger.prototype.bnOr = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.bitwiseTo(a, Sk.builtin.biginteger.op_or, b);
        return b
    };
    Sk.builtin.biginteger.op_xor = function(a, b) {
        return a ^ b
    };
    Sk.builtin.biginteger.prototype.bnXor = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.bitwiseTo(a, Sk.builtin.biginteger.op_xor, b);
        return b
    };
    Sk.builtin.biginteger.op_andnot = function(a, b) {
        return a & ~b
    };
    Sk.builtin.biginteger.prototype.bnAndNot = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.bitwiseTo(a, Sk.builtin.biginteger.op_andnot, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnNot = function() {
        var a, b = Sk.builtin.biginteger.nbi();
        for (a = 0; a < this.t; ++a) b[a] = this.DM & ~this[a];
        b.t = this.t;
        b.s = ~this.s;
        return b
    };
    Sk.builtin.biginteger.prototype.bnShiftLeft = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnShiftRight = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
        return b
    };
    Sk.builtin.biginteger.lbit = function(a) {
        var b;
        if (0 === a) return -1;
        b = 0;
        0 === (a & 65535) && (a >>= 16, b += 16);
        0 === (a & 255) && (a >>= 8, b += 8);
        0 === (a & 15) && (a >>= 4, b += 4);
        0 === (a & 3) && (a >>= 2, b += 2);
        0 === (a & 1) && ++b;
        return b
    };
    Sk.builtin.biginteger.prototype.bnGetLowestSetBit = function() {
        var a;
        for (a = 0; a < this.t; ++a)
            if (0 !== this[a]) return a * this.DB + Sk.builtin.biginteger.lbit(this[a]);
        return 0 > this.s ? this.t * this.DB : -1
    };
    Sk.builtin.biginteger.cbit = function(a) {
        for (var b = 0; 0 !== a;) a &= a - 1, ++b;
        return b
    };
    Sk.builtin.biginteger.prototype.bnBitCount = function() {
        var a, b = 0,
            c = this.s & this.DM;
        for (a = 0; a < this.t; ++a) b += Sk.builtin.biginteger.cbit(this[a] ^ c);
        return b
    };
    Sk.builtin.biginteger.prototype.bnTestBit = function(a) {
        var b = Math.floor(a / this.DB);
        return b >= this.t ? 0 !== this.s : 0 !== (this[b] & 1 << a % this.DB)
    };
    Sk.builtin.biginteger.prototype.bnpChangeBit = function(a, b) {
        var c = Sk.builtin.biginteger.ONE.shiftLeft(a);
        this.bitwiseTo(c, b, c);
        return c
    };
    Sk.builtin.biginteger.prototype.bnSetBit = function(a) {
        return this.changeBit(a, Sk.builtin.biginteger.op_or)
    };
    Sk.builtin.biginteger.prototype.bnClearBit = function(a) {
        return this.changeBit(a, Sk.builtin.biginteger.op_andnot)
    };
    Sk.builtin.biginteger.prototype.bnFlipBit = function(a) {
        return this.changeBit(a, Sk.builtin.biginteger.op_xor)
    };
    Sk.builtin.biginteger.prototype.bnpAddTo = function(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e;) d += this[c] + a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            for (d += a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d += a[c], b[c++] = d & this.DM, d >>= this.DB;
            d += a.s
        }
        b.s = 0 > d ? -1 : 0;
        0 < d ? b[c++] = d : -1 > d && (b[c++] = this.DV + d);
        b.t = c;
        b.clamp()
    };
    Sk.builtin.biginteger.prototype.bnAdd = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.addTo(a, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnSubtract = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.subTo(a, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnMultiply = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.multiplyTo(a, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnDivide = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.divRemTo(a, b, null);
        return b
    };
    Sk.builtin.biginteger.prototype.bnRemainder = function(a) {
        var b = Sk.builtin.biginteger.nbi();
        this.divRemTo(a, null, b);
        return b
    };
    Sk.builtin.biginteger.prototype.bnDivideAndRemainder = function(a) {
        var b = Sk.builtin.biginteger.nbi(),
            c = Sk.builtin.biginteger.nbi();
        this.divRemTo(a, b, c);
        return [b, c]
    };
    Sk.builtin.biginteger.prototype.bnpDMultiply = function(a) {
        this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp()
    };
    Sk.builtin.biginteger.prototype.bnpDAddOffset = function(a, b) {
        if (0 !== a) {
            for (; this.t <= b;) this[this.t++] = 0;
            for (this[b] += a; this[b] >= this.DV;) this[b] -= this.DV, ++b >= this.t && (this[this.t++] = 0), ++this[b]
        }
    };
    Sk.builtin.biginteger.NullExp = function() {};
    Sk.builtin.biginteger.prototype.nNop = function(a) {
        return a
    };
    Sk.builtin.biginteger.prototype.nMulTo = function(a, b, c) {
        a.multiplyTo(b, c)
    };
    Sk.builtin.biginteger.prototype.nSqrTo = function(a, b) {
        a.squareTo(b)
    };
    Sk.builtin.biginteger.NullExp.prototype.convert = Sk.builtin.biginteger.prototype.nNop;
    Sk.builtin.biginteger.NullExp.prototype.revert = Sk.builtin.biginteger.prototype.nNop;
    Sk.builtin.biginteger.NullExp.prototype.mulTo = Sk.builtin.biginteger.prototype.nMulTo;
    Sk.builtin.biginteger.NullExp.prototype.sqrTo = Sk.builtin.biginteger.prototype.nSqrTo;
    Sk.builtin.biginteger.prototype.bnPow = function(a) {
        return this.exp(a, new Sk.builtin.biginteger.NullExp)
    };
    Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo = function(a, b, c) {
        var d, e = Math.min(this.t + a.t, b);
        c.s = 0;
        for (c.t = e; 0 < e;) c[--e] = 0;
        for (d = c.t - this.t; e < d; ++e) c[e + this.t] = this.am(0, a[e], c, e, 0, this.t);
        for (d = Math.min(a.t, b); e < d; ++e) this.am(0, a[e], c, e, 0, b - e);
        c.clamp()
    };
    Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo = function(a, b, c) {
        var d;
        --b;
        d = c.t = this.t + a.t - b;
        for (c.s = 0; 0 <= --d;) c[d] = 0;
        for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
        c.clamp();
        c.drShiftTo(1, c)
    };
    Sk.builtin.biginteger.Barrett = function(a) {
        this.r2 = Sk.builtin.biginteger.nbi();
        this.q3 = Sk.builtin.biginteger.nbi();
        Sk.builtin.biginteger.ONE.dlShiftTo(2 * a.t, this.r2);
        this.mu = this.r2.divide(a);
        this.m = a
    };
    Sk.builtin.biginteger.prototype.barrettConvert = function(a) {
        var b;
        if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
        if (0 > a.compareTo(this.m)) return a;
        b = Sk.builtin.biginteger.nbi();
        a.copyTo(b);
        this.reduce(b);
        return b
    };
    Sk.builtin.biginteger.prototype.barrettRevert = function(a) {
        return a
    };
    Sk.builtin.biginteger.prototype.barrettReduce = function(a) {
        a.drShiftTo(this.m.t - 1, this.r2);
        a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp());
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2);) a.dAddOffset(1, this.m.t + 1);
        for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m);) a.subTo(this.m, a)
    };
    Sk.builtin.biginteger.prototype.barrettSqrTo = function(a, b) {
        a.squareTo(b);
        this.reduce(b)
    };
    Sk.builtin.biginteger.prototype.barrettMulTo = function(a, b, c) {
        a.multiplyTo(b, c);
        this.reduce(c)
    };
    Sk.builtin.biginteger.Barrett.prototype.convert = Sk.builtin.biginteger.prototype.barrettConvert;
    Sk.builtin.biginteger.Barrett.prototype.revert = Sk.builtin.biginteger.prototype.barrettRevert;
    Sk.builtin.biginteger.Barrett.prototype.reduce = Sk.builtin.biginteger.prototype.barrettReduce;
    Sk.builtin.biginteger.Barrett.prototype.mulTo = Sk.builtin.biginteger.prototype.barrettMulTo;
    Sk.builtin.biginteger.Barrett.prototype.sqrTo = Sk.builtin.biginteger.prototype.barrettSqrTo;
    Sk.builtin.biginteger.prototype.bnModPow = function(a, b) {
        var c, d, e, f, g, h, k, l, m = a.bitLength(),
            p, n = Sk.builtin.biginteger.nbv(1),
            r;
        if (0 >= m) return n;
        p = 18 > m ? 1 : 48 > m ? 3 : 144 > m ? 4 : 768 > m ? 5 : 6;
        r = 8 > m ? new Sk.builtin.biginteger.Classic(b) : b.isEven() ? new Sk.builtin.biginteger.Barrett(b) : new Sk.builtin.biginteger.Montgomery(b);
        h = [];
        g = 3;
        k = p - 1;
        l = (1 << p) - 1;
        h[1] = r.convert(this);
        if (1 < p)
            for (c = Sk.builtin.biginteger.nbi(), r.sqrTo(h[1], c); g <= l;) h[g] = Sk.builtin.biginteger.nbi(), r.mulTo(c, h[g - 2], h[g]), g += 2;
        c = a.t - 1;
        e = !0;
        f = Sk.builtin.biginteger.nbi();
        for (m = Sk.builtin.biginteger.nbits(a[c]) - 1; 0 <= c;) {
            m >= k ? d = a[c] >> m - k & l : (d = (a[c] & (1 << m + 1) - 1) << k - m, 0 < c && (d |= a[c - 1] >> this.DB + m - k));
            for (g = p; 0 === (d & 1);) d >>= 1, --g;
            0 > (m -= g) && (m += this.DB, --c);
            if (e) h[d].copyTo(n), e = !1;
            else {
                for (; 1 < g;) r.sqrTo(n, f), r.sqrTo(f, n), g -= 2;
                0 < g ? r.sqrTo(n, f) : (g = n, n = f, f = g);
                r.mulTo(f, h[d], n)
            }
            for (; 0 <= c && 0 === (a[c] & 1 << m);) r.sqrTo(n, f), g = n, n = f, f = g, 0 > --m && (m = this.DB - 1, --c)
        }
        return r.revert(n)
    };
    Sk.builtin.biginteger.prototype.bnGCD = function(a) {
        var b, c, d = 0 > this.s ? this.negate() : this.clone();
        a = 0 > a.s ? a.negate() : a.clone();
        0 > d.compareTo(a) && (b = d, d = a, a = b);
        b = d.getLowestSetBit();
        c = a.getLowestSetBit();
        if (0 > c) return d;
        b < c && (c = b);
        0 < c && (d.rShiftTo(c, d), a.rShiftTo(c, a));
        for (; 0 < d.signum();) 0 < (b = d.getLowestSetBit()) && d.rShiftTo(b, d), 0 < (b = a.getLowestSetBit()) && a.rShiftTo(b, a), 0 <= d.compareTo(a) ? (d.subTo(a, d), d.rShiftTo(1, d)) : (a.subTo(d, a), a.rShiftTo(1, a));
        0 < c && a.lShiftTo(c, a);
        return a
    };
    Sk.builtin.biginteger.prototype.bnpModInt = function(a) {
        var b, c, d;
        if (0 >= a) return 0;
        c = this.DV % a;
        d = 0 > this.s ? a - 1 : 0;
        if (0 < this.t)
            if (0 === c) d = this[0] % a;
            else
                for (b = this.t - 1; 0 <= b; --b) d = (c * d + this[b]) % a;
        return d
    };
    Sk.builtin.biginteger.prototype.bnModInverse = function(a) {
        var b, c, d, e, f, g, h = a.isEven();
        if (this.isEven() && h || 0 === a.signum()) return Sk.builtin.biginteger.ZERO;
        f = a.clone();
        g = this.clone();
        b = Sk.builtin.biginteger.nbv(1);
        c = Sk.builtin.biginteger.nbv(0);
        d = Sk.builtin.biginteger.nbv(0);
        for (e = Sk.builtin.biginteger.nbv(1); 0 !== f.signum();) {
            for (; f.isEven();) f.rShiftTo(1, f), h ? (b.isEven() && c.isEven() || (b.addTo(this, b), c.subTo(a, c)), b.rShiftTo(1, b)) : c.isEven() || c.subTo(a, c), c.rShiftTo(1, c);
            for (; g.isEven();) g.rShiftTo(1,
                g), h ? (d.isEven() && e.isEven() || (d.addTo(this, d), e.subTo(a, e)), d.rShiftTo(1, d)) : e.isEven() || e.subTo(a, e), e.rShiftTo(1, e);
            0 <= f.compareTo(g) ? (f.subTo(g, f), h && b.subTo(d, b), c.subTo(e, c)) : (g.subTo(f, g), h && d.subTo(b, d), e.subTo(c, e))
        }
        if (0 !== g.compareTo(Sk.builtin.biginteger.ONE)) return Sk.builtin.biginteger.ZERO;
        if (0 <= e.compareTo(a)) return e.subtract(a);
        if (0 > e.signum()) e.addTo(a, e);
        else return e;
        return 0 > e.signum() ? e.add(a) : e
    };
    Sk.builtin.biginteger.lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
    Sk.builtin.biginteger.lplim = 67108864 / Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1];
    Sk.builtin.biginteger.prototype.bnIsProbablePrime = function(a) {
        var b, c, d, e = this.abs();
        if (1 == e.t && e[0] <= Sk.builtin.biginteger.lowprimes[Sk.builtin.biginteger.lowprimes.length - 1]) {
            for (d = 0; d < Sk.builtin.biginteger.lowprimes.length; ++d)
                if (e[0] == Sk.builtin.biginteger.lowprimes[d]) return !0;
            return !1
        }
        if (e.isEven()) return !1;
        for (d = 1; d < Sk.builtin.biginteger.lowprimes.length;) {
            b = Sk.builtin.biginteger.lowprimes[d];
            for (c = d + 1; c < Sk.builtin.biginteger.lowprimes.length && b < Sk.builtin.biginteger.lplim;) b *= Sk.builtin.biginteger.lowprimes[c++];
            for (b = e.modInt(b); d < c;)
                if (0 === b % Sk.builtin.biginteger.lowprimes[d++]) return !1
        }
        return e.millerRabin(a)
    };
    Sk.builtin.biginteger.prototype.bnpMillerRabin = function(a) {
        var b, c, d, e, f, g = this.subtract(Sk.builtin.biginteger.ONE),
            h = g.getLowestSetBit();
        if (0 >= h) return !1;
        f = g.shiftRight(h);
        a = a + 1 >> 1;
        a > Sk.builtin.biginteger.lowprimes.length && (a = Sk.builtin.biginteger.lowprimes.length);
        e = Sk.builtin.biginteger.nbi();
        for (d = 0; d < a; ++d)
            if (e.fromInt(Sk.builtin.biginteger.lowprimes[d]), c = e.modPow(f, this), 0 !== c.compareTo(Sk.builtin.biginteger.ONE) && 0 !== c.compareTo(g)) {
                for (b = 1; b++ < h && 0 !== c.compareTo(g);)
                    if (c = c.modPowInt(2, this),
                        0 === c.compareTo(Sk.builtin.biginteger.ONE)) return !1;
                if (0 !== c.compareTo(g)) return !1
            }
        return !0
    };
    Sk.builtin.biginteger.prototype.isnegative = function() {
        return 0 > this.s
    };
    Sk.builtin.biginteger.prototype.ispositive = function() {
        return 0 <= this.s
    };
    Sk.builtin.biginteger.prototype.trueCompare = function(a) {
        return 0 <= this.s && 0 > a.s ? 1 : 0 > this.s && 0 <= a.s ? -1 : this.compare(a)
    };
    Sk.builtin.biginteger.prototype.chunkSize = Sk.builtin.biginteger.prototype.bnpChunkSize;
    Sk.builtin.biginteger.prototype.toRadix = Sk.builtin.biginteger.prototype.bnpToRadix;
    Sk.builtin.biginteger.prototype.fromRadix = Sk.builtin.biginteger.prototype.bnpFromRadix;
    Sk.builtin.biginteger.prototype.fromNumber = Sk.builtin.biginteger.prototype.bnpFromNumber;
    Sk.builtin.biginteger.prototype.bitwiseTo = Sk.builtin.biginteger.prototype.bnpBitwiseTo;
    Sk.builtin.biginteger.prototype.changeBit = Sk.builtin.biginteger.prototype.bnpChangeBit;
    Sk.builtin.biginteger.prototype.addTo = Sk.builtin.biginteger.prototype.bnpAddTo;
    Sk.builtin.biginteger.prototype.dMultiply = Sk.builtin.biginteger.prototype.bnpDMultiply;
    Sk.builtin.biginteger.prototype.dAddOffset = Sk.builtin.biginteger.prototype.bnpDAddOffset;
    Sk.builtin.biginteger.prototype.multiplyLowerTo = Sk.builtin.biginteger.prototype.bnpMultiplyLowerTo;
    Sk.builtin.biginteger.prototype.multiplyUpperTo = Sk.builtin.biginteger.prototype.bnpMultiplyUpperTo;
    Sk.builtin.biginteger.prototype.modInt = Sk.builtin.biginteger.prototype.bnpModInt;
    Sk.builtin.biginteger.prototype.millerRabin = Sk.builtin.biginteger.prototype.bnpMillerRabin;
    Sk.builtin.biginteger.prototype.clone = Sk.builtin.biginteger.prototype.bnClone;
    Sk.builtin.biginteger.prototype.intValue = Sk.builtin.biginteger.prototype.bnIntValue;
    Sk.builtin.biginteger.prototype.byteValue = Sk.builtin.biginteger.prototype.bnByteValue;
    Sk.builtin.biginteger.prototype.shortValue = Sk.builtin.biginteger.prototype.bnShortValue;
    Sk.builtin.biginteger.prototype.signum = Sk.builtin.biginteger.prototype.bnSigNum;
    Sk.builtin.biginteger.prototype.toByteArray = Sk.builtin.biginteger.prototype.bnToByteArray;
    Sk.builtin.biginteger.prototype.equals = Sk.builtin.biginteger.prototype.bnEquals;
    Sk.builtin.biginteger.prototype.compare = Sk.builtin.biginteger.prototype.compareTo;
    Sk.builtin.biginteger.prototype.min = Sk.builtin.biginteger.prototype.bnMin;
    Sk.builtin.biginteger.prototype.max = Sk.builtin.biginteger.prototype.bnMax;
    Sk.builtin.biginteger.prototype.and = Sk.builtin.biginteger.prototype.bnAnd;
    Sk.builtin.biginteger.prototype.or = Sk.builtin.biginteger.prototype.bnOr;
    Sk.builtin.biginteger.prototype.xor = Sk.builtin.biginteger.prototype.bnXor;
    Sk.builtin.biginteger.prototype.andNot = Sk.builtin.biginteger.prototype.bnAndNot;
    Sk.builtin.biginteger.prototype.not = Sk.builtin.biginteger.prototype.bnNot;
    Sk.builtin.biginteger.prototype.shiftLeft = Sk.builtin.biginteger.prototype.bnShiftLeft;
    Sk.builtin.biginteger.prototype.shiftRight = Sk.builtin.biginteger.prototype.bnShiftRight;
    Sk.builtin.biginteger.prototype.getLowestSetBit = Sk.builtin.biginteger.prototype.bnGetLowestSetBit;
    Sk.builtin.biginteger.prototype.bitCount = Sk.builtin.biginteger.prototype.bnBitCount;
    Sk.builtin.biginteger.prototype.testBit = Sk.builtin.biginteger.prototype.bnTestBit;
    Sk.builtin.biginteger.prototype.setBit = Sk.builtin.biginteger.prototype.bnSetBit;
    Sk.builtin.biginteger.prototype.clearBit = Sk.builtin.biginteger.prototype.bnClearBit;
    Sk.builtin.biginteger.prototype.flipBit = Sk.builtin.biginteger.prototype.bnFlipBit;
    Sk.builtin.biginteger.prototype.add = Sk.builtin.biginteger.prototype.bnAdd;
    Sk.builtin.biginteger.prototype.subtract = Sk.builtin.biginteger.prototype.bnSubtract;
    Sk.builtin.biginteger.prototype.multiply = Sk.builtin.biginteger.prototype.bnMultiply;
    Sk.builtin.biginteger.prototype.divide = Sk.builtin.biginteger.prototype.bnDivide;
    Sk.builtin.biginteger.prototype.remainder = Sk.builtin.biginteger.prototype.bnRemainder;
    Sk.builtin.biginteger.prototype.divideAndRemainder = Sk.builtin.biginteger.prototype.bnDivideAndRemainder;
    Sk.builtin.biginteger.prototype.modPow = Sk.builtin.biginteger.prototype.bnModPow;
    Sk.builtin.biginteger.prototype.modInverse = Sk.builtin.biginteger.prototype.bnModInverse;
    Sk.builtin.biginteger.prototype.pow = Sk.builtin.biginteger.prototype.bnPow;
    Sk.builtin.biginteger.prototype.gcd = Sk.builtin.biginteger.prototype.bnGCD;
    Sk.builtin.biginteger.prototype.isProbablePrime = Sk.builtin.biginteger.prototype.bnIsProbablePrime;
    Sk.builtin.int_ = function(a, b) {
        var c, d;
        if (!(this instanceof Sk.builtin.int_)) return new Sk.builtin.int_(a, b);
        if (this instanceof Sk.builtin.bool) return this;
        if (a instanceof Sk.builtin.int_ && void 0 === b) return this.v = a.v, this;
        if (void 0 !== b && !Sk.builtin.checkInt(b)) {
            if (Sk.builtin.checkFloat(b)) throw new Sk.builtin.TypeError("integer argument expected, got " + Sk.abstr.typeName(b));
            if (b.__index__) b = Sk.misceval.callsim(b.__index__, b);
            else if (b.__int__) b = Sk.misceval.callsim(b.__int__, b);
            else throw new Sk.builtin.AttributeError(Sk.abstr.typeName(b) +
                " instance has no attribute '__index__' or '__int__'");
        }
        if (a instanceof Sk.builtin.str) {
            b = Sk.builtin.asnum$(b);
            c = Sk.str2number(a.v, b, parseInt, function(a) {
                return -a
            }, "int");
            if (c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$) return new Sk.builtin.lng(a, b);
            this.v = c;
            return this
        }
        if (void 0 !== b) throw new Sk.builtin.TypeError("int() can't convert non-string with explicit base");
        if (void 0 === a || a === Sk.builtin.none) a = 0;
        void 0 !== a && a.tp$getattr && a.tp$getattr("__int__") ? (c = Sk.misceval.callsim(a.tp$getattr("__int__")),
            d = "__int__") : void 0 !== a && a.__int__ ? (c = Sk.misceval.callsim(a.__int__, a), d = "__int__") : void 0 !== a && a.tp$getattr && a.tp$getattr("__trunc__") ? (c = Sk.misceval.callsim(a.tp$getattr("__trunc__")), d = "__trunc__") : void 0 !== a && a.__trunc__ && (c = Sk.misceval.callsim(a.__trunc__, a), d = "__trunc__");
        if (void 0 === c || Sk.builtin.checkInt(c)) void 0 !== c && (a = c);
        else throw new Sk.builtin.TypeError(d + " returned non-Integral (type " + Sk.abstr.typeName(c) + ")");
        if (!Sk.builtin.checkNumber(a)) throw new Sk.builtin.TypeError("int() argument must be a string or a number, not '" +
            Sk.abstr.typeName(a) + "'");
        a = Sk.builtin.asnum$(a);
        if (a > Sk.builtin.int_.threshold$ || a < -Sk.builtin.int_.threshold$) return new Sk.builtin.lng(a); - 1 < a && 1 > a && (a = 0);
        this.v = parseInt(a, b);
        return this
    };
    Sk.abstr.setUpInheritance("int", Sk.builtin.int_, Sk.builtin.numtype);
    Sk.builtin.int_.prototype.nb$int_ = function() {
        return this
    };
    Sk.builtin.int_.prototype.nb$float_ = function() {
        return new Sk.builtin.float_(this.v)
    };
    Sk.builtin.int_.prototype.nb$lng = function() {
        return new Sk.builtin.lng(this.v)
    };
    Sk.builtin.int_.prototype.__trunc__ = new Sk.builtin.func(function(a) {
        return a
    });
    Sk.builtin.int_.prototype.__index__ = new Sk.builtin.func(function(a) {
        return a
    });
    Sk.builtin.int_.prototype.__complex__ = new Sk.builtin.func(function(a) {
        return Sk.builtin.NotImplemented.NotImplemented$
    });
    Sk.builtin.int_.prototype.tp$index = function() {
        return this.v
    };
    Sk.builtin.int_.prototype.tp$hash = function() {
        return new Sk.builtin.int_(this.v)
    };
    Sk.builtin.int_.threshold$ = Math.pow(2, 53) - 1;
    Sk.builtin.int_.prototype.clone = function() {
        return new Sk.builtin.int_(this.v)
    };
    Sk.builtin.int_.prototype.nb$add = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ ? new Sk.builtin.int_(this.v + a.v) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$add(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$add(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_add = function(a) {
        return Sk.builtin.int_.prototype.nb$add.call(this, a)
    };
    Sk.builtin.int_.prototype.nb$subtract = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ ? new Sk.builtin.int_(this.v - a.v) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$subtract(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$subtract(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_subtract = function(a) {
        var b = this.nb$negative();
        return Sk.builtin.int_.prototype.nb$add.call(b, a)
    };
    Sk.builtin.int_.prototype.nb$multiply = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ ? (b = this.v * a.v, b > Sk.builtin.int_.threshold$ || b < -Sk.builtin.int_.threshold$ ? (b = new Sk.builtin.lng(this.v), b.nb$multiply(a)) : new Sk.builtin.int_(b)) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$multiply(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$multiply(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_multiply = function(a) {
        return Sk.builtin.int_.prototype.nb$multiply.call(this, a)
    };
    Sk.builtin.int_.prototype.nb$divide = function(a) {
        var b;
        return Sk.python3 ? (b = new Sk.builtin.float_(this.v), b.nb$divide(a)) : a instanceof Sk.builtin.int_ ? this.nb$floor_divide(a) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$divide(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$divide(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_divide = function(a) {
        return this.nb$reflected_floor_divide(a)
    };
    Sk.builtin.int_.prototype.nb$floor_divide = function(a) {
        var b;
        if (a instanceof Sk.builtin.int_) {
            if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            return new Sk.builtin.int_(Math.floor(this.v / a.v))
        }
        return a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$floor_divide(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$floor_divide(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_floor_divide = function(a) {
        return a instanceof Sk.builtin.int_ ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$remainder = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ ? (b = Sk.abstr.numberBinOp(this, a, "FloorDiv"), b = Sk.abstr.numberBinOp(b, a, "Mult"), b = Sk.abstr.numberBinOp(this, b, "Sub"), b = b.v, 0 > a.v && 0 === b ? b = -0 : 0 === b && -Infinity === Infinity / b && (b = 0), new Sk.builtin.int_(b)) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$remainder(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$remainder(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_remainder = function(a) {
        return a instanceof Sk.builtin.int_ ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$divmod = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$divmod(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.v), b.nb$divmod(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_divmod = function(a) {
        return a instanceof Sk.builtin.int_ ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$power = function(a, b) {
        var c;
        if (a instanceof Sk.builtin.int_ && (void 0 === b || b instanceof Sk.builtin.int_)) {
            c = Math.pow(this.v, a.v);
            c > Sk.builtin.int_.threshold$ || c < -Sk.builtin.int_.threshold$ ? (c = new Sk.builtin.lng(this.v), c = c.nb$power(a, b)) : c = 0 > a.v ? new Sk.builtin.float_(c) : new Sk.builtin.int_(c);
            if (void 0 !== b) {
                if (0 > a.v) throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
                return c.nb$remainder(b)
            }
            return c
        }
        return a instanceof Sk.builtin.lng ?
            (c = new Sk.builtin.lng(this.v), c.nb$power(a)) : a instanceof Sk.builtin.float_ ? (c = new Sk.builtin.float_(this.v), c.nb$power(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_power = function(a, b) {
        return a instanceof Sk.builtin.int_ ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$abs = function() {
        return new Sk.builtin.int_(Math.abs(this.v))
    };
    Sk.builtin.int_.prototype.nb$and = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ && (a = Sk.builtin.asnum$(a), b = this.v & a, void 0 !== b && 0 > b && (b += 4294967296), void 0 !== b) ? new Sk.builtin.int_(b) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$and(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_and = Sk.builtin.int_.prototype.nb$and;
    Sk.builtin.int_.prototype.nb$or = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ && (a = Sk.builtin.asnum$(a), b = this.v | a, void 0 !== b && 0 > b && (b += 4294967296), void 0 !== b) ? new Sk.builtin.int_(b) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$and(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_or = Sk.builtin.int_.prototype.nb$or;
    Sk.builtin.int_.prototype.nb$xor = function(a) {
        var b;
        return a instanceof Sk.builtin.int_ && (a = Sk.builtin.asnum$(a), b = this.v ^ a, void 0 !== b && 0 > b && (b += 4294967296), void 0 !== b) ? new Sk.builtin.int_(b) : a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$xor(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_xor = Sk.builtin.int_.prototype.nb$xor;
    Sk.builtin.int_.prototype.nb$lshift = function(a) {
        var b;
        if (a instanceof Sk.builtin.int_) {
            var c = Sk.builtin.asnum$(a);
            if (void 0 !== c) {
                if (0 > c) throw new Sk.builtin.ValueError("negative shift count");
                b = this.v << c;
                if (b <= this.v) return (new Sk.builtin.lng(this.v)).nb$lshift(a)
            }
            if (void 0 !== b) return new Sk.builtin.int_(b)
        }
        return a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$lshift(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_lshift = function(a) {
        return a instanceof Sk.builtin.int_ ? a.nb$lshift(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$rshift = function(a) {
        var b;
        if (a instanceof Sk.builtin.int_) {
            var c = Sk.builtin.asnum$(a);
            if (void 0 !== c) {
                if (0 > c) throw new Sk.builtin.ValueError("negative shift count");
                b = this.v >> c;
                0 < this.v && 0 > b && (b &= Math.pow(2, 32 - c) - 1)
            }
            if (void 0 !== b) return new Sk.builtin.int_(b)
        }
        return a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.v), b.nb$rshift(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$reflected_rshift = function(a) {
        return a instanceof Sk.builtin.int_ ? a.nb$rshift(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.nb$invert = function() {
        return new Sk.builtin.int_(~this.v)
    };
    Sk.builtin.int_.prototype.nb$inplace_add = Sk.builtin.int_.prototype.nb$add;
    Sk.builtin.int_.prototype.nb$inplace_subtract = Sk.builtin.int_.prototype.nb$subtract;
    Sk.builtin.int_.prototype.nb$inplace_multiply = Sk.builtin.int_.prototype.nb$multiply;
    Sk.builtin.int_.prototype.nb$inplace_divide = Sk.builtin.int_.prototype.nb$divide;
    Sk.builtin.int_.prototype.nb$inplace_remainder = Sk.builtin.int_.prototype.nb$remainder;
    Sk.builtin.int_.prototype.nb$inplace_floor_divide = Sk.builtin.int_.prototype.nb$floor_divide;
    Sk.builtin.int_.prototype.nb$inplace_power = Sk.builtin.int_.prototype.nb$power;
    Sk.builtin.int_.prototype.nb$inplace_and = Sk.builtin.int_.prototype.nb$and;
    Sk.builtin.int_.prototype.nb$inplace_or = Sk.builtin.int_.prototype.nb$or;
    Sk.builtin.int_.prototype.nb$inplace_xor = Sk.builtin.int_.prototype.nb$xor;
    Sk.builtin.int_.prototype.nb$inplace_lshift = Sk.builtin.int_.prototype.nb$lshift;
    Sk.builtin.int_.prototype.nb$inplace_rshift = Sk.builtin.int_.prototype.nb$rshift;
    Sk.builtin.int_.prototype.nb$negative = function() {
        return new Sk.builtin.int_(-this.v)
    };
    Sk.builtin.int_.prototype.nb$positive = function() {
        return this.clone()
    };
    Sk.builtin.int_.prototype.nb$nonzero = function() {
        return 0 !== this.v
    };
    Sk.builtin.int_.prototype.nb$isnegative = function() {
        return 0 > this.v
    };
    Sk.builtin.int_.prototype.nb$ispositive = function() {
        return 0 <= this.v
    };
    Sk.builtin.int_.prototype.numberCompare = function(a) {
        return a instanceof Sk.builtin.int_ ? this.v - a.v : a instanceof Sk.builtin.lng ? -a.longCompare(this) : a instanceof Sk.builtin.float_ ? -a.numberCompare(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$eq = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 == this.numberCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.false$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$ne = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 != this.numberCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.true$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$lt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$le = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$gt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.ob$ge = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.int_.prototype.__round__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__round__", arguments, 1, 2);
        var c, d;
        if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
        void 0 === b && (b = 0);
        d = Sk.builtin.asnum$(a);
        b = Sk.misceval.asIndex(b);
        c = Math.pow(10, b);
        c = Math.round(d * c) / c;
        return new Sk.builtin.int_(c)
    };
    Sk.builtin.int_.prototype.conjugate = new Sk.builtin.func(function(a) {
        return new Sk.builtin.int_(a.v)
    });
    Sk.builtin.int_.prototype.$r = function() {
        return new Sk.builtin.str(this.str$(10, !0))
    };
    Sk.builtin.int_.prototype.tp$str = function() {
        return new Sk.builtin.str(this.str$(10, !0))
    };
    Sk.builtin.int_.prototype.str$ = function(a, b) {
        var c;
        void 0 === b && (b = !0);
        c = b ? this.v : Math.abs(this.v);
        return void 0 === a || 10 === a ? c.toString() : c.toString(a)
    };
    Sk.str2number = function(a, b, c, d, e) {
        var f = a,
            g = !1,
            h, k, l;
        a = a.replace(/^\s+|\s+$/g, "");
        "-" === a.charAt(0) && (g = !0, a = a.substring(1));
        "+" === a.charAt(0) && (a = a.substring(1));
        void 0 === b && (b = 10);
        if ((2 > b || 36 < b) && 0 !== b) throw new Sk.builtin.ValueError(e + "() base must be >= 2 and <= 36");
        if ("0x" === a.substring(0, 2).toLowerCase())
            if (16 === b || 0 === b) a = a.substring(2), b = 16;
            else {
                if (34 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
            }
        else if ("0b" === a.substring(0, 2).toLowerCase())
            if (2 ===
                b || 0 === b) a = a.substring(2), b = 2;
            else {
                if (12 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
            }
        else if ("0o" === a.substring(0, 2).toLowerCase())
            if (8 === b || 0 === b) a = a.substring(2), b = 8;
            else {
                if (25 > b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
            }
        else if ("0" === a.charAt(0)) {
            if ("0" === a) return 0;
            if (8 === b || 0 === b) b = 8
        }
        0 === b && (b = 10);
        if (0 === a.length) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
        for (h = 0; h < a.length; h += 1)
            if (k = a.charCodeAt(h), l = b, 48 <= k && 57 >= k ? l = k - 48 : 65 <= k && 90 >= k ? l = k - 65 + 10 : 97 <= k && 122 >= k && (l = k - 97 + 10), l >= b) throw new Sk.builtin.ValueError("invalid literal for " + e + "() with base " + b + ": '" + f + "'");
        l = c(a, b);
        g && (l = d(l));
        return l
    };
    goog.exportSymbol("Sk.builtin.int_", Sk.builtin.int_);
    Sk.builtin.bool = function(a) {
        Sk.builtin.pyCheckArgs("bool", arguments, 1);
        return Sk.misceval.isTrue(a) ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$
    };
    Sk.abstr.setUpInheritance("bool", Sk.builtin.bool, Sk.builtin.int_);
    Sk.builtin.bool.prototype.$r = function() {
        return this.v ? new Sk.builtin.str("True") : new Sk.builtin.str("False")
    };
    Sk.builtin.bool.prototype.tp$hash = function() {
        return new Sk.builtin.int_(this.v)
    };
    Sk.builtin.bool.prototype.__int__ = new Sk.builtin.func(function(a) {
        a = Sk.builtin.asnum$(a);
        return new Sk.builtin.int_(a)
    });
    Sk.builtin.bool.prototype.__float__ = new Sk.builtin.func(function(a) {
        return new Sk.builtin.float_(Sk.ffi.remapToJs(a))
    });
    goog.exportSymbol("Sk.builtin.bool", Sk.builtin.bool);
    Sk.builtin.float_ = function(a) {
        if (void 0 === a) return new Sk.builtin.float_(0);
        if (!(this instanceof Sk.builtin.float_)) return new Sk.builtin.float_(a);
        if (a instanceof Sk.builtin.str) {
            if (a.v.match(/^-inf$/i)) a = -Infinity;
            else if (a.v.match(/^[+]?inf$/i)) a = Infinity;
            else if (a.v.match(/^[-+]?nan$/i)) a = NaN;
            else {
                if (isNaN(a.v)) throw new Sk.builtin.ValueError("float: Argument: " + a.v + " is not number");
                a = parseFloat(a.v)
            }
            return new Sk.builtin.float_(a)
        }
        if ("number" === typeof a || a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_) return this.v = Sk.builtin.asnum$(a), this;
        if (a instanceof Sk.builtin.bool) return this.v = Sk.builtin.asnum$(a), this;
        if ("boolean" === typeof a) return this.v = a ? 1 : 0, this;
        if ("string" === typeof a) return this.v = parseFloat(a), this;
        var b = Sk.abstr.lookupSpecial(a, "__float__");
        if (null != b) return Sk.misceval.callsim(b, a);
        throw new Sk.builtin.TypeError("float() argument must be a string or a number");
    };
    Sk.abstr.setUpInheritance("float", Sk.builtin.float_, Sk.builtin.numtype);
    Sk.builtin.float_.prototype.nb$int_ = function() {
        var a = this.v,
            a = 0 > a ? Math.ceil(a) : Math.floor(a);
        return new Sk.builtin.int_(a)
    };
    Sk.builtin.float_.prototype.nb$float_ = function() {
        return this
    };
    Sk.builtin.float_.prototype.nb$lng = function() {
        return new Sk.builtin.lng(this.v)
    };
    Sk.builtin.float_.PyFloat_Check = function(a) {
        return void 0 === a ? !1 : Sk.builtin.checkNumber(a) || Sk.builtin.checkFloat(a) || Sk.builtin.issubclass(a.ob$type, Sk.builtin.float_) ? !0 : !1
    };
    Sk.builtin.float_.PyFloat_Check_Exact = function(a) {
        return Sk.builtin.checkFloat(a)
    };
    Sk.builtin.float_.PyFloat_AsDouble = function(a) {
        var b;
        if (a && Sk.builtin.float_.PyFloat_Check(a)) return Sk.ffi.remapToJs(a);
        if (null == a) throw Error("bad argument for internal PyFloat_AsDouble function");
        b = Sk.builtin.type.typeLookup(a.ob$type, "__float__");
        if (null == b) throw new Sk.builtin.TypeError("a float is required");
        a = Sk.misceval.callsim(b, a);
        if (!Sk.builtin.float_.PyFloat_Check(a)) throw new Sk.builtin.TypeError("nb_float should return float object");
        return Sk.ffi.remapToJs(a)
    };
    Sk.builtin.float_.prototype.tp$index = function() {
        return this.v
    };
    Sk.builtin.float_.prototype.tp$hash = function() {
        return this.nb$int_()
    };
    Sk.builtin.float_.prototype.clone = function() {
        return new Sk.builtin.float_(this.v)
    };
    Sk.builtin.float_.prototype.toFixed = function(a) {
        a = Sk.builtin.asnum$(a);
        return this.v.toFixed(a)
    };
    Sk.builtin.float_.prototype.nb$add = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ ? new Sk.builtin.float_(this.v + a.v) : a instanceof Sk.builtin.lng ? new Sk.builtin.float_(this.v + parseFloat(a.str$(10, !0))) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_add = function(a) {
        return Sk.builtin.float_.prototype.nb$add.call(this, a)
    };
    Sk.builtin.float_.prototype.nb$subtract = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ ? new Sk.builtin.float_(this.v - a.v) : a instanceof Sk.builtin.lng ? new Sk.builtin.float_(this.v - parseFloat(a.str$(10, !0))) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_subtract = function(a) {
        var b = this.nb$negative();
        return Sk.builtin.float_.prototype.nb$add.call(b, a)
    };
    Sk.builtin.float_.prototype.nb$multiply = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ ? new Sk.builtin.float_(this.v * a.v) : a instanceof Sk.builtin.lng ? new Sk.builtin.float_(this.v * parseFloat(a.str$(10, !0))) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_multiply = function(a) {
        return Sk.builtin.float_.prototype.nb$multiply.call(this, a)
    };
    Sk.builtin.float_.prototype.nb$divide = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
            if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            return Infinity === this.v ? Infinity === a.v || -Infinity === a.v ? new Sk.builtin.float_(NaN) : a.nb$isnegative() ? new Sk.builtin.float_(-Infinity) : new Sk.builtin.float_(Infinity) : -Infinity === this.v ? Infinity === a.v || -Infinity === a.v ? new Sk.builtin.float_(NaN) : a.nb$isnegative() ? new Sk.builtin.float_(Infinity) : new Sk.builtin.float_(-Infinity) :
                new Sk.builtin.float_(this.v / a.v)
        }
        if (a instanceof Sk.builtin.lng) {
            if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            return Infinity === this.v ? a.nb$isnegative() ? new Sk.builtin.float_(-Infinity) : new Sk.builtin.float_(Infinity) : -Infinity === this.v ? a.nb$isnegative() ? new Sk.builtin.float_(Infinity) : new Sk.builtin.float_(-Infinity) : new Sk.builtin.float_(this.v / parseFloat(a.str$(10, !0)))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_divide = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$floor_divide = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
            if (Infinity === this.v || -Infinity === this.v) return new Sk.builtin.float_(NaN);
            if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            return Infinity === a.v ? this.nb$isnegative() ? new Sk.builtin.float_(-1) : new Sk.builtin.float_(0) : -Infinity === a.v ? this.nb$isnegative() || !this.nb$nonzero() ? new Sk.builtin.float_(0) : new Sk.builtin.float_(-1) : new Sk.builtin.float_(Math.floor(this.v /
                a.v))
        }
        if (a instanceof Sk.builtin.lng) {
            if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            return Infinity === this.v || -Infinity === this.v ? new Sk.builtin.float_(NaN) : new Sk.builtin.float_(Math.floor(this.v / parseFloat(a.str$(10, !0))))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_floor_divide = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? a.nb$floor_divide(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$remainder = function(a) {
        var b, c;
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
            if (0 === a.v) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            if (0 === this.v) return new Sk.builtin.float_(0);
            if (Infinity === a.v) return Infinity === this.v || -Infinity === this.v ? new Sk.builtin.float_(NaN) : this.nb$ispositive() ? new Sk.builtin.float_(this.v) : new Sk.builtin.float_(Infinity);
            c = this.v % a.v;
            0 > this.v ? 0 < a.v && 0 > c && (c += a.v) : 0 > a.v && 0 !== c && (c += a.v);
            0 >
                a.v && 0 === c ? c = -0 : 0 === c && -Infinity === Infinity / c && (c = 0);
            return new Sk.builtin.float_(c)
        }
        if (a instanceof Sk.builtin.lng) {
            if (0 === a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
            if (0 === this.v) return new Sk.builtin.float_(0);
            b = parseFloat(a.str$(10, !0));
            c = this.v % b;
            0 > c ? 0 < b && 0 !== c && (c += b) : 0 > b && 0 !== c && (c += b);
            a.nb$isnegative() && 0 === c ? c = -0 : 0 === c && -Infinity === Infinity / c && (c = 0);
            return new Sk.builtin.float_(c)
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_remainder = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$divmod = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_divmod = function(a) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$power = function(a, b) {
        var c;
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) {
            if (0 > this.v && 0 !== a.v % 1) throw new Sk.builtin.NegativePowerError("cannot raise a negative number to a fractional power");
            if (0 === this.v && 0 > a.v) throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
            c = new Sk.builtin.float_(Math.pow(this.v, a.v));
            if (Infinity === Math.abs(c.v) && Infinity !== Math.abs(this.v) && Infinity !== Math.abs(a.v)) throw new Sk.builtin.OverflowError("Numerical result out of range");
            return c
        }
        if (a instanceof Sk.builtin.lng) {
            if (0 === this.v && 0 > a.longCompare(Sk.builtin.biginteger.ZERO)) throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
            return new Sk.builtin.float_(Math.pow(this.v, parseFloat(a.str$(10, !0))))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$reflected_power = function(a, b) {
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng) a = new Sk.builtin.float_(a);
        return a instanceof Sk.builtin.float_ ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.nb$abs = function() {
        return new Sk.builtin.float_(Math.abs(this.v))
    };
    Sk.builtin.float_.prototype.nb$inplace_add = Sk.builtin.float_.prototype.nb$add;
    Sk.builtin.float_.prototype.nb$inplace_subtract = Sk.builtin.float_.prototype.nb$subtract;
    Sk.builtin.float_.prototype.nb$inplace_multiply = Sk.builtin.float_.prototype.nb$multiply;
    Sk.builtin.float_.prototype.nb$inplace_divide = Sk.builtin.float_.prototype.nb$divide;
    Sk.builtin.float_.prototype.nb$inplace_remainder = Sk.builtin.float_.prototype.nb$remainder;
    Sk.builtin.float_.prototype.nb$inplace_floor_divide = Sk.builtin.float_.prototype.nb$floor_divide;
    Sk.builtin.float_.prototype.nb$inplace_power = Sk.builtin.float_.prototype.nb$power;
    Sk.builtin.float_.prototype.nb$negative = function() {
        return new Sk.builtin.float_(-this.v)
    };
    Sk.builtin.float_.prototype.nb$positive = function() {
        return this.clone()
    };
    Sk.builtin.float_.prototype.nb$nonzero = function() {
        return 0 !== this.v
    };
    Sk.builtin.float_.prototype.nb$isnegative = function() {
        return 0 > this.v
    };
    Sk.builtin.float_.prototype.nb$ispositive = function() {
        return 0 <= this.v
    };
    Sk.builtin.float_.prototype.numberCompare = function(a) {
        var b;
        if (a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_) return Infinity == this.v && Infinity == a.v || -Infinity == this.v && -Infinity == a.v ? 0 : this.v - a.v;
        if (a instanceof Sk.builtin.lng) {
            if (0 === this.v % 1) return b = new Sk.builtin.lng(this.v), a = b.longCompare(a);
            a = this.nb$subtract(a);
            if (a instanceof Sk.builtin.float_) return a.v;
            if (a instanceof Sk.builtin.lng) return a.longCompare(Sk.builtin.biginteger.ZERO)
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$eq = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 == this.numberCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.false$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$ne = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 != this.numberCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.true$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$lt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$le = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$gt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.ob$ge = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.numberCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.float_.prototype.__round__ = function(a, b) {
        Sk.builtin.pyCheckArgs("__round__", arguments, 1, 2);
        var c, d;
        if (void 0 !== b && !Sk.misceval.isIndex(b)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
        void 0 === b && (b = 0);
        d = Sk.builtin.asnum$(a);
        b = Sk.misceval.asIndex(b);
        c = Math.pow(10, b);
        c = Math.round(d * c) / c;
        return new Sk.builtin.float_(c)
    };
    Sk.builtin.float_.prototype.conjugate = new Sk.builtin.func(function(a) {
        return new Sk.builtin.float_(a.v)
    });
    Sk.builtin.float_.prototype.$r = function() {
        return new Sk.builtin.str(this.str$(10, !0))
    };
    Sk.builtin.float_.prototype.tp$str = function() {
        return new Sk.builtin.str(this.str$(10, !0))
    };
    Sk.builtin.float_.prototype.str$ = function(a, b) {
        var c, d, e, f;
        if (isNaN(this.v)) return "nan";
        void 0 === b && (b = !0);
        if (Infinity == this.v) return "inf";
        if (-Infinity == this.v && b) return "-inf";
        if (-Infinity == this.v && !b) return "inf";
        f = b ? this.v : Math.abs(this.v);
        if (void 0 === a || 10 === a) {
            e = f.toPrecision(12);
            c = e.indexOf(".");
            d = f.toString().slice(0, c);
            c = f.toString().slice(c);
            d.match(/^-?0$/) && c.slice(1).match(/^0{4,}/) && (e = 12 > e.length ? f.toExponential() : f.toExponential(11));
            if (0 > e.indexOf("e") && 0 <= e.indexOf(".")) {
                for (;
                    "0" ==
                    e.charAt(e.length - 1);) e = e.substring(0, e.length - 1);
                "." == e.charAt(e.length - 1) && (e += "0")
            }
            e = e.replace(/\.0+e/, "e", "i");
            e = e.replace(/(e[-+])([1-9])$/, "$10$2");
            e = e.replace(/0+(e.*)/, "$1")
        } else e = f.toString(a);
        0 === this.v && -Infinity === 1 / this.v && (e = "-" + e);
        0 > e.indexOf(".") && (0 > e.indexOf("E") && 0 > e.indexOf("e")) && (e += ".0");
        return e
    };
    var deprecatedError = new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated.");
    Sk.builtin.nmber = function(a, b) {
        throw new Sk.builtin.ExternalError("Sk.builtin.nmber is deprecated. Please replace with Sk.builtin.int_, Sk.builtin.float_, or Sk.builtin.assk$.");
    };
    Sk.builtin.nmber.prototype.tp$index = function() {
        return this.v
    };
    Sk.builtin.nmber.prototype.tp$hash = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.fromInt$ = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.clone = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.toFixed = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$add = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$subtract = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$multiply = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$divide = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$floor_divide = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$remainder = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$divmod = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$power = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$and = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$or = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$xor = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$lshift = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$rshift = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$inplace_add = Sk.builtin.nmber.prototype.nb$add;
    Sk.builtin.nmber.prototype.nb$inplace_subtract = Sk.builtin.nmber.prototype.nb$subtract;
    Sk.builtin.nmber.prototype.nb$inplace_multiply = Sk.builtin.nmber.prototype.nb$multiply;
    Sk.builtin.nmber.prototype.nb$inplace_divide = Sk.builtin.nmber.prototype.nb$divide;
    Sk.builtin.nmber.prototype.nb$inplace_remainder = Sk.builtin.nmber.prototype.nb$remainder;
    Sk.builtin.nmber.prototype.nb$inplace_floor_divide = Sk.builtin.nmber.prototype.nb$floor_divide;
    Sk.builtin.nmber.prototype.nb$inplace_power = Sk.builtin.nmber.prototype.nb$power;
    Sk.builtin.nmber.prototype.nb$inplace_and = Sk.builtin.nmber.prototype.nb$and;
    Sk.builtin.nmber.prototype.nb$inplace_or = Sk.builtin.nmber.prototype.nb$or;
    Sk.builtin.nmber.prototype.nb$inplace_xor = Sk.builtin.nmber.prototype.nb$xor;
    Sk.builtin.nmber.prototype.nb$inplace_lshift = Sk.builtin.nmber.prototype.nb$lshift;
    Sk.builtin.nmber.prototype.nb$inplace_rshift = Sk.builtin.nmber.prototype.nb$rshift;
    Sk.builtin.nmber.prototype.nb$negative = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$positive = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$nonzero = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$isnegative = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.nb$ispositive = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.numberCompare = function(a) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__eq__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__ne__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__lt__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__le__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__gt__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__ge__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.__round__ = function(a, b) {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.$r = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.tp$str = function() {
        throw deprecatedError;
    };
    Sk.builtin.nmber.prototype.str$ = function(a, b) {
        throw deprecatedError;
    };
    goog.exportSymbol("Sk.builtin.nmber", Sk.builtin.nmber);
    Sk.builtin.lng = function(a, b) {
        b = Sk.builtin.asnum$(b);
        if (!(this instanceof Sk.builtin.lng)) return new Sk.builtin.lng(a, b);
        if (void 0 === a) return this.biginteger = new Sk.builtin.biginteger(0), this;
        if (a instanceof Sk.builtin.lng) return this.biginteger = a.biginteger.clone(), this;
        if (a instanceof Sk.builtin.biginteger) return this.biginteger = a, this;
        if (a instanceof String || "string" === typeof a) return Sk.longFromStr(a, b);
        if (a instanceof Sk.builtin.str) return Sk.longFromStr(a.v, b);
        if (void 0 !== a && !Sk.builtin.checkString(a) &&
            !Sk.builtin.checkNumber(a))
            if (!0 === a) a = 1;
            else if (!1 === a) a = 0;
        else throw new Sk.builtin.TypeError("long() argument must be a string or a number, not '" + Sk.abstr.typeName(a) + "'");
        a = Sk.builtin.asnum$nofloat(a);
        this.biginteger = new Sk.builtin.biginteger(a);
        return this
    };
    Sk.abstr.setUpInheritance("long", Sk.builtin.lng, Sk.builtin.numtype);
    Sk.builtin.lng.prototype.tp$index = function() {
        return parseInt(this.str$(10, !0), 10)
    };
    Sk.builtin.lng.prototype.tp$hash = function() {
        return new Sk.builtin.int_(this.tp$index())
    };
    Sk.builtin.lng.prototype.nb$int_ = function() {
        return this.cantBeInt() ? new Sk.builtin.lng(this) : new Sk.builtin.int_(this.toInt$())
    };
    Sk.builtin.lng.prototype.__index__ = new Sk.builtin.func(function(a) {
        return a.nb$int_(a)
    });
    Sk.builtin.lng.prototype.nb$lng_ = function() {
        return this
    };
    Sk.builtin.lng.prototype.nb$float_ = function() {
        return new Sk.builtin.float_(Sk.ffi.remapToJs(this))
    };
    Sk.builtin.lng.MAX_INT$ = new Sk.builtin.lng(Sk.builtin.int_.threshold$);
    Sk.builtin.lng.MIN_INT$ = new Sk.builtin.lng(-Sk.builtin.int_.threshold$);
    Sk.builtin.lng.prototype.cantBeInt = function() {
        return 0 < this.longCompare(Sk.builtin.lng.MAX_INT$) || 0 > this.longCompare(Sk.builtin.lng.MIN_INT$)
    };
    Sk.builtin.lng.fromInt$ = function(a) {
        return new Sk.builtin.lng(a)
    };
    Sk.longFromStr = function(a, b) {
        var c = Sk.str2number(a, b, function(a, b) {
            return 10 === b ? new Sk.builtin.biginteger(a) : new Sk.builtin.biginteger(a, b)
        }, function(a) {
            return a.negate()
        }, "long");
        return new Sk.builtin.lng(c)
    };
    goog.exportSymbol("Sk.longFromStr", Sk.longFromStr);
    Sk.builtin.lng.prototype.toInt$ = function() {
        return this.biginteger.intValue()
    };
    Sk.builtin.lng.prototype.clone = function() {
        return new Sk.builtin.lng(this)
    };
    Sk.builtin.lng.prototype.conjugate = new Sk.builtin.func(function(a) {
        return a.clone()
    });
    Sk.builtin.lng.prototype.nb$add = function(a) {
        var b;
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$add(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.add(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.add(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_add = function(a) {
        return Sk.builtin.lng.prototype.nb$add.call(this, a)
    };
    Sk.builtin.lng.prototype.nb$inplace_add = Sk.builtin.lng.prototype.nb$add;
    Sk.builtin.lng.prototype.nb$subtract = function(a) {
        var b;
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$subtract(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.subtract(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.subtract(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_subtract = function(a) {
        var b = this.nb$negative();
        return Sk.builtin.lng.prototype.nb$add.call(b, a)
    };
    Sk.builtin.lng.prototype.nb$inplace_subtract = Sk.builtin.lng.prototype.nb$subtract;
    Sk.builtin.lng.prototype.nb$multiply = function(a) {
        var b;
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$multiply(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.multiply(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.multiply(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_multiply = function(a) {
        return Sk.builtin.lng.prototype.nb$multiply.call(this, a)
    };
    Sk.builtin.lng.prototype.nb$inplace_multiply = Sk.builtin.lng.prototype.nb$multiply;
    Sk.builtin.lng.prototype.nb$divide = function(a) {
        var b, c;
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$divide(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        if (a instanceof Sk.builtin.lng) {
            b = this.nb$isnegative();
            c = a.nb$isnegative();
            if (b && !c || c && !b) {
                a = this.biginteger.divideAndRemainder(a.biginteger);
                if (0 === a[1].trueCompare(Sk.builtin.biginteger.ZERO)) return new Sk.builtin.lng(a[0]);
                a = a[0].subtract(Sk.builtin.biginteger.ONE);
                return new Sk.builtin.lng(a)
            }
            return new Sk.builtin.lng(this.biginteger.divide(a.biginteger))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_divide = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$floor_divide = function(a) {
        var b;
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$floor_divide(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$divide(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$divmod = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_divmod = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.tuple([a.nb$floor_divide(this), a.nb$remainder(this)]) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$inplace_divide = Sk.builtin.lng.prototype.nb$divide;
    Sk.builtin.lng.prototype.nb$floor_divide = Sk.builtin.lng.prototype.nb$divide;
    Sk.builtin.lng.prototype.nb$reflected_floor_divide = Sk.builtin.lng.prototype.nb$reflected_divide;
    Sk.builtin.lng.prototype.nb$inplace_floor_divide = Sk.builtin.lng.prototype.nb$floor_divide;
    Sk.builtin.lng.prototype.nb$remainder = function(a) {
        var b;
        if (0 === this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO)) return a instanceof Sk.builtin.float_ ? new Sk.builtin.float_(0) : new Sk.builtin.lng(0);
        if (a instanceof Sk.builtin.float_) return b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$remainder(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? (b = new Sk.builtin.lng(this.biginteger.remainder(a.biginteger)), this.nb$isnegative() ? a.nb$ispositive() &&
            b.nb$nonzero() && (b = b.nb$add(a).nb$remainder(a)) : a.nb$isnegative() && b.nb$nonzero() && (b = b.nb$add(a)), b) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_remainder = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$remainder(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$inplace_remainder = Sk.builtin.lng.prototype.nb$remainder;
    Sk.builtin.lng.prototype.nb$divmod = function(a) {
        var b;
        a === Sk.builtin.bool.true$ && (a = new Sk.builtin.lng(1));
        a === Sk.builtin.bool.false$ && (a = new Sk.builtin.lng(0));
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.tuple([this.nb$floor_divide(a), this.nb$remainder(a)]) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this.str$(10, !0)), b.nb$divmod(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$power = function(a, b) {
        var c;
        if (void 0 !== b) return a = new Sk.builtin.biginteger(Sk.builtin.asnum$(a)), b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b)), new Sk.builtin.lng(this.biginteger.modPowInt(a, b));
        if (a instanceof Sk.builtin.float_ || a instanceof Sk.builtin.int_ && 0 > a.v) return c = new Sk.builtin.float_(this.str$(10, !0)), c.nb$power(a);
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? void 0 !== b ? (a = new Sk.builtin.biginteger(Sk.builtin.asnum$(a)),
            b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b)), new Sk.builtin.lng(this.biginteger.modPowInt(a, b))) : a.nb$isnegative() ? (c = new Sk.builtin.float_(this.str$(10, !0)), c.nb$power(a)) : new Sk.builtin.lng(this.biginteger.pow(a.biginteger)) : a instanceof Sk.builtin.biginteger ? void 0 !== b ? (b = new Sk.builtin.biginteger(Sk.builtin.asnum$(b)), new Sk.builtin.lng(this.biginteger.modPowInt(a, b))) : a.isnegative() ? (c = new Sk.builtin.float_(this.str$(10, !0)), c.nb$power(a)) : new Sk.builtin.lng(this.biginteger.pow(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_power = function(a, b) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$power(this, b) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$inplace_power = Sk.builtin.lng.prototype.nb$power;
    Sk.builtin.lng.prototype.nb$abs = function() {
        return new Sk.builtin.lng(this.biginteger.bnAbs())
    };
    Sk.builtin.lng.prototype.nb$lshift = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        if (a instanceof Sk.builtin.lng) {
            if (0 > a.biginteger.signum()) throw new Sk.builtin.ValueError("negative shift count");
            return new Sk.builtin.lng(this.biginteger.shiftLeft(a.biginteger))
        }
        if (a instanceof Sk.builtin.biginteger) {
            if (0 > a.signum()) throw new Sk.builtin.ValueError("negative shift count");
            return new Sk.builtin.lng(this.biginteger.shiftLeft(a))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_lshift = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$lshift(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$inplace_lshift = Sk.builtin.lng.prototype.nb$lshift;
    Sk.builtin.lng.prototype.nb$rshift = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        if (a instanceof Sk.builtin.lng) {
            if (0 > a.biginteger.signum()) throw new Sk.builtin.ValueError("negative shift count");
            return new Sk.builtin.lng(this.biginteger.shiftRight(a.biginteger))
        }
        if (a instanceof Sk.builtin.biginteger) {
            if (0 > a.signum()) throw new Sk.builtin.ValueError("negative shift count");
            return new Sk.builtin.lng(this.biginteger.shiftRight(a))
        }
        return Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_rshift = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? a.nb$rshift(this) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$inplace_rshift = Sk.builtin.lng.prototype.nb$rshift;
    Sk.builtin.lng.prototype.nb$and = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.and(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.and(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_and = Sk.builtin.lng.prototype.nb$and;
    Sk.builtin.lng.prototype.nb$inplace_and = Sk.builtin.lng.prototype.nb$and;
    Sk.builtin.lng.prototype.nb$or = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.or(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.or(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_or = Sk.builtin.lng.prototype.nb$or;
    Sk.builtin.lng.prototype.nb$inplace_or = Sk.builtin.lng.prototype.nb$or;
    Sk.builtin.lng.prototype.nb$xor = function(a) {
        a instanceof Sk.builtin.int_ && (a = new Sk.builtin.lng(a.v));
        return a instanceof Sk.builtin.lng ? new Sk.builtin.lng(this.biginteger.xor(a.biginteger)) : a instanceof Sk.builtin.biginteger ? new Sk.builtin.lng(this.biginteger.xor(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.nb$reflected_xor = Sk.builtin.lng.prototype.nb$xor;
    Sk.builtin.lng.prototype.nb$inplace_xor = Sk.builtin.lng.prototype.nb$xor;
    Sk.builtin.lng.prototype.nb$negative = function() {
        return new Sk.builtin.lng(this.biginteger.negate())
    };
    Sk.builtin.lng.prototype.nb$invert = function() {
        return new Sk.builtin.lng(this.biginteger.not())
    };
    Sk.builtin.lng.prototype.nb$positive = function() {
        return this.clone()
    };
    Sk.builtin.lng.prototype.nb$nonzero = function() {
        return 0 !== this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO)
    };
    Sk.builtin.lng.prototype.nb$isnegative = function() {
        return this.biginteger.isnegative()
    };
    Sk.builtin.lng.prototype.nb$ispositive = function() {
        return !this.biginteger.isnegative()
    };
    Sk.builtin.lng.prototype.longCompare = function(a) {
        var b;
        "number" === typeof a && (a = new Sk.builtin.lng(a));
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.float_ && 0 === a.v % 1 ? (a = new Sk.builtin.lng(a.v), this.longCompare(a)) : a instanceof Sk.builtin.float_ ? (b = new Sk.builtin.float_(this), b.numberCompare(a)) : a instanceof Sk.builtin.lng ? this.biginteger.subtract(a.biginteger) : a instanceof Sk.builtin.biginteger ? this.biginteger.subtract(a) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$eq = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 == this.longCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.false$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$ne = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 != this.longCompare(a)) : a instanceof Sk.builtin.none ? Sk.builtin.bool.true$ : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$lt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 > this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$le = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 >= this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$gt = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 < this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.ob$ge = function(a) {
        return a instanceof Sk.builtin.int_ || a instanceof Sk.builtin.lng || a instanceof Sk.builtin.float_ ? new Sk.builtin.bool(0 <= this.longCompare(a)) : Sk.builtin.NotImplemented.NotImplemented$
    };
    Sk.builtin.lng.prototype.$r = function() {
        return new Sk.builtin.str(this.str$(10, !0) + "L")
    };
    Sk.builtin.lng.prototype.tp$str = function() {
        return new Sk.builtin.str(this.str$(10, !0))
    };
    Sk.builtin.lng.prototype.str$ = function(a, b) {
        var c;
        void 0 === b && (b = !0);
        c = b ? this.biginteger : this.biginteger.abs();
        return void 0 === a || 10 === a ? c.toString() : c.toString(a)
    };
    Math.hypot = Math.hypot || function() {
        for (var a = 0, b = arguments.length, c = 0; c < b; c++) {
            if (Infinity === arguments[c] || -Infinity === arguments[c]) return Infinity;
            a += arguments[c] * arguments[c]
        }
        return Math.sqrt(a)
    };
    Sk.builtin.complex = function(a, b) {
        Sk.builtin.pyCheckArgs("complex", arguments, 0, 2);
        var c, d, e, f, g, h = !1,
            k = !1;
        if (!(this instanceof Sk.builtin.complex)) return new Sk.builtin.complex(a, b);
        c = null == a ? Sk.builtin.bool.false$ : a;
        d = b;
        if (c instanceof Sk.builtin.complex && null == d) return a;
        if (null != c && Sk.builtin.checkString(c)) {
            if (null != d) throw new Sk.builtin.TypeError("complex() can't take second arg if first is a string");
            return Sk.builtin.complex.complex_subtype_from_string(c)
        }
        if (null != d && Sk.builtin.checkString(d)) throw new Sk.builtin.TypeError("complex() second arg can't be a string");
        e = Sk.builtin.complex.try_complex_special_method(c);
        if (null != e && e !== Sk.builtin.NotImplemented.NotImplemented$) {
            if (!Sk.builtin.checkComplex(e)) throw new Sk.builtin.TypeError("__complex__ should return a complex object");
            c = e
        }
        e = Sk.builtin.asnum$(c);
        null != d && (f = Sk.builtin.asnum$(d));
        var l = function(a) {
            if (Sk.builtin.checkNumber(a) || void 0 !== Sk.builtin.type.typeLookup(a.ob$type, "__float__")) return !0
        };
        if (null == e || !l(c) && !Sk.builtin.checkComplex(c) || null != d && (null == f || !l(d) && !Sk.builtin.checkComplex(d))) throw new Sk.builtin.TypeError("complex() argument must be a string or number");
        if (Sk.builtin.complex._complex_check(c)) f = c.real.v, c = c.imag.v, h = !0;
        else {
            e = Sk.builtin.float_.PyFloat_AsDouble(c);
            if (null == e) return null;
            f = e;
            c = 0
        }
        if (null == d) e = 0;
        else if (Sk.builtin.complex._complex_check(d)) e = d.real.v, g = d.imag.v, k = !0;
        else {
            e = Sk.builtin.float_.PyFloat_AsDouble(d);
            if (null == e) return null;
            g = 0
        }!0 === k && (f -= g);
        !0 === h && (e += c);
        0 === f && (0 > e || Sk.builtin.complex._isNegativeZero(e)) && (f = -0);
        this.real = new Sk.builtin.float_(f);
        this.imag = new Sk.builtin.float_(e);
        this.__class__ = Sk.builtin.complex;
        return this
    };
    Sk.abstr.setUpInheritance("complex", Sk.builtin.complex, Sk.builtin.numtype);
    Sk.builtin.complex.prototype.nb$int_ = function() {
        throw new Sk.builtin.TypeError("can't convert complex to int");
    };
    Sk.builtin.complex.prototype.nb$float_ = function() {
        throw new Sk.builtin.TypeError("can't convert complex to float");
    };
    Sk.builtin.complex.prototype.nb$lng = function() {
        throw new Sk.builtin.TypeError("can't convert complex to long");
    };
    Sk.builtin.complex.prototype.__doc__ = new Sk.builtin.str("complex(real[, imag]) -> complex number\n\nCreate a complex number from a real part and an optional imaginary part.\nThis is equivalent to (real + imag*1j) where imag defaults to 0.");
    Sk.builtin.complex._isNegativeZero = function(a) {
        return 0 !== a ? !1 : -Infinity === 1 / a
    };
    Sk.builtin.complex.try_complex_special_method = function(a) {
        new Sk.builtin.str("__complex__");
        var b;
        if (null == a) return null;
        b = Sk.abstr.lookupSpecial(a, "__complex__");
        return null != b ? a = Sk.misceval.callsim(b, a) : null
    };
    Sk.builtin.complex.check_number_or_complex = function(a) {
        if (!Sk.builtin.checkNumber(a) && "complex" !== a.tp$name) throw new Sk.builtin.TypeError("unsupported operand type(s) for +: 'complex' and '" + Sk.abstr.typeName(a) + "'");
        Sk.builtin.checkNumber(a) && (a = new Sk.builtin.complex(a));
        return a
    };
    Sk.builtin.complex.complex_subtype_from_string = function(a) {
        var b, c, d = 0,
            e = 0,
            f = !1,
            g;
        if (Sk.builtin.checkString(a)) a = Sk.ffi.remapToJs(a);
        else if ("string" !== typeof a) throw new TypeError("provided unsupported string-alike argument");
        if (-1 !== a.indexOf("\x00") || 0 === a.length || "" === a) throw new Sk.builtin.ValueError("complex() arg is a malformed string");
        b = 0;
        a = a.replace(/inf|infinity/gi, "Infinity");
        for (a = a.replace(/nan/gi, "NaN");
            " " === a[b];) b++;
        if ("(" === a[b])
            for (f = !0, b++;
                " " === a[b];) b++;
        var h = /^(?:[+-]?(?:(?:(?:\d*\.\d+)|(?:\d+\.?))(?:[eE][+-]?\d+)?|NaN|Infinity))/;
        c = a.substr(b);
        g = c.match(h);
        if (null !== g)
            if (b += g[0].length, "j" === a[b] || "J" === a[b]) e = parseFloat(g[0]), b++;
            else if ("+" === a[b] || "-" === a[b]) {
            d = parseFloat(g[0]);
            g = a.substr(b).match(h);
            null !== g ? (e = parseFloat(g[0]), b += g[0].length) : (e = "+" === a[b] ? 1 : -1, b++);
            if ("j" !== a[b] && "J" !== a[b]) throw new Sk.builtin.ValueError("complex() arg is malformed string");
            b++
        } else d = parseFloat(g[0]);
        else g = g = c.match(/^([+-]?[jJ])/), null !== g && (e = 1 === g[0].length ? 1 : "+" === g[0][0] ? 1 : -1, b += g[0].length);
        for (;
            " " === a[b];) b++;
        if (f) {
            if (")" !==
                a[b]) throw new Sk.builtin.ValueError("complex() arg is malformed string");
            for (b++;
                " " === a[b];) b++
        }
        if (a.length !== b) throw new Sk.builtin.ValueError("complex() arg is malformed string");
        return new Sk.builtin.complex(new Sk.builtin.float_(d), new Sk.builtin.float_(e))
    };
    Sk.builtin.complex.prototype.tp$hash = function() {
        return new Sk.builtin.int_(1000003 * this.tp$getattr("imag").v + this.tp$getattr("real").v)
    };
    Sk.builtin.complex.prototype.nb$add = function(a) {
        var b;
        a = Sk.builtin.complex.check_number_or_complex(a);
        b = this.tp$getattr("real").v + a.tp$getattr("real").v;
        a = this.tp$getattr("imag").v + a.tp$getattr("imag").v;
        return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(a))
    };
    Sk.builtin.complex._c_diff = function(a, b) {
        var c, d;
        c = a.real.nb$subtract.call(a.real, b.real);
        d = a.imag.nb$subtract.call(a.imag, b.imag);
        return new Sk.builtin.complex(c, d)
    };
    Sk.builtin.complex.prototype.nb$subtract = function(a) {
        var b;
        b = Sk.builtin.complex.check_number_or_complex(this);
        a = Sk.builtin.complex.check_number_or_complex(a);
        return Sk.builtin.complex._c_diff(b, a)
    };
    Sk.builtin.complex.prototype.nb$multiply = function(a) {
        var b;
        b = Sk.builtin.complex.check_number_or_complex(a);
        a = this.real.v * b.real.v - this.imag.v * b.imag.v;
        b = this.real.v * b.imag.v + this.imag.v * b.real.v;
        return new Sk.builtin.complex(new Sk.builtin.float_(a), new Sk.builtin.float_(b))
    };
    Sk.builtin.complex.prototype.nb$divide = function(a) {
        var b;
        a = Sk.builtin.complex.check_number_or_complex(a);
        var c, d;
        b = a.real.v;
        var e = a.imag.v;
        a = this.real.v;
        var f = this.imag.v;
        c = Math.abs(b);
        d = Math.abs(e);
        if (c >= d) {
            if (0 === c) throw new Sk.builtin.ZeroDivisionError("complex division by zero");
            c = e / b;
            d = b + e * c;
            b = (a + f * c) / d;
            a = (f - a * c) / d
        } else d >= c ? (c = b / e, d = b * c + e, goog.asserts.assert(0 !== e), b = (a * c + f) / d, a = (f * c - a) / d) : a = b = NaN;
        return new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(a))
    };
    Sk.builtin.complex.prototype.nb$floor_divide = function(a) {
        throw new Sk.builtin.TypeError("can't take floor of complex number.");
    };
    Sk.builtin.complex.prototype.nb$remainder = function(a) {
        throw new Sk.builtin.TypeError("can't mod complex numbers.");
    };
    Sk.builtin.complex.prototype.nb$power = function(a, b) {
        var c, d;
        if (null != b && !Sk.builtin.checkNone(b)) throw new Sk.builtin.ValueError("complex modulo");
        d = Sk.builtin.complex.check_number_or_complex(a);
        c = d.real.v | 0;
        return 0 === d.imag.v && d.real.v === c ? Sk.builtin.complex.c_powi(this, c) : Sk.builtin.complex.c_pow(this, d)
    };
    Sk.builtin.complex.c_pow = function(a, b) {
        var c, d, e, f;
        f = b.real.v;
        var g = b.imag.v;
        e = a.real.v;
        var h = a.imag.v;
        if (0 === f && 0 === g) c = 1, d = 0;
        else if (0 === e && 0 === h) {
            if (0 !== g || 0 > f) throw new Sk.builtin.ZeroDivisionError("complex division by zero");
            d = c = 0
        } else c = Math.hypot(e, h), d = Math.pow(c, f), e = Math.atan2(h, e), f *= e, 0 !== g && (d /= Math.exp(e * g), f += g * Math.log(c)), c = d * Math.cos(f), d *= Math.sin(f);
        return new Sk.builtin.complex(new Sk.builtin.float_(c), new Sk.builtin.float_(d))
    };
    Sk.builtin.complex.c_powi = function(a, b) {
        var c;
        return 100 < b || -100 > b ? (c = new Sk.builtin.complex(new Sk.builtin.float_(b), new Sk.builtin.float_(0)), Sk.builtin.complex.c_pow(a, c)) : 0 < b ? Sk.builtin.complex.c_powu(a, b) : (new Sk.builtin.complex(new Sk.builtin.float_(1), new Sk.builtin.float_(0))).nb$divide(Sk.builtin.complex.c_powu(a, -b))
    };
    Sk.builtin.complex.c_powu = function(a, b) {
        var c, d, e = 1;
        c = new Sk.builtin.complex(new Sk.builtin.float_(1), new Sk.builtin.float_(0));
        for (d = a; 0 < e && b >= e;) b & e && (c = c.nb$multiply(d)), e <<= 1, d = d.nb$multiply(d);
        return c
    };
    Sk.builtin.complex.prototype.nb$inplace_add = Sk.builtin.complex.prototype.nb$add;
    Sk.builtin.complex.prototype.nb$inplace_subtract = Sk.builtin.complex.prototype.nb$subtract;
    Sk.builtin.complex.prototype.nb$inplace_multiply = Sk.builtin.complex.prototype.nb$multiply;
    Sk.builtin.complex.prototype.nb$inplace_divide = Sk.builtin.complex.prototype.nb$divide;
    Sk.builtin.complex.prototype.nb$inplace_remainder = Sk.builtin.complex.prototype.nb$remainder;
    Sk.builtin.complex.prototype.nb$inplace_floor_divide = Sk.builtin.complex.prototype.nb$floor_divide;
    Sk.builtin.complex.prototype.nb$inplace_power = Sk.builtin.complex.prototype.nb$power;
    Sk.builtin.complex.prototype.nb$negative = function() {
        var a, b;
        b = this.imag.v;
        a = -this.real.v;
        b = -b;
        return new Sk.builtin.complex(new Sk.builtin.float_(a), new Sk.builtin.float_(b))
    };
    Sk.builtin.complex.prototype.nb$positive = function() {
        return Sk.builtin.complex.check_number_or_complex(this)
    };
    Sk.builtin.complex._complex_check = function(a) {
        return void 0 === a ? !1 : a instanceof Sk.builtin.complex || a.tp$name && "complex" === a.tp$name || Sk.builtin.issubclass(new Sk.builtin.type(a), Sk.builtin.complex) ? !0 : !1
    };
    Sk.builtin.complex.prototype.tp$richcompare = function(a, b) {
        var c, d;
        if ("Eq" !== b && "NotEq" !== b) {
            if (Sk.builtin.checkNumber(a) || Sk.builtin.complex._complex_check(a)) throw new Sk.builtin.TypeError("no ordering relation is defined for complex numbers");
            return Sk.builtin.NotImplemented.NotImplemented$
        }
        d = Sk.builtin.complex.check_number_or_complex(this);
        c = d.tp$getattr("real").v;
        d = d.tp$getattr("imag").v;
        if (Sk.builtin.checkInt(a)) {
            if (0 === d) return c = Sk.misceval.richCompareBool(new Sk.builtin.float_(c), a, b), c = new Sk.builtin.bool(c);
            c = !1
        } else if (Sk.builtin.checkFloat(a)) c = c === Sk.builtin.float_.PyFloat_AsDouble(a) && 0 === d;
        else if (Sk.builtin.complex._complex_check(a)) {
            var e = a.tp$getattr("real").v,
                f = a.tp$getattr("imag").v;
            c = c === e && d === f
        } else return Sk.builtin.NotImplemented.NotImplemented$;
        "NotEq" === b && (c = !c);
        return c = new Sk.builtin.bool(c)
    };
    Sk.builtin.complex.prototype.__eq__ = function(a, b) {
        return Sk.builtin.complex.prototype.tp$richcompare.call(a, b, "Eq")
    };
    Sk.builtin.complex.prototype.__ne__ = function(a, b) {
        return Sk.builtin.complex.prototype.tp$richcompare.call(a, b, "NotEq")
    };
    Sk.builtin.complex.prototype.__lt__ = function(a, b) {
        throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " < " + Sk.abstr.typeName(b));
    };
    Sk.builtin.complex.prototype.__le__ = function(a, b) {
        throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " <= " + Sk.abstr.typeName(b));
    };
    Sk.builtin.complex.prototype.__gt__ = function(a, b) {
        throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " > " + Sk.abstr.typeName(b));
    };
    Sk.builtin.complex.prototype.__ge__ = function(a, b) {
        throw new Sk.builtin.TypeError("unorderable types: " + Sk.abstr.typeName(a) + " >= " + Sk.abstr.typeName(b));
    };
    Sk.builtin.complex.prototype.__float__ = function(a) {
        throw new Sk.builtin.TypeError("can't convert complex to float");
    };
    Sk.builtin.complex.prototype.__int__ = function(a) {
        throw new Sk.builtin.TypeError("can't convert complex to int");
    };
    Sk.builtin.complex.prototype._internalGenericGetAttr = Sk.builtin.object.prototype.GenericGetAttr;
    Sk.builtin.complex.prototype.tp$getattr = function(a) {
        if (null != a && (Sk.builtin.checkString(a) || "string" === typeof a)) {
            var b = a;
            Sk.builtin.checkString(a) && (b = Sk.ffi.remapToJs(a));
            if ("real" === b || "imag" === b) return this[b]
        }
        return this._internalGenericGetAttr(a)
    };
    Sk.builtin.complex.prototype.tp$setattr = function(a, b) {
        if (null != a && (Sk.builtin.checkString(a) || "string" === typeof a)) {
            var c = a;
            Sk.builtin.checkString(a) && (c = Sk.ffi.remapToJs(a));
            if ("real" === c || "imag" === c) throw new Sk.builtin.AttributeError("readonly attribute");
        }
        throw new Sk.builtin.AttributeError("'complex' object attribute '" + a + "' is readonly");
    };
    Sk.builtin.complex.complex_format = function(a, b, c) {
        if (null == a || !Sk.builtin.complex._complex_check(a)) throw Error("Invalid internal method call: Sk.complex.complex_format() called with invalid value type.");
        var d = "",
            d = "",
            e = null,
            f = "",
            g = "";
        0 === a.real.v && 1 == (0 > a.real.v ? -Math.abs(1) : Math.abs(1)) ? (e = "", d = Sk.builtin.complex.PyOS_double_to_string(a.imag.v, c, b, 0, null)) : (e = d = Sk.builtin.complex.PyOS_double_to_string(a.real.v, c, b, 0, null), d = Sk.builtin.complex.PyOS_double_to_string(a.imag.v, c, b, Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN,
            null), 0 === a.imag.v && (-Infinity === 1 / a.imag.v && d && "-" !== d[0]) && (d = "-" + d), f = "(", g = ")");
        return new Sk.builtin.str("" + f + e + d + "j" + g)
    };
    Sk.builtin.complex.prototype.$r = function() {
        return Sk.builtin.complex.complex_format(this, 0, "r")
    };
    Sk.builtin.complex.prototype.tp$str = function() {
        return Sk.builtin.complex.complex_format(this, null, "g")
    };
    Sk.builtin.complex.prototype.__format__ = new Sk.builtin.func(function(a, b) {
        var c;
        if (null == b) return null;
        if (Sk.builtin.checkString(b)) return c = Sk.builtin.complex._PyComplex_FormatAdvanced(a, b);
        throw new Sk.builtin.TypeError("__format__ requires str or unicode");
    });
    Sk.builtin.complex._PyComplex_FormatAdvanced = function(a, b) {
        throw new Sk.builtin.NotImplementedError("__format__ is not implemented for complex type.");
    };
    Sk.builtin.complex._is_finite = function(a) {
        return !isNaN(a) && Infinity !== a && -Infinity !== a
    };
    Sk.builtin.complex._is_infinity = function(a) {
        return Infinity === a || -Infinity === a
    };
    Sk.builtin.complex.prototype.__abs__ = new Sk.builtin.func(function(a) {
        var b;
        b = a.real.v;
        a = a.imag.v;
        if (!Sk.builtin.complex._is_finite(b) || !Sk.builtin.complex._is_finite(a)) return Sk.builtin.complex._is_infinity(b) ? (b = Math.abs(b), new Sk.builtin.float_(b)) : Sk.builtin.complex._is_infinity(a) ? (b = Math.abs(a), new Sk.builtin.float_(b)) : new Sk.builtin.float_(NaN);
        b = Math.hypot(b, a);
        if (!Sk.builtin.complex._is_finite(b)) throw new Sk.builtin.OverflowError("absolute value too large");
        return new Sk.builtin.float_(b)
    });
    Sk.builtin.complex.prototype.__bool__ = new Sk.builtin.func(function(a) {
        return new Sk.builtin.bool(a.tp$getattr("real").v || a.tp$getattr("real").v)
    });
    Sk.builtin.complex.prototype.__truediv__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__truediv__", arguments, 1, 1, !0);
        return a.nb$divide.call(a, b)
    });
    Sk.builtin.complex.prototype.__hash__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__hash__", arguments, 0, 0, !0);
        return a.tp$hash.call(a)
    });
    Sk.builtin.complex.prototype.__add__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__add__", arguments, 1, 1, !0);
        return a.nb$add.call(a, b)
    });
    Sk.builtin.complex.prototype.__repr__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__repr__", arguments, 0, 0, !0);
        return a.r$.call(a)
    });
    Sk.builtin.complex.prototype.__str__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__str__", arguments, 0, 0, !0);
        return a.tp$str.call(a)
    });
    Sk.builtin.complex.prototype.__sub__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__sub__", arguments, 1, 1, !0);
        return a.nb$subtract.call(a, b)
    });
    Sk.builtin.complex.prototype.__mul__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__mul__", arguments, 1, 1, !0);
        return a.nb$multiply.call(a, b)
    });
    Sk.builtin.complex.prototype.__div__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__div__", arguments, 1, 1, !0);
        return a.nb$divide.call(a, b)
    });
    Sk.builtin.complex.prototype.__floordiv__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__floordiv__", arguments, 1, 1, !0);
        return a.nb$floor_divide.call(a, b)
    });
    Sk.builtin.complex.prototype.__mod__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__mod__", arguments, 1, 1, !0);
        return a.nb$remainder.call(a, b)
    });
    Sk.builtin.complex.prototype.__pow__ = new Sk.builtin.func(function(a, b, c) {
        Sk.builtin.pyCheckArgs("__pow__", arguments, 1, 2, !0);
        return a.nb$power.call(a, b, c)
    });
    Sk.builtin.complex.prototype.__neg__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__neg__", arguments, 0, 0, !0);
        return a.nb$negative.call(a)
    });
    Sk.builtin.complex.prototype.__pos__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__pos__", arguments, 0, 0, !0);
        return a.nb$positive.call(a)
    });
    Sk.builtin.complex.prototype.conjugate = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("conjugate", arguments, 0, 0, !0);
        var b = a.imag.v;
        return new Sk.builtin.complex(a.real, new Sk.builtin.float_(-b))
    });
    Sk.builtin.complex.prototype.__divmod__ = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("__divmod__", arguments, 1, 1, !0);
        var c, d, e;
        d = Sk.builtin.complex.check_number_or_complex(a);
        e = Sk.builtin.complex.check_number_or_complex(b);
        c = d.nb$divide.call(d, e);
        c.real = new Sk.builtin.float_(Math.floor(c.real.v));
        c.imag = new Sk.builtin.float_(0);
        d = d.nb$subtract.call(d, e.nb$multiply.call(e, c));
        return new Sk.builtin.tuple([c, d])
    });
    Sk.builtin.complex.prototype.__getnewargs__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__getnewargs__", arguments, 0, 0, !0);
        return new Sk.builtin.tuple([a.real, a.imag])
    });
    Sk.builtin.complex.prototype.__nonzero__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__nonzero__", arguments, 0, 0, !0);
        return 0 !== a.real.v || 0 !== a.imag.v ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$
    });
    goog.exportSymbol("Sk.builtin.complex", Sk.builtin.complex);
    Sk.builtin.complex.PyOS_double_to_string = function(a, b, c, d, e) {
        e = !1;
        switch (b) {
            case "e":
            case "f":
            case "g":
                break;
            case "E":
                e = !0;
                b = "e";
                break;
            case "F":
                e = !0;
                b = "f";
                break;
            case "r":
                if (0 !== c) throw Error("Bad internall call");
                c = 17;
                b = "g";
                break;
            default:
                throw Error("Bad internall call");
        }
        if (isNaN(a)) a = "nan";
        else if (Infinity === a) a = "inf";
        else if (-Infinity === a) a = "-inf";
        else {
            d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0 && (b = "g");
            var f;
            f = "%" + (d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT ? "#" : "");
            null != c && (f = f + "." + c);
            f += b;
            f = new Sk.builtin.str(f);
            a = f.nb$remainder(new Sk.builtin.float_(a));
            a = a.v
        }
        d & Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN && "-" !== a[0] && (a = "+" + a);
        e && (a = a.toUpperCase());
        return a
    };
    Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_SIGN = 1;
    Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ADD_DOT_0 = 2;
    Sk.builtin.complex.PyOS_double_to_string.Py_DTSF_ALT = 4;
    Sk.builtin.complex.PyOS_double_to_string.Py_DTST_FINITE = 0;
    Sk.builtin.complex.PyOS_double_to_string.Py_DTST_INFINITE = 1;
    Sk.builtin.complex.PyOS_double_to_string.Py_DTST_NAN = 2;
    Sk.builtin.slice = function(a, b, c) {
        Sk.builtin.pyCheckArgs("slice", arguments, 1, 3, !1, !1);
        if (void 0 !== c && Sk.misceval.isIndex(c) && 0 === Sk.misceval.asIndex(c)) throw new Sk.builtin.ValueError("slice step cannot be zero");
        if (!(this instanceof Sk.builtin.slice)) return new Sk.builtin.slice(a, b, c);
        void 0 === b && void 0 === c && (b = a, a = Sk.builtin.none.none$);
        void 0 === b && (b = Sk.builtin.none.none$);
        void 0 === c && (c = Sk.builtin.none.none$);
        this.start = a;
        this.stop = b;
        this.step = c;
        this.__class__ = Sk.builtin.slice;
        this.$d = new Sk.builtin.dict([Sk.builtin.slice$start,
            this.start, Sk.builtin.slice$stop, this.stop, Sk.builtin.slice$step, this.step
        ]);
        return this
    };
    Sk.abstr.setUpInheritance("slice", Sk.builtin.slice, Sk.builtin.object);
    Sk.builtin.slice.prototype.$r = function() {
        var a = Sk.builtin.repr(this.start).v,
            b = Sk.builtin.repr(this.stop).v,
            c = Sk.builtin.repr(this.step).v;
        return new Sk.builtin.str("slice(" + a + ", " + b + ", " + c + ")")
    };
    Sk.builtin.slice.prototype.tp$richcompare = function(a, b) {
        var c, d;
        if (!a.__class__ || a.__class__ != Sk.builtin.slice) return "Eq" === b ? !1 : "NotEq" === b ? !0 : !1;
        c = new Sk.builtin.tuple([this.start, this.stop, this.step]);
        d = new Sk.builtin.tuple([a.start, a.stop, a.step]);
        return c.tp$richcompare(d, b)
    };
    Sk.builtin.slice.prototype.slice_indices_ = function(a) {
        var b, c, d;
        if (Sk.builtin.checkNone(this.start)) b = null;
        else if (Sk.misceval.isIndex(this.start)) b = Sk.misceval.asIndex(this.start);
        else throw new Sk.builtin.TypeError("slice indices must be integers or None");
        if (Sk.builtin.checkNone(this.stop)) c = null;
        else if (Sk.misceval.isIndex(this.stop)) c = Sk.misceval.asIndex(this.stop);
        else throw new Sk.builtin.TypeError("slice indices must be integers or None");
        if (Sk.builtin.checkNone(this.step)) d = null;
        else if (Sk.misceval.isIndex(this.step)) d =
            Sk.misceval.asIndex(this.step);
        else throw new Sk.builtin.TypeError("slice indices must be integers or None");
        null === d && (d = 1);
        0 < d ? (null === b && (b = 0), null === c && (c = a), c > a && (c = a), 0 > b && (b = a + b, 0 > b && (b = 0)), 0 > c && (c = a + c)) : (null === b && (b = a - 1), b >= a && (b = a - 1), null === c ? c = -1 : 0 > c && (c = a + c, 0 > c && (c = -1)), 0 > b && (b = a + b));
        return [b, c, d]
    };
    Sk.builtin.slice.prototype.indices = new Sk.builtin.func(function(a, b) {
        Sk.builtin.pyCheckArgs("indices", arguments, 2, 2, !1, !1);
        b = Sk.builtin.asnum$(b);
        var c = a.slice_indices_(b);
        return new Sk.builtin.tuple([new Sk.builtin.int_(c[0]), new Sk.builtin.int_(c[1]), new Sk.builtin.int_(c[2])])
    });
    Sk.builtin.slice.prototype.sssiter$ = function(a, b) {
        var c, d = Sk.builtin.asnum$(a),
            e = this.slice_indices_("number" === typeof d ? d : a.v.length);
        if (0 < e[2])
            for (c = e[0]; c < e[1] && !1 !== b(c, d); c += e[2]);
        else
            for (c = e[0]; c > e[1] && !1 !== b(c, d); c += e[2]);
    };
    Sk.builtin.slice$start = new Sk.builtin.str("start");
    Sk.builtin.slice$stop = new Sk.builtin.str("stop");
    Sk.builtin.slice$step = new Sk.builtin.str("step");
    Sk.builtin.set = function(a) {
        var b;
        if (!(this instanceof Sk.builtin.set)) return new Sk.builtin.set(a);
        "undefined" === typeof a && (a = []);
        this.set_reset_();
        a = new Sk.builtin.list(a);
        a = Sk.abstr.iter(a);
        for (b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) Sk.builtin.set.prototype.add.func_code(this, b);
        this.__class__ = Sk.builtin.set;
        this.v = this.v;
        return this
    };
    Sk.abstr.setUpInheritance("set", Sk.builtin.set, Sk.builtin.object);
    Sk.abstr.markUnhashable(Sk.builtin.set);
    Sk.builtin.set.prototype.set_iter_ = function() {
        var a = this.v.tp$iter();
        a.tp$name = "set_iterator";
        return a
    };
    Sk.builtin.set.prototype.set_reset_ = function() {
        this.v = new Sk.builtin.dict([])
    };
    Sk.builtin.set.prototype.$r = function() {
        var a, b, c = [];
        a = Sk.abstr.iter(this);
        for (b = a.tp$iternext(); void 0 !== b; b = a.tp$iternext()) c.push(Sk.misceval.objectRepr(b).v);
        return Sk.python3 ? new Sk.builtin.str("{" + c.join(", ") + "}") : new Sk.builtin.str("set([" + c.join(", ") + "])")
    };
    Sk.builtin.set.prototype.ob$eq = function(a) {
        return this === a ? Sk.builtin.bool.true$ : a instanceof Sk.builtin.set && Sk.builtin.set.prototype.sq$length.call(this) === Sk.builtin.set.prototype.sq$length.call(a) ? this.issubset.func_code(this, a) : Sk.builtin.bool.false$
    };
    Sk.builtin.set.prototype.ob$ne = function(a) {
        return this === a ? Sk.builtin.bool.false$ : a instanceof Sk.builtin.set && Sk.builtin.set.prototype.sq$length.call(this) === Sk.builtin.set.prototype.sq$length.call(a) ? this.issubset.func_code(this, a).v ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$ : Sk.builtin.bool.true$
    };
    Sk.builtin.set.prototype.ob$lt = function(a) {
        return this === a || Sk.builtin.set.prototype.sq$length.call(this) >= Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issubset.func_code(this, a)
    };
    Sk.builtin.set.prototype.ob$le = function(a) {
        return this === a ? Sk.builtin.bool.true$ : Sk.builtin.set.prototype.sq$length.call(this) > Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issubset.func_code(this, a)
    };
    Sk.builtin.set.prototype.ob$gt = function(a) {
        return this === a || Sk.builtin.set.prototype.sq$length.call(this) <= Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issuperset.func_code(this, a)
    };
    Sk.builtin.set.prototype.ob$ge = function(a) {
        return this === a ? Sk.builtin.bool.true$ : Sk.builtin.set.prototype.sq$length.call(this) < Sk.builtin.set.prototype.sq$length.call(a) ? Sk.builtin.bool.false$ : this.issuperset.func_code(this, a)
    };
    Sk.builtin.set.prototype.__iter__ = new Sk.builtin.func(function(a) {
        Sk.builtin.pyCheckArgs("__iter__", arguments, 0, 0, !1, !0);
        return Sk.builtin.set.prototype.tp$iter.call(a)
    });
    Sk.builtin.set.prototype.tp$iter = Sk.builtin.set.prototype.set_iter_;
    Sk.builtin.set.prototype.sq$length = function() {
        return this.v.mp$length()
    };
    Sk.builtin.set.prototype.sq$contains = function(a) {
        return this.v.sq$contains(a)
    };
    Sk.builtin.set.prototype.isdisjoint = new Sk.builtin.func(function(a, b) {
        var c, d;
        d = Sk.abstr.iter(a);
        for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext())
            if (c = Sk.abstr.sequenceContains(b, c)) return Sk.builtin.bool.false$;
        return Sk.builtin.bool.true$
    });
    Sk.builtin.set.prototype.issubset = new Sk.builtin.func(function(a, b) {
        var c, d;
        d = a.sq$length();
        c = b.sq$length();
        if (d > c) return Sk.builtin.bool.false$;
        d = Sk.abstr.iter(a);
        for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext())
            if (c = Sk.abstr.sequenceContains(b, c), !c) return Sk.builtin.bool.false$;
        return Sk.builtin.bool.true$
    });
    Sk.builtin.set.prototype.issuperset = new Sk.builtin.func(function(a, b) {
        return Sk.builtin.set.prototype.issubset.func_code(b, a)
    });
    Sk.builtin.set.prototype.union = new Sk.builtin.func(function(a) {
        var b, c = new Sk.builtin.set(a);
        for (b = 1; b < arguments.length; b++) Sk.builtin.set.prototype.update.func_code(c, arguments[b]);
        return c
    });
    Sk.builtin.set.prototype.intersection = new Sk.builtin.func(function(a) {
        var b = Sk.builtin.set.prototype.copy.func_code(a),
            c = Array.prototype.slice.call(arguments);
        c[0] = b;
        Sk.builtin.set.prototype.intersection_update.func_code.apply(null, c);
        return b
    });
    Sk.builtin.set.prototype.difference = new Sk.builtin.func(function(a, b) {
        var c = Sk.builtin.set.prototype.copy.func_code(a),
            d = Array.prototype.slice.call(arguments);
        d[0] = c;
        Sk.builtin.set.prototype.difference_update.func_code.apply(null, d);
        return c
    });
    Sk.builtin.set.prototype.symmetric_difference = new Sk.builtin.func(function(a, b) {
        var c, d, e = Sk.builtin.set.prototype.union.func_code(a, b);
        c = Sk.abstr.iter(e);
        for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) Sk.abstr.sequenceContains(a, d) && Sk.abstr.sequenceContains(b, d) && Sk.builtin.set.prototype.discard.func_code(e, d);
        return e
    });
    Sk.builtin.set.prototype.copy = new Sk.builtin.func(function(a) {
        return new Sk.builtin.set(a)
    });
    Sk.builtin.set.prototype.update = new Sk.builtin.func(function(a, b) {
        var c, d;
        c = Sk.abstr.iter(b);
        for (d = c.tp$iternext(); void 0 !== d; d = c.tp$iternext()) Sk.builtin.set.prototype.add.func_code(a, d);
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.intersection_update = new Sk.builtin.func(function(a, b) {
        var c, d, e;
        d = Sk.abstr.iter(a);
        for (e = d.tp$iternext(); void 0 !== e; e = d.tp$iternext())
            for (c = 1; c < arguments.length; c++)
                if (!Sk.abstr.sequenceContains(arguments[c], e)) {
                    Sk.builtin.set.prototype.discard.func_code(a, e);
                    break
                }
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.difference_update = new Sk.builtin.func(function(a, b) {
        var c, d, e;
        d = Sk.abstr.iter(a);
        for (e = d.tp$iternext(); void 0 !== e; e = d.tp$iternext())
            for (c = 1; c < arguments.length; c++)
                if (Sk.abstr.sequenceContains(arguments[c], e)) {
                    Sk.builtin.set.prototype.discard.func_code(a, e);
                    break
                }
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.symmetric_difference_update = new Sk.builtin.func(function(a, b) {
        var c = Sk.builtin.set.prototype.symmetric_difference.func_code(a, b);
        a.set_reset_();
        Sk.builtin.set.prototype.update.func_code(a, c);
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.add = new Sk.builtin.func(function(a, b) {
        a.v.mp$ass_subscript(b, !0);
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.discard = new Sk.builtin.func(function(a, b) {
        Sk.builtin.dict.prototype.pop.func_code(a.v, b, Sk.builtin.none.none$);
        return Sk.builtin.none.none$
    });
    Sk.builtin.set.prototype.pop = new Sk.builtin.func(function(a) {
        var b;
        if (0 === a.sq$length()) throw new Sk.builtin.KeyError("pop from an empty set");
        b = Sk.abstr.iter(a).tp$iternext();
        Sk.builtin.set.prototype.discard.func_code(a, b);
        return b
    });
    Sk.builtin.set.prototype.remove = new Sk.builtin.func(function(a, b) {
        a.v.mp$del_subscript(b);
        return Sk.builtin.none.none$
    });
    goog.exportSymbol("Sk.builtin.set", Sk.builtin.set);
    var print_f = function(a) {
        Sk.builtin.pyCheckArgs("print", arguments, 0, Infinity, !0, !1);
        var b = Array.prototype.slice.call(arguments, 1),
            c = new Sk.builtins.dict(a);
        Sk.ffi.remapToJs(c);
        var d = {
                sep: " ",
                end: "\n",
                file: null
            },
            e, f;
        e = c.mp$lookup(new Sk.builtin.str("sep"));
        if (void 0 !== e)
            if (f = Sk.builtin.checkNone(e), Sk.builtin.checkString(e) || f) d.sep = f ? d.sep : Sk.ffi.remapToJs(e);
            else throw new Sk.builtin.TypeError("sep must be None or a string, not " + Sk.abstr.typeName(e));
        e = c.mp$lookup(new Sk.builtin.str("end"));
        if (void 0 !==
            e)
            if (f = Sk.builtin.checkNone(e), Sk.builtin.checkString(e) || f) d.end = f ? d.end : Sk.ffi.remapToJs(e);
            else throw new Sk.builtin.TypeError("end must be None or a string, not " + Sk.abstr.typeName(e));
        e = c.mp$lookup(new Sk.builtin.str("file"));
        if (void 0 !== e)
            if ((f = Sk.builtin.checkNone(e)) || void 0 !== e.tp$getattr("write")) d.file = f ? d.file : e;
            else throw new Sk.builtin.AttributeError("'" + Sk.abstr.typeName(e) + "' object has no attribute 'write'");
        c = "";
        for (e = 0; e < b.length; e++) c += (new Sk.builtin.str(b[e])).v, c += d.sep;
        0 < b.length &&
            0 < d.sep.length && (c = c.substring(0, c.length - d.sep.length));
        c += d.end;
        null !== d.file ? Sk.misceval.callsim(d.file.write, d.file, new Sk.builtin.str(c)) : (b = Sk.importModule("sys"), Sk.misceval.apply(b.$d.stdout.write, void 0, void 0, void 0, [b.$d.stdout, new Sk.builtin.str(c)]))
    };
    print_f.co_kwargs = !0;
    Sk.builtin.print = new Sk.builtin.func(print_f);
    Sk.builtin.print.__doc__ = new Sk.builtin.str("print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.");
    Sk.builtin.module = function() {};
    goog.exportSymbol("Sk.builtin.module", Sk.builtin.module);
    Sk.builtin.module.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("module", Sk.builtin.module);
    Sk.builtin.module.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
    Sk.builtin.module.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
    Sk.builtin.structseq_types = {};
    Sk.builtin.make_structseq = function(a, b, c, d) {
        var e = a + "." + b,
            f = [];
        a = [];
        for (var g in c) f.push(g), a.push(c[g]);
        c = function(a) {
            Sk.builtin.pyCheckArgs(e, arguments, 1, 1);
            var b, c, d;
            if (!(this instanceof Sk.builtin.structseq_types[e])) return b = Object.create(Sk.builtin.structseq_types[e].prototype), b.constructor.apply(b, arguments), b;
            if ("[object Array]" === Object.prototype.toString.apply(a)) d = a;
            else {
                d = [];
                b = Sk.abstr.iter(a);
                for (c = b.tp$iternext(); void 0 !== c; c = b.tp$iternext()) d.push(c);
                if (d.length != f.length) throw new Sk.builtin.TypeError(e +
                    "() takes a " + f.length + "-sequence (" + d.length + "-sequence given)");
            }
            Sk.builtin.tuple.call(this, d);
            this.__class__ = Sk.builtin.structseq_types[e]
        };
        Sk.builtin.structseq_types[e] = c;
        goog.inherits(c, Sk.builtin.tuple);
        d && (c.prototype.__doc__ = d);
        c.prototype.tp$name = e;
        c.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(e, Sk.builtin.structseq_types[e]);
        c.prototype.ob$type.$d = new Sk.builtin.dict([]);
        c.prototype.ob$type.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple([Sk.builtin.tuple]));
        c.prototype.__getitem__ =
            new Sk.builtin.func(function(a, b) {
                return Sk.builtin.tuple.prototype.mp$subscript.call(a, b)
            });
        c.prototype.__reduce__ = new Sk.builtin.func(function(a) {
            throw new Sk.builtin.Exception("__reduce__ is not implemented");
        });
        c.prototype.$r = function() {
            var a, b;
            if (0 === this.v.length) return new Sk.builtin.str(e + "()");
            b = [];
            for (a = 0; a < this.v.length; ++a) b[a] = f[a] + "=" + Sk.misceval.objectRepr(this.v[a]).v;
            a = b.join(", ");
            1 === this.v.length && (a += ",");
            return new Sk.builtin.str(e + "(" + a + ")")
        };
        c.prototype.tp$setattr = function(a,
            b) {
            throw new Sk.builtin.AttributeError("readonly property");
        };
        c.prototype.tp$getattr = function(a) {
            var b = f.indexOf(a);
            return 0 <= b ? this.v[b] : Sk.builtin.object.prototype.GenericGetAttr(a)
        };
        return c
    };
    goog.exportSymbol("Sk.builtin.make_structseq", Sk.builtin.make_structseq);
    Sk.builtin.generator = function(a, b, c, d, e) {
        var f;
        if (a) {
            if (!(this instanceof Sk.builtin.generator)) return new Sk.builtin.generator(a, b, c, d, e);
            this.func_code = a;
            this.func_globals = b || null;
            this.gi$running = !1;
            this.gi$resumeat = 0;
            this.gi$sentvalue = void 0;
            this.gi$locals = {};
            this.gi$cells = {};
            if (0 < c.length)
                for (b = 0; b < a.co_varnames.length; ++b) this.gi$locals[a.co_varnames[b]] = c[b];
            if (void 0 !== e)
                for (f in e) d[f] = e[f];
            this.func_closure = d;
            return this
        }
    };
    goog.exportSymbol("Sk.builtin.generator", Sk.builtin.generator);
    Sk.abstr.setUpInheritance("generator", Sk.builtin.generator, Sk.builtin.object);
    Sk.builtin.generator.prototype.tp$iter = function() {
        return this
    };
    Sk.builtin.generator.prototype.tp$iternext = function(a, b) {
        var c, d = this;
        this.gi$running = !0;
        void 0 === b && (b = null);
        this.gi$sentvalue = b;
        c = [this];
        this.func_closure && c.push(this.func_closure);
        return function f(b) {
            if (b instanceof Sk.misceval.Suspension) {
                if (a) return new Sk.misceval.Suspension(f, b);
                b = Sk.misceval.retryOptionalSuspensionOrThrow(b)
            }
            d.gi$running = !1;
            goog.asserts.assert(void 0 !== b);
            if (b !== Sk.builtin.none.none$) return d.gi$resumeat = b[0], b = b[1]
        }(this.func_code.apply(this.func_globals, c))
    };
    Sk.builtin.generator.prototype.next = new Sk.builtin.func(function(a) {
        return a.tp$iternext(!0)
    });
    Sk.builtin.generator.prototype.$r = function() {
        return new Sk.builtin.str("<generator object " + this.func_code.co_name.v + ">")
    };
    Sk.builtin.generator.prototype.send = new Sk.builtin.func(function(a, b) {
        return a.tp$iternext(!0, b)
    });
    Sk.builtin.makeGenerator = function(a, b) {
        var c, d = new Sk.builtin.generator(null, null, null);
        d.tp$iternext = a;
        for (c in b) b.hasOwnProperty(c) && (d[c] = b[c]);
        return d
    };
    goog.exportSymbol("Sk.builtin.makeGenerator", Sk.builtin.makeGenerator);
    Sk.builtin.file = function(a, b, c) {
        var d;
        if (!(this instanceof Sk.builtin.file)) return new Sk.builtin.file(a, b, c);
        this.mode = b;
        this.name = Sk.ffi.remapToJs(a);
        this.closed = !1;
        if ("/dev/stdout" === this.name) this.data$ = Sk.builtin.none.none$, this.fileno = 1;
        else if ("/dev/stdin" === this.name) this.fileno = 0;
        else if ("/dev/stderr" === this.name) this.fileno = 2;
        else {
            if (Sk.inBrowser) {
                this.fileno = 10;
                b = document.getElementById(a.v);
                if (null == b) throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '" + a.v + "'");
                "textarea" ==
                b.nodeName.toLowerCase() ? this.data$ = b.value : this.data$ = b.textContent
            } else this.fileno = 11, this.data$ = Sk.read(a.v);
            this.lineList = this.data$.split("\n");
            this.lineList = this.lineList.slice(0, -1);
            for (d in this.lineList) this.lineList[d] += "\n";
            this.currentLine = 0
        }
        this.pos$ = 0;
        this.__class__ = Sk.builtin.file;
        return this
    };
    Sk.abstr.setUpInheritance("file", Sk.builtin.file, Sk.builtin.object);
    Sk.builtin.file.prototype.$r = function() {
        return new Sk.builtin.str("<" + (this.closed ? "closed" : "open") + "file '" + this.name + "', mode '" + this.mode + "'>")
    };
    Sk.builtin.file.prototype.tp$iter = function() {
        var a = {
            tp$iter: function() {
                return a
            },
            $obj: this,
            $index: 0,
            $lines: this.lineList,
            tp$iternext: function() {
                return a.$index >= a.$lines.length ? void 0 : new Sk.builtin.str(a.$lines[a.$index++])
            }
        };
        return a
    };
    Sk.builtin.file.prototype.close = new Sk.builtin.func(function(a) {
        a.closed = !0
    });
    Sk.builtin.file.prototype.flush = new Sk.builtin.func(function(a) {});
    Sk.builtin.file.prototype.fileno = new Sk.builtin.func(function(a) {
        return this.fileno
    });
    Sk.builtin.file.prototype.isatty = new Sk.builtin.func(function(a) {
        return !1
    });
    Sk.builtin.file.prototype.read = new Sk.builtin.func(function(a, b) {
        var c, d;
        if (a.closed) throw new Sk.builtin.ValueError("I/O operation on closed file");
        d = a.data$.length;
        void 0 === b && (b = d);
        c = new Sk.builtin.str(a.data$.substr(a.pos$, b));
        a.pos$ += b;
        a.pos$ >= d && (a.pos$ = d);
        return c
    });
    Sk.builtin.file.prototype.readline = new Sk.builtin.func(function(a, b) {
        if (0 === a.fileno) {
            var c, d, e;
            c = c ? c.v : "";
            c = Sk.inputfun(c);
            return c instanceof Promise ? (e = new Sk.misceval.Suspension, e.resume = function() {
                return new Sk.builtin.str(d)
            }, e.data = {
                type: "Sk.promise",
                promise: c.then(function(a) {
                    return d = a
                }, function(a) {
                    d = "";
                    return a
                })
            }, e) : new Sk.builtin.str(c)
        }
        c = "";
        a.currentLine < a.lineList.length && (c = a.lineList[a.currentLine], a.currentLine++);
        return new Sk.builtin.str(c)
    });
    Sk.builtin.file.prototype.readlines = new Sk.builtin.func(function(a, b) {
        if (0 === a.fileno) return new Sk.builtin.NotImplementedError("readlines ins't implemented because the web doesn't support Ctrl+D");
        var c, d = [];
        for (c = a.currentLine; c < a.lineList.length; c++) d.push(new Sk.builtin.str(a.lineList[c]));
        return new Sk.builtin.list(d)
    });
    Sk.builtin.file.prototype.seek = new Sk.builtin.func(function(a, b, c) {
        void 0 === c && (c = 1);
        a.pos$ = 1 == c ? b : a.data$ + b
    });
    Sk.builtin.file.prototype.tell = new Sk.builtin.func(function(a) {
        return a.pos$
    });
    Sk.builtin.file.prototype.truncate = new Sk.builtin.func(function(a, b) {
        goog.asserts.fail()
    });
    Sk.builtin.file.prototype.write = new Sk.builtin.func(function(a, b) {
        1 === a.fileno ? Sk.output(Sk.ffi.remapToJs(b)) : goog.asserts.fail()
    });
    goog.exportSymbol("Sk.builtin.file", Sk.builtin.file);
    Sk.ffi = Sk.ffi || {};
    Sk.ffi.remapToPy = function(a) {
        var b, c;
        if ("[object Array]" === Object.prototype.toString.call(a)) {
            c = [];
            for (b = 0; b < a.length; ++b) c.push(Sk.ffi.remapToPy(a[b]));
            return new Sk.builtin.list(c)
        }
        if ("object" === typeof a) {
            c = [];
            for (b in a) c.push(Sk.ffi.remapToPy(b)), c.push(Sk.ffi.remapToPy(a[b]));
            return new Sk.builtin.dict(c)
        }
        if ("string" === typeof a) return new Sk.builtin.str(a);
        if ("number" === typeof a) return Sk.builtin.assk$(a);
        if ("boolean" === typeof a) return new Sk.builtin.bool(a);
        goog.asserts.fail("unhandled remap type " + typeof a)
    };
    goog.exportSymbol("Sk.ffi.remapToPy", Sk.ffi.remapToPy);
    Sk.ffi.remapToJs = function(a) {
        var b, c, d, e;
        if (a instanceof Sk.builtin.dict) {
            e = {};
            d = a.tp$iter();
            for (c = d.tp$iternext(); void 0 !== c; c = d.tp$iternext()) b = a.mp$subscript(c), void 0 === b && (b = null), c = Sk.ffi.remapToJs(c), e[c] = Sk.ffi.remapToJs(b);
            return e
        }
        if (a instanceof Sk.builtin.list || a instanceof Sk.builtin.tuple) {
            e = [];
            for (b = 0; b < a.v.length; ++b) e.push(Sk.ffi.remapToJs(a.v[b]));
            return e
        }
        return a instanceof Sk.builtin.bool ? a.v ? !0 : !1 : a instanceof Sk.builtin.int_ ? Sk.builtin.asnum$(a) : a instanceof Sk.builtin.float_ ?
            Sk.builtin.asnum$(a) : a instanceof Sk.builtin.lng ? Sk.builtin.asnum$(a) : "number" === typeof a || "boolean" === typeof a ? a : a.v
    };
    goog.exportSymbol("Sk.ffi.remapToJs", Sk.ffi.remapToJs);
    Sk.ffi.callback = function(a) {
        return void 0 === a ? a : function() {
            return Sk.misceval.apply(a, void 0, void 0, void 0, Array.prototype.slice.call(arguments, 0))
        }
    };
    goog.exportSymbol("Sk.ffi.callback", Sk.ffi.callback);
    Sk.ffi.stdwrap = function(a, b) {
        var c = new a;
        c.v = b;
        return c
    };
    goog.exportSymbol("Sk.ffi.stdwrap", Sk.ffi.stdwrap);
    Sk.ffi.basicwrap = function(a) {
        if (a instanceof Sk.builtin.int_) return Sk.builtin.asnum$(a);
        if (a instanceof Sk.builtin.float_) return Sk.builtin.asnum$(a);
        if (a instanceof Sk.builtin.lng) return Sk.builtin.asnum$(a);
        if ("number" === typeof a || "boolean" === typeof a) return a;
        if ("string" === typeof a) return new Sk.builtin.str(a);
        goog.asserts.fail("unexpected type for basicwrap")
    };
    goog.exportSymbol("Sk.ffi.basicwrap", Sk.ffi.basicwrap);
    Sk.ffi.unwrapo = function(a) {
        return void 0 === a ? void 0 : a.v
    };
    goog.exportSymbol("Sk.ffi.unwrapo", Sk.ffi.unwrapo);
    Sk.ffi.unwrapn = function(a) {
        return null === a ? null : a.v
    };
    goog.exportSymbol("Sk.ffi.unwrapn", Sk.ffi.unwrapn);
    Sk.builtin.enumerate = function(a, b) {
        var c;
        if (!(this instanceof Sk.builtin.enumerate)) return new Sk.builtin.enumerate(a, b);
        Sk.builtin.pyCheckArgs("enumerate", arguments, 1, 2);
        if (!Sk.builtin.checkIterable(a)) throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(a) + "' object is not iterable");
        if (void 0 !== b)
            if (Sk.misceval.isIndex(b)) b = Sk.misceval.asIndex(b);
            else throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(b) + "' object cannot be interpreted as an index");
        else b = 0;
        c = a.tp$iter();
        this.tp$iter = function() {
            return this
        };
        this.$index = b;
        this.tp$iternext = function() {
            var a, b = c.tp$iternext();
            if (void 0 !== b) return a = new Sk.builtin.int_(this.$index++), new Sk.builtin.tuple([a, b])
        };
        this.__class__ = Sk.builtin.enumerate;
        return this
    };
    Sk.abstr.setUpInheritance("enumerate", Sk.builtin.enumerate, Sk.builtin.object);
    Sk.builtin.enumerate.prototype.__iter__ = new Sk.builtin.func(function(a) {
        return a.tp$iter()
    });
    Sk.builtin.enumerate.prototype.next = new Sk.builtin.func(function(a) {
        return a.tp$iternext()
    });
    Sk.builtin.enumerate.prototype.$r = function() {
        return new Sk.builtin.str("<enumerate object>")
    };
    Sk.Tokenizer = function(a, b, c) {
        this.filename = a;
        this.callback = c;
        this.parenlev = this.lnum = 0;
        this.continued = !1;
        this.namechars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
        this.numchars = "0123456789";
        this.contstr = "";
        this.needcont = !1;
        this.contline = void 0;
        this.indents = [0];
        this.endprog = /.*/;
        this.strstart = [-1, -1];
        this.interactive = b;
        this.doneFunc = function() {
            var a;
            for (a = 1; a < this.indents.length; ++a)
                if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, "", [this.lnum, 0], [this.lnum, 0], "")) return "done";
            return this.callback(Sk.Tokenizer.Tokens.T_ENDMARKER,
                "", [this.lnum, 0], [this.lnum, 0], "") ? "done" : "failed"
        }
    };
    Sk.Tokenizer.Tokens = {
        T_ENDMARKER: 0,
        T_NAME: 1,
        T_NUMBER: 2,
        T_STRING: 3,
        T_NEWLINE: 4,
        T_INDENT: 5,
        T_DEDENT: 6,
        T_LPAR: 7,
        T_RPAR: 8,
        T_LSQB: 9,
        T_RSQB: 10,
        T_COLON: 11,
        T_COMMA: 12,
        T_SEMI: 13,
        T_PLUS: 14,
        T_MINUS: 15,
        T_STAR: 16,
        T_SLASH: 17,
        T_VBAR: 18,
        T_AMPER: 19,
        T_LESS: 20,
        T_GREATER: 21,
        T_EQUAL: 22,
        T_DOT: 23,
        T_PERCENT: 24,
        T_BACKQUOTE: 25,
        T_LBRACE: 26,
        T_RBRACE: 27,
        T_EQEQUAL: 28,
        T_NOTEQUAL: 29,
        T_LESSEQUAL: 30,
        T_GREATEREQUAL: 31,
        T_TILDE: 32,
        T_CIRCUMFLEX: 33,
        T_LEFTSHIFT: 34,
        T_RIGHTSHIFT: 35,
        T_DOUBLESTAR: 36,
        T_PLUSEQUAL: 37,
        T_MINEQUAL: 38,
        T_STAREQUAL: 39,
        T_SLASHEQUAL: 40,
        T_PERCENTEQUAL: 41,
        T_AMPEREQUAL: 42,
        T_VBAREQUAL: 43,
        T_CIRCUMFLEXEQUAL: 44,
        T_LEFTSHIFTEQUAL: 45,
        T_RIGHTSHIFTEQUAL: 46,
        T_DOUBLESTAREQUAL: 47,
        T_DOUBLESLASH: 48,
        T_DOUBLESLASHEQUAL: 49,
        T_AT: 50,
        T_OP: 51,
        T_COMMENT: 52,
        T_NL: 53,
        T_RARROW: 54,
        T_ERRORTOKEN: 55,
        T_N_TOKENS: 56,
        T_NT_OFFSET: 256
    };

    function group(a) {
        return "(" + Array.prototype.slice.call(arguments).join("|") + ")"
    }

    function any(a) {
        return group.apply(null, arguments) + "*"
    }

    function maybe(a) {
        return group.apply(null, arguments) + "?"
    }
    var Whitespace = "[ \\f\\t]*",
        Comment_ = "#[^\\r\\n]*",
        Ident = "[a-zA-Z_]\\w*",
        Binnumber = "0[bB][01]*",
        Hexnumber = "0[xX][\\da-fA-F]*[lL]?",
        Octnumber = "0[oO]?[0-7]*[lL]?",
        Decnumber = "[1-9]\\d*[lL]?",
        Intnumber = group(Binnumber, Hexnumber, Octnumber, Decnumber),
        Exponent = "[eE][-+]?\\d+",
        Pointfloat = group("\\d+\\.\\d*", "\\.\\d+") + maybe(Exponent),
        Expfloat = "\\d+" + Exponent,
        Floatnumber = group(Pointfloat, Expfloat),
        Imagnumber = group("\\d+[jJ]", Floatnumber + "[jJ]"),
        Number_ = group(Imagnumber, Floatnumber, Intnumber),
        Single = "^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'",
        Double_ = '^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',
        Single3 = "[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''",
        Double3 = '[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""',
        Triple = group("[ubUB]?[rR]?'''", '[ubUB]?[rR]?"""'),
        String_ = group("[uU]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'", '[uU]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"'),
        Operator = group("\\*\\*=?", ">>=?", "<<=?", "<>", "!=", "//=?", "->", "[+\\-*/%&|^=<>]=?", "~"),
        Bracket = "[\\][(){}]",
        Special = group("\\r?\\n", "[:;.,`@]"),
        Funny = group(Operator, Bracket, Special),
        ContStr =
        group("[uUbB]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*" + group("'", "\\\\\\r?\\n"), '[uUbB]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*' + group('"', "\\\\\\r?\\n")),
        PseudoExtras = group("\\\\\\r?\\n", Comment_, Triple),
        PseudoToken = "^" + group(PseudoExtras, Number_, Funny, ContStr, Ident),
        triple_quoted = {
            "'''": !0,
            '"""': !0,
            "r'''": !0,
            'r"""': !0,
            "R'''": !0,
            'R"""': !0,
            "u'''": !0,
            'u"""': !0,
            "U'''": !0,
            'U"""': !0,
            "b'''": !0,
            'b"""': !0,
            "B'''": !0,
            'B"""': !0,
            "ur'''": !0,
            'ur"""': !0,
            "Ur'''": !0,
            'Ur"""': !0,
            "uR'''": !0,
            'uR"""': !0,
            "UR'''": !0,
            'UR"""': !0,
            "br'''": !0,
            'br"""': !0,
            "Br'''": !0,
            'Br"""': !0,
            "bR'''": !0,
            'bR"""': !0,
            "BR'''": !0,
            'BR"""': !0
        },
        single_quoted = {
            "'": !0,
            '"': !0,
            "r'": !0,
            'r"': !0,
            "R'": !0,
            'R"': !0,
            "u'": !0,
            'u"': !0,
            "U'": !0,
            'U"': !0,
            "b'": !0,
            'b"': !0,
            "B'": !0,
            'B"': !0,
            "ur'": !0,
            'ur"': !0,
            "Ur'": !0,
            'Ur"': !0,
            "uR'": !0,
            'uR"': !0,
            "UR'": !0,
            'UR"': !0,
            "br'": !0,
            'br"': !0,
            "Br'": !0,
            'Br"': !0,
            "bR'": !0,
            'bR"': !0,
            "BR'": !0,
            'BR"': !0
        };
    (function() {
        for (var a in triple_quoted);
        for (a in single_quoted);
    })();
    var tabsize = 8;

    function contains(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) return !0;
        return !1
    }

    function rstrip(a, b) {
        var c;
        for (c = a.length; 0 < c && -1 !== b.indexOf(a.charAt(c - 1)); --c);
        return a.substring(0, c)
    }
    Sk.Tokenizer.prototype.generateTokens = function(a) {
        var b, c, d, e, f, g, h, k;
        b = RegExp(PseudoToken);
        k = RegExp(Single3, "g");
        h = RegExp(Double3, "g");
        var l = {
            "'": RegExp(Single, "g"),
            '"': RegExp(Double_, "g"),
            "'''": k,
            '"""': h,
            "r'''": k,
            'r"""': h,
            "u'''": k,
            'u"""': h,
            "b'''": k,
            'b"""': h,
            "ur'''": k,
            'ur"""': h,
            "br'''": k,
            'br"""': h,
            "R'''": k,
            'R"""': h,
            "U'''": k,
            'U"""': h,
            "B'''": k,
            'B"""': h,
            "uR'''": k,
            'uR"""': h,
            "Ur'''": k,
            'Ur"""': h,
            "UR'''": k,
            'UR"""': h,
            "bR'''": k,
            'bR"""': h,
            "Br'''": k,
            'Br"""': h,
            "BR'''": k,
            'BR"""': h,
            r: null,
            R: null,
            u: null,
            U: null,
            b: null,
            B: null
        };
        a || (a = "");
        this.lnum += 1;
        k = 0;
        h = a.length;
        if (0 < this.contstr.length) {
            if (!a) throw new Sk.builtin.TokenError("EOF in multi-line string", this.filename, this.strstart[0], this.strstart[1], this.contline);
            this.endprog.lastIndex = 0;
            if (f = this.endprog.test(a)) {
                k = e = this.endprog.lastIndex;
                if (this.callback(Sk.Tokenizer.Tokens.T_STRING, this.contstr + a.substring(0, e), this.strstart, [this.lnum, e], this.contline + a)) return "done";
                this.contstr = "";
                this.needcont = !1;
                this.contline = void 0
            } else {
                if (this.needcont && "\\\n" !==
                    a.substring(a.length - 2) && "\\\r\n" !== a.substring(a.length - 3)) {
                    if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, this.contstr + a, this.strstart, [this.lnum, a.length], this.contline)) return "done";
                    this.contstr = "";
                    this.contline = void 0
                } else this.contstr += a, this.contline += a;
                return !1
            }
        } else if (0 !== this.parenlev || this.continued) {
            if (!a) throw new Sk.builtin.TokenError("EOF vairāku rindu paziņojumā", this.filename, this.lnum, 0, a);
            this.continued = !1
        } else {
            if (!a) return this.doneFunc();
            for (g = 0; k < h;) {
                if (" " === a.charAt(k)) g +=
                    1;
                else if ("\t" === a.charAt(k)) g = (g / tabsize + 1) * tabsize;
                else if ("\f" === a.charAt(k)) g = 0;
                else break;
                k += 1
            }
            if (k === h) return this.doneFunc();
            if (-1 !== "#\r\n".indexOf(a.charAt(k))) {
                if ("#" === a.charAt(k)) return h = rstrip(a.substring(k), "\r\n"), b = k + h.length, this.callback(Sk.Tokenizer.Tokens.T_COMMENT, h, [this.lnum, k], [this.lnum, k + h.length], a) || this.callback(Sk.Tokenizer.Tokens.T_NL, a.substring(b), [this.lnum, b], [this.lnum, a.length], a) ? "done" : !1;
                if (this.callback(Sk.Tokenizer.Tokens.T_NL, a.substring(k), [this.lnum, k],
                        [this.lnum, a.length], a)) return "done";
                if (!this.interactive) return !1
            }
            if (g > this.indents[this.indents.length - 1] && (this.indents.push(g), this.callback(Sk.Tokenizer.Tokens.T_INDENT, a.substring(0, k), [this.lnum, 0], [this.lnum, k], a))) return "done";
            for (; g < this.indents[this.indents.length - 1];) {
                if (!contains(this.indents, g)) throw new Sk.builtin.IndentationError("unindent does not match any outer indentation level", this.filename, this.lnum, k, a);
                this.indents.splice(this.indents.length - 1, 1);
                if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT,
                        "", [this.lnum, k], [this.lnum, k], a)) return "done"
            }
        }
        for (; k < h;) {
            for (g = a.charAt(k);
                " " === g || "\f" === g || "\t" === g;) k += 1, g = a.charAt(k);
            b.lastIndex = 0;
            if (g = b.exec(a.substring(k)))
                if (c = k, e = c + g[1].length, g = [this.lnum, c], f = [this.lnum, e], k = e, e = a.substring(c, e), d = a.charAt(c), -1 !== this.numchars.indexOf(d) || "." === d && "." !== e) {
                    if (this.callback(Sk.Tokenizer.Tokens.T_NUMBER, e, g, f, a)) return "done"
                } else if ("\r" === d || "\n" === d) {
                if (c = Sk.Tokenizer.Tokens.T_NEWLINE, 0 < this.parenlev && (c = Sk.Tokenizer.Tokens.T_NL), this.callback(c,
                        e, g, f, a)) return "done"
            } else if ("#" === d) {
                if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, e, g, f, a)) return "done"
            } else if (triple_quoted.hasOwnProperty(e))
                if (this.endprog = l[e], this.endprog.lastIndex = 0, f = this.endprog.test(a.substring(k))) {
                    if (k = this.endprog.lastIndex + k, e = a.substring(c, k), this.callback(Sk.Tokenizer.Tokens.T_STRING, e, g, [this.lnum, k], a)) return "done"
                } else {
                    this.strstart = [this.lnum, c];
                    this.contstr = a.substring(c);
                    this.contline = a;
                    break
                }
            else if (single_quoted.hasOwnProperty(d) || single_quoted.hasOwnProperty(e.substring(0,
                    2)) || single_quoted.hasOwnProperty(e.substring(0, 3)))
                if ("\n" === e[e.length - 1]) {
                    this.strstart = [this.lnum, c];
                    this.endprog = l[d] || l[e[1]] || l[e[2]];
                    this.contstr = a.substring(c);
                    this.needcont = !0;
                    this.contline = a;
                    break
                } else {
                    if (this.callback(Sk.Tokenizer.Tokens.T_STRING, e, g, f, a)) return "done"
                }
            else if (-1 !== this.namechars.indexOf(d)) {
                if (this.callback(Sk.Tokenizer.Tokens.T_NAME, e, g, f, a)) return "done"
            } else if ("\\" === d) {
                if (this.callback(Sk.Tokenizer.Tokens.T_NL, e, g, [this.lnum, k], a)) return "done";
                this.continued = !0
            } else {
                if (-1 !==
                    "([{".indexOf(d) ? this.parenlev += 1 : -1 !== ")]}".indexOf(d) && (this.parenlev -= 1), this.callback(Sk.Tokenizer.Tokens.T_OP, e, g, f, a)) return "done"
            } else {
                if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, a.charAt(k), [this.lnum, k], [this.lnum, k + 1], a)) return "done";
                k += 1
            }
        }
        return !1
    };
    Sk.Tokenizer.tokenNames = {
        0: "T_ENDMARKER",
        1: "T_NAME",
        2: "T_NUMBER",
        3: "T_STRING",
        4: "T_NEWLINE",
        5: "T_INDENT",
        6: "T_DEDENT",
        7: "T_LPAR",
        8: "T_RPAR",
        9: "T_LSQB",
        10: "T_RSQB",
        11: "T_COLON",
        12: "T_COMMA",
        13: "T_SEMI",
        14: "T_PLUS",
        15: "T_MINUS",
        16: "T_STAR",
        17: "T_SLASH",
        18: "T_VBAR",
        19: "T_AMPER",
        20: "T_LESS",
        21: "T_GREATER",
        22: "T_EQUAL",
        23: "T_DOT",
        24: "T_PERCENT",
        25: "T_BACKQUOTE",
        26: "T_LBRACE",
        27: "T_RBRACE",
        28: "T_EQEQUAL",
        29: "T_NOTEQUAL",
        30: "T_LESSEQUAL",
        31: "T_GREATEREQUAL",
        32: "T_TILDE",
        33: "T_CIRCUMFLEX",
        34: "T_LEFTSHIFT",
        35: "T_RIGHTSHIFT",
        36: "T_DOUBLESTAR",
        37: "T_PLUSEQUAL",
        38: "T_MINEQUAL",
        39: "T_STAREQUAL",
        40: "T_SLASHEQUAL",
        41: "T_PERCENTEQUAL",
        42: "T_AMPEREQUAL",
        43: "T_VBAREQUAL",
        44: "T_CIRCUMFLEXEQUAL",
        45: "T_LEFTSHIFTEQUAL",
        46: "T_RIGHTSHIFTEQUAL",
        47: "T_DOUBLESTAREQUAL",
        48: "T_DOUBLESLASH",
        49: "T_DOUBLESLASHEQUAL",
        50: "T_AT",
        51: "T_OP",
        52: "T_COMMENT",
        53: "T_NL",
        54: "T_RARROW",
        55: "T_ERRORTOKEN",
        56: "T_N_TOKENS",
        256: "T_NT_OFFSET"
    };
    goog.exportSymbol("Sk.Tokenizer", Sk.Tokenizer);
    goog.exportSymbol("Sk.Tokenizer.prototype.generateTokens", Sk.Tokenizer.prototype.generateTokens);
    goog.exportSymbol("Sk.Tokenizer.tokenNames", Sk.Tokenizer.tokenNames);
    Sk.OpMap = {
        "(": Sk.Tokenizer.Tokens.T_LPAR,
        ")": Sk.Tokenizer.Tokens.T_RPAR,
        "[": Sk.Tokenizer.Tokens.T_LSQB,
        "]": Sk.Tokenizer.Tokens.T_RSQB,
        ":": Sk.Tokenizer.Tokens.T_COLON,
        ",": Sk.Tokenizer.Tokens.T_COMMA,
        ";": Sk.Tokenizer.Tokens.T_SEMI,
        "+": Sk.Tokenizer.Tokens.T_PLUS,
        "-": Sk.Tokenizer.Tokens.T_MINUS,
        "*": Sk.Tokenizer.Tokens.T_STAR,
        "/": Sk.Tokenizer.Tokens.T_SLASH,
        "|": Sk.Tokenizer.Tokens.T_VBAR,
        "&": Sk.Tokenizer.Tokens.T_AMPER,
        "<": Sk.Tokenizer.Tokens.T_LESS,
        ">": Sk.Tokenizer.Tokens.T_GREATER,
        "=": Sk.Tokenizer.Tokens.T_EQUAL,
        ".": Sk.Tokenizer.Tokens.T_DOT,
        "%": Sk.Tokenizer.Tokens.T_PERCENT,
        "`": Sk.Tokenizer.Tokens.T_BACKQUOTE,
        "{": Sk.Tokenizer.Tokens.T_LBRACE,
        "}": Sk.Tokenizer.Tokens.T_RBRACE,
        "@": Sk.Tokenizer.Tokens.T_AT,
        "==": Sk.Tokenizer.Tokens.T_EQEQUAL,
        "!=": Sk.Tokenizer.Tokens.T_NOTEQUAL,
        "<>": Sk.Tokenizer.Tokens.T_NOTEQUAL,
        "<=": Sk.Tokenizer.Tokens.T_LESSEQUAL,
        ">=": Sk.Tokenizer.Tokens.T_GREATEREQUAL,
        "~": Sk.Tokenizer.Tokens.T_TILDE,
        "^": Sk.Tokenizer.Tokens.T_CIRCUMFLEX,
        "<<": Sk.Tokenizer.Tokens.T_LEFTSHIFT,
        ">>": Sk.Tokenizer.Tokens.T_RIGHTSHIFT,
        "**": Sk.Tokenizer.Tokens.T_DOUBLESTAR,
        "+=": Sk.Tokenizer.Tokens.T_PLUSEQUAL,
        "-=": Sk.Tokenizer.Tokens.T_MINEQUAL,
        "*=": Sk.Tokenizer.Tokens.T_STAREQUAL,
        "/=": Sk.Tokenizer.Tokens.T_SLASHEQUAL,
        "%=": Sk.Tokenizer.Tokens.T_PERCENTEQUAL,
        "&=": Sk.Tokenizer.Tokens.T_AMPEREQUAL,
        "|=": Sk.Tokenizer.Tokens.T_VBAREQUAL,
        "^=": Sk.Tokenizer.Tokens.T_CIRCUMFLEXEQUAL,
        "<<=": Sk.Tokenizer.Tokens.T_LEFTSHIFTEQUAL,
        ">>=": Sk.Tokenizer.Tokens.T_RIGHTSHIFTEQUAL,
        "**=": Sk.Tokenizer.Tokens.T_DOUBLESTAREQUAL,
        "//": Sk.Tokenizer.Tokens.T_DOUBLESLASH,
        "//=": Sk.Tokenizer.Tokens.T_DOUBLESLASHEQUAL,
        "->": Sk.Tokenizer.Tokens.T_RARROW
    };
    Sk.ParseTables = {
        sym: {
            and_expr: 257,
            and_test: 258,
            arglist: 259,
            argument: 260,
            arith_expr: 261,
            assert_stmt: 262,
            atom: 263,
            augassign: 264,
            break_stmt: 265,
            classdef: 266,
            comp_for: 267,
            comp_if: 268,
            comp_iter: 269,
            comp_op: 270,
            comparison: 271,
            compound_stmt: 272,
            continue_stmt: 273,
            debugger_stmt: 274,
            decorated: 275,
            decorator: 276,
            decorators: 277,
            del_stmt: 278,
            dictorsetmaker: 279,
            dotted_as_name: 280,
            dotted_as_names: 281,
            dotted_name: 282,
            encoding_decl: 283,
            eval_input: 284,
            except_clause: 285,
            exec_stmt: 286,
            expr: 287,
            expr_stmt: 288,
            exprlist: 289,
            factor: 290,
            file_input: 291,
            flow_stmt: 292,
            for_stmt: 293,
            fpdef: 294,
            fplist: 295,
            funcdef: 296,
            global_stmt: 297,
            if_stmt: 298,
            import_as_name: 299,
            import_as_names: 300,
            import_from: 301,
            import_name: 302,
            import_stmt: 303,
            lambdef: 304,
            list_for: 305,
            list_if: 306,
            list_iter: 307,
            listmaker: 308,
            not_test: 309,
            old_lambdef: 310,
            old_test: 311,
            or_test: 312,
            parameters: 313,
            pass_stmt: 314,
            power: 315,
            print_stmt: 316,
            raise_stmt: 317,
            return_stmt: 318,
            shift_expr: 319,
            simple_stmt: 320,
            single_input: 256,
            sliceop: 321,
            small_stmt: 322,
            stmt: 323,
            subscript: 324,
            subscriptlist: 325,
            suite: 326,
            term: 327,
            test: 328,
            testlist: 329,
            testlist1: 330,
            testlist_comp: 331,
            testlist_safe: 332,
            trailer: 333,
            try_stmt: 334,
            varargslist: 335,
            while_stmt: 336,
            with_item: 337,
            with_stmt: 338,
            xor_expr: 339,
            yield_expr: 340,
            yield_stmt: 341
        },
        number2symbol: {
            256: "single_input",
            257: "and_expr",
            258: "and_test",
            259: "arglist",
            260: "argument",
            261: "arith_expr",
            262: "assert_stmt",
            263: "atom",
            264: "augassign",
            265: "break_stmt",
            266: "classdef",
            267: "comp_for",
            268: "comp_if",
            269: "comp_iter",
            270: "comp_op",
            271: "comparison",
            272: "compound_stmt",
            273: "continue_stmt",
            274: "debugger_stmt",
            275: "decorated",
            276: "decorator",
            277: "decorators",
            278: "del_stmt",
            279: "dictorsetmaker",
            280: "dotted_as_name",
            281: "dotted_as_names",
            282: "dotted_name",
            283: "encoding_decl",
            284: "eval_input",
            285: "except_clause",
            286: "exec_stmt",
            287: "expr",
            288: "expr_stmt",
            289: "exprlist",
            290: "factor",
            291: "file_input",
            292: "flow_stmt",
            293: "for_stmt",
            294: "fpdef",
            295: "fplist",
            296: "funcdef",
            297: "global_stmt",
            298: "if_stmt",
            299: "import_as_name",
            300: "import_as_names",
            301: "import_from",
            302: "import_name",
            303: "import_stmt",
            304: "lambdef",
            305: "list_for",
            306: "list_if",
            307: "list_iter",
            308: "listmaker",
            309: "not_test",
            310: "old_lambdef",
            311: "old_test",
            312: "or_test",
            313: "parameters",
            314: "pass_stmt",
            315: "power",
            316: "print_stmt",
            317: "raise_stmt",
            318: "return_stmt",
            319: "shift_expr",
            320: "simple_stmt",
            321: "sliceop",
            322: "small_stmt",
            323: "stmt",
            324: "subscript",
            325: "subscriptlist",
            326: "suite",
            327: "term",
            328: "test",
            329: "testlist",
            330: "testlist1",
            331: "testlist_comp",
            332: "testlist_safe",
            333: "trailer",
            334: "try_stmt",
            335: "varargslist",
            336: "while_stmt",
            337: "with_item",
            338: "with_stmt",
            339: "xor_expr",
            340: "yield_expr",
            341: "yield_stmt"
        },
        dfas: {
            256: [
                [
                    [
                        [1, 1],
                        [2, 1],
                        [3, 2]
                    ],
                    [
                        [0, 1]
                    ],
                    [
                        [2, 1]
                    ]
                ], {
                    2: 1,
                    4: 1,
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    29: 1,
                    30: 1,
                    31: 1,
                    32: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1
                }
            ],
            257: [
                [
                    [
                        [38, 1]
                    ],
                    [
                        [39, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            258: [
                [
                    [
                        [40, 1]
                    ],
                    [
                        [41, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            259: [
                [
                    [
                        [42, 1],
                        [43,
                            2
                        ],
                        [44, 3]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [46, 5],
                        [0, 2]
                    ],
                    [
                        [45, 6]
                    ],
                    [
                        [46, 7],
                        [0, 4]
                    ],
                    [
                        [42, 1],
                        [43, 2],
                        [44, 3],
                        [0, 5]
                    ],
                    [
                        [0, 6]
                    ],
                    [
                        [43, 4],
                        [44, 3]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1,
                    42: 1,
                    44: 1
                }
            ],
            260: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [47, 2],
                        [48, 3],
                        [0, 1]
                    ],
                    [
                        [45, 3]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            261: [
                [
                    [
                        [49, 1]
                    ],
                    [
                        [26, 0],
                        [37, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            262: [
                [
                    [
                        [21, 1]
                    ],
                    [
                        [45, 2]
                    ],
                    [
                        [46, 3],
                        [0, 2]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [0, 4]
                    ]
                ], {
                    21: 1
                }
            ],
            263: [
                [
                    [
                        [19, 1],
                        [8, 2],
                        [9, 5],
                        [30, 4],
                        [14, 3],
                        [15, 6],
                        [22, 2]
                    ],
                    [
                        [19, 1],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [50, 7],
                        [51, 2]
                    ],
                    [
                        [52, 2],
                        [53, 8],
                        [54, 8]
                    ],
                    [
                        [55, 2],
                        [56, 9]
                    ],
                    [
                        [57, 10]
                    ],
                    [
                        [51, 2]
                    ],
                    [
                        [52, 2]
                    ],
                    [
                        [55, 2]
                    ],
                    [
                        [15, 2]
                    ]
                ], {
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    30: 1
                }
            ],
            264: [
                [
                    [
                        [58, 1],
                        [59, 1],
                        [60, 1],
                        [61, 1],
                        [62, 1],
                        [63, 1],
                        [64, 1],
                        [65, 1],
                        [66, 1],
                        [67, 1],
                        [68, 1],
                        [69, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    58: 1,
                    59: 1,
                    60: 1,
                    61: 1,
                    62: 1,
                    63: 1,
                    64: 1,
                    65: 1,
                    66: 1,
                    67: 1,
                    68: 1,
                    69: 1
                }
            ],
            265: [
                [
                    [
                        [33, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    33: 1
                }
            ],
            266: [
                [
                    [
                        [10, 1]
                    ],
                    [
                        [22, 2]
                    ],
                    [
                        [70, 3],
                        [30, 4]
                    ],
                    [
                        [71, 5]
                    ],
                    [
                        [52, 6],
                        [72, 7]
                    ],
                    [
                        [0, 5]
                    ],
                    [
                        [70, 3]
                    ],
                    [
                        [52, 6]
                    ]
                ], {
                    10: 1
                }
            ],
            267: [
                [
                    [
                        [29, 1]
                    ],
                    [
                        [73, 2]
                    ],
                    [
                        [74, 3]
                    ],
                    [
                        [75, 4]
                    ],
                    [
                        [76,
                            5
                        ],
                        [0, 4]
                    ],
                    [
                        [0, 5]
                    ]
                ], {
                    29: 1
                }
            ],
            268: [
                [
                    [
                        [32, 1]
                    ],
                    [
                        [77, 2]
                    ],
                    [
                        [76, 3],
                        [0, 2]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    32: 1
                }
            ],
            269: [
                [
                    [
                        [78, 1],
                        [48, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    29: 1,
                    32: 1
                }
            ],
            270: [
                [
                    [
                        [79, 1],
                        [80, 1],
                        [7, 2],
                        [81, 1],
                        [79, 1],
                        [74, 1],
                        [82, 1],
                        [83, 3],
                        [84, 1],
                        [85, 1]
                    ],
                    [
                        [0, 1]
                    ],
                    [
                        [74, 1]
                    ],
                    [
                        [7, 1],
                        [0, 3]
                    ]
                ], {
                    7: 1,
                    74: 1,
                    79: 1,
                    80: 1,
                    81: 1,
                    82: 1,
                    83: 1,
                    84: 1,
                    85: 1
                }
            ],
            271: [
                [
                    [
                        [86, 1]
                    ],
                    [
                        [87, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            272: [
                [
                    [
                        [88, 1],
                        [89, 1],
                        [90, 1],
                        [91, 1],
                        [92, 1],
                        [93, 1],
                        [94, 1],
                        [95, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    4: 1,
                    10: 1,
                    16: 1,
                    18: 1,
                    29: 1,
                    32: 1,
                    35: 1,
                    36: 1
                }
            ],
            273: [
                [
                    [
                        [34, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ],
                {
                    34: 1
                }
            ],
            274: [
                [
                    [
                        [13, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    13: 1
                }
            ],
            275: [
                [
                    [
                        [96, 1]
                    ],
                    [
                        [94, 2],
                        [91, 2]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    35: 1
                }
            ],
            276: [
                [
                    [
                        [35, 1]
                    ],
                    [
                        [97, 2]
                    ],
                    [
                        [2, 4],
                        [30, 3]
                    ],
                    [
                        [52, 5],
                        [98, 6]
                    ],
                    [
                        [0, 4]
                    ],
                    [
                        [2, 4]
                    ],
                    [
                        [52, 5]
                    ]
                ], {
                    35: 1
                }
            ],
            277: [
                [
                    [
                        [99, 1]
                    ],
                    [
                        [99, 1],
                        [0, 1]
                    ]
                ], {
                    35: 1
                }
            ],
            278: [
                [
                    [
                        [23, 1]
                    ],
                    [
                        [73, 2]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    23: 1
                }
            ],
            279: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [70, 2],
                        [48, 3],
                        [46, 4],
                        [0, 1]
                    ],
                    [
                        [45, 5]
                    ],
                    [
                        [0, 3]
                    ],
                    [
                        [45, 6],
                        [0, 4]
                    ],
                    [
                        [48, 3],
                        [46, 7],
                        [0, 5]
                    ],
                    [
                        [46, 4],
                        [0, 6]
                    ],
                    [
                        [45, 8],
                        [0, 7]
                    ],
                    [
                        [70, 9]
                    ],
                    [
                        [45, 10]
                    ],
                    [
                        [46, 7],
                        [0, 10]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            280: [
                [
                    [
                        [97, 1]
                    ],
                    [
                        [100,
                            2
                        ],
                        [0, 1]
                    ],
                    [
                        [22, 3]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    22: 1
                }
            ],
            281: [
                [
                    [
                        [101, 1]
                    ],
                    [
                        [46, 0],
                        [0, 1]
                    ]
                ], {
                    22: 1
                }
            ],
            282: [
                [
                    [
                        [22, 1]
                    ],
                    [
                        [102, 0],
                        [0, 1]
                    ]
                ], {
                    22: 1
                }
            ],
            283: [
                [
                    [
                        [22, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    22: 1
                }
            ],
            284: [
                [
                    [
                        [72, 1]
                    ],
                    [
                        [2, 1],
                        [103, 2]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            285: [
                [
                    [
                        [104, 1]
                    ],
                    [
                        [45, 2],
                        [0, 1]
                    ],
                    [
                        [100, 3],
                        [46, 3],
                        [0, 2]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [0, 4]
                    ]
                ], {
                    104: 1
                }
            ],
            286: [
                [
                    [
                        [17, 1]
                    ],
                    [
                        [86, 2]
                    ],
                    [
                        [74, 3],
                        [0, 2]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [46, 5],
                        [0, 4]
                    ],
                    [
                        [45, 6]
                    ],
                    [
                        [0, 6]
                    ]
                ], {
                    17: 1
                }
            ],
            287: [
                [
                    [
                        [105, 1]
                    ],
                    [
                        [106, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            288: [
                [
                    [
                        [72,
                            1
                        ]
                    ],
                    [
                        [107, 2],
                        [47, 3],
                        [0, 1]
                    ],
                    [
                        [72, 4],
                        [53, 4]
                    ],
                    [
                        [72, 5],
                        [53, 5]
                    ],
                    [
                        [0, 4]
                    ],
                    [
                        [47, 3],
                        [0, 5]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            289: [
                [
                    [
                        [86, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [86, 1],
                        [0, 2]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            290: [
                [
                    [
                        [37, 2],
                        [26, 2],
                        [6, 2],
                        [108, 1]
                    ],
                    [
                        [0, 1]
                    ],
                    [
                        [109, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            291: [
                [
                    [
                        [2, 0],
                        [103, 1],
                        [110, 0]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    2: 1,
                    4: 1,
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    29: 1,
                    30: 1,
                    31: 1,
                    32: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    103: 1
                }
            ],
            292: [
                [
                    [
                        [111, 1],
                        [112, 1],
                        [113, 1],
                        [114, 1],
                        [115, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    5: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1
                }
            ],
            293: [
                [
                    [
                        [29, 1]
                    ],
                    [
                        [73, 2]
                    ],
                    [
                        [74, 3]
                    ],
                    [
                        [72, 4]
                    ],
                    [
                        [70, 5]
                    ],
                    [
                        [71, 6]
                    ],
                    [
                        [116, 7],
                        [0, 6]
                    ],
                    [
                        [70, 8]
                    ],
                    [
                        [71, 9]
                    ],
                    [
                        [0, 9]
                    ]
                ], {
                    29: 1
                }
            ],
            294: [
                [
                    [
                        [30, 1],
                        [22, 2]
                    ],
                    [
                        [117, 3]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [52, 2]
                    ]
                ], {
                    22: 1,
                    30: 1
                }
            ],
            295: [
                [
                    [
                        [118, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [118, 1],
                        [0, 2]
                    ]
                ], {
                    22: 1,
                    30: 1
                }
            ],
            296: [
                [
                    [
                        [4, 1]
                    ],
                    [
                        [22, 2]
                    ],
                    [
                        [119, 3]
                    ],
                    [
                        [70, 4]
                    ],
                    [
                        [71, 5]
                    ],
                    [
                        [0, 5]
                    ]
                ], {
                    4: 1
                }
            ],
            297: [
                [
                    [
                        [28, 1]
                    ],
                    [
                        [22, 2]
                    ],
                    [
                        [46, 1],
                        [0, 2]
                    ]
                ], {
                    28: 1
                }
            ],
            298: [
                [
                    [
                        [32,
                            1
                        ]
                    ],
                    [
                        [45, 2]
                    ],
                    [
                        [70, 3]
                    ],
                    [
                        [71, 4]
                    ],
                    [
                        [116, 5],
                        [120, 1],
                        [0, 4]
                    ],
                    [
                        [70, 6]
                    ],
                    [
                        [71, 7]
                    ],
                    [
                        [0, 7]
                    ]
                ], {
                    32: 1
                }
            ],
            299: [
                [
                    [
                        [22, 1]
                    ],
                    [
                        [100, 2],
                        [0, 1]
                    ],
                    [
                        [22, 3]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    22: 1
                }
            ],
            300: [
                [
                    [
                        [121, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [121, 1],
                        [0, 2]
                    ]
                ], {
                    22: 1
                }
            ],
            301: [
                [
                    [
                        [31, 1]
                    ],
                    [
                        [97, 2],
                        [102, 3]
                    ],
                    [
                        [25, 4]
                    ],
                    [
                        [97, 2],
                        [25, 4],
                        [102, 3]
                    ],
                    [
                        [122, 5],
                        [42, 5],
                        [30, 6]
                    ],
                    [
                        [0, 5]
                    ],
                    [
                        [122, 7]
                    ],
                    [
                        [52, 5]
                    ]
                ], {
                    31: 1
                }
            ],
            302: [
                [
                    [
                        [25, 1]
                    ],
                    [
                        [123, 2]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    25: 1
                }
            ],
            303: [
                [
                    [
                        [124, 1],
                        [125, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    25: 1,
                    31: 1
                }
            ],
            304: [
                [
                    [
                        [11, 1]
                    ],
                    [
                        [70, 2],
                        [126, 3]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [70, 2]
                    ],
                    [
                        [0, 4]
                    ]
                ], {
                    11: 1
                }
            ],
            305: [
                [
                    [
                        [29, 1]
                    ],
                    [
                        [73,
                            2
                        ]
                    ],
                    [
                        [74, 3]
                    ],
                    [
                        [127, 4]
                    ],
                    [
                        [128, 5],
                        [0, 4]
                    ],
                    [
                        [0, 5]
                    ]
                ], {
                    29: 1
                }
            ],
            306: [
                [
                    [
                        [32, 1]
                    ],
                    [
                        [77, 2]
                    ],
                    [
                        [128, 3],
                        [0, 2]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    32: 1
                }
            ],
            307: [
                [
                    [
                        [129, 1],
                        [130, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    29: 1,
                    32: 1
                }
            ],
            308: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [129, 2],
                        [46, 3],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [45, 4],
                        [0, 3]
                    ],
                    [
                        [46, 3],
                        [0, 4]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            309: [
                [
                    [
                        [7, 1],
                        [131, 2]
                    ],
                    [
                        [40, 2]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            310: [
                [
                    [
                        [11, 1]
                    ],
                    [
                        [70, 2],
                        [126, 3]
                    ],
                    [
                        [77, 4]
                    ],
                    [
                        [70, 2]
                    ],
                    [
                        [0, 4]
                    ]
                ], {
                    11: 1
                }
            ],
            311: [
                [
                    [
                        [132, 1],
                        [75, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            312: [
                [
                    [
                        [133, 1]
                    ],
                    [
                        [134, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            313: [
                [
                    [
                        [30, 1]
                    ],
                    [
                        [52, 2],
                        [126, 3]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [52, 2]
                    ]
                ], {
                    30: 1
                }
            ],
            314: [
                [
                    [
                        [24, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    24: 1
                }
            ],
            315: [
                [
                    [
                        [135, 1]
                    ],
                    [
                        [44, 2],
                        [136, 1],
                        [0, 1]
                    ],
                    [
                        [109, 3]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    30: 1
                }
            ],
            316: [
                [
                    [
                        [12, 1]
                    ],
                    [
                        [45, 2],
                        [137, 3],
                        [0, 1]
                    ],
                    [
                        [46, 4],
                        [0, 2]
                    ],
                    [
                        [45, 5]
                    ],
                    [
                        [45, 2],
                        [0, 4]
                    ],
                    [
                        [46, 6],
                        [0, 5]
                    ],
                    [
                        [45, 7]
                    ],
                    [
                        [46, 8],
                        [0, 7]
                    ],
                    [
                        [45, 7],
                        [0, 8]
                    ]
                ], {
                    12: 1
                }
            ],
            317: [
                [
                    [
                        [5, 1]
                    ],
                    [
                        [45, 2],
                        [0, 1]
                    ],
                    [
                        [46, 3],
                        [0, 2]
                    ],
                    [
                        [45, 4]
                    ],
                    [
                        [46, 5],
                        [0, 4]
                    ],
                    [
                        [45, 6]
                    ],
                    [
                        [0, 6]
                    ]
                ], {
                    5: 1
                }
            ],
            318: [
                [
                    [
                        [20, 1]
                    ],
                    [
                        [72, 2],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    20: 1
                }
            ],
            319: [
                [
                    [
                        [138, 1]
                    ],
                    [
                        [139, 0],
                        [137, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            320: [
                [
                    [
                        [140, 1]
                    ],
                    [
                        [2, 2],
                        [141, 3]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [140, 1],
                        [2, 2]
                    ]
                ], {
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    17: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    30: 1,
                    31: 1,
                    33: 1,
                    34: 1,
                    37: 1
                }
            ],
            321: [
                [
                    [
                        [70, 1]
                    ],
                    [
                        [45, 2],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    70: 1
                }
            ],
            322: [
                [
                    [
                        [142, 1],
                        [143, 1],
                        [144, 1],
                        [145, 1],
                        [146, 1],
                        [147, 1],
                        [148, 1],
                        [149, 1],
                        [150, 1],
                        [151,
                            1
                        ]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    17: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    30: 1,
                    31: 1,
                    33: 1,
                    34: 1,
                    37: 1
                }
            ],
            323: [
                [
                    [
                        [1, 1],
                        [3, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    4: 1,
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    29: 1,
                    30: 1,
                    31: 1,
                    32: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1
                }
            ],
            324: [
                [
                    [
                        [45, 1],
                        [70, 2],
                        [102, 3]
                    ],
                    [
                        [70, 2],
                        [0, 1]
                    ],
                    [
                        [45, 4],
                        [152, 5],
                        [0, 2]
                    ],
                    [
                        [102, 6]
                    ],
                    [
                        [152, 5],
                        [0, 4]
                    ],
                    [
                        [0, 5]
                    ],
                    [
                        [102, 5]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1,
                    70: 1,
                    102: 1
                }
            ],
            325: [
                [
                    [
                        [153, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [153, 1],
                        [0, 2]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1,
                    70: 1,
                    102: 1
                }
            ],
            326: [
                [
                    [
                        [1, 1],
                        [2, 2]
                    ],
                    [
                        [0, 1]
                    ],
                    [
                        [154, 3]
                    ],
                    [
                        [110, 4]
                    ],
                    [
                        [155, 1],
                        [110, 4]
                    ]
                ], {
                    2: 1,
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                    15: 1,
                    17: 1,
                    19: 1,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 1,
                    28: 1,
                    30: 1,
                    31: 1,
                    33: 1,
                    34: 1,
                    37: 1
                }
            ],
            327: [
                [
                    [
                        [109, 1]
                    ],
                    [
                        [156, 0],
                        [42, 0],
                        [157, 0],
                        [158, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            328: [
                [
                    [
                        [75, 1],
                        [159, 2]
                    ],
                    [
                        [32, 3],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [75, 4]
                    ],
                    [
                        [116,
                            5
                        ]
                    ],
                    [
                        [45, 2]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            329: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [45, 1],
                        [0, 2]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            330: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [46, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            331: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [48, 2],
                        [46, 3],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ],
                    [
                        [45, 4],
                        [0, 3]
                    ],
                    [
                        [46, 3],
                        [0, 4]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            332: [
                [
                    [
                        [77, 1]
                    ],
                    [
                        [46, 2],
                        [0, 1]
                    ],
                    [
                        [77, 3]
                    ],
                    [
                        [46, 4],
                        [0, 3]
                    ],
                    [
                        [77, 3],
                        [0, 4]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            333: [
                [
                    [
                        [30, 1],
                        [102, 2],
                        [14, 3]
                    ],
                    [
                        [52, 4],
                        [98, 5]
                    ],
                    [
                        [22, 4]
                    ],
                    [
                        [160, 6]
                    ],
                    [
                        [0, 4]
                    ],
                    [
                        [52, 4]
                    ],
                    [
                        [51, 4]
                    ]
                ], {
                    14: 1,
                    30: 1,
                    102: 1
                }
            ],
            334: [
                [
                    [
                        [16, 1]
                    ],
                    [
                        [70, 2]
                    ],
                    [
                        [71, 3]
                    ],
                    [
                        [161, 4],
                        [162, 5]
                    ],
                    [
                        [70, 6]
                    ],
                    [
                        [70, 7]
                    ],
                    [
                        [71, 8]
                    ],
                    [
                        [71, 9]
                    ],
                    [
                        [161, 4],
                        [116, 10],
                        [162, 5],
                        [0, 8]
                    ],
                    [
                        [0, 9]
                    ],
                    [
                        [70, 11]
                    ],
                    [
                        [71, 12]
                    ],
                    [
                        [162, 5],
                        [0, 12]
                    ]
                ], {
                    16: 1
                }
            ],
            335: [
                [
                    [
                        [42, 1],
                        [118, 2],
                        [44, 3]
                    ],
                    [
                        [22, 4]
                    ],
                    [
                        [47, 5],
                        [46, 6],
                        [0, 2]
                    ],
                    [
                        [22, 7]
                    ],
                    [
                        [46, 8],
                        [0, 4]
                    ],
                    [
                        [45, 9]
                    ],
                    [
                        [42, 1],
                        [118, 2],
                        [44, 3],
                        [0, 6]
                    ],
                    [
                        [0, 7]
                    ],
                    [
                        [44, 3]
                    ],
                    [
                        [46, 6],
                        [0, 9]
                    ]
                ], {
                    22: 1,
                    30: 1,
                    42: 1,
                    44: 1
                }
            ],
            336: [
                [
                    [
                        [18,
                            1
                        ]
                    ],
                    [
                        [45, 2]
                    ],
                    [
                        [70, 3]
                    ],
                    [
                        [71, 4]
                    ],
                    [
                        [116, 5],
                        [0, 4]
                    ],
                    [
                        [70, 6]
                    ],
                    [
                        [71, 7]
                    ],
                    [
                        [0, 7]
                    ]
                ], {
                    18: 1
                }
            ],
            337: [
                [
                    [
                        [45, 1]
                    ],
                    [
                        [100, 2],
                        [0, 1]
                    ],
                    [
                        [86, 3]
                    ],
                    [
                        [0, 3]
                    ]
                ], {
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1,
                    11: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            338: [
                [
                    [
                        [36, 1]
                    ],
                    [
                        [163, 2]
                    ],
                    [
                        [70, 3],
                        [46, 1]
                    ],
                    [
                        [71, 4]
                    ],
                    [
                        [0, 4]
                    ]
                ], {
                    36: 1
                }
            ],
            339: [
                [
                    [
                        [164, 1]
                    ],
                    [
                        [165, 0],
                        [0, 1]
                    ]
                ], {
                    6: 1,
                    8: 1,
                    9: 1,
                    14: 1,
                    15: 1,
                    19: 1,
                    22: 1,
                    26: 1,
                    30: 1,
                    37: 1
                }
            ],
            340: [
                [
                    [
                        [27, 1]
                    ],
                    [
                        [72, 2],
                        [0, 1]
                    ],
                    [
                        [0, 2]
                    ]
                ], {
                    27: 1
                }
            ],
            341: [
                [
                    [
                        [53, 1]
                    ],
                    [
                        [0, 1]
                    ]
                ], {
                    27: 1
                }
            ]
        },
        states: [
            [
                [
                    [1, 1],
                    [2, 1],
                    [3, 2]
                ],
                [
                    [0, 1]
                ],
                [
                    [2, 1]
                ]
            ],
            [
                [
                    [38, 1]
                ],
                [
                    [39, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [40, 1]
                ],
                [
                    [41, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [42, 1],
                    [43, 2],
                    [44, 3]
                ],
                [
                    [45, 4]
                ],
                [
                    [46, 5],
                    [0, 2]
                ],
                [
                    [45, 6]
                ],
                [
                    [46, 7],
                    [0, 4]
                ],
                [
                    [42, 1],
                    [43, 2],
                    [44, 3],
                    [0, 5]
                ],
                [
                    [0, 6]
                ],
                [
                    [43, 4],
                    [44, 3]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [47, 2],
                    [48, 3],
                    [0, 1]
                ],
                [
                    [45, 3]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [49, 1]
                ],
                [
                    [26, 0],
                    [37, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [21, 1]
                ],
                [
                    [45, 2]
                ],
                [
                    [46, 3],
                    [0, 2]
                ],
                [
                    [45, 4]
                ],
                [
                    [0, 4]
                ]
            ],
            [
                [
                    [19, 1],
                    [8, 2],
                    [9, 5],
                    [30, 4],
                    [14, 3],
                    [15, 6],
                    [22, 2]
                ],
                [
                    [19, 1],
                    [0, 1]
                ],
                [
                    [0, 2]
                ],
                [
                    [50, 7],
                    [51, 2]
                ],
                [
                    [52, 2],
                    [53, 8],
                    [54, 8]
                ],
                [
                    [55, 2],
                    [56, 9]
                ],
                [
                    [57, 10]
                ],
                [
                    [51, 2]
                ],
                [
                    [52, 2]
                ],
                [
                    [55, 2]
                ],
                [
                    [15, 2]
                ]
            ],
            [
                [
                    [58, 1],
                    [59, 1],
                    [60, 1],
                    [61, 1],
                    [62, 1],
                    [63, 1],
                    [64, 1],
                    [65, 1],
                    [66, 1],
                    [67, 1],
                    [68, 1],
                    [69, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [33, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [10, 1]
                ],
                [
                    [22, 2]
                ],
                [
                    [70, 3],
                    [30, 4]
                ],
                [
                    [71, 5]
                ],
                [
                    [52, 6],
                    [72, 7]
                ],
                [
                    [0, 5]
                ],
                [
                    [70, 3]
                ],
                [
                    [52, 6]
                ]
            ],
            [
                [
                    [29, 1]
                ],
                [
                    [73, 2]
                ],
                [
                    [74, 3]
                ],
                [
                    [75, 4]
                ],
                [
                    [76, 5],
                    [0, 4]
                ],
                [
                    [0, 5]
                ]
            ],
            [
                [
                    [32, 1]
                ],
                [
                    [77, 2]
                ],
                [
                    [76, 3],
                    [0, 2]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [78, 1],
                    [48, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [79, 1],
                    [80, 1],
                    [7, 2],
                    [81, 1],
                    [79, 1],
                    [74, 1],
                    [82, 1],
                    [83, 3],
                    [84, 1],
                    [85, 1]
                ],
                [
                    [0, 1]
                ],
                [
                    [74, 1]
                ],
                [
                    [7, 1],
                    [0, 3]
                ]
            ],
            [
                [
                    [86, 1]
                ],
                [
                    [87, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [88, 1],
                    [89, 1],
                    [90, 1],
                    [91, 1],
                    [92, 1],
                    [93, 1],
                    [94, 1],
                    [95, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [34, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [13,
                        1
                    ]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [96, 1]
                ],
                [
                    [94, 2],
                    [91, 2]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [35, 1]
                ],
                [
                    [97, 2]
                ],
                [
                    [2, 4],
                    [30, 3]
                ],
                [
                    [52, 5],
                    [98, 6]
                ],
                [
                    [0, 4]
                ],
                [
                    [2, 4]
                ],
                [
                    [52, 5]
                ]
            ],
            [
                [
                    [99, 1]
                ],
                [
                    [99, 1],
                    [0, 1]
                ]
            ],
            [
                [
                    [23, 1]
                ],
                [
                    [73, 2]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [70, 2],
                    [48, 3],
                    [46, 4],
                    [0, 1]
                ],
                [
                    [45, 5]
                ],
                [
                    [0, 3]
                ],
                [
                    [45, 6],
                    [0, 4]
                ],
                [
                    [48, 3],
                    [46, 7],
                    [0, 5]
                ],
                [
                    [46, 4],
                    [0, 6]
                ],
                [
                    [45, 8],
                    [0, 7]
                ],
                [
                    [70, 9]
                ],
                [
                    [45, 10]
                ],
                [
                    [46, 7],
                    [0, 10]
                ]
            ],
            [
                [
                    [97, 1]
                ],
                [
                    [100, 2],
                    [0, 1]
                ],
                [
                    [22, 3]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [101, 1]
                ],
                [
                    [46, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [22, 1]
                ],
                [
                    [102, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [22, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [72, 1]
                ],
                [
                    [2, 1],
                    [103, 2]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [104, 1]
                ],
                [
                    [45,
                        2
                    ],
                    [0, 1]
                ],
                [
                    [100, 3],
                    [46, 3],
                    [0, 2]
                ],
                [
                    [45, 4]
                ],
                [
                    [0, 4]
                ]
            ],
            [
                [
                    [17, 1]
                ],
                [
                    [86, 2]
                ],
                [
                    [74, 3],
                    [0, 2]
                ],
                [
                    [45, 4]
                ],
                [
                    [46, 5],
                    [0, 4]
                ],
                [
                    [45, 6]
                ],
                [
                    [0, 6]
                ]
            ],
            [
                [
                    [105, 1]
                ],
                [
                    [106, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [72, 1]
                ],
                [
                    [107, 2],
                    [47, 3],
                    [0, 1]
                ],
                [
                    [72, 4],
                    [53, 4]
                ],
                [
                    [72, 5],
                    [53, 5]
                ],
                [
                    [0, 4]
                ],
                [
                    [47, 3],
                    [0, 5]
                ]
            ],
            [
                [
                    [86, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [86, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [37, 2],
                    [26, 2],
                    [6, 2],
                    [108, 1]
                ],
                [
                    [0, 1]
                ],
                [
                    [109, 1]
                ]
            ],
            [
                [
                    [2, 0],
                    [103, 1],
                    [110, 0]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [111, 1],
                    [112, 1],
                    [113, 1],
                    [114, 1],
                    [115, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [29, 1]
                ],
                [
                    [73, 2]
                ],
                [
                    [74, 3]
                ],
                [
                    [72, 4]
                ],
                [
                    [70, 5]
                ],
                [
                    [71, 6]
                ],
                [
                    [116, 7],
                    [0, 6]
                ],
                [
                    [70, 8]
                ],
                [
                    [71, 9]
                ],
                [
                    [0, 9]
                ]
            ],
            [
                [
                    [30, 1],
                    [22, 2]
                ],
                [
                    [117, 3]
                ],
                [
                    [0, 2]
                ],
                [
                    [52, 2]
                ]
            ],
            [
                [
                    [118, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [118, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [4, 1]
                ],
                [
                    [22, 2]
                ],
                [
                    [119, 3]
                ],
                [
                    [70, 4]
                ],
                [
                    [71, 5]
                ],
                [
                    [0, 5]
                ]
            ],
            [
                [
                    [28, 1]
                ],
                [
                    [22, 2]
                ],
                [
                    [46, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [32, 1]
                ],
                [
                    [45, 2]
                ],
                [
                    [70, 3]
                ],
                [
                    [71, 4]
                ],
                [
                    [116, 5],
                    [120, 1],
                    [0, 4]
                ],
                [
                    [70, 6]
                ],
                [
                    [71, 7]
                ],
                [
                    [0, 7]
                ]
            ],
            [
                [
                    [22, 1]
                ],
                [
                    [100, 2],
                    [0, 1]
                ],
                [
                    [22, 3]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [121, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [121, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [31, 1]
                ],
                [
                    [97, 2],
                    [102, 3]
                ],
                [
                    [25, 4]
                ],
                [
                    [97, 2],
                    [25, 4],
                    [102, 3]
                ],
                [
                    [122, 5],
                    [42, 5],
                    [30, 6]
                ],
                [
                    [0, 5]
                ],
                [
                    [122, 7]
                ],
                [
                    [52, 5]
                ]
            ],
            [
                [
                    [25, 1]
                ],
                [
                    [123, 2]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [124, 1],
                    [125, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [11, 1]
                ],
                [
                    [70, 2],
                    [126, 3]
                ],
                [
                    [45, 4]
                ],
                [
                    [70, 2]
                ],
                [
                    [0, 4]
                ]
            ],
            [
                [
                    [29, 1]
                ],
                [
                    [73, 2]
                ],
                [
                    [74, 3]
                ],
                [
                    [127, 4]
                ],
                [
                    [128, 5],
                    [0, 4]
                ],
                [
                    [0, 5]
                ]
            ],
            [
                [
                    [32, 1]
                ],
                [
                    [77, 2]
                ],
                [
                    [128, 3],
                    [0, 2]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [129, 1],
                    [130, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [129, 2],
                    [46, 3],
                    [0, 1]
                ],
                [
                    [0, 2]
                ],
                [
                    [45, 4],
                    [0, 3]
                ],
                [
                    [46, 3],
                    [0, 4]
                ]
            ],
            [
                [
                    [7, 1],
                    [131, 2]
                ],
                [
                    [40, 2]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [11, 1]
                ],
                [
                    [70, 2],
                    [126, 3]
                ],
                [
                    [77, 4]
                ],
                [
                    [70, 2]
                ],
                [
                    [0, 4]
                ]
            ],
            [
                [
                    [132, 1],
                    [75, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [133, 1]
                ],
                [
                    [134, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [30, 1]
                ],
                [
                    [52, 2],
                    [126, 3]
                ],
                [
                    [0, 2]
                ],
                [
                    [52, 2]
                ]
            ],
            [
                [
                    [24, 1]
                ],
                [
                    [0,
                        1
                    ]
                ]
            ],
            [
                [
                    [135, 1]
                ],
                [
                    [44, 2],
                    [136, 1],
                    [0, 1]
                ],
                [
                    [109, 3]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [12, 1]
                ],
                [
                    [45, 2],
                    [137, 3],
                    [0, 1]
                ],
                [
                    [46, 4],
                    [0, 2]
                ],
                [
                    [45, 5]
                ],
                [
                    [45, 2],
                    [0, 4]
                ],
                [
                    [46, 6],
                    [0, 5]
                ],
                [
                    [45, 7]
                ],
                [
                    [46, 8],
                    [0, 7]
                ],
                [
                    [45, 7],
                    [0, 8]
                ]
            ],
            [
                [
                    [5, 1]
                ],
                [
                    [45, 2],
                    [0, 1]
                ],
                [
                    [46, 3],
                    [0, 2]
                ],
                [
                    [45, 4]
                ],
                [
                    [46, 5],
                    [0, 4]
                ],
                [
                    [45, 6]
                ],
                [
                    [0, 6]
                ]
            ],
            [
                [
                    [20, 1]
                ],
                [
                    [72, 2],
                    [0, 1]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [138, 1]
                ],
                [
                    [139, 0],
                    [137, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [140, 1]
                ],
                [
                    [2, 2],
                    [141, 3]
                ],
                [
                    [0, 2]
                ],
                [
                    [140, 1],
                    [2, 2]
                ]
            ],
            [
                [
                    [70, 1]
                ],
                [
                    [45, 2],
                    [0, 1]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [142, 1],
                    [143, 1],
                    [144, 1],
                    [145, 1],
                    [146, 1],
                    [147, 1],
                    [148, 1],
                    [149, 1],
                    [150, 1],
                    [151,
                        1
                    ]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [1, 1],
                    [3, 1]
                ],
                [
                    [0, 1]
                ]
            ],
            [
                [
                    [45, 1],
                    [70, 2],
                    [102, 3]
                ],
                [
                    [70, 2],
                    [0, 1]
                ],
                [
                    [45, 4],
                    [152, 5],
                    [0, 2]
                ],
                [
                    [102, 6]
                ],
                [
                    [152, 5],
                    [0, 4]
                ],
                [
                    [0, 5]
                ],
                [
                    [102, 5]
                ]
            ],
            [
                [
                    [153, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [153, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [1, 1],
                    [2, 2]
                ],
                [
                    [0, 1]
                ],
                [
                    [154, 3]
                ],
                [
                    [110, 4]
                ],
                [
                    [155, 1],
                    [110, 4]
                ]
            ],
            [
                [
                    [109, 1]
                ],
                [
                    [156, 0],
                    [42, 0],
                    [157, 0],
                    [158, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [75, 1],
                    [159, 2]
                ],
                [
                    [32, 3],
                    [0, 1]
                ],
                [
                    [0, 2]
                ],
                [
                    [75, 4]
                ],
                [
                    [116, 5]
                ],
                [
                    [45, 2]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [45, 1],
                    [0, 2]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [46, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [48, 2],
                    [46, 3],
                    [0, 1]
                ],
                [
                    [0, 2]
                ],
                [
                    [45, 4],
                    [0, 3]
                ],
                [
                    [46, 3],
                    [0, 4]
                ]
            ],
            [
                [
                    [77, 1]
                ],
                [
                    [46, 2],
                    [0, 1]
                ],
                [
                    [77, 3]
                ],
                [
                    [46, 4],
                    [0, 3]
                ],
                [
                    [77, 3],
                    [0, 4]
                ]
            ],
            [
                [
                    [30, 1],
                    [102, 2],
                    [14, 3]
                ],
                [
                    [52, 4],
                    [98, 5]
                ],
                [
                    [22, 4]
                ],
                [
                    [160, 6]
                ],
                [
                    [0, 4]
                ],
                [
                    [52, 4]
                ],
                [
                    [51, 4]
                ]
            ],
            [
                [
                    [16, 1]
                ],
                [
                    [70, 2]
                ],
                [
                    [71, 3]
                ],
                [
                    [161, 4],
                    [162, 5]
                ],
                [
                    [70, 6]
                ],
                [
                    [70, 7]
                ],
                [
                    [71, 8]
                ],
                [
                    [71, 9]
                ],
                [
                    [161, 4],
                    [116, 10],
                    [162, 5],
                    [0, 8]
                ],
                [
                    [0, 9]
                ],
                [
                    [70, 11]
                ],
                [
                    [71, 12]
                ],
                [
                    [162, 5],
                    [0, 12]
                ]
            ],
            [
                [
                    [42, 1],
                    [118, 2],
                    [44, 3]
                ],
                [
                    [22, 4]
                ],
                [
                    [47, 5],
                    [46, 6],
                    [0, 2]
                ],
                [
                    [22, 7]
                ],
                [
                    [46, 8],
                    [0, 4]
                ],
                [
                    [45, 9]
                ],
                [
                    [42, 1],
                    [118, 2],
                    [44, 3],
                    [0, 6]
                ],
                [
                    [0, 7]
                ],
                [
                    [44, 3]
                ],
                [
                    [46, 6],
                    [0, 9]
                ]
            ],
            [
                [
                    [18, 1]
                ],
                [
                    [45, 2]
                ],
                [
                    [70, 3]
                ],
                [
                    [71, 4]
                ],
                [
                    [116, 5],
                    [0, 4]
                ],
                [
                    [70, 6]
                ],
                [
                    [71, 7]
                ],
                [
                    [0, 7]
                ]
            ],
            [
                [
                    [45, 1]
                ],
                [
                    [100, 2],
                    [0, 1]
                ],
                [
                    [86, 3]
                ],
                [
                    [0, 3]
                ]
            ],
            [
                [
                    [36, 1]
                ],
                [
                    [163, 2]
                ],
                [
                    [70, 3],
                    [46, 1]
                ],
                [
                    [71, 4]
                ],
                [
                    [0, 4]
                ]
            ],
            [
                [
                    [164, 1]
                ],
                [
                    [165, 0],
                    [0, 1]
                ]
            ],
            [
                [
                    [27, 1]
                ],
                [
                    [72, 2],
                    [0, 1]
                ],
                [
                    [0, 2]
                ]
            ],
            [
                [
                    [53, 1]
                ],
                [
                    [0, 1]
                ]
            ]
        ],
        labels: [
            [0, "EMPTY"],
            [320, null],
            [4, null],
            [272, null],
            [1, "def"],
            [1, "raise"],
            [32, null],
            [1, "not"],
            [2, null],
            [26, null],
            [1, "class"],
            [1, "lambda"],
            [1, "print"],
            [1, "debugger"],
            [9, null],
            [25, null],
            [1, "try"],
            [1, "exec"],
            [1, "while"],
            [3, null],
            [1, "return"],
            [1, "assert"],
            [1, null],
            [1, "del"],
            [1, "pass"],
            [1, "import"],
            [15, null],
            [1, "yield"],
            [1, "global"],
            [1, "for"],
            [7, null],
            [1, "from"],
            [1, "if"],
            [1, "break"],
            [1, "continue"],
            [50, null],
            [1, "with"],
            [14, null],
            [319, null],
            [19, null],
            [309, null],
            [1, "and"],
            [16, null],
            [260, null],
            [36, null],
            [328, null],
            [12, null],
            [22, null],
            [267, null],
            [327, null],
            [308, null],
            [10, null],
            [8, null],
            [340, null],
            [331, null],
            [27, null],
            [279, null],
            [330, null],
            [46, null],
            [39, null],
            [41, null],
            [47, null],
            [42, null],
            [43, null],
            [37, null],
            [44, null],
            [49, null],
            [45, null],
            [38, null],
            [40, null],
            [11, null],
            [326,
                null
            ],
            [329, null],
            [289, null],
            [1, "in"],
            [312, null],
            [269, null],
            [311, null],
            [268, null],
            [29, null],
            [21, null],
            [28, null],
            [30, null],
            [1, "is"],
            [31, null],
            [20, null],
            [287, null],
            [270, null],
            [334, null],
            [298, null],
            [293, null],
            [266, null],
            [338, null],
            [336, null],
            [296, null],
            [275, null],
            [277, null],
            [282, null],
            [259, null],
            [276, null],
            [1, "as"],
            [280, null],
            [23, null],
            [0, null],
            [1, "except"],
            [339, null],
            [18, null],
            [264, null],
            [315, null],
            [290, null],
            [323, null],
            [265, null],
            [273, null],
            [317, null],
            [318, null],
            [341, null],
            [1, "else"],
            [295, null],
            [294,
                null
            ],
            [313, null],
            [1, "elif"],
            [299, null],
            [300, null],
            [281, null],
            [302, null],
            [301, null],
            [335, null],
            [332, null],
            [307, null],
            [305, null],
            [306, null],
            [271, null],
            [310, null],
            [258, null],
            [1, "or"],
            [263, null],
            [333, null],
            [35, null],
            [261, null],
            [34, null],
            [322, null],
            [13, null],
            [292, null],
            [278, null],
            [288, null],
            [314, null],
            [316, null],
            [262, null],
            [286, null],
            [297, null],
            [303, null],
            [274, null],
            [321, null],
            [324, null],
            [5, null],
            [6, null],
            [48, null],
            [17, null],
            [24, null],
            [304, null],
            [325, null],
            [285, null],
            [1, "finally"],
            [337, null],
            [257, null],
            [33, null]
        ],
        keywords: {
            and: 41,
            as: 100,
            assert: 21,
            "break": 33,
            "class": 10,
            "continue": 34,
            "debugger": 13,
            def: 4,
            del: 23,
            elif: 120,
            "else": 116,
            except: 104,
            exec: 17,
            "finally": 162,
            "for": 29,
            from: 31,
            global: 28,
            "if": 32,
            "import": 25,
            "in": 74,
            is: 83,
            lambda: 11,
            not: 7,
            or: 134,
            pass: 24,
            print: 12,
            raise: 5,
            "return": 20,
            "try": 16,
            "while": 18,
            "with": 36,
            yield: 27
        },
        tokens: {
            0: 103,
            1: 22,
            2: 8,
            3: 19,
            4: 2,
            5: 154,
            6: 155,
            7: 30,
            8: 52,
            9: 14,
            10: 51,
            11: 70,
            12: 46,
            13: 141,
            14: 37,
            15: 26,
            16: 42,
            17: 157,
            18: 106,
            19: 39,
            20: 85,
            21: 80,
            22: 47,
            23: 102,
            24: 158,
            25: 15,
            26: 9,
            27: 55,
            28: 81,
            29: 79,
            30: 82,
            31: 84,
            32: 6,
            33: 165,
            34: 139,
            35: 137,
            36: 44,
            37: 64,
            38: 68,
            39: 59,
            40: 69,
            41: 60,
            42: 62,
            43: 63,
            44: 65,
            45: 67,
            46: 58,
            47: 61,
            48: 156,
            49: 66,
            50: 35
        },
        start: 256
    };

    function Parser(a, b) {
        this.filename = a;
        this.grammar = b;
        this.p_flags = 0;
        return this
    }
    Parser.FUTURE_PRINT_FUNCTION = "print_function";
    Parser.FUTURE_UNICODE_LITERALS = "unicode_literals";
    Parser.FUTURE_DIVISION = "division";
    Parser.FUTURE_ABSOLUTE_IMPORT = "absolute_import";
    Parser.FUTURE_WITH_STATEMENT = "with_statement";
    Parser.FUTURE_NESTED_SCOPES = "nested_scopes";
    Parser.FUTURE_GENERATORS = "generators";
    Parser.CO_FUTURE_PRINT_FUNCTION = 65536;
    Parser.CO_FUTURE_UNICODE_LITERALS = 131072;
    Parser.CO_FUTURE_DIVISON = 8192;
    Parser.CO_FUTURE_ABSOLUTE_IMPORT = 16384;
    Parser.CO_FUTURE_WITH_STATEMENT = 32768;
    Parser.prototype.setup = function(a) {
        a = a || this.grammar.start;
        this.stack = [{
            dfa: this.grammar.dfas[a],
            state: 0,
            node: {
                type: a,
                value: null,
                context: null,
                children: []
            }
        }];
        this.used_names = {}
    };

    function findInDfa(a, b) {
        for (var c = a.length; c--;)
            if (a[c][0] === b[0] && a[c][1] === b[1]) return !0;
        return !1
    }
    Parser.prototype.addtoken = function(a, b, c) {
        var d, e, f, g, h, k, l, m = this.classify(a, b, c);
        a: for (;;) {
            l = this.stack[this.stack.length - 1];
            d = l.dfa[0];
            k = d[l.state];
            for (h = 0; h < k.length; ++h) {
                e = k[h][0];
                g = k[h][1];
                f = this.grammar.labels[e][0];
                if (m === e) {
                    goog.asserts.assert(256 > f);
                    this.shift(a, b, g, c);
                    for (c = g; 1 === d[c].length && 0 === d[c][0][0] && d[c][0][1] === c;) {
                        this.pop();
                        if (0 === this.stack.length) return !0;
                        l = this.stack[this.stack.length - 1];
                        c = l.state;
                        d = l.dfa[0]
                    }
                    return !1
                }
                if (256 <= f && (e = this.grammar.dfas[f], e = e[1], e.hasOwnProperty(m))) {
                    this.push(f,
                        this.grammar.dfas[f], g, c);
                    continue a
                }
            }
            if (findInDfa(k, [0, l.state])) {
                if (this.pop(), 0 === this.stack.length) throw new Sk.builtin.ParseError("too much input", this.filename);
            } else throw d = c[0][0], new Sk.builtin.ParseError("කේතය ඔබ වරද්දා ඇත", this.filename, d, c);
        }
    };
    Parser.prototype.classify = function(a, b, c) {
        var d;
        if (a === Sk.Tokenizer.Tokens.T_NAME && (this.used_names[b] = !0, d = this.grammar.keywords.hasOwnProperty(b) && this.grammar.keywords[b], "print" === b && (this.p_flags & Parser.CO_FUTURE_PRINT_FUNCTION || !0 === Sk.python3) && (d = !1), d)) return d;
        d = this.grammar.tokens.hasOwnProperty(a) && this.grammar.tokens[a];
        if (!d) throw new Sk.builtin.ParseError("Gramatikas kļūda ", this.filename, c[0][0], c);
        return d
    };
    Parser.prototype.shift = function(a, b, c, d) {
        var e = this.stack[this.stack.length - 1].dfa,
            f = this.stack[this.stack.length - 1].node;
        f.children.push({
            type: a,
            value: b,
            lineno: d[0][0],
            col_offset: d[0][1],
            children: null
        });
        this.stack[this.stack.length - 1] = {
            dfa: e,
            state: c,
            node: f
        }
    };
    Parser.prototype.push = function(a, b, c, d) {
        a = {
            type: a,
            value: null,
            lineno: d[0][0],
            col_offset: d[0][1],
            children: []
        };
        this.stack[this.stack.length - 1] = {
            dfa: this.stack[this.stack.length - 1].dfa,
            state: c,
            node: this.stack[this.stack.length - 1].node
        };
        this.stack.push({
            dfa: b,
            state: 0,
            node: a
        })
    };
    Parser.prototype.pop = function() {
        var a, b = this.stack.pop().node;
        b && (0 !== this.stack.length ? (a = this.stack[this.stack.length - 1].node, a.children.push(b)) : (this.rootnode = b, this.rootnode.used_names = this.used_names))
    };

    function makeParser(a, b) {
        var c, d, e, f, g;
        void 0 === b && (b = "file_input");
        g = new Parser(a, Sk.ParseTables);
        "file_input" === b ? g.setup(Sk.ParseTables.sym.file_input) : goog.asserts.fail("todo;");
        f = Sk.Tokenizer.Tokens.T_COMMENT;
        e = Sk.Tokenizer.Tokens.T_NL;
        d = Sk.Tokenizer.Tokens.T_OP;
        c = new Sk.Tokenizer(a, "single_input" === b, function(a, b, c, h, n) {
            if (a !== f && a !== e && (a === d && (a = Sk.OpMap[b]), g.addtoken(a, b, [c, h, n]))) return !0
        });
        var h = function(a) {
            if (a = c.generateTokens(a)) {
                if ("done" !== a) throw new Sk.builtin.ParseError("incomplete input",
                    this.filename);
                return g.rootnode
            }
            return !1
        };
        h.p_flags = g.p_flags;
        return h
    }
    Sk.parse = function(a, b) {
        var c, d, e, f = makeParser(a);
        "\n" !== b.substr(b.length - 1, 1) && (b += "\n");
        e = b.split("\n");
        for (c = 0; c < e.length; ++c) d = f(e[c] + (c === e.length - 1 ? "" : "\n"));
        return {
            cst: d,
            flags: f.p_flags
        }
    };
    Sk.parseTreeDump = function(a, b) {
        var c, d;
        b = b || "";
        d = "" + b;
        if (256 <= a.type)
            for (d += Sk.ParseTables.number2symbol[a.type] + "\n", c = 0; c < a.children.length; ++c) d += Sk.parseTreeDump(a.children[c], b + "  ");
        else d += Sk.Tokenizer.tokenNames[a.type] + ": " + (new Sk.builtin.str(a.value)).$r().v + "\n";
        return d
    };
    goog.exportSymbol("Sk.parse", Sk.parse);
    goog.exportSymbol("Sk.parseTreeDump", Sk.parseTreeDump);

    function Load() {}

    function Store() {}

    function Del() {}

    function AugLoad() {}

    function AugStore() {}

    function Param() {}

    function And() {}

    function Or() {}

    function Add() {}

    function Sub() {}

    function Mult() {}

    function Div() {}

    function Mod() {}

    function Pow() {}

    function LShift() {}

    function RShift() {}

    function BitOr() {}

    function BitXor() {}

    function BitAnd() {}

    function FloorDiv() {}

    function Invert() {}

    function Not() {}

    function UAdd() {}

    function USub() {}

    function Eq() {}

    function NotEq() {}

    function Lt() {}

    function LtE() {}

    function Gt() {}

    function GtE() {}

    function Is() {}

    function IsNot() {}

    function In_() {}

    function NotIn() {}

    function Module(a) {
        this.body = a;
        return this
    }

    function Interactive(a) {
        this.body = a;
        return this
    }

    function Expression(a) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.body = a;
        return this
    }

    function Suite(a) {
        this.body = a;
        return this
    }

    function FunctionDef(a, b, c, d, e, f) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.name = a;
        this.args = b;
        this.body = c;
        this.decorator_list = d;
        this.lineno = e;
        this.col_offset = f;
        return this
    }

    function ClassDef(a, b, c, d, e, f) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.name = a;
        this.bases = b;
        this.body = c;
        this.decorator_list = d;
        this.lineno = e;
        this.col_offset = f;
        return this
    }

    function Return_(a, b, c) {
        this.value = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Delete_(a, b, c) {
        this.targets = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Assign(a, b, c, d) {
        goog.asserts.assert(null !== b && void 0 !== b);
        this.targets = a;
        this.value = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function AugAssign(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        goog.asserts.assert(null !== c && void 0 !== c);
        this.target = a;
        this.op = b;
        this.value = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Print(a, b, c, d, e) {
        this.dest = a;
        this.values = b;
        this.nl = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function For_(a, b, c, d, e, f) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.target = a;
        this.iter = b;
        this.body = c;
        this.orelse = d;
        this.lineno = e;
        this.col_offset = f;
        return this
    }

    function While_(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.test = a;
        this.body = b;
        this.orelse = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function If_(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.test = a;
        this.body = b;
        this.orelse = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function With_(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.context_expr = a;
        this.optional_vars = b;
        this.body = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Raise(a, b, c, d, e) {
        this.type = a;
        this.inst = b;
        this.tback = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function TryExcept(a, b, c, d, e) {
        this.body = a;
        this.handlers = b;
        this.orelse = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function TryFinally(a, b, c, d) {
        this.body = a;
        this.finalbody = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Assert(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.test = a;
        this.msg = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Import_(a, b, c) {
        this.names = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function ImportFrom(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.module = a;
        this.names = b;
        this.level = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Exec(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.body = a;
        this.globals = b;
        this.locals = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Global(a, b, c) {
        this.names = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Expr(a, b, c) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.value = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Pass(a, b) {
        this.lineno = a;
        this.col_offset = b;
        return this
    }

    function Break_(a, b) {
        this.lineno = a;
        this.col_offset = b;
        return this
    }

    function Continue_(a, b) {
        this.lineno = a;
        this.col_offset = b;
        return this
    }

    function Debugger_(a, b) {
        this.lineno = a;
        this.col_offset = b;
        return this
    }

    function BoolOp(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.op = a;
        this.values = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function BinOp(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        goog.asserts.assert(null !== c && void 0 !== c);
        this.left = a;
        this.op = b;
        this.right = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function UnaryOp(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.op = a;
        this.operand = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Lambda(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.args = a;
        this.body = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function IfExp(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        goog.asserts.assert(null !== c && void 0 !== c);
        this.test = a;
        this.body = b;
        this.orelse = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Dict(a, b, c, d) {
        this.keys = a;
        this.values = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Set(a, b, c) {
        this.elts = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function ListComp(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.elt = a;
        this.generators = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function SetComp(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.elt = a;
        this.generators = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function DictComp(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.key = a;
        this.value = b;
        this.generators = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function GeneratorExp(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.elt = a;
        this.generators = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Yield(a, b, c) {
        this.value = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Compare(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.left = a;
        this.ops = b;
        this.comparators = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Call(a, b, c, d, e, f, g) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.func = a;
        this.args = b;
        this.keywords = c;
        this.starargs = d;
        this.kwargs = e;
        this.lineno = f;
        this.col_offset = g;
        return this
    }

    function Repr(a, b, c) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.value = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Num(a, b, c) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.n = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Str(a, b, c) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.s = a;
        this.lineno = b;
        this.col_offset = c;
        return this
    }

    function Attribute(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        goog.asserts.assert(null !== c && void 0 !== c);
        this.value = a;
        this.attr = b;
        this.ctx = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Subscript(a, b, c, d, e) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        goog.asserts.assert(null !== c && void 0 !== c);
        this.value = a;
        this.slice = b;
        this.ctx = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function Name(a, b, c, d) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.id = a;
        this.ctx = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function List(a, b, c, d) {
        goog.asserts.assert(null !== b && void 0 !== b);
        this.elts = a;
        this.ctx = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Tuple(a, b, c, d) {
        goog.asserts.assert(null !== b && void 0 !== b);
        this.elts = a;
        this.ctx = b;
        this.lineno = c;
        this.col_offset = d;
        return this
    }

    function Ellipsis() {
        return this
    }

    function Slice(a, b, c) {
        this.lower = a;
        this.upper = b;
        this.step = c;
        return this
    }

    function ExtSlice(a) {
        this.dims = a;
        return this
    }

    function Index(a) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.value = a;
        return this
    }

    function comprehension(a, b, c) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.target = a;
        this.iter = b;
        this.ifs = c;
        return this
    }

    function ExceptHandler(a, b, c, d, e) {
        this.type = a;
        this.name = b;
        this.body = c;
        this.lineno = d;
        this.col_offset = e;
        return this
    }

    function arguments_(a, b, c, d) {
        this.args = a;
        this.vararg = b;
        this.kwarg = c;
        this.defaults = d;
        return this
    }

    function keyword(a, b) {
        goog.asserts.assert(null !== a && void 0 !== a);
        goog.asserts.assert(null !== b && void 0 !== b);
        this.arg = a;
        this.value = b;
        return this
    }

    function alias(a, b) {
        goog.asserts.assert(null !== a && void 0 !== a);
        this.name = a;
        this.asname = b;
        return this
    }
    Module.prototype._astname = "Module";
    Module.prototype._fields = ["body", function(a) {
        return a.body
    }];
    Interactive.prototype._astname = "Interactive";
    Interactive.prototype._fields = ["body", function(a) {
        return a.body
    }];
    Expression.prototype._astname = "Expression";
    Expression.prototype._fields = ["body", function(a) {
        return a.body
    }];
    Suite.prototype._astname = "Suite";
    Suite.prototype._fields = ["body", function(a) {
        return a.body
    }];
    FunctionDef.prototype._astname = "FunctionDef";
    FunctionDef.prototype._fields = ["name", function(a) {
        return a.name
    }, "args", function(a) {
        return a.args
    }, "body", function(a) {
        return a.body
    }, "decorator_list", function(a) {
        return a.decorator_list
    }];
    ClassDef.prototype._astname = "ClassDef";
    ClassDef.prototype._fields = ["name", function(a) {
        return a.name
    }, "bases", function(a) {
        return a.bases
    }, "body", function(a) {
        return a.body
    }, "decorator_list", function(a) {
        return a.decorator_list
    }];
    Return_.prototype._astname = "Return";
    Return_.prototype._fields = ["value", function(a) {
        return a.value
    }];
    Delete_.prototype._astname = "Delete";
    Delete_.prototype._fields = ["targets", function(a) {
        return a.targets
    }];
    Assign.prototype._astname = "Assign";
    Assign.prototype._fields = ["targets", function(a) {
        return a.targets
    }, "value", function(a) {
        return a.value
    }];
    AugAssign.prototype._astname = "AugAssign";
    AugAssign.prototype._fields = ["target", function(a) {
        return a.target
    }, "op", function(a) {
        return a.op
    }, "value", function(a) {
        return a.value
    }];
    Print.prototype._astname = "Print";
    Print.prototype._fields = ["dest", function(a) {
        return a.dest
    }, "values", function(a) {
        return a.values
    }, "nl", function(a) {
        return a.nl
    }];
    For_.prototype._astname = "For";
    For_.prototype._fields = ["target", function(a) {
        return a.target
    }, "iter", function(a) {
        return a.iter
    }, "body", function(a) {
        return a.body
    }, "orelse", function(a) {
        return a.orelse
    }];
    While_.prototype._astname = "While";
    While_.prototype._fields = ["test", function(a) {
        return a.test
    }, "body", function(a) {
        return a.body
    }, "orelse", function(a) {
        return a.orelse
    }];
    If_.prototype._astname = "If";
    If_.prototype._fields = ["test", function(a) {
        return a.test
    }, "body", function(a) {
        return a.body
    }, "orelse", function(a) {
        return a.orelse
    }];
    With_.prototype._astname = "With";
    With_.prototype._fields = ["context_expr", function(a) {
        return a.context_expr
    }, "optional_vars", function(a) {
        return a.optional_vars
    }, "body", function(a) {
        return a.body
    }];
    Raise.prototype._astname = "Raise";
    Raise.prototype._fields = ["type", function(a) {
        return a.type
    }, "inst", function(a) {
        return a.inst
    }, "tback", function(a) {
        return a.tback
    }];
    TryExcept.prototype._astname = "TryExcept";
    TryExcept.prototype._fields = ["body", function(a) {
        return a.body
    }, "handlers", function(a) {
        return a.handlers
    }, "orelse", function(a) {
        return a.orelse
    }];
    TryFinally.prototype._astname = "TryFinally";
    TryFinally.prototype._fields = ["body", function(a) {
        return a.body
    }, "finalbody", function(a) {
        return a.finalbody
    }];
    Assert.prototype._astname = "Assert";
    Assert.prototype._fields = ["test", function(a) {
        return a.test
    }, "msg", function(a) {
        return a.msg
    }];
    Import_.prototype._astname = "Import";
    Import_.prototype._fields = ["names", function(a) {
        return a.names
    }];
    ImportFrom.prototype._astname = "ImportFrom";
    ImportFrom.prototype._fields = ["module", function(a) {
        return a.module
    }, "names", function(a) {
        return a.names
    }, "level", function(a) {
        return a.level
    }];
    Exec.prototype._astname = "Exec";
    Exec.prototype._fields = ["body", function(a) {
        return a.body
    }, "globals", function(a) {
        return a.globals
    }, "locals", function(a) {
        return a.locals
    }];
    Global.prototype._astname = "Global";
    Global.prototype._fields = ["names", function(a) {
        return a.names
    }];
    Expr.prototype._astname = "Expr";
    Expr.prototype._fields = ["value", function(a) {
        return a.value
    }];
    Pass.prototype._astname = "Pass";
    Pass.prototype._fields = [];
    Break_.prototype._astname = "Break";
    Break_.prototype._fields = [];
    Continue_.prototype._astname = "Continue";
    Continue_.prototype._fields = [];
    Debugger_.prototype._astname = "Debugger";
    Debugger_.prototype._fields = [];
    BoolOp.prototype._astname = "BoolOp";
    BoolOp.prototype._fields = ["op", function(a) {
        return a.op
    }, "values", function(a) {
        return a.values
    }];
    BinOp.prototype._astname = "BinOp";
    BinOp.prototype._fields = ["left", function(a) {
        return a.left
    }, "op", function(a) {
        return a.op
    }, "right", function(a) {
        return a.right
    }];
    UnaryOp.prototype._astname = "UnaryOp";
    UnaryOp.prototype._fields = ["op", function(a) {
        return a.op
    }, "operand", function(a) {
        return a.operand
    }];
    Lambda.prototype._astname = "Lambda";
    Lambda.prototype._fields = ["args", function(a) {
        return a.args
    }, "body", function(a) {
        return a.body
    }];
    IfExp.prototype._astname = "IfExp";
    IfExp.prototype._fields = ["test", function(a) {
        return a.test
    }, "body", function(a) {
        return a.body
    }, "orelse", function(a) {
        return a.orelse
    }];
    Dict.prototype._astname = "Dict";
    Dict.prototype._fields = ["keys", function(a) {
        return a.keys
    }, "values", function(a) {
        return a.values
    }];
    Set.prototype._astname = "Set";
    Set.prototype._fields = ["elts", function(a) {
        return a.elts
    }];
    ListComp.prototype._astname = "ListComp";
    ListComp.prototype._fields = ["elt", function(a) {
        return a.elt
    }, "generators", function(a) {
        return a.generators
    }];
    SetComp.prototype._astname = "SetComp";
    SetComp.prototype._fields = ["elt", function(a) {
        return a.elt
    }, "generators", function(a) {
        return a.generators
    }];
    DictComp.prototype._astname = "DictComp";
    DictComp.prototype._fields = ["key", function(a) {
        return a.key
    }, "value", function(a) {
        return a.value
    }, "generators", function(a) {
        return a.generators
    }];
    GeneratorExp.prototype._astname = "GeneratorExp";
    GeneratorExp.prototype._fields = ["elt", function(a) {
        return a.elt
    }, "generators", function(a) {
        return a.generators
    }];
    Yield.prototype._astname = "Yield";
    Yield.prototype._fields = ["value", function(a) {
        return a.value
    }];
    Compare.prototype._astname = "Compare";
    Compare.prototype._fields = ["left", function(a) {
        return a.left
    }, "ops", function(a) {
        return a.ops
    }, "comparators", function(a) {
        return a.comparators
    }];
    Call.prototype._astname = "Call";
    Call.prototype._fields = ["func", function(a) {
        return a.func
    }, "args", function(a) {
        return a.args
    }, "keywords", function(a) {
        return a.keywords
    }, "starargs", function(a) {
        return a.starargs
    }, "kwargs", function(a) {
        return a.kwargs
    }];
    Repr.prototype._astname = "Repr";
    Repr.prototype._fields = ["value", function(a) {
        return a.value
    }];
    Num.prototype._astname = "Num";
    Num.prototype._fields = ["n", function(a) {
        return a.n
    }];
    Str.prototype._astname = "Str";
    Str.prototype._fields = ["s", function(a) {
        return a.s
    }];
    Attribute.prototype._astname = "Attribute";
    Attribute.prototype._fields = ["value", function(a) {
        return a.value
    }, "attr", function(a) {
        return a.attr
    }, "ctx", function(a) {
        return a.ctx
    }];
    Subscript.prototype._astname = "Subscript";
    Subscript.prototype._fields = ["value", function(a) {
        return a.value
    }, "slice", function(a) {
        return a.slice
    }, "ctx", function(a) {
        return a.ctx
    }];
    Name.prototype._astname = "Name";
    Name.prototype._fields = ["id", function(a) {
        return a.id
    }, "ctx", function(a) {
        return a.ctx
    }];
    List.prototype._astname = "List";
    List.prototype._fields = ["elts", function(a) {
        return a.elts
    }, "ctx", function(a) {
        return a.ctx
    }];
    Tuple.prototype._astname = "Tuple";
    Tuple.prototype._fields = ["elts", function(a) {
        return a.elts
    }, "ctx", function(a) {
        return a.ctx
    }];
    Load.prototype._astname = "Load";
    Load.prototype._isenum = !0;
    Store.prototype._astname = "Store";
    Store.prototype._isenum = !0;
    Del.prototype._astname = "Del";
    Del.prototype._isenum = !0;
    AugLoad.prototype._astname = "AugLoad";
    AugLoad.prototype._isenum = !0;
    AugStore.prototype._astname = "AugStore";
    AugStore.prototype._isenum = !0;
    Param.prototype._astname = "Param";
    Param.prototype._isenum = !0;
    Ellipsis.prototype._astname = "Ellipsis";
    Ellipsis.prototype._fields = [];
    Slice.prototype._astname = "Slice";
    Slice.prototype._fields = ["lower", function(a) {
        return a.lower
    }, "upper", function(a) {
        return a.upper
    }, "step", function(a) {
        return a.step
    }];
    ExtSlice.prototype._astname = "ExtSlice";
    ExtSlice.prototype._fields = ["dims", function(a) {
        return a.dims
    }];
    Index.prototype._astname = "Index";
    Index.prototype._fields = ["value", function(a) {
        return a.value
    }];
    And.prototype._astname = "And";
    And.prototype._isenum = !0;
    Or.prototype._astname = "Or";
    Or.prototype._isenum = !0;
    Add.prototype._astname = "Add";
    Add.prototype._isenum = !0;
    Sub.prototype._astname = "Sub";
    Sub.prototype._isenum = !0;
    Mult.prototype._astname = "Mult";
    Mult.prototype._isenum = !0;
    Div.prototype._astname = "Div";
    Div.prototype._isenum = !0;
    Mod.prototype._astname = "Mod";
    Mod.prototype._isenum = !0;
    Pow.prototype._astname = "Pow";
    Pow.prototype._isenum = !0;
    LShift.prototype._astname = "LShift";
    LShift.prototype._isenum = !0;
    RShift.prototype._astname = "RShift";
    RShift.prototype._isenum = !0;
    BitOr.prototype._astname = "BitOr";
    BitOr.prototype._isenum = !0;
    BitXor.prototype._astname = "BitXor";
    BitXor.prototype._isenum = !0;
    BitAnd.prototype._astname = "BitAnd";
    BitAnd.prototype._isenum = !0;
    FloorDiv.prototype._astname = "FloorDiv";
    FloorDiv.prototype._isenum = !0;
    Invert.prototype._astname = "Invert";
    Invert.prototype._isenum = !0;
    Not.prototype._astname = "Not";
    Not.prototype._isenum = !0;
    UAdd.prototype._astname = "UAdd";
    UAdd.prototype._isenum = !0;
    USub.prototype._astname = "USub";
    USub.prototype._isenum = !0;
    Eq.prototype._astname = "Eq";
    Eq.prototype._isenum = !0;
    NotEq.prototype._astname = "NotEq";
    NotEq.prototype._isenum = !0;
    Lt.prototype._astname = "Lt";
    Lt.prototype._isenum = !0;
    LtE.prototype._astname = "LtE";
    LtE.prototype._isenum = !0;
    Gt.prototype._astname = "Gt";
    Gt.prototype._isenum = !0;
    GtE.prototype._astname = "GtE";
    GtE.prototype._isenum = !0;
    Is.prototype._astname = "Is";
    Is.prototype._isenum = !0;
    IsNot.prototype._astname = "IsNot";
    IsNot.prototype._isenum = !0;
    In_.prototype._astname = "In";
    In_.prototype._isenum = !0;
    NotIn.prototype._astname = "NotIn";
    NotIn.prototype._isenum = !0;
    comprehension.prototype._astname = "comprehension";
    comprehension.prototype._fields = ["target", function(a) {
        return a.target
    }, "iter", function(a) {
        return a.iter
    }, "ifs", function(a) {
        return a.ifs
    }];
    ExceptHandler.prototype._astname = "ExceptHandler";
    ExceptHandler.prototype._fields = ["type", function(a) {
        return a.type
    }, "name", function(a) {
        return a.name
    }, "body", function(a) {
        return a.body
    }];
    arguments_.prototype._astname = "arguments";
    arguments_.prototype._fields = ["args", function(a) {
        return a.args
    }, "vararg", function(a) {
        return a.vararg
    }, "kwarg", function(a) {
        return a.kwarg
    }, "defaults", function(a) {
        return a.defaults
    }];
    keyword.prototype._astname = "keyword";
    keyword.prototype._fields = ["arg", function(a) {
        return a.arg
    }, "value", function(a) {
        return a.value
    }];
    alias.prototype._astname = "alias";
    alias.prototype._fields = ["name", function(a) {
        return a.name
    }, "asname", function(a) {
        return a.asname
    }];
    var SYM = Sk.ParseTables.sym,
        TOK = Sk.Tokenizer.Tokens,
        COMP_GENEXP = 0,
        COMP_SETCOMP = 1;

    function Compiling(a, b, c) {
        this.c_encoding = a;
        this.c_filename = b;
        this.c_flags = c || 0
    }

    function NCH(a) {
        goog.asserts.assert(void 0 !== a);
        return null === a.children ? 0 : a.children.length
    }

    function CHILD(a, b) {
        goog.asserts.assert(void 0 !== a);
        goog.asserts.assert(void 0 !== b);
        return a.children[b]
    }

    function REQ(a, b) {
        goog.asserts.assert(a.type === b, "node wasn't expected type")
    }

    function strobj(a) {
        goog.asserts.assert("string" === typeof a, "expecting string, got " + typeof a);
        return new Sk.builtin.str(a)
    }

    function numStmts(a) {
        var b, c, d;
        switch (a.type) {
            case SYM.single_input:
                if (CHILD(a, 0).type === TOK.T_NEWLINE) break;
                else return numStmts(CHILD(a, 0));
            case SYM.file_input:
                for (c = d = 0; c < NCH(a); ++c) b = CHILD(a, c), b.type === SYM.stmt && (d += numStmts(b));
                return d;
            case SYM.stmt:
                return numStmts(CHILD(a, 0));
            case SYM.compound_stmt:
                return 1;
            case SYM.simple_stmt:
                return Math.floor(NCH(a) / 2);
            case SYM.suite:
                if (1 === NCH(a)) return numStmts(CHILD(a, 0));
                d = 0;
                for (c = 2; c < NCH(a) - 1; ++c) d += numStmts(CHILD(a, c));
                return d;
            default:
                goog.asserts.fail("Non-statement found")
        }
        return 0
    }

    function forbiddenCheck(a, b, c, d) {
        if ("None" === c) throw new Sk.builtin.SyntaxError("assignment to None", a.c_filename, d);
        if ("True" === c || "False" === c) throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden", a.c_filename, d);
    }

    function setContext(a, b, c, d) {
        var e, f;
        goog.asserts.assert(c !== AugStore && c !== AugLoad);
        e = f = null;
        switch (b.constructor) {
            case Attribute:
            case Name:
                c === Store && forbiddenCheck(a, d, b.attr, d.lineno);
                b.ctx = c;
                break;
            case Subscript:
                b.ctx = c;
                break;
            case List:
                b.ctx = c;
                f = b.elts;
                break;
            case Tuple:
                if (0 === b.elts.length) throw new Sk.builtin.SyntaxError("can't assign to ()", a.c_filename, d.lineno);
                b.ctx = c;
                f = b.elts;
                break;
            case Lambda:
                e = "lambda";
                break;
            case Call:
                e = "function call";
                break;
            case BoolOp:
            case BinOp:
            case UnaryOp:
                e = "operator";
                break;
            case GeneratorExp:
                e = "generator expression";
                break;
            case Yield:
                e = "yield expression";
                break;
            case ListComp:
                e = "list comprehension";
                break;
            case SetComp:
                e = "set comprehension";
                break;
            case DictComp:
                e = "dict comprehension";
                break;
            case Dict:
            case Set:
            case Num:
            case Str:
                e = "literal";
                break;
            case Compare:
                e = "comparison";
                break;
            case Repr:
                e = "repr";
                break;
            case IfExp:
                e = "conditional expression";
                break;
            default:
                goog.asserts.fail("unhandled expression in assignment")
        }
        if (e) throw new Sk.builtin.SyntaxError("can't " + (c === Store ? "assign to" :
            "delete") + " " + e, a.c_filename, d.lineno);
        if (f)
            for (b = 0; b < f.length; ++b) setContext(a, f[b], c, d)
    }
    var operatorMap = {};
    (function() {
        operatorMap[TOK.T_VBAR] = BitOr;
        operatorMap[TOK.T_CIRCUMFLEX] = BitXor;
        operatorMap[TOK.T_AMPER] = BitAnd;
        operatorMap[TOK.T_LEFTSHIFT] = LShift;
        operatorMap[TOK.T_RIGHTSHIFT] = RShift;
        operatorMap[TOK.T_PLUS] = Add;
        operatorMap[TOK.T_MINUS] = Sub;
        operatorMap[TOK.T_STAR] = Mult;
        operatorMap[TOK.T_SLASH] = Div;
        operatorMap[TOK.T_DOUBLESLASH] = FloorDiv;
        operatorMap[TOK.T_PERCENT] = Mod
    })();

    function getOperator(a) {
        goog.asserts.assert(void 0 !== operatorMap[a.type]);
        return operatorMap[a.type]
    }

    function astForCompOp(a, b) {
        REQ(b, SYM.comp_op);
        if (1 === NCH(b)) switch (b = CHILD(b, 0), b.type) {
            case TOK.T_LESS:
                return Lt;
            case TOK.T_GREATER:
                return Gt;
            case TOK.T_EQEQUAL:
                return Eq;
            case TOK.T_LESSEQUAL:
                return LtE;
            case TOK.T_GREATEREQUAL:
                return GtE;
            case TOK.T_NOTEQUAL:
                return NotEq;
            case TOK.T_NAME:
                if ("in" === b.value) return In_;
                if ("is" === b.value) return Is
        } else if (2 === NCH(b) && CHILD(b, 0).type === TOK.T_NAME) {
            if ("in" === CHILD(b, 1).value) return NotIn;
            if ("is" === CHILD(b, 0).value) return IsNot
        }
        goog.asserts.fail("invalid comp_op")
    }

    function seqForTestlist(a, b) {
        var c, d = [];
        goog.asserts.assert(b.type === SYM.testlist || b.type === SYM.listmaker || b.type === SYM.testlist_comp || b.type === SYM.testlist_safe || b.type === SYM.testlist1);
        for (c = 0; c < NCH(b); c += 2) goog.asserts.assert(CHILD(b, c).type === SYM.test || CHILD(b, c).type === SYM.old_test), d[c / 2] = astForExpr(a, CHILD(b, c));
        return d
    }

    function astForSuite(a, b) {
        var c, d, e, f, g;
        REQ(b, SYM.suite);
        g = [];
        f = 0;
        if (CHILD(b, 0).type === SYM.simple_stmt)
            for (b = CHILD(b, 0), e = NCH(b) - 1, CHILD(b, e - 1).type === TOK.T_SEMI && (e -= 1), d = 0; d < e; d += 2) g[f++] = astForStmt(a, CHILD(b, d));
        else
            for (d = 2; d < NCH(b) - 1; ++d)
                if (e = CHILD(b, d), REQ(e, SYM.stmt), c = numStmts(e), 1 === c) g[f++] = astForStmt(a, e);
                else
                    for (e = CHILD(e, 0), REQ(e, SYM.simple_stmt), c = 0; c < NCH(e); c += 2) {
                        if (0 === NCH(CHILD(e, c))) {
                            goog.asserts.assert(c + 1 === NCH(e));
                            break
                        }
                        g[f++] = astForStmt(a, CHILD(e, c))
                    }
        goog.asserts.assert(f ===
            numStmts(b));
        return g
    }

    function astForExceptClause(a, b, c) {
        var d;
        REQ(b, SYM.except_clause);
        REQ(c, SYM.suite);
        if (1 === NCH(b)) return new ExceptHandler(null, null, astForSuite(a, c), b.lineno, b.col_offset);
        if (2 === NCH(b)) return new ExceptHandler(astForExpr(a, CHILD(b, 1)), null, astForSuite(a, c), b.lineno, b.col_offset);
        if (4 === NCH(b)) return d = astForExpr(a, CHILD(b, 3)), setContext(a, d, Store, CHILD(b, 3)), new ExceptHandler(astForExpr(a, CHILD(b, 1)), d, astForSuite(a, c), b.lineno, b.col_offset);
        goog.asserts.fail("wrong number of children for except clause")
    }

    function astForTryStmt(a, b) {
        var c, d, e;
        d = NCH(b);
        c = (d - 3) / 3;
        var f, g = [],
            h = null;
        REQ(b, SYM.try_stmt);
        f = astForSuite(a, CHILD(b, 2));
        if (CHILD(b, d - 3).type === TOK.T_NAME) "finally" === CHILD(b, d - 3).value ? (9 <= d && CHILD(b, d - 6).type === TOK.T_NAME && (g = astForSuite(a, CHILD(b, d - 4)), c--), h = astForSuite(a, CHILD(b, d - 1))) : g = astForSuite(a, CHILD(b, d - 1)), c--;
        else if (CHILD(b, d - 3).type !== SYM.except_clause) throw new Sk.builtin.SyntaxError("malformed 'try' statement", a.c_filename, b.lineno);
        if (0 < c) {
            e = [];
            for (d = 0; d < c; ++d) e[d] = astForExceptClause(a,
                CHILD(b, 3 + 3 * d), CHILD(b, 5 + 3 * d));
            c = new TryExcept(f, e, g, b.lineno, b.col_offset);
            if (!h) return c;
            f = [c]
        }
        goog.asserts.assert(null !== h);
        return new TryFinally(f, h, b.lineno, b.col_offset)
    }

    function astForDottedName(a, b) {
        var c, d, e, f, g;
        REQ(b, SYM.dotted_name);
        g = b.lineno;
        f = b.col_offset;
        e = strobj(CHILD(b, 0).value);
        d = new Name(e, Load, g, f);
        for (c = 2; c < NCH(b); c += 2) e = strobj(CHILD(b, c).value), d = new Attribute(d, e, Load, g, f);
        return d
    }

    function astForDecorator(a, b) {
        var c;
        REQ(b, SYM.decorator);
        REQ(CHILD(b, 0), TOK.T_AT);
        REQ(CHILD(b, NCH(b) - 1), TOK.T_NEWLINE);
        c = astForDottedName(a, CHILD(b, 1));
        return 3 === NCH(b) ? c : 5 === NCH(b) ? new Call(c, [], [], null, null, b.lineno, b.col_offset) : astForCall(a, CHILD(b, 3), c)
    }

    function astForDecorators(a, b) {
        var c, d;
        REQ(b, SYM.decorators);
        d = [];
        for (c = 0; c < NCH(b); ++c) d[c] = astForDecorator(a, CHILD(b, c));
        return d
    }

    function astForDecorated(a, b) {
        var c, d;
        REQ(b, SYM.decorated);
        d = astForDecorators(a, CHILD(b, 0));
        goog.asserts.assert(CHILD(b, 1).type === SYM.funcdef || CHILD(b, 1).type === SYM.classdef);
        c = null;
        CHILD(b, 1).type === SYM.funcdef ? c = astForFuncdef(a, CHILD(b, 1), d) : CHILD(b, 1) === SYM.classdef && (c = astForClassdef(a, CHILD(b, 1), d));
        c && (c.lineno = b.lineno, c.col_offset = b.col_offset);
        return c
    }

    function astForWithVar(a, b) {
        REQ(b, SYM.with_item);
        return astForExpr(a, CHILD(b, 1))
    }

    function astForWithStmt(a, b) {
        var c, d, e = 3;
        goog.asserts.assert(b.type === SYM.with_stmt);
        d = astForExpr(a, CHILD(b, 1));
        CHILD(b, 2).type === SYM.with_item && (c = astForWithVar(a, CHILD(b, 2)), setContext(a, c, Store, b), e = 4);
        return new With_(d, c, astForSuite(a, CHILD(b, e)), b.lineno, b.col_offset)
    }

    function astForExecStmt(a, b) {
        var c, d = null,
            e = null,
            f = NCH(b);
        goog.asserts.assert(2 === f || 4 === f || 6 === f);
        REQ(b, SYM.exec_stmt);
        c = astForExpr(a, CHILD(b, 1));
        4 <= f && (d = astForExpr(a, CHILD(b, 3)));
        6 === f && (e = astForExpr(a, CHILD(b, 5)));
        return new Exec(c, d, e, b.lineno, b.col_offset)
    }

    function astForIfStmt(a, b) {
        var c, d, e, f;
        REQ(b, SYM.if_stmt);
        if (4 === NCH(b)) return new If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), [], b.lineno, b.col_offset);
        e = CHILD(b, 4).value.charAt(2);
        if ("s" === e) return new If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 6)), b.lineno, b.col_offset);
        if ("i" === e) {
            f = NCH(b) - 4;
            c = !1;
            e = [];
            CHILD(b, f + 1).type === TOK.T_NAME && "s" === CHILD(b, f + 1).value.charAt(2) && (c = !0, f -= 3);
            f /= 4;
            c && (e = [new If_(astForExpr(a, CHILD(b, NCH(b) - 6)), astForSuite(a, CHILD(b,
                NCH(b) - 4)), astForSuite(a, CHILD(b, NCH(b) - 1)), CHILD(b, NCH(b) - 6).lineno, CHILD(b, NCH(b) - 6).col_offset)], f--);
            for (d = 0; d < f; ++d) c = 5 + 4 * (f - d - 1), e = [new If_(astForExpr(a, CHILD(b, c)), astForSuite(a, CHILD(b, c + 2)), e, CHILD(b, c).lineno, CHILD(b, c).col_offset)];
            return new If_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), e, b.lineno, b.col_offset)
        }
        goog.asserts.fail("unexpected token in 'if' statement")
    }

    function astForExprlist(a, b, c) {
        var d, e, f;
        REQ(b, SYM.exprlist);
        f = [];
        for (e = 0; e < NCH(b); e += 2) d = astForExpr(a, CHILD(b, e)), f[e / 2] = d, c && setContext(a, d, c, CHILD(b, e));
        return f
    }

    function astForDelStmt(a, b) {
        REQ(b, SYM.del_stmt);
        return new Delete_(astForExprlist(a, CHILD(b, 1), Del), b.lineno, b.col_offset)
    }

    function astForGlobalStmt(a, b) {
        var c, d = [];
        REQ(b, SYM.global_stmt);
        for (c = 1; c < NCH(b); c += 2) d[(c - 1) / 2] = strobj(CHILD(b, c).value);
        return new Global(d, b.lineno, b.col_offset)
    }

    function astForAssertStmt(a, b) {
        REQ(b, SYM.assert_stmt);
        if (2 === NCH(b)) return new Assert(astForExpr(a, CHILD(b, 1)), null, b.lineno, b.col_offset);
        if (4 === NCH(b)) return new Assert(astForExpr(a, CHILD(b, 1)), astForExpr(a, CHILD(b, 3)), b.lineno, b.col_offset);
        goog.asserts.fail("improper number of parts to assert stmt")
    }

    function aliasForImportName(a, b) {
        var c, d;
        a: for (;;) switch (b.type) {
            case SYM.import_as_name:
                return d = null, c = strobj(CHILD(b, 0).value), 3 === NCH(b) && (d = CHILD(b, 2).value), new alias(c, null == d ? null : strobj(d));
            case SYM.dotted_as_name:
                if (1 === NCH(b)) {
                    b = CHILD(b, 0);
                    continue a
                } else return d = aliasForImportName(a, CHILD(b, 0)), goog.asserts.assert(!d.asname), d.asname = strobj(CHILD(b, 2).value), d;
            case SYM.dotted_name:
                if (1 === NCH(b)) return new alias(strobj(CHILD(b, 0).value), null);
                d = "";
                for (c = 0; c < NCH(b); c += 2) d += CHILD(b, c).value +
                    ".";
                return new alias(strobj(d.substr(0, d.length - 1)), null);
            case TOK.T_STAR:
                return new alias(strobj("*"), null);
            default:
                throw new Sk.builtin.SyntaxError("unexpected import name", a.c_filename, b.lineno);
        }
    }

    function astForImportStmt(a, b) {
        var c, d, e, f, g, h;
        REQ(b, SYM.import_stmt);
        h = b.lineno;
        g = b.col_offset;
        b = CHILD(b, 0);
        if (b.type === SYM.import_name) {
            b = CHILD(b, 1);
            REQ(b, SYM.dotted_as_names);
            d = [];
            for (f = 0; f < NCH(b); f += 2) d[f / 2] = aliasForImportName(a, CHILD(b, f));
            return new Import_(d, h, g)
        }
        if (b.type === SYM.import_from) {
            c = null;
            e = 0;
            for (d = 1; d < NCH(b); ++d) {
                if (CHILD(b, d).type === SYM.dotted_name) {
                    c = aliasForImportName(a, CHILD(b, d));
                    d++;
                    break
                } else if (CHILD(b, d).type !== TOK.T_DOT) break;
                e++
            }++d;
            switch (CHILD(b, d).type) {
                case TOK.T_STAR:
                    b =
                        CHILD(b, d);
                    break;
                case TOK.T_LPAR:
                    b = CHILD(b, d + 1);
                    NCH(b);
                    break;
                case SYM.import_as_names:
                    b = CHILD(b, d);
                    d = NCH(b);
                    if (0 === d % 2) throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses", a.c_filename, b.lineno);
                    break;
                default:
                    throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import", a.c_filename, b.lineno);
            }
            d = [];
            if (b.type === TOK.T_STAR) d[0] = aliasForImportName(a, b);
            else
                for (f = 0; f < NCH(b); f += 2) d[f / 2] = aliasForImportName(a, CHILD(b, f));
            c = c ? c.name.v : "";
            return new ImportFrom(strobj(c),
                d, e, h, g)
        }
        throw new Sk.builtin.SyntaxError("unknown import statement", a.c_filename, b.lineno);
    }

    function astForTestlistComp(a, b) {
        goog.asserts.assert(b.type === SYM.testlist_comp || b.type === SYM.argument);
        return 1 < NCH(b) && CHILD(b, 1).type === SYM.comp_for ? astForGenExpr(a, b) : astForTestlist(a, b)
    }

    function astForListcomp(a, b) {
        function c(a, b) {
            for (var c = 0;;) {
                REQ(b, SYM.list_iter);
                if (CHILD(b, 0).type === SYM.list_for) return c;
                b = CHILD(b, 0);
                REQ(b, SYM.list_if);
                c++;
                if (2 == NCH(b)) return c;
                b = CHILD(b, 2)
            }
        }
        var d, e, f, g, h, k, l, m, p;
        REQ(b, SYM.listmaker);
        goog.asserts.assert(1 < NCH(b));
        p = astForExpr(a, CHILD(b, 0));
        m = function(a, b) {
            var c = 0,
                d = CHILD(b, 1);
            a: for (;;) {
                c++;
                REQ(d, SYM.list_for);
                if (5 === NCH(d)) d = CHILD(d, 4);
                else return c;
                b: for (;;) {
                    REQ(d, SYM.list_iter);
                    d = CHILD(d, 0);
                    if (d.type === SYM.list_for) continue a;
                    else if (d.type ===
                        SYM.list_if)
                        if (3 === NCH(d)) {
                            d = CHILD(d, 2);
                            continue b
                        } else return c;
                    break
                }
                break
            }
        }(a, b);
        l = [];
        k = CHILD(b, 1);
        for (h = 0; h < m; ++h) {
            REQ(k, SYM.list_for);
            f = CHILD(k, 1);
            e = astForExprlist(a, f, Store);
            d = astForTestlist(a, CHILD(k, 3));
            g = 1 === NCH(f) ? new comprehension(e[0], d, []) : new comprehension(new Tuple(e, Store, k.lineno, k.col_offset), d, []);
            if (5 === NCH(k)) {
                k = CHILD(k, 4);
                f = c(a, k);
                e = [];
                for (d = 0; d < f; ++d) REQ(k, SYM.list_iter), k = CHILD(k, 0), REQ(k, SYM.list_if), e[d] = astForExpr(a, CHILD(k, 1)), 3 === NCH(k) && (k = CHILD(k, 2));
                k.type === SYM.list_iter &&
                    (k = CHILD(k, 0));
                g.ifs = e
            }
            l[h] = g
        }
        return new ListComp(p, l, b.lineno, b.col_offset)
    }

    function astForFactor(a, b) {
        var c, d;
        if (CHILD(b, 0).type === TOK.T_MINUS && 2 === NCH(b) && (c = CHILD(b, 1), c.type === SYM.factor && 1 === NCH(c) && (c = CHILD(c, 0), c.type === SYM.power && 1 === NCH(c) && (d = CHILD(c, 0), d.type === SYM.atom && (c = CHILD(d, 0), c.type === TOK.T_NUMBER))))) return c.value = "-" + c.value, astForAtom(a, d);
        c = astForExpr(a, CHILD(b, 1));
        switch (CHILD(b, 0).type) {
            case TOK.T_PLUS:
                return new UnaryOp(UAdd, c, b.lineno, b.col_offset);
            case TOK.T_MINUS:
                return new UnaryOp(USub, c, b.lineno, b.col_offset);
            case TOK.T_TILDE:
                return new UnaryOp(Invert,
                    c, b.lineno, b.col_offset)
        }
        goog.asserts.fail("unhandled factor")
    }

    function astForForStmt(a, b) {
        var c, d, e = [];
        REQ(b, SYM.for_stmt);
        9 === NCH(b) && (e = astForSuite(a, CHILD(b, 8)));
        d = CHILD(b, 1);
        c = astForExprlist(a, d, Store);
        c = 1 === NCH(d) ? c[0] : new Tuple(c, Store, b.lineno, b.col_offset);
        return new For_(c, astForTestlist(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 5)), e, b.lineno, b.col_offset)
    }

    function astForCall(a, b, c) {
        var d, e, f, g, h, k, l, m, p, n, r;
        REQ(b, SYM.arglist);
        for (p = g = n = r = 0; p < NCH(b); p++) m = CHILD(b, p), m.type === SYM.argument && (1 === NCH(m) ? r++ : CHILD(m, 1).type === SYM.comp_for ? g++ : n++);
        if (1 < g || g && (r || n)) throw new Sk.builtin.SyntaxError("Generator expression must be parenthesized if not sole argument", a.c_filename, b.lineno);
        if (255 < r + n + g) throw new Sk.builtin.SyntaxError("more than 255 arguments", a.c_filename, b.lineno);
        l = [];
        k = [];
        n = r = 0;
        g = h = null;
        for (p = 0; p < NCH(b); p++)
            if (m = CHILD(b, p), m.type === SYM.argument)
                if (1 ===
                    NCH(m)) {
                    if (n) throw new Sk.builtin.SyntaxError("non-keyword arg after keyword arg", a.c_filename, b.lineno);
                    if (h) throw new Sk.builtin.SyntaxError("only named arguments may follow *expression", a.c_filename, b.lineno);
                    l[r++] = astForExpr(a, CHILD(m, 0))
                } else if (CHILD(m, 1).type === SYM.comp_for) l[r++] = astForGenExpr(a, m);
        else {
            d = astForExpr(a, CHILD(m, 0));
            if (d.constructor === Lambda) throw new Sk.builtin.SyntaxError("lambda cannot contain assignment", a.c_filename, b.lineno);
            if (d.constructor !== Name) throw new Sk.builtin.SyntaxError("keyword can't be an expression",
                a.c_filename, b.lineno);
            f = d.id;
            forbiddenCheck(a, CHILD(m, 0), f, b.lineno);
            for (e = 0; e < n; ++e)
                if (d = k[e].arg, d === f) throw new Sk.builtin.SyntaxError("keyword argument repeated", a.c_filename, b.lineno);
            k[n++] = new keyword(f, astForExpr(a, CHILD(m, 2)))
        } else m.type === TOK.T_STAR ? h = astForExpr(a, CHILD(b, ++p)) : m.type === TOK.T_DOUBLESTAR && (g = astForExpr(a, CHILD(b, ++p)));
        return new Call(c, l, k, h, g, c.lineno, c.col_offset)
    }

    function astForTrailer(a, b, c) {
        var d, e, f, g;
        REQ(b, SYM.trailer);
        if (CHILD(b, 0).type === TOK.T_LPAR) return 2 === NCH(b) ? new Call(c, [], [], null, null, b.lineno, b.col_offset) : astForCall(a, CHILD(b, 1), c);
        if (CHILD(b, 0).type === TOK.T_DOT) return new Attribute(c, strobj(CHILD(b, 1).value), Load, b.lineno, b.col_offset);
        REQ(CHILD(b, 0), TOK.T_LSQB);
        REQ(CHILD(b, 2), TOK.T_RSQB);
        b = CHILD(b, 1);
        if (1 === NCH(b)) return new Subscript(c, astForSlice(a, CHILD(b, 0)), Load, b.lineno, b.col_offset);
        g = !0;
        f = [];
        for (e = 0; e < NCH(b); e += 2) d = astForSlice(a,
            CHILD(b, e)), d.constructor !== Index && (g = !1), f[e / 2] = d;
        if (!g) return new Subscript(c, new ExtSlice(f), Load, b.lineno, b.col_offset);
        a = [];
        for (e = 0; e < f.length; ++e) d = f[e], goog.asserts.assert(d.constructor === Index && null !== d.value && void 0 !== d.value), a[e] = d.value;
        d = new Tuple(a, Load, b.lineno, b.col_offset);
        return new Subscript(c, new Index(d), Load, b.lineno, b.col_offset)
    }

    function astForFlowStmt(a, b) {
        var c;
        REQ(b, SYM.flow_stmt);
        c = CHILD(b, 0);
        switch (c.type) {
            case SYM.break_stmt:
                return new Break_(b.lineno, b.col_offset);
            case SYM.continue_stmt:
                return new Continue_(b.lineno, b.col_offset);
            case SYM.yield_stmt:
                return new Expr(astForExpr(a, CHILD(c, 0)), b.lineno, b.col_offset);
            case SYM.return_stmt:
                return 1 === NCH(c) ? new Return_(null, b.lineno, b.col_offset) : new Return_(astForTestlist(a, CHILD(c, 1)), b.lineno, b.col_offset);
            case SYM.raise_stmt:
                if (1 === NCH(c)) return new Raise(null, null, null,
                    b.lineno, b.col_offset);
                if (2 === NCH(c)) return new Raise(astForExpr(a, CHILD(c, 1)), null, null, b.lineno, b.col_offset);
                if (4 === NCH(c)) return new Raise(astForExpr(a, CHILD(c, 1)), astForExpr(a, CHILD(c, 3)), null, b.lineno, b.col_offset);
                if (6 === NCH(c)) return new Raise(astForExpr(a, CHILD(c, 1)), astForExpr(a, CHILD(c, 3)), astForExpr(a, CHILD(c, 5)), b.lineno, b.col_offset);
                break;
            default:
                goog.asserts.fail("unexpected flow_stmt")
        }
        goog.asserts.fail("unhandled flow statement")
    }

    function astForArguments(a, b) {
        var c, d, e, f, g, h, k, l, m, p = null,
            n = null;
        if (b.type === SYM.parameters) {
            if (2 === NCH(b)) return new arguments_([], null, null, []);
            b = CHILD(b, 1)
        }
        REQ(b, SYM.varargslist);
        l = [];
        k = [];
        h = !1;
        for (e = f = g = 0; g < NCH(b);) switch (m = CHILD(b, g), m.type) {
            case SYM.fpdef:
                c = 0;
                a: for (;;) {
                    if (g + 1 < NCH(b) && CHILD(b, g + 1).type === TOK.T_EQUAL) k[f++] = astForExpr(a, CHILD(b, g + 2)), g += 2, h = !0;
                    else if (h) {
                        if (c) throw new Sk.builtin.SyntaxError("parenthesized arg with default", a.c_filename, b.lineno);
                        throw new Sk.builtin.SyntaxError("non-default argument follows default argument",
                            a.c_filename, b.lineno);
                    }
                    if (3 === NCH(m)) {
                        m = CHILD(m, 1);
                        if (1 !== NCH(m)) throw new Sk.builtin.SyntaxError("tuple parameter unpacking has been removed", a.c_filename, b.lineno);
                        c = !0;
                        m = CHILD(m, 0);
                        goog.asserts.assert(m.type === SYM.fpdef);
                        continue a
                    }
                    CHILD(m, 0).type === TOK.T_NAME && (forbiddenCheck(a, b, CHILD(m, 0).value, b.lineno), d = strobj(CHILD(m, 0).value), l[e++] = new Name(d, Param, m.lineno, m.col_offset));
                    g += 2;
                    if (c) throw new Sk.builtin.SyntaxError("parenthesized argument names are invalid", a.c_filename, b.lineno);
                    break
                }
                break;
            case TOK.T_STAR:
                forbiddenCheck(a, CHILD(b, g + 1), CHILD(b, g + 1).value, b.lineno);
                p = strobj(CHILD(b, g + 1).value);
                g += 3;
                break;
            case TOK.T_DOUBLESTAR:
                forbiddenCheck(a, CHILD(b, g + 1), CHILD(b, g + 1).value, b.lineno);
                n = strobj(CHILD(b, g + 1).value);
                g += 3;
                break;
            default:
                goog.asserts.fail("unexpected node in varargslist")
        }
        return new arguments_(l, p, n, k)
    }

    function astForFuncdef(a, b, c) {
        var d, e;
        REQ(b, SYM.funcdef);
        e = strobj(CHILD(b, 1).value);
        forbiddenCheck(a, CHILD(b, 1), CHILD(b, 1).value, b.lineno);
        d = astForArguments(a, CHILD(b, 2));
        a = astForSuite(a, CHILD(b, 4));
        return new FunctionDef(e, d, a, c, b.lineno, b.col_offset)
    }

    function astForClassBases(a, b) {
        goog.asserts.assert(0 < NCH(b));
        REQ(b, SYM.testlist);
        return 1 === NCH(b) ? [astForExpr(a, CHILD(b, 0))] : seqForTestlist(a, b)
    }

    function astForClassdef(a, b, c) {
        var d, e;
        REQ(b, SYM.classdef);
        forbiddenCheck(a, b, CHILD(b, 1).value, b.lineno);
        e = strobj(CHILD(b, 1).value);
        if (4 === NCH(b)) return new ClassDef(e, [], astForSuite(a, CHILD(b, 3)), c, b.lineno, b.col_offset);
        if (CHILD(b, 3).type === TOK.T_RPAR) return new ClassDef(e, [], astForSuite(a, CHILD(b, 5)), c, b.lineno, b.col_offset);
        d = astForClassBases(a, CHILD(b, 3));
        a = astForSuite(a, CHILD(b, 6));
        return new ClassDef(e, d, a, c, b.lineno, b.col_offset)
    }

    function astForLambdef(a, b) {
        var c, d;
        3 === NCH(b) ? (c = new arguments_([], null, null, []), d = astForExpr(a, CHILD(b, 2))) : (c = astForArguments(a, CHILD(b, 1)), d = astForExpr(a, CHILD(b, 3)));
        return new Lambda(c, d, b.lineno, b.col_offset)
    }

    function astForComprehension(a, b) {
        function c(a, b) {
            for (var c = 0;;) {
                REQ(b, SYM.comp_iter);
                if (CHILD(b, 0).type === SYM.comp_for) return c;
                b = CHILD(b, 0);
                REQ(b, SYM.comp_if);
                c++;
                if (2 == NCH(b)) return c;
                b = CHILD(b, 2)
            }
        }
        var d, e, f, g, h, k, l, m;
        k = function(a, b) {
            var c = 0;
            a: for (;;) {
                c++;
                REQ(b, SYM.comp_for);
                if (5 === NCH(b)) b = CHILD(b, 4);
                else return c;
                b: for (;;) {
                    REQ(b, SYM.comp_iter);
                    b = CHILD(b, 0);
                    if (b.type === SYM.comp_for) continue a;
                    else if (b.type === SYM.comp_if)
                        if (3 === NCH(b)) {
                            b = CHILD(b, 2);
                            continue b
                        } else return c;
                    break
                }
                break
            }
            goog.asserts.fail("logic error in countCompFors")
        }(a,
            b);
        l = [];
        for (h = 0; h < k; ++h) {
            REQ(b, SYM.comp_for);
            e = CHILD(b, 1);
            d = astForExprlist(a, e, Store);
            g = astForExpr(a, CHILD(b, 3));
            m = 1 === NCH(e) ? new comprehension(d[0], g, []) : new comprehension(new Tuple(d, Store, b.lineno, b.col_offset), g, []);
            if (5 === NCH(b)) {
                b = CHILD(b, 4);
                f = c(a, b);
                e = [];
                for (d = 0; d < f; ++d) REQ(b, SYM.comp_iter), b = CHILD(b, 0), REQ(b, SYM.comp_if), g = astForExpr(a, CHILD(b, 1)), e[d] = g, 3 === NCH(b) && (b = CHILD(b, 2));
                b.type === SYM.comp_iter && (b = CHILD(b, 0));
                m.ifs = e
            }
            l[h] = m
        }
        return l
    }

    function astForIterComp(a, b, c) {
        var d;
        goog.asserts.assert(1 < NCH(b));
        d = astForExpr(a, CHILD(b, 0));
        a = astForComprehension(a, CHILD(b, 1));
        if (c === COMP_GENEXP) return new GeneratorExp(d, a, b.lineno, b.col_offset);
        if (c === COMP_SETCOMP) return new SetComp(d, a, b.lineno, b.col_offset)
    }

    function astForDictComp(a, b) {
        var c, d, e = [];
        goog.asserts.assert(3 < NCH(b));
        REQ(CHILD(b, 1), TOK.T_COLON);
        c = astForExpr(a, CHILD(b, 0));
        d = astForExpr(a, CHILD(b, 2));
        e = astForComprehension(a, CHILD(b, 3));
        return new DictComp(c, d, e, b.lineno, b.col_offset)
    }

    function astForGenExpr(a, b) {
        goog.asserts.assert(b.type === SYM.testlist_comp || b.type === SYM.argument);
        return astForIterComp(a, b, COMP_GENEXP)
    }

    function astForSetComp(a, b) {
        goog.asserts.assert(b.type === SYM.dictorsetmaker);
        return astForIterComp(a, b, COMP_SETCOMP)
    }

    function astForWhileStmt(a, b) {
        REQ(b, SYM.while_stmt);
        if (4 === NCH(b)) return new While_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), [], b.lineno, b.col_offset);
        if (7 === NCH(b)) return new While_(astForExpr(a, CHILD(b, 1)), astForSuite(a, CHILD(b, 3)), astForSuite(a, CHILD(b, 6)), b.lineno, b.col_offset);
        goog.asserts.fail("wrong number of tokens for 'while' stmt")
    }

    function astForAugassign(a, b) {
        REQ(b, SYM.augassign);
        b = CHILD(b, 0);
        switch (b.value.charAt(0)) {
            case "+":
                return Add;
            case "-":
                return Sub;
            case "/":
                return "/" === b.value.charAt(1) ? FloorDiv : Div;
            case "%":
                return Mod;
            case "<":
                return LShift;
            case ">":
                return RShift;
            case "&":
                return BitAnd;
            case "^":
                return BitXor;
            case "|":
                return BitOr;
            case "*":
                return "*" === b.value.charAt(1) ? Pow : Mult;
            default:
                goog.asserts.fail("invalid augassign")
        }
    }

    function astForBinop(a, b) {
        var c, d, e, f, g = new BinOp(astForExpr(a, CHILD(b, 0)), getOperator(CHILD(b, 1)), astForExpr(a, CHILD(b, 2)), b.lineno, b.col_offset),
            h = (NCH(b) - 1) / 2;
        for (f = 1; f < h; ++f) e = CHILD(b, 2 * f + 1), d = getOperator(e), c = astForExpr(a, CHILD(b, 2 * f + 2)), g = new BinOp(g, d, c, e.lineno, e.col_offset);
        return g
    }

    function astForTestlist(a, b) {
        goog.asserts.assert(0 < NCH(b));
        b.type === SYM.testlist_comp ? 1 < NCH(b) && goog.asserts.assert(CHILD(b, 1).type !== SYM.comp_for) : goog.asserts.assert(b.type === SYM.testlist || b.type === SYM.testlist_safe || b.type === SYM.testlist1);
        return 1 === NCH(b) ? astForExpr(a, CHILD(b, 0)) : new Tuple(seqForTestlist(a, b), Load, b.lineno, b.col_offset)
    }

    function astForExprStmt(a, b) {
        var c, d, e;
        REQ(b, SYM.expr_stmt);
        if (1 === NCH(b)) return new Expr(astForTestlist(a, CHILD(b, 0)), b.lineno, b.col_offset);
        if (CHILD(b, 1).type === SYM.augassign) {
            c = CHILD(b, 0);
            e = astForTestlist(a, c);
            switch (e.constructor) {
                case GeneratorExp:
                    throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible", a.c_filename, b.lineno);
                case Yield:
                    throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible", a.c_filename, b.lineno);
                case Name:
                    d =
                        e.id;
                    forbiddenCheck(a, c, d, b.lineno);
                    break;
                case Attribute:
                case Subscript:
                    break;
                default:
                    throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment", a.c_filename, b.lineno);
            }
            setContext(a, e, Store, c);
            c = CHILD(b, 2);
            c = c.type === SYM.testlist ? astForTestlist(a, c) : astForExpr(a, c);
            return new AugAssign(e, astForAugassign(a, CHILD(b, 1)), c, b.lineno, b.col_offset)
        }
        REQ(CHILD(b, 1), TOK.T_EQUAL);
        e = [];
        for (d = 0; d < NCH(b) - 2; d += 2) {
            c = CHILD(b, d);
            if (c.type === SYM.yield_expr) throw new Sk.builtin.SyntaxError("assignment to yield expression not possible",
                a.c_filename, b.lineno);
            c = astForTestlist(a, c);
            setContext(a, c, Store, CHILD(b, d));
            e[d / 2] = c
        }
        c = CHILD(b, NCH(b) - 1);
        c = c.type === SYM.testlist ? astForTestlist(a, c) : astForExpr(a, c);
        return new Assign(e, c, b.lineno, b.col_offset)
    }

    function astForIfexpr(a, b) {
        goog.asserts.assert(5 === NCH(b));
        return new IfExp(astForExpr(a, CHILD(b, 2)), astForExpr(a, CHILD(b, 0)), astForExpr(a, CHILD(b, 4)), b.lineno, b.col_offset)
    }

    function parsestr(a, b) {
        var c = b.charAt(0),
            d = !1,
            e = !1;
        if (a.c_flags & Parser.CO_FUTURE_UNICODE_LITERALS || !0 === Sk.python3) e = !0;
        if ("u" === c || "U" === c) b = b.substr(1), c = b.charAt(0), e = !0;
        else if ("r" === c || "R" === c) b = b.substr(1), c = b.charAt(0), d = !0;
        goog.asserts.assert("b" !== c && "B" !== c, "todo; haven't done b'' strings yet");
        goog.asserts.assert("'" === c || '"' === c && b.charAt(b.length - 1) === c);
        b = b.substr(1, b.length - 2);
        e && (b = unescape(encodeURIComponent(b)));
        4 <= b.length && (b.charAt(0) === c && b.charAt(1) === c) && (goog.asserts.assert(b.charAt(b.length -
            1) === c && b.charAt(b.length - 2) === c), b = b.substr(2, b.length - 4));
        if (d || -1 === b.indexOf("\\")) c = strobj(decodeURIComponent(escape(b)));
        else {
            for (var c = strobj, d = b, f, g, h, k, l = d.length, m = "", e = 0; e < l; ++e) f = d.charAt(e), "\\" === f ? (++e, f = d.charAt(e), "n" === f ? m += "\n" : "\\" === f ? m += "\\" : "t" === f ? m += "\t" : "r" === f ? m += "\r" : "b" === f ? m += "\b" : "f" === f ? m += "\f" : "v" === f ? m += "\v" : "0" === f ? m += "\x00" : '"' === f ? m += '"' : "'" === f ? m += "'" : "\n" !== f && ("x" === f ? (k = d.charAt(++e), h = d.charAt(++e), m += String.fromCharCode(parseInt(k + h, 16))) : "u" === f || "U" ===
                f ? (k = d.charAt(++e), h = d.charAt(++e), g = d.charAt(++e), f = d.charAt(++e), m += String.fromCharCode(parseInt(k + h, 16), parseInt(g + f, 16))) : m += "\\" + f)) : m += f;
            c = c(m)
        }
        return c
    }

    function parsestrplus(a, b) {
        var c, d;
        REQ(CHILD(b, 0), TOK.T_STRING);
        d = new Sk.builtin.str("");
        for (c = 0; c < NCH(b); ++c) try {
            d = d.sq$concat(parsestr(a, CHILD(b, c).value))
        } catch (e) {
            throw new Sk.builtin.SyntaxError("invalid string (possibly contains a unicode character)", a.c_filename, CHILD(b, c).lineno);
        }
        return d
    }

    function parsenumber(a, b, c) {
        a = b.charAt(b.length - 1);
        if ("j" === a || "J" === a) return Sk.builtin.complex.complex_subtype_from_string(b);
        if ("l" === a || "L" === a) return Sk.longFromStr(b.substr(0, b.length - 1), 0);
        if (-1 !== b.indexOf(".")) return new Sk.builtin.float_(parseFloat(b));
        c = b;
        a = !1;
        "-" === b.charAt(0) && (c = b.substr(1), a = !0);
        if ("0" !== c.charAt(0) || "x" !== c.charAt(1) && "X" !== c.charAt(1)) {
            if (-1 !== b.indexOf("e") || -1 !== b.indexOf("E")) return new Sk.builtin.float_(parseFloat(b));
            if ("0" !== c.charAt(0) || "b" !== c.charAt(1) &&
                "B" !== c.charAt(1))
                if ("0" === c.charAt(0))
                    if ("0" === c) c = 0;
                    else {
                        c = c.substring(1);
                        if ("o" === c.charAt(0) || "O" === c.charAt(0)) c = c.substring(1);
                        c = parseInt(c, 8)
                    }
            else c = parseInt(c, 10);
            else c = c.substring(2), c = parseInt(c, 2)
        } else c = c.substring(2), c = parseInt(c, 16);
        return c > Sk.builtin.int_.threshold$ && Math.floor(c) === c && -1 === b.indexOf("e") && -1 === b.indexOf("E") ? Sk.longFromStr(b, 0) : a ? new Sk.builtin.int_(-c) : new Sk.builtin.int_(c)
    }

    function astForSlice(a, b) {
        var c, d, e, f;
        REQ(b, SYM.subscript);
        c = CHILD(b, 0);
        d = e = f = null;
        if (c.type === TOK.T_DOT) return new Ellipsis;
        if (1 === NCH(b) && c.type === SYM.test) return new Index(astForExpr(a, c));
        c.type === SYM.test && (f = astForExpr(a, c));
        c.type === TOK.T_COLON ? 1 < NCH(b) && (c = CHILD(b, 1), c.type === SYM.test && (e = astForExpr(a, c))) : 2 < NCH(b) && (c = CHILD(b, 2), c.type === SYM.test && (e = astForExpr(a, c)));
        c = CHILD(b, NCH(b) - 1);
        c.type === SYM.sliceop && (1 === NCH(c) ? (c = CHILD(c, 0), d = new Name(strobj("None"), Load, c.lineno, c.col_offset)) :
            (c = CHILD(c, 1), c.type === SYM.test && (d = astForExpr(a, c))));
        return new Slice(f, e, d)
    }

    function astForAtom(a, b) {
        var c, d, e, f = CHILD(b, 0);
        switch (f.type) {
            case TOK.T_NAME:
                return new Name(strobj(f.value), Load, b.lineno, b.col_offset);
            case TOK.T_STRING:
                return new Str(parsestrplus(a, b), b.lineno, b.col_offset);
            case TOK.T_NUMBER:
                return new Num(parsenumber(a, f.value, b.lineno), b.lineno, b.col_offset);
            case TOK.T_LPAR:
                return f = CHILD(b, 1), f.type === TOK.T_RPAR ? new Tuple([], Load, b.lineno, b.col_offset) : f.type === SYM.yield_expr ? astForExpr(a, f) : astForTestlistComp(a, f);
            case TOK.T_LSQB:
                f = CHILD(b, 1);
                if (f.type ===
                    TOK.T_RSQB) return new List([], Load, b.lineno, b.col_offset);
                REQ(f, SYM.listmaker);
                return 1 === NCH(f) || CHILD(f, 1).type === TOK.T_COMMA ? new List(seqForTestlist(a, f), Load, b.lineno, b.col_offset) : astForListcomp(a, f);
            case TOK.T_LBRACE:
                e = [];
                d = [];
                f = CHILD(b, 1);
                if (b.type === TOK.T_RBRACE) return new Dict([], null, b.lineno, b.col_offset);
                if (1 === NCH(f) || 0 !== NCH(f) && CHILD(f, 1).type === TOK.T_COMMA) {
                    d = [];
                    NCH(f);
                    for (c = 0; c < NCH(f); c += 2) e = astForExpr(a, CHILD(f, c)), d[c / 2] = e;
                    return new Set(d, b.lineno, b.col_offset)
                }
                if (0 !== NCH(f) &&
                    CHILD(f, 1).type == SYM.comp_for) return astForSetComp(a, f);
                if (3 < NCH(f) && CHILD(f, 3).type === SYM.comp_for) return astForDictComp(a, f);
                NCH(f);
                for (c = 0; c < NCH(f); c += 4) e[c / 4] = astForExpr(a, CHILD(f, c)), d[c / 4] = astForExpr(a, CHILD(f, c + 2));
                return new Dict(e, d, b.lineno, b.col_offset);
            case TOK.T_BACKQUOTE:
                return new Repr(astForTestlist(a, CHILD(b, 1)), b.lineno, b.col_offset);
            default:
                goog.asserts.fail("unhandled atom", f.type)
        }
    }

    function astForPower(a, b) {
        var c, d, e;
        REQ(b, SYM.power);
        e = astForAtom(a, CHILD(b, 0));
        if (1 === NCH(b)) return e;
        for (c = 1; c < NCH(b); ++c) {
            d = CHILD(b, c);
            if (d.type !== SYM.trailer) break;
            d = astForTrailer(a, d, e);
            d.lineno = e.lineno;
            d.col_offset = e.col_offset;
            e = d
        }
        CHILD(b, NCH(b) - 1).type === SYM.factor && (c = astForExpr(a, CHILD(b, NCH(b) - 1)), e = new BinOp(e, Pow, c, b.lineno, b.col_offset));
        return e
    }

    function astForExpr(a, b) {
        var c, d, e;
        a: for (;;) {
            switch (b.type) {
                case SYM.test:
                case SYM.old_test:
                    if (CHILD(b, 0).type === SYM.lambdef || CHILD(b, 0).type === SYM.old_lambdef) return astForLambdef(a, CHILD(b, 0));
                    if (1 < NCH(b)) return astForIfexpr(a, b);
                case SYM.or_test:
                case SYM.and_test:
                    if (1 === NCH(b)) {
                        b = CHILD(b, 0);
                        continue a
                    }
                    d = [];
                    for (c = 0; c < NCH(b); c += 2) d[c / 2] = astForExpr(a, CHILD(b, c));
                    if ("and" === CHILD(b, 1).value) return new BoolOp(And, d, b.lineno, b.col_offset);
                    goog.asserts.assert("or" === CHILD(b, 1).value);
                    return new BoolOp(Or,
                        d, b.lineno, b.col_offset);
                case SYM.not_test:
                    if (1 === NCH(b)) {
                        b = CHILD(b, 0);
                        continue a
                    } else return new UnaryOp(Not, astForExpr(a, CHILD(b, 1)), b.lineno, b.col_offset);
                case SYM.comparison:
                    if (1 === NCH(b)) {
                        b = CHILD(b, 0);
                        continue a
                    } else {
                        e = [];
                        d = [];
                        for (c = 1; c < NCH(b); c += 2) e[(c - 1) / 2] = astForCompOp(a, CHILD(b, c)), d[(c - 1) / 2] = astForExpr(a, CHILD(b, c + 1));
                        return new Compare(astForExpr(a, CHILD(b, 0)), e, d, b.lineno, b.col_offset)
                    }
                case SYM.expr:
                case SYM.xor_expr:
                case SYM.and_expr:
                case SYM.shift_expr:
                case SYM.arith_expr:
                case SYM.term:
                    if (1 ===
                        NCH(b)) {
                        b = CHILD(b, 0);
                        continue a
                    }
                    return astForBinop(a, b);
                case SYM.yield_expr:
                    return c = null, 2 === NCH(b) && (c = astForTestlist(a, CHILD(b, 1))), new Yield(c, b.lineno, b.col_offset);
                case SYM.factor:
                    if (1 === NCH(b)) {
                        b = CHILD(b, 0);
                        continue a
                    }
                    return astForFactor(a, b);
                case SYM.power:
                    return astForPower(a, b);
                default:
                    goog.asserts.fail("unhandled expr", "n.type: %d", b.type)
            }
            break
        }
    }

    function astForPrintStmt(a, b) {
        var c, d, e;
        c = 1;
        var f = null;
        REQ(b, SYM.print_stmt);
        2 <= NCH(b) && CHILD(b, 1).type === TOK.T_RIGHTSHIFT && (f = astForExpr(a, CHILD(b, 2)), c = 4);
        e = [];
        for (d = 0; c < NCH(b); c += 2, ++d) e[d] = astForExpr(a, CHILD(b, c));
        c = CHILD(b, NCH(b) - 1).type === TOK.T_COMMA ? !1 : !0;
        return new Print(f, e, c, b.lineno, b.col_offset)
    }

    function astForStmt(a, b) {
        var c;
        b.type === SYM.stmt && (goog.asserts.assert(1 === NCH(b)), b = CHILD(b, 0));
        b.type === SYM.simple_stmt && (goog.asserts.assert(1 === numStmts(b)), b = CHILD(b, 0));
        if (b.type === SYM.small_stmt) switch (REQ(b, SYM.small_stmt), b = CHILD(b, 0), b.type) {
            case SYM.expr_stmt:
                return astForExprStmt(a, b);
            case SYM.print_stmt:
                return astForPrintStmt(a, b);
            case SYM.del_stmt:
                return astForDelStmt(a, b);
            case SYM.pass_stmt:
                return new Pass(b.lineno, b.col_offset);
            case SYM.flow_stmt:
                return astForFlowStmt(a, b);
            case SYM.import_stmt:
                return astForImportStmt(a,
                    b);
            case SYM.global_stmt:
                return astForGlobalStmt(a, b);
            case SYM.exec_stmt:
                return astForExecStmt(a, b);
            case SYM.assert_stmt:
                return astForAssertStmt(a, b);
            case SYM.debugger_stmt:
                return new Debugger_(b.lineno, b.col_offset);
            default:
                goog.asserts.fail("unhandled small_stmt")
        } else switch (c = CHILD(b, 0), REQ(b, SYM.compound_stmt), c.type) {
            case SYM.if_stmt:
                return astForIfStmt(a, c);
            case SYM.while_stmt:
                return astForWhileStmt(a, c);
            case SYM.for_stmt:
                return astForForStmt(a, c);
            case SYM.try_stmt:
                return astForTryStmt(a, c);
            case SYM.with_stmt:
                return astForWithStmt(a, c);
            case SYM.funcdef:
                return astForFuncdef(a, c, []);
            case SYM.classdef:
                return astForClassdef(a, c, []);
            case SYM.decorated:
                return astForDecorated(a, c);
            default:
                goog.asserts.assert("unhandled compound_stmt")
        }
    }
    Sk.astFromParse = function(a, b, c) {
        var d, e, f = new Compiling("utf-8", b, c),
            g = [],
            h = 0;
        switch (a.type) {
            case SYM.file_input:
                for (e = 0; e < NCH(a) - 1; ++e)
                    if (d = CHILD(a, e), a.type !== TOK.T_NEWLINE)
                        if (REQ(d, SYM.stmt), c = numStmts(d), 1 === c) g[h++] = astForStmt(f, d);
                        else
                            for (d = CHILD(d, 0), REQ(d, SYM.simple_stmt), b = 0; b < c; ++b) g[h++] = astForStmt(f, CHILD(d, 2 * b));
                return new Module(g);
            case SYM.eval_input:
                goog.asserts.fail("todo;");
            case SYM.single_input:
                goog.asserts.fail("todo;");
            default:
                goog.asserts.fail("todo;")
        }
    };
    Sk.astDump = function(a) {
        var b = function(a) {
                var b, c = "";
                for (b = 0; b < a; ++b) c += " ";
                return c
            },
            c = function(a, e) {
                var f, g, h, k, l, m;
                if (null === a) return e + "None";
                if (a.prototype && void 0 !== a.prototype._astname && a.prototype._isenum) return e + a.prototype._astname + "()";
                if (void 0 !== a._astname) {
                    h = b(a._astname.length + 1);
                    g = [];
                    for (f = 0; f < a._fields.length; f += 2) m = a._fields[f], l = a._fields[f + 1](a), k = b(m.length + 1), g.push([m, c(l, e + h + k)]);
                    l = [];
                    for (f = 0; f < g.length; ++f) k = g[f], l.push(k[0] + "=" + k[1].replace(/^\s+/, ""));
                    f = l.join(",\n" + e + h);
                    return e + a._astname + "(" + f + ")"
                }
                if (goog.isArrayLike(a)) {
                    h = [];
                    for (f = 0; f < a.length; ++f) g = a[f], h.push(c(g, e + " "));
                    f = h.join(",\n");
                    return e + "[" + f.replace(/^\s+/, "") + "]"
                }
                f = !0 === a ? "True" : !1 === a ? "False" : a instanceof Sk.builtin.lng ? a.tp$str().v : a instanceof Sk.builtin.str ? a.$r().v : "" + a;
                return e + f
            };
        return c(a, "")
    };
    goog.exportSymbol("Sk.astFromParse", Sk.astFromParse);
    goog.exportSymbol("Sk.astDump", Sk.astDump);
    var DEF_GLOBAL = 1,
        DEF_LOCAL = 2,
        DEF_PARAM = 4,
        USE = 8,
        DEF_STAR = 16,
        DEF_DOUBLESTAR = 32,
        DEF_INTUPLE = 64,
        DEF_FREE = 128,
        DEF_FREE_GLOBAL = 256,
        DEF_FREE_CLASS = 512,
        DEF_IMPORT = 1024,
        DEF_BOUND = DEF_LOCAL | DEF_PARAM | DEF_IMPORT,
        SCOPE_OFF = 11,
        SCOPE_MASK = 7,
        LOCAL = 1,
        GLOBAL_EXPLICIT = 2,
        GLOBAL_IMPLICIT = 3,
        FREE = 4,
        CELL = 5,
        OPT_IMPORT_STAR = 1,
        OPT_EXEC = 2,
        OPT_BARE_EXEC = 4,
        OPT_TOPLEVEL = 8,
        GENERATOR = 2,
        GENERATOR_EXPRESSION = 2,
        ModuleBlock = "module",
        FunctionBlock = "function",
        ClassBlock = "class";

    function Symbol(a, b, c) {
        this.__name = a;
        this.__flags = b;
        this.__scope = b >> SCOPE_OFF & SCOPE_MASK;
        this.__namespaces = c || []
    }
    Symbol.prototype.get_name = function() {
        return this.__name
    };
    Symbol.prototype.is_referenced = function() {
        return !!(this.__flags & USE)
    };
    Symbol.prototype.is_parameter = function() {
        return !!(this.__flags & DEF_PARAM)
    };
    Symbol.prototype.is_global = function() {
        return this.__scope === GLOBAL_IMPLICIT || this.__scope == GLOBAL_EXPLICIT
    };
    Symbol.prototype.is_declared_global = function() {
        return this.__scope == GLOBAL_EXPLICIT
    };
    Symbol.prototype.is_local = function() {
        return !!(this.__flags & DEF_BOUND)
    };
    Symbol.prototype.is_free = function() {
        return this.__scope == FREE
    };
    Symbol.prototype.is_imported = function() {
        return !!(this.__flags & DEF_IMPORT)
    };
    Symbol.prototype.is_assigned = function() {
        return !!(this.__flags & DEF_LOCAL)
    };
    Symbol.prototype.is_namespace = function() {
        return this.__namespaces && 0 < this.__namespaces.length
    };
    Symbol.prototype.get_namespaces = function() {
        return this.__namespaces
    };
    var astScopeCounter = 0;

    function SymbolTableScope(a, b, c, d, e) {
        this.symFlags = {};
        this.name = b;
        this.varnames = [];
        this.children = [];
        this.blockType = c;
        this.returnsValue = this.varkeywords = this.varargs = this.generator = this.childHasFree = this.hasFree = this.isNested = !1;
        this.lineno = e;
        this.table = a;
        a.cur && (a.cur.nested || a.cur.blockType === FunctionBlock) && (this.isNested = !0);
        d.scopeId = astScopeCounter++;
        a.stss[d.scopeId] = this;
        this.symbols = {}
    }
    SymbolTableScope.prototype.get_type = function() {
        return this.blockType
    };
    SymbolTableScope.prototype.get_name = function() {
        return this.name
    };
    SymbolTableScope.prototype.get_lineno = function() {
        return this.lineno
    };
    SymbolTableScope.prototype.is_nested = function() {
        return this.isNested
    };
    SymbolTableScope.prototype.has_children = function() {
        return 0 < this.children.length
    };
    SymbolTableScope.prototype.get_identifiers = function() {
        return this._identsMatching(function() {
            return !0
        })
    };
    SymbolTableScope.prototype.lookup = function(a) {
        var b, c;
        this.symbols.hasOwnProperty(a) ? a = this.symbols[a] : (c = this.symFlags[a], b = this.__check_children(a), a = this.symbols[a] = new Symbol(a, c, b));
        return a
    };
    SymbolTableScope.prototype.__check_children = function(a) {
        var b, c, d = [];
        for (c = 0; c < this.children.length; ++c) b = this.children[c], b.name === a && d.push(b);
        return d
    };
    SymbolTableScope.prototype._identsMatching = function(a) {
        var b, c = [];
        for (b in this.symFlags) this.symFlags.hasOwnProperty(b) && a(this.symFlags[b]) && c.push(b);
        c.sort();
        return c
    };
    SymbolTableScope.prototype.get_parameters = function() {
        goog.asserts.assert("function" == this.get_type(), "get_parameters only valid for function scopes");
        this._funcParams || (this._funcParams = this._identsMatching(function(a) {
            return a & DEF_PARAM
        }));
        return this._funcParams
    };
    SymbolTableScope.prototype.get_locals = function() {
        goog.asserts.assert("function" == this.get_type(), "get_locals only valid for function scopes");
        this._funcLocals || (this._funcLocals = this._identsMatching(function(a) {
            return a & DEF_BOUND
        }));
        return this._funcLocals
    };
    SymbolTableScope.prototype.get_globals = function() {
        goog.asserts.assert("function" == this.get_type(), "get_globals only valid for function scopes");
        this._funcGlobals || (this._funcGlobals = this._identsMatching(function(a) {
            a = a >> SCOPE_OFF & SCOPE_MASK;
            return a == GLOBAL_IMPLICIT || a == GLOBAL_EXPLICIT
        }));
        return this._funcGlobals
    };
    SymbolTableScope.prototype.get_frees = function() {
        goog.asserts.assert("function" == this.get_type(), "get_frees only valid for function scopes");
        this._funcFrees || (this._funcFrees = this._identsMatching(function(a) {
            return (a >> SCOPE_OFF & SCOPE_MASK) == FREE
        }));
        return this._funcFrees
    };
    SymbolTableScope.prototype.get_methods = function() {
        var a, b;
        goog.asserts.assert("class" == this.get_type(), "get_methods only valid for class scopes");
        if (!this._classMethods) {
            b = [];
            for (a = 0; a < this.children.length; ++a) b.push(this.children[a].name);
            b.sort();
            this._classMethods = b
        }
        return this._classMethods
    };
    SymbolTableScope.prototype.getScope = function(a) {
        a = this.symFlags[a];
        return void 0 === a ? 0 : a >> SCOPE_OFF & SCOPE_MASK
    };

    function SymbolTable(a) {
        this.filename = a;
        this.top = this.cur = null;
        this.stack = [];
        this.curClass = this.global = null;
        this.tmpname = 0;
        this.stss = {}
    }
    SymbolTable.prototype.getStsForAst = function(a) {
        goog.asserts.assert(void 0 !== a.scopeId, "ast wasn't added to st?");
        a = this.stss[a.scopeId];
        goog.asserts.assert(void 0 !== a, "unknown sym tab entry");
        return a
    };
    SymbolTable.prototype.SEQStmt = function(a) {
        var b, c, d;
        goog.asserts.assert(goog.isArrayLike(a), "SEQ: nodes isn't array? got %s", a);
        d = a.length;
        for (c = 0; c < d; ++c)(b = a[c]) && this.visitStmt(b)
    };
    SymbolTable.prototype.SEQExpr = function(a) {
        var b, c, d;
        goog.asserts.assert(goog.isArrayLike(a), "SEQ: nodes isn't array? got %s", a);
        d = a.length;
        for (c = 0; c < d; ++c)(b = a[c]) && this.visitExpr(b)
    };
    SymbolTable.prototype.enterBlock = function(a, b, c, d) {
        var e;
        a = fixReservedNames(a);
        e = null;
        this.cur && (e = this.cur, this.stack.push(this.cur));
        this.cur = new SymbolTableScope(this, a, b, c, d);
        "top" === a && (this.global = this.cur.symFlags);
        e && e.children.push(this.cur)
    };
    SymbolTable.prototype.exitBlock = function() {
        this.cur = null;
        0 < this.stack.length && (this.cur = this.stack.pop())
    };
    SymbolTable.prototype.visitParams = function(a, b) {
        var c, d;
        for (d = 0; d < a.length; ++d)
            if (c = a[d], c.constructor === Name) goog.asserts.assert(c.ctx === Param || c.ctx === Store && !b), this.addDef(c.id, DEF_PARAM, c.lineno);
            else throw new Sk.builtin.SyntaxError("invalid expression in parameter list", this.filename);
    };
    SymbolTable.prototype.visitArguments = function(a, b) {
        a.args && this.visitParams(a.args, !0);
        a.vararg && (this.addDef(a.vararg, DEF_PARAM, b), this.cur.varargs = !0);
        a.kwarg && (this.addDef(a.kwarg, DEF_PARAM, b), this.cur.varkeywords = !0)
    };
    SymbolTable.prototype.newTmpname = function(a) {
        this.addDef(new Sk.builtin.str("_[" + ++this.tmpname + "]"), DEF_LOCAL, a)
    };
    SymbolTable.prototype.addDef = function(a, b, c) {
        var d, e = mangleName(this.curClass, new Sk.builtin.str(a)).v,
            e = fixReservedNames(e);
        d = this.cur.symFlags[e];
        if (void 0 !== d) {
            if (b & DEF_PARAM && d & DEF_PARAM) throw new Sk.builtin.SyntaxError("duplicate argument '" + a.v + "' in function definition", this.filename, c);
            d |= b
        } else d = b;
        this.cur.symFlags[e] = d;
        b & DEF_PARAM ? this.cur.varnames.push(e) : b & DEF_GLOBAL && (d = b, a = this.global[e], void 0 !== a && (d |= a), this.global[e] = d)
    };
    SymbolTable.prototype.visitSlice = function(a) {
        var b;
        switch (a.constructor) {
            case Slice:
                a.lower && this.visitExpr(a.lower);
                a.upper && this.visitExpr(a.upper);
                a.step && this.visitExpr(a.step);
                break;
            case ExtSlice:
                for (b = 0; b < a.dims.length; ++b) this.visitSlice(a.dims[b]);
                break;
            case Index:
                this.visitExpr(a.value)
        }
    };
    SymbolTable.prototype.visitStmt = function(a) {
        var b, c, d, e;
        goog.asserts.assert(void 0 !== a, "visitStmt called with undefined");
        switch (a.constructor) {
            case FunctionDef:
                this.addDef(a.name, DEF_LOCAL, a.lineno);
                a.args.defaults && this.SEQExpr(a.args.defaults);
                a.decorator_list && this.SEQExpr(a.decorator_list);
                this.enterBlock(a.name.v, FunctionBlock, a, a.lineno);
                this.visitArguments(a.args, a.lineno);
                this.SEQStmt(a.body);
                this.exitBlock();
                break;
            case ClassDef:
                this.addDef(a.name, DEF_LOCAL, a.lineno);
                this.SEQExpr(a.bases);
                a.decorator_list && this.SEQExpr(a.decorator_list);
                this.enterBlock(a.name.v, ClassBlock, a, a.lineno);
                this.curClass = a.name;
                this.SEQStmt(a.body);
                this.exitBlock();
                break;
            case Return_:
                if (a.value && (this.visitExpr(a.value), this.cur.returnsValue = !0, this.cur.generator)) throw new Sk.builtin.SyntaxError("'return' with argument inside generator", this.filename);
                break;
            case Delete_:
                this.SEQExpr(a.targets);
                break;
            case Assign:
                this.SEQExpr(a.targets);
                this.visitExpr(a.value);
                break;
            case AugAssign:
                this.visitExpr(a.target);
                this.visitExpr(a.value);
                break;
            case Print:
                a.dest && this.visitExpr(a.dest);
                this.SEQExpr(a.values);
                break;
            case For_:
                this.visitExpr(a.target);
                this.visitExpr(a.iter);
                this.SEQStmt(a.body);
                a.orelse && this.SEQStmt(a.orelse);
                break;
            case While_:
                this.visitExpr(a.test);
                this.SEQStmt(a.body);
                a.orelse && this.SEQStmt(a.orelse);
                break;
            case If_:
                this.visitExpr(a.test);
                this.SEQStmt(a.body);
                a.orelse && this.SEQStmt(a.orelse);
                break;
            case Raise:
                a.type && (this.visitExpr(a.type), a.inst && (this.visitExpr(a.inst), a.tback && this.visitExpr(a.tback)));
                break;
            case TryExcept:
                this.SEQStmt(a.body);
                this.SEQStmt(a.orelse);
                this.visitExcepthandlers(a.handlers);
                break;
            case TryFinally:
                this.SEQStmt(a.body);
                this.SEQStmt(a.finalbody);
                break;
            case Assert:
                this.visitExpr(a.test);
                a.msg && this.visitExpr(a.msg);
                break;
            case Import_:
            case ImportFrom:
                this.visitAlias(a.names, a.lineno);
                break;
            case Exec:
                this.visitExpr(a.body);
                a.globals && (this.visitExpr(a.globals), a.locals && this.visitExpr(a.locals));
                break;
            case Global:
                e = a.names.length;
                for (d = 0; d < e; ++d) {
                    c = mangleName(this.curClass,
                        a.names[d]).v;
                    c = fixReservedNames(c);
                    b = this.cur.symFlags[c];
                    if (b & (DEF_LOCAL | USE)) {
                        if (b & DEF_LOCAL) throw new Sk.builtin.SyntaxError("name '" + c + "' is assigned to before global declaration", this.filename, a.lineno);
                        throw new Sk.builtin.SyntaxError("name '" + c + "' is used prior to global declaration", this.filename, a.lineno);
                    }
                    this.addDef(new Sk.builtin.str(c), DEF_GLOBAL, a.lineno)
                }
                break;
            case Expr:
                this.visitExpr(a.value);
                break;
            case Pass:
            case Break_:
            case Debugger_:
            case Continue_:
                break;
            case With_:
                this.newTmpname(a.lineno);
                this.visitExpr(a.context_expr);
                a.optional_vars && (this.newTmpname(a.lineno), this.visitExpr(a.optional_vars));
                this.SEQStmt(a.body);
                break;
            default:
                goog.asserts.fail("Unhandled type " + a.constructor.name + " in visitStmt")
        }
    };
    SymbolTable.prototype.visitExpr = function(a) {
        var b;
        goog.asserts.assert(void 0 !== a, "visitExpr called with undefined");
        switch (a.constructor) {
            case BoolOp:
                this.SEQExpr(a.values);
                break;
            case BinOp:
                this.visitExpr(a.left);
                this.visitExpr(a.right);
                break;
            case UnaryOp:
                this.visitExpr(a.operand);
                break;
            case Lambda:
                this.addDef(new Sk.builtin.str("lambda"), DEF_LOCAL, a.lineno);
                a.args.defaults && this.SEQExpr(a.args.defaults);
                this.enterBlock("lambda", FunctionBlock, a, a.lineno);
                this.visitArguments(a.args, a.lineno);
                this.visitExpr(a.body);
                this.exitBlock();
                break;
            case IfExp:
                this.visitExpr(a.test);
                this.visitExpr(a.body);
                this.visitExpr(a.orelse);
                break;
            case Dict:
                this.SEQExpr(a.keys);
                this.SEQExpr(a.values);
                break;
            case DictComp:
            case SetComp:
                this.visitComprehension(a.generators, 0);
                break;
            case ListComp:
                this.newTmpname(a.lineno);
                this.visitExpr(a.elt);
                this.visitComprehension(a.generators, 0);
                break;
            case GeneratorExp:
                this.visitGenexp(a);
                break;
            case Yield:
                a.value && this.visitExpr(a.value);
                this.cur.generator = !0;
                if (this.cur.returnsValue) throw new Sk.builtin.SyntaxError("'return' with argument inside generator",
                    this.filename);
                break;
            case Compare:
                this.visitExpr(a.left);
                this.SEQExpr(a.comparators);
                break;
            case Call:
                this.visitExpr(a.func);
                this.SEQExpr(a.args);
                for (b = 0; b < a.keywords.length; ++b) this.visitExpr(a.keywords[b].value);
                a.starargs && this.visitExpr(a.starargs);
                a.kwargs && this.visitExpr(a.kwargs);
                break;
            case Num:
            case Str:
                break;
            case Attribute:
                this.visitExpr(a.value);
                break;
            case Subscript:
                this.visitExpr(a.value);
                this.visitSlice(a.slice);
                break;
            case Name:
                this.addDef(a.id, a.ctx === Load ? USE : DEF_LOCAL, a.lineno);
                break;
            case List:
            case Tuple:
            case Set:
                this.SEQExpr(a.elts);
                break;
            default:
                goog.asserts.fail("Unhandled type " + a.constructor.name + " in visitExpr")
        }
    };
    SymbolTable.prototype.visitComprehension = function(a, b) {
        var c, d, e = a.length;
        for (d = b; d < e; ++d) c = a[d], this.visitExpr(c.target), this.visitExpr(c.iter), this.SEQExpr(c.ifs)
    };
    SymbolTable.prototype.visitAlias = function(a, b) {
        var c, d, e, f;
        for (f = 0; f < a.length; ++f)
            if (c = a[f], d = e = null === c.asname ? c.name.v : c.asname.v, c = e.indexOf("."), -1 !== c && (d = e.substr(0, c)), "*" !== e) this.addDef(new Sk.builtin.str(d), DEF_IMPORT, b);
            else if (this.cur.blockType !== ModuleBlock) throw new Sk.builtin.SyntaxError("import * only allowed at module level", this.filename);
    };
    SymbolTable.prototype.visitGenexp = function(a) {
        var b = a.generators[0];
        this.visitExpr(b.iter);
        this.enterBlock("genexpr", FunctionBlock, a, a.lineno);
        this.cur.generator = !0;
        this.addDef(new Sk.builtin.str(".0"), DEF_PARAM, a.lineno);
        this.visitExpr(b.target);
        this.SEQExpr(b.ifs);
        this.visitComprehension(a.generators, 1);
        this.visitExpr(a.elt);
        this.exitBlock()
    };
    SymbolTable.prototype.visitExcepthandlers = function(a) {
        var b, c;
        for (b = 0; c = a[b]; ++b) c.type && this.visitExpr(c.type), c.name && this.visitExpr(c.name), this.SEQStmt(c.body)
    };

    function _dictUpdate(a, b) {
        for (var c in b) a[c] = b[c]
    }
    SymbolTable.prototype.analyzeBlock = function(a, b, c, d) {
        var e, f, g;
        g = {};
        var h = {},
            k = {},
            l = {},
            m = {};
        a.blockType == ClassBlock && (_dictUpdate(k, d), b && _dictUpdate(l, b));
        for (f in a.symFlags) e = a.symFlags[f], this.analyzeName(a, h, f, e, b, g, c, d);
        a.blockType !== ClassBlock && (a.blockType === FunctionBlock && _dictUpdate(l, g), b && _dictUpdate(l, b), _dictUpdate(k, d));
        g = {};
        f = a.children.length;
        for (e = 0; e < f; ++e)
            if (d = a.children[e], this.analyzeChildBlock(d, l, m, k, g), d.hasFree || d.childHasFree) a.childHasFree = !0;
        _dictUpdate(m, g);
        a.blockType ===
            FunctionBlock && this.analyzeCells(h, m);
        this.updateSymbols(a.symFlags, h, b, m, a.blockType === ClassBlock);
        _dictUpdate(c, m)
    };
    SymbolTable.prototype.analyzeChildBlock = function(a, b, c, d, e) {
        var f = {};
        _dictUpdate(f, b);
        b = {};
        _dictUpdate(b, c);
        c = {};
        _dictUpdate(c, d);
        this.analyzeBlock(a, f, b, c);
        _dictUpdate(e, b)
    };
    SymbolTable.prototype.analyzeCells = function(a, b) {
        var c, d;
        for (d in a) c = a[d], c === LOCAL && void 0 !== b[d] && (a[d] = CELL, delete b[d])
    };
    SymbolTable.prototype.updateSymbols = function(a, b, c, d, e) {
        var f, g, h;
        for (h in a) g = a[h], f = b[h], g |= f << SCOPE_OFF, a[h] = g;
        b = FREE << SCOPE_OFF;
        for (h in d) d = a[h], void 0 !== d ? e && d & (DEF_BOUND | DEF_GLOBAL) && (d |= DEF_FREE_CLASS, a[h] = d) : void 0 !== c[h] && (a[h] = b)
    };
    SymbolTable.prototype.analyzeName = function(a, b, c, d, e, f, g, h) {
        if (d & DEF_GLOBAL) {
            if (d & DEF_PARAM) throw new Sk.builtin.SyntaxError("name '" + c + "' is local and global", this.filename, a.lineno);
            b[c] = GLOBAL_EXPLICIT;
            h[c] = null;
            e && void 0 !== e[c] && delete e[c]
        } else d & DEF_BOUND ? (b[c] = LOCAL, f[c] = null, delete h[c]) : e && void 0 !== e[c] ? (b[c] = FREE, a.hasFree = !0, g[c] = null) : (h && void 0 !== h[c] || !a.isNested || (a.hasFree = !0), b[c] = GLOBAL_IMPLICIT)
    };
    SymbolTable.prototype.analyze = function() {
        this.analyzeBlock(this.top, null, {}, {})
    };
    Sk.symboltable = function(a, b) {
        var c, d = new SymbolTable(b);
        d.enterBlock("top", ModuleBlock, a, 0);
        d.top = d.cur;
        for (c = 0; c < a.body.length; ++c) d.visitStmt(a.body[c]);
        d.exitBlock();
        d.analyze();
        return d
    };
    Sk.dumpSymtab = function(a) {
        var b = function(a) {
                return a ? "True" : "False"
            },
            c = function(a) {
                var b, c = [];
                for (b = 0; b < a.length; ++b) c.push((new Sk.builtin.str(a[b])).$r().v);
                return "[" + c.join(", ") + "]"
            },
            d = function(a, f) {
                var g, h, k, l, m, p, n, r, q;
                void 0 === f && (f = "");
                q = "" + (f + "Sym_type: " + a.get_type() + "\n");
                q += f + "Sym_name: " + a.get_name() + "\n";
                q += f + "Sym_lineno: " + a.get_lineno() + "\n";
                q += f + "Sym_nested: " + b(a.is_nested()) + "\n";
                q += f + "Sym_haschildren: " + b(a.has_children()) + "\n";
                "class" === a.get_type() ? q += f + "Class_methods: " + c(a.get_methods()) +
                    "\n" : "function" === a.get_type() && (q += f + "Func_params: " + c(a.get_parameters()) + "\n", q += f + "Func_locals: " + c(a.get_locals()) + "\n", q += f + "Func_globals: " + c(a.get_globals()) + "\n", q += f + "Func_frees: " + c(a.get_frees()) + "\n");
                q += f + "-- Identifiers --\n";
                r = a.get_identifiers();
                n = r.length;
                for (p = 0; p < n; ++p) {
                    g = a.lookup(r[p]);
                    q += f + "name: " + g.get_name() + "\n";
                    q += f + "  is_referenced: " + b(g.is_referenced()) + "\n";
                    q += f + "  is_imported: " + b(g.is_imported()) + "\n";
                    q += f + "  is_parameter: " + b(g.is_parameter()) + "\n";
                    q += f + "  is_global: " +
                        b(g.is_global()) + "\n";
                    q += f + "  is_declared_global: " + b(g.is_declared_global()) + "\n";
                    q += f + "  is_local: " + b(g.is_local()) + "\n";
                    q += f + "  is_free: " + b(g.is_free()) + "\n";
                    q += f + "  is_assigned: " + b(g.is_assigned()) + "\n";
                    q += f + "  is_namespace: " + b(g.is_namespace()) + "\n";
                    m = g.get_namespaces();
                    l = m.length;
                    q += f + "  namespaces: [\n";
                    k = [];
                    for (h = 0; h < l; ++h) g = m[h], k.push(d(g, f + "    "));
                    q += k.join("\n");
                    q += f + "  ]\n"
                }
                return q
            };
        return d(a.top, "")
    };
    goog.exportSymbol("Sk.symboltable", Sk.symboltable);
    goog.exportSymbol("Sk.dumpSymtab", Sk.dumpSymtab);
    var out;
    Sk.gensymcount = 0;

    function Compiler(a, b, c, d, e) {
        this.filename = a;
        this.st = b;
        this.flags = c;
        this.canSuspend = d;
        this.interactive = !1;
        this.nestlevel = 0;
        this.u = null;
        this.stack = [];
        this.result = [];
        this.allUnits = [];
        this.source = e ? e.split("\n") : !1
    }

    function CompilerUnit() {
        this.name = this.ste = null;
        this.doesSuspend = this.canSuspend = !1;
        this.private_ = null;
        this.lineno = this.firstlineno = 0;
        this.linenoSet = !1;
        this.localnames = [];
        this.localtemps = [];
        this.tempsToSave = [];
        this.blocknum = 0;
        this.blocks = [];
        this.curblock = 0;
        this.scopename = null;
        this.suffixCode = this.switchCode = this.varDeclsCode = this.prefixCode = "";
        this.breakBlocks = [];
        this.continueBlocks = [];
        this.exceptBlocks = [];
        this.finallyBlocks = []
    }
    CompilerUnit.prototype.activateScope = function() {
        var a = this;
        out = function() {
            var b, c = a.blocks[a.curblock];
            if (null === c._next)
                for (b = 0; b < arguments.length; ++b) c.push(arguments[b])
        }
    };
    Compiler.prototype.getSourceLine = function(a) {
        goog.asserts.assert(this.source);
        return this.source[a - 1]
    };
    Compiler.prototype.annotateSource = function(a) {
        var b, c;
        if (this.source) {
            c = a.lineno;
            b = a.col_offset;
            out("\n//\n// line ", c, ":\n// ", this.getSourceLine(c), "\n// ");
            for (a = 0; a < b; ++a) out(" ");
            out("^\n//\n");
            out("currLineNo = ", c, ";\ncurrColNo = ", b, ";\n\n")
        }
    };
    Compiler.prototype.gensym = function(a) {
        a = "$" + (a || "");
        return a += Sk.gensymcount++
    };
    Compiler.prototype.niceName = function(a) {
        return this.gensym(a.replace("<", "").replace(">", "").replace(" ", "_"))
    };
    var reservedWords_ = {
        "abstract": !0,
        as: !0,
        "boolean": !0,
        "break": !0,
        "byte": !0,
        "case": !0,
        "catch": !0,
        "char": !0,
        "class": !0,
        "continue": !0,
        "const": !0,
        "debugger": !0,
        "default": !0,
        "delete": !0,
        "do": !0,
        "double": !0,
        "else": !0,
        "enum": !0,
        "export": !0,
        "extends": !0,
        "false": !0,
        "final": !0,
        "finally": !0,
        "float": !0,
        "for": !0,
        "function": !0,
        "goto": !0,
        "if": !0,
        "implements": !0,
        "import": !0,
        "in": !0,
        "instanceof": !0,
        "int": !0,
        "interface": !0,
        is: !0,
        "long": !0,
        namespace: !0,
        "native": !0,
        "new": !0,
        "null": !0,
        "package": !0,
        "private": !0,
        "protected": !0,
        "public": !0,
        "return": !0,
        "short": !0,
        "static": !0,
        "super": !1,
        "switch": !0,
        "synchronized": !0,
        "this": !0,
        "throw": !0,
        "throws": !0,
        "transient": !0,
        "true": !0,
        "try": !0,
        "typeof": !0,
        use: !0,
        "var": !0,
        "void": !0,
        "volatile": !0,
        "while": !0,
        "with": !0
    };

    function fixReservedWords(a) {
        return !0 !== reservedWords_[a] ? a : a + "_$rw$"
    }
    var reservedNames_ = {
        __defineGetter__: !0,
        __defineSetter__: !0,
        apply: !0,
        call: !0,
        eval: !0,
        hasOwnProperty: !0,
        isPrototypeOf: !0,
        __lookupGetter__: !0,
        __lookupSetter__: !0,
        __noSuchMethod__: !0,
        propertyIsEnumerable: !0,
        toSource: !0,
        toLocaleString: !0,
        toString: !0,
        unwatch: !0,
        valueOf: !0,
        watch: !0,
        length: !0
    };

    function fixReservedNames(a) {
        return reservedNames_[a] ? a + "_$rn$" : a
    }

    function mangleName(a, b) {
        var c = b.v,
            d = null;
        if (null === a || (null === c || "_" !== c.charAt(0) || "_" !== c.charAt(1)) || "_" === c.charAt(c.length - 1) && "_" === c.charAt(c.length - 2)) return b;
        d = a.v;
        d.replace(/_/g, "");
        if ("" === d) return b;
        d = a.v;
        d.replace(/^_*/, "");
        return d = new Sk.builtin.str("_" + d + c)
    }
    Compiler.prototype._gr = function(a, b) {
        var c, d = this.gensym(a);
        this.u.localtemps.push(d);
        out("var ", d, "=");
        for (c = 1; c < arguments.length; ++c) out(arguments[c]);
        out(";");
        return d
    };
    Compiler.prototype.outputInterruptTest = function() {
        var a = "";
        if (null !== Sk.execLimit || null !== Sk.yieldLimit && this.u.canSuspend) a += "var $dateNow = Date.now();", null !== Sk.execLimit && (a += "if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}"), null !== Sk.yieldLimit && this.u.canSuspend && (a = a + "if ($dateNow - Sk.lastYield > Sk.yieldLimit) {" + ("var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '" + this.filename + "',currLineNo,currColNo);"),
            a += "$susp.$blk = $blk;", a += "$susp.optional = true;", a += "return $susp;", a += "}", this.u.doesSuspend = !0);
        return a
    };
    Compiler.prototype._jumpfalse = function(a, b) {
        var c = this._gr("jfalse", "(", a, "===false||!Sk.misceval.isTrue(", a, "))");
        out("if(", c, "){/*test failed */$blk=", b, ";continue;}")
    };
    Compiler.prototype._jumpundef = function(a, b) {
        out("if(", a, "===undefined){$blk=", b, ";continue;}")
    };
    Compiler.prototype._jumptrue = function(a, b) {
        var c = this._gr("jtrue", "(", a, "===true||Sk.misceval.isTrue(", a, "))");
        out("if(", c, "){/*test passed */$blk=", b, ";continue;}")
    };
    Compiler.prototype._jump = function(a) {
        null === this.u.blocks[this.u.curblock]._next && (out("$blk=", a, ";"), this.u.blocks[this.u.curblock]._next = a)
    };
    Compiler.prototype._checkSuspension = function(a) {
        var b;
        this.u.canSuspend ? (b = this.newBlock("function return or resume suspension"), this._jump(b), this.setBlock(b), a = a || {
            lineno: "currLineNo",
            col_offset: "currColNo"
        }, out("if ($ret && $ret.isSuspension) { return $saveSuspension($ret,'" + this.filename + "'," + a.lineno + "," + a.col_offset + "); }"), this.u.doesSuspend = !0, this.u.tempsToSave = this.u.tempsToSave.concat(this.u.localtemps)) : out("if ($ret && $ret.isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }")
    };
    Compiler.prototype.ctuplelistorset = function(a, b, c) {
        var d;
        goog.asserts.assert("tuple" === c || "list" === c || "set" === c);
        if (a.ctx === Store)
            for (d = this._gr("items", "Sk.abstr.sequenceUnpack(" + b + "," + a.elts.length + ")"), b = 0; b < a.elts.length; ++b) this.vexpr(a.elts[b], d + "[" + b + "]");
        else if (a.ctx === Load || "set" === c) {
            d = [];
            for (b = 0; b < a.elts.length; ++b) d.push(this._gr("elem", this.vexpr(a.elts[b])));
            return this._gr("load" + c, "new Sk.builtins['", c, "']([", d, "])")
        }
    };
    Compiler.prototype.cdict = function(a) {
        var b, c, d;
        goog.asserts.assert(a.values.length === a.keys.length);
        d = [];
        for (c = 0; c < a.values.length; ++c) b = this.vexpr(a.values[c]), d.push(this.vexpr(a.keys[c])), d.push(b);
        return this._gr("loaddict", "new Sk.builtins['dict']([", d, "])")
    };
    Compiler.prototype.clistcomp = function(a) {
        goog.asserts.assert(a instanceof ListComp);
        var b = this._gr("_compr", "new Sk.builtins['list']([])");
        return this.ccompgen("list", b, a.generators, 0, a.elt, null, a)
    };
    Compiler.prototype.cdictcomp = function(a) {
        goog.asserts.assert(a instanceof DictComp);
        var b = this._gr("_dcompr", "new Sk.builtins.dict([])");
        return this.ccompgen("dict", b, a.generators, 0, a.value, a.key, a)
    };
    Compiler.prototype.csetcomp = function(a) {
        goog.asserts.assert(a instanceof SetComp);
        var b = this._gr("_setcompr", "new Sk.builtins.set([])");
        return this.ccompgen("set", b, a.generators, 0, a.elt, null, a)
    };
    Compiler.prototype.ccompgen = function(a, b, c, d, e, f, g) {
        var h = this.newBlock(a + " comp start"),
            k = this.newBlock(a + " comp skip"),
            l = this.newBlock(a + " comp anchor"),
            m = c[d],
            p = this.vexpr(m.iter),
            p = this._gr("iter", "Sk.abstr.iter(", p, ")"),
            n, r;
        this._jump(h);
        this.setBlock(h);
        out("$ret = Sk.abstr.iternext(", p, ", true);");
        this._checkSuspension(g);
        p = this._gr("next", "$ret");
        this._jumpundef(p, l);
        this.vexpr(m.target, p);
        r = m.ifs.length;
        for (n = 0; n < r; ++n) p = this.vexpr(m.ifs[n]), this._jumpfalse(p, h);
        ++d < c.length && this.ccompgen(a,
            b, c, d, e, f, g);
        d >= c.length && (c = this.vexpr(e), "dict" === a ? (a = this.vexpr(f), out(b, ".mp$ass_subscript(", a, ",", c, ");")) : "list" === a ? out(b, ".v.push(", c, ");") : "set" === a && out(b, ".v.mp$ass_subscript(", c, ", true);"), this._jump(k), this.setBlock(k));
        this._jump(h);
        this.setBlock(l);
        return b
    };
    Compiler.prototype.cyield = function(a) {
        if (this.u.ste.blockType !== FunctionBlock) throw new SyntaxError("'yield' outside function");
        var b = "null";
        a.value && (b = this.vexpr(a.value));
        a = this.newBlock("after yield");
        out("return [/*resume*/", a, ",/*ret*/", b, "];");
        this.setBlock(a);
        return "$gen.gi$sentvalue"
    };
    Compiler.prototype.ccompare = function(a) {
        var b, c, d, e, f, g;
        goog.asserts.assert(a.ops.length === a.comparators.length);
        g = this.vexpr(a.left);
        f = a.ops.length;
        e = this.newBlock("done");
        d = this._gr("compareres", "null");
        for (c = 0; c < f; ++c) b = this.vexpr(a.comparators[c]), out("$ret = Sk.builtin.bool(Sk.misceval.richCompareBool(", g, ",", b, ",'", a.ops[c].prototype._astname, "', true));"), this._checkSuspension(a), out(d, "=$ret;"), this._jumpfalse("$ret", e), g = b;
        this._jump(e);
        this.setBlock(e);
        return d
    };
    Compiler.prototype.ccall = function(a) {
        var b, c, d, e = this.vexpr(a.func),
            f = this.vseqexpr(a.args);
        if (0 < a.keywords.length || a.starargs || a.kwargs) {
            c = [];
            for (b = 0; b < a.keywords.length; ++b) c.push("'" + a.keywords[b].arg.v + "'"), c.push(this.vexpr(a.keywords[b].value));
            d = "[" + c.join(",") + "]";
            b = c = "undefined";
            a.starargs && (c = this.vexpr(a.starargs));
            a.kwargs && (b = this.vexpr(a.kwargs));
            out("$ret;");
            out("$ret = Sk.misceval.callOrSuspend(", e, ",", b, ",", c, ",", d, 0 < f.length ? "," : "", f, ");")
        } else out("$ret;"), out("$ret = Sk.misceval.callsimOrSuspend(",
            e, 0 < f.length ? "," : "", f, ");");
        this._checkSuspension(a);
        return this._gr("call", "$ret")
    };
    Compiler.prototype.cslice = function(a) {
        var b, c;
        goog.asserts.assert(a instanceof Slice);
        c = a.lower ? this.vexpr(a.lower) : a.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(0)";
        b = a.upper ? this.vexpr(a.upper) : a.step ? "Sk.builtin.none.none$" : "new Sk.builtin.int_(2147483647)";
        a = a.step ? this.vexpr(a.step) : "Sk.builtin.none.none$";
        return this._gr("slice", "new Sk.builtins['slice'](", c, ",", b, ",", a, ")")
    };
    Compiler.prototype.eslice = function(a) {
        var b, c;
        goog.asserts.assert(a instanceof Array);
        c = [];
        for (b = 0; b < a.length; b++) c.push(this.vslicesub(a[b]));
        return this._gr("extslice", "new Sk.builtins['tuple']([", c, "])")
    };
    Compiler.prototype.vslicesub = function(a) {
        var b;
        switch (a.constructor) {
            case Index:
                b = this.vexpr(a.value);
                break;
            case Slice:
                b = this.cslice(a);
                break;
            case Ellipsis:
                goog.asserts.fail("todo compile.js Ellipsis;");
                break;
            case ExtSlice:
                b = this.eslice(a.dims);
                break;
            default:
                goog.asserts.fail("invalid subscript kind")
        }
        return b
    };
    Compiler.prototype.vslice = function(a, b, c, d) {
        a = this.vslicesub(a);
        return this.chandlesubscr(b, c, a, d)
    };
    Compiler.prototype.chandlesubscr = function(a, b, c, d) {
        if (a === Load || a === AugLoad) return out("$ret = Sk.abstr.objectGetItem(", b, ",", c, ", true);"), this._checkSuspension(), this._gr("lsubscr", "$ret");
        a === Store || a === AugStore ? (out("$ret = Sk.abstr.objectSetItem(", b, ",", c, ",", d, ", true);"), this._checkSuspension()) : a === Del ? out("Sk.abstr.objectDelItem(", b, ",", c, ");") : goog.asserts.fail("handlesubscr fail")
    };
    Compiler.prototype.cboolop = function(a) {
        var b, c, d, e, f, g;
        goog.asserts.assert(a instanceof BoolOp);
        g = a.op === And ? this._jumpfalse : this._jumptrue;
        f = this.newBlock("end of boolop");
        e = a.values;
        d = e.length;
        for (b = 0; b < d; ++b) a = this.vexpr(e[b]), 0 === b && (c = this._gr("boolopsucc", a)), out(c, "=", a, ";"), g.call(this, a, f);
        this._jump(f);
        this.setBlock(f);
        return c
    };
    Compiler.prototype.vexpr = function(a, b, c, d) {
        var e;
        a.lineno > this.u.lineno && (this.u.lineno = a.lineno, this.u.linenoSet = !1);
        switch (a.constructor) {
            case BoolOp:
                return this.cboolop(a);
            case BinOp:
                return this._gr("binop", "Sk.abstr.numberBinOp(", this.vexpr(a.left), ",", this.vexpr(a.right), ",'", a.op.prototype._astname, "')");
            case UnaryOp:
                return this._gr("unaryop", "Sk.abstr.numberUnaryOp(", this.vexpr(a.operand), ",'", a.op.prototype._astname, "')");
            case Lambda:
                return this.clambda(a);
            case IfExp:
                return this.cifexp(a);
            case Dict:
                return this.cdict(a);
            case ListComp:
                return this.clistcomp(a);
            case DictComp:
                return this.cdictcomp(a);
            case SetComp:
                return this.csetcomp(a);
            case GeneratorExp:
                return this.cgenexp(a);
            case Yield:
                return this.cyield(a);
            case Compare:
                return this.ccompare(a);
            case Call:
                return b = this.ccall(a), this.annotateSource(a), b;
            case Num:
                if ("number" === typeof a.n) return a.n;
                if (a.n instanceof Sk.builtin.int_) return "new Sk.builtin.int_(" + a.n.v + ")";
                if (a.n instanceof Sk.builtin.float_) return a = 0 === a.n.v && -Infinity ===
                    1 / a.n.v ? "-0" : a.n.v, "new Sk.builtin.float_(" + a + ")";
                if (a.n instanceof Sk.builtin.lng) return "Sk.longFromStr('" + a.n.tp$str().v + "')";
                if (a.n instanceof Sk.builtin.complex) return "new Sk.builtin.complex(new Sk.builtin.float_(" + (0 === a.n.real.v && -Infinity === 1 / a.n.real.v ? "-0" : a.n.real.v) + "), new Sk.builtin.float_(" + (0 === a.n.imag.v && -Infinity === 1 / a.n.imag.v ? "-0" : a.n.imag.v) + "))";
                goog.asserts.fail("unhandled Num type");
            case Str:
                return this._gr("str", "new Sk.builtins['str'](", a.s.$r().v, ")");
            case Attribute:
                a.ctx !==
                    AugLoad && a.ctx !== AugStore && (e = this.vexpr(a.value));
                d = a.attr.$r().v;
                d = d.substring(1, d.length - 1);
                d = mangleName(this.u.private_, new Sk.builtin.str(d)).v;
                d = fixReservedWords(d);
                d = fixReservedNames(d);
                switch (a.ctx) {
                    case AugLoad:
                        return out("$ret = Sk.abstr.gattr(", c, ",'", d, "', true);"), this._checkSuspension(a), this._gr("lattr", "$ret");
                    case Load:
                        return out("$ret = Sk.abstr.gattr(", e, ",'", d, "', true);"), this._checkSuspension(a), this._gr("lattr", "$ret");
                    case AugStore:
                        out("$ret = undefined;");
                        out("if(", b, "!==undefined){");
                        out("$ret = Sk.abstr.sattr(", c, ",'", d, "',", b, ", true);");
                        out("}");
                        this._checkSuspension(a);
                        break;
                    case Store:
                        out("$ret = Sk.abstr.sattr(", e, ",'", d, "',", b, ", true);");
                        this._checkSuspension(a);
                        break;
                    case Del:
                        goog.asserts.fail("todo Del;");
                        break;
                    default:
                        goog.asserts.fail("invalid attribute expression")
                }
                break;
            case Subscript:
                switch (a.ctx) {
                    case AugLoad:
                        return out("$ret = Sk.abstr.objectGetItem(", c, ",", d, ", true);"), this._checkSuspension(a), this._gr("gitem", "$ret");
                    case Load:
                    case Store:
                    case Del:
                        return this.vslice(a.slice,
                            a.ctx, this.vexpr(a.value), b);
                    case AugStore:
                        out("$ret=undefined;");
                        out("if(", b, "!==undefined){");
                        out("$ret=Sk.abstr.objectSetItem(", c, ",", d, ",", b, ", true)");
                        out("}");
                        this._checkSuspension(a);
                        break;
                    default:
                        goog.asserts.fail("invalid subscript expression")
                }
                break;
            case Name:
                return this.nameop(a.id, a.ctx, b);
            case List:
                return this.ctuplelistorset(a, b, "list");
            case Tuple:
                return this.ctuplelistorset(a, b, "tuple");
            case Set:
                return this.ctuplelistorset(a, b, "set");
            default:
                goog.asserts.fail("unhandled case in vexpr")
        }
    };
    Compiler.prototype.vseqexpr = function(a, b) {
        var c, d;
        goog.asserts.assert(void 0 === b || a.length === b.length);
        d = [];
        for (c = 0; c < a.length; ++c) d.push(this.vexpr(a[c], void 0 === b ? void 0 : b[c]));
        return d
    };
    Compiler.prototype.caugassign = function(a) {
        var b, c, d, e, f;
        goog.asserts.assert(a instanceof AugAssign);
        f = a.target;
        switch (f.constructor) {
            case Attribute:
                return b = this.vexpr(f.value), f = new Attribute(f.value, f.attr, AugLoad, f.lineno, f.col_offset), e = this.vexpr(f, void 0, b), d = this.vexpr(a.value), a = this._gr("inplbinopattr", "Sk.abstr.numberInplaceBinOp(", e, ",", d, ",'", a.op.prototype._astname, "')"), f.ctx = AugStore, this.vexpr(f, a, b);
            case Subscript:
                return b = this.vexpr(f.value), c = this.vslicesub(f.slice), f = new Subscript(f.value,
                    c, AugLoad, f.lineno, f.col_offset), e = this.vexpr(f, void 0, b, c), d = this.vexpr(a.value), a = this._gr("inplbinopsubscr", "Sk.abstr.numberInplaceBinOp(", e, ",", d, ",'", a.op.prototype._astname, "')"), f.ctx = AugStore, this.vexpr(f, a, b, c);
            case Name:
                return b = this.nameop(f.id, Load), d = this.vexpr(a.value), a = this._gr("inplbinop", "Sk.abstr.numberInplaceBinOp(", b, ",", d, ",'", a.op.prototype._astname, "')"), this.nameop(f.id, Store, a);
            default:
                goog.asserts.fail("unhandled case in augassign")
        }
    };
    Compiler.prototype.exprConstant = function(a) {
        switch (a.constructor) {
            case Num:
                return Sk.misceval.isTrue(a.n) ? 1 : 0;
            case Str:
                return Sk.misceval.isTrue(a.s) ? 1 : 0;
            default:
                return -1
        }
    };
    Compiler.prototype.newBlock = function(a) {
        var b = this.u.blocknum++;
        this.u.blocks[b] = [];
        this.u.blocks[b]._name = a || "<unnamed>";
        this.u.blocks[b]._next = null;
        return b
    };
    Compiler.prototype.setBlock = function(a) {
        goog.asserts.assert(0 <= a && a < this.u.blocknum);
        this.u.curblock = a
    };
    Compiler.prototype.pushBreakBlock = function(a) {
        goog.asserts.assert(0 <= a && a < this.u.blocknum);
        this.u.breakBlocks.push(a)
    };
    Compiler.prototype.popBreakBlock = function() {
        this.u.breakBlocks.pop()
    };
    Compiler.prototype.pushContinueBlock = function(a) {
        goog.asserts.assert(0 <= a && a < this.u.blocknum);
        this.u.continueBlocks.push(a)
    };
    Compiler.prototype.popContinueBlock = function() {
        this.u.continueBlocks.pop()
    };
    Compiler.prototype.pushExceptBlock = function(a) {
        goog.asserts.assert(0 <= a && a < this.u.blocknum);
        this.u.exceptBlocks.push(a)
    };
    Compiler.prototype.popExceptBlock = function() {
        this.u.exceptBlocks.pop()
    };
    Compiler.prototype.pushFinallyBlock = function(a) {
        goog.asserts.assert(0 <= a && a < this.u.blocknum);
        this.u.finallyBlocks.push(a)
    };
    Compiler.prototype.popFinallyBlock = function() {
        this.u.finallyBlocks.pop()
    };
    Compiler.prototype.setupExcept = function(a) {
        out("$exc.push(", a, ");")
    };
    Compiler.prototype.endExcept = function() {
        out("$exc.pop();")
    };
    Compiler.prototype.outputLocals = function(a) {
        var b, c, d, e = {};
        for (d = 0; a.argnames && d < a.argnames.length; ++d) e[a.argnames[d]] = !0;
        a.localnames.sort();
        c = [];
        for (d = 0; d < a.localnames.length; ++d) b = a.localnames[d], void 0 === e[b] && (c.push(b), e[b] = !0);
        return 0 < c.length ? "var " + c.join(",") + "; /* locals */" : ""
    };
    Compiler.prototype.outputSuspensionHelpers = function(a) {
        var b, c, d = [],
            e = a.localnames.concat(a.tempsToSave),
            f = {},
            g = a.ste.blockType === FunctionBlock && a.ste.childHasFree,
            h = "var $wakeFromSuspension = function() {var susp = " + a.scopename + ".wakingSuspension; delete " + a.scopename + ".wakingSuspension;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err;currLineNo=susp.lineno; currColNo=susp.colno; Sk.lastYield=Date.now();" + (g ? "$cell=susp.$cell;" : "");
        for (b = 0; b < e.length; b++) c = e[b], void 0 ===
            f[c] && (h += c + "=susp.$tmps." + c + ";", f[c] = !0);
        h += "try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: currLineNo, colno: currColNo, filename: '" + this.filename + "'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};";
        h += "var $saveSuspension = function(child, filename, lineno, colno) {var susp = new Sk.misceval.Suspension(); susp.child=child;susp.resume=function(){" +
            a.scopename + ".wakingSuspension=susp; return " + a.scopename + "(" + (a.ste.generator ? "$gen" : "") + "); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.filename=filename;susp.lineno=lineno;susp.colno=colno;susp.optional=child.optional;" + (g ? "susp.$cell=$cell;" : "");
        f = {};
        for (b = 0; b < e.length; b++) c = e[b], void 0 === f[c] && (d.push('"' + c + '":' + c), f[c] = !0);
        return h += "susp.$tmps={" + d.join(",") + "};return susp;};"
    };
    Compiler.prototype.outputAllUnits = function() {
        var a, b, c, d, e = "",
            f, g;
        for (d = 0; d < this.allUnits.length; ++d) {
            c = this.allUnits[d];
            e += c.prefixCode;
            e += this.outputLocals(c);
            c.doesSuspend && (e += this.outputSuspensionHelpers(c));
            e += c.varDeclsCode;
            e += c.switchCode;
            b = c.blocks;
            g = Object.create(null);
            for (a = 0; a < b.length; ++a)
                if (f = a, !(f in g))
                    for (;;)
                        if (g[f] = !0, e += "case " + f + ": /* --- " + b[f]._name + " --- */", e += b[f].join(""), null !== b[f]._next)
                            if (b[f]._next in g) {
                                e += "/* jump */ continue;";
                                break
                            } else e += "/* allowing case fallthrough */",
                                f = b[f]._next;
            else {
                e += "throw new Sk.builtin.SystemError('internal error: unterminated block');";
                break
            }
            e += c.suffixCode
        }
        return e
    };
    Compiler.prototype.cif = function(a) {
        var b, c, d;
        goog.asserts.assert(a instanceof If_);
        b = this.exprConstant(a.test);
        0 === b ? a.orelse && 0 < a.orelse.length && this.vseqstmt(a.orelse) : 1 === b ? this.vseqstmt(a.body) : (d = this.newBlock("end of if"), a.orelse && 0 < a.orelse.length && (c = this.newBlock("next branch of if")), b = this.vexpr(a.test), a.orelse && 0 < a.orelse.length ? (this._jumpfalse(b, c), this.vseqstmt(a.body), this._jump(d), this.setBlock(c), this.vseqstmt(a.orelse)) : (this._jumpfalse(b, d), this.vseqstmt(a.body)), this._jump(d),
            this.setBlock(d))
    };
    Compiler.prototype.cwhile = function(a) {
        var b, c, d, e;
        0 === this.exprConstant(a.test) ? a.orelse && this.vseqstmt(a.orelse) : (e = this.newBlock("while test"), this._jump(e), this.setBlock(e), d = this.newBlock("after while"), c = 0 < a.orelse.length ? this.newBlock("while orelse") : null, b = this.newBlock("while body"), this.annotateSource(a), this._jumpfalse(this.vexpr(a.test), c ? c : d), this._jump(b), this.pushBreakBlock(d), this.pushContinueBlock(e), this.setBlock(b), this.vseqstmt(a.body), this._jump(e), this.popContinueBlock(), this.popBreakBlock(),
            0 < a.orelse.length && (this.setBlock(c), this.vseqstmt(a.orelse), this._jump(d)), this.setBlock(d))
    };
    Compiler.prototype.cfor = function(a) {
        var b, c, d = this.newBlock("for start"),
            e = this.newBlock("for cleanup"),
            f = this.newBlock("for end");
        this.pushBreakBlock(f);
        this.pushContinueBlock(d);
        c = this.vexpr(a.iter);
        this.u.ste.generator ? (b = "$loc." + this.gensym("iter"), out(b, "=Sk.abstr.iter(", c, ");")) : (b = this._gr("iter", "Sk.abstr.iter(", c, ")"), this.u.tempsToSave.push(b));
        this._jump(d);
        this.setBlock(d);
        out("$ret = Sk.abstr.iternext(", b, this.u.canSuspend ? ", true" : ", false", ");");
        this._checkSuspension(a);
        b = this._gr("next",
            "$ret");
        this._jumpundef(b, e);
        this.vexpr(a.target, b);
        this.vseqstmt(a.body);
        this._jump(d);
        this.setBlock(e);
        this.popContinueBlock();
        this.popBreakBlock();
        this.vseqstmt(a.orelse);
        this._jump(f);
        this.setBlock(f)
    };
    Compiler.prototype.craise = function(a) {
        var b = "";
        a.inst ? (b = this.vexpr(a.inst), out("throw ", this.vexpr(a.type), "(", b, ");")) : a.type ? a.type.func ? out("throw ", this.vexpr(a.type), ";") : (a = this._gr("err", this.vexpr(a.type)), out("if(", a, " instanceof Sk.builtin.type) {", "throw Sk.misceval.callsim(", a, ");", "} else if(typeof(", a, ") === 'function') {", "throw ", a, "();", "} else {", "throw ", a, ";", "}")) : out("throw $err;")
    };
    Compiler.prototype.ctryexcept = function(a) {
        var b, c, d, e, f, g, h, k = a.handlers.length,
            l = [];
        for (h = 0; h < k; ++h) l.push(this.newBlock("except_" + h + "_"));
        g = this.newBlock("unhandled");
        f = this.newBlock("orelse");
        e = this.newBlock("end");
        this.setupExcept(l[0]);
        this.vseqstmt(a.body);
        this.endExcept();
        this._jump(f);
        for (h = 0; h < k; ++h) {
            this.setBlock(l[h]);
            d = a.handlers[h];
            if (!d.type && h < k - 1) throw new SyntaxError("default 'except:' must be last");
            d.type && (b = this.vexpr(d.type), c = h == k - 1 ? g : l[h + 1], b = this._gr("instance", "$err instanceof ",
                b), this._jumpfalse(b, c));
            d.name && this.vexpr(d.name, "$err");
            this.vseqstmt(d.body);
            this._jump(e)
        }
        this.setBlock(g);
        out("throw $err;");
        this.setBlock(f);
        this.vseqstmt(a.orelse);
        this._jump(e);
        this.setBlock(e)
    };
    Compiler.prototype.ctryfinally = function(a) {
        out("/*todo; tryfinally*/");
        this.ctryexcept(a.body[0])
    };
    Compiler.prototype.cassert = function(a) {
        var b = this.vexpr(a.test),
            c = this.newBlock("end");
        this._jumptrue(b, c);
        out("throw new Sk.builtin.AssertionError(", a.msg ? this.vexpr(a.msg) : "", ");");
        this.setBlock(c)
    };
    Compiler.prototype.cimportas = function(a, b, c) {
        a = a.v;
        var d = a.indexOf("."),
            e = c;
        if (-1 !== d)
            for (a = a.substr(d + 1); - 1 !== d;) d = a.indexOf("."), c = -1 !== d ? a.substr(0, d) : a, e = this._gr("lattr", "Sk.abstr.gattr(", e, ",'", c, "')"), a = a.substr(d + 1);
        return this.nameop(b, Store, e)
    };
    Compiler.prototype.cimport = function(a) {
        var b, c, d, e, f = a.names.length;
        for (e = 0; e < f; ++e) b = a.names[e], out("$ret = Sk.builtin.__import__(", b.name.$r().v, ",$gbl,$loc,[]);"), this._checkSuspension(a), d = this._gr("module", "$ret"), b.asname ? this.cimportas(b.name, b.asname, d) : (c = b.name, b = c.v.indexOf("."), -1 !== b && (c = new Sk.builtin.str(c.v.substr(0, b))), this.nameop(c, Store, d))
    };
    Compiler.prototype.cfromimport = function(a) {
        var b, c, d, e, f, g = a.names.length;
        b = [];
        for (f = 0; f < g; ++f) b[f] = a.names[f].name.$r().v;
        out("$ret = Sk.builtin.__import__(", a.module.$r().v, ",$gbl,$loc,[", b, "]);");
        this._checkSuspension(a);
        e = this._gr("module", "$ret");
        for (f = 0; f < g; ++f) {
            d = a.names[f];
            if (0 === f && "*" === d.name.v) {
                goog.asserts.assert(1 === g);
                out("Sk.importStar(", e, ",$loc, $gbl);");
                break
            }
            c = this._gr("item", "Sk.abstr.gattr(", e, ",", d.name.$r().v, ")");
            b = d.name;
            d.asname && (b = d.asname);
            this.nameop(b, Store, c)
        }
    };
    Compiler.prototype.buildcodeobj = function(a, b, c, d, e) {
        var f, g, h, k, l, m, p, n, r = [],
            q = null;
        f = null;
        c && this.vseqexpr(c);
        d && d.defaults && (r = this.vseqexpr(d.defaults));
        d && d.vararg && (q = d.vararg);
        d && d.kwarg && (f = d.kwarg);
        c = this.enterScope(b, a, a.lineno, this.canSuspend);
        a = this.u.ste.generator;
        n = this.u.ste.hasFree;
        m = this.u.ste.childHasFree;
        l = this.newBlock("codeobj entry");
        this.u.prefixCode = "var " + c + "=(function " + this.niceName(b.v) + "$(";
        h = [];
        if (a) {
            if (f) throw new SyntaxError(b.v + "(): keyword arguments in generators not supported");
            if (q) throw new SyntaxError(b.v + "(): variable number of arguments in generators not supported");
            h.push("$gen")
        } else
            for (f && (h.push("$kwa"), this.u.tempsToSave.push("$kwa")), k = 0; d && k < d.args.length; ++k) h.push(this.nameop(d.args[k].id, Param));
        n && (h.push("$free"), this.u.tempsToSave.push("$free"));
        this.u.prefixCode += h.join(",");
        this.u.prefixCode += "){";
        a && (this.u.prefixCode += "\n// generator\n");
        n && (this.u.prefixCode += "\n// has free\n");
        m && (this.u.prefixCode += "\n// has cell\n");
        p = "{}";
        a && (l = "$gen.gi$resumeat",
            p = "$gen.gi$locals");
        k = "";
        m && (k = a ? ",$cell=$gen.gi$cells" : ",$cell={}");
        this.u.varDeclsCode += "var $blk=" + l + ",$exc=[],$loc=" + p + k + ",$gbl=this,$err=undefined,$ret=undefined,currLineNo=undefined,currColNo=undefined;";
        null !== Sk.execLimit && (this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
        null !== Sk.yieldLimit && this.u.canSuspend && (this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
        this.u.varDeclsCode += "if (" + c + ".wakingSuspension!==undefined) { $wakeFromSuspension(); } else {";
        if (0 < r.length)
            for (m = d.args.length - r.length, k = 0; k < r.length; ++k) l = this.nameop(d.args[k + m].id, Param), this.u.varDeclsCode += "if(" + l + "===undefined)" + l + "=" + c + ".$defaults[" + k + "];";
        for (k = 0; d && k < d.args.length; ++k) l = d.args[k].id, this.isCell(l) && (this.u.varDeclsCode += "$cell." + l.v + "=" + l.v + ";");
        a || (l = d ? d.args.length - r.length : 0, k = q ? Infinity : d ? d.args.length : 0, this.u.varDeclsCode += 'Sk.builtin.pyCheckArgs("' + b.v + '", arguments, ' + l + ", " + k + ", " + (f ? !0 : !1) + ", " + n + ");");
        q && (h = h.length, this.u.localnames.push(q.v), this.u.varDeclsCode +=
            q.v + "=new Sk.builtins['tuple'](Array.prototype.slice.call(arguments," + h + ")); /*vararg*/");
        f && (this.u.localnames.push(f.v), this.u.varDeclsCode += f.v + "=new Sk.builtins['dict']($kwa);");
        this.u.varDeclsCode += "}";
        this.u.switchCode = "while(true){try{";
        this.u.switchCode += this.outputInterruptTest();
        this.u.switchCode += "switch($blk){";
        this.u.suffixCode = "} }catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: currLineNo, colno: currColNo, filename: '" +
            this.filename + "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});";
        e.call(this, c);
        if (d && 0 < d.args.length) {
            e = [];
            for (k = 0; k < d.args.length; ++k) e.push(d.args[k].id.v);
            g = e.join("', '");
            this.u.argnames = e
        }
        this.exitScope();
        0 < r.length && out(c, ".$defaults=[", r.join(","), "];");
        g && out(c, ".co_varnames=['", g, "'];");
        f && out(c, ".co_kwargs=1;");
        g = "";
        n && (g = ",$cell", (f = this.u.ste.hasFree) && (g += ",$free"));
        return a ? d && 0 < d.args.length ? this._gr("gener", "new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgs(\"",
            b.v, '",arguments,', d.args.length - r.length, ",", d.args.length, ");return new Sk.builtins['generator'](", c, ",$gbl,$origargs", g, ");}))") : this._gr("gener", "new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgs(\"", b.v, "\",arguments,0,0);return new Sk.builtins['generator'](", c, ",$gbl,[]", g, ");}))") : this._gr("funcobj", "new Sk.builtins['function'](", c, ",$gbl", g, ")")
    };
    Compiler.prototype.cfunction = function(a) {
        var b;
        goog.asserts.assert(a instanceof FunctionDef);
        b = this.buildcodeobj(a, a.name, a.decorator_list, a.args, function(b) {
            this.vseqstmt(a.body);
            out("return Sk.builtin.none.none$;")
        });
        this.nameop(a.name, Store, b)
    };
    Compiler.prototype.clambda = function(a) {
        goog.asserts.assert(a instanceof Lambda);
        return this.buildcodeobj(a, new Sk.builtin.str("<lambda>"), null, a.args, function(b) {
            b = this.vexpr(a.body);
            out("return ", b, ";")
        })
    };
    Compiler.prototype.cifexp = function(a) {
        var b = this.newBlock("next of ifexp"),
            c = this.newBlock("end of ifexp"),
            d = this._gr("res", "null"),
            e = this.vexpr(a.test);
        this._jumpfalse(e, b);
        out(d, "=", this.vexpr(a.body), ";");
        this._jump(c);
        this.setBlock(b);
        out(d, "=", this.vexpr(a.orelse), ";");
        this._jump(c);
        this.setBlock(c);
        return d
    };
    Compiler.prototype.cgenexpgen = function(a, b, c) {
        var d, e, f, g = this.newBlock("start for " + b),
            h = this.newBlock("skip for " + b);
        this.newBlock("if cleanup for " + b);
        var k = this.newBlock("end for " + b),
            l = a[b];
        0 === b ? e = "$loc.$iter0" : (d = this.vexpr(l.iter), e = "$loc." + this.gensym("iter"), out(e, "=", "Sk.abstr.iter(", d, ");"));
        this._jump(g);
        this.setBlock(g);
        this.annotateSource(c);
        out("$ret = Sk.abstr.iternext(", e, this.u.canSuspend ? ", true" : ", false", ");");
        this._checkSuspension(c);
        d = this._gr("next", "$ret");
        this._jumpundef(d,
            k);
        this.vexpr(l.target, d);
        f = l.ifs.length;
        for (e = 0; e < f; ++e) this.annotateSource(l.ifs[e]), d = this.vexpr(l.ifs[e]), this._jumpfalse(d, g);
        ++b < a.length && this.cgenexpgen(a, b, c);
        b >= a.length && (this.annotateSource(c), a = this.vexpr(c), out("return [", h, "/*resume*/,", a, "/*ret*/];"), this.setBlock(h));
        this._jump(g);
        this.setBlock(k);
        1 === b && out("return Sk.builtin.none.none$;")
    };
    Compiler.prototype.cgenexp = function(a) {
        var b = this.buildcodeobj(a, new Sk.builtin.str("<genexpr>"), null, null, function(b) {
                this.cgenexpgen(a.generators, 0, a.elt)
            }),
            b = this._gr("gener", "Sk.misceval.callsim(", b, ");");
        out(b, ".gi$locals.$iter0=Sk.abstr.iter(", this.vexpr(a.generators[0].iter), ");");
        return b
    };
    Compiler.prototype.cclass = function(a) {
        var b, c, d;
        goog.asserts.assert(a instanceof ClassDef);
        d = this.vseqexpr(a.bases);
        c = this.enterScope(a.name, a, a.lineno);
        b = this.newBlock("class entry");
        this.u.prefixCode = "var " + c + "=(function $" + a.name.v + "$class_outer($globals,$locals,$rest){var $gbl=$globals,$loc=$locals;";
        this.u.switchCode += "(function $" + a.name.v + "$_closure(){";
        this.u.switchCode += "var $blk=" + b + ",$exc=[],$ret=undefined,currLineNo=undefined,currColNo=undefined;";
        null !== Sk.execLimit && (this.u.switchCode +=
            "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
        null !== Sk.yieldLimit && this.u.canSuspend && (this.u.switchCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
        this.u.switchCode += "while(true){try{";
        this.u.switchCode += this.outputInterruptTest();
        this.u.switchCode += "switch($blk){";
        this.u.suffixCode = "}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: currLineNo, colno: currColNo, filename: '" +
            this.filename + "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }}}";
        this.u.suffixCode += "}).apply(null,$rest);});";
        this.u.private_ = a.name;
        this.cbody(a.body);
        out("return;");
        this.exitScope();
        b = this._gr("built", "Sk.misceval.buildClass($gbl,", c, ",", a.name.$r().v, ",[", d, "])");
        this.nameop(a.name, Store, b)
    };
    Compiler.prototype.ccontinue = function(a) {
        if (0 === this.u.continueBlocks.length) throw new SyntaxError("'continue' outside loop");
        this._jump(this.u.continueBlocks[this.u.continueBlocks.length - 1])
    };
    Compiler.prototype.vstmt = function(a) {
        var b, c, d;
        this.u.lineno = a.lineno;
        this.u.linenoSet = !1;
        this.u.localtemps = [];
        Sk.debugging && this.u.canSuspend && (b = this.newBlock("debug breakpoint for line " + a.lineno), out("if (Sk.breakpoints('" + this.filename + "'," + a.lineno + "," + a.col_offset + ")) {", "var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '" + this.filename + "'," + a.lineno + "," + a.col_offset + ");", "$susp.$blk = " + b + ";", "$susp.optional = true;", "return $susp;", "}"), this._jump(b), this.setBlock(b),
            this.u.doesSuspend = !0);
        this.annotateSource(a);
        switch (a.constructor) {
            case FunctionDef:
                this.cfunction(a);
                break;
            case ClassDef:
                this.cclass(a);
                break;
            case Return_:
                if (this.u.ste.blockType !== FunctionBlock) throw new SyntaxError("'return' outside function");
                a.value ? out("return ", this.vexpr(a.value), ";") : out("return Sk.builtin.none.none$;");
                break;
            case Delete_:
                this.vseqexpr(a.targets);
                break;
            case Assign:
                d = a.targets.length;
                c = this.vexpr(a.value);
                for (b = 0; b < d; ++b) this.vexpr(a.targets[b], c);
                break;
            case AugAssign:
                return this.caugassign(a);
            case Print:
                this.cprint(a);
                break;
            case For_:
                return this.cfor(a);
            case While_:
                return this.cwhile(a);
            case If_:
                return this.cif(a);
            case Raise:
                return this.craise(a);
            case TryExcept:
                return this.ctryexcept(a);
            case TryFinally:
                return this.ctryfinally(a);
            case Assert:
                return this.cassert(a);
            case Import_:
                return this.cimport(a);
            case ImportFrom:
                return this.cfromimport(a);
            case Global:
                break;
            case Expr:
                this.vexpr(a.value);
                break;
            case Pass:
                break;
            case Break_:
                if (0 === this.u.breakBlocks.length) throw new SyntaxError("'break' outside loop");
                this._jump(this.u.breakBlocks[this.u.breakBlocks.length - 1]);
                break;
            case Continue_:
                this.ccontinue(a);
                break;
            case Debugger_:
                out("debugger;");
                break;
            default:
                goog.asserts.fail("unhandled case in vstmt")
        }
    };
    Compiler.prototype.vseqstmt = function(a) {
        var b;
        for (b = 0; b < a.length; ++b) this.vstmt(a[b])
    };
    var OP_FAST = 0,
        OP_GLOBAL = 1,
        OP_DEREF = 2,
        OP_NAME = 3,
        D_NAMES = 0,
        D_FREEVARS = 1,
        D_CELLVARS = 2;
    Compiler.prototype.isCell = function(a) {
        a = mangleName(this.u.private_, a).v;
        return this.u.ste.getScope(a) === CELL
    };
    Compiler.prototype.nameop = function(a, b, c) {
        var d, e, f, g;
        if ((b === Store || b === AugStore || b === Del) && "__debug__" === a.v) throw new Sk.builtin.SyntaxError("can not assign to __debug__");
        if ((b === Store || b === AugStore || b === Del) && "None" === a.v) throw new Sk.builtin.SyntaxError("can not assign to None");
        if ("None" === a.v) return "Sk.builtin.none.none$";
        if ("True" === a.v) return "Sk.builtin.bool.true$";
        if ("False" === a.v) return "Sk.builtin.bool.false$";
        if ("NotImplemented" === a.v) return "Sk.builtin.NotImplemented.NotImplemented$";
        g = mangleName(this.u.private_, a).v;
        g = fixReservedNames(g);
        f = OP_NAME;
        e = this.u.ste.getScope(g);
        d = null;
        switch (e) {
            case FREE:
                d = "$free";
                f = OP_DEREF;
                break;
            case CELL:
                d = "$cell";
                f = OP_DEREF;
                break;
            case LOCAL:
                this.u.ste.blockType !== FunctionBlock || this.u.ste.generator || (f = OP_FAST);
                break;
            case GLOBAL_IMPLICIT:
                this.u.ste.blockType === FunctionBlock && (f = OP_GLOBAL);
                break;
            case GLOBAL_EXPLICIT:
                f = OP_GLOBAL
        }
        g = fixReservedWords(g);
        goog.asserts.assert(e || "_" === a.v.charAt(1));
        a = g;
        this.u.ste.generator || this.u.ste.blockType !== FunctionBlock ?
            g = "$loc." + g : f !== OP_FAST && f !== OP_NAME || this.u.localnames.push(g);
        switch (f) {
            case OP_FAST:
                switch (b) {
                    case Load:
                    case Param:
                        return out("if (", g, " === undefined) { throw new Sk.builtin.UnboundLocalError('local variable \\'", g, "\\' referenced before assignment'); }\n"), g;
                    case Store:
                        out(g, "=", c, ";");
                        break;
                    case Del:
                        out("delete ", g, ";");
                        break;
                    default:
                        goog.asserts.fail("unhandled")
                }
                break;
            case OP_NAME:
                switch (b) {
                    case Load:
                        return this._gr("loadname", g, "!==undefined?", g, ":Sk.misceval.loadname('", a, "',$gbl);");
                    case Store:
                        out(g,
                            "=", c, ";");
                        break;
                    case Del:
                        out("delete ", g, ";");
                        break;
                    case Param:
                        return g;
                    default:
                        goog.asserts.fail("unhandled")
                }
                break;
            case OP_GLOBAL:
                switch (b) {
                    case Load:
                        return this._gr("loadgbl", "Sk.misceval.loadname('", a, "',$gbl)");
                    case Store:
                        out("$gbl.", a, "=", c, ";");
                        break;
                    case Del:
                        out("delete $gbl.", a);
                        break;
                    default:
                        goog.asserts.fail("unhandled case in name op_global")
                }
                break;
            case OP_DEREF:
                switch (b) {
                    case Load:
                        return d + "." + a;
                    case Store:
                        out(d, ".", a, "=", c, ";");
                        break;
                    case Param:
                        return a;
                    default:
                        goog.asserts.fail("unhandled case in name op_deref")
                }
                break;
            default:
                goog.asserts.fail("unhandled case")
        }
    };
    Compiler.prototype.enterScope = function(a, b, c, d) {
        var e = new CompilerUnit;
        e.ste = this.st.getStsForAst(b);
        e.name = a;
        e.firstlineno = c;
        e.canSuspend = d || !1;
        this.u && this.u.private_ && (e.private_ = this.u.private_);
        this.stack.push(this.u);
        this.allUnits.push(e);
        a = this.gensym("scope");
        e.scopename = a;
        this.u = e;
        this.u.activateScope();
        this.nestlevel++;
        return a
    };
    Compiler.prototype.exitScope = function() {
        var a, b = this.u;
        this.nestlevel--;
        (this.u = 0 <= this.stack.length - 1 ? this.stack.pop() : null) && this.u.activateScope();
        "<module>" !== b.name.v && (a = b.name.$r().v, a = a.substring(1, a.length - 1), a = fixReservedWords(a), a = fixReservedNames(a), out(b.scopename, ".co_name=new Sk.builtins['str']('", a, "');"))
    };
    Compiler.prototype.cbody = function(a) {
        var b;
        for (b = 0; b < a.length; ++b) this.vstmt(a[b])
    };
    Compiler.prototype.cprint = function(a) {
        var b, c;
        goog.asserts.assert(a instanceof Print);
        a.dest && this.vexpr(a.dest);
        c = a.values.length;
        for (b = 0; b < c; ++b) out("Sk.misceval.print_(", "new Sk.builtins['str'](", this.vexpr(a.values[b]), ").v);");
        a.nl && out("Sk.misceval.print_(", '"\\n");')
    };
    Compiler.prototype.cmod = function(a) {
        var b = this.enterScope(new Sk.builtin.str("<module>"), a, 0, this.canSuspend),
            c = this.newBlock("module entry");
        this.u.prefixCode = "var " + b + "=(function($modname){";
        this.u.varDeclsCode = "var $gbl = {}, $blk=" + c + ",$exc=[],$loc=$gbl,$err=undefined;$gbl.__name__=$modname;$loc.__file__=new Sk.builtins.str('" + this.filename + "');var $ret=undefined,currLineNo=undefined,currColNo=undefined;";
        null !== Sk.execLimit && (this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}");
        null !== Sk.yieldLimit && this.u.canSuspend && (this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}");
        this.u.varDeclsCode += "if (" + b + ".wakingSuspension!==undefined) { $wakeFromSuspension(); }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }";
        this.u.switchCode = "while(true){try{";
        this.u.switchCode += this.outputInterruptTest();
        this.u.switchCode += "switch($blk){";
        this.u.suffixCode =
            "}";
        this.u.suffixCode += "}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: currLineNo, colno: currColNo, filename: '" + this.filename + "'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });";
        switch (a.constructor) {
            case Module:
                this.cbody(a.body);
                out("return $loc;");
                break;
            default:
                goog.asserts.fail("todo; unhandled case in compilerMod")
        }
        this.exitScope();
        this.result.push(this.outputAllUnits());
        return b
    };
    Sk.compile = function(a, b, c, d) {
        var e = Sk.parse(b, a);
        c = Sk.astFromParse(e.cst, b, e.flags);
        var e = e.flags,
            f = Sk.symboltable(c, b);
        a = new Compiler(b, f, e, d, a);
        b = a.cmod(c);
        a = a.result.join("");
        return {
            funcname: b,
            code: a
        }
    };
    goog.exportSymbol("Sk.compile", Sk.compile);
    Sk.resetCompiler = function() {
        Sk.gensymcount = 0
    };
    goog.exportSymbol("Sk.resetCompiler", Sk.resetCompiler);
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = void 0;
    Sk.externalLibraryCache = {};
    Sk.loadExternalLibraryInternal_ = function(a, b) {
        var c, d;
        if (null != a) {
            if (Sk.externalLibraryCache[a]) return Sk.externalLibraryCache[a];
            c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            if (200 === c.status) return d = c.responseText, b && (c = document.createElement("script"), c.type = "text/javascript", c.text = d, document.getElementsByTagName("head")[0].appendChild(c)), d
        }
    };
    Sk.loadExternalLibrary = function(a) {
        var b, c, d, e, f, g;
        if (Sk.externalLibraryCache[a]) return Sk.externalLibraryCache[a];
        if (b = Sk.externalLibraries && Sk.externalLibraries[a]) {
            c = "string" === typeof b ? b : b.path;
            if ("string" !== typeof c) throw new Sk.builtin.ImportError("Invalid path specified for " + a);
            g = b.type;
            g || (g = (d = c.match(/\.(js|py)$/)) && d[1]);
            if (!g) throw new Sk.builtin.ImportError("Invalid file extension specified for " + a);
            d = Sk.loadExternalLibraryInternal_(c, !1);
            if (!d) throw new Sk.builtin.ImportError("Failed to load remote module '" +
                a + "'");
            if ((e = b.dependencies) && e.length)
                for (b = 0; b < e.length; b++)
                    if (f = Sk.loadExternalLibraryInternal_(e[b], !0), !f) throw new Sk.builtin.ImportError("Failed to load dependencies required for " + a);
            c = "js" === g ? {
                funcname: "$builtinmodule",
                code: d
            } : Sk.compile(d, c, "exec", !0);
            return Sk.externalLibraryCache[a] = c
        }
    };
    Sk.importSearchPathForName = function(a, b, c, d, e) {
        var f, g = [],
            h = a.replace(/\./g, "/"),
            k, l;
        k = Sk.realsyspath.tp$iter();
        for (l = k.tp$iternext(); void 0 !== l; l = k.tp$iternext()) g.push(l.v + "/" + h + b), g.push(l.v + "/" + h + "/__init__" + b);
        g.push(e + "/" + h + b);
        g.push(e + "/" + h + "/__init__" + b);
        f = 0;
        return function p() {
            for (var b = function y(a) {
                    var b;
                    return a instanceof Sk.misceval.Suspension ? (b = new Sk.misceval.Suspension(void 0, a), b.resume = function() {
                        try {
                            return y(a.resume())
                        } catch (b) {
                            return f++, p()
                        }
                    }, b) : {
                        filename: g[f],
                        code: a
                    }
                }, e; f <
                g.length;) try {
                return e = Sk.read(g[f]), d || (e = Sk.misceval.retryOptionalSuspensionOrThrow(e)), b(e)
            } catch (h) {
                f++
            }
            if (c) return null;
            throw new Sk.builtin.ImportError(a+"ධාවනය වීමට කිසිවක් නොමැත");
        }()
    };
    Sk.doOneTimeInitialization = function() {
        var a, b, c;
        Sk.builtin.type.basesStr_ = new Sk.builtin.str("__bases__");
        Sk.builtin.type.mroStr_ = new Sk.builtin.str("__mro__");
        for (a in Sk.builtin)
            if (b = Sk.builtin[a], (b.prototype instanceof Sk.builtin.object || b === Sk.builtin.object) && !b.sk$abstract) {
                c = [];
                for (var d = void 0, d = b.tp$base; void 0 !== d; d = d.tp$base) c.push(d);
                b.$d = new Sk.builtin.dict([]);
                b.$d.mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple(c));
                b.$d.mp$ass_subscript(Sk.builtin.type.mroStr_, new Sk.builtin.tuple([b]))
            }
        a =
            Sk.builtin.object.prototype;
        for (c = 0; c < Sk.builtin.object.pythonFunctions.length; c++) {
            b = Sk.builtin.object.pythonFunctions[c];
            if (a[b] instanceof Sk.builtin.func) break;
            a[b] = new Sk.builtin.func(a[b])
        }
    };
    Sk.importSetUpPath = function() {
        var a, b;
        if (!Sk.realsyspath) {
            b = [new Sk.builtin.str("src/builtin"), new Sk.builtin.str("src/lib"), new Sk.builtin.str(".")];
            for (a = 0; a < Sk.syspath.length; ++a) b.push(new Sk.builtin.str(Sk.syspath[a]));
            Sk.realsyspath = new Sk.builtin.list(b);
            Sk.doOneTimeInitialization()
        }
    };
    if (COMPILED) var js_beautify = function(a) {
        return a
    };
    Sk.importModuleInternal_ = function(a, b, c, d, e, f) {
        var g, h, k, l, m, p, n, r, q, t, y, v;
        Sk.importSetUpPath();
        void 0 === c && (c = a);
        v = null;
        y = c.split(".");
        try {
            return p = Sk.sysmodules.mp$subscript(c), 1 < y.length ? Sk.sysmodules.mp$subscript(y[0]) : p
        } catch (z) {}
        if (1 < y.length && (t = y.slice(0, y.length - 1).join("."), v = Sk.importModuleInternal_(t, b, void 0, void 0, e, f), v instanceof Sk.misceval.Suspension)) return function w(g) {
            return g instanceof Sk.misceval.Suspension ? new Sk.misceval.Suspension(w, g) : Sk.importModuleInternal_(a, b, c, d,
                e, f)
        }(v);
        q = new Sk.builtin.module;
        Sk.sysmodules.mp$ass_subscript(a, q);
        if (d) n = a + ".py", p = Sk.compile(d, n, "exec", e);
        else {
            if (Sk.onBeforeImport && "function" === typeof Sk.onBeforeImport) {
                p = Sk.onBeforeImport(a);
                if (!1 === p) throw new Sk.builtin.ImportError("Importing " + a + " is not allowed");
                if ("string" === typeof p) throw new Sk.builtin.ImportError(p);
            }(p = Sk.loadExternalLibrary(a)) ? n = Sk.externalLibraries ? Sk.externalLibraries[a].path : "unknown": (p = Sk.importSearchPathForName(a, ".js", !0, e, f), p = function E(b) {
                if (b instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(E, b);
                if (b) return n = b.filename, r ? Sk.compile(b.code, b.filename, "exec", e) : {
                    funcname: "$builtinmodule",
                    code: b.code
                };
                goog.asserts.assert(!r, "Sk.importReadFileFromPath did not throw when loading Python file failed");
                r = !0;
                return E(Sk.importSearchPathForName(a, ".py", !1, e, f))
            }(p))
        }
        return function x(d) {
            if (d instanceof Sk.misceval.Suspension) return e ? new Sk.misceval.Suspension(x, d) : Sk.misceval.retryOptionalSuspensionOrThrow(d);
            m = q.$js = d.code;
            null == n && (n =
                d.filename);
            null != Sk.dateSet && Sk.dateSet || (m = "Sk.execStart = Sk.lastYield = new Date();\n" + d.code, Sk.dateSet = !0);
            b && (l = function(a) {
                var b, c, d = js_beautify(a).split("\n");
                for (c = 1; c <= d.length; ++c) {
                    b = ("" + c).length;
                    for (a = ""; 5 > b; ++b) a += " ";
                    d[c - 1] = "/* " + a + c + " */ " + d[c - 1]
                }
                return d.join("\n")
            }, m = l(m), Sk.debugout(m));
            k = "new Sk.builtin.str('" + c + "')";
            m += "\n" + d.funcname + "(" + k + ");";
            h = goog.global.eval(m);
            return function C(b) {
                if (b instanceof Sk.misceval.Suspension) {
                    if (e) return new Sk.misceval.Suspension(C, b);
                    b = Sk.misceval.retryOptionalSuspensionOrThrow(b,
                        'Module "' + c + '" suspended or blocked during load, and it was loaded somewhere that does not permit this')
                }
                b.__name__ || (b.__name__ = new Sk.builtin.str(c));
                b.__path__ = new Sk.builtin.str(n);
                q.$d = b;
                b.__doc__ || (b.__doc__ = Sk.builtin.none.none$);
                if (Sk.onAfterImport && "function" === typeof Sk.onAfterImport) try {
                    Sk.onAfterImport(a)
                } catch (d) {}
                return v ? (g = Sk.sysmodules.mp$subscript(t), g.tp$setattr(y[y.length - 1], q), v) : q
            }(h)
        }(p)
    };
    Sk.importModule = function(a, b, c) {
        return Sk.importModuleInternal_(a, b, void 0, void 0, c)
    };
    Sk.importMain = function(a, b, c) {
        Sk.dateSet = !1;
        Sk.filesLoaded = !1;
        Sk.sysmodules = new Sk.builtin.dict([]);
        Sk.realsyspath = void 0;
        Sk.resetCompiler();
        return Sk.importModuleInternal_(a, b, "__main__", void 0, c)
    };
    Sk.importMainWithBody = function(a, b, c, d) {
        Sk.dateSet = !1;
        Sk.filesLoaded = !1;
        Sk.sysmodules = new Sk.builtin.dict([]);
        Sk.realsyspath = void 0;
        Sk.resetCompiler();
        return Sk.importModuleInternal_(a, b, "__main__", c, d)
    };
    Sk.builtin.__import__ = function(a, b, c, d) {
        var e = Sk.globals,
            f = void 0 === c.__file__ ? void 0 : c.__file__.v.substring(0, c.__file__.v.lastIndexOf("/"));
        return function h(b) {
            if (b instanceof Sk.misceval.Suspension) return new Sk.misceval.Suspension(h, b);
            e !== Sk.globals && (Sk.globals = e);
            if (d && 0 !== d.length) {
                var c, m, p, n = a.split("."),
                    n = n[n.length - 1];
                for (c = 0; c < d.length; c++) p = d[c], "*" == p || (null != b.$d[p] || null == b.$d[n] && b.$d.__name__.v != n) || (m = "" + a + "." + p, m = Sk.importModuleInternal_(m, void 0, void 0, void 0, !0, f), b.$d[p] =
                    m)
            } else return b;
            b = Sk.sysmodules.mp$subscript(a);
            goog.asserts.assert(b);
            return b
        }(Sk.importModuleInternal_(a, void 0, void 0, void 0, !0, f))
    };
    Sk.importStar = function(a, b, c) {
        var d, e = c.__name__,
            f = Object.getOwnPropertyNames(a.$d);
        for (d in f) b[f[d]] = a.$d[f[d]];
        c.__name__ !== e && (c.__name__ = e)
    };
    goog.exportSymbol("Sk.importMain", Sk.importMain);
    goog.exportSymbol("Sk.importMainWithBody", Sk.importMainWithBody);
    goog.exportSymbol("Sk.builtin.__import__", Sk.builtin.__import__);
    goog.exportSymbol("Sk.importStar", Sk.importStar);
    Sk.builtin.timSort = function(a, b) {
        this.list = new Sk.builtin.list(a.v);
        this.MIN_GALLOP = 7;
        this.listlength = b ? b : a.sq$length()
    };
    Sk.builtin.timSort.prototype.lt = function(a, b) {
        return Sk.misceval.richCompareBool(a, b, "Lt")
    };
    Sk.builtin.timSort.prototype.le = function(a, b) {
        return !this.lt(b, a)
    };
    Sk.builtin.timSort.prototype.setitem = function(a, b) {
        this.list.v[a] = b
    };
    Sk.builtin.timSort.prototype.binary_sort = function(a, b) {
        var c, d, e, f, g;
        for (g = a.base + b; g < a.base + a.len; g++) {
            f = a.base;
            e = g;
            for (c = a.getitem(e); f < e;) d = f + (e - f >> 1), this.lt(c, a.getitem(d)) ? e = d : f = d + 1;
            goog.asserts.assert(f === e);
            for (d = g; d > f; d--) a.setitem(d, a.getitem(d - 1));
            a.setitem(f, c)
        }
    };
    Sk.builtin.timSort.prototype.count_run = function(a) {
        var b, c, d;
        if (1 >= a.len) b = a.len, d = !1;
        else if (b = 2, this.lt(a.getitem(a.base + 1), a.getitem(a.base)))
            for (d = !0, c = a.base + 2; c < a.base + a.len; c++)
                if (this.lt(a.getitem(c), a.getitem(c - 1))) b++;
                else break;
        else
            for (d = !1, c = a.base + 2; c < a.base + a.len && !this.lt(a.getitem(c), a.getitem(c - 1)); c++) b++;
        return {
            run: new Sk.builtin.listSlice(a.list, a.base, b),
            descending: d
        }
    };
    Sk.builtin.timSort.prototype.sort = function() {
        var a, b, c, d = new Sk.builtin.listSlice(this.list, 0, this.listlength);
        if (!(2 > d.len)) {
            this.merge_init();
            for (a = this.merge_compute_minrun(d.len); 0 < d.len;) b = this.count_run(d), b.descending && b.run.reverse(), b.run.len < a && (c = b.run.len, b.run.len = a < d.len ? a : d.len, this.binary_sort(b.run, c)), d.advance(b.run.len), this.pending.push(b.run), this.merge_collapse();
            goog.asserts.assert(d.base == this.listlength);
            this.merge_force_collapse();
            goog.asserts.assert(1 == this.pending.length);
            goog.asserts.assert(0 === this.pending[0].base);
            goog.asserts.assert(this.pending[0].len == this.listlength)
        }
    };
    Sk.builtin.timSort.prototype.gallop = function(a, b, c, d) {
        var e, f, g, h, k;
        goog.asserts.assert(0 <= c && c < b.len);
        e = this;
        d = d ? function(a, b) {
            return e.le(a, b)
        } : function(a, b) {
            return e.lt(a, b)
        };
        f = b.base + c;
        g = 0;
        h = 1;
        if (d(b.getitem(f), a)) {
            for (k = b.len - c; h < k;)
                if (d(b.getitem(f + h), a)) {
                    g = h;
                    try {
                        h = (h << 1) + 1
                    } catch (l) {
                        h = k
                    }
                } else break;
            h > k && (h = k);
            g += c;
            h += c
        } else {
            for (k = c + 1; h < k && !d(b.getitem(f - h), a);) {
                g = h;
                try {
                    h = (h << 1) + 1
                } catch (m) {
                    h = k
                }
            }
            h > k && (h = k);
            f = c - g;
            g = c - h;
            h = f
        }
        goog.asserts.assert(-1 <= g < h <= b.len);
        for (g += 1; g < h;) c = g + (h - g >> 1), d(b.getitem(b.base +
            c), a) ? g = c + 1 : h = c;
        goog.asserts.assert(g == h);
        return h
    };
    Sk.builtin.timSort.prototype.merge_init = function() {
        this.min_gallop = this.MIN_GALLOP;
        this.pending = []
    };
    Sk.builtin.timSort.prototype.merge_lo = function(a, b) {
        var c, d, e, f, g;
        goog.asserts.assert(0 < a.len && 0 < b.len && a.base + a.len == b.base);
        c = this.min_gallop;
        d = a.base;
        a = a.copyitems();
        try {
            if (this.setitem(d, b.popleft()), d++, 1 != a.len && 0 !== b.len)
                for (;;) {
                    for (f = e = 0;;)
                        if (this.lt(b.getitem(b.base), a.getitem(a.base))) {
                            this.setitem(d, b.popleft());
                            d++;
                            if (0 === b.len) return;
                            f++;
                            e = 0;
                            if (f >= c) break
                        } else {
                            this.setitem(d, a.popleft());
                            d++;
                            if (1 == a.len) return;
                            e++;
                            f = 0;
                            if (e >= c) break
                        }
                    for (c += 1;;) {
                        this.min_gallop = c -= 1 < c;
                        e = this.gallop(b.getitem(b.base),
                            a, 0, !0);
                        for (g = a.base; g < a.base + e; g++) this.setitem(d, a.getitem(g)), d++;
                        a.advance(e);
                        if (1 >= a.len) return;
                        this.setitem(d, b.popleft());
                        d++;
                        if (0 === b.len) return;
                        f = this.gallop(a.getitem(a.base), b, 0, !1);
                        for (g = b.base; g < b.base + f; g++) this.setitem(d, b.getitem(g)), d++;
                        b.advance(f);
                        if (0 === b.len) return;
                        this.setitem(d, a.popleft());
                        d++;
                        if (1 == a.len) return;
                        if (e < this.MIN_GALLOP && f < this.MIN_GALLOP) break;
                        c++;
                        this.min_gallop = c
                    }
                }
        } finally {
            goog.asserts.assert(0 <= a.len && 0 <= b.len);
            for (g = b.base; g < b.base + b.len; g++) this.setitem(d,
                b.getitem(g)), d++;
            for (g = a.base; g < a.base + a.len; g++) this.setitem(d, a.getitem(g)), d++
        }
    };
    Sk.builtin.timSort.prototype.merge_hi = function(a, b) {
        var c, d, e, f, g, h, k, l;
        goog.asserts.assert(0 < a.len && 0 < b.len && a.base + a.len == b.base);
        c = this.min_gallop;
        d = b.base + b.len;
        b = b.copyitems();
        try {
            if (d--, this.setitem(d, a.popright()), 0 !== a.len && 1 != b.len)
                for (;;) {
                    for (f = e = 0;;)
                        if (g = a.getitem(a.base + a.len - 1), h = b.getitem(b.base + b.len - 1), this.lt(h, g)) {
                            d--;
                            this.setitem(d, g);
                            a.len--;
                            if (0 === a.len) return;
                            e++;
                            f = 0;
                            if (e >= c) break
                        } else {
                            d--;
                            this.setitem(d, h);
                            b.len--;
                            if (1 == b.len) return;
                            f++;
                            e = 0;
                            if (f >= c) break
                        }
                    for (c += 1;;) {
                        this.min_gallop =
                            c -= 1 < c;
                        h = b.getitem(b.base + b.len - 1);
                        k = this.gallop(h, a, a.len - 1, !0);
                        e = a.len - k;
                        for (l = a.base + a.len - 1; l > a.base + k - 1; l--) d--, this.setitem(d, a.getitem(l));
                        a.len -= e;
                        if (0 === a.len) return;
                        d--;
                        this.setitem(d, b.popright());
                        if (1 == b.len) return;
                        g = a.getitem(a.base + a.len - 1);
                        k = this.gallop(g, b, b.len - 1, !1);
                        f = b.len - k;
                        for (l = b.base + b.len - 1; l > b.base + k - 1; l--) d--, this.setitem(d, b.getitem(l));
                        b.len -= f;
                        if (1 >= b.len) return;
                        d--;
                        this.setitem(d, a.popright());
                        if (0 === a.len) return;
                        if (e < this.MIN_GALLOP && f < this.MIN_GALLOP) break;
                        c++;
                        this.min_gallop =
                            c
                    }
                }
        } finally {
            goog.asserts.assert(0 <= a.len && 0 <= b.len);
            for (l = a.base + a.len - 1; l > a.base - 1; l--) d--, this.setitem(d, a.getitem(l));
            for (l = b.base + b.len - 1; l > b.base - 1; l--) d--, this.setitem(d, b.getitem(l))
        }
    };
    Sk.builtin.timSort.prototype.merge_at = function(a) {
        var b, c;
        0 > a && (a = this.pending.length + a);
        b = this.pending[a];
        c = this.pending[a + 1];
        goog.asserts.assert(0 < b.len && 0 < c.len);
        goog.asserts.assert(b.base + b.len == c.base);
        this.pending[a] = new Sk.builtin.listSlice(this.list, b.base, b.len + c.len);
        this.pending.splice(a + 1, 1);
        a = this.gallop(c.getitem(c.base), b, 0, !0);
        b.advance(a);
        0 !== b.len && (c.len = this.gallop(b.getitem(b.base + b.len - 1), c, c.len - 1, !1), 0 !== c.len && (b.len <= c.len ? this.merge_lo(b, c) : this.merge_hi(b, c)))
    };
    Sk.builtin.timSort.prototype.merge_collapse = function() {
        for (var a = this.pending; 1 < a.length;)
            if (3 <= a.length && a[a.length - 3].len <= a[a.length - 2].len + a[a.length - 1].len) a[a.length - 3].len < a[a.length - 1].len ? this.merge_at(-3) : this.merge_at(-2);
            else if (a[a.length - 2].len <= a[a.length - 1].len) this.merge_at(-2);
        else break
    };
    Sk.builtin.timSort.prototype.merge_force_collapse = function() {
        for (var a = this.pending; 1 < a.length;) 3 <= a.length && a[a.length - 3].len < a[a.length - 1].len ? this.merge_at(-3) : this.merge_at(-2)
    };
    Sk.builtin.timSort.prototype.merge_compute_minrun = function(a) {
        for (var b = 0; 64 <= a;) b |= a & 1, a >>= 1;
        return a + b
    };
    Sk.builtin.listSlice = function(a, b, c) {
        this.list = a;
        this.base = b;
        this.len = c
    };
    Sk.builtin.listSlice.prototype.copyitems = function() {
        var a = this.base,
            b = this.base + this.len;
        goog.asserts.assert(0 <= a <= b);
        return new Sk.builtin.listSlice(new Sk.builtin.list(this.list.v.slice(a, b)), 0, this.len)
    };
    Sk.builtin.listSlice.prototype.advance = function(a) {
        this.base += a;
        this.len -= a;
        goog.asserts.assert(this.base <= this.list.sq$length())
    };
    Sk.builtin.listSlice.prototype.getitem = function(a) {
        return this.list.v[a]
    };
    Sk.builtin.listSlice.prototype.setitem = function(a, b) {
        this.list.v[a] = b
    };
    Sk.builtin.listSlice.prototype.popleft = function() {
        var a = this.list.v[this.base];
        this.base++;
        this.len--;
        return a
    };
    Sk.builtin.listSlice.prototype.popright = function() {
        this.len--;
        return this.list.v[this.base + this.len]
    };
    Sk.builtin.listSlice.prototype.reverse = function() {
        for (var a, b, c = this.list, d = this.base, e = d + this.len - 1; d < e;) a = c.v[e], b = c.v[d], c.v[d] = a, c.v[e] = b, d++, e--
    };
    goog.exportSymbol("Sk.builtin.listSlice", Sk.builtin.listSlice);
    goog.exportSymbol("Sk.builtin.timSort", Sk.builtin.timSort);
    Sk.builtin.sorted = function(a, b, c, d) {
        var e, f, g;
        if (void 0 === d) d = !1;
        else {
            if (d instanceof Sk.builtin.float_) throw new Sk.builtin.TypeError("an integer is required, got float");
            if (d instanceof Sk.builtin.int_ || d.prototype instanceof Sk.builtin.int_) d = Sk.misceval.isTrue(d);
            else throw new Sk.builtin.TypeError("an integer is required");
        }
        if (void 0 === c || c instanceof Sk.builtin.none) b instanceof Sk.builtin.none || void 0 === b || (g = b);
        else
            for (g = b instanceof Sk.builtin.none || void 0 === b ? function(a, b) {
                    return Sk.misceval.richCompareBool(a[0],
                        b[0], "Lt") ? new Sk.builtin.int_(-1) : new Sk.builtin.int_(0)
                } : function(a, c) {
                    return Sk.misceval.callsim(b, a[0], c[0])
                }, f = a.tp$iter(), e = f.tp$iternext(), a = []; void 0 !== e;) a.push([Sk.misceval.callsim(c, e), e]), e = f.tp$iternext();
        a = new Sk.builtin.list(a);
        void 0 !== g ? a.list_sort_(a, g) : a.list_sort_(a);
        d && a.list_reverse_(a);
        if (void 0 !== c && !(c instanceof Sk.builtin.none)) {
            f = a.tp$iter();
            e = f.tp$iternext();
            for (a = []; void 0 !== e;) a.push(e[1]), e = f.tp$iternext();
            a = new Sk.builtin.list(a)
        }
        return a
    };
    Sk.builtins = {
        range: Sk.builtin.range,
        round: Sk.builtin.round,
        len: Sk.builtin.len,
        min: Sk.builtin.min,
        max: Sk.builtin.max,
        sum: Sk.builtin.sum,
        zip: Sk.builtin.zip,
        abs: Sk.builtin.abs,
        fabs: Sk.builtin.abs,
        ord: Sk.builtin.ord,
        chr: Sk.builtin.chr,
        hex: Sk.builtin.hex,
        oct: Sk.builtin.oct,
        bin: Sk.builtin.bin,
        dir: Sk.builtin.dir,
        repr: Sk.builtin.repr,
        open: Sk.builtin.open,
        isinstance: Sk.builtin.isinstance,
        hash: Sk.builtin.hash,
        getattr: Sk.builtin.getattr,
        float_$rw$: Sk.builtin.float_,
        int_$rw$: Sk.builtin.int_,
        hasattr: Sk.builtin.hasattr,
        map: Sk.builtin.map,
        filter: Sk.builtin.filter,
        reduce: Sk.builtin.reduce,
        sorted: Sk.builtin.sorted,
        bool: Sk.builtin.bool,
        any: Sk.builtin.any,
        all: Sk.builtin.all,
        enumerate: Sk.builtin.enumerate,
        AttributeError: Sk.builtin.AttributeError,
        ValueError: Sk.builtin.ValueError,
        Exception: Sk.builtin.Exception,
        ZeroDivisionError: Sk.builtin.ZeroDivisionError,
        AssertionError: Sk.builtin.AssertionError,
        ImportError: Sk.builtin.ImportError,
        IndentationError: Sk.builtin.IndentationError,
        IndexError: Sk.builtin.IndexError,
        KeyError: Sk.builtin.KeyError,
        TypeError: Sk.builtin.TypeError,
        NameErrorsss: Sk.builtin.NameError,
        IOError: Sk.builtin.IOError,
        NotImplementedError: Sk.builtin.NotImplementedError,
        StandardError: Sk.builtin.StandardError,
        SystemExit: Sk.builtin.SystemExit,
        OverflowError: Sk.builtin.OverflowError,
        OperationError: Sk.builtin.OperationError,
        RuntimeError: Sk.builtin.RuntimeError,
        StopIteration: Sk.builtin.StopIteration,
        dict: Sk.builtin.dict,
        file: Sk.builtin.file,
        "function": Sk.builtin.func,
        generator: Sk.builtin.generator,
        list: Sk.builtin.list,
        long_$rw$: Sk.builtin.lng,
        method: Sk.builtin.method,
        object: Sk.builtin.object,
        slice: Sk.builtin.slice,
        str: Sk.builtin.str,
        set: Sk.builtin.set,
        tuple: Sk.builtin.tuple,
        type: Sk.builtin.type,
        input: Sk.builtin.input,
        raw_input: Sk.builtin.raw_input,
        setattr: Sk.builtin.setattr,
        jseval: Sk.builtin.jseval,
        jsmillis: Sk.builtin.jsmillis,
        quit: Sk.builtin.quit,
        exit: Sk.builtin.quit,
        print: Sk.builtin.print,
        divmod: Sk.builtin.divmod,
        format: Sk.builtin.format,
        globals: Sk.builtin.globals,
        issubclass: Sk.builtin.issubclass,
        iter: Sk.builtin.iter,
        complex: Sk.builtin.complex,
        bytearray: Sk.builtin.bytearray,
        callable: Sk.builtin.callable,
        delattr: Sk.builtin.delattr,
        eval_$rn$: Sk.builtin.eval_,
        execfile: Sk.builtin.execfile,
        frozenset: Sk.builtin.frozenset,
        help: Sk.builtin.help,
        locals: Sk.builtin.locals,
        memoryview: Sk.builtin.memoryview,
        next: Sk.builtin.next_,
        pow: Sk.builtin.pow,
        property: Sk.builtin.property,
        reload: Sk.builtin.reload,
        reversed: Sk.builtin.reversed,
        "super": Sk.builtin.superbi,
        unichr: Sk.builtin.unichr,
        vars: Sk.builtin.vars,
        xrange: Sk.builtin.xrange,
        apply_$rn$: Sk.builtin.apply_,
        buffer: Sk.builtin.buffer,
        coerce: Sk.builtin.coerce,
        intern: Sk.builtin.intern
    };
    goog.exportSymbol("Sk.builtins", Sk.builtins);
    Sk.builtin.str.$emptystr = new Sk.builtin.str("");
    Sk.builtin.bool.true$ = Object.create(Sk.builtin.bool.prototype, {
        v: {
            value: 1,
            enumerable: !0
        }
    });
    Sk.builtin.bool.false$ = Object.create(Sk.builtin.bool.prototype, {
        v: {
            value: 0,
            enumerable: !0
        }
    });
    Sk.builtin.int_.co_varnames = ["base"];
    Sk.builtin.int_.co_numargs = 2;
    Sk.builtin.int_.$defaults = [new Sk.builtin.int_(10)];
    Sk.builtin.lng.co_varnames = ["base"];
    Sk.builtin.lng.co_numargs = 2;
    Sk.builtin.lng.$defaults = [new Sk.builtin.int_(10)];
    Sk.builtin.sorted.co_varnames = ["cmp", "key", "reverse"];
    Sk.builtin.sorted.co_numargs = 4;
    Sk.builtin.sorted.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, Sk.builtin.bool.false$];
}());
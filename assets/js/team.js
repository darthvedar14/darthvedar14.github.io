String.prototype.iO = function (t) {
    return this.toString().indexOf(t) + 1
}, function (t) {
    t.fn.hoverIntent = function (e, i, n) {
        var o,
        r,
        s,
        a,
        l = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        l = "object" == typeof e ? t.extend(l, e) : t.isFunction(i) ? t.extend(l, {
            over: e,
            out: i,
            selector: n
        }) : t.extend(l, {
            over: e,
            out: e,
            selector: i
        });
        var c = function (t) {
            o = t.pageX,
            r = t.pageY
        },
        u = function (e, i) {
            if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(s - o) + Math.abs(a - r) < l.sensitivity)
                return t(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = 1, l.over.apply(i, [e]);
            s = o,
            a = r,
            i.hoverIntent_t = setTimeout(function () {
                u(e, i)
            }, l.interval)
        },
        d = function (e) {
            var i = jQuery.extend({}, e),
            n = this;
            n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
            "mouseenter" == e.type ? (s = i.pageX, a = i.pageY, t(n).on("mousemove.hoverIntent", c), 1 != n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function () {
                        u(i, n)
                    }, l.interval))) : (t(n).off("mousemove.hoverIntent", c), 1 == n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function () {
                        !function (t, e) {
                            e.hoverIntent_t = clearTimeout(e.hoverIntent_t),
                            e.hoverIntent_s = 0,
                            l.out.apply(e, [t])
                        }
                        (i, n)
                    }, l.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": d,
            "mouseleave.hoverIntent": d
        }, l.selector)
    }
}
(jQuery);
var l = 0, pass = 0, api = window.history && window.history.pushState && window.history.replaceState, docType = /<\!DOCTYPE[^>]*>/i, tagso = /<(html|head|body|title|meta|script|link)([\s\>])/gi, tagsc = /<\/(html|head|body|title|meta|script|link)\>/gi, div12 = '<div class="ajy-$1"$2', linki = '<link rel="stylesheet" type="text/css" href="*" />', scri = '<script type="text/javascript" src="*" />', linkr = 'link[href*="!"]', scrr = 'script[src*="!"]';
function FastClick(t, e) {
    "use strict";
    function i(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }
    var n;
    if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, !FastClick.notNeeded(t)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, s = 0, a = o.length; a > s; s++)
            r[o[s]] = i(r[o[s]], r);
        deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
        t.addEventListener("click", this.onClick, !0),
        t.addEventListener("touchstart", this.onTouchStart, !1),
        t.addEventListener("touchmove", this.onTouchMove, !1),
        t.addEventListener("touchend", this.onTouchEnd, !1),
        t.addEventListener("touchcancel", this.onTouchCancel, !1),
        Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, i, n) {
            var o = Node.prototype.removeEventListener;
            "click" === e ? o.call(t, e, i.hijacked || i, n) : o.call(t, e, i, n)
        }, t.addEventListener = function (e, i, n) {
            var o = Node.prototype.addEventListener;
            "click" === e ? o.call(t, e, i.hijacked || (i.hijacked = function (t) {
                    t.propagationStopped || i(t)
                }), n) : o.call(t, e, i, n)
        }),
        "function" == typeof t.onclick && (n = t.onclick, t.addEventListener("click", function (t) {
                n(t)
            }, !1), t.onclick = null)
    }
}
!function (t) {
    t.log = function (e, i) {
        return t.log.o || (t.log.o = new function (e) {
            var i = window.console,
            n = t.extend({
                verbosity: 0
            }, e).verbosity;
            this.a = function (t) {
                l < n && i && i.log(t)
            }
        }
            (i)),
        t.log.o.a(e)
    }
}
(jQuery), function (t) {
    t.cache = function (e) {
        return t.cache.o || (t.cache.o = new function () {
            var e = !1;
            this.a = function (i) {
                return i ? "string" == typeof i ? ("f" === i ? (t.pages("f"), t.log("Cache flushed")) : e = t.pages(t.memory(i)), e) : "object" == typeof i ? e = i : void 0 : e
            }
        }),
        t.cache.o.a(e)
    }
}
(jQuery), function (t) {
    t.memory = function (e, i) {
        return t.memory.o || (t.memory.o = new function (e) {
            var i = !1,
            n = t.extend({
                memoryoff: !1
            }, e).memoryoff;
            this.a = function (t) {
                return i = n,
                !(!t || !0 === i) && (!1 === i ? t : i.iO(", ") ? !(i = i.split(", ")).iO(t) && t : t != i && t)
            }
        }
            (i)),
        t.memory.o.a(e)
    }
}
(jQuery), function (t) {
    t.pages = function (e) {
        return t.pages.o || (t.pages.o = new function () {
            var t = [];
            this.a = function (e) {
                if ("string" == typeof e)
                    if ("f" === e)
                        t = [];
                    else
                        for (var i = 0; i < t.length; i++)
                            if (t[i][0] == e)
                                return t[i][1];
                if ("object" == typeof e && t.push(e), "boolean" == typeof e)
                    return !1
            }
        }),
        t.pages.o.a(e)
    }
}
(jQuery), function (t) {
    var e = function () {
        function e(e, n, o, r) {
            if (e.iO("#") && (e = e.split("#")[0]), o || !t.cache(e))
                return function (e, n, o, r) {
                    var s = t.ajax({
                        url: e,
                        type: o ? "POST" : "GET",
                        data: o ? o.data : null,
                        success: function (o) {
                            var a;
                            o && ((a = s.getResponseHeader("Content-Type")) && (a.iO("text/html") || a.iO("text/xml"))) || r || (location.href = e),
                            t.cache(t(i(o))),
                            t.pages([e, t.cache()]),
                            n && n()
                        },
                        error: function (o, r, s) {
                            try {
                                t.log("Response text : " + o.responseText),
                                t.cache(t(i(o.responseText))),
                                t.pages([e, t.cache()]),
                                n && n(s)
                            } catch (t) {}
                        }
                    })
                }
            (e, n, o, r);
            n && n()
        }
        function i(e) {
            return t.trim(function (t) {
                return String(t).replace(docType, "").replace(tagso, div12).replace(tagsc, "</div>")
            }
                (e))
        }
        this.a = function (i, n, o) {
            return i ? i.iO("https://sandwich.co/") ? e(i, n, o) : "+" === i ? e(n, o, !1, !0) : "-" === i ? function (e, i) {
                return pass++,
                function (e) {
                    t.cache() && e.each(function () {
                        var e,
                        i;
                        e = t(this),
                        (i = t.cache().find("#" + t(this).attr("id"))).find(".ajy-script").each(function () {
                            t(this).attr("src") ? t(this).replaceWith(scri.replace("*", t(this).attr("src"))) : t(this).replaceWith('<script type="text/javascript">' + t(this).text() + "<\/script>")
                        }),
                        e.html(i.html())
                    })
                }
                (i),
                t.scripts(e),
                t.scripts("s"),
                t.scripts("a"),
                t.scripts("c")
            }
            (n, o) : t.cache() ? t.cache().find(".ajy-" + i) : void 0 : t.cache()
        }
    };
    t.getPage = function (i, n, o) {
        return t.getPage.o || (t.getPage.o = new e),
        t.getPage.o.a(i, n, o)
    }
}
(jQuery), function (t) {
    var e = function (e) {
        var i = t.extend({
            pluginon: !0,
            deltas: !0,
            fn: t.getPage
        }, e),
        n = i.pluginon,
        o = i.deltas;
        this.a = function (e, r) {
            if (r)
                return t().pronto(r);
            t(function () {
                var r;
                r = i,
                api && n && (t.scripts("i", r), t.cache(0, r), t.memory(0, r), 1) && (e.pronto(0, i), o && t.getPage(location.href, t.scripts))
            })
        }
    };
    t.fn.ajaxify = function (i) {
        var n = t(this);
        return t.fn.ajaxify.o || (t.fn.ajaxify.o = new e(i)),
        "string" == typeof i ? t.fn.ajaxify.o.a(n, i) : t.fn.ajaxify.o.a(n)
    }
}
(jQuery), function ($) {
    var Scripts = function (options) {
        var $s = $(),
        settings = $.extend({
            canonical: !0,
            inline: !0,
            inlinehints: !1,
            style: !0
        }, options),
        canonical = settings.canonical,
        inline = settings.inline,
        inlinehints = settings.inlinehints,
        style = settings.style;
        function _allstyle(t) {
            style && t && ($("head").find("style").remove(), t.each(function () {
                    _addstyle($(this).text())
                }))
        }
        function _alltxts(t) {
            t.each(function () {
                var t = $(this).text();
                !t.iO(").ajaxify(") && (inline || $(this).hasClass("ajaxy") || _inline(t)) && _addtext(t)
            })
        }
        function _addtext(t) {
            try {
                eval(t)
            } catch (t) {}
        }
        function _addstyle(t) {
            $("head").append('<style type="text/css">' + t + "</style>")
        }
        function _inline(t) {
            var e = inlinehints;
            if (e) {
                e = e.split(", ");
                for (var i = 0; i < e.length; i++)
                    if (t.iO(e[i]))
                        return !0
            }
        }
        function _addScripts(t, e, i) {
            e.c.addAll(t, "href", i),
            e.s.addAll(t, "src", i)
        }
        this.a = function (t) {
            return "i" === t || ("s" === t ? _allstyle($s.y) : "a" === t ? _alltxts($s.t) : "c" === t ? !(!canonical || !$s.can) && $s.can.attr("href") : ($.detScripts($s), void _addScripts(t, $s, settings)))
        }
    };
    $.scripts = function (t, e) {
        return $.scripts.o || ($.scripts.o = new Scripts(e)),
        $.scripts.o.a(t)
    }
}
(jQuery), function (t) {
    t.detScripts = function (e) {
        return t.detScripts.o || (t.detScripts.o = new function () {
            var e,
            i,
            n;
            function o(e, i) {
                return t(e).filter(function () {
                    return t(this).attr("rel").iO(i)
                })
            }
            this.a = function (r) {
                e = t.getPage("head"),
                i = e.find(".ajy-link"),
                n = t.getPage("script"),
                r.c = o(i, "stylesheet"),
                r.y = e.find("style"),
                r.can = o(i, "canonical"),
                r.s = n.filter(function () {
                    return t(this).attr("src")
                }),
                r.t = n.filter(function () {
                    return !t(this).attr("src")
                })
            }
        }),
        t.detScripts.o.a(e)
    }
}
(jQuery), function (t) {
    var e = function (e) {
        var i,
        n,
        o = [],
        r = [],
        s = [],
        a = [],
        l = t.extend({}, e).deltas;
        function c(t, e) {
            for (var i = 0; i < t.length; i++)
                0 === t[i][1] && u(t[i][0], e)
        }
        function u(e, i) {
            t("head").append(("href" == i ? linki : scri).replace("*", e))
        }
        function d(t, e) {
            if (t)
                for (var i = 0; i < e.length; i++)
                    if (e[i][0] == t)
                        return e[i][1] = 1, !0
        }
        function h(e, i) {
            t(("href" == i ? linkr : scrr).replace("!", e)).remove()
        }
        this.a = function (e, f, p) {
            if (e.length) {
                if ("href" == p ? (i = o, n = r) : (i = s, n = a), function (e, i) {
                    return !l && (e.each(function () {
                            u(t(this)[0], i)
                        }), !0)
                }
                    (e, p))
                    return !0;
                if (pass && function (e, i) {
                    e.each(function () {
                        "always" == t(this).attr("data-class") && (u(t(this).attr(i), i), t(this).remove())
                    })
                }
                    (e, p), f)
                    return c(n, p);
                (function (e, i, n, o) {
                    var r;
                    e.each(function () {
                        r = [t(this).attr(o), 0],
                        i.push(r),
                        pass || n.push(r)
                    })
                })(e, n = [], i, p),
                pass && (!function (t, e) {
                    for (var i = 0; i < t.length; i++)
                        t[i][1] = 2, d(t[i][0], e) && (t[i][1] = 1)
                }
                    (i, n), function (t, e) {
                    for (var i = 0; i < t.length; i++)
                        2 == t[i][1] && t[i][0] && h(t[i][0], e)
                }
                    (i, p), c(n, p), i = n.slice()),
                "href" == p ? (o = i, r = n) : (s = i, a = n)
            }
        }
    };
    t.fn.addAll = function (i, n, o) {
        var r = t(this);
        return t.fn.addAll.o || (t.fn.addAll.o = new e(o)),
        t.fn.addAll.o.a(r, i, n)
    }
}
(jQuery), function (t) {
    var e = function (e) {
        var i,
        n,
        o = t(window),
        r = "",
        s = null,
        a = null,
        l = t.extend({
            selector: "a:not(.no-ajaxy)",
            fade: 0,
            pop: 0,
            squeeze: 0,
            requestDelay: 0,
            forms: "form:not(.no-ajaxy)",
            prefetch: !0,
            previewoff: !0,
            fn: !1,
            cb: 0
        }, e),
        c = l.selector,
        u = l.fade,
        d = l.pop,
        h = l.squeeze,
        f = l.requestDelay,
        p = l.forms,
        m = l.prefetch,
        g = l.previewoff,
        v = l.cb,
        y = l.fn;
        function w() {}
        function b(e) {
            a = null;
            var n = e.currentTarget;
            if (_(n))
                return !1;
            if (r == n.href)
                return !1;
            y("+", n.href, function () {
                if (!0 === g)
                    return !1;
                (function (e) {
                    var n = !1;
                    return i.each(function () {
                        try {
                            t(e).parents("#" + t(this).attr("id")).length > 0 && (n = !0)
                        } catch (t) {}
                    }),
                    n
                })(n) || !1 !== g && t(n).closest(g).length || k(e, !0)
            })
        }
        function x(e) {
            if (!p)
                return !1;
            (e ? i : t("body")).find(p).submit(function (e) {
                if (!(n = t(e.target)).is("form") && 0 === (n = n.filter("input[type=submit]").parents("form:first")).length)
                    return !0;
                var i = function () {
                    var e = n.serialize(),
                    i = t("input[name][type=submit]", n);
                    if (0 === i.length)
                        return e;
                    var o = i.attr("name") + "=" + i.val();
                    return e.length > 0 ? e += "&" + o : e = o,
                    e
                }
                (),
                s = "get",
                l = n.attr("method");
                l.length > 0 && "post" == l.toLowerCase() && (s = "post");
                var c,
                u = n.attr("action");
                return c = null !== u && u.length > 0 ? u : r,
                "get" == s ? c = function (t, e) {
                    return t.indexOf("?") > 0 && (t = t.substring(0, t.indexOf("?"))),
                    t + "?" + e
                }
                (c, i) : (a = {}).data = i,
                o.trigger("pronto.submit", c),
                S(c),
                !1
            })
        }
        function k(t, e) {
            var i = t.currentTarget;
            if (a = null, !function (t) {
                return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
            }
                (t) && !_(i)) {
                if (function (t) {
                    return t.hash && t.href.replace(t.hash, "") === window.location.href.replace(location.hash, "") || t.href === window.location.href + "#"
                }
                    (i))
                    return E(), !0;
                t.preventDefault(),
                t.stopPropagation(),
                r == i.href ? E() : S(t, e)
            }
        }
        function S(e, i) {
            var n = "string" != typeof e ? e.currentTarget.href : e;
            o.trigger("pronto.request", e);
            y(n, function (n) {
                n && (t.log("Error : " + n), o.trigger("pronto.error", n)),
                C(e, !0, i)
            }, a)
        }
        function C(e, n, l) {
            null !== s && (clearTimeout(s), s = null),
            s = setTimeout(function () {
                !function (e, n, s) {
                    var l = function () {
                        !function (e, n, s) {
                            var l,
                            c;
                            l = "string" != typeof e ? e.currentTarget.href || e.originalEvent.state.url : e,
                            o.trigger("pronto.load", e),
                            E(),
                            t("title").html(y("title").html()),
                            c = y("-", a, i),
                            u && i.fadeIn(u);
                            if (d) {
                                var f = i;
                                f.css({
                                    opacity: 1
                                }).effect("scale", {
                                    from: {
                                        width: f.width() / 2,
                                        height: f.height() / 2
                                    },
                                    percent: 100
                                }, d)
                            } else
                                h && i.each(function () {
                                    var e = t("#" + t(this).attr("id"));
                                    e.animate({
                                        width: e.data("oldwidth"),
                                        opacity: 1,
                                        marginRight: 0
                                    }, h)
                                });
                            !c || c == l || l.iO("#") || l.iO("?") || (l = c);
                            x(!0),
                            l.iO("#") && !0 !== s && t("html, body, content").animate({
                                scrollTop: t("#" + l.split("#")[1]).offset().top
                            }, 500);
                            (function (t, e) {
                                r = t,
                                e ? history.pushState({
                                    url: r
                                }, "state-" + r, r) : E()
                            })(l, n),
                            o.trigger("pronto.render", e),
                            v && v()
                        }
                        (e, n, s)
                    };
                    u ? i.fadeOut(u, l) : h ? i.each(function () {
                        var e = t("#" + t(this).attr("id"));
                        e.data("oldwidth", e.width()),
                        e.animate({
                            width: 0,
                            opacity: 0,
                            marginRight: e.width()
                        }, h, l)
                    }) : l()
                }
                (e, n, l)
            }, f)
        }
        function E() {
            history.replaceState({
                url: r
            }, "state-" + r, r)
        }
        function T(t) {
            var e = t.originalEvent.state;
            if (null !== e && e.url !== r) {
                o.trigger("pronto.request", t);
                y(e.url, function () {
                    C(t, !1, !1)
                })
            }
        }
        function _(t) {
            return window.location.protocol !== t.protocol || window.location.host !== t.host
        }
        this.a = function (e, n) {
            return n ? n.iO("https://sandwich.co/") ? (S(n, !0), "OK") : void 0 : (i = e, function () {
                l.$body = t("body"),
                r = window.location.href,
                E(),
                o.on("popstate", T),
                m && (t(c).hoverIntent(b, w), t(c).on("touchstart", b));
                l.$body.on("click.pronto", c, k),
                x()
            }
                (), e)
        }
    };
    t.fn.pronto = function (i, n) {
        var o = t(this);
        return t.fn.pronto.o || (t.fn.pronto.o = new e(n)),
        t.fn.pronto.o.a(o, i)
    }
}
(jQuery), function (t, e) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], e);
    else if ("undefined" != typeof exports)
        e(module, exports);
    else {
        var i = {
            exports: {}
        };
        e(i, i.exports),
        t.autosize = i.exports
    }
}
(this, function (t, e) {
    "use strict";
    var i,
    n,
    o = "function" == typeof Map ? new Map : (i = [], n = [], {
            has: function (t) {
                return -1 < i.indexOf(t)
            },
            get: function (t) {
                return n[i.indexOf(t)]
            },
            set: function (t, e) {
                -1 === i.indexOf(t) && (i.push(t), n.push(e))
            },
            delete : function (t) {
                var e = i.indexOf(t);
                -1 < e && (i.splice(e, 1), n.splice(e, 1))
            }
        }),
    r = function (t) {
        return new Event(t, {
            bubbles: !0
        })
    };
    try {
        new Event("test")
    } catch (t) {
        r = function (t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !1),
            e
        }
    }
    function s(t) {
        var e = o.get(t);
        e && e.destroy()
    }
    function a(t) {
        var e = o.get(t);
        e && e.update()
    }
    var l = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function (t) {
            return t
        }).destroy = function (t) {
        return t
    }, l.update = function (t) {
        return t
    }) : ((l = function (t, e) {
            return t && Array.prototype.forEach.call(t.length ? t : [t], function (t) {
                return function (t) {
                    if (t && t.nodeName && "TEXTAREA" === t.nodeName && !o.has(t)) {
                        var e,
                        i = null,
                        n = null,
                        s = null,
                        a = function () {
                            t.clientWidth !== n && d()
                        },
                        l = function (e) {
                            window.removeEventListener("resize", a, !1),
                            t.removeEventListener("input", d, !1),
                            t.removeEventListener("keyup", d, !1),
                            t.removeEventListener("autosize:destroy", l, !1),
                            t.removeEventListener("autosize:update", d, !1),
                            Object.keys(e).forEach(function (i) {
                                t.style[i] = e[i]
                            }),
                            o.delete(t)
                        }
                        .bind(t, {
                            height: t.style.height,
                            resize: t.style.resize,
                            overflowY: t.style.overflowY,
                            overflowX: t.style.overflowX,
                            wordWrap: t.style.wordWrap
                        });
                        t.addEventListener("autosize:destroy", l, !1),
                        "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", d, !1),
                        window.addEventListener("resize", a, !1),
                        t.addEventListener("input", d, !1),
                        t.addEventListener("autosize:update", d, !1),
                        t.style.overflowX = "hidden",
                        t.style.wordWrap = "break-word",
                        o.set(t, {
                            destroy: l,
                            update: d
                        }),
                        "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"),
                        i = "content-box" === e.boxSizing ?  - (parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth),
                        isNaN(i) && (i = 0),
                        d()
                    }
                    function c(e) {
                        var i = t.style.width;
                        t.style.width = "0px",
                        t.offsetWidth,
                        t.style.width = i,
                        t.style.overflowY = e
                    }
                    function u() {
                        if (0 !== t.scrollHeight) {
                            var e = function (t) {
                                for (var e = []; t && t.parentNode && t.parentNode instanceof Element; )
                                    t.parentNode.scrollTop && e.push({
                                        node: t.parentNode,
                                        scrollTop: t.parentNode.scrollTop
                                    }), t = t.parentNode;
                                return e
                            }
                            (t),
                            o = document.documentElement && document.documentElement.scrollTop;
                            t.style.height = "",
                            t.style.height = t.scrollHeight + i + "px",
                            n = t.clientWidth,
                            e.forEach(function (t) {
                                t.node.scrollTop = t.scrollTop
                            }),
                            o && (document.documentElement.scrollTop = o)
                        }
                    }
                    function d() {
                        u();
                        var e = Math.round(parseFloat(t.style.height)),
                        i = window.getComputedStyle(t, null),
                        n = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : t.offsetHeight;
                        if (n < e ? "hidden" === i.overflowY && (c("scroll"), u(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== i.overflowY && (c("hidden"), u(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), s !== n) {
                            s = n;
                            var o = r("autosize:resized");
                            try {
                                t.dispatchEvent(o)
                            } catch (e) {}
                        }
                    }
                }
                (t)
            }),
            t
        }).destroy = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], s),
        t
    }, l.update = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], a),
        t
    }),
    e.default = l,
    t.exports = e.default
}), function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.balanceText = e()
}
(this, function () {
    var t,
    e,
    i,
    n = {
        sel: [],
        el: []
    },
    o = !1,
    r = !1;
    function s() {}
    function a(t, e) {
        Array.prototype.forEach.call(t, e)
    }
    function l() {
        this.reset()
    }
    function c(t) {
        return e.some(function (e) {
            return e.start < t && t < e.end
        })
    }
    function u(t, n, o) {
        if (0 === o)
            t.style.whiteSpace = n, i = 0, e = [], function t(n, o) {
                if (n.nodeType === n.ELEMENT_NODE)
                    if ("nowrap" === window.getComputedStyle(n).whiteSpace) {
                        var r = n.outerHTML.length;
                        e.push({
                            start: i,
                            end: i + r
                        }),
                        i += r
                    } else
                        a(n.childNodes, function (e) {
                            t(e, !0)
                        }), o && (i += n.outerHTML.length - n.innerHTML.length);
                else
                    n.nodeType === n.COMMENT_NODE ? i += n.length + 7 : n.nodeType === n.PROCESSING_INSTRUCTION_NODE ? i += n.length + 2 : i += n.length
            }
        (t, !1),
        t.style.whiteSpace = "nowrap";
        else {
            var r = [];
            e.forEach(function (t) {
                t.start > o && r.push({
                    start: t.start - o,
                    end: t.end - o
                })
            }),
            e = r
        }
    }
    l.prototype.reset = function () {
        this.index = 0,
        this.width = 0
    };
    var d,
    h = function (t) {
        return "justify" === (t.currentStyle || window.getComputedStyle(t, null)).textAlign
    };
    function f(t, e, i) {
        var n,
        o,
        r,
        s,
        a;
        return s = (e = e.trim()).split(" ").length,
        e += " ",
        s < 2 ? e : ((r = document.createElement("span")).innerHTML = e, t.appendChild(r), o = r.offsetWidth, r.parentNode.removeChild(r), a = Math.floor((i - o) / (s - 1)), r.style.wordSpacing = a + "px", r.setAttribute("data-owner", "balance-text-justify"), (n = document.createElement("div")).appendChild(r), n.innerHTML)
    }
    function p(e, i) {
        var n,
        o = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;
        if (!t)
            for (t = [], n = o.exec(e); null !== n; )
                c(n.index) || t.push(n.index), n = o.exec(e);
        return -1 !== t.indexOf(i)
    }
    function m(t, e) {
        return 0 === e || e === t.length || p(t, e - 1) && !p(t, e)
    }
    function g(t, e, i, n, o, r, s) {
        var a;
        if (e && "string" == typeof e)
            for (; ; ) {
                for (; !m(e, r); )
                    r += o;
                if (t.innerHTML = e.substr(0, r), a = t.offsetWidth, o < 0) {
                    if (a <= n || a <= 0 || 0 === r)
                        break
                } else if (n <= a || i <= a || r === e.length)
                    break;
                r += o
            }
        s.index = r,
        s.width = a
    }
    function v(t) {
        return t ? "string" == typeof t ? document.querySelectorAll(t) : t.tagName && t.querySelectorAll ? [t] : t : []
    }
    function y(e) {
        a(v(e), function (e) {
            !function (t) {
                var e = t.querySelectorAll('br[data-owner="balance-text-hyphen"]');
                a(e, function (t) {
                    t.outerHTML = ""
                }),
                a(e = t.querySelectorAll('br[data-owner="balance-text"]'), function (t) {
                    t.outerHTML = " "
                });
                var i = t.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
                if (i.length > 0 && a(i, function (t) {
                        var e = document.createTextNode("­");
                        t.parentNode.insertBefore(e, t),
                        t.parentNode.removeChild(t)
                    }), (i = t.querySelectorAll('span[data-owner="balance-text-justify"]')).length > 0) {
                    var n = "";
                    a(i, function (t) {
                        n += t.textContent,
                        t.parentNode.removeChild(t)
                    }),
                    t.innerHTML = n
                }
            }
            (e);
            var i = e.style.whiteSpace,
            n = e.style.float,
            o = e.style.display,
            r = e.style.position,
            s = e.style.lineHeight;
            e.style.lineHeight = "normal";
            var c = e.offsetWidth,
            d = e.offsetHeight;
            e.style.whiteSpace = "nowrap",
            e.style.float = "none",
            e.style.display = "inline",
            e.style.position = "static";
            var p = e.offsetWidth,
            m = e.offsetHeight,
            v = "pre-wrap" === i ? 0 : function (t, e) {
                var i,
                n,
                o = document.createElement("div");
                return o.style.display = "block",
                o.style.position = "absolute",
                o.style.bottom = 0,
                o.style.right = 0,
                o.style.width = 0,
                o.style.height = 0,
                o.style.margin = 0,
                o.style.padding = 0,
                o.style.visibility = "hidden",
                o.style.overflow = "hidden",
                (n = document.createElement("span")).style.fontSize = "2000px",
                n.innerHTML = "&nbsp;",
                o.appendChild(n),
                t.appendChild(o),
                i = n.getBoundingClientRect(),
                o.parentNode.removeChild(o),
                e / (i.height / i.width)
            }
            (e, m);
            if (c > 0 && p > c && p < 5e3) {
                for (var y, w, b, x, k, S = e.innerHTML, C = "", E = "", T = h(e), _ = Math.round(d / m), z = 0; _ > 1; )
                    t = null, u(e, i, z), g(e, S, c, y = Math.round((p + v) / _ - v), -1, Math.round((S.length + 1) / _) - 1, w = new l), b = new l, g(e, S, c, y, 1, w.index, b), w.reset(), g(e, S, c, y, -1, b.index, w), x = 0 === w.index ? b.index : c < b.width || w.index === b.index ? w.index : Math.abs(y - w.width) < Math.abs(b.width - y) ? w.index : b.index, E = S.substr(0, x).replace(/\s$/, ""), (k = Boolean(E.match(/\u00ad$/))) && (E = E.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')), T ? C += f(e, E, c) : (C += E, C += k || Boolean(E.match(/(-|\u2014|\u2013)$/)) ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" />'), S = S.substr(x), z = x, _--, e.innerHTML = S, p = e.offsetWidth;
                e.innerHTML = T ? C + f(e, S, c) : C + S
            }
            e.style.whiteSpace = i,
            e.style.float = n,
            e.style.display = o,
            e.style.position = r,
            e.style.lineHeight = s
        })
    }
    function w() {
        var t = v(n.sel.join(","));
        y(Array.prototype.concat.apply(n.el, t))
    }
    function b() {
        var t,
        e,
        i,
        n,
        r;
        o || (t = w, "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function () {
                "loading" !== document.readyState && t()
            }), window.addEventListener("load", w), window.addEventListener("resize", (e = w, function () {
                    var t = this,
                    o = arguments;
                    r ? clearTimeout(r) : n && e.apply(t, o),
                    r = setTimeout(function () {
                        n || e.apply(t, o),
                        r = null
                    }, i || 100)
                })), o = !0)
    }
    function x(t, e) {
        t ? e && !0 === e.watch ? function (t) {
            "string" == typeof t ? n.sel.push(t) : a(v(t), function (t) {
                n.el.push(t)
            }),
            b(),
            w()
        }
        (t) : e && !1 === e.watch ? function (t) {
            "string" == typeof t ? n.sel = n.sel.filter(function (e) {
                return e !== t
            }) : (t = v(t), n.el = n.el.filter(function (e) {
                        return -1 === t.indexOf(e)
                    }))
        }
        (t) : y(t) : r || (n.sel.push(".balance-text"), b(), r = !0)
    }
    return x.updateWatched = w,
    (d = document.documentElement.style).textWrap || d.WebkitTextWrap || d.MozTextWrap || d.MsTextWrap ? (s.updateWatched = s, s) : x
}), function (t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).basicScroll = t()
}
(function () {
    return function t(e, i, n) {
        function o(s, a) {
            if (!i[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(s, !0);
                    if (r)
                        return r(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var u = i[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function (t) {
                    return o(e[s][1][t] || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++)
            o(n[s]);
        return o
    }
    ({
        1: [function (t, e, i) {
                e.exports = function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            }, {}
        ],
        2: [function (t, e, i) {
                e.exports = function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }
            }, {}
        ],
        3: [function (t, e, i) {
                e.exports = function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                }
            }, {}
        ],
        4: [function (t, e, i) {
                var n = t("./bounce-out");
                e.exports = function (t) {
                    return t < .5 ? .5 * (1 - n(1 - 2 * t)) : .5 * n(2 * t - 1) + .5
                }
            }, {
                "./bounce-out": 6
            }
        ],
        5: [function (t, e, i) {
                var n = t("./bounce-out");
                e.exports = function (t) {
                    return 1 - n(1 - t)
                }
            }, {
                "./bounce-out": 6
            }
        ],
        6: [function (t, e, i) {
                e.exports = function (t) {
                    var e = t * t;
                    return t < 4 / 11 ? 7.5625 * e : t < 8 / 11 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * e - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72
                }
            }, {}
        ],
        7: [function (t, e, i) {
                e.exports = function (t) {
                    return (t *= 2) < 1 ?  - .5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            }, {}
        ],
        8: [function (t, e, i) {
                e.exports = function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }
            }, {}
        ],
        9: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.sqrt(1 - --t * t)
                }
            }, {}
        ],
        10: [function (t, e, i) {
                e.exports = function (t) {
                    return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1
                }
            }, {}
        ],
        11: [function (t, e, i) {
                e.exports = function (t) {
                    return t * t * t
                }
            }, {}
        ],
        12: [function (t, e, i) {
                e.exports = function (t) {
                    var e = t - 1;
                    return e * e * e + 1
                }
            }, {}
        ],
        13: [function (t, e, i) {
                e.exports = function (t) {
                    return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1
                }
            }, {}
        ],
        14: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1))
                }
            }, {}
        ],
        15: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1
                }
            }, {}
        ],
        16: [function (t, e, i) {
                e.exports = function (t) {
                    return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) :  - .5 * Math.pow(2, 10 - 20 * t) + 1
                }
            }, {}
        ],
        17: [function (t, e, i) {
                e.exports = function (t) {
                    return 0 === t ? t : Math.pow(2, 10 * (t - 1))
                }
            }, {}
        ],
        18: [function (t, e, i) {
                e.exports = function (t) {
                    return 1 === t ? t : 1 - Math.pow(2, -10 * t)
                }
            }, {}
        ],
        19: [function (t, e, i) {
                e.exports = {
                    backInOut: t("./back-in-out"),
                    backIn: t("./back-in"),
                    backOut: t("./back-out"),
                    bounceInOut: t("./bounce-in-out"),
                    bounceIn: t("./bounce-in"),
                    bounceOut: t("./bounce-out"),
                    circInOut: t("./circ-in-out"),
                    circIn: t("./circ-in"),
                    circOut: t("./circ-out"),
                    cubicInOut: t("./cubic-in-out"),
                    cubicIn: t("./cubic-in"),
                    cubicOut: t("./cubic-out"),
                    elasticInOut: t("./elastic-in-out"),
                    elasticIn: t("./elastic-in"),
                    elasticOut: t("./elastic-out"),
                    expoInOut: t("./expo-in-out"),
                    expoIn: t("./expo-in"),
                    expoOut: t("./expo-out"),
                    linear: t("./linear"),
                    quadInOut: t("./quad-in-out"),
                    quadIn: t("./quad-in"),
                    quadOut: t("./quad-out"),
                    quartInOut: t("./quart-in-out"),
                    quartIn: t("./quart-in"),
                    quartOut: t("./quart-out"),
                    quintInOut: t("./quint-in-out"),
                    quintIn: t("./quint-in"),
                    quintOut: t("./quint-out"),
                    sineInOut: t("./sine-in-out"),
                    sineIn: t("./sine-in"),
                    sineOut: t("./sine-out")
                }
            }, {
                "./back-in": 2,
                "./back-in-out": 1,
                "./back-out": 3,
                "./bounce-in": 5,
                "./bounce-in-out": 4,
                "./bounce-out": 6,
                "./circ-in": 8,
                "./circ-in-out": 7,
                "./circ-out": 9,
                "./cubic-in": 11,
                "./cubic-in-out": 10,
                "./cubic-out": 12,
                "./elastic-in": 14,
                "./elastic-in-out": 13,
                "./elastic-out": 15,
                "./expo-in": 17,
                "./expo-in-out": 16,
                "./expo-out": 18,
                "./linear": 20,
                "./quad-in": 22,
                "./quad-in-out": 21,
                "./quad-out": 23,
                "./quart-in": 25,
                "./quart-in-out": 24,
                "./quart-out": 26,
                "./quint-in": 28,
                "./quint-in-out": 27,
                "./quint-out": 29,
                "./sine-in": 31,
                "./sine-in-out": 30,
                "./sine-out": 32
            }
        ],
        20: [function (t, e, i) {
                e.exports = function (t) {
                    return t
                }
            }, {}
        ],
        21: [function (t, e, i) {
                e.exports = function (t) {
                    return (t /= .5) < 1 ? .5 * t * t :  - .5 * (--t * (t - 2) - 1)
                }
            }, {}
        ],
        22: [function (t, e, i) {
                e.exports = function (t) {
                    return t * t
                }
            }, {}
        ],
        23: [function (t, e, i) {
                e.exports = function (t) {
                    return -t * (t - 2)
                }
            }, {}
        ],
        24: [function (t, e, i) {
                e.exports = function (t) {
                    return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1
                }
            }, {}
        ],
        25: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.pow(t, 4)
                }
            }, {}
        ],
        26: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.pow(t - 1, 3) * (1 - t) + 1
                }
            }, {}
        ],
        27: [function (t, e, i) {
                e.exports = function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            }, {}
        ],
        28: [function (t, e, i) {
                e.exports = function (t) {
                    return t * t * t * t * t
                }
            }, {}
        ],
        29: [function (t, e, i) {
                e.exports = function (t) {
                    return --t * t * t * t * t + 1
                }
            }, {}
        ],
        30: [function (t, e, i) {
                e.exports = function (t) {
                    return  - .5 * (Math.cos(Math.PI * t) - 1)
                }
            }, {}
        ],
        31: [function (t, e, i) {
                e.exports = function (t) {
                    var e = Math.cos(t * Math.PI * .5);
                    return Math.abs(e) < 1e-14 ? 1 : 1 - e
                }
            }, {}
        ],
        32: [function (t, e, i) {
                e.exports = function (t) {
                    return Math.sin(t * Math.PI / 2)
                }
            }, {}
        ],
        33: [function (t, e, i) {
                e.exports = function (t, e) {
                    e || (e = [0, ""]),
                    t = String(t);
                    var i = parseFloat(t, 10);
                    return e[0] = i,
                    e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
                    e
                }
            }, {}
        ],
        34: [function (t, e, i) {
                "use strict";
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }),
                i.create = void 0;
                var n = r(t("parse-unit")),
                o = r(t("eases"));
                function r(t) {
                    return t && t.__esModule ? t : {
                    default:
                        t
                    }
                }
                function s(t) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    }
                         : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var a,
                l,
                c,
                u = [],
                d = "undefined" != typeof window,
                h = function () {
                    return (document.scrollingElement || document.documentElement).scrollTop
                },
                f = function (t) {
                    return !1 === isNaN((0, n.default)(t)[0])
                },
                p = function (t) {
                    var e = (0, n.default)(t);
                    return {
                        value: e[0],
                        unit: e[1]
                    }
                },
                m = function (t) {
                    return null !== String(t).match(/^[a-z]+-[a-z]+$/)
                },
                g = function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : h(),
                    n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window.innerHeight || window.outerHeight,
                    o = e.getBoundingClientRect(),
                    r = t.match(/^[a-z]+/)[0],
                    s = t.match(/[a-z]+$/)[0],
                    a = 0;
                    return "top" === s && (a -= 0),
                    "middle" === s && (a -= n / 2),
                    "bottom" === s && (a -= n),
                    "top" === r && (a += o.top + i),
                    "middle" === r && (a += o.top + i + o.height / 2),
                    "bottom" === r && (a += o.top + i + o.height),
                    "".concat(a, "px")
                },
                v = function (t) {
                    var e,
                    i,
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : h(),
                    o = t.getData(),
                    r = o.to.value - o.from.value,
                    s = (n - o.from.value) / (r / 100),
                    a = Math.min(Math.max(s, 0), 100),
                    l = (e = o.direct, i = {
                            global: document.documentElement,
                            elem: o.elem,
                            direct: o.direct
                        }, !0 === e ? i.elem : e instanceof HTMLElement == 1 ? i.direct : i.global),
                    c = Object.keys(o.props).reduce(function (t, e) {
                        var i = o.props[e],
                        n = i.from.unit || i.to.unit,
                        r = i.from.value - i.to.value,
                        s = i.timing(a / 100),
                        l = i.from.value - r * s,
                        c = Math.round(1e4 * l) / 1e4;
                        return t[e] = c + n,
                        t
                    }, {}),
                    u = s < 0 || 100 < s;
                    return !0 == (0 <= s && s <= 100) && o.inside(t, s, c),
                    !0 === u && o.outside(t, s, c), {
                        elem: l,
                        props: c
                    }
                },
                y = function (t, e) {
                    Object.keys(e).forEach(function (i) {
                        return n = t,
                        o = {
                            key: i,
                            value: e[i]
                        },
                        void n.style.setProperty(o.key, o.value);
                        var n,
                        o
                    })
                };
                i.create = function (t) {
                    var e = null,
                    i = !1,
                    n = {
                        isActive: function () {
                            return i
                        },
                        getData: function () {
                            return e
                        },
                        calculate: function () {
                            e = function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                if (null == (t = Object.assign({}, t)).inside && (t.inside = function () {}), null == t.outside && (t.outside = function () {}), null == t.direct && (t.direct = !1), null == t.track && (t.track = !0), null == t.props && (t.props = {}), null == t.from)
                                    throw new Error("Missing property `from`");
                                if (null == t.to)
                                    throw new Error("Missing property `to`");
                                if ("function" != typeof t.inside)
                                    throw new Error("Property `inside` must be undefined or a function");
                                if ("function" != typeof t.outside)
                                    throw new Error("Property `outside` must be undefined or a function");
                                if ("boolean" != typeof t.direct && t.direct instanceof HTMLElement == 0)
                                    throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
                                if (!0 === t.direct && null == t.elem)
                                    throw new Error("Property `elem` is required when `direct` is true");
                                if ("boolean" != typeof t.track)
                                    throw new Error("Property `track` must be undefined or a boolean");
                                if ("object" !== s(t.props))
                                    throw new Error("Property `props` must be undefined or an object");
                                if (null == t.elem) {
                                    if (!1 === f(t.from))
                                        throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                                    if (!1 === f(t.to))
                                        throw new Error("Property `to` must be a absolute value when no `elem` has been provided")
                                } else !0 === m(t.from) && (t.from = g(t.from, t.elem)), !0 === m(t.to) && (t.to = g(t.to, t.elem));
                                return t.from = p(t.from),
                                t.to = p(t.to),
                                t.props = Object.keys(t.props).reduce(function (e, i) {
                                    var n = Object.assign({}, t.props[i]);
                                    if (!1 === f(n.from))
                                        throw new Error("Property `from` of prop must be a absolute value");
                                    if (!1 === f(n.to))
                                        throw new Error("Property `from` of prop must be a absolute value");
                                    if (n.from = p(n.from), n.to = p(n.to), null == n.timing && (n.timing = o.default.linear), "string" != typeof n.timing && "function" != typeof n.timing)
                                        throw new Error("Property `timing` of prop must be undefined, a string or a function");
                                    if ("string" == typeof n.timing && null == o.default[n.timing])
                                        throw new Error("Unknown timing for property `timing` of prop");
                                    return "string" == typeof n.timing && (n.timing = o.default[n.timing]),
                                    e[i] = n,
                                    e
                                }, {}),
                                t
                            }
                            (t)
                        },
                        update: function () {
                            var t = v(n),
                            e = t.elem,
                            i = t.props;
                            return y(e, i),
                            i
                        },
                        start: function () {
                            i = !0
                        },
                        stop: function () {
                            i = !1
                        },
                        destroy: function () {
                            u[r] = void 0
                        }
                    },
                    r = u.push(n) - 1;
                    return n.calculate(),
                    n
                },
                !0 === d ? (function t(e, i) {
                    var n = function () {
                        requestAnimationFrame(function () {
                            return t(e, i)
                        })
                    },
                    o = u.filter(function (t) {
                        return null != t && t.isActive()
                    });
                    if (0 === o.length)
                        return n();
                    var r = h();
                    if (i === r)
                        return n();
                    i = r,
                    o.map(function (t) {
                        return v(t, r)
                    }).forEach(function (t) {
                        var e = t.elem,
                        i = t.props;
                        return y(e, i)
                    }),
                    n()
                }
                    (), window.addEventListener("resize", (a = function () {
                            u.filter(function (t) {
                                return null != t && t.getData().track
                            }).forEach(function (t) {
                                t.calculate(),
                                t.update()
                            })
                        }, l = 50, c = null, function () {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                                e[i] = arguments[i];
                            clearTimeout(c),
                            c = setTimeout(function () {
                                return a.apply(void 0, e)
                            }, l)
                        }))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")
            }, {
                eases: 19,
                "parse-unit": 33
            }
        ]
    }, {}, [34])(34)
});
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function (t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
        if (t.disabled)
            return !0;
        break;
    case "input":
        if (deviceIsIOS && "file" === t.type || t.disabled)
            return !0;
        break;
    case "label":
    case "video":
        return !0
    }
    return /\bneedsclick\b/.test(t.className)
}, FastClick.prototype.needsFocus = function (t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
    case "textarea":
        return !0;
    case "select":
        return !deviceIsAndroid;
    case "input":
        switch (t.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
            return !1
        }
        return !t.disabled && !t.readOnly;
    default:
        return /\bneedsfocus\b/.test(t.className)
    }
}, FastClick.prototype.sendClick = function (t, e) {
    "use strict";
    var i,
    n;
    document.activeElement && document.activeElement !== t && document.activeElement.blur(),
    n = e.changedTouches[0],
    (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
    i.forwardedTouchEvent = !0,
    t.dispatchEvent(i)
}, FastClick.prototype.determineEventType = function (t) {
    "use strict";
    return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function (t) {
    "use strict";
    var e;
    deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
}, FastClick.prototype.updateScrollParent = function (t) {
    "use strict";
    var e,
    i;
    if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
        i = t;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                e = i,
                t.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        } while (i)
    }
    e && (e.fastClickLastScrollTop = e.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function (t) {
    "use strict";
    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
}, FastClick.prototype.onTouchStart = function (t) {
    "use strict";
    var e,
    i,
    n;
    if (t.targetTouches.length > 1)
        return !0;
    if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], deviceIsIOS) {
        if ((n = window.getSelection()).rangeCount && !n.isCollapsed)
            return !0;
        if (!deviceIsIOS4) {
            if (i.identifier && i.identifier === this.lastTouchIdentifier)
                return t.preventDefault(), !1;
            this.lastTouchIdentifier = i.identifier,
            this.updateScrollParent(e)
        }
    }
    return this.trackingClick = !0,
    this.trackingClickStart = t.timeStamp,
    this.targetElement = e,
    this.touchStartX = i.pageX,
    this.touchStartY = i.pageY,
    t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
    !0
}, FastClick.prototype.touchHasMoved = function (t) {
    "use strict";
    var e = t.changedTouches[0],
    i = this.touchBoundary;
    return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
}, FastClick.prototype.onTouchMove = function (t) {
    "use strict";
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
}, FastClick.prototype.findControl = function (t) {
    "use strict";
    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function (t) {
    "use strict";
    var e,
    i,
    n,
    o,
    r,
    s = this.targetElement;
    if (!this.trackingClick)
        return !0;
    if (t.timeStamp - this.lastClickTime < this.tapDelay)
        return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = t.changedTouches[0], (s = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || s).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = s.tagName.toLowerCase())) {
        if (e = this.findControl(s)) {
            if (this.focus(s), deviceIsAndroid)
                return !1;
            s = e
        }
    } else if (this.needsFocus(s))
        return t.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(s), this.sendClick(s, t), deviceIsIOS && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
    return !(!deviceIsIOS || deviceIsIOS4 || (o = s.fastClickScrollParent, !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(s) || (t.preventDefault(), this.sendClick(s, t)), !1)
}, FastClick.prototype.onTouchCancel = function () {
    "use strict";
    this.trackingClick = !1,
    this.targetElement = null
}, FastClick.prototype.onMouse = function (t) {
    "use strict";
    return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1)))
}, FastClick.prototype.onClick = function (t) {
    "use strict";
    var e;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
}, FastClick.prototype.destroy = function () {
    "use strict";
    var t = this.layer;
    deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
    t.removeEventListener("click", this.onClick, !0),
    t.removeEventListener("touchstart", this.onTouchStart, !1),
    t.removeEventListener("touchmove", this.onTouchMove, !1),
    t.removeEventListener("touchend", this.onTouchEnd, !1),
    t.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function (t) {
    "use strict";
    var e,
    i,
    n;
    if (void 0 === window.ontouchstart)
        return !0;
    if (i =  + (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid)
            return !0;
        if (e = document.querySelector("meta[name=viewport]")) {
            if (-1 !== e.content.indexOf("user-scalable=no"))
                return !0;
            if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
    }
    if (deviceIsBlackBerry10 && ((n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && n[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
        if (-1 !== e.content.indexOf("user-scalable=no"))
            return !0;
        if (document.documentElement.scrollWidth <= window.outerWidth)
            return !0
    }
    return "none" === t.style.msTouchAction
}, FastClick.attach = function (t, e) {
    "use strict";
    return new FastClick(t, e)
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}
(window, function (t, e) {
    "use strict";
    var i = Array.prototype.slice,
    n = t.console,
    o = void 0 === n ? function () {}
     : function (t) {
        n.error(t)
    };
    function r(n, r, a) {
        (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
            if ("string" != typeof t)
                return u = t, this.each(function (t, e) {
                    var i = a.data(e, n);
                    i ? (i.option(u), i._init()) : (i = new r(e, u), a.data(e, n, i))
                }), this;
            var e,
            s,
            l,
            c,
            u,
            d = i.call(arguments, 1);
            return s = d,
            c = "$()." + n + '("' + (e = t) + '")',
            this.each(function (t, i) {
                var r = a.data(i, n);
                if (r) {
                    var u = r[e];
                    if (u && "_" != e.charAt(0)) {
                        var d = u.apply(r, s);
                        l = void 0 === l ? d : l
                    } else
                        o(c + " is not a valid method")
                } else
                    o(n + " not initialized. Cannot call methods, i.e. " + c)
            }),
            void 0 !== l ? l : this
        }, s(a))
    }
    function s(t) {
        !t || t && t.bridget || (t.bridget = r)
    }
    return s(e || t.jQuery),
    r
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}
("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
            n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    },
    e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    },
    e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    },
    e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(t, r), delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    },
    e.allOff = function () {
        delete this._events,
        delete this._onceEvents
    },
    t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}
(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var e = "undefined" == typeof console ? function () {}
     : function (t) {
        console.error(t)
    },
    i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    n = i.length;
    function o(t) {
        var i = getComputedStyle(t);
        return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        i
    }
    var r,
    s = !1;
    return function e(a) {
        if (function () {
            if (!s) {
                s = !0;
                var i = document.createElement("div");
                i.style.width = "200px",
                i.style.padding = "1px 2px 3px 4px",
                i.style.borderStyle = "solid",
                i.style.borderWidth = "1px 2px 3px 4px",
                i.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(i);
                var a = o(i);
                r = 200 == Math.round(t(a.width)),
                e.isBoxSizeOuter = r,
                n.removeChild(i)
            }
        }
            (), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
            var l = o(a);
            if ("none" == l.display)
                return function () {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < n; e++)
                        t[i[e]] = 0;
                    return t
                }
            ();
            var c = {};
            c.width = a.offsetWidth,
            c.height = a.offsetHeight;
            for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < n; d++) {
                var h = i[d],
                f = l[h],
                p = parseFloat(f);
                c[h] = isNaN(p) ? 0 : p
            }
            var m = c.paddingLeft + c.paddingRight,
            g = c.paddingTop + c.paddingBottom,
            v = c.marginLeft + c.marginRight,
            y = c.marginTop + c.marginBottom,
            w = c.borderLeftWidth + c.borderRightWidth,
            b = c.borderTopWidth + c.borderBottomWidth,
            x = u && r,
            k = t(l.width);
            !1 !== k && (c.width = k + (x ? 0 : m + w));
            var S = t(l.height);
            return !1 !== S && (c.height = S + (x ? 0 : g + b)),
            c.innerWidth = c.width - (m + w),
            c.innerHeight = c.height - (g + b),
            c.outerWidth = c.width + v,
            c.outerHeight = c.height + y,
            c
        }
    }
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}
(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }
    ();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}
(window, function (t, e) {
    var i = {
        extend: function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function (t, e) {
            return (t % e + e) % e
        }
    },
    n = Array.prototype.slice;
    i.makeArray = function (t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    },
    i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    },
    i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode, e(t, i))
                return t
    },
    i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    },
    i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    i.filterFindElements = function (t, n) {
        var o = [];
        return (t = i.makeArray(t)).forEach(function (t) {
            if (t instanceof HTMLElement)
                if (n) {
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                        o.push(i[r])
                } else
                    o.push(t)
        }),
        o
    },
    i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
        o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
            r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    },
    i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    },
    i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + r),
            c = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            d = t.jQuery;
            c.forEach(function (t) {
                var i,
                r = t.getAttribute(s) || t.getAttribute(u);
                try {
                    i = r && JSON.parse(r)
                } catch (i) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + i))
                }
                var a = new e(t, i);
                d && d.data(t, n, a)
            })
        })
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
}
(window, function (t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function () {
        this.element.style.position = "absolute",
        this.element.setAttribute("aria-hidden", "true"),
        this.x = 0,
        this.shift = 0
    },
    n.destroy = function () {
        this.unselect(),
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    },
    n.getSize = function () {
        this.size = e(this.element)
    },
    n.setPosition = function (t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    },
    n.updateTarget = n.setDefaultTarget = function () {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    },
    n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    },
    n.select = function () {
        this.element.classList.add("is-selected"),
        this.element.removeAttribute("aria-hidden")
    },
    n.unselect = function () {
        this.element.classList.remove("is-selected"),
        this.element.setAttribute("aria-hidden", "true")
    },
    n.wrapShift = function (t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    },
    n.remove = function () {
        this.element.parentNode.removeChild(this.element)
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}
(window, function () {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function (t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    },
    e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
        e = this.getLastCell(),
        i = e ? e.size[t] : 0,
        n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    },
    e.getLastCell = function () {
        return this.cells[this.cells.length - 1]
    },
    e.select = function () {
        this.cells.forEach(function (t) {
            t.select()
        })
    },
    e.unselect = function () {
        this.cells.forEach(function (t) {
            t.unselect()
        })
    },
    e.getCellElements = function () {
        return this.cells.map(function (t) {
            return t.element
        })
    },
    t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
}
(window, function (t, e) {
    return {
        startAnimation: function () {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        },
        animate: function () {
            this.applyDragForce(),
            this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame(function () {
                    e.animate()
                })
            }
        },
        positionSlider: function () {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)),
            this.setTranslateX(t, this.isAnimating),
            this.dispatchScrollEvent()
        },
        setTranslateX: function (t, e) {
            t += this.cursorPosition,
            t = this.options.rightToLeft ? -t : t;
            var i = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
        },
        dispatchScrollEvent: function () {
            var t = this.slides[0];
            if (t) {
                var e = -this.x - t.target,
                i = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [i, e])
            }
        },
        positionSliderAtSelected: function () {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        },
        getPositionValue: function (t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        },
        settle: function (t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
            2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function (t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        },
        _shiftCells: function (t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                r = 0 < e ? i : 0;
                o.wrapShift(r),
                e -= o.size.outerWidth
            }
        },
        _unshiftCells: function (t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++)
                    t[e].wrapShift(0)
        },
        integratePhysics: function () {
            this.x += this.velocity,
            this.velocity *= this.getFrictionFactor()
        },
        applyForce: function (t) {
            this.velocity += t
        },
        getFrictionFactor: function () {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function () {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function () {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
            }
        },
        applySelectedAttraction: function () {
            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }
    }
}), function (t, e) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        });
    else if ("object" == typeof module && module.exports)
        module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}
(window, function (t, e, i, n, o, r, s) {
    var a = t.jQuery,
    l = t.getComputedStyle,
    c = t.console;
    function u(t, e) {
        for (t = n.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    var d = 0,
    h = {};
    function f(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var o = h[this.element.flickityGUID];
                return o.option(e),
                o
            }
            a && (this.$element = a(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e),
            this._create()
        } else
            c && c.error("Bad element for Flickity: " + (i || t))
    }
    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    f.createMethods = [];
    var p = f.prototype;
    n.extend(p, e.prototype),
    p._create = function () {
        var e = this.guid = ++d;
        for (var i in this.element.flickityGUID = e, (h[e] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
            var n = this.options.on[i];
            this.on(i, n)
        }
        f.createMethods.forEach(function (t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    },
    p.option = function (t) {
        n.extend(this.options, t)
    },
    p.activate = function () {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
    },
    p._createSlider = function () {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    },
    p._filterFindCellElements = function (t) {
        return n.filterFindElements(t, this.options.cellSelector)
    },
    p.reloadCells = function () {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    },
    p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
            return new o(t, this)
        }, this)
    },
    p.getLastCell = function () {
        return this.cells[this.cells.length - 1]
    },
    p.getLastSlide = function () {
        return this.slides[this.slides.length - 1]
    },
    p.positionCells = function () {
        this._sizeCells(this.cells),
        this._positionCells(0)
    },
    p._positionCells = function (t) {
        t = t || 0,
        this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, o = t; o < n; o++) {
            var r = this.cells[o];
            r.setPosition(e),
            e += r.size.outerWidth,
            this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    },
    p._sizeCells = function (t) {
        t.forEach(function (t) {
            t.getSize()
        })
    },
    p.updateSlides = function () {
        if (this.slides = [], this.cells.length) {
            var t = new r(this);
            this.slides.push(t);
            var e = "left" == this.originSide ? "marginRight" : "marginLeft",
            i = this._getCanCellFit();
            this.cells.forEach(function (n, o) {
                if (t.cells.length) {
                    var s = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                    i.call(this, o, s) || (t.updateTarget(), t = new r(this), this.slides.push(t)),
                    t.addCell(n)
                } else
                    t.addCell(n)
            }, this),
            t.updateTarget(),
            this.updateSelectedSlide()
        }
    },
    p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
            return function () {
                return !1
            };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function (t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
        n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    },
    p._init = p.reposition = function () {
        this.positionCells(),
        this.positionSliderAtSelected()
    },
    p.getSize = function () {
        this.size = i(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var m = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function () {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    },
    p.setGallerySize = function () {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    },
    p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition,
            e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    },
    p._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t; ) {
            var o = this.cells[e];
            if (!o)
                break;
            n.push(o),
            e += i,
            t -= o.size.outerWidth
        }
        return n
    },
    p._containSlides = function () {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            o = n < this.size.innerWidth,
            r = this.cursorPosition + this.cells[0].size[e],
            s = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function (t) {
                t.target = o ? n * this.cellAlign : (t.target = Math.max(t.target, r), Math.min(t.target, s))
            }, this)
        }
    },
    p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), a && this.$element) {
            var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var r = a.Event(e);
                r.type = t,
                o = r
            }
            this.$element.trigger(o, i)
        }
    },
    p.select = function (t, e, i) {
        if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
            var o = this.selectedIndex;
            this.selectedIndex = t,
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != o && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect")
        }
    },
    p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e))
            return t;
        var i = n.modulo(t, e),
        o = Math.abs(i - this.selectedIndex),
        r = Math.abs(i + e - this.selectedIndex),
        s = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && r < o ? t += e : !this.isDragSelect && s < o && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    },
    p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e)
    },
    p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e)
    },
    p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    },
    p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect()
    },
    p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated)
            this.select(this.selectedIndex, !1, !0);
        else {
            if (t && "string" == typeof t && this.queryCell(t))
                return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t),
            this.select(e, !1, !0)
        }
    },
    p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var o = this.getCellSlideIndex(n);
            this.select(o, e, i)
        }
    },
    p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++)
            if (-1 != this.slides[e].cells.indexOf(t))
                return e
    },
    p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    },
    p.getCells = function (t) {
        var e = [];
        return (t = n.makeArray(t)).forEach(function (t) {
            var i = this.getCell(t);
            i && e.push(i)
        }, this),
        e
    },
    p.getCellElements = function () {
        return this.cells.map(function (t) {
            return t.element
        })
    },
    p.getParentCell = function (t) {
        return this.getCell(t) || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
    },
    p.getAdjacentCellElements = function (t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t)
            return this.getCellElements();
        for (var o = [], r = e - t; r <= e + t; r++) {
            var s = this.options.wrapAround ? n.modulo(r, i) : r,
            a = this.slides[s];
            a && (o = o.concat(a.getCellElements()))
        }
        return o
    },
    p.queryCell = function (t) {
        if ("number" == typeof t)
            return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#\.]?[\d\/]/))
                return;
            t = this.element.querySelector(t)
        }
        return this.getCell(t)
    },
    p.uiChange = function () {
        this.emitEvent("uiChange")
    },
    p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(),
        this.focus()
    },
    p.onresize = function () {
        this.watchCSS(),
        this.resize()
    },
    n.debounceMethod(f, "onresize", 150),
    p.resize = function () {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    },
    p.watchCSS = function () {
        this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    },
    p.onkeydown = function (t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = f.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    },
    f.keyboardHandlers = {
        37: function () {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(),
            this[t]()
        },
        39: function () {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(),
            this[t]()
        }
    },
    p.focus = function () {
        var e = t.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }),
        t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
    },
    p.deactivate = function () {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
                t.destroy()
            }), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    },
    p.destroy = function () {
        this.deactivate(),
        t.removeEventListener("resize", this),
        this.allOff(),
        this.emitEvent("destroy"),
        a && this.$element && a.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete h[this.guid]
    },
    n.extend(p, s),
    f.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.flickityGUID;
        return e && h[e]
    },
    n.htmlInit(f, "flickity"),
    a && a.bridget && a.bridget("flickity", f),
    f.setJQuery = function (t) {
        a = t
    },
    f.Cell = o,
    f.Slide = r,
    f
}), function (t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}
(window, function (t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    n.bindStartEvent = function (t) {
        this._bindStartEvent(t, !0)
    },
    n.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1)
    },
    n._bindStartEvent = function (e, i) {
        var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
        o = "mousedown";
        t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"),
        e[n](o, this)
    },
    n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    n.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    },
    n.onmousedown = function (t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    },
    n.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0])
    },
    n.onpointerdown = function (t) {
        this._pointerDown(t, t)
    },
    n._pointerDown = function (t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    },
    n.pointerDown = function (t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    };
    var o = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return n._bindPostStartEvents = function (e) {
        if (e) {
            var i = o[e.type];
            i.forEach(function (e) {
                t.addEventListener(e, this)
            }, this),
            this._boundPointerEvents = i
        }
    },
    n._unbindPostStartEvents = function () {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function (e) {
                t.removeEventListener(e, this)
            }, this), delete this._boundPointerEvents)
    },
    n.onmousemove = function (t) {
        this._pointerMove(t, t)
    },
    n.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    },
    n.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    },
    n._pointerMove = function (t, e) {
        this.pointerMove(t, e)
    },
    n.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e])
    },
    n.onmouseup = function (t) {
        this._pointerUp(t, t)
    },
    n.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    },
    n.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    },
    n._pointerUp = function (t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    },
    n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e])
    },
    n._pointerDone = function () {
        this._pointerReset(),
        this._unbindPostStartEvents(),
        this.pointerDone()
    },
    n._pointerReset = function () {
        this.isPointerDown = !1,
        delete this.pointerIdentifier
    },
    n.pointerDone = function () {},
    n.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    },
    n.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    },
    n._pointerCancel = function (t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    },
    n.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e])
    },
    i.getPointerPoint = function (t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}
(window, function (t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    n.bindHandles = function () {
        this._bindHandles(!0)
    },
    n.unbindHandles = function () {
        this._bindHandles(!1)
    },
    n._bindHandles = function (e) {
        for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
            var r = this.handles[o];
            this._bindStartEvent(r, e),
            r[i]("click", this),
            t.PointerEvent && (r.style.touchAction = n)
        }
    },
    n._touchActionValue = "none",
    n.pointerDown = function (t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
    };
    var o = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0
    },
    r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    return n.okayPointerDown = function (t) {
        var e = o[t.target.nodeName],
        i = r[t.target.type],
        n = !e || i;
        return n || this._pointerReset(),
        n
    },
    n.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    },
    n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    },
    n._dragPointerMove = function (t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e),
        i
    },
    n.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    },
    n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    },
    n._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    },
    n._dragStart = function (t, e) {
        this.isDragging = !0,
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    },
    n.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e])
    },
    n._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    },
    n.dragMove = function (t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    },
    n._dragEnd = function (t, e) {
        this.isDragging = !1,
        setTimeout(function () {
            delete this.isPreventingClicks
        }
            .bind(this)),
        this.dragEnd(t, e)
    },
    n.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e])
    },
    n.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault()
    },
    n._staticClick = function (t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
                    delete this.isIgnoringMouseUp
                }
                    .bind(this), 400)))
    },
    n.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e])
    },
    i.getPointerPoint = e.getPointerPoint,
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}
(window, function (t, e, i, n) {
    n.extend(e.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }),
    e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype),
    o._touchActionValue = "pan-y";
    var r = "createTouch" in document,
    s = !1;
    o._createDrag = function () {
        this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        r && !s && (t.addEventListener("touchmove", function () {}), s = !0)
    },
    o.onActivateDrag = function () {
        this.handles = [this.viewport],
        this.bindHandles(),
        this.updateDraggable()
    },
    o.onDeactivateDrag = function () {
        this.unbindHandles(),
        this.element.classList.remove("is-draggable")
    },
    o.updateDraggable = function () {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable,
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    },
    o.bindDrag = function () {
        this.options.draggable = !0,
        this.updateDraggable()
    },
    o.unbindDrag = function () {
        this.options.draggable = !1,
        this.updateDraggable()
    },
    o._uiChangeDrag = function () {
        delete this.isFreeScrolling
    },
    o.pointerDown = function (e, i) {
        this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
    },
    o._pointerDownDefault = function (t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        },
        this._bindPostStartEvents(t),
        this.dispatchEvent("pointerDown", t, [e])
    };
    var a = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    function l() {
        return {
            x: t.pageXOffset,
            y: t.pageYOffset
        }
    }
    return o.pointerDownFocus = function (t) {
        a[t.target.nodeName] || this.focus()
    },
    o._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
        i = "touch" == t.pointerType,
        n = a[t.target.nodeName];
        e || i || n || t.preventDefault()
    },
    o.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold
    },
    o.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    },
    o.pointerDone = function () {
        t.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    },
    o.dragStart = function (e, i) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
    },
    o.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    },
    o.dragMove = function (t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(),
            this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = r < o ? .5 * (o + r) : o;
                var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < s ? .5 * (o + s) : o
            }
            this.dragX = o,
            this.dragMoveTime = new Date,
            this.dispatchEvent("dragMove", t, [e, i])
        }
    },
    o.dragEnd = function (t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else
                this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX,
            this.isDragSelect = this.options.wrapAround,
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e])
        }
    },
    o.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
        i = this._getClosestResting(t, e, 1),
        n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    },
    o._getClosestResting = function (t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (t, e) {
            return t <= e
        }
             : function (t, e) {
            return t < e
        }; r(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n))); )
            e = Math.abs(e);
        return {
            distance: o,
            index: n - i
        }
    },
    o.getSlideDistance = function (t, e) {
        var i = this.slides.length,
        o = this.options.wrapAround && 1 < i,
        r = o ? n.modulo(e, i) : e,
        s = this.slides[r];
        if (!s)
            return null;
        var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a)
    },
    o.dragEndBoostSelect = function () {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
        e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    },
    o.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
        n = i && i.element,
        o = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, o])
    },
    o.onscroll = function () {
        var t = l(),
        e = this.pointerDownScroll.x - t.x,
        i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}
(window, function (t, e, i, n) {
    "use strict";
    var o = "http://www.w3.org/2000/svg";
    function r(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    (r.prototype = Object.create(i.prototype))._create = function () {
        this.isEnabled = !0,
        this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    },
    r.prototype.activate = function () {
        this.bindStartEvent(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    },
    r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
        this.unbindStartEvent(this.element),
        this.element.removeEventListener("click", this)
    },
    r.prototype.createSVG = function () {
        var t = document.createElementNS(o, "svg");
        t.setAttribute("class", "flickity-button-icon"),
        t.setAttribute("viewBox", "0 0 100 100");
        var e,
        i = document.createElementNS(o, "path"),
        n = "string" != typeof(e = this.parent.options.arrowShape) ? "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z" : e;
        return i.setAttribute("d", n),
        i.setAttribute("class", "arrow"),
        this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(i),
        t
    },
    r.prototype.handleEvent = n.handleEvent,
    r.prototype.onclick = function () {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    },
    r.prototype.enable = function () {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    },
    r.prototype.disable = function () {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    },
    r.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length)
            this.enable();
        else {
            var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    },
    r.prototype.destroy = function () {
        this.deactivate(),
        this.allOff()
    },
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var s = e.prototype;
    return s._createPrevNextButtons = function () {
        this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
    },
    s.activatePrevNextButtons = function () {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    },
    s.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    },
    e.PrevNextButton = r,
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}
(window, function (t, e, i, n) {
    function o(t) {
        this.parent = t,
        this._create()
    }
    (o.prototype = Object.create(i.prototype))._create = function () {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.handleClick = this.onClick.bind(this),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    },
    o.prototype.activate = function () {
        this.setDots(),
        this.holder.addEventListener("click", this.handleClick),
        this.bindStartEvent(this.holder),
        this.parent.element.appendChild(this.holder)
    },
    o.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
        this.unbindStartEvent(this.holder),
        this.parent.element.removeChild(this.holder)
    },
    o.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    },
    o.prototype.addDots = function (t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, r = n; r < o; r++) {
            var s = document.createElement("li");
            s.className = "dot",
            s.setAttribute("aria-label", "Page dot " + (r + 1)),
            e.appendChild(s),
            i.push(s)
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    },
    o.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
            this.holder.removeChild(t)
        }, this)
    },
    o.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    },
    o.prototype.onTap = o.prototype.onClick = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    },
    o.prototype.destroy = function () {
        this.deactivate(),
        this.allOff()
    },
    e.PageDots = o,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var r = e.prototype;
    return r._createPageDots = function () {
        this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    },
    r.activatePageDots = function () {
        this.pageDots.activate()
    },
    r.updateSelectedPageDots = function () {
        this.pageDots.updateSelected()
    },
    r.updatePageDots = function () {
        this.pageDots.setDots()
    },
    r.deactivatePageDots = function () {
        this.pageDots.deactivate()
    },
    e.PageDots = o,
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}
(window, function (t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        this.onVisibilityChange = this.visibilityChange.bind(this),
        this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    (n.prototype = Object.create(t.prototype)).play = function () {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
    },
    n.prototype.tick = function () {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function () {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    },
    n.prototype.stop = function () {
        this.state = "stopped",
        this.clear(),
        document.removeEventListener("visibilitychange", this.onVisibilityChange)
    },
    n.prototype.clear = function () {
        clearTimeout(this.timeout)
    },
    n.prototype.pause = function () {
        "playing" == this.state && (this.state = "paused", this.clear())
    },
    n.prototype.unpause = function () {
        "paused" == this.state && this.play()
    },
    n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]()
    },
    n.prototype.visibilityPlay = function () {
        this.play(),
        document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    },
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var o = i.prototype;
    return o._createPlayer = function () {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    },
    o.activatePlayer = function () {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    },
    o.playPlayer = function () {
        this.player.play()
    },
    o.stopPlayer = function () {
        this.player.stop()
    },
    o.pausePlayer = function () {
        this.player.pause()
    },
    o.unpausePlayer = function () {
        this.player.unpause()
    },
    o.deactivatePlayer = function () {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    },
    o.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    },
    o.onmouseleave = function () {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    },
    i.Player = n,
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}
(window, function (t, e, i) {
    var n = e.prototype;
    return n.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var n = this.cells.length;
            e = void 0 === e ? n : e;
            var o,
            r,
            s = (o = i, r = document.createDocumentFragment(), o.forEach(function (t) {
                    r.appendChild(t.element)
                }), r),
            a = e == n;
            if (a)
                this.slider.appendChild(s);
            else {
                var l = this.cells[e].element;
                this.slider.insertBefore(s, l)
            }
            if (0 === e)
                this.cells = i.concat(this.cells);
            else if (a)
                this.cells = this.cells.concat(i);
            else {
                var c = this.cells.splice(e, n - e);
                this.cells = this.cells.concat(i).concat(c)
            }
            this._sizeCells(i),
            this.cellChange(e, !0)
        }
    },
    n.append = function (t) {
        this.insert(t, this.cells.length)
    },
    n.prepend = function (t) {
        this.insert(t, 0)
    },
    n.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var n = this.cells.length - 1;
            e.forEach(function (t) {
                t.remove();
                var e = this.cells.indexOf(t);
                n = Math.min(e, n),
                i.removeFrom(this.cells, t)
            }, this),
            this.cellChange(n, !0)
        }
    },
    n.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    },
    n.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
        this.emitEvent("cellChange", [t]),
        this.select(this.selectedIndex),
        e && this.positionSliderAtSelected()
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}
(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var n = e.prototype;
    function o(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    return n._createLazyload = function () {
        this.on("select", this.lazyLoad)
    },
    n.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0,
            n = [];
            this.getAdjacentCellElements(e).forEach(function (t) {
                var e = function (t) {
                    if ("IMG" == t.nodeName) {
                        var e = t.getAttribute("data-flickity-lazyload"),
                        n = t.getAttribute("data-flickity-lazyload-src"),
                        o = t.getAttribute("data-flickity-lazyload-srcset");
                        if (e || n || o)
                            return [t]
                    }
                    var r = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return i.makeArray(r)
                }
                (t);
                n = n.concat(e)
            }),
            n.forEach(function (t) {
                new o(t, this)
            }, this)
        }
    },
    o.prototype.handleEvent = i.handleEvent,
    o.prototype.load = function () {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t,
        e && this.img.setAttribute("srcset", e),
        this.img.removeAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload-src"),
        this.img.removeAttribute("data-flickity-lazyload-srcset")
    },
    o.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded")
    },
    o.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror")
    },
    o.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
        n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    },
    e.LazyLoader = o,
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}
(window, function (t) {
    return t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}
(window, function (t, e) {
    t.createMethods.push("_createAsNavFor");
    var i = t.prototype;
    return i._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function () {
                e.setNavCompanion(t)
            })
        }
    },
    i.setNavCompanion = function (i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
            this.navCompanion = n;
            var o = this;
            this.onNavCompanionSelect = function () {
                o.navCompanionSelect()
            },
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    },
    i.navCompanionSelect = function (t) {
        if (this.navCompanion) {
            var e,
            i = this.navCompanion.selectedCells[0],
            n = this.navCompanion.cells.indexOf(i),
            o = n + this.navCompanion.selectedCells.length - 1,
            r = Math.floor((o - (e = n)) * this.navCompanion.cellAlign + e);
            if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                var s = this.cells.slice(n, o + 1);
                this.navSelectedElements = s.map(function (t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
    },
    i.changeNavSelectedClass = function (t) {
        this.navSelectedElements.forEach(function (e) {
            e.classList[t]("is-nav-selected")
        })
    },
    i.activateAsNavFor = function () {
        this.navCompanionSelect(!0)
    },
    i.removeNavSelectedElements = function () {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    },
    i.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    },
    i.deactivateAsNavFor = function () {
        this.removeNavSelectedElements()
    },
    i.destroyAsNavFor = function () {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    },
    t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}
("undefined" != typeof window ? window : this, function (t, e) {
    var i = t.jQuery,
    n = t.console;
    function o(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    var r = Array.prototype.slice;
    function s(t, e, a) {
        if (!(this instanceof s))
            return new s(t, e, a);
        var l,
        c = t;
        "string" == typeof t && (c = document.querySelectorAll(t)),
        c ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof e ? a = e : o(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (c || t))
    }
    (s.prototype = Object.create(e.prototype)).options = {},
    s.prototype.getImages = function () {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    },
    s.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && a[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var a = {
        1: !0,
        9: !0,
        11: !0
    };
    function l(t) {
        this.img = t
    }
    function c(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    return s.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    },
    s.prototype.addImage = function (t) {
        var e = new l(t);
        this.images.push(e)
    },
    s.prototype.addBackground = function (t, e) {
        var i = new c(t, e);
        this.images.push(i)
    },
    s.prototype.check = function () {
        var t = this;
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }
        this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? this.images.forEach(function (t) {
            t.once("progress", e),
            t.check()
        }) : this.complete()
    },
    s.prototype.progress = function (t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && n && n.log("progress: " + i, t, e)
    },
    s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    },
    (l.prototype = Object.create(e.prototype)).check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    },
    l.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    },
    l.prototype.confirm = function (t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    },
    l.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    l.prototype.onload = function () {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    },
    l.prototype.onerror = function () {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    },
    l.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    },
    (c.prototype = Object.create(l.prototype)).check = function () {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    },
    c.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    },
    c.prototype.confirm = function (t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    },
    s.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function (t, e) {
            return new s(this, t, e).jqDeferred.promise(i(this))
        })
    },
    s.makeJQueryPlugin(),
    s
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}
(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded)
    },
    n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
            var t = this;
            i(this.slider).on("progress", function (e, i) {
                var n = t.getParentCell(i.img);
                t.cellSizeChange(n && n.element),
                t.options.freeScroll || t.positionSliderAtSelected()
            })
        }
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
}
(window, function (t, e) {
    "use strict";
    t.createMethods.push("_createBgLazyLoad");
    var i = t.prototype;
    function n(t, e, i) {
        this.element = t,
        this.url = e,
        this.img = new Image,
        this.flickity = i,
        this.load()
    }
    return i._createBgLazyLoad = function () {
        this.on("select", this.bgLazyLoad)
    },
    i.bgLazyLoad = function () {
        var t = this.options.bgLazyLoad;
        if (t)
            for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = 0; n < i.length; n++) {
                var o = i[n];
                this.bgLazyLoadElem(o);
                for (var r = o.querySelectorAll("[data-flickity-bg-lazyload]"), s = 0; s < r.length; s++)
                    this.bgLazyLoadElem(r[s])
            }
    },
    i.bgLazyLoadElem = function (t) {
        var e = t.getAttribute("data-flickity-bg-lazyload");
        e && new n(t, e, this)
    },
    n.prototype.handleEvent = e.handleEvent,
    n.prototype.load = function () {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.element.removeAttribute("data-flickity-bg-lazyload")
    },
    n.prototype.onload = function (t) {
        this.element.style.backgroundImage = 'url("' + this.url + '")',
        this.complete(t, "flickity-bg-lazyloaded")
    },
    n.prototype.onerror = function (t) {
        this.complete(t, "flickity-bg-lazyerror")
    },
    n.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this),
        this.element.classList.add(e),
        this.flickity.dispatchEvent("bgLazyLoad", t, this.element)
    },
    t.BgLazyLoader = n,
    t
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e()
}
(this, function () {
    return function (t) {
        function e(n) {
            if (i[n])
                return i[n].exports;
            var o = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
        }
        var i = {};
        return e.m = t,
        e.c = i,
        e.p = "",
        e(0)
    }
    ([function (t, e, i) {
                "use strict";
                var n = function (t) {
                    return t && t.__esModule ? t : {
                    default:
                        t
                    }
                }
                (i(2));
                t.exports = n.default
            }, function (t, e) {
                t.exports = function (t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
            }, function (t, e, i) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                    default:
                        t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(i(9)),
                r = n(i(3)),
                s = i(4);
                e.default = function () {
                    if ("undefined" != typeof window) {
                        var t = {
                            history: []
                        },
                        e = {
                            offset: {},
                            threshold: 0,
                            test: s.inViewport
                        },
                        i = (0, o.default)(function () {
                            t.history.forEach(function (e) {
                                t[e].check()
                            })
                        }, 100);
                        ["scroll", "resize", "load"].forEach(function (t) {
                            return addEventListener(t, i)
                        }),
                        window.MutationObserver && addEventListener("DOMContentLoaded", function () {
                            new MutationObserver(i).observe(document.body, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            })
                        });
                        var n = function (i) {
                            if ("string" == typeof i) {
                                var n = [].slice.call(document.querySelectorAll(i));
                                return t.history.indexOf(i) > -1 ? t[i].elements = n : (t[i] = (0, r.default)(n, e), t.history.push(i)),
                                t[i]
                            }
                        };
                        return n.offset = function (t) {
                            if (void 0 === t)
                                return e.offset;
                            var i = function (t) {
                                return "number" == typeof t
                            };
                            return ["top", "right", "bottom", "left"].forEach(i(t) ? function (i) {
                                return e.offset[i] = t
                            }
                                 : function (n) {
                                return i(t[n]) ? e.offset[n] = t[n] : null
                            }),
                            e.offset
                        },
                        n.threshold = function (t) {
                            return "number" == typeof t && t >= 0 && t <= 1 ? e.threshold = t : e.threshold
                        },
                        n.test = function (t) {
                            return "function" == typeof t ? e.test = t : e.test
                        },
                        n.is = function (t) {
                            return e.test(t, e)
                        },
                        n.offset(0),
                        n
                    }
                }
                ()
            }, function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function (e, i, n) {
                        return i && t(e.prototype, i),
                        n && t(e, n),
                        e
                    }
                }
                (),
                n = function () {
                    function t(e, i) {
                        (function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        })(this, t),
                        this.options = i,
                        this.elements = e,
                        this.current = [],
                        this.handlers = {
                            enter: [],
                            exit: []
                        },
                        this.singles = {
                            enter: [],
                            exit: []
                        }
                    }
                    return i(t, [{
                                key: "check",
                                value: function () {
                                    var t = this;
                                    return this.elements.forEach(function (e) {
                                        var i = t.options.test(e, t.options),
                                        n = t.current.indexOf(e),
                                        o = n > -1,
                                        r = !i && o;
                                        i && !o && (t.current.push(e), t.emit("enter", e)),
                                        r && (t.current.splice(n, 1), t.emit("exit", e))
                                    }),
                                    this
                                }
                            }, {
                                key: "on",
                                value: function (t, e) {
                                    return this.handlers[t].push(e),
                                    this
                                }
                            }, {
                                key: "once",
                                value: function (t, e) {
                                    return this.singles[t].unshift(e),
                                    this
                                }
                            }, {
                                key: "emit",
                                value: function (t, e) {
                                    for (; this.singles[t].length; )
                                        this.singles[t].pop()(e);
                                    for (var i = this.handlers[t].length; --i > -1; )
                                        this.handlers[t][i](e);
                                    return this
                                }
                            }
                        ]),
                    t
                }
                ();
                e.default = function (t, e) {
                    return new n(t, e)
                }
            }, function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.inViewport = function (t, e) {
                    var i = t.getBoundingClientRect(),
                    n = i.top,
                    o = i.right,
                    r = i.bottom,
                    s = i.left,
                    a = i.width,
                    l = i.height,
                    c = r,
                    u = window.innerWidth - s,
                    d = window.innerHeight - n,
                    h = o,
                    f = e.threshold * a,
                    p = e.threshold * l;
                    return c > e.offset.top + p && u > e.offset.right + f && d > e.offset.bottom + p && h > e.offset.left + f
                }
            }, function (t, e) {
                (function (e) {
                    var i = "object" == typeof e && e && e.Object === Object && e;
                    t.exports = i
                }).call(e, function () {
                    return this
                }
                    ())
            }, function (t, e, i) {
                var n = i(5),
                o = "object" == typeof self && self && self.Object === Object && self,
                r = n || o || Function("return this")();
                t.exports = r
            }, function (t, e, i) {
                var n = i(1),
                o = i(8),
                r = i(10),
                s = "Expected a function",
                a = Math.max,
                l = Math.min;
                t.exports = function (t, e, i) {
                    function c(e) {
                        var i = p,
                        n = m;
                        return p = m = void 0,
                        b = e,
                        v = t.apply(n, i)
                    }
                    function u(t) {
                        var i = t - w;
                        return void 0 === w || i >= e || i < 0 || k && t - b >= g
                    }
                    function d() {
                        var t = o();
                        return u(t) ? h(t) : void(y = setTimeout(d, function (t) {
                                var i = e - (t - w);
                                return k ? l(i, g - (t - b)) : i
                            }
                                    (t)))
                    }
                    function h(t) {
                        return y = void 0,
                        S && p ? c(t) : (p = m = void 0, v)
                    }
                    function f() {
                        var t = o(),
                        i = u(t);
                        if (p = arguments, m = this, w = t, i) {
                            if (void 0 === y)
                                return function (t) {
                                    return b = t,
                                    y = setTimeout(d, e),
                                    x ? c(t) : v
                                }
                            (w);
                            if (k)
                                return y = setTimeout(d, e), c(w)
                        }
                        return void 0 === y && (y = setTimeout(d, e)),
                        v
                    }
                    var p,
                    m,
                    g,
                    v,
                    y,
                    w,
                    b = 0,
                    x = !1,
                    k = !1,
                    S = !0;
                    if ("function" != typeof t)
                        throw new TypeError(s);
                    return e = r(e) || 0,
                    n(i) && (x = !!i.leading, g = (k = "maxWait" in i) ? a(r(i.maxWait) || 0, e) : g, S = "trailing" in i ? !!i.trailing : S),
                    f.cancel = function () {
                        void 0 !== y && clearTimeout(y),
                        b = 0,
                        p = w = m = y = void 0
                    },
                    f.flush = function () {
                        return void 0 === y ? v : h(o())
                    },
                    f
                }
            }, function (t, e, i) {
                var n = i(6);
                t.exports = function () {
                    return n.Date.now()
                }
            }, function (t, e, i) {
                var n = i(7),
                o = i(1),
                r = "Expected a function";
                t.exports = function (t, e, i) {
                    var s = !0,
                    a = !0;
                    if ("function" != typeof t)
                        throw new TypeError(r);
                    return o(i) && (s = "leading" in i ? !!i.leading : s, a = "trailing" in i ? !!i.trailing : a),
                    n(t, e, {
                        leading: s,
                        maxWait: e,
                        trailing: a
                    })
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return t
                }
            }
        ])
}), function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}
(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function (t) {
            return "string" == typeof t ? function (t, e, n) {
                var o,
                r = "$()." + i + '("' + e + '")';
                return t.each(function (t, l) {
                    var c = a.data(l, i);
                    if (c) {
                        var u = c[e];
                        if (u && "_" != e.charAt(0)) {
                            var d = u.apply(c, n);
                            o = void 0 === o ? d : o
                        } else
                            s(r + " is not a valid method")
                    } else
                        s(i + " not initialized. Cannot call methods, i.e. " + r)
                }),
                void 0 !== o ? o : t
            }
            (this, t, o.call(arguments, 1)) : (function (t, e) {
                t.each(function (t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
                })
            }
                (this, t), this)
        }, n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
    r = t.console,
    s = void 0 === r ? function () {}
     : function (t) {
        r.error(t)
    };
    return n(e || t.jQuery),
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}
("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
            n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    },
    e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    },
    e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    },
    e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(t, r), delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    },
    e.allOff = function () {
        delete this._events,
        delete this._onceEvents
    },
    t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}
(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e(t) {
        var e = getComputedStyle(t);
        return e || r("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px",
            i.style.padding = "1px 2px 3px 4px",
            i.style.borderStyle = "solid",
            i.style.borderWidth = "1px 2px 3px 4px",
            i.style.boxSizing = "border-box";
            var r = document.body || document.documentElement;
            r.appendChild(i);
            var s = e(i);
            o = 200 == Math.round(t(s.width)),
            n.isBoxSizeOuter = o,
            r.removeChild(i)
        }
    }
    function n(n) {
        if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
            var r = e(n);
            if ("none" == r.display)
                return function () {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < a; e++)
                        t[s[e]] = 0;
                    return t
                }
            ();
            var l = {};
            l.width = n.offsetWidth,
            l.height = n.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == r.boxSizing, u = 0; u < a; u++) {
                var d = s[u],
                h = r[d],
                f = parseFloat(h);
                l[d] = isNaN(f) ? 0 : f
            }
            var p = l.paddingLeft + l.paddingRight,
            m = l.paddingTop + l.paddingBottom,
            g = l.marginLeft + l.marginRight,
            v = l.marginTop + l.marginBottom,
            y = l.borderLeftWidth + l.borderRightWidth,
            w = l.borderTopWidth + l.borderBottomWidth,
            b = c && o,
            x = t(r.width);
            !1 !== x && (l.width = x + (b ? 0 : p + y));
            var k = t(r.height);
            return !1 !== k && (l.height = k + (b ? 0 : m + w)),
            l.innerWidth = l.width - (p + y),
            l.innerHeight = l.height - (m + w),
            l.outerWidth = l.width + g,
            l.outerHeight = l.height + v,
            l
        }
    }
    var o,
    r = "undefined" == typeof console ? function () {}
     : function (t) {
        console.error(t)
    },
    s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    a = s.length,
    l = !1;
    return n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}
(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }
    ();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}
(window, function (t, e) {
    var i = {
        extend: function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function (t, e) {
            return (t % e + e) % e
        }
    },
    n = Array.prototype.slice;
    i.makeArray = function (t) {
        return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    },
    i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    },
    i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode, e(t, i))
                return t
    },
    i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    },
    i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    i.filterFindElements = function (t, n) {
        var o = [];
        return (t = i.makeArray(t)).forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }),
        o
    },
    i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
        o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
            r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    },
    i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    },
    i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + r),
            c = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            d = t.jQuery;
            c.forEach(function (t) {
                var i,
                r = t.getAttribute(s) || t.getAttribute(u);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                d && d.data(t, n, a)
            })
        })
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}
(window, function (t, e) {
    "use strict";
    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
    }
    var n = document.documentElement.style,
    o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
    r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
    s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }
    [o],
    a = {
        transform: r,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay"
    },
    l = i.prototype = Object.create(t.prototype);
    l.constructor = i,
    l._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    },
    l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    l.getSize = function () {
        this.size = e(this.element)
    },
    l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    },
    l.getPosition = function () {
        var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = t[e ? "left" : "right"],
        o = t[i ? "top" : "bottom"],
        r = parseFloat(n),
        s = parseFloat(o),
        a = this.layout.size;
        -1 != n.indexOf("%") && (r = r / 100 * a.width),
        -1 != o.indexOf("%") && (s = s / 100 * a.height),
        r = isNaN(r) ? 0 : r,
        s = isNaN(s) ? 0 : s,
        r -= e ? a.paddingLeft : a.paddingRight,
        s -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = r,
        this.position.y = s
    },
    l.layoutPosition = function () {
        var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        r = i ? "left" : "right",
        s = i ? "right" : "left",
        a = this.position.x + t[o];
        e[r] = this.getXValue(a),
        e[s] = "";
        var l = n ? "paddingTop" : "paddingBottom",
        c = n ? "top" : "bottom",
        u = n ? "bottom" : "top",
        d = this.position.y + t[l];
        e[c] = this.getYValue(d),
        e[u] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    },
    l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    },
    l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    },
    l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
        n = this.position.y,
        o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !o || this.isTransitioning) {
            var r = t - i,
            s = e - n,
            a = {};
            a.transform = this.getTranslate(r, s),
            this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else
            this.layoutPosition()
    },
    l.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop");
        return "translate3d(" + (t = i ? t : -t) + "px, " + (e = n ? e : -e) + "px, 0)"
    },
    l.goTo = function (t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    },
    l.moveTo = l._transitionTo,
    l.setPosition = function (t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    },
    l._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    },
    l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    };
    var c = "opacity," + function (t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    (r);
    l.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(s, this, !1)
        }
    },
    l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    },
    l.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var u = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
            i = u[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                for (var e in t)
                    return !1;
                return !0
            }
                (e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd)
                e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    },
    l.disableTransition = function () {
        this.removeTransitionStyles(),
        this.element.removeEventListener(s, this, !1),
        this.isTransitioning = !1
    },
    l._removeStyles = function (t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    };
    var d = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function () {
        this.css(d)
    },
    l.stagger = function (t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    },
    l.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    },
    l.remove = function () {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
    },
    l.reveal = function () {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options,
        e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    },
    l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    },
    l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    },
    l.hide = function () {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options,
        e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    },
    l.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
    },
    l.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    },
    i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}
(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i,
            l && (this.$element = l(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
            var o = ++u;
            this.element.outlayerGUID = o,
            d[o] = this,
            this._create(),
            this._getOption("initLayout") && this.layout()
        } else
            a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    var a = t.console,
    l = t.jQuery,
    c = function () {},
    u = 0,
    d = {};
    r.namespace = "outlayer",
    r.Item = o,
    r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = r.prototype;
    n.extend(h, e.prototype),
    h.option = function (t) {
        n.extend(this.options, t)
    },
    h._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    },
    r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    h._create = function () {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    },
    h.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    },
    h._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = new i(e[o], this);
            n.push(r)
        }
        return n
    },
    h._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    },
    h.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    },
    h.layout = function () {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    },
    h._init = h.layout,
    h._resetLayout = function () {
        this.getSize()
    },
    h.getSize = function () {
        this.size = i(this.element)
    },
    h._getMeasurement = function (t, e) {
        var n,
        o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    },
    h.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    },
    h._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    },
    h._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }, this),
            this._processLayoutQueue(i)
        }
    },
    h._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    },
    h._processLayoutQueue = function (t) {
        this.updateStagger(),
        t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    },
    h.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = function (t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
            return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0
        }
            (t), this.stagger)
    },
    h._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    },
    h._postLayout = function () {
        this.resizeContainer()
    },
    h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    },
    h._getContainerSize = c,
    h._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    },
    h._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            ++s == r && i()
        }
        var o = this,
        r = e.length;
        if (e && r) {
            var s = 0;
            e.forEach(function (e) {
                e.once(t, n)
            })
        } else
            i()
    },
    h.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l)
            if (this.$element = this.$element || l(this.element), e) {
                var o = l.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    },
    h.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    },
    h.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    },
    h.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    },
    h.unstamp = function (t) {
        (t = this._find(t)) && t.forEach(function (t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    },
    h._find = function (t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
    },
    h._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    },
    h._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
        e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    },
    h._manageStamp = c,
    h._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(t);
        return {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        }
    },
    h.handleEvent = n.handleEvent,
    h.bindResize = function () {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    },
    h.unbindResize = function () {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    },
    h.onresize = function () {
        this.resize()
    },
    n.debounceMethod(r, "onresize", 100),
    h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    },
    h.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    },
    h.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    },
    h.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    },
    h.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    },
    h.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    },
    h.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    },
    h.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    },
    h.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    },
    h.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    },
    h.getItems = function (t) {
        var e = [];
        return (t = n.makeArray(t)).forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    },
    h.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function (t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    },
    h.destroy = function () {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function (t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
        delete this.element.outlayerGUID,
        l && l.removeData(this.element, this.constructor.namespace)
    },
    r.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e]
    },
    r.create = function (t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, r.compatOptions),
        i.namespace = t,
        i.data = r.data,
        i.Item = s(o),
        n.htmlInit(i, t),
        l && l.bridget && l.bridget(t, i),
        i
    };
    var f = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o,
    r
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}
(window, function (t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
    n = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++,
        n.call(this),
        this.sortData = {}
    },
    i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
            e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function () {
        o.apply(this, arguments),
        this.css({
            display: ""
        })
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}
(window, function (t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
        n[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    },
    n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    },
    n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    },
    n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    },
    n.getSegmentSize = function (t, e) {
        var i = t + e,
        n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    },
    n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    },
    n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    },
    n.getSize = function () {
        this.isotope.getSize(),
        this.size = this.isotope.size
    },
    i.modes = {},
    i.create = function (t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n),
        o.prototype.constructor = o,
        e && (o.options = e),
        o.prototype.namespace = t,
        i.modes[t] = o,
        o
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}
(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    },
    n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
            i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        r = o / n,
        s = n - o % n;
        r = Math[s && s < 1 ? "round" : "floor"](r),
        this.cols = Math.max(r, 1)
    },
    n.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
        i = e(t);
        this.containerWidth = i && i.innerWidth
    },
    n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
        i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
                x: this.columnWidth * n.col,
                y: n.y
            }, r = n.y + t.size.outerHeight, s = i + n.col, a = n.col; a < s; a++)
            this.colYs[a] = r;
        return o
    },
    n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    },
    n._getTopColGroup = function (t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
            e[n] = this._getColGroupY(n, t);
        return e
    },
    n._getColGroupY = function (t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    },
    n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    },
    n._manageStamp = function (t) {
        var i = e(t),
        n = this._getElementOffset(t),
        o = this._getOption("originLeft") ? n.left : n.right,
        r = o + i.outerWidth,
        s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1,
        a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = s; c <= a; c++)
            this.colYs[c] = Math.max(l, this.colYs[c])
    },
    n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    },
    n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    },
    n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}
(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
    n = i.prototype,
    o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var r in e.prototype)
        o[r] || (n[r] = e.prototype[r]);
    var s = n.measureColumns;
    n.measureColumns = function () {
        this.items = this.isotope.filteredItems,
        s.call(this)
    };
    var a = n._getOption;
    return n._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    },
    i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}
(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
    i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    },
    i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        n
    },
    i._getContainerSize = function () {
        return {
            height: this.maxY
        }
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}
(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    }),
    i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    },
    i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    },
    i._getContainerSize = function () {
        return {
            height: this.y
        }
    },
    e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}
(window, function (t, e, i, n, o, r, s) {
    var a = t.jQuery,
    l = String.prototype.trim ? function (t) {
        return t.trim()
    }
     : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    },
    c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    c.Item = r,
    c.LayoutMode = s;
    var u = c.prototype;
    u._create = function () {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes)
            this._initLayoutMode(t)
    },
    u.reloadItems = function () {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    },
    u._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            t[i].id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    },
    u._initLayoutMode = function (t) {
        var e = s.modes[t],
        i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    },
    u.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    },
    u._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    },
    u.arrange = function (t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    },
    u._init = u.arrange,
    u._hideReveal = function (t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    },
    u._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    },
    u._bindArrangeComplete = function () {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e,
        i,
        n,
        o = this;
        this.once("layoutComplete", function () {
            e = !0,
            t()
        }),
        this.once("hideComplete", function () {
            i = !0,
            t()
        }),
        this.once("revealComplete", function () {
            n = !0,
            t()
        })
    },
    u._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
            var a = t[s];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a),
                l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    },
    u._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering ? function (e) {
            return a(e.element).is(t)
        }
         : "function" == typeof t ? function (e) {
            return t(e.element)
        }
         : function (e) {
            return n(e.element, t)
        }
    },
    u.updateSortData = function (t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    },
    u._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = d(i)
        }
    },
    u._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var d = function () {
        return function (t) {
            if ("string" != typeof t)
                return t;
            var e = l(t).split(" "),
            i = e[0],
            n = i.match(/^\[(.+)\]$/),
            o = function (t, e) {
                return t ? function (e) {
                    return e.getAttribute(t)
                }
                 : function (t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            (n && n[1], i),
            r = c.sortDataParsers[e[1]];
            return r ? function (t) {
                return t && r(o(t))
            }
             : function (t) {
                return t && o(t)
            }
        }
    }
    ();
    c.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        },
        parseFloat: function (t) {
            return parseFloat(t)
        }
    },
    u._sort = function () {
        if (this.options.sortBy) {
            var t = o.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = function (t, e) {
                return function (i, n) {
                    for (var o = 0; o < t.length; o++) {
                        var r = t[o],
                        s = i.sortData[r],
                        a = n.sortData[r];
                        if (s > a || s < a) {
                            var l = void 0 !== e[r] ? e[r] : e;
                            return (s > a ? 1 : -1) * (l ? 1 : -1)
                        }
                    }
                    return 0
                }
            }
            (this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    },
    u._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    },
    u._mode = function () {
        var t = this.options.layoutMode,
        e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    },
    u._resetLayout = function () {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    },
    u._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    },
    u._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    },
    u._getContainerSize = function () {
        return this._mode()._getContainerSize()
    },
    u.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    },
    u.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    },
    u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    },
    u._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    },
    u.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i,
            n,
            o = e.length;
            for (i = 0; i < o; i++)
                n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; i < o; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < o; i++)
                delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var h = u.remove;
    return u.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        h.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var r = e[n];
            o.removeFrom(this.filteredItems, r)
        }
    },
    u.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    },
    u._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i,
        n
    },
    u.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    },
    c
}), function (t, e) {
    "$:nomunge";
    var i,
    n = t.jQuery || t.Cowboy || (t.Cowboy = {});
    n.throttle = i = function (t, i, o, r) {
        var s,
        a = 0;
        function l() {
            var n = this,
            l = +new Date - a,
            c = arguments;
            function u() {
                a = +new Date,
                o.apply(n, c)
            }
            r && !s && u(),
            s && clearTimeout(s),
            r === e && l > t ? u() : !0 !== i && (s = setTimeout(r ? function () {
                    s = e
                }
                         : u, r === e ? t - l : t))
        }
        return "boolean" != typeof i && (r = o, o = i, i = e),
        n.guid && (l.guid = o.guid = o.guid || n.guid++),
        l
    },
    n.debounce = function (t, n, o) {
        return o === e ? i(t, n, !1) : i(t, o, !1 !== n)
    }
}
(this), function (t) {
    var e,
    i,
    n = t.event;
    e = n.special.debouncedresize = {
        setup: function () {
            t(this).on("resize", e.handler)
        },
        teardown: function () {
            t(this).off("resize", e.handler)
        },
        handler: function (t, o) {
            var r = this,
            s = arguments,
            a = function () {
                t.type = "debouncedresize",
                n.dispatch.apply(r, s)
            };
            i && clearTimeout(i),
            o ? a() : i = setTimeout(a, e.threshold)
        },
        threshold: 300
    }
}
(jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
}
(this, function (t) {
    "use strict";
    function e(i, n) {
        var o = i.getBoundingClientRect(),
        r = o.top,
        s = o.bottom,
        a = o.left,
        l = o.right,
        c = t.extend({
            tolerance: 0,
            viewport: window
        }, n),
        u = !1,
        d = c.viewport.jquery ? c.viewport : t(c.viewport);
        d.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), d = t(window));
        var h = d.height(),
        f = d.width(),
        p = d[0].toString();
        if (d[0] !== window && "[object Window]" !== p && "[object DOMWindow]" !== p) {
            var m = d[0].getBoundingClientRect();
            r -= m.top,
            s -= m.top,
            a -= m.left,
            l -= m.left,
            e.scrollBarWidth = e.scrollBarWidth || function (e) {
                var i = t("<div></div>").css({
                    width: "100%"
                });
                e.append(i);
                var n = e.width() - i.width();
                return i.remove(),
                n
            }
            (d),
            f -= e.scrollBarWidth
        }
        return c.tolerance = ~~Math.round(parseFloat(c.tolerance)),
        c.tolerance < 0 && (c.tolerance = h + c.tolerance),
        l <= 0 || a >= f ? u : u = c.tolerance ? r <= c.tolerance && s >= c.tolerance : s > 0 && r <= h
    }
    function i(e) {
        if (e) {
            var i = e.split(",");
            return 1 === i.length && isNaN(i[0]) && (i[1] = i[0], i[0] = void 0), {
                tolerance: i[0] ? i[0].trim() : void 0,
                viewport: i[1] ? t(i[1].trim()) : void 0
            }
        }
        return {}
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t).extend(t.expr.pseudos || t.expr[":"], {
        "in-viewport": t.expr.createPseudo ? t.expr.createPseudo(function (t) {
            return function (n) {
                return e(n, i(t))
            }
        }) : function (t, n, o) {
            return e(t, i(o[3]))
        }
    }),
    t.fn.isInViewport = function (t) {
        return this.filter(function (i, n) {
            return e(n, t)
        })
    },
    t.fn.run = function (e) {
        var i = this;
        if (1 === arguments.length && "function" == typeof e && (e = [e]), !(e instanceof Array))
            throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
        return e.forEach(function (e) {
            "function" != typeof e ? (console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on")) : [].slice.call(i).forEach(function (i) {
                return e.call(t(i))
            })
        }),
        this
    }
}), function (t) {
    function e(e, i, n, o) {
        var r = e.text(),
        s = r.split(i),
        a = "";
        s.length && (t(s).each(function (t, e) {
                a += '<span class="' + n + (t + 1) + '" aria-hidden="true">' + e + "</span>" + o
            }), e.attr("aria-label", r.replace(/eefec303079ad17405c889e092e105b0/g, " ")).empty().append(a))
    }
    var i = {
        init: function () {
            return this.each(function () {
                e(t(this), "", "char", "")
            })
        },
        words: function () {
            return this.each(function () {
                e(t(this), " ", "word", " ")
            })
        },
        lines: function () {
            return this.each(function () {
                var i = "eefec303079ad17405c889e092e105b0";
                e(t(this).children("br").replaceWith(i).end(), i, "line", "")
            })
        }
    };
    t.fn.lettering = function (e) {
        return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
    }
}
(jQuery), function (t) {
    "use strict";
    function e(e) {
        return /In/.test(e) || t.inArray(e, t.fn.textillate.defaults.inEffects) >= 0
    }
    function i(e) {
        return /Out/.test(e) || t.inArray(e, t.fn.textillate.defaults.outEffects) >= 0
    }
    function n(t) {
        return "true" !== t && "false" !== t ? t : "true" === t
    }
    function o(e) {
        var i = e.attributes || [],
        o = {};
        return i.length ? (t.each(i, function (t, e) {
                var i = e.nodeName.replace(/delayscale/, "delayScale");
                /^data-in-*/.test(i) ? (o.in = o.in || {}, o.in[i.replace(/data-in-/, "")] = n(e.nodeValue)) : /^data-out-*/.test(i) ? (o.out = o.out || {}, o.out[i.replace(/data-out-/, "")] = n(e.nodeValue)) : /^data-*/.test(i) && (o[i.replace(/data-/, "")] = n(e.nodeValue))
            }), o) : o
    }
    function r(n, o, r) {
        var s = n.length;
        s ? (o.shuffle && (n = function (t) {
                for (var e, i, n = t.length; n; e = parseInt(Math.random() * n), i = t[--n], t[n] = t[e], t[e] = i);
                return t
            }
                (n)), o.reverse && (n = n.toArray().reverse()), t.each(n, function (n, a) {
                var l = t(a);
                function c() {
                    e(o.effect) ? l.css("visibility", "visible") : i(o.effect) && l.css("visibility", "hidden"),
                    !(s -= 1) && r && r()
                }
                var u = o.sync ? o.delay : o.delay * n * o.delayScale;
                l.text() ? setTimeout(function () {
                    var t,
                    e,
                    i;
                    t = l,
                    e = o.effect,
                    i = c,
                    t.addClass("animated " + e).css("visibility", "visible").show(),
                    t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        t.removeClass("animated " + e),
                        i && i()
                    })
                }, u) : c()
            })) : r && r()
    }
    t.fn.textillate = function (n, s) {
        return this.each(function () {
            var a = t(this),
            l = a.data("textillate"),
            c = t.extend(!0, {}, t.fn.textillate.defaults, o(this), "object" == typeof n && n);
            l ? "string" == typeof n ? l[n].apply(l, [].concat(s)) : l.setOptions.call(l, c) : a.data("textillate", l = new function (n, s) {
                var a = this,
                l = t(n);
                a.init = function () {
                    a.$texts = l.find(s.selector),
                    a.$texts.length || (a.$texts = t('<ul class="texts"><li>' + l.html() + "</li></ul>"), l.html(a.$texts)),
                    a.$texts.hide(),
                    a.$current = t("<span>").html(a.$texts.find(":first-child").html()).prependTo(l),
                    e(s.in.effect) ? a.$current.css("visibility", "hidden") : i(s.out.effect) && a.$current.css("visibility", "visible"),
                    a.setOptions(s),
                    a.timeoutRun = null,
                    setTimeout(function () {
                        a.options.autoStart && a.start()
                    }, a.options.initialDelay)
                },
                a.setOptions = function (t) {
                    a.options = t
                },
                a.triggerEvent = function (e) {
                    var i = t.Event(e + ".tlt");
                    return l.trigger(i, a),
                    i
                },
                a.in = function (n, s) {
                    n = n || 0;
                    var c,
                    u = a.$texts.find(":nth-child(" + ((n || 0) + 1) + ")"),
                    d = t.extend(!0, {}, a.options, u.length ? o(u[0]) : {});
                    u.addClass("current"),
                    a.triggerEvent("inAnimationBegin"),
                    l.attr("data-active", u.data("id")),
                    a.$current.html(u.html()).lettering("words"),
                    "char" == a.options.type && a.$current.find('[class^="word"]').css({
                        display: "inline-block",
                        "-webkit-transform": "translate3d(0,0,0)",
                        "-moz-transform": "translate3d(0,0,0)",
                        "-o-transform": "translate3d(0,0,0)",
                        transform: "translate3d(0,0,0)"
                    }).each(function () {
                        t(this).lettering()
                    }),
                    c = a.$current.find('[class^="' + a.options.type + '"]').css("display", "inline-block"),
                    e(d.in.effect) ? c.css("visibility", "hidden") : i(d.in.effect) && c.css("visibility", "visible"),
                    a.currentIndex = n,
                    r(c, d.in, function () {
                        a.triggerEvent("inAnimationEnd"),
                        d.in.callback && d.in.callback(),
                        s && s(a)
                    })
                },
                a.out = function (e) {
                    var i = a.$texts.find(":nth-child(" + ((a.currentIndex || 0) + 1) + ")"),
                    n = a.$current.find('[class^="' + a.options.type + '"]'),
                    s = t.extend(!0, {}, a.options, i.length ? o(i[0]) : {});
                    a.triggerEvent("outAnimationBegin"),
                    r(n, s.out, function () {
                        i.removeClass("current"),
                        a.triggerEvent("outAnimationEnd"),
                        l.removeAttr("data-active"),
                        s.out.callback && s.out.callback(),
                        e && e(a)
                    })
                },
                a.start = function (t) {
                    setTimeout(function () {
                        a.triggerEvent("start"),
                        function t(e) {
                            a.in(e, function () {
                                var i = a.$texts.children().length;
                                e += 1,
                                !a.options.loop && e >= i ? (a.options.callback && a.options.callback(), a.triggerEvent("end")) : (e %= i, a.timeoutRun = setTimeout(function () {
                                        a.out(function () {
                                            t(e)
                                        })
                                    }, a.options.minDisplayTime))
                            })
                        }
                        (t || 0)
                    }, a.options.initialDelay)
                },
                a.stop = function () {
                    a.timeoutRun && (clearInterval(a.timeoutRun), a.timeoutRun = null)
                },
                a.init()
            }
                (this, c))
        })
    },
    t.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function () {},
        type: "char"
    }
}
(jQuery), function (t) {
    var e,
    i,
    n,
    o = t.event,
    r = {
        _: 0
    },
    s = 0;
    e = o.special.throttledresize = {
        setup: function () {
            t(this).on("resize", e.handler)
        },
        teardown: function () {
            t(this).off("resize", e.handler)
        },
        handler: function (a, l) {
            var c = this,
            u = arguments;
            i = !0,
            n || (setInterval(function () {
                    (++s > e.threshold && i || l) && (a.type = "throttledresize", o.dispatch.apply(c, u), i = !1, s = 0),
                    s > 9 && (t(r).stop(), n = !1, s = 0)
                }, 30), n = !0)
        },
        threshold: 0
    }
}
(jQuery), function (t, e, i) {
    function n(t, e) {
        return typeof t === e
    }
    function o() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : b ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }
    function r(t) {
        return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }
    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function a(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }
    function l(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function c(e, i, n) {
        var o;
        if ("getComputedStyle" in t) {
            o = getComputedStyle.call(t, e, i);
            var r = t.console;
            if (null !== o)
                n && (o = o.getPropertyValue(n));
            else if (r) {
                r[r.error ? "error" : "log"].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !i && e.currentStyle && e.currentStyle[n];
        return o
    }
    function u(t, i, n, r) {
        var s,
        a,
        l,
        c,
        u = "modernizr",
        d = o("div"),
        h = function () {
            var t = e.body;
            return t || ((t = o(b ? "svg" : "body")).fake = !0),
            t
        }
        ();
        if (parseInt(n, 10))
            for (; n--; )
                (l = o("div")).id = r ? r[n] : u + (n + 1), d.appendChild(l);
        return (s = o("style")).type = "text/css",
        s.id = "s" + u,
        (h.fake ? h : d).appendChild(s),
        h.appendChild(d),
        s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)),
        d.id = u,
        h.fake && (h.style.background = "", h.style.overflow = "hidden", c = w.style.overflow, w.style.overflow = "hidden", w.appendChild(h)),
        a = i(d, t),
        h.fake ? (h.parentNode.removeChild(h), w.style.overflow = c, w.offsetHeight) : d.parentNode.removeChild(d),
        !!a
    }
    function d(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--; )
                if (t.CSS.supports(l(e[o]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var r = []; o--; )
                r.push("(" + l(e[o]) + ":" + n + ")");
            return u("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function (t) {
                return "absolute" == c(t, null, "position")
            })
        }
        return i
    }
    function h(t, e, a, l) {
        function c() {
            h && (delete T.style, delete T.modElem)
        }
        if (l = !n(l, "undefined") && l, !n(a, "undefined")) {
            var u = d(t, a);
            if (!n(u, "undefined"))
                return u
        }
        for (var h, f, p, m, g, v = ["modernizr", "tspan", "samp"]; !T.style && v.length; )
            h = !0, T.modElem = o(v.shift()), T.style = T.modElem.style;
        for (p = t.length, f = 0; p > f; f++)
            if (m = t[f], g = T.style[m], s(m, "-") && (m = r(m)), T.style[m] !== i) {
                if (l || n(a, "undefined"))
                    return c(), "pfx" != e || m;
                try {
                    T.style[m] = a
                } catch (t) {}
                if (T.style[m] != g)
                    return c(), "pfx" != e || m
            }
        return c(),
        !1
    }
    function f(t, e, i, o, r) {
        var s = t.charAt(0).toUpperCase() + t.slice(1),
        l = (t + " " + k.join(s + " ") + s).split(" ");
        return n(e, "string") || n(e, "undefined") ? h(l, e, o, r) : function (t, e, i) {
            var o;
            for (var r in t)
                if (t[r]in e)
                    return !1 === i ? t[r] : n(o = e[t[r]], "function") ? a(o, i || e) : o;
            return !1
        }
        (l = (t + " " + C.join(s + " ") + s).split(" "), e, i)
    }
    function p(t, e, n) {
        return f(t, i, i, e, n)
    }
    var m = [],
    g = [],
    v = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function (t, e) {
            var i = this;
            setTimeout(function () {
                e(i[t])
            }, 0)
        },
        addTest: function (t, e, i) {
            g.push({
                name: t,
                fn: e,
                options: i
            })
        },
        addAsyncTest: function (t) {
            g.push({
                name: null,
                fn: t
            })
        }
    },
    y = function () {};
    y.prototype = v,
    (y = new y).addTest("history", function () {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history)
    });
    var w = e.documentElement,
    b = "svg" === w.nodeName.toLowerCase();
    y.addTest("video", function () {
        var t = o("video"),
        e = !1;
        try {
            (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {}
        return e
    });
    var x = "Moz O ms Webkit",
    k = v._config.usePrefixes ? x.split(" ") : [];
    v._cssomPrefixes = k;
    var S = function (e) {
        var n,
        o = _.length,
        r = t.CSSRule;
        if (void 0 === r)
            return i;
        if (!e)
            return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in r)
            return "@" + e;
        for (var s = 0; o > s; s++) {
            var a = _[s];
            if (a.toUpperCase() + "_" + n in r)
                return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    v.atRule = S;
    var C = v._config.usePrefixes ? x.toLowerCase().split(" ") : [];
    v._domPrefixes = C;
    var E = {
        elem: o("modernizr")
    };
    y._q.push(function () {
        delete E.elem
    });
    var T = {
        style: E.elem.style
    };
    y._q.unshift(function () {
        delete T.style
    });
    var _ = v._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    v._prefixes = _,
    y.addTest("csspositionsticky", function () {
        var t = "position:",
        e = "sticky",
        i = o("a").style;
        return i.cssText = t + _.join(e + ";" + t).slice(0, -t.length),
        -1 !== i.position.indexOf(e)
    }),
    v.testAllProps = f;
    var z = v.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@") ? S(t) : (-1 != t.indexOf("-") && (t = r(t)), e ? f(t, e, i) : f(t, "pfx"))
    };
    y.addTest("fullscreen", !(!z("exitFullscreen", e, !1) && !z("cancelFullScreen", e, !1))),
    y.addTest("backgroundblendmode", z("backgroundBlendMode", "text")),
    v.testAllProps = p,
    y.addTest("flexbox", p("flexBasis", "1px", !0)),
    y.addTest("flexwrap", p("flexWrap", "wrap", !0)),
    function () {
        var t,
        e,
        i,
        o,
        r,
        s;
        for (var a in g)
            if (g.hasOwnProperty(a)) {
                if (t = [], (e = g[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++)
                        t.push(e.options.aliases[i].toLowerCase());
                for (o = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++)
                    1 === (s = t[r].split(".")).length ? y[s[0]] = o : (!y[s[0]] || y[s[0]]instanceof Boolean || (y[s[0]] = new Boolean(y[s[0]])), y[s[0]][s[1]] = o), m.push((o ? "" : "no-") + s.join("-"))
            }
    }
    (),
    function (t) {
        var e = w.className,
        i = y._config.classPrefix || "";
        if (b && (e = e.baseVal), y._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        y._config.enableClasses && (e += " " + i + t.join(" " + i), b ? w.className.baseVal = e : w.className = e)
    }
    (m),
    delete v.addTest,
    delete v.addAsyncTest;
    for (var I = 0; I < y._q.length; I++)
        y._q[I]();
    t.Modernizr = y
}
(window, document), function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
}
("undefined" != typeof window ? window : global, function () {
    var t = function (e, i) {
        "use strict";
        var n = Object.create(t.prototype),
        o = 0,
        r = 0,
        s = 0,
        a = 0,
        l = [],
        c = !0,
        u = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
            return setTimeout(t, 1e3 / 60)
        },
        d = null,
        h = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
        f = window.transformProp || function () {
            var t = document.createElement("div");
            if (null === t.style.transform) {
                var e = ["Webkit", "Moz", "ms"];
                for (var i in e)
                    if (void 0 !== t.style[e[i] + "Transform"])
                        return e[i] + "Transform"
            }
            return "transform"
        }
        ();
        n.options = {
            speed: -2,
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            callback: function () {}
        },
        i && Object.keys(i).forEach(function (t) {
            n.options[t] = i[t]
        }),
        e || (e = ".rellax");
        var p = "string" == typeof e ? document.querySelectorAll(e) : [e];
        if (!(p.length > 0))
            throw new Error("The elements you're trying to select don't exist.");
        if (n.elems = p, n.options.wrapper && !n.options.wrapper.nodeType) {
            var m = document.querySelector(n.options.wrapper);
            if (!m)
                throw new Error("The wrapper you're trying to use don't exist.");
            n.options.wrapper = m
        }
        var g = function () {
            for (var t = 0; t < l.length; t++)
                n.elems[t].style.cssText = l[t].style;
            l = [],
            r = window.innerHeight,
            a = window.innerWidth,
            y(),
            function () {
                for (var t = 0; t < n.elems.length; t++) {
                    var e = v(n.elems[t]);
                    l.push(e)
                }
            }
            (),
            c && (window.addEventListener("resize", g), c = !1),
            x()
        },
        v = function (t) {
            var e = t.getAttribute("data-rellax-percentage"),
            i = t.getAttribute("data-rellax-speed"),
            o = t.getAttribute("data-rellax-zindex") || 0,
            s = t.getAttribute("data-rellax-min"),
            l = t.getAttribute("data-rellax-max"),
            c = n.options.wrapper ? n.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            n.options.relativeToWrapper && (c = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - n.options.wrapper.offsetTop);
            var u = n.options.vertical && (e || n.options.center) ? c : 0,
            d = n.options.horizontal && (e || n.options.center) ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
            h = u + t.getBoundingClientRect().top,
            f = t.clientHeight || t.offsetHeight || t.scrollHeight,
            p = d + t.getBoundingClientRect().left,
            m = t.clientWidth || t.offsetWidth || t.scrollWidth,
            g = e || (u - h + r) / (f + r),
            v = e || (d - p + a) / (m + a);
            n.options.center && (v = .5, g = .5);
            var y = i || n.options.speed,
            b = w(v, g, y),
            x = t.style.cssText,
            k = "";
            if (x.indexOf("transform") >= 0) {
                var S = x.indexOf("transform"),
                C = x.slice(S),
                E = C.indexOf(";");
                k = E ? " " + C.slice(11, E).replace(/\s/g, "") : " " + C.slice(11).replace(/\s/g, "")
            }
            return {
                baseX: b.x,
                baseY: b.y,
                top: h,
                left: p,
                height: f,
                width: m,
                speed: y,
                style: x,
                transform: k,
                zindex: o,
                min: s,
                max: l
            }
        },
        y = function () {
            var t = o,
            e = s;
            if (o = n.options.wrapper ? n.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, s = n.options.wrapper ? n.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, n.options.relativeToWrapper) {
                var i = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                o = i - n.options.wrapper.offsetTop
            }
            return !(t == o || !n.options.vertical) || !(e == s || !n.options.horizontal)
        },
        w = function (t, e, i) {
            var o = {},
            r = i * (100 * (1 - t)),
            s = i * (100 * (1 - e));
            return o.x = n.options.round ? Math.round(r) : Math.round(100 * r) / 100,
            o.y = n.options.round ? Math.round(s) : Math.round(100 * s) / 100,
            o
        },
        b = function () {
            y() && !1 === c && x(),
            d = u(b)
        },
        x = function () {
            for (var t, e = 0; e < n.elems.length; e++) {
                var i = (o - l[e].top + r) / (l[e].height + r),
                c = (s - l[e].left + a) / (l[e].width + a),
                u = (t = w(c, i, l[e].speed)).y - l[e].baseY,
                d = t.x - l[e].baseX;
                null !== l[e].min && (n.options.vertical && !n.options.horizontal && (u = u <= l[e].min ? l[e].min : u), n.options.horizontal && !n.options.vertical && (d = d <= l[e].min ? l[e].min : d)),
                null !== l[e].max && (n.options.vertical && !n.options.horizontal && (u = u >= l[e].max ? l[e].max : u), n.options.horizontal && !n.options.vertical && (d = d >= l[e].max ? l[e].max : d));
                var h = l[e].zindex,
                p = "translate3d(" + (n.options.horizontal ? d : "0") + "px," + (n.options.vertical ? u : "0") + "px," + h + "px) " + l[e].transform;
                n.elems[e].style[f] = p
            }
            n.options.callback(t)
        };
        return n.destroy = function () {
            for (var t = 0; t < n.elems.length; t++)
                n.elems[t].style.cssText = l[t].style;
            c || (window.removeEventListener("resize", g), c = !0),
            h(d),
            d = null
        },
        g(),
        b(),
        n.refresh = g,
        n
    };
    return t
}), function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.unorphan = e()
}
(this, function () {
    var t = " ",
    e = 3,
    i = 1;
    return n.reverseWalk = o,
    n;
    function n(r, s) {
        if (s || (s = {}), r)
            if ("string" == typeof r)
                n(document.querySelectorAll(r), s);
            else if (r.nodeType === i)
                !function (n, r) {
                    var s,
                    a;
                    o(n, function (n) {
                        if (n.nodeType !== e || a)
                            n.nodeType === i && "br" === n.nodeName.toLowerCase() && (a = !1, s = !1);
                        else {
                            var o = n.nodeValue;
                            if (/\s+[^\s]+\s*$/.test(o) && !s) {
                                if (n.nodeValue = o.replace(/\s+([^\s]+)\s*$/, t + "$1"), !r.br)
                                    return !1;
                                a = !0
                            } else if (/^[^\s]+\s*$/.test(o) && !s)
                                s = !0;
                            else if (/\s/.test(o) && s) {
                                if (n.nodeValue = o.replace(/\s+([^\s]*)$/, t + "$1"), !r.br)
                                    return !1;
                                a = !0
                            }
                        }
                    })
                }
        (r, s);
        else if (r.nodeType === e)
            r.nodeValue = r.nodeValue.replace(/\s+([^\s]*)\s*$/, t + "$1");
        else if (r.length)
            for (var a = 0, l = r.length; a < l; a++)
                n(r[a], s)
    }
    function o(t, n) {
        for (var r = t.childNodes.length - 1; r >= 0; r--) {
            var s = t.childNodes[r];
            if (s.nodeType === e) {
                if (!1 === n(s))
                    return !1
            } else if (s.nodeType === i) {
                if (!1 === n(s))
                    return !1;
                if (!1 === o(s, n))
                    return !1
            }
        }
    }
}), function (t) {
    "use strict";
    function e(t) {
        var e = t.length,
        n = i.type(t);
        return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    if (!t.jQuery) {
        var i = function (t, e) {
            return new i.fn.init(t, e)
        };
        i.isWindow = function (t) {
            return t && t === t.window
        },
        i.type = function (t) {
            return t ? "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t : t + ""
        },
        i.isArray = Array.isArray || function (t) {
            return "array" === i.type(t)
        },
        i.isPlainObject = function (t) {
            var e;
            if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                return !1;
            try {
                if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            for (e in t);
            return void 0 === e || r.call(t, e)
        },
        i.each = function (t, i, n) {
            var o = 0,
            r = t.length,
            s = e(t);
            if (n) {
                if (s)
                    for (; o < r && !1 !== i.apply(t[o], n); o++);
                else
                    for (o in t)
                        if (t.hasOwnProperty(o) && !1 === i.apply(t[o], n))
                            break
            } else if (s)
                for (; o < r && !1 !== i.call(t[o], o, t[o]); o++);
            else
                for (o in t)
                    if (t.hasOwnProperty(o) && !1 === i.call(t[o], o, t[o]))
                        break;
            return t
        },
        i.data = function (t, e, o) {
            if (void 0 === o) {
                var r = t[i.expando],
                s = r && n[r];
                if (void 0 === e)
                    return s;
                if (s && e in s)
                    return s[e]
            } else if (void 0 !== e) {
                var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                return n[a] = n[a] || {},
                n[a][e] = o,
                o
            }
        },
        i.removeData = function (t, e) {
            var o = t[i.expando],
            r = o && n[o];
            r && (e ? i.each(e, function (t, e) {
                    delete r[e]
                }) : delete n[o])
        },
        i.extend = function () {
            var t,
            e,
            n,
            o,
            r,
            s,
            a = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++)
                if (r = arguments[l])
                    for (o in r)
                        r.hasOwnProperty(o) && (t = a[o], a !== (n = r[o]) && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, a[o] = i.extend(u, s, n)) : void 0 !== n && (a[o] = n)));
            return a
        },
        i.queue = function (t, n, o) {
            if (t) {
                n = (n || "fx") + "queue";
                var r = i.data(t, n);
                return o ? (!r || i.isArray(o) ? r = i.data(t, n, function (t, i) {
                        var n = [];
                        return t && (e(Object(t)) ? function (t, e) {
                            for (var i = +e.length, n = 0, o = t.length; n < i; )
                                t[o++] = e[n++];
                            if (i != i)
                                for (; void 0 !== e[n]; )
                                    t[o++] = e[n++];
                            t.length = o
                        }
                            (n, "string" == typeof t ? [t] : t) : [].push.call(n, t)),
                        n
                    }
                            (o)) : r.push(o), r) : r || []
            }
        },
        i.dequeue = function (t, e) {
            i.each(t.nodeType ? [t] : t, function (t, n) {
                e = e || "fx";
                var o = i.queue(n, e),
                r = o.shift();
                "inprogress" === r && (r = o.shift()),
                r && ("fx" === e && o.unshift("inprogress"), r.call(n, function () {
                        i.dequeue(n, e)
                    }))
            })
        },
        i.fn = i.prototype = {
            init: function (t) {
                if (t.nodeType)
                    return this[0] = t, this;
                throw new Error("Not a DOM node.")
            },
            offset: function () {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function () {
                var t = this[0],
                e = function (t) {
                    for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                (t),
                n = this.offset(),
                o = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                }
                 : i(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0,
                n.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: n.top - o.top,
                    left: n.left - o.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
            o["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        t.Velocity = {
            Utilities: i
        }
    }
}
(window), function (t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}
(function () {
    "use strict";
    return function (t, e, i, n) {
        function o(t) {
            return y.isWrapped(t) ? t = g.call(t) : y.isNode(t) && (t = [t]),
            t
        }
        function r(t) {
            var e = h.data(t, "velocity");
            return null === e ? n : e
        }
        function s(t, e) {
            var i = r(t);
            i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - e + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
        }
        function a(t, e) {
            var i = r(t);
            i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }
        function l(t, i, n, o) {
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function s(t, e) {
                return 3 * e - 6 * t
            }
            function a(t) {
                return 3 * t
            }
            function l(t, e, i) {
                return ((r(e, i) * t + s(e, i)) * t + a(e)) * t
            }
            function c(t, e, i) {
                return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e)
            }
            function u(e, i) {
                for (var o = 0; o < f; ++o) {
                    var r = c(i, t, n);
                    if (0 === r)
                        return i;
                    i -= (l(i, t, n) - e) / r
                }
                return i
            }
            function d(e, i, o) {
                var r,
                s,
                a = 0;
                do {
                    (r = l(s = i + (o - i) / 2, t, n) - e) > 0 ? o = s : i = s
                } while (Math.abs(r) > m && ++a < g);
                return s
            }
            function h() {
                k = !0,
                t === i && n === o || function () {
                    for (var e = 0; e < v; ++e)
                        x[e] = l(e * y, t, n)
                }
                ()
            }
            var f = 4,
            p = .001,
            m = 1e-7,
            g = 10,
            v = 11,
            y = 1 / (v - 1),
            w = "Float32Array" in e;
            if (4 !== arguments.length)
                return !1;
            for (var b = 0; b < 4; ++b)
                if ("number" != typeof arguments[b] || isNaN(arguments[b]) || !isFinite(arguments[b]))
                    return !1;
            t = Math.min(t, 1),
            n = Math.min(n, 1),
            t = Math.max(t, 0),
            n = Math.max(n, 0);
            var x = w ? new Float32Array(v) : new Array(v),
            k = !1,
            S = function (e) {
                return k || h(),
                t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(function (e) {
                    for (var i = 0, o = 1, r = v - 1; o !== r && x[o] <= e; ++o)
                        i += y;
                    var s = i + (e - x[--o]) / (x[o + 1] - x[o]) * y,
                    a = c(s, t, n);
                    return a >= p ? u(e, s) : 0 === a ? s : d(e, i, i + y)
                }
                    (e), i, o)
            };
            S.getControlPoints = function () {
                return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }
                ]
            };
            var C = "generateBezier(" + [t, i, n, o] + ")";
            return S.toString = function () {
                return C
            },
            S
        }
        function c(t, e) {
            var i = t;
            return y.isString(t) ? k.Easings[t] || (i = !1) : i = y.isArray(t) && 1 === t.length ? function (t) {
                return function (e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            .apply(null, t) : y.isArray(t) && 2 === t.length ? S.apply(null, t.concat([e])) : !(!y.isArray(t) || 4 !== t.length) && l.apply(null, t),
            !1 === i && (i = k.Easings[k.defaults.easing] ? k.defaults.easing : x),
            i
        }
        function u(t) {
            if (t) {
                var e = k.timestamp && !0 !== t ? t : m.now(),
                i = k.State.calls.length;
                i > 1e4 && (k.State.calls = function (t) {
                    for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                        var o = t[e];
                        o && n.push(o)
                    }
                    return n
                }
                    (k.State.calls), i = k.State.calls.length);
                for (var o = 0; o < i; o++)
                    if (k.State.calls[o]) {
                        var s = k.State.calls[o],
                        a = s[0],
                        l = s[2],
                        c = s[3],
                        p = !!c,
                        g = null,
                        v = s[5],
                        w = s[6];
                        if (c || (c = k.State.calls[o][3] = e - 16), v) {
                            if (!0 !== v.resume)
                                continue;
                            c = s[3] = Math.round(e - w - 16),
                            s[5] = null
                        }
                        w = s[6] = e - c;
                        for (var b = Math.min(w / l.duration, 1), x = 0, S = a.length; x < S; x++) {
                            var E = a[x],
                            _ = E.element;
                            if (r(_)) {
                                var z = !1;
                                if (l.display !== n && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        h.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (t, e) {
                                            C.setPropertyValue(_, "display", e)
                                        })
                                    }
                                    C.setPropertyValue(_, "display", l.display)
                                }
                                for (var I in l.visibility !== n && "hidden" !== l.visibility && C.setPropertyValue(_, "visibility", l.visibility), E)
                                    if (E.hasOwnProperty(I) && "element" !== I) {
                                        var P,
                                        L = E[I],
                                        $ = y.isString(L.easing) ? k.Easings[L.easing] : L.easing;
                                        if (y.isString(L.pattern)) {
                                            var A = 1 === b ? function (t, e, i) {
                                                var n = L.endValue[e];
                                                return i ? Math.round(n) : n
                                            }
                                             : function (t, e, i) {
                                                var n = L.startValue[e],
                                                o = L.endValue[e] - n,
                                                r = n + o * $(b, l, o);
                                                return i ? Math.round(r) : r
                                            };
                                            P = L.pattern.replace(/{(\d+)(!)?}/g, A)
                                        } else if (1 === b)
                                            P = L.endValue;
                                        else {
                                            var D = L.endValue - L.startValue;
                                            P = L.startValue + D * $(b, l, D)
                                        }
                                        if (!p && P === L.currentValue)
                                            continue;
                                        if (L.currentValue = P, "tween" === I)
                                            g = P;
                                        else {
                                            var O;
                                            if (C.Hooks.registered[I]) {
                                                O = C.Hooks.getRoot(I);
                                                var M = r(_).rootPropertyValueCache[O];
                                                M && (L.rootPropertyValue = M)
                                            }
                                            var F = C.setPropertyValue(_, I, L.currentValue + (f < 9 && 0 === parseFloat(P) ? "" : L.unitType), L.rootPropertyValue, L.scrollData);
                                            C.Hooks.registered[I] && (C.Normalizations.registered[O] ? r(_).rootPropertyValueCache[O] = C.Normalizations.registered[O]("extract", null, F[1]) : r(_).rootPropertyValueCache[O] = F[1]),
                                            "transform" === F[0] && (z = !0)
                                        }
                                    }
                                l.mobileHA && r(_).transformCache.translate3d === n && (r(_).transformCache.translate3d = "(0px, 0px, 0px)", z = !0),
                                z && C.flushTransformCache(_)
                            }
                        }
                        l.display !== n && "none" !== l.display && (k.State.calls[o][2].display = !1),
                        l.visibility !== n && "hidden" !== l.visibility && (k.State.calls[o][2].visibility = !1),
                        l.progress && l.progress.call(s[1], s[1], b, Math.max(0, c + l.duration - e), c, g),
                        1 === b && d(o)
                    }
            }
            k.State.isTicking && T(u)
        }
        function d(t, e) {
            if (!k.State.calls[t])
                return !1;
            for (var i = k.State.calls[t][0], o = k.State.calls[t][1], s = k.State.calls[t][2], a = k.State.calls[t][4], l = !1, c = 0, u = i.length; c < u; c++) {
                var d = i[c].element;
                e || s.loop || ("none" === s.display && C.setPropertyValue(d, "display", s.display), "hidden" === s.visibility && C.setPropertyValue(d, "visibility", s.visibility));
                var f = r(d);
                if (!0 !== s.loop && (h.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && f) {
                    f.isAnimating = !1,
                    f.rootPropertyValueCache = {};
                    var p = !1;
                    h.each(C.Lists.transforms3D, function (t, e) {
                        var i = /^scale/.test(e) ? 1 : 0,
                        o = f.transformCache[e];
                        f.transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (p = !0, delete f.transformCache[e])
                    }),
                    s.mobileHA && (p = !0, delete f.transformCache.translate3d),
                    p && C.flushTransformCache(d),
                    C.Values.removeClass(d, "velocity-animating")
                }
                if (!e && s.complete && !s.loop && c === u - 1)
                    try {
                        s.complete.call(o, o)
                    } catch (t) {
                        setTimeout(function () {
                            throw t
                        }, 1)
                    }
                a && !0 !== s.loop && a(o),
                f && !0 === s.loop && !e && (h.each(f.tweensContainer, function (t, e) {
                        if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                            var i = e.startValue;
                            e.startValue = e.endValue,
                            e.endValue = i
                        }
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), k(d, "reverse", {
                        loop: !0,
                        delay: s.delay
                    })),
                !1 !== s.queue && h.dequeue(d, s.queue)
            }
            k.State.calls[t] = !1;
            for (var m = 0, g = k.State.calls.length; m < g; m++)
                if (!1 !== k.State.calls[m]) {
                    l = !0;
                    break
                }
            !1 === l && (k.State.isTicking = !1, delete k.State.calls, k.State.calls = [])
        }
        var h,
        f = function () {
            if (i.documentMode)
                return i.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");
                if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length)
                    return e = null, t
            }
            return n
        }
        (),
        p = function () {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                var i,
                n = (new Date).getTime();
                return i = Math.max(0, 16 - (n - t)),
                t = n + i,
                setTimeout(function () {
                    e(n + i)
                }, i)
            }
        }
        (),
        m = function () {
            var t = e.performance || {};
            if ("function" != typeof t.now) {
                var i = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                t.now = function () {
                    return (new Date).getTime() - i
                }
            }
            return t
        }
        (),
        g = function () {
            var t = Array.prototype.slice;
            try {
                return t.call(i.documentElement),
                t
            } catch (e) {
                return function (e, i) {
                    var n = this.length;
                    if ("number" != typeof e && (e = 0), "number" != typeof i && (i = n), this.slice)
                        return t.call(this, e, i);
                    var o,
                    r = [],
                    s = e >= 0 ? e : Math.max(0, n + e),
                    a = (i < 0 ? n + i : Math.min(i, n)) - s;
                    if (a > 0)
                        if (r = new Array(a), this.charAt)
                            for (o = 0; o < a; o++)
                                r[o] = this.charAt(s + o);
                        else
                            for (o = 0; o < a; o++)
                                r[o] = this[s + o];
                    return r
                }
            }
        }
        (),
        v = function () {
            return Array.prototype.includes ? function (t, e) {
                return t.includes(e)
            }
             : Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e) >= 0
            }
             : function (t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e)
                        return !0;
                return !1
            }
        },
        y = {
            isNumber: function (t) {
                return "number" == typeof t
            },
            isString: function (t) {
                return "string" == typeof t
            },
            isArray: Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            isFunction: function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            },
            isNode: function (t) {
                return t && t.nodeType
            },
            isWrapped: function (t) {
                return t && t !== e && y.isNumber(t.length) && !y.isString(t) && !y.isFunction(t) && !y.isNode(t) && (0 === t.length || y.isNode(t[0]))
            },
            isSVG: function (t) {
                return e.SVGElement && t instanceof e.SVGElement
            },
            isEmptyObject: function (t) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        return !1;
                return !0
            }
        },
        w = !1;
        if (t.fn && t.fn.jquery ? (h = t, w = !0) : h = e.Velocity.Utilities, f <= 8 && !w)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(f <= 7)) {
            var b = 400,
            x = "swing",
            k = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: h,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: b,
                    easing: x,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function (t) {
                    h.data(t, "velocity", {
                        isSVG: y.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function (t) {
                    var e = (new Date).getTime();
                    h.each(k.State.calls, function (e, i) {
                        if (i) {
                            if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                return !0;
                            i[5] = {
                                resume: !1
                            }
                        }
                    }),
                    h.each(k.State.delayedElements, function (t, i) {
                        i && s(i, e)
                    })
                },
                resumeAll: function (t) {
                    (new Date).getTime();
                    h.each(k.State.calls, function (e, i) {
                        if (i) {
                            if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                return !0;
                            i[5] && (i[5].resume = !0)
                        }
                    }),
                    h.each(k.State.delayedElements, function (t, e) {
                        e && a(e)
                    })
                }
            };
            e.pageYOffset !== n ? (k.State.scrollAnchor = e, k.State.scrollPropertyLeft = "pageXOffset", k.State.scrollPropertyTop = "pageYOffset") : (k.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, k.State.scrollPropertyLeft = "scrollLeft", k.State.scrollPropertyTop = "scrollTop");
            var S = function () {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }
                function e(e, i, n) {
                    var o = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: o.v,
                        dv: t(o)
                    }
                }
                function i(i, n) {
                    var o = {
                        dx: i.v,
                        dv: t(i)
                    },
                    r = e(i, .5 * n, o),
                    s = e(i, .5 * n, r),
                    a = e(i, n, s),
                    l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx),
                    c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                    return i.x = i.x + l * n,
                    i.v = i.v + c * n,
                    i
                }
                return function t(e, n, o) {
                    var r,
                    s,
                    a,
                    l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    c = [0],
                    u = 0;
                    for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, (r = null !== o) ? s = (u = t(e, n)) / o * .016 : s = .016; a = i(a || l, s), c.push(1 + a.x), u += 16, Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4; );
                    return r ? function (t) {
                        return c[t * (c.length - 1) | 0]
                    }
                     : u
                }
            }
            ();
            k.Easings = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function (t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            },
            h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
                k.Easings[e[0]] = l.apply(null, e[1])
            });
            var C = k.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var t = 0; t < C.Lists.colors.length; t++) {
                            var e = "color" === C.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            C.Hooks.templates[C.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i,
                        n,
                        o;
                        if (f)
                            for (i in C.Hooks.templates)
                                if (C.Hooks.templates.hasOwnProperty(i)) {
                                    o = (n = C.Hooks.templates[i])[0].split(" ");
                                    var r = n[1].match(C.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), C.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                }
                        for (i in C.Hooks.templates)
                            if (C.Hooks.templates.hasOwnProperty(i))
                                for (var s in o = (n = C.Hooks.templates[i])[0].split(" "))
                                    if (o.hasOwnProperty(s)) {
                                        var a = i + o[s],
                                        l = s;
                                        C.Hooks.registered[a] = [i, l]
                                    }
                    },
                    getRoot: function (t) {
                        var e = C.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    getUnit: function (t, e) {
                        var i = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return i && v(C.Lists.units, i) ? i : ""
                    },
                    fixColors: function (t) {
                        return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (t, e, i) {
                            return C.Lists.colorNames.hasOwnProperty(i) ? (e || "rgba(") + C.Lists.colorNames[i] + (e ? "" : ",1)") : e + i
                        })
                    },
                    cleanRootPropertyValue: function (t, e) {
                        return C.RegEx.valueUnwrap.test(e) && (e = e.match(C.RegEx.valueUnwrap)[1]),
                        C.Values.isCSSNullValue(e) && (e = C.Hooks.templates[t][1]),
                        e
                    },
                    extractValue: function (t, e) {
                        var i = C.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                            o = i[1];
                            return (e = C.Hooks.cleanRootPropertyValue(n, e)).toString().match(C.RegEx.valueSplit)[o]
                        }
                        return e
                    },
                    injectValue: function (t, e, i) {
                        var n = C.Hooks.registered[t];
                        if (n) {
                            var o,
                            r = n[0],
                            s = n[1];
                            return (o = (i = C.Hooks.cleanRootPropertyValue(r, i)).toString().match(C.RegEx.valueSplit))[s] = e,
                            o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return C.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(C.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i,
                                n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function (t, e, i) {
                            switch (t) {
                            case "name":
                                return k.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = o ? o[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function (t, e, i) {
                            if (f <= 8)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1,
                                    parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function () {
                        function t(t, e, i) {
                            if ("border-box" === C.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (i || !1)) {
                                var n,
                                o,
                                r = 0,
                                s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                a = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (n = 0; n < a.length; n++)
                                    o = parseFloat(C.getPropertyValue(e, a[n])), isNaN(o) || (r += o);
                                return i ? -r : r
                            }
                            return 0
                        }
                        function e(e, i) {
                            return function (n, o, r) {
                                switch (n) {
                                case "name":
                                    return e;
                                case "extract":
                                    return parseFloat(r) + t(e, o, i);
                                case "inject":
                                    return parseFloat(r) - t(e, o, i) + "px"
                                }
                            }
                        }
                        f && !(f > 9) || k.State.isGingerbread || (C.Lists.transformsBase = C.Lists.transformsBase.concat(C.Lists.transforms3D));
                        for (var i = 0; i < C.Lists.transformsBase.length; i++)
                            !function () {
                                var t = C.Lists.transformsBase[i];
                                C.Normalizations.registered[t] = function (e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return r(i) === n || r(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var s = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            s = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case "scal":
                                        case "scale":
                                            k.State.isAndroid && r(i).transformCache[t] === n && o < 1 && (o = 1),
                                            s = !/(\d)$/i.test(o);
                                            break;
                                        case "skew":
                                            s = !/(deg|\d)$/i.test(o);
                                            break;
                                        case "rotate":
                                            s = !/(deg|\d)$/i.test(o)
                                        }
                                        return s || (r(i).transformCache[t] = "(" + o + ")"),
                                        r(i).transformCache[t]
                                    }
                                }
                            }
                        ();
                        for (var o = 0; o < C.Lists.colors.length; o++)
                            !function () {
                                var t = C.Lists.colors[o];
                                C.Normalizations.registered[t] = function (e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var r;
                                        if (C.RegEx.wrappedValueAlreadyExtracted.test(o))
                                            r = o;
                                        else {
                                            var s,
                                            a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? s = a[o] !== n ? a[o] : a.black : C.RegEx.isHex.test(o) ? s = "rgb(" + C.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black),
                                            r = (s || o).toString().match(C.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!f || f > 8) && 3 === r.split(" ").length && (r += " 1"),
                                        r;
                                    case "inject":
                                        return /^rgb/.test(o) ? o : (f <= 8 ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            }
                        ();
                        C.Normalizations.registered.innerWidth = e("width", !0),
                        C.Normalizations.registered.innerHeight = e("height", !0),
                        C.Normalizations.registered.outerWidth = e("width"),
                        C.Normalizations.registered.outerHeight = e("height")
                    }
                },
                Names: {
                    camelCase: function (t) {
                        return t.replace(/-(\w)/g, function (t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function (t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || k.State.isAndroid && !k.State.isChrome) && (e += "|transform"),
                        new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function (t) {
                        if (k.State.prefixMatches[t])
                            return [k.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; i < n; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
                                    return t.toUpperCase()
                                }), y.isString(k.State.prefixElement.style[o]))
                                return k.State.prefixMatches[t] = o, [o, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function (t) {
                        var e;
                        return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
                            return e + e + i + i + n + n
                        }),
                        (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (t) {
                        return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function (t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function (t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function (t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.add(e);
                            else if (y.isString(t.className))
                                t.className += (t.className.length ? " " : "") + e;
                            else {
                                var i = t.getAttribute(f <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i + (i ? " " : "") + e)
                            }
                    },
                    removeClass: function (t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.remove(e);
                            else if (y.isString(t.className))
                                t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                            else {
                                var i = t.getAttribute(f <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)", "gi"), " "))
                            }
                    }
                },
                getPropertyValue: function (t, i, o, s) {
                    function a(t, i) {
                        var o = 0;
                        if (f <= 8)
                            o = h.css(t, i);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(i) && 0 === C.getPropertyValue(t, "display") && (l = !0, C.setPropertyValue(t, "display", C.Values.getDisplayType(t)));
                            var c,
                            u = function () {
                                l && C.setPropertyValue(t, "display", "none")
                            };
                            if (!s) {
                                if ("height" === i && "border-box" !== C.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var d = t.offsetHeight - (parseFloat(C.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingBottom")) || 0);
                                    return u(),
                                    d
                                }
                                if ("width" === i && "border-box" !== C.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var p = t.offsetWidth - (parseFloat(C.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingRight")) || 0);
                                    return u(),
                                    p
                                }
                            }
                            c = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null),
                            "borderColor" === i && (i = "borderTopColor"),
                            "" !== (o = 9 === f && "filter" === i ? c.getPropertyValue(i) : c[i]) && null !== o || (o = t.style[i]),
                            u()
                        }
                        if ("auto" === o && /^(top|right|bottom|left)$/i.test(i)) {
                            var m = a(t, "position");
                            ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (o = h(t).position()[i] + "px")
                        }
                        return o
                    }
                    var l;
                    if (C.Hooks.registered[i]) {
                        var c = i,
                        u = C.Hooks.getRoot(c);
                        o === n && (o = C.getPropertyValue(t, C.Names.prefixCheck(u)[0])),
                        C.Normalizations.registered[u] && (o = C.Normalizations.registered[u]("extract", t, o)),
                        l = C.Hooks.extractValue(c, o)
                    } else if (C.Normalizations.registered[i]) {
                        var d,
                        p;
                        "transform" !== (d = C.Normalizations.registered[i]("name", t)) && (p = a(t, C.Names.prefixCheck(d)[0]), C.Values.isCSSNullValue(p) && C.Hooks.templates[i] && (p = C.Hooks.templates[i][1])),
                        l = C.Normalizations.registered[i]("extract", t, p)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var m = r(t);
                        if (m && m.isSVG && C.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i))
                                try {
                                    l = t.getBBox()[i]
                                } catch (t) {
                                    l = 0
                                }
                            else
                                l = t.getAttribute(i);
                        else
                            l = a(t, C.Names.prefixCheck(i)[0])
                    }
                    return C.Values.isCSSNullValue(l) && (l = 0),
                    k.debug >= 2 && console.log("Get " + i + ": " + l),
                    l
                },
                setPropertyValue: function (t, i, n, o, s) {
                    var a = i;
                    if ("scroll" === i)
                        s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? e.scrollTo(n, s.alternateValue) : e.scrollTo(s.alternateValue, n);
                    else if (C.Normalizations.registered[i] && "transform" === C.Normalizations.registered[i]("name", t))
                        C.Normalizations.registered[i]("inject", t, n), a = "transform", n = r(t).transformCache[i];
                    else {
                        if (C.Hooks.registered[i]) {
                            var l = i,
                            c = C.Hooks.getRoot(i);
                            o = o || C.getPropertyValue(t, c),
                            n = C.Hooks.injectValue(l, n, o),
                            i = c
                        }
                        if (C.Normalizations.registered[i] && (n = C.Normalizations.registered[i]("inject", t, n), i = C.Normalizations.registered[i]("name", t)), a = C.Names.prefixCheck(i)[0], f <= 8)
                            try {
                                t.style[a] = n
                            } catch (t) {
                                k.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                            }
                        else {
                            var u = r(t);
                            u && u.isSVG && C.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n
                        }
                        k.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                    }
                    return [a, n]
                },
                flushTransformCache: function (t) {
                    var e = "",
                    i = r(t);
                    if ((f || k.State.isAndroid && !k.State.isChrome) && i && i.isSVG) {
                        var n = function (e) {
                            return parseFloat(C.getPropertyValue(t, e))
                        },
                        o = {
                            translate: [n("translateX"), n("translateY")],
                            skewX: [n("skewX")],
                            skewY: [n("skewY")],
                            scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                            rotate: [n("rotateZ"), 0, 0]
                        };
                        h.each(r(t).transformCache, function (t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                            o[t] && (e += t + "(" + o[t].join(" ") + ") ", delete o[t])
                        })
                    } else {
                        var s,
                        a;
                        h.each(r(t).transformCache, function (i) {
                            if (s = r(t).transformCache[i], "transformPerspective" === i)
                                return a = s, !0;
                            9 === f && "rotateZ" === i && (i = "rotate"),
                            e += i + s + " "
                        }),
                        a && (e = "perspective" + a + " " + e)
                    }
                    C.setPropertyValue(t, "transform", e)
                }
            };
            C.Hooks.register(),
            C.Normalizations.register(),
            k.hook = function (t, e, i) {
                var s;
                return t = o(t),
                h.each(t, function (t, o) {
                    if (r(o) === n && k.init(o), i === n)
                        s === n && (s = C.getPropertyValue(o, e));
                    else {
                        var a = C.setPropertyValue(o, e, i);
                        "transform" === a[0] && k.CSS.flushTransformCache(o),
                        s = a
                    }
                }),
                s
            };
            var E = function () {
                function t() {
                    return p ? _.promise || null : m
                }
                function l(t, o) {
                    function s(s) {
                        var f,
                        p;
                        if (l.begin && 0 === P)
                            try {
                                l.begin.call(w, w)
                            } catch (t) {
                                setTimeout(function () {
                                    throw t
                                }, 1)
                            }
                        if ("scroll" === z) {
                            var m,
                            g,
                            b,
                            E = /^x$/i.test(l.axis) ? "Left" : "Top",
                            T = parseFloat(l.offset) || 0;
                            l.container ? y.isWrapped(l.container) || y.isNode(l.container) ? (l.container = l.container[0] || l.container, b = (m = l.container["scroll" + E]) + h(t).position()[E.toLowerCase()] + T) : l.container = null : (m = k.State.scrollAnchor[k.State["scrollProperty" + E]], g = k.State.scrollAnchor[k.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], b = h(t).offset()[E.toLowerCase()] + T),
                            d = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: m,
                                    currentValue: m,
                                    endValue: b,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: E,
                                        alternateValue: g
                                    }
                                },
                                element: t
                            },
                            k.debug && console.log("tweensContainer (scroll): ", d.scroll, t)
                        } else if ("reverse" === z) {
                            if (!(f = r(t)))
                                return;
                            if (!f.tweensContainer)
                                return void h.dequeue(t, l.queue);
                            for (var L in "none" === f.opts.display && (f.opts.display = "auto"), "hidden" === f.opts.visibility && (f.opts.visibility = "visible"), f.opts.loop = !1, f.opts.begin = null, f.opts.complete = null, S.easing || delete l.easing, S.duration || delete l.duration, l = h.extend({}, f.opts, l), p = h.extend(!0, {}, f ? f.tweensContainer : null))
                                if (p.hasOwnProperty(L) && "element" !== L) {
                                    var $ = p[L].startValue;
                                    p[L].startValue = p[L].currentValue = p[L].endValue,
                                    p[L].endValue = $,
                                    y.isEmptyObject(S) || (p[L].easing = l.easing),
                                    k.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(p[L]), t)
                                }
                            d = p
                        } else if ("start" === z) {
                            (f = r(t)) && f.tweensContainer && !0 === f.isAnimating && (p = f.tweensContainer);
                            var A = function (o, r) {
                                var s,
                                c = C.Hooks.getRoot(o),
                                u = !1,
                                m = r[0],
                                g = r[1],
                                v = r[2];
                                if (f && f.isSVG || "tween" === c || !1 !== C.Names.prefixCheck(c)[1] || C.Normalizations.registered[c] !== n) {
                                    (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(o) && !v && 0 !== m && (v = 0),
                                    l._cacheValues && p && p[o] ? (v === n && (v = p[o].endValue + p[o].unitType), u = f.rootPropertyValueCache[c]) : C.Hooks.registered[o] ? v === n ? (u = C.getPropertyValue(t, c), v = C.getPropertyValue(t, o, u)) : u = C.Hooks.templates[c][1] : v === n && (v = C.getPropertyValue(t, o));
                                    var w,
                                    b,
                                    x,
                                    S = !1,
                                    E = function (t, e) {
                                        var i,
                                        n;
                                        return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                            return i = t,
                                            ""
                                        }),
                                        i || (i = C.Values.getUnitType(t)),
                                        [n, i]
                                    };
                                    if (v !== m && y.isString(v) && y.isString(m)) {
                                        s = "";
                                        var T = 0,
                                        _ = 0,
                                        z = [],
                                        I = [],
                                        P = 0,
                                        L = 0,
                                        $ = 0;
                                        for (v = C.Hooks.fixColors(v), m = C.Hooks.fixColors(m); T < v.length && _ < m.length; ) {
                                            var A = v[T],
                                            D = m[_];
                                            if (/[\d\.-]/.test(A) && /[\d\.-]/.test(D)) {
                                                for (var O = A, M = D, N = ".", j = "."; ++T < v.length; ) {
                                                    if ((A = v[T]) === N)
                                                        N = "..";
                                                    else if (!/\d/.test(A))
                                                        break;
                                                    O += A
                                                }
                                                for (; ++_ < m.length; ) {
                                                    if ((D = m[_]) === j)
                                                        j = "..";
                                                    else if (!/\d/.test(D))
                                                        break;
                                                    M += D
                                                }
                                                var q = C.Hooks.getUnit(v, T),
                                                W = C.Hooks.getUnit(m, _);
                                                if (T += q.length, _ += W.length, q === W)
                                                    O === M ? s += O + q : (s += "{" + z.length + (L ? "!" : "") + "}" + q, z.push(parseFloat(O)), I.push(parseFloat(M)));
                                                else {
                                                    var V = parseFloat(O),
                                                    B = parseFloat(M);
                                                    s += (P < 5 ? "calc" : "") + "(" + (V ? "{" + z.length + (L ? "!" : "") + "}" : "0") + q + " + " + (B ? "{" + (z.length + (V ? 1 : 0)) + (L ? "!" : "") + "}" : "0") + W + ")",
                                                    V && (z.push(V), I.push(0)),
                                                    B && (z.push(0), I.push(B))
                                                }
                                            } else {
                                                if (A !== D) {
                                                    P = 0;
                                                    break
                                                }
                                                s += A,
                                                T++,
                                                _++,
                                                0 === P && "c" === A || 1 === P && "a" === A || 2 === P && "l" === A || 3 === P && "c" === A || P >= 4 && "(" === A ? P++ : (P && P < 5 || P >= 4 && ")" === A && --P < 5) && (P = 0),
                                                0 === L && "r" === A || 1 === L && "g" === A || 2 === L && "b" === A || 3 === L && "a" === A || L >= 3 && "(" === A ? (3 === L && "a" === A && ($ = 1), L++) : $ && "," === A ? ++$ > 3 && (L = $ = 0) : ($ && L < ($ ? 5 : 4) || L >= ($ ? 4 : 3) && ")" === A && --L < ($ ? 5 : 4)) && (L = $ = 0)
                                            }
                                        }
                                        T === v.length && _ === m.length || (k.debug && console.error('Trying to pattern match mis-matched strings ["' + m + '", "' + v + '"]'), s = n),
                                        s && (z.length ? (k.debug && console.log('Pattern found "' + s + '" -> ', z, I, "[" + v + "," + m + "]"), v = z, m = I, b = x = "") : s = n)
                                    }
                                    if (s || (v = (w = E(o, v))[0], x = w[1], m = (w = E(o, m))[0].replace(/^([+-\/*])=/, function (t, e) {
                                                return S = e,
                                                ""
                                            }), b = w[1], v = parseFloat(v) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(o) ? (m /= 100, b = "em") : /^scale/.test(o) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(o) && (m = m / 100 * 255, b = ""))), /[\/*]/.test(S))
                                        b = x;
                                    else if (x !== b && 0 !== v)
                                        if (0 === m)
                                            b = x;
                                        else {
                                            a = a || function () {
                                                var n = {
                                                    myParent: t.parentNode || i.body,
                                                    position: C.getPropertyValue(t, "position"),
                                                    fontSize: C.getPropertyValue(t, "fontSize")
                                                },
                                                o = n.position === F.lastPosition && n.myParent === F.lastParent,
                                                r = n.fontSize === F.lastFontSize;
                                                F.lastParent = n.myParent,
                                                F.lastPosition = n.position,
                                                F.lastFontSize = n.fontSize;
                                                var s = {};
                                                if (r && o)
                                                    s.emToPx = F.lastEmToPx, s.percentToPxWidth = F.lastPercentToPxWidth, s.percentToPxHeight = F.lastPercentToPxHeight;
                                                else {
                                                    var a = f && f.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                    k.init(a),
                                                    n.myParent.appendChild(a),
                                                    h.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                        k.CSS.setPropertyValue(a, e, "hidden")
                                                    }),
                                                    k.CSS.setPropertyValue(a, "position", n.position),
                                                    k.CSS.setPropertyValue(a, "fontSize", n.fontSize),
                                                    k.CSS.setPropertyValue(a, "boxSizing", "content-box"),
                                                    h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                        k.CSS.setPropertyValue(a, e, "100%")
                                                    }),
                                                    k.CSS.setPropertyValue(a, "paddingLeft", "100em"),
                                                    s.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(C.getPropertyValue(a, "width", null, !0)) || 1) / 100,
                                                    s.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(C.getPropertyValue(a, "height", null, !0)) || 1) / 100,
                                                    s.emToPx = F.lastEmToPx = (parseFloat(C.getPropertyValue(a, "paddingLeft")) || 1) / 100,
                                                    n.myParent.removeChild(a)
                                                }
                                                return null === F.remToPx && (F.remToPx = parseFloat(C.getPropertyValue(i.body, "fontSize")) || 16),
                                                null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100),
                                                s.remToPx = F.remToPx,
                                                s.vwToPx = F.vwToPx,
                                                s.vhToPx = F.vhToPx,
                                                k.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), t),
                                                s
                                            }
                                            ();
                                            var R = /margin|padding|left|right|width|text|word|letter/i.test(o) || /X$/.test(o) || "x" === o ? "x" : "y";
                                            switch (x) {
                                            case "%":
                                                v *= "x" === R ? a.percentToPxWidth : a.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                v *= a[x + "ToPx"]
                                            }
                                            switch (b) {
                                            case "%":
                                                v *= 1 / ("x" === R ? a.percentToPxWidth : a.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                v *= 1 / a[b + "ToPx"]
                                            }
                                        }
                                    switch (S) {
                                    case "+":
                                        m = v + m;
                                        break;
                                    case "-":
                                        m = v - m;
                                        break;
                                    case "*":
                                        m *= v;
                                        break;
                                    case "/":
                                        m = v / m
                                    }
                                    d[o] = {
                                        rootPropertyValue: u,
                                        startValue: v,
                                        currentValue: v,
                                        endValue: m,
                                        unitType: b,
                                        easing: g
                                    },
                                    s && (d[o].pattern = s),
                                    k.debug && console.log("tweensContainer (" + o + "): " + JSON.stringify(d[o]), t)
                                } else
                                    k.debug && console.log("Skipping [" + c + "] due to a lack of browser support.")
                            };
                            for (var D in x)
                                if (x.hasOwnProperty(D)) {
                                    var O = C.Names.camelCase(D),
                                    M = function (e, i) {
                                        var n,
                                        r,
                                        s;
                                        return y.isFunction(e) && (e = e.call(t, o, I)),
                                        y.isArray(e) ? (n = e[0], !y.isArray(e[1]) && /^[\d-]/.test(e[1]) || y.isFunction(e[1]) || C.RegEx.isHex.test(e[1]) ? s = e[1] : y.isString(e[1]) && !C.RegEx.isHex.test(e[1]) && k.Easings[e[1]] || y.isArray(e[1]) ? (r = c(e[1], l.duration), s = e[2]) : s = e[1] || e[2]) : n = e,
                                        r = r || l.easing,
                                        y.isFunction(n) && (n = n.call(t, o, I)),
                                        y.isFunction(s) && (s = s.call(t, o, I)),
                                        [n || 0, r, s]
                                    }
                                    (x[D]);
                                    if (v(C.Lists.colors, O)) {
                                        var j = M[0],
                                        q = M[1],
                                        W = M[2];
                                        if (C.RegEx.isHex.test(j)) {
                                            for (var V = ["Red", "Green", "Blue"], B = C.Values.hexToRgb(j), R = W ? C.Values.hexToRgb(W) : n, H = 0; H < V.length; H++) {
                                                var U = [B[H]];
                                                q && U.push(q),
                                                R !== n && U.push(R[H]),
                                                A(O + V[H], U)
                                            }
                                            continue
                                        }
                                    }
                                    A(O, M)
                                }
                            d.element = t
                        }
                        d.element && (C.Values.addClass(t, "velocity-animating"), N.push(d), (f = r(t)) && ("" === l.queue && (f.tweensContainer = d, f.opts = l), f.isAnimating = !0), P === I - 1 ? (k.State.calls.push([N, w, l, null, _.resolver, null, 0]), !1 === k.State.isTicking && (k.State.isTicking = !0, u())) : P++)
                    }
                    var a,
                    l = h.extend({}, k.defaults, S),
                    d = {};
                    switch (r(t) === n && k.init(t), parseFloat(l.delay) && !1 !== l.queue && h.queue(t, l.queue, function (e) {
                            k.velocityQueueEntryFlag = !0;
                            var i = k.State.delayedElements.count++;
                            k.State.delayedElements[i] = t;
                            var n = function (t) {
                                return function () {
                                    k.State.delayedElements[t] = !1,
                                    e()
                                }
                            }
                            (i);
                            r(t).delayBegin = (new Date).getTime(),
                            r(t).delay = parseFloat(l.delay),
                            r(t).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(l.delay)),
                                next: n
                            }
                        }), l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200;
                        break;
                    case "normal":
                        l.duration = b;
                        break;
                    case "slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                    }
                    if (!1 !== k.mock && (!0 === k.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(k.mock) || 1, l.delay *= parseFloat(k.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !y.isFunction(l.begin) && (l.begin = null), l.progress && !y.isFunction(l.progress) && (l.progress = null), l.complete && !y.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = k.CSS.Values.getDisplayType(t))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && k.State.isMobile && !k.State.isGingerbread, !1 === l.queue)
                        if (l.delay) {
                            var f = k.State.delayedElements.count++;
                            k.State.delayedElements[f] = t;
                            var p = function (t) {
                                return function () {
                                    k.State.delayedElements[t] = !1,
                                    s()
                                }
                            }
                            (f);
                            r(t).delayBegin = (new Date).getTime(),
                            r(t).delay = parseFloat(l.delay),
                            r(t).delayTimer = {
                                setTimeout: setTimeout(s, parseFloat(l.delay)),
                                next: p
                            }
                        } else
                            s();
                    else
                        h.queue(t, l.queue, function (t, e) {
                            if (!0 === e)
                                return _.promise && _.resolver(w), !0;
                            k.velocityQueueEntryFlag = !0,
                            s()
                        });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(t)[0] || h.dequeue(t)
                }
                var f,
                p,
                m,
                g,
                w,
                x,
                S,
                T = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || y.isString(arguments[0].properties));
                y.isWrapped(this) ? (p = !1, g = 0, w = this, m = this) : (p = !0, g = 1, w = T ? arguments[0].elements || arguments[0].e : arguments[0]);
                var _ = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (p && k.Promise && (_.promise = new k.Promise(function (t, e) {
                            _.resolver = t,
                            _.rejecter = e
                        })), T ? (x = arguments[0].properties || arguments[0].p, S = arguments[0].options || arguments[0].o) : (x = arguments[g], S = arguments[g + 1]), w = o(w)) {
                    var z,
                    I = w.length,
                    P = 0;
                    if (!/^(stop|finish|finishAll|pause|resume)$/i.test(x) && !h.isPlainObject(S)) {
                        S = {};
                        for (var L = g + 1; L < arguments.length; L++)
                            y.isArray(arguments[L]) || !/^(fast|normal|slow)$/i.test(arguments[L]) && !/^\d/.test(arguments[L]) ? y.isString(arguments[L]) || y.isArray(arguments[L]) ? S.easing = arguments[L] : y.isFunction(arguments[L]) && (S.complete = arguments[L]) : S.duration = arguments[L]
                    }
                    switch (x) {
                    case "scroll":
                        z = "scroll";
                        break;
                    case "reverse":
                        z = "reverse";
                        break;
                    case "pause":
                        var $ = (new Date).getTime();
                        return h.each(w, function (t, e) {
                            s(e, $)
                        }),
                        h.each(k.State.calls, function (t, e) {
                            var i = !1;
                            e && h.each(e[1], function (t, o) {
                                var r = S === n ? "" : S;
                                return !0 !== r && e[2].queue !== r && (S !== n || !1 !== e[2].queue) || (h.each(w, function (t, n) {
                                        if (n === o)
                                            return e[5] = {
                                                resume: !1
                                            },
                                        i = !0,
                                        !1
                                    }), !i && void 0)
                            })
                        }),
                        t();
                    case "resume":
                        return h.each(w, function (t, e) {
                            a(e)
                        }),
                        h.each(k.State.calls, function (t, e) {
                            var i = !1;
                            e && h.each(e[1], function (t, o) {
                                var r = S === n ? "" : S;
                                return !0 !== r && e[2].queue !== r && (S !== n || !1 !== e[2].queue) || !e[5] || (h.each(w, function (t, n) {
                                        if (n === o)
                                            return e[5].resume = !0, i = !0, !1
                                    }), !i && void 0)
                            })
                        }),
                        t();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        h.each(w, function (t, e) {
                            r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer),
                            "finishAll" !== x || !0 !== S && !y.isString(S) || (h.each(h.queue(e, y.isString(S) ? S : ""), function (t, e) {
                                    y.isFunction(e) && e()
                                }), h.queue(e, y.isString(S) ? S : "", []))
                        });
                        var A = [];
                        return h.each(k.State.calls, function (t, e) {
                            e && h.each(e[1], function (i, o) {
                                var s = S === n ? "" : S;
                                if (!0 !== s && e[2].queue !== s && (S !== n || !1 !== e[2].queue))
                                    return !0;
                                h.each(w, function (i, n) {
                                    if (n === o)
                                        if ((!0 === S || y.isString(S)) && (h.each(h.queue(n, y.isString(S) ? S : ""), function (t, e) {
                                                    y.isFunction(e) && e(null, !0)
                                                }), h.queue(n, y.isString(S) ? S : "", [])), "stop" === x) {
                                            var a = r(n);
                                            a && a.tweensContainer && !1 !== s && h.each(a.tweensContainer, function (t, e) {
                                                e.endValue = e.currentValue
                                            }),
                                            A.push(t)
                                        } else
                                            "finish" !== x && "finishAll" !== x || (e[2].duration = 1)
                                })
                            })
                        }),
                        "stop" === x && (h.each(A, function (t, e) {
                                d(e, !0)
                            }), _.promise && _.resolver(w)),
                        t();
                    default:
                        if (!h.isPlainObject(x) || y.isEmptyObject(x)) {
                            if (y.isString(x) && k.Redirects[x]) {
                                var D = (f = h.extend({}, S)).duration,
                                O = f.delay || 0;
                                return !0 === f.backwards && (w = h.extend(!0, [], w).reverse()),
                                h.each(w, function (t, e) {
                                    parseFloat(f.stagger) ? f.delay = O + parseFloat(f.stagger) * t : y.isFunction(f.stagger) && (f.delay = O + f.stagger.call(e, t, I)),
                                    f.drag && (f.duration = parseFloat(D) || (/^(callout|transition)/.test(x) ? 1e3 : b), f.duration = Math.max(f.duration * (f.backwards ? 1 - t / I : (t + 1) / I), .75 * f.duration, 200)),
                                    k.Redirects[x].call(e, e, f || {}, t, I, w, _.promise ? _ : n)
                                }),
                                t()
                            }
                            var M = "Velocity: First argument (" + x + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return _.promise ? _.rejecter(new Error(M)) : e.console && console.log(M),
                            t()
                        }
                        z = "start"
                    }
                    var F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    N = [];
                    h.each(w, function (t, e) {
                        y.isNode(e) && l(e, t)
                    }),
                    (f = h.extend({}, k.defaults, S)).loop = parseInt(f.loop, 10);
                    var j = 2 * f.loop - 1;
                    if (f.loop)
                        for (var q = 0; q < j; q++) {
                            var W = {
                                delay: f.delay,
                                progress: f.progress
                            };
                            q === j - 1 && (W.display = f.display, W.visibility = f.visibility, W.complete = f.complete),
                            E(w, "reverse", W)
                        }
                    return t()
                }
                _.promise && (x && S && !1 === S.promiseRejectEmpty ? _.resolver() : _.rejecter())
            };
            (k = h.extend(E, k)).animate = E;
            var T = e.requestAnimationFrame || p;
            if (!k.State.isMobile && i.hidden !== n) {
                var _ = function () {
                    i.hidden ? (T = function (t) {
                        return setTimeout(function () {
                            t(!0)
                        }, 16)
                    }, u()) : T = e.requestAnimationFrame || p
                };
                _(),
                i.addEventListener("visibilitychange", _)
            }
            return t.Velocity = k,
            t !== e && (t.fn.velocity = E, t.fn.velocity.defaults = k.defaults),
            h.each(["Down", "Up"], function (t, e) {
                k.Redirects["slide" + e] = function (t, i, o, r, s, a) {
                    var l = h.extend({}, i),
                    c = l.begin,
                    u = l.complete,
                    d = {},
                    f = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                    l.display === n && (l.display = "Down" === e ? "inline" === k.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                    l.begin = function () {
                        for (var i in 0 === o && c && c.call(s, s), f)
                            if (f.hasOwnProperty(i)) {
                                d[i] = t.style[i];
                                var n = C.getPropertyValue(t, i);
                                f[i] = "Down" === e ? [n, 0] : [0, n]
                            }
                        d.overflow = t.style.overflow,
                        t.style.overflow = "hidden"
                    },
                    l.complete = function () {
                        for (var e in d)
                            d.hasOwnProperty(e) && (t.style[e] = d[e]);
                        o === r - 1 && (u && u.call(s, s), a && a.resolver(s))
                    },
                    k(t, f, l)
                }
            }),
            h.each(["In", "Out"], function (t, e) {
                k.Redirects["fade" + e] = function (t, i, o, r, s, a) {
                    var l = h.extend({}, i),
                    c = l.complete,
                    u = {
                        opacity: "In" === e ? 1 : 0
                    };
                    0 !== o && (l.begin = null),
                    l.complete = o !== r - 1 ? null : function () {
                        c && c.call(s, s),
                        a && a.resolver(s)
                    },
                    l.display === n && (l.display = "In" === e ? "auto" : "none"),
                    k(this, u, l)
                }
            }),
            k
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }
    (window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}), window.console = void 0 === window.console ? {
    log: function (t) {}
}
 : window.console, window.wistiaInit = function (t) {
    t.options({
        playerColor: "111111",
        settingsControl: !1,
        volumeControl: !1,
        copyLinkAndThumbnailEnabled: !1,
        videoFoam: !0,
        controlsVisibleOnLoad: !1,
        playButton: !0,
        silentAutoPlay: !0,
        endVideoBehavior: "reset",
        seo: !1
    })
}, window._wq = window._wq || [], _wq.push({
    id: "_all",
    onReady: function (t) {
        t.bind("play", function () {
            $(t.container).addClass("is-loaded")
        })
    }
}), Flickity.defaults.wrapAround = !0, Flickity.defaults.prevNextButtons = !1, Flickity.defaults.arrowShape = {
    x0: 20,
    x1: 65,
    y1: 45,
    x2: 70,
    y2: 40,
    x3: 30
};
var startAnimation = Flickity.prototype.startAnimation;
Flickity.prototype.startAnimation = function () {
    startAnimation.apply(this, arguments),
    this.element.classList.add("is-animating"),
    this.element.style.setProperty("--select", "0")
};
var _create = Flickity.prototype._create;
Flickity.prototype._create = function () {
    _create.apply(this, arguments),
    this.on("settle", function () {
        this.element.classList.remove("is-animating")
    })
};
var site = {
    vars: {
        initializing: !0,
        google_analytics_id: google_analytics_id,
        assetsPath: assetsPath,
        assetsHost: -1 !== cssPath.indexOf("https://cdn.sandwich.co") ? "https://cdn.sandwich.co" : -1 !== cssPath.indexOf("d34zmvyomdcnyx.cloudfront.net") ? "https://d34zmvyomdcnyx.cloudfront.net" : "",
        headerHeight: 80,
        scrollTop: 0,
        mobileBreakpoint: 800,
        colors: ["#E4002B", "#FF6900", "#F6BE00", "#97D700", "#00AB84", "#00A3E0", "#5461C8", "#C724B1"],
        currentColor: 0
    },
    el: {},
    inViewScroller: null,
    topNavScroller: null,
    init: function () {
        site.gaPageview(window.location.href, document.title),
        site.build(),
        site.animBorder.start(),
        site.search.init(),
        site.workDetail.init(),
        site.topNav.init(),
        site.reflow()
    },
    build: function () {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("html").addClass("is-mobile"),
        $("#content").addClass("is-animationInit"),
        site.el.content = $("#content"),
        FastClick.attach(document.body),
        $("#content").ajaxify({
            selector: "a:not(.no-ajaxy):not([data-video-id]):not(.gallery-item a):not(.category-nav a):not(.error404 a)",
            forms: "form:not(.no-ajaxy):not(.post-password-form)",
            memoryoff: !0,
            prefetch: !1,
            requestDelay: 800,
            style: !1
        }),
        site.inViewChecker.init("#content"),
        $("#content").on("click", "[data-action]", function (t) {
            "toggle-drawer" == $(this).attr("data-action") && (t.preventDefault(), $(this).closest(".drawer").toggleClass("is-closed"))
        }),
        $("#content").on("click", ".flickity-enabled.is-animating a", function (t) {
            t.preventDefault()
        }),
        $("#content").on("click", 'a[href^="#"]:not(.search-trigger)', function (t) {
            var e = $(this.getAttribute("href"));
            e.length && (t.preventDefault(), $("html, body, content").stop().animate({
                    scrollTop: e.offset().top
                }, 1e3))
        }),
        $(window).on("resize", function (t) {
            $("#content").addClass("is-resizing")
        }),
        $(window).on("debouncedresize", function (t) {
            site.reflow()
        }),
        $(window).on("pronto.request", function (t, e) {
            site.loader.show(),
            site.topNav.close(),
            site.workDetail.close()
        }),
        $(window).on("pronto.load", function (t, e) {
            var i = e.currentTarget || e.srcElement,
            n = $.pages(i.href || i.document.URL);
            $(".topNav-menu", n).html();
            $("html, body, content").scrollTop(0),
            $("#content").scrollTop(0)
        }),
        $(window).on("pronto.render", function (t, e) {
            var i = e.currentTarget || e.srcElement,
            n = $.pages(i.href || i.document.URL),
            o = $("#bodyClass", n).attr("class");
            $("#content").attr("class", "is-loading is-borderAnimating " + o),
            $("#bodyClass").attr("class", o),
            site.gaPageview(i.href || i.document.URL, document.title),
            site.topNav.select(),
            site.reflow(),
            site.utils.prepareSVG(),
            site.utils.testimonialCycleStart(),
            site.inViewChecker.refresh(),
            setTimeout(function () {
                site.utils.flickityInit(),
                site.textillate.init(),
                site.parallax.init(),
                setTimeout(function () {
                    site.loader.hide()
                }, 400)
            }, 800)
        }),
        setTimeout(function () {
            site.utils.prepareSVG(),
            site.utils.prepareThumbs(),
            site.utils.testimonialCycleStart(),
            site.textillate.init(),
            site.parallax.init(),
            setTimeout(function () {
                $("#content").removeClass("is-animationInit, is-initializing"),
                site.animBorder.stop(),
                site.vars.initializing = !1,
                site.reflow()
            }, 1e3)
        }, 1200)
    },
    reflow: function () {
        $("#content").removeClass("is-resizing"),
        unorphan("#content main p, #content main .pullquote, .item-heading .title"),
        $(window).trigger("scroll"),
        setTimeout(function () {
            site.topNav.setNavUnderline($(".topNav-menu .menu-item.current-menu-item"), !0),
            site.work.setNavUnderline($(".category-nav .menu-item.is-nav-selected"), !0)
        }, 100)
    },
    checkURL: function () {},
    gaPageview(t, e) {
        if (void 0 !== window.gtag) {
            var i = {
                page_location: t
            };
            i.page_title = e || document.title,
            window.gtag("config", site.vars.google_analytics_id, i)
        }
    },
    inViewChecker: {
        selectors: ".section, .work-item, .clientStory-item, .client-item",
        init: function (t) {
            inView(site.inViewChecker.selectors).on("enter", function (t) {
                $(t).addClass("in-view viewed")
            })
        },
        refresh: function () {
            inView(site.inViewChecker.selectors).check(),
            $(site.inViewChecker.selectors).isInViewport().addClass("in-view viewed")
        }
    },
    loader: {
        show: function () {
            $("#content").addClass("is-loading"),
            site.animBorder.start()
        },
        hide: function () {
            $("#content").removeClass("is-loading"),
            setTimeout(function () {
                site.animBorder.stop()
            }, 500)
        }
    },
    animBorder: {
        $el: null,
        isPaused: !0,
        interval: null,
        duration: 600,
        currentColor: 0,
        start: function () {
            site.animBorder.$el || (site.animBorder.$el = $("#animated-border")),
            site.animBorder.isPaused && (site.animBorder.isPaused = !1, $("#content").addClass("is-borderAnimating"), site.animBorder.animate())
        },
        animate: function (t) {
            function e() {
                site.animBorder.isPaused || (site.animBorder.currentColor + 1 >= site.vars.colors.length + 1 ? site.animBorder.currentColor = 1 : site.animBorder.currentColor = site.animBorder.currentColor + 1, site.animBorder.$el.attr("data-state", site.animBorder.currentColor), site.animBorder.animate(1))
            }
            t ? setTimeout(function () {
                e()
            }, site.animBorder.duration) : e()
        },
        stop: function () {
            $("#content").removeClass("is-borderAnimating"),
            site.animBorder.isPaused = !0
        }
    },
    dataFetcher: {
        workItemsHTML: null,
        clientItemsHTML: null,
        load: function (t, e) {
            function i(t) {
                site.dataFetcher.clientItemsHTML && site.dataFetcher.clientItemsHTML.length ? typeof t == typeof Function && t() : $.getJSON(homeUrl + "/wp-json/custom/v1/featured-clients", function (e) {
                    site.dataFetcher.clientItemsHTML = new Array,
                    j = -1;
                    for (var i = 0, n = e.length; i < n; i++) {
                        var o = e[i],
                        r = Math.floor(Math.random() * Math.floor(8)) + 1;
                        o.thumbnail_video && (thumbnail_video = '<video loop muted playsinline preload="none"><source src="' + site.vars.assetsHost + o.thumbnail_video + '" type="video/mp4" size="360"></video>');
                        var s = site.dataFetcher.clientItemsHTML;
                        s[++j] = '<a href="' + o.url + '" class="item clientStory-item is-bgDark delay-' + r + '" data-type="' + o.type + '" data-date="' + o.date + '" data-item_weight="' + o.item_weight + '" data-bg_video_id="' + o.bg_video_id + '" data-client="' + o.client_name + '" data-client_slug="' + o.client_slug + '">',
                        s[++j] = '<div class="item-bg"><div class="bg-wrap"><div class="bg-container"><div class="video-wrap">',
                        s[++j] = '<div class="video-embed wistia_embed wistia_async_' + o.bg_video_id + ' videoFoam=false autoPlay=true controlsVisibleOnLoad=false doNotTrack=true endVideoBehavior=loop muted=true playbar=false playButton=false fullscreenButton=false settingsControl=false smallPlayButton=false qualityMax=720 seo=false">&nbsp;</div>',
                        s[++j] = "</div></div></div>",
                        s[++j] = '<div class="logo-wrap"><div class="logo">' + o.client_logo_formatted + '</div><span class="cta-primary"><span class="sandy-wrap"><img class="sandy style-svg" src="' + site.vars.assetsPath + '/static/img/brand/inline-sandy.svg" /></span><div class="text">' + client_story_cta_text + "</div>",
                        s[++j] = "</span></div></div></a>"
                    }
                    typeof t == typeof Function && t()
                })
            }
            site.dataFetcher.workItemsHTML && site.dataFetcher.workItemsHTML.length ? i(e) : $.getJSON(homeUrl + "/wp-json/custom/v1/all-work", function (n) {
                site.dataFetcher.workItemsHTML = new Array,
                j = -1;
                for (var o = 0, r = n.length; o < r; o++) {
                    var s = n[o],
                    a = "",
                    l = Math.floor(Math.random() * Math.floor(8)) + 1;
                    htmlArr = site.dataFetcher.workItemsHTML,
                    s.thumbnail_video && (a = '<video loop muted playsinline preload="none"><source src="' + site.vars.assetsHost + s.thumbnail_video + '" type="video/mp4" size="360"></video>'),
                    htmlArr[++j] = '<a href="' + s.url + '" class="item work-item' + s.category_classes + " delay-" + l + '" data-type="' + s.type + '" data-video-id="' + s.video_id + '" data-date="' + s.date + '" data-item_weight="' + s.item_weight + '" data-client="' + s.client_name + '" data-client_slug="' + s.client_slug + '"' + s.weights + ">",
                    htmlArr[++j] = '<div class="media" style="background-image:url(' + site.vars.assetsHost + s.thumbnail_image_tiny + ');">' + a + '<div class="bg top" style="background-image:url(' + site.vars.assetsHost + s.thumbnail_image + ');"></div></div>',
                    htmlArr[++j] = '<div class="item-info"><span class="client">' + s.client_name + '</span> <span class="title">' + s.title + '</span><span class="tagList"> ' + s.tags + " " + s.credits + "</span></div></a>"
                }
                t ? i(e) : typeof e == typeof Function && e()
            })
        }
    },
    parallax: {
        init: function () {
            $(".parallax").length && (site.rellax && site.rellax.destroy(), site.rellax = new Rellax(".parallax", {
                    speed: -3,
                    center: !0
                }));
            var t = 2,
            e = $(document),
            i = document.documentElement;
            e.scroll($.throttle(25, function () {
                    var n = e.scrollTop(),
                    o = "-" + t * n + "px";
                    i.style.setProperty("--scrollPos", o)
                }))
        }
    },
    textillate: {
        init: function () {
            $(".lettering, .spectrum-hover, .cta-primary b").lettering(),
            $(".spectrum-lines").lettering("lines"),
            $(".lettering-words:not(.lettered)").lettering("words").addClass("lettered"),
            $(".lettering-words-letters:not(.lettered)").lettering("words").children("span").lettering().addClass("lettered"),
            $(".lettering-lines:not(.lettered)").lettering("lines").addClass("lettered"),
            $(".lettering-lines-words:not(.lettered)").lettering("lines").children("span").lettering("words").addClass("lettered"),
            $(".lettering-lines-words-letters:not(.lettered)").lettering("lines").children("span").lettering("words").children("span").lettering().addClass("lettered")
        }
    },
    utils: {
        lockPage: function (t, e) {
            if (t)
                if (e && !site.search.scrollTop) {
                    site.search.scrollTop = $(window).scrollTop();
                    var i = -site.search.scrollTop;
                    $("#searchPanel .searchResults-content").css({
                        "margin-top": i + "px"
                    }),
                    $("#searchPanel").addClass("is-locked"),
                    $("html").css("overflow-y", "scroll")
                } else {
                    site.vars.scrollTop = $(window).scrollTop();
                    $("body.home #intro").height(),
                    i = -site.vars.scrollTop;
                    $("#content").css({
                        "margin-top": i + "px"
                    }),
                    $("#page-wrap").addClass("is-locked"),
                    $("html").css("overflow-y", "scroll")
                }
            else
                e ? ($("#searchPanel .searchResults-content").css({
                        "margin-top": ""
                    }), $("#searchPanel").removeClass("is-locked"), $(window).scrollTop(site.search.scrollTop), site.search.scrollTop = null, console.log("issearchOpen")) : ($("#content").css({
                        "margin-top": ""
                    }), $("#page-wrap").removeClass("is-locked"), $("html").css("overflow-y", ""), $(window).scrollTop(site.vars.scrollTop), site.vars.scrollTop = null, console.log("!issearchOpen"))
        },
        flickityInit: function () {
            for (var t = document.querySelectorAll("[data-flickity]"), e = 0, i = t.length; e < i; e++) {
                if (!Flickity.data(t[e])) {
                    var n = t[e].getAttribute("data-flickity");
                    if (n) {
                        var o = JSON.parse(n);
                        new Flickity(t[e], o)
                    } else
                        new Flickity(t[e])
                }
            }
        },
        interval: function (t, e, i) {
            var n,
            o,
            r = (n = e, o = i, function () {
            if (void 0 === o || o-- > 0) {
                setTimeout(r, n);
                try {
                    t.call(null)
                } catch (t) {
                    throw o = 0,
                    t.toString()
                }
            }
        });
            setTimeout(r, e)
        },
        prepareClientStories: function (t) {
            t || (t = $("#content")),
            $(".clientStory-item", t).each(function () {
                var t = $(this),
                e = $("video", t);
                t.removeClass("is-loaded"),
                e[0] && e[0].play()
            })
        },
        testimonialCycleStart: function () {
            $(".testimonial-widget").each(function () {
                var t = $(this),
                e = 1,
                i = $("li", t).length - 1;
                $("li:eq(0)", t).addClass("is-active"),
                site.utils.interval(function () {
                    $("li", t).removeClass("is-active"),
                    $("li:eq(" + e + ")", t).addClass("is-active"),
                    e == i ? e = 0 : e++
                }, site.about.vars.testimonialDelay)
            })
        },
        prepareSVG: function () {
            jQuery(document).ready(function (t) {
                (bodhisvgsInlineSupport = function () {
                    if ("true" === ForceInlineSVGActive && jQuery("img").each(function () {
                            jQuery(this).attr("src").match(/\.(svg)/) && (jQuery(this).hasClass(cssTarget.ForceInlineSVG) || jQuery(this).addClass(cssTarget.ForceInlineSVG))
                        }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
                            var i = this.toString();
                            ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > i.length) && (e = i.length),
                            e -= t.length;
                            var n = i.lastIndexOf(t, e);
                            return -1 !== n && n === e
                        }), String.prototype.endsWith = function (t) {
                        var e = this.length - t.length;
                        return e >= 0 && this.lastIndexOf(t) === e
                    }, "true" === ForceInlineSVGActive)
                        var e = "img." !== cssTarget.Bodhi ? cssTarget.Bodhi : "img.style-svg";
                    else
                        e = "img." !== cssTarget ? cssTarget : "img.style-svg";
                    t(e).each(function (e) {
                        var i = jQuery(this),
                        n = i.attr("id"),
                        o = i.attr("class"),
                        r = i.attr("src");
                        r.endsWith("svg") && t.get(r, function (r) {
                            var s = t(r).find("svg"),
                            a = s.attr("id");
                            void 0 === n ? void 0 === a ? (n = "svg-replaced-" + e, s = s.attr("id", n)) : n = a : s = s.attr("id", n),
                            void 0 !== o && (s = s.attr("class", o + " replaced-svg svg-replaced-" + e)),
                            s = s.removeAttr("xmlns:a"),
                            i.replaceWith(s),
                            t(document).trigger("svg.loaded", [n])
                        }, "xml")
                    })
                })()
            })
        },
        prepareThumbs: function () {
            $("#content").on("mouseenter", ".work-item", function (t) {
                var e,
                i = $(this),
                n = $("video", i);
                if (n[0]) {
                    function o() {
                        void 0 !== e && e.then(function () {
                            i.addClass("is-vidLoaded")
                        }).catch(function (t) {})
                    }
                    if (e = n[0].play(), n.dequeue().show(), n[0].readyState < 3)
                        var r = setInterval(function () {
                            n[0].readyState >= 3 && (o(), clearInterval(r))
                        }, 50);
                    else
                        o()
                }
            }).on("mouseleave", ".work-item", function (t) {
                var e = $("video", this);
                e[0] && (e.hide(0), $(this).removeClass("is-vidLoaded"), e[0].pause(), e[0].currentTime = 0)
            })
        },
        imgLoaded: function (t, e) {
            $("<img/>").attr("src", t).load(function () {
                $(this).remove(),
                e()
            })
        }
    }
};
$(function () {
    site.init()
}), site.about = {
    vars: {
        testimonialDelay: 4e3
    },
    init: function () {
        site.about.build()
    },
    build: function () {
        $(".basic-toggle .toggle-label").on("click", function () {
            $(".basic-toggle .toggle-label").toggleClass("is-active"),
            $("#content").toggleClass("is-teamToggled")
        }),
        $(".isolation-overlay, .team-item .btn-wrap").on({
            click: function (t) {
                t.stopPropagation(),
                $("#content").removeClass("is-isolationOverlayOpen"),
                $(".team-item").removeClass("is-active"),
                setTimeout(function () {
                    $(".team-item").removeClass("setZ")
                }, 300)
            }
        }),
        $(".team-item").on({
            click: function () {
                var t = $(this),
                e = $(this).offset().top - $(this).height() / 2;
                $("html,body,content").animate({
                    scrollTop: e
                }, 300, function () {
                    $(".team-item").removeClass("is-active setZ"),
                    t.addClass("is-active setZ"),
                    $("#content").addClass("is-isolationOverlayOpen")
                })
            }
        })
    }
}, site.clientStory = {
    init: function () {
        site.clientStory.build(),
        site.clientStory.ready()
    },
    build: function () {
        site.utils.prepareClientStories()
    },
    ready: function () {}
}, site.clients = {
    init: function () {
        site.clients.build(),
        site.clients.ready()
    },
    build: function () {
        site.utils.prepareClientStories(),
        site.inViewChecker.refresh()
    },
    ready: function () {}
}, site.contact = {
    vars: {
        faqDelay: 3e3
    },
    init: function () {
        site.contact.build(),
        site.contact.ready()
    },
    build: function () {
        var t = $("#contactForm textarea");
        autosize(t),
        $("#contactForm").submit(function (e) {
            e.preventDefault();
            var i = $(this),
            n = i.serialize(),
            o = $(".notice", i);
            return i.addClass("is-submitting"),
            $.ajax({
                url: $(this).attr("action"),
                data: n,
                type: "POST",
                success: function (e) {
                    var n = $.parseJSON(e);
                    $(".text", o).html(n.message),
                    i.removeClass("is-submitting"),
                    i.addClass("is-showingNotice"),
                    o.fadeIn(400),
                    setTimeout(function () {
                        "success" == n.status && (i[0].reset(), $("input, textarea, button", i).blur()),
                        i.removeClass("is-showingNotice"),
                        autosize.update(t),
                        o.fadeOut(400)
                    }, 4e3)
                },
                error: function () {}
            }),
            !1
        })
    },
    ready: function () {}
}, site.faq = {
    init: function () {
        site.faq.build(),
        site.faq.ready()
    },
    build: function () {},
    ready: function () {}
}, site.home = {
    init: function () {
        site.home.build(),
        site.home.ready()
    },
    build: function () {
        site.utils.prepareClientStories(),
        site.inViewChecker.refresh(),
        site.topNav.hide(),
        inView("#intro").on("enter", function (t) {
            $(t).css({
                opacity: 1
            }),
            site.topNav.hide(),
            $("#animated-border").addClass("is-fullScreen")
        }).on("exit", function (t) {
            site.topNav.show(),
            $(t).css({
                opacity: 0
            }),
            $("#animated-border").removeClass("is-fullScreen")
        }),
        setTimeout(function () {
            site.parallax.init()
        }, 1200)
    },
    ready: function () {}
}, site.jobs = {
    init: function () {
        site.jobs.build(),
        site.jobs.ready()
    },
    build: function () {},
    ready: function () {}
}, site.search = {
    delay: 400,
    isOpen: !1,
    regex: null,
    filter: null,
    hashFilter: null,
    itemsLoaded: !1,
    grid: null,
    gridInterval: null,
    rellaxClient: null,
    scrollTop: null,
    prevURL: null,
    filterMode: "all",
    el: {},
    init: function () {
        site.search.build(),
        -1 !== window.location.href.indexOf("#search") && ($("#content").addClass("is-search-init"), setTimeout(function () {
                site.search.open()
            }, 2200))
    },
    build: function () {
        site.search.el.$search = $("#searchPanel"),
        site.search.el.$filters = $("input.filter", site.search.el.$search),
        site.search.el.$searchContent = $(".searchResults-content", site.search.el.$search),
        site.search.el.$searchResultsScroll = $(".searchResults-scroll", site.search.el.$search),
        site.search.el.$searchResultsMessage = $(".searchResults-message", site.search.el.$search),
        site.search.el.$searchInput = $("#searchInput"),
        $(".btn-close, .search-bg", site.search.el.$search).on("click", function (t) {
            site.search.close()
        }),
        site.search.el.$search.on("click", ".clientStory-item", function (t) {
            setTimeout(function () {
                site.search.close()
            }, 1e3)
        }),
        $(".categoryFilters-list", site.search.el.$search).flickity({
            cellSelector: ".filter-wrap",
            freeScroll: !0,
            wrapAround: !1,
            contain: !0,
            pageDots: !1,
            draggable: !0
        }),
        site.search.el.$filters.change(function () {
            site.search.el.$search.addClass("is-waiting"),
            site.search.updateHash()
        }),
        $(window).on("hashchange", site.search.loadGrid),
        site.search.el.$searchInput.keyup(function () {
            site.search.el.$search.addClass("is-waiting")
        }).keyup($.debounce(500, function () {
                site.search.updateHash(),
                site.search.regex = new RegExp("\\b" + site.search.el.$searchInput.val(), "gims"),
                site.search.loadGrid()
            }))
    },
    setInitFilter: function () {
        var t = site.search.getHashFilter();
        if (t) {
            var e = t.split("/", 1),
            i = t.split("/");
            i.shift(),
            site.search.el.$searchInput.val(e).keyup(),
            i.forEach(function (t) {
                site.search.el.$filters.filter('[value=".category_' + t + '"]').attr("checked", "checked")
            })
        }
        site.search.loadGrid()
    },
    getHashFilter: function () {
        location.hash;
        var t = location.hash.match(/search=([^&]+)/i) || location.hash.match(/search([^&]+)/i);
        return t ? decodeURIComponent(t[1]) : ""
    },
    updateHash: function () {
        var t = [],
        e = [];
        site.search.el.$filters.each(function (i, n) {
            n.checked && (t.push(n.value), e.push(n.value.replace(".category_", "")))
        }),
        site.search.filter = t.join(","),
        site.search.hashFilter = e.join("/"),
        site.search.el.$searchInput.val().length > 1 ? location.hash = "search=" + encodeURI(site.search.el.$searchInput.val()) + "/" + encodeURI(site.search.hashFilter) : site.search.hashFilter ? location.hash = "search/" + encodeURI(site.search.hashFilter) : location.hash = "search"
    },
    open: function () {
        if (!site.search.isOpen) {
            site.search.isOpen = !0,
            site.utils.lockPage(!0),
            site.topNav.close(),
            site.workDetail.close(),
            site.search.prevURL = -1 !== window.location.href.indexOf("#search") ? $(".logo a").attr("href") : window.location.href.split("#")[0];
            var t = -1 !== location.hash.indexOf("search") ? homeUrl + "/" + location.hash : homeUrl + "/#search";
            history.replaceState({}, "", t),
            site.search.setInitFilter(),
            $("#content").addClass("is-search-open"),
            site.search.el.$searchInput.focus(),
            $("html, body, content").scrollTop(0),
            setTimeout(function () {
                $(".categoryFilters-list", site.search.el.$search).flickity("resize"),
                site.dataFetcher.load(!0, function () {
                    site.search.el.$searchContent[0].innerHTML = site.dataFetcher.workItemsHTML.concat(site.dataFetcher.clientItemsHTML).join(""),
                    site.search.itemsLoaded = !0,
                    site.search.rellaxClient = new Rellax(".searchResults-content .clientStory-item .bg-container", {
                        speed: -3,
                        center: !0
                    }),
                    setTimeout(function () {
                        site.search.loadGrid()
                    }, 400)
                })
            }, 1e3)
        }
    },
    close: function () {
        site.search.isOpen && (site.search.isOpen = !1, site.utils.lockPage(!1), site.search.el.$searchContent.html(""), $("#content").removeClass("is-search-init"), $("#content").removeClass("is-search-open"), site.search.el.$search.removeClass("is-waiting"), $(".item.in-view", site.search.el.$search).removeClass("in-view"), history.replaceState({}, "", site.search.prevURL), site.search.prevURL = null, setTimeout(function () {
                site.search.grid && site.search.grid.isotope("destroy"),
                site.search.grid = null,
                site.search.regex = null,
                site.search.filter = null,
                site.search.hashFilter = null,
                site.search.rellaxClient = null,
                site.search.prevURL = null,
                site.search.itemsLoaded = !1,
                site.search.reset(),
                window.clearInterval(site.search.gridInterval)
            }, site.search.delay))
    },
    reset: function () {
        site.search.el.$search.find(":input").not(":button, :submit, :reset, :hidden, :checkbox, :radio").val(""),
        site.search.el.$search.find(":checkbox, :radio").prop("checked", !1)
    },
    loadGrid: function () {
        $(".item.in-view", site.search.el.$search).removeClass("in-view"),
        window.clearInterval(site.search.gridInterval),
        site.search.gridInterval = window.setInterval(function () {
            site.search.itemsLoaded && (site.search.grid ? (window.clearInterval(site.search.gridInterval), site.search.grid.isotope()) : (site.utils.prepareSVG(), site.search.grid = site.search.el.$searchContent.isotope({
                        percentPosition: !0,
                        itemSelector: ".item",
                        columnWidth: ".work-item",
                        getSortData: {
                            item_weight: "[data-item_weight] parseInt",
                            date: "[data-date] parseInt"
                        },
                        sortBy: ["item_weight", "date"],
                        sortAscending: {
                            item_weight: !1,
                            date: !1
                        },
                        filter: function () {
                            var t = $(this),
                            e = $(".item-info", t),
                            i = t.attr("data-client"),
                            n = t.attr("data-client_slug").replace("-", " "),
                            o = "all" == site.search.filterMode && site.search.filter ? site.search.filter.replace(/,/g, "") : site.search.filter,
                            r = !o || t.is(o),
                            s = null;
                            return site.search.el.$searchInput.val().length > 1 ? (e && (s = !site.search.regex || e.text().match(site.search.regex)), !s && (i.length <= site.search.el.$searchInput.val().length || n.length <= site.search.el.$searchInput.val().length) && (s = !site.search.regex || (i.match(site.search.regex) || n.match(site.search.regex))), s && r) : !!o && r
                        },
                        layoutMode: "fitRows",
                        masonry: {
                            columnWidth: ".work-item"
                        },
                        transitionDuration: 0
                    }).on("arrangeComplete", function (t, e) {
                        site.search.rellaxClient.refresh(),
                        site.utils.prepareClientStories(site.search.el.$searchContent),
                        site.search.el.$search.removeClass("is-waiting"),
                        site.inViewChecker.refresh(),
                        setTimeout(function () {
                            site.inViewChecker.refresh()
                        }, 1500),
                        !e.length && (site.search.filter || site.search.el.$searchInput.val().length > 1) ? site.search.el.$search.addClass("no-results") : site.search.el.$search.removeClass("no-results")
                    })))
        }, 400)
    }
}, site.topNav = {
    isClosed: !0,
    isHidden: !0,
    selected: !1,
    init: function () {
        site.topNav.build(),
        site.topNav.select(!0),
        site.topNav.ready()
    },
    setNavUnderline: function (t, e) {
        if (t.length) {
            site.topNav.selected = !0,
            $(".topNav-menu li").removeClass("current_page_item, current-menu-item"),
            t.addClass("current-menu-item");
            var i = $(".topNav-underline"),
            n = t.position().left + $(".bold", t).position().left,
            o = $(".bold", t).width(),
            r = e ? 0 : 300;
            i.data("origLeft", n).data("origWidth", o).stop(1, 1).animate({
                left: n,
                width: o
            }, r)
        }
    },
    select: function (t, e) {
        var i = $(".topNav-underline"),
        n = e ? 0 : 300;
        function o(t) {
            i.data("origLeft", "15px").data("origWidth", "0").stop(1, 1).animate({
                width: 0
            }, n)
        }
        t && (o(), $(".topNav-menu li").hover(function () {
                var t = $(this),
                e = t.position().left + $(".bold", t).position().left,
                o = $(".bold", t).width();
                site.topNav.selected || i.stop(1, 0).animate({
                    left: e,
                    width: 0
                }, 0),
                i.stop(1, 0).animate({
                    left: e,
                    width: o
                }, n)
            }, function () {
                if (!site.topNav.selected) {
                    var t = $(this),
                    e = t.position().left + $(".bold", t).position().left;
                    i.data("origLeft", e).data("origWidth", "0")
                }
                i.stop(1, 0).animate({
                    left: i.data("origLeft"),
                    width: i.data("origWidth")
                }, n)
            })),
        site.topNav.selected = !1,
        $(".topNav-menu li").each(function (t) {
            var e = $(this);
            e.hasClass("menu-item-3896") ? $("#content").is(".single-work, .page-template-page--work, .tax-work_category, .tax-work_collection") && site.topNav.setNavUnderline(e) : e.hasClass("menu-item-3887") ? $("#content").hasClass("page-template-page--clients") && site.topNav.setNavUnderline(e) : e.hasClass("menu-item-3886") ? $("#content").hasClass("page-template-page--about") && site.topNav.setNavUnderline(e) : e.hasClass("menu-item-3888") && $("#content").hasClass("page-template-page--contact") && site.topNav.setNavUnderline(e)
        }),
        site.topNav.selected || ($(".topNav-menu li").removeClass("current_page_item, current-menu-item"), o())
    },
    build: function () {
        site.topNav.isClosed ? site.topNav.close() : site.topNav.open(),
        $("#content").on("click", ".topNav-trigger", function (t) {
            t.preventDefault(),
            site.topNav.isClosed ? site.topNav.open() : site.topNav.close()
        }),
        $("#content").on("click", ".search-trigger", function (t) {
            t.preventDefault(),
            site.search.open()
        }),
        $(".topNav-menu li a").each(function (t) {
            var e = $(this).text();
            $(this).html('<span class="text normal">' + e + '</span><span class="text bold">' + e + "</span>")
        }),
        $("#content").on("click", ".topNav-menu li a", function (t) {
            var e = $(this).parent("li");
            site.topNav.setNavUnderline(e),
            $(document).width() <= site.vars.mobileBreakpoint && site.topNav.close()
        }),
        $("#content").on("click", ".logo a", function (t) {
            $(document).width() <= site.vars.mobileBreakpoint && site.topNav.close()
        })
    },
    ready: function () {},
    open: function () {
        $("html").addClass("is-topNavOpen"),
        site.topNav.isClosed = !1
    },
    close: function () {
        $("html").removeClass("is-topNavOpen"),
        site.topNav.isClosed = !0
    },
    show: function () {
        $("html").removeClass("is-topNavHidden"),
        site.topNav.isHidden = !1
    },
    hide: function () {
        $("html").addClass("is-topNavHidden"),
        site.topNav.isHidden = !0
    }
}, site.work = {
    init: function (t) {
        site.work.build(t),
        site.work.load(t, 1),
        site.work.ready()
    },
    el: {},
    grid: null,
    currTax: null,
    itemsLoaded: !1,
    build: function () {
        site.work.grid = null,
        site.work.currTax = null,
        site.work.itemsLoaded = !1;
        var t = $(".categoryNav-underline"),
        e = $(".category-nav");
        $(".menu-item", e).hover(function () {
            var e = $(this),
            i = (e.index(), e.position().left + $(".underline-align", e).position().left),
            n = $(".underline-align", e).width(),
            o = $(".color", e).css("color");
            t.css({
                "background-color": o
            }).stop(1, 0).animate({
                left: i,
                width: n
            }, 300)
        }, function () {
            t.css({
                "background-color": t.data("origColor")
            }).stop(1, 0).animate({
                left: t.data("origLeft"),
                width: t.data("origWidth")
            }, 300)
        }),
        $(".menu-item a:not(.select-box a)", e).on("click", function (t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = $(this).parent(".menu-item"),
            i = e.attr("data-tax");
            e.parents(".flickity-enabled.is-animating").length || ($(".category-nav .menu-item").removeClass("is-nav-selected"), e.addClass("is-nav-selected"), site.work.load(i))
        }),
        site.work.el.$work_items = $(".section-work-items .work-items"),
        $(".section-info").flickity({
            draggable: !0,
            pageDots: !1,
            wrapAround: !1,
            cellAlign: "left"
        }).on("staticClick.flickity", function (t, e, i, n) {
            void 0 !== n && $(".section-info").flickity("select", n)
        }).on("select.flickity", function (t, i) {
            var n = $(".menu-item", e)[i].getAttribute("data-tax");
            if ("work_collection" == n) {
                var o = $(".select-box a.is-active", e).attr("data-collection");
                o && site.work.load("collection_" + o)
            } else
                site.work.load(n);
            var r = 0;
            $(".menu-item", e).each(function () {
                r += $(this).outerWidth(!0)
            }),
            $(window).width() > r ? e.removeClass("is-overflowing") : e.addClass("is-overflowing"),
            site.work.setNavUnderline($(".menu-item:eq(" + i + ")", e))
        }),
        e.flickity({
            asNavFor: ".section-info",
            cellSelector: ".menu-item",
            freeScroll: !0,
            wrapAround: !1,
            contain: !0,
            pageDots: !1,
            draggable: !0
        }),
        e.on("dragStart.flickity", function (t, e) {
            document.ontouchmove = function (t) {
                t.preventDefault()
            }
        }).on("dragEnd.flickity", function (t, e) {
            document.ontouchmove = function (t) {
                return !0
            }
        }),
        setTimeout(function () {
            e.flickity("resize"),
            setTimeout(function () {
                window.dispatchEvent(new Event("resize"))
            }, 800)
        }, 500),
        site.dataFetcher.load(!0, function () {
            site.work.el.$work_items[0].innerHTML = site.dataFetcher.workItemsHTML.join(""),
            site.inViewChecker.refresh(),
            site.work.itemsLoaded = !0
        }),
        site.work.selectBox.init()
    },
    selectBox: {
        $categoryNav: null,
        pointerDown: !1,
        init: function () {
            site.work.selectBox.$categoryNav = $(".category-nav"),
            $(".select-box", site.work.selectBox.$categoryNav).hover(function (t) {
                site.work.selectBox.open($(this))
            }, function (t) {
                site.work.selectBox.close()
            }).on("pointerdown touchstart", function (t) {
                t.stopImmediatePropagation();
                var e = $(this).parent(".menu-item").index();
                site.work.selectBox.$categoryNav.flickity("select", e),
                site.work.selectBox.open($(this)),
                site.work.selectBox.pointerDown = !0,
                setTimeout(function () {
                    site.work.selectBox.pointerDown = !1
                }, 200)
            }),
            $(".select-box a", site.work.selectBox.$categoryNav).on("click", function (t) {
                t.preventDefault();
                var e = $(this);
                site.work.selectBox.update(e)
            })
        },
        open: function (t) {
            var e = site.work.selectBox.$categoryNav || $(".category-nav"),
            i = parseInt(t.attr("data-select"));
            e[0].style.setProperty("--select", i + 1)
        },
        close: function () {
            site.work.selectBox.pointerDown || site.work.selectBox.$categoryNav[0].style.setProperty("--select", "0")
        },
        update: function (t) {
            var e = site.work.selectBox.$categoryNav || $(".category-nav"),
            i = $(".section-info"),
            n = t.text(),
            o = t.closest(".menu-item"),
            r = t.attr("data-collection");
            if (r) {
                $(".label-selected .collection", o).text(n),
                e.flickity("resize"),
                site.work.setNavUnderline(o),
                $("a", o).removeClass("is-active"),
                t.addClass("is-active");
                var s = $('.info-wrap[data-tax="work_collection"] .section-content .description p', i);
                $("span", s).removeClass("is-active"),
                $('span[data-collection="' + r + '"]', s).addClass("is-active"),
                $(".menu-item", e).removeClass("is-nav-selected"),
                o.addClass("is-nav-selected"),
                site.work.selectBox.close(),
                i.flickity("select", $('.menu-item[data-tax="work_collection"]', e).index())
            }
        }
    },
    setNavUnderline: function (t, e) {
        if (t.length) {
            var i = $(".categoryNav-underline"),
            n = t.position().left + $(".underline-align", t).position().left,
            o = $(".underline-align", t).width(),
            r = $(".color", t).css("color"),
            s = e ? 0 : 300;
            i.data("origLeft", n).data("origWidth", o).data("origColor", r).css({
                "background-color": r
            }).stop(1, 1).animate({
                left: n,
                width: o
            }, s)
        }
    },
    load: function (t, e) {
        var i = null,
        n = $(".category-nav");
        if ("workDetail" == t && (i = !0), t && "work" != t && "workDetail" != t || (t = $(".menu-item", n)[0].getAttribute("data-tax")), site.work.currTax != t) {
            if (site.work.currTax = t, i)
                window.setTimeout(function () {
                    site.workDetail.load(workData)
                }, 2500);
            else {
                var o = t.split("_"),
                r = homeUrl + "/work/category/" + o[1];
                -1 !== t.indexOf("collection_") && (r = homeUrl + "/work/collection/" + o[1]),
                history.replaceState({}, "Work — Sandwich", r),
                site.gaPageview(r, "Work — Sandwich")
            }
            if (e) {
                o = t.split("_");
                if (taxAttr = t, -1 !== t.indexOf("collection_")) {
                    var s = $('.select-box a[data-collection="' + o[1] + '"]', n);
                    site.work.selectBox.update(s),
                    taxAttr = "work_collection"
                }
                $(".section-info").flickity("selectCell", '[data-tax="' + taxAttr + '"]'),
                n.flickity("selectCell", '[data-tax="' + taxAttr + '"]')
            }
            site.work.loadGrid(t)
        }
    },
    loadGrid: function (t) {
        $(".work-item.in-view", site.work.el.$work_items).removeClass("in-view");
        var e = "[data-" + t + "]";
        site.work.attributeSelector = "data-" + t;
        var i = window.setInterval(function () {
            site.work.itemsLoaded && (site.work.grid ? (site.work.grid.isotope("updateSortData").isotope({
                        filter: e
                    }), window.clearInterval(i)) : site.work.grid = site.work.el.$work_items.isotope({
                    itemSelector: ".work-item",
                    getSortData: {
                        tax_weight: function (t) {
                            var e = $(t).attr(site.work.attributeSelector);
                            return parseFloat(e)
                        }
                    },
                    sortBy: "tax_weight",
                    sortAscending: {
                        tax_weight: !0
                    },
                    filter: e,
                    layoutMode: "fitRows",
                    masonry: {
                        columnWidth: ".work-item"
                    },
                    percentPosition: !0,
                    transitionDuration: 0,
                    hiddenStyle: {
                        opacity: 0
                    },
                    visibleStyle: {
                        opacity: 1
                    }
                }).on("arrangeComplete", function (t, e) {
                    var i = $(".section-work-items .work-items"),
                    n = $(".category-nav").hasClass("is-overflowing") ? 60 : -1,
                    o = i.offset().top - site.vars.headerHeight - n;
                    $(document).scrollTop() > o && $("html, body, content").stop().animate({
                        scrollTop: o
                    }, 300),
                    site.inViewChecker.refresh(),
                    setTimeout(function () {
                        site.inViewChecker.refresh()
                    }, 1500)
                }))
        }, 200)
    },
    ready: function () {}
}, site.workDetail = {
    delay: 300,
    $workDetail: null,
    prevURL: null,
    isOpen: !1,
    init: function (t) {
        site.workDetail.build(t)
    },
    build: function (t) {
        $workDetail = $("#workDetail"),
        $("#content").on("click", "#workDetail .btn-close, .workDetail-bg, .client-wrap", function (t) {
            site.workDetail.close()
        }),
        $("#content").on("click", ".work-item[data-video-id], a[data-video-id]", function (t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = $(this),
            i = {
                video_id: e.attr("data-video-id"),
                url: e.attr("href"),
                client: $(".client", e).text(),
                title: $(".title", e).text()
            };
            return e.parents(".flickity-enabled.is-animating").length || site.workDetail.load(i),
            !1
        }),
        t && site.workDetail.load(t)
    },
    open: function () {
        site.topNav.close(),
        site.search.isOpen ? site.utils.lockPage(!0, !0) : site.workDetail.isOpen || site.utils.lockPage(!0),
        site.workDetail.isOpen = !0,
        $("#content").addClass("is-workDetail-open")
    },
    close: function () {
        site.workDetail.isOpen && (site.workDetail.isOpen = !1, site.search.isOpen ? site.utils.lockPage(!1, !0) : site.utils.lockPage(!1), $("#content").removeClass("is-workDetail-open"), history.replaceState({}, "", site.workDetail.prevURL), site.gaPageview(site.workDetail.prevURL, document.title), site.workDetail.prevURL = null, setTimeout(function () {
                $(".feature", $workDetail).html("")
            }, site.workDetail.delay))
    },
   /*  load: function (t) {
        function e(t) {
            var e = 1.777777;
            window._wq = window._wq || [],
            _wq.push({
                id: t,
                onReady: function (t) {
                    e = t.aspect(),
                    $(".feature-wrap", $workDetail).css({
                        "max-width": "calc(100vh * " + e + " - " + e + " * 160px)"
                    }),
                    $(".feature", $workDetail).css({
                        "padding-bottom": 100 / e + "%"
                    })
                }
            })
        }
        if ($(".workDetail-scroll").scrollTop(0), site.workDetail.prevURL || (site.workDetail.prevURL = $("#content").hasClass("single-work") ? $("a", $(".category-nav .menu-item").first()).attr("href") || $("a", $(".topNav-menu .menu-item").first()).attr("href") : window.location.href), history.replaceState({}, "", t.url), site.gaPageview(t.url, t.client + ": " + t.title), t && t.video_id && t.url && t.client && t.title) {
            var i = '<div class="video-embed wistia_embed wistia_async_' + t.video_id + ' controlsVisibleOnLoad=false playButton=true silentAutoPlay=allow autoPlay=true endVideoBehavior=reset fullscreenButton=true seo=false" style="width:640px;height:360px;">&nbsp;</div>';
            $(".feature", $workDetail).html(i),
            $(".client", $workDetail).html(t.client + "&nbsp"),
            $(".title", $workDetail).html(t.title),
            e(t.video_id),
            $(".info-target", $workDetail).fadeTo(0, 0).load(t.url + " .workDetail .info", function (t, e, i) {
                "success" == e ? (site.utils.prepareSVG(), site.utils.prepareThumbs(), site.utils.flickityInit(), $(".info-target", $workDetail).delay(1e3).fadeTo(400, 1)) : "error" == e && console.log("Error: " + i.status + ": " + i.statusText)
            })
        } else
            $(".workDetail-wrap", $workDetail).fadeTo(0, 0).load(t.url + " .workDetail .workDetail-content", function (t, i, n) {
                "success" == i ? (e($(".feature [data-video-id]", $workDetail).attr("data-video-id")), site.utils.prepareSVG(), site.utils.prepareThumbs(), site.utils.flickityInit(), $(".workDetail-wrap", $workDetail).delay(1e3).fadeTo(400, 1)) : "error" == i && console.log("Error: " + n.status + ": " + n.statusText)
            });
        site.workDetail.open()
    } */
};

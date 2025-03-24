/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && w.isPlainObject(n) ? n : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      y.push("~="),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      y.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", W);
                }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? ce(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error (37920), unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      m = !u && !s,
                      x = !1;
                    if (y) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                        (x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2]),
                          (p = d && y.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [T, d, x];
                            break;
                          }
                      } else if (
                        (m &&
                          (x = d =
                            (l =
                              (c =
                                (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType) &&
                            ++x &&
                            (m &&
                              ((c =
                                (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [T, x]),
                            p === t)
                          )
                            break;
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                        var r,
                          o = i(e, t),
                          a = o.length;
                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
              return r[b]
                ? se(function (e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (u = []), (l = r.preFilter);
          while (s) {
            (n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        });
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            t || (t = a(e)), (n = t.length);
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
            (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            w.Callbacks("memory"),
            w.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith)
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook &&
                            w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o &&
                              (r !== W && ((s = void 0), (u = [e])),
                              n.rejectWith(s, u));
                        }
                      };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                      (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function () {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
        "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle =
              function (t) {
                return "undefined" != typeof w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || "").match(M) || [""]).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, "display")),
        "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), J.remove(e, "fxshow");
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
                ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          },
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + "").replace(
          Rt,
          Ct.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
        m.add(h.complete),
        E.done(h.success),
        E.fail(h.error),
        (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ""),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ""),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f &&
            (y.trigger("ajaxComplete", [E, h]),
            --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
})(function (e) {
  "use strict";
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }
  function r(t) {
    var r = t.target,
      a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0];
    }
    var i = this;
    if (((i.clk = r), "image" == r.type))
      if (void 0 !== t.offsetX) (i.clk_x = t.offsetX), (i.clk_y = t.offsetY);
      else if ("function" == typeof e.fn.offset) {
        var o = a.offset();
        (i.clk_x = t.pageX - o.left), (i.clk_y = t.pageY - o.top);
      } else
        (i.clk_x = t.pageX - r.offsetLeft), (i.clk_y = t.pageY - r.offsetTop);
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log
        ? window.console.log(t)
        : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }
  var n = {};
  (n.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
    (n.formdata = void 0 !== window.FormData);
  var i = !!e.fn.prop;
  (e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || "string" == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (e.fn.ajaxSubmit = function (t) {
      function r(r) {
        var a,
          n,
          i = e.param(r, t.traditional).split("&"),
          o = i.length,
          s = [];
        for (a = 0; o > a; a++)
          (i[a] = i[a].replace(/\+/g, " ")),
            (n = i[a].split("=")),
            s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
        return s;
      }
      function o(a) {
        for (var n = new FormData(), i = 0; i < a.length; i++)
          n.append(a[i].name, a[i].value);
        if (t.extraData) {
          var o = r(t.extraData);
          for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
        }
        t.data = null;
        var s = e.extend(!0, {}, e.ajaxSettings, t, {
          contentType: !1,
          processData: !1,
          cache: !1,
          type: u || "POST",
        });
        t.uploadProgress &&
          (s.xhr = function () {
            var r = e.ajaxSettings.xhr();
            return (
              r.upload &&
                r.upload.addEventListener(
                  "progress",
                  function (e) {
                    var r = 0,
                      a = e.loaded || e.position,
                      n = e.total;
                    e.lengthComputable && (r = Math.ceil((a / n) * 100)),
                      t.uploadProgress(e, a, n, r);
                  },
                  !1
                ),
              r
            );
          }),
          (s.data = null);
        var c = s.beforeSend;
        return (
          (s.beforeSend = function (e, r) {
            (r.data = t.formData ? t.formData : n), c && c.call(this, e, r);
          }),
          e.ajax(s)
        );
      }
      function s(r) {
        function n(e) {
          var t = null;
          try {
            e.contentWindow && (t = e.contentWindow.document);
          } catch (r) {
            a("cannot get iframe.contentWindow document: " + r);
          }
          if (t) return t;
          try {
            t = e.contentDocument ? e.contentDocument : e.document;
          } catch (r) {
            a("cannot get iframe.contentDocument: " + r), (t = e.document);
          }
          return t;
        }
        function o() {
          function t() {
            try {
              var e = n(g).readyState;
              a("state = " + e),
                e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
            } catch (r) {
              a("Server abort: ", r, " (", r.name, ")"),
                s(k),
                j && clearTimeout(j),
                (j = void 0);
            }
          }
          var r = f.attr2("target"),
            i = f.attr2("action"),
            o = "multipart/form-data",
            c = f.attr("enctype") || f.attr("encoding") || o;
          w.setAttribute("target", p),
            (!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
            i != m.url && w.setAttribute("action", m.url),
            m.skipEncodingOverride ||
              (u && !/post/i.test(u)) ||
              f.attr({
                encoding: "multipart/form-data",
                enctype: "multipart/form-data",
              }),
            m.timeout &&
              (j = setTimeout(function () {
                (T = !0), s(D);
              }, m.timeout));
          var l = [];
          try {
            if (m.extraData)
              for (var d in m.extraData)
                m.extraData.hasOwnProperty(d) &&
                  l.push(
                    e.isPlainObject(m.extraData[d]) &&
                      m.extraData[d].hasOwnProperty("name") &&
                      m.extraData[d].hasOwnProperty("value")
                      ? e(
                          '<input type="hidden" name="' +
                            m.extraData[d].name +
                            '">'
                        )
                          .val(m.extraData[d].value)
                          .appendTo(w)[0]
                      : e('<input type="hidden" name="' + d + '">')
                          .val(m.extraData[d])
                          .appendTo(w)[0]
                  );
            m.iframeTarget || v.appendTo("body"),
              g.attachEvent
                ? g.attachEvent("onload", s)
                : g.addEventListener("load", s, !1),
              setTimeout(t, 15);
            try {
              w.submit();
            } catch (h) {
              var x = document.createElement("form").submit;
              x.apply(w);
            }
          } finally {
            w.setAttribute("action", i),
              w.setAttribute("enctype", c),
              r ? w.setAttribute("target", r) : f.removeAttr("target"),
              e(l).remove();
          }
        }
        function s(t) {
          if (!x.aborted && !F) {
            if (
              ((M = n(g)),
              M || (a("cannot access response document"), (t = k)),
              t === D && x)
            )
              return x.abort("timeout"), void S.reject(x, "timeout");
            if (t == k && x)
              return (
                x.abort("server abort"),
                void S.reject(x, "error", "server abort")
              );
            if ((M && M.location.href != m.iframeSrc) || T) {
              g.detachEvent
                ? g.detachEvent("onload", s)
                : g.removeEventListener("load", s, !1);
              var r,
                i = "success";
              try {
                if (T) throw "timeout";
                var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                if (
                  (a("isXml=" + o),
                  !o &&
                    window.opera &&
                    (null === M.body || !M.body.innerHTML) &&
                    --O)
                )
                  return (
                    a("requeing onLoad callback, DOM not available"),
                    void setTimeout(s, 250)
                  );
                var u = M.body ? M.body : M.documentElement;
                (x.responseText = u ? u.innerHTML : null),
                  (x.responseXML = M.XMLDocument ? M.XMLDocument : M),
                  o && (m.dataType = "xml"),
                  (x.getResponseHeader = function (e) {
                    var t = { "content-type": m.dataType };
                    return t[e.toLowerCase()];
                  }),
                  u &&
                    ((x.status = Number(u.getAttribute("status")) || x.status),
                    (x.statusText =
                      u.getAttribute("statusText") || x.statusText));
                var c = (m.dataType || "").toLowerCase(),
                  l = /(json|script|text)/.test(c);
                if (l || m.textarea) {
                  var f = M.getElementsByTagName("textarea")[0];
                  if (f)
                    (x.responseText = f.value),
                      (x.status = Number(f.getAttribute("status")) || x.status),
                      (x.statusText =
                        f.getAttribute("statusText") || x.statusText);
                  else if (l) {
                    var p = M.getElementsByTagName("pre")[0],
                      h = M.getElementsByTagName("body")[0];
                    p
                      ? (x.responseText = p.textContent
                          ? p.textContent
                          : p.innerText)
                      : h &&
                        (x.responseText = h.textContent
                          ? h.textContent
                          : h.innerText);
                  }
                } else
                  "xml" == c &&
                    !x.responseXML &&
                    x.responseText &&
                    (x.responseXML = X(x.responseText));
                try {
                  E = _(x, c, m);
                } catch (y) {
                  (i = "parsererror"), (x.error = r = y || i);
                }
              } catch (y) {
                a("error caught: ", y), (i = "error"), (x.error = r = y || i);
              }
              x.aborted && (a("upload aborted"), (i = null)),
                x.status &&
                  (i =
                    (x.status >= 200 && x.status < 300) || 304 === x.status
                      ? "success"
                      : "error"),
                "success" === i
                  ? (m.success && m.success.call(m.context, E, "success", x),
                    S.resolve(x.responseText, "success", x),
                    d && e.event.trigger("ajaxSuccess", [x, m]))
                  : i &&
                    (void 0 === r && (r = x.statusText),
                    m.error && m.error.call(m.context, x, i, r),
                    S.reject(x, "error", r),
                    d && e.event.trigger("ajaxError", [x, m, r])),
                d && e.event.trigger("ajaxComplete", [x, m]),
                d && !--e.active && e.event.trigger("ajaxStop"),
                m.complete && m.complete.call(m.context, x, i),
                (F = !0),
                m.timeout && clearTimeout(j),
                setTimeout(function () {
                  m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
                    (x.responseXML = null);
                }, 100);
            }
          }
        }
        var c,
          l,
          m,
          d,
          p,
          v,
          g,
          x,
          y,
          b,
          T,
          j,
          w = f[0],
          S = e.Deferred();
        if (
          ((S.abort = function (e) {
            x.abort(e);
          }),
          r)
        )
          for (l = 0; l < h.length; l++)
            (c = e(h[l])),
              i ? c.prop("disabled", !1) : c.removeAttr("disabled");
        if (
          ((m = e.extend(!0, {}, e.ajaxSettings, t)),
          (m.context = m.context || m),
          (p = "jqFormIO" + new Date().getTime()),
          m.iframeTarget
            ? ((v = e(m.iframeTarget)),
              (b = v.attr2("name")),
              b ? (p = b) : v.attr2("name", p))
            : ((v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />')),
              v.css({ position: "absolute", top: "-1000px", left: "-1000px" })),
          (g = v[0]),
          (x = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: "n/a",
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (t) {
              var r = "timeout" === t ? "timeout" : "aborted";
              a("aborting upload... " + r), (this.aborted = 1);
              try {
                g.contentWindow.document.execCommand &&
                  g.contentWindow.document.execCommand("Stop");
              } catch (n) {}
              v.attr("src", m.iframeSrc),
                (x.error = r),
                m.error && m.error.call(m.context, x, r, t),
                d && e.event.trigger("ajaxError", [x, m, r]),
                m.complete && m.complete.call(m.context, x, r);
            },
          }),
          (d = m.global),
          d && 0 === e.active++ && e.event.trigger("ajaxStart"),
          d && e.event.trigger("ajaxSend", [x, m]),
          m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
        )
          return m.global && e.active--, S.reject(), S;
        if (x.aborted) return S.reject(), S;
        (y = w.clk),
          y &&
            ((b = y.name),
            b &&
              !y.disabled &&
              ((m.extraData = m.extraData || {}),
              (m.extraData[b] = y.value),
              "image" == y.type &&
                ((m.extraData[b + ".x"] = w.clk_x),
                (m.extraData[b + ".y"] = w.clk_y))));
        var D = 1,
          k = 2,
          A = e("meta[name=csrf-token]").attr("content"),
          L = e("meta[name=csrf-param]").attr("content");
        L && A && ((m.extraData = m.extraData || {}), (m.extraData[L] = A)),
          m.forceSync ? o() : setTimeout(o, 10);
        var E,
          M,
          F,
          O = 50,
          X =
            e.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? ((t = new ActiveXObject("Microsoft.XMLDOM")),
                    (t.async = "false"),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, "text/xml")),
                t &&
                t.documentElement &&
                "parsererror" != t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          C =
            e.parseJSON ||
            function (e) {
              return window.eval("(" + e + ")");
            },
          _ = function (t, r, a) {
            var n = t.getResponseHeader("content-type") || "",
              i = "xml" === r || (!r && n.indexOf("xml") >= 0),
              o = i ? t.responseXML : t.responseText;
            return (
              i &&
                "parsererror" === o.documentElement.nodeName &&
                e.error &&
                e.error("parsererror"),
              a && a.dataFilter && (o = a.dataFilter(o, r)),
              "string" == typeof o &&
                ("json" === r || (!r && n.indexOf("json") >= 0)
                  ? (o = C(o))
                  : ("script" === r || (!r && n.indexOf("javascript") >= 0)) &&
                    e.globalEval(o)),
              o
            );
          };
        return S;
      }
      if (!this.length)
        return (
          a("ajaxSubmit: skipping submit process - no element selected"), this
        );
      var u,
        c,
        l,
        f = this;
      "function" == typeof t ? (t = { success: t }) : void 0 === t && (t = {}),
        (u = t.type || this.attr2("method")),
        (c = t.url || this.attr2("action")),
        (l = "string" == typeof c ? e.trim(c) : ""),
        (l = l || window.location.href || ""),
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        (t = e.extend(
          !0,
          {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "")
              ? "javascript:false"
              : "about:blank",
          },
          t
        ));
      var m = {};
      if ((this.trigger("form-pre-serialize", [this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        );
      if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
        return (
          a("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        );
      var d = t.traditional;
      void 0 === d && (d = e.ajaxSettings.traditional);
      var p,
        h = [],
        v = this.formToArray(t.semantic, h);
      if (
        (t.data && ((t.extraData = t.data), (p = e.param(t.data, d))),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
      )
        return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if ((this.trigger("form-submit-validate", [v, this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        );
      var g = e.param(v, d);
      p && (g = g ? g + "&" + p : p),
        "GET" == t.type.toUpperCase()
          ? ((t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g),
            (t.data = null))
          : (t.data = g);
      var x = [];
      if (
        (t.resetForm &&
          x.push(function () {
            f.resetForm();
          }),
        t.clearForm &&
          x.push(function () {
            f.clearForm(t.includeHidden);
          }),
        !t.dataType && t.target)
      ) {
        var y = t.success || function () {};
        x.push(function (r) {
          var a = t.replaceTarget ? "replaceWith" : "html";
          e(t.target)[a](r).each(y, arguments);
        });
      } else t.success && x.push(t.success);
      if (
        ((t.success = function (e, r, a) {
          for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
            x[i].apply(n, [e, r, a || f, f]);
        }),
        t.error)
      ) {
        var b = t.error;
        t.error = function (e, r, a) {
          var n = t.context || this;
          b.apply(n, [e, r, a, f]);
        };
      }
      if (t.complete) {
        var T = t.complete;
        t.complete = function (e, r) {
          var a = t.context || this;
          T.apply(a, [e, r, f]);
        };
      }
      var j = e("input[type=file]:enabled", this).filter(function () {
          return "" !== e(this).val();
        }),
        w = j.length > 0,
        S = "multipart/form-data",
        D = f.attr("enctype") == S || f.attr("encoding") == S,
        k = n.fileapi && n.formdata;
      a("fileAPI :" + k);
      var A,
        L = (w || D) && !k;
      t.iframe !== !1 && (t.iframe || L)
        ? t.closeKeepAlive
          ? e.get(t.closeKeepAlive, function () {
              A = s(v);
            })
          : (A = s(v))
        : (A = (w || D) && k ? o(v) : e.ajax(t)),
        f.removeData("jqxhr").data("jqxhr", A);
      for (var E = 0; E < h.length; E++) h[E] = null;
      return this.trigger("form-submit-notify", [this, t]), this;
    }),
    (e.fn.ajaxForm = function (n) {
      if (
        ((n = n || {}),
        (n.delegation = n.delegation && e.isFunction(e.fn.on)),
        !n.delegation && 0 === this.length)
      ) {
        var i = { s: this.selector, c: this.context };
        return !e.isReady && i.s
          ? (a("DOM not ready, queuing ajaxForm"),
            e(function () {
              e(i.s, i.c).ajaxForm(n);
            }),
            this)
          : (a(
              "terminating; zero elements found by selector" +
                (e.isReady ? "" : " (DOM not ready)")
            ),
            this);
      }
      return n.delegation
        ? (e(document)
            .off("submit.form-plugin", this.selector, t)
            .off("click.form-plugin", this.selector, r)
            .on("submit.form-plugin", this.selector, n, t)
            .on("click.form-plugin", this.selector, n, r),
          this)
        : this.ajaxFormUnbind()
            .bind("submit.form-plugin", n, t)
            .bind("click.form-plugin", n, r);
    }),
    (e.fn.ajaxFormUnbind = function () {
      return this.unbind("submit.form-plugin click.form-plugin");
    }),
    (e.fn.formToArray = function (t, r) {
      var a = [];
      if (0 === this.length) return a;
      var i,
        o = this[0],
        s = this.attr("id"),
        u = t ? o.getElementsByTagName("*") : o.elements;
      if (
        (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s &&
          ((i = e(':input[form="' + s + '"]').get()),
          i.length && (u = (u || []).concat(i))),
        !u || !u.length)
      )
        return a;
      var c, l, f, m, d, p, h;
      for (c = 0, p = u.length; p > c; c++)
        if (((d = u[c]), (f = d.name), f && !d.disabled))
          if (t && o.clk && "image" == d.type)
            o.clk == d &&
              (a.push({ name: f, value: e(d).val(), type: d.type }),
              a.push(
                { name: f + ".x", value: o.clk_x },
                { name: f + ".y", value: o.clk_y }
              ));
          else if (((m = e.fieldValue(d, !0)), m && m.constructor == Array))
            for (r && r.push(d), l = 0, h = m.length; h > l; l++)
              a.push({ name: f, value: m[l] });
          else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
              for (l = 0; l < v.length; l++)
                a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type });
          } else
            null !== m &&
              "undefined" != typeof m &&
              (r && r.push(d),
              a.push({
                name: f,
                value: m,
                type: d.type,
                required: d.required,
              }));
      if (!t && o.clk) {
        var g = e(o.clk),
          x = g[0];
        (f = x.name),
          f &&
            !x.disabled &&
            "image" == x.type &&
            (a.push({ name: f, value: g.val() }),
            a.push(
              { name: f + ".x", value: o.clk_x },
              { name: f + ".y", value: o.clk_y }
            ));
      }
      return a;
    }),
    (e.fn.formSerialize = function (t) {
      return e.param(this.formToArray(t));
    }),
    (e.fn.fieldSerialize = function (t) {
      var r = [];
      return (
        this.each(function () {
          var a = this.name;
          if (a) {
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array)
              for (var i = 0, o = n.length; o > i; i++)
                r.push({ name: a, value: n[i] });
            else
              null !== n &&
                "undefined" != typeof n &&
                r.push({ name: this.name, value: n });
          }
        }),
        e.param(r)
      );
    }),
    (e.fn.fieldValue = function (t) {
      for (var r = [], a = 0, n = this.length; n > a; a++) {
        var i = this[a],
          o = e.fieldValue(i, t);
        null === o ||
          "undefined" == typeof o ||
          (o.constructor == Array && !o.length) ||
          (o.constructor == Array ? e.merge(r, o) : r.push(o));
      }
      return r;
    }),
    (e.fieldValue = function (t, r) {
      var a = t.name,
        n = t.type,
        i = t.tagName.toLowerCase();
      if (
        (void 0 === r && (r = !0),
        r &&
          (!a ||
            t.disabled ||
            "reset" == n ||
            "button" == n ||
            (("checkbox" == n || "radio" == n) && !t.checked) ||
            (("submit" == n || "image" == n) && t.form && t.form.clk != t) ||
            ("select" == i && -1 == t.selectedIndex)))
      )
        return null;
      if ("select" == i) {
        var o = t.selectedIndex;
        if (0 > o) return null;
        for (
          var s = [],
            u = t.options,
            c = "select-one" == n,
            l = c ? o + 1 : u.length,
            f = c ? o : 0;
          l > f;
          f++
        ) {
          var m = u[f];
          if (m.selected) {
            var d = m.value;
            if (
              (d ||
                (d =
                  m.attributes &&
                  m.attributes.value &&
                  !m.attributes.value.specified
                    ? m.text
                    : m.value),
              c)
            )
              return d;
            s.push(d);
          }
        }
        return s;
      }
      return e(t).val();
    }),
    (e.fn.clearForm = function (t) {
      return this.each(function () {
        e("input,select,textarea", this).clearFields(t);
      });
    }),
    (e.fn.clearFields = e.fn.clearInputs =
      function (t) {
        var r =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var a = this.type,
            n = this.tagName.toLowerCase();
          r.test(a) || "textarea" == n
            ? (this.value = "")
            : "checkbox" == a || "radio" == a
            ? (this.checked = !1)
            : "select" == n
            ? (this.selectedIndex = -1)
            : "file" == a
            ? /MSIE/.test(navigator.userAgent)
              ? e(this).replaceWith(e(this).clone(!0))
              : e(this).val("")
            : t &&
              ((t === !0 && /hidden/.test(a)) ||
                ("string" == typeof t && e(this).is(t))) &&
              (this.value = "");
        });
      }),
    (e.fn.resetForm = function () {
      return this.each(function () {
        ("function" == typeof this.reset ||
          ("object" == typeof this.reset && !this.reset.nodeType)) &&
          this.reset();
      });
    }),
    (e.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (e.fn.selected = function (t) {
      return (
        void 0 === t && (t = !0),
        this.each(function () {
          var r = this.type;
          if ("checkbox" == r || "radio" == r) this.checked = t;
          else if ("option" == this.tagName.toLowerCase()) {
            var a = e(this).parent("select");
            t &&
              a[0] &&
              "select-one" == a[0].type &&
              a.find("option").selected(!1),
              (this.selected = t);
          }
        })
      );
    }),
    (e.fn.ajaxSubmit.debug = !1);
});
/*! jQuery UI - v1.12.1 - 2018-09-06
 * http://jqueryui.com
 * Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.ui = $.ui || {};
  var version = ($.ui.version = "1.12.1");
  /*!
   * jQuery UI Effects 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var dataSpace = "ui-effects-",
    dataSpaceStyle = "ui-effects-style",
    dataSpaceAnimated = "ui-effects-animated",
    jQuery = $;
  $.effects = { effect: {} };
  /*!
   * jQuery Color Animations v2.1.2
   * https://github.com/jquery/jquery-color
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * Date: Wed Jan 16 08:47:09 2013 -0600
   */
  (function (jQuery, undefined) {
    var stepHooks =
        "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
        "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
      stringParsers = [
        {
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (execResult) {
            return [execResult[1], execResult[2], execResult[3], execResult[4]];
          },
        },
        {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (execResult) {
            return [
              execResult[1] * 2.55,
              execResult[2] * 2.55,
              execResult[3] * 2.55,
              execResult[4],
            ];
          },
        },
        {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (execResult) {
            return [
              parseInt(execResult[1], 16),
              parseInt(execResult[2], 16),
              parseInt(execResult[3], 16),
            ];
          },
        },
        {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (execResult) {
            return [
              parseInt(execResult[1] + execResult[1], 16),
              parseInt(execResult[2] + execResult[2], 16),
              parseInt(execResult[3] + execResult[3], 16),
            ];
          },
        },
        {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function (execResult) {
            return [
              execResult[1],
              execResult[2] / 100,
              execResult[3] / 100,
              execResult[4],
            ];
          },
        },
      ],
      color = (jQuery.Color = function (color, green, blue, alpha) {
        return new jQuery.Color.fn.parse(color, green, blue, alpha);
      }),
      spaces = {
        rgba: {
          props: {
            red: { idx: 0, type: "byte" },
            green: { idx: 1, type: "byte" },
            blue: { idx: 2, type: "byte" },
          },
        },
        hsla: {
          props: {
            hue: { idx: 0, type: "degrees" },
            saturation: { idx: 1, type: "percent" },
            lightness: { idx: 2, type: "percent" },
          },
        },
      },
      propTypes = {
        byte: { floor: !0, max: 255 },
        percent: { max: 1 },
        degrees: { mod: 360, floor: !0 },
      },
      support = (color.support = {}),
      supportElem = jQuery("<p>")[0],
      colors,
      each = jQuery.each;
    supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
    each(spaces, function (spaceName, space) {
      space.cache = "_" + spaceName;
      space.props.alpha = { idx: 3, type: "percent", def: 1 };
    });
    function clamp(value, prop, allowEmpty) {
      var type = propTypes[prop.type] || {};
      if (value == null) {
        return allowEmpty || !prop.def ? null : prop.def;
      }
      value = type.floor ? ~~value : parseFloat(value);
      if (isNaN(value)) {
        return prop.def;
      }
      if (type.mod) {
        return (value + type.mod) % type.mod;
      }
      return 0 > value ? 0 : type.max < value ? type.max : value;
    }
    function stringParse(string) {
      var inst = color(),
        rgba = (inst._rgba = []);
      string = string.toLowerCase();
      each(stringParsers, function (i, parser) {
        var parsed,
          match = parser.re.exec(string),
          values = match && parser.parse(match),
          spaceName = parser.space || "rgba";
        if (values) {
          parsed = inst[spaceName](values);
          inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
          rgba = inst._rgba = parsed._rgba;
          return !1;
        }
      });
      if (rgba.length) {
        if (rgba.join() === "0,0,0,0") {
          jQuery.extend(rgba, colors.transparent);
        }
        return inst;
      }
      return colors[string];
    }
    color.fn = jQuery.extend(color.prototype, {
      parse: function (red, green, blue, alpha) {
        if (red === undefined) {
          this._rgba = [null, null, null, null];
          return this;
        }
        if (red.jquery || red.nodeType) {
          red = jQuery(red).css(green);
          green = undefined;
        }
        var inst = this,
          type = jQuery.type(red),
          rgba = (this._rgba = []);
        if (green !== undefined) {
          red = [red, green, blue, alpha];
          type = "array";
        }
        if (type === "string") {
          return this.parse(stringParse(red) || colors._default);
        }
        if (type === "array") {
          each(spaces.rgba.props, function (key, prop) {
            rgba[prop.idx] = clamp(red[prop.idx], prop);
          });
          return this;
        }
        if (type === "object") {
          if (red instanceof color) {
            each(spaces, function (spaceName, space) {
              if (red[space.cache]) {
                inst[space.cache] = red[space.cache].slice();
              }
            });
          } else {
            each(spaces, function (spaceName, space) {
              var cache = space.cache;
              each(space.props, function (key, prop) {
                if (!inst[cache] && space.to) {
                  if (key === "alpha" || red[key] == null) {
                    return;
                  }
                  inst[cache] = space.to(inst._rgba);
                }
                inst[cache][prop.idx] = clamp(red[key], prop, !0);
              });
              if (
                inst[cache] &&
                jQuery.inArray(null, inst[cache].slice(0, 3)) < 0
              ) {
                inst[cache][3] = 1;
                if (space.from) {
                  inst._rgba = space.from(inst[cache]);
                }
              }
            });
          }
          return this;
        }
      },
      is: function (compare) {
        var is = color(compare),
          same = !0,
          inst = this;
        each(spaces, function (_, space) {
          var localCache,
            isCache = is[space.cache];
          if (isCache) {
            localCache =
              inst[space.cache] || (space.to && space.to(inst._rgba)) || [];
            each(space.props, function (_, prop) {
              if (isCache[prop.idx] != null) {
                same = isCache[prop.idx] === localCache[prop.idx];
                return same;
              }
            });
          }
          return same;
        });
        return same;
      },
      _space: function () {
        var used = [],
          inst = this;
        each(spaces, function (spaceName, space) {
          if (inst[space.cache]) {
            used.push(spaceName);
          }
        });
        return used.pop();
      },
      transition: function (other, distance) {
        var end = color(other),
          spaceName = end._space(),
          space = spaces[spaceName],
          startColor = this.alpha() === 0 ? color("transparent") : this,
          start = startColor[space.cache] || space.to(startColor._rgba),
          result = start.slice();
        end = end[space.cache];
        each(space.props, function (key, prop) {
          var index = prop.idx,
            startValue = start[index],
            endValue = end[index],
            type = propTypes[prop.type] || {};
          if (endValue === null) {
            return;
          }
          if (startValue === null) {
            result[index] = endValue;
          } else {
            if (type.mod) {
              if (endValue - startValue > type.mod / 2) {
                startValue += type.mod;
              } else if (startValue - endValue > type.mod / 2) {
                startValue -= type.mod;
              }
            }
            result[index] = clamp(
              (endValue - startValue) * distance + startValue,
              prop
            );
          }
        });
        return this[spaceName](result);
      },
      blend: function (opaque) {
        if (this._rgba[3] === 1) {
          return this;
        }
        var rgb = this._rgba.slice(),
          a = rgb.pop(),
          blend = color(opaque)._rgba;
        return color(
          jQuery.map(rgb, function (v, i) {
            return (1 - a) * blend[i] + a * v;
          })
        );
      },
      toRgbaString: function () {
        var prefix = "rgba(",
          rgba = jQuery.map(this._rgba, function (v, i) {
            return v == null ? (i > 2 ? 1 : 0) : v;
          });
        if (rgba[3] === 1) {
          rgba.pop();
          prefix = "rgb(";
        }
        return prefix + rgba.join() + ")";
      },
      toHslaString: function () {
        var prefix = "hsla(",
          hsla = jQuery.map(this.hsla(), function (v, i) {
            if (v == null) {
              v = i > 2 ? 1 : 0;
            }
            if (i && i < 3) {
              v = Math.round(v * 100) + "%";
            }
            return v;
          });
        if (hsla[3] === 1) {
          hsla.pop();
          prefix = "hsl(";
        }
        return prefix + hsla.join() + ")";
      },
      toHexString: function (includeAlpha) {
        var rgba = this._rgba.slice(),
          alpha = rgba.pop();
        if (includeAlpha) {
          rgba.push(~~(alpha * 255));
        }
        return (
          "#" +
          jQuery
            .map(rgba, function (v) {
              v = (v || 0).toString(16);
              return v.length === 1 ? "0" + v : v;
            })
            .join("")
        );
      },
      toString: function () {
        return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
      },
    });
    color.fn.parse.prototype = color.fn;
    function hue2rgb(p, q, h) {
      h = (h + 1) % 1;
      if (h * 6 < 1) {
        return p + (q - p) * h * 6;
      }
      if (h * 2 < 1) {
        return q;
      }
      if (h * 3 < 2) {
        return p + (q - p) * (2 / 3 - h) * 6;
      }
      return p;
    }
    spaces.hsla.to = function (rgba) {
      if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
        return [null, null, null, rgba[3]];
      }
      var r = rgba[0] / 255,
        g = rgba[1] / 255,
        b = rgba[2] / 255,
        a = rgba[3],
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        diff = max - min,
        add = max + min,
        l = add * 0.5,
        h,
        s;
      if (min === max) {
        h = 0;
      } else if (r === max) {
        h = (60 * (g - b)) / diff + 360;
      } else if (g === max) {
        h = (60 * (b - r)) / diff + 120;
      } else {
        h = (60 * (r - g)) / diff + 240;
      }
      if (diff === 0) {
        s = 0;
      } else if (l <= 0.5) {
        s = diff / add;
      } else {
        s = diff / (2 - add);
      }
      return [Math.round(h) % 360, s, l, a == null ? 1 : a];
    };
    spaces.hsla.from = function (hsla) {
      if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
        return [null, null, null, hsla[3]];
      }
      var h = hsla[0] / 360,
        s = hsla[1],
        l = hsla[2],
        a = hsla[3],
        q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
        p = 2 * l - q;
      return [
        Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
        Math.round(hue2rgb(p, q, h) * 255),
        Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
        a,
      ];
    };
    each(spaces, function (spaceName, space) {
      var props = space.props,
        cache = space.cache,
        to = space.to,
        from = space.from;
      color.fn[spaceName] = function (value) {
        if (to && !this[cache]) {
          this[cache] = to(this._rgba);
        }
        if (value === undefined) {
          return this[cache].slice();
        }
        var ret,
          type = jQuery.type(value),
          arr = type === "array" || type === "object" ? value : arguments,
          local = this[cache].slice();
        each(props, function (key, prop) {
          var val = arr[type === "object" ? key : prop.idx];
          if (val == null) {
            val = local[prop.idx];
          }
          local[prop.idx] = clamp(val, prop);
        });
        if (from) {
          ret = color(from(local));
          ret[cache] = local;
          return ret;
        } else {
          return color(local);
        }
      };
      each(props, function (key, prop) {
        if (color.fn[key]) {
          return;
        }
        color.fn[key] = function (value) {
          var vtype = jQuery.type(value),
            fn = key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName,
            local = this[fn](),
            cur = local[prop.idx],
            match;
          if (vtype === "undefined") {
            return cur;
          }
          if (vtype === "function") {
            value = value.call(this, cur);
            vtype = jQuery.type(value);
          }
          if (value == null && prop.empty) {
            return this;
          }
          if (vtype === "string") {
            match = rplusequals.exec(value);
            if (match) {
              value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
            }
          }
          local[prop.idx] = value;
          return this[fn](local);
        };
      });
    });
    color.hook = function (hook) {
      var hooks = hook.split(" ");
      each(hooks, function (i, hook) {
        jQuery.cssHooks[hook] = {
          set: function (elem, value) {
            var parsed,
              curElem,
              backgroundColor = "";
            if (
              value !== "transparent" &&
              (jQuery.type(value) !== "string" || (parsed = stringParse(value)))
            ) {
              value = color(parsed || value);
              if (!support.rgba && value._rgba[3] !== 1) {
                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                while (
                  (backgroundColor === "" ||
                    backgroundColor === "transparent") &&
                  curElem &&
                  curElem.style
                ) {
                  try {
                    backgroundColor = jQuery.css(curElem, "backgroundColor");
                    curElem = curElem.parentNode;
                  } catch (e) {}
                }
                value = value.blend(
                  backgroundColor && backgroundColor !== "transparent"
                    ? backgroundColor
                    : "_default"
                );
              }
              value = value.toRgbaString();
            }
            try {
              elem.style[hook] = value;
            } catch (e) {}
          },
        };
        jQuery.fx.step[hook] = function (fx) {
          if (!fx.colorInit) {
            fx.start = color(fx.elem, hook);
            fx.end = color(fx.end);
            fx.colorInit = !0;
          }
          jQuery.cssHooks[hook].set(
            fx.elem,
            fx.start.transition(fx.end, fx.pos)
          );
        };
      });
    };
    color.hook(stepHooks);
    jQuery.cssHooks.borderColor = {
      expand: function (value) {
        var expanded = {};
        each(["Top", "Right", "Bottom", "Left"], function (i, part) {
          expanded["border" + part + "Color"] = value;
        });
        return expanded;
      },
    };
    colors = jQuery.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff",
    };
  })(jQuery);
  (function () {
    var classAnimationActions = ["add", "remove", "toggle"],
      shorthandStyles = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1,
      };
    $.each(
      [
        "borderLeftStyle",
        "borderRightStyle",
        "borderBottomStyle",
        "borderTopStyle",
      ],
      function (_, prop) {
        $.fx.step[prop] = function (fx) {
          if (
            (fx.end !== "none" && !fx.setAttr) ||
            (fx.pos === 1 && !fx.setAttr)
          ) {
            jQuery.style(fx.elem, prop, fx.end);
            fx.setAttr = !0;
          }
        };
      }
    );
    function getElementStyles(elem) {
      var key,
        len,
        style = elem.ownerDocument.defaultView
          ? elem.ownerDocument.defaultView.getComputedStyle(elem, null)
          : elem.currentStyle,
        styles = {};
      if (style && style.length && style[0] && style[style[0]]) {
        len = style.length;
        while (len--) {
          key = style[len];
          if (typeof style[key] === "string") {
            styles[$.camelCase(key)] = style[key];
          }
        }
      } else {
        for (key in style) {
          if (typeof style[key] === "string") {
            styles[key] = style[key];
          }
        }
      }
      return styles;
    }
    function styleDifference(oldStyle, newStyle) {
      var diff = {},
        name,
        value;
      for (name in newStyle) {
        value = newStyle[name];
        if (oldStyle[name] !== value) {
          if (!shorthandStyles[name]) {
            if ($.fx.step[name] || !isNaN(parseFloat(value))) {
              diff[name] = value;
            }
          }
        }
      }
      return diff;
    }
    if (!$.fn.addBack) {
      $.fn.addBack = function (selector) {
        return this.add(
          selector == null ? this.prevObject : this.prevObject.filter(selector)
        );
      };
    }
    $.effects.animateClass = function (value, duration, easing, callback) {
      var o = $.speed(duration, easing, callback);
      return this.queue(function () {
        var animated = $(this),
          baseClass = animated.attr("class") || "",
          applyClassChange,
          allAnimations = o.children ? animated.find("*").addBack() : animated;
        allAnimations = allAnimations.map(function () {
          var el = $(this);
          return { el: el, start: getElementStyles(this) };
        });
        applyClassChange = function () {
          $.each(classAnimationActions, function (i, action) {
            if (value[action]) {
              animated[action + "Class"](value[action]);
            }
          });
        };
        applyClassChange();
        allAnimations = allAnimations.map(function () {
          this.end = getElementStyles(this.el[0]);
          this.diff = styleDifference(this.start, this.end);
          return this;
        });
        animated.attr("class", baseClass);
        allAnimations = allAnimations.map(function () {
          var styleInfo = this,
            dfd = $.Deferred(),
            opts = $.extend({}, o, {
              queue: !1,
              complete: function () {
                dfd.resolve(styleInfo);
              },
            });
          this.el.animate(this.diff, opts);
          return dfd.promise();
        });
        $.when.apply($, allAnimations.get()).done(function () {
          applyClassChange();
          $.each(arguments, function () {
            var el = this.el;
            $.each(this.diff, function (key) {
              el.css(key, "");
            });
          });
          o.complete.call(animated[0]);
        });
      });
    };
    $.fn.extend({
      addClass: (function (orig) {
        return function (classNames, speed, easing, callback) {
          return speed
            ? $.effects.animateClass.call(
                this,
                { add: classNames },
                speed,
                easing,
                callback
              )
            : orig.apply(this, arguments);
        };
      })($.fn.addClass),
      removeClass: (function (orig) {
        return function (classNames, speed, easing, callback) {
          return arguments.length > 1
            ? $.effects.animateClass.call(
                this,
                { remove: classNames },
                speed,
                easing,
                callback
              )
            : orig.apply(this, arguments);
        };
      })($.fn.removeClass),
      toggleClass: (function (orig) {
        return function (classNames, force, speed, easing, callback) {
          if (typeof force === "boolean" || force === undefined) {
            if (!speed) {
              return orig.apply(this, arguments);
            } else {
              return $.effects.animateClass.call(
                this,
                force ? { add: classNames } : { remove: classNames },
                speed,
                easing,
                callback
              );
            }
          } else {
            return $.effects.animateClass.call(
              this,
              { toggle: classNames },
              force,
              speed,
              easing
            );
          }
        };
      })($.fn.toggleClass),
      switchClass: function (remove, add, speed, easing, callback) {
        return $.effects.animateClass.call(
          this,
          { add: add, remove: remove },
          speed,
          easing,
          callback
        );
      },
    });
  })();
  (function () {
    if ($.expr && $.expr.filters && $.expr.filters.animated) {
      $.expr.filters.animated = (function (orig) {
        return function (elem) {
          return !!$(elem).data(dataSpaceAnimated) || orig(elem);
        };
      })($.expr.filters.animated);
    }
    if ($.uiBackCompat !== !1) {
      $.extend($.effects, {
        save: function (element, set) {
          var i = 0,
            length = set.length;
          for (; i < length; i++) {
            if (set[i] !== null) {
              element.data(dataSpace + set[i], element[0].style[set[i]]);
            }
          }
        },
        restore: function (element, set) {
          var val,
            i = 0,
            length = set.length;
          for (; i < length; i++) {
            if (set[i] !== null) {
              val = element.data(dataSpace + set[i]);
              element.css(set[i], val);
            }
          }
        },
        setMode: function (el, mode) {
          if (mode === "toggle") {
            mode = el.is(":hidden") ? "show" : "hide";
          }
          return mode;
        },
        createWrapper: function (element) {
          if (element.parent().is(".ui-effects-wrapper")) {
            return element.parent();
          }
          var props = {
              width: element.outerWidth(!0),
              height: element.outerHeight(!0),
              float: element.css("float"),
            },
            wrapper = $("<div></div>")
              .addClass("ui-effects-wrapper")
              .css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
            size = { width: element.width(), height: element.height() },
            active = document.activeElement;
          try {
            active.id;
          } catch (e) {
            active = document.body;
          }
          element.wrap(wrapper);
          if (element[0] === active || $.contains(element[0], active)) {
            $(active).trigger("focus");
          }
          wrapper = element.parent();
          if (element.css("position") === "static") {
            wrapper.css({ position: "relative" });
            element.css({ position: "relative" });
          } else {
            $.extend(props, {
              position: element.css("position"),
              zIndex: element.css("z-index"),
            });
            $.each(["top", "left", "bottom", "right"], function (i, pos) {
              props[pos] = element.css(pos);
              if (isNaN(parseInt(props[pos], 10))) {
                props[pos] = "auto";
              }
            });
            element.css({
              position: "relative",
              top: 0,
              left: 0,
              right: "auto",
              bottom: "auto",
            });
          }
          element.css(size);
          return wrapper.css(props).show();
        },
        removeWrapper: function (element) {
          var active = document.activeElement;
          if (element.parent().is(".ui-effects-wrapper")) {
            element.parent().replaceWith(element);
            if (element[0] === active || $.contains(element[0], active)) {
              $(active).trigger("focus");
            }
          }
          return element;
        },
      });
    }
    $.extend($.effects, {
      version: "1.12.1",
      define: function (name, mode, effect) {
        if (!effect) {
          effect = mode;
          mode = "effect";
        }
        $.effects.effect[name] = effect;
        $.effects.effect[name].mode = mode;
        return effect;
      },
      scaledDimensions: function (element, percent, direction) {
        if (percent === 0) {
          return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        }
        var x = direction !== "horizontal" ? (percent || 100) / 100 : 1,
          y = direction !== "vertical" ? (percent || 100) / 100 : 1;
        return {
          height: element.height() * y,
          width: element.width() * x,
          outerHeight: element.outerHeight() * y,
          outerWidth: element.outerWidth() * x,
        };
      },
      clipToBox: function (animation) {
        return {
          width: animation.clip.right - animation.clip.left,
          height: animation.clip.bottom - animation.clip.top,
          left: animation.clip.left,
          top: animation.clip.top,
        };
      },
      unshift: function (element, queueLength, count) {
        var queue = element.queue();
        if (queueLength > 1) {
          queue.splice.apply(
            queue,
            [1, 0].concat(queue.splice(queueLength, count))
          );
        }
        element.dequeue();
      },
      saveStyle: function (element) {
        element.data(dataSpaceStyle, element[0].style.cssText);
      },
      restoreStyle: function (element) {
        element[0].style.cssText = element.data(dataSpaceStyle) || "";
        element.removeData(dataSpaceStyle);
      },
      mode: function (element, mode) {
        var hidden = element.is(":hidden");
        if (mode === "toggle") {
          mode = hidden ? "show" : "hide";
        }
        if (hidden ? mode === "hide" : mode === "show") {
          mode = "none";
        }
        return mode;
      },
      getBaseline: function (origin, original) {
        var y, x;
        switch (origin[0]) {
          case "top":
            y = 0;
            break;
          case "middle":
            y = 0.5;
            break;
          case "bottom":
            y = 1;
            break;
          default:
            y = origin[0] / original.height;
        }
        switch (origin[1]) {
          case "left":
            x = 0;
            break;
          case "center":
            x = 0.5;
            break;
          case "right":
            x = 1;
            break;
          default:
            x = origin[1] / original.width;
        }
        return { x: x, y: y };
      },
      createPlaceholder: function (element) {
        var placeholder,
          cssPosition = element.css("position"),
          position = element.position();
        element
          .css({
            marginTop: element.css("marginTop"),
            marginBottom: element.css("marginBottom"),
            marginLeft: element.css("marginLeft"),
            marginRight: element.css("marginRight"),
          })
          .outerWidth(element.outerWidth())
          .outerHeight(element.outerHeight());
        if (/^(static|relative)/.test(cssPosition)) {
          cssPosition = "absolute";
          placeholder = $("<" + element[0].nodeName + ">")
            .insertAfter(element)
            .css({
              display: /^(inline|ruby)/.test(element.css("display"))
                ? "inline-block"
                : "block",
              visibility: "hidden",
              marginTop: element.css("marginTop"),
              marginBottom: element.css("marginBottom"),
              marginLeft: element.css("marginLeft"),
              marginRight: element.css("marginRight"),
              float: element.css("float"),
            })
            .outerWidth(element.outerWidth())
            .outerHeight(element.outerHeight())
            .addClass("ui-effects-placeholder");
          element.data(dataSpace + "placeholder", placeholder);
        }
        element.css({
          position: cssPosition,
          left: position.left,
          top: position.top,
        });
        return placeholder;
      },
      removePlaceholder: function (element) {
        var dataKey = dataSpace + "placeholder",
          placeholder = element.data(dataKey);
        if (placeholder) {
          placeholder.remove();
          element.removeData(dataKey);
        }
      },
      cleanUp: function (element) {
        $.effects.restoreStyle(element);
        $.effects.removePlaceholder(element);
      },
      setTransition: function (element, list, factor, value) {
        value = value || {};
        $.each(list, function (i, x) {
          var unit = element.cssUnit(x);
          if (unit[0] > 0) {
            value[x] = unit[0] * factor + unit[1];
          }
        });
        return value;
      },
    });
    function _normalizeArguments(effect, options, speed, callback) {
      if ($.isPlainObject(effect)) {
        options = effect;
        effect = effect.effect;
      }
      effect = { effect: effect };
      if (options == null) {
        options = {};
      }
      if ($.isFunction(options)) {
        callback = options;
        speed = null;
        options = {};
      }
      if (typeof options === "number" || $.fx.speeds[options]) {
        callback = speed;
        speed = options;
        options = {};
      }
      if ($.isFunction(speed)) {
        callback = speed;
        speed = null;
      }
      if (options) {
        $.extend(effect, options);
      }
      speed = speed || options.duration;
      effect.duration = $.fx.off
        ? 0
        : typeof speed === "number"
        ? speed
        : speed in $.fx.speeds
        ? $.fx.speeds[speed]
        : $.fx.speeds._default;
      effect.complete = callback || options.complete;
      return effect;
    }
    function standardAnimationOption(option) {
      if (!option || typeof option === "number" || $.fx.speeds[option]) {
        return !0;
      }
      if (typeof option === "string" && !$.effects.effect[option]) {
        return !0;
      }
      if ($.isFunction(option)) {
        return !0;
      }
      if (typeof option === "object" && !option.effect) {
        return !0;
      }
      return !1;
    }
    $.fn.extend({
      effect: function () {
        var args = _normalizeArguments.apply(this, arguments),
          effectMethod = $.effects.effect[args.effect],
          defaultMode = effectMethod.mode,
          queue = args.queue,
          queueName = queue || "fx",
          complete = args.complete,
          mode = args.mode,
          modes = [],
          prefilter = function (next) {
            var el = $(this),
              normalizedMode = $.effects.mode(el, mode) || defaultMode;
            el.data(dataSpaceAnimated, !0);
            modes.push(normalizedMode);
            if (
              defaultMode &&
              (normalizedMode === "show" ||
                (normalizedMode === defaultMode && normalizedMode === "hide"))
            ) {
              el.show();
            }
            if (!defaultMode || normalizedMode !== "none") {
              $.effects.saveStyle(el);
            }
            if ($.isFunction(next)) {
              next();
            }
          };
        if ($.fx.off || !effectMethod) {
          if (mode) {
            return this[mode](args.duration, complete);
          } else {
            return this.each(function () {
              if (complete) {
                complete.call(this);
              }
            });
          }
        }
        function run(next) {
          var elem = $(this);
          function cleanup() {
            elem.removeData(dataSpaceAnimated);
            $.effects.cleanUp(elem);
            if (args.mode === "hide") {
              elem.hide();
            }
            done();
          }
          function done() {
            if ($.isFunction(complete)) {
              complete.call(elem[0]);
            }
            if ($.isFunction(next)) {
              next();
            }
          }
          args.mode = modes.shift();
          if ($.uiBackCompat !== !1 && !defaultMode) {
            if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
              elem[mode]();
              done();
            } else {
              effectMethod.call(elem[0], args, done);
            }
          } else {
            if (args.mode === "none") {
              elem[mode]();
              done();
            } else {
              effectMethod.call(elem[0], args, cleanup);
            }
          }
        }
        return queue === !1
          ? this.each(prefilter).each(run)
          : this.queue(queueName, prefilter).queue(queueName, run);
      },
      show: (function (orig) {
        return function (option) {
          if (standardAnimationOption(option)) {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);
            args.mode = "show";
            return this.effect.call(this, args);
          }
        };
      })($.fn.show),
      hide: (function (orig) {
        return function (option) {
          if (standardAnimationOption(option)) {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);
            args.mode = "hide";
            return this.effect.call(this, args);
          }
        };
      })($.fn.hide),
      toggle: (function (orig) {
        return function (option) {
          if (standardAnimationOption(option) || typeof option === "boolean") {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);
            args.mode = "toggle";
            return this.effect.call(this, args);
          }
        };
      })($.fn.toggle),
      cssUnit: function (key) {
        var style = this.css(key),
          val = [];
        $.each(["em", "px", "%", "pt"], function (i, unit) {
          if (style.indexOf(unit) > 0) {
            val = [parseFloat(style), unit];
          }
        });
        return val;
      },
      cssClip: function (clipObj) {
        if (clipObj) {
          return this.css(
            "clip",
            "rect(" +
              clipObj.top +
              "px " +
              clipObj.right +
              "px " +
              clipObj.bottom +
              "px " +
              clipObj.left +
              "px)"
          );
        }
        return parseClip(this.css("clip"), this);
      },
      transfer: function (options, done) {
        var element = $(this),
          target = $(options.to),
          targetFixed = target.css("position") === "fixed",
          body = $("body"),
          fixTop = targetFixed ? body.scrollTop() : 0,
          fixLeft = targetFixed ? body.scrollLeft() : 0,
          endPosition = target.offset(),
          animation = {
            top: endPosition.top - fixTop,
            left: endPosition.left - fixLeft,
            height: target.innerHeight(),
            width: target.innerWidth(),
          },
          startPosition = element.offset(),
          transfer = $("<div class='ui-effects-transfer'></div>")
            .appendTo("body")
            .addClass(options.className)
            .css({
              top: startPosition.top - fixTop,
              left: startPosition.left - fixLeft,
              height: element.innerHeight(),
              width: element.innerWidth(),
              position: targetFixed ? "fixed" : "absolute",
            })
            .animate(animation, options.duration, options.easing, function () {
              transfer.remove();
              if ($.isFunction(done)) {
                done();
              }
            });
      },
    });
    function parseClip(str, element) {
      var outerWidth = element.outerWidth(),
        outerHeight = element.outerHeight(),
        clipRegex =
          /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
        values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0];
      return {
        top: parseFloat(values[1]) || 0,
        right: values[2] === "auto" ? outerWidth : parseFloat(values[2]),
        bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]),
        left: parseFloat(values[4]) || 0,
      };
    }
    $.fx.step.clip = function (fx) {
      if (!fx.clipInit) {
        fx.start = $(fx.elem).cssClip();
        if (typeof fx.end === "string") {
          fx.end = parseClip(fx.end, fx.elem);
        }
        fx.clipInit = !0;
      }
      $(fx.elem).cssClip({
        top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
        right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
        bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
        left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left,
      });
    };
  })();
  (function () {
    var baseEasings = {};
    $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, name) {
      baseEasings[name] = function (p) {
        return Math.pow(p, i + 2);
      };
    });
    $.extend(baseEasings, {
      Sine: function (p) {
        return 1 - Math.cos((p * Math.PI) / 2);
      },
      Circ: function (p) {
        return 1 - Math.sqrt(1 - p * p);
      },
      Elastic: function (p) {
        return p === 0 || p === 1
          ? p
          : -Math.pow(2, 8 * (p - 1)) *
              Math.sin((((p - 1) * 80 - 7.5) * Math.PI) / 15);
      },
      Back: function (p) {
        return p * p * (3 * p - 2);
      },
      Bounce: function (p) {
        var pow2,
          bounce = 4;
        while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
        return (
          1 / Math.pow(4, 3 - bounce) -
          7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2)
        );
      },
    });
    $.each(baseEasings, function (name, easeIn) {
      $.easing["easeIn" + name] = easeIn;
      $.easing["easeOut" + name] = function (p) {
        return 1 - easeIn(1 - p);
      };
      $.easing["easeInOut" + name] = function (p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
      };
    });
  })();
  var effect = $.effects;
  /*!
   * jQuery UI Effects Blind 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectBlind = $.effects.define(
    "blind",
    "hide",
    function (options, done) {
      var map = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        element = $(this),
        direction = options.direction || "up",
        start = element.cssClip(),
        animate = { clip: $.extend({}, start) },
        placeholder = $.effects.createPlaceholder(element);
      animate.clip[map[direction][0]] = animate.clip[map[direction][1]];
      if (options.mode === "show") {
        element.cssClip(animate.clip);
        if (placeholder) {
          placeholder.css($.effects.clipToBox(animate));
        }
        animate.clip = start;
      }
      if (placeholder) {
        placeholder.animate(
          $.effects.clipToBox(animate),
          options.duration,
          options.easing
        );
      }
      element.animate(animate, {
        queue: !1,
        duration: options.duration,
        easing: options.easing,
        complete: done,
      });
    }
  );
  /*!
   * jQuery UI Effects Bounce 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectBounce = $.effects.define(
    "bounce",
    function (options, done) {
      var upAnim,
        downAnim,
        refValue,
        element = $(this),
        mode = options.mode,
        hide = mode === "hide",
        show = mode === "show",
        direction = options.direction || "up",
        distance = options.distance,
        times = options.times || 5,
        anims = times * 2 + (show || hide ? 1 : 0),
        speed = options.duration / anims,
        easing = options.easing,
        ref = direction === "up" || direction === "down" ? "top" : "left",
        motion = direction === "up" || direction === "left",
        i = 0,
        queuelen = element.queue().length;
      $.effects.createPlaceholder(element);
      refValue = element.css(ref);
      if (!distance) {
        distance = element[ref === "top" ? "outerHeight" : "outerWidth"]() / 3;
      }
      if (show) {
        downAnim = { opacity: 1 };
        downAnim[ref] = refValue;
        element
          .css("opacity", 0)
          .css(ref, motion ? -distance * 2 : distance * 2)
          .animate(downAnim, speed, easing);
      }
      if (hide) {
        distance = distance / Math.pow(2, times - 1);
      }
      downAnim = {};
      downAnim[ref] = refValue;
      for (; i < times; i++) {
        upAnim = {};
        upAnim[ref] = (motion ? "-=" : "+=") + distance;
        element.animate(upAnim, speed, easing).animate(downAnim, speed, easing);
        distance = hide ? distance * 2 : distance / 2;
      }
      if (hide) {
        upAnim = { opacity: 0 };
        upAnim[ref] = (motion ? "-=" : "+=") + distance;
        element.animate(upAnim, speed, easing);
      }
      element.queue(done);
      $.effects.unshift(element, queuelen, anims + 1);
    }
  );
  /*!
   * jQuery UI Effects Clip 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectClip = $.effects.define(
    "clip",
    "hide",
    function (options, done) {
      var start,
        animate = {},
        element = $(this),
        direction = options.direction || "vertical",
        both = direction === "both",
        horizontal = both || direction === "horizontal",
        vertical = both || direction === "vertical";
      start = element.cssClip();
      animate.clip = {
        top: vertical ? (start.bottom - start.top) / 2 : start.top,
        right: horizontal ? (start.right - start.left) / 2 : start.right,
        bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
        left: horizontal ? (start.right - start.left) / 2 : start.left,
      };
      $.effects.createPlaceholder(element);
      if (options.mode === "show") {
        element.cssClip(animate.clip);
        animate.clip = start;
      }
      element.animate(animate, {
        queue: !1,
        duration: options.duration,
        easing: options.easing,
        complete: done,
      });
    }
  );
  /*!
   * jQuery UI Effects Drop 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectDrop = $.effects.define(
    "drop",
    "hide",
    function (options, done) {
      var distance,
        element = $(this),
        mode = options.mode,
        show = mode === "show",
        direction = options.direction || "left",
        ref = direction === "up" || direction === "down" ? "top" : "left",
        motion = direction === "up" || direction === "left" ? "-=" : "+=",
        oppositeMotion = motion === "+=" ? "-=" : "+=",
        animation = { opacity: 0 };
      $.effects.createPlaceholder(element);
      distance =
        options.distance ||
        element[ref === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
      animation[ref] = motion + distance;
      if (show) {
        element.css(animation);
        animation[ref] = oppositeMotion + distance;
        animation.opacity = 1;
      }
      element.animate(animation, {
        queue: !1,
        duration: options.duration,
        easing: options.easing,
        complete: done,
      });
    }
  );
  /*!
   * jQuery UI Effects Explode 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectExplode = $.effects.define(
    "explode",
    "hide",
    function (options, done) {
      var i,
        j,
        left,
        top,
        mx,
        my,
        rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3,
        cells = rows,
        element = $(this),
        mode = options.mode,
        show = mode === "show",
        offset = element.show().css("visibility", "hidden").offset(),
        width = Math.ceil(element.outerWidth() / cells),
        height = Math.ceil(element.outerHeight() / rows),
        pieces = [];
      function childComplete() {
        pieces.push(this);
        if (pieces.length === rows * cells) {
          animComplete();
        }
      }
      for (i = 0; i < rows; i++) {
        top = offset.top + i * height;
        my = i - (rows - 1) / 2;
        for (j = 0; j < cells; j++) {
          left = offset.left + j * width;
          mx = j - (cells - 1) / 2;
          element
            .clone()
            .appendTo("body")
            .wrap("<div></div>")
            .css({
              position: "absolute",
              visibility: "visible",
              left: -j * width,
              top: -i * height,
            })
            .parent()
            .addClass("ui-effects-explode")
            .css({
              position: "absolute",
              overflow: "hidden",
              width: width,
              height: height,
              left: left + (show ? mx * width : 0),
              top: top + (show ? my * height : 0),
              opacity: show ? 0 : 1,
            })
            .animate(
              {
                left: left + (show ? 0 : mx * width),
                top: top + (show ? 0 : my * height),
                opacity: show ? 1 : 0,
              },
              options.duration || 500,
              options.easing,
              childComplete
            );
        }
      }
      function animComplete() {
        element.css({ visibility: "visible" });
        $(pieces).remove();
        done();
      }
    }
  );
  /*!
   * jQuery UI Effects Fade 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectFade = $.effects.define(
    "fade",
    "toggle",
    function (options, done) {
      var show = options.mode === "show";
      $(this)
        .css("opacity", show ? 0 : 1)
        .animate(
          { opacity: show ? 1 : 0 },
          {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done,
          }
        );
    }
  );
  /*!
   * jQuery UI Effects Fold 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectFold = $.effects.define(
    "fold",
    "hide",
    function (options, done) {
      var element = $(this),
        mode = options.mode,
        show = mode === "show",
        hide = mode === "hide",
        size = options.size || 15,
        percent = /([0-9]+)%/.exec(size),
        horizFirst = !!options.horizFirst,
        ref = horizFirst ? ["right", "bottom"] : ["bottom", "right"],
        duration = options.duration / 2,
        placeholder = $.effects.createPlaceholder(element),
        start = element.cssClip(),
        animation1 = { clip: $.extend({}, start) },
        animation2 = { clip: $.extend({}, start) },
        distance = [start[ref[0]], start[ref[1]]],
        queuelen = element.queue().length;
      if (percent) {
        size = (parseInt(percent[1], 10) / 100) * distance[hide ? 0 : 1];
      }
      animation1.clip[ref[0]] = size;
      animation2.clip[ref[0]] = size;
      animation2.clip[ref[1]] = 0;
      if (show) {
        element.cssClip(animation2.clip);
        if (placeholder) {
          placeholder.css($.effects.clipToBox(animation2));
        }
        animation2.clip = start;
      }
      element
        .queue(function (next) {
          if (placeholder) {
            placeholder
              .animate(
                $.effects.clipToBox(animation1),
                duration,
                options.easing
              )
              .animate(
                $.effects.clipToBox(animation2),
                duration,
                options.easing
              );
          }
          next();
        })
        .animate(animation1, duration, options.easing)
        .animate(animation2, duration, options.easing)
        .queue(done);
      $.effects.unshift(element, queuelen, 4);
    }
  );
  /*!
   * jQuery UI Effects Highlight 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectHighlight = $.effects.define(
    "highlight",
    "show",
    function (options, done) {
      var element = $(this),
        animation = { backgroundColor: element.css("backgroundColor") };
      if (options.mode === "hide") {
        animation.opacity = 0;
      }
      $.effects.saveStyle(element);
      element
        .css({
          backgroundImage: "none",
          backgroundColor: options.color || "#ffff99",
        })
        .animate(animation, {
          queue: !1,
          duration: options.duration,
          easing: options.easing,
          complete: done,
        });
    }
  );
  /*!
   * jQuery UI Effects Size 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectSize = $.effects.define("size", function (options, done) {
    var baseline,
      factor,
      temp,
      element = $(this),
      cProps = ["fontSize"],
      vProps = [
        "borderTopWidth",
        "borderBottomWidth",
        "paddingTop",
        "paddingBottom",
      ],
      hProps = [
        "borderLeftWidth",
        "borderRightWidth",
        "paddingLeft",
        "paddingRight",
      ],
      mode = options.mode,
      restore = mode !== "effect",
      scale = options.scale || "both",
      origin = options.origin || ["middle", "center"],
      position = element.css("position"),
      pos = element.position(),
      original = $.effects.scaledDimensions(element),
      from = options.from || original,
      to = options.to || $.effects.scaledDimensions(element, 0);
    $.effects.createPlaceholder(element);
    if (mode === "show") {
      temp = from;
      from = to;
      to = temp;
    }
    factor = {
      from: {
        y: from.height / original.height,
        x: from.width / original.width,
      },
      to: { y: to.height / original.height, x: to.width / original.width },
    };
    if (scale === "box" || scale === "both") {
      if (factor.from.y !== factor.to.y) {
        from = $.effects.setTransition(element, vProps, factor.from.y, from);
        to = $.effects.setTransition(element, vProps, factor.to.y, to);
      }
      if (factor.from.x !== factor.to.x) {
        from = $.effects.setTransition(element, hProps, factor.from.x, from);
        to = $.effects.setTransition(element, hProps, factor.to.x, to);
      }
    }
    if (scale === "content" || scale === "both") {
      if (factor.from.y !== factor.to.y) {
        from = $.effects.setTransition(element, cProps, factor.from.y, from);
        to = $.effects.setTransition(element, cProps, factor.to.y, to);
      }
    }
    if (origin) {
      baseline = $.effects.getBaseline(origin, original);
      from.top =
        (original.outerHeight - from.outerHeight) * baseline.y + pos.top;
      from.left =
        (original.outerWidth - from.outerWidth) * baseline.x + pos.left;
      to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top;
      to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left;
    }
    element.css(from);
    if (scale === "content" || scale === "both") {
      vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps);
      hProps = hProps.concat(["marginLeft", "marginRight"]);
      element.find("*[width]").each(function () {
        var child = $(this),
          childOriginal = $.effects.scaledDimensions(child),
          childFrom = {
            height: childOriginal.height * factor.from.y,
            width: childOriginal.width * factor.from.x,
            outerHeight: childOriginal.outerHeight * factor.from.y,
            outerWidth: childOriginal.outerWidth * factor.from.x,
          },
          childTo = {
            height: childOriginal.height * factor.to.y,
            width: childOriginal.width * factor.to.x,
            outerHeight: childOriginal.height * factor.to.y,
            outerWidth: childOriginal.width * factor.to.x,
          };
        if (factor.from.y !== factor.to.y) {
          childFrom = $.effects.setTransition(
            child,
            vProps,
            factor.from.y,
            childFrom
          );
          childTo = $.effects.setTransition(
            child,
            vProps,
            factor.to.y,
            childTo
          );
        }
        if (factor.from.x !== factor.to.x) {
          childFrom = $.effects.setTransition(
            child,
            hProps,
            factor.from.x,
            childFrom
          );
          childTo = $.effects.setTransition(
            child,
            hProps,
            factor.to.x,
            childTo
          );
        }
        if (restore) {
          $.effects.saveStyle(child);
        }
        child.css(childFrom);
        child.animate(childTo, options.duration, options.easing, function () {
          if (restore) {
            $.effects.restoreStyle(child);
          }
        });
      });
    }
    element.animate(to, {
      queue: !1,
      duration: options.duration,
      easing: options.easing,
      complete: function () {
        var offset = element.offset();
        if (to.opacity === 0) {
          element.css("opacity", from.opacity);
        }
        if (!restore) {
          element
            .css("position", position === "static" ? "relative" : position)
            .offset(offset);
          $.effects.saveStyle(element);
        }
        done();
      },
    });
  });
  /*!
   * jQuery UI Effects Scale 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectScale = $.effects.define("scale", function (options, done) {
    var el = $(this),
      mode = options.mode,
      percent =
        parseInt(options.percent, 10) ||
        (parseInt(options.percent, 10) === 0 ? 0 : mode !== "effect" ? 0 : 100),
      newOptions = $.extend(
        !0,
        {
          from: $.effects.scaledDimensions(el),
          to: $.effects.scaledDimensions(
            el,
            percent,
            options.direction || "both"
          ),
          origin: options.origin || ["middle", "center"],
        },
        options
      );
    if (options.fade) {
      newOptions.from.opacity = 1;
      newOptions.to.opacity = 0;
    }
    $.effects.effect.size.call(this, newOptions, done);
  });
  /*!
   * jQuery UI Effects Puff 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectPuff = $.effects.define(
    "puff",
    "hide",
    function (options, done) {
      var newOptions = $.extend(!0, {}, options, {
        fade: !0,
        percent: parseInt(options.percent, 10) || 150,
      });
      $.effects.effect.scale.call(this, newOptions, done);
    }
  );
  /*!
   * jQuery UI Effects Pulsate 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectPulsate = $.effects.define(
    "pulsate",
    "show",
    function (options, done) {
      var element = $(this),
        mode = options.mode,
        show = mode === "show",
        hide = mode === "hide",
        showhide = show || hide,
        anims = (options.times || 5) * 2 + (showhide ? 1 : 0),
        duration = options.duration / anims,
        animateTo = 0,
        i = 1,
        queuelen = element.queue().length;
      if (show || !element.is(":visible")) {
        element.css("opacity", 0).show();
        animateTo = 1;
      }
      for (; i < anims; i++) {
        element.animate({ opacity: animateTo }, duration, options.easing);
        animateTo = 1 - animateTo;
      }
      element.animate({ opacity: animateTo }, duration, options.easing);
      element.queue(done);
      $.effects.unshift(element, queuelen, anims + 1);
    }
  );
  /*!
   * jQuery UI Effects Shake 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectShake = $.effects.define("shake", function (options, done) {
    var i = 1,
      element = $(this),
      direction = options.direction || "left",
      distance = options.distance || 20,
      times = options.times || 3,
      anims = times * 2 + 1,
      speed = Math.round(options.duration / anims),
      ref = direction === "up" || direction === "down" ? "top" : "left",
      positiveMotion = direction === "up" || direction === "left",
      animation = {},
      animation1 = {},
      animation2 = {},
      queuelen = element.queue().length;
    $.effects.createPlaceholder(element);
    animation[ref] = (positiveMotion ? "-=" : "+=") + distance;
    animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2;
    animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2;
    element.animate(animation, speed, options.easing);
    for (; i < times; i++) {
      element
        .animate(animation1, speed, options.easing)
        .animate(animation2, speed, options.easing);
    }
    element
      .animate(animation1, speed, options.easing)
      .animate(animation, speed / 2, options.easing)
      .queue(done);
    $.effects.unshift(element, queuelen, anims + 1);
  });
  /*!
   * jQuery UI Effects Slide 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effectsEffectSlide = $.effects.define(
    "slide",
    "show",
    function (options, done) {
      var startClip,
        startRef,
        element = $(this),
        map = {
          up: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          right: ["left", "right"],
        },
        mode = options.mode,
        direction = options.direction || "left",
        ref = direction === "up" || direction === "down" ? "top" : "left",
        positiveMotion = direction === "up" || direction === "left",
        distance =
          options.distance ||
          element[ref === "top" ? "outerHeight" : "outerWidth"](!0),
        animation = {};
      $.effects.createPlaceholder(element);
      startClip = element.cssClip();
      startRef = element.position()[ref];
      animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef;
      animation.clip = element.cssClip();
      animation.clip[map[direction][1]] = animation.clip[map[direction][0]];
      if (mode === "show") {
        element.cssClip(animation.clip);
        element.css(ref, animation[ref]);
        animation.clip = startClip;
        animation[ref] = startRef;
      }
      element.animate(animation, {
        queue: !1,
        duration: options.duration,
        easing: options.easing,
        complete: done,
      });
    }
  );
  /*!
   * jQuery UI Effects Transfer 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var effect;
  if ($.uiBackCompat !== !1) {
    effect = $.effects.define("transfer", function (options, done) {
      $(this).transfer(options, done);
    });
  }
  var effectsEffectTransfer = effect;
});
var $jscomp = {
  scope: {},
  findInternal: function (a, l, d) {
    a instanceof String && (a = String(a));
    for (var p = a.length, h = 0; h < p; h++) {
      var b = a[h];
      if (l.call(d, b, h, a)) return { i: h, v: b };
    }
    return { i: -1, v: void 0 };
  },
};
$jscomp.defineProperty =
  "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, l, d) {
        if (d.get || d.set)
          throw new TypeError("ES3 does not support getters and setters.");
        a != Array.prototype && a != Object.prototype && (a[l] = d.value);
      };
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a
    ? a
    : "undefined" != typeof global && null != global
    ? global
    : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, l, d, p) {
  if (l) {
    d = $jscomp.global;
    a = a.split(".");
    for (p = 0; p < a.length - 1; p++) {
      var h = a[p];
      h in d || (d[h] = {});
      d = d[h];
    }
    a = a[a.length - 1];
    p = d[a];
    l = l(p);
    l != p &&
      null != l &&
      $jscomp.defineProperty(d, a, {
        configurable: !0,
        writable: !0,
        value: l,
      });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (a, d) {
          return $jscomp.findInternal(this, a, d).v;
        };
  },
  "es6-impl",
  "es3"
);
(function (a, l, d) {
  "function" === typeof define && define.amd
    ? define(["jquery"], a)
    : "object" === typeof exports
    ? (module.exports = a(require("jquery")))
    : a(l || d);
})(
  function (a) {
    var l = function (b, e, f) {
      var c = {
        invalid: [],
        getCaret: function () {
          try {
            var a,
              r = 0,
              g = b.get(0),
              e = document.selection,
              f = g.selectionStart;
            if (e && -1 === navigator.appVersion.indexOf("MSIE 10"))
              (a = e.createRange()),
                a.moveStart("character", -c.val().length),
                (r = a.text.length);
            else if (f || "0" === f) r = f;
            return r;
          } catch (C) {}
        },
        setCaret: function (a) {
          try {
            if (b.is(":focus")) {
              var c,
                g = b.get(0);
              g.setSelectionRange
                ? g.setSelectionRange(a, a)
                : ((c = g.createTextRange()),
                  c.collapse(!0),
                  c.moveEnd("character", a),
                  c.moveStart("character", a),
                  c.select());
            }
          } catch (B) {}
        },
        events: function () {
          b.on("keydown.mask", function (a) {
            b.data("mask-keycode", a.keyCode || a.which);
            b.data("mask-previus-value", b.val());
            b.data("mask-previus-caret-pos", c.getCaret());
            c.maskDigitPosMapOld = c.maskDigitPosMap;
          })
            .on(
              a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
              c.behaviour
            )
            .on("paste.mask drop.mask", function () {
              setTimeout(function () {
                b.keydown().keyup();
              }, 100);
            })
            .on("change.mask", function () {
              b.data("changed", !0);
            })
            .on("blur.mask", function () {
              d === c.val() || b.data("changed") || b.trigger("change");
              b.data("changed", !1);
            })
            .on("blur.mask", function () {
              d = c.val();
            })
            .on("focus.mask", function (b) {
              !0 === f.selectOnFocus && a(b.target).select();
            })
            .on("focusout.mask", function () {
              f.clearIfNotMatch && !h.test(c.val()) && c.val("");
            });
        },
        getRegexMask: function () {
          for (var a = [], b, c, f, n, d = 0; d < e.length; d++)
            (b = m.translation[e.charAt(d)])
              ? ((c = b.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                (f = b.optional),
                (b = b.recursive)
                  ? (a.push(e.charAt(d)),
                    (n = { digit: e.charAt(d), pattern: c }))
                  : a.push(f || b ? c + "?" : c))
              : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          a = a.join("");
          n &&
            (a = a
              .replace(
                new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"),
                "($1)?"
              )
              .replace(new RegExp(n.digit, "g"), n.pattern));
          return new RegExp(a);
        },
        destroyEvents: function () {
          b.off(
            "input keydown keyup paste drop blur focusout "
              .split(" ")
              .join(".mask ")
          );
        },
        val: function (a) {
          var c = b.is("input") ? "val" : "text";
          if (0 < arguments.length) {
            if (b[c]() !== a) b[c](a);
            c = b;
          } else c = b[c]();
          return c;
        },
        calculateCaretPosition: function () {
          var a = b.data("mask-previus-value") || "",
            e = c.getMasked(),
            g = c.getCaret();
          if (a !== e) {
            var f = b.data("mask-previus-caret-pos") || 0,
              e = e.length,
              d = a.length,
              m = (a = 0),
              h = 0,
              l = 0,
              k;
            for (k = g; k < e && c.maskDigitPosMap[k]; k++) m++;
            for (k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) a++;
            for (k = g - 1; 0 <= k; k--) c.maskDigitPosMap[k] && h++;
            for (k = f - 1; 0 <= k; k--) c.maskDigitPosMapOld[k] && l++;
            g > d
              ? (g = 10 * e)
              : f >= g && f !== d
              ? c.maskDigitPosMapOld[g] ||
                ((f = g),
                (g = g - (l - h) - a),
                c.maskDigitPosMap[g] && (g = f))
              : g > f && (g = g + (h - l) + m);
          }
          return g;
        },
        behaviour: function (f) {
          f = f || window.event;
          c.invalid = [];
          var e = b.data("mask-keycode");
          if (-1 === a.inArray(e, m.byPassKeys)) {
            var e = c.getMasked(),
              g = c.getCaret();
            setTimeout(function () {
              c.setCaret(c.calculateCaretPosition());
            }, a.jMaskGlobals.keyStrokeCompensation);
            c.val(e);
            c.setCaret(g);
            return c.callbacks(f);
          }
        },
        getMasked: function (a, b) {
          var g = [],
            d = void 0 === b ? c.val() : b + "",
            n = 0,
            h = e.length,
            q = 0,
            l = d.length,
            k = 1,
            r = "push",
            p = -1,
            t = 0,
            y = [],
            v,
            z;
          f.reverse
            ? ((r = "unshift"),
              (k = -1),
              (v = 0),
              (n = h - 1),
              (q = l - 1),
              (z = function () {
                return -1 < n && -1 < q;
              }))
            : ((v = h - 1),
              (z = function () {
                return n < h && q < l;
              }));
          for (var A; z(); ) {
            var x = e.charAt(n),
              w = d.charAt(q),
              u = m.translation[x];
            if (u)
              w.match(u.pattern)
                ? (g[r](w),
                  u.recursive &&
                    (-1 === p ? (p = n) : n === v && n !== p && (n = p - k),
                    v === p && (n -= k)),
                  (n += k))
                : w === A
                ? (t--, (A = void 0))
                : u.optional
                ? ((n += k), (q -= k))
                : u.fallback
                ? (g[r](u.fallback), (n += k), (q -= k))
                : c.invalid.push({ p: q, v: w, e: u.pattern }),
                (q += k);
            else {
              if (!a) g[r](x);
              w === x ? (y.push(q), (q += k)) : ((A = x), y.push(q + t), t++);
              n += k;
            }
          }
          d = e.charAt(v);
          h !== l + 1 || m.translation[d] || g.push(d);
          g = g.join("");
          c.mapMaskdigitPositions(g, y, l);
          return g;
        },
        mapMaskdigitPositions: function (a, b, e) {
          a = f.reverse ? a.length - e : 0;
          c.maskDigitPosMap = {};
          for (e = 0; e < b.length; e++) c.maskDigitPosMap[b[e] + a] = 1;
        },
        callbacks: function (a) {
          var h = c.val(),
            g = h !== d,
            m = [h, a, b, f],
            q = function (a, b, c) {
              "function" === typeof f[a] && b && f[a].apply(this, c);
            };
          q("onChange", !0 === g, m);
          q("onKeyPress", !0 === g, m);
          q("onComplete", h.length === e.length, m);
          q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f]);
        },
      };
      b = a(b);
      var m = this,
        d = c.val(),
        h;
      e = "function" === typeof e ? e(c.val(), void 0, b, f) : e;
      m.mask = e;
      m.options = f;
      m.remove = function () {
        var a = c.getCaret();
        m.options.placeholder && b.removeAttr("placeholder");
        b.data("mask-maxlength") && b.removeAttr("maxlength");
        c.destroyEvents();
        c.val(m.getCleanVal());
        c.setCaret(a);
        return b;
      };
      m.getCleanVal = function () {
        return c.getMasked(!0);
      };
      m.getMaskedVal = function (a) {
        return c.getMasked(!1, a);
      };
      m.init = function (d) {
        d = d || !1;
        f = f || {};
        m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
        m.byPassKeys = a.jMaskGlobals.byPassKeys;
        m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation);
        m = a.extend(!0, {}, m, f);
        h = c.getRegexMask();
        if (d) c.events(), c.val(c.getMasked());
        else {
          f.placeholder && b.attr("placeholder", f.placeholder);
          b.data("mask") && b.attr("autocomplete", "off");
          d = 0;
          for (var l = !0; d < e.length; d++) {
            var g = m.translation[e.charAt(d)];
            if (g && g.recursive) {
              l = !1;
              break;
            }
          }
          l && b.attr("maxlength", e.length).data("mask-maxlength", !0);
          c.destroyEvents();
          c.events();
          d = c.getCaret();
          c.val(c.getMasked());
          c.setCaret(d);
        }
      };
      m.init(!b.is("input"));
    };
    a.maskWatchers = {};
    var d = function () {
        var b = a(this),
          e = {},
          f = b.attr("data-mask");
        b.attr("data-mask-reverse") && (e.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
        if (p(b, f, e)) return b.data("mask", new l(this, f, e));
      },
      p = function (b, e, f) {
        f = f || {};
        var c = a(b).data("mask"),
          d = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
          return (
            "function" === typeof e && (e = e(b)),
            "object" !== typeof c || d(c.options) !== d(f) || c.mask !== e
          );
        } catch (t) {}
      },
      h = function (a) {
        var b = document.createElement("div"),
          d;
        a = "on" + a;
        d = a in b;
        d || (b.setAttribute(a, "return;"), (d = "function" === typeof b[a]));
        return d;
      };
    a.fn.mask = function (b, d) {
      d = d || {};
      var e = this.selector,
        c = a.jMaskGlobals,
        h = c.watchInterval,
        c = d.watchInputs || c.watchInputs,
        t = function () {
          if (p(this, b, d)) return a(this).data("mask", new l(this, b, d));
        };
      a(this).each(t);
      e &&
        "" !== e &&
        c &&
        (clearInterval(a.maskWatchers[e]),
        (a.maskWatchers[e] = setInterval(function () {
          a(document).find(e).each(t);
        }, h)));
      return this;
    };
    a.fn.masked = function (a) {
      return this.data("mask").getMaskedVal(a);
    };
    a.fn.unmask = function () {
      clearInterval(a.maskWatchers[this.selector]);
      delete a.maskWatchers[this.selector];
      return this.each(function () {
        var b = a(this).data("mask");
        b && b.remove().removeData("mask");
      });
    };
    a.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };
    a.applyDataMask = function (b) {
      b = b || a.jMaskGlobals.maskElements;
      (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d);
    };
    h = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput:
        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
        h("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: { pattern: /\d/ },
        9: { pattern: /\d/, optional: !0 },
        "#": { pattern: /\d/, recursive: !0 },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
      },
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals);
    h.dataMask && a.applyDataMask();
    setInterval(function () {
      a.jMaskGlobals.watchDataMask && a.applyDataMask();
    }, h.watchInterval);
  },
  window.jQuery,
  window.Zepto
);
/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e;
                return (
                  !c.settings.submitHandler ||
                  (c.submitButton &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                  c.submitButton && d.remove(),
                  void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (null != j && null != j.form) {
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (b, c) {
                    (i[c] = f[c]),
                      delete f[c],
                      "required" === c && a(j).removeAttr("aria-required");
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g)),
            a(j).attr("aria-required", "true")),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  }),
    a.extend(a.expr.pseudos || a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + a(b).val());
      },
      filled: function (b) {
        var c = a(b).val();
        return null !== c && !!a.trim("" + c);
      },
      unchecked: function (b) {
        return !a(b).prop("checked");
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: a.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            !this.form &&
              this.hasAttribute("contenteditable") &&
              (this.form = a(this).closest("form")[0]);
            var c = a.data(this.form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ""
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) a[b] && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr("name");
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.hasAttribute("contenteditable") &&
                  (this.form = a(this).closest("form")[0]),
                !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type;
          return "radio" === f || "checkbox" === f
            ? this.findByName(b.name).filter(":checked").val()
            : "number" === f && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? "NaN"
              : e.val()
            : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
              "file" === f
                ? "C:\\fakepath\\" === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf("/")),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf("\\")),
                        d >= 0 ? c.substr(d + 1) : c))
                : "string" == typeof c
                ? c.replace(/\r/g, "")
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          if ("function" == typeof f.normalizer) {
            if (((i = f.normalizer.call(b, i)), "string" != typeof i))
              throw new TypeError(
                "The normalizer should return a string value."
              );
            delete f.normalizer;
          }
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    j
                  ),
                j instanceof TypeError &&
                  (j.message +=
                    ".  Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                j)
              );
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          "string" == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a("<" + this.settings.errorElement + ">")
                .attr("id", i + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is("label")
                ? h.attr("for", i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr("id")),
                  j
                    ? j.match(
                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                      ) || (j += " " + f)
                    : (j = f),
                  a(b).attr("aria-describedby", j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr("aria-describedby", h.attr("id"));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(""),
              "string" == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ("string" == typeof c && c) || "remote"),
            a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator")
              .find(".validate-equalTo-blur")
              .off(".validate-equalTo")
              .removeClass("validate-equalTo-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, "validator").resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e <= d;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ("" + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not(".validate-equalTo-blur").length &&
              e
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return "dependency-mismatch";
          e = ("string" == typeof e && e) || "remote";
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ("string" == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || "true" === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    });
  var b,
    c = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port;
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments);
        })),
    a
  );
});
/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./jquery.validate.min"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  return (
    (function () {
      function b(a) {
        return a
          .replace(/<.[^<>]*?>/g, " ")
          .replace(/&nbsp;|&#160;/gi, " ")
          .replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
      }
      a.validator.addMethod(
        "maxWords",
        function (a, c, d) {
          return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d;
        },
        a.validator.format("Please enter {0} words or less.")
      ),
        a.validator.addMethod(
          "minWords",
          function (a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d;
          },
          a.validator.format("Please enter at least {0} words.")
        ),
        a.validator.addMethod(
          "rangeWords",
          function (a, c, d) {
            var e = b(a),
              f = /\b\w+\b/g;
            return (
              this.optional(c) ||
              (e.match(f).length >= d[0] && e.match(f).length <= d[1])
            );
          },
          a.validator.format("Please enter between {0} and {1} words.")
        );
    })(),
    a.validator.addMethod(
      "abaRoutingNumber",
      function (a) {
        var b = 0,
          c = a.split(""),
          d = c.length;
        if (9 !== d) return !1;
        for (var e = 0; e < d; e += 3)
          b +=
            3 * parseInt(c[e], 10) +
            7 * parseInt(c[e + 1], 10) +
            parseInt(c[e + 2], 10);
        return 0 !== b && b % 10 === 0;
      },
      "Please enter a valid routing number."
    ),
    a.validator.addMethod(
      "accept",
      function (b, c, d) {
        var e,
          f,
          g,
          h = "string" == typeof d ? d.replace(/\s/g, "") : "image/*",
          i = this.optional(c);
        if (i) return i;
        if (
          "file" === a(c).attr("type") &&
          ((h = h
            .replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&")
            .replace(/,/g, "|")
            .replace(/\/\*/g, "/.*")),
          c.files && c.files.length)
        )
          for (
            g = new RegExp(".?(" + h + ")$", "i"), e = 0;
            e < c.files.length;
            e++
          )
            if (((f = c.files[e]), !f.type.match(g))) return !1;
        return !0;
      },
      a.validator.format("Please enter a value with a valid mimetype.")
    ),
    a.validator.addMethod(
      "alphanumeric",
      function (a, b) {
        return this.optional(b) || /^\w+$/i.test(a);
      },
      "Letters, numbers, and underscores only please"
    ),
    a.validator.addMethod(
      "bankaccountNL",
      function (a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c,
          d,
          e,
          f = a.replace(/ /g, ""),
          g = 0,
          h = f.length;
        for (c = 0; c < h; c++)
          (d = h - c), (e = f.substring(c, c + 1)), (g += d * e);
        return g % 11 === 0;
      },
      "Please specify a valid bank account number"
    ),
    a.validator.addMethod(
      "bankorgiroaccountNL",
      function (b, c) {
        return (
          this.optional(c) ||
          a.validator.methods.bankaccountNL.call(this, b, c) ||
          a.validator.methods.giroaccountNL.call(this, b, c)
        );
      },
      "Please specify a valid bank or giro account number"
    ),
    a.validator.addMethod(
      "bic",
      function (a, b) {
        return (
          this.optional(b) ||
          /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(
            a.toUpperCase()
          )
        );
      },
      "Please specify a valid BIC code"
    ),
    a.validator.addMethod(
      "cifES",
      function (a, b) {
        "use strict";
        function c(a) {
          return a % 2 === 0;
        }
        if (this.optional(b)) return !0;
        var d,
          e,
          f,
          g,
          h = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
          i = a.substring(0, 1),
          j = a.substring(1, 8),
          k = a.substring(8, 9),
          l = 0,
          m = 0,
          n = 0;
        if (9 !== a.length || !h.test(a)) return !1;
        for (d = 0; d < j.length; d++)
          (e = parseInt(j[d], 10)),
            c(d) ? ((e *= 2), (n += e < 10 ? e : e - 9)) : (m += e);
        return (
          (l = m + n),
          (f = (10 - l.toString().substr(-1)).toString()),
          (f = parseInt(f, 10) > 9 ? "0" : f),
          (g = "JABCDEFGHI".substr(f, 1).toString()),
          i.match(/[ABEH]/)
            ? k === f
            : i.match(/[KPQS]/)
            ? k === g
            : k === f || k === g
        );
      },
      "Please specify a valid CIF number."
    ),
    a.validator.addMethod(
      "cnhBR",
      function (a) {
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")),
          11 !== a.length)
        )
          return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = 0;
        if (((b = a.charAt(0)), new Array(12).join(b) === a)) return !1;
        for (e = 0, f = 9, g = 0; e < 9; ++e, --f) h += +(a.charAt(e) * f);
        for (
          c = h % 11, c >= 10 && ((c = 0), (i = 2)), h = 0, e = 0, f = 1, g = 0;
          e < 9;
          ++e, ++f
        )
          h += +(a.charAt(e) * f);
        return (
          (d = h % 11),
          d >= 10 ? (d = 0) : (d -= i),
          String(c).concat(d) === a.substr(-2)
        );
      },
      "Please specify a valid CNH number"
    ),
    a.validator.addMethod(
      "cnpjBR",
      function (a, b) {
        "use strict";
        if (this.optional(b)) return !0;
        if (((a = a.replace(/[^\d]+/g, "")), 14 !== a.length)) return !1;
        if (
          "00000000000000" === a ||
          "11111111111111" === a ||
          "22222222222222" === a ||
          "33333333333333" === a ||
          "44444444444444" === a ||
          "55555555555555" === a ||
          "66666666666666" === a ||
          "77777777777777" === a ||
          "88888888888888" === a ||
          "99999999999999" === a
        )
          return !1;
        for (
          var c = a.length - 2,
            d = a.substring(0, c),
            e = a.substring(c),
            f = 0,
            g = c - 7,
            h = c;
          h >= 1;
          h--
        )
          (f += d.charAt(c - h) * g--), g < 2 && (g = 9);
        var i = f % 11 < 2 ? 0 : 11 - (f % 11);
        if (i !== parseInt(e.charAt(0), 10)) return !1;
        (c += 1), (d = a.substring(0, c)), (f = 0), (g = c - 7);
        for (var j = c; j >= 1; j--)
          (f += d.charAt(c - j) * g--), g < 2 && (g = 9);
        return (
          (i = f % 11 < 2 ? 0 : 11 - (f % 11)), i === parseInt(e.charAt(1), 10)
        );
      },
      "Please specify a CNPJ value number"
    ),
    a.validator.addMethod(
      "cpfBR",
      function (a, b) {
        "use strict";
        if (this.optional(b)) return !0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")),
          11 !== a.length)
        )
          return !1;
        var c,
          d,
          e,
          f,
          g = 0;
        if (
          ((c = parseInt(a.substring(9, 10), 10)),
          (d = parseInt(a.substring(10, 11), 10)),
          (e = function (a, b) {
            var c = (10 * a) % 11;
            return (10 !== c && 11 !== c) || (c = 0), c === b;
          }),
          "" === a ||
            "00000000000" === a ||
            "11111111111" === a ||
            "22222222222" === a ||
            "33333333333" === a ||
            "44444444444" === a ||
            "55555555555" === a ||
            "66666666666" === a ||
            "77777777777" === a ||
            "88888888888" === a ||
            "99999999999" === a)
        )
          return !1;
        for (f = 1; f <= 9; f++)
          g += parseInt(a.substring(f - 1, f), 10) * (11 - f);
        if (e(g, c)) {
          for (g = 0, f = 1; f <= 10; f++)
            g += parseInt(a.substring(f - 1, f), 10) * (12 - f);
          return e(g, d);
        }
        return !1;
      },
      "Please specify a valid CPF number"
    ),
    a.validator.addMethod(
      "creditcard",
      function (a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c,
          d,
          e = 0,
          f = 0,
          g = !1;
        if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
          return !1;
        for (c = a.length - 1; c >= 0; c--)
          (d = a.charAt(c)),
            (f = parseInt(d, 10)),
            g && (f *= 2) > 9 && (f -= 9),
            (e += f),
            (g = !g);
        return e % 10 === 0;
      },
      "Please enter a valid credit card number."
    ),
    a.validator.addMethod(
      "creditcardtypes",
      function (a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, "");
        var d = 0;
        return (
          c.mastercard && (d |= 1),
          c.visa && (d |= 2),
          c.amex && (d |= 4),
          c.dinersclub && (d |= 8),
          c.enroute && (d |= 16),
          c.discover && (d |= 32),
          c.jcb && (d |= 64),
          c.unknown && (d |= 128),
          c.all && (d = 255),
          1 & d && (/^(5[12345])/.test(a) || /^(2[234567])/.test(a))
            ? 16 === a.length
            : 2 & d && /^(4)/.test(a)
            ? 16 === a.length
            : 4 & d && /^(3[47])/.test(a)
            ? 15 === a.length
            : 8 & d && /^(3(0[012345]|[68]))/.test(a)
            ? 14 === a.length
            : 16 & d && /^(2(014|149))/.test(a)
            ? 15 === a.length
            : 32 & d && /^(6011)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(3)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(2131|1800)/.test(a)
            ? 15 === a.length
            : !!(128 & d)
        );
      },
      "Please enter a valid credit card number."
    ),
    a.validator.addMethod(
      "currency",
      function (a, b, c) {
        var d,
          e = "string" == typeof c,
          f = e ? c : c[0],
          g = !!e || c[1];
        return (
          (f = f.replace(/,/g, "")),
          (f = g ? f + "]" : f + "]?"),
          (d =
            "^[" +
            f +
            "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$"),
          (d = new RegExp(d)),
          this.optional(b) || d.test(a)
        );
      },
      "Please specify a valid currency"
    ),
    a.validator.addMethod(
      "dateFA",
      function (a, b) {
        return (
          this.optional(b) ||
          /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      "dateITA",
      function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = !1,
          i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return (
          i.test(a)
            ? ((c = a.split("/")),
              (d = parseInt(c[0], 10)),
              (e = parseInt(c[1], 10)),
              (f = parseInt(c[2], 10)),
              (g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0))),
              (h =
                g.getUTCFullYear() === f &&
                g.getUTCMonth() === e - 1 &&
                g.getUTCDate() === d))
            : (h = !1),
          this.optional(b) || h
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      "dateNL",
      function (a, b) {
        return (
          this.optional(b) ||
          /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      "extension",
      function (a, b, c) {
        return (
          (c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif"),
          this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i"))
        );
      },
      a.validator.format("Please enter a value with a valid extension.")
    ),
    a.validator.addMethod(
      "giroaccountNL",
      function (a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a);
      },
      "Please specify a valid giro account number"
    ),
    a.validator.addMethod(
      "greaterThan",
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not(".validate-greaterThan-blur").length &&
            e
              .addClass("validate-greaterThan-blur")
              .on("blur.validate-greaterThan", function () {
                a(c).valid();
              }),
          b > e.val()
        );
      },
      "Please enter a greater value."
    ),
    a.validator.addMethod(
      "greaterThanEqual",
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not(".validate-greaterThanEqual-blur").length &&
            e
              .addClass("validate-greaterThanEqual-blur")
              .on("blur.validate-greaterThanEqual", function () {
                a(c).valid();
              }),
          b >= e.val()
        );
      },
      "Please enter a greater value."
    ),
    a.validator.addMethod(
      "iban",
      function (a, b) {
        if (this.optional(b)) return !0;
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = a.replace(/ /g, "").toUpperCase(),
          m = "",
          n = !0,
          o = "",
          p = "",
          q = 5;
        if (l.length < q) return !1;
        if (
          ((c = l.substring(0, 2)),
          (h = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}",
          }),
          (g = h[c]),
          "undefined" != typeof g &&
            ((i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", "")), !i.test(l)))
        )
          return !1;
        for (
          d = l.substring(4, l.length) + l.substring(0, 4), j = 0;
          j < d.length;
          j++
        )
          (e = d.charAt(j)),
            "0" !== e && (n = !1),
            n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
        for (k = 0; k < m.length; k++)
          (f = m.charAt(k)), (p = "" + o + f), (o = p % 97);
        return 1 === o;
      },
      "Please specify a valid IBAN"
    ),
    a.validator.addMethod(
      "integer",
      function (a, b) {
        return this.optional(b) || /^-?\d+$/.test(a);
      },
      "A positive or negative non-decimal number please"
    ),
    a.validator.addMethod(
      "ipv4",
      function (a, b) {
        return (
          this.optional(b) ||
          /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
            a
          )
        );
      },
      "Please enter a valid IP v4 address."
    ),
    a.validator.addMethod(
      "ipv6",
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
            a
          )
        );
      },
      "Please enter a valid IP v6 address."
    ),
    a.validator.addMethod(
      "lessThan",
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not(".validate-lessThan-blur").length &&
            e
              .addClass("validate-lessThan-blur")
              .on("blur.validate-lessThan", function () {
                a(c).valid();
              }),
          b < e.val()
        );
      },
      "Please enter a lesser value."
    ),
    a.validator.addMethod(
      "lessThanEqual",
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not(".validate-lessThanEqual-blur").length &&
            e
              .addClass("validate-lessThanEqual-blur")
              .on("blur.validate-lessThanEqual", function () {
                a(c).valid();
              }),
          b <= e.val()
        );
      },
      "Please enter a lesser value."
    ),
    a.validator.addMethod(
      "lettersonly",
      function (a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a);
      },
      "Letters only please"
    ),
    a.validator.addMethod(
      "letterswithbasicpunc",
      function (a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a);
      },
      "Letters or punctuation only please"
    ),
    a.validator.addMethod(
      "maxfiles",
      function (b, c, d) {
        return (
          !!this.optional(c) ||
          !("file" === a(c).attr("type") && c.files && c.files.length > d)
        );
      },
      a.validator.format("Please select no more than {0} files.")
    ),
    a.validator.addMethod(
      "maxsize",
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ("file" === a(c).attr("type") && c.files && c.files.length)
          for (var e = 0; e < c.files.length; e++)
            if (c.files[e].size > d) return !1;
        return !0;
      },
      a.validator.format("File size must not exceed {0} bytes each.")
    ),
    a.validator.addMethod(
      "maxsizetotal",
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ("file" === a(c).attr("type") && c.files && c.files.length)
          for (var e = 0, f = 0; f < c.files.length; f++)
            if (((e += c.files[f].size), e > d)) return !1;
        return !0;
      },
      a.validator.format("Total size of all files must not exceed {0} bytes.")
    ),
    a.validator.addMethod(
      "mobileNL",
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      "Please specify a valid mobile number"
    ),
    a.validator.addMethod(
      "mobileRU",
      function (a, b) {
        var c = a.replace(/\(|\)|\s+|-/g, "");
        return (
          this.optional(b) ||
          (c.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(c))
        );
      },
      "Please specify a valid mobile number"
    ),
    a.validator.addMethod(
      "mobileUK",
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, "")),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/
              ))
        );
      },
      "Please specify a valid mobile number"
    ),
    a.validator.addMethod(
      "netmask",
      function (a, b) {
        return (
          this.optional(b) ||
          /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(
            a
          )
        );
      },
      "Please enter a valid netmask."
    ),
    a.validator.addMethod(
      "nieES",
      function (a, b) {
        "use strict";
        if (this.optional(b)) return !0;
        var c,
          d = new RegExp(
            /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi
          ),
          e = "TRWAGMYFPDXBNJZSQVHLCKET",
          f = a.substr(a.length - 1).toUpperCase();
        return (
          (a = a.toString().toUpperCase()),
          !(a.length > 10 || a.length < 9 || !d.test(a)) &&
            ((a = a
              .replace(/^[X]/, "0")
              .replace(/^[Y]/, "1")
              .replace(/^[Z]/, "2")),
            (c = 9 === a.length ? a.substr(0, 8) : a.substr(0, 9)),
            e.charAt(parseInt(c, 10) % 23) === f)
        );
      },
      "Please specify a valid NIE number."
    ),
    a.validator.addMethod(
      "nifES",
      function (a, b) {
        "use strict";
        return (
          !!this.optional(b) ||
          ((a = a.toUpperCase()),
          !!a.match(
            "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"
          ) &&
            (/^[0-9]{8}[A-Z]{1}$/.test(a)
              ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) ===
                a.charAt(8)
              : !!/^[KLM]{1}/.test(a) &&
                a[8] ===
                  "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 1) % 23)))
        );
      },
      "Please specify a valid NIF number."
    ),
    a.validator.addMethod(
      "nipPL",
      function (a) {
        "use strict";
        if (((a = a.replace(/[^0-9]/g, "")), 10 !== a.length)) return !1;
        for (var b = [6, 5, 7, 2, 3, 4, 5, 6, 7], c = 0, d = 0; d < 9; d++)
          c += b[d] * a[d];
        var e = c % 11,
          f = 10 === e ? 0 : e;
        return f === parseInt(a[9], 10);
      },
      "Please specify a valid NIP number."
    ),
    a.validator.addMethod(
      "nisBR",
      function (a) {
        var b,
          c,
          d,
          e,
          f,
          g = 0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")),
          11 !== a.length)
        )
          return !1;
        for (
          c = parseInt(a.substring(10, 11), 10),
            b = parseInt(a.substring(0, 10), 10),
            e = 2;
          e < 12;
          e++
        )
          (f = e),
            10 === e && (f = 2),
            11 === e && (f = 3),
            (g += (b % 10) * f),
            (b = parseInt(b / 10, 10));
        return (d = g % 11), (d = d > 1 ? 11 - d : 0), c === d;
      },
      "Please specify a valid NIS/PIS number"
    ),
    a.validator.addMethod(
      "notEqualTo",
      function (b, c, d) {
        return (
          this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
        );
      },
      "Please enter a different value, values must not be the same."
    ),
    a.validator.addMethod(
      "nowhitespace",
      function (a, b) {
        return this.optional(b) || /^\S+$/i.test(a);
      },
      "No white space please"
    ),
    a.validator.addMethod(
      "pattern",
      function (a, b, c) {
        return (
          !!this.optional(b) ||
          ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")),
          c.test(a))
        );
      },
      "Invalid format."
    ),
    a.validator.addMethod(
      "phoneNL",
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      "Please specify a valid phone number."
    ),
    a.validator.addMethod(
      "phonePL",
      function (a, b) {
        a = a.replace(/\s+/g, "");
        var c =
          /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
        return this.optional(b) || c.test(a);
      },
      "Please specify a valid phone number"
    ),
    a.validator.addMethod(
      "phonesUK",
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, "")),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/
              ))
        );
      },
      "Please specify a valid uk phone number"
    ),
    a.validator.addMethod(
      "phoneUK",
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, "")),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
              ))
        );
      },
      "Please specify a valid phone number"
    ),
    a.validator.addMethod(
      "phoneUS",
      function (a, b) {
        return (
          (a = a.replace(/\s+/g, "")),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/
              ))
        );
      },
      "Please specify a valid phone number"
    ),
    a.validator.addMethod(
      "postalcodeBR",
      function (a, b) {
        return (
          this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
        );
      },
      "Informe um CEP válido."
    ),
    a.validator.addMethod(
      "postalCodeCA",
      function (a, b) {
        return (
          this.optional(b) ||
          /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
            a
          )
        );
      },
      "Please specify a valid postal code"
    ),
    a.validator.addMethod(
      "postalcodeIT",
      function (a, b) {
        return this.optional(b) || /^\d{5}$/.test(a);
      },
      "Please specify a valid postal code"
    ),
    a.validator.addMethod(
      "postalcodeNL",
      function (a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a);
      },
      "Please specify a valid postal code"
    ),
    a.validator.addMethod(
      "postcodeUK",
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
            a
          )
        );
      },
      "Please specify a valid UK postcode"
    ),
    a.validator.addMethod(
      "require_from_group",
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data("valid_req_grp")
            ? f.data("valid_req_grp")
            : a.extend({}, this),
          h =
            e.filter(function () {
              return g.elementValue(this);
            }).length >= d[0];
        return (
          f.data("valid_req_grp", g),
          a(c).data("being_validated") ||
            (e.data("being_validated", !0),
            e.each(function () {
              g.element(this);
            }),
            e.data("being_validated", !1)),
          h
        );
      },
      a.validator.format("Please fill at least {0} of these fields.")
    ),
    a.validator.addMethod(
      "skip_or_fill_minimum",
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
          h = e.filter(function () {
            return g.elementValue(this);
          }).length,
          i = 0 === h || h >= d[0];
        return (
          f.data("valid_skip", g),
          a(c).data("being_validated") ||
            (e.data("being_validated", !0),
            e.each(function () {
              g.element(this);
            }),
            e.data("being_validated", !1)),
          i
        );
      },
      a.validator.format(
        "Please either skip these fields or fill at least {0} of them."
      )
    ),
    a.validator.addMethod(
      "stateUS",
      function (a, b, c) {
        var d,
          e = "undefined" == typeof c,
          f = !e && "undefined" != typeof c.caseSensitive && c.caseSensitive,
          g =
            !e &&
            "undefined" != typeof c.includeTerritories &&
            c.includeTerritories,
          h =
            !e && "undefined" != typeof c.includeMilitary && c.includeMilitary;
        return (
          (d =
            g || h
              ? g && h
                ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                : g
                ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"
              : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"),
          (d = f ? new RegExp(d) : new RegExp(d, "i")),
          this.optional(b) || d.test(a)
        );
      },
      "Please specify a valid state"
    ),
    a.validator.addMethod(
      "strippedminlength",
      function (b, c, d) {
        return a(b).text().length >= d;
      },
      a.validator.format("Please enter at least {0} characters")
    ),
    a.validator.addMethod(
      "time",
      function (a, b) {
        return (
          this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
        );
      },
      "Please enter a valid time, between 00:00 and 23:59"
    ),
    a.validator.addMethod(
      "time12h",
      function (a, b) {
        return (
          this.optional(b) ||
          /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
        );
      },
      "Please enter a valid time in 12-hour am/pm format"
    ),
    a.validator.addMethod(
      "url2",
      function (a, b) {
        return (
          this.optional(b) ||
          /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
            a
          )
        );
      },
      a.validator.messages.url
    ),
    a.validator.addMethod(
      "vinUS",
      function (a) {
        if (17 !== a.length) return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            "M",
            "N",
            "P",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ],
          i = [
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9,
          ],
          j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          k = 0;
        for (b = 0; b < 17; b++) {
          if (
            ((e = j[b]), (d = a.slice(b, b + 1)), 8 === b && (g = d), isNaN(d))
          ) {
            for (c = 0; c < h.length; c++)
              if (d.toUpperCase() === h[c]) {
                (d = i[c]), (d *= e), isNaN(g) && 8 === c && (g = h[c]);
                break;
              }
          } else d *= e;
          k += d;
        }
        return (f = k % 11), 10 === f && (f = "X"), f === g;
      },
      "The specified vehicle identification number (VIN) is invalid."
    ),
    a.validator.addMethod(
      "zipcodeUS",
      function (a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a);
      },
      "The specified US ZIP Code is invalid"
    ),
    a.validator.addMethod(
      "ziprange",
      function (a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a);
      },
      "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"
    ),
    a
  );
});
$.validator.setDefaults({
  submitHandler: function () {
    var form = $("#lp_form");
    window.location.href = form.attr("action");
    return !1;
  },
});
$.validator.addMethod("regx", function (value, element, regexpr) {
  return regexpr.test(value);
});
$.validator.addMethod("check_document", function (value, element) {
  value = $.trim(value);
  value = value.replace(".", "");
  value = value.replace(".", "");
  cpf = value.replace("-", "");
  while (cpf.length < 11) cpf = "0" + cpf;
  var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
  var a = [];
  var b = new Number();
  var c = 11;
  for (i = 0; i < 11; i++) {
    a[i] = cpf.charAt(i);
    if (i < 9) b += a[i] * --c;
  }
  if ((x = b % 11) < 2) {
    a[9] = 0;
  } else {
    a[9] = 11 - x;
  }
  b = 0;
  c = 11;
  for (y = 0; y < 10; y++) b += a[y] * c--;
  if ((x = b % 11) < 2) {
    a[10] = 0;
  } else {
    a[10] = 11 - x;
  }
  var retorno = !0;
  if (cpf.charAt(9) != a[9] || cpf.charAt(10) != a[10] || cpf.match(expReg))
    retorno = !1;
  return this.optional(element) || retorno;
});
$(document).ready(function () {
  var validator = $("#lp_form").validate({
    focusInvalid: !1,
    rules: {
      customer_name: {
        required: !0,
        regx: /[a-zA-Z\u00C0-\u00FF]+[',. -][a-zA-Z\u00C0-\u00FF]/,
      },
      customer_document: {
        required: !0,
        minlength: 14,
        maxlength: 14,
        check_document: !0,
      },
      customer_phone: {
        required: !0,
        regx: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{2,3}\-[0-9]{4,5}$/,
        minlength: 14,
      },
      customer_email: { required: !0, email: !0 },
      customer_zipcode: { required: !0, minlength: 9 },
      customer_address: "required",
      customer_number: "required",
      customer_district: "required",
      customer_city: "required",
      customer_state: "required",
    },
    messages: {
      customer_name: {
        required: "O Nome é obrigatório",
        regx: "Informe seu nome completo",
      },
      customer_document: {
        required: "O CPF é obrigatório",
        minlength: "O número do CPF deve conter pelo menos 11 dígitos",
        digits: "Informe apenas números",
        check_document: "Parece que você digitou um CPF inválido",
      },
      customer_phone: {
        required: "O Telefone é obrigatório",
        regx: "O Telefone está incorreto",
        minlength: "O Telefone parece está incorreto",
      },
      customer_email: {
        required: "Informe um e-mail válido",
        email: "O e-mail parece estar incorreto",
      },
      customer_zipcode: {
        required: "O CEP é obrigatório",
        minlength: "O CEP está incorreto",
      },
      customer_address: "O Endereço é obrigatório",
      customer_number: "O Número é obrigatório",
      customer_district: "O Bairro é obrigatório",
      customer_city: "O Cidade é obrigatório",
      customer_state: "O Estado é obrigatório",
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      if (!element.next("span")[0]) {
        $(error).insertAfter($(element));
      }
    },
    success: function (label, element) {
      if ($(element).next("span")[0]) {
        $(label).remove();
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("error").removeClass("valid");
      $(element).next("span").css("display", "block").addClass("error");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("valid").removeClass("error");
      $(element).next("span").css("display", "none").removeClass("error");
    },
    invalidHandler: function (form, validator) {
      if (!validator.numberOfInvalids()) {
        return;
      }
      goToScroll($(validator.errorList[0].element));
    },
  });
});
$("input[type='number'], input[type='tel']").on("keypress", function (e) {
  var square = $(this);
  var key = window.event ? event.keyCode : e.which;
  if (key > 47 && key < 58) {
    return !0;
  } else {
    return key == 8 || key == 0 ? !0 : !1;
  }
});
var behavior_phone = function (val) {
  return val.replace(/\D/g, "").length === 11
    ? "(00) 00000-0000"
    : "(00) 0000-00009";
};
var opt_phone = {
  onKeyPress: function (val, e, field, opt_phone) {
    field.mask(behavior_phone.apply({}, arguments), opt_phone);
  },
};
$("#customer_phone").length
  ? $("#customer_phone").mask(behavior_phone, opt_phone)
  : null;
$("#customer_phone2").length
  ? $("#customer_phone").mask(behavior_phone, opt_phone)
  : null;
$("#customer_document").length
  ? $("#customer_document").mask("000.000.000-00")
  : null;
$("#customer_zipcode").length ? $("#customer_zipcode").mask("00000-000") : null;
$("#customer_name").on("input", function () {
  var text = $(this).val();
  var modified = text.replace(/  +/g, " ");
  $(this).val(modified);
});
function goToScroll(el) {
  var h = 20;
  if ($(".fixed-top").length) {
    h = h + $(".fixed-top").height();
  } else if (
    $("#accordion_summary").length &&
    $("#accordion_summary").is(":visible")
  ) {
    h = h + $("#accordion_summary").height();
  }
  $("html, body").animate({ scrollTop: $(el).offset().top - h }, 1000);
}
function open_popup(url, width = 500, height = 600, show_bar = "yes") {
  var target = "popup";
  w = screen.width;
  h = screen.height;
  middle_w = w / 2;
  middle_h = h / 2;
  height2 = height / 2;
  width2 = width / 2;
  middle1 = middle_h - height2;
  middle2 = middle_w - width2;
  window.open(
    url,
    target,
    "scrollbars=" +
      show_bar +
      ",toolbar=no,location=no,directories=no,status=no, menubar=no,resizable=no,copyhistory=no,height=" +
      height +
      ",width=" +
      width +
      ",top=" +
      middle1 +
      ",left=" +
      middle2 +
      ""
  );
}
function get_cookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function set_cookie(cookieName, cookieValue, daysToExpire) {
  var date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue}; expires=${date.toGMTString()}; path=/`;
}
$("#card_number").on("paste", function (e) {
  var $this = $(this);
  setTimeout(function () {
    var paste_data = $this.val();
    paste_data = paste_data.replace(/[^0-9\s]/g, "");
    paste_data = paste_data.trim();
    $this.val(paste_data);
  }, 100);
});
function sh_c(callback = function () {}) {
  if (__cht.sh.c && __cht.sh.c == 1) {
    $.each(__cht.sh.f.p, function (k, obj) {
      $.each(obj, function (key, value) {
        if ($(".payment-info-" + key).length == 0) {
          var div = $(
            '<div class="alert alert-success text-center lh-1 payment-info-' +
              key +
              '"><small><i class="bi bi-emoji-smile-fill me-1"></i> Comprando com <b>' +
              value +
              "</b> vc tem frete grátis</small></div>"
          );
          $("#nav-" + key).prepend(div);
        }
      });
    });
    var zipcode = $("#customer_zipcode").val().replace("-", "");
    if (zipcode.length == 8) {
      $(".main-loading, .zipcode_loading").css("display", "flex");
      var data = "zc=" + zipcode;
      data += "&st=" + $("#customer_state").val();
      data += "&sh=" + JSON.stringify(__cht.sh);
      data += "&p=" + JSON.stringify(__cht.p);
      data += "&ob=" + JSON.stringify(__cht.ob);
      data += "&py=" + $("input[name='payment']:checked").val();
      $.post(
        "sc",
        data,
        function (response) {
          if (response.cost) {
            __cht.sh.v = response.cost;
            if (response.cost == 0) {
              $(".dynamic-shipping").hide();
              $(".default-shipping").show();
              $("#shipping_1").prop("checked", !0);
            } else {
              $(".dynamic-shipping").show();
              $(".default-shipping").hide();
              $("#dynamic_shipping_1")
                .prop("checked", !0)
                .attr("data-value", __cht.sh.v);
            }
            $(".shipping-section").show();
            callback();
          }
          $(".main-loading, .zipcode_loading").fadeOut();
        },
        "json"
      );
    } else {
      $(".shipping-section").hide();
      callback();
    }
  } else {
    callback();
  }
}
$(document).on(
  "blur",
  "#customer_name, #customer_email, #customer_phone, #customer_zipcode, #customer_address, #customer_number, #customer_complement, #customer_district, #customer_city, #customer_state, #customer_document",
  function () {
    var form_name = $("#customer_name").length ? $("#customer_name").val() : "";
    var form_phone = $("#customer_phone").length
      ? $("#customer_phone").val()
      : "";
    var form_email = $("#customer_email").length
      ? $("#customer_email").val()
      : "";
    var form_zipcode = $("#customer_zipcode").length
      ? $("#customer_zipcode").val()
      : "";
    var form_address = $("#customer_address").length
      ? $("#customer_address").val()
      : "";
    var form_number = $("#customer_number").length
      ? $("#customer_number").val()
      : "";
    var form_complement = $("#customer_complement").length
      ? $("#customer_complement").val()
      : "";
    var form_district = $("#customer_district").length
      ? $("#customer_district").val()
      : "";
    var form_city = $("#customer_city").length ? $("#customer_city").val() : "";
    var form_state = $("#customer_state").length
      ? $("#customer_state").val()
      : "";
    var form_document = $("#customer_document").length
      ? $("#customer_document").val()
      : "";
    var client = {
      customer_name: form_name,
      customer_phone: form_phone,
      customer_email: form_email,
      customer_zipcode: form_zipcode,
      customer_address: form_address,
      customer_number: form_number,
      customer_complement: form_complement,
      customer_district: form_district,
      customer_city: form_city,
      customer_state: form_state,
      customer_document: form_document,
    };
    localStorage.setItem("client", JSON.stringify(client));
    if ($(this).val() != "") {
      var data =
        "hash_access_id=" +
        ($("#hash_access_id").length ? $("#hash_access_id").val() : "");
      data += "&h_id=" + ($("#h_id").length ? $("#h_id").val() : "");
      data += "&csrf=" + ($("#csrf").length ? $("#csrf").val() : "");
      data += "&customer_name=" + form_name;
      data += "&customer_phone=" + form_phone;
      data += "&customer_email=" + form_email;
      data += "&customer_zipcode=" + form_zipcode;
      data += "&customer_address=" + form_address;
      data += "&customer_number=" + form_number;
      data += "&customer_complement=" + form_complement;
      data += "&customer_district=" + form_district;
      data += "&customer_city=" + form_city;
      data += "&customer_state=" + form_state;
      data += "&customer_document=" + form_document;
      if (
        update_lead(
          form_name +
            form_phone +
            form_email +
            form_zipcode +
            form_address +
            form_number +
            form_complement +
            form_district +
            form_city +
            form_state +
            form_document
        )
      ) {
        $.post(
          "lead",
          data,
          function (response) {
            form_value(
              form_name +
                form_phone +
                form_email +
                form_zipcode +
                form_address +
                form_number +
                form_complement +
                form_district +
                form_city +
                form_state +
                form_document
            );
            if (response.reload) {
              window.location.reload();
            }
          },
          "json"
        );
      }
    }
  }
);
if (localStorage.getItem("client")) {
  var client = JSON.parse(localStorage.getItem("client"));
  $("#customer_name").length
    ? $("#customer_name").val(client.customer_name)
    : "";
  $("#customer_phone").length
    ? $("#customer_phone").val(client.customer_phone)
    : "";
  $("#customer_email").length
    ? $("#customer_email").val(client.customer_email)
    : "";
  $("#customer_zipcode").length
    ? $("#customer_zipcode").val(client.customer_zipcode)
    : "";
  $("#customer_address").length
    ? $("#customer_address").val(client.customer_address)
    : "";
  $("#customer_number").length
    ? $("#customer_number").val(client.customer_number)
    : "";
  $("#customer_complement").length
    ? $("#customer_complement").val(client.customer_complement)
    : "";
  $("#customer_district").length
    ? $("#customer_district").val(client.customer_district)
    : "";
  $("#customer_city").length
    ? $("#customer_city").val(client.customer_city)
    : "";
  $("#customer_state").length
    ? $("#customer_state").val(client.customer_state).trigger("select")
    : "";
  $("#customer_document").length
    ? $("#customer_document").val(client.customer_document)
    : "";
  var client_doc = $("#customer_document").length
    ? $("#customer_document").val()
    : "";
  form_value(
    client.customer_name +
      client.customer_phone +
      client.customer_email +
      client.customer_zipcode +
      client.customer_address +
      client.customer_number +
      client.customer_complement +
      client.customer_district +
      client.customer_city +
      client.customer_state +
      client_doc
  );
}
function form_value(value) {
  if ($("#form_value").length) {
    $("#form_value").val(btoa(value));
  }
}
function update_lead(value) {
  if ($("#form_value").length) {
    if ($("#form_value").val() != btoa(value)) {
      return !0;
    } else {
      return !1;
    }
  }
  return !0;
}
$(document).on("input", "#customer_zipcode", function () {
    console.log('mexwendo no cep')
  if ($(this).val() != "") {
    var zipcode = $(this).val().replace("-", "");
    if (zipcode.length < 8) {
      $(".data-address-fields").hide();
      $(".data-address-fields .error").hide();
      $(".data-address-fields input, .data-address-fields select").removeClass(
        "is-invalid valid"
      );
    }
    if (zipcode.length == 8) {
      $(".main-loading, .zipcode_loading").css("display", "flex");
      $(".data-address-fields").show();
      var data = "customer_zipcode=" + zipcode;
      data += "&csrf=" + ($("#csrf").length ? $("#csrf").val() : "");
      var main_form = $(this).parents("form");
      if (main_form.attr("id") == "checkout_form") {
        sh_c(function () {
          update_values("now");
        });
      }
    //   $.post(
    //     "z",
    //     data,
    //     function (response) {
    //       if (response) {
    //         if (response.reload) {
    //           window.location.reload();
    //           return !1;
    //         }
    //         $("#customer_address").val(response.address);
    //         $("#customer_district").val(response.district);
    //         $("#customer_city").val(response.city);
    //         if (response.state != "") {
    //           $("#customer_state").val(response.state).trigger("select");
    //         }
    //         if (response.address) {
    //           $("#customer_number").trigger("focus");
    //         }
    //       } else {
    //         $("#customer_address").val("");
    //         $("#customer_district").val("");
    //         $("#customer_city").val("");
    //         $("#customer_state").val("").trigger("select").attr("disabled", !0);
    //       }
    //       if ($(".data-address-fields").length) {
    //         $(".data-address-fields").show();
    //       }
    //       $(".main-loading, .zipcode_loading").fadeOut();
    //     },
    //     "json"
    //   );
    }
  }
  return !1;
});
$(document).ready(function () {
  if (
    $("#customer_zipcode").length &&
    $("#customer_zipcode").val().length < 9
  ) {
    $(".data-address-fields").hide();
  } else {
    $(".data-address-fields").show();
  }
});
function countdown(minutes = 5, seconds = 0) {
  var min_1, min_2, sec_1, sec_2;
  if (minutes > 99) {
    min_1 = 9;
    min_2 = 9;
  } else {
    if (minutes > 9) {
      min_1 = minutes.toString().substring(0, 1);
      min_2 = minutes.toString().substring(1, 2);
    } else {
      min_1 = 0;
      min_2 = minutes;
    }
  }
  if (seconds > 59) {
    sec_1 = 5;
    sec_2 = 9;
  } else {
    if (seconds > 9) {
      sec_1 = seconds.toString().substring(0, 1);
      sec_2 = seconds.toString().substring(1, 2);
    } else {
      sec_1 = 0;
      sec_2 = seconds;
    }
  }
  function updateTimer() {
    document.getElementById("min-1").innerHTML = min_1;
    document.getElementById("min-2").innerHTML = min_2;
    document.getElementById("sec-1").innerHTML = sec_1;
    document.getElementById("sec-2").innerHTML = sec_2;
    if (min_1 == 0 && min_2 == 0 && sec_1 == 0 && sec_2 == 0) {
    } else {
      if (sec_1 == 0 && sec_2 == 0) {
        sec_1 = 6;
        sec_2 = 10;
        if (min_1 > 0 && min_2 == 0) {
          min_1--;
          min_2 = 10;
        }
        sec_1--;
        min_2--;
      } else if (sec_2 == 0) {
        sec_2 = 10;
        sec_1--;
      }
      sec_2--;
      setTimeout(updateTimer, 1000);
    }
  }
  updateTimer();
}
function notifyName() {
  var first_name = [
    "Adriana",
    "Alcino",
    "Alessandra",
    "Alexander",
    "Allan",
    "Amelia",
    "Ana",
    "Anderson",
    "Andre",
    "Andrea",
    "Antonio",
    "Cênia",
    "Ciene",
    "Claudia",
    "Cristiano",
    "Dalva",
    "Daniel",
    "Djalma",
    "Edemar",
    "Edson",
    "Eliana",
    "Elio",
    "Elisangela",
    "Eraldo",
    "Ermila",
    "Fátima",
    "Fernando",
    "Gilberto",
    "Giovani",
    "Giovanna",
    "Hernando",
    "Humberto",
    "Ianara",
    "Iris",
    "Ivo",
    "Jairo",
    "João",
    "Jose",
    "Julia",
    "Juliana",
    "Leandro",
    "Leide",
    "Leo",
    "Lindinaldo",
    "Lúcia",
    "Luciane",
    "Luiz",
    "Marcelo",
    "Márcia",
    "Márcio",
    "Maria",
    "Marineide",
    "Nancy",
    "Nelson",
    "Nilton",
    "Odirlei",
    "Paulo",
    "Rafaela",
    "Railda",
    "Raimundo",
    "Ramiro",
    "Regina",
    "Ricardo",
    "Rigoberto",
    "Rodrigo",
    "Ronaldo",
    "Savio",
    "Sergio",
    "Sonia",
    "Suely",
    "Thalis",
    "Vagner",
    "Valdemir",
    "Valderlene",
    "Valdineide",
    "Valeria",
    "Valeriana",
    "Valmir",
    "Valtemir",
    "Veronice",
    "Wanderley",
  ];
  var last_name = [
    "Almeida",
    "Alves",
    "Andrade",
    "Barbosa",
    "Batista",
    "Carvalho",
    "Costa",
    "Dias",
    "Ferreira",
    "Gomes",
    "Lima",
    "Moraes",
    "Nascimento",
    "Oliveira",
    "Pereira",
    "Santos",
    "Silva",
    "Souza",
  ];
  var random_first_name = Math.floor(Math.random() * first_name.length);
  var random_last_name = Math.floor(Math.random() * last_name.length);
  return first_name[random_first_name] + " " + last_name[random_last_name];
}
function notifyRegion() {
  var regions = [
    "de São Paulo",
    "do Rio de Janeiro",
    "de Alagoas",
    "de São Paulo",
    "do Paraná",
    "do Distrito Federal",
    "de Florianópolis",
    "da Bahia",
    "de São Paulo",
    "do Rio de Janeiro",
    "de Santa Catarina",
    "de Minas Gerais",
    "do Distrito Federal",
    "do Ceará",
    "da Bahia",
    "do Espírito Santo",
    "de Goiás",
    "do Maranhão",
    "de São Paulo",
    "do Rio de Janeiro",
    "do Mato Grosso",
    "da Bahia",
    "do Paraná",
    "de São Paulo",
    "de Minas Gerais",
    "do Mato Grosso do Sul",
    "de Minas Gerais",
    "de Santa Catarina",
    "de São Paulo",
    "do Pará",
    "do Rio de Janeiro",
    "da Paraíba",
    "de Minas Gerais",
    "da Bahia",
    "do Rio de Janeiro",
    "do Paraná",
    "de São Paulo",
    "de Pernambuco",
    "do Paraná",
    "do Piauí",
    "do Rio de Janeiro",
    "do Rio Grande do Norte",
    "do Rio Grande do Sul",
    "da Bahia",
    "de Minas Gerais",
    "de Rondônia",
    "de Santa Catarina",
    "de Salvador",
    "de Santa Catarina",
    "de São Paulo",
    "do Sergipe",
    "de Tocantins",
    "do Distrito Federal",
    "de Belo Horizonte",
    "de Curitiba",
  ];
  var random_regions = Math.floor(Math.random() * regions.length);
  return regions[random_regions];
}
function rand(min, max) {
  var count = Math.floor(Math.random() * (max - min) + min);
  return count;
}
var notifyPopup = function () {
  var name = notifyName();
  var region = notifyRegion();
  var time = rand(9, 11);
  var notify_popup = $(".notify-message");
  $(".notify-message .notify-text").html(
    name + " " + region + " comprou <strong>" + notify_product + "</strong>"
  );
  $(".notify-popup").show();
  notify_popup.css("display", "flex");
  notify_popup.append("<div class='notify-message-time'></div>");
  notify_popup
    .find(".notify-message-time")
    .animate({ width: "100%" }, time * 1000, function () {
      $(this).parents(".notify-message").fadeOut(200);
      $(this).parents(".notify-message").find(".notify-message-time").remove();
      $(".notify-popup").hide();
      setTimeout(notifyPopup, time * 1157);
    });
  $(".notify-popup").append(notify_popup);
  notify_popup.effect("bounce");
};

(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@revenuecat/purchases-js/dist/index-DuKHkfLn.js
  var index_DuKHkfLn_exports = {};
  __export(index_DuKHkfLn_exports, {
    loadStripe: () => I
  });
  var f, h, S, w, j, L, g, R, p, P, a, c, l, T, y, b, x, s, m, E, I;
  var init_index_DuKHkfLn = __esm({
    "node_modules/@revenuecat/purchases-js/dist/index-DuKHkfLn.js"() {
      f = "basil";
      h = function(r) {
        return r === 3 ? "v3" : r;
      };
      S = "https://js.stripe.com";
      w = "".concat(S, "/").concat(f, "/stripe.js");
      j = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
      L = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
      g = function(r) {
        return j.test(r) || L.test(r);
      };
      R = function() {
        for (var r = document.querySelectorAll('script[src^="'.concat(S, '"]')), e = 0; e < r.length; e++) {
          var n = r[e];
          if (g(n.src))
            return n;
        }
        return null;
      };
      p = function(r) {
        var e = "", n = document.createElement("script");
        n.src = "".concat(w).concat(e);
        var t = document.head || document.body;
        if (!t)
          throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return t.appendChild(n), n;
      };
      P = function(r, e) {
        !r || !r._registerWrapper || r._registerWrapper({
          name: "stripe-js",
          version: "7.3.1",
          startTime: e
        });
      };
      a = null;
      c = null;
      l = null;
      T = function(r) {
        return function(e) {
          r(new Error("Failed to load Stripe.js", {
            cause: e
          }));
        };
      };
      y = function(r, e) {
        return function() {
          window.Stripe ? r(window.Stripe) : e(new Error("Stripe.js not available"));
        };
      };
      b = function(r) {
        return a !== null ? a : (a = new Promise(function(e, n) {
          if (typeof window > "u" || typeof document > "u") {
            e(null);
            return;
          }
          if (window.Stripe) {
            e(window.Stripe);
            return;
          }
          try {
            var t = R();
            if (!(t && r)) {
              if (!t)
                t = p(r);
              else if (t && l !== null && c !== null) {
                var o;
                t.removeEventListener("load", l), t.removeEventListener("error", c), (o = t.parentNode) === null || o === void 0 || o.removeChild(t), t = p(r);
              }
            }
            l = y(e, n), c = T(n), t.addEventListener("load", l), t.addEventListener("error", c);
          } catch (u) {
            n(u);
            return;
          }
        }), a.catch(function(e) {
          return a = null, Promise.reject(e);
        }));
      };
      x = function(r, e, n) {
        if (r === null)
          return null;
        var t = e[0], o = t.match(/^pk_test/), u = h(r.version), d2 = f;
        o && u !== d2 && console.warn("Stripe.js@".concat(u, " was loaded on the page, but @stripe/stripe-js@").concat("7.3.1", " expected Stripe.js@").concat(d2, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
        var v = r.apply(void 0, e);
        return P(v, n), v;
      };
      m = false;
      E = function() {
        return s || (s = b(null).catch(function(r) {
          return s = null, Promise.reject(r);
        }), s);
      };
      Promise.resolve().then(function() {
        return E();
      }).catch(function(i) {
        m || console.warn(i);
      });
      I = function() {
        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
          e[n] = arguments[n];
        m = true;
        var t = Date.now();
        return E().then(function(o) {
          return x(o, e, t);
        });
      };
    }
  });

  // node_modules/@revenuecat/purchases-js/dist/Purchases.es.js
  var fs = Object.create;
  var Pa = Object.defineProperty;
  var ys = Object.getOwnPropertyDescriptor;
  var Rn = (e, r) => (r = Symbol[e]) ? r : Symbol.for("Symbol." + e);
  var mt = (e) => {
    throw TypeError(e);
  };
  var Un = (e, r, t) => r in e ? Pa(e, r, { enumerable: true, configurable: true, writable: true, value: t }) : e[r] = t;
  var On = (e, r) => Pa(e, "name", { value: r, configurable: true });
  var Vn = (e) => [, , , fs((e == null ? void 0 : e[Rn("metadata")]) ?? null)];
  var Hn = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var gt = (e) => e !== void 0 && typeof e != "function" ? mt("Function expected") : e;
  var bs = (e, r, t, a2, n) => ({ kind: Hn[e], name: r, metadata: a2, addInitializer: (o) => t._ ? mt("Already initialized") : n.push(gt(o || null)) });
  var Sa = (e, r) => Un(r, Rn("metadata"), e[3]);
  var Wn = (e, r, t, a2) => {
    for (var n = 0, o = e[r >> 1], i = o && o.length; n < i; n++) r & 1 ? o[n].call(t) : a2 = o[n].call(t, a2);
    return a2;
  };
  var Yn = (e, r, t, a2, n, o) => {
    var i, s2, l2, c2, p2, u = r & 7, _ = !!(r & 8), g2 = !!(r & 16), m2 = u > 3 ? e.length + 1 : u ? _ ? 1 : 2 : 0, f2 = Hn[u + 5], h2 = u > 3 && (e[m2 - 1] = []), v = e[m2] || (e[m2] = []), y2 = u && (!g2 && !_ && (n = n.prototype), u < 5 && (u > 3 || !g2) && ys(u < 4 ? n : { get [t]() {
      return Ln(this, o);
    }, set [t](T2) {
      return Bn(this, o, T2);
    } }, t));
    u ? g2 && u < 4 && On(o, (u > 2 ? "set " : u > 1 ? "get " : "") + t) : On(n, t);
    for (var x2 = a2.length - 1; x2 >= 0; x2--)
      c2 = bs(u, t, l2 = {}, e[3], v), u && (c2.static = _, c2.private = g2, p2 = c2.access = { has: g2 ? (T2) => hs(n, T2) : (T2) => t in T2 }, u ^ 3 && (p2.get = g2 ? (T2) => (u ^ 1 ? Ln : vs)(T2, n, u ^ 4 ? o : y2.get) : (T2) => T2[t]), u > 2 && (p2.set = g2 ? (T2, S2) => Bn(T2, n, S2, u ^ 4 ? o : y2.set) : (T2, S2) => T2[t] = S2)), s2 = (0, a2[x2])(u ? u < 4 ? g2 ? o : y2[f2] : u > 4 ? void 0 : { get: y2.get, set: y2.set } : n, c2), l2._ = 1, u ^ 4 || s2 === void 0 ? gt(s2) && (u > 4 ? h2.unshift(s2) : u ? g2 ? o = s2 : y2[f2] = s2 : n = s2) : typeof s2 != "object" || s2 === null ? mt("Object expected") : (gt(i = s2.get) && (y2.get = i), gt(i = s2.set) && (y2.set = i), gt(i = s2.init) && h2.unshift(i));
    return u || Sa(e, n), y2 && Pa(n, t, y2), g2 ? u ^ 4 ? o : y2 : n;
  };
  var M = (e, r, t) => Un(e, typeof r != "symbol" ? r + "" : r, t);
  var Ea = (e, r, t) => r.has(e) || mt("Cannot " + t);
  var hs = (e, r) => Object(r) !== r ? mt('Cannot use the "in" operator on this value') : e.has(r);
  var Ln = (e, r, t) => (Ea(e, r, "read from private field"), t ? t.call(e) : r.get(e));
  var Bn = (e, r, t, a2) => (Ea(e, r, "write to private field"), a2 ? a2.call(e, t) : r.set(e, t), t);
  var vs = (e, r, t) => (Ea(e, r, "access private method"), t);
  var ks = "5";
  typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ks);
  var nn = 1;
  var on = 2;
  var zo = 4;
  var ws = 8;
  var xs = 16;
  var Ps = 1;
  var Ss = 2;
  var Es = 4;
  var Ts = 8;
  var Is = 16;
  var qs = 1;
  var Fs = 2;
  var zs = 4;
  var Ds = 1;
  var As = 2;
  var Te = Symbol();
  var xt = "http://www.w3.org/2000/svg";
  function Ms(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
  }
  var js = [
    "beforeinput",
    "click",
    "change",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
  ];
  function Ns(e) {
    return js.includes(e);
  }
  var Cs = {
    // no `class: 'className'` because we handle that separately
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject"
  };
  function Os(e) {
    return e = e.toLowerCase(), Cs[e] ?? e;
  }
  var Ls = ["touchstart", "touchmove"];
  function Bs(e) {
    return Ls.includes(e);
  }
  var Gn = false;
  var pa = Array.isArray;
  var Rs = Array.prototype.indexOf;
  var sn = Array.from;
  var Us = Object.defineProperty;
  var Sr = Object.getOwnPropertyDescriptor;
  var Do = Object.getOwnPropertyDescriptors;
  var Vs = Object.prototype;
  var Hs = Array.prototype;
  var ln = Object.getPrototypeOf;
  function Kr(e) {
    return typeof e == "function";
  }
  var ae = () => {
  };
  function Ws(e) {
    return e();
  }
  function Na(e) {
    for (var r = 0; r < e.length; r++)
      e[r]();
  }
  var Ze = 2;
  var Ao = 4;
  var Ft = 8;
  var _a = 16;
  var Ke = 32;
  var zt = 64;
  var Zt = 128;
  var Vr = 256;
  var Kt = 512;
  var Ie = 1024;
  var qr = 2048;
  var Dt = 4096;
  var cr = 8192;
  var st = 16384;
  var Mo = 32768;
  var zr = 65536;
  var Ys = 1 << 17;
  var Gs = 1 << 19;
  var jo = 1 << 20;
  var Er = Symbol("$state");
  var No = Symbol("legacy props");
  var Xs = Symbol("");
  function Co(e) {
    return e === this.v;
  }
  function Oo(e, r) {
    return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
  }
  function cn(e) {
    return !Oo(e, this.v);
  }
  function Zs(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Ks() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Js(e) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Qs() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function $s(e) {
    throw new Error("https://svelte.dev/e/props_invalid_value");
  }
  function el() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function rl() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function tl() {
    throw new Error("https://svelte.dev/e/state_unsafe_local_read");
  }
  function al() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  var lt = false;
  var nl = false;
  function ol() {
    lt = true;
  }
  function je(e, r) {
    var t = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v: e,
      reactions: null,
      equals: Co,
      rv: 0,
      wv: 0
    };
    return t;
  }
  function X(e) {
    return /* @__PURE__ */ Lo(je(e));
  }
  // @__NO_SIDE_EFFECTS__
  function ga(e, r = false) {
    var a2;
    const t = je(e);
    return r || (t.equals = cn), lt && $ !== null && $.l !== null && ((a2 = $.l).s ?? (a2.s = [])).push(t), t;
  }
  function Ca(e, r = false) {
    return /* @__PURE__ */ Lo(/* @__PURE__ */ ga(e, r));
  }
  // @__NO_SIDE_EFFECTS__
  function Lo(e) {
    return le !== null && (le.f & Ze) !== 0 && (dr === null ? ml([e]) : dr.push(e)), e;
  }
  function D(e, r) {
    return le !== null && mn() && (le.f & (Ze | _a)) !== 0 && // If the source was created locally within the current derived, then
    // we allow the mutation.
    (dr === null || !dr.includes(e)) && al(), Oa(e, r);
  }
  function Oa(e, r) {
    return e.equals(r) || (e.v, e.v = r, e.wv = ri(), Bo(e, qr), mn() && Z !== null && (Z.f & Ie) !== 0 && (Z.f & Ke) === 0 && (Pe !== null && Pe.includes(e) ? (Je(Z, qr), ba(Z)) : Tr === null ? fl([e]) : Tr.push(e))), r;
  }
  function Bo(e, r) {
    var t = e.reactions;
    if (t !== null)
      for (var a2 = mn(), n = t.length, o = 0; o < n; o++) {
        var i = t[o], s2 = i.f;
        (s2 & qr) === 0 && (!a2 && i === Z || (Je(i, r), (s2 & (Ie | Vr)) !== 0 && ((s2 & Ze) !== 0 ? Bo(
          /** @type {Derived} */
          i,
          Dt
        ) : ba(
          /** @type {Effect} */
          i
        ))));
      }
  }
  var dn = false;
  function L2(e, r = null, t) {
    if (typeof e != "object" || e === null || Er in e)
      return e;
    const a2 = ln(e);
    if (a2 !== Vs && a2 !== Hs)
      return e;
    var n = /* @__PURE__ */ new Map(), o = pa(e), i = je(0);
    o && n.set("length", je(
      /** @type {any[]} */
      e.length
    ));
    var s2;
    return new Proxy(
      /** @type {any} */
      e,
      {
        defineProperty(l2, c2, p2) {
          (!("value" in p2) || p2.configurable === false || p2.enumerable === false || p2.writable === false) && el();
          var u = n.get(c2);
          return u === void 0 ? (u = je(p2.value), n.set(c2, u)) : D(u, L2(p2.value, s2)), true;
        },
        deleteProperty(l2, c2) {
          var p2 = n.get(c2);
          if (p2 === void 0)
            c2 in l2 && n.set(c2, je(Te));
          else {
            if (o && typeof c2 == "string") {
              var u = (
                /** @type {Source<number>} */
                n.get("length")
              ), _ = Number(c2);
              Number.isInteger(_) && _ < u.v && D(u, _);
            }
            D(p2, Te), Xn(i);
          }
          return true;
        },
        get(l2, c2, p2) {
          var m2;
          if (c2 === Er)
            return e;
          var u = n.get(c2), _ = c2 in l2;
          if (u === void 0 && (!_ || (m2 = Sr(l2, c2)) != null && m2.writable) && (u = je(L2(_ ? l2[c2] : Te, s2)), n.set(c2, u)), u !== void 0) {
            var g2 = d(u);
            return g2 === Te ? void 0 : g2;
          }
          return Reflect.get(l2, c2, p2);
        },
        getOwnPropertyDescriptor(l2, c2) {
          var p2 = Reflect.getOwnPropertyDescriptor(l2, c2);
          if (p2 && "value" in p2) {
            var u = n.get(c2);
            u && (p2.value = d(u));
          } else if (p2 === void 0) {
            var _ = n.get(c2), g2 = _ == null ? void 0 : _.v;
            if (_ !== void 0 && g2 !== Te)
              return {
                enumerable: true,
                configurable: true,
                value: g2,
                writable: true
              };
          }
          return p2;
        },
        has(l2, c2) {
          var g2;
          if (c2 === Er)
            return true;
          var p2 = n.get(c2), u = p2 !== void 0 && p2.v !== Te || Reflect.has(l2, c2);
          if (p2 !== void 0 || Z !== null && (!u || (g2 = Sr(l2, c2)) != null && g2.writable)) {
            p2 === void 0 && (p2 = je(u ? L2(l2[c2], s2) : Te), n.set(c2, p2));
            var _ = d(p2);
            if (_ === Te)
              return false;
          }
          return u;
        },
        set(l2, c2, p2, u) {
          var x2;
          var _ = n.get(c2), g2 = c2 in l2;
          if (o && c2 === "length")
            for (var m2 = p2; m2 < /** @type {Source<number>} */
            _.v; m2 += 1) {
              var f2 = n.get(m2 + "");
              f2 !== void 0 ? D(f2, Te) : m2 in l2 && (f2 = je(Te), n.set(m2 + "", f2));
            }
          _ === void 0 ? (!g2 || (x2 = Sr(l2, c2)) != null && x2.writable) && (_ = je(void 0), D(_, L2(p2, s2)), n.set(c2, _)) : (g2 = _.v !== Te, D(_, L2(p2, s2)));
          var h2 = Reflect.getOwnPropertyDescriptor(l2, c2);
          if (h2 != null && h2.set && h2.set.call(u, p2), !g2) {
            if (o && typeof c2 == "string") {
              var v = (
                /** @type {Source<number>} */
                n.get("length")
              ), y2 = Number(c2);
              Number.isInteger(y2) && y2 >= v.v && D(v, y2 + 1);
            }
            Xn(i);
          }
          return true;
        },
        ownKeys(l2) {
          d(i);
          var c2 = Reflect.ownKeys(l2).filter((_) => {
            var g2 = n.get(_);
            return g2 === void 0 || g2.v !== Te;
          });
          for (var [p2, u] of n)
            u.v !== Te && !(p2 in l2) && c2.push(p2);
          return c2;
        },
        setPrototypeOf() {
          rl();
        }
      }
    );
  }
  function Xn(e, r = 1) {
    D(e, e.v + r);
  }
  var Zn;
  var Ro;
  var Uo;
  function il() {
    if (Zn === void 0) {
      Zn = window;
      var e = Element.prototype, r = Node.prototype;
      Ro = Sr(r, "firstChild").get, Uo = Sr(r, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
    }
  }
  function At(e = "") {
    return document.createTextNode(e);
  }
  // @__NO_SIDE_EFFECTS__
  function Br(e) {
    return Ro.call(e);
  }
  // @__NO_SIDE_EFFECTS__
  function ma(e) {
    return Uo.call(e);
  }
  function P2(e, r) {
    return /* @__PURE__ */ Br(e);
  }
  function W(e, r) {
    {
      var t = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ Br(
          /** @type {Node} */
          e
        )
      );
      return t instanceof Comment && t.data === "" ? /* @__PURE__ */ ma(t) : t;
    }
  }
  function C(e, r = 1, t = false) {
    let a2 = e;
    for (; r--; )
      a2 = /** @type {TemplateNode} */
      /* @__PURE__ */ ma(a2);
    return a2;
  }
  function sl(e) {
    e.textContent = "";
  }
  // @__NO_SIDE_EFFECTS__
  function E2(e) {
    var r = Ze | qr;
    Z === null ? r |= Vr : Z.f |= jo;
    var t = le !== null && (le.f & Ze) !== 0 ? (
      /** @type {Derived} */
      le
    ) : null;
    const a2 = {
      children: null,
      ctx: $,
      deps: null,
      equals: Co,
      f: r,
      fn: e,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        null
      ),
      wv: 0,
      parent: t ?? Z
    };
    return t !== null && (t.children ?? (t.children = [])).push(a2), a2;
  }
  // @__NO_SIDE_EFFECTS__
  function et(e) {
    const r = /* @__PURE__ */ E2(e);
    return r.equals = cn, r;
  }
  function Vo(e) {
    var r = e.children;
    if (r !== null) {
      e.children = null;
      for (var t = 0; t < r.length; t += 1) {
        var a2 = r[t];
        (a2.f & Ze) !== 0 ? un(
          /** @type {Derived} */
          a2
        ) : Ve(
          /** @type {Effect} */
          a2
        );
      }
    }
  }
  function ll(e) {
    for (var r = e.parent; r !== null; ) {
      if ((r.f & Ze) === 0)
        return (
          /** @type {Effect} */
          r
        );
      r = r.parent;
    }
    return null;
  }
  function Ho(e) {
    var r, t = Z;
    qe(ll(e));
    try {
      Vo(e), r = ti(e);
    } finally {
      qe(t);
    }
    return r;
  }
  function Wo(e) {
    var r = Ho(e), t = (Or || (e.f & Vr) !== 0) && e.deps !== null ? Dt : Ie;
    Je(e, t), e.equals(r) || (e.v = r, e.wv = ri());
  }
  function un(e) {
    Vo(e), St(e, 0), Je(e, st), e.v = e.children = e.deps = e.ctx = e.reactions = null;
  }
  function Yo(e) {
    Z === null && le === null && Js(), le !== null && (le.f & Vr) !== 0 && Ks(), gn && Zs();
  }
  function cl(e, r) {
    var t = r.last;
    t === null ? r.last = r.first = e : (t.next = e, e.prev = t, r.last = e);
  }
  function ct(e, r, t, a2 = true) {
    var n = (e & zt) !== 0, o = Z, i = {
      ctx: $,
      deps: null,
      deriveds: null,
      nodes_start: null,
      nodes_end: null,
      f: e | qr,
      first: null,
      fn: r,
      last: null,
      next: null,
      parent: n ? null : o,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    };
    if (t) {
      var s2 = rt;
      try {
        Jn(true), jt(i), i.f |= Mo;
      } catch (p2) {
        throw Ve(i), p2;
      } finally {
        Jn(s2);
      }
    } else r !== null && ba(i);
    var l2 = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & jo) === 0;
    if (!l2 && !n && a2 && (o !== null && cl(i, o), le !== null && (le.f & Ze) !== 0)) {
      var c2 = (
        /** @type {Derived} */
        le
      );
      (c2.children ?? (c2.children = [])).push(i);
    }
    return i;
  }
  function Go(e) {
    const r = ct(Ft, null, false);
    return Je(r, Ie), r.teardown = e, r;
  }
  function at(e) {
    Yo();
    var r = Z !== null && (Z.f & Ke) !== 0 && $ !== null && !$.m;
    if (r) {
      var t = (
        /** @type {ComponentContext} */
        $
      );
      (t.e ?? (t.e = [])).push({
        fn: e,
        effect: Z,
        reaction: le
      });
    } else {
      var a2 = fa(e);
      return a2;
    }
  }
  function dl(e) {
    return Yo(), ya(e);
  }
  function ul(e) {
    const r = ct(zt, e, true);
    return (t = {}) => new Promise((a2) => {
      t.outro ? Rr(r, () => {
        Ve(r), a2(void 0);
      }) : (Ve(r), a2(void 0));
    });
  }
  function fa(e) {
    return ct(Ao, e, false);
  }
  function Kn(e, r) {
    var t = (
      /** @type {ComponentContextLegacy} */
      $
    ), a2 = { effect: null, ran: false };
    t.l.r1.push(a2), a2.effect = ya(() => {
      e(), !a2.ran && (a2.ran = true, D(t.l.r2, true), br(r));
    });
  }
  function pl() {
    var e = (
      /** @type {ComponentContextLegacy} */
      $
    );
    ya(() => {
      if (d(e.l.r2)) {
        for (var r of e.l.r1) {
          var t = r.effect;
          (t.f & Ie) !== 0 && Je(t, Dt), dt(t) && jt(t), r.ran = false;
        }
        e.l.r2.v = false;
      }
    });
  }
  function ya(e) {
    return ct(Ft, e, true);
  }
  function A(e) {
    return Dr(e);
  }
  function Dr(e, r = 0) {
    return ct(Ft | _a | r, e, true);
  }
  function Ue(e, r = true) {
    return ct(Ft | Ke, e, true, r);
  }
  function Xo(e) {
    var r = e.teardown;
    if (r !== null) {
      const t = gn, a2 = le;
      Qn(true), He(null);
      try {
        r.call(null);
      } finally {
        Qn(t), He(a2);
      }
    }
  }
  function Zo(e) {
    var r = e.deriveds;
    if (r !== null) {
      e.deriveds = null;
      for (var t = 0; t < r.length; t += 1)
        un(r[t]);
    }
  }
  function Ko(e, r = false) {
    var t = e.first;
    for (e.first = e.last = null; t !== null; ) {
      var a2 = t.next;
      Ve(t, r), t = a2;
    }
  }
  function _l(e) {
    for (var r = e.first; r !== null; ) {
      var t = r.next;
      (r.f & Ke) === 0 && Ve(r), r = t;
    }
  }
  function Ve(e, r = true) {
    var t = false;
    if ((r || (e.f & Gs) !== 0) && e.nodes_start !== null) {
      for (var a2 = e.nodes_start, n = e.nodes_end; a2 !== null; ) {
        var o = a2 === n ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ ma(a2)
        );
        a2.remove(), a2 = o;
      }
      t = true;
    }
    Ko(e, r && !t), Zo(e), St(e, 0), Je(e, st);
    var i = e.transitions;
    if (i !== null)
      for (const l2 of i)
        l2.stop();
    Xo(e);
    var s2 = e.parent;
    s2 !== null && s2.first !== null && Jo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
  }
  function Jo(e) {
    var r = e.parent, t = e.prev, a2 = e.next;
    t !== null && (t.next = a2), a2 !== null && (a2.prev = t), r !== null && (r.first === e && (r.first = a2), r.last === e && (r.last = t));
  }
  function Rr(e, r) {
    var t = [];
    pn(e, t, true), Qo(t, () => {
      Ve(e), r && r();
    });
  }
  function Qo(e, r) {
    var t = e.length;
    if (t > 0) {
      var a2 = () => --t || r();
      for (var n of e)
        n.out(a2);
    } else
      r();
  }
  function pn(e, r, t) {
    if ((e.f & cr) === 0) {
      if (e.f ^= cr, e.transitions !== null)
        for (const i of e.transitions)
          (i.is_global || t) && r.push(i);
      for (var a2 = e.first; a2 !== null; ) {
        var n = a2.next, o = (a2.f & zr) !== 0 || (a2.f & Ke) !== 0;
        pn(a2, r, o ? t : false), a2 = n;
      }
    }
  }
  function Pt(e) {
    $o(e, true);
  }
  function $o(e, r) {
    if ((e.f & cr) !== 0) {
      dt(e) && jt(e), e.f ^= cr;
      for (var t = e.first; t !== null; ) {
        var a2 = t.next, n = (t.f & zr) !== 0 || (t.f & Ke) !== 0;
        $o(t, n ? r : false), t = a2;
      }
      if (e.transitions !== null)
        for (const o of e.transitions)
          (o.is_global || r) && o.in();
    }
  }
  var La = false;
  var Ba = [];
  function gl() {
    La = false;
    const e = Ba.slice();
    Ba = [], Na(e);
  }
  function Hr(e) {
    La || (La = true, queueMicrotask(gl)), Ba.push(e);
  }
  function _n(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  var ht = false;
  var Jt = false;
  var Qt = null;
  var rt = false;
  var gn = false;
  function Jn(e) {
    rt = e;
  }
  function Qn(e) {
    gn = e;
  }
  var Ra = [];
  var vt = 0;
  var le = null;
  function He(e) {
    le = e;
  }
  var Z = null;
  function qe(e) {
    Z = e;
  }
  var dr = null;
  function ml(e) {
    dr = e;
  }
  var Pe = null;
  var Me = 0;
  var Tr = null;
  function fl(e) {
    Tr = e;
  }
  var ei = 1;
  var Ua = 0;
  var Or = false;
  var $ = null;
  function $n(e) {
    $ = e;
  }
  function ri() {
    return ++ei;
  }
  function mn() {
    return !lt || $ !== null && $.l === null;
  }
  function dt(e) {
    var c2;
    var r = e.f;
    if ((r & qr) !== 0)
      return true;
    if ((r & Dt) !== 0) {
      var t = e.deps, a2 = (r & Vr) !== 0;
      if (t !== null) {
        var n, o, i = (r & Kt) !== 0, s2 = a2 && Z !== null && !Or, l2 = t.length;
        if (i || s2) {
          for (n = 0; n < l2; n++)
            o = t[n], (i || !((c2 = o == null ? void 0 : o.reactions) != null && c2.includes(e))) && (o.reactions ?? (o.reactions = [])).push(e);
          i && (e.f ^= Kt);
        }
        for (n = 0; n < l2; n++)
          if (o = t[n], dt(
            /** @type {Derived} */
            o
          ) && Wo(
            /** @type {Derived} */
            o
          ), o.wv > e.wv)
            return true;
      }
      (!a2 || Z !== null && !Or) && Je(e, Ie);
    }
    return false;
  }
  function yl(e, r) {
    for (var t = r; t !== null; ) {
      if ((t.f & Zt) !== 0)
        try {
          t.fn(e);
          return;
        } catch {
          t.f ^= Zt;
        }
      t = t.parent;
    }
    throw ht = false, e;
  }
  function bl(e) {
    return (e.f & st) === 0 && (e.parent === null || (e.parent.f & Zt) === 0);
  }
  function Ta() {
    ht = false;
  }
  function Mt(e, r, t, a2) {
    if (ht) {
      if (t === null && (ht = false), bl(r))
        throw e;
      return;
    }
    t !== null && (ht = true);
    {
      yl(e, r);
      return;
    }
  }
  function ti(e) {
    var _;
    var r = Pe, t = Me, a2 = Tr, n = le, o = Or, i = dr, s2 = $, l2 = e.f;
    Pe = /** @type {null | Value[]} */
    null, Me = 0, Tr = null, le = (l2 & (Ke | zt)) === 0 ? e : null, Or = !rt && (l2 & Vr) !== 0, dr = null, $ = e.ctx, Ua++;
    try {
      var c2 = (
        /** @type {Function} */
        (0, e.fn)()
      ), p2 = e.deps;
      if (Pe !== null) {
        var u;
        if (St(e, Me), p2 !== null && Me > 0)
          for (p2.length = Me + Pe.length, u = 0; u < Pe.length; u++)
            p2[Me + u] = Pe[u];
        else
          e.deps = p2 = Pe;
        if (!Or)
          for (u = Me; u < p2.length; u++)
            ((_ = p2[u]).reactions ?? (_.reactions = [])).push(e);
      } else p2 !== null && Me < p2.length && (St(e, Me), p2.length = Me);
      return c2;
    } finally {
      Pe = r, Me = t, Tr = a2, le = n, Or = o, dr = i, $ = s2;
    }
  }
  function hl(e, r) {
    let t = r.reactions;
    if (t !== null) {
      var a2 = Rs.call(t, e);
      if (a2 !== -1) {
        var n = t.length - 1;
        n === 0 ? t = r.reactions = null : (t[a2] = t[n], t.pop());
      }
    }
    t === null && (r.f & Ze) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (Pe === null || !Pe.includes(r)) && (Je(r, Dt), (r.f & (Vr | Kt)) === 0 && (r.f ^= Kt), St(
      /** @type {Derived} **/
      r,
      0
    ));
  }
  function St(e, r) {
    var t = e.deps;
    if (t !== null)
      for (var a2 = r; a2 < t.length; a2++)
        hl(e, t[a2]);
  }
  function jt(e) {
    var r = e.f;
    if ((r & st) === 0) {
      Je(e, Ie);
      var t = Z, a2 = $;
      Z = e;
      try {
        (r & _a) !== 0 ? _l(e) : Ko(e), Zo(e), Xo(e);
        var n = ti(e);
        e.teardown = typeof n == "function" ? n : null, e.wv = ei;
        var o = e.deps, i;
        Gn && nl && e.f & qr;
      } catch (s2) {
        Mt(s2, e, t, a2 || e.ctx);
      } finally {
        Z = t;
      }
    }
  }
  function vl() {
    if (vt > 1e3) {
      vt = 0;
      try {
        Qs();
      } catch (e) {
        if (Qt !== null)
          Mt(e, Qt, null);
        else
          throw e;
      }
    }
    vt++;
  }
  function kl(e) {
    var r = e.length;
    if (r !== 0) {
      vl();
      var t = rt;
      rt = true;
      try {
        for (var a2 = 0; a2 < r; a2++) {
          var n = e[a2];
          (n.f & Ie) === 0 && (n.f ^= Ie);
          var o = [];
          ai(n, o), wl(o);
        }
      } finally {
        rt = t;
      }
    }
  }
  function wl(e) {
    var r = e.length;
    if (r !== 0)
      for (var t = 0; t < r; t++) {
        var a2 = e[t];
        if ((a2.f & (st | cr)) === 0)
          try {
            dt(a2) && (jt(a2), a2.deps === null && a2.first === null && a2.nodes_start === null && (a2.teardown === null ? Jo(a2) : a2.fn = null));
          } catch (n) {
            Mt(n, a2, null, a2.ctx);
          }
      }
  }
  function xl() {
    if (Jt = false, vt > 1001)
      return;
    const e = Ra;
    Ra = [], kl(e), Jt || (vt = 0, Qt = null);
  }
  function ba(e) {
    Jt || (Jt = true, queueMicrotask(xl)), Qt = e;
    for (var r = e; r.parent !== null; ) {
      r = r.parent;
      var t = r.f;
      if ((t & (zt | Ke)) !== 0) {
        if ((t & Ie) === 0) return;
        r.f ^= Ie;
      }
    }
    Ra.push(r);
  }
  function ai(e, r) {
    var t = e.first, a2 = [];
    e: for (; t !== null; ) {
      var n = t.f, o = (n & Ke) !== 0, i = o && (n & Ie) !== 0, s2 = t.next;
      if (!i && (n & cr) === 0)
        if ((n & Ft) !== 0) {
          if (o)
            t.f ^= Ie;
          else
            try {
              dt(t) && jt(t);
            } catch (u) {
              Mt(u, t, null, t.ctx);
            }
          var l2 = t.first;
          if (l2 !== null) {
            t = l2;
            continue;
          }
        } else (n & Ao) !== 0 && a2.push(t);
      if (s2 === null) {
        let u = t.parent;
        for (; u !== null; ) {
          if (e === u)
            break e;
          var c2 = u.next;
          if (c2 !== null) {
            t = c2;
            continue e;
          }
          u = u.parent;
        }
      }
      t = s2;
    }
    for (var p2 = 0; p2 < a2.length; p2++)
      l2 = a2[p2], r.push(l2), ai(l2, r);
  }
  function d(e) {
    var p2;
    var r = e.f, t = (r & Ze) !== 0;
    if (t && (r & st) !== 0) {
      var a2 = Ho(
        /** @type {Derived} */
        e
      );
      return un(
        /** @type {Derived} */
        e
      ), a2;
    }
    if (le !== null) {
      dr !== null && dr.includes(e) && tl();
      var n = le.deps;
      e.rv < Ua && (e.rv = Ua, Pe === null && n !== null && n[Me] === e ? Me++ : Pe === null ? Pe = [e] : Pe.push(e), Tr !== null && Z !== null && (Z.f & Ie) !== 0 && (Z.f & Ke) === 0 && Tr.includes(e) && (Je(Z, qr), ba(Z)));
    } else if (t && /** @type {Derived} */
    e.deps === null)
      for (var o = (
        /** @type {Derived} */
        e
      ), i = o.parent, s2 = o; i !== null; )
        if ((i.f & Ze) !== 0) {
          var l2 = (
            /** @type {Derived} */
            i
          );
          s2 = l2, i = l2.parent;
        } else {
          var c2 = (
            /** @type {Effect} */
            i
          );
          (p2 = c2.deriveds) != null && p2.includes(s2) || (c2.deriveds ?? (c2.deriveds = [])).push(s2);
          break;
        }
    return t && (o = /** @type {Derived} */
    e, dt(o) && Wo(o)), e.v;
  }
  function br(e) {
    const r = le;
    try {
      return le = null, e();
    } finally {
      le = r;
    }
  }
  var Pl = -7169;
  function Je(e, r) {
    e.f = e.f & Pl | r;
  }
  function Ee(e) {
    return (
      /** @type {T} */
      ni().get(e)
    );
  }
  function Ia(e, r) {
    return ni().set(e, r), r;
  }
  function ni(e) {
    return $ === null && _n(), $.c ?? ($.c = new Map(Sl($) || void 0));
  }
  function Sl(e) {
    let r = e.p;
    for (; r !== null; ) {
      const t = r.c;
      if (t !== null)
        return t;
      r = r.p;
    }
    return null;
  }
  function V(e, r = false, t) {
    $ = {
      p: $,
      c: null,
      e: null,
      m: false,
      s: e,
      x: null,
      l: null
    }, lt && !r && ($.l = {
      s: null,
      u: null,
      r1: [],
      r2: je(false)
    });
  }
  function H(e) {
    const r = $;
    if (r !== null) {
      e !== void 0 && (r.x = e);
      const i = r.e;
      if (i !== null) {
        var t = Z, a2 = le;
        r.e = null;
        try {
          for (var n = 0; n < i.length; n++) {
            var o = i[n];
            qe(o.effect), He(o.reaction), fa(o.fn);
          }
        } finally {
          qe(t), He(a2);
        }
      }
      $ = r.p, r.m = true;
    }
    return e || /** @type {T} */
    {};
  }
  function Va(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
      if (Er in e)
        Ha(e);
      else if (!Array.isArray(e))
        for (let r in e) {
          const t = e[r];
          typeof t == "object" && t && Er in t && Ha(t);
        }
    }
  }
  function Ha(e, r = /* @__PURE__ */ new Set()) {
    if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
    !(e instanceof EventTarget) && !r.has(e)) {
      r.add(e), e instanceof Date && e.getTime();
      for (let a2 in e)
        try {
          Ha(e[a2], r);
        } catch {
        }
      const t = ln(e);
      if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
        const a2 = Do(t);
        for (let n in a2) {
          const o = a2[n].get;
          if (o)
            try {
              o.call(e);
            } catch {
            }
        }
      }
    }
  }
  function El(e, r) {
    if (r) {
      const t = document.body;
      e.autofocus = true, Hr(() => {
        document.activeElement === t && e.focus();
      });
    }
  }
  function Tl(e) {
    var r = le, t = Z;
    He(null), qe(null);
    try {
      return e();
    } finally {
      He(r), qe(t);
    }
  }
  var oi = /* @__PURE__ */ new Set();
  var Wa = /* @__PURE__ */ new Set();
  function ii(e, r, t, a2) {
    function n(o) {
      if (a2.capture || ft.call(r, o), !o.cancelBubble)
        return Tl(() => t.call(this, o));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Hr(() => {
      r.addEventListener(e, n, a2);
    }) : r.addEventListener(e, n, a2), n;
  }
  function nt(e, r, t, a2, n) {
    var o = { capture: a2, passive: n }, i = ii(e, r, t, o);
    (r === document.body || r === window || r === document) && Go(() => {
      r.removeEventListener(e, i, o);
    });
  }
  function ha(e) {
    for (var r = 0; r < e.length; r++)
      oi.add(e[r]);
    for (var t of Wa)
      t(e);
  }
  function ft(e) {
    var y2;
    var r = this, t = (
      /** @type {Node} */
      r.ownerDocument
    ), a2 = e.type, n = ((y2 = e.composedPath) == null ? void 0 : y2.call(e)) || [], o = (
      /** @type {null | Element} */
      n[0] || e.target
    ), i = 0, s2 = e.__root;
    if (s2) {
      var l2 = n.indexOf(s2);
      if (l2 !== -1 && (r === document || r === /** @type {any} */
      window)) {
        e.__root = r;
        return;
      }
      var c2 = n.indexOf(r);
      if (c2 === -1)
        return;
      l2 <= c2 && (i = l2);
    }
    if (o = /** @type {Element} */
    n[i] || e.target, o !== r) {
      Us(e, "currentTarget", {
        configurable: true,
        get() {
          return o || t;
        }
      });
      var p2 = le, u = Z;
      He(null), qe(null);
      try {
        for (var _, g2 = []; o !== null; ) {
          var m2 = o.assignedSlot || o.parentNode || /** @type {any} */
          o.host || null;
          try {
            var f2 = o["__" + a2];
            if (f2 !== void 0 && !/** @type {any} */
            o.disabled)
              if (pa(f2)) {
                var [h2, ...v] = f2;
                h2.apply(o, [e, ...v]);
              } else
                f2.call(o, e);
          } catch (x2) {
            _ ? g2.push(x2) : _ = x2;
          }
          if (e.cancelBubble || m2 === r || m2 === null)
            break;
          o = m2;
        }
        if (_) {
          for (let x2 of g2)
            queueMicrotask(() => {
              throw x2;
            });
          throw _;
        }
      } finally {
        e.__root = r, delete e.currentTarget, He(p2), qe(u);
      }
    }
  }
  function fn(e) {
    var r = document.createElement("template");
    return r.innerHTML = e, r.content;
  }
  function Ur(e, r) {
    var t = (
      /** @type {Effect} */
      Z
    );
    t.nodes_start === null && (t.nodes_start = e, t.nodes_end = r);
  }
  // @__NO_SIDE_EFFECTS__
  function I2(e, r) {
    var t = (r & Ds) !== 0, a2 = (r & As) !== 0, n, o = !e.startsWith("<!>");
    return () => {
      n === void 0 && (n = fn(o ? e : "<!>" + e), t || (n = /** @type {Node} */
      /* @__PURE__ */ Br(n)));
      var i = (
        /** @type {TemplateNode} */
        a2 ? document.importNode(n, true) : n.cloneNode(true)
      );
      if (t) {
        var s2 = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ Br(i)
        ), l2 = (
          /** @type {TemplateNode} */
          i.lastChild
        );
        Ur(s2, l2);
      } else
        Ur(i, i);
      return i;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function pr(e, r, t = "svg") {
    var a2 = !e.startsWith("<!>"), n = `<${t}>${a2 ? e : "<!>" + e}</${t}>`, o;
    return () => {
      if (!o) {
        var i = (
          /** @type {DocumentFragment} */
          fn(n)
        ), s2 = (
          /** @type {Element} */
          /* @__PURE__ */ Br(i)
        );
        o = /** @type {Element} */
        /* @__PURE__ */ Br(s2);
      }
      var l2 = (
        /** @type {TemplateNode} */
        o.cloneNode(true)
      );
      return Ur(l2, l2), l2;
    };
  }
  function ie(e = "") {
    {
      var r = At(e + "");
      return Ur(r, r), r;
    }
  }
  function ee() {
    var e = document.createDocumentFragment(), r = document.createComment(""), t = At();
    return e.append(r, t), Ur(r, t), e;
  }
  function b2(e, r) {
    e !== null && e.before(
      /** @type {Node} */
      r
    );
  }
  var $t = true;
  function eo(e) {
    $t = e;
  }
  function te(e, r) {
    var t = r == null ? "" : typeof r == "object" ? r + "" : r;
    t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t == null ? "" : t + "");
  }
  function ro(e, r) {
    return Il(e, r);
  }
  var Xr = /* @__PURE__ */ new Map();
  function Il(e, { target: r, anchor: t, props: a2 = {}, events: n, context: o, intro: i = true }) {
    il();
    var s2 = /* @__PURE__ */ new Set(), l2 = (u) => {
      for (var _ = 0; _ < u.length; _++) {
        var g2 = u[_];
        if (!s2.has(g2)) {
          s2.add(g2);
          var m2 = Bs(g2);
          r.addEventListener(g2, ft, { passive: m2 });
          var f2 = Xr.get(g2);
          f2 === void 0 ? (document.addEventListener(g2, ft, { passive: m2 }), Xr.set(g2, 1)) : Xr.set(g2, f2 + 1);
        }
      }
    };
    l2(sn(oi)), Wa.add(l2);
    var c2 = void 0, p2 = ul(() => {
      var u = t ?? r.appendChild(At());
      return Ue(() => {
        if (o) {
          V({});
          var _ = (
            /** @type {ComponentContext} */
            $
          );
          _.c = o;
        }
        n && (a2.$$events = n), $t = i, c2 = e(u, a2) || {}, $t = true, o && H();
      }), () => {
        var m2;
        for (var _ of s2) {
          r.removeEventListener(_, ft);
          var g2 = (
            /** @type {number} */
            Xr.get(_)
          );
          --g2 === 0 ? (document.removeEventListener(_, ft), Xr.delete(_)) : Xr.set(_, g2);
        }
        Wa.delete(l2), u !== t && ((m2 = u.parentNode) == null || m2.removeChild(u));
      };
    });
    return Ya.set(c2, p2), c2;
  }
  var Ya = /* @__PURE__ */ new WeakMap();
  function qa(e, r) {
    const t = Ya.get(e);
    return t ? (Ya.delete(e), t(r)) : Promise.resolve();
  }
  function N(e, r, t = false) {
    var a2 = e, n = null, o = null, i = Te, s2 = t ? zr : 0, l2 = false;
    const c2 = (u, _ = true) => {
      l2 = true, p2(_, u);
    }, p2 = (u, _) => {
      i !== (i = u) && (i ? (n ? Pt(n) : _ && (n = Ue(() => _(a2))), o && Rr(o, () => {
        o = null;
      })) : (o ? Pt(o) : _ && (o = Ue(() => _(a2))), n && Rr(n, () => {
        n = null;
      })));
    };
    Dr(() => {
      l2 = false, r(c2), l2 || p2(null, null);
    }, s2);
  }
  function ot(e, r) {
    return r;
  }
  function ql(e, r, t, a2) {
    for (var n = [], o = r.length, i = 0; i < o; i++)
      pn(r[i].e, n, true);
    var s2 = o > 0 && n.length === 0 && t !== null;
    if (s2) {
      var l2 = (
        /** @type {Element} */
        /** @type {Element} */
        t.parentNode
      );
      sl(l2), l2.append(
        /** @type {Element} */
        t
      ), a2.clear(), Pr(e, r[0].prev, r[o - 1].next);
    }
    Qo(n, () => {
      for (var c2 = 0; c2 < o; c2++) {
        var p2 = r[c2];
        s2 || (a2.delete(p2.k), Pr(e, p2.prev, p2.next)), Ve(p2.e, !s2);
      }
    });
  }
  function it(e, r, t, a2, n, o = null) {
    var i = e, s2 = { flags: r, items: /* @__PURE__ */ new Map(), first: null }, l2 = (r & zo) !== 0;
    if (l2) {
      var c2 = (
        /** @type {Element} */
        e
      );
      i = c2.appendChild(At());
    }
    var p2 = null, u = false;
    Dr(() => {
      var _ = t(), g2 = pa(_) ? _ : _ == null ? [] : sn(_), m2 = g2.length;
      if (!(u && m2 === 0)) {
        u = m2 === 0;
        {
          var f2 = (
            /** @type {Effect} */
            le
          );
          Fl(
            g2,
            s2,
            i,
            n,
            r,
            (f2.f & cr) !== 0,
            a2
          );
        }
        o !== null && (m2 === 0 ? p2 ? Pt(p2) : p2 = Ue(() => o(i)) : p2 !== null && Rr(p2, () => {
          p2 = null;
        })), t();
      }
    });
  }
  function Fl(e, r, t, a2, n, o, i, s2) {
    var re, pe, ge, ce;
    var l2 = (n & ws) !== 0, c2 = (n & (nn | on)) !== 0, p2 = e.length, u = r.items, _ = r.first, g2 = _, m2, f2 = null, h2, v = [], y2 = [], x2, T2, S2, q;
    if (l2)
      for (q = 0; q < p2; q += 1)
        x2 = e[q], T2 = i(x2, q), S2 = u.get(T2), S2 !== void 0 && ((re = S2.a) == null || re.measure(), (h2 ?? (h2 = /* @__PURE__ */ new Set())).add(S2));
    for (q = 0; q < p2; q += 1) {
      if (x2 = e[q], T2 = i(x2, q), S2 = u.get(T2), S2 === void 0) {
        var B = g2 ? (
          /** @type {TemplateNode} */
          g2.e.nodes_start
        ) : t;
        f2 = Dl(
          B,
          r,
          f2,
          f2 === null ? r.first : f2.next,
          x2,
          T2,
          q,
          a2,
          n
        ), u.set(T2, f2), v = [], y2 = [], g2 = f2.next;
        continue;
      }
      if (c2 && zl(S2, x2, q, n), (S2.e.f & cr) !== 0 && (Pt(S2.e), l2 && ((pe = S2.a) == null || pe.unfix(), (h2 ?? (h2 = /* @__PURE__ */ new Set())).delete(S2))), S2 !== g2) {
        if (m2 !== void 0 && m2.has(S2)) {
          if (v.length < y2.length) {
            var k = y2[0], w2;
            f2 = k.prev;
            var z = v[0], Y = v[v.length - 1];
            for (w2 = 0; w2 < v.length; w2 += 1)
              to(v[w2], k, t);
            for (w2 = 0; w2 < y2.length; w2 += 1)
              m2.delete(y2[w2]);
            Pr(r, z.prev, Y.next), Pr(r, f2, z), Pr(r, Y, k), g2 = k, f2 = Y, q -= 1, v = [], y2 = [];
          } else
            m2.delete(S2), to(S2, g2, t), Pr(r, S2.prev, S2.next), Pr(r, S2, f2 === null ? r.first : f2.next), Pr(r, f2, S2), f2 = S2;
          continue;
        }
        for (v = [], y2 = []; g2 !== null && g2.k !== T2; )
          (o || (g2.e.f & cr) === 0) && (m2 ?? (m2 = /* @__PURE__ */ new Set())).add(g2), y2.push(g2), g2 = g2.next;
        if (g2 === null)
          continue;
        S2 = g2;
      }
      v.push(S2), f2 = S2, g2 = S2.next;
    }
    if (g2 !== null || m2 !== void 0) {
      for (var G = m2 === void 0 ? [] : sn(m2); g2 !== null; )
        (o || (g2.e.f & cr) === 0) && G.push(g2), g2 = g2.next;
      var ne = G.length;
      if (ne > 0) {
        var J = (n & zo) !== 0 && p2 === 0 ? t : null;
        if (l2) {
          for (q = 0; q < ne; q += 1)
            (ge = G[q].a) == null || ge.measure();
          for (q = 0; q < ne; q += 1)
            (ce = G[q].a) == null || ce.fix();
        }
        ql(r, G, J, u);
      }
    }
    l2 && Hr(() => {
      var he;
      if (h2 !== void 0)
        for (S2 of h2)
          (he = S2.a) == null || he.apply();
    }), Z.first = r.first && r.first.e, Z.last = f2 && f2.e;
  }
  function zl(e, r, t, a2) {
    (a2 & nn) !== 0 && Oa(e.v, r), (a2 & on) !== 0 ? Oa(
      /** @type {Value<number>} */
      e.i,
      t
    ) : e.i = t;
  }
  function Dl(e, r, t, a2, n, o, i, s2, l2, c2) {
    var p2 = (l2 & nn) !== 0, u = (l2 & xs) === 0, _ = p2 ? u ? /* @__PURE__ */ ga(n) : je(n) : n, g2 = (l2 & on) === 0 ? i : je(i), m2 = {
      i: g2,
      v: _,
      k: o,
      a: null,
      // @ts-expect-error
      e: null,
      prev: t,
      next: a2
    };
    try {
      return m2.e = Ue(() => s2(e, _, g2), dn), m2.e.prev = t && t.e, m2.e.next = a2 && a2.e, t === null ? r.first = m2 : (t.next = m2, t.e.next = m2.e), a2 !== null && (a2.prev = m2, a2.e.prev = m2.e), m2;
    } finally {
    }
  }
  function to(e, r, t) {
    for (var a2 = e.next ? (
      /** @type {TemplateNode} */
      e.next.e.nodes_start
    ) : t, n = r ? (
      /** @type {TemplateNode} */
      r.e.nodes_start
    ) : t, o = (
      /** @type {TemplateNode} */
      e.e.nodes_start
    ); o !== a2; ) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ma(o)
      );
      n.before(o), o = i;
    }
  }
  function Pr(e, r, t) {
    r === null ? e.first = t : (r.next = t, r.e.next = t && t.e), t !== null && (t.prev = r, t.e.prev = r && r.e);
  }
  function Wr(e, r, t, a2, n) {
    var o = e, i = "", s2;
    Dr(() => {
      i !== (i = r() ?? "") && (s2 !== void 0 && (Ve(s2), s2 = void 0), i !== "" && (s2 = Ue(() => {
        var l2 = i + "", c2 = fn(l2);
        Ur(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Br(c2),
          /** @type {TemplateNode} */
          c2.lastChild
        ), o.before(c2);
      })));
    });
  }
  function Al(e, r, t, a2, n) {
    var s2;
    var o = (s2 = r.$$slots) == null ? void 0 : s2[t], i = false;
    o === true && (o = r.children, i = true), o === void 0 || o(e, i ? () => a2 : a2);
  }
  function _e(e, r, ...t) {
    var a2 = e, n = ae, o;
    Dr(() => {
      n !== (n = r()) && (o && (Ve(o), o = null), o = Ue(() => (
        /** @type {SnippetFn} */
        n(a2, ...t)
      )));
    }, zr);
  }
  function Ml(e, r, t) {
    var a2 = e, n, o;
    Dr(() => {
      n !== (n = r()) && (o && (Rr(o), o = null), n && (o = Ue(() => t(a2, n))));
    }, zr);
  }
  function ea(e, r, t, a2, n, o) {
    var i, s2, l2 = null, c2 = (
      /** @type {TemplateNode} */
      e
    ), p2;
    Dr(() => {
      const u = r() || null;
      var _ = u === "svg" ? xt : null;
      u !== i && (p2 && (u === null ? Rr(p2, () => {
        p2 = null, s2 = null;
      }) : u === s2 ? Pt(p2) : (Ve(p2), eo(false))), u && u !== s2 && (p2 = Ue(() => {
        if (l2 = _ ? document.createElementNS(_, u) : document.createElement(u), Ur(l2, l2), a2) {
          var g2 = (
            /** @type {TemplateNode} */
            l2.appendChild(At())
          );
          a2(l2, g2);
        }
        Z.nodes_end = l2, c2.before(l2);
      })), i = u, i && (s2 = i), eo(true));
    }, zr);
  }
  function R2(e, r) {
    Hr(() => {
      var t = e.getRootNode(), a2 = (
        /** @type {ShadowRoot} */
        t.host ? (
          /** @type {ShadowRoot} */
          t
        ) : (
          /** @type {Document} */
          t.head ?? /** @type {Document} */
          t.ownerDocument.head
        )
      );
      if (!a2.querySelector("#" + r.hash)) {
        const n = document.createElement("style");
        n.id = r.hash, n.textContent = r.code, a2.appendChild(n);
      }
    });
  }
  function si(e) {
    var r, t, a2 = "";
    if (typeof e == "string" || typeof e == "number") a2 += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var n = e.length;
      for (r = 0; r < n; r++) e[r] && (t = si(e[r])) && (a2 && (a2 += " "), a2 += t);
    } else for (t in e) e[t] && (a2 && (a2 += " "), a2 += t);
    return a2;
  }
  function jl() {
    for (var e, r, t = 0, a2 = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (r = si(e)) && (a2 && (a2 += " "), a2 += r);
    return a2;
  }
  function li(e) {
    return typeof e == "object" ? jl(e) : e ?? "";
  }
  function Nl(e, r) {
    r ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
  }
  function j2(e, r, t, a2) {
    var n = e.__attributes ?? (e.__attributes = {});
    n[r] !== (n[r] = t) && (r === "style" && "__styles" in e && (e.__styles = {}), r === "loading" && (e[Xs] = t), t == null ? e.removeAttribute(r) : typeof t != "string" && ci(e).includes(r) ? e[r] = t : e.setAttribute(r, t));
  }
  function ra(e, r, t, a2, n = false, o = false, i = false) {
    var s2 = r || {}, l2 = e.tagName === "OPTION";
    for (var c2 in r)
      c2 in t || (t[c2] = null);
    t.class && (t.class = li(t.class)), a2 !== void 0 && (t.class = t.class ? t.class + " " + a2 : a2);
    var p2 = ci(e), u = (
      /** @type {Record<string, unknown>} **/
      e.__attributes ?? (e.__attributes = {})
    );
    for (const v in t) {
      let y2 = t[v];
      if (l2 && v === "value" && y2 == null) {
        e.value = e.__value = "", s2[v] = y2;
        continue;
      }
      var _ = s2[v];
      if (y2 !== _) {
        s2[v] = y2;
        var g2 = v[0] + v[1];
        if (g2 !== "$$") {
          if (g2 === "on") {
            const x2 = {}, T2 = "$$" + v;
            let S2 = v.slice(2);
            var m2 = Ns(S2);
            if (Ms(S2) && (S2 = S2.slice(0, -7), x2.capture = true), !m2 && _) {
              if (y2 != null) continue;
              e.removeEventListener(S2, s2[T2], x2), s2[T2] = null;
            }
            if (y2 != null)
              if (m2)
                e[`__${S2}`] = y2, ha([S2]);
              else {
                let q = function(B) {
                  s2[v].call(this, B);
                };
                s2[T2] = ii(S2, e, q, x2);
              }
            else m2 && (e[`__${S2}`] = void 0);
          } else if (v === "style" && y2 != null)
            e.style.cssText = y2 + "";
          else if (v === "autofocus")
            El(
              /** @type {HTMLElement} */
              e,
              !!y2
            );
          else if (v === "__value" || v === "value" && y2 != null)
            e.value = e[v] = e.__value = y2;
          else if (v === "selected" && l2)
            Nl(
              /** @type {HTMLOptionElement} */
              e,
              y2
            );
          else {
            var f2 = v;
            n || (f2 = Os(f2));
            var h2 = f2 === "defaultValue" || f2 === "defaultChecked";
            if (y2 == null && !o && !h2)
              if (u[v] = null, f2 === "value" || f2 === "checked") {
                let x2 = (
                  /** @type {HTMLInputElement} */
                  e
                );
                if (f2 === "value") {
                  let T2 = x2.defaultValue;
                  x2.removeAttribute(f2), x2.defaultValue = T2;
                } else {
                  let T2 = x2.defaultChecked;
                  x2.removeAttribute(f2), x2.defaultChecked = T2;
                }
              } else
                e.removeAttribute(v);
            else h2 || p2.includes(f2) && (o || typeof y2 != "string") ? e[f2] = y2 : typeof y2 != "function" && j2(e, f2, y2);
          }
          v === "style" && "__styles" in e && (e.__styles = {});
        }
      }
    }
    return s2;
  }
  var ao = /* @__PURE__ */ new Map();
  function ci(e) {
    var r = ao.get(e.nodeName);
    if (r) return r;
    ao.set(e.nodeName, r = []);
    for (var t, a2 = e, n = Element.prototype; n !== a2; ) {
      t = Do(a2);
      for (var o in t)
        t[o].set && r.push(o);
      a2 = ln(a2);
    }
    return r;
  }
  function Cl(e, r, t) {
    var a2 = e.__className, n = di(r, t);
    (a2 !== n || dn) && (n === "" ? e.removeAttribute("class") : e.setAttribute("class", n), e.__className = n);
  }
  function Fr(e, r, t) {
    var a2 = e.__className, n = di(r, t);
    (a2 !== n || dn) && (r == null && !t ? e.removeAttribute("class") : e.className = n, e.__className = n);
  }
  function di(e, r) {
    return (e ?? "") + (r ? " " + r : "");
  }
  function fr(e, r, t) {
    if (t) {
      if (e.classList.contains(r)) return;
      e.classList.add(r);
    } else {
      if (!e.classList.contains(r)) return;
      e.classList.remove(r);
    }
  }
  var Ol = () => performance.now();
  var mr = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (e) => requestAnimationFrame(e)
    ),
    now: () => Ol(),
    tasks: /* @__PURE__ */ new Set()
  };
  function ui() {
    const e = mr.now();
    mr.tasks.forEach((r) => {
      r.c(e) || (mr.tasks.delete(r), r.f());
    }), mr.tasks.size !== 0 && mr.tick(ui);
  }
  function Ll(e) {
    let r;
    return mr.tasks.size === 0 && mr.tick(ui), {
      promise: new Promise((t) => {
        mr.tasks.add(r = { c: e, f: t });
      }),
      abort() {
        mr.tasks.delete(r);
      }
    };
  }
  function Ht(e, r) {
    e.dispatchEvent(new CustomEvent(r));
  }
  function Bl(e) {
    if (e === "float") return "cssFloat";
    if (e === "offset") return "cssOffset";
    if (e.startsWith("--")) return e;
    const r = e.split("-");
    return r.length === 1 ? r[0] : r[0] + r.slice(1).map(
      /** @param {any} word */
      (t) => t[0].toUpperCase() + t.slice(1)
    ).join("");
  }
  function no(e) {
    const r = {}, t = e.split(";");
    for (const a2 of t) {
      const [n, o] = a2.split(":");
      if (!n || o === void 0) break;
      const i = Bl(n.trim());
      r[i] = o.trim();
    }
    return r;
  }
  var Rl = (e) => e;
  function pi(e, r, t, a2) {
    var n = (e & qs) !== 0, o = (e & Fs) !== 0, i = n && o, s2 = (e & zs) !== 0, l2 = i ? "both" : n ? "in" : "out", c2, p2 = r.inert, u, _;
    function g2() {
      var y2 = le, x2 = Z;
      He(null), qe(null);
      try {
        return c2 ?? (c2 = t()(r, (a2 == null ? void 0 : a2()) ?? /** @type {P} */
        {}, {
          direction: l2
        }));
      } finally {
        He(y2), qe(x2);
      }
    }
    var m2 = {
      is_global: s2,
      in() {
        var y2;
        if (r.inert = p2, !n) {
          _ == null || _.abort(), (y2 = _ == null ? void 0 : _.reset) == null || y2.call(_);
          return;
        }
        o || u == null || u.abort(), Ht(r, "introstart"), u = Ga(r, g2(), _, 1, () => {
          Ht(r, "introend"), u == null || u.abort(), u = c2 = void 0;
        });
      },
      out(y2) {
        if (!o) {
          y2 == null || y2(), c2 = void 0;
          return;
        }
        r.inert = true, Ht(r, "outrostart"), _ = Ga(r, g2(), u, 0, () => {
          Ht(r, "outroend"), y2 == null || y2();
        });
      },
      stop: () => {
        u == null || u.abort(), _ == null || _.abort();
      }
    }, f2 = (
      /** @type {Effect} */
      Z
    );
    if ((f2.transitions ?? (f2.transitions = [])).push(m2), n && $t) {
      var h2 = s2;
      if (!h2) {
        for (var v = (
          /** @type {Effect | null} */
          f2.parent
        ); v && (v.f & zr) !== 0; )
          for (; (v = v.parent) && (v.f & _a) === 0; )
            ;
        h2 = !v || (v.f & Mo) !== 0;
      }
      h2 && fa(() => {
        br(() => m2.in());
      });
    }
  }
  function Ga(e, r, t, a2, n) {
    var o = a2 === 1;
    if (Kr(r)) {
      var i, s2 = false;
      return Hr(() => {
        if (!s2) {
          var h2 = r({ direction: o ? "in" : "out" });
          i = Ga(e, h2, t, a2, n);
        }
      }), {
        abort: () => {
          s2 = true, i == null || i.abort();
        },
        deactivate: () => i.deactivate(),
        reset: () => i.reset(),
        t: () => i.t()
      };
    }
    if (t == null || t.deactivate(), !(r != null && r.duration))
      return n(), {
        abort: ae,
        deactivate: ae,
        reset: ae,
        t: () => a2
      };
    const { delay: l2 = 0, css: c2, tick: p2, easing: u = Rl } = r;
    var _ = [];
    if (o && t === void 0 && (p2 && p2(0, 1), c2)) {
      var g2 = no(c2(0, 1));
      _.push(g2, g2);
    }
    var m2 = () => 1 - a2, f2 = e.animate(_, { duration: l2 });
    return f2.onfinish = () => {
      var h2 = (t == null ? void 0 : t.t()) ?? 1 - a2;
      t == null || t.abort();
      var v = a2 - h2, y2 = (
        /** @type {number} */
        r.duration * Math.abs(v)
      ), x2 = [];
      if (y2 > 0) {
        if (c2)
          for (var T2 = Math.ceil(y2 / 16.666666666666668), S2 = 0; S2 <= T2; S2 += 1) {
            var q = h2 + v * u(S2 / T2), B = c2(q, 1 - q);
            x2.push(no(B));
          }
        m2 = () => {
          var k = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            f2.currentTime
          );
          return h2 + v * u(k / y2);
        }, p2 && Ll(() => {
          if (f2.playState !== "running") return false;
          var k = m2();
          return p2(k, 1 - k), true;
        });
      }
      f2 = e.animate(x2, { duration: y2, fill: "forwards" }), f2.onfinish = () => {
        m2 = () => a2, p2 == null || p2(a2, 1 - a2), n();
      };
    }, {
      abort: () => {
        f2 && (f2.cancel(), f2.effect = null, f2.onfinish = ae);
      },
      deactivate: () => {
        n = ae;
      },
      reset: () => {
        a2 === 0 && (p2 == null || p2(1, 0));
      },
      t: () => m2()
    };
  }
  function oo(e, r) {
    return e === r || (e == null ? void 0 : e[Er]) === r;
  }
  function _i(e = {}, r, t, a2) {
    return fa(() => {
      var n, o;
      return ya(() => {
        n = o, o = [], br(() => {
          e !== t(...o) && (r(e, ...o), n && oo(t(...n), e) && r(null, ...n));
        });
      }), () => {
        Hr(() => {
          o && oo(t(...o), e) && r(null, ...o);
        });
      };
    }), e;
  }
  function Qe(e = false) {
    const r = (
      /** @type {ComponentContextLegacy} */
      $
    ), t = r.l.u;
    if (!t) return;
    let a2 = () => Va(r.s);
    if (e) {
      let n = 0, o = (
        /** @type {Record<string, any>} */
        {}
      );
      const i = /* @__PURE__ */ E2(() => {
        let s2 = false;
        const l2 = r.s;
        for (const c2 in l2)
          l2[c2] !== o[c2] && (o[c2] = l2[c2], s2 = true);
        return s2 && n++, n;
      });
      a2 = () => d(i);
    }
    t.b.length && dl(() => {
      io(r, a2), Na(t.b);
    }), at(() => {
      const n = br(() => t.m.map(Ws));
      return () => {
        for (const o of n)
          typeof o == "function" && o();
      };
    }), t.a.length && at(() => {
      io(r, a2), Na(t.a);
    });
  }
  function io(e, r) {
    if (e.l.s)
      for (const t of e.l.s) d(t);
    r();
  }
  function gi(e, r) {
    var o;
    var t = (
      /** @type {Record<string, Function[] | Function>} */
      (o = e.$$events) == null ? void 0 : o[r.type]
    ), a2 = pa(t) ? t.slice() : t == null ? [] : [t];
    for (var n of a2)
      n.call(this, r);
  }
  function We(e) {
    $ === null && _n(), lt && $.l !== null ? Ul($).m.push(e) : at(() => {
      const r = br(e);
      if (typeof r == "function") return (
        /** @type {() => void} */
        r
      );
    });
  }
  function Nt(e) {
    $ === null && _n(), We(() => () => br(e));
  }
  function Ul(e) {
    var r = (
      /** @type {ComponentContextLegacy} */
      e.l
    );
    return r.u ?? (r.u = { a: [], b: [], m: [] });
  }
  function Vl(e, r, t) {
    if (e == null)
      return r(void 0), ae;
    const a2 = br(
      () => e.subscribe(
        r,
        // @ts-expect-error
        t
      )
    );
    return a2.unsubscribe ? () => a2.unsubscribe() : a2;
  }
  var Wt = false;
  function ze(e, r, t) {
    const a2 = t[r] ?? (t[r] = {
      store: null,
      source: /* @__PURE__ */ ga(void 0),
      unsubscribe: ae
    });
    if (a2.store !== e)
      if (a2.unsubscribe(), a2.store = e ?? null, e == null)
        a2.source.v = void 0, a2.unsubscribe = ae;
      else {
        var n = true;
        a2.unsubscribe = Vl(e, (o) => {
          n ? a2.source.v = o : D(a2.source, o);
        }), n = false;
      }
    return d(a2.source);
  }
  function De() {
    const e = {};
    return Go(() => {
      for (var r in e)
        e[r].unsubscribe();
    }), e;
  }
  function Hl(e) {
    var r = Wt;
    try {
      return Wt = false, [e(), Wt];
    } finally {
      Wt = r;
    }
  }
  var Wl = {
    get(e, r) {
      if (!e.exclude.includes(r))
        return e.props[r];
    },
    set(e, r) {
      return false;
    },
    getOwnPropertyDescriptor(e, r) {
      if (!e.exclude.includes(r) && r in e.props)
        return {
          enumerable: true,
          configurable: true,
          value: e.props[r]
        };
    },
    has(e, r) {
      return e.exclude.includes(r) ? false : r in e.props;
    },
    ownKeys(e) {
      return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
    }
  };
  // @__NO_SIDE_EFFECTS__
  function Ar(e, r, t) {
    return new Proxy(
      { props: e, exclude: r },
      Wl
    );
  }
  var Yl = {
    get(e, r) {
      let t = e.props.length;
      for (; t--; ) {
        let a2 = e.props[t];
        if (Kr(a2) && (a2 = a2()), typeof a2 == "object" && a2 !== null && r in a2) return a2[r];
      }
    },
    set(e, r, t) {
      let a2 = e.props.length;
      for (; a2--; ) {
        let n = e.props[a2];
        Kr(n) && (n = n());
        const o = Sr(n, r);
        if (o && o.set)
          return o.set(t), true;
      }
      return false;
    },
    getOwnPropertyDescriptor(e, r) {
      let t = e.props.length;
      for (; t--; ) {
        let a2 = e.props[t];
        if (Kr(a2) && (a2 = a2()), typeof a2 == "object" && a2 !== null && r in a2) {
          const n = Sr(a2, r);
          return n && !n.configurable && (n.configurable = true), n;
        }
      }
    },
    has(e, r) {
      if (r === Er || r === No) return false;
      for (let t of e.props)
        if (Kr(t) && (t = t()), t != null && r in t) return true;
      return false;
    },
    ownKeys(e) {
      const r = [];
      for (let t of e.props) {
        Kr(t) && (t = t());
        for (const a2 in t)
          r.includes(a2) || r.push(a2);
      }
      return r;
    }
  };
  function hr(...e) {
    return new Proxy({ props: e }, Yl);
  }
  function so(e) {
    for (var r = Z, t = Z; r !== null && (r.f & (Ke | zt)) === 0; )
      r = r.parent;
    try {
      return qe(r), e();
    } finally {
      qe(t);
    }
  }
  function U(e, r, t, a2) {
    var B;
    var n = (t & Ps) !== 0, o = !lt || (t & Ss) !== 0, i = (t & Ts) !== 0, s2 = (t & Is) !== 0, l2 = false, c2;
    i ? [c2, l2] = Hl(() => (
      /** @type {V} */
      e[r]
    )) : c2 = /** @type {V} */
    e[r];
    var p2 = Er in e || No in e, u = ((B = Sr(e, r)) == null ? void 0 : B.set) ?? (p2 && i && r in e ? (k) => e[r] = k : void 0), _ = (
      /** @type {V} */
      a2
    ), g2 = true, m2 = false, f2 = () => (m2 = true, g2 && (g2 = false, s2 ? _ = br(
      /** @type {() => V} */
      a2
    ) : _ = /** @type {V} */
    a2), _);
    c2 === void 0 && a2 !== void 0 && (u && o && $s(), c2 = f2(), u && u(c2));
    var h2;
    if (o)
      h2 = () => {
        var k = (
          /** @type {V} */
          e[r]
        );
        return k === void 0 ? f2() : (g2 = true, m2 = false, k);
      };
    else {
      var v = so(
        () => (n ? E2 : et)(() => (
          /** @type {V} */
          e[r]
        ))
      );
      v.f |= Ys, h2 = () => {
        var k = d(v);
        return k !== void 0 && (_ = /** @type {V} */
        void 0), k === void 0 ? _ : k;
      };
    }
    if ((t & Es) === 0)
      return h2;
    if (u) {
      var y2 = e.$$legacy;
      return function(k, w2) {
        return arguments.length > 0 ? ((!o || !w2 || y2 || l2) && u(w2 ? h2() : k), k) : h2();
      };
    }
    var x2 = false, T2 = false, S2 = /* @__PURE__ */ ga(c2), q = so(
      () => /* @__PURE__ */ E2(() => {
        var k = h2(), w2 = d(S2);
        return x2 ? (x2 = false, T2 = true, w2) : (T2 = false, S2.v = k);
      })
    );
    return n || (q.equals = cn), function(k, w2) {
      if (arguments.length > 0) {
        const z = w2 ? d(q) : o && i ? L2(k) : k;
        return q.equals(z) || (x2 = true, D(S2, z), m2 && _ !== void 0 && (_ = z), br(() => d(q))), k;
      }
      return d(q);
    };
  }
  function lo(e, r) {
    var t = Z, a2 = le, n = $;
    qe(e), He(e), $n(e.ctx);
    try {
      r();
    } finally {
      qe(t), He(a2), $n(n);
    }
  }
  function Gl(e, r, t) {
    var a2 = e, n;
    Dr(() => {
      var o = (
        /** @type {Effect} */
        Z
      ), i = false;
      o.fn = (s2) => {
        var l2 = r.onerror;
        let c2 = r.failed;
        if (!l2 && !c2 || i)
          throw s2;
        var p2 = () => {
          Rr(n), lo(o, () => {
            i = false, n = Ue(() => t(a2)), Ta();
          });
        };
        l2 == null || l2(s2, p2), n && Ve(n), c2 && Hr(() => {
          lo(o, () => {
            i = true;
            try {
              n = Ue(() => {
                c2(
                  a2,
                  () => s2,
                  () => p2
                );
              });
            } catch (u) {
              Mt(u, o, null, o.ctx);
            }
            Ta(), i = false;
          });
        });
      }, n = Ue(() => t(a2)), Ta();
    }, zr | Zt);
  }
  var Se = /* @__PURE__ */ ((e) => (e[e.UnknownError = 0] = "UnknownError", e[e.UserCancelledError = 1] = "UserCancelledError", e[e.StoreProblemError = 2] = "StoreProblemError", e[e.PurchaseNotAllowedError = 3] = "PurchaseNotAllowedError", e[e.PurchaseInvalidError = 4] = "PurchaseInvalidError", e[e.ProductNotAvailableForPurchaseError = 5] = "ProductNotAvailableForPurchaseError", e[e.ProductAlreadyPurchasedError = 6] = "ProductAlreadyPurchasedError", e[e.ReceiptAlreadyInUseError = 7] = "ReceiptAlreadyInUseError", e[e.InvalidReceiptError = 8] = "InvalidReceiptError", e[e.MissingReceiptFileError = 9] = "MissingReceiptFileError", e[e.NetworkError = 10] = "NetworkError", e[e.InvalidCredentialsError = 11] = "InvalidCredentialsError", e[e.UnexpectedBackendResponseError = 12] = "UnexpectedBackendResponseError", e[e.InvalidAppUserIdError = 14] = "InvalidAppUserIdError", e[e.OperationAlreadyInProgressError = 15] = "OperationAlreadyInProgressError", e[e.UnknownBackendError = 16] = "UnknownBackendError", e[e.InvalidAppleSubscriptionKeyError = 17] = "InvalidAppleSubscriptionKeyError", e[e.IneligibleError = 18] = "IneligibleError", e[e.InsufficientPermissionsError = 19] = "InsufficientPermissionsError", e[e.PaymentPendingError = 20] = "PaymentPendingError", e[e.InvalidSubscriberAttributesError = 21] = "InvalidSubscriberAttributesError", e[e.LogOutWithAnonymousUserError = 22] = "LogOutWithAnonymousUserError", e[e.ConfigurationError = 23] = "ConfigurationError", e[e.UnsupportedError = 24] = "UnsupportedError", e[e.EmptySubscriberAttributesError = 25] = "EmptySubscriberAttributesError", e[e.CustomerInfoError = 28] = "CustomerInfoError", e[e.SignatureVerificationError = 36] = "SignatureVerificationError", e[e.InvalidEmailError = 38] = "InvalidEmailError", e))(Se || {});
  var kt = class {
    // This is the message shown to developers. It is not intended to be displayed to end customers.
    static getPublicMessage(r) {
      switch (r) {
        case 0:
          return "Unknown error.";
        case 1:
          return "Purchase was cancelled.";
        case 2:
          return "There was a problem with the store.";
        case 3:
          return "The device or user is not allowed to make the purchase.";
        case 4:
          return "One or more of the arguments provided are invalid.";
        case 5:
          return "The product is not available for purchase.";
        case 6:
          return "This product is already active for the user.";
        case 7:
          return "There is already another active subscriber using the same receipt.";
        case 8:
          return "The receipt is not valid.";
        case 9:
          return "The receipt is missing.";
        case 10:
          return "Error performing request. Please check your network connection and try again.";
        case 11:
          return "There was a credentials issue. Check the underlying error for more details.";
        case 12:
          return "Received unexpected response from the backend.";
        case 14:
          return "The app user id is not valid.";
        case 15:
          return "The operation is already in progress.";
        case 16:
          return "There was an unknown backend error.";
        case 17:
          return "Apple Subscription Key is invalid or not present. In order to provide subscription offers, you must first generate a subscription key. Please see https://docs.revenuecat.com/docs/ios-subscription-offers for more info.";
        case 18:
          return "The User is ineligible for that action.";
        case 19:
          return "App does not have sufficient permissions to make purchases.";
        case 20:
          return "The payment is pending.";
        case 21:
          return "One or more of the attributes sent could not be saved.";
        case 22:
          return "Called logOut but the current user is anonymous.";
        case 23:
          return "There is an issue with your configuration. Check the underlying error for more details.";
        case 24:
          return "There was a problem with the operation. Looks like we doesn't support that yet. Check the underlying error for more details.";
        case 25:
          return "A request for subscriber attributes returned none.";
        case 28:
          return "There was a problem related to the customer info.";
        case 36:
          return "Request failed signature verification. Please see https://rev.cat/trusted-entitlements for more info.";
        case 38:
          return "Email is not valid. Please provide a valid email address.";
      }
    }
    static getErrorCodeForBackendErrorCode(r) {
      switch (r) {
        case 7101:
        case 7773:
        case 7898:
        case 7899:
        case 7900:
        case 7901:
          return 2;
        case 7102:
          return 7;
        case 7103:
          return 8;
        case 7107:
        case 7224:
        case 7225:
          return 11;
        case 7105:
        case 7106:
        case 7814:
        case 7877:
        case 7878:
          return 4;
        case 7772:
          return 6;
        case 7220:
          return 14;
        case 7259:
          return 28;
        case 7229:
          return 2;
        case 7230:
        case 7e3:
          return 23;
        case 7231:
          return 2;
        case 7232:
          return 18;
        case 7263:
        case 7264:
          return 21;
        case 7104:
        case 7234:
        case 7226:
        case 7110:
          return 12;
        case 7662:
          return 24;
        case 7012:
        case 7834:
        case 7879:
          return 38;
      }
    }
    static convertCodeToBackendErrorCode(r) {
      return r in wt ? r : null;
    }
    static convertPurchaseFlowErrorCodeToErrorCode(r) {
      switch (r) {
        case oe.ErrorSettingUpPurchase:
          return 2;
        case oe.ErrorChargingPayment:
          return 20;
        case oe.NetworkError:
          return 10;
        case oe.MissingEmailError:
          return 4;
        case oe.AlreadyPurchasedError:
          return 6;
        default:
          return 0;
      }
    }
  };
  var wt = /* @__PURE__ */ ((e) => (e[e.BackendInvalidPlatform = 7e3] = "BackendInvalidPlatform", e[e.BackendInvalidEmail = 7012] = "BackendInvalidEmail", e[e.BackendStoreProblem = 7101] = "BackendStoreProblem", e[e.BackendCannotTransferPurchase = 7102] = "BackendCannotTransferPurchase", e[e.BackendInvalidReceiptToken = 7103] = "BackendInvalidReceiptToken", e[e.BackendInvalidAppStoreSharedSecret = 7104] = "BackendInvalidAppStoreSharedSecret", e[e.BackendInvalidPaymentModeOrIntroPriceNotProvided = 7105] = "BackendInvalidPaymentModeOrIntroPriceNotProvided", e[e.BackendProductIdForGoogleReceiptNotProvided = 7106] = "BackendProductIdForGoogleReceiptNotProvided", e[e.BackendInvalidPlayStoreCredentials = 7107] = "BackendInvalidPlayStoreCredentials", e[e.BackendInternalServerError = 7110] = "BackendInternalServerError", e[e.BackendEmptyAppUserId = 7220] = "BackendEmptyAppUserId", e[e.BackendInvalidAuthToken = 7224] = "BackendInvalidAuthToken", e[e.BackendInvalidAPIKey = 7225] = "BackendInvalidAPIKey", e[e.BackendBadRequest = 7226] = "BackendBadRequest", e[e.BackendPlayStoreQuotaExceeded = 7229] = "BackendPlayStoreQuotaExceeded", e[e.BackendPlayStoreInvalidPackageName = 7230] = "BackendPlayStoreInvalidPackageName", e[e.BackendPlayStoreGenericError = 7231] = "BackendPlayStoreGenericError", e[e.BackendUserIneligibleForPromoOffer = 7232] = "BackendUserIneligibleForPromoOffer", e[e.BackendInvalidAppleSubscriptionKey = 7234] = "BackendInvalidAppleSubscriptionKey", e[e.BackendSubscriberNotFound = 7259] = "BackendSubscriberNotFound", e[e.BackendInvalidSubscriberAttributes = 7263] = "BackendInvalidSubscriberAttributes", e[e.BackendInvalidSubscriberAttributesBody = 7264] = "BackendInvalidSubscriberAttributesBody", e[e.BackendProductIDsMalformed = 7662] = "BackendProductIDsMalformed", e[e.BackendAlreadySubscribedError = 7772] = "BackendAlreadySubscribedError", e[e.BackendPaymentGatewayGenericError = 7773] = "BackendPaymentGatewayGenericError", e[e.BackendOfferNotFound = 7814] = "BackendOfferNotFound", e[e.BackendNoMXRecordsFound = 7834] = "BackendNoMXRecordsFound", e[e.BackendInvalidOperationSession = 7877] = "BackendInvalidOperationSession", e[e.BackendPurchaseCannotBeCompleted = 7878] = "BackendPurchaseCannotBeCompleted", e[e.BackendEmailIsRequired = 7879] = "BackendEmailIsRequired", e[e.BackendGatewaySetupErrorStripeTaxNotActive = 7898] = "BackendGatewaySetupErrorStripeTaxNotActive", e[e.BackendGatewaySetupErrorInvalidTaxOriginAddress = 7899] = "BackendGatewaySetupErrorInvalidTaxOriginAddress", e[e.BackendGatewaySetupErrorMissingRequiredPermission = 7900] = "BackendGatewaySetupErrorMissingRequiredPermission", e[e.BackendGatewaySetupErrorSandboxModeOnly = 7901] = "BackendGatewaySetupErrorSandboxModeOnly", e))(wt || {});
  var ye = class _ye extends Error {
    constructor(t, a2, n, o) {
      super(a2);
      M(this, "toString", () => `PurchasesError(code: ${Se[this.errorCode]}, message: ${this.message})`);
      this.errorCode = t, this.underlyingErrorMessage = n, this.extra = o;
    }
    /** @internal */
    static getForBackendError(t, a2) {
      const n = kt.getErrorCodeForBackendErrorCode(t);
      return new _ye(
        n,
        kt.getPublicMessage(n),
        a2,
        { backendErrorCode: t }
      );
    }
    /** @internal */
    static getForPurchasesFlowError(t) {
      return new _ye(
        kt.convertPurchaseFlowErrorCodeToErrorCode(
          t.errorCode
        ),
        t.message,
        t.underlyingErrorMessage
      );
    }
  };
  var Xl = class extends Error {
    constructor() {
      super("Purchases must be configured before calling getInstance");
    }
  };
  var yt = /* @__PURE__ */ ((e) => (e.Started = "started", e.InProgress = "in_progress", e.Succeeded = "succeeded", e.Failed = "failed", e))(yt || {});
  var Jr = /* @__PURE__ */ ((e) => (e[e.SetupIntentCreationFailed = 1] = "SetupIntentCreationFailed", e[e.PaymentMethodCreationFailed = 2] = "PaymentMethodCreationFailed", e[e.PaymentChargeFailed = 3] = "PaymentChargeFailed", e[e.SetupIntentCompletionFailed = 4] = "SetupIntentCompletionFailed", e[e.AlreadyPurchased = 5] = "AlreadyPurchased", e))(Jr || {});
  var Ae = /* @__PURE__ */ ((e) => (e[e.Silent = 0] = "Silent", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Info = 3] = "Info", e[e.Debug = 4] = "Debug", e[e.Verbose = 5] = "Verbose", e))(Ae || {});
  var K = class {
    static setLogLevel(r) {
      this.logLevel = r;
    }
    static log(r, t = this.logLevel) {
      const a2 = `[Purchases] ${r}`;
      if (!(this.logLevel < t || t === Ae.Silent))
        switch (t) {
          case Ae.Error:
            console.error(a2);
            break;
          case Ae.Warn:
            console.warn(a2);
            break;
          case Ae.Info:
            console.info(a2);
            break;
          case Ae.Debug:
            console.debug(a2);
            break;
          case Ae.Verbose:
            console.debug(a2);
            break;
        }
    }
    static errorLog(r) {
      this.log(r, Ae.Error);
    }
    static warnLog(r) {
      this.log(r, Ae.Warn);
    }
    static infoLog(r) {
      this.log(r, Ae.Info);
    }
    static debugLog(r) {
      this.log(r, Ae.Debug);
    }
    static verboseLog(r) {
      this.log(r, Ae.Verbose);
    }
  };
  M(K, "logLevel", Ae.Silent);
  function Zl(e) {
    var r;
    return e.operation.redemption_info ? {
      redeemUrl: ((r = e.operation.redemption_info) == null ? void 0 : r.redeem_url) ?? null
    } : null;
  }
  var oe = /* @__PURE__ */ ((e) => (e[e.ErrorSettingUpPurchase = 0] = "ErrorSettingUpPurchase", e[e.ErrorChargingPayment = 1] = "ErrorChargingPayment", e[e.UnknownError = 2] = "UnknownError", e[e.NetworkError = 3] = "NetworkError", e[e.MissingEmailError = 4] = "MissingEmailError", e[e.AlreadyPurchasedError = 5] = "AlreadyPurchasedError", e[e.StripeTaxNotActive = 6] = "StripeTaxNotActive", e[e.StripeInvalidTaxOriginAddress = 7] = "StripeInvalidTaxOriginAddress", e[e.StripeMissingRequiredPermission = 8] = "StripeMissingRequiredPermission", e))(oe || {});
  var de = class _de extends Error {
    constructor(r, t, a2, n, o) {
      super(t), this.errorCode = r, this.underlyingErrorMessage = a2, this.purchasesErrorCode = n, this.extra = o;
    }
    getErrorCode() {
      var r;
      return ((r = this.extra) == null ? void 0 : r.backendErrorCode) ?? this.purchasesErrorCode ?? this.errorCode;
    }
    static fromPurchasesError(r, t) {
      var n;
      let a2;
      return r.errorCode === Se.ProductAlreadyPurchasedError ? a2 = 5 : r.errorCode === Se.InvalidEmailError ? a2 = 4 : r.errorCode === Se.NetworkError ? a2 = 3 : a2 = _de.fromBackendErrorCode((n = r.extra) == null ? void 0 : n.backendErrorCode) ?? t, new _de(
        a2,
        r.message,
        r.underlyingErrorMessage,
        r.errorCode,
        r.extra
      );
    }
    static fromBackendErrorCode(r) {
      switch (r) {
        case wt.BackendGatewaySetupErrorStripeTaxNotActive:
          return 6;
        case wt.BackendGatewaySetupErrorInvalidTaxOriginAddress:
          return 7;
        case wt.BackendGatewaySetupErrorMissingRequiredPermission:
          return 8;
        default:
          return null;
      }
    }
  };
  var Kl = class {
    constructor(r, t, a2 = 10) {
      M(this, "operationSessionId", null);
      M(this, "backend");
      M(this, "eventsTracker");
      M(this, "maxNumberAttempts");
      M(this, "waitMSBetweenAttempts", 1e3);
      this.backend = r, this.eventsTracker = t, this.maxNumberAttempts = a2;
    }
    async checkoutStart(r, t, a2, n, o, i) {
      try {
        const s2 = this.eventsTracker.getTraceId(), l2 = await this.backend.postCheckoutStart(
          r,
          t,
          n,
          a2,
          s2,
          o,
          i
        );
        return this.operationSessionId = l2.operation_session_id, l2;
      } catch (s2) {
        if (s2 instanceof ye)
          throw de.fromPurchasesError(
            s2,
            0
            /* ErrorSettingUpPurchase */
          );
        {
          const l2 = "Unknown error starting purchase: " + String(s2);
          throw K.errorLog(l2), new de(
            2,
            l2
          );
        }
      }
    }
    async checkoutCalculateTax(r, t, a2) {
      const n = this.operationSessionId;
      if (!n)
        throw new de(
          0,
          "No purchase started"
        );
      try {
        return await this.backend.postCheckoutCalculateTax(
          n,
          r,
          t,
          a2
        );
      } catch (o) {
        if (o instanceof ye)
          throw de.fromPurchasesError(
            o,
            0
            /* ErrorSettingUpPurchase */
          );
        {
          const i = "Unknown error calculating tax: " + String(o);
          throw K.errorLog(i), new de(
            2,
            i
          );
        }
      }
    }
    async checkoutComplete(r) {
      const t = this.operationSessionId;
      if (!t)
        throw new de(
          0,
          "No purchase started"
        );
      try {
        return await this.backend.postCheckoutComplete(
          t,
          r
        );
      } catch (a2) {
        if (a2 instanceof ye)
          throw de.fromPurchasesError(
            a2,
            0
            /* ErrorSettingUpPurchase */
          );
        {
          const n = "Unknown error starting purchase: " + String(a2);
          throw K.errorLog(n), new de(
            2,
            n
          );
        }
      }
    }
    async pollCurrentPurchaseForCompletion() {
      const r = this.operationSessionId;
      if (!r)
        throw new de(
          0,
          "No purchase in progress"
        );
      return new Promise((t, a2) => {
        const n = (o = 1) => {
          if (o > this.maxNumberAttempts) {
            this.clearPurchaseInProgress(), a2(
              new de(
                2,
                "Max attempts reached trying to get successful purchase status"
              )
            );
            return;
          }
          this.backend.getCheckoutStatus(r).then((i) => {
            switch (i.operation.status) {
              case yt.Started:
              case yt.InProgress:
                setTimeout(
                  () => n(o + 1),
                  this.waitMSBetweenAttempts
                );
                break;
              case yt.Succeeded:
                this.clearPurchaseInProgress(), t({
                  redemptionInfo: Zl(i),
                  operationSessionId: r
                });
                return;
              case yt.Failed:
                this.clearPurchaseInProgress(), this.handlePaymentError(
                  i.operation.error,
                  a2
                );
            }
          }).catch((i) => {
            const s2 = de.fromPurchasesError(
              i,
              3
              /* NetworkError */
            );
            a2(s2);
          });
        };
        n();
      });
    }
    clearPurchaseInProgress() {
      this.operationSessionId = null;
    }
    handlePaymentError(r, t) {
      if (r == null) {
        t(
          new de(
            2,
            "Got an error status but error field is empty."
          )
        );
        return;
      }
      switch (r.code) {
        case Jr.SetupIntentCreationFailed:
          t(
            new de(
              0,
              "Setup intent creation failed"
            )
          );
          return;
        case Jr.PaymentMethodCreationFailed:
          t(
            new de(
              0,
              "Payment method creation failed"
            )
          );
          return;
        case Jr.PaymentChargeFailed:
          t(
            new de(
              1,
              "Payment charge failed"
            )
          );
          return;
        case Jr.SetupIntentCompletionFailed:
          t(
            new de(
              0,
              "Setup intent completion failed"
            )
          );
          return;
        case Jr.AlreadyPurchased:
          t(
            new de(
              5,
              "Purchased was already completed"
            )
          );
          return;
        default:
          t(
            new de(
              2,
              "Unknown error code received"
            )
          );
          return;
      }
    }
  };
  var Ne = "rcb-ui-translator";
  var tt = "en";
  var Jl = {
    "periods.week": "{{amount}} week",
    "periods.month": "{{amount}} month",
    "periods.year": "{{amount}} year",
    "periods.day": "{{amount}} day",
    "periods.weekShort": "{{amount}}wk",
    "periods.monthShort": "{{amount}}mo",
    "periods.yearShort": "{{amount}}yr",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "lifetime",
    "periods.weekPlural": "{{amount}} weeks",
    "periods.monthPlural": "{{amount}} months",
    "periods.yearPlural": "{{amount}} years",
    "periods.dayPlural": "{{amount}} days",
    "periods.weekFrequency": "weekly",
    "periods.monthFrequency": "monthly",
    "periods.yearFrequency": "yearly",
    "periods.dayFrequency": "daily",
    "periods.perWeekFrequency": "per week",
    "periods.perMonthFrequency": "per month",
    "periods.perYearFrequency": "per year",
    "periods.perDayFrequency": "per day",
    "periods.unknownFrequency": "unknown",
    "periods.weekFrequencyPlural": "every {{amount}} weeks",
    "periods.monthFrequencyPlural": "every {{amount}} months",
    "periods.yearFrequencyPlural": "every {{amount}} years",
    "periods.dayFrequencyPlural": "every {{amount}} days",
    "product_info.subscribe_to": "Subscribe to",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "Free for {{trialDuration}}",
    "product_info.price_after_free_trial": "After trial ends, on {{renewalDate}}",
    "product_info.total_due_today": "Total due today",
    "product_info.renewal_frequency": "Renews {{frequency}}",
    "product_info.continues_until_cancelled": "Continues until cancelled",
    "product_info.cancel_anytime": "Cancel anytime",
    "payment_entry_page.payment_step_title": "Secure checkout by RevenueCat",
    "payment_entry_page.terms_info": "By providing your card information you allow {{appName}} to charge your card for future payments in accordance with their terms.",
    "payment_entry_page.trial_info": "After your trial ends, you will be charged {{price}} {{perFrequency}} starting {{renewalDate}}. You can always cancel before then.",
    "payment_entry_page.button_pay": "Pay now",
    "payment_entry_page.button_start_trial": "Start trial",
    "payment_entry_page.button_with_price": "Pay {{formattedPrice}}",
    "payment_entry_page.button_payment_method": "Pay {{formattedPrice}} with {{paymentMethod}}",
    "payment_entry_page.express_checkout_divider": "OR PAY BY CARD",
    "success_page.purchase_successful": "Payment complete",
    "success_page.button_close": "Continue",
    "error_page.close_button_title": "Go to {{appName}}",
    "error_page.if_error_persists": "If it persists, please contact ",
    "error_page.trouble_accessing": "If you're having trouble accessing your purchase, reach out to support on ",
    "error_page.error_title_already_subscribed": "You already subscribed to {{productTitle}}",
    "error_page.error_title_already_purchased": "You already purchased {{productTitle}}",
    "error_page.error_title_other_errors": "Something went wrong",
    "error_page.error_message_already_subscribed": "You can't subscribe to this product again.",
    "error_page.error_message_already_purchased": "You can't purchase this product again.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax not active",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Invalid tax origin address",
    "error_page.error_title_stripe_missing_required_permission": "Missing Stripe permission",
    "error_page.error_message_missing_email_error": "Email is required to complete the purchase.",
    "error_page.error_message_invalid_email_error": "The email address {{email}} couldn't be verified. Please provide a valid email address.",
    "error_page.error_message_network_error": "Network error. Please check your internet connection.",
    "error_page.error_message_error_charging_payment": "Payment failed.",
    "error_page.error_message_error_setting_up_purchase": "Purchase not started due to an error (error code: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "We couldn't verify your billing address. Please double-check that the postal code and country are correct.",
    "error_page.error_message_unknown_error": "An unknown error occurred (error code: {{errorCode}}).",
    "error_page.error_message_stripe_tax_not_active": "The purchase failed because Stripe Tax isn\u2019t enabled. In production, purchases will work without taxes applied.",
    "error_page.error_message_stripe_invalid_tax_origin_address": "The purchase failed because the tax origin address is invalid. In production, purchases will work without taxes applied.",
    "error_page.error_message_stripe_missing_required_permission": "The purchase failed because the Stripe app lacks a required permission. In production, purchases will work without taxes applied.",
    "error_page.error_only_in_sandbox": "This message appears only in sandbox.",
    "error_page.button_try_again": "Try again",
    "error_page.button_close": "Close",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% off",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "pricing_dropdown.show_details": "Show details",
    "pricing_dropdown.hide_details": "Hide details",
    "pricing_table.trial_ends": "After trial ends, on {{formattedTrialEndDate}}",
    "pricing_table.total_excluding_tax": "Total excluding tax",
    "pricing_table.total_due_today": "Total due today",
    "pricing_table.tax": "Tax",
    "pricing_table.enter_billing_address_to_calculate": "Enter billing address to calculate",
    "pricing_table.enter_postal_code_to_calculate": "Enter zip code to calculate",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Enter state or postal code to calculate",
    "navbar_header.details": "Details",
    "navbar_header.back_button": "Back",
    "price_update.title": "Price update",
    "price_update.base_message": "The total price was updated with tax based on your billing address. Please review and try again. Your card will only be charged once.",
    "price_update.trial_message": "The subscription price was updated to include tax based on your billing address. Free trial still applies. Review and try again.",
    "apple_pay.free_trial": "Free Trial"
  };
  var Ql = {
    "periods.week": "{{amount}} semana",
    "periods.month": "{{amount}} mes",
    "periods.year": "{{amount}} a\xF1o",
    "periods.day": "{{amount}} d\xEDa",
    "periods.weekShort": "{{amount}} sem",
    "periods.monthShort": "{{amount}}mes",
    "periods.yearShort": "{{amount}}a\xF1o",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "de por vida",
    "periods.weekPlural": "{{amount}} semanas",
    "periods.monthPlural": "{{amount}} meses",
    "periods.yearPlural": "{{amount}} a\xF1os",
    "periods.dayPlural": "{{amount}} d\xEDas",
    "periods.weekFrequency": "semanal",
    "periods.monthFrequency": "mensual",
    "periods.yearFrequency": "anual",
    "periods.dayFrequency": "diaria",
    "periods.perWeekFrequency": "por semana",
    "periods.perMonthFrequency": "por mes",
    "periods.perYearFrequency": "por a\xF1o",
    "periods.perDayFrequency": "por d\xEDa",
    "periods.unknownFrequency": "desconocida",
    "periods.weekFrequencyPlural": "cada {{amount}} semanas",
    "periods.monthFrequencyPlural": "cada {{amount}} meses",
    "periods.yearFrequencyPlural": "cada {{amount}} a\xF1os",
    "periods.dayFrequencyPlural": "cada {{amount}} d\xEDas",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} prueba gratuita",
    "product_info.price_after_free_trial": "Despu\xE9s de que termine el periodo de prueba, el {{renewalDate}}",
    "product_info.renewal_frequency": "Se renueva {{frequency}}",
    "product_info.continues_until_cancelled": "Continua hasta que se cancele",
    "product_info.cancel_anytime": "Cancelar en cualquier momento",
    "payment_entry_page.payment_step_title": "Pago seguro mediante RevenueCat",
    "payment_entry_page.terms_info": "Al proporcionar la informaci\xF3n de tu tarjeta, permites que {{appName}} cobre en tu tarjeta por pagos futuros de acuerdo con sus t\xE9rminos.",
    "payment_entry_page.button_pay": "Pagar ahora",
    "payment_entry_page.button_start_trial": "Comenzar prueba",
    "success_page.purchase_successful": "Pago completado",
    "success_page.button_close": "Continuar",
    "error_page.if_error_persists": "Si el error persiste, contacta con ",
    "error_page.error_title_already_subscribed": "Ya te has suscrito a {{productTitle}}",
    "error_page.error_title_already_purchased": "Ya has comprado {{productTitle}}",
    "error_page.error_title_other_errors": "Algo sali\xF3 mal",
    "error_page.error_message_already_subscribed": "No puedes suscribirte a este producto de nuevo.",
    "error_page.error_message_already_purchased": "No puedes comprar este producto de nuevo.",
    "error_page.error_message_missing_email_error": "Se requiere un correo electr\xF3nico para completar la compra.",
    "error_page.error_message_network_error": "Error de red. Por favor, comprueba tu conexi\xF3n a internet.",
    "error_page.error_message_error_charging_payment": "Pago fallido.",
    "error_page.error_message_error_setting_up_purchase": "No se pudo iniciar la compra debido a un error (c\xF3digo de error: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "No pudimos verificar tu direcci\xF3n de facturaci\xF3n. Por favor, verifica que el c\xF3digo postal y el pa\xEDs sean correctos.",
    "error_page.error_message_unknown_error": "Ocurri\xF3 un error desconocido (c\xF3digo de error: {{errorCode}}).",
    "error_page.button_try_again": "Intentar de nuevo",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% de descuento",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total a pagar hoy",
    "product_info.subscribe_to": "Suscribirse a",
    "payment_entry_page.trial_info": "Una vez finalizado el per\xEDodo de prueba, se le cobrar\xE1 {{price}} {{perFrequency}} a partir del {{renewalDate}}. Puede cancelar en cualquier momento antes de esa fecha.",
    "navbar_header.details": "Detalles",
    "navbar_header.back_button": "Atr\xE1s",
    "pricing_dropdown.show_details": "Mostrar detalles",
    "pricing_dropdown.hide_details": "Ocultar detalles",
    "pricing_table.tax": "Impuestos",
    "pricing_table.trial_ends": "Despu\xE9s de que finalice la prueba, el {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total a pagar hoy",
    "pricing_table.total_excluding_tax": "Total sin impuestos",
    "pricing_table.enter_billing_address_to_calculate": "Introduce la direcci\xF3n de facturaci\xF3n para calcular",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Introduce el estado o el c\xF3digo postal para calcular",
    "pricing_table.enter_postal_code_to_calculate": "Introduce el c\xF3digo postal para calcular",
    "error_page.error_message_invalid_email_error": "La direcci\xF3n de correo electr\xF3nico {{email}} no se pudo verificar. Por favor, proporciona una direcci\xF3n de correo electr\xF3nico v\xE1lida.",
    "payment_entry_page.button_payment_method": "Pagar {{formattedPrice}} con {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Pagar {{formattedPrice}}",
    "price_update.title": "Actualizaci\xF3n de precio",
    "price_update.base_message": "El precio total se actualiz\xF3 con impuestos seg\xFAn su direcci\xF3n de facturaci\xF3n. Revise e intente nuevamente. Solo se efectuar\xE1 un cobro en su tarjeta.",
    "price_update.trial_message": "El precio de la suscripci\xF3n se actualiz\xF3 para incluir impuestos seg\xFAn su direcci\xF3n de facturaci\xF3n. La prueba gratuita sigue aplic\xE1ndose. Revise e intente nuevamente.",
    "payment_entry_page.express_checkout_divider": "O PAGA CON TARJETA",
    "error_page.trouble_accessing": "Si tiene problemas para acceder a su compra, p\xF3ngase en contacto con el servicio de asistencia en ",
    "error_page.close_button_title": "Ir a {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Falta permiso de Stripe",
    "error_page.button_close": "Cerrar",
    "error_page.error_message_stripe_invalid_tax_origin_address": "La compra fall\xF3 porque la direcci\xF3n de origen fiscal no es v\xE1lida. En producci\xF3n, las compras funcionar\xE1n sin impuestos aplicados.",
    "error_page.error_message_stripe_tax_not_active": "La compra fall\xF3 porque Stripe Tax no est\xE1 habilitado. En producci\xF3n, las compras funcionar\xE1n sin impuestos aplicados.",
    "error_page.error_only_in_sandbox": "Este mensaje aparece solo en el entorno de pruebas.",
    "error_page.error_message_stripe_missing_required_permission": "La compra fall\xF3 porque la aplicaci\xF3n Stripe carece de un permiso necesario. En producci\xF3n, las compras funcionar\xE1n sin impuestos aplicados.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax no est\xE1 activo",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Direcci\xF3n de origen fiscal no v\xE1lida",
    "apple_pay.free_trial": "Prueba gratuita"
  };
  var $l = {
    "periods.week": "{{amount}} settimana",
    "periods.month": "{{amount}} mese",
    "periods.year": "{{amount}} anno",
    "periods.day": "{{amount}} giorno",
    "periods.weekShort": "{{amount}}sett",
    "periods.monthShort": "{{amount}}mese",
    "periods.yearShort": "{{amount}}anno",
    "periods.dayShort": "{{amount}}g",
    "periods.lifetime": "a vita",
    "periods.weekPlural": "{{amount}} settimane",
    "periods.monthPlural": "{{amount}} mesi",
    "periods.yearPlural": "{{amount}} anni",
    "periods.dayPlural": "{{amount}} giorni",
    "periods.weekFrequency": "settimanale",
    "periods.monthFrequency": "mensile",
    "periods.yearFrequency": "annuale",
    "periods.dayFrequency": "giornaliero",
    "periods.perWeekFrequency": "a settimana",
    "periods.perMonthFrequency": "al mese",
    "periods.perYearFrequency": "all'anno",
    "periods.perDayFrequency": "al giorno",
    "periods.unknownFrequency": "sconosciuto",
    "periods.weekFrequencyPlural": "ogni {{amount}} settimane",
    "periods.monthFrequencyPlural": "ogni {{amount}} mesi",
    "periods.yearFrequencyPlural": "ogni {{amount}} anni",
    "periods.dayFrequencyPlural": "ogni {{amount}} giorni",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} prova gratuita",
    "product_info.price_after_free_trial": "Dopo la fine della prova, il {{renewalDate}}",
    "product_info.renewal_frequency": "Si rinnova {{frequency}}",
    "product_info.continues_until_cancelled": "Continua fino a disdetta",
    "product_info.cancel_anytime": "Disdici in qualsiasi momento",
    "payment_entry_page.payment_step_title": "Pagamento sicuro tramite RevenueCat",
    "payment_entry_page.terms_info": "Fornendo i dati della tua carta, autorizzi {{appName}} ad addebitare sulla tua carta i pagamenti futuri in conformit\xE0 con i suoi termini.",
    "payment_entry_page.button_pay": "Paga ora",
    "payment_entry_page.button_start_trial": "Inizia la prova",
    "success_page.purchase_successful": "Pagamento completato",
    "success_page.button_close": "Continua",
    "error_page.if_error_persists": "Se l'errore persiste, contatta ",
    "error_page.error_title_already_subscribed": "Hai gi\xE0 un abbonamento a {{productTitle}}",
    "error_page.error_title_already_purchased": "Hai gi\xE0 acquistato {{productTitle}}",
    "error_page.error_title_other_errors": "Qualcosa \xE8 andato storto",
    "error_page.error_message_already_subscribed": "Non puoi abbonarti di nuovo a questo prodotto.",
    "error_page.error_message_already_purchased": "Non puoi acquistare di nuovo questo prodotto.",
    "error_page.error_message_missing_email_error": "L'email \xE8 necessaria per completare l'acquisto.",
    "error_page.error_message_network_error": "Errore di rete. Verifica la connessione internet.",
    "error_page.error_message_error_charging_payment": "Pagamento fallito.",
    "error_page.error_message_error_setting_up_purchase": "Acquisto non avviato a causa di un errore (codice errore: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Non siamo riusciti a verificare il tuo indirizzo di fatturazione. Per favore, controlla che il codice postale e il paese siano corretti.",
    "error_page.error_message_unknown_error": "Si \xE8 verificato un errore sconosciuto (codice errore: {{errorCode}}).",
    "error_page.button_try_again": "Riprova",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% di sconto",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Totale dovuto oggi",
    "product_info.subscribe_to": "Abbonati a",
    "payment_entry_page.trial_info": "Al termine del periodo di prova, ti verranno addebitati {{price}} {{perFrequency}} a partire dal {{renewalDate}}. Puoi annullare in qualsiasi momento prima di allora.",
    "navbar_header.details": "Dettagli",
    "navbar_header.back_button": "Indietro",
    "pricing_dropdown.show_details": "Mostra dettagli",
    "pricing_dropdown.hide_details": "Nascondi dettagli",
    "pricing_table.tax": "Tasse",
    "pricing_table.trial_ends": "Al termine del periodo di prova, il {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Totale dovuto oggi",
    "pricing_table.total_excluding_tax": "Totale tasse escluse",
    "pricing_table.enter_billing_address_to_calculate": "Inserisci l'indirizzo di fatturazione per calcolare",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Inserisci la regione o il codice postale per calcolare",
    "pricing_table.enter_postal_code_to_calculate": "Inserisci il codice postale per calcolare",
    "error_page.error_message_invalid_email_error": "L'indirizzo email {{email}} non pu\xF2 essere verificato. Si prega di fornire un indirizzo email valido.",
    "payment_entry_page.button_payment_method": "Paga {{formattedPrice}} con {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Paga {{formattedPrice}}",
    "price_update.title": "Aggiornamento prezzo",
    "price_update.base_message": "Il prezzo totale \xE8 stato aggiornato con le tasse in base al tuo indirizzo di fatturazione. Rivedi e riprova. L'addebito sulla tua carta avverr\xE0 solo una volta.",
    "price_update.trial_message": "Il prezzo dell'abbonamento \xE8 stato aggiornato per includere le tasse in base al tuo indirizzo di fatturazione. La prova gratuita \xE8 ancora valida. Controlla e riprova.",
    "payment_entry_page.express_checkout_divider": "OPPURE PAGA CON CARTA",
    "error_page.trouble_accessing": "Se hai problemi ad accedere al tuo acquisto, contatta l'assistenza all'indirizzo ",
    "error_page.close_button_title": "Vai a {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Autorizzazione Stripe mancante",
    "error_page.button_close": "Chiudi",
    "error_page.error_message_stripe_invalid_tax_origin_address": "L'acquisto non \xE8 andato a buon fine perch\xE9 l'indirizzo di origine fiscale non \xE8 valido. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sar\xE0 visibile.",
    "error_page.error_message_stripe_tax_not_active": "L'acquisto non \xE8 andato a buon fine perch\xE9 Stripe Tax non \xE8 abilitato. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sar\xE0 visibile.",
    "error_page.error_only_in_sandbox": "Questo messaggio viene visualizzato solo in sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "L'acquisto non \xE8 andato a buon fine perch\xE9 l'app Stripe non dispone dell'autorizzazione necessaria. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sar\xE0 visibile.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax non attivo",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Indirizzo di origine fiscale non valido",
    "apple_pay.free_trial": "Prova gratuita"
  };
  var ec = {
    "periods.week": "{{amount}} \u0623\u0633\u0628\u0648\u0639",
    "periods.month": "{{amount}} \u0634\u0647\u0631",
    "periods.year": "{{amount}} \u0633\u0646\u0629",
    "periods.day": "{{amount}} \u064A\u0648\u0645",
    "periods.weekShort": "{{amount}}\u0623\u0633\u0628\u0648\u0639",
    "periods.monthShort": "{{amount}}\u0634\u0647\u0631",
    "periods.yearShort": "{{amount}}\u0633\u0646\u0629",
    "periods.dayShort": "{{amount}}\u064A\u0648\u0645",
    "periods.lifetime": "\u0645\u062F\u0649 \u0627\u0644\u062D\u064A\u0627\u0629",
    "periods.weekPlural": "{{amount}} \u0623\u0633\u0627\u0628\u064A\u0639",
    "periods.monthPlural": "{{amount}} \u0623\u0634\u0647\u0631",
    "periods.yearPlural": "{{amount}} \u0633\u0646\u0648\u0627\u062A",
    "periods.dayPlural": "{{amount}} \u0623\u064A\u0627\u0645",
    "periods.weekFrequency": "\u0623\u0633\u0628\u0648\u0639\u064A\u064B\u0627",
    "periods.monthFrequency": "\u0634\u0647\u0631\u064A\u064B\u0627",
    "periods.yearFrequency": "\u0633\u0646\u0648\u064A\u064B\u0627",
    "periods.dayFrequency": "\u064A\u0648\u0645\u064A\u064B\u0627",
    "periods.perWeekFrequency": "\u0641\u064A \u0627\u0644\u0623\u0633\u0628\u0648\u0639",
    "periods.perMonthFrequency": "\u0641\u064A \u0627\u0644\u0634\u0647\u0631",
    "periods.perYearFrequency": "\u0641\u064A \u0627\u0644\u0633\u0646\u0629",
    "periods.perDayFrequency": "\u0641\u064A \u0627\u0644\u064A\u0648\u0645",
    "periods.unknownFrequency": "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
    "periods.weekFrequencyPlural": "\u0643\u0644 {{amount}} \u0623\u0633\u0627\u0628\u064A\u0639",
    "periods.monthFrequencyPlural": "\u0643\u0644 {{amount}} \u0623\u0634\u0647\u0631",
    "periods.yearFrequencyPlural": "\u0643\u0644 {{amount}} \u0633\u0646\u0648\u0627\u062A",
    "periods.dayFrequencyPlural": "\u0643\u0644 {{amount}} \u0623\u064A\u0627\u0645",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629",
    "product_info.price_after_free_trial": "\u0628\u0639\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062A\u062C\u0631\u0628\u0629\u060C \u0641\u064A {{renewalDate}}",
    "product_info.renewal_frequency": "\u064A\u062A\u0645 \u0627\u0644\u062A\u062C\u062F\u064A\u062F {{frequency}}",
    "product_info.continues_until_cancelled": "\u064A\u0633\u062A\u0645\u0631 \u062D\u062A\u0649 \u064A\u062A\u0645 \u0625\u0644\u063A\u0627\u0624\u0647",
    "product_info.cancel_anytime": "\u064A\u0645\u0643\u0646 \u0627\u0644\u0625\u0644\u063A\u0627\u0621 \u0641\u064A \u0623\u064A \u0648\u0642\u062A",
    "payment_entry_page.payment_step_title": "\u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0622\u0645\u0646 \u0639\u0628\u0631 RevenueCat",
    "payment_entry_page.terms_info": "\u0628\u062A\u0642\u062F\u064A\u0645 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0637\u0627\u0642\u062A\u0643\u060C \u0641\u0625\u0646\u0643 \u062A\u0633\u0645\u062D \u0644\u0640 {{appName}} \u0628\u062A\u062D\u0635\u064A\u0644 \u0627\u0644\u0631\u0633\u0648\u0645 \u0645\u0646 \u0628\u0637\u0627\u0642\u062A\u0643 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629 \u0648\u0641\u0642\u064B\u0627 \u0644\u0634\u0631\u0648\u0637\u0647\u0627.",
    "payment_entry_page.button_pay": "\u0627\u062F\u0641\u0639 \u0627\u0644\u0622\u0646",
    "payment_entry_page.button_start_trial": "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u062C\u0631\u0628\u0629",
    "success_page.purchase_successful": "\u062A\u0645 \u0627\u0644\u062F\u0641\u0639 \u0628\u0646\u062C\u0627\u062D",
    "success_page.button_close": "\u0645\u062A\u0627\u0628\u0639\u0629",
    "error_page.if_error_persists": "\u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631\u062A \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0640 ",
    "error_page.error_title_already_subscribed": "\u0623\u0646\u062A \u0645\u0634\u062A\u0631\u0643 \u0628\u0627\u0644\u0641\u0639\u0644 \u0641\u064A {{productTitle}}",
    "error_page.error_title_already_purchased": "\u0644\u0642\u062F \u0627\u0634\u062A\u0631\u064A\u062A {{productTitle}} \u0628\u0627\u0644\u0641\u0639\u0644",
    "error_page.error_title_other_errors": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627",
    "error_page.error_message_already_subscribed": "\u0644\u0627 \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
    "error_page.error_message_already_purchased": "\u0644\u0627 \u064A\u0645\u0643\u0646\u0643 \u0634\u0631\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
    "error_page.error_message_missing_email_error": "\u064A\u064F\u0637\u0644\u0628 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0625\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621.",
    "error_page.error_message_network_error": "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0634\u0628\u0643\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A.",
    "error_page.error_message_error_charging_payment": "\u0641\u0634\u0644 \u0627\u0644\u062F\u0641\u0639.",
    "error_page.error_message_error_setting_up_purchase": "\u0644\u0645 \u062A\u0628\u062F\u0623 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0628\u0633\u0628\u0628 \u062E\u0637\u0623 (\u0631\u0645\u0632 \u0627\u0644\u062E\u0637\u0623: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0648\u062A\u0631\u0629 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0645\u0646 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0648\u0627\u0644\u0628\u0644\u062F \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0635\u062D\u062A\u0647\u0645\u0627.",
    "error_page.error_message_unknown_error": "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641 (\u0631\u0645\u0632 \u0627\u0644\u062E\u0637\u0623: {{errorCode}}).",
    "error_page.button_try_again": "\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u062E\u0635\u0645",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u064A\u0648\u0645",
    "product_info.subscribe_to": "\u0627\u0634\u062A\u0631\u0643 \u0641\u064A",
    "payment_entry_page.trial_info": "\u0628\u0639\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A\u0629\u060C \u0633\u064A\u062A\u0645 \u0645\u062D\u0627\u0633\u0628\u062A\u0643 \u0628\u0645\u0628\u0644\u063A {{price}} {{perFrequency}} \u0628\u062F\u0621\u064B\u0627 \u0645\u0646 {{renewalDate}}. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0625\u0644\u063A\u0627\u0621 \u062F\u0627\u0626\u0645\u064B\u0627 \u0642\u0628\u0644 \u0630\u0644\u0643.",
    "navbar_header.details": "\u062A\u0641\u0627\u0635\u064A\u0644",
    "navbar_header.back_button": "\u0639\u0648\u062F\u0629",
    "pricing_dropdown.show_details": "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    "pricing_dropdown.hide_details": "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    "pricing_table.tax": "\u0627\u0644\u0636\u0631\u064A\u0628\u0629",
    "pricing_table.trial_ends": "\u0628\u0639\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A\u0629\u060C \u0641\u064A {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u064A\u0648\u0645",
    "pricing_table.total_excluding_tax": "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0628\u0627\u0633\u062A\u062B\u0646\u0627\u0621 \u0627\u0644\u0636\u0631\u064A\u0628\u0629",
    "pricing_table.enter_billing_address_to_calculate": "\u0623\u062F\u062E\u0644 \u0639\u0646\u0648\u0627\u0646 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0644\u062D\u0633\u0627\u0628\u0647\u0627",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0623\u062F\u062E\u0644 \u0627\u0644\u0648\u0644\u0627\u064A\u0629 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0644\u0644\u062D\u0633\u0627\u0628",
    "pricing_table.enter_postal_code_to_calculate": "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0644\u0644\u062D\u0633\u0627\u0628",
    "error_page.error_message_invalid_email_error": "\u062A\u0639\u0630\u0631 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A {{email}}. \u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u0627\u0644\u062D.",
    "payment_entry_page.button_payment_method": "\u0627\u062F\u0641\u0639 {{formattedPrice}} \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u0627\u062F\u0641\u0639 {{formattedPrice}}",
    "price_update.title": "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0639\u0631",
    "price_update.base_message": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0639 \u0627\u0644\u0636\u0631\u064A\u0628\u0629 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0639\u0646\u0648\u0627\u0646 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649. \u0644\u0646 \u064A\u062A\u0645 \u062A\u062D\u0635\u064A\u0644 \u0631\u0633\u0648\u0645 \u0645\u0646 \u0628\u0637\u0627\u0642\u062A\u0643 \u0625\u0644\u0627 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629.",
    "price_update.trial_message": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0633\u0639\u0631 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0644\u064A\u0634\u0645\u0644 \u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0648\u062A\u0631\u0629 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643. \u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629 \u0644\u0627 \u062A\u0632\u0627\u0644 \u0633\u0627\u0631\u064A\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
    "payment_entry_page.express_checkout_divider": "\u0623\u0648 \u0627\u062F\u0641\u0639 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0629",
    "error_page.trouble_accessing": "\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0648\u0627\u062C\u0647 \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621\u060C \u0641\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062F\u0639\u0645 \u0639\u0644\u0649 ",
    "error_page.close_button_title": "\u0627\u0630\u0647\u0628 \u0625\u0644\u0649 {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u0625\u0630\u0646 Stripe \u0645\u0641\u0642\u0648\u062F",
    "error_page.button_close": "\u0625\u063A\u0644\u0627\u0642",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0644\u0623\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0634\u0623 \u0627\u0644\u0636\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D. \u0641\u064A \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0633\u062A\u0639\u0645\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621 \u0628\u062F\u0648\u0646 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0636\u0631\u0627\u0626\u0628.",
    "error_page.error_message_stripe_tax_not_active": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0644\u0623\u0646 \u0636\u0631\u064A\u0628\u0629 Stripe \u063A\u064A\u0631 \u0645\u0641\u0639\u0644\u0629. \u0641\u064A \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0633\u062A\u0639\u0645\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621 \u0628\u062F\u0648\u0646 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0636\u0631\u0627\u0626\u0628.",
    "error_page.error_only_in_sandbox": "\u062A\u0638\u0647\u0631 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0641\u0642\u0637 \u0641\u064A \u0627\u0644\u0628\u064A\u0626\u0629 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A\u0629.",
    "error_page.error_message_stripe_missing_required_permission": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0644\u0623\u0646 \u062A\u0637\u0628\u064A\u0642 Stripe \u064A\u0641\u062A\u0642\u0631 \u0625\u0644\u0649 \u0625\u0630\u0646 \u0645\u0637\u0644\u0648\u0628. \u0641\u064A \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0633\u062A\u0639\u0645\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621 \u0628\u062F\u0648\u0646 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0636\u0631\u0627\u0626\u0628.",
    "error_page.error_title_stripe_tax_not_active": "\u0636\u0631\u064A\u0628\u0629 Stripe \u063A\u064A\u0631 \u0646\u0634\u0637\u0629",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u0639\u0646\u0648\u0627\u0646 \u0645\u0646\u0634\u0623 \u0636\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D",
    "apple_pay.free_trial": "\u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629"
  };
  var rc = {
    "periods.week": "{{amount}} setmana",
    "periods.month": "{{amount}} mes",
    "periods.year": "{{amount}} any",
    "periods.day": "{{amount}} dia",
    "periods.weekShort": "{{amount}}set",
    "periods.monthShort": "{{amount}}mes",
    "periods.yearShort": "{{amount}}any",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "de per vida",
    "periods.weekPlural": "{{amount}} setmanes",
    "periods.monthPlural": "{{amount}} mesos",
    "periods.yearPlural": "{{amount}} anys",
    "periods.dayPlural": "{{amount}} dies",
    "periods.weekFrequency": "setmanal",
    "periods.monthFrequency": "mensual",
    "periods.yearFrequency": "anual",
    "periods.dayFrequency": "diari",
    "periods.perWeekFrequency": "per setmana",
    "periods.perMonthFrequency": "per mes",
    "periods.perYearFrequency": "per any",
    "periods.perDayFrequency": "per dia",
    "periods.unknownFrequency": "desconeguda",
    "periods.weekFrequencyPlural": "cada {{amount}} setmanes",
    "periods.monthFrequencyPlural": "cada {{amount}} mesos",
    "periods.yearFrequencyPlural": "cada {{amount}} anys",
    "periods.dayFrequencyPlural": "cada {{amount}} dies",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} de prova gratu\xEFta",
    "product_info.price_after_free_trial": "Despr\xE9s del per\xEDode de prova, el {{renewalDate}}",
    "product_info.renewal_frequency": "Es renova {{frequency}}",
    "product_info.continues_until_cancelled": "Continua fins que es cancel\xB7li",
    "product_info.cancel_anytime": "Cancel\xB7la en qualsevol moment",
    "payment_entry_page.payment_step_title": "Pagament segur amb RevenueCat",
    "payment_entry_page.terms_info": "En proporcionar la teva informaci\xF3 de targeta, permets a {{appName}} carregar la teva targeta per a futurs pagaments d'acord amb els seus termes.",
    "payment_entry_page.button_pay": "Paga ara",
    "payment_entry_page.button_start_trial": "Comen\xE7a la prova",
    "success_page.purchase_successful": "Pagament complet",
    "success_page.button_close": "Continua",
    "error_page.if_error_persists": "Si l'error persisteix, contacta amb ",
    "error_page.error_title_already_subscribed": "Ja us heu subscrit a {{productTitle}}",
    "error_page.error_title_already_purchased": "Ja heu comprat {{productTitle}}",
    "error_page.error_title_other_errors": "Alguna cosa ha anat malament",
    "error_page.error_message_already_subscribed": "No us podeu subscriure a aquest producte de nou.",
    "error_page.error_message_already_purchased": "No podeu comprar aquest producte de nou.",
    "error_page.error_message_missing_email_error": "Es necessita un correu electr\xF2nic per completar la compra.",
    "error_page.error_message_network_error": "Error de xarxa. Comprova la teva connexi\xF3 a internet.",
    "error_page.error_message_error_charging_payment": "El pagament ha fallat.",
    "error_page.error_message_error_setting_up_purchase": "No s'ha iniciat la compra a causa d'un error (codi d'error: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "No hem pogut verificar la vostra adre\xE7a de facturaci\xF3. Si us plau, verifiqueu de nou el codi postal i el pa\xEDs per assegurar-vos que s\xF3n correctes.",
    "error_page.error_message_unknown_error": "S'ha produ\xEFt un error desconegut (codi d'error: {{errorCode}}).",
    "error_page.button_try_again": "Torna a intentar-ho",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% de descompte",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total a pagar avui",
    "product_info.subscribe_to": "Subscriu-te a",
    "payment_entry_page.trial_info": "Un cop finalitzi el per\xEDode de prova, se us cobrar\xE0 {{price}} {{perFrequency}} a partir del {{renewalDate}}. Sempre podeu cancel\xB7lar abans d'aquesta data.",
    "navbar_header.details": "Detalls",
    "navbar_header.back_button": "Enrere",
    "pricing_dropdown.show_details": "Mostra detalls",
    "pricing_dropdown.hide_details": "Amaga detalls",
    "pricing_table.tax": "Impostos",
    "pricing_table.trial_ends": "Despr\xE9s que finalitzi la prova, el {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total a pagar avui",
    "pricing_table.total_excluding_tax": "Total sense impostos",
    "pricing_table.enter_billing_address_to_calculate": "Introdu\xEFu l'adre\xE7a de facturaci\xF3 per calcular",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Introdu\xEFu la prov\xEDncia o el codi postal per calcular",
    "pricing_table.enter_postal_code_to_calculate": "Introdu\xEFu el codi postal per calcular",
    "error_page.error_message_invalid_email_error": "No s'ha pogut verificar l'adre\xE7a de correu electr\xF2nic {{email}}. Si us plau, proporcioneu una adre\xE7a de correu electr\xF2nic v\xE0lida.",
    "payment_entry_page.button_payment_method": "Paga {{formattedPrice}} amb {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Paga {{formattedPrice}}",
    "price_update.title": "Actualitzaci\xF3 de preu",
    "price_update.base_message": "El preu total s'ha actualitzat amb els impostos segons la vostra adre\xE7a de facturaci\xF3. Reviseu-ho i torneu-ho a provar. Nom\xE9s es carregar\xE0 la vostra targeta una vegada.",
    "price_update.trial_message": "El preu de la subscripci\xF3 s'ha actualitzat per incloure els impostos segons la seva adre\xE7a de facturaci\xF3. El per\xEDode de prova gratu\xEFt segueix vigent. Si us plau, comprovi-ho i torni-ho a provar.",
    "payment_entry_page.express_checkout_divider": "O PAGUEU AMB TARGETA",
    "error_page.trouble_accessing": "Si teniu problemes per accedir a la vostra compra, poseu-vos en contacte amb el servei d'assist\xE8ncia a ",
    "error_page.close_button_title": "V\xE9s a {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Falta el perm\xEDs de Stripe",
    "error_page.button_close": "Tanca",
    "error_page.error_message_stripe_invalid_tax_origin_address": "La compra ha fallat perqu\xE8 l'adre\xE7a d'origen fiscal no \xE9s v\xE0lida. En producci\xF3, les compres funcionaran sense impostos aplicats.",
    "error_page.error_message_stripe_tax_not_active": "La compra ha fallat perqu\xE8 Stripe Tax no est\xE0 activat. En producci\xF3, les compres funcionaran sense impostos aplicats.",
    "error_page.error_only_in_sandbox": "Aquest missatge apareix nom\xE9s a l'entorn de proves.",
    "error_page.error_message_stripe_missing_required_permission": "La compra ha fallat perqu\xE8 l'aplicaci\xF3 Stripe no t\xE9 un perm\xEDs necessari. En producci\xF3, les compres funcionaran sense impostos aplicats.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax no est\xE0 actiu",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Adre\xE7a d'origen fiscal no v\xE0lida",
    "apple_pay.free_trial": "Prova gratu\xEFta"
  };
  var tc = {
    "periods.week": "{{amount}} \u5468",
    "periods.month": "{{amount}} \u6708",
    "periods.year": "{{amount}} \u5E74",
    "periods.day": "{{amount}} \u5929",
    "periods.weekShort": "{{amount}}\u5468",
    "periods.monthShort": "{{amount}}\u6708",
    "periods.yearShort": "{{amount}}\u5E74",
    "periods.dayShort": "{{amount}}\u5929",
    "periods.lifetime": "\u7EC8\u8EAB",
    "periods.weekPlural": "{{amount}} \u5468",
    "periods.monthPlural": "{{amount}} \u4E2A\u6708",
    "periods.yearPlural": "{{amount}} \u5E74",
    "periods.dayPlural": "{{amount}} \u5929",
    "periods.weekFrequency": "\u6BCF\u5468",
    "periods.monthFrequency": "\u6BCF\u6708",
    "periods.yearFrequency": "\u6BCF\u5E74",
    "periods.dayFrequency": "\u6BCF\u5929",
    "periods.perWeekFrequency": "\u6BCF\u5468",
    "periods.perMonthFrequency": "\u6BCF\u6708",
    "periods.perYearFrequency": "\u6BCF\u5E74",
    "periods.perDayFrequency": "\u6BCF\u5929",
    "periods.unknownFrequency": "\u672A\u77E5",
    "periods.weekFrequencyPlural": "\u6BCF {{amount}} \u5468",
    "periods.monthFrequencyPlural": "\u6BCF {{amount}} \u4E2A\u6708",
    "periods.yearFrequencyPlural": "\u6BCF {{amount}} \u5E74",
    "periods.dayFrequencyPlural": "\u6BCF {{amount}} \u5929",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u5929\u514D\u8D39\u8BD5\u7528",
    "product_info.price_after_free_trial": "\u8BD5\u7528\u671F\u7ED3\u675F\u540E\uFF0C\u4E8E {{renewalDate}}",
    "product_info.renewal_frequency": "\u7EED\u8BA2 {{frequency}}",
    "product_info.continues_until_cancelled": "\u6301\u7EED\u5230\u53D6\u6D88",
    "product_info.cancel_anytime": "\u968F\u65F6\u53D6\u6D88",
    "payment_entry_page.payment_step_title": "RevenueCat \u5B89\u5168\u7ED3\u8D26",
    "payment_entry_page.terms_info": "\u901A\u8FC7\u63D0\u4F9B\u60A8\u7684\u5361\u4FE1\u606F\uFF0C\u60A8\u5141\u8BB8 {{appName}} \u6839\u636E\u5176\u6761\u6B3E\u5411\u60A8\u7684\u5361\u6536\u53D6\u672A\u6765\u4ED8\u6B3E\u3002",
    "payment_entry_page.button_pay": "\u7ACB\u5373\u652F\u4ED8",
    "payment_entry_page.button_start_trial": "\u5F00\u59CB\u8BD5\u7528",
    "success_page.purchase_successful": "\u652F\u4ED8\u5B8C\u6210",
    "success_page.button_close": "\u7EE7\u7EED",
    "error_page.if_error_persists": "\u5982\u679C\u9519\u8BEF\u4ECD\u7136\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB ",
    "error_page.error_title_already_subscribed": "\u60A8\u5DF2\u8BA2\u9605 {{productTitle}}",
    "error_page.error_title_already_purchased": "\u60A8\u5DF2\u8D2D\u4E70 {{productTitle}}",
    "error_page.error_title_other_errors": "\u51FA\u73B0\u9519\u8BEF",
    "error_page.error_message_already_subscribed": "\u60A8\u4E0D\u80FD\u518D\u6B21\u8BA2\u9605\u6B64\u4EA7\u54C1\u3002",
    "error_page.error_message_already_purchased": "\u60A8\u4E0D\u80FD\u518D\u6B21\u8D2D\u4E70\u6B64\u4EA7\u54C1\u3002",
    "error_page.error_message_missing_email_error": "\u5B8C\u6210\u8D2D\u4E70\u9700\u8981\u90AE\u7BB1\u5730\u5740\u3002",
    "error_page.error_message_network_error": "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u4E92\u8054\u7F51\u8FDE\u63A5\u3002",
    "error_page.error_message_error_charging_payment": "\u652F\u4ED8\u5931\u8D25\u3002",
    "error_page.error_message_error_setting_up_purchase": "\u7531\u4E8E\u9519\u8BEF\uFF0C\u8D2D\u4E70\u672A\u542F\u52A8\uFF08\u9519\u8BEF\u4EE3\u7801\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.error_message_invalid_tax_location": "\u6211\u4EEC\u65E0\u6CD5\u9A8C\u8BC1\u60A8\u7684\u8D26\u5355\u5730\u5740\u3002\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u90AE\u653F\u7F16\u7801\u548C\u56FD\u5BB6\u662F\u5426\u6B63\u786E\u3002",
    "error_page.error_message_unknown_error": "\u53D1\u751F\u672A\u77E5\u9519\u8BEF\uFF08\u9519\u8BEF\u4EE3\u7801\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.button_try_again": "\u91CD\u8BD5",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u6298\u6263",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u4ECA\u5929\u5E94\u4ED8\u603B\u989D",
    "product_info.subscribe_to": "\u8BA2\u9605",
    "payment_entry_page.trial_info": "\u8BD5\u7528\u671F\u7ED3\u675F\u540E\uFF0C\u60A8\u5C06\u88AB\u6536\u53D6 {{price}} {{perFrequency}}\uFF0C\u4ECE {{renewalDate}} \u5F00\u59CB\u3002\u60A8\u53EF\u4EE5\u968F\u65F6\u5728\u6B64\u4E4B\u524D\u53D6\u6D88\u3002",
    "navbar_header.details": "\u8BE6\u60C5",
    "navbar_header.back_button": "\u8FD4\u56DE",
    "pricing_dropdown.show_details": "\u663E\u793A\u8BE6\u60C5",
    "pricing_dropdown.hide_details": "\u9690\u85CF\u8BE6\u60C5",
    "pricing_table.tax": "\u7A0E",
    "pricing_table.trial_ends": "\u8BD5\u7528\u671F\u7ED3\u675F\u540E\uFF0C\u4E8E{{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u4ECA\u65E5\u5E94\u4ED8\u603B\u989D",
    "pricing_table.total_excluding_tax": "\u603B\u8BA1\uFF08\u4E0D\u542B\u7A0E\uFF09",
    "pricing_table.enter_billing_address_to_calculate": "\u8F93\u5165\u8D26\u5355\u5730\u5740\u4EE5\u8BA1\u7B97",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u8F93\u5165\u5DDE\u6216\u90AE\u653F\u7F16\u7801\u4EE5\u8BA1\u7B97",
    "pricing_table.enter_postal_code_to_calculate": "\u8F93\u5165\u90AE\u653F\u7F16\u7801\u4EE5\u8BA1\u7B97",
    "error_page.error_message_invalid_email_error": "\u65E0\u6CD5\u9A8C\u8BC1\u7535\u5B50\u90AE\u4EF6\u5730\u5740{{email}}\u3002\u8BF7\u63D0\u4F9B\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
    "payment_entry_page.button_payment_method": "\u4F7F\u7528{{paymentMethod}}\u652F\u4ED8{{formattedPrice}}",
    "payment_entry_page.button_with_price": "\u652F\u4ED8{{formattedPrice}}",
    "price_update.title": "\u4EF7\u683C\u66F4\u65B0",
    "price_update.base_message": "\u603B\u4EF7\u5DF2\u6839\u636E\u60A8\u7684\u8D26\u5355\u5730\u5740\u66F4\u65B0\u4E86\u7A0E\u8D39\u3002\u8BF7\u67E5\u770B\u5E76\u91CD\u8BD5\u3002\u60A8\u7684\u94F6\u884C\u5361\u53EA\u4F1A\u6263\u6B3E\u4E00\u6B21\u3002",
    "price_update.trial_message": "\u6839\u636E\u60A8\u7684\u8D26\u5355\u5730\u5740\uFF0C\u8BA2\u9605\u4EF7\u683C\u5DF2\u66F4\u65B0\u4E3A\u542B\u7A0E\u4EF7\u683C\u3002\u514D\u8D39\u8BD5\u7528\u4ECD\u7136\u6709\u6548\u3002\u8BF7\u67E5\u770B\u5E76\u91CD\u8BD5\u3002",
    "payment_entry_page.express_checkout_divider": "\u6216\u4F7F\u7528\u94F6\u884C\u5361\u652F\u4ED8",
    "error_page.trouble_accessing": "\u5982\u679C\u60A8\u5728\u8BBF\u95EE\u8D2D\u4E70\u9879\u76EE\u65F6\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u652F\u6301\uFF1A",
    "error_page.close_button_title": "\u524D\u5F80{{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u7F3A\u5C11Stripe\u6743\u9650",
    "error_page.button_close": "\u5173\u95ED",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u8D2D\u4E70\u5931\u8D25\uFF0C\u56E0\u4E3A\u7A0E\u52A1\u8D77\u59CB\u5730\u5740\u65E0\u6548\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u8D2D\u4E70\u5C06\u5728\u4E0D\u5E94\u7528\u7A0E\u6B3E\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u3002",
    "error_page.error_message_stripe_tax_not_active": "\u8D2D\u4E70\u5931\u8D25\uFF0C\u56E0\u4E3AStripe Tax\u672A\u542F\u7528\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u8D2D\u4E70\u5C06\u5728\u4E0D\u5E94\u7528\u7A0E\u6B3E\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u3002",
    "error_page.error_only_in_sandbox": "\u6B64\u6D88\u606F\u4EC5\u5728\u6C99\u76D2\u4E2D\u663E\u793A\u3002",
    "error_page.error_message_stripe_missing_required_permission": "\u8D2D\u4E70\u5931\u8D25\uFF0C\u56E0\u4E3AStripe\u5E94\u7528\u7A0B\u5E8F\u7F3A\u5C11\u5FC5\u9700\u7684\u6743\u9650\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u8D2D\u4E70\u5C06\u5728\u4E0D\u5E94\u7528\u7A0E\u6B3E\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u3002",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax\u672A\u6FC0\u6D3B",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u7A0E\u52A1\u8D77\u59CB\u5730\u5740\u65E0\u6548",
    "apple_pay.free_trial": "\u514D\u8D39\u8BD5\u7528"
  };
  var ac = {
    "periods.week": "{{amount}} \u9031",
    "periods.month": "{{amount}} \u500B\u6708",
    "periods.year": "{{amount}} \u5E74",
    "periods.day": "{{amount}} \u5929",
    "periods.weekShort": "{{amount}}\u9031",
    "periods.monthShort": "{{amount}}\u6708",
    "periods.yearShort": "{{amount}}\u5E74",
    "periods.dayShort": "{{amount}}\u5929",
    "periods.lifetime": "\u7D42\u8EAB",
    "periods.weekPlural": "{{amount}} \u9031",
    "periods.monthPlural": "{{amount}} \u500B\u6708",
    "periods.yearPlural": "{{amount}} \u5E74",
    "periods.dayPlural": "{{amount}} \u5929",
    "periods.weekFrequency": "\u6BCF\u9031",
    "periods.monthFrequency": "\u6BCF\u6708",
    "periods.yearFrequency": "\u6BCF\u5E74",
    "periods.dayFrequency": "\u6BCF\u5929",
    "periods.perWeekFrequency": "\u6BCF\u9031",
    "periods.perMonthFrequency": "\u6BCF\u6708",
    "periods.perYearFrequency": "\u6BCF\u5E74",
    "periods.perDayFrequency": "\u6BCF\u5929",
    "periods.unknownFrequency": "\u672A\u77E5",
    "periods.weekFrequencyPlural": "\u6BCF {{amount}} \u9031",
    "periods.monthFrequencyPlural": "\u6BCF {{amount}} \u500B\u6708",
    "periods.yearFrequencyPlural": "\u6BCF {{amount}} \u5E74",
    "periods.dayFrequencyPlural": "\u6BCF {{amount}} \u5929",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u5929\u514D\u8CBB\u8A66\u7528",
    "product_info.price_after_free_trial": "\u8A66\u7528\u671F\u7D50\u675F\u5F8C\uFF0C\u65BC {{renewalDate}}",
    "product_info.renewal_frequency": "\u6BCF {{frequency}} \u7E8C\u7D04",
    "product_info.continues_until_cancelled": "\u6301\u7E8C\u5230\u53D6\u6D88",
    "product_info.cancel_anytime": "\u96A8\u6642\u53D6\u6D88",
    "payment_entry_page.payment_step_title": "RevenueCat \u5B89\u5168\u7D50\u5E33",
    "payment_entry_page.terms_info": "\u63D0\u4F9B\u60A8\u7684\u5361\u865F\u5373\u8868\u793A\u60A8\u5141\u8A31 {{appName}} \u4F9D\u7167\u5176\u689D\u6B3E\u5411\u60A8\u7684\u5361\u6536\u53D6\u672A\u4F86\u4ED8\u6B3E\u3002",
    "payment_entry_page.button_pay": "\u7ACB\u5373\u4ED8\u6B3E",
    "payment_entry_page.button_start_trial": "\u958B\u59CB\u8A66\u7528",
    "success_page.purchase_successful": "\u4ED8\u6B3E\u5B8C\u6210",
    "success_page.button_close": "\u7E7C\u7E8C",
    "error_page.if_error_persists": "\u5982\u679C\u932F\u8AA4\u6301\u7E8C\u5B58\u5728\uFF0C\u8ACB\u806F\u7D61 ",
    "error_page.error_title_already_subscribed": "\u60A8\u5DF2\u7D93\u8A02\u95B1 {{productTitle}}",
    "error_page.error_title_already_purchased": "\u60A8\u5DF2\u7D93\u8CFC\u8CB7 {{productTitle}}",
    "error_page.error_title_other_errors": "\u767C\u751F\u932F\u8AA4",
    "error_page.error_message_already_subscribed": "\u60A8\u7121\u6CD5\u518D\u6B21\u8A02\u95B1\u6B64\u7522\u54C1\u3002",
    "error_page.error_message_already_purchased": "\u60A8\u7121\u6CD5\u518D\u6B21\u8CFC\u8CB7\u6B64\u7522\u54C1\u3002",
    "error_page.error_message_missing_email_error": "\u5B8C\u6210\u8CFC\u8CB7\u9700\u8981\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3002",
    "error_page.error_message_network_error": "\u7DB2\u8DEF\u932F\u8AA4\u3002\u8ACB\u6AA2\u67E5\u60A8\u7684\u7DB2\u8DEF\u9023\u7DDA\u3002",
    "error_page.error_message_error_charging_payment": "\u4ED8\u6B3E\u5931\u6557\u3002",
    "error_page.error_message_error_setting_up_purchase": "\u7531\u65BC\u767C\u751F\u932F\u8AA4\uFF0C\u8CFC\u8CB7\u672A\u555F\u52D5\uFF08\u932F\u8AA4\u4EE3\u78BC\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.error_message_invalid_tax_location": "\u6211\u5011\u7121\u6CD5\u9A57\u8B49\u60A8\u7684\u5E33\u55AE\u5730\u5740\u3002\u8ACB\u4ED4\u7D30\u6AA2\u67E5\u90F5\u905E\u5340\u865F\u548C\u570B\u5BB6\u662F\u5426\u6B63\u78BA\u3002",
    "error_page.error_message_unknown_error": "\u767C\u751F\u4E0D\u660E\u932F\u8AA4\uFF08\u932F\u8AA4\u4EE3\u78BC\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.button_try_again": "\u518D\u8A66\u4E00\u6B21",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u6298\u6263",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u4ECA\u65E5\u61C9\u4ED8\u7E3D\u984D",
    "product_info.subscribe_to": "\u8A02\u95B1",
    "payment_entry_page.trial_info": "\u5728\u60A8\u7684\u8A66\u7528\u671F\u7D50\u675F\u5F8C\uFF0C\u60A8\u5C07\u5F9E {{renewalDate}} \u958B\u59CB\u88AB\u6536\u53D6 {{price}} {{perFrequency}} \u7684\u8CBB\u7528\u3002\u60A8\u96A8\u6642\u53EF\u4EE5\u5728\u6B64\u4E4B\u524D\u53D6\u6D88\u3002",
    "navbar_header.details": "\u8A73\u7D30\u8CC7\u8A0A",
    "navbar_header.back_button": "\u8FD4\u56DE",
    "pricing_dropdown.show_details": "\u986F\u793A\u8A73\u7D30\u8CC7\u8A0A",
    "pricing_dropdown.hide_details": "\u96B1\u85CF\u8A73\u7D30\u8CC7\u8A0A",
    "pricing_table.tax": "\u7A05\u91D1",
    "pricing_table.trial_ends": "\u8A66\u7528\u671F\u7D50\u675F\u5F8C\uFF0C\u65BC {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u4ECA\u65E5\u61C9\u4ED8\u7E3D\u984D",
    "pricing_table.total_excluding_tax": "\u7E3D\u8A08\uFF08\u4E0D\u542B\u7A05\uFF09",
    "pricing_table.enter_billing_address_to_calculate": "\u8F38\u5165\u5E33\u55AE\u5730\u5740\u4EE5\u8A08\u7B97",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u8F38\u5165\u5DDE\u6216\u90F5\u653F\u7DE8\u78BC\u4EE5\u8A08\u7B97",
    "pricing_table.enter_postal_code_to_calculate": "\u8F38\u5165\u90F5\u653F\u7DE8\u78BC\u4EE5\u8A08\u7B97",
    "error_page.error_message_invalid_email_error": "\u7121\u6CD5\u9A57\u8B49\u96FB\u5B50\u90F5\u4EF6\u5730\u5740 {{email}}\u3002\u8ACB\u63D0\u4F9B\u6709\u6548\u7684\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3002",
    "payment_entry_page.button_payment_method": "\u4F7F\u7528 {{paymentMethod}} \u652F\u4ED8 {{formattedPrice}}",
    "payment_entry_page.button_with_price": "\u652F\u4ED8 {{formattedPrice}}",
    "price_update.title": "\u50F9\u683C\u66F4\u65B0",
    "price_update.base_message": "\u7E3D\u50F9\u5DF2\u6839\u64DA\u60A8\u7684\u5E33\u55AE\u5730\u5740\u66F4\u65B0\u7A05\u91D1\u3002\u8ACB\u6AA2\u67E5\u5F8C\u91CD\u8A66\u3002\u60A8\u7684\u4FE1\u7528\u5361\u53EA\u6703\u88AB\u6536\u53D6\u4E00\u6B21\u8CBB\u7528\u3002",
    "price_update.trial_message": "\u6839\u64DA\u60A8\u7684\u5E33\u55AE\u5730\u5740\uFF0C\u8A02\u95B1\u50F9\u683C\u5DF2\u66F4\u65B0\u70BA\u542B\u7A05\u50F9\u683C\u3002\u514D\u8CBB\u8A66\u7528\u4ECD\u7136\u6709\u6548\u3002\u8ACB\u67E5\u770B\u4E26\u91CD\u8A66\u3002",
    "payment_entry_page.express_checkout_divider": "\u6216\u4EE5\u4FE1\u7528\u5361\u4ED8\u6B3E",
    "error_page.trouble_accessing": "\u5982\u679C\u60A8\u5728\u5B58\u53D6\u8CFC\u8CB7\u9805\u76EE\u6642\u9047\u5230\u554F\u984C\uFF0C\u8ACB\u900F\u904E\u4EE5\u4E0B\u65B9\u5F0F\u806F\u7D61\u652F\u63F4\u4EBA\u54E1\uFF1A",
    "error_page.close_button_title": "\u524D\u5F80{{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u7F3A\u5C11 Stripe \u6B0A\u9650",
    "error_page.button_close": "\u95DC\u9589",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u8CFC\u8CB7\u5931\u6557\uFF0C\u56E0\u70BA\u7A05\u52D9\u8D77\u59CB\u5730\u5740\u7121\u6548\u3002\u5728\u6B63\u5F0F\u74B0\u5883\u4E2D\uFF0C\u8CFC\u8CB7\u5C07\u5728\u4E0D\u5957\u7528\u7A05\u91D1\u7684\u60C5\u6CC1\u4E0B\u904B\u4F5C\u3002",
    "error_page.error_message_stripe_tax_not_active": "\u8CFC\u8CB7\u5931\u6557\uFF0C\u56E0\u70BA Stripe Tax \u672A\u555F\u7528\u3002\u5728\u6B63\u5F0F\u74B0\u5883\u4E2D\uFF0C\u8CFC\u8CB7\u5C07\u5728\u4E0D\u5957\u7528\u7A05\u91D1\u7684\u60C5\u6CC1\u4E0B\u904B\u4F5C\u3002",
    "error_page.error_only_in_sandbox": "\u6B64\u8A0A\u606F\u50C5\u5728\u6C99\u76D2\u4E2D\u986F\u793A\u3002",
    "error_page.error_message_stripe_missing_required_permission": "\u8CFC\u8CB7\u5931\u6557\uFF0C\u56E0\u70BA Stripe \u61C9\u7528\u7A0B\u5F0F\u7F3A\u5C11\u5FC5\u8981\u7684\u6B0A\u9650\u3002\u5728\u6B63\u5F0F\u74B0\u5883\u4E2D\uFF0C\u8CFC\u8CB7\u5C07\u5728\u4E0D\u5957\u7528\u7A05\u91D1\u7684\u60C5\u6CC1\u4E0B\u904B\u4F5C\u3002",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax \u672A\u555F\u7528",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u7121\u6548\u7684\u7A05\u52D9\u8D77\u59CB\u5730\u5740",
    "apple_pay.free_trial": "\u514D\u8CBB\u8A66\u7528"
  };
  var nc = {
    "periods.week": "{{amount}} tjedan",
    "periods.month": "{{amount}} mjesec",
    "periods.year": "{{amount}} godina",
    "periods.day": "{{amount}} dan",
    "periods.weekShort": "{{amount}}tj",
    "periods.monthShort": "{{amount}}mj",
    "periods.yearShort": "{{amount}}g",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "do\u017Eivotno",
    "periods.weekPlural": "{{amount}} tjedana",
    "periods.monthPlural": "{{amount}} mjeseci",
    "periods.yearPlural": "{{amount}} godina",
    "periods.dayPlural": "{{amount}} dana",
    "periods.weekFrequency": "tjedno",
    "periods.monthFrequency": "mjese\u010Dno",
    "periods.yearFrequency": "godi\u0161nje",
    "periods.dayFrequency": "dnevno",
    "periods.perWeekFrequency": "tjedno",
    "periods.perMonthFrequency": "mjese\u010Dno",
    "periods.perYearFrequency": "godi\u0161nje",
    "periods.perDayFrequency": "dnevno",
    "periods.unknownFrequency": "nepoznato",
    "periods.weekFrequencyPlural": "svakih {{amount}} tjedana",
    "periods.monthFrequencyPlural": "svakih {{amount}} mjeseci",
    "periods.yearFrequencyPlural": "svakih {{amount}} godina",
    "periods.dayFrequencyPlural": "svakih {{amount}} dana",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} besplatno probno razdoblje",
    "product_info.price_after_free_trial": "Nakon isteka probnog razdoblja, {{renewalDate}}",
    "product_info.renewal_frequency": "Obnavlja se {{frequency}}",
    "product_info.continues_until_cancelled": "Nastavlja se dok se ne otka\u017Ee",
    "product_info.cancel_anytime": "Otka\u017Eite u bilo kojem trenutku",
    "payment_entry_page.payment_step_title": "Sigurna naplata putem RevenueCat",
    "payment_entry_page.terms_info": "Davanjem podataka o kartici dopu\u0161tate {{appName}} naplatu s va\u0161e kartice za budu\u0107e uplate u skladu s njihovim uvjetima.",
    "payment_entry_page.button_pay": "Plati sada",
    "payment_entry_page.button_start_trial": "Po\u010Dni probno razdoblje",
    "success_page.purchase_successful": "Uplata je uspje\u0161na",
    "success_page.button_close": "Nastavi",
    "error_page.if_error_persists": "Ako se pogre\u0161ka nastavi, obratite se ",
    "error_page.error_title_already_subscribed": "Ve\u0107 ste pretpla\u0107eni na {{productTitle}}",
    "error_page.error_title_already_purchased": "Ve\u0107 ste kupili {{productTitle}}",
    "error_page.error_title_other_errors": "Ne\u0161to je po\u0161lo po zlu",
    "error_page.error_message_already_subscribed": "Ne mo\u017Eete se ponovno pretplatiti na ovaj proizvod.",
    "error_page.error_message_already_purchased": "Ne mo\u017Eete ponovno kupiti ovaj proizvod.",
    "error_page.error_message_missing_email_error": "E-po\u0161ta je potrebna za dovr\u0161etak kupnje.",
    "error_page.error_message_network_error": "Mre\u017Ena pogre\u0161ka. Provjerite internetsku vezu.",
    "error_page.error_message_error_charging_payment": "Pla\u0107anje nije uspjelo.",
    "error_page.error_message_error_setting_up_purchase": "Kupnja nije zapo\u010Dela zbog pogre\u0161ke (kod pogre\u0161ke: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nismo mogli potvrditi va\u0161u adresu za naplatu. Molimo provjerite po\u0161tanski broj i dr\u017Eavu kako biste bili sigurni da su to\u010Dni.",
    "error_page.error_message_unknown_error": "Do\u0161lo je do nepoznate pogre\u0161ke (kod pogre\u0161ke: {{errorCode}}).",
    "error_page.button_try_again": "Poku\u0161aj ponovno",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% popusta",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Ukupno dospije\u0107e danas",
    "product_info.subscribe_to": "Pretplatite se",
    "payment_entry_page.trial_info": "Nakon zavr\u0161etka probnog razdoblja, bit \u0107e vam napla\u0107eno {{price}} {{perFrequency}} po\u010Dev\u0161i od {{renewalDate}}. Uvijek mo\u017Eete otkazati prije toga.",
    "navbar_header.details": "Detalji",
    "navbar_header.back_button": "Natrag",
    "pricing_dropdown.show_details": "Prika\u017Ei detalje",
    "pricing_dropdown.hide_details": "Sakrij detalje",
    "pricing_table.tax": "Porez",
    "pricing_table.trial_ends": "Nakon isteka probnog razdoblja, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Ukupan iznos dospije\u0107a danas",
    "pricing_table.total_excluding_tax": "Ukupno bez poreza",
    "pricing_table.enter_billing_address_to_calculate": "Unesite adresu za naplatu za izra\u010Dun",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Unesite dr\u017Eavu ili po\u0161tanski broj za izra\u010Dun",
    "pricing_table.enter_postal_code_to_calculate": "Unesite po\u0161tanski broj za izra\u010Dun",
    "error_page.error_message_invalid_email_error": "Adresa e-po\u0161te {{email}} nije se mogla potvrditi. Molimo unesite valjanu adresu e-po\u0161te.",
    "payment_entry_page.button_payment_method": "Plati {{formattedPrice}} putem {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Plati {{formattedPrice}}",
    "price_update.title": "A\u017Euriranje cijene",
    "price_update.base_message": "Ukupna cijena je a\u017Eurirana s porezom na temelju va\u0161e adrese za naplatu. Pregledajte i poku\u0161ajte ponovo. Va\u0161a kartica bit \u0107e napla\u0107ena samo jednom.",
    "price_update.trial_message": "Cijena pretplate je a\u017Eurirana da uklju\u010Di poreze na temelju va\u0161e adrese za naplatu. Besplatno probno razdoblje i dalje vrijedi. Molimo provjerite i poku\u0161ajte ponovno.",
    "payment_entry_page.express_checkout_divider": "ILI PLATITE KARTICOM",
    "error_page.trouble_accessing": "Ako imate problema s pristupom kupnji, obratite se podr\u0161ci na ",
    "error_page.close_button_title": "Idi na {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Nedostaje Stripe dopu\u0161tenje",
    "error_page.button_close": "Zatvori",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Kupnja nije uspjela jer je adresa poreznog podrijetla neva\u017Ee\u0107a. U produkciji \u0107e kupnje funkcionirati bez primijenjenih poreza.",
    "error_page.error_message_stripe_tax_not_active": "Kupnja nije uspjela jer Stripe Tax nije omogu\u0107en. U produkciji \u0107e kupnje funkcionirati bez primijenjenih poreza.",
    "error_page.error_only_in_sandbox": "Ova se poruka pojavljuje samo u sandboxu.",
    "error_page.error_message_stripe_missing_required_permission": "Kupnja nije uspjela jer Stripe aplikaciji nedostaje potrebno dopu\u0161tenje. U produkciji \u0107e kupnje funkcionirati bez primijenjenih poreza.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax nije aktivan",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Neva\u017Ee\u0107a adresa poreznog podrijetla",
    "apple_pay.free_trial": "Besplatna proba"
  };
  var oc = {
    "periods.week": "{{amount}} t\xFDden",
    "periods.month": "{{amount}} m\u011Bs\xEDc",
    "periods.year": "{{amount}} rok",
    "periods.day": "{{amount}} den",
    "periods.weekShort": "{{amount}}t\xFDd",
    "periods.monthShort": "{{amount}}m\u011Bs",
    "periods.yearShort": "{{amount}}rok",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "do\u017Eivotn\u011B",
    "periods.weekPlural": "{{amount}} t\xFDdn\u016F",
    "periods.monthPlural": "{{amount}} m\u011Bs\xEDc\u016F",
    "periods.yearPlural": "{{amount}} let",
    "periods.dayPlural": "{{amount}} dn\u016F",
    "periods.weekFrequency": "t\xFDdn\u011B",
    "periods.monthFrequency": "m\u011Bs\xED\u010Dn\u011B",
    "periods.yearFrequency": "ro\u010Dn\u011B",
    "periods.dayFrequency": "denn\u011B",
    "periods.perWeekFrequency": "t\xFDdn\u011B",
    "periods.perMonthFrequency": "m\u011Bs\xED\u010Dn\u011B",
    "periods.perYearFrequency": "ro\u010Dn\u011B",
    "periods.perDayFrequency": "denn\u011B",
    "periods.unknownFrequency": "nezn\xE1m\xE9",
    "periods.weekFrequencyPlural": "ka\u017Ed\xFDch {{amount}} t\xFDdn\u016F",
    "periods.monthFrequencyPlural": "ka\u017Ed\xFDch {{amount}} m\u011Bs\xEDc\u016F",
    "periods.yearFrequencyPlural": "ka\u017Ed\xFDch {{amount}} let",
    "periods.dayFrequencyPlural": "ka\u017Ed\xFDch {{amount}} dn\u016F",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} zku\u0161ebn\xED verze zdarma",
    "product_info.price_after_free_trial": "Po skon\u010Den\xED zku\u0161ebn\xED verze, {{renewalDate}}",
    "product_info.renewal_frequency": "Obnovuje se {{frequency}}",
    "product_info.continues_until_cancelled": "Pokra\u010Duje, dokud nen\xED zru\u0161eno",
    "product_info.cancel_anytime": "Zru\u0161it kdykoli",
    "payment_entry_page.payment_step_title": "Bezpe\u010Dn\xE9 placen\xED p\u0159es RevenueCat",
    "payment_entry_page.terms_info": "Poskytnut\xEDm informac\xED o va\u0161\xED kart\u011B umo\u017E\u0148ujete aplikaci {{appName}} \xFA\u010Dtovat va\u0161i kartu za budouc\xED platby v souladu s jejich podm\xEDnkami.",
    "payment_entry_page.button_pay": "Platit nyn\xED",
    "payment_entry_page.button_start_trial": "Spustit zku\u0161ebn\xED verzi",
    "success_page.purchase_successful": "Platba dokon\u010Dena",
    "success_page.button_close": "Pokra\u010Dovat",
    "error_page.if_error_persists": "Pokud chyba p\u0159etrv\xE1v\xE1, kontaktujte ",
    "error_page.error_title_already_subscribed": "Ji\u017E m\xE1te p\u0159edplatn\xE9 pro {{productTitle}}",
    "error_page.error_title_already_purchased": "Ji\u017E jste zakoupili {{productTitle}}",
    "error_page.error_title_other_errors": "N\u011Bco se pokazilo",
    "error_page.error_message_already_subscribed": "Nem\u016F\u017Eete si znovu p\u0159edplatit tento produkt.",
    "error_page.error_message_already_purchased": "Tento produkt si nem\u016F\u017Eete znovu zakoupit.",
    "error_page.error_message_missing_email_error": "Pro dokon\u010Den\xED n\xE1kupu je vy\u017Eadov\xE1n e-mail.",
    "error_page.error_message_network_error": "S\xED\u0165ov\xE1 chyba. Zkontrolujte pros\xEDm sv\xE9 internetov\xE9 p\u0159ipojen\xED.",
    "error_page.error_message_error_charging_payment": "Platba selhala.",
    "error_page.error_message_error_setting_up_purchase": "N\xE1kup nebyl zah\xE1jen z d\u016Fvodu chyby (k\xF3d chyby: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nemohli jsme ov\u011B\u0159it va\u0161i faktura\u010Dn\xED adresu. Zkontrolujte pros\xEDm, zda je po\u0161tovn\xED sm\u011Brovac\xED \u010D\xEDslo a zem\u011B spr\xE1vn\xE9.",
    "error_page.error_message_unknown_error": "Do\u0161lo k nezn\xE1m\xE9 chyb\u011B (k\xF3d chyby: {{errorCode}}).",
    "error_page.button_try_again": "Zkusit znovu",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% sleva",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Celkem dnes k zaplacen\xED",
    "product_info.subscribe_to": "P\u0159edplatit",
    "payment_entry_page.trial_info": "Po skon\u010Den\xED zku\u0161ebn\xED verze v\xE1m bude \xFA\u010Dtov\xE1no {{price}} {{perFrequency}} po\u010D\xEDnaje {{renewalDate}}. P\u0159edt\xEDm m\u016F\u017Eete kdykoli zru\u0161it.",
    "navbar_header.details": "Podrobnosti",
    "navbar_header.back_button": "Zp\u011Bt",
    "pricing_dropdown.show_details": "Zobrazit podrobnosti",
    "pricing_dropdown.hide_details": "Skr\xFDt podrobnosti",
    "pricing_table.tax": "Da\u0148",
    "pricing_table.trial_ends": "Po skon\u010Den\xED zku\u0161ebn\xED doby, dne {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Celkem splatn\xE9 dnes",
    "pricing_table.total_excluding_tax": "Celkem bez dan\u011B",
    "pricing_table.enter_billing_address_to_calculate": "Zadejte faktura\u010Dn\xED adresu pro v\xFDpo\u010Det",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Zadejte st\xE1t nebo PS\u010C pro v\xFDpo\u010Det",
    "pricing_table.enter_postal_code_to_calculate": "Zadejte PS\u010C pro v\xFDpo\u010Det",
    "error_page.error_message_invalid_email_error": "E-mailov\xE1 adresa {{email}} nemohla b\xFDt ov\u011B\u0159ena. Zadejte pros\xEDm platnou e-mailovou adresu.",
    "payment_entry_page.button_payment_method": "Zaplatit {{formattedPrice}} pomoc\xED {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Zaplatit {{formattedPrice}}",
    "price_update.title": "Aktualizace ceny",
    "price_update.base_message": "Celkov\xE1 cena byla aktualizov\xE1na o da\u0148 na z\xE1klad\u011B va\u0161\xED faktura\u010Dn\xED adresy. Zkontrolujte ji a zkuste to znovu. Va\u0161e karta bude str\u017Eena pouze jednou.",
    "price_update.trial_message": "Cena p\u0159edplatn\xE9ho byla aktualizov\xE1na v\u010Detn\u011B dan\xED na z\xE1klad\u011B va\u0161\xED faktura\u010Dn\xED adresy. Bezplatn\xE1 zku\u0161ebn\xED doba st\xE1le plat\xED. Pros\xEDm, zkontrolujte a zkuste to znovu.",
    "payment_entry_page.express_checkout_divider": "NEBO ZAPLATIT KARTOU",
    "error_page.trouble_accessing": "Pokud m\xE1te pot\xED\u017Ee s p\u0159\xEDstupem k zakoupen\xE9mu obsahu, kontaktujte podporu na ",
    "error_page.close_button_title": "P\u0159ej\xEDt na {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Chyb\xED opr\xE1vn\u011Bn\xED Stripe",
    "error_page.button_close": "Zav\u0159\xEDt",
    "error_page.error_message_stripe_invalid_tax_origin_address": "N\xE1kup se nezda\u0159il, proto\u017Ee adresa p\u016Fvodu dan\u011B je neplatn\xE1. V produk\u010Dn\xEDm prost\u0159ed\xED budou n\xE1kupy fungovat bez uplatn\u011Bn\xED dan\xED.",
    "error_page.error_message_stripe_tax_not_active": "N\xE1kup se nezda\u0159il, proto\u017Ee Stripe Tax nen\xED aktivn\xED. V produk\u010Dn\xEDm prost\u0159ed\xED budou n\xE1kupy fungovat bez uplatn\u011Bn\xED dan\xED.",
    "error_page.error_only_in_sandbox": "Tato zpr\xE1va se zobrazuje pouze v sandboxu.",
    "error_page.error_message_stripe_missing_required_permission": "N\xE1kup se nezda\u0159il, proto\u017Ee aplikaci Stripe chyb\xED po\u017Eadovan\xE9 opr\xE1vn\u011Bn\xED. V produk\u010Dn\xEDm prost\u0159ed\xED budou n\xE1kupy fungovat bez uplatn\u011Bn\xED dan\xED.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax nen\xED aktivn\xED",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Neplatn\xE1 adresa p\u016Fvodu dan\u011B",
    "apple_pay.free_trial": "Zku\u0161ebn\xED verze zdarma"
  };
  var ic = {
    "periods.week": "{{amount}} uge",
    "periods.month": "{{amount}} m\xE5ned",
    "periods.year": "{{amount}} \xE5r",
    "periods.day": "{{amount}} dag",
    "periods.weekShort": "{{amount}}ug",
    "periods.monthShort": "{{amount}}md",
    "periods.yearShort": "{{amount}}\xE5r",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "livstid",
    "periods.weekPlural": "{{amount}} uger",
    "periods.monthPlural": "{{amount}} m\xE5neder",
    "periods.yearPlural": "{{amount}} \xE5r",
    "periods.dayPlural": "{{amount}} dage",
    "periods.weekFrequency": "ugentligt",
    "periods.monthFrequency": "m\xE5nedligt",
    "periods.yearFrequency": "\xE5rligt",
    "periods.dayFrequency": "dagligt",
    "periods.perWeekFrequency": "pr. uge",
    "periods.perMonthFrequency": "pr. m\xE5ned",
    "periods.perYearFrequency": "pr. \xE5r",
    "periods.perDayFrequency": "pr. dag",
    "periods.unknownFrequency": "ukendt",
    "periods.weekFrequencyPlural": "hver {{amount}} uger",
    "periods.monthFrequencyPlural": "hver {{amount}} m\xE5neder",
    "periods.yearFrequencyPlural": "hver {{amount}} \xE5r",
    "periods.dayFrequencyPlural": "hver {{amount}} dage",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} gratis pr\xF8veperiode",
    "product_info.price_after_free_trial": "Efter pr\xF8veperioden slutter, den {{renewalDate}}",
    "product_info.renewal_frequency": "Fornyes {{frequency}}",
    "product_info.continues_until_cancelled": "Forts\xE6tter indtil annulleret",
    "product_info.cancel_anytime": "Annuller n\xE5r som helst",
    "payment_entry_page.payment_step_title": "Sikker betaling via RevenueCat",
    "payment_entry_page.terms_info": "Ved at angive dine kortinformationer giver du {{appName}} tilladelse til at tr\xE6kke bel\xF8b p\xE5 dit kort for fremtidige betalinger i overensstemmelse med deres vilk\xE5r.",
    "payment_entry_page.button_pay": "Betal nu",
    "payment_entry_page.button_start_trial": "Start pr\xF8veperiode",
    "success_page.purchase_successful": "Betaling gennemf\xF8rt",
    "success_page.button_close": "Forts\xE6t",
    "error_page.if_error_persists": "Hvis fejlen forts\xE6tter, kontakt venligst ",
    "error_page.error_title_already_subscribed": "Du abonnerer allerede p\xE5 {{productTitle}}",
    "error_page.error_title_already_purchased": "Du har allerede k\xF8bt {{productTitle}}",
    "error_page.error_title_other_errors": "Noget gik galt",
    "error_page.error_message_already_subscribed": "Du kan ikke abonnere p\xE5 dette produkt igen.",
    "error_page.error_message_already_purchased": "Du kan ikke k\xF8be dette produkt igen.",
    "error_page.error_message_missing_email_error": "Email er p\xE5kr\xE6vet for at gennemf\xF8re k\xF8bet.",
    "error_page.error_message_network_error": "Netv\xE6rksfejl. Kontroller din internetforbindelse.",
    "error_page.error_message_error_charging_payment": "Betalingen mislykkedes.",
    "error_page.error_message_error_setting_up_purchase": "K\xF8b ikke startet p\xE5 grund af en fejl (fejlkode: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Vi kunne ikke bekr\xE6fte din faktureringsadresse. Kontroller venligst, at postnummeret og landet er korrekte.",
    "error_page.error_message_unknown_error": "Der opstod en ukendt fejl (fejlkode: {{errorCode}}).",
    "error_page.button_try_again": "Pr\xF8v igen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% rabat",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Samlet bel\xF8b for i dag",
    "product_info.subscribe_to": "Abonner p\xE5",
    "payment_entry_page.trial_info": "Efter din pr\xF8veperiode slutter, vil du blive opkr\xE6vet {{price}} {{perFrequency}} fra {{renewalDate}}. Du kan altid opsige f\xF8r da.",
    "navbar_header.details": "Detaljer",
    "navbar_header.back_button": "Tilbage",
    "pricing_dropdown.show_details": "Vis detaljer",
    "pricing_dropdown.hide_details": "Skjul detaljer",
    "pricing_table.tax": "Moms",
    "pricing_table.trial_ends": "Efter pr\xF8veperioden slutter, den {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Samlet bel\xF8b forfalden i dag",
    "pricing_table.total_excluding_tax": "Samlet bel\xF8b eksklusive moms",
    "pricing_table.enter_billing_address_to_calculate": "Indtast faktureringsadresse for at beregne",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Indtast stat eller postnummer for at beregne",
    "pricing_table.enter_postal_code_to_calculate": "Indtast postnummer for at beregne",
    "error_page.error_message_invalid_email_error": "E-mailadressen {{email}} kunne ikke bekr\xE6ftes. Angiv en gyldig e-mailadresse.",
    "payment_entry_page.button_payment_method": "Betal {{formattedPrice}} med {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Betal {{formattedPrice}}",
    "price_update.title": "Prisopdatering",
    "price_update.base_message": "Den samlede pris er blevet opdateret med moms baseret p\xE5 din faktureringsadresse. Gennemg\xE5 og pr\xF8v igen. Dit kort vil kun blive debiteret \xE9n gang.",
    "price_update.trial_message": "Abonnementsprisen er opdateret for at inkludere skatter baseret p\xE5 din faktureringsadresse. Den gratis pr\xF8veperiode g\xE6lder stadig. Kontroller venligst og pr\xF8v igen.",
    "payment_entry_page.express_checkout_divider": "ELLER BETAL MED KORT",
    "error_page.trouble_accessing": "Hvis du har problemer med at f\xE5 adgang til dit k\xF8b, kan du kontakte support p\xE5 ",
    "error_page.close_button_title": "G\xE5 til {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Manglende Stripe-tilladelse",
    "error_page.button_close": "Luk",
    "error_page.error_message_stripe_invalid_tax_origin_address": "K\xF8bet mislykkedes, fordi skatteoprindelsesadressen er ugyldig. I produktion vil k\xF8b fungere uden p\xE5f\xF8rte skatter.",
    "error_page.error_message_stripe_tax_not_active": "K\xF8bet mislykkedes, fordi Stripe Tax ikke er aktiveret. I produktion vil k\xF8b fungere uden p\xE5f\xF8rte skatter.",
    "error_page.error_only_in_sandbox": "Denne meddelelse vises kun i sandkassen.",
    "error_page.error_message_stripe_missing_required_permission": "K\xF8bet mislykkedes, fordi Stripe-appen mangler en p\xE5kr\xE6vet tilladelse. I produktion vil k\xF8b fungere uden p\xE5f\xF8rte skatter.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax er ikke aktiv",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ugyldig skatteoprindelsesadresse",
    "apple_pay.free_trial": "Gratis pr\xF8veperiode"
  };
  var sc = {
    "periods.week": "{{amount}} week",
    "periods.month": "{{amount}} maand",
    "periods.year": "{{amount}} jaar",
    "periods.day": "{{amount}} dag",
    "periods.weekShort": "{{amount}}wk",
    "periods.monthShort": "{{amount}}maand",
    "periods.yearShort": "{{amount}}jr",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "levenslang",
    "periods.weekPlural": "{{amount}} weken",
    "periods.monthPlural": "{{amount}} maanden",
    "periods.yearPlural": "{{amount}} jaren",
    "periods.dayPlural": "{{amount}} dagen",
    "periods.weekFrequency": "wekelijks",
    "periods.monthFrequency": "maandelijks",
    "periods.yearFrequency": "jaarlijks",
    "periods.dayFrequency": "dagelijks",
    "periods.perWeekFrequency": "per week",
    "periods.perMonthFrequency": "per maand",
    "periods.perYearFrequency": "per jaar",
    "periods.perDayFrequency": "per dag",
    "periods.unknownFrequency": "onbekend",
    "periods.weekFrequencyPlural": "elke {{amount}} weken",
    "periods.monthFrequencyPlural": "elke {{amount}} maanden",
    "periods.yearFrequencyPlural": "elke {{amount}} jaren",
    "periods.dayFrequencyPlural": "elke {{amount}} dagen",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} gratis proefperiode",
    "product_info.price_after_free_trial": "Na afloop van de proefperiode, op {{renewalDate}}",
    "product_info.renewal_frequency": "Wordt verlengd {{frequency}}",
    "product_info.continues_until_cancelled": "Wordt voortgezet tot annulering",
    "product_info.cancel_anytime": "Annuleer op elk gewenst moment",
    "payment_entry_page.payment_step_title": "Veilige afrekening via RevenueCat",
    "payment_entry_page.terms_info": "Door uw kaartgegevens te verstrekken, staat u {{appName}} toe om uw kaart te belasten voor toekomstige betalingen in overeenstemming met hun voorwaarden.",
    "payment_entry_page.button_pay": "Nu betalen",
    "payment_entry_page.button_start_trial": "Start proefperiode",
    "success_page.purchase_successful": "Betaling voltooid",
    "success_page.button_close": "Doorgaan",
    "error_page.if_error_persists": "Neem contact op met  als de fout aanhoudt",
    "error_page.error_title_already_subscribed": "Je bent al geabonneerd op {{productTitle}}",
    "error_page.error_title_already_purchased": "Je hebt {{productTitle}} al gekocht",
    "error_page.error_title_other_errors": "Er is iets misgegaan",
    "error_page.error_message_already_subscribed": "Je kunt je niet opnieuw abonneren op dit product.",
    "error_page.error_message_already_purchased": "Je kunt dit product niet opnieuw kopen.",
    "error_page.error_message_missing_email_error": "Een e-mailadres is vereist om de aankoop te voltooien.",
    "error_page.error_message_network_error": "Netwerkfout. Controleer uw internetverbinding.",
    "error_page.error_message_error_charging_payment": "Betaling mislukt.",
    "error_page.error_message_error_setting_up_purchase": "Aankoop niet gestart vanwege een fout (foutcode: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "We konden uw factuuradres niet verifi\xEBren. Controleer of de postcode en het land correct zijn.",
    "error_page.error_message_unknown_error": "Er is een onbekende fout opgetreden (foutcode: {{errorCode}}).",
    "error_page.button_try_again": "Opnieuw proberen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% korting",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Totaal te betalen vandaag",
    "product_info.subscribe_to": "Abonneren op",
    "payment_entry_page.trial_info": "Na afloop van je proefperiode wordt {{price}} {{perFrequency}} in rekening gebracht vanaf {{renewalDate}}. Je kunt altijd eerder annuleren.",
    "navbar_header.details": "Details",
    "navbar_header.back_button": "Terug",
    "pricing_dropdown.show_details": "Toon details",
    "pricing_dropdown.hide_details": "Verberg details",
    "pricing_table.tax": "Btw",
    "pricing_table.trial_ends": "Na afloop van de proefperiode, op {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Totaal vandaag te betalen",
    "pricing_table.total_excluding_tax": "Totaal exclusief btw",
    "pricing_table.enter_billing_address_to_calculate": "Voer het factuuradres in om te berekenen",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Voer provincie of postcode in om te berekenen",
    "pricing_table.enter_postal_code_to_calculate": "Voer postcode in om te berekenen",
    "error_page.error_message_invalid_email_error": "Het e-mailadres {{email}} kon niet worden geverifieerd. Geef een geldig e-mailadres op.",
    "payment_entry_page.button_payment_method": "Betaal {{formattedPrice}} met {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Betaal {{formattedPrice}}",
    "price_update.title": "Prijsupdate",
    "price_update.base_message": "De totale prijs is bijgewerkt met belasting op basis van uw factuuradres. Controleer en probeer het opnieuw. Uw kaart wordt slechts \xE9\xE9n keer belast.",
    "price_update.trial_message": "De abonnementsprijs is bijgewerkt om belastingen op te nemen op basis van uw factuuradres. De gratis proefperiode blijft van toepassing. Controleer en probeer het opnieuw.",
    "payment_entry_page.express_checkout_divider": "OF BETAAL MET EEN KAART",
    "error_page.trouble_accessing": "Als je problemen hebt met het verkrijgen van toegang tot je aankoop, neem dan contact op met de ondersteuning via ",
    "error_page.close_button_title": "Ga naar {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Ontbrekende Stripe-toestemming",
    "error_page.button_close": "Sluiten",
    "error_page.error_message_stripe_invalid_tax_origin_address": "De aankoop is mislukt omdat het belastingoorsprongadres ongeldig is. In productie werken aankopen zonder toegepaste belastingen.",
    "error_page.error_message_stripe_tax_not_active": "De aankoop is mislukt omdat Stripe Tax niet is ingeschakeld. In productie werken aankopen zonder toegepaste belastingen.",
    "error_page.error_only_in_sandbox": "Dit bericht verschijnt alleen in de sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "De aankoop is mislukt omdat de Stripe-app een vereiste toestemming mist. In productie werken aankopen zonder toegepaste belastingen.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax niet actief",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ongeldig belastingoorsprongadres",
    "apple_pay.free_trial": "Gratis proefperiode"
  };
  var lc = {
    "periods.week": "{{amount}} viikko",
    "periods.month": "{{amount}} kuukausi",
    "periods.year": "{{amount}} vuosi",
    "periods.day": "{{amount}} p\xE4iv\xE4",
    "periods.weekShort": "{{amount}}vk",
    "periods.monthShort": "{{amount}}kk",
    "periods.yearShort": "{{amount}}v",
    "periods.dayShort": "{{amount}}p",
    "periods.lifetime": "el\xE4m\xE4aika",
    "periods.weekPlural": "{{amount}} viikkoa",
    "periods.monthPlural": "{{amount}} kuukautta",
    "periods.yearPlural": "{{amount}} vuotta",
    "periods.dayPlural": "{{amount}} p\xE4iv\xE4\xE4",
    "periods.weekFrequency": "viikoittain",
    "periods.monthFrequency": "kuukausittain",
    "periods.yearFrequency": "vuosittain",
    "periods.dayFrequency": "p\xE4ivitt\xE4in",
    "periods.perWeekFrequency": "viikossa",
    "periods.perMonthFrequency": "kuukaudessa",
    "periods.perYearFrequency": "vuodessa",
    "periods.perDayFrequency": "p\xE4iv\xE4ss\xE4",
    "periods.unknownFrequency": "tuntematon",
    "periods.weekFrequencyPlural": "joka {{amount}} viikko",
    "periods.monthFrequencyPlural": "joka {{amount}} kuukausi",
    "periods.yearFrequencyPlural": "joka {{amount}} vuosi",
    "periods.dayFrequencyPlural": "joka {{amount}} p\xE4iv\xE4",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} ilmainen kokeilujakso",
    "product_info.price_after_free_trial": "Kokeilujakson p\xE4\xE4tytty\xE4, {{renewalDate}}",
    "product_info.renewal_frequency": "Uusiutuu {{frequency}}",
    "product_info.continues_until_cancelled": "Jatkuu, kunnes peruutetaan",
    "product_info.cancel_anytime": "Peruuta milloin tahansa",
    "payment_entry_page.payment_step_title": "Suojautunut kassatoiminto RevenueCatin kautta",
    "payment_entry_page.terms_info": "Antamalla korttitietosi annat {{appName}} -sovellukselle luvan veloittaa korttiasi tulevien maksujen osalta heid\xE4n ehtojensa mukaisesti.",
    "payment_entry_page.button_pay": "Maksa nyt",
    "payment_entry_page.button_start_trial": "Aloita kokeilujakso",
    "success_page.purchase_successful": "Maksaminen onnistui",
    "success_page.button_close": "Jatka",
    "error_page.if_error_persists": "Jos virhe jatkuu, ota yhteytt\xE4 ",
    "error_page.error_title_already_subscribed": "Olet jo tilannut tuotteen {{productTitle}}",
    "error_page.error_title_already_purchased": "Olet jo ostanut tuotteen {{productTitle}}",
    "error_page.error_title_other_errors": "Jokin meni pieleen",
    "error_page.error_message_already_subscribed": "Et voi tilata t\xE4t\xE4 tuotetta uudelleen.",
    "error_page.error_message_already_purchased": "Et voi ostaa t\xE4t\xE4 tuotetta uudelleen.",
    "error_page.error_message_missing_email_error": "S\xE4hk\xF6postiosoite tarvitaan ostoksen loppuun saattamiseksi.",
    "error_page.error_message_network_error": "Verkkovirhe. Tarkista internet-yhteytesi.",
    "error_page.error_message_error_charging_payment": "Maksaminen ep\xE4onnistui.",
    "error_page.error_message_error_setting_up_purchase": "Ostoa ei aloitettu virheen vuoksi (virhekoodi: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Emme voineet vahvistaa laskutusosoitettasi. Tarkista, ett\xE4 postinumero ja maa ovat oikein.",
    "error_page.error_message_unknown_error": "Tapahtui tuntematon virhe (virhekoodi: {{errorCode}}).",
    "error_page.button_try_again": "Yrit\xE4 uudelleen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% alennus",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Maksettava summa t\xE4n\xE4\xE4n",
    "product_info.subscribe_to": "Tilaa",
    "payment_entry_page.trial_info": "Kokeilujakson p\xE4\xE4tytty\xE4 sinulta veloitetaan {{price}} {{perFrequency}} alkaen {{renewalDate}}. Voit peruuttaa tilauksen milloin tahansa ennen sit\xE4.",
    "navbar_header.details": "Yksityiskohdat",
    "navbar_header.back_button": "Takaisin",
    "pricing_dropdown.show_details": "N\xE4yt\xE4 tiedot",
    "pricing_dropdown.hide_details": "Piilota tiedot",
    "pricing_table.tax": "Vero",
    "pricing_table.trial_ends": "Kokeilujakson p\xE4\xE4tytty\xE4, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Maksettava summa t\xE4n\xE4\xE4n",
    "pricing_table.total_excluding_tax": "Veroton kokonaissumma",
    "pricing_table.enter_billing_address_to_calculate": "Sy\xF6t\xE4 laskutusosoite laskeaksesi",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Sy\xF6t\xE4 osavaltio tai postinumero laskeaksesi",
    "pricing_table.enter_postal_code_to_calculate": "Sy\xF6t\xE4 postinumero laskeaksesi",
    "error_page.error_message_invalid_email_error": "S\xE4hk\xF6postiosoitetta {{email}} ei voitu vahvistaa. Anna kelvollinen s\xE4hk\xF6postiosoite.",
    "payment_entry_page.button_payment_method": "Maksa {{formattedPrice}} k\xE4ytt\xE4m\xE4ll\xE4 {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Maksa {{formattedPrice}}",
    "price_update.title": "Hinnan p\xE4ivitys",
    "price_update.base_message": "Kokonaishinta on p\xE4ivitetty verolla laskutusosoitteesi perusteella. Tarkista ja yrit\xE4 uudelleen. Korttiasi veloitetaan vain kerran.",
    "price_update.trial_message": "Tilauksen hinta on p\xE4ivitetty sis\xE4lt\xE4m\xE4\xE4n verot laskutusosoitteesi perusteella. Ilmainen kokeilujakso on edelleen voimassa. Tarkista ja yrit\xE4 uudelleen.",
    "payment_entry_page.express_checkout_divider": "TAI MAKSA KORTILLA",
    "error_page.trouble_accessing": "Jos sinulla on ongelmia ostoksesi k\xE4ytt\xE4misess\xE4, ota yhteytt\xE4 tukeen osoitteessa ",
    "error_page.close_button_title": "Siirry sovellukseen {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Puuttuva Stripe-k\xE4ytt\xF6oikeus",
    "error_page.button_close": "Sulje",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Osto ep\xE4onnistui, koska veron alkuper\xE4osoite on virheellinen. Tuotantoymp\xE4rist\xF6ss\xE4 ostot toimivat ilman veroja.",
    "error_page.error_message_stripe_tax_not_active": "Osto ep\xE4onnistui, koska Stripe Tax ei ole k\xE4yt\xF6ss\xE4. Tuotantoymp\xE4rist\xF6ss\xE4 ostot toimivat ilman veroja.",
    "error_page.error_only_in_sandbox": "T\xE4m\xE4 viesti n\xE4kyy vain hiekkalaatikossa.",
    "error_page.error_message_stripe_missing_required_permission": "Osto ep\xE4onnistui, koska Stripe-sovellukselta puuttuu vaadittu k\xE4ytt\xF6oikeus. Tuotantoymp\xE4rist\xF6ss\xE4 ostot toimivat ilman veroja.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax ei ole aktiivinen",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Virheellinen veron alkuper\xE4osoite",
    "apple_pay.free_trial": "Ilmainen kokeilu"
  };
  var cc = {
    "periods.week": "{{amount}} semaine",
    "periods.month": "{{amount}} mois",
    "periods.year": "{{amount}} an",
    "periods.day": "{{amount}} jour",
    "periods.weekShort": "{{amount}}sem",
    "periods.monthShort": "{{amount}}mois",
    "periods.yearShort": "{{amount}}an",
    "periods.dayShort": "{{amount}}j",
    "periods.lifetime": "\xE0 vie",
    "periods.weekPlural": "{{amount}} semaines",
    "periods.monthPlural": "{{amount}} mois",
    "periods.yearPlural": "{{amount}} ans",
    "periods.dayPlural": "{{amount}} jours",
    "periods.weekFrequency": "hebdomadaire",
    "periods.monthFrequency": "mensuel",
    "periods.yearFrequency": "annuel",
    "periods.dayFrequency": "quotidien",
    "periods.perWeekFrequency": "par semaine",
    "periods.perMonthFrequency": "par mois",
    "periods.perYearFrequency": "par an",
    "periods.perDayFrequency": "par jour",
    "periods.unknownFrequency": "inconnu",
    "periods.weekFrequencyPlural": "toutes les {{amount}} semaines",
    "periods.monthFrequencyPlural": "tous les {{amount}} mois",
    "periods.yearFrequencyPlural": "tous les {{amount}} ans",
    "periods.dayFrequencyPlural": "tous les {{amount}} jours",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} essai gratuit",
    "product_info.price_after_free_trial": "Apr\xE8s la fin de l'essai, le {{renewalDate}}",
    "product_info.renewal_frequency": "Renouvellement {{frequency}}",
    "product_info.continues_until_cancelled": "Continue jusqu'\xE0 annulation",
    "product_info.cancel_anytime": "Annulez \xE0 tout moment",
    "payment_entry_page.payment_step_title": "Paiement s\xE9curis\xE9 par RevenueCat",
    "payment_entry_page.terms_info": "En fournissant vos informations de carte, vous autorisez {{appName}} \xE0 d\xE9biter votre carte pour les paiements futurs conform\xE9ment \xE0 ses conditions.",
    "payment_entry_page.button_pay": "Payer maintenant",
    "payment_entry_page.button_start_trial": "Commencer l'essai",
    "success_page.purchase_successful": "Paiement effectu\xE9",
    "success_page.button_close": "Continuer",
    "error_page.if_error_persists": "Si l'erreur persiste, veuillez contacter ",
    "error_page.error_title_already_subscribed": "Vous \xEAtes d\xE9j\xE0 abonn\xE9 \xE0 {{productTitle}}",
    "error_page.error_title_already_purchased": "Vous avez d\xE9j\xE0 achet\xE9 {{productTitle}}",
    "error_page.error_title_other_errors": "Une erreur s'est produite",
    "error_page.error_message_already_subscribed": "Vous ne pouvez pas vous abonner \xE0 nouveau \xE0 ce produit.",
    "error_page.error_message_already_purchased": "Vous ne pouvez pas acheter ce produit \xE0 nouveau.",
    "error_page.error_message_missing_email_error": "L'adresse e-mail est requise pour effectuer l'achat.",
    "error_page.error_message_network_error": "Erreur r\xE9seau. Veuillez v\xE9rifier votre connexion Internet.",
    "error_page.error_message_error_charging_payment": "\xC9chec du paiement.",
    "error_page.error_message_error_setting_up_purchase": "L'achat n'a pas pu d\xE9marrer en raison d'une erreur (code d'erreur : {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nous n'avons pas pu v\xE9rifier votre adresse de facturation. Veuillez v\xE9rifier que le code postal et le pays sont corrects.",
    "error_page.error_message_unknown_error": "Une erreur inconnue s'est produite (code d'erreur : {{errorCode}}).",
    "error_page.button_try_again": "R\xE9essayer",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% de r\xE9duction",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total d\xFB aujourd'hui",
    "product_info.subscribe_to": "S'abonner \xE0",
    "payment_entry_page.trial_info": "Apr\xE8s la fin de votre essai, vous serez factur\xE9 {{price}} {{perFrequency}} \xE0 partir du {{renewalDate}}. Vous pouvez annuler \xE0 tout moment avant cette date.",
    "navbar_header.details": "D\xE9tails",
    "navbar_header.back_button": "Retour",
    "pricing_dropdown.show_details": "Afficher les d\xE9tails",
    "pricing_dropdown.hide_details": "Masquer les d\xE9tails",
    "pricing_table.tax": "Taxe",
    "pricing_table.trial_ends": "Apr\xE8s la fin de l'essai, le {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total d\xFB aujourd'hui",
    "pricing_table.total_excluding_tax": "Total hors taxes",
    "pricing_table.enter_billing_address_to_calculate": "Saisir l'adresse de facturation pour calculer",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Entrez l'\xE9tat ou le code postal pour calculer",
    "pricing_table.enter_postal_code_to_calculate": "Entrez le code postal pour calculer",
    "error_page.error_message_invalid_email_error": "L'adresse e-mail {{email}} n'a pas pu \xEAtre v\xE9rifi\xE9e. Veuillez fournir une adresse e-mail valide.",
    "payment_entry_page.button_payment_method": "Payer {{formattedPrice}} avec {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Payer {{formattedPrice}}",
    "price_update.title": "Mise \xE0 jour du prix",
    "price_update.base_message": "Le prix total a \xE9t\xE9 mis \xE0 jour avec la taxe en fonction de votre adresse de facturation. Veuillez v\xE9rifier et r\xE9essayer. Votre carte ne sera d\xE9bit\xE9e qu'une seule fois.",
    "price_update.trial_message": "Le prix de l'abonnement a \xE9t\xE9 mis \xE0 jour pour inclure les taxes en fonction de votre adresse de facturation. La p\xE9riode d'essai gratuit reste applicable. Veuillez v\xE9rifier et r\xE9essayer.",
    "payment_entry_page.express_checkout_divider": "OU PAYER PAR CARTE",
    "error_page.trouble_accessing": "Si vous avez des difficult\xE9s \xE0 acc\xE9der \xE0 votre achat, contactez le support \xE0 l'adresse suivante : ",
    "error_page.close_button_title": "Aller sur {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Autorisation Stripe manquante",
    "error_page.button_close": "Fermer",
    "error_page.error_message_stripe_invalid_tax_origin_address": "L'achat a \xE9chou\xE9 car l'adresse d'origine de la taxe n'est pas valide. En production, les achats fonctionneront sans taxes appliqu\xE9es.",
    "error_page.error_message_stripe_tax_not_active": "L'achat a \xE9chou\xE9 car Stripe Tax n'est pas activ\xE9. En production, les achats fonctionneront sans taxes appliqu\xE9es.",
    "error_page.error_only_in_sandbox": "Ce message appara\xEEt uniquement dans l'environnement de test.",
    "error_page.error_message_stripe_missing_required_permission": "L'achat a \xE9chou\xE9 car l'application Stripe ne dispose pas d'une autorisation requise. En production, les achats fonctionneront sans taxes appliqu\xE9es.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax non actif",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Adresse d'origine de la taxe non valide",
    "apple_pay.free_trial": "Essai gratuit"
  };
  var dc = {
    "periods.week": "{{amount}} Woche",
    "periods.month": "{{amount}} Monat",
    "periods.year": "{{amount}} Jahr",
    "periods.day": "{{amount}} Tag",
    "periods.weekShort": "{{amount}}Wo",
    "periods.monthShort": "{{amount}}Mo",
    "periods.yearShort": "{{amount}}J",
    "periods.dayShort": "{{amount}}T",
    "periods.lifetime": "lebenslang",
    "periods.weekPlural": "{{amount}} Wochen",
    "periods.monthPlural": "{{amount}} Monate",
    "periods.yearPlural": "{{amount}} Jahre",
    "periods.dayPlural": "{{amount}} Tage",
    "periods.weekFrequency": "w\xF6chentlich",
    "periods.monthFrequency": "monatlich",
    "periods.yearFrequency": "j\xE4hrlich",
    "periods.dayFrequency": "t\xE4glich",
    "periods.perWeekFrequency": "pro Woche",
    "periods.perMonthFrequency": "pro Monat",
    "periods.perYearFrequency": "pro Jahr",
    "periods.perDayFrequency": "pro Tag",
    "periods.unknownFrequency": "unbekannt",
    "periods.weekFrequencyPlural": "alle {{amount}} Wochen",
    "periods.monthFrequencyPlural": "alle {{amount}} Monate",
    "periods.yearFrequencyPlural": "alle {{amount}} Jahre",
    "periods.dayFrequencyPlural": "alle {{amount}} Tage",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} kostenlose Testversion",
    "product_info.price_after_free_trial": "Nach Ablauf der Testversion, am {{renewalDate}}",
    "product_info.renewal_frequency": "Verl\xE4ngert sich {{frequency}}",
    "product_info.continues_until_cancelled": "L\xE4uft bis zur K\xFCndigung",
    "product_info.cancel_anytime": "Jederzeit k\xFCndbar",
    "payment_entry_page.payment_step_title": "Sicherer Checkout \xFCber RevenueCat",
    "payment_entry_page.terms_info": "Durch die Angabe Ihrer Karteninformationen erlauben Sie {{appName}}, Ihre Karte gem\xE4\xDF deren Bedingungen f\xFCr zuk\xFCnftige Zahlungen zu belasten.",
    "payment_entry_page.button_pay": "Jetzt bezahlen",
    "payment_entry_page.button_start_trial": "Testversion starten",
    "success_page.purchase_successful": "Zahlung abgeschlossen",
    "success_page.button_close": "Weiter",
    "error_page.if_error_persists": "Wenn der Fehler weiterhin besteht, wenden Sie sich bitte an ",
    "error_page.error_title_already_subscribed": "Du hast {{productTitle}} bereits abonniert",
    "error_page.error_title_already_purchased": "Du hast {{productTitle}} bereits gekauft",
    "error_page.error_title_other_errors": "Etwas ist schief gelaufen",
    "error_page.error_message_already_subscribed": "Du kannst dieses Produkt nicht erneut abonnieren.",
    "error_page.error_message_already_purchased": "Du kannst dieses Produkt nicht erneut kaufen.",
    "error_page.error_message_missing_email_error": "F\xFCr den Kauf ist eine E-Mail-Adresse erforderlich.",
    "error_page.error_message_network_error": "Netzwerkfehler. Bitte \xFCberpr\xFCfen Sie Ihre Internetverbindung.",
    "error_page.error_message_error_charging_payment": "Zahlung fehlgeschlagen.",
    "error_page.error_message_error_setting_up_purchase": "Der Kauf wurde aufgrund eines Fehlers nicht gestartet (Fehlercode: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Wir konnten Ihre Rechnungsadresse nicht \xFCberpr\xFCfen. Bitte \xFCberpr\xFCfen Sie, ob die Postleitzahl und das Land korrekt sind.",
    "error_page.error_message_unknown_error": "Ein unbekannter Fehler ist aufgetreten (Fehlercode: {{errorCode}}).",
    "error_page.button_try_again": "Erneut versuchen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% Rabatt",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Heute f\xE4lliger Gesamtbetrag",
    "product_info.subscribe_to": "Abonnieren",
    "payment_entry_page.trial_info": "Nach Ablauf Ihres Testzeitraums werden Ihnen {{price}} {{perFrequency}} ab dem {{renewalDate}} berechnet. Sie k\xF6nnen jederzeit vorher k\xFCndigen.",
    "navbar_header.details": "Details",
    "navbar_header.back_button": "Zur\xFCck",
    "pricing_dropdown.show_details": "Details anzeigen",
    "pricing_dropdown.hide_details": "Details ausblenden",
    "pricing_table.tax": "Steuer",
    "pricing_table.trial_ends": "Nach Ablauf der Testphase, am {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Heute f\xE4lliger Gesamtbetrag",
    "pricing_table.total_excluding_tax": "Gesamtbetrag ohne Steuer",
    "pricing_table.enter_billing_address_to_calculate": "Rechnungsadresse eingeben, um zu berechnen",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Bundesland oder Postleitzahl zur Berechnung eingeben",
    "pricing_table.enter_postal_code_to_calculate": "Postleitzahl zur Berechnung eingeben",
    "error_page.error_message_invalid_email_error": "Die E-Mail-Adresse {{email}} konnte nicht verifiziert werden. Bitte gib eine g\xFCltige E-Mail-Adresse an.",
    "payment_entry_page.button_payment_method": "Mit {{paymentMethod}} f\xFCr {{formattedPrice}} bezahlen",
    "payment_entry_page.button_with_price": "{{formattedPrice}} bezahlen",
    "price_update.title": "Preisaktualisierung",
    "price_update.base_message": "Der Gesamtpreis wurde basierend auf Ihrer Rechnungsadresse mit Steuern aktualisiert. Bitte \xFCberpr\xFCfen Sie ihn und versuchen Sie es erneut. Ihre Karte wird erst belastet, wenn alles korrekt ist.",
    "price_update.trial_message": "Der Abonnementpreis wurde aktualisiert, um Steuern basierend auf Ihrer Rechnungsadresse einzuschlie\xDFen. Die kostenlose Testphase gilt weiterhin. Bitte \xFCberpr\xFCfen Sie und versuchen Sie es erneut.",
    "payment_entry_page.express_checkout_divider": "ODER MIT KARTE ZAHLEN",
    "error_page.trouble_accessing": "Wenn Sie Probleme beim Zugriff auf Ihren Kauf haben, wenden Sie sich an den Support unter ",
    "error_page.close_button_title": "Zu {{appName}} gehen",
    "error_page.error_title_stripe_missing_required_permission": "Fehlende Stripe-Berechtigung",
    "error_page.button_close": "Schlie\xDFen",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Der Kauf ist fehlgeschlagen, da die Steuerursprungsadresse ung\xFCltig ist. In der Produktion funktionieren K\xE4ufe ohne angewendete Steuern.",
    "error_page.error_message_stripe_tax_not_active": "Der Kauf ist fehlgeschlagen, da Stripe Tax nicht aktiviert ist. In der Produktion funktionieren K\xE4ufe ohne angewendete Steuern.",
    "error_page.error_only_in_sandbox": "Diese Meldung wird nur in der Sandbox angezeigt.",
    "error_page.error_message_stripe_missing_required_permission": "Der Kauf ist fehlgeschlagen, da der Stripe-App eine erforderliche Berechtigung fehlt. In der Produktion funktionieren K\xE4ufe ohne angewendete Steuern.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax ist nicht aktiv",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ung\xFCltige Steuerursprungsadresse",
    "apple_pay.free_trial": "Kostenlose Testversion"
  };
  var uc = {
    "periods.week": "{{amount}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
    "periods.month": "{{amount}} \u03BC\u03AE\u03BD\u03B1\u03C2",
    "periods.year": "{{amount}} \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",
    "periods.day": "{{amount}} \u03B7\u03BC\u03AD\u03C1\u03B1",
    "periods.weekShort": "{{amount}} \u03B5\u03B2\u03B4.",
    "periods.monthShort": "{{amount}} \u03BC\u03AE\u03BD.",
    "periods.yearShort": "{{amount}} \u03AD\u03C4.",
    "periods.dayShort": "{{amount}} \u03B7\u03BC.",
    "periods.lifetime": "\u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03B6\u03C9\u03AE\u03C2",
    "periods.weekPlural": "{{amount}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2",
    "periods.monthPlural": "{{amount}} \u03BC\u03AE\u03BD\u03B5\u03C2",
    "periods.yearPlural": "{{amount}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1",
    "periods.dayPlural": "{{amount}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",
    "periods.weekFrequency": "\u03B5\u03B2\u03B4\u03BF\u03BC\u03B1\u03B4\u03B9\u03B1\u03AF\u03B1",
    "periods.monthFrequency": "\u03BC\u03B7\u03BD\u03B9\u03B1\u03AF\u03B1",
    "periods.yearFrequency": "\u03B5\u03C4\u03AE\u03C3\u03B9\u03B1",
    "periods.dayFrequency": "\u03BA\u03B1\u03B8\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AC",
    "periods.perWeekFrequency": "\u03B1\u03BD\u03AC \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
    "periods.perMonthFrequency": "\u03B1\u03BD\u03AC \u03BC\u03AE\u03BD\u03B1",
    "periods.perYearFrequency": "\u03B1\u03BD\u03AC \u03AD\u03C4\u03BF\u03C2",
    "periods.perDayFrequency": "\u03B1\u03BD\u03AC \u03B7\u03BC\u03AD\u03C1\u03B1",
    "periods.unknownFrequency": "\u03AC\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF",
    "periods.weekFrequencyPlural": "\u03BA\u03AC\u03B8\u03B5 {{amount}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2",
    "periods.monthFrequencyPlural": "\u03BA\u03AC\u03B8\u03B5 {{amount}} \u03BC\u03AE\u03BD\u03B5\u03C2",
    "periods.yearFrequencyPlural": "\u03BA\u03AC\u03B8\u03B5 {{amount}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1",
    "periods.dayFrequencyPlural": "\u03BA\u03AC\u03B8\u03B5 {{amount}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",
    "product_info.subscribe_to": "\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5 \u03C3\u03C4\u03BF",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "\u0394\u03C9\u03C1\u03B5\u03AC\u03BD \u03B3\u03B9\u03B1 {{trialDuration}}",
    "product_info.price_after_free_trial": "\u039C\u03B5\u03C4\u03AC \u03C4\u03B7 \u03BB\u03AE\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE\u03C2, \u03C3\u03C4\u03B9\u03C2 {{renewalDate}}",
    "product_info.total_due_today": "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03C0\u03BB\u03B7\u03C1\u03C9\u03C4\u03AD\u03BF \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1",
    "product_info.renewal_frequency": "\u0391\u03BD\u03B1\u03BD\u03B5\u03CE\u03BD\u03B5\u03C4\u03B1\u03B9 {{frequency}}",
    "product_info.continues_until_cancelled": "\u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03BC\u03AD\u03C7\u03C1\u03B9 \u03C4\u03B7\u03BD \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
    "product_info.cancel_anytime": "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03B1\u03BD\u03AC \u03C0\u03AC\u03C3\u03B1 \u03C3\u03C4\u03B9\u03B3\u03BC\u03AE",
    "payment_entry_page.payment_step_title": "\u0391\u03C3\u03C6\u03B1\u03BB\u03AE\u03C2 \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD RevenueCat",
    "payment_entry_page.terms_info": "\u039C\u03B5 \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03BF\u03C7\u03AE \u03C4\u03C9\u03BD \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD \u03C4\u03B7\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2 \u03C3\u03B1\u03C2, \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD {{appName}} \u03BD\u03B1 \u03C7\u03C1\u03B5\u03CE\u03C3\u03B5\u03B9 \u03C4\u03B7\u03BD \u03BA\u03AC\u03C1\u03C4\u03B1 \u03C3\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03BC\u03B5\u03BB\u03BB\u03BF\u03BD\u03C4\u03B9\u03BA\u03AD\u03C2 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AD\u03C2 \u03C3\u03CD\u03BC\u03C6\u03C9\u03BD\u03B1 \u03BC\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03CC\u03C1\u03BF\u03C5\u03C2 \u03C4\u03B7\u03C2.",
    "payment_entry_page.button_pay": "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03C4\u03CE\u03C1\u03B1",
    "payment_entry_page.button_start_trial": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE\u03C2",
    "success_page.purchase_successful": "\u0397 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5",
    "success_page.button_close": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1",
    "error_page.if_error_persists": "\u0395\u03AC\u03BD \u03C4\u03BF \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03B5\u03B9, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 ",
    "error_page.error_title_already_subscribed": "\u0388\u03C7\u03B5\u03C4\u03B5 \u03AE\u03B4\u03B7 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF \u03C3\u03C4\u03BF {{productTitle}}",
    "error_page.error_title_already_purchased": "\u0388\u03C7\u03B5\u03C4\u03B5 \u03AE\u03B4\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C3\u03B5\u03B9 \u03C4\u03BF {{productTitle}}",
    "error_page.error_title_other_errors": "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC",
    "error_page.error_message_already_subscribed": "\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD.",
    "error_page.error_message_already_purchased": "\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C3\u03B5\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03C0\u03C1\u03BF\u03CA\u03CC\u03BD.",
    "error_page.error_message_missing_email_error": "\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 email \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2.",
    "error_page.error_message_network_error": "\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5. \u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03AE \u03C3\u03B1\u03C2 \u03C3\u03C4\u03BF \u03B4\u03B9\u03B1\u03B4\u03AF\u03BA\u03C4\u03C5\u03BF.",
    "error_page.error_message_error_charging_payment": "\u0397 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5.",
    "error_page.error_message_error_setting_up_purchase": "\u0397 \u03B1\u03B3\u03BF\u03C1\u03AC \u03B4\u03B5\u03BD \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B5 \u03BB\u03CC\u03B3\u03C9 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1\u03C4\u03BF\u03C2 (\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1\u03C4\u03BF\u03C2: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03AD\u03C3\u03B1\u03BC\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03C7\u03C1\u03AD\u03C9\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2. \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B5\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03C4\u03BF\u03BD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03B7 \u03C7\u03CE\u03C1\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B2\u03B5\u03B2\u03B1\u03B9\u03C9\u03B8\u03B5\u03AF\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C9\u03C3\u03C4\u03AC.",
    "error_page.error_message_unknown_error": "\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03AD\u03BD\u03B1 \u03AC\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 (\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1\u03C4\u03BF\u03C2: {{errorCode}}).",
    "error_page.button_try_again": "\u03A0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03AE\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u03AD\u03BA\u03C0\u03C4\u03C9\u03C3\u03B7",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "payment_entry_page.trial_info": "\u039C\u03B5\u03C4\u03AC \u03C4\u03B7 \u03BB\u03AE\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B4\u03BF\u03BA\u03B9\u03BC\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE\u03C2 \u03C0\u03B5\u03C1\u03B9\u03CC\u03B4\u03BF\u03C5, \u03B8\u03B1 \u03C7\u03C1\u03B5\u03C9\u03B8\u03B5\u03AF\u03C4\u03B5 {{price}} {{perFrequency}} \u03BE\u03B5\u03BA\u03B9\u03BD\u03CE\u03BD\u03C4\u03B1\u03C2 \u03B1\u03C0\u03CC {{renewalDate}}. \u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03BA\u03C5\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03B1\u03BD\u03AC \u03C0\u03AC\u03C3\u03B1 \u03C3\u03C4\u03B9\u03B3\u03BC\u03AE \u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03CC.",
    "navbar_header.details": "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2",
    "navbar_header.back_button": "\u03A0\u03AF\u03C3\u03C9",
    "pricing_dropdown.show_details": "\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03B5\u03C1\u03B5\u03B9\u03CE\u03BD",
    "pricing_dropdown.hide_details": "\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03B5\u03C1\u03B5\u03B9\u03CE\u03BD",
    "pricing_table.tax": "\u03A6\u03CC\u03C1\u03BF\u03C2",
    "pricing_table.trial_ends": "\u039C\u03B5\u03C4\u03AC \u03C4\u03B7 \u03BB\u03AE\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B4\u03BF\u03BA\u03B9\u03BC\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE\u03C2 \u03C0\u03B5\u03C1\u03B9\u03CC\u03B4\u03BF\u03C5, \u03C3\u03C4\u03B9\u03C2 {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03C0\u03BB\u03B7\u03C1\u03C9\u03C4\u03AD\u03BF \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1",
    "pricing_table.total_excluding_tax": "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03C7\u03C9\u03C1\u03AF\u03C2 \u03C6\u03CC\u03C1\u03BF",
    "pricing_table.enter_billing_address_to_calculate": "\u0395\u03B9\u03C3\u03B1\u03B3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03C7\u03C1\u03AD\u03C9\u03C3\u03B7\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03B5\u03AF",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0395\u03B9\u03C3\u03B1\u03B3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C0\u03BF\u03BB\u03B9\u03C4\u03B5\u03AF\u03B1 \u03AE \u03C4\u03BF\u03BD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03B5\u03AF",
    "pricing_table.enter_postal_code_to_calculate": "\u0395\u03B9\u03C3\u03B1\u03B3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03B5\u03AF",
    "error_page.error_message_invalid_email_error": "\u0397 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email {{email}} \u03B4\u03B5\u03BD \u03BC\u03C0\u03CC\u03C1\u03B5\u03C3\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03C5\u03C4\u03B5\u03AF. \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B4\u03CE\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email.",
    "payment_entry_page.button_payment_method": "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE {{formattedPrice}} \u03BC\u03B5 {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE {{formattedPrice}}",
    "price_update.title": "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B9\u03BC\u03AE\u03C2",
    "price_update.base_message": "\u0397 \u03C3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AE \u03C4\u03B9\u03BC\u03AE \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03C6\u03CC\u03C1\u03BF \u03B2\u03AC\u03C3\u03B5\u03B9 \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2 \u03C7\u03C1\u03AD\u03C9\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2. \u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03BA\u03B1\u03B9 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC. \u0397 \u03BA\u03AC\u03C1\u03C4\u03B1 \u03C3\u03B1\u03C2 \u03B8\u03B1 \u03C7\u03C1\u03B5\u03C9\u03B8\u03B5\u03AF \u03BC\u03CC\u03BD\u03BF \u03BC\u03AF\u03B1 \u03C6\u03BF\u03C1\u03AC.",
    "price_update.trial_message": "\u0397 \u03C4\u03B9\u03BC\u03AE \u03C4\u03B7\u03C2 \u03C3\u03C5\u03BD\u03B4\u03C1\u03BF\u03BC\u03AE\u03C2 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03BB\u03AC\u03B2\u03B5\u03B9 \u03C4\u03BF\u03C5\u03C2 \u03C6\u03CC\u03C1\u03BF\u03C5\u03C2 \u03B2\u03AC\u03C3\u03B5\u03B9 \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2 \u03C7\u03C1\u03AD\u03C9\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2. \u0397 \u03B4\u03C9\u03C1\u03B5\u03AC\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE \u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF\u03C2 \u03B5\u03BE\u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03B5\u03AF \u03BD\u03B1 \u03B9\u03C3\u03C7\u03CD\u03B5\u03B9. \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B5\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03BA\u03B1\u03B9 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC.",
    "payment_entry_page.express_checkout_divider": "\u0389 \u03A0\u039B\u0397\u03A1\u03A9\u03A3\u03A4\u0395 \u039C\u0395 \u039A\u0391\u03A1\u03A4\u0391",
    "error_page.trouble_accessing": "\u0395\u03AC\u03BD \u03B1\u03BD\u03C4\u03B9\u03BC\u03B5\u03C4\u03C9\u03C0\u03AF\u03B6\u03B5\u03C4\u03B5 \u03C0\u03C1\u03BF\u03B2\u03BB\u03AE\u03BC\u03B1\u03C4\u03B1 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2 \u03C3\u03C4\u03B7\u03BD \u03B1\u03B3\u03BF\u03C1\u03AC \u03C3\u03B1\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7 \u03C3\u03C4\u03BF ",
    "error_page.close_button_title": "\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u039B\u03B5\u03AF\u03C0\u03B5\u03B9 \u03AC\u03B4\u03B5\u03B9\u03B1 Stripe",
    "error_page.button_close": "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u0397 \u03B1\u03B3\u03BF\u03C1\u03AC \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03B5\u03C0\u03B5\u03B9\u03B4\u03AE \u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03C0\u03C1\u03BF\u03AD\u03BB\u03B5\u03C5\u03C3\u03B7\u03C2 \u03C6\u03CC\u03C1\u03BF\u03C5 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7. \u03A3\u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE, \u03BF\u03B9 \u03B1\u03B3\u03BF\u03C1\u03AD\u03C2 \u03B8\u03B1 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD\u03BD \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03BF\u03B9.",
    "error_page.error_message_stripe_tax_not_active": "\u0397 \u03B1\u03B3\u03BF\u03C1\u03AC \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03B5\u03C0\u03B5\u03B9\u03B4\u03AE \u03C4\u03BF Stripe Tax \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03BF. \u03A3\u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE, \u03BF\u03B9 \u03B1\u03B3\u03BF\u03C1\u03AD\u03C2 \u03B8\u03B1 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD\u03BD \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03BF\u03B9.",
    "error_page.error_only_in_sandbox": "\u0391\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03BC\u03CC\u03BD\u03BF \u03C3\u03C4\u03BF sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "\u0397 \u03B1\u03B3\u03BF\u03C1\u03AC \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03B5\u03C0\u03B5\u03B9\u03B4\u03AE \u03B7 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE Stripe \u03B4\u03B5\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03B5\u03B9 \u03C4\u03B7\u03BD \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7 \u03AC\u03B4\u03B5\u03B9\u03B1. \u03A3\u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE, \u03BF\u03B9 \u03B1\u03B3\u03BF\u03C1\u03AD\u03C2 \u03B8\u03B1 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD\u03BD \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03BF\u03B9.",
    "error_page.error_title_stripe_tax_not_active": "\u03A4\u03BF Stripe Tax \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BD\u03B5\u03C1\u03B3\u03CC",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03C0\u03C1\u03BF\u03AD\u03BB\u03B5\u03C5\u03C3\u03B7\u03C2 \u03C6\u03CC\u03C1\u03BF\u03C5",
    "apple_pay.free_trial": "\u0394\u03C9\u03C1\u03B5\u03AC\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE"
  };
  var pc = {
    "periods.week": "{{amount}} \u05E9\u05D1\u05D5\u05E2",
    "periods.month": "{{amount}} \u05D7\u05D5\u05D3\u05E9",
    "periods.year": "{{amount}} \u05E9\u05E0\u05D4",
    "periods.day": "{{amount}} \u05D9\u05D5\u05DD",
    "periods.weekShort": "{{amount}}wk",
    "periods.monthShort": "{{amount}}mo",
    "periods.yearShort": "{{amount}}yr",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "\u05DC\u05DE\u05E9\u05DA \u05DB\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD",
    "periods.weekPlural": "{{amount}} \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
    "periods.monthPlural": "{{amount}} \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD",
    "periods.yearPlural": "{{amount}} \u05E9\u05E0\u05D9\u05DD",
    "periods.dayPlural": "{{amount}} \u05D9\u05DE\u05D9\u05DD",
    "periods.weekFrequency": "\u05E9\u05D1\u05D5\u05E2\u05D9",
    "periods.monthFrequency": "\u05D7\u05D5\u05D3\u05E9\u05D9",
    "periods.yearFrequency": "\u05E9\u05E0\u05EA\u05D9",
    "periods.dayFrequency": "\u05D9\u05D5\u05DE\u05D9",
    "periods.perWeekFrequency": "\u05DC\u05E9\u05D1\u05D5\u05E2",
    "periods.perMonthFrequency": "\u05DC\u05D7\u05D5\u05D3\u05E9",
    "periods.perYearFrequency": "\u05DC\u05E9\u05E0\u05D4",
    "periods.perDayFrequency": "\u05DC\u05D9\u05D5\u05DD",
    "periods.unknownFrequency": "\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
    "periods.weekFrequencyPlural": "\u05DB\u05DC {{amount}} \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
    "periods.monthFrequencyPlural": "\u05DB\u05DC {{amount}} \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD",
    "periods.yearFrequencyPlural": "\u05DB\u05DC {{amount}} \u05E9\u05E0\u05D9\u05DD",
    "periods.dayFrequencyPlural": "\u05DB\u05DC {{amount}} \u05D9\u05DE\u05D9\u05DD",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD",
    "product_info.price_after_free_trial": "\u05DC\u05D0\u05D7\u05E8 \u05E1\u05D9\u05D5\u05DD \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF, \u05D1-{{renewalDate}}",
    "product_info.renewal_frequency": "\u05DE\u05EA\u05D7\u05D3\u05E9 {{frequency}}",
    "product_info.continues_until_cancelled": "\u05E0\u05DE\u05E9\u05DA \u05E2\u05D3 \u05D1\u05D9\u05D8\u05D5\u05DC",
    "product_info.cancel_anytime": "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D8\u05DC \u05D1\u05DB\u05DC \u05E2\u05EA",
    "payment_entry_page.payment_step_title": "\u05E7\u05D5\u05E4\u05D4 \u05DE\u05D0\u05D5\u05D1\u05D8\u05D7\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA RevenueCat",
    "payment_entry_page.terms_info": "\u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05EA\u05DF \u05E4\u05E8\u05D8\u05D9 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1 \u05E9\u05DC\u05DA \u05D0\u05EA\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC-{{appName}} \u05DC\u05D7\u05D9\u05D9\u05D1 \u05D0\u05EA \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1 \u05E9\u05DC\u05DA \u05E2\u05D1\u05D5\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD \u05E9\u05DC\u05D4\u05DD.",
    "payment_entry_page.button_pay": "\u05E9\u05DC\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5",
    "payment_entry_page.button_start_trial": "\u05D4\u05EA\u05D7\u05DC \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF",
    "success_page.purchase_successful": "\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05D5\u05E9\u05DC\u05DD",
    "success_page.button_close": "\u05D4\u05DE\u05E9\u05DA",
    "error_page.if_error_persists": "\u05D0\u05DD \u05D4\u05E9\u05D2\u05D9\u05D0\u05D4 \u05E0\u05DE\u05E9\u05DB\u05EA, \u05D0\u05E0\u05D0 \u05E4\u05E0\u05D4 \u05D0\u05DC ",
    "error_page.error_title_already_subscribed": "\u05DB\u05D1\u05E8 \u05E0\u05E8\u05E9\u05DE\u05EA \u05DB\u05DE\u05E0\u05D5\u05D9 \u05DC-{{productTitle}}",
    "error_page.error_title_already_purchased": "\u05DB\u05D1\u05E8 \u05E8\u05DB\u05E9\u05EA \u05D0\u05EA {{productTitle}}",
    "error_page.error_title_other_errors": "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9",
    "error_page.error_message_already_subscribed": "\u05D0\u05D9\u05E0\u05DA \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DB\u05DE\u05E0\u05D5\u05D9 \u05DC\u05DE\u05D5\u05E6\u05E8 \u05D6\u05D4 \u05E9\u05D5\u05D1.",
    "error_page.error_message_already_purchased": "\u05D0\u05D9\u05E0\u05DA \u05D9\u05DB\u05D5\u05DC \u05DC\u05E8\u05DB\u05D5\u05E9 \u05DE\u05D5\u05E6\u05E8 \u05D6\u05D4 \u05E9\u05D5\u05D1.",
    "error_page.error_message_missing_email_error": '\u05D3\u05D5\u05D0"\u05DC \u05E0\u05D3\u05E8\u05E9 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4.',
    "error_page.error_message_network_error": "\u05E9\u05D2\u05D9\u05D0\u05EA \u05E8\u05E9\u05EA. \u05D0\u05E0\u05D0 \u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05E9\u05DC\u05DA.",
    "error_page.error_message_error_charging_payment": "\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E0\u05DB\u05E9\u05DC.",
    "error_page.error_message_error_setting_up_purchase": "\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05DC\u05D0 \u05D4\u05D5\u05E4\u05E2\u05DC\u05D4 \u05E2\u05E7\u05D1 \u05E9\u05D2\u05D9\u05D0\u05D4 (\u05E7\u05D5\u05D3 \u05E9\u05D2\u05D9\u05D0\u05D4: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05D0\u05DE\u05EA \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D7\u05D9\u05D5\u05D1 \u05E9\u05DC\u05DA. \u05D0\u05E0\u05D0 \u05D1\u05D3\u05D5\u05E7 \u05E9\u05D5\u05D1 \u05D0\u05EA \u05D4\u05DE\u05D9\u05E7\u05D5\u05D3 \u05D5\u05D4\u05DE\u05D3\u05D9\u05E0\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DD \u05E0\u05DB\u05D5\u05E0\u05D9\u05DD.",
    "error_page.error_message_unknown_error": "\u05D0\u05D9\u05E8\u05E2\u05D4 \u05E9\u05D2\u05D9\u05D0\u05D4 \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2\u05D4 (\u05E7\u05D5\u05D3 \u05E9\u05D2\u05D9\u05D0\u05D4: {{errorCode}}).",
    "error_page.button_try_again": "\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u05D4\u05E0\u05D7\u05D4",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": '\u05E1\u05D4"\u05DB \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05D9\u05D5\u05DD',
    "product_info.subscribe_to": "\u05D4\u05D9\u05E8\u05E9\u05DD \u05DB\u05DE\u05E0\u05D5\u05D9 \u05DC-",
    "payment_entry_page.trial_info": "\u05DC\u05D0\u05D7\u05E8 \u05E1\u05D9\u05D5\u05DD \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC\u05DA, \u05EA\u05D7\u05D5\u05D9\u05D1 \u05D1\u05E1\u05DA {{price}} {{perFrequency}} \u05D4\u05D7\u05DC \u05DE-{{renewalDate}}. \u05EA\u05DE\u05D9\u05D3 \u05EA\u05D5\u05DB\u05DC \u05DC\u05D1\u05D8\u05DC \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF.",
    "navbar_header.details": "\u05E4\u05E8\u05D8\u05D9\u05DD",
    "navbar_header.back_button": "\u05D7\u05D6\u05E8\u05D4",
    "pricing_dropdown.show_details": "\u05D4\u05E6\u05D2 \u05E4\u05E8\u05D8\u05D9\u05DD",
    "pricing_dropdown.hide_details": "\u05D4\u05E1\u05EA\u05E8 \u05E4\u05E8\u05D8\u05D9\u05DD",
    "pricing_table.tax": "\u05DE\u05E1",
    "pricing_table.trial_ends": "\u05DC\u05D0\u05D7\u05E8 \u05E1\u05D9\u05D5\u05DD \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF, \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u05E1\u05DA \u05D4\u05DB\u05DC \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05D9\u05D5\u05DD",
    "pricing_table.total_excluding_tax": "\u05E1\u05DA \u05D4\u05DB\u05DC \u05DC\u05D0 \u05DB\u05D5\u05DC\u05DC \u05DE\u05E1",
    "pricing_table.enter_billing_address_to_calculate": "\u05D4\u05D6\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D7\u05D9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D7\u05E9\u05D1",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u05D4\u05D6\u05DF \u05DE\u05D3\u05D9\u05E0\u05D4 \u05D0\u05D5 \u05DE\u05D9\u05E7\u05D5\u05D3 \u05DC\u05D7\u05D9\u05E9\u05D5\u05D1",
    "pricing_table.enter_postal_code_to_calculate": "\u05D4\u05D6\u05DF \u05DE\u05D9\u05E7\u05D5\u05D3 \u05DC\u05D7\u05D9\u05E9\u05D5\u05D1",
    "error_page.error_message_invalid_email_error": "\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D0\u05DE\u05EA \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC {{email}}. \u05D0\u05E0\u05D0 \u05E1\u05E4\u05E7 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D7\u05D5\u05E7\u05D9\u05EA.",
    "payment_entry_page.button_payment_method": "\u05E9\u05DC\u05DD {{formattedPrice}} \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u05E9\u05DC\u05DD {{formattedPrice}}",
    "price_update.title": "\u05E2\u05D3\u05DB\u05D5\u05DF \u05DE\u05D7\u05D9\u05E8",
    "price_update.base_message": "\u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DB\u05D5\u05DC\u05DC \u05E2\u05D5\u05D3\u05DB\u05DF \u05E2\u05DD \u05DE\u05E1 \u05D1\u05D4\u05EA\u05D1\u05E1\u05E1 \u05E2\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D7\u05D9\u05D5\u05D1 \u05E9\u05DC\u05DA. \u05D0\u05E0\u05D0 \u05D1\u05D3\u05D5\u05E7 \u05E9\u05D5\u05D1 \u05D5\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1. \u05D4\u05D7\u05D9\u05D5\u05D1 \u05D9\u05EA\u05D1\u05E6\u05E2 \u05E8\u05E7 \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA.",
    "price_update.trial_message": "\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DE\u05E0\u05D5\u05D9 \u05E2\u05D5\u05D3\u05DB\u05DF \u05DB\u05D3\u05D9 \u05DC\u05DB\u05DC\u05D5\u05DC \u05DE\u05D9\u05E1\u05D9\u05DD \u05D1\u05D4\u05EA\u05D1\u05E1\u05E1 \u05E2\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D7\u05D9\u05D5\u05D1 \u05E9\u05DC\u05DA. \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D4\u05D7\u05D9\u05E0\u05DE\u05D9\u05EA \u05E2\u05D3\u05D9\u05D9\u05DF \u05EA\u05E7\u05E4\u05D4. \u05D0\u05E0\u05D0 \u05D1\u05D3\u05D5\u05E7 \u05D5\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.",
    "payment_entry_page.express_checkout_divider": "\u05D0\u05D5 \u05E9\u05DC\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DB\u05E8\u05D8\u05D9\u05E1",
    "error_page.trouble_accessing": "\u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05EA\u05E7\u05E9\u05D4 \u05DC\u05D2\u05E9\u05EA \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA, \u05E4\u05E0\u05D4 \u05DC\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA ",
    "error_page.close_button_title": "\u05E2\u05D1\u05D5\u05E8 \u05D0\u05DC {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u05D7\u05E1\u05E8\u05D4 \u05D4\u05E8\u05E9\u05D0\u05D4 \u05E9\u05DC Stripe",
    "error_page.button_close": "\u05E1\u05D2\u05D5\u05E8",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E7\u05D5\u05E8 \u05D4\u05DE\u05E1 \u05D0\u05D9\u05E0\u05D4 \u05D7\u05D5\u05E7\u05D9\u05EA. \u05D1\u05D9\u05D9\u05E6\u05D5\u05E8, \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D9\u05E2\u05D1\u05D3\u05D5 \u05DC\u05DC\u05D0 \u05DE\u05E1\u05D9\u05DD.",
    "error_page.error_message_stripe_tax_not_active": "\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DE\u05E1 Stripe \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E4\u05E2\u05DC. \u05D1\u05D9\u05D9\u05E6\u05D5\u05E8, \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D9\u05E2\u05D1\u05D3\u05D5 \u05DC\u05DC\u05D0 \u05DE\u05E1\u05D9\u05DD.",
    "error_page.error_only_in_sandbox": "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D6\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05E8\u05E7 \u05D1\u05D0\u05E8\u05D2\u05D6 \u05D7\u05D5\u05DC.",
    "error_page.error_message_stripe_missing_required_permission": "\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA Stripe \u05D7\u05E1\u05E8\u05D4 \u05D4\u05E8\u05E9\u05D0\u05D4 \u05E0\u05D3\u05E8\u05E9\u05EA. \u05D1\u05D9\u05D9\u05E6\u05D5\u05E8, \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D9\u05E2\u05D1\u05D3\u05D5 \u05DC\u05DC\u05D0 \u05DE\u05E1\u05D9\u05DD.",
    "error_page.error_title_stripe_tax_not_active": "\u05DE\u05E1 Stripe \u05DC\u05D0 \u05E4\u05E2\u05D9\u05DC",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E7\u05D5\u05E8 \u05DE\u05E1 \u05DC\u05D0 \u05D7\u05D5\u05E7\u05D9\u05EA",
    "apple_pay.free_trial": "\u05EA\u05E7\u05D5\u05E4\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD"
  };
  var _c = {
    "periods.week": "{{amount}} \u0938\u092A\u094D\u0924\u093E\u0939",
    "periods.month": "{{amount}} \u092E\u0939\u0940\u0928\u093E",
    "periods.year": "{{amount}} \u0935\u0930\u094D\u0937",
    "periods.day": "{{amount}} \u0926\u093F\u0928",
    "periods.weekShort": "{{amount}}\u0938\u092A\u094D\u0924\u093E\u0939",
    "periods.monthShort": "{{amount}}\u092E\u0939\u0940\u0928\u093E",
    "periods.yearShort": "{{amount}}\u0935\u0930\u094D\u0937",
    "periods.dayShort": "{{amount}}\u0926\u093F\u0928",
    "periods.lifetime": "\u0932\u093E\u0907\u095E\u091F\u093E\u0907\u092E",
    "periods.weekPlural": "{{amount}} \u0938\u092A\u094D\u0924\u093E\u0939",
    "periods.monthPlural": "{{amount}} \u092E\u0939\u0940\u0928\u0947",
    "periods.yearPlural": "{{amount}} \u0935\u0930\u094D\u0937",
    "periods.dayPlural": "{{amount}} \u0926\u093F\u0928",
    "periods.weekFrequency": "\u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915",
    "periods.monthFrequency": "\u092E\u093E\u0938\u093F\u0915",
    "periods.yearFrequency": "\u0935\u093E\u0930\u094D\u0937\u093F\u0915",
    "periods.dayFrequency": "\u0926\u0948\u0928\u093F\u0915",
    "periods.perWeekFrequency": "\u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939",
    "periods.perMonthFrequency": "\u092A\u094D\u0930\u0924\u093F \u092E\u093E\u0939",
    "periods.perYearFrequency": "\u092A\u094D\u0930\u0924\u093F \u0935\u0930\u094D\u0937",
    "periods.perDayFrequency": "\u092A\u094D\u0930\u0924\u093F \u0926\u093F\u0928",
    "periods.unknownFrequency": "\u0905\u091C\u094D\u091E\u093E\u0924",
    "periods.weekFrequencyPlural": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 {{amount}} \u0938\u092A\u094D\u0924\u093E\u0939",
    "periods.monthFrequencyPlural": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 {{amount}} \u092E\u0939\u0940\u0928\u0947",
    "periods.yearFrequencyPlural": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 {{amount}} \u0935\u0930\u094D\u0937",
    "periods.dayFrequencyPlural": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 {{amount}} \u0926\u093F\u0928",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u092A\u0930\u0940\u0915\u094D\u0937\u0923",
    "product_info.price_after_free_trial": "\u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926, {{renewalDate}} \u0915\u094B",
    "product_info.renewal_frequency": "{{frequency}} \u092A\u0930 \u0928\u0935\u0940\u0928\u0940\u0915\u0943\u0924 \u0939\u094B\u0924\u093E \u0939\u0948",
    "product_info.continues_until_cancelled": "\u0930\u0926\u094D\u0926 \u0939\u094B\u0928\u0947 \u0924\u0915 \u091C\u093E\u0930\u0940 \u0930\u0939\u0924\u093E \u0939\u0948",
    "product_info.cancel_anytime": "\u0915\u093F\u0938\u0940 \u092D\u0940 \u0938\u092E\u092F \u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",
    "payment_entry_page.payment_step_title": "RevenueCat \u0926\u094D\u0935\u093E\u0930\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u091A\u0947\u0915\u0906\u0909\u091F",
    "payment_entry_page.terms_info": "\u0905\u092A\u0928\u0940 \u0915\u093E\u0930\u094D\u0921 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0915\u0947 \u0906\u092A {{appName}} \u0915\u094B \u0909\u0928\u0915\u0940 \u0936\u0930\u094D\u0924\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092D\u0935\u093F\u0937\u094D\u092F \u0915\u0947 \u092D\u0941\u0917\u0924\u093E\u0928\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u092A\u0915\u0947 \u0915\u093E\u0930\u094D\u0921 \u0938\u0947 \u0936\u0941\u0932\u094D\u0915 \u0932\u0947\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964",
    "payment_entry_page.button_pay": "\u0905\u092D\u0940 \u092D\u0941\u0917\u0924\u093E\u0928 \u0915\u0930\u0947\u0902",
    "payment_entry_page.button_start_trial": "\u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0915\u0930\u0947\u0902",
    "success_page.purchase_successful": "\u092D\u0941\u0917\u0924\u093E\u0928 \u092A\u0942\u0930\u094D\u0923",
    "success_page.button_close": "\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
    "error_page.if_error_persists": "\u092F\u0926\u093F \u0924\u094D\u0930\u0941\u091F\u093F \u092C\u0928\u0940 \u0930\u0939\u0924\u0940 \u0939\u0948, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902 ",
    "error_page.error_title_already_subscribed": "\u0906\u092A\u0928\u0947 \u092A\u0939\u0932\u0947 \u0939\u0940 {{productTitle}} \u0915\u0940 \u0938\u0926\u0938\u094D\u092F\u0924\u093E \u0932\u0947 \u0932\u0940 \u0939\u0948",
    "error_page.error_title_already_purchased": "\u0906\u092A\u0928\u0947 \u092A\u0939\u0932\u0947 \u0939\u0940 {{productTitle}} \u0916\u0930\u0940\u0926 \u0932\u093F\u092F\u093E \u0939\u0948",
    "error_page.error_title_other_errors": "\u0915\u0941\u091B \u0917\u0932\u0924 \u0939\u094B \u0917\u092F\u093E",
    "error_page.error_message_already_subscribed": "\u0906\u092A \u0907\u0938 \u0909\u0924\u094D\u092A\u093E\u0926 \u0915\u0940 \u0938\u0926\u0938\u094D\u092F\u0924\u093E \u092B\u093F\u0930 \u0938\u0947 \u0928\u0939\u0940\u0902 \u0932\u0947 \u0938\u0915\u0924\u0947.",
    "error_page.error_message_already_purchased": "\u0906\u092A \u0907\u0938 \u0909\u0924\u094D\u092A\u093E\u0926 \u0915\u094B \u092B\u093F\u0930 \u0938\u0947 \u0928\u0939\u0940\u0902 \u0916\u0930\u0940\u0926 \u0938\u0915\u0924\u0947.",
    "error_page.error_message_missing_email_error": "\u0916\u0930\u0940\u0926 \u0915\u094B \u092A\u0942\u0930\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0908\u092E\u0947\u0932 \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964",
    "error_page.error_message_network_error": "\u0928\u0947\u091F\u0935\u0930\u094D\u0915 \u0924\u094D\u0930\u0941\u091F\u093F\u0964 \u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0907\u0902\u091F\u0930\u0928\u0947\u091F \u0915\u0928\u0947\u0915\u094D\u0936\u0928 \u091C\u093E\u0902\u091A\u0947\u0902\u0964",
    "error_page.error_message_error_charging_payment": "\u092D\u0941\u0917\u0924\u093E\u0928 \u0935\u093F\u092B\u0932\u0964",
    "error_page.error_message_error_setting_up_purchase": "\u0915\u093F\u0938\u0940 \u0924\u094D\u0930\u0941\u091F\u093F \u0915\u0947 \u0915\u093E\u0930\u0923 \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0936\u0941\u0930\u0942 \u0928\u0939\u0940\u0902 \u0939\u0941\u0908 (\u0924\u094D\u0930\u0941\u091F\u093F \u0915\u094B\u0921: {{errorCode}})\u0964",
    "error_page.error_message_invalid_tax_location": "\u0939\u092E \u0906\u092A\u0915\u0947 \u092C\u093F\u0932\u093F\u0902\u0917 \u092A\u0924\u0947 \u0915\u094B \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0928\u0939\u0940\u0902 \u0915\u0930 \u0938\u0915\u0947\u0964 \u0915\u0943\u092A\u092F\u093E \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0947\u0902 \u0915\u093F \u092A\u093F\u0928 \u0915\u094B\u0921 \u0914\u0930 \u0926\u0947\u0936 \u0938\u0939\u0940 \u0939\u0948\u0902\u0964",
    "error_page.error_message_unknown_error": "\u090F\u0915 \u0905\u091C\u094D\u091E\u093E\u0924 \u0924\u094D\u0930\u0941\u091F\u093F \u0939\u0941\u0908 (\u0924\u094D\u0930\u0941\u091F\u093F \u0915\u094B\u0921: {{errorCode}})\u0964",
    "error_page.button_try_again": "\u092B\u093F\u0930 \u0938\u0947 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u0947\u0902",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u091B\u0942\u091F",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u0906\u091C \u0926\u0947\u092F \u0915\u0941\u0932 \u0930\u093E\u0936\u093F",
    "product_info.subscribe_to": "\u0938\u0926\u0938\u094D\u092F\u0924\u093E \u0932\u0947\u0902",
    "payment_entry_page.trial_info": "\u0906\u092A\u0915\u0940 \u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u0905\u0935\u0927\u093F \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926, \u0906\u092A\u0938\u0947 {{renewalDate}} \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094B\u0915\u0930 {{price}} {{perFrequency}} \u0936\u0941\u0932\u094D\u0915 \u0932\u093F\u092F\u093E \u091C\u093E\u090F\u0917\u093E. \u0906\u092A \u0924\u092C \u0938\u0947 \u092A\u0939\u0932\u0947 \u0939\u092E\u0947\u0936\u093E \u0930\u0926\u094D\u0926 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902.",
    "navbar_header.details": "\u0935\u093F\u0935\u0930\u0923",
    "navbar_header.back_button": "\u0935\u093E\u092A\u0938",
    "pricing_dropdown.show_details": "\u0935\u093F\u0935\u0930\u0923 \u0926\u093F\u0916\u093E\u090F\u0901",
    "pricing_dropdown.hide_details": "\u0935\u093F\u0935\u0930\u0923 \u091B\u093F\u092A\u093E\u090F\u0901",
    "pricing_table.tax": "\u0915\u0930",
    "pricing_table.trial_ends": "{{formattedTrialEndDate}} \u092A\u0930 \u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926",
    "pricing_table.total_due_today": "\u0906\u091C \u0926\u0947\u092F \u0915\u0941\u0932",
    "pricing_table.total_excluding_tax": "\u0915\u0930 \u0915\u094B \u091B\u094B\u0921\u093C\u0915\u0930 \u0915\u0941\u0932",
    "pricing_table.enter_billing_address_to_calculate": "\u0917\u0923\u0928\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u093F\u0932\u093F\u0902\u0917 \u092A\u0924\u093E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0917\u0923\u0928\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0930\u093E\u091C\u094D\u092F \u092F\u093E \u091C\u093C\u093F\u092A \u0915\u094B\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
    "pricing_table.enter_postal_code_to_calculate": "\u0917\u0923\u0928\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091C\u093C\u093F\u092A \u0915\u094B\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
    "error_page.error_message_invalid_email_error": "\u0908\u092E\u0947\u0932 \u092A\u0924\u093E {{email}} \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0928\u0939\u0940\u0902 \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u093E. \u0915\u0943\u092A\u092F\u093E \u090F\u0915 \u092E\u093E\u0928\u094D\u092F \u0908\u092E\u0947\u0932 \u092A\u0924\u093E \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0947\u0902.",
    "payment_entry_page.button_payment_method": "{{paymentMethod}} \u0915\u0947 \u0938\u093E\u0925 {{formattedPrice}} \u0915\u093E \u092D\u0941\u0917\u0924\u093E\u0928 \u0915\u0930\u0947\u0902",
    "payment_entry_page.button_with_price": "{{formattedPrice}} \u0915\u093E \u092D\u0941\u0917\u0924\u093E\u0928 \u0915\u0930\u0947\u0902",
    "price_update.title": "\u092E\u0942\u0932\u094D\u092F \u0905\u092A\u0921\u0947\u091F",
    "price_update.base_message": "\u0906\u092A \u0915\u0947 \u092C\u093F\u0932\u093F\u0902\u0917 \u092A\u0924\u0947 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0915\u0941\u0932 \u0915\u0940\u092E\u0924 \u0915\u0930 \u0915\u0947 \u0938\u093E\u0925 \u0905\u092A\u0921\u0947\u091F \u0915\u0940 \u0917\u0908 \u0925\u0940\u0964 \u0915\u0943\u092A\u092F\u093E \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u092B\u093F\u0930 \u0938\u0947 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964 \u0906\u092A\u0915\u0947 \u0915\u093E\u0930\u094D\u0921 \u0938\u0947 \u0915\u0947\u0935\u0932 \u090F\u0915 \u092C\u093E\u0930 \u0936\u0941\u0932\u094D\u0915 \u0932\u093F\u092F\u093E \u091C\u093E\u090F\u0917\u093E\u0964",
    "price_update.trial_message": "\u0938\u0926\u0938\u094D\u092F\u0924\u093E \u092E\u0942\u0932\u094D\u092F \u0906\u092A\u0915\u0947 \u092C\u093F\u0932\u093F\u0902\u0917 \u092A\u0924\u0947 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0915\u0930\u094B\u0902 \u0915\u094B \u0936\u093E\u092E\u093F\u0932 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0921\u0947\u091F \u0915\u093F\u092F\u093E \u0917\u092F\u093E \u0939\u0948\u0964 \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u0905\u0935\u0927\u093F \u0905\u092D\u0940 \u092D\u0940 \u0932\u093E\u0917\u0942 \u0939\u0948\u0964 \u0915\u0943\u092A\u092F\u093E \u091C\u093E\u0902\u091A\u0947\u0902 \u0914\u0930 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964",
    "payment_entry_page.express_checkout_divider": "\u092F\u093E \u0915\u093E\u0930\u094D\u0921 \u0938\u0947 \u092D\u0941\u0917\u0924\u093E\u0928 \u0915\u0930\u0947\u0902",
    "error_page.trouble_accessing": "\u092F\u0926\u093F \u0906\u092A\u0915\u094B \u0905\u092A\u0928\u0940 \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0924\u0915 \u092A\u0939\u0941\u0902\u091A\u0928\u0947 \u092E\u0947\u0902 \u092A\u0930\u0947\u0936\u093E\u0928\u0940 \u0939\u094B \u0930\u0939\u0940 \u0939\u0948, \u0924\u094B \u092A\u0930 \u0938\u092E\u0930\u094D\u0925\u0928 \u0915\u0947 \u0932\u093F\u090F \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
    "error_page.close_button_title": "{{appName}} \u092A\u0930 \u091C\u093E\u090F\u0902",
    "error_page.error_title_stripe_missing_required_permission": "\u0938\u094D\u091F\u094D\u0930\u093E\u0907\u092A \u0905\u0928\u0941\u092E\u0924\u093F \u0917\u0941\u092E \u0939\u0948",
    "error_page.button_close": "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0935\u093F\u092B\u0932 \u0930\u0939\u0940 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0915\u0930 \u0909\u0924\u094D\u092A\u0924\u094D\u0924\u093F \u092A\u0924\u093E \u0905\u092E\u093E\u0928\u094D\u092F \u0939\u0948. \u0909\u0924\u094D\u092A\u093E\u0926\u0928 \u092E\u0947\u0902, \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092C\u093F\u0928\u093E \u0915\u0930\u094B\u0902 \u0915\u0947 \u0932\u093E\u0917\u0942 \u0915\u093F\u090F \u0915\u093E\u092E \u0915\u0930\u0947\u0917\u0940.",
    "error_page.error_message_stripe_tax_not_active": "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0935\u093F\u092B\u0932 \u0930\u0939\u0940 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0938\u094D\u091F\u094D\u0930\u093E\u0907\u092A \u091F\u0948\u0915\u094D\u0938 \u0938\u0915\u094D\u0937\u092E \u0928\u0939\u0940\u0902 \u0939\u0948. \u0909\u0924\u094D\u092A\u093E\u0926\u0928 \u092E\u0947\u0902, \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092C\u093F\u0928\u093E \u0915\u0930\u094B\u0902 \u0915\u0947 \u0932\u093E\u0917\u0942 \u0915\u093F\u090F \u0915\u093E\u092E \u0915\u0930\u0947\u0917\u0940.",
    "error_page.error_only_in_sandbox": "\u092F\u0939 \u0938\u0902\u0926\u0947\u0936 \u0915\u0947\u0935\u0932 \u0938\u0948\u0902\u0921\u092C\u0949\u0915\u094D\u0938 \u092E\u0947\u0902 \u0926\u093F\u0916\u093E\u0908 \u0926\u0947\u0924\u093E \u0939\u0948.",
    "error_page.error_message_stripe_missing_required_permission": "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0935\u093F\u092B\u0932 \u0930\u0939\u0940 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0938\u094D\u091F\u094D\u0930\u093E\u0907\u092A \u0910\u092A \u092E\u0947\u0902 \u0906\u0935\u0936\u094D\u092F\u0915 \u0905\u0928\u0941\u092E\u0924\u093F \u0928\u0939\u0940\u0902 \u0939\u0948. \u0909\u0924\u094D\u092A\u093E\u0926\u0928 \u092E\u0947\u0902, \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092C\u093F\u0928\u093E \u0915\u0930\u094B\u0902 \u0915\u0947 \u0932\u093E\u0917\u0942 \u0915\u093F\u090F \u0915\u093E\u092E \u0915\u0930\u0947\u0917\u0940.",
    "error_page.error_title_stripe_tax_not_active": "\u0938\u094D\u091F\u094D\u0930\u093E\u0907\u092A \u091F\u0948\u0915\u094D\u0938 \u0938\u0915\u094D\u0930\u093F\u092F \u0928\u0939\u0940\u0902 \u0939\u0948",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u0905\u092E\u093E\u0928\u094D\u092F \u0915\u0930 \u0909\u0924\u094D\u092A\u0924\u094D\u0924\u093F \u092A\u0924\u093E",
    "apple_pay.free_trial": "\u092E\u0941\u092B\u093C\u094D\u0924 \u091F\u094D\u0930\u093E\u092F\u0932"
  };
  var gc = {
    "periods.week": "{{amount}} h\xE9t",
    "periods.month": "{{amount}} h\xF3nap",
    "periods.year": "{{amount}} \xE9v",
    "periods.day": "{{amount}} nap",
    "periods.weekShort": "{{amount}}h\xE9t",
    "periods.monthShort": "{{amount}}h\xF3",
    "periods.yearShort": "{{amount}}\xE9v",
    "periods.dayShort": "{{amount}}n",
    "periods.lifetime": "\xE9letre sz\xF3l\xF3",
    "periods.weekPlural": "{{amount}} h\xE9t",
    "periods.monthPlural": "{{amount}} h\xF3nap",
    "periods.yearPlural": "{{amount}} \xE9v",
    "periods.dayPlural": "{{amount}} nap",
    "periods.weekFrequency": "heti",
    "periods.monthFrequency": "havi",
    "periods.yearFrequency": "\xE9ves",
    "periods.dayFrequency": "napi",
    "periods.perWeekFrequency": "hetente",
    "periods.perMonthFrequency": "havonta",
    "periods.perYearFrequency": "\xE9vente",
    "periods.perDayFrequency": "naponta",
    "periods.unknownFrequency": "ismeretlen",
    "periods.weekFrequencyPlural": "minden {{amount}} h\xE9tben",
    "periods.monthFrequencyPlural": "minden {{amount}} h\xF3napban",
    "periods.yearFrequencyPlural": "minden {{amount}} \xE9vben",
    "periods.dayFrequencyPlural": "minden {{amount}} napban",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} pr\xF3baid\u0151szak",
    "product_info.price_after_free_trial": "A pr\xF3baid\u0151szak v\xE9ge ut\xE1n, {{renewalDate}}-kor",
    "product_info.renewal_frequency": "{{frequency}} gyakoris\xE1ggal meg\xFAjul",
    "product_info.continues_until_cancelled": "Folytat\xF3dik, am\xEDg le nem mondj\xE1k",
    "product_info.cancel_anytime": "B\xE1rmikor lemondhat\xF3",
    "payment_entry_page.payment_step_title": "Biztons\xE1gos fizet\xE9s a RevenueCat-en kereszt\xFCl",
    "payment_entry_page.terms_info": "A k\xE1rtyaadataid megad\xE1s\xE1val enged\xE9lyezed a {{appName}} sz\xE1m\xE1ra, hogy a felt\xE9teleiknek megfelel\u0151en a j\xF6v\u0151beni fizet\xE9sekhez terhelje a k\xE1rty\xE1dat.",
    "payment_entry_page.button_pay": "Fizet\xE9s most",
    "payment_entry_page.button_start_trial": "Pr\xF3baid\u0151szak ind\xEDt\xE1sa",
    "success_page.purchase_successful": "Fizet\xE9s sikeres",
    "success_page.button_close": "Tov\xE1bb",
    "error_page.if_error_persists": "Ha a hiba tov\xE1bbra is fenn\xE1ll, k\xE9rj\xFCk, vedd fel a kapcsolatot ",
    "error_page.error_title_already_subscribed": "M\xE1r el\u0151fizett\xE9l a(z) {{productTitle}} term\xE9kre",
    "error_page.error_title_already_purchased": "M\xE1r megv\xE1s\xE1roltad a(z) {{productTitle}} term\xE9ket",
    "error_page.error_title_other_errors": "Valami hiba t\xF6rt\xE9nt",
    "error_page.error_message_already_subscribed": "Nem fizethetsz el\u0151 \xFAjra erre a term\xE9kre.",
    "error_page.error_message_already_purchased": "Nem v\xE1s\xE1rolhatod meg \xFAjra ezt a term\xE9ket.",
    "error_page.error_message_missing_email_error": "Az email c\xEDm sz\xFCks\xE9ges a v\xE1s\xE1rl\xE1s befejez\xE9s\xE9hez.",
    "error_page.error_message_network_error": "H\xE1l\xF3zati hiba. K\xE9rj\xFCk, ellen\u0151rizd az internetkapcsolatodat.",
    "error_page.error_message_error_charging_payment": "A fizet\xE9s sikertelen volt.",
    "error_page.error_message_error_setting_up_purchase": "Hiba miatt nem indult el a v\xE1s\xE1rl\xE1s (hibak\xF3d: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nem tudtuk ellen\u0151rizni a sz\xE1ml\xE1z\xE1si c\xEDm\xE9t. K\xE9rj\xFCk, ellen\u0151rizze, hogy az ir\xE1ny\xEDt\xF3sz\xE1m \xE9s az orsz\xE1g helyes-e.",
    "error_page.error_message_unknown_error": "Ismeretlen hiba t\xF6rt\xE9nt (hibak\xF3d: {{errorCode}}).",
    "error_page.button_try_again": "\xDAjrapr\xF3b\xE1lkoz\xE1s",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% kedvezm\xE9ny",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Ma fizetend\u0151 \xF6sszesen",
    "product_info.subscribe_to": "Feliratkoz\xE1s erre:",
    "payment_entry_page.trial_info": "A pr\xF3baid\u0151szak lej\xE1rta ut\xE1n {{price}} {{perFrequency}} \xF6sszeget sz\xE1m\xEDtunk fel {{renewalDate}} napj\xE1t\xF3l kezd\u0151d\u0151en. B\xE1rmikor lemondhatja addig.",
    "navbar_header.details": "R\xE9szletek",
    "navbar_header.back_button": "Vissza",
    "pricing_dropdown.show_details": "R\xE9szletek mutat\xE1sa",
    "pricing_dropdown.hide_details": "R\xE9szletek elrejt\xE9se",
    "pricing_table.tax": "Ad\xF3",
    "pricing_table.trial_ends": "A pr\xF3baid\u0151szak v\xE9ge: {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Ma fizetend\u0151 \xF6sszeg",
    "pricing_table.total_excluding_tax": "\xD6sszesen ad\xF3 n\xE9lk\xFCl",
    "pricing_table.enter_billing_address_to_calculate": "Adja meg a sz\xE1ml\xE1z\xE1si c\xEDmet a sz\xE1m\xEDt\xE1shoz",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Adja meg az \xE1llamot vagy az ir\xE1ny\xEDt\xF3sz\xE1mot a sz\xE1m\xEDt\xE1shoz",
    "pricing_table.enter_postal_code_to_calculate": "Adja meg az ir\xE1ny\xEDt\xF3sz\xE1mot a sz\xE1m\xEDt\xE1shoz",
    "error_page.error_message_invalid_email_error": "A(z) {{email}} e-mail c\xEDmet nem siker\xFClt ellen\u0151rizni. K\xE9rj\xFCk, adj meg egy \xE9rv\xE9nyes e-mail c\xEDmet.",
    "payment_entry_page.button_payment_method": "Fizet\xE9s {{formattedPrice}} \xF6sszeggel a k\xF6vetkez\u0151vel: {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Fizet\xE9s {{formattedPrice}}",
    "price_update.title": "\xC1r friss\xEDt\xE9se",
    "price_update.base_message": "A teljes \xE1r friss\xEDtve lett az ad\xF3val a sz\xE1ml\xE1z\xE1si c\xEDmed alapj\xE1n. K\xE9rj\xFCk, tekintsd \xE1t \xE9s pr\xF3b\xE1ld \xFAjra. A k\xE1rty\xE1dat csak egyszer terhelj\xFCk meg.",
    "price_update.trial_message": "Az el\u0151fizet\xE9s \xE1ra ad\xF3kkal egy\xFCtt friss\xEDt\xE9sre ker\xFClt a sz\xE1ml\xE1z\xE1si c\xEDm\xE9nek megfelel\u0151en. Az ingyenes pr\xF3baid\u0151szak tov\xE1bbra is \xE9rv\xE9nyes. K\xE9rj\xFCk, ellen\u0151rizze \xE9s pr\xF3b\xE1lja \xFAjra.",
    "payment_entry_page.express_checkout_divider": "VAGY FIZESSEN K\xC1RTY\xC1VAL",
    "error_page.trouble_accessing": "Ha probl\xE9m\xE1i vannak a v\xE1s\xE1rl\xE1shoz val\xF3 hozz\xE1f\xE9r\xE9ssel, forduljon az \xFCgyf\xE9lszolg\xE1lathoz a k\xF6vetkez\u0151 c\xEDmen: ",
    "error_page.close_button_title": "Ugr\xE1s a(z) {{appName}} alkalmaz\xE1shoz",
    "error_page.error_title_stripe_missing_required_permission": "Hi\xE1nyz\xF3 Stripe enged\xE9ly",
    "error_page.button_close": "Bez\xE1r\xE1s",
    "error_page.error_message_stripe_invalid_tax_origin_address": "A v\xE1s\xE1rl\xE1s sikertelen volt, mert az ad\xF3kiindul\xE1si c\xEDm \xE9rv\xE9nytelen. \xC9les k\xF6rnyezetben a v\xE1s\xE1rl\xE1sok ad\xF3k alkalmaz\xE1sa n\xE9lk\xFCl fognak m\u0171k\xF6dni.",
    "error_page.error_message_stripe_tax_not_active": "A v\xE1s\xE1rl\xE1s sikertelen volt, mert a Stripe ad\xF3 nincs enged\xE9lyezve. \xC9les k\xF6rnyezetben a v\xE1s\xE1rl\xE1sok ad\xF3k alkalmaz\xE1sa n\xE9lk\xFCl fognak m\u0171k\xF6dni.",
    "error_page.error_only_in_sandbox": "Ez az \xFCzenet csak a tesztk\xF6rnyezetben jelenik meg.",
    "error_page.error_message_stripe_missing_required_permission": "A v\xE1s\xE1rl\xE1s sikertelen volt, mert a Stripe alkalmaz\xE1sb\xF3l hi\xE1nyzik egy sz\xFCks\xE9ges enged\xE9ly. \xC9les k\xF6rnyezetben a v\xE1s\xE1rl\xE1sok ad\xF3k alkalmaz\xE1sa n\xE9lk\xFCl fognak m\u0171k\xF6dni.",
    "error_page.error_title_stripe_tax_not_active": "A Stripe ad\xF3 nincs aktiv\xE1lva",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\xC9rv\xE9nytelen ad\xF3kiindul\xE1si c\xEDm",
    "apple_pay.free_trial": "Ingyenes pr\xF3baid\u0151szak"
  };
  var mc = {
    "periods.week": "{{amount}} minggu",
    "periods.month": "{{amount}} bulan",
    "periods.year": "{{amount}} tahun",
    "periods.day": "{{amount}} hari",
    "periods.weekShort": "{{amount}}mg",
    "periods.monthShort": "{{amount}}bl",
    "periods.yearShort": "{{amount}}th",
    "periods.dayShort": "{{amount}}h",
    "periods.lifetime": "seumur hidup",
    "periods.weekPlural": "{{amount}} minggu",
    "periods.monthPlural": "{{amount}} bulan",
    "periods.yearPlural": "{{amount}} tahun",
    "periods.dayPlural": "{{amount}} hari",
    "periods.weekFrequency": "mingguan",
    "periods.monthFrequency": "bulanan",
    "periods.yearFrequency": "tahunan",
    "periods.dayFrequency": "harian",
    "periods.perWeekFrequency": "per minggu",
    "periods.perMonthFrequency": "per bulan",
    "periods.perYearFrequency": "per tahun",
    "periods.perDayFrequency": "per hari",
    "periods.unknownFrequency": "tidak diketahui",
    "periods.weekFrequencyPlural": "setiap {{amount}} minggu",
    "periods.monthFrequencyPlural": "setiap {{amount}} bulan",
    "periods.yearFrequencyPlural": "setiap {{amount}} tahun",
    "periods.dayFrequencyPlural": "setiap {{amount}} hari",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} uji coba gratis",
    "product_info.price_after_free_trial": "Setelah uji coba berakhir, pada {{renewalDate}}",
    "product_info.renewal_frequency": "Diperbarui {{frequency}}",
    "product_info.continues_until_cancelled": "Berlanjut hingga dibatalkan",
    "product_info.cancel_anytime": "Batalkan kapan saja",
    "payment_entry_page.payment_step_title": "Pembayaran aman oleh RevenueCat",
    "payment_entry_page.terms_info": "Dengan memberikan informasi kartu Anda, Anda mengizinkan {{appName}} untuk menagih kartu Anda untuk pembayaran di masa mendatang sesuai dengan ketentuan mereka.",
    "payment_entry_page.button_pay": "Bayar sekarang",
    "payment_entry_page.button_start_trial": "Mulai Uji Coba",
    "success_page.purchase_successful": "Pembayaran selesai",
    "success_page.button_close": "Lanjutkan",
    "error_page.if_error_persists": "Jika kesalahan berlanjut, silakan hubungi ",
    "error_page.error_title_already_subscribed": "Anda sudah berlangganan ke {{productTitle}}",
    "error_page.error_title_already_purchased": "Anda sudah membeli {{productTitle}}",
    "error_page.error_title_other_errors": "Terjadi kesalahan",
    "error_page.error_message_already_subscribed": "Anda tidak dapat berlangganan produk ini lagi.",
    "error_page.error_message_already_purchased": "Anda tidak dapat membeli produk ini lagi.",
    "error_page.error_message_missing_email_error": "Email diperlukan untuk menyelesaikan pembelian.",
    "error_page.error_message_network_error": "Kesalahan jaringan. Periksa koneksi internet Anda.",
    "error_page.error_message_error_charging_payment": "Pembayaran gagal.",
    "error_page.error_message_error_setting_up_purchase": "Pembelian tidak dimulai karena kesalahan (kode kesalahan: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Kami tidak dapat memverifikasi alamat penagihan Anda. Harap periksa kembali kode pos dan negara untuk memastikan keduanya benar.",
    "error_page.error_message_unknown_error": "Terjadi kesalahan yang tidak diketahui (kode kesalahan: {{errorCode}}).",
    "error_page.button_try_again": "Coba lagi",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% diskon",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total yang harus dibayar hari ini",
    "product_info.subscribe_to": "Berlangganan ke",
    "payment_entry_page.trial_info": "Setelah masa percobaan Anda berakhir, Anda akan dikenakan biaya {{price}} {{perFrequency}} mulai {{renewalDate}}. Anda selalu dapat membatalkan sebelum itu.",
    "navbar_header.details": "Detail",
    "navbar_header.back_button": "Kembali",
    "pricing_dropdown.show_details": "Tampilkan detail",
    "pricing_dropdown.hide_details": "Sembunyikan detail",
    "pricing_table.tax": "Pajak",
    "pricing_table.trial_ends": "Setelah masa percobaan berakhir, pada {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total yang harus dibayar hari ini",
    "pricing_table.total_excluding_tax": "Total belum termasuk pajak",
    "pricing_table.enter_billing_address_to_calculate": "Masukkan alamat penagihan untuk menghitung",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Masukkan negara bagian atau kode pos untuk menghitung",
    "pricing_table.enter_postal_code_to_calculate": "Masukkan kode pos untuk menghitung",
    "error_page.error_message_invalid_email_error": "Alamat email {{email}} tidak dapat diverifikasi. Harap berikan alamat email yang valid.",
    "payment_entry_page.button_payment_method": "Bayar {{formattedPrice}} dengan {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Bayar {{formattedPrice}}",
    "price_update.title": "Pembaruan harga",
    "price_update.base_message": "Total harga telah diperbarui dengan pajak berdasarkan alamat penagihan Anda. Harap tinjau dan coba lagi. Kartu Anda hanya akan dikenakan biaya sekali.",
    "price_update.trial_message": "Harga langganan telah diperbarui untuk menyertakan pajak berdasarkan alamat penagihan Anda. Masa percobaan gratis masih berlaku. Silakan periksa dan coba lagi.",
    "payment_entry_page.express_checkout_divider": "ATAU BAYAR DENGAN KARTU",
    "error_page.trouble_accessing": "Jika Anda mengalami masalah dalam mengakses pembelian, hubungi dukungan di ",
    "error_page.close_button_title": "Pergi ke {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Izin Stripe tidak ada",
    "error_page.button_close": "Tutup",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Pembelian gagal karena alamat asal pajak tidak valid. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
    "error_page.error_message_stripe_tax_not_active": "Pembelian gagal karena Stripe Tax tidak diaktifkan. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
    "error_page.error_only_in_sandbox": "Pesan ini hanya muncul di sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "Pembelian gagal karena aplikasi Stripe tidak memiliki izin yang diperlukan. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax tidak aktif",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Alamat asal pajak tidak valid",
    "apple_pay.free_trial": "Uji Coba Gratis"
  };
  var fc = {
    "periods.week": "{{amount}}\u9031\u9593",
    "periods.month": "{{amount}}\u30F6\u6708",
    "periods.year": "{{amount}}\u5E74",
    "periods.day": "{{amount}}\u65E5",
    "periods.weekShort": "{{amount}}\u9031",
    "periods.monthShort": "{{amount}}\u30F6\u6708",
    "periods.yearShort": "{{amount}}\u5E74",
    "periods.dayShort": "{{amount}}\u65E5",
    "periods.lifetime": "\u751F\u6DAF",
    "periods.weekPlural": "{{amount}}\u9031\u9593",
    "periods.monthPlural": "{{amount}}\u30F6\u6708",
    "periods.yearPlural": "{{amount}}\u5E74",
    "periods.dayPlural": "{{amount}}\u65E5",
    "periods.weekFrequency": "\u6BCE\u9031",
    "periods.monthFrequency": "\u6BCE\u6708",
    "periods.yearFrequency": "\u6BCE\u5E74",
    "periods.dayFrequency": "\u6BCE\u65E5",
    "periods.perWeekFrequency": "\u9031\u3054\u3068",
    "periods.perMonthFrequency": "\u6708\u3054\u3068",
    "periods.perYearFrequency": "\u5E74\u3054\u3068",
    "periods.perDayFrequency": "\u65E5\u3054\u3068",
    "periods.unknownFrequency": "\u4E0D\u660E",
    "periods.weekFrequencyPlural": "{{amount}}\u9031\u9593\u3054\u3068",
    "periods.monthFrequencyPlural": "{{amount}}\u30F6\u6708\u3054\u3068",
    "periods.yearFrequencyPlural": "{{amount}}\u5E74\u3054\u3068",
    "periods.dayFrequencyPlural": "{{amount}}\u65E5\u3054\u3068",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}}\u65E5\u9593\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB",
    "product_info.price_after_free_trial": "\u30C8\u30E9\u30A4\u30A2\u30EB\u7D42\u4E86\u5F8C\u3001{{renewalDate}}\u306B",
    "product_info.renewal_frequency": "{{frequency}}\u3067\u66F4\u65B0",
    "product_info.continues_until_cancelled": "\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u307E\u3067\u7D99\u7D9A\u3055\u308C\u307E\u3059",
    "product_info.cancel_anytime": "\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB\u3067\u304D\u307E\u3059",
    "payment_entry_page.payment_step_title": "RevenueCat\u306B\u3088\u308B\u5B89\u5168\u306A\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8",
    "payment_entry_page.terms_info": "\u30AB\u30FC\u30C9\u60C5\u5831\u3092\u5165\u529B\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001{{appName}}\u304C\u5229\u7528\u898F\u7D04\u306B\u5F93\u3063\u3066\u4ECA\u5F8C\u306E\u652F\u6255\u3044\u3092\u8ACB\u6C42\u3059\u308B\u3053\u3068\u3092\u8A31\u53EF\u3057\u307E\u3059\u3002",
    "payment_entry_page.button_pay": "\u4ECA\u3059\u3050\u652F\u6255\u3046",
    "payment_entry_page.button_start_trial": "\u30C8\u30E9\u30A4\u30A2\u30EB\u3092\u958B\u59CB",
    "success_page.purchase_successful": "\u652F\u6255\u3044\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
    "success_page.button_close": "\u7D9A\u884C",
    "error_page.if_error_persists": "\u30A8\u30E9\u30FC\u304C\u7D9A\u304F\u5834\u5408\u306F\u3001\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002",
    "error_page.error_title_already_subscribed": "\u3059\u3067\u306B{{productTitle}}\u3092\u8CFC\u8AAD\u3057\u3066\u3044\u307E\u3059",
    "error_page.error_title_already_purchased": "\u3059\u3067\u306B{{productTitle}}\u3092\u8CFC\u5165\u3057\u3066\u3044\u307E\u3059",
    "error_page.error_title_other_errors": "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
    "error_page.error_message_already_subscribed": "\u3053\u306E\u5546\u54C1\u3092\u518D\u5EA6\u8CFC\u8AAD\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "error_page.error_message_already_purchased": "\u3053\u306E\u5546\u54C1\u3092\u518D\u5EA6\u8CFC\u5165\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    "error_page.error_message_missing_email_error": "\u8CFC\u5165\u3092\u5B8C\u4E86\u3059\u308B\u306B\u306F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u5FC5\u8981\u3067\u3059\u3002",
    "error_page.error_message_network_error": "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC\u3067\u3059\u3002\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "error_page.error_message_error_charging_payment": "\u652F\u6255\u3044\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002",
    "error_page.error_message_error_setting_up_purchase": "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u305F\u3081\u3001\u8CFC\u5165\u3092\u958B\u59CB\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.error_message_invalid_tax_location": "\u8ACB\u6C42\u5148\u4F4F\u6240\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u90F5\u4FBF\u756A\u53F7\u3068\u56FD\u304C\u6B63\u3057\u3044\u304B\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",
    "error_page.error_message_unknown_error": "\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF08\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\uFF1A{{errorCode}}\uFF09\u3002",
    "error_page.button_try_again": "\u518D\u8A66\u884C",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}%\u30AA\u30D5",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u672C\u65E5\u306E\u304A\u652F\u6255\u3044\u5408\u8A08",
    "product_info.subscribe_to": "\u8CFC\u8AAD\u3059\u308B",
    "payment_entry_page.trial_info": "{{renewalDate}}\u304B\u3089{{price}} {{perFrequency}}\u3067\u958B\u59CB\u3055\u308C\u3001\u30C8\u30E9\u30A4\u30A2\u30EB\u7D42\u4E86\u5F8C\u306B\u8ACB\u6C42\u3055\u308C\u307E\u3059\u3002\u3044\u3064\u3067\u3082\u30AD\u30E3\u30F3\u30BB\u30EB\u3067\u304D\u307E\u3059\u3002",
    "navbar_header.details": "\u8A73\u7D30",
    "navbar_header.back_button": "\u623B\u308B",
    "pricing_dropdown.show_details": "\u8A73\u7D30\u3092\u8868\u793A",
    "pricing_dropdown.hide_details": "\u8A73\u7D30\u3092\u96A0\u3059",
    "pricing_table.tax": "\u7A0E\u91D1",
    "pricing_table.trial_ends": "\u30C8\u30E9\u30A4\u30A2\u30EB\u7D42\u4E86\u5F8C\u3001{{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u672C\u65E5\u304A\u652F\u6255\u3044\u3044\u305F\u3060\u304F\u5408\u8A08\u91D1\u984D",
    "pricing_table.total_excluding_tax": "\u7A0E\u629C\u304D\u5408\u8A08",
    "pricing_table.enter_billing_address_to_calculate": "\u8ACB\u6C42\u5148\u4F4F\u6240\u3092\u5165\u529B\u3057\u3066\u8A08\u7B97",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u8A08\u7B97\u3059\u308B\u306B\u306F\u5DDE\u307E\u305F\u306F\u90F5\u4FBF\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    "pricing_table.enter_postal_code_to_calculate": "\u8A08\u7B97\u3059\u308B\u306B\u306F\u90F5\u4FBF\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    "error_page.error_message_invalid_email_error": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9{{email}}\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6709\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "payment_entry_page.button_payment_method": "{{paymentMethod}}\u3067{{formattedPrice}}\u3092\u652F\u6255\u3046",
    "payment_entry_page.button_with_price": "{{formattedPrice}}\u3092\u652F\u6255\u3046",
    "price_update.title": "\u4FA1\u683C\u306E\u66F4\u65B0",
    "price_update.base_message": "\u5408\u8A08\u91D1\u984D\u304C\u3001\u304A\u5BA2\u69D8\u306E\u8ACB\u6C42\u5148\u4F4F\u6240\u306B\u57FA\u3065\u3044\u3066\u7A0E\u91D1\u3068\u3068\u3082\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u30AB\u30FC\u30C9\u3078\u306E\u8ACB\u6C42\u306F1\u56DE\u306E\u307F\u3067\u3059\u3002",
    "price_update.trial_message": "\u8ACB\u6C42\u5148\u4F4F\u6240\u306B\u57FA\u3065\u3044\u3066\u7A0E\u91D1\u3092\u542B\u3080\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u6599\u91D1\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB\u306F\u5F15\u304D\u7D9A\u304D\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u78BA\u8A8D\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
    "payment_entry_page.express_checkout_divider": "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    "error_page.trouble_accessing": "\u8CFC\u5165\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306B\u554F\u984C\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044: ",
    "error_page.close_button_title": "{{appName}} \u306B\u79FB\u52D5",
    "error_page.error_title_stripe_missing_required_permission": "\u5FC5\u8981\u306AStripe\u306E\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093",
    "error_page.button_close": "\u9589\u3058\u308B",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u7A0E\u306E\u539F\u7523\u5730\u4F4F\u6240\u304C\u7121\u52B9\u306A\u305F\u3081\u3001\u8CFC\u5165\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002 \u672C\u756A\u74B0\u5883\u3067\u306F\u3001\u7A0E\u91D1\u304C\u9069\u7528\u3055\u308C\u306A\u304F\u3066\u3082\u8CFC\u5165\u306F\u53EF\u80FD\u3067\u3059\u3002",
    "error_page.error_message_stripe_tax_not_active": "Stripe Tax\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u8CFC\u5165\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002 \u672C\u756A\u74B0\u5883\u3067\u306F\u3001\u7A0E\u91D1\u304C\u9069\u7528\u3055\u308C\u306A\u304F\u3066\u3082\u8CFC\u5165\u306F\u53EF\u80FD\u3067\u3059\u3002",
    "error_page.error_only_in_sandbox": "\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u30B5\u30F3\u30C9\u30DC\u30C3\u30AF\u30B9\u3067\u306E\u307F\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
    "error_page.error_message_stripe_missing_required_permission": "Stripe\u30A2\u30D7\u30EA\u306B\u5FC5\u8981\u306A\u6A29\u9650\u304C\u306A\u3044\u305F\u3081\u3001\u8CFC\u5165\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002 \u672C\u756A\u74B0\u5883\u3067\u306F\u3001\u7A0E\u91D1\u304C\u9069\u7528\u3055\u308C\u306A\u304F\u3066\u3082\u8CFC\u5165\u306F\u53EF\u80FD\u3067\u3059\u3002",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax\u304C\u6709\u52B9\u3067\u306F\u3042\u308A\u307E\u305B\u3093",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u7A0E\u306E\u539F\u7523\u5730\u4F4F\u6240\u304C\u7121\u52B9\u3067\u3059",
    "apple_pay.free_trial": "\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB"
  };
  var yc = {
    "periods.week": "{{amount}}\uC8FC",
    "periods.month": "{{amount}}\uAC1C\uC6D4",
    "periods.year": "{{amount}}\uB144",
    "periods.day": "{{amount}}\uC77C",
    "periods.weekShort": "{{amount}}\uC8FC",
    "periods.monthShort": "{{amount}}\uAC1C\uC6D4",
    "periods.yearShort": "{{amount}}\uB144",
    "periods.dayShort": "{{amount}}\uC77C",
    "periods.lifetime": "\uD3C9\uC0DD",
    "periods.weekPlural": "{{amount}}\uC8FC",
    "periods.monthPlural": "{{amount}}\uAC1C\uC6D4",
    "periods.yearPlural": "{{amount}}\uB144",
    "periods.dayPlural": "{{amount}}\uC77C",
    "periods.weekFrequency": "\uB9E4\uC8FC",
    "periods.monthFrequency": "\uB9E4\uB2EC",
    "periods.yearFrequency": "\uB9E4\uB144",
    "periods.dayFrequency": "\uB9E4\uC77C",
    "periods.perWeekFrequency": "\uC8FC\uB2F9",
    "periods.perMonthFrequency": "\uC6D4\uBCC4",
    "periods.perYearFrequency": "\uC5F0\uAC04",
    "periods.perDayFrequency": "\uB9E4\uC77C",
    "periods.unknownFrequency": "\uC54C \uC218 \uC5C6\uC74C",
    "periods.weekFrequencyPlural": "{{amount}}\uC8FC\uB9C8\uB2E4",
    "periods.monthFrequencyPlural": "{{amount}}\uAC1C\uC6D4\uB9C8\uB2E4",
    "periods.yearFrequencyPlural": "{{amount}}\uB144\uB9C8\uB2E4",
    "periods.dayFrequencyPlural": "{{amount}}\uC77C\uB9C8\uB2E4",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}}\uC77C \uBB34\uB8CC \uCCB4\uD5D8",
    "product_info.price_after_free_trial": "\uCCB4\uD5D8 \uC885\uB8CC \uD6C4, {{renewalDate}}\uC5D0",
    "product_info.renewal_frequency": "{{frequency}}\uB9C8\uB2E4 \uAC31\uC2E0",
    "product_info.continues_until_cancelled": "\uCDE8\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uACC4\uC18D\uB429\uB2C8\uB2E4.",
    "product_info.cancel_anytime": "\uC5B8\uC81C\uB4E0\uC9C0 \uCDE8\uC18C \uAC00\uB2A5",
    "payment_entry_page.payment_step_title": "RevenueCat\uC744 \uD1B5\uD55C \uC548\uC804\uD55C \uACB0\uC81C",
    "payment_entry_page.terms_info": "{{appName}}\uC758 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD5A5\uD6C4 \uACB0\uC81C\uB97C \uC704\uD574 \uADC0\uD558\uC758 \uCE74\uB4DC \uC815\uBCF4\uB97C \uC81C\uACF5\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uC758 \uCE74\uB4DC\uC5D0 \uC694\uAE08\uC744 \uCCAD\uAD6C\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD569\uB2C8\uB2E4.",
    "payment_entry_page.button_pay": "\uC9C0\uAE08 \uACB0\uC81C",
    "payment_entry_page.button_start_trial": "\uCCB4\uD5D8 \uC2DC\uC791",
    "success_page.purchase_successful": "\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
    "success_page.button_close": "\uACC4\uC18D",
    "error_page.if_error_persists": "\uC624\uB958\uAC00 \uC9C0\uC18D\uB418\uBA74 \uB2E4\uC74C\uC73C\uB85C \uBB38\uC758\uD558\uC2ED\uC2DC\uC624.",
    "error_page.error_title_already_subscribed": "\uC774\uBBF8 {{productTitle}}\uC744 \uAD6C\uB3C5\uD558\uC168\uC2B5\uB2C8\uB2E4",
    "error_page.error_title_already_purchased": "\uC774\uBBF8 {{productTitle}}\uC744 \uAD6C\uB9E4\uD558\uC168\uC2B5\uB2C8\uB2E4",
    "error_page.error_title_other_errors": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
    "error_page.error_message_already_subscribed": "\uC774 \uC81C\uD488\uC744 \uB2E4\uC2DC \uAD6C\uB3C5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    "error_page.error_message_already_purchased": "\uC774 \uC81C\uD488\uC744 \uB2E4\uC2DC \uAD6C\uB9E4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    "error_page.error_message_missing_email_error": "\uAD6C\uB9E4\uB97C \uC644\uB8CC\uD558\uB824\uBA74 \uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.",
    "error_page.error_message_network_error": "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958\uC785\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.",
    "error_page.error_message_error_charging_payment": "\uACB0\uC81C\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",
    "error_page.error_message_error_setting_up_purchase": "\uC624\uB958\uB85C \uC778\uD574 \uAD6C\uB9E4\uAC00 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4(\uC624\uB958 \uCF54\uB4DC: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\uCCAD\uAD6C \uC8FC\uC18C\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6B0\uD3B8\uBC88\uD638\uC640 \uAD6D\uAC00\uAC00 \uC815\uD655\uD55C\uC9C0 \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "error_page.error_message_unknown_error": "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4(\uC624\uB958 \uCF54\uB4DC: {{errorCode}}).",
    "error_page.button_try_again": "\uB2E4\uC2DC \uC2DC\uB3C4",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \uD560\uC778",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\uC624\uB298 \uCD1D \uACB0\uC81C \uAE08\uC561",
    "product_info.subscribe_to": "\uAD6C\uB3C5\uD558\uAE30",
    "payment_entry_page.trial_info": "\uCCB4\uD5D8 \uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uBA74 {{renewalDate}}\uBD80\uD130 {{price}} {{perFrequency}}\uAC00 \uCCAD\uAD6C\uB429\uB2C8\uB2E4. \uADF8 \uC804\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    "navbar_header.details": "\uC138\uBD80 \uC815\uBCF4",
    "navbar_header.back_button": "\uB4A4\uB85C",
    "pricing_dropdown.show_details": "\uC138\uBD80 \uC815\uBCF4 \uD45C\uC2DC",
    "pricing_dropdown.hide_details": "\uC138\uBD80 \uC815\uBCF4 \uC228\uAE30\uAE30",
    "pricing_table.tax": "\uC138\uAE08",
    "pricing_table.trial_ends": "\uCCB4\uD5D8\uD310 \uC885\uB8CC \uD6C4, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\uC624\uB298 \uC9C0\uBD88\uD574\uC57C \uD560 \uCD1D\uC561",
    "pricing_table.total_excluding_tax": "\uC138\uAE08 \uC81C\uC678 \uCD1D\uC561",
    "pricing_table.enter_billing_address_to_calculate": "\uACC4\uC0B0\uC744 \uC704\uD574 \uCCAD\uAD6C\uC9C0 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\uC8FC \uB610\uB294 \uC6B0\uD3B8 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC5EC \uACC4\uC0B0",
    "pricing_table.enter_postal_code_to_calculate": "\uC6B0\uD3B8 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC5EC \uACC4\uC0B0",
    "error_page.error_message_invalid_email_error": "\uC774\uBA54\uC77C \uC8FC\uC18C {{email}}\uC744(\uB97C) \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC81C\uACF5\uD574 \uC8FC\uC138\uC694.",
    "payment_entry_page.button_payment_method": "{{paymentMethod}}\uC73C\uB85C {{formattedPrice}} \uACB0\uC81C",
    "payment_entry_page.button_with_price": "{{formattedPrice}} \uACB0\uC81C",
    "price_update.title": "\uAC00\uACA9 \uC5C5\uB370\uC774\uD2B8",
    "price_update.base_message": "\uCCAD\uAD6C\uC9C0 \uC8FC\uC18C\uB97C \uAE30\uC900\uC73C\uB85C \uC138\uAE08\uC774 \uD3EC\uD568\uB41C \uCD1D \uAC00\uACA9\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uD655\uC778\uD558\uACE0 \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694. \uCE74\uB4DC\uB294 \uD55C \uBC88\uB9CC \uCCAD\uAD6C\uB429\uB2C8\uB2E4.",
    "price_update.trial_message": "\uCCAD\uAD6C \uC8FC\uC18C\uC5D0 \uB530\uB77C \uC138\uAE08\uC774 \uD3EC\uD568\uB41C \uAD6C\uB3C5 \uAC00\uACA9\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBB34\uB8CC \uCCB4\uD5D8\uC740 \uACC4\uC18D \uC801\uC6A9\uB429\uB2C8\uB2E4. \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
    "payment_entry_page.express_checkout_divider": "\uB610\uB294 \uCE74\uB4DC \uACB0\uC81C",
    "error_page.trouble_accessing": "\uAD6C\uB9E4\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB294 \uACBD\uC6B0 \uB2E4\uC74C \uC8FC\uC18C\uB85C \uC9C0\uC6D0\uD300\uC5D0 \uBB38\uC758\uD558\uC138\uC694. ",
    "error_page.close_button_title": "{{appName}}\uC73C\uB85C \uC774\uB3D9",
    "error_page.error_title_stripe_missing_required_permission": "\uD544\uC218 Stripe \uAD8C\uD55C \uB204\uB77D",
    "error_page.button_close": "\uB2EB\uAE30",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\uC138\uAE08 \uC6D0\uC0B0\uC9C0 \uC8FC\uC18C\uAC00 \uC798\uBABB\uB418\uC5B4 \uAD6C\uB9E4\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uB355\uC158 \uD658\uACBD\uC5D0\uC11C\uB294 \uC138\uAE08\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB85C \uAD6C\uB9E4\uAC00 \uC9C4\uD589\uB429\uB2C8\uB2E4.",
    "error_page.error_message_stripe_tax_not_active": "Stripe Tax\uAC00 \uD65C\uC131\uD654\uB418\uC9C0 \uC54A\uC544 \uAD6C\uB9E4\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uB355\uC158 \uD658\uACBD\uC5D0\uC11C\uB294 \uC138\uAE08\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB85C \uAD6C\uB9E4\uAC00 \uC9C4\uD589\uB429\uB2C8\uB2E4.",
    "error_page.error_only_in_sandbox": "\uC774 \uBA54\uC2DC\uC9C0\uB294 \uC0CC\uB4DC\uBC15\uC2A4\uC5D0\uC11C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
    "error_page.error_message_stripe_missing_required_permission": "Stripe \uC571\uC5D0 \uD544\uC694\uD55C \uAD8C\uD55C\uC774 \uC5C6\uC5B4 \uAD6C\uB9E4\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uB355\uC158 \uD658\uACBD\uC5D0\uC11C\uB294 \uC138\uAE08\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB85C \uAD6C\uB9E4\uAC00 \uC9C4\uD589\uB429\uB2C8\uB2E4.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax\uAC00 \uD65C\uC131\uD654\uB418\uC9C0 \uC54A\uC74C",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\uC798\uBABB\uB41C \uC138\uAE08 \uC6D0\uC0B0\uC9C0 \uC8FC\uC18C",
    "apple_pay.free_trial": "\uBB34\uB8CC \uCCB4\uD5D8"
  };
  var bc = {
    "periods.week": "{{amount}} minggu",
    "periods.month": "{{amount}} bulan",
    "periods.year": "{{amount}} tahun",
    "periods.day": "{{amount}} hari",
    "periods.weekShort": "{{amount}}mg",
    "periods.monthShort": "{{amount}}bl",
    "periods.yearShort": "{{amount}}th",
    "periods.dayShort": "{{amount}}h",
    "periods.lifetime": "seumur hidup",
    "periods.weekPlural": "{{amount}} minggu",
    "periods.monthPlural": "{{amount}} bulan",
    "periods.yearPlural": "{{amount}} tahun",
    "periods.dayPlural": "{{amount}} hari",
    "periods.weekFrequency": "mingguan",
    "periods.monthFrequency": "bulanan",
    "periods.yearFrequency": "tahunan",
    "periods.dayFrequency": "harian",
    "periods.perWeekFrequency": "setiap minggu",
    "periods.perMonthFrequency": "setiap bulan",
    "periods.perYearFrequency": "setiap tahun",
    "periods.perDayFrequency": "setiap hari",
    "periods.unknownFrequency": "tidak diketahui",
    "periods.weekFrequencyPlural": "setiap {{amount}} minggu",
    "periods.monthFrequencyPlural": "setiap {{amount}} bulan",
    "periods.yearFrequencyPlural": "setiap {{amount}} tahun",
    "periods.dayFrequencyPlural": "setiap {{amount}} hari",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} percubaan percuma",
    "product_info.price_after_free_trial": "Selepas tamat percubaan, pada {{renewalDate}}",
    "product_info.renewal_frequency": "Diperbaharui {{frequency}}",
    "product_info.continues_until_cancelled": "Berterusan sehingga dibatalkan",
    "product_info.cancel_anytime": "Batal bila-bila masa",
    "payment_entry_page.payment_step_title": "Pembayaran selamat oleh RevenueCat",
    "payment_entry_page.terms_info": "Dengan memberikan maklumat kad anda, anda membenarkan {{appName}} untuk mengenakan bayaran pada kad anda untuk pembayaran masa hadapan mengikut terma mereka.",
    "payment_entry_page.button_pay": "Bayar sekarang",
    "payment_entry_page.button_start_trial": "Mula Percubaan",
    "success_page.purchase_successful": "Pembayaran selesai",
    "success_page.button_close": "Teruskan",
    "error_page.if_error_persists": "Jika ralat berterusan, sila hubungi ",
    "error_page.error_title_already_subscribed": "Anda sudah melanggan {{productTitle}}",
    "error_page.error_title_already_purchased": "Anda sudah membeli {{productTitle}}",
    "error_page.error_title_other_errors": "Ada sesuatu yang tidak kena",
    "error_page.error_message_already_subscribed": "Anda tidak boleh melanggan produk ini lagi.",
    "error_page.error_message_already_purchased": "Anda tidak boleh membeli produk ini lagi.",
    "error_page.error_message_missing_email_error": "Emel diperlukan untuk menyelesaikan pembelian.",
    "error_page.error_message_network_error": "Ralat rangkaian. Sila semak sambungan internet anda.",
    "error_page.error_message_error_charging_payment": "Pembayaran gagal.",
    "error_page.error_message_error_setting_up_purchase": "Pembelian tidak dimulakan disebabkan ralat (kod ralat: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Kami tidak dapat mengesahkan alamat bil anda. Sila semak sama ada poskod dan negara adalah betul.",
    "error_page.error_message_unknown_error": "Ralat yang tidak diketahui telah berlaku (kod ralat: {{errorCode}}).",
    "error_page.button_try_again": "Cuba lagi",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% diskaun",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Jumlah yang perlu dibayar hari ini",
    "product_info.subscribe_to": "Langgan",
    "payment_entry_page.trial_info": "Selepas tempoh percubaan anda tamat, anda akan dikenakan bayaran sebanyak {{price}} {{perFrequency}} bermula {{renewalDate}}. Anda sentiasa boleh membatalkan sebelum itu.",
    "navbar_header.details": "Butiran",
    "navbar_header.back_button": "Kembali",
    "pricing_dropdown.show_details": "Tunjukkan butiran",
    "pricing_dropdown.hide_details": "Sembunyikan butiran",
    "pricing_table.tax": "Cukai",
    "pricing_table.trial_ends": "Selepas tempoh percubaan tamat, pada {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Jumlah yang perlu dibayar hari ini",
    "pricing_table.total_excluding_tax": "Jumlah tidak termasuk cukai",
    "pricing_table.enter_billing_address_to_calculate": "Masukkan alamat pengebilan untuk mengira",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Masukkan negeri atau poskod untuk mengira",
    "pricing_table.enter_postal_code_to_calculate": "Masukkan poskod untuk mengira",
    "error_page.error_message_invalid_email_error": "Alamat e-mel {{email}} tidak dapat disahkan. Sila berikan alamat e-mel yang sah.",
    "payment_entry_page.button_payment_method": "Bayar {{formattedPrice}} dengan {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Bayar {{formattedPrice}}",
    "price_update.title": "Kemaskini harga",
    "price_update.base_message": "Jumlah harga telah dikemas kini dengan cukai berdasarkan alamat pengebilan anda. Sila semak dan cuba lagi. Kad anda hanya akan dicaj sekali.",
    "price_update.trial_message": "Harga langganan telah dikemas kini untuk memasukkan cukai berdasarkan alamat bil anda. Tempoh percubaan percuma masih terpakai. Sila semak dan cuba lagi.",
    "payment_entry_page.express_checkout_divider": "ATAU BAYAR DENGAN KAD",
    "error_page.trouble_accessing": "Jika anda menghadapi masalah untuk mengakses pembelian anda, hubungi sokongan di ",
    "error_page.close_button_title": "Pergi ke {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Kebenaran Stripe hilang",
    "error_page.button_close": "Tutup",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Pembelian gagal kerana alamat asal cukai tidak sah. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
    "error_page.error_message_stripe_tax_not_active": "Pembelian gagal kerana Cukai Stripe tidak didayakan. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
    "error_page.error_only_in_sandbox": "Mesej ini hanya muncul dalam kotak pasir.",
    "error_page.error_message_stripe_missing_required_permission": "Pembelian gagal kerana aplikasi Stripe kekurangan kebenaran yang diperlukan. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
    "error_page.error_title_stripe_tax_not_active": "Cukai Stripe tidak aktif",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Alamat asal cukai Stripe tidak sah",
    "apple_pay.free_trial": "Percubaan Percuma"
  };
  var hc = {
    "periods.week": "{{amount}} uke",
    "periods.month": "{{amount}} m\xE5ned",
    "periods.year": "{{amount}} \xE5r",
    "periods.day": "{{amount}} dag",
    "periods.weekShort": "{{amount}}uk",
    "periods.monthShort": "{{amount}}md",
    "periods.yearShort": "{{amount}}\xE5r",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "livstid",
    "periods.weekPlural": "{{amount}} uker",
    "periods.monthPlural": "{{amount}} m\xE5neder",
    "periods.yearPlural": "{{amount}} \xE5r",
    "periods.dayPlural": "{{amount}} dager",
    "periods.weekFrequency": "ukentlig",
    "periods.monthFrequency": "m\xE5nedlig",
    "periods.yearFrequency": "\xE5rlig",
    "periods.dayFrequency": "daglig",
    "periods.perWeekFrequency": "per uke",
    "periods.perMonthFrequency": "per m\xE5ned",
    "periods.perYearFrequency": "per \xE5r",
    "periods.perDayFrequency": "per dag",
    "periods.unknownFrequency": "ukjent",
    "periods.weekFrequencyPlural": "hver {{amount}} uker",
    "periods.monthFrequencyPlural": "hver {{amount}} m\xE5neder",
    "periods.yearFrequencyPlural": "hver {{amount}} \xE5r",
    "periods.dayFrequencyPlural": "hver {{amount}} dager",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} gratis pr\xF8veperiode",
    "product_info.price_after_free_trial": "Etter pr\xF8veperioden slutter, den {{renewalDate}}",
    "product_info.renewal_frequency": "Fornyes {{frequency}}",
    "product_info.continues_until_cancelled": "Varer til den avbestilles",
    "product_info.cancel_anytime": "Avbestille n\xE5r som helst",
    "payment_entry_page.payment_step_title": "Sikker betaling via RevenueCat",
    "payment_entry_page.terms_info": "Ved \xE5 oppgi kortinformasjonen din, tillater du {{appName}} \xE5 belaste kortet ditt for fremtidige betalinger i henhold til deres vilk\xE5r.",
    "payment_entry_page.button_pay": "Betal n\xE5",
    "payment_entry_page.button_start_trial": "Start pr\xF8veperiode",
    "success_page.purchase_successful": "Betalingen er fullf\xF8rt",
    "success_page.button_close": "Fortsett",
    "error_page.if_error_persists": "Hvis feilen vedvarer, vennligst kontakt ",
    "error_page.error_title_already_subscribed": "Du abonnerer allerede p\xE5 {{productTitle}}",
    "error_page.error_title_already_purchased": "Du har allerede kj\xF8pt {{productTitle}}",
    "error_page.error_title_other_errors": "Noe gikk galt",
    "error_page.error_message_already_subscribed": "Du kan ikke abonnere p\xE5 dette produktet igjen.",
    "error_page.error_message_already_purchased": "Du kan ikke kj\xF8pe dette produktet igjen.",
    "error_page.error_message_missing_email_error": "E-post er n\xF8dvendig for \xE5 fullf\xF8re kj\xF8pet.",
    "error_page.error_message_network_error": "Nettverksfeil. Vennligst sjekk internettforbindelsen din.",
    "error_page.error_message_error_charging_payment": "Betalingen mislyktes.",
    "error_page.error_message_error_setting_up_purchase": "Kj\xF8pet ble ikke startet p\xE5 grunn av en feil (feilkode: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Vi kunne ikke bekrefte faktureringsadressen din. Vennligst sjekk at postnummeret og landet er korrekte.",
    "error_page.error_message_unknown_error": "En ukjent feil oppstod (feilkode: {{errorCode}}).",
    "error_page.button_try_again": "Pr\xF8v igjen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% rabatt",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Totalt forfaller i dag",
    "product_info.subscribe_to": "Abonner p\xE5",
    "payment_entry_page.trial_info": "Etter at pr\xF8veperioden din er over, blir du belastet {{price}} {{perFrequency}} fra og med {{renewalDate}}. Du kan n\xE5r som helst kansellere f\xF8r det.",
    "navbar_header.details": "Detaljer",
    "navbar_header.back_button": "Tilbake",
    "pricing_dropdown.show_details": "Vis detaljer",
    "pricing_dropdown.hide_details": "Skjul detaljer",
    "pricing_table.tax": "Skatt",
    "pricing_table.trial_ends": "Etter pr\xF8veperioden slutter, den {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Totalt forfaller i dag",
    "pricing_table.total_excluding_tax": "Total eksklusive skatt",
    "pricing_table.enter_billing_address_to_calculate": "Oppgi faktureringsadresse for \xE5 beregne",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Skriv inn stat eller postnummer for \xE5 beregne",
    "pricing_table.enter_postal_code_to_calculate": "Skriv inn postnummer for \xE5 beregne",
    "error_page.error_message_invalid_email_error": "E-postadressen {{email}} kunne ikke bekreftes. Vennligst oppgi en gyldig e-postadresse.",
    "payment_entry_page.button_payment_method": "Betal {{formattedPrice}} med {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Betal {{formattedPrice}}",
    "price_update.title": "Prisoppdatering",
    "price_update.base_message": "Totalprisen er oppdatert med skatt basert p\xE5 fakturaadressen din. Vennligst se gjennom og pr\xF8v igjen. Kortet ditt vil kun bli belastet \xE9n gang.",
    "price_update.trial_message": "Abonnementsprisen er oppdatert for \xE5 inkludere skatter basert p\xE5 din fakturaadresse. Den gratis pr\xF8veperioden gjelder fortsatt. Vennligst sjekk og pr\xF8v igjen.",
    "payment_entry_page.express_checkout_divider": "ELLER BETAL MED KORT",
    "error_page.trouble_accessing": "Hvis du har problemer med \xE5 f\xE5 tilgang til kj\xF8pet ditt, kan du kontakte support p\xE5 ",
    "error_page.close_button_title": "G\xE5 til {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Mangler Stripe-tillatelse",
    "error_page.button_close": "Lukk",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Kj\xF8pet mislyktes fordi skatteopprinnelsesadressen er ugyldig. I produksjon vil kj\xF8p fungere uten at skatter brukes.",
    "error_page.error_message_stripe_tax_not_active": "Kj\xF8pet mislyktes fordi Stripe Tax ikke er aktivert. I produksjon vil kj\xF8p fungere uten at skatter brukes.",
    "error_page.error_only_in_sandbox": "Denne meldingen vises bare i sandkassen.",
    "error_page.error_message_stripe_missing_required_permission": "Kj\xF8pet mislyktes fordi Stripe-appen mangler en n\xF8dvendig tillatelse. I produksjon vil kj\xF8p fungere uten at skatter brukes.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax er ikke aktivt",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ugyldig skatteopprinnelsesadresse",
    "apple_pay.free_trial": "Gratis pr\xF8veperiode"
  };
  var vc = {
    "periods.week": "{{amount}} tydzie\u0144",
    "periods.month": "{{amount}} miesi\u0105c",
    "periods.year": "{{amount}} rok",
    "periods.day": "{{amount}} dzie\u0144",
    "periods.weekShort": "{{amount}}tydz",
    "periods.monthShort": "{{amount}}mies",
    "periods.yearShort": "{{amount}}rok",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "do\u017Cywotnio",
    "periods.weekPlural": "{{amount}} tygodni",
    "periods.monthPlural": "{{amount}} miesi\u0119cy",
    "periods.yearPlural": "{{amount}} lat",
    "periods.dayPlural": "{{amount}} dni",
    "periods.weekFrequency": "tygodniowo",
    "periods.monthFrequency": "miesi\u0119cznie",
    "periods.yearFrequency": "rocznie",
    "periods.dayFrequency": "dziennie",
    "periods.perWeekFrequency": "na tydzie\u0144",
    "periods.perMonthFrequency": "na miesi\u0105c",
    "periods.perYearFrequency": "na rok",
    "periods.perDayFrequency": "na dzie\u0144",
    "periods.unknownFrequency": "nieznany",
    "periods.weekFrequencyPlural": "co {{amount}} tygodni",
    "periods.monthFrequencyPlural": "co {{amount}} miesi\u0119cy",
    "periods.yearFrequencyPlural": "co {{amount}} lat",
    "periods.dayFrequencyPlural": "co {{amount}} dni",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} dni pr\xF3bnych",
    "product_info.price_after_free_trial": "Po zako\u0144czeniu okresu pr\xF3bnego, dnia {{renewalDate}}",
    "product_info.renewal_frequency": "Odnawialny co {{frequency}}",
    "product_info.continues_until_cancelled": "Kontynuowane do momentu anulowania",
    "product_info.cancel_anytime": "Mo\u017Cesz anulowa\u0107 w dowolnym momencie",
    "payment_entry_page.payment_step_title": "Bezpieczna p\u0142atno\u015B\u0107 przez RevenueCat",
    "payment_entry_page.terms_info": "Podaj\u0105c dane swojej karty, zezwalasz {{appName}} na obci\u0105\u017Canie Twojej karty za przysz\u0142e p\u0142atno\u015Bci zgodnie z ich regulaminem.",
    "payment_entry_page.button_pay": "Zap\u0142a\u0107 teraz",
    "payment_entry_page.button_start_trial": "Rozpocznij okres pr\xF3bny",
    "success_page.purchase_successful": "P\u0142atno\u015B\u0107 zako\u0144czona",
    "success_page.button_close": "Kontynuuj",
    "error_page.if_error_persists": "Je\u015Bli b\u0142\u0105d b\u0119dzie si\u0119 powtarza\u0142, skontaktuj si\u0119 z ",
    "error_page.error_title_already_subscribed": "Ju\u017C subskrybujesz {{productTitle}}",
    "error_page.error_title_already_purchased": "Ju\u017C zakupi\u0142e\u015B/a\u015B {{productTitle}}",
    "error_page.error_title_other_errors": "Co\u015B posz\u0142o nie tak",
    "error_page.error_message_already_subscribed": "Nie mo\u017Cesz ponownie subskrybowa\u0107 tego produktu.",
    "error_page.error_message_already_purchased": "Nie mo\u017Cesz ponownie zakupi\u0107 tego produktu.",
    "error_page.error_message_missing_email_error": "Adres e-mail jest wymagany do dokonania zakupu.",
    "error_page.error_message_network_error": "B\u0142\u0105d sieci. Sprawd\u017A po\u0142\u0105czenie internetowe.",
    "error_page.error_message_error_charging_payment": "P\u0142atno\u015B\u0107 nieudana.",
    "error_page.error_message_error_setting_up_purchase": "Zakup nie zosta\u0142 rozpocz\u0119ty z powodu b\u0142\u0119du (kod b\u0142\u0119du: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nie mogli\u015Bmy zweryfikowa\u0107 Twojego adresu rozliczeniowego. Sprawd\u017A, czy kod pocztowy i kraj s\u0105 poprawne.",
    "error_page.error_message_unknown_error": "Wyst\u0105pi\u0142 nieznany b\u0142\u0105d (kod b\u0142\u0119du: {{errorCode}}).",
    "error_page.button_try_again": "Spr\xF3buj ponownie",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% zni\u017Cki",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Do zap\u0142aty dzisiaj",
    "product_info.subscribe_to": "Subskrybuj",
    "payment_entry_page.trial_info": "Po zako\u0144czeniu okresu pr\xF3bnego zostanie pobrana op\u0142ata w wysoko\u015Bci {{price}} {{perFrequency}} pocz\u0105wszy od {{renewalDate}}. Zawsze mo\u017Cesz anulowa\u0107 wcze\u015Bniej.",
    "navbar_header.details": "Szczeg\xF3\u0142y",
    "navbar_header.back_button": "Wstecz",
    "pricing_dropdown.show_details": "Poka\u017C szczeg\xF3\u0142y",
    "pricing_dropdown.hide_details": "Ukryj szczeg\xF3\u0142y",
    "pricing_table.tax": "Podatek",
    "pricing_table.trial_ends": "Po zako\u0144czeniu okresu pr\xF3bnego, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Suma nale\u017Cna dzisiaj",
    "pricing_table.total_excluding_tax": "Suma bez podatku",
    "pricing_table.enter_billing_address_to_calculate": "Wprowad\u017A adres rozliczeniowy, aby obliczy\u0107",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Wprowad\u017A stan lub kod pocztowy, aby obliczy\u0107",
    "pricing_table.enter_postal_code_to_calculate": "Wprowad\u017A kod pocztowy, aby obliczy\u0107",
    "error_page.error_message_invalid_email_error": "Nie mo\u017Cna zweryfikowa\u0107 adresu e-mail {{email}}. Prosz\u0119 poda\u0107 prawid\u0142owy adres e-mail.",
    "payment_entry_page.button_payment_method": "Zap\u0142a\u0107 {{formattedPrice}} przez {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Zap\u0142a\u0107 {{formattedPrice}}",
    "price_update.title": "Aktualizacja ceny",
    "price_update.base_message": "Cena ca\u0142kowita zosta\u0142a zaktualizowana o podatek na podstawie Twojego adresu rozliczeniowego. Sprawd\u017A i spr\xF3buj ponownie. Twoja karta zostanie obci\u0105\u017Cona tylko raz.",
    "price_update.trial_message": "Cena subskrypcji zosta\u0142a zaktualizowana o podatki na podstawie Twojego adresu rozliczeniowego. Okres pr\xF3bny nadal obowi\u0105zuje. Sprawd\u017A i spr\xF3buj ponownie.",
    "payment_entry_page.express_checkout_divider": "LUB ZAP\u0141A\u0106 KART\u0104",
    "error_page.trouble_accessing": "Je\u015Bli masz problemy z dost\u0119pem do zakupu, skontaktuj si\u0119 z dzia\u0142em pomocy pod adresem ",
    "error_page.close_button_title": "Przejd\u017A do {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Brakuj\u0105ce uprawnienie Stripe",
    "error_page.button_close": "Zamknij",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Zakup nie powi\xF3d\u0142 si\u0119, poniewa\u017C adres pochodzenia podatku jest nieprawid\u0142owy. W \u015Brodowisku produkcyjnym zakupy b\u0119d\u0105 dzia\u0142a\u0107 bez naliczania podatk\xF3w.",
    "error_page.error_message_stripe_tax_not_active": "Zakup nie powi\xF3d\u0142 si\u0119, poniewa\u017C Stripe Tax nie jest w\u0142\u0105czony. W \u015Brodowisku produkcyjnym zakupy b\u0119d\u0105 dzia\u0142a\u0107 bez naliczania podatk\xF3w.",
    "error_page.error_only_in_sandbox": "Ta wiadomo\u015B\u0107 pojawia si\u0119 tylko w \u015Brodowisku testowym.",
    "error_page.error_message_stripe_missing_required_permission": "Zakup nie powi\xF3d\u0142 si\u0119, poniewa\u017C aplikacja Stripe nie ma wymaganego uprawnienia. W \u015Brodowisku produkcyjnym zakupy b\u0119d\u0105 dzia\u0142a\u0107 bez naliczania podatk\xF3w.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax nieaktywny",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Nieprawid\u0142owy adres pochodzenia podatku",
    "apple_pay.free_trial": "Okres pr\xF3bny"
  };
  var kc = {
    "periods.week": "{{amount}} semana",
    "periods.month": "{{amount}} m\xEAs",
    "periods.year": "{{amount}} ano",
    "periods.day": "{{amount}} dia",
    "periods.weekShort": "{{amount}}sem",
    "periods.monthShort": "{{amount}}m\xEAs",
    "periods.yearShort": "{{amount}}ano",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "vital\xEDcio",
    "periods.weekPlural": "{{amount}} semanas",
    "periods.monthPlural": "{{amount}} meses",
    "periods.yearPlural": "{{amount}} anos",
    "periods.dayPlural": "{{amount}} dias",
    "periods.weekFrequency": "semanal",
    "periods.monthFrequency": "mensal",
    "periods.yearFrequency": "anual",
    "periods.dayFrequency": "di\xE1rio",
    "periods.perWeekFrequency": "por semana",
    "periods.perMonthFrequency": "por m\xEAs",
    "periods.perYearFrequency": "por ano",
    "periods.perDayFrequency": "por dia",
    "periods.unknownFrequency": "desconhecido",
    "periods.weekFrequencyPlural": "a cada {{amount}} semanas",
    "periods.monthFrequencyPlural": "a cada {{amount}} meses",
    "periods.yearFrequencyPlural": "a cada {{amount}} anos",
    "periods.dayFrequencyPlural": "a cada {{amount}} dias",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} teste gr\xE1tis",
    "product_info.price_after_free_trial": "Ap\xF3s o t\xE9rmino do teste, em {{renewalDate}}",
    "product_info.renewal_frequency": "Renova {{frequency}}",
    "product_info.continues_until_cancelled": "Continua at\xE9 ser cancelado",
    "product_info.cancel_anytime": "Cancelar a qualquer momento",
    "payment_entry_page.payment_step_title": "Pagamento seguro pela RevenueCat",
    "payment_entry_page.terms_info": "Ao fornecer suas informa\xE7\xF5es de cart\xE3o, voc\xEA permite que o {{appName}} cobre seu cart\xE3o para pagamentos futuros de acordo com seus termos.",
    "payment_entry_page.button_pay": "Pagar agora",
    "payment_entry_page.button_start_trial": "Iniciar Teste",
    "success_page.purchase_successful": "Pagamento conclu\xEDdo",
    "success_page.button_close": "Continuar",
    "error_page.if_error_persists": "Se o erro persistir, entre em contato com ",
    "error_page.error_title_already_subscribed": "Voc\xEA j\xE1 se inscreveu em {{productTitle}}",
    "error_page.error_title_already_purchased": "Voc\xEA j\xE1 comprou {{productTitle}}",
    "error_page.error_title_other_errors": "Algo deu errado",
    "error_page.error_message_already_subscribed": "Voc\xEA n\xE3o pode se inscrever neste produto novamente.",
    "error_page.error_message_already_purchased": "Voc\xEA n\xE3o pode comprar este produto novamente.",
    "error_page.error_message_missing_email_error": "Email \xE9 necess\xE1rio para concluir a compra.",
    "error_page.error_message_network_error": "Erro de rede. Verifique sua conex\xE3o com a internet.",
    "error_page.error_message_error_charging_payment": "Pagamento falhou.",
    "error_page.error_message_error_setting_up_purchase": "Compra n\xE3o iniciada devido a um erro (c\xF3digo de erro: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "N\xE3o conseguimos verificar seu endere\xE7o de cobran\xE7a. Por favor, verifique se o c\xF3digo postal e o pa\xEDs est\xE3o corretos.",
    "error_page.error_message_unknown_error": "Ocorreu um erro desconhecido (c\xF3digo de erro: {{errorCode}}).",
    "error_page.button_try_again": "Tentar novamente",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% de desconto",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total a pagar hoje",
    "product_info.subscribe_to": "Subscrever",
    "payment_entry_page.trial_info": "Ap\xF3s o t\xE9rmino do seu per\xEDodo de avalia\xE7\xE3o, ser\xE1 cobrado o valor de {{price}} {{perFrequency}} a partir de {{renewalDate}}. Voc\xEA pode cancelar a qualquer momento antes disso.",
    "navbar_header.details": "Detalhes",
    "navbar_header.back_button": "Voltar",
    "pricing_dropdown.show_details": "Mostrar detalhes",
    "pricing_dropdown.hide_details": "Ocultar detalhes",
    "pricing_table.tax": "Imposto",
    "pricing_table.trial_ends": "Ap\xF3s o t\xE9rmino do per\xEDodo de avalia\xE7\xE3o, em {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total a pagar hoje",
    "pricing_table.total_excluding_tax": "Total sem impostos",
    "pricing_table.enter_billing_address_to_calculate": "Insira o endere\xE7o de cobran\xE7a para calcular",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Insira o estado ou o CEP para calcular",
    "pricing_table.enter_postal_code_to_calculate": "Insira o CEP para calcular",
    "error_page.error_message_invalid_email_error": "O endere\xE7o de e-mail {{email}} n\xE3o p\xF4de ser verificado. Por favor, forne\xE7a um endere\xE7o de e-mail v\xE1lido.",
    "payment_entry_page.button_payment_method": "Pagar {{formattedPrice}} com {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Pagar {{formattedPrice}}",
    "price_update.title": "Atualiza\xE7\xE3o de pre\xE7o",
    "price_update.base_message": "O pre\xE7o total foi atualizado com impostos com base no seu endere\xE7o de cobran\xE7a. Por favor, revise e tente novamente. Seu cart\xE3o s\xF3 ser\xE1 cobrado uma vez.",
    "price_update.trial_message": "O pre\xE7o da assinatura foi atualizado para incluir impostos com base no seu endere\xE7o de fatura\xE7\xE3o. O per\xEDodo de teste gratuito continua v\xE1lido. Por favor, verifique e tente novamente.",
    "payment_entry_page.express_checkout_divider": "OU PAGUE COM CART\xC3O",
    "error_page.trouble_accessing": "Se estiver com problemas para acessar sua compra, entre em contato com o suporte em ",
    "error_page.close_button_title": "Ir para {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Permiss\xE3o do Stripe em falta",
    "error_page.button_close": "Fechar",
    "error_page.error_message_stripe_invalid_tax_origin_address": "A compra falhou porque o endere\xE7o de origem fiscal \xE9 inv\xE1lido. Em produ\xE7\xE3o, as compras funcionar\xE3o sem impostos aplicados.",
    "error_page.error_message_stripe_tax_not_active": "A compra falhou porque o Stripe Tax n\xE3o est\xE1 ativado. Em produ\xE7\xE3o, as compras funcionar\xE3o sem impostos aplicados.",
    "error_page.error_only_in_sandbox": "Esta mensagem aparece apenas na sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "A compra falhou porque o aplicativo Stripe n\xE3o tem uma permiss\xE3o necess\xE1ria. Em produ\xE7\xE3o, as compras funcionar\xE3o sem impostos aplicados.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax n\xE3o est\xE1 ativo",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Endere\xE7o de origem fiscal inv\xE1lido",
    "apple_pay.free_trial": "Teste Gratuito"
  };
  var wc = {
    "periods.week": "{{amount}} s\u0103pt\u0103m\xE2n\u0103",
    "periods.month": "{{amount}} lun\u0103",
    "periods.year": "{{amount}} an",
    "periods.day": "{{amount}} zi",
    "periods.weekShort": "{{amount}}s\u0103pt",
    "periods.monthShort": "{{amount}}lun",
    "periods.yearShort": "{{amount}}an",
    "periods.dayShort": "{{amount}}z",
    "periods.lifetime": "pe via\u021B\u0103",
    "periods.weekPlural": "{{amount}} s\u0103pt\u0103m\xE2ni",
    "periods.monthPlural": "{{amount}} luni",
    "periods.yearPlural": "{{amount}} ani",
    "periods.dayPlural": "{{amount}} zile",
    "periods.weekFrequency": "s\u0103pt\u0103m\xE2nal",
    "periods.monthFrequency": "lunar",
    "periods.yearFrequency": "anual",
    "periods.dayFrequency": "zilnic",
    "periods.perWeekFrequency": "pe s\u0103pt\u0103m\xE2n\u0103",
    "periods.perMonthFrequency": "pe lun\u0103",
    "periods.perYearFrequency": "pe an",
    "periods.perDayFrequency": "pe zi",
    "periods.unknownFrequency": "necunoscut",
    "periods.weekFrequencyPlural": "la fiecare {{amount}} s\u0103pt\u0103m\xE2ni",
    "periods.monthFrequencyPlural": "la fiecare {{amount}} luni",
    "periods.yearFrequencyPlural": "la fiecare {{amount}} ani",
    "periods.dayFrequencyPlural": "la fiecare {{amount}} zile",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} perioad\u0103 de prob\u0103 gratuit\u0103",
    "product_info.price_after_free_trial": "Dup\u0103 terminarea perioadei de prob\u0103, pe {{renewalDate}}",
    "product_info.renewal_frequency": "Se re\xEEnnoie\u0219te {{frequency}}",
    "product_info.continues_until_cancelled": "Continu\u0103 p\xE2n\u0103 la anulare",
    "product_info.cancel_anytime": "Anulare oric\xE2nd",
    "payment_entry_page.payment_step_title": "Plata securizat\u0103 prin RevenueCat",
    "payment_entry_page.terms_info": "Prin furnizarea informa\u021Biilor dvs. despre card, permite\u021Bi aplica\u021Biei {{appName}} s\u0103 v\u0103 \xEEncarce cardul pentru pl\u0103\u021Bi viitoare, \xEEn conformitate cu termenii acesteia.",
    "payment_entry_page.button_pay": "Pl\u0103te\u0219te acum",
    "payment_entry_page.button_start_trial": "\xCEncepe perioada de prob\u0103",
    "success_page.purchase_successful": "Plata efectuat\u0103",
    "success_page.button_close": "Continu\u0103",
    "error_page.if_error_persists": "Dac\u0103 eroarea persist\u0103, v\u0103 rug\u0103m s\u0103 contacta\u021Bi ",
    "error_page.error_title_already_subscribed": "Sunte\u021Bi deja abonat la {{productTitle}}",
    "error_page.error_title_already_purchased": "A\u021Bi achizi\u021Bionat deja {{productTitle}}",
    "error_page.error_title_other_errors": "A ap\u0103rut o eroare",
    "error_page.error_message_already_subscribed": "Nu v\u0103 pute\u021Bi abona din nou la acest produs.",
    "error_page.error_message_already_purchased": "Nu pute\u021Bi achizi\u021Biona din nou acest produs.",
    "error_page.error_message_missing_email_error": "Adresa de e-mail este necesar\u0103 pentru a finaliza achizi\u021Bia.",
    "error_page.error_message_network_error": "Eroare de re\u021Bea. Verifica\u021Bi conexiunea la internet.",
    "error_page.error_message_error_charging_payment": "Plata a e\u0219uat.",
    "error_page.error_message_error_setting_up_purchase": "Achizi\u021Bia nu a putut fi ini\u021Biat\u0103 din cauza unei erori (cod de eroare: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nu am putut verifica adresa de facturare. V\u0103 rug\u0103m s\u0103 verifica\u021Bi dac\u0103 codul po\u0219tal \u0219i \u021Bara sunt corecte.",
    "error_page.error_message_unknown_error": "A ap\u0103rut o eroare necunoscut\u0103 (cod de eroare: {{errorCode}}).",
    "error_page.button_try_again": "\xCEncearc\u0103 din nou",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% reducere",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Total de plat\u0103 ast\u0103zi",
    "product_info.subscribe_to": "Abonare la",
    "payment_entry_page.trial_info": "Dup\u0103 ce perioada de prob\u0103 se termin\u0103, ve\u021Bi fi taxat cu {{price}} {{perFrequency}} \xEEncep\xE2nd cu {{renewalDate}}. Pute\u021Bi anula oric\xE2nd \xEEnainte de aceast\u0103 dat\u0103.",
    "navbar_header.details": "Detalii",
    "navbar_header.back_button": "\xCEnapoi",
    "pricing_dropdown.show_details": "Arat\u0103 detalii",
    "pricing_dropdown.hide_details": "Ascunde detalii",
    "pricing_table.tax": "Tax\u0103",
    "pricing_table.trial_ends": "Dup\u0103 ce perioada de prob\u0103 se termin\u0103, pe {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total de pl\u0103tit ast\u0103zi",
    "pricing_table.total_excluding_tax": "Total f\u0103r\u0103 taxe",
    "pricing_table.enter_billing_address_to_calculate": "Introduce\u021Bi adresa de facturare pentru a calcula",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Introduce\u021Bi statul sau codul po\u0219tal pentru a calcula",
    "pricing_table.enter_postal_code_to_calculate": "Introduce\u021Bi codul po\u0219tal pentru a calcula",
    "error_page.error_message_invalid_email_error": "Adresa de e-mail {{email}} nu a putut fi verificat\u0103. V\u0103 rug\u0103m s\u0103 furniza\u021Bi o adres\u0103 de e-mail valid\u0103.",
    "payment_entry_page.button_payment_method": "Pl\u0103te\u0219te {{formattedPrice}} cu {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Pl\u0103te\u0219te {{formattedPrice}}",
    "price_update.title": "Actualizare pre\u021B",
    "price_update.base_message": "Pre\u021Bul total a fost actualizat cu taxe, \xEEn func\u021Bie de adresa dumneavoastr\u0103 de facturare. V\u0103 rug\u0103m s\u0103 revizui\u021Bi \u0219i s\u0103 \xEEncerca\u021Bi din nou. Cardul dumneavoastr\u0103 va fi debitat o singur\u0103 dat\u0103.",
    "price_update.trial_message": "Pre\u021Bul abonamentului a fost actualizat pentru a include taxele bazate pe adresa dvs. de facturare. Perioada de prob\u0103 gratuit\u0103 r\u0103m\xE2ne valabil\u0103. V\u0103 rug\u0103m s\u0103 verifica\u021Bi \u0219i s\u0103 \xEEncerca\u021Bi din nou.",
    "payment_entry_page.express_checkout_divider": "SAU PL\u0102TE\u0218TE CU CARDUL",
    "error_page.trouble_accessing": "Dac\u0103 \xEEnt\xE2mpini probleme \xEEn accesarea achizi\u021Biei tale, contacteaz\u0103 serviciul de asisten\u021B\u0103 la ",
    "error_page.close_button_title": "Mergi la {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Permisiune Stripe lips\u0103",
    "error_page.button_close": "\xCEnchide",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Achizi\u021Bia a e\u0219uat deoarece adresa de origine fiscal\u0103 este nevalid\u0103. \xCEn produc\u021Bie, achizi\u021Biile vor func\u021Biona f\u0103r\u0103 taxe aplicate.",
    "error_page.error_message_stripe_tax_not_active": "Achizi\u021Bia a e\u0219uat deoarece Stripe Tax nu este activat. \xCEn produc\u021Bie, achizi\u021Biile vor func\u021Biona f\u0103r\u0103 taxe aplicate.",
    "error_page.error_only_in_sandbox": "Acest mesaj apare doar \xEEn sandbox.",
    "error_page.error_message_stripe_missing_required_permission": "Achizi\u021Bia a e\u0219uat deoarece aplica\u021Biei Stripe \xEEi lipse\u0219te o permisiune necesar\u0103. \xCEn produc\u021Bie, achizi\u021Biile vor func\u021Biona f\u0103r\u0103 taxe aplicate.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax nu este activ",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Adres\u0103 de origine fiscal\u0103 Stripe nevalid\u0103",
    "apple_pay.free_trial": "Perioad\u0103 de prob\u0103 gratuit\u0103"
  };
  var xc = {
    "periods.week": "{{amount}} \u043D\u0435\u0434\u0435\u043B\u044F",
    "periods.month": "{{amount}} \u043C\u0435\u0441\u044F\u0446",
    "periods.year": "{{amount}} \u0433\u043E\u0434",
    "periods.day": "{{amount}} \u0434\u0435\u043D\u044C",
    "periods.weekShort": "{{amount}}\u043D\u0435\u0434",
    "periods.monthShort": "{{amount}}\u043C\u0435\u0441",
    "periods.yearShort": "{{amount}}\u0433",
    "periods.dayShort": "{{amount}}\u0434",
    "periods.lifetime": "\u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E",
    "periods.weekPlural": "{{amount}} \u043D\u0435\u0434\u0435\u043B\u044C",
    "periods.monthPlural": "{{amount}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
    "periods.yearPlural": "{{amount}} \u043B\u0435\u0442",
    "periods.dayPlural": "{{amount}} \u0434\u043D\u0435\u0439",
    "periods.weekFrequency": "\u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u043E",
    "periods.monthFrequency": "\u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
    "periods.yearFrequency": "\u0435\u0436\u0435\u0433\u043E\u0434\u043D\u043E",
    "periods.dayFrequency": "\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E",
    "periods.perWeekFrequency": "\u0432 \u043D\u0435\u0434\u0435\u043B\u044E",
    "periods.perMonthFrequency": "\u0432 \u043C\u0435\u0441\u044F\u0446",
    "periods.perYearFrequency": "\u0432 \u0433\u043E\u0434",
    "periods.perDayFrequency": "\u0432 \u0434\u0435\u043D\u044C",
    "periods.unknownFrequency": "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",
    "periods.weekFrequencyPlural": "\u043A\u0430\u0436\u0434\u044B\u0435 {{amount}} \u043D\u0435\u0434\u0435\u043B\u044C",
    "periods.monthFrequencyPlural": "\u043A\u0430\u0436\u0434\u044B\u0435 {{amount}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
    "periods.yearFrequencyPlural": "\u043A\u0430\u0436\u0434\u044B\u0435 {{amount}} \u043B\u0435\u0442",
    "periods.dayFrequencyPlural": "\u043A\u0430\u0436\u0434\u044B\u0435 {{amount}} \u0434\u043D\u0435\u0439",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0431\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F",
    "product_info.price_after_free_trial": "\u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430, {{renewalDate}}",
    "product_info.renewal_frequency": "\u041F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u0435\u0442\u0441\u044F {{frequency}}",
    "product_info.continues_until_cancelled": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u043E\u0442\u043C\u0435\u043D\u044B",
    "product_info.cancel_anytime": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",
    "payment_entry_page.payment_step_title": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 RevenueCat",
    "payment_entry_page.terms_info": "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0448\u0435\u0439 \u043A\u0430\u0440\u0442\u044B, \u0432\u044B \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0435 {{appName}} \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0441 \u0432\u0430\u0448\u0435\u0439 \u043A\u0430\u0440\u0442\u044B \u0434\u043B\u044F \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438.",
    "payment_entry_page.button_pay": "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441",
    "payment_entry_page.button_start_trial": "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434",
    "success_page.purchase_successful": "\u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
    "success_page.button_close": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
    "error_page.if_error_persists": "\u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 ",
    "error_page.error_title_already_subscribed": "\u0412\u044B \u0443\u0436\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 {{productTitle}}",
    "error_page.error_title_already_purchased": "\u0412\u044B \u0443\u0436\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 {{productTitle}}",
    "error_page.error_title_other_errors": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
    "error_page.error_message_already_subscribed": "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E.",
    "error_page.error_message_already_purchased": "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E.",
    "error_page.error_message_missing_email_error": "\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.",
    "error_page.error_message_network_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435.",
    "error_page.error_message_error_charging_payment": "\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430.",
    "error_page.error_message_error_setting_up_purchase": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430 \u043D\u0430\u0447\u0430\u0442\u0430 \u0438\u0437-\u0437\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 (\u043A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\u041C\u044B \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0438 \u0441\u0442\u0440\u0430\u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.",
    "error_page.error_message_unknown_error": "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 (\u043A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: {{errorCode}}).",
    "error_page.button_try_again": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u0441\u043A\u0438\u0434\u043A\u0438",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u0412\u0441\u0435\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "product_info.subscribe_to": "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    "payment_entry_page.trial_info": "\u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u0441 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u0437\u0438\u043C\u0430\u0442\u044C\u0441\u044F {{price}} {{perFrequency}} \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 {{renewalDate}}. \u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.",
    "navbar_header.details": "\u0414\u0435\u0442\u0430\u043B\u0438",
    "navbar_header.back_button": "\u041D\u0430\u0437\u0430\u0434",
    "pricing_dropdown.show_details": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",
    "pricing_dropdown.hide_details": "\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",
    "pricing_table.tax": "\u041D\u0430\u043B\u043E\u0433",
    "pricing_table.trial_ends": "\u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "pricing_table.total_excluding_tax": "\u0418\u0442\u043E\u0433\u043E \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u043D\u0430\u043B\u043E\u0433\u0430",
    "pricing_table.enter_billing_address_to_calculate": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0448\u0442\u0430\u0442 \u0438\u043B\u0438 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430",
    "pricing_table.enter_postal_code_to_calculate": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430",
    "error_page.error_message_invalid_email_error": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B {{email}}. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.",
    "payment_entry_page.button_payment_method": "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C {{formattedPrice}} \u0447\u0435\u0440\u0435\u0437 {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C {{formattedPrice}}",
    "price_update.title": "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u044B",
    "price_update.base_message": "\u041E\u0431\u0449\u0430\u044F \u0446\u0435\u043D\u0430 \u0431\u044B\u043B\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043D\u0430\u043B\u043E\u0433\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443. \u0421 \u0432\u0430\u0448\u0435\u0439 \u043A\u0430\u0440\u0442\u044B \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437.",
    "price_update.trial_message": "\u0426\u0435\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u0431\u044B\u043B\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430. \u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.",
    "payment_entry_page.express_checkout_divider": "\u0418\u041B\u0418 \u041E\u041F\u041B\u0410\u0422\u0418\u0422\u0415 \u041A\u0410\u0420\u0422\u041E\u0419",
    "error_page.trouble_accessing": "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C \u043A \u0432\u0430\u0448\u0435\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0435, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ",
    "error_page.close_button_title": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 Stripe",
    "error_page.button_close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C, \u0442\u0430\u043A \u043A\u0430\u043A \u0430\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u0430 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D. \u0412 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432.",
    "error_page.error_message_stripe_tax_not_active": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C, \u0442\u0430\u043A \u043A\u0430\u043A Stripe Tax \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D. \u0412 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432.",
    "error_page.error_only_in_sandbox": "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0435.",
    "error_page.error_message_stripe_missing_required_permission": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C, \u0442\u0430\u043A \u043A\u0430\u043A \u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Stripe \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435. \u0412 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u0435\u043D",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u0430",
    "apple_pay.free_trial": "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0431\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F"
  };
  var Pc = {
    "periods.week": "{{amount}} t\xFD\u017Ede\u0148",
    "periods.month": "{{amount}} mesiac",
    "periods.year": "{{amount}} rok",
    "periods.day": "{{amount}} de\u0148",
    "periods.weekShort": "{{amount}}t\xFD\u017E",
    "periods.monthShort": "{{amount}}mes",
    "periods.yearShort": "{{amount}}rok",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "do\u017Eivotne",
    "periods.weekPlural": "{{amount}} t\xFD\u017Ed\u0148ov",
    "periods.monthPlural": "{{amount}} mesiacov",
    "periods.yearPlural": "{{amount}} rokov",
    "periods.dayPlural": "{{amount}} dn\xED",
    "periods.weekFrequency": "t\xFD\u017Edenne",
    "periods.monthFrequency": "mesa\u010Dne",
    "periods.yearFrequency": "ro\u010Dne",
    "periods.dayFrequency": "denne",
    "periods.perWeekFrequency": "t\xFD\u017Edenne",
    "periods.perMonthFrequency": "mesa\u010Dne",
    "periods.perYearFrequency": "ro\u010Dne",
    "periods.perDayFrequency": "denne",
    "periods.unknownFrequency": "nezn\xE1me",
    "periods.weekFrequencyPlural": "ka\u017Ed\xFDch {{amount}} t\xFD\u017Ed\u0148ov",
    "periods.monthFrequencyPlural": "ka\u017Ed\xFDch {{amount}} mesiacov",
    "periods.yearFrequencyPlural": "ka\u017Ed\xFDch {{amount}} rokov",
    "periods.dayFrequencyPlural": "ka\u017Ed\xFDch {{amount}} dn\xED",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} bezplatn\xE9 sk\xFA\u0161obn\xE9 obdobie",
    "product_info.price_after_free_trial": "Po skon\u010Den\xED sk\xFA\u0161obn\xE9ho obdobia, d\u0148a {{renewalDate}}",
    "product_info.renewal_frequency": "Obnovuje sa {{frequency}}",
    "product_info.continues_until_cancelled": "Pokra\u010Duje, k\xFDm sa nezru\u0161\xED",
    "product_info.cancel_anytime": "Kedyko\u013Evek zru\u0161i\u0165",
    "payment_entry_page.payment_step_title": "Bezpe\u010Dn\xFD n\xE1kup prostredn\xEDctvom RevenueCat",
    "payment_entry_page.terms_info": "Poskytnut\xEDm \xFAdajov o va\u0161ej karte povo\u013Eujete {{appName}} \xFA\u010Dtova\u0165 va\u0161u kartu za bud\xFAce platby v s\xFAlade s ich podmienkami.",
    "payment_entry_page.button_pay": "Zaplati\u0165 teraz",
    "payment_entry_page.button_start_trial": "Spusti\u0165 sk\xFA\u0161obn\xE9 obdobie",
    "success_page.purchase_successful": "Platba dokon\u010Den\xE1",
    "success_page.button_close": "Pokra\u010Dova\u0165",
    "error_page.if_error_persists": "Ak chyba pretrv\xE1va, kontaktujte ",
    "error_page.error_title_already_subscribed": "U\u017E ste si predplatili {{productTitle}}",
    "error_page.error_title_already_purchased": "U\u017E ste si zak\xFApili {{productTitle}}",
    "error_page.error_title_other_errors": "Nie\u010Do sa pokazilo",
    "error_page.error_message_already_subscribed": "Na tento produkt sa nem\xF4\u017Eete znova prihl\xE1si\u0165 na odber.",
    "error_page.error_message_already_purchased": "Tento produkt si nem\xF4\u017Eete znova zak\xFApi\u0165.",
    "error_page.error_message_missing_email_error": "Na dokon\u010Denie n\xE1kupu je potrebn\xFD e-mail.",
    "error_page.error_message_network_error": "Chyba siete. Skontrolujte svoje internetov\xE9 pripojenie.",
    "error_page.error_message_error_charging_payment": "Platba zlyhala.",
    "error_page.error_message_error_setting_up_purchase": "N\xE1kup sa nespustil kv\xF4li chybe (k\xF3d chyby: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Nepodarilo sa n\xE1m overi\u0165 va\u0161u faktura\u010Dn\xFA adresu. Skontrolujte, pros\xEDm, \u010Di je PS\u010C a krajina spr\xE1vne.",
    "error_page.error_message_unknown_error": "Vyskytla sa nezn\xE1ma chyba (k\xF3d chyby: {{errorCode}}).",
    "error_page.button_try_again": "Sk\xFAsi\u0165 znova",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% z\u013Eava",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Celkov\xE1 suma splatn\xE1 dnes",
    "product_info.subscribe_to": "Prihl\xE1si\u0165 sa na odber",
    "payment_entry_page.trial_info": "Po skon\u010Den\xED sk\xFA\u0161obn\xE9ho obdobia v\xE1m bude \xFA\u010Dtovan\xE1 suma {{price}} {{perFrequency}} po\u010Dn\xFAc d\u0148om {{renewalDate}}. Predt\xFDm m\xF4\u017Eete kedyko\u013Evek zru\u0161i\u0165.",
    "navbar_header.details": "Podrobnosti",
    "navbar_header.back_button": "Sp\xE4\u0165",
    "pricing_dropdown.show_details": "Zobrazi\u0165 podrobnosti",
    "pricing_dropdown.hide_details": "Skry\u0165 podrobnosti",
    "pricing_table.tax": "Da\u0148",
    "pricing_table.trial_ends": "Po skon\u010Den\xED sk\xFA\u0161obnej verzie, d\u0148a {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Celkov\xE1 suma splatn\xE1 dnes",
    "pricing_table.total_excluding_tax": "Celkom bez dane",
    "pricing_table.enter_billing_address_to_calculate": "Zadajte faktura\u010Dn\xFA adresu pre v\xFDpo\u010Det",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Zadajte \u0161t\xE1t alebo PS\u010C pre v\xFDpo\u010Det",
    "pricing_table.enter_postal_code_to_calculate": "Zadajte PS\u010C pre v\xFDpo\u010Det",
    "error_page.error_message_invalid_email_error": "E-mailov\xE1 adresa {{email}} sa nedala overi\u0165. Zadajte platn\xFA e-mailov\xFA adresu.",
    "payment_entry_page.button_payment_method": "Zaplati\u0165 sumu {{formattedPrice}} pomocou {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Zaplati\u0165 {{formattedPrice}}",
    "price_update.title": "Aktualiz\xE1cia ceny",
    "price_update.base_message": "Celkov\xE1 cena bola aktualizovan\xE1 o da\u0148 na z\xE1klade va\u0161ej faktura\u010Dnej adresy. Skontrolujte to a sk\xFAste znova. Va\u0161a karta bude za\u0165a\u017Een\xE1 iba raz.",
    "price_update.trial_message": "Cena predplatn\xE9ho bola aktualizovan\xE1 o da\u0148e na z\xE1klade va\u0161ej faktura\u010Dnej adresy. Bezplatn\xE1 sk\xFA\u0161obn\xE1 doba st\xE1le plat\xED. Pros\xEDm, skontrolujte a sk\xFAste znova.",
    "payment_entry_page.express_checkout_divider": "ALEBO ZAPLATI\u0164 KARTOU",
    "error_page.trouble_accessing": "Ak m\xE1te probl\xE9my s pr\xEDstupom k svojmu n\xE1kupu, kontaktujte podporu na ",
    "error_page.close_button_title": "Prejs\u0165 na {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Ch\xFDbaj\xFAce povolenie Stripe",
    "error_page.button_close": "Zavrie\u0165",
    "error_page.error_message_stripe_invalid_tax_origin_address": "N\xE1kup sa nepodaril, preto\u017Ee adresa p\xF4vodu dane je neplatn\xE1. V produk\u010Dnom prostred\xED bud\xFA n\xE1kupy fungova\u0165 bez uplatnenia dan\xED.",
    "error_page.error_message_stripe_tax_not_active": "N\xE1kup sa nepodaril, preto\u017Ee Stripe Tax nie je povolen\xFD. V produk\u010Dnom prostred\xED bud\xFA n\xE1kupy fungova\u0165 bez uplatnenia dan\xED.",
    "error_page.error_only_in_sandbox": "T\xE1to spr\xE1va sa zobrazuje iba v testovacom prostred\xED (sandbox).",
    "error_page.error_message_stripe_missing_required_permission": "N\xE1kup sa nepodaril, preto\u017Ee aplik\xE1cii Stripe ch\xFDba po\u017Eadovan\xE9 povolenie. V produk\u010Dnom prostred\xED bud\xFA n\xE1kupy fungova\u0165 bez uplatnenia dan\xED.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax nie je akt\xEDvny",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Neplatn\xE1 adresa p\xF4vodu dane",
    "apple_pay.free_trial": "Sk\xFA\u0161obn\xE1 verzia zdarma"
  };
  var Sc = {
    "periods.week": "{{amount}} vecka",
    "periods.month": "{{amount}} m\xE5nad",
    "periods.year": "{{amount}} \xE5r",
    "periods.day": "{{amount}} dag",
    "periods.weekShort": "{{amount}}v",
    "periods.monthShort": "{{amount}}m\xE5n",
    "periods.yearShort": "{{amount}}\xE5r",
    "periods.dayShort": "{{amount}}d",
    "periods.lifetime": "livstid",
    "periods.weekPlural": "{{amount}} veckor",
    "periods.monthPlural": "{{amount}} m\xE5nader",
    "periods.yearPlural": "{{amount}} \xE5r",
    "periods.dayPlural": "{{amount}} dagar",
    "periods.weekFrequency": "veckovis",
    "periods.monthFrequency": "m\xE5nadsvis",
    "periods.yearFrequency": "\xE5rligen",
    "periods.dayFrequency": "dagligen",
    "periods.perWeekFrequency": "per vecka",
    "periods.perMonthFrequency": "per m\xE5nad",
    "periods.perYearFrequency": "per \xE5r",
    "periods.perDayFrequency": "per dag",
    "periods.unknownFrequency": "ok\xE4nd",
    "periods.weekFrequencyPlural": "varje {{amount}} veckor",
    "periods.monthFrequencyPlural": "varje {{amount}} m\xE5nader",
    "periods.yearFrequencyPlural": "varje {{amount}} \xE5r",
    "periods.dayFrequencyPlural": "varje {{amount}} dagar",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} gratis provperiod",
    "product_info.price_after_free_trial": "Efter provperioden slutar, den {{renewalDate}}",
    "product_info.renewal_frequency": "F\xF6rnyas {{frequency}}",
    "product_info.continues_until_cancelled": "G\xE4ller tills avbokad",
    "product_info.cancel_anytime": "Avboka n\xE4r som helst",
    "payment_entry_page.payment_step_title": "S\xE4ker betalning via RevenueCat",
    "payment_entry_page.terms_info": "Genom att ange dina kortuppgifter till\xE5ter du {{appName}} att debitera ditt kort f\xF6r framtida betalningar i enlighet med deras villkor.",
    "payment_entry_page.button_pay": "Betala nu",
    "payment_entry_page.button_start_trial": "Starta provperiod",
    "success_page.purchase_successful": "Betalningen \xE4r klar",
    "success_page.button_close": "Forts\xE4tt",
    "error_page.if_error_persists": "Om felet kvarst\xE5r, v\xE4nligen kontakta ",
    "error_page.error_title_already_subscribed": "Du prenumererar redan p\xE5 {{productTitle}}",
    "error_page.error_title_already_purchased": "Du har redan k\xF6pt {{productTitle}}",
    "error_page.error_title_other_errors": "N\xE5got gick fel",
    "error_page.error_message_already_subscribed": "Du kan inte prenumerera p\xE5 den h\xE4r produkten igen.",
    "error_page.error_message_already_purchased": "Du kan inte k\xF6pa den h\xE4r produkten igen.",
    "error_page.error_message_missing_email_error": "E-post kr\xE4vs f\xF6r att slutf\xF6ra k\xF6pet.",
    "error_page.error_message_network_error": "N\xE4tverksfel. Kontrollera din internetanslutning.",
    "error_page.error_message_error_charging_payment": "Betalningen misslyckades.",
    "error_page.error_message_error_setting_up_purchase": "K\xF6p kunde inte startas p\xE5 grund av ett fel (felkod: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Vi kunde inte verifiera din faktureringsadress. Kontrollera att postnummer och land \xE4r korrekta.",
    "error_page.error_message_unknown_error": "Ett ok\xE4nt fel intr\xE4ffade (felkod: {{errorCode}}).",
    "error_page.button_try_again": "F\xF6rs\xF6k igen",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% rabatt",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Totalt att betala idag",
    "product_info.subscribe_to": "Prenumerera p\xE5",
    "payment_entry_page.trial_info": "Efter din provperiod avslutas debiteras du {{price}} {{perFrequency}} fr\xE5n och med {{renewalDate}}. Du kan alltid avbryta innan dess.",
    "navbar_header.details": "Detaljer",
    "navbar_header.back_button": "Tillbaka",
    "pricing_dropdown.show_details": "Visa detaljer",
    "pricing_dropdown.hide_details": "D\xF6lj detaljer",
    "pricing_table.tax": "Moms",
    "pricing_table.trial_ends": "Efter provperiodens slut, den {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "Total summa att betala idag",
    "pricing_table.total_excluding_tax": "Totalt exklusive moms",
    "pricing_table.enter_billing_address_to_calculate": "Ange faktureringsadress f\xF6r att ber\xE4kna",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Ange delstat eller postnummer f\xF6r att ber\xE4kna",
    "pricing_table.enter_postal_code_to_calculate": "Ange postnummer f\xF6r att ber\xE4kna",
    "error_page.error_message_invalid_email_error": "E-postadressen {{email}} kunde inte verifieras. Ange en giltig e-postadress.",
    "payment_entry_page.button_payment_method": "Betala {{formattedPrice}} med {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Betala {{formattedPrice}}",
    "price_update.title": "Prisuppdatering",
    "price_update.base_message": "Det totala priset har uppdaterats med moms baserat p\xE5 din faktureringsadress. Granska och f\xF6rs\xF6k igen. Ditt kort kommer endast att debiteras en g\xE5ng.",
    "price_update.trial_message": "Prenumerationspriset har uppdaterats f\xF6r att inkludera skatter baserat p\xE5 din fakturaadress. Den kostnadsfria provperioden g\xE4ller fortfarande. Kontrollera och f\xF6rs\xF6k igen.",
    "payment_entry_page.express_checkout_divider": "ELLER BETALA MED KORT",
    "error_page.trouble_accessing": "Om du har problem med att komma \xE5t ditt k\xF6p, kontakta support p\xE5 ",
    "error_page.close_button_title": "G\xE5 till {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Saknar Stripe-beh\xF6righet",
    "error_page.button_close": "St\xE4ng",
    "error_page.error_message_stripe_invalid_tax_origin_address": "K\xF6pet misslyckades eftersom skatteursprungsadressen \xE4r ogiltig. I produktion kommer k\xF6p att fungera utan att skatter till\xE4mpas.",
    "error_page.error_message_stripe_tax_not_active": "K\xF6pet misslyckades eftersom Stripe Tax inte \xE4r aktiverat. I produktion kommer k\xF6p att fungera utan att skatter till\xE4mpas.",
    "error_page.error_only_in_sandbox": "Det h\xE4r meddelandet visas bara i sandl\xE5dan.",
    "error_page.error_message_stripe_missing_required_permission": "K\xF6pet misslyckades eftersom Stripe-appen saknar en n\xF6dv\xE4ndig beh\xF6righet. I produktion kommer k\xF6p att fungera utan att skatter till\xE4mpas.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax \xE4r inte aktivt",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ogiltig skatteursprungsadress",
    "apple_pay.free_trial": "Gratis provperiod"
  };
  var Ec = {
    "periods.week": "{{amount}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.month": "{{amount}} \u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.year": "{{amount}} \u0E1B\u0E35",
    "periods.day": "{{amount}} \u0E27\u0E31\u0E19",
    "periods.weekShort": "{{amount}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.monthShort": "{{amount}} \u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.yearShort": "{{amount}} \u0E1B\u0E35",
    "periods.dayShort": "{{amount}} \u0E27\u0E31\u0E19",
    "periods.lifetime": "\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E35\u0E1E",
    "periods.weekPlural": "{{amount}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.monthPlural": "{{amount}} \u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.yearPlural": "{{amount}} \u0E1B\u0E35",
    "periods.dayPlural": "{{amount}} \u0E27\u0E31\u0E19",
    "periods.weekFrequency": "\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.monthFrequency": "\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.yearFrequency": "\u0E23\u0E32\u0E22\u0E1B\u0E35",
    "periods.dayFrequency": "\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",
    "periods.perWeekFrequency": "\u0E15\u0E48\u0E2D\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.perMonthFrequency": "\u0E15\u0E48\u0E2D\u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.perYearFrequency": "\u0E15\u0E48\u0E2D\u0E1B\u0E35",
    "periods.perDayFrequency": "\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19",
    "periods.unknownFrequency": "\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01",
    "periods.weekFrequencyPlural": "\u0E17\u0E38\u0E01\u0E46 {{amount}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
    "periods.monthFrequencyPlural": "\u0E17\u0E38\u0E01\u0E46 {{amount}} \u0E40\u0E14\u0E37\u0E2D\u0E19",
    "periods.yearFrequencyPlural": "\u0E17\u0E38\u0E01\u0E46 {{amount}} \u0E1B\u0E35",
    "periods.dayFrequencyPlural": "\u0E17\u0E38\u0E01\u0E46 {{amount}} \u0E27\u0E31\u0E19",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1F\u0E23\u0E35",
    "product_info.price_after_free_trial": "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E01\u0E32\u0E23\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49 \u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 {{renewalDate}}",
    "product_info.renewal_frequency": "\u0E15\u0E48\u0E2D\u0E2D\u0E32\u0E22\u0E38 {{frequency}}",
    "product_info.continues_until_cancelled": "\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    "product_info.cancel_anytime": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E40\u0E27\u0E25\u0E32",
    "payment_entry_page.payment_step_title": "\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E42\u0E14\u0E22 RevenueCat",
    "payment_entry_page.terms_info": "\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E31\u0E15\u0E23\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E04\u0E38\u0E13\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49 {{appName}} \u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E08\u0E32\u0E01\u0E1A\u0E31\u0E15\u0E23\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E43\u0E19\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32",
    "payment_entry_page.button_pay": "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49",
    "payment_entry_page.button_start_trial": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49",
    "success_page.purchase_successful": "\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
    "success_page.button_close": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D",
    "error_page.if_error_persists": "\u0E2B\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E22\u0E31\u0E07\u0E04\u0E07\u0E2D\u0E22\u0E39\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D ",
    "error_page.error_title_already_subscribed": "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 {{productTitle}} \u0E41\u0E25\u0E49\u0E27",
    "error_page.error_title_already_purchased": "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E0B\u0E37\u0E49\u0E2D {{productTitle}} \u0E41\u0E25\u0E49\u0E27",
    "error_page.error_title_other_errors": "\u0E21\u0E35\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",
    "error_page.error_message_already_subscribed": "\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01",
    "error_page.error_message_already_purchased": "\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E37\u0E49\u0E2D\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01",
    "error_page.error_message_missing_email_error": "\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
    "error_page.error_message_network_error": "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    "error_page.error_message_error_charging_payment": "\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27",
    "error_page.error_message_error_setting_up_purchase": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E44\u0E14\u0E49\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14 (\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: {{errorCode}})",
    "error_page.error_message_invalid_tax_location": "\u0E40\u0E23\u0E32\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E2D\u0E01\u0E43\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E2B\u0E19\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35\u0E22\u0E4C\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
    "error_page.error_message_unknown_error": "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 (\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: {{errorCode}})",
    "error_page.button_try_again": "\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u0E25\u0E14",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49",
    "product_info.subscribe_to": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",
    "payment_entry_page.trial_info": "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E0A\u0E48\u0E27\u0E07\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E25\u0E07 \u0E04\u0E38\u0E13\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19 {{price}} {{perFrequency}} \u0E42\u0E14\u0E22\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 {{renewalDate}} \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E40\u0E27\u0E25\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E49\u0E19",
    "navbar_header.details": "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
    "navbar_header.back_button": "\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A",
    "pricing_dropdown.show_details": "\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
    "pricing_dropdown.hide_details": "\u0E0B\u0E48\u0E2D\u0E19\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
    "pricing_table.tax": "\u0E20\u0E32\u0E29\u0E35",
    "pricing_table.trial_ends": "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E0A\u0E48\u0E27\u0E07\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49",
    "pricing_table.total_excluding_tax": "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E20\u0E32\u0E29\u0E35",
    "pricing_table.enter_billing_address_to_calculate": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E33\u0E19\u0E27\u0E13",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0E43\u0E2A\u0E48\u0E23\u0E31\u0E10\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35\u0E22\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E33\u0E19\u0E27\u0E13",
    "pricing_table.enter_postal_code_to_calculate": "\u0E43\u0E2A\u0E48\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35\u0E22\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E33\u0E19\u0E27\u0E13",
    "error_page.error_message_invalid_email_error": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25 {{email}} \u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E23\u0E30\u0E1A\u0E38\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
    "payment_entry_page.button_payment_method": "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 {{formattedPrice}} \u0E14\u0E49\u0E27\u0E22 {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 {{formattedPrice}}",
    "price_update.title": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E23\u0E32\u0E04\u0E32",
    "price_update.base_message": "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E20\u0E32\u0E29\u0E35\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E1A\u0E31\u0E15\u0E23\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
    "price_update.trial_message": "\u0E23\u0E32\u0E04\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E27\u0E21\u0E20\u0E32\u0E29\u0E35\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E23\u0E30\u0E22\u0E30\u0E40\u0E27\u0E25\u0E32\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1F\u0E23\u0E35\u0E22\u0E31\u0E07\u0E04\u0E07\u0E21\u0E35\u0E1C\u0E25 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
    "payment_entry_page.express_checkout_divider": "\u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E33\u0E23\u0E30\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E15\u0E23",
    "error_page.trouble_accessing": "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E21\u0E35\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1D\u0E48\u0E32\u0E22\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E17\u0E35\u0E48 ",
    "error_page.close_button_title": "\u0E44\u0E1B\u0E17\u0E35\u0E48 {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u0E02\u0E32\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C Stripe \u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19",
    "error_page.button_close": "\u0E1B\u0E34\u0E14",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E49\u0E19\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E35\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E43\u0E19\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E20\u0E32\u0E29\u0E35",
    "error_page.error_message_stripe_tax_not_active": "\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 Stripe Tax \u0E43\u0E19\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E20\u0E32\u0E29\u0E35",
    "error_page.error_only_in_sandbox": "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E08\u0E30\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E43\u0E19 sandbox \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
    "error_page.error_message_stripe_missing_required_permission": "\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E41\u0E2D\u0E1B Stripe \u0E02\u0E32\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E43\u0E19\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E20\u0E32\u0E29\u0E35",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax \u0E44\u0E21\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E49\u0E19\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E35\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
    "apple_pay.free_trial": "\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1F\u0E23\u0E35"
  };
  var Tc = {
    "periods.week": "{{amount}} hafta",
    "periods.month": "{{amount}} ay",
    "periods.year": "{{amount}} y\u0131l",
    "periods.day": "{{amount}} g\xFCn",
    "periods.weekShort": "{{amount}}hf",
    "periods.monthShort": "{{amount}}ay",
    "periods.yearShort": "{{amount}}yl",
    "periods.dayShort": "{{amount}}g",
    "periods.lifetime": "\xF6m\xFCr boyu",
    "periods.weekPlural": "{{amount}} hafta",
    "periods.monthPlural": "{{amount}} ay",
    "periods.yearPlural": "{{amount}} y\u0131l",
    "periods.dayPlural": "{{amount}} g\xFCn",
    "periods.weekFrequency": "haftal\u0131k",
    "periods.monthFrequency": "ayl\u0131k",
    "periods.yearFrequency": "y\u0131ll\u0131k",
    "periods.dayFrequency": "g\xFCnl\xFCk",
    "periods.perWeekFrequency": "haftada",
    "periods.perMonthFrequency": "ayda",
    "periods.perYearFrequency": "y\u0131lda",
    "periods.perDayFrequency": "g\xFCnde",
    "periods.unknownFrequency": "bilinmiyor",
    "periods.weekFrequencyPlural": "her {{amount}} haftada",
    "periods.monthFrequencyPlural": "her {{amount}} ayda",
    "periods.yearFrequencyPlural": "her {{amount}} y\u0131lda",
    "periods.dayFrequencyPlural": "her {{amount}} g\xFCnde",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \xFCcretsiz deneme",
    "product_info.price_after_free_trial": "Deneme s\xFCresi sona erdi\u011Finde, {{renewalDate}} tarihinde",
    "product_info.renewal_frequency": "{{frequency}} s\u0131kl\u0131\u011F\u0131nda yenilenir",
    "product_info.continues_until_cancelled": "\u0130ptal edilene kadar devam eder",
    "product_info.cancel_anytime": "\u0130stedi\u011Finiz zaman iptal edebilirsiniz",
    "payment_entry_page.payment_step_title": "RevenueCat ile g\xFCvenli \xF6deme",
    "payment_entry_page.terms_info": "Kart bilgilerinizi vererek, {{appName}}'nin \u015Fartlar\u0131na uygun olarak gelecekteki \xF6demeler i\xE7in kart\u0131n\u0131zdan \xFCcret almas\u0131na izin verirsiniz.",
    "payment_entry_page.button_pay": "\u015Eimdi \xF6de",
    "payment_entry_page.button_start_trial": "Denemeyi ba\u015Flat",
    "success_page.purchase_successful": "\xD6deme tamamland\u0131",
    "success_page.button_close": "Devam et",
    "error_page.if_error_persists": "Hata devam ederse l\xFCtfen ileti\u015Fime ge\xE7in ",
    "error_page.error_title_already_subscribed": "{{productTitle}} \xFCr\xFCn\xFCne zaten abone oldunuz",
    "error_page.error_title_already_purchased": "{{productTitle}} \xFCr\xFCn\xFCn\xFC zaten sat\u0131n ald\u0131n\u0131z",
    "error_page.error_title_other_errors": "Bir \u015Feyler ters gitti",
    "error_page.error_message_already_subscribed": "Bu \xFCr\xFCne tekrar abone olamazs\u0131n\u0131z.",
    "error_page.error_message_already_purchased": "Bu \xFCr\xFCn\xFC tekrar sat\u0131n alamazs\u0131n\u0131z.",
    "error_page.error_message_missing_email_error": "Sat\u0131n almay\u0131 tamamlamak i\xE7in e-posta gereklidir.",
    "error_page.error_message_network_error": "A\u011F hatas\u0131. L\xFCtfen internet ba\u011Flant\u0131n\u0131z\u0131 kontrol edin.",
    "error_page.error_message_error_charging_payment": "\xD6deme ba\u015Far\u0131s\u0131z oldu.",
    "error_page.error_message_error_setting_up_purchase": "Bir hata nedeniyle sat\u0131n alma ba\u015Flat\u0131lamad\u0131 (hata kodu: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Fatura adresinizi do\u011Frulayamad\u0131k. L\xFCtfen posta kodu ve \xFClkenin do\u011Fru oldu\u011Funu kontrol edin.",
    "error_page.error_message_unknown_error": "Bilinmeyen bir hata olu\u015Ftu (hata kodu: {{errorCode}}).",
    "error_page.button_try_again": "Tekrar dene",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% indirim",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "Bug\xFCn \xF6denecek toplam tutar",
    "product_info.subscribe_to": "Abone Ol",
    "payment_entry_page.trial_info": "Deneme s\xFCreniz sona erdikten sonra, {{renewalDate}} tarihinden itibaren {{price}} {{perFrequency}} \xFCcretlendirileceksiniz. O zamana kadar istedi\u011Finiz zaman iptal edebilirsiniz.",
    "navbar_header.details": "Detaylar",
    "navbar_header.back_button": "Geri",
    "pricing_dropdown.show_details": "Detaylar\u0131 g\xF6ster",
    "pricing_dropdown.hide_details": "Detaylar\u0131 gizle",
    "pricing_table.tax": "Vergi",
    "pricing_table.trial_ends": "Deneme s\xFCresi sona erdikten sonra, {{formattedTrialEndDate}} tarihinde",
    "pricing_table.total_due_today": "Bug\xFCn \xF6denecek toplam",
    "pricing_table.total_excluding_tax": "Vergi hari\xE7 toplam",
    "pricing_table.enter_billing_address_to_calculate": "Hesaplamak i\xE7in fatura adresini girin",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Hesaplamak i\xE7in eyalet veya posta kodunu girin",
    "pricing_table.enter_postal_code_to_calculate": "Hesaplamak i\xE7in posta kodunu girin",
    "error_page.error_message_invalid_email_error": "{{email}} e-posta adresi do\u011Frulanamad\u0131. L\xFCtfen ge\xE7erli bir e-posta adresi girin.",
    "payment_entry_page.button_payment_method": "{{paymentMethod}} ile {{formattedPrice}} \xF6de",
    "payment_entry_page.button_with_price": "{{formattedPrice}} \xF6de",
    "price_update.title": "Fiyat g\xFCncellemesi",
    "price_update.base_message": "Toplam fiyat, fatura adresinize g\xF6re vergi dahil olacak \u015Fekilde g\xFCncellendi. L\xFCtfen inceleyip tekrar deneyin. Kart\u0131n\u0131zdan yaln\u0131zca bir kez \xFCcret al\u0131nacakt\u0131r.",
    "price_update.trial_message": "Abonelik fiyat\u0131, fatura adresinize g\xF6re vergileri i\xE7erecek \u015Fekilde g\xFCncellendi. \xDCcretsiz deneme s\xFCresi hala ge\xE7erli. L\xFCtfen kontrol edin ve tekrar deneyin.",
    "payment_entry_page.express_checkout_divider": "VEYA KARTLA \xD6DEY\u0130N",
    "error_page.trouble_accessing": "Sat\u0131n al\u0131m\u0131n\u0131za eri\u015Fmekte sorun ya\u015F\u0131yorsan\u0131z, \u015Fu adresten destek ekibine ula\u015F\u0131n: ",
    "error_page.close_button_title": "{{appName}}'e Git",
    "error_page.error_title_stripe_missing_required_permission": "Eksik Stripe izni",
    "error_page.button_close": "Kapat",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Vergi ba\u015Flang\u0131\xE7 adresi ge\xE7ersiz oldu\u011Fu i\xE7in sat\u0131n alma ba\u015Far\u0131s\u0131z oldu. \xDCretimde, sat\u0131n al\u0131mlar vergi uygulanmadan \xE7al\u0131\u015Facakt\u0131r.",
    "error_page.error_message_stripe_tax_not_active": "Stripe Vergi etkinle\u015Ftirilmedi\u011Fi i\xE7in sat\u0131n alma ba\u015Far\u0131s\u0131z oldu. \xDCretimde, sat\u0131n al\u0131mlar vergi uygulanmadan \xE7al\u0131\u015Facakt\u0131r.",
    "error_page.error_only_in_sandbox": "Bu mesaj yaln\u0131zca sanal ortamda g\xF6r\xFCn\xFCr.",
    "error_page.error_message_stripe_missing_required_permission": "Stripe uygulamas\u0131nda gerekli bir izin eksik oldu\u011Fu i\xE7in sat\u0131n alma ba\u015Far\u0131s\u0131z oldu. \xDCretimde, sat\u0131n al\u0131mlar vergi uygulanmadan \xE7al\u0131\u015Facakt\u0131r.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Vergi aktif de\u011Fil",
    "error_page.error_title_stripe_invalid_tax_origin_address": "Ge\xE7ersiz vergi ba\u015Flang\u0131\xE7 adresi",
    "apple_pay.free_trial": "\xDCcretsiz Deneme"
  };
  var Ic = {
    "periods.week": "{{amount}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
    "periods.month": "{{amount}} \u043C\u0456\u0441\u044F\u0446\u044C",
    "periods.year": "{{amount}} \u0440\u0456\u043A",
    "periods.day": "{{amount}} \u0434\u0435\u043D\u044C",
    "periods.weekShort": "{{amount}}\u0442\u0438\u0436",
    "periods.monthShort": "{{amount}}\u043C\u0456\u0441",
    "periods.yearShort": "{{amount}}\u0440\u0456\u043A",
    "periods.dayShort": "{{amount}}\u0434\u043D",
    "periods.lifetime": "\u043F\u043E\u0436\u0438\u0442\u0442\u0454\u0432\u043E",
    "periods.weekPlural": "{{amount}} \u0442\u0438\u0436\u043D\u0456\u0432",
    "periods.monthPlural": "{{amount}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
    "periods.yearPlural": "{{amount}} \u0440\u043E\u043A\u0456\u0432",
    "periods.dayPlural": "{{amount}} \u0434\u043D\u0456\u0432",
    "periods.weekFrequency": "\u0449\u043E\u0442\u0438\u0436\u043D\u044F",
    "periods.monthFrequency": "\u0449\u043E\u043C\u0456\u0441\u044F\u0446\u044F",
    "periods.yearFrequency": "\u0449\u043E\u0440\u043E\u043A\u0443",
    "periods.dayFrequency": "\u0449\u043E\u0434\u043D\u044F",
    "periods.perWeekFrequency": "\u043D\u0430 \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
    "periods.perMonthFrequency": "\u043D\u0430 \u043C\u0456\u0441\u044F\u0446\u044C",
    "periods.perYearFrequency": "\u043D\u0430 \u0440\u0456\u043A",
    "periods.perDayFrequency": "\u043D\u0430 \u0434\u0435\u043D\u044C",
    "periods.unknownFrequency": "\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E",
    "periods.weekFrequencyPlural": "\u043A\u043E\u0436\u043D\u0456 {{amount}} \u0442\u0438\u0436\u043D\u0456\u0432",
    "periods.monthFrequencyPlural": "\u043A\u043E\u0436\u043D\u0456 {{amount}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
    "periods.yearFrequencyPlural": "\u043A\u043E\u0436\u043D\u0456 {{amount}} \u0440\u043E\u043A\u0456\u0432",
    "periods.dayFrequencyPlural": "\u043A\u043E\u0436\u043D\u0456 {{amount}} \u0434\u043D\u0456\u0432",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0431\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434",
    "product_info.price_after_free_trial": "\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443, {{renewalDate}}",
    "product_info.renewal_frequency": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0454\u0442\u044C\u0441\u044F {{frequency}}",
    "product_info.continues_until_cancelled": "\u0422\u0440\u0438\u0432\u0430\u0454 \u0434\u043E \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F",
    "product_info.cancel_anytime": "\u041C\u043E\u0436\u043D\u0430 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441",
    "payment_entry_page.payment_step_title": "\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 RevenueCat",
    "payment_entry_page.terms_info": "\u041D\u0430\u0434\u0430\u044E\u0447\u0438 \u0434\u0430\u043D\u0456 \u0432\u0430\u0448\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438, \u0432\u0438 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454\u0442\u0435 {{appName}} \u0441\u0442\u044F\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u0448\u0442\u0438 \u0437 \u0432\u0430\u0448\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u0434\u043B\u044F \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0456\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0457\u0445\u043D\u0456\u0445 \u0443\u043C\u043E\u0432.",
    "payment_entry_page.button_pay": "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u0440\u0430\u0437",
    "payment_entry_page.button_start_trial": "\u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0440\u043E\u0431\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434",
    "success_page.purchase_successful": "\u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
    "success_page.button_close": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
    "error_page.if_error_persists": "\u042F\u043A\u0449\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E ",
    "error_page.error_title_already_subscribed": "\u0412\u0438 \u0432\u0436\u0435 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044F \u043D\u0430 {{productTitle}}",
    "error_page.error_title_already_purchased": "\u0412\u0438 \u0432\u0436\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u043B\u0438 {{productTitle}}",
    "error_page.error_title_other_errors": "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
    "error_page.error_message_already_subscribed": "\u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0446\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u043D\u043E\u0432\u0443.",
    "error_page.error_message_already_purchased": "\u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 \u0446\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u043D\u043E\u0432\u0443.",
    "error_page.error_message_missing_email_error": "\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430.",
    "error_page.error_message_network_error": "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043C\u0435\u0440\u0435\u0436\u0456. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0434\u043E \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443.",
    "error_page.error_message_error_charging_payment": "\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0448\u043B\u0430.",
    "error_page.error_message_error_setting_up_purchase": "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 (\u043A\u043E\u0434 \u043F\u043E\u043C\u0438\u043B\u043A\u0438: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "\u041C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0432\u0430\u0448\u0443 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435, \u0447\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441 \u0442\u0430 \u043A\u0440\u0430\u0457\u043D\u0430.",
    "error_page.error_message_unknown_error": "\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 (\u043A\u043E\u0434 \u043F\u043E\u043C\u0438\u043B\u043A\u0438: {{errorCode}}).",
    "error_page.button_try_again": "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% \u0437\u043D\u0438\u0436\u043A\u0438",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "\u0412\u0441\u044C\u043E\u0433\u043E \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
    "product_info.subscribe_to": "\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430",
    "payment_entry_page.trial_info": "\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443 \u0437 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435 \u0441\u0442\u044F\u0433\u043D\u0443\u0442\u043E {{price}} {{perFrequency}}, \u043F\u043E\u0447\u0438\u043D\u0430\u044E\u0447\u0438 \u0437 {{renewalDate}}. \u0412\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0434\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443.",
    "navbar_header.details": "\u0414\u0435\u0442\u0430\u043B\u0456",
    "navbar_header.back_button": "\u041D\u0430\u0437\u0430\u0434",
    "pricing_dropdown.show_details": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456",
    "pricing_dropdown.hide_details": "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456",
    "pricing_table.tax": "\u041F\u043E\u0434\u0430\u0442\u043E\u043A",
    "pricing_table.trial_ends": "\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443, {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
    "pricing_table.total_excluding_tax": "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0431\u0435\u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0443",
    "pricing_table.enter_billing_address_to_calculate": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0438\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0430\u0445\u0443\u043D\u043A\u0443 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443",
    "pricing_table.enter_state_or_postal_code_to_calculate": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0448\u0442\u0430\u0442 \u0430\u0431\u043E \u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443",
    "pricing_table.enter_postal_code_to_calculate": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0448\u0442\u043E\u0432\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443",
    "error_page.error_message_invalid_email_error": "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 {{email}} \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.",
    "payment_entry_page.button_payment_method": "\u0421\u043F\u043B\u0430\u0442\u0438\u0442\u0438 {{formattedPrice}} \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E {{paymentMethod}}",
    "payment_entry_page.button_with_price": "\u0421\u043F\u043B\u0430\u0442\u0438\u0442\u0438 {{formattedPrice}}",
    "price_update.title": "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0446\u0456\u043D\u0438",
    "price_update.base_message": "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0443 \u0446\u0456\u043D\u0443 \u0431\u0443\u043B\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043F\u043E\u0434\u0430\u0442\u043A\u0443 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0430\u0448\u043E\u0457 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u043E\u0457 \u0430\u0434\u0440\u0435\u0441\u0438. \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u0442\u0430 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437. \u0417 \u0432\u0430\u0448\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u0431\u0443\u0434\u0435 \u0441\u043F\u0438\u0441\u0430\u043D\u043E \u043A\u043E\u0448\u0442\u0438 \u043B\u0438\u0448\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u0437.",
    "price_update.trial_message": "\u0426\u0456\u043D\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u0431\u0443\u043B\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0430\u0448\u043E\u0457 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u043E\u0457 \u0430\u0434\u0440\u0435\u0441\u0438. \u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0431\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u0432\u0441\u0435 \u0449\u0435 \u0434\u0456\u0454. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0442\u0430 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
    "payment_entry_page.express_checkout_divider": "\u0410\u0411\u041E \u0421\u041F\u041B\u0410\u0422\u0406\u0422\u042C \u041A\u0410\u0420\u0422\u041A\u041E\u042E",
    "error_page.trouble_accessing": "\u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C \u0434\u043E \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0441\u043B\u0443\u0436\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E ",
    "error_page.close_button_title": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u0434\u043E\u0437\u0432\u0456\u043B Stripe",
    "error_page.button_close": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    "error_page.error_message_stripe_invalid_tax_origin_address": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044F, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0443 \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0430. \u0423 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438\u043C\u0443\u0442\u044C \u0431\u0435\u0437 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432.",
    "error_page.error_message_stripe_tax_not_active": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044F, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 Stripe Tax \u043D\u0435 \u0432\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E. \u0423 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438\u043C\u0443\u0442\u044C \u0431\u0435\u0437 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432.",
    "error_page.error_only_in_sandbox": "\u0426\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u2019\u044F\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0432 \u043F\u0456\u0441\u043E\u0447\u043D\u0438\u0446\u0456.",
    "error_page.error_message_stripe_missing_required_permission": "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044F, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0456 Stripe \u043D\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0454 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0443. \u0423 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438\u043C\u0443\u0442\u044C \u0431\u0435\u0437 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432.",
    "error_page.error_title_stripe_tax_not_active": "Stripe Tax \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u0443",
    "apple_pay.free_trial": "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043F\u0440\u043E\u0431\u043D\u0430 \u0432\u0435\u0440\u0441\u0456\u044F"
  };
  var qc = {
    "periods.week": "{{amount}} tu\u1EA7n",
    "periods.month": "{{amount}} th\xE1ng",
    "periods.year": "{{amount}} n\u0103m",
    "periods.day": "{{amount}} ng\xE0y",
    "periods.weekShort": "{{amount}}tu\u1EA7n",
    "periods.monthShort": "{{amount}}th\xE1ng",
    "periods.yearShort": "{{amount}}n\u0103m",
    "periods.dayShort": "{{amount}}ng\xE0y",
    "periods.lifetime": "tr\u1ECDn \u0111\u1EDDi",
    "periods.weekPlural": "{{amount}} tu\u1EA7n",
    "periods.monthPlural": "{{amount}} th\xE1ng",
    "periods.yearPlural": "{{amount}} n\u0103m",
    "periods.dayPlural": "{{amount}} ng\xE0y",
    "periods.weekFrequency": "h\xE0ng tu\u1EA7n",
    "periods.monthFrequency": "h\xE0ng th\xE1ng",
    "periods.yearFrequency": "h\xE0ng n\u0103m",
    "periods.dayFrequency": "h\xE0ng ng\xE0y",
    "periods.perWeekFrequency": "m\u1ED7i tu\u1EA7n",
    "periods.perMonthFrequency": "m\u1ED7i th\xE1ng",
    "periods.perYearFrequency": "m\u1ED7i n\u0103m",
    "periods.perDayFrequency": "m\u1ED7i ng\xE0y",
    "periods.unknownFrequency": "kh\xF4ng x\xE1c \u0111\u1ECBnh",
    "periods.weekFrequencyPlural": "c\u1EE9 {{amount}} tu\u1EA7n",
    "periods.monthFrequencyPlural": "c\u1EE9 {{amount}} th\xE1ng",
    "periods.yearFrequencyPlural": "c\u1EE9 {{amount}} n\u0103m",
    "periods.dayFrequencyPlural": "c\u1EE9 {{amount}} ng\xE0y",
    "product_info.product_title": "{{productTitle}}",
    "product_info.product_description": "{{productDescription}}",
    "product_info.product_price": "{{productPrice}}",
    "product_info.free_trial_duration": "{{trialDuration}} d\xF9ng th\u1EED mi\u1EC5n ph\xED",
    "product_info.price_after_free_trial": "Sau khi d\xF9ng th\u1EED k\u1EBFt th\xFAc, v\xE0o {{renewalDate}}",
    "product_info.renewal_frequency": "Gia h\u1EA1n {{frequency}}",
    "product_info.continues_until_cancelled": "Ti\u1EBFp t\u1EE5c cho \u0111\u1EBFn khi h\u1EE7y",
    "product_info.cancel_anytime": "H\u1EE7y b\u1EA5t c\u1EE9 l\xFAc n\xE0o",
    "payment_entry_page.payment_step_title": "Thanh to\xE1n an to\xE0n b\u1EDFi RevenueCat",
    "payment_entry_page.terms_info": "B\u1EB1ng c\xE1ch cung c\u1EA5p th\xF4ng tin th\u1EBB c\u1EE7a b\u1EA1n, b\u1EA1n cho ph\xE9p {{appName}} t\xEDnh ph\xED th\u1EBB c\u1EE7a b\u1EA1n cho c\xE1c kho\u1EA3n thanh to\xE1n trong t\u01B0\u01A1ng lai theo c\xE1c \u0111i\u1EC1u kho\u1EA3n c\u1EE7a h\u1ECD.",
    "payment_entry_page.button_pay": "Thanh to\xE1n ngay",
    "payment_entry_page.button_start_trial": "B\u1EAFt \u0111\u1EA7u d\xF9ng th\u1EED",
    "success_page.purchase_successful": "Thanh to\xE1n ho\xE0n t\u1EA5t",
    "success_page.button_close": "Ti\u1EBFp t\u1EE5c",
    "error_page.if_error_persists": "N\u1EBFu l\u1ED7i v\u1EABn ti\u1EBFp di\u1EC5n, vui l\xF2ng li\xEAn h\u1EC7 ",
    "error_page.error_title_already_subscribed": "B\u1EA1n \u0111\xE3 \u0111\u0103ng k\xFD {{productTitle}} r\u1ED3i",
    "error_page.error_title_already_purchased": "B\u1EA1n \u0111\xE3 mua {{productTitle}} r\u1ED3i",
    "error_page.error_title_other_errors": "C\xF3 l\u1ED7i x\u1EA3y ra",
    "error_page.error_message_already_subscribed": "B\u1EA1n kh\xF4ng th\u1EC3 \u0111\u0103ng k\xFD s\u1EA3n ph\u1EA9m n\xE0y l\u1EA7n n\u1EEFa.",
    "error_page.error_message_already_purchased": "B\u1EA1n kh\xF4ng th\u1EC3 mua s\u1EA3n ph\u1EA9m n\xE0y l\u1EA7n n\u1EEFa.",
    "error_page.error_message_missing_email_error": "Email b\u1EAFt bu\u1ED9c \u0111\u1EC3 ho\xE0n t\u1EA5t vi\u1EC7c mua h\xE0ng.",
    "error_page.error_message_network_error": "L\u1ED7i m\u1EA1ng. Vui l\xF2ng ki\u1EC3m tra k\u1EBFt n\u1ED1i internet c\u1EE7a b\u1EA1n.",
    "error_page.error_message_error_charging_payment": "Thanh to\xE1n th\u1EA5t b\u1EA1i.",
    "error_page.error_message_error_setting_up_purchase": "Kh\xF4ng th\u1EC3 b\u1EAFt \u0111\u1EA7u mua do l\u1ED7i (m\xE3 l\u1ED7i: {{errorCode}}).",
    "error_page.error_message_invalid_tax_location": "Ch\xFAng t\xF4i kh\xF4ng th\u1EC3 x\xE1c minh \u0111\u1ECBa ch\u1EC9 thanh to\xE1n c\u1EE7a b\u1EA1n. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i m\xE3 b\u01B0u \u0111i\u1EC7n v\xE0 qu\u1ED1c gia.",
    "error_page.error_message_unknown_error": "\u0110\xE3 x\u1EA3y ra l\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh (m\xE3 l\u1ED7i: {{errorCode}}).",
    "error_page.button_try_again": "Th\u1EED l\u1EA1i",
    "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
    "paywall_variables.sub_relative_discount": "{{discount}}% gi\u1EA3m",
    "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
    "product_info.total_due_today": "T\u1ED5ng s\u1ED1 ti\u1EC1n ph\u1EA3i tr\u1EA3 h\xF4m nay",
    "product_info.subscribe_to": "\u0110\u0103ng k\xFD",
    "payment_entry_page.trial_info": "Sau khi th\u1EDDi gian d\xF9ng th\u1EED c\u1EE7a b\u1EA1n k\u1EBFt th\xFAc, b\u1EA1n s\u1EBD b\u1ECB t\xEDnh ph\xED {{price}} {{perFrequency}} b\u1EAFt \u0111\u1EA7u t\u1EEB {{renewalDate}}. B\u1EA1n lu\xF4n c\xF3 th\u1EC3 h\u1EE7y tr\u01B0\u1EDBc th\u1EDDi \u0111i\u1EC3m \u0111\xF3.",
    "navbar_header.details": "Chi ti\u1EBFt",
    "navbar_header.back_button": "Quay l\u1EA1i",
    "pricing_dropdown.show_details": "Xem chi ti\u1EBFt",
    "pricing_dropdown.hide_details": "\u1EA8n chi ti\u1EBFt",
    "pricing_table.tax": "Thu\u1EBF",
    "pricing_table.trial_ends": "Sau khi th\u1EDDi gian d\xF9ng th\u1EED k\u1EBFt th\xFAc, v\xE0o {{formattedTrialEndDate}}",
    "pricing_table.total_due_today": "T\u1ED5ng s\u1ED1 ti\u1EC1n ph\u1EA3i tr\u1EA3 h\xF4m nay",
    "pricing_table.total_excluding_tax": "T\u1ED5ng c\u1ED9ng ch\u01B0a bao g\u1ED3m thu\u1EBF",
    "pricing_table.enter_billing_address_to_calculate": "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 thanh to\xE1n \u0111\u1EC3 t\xEDnh to\xE1n",
    "pricing_table.enter_state_or_postal_code_to_calculate": "Nh\u1EADp ti\u1EC3u bang ho\u1EB7c m\xE3 b\u01B0u \u0111i\u1EC7n \u0111\u1EC3 t\xEDnh to\xE1n",
    "pricing_table.enter_postal_code_to_calculate": "Nh\u1EADp m\xE3 b\u01B0u \u0111i\u1EC7n \u0111\u1EC3 t\xEDnh to\xE1n",
    "error_page.error_message_invalid_email_error": "Kh\xF4ng th\u1EC3 x\xE1c minh \u0111\u1ECBa ch\u1EC9 email {{email}}. Vui l\xF2ng cung c\u1EA5p m\u1ED9t \u0111\u1ECBa ch\u1EC9 email h\u1EE3p l\u1EC7.",
    "payment_entry_page.button_payment_method": "Thanh to\xE1n {{formattedPrice}} b\u1EB1ng {{paymentMethod}}",
    "payment_entry_page.button_with_price": "Thanh to\xE1n {{formattedPrice}}",
    "price_update.title": "C\u1EADp nh\u1EADt gi\xE1",
    "price_update.base_message": "T\u1ED5ng gi\xE1 \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt v\u1EDBi thu\u1EBF d\u1EF1a tr\xEAn \u0111\u1ECBa ch\u1EC9 thanh to\xE1n c\u1EE7a b\u1EA1n. Vui l\xF2ng xem l\u1EA1i v\xE0 th\u1EED l\u1EA1i. Th\u1EBB c\u1EE7a b\u1EA1n s\u1EBD ch\u1EC9 b\u1ECB t\xEDnh ph\xED m\u1ED9t l\u1EA7n.",
    "price_update.trial_message": "Gi\xE1 \u0111\u0103ng k\xFD \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt \u0111\u1EC3 bao g\u1ED3m thu\u1EBF d\u1EF1a tr\xEAn \u0111\u1ECBa ch\u1EC9 thanh to\xE1n c\u1EE7a b\u1EA1n. Th\u1EDDi gian d\xF9ng th\u1EED mi\u1EC5n ph\xED v\u1EABn \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng. Vui l\xF2ng ki\u1EC3m tra v\xE0 th\u1EED l\u1EA1i.",
    "payment_entry_page.express_checkout_divider": "HO\u1EB6C THANH TO\xC1N B\u1EB0NG TH\u1EBA",
    "error_page.trouble_accessing": "N\u1EBFu b\u1EA1n g\u1EB7p s\u1EF1 c\u1ED1 khi truy c\u1EADp giao d\u1ECBch mua c\u1EE7a m\xECnh, h\xE3y li\xEAn h\u1EC7 v\u1EDBi b\u1ED9 ph\u1EADn h\u1ED7 tr\u1EE3 theo \u0111\u1ECBa ch\u1EC9 ",
    "error_page.close_button_title": "\u0110i \u0111\u1EBFn {{appName}}",
    "error_page.error_title_stripe_missing_required_permission": "Thi\u1EBFu quy\u1EC1n Stripe",
    "error_page.button_close": "\u0110\xF3ng",
    "error_page.error_message_stripe_invalid_tax_origin_address": "Giao d\u1ECBch mua kh\xF4ng th\xE0nh c\xF4ng v\xEC \u0111\u1ECBa ch\u1EC9 g\u1ED1c thu\u1EBF kh\xF4ng h\u1EE3p l\u1EC7. Trong m\xF4i tr\u01B0\u1EDDng th\u1EF1c t\u1EBF, giao d\u1ECBch mua s\u1EBD ho\u1EA1t \u0111\u1ED9ng m\xE0 kh\xF4ng \xE1p d\u1EE5ng thu\u1EBF.",
    "error_page.error_message_stripe_tax_not_active": "Giao d\u1ECBch mua kh\xF4ng th\xE0nh c\xF4ng v\xEC Thu\u1EBF Stripe ch\u01B0a \u0111\u01B0\u1EE3c b\u1EADt. Trong m\xF4i tr\u01B0\u1EDDng th\u1EF1c t\u1EBF, giao d\u1ECBch mua s\u1EBD ho\u1EA1t \u0111\u1ED9ng m\xE0 kh\xF4ng \xE1p d\u1EE5ng thu\u1EBF.",
    "error_page.error_only_in_sandbox": "Th\xF4ng b\xE1o n\xE0y ch\u1EC9 xu\u1EA5t hi\u1EC7n trong m\xF4i tr\u01B0\u1EDDng th\u1EED nghi\u1EC7m.",
    "error_page.error_message_stripe_missing_required_permission": "Giao d\u1ECBch mua kh\xF4ng th\xE0nh c\xF4ng v\xEC \u1EE9ng d\u1EE5ng Stripe thi\u1EBFu m\u1ED9t quy\u1EC1n c\u1EA7n thi\u1EBFt. Trong m\xF4i tr\u01B0\u1EDDng th\u1EF1c t\u1EBF, giao d\u1ECBch mua s\u1EBD ho\u1EA1t \u0111\u1ED9ng m\xE0 kh\xF4ng \xE1p d\u1EE5ng thu\u1EBF.",
    "error_page.error_title_stripe_tax_not_active": "Thu\u1EBF Stripe ch\u01B0a ho\u1EA1t \u0111\u1ED9ng",
    "error_page.error_title_stripe_invalid_tax_origin_address": "\u0110\u1ECBa ch\u1EC9 g\u1ED1c thu\u1EBF kh\xF4ng h\u1EE3p l\u1EC7",
    "apple_pay.free_trial": "D\xF9ng th\u1EED mi\u1EC5n ph\xED"
  };
  var O = /* @__PURE__ */ ((e) => (e.PeriodsWeek = "periods.week", e.PeriodsMonth = "periods.month", e.PeriodsYear = "periods.year", e.PeriodsDay = "periods.day", e.PeriodsWeekShort = "periods.weekShort", e.PeriodsMonthShort = "periods.monthShort", e.PeriodsYearShort = "periods.yearShort", e.PeriodsDayShort = "periods.dayShort", e.PeriodsLifetime = "periods.lifetime", e.PeriodsWeekPlural = "periods.weekPlural", e.PeriodsMonthPlural = "periods.monthPlural", e.PeriodsYearPlural = "periods.yearPlural", e.PeriodsDayPlural = "periods.dayPlural", e.PeriodsWeekFrequency = "periods.weekFrequency", e.PeriodsMonthFrequency = "periods.monthFrequency", e.PeriodsYearFrequency = "periods.yearFrequency", e.PeriodsDayFrequency = "periods.dayFrequency", e.PeriodsPerWeekFrequency = "periods.perWeekFrequency", e.PeriodsPerMonthFrequency = "periods.perMonthFrequency", e.PeriodsPerYearFrequency = "periods.perYearFrequency", e.PeriodsPerDayFrequency = "periods.perDayFrequency", e.PeriodsUnknownFrequency = "periods.unknownFrequency", e.PeriodsWeekFrequencyPlural = "periods.weekFrequencyPlural", e.PeriodsMonthFrequencyPlural = "periods.monthFrequencyPlural", e.PeriodsYearFrequencyPlural = "periods.yearFrequencyPlural", e.PeriodsDayFrequencyPlural = "periods.dayFrequencyPlural", e.ProductInfoProductTitle = "product_info.product_title", e.ProductInfoProductDescription = "product_info.product_description", e.ProductInfoProductPrice = "product_info.product_price", e.ProductInfoFreeTrialDuration = "product_info.free_trial_duration", e.ProductInfoPriceAfterFreeTrial = "product_info.price_after_free_trial", e.ProductInfoPriceTotalDueToday = "product_info.total_due_today", e.ProductInfoSubscribeTo = "product_info.subscribe_to", e.ProductInfoRenewalFrequency = "product_info.renewal_frequency", e.ProductInfoContinuesUntilCancelled = "product_info.continues_until_cancelled", e.ProductInfoCancelAnytime = "product_info.cancel_anytime", e.PaymentEntryPagePaymentStepTitle = "payment_entry_page.payment_step_title", e.PaymentEntryPageTermsInfo = "payment_entry_page.terms_info", e.PaymentEntryPageTrialInfo = "payment_entry_page.trial_info", e.PaymentEntryPageButtonPay = "payment_entry_page.button_pay", e.PaymentEntryPageButtonStartTrial = "payment_entry_page.button_start_trial", e.PaymentEntryPageButtonWithPrice = "payment_entry_page.button_with_price", e.PaymentEntryPageButtonPaymentMethod = "payment_entry_page.button_payment_method", e.PaymentEntryPageExpressCheckoutDivider = "payment_entry_page.express_checkout_divider", e.SuccessPagePurchaseSuccessful = "success_page.purchase_successful", e.SuccessPageButtonClose = "success_page.button_close", e.ErrorPageCloseButtonTitle = "error_page.close_button_title", e.ErrorPageIfErrorPersists = "error_page.if_error_persists", e.ErrorPageTroubleAccessing = "error_page.trouble_accessing", e.ErrorPageErrorTitleAlreadySubscribed = "error_page.error_title_already_subscribed", e.ErrorPageErrorTitleAlreadyPurchased = "error_page.error_title_already_purchased", e.ErrorPageErrorTitleOtherErrors = "error_page.error_title_other_errors", e.ErrorPageErrorTitleStripeTaxNotActive = "error_page.error_title_stripe_tax_not_active", e.ErrorPageErrorTitleStripeInvalidTaxOriginAddress = "error_page.error_title_stripe_invalid_tax_origin_address", e.ErrorPageErrorTitleStripeMissingRequiredPermission = "error_page.error_title_stripe_missing_required_permission", e.ErrorPageErrorMessageAlreadySubscribed = "error_page.error_message_already_subscribed", e.ErrorPageErrorMessageAlreadyPurchased = "error_page.error_message_already_purchased", e.ErrorPageErrorMessageMissingEmailError = "error_page.error_message_missing_email_error", e.ErrorPageErrorMessageInvalidEmailError = "error_page.error_message_invalid_email_error", e.ErrorPageErrorMessageNetworkError = "error_page.error_message_network_error", e.ErrorPageErrorMessageErrorChargingPayment = "error_page.error_message_error_charging_payment", e.ErrorPageErrorMessageErrorSettingUpPurchase = "error_page.error_message_error_setting_up_purchase", e.ErrorPageErrorMessageUnknownError = "error_page.error_message_unknown_error", e.ErrorPageErrorMessageInvalidTaxLocation = "error_page.error_message_invalid_tax_location", e.ErrorPageErrorMessageStripeTaxNotActive = "error_page.error_message_stripe_tax_not_active", e.ErrorPageErrorMessageStripeInvalidTaxOriginAddress = "error_page.error_message_stripe_invalid_tax_origin_address", e.ErrorPageErrorMessageStripeMissingRequiredPermission = "error_page.error_message_stripe_missing_required_permission", e.ErrorPageErrorMessageOnlyInSandbox = "error_page.error_only_in_sandbox", e.ErrorButtonTryAgain = "error_page.button_try_again", e.ErrorButtonClose = "error_page.button_close", e.PaywallVariablesPricePerPeriod = "paywall_variables.price_per_period", e.PaywallVariablesSubRelativeDiscount = "paywall_variables.sub_relative_discount", e.PaywallVariablesTotalPriceAndPerMonth = "paywall_variables.total_price_and_per_month", e.PricingDropdownShowDetails = "pricing_dropdown.show_details", e.PricingDropdownHideDetails = "pricing_dropdown.hide_details", e.PricingTotalExcludingTax = "pricing_table.total_excluding_tax", e.PricingTableTrialEnds = "pricing_table.trial_ends", e.PricingTableTotalDueToday = "pricing_table.total_due_today", e.PricingTableTax = "pricing_table.tax", e.PricingTableEnterBillingAddressToCalculate = "pricing_table.enter_billing_address_to_calculate", e.PricingTableEnterStateOrPostalCodeToCalculate = "pricing_table.enter_state_or_postal_code_to_calculate", e.PricingTableEnterPostalCodeToCalculate = "pricing_table.enter_postal_code_to_calculate", e.NavbarHeaderDetails = "navbar_header.details", e.NavbarBackButton = "navbar_header.back_button", e.PriceUpdateTitle = "price_update.title", e.PriceUpdateBaseMessage = "price_update.base_message", e.PriceUpdateTrialMessage = "price_update.trial_message", e.ApplePayFreeTrial = "apple_pay.free_trial", e))(O || {});
  var Fc = {
    en: Jl,
    es: Ql,
    it: $l,
    ar: ec,
    ca: rc,
    zh_Hans: tc,
    zh_Hant: ac,
    hr: nc,
    cs: oc,
    da: ic,
    nl: sc,
    fi: lc,
    fr: cc,
    de: dc,
    el: uc,
    he: pc,
    hi: _c,
    hu: gc,
    id: mc,
    ja: fc,
    ko: yc,
    ms: bc,
    no: hc,
    pl: vc,
    pt: kc,
    ro: wc,
    ru: xc,
    sk: Pc,
    sv: Sc,
    th: Ec,
    tr: Tc,
    uk: Ic,
    vi: qc
  };
  var we = /* @__PURE__ */ ((e) => (e.Year = "year", e.Month = "month", e.Week = "week", e.Day = "day", e))(we || {});
  function mi(e) {
    const r = e.match(/^PT?([0-9]+)([MDYW])$/);
    if (!r || r.length < 3)
      return K.errorLog(`Invalid ISO 8601 duration format: ${e}`), null;
    const t = parseInt(r[1]);
    switch (r[2]) {
      case "Y":
        return {
          number: t,
          unit: "year"
          /* Year */
        };
      case "M":
        return {
          number: t,
          unit: "month"
          /* Month */
        };
      case "W":
        return {
          number: t,
          unit: "week"
          /* Week */
        };
      case "D":
        return {
          number: t,
          unit: "day"
          /* Day */
        };
      default:
        return K.errorLog(`Invalid ISO 8601 unit duration format: ${e}`), null;
    }
  }
  function Xa(e, r, t) {
    if (!t)
      return null;
    let a2 = new Date(e);
    switch (r.unit) {
      case "year":
        a2.getDate() === 29 && a2.getMonth() === 1 && r.number !== 4 ? a2.setFullYear(
          a2.getFullYear() + r.number,
          a2.getMonth(),
          28
        ) : a2.setFullYear(
          a2.getFullYear() + r.number,
          a2.getMonth(),
          a2.getDate()
        );
        break;
      case "month":
        a2.setMonth(a2.getMonth() + r.number, a2.getDate()), a2.getDate() !== e.getDate() && (a2 = new Date(e), a2.setMonth(a2.getMonth() + r.number + 1, 0));
        break;
      case "week":
        a2.setDate(a2.getDate() + r.number * 7);
        break;
      case "day":
        a2.setDate(a2.getDate() + r.number);
        break;
    }
    return a2;
  }
  var zc = (e) => e / 1e6;
  var Ir = (e, r, t, a2 = {}) => {
    const n = zc(e), o = {
      style: "currency",
      currency: r,
      currencyDisplay: "symbol",
      ...a2,
      // Some browsers require minimumFractionDigits to be set if maximumFractionDigits is set.
      minimumFractionDigits: a2.maximumFractionDigits
    };
    return new Intl.NumberFormat(t, o).format(n).replace("US$", "$");
  };
  var Dc = (e, r) => {
    const t = mi(e);
    return t ? r.translatePeriod(t.number, t.unit) || `${t.number} ${t.unit}s` : e;
  };
  var Ac = (e) => {
    try {
      return e.charAt(0).toUpperCase() + e.slice(1);
    } catch {
      return e;
    }
  };
  var Qr = {
    noWhitespace: false,
    short: false
  };
  var fi = {
    useMultipleWords: false
  };
  var va = class _va {
    constructor(r = {}, t = tt, a2 = tt) {
      M(this, "locales", {});
      this.selectedLocale = t, this.defaultLocale = a2;
      const n = {};
      Object.entries(Fc).forEach(([o, i]) => {
        n[o] = new co(i, o);
      }), this.locales = n, r && this.override(r);
    }
    static fallback() {
      return new _va();
    }
    override(r) {
      Object.entries(r).forEach(([t, a2]) => {
        this.locales[t] = new co(
          {
            ...this.locales[t].labels || {},
            ...a2
          },
          this.getLanguageCodeString(t)
        );
      });
    }
    formatPrice(r, t) {
      const a2 = { currencyDisplay: "narrowSymbol" };
      r === 0 && (a2.maximumFractionDigits = 0);
      try {
        return Ir(
          r,
          t,
          this.locale,
          a2
        );
      } catch {
        K.errorLog(
          `Failed to create a price formatter for locale: ${this.locale}`
        );
      }
      try {
        return Ir(
          r,
          t,
          this.fallbackLocale,
          a2
        );
      } catch {
        K.errorLog(
          `Failed to create a price formatter for locale: ${this.fallbackLocale}`
        );
      }
      return Ir(
        r,
        t,
        tt,
        a2
      );
    }
    get locale() {
      var r;
      return ((r = this.getLocaleInstance(this.selectedLocale)) == null ? void 0 : r.localeKey) || this.getLanguageCodeString(this.selectedLocale);
    }
    get fallbackLocale() {
      var r;
      return ((r = this.getLocaleInstance(this.defaultLocale)) == null ? void 0 : r.localeKey) || this.getLanguageCodeString(this.defaultLocale);
    }
    getLanguageCodeString(r) {
      return r.split("_")[0].split("-")[0];
    }
    getLocaleInstance(r) {
      const t = this.getLanguageCodeString(r);
      return this.locales[r] || this.locales[t];
    }
    translate(r, t) {
      const a2 = this.getLocaleInstance(this.selectedLocale), n = this.getLocaleInstance(this.defaultLocale);
      return (a2 == null ? void 0 : a2.translate(r, t)) || (n == null ? void 0 : n.translate(r, t)) || "";
    }
    formatCountry(r) {
      return new Intl.DisplayNames([this.locale], { type: "region" }).of(
        r
      ) || r;
    }
    translatePeriod(r, t, a2 = Qr) {
      const n = this.getLocaleInstance(this.selectedLocale), o = this.getLocaleInstance(this.defaultLocale);
      return (n == null ? void 0 : n.translatePeriod(r, t, a2)) || (o == null ? void 0 : o.translatePeriod(r, t, a2));
    }
    translatePeriodUnit(r, t = Qr) {
      const a2 = this.getLocaleInstance(this.selectedLocale), n = this.getLocaleInstance(this.defaultLocale);
      return (a2 == null ? void 0 : a2.translatePeriodUnit(r, t)) || (n == null ? void 0 : n.translatePeriodUnit(r, t));
    }
    translatePeriodFrequency(r, t, a2 = fi) {
      const n = this.getLocaleInstance(this.selectedLocale), o = this.getLocaleInstance(this.defaultLocale);
      return (n == null ? void 0 : n.translatePeriodFrequency(r, t, a2)) || (o == null ? void 0 : o.translatePeriodFrequency(r, t, a2));
    }
    translateDate(r, t = {}) {
      const a2 = this.getLocaleInstance(this.selectedLocale), n = this.getLocaleInstance(this.defaultLocale);
      return (a2 == null ? void 0 : a2.translateDate(r, t)) || (n == null ? void 0 : n.translateDate(r, t));
    }
  };
  var co = class {
    constructor(r = {}, t) {
      this.labels = r, this.localeKey = t;
    }
    replaceVariables(r, t) {
      return Object.entries(t).reduce(
        (a2, [n, o]) => a2.replace(
          `{{${n}}}`,
          `${o ?? ""}`
        ),
        r
      );
    }
    translate(r, t) {
      const a2 = this.labels[r];
      if (a2)
        return this.replaceVariables(a2, t || {});
    }
    translatePeriod(r, t, a2 = Qr) {
      var s2;
      const { noWhitespace: n, short: o } = {
        ...Qr,
        ...a2
      }, i = o ? `periods.${t}Short` : Math.abs(r) === 1 ? `periods.${t}` : `periods.${t}Plural`;
      return (s2 = this.translate(i, {
        amount: r.toString()
      })) == null ? void 0 : s2.replace(" ", n ? "" : " ");
    }
    translatePeriodUnit(r, t = Qr) {
      var i;
      const { noWhitespace: a2, short: n } = {
        ...Qr,
        ...t
      }, o = `periods.${r}${n ? "Short" : ""}`;
      return (i = this.translate(o, { amount: "" })) == null ? void 0 : i.replace(
        " ",
        a2 ? "" : " "
      );
    }
    translatePeriodFrequency(r, t, a2 = fi) {
      const n = a2 == null ? void 0 : a2.useMultipleWords, o = Math.abs(r) === 1 ? `periods.${n === true ? "per" : ""}${n ? Ac(t.toString()) : t}Frequency` : `periods.${t}FrequencyPlural`;
      return this.translate(o, {
        amount: r.toString()
      });
    }
    translateDate(r, t = {}) {
      return r.toLocaleDateString(this.localeKey, t);
    }
  };
  ol();
  var Mc = `<svg viewBox="0 0 124 124" fill="var(--rc-color-grey-text-dark)" xmlns="http://www.w3.org/2000/svg">
    <circle cx="62" cy="62" r="62" fill="var(--rc-color-grey-text-dark)" opacity="0.2"/>
    <path d="M87.6668 41.504L82.4968 36.334L62.0002 56.8307L41.5035 36.334L36.3335 41.504L56.8302 62.0006L36.3335 82.4973L41.5035 87.6673L62.0002 67.1706L82.4968 87.6673L87.6668 82.4973L67.1702 62.0006L87.6668 41.504Z"
          />
</svg>
`;
  var jc = /* @__PURE__ */ I2('<div style="color:var(--rc-color-primary);"><!></div>');
  function yi(e) {
    var r = jc(), t = P2(r);
    Wr(t, () => Mc), b2(e, r);
  }
  var Za;
  (function(e) {
    e.body_s = "p", e.body_m = "p", e.body_l = "p", e.body_xl = "p", e.heading_xs = "h6", e.heading_s = "h5", e.heading_m = "h4", e.heading_l = "h3", e.heading_xl = "h2", e.heading_xxl = "h1";
  })(Za || (Za = {}));
  var ta;
  (function(e) {
    e[e.extra_light = 100] = "extra_light", e[e.thin = 200] = "thin", e[e.light = 300] = "light", e[e.regular = 400] = "regular", e[e.medium = 500] = "medium", e[e.semibold = 600] = "semibold", e[e.bold = 700] = "bold", e[e.extra_bold = 800] = "extra_bold", e[e.black = 900] = "black";
  })(ta || (ta = {}));
  var aa;
  (function(e) {
    e.body_s = "13px", e.body_m = "14px", e.body_l = "15px", e.body_xl = "16px", e.heading_xs = "14px", e.heading_s = "16px", e.heading_m = "18px", e.heading_l = "20px", e.heading_xl = "26px", e.heading_xxl = "32px";
  })(aa || (aa = {}));
  var na;
  (function(e) {
    e.leading = "start", e.center = "center", e.trailing = "end";
  })(na || (na = {}));
  var Ka;
  (function(e) {
    e.vertical = "column", e.horizontal = "row", e.zlayer = "zstack";
  })(Ka || (Ka = {}));
  var Ja;
  (function(e) {
    e.top = "flex-start", e.leading = "flex-start", e.center = "center", e.bottom = "flex-end", e.trailing = "flex-end";
  })(Ja || (Ja = {}));
  var Qa;
  (function(e) {
    e.space_between = "space-between", e.space_around = "space-around", e.space_evenly = "space-evenly", e.start = "flex-start", e.center = "center", e.end = "flex-end";
  })(Qa || (Qa = {}));
  var Nc = [
    "product_name",
    "price",
    "price_per_period",
    "price_per_period_full",
    "total_price_and_per_month",
    "total_price_and_per_month_full",
    "sub_price_per_month",
    "sub_price_per_week",
    "sub_duration",
    "sub_duration_in_months",
    "sub_period",
    "sub_period_length",
    "sub_period_abbreviated",
    "sub_offer_duration",
    "sub_offer_duration_2",
    "sub_offer_price",
    "sub_offer_price_2",
    "sub_relative_discount"
  ];
  var Cc = ({ value: e = "", variableDictionary: r }) => r ? Nc.reduce((t, a2) => {
    var o;
    return t.replaceAll(`{{ ${a2} }}`, ((o = r[a2]) == null ? void 0 : o.toString()) || "N/A");
  }, e) : e;
  function bi(e, r, t, a2) {
    var o;
    if (!e)
      return "";
    const n = (o = a2[t]) == null ? void 0 : o[e];
    return (a2[r] || {})[e] ? a2[r][e] : n;
  }
  function yn({ text_lid: e, locale: r, defaultLocale: t, labels: a2, variableDictionary: n }) {
    if (!e)
      return "";
    const o = bi(e, r, t, a2);
    return Cc({
      value: o,
      variableDictionary: n
    });
  }
  var Zr = [];
  function Oc(e, r) {
    return {
      subscribe: hi(e, r).subscribe
    };
  }
  function hi(e, r = ae) {
    let t = null;
    const a2 = /* @__PURE__ */ new Set();
    function n(s2) {
      if (Oo(e, s2) && (e = s2, t)) {
        const l2 = !Zr.length;
        for (const c2 of a2)
          c2[1](), Zr.push(c2, e);
        if (l2) {
          for (let c2 = 0; c2 < Zr.length; c2 += 2)
            Zr[c2][0](Zr[c2 + 1]);
          Zr.length = 0;
        }
      }
    }
    function o(s2) {
      n(s2(
        /** @type {T} */
        e
      ));
    }
    function i(s2, l2 = ae) {
      const c2 = [s2, l2];
      return a2.add(c2), a2.size === 1 && (t = r(n, o) || ae), s2(
        /** @type {T} */
        e
      ), () => {
        a2.delete(c2), a2.size === 0 && t && (t(), t = null);
      };
    }
    return { set: n, update: o, subscribe: i };
  }
  var vi = Oc(false, (e) => {
    if (typeof window < "u") {
      const r = window.matchMedia("(prefers-color-scheme: dark)");
      e(r.matches);
      const t = (a2) => e(a2.matches);
      return r.addEventListener("change", t), () => r.removeEventListener("change", t);
    }
    return () => {
    };
  });
  var Re = "light";
  var $a = "#000000";
  var Lc = "#FFFFFF";
  function uo(e, r) {
    const t = {
      [`--${r}-block-start`]: "0px",
      [`--${r}-inline-end`]: "0px",
      [`--${r}-block-end`]: "0px",
      [`--${r}-inline-start`]: "0px"
    };
    return !e || !r || Object.assign(t, {
      [`--${r}-block-start`]: `${e.top ?? 0}px`,
      [`--${r}-inline-end`]: `${e.trailing ?? 0}px`,
      [`--${r}-block-end`]: `${e.bottom ?? 0}px`,
      [`--${r}-inline-start`]: `${e.leading ?? 0}px`
    }), t;
  }
  function Bc(e) {
    return Za[e];
  }
  function yr({ colorMap: e, colorMode: r = Re, fallback: t = "FFFFFF" }) {
    if (!e)
      return t;
    const a2 = e[r] || e[Re];
    let n = "";
    switch (a2.type) {
      case "hex":
      case "alias":
        return a2.value ?? t;
      case "linear":
        return n = (a2.points || []).map((o) => `${o.color} ${o.percent}%`).join(", "), `linear-gradient(${a2.degrees}deg, ${n})`;
      case "radial":
        return n = (a2.points || []).map((o) => `${o.color} ${o.percent}%`).join(", "), `radial-gradient(${n})`;
      default:
        return t;
    }
  }
  function ki(e, r = Re) {
    if (!e)
      return "";
    const t = yr({ colorMap: e.color, colorMode: r });
    return `${e.width}px solid ${t}`;
  }
  function oa(e) {
    return {
      "--border-start-start-radius": `${e.top_leading}px`,
      "--border-start-end-radius": `${e.top_trailing}px`,
      "--border-end-start-radius": `${e.bottom_leading}px`,
      "--border-end-end-radius": `${e.bottom_trailing}px`
    };
  }
  function ka({ background_color: e, border: r, margin: t, padding: a2, color: n, colorMode: o = Re, shape: i, shadow: s2 }) {
    const l2 = {
      "--margin-block-start": "0px",
      "--margin-inline-end": "0px",
      "--margin-block-end": "0px",
      "--margin-inline-start": "0px",
      "--padding-block-start": "0px",
      "--padding-inline-end": "0px",
      "--padding-block-end": "0px",
      "--padding-inline-start": "0px",
      "--background": "initial",
      "--text-color": "initial",
      "--border": "none",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--shadow": "none"
    };
    return a2 && Object.assign(l2, uo(a2, "padding")), t && Object.assign(l2, uo(t, "margin")), e && (l2["--background"] = yr({
      colorMap: e,
      colorMode: o,
      fallback: "transparent"
    })), n && (l2["--text-color"] = yr({
      colorMap: n,
      colorMode: o,
      fallback: $a
    })), r && (l2["--border"] = ki(r, o)), (i == null ? void 0 : i.type) === "rectangle" && i.corners && Object.assign(l2, oa(i.corners)), (i == null ? void 0 : i.type) === "pill" && Object.assign(l2, oa({
      bottom_leading: 9999,
      bottom_trailing: 9999,
      top_leading: 9999,
      top_trailing: 9999
    })), s2 && (l2["--shadow"] = `${s2.x}px ${s2.y}px ${s2.radius}px 
      ${yr({ colorMap: s2.color, colorMode: o, fallback: $a })}`), l2;
  }
  function po(e) {
    return e.type === "fixed" ? `${e.value}px` : e.type === "fit" ? "fit-content" : e.type === "fill" ? navigator.userAgent.match(/firefox|fxios/i) ? "-moz-available" : "-webkit-fill-available" : "initial";
  }
  function Ct(e) {
    const r = {
      "--width": "initial",
      "--height": "initial",
      "--flex": "initial"
    }, t = po(e.width), a2 = po(e.height), n = e.width.type === "fill" || e.height.type === "fill";
    return Object.assign(r, {
      "--width": t,
      "--height": a2,
      "--flex": n ? "initial" : "0 1 auto"
    }), r;
  }
  function wi(e) {
    const r = {
      "--inset": "initial",
      "--transform": "initial"
    };
    switch (e.alignment) {
      case "top_leading":
        r["--inset"] = "0 auto auto 0";
        break;
      case "top":
        r["--inset"] = "auto auto auto 50%", r["--transform"] = "translate(-50%, 0)";
        break;
      case "top_trailing":
        r["--inset"] = "0 0 auto auto";
        break;
      case "leading":
        r["--inset"] = "50% 0 50% 0", r["--transform"] = "translate(0, -50%)";
        break;
      case "center":
        r["--inset"] = "50% auto auto 50%", r["--transform"] = "translate(-50%, -50%)";
        break;
      case "trailing":
        r["--inset"] = "50% 0 50% auto", r["--transform"] = "translate(0, -50%)";
        break;
      case "bottom_leading":
        r["--inset"] = "auto auto 0 0";
        break;
      case "bottom":
        r["--inset"] = "auto 50% 0 auto", r["--transform"] = "translate(50%, 0)";
        break;
      case "bottom_trailing":
        r["--inset"] = "auto 0 0 auto";
        break;
    }
    return r;
  }
  function Rc(e) {
    const r = {
      "--direction": "initial",
      "--alignment": "initial",
      "--distribution": "initial",
      "--position": "relative",
      "--inset": "initial",
      "--transform": "initial"
    };
    return e.type !== "zlayer" && (Object.assign(r, {
      "--direction": Ka[e.type],
      "--alignment": Ja[e.alignment]
    }), e.distribution && Object.assign(r, {
      "--distribution": Qa[e.distribution]
    })), r;
  }
  function Uc(e, r = Re) {
    var l2, c2;
    const { font_size: t, horizontal_alignment: a2, font_weight: n, font_name: o, color: i } = e, s2 = {
      "--text-align": "initial",
      "--font-weight": "initial",
      "--font-size": "initial",
      "--font-family": "sans-serif",
      "--background-clip": "none",
      "--text-fill-color": "none",
      "--background": "unset"
    };
    return Object.assign(s2, {
      "--text-align": na[a2] || na.leading,
      "--font-weight": ta[n] || ta.regular,
      "--font-size": aa[t] || aa.body_m,
      "--font-family": o || "sans-serif"
    }), i && (((l2 = i[r]) == null ? void 0 : l2.type) === "linear" || ((c2 = i[r]) == null ? void 0 : c2.type) === "radial") && Object.assign(s2, {
      "--background-clip": "text",
      "--text-fill-color": "transparent",
      "--background": yr({ colorMap: i, colorMode: r })
    }), s2;
  }
  function Ce(e) {
    return Object.entries(e).map(([r, t]) => `${r}: ${t}`).join("; ");
  }
  function Vc(e) {
    const r = (a2) => {
      if (a2.type === "package" && a2.is_selected_by_default)
        return a2;
      if (a2.components && Array.isArray(a2.components))
        for (const n of a2.components) {
          const o = r(n);
          if (o)
            return o;
        }
      if (a2.stack !== void 0) {
        const n = r(a2.stack);
        if (n)
          return n;
      }
    }, t = r(e.components_config.base.stack);
    if (t !== void 0)
      return t.package_id;
  }
  var bn = (e, r) => r ? Hc(r).reduce((n, o) => {
    var i;
    if (e) {
      const s2 = ((i = e == null ? void 0 : e.states) == null ? void 0 : i[o]) || {};
      return { ...n, ...s2 };
    }
    return n;
  }, {}) : {};
  var Hc = (e) => e ? Object.entries(e).reduce((t, [a2, n]) => (n && t.push(a2), t), []) : [];
  function Ye(e, r) {
    return e ? r ? Object.entries(e).reduce((t, [a2, n]) => {
      const o = a2.replace(/^--/, `${r}-`);
      return t[`--${o}`] = n, t;
    }, {}) : e : {};
  }
  function Wc(e) {
    const { mask_shape: r, imageAspectRatio: t } = e;
    let a2 = "";
    return (r == null ? void 0 : r.type) === "concave" ? a2 = `M 0 0 
              H 100 
              V ${t * 100} 
              Q 50 ${t * 80} 0 ${t * 100} 
              Z` : (r == null ? void 0 : r.type) === "convex" ? a2 = `M 0 0 
              H 100 
              V ${t * 80} 
              Q 50 ${t * 120} 0 ${t * 80} 
              Z` : a2 = `M 0 0 H 100 V ${t * 100} H 0 Z`, a2;
  }
  var Yc = (e) => {
    const r = {
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px"
    };
    return e != null && e.corners && Object.assign(r, oa(e.corners)), r;
  };
  function Gc(e) {
    var s2, l2, c2;
    if (((l2 = (s2 = e.color_overlay) == null ? void 0 : s2[e.purchaseState.colorMode]) == null ? void 0 : l2.type) !== "linear")
      return { x1: "0%", y1: "0%", x2: "0%", y2: "0%" };
    const { color_overlay: r } = e, t = ((c2 = r == null ? void 0 : r[Re]) == null ? void 0 : c2.degrees) || 0, a2 = "50%", n = "0%", o = `${Math.round(50 + Math.sin((t + 90) * Math.PI / 90) * 50)}%`, i = `${Math.round(50 - Math.cos((t + 90) * Math.PI / 90) * 50)}%`;
    return { x1: a2, y1: n, x2: o, y2: i };
  }
  var xi = {
    light: { type: "hex", value: $a }
  };
  var Xc = {
    light: { type: "hex", value: Lc }
  };
  var hn = (e) => {
    const { font_size: r = "body_m", color: t = xi, background_color: a2 = Xc, padding: n, margin: o, size: i, purchaseState: s2 } = e, l2 = {
      "--width": "unset",
      "--height": "unset",
      "--text-align": "initial",
      "--font-weight": "initial",
      "--font-size": "initial",
      "--font-family": "sans-serif",
      "--background-clip": "unset",
      "--text-fill-color": "unset",
      "--margin-block-start": "0px",
      "--margin-inline-end": "0px",
      "--margin-block-end": "0px",
      "--margin-inline-start": "0px",
      "--padding-block-start": "0px",
      "--padding-inline-end": "0px",
      "--padding-block-end": "0px",
      "--padding-inline-start": "0px",
      "--background": "transparent",
      "--text-color": "inherit",
      "--border": "none",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--shadow": "none",
      "--flex": "0 1 auto"
    }, c2 = bn(e.overrides, e.componentState), p2 = Bc(r), u = Uc({ ...e, ...c2 }, s2.colorMode), _ = ka({
      background_color: a2,
      color: t,
      margin: o,
      padding: n,
      colorMode: s2.colorMode,
      ...c2
    }), g2 = Ct({ ...i, ...c2 }), m2 = {
      ...l2,
      ..._,
      ...u,
      ...g2
    };
    return {
      textStyles: Ye(m2, "text"),
      tagToRender: p2
    };
  };
  function Zc(e, r, t) {
    const a2 = {
      "--width": "unset",
      "--height": "unset",
      "--flex": "0 1 auto",
      "--margin-block-start": "0px",
      "--margin-inline-end": "0px",
      "--margin-block-end": "0px",
      "--margin-inline-start": "0px",
      "--padding-block-start": "0px",
      "--padding-inline-end": "0px",
      "--padding-block-end": "0px",
      "--padding-inline-start": "0px",
      "--background": "transparent",
      "--text-color": "inherit",
      "--border": "none",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--shadow": "none",
      "--position": "relative",
      "--inset": "0",
      "--transform": "initial"
    };
    Object.assign(a2, ka({
      background_color: t,
      ...e
    }), Ct(r)), Object.assign(a2, e.zStackChildStyles);
    const n = Ye(a2, "text");
    return Ce(n);
  }
  function Kc(e) {
    const r = {
      "--text-margin-block-start": "0px",
      "--text-margin-inline-end": "0px",
      "--text-margin-block-end": "0px",
      "--text-margin-inline-start": "0px",
      "--text-padding-block-start": "0px",
      "--text-padding-inline-end": "0px",
      "--text-padding-block-end": "0px",
      "--text-padding-inline-start": "0px",
      "--text-background": "transparent",
      "--text-text-color": "inherit",
      "--text-border": "none",
      "--text-border-end-start-radius": "0px",
      "--text-border-end-end-radius": "0px",
      "--text-border-start-start-radius": "0px",
      "--text-border-start-end-radius": "0px",
      "--text-shadow": "none",
      "--text-text-align": "initial",
      "--text-font-weight": "initial",
      "--text-font-size": "initial",
      "--text-font-family": "sans-serif",
      "--text-background-clip": "initial",
      "--text-text-fill-color": "initial",
      "--text-width": "unset",
      "--text-height": "unset",
      "--text-flex": "0 1 auto"
    }, { tagToRender: t, textStyles: a2 } = hn(e);
    return Object.assign(r, a2), { tagToRender: t, textStyles: Ce(r) };
  }
  function Jc(e) {
    return e ? Object.values({
      newLine: { regexp: /\\\n/g, output: "<br/>" },
      bold: { regexp: /\*\*(.*?)\*\*/g, output: "<b>$1</b>" },
      italic: { regexp: /\*(.*?)\*/g, output: "<i>$1</i>" },
      strikethrough: { regexp: /~(.*?)~/g, output: "<s>$1</s>" },
      code: {
        regexp: /`(.*?)`/g,
        output: "<span style='font-family: monospace'>$1</span>"
      },
      link: {
        regexp: /\[(.*?)\]\((.*?)\)/g,
        output: "<a href=$2 target='_blank' rel='noopener noreferrer'>$1</a>"
      }
    }).reduce((t, { regexp: a2, output: n }) => t.replaceAll(a2, n), e) : "";
  }
  var Qc = {
    hash: "svelte-1wz4si8",
    code: ".rc-pw-text-block.svelte-1wz4si8 {display:block;padding-block-start:var(--text-padding-block-start, initial);padding-inline-end:var(--text-padding-inline-end, initial);padding-block-end:var(--text-padding-block-end, initial);padding-inline-start:var(--text-padding-inline-start, initial);margin-block-start:var(--text-margin-block-start, initial);margin-inline-end:var(--text-margin-inline-end, initial);margin-block-end:var(--text-margin-block-end, initial);margin-inline-start:var(--text-margin-inline-start, initial);color:var(--text-text-color, #ffffff);background:var(--text-background, none);font-size:var(--text-font-size, 1rem);font-weight:var(--text-font-weight, normal);text-align:var(--text-text-align, center);font-family:var(--text-font-family, sans-serif);-webkit-background-clip:var(--text-background-clip, initial);background-clip:var(--text-background-clip, initial);-webkit-text-fill-color:var(--text-text-fill-color, initial);}"
  };
  function Pi(e, r) {
    V(r, true), R2(e, Qc);
    const t = U(r, "styleVariables", 3, ""), a2 = U(r, "component", 3, "p");
    var n = ee(), o = W(n);
    ea(o, a2, false, (i, s2) => {
      let l2;
      A(() => l2 = ra(
        i,
        l2,
        {
          id: r.id,
          style: t(),
          class: "rc-pw-text-block"
        },
        "svelte-1wz4si8",
        i.namespaceURI === xt,
        i.nodeName.includes("-")
      ));
      var c2 = ee(), p2 = W(c2);
      _e(p2, () => r.children ?? ae), b2(s2, c2);
    }), b2(e, n), H();
  }
  var $c = /* @__PURE__ */ I2('<span class="rc-pw-text-wrapper svelte-11gzifq"><!></span>');
  var ed = {
    hash: "svelte-11gzifq",
    code: ".rc-pw-text-wrapper.svelte-11gzifq {display:block;height:var(--text-height, initial);width:var(--text-width, initial);background:var(--text-background, none);position:var(--text-position, relative);inset:var(--text-inset, 0);transform:var(--text-transform, initial);}"
  };
  function rd(e, r) {
    V(r, true), R2(e, ed);
    const t = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "id",
      "labels",
      "text_lid",
      "purchaseState",
      "variableDictionary",
      "background_color",
      "size"
    ]), a2 = /* @__PURE__ */ E2(() => Kc({
      id: r.id,
      labels: r.labels,
      text_lid: r.text_lid,
      purchaseState: r.purchaseState,
      background_color: r.background_color,
      size: r.size,
      ...t
    })), n = /* @__PURE__ */ E2(() => d(a2).tagToRender), o = /* @__PURE__ */ E2(() => d(a2).textStyles), i = /* @__PURE__ */ E2(() => Zc(t, r.size, r.background_color)), s2 = /* @__PURE__ */ E2(() => yn({
      text_lid: r.text_lid,
      locale: r.purchaseState.locale,
      defaultLocale: r.purchaseState.defaultLocale,
      labels: r.labels,
      variableDictionary: r.variableDictionary
    })), l2 = /* @__PURE__ */ E2(() => Jc(d(s2)));
    var c2 = $c(), p2 = P2(c2);
    Pi(p2, {
      get styleVariables() {
        return d(o);
      },
      get component() {
        return d(n);
      },
      get id() {
        return r.id;
      },
      children: (u, _) => {
        var g2 = ee(), m2 = W(g2);
        Wr(m2, () => d(l2)), b2(u, g2);
      },
      $$slots: { default: true }
    }), A(() => j2(c2, "style", d(i))), b2(e, c2), H();
  }
  var td = (e) => {
    const { background_color: r, margin: t, padding: a2, spacing: n, size: o, border: i, shape: s2, shadow: l2, dimension: c2, componentState: p2, overrides: u, purchaseState: _, zStackChildStyles: g2 } = e, m2 = {
      "--flex": "0 1 auto",
      "--height": "initial",
      "--width": "initial",
      "--spacing": `${n || 0}px`,
      "--direction": "unset",
      "--alignment": "unset",
      "--distribution": "flex-start",
      "--margin-block-start": "0px",
      "--margin-inline-end": "0px",
      "--margin-block-end": "0px",
      "--margin-inline-start": "0px",
      "--padding-block-start": "0px",
      "--padding-inline-end": "0px",
      "--padding-block-end": "0px",
      "--padding-inline-start": "0px",
      "--background": "unset",
      "--text-color": "inherit",
      "--border": "none",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--shadow": "none",
      "--position": "relative",
      "--transform": "initial",
      "--inset": "initial"
    }, f2 = bn(u, p2);
    Object.assign(m2, ka({
      background_color: r,
      margin: t,
      padding: a2,
      border: i,
      colorMode: _.colorMode,
      shape: s2,
      shadow: l2,
      ...f2
    }), Rc({
      ...c2,
      ...f2
    }), Ct({ ...o, ...f2 })), Object.assign(m2, g2);
    const h2 = Ye(m2, "stack");
    return Ce(h2);
  };
  function ad(e) {
    var n, o, i, s2, l2, c2;
    const { badge: r } = e;
    if (!r)
      return "";
    const t = {
      "--inset": "unset",
      "--transform": "unset",
      "--margin-block-start": "0px",
      "--margin-inline-end": "0px",
      "--margin-block-end": "0px",
      "--margin-inline-start": "0px",
      "--padding-block-start": "0px",
      "--padding-inline-end": "0px",
      "--padding-block-end": "0px",
      "--padding-inline-start": "0px",
      "--background": "unset",
      "--text-color": "inherit",
      "--border": "none",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--shadow": "none",
      "--badge-width": "unset",
      "--z-index": "unset"
    };
    if (Object.assign(t, wi({
      type: "zlayer",
      alignment: r.alignment
    }), ka({
      ...r,
      background_color: r.background_color,
      color: r.color,
      colorMode: e.purchaseState.colorMode
    })), r.style === "overlay" && (t["--margin-block-start"] = "0px", t["--margin-block-end"] = "0px", t["--transform"] = Yt(r, 0, -(((n = e.border) == null ? void 0 : n.width) || 0))), r.style === "edge_to_edge")
      if (t["--margin-block-start"] = "0px", t["--margin-block-end"] = "0px", t["--margin-inline-start"] = "0px", t["--margin-inline-end"] = "0px", r.alignment === "top" || r.alignment === "bottom") {
        t["--badge-width"] = `calc(100% + ${(((o = e.border) == null ? void 0 : o.width) || 0) * 2}px)`, t["--z-index"] = "-1";
        const p2 = Math.max(((s2 = (i = e.shape) == null ? void 0 : i.corners) == null ? void 0 : s2.top_leading) || 0, ((c2 = (l2 = e.shape) == null ? void 0 : l2.corners) == null ? void 0 : c2.top_trailing) || 0);
        r.alignment === "top" && (t["--padding-block-end"] = `${p2 + r.padding.bottom}px`, t["--transform"] = Yt(r, p2)), r.alignment === "bottom" && (t["--padding-block-start"] = `${p2 + r.padding.top}px`, t["--transform"] = Yt(r, -p2));
      } else
        t["--transform"] = Yt(r), Object.assign(t, nd(e));
    const a2 = Ye(t, "stack-badge");
    return Ce(a2);
  }
  var _o = {
    top_leading: "bottom_trailing",
    top_trailing: "bottom_leading",
    bottom_leading: "top_trailing",
    bottom_trailing: "top_leading"
  };
  var go = {
    top_leading: "--border-start-start-radius",
    top_trailing: "--border-start-end-radius",
    bottom_leading: "--border-end-start-radius",
    bottom_trailing: "--border-end-end-radius"
  };
  function nd(e) {
    var o, i, s2;
    const r = {
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px"
    }, { badge: t } = e;
    if (!t)
      return r;
    const a2 = ((o = e.border) == null ? void 0 : o.width) || 0, n = t.alignment;
    return r[go[_o[n]]] = `${(i = t.shape) == null ? void 0 : i.corners[_o[n]]}px`, r[go[n]] = `${((s2 = e.shape) == null ? void 0 : s2.corners[n]) - a2}px`, r;
  }
  function Yt(e, r = 0, t = 0) {
    if (!e)
      return "";
    if (e.style === "overlay") {
      if (e.alignment === "top_leading")
        return `translate(${t}px, calc(-50% + ${r}px))`;
      if (e.alignment === "top_trailing")
        return `translate(calc(0% - ${t}px), calc(-50% + ${r}px))`;
      if (e.alignment === "bottom_leading")
        return `translate(${t}px, calc(50% + ${r}px))`;
      if (e.alignment === "bottom_trailing")
        return `translate(calc(0% - ${t}px), calc(50% + ${r}px))`;
      if (e.alignment === "top")
        return `translate(calc(-50% + ${t}px), calc(-50% + ${r}px))`;
      if (e.alignment === "bottom")
        return `translate(calc(50% + ${t}px), calc(50% + ${r}px))`;
    }
    if (e.style === "edge_to_edge") {
      if (e.alignment === "top")
        return `translate(calc(-50% + ${t}px), calc(-100% - ${r}px + 16px))`;
      if (e.alignment === "bottom")
        return `translate(calc(50% + ${t}px), calc(100% + ${r}px))`;
    }
    return "";
  }
  function od(e) {
    const { badge: r } = e;
    if (!r)
      return { tagToRender: "", textStyles: "" };
    const { tagToRender: t, textStyles: a2 } = hn({
      id: e.id,
      labels: e.labels,
      purchaseState: e.purchaseState,
      ...r,
      components: [],
      type: "text",
      size: {
        width: { type: "fit" },
        height: { type: "fit" }
      },
      color: r == null ? void 0 : r.color,
      name: e.name
    }), o = {
      ...a2,
      ...{
        "--text-margin-block-start": "0px",
        "--text-margin-inline-end": "0px",
        "--text-margin-block-end": "0px",
        "--text-margin-inline-start": "0px",
        "--text-padding-block-start": "0px",
        "--text-padding-inline-end": "0px",
        "--text-padding-block-end": "0px",
        "--text-padding-inline-start": "0px"
      }
    }, i = Ce(o);
    return {
      tagToRender: t,
      textStyles: i
    };
  }
  function id(e) {
    const { dimension: r } = e, t = {
      "--inset": "initial",
      "--transform": "initial",
      "--position": "relative"
    };
    if (r.type !== "zlayer")
      return;
    const a2 = wi({ ...r, type: "zlayer" });
    return Object.assign(t, { ...a2, "--position": "absolute" }), t;
  }
  var sd = /* @__PURE__ */ I2('<span class="rc-pw-badge svelte-1b5bst5"><!></span>');
  var ld = /* @__PURE__ */ I2('<div class="rc-pw-stack-wrapper svelte-1b5bst5"><!> <div class="rc-pw-stack svelte-1b5bst5"></div></div>');
  var cd = {
    hash: "svelte-1b5bst5",
    code: `.rc-pw-stack-wrapper.svelte-1b5bst5 {display:block;box-sizing:border-box;width:var(--stack-width, unset);height:var(--stack-height, unset);box-shadow:var(--stack-shadow, none);background:var(--stack-background, unset);position:var(--stack-position, relative);transform:var(--stack-transform, initial);inset:var(--stack-inset, initial);margin-block-start:var(--stack-margin-block-start, 0);margin-inline-end:var(--stack-margin-inline-end, 0);margin-block-end:var(--stack-margin-block-end, 0);margin-inline-start:var(--stack-margin-inline-start, 0);border:var(--stack-border, none);border-end-start-radius:var(--stack-border-end-start-radius, 0px);border-end-end-radius:var(--stack-border-end-end-radius, 0px);border-start-start-radius:var(--stack-border-start-start-radius, 0px);border-start-end-radius:var(--stack-border-start-end-radius, 0px);}.rc-pw-stack.svelte-1b5bst5 {background:none;overflow:hidden;box-sizing:border-box;width:100%;height:100%;display:flex;gap:var(--stack-spacing, 0);flex:var(--stack-flex, 0 1 auto);flex-direction:var(--stack-direction, unset);justify-content:var(--stack-distribution, flex-start);align-items:var(--stack-alignment, flex-start);padding-block-start:var(--stack-padding-block-start, 0);padding-inline-end:var(--stack-padding-inline-end, 0);padding-block-end:var(--stack-padding-block-end, 0);padding-inline-start:var(--stack-padding-inline-start, 0);}.rc-pw-badge.svelte-1b5bst5 {box-sizing:border-box;font-family:var(--stack-badge-font-family, sans-serif);position:absolute;inset:var(--stack-badge-inset, unset);transform:var(--stack-badge-transform, initial);margin-block-start:var(--stack-badge-margin-block-start, 0px);margin-inline-end:var(--stack-badge-margin-inline-end, 0px);margin-block-end:var(--stack-badge-margin-block-end, 0px);margin-inline-start:var(--stack-badge-margin-inline-start, 0px);padding-block-start:var(--stack-badge-padding-block-start, 0px);padding-inline-end:var(--stack-badge-padding-inline-end, 0px);padding-block-end:var(--stack-badge-padding-block-end, 0px);padding-inline-start:var(--stack-badge-padding-inline-start, 0px);background:var(--stack-badge-background, initial);color:var(--stack-badge-text-color, inherit);border:var(--stack-badge-border, none);border-end-start-radius:var(--stack-badge-border-end-start-radius, 0px);border-end-end-radius:var(--stack-badge-border-end-end-radius, 0px);border-start-start-radius:var(
      --stack-badge-border-start-start-radius,
      0px
    );border-start-end-radius:var(--stack-badge-border-start-end-radius, 0px);box-shadow:var(--stack-badge-shadow, none);display:flex;align-items:center;justify-content:center;width:var(--stack-badge-badge-width, max-content);height:var(--stack-badge-badge-height, max-content);z-index:var(--stack-badge-z-index, 1);}`
  };
  function Ot(e, r) {
    V(r, true), R2(e, cd);
    const t = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "id",
      "components",
      "labels",
      "onAction",
      "purchaseState",
      "variableDictionary",
      "badge",
      "zStackChildStyles"
    ]), a2 = /* @__PURE__ */ E2(() => td({
      id: r.id,
      components: r.components,
      labels: r.labels,
      onAction: r.onAction,
      purchaseState: r.purchaseState,
      zStackChildStyles: r.zStackChildStyles,
      ...t
    })), n = /* @__PURE__ */ E2(() => ad({
      id: r.id,
      components: r.components,
      labels: r.labels,
      onAction: r.onAction,
      purchaseState: r.purchaseState,
      badge: r.badge,
      ...t
    })), o = /* @__PURE__ */ E2(() => id({
      id: r.id,
      components: r.components,
      labels: r.labels,
      onAction: r.onAction,
      purchaseState: r.purchaseState,
      ...t
    })), i = /* @__PURE__ */ E2(() => {
      var m2;
      return yn({
        defaultLocale: r.purchaseState.defaultLocale,
        locale: r.purchaseState.locale,
        labels: r.labels,
        variableDictionary: r.variableDictionary,
        text_lid: (m2 = r.badge) == null ? void 0 : m2.text_lid
      });
    }), s2 = /* @__PURE__ */ E2(() => od({
      id: r.id,
      components: r.components,
      labels: r.labels,
      onAction: r.onAction,
      purchaseState: r.purchaseState,
      variableDictionary: r.variableDictionary,
      badge: r.badge,
      ...t
    })), l2 = /* @__PURE__ */ E2(() => d(s2).tagToRender), c2 = /* @__PURE__ */ E2(() => d(s2).textStyles);
    var p2 = ld(), u = P2(p2);
    {
      var _ = (m2) => {
        var f2 = sd(), h2 = P2(f2);
        Pi(h2, {
          get styleVariables() {
            return d(c2);
          },
          get component() {
            return d(l2);
          },
          children: (v, y2) => {
            var x2 = ie();
            A(() => te(x2, d(i))), b2(v, x2);
          },
          $$slots: { default: true }
        }), A(() => j2(f2, "style", d(n))), b2(m2, f2);
      };
      N(u, (m2) => {
        r.badge && m2(_);
      });
    }
    var g2 = C(u, 2);
    it(g2, 21, () => r.components, ot, (m2, f2, h2) => {
      var v = ee(), y2 = W(v);
      {
        var x2 = (S2) => {
          var q = /* @__PURE__ */ E2(() => h2 > 0 ? d(o) : void 0);
          ia(S2, {
            get nodeData() {
              return d(f2);
            },
            get labels() {
              return r.labels;
            },
            get onAction() {
              return r.onAction;
            },
            get purchaseState() {
              return r.purchaseState;
            },
            get variableDictionary() {
              return r.variableDictionary;
            },
            get componentState() {
              return r.componentState;
            },
            get zStackChildStyles() {
              return d(q);
            }
          });
        }, T2 = (S2) => {
          ia(S2, {
            get nodeData() {
              return d(f2);
            },
            get labels() {
              return r.labels;
            },
            get onAction() {
              return r.onAction;
            },
            get purchaseState() {
              return r.purchaseState;
            },
            get variableDictionary() {
              return r.variableDictionary;
            },
            get componentState() {
              return r.componentState;
            }
          });
        };
        N(y2, (S2) => {
          d(o) ? S2(x2) : S2(T2, false);
        });
      }
      b2(m2, v);
    }), A(() => {
      j2(p2, "id", r.id), j2(p2, "style", d(a2));
    }), b2(e, p2), H();
  }
  function dd({ stack: e, zStackChildStyles: r }) {
    var i, s2;
    const t = ((s2 = (i = e == null ? void 0 : e.size) == null ? void 0 : i.width) == null ? void 0 : s2.type) === "fill" ? "100%" : "fit-content", a2 = Ye(r || {}, "button");
    return Ce({
      ...a2,
      ...{
        position: "var(--button-position, relative)",
        inset: "var(--button-inset, 0)",
        transform: "var(--button-transform, initial)",
        width: t
      }
    });
  }
  var ud = { hash: "svelte-mx8s0a", code: "" };
  function pd(e, r) {
    V(r, true), R2(e, ud);
    const t = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "stack",
      "action",
      "onAction",
      "labels",
      "purchaseState",
      "variableDictionary"
    ]), a2 = () => {
      r.onAction && r.onAction(r.action);
    }, n = /* @__PURE__ */ E2(() => dd({
      stack: r.stack,
      action: r.action,
      onAction: r.onAction,
      labels: r.labels,
      purchaseState: r.purchaseState,
      variableDictionary: r.variableDictionary,
      ...t
    }));
    Ei(e, {
      onclick: a2,
      get style() {
        return d(n);
      },
      class: "rc-pw-button",
      children: (o, i) => {
        Ot(o, hr(() => r.stack, {
          get labels() {
            return r.labels;
          },
          get purchaseState() {
            return r.purchaseState;
          },
          get variableDictionary() {
            return r.variableDictionary;
          }
        }));
      },
      $$slots: { default: true }
    }), H();
  }
  function ia(e, r) {
    V(r, true);
    const t = De(), a2 = () => ze(vi, "$prefersDarkMode", t), n = {
      stack: Ot,
      text: rd,
      image: cu,
      button: pd,
      purchase_button: pu,
      package: fu,
      footer: Si,
      timeline: Pu
    }, o = (_) => {
      if (n[_.type])
        return [n[_.type], _];
      const { fallback: g2 } = _;
      if (g2 && n[g2 == null ? void 0 : g2.type])
        return [n[g2.type], g2];
      throw new Error(`Invalid component type: ${_.type}`);
    }, i = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "nodeData",
      "labels",
      "onAction",
      "purchaseState",
      "variableDictionary",
      "zStackChildStyles"
    ]), s2 = /* @__PURE__ */ E2(() => o(r.nodeData)), l2 = /* @__PURE__ */ E2(() => d(s2)[0]), c2 = /* @__PURE__ */ E2(() => d(s2)[1]);
    var p2 = ee(), u = W(p2);
    return Ml(u, () => d(l2), (_, g2) => {
      g2(_, hr(
        () => d(c2) || {},
        {
          get labels() {
            return r.labels;
          },
          get prefersDarkMode() {
            return a2();
          },
          get onAction() {
            return r.onAction;
          },
          get purchaseState() {
            return r.purchaseState;
          },
          get variableDictionary() {
            return r.variableDictionary;
          },
          get zStackChildStyles() {
            return r.zStackChildStyles;
          }
        },
        () => i,
        {
          children: (m2, f2) => {
            var h2 = ee(), v = W(h2);
            it(v, 17, () => r.nodeData.components, ot, (y2, x2) => {
              ia(y2, hr(
                {
                  get nodeData() {
                    return d(x2);
                  },
                  get labels() {
                    return r.labels;
                  },
                  get onAction() {
                    return r.onAction;
                  },
                  get purchaseState() {
                    return r.purchaseState;
                  },
                  get variableDictionary() {
                    return r.variableDictionary;
                  }
                },
                () => i
              ));
            }), b2(m2, h2);
          },
          $$slots: { default: true }
        }
      ));
    }), b2(e, p2), H({ getComponentClass: o });
  }
  function _d({ background: e, colorMode: r }) {
    const t = { "--background": "initial" };
    (e == null ? void 0 : e.type) === "color" && Object.assign(t, {
      "--background": yr({
        colorMap: e.value,
        colorMode: r,
        fallback: "transparent"
      })
    });
    const a2 = Ye(t, "paywall");
    return Ce(a2);
  }
  function gd(e, r) {
    var a2, n, o, i;
    if (((n = (a2 = e.components_config.base) == null ? void 0 : a2.background) == null ? void 0 : n.type) !== "image")
      return "";
    const t = e.components_config.base.background;
    return ((o = t.value[r]) == null ? void 0 : o.original) || ((i = t.value[Re]) == null ? void 0 : i.original);
  }
  var md = /* @__PURE__ */ I2('<div class="rc-pw-footer svelte-pg5jlz"><!></div>');
  var fd = {
    hash: "svelte-pg5jlz",
    code: ".rc-pw-footer.svelte-pg5jlz {position:sticky;bottom:0;transform:translateY(50%);width:100%;}"
  };
  function Si(e, r) {
    R2(e, fd);
    var t = md(), a2 = P2(t);
    Ot(a2, hr(() => r.stack, {
      get labels() {
        return r.labels;
      },
      get purchaseState() {
        return r.purchaseState;
      },
      get variableDictionary() {
        return r.variableDictionary;
      },
      get onAction() {
        return r.onAction;
      }
    })), A(() => j2(t, "id", r.id)), b2(e, t);
  }
  var yd = /* @__PURE__ */ I2('<div class="rc-pw-paywall-background svelte-14bszwq"></div>');
  var bd = /* @__PURE__ */ I2('<div class="rc-pw-paywall-background rc-pw-image-container svelte-14bszwq"><img class="rc-pw-image svelte-14bszwq" alt=""></div>');
  var hd = /* @__PURE__ */ I2('<div class="rc-pw-paywall svelte-14bszwq"><!> <!> <!></div>');
  var vd = {
    hash: "svelte-14bszwq",
    code: `.rc-pw-paywall.svelte-14bszwq {position:relative;display:block;max-height:100%;}.rc-pw-paywall-background.svelte-14bszwq {position:absolute;top:0;left:0;width:100%;height:100%;background:var(--paywall-background, none);z-index:-1;}.rc-pw-image-container.svelte-14bszwq {overflow:hidden;background:none;}.rc-pw-image.svelte-14bszwq {width:100%;height:100%;object-fit:cover;display:block;}*,
    *::before,
    *::after {box-sizing:border-box;margin:0;padding:0;font-family:sans-serif;}body {line-height:1.5;-webkit-font-smoothing:antialiased;}img,
    picture,
    video,
    canvas,
    svg {display:block;max-width:100%;}input,
    button,
    textarea,
    select {font:inherit;}p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {overflow-wrap:break-word;}p {text-wrap:pretty;}h1,
    h2,
    h3,
    h4,
    h5,
    h6 {text-wrap:balance;}#root,
    #__next {isolation:isolate;}`
  };
  function kd(e, r) {
    V(r, true), R2(e, vd);
    const t = De(), a2 = () => ze(vi, "$prefersDarkMode", t), n = U(r, "variablesPerPackage", 19, () => ({}));
    let o = L2({
      selectedPackageId: Vc(r.paywallData),
      locale: r.selectedLocale || r.paywallData.default_locale,
      defaultLocale: r.paywallData.default_locale,
      variablesPerPackage: n(),
      colorMode: r.preferredColorMode || (a2() ? "dark" : Re)
    }), i = X(L2(n()[o.selectedPackageId || ""]));
    const s2 = (v, y2) => {
      var x2;
      (x2 = r.onRestorePurchasesClicked) == null || x2.call(r);
    }, l2 = (v, y2) => {
      var x2;
      (x2 = r.onBackClicked) == null || x2.call(r);
    }, c2 = (v, y2) => {
      var T2, S2;
      if (v.destination === "customer_center" && ((T2 = r.onVisitCustomerCenterClicked) == null || T2.call(r)), !v.url)
        return;
      const x2 = bi(v.url.url_lid, o.locale, o.defaultLocale, r.paywallData.components_localizations);
      x2 && ((S2 = r.onNavigateToUrlClicked) == null || S2.call(r, x2));
    }, p2 = (v, y2) => {
      o.selectedPackageId = y2 == null ? void 0 : y2.packageId, y2 != null && y2.packageId && D(i, L2(n()[y2.packageId]));
    }, u = (v, y2) => {
      var x2;
      o.selectedPackageId !== void 0 && ((x2 = r.onPurchaseClicked) == null || x2.call(r, o.selectedPackageId));
    }, _ = (v, y2) => {
      switch (v.type) {
        case "select_package":
          p2(v, y2);
          break;
        case "navigate_to":
          c2(v);
          break;
        case "navigate_back":
          l2();
          break;
        case "restore_purchases":
          s2();
          break;
        case "purchase":
          u();
          break;
      }
    }, g2 = /* @__PURE__ */ E2(() => {
      var v;
      return _d({
        background: (v = r.paywallData.components_config.base) == null ? void 0 : v.background,
        colorMode: o.colorMode
      });
    }), m2 = /* @__PURE__ */ E2(() => gd(r.paywallData, o.colorMode));
    var f2 = ee(), h2 = W(f2);
    Gl(
      h2,
      {
        get onerror() {
          return r.onError;
        }
      },
      (v) => {
        var y2 = hd(), x2 = P2(y2);
        ia(x2, {
          onAction: _,
          get nodeData() {
            return r.paywallData.components_config.base.stack;
          },
          get labels() {
            return r.paywallData.components_localizations;
          },
          get purchaseState() {
            return o;
          },
          get variableDictionary() {
            return d(i);
          }
        });
        var T2 = C(x2, 2);
        {
          var S2 = (w2) => {
            Si(w2, hr(() => r.paywallData.components_config.base.sticky_footer, {
              get stack() {
                return r.paywallData.components_config.base.sticky_footer.stack;
              },
              get labels() {
                return r.paywallData.components_localizations;
              },
              get purchaseState() {
                return o;
              },
              get variableDictionary() {
                return d(i);
              },
              onAction: _
            }));
          };
          N(T2, (w2) => {
            r.paywallData.components_config.base.sticky_footer && w2(S2);
          });
        }
        var q = C(T2, 2);
        {
          var B = (w2) => {
            var z = yd();
            A(() => j2(z, "style", d(g2))), b2(w2, z);
          }, k = (w2) => {
            var z = ee(), Y = W(z);
            {
              var G = (ne) => {
                var J = bd(), re = P2(J);
                A(() => j2(re, "src", d(m2))), b2(ne, J);
              };
              N(
                Y,
                (ne) => {
                  var J;
                  ((J = r.paywallData.components_config.base.background) == null ? void 0 : J.type) === "image" && ne(G);
                },
                true
              );
            }
            b2(w2, z);
          };
          N(q, (w2) => {
            var z;
            ((z = r.paywallData.components_config.base.background) == null ? void 0 : z.type) === "color" ? w2(B) : w2(k, false);
          });
        }
        b2(v, y2);
      }
    ), b2(e, f2), H();
  }
  var wd = (e, r) => {
    var t;
    (t = r.onclick) == null || t.call(r);
  };
  var xd = /* @__PURE__ */ I2("<button><!></button>");
  var Pd = {
    hash: "svelte-1wpam0z",
    code: "button.svelte-1wpam0z {border:none;cursor:pointer;background:transparent;width:fit-content;}"
  };
  function Ei(e, r) {
    V(r, true), R2(e, Pd);
    var t = xd();
    t.__click = [wd, r];
    var a2 = P2(t);
    _e(a2, () => r.children ?? ae), A(() => {
      Fr(t, li(r.class), "svelte-1wpam0z"), t.disabled = !r.onclick, j2(t, "style", r.style);
    }), b2(e, t), H();
  }
  ha(["click"]);
  var Sd = /* @__PURE__ */ I2('<div class="rcb-processing svelte-2j2b59"></div>');
  var Ed = {
    hash: "svelte-2j2b59",
    code: `.rcb-processing.svelte-2j2b59 {width:var(--width, 12px);aspect-ratio:1;border-radius:50%;
    animation: svelte-2j2b59-l5 1.5s infinite linear;}

  @keyframes svelte-2j2b59-l5 {
    0% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
    25% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #ffff;
      background: #fff2;
    }
    50% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #ffff;
    }
    75% {
      box-shadow:
        var(--shadow-offset) 0 #ffff,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
    100% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
  }`
  };
  function Td(e, r) {
    R2(e, Ed);
    let t = U(r, "size", 8, "medium");
    const a2 = {
      small: { width: "8px", offset: "10px" },
      medium: { width: "12px", offset: "20px" },
      large: { width: "16px", offset: "30px" }
    };
    var n = Sd();
    A(() => j2(n, "style", `--shadow-offset: ${a2[t()].offset ?? ""}; --width: ${a2[t()].width ?? ""};`)), b2(e, n);
  }
  var Id = /* @__PURE__ */ I2("<span><!></span>");
  var qd = {
    hash: "svelte-byrjto",
    code: `
  /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-byrjto {font:var(--rc-text-heading2xl-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-byrjto {font:var(--rc-text-headingXl-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-byrjto {font:var(--rc-text-headingLg-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-byrjto {font:var(--rc-text-headingMd-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-byrjto {font:var(--rc-text-bodyBase-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-byrjto {font:var(--rc-text-bodySmall-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-byrjto {font:var(--rc-text-labelButton-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-byrjto {font:var(--rc-text-labelDefault-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-byrjto {font:var(--rc-text-captionDefault-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-byrjto {font:var(--rc-text-captionLink-mobile);}

  @container layout-query-container (width >= 768px) {
    /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-byrjto {font:var(--rc-text-heading2xl-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-byrjto {font:var(--rc-text-headingXl-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-byrjto {font:var(--rc-text-headingLg-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-byrjto {font:var(--rc-text-headingMd-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-byrjto {font:var(--rc-text-bodyBase-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-byrjto {font:var(--rc-text-bodySmall-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-byrjto {font:var(--rc-text-labelButton-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-byrjto {font:var(--rc-text-labelDefault-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-byrjto {font:var(--rc-text-captionDefault-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-byrjto {font:var(--rc-text-captionLink-desktop);}
  }`
  };
  function Fd(e, r) {
    V(r, true), R2(e, qd);
    const t = U(r, "size", 3, "body-base");
    var a2 = Id(), n = P2(a2);
    _e(n, () => r.children ?? ae), A(() => Fr(a2, `rcb-typography rcb-typography-${t() ?? ""} svelte-byrjto`)), b2(e, a2), H();
  }
  var zd = {
    error: "#B0171F",
    warning: "#f4e971",
    focus: "#1148B8",
    accent: "#767676",
    primary: "#576CDB",
    "primary-hover": "rgba(87, 108, 219, .8)",
    "primary-pressed": "rgba(87, 108, 219, .9)",
    "primary-text": "#ffffff",
    white: "#ffffff",
    "grey-text-dark": "rgba(0,0,0,1)",
    "grey-text-light": "rgba(0,0,0,0.7)",
    "grey-ui-dark": "rgba(0,0,0,0.3)",
    "grey-ui-light": "rgba(0,0,0,0.1)",
    "input-background": "white",
    background: "white"
  };
  var Dd = {
    error: "#B0171F",
    warning: "#f4e971",
    focus: "#1148B8",
    accent: "#767676",
    primary: "#576CDB",
    "primary-hover": "rgba(87, 108, 219, .8)",
    "primary-pressed": "rgba(87, 108, 219, .9)",
    "primary-text": "#ffffff",
    white: "#ffffff",
    "grey-text-dark": "rgba(0,0,0,1)",
    "grey-text-light": "rgba(0,0,0,0.7)",
    "grey-ui-dark": "rgba(0,0,0,0.3)",
    "grey-ui-light": "rgba(0,0,0,0.1)",
    "input-background": "white",
    background: "#EFF3FA"
  };
  var Ti = {
    error: "color_error",
    focus: "color_accent",
    accent: "color_accent",
    primary: "color_buttons_primary"
  };
  var Ad = {
    ...Ti,
    "input-background": "color_form_bg",
    background: "color_form_bg"
  };
  var Md = {
    ...Ti,
    "input-background": "color_product_info_bg",
    background: "color_product_info_bg"
  };
  var Ii = {
    "input-border-radius": "4px",
    "input-button-border-radius": "8px"
  };
  var jd = {
    "input-border-radius": "0px",
    "input-button-border-radius": "0px"
  };
  var Nd = {
    "input-border-radius": "12px",
    "input-button-border-radius": "9999px"
  };
  var mo = Ii;
  var fo = "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif";
  var er = {
    regular: "400",
    medium: "500",
    semibold: "600"
  };
  var Le = {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    36: "36px",
    40: "40px"
  };
  var rr = {
    120: "120%",
    130: "130%",
    140: "140%"
  };
  var tr = {
    tight: "0.20%",
    regular: "0",
    loose: "0.20%"
  };
  var me = {
    heading2xl: {
      fontSize: Le[28],
      lineHeight: rr[120],
      fontWeight: er.semibold,
      letterSpacing: tr.tight
    },
    headingXl: {
      fontSize: Le[24],
      lineHeight: rr[130],
      fontWeight: er.semibold,
      letterSpacing: tr.regular
    },
    headingLg: {
      fontSize: "20px",
      lineHeight: rr[130],
      fontWeight: er.semibold,
      letterSpacing: tr.regular
    },
    headingMd: {
      fontSize: "16px",
      lineHeight: rr[140],
      fontWeight: er.medium,
      letterSpacing: tr.regular
    },
    bodyBase: {
      fontSize: Le[16],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.regular
    },
    bodySmall: {
      fontSize: Le[14],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.regular
    },
    labelButton: {
      fontSize: Le[16],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.tight
    },
    labelDefault: {
      fontSize: Le[14],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.tight
    },
    captionDefault: {
      fontSize: Le[12],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.regular
    },
    captionLink: {
      fontSize: Le[12],
      lineHeight: rr[140],
      fontWeight: er.regular,
      letterSpacing: tr.regular
    }
  };
  var ar = {
    heading2xl: {
      ...me.heading2xl,
      fontSize: Le[36]
    },
    headingXl: {
      ...me.headingXl,
      fontSize: Le[32]
    },
    headingLg: {
      ...me.headingLg,
      fontSize: Le[24]
    },
    headingMd: {
      ...me.headingMd,
      fontSize: Le[18]
    },
    bodyBase: {
      ...me.bodyBase
    },
    bodySmall: {
      ...me.bodySmall
    },
    labelButton: {
      ...me.labelButton
    },
    labelDefault: {
      ...me.labelDefault
    },
    captionDefault: {
      ...me.captionDefault
    },
    captionLink: {
      ...me.captionLink
    }
  };
  var Cd = {
    heading2xl: {
      mobile: me.heading2xl,
      desktop: ar.heading2xl
    },
    headingXl: {
      desktop: ar.headingXl,
      mobile: me.headingXl
    },
    headingLg: {
      desktop: ar.headingLg,
      mobile: me.headingLg
    },
    headingMd: {
      desktop: ar.headingMd,
      mobile: me.headingMd
    },
    bodyBase: {
      desktop: ar.bodyBase,
      mobile: me.bodyBase
    },
    bodySmall: {
      desktop: ar.bodySmall,
      mobile: me.bodySmall
    },
    labelButton: {
      desktop: ar.labelButton,
      mobile: me.labelButton
    },
    labelDefault: {
      desktop: ar.labelDefault,
      mobile: me.labelDefault
    },
    captionDefault: {
      desktop: ar.captionDefault,
      mobile: me.captionDefault
    },
    captionLink: {
      desktop: ar.captionLink,
      mobile: me.captionLink
    }
  };
  var Et = (e) => e.length == 7 ? {
    r: parseInt(e.slice(1, 3), 16),
    g: parseInt(e.slice(3, 5), 16),
    b: parseInt(e.slice(5, 7), 16)
  } : e.length == 4 ? {
    r: parseInt(e[1], 16),
    g: parseInt(e[2], 16),
    b: parseInt(e[3], 16)
  } : null;
  var vn = ({ r: e, g: r, b: t, luminanceThreshold: a2 }) => {
    const n = (i) => (i = i / 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
    return 0.2126 * n(e) + 0.7152 * n(r) + 0.0722 * n(t) > a2;
  };
  var kn = 0.37;
  var Od = (e, r = kn) => {
    const t = vn({ ...e, luminanceThreshold: r }) ? "0,0,0" : "255,255,255";
    return {
      "grey-text-dark": `rgb(${t})`,
      "grey-text-light": `rgba(${t},0.70)`,
      "grey-ui-dark": `rgba(${t},0.3)`,
      "grey-ui-light": `rgba(${t},0.1)`
    };
  };
  function Ld(e, r, t) {
    const a2 = Et(e) || { r: 0, g: 0, b: 0 }, n = Et(r) || { r: 255, g: 255, b: 255 }, o = Math.round(n.r * t + a2.r * (1 - t)), i = Math.round(n.g * t + a2.g * (1 - t)), s2 = Math.round(n.b * t + a2.b * (1 - t));
    return `#${Fa(o)}${Fa(i)}${Fa(s2)}`;
  }
  function yo(e, r) {
    const t = { r: 255, g: 255, b: 255 }, a2 = Math.max(0, Math.min(1, r));
    let n = e, o = Et(e) || t;
    (isNaN(o.r) || isNaN(o.g) || isNaN(o.b)) && (o = t, n = "#FFFFFF");
    const s2 = vn({
      ...o,
      luminanceThreshold: kn
    }) ? "#000000" : "#FFFFFF";
    return Ld(n, s2, a2);
  }
  function Fa(e) {
    return e.toString(16).padStart(2, "0").toUpperCase();
  }
  var Bd = (e, r, t, a2 = kn) => {
    const n = {
      "grey-text-dark": t["grey-text-dark"],
      "grey-text-light": t["grey-text-light"],
      "grey-ui-dark": t["grey-ui-dark"],
      "grey-ui-light": t["grey-ui-light"],
      "primary-text": t["primary-text"]
    };
    if (e != null && e.startsWith("#")) {
      const o = Et(e);
      o !== null && Object.assign(n, Od(o));
    }
    if (r != null && r.startsWith("#")) {
      const o = Et(r);
      o !== null && (n["primary-text"] = vn({ ...o, luminanceThreshold: a2 }) ? "black" : "white");
    }
    return n;
  };
  var Rd = (e) => ({
    "primary-hover": yo(e, 0.1),
    "primary-pressed": yo(e, 0.15)
  });
  var Ud = (e, r) => e || r;
  var Vd = (e, r, t) => {
    const a2 = Object.entries(e).map(([n, o]) => [
      n,
      Ud(t ? t[o] : null, r[n])
    ]);
    return Object.fromEntries(a2);
  };
  var qi = (e, r, t) => {
    const a2 = Vd(e, r, t);
    return t ? {
      ...r,
      ...a2,
      ...Bd(a2.background, a2.primary, r),
      ...Rd(a2.primary)
    } : { ...r };
  };
  var Hd = (e) => qi(Md, Dd, e);
  var Fi = (e) => qi(Ad, zd, e);
  var wn = (e) => {
    if (!e)
      return mo;
    switch (e.shapes) {
      case "rounded":
        return Ii;
      case "rectangle":
        return jd;
      case "pill":
        return Nd;
      default:
        return mo;
    }
  };
  var sa = (e = "", r) => r.map(([t, a2]) => `--rc-${e}-${t}: ${a2}`).join("; ");
  var Wd = (e) => {
    const r = sa("color", Object.entries(Hd(e))), t = sa("shape", Object.entries(wn(e)));
    return [r, t].join("; ");
  };
  var Yd = (e) => {
    const r = sa("color", Object.entries(Fi(e))), t = sa("shape", Object.entries(wn(e)));
    return [r, t].join("; ");
  };
  var Gd = (e = "", r) => Object.entries(r).flatMap(([t, { desktop: a2, mobile: n }]) => [
    `--rc-${e}-${t}-desktop: normal normal ${a2.fontWeight} ${a2.fontSize}/${a2.lineHeight} ${fo}`,
    `--rc-${e}-${t}-mobile: normal normal ${n.fontWeight} ${n.fontSize}/${n.lineHeight} ${fo}`,
    `--rc-${e}-${t}-desktop-font-size: ${a2.fontSize}`,
    `--rc-${e}-${t}-mobile-font-size: ${n.fontSize}`
  ]).join("; ");
  var Xd = (e = "", r) => Object.entries(r).map(([t, { mobile: a2, desktop: n }]) => `--rc-${e}-${t}-mobile: ${a2};  --rc-${e}-${t}-desktop: ${n};`).join(" ");
  var Zd = {
    outerPadding: {
      mobile: "clamp(1.3125rem, 5.6vw, 1.5rem)",
      desktop: "clamp(1.5rem, 9.44vw, 5rem)"
    },
    outerPaddingSmall: {
      mobile: "clamp(0.75rem, 4.2vw, 1rem)",
      desktop: "clamp(1.5rem, 9.44vw, 5rem)"
    },
    gapSmall: {
      mobile: "0.25rem",
      desktop: "0.375rem"
    },
    gapMedium: {
      mobile: "0.5rem",
      desktop: "0.75rem"
    },
    gapLarge: {
      mobile: "0.75rem",
      desktop: "0.75rem"
    },
    gapXLarge: {
      mobile: "1rem",
      desktop: "1.5rem"
    },
    gapXXLarge: {
      mobile: "1.25rem",
      desktop: "2.25rem"
    },
    gapXXXLarge: {
      mobile: "2.25rem",
      desktop: "4.5rem"
    },
    inputHeight: {
      mobile: "3rem",
      desktop: "3rem"
    },
    gapStripeElement: {
      mobile: "0.70rem",
      desktop: "1rem"
    }
  };
  var Kd = class {
    constructor(r) {
      M(this, "brandingAppearance");
      r ? this.brandingAppearance = r : this.brandingAppearance = void 0;
    }
    get shape() {
      return wn(this.brandingAppearance);
    }
    get formColors() {
      return Fi(this.brandingAppearance);
    }
    get formStyleVars() {
      return Yd(this.brandingAppearance);
    }
    get productInfoStyleVars() {
      return Wd(this.brandingAppearance);
    }
    get spacing() {
      return Zd;
    }
    get textStyles() {
      return Cd;
    }
    get textStyleVars() {
      return Gd("text", this.textStyles);
    }
    get spacingStyleVars() {
      return Xd("spacing", this.spacing);
    }
  };
  var Jd = /* @__PURE__ */ I2("<button><!></button>");
  var Qd = {
    hash: "svelte-td7xvm",
    code: `button.svelte-td7xvm {border:none;border-radius:var(--rc-shape-input-button-border-radius);cursor:pointer;height:var(--rc-spacing-inputHeight-mobile);color:var(--rc-color-grey-text-dark);background-color:var(--rc-color-grey-ui-dark);display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent;transition:background-color 0.15s ease-in-out;user-select:none;}

  @container layout-query-container (width >= 768px) {button.svelte-td7xvm {height:var(--rc-spacing-inputHeight-desktop);}
  }

  /* focus-visible is triggered only when focused with keyboard/reader */button.svelte-td7xvm:focus-visible {outline:2px solid var(--rc-color-focus);}button.intent-primary.svelte-td7xvm {background-color:var(--rc-color-primary);color:var(--rc-color-primary-text);}button.svelte-td7xvm:disabled {color:var(--rc-color-grey-text-light);background-color:var(--rc-color-grey-ui-dark);outline:none;}button.intent-primary.svelte-td7xvm:not(:disabled):hover {background-color:var(--rc-color-primary-hover);}button.intent-primary.svelte-td7xvm:not(:disabled):active,
  button.svelte-td7xvm:active {background-color:var(--rc-color-primary-pressed);outline:none;}button.intent-primary.svelte-td7xvm:disabled {color:var(--rc-color-grey-text-light);background-color:var(--rc-color-grey-ui-dark);}`
  };
  function zi(e, r) {
    V(r, true), R2(e, Qd);
    const t = U(r, "intent", 3, "primary"), a2 = U(r, "disabled", 3, false), n = U(r, "loading", 3, false), o = /* @__PURE__ */ E2(() => new Kd(r.brandingAppearance)), i = /* @__PURE__ */ E2(() => d(o).textStyleVars), s2 = /* @__PURE__ */ E2(() => d(o).spacingStyleVars), l2 = /* @__PURE__ */ E2(() => d(o).productInfoStyleVars), c2 = /* @__PURE__ */ E2(() => d(o).formStyleVars), p2 = /* @__PURE__ */ E2(() => [
      r.styleOverrides,
      d(i),
      d(s2),
      d(l2),
      d(c2)
    ].join("; "));
    var u = Jd();
    u.__click = function(...f2) {
      var h2;
      (h2 = r.onclick) == null || h2.apply(this, f2);
    };
    var _ = P2(u);
    {
      var g2 = (f2) => {
        Td(f2, { size: "small" });
      }, m2 = (f2) => {
        Fd(f2, {
          size: "body-base",
          children: (h2, v) => {
            var y2 = ee(), x2 = W(y2);
            Al(x2, r, "default", {}), b2(h2, y2);
          },
          $$slots: { default: true }
        });
      };
      N(_, (f2) => {
        n() ? f2(g2) : f2(m2, false);
      });
    }
    A(() => {
      Fr(u, `${`intent-${t()}` ?? ""} svelte-td7xvm`), u.disabled = a2(), j2(u, "data-testid", r.testId), j2(u, "type", r.type), j2(u, "style", d(p2));
    }), b2(e, u), H();
  }
  ha(["click"]);
  var $d = (e) => {
    const { size: r, overrides: t, componentState: a2, zStackChildStyles: n } = e, o = {
      "--height": "unset",
      "--width": "unset",
      "--clip-path": "none",
      "--border-end-start-radius": "unset",
      "--border-end-end-radius": "unset",
      "--border-start-start-radius": "unset",
      "--border-start-end-radius": "unset",
      "--position": "relative",
      "--inset": "0",
      "--transform": "initial"
    }, i = bn(t, a2);
    Object.assign(o, n), Object.assign(o, Ct({ ...r, ...i })), Object.assign(o, Yc(e.mask_shape));
    const s2 = Ye(o, "image"), l2 = Wc(e), c2 = Gc(e);
    return {
      imageStyles: Ce(s2),
      maskPath: l2,
      linearGradientAngle: c2
    };
  };
  var eu = /* @__PURE__ */ pr('<ellipse cx="50" rx="50"></ellipse>');
  var ru = /* @__PURE__ */ pr("<path></path>");
  var tu = /* @__PURE__ */ pr("<stop></stop>");
  var au = /* @__PURE__ */ pr("<linearGradient></linearGradient>");
  var nu = /* @__PURE__ */ pr("<stop></stop>");
  var ou = /* @__PURE__ */ pr('<radialGradient cx="50%" cy="50%" r="50%" fx="50%" fy="50%"></radialGradient>');
  var iu = /* @__PURE__ */ pr('<linearGradient><stop offset="0%"></stop></linearGradient>');
  var su = /* @__PURE__ */ I2('<img style="display: none;" alt=""> <svg class="rc-pw-image-container svelte-1esrvxg" preserveAspectRatio="xMidYMid slice"><defs><clipPath><!></clipPath><!></defs><image class="rc-pw-image svelte-1esrvxg" x="0" y="0" width="100" preserveAspectRatio="xMidYMid slice"></image><rect class="rc-pw-image-overlay svelte-1esrvxg" x="0" y="0" width="100"></rect></svg>', 1);
  var lu = {
    hash: "svelte-1esrvxg",
    code: ".rc-pw-image-container.svelte-1esrvxg {border-end-start-radius:var(--image-border-end-start-radius, 0px);border-end-end-radius:var(--image-border-end-end-radius, 0px);border-start-start-radius:var(--image-border-start-start-radius, 0px);border-start-end-radius:var(--image-border-start-end-radius, 0px);position:relative;overflow:hidden;display:flex;flex:var(--image-flex, 1 1 auto);position:var(--image-position, relative);inset:var(--image-inset, 0);transform:var(--image-transform, initial);height:var(--image-height, initial);width:var(--image-width, initial);}.rc-pw-image.svelte-1esrvxg {width:100%;height:100%;object-fit:cover;display:block;}.rc-pw-image-overlay.svelte-1esrvxg {position:absolute;inset:0;}"
  };
  function cu(e, r) {
    V(r, true), R2(e, lu);
    const t = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "id",
      "source",
      "purchaseState"
    ]);
    let a2 = X(0), n;
    function o() {
      n && D(a2, n.naturalHeight / n.naturalWidth);
    }
    const i = /* @__PURE__ */ E2(() => $d({
      id: r.id,
      colorMode: r.purchaseState.colorMode,
      source: r.source,
      purchaseState: r.purchaseState,
      ...t,
      imageAspectRatio: d(a2)
    })), s2 = /* @__PURE__ */ E2(() => d(i).imageStyles), l2 = /* @__PURE__ */ E2(() => d(i).maskPath), c2 = /* @__PURE__ */ E2(() => d(i).linearGradientAngle), p2 = /* @__PURE__ */ E2(() => {
      var w2, z;
      const k = r.purchaseState.colorMode;
      return (w2 = r.source[k]) != null && w2.original ? r.source[k].original : (z = r.source[Re]) == null ? void 0 : z.original;
    });
    var u = su(), _ = W(u);
    _i(_, (k) => n = k, () => n);
    var g2 = C(_, 2), m2 = P2(g2), f2 = P2(m2), h2 = P2(f2);
    {
      var v = (k) => {
        var w2 = eu();
        A(() => {
          j2(w2, "cy", d(a2) * 50), j2(w2, "ry", d(a2) * 50);
        }), b2(k, w2);
      }, y2 = (k) => {
        var w2 = ru();
        A(() => j2(w2, "d", d(l2))), b2(k, w2);
      };
      N(h2, (k) => {
        var w2;
        ((w2 = r.mask_shape) == null ? void 0 : w2.type) === "circle" ? k(v) : k(y2, false);
      });
    }
    var x2 = C(f2);
    {
      var T2 = (k) => {
        var w2 = au();
        it(w2, 21, () => {
          var z, Y, G, ne;
          return ((Y = (z = r.color_overlay) == null ? void 0 : z[r.purchaseState.colorMode]) == null ? void 0 : Y.points) || ((ne = (G = r.color_overlay) == null ? void 0 : G[Re]) == null ? void 0 : ne.points) || [];
        }, ot, (z, Y) => {
          var G = tu();
          A(() => {
            j2(G, "offset", `${d(Y).percent}%`), j2(G, "style", `stop-color: ${d(Y).color}`);
          }), b2(z, G);
        }), A(() => {
          j2(w2, "id", `gradient-${r.id}`), j2(w2, "x1", d(c2).x1), j2(w2, "y1", d(c2).y1), j2(w2, "x2", d(c2).x2), j2(w2, "y2", d(c2).y2);
        }), b2(k, w2);
      }, S2 = (k) => {
        var w2 = ee(), z = W(w2);
        {
          var Y = (ne) => {
            var J = ou();
            it(J, 21, () => {
              var re, pe, ge, ce;
              return ((pe = (re = r.color_overlay) == null ? void 0 : re[r.purchaseState.colorMode]) == null ? void 0 : pe.points) || ((ce = (ge = r.color_overlay) == null ? void 0 : ge[Re]) == null ? void 0 : ce.points) || [];
            }, ot, (re, pe) => {
              var ge = nu();
              A(() => {
                j2(ge, "offset", `${d(pe).percent}%`), j2(ge, "style", `stop-color: ${d(pe).color}`);
              }), b2(re, ge);
            }), A(() => j2(J, "id", `gradient-${r.id}`)), b2(ne, J);
          }, G = (ne) => {
            var J = ee(), re = W(J);
            {
              var pe = (ge) => {
                var ce = iu(), he = P2(ce);
                A(() => {
                  var xe, vr, _r;
                  j2(ce, "id", `gradient-${r.id}`), j2(he, "style", `stop-color: ${((xe = r.color_overlay[r.purchaseState.colorMode]) == null ? void 0 : xe.value) || ((_r = (vr = r.color_overlay) == null ? void 0 : vr[Re]) == null ? void 0 : _r.value)}`);
                }), b2(ge, ce);
              };
              N(
                re,
                (ge) => {
                  var ce, he;
                  ((he = (ce = r.color_overlay) == null ? void 0 : ce[r.purchaseState.colorMode]) == null ? void 0 : he.type) === "hex" && ge(pe);
                },
                true
              );
            }
            b2(ne, J);
          };
          N(
            z,
            (ne) => {
              var J, re;
              ((re = (J = r.color_overlay) == null ? void 0 : J[r.purchaseState.colorMode]) == null ? void 0 : re.type) === "radial" ? ne(Y) : ne(G, false);
            },
            true
          );
        }
        b2(k, w2);
      };
      N(x2, (k) => {
        var w2, z;
        ((z = (w2 = r.color_overlay) == null ? void 0 : w2[r.purchaseState.colorMode]) == null ? void 0 : z.type) === "linear" ? k(T2) : k(S2, false);
      });
    }
    var q = C(m2), B = C(q);
    A(() => {
      j2(_, "src", d(p2)), j2(g2, "id", `rc-pw-image-container-${r.id}`), j2(g2, "style", d(s2)), j2(g2, "viewBox", `0 0 100 ${d(a2) * 100}`), j2(f2, "id", `clip-path-${r.id}`), j2(q, "href", d(p2)), j2(q, "height", d(a2) * 100), j2(q, "clip-path", `url(#clip-path-${r.id})`), j2(q, "id", r.id), j2(B, "height", d(a2) * 100), j2(B, "clip-path", `url(#clip-path-${r.id})`), j2(B, "fill", `url(#gradient-${r.id})`);
    }), nt("load", _, o), b2(e, u), H();
  }
  function du({ stack: e, zStackChildStyles: r }) {
    const t = e.size.width.type === "fill" ? "100%" : "fit-content", a2 = Ye(r || {}, "purchase-button");
    return Ce({
      ...a2,
      ...{
        position: "var(--purchase-button-position, relative)",
        inset: "var(--purchase-button-inset, 0)",
        transform: "var(--purchase-button-transform, initial)",
        width: t
      }
    });
  }
  var uu = { hash: "svelte-1x8zwdp", code: "" };
  function pu(e, r) {
    V(r, true), R2(e, uu);
    const t = /* @__PURE__ */ Ar(r, [
      "$$slots",
      "$$events",
      "$$legacy",
      "stack",
      "labels",
      "onAction",
      "purchaseState",
      "variableDictionary",
      "zStackChildStyles"
    ]), a2 = () => {
      r.onAction && r.onAction({ type: "purchase" });
    }, n = /* @__PURE__ */ E2(() => du({
      stack: r.stack,
      labels: r.labels,
      onAction: r.onAction,
      purchaseState: r.purchaseState,
      variableDictionary: r.variableDictionary,
      zStackChildStyles: r.zStackChildStyles,
      ...t
    }));
    Ei(e, {
      onclick: a2,
      class: "rc-pw-purchase-button",
      get style() {
        return d(n);
      },
      children: (o, i) => {
        Ot(o, hr(() => r.stack, {
          get labels() {
            return r.labels;
          },
          get purchaseState() {
            return r.purchaseState;
          },
          get variableDictionary() {
            return r.variableDictionary;
          }
        }));
      },
      $$slots: { default: true }
    }), H();
  }
  var _u = (e, r) => {
    e.preventDefault(), e.stopPropagation(), r.onAction && r.onAction({ type: "select_package" }, { packageId: r.package_id });
  };
  var gu = /* @__PURE__ */ I2('<button class="rc-pw-package svelte-123kamd"><!></button>');
  var mu = {
    hash: "svelte-123kamd",
    code: ".rc-pw-package.svelte-123kamd {width:100%;display:flex;margin:0;padding:0;background:initial;border:initial;text-align:initial;position:var(--package-position, relative);inset:var(--package-inset, 0);transform:var(--package-transform, initial);}"
  };
  function fu(e, r) {
    V(r, true), R2(e, mu);
    const t = /* @__PURE__ */ E2(() => {
      var s2;
      return ((s2 = r.purchaseState.variablesPerPackage) == null ? void 0 : s2[r.package_id]) || r.variableDictionary;
    }), a2 = /* @__PURE__ */ E2(() => {
      var s2;
      return {
        selected: ((s2 = r.purchaseState) == null ? void 0 : s2.selectedPackageId) === r.package_id
      };
    }), n = /* @__PURE__ */ E2(() => Ce(Ye(r.zStackChildStyles, "package")));
    var o = gu();
    o.__click = [_u, r];
    var i = P2(o);
    Ot(i, hr(() => r.stack, {
      get labels() {
        return r.labels;
      },
      get onAction() {
        return r.onAction;
      },
      get purchaseState() {
        return r.purchaseState;
      },
      get componentState() {
        return d(a2);
      },
      get variableDictionary() {
        return d(t);
      }
    })), A(() => {
      j2(o, "id", r.id), j2(o, "style", d(n)), fr(o, "selected", d(a2).selected);
    }), b2(e, o), H();
  }
  ha(["click"]);
  function yu(e) {
    const r = {
      "--item-spacing": `${e.item_spacing}px`,
      "--width": "initial",
      "--height": "initial",
      "--flex": "0 1 auto",
      "--position": "relative",
      "--inset": "0",
      "--transform": "initial"
    };
    Object.assign(r, Ct(e.size)), Object.assign(r, e.zStackChildStyles);
    const t = Ye(r, "timeline");
    return Ce(t);
  }
  function bu(e) {
    var a2, n, o, i, s2, l2, c2, p2, u, _;
    const r = {
      "--icon-size": `${e.icon.width_and_height}px`,
      "--icon-padding": `${e.icon.padding}px`,
      "--icon-color": yr({
        colorMap: e.icon.color,
        colorMode: (a2 = e.purchaseState) == null ? void 0 : a2.colorMode
      }),
      "--icon-background-color": yr({
        colorMap: (n = e.icon_background) == null ? void 0 : n.color,
        colorMode: e.purchaseState.colorMode
      }),
      "--icon-border": ki((o = e.icon_background) == null ? void 0 : o.border, (i = e.purchaseState) == null ? void 0 : i.colorMode),
      "--text-spacing": `${e.text_spacing}px`,
      "--border-start-start-radius": "0px",
      "--border-start-end-radius": "0px",
      "--border-end-start-radius": "0px",
      "--border-end-end-radius": "0px",
      "--connector-color": yr({
        colorMap: (s2 = e.connector) == null ? void 0 : s2.color,
        colorMode: e.purchaseState.colorMode
      }),
      "--connector-width": `${((l2 = e.connector) == null ? void 0 : l2.width) || 0}px`,
      "--connector-top": "0px",
      "--connector-height": `${e.item_spacing}px`
    };
    if (Object.assign(r, ((p2 = (c2 = e.icon_background) == null ? void 0 : c2.shape) == null ? void 0 : p2.type) === "rectangle" ? oa((_ = (u = e.icon_background) == null ? void 0 : u.shape) == null ? void 0 : _.corners) : {
      "--border-start-start-radius": "50%",
      "--border-start-end-radius": "50%",
      "--border-end-start-radius": "50%",
      "--border-end-end-radius": "50%"
    }), e.connector) {
      const g2 = e.connector.margin.top !== 0, m2 = e.connector.margin.bottom !== 0, f2 = e.icon.padding + e.icon.width_and_height / 2;
      !g2 && !m2 && (r["--connector-height"] = `${e.item_spacing + f2 * 2}px`, r["--connector-top"] = "50%"), g2 && m2 && (r["--connector-height"] = `${e.item_spacing - e.connector.margin.top - e.connector.margin.bottom}px`, r["--connector-top"] = `calc(100% + ${e.connector.margin.top}px)`), !g2 && m2 && (r["--connector-height"] = `${e.item_spacing - e.connector.margin.bottom + f2}px`, r["--connector-top"] = "50%"), g2 && !m2 && (r["--connector-height"] = `${e.item_spacing + f2}px`, r["--connector-top"] = `calc(100% + ${e.connector.margin.top}px)`);
    }
    const t = Ye(r, "timeline-item");
    return Ce(t);
  }
  function bo(e, r = "title") {
    var l2, c2, p2, u, _;
    const t = {
      "--text-color": "inherit",
      "--text-font-size": "initial",
      "--text-font-weight": "initial",
      "--text-horizontal-alignment": "initial",
      "--text-margin-block-start": "0px",
      "--text-margin-inline-end": "0px",
      "--text-margin-block-end": "0px",
      "--text-margin-inline-start": "0px",
      "--text-padding-block-start": "0px",
      "--text-padding-inline-end": "0px",
      "--text-padding-block-end": "0px",
      "--text-padding-inline-start": "0px"
    }, a2 = {
      color: ((l2 = e[r]) == null ? void 0 : l2.color) || xi,
      font_size: ((c2 = e[r]) == null ? void 0 : c2.font_size) || "body_m",
      font_weight: ((p2 = e[r]) == null ? void 0 : p2.font_weight) || "regular",
      horizontal_alignment: ((u = e[r]) == null ? void 0 : u.horizontal_alignment) || "leading"
    }, { tagToRender: n, textStyles: o } = hn({
      ...e,
      components: [],
      ...a2,
      size: { width: { type: "fit" }, height: { type: "fit" } },
      type: "text",
      margin: { top: 0, bottom: 0, leading: 0, trailing: 0 },
      padding: { top: 0, bottom: 0, leading: 0, trailing: 0 },
      text_lid: ""
    });
    Object.assign(t, o);
    const i = Ce(Ye(t, "timeline-item")), s2 = yn({
      text_lid: (_ = e[r]) == null ? void 0 : _.text_lid,
      locale: e.purchaseState.locale,
      defaultLocale: e.purchaseState.defaultLocale,
      labels: e.labels,
      variableDictionary: e.variableDictionary
    });
    return {
      textStyles: i,
      tagToRender: n,
      textLabel: s2
    };
  }
  var hu = /* @__PURE__ */ I2('<div class="rc-pw-timeline-item svelte-gjmo4g"><div class="rc-pw-timeline-item-icon-container svelte-gjmo4g"><div class="rc-pw-timeline-item-icon svelte-gjmo4g"></div></div> <div class="rc-pw-timeline-item-content svelte-gjmo4g"><!> <!></div></div>');
  var vu = {
    hash: "svelte-gjmo4g",
    code: `.rc-pw-timeline-item.svelte-gjmo4g {display:flex;align-items:center;gap:var(--timeline-item-spacing, 0px);}.rc-pw-timeline-item-icon-container.svelte-gjmo4g {position:relative;border-end-start-radius:var(--timeline-item-border-end-start-radius, 0px);border-end-end-radius:var(--timeline-item-border-end-end-radius, 0px);border-start-start-radius:var(
      --timeline-item-border-start-start-radius,
      0px
    );border-start-end-radius:var(--timeline-item-border-start-end-radius, 0px);width:var(--timeline-item-icon-size, 16px);height:var(--timeline-item-icon-size, 16px);flex-shrink:0;background-color:var(--timeline-item-icon-background-color, #ffffff);border:var(--timeline-item-icon-border, initial);display:flex;align-items:center;justify-content:center;padding:var(--timeline-item-icon-padding, 0px);box-sizing:content-box;}.rc-pw-timeline-item-icon-container.svelte-gjmo4g::before {position:absolute;content:"";z-index:-1;top:var(--timeline-item-connector-top, 0px);height:var(--timeline-item-connector-height, 0px);width:var(--timeline-item-connector-width, 0px);background:var(--timeline-item-connector-color, transparent);}.rc-pw-timeline-item-icon.svelte-gjmo4g {width:var(--timeline-item-icon-size, 10px);height:var(--timeline-item-icon-size, 10px);color:var(--timeline-item-icon-color, #ffffff);display:flex;align-items:center;justify-content:center;}.rc-pw-timeline-item-content.svelte-gjmo4g {display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:var(--timeline-item-text-spacing, 0px);height:fit-content;}.rc-pw-timeline-item-content-title.svelte-gjmo4g,
  .rc-pw-timeline-item-content-description.svelte-gjmo4g {margin-block-start:var(--timeline-item-text-margin-block-start, 0px);margin-inline-end:var(--timeline-item-text-margin-inline-end, 0px);margin-block-end:var(--timeline-item-text-margin-block-end, 0px);margin-inline-start:var(--timeline-item-text-margin-inline-start, 0px);padding-block-start:var(--timeline-item-text-padding-block-start, 0);padding-inline-end:var(--timeline-item-text-padding-inline-end, 0);padding-block-end:var(--timeline-item-text-padding-block-end, 0);padding-inline-start:var(--timeline-item-text-padding-inline-start, 0);font-family:var(--timeline-item-text-font-family, sans-serif);}`
  };
  function ku(e, r) {
    V(r, true), R2(e, vu);
    const t = /* @__PURE__ */ Ar(r, ["$$slots", "$$events", "$$legacy"]), a2 = /* @__PURE__ */ E2(() => bu(t)), n = /* @__PURE__ */ E2(() => bo(t, "title")), o = /* @__PURE__ */ E2(() => d(n).tagToRender), i = /* @__PURE__ */ E2(() => d(n).textStyles), s2 = /* @__PURE__ */ E2(() => d(n).textLabel), l2 = /* @__PURE__ */ E2(() => bo(t, "description")), c2 = /* @__PURE__ */ E2(() => d(l2).tagToRender), p2 = /* @__PURE__ */ E2(() => d(l2).textStyles), u = /* @__PURE__ */ E2(() => d(l2).textLabel);
    var _ = hu(), g2 = C(P2(_), 2), m2 = P2(g2);
    ea(m2, () => d(o), false, (v, y2) => {
      let x2;
      A(() => x2 = ra(
        v,
        x2,
        {
          class: "rc-pw-timeline-item-content-title",
          style: d(i)
        },
        "svelte-gjmo4g",
        v.namespaceURI === xt,
        v.nodeName.includes("-")
      ));
      var T2 = ie();
      A(() => te(T2, d(s2))), b2(y2, T2);
    });
    var f2 = C(m2, 2);
    {
      var h2 = (v) => {
        var y2 = ee(), x2 = W(y2);
        ea(x2, () => d(c2), false, (T2, S2) => {
          let q;
          A(() => q = ra(
            T2,
            q,
            {
              class: "rc-pw-timeline-item-content-description",
              style: d(p2)
            },
            "svelte-gjmo4g",
            T2.namespaceURI === xt,
            T2.nodeName.includes("-")
          ));
          var B = ie();
          A(() => te(B, d(u))), b2(S2, B);
        }), b2(v, y2);
      };
      N(f2, (v) => {
        d(u) && v(h2);
      });
    }
    A(() => j2(_, "style", d(a2))), b2(e, _), H();
  }
  var wu = /* @__PURE__ */ I2('<div class="rc-pw-timeline-container svelte-12g27vu"></div>');
  var xu = {
    hash: "svelte-12g27vu",
    code: ".rc-pw-timeline-container.svelte-12g27vu {display:flex;flex:var(--timeline-flex, 0 1 auto);flex-direction:column;gap:var(--timeline-item-spacing, 0);width:var(--timeline-width, initial);height:var(--timeline-height, initial);position:var(--timeline-position, relative);inset:var(--timeline-inset, 0);transform:var(--timeline-transform, initial);}"
  };
  function Pu(e, r) {
    V(r, true), R2(e, xu);
    const t = /* @__PURE__ */ Ar(r, ["$$slots", "$$events", "$$legacy", "items"]), a2 = /* @__PURE__ */ E2(() => yu({ items: r.items, ...t }));
    var n = ee(), o = W(n);
    {
      var i = (s2) => {
        var l2 = wu();
        it(l2, 21, () => r.items, ot, (c2, p2, u) => {
          var _ = /* @__PURE__ */ E2(() => `${r.id}-${u}`), g2 = /* @__PURE__ */ E2(() => `${r.name}-${u}`);
          ku(c2, hr(() => d(p2), {
            get labels() {
              return r.labels;
            },
            get id() {
              return d(_);
            },
            get name() {
              return d(g2);
            },
            type: "timeline",
            get purchaseState() {
              return r.purchaseState;
            },
            get text_spacing() {
              return r.text_spacing;
            },
            get item_spacing() {
              return r.item_spacing;
            }
          }));
        }), A(() => j2(l2, "style", d(a2))), b2(s2, l2);
      };
      N(o, (s2) => {
        r.items.length && s2(i);
      });
    }
    b2(e, n), H();
  }
  var Su = /* @__PURE__ */ I2('<footer class="rcb-modal-footer svelte-1f9z0o8"><!></footer>');
  var Eu = {
    hash: "svelte-1f9z0o8",
    code: "footer.svelte-1f9z0o8 {display:flex;flex-direction:column;}"
  };
  function Tu(e, r) {
    V(r, false), R2(e, Eu);
    let t = U(r, "children", 8);
    Qe();
    var a2 = Su(), n = P2(a2);
    _e(n, () => t() ?? ae), b2(e, a2), H();
  }
  var Iu = {
    hash: "svelte-1bzqb13",
    code: ".rcb-modal-section.svelte-1bzqb13 {padding:8px 0px;display:flex;}section.rcb-modal-section.svelte-1bzqb13 {flex-grow:1;}.rcb-modal-section.svelte-1bzqb13:last-of-type {padding:0;}"
  };
  function qu(e, r) {
    V(r, false), R2(e, Iu);
    let t = U(r, "as", 8, "section"), a2 = U(r, "children", 8);
    Qe();
    var n = ee(), o = W(n);
    ea(o, t, false, (i, s2) => {
      ra(i, null, { class: "rcb-modal-section" }, "svelte-1bzqb13", i.namespaceURI === xt, i.nodeName.includes("-"));
      var l2 = ee(), c2 = W(l2);
      _e(c2, () => a2() ?? ae), b2(s2, l2);
    }), b2(e, n), H();
  }
  var Fu = /* @__PURE__ */ I2("<div><!></div>");
  var zu = {
    hash: "svelte-b5dygi",
    code: `.rcb-column.svelte-b5dygi {display:flex;flex-direction:column;justify-content:flex-start;flex-grow:1;min-width:100%;}.rcb-column.align-center.svelte-b5dygi {justify-content:center;}.rcb-column.align-end.svelte-b5dygi {justify-content:flex-end;}.rcb-column.gap-small.svelte-b5dygi {gap:var(--rc-spacing-gapSmall-mobile);}.rcb-column.gap-medium.svelte-b5dygi {gap:var(--rc-spacing-gapXLarge-mobile);}.rcb-column.gap-large.svelte-b5dygi {gap:var(--rc-spacing-gapXXLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rcb-column.gap-small.svelte-b5dygi {gap:var(--rc-spacing-gapSmall-desktop);}.rcb-column.gap-medium.svelte-b5dygi {gap:var(--rc-spacing-gapLarge-desktop);}.rcb-column.gap-large.svelte-b5dygi {gap:var(--rc-spacing-gapXXLarge-desktop);}
  }`
  };
  function Di(e, r) {
    V(r, false), R2(e, zu);
    let t = U(r, "gap", 8, "small"), a2 = U(r, "align", 8, "start"), n = U(r, "children", 8);
    Qe();
    var o = Fu(), i = P2(o);
    _e(i, () => n() ?? ae), A(() => Fr(o, `rcb-column gap-${t() ?? ""} align-${a2() ?? ""} svelte-b5dygi`)), b2(e, o), H();
  }
  var Du = /* @__PURE__ */ I2('<div class="rcb-row svelte-1seeuxq"><!></div>');
  var Au = {
    hash: "svelte-1seeuxq",
    code: ".rcb-row.svelte-1seeuxq {display:flex;flex-direction:row;justify-content:flex-start;}"
  };
  function Mu(e, r) {
    V(r, false), R2(e, Au);
    let t = U(r, "children", 8);
    Qe();
    var a2 = Du(), n = P2(a2);
    _e(n, () => t() ?? ae), b2(e, a2), H();
  }
  var ju = /* @__PURE__ */ I2("<span><!></span>");
  var Nu = {
    hash: "svelte-orw2sj",
    code: `.rcb-typography.svelte-orw2sj {display:inline-block;line-height:normal;}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-orw2sj {font:var(--rc-text-heading2xl-mobile);}.rcb-typography-heading-2xl.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-heading2xl-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-orw2sj {font:var(--rc-text-headingXl-mobile);}.rcb-typography-heading-xl.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingXl-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-orw2sj {font:var(--rc-text-headingLg-mobile);}.rcb-typography-heading-lg.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingLg-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-orw2sj {font:var(--rc-text-headingMd-mobile);}.rcb-typography-heading-md.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingMd-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-orw2sj {font:var(--rc-text-bodyBase-mobile);}.rcb-typography-body-base.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-bodyBase-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-orw2sj {font:var(--rc-text-bodySmall-mobile);}.rcb-typography-body-small.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-bodySmall-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-orw2sj {font:var(--rc-text-labelButton-mobile);}.rcb-typography-label-button.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-labelButton-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-orw2sj {font:var(--rc-text-labelDefault-mobile);}.rcb-typography-label-default.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-labelDefault-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-orw2sj {font:var(--rc-text-captionDefault-mobile);}.rcb-typography-caption-default.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-captionDefault-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-orw2sj {font:var(--rc-text-captionLink-mobile);}.rcb-typography-caption-link.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-captionLink-branded-mobile);}

  @container layout-query-container (width >= 768px) {span.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-brandedText-font-style-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-orw2sj {font:var(--rc-text-heading2xl-desktop);}.rcb-typography-heading-2xl.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-heading2xl-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-orw2sj {font:var(--rc-text-headingXl-desktop);}.rcb-typography-heading-xl.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingXl-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-orw2sj {font:var(--rc-text-headingLg-desktop);}.rcb-typography-heading-lg.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingLg-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-orw2sj {font:var(--rc-text-headingMd-desktop);}.rcb-typography-heading-md.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-headingMd-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-orw2sj {font:var(--rc-text-bodyBase-desktop);}.rcb-typography-body-base.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-bodyBase-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-orw2sj {font:var(--rc-text-bodySmall-desktop);}.rcb-typography-body-small.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-bodySmall-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-orw2sj {font:var(--rc-text-labelButton-desktop);}.rcb-typography-label-button.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-labelButton-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-orw2sj {font:var(--rc-text-labelDefault-desktop);}.rcb-typography-label-default.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-labelDefault-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-orw2sj {font:var(--rc-text-captionDefault-desktop);}.rcb-typography-caption-default.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-captionDefault-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-orw2sj {font:var(--rc-text-captionLink-desktop);}.rcb-typography-caption-link.rcb-typography-branded.svelte-orw2sj {font:var(--rc-text-captionLink-branded-desktop);}
  }`
  };
  function se(e, r) {
    V(r, true), R2(e, Nu);
    const t = U(r, "size", 3, "body-base"), a2 = U(r, "branded", 3, false);
    var n = ju(), o = P2(n);
    _e(o, () => r.children ?? ae), A(() => Fr(n, `rcb-typography rcb-typography-${t() ?? ""} ${(a2() ? "rcb-typography-branded" : "") ?? ""} svelte-orw2sj`)), b2(e, n), H();
  }
  var Cu = /* @__PURE__ */ I2("<div><!></div>");
  var Ou = /* @__PURE__ */ I2('<span style="display: block;"><!></span>');
  var Lu = /* @__PURE__ */ I2("<!> <!>", 1);
  var Bu = /* @__PURE__ */ I2("<!> <!>", 1);
  var Ru = /* @__PURE__ */ I2('<div class="rcb-modal-message svelte-w46z5s" data-type="error"><!></div>');
  var Uu = {
    hash: "svelte-w46z5s",
    code: `.rcb-modal-message-icon.svelte-w46z5s {flex-shrink:0;align-self:center;margin-right:16px;}.rcb-modal-message.svelte-w46z5s {width:100%;min-height:160px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:left;margin-top:4px;}.rcb-modal-message[data-has-title="false"].svelte-w46z5s {margin-top:var(--rc-spacing-gapXXLarge-mobile);}.rcb-modal-message-icon.small.svelte-w46z5s {height:var(--rc-text-headingLg-mobile-font-size);width:var(--rc-text-headingLg-mobile-font-size);}.rcb-modal-message-icon.large.svelte-w46z5s {height:calc(2 * var(--rc-text-headingMd-mobile-font-size));width:calc(2 * var(--rc-text-headingMd-mobile-font-size));}

  @container layout-query-container (width >= 768px) {.rcb-modal-message-icon.small.svelte-w46z5s {height:var(--rc-text-headingLg-desktop-font-size);width:var(--rc-text-headingLg-desktop-font-size);}.rcb-modal-message-icon.large.svelte-w46z5s {height:calc(2 * var(--rc-text-headingMd-desktop-font-size));width:calc(2 * var(--rc-text-headingMd-desktop-font-size));}.rcb-modal-message[data-has-title="false"].svelte-w46z5s {margin-top:var(--rc-spacing-gapXXLarge-desktop);}
  }`
  };
  function Vu(e, r) {
    V(r, true), R2(e, Uu);
    const t = U(r, "title", 3, null), a2 = U(r, "icon", 3, null), n = 32;
    let o = X(null), i = X(false), s2;
    We(() => (d(o) && (s2 = new ResizeObserver(() => {
      var p2;
      D(i, (((p2 = d(o)) == null ? void 0 : p2.offsetHeight) ?? 0) > n);
    }), s2.observe(d(o))), () => {
      s2 == null || s2.disconnect();
    }));
    var l2 = Ru(), c2 = P2(l2);
    Di(c2, {
      gap: "medium",
      align: "start",
      children: (p2, u) => {
        var _ = Bu(), g2 = W(_);
        Mu(g2, {
          children: (h2, v) => {
            var y2 = Lu(), x2 = W(y2);
            {
              var T2 = (B) => {
                var k = Cu(), w2 = P2(k);
                _e(w2, a2), A(() => Fr(k, `rcb-modal-message-icon ${(d(i) ? "large" : "small") ?? ""} svelte-w46z5s`)), b2(B, k);
              };
              N(x2, (B) => {
                a2() && B(T2);
              });
            }
            var S2 = C(x2, 2);
            {
              var q = (B) => {
                var k = Ou(), w2 = P2(k);
                se(w2, {
                  size: "heading-md",
                  children: (z, Y) => {
                    var G = ie();
                    A(() => te(G, t())), b2(z, G);
                  },
                  $$slots: { default: true }
                }), _i(k, (z) => D(o, z), () => d(o)), b2(B, k);
              };
              N(S2, (B) => {
                t() && B(q);
              });
            }
            b2(h2, y2);
          },
          $$slots: { default: true }
        });
        var m2 = C(g2, 2);
        {
          var f2 = (h2) => {
            se(h2, {
              size: "body-small",
              children: (v, y2) => {
                var x2 = ee(), T2 = W(x2);
                _e(T2, () => r.message ?? ae), b2(v, x2);
              },
              $$slots: { default: true }
            });
          };
          N(m2, (h2) => {
            r.message && h2(f2);
          });
        }
        b2(p2, _);
      },
      $$slots: { default: true }
    }), A(() => j2(l2, "data-has-title", !!t())), b2(e, l2), H();
  }
  var Hu = /* @__PURE__ */ I2('<div class="rcb-modal-message-icon svelte-c8cuu5"><!></div>');
  var Wu = /* @__PURE__ */ I2("<!> <!>", 1);
  var Yu = /* @__PURE__ */ I2('<div class="rcb-modal-message svelte-c8cuu5" data-type="success"><!></div>');
  var Gu = {
    hash: "svelte-c8cuu5",
    code: `.rcb-modal-message-icon.svelte-c8cuu5 {height:54px;width:54px;margin:0 auto;}.rcb-modal-message[data-has-title="false"].svelte-c8cuu5 {margin-top:var(--rc-spacing-gapXXLarge-mobile);}.rcb-modal-message.svelte-c8cuu5 {width:100%;min-height:160px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;}

  @container layout-query-container (width >= 768px) {.rcb-modal-message[data-has-title="false"].svelte-c8cuu5 {margin-top:var(--rc-spacing-gapXXLarge-desktop);}
  }`
  };
  function Xu(e, r) {
    V(r, true), R2(e, Gu);
    const t = U(r, "title", 3, null), a2 = U(r, "icon", 3, null);
    var n = Yu(), o = P2(n);
    Di(o, {
      gap: "large",
      align: "center",
      children: (i, s2) => {
        var l2 = Wu(), c2 = W(l2);
        {
          var p2 = (g2) => {
            var m2 = Hu(), f2 = P2(m2);
            _e(f2, a2), b2(g2, m2);
          };
          N(c2, (g2) => {
            a2() && g2(p2);
          });
        }
        var u = C(c2, 2);
        {
          var _ = (g2) => {
            se(g2, {
              size: "heading-md",
              children: (m2, f2) => {
                var h2 = ie();
                A(() => te(h2, t())), b2(m2, h2);
              },
              $$slots: { default: true }
            });
          };
          N(u, (g2) => {
            t() && g2(_);
          });
        }
        b2(i, l2);
      },
      $$slots: { default: true }
    }), A(() => j2(n, "data-has-title", !!t())), b2(e, n), H();
  }
  var xn = "rcb-ui-events-tracker";
  var Pn = "branding";
  var Zu = /* @__PURE__ */ I2('<div class="message-layout svelte-qavr33"><div class="message-layout-content svelte-qavr33"><!></div> <div class="message-layout-footer"><!></div></div>');
  var Ku = {
    hash: "svelte-qavr33",
    code: `.message-layout.svelte-qavr33 {display:flex;flex-direction:column;}.message-layout-content.svelte-qavr33 {flex-grow:1;display:flex;flex-direction:column;justify-content:center;}

  @container layout-query-container (width < 768px) {.message-layout.svelte-qavr33 {flex-grow:1;gap:var(--rc-spacing-gapXXLarge-mobile);}
  }

  @container layout-query-container (width >= 768px) {.message-layout.svelte-qavr33 {min-height:354px;gap:var(--rc-spacing-gapXXLarge-desktop);}.message-layout-content.svelte-qavr33 {justify-content:flex-start;flex-grow:1;}
  }`
  };
  function Sn(e, r) {
    V(r, true), R2(e, Ku);
    let t = U(r, "title", 3, null), a2 = U(r, "closeButtonTitle", 3, "Go back to app"), n = U(r, "icon", 3, null), o = U(r, "message", 3, null);
    const i = Ee(Pn);
    function s2() {
      r.onDismiss();
    }
    var l2 = Zu(), c2 = P2(l2), p2 = P2(c2);
    qu(p2, {
      children: (g2, m2) => {
        var f2 = ee(), h2 = W(f2);
        {
          var v = (x2) => {
            Xu(x2, {
              get title() {
                return t();
              },
              get icon() {
                return n();
              }
            });
          }, y2 = (x2) => {
            Vu(x2, {
              get title() {
                return t();
              },
              get icon() {
                return n();
              },
              get message() {
                return o();
              }
            });
          };
          N(h2, (x2) => {
            r.type === "success" ? x2(v) : x2(y2, false);
          });
        }
        b2(g2, f2);
      },
      $$slots: { default: true }
    });
    var u = C(c2, 2), _ = P2(u);
    Tu(_, {
      children: (g2, m2) => {
        zi(g2, {
          onclick: s2,
          type: "submit",
          brandingAppearance: i,
          children: (f2, h2) => {
            var v = ie();
            A(() => te(v, a2())), b2(f2, v);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }), b2(e, l2), H();
  }
  function ur(e, r) {
    V(r, true);
    const t = De(), a2 = () => ze(o, "$translator", t), n = U(r, "key", 3, ""), o = Ee(Ne), i = /* @__PURE__ */ E2(() => n() ? a2().translate(n() || "", r.variables) : void 0);
    var s2 = ee(), l2 = W(s2);
    {
      var c2 = (u) => {
        var _ = ie();
        A(() => te(_, d(i))), b2(u, _);
      }, p2 = (u) => {
        var _ = ee(), g2 = W(_);
        _e(g2, () => r.children ?? ae), b2(u, _);
      };
      N(l2, (u) => {
        d(i) ? u(c2) : u(p2, false);
      });
    }
    b2(e, s2), H();
  }
  var Ju = /* @__PURE__ */ I2('<p class="footer-caption svelte-1hbk6xu"><!></p>');
  var Qu = /* @__PURE__ */ I2('<p class="footer-caption svelte-1hbk6xu"><!></p>');
  var $u = /* @__PURE__ */ I2('<div class="footer-caption-container svelte-1hbk6xu"><!> <!> <p class="footer-caption svelte-1hbk6xu"><!></p></div>');
  var ep = {
    hash: "svelte-1hbk6xu",
    code: `.footer-caption-container.svelte-1hbk6xu {display:flex;flex-direction:column;gap:var(--rc-spacing-gapLarge-mobile);}.footer-caption.svelte-1hbk6xu {color:var(--rc-color-grey-text-light);text-align:center;margin:0;}

  @container layout-query-container (width >= 768px) {.footer-caption-container.svelte-1hbk6xu {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
  };
  function rp(e, r) {
    V(r, false), R2(e, ep);
    const t = De(), a2 = () => ze(l2, "$translator", t), n = Ca(), o = Ca();
    let i = U(r, "brandingInfo", 8, null), s2 = U(r, "subscriptionOption", 8, null);
    const l2 = Ee(Ne);
    Kn(
      () => (Va(i()), a2(), O),
      () => {
        var h2;
        D(n, i() ? a2().translate(O.PaymentEntryPageTermsInfo, { appName: (h2 = i()) == null ? void 0 : h2.app_name }) : null);
      }
    ), Kn(
      () => (Va(s2()), a2(), Xa),
      () => {
        var h2, v, y2, x2, T2, S2, q, B, k, w2, z, Y, G, ne, J, re, pe, ge, ce;
        D(o, (v = (h2 = s2()) == null ? void 0 : h2.base) != null && v.price && ((x2 = (y2 = s2()) == null ? void 0 : y2.trial) != null && x2.period) && ((S2 = (T2 = s2()) == null ? void 0 : T2.base) != null && S2.period) && ((k = (B = (q = s2()) == null ? void 0 : q.base) == null ? void 0 : B.period) != null && k.unit) ? a2().translate(O.PaymentEntryPageTrialInfo, {
          price: Ir((z = (w2 = s2()) == null ? void 0 : w2.base) == null ? void 0 : z.price.amountMicros, (G = (Y = s2()) == null ? void 0 : Y.base) == null ? void 0 : G.price.currency, a2().locale || a2().fallbackLocale),
          perFrequency: a2().translatePeriodFrequency(((re = (J = (ne = s2()) == null ? void 0 : ne.base) == null ? void 0 : J.period) == null ? void 0 : re.number) || 1, (ce = (ge = (pe = s2()) == null ? void 0 : pe.base) == null ? void 0 : ge.period) == null ? void 0 : ce.unit, { useMultipleWords: true }),
          renewalDate: a2().translateDate(Xa(/* @__PURE__ */ new Date(), s2().trial.period || s2().base.period, true), {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }) : null);
      }
    ), pl(), Qe();
    var c2 = $u(), p2 = P2(c2);
    {
      var u = (h2) => {
        var v = Ju(), y2 = P2(v);
        se(y2, {
          size: "caption-default",
          children: (x2, T2) => {
            var S2 = ie();
            A(() => te(S2, d(n))), b2(x2, S2);
          },
          $$slots: { default: true }
        }), b2(h2, v);
      };
      N(p2, (h2) => {
        d(n) && s2() && h2(u);
      });
    }
    var _ = C(p2, 2);
    {
      var g2 = (h2) => {
        var v = Qu(), y2 = P2(v);
        se(y2, {
          size: "caption-default",
          children: (x2, T2) => {
            var S2 = ie();
            A(() => te(S2, d(o))), b2(x2, S2);
          },
          $$slots: { default: true }
        }), b2(h2, v);
      };
      N(_, (h2) => {
        d(o) && h2(g2);
      });
    }
    var m2 = C(_, 2), f2 = P2(m2);
    se(f2, {
      size: "caption-default",
      children: (h2, v) => {
        ur(h2, {
          get key() {
            return O.PaymentEntryPagePaymentStepTitle;
          }
        });
      },
      $$slots: { default: true }
    }), b2(e, c2), H();
  }
  var Fe = /* @__PURE__ */ ((e) => (e.SDKInitialized = "sdk_initialized", e.CheckoutSessionStart = "checkout_session_start", e.CheckoutSessionEnd = "checkout_session_end", e.CheckoutFlowError = "checkout_flow_error", e.CheckoutPaymentTaxCalculation = "checkout_payment_tax_calculation", e.CheckoutPaymentFormImpression = "checkout_payment_form_impression", e.CheckoutPaymentFormError = "checkout_payment_form_error", e.CheckoutPaymentFormDismiss = "checkout_payment_form_dismiss", e.CheckoutPaymentFormSubmit = "checkout_payment_form_submit", e.CheckoutPaymentFormGatewayError = "checkout_payment_form_gateway_error", e.CheckoutPurchaseSuccessfulImpression = "checkout_purchase_successful_impression", e.CheckoutPurchaseSuccessfulDismiss = "checkout_purchase_successful_dismiss", e))(Fe || {});
  var En = /* @__PURE__ */ ((e) => (e.tax_collection_disabled = "tax_collection_disabled", e.invalid_tax_location = "invalid_tax_location", e.rate_limit_exceeded = "rate_limit_exceeded", e.missing_required_permission = "missing_required_permission", e.invalid_origin_address = "invalid_origin_address", e.taxes_not_active = "taxes_not_active", e.unexpected_gateway_error = "unexpected_gateway_error", e))(En || {});
  function tp({
    errorCode: e,
    errorMessage: r
  }) {
    return {
      eventName: Fe.CheckoutFlowError,
      properties: {
        errorCode: e,
        errorMessage: r
      }
    };
  }
  function ap({
    errorCode: e,
    errorMessage: r
  }) {
    return {
      eventName: Fe.CheckoutPaymentFormError,
      properties: {
        errorCode: e,
        errorMessage: r
      }
    };
  }
  function np({
    appearance: e,
    rcPackage: r,
    purchaseOptionToUse: t,
    customerEmail: a2
  }) {
    return {
      eventName: Fe.CheckoutSessionStart,
      properties: {
        customizationColorButtonsPrimary: (e == null ? void 0 : e.color_buttons_primary) ?? null,
        customizationColorAccent: (e == null ? void 0 : e.color_accent) ?? null,
        customizationColorError: (e == null ? void 0 : e.color_error) ?? null,
        customizationColorProductInfoBg: (e == null ? void 0 : e.color_product_info_bg) ?? null,
        customizationColorFormBg: (e == null ? void 0 : e.color_form_bg) ?? null,
        customizationColorPageBg: (e == null ? void 0 : e.color_page_bg) ?? null,
        customizationFont: (e == null ? void 0 : e.font) ?? null,
        customizationShapes: (e == null ? void 0 : e.shapes) ?? null,
        customizationShowProductDescription: (e == null ? void 0 : e.show_product_description) ?? null,
        productInterval: r.webBillingProduct.normalPeriodDuration,
        productPrice: r.webBillingProduct.currentPrice.amountMicros,
        productCurrency: r.webBillingProduct.currentPrice.currency,
        selectedProductId: r.webBillingProduct.identifier,
        selectedPackageId: r.identifier,
        selectedPurchaseOption: t.id,
        customerEmailProvidedByDeveloper: !!a2
      }
    };
  }
  function op({
    redemptionInfo: e
  }) {
    return {
      eventName: Fe.CheckoutSessionEnd,
      properties: {
        outcome: "finished",
        withRedemptionInfo: !!e
      }
    };
  }
  function ip() {
    return {
      eventName: Fe.CheckoutSessionEnd,
      properties: {
        outcome: "closed"
      }
    };
  }
  function sp({
    errorCode: e,
    errorMessage: r
  }) {
    return {
      eventName: Fe.CheckoutSessionEnd,
      properties: {
        outcome: "errored",
        errorCode: e,
        errorMessage: r
      }
    };
  }
  function lp({
    taxCalculation: e,
    taxCustomerDetails: r
  }) {
    const t = e.failed_reason === En.tax_collection_disabled ? "disabled" : e.failed_reason ? "failed" : e.tax_amount_in_micros === 0 ? "not-taxed" : "taxed", a2 = r === null ? "auto" : "form";
    return {
      eventName: Fe.CheckoutPaymentTaxCalculation,
      properties: {
        outcome: t,
        ui_element: a2,
        tax_inclusive: e.tax_inclusive,
        error_code: e.failed_reason ?? null
      }
    };
  }
  function cp({
    selectedPaymentMethod: e
  }) {
    return {
      eventName: Fe.CheckoutPaymentFormSubmit,
      properties: {
        selectedPaymentMethod: e ?? null
      }
    };
  }
  function dp({
    errorCode: e,
    errorMessage: r
  }) {
    return {
      eventName: Fe.CheckoutPaymentFormGatewayError,
      properties: {
        errorCode: e,
        errorMessage: r
      }
    };
  }
  var up = `<svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(0.5)" transform-origin="center">
  <path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 11.5858 20.8358 11.25 21.25 11.25C21.6642 11.25 22 11.5858 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.4142 2 12.75 2.33579 12.75 2.75C12.75 3.16421 12.4142 3.5 12 3.5Z" fill="currentColor"/>
  </g>
</svg>`;
  var pp = /* @__PURE__ */ I2('<div style="color:var(--rc-color-accent);" class="rcb-ui-asset-icon svelte-1sxpw7o"><!></div>');
  var _p = {
    hash: "svelte-1sxpw7o",
    code: `
  @-webkit-keyframes svelte-1sxpw7o-rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes svelte-1sxpw7o-rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }div.svelte-1sxpw7o {width:80px;height:80px;
    -webkit-animation: svelte-1sxpw7o-rotating 2s ease-in-out infinite;
    -moz-animation: svelte-1sxpw7o-rotating 2s ease-in-out infinite;
    -ms-animation: svelte-1sxpw7o-rotating 2s ease-in-out infinite;
    -o-animation: svelte-1sxpw7o-rotating 2s ease-in-out infinite;
    animation: svelte-1sxpw7o-rotating 2s ease-in-out infinite;}`
  };
  function gp(e) {
    R2(e, _p);
    var r = pp(), t = P2(r);
    Wr(t, () => up), b2(e, r);
  }
  var mp = /* @__PURE__ */ I2('<div class="rcb-modal-loader svelte-102edf4"><!></div>');
  var fp = {
    hash: "svelte-102edf4",
    code: `.rcb-modal-loader.svelte-102edf4 {width:100%;flex-grow:1;display:flex;justify-content:center;align-items:center;}

  @container layout-query-container (width >= 768px) {.rcb-modal-loader.svelte-102edf4 {align-items:flex-start;margin-top:calc(var(--rc-spacing-gapXXLarge-desktop) * 6);}
  }`
  };
  function Ai(e) {
    R2(e, fp);
    var r = mp(), t = P2(r);
    gp(t), b2(e, r);
  }
  function yp(e, r) {
    var c2, p2;
    V(r, true);
    const t = De(), a2 = () => ze(n, "$translator", t), n = Ee(Ne), o = Ee(Pn), i = /* @__PURE__ */ E2(() => r.priceBreakdown ? a2().formatPrice(r.priceBreakdown.totalAmountInMicros, r.priceBreakdown.currency) : null), s2 = (p2 = (c2 = r.subscriptionOption) == null ? void 0 : c2.trial) == null ? void 0 : p2.period, l2 = /* @__PURE__ */ E2(() => s2 ? a2().translatePeriod(s2.number, s2.unit) : null);
    zi(e, {
      get disabled() {
        return r.disabled;
      },
      testId: "PayButton",
      brandingAppearance: o,
      children: (u, _) => {
        var g2 = ee(), m2 = W(g2);
        {
          var f2 = (v) => {
            var y2 = /* @__PURE__ */ E2(() => ({ trialPeriodLabel: d(l2) }));
            ur(v, {
              get key() {
                return O.PaymentEntryPageButtonStartTrial;
              },
              get variables() {
                return d(y2);
              }
            });
          }, h2 = (v) => {
            var y2 = ee(), x2 = W(y2);
            {
              var T2 = (q) => {
                var B = /* @__PURE__ */ E2(() => ({ formattedPrice: d(i) }));
                ur(q, {
                  get key() {
                    return O.PaymentEntryPageButtonWithPrice;
                  },
                  get variables() {
                    return d(B);
                  }
                });
              }, S2 = (q) => {
                ur(q, {
                  get key() {
                    return O.PaymentEntryPageButtonPay;
                  }
                });
              };
              N(
                x2,
                (q) => {
                  d(i) ? q(T2) : q(S2, false);
                },
                true
              );
            }
            b2(v, y2);
          };
          N(m2, (v) => {
            var y2;
            (y2 = r.subscriptionOption) != null && y2.trial ? v(f2) : v(h2, false);
          });
        }
        b2(u, g2);
      },
      $$slots: { default: true }
    }), H();
  }
  var bp = {
    error: "#B0171F",
    warning: "#f4e971",
    focus: "#1148B8",
    accent: "#767676",
    primary: "#576CDB",
    "primary-hover": "rgba(87, 108, 219, .8)",
    "primary-pressed": "rgba(87, 108, 219, .9)",
    "primary-text": "#ffffff",
    white: "#ffffff",
    "grey-text-dark": "rgba(0,0,0,1)",
    "grey-text-light": "rgba(0,0,0,0.7)",
    "grey-ui-dark": "rgba(0,0,0,0.3)",
    "grey-ui-light": "rgba(0,0,0,0.1)",
    "input-background": "white",
    background: "white"
  };
  var hp = {
    error: "#B0171F",
    warning: "#f4e971",
    focus: "#1148B8",
    accent: "#767676",
    primary: "#576CDB",
    "primary-hover": "rgba(87, 108, 219, .8)",
    "primary-pressed": "rgba(87, 108, 219, .9)",
    "primary-text": "#ffffff",
    white: "#ffffff",
    "grey-text-dark": "rgba(0,0,0,1)",
    "grey-text-light": "rgba(0,0,0,0.7)",
    "grey-ui-dark": "rgba(0,0,0,0.3)",
    "grey-ui-light": "rgba(0,0,0,0.1)",
    "input-background": "white",
    background: "#EFF3FA"
  };
  var Mi = {
    error: "color_error",
    focus: "color_accent",
    accent: "color_accent",
    primary: "color_buttons_primary"
  };
  var vp = {
    ...Mi,
    "input-background": "color_form_bg",
    background: "color_form_bg"
  };
  var kp = {
    ...Mi,
    "input-background": "color_product_info_bg",
    background: "color_product_info_bg"
  };
  var ji = {
    "input-border-radius": "4px",
    "input-button-border-radius": "8px"
  };
  var wp = {
    "input-border-radius": "0px",
    "input-button-border-radius": "0px"
  };
  var xp = {
    "input-border-radius": "12px",
    "input-button-border-radius": "9999px"
  };
  var ho = ji;
  var la = "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif";
  var Ni = "BrandCustomFont";
  var vo = `${Ni}, ${la}`;
  var nr = {
    regular: "400",
    medium: "500",
    semibold: "600"
  };
  var Be = {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    36: "36px",
    40: "40px"
  };
  var or = {
    120: "120%",
    130: "130%",
    140: "140%"
  };
  var ir = {
    tight: "0.20%",
    regular: "0",
    loose: "0.20%"
  };
  var fe = {
    heading2xl: {
      fontSize: Be[28],
      lineHeight: or[130],
      fontWeight: nr.semibold,
      letterSpacing: ir.loose
    },
    headingXl: {
      fontSize: Be[24],
      lineHeight: or[130],
      fontWeight: nr.semibold,
      letterSpacing: ir.loose
    },
    headingLg: {
      fontSize: "20px",
      lineHeight: or[130],
      fontWeight: nr.semibold,
      letterSpacing: ir.loose
    },
    headingMd: {
      fontSize: "16px",
      lineHeight: or[140],
      fontWeight: nr.medium,
      letterSpacing: ir.regular
    },
    bodyBase: {
      fontSize: Be[16],
      lineHeight: or[140],
      fontWeight: nr.regular,
      letterSpacing: ir.regular
    },
    bodySmall: {
      fontSize: Be[14],
      lineHeight: or[140],
      fontWeight: nr.regular,
      letterSpacing: ir.regular
    },
    labelButton: {
      fontSize: Be[16],
      lineHeight: or[140],
      fontWeight: nr.semibold,
      letterSpacing: ir.tight
    },
    labelDefault: {
      fontSize: Be[14],
      lineHeight: or[140],
      fontWeight: nr.regular,
      letterSpacing: ir.tight
    },
    captionDefault: {
      fontSize: Be[12],
      lineHeight: or[140],
      fontWeight: nr.regular,
      letterSpacing: ir.regular
    },
    captionLink: {
      fontSize: Be[12],
      lineHeight: or[140],
      fontWeight: nr.regular,
      letterSpacing: ir.regular
    }
  };
  var sr = {
    heading2xl: {
      ...fe.heading2xl,
      fontSize: Be[36]
    },
    headingXl: {
      ...fe.headingXl,
      fontSize: Be[32]
    },
    headingLg: {
      ...fe.headingLg,
      fontSize: Be[24]
    },
    headingMd: {
      ...fe.headingMd,
      fontSize: Be[18]
    },
    bodyBase: {
      ...fe.bodyBase
    },
    bodySmall: {
      ...fe.bodySmall
    },
    labelButton: {
      ...fe.labelButton
    },
    labelDefault: {
      ...fe.labelDefault
    },
    captionDefault: {
      ...fe.captionDefault
    },
    captionLink: {
      ...fe.captionLink
    }
  };
  var en = {
    heading2xl: {
      mobile: fe.heading2xl,
      desktop: sr.heading2xl
    },
    headingXl: {
      desktop: sr.headingXl,
      mobile: fe.headingXl
    },
    headingLg: {
      desktop: sr.headingLg,
      mobile: fe.headingLg
    },
    headingMd: {
      desktop: sr.headingMd,
      mobile: fe.headingMd
    },
    bodyBase: {
      desktop: sr.bodyBase,
      mobile: fe.bodyBase
    },
    bodySmall: {
      desktop: sr.bodySmall,
      mobile: fe.bodySmall
    },
    labelButton: {
      desktop: sr.labelButton,
      mobile: fe.labelButton
    },
    labelDefault: {
      desktop: sr.labelDefault,
      mobile: fe.labelDefault
    },
    captionDefault: {
      desktop: sr.captionDefault,
      mobile: fe.captionDefault
    },
    captionLink: {
      desktop: sr.captionLink,
      mobile: fe.captionLink
    }
  };
  var Tt = (e) => e.length == 7 ? {
    r: parseInt(e.slice(1, 3), 16),
    g: parseInt(e.slice(3, 5), 16),
    b: parseInt(e.slice(5, 7), 16)
  } : e.length == 4 ? {
    r: parseInt(e[1], 16),
    g: parseInt(e[2], 16),
    b: parseInt(e[3], 16)
  } : null;
  var Tn = ({
    r: e,
    g: r,
    b: t,
    luminanceThreshold: a2
  }) => {
    const n = (i) => (i = i / 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
    return 0.2126 * n(e) + 0.7152 * n(r) + 0.0722 * n(t) > a2;
  };
  var In = 0.37;
  var Pp = (e, r = In) => {
    const t = Tn({ ...e, luminanceThreshold: r }) ? "0,0,0" : "255,255,255";
    return {
      "grey-text-dark": `rgb(${t})`,
      "grey-text-light": `rgba(${t},0.70)`,
      "grey-ui-dark": `rgba(${t},0.3)`,
      "grey-ui-light": `rgba(${t},0.1)`
    };
  };
  function Sp(e, r, t) {
    const a2 = Tt(e) || { r: 0, g: 0, b: 0 }, n = Tt(r) || { r: 255, g: 255, b: 255 }, o = Math.round(n.r * t + a2.r * (1 - t)), i = Math.round(n.g * t + a2.g * (1 - t)), s2 = Math.round(n.b * t + a2.b * (1 - t));
    return `#${za(o)}${za(i)}${za(s2)}`;
  }
  function ko(e, r) {
    const t = { r: 255, g: 255, b: 255 }, a2 = Math.max(0, Math.min(1, r));
    let n = e, o = Tt(e) || t;
    (isNaN(o.r) || isNaN(o.g) || isNaN(o.b)) && (o = t, n = "#FFFFFF");
    const s2 = Tn({
      ...o,
      luminanceThreshold: In
    }) ? "#000000" : "#FFFFFF";
    return Sp(n, s2, a2);
  }
  function za(e) {
    return e.toString(16).padStart(2, "0").toUpperCase();
  }
  var Ep = (e, r, t, a2 = In) => {
    const n = {
      "grey-text-dark": t["grey-text-dark"],
      "grey-text-light": t["grey-text-light"],
      "grey-ui-dark": t["grey-ui-dark"],
      "grey-ui-light": t["grey-ui-light"],
      "primary-text": t["primary-text"]
    };
    if (e != null && e.startsWith("#")) {
      const o = Tt(e);
      o !== null && Object.assign(n, Pp(o));
    }
    if (r != null && r.startsWith("#")) {
      const o = Tt(r);
      o !== null && (n["primary-text"] = Tn({ ...o, luminanceThreshold: a2 }) ? "black" : "white");
    }
    return n;
  };
  var Tp = (e) => ({
    "primary-hover": ko(e, 0.1),
    "primary-pressed": ko(e, 0.15)
  });
  var Ip = (e, r) => e || r;
  var qp = (e, r, t) => {
    const a2 = Object.entries(e).map(([n, o]) => [
      n,
      Ip(
        t ? t[o] : null,
        r[n]
      )
    ]);
    return Object.fromEntries(a2);
  };
  var Ci = (e, r, t) => {
    const a2 = qp(
      e,
      r,
      t
    );
    return t ? {
      ...r,
      ...a2,
      ...Ep(
        a2.background,
        a2.primary,
        r
      ),
      ...Tp(a2.primary)
    } : { ...r };
  };
  var Fp = (e) => Ci(
    kp,
    hp,
    e
  );
  var Oi = (e) => Ci(
    vp,
    bp,
    e
  );
  var qn = (e) => {
    if (!e)
      return ho;
    switch (e.shapes) {
      case "rounded":
        return ji;
      case "rectangle":
        return wp;
      case "pill":
        return xp;
      default:
        return ho;
    }
  };
  var ca = (e = "", r) => r.map(([t, a2]) => `--rc-${e}-${t}: ${a2}`).join("; ");
  var Li = (e) => {
    const r = ca(
      "color",
      Object.entries(Fp(e))
    ), t = ca(
      "shape",
      Object.entries(qn(e))
    );
    return [r, t].join("; ");
  };
  var zp = (e) => {
    const r = ca(
      "color",
      Object.entries(Oi(e))
    ), t = ca(
      "shape",
      Object.entries(qn(e))
    );
    return [r, t].join("; ");
  };
  var Dp = (e = "", r, t) => Object.entries(r).flatMap(([a2, { desktop: n, mobile: o }]) => {
    const i = `normal normal ${n.fontWeight} ${n.fontSize}/${n.lineHeight} ${la}`, s2 = `normal normal ${o.fontWeight} ${o.fontSize}/${o.lineHeight} ${la}`, l2 = `normal normal ${t == null ? void 0 : t.desktop.font_weight} ${t == null ? void 0 : t.desktop.font_size} ${vo}`, c2 = `normal normal ${t == null ? void 0 : t.mobile.font_weight} ${t == null ? void 0 : t.mobile.font_size} ${vo}`;
    return [
      `--rc-${e}-${a2}-desktop: ${i}`,
      `--rc-${e}-${a2}-mobile: ${s2}`,
      `--rc-${e}-${a2}-branded-desktop: ${t ? l2 : i}`,
      `--rc-${e}-${a2}-branded-mobile: ${t ? c2 : s2}`,
      `--rc-${e}-${a2}-desktop-font-size: ${n.fontSize}`,
      `--rc-${e}-${a2}-mobile-font-size: ${o.fontSize}`
    ];
  }).join("; ");
  var Ap = (e = "", r) => Object.entries(r).map(
    ([t, { mobile: a2, desktop: n }]) => `--rc-${e}-${t}-mobile: ${a2};  --rc-${e}-${t}-desktop: ${n};`
  ).join(" ");
  var Mp = {
    outerPaddingTop: {
      mobile: "0.25rem",
      // 4px
      desktop: "clamp(1rem, 8.44vw, 7.5rem)"
      // 16px to 128px
    },
    outerPadding: {
      mobile: "clamp(1.3125rem, 5.6vw, 1.5rem)",
      // 21px to 24px
      desktop: "clamp(3rem, 6.44vw, 4.5rem)"
      // 48px to 72px
    },
    gapSmall: {
      mobile: "0.25rem",
      // 4px
      desktop: "0.5rem"
      // 8px
    },
    gapMedium: {
      mobile: "0.5rem",
      // 8px
      desktop: "0.75rem"
      // 12px
    },
    gapLarge: {
      mobile: "0.75rem",
      // 12px
      desktop: "1rem"
      // 16px
    },
    gapXLarge: {
      mobile: "1rem",
      // 16px
      desktop: "2rem"
      // 32px
    },
    gapXXLarge: {
      mobile: "1.25rem",
      // 20px
      desktop: "2.25rem"
      // 36px
    },
    gapXXXLarge: {
      mobile: "2.25rem",
      // 36px
      desktop: "5rem"
      // 80px
    },
    inputHeight: {
      // Only used with button
      // Inconsistent with design system
      // Should rely on padding spacings
      mobile: "3rem",
      // 48px
      desktop: "3rem"
      // 48px
    }
  };
  var It = class {
    constructor(r) {
      M(this, "brandingAppearance");
      r ? this.brandingAppearance = r : this.brandingAppearance = void 0;
    }
    get shape() {
      return qn(this.brandingAppearance);
    }
    get formColors() {
      return Oi(this.brandingAppearance);
    }
    get formStyleVars() {
      return zp(this.brandingAppearance);
    }
    get productInfoStyleVars() {
      return Li(this.brandingAppearance);
    }
    get spacing() {
      return Mp;
    }
    get textStyles() {
      return en;
    }
    getTextStyleVars(r) {
      return Dp("text", this.textStyles, r);
    }
    get spacingStyleVars() {
      return Ap("spacing", this.spacing);
    }
  };
  var rn = /* @__PURE__ */ ((e) => (e[e.ErrorLoadingStripe = 0] = "ErrorLoadingStripe", e[e.HandledFormError = 1] = "HandledFormError", e[e.UnhandledFormError = 2] = "UnhandledFormError", e))(rn || {});
  var Xt = class {
    constructor(r, t, a2) {
      this.code = r, this.gatewayErrorCode = t, this.message = a2;
    }
  };
  var $r = class $r2 {
    /**
     * This function converts some particular locales to the ones that stripe supports.
     * Finally falls back to 'auto' if the initialLocale is not supported by stripe.
     * @param locale
     */
    static getStripeLocale(r) {
      if (["ca", "hi", "uk"].includes(r))
        return "auto";
      const a2 = {
        zh_Hans: "zh",
        zh_Hant: "zh"
      };
      return Object.keys(a2).includes(r) ? a2[r] : r;
    }
    static async initializeStripe(r, t, a2, n, o, i, s2) {
      const { loadStripe: l2 } = await Promise.resolve().then(() => (init_index_DuKHkfLn(), index_DuKHkfLn_exports));
      if (!t || !r || !a2)
        throw {
          code: 0,
          gatewayErrorCode: void 0,
          message: "Stripe configuration is missing"
        };
      const c2 = await l2(t, {
        stripeAccount: r
      }).catch((h2) => {
        throw this.mapInitializationError(h2);
      });
      if (!c2)
        throw {
          code: 0,
          gatewayErrorCode: void 0,
          message: "Stripe client not found"
        };
      const p2 = new It(n == null ? void 0 : n.appearance), u = p2.shape, _ = p2.formColors, g2 = p2.textStyles, m2 = en.bodyBase[s2].fontSize || en.bodyBase.mobile.fontSize;
      let f2;
      try {
        f2 = c2.elements({
          mode: a2.mode,
          paymentMethodTypes: a2.payment_method_types,
          setupFutureUsage: a2.setup_future_usage,
          amount: a2.amount,
          currency: a2.currency,
          loader: "always",
          locale: o,
          appearance: {
            theme: "stripe",
            labels: "floating",
            variables: {
              borderRadius: u["input-border-radius"],
              focusBoxShadow: "none",
              colorDanger: _.error,
              colorTextPlaceholder: _["grey-text-light"],
              colorText: _["grey-text-dark"],
              colorTextSecondary: _["grey-text-light"],
              fontSizeBase: m2,
              ...i
            },
            rules: {
              ".Input": {
                boxShadow: "none",
                paddingTop: "6px",
                paddingBottom: "6px",
                fontSize: m2,
                border: `1px solid ${_["grey-ui-dark"]}`,
                backgroundColor: _["input-background"],
                color: _["grey-text-dark"]
              },
              ".Input:focus": {
                border: `1px solid ${_.focus}`,
                outline: "none"
              },
              ".Label": {
                fontWeight: g2.labelDefault[s2].fontWeight,
                lineHeight: "22px",
                color: _["grey-text-dark"]
              },
              ".Label--floating": {
                opacity: "1"
              },
              ".Input--invalid": {
                boxShadow: "none"
              }
            }
          }
        });
      } catch (h2) {
        throw this.mapInitializationError(h2);
      }
      return { stripe: c2, elements: f2 };
    }
    static async updateElementsConfiguration(r, t) {
      r.update({
        mode: t.mode,
        paymentMethodTypes: t.payment_method_types,
        setupFutureUsage: t.setup_future_usage,
        amount: t.amount,
        currency: t.currency
      });
    }
    static isStripeHandledFormError(r) {
      const t = r.type === "validation_error", a2 = r.type === "card_error" && r.code && this.FORM_VALIDATED_CARD_ERROR_CODES.includes(r.code);
      return t || a2;
    }
    static createPaymentElement(r, t) {
      return r.create("payment", {
        business: t ? { name: t } : void 0,
        layout: {
          type: "tabs"
        },
        terms: {
          applePay: "never",
          auBecsDebit: "never",
          bancontact: "never",
          card: "never",
          cashapp: "never",
          googlePay: "never",
          ideal: "never",
          paypal: "never",
          sepaDebit: "never",
          sofort: "never",
          usBankAccount: "never"
        }
      });
    }
    static createExpressCheckoutElement(r, t, a2) {
      const n = {
        billingAddressRequired: t,
        emailRequired: true,
        ...a2 || {}
      };
      return r.create("expressCheckout", n);
    }
    static createLinkAuthenticationElement(r, t) {
      return r.create("linkAuthentication", {
        defaultValues: {
          email: t ?? ""
        }
      });
    }
    static async submitElements(r) {
      const { error: t } = await r.submit();
      if (t)
        throw this.mapError(t);
    }
    static mapInitializationError(r) {
      return new Xt(
        0,
        r.code,
        r.message
      );
    }
    static mapError(r) {
      return this.isStripeHandledFormError(r) ? new Xt(
        1,
        r.code,
        r.message
      ) : new Xt(
        2,
        r.code,
        r.message
      );
    }
    static async confirmElements(r, t, a2, n) {
      const o = {
        clientSecret: a2,
        redirect: "if_required"
      }, i = n ? {
        ...o,
        confirmParams: { confirmation_token: n }
      } : {
        ...o,
        elements: t
      }, s2 = a2.startsWith("seti_");
      let l2;
      if (s2 ? l2 = await r.confirmSetup(i) : l2 = await r.confirmPayment(i), l2 != null && l2.error)
        throw this.mapError(l2.error);
    }
    static async extractTaxCustomerDetails(r, t) {
      var i, s2;
      const { error: a2, confirmationToken: n } = await t.createConfirmationToken({
        elements: r
      });
      if (a2)
        throw this.mapError(a2);
      const o = (s2 = (i = n.payment_method_preview) == null ? void 0 : i.billing_details) == null ? void 0 : s2.address;
      return {
        customerDetails: {
          countryCode: (o == null ? void 0 : o.country) ?? void 0,
          postalCode: (o == null ? void 0 : o.postal_code) ?? void 0
        },
        confirmationTokenId: n.id
      };
    }
    static nextDateForPeriod(r, t) {
      return r.unit === we.Year ? (t.setFullYear(t.getFullYear() + r.number), t) : r.unit === we.Month ? (t.setMonth(t.getMonth() + r.number), t) : r.unit === we.Week ? (t.setDate(t.getDate() + r.number * 7), t) : (r.unit === we.Day && t.setDate(t.getDate() + r.number), t);
    }
    static applePayPeriod(r) {
      return r.unit === we.Week ? {
        recurringPaymentIntervalUnit: "day",
        recurringPaymentIntervalCount: r.number * 7
      } : {
        recurringPaymentIntervalUnit: r.unit,
        recurringPaymentIntervalCount: r.number
      };
    }
    // https://docs.stripe.com/js/elements_object/create_without_intent#stripe_elements_no_intent-options-amount
    static microsToMinimumAmountPrice(r, t) {
      return [
        "BIF",
        "CLP",
        "DJF",
        "GNF",
        "JPY",
        "KMF",
        "KRW",
        "MGA",
        "PYG",
        "RWF",
        "UGX",
        "VND",
        "VUV",
        "XAF",
        "XOF",
        "XPF"
      ].includes(t) ? Math.floor(r / 1e6) : Math.floor(r / 1e4);
    }
    static buildStripeExpressCheckoutOptionsForSubscription(r, t, a2, n, o) {
      var _;
      const i = $r2.microsToMinimumAmountPrice(
        t.totalAmountInMicros,
        t.currency
      ), s2 = a2.trial, l2 = (_ = a2.trial) == null ? void 0 : _.period, c2 = a2.base.period, p2 = s2 && l2 ? $r2.nextDateForPeriod(l2, /* @__PURE__ */ new Date()) : void 0, u = c2 ? $r2.applePayPeriod(c2) : {};
      return {
        applePay: {
          recurringPaymentRequest: {
            paymentDescription: r.title,
            managementURL: o,
            trialBilling: s2 ? {
              label: n.translate(O.ApplePayFreeTrial),
              amount: 0
            } : void 0,
            regularBilling: {
              label: r.title,
              amount: i,
              recurringPaymentStartDate: p2,
              ...u
            }
          }
        }
      };
    }
  };
  M($r, "FORM_VALIDATED_CARD_ERROR_CODES", [
    "card_declined",
    "expired_card",
    "incorrect_cvc",
    "incorrect_number"
  ]);
  var be = $r;
  var jp = /* @__PURE__ */ I2("<div></div>");
  function Np(e, r) {
    V(r, true);
    let t = null;
    const a2 = "payment-element", n = async (i) => {
      await r.onError(be.mapInitializationError(i.error));
    };
    We(() => {
      var i;
      try {
        t = be.createPaymentElement(r.elements, (i = r.brandingInfo) == null ? void 0 : i.app_name), t.mount(`#${a2}`), t.on("ready", r.onReady), t.on("change", r.onChange), t.on("loaderror", n);
      } catch (s2) {
        r.onError(be.mapInitializationError(s2));
      }
    }), Nt(() => {
      t == null || t.destroy(), t = null;
    });
    var o = jp();
    j2(o, "id", a2), b2(e, o), H();
  }
  var Cp = /* @__PURE__ */ I2("<div></div>");
  function Op(e, r) {
    V(r, true);
    let t = null;
    const a2 = "link-authentication-element", n = async (i) => {
      await r.onError(be.mapInitializationError(i.error));
    };
    We(() => {
      try {
        t = be.createLinkAuthenticationElement(r.elements, r.email), t.mount(`#${a2}`), t.on("ready", r.onReady), t.on("change", r.onChange), t.on("loaderror", n);
      } catch (i) {
        r.onError(be.mapInitializationError(i));
      }
    }), Nt(() => {
      t == null || t.destroy(), t = null;
    });
    var o = Cp();
    j2(o, "id", a2), b2(e, o), H();
  }
  var Lp = /* @__PURE__ */ I2('<div class="text-separator svelte-ch0h61"><hr class="line svelte-ch0h61"> <span class="text svelte-ch0h61"><!></span> <hr class="line svelte-ch0h61"></div>');
  var Bp = {
    hash: "svelte-ch0h61",
    code: `.text-separator.svelte-ch0h61 {display:flex;align-items:center;justify-content:center;gap:var(--rc-spacing-gapSmall-mobile);}

  @container layout-query-container (width >= 768px) {.text-separator.svelte-ch0h61 {gap:var(--rc-spacing-gapSmall-desktop);}
  }.line.svelte-ch0h61 {flex:1;height:1px;background-color:var(--rc-color-grey-ui-dark);border:none;}.text.svelte-ch0h61 {color:var(--rc-color-grey-text-light);text-transform:uppercase;white-space:nowrap;}`
  };
  function Rp(e, r) {
    R2(e, Bp);
    let t = U(r, "text", 8);
    var a2 = Lp(), n = C(P2(a2), 2), o = P2(n);
    se(o, {
      size: "caption-default",
      children: (i, s2) => {
        var l2 = ie();
        A(() => te(l2, t())), b2(i, l2);
      },
      $$slots: { default: true }
    }), b2(e, a2);
  }
  var Up = /* @__PURE__ */ I2("<div></div> <!>", 1);
  function Vp(e, r) {
    V(r, true);
    const t = De(), a2 = () => ze(n, "$translator", t), n = Ee(Ne);
    let o = null, i = X(false);
    const s2 = "express-checkout-element", l2 = async (f2) => {
      const h2 = {
        ...r.expressCheckoutOptions ? r.expressCheckoutOptions : {}
      };
      f2.resolve(h2);
    }, c2 = async (f2) => {
      await r.onError(be.mapInitializationError(f2.error));
    }, p2 = async (f2) => {
      var h2;
      r.onSubmit(f2.expressPaymentType, ((h2 = f2.billingDetails) == null ? void 0 : h2.email) ?? "");
    }, u = async (f2) => {
      D(i, !f2.availablePaymentMethods), r.onReady();
    };
    We(() => {
      try {
        o = be.createExpressCheckoutElement(r.elements, r.billingAddressRequired, r.expressCheckoutOptions), o.mount(`#${s2}`), o.on("ready", u), o.on("confirm", p2), o.on("loaderror", c2), o.on("click", l2);
      } catch (f2) {
        r.onError(be.mapInitializationError(f2));
      }
    }), Nt(() => {
      o == null || o.destroy(), o = null;
    });
    var _ = ee(), g2 = W(_);
    {
      var m2 = (f2) => {
        var h2 = Up(), v = W(h2);
        j2(v, "id", s2);
        var y2 = C(v, 2), x2 = /* @__PURE__ */ E2(() => a2().translate(O.PaymentEntryPageExpressCheckoutDivider));
        Rp(y2, {
          get text() {
            return d(x2);
          }
        }), b2(f2, h2);
      };
      N(g2, (f2) => {
        d(i) || f2(m2);
      });
    }
    b2(e, _), H();
  }
  var Hp = /* @__PURE__ */ I2('<div class="rc-elements svelte-6qa1vy"><!> <!> <!></div>');
  var Wp = {
    hash: "svelte-6qa1vy",
    code: `.rc-elements.svelte-6qa1vy {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rc-elements.svelte-6qa1vy {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
  };
  function Yp(e, r) {
    V(r, true), R2(e, Wp);
    const t = De(), a2 = () => ze(i, "$translator", t);
    let n = U(r, "stripe", 15, null), o = U(r, "elements", 15, null);
    const i = Ee(Ne), s2 = be.getStripeLocale(a2().locale || a2().fallbackLocale);
    let l2 = X(false), c2 = X(L2(r.skipEmail)), p2 = X(false), u = X(void 0), _ = X("mobile"), g2 = X(void 0);
    function m2() {
      window.matchMedia && window.matchMedia("(max-width: 767px)").matches ? D(_, "mobile") : D(_, "desktop"), D(u, L2({
        // Floating labels size cannot be overriden in Stripe since `!important` is being used.
        // There we set fontSizeBase to the desired label size
        // and update the input font size to 16px.
        fontSizeBase: "14px",
        fontFamily: la,
        // Spacing is hardcoded to 16px to match the desired gaps in mobile/desktop
        // which do not match the design system spacing. Also we cannot use "rem" units
        // since the fontSizeBase is set to 14px per the comment above.
        spacingGridRow: "16px"
      }));
    }
    function f2() {
      clearTimeout(d(g2)), D(g2, L2(setTimeout(
        () => {
          m2();
        },
        150
      )));
    }
    const h2 = (w2) => {
      r.onError(w2), r.onLoadingComplete();
    }, v = async () => {
      d(c2) || (D(c2, true), d(c2) && d(l2) && d(p2) && r.onLoadingComplete());
    }, y2 = async () => {
      d(p2) || (D(p2, true), d(c2) && d(l2) && d(p2) && r.onLoadingComplete());
    }, x2 = async () => {
      d(l2) || (D(l2, true), d(c2) && d(l2) && d(p2) && r.onLoadingComplete());
    }, T2 = async (w2) => {
      r.onPaymentInfoChange({
        complete: w2.complete,
        paymentMethod: w2.complete ? w2.value.type : void 0
      });
    }, S2 = async (w2) => {
      r.onEmailChange(w2.complete, w2.value.email);
    };
    We(() => (window.addEventListener("resize", f2), () => {
      window.removeEventListener("resize", f2);
    })), We(async () => {
      m2(), !n() && (o() || !r.stripeAccountId || !r.publishableApiKey || !r.elementsConfiguration || await be.initializeStripe(r.stripeAccountId, r.publishableApiKey, r.elementsConfiguration, r.brandingInfo, s2, d(u), d(_)).then(({
        stripe: w2,
        elements: z
      }) => {
        n(w2), o(z);
      }).catch((w2) => {
        r.onError(w2);
      }));
    }), at(() => {
      r.elementsConfiguration && o() && be.updateElementsConfiguration(o(), r.elementsConfiguration);
    });
    var q = ee(), B = W(q);
    {
      var k = (w2) => {
        var z = Hp(), Y = P2(z);
        Vp(Y, {
          get elements() {
            return o();
          },
          onError: h2,
          onReady: y2,
          get onSubmit() {
            return r.onExpressCheckoutElementSubmit;
          },
          get expressCheckoutOptions() {
            return r.expressCheckoutOptions;
          },
          get billingAddressRequired() {
            return r.billingAddressRequired;
          }
        });
        var G = C(Y, 2);
        {
          var ne = (re) => {
            Op(re, {
              get elements() {
                return o();
              },
              onReady: v,
              onChange: S2,
              onError: h2
            });
          };
          N(G, (re) => {
            r.skipEmail || re(ne);
          });
        }
        var J = C(G, 2);
        Np(J, {
          get elements() {
            return o();
          },
          get brandingInfo() {
            return r.brandingInfo;
          },
          onReady: x2,
          onChange: T2,
          onError: h2
        }), b2(w2, z);
      };
      N(B, (w2) => {
        o() && w2(k);
      });
    }
    b2(e, q), H();
  }
  var Gp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 6.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 4.5a1.25 1.25 0 10-2.5 0v4.5a1.25 1.25 0 102.5 0v-4.5z" clip-rule="evenodd" />
</svg> `;
  var Xp = /* @__PURE__ */ I2('<div class="rcb-ui-asset-icon svelte-1rk57mx"><!></div>');
  var Zp = {
    hash: "svelte-1rk57mx",
    code: ".rcb-ui-asset-icon.svelte-1rk57mx {display:inline-block;width:1em;height:1em;}"
  };
  function Bi(e) {
    R2(e, Zp);
    var r = Xp(), t = P2(r);
    Wr(t, () => Gp), b2(e, r);
  }
  var Kp = /* @__PURE__ */ I2('<div class="rcb-info svelte-1czikbr"><div class="rcb-info-icon-wrapper svelte-1czikbr"><!></div> <div class="rcb-info-content svelte-1czikbr"><div class="rcb-info-title svelte-1czikbr"><!></div> <div class="rcb-info-message svelte-1czikbr"><!></div></div></div>');
  var Jp = {
    hash: "svelte-1czikbr",
    code: `.rcb-info.svelte-1czikbr {display:flex;align-items:flex-start;background-color:var(--rc-color-grey-ui-light);border-radius:var(--rc-shape-input-border-radius);gap:var(--rc-spacing-gapLarge-mobile);padding:var(--rc-spacing-gapLarge-mobile);}.rcb-info-content.svelte-1czikbr {flex:1;}.rcb-info-icon-wrapper.svelte-1czikbr {flex-shrink:0;color:var(--rc-color-accent-primary);}.rcb-info-title.svelte-1czikbr {color:var(--rc-color-grey-text-dark);margin-bottom:var(--rc-spacing-gapSmall-mobile);display:flex;}.rcb-info-message.svelte-1czikbr {color:var(--rc-color-grey-text-light);}

  @container layout-query-container (width >= 768px) {.rcb-info.svelte-1czikbr {gap:var(--rc-spacing-gapLarge-desktop);padding:var(--rc-spacing-gapLarge-desktop);}.rcb-info-title.svelte-1czikbr {margin-bottom:var(--rc-spacing-gapSmall-desktop);}
  }`
  };
  function Qp(e, r) {
    R2(e, Jp);
    var t = Kp(), a2 = P2(t), n = P2(a2);
    Bi(n);
    var o = C(a2, 2), i = P2(o), s2 = P2(i);
    se(s2, {
      size: "body-small",
      children: (p2, u) => {
        var _ = ie();
        A(() => te(_, r.title)), b2(p2, _);
      },
      $$slots: { default: true }
    });
    var l2 = C(i, 2), c2 = P2(l2);
    se(c2, {
      size: "body-small",
      children: (p2, u) => {
        var _ = ie();
        A(() => te(_, r.message)), b2(p2, _);
      },
      $$slots: { default: true }
    }), b2(e, t);
  }
  function $p(e, r) {
    V(r, true);
    const t = De(), a2 = () => ze(n, "$translator", t), n = Ee(Ne);
    var o = /* @__PURE__ */ E2(() => a2().translate(O.PriceUpdateTitle)), i = /* @__PURE__ */ E2(() => {
      var s2;
      return a2().translate((s2 = r.subscriptionOption) != null && s2.trial ? O.PriceUpdateTrialMessage : O.PriceUpdateBaseMessage);
    });
    Qp(e, {
      get title() {
        return d(o);
      },
      get message() {
        return d(i);
      }
    }), H();
  }
  var wo = class extends Error {
  };
  var e_ = /* @__PURE__ */ I2('<div class="rc-loading svelte-dg9m6p"><!></div>');
  var r_ = /* @__PURE__ */ I2('<div class="rc-checkout-container svelte-dg9m6p"><!> <!> <form data-testid="payment-form" class="rc-checkout-form svelte-dg9m6p"><div class="rc-checkout-form-container svelte-dg9m6p"><div class="rc-elements-container svelte-dg9m6p"><!></div> <div class="rc-checkout-price-update-info-container svelte-dg9m6p"><!></div> <div class="rc-checkout-pay-container svelte-dg9m6p"><!> <div class="rc-checkout-secure-container svelte-dg9m6p"><!></div></div></div></form></div>');
  var t_ = {
    hash: "svelte-dg9m6p",
    code: `.rc-checkout-secure-container.svelte-dg9m6p {margin-top:var(--rc-spacing-gapXLarge-mobile);}.rc-checkout-container.svelte-dg9m6p {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);user-select:none;position:relative;}.rc-checkout-price-update-info-container.svelte-dg9m6p {margin-top:var(--rc-spacing-gapXLarge-mobile);}.fully-hidden.svelte-dg9m6p {display:none;height:0;}.rc-checkout-pay-container.svelte-dg9m6p {display:flex;flex-direction:column;margin-top:var(--rc-spacing-gapXLarge-mobile);}.rc-checkout-pay-container.fully-hidden.svelte-dg9m6p {display:none;}.rc-checkout-form-container.svelte-dg9m6p {width:100%;}.rc-elements-container.svelte-dg9m6p {
    /* The standard height of the payment form from Stripe */
    /* Added to avoid the card getting smaller while loading */min-height:210px;}.rc-checkout-form-container.invisible.svelte-dg9m6p {visibility:hidden;}.rc-loading.svelte-dg9m6p {width:100%;height:100%;display:flex;justify-content:center;align-items:center;}

  @container layout-query-container (width <= 767px) {.rc-checkout-pay-container.svelte-dg9m6p {flex-grow:1;justify-content:flex-end;}.rc-checkout-form.svelte-dg9m6p {flex-grow:1;}.rc-checkout-form-container.svelte-dg9m6p {height:100%;display:flex;flex-direction:column;}.rc-checkout-container.svelte-dg9m6p {flex-grow:1;}.rc-loading.svelte-dg9m6p {position:absolute;top:0;left:0;}
  }

  @container layout-query-container (width >= 768px) {.rc-checkout-secure-container.svelte-dg9m6p {margin-top:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-container.svelte-dg9m6p {gap:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-pay-container.svelte-dg9m6p {margin-top:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-price-update-info-container.svelte-dg9m6p {margin-top:var(--rc-spacing-gapXLarge-desktop);}
  }form.svelte-dg9m6p {display:flex;flex-direction:column;flex-grow:1;}`
  };
  function a_(e, r) {
    var jn, Nn, Cn;
    V(r, true), R2(e, t_);
    const t = De(), a2 = () => ze(o, "$translator", t), n = Ee(xn), o = Ee(Ne), i = (jn = r.productDetails.subscriptionOptions) == null ? void 0 : jn[r.purchaseOption.id];
    let s2 = X(L2(((Nn = r.defaultPriceBreakdown) == null ? void 0 : Nn.taxCalculationStatus) ?? ((Cn = r.brandingInfo) != null && Cn.gateway_tax_collection_enabled ? "unavailable" : "disabled"))), l2 = X(null), c2 = X(null), p2 = X(L2(r.productDetails.currentPrice.amountMicros)), u = X(L2(r.productDetails.currentPrice.amountMicros)), _ = /* @__PURE__ */ E2(() => r.defaultPriceBreakdown ?? {
      currency: r.productDetails.currentPrice.currency,
      totalAmountInMicros: d(u),
      totalExcludingTaxInMicros: d(p2),
      taxCalculationStatus: d(s2),
      taxAmountInMicros: d(l2),
      taxBreakdown: d(c2)
    }), g2 = X(L2(r.gatewayParams.elements_configuration)), m2 = X(null), f2 = X(null), h2 = X(null), v = X(L2(r.customerEmail ?? void 0)), y2 = X(L2(!!r.customerEmail)), x2 = X(true), T2 = X(false), S2 = X(void 0), q = X(void 0), B = X(void 0), k = X(false), w2 = X(null), z = /* @__PURE__ */ E2(() => d(x2) || d(k) ? "loading" : d(q) ? "error" : "form"), Y = X("unavailable"), G = /* @__PURE__ */ E2(() => !d(k) && d(T2) && d(y2) && (d(s2) === "disabled" || d(s2) === "calculated" || d(s2) === "miss-match")), ne = /* @__PURE__ */ E2(() => i && r.managementUrl && d(_) ? be.buildStripeExpressCheckoutOptionsForSubscription(r.productDetails, d(_), i, a2(), r.managementUrl) : void 0);
    at(() => {
      r.onPriceBreakdownUpdated(d(_));
    }), We(async () => {
      d(s2) === "unavailable" && await J(null).catch(Xe);
    }), Nt(() => {
      d(w2) && (d(w2).abort(), D(w2, null));
    });
    async function J(F, Q) {
      await r.purchaseOperationHelper.checkoutCalculateTax(F == null ? void 0 : F.countryCode, F == null ? void 0 : F.postalCode, Q).then((ue) => {
        const jr = lp({ taxCalculation: ue, taxCustomerDetails: F });
        n.trackSDKEvent(jr), Q == null || Q.throwIfAborted(), ue.failed_reason ? !F && ue.failed_reason === En.invalid_tax_location ? D(s2, "pending") : D(s2, "disabled") : D(s2, "calculated"), D(l2, L2(ue.tax_amount_in_micros)), D(p2, L2(ue.total_excluding_tax_in_micros)), D(u, L2(ue.total_amount_in_micros)), D(c2, L2(ue.pricing_phases.base.tax_breakdown)), D(g2, L2(ue.gateway_params.elements_configuration)), D(m2, L2(F));
      });
    }
    function re() {
      n.trackSDKEvent({
        eventName: Fe.CheckoutPaymentFormImpression
      }), D(x2, false);
    }
    async function pe(F, Q) {
      D(v, L2(Q)), D(y2, L2(F)), await xe();
    }
    async function ge({ complete: F, paymentMethod: Q }) {
      D(S2, L2(Q)), D(T2, L2(F)), await xe();
    }
    async function ce(F) {
      if (F == null || F.preventDefault(), d(k)) return;
      const Q = cp({
        selectedPaymentMethod: d(S2) ?? null
      });
      n.trackSDKEvent(Q), D(k, true), await vr() ? r.onContinue() : D(k, false);
    }
    async function he(F, Q) {
      D(S2, L2(F)), D(v, L2(Q)), await ce();
    }
    async function xe() {
      d(S2) !== "card" || !d(y2) || !d(T2) || d(k) || d(s2) === "disabled" || (d(s2) !== "loading" && (D(Y, L2(d(s2))), D(s2, "loading")), await _r(async (F) => {
        await Ge().then(() => F.throwIfAborted()).then(() => Oe(F)).then(() => F.throwIfAborted()).catch((Q) => {
          F.aborted || Xe(Q);
        }).finally(() => {
          d(s2) === "loading" && !F.aborted && D(s2, L2(d(Y)));
        });
      }));
    }
    async function vr() {
      return await _r(async (F) => {
        const Q = d(u);
        let ue;
        return await Ge().then(() => F.throwIfAborted()).then(() => Oe(F)).then((jr) => {
          ue = jr;
        }).then(() => F.throwIfAborted()).then(kr(Q)).then(() => F.throwIfAborted()).then($e).then(() => F.throwIfAborted()).then(() => wr(ue)).then(() => F.throwIfAborted()).then(() => true).catch((jr) => (F.aborted || Xe(jr), false));
      });
    }
    async function _r(F) {
      d(w2) && d(w2).abort(), D(w2, L2(new AbortController()));
      const Q = d(w2).signal;
      try {
        return await F(Q);
      } catch (ue) {
        if (ue instanceof DOMException && ue.name === "AbortError")
          return Promise.resolve(void 0);
        throw ue;
      }
    }
    async function Ge() {
      d(h2) && await be.submitElements(d(h2));
    }
    async function Oe(F) {
      var Nr, _t;
      if (d(s2) === "unavailable" || d(s2) === "disabled" || !d(h2) || !d(f2))
        return;
      const {
        customerDetails: Q,
        confirmationTokenId: ue
      } = await be.extractTaxCustomerDetails(d(h2), d(f2));
      return F == null || F.throwIfAborted(), Q.postalCode === ((Nr = d(m2)) == null ? void 0 : Nr.postalCode) && Q.countryCode === ((_t = d(m2)) == null ? void 0 : _t.countryCode) || await J(Q, F), ue && d(S2) !== "card" ? ue : void 0;
    }
    function kr(F) {
      return () => {
        if (d(u) !== F)
          throw new wo();
      };
    }
    async function $e() {
      var ue;
      const F = await r.purchaseOperationHelper.checkoutComplete(d(v)), Q = (ue = F == null ? void 0 : F.gateway_params) == null ? void 0 : ue.client_secret;
      Q && D(B, L2(Q));
    }
    async function wr(F) {
      !d(f2) || !d(h2) || !d(B) || await be.confirmElements(d(f2), d(h2), d(B), F);
    }
    async function Xe(F) {
      if (F instanceof wo)
        D(s2, "miss-match");
      else if (F instanceof de) {
        const Q = ap({
          errorCode: F.errorCode.toString(),
          errorMessage: F.message
        });
        n.trackSDKEvent(Q), F.errorCode === oe.MissingEmailError ? D(q, L2(a2().translate(O.ErrorPageErrorMessageInvalidEmailError, { email: d(v) }))) : r.onError(F);
      } else if (F instanceof Xt)
        await Yr(F);
      else
        throw F;
    }
    async function Yr(F) {
      const Q = dp({
        errorCode: F.gatewayErrorCode ?? "",
        errorMessage: F.message ?? ""
      });
      n.trackSDKEvent(Q), F.code === rn.HandledFormError || (F.code === rn.UnhandledFormError ? D(q, L2(F.message)) : r.onError(new de(oe.ErrorSettingUpPurchase, "Failed to initialize payment form", F.message)));
    }
    const Lt = () => {
      D(q, void 0);
    };
    var xr = r_(), pt = P2(xr);
    {
      var Bt = (F) => {
        var Q = e_(), ue = P2(Q);
        Ai(ue), b2(F, Q);
      };
      N(pt, (F) => {
        d(z) === "loading" && F(Bt);
      });
    }
    var Rt = C(pt, 2);
    {
      var wa = (F) => {
        var Q = /* @__PURE__ */ E2(() => a2().translate(O.ErrorButtonTryAgain));
        Sn(F, {
          title: null,
          type: "error",
          get closeButtonTitle() {
            return d(Q);
          },
          onDismiss: Lt,
          icon: (Nr) => {
            yi(Nr);
          },
          message: (Nr) => {
            var _t = ie();
            A(() => te(_t, d(q))), b2(Nr, _t);
          },
          $$slots: { icon: true, message: true }
        });
      };
      N(Rt, (F) => {
        d(z) === "error" && F(wa);
      });
    }
    var Ut = C(Rt, 2), Gr = P2(Ut), Vt = P2(Gr), Mr = P2(Vt), cs = /* @__PURE__ */ E2(() => !!r.customerEmail), ds = /* @__PURE__ */ E2(() => d(s2) !== "disabled");
    Yp(Mr, {
      get stripeAccountId() {
        return r.gatewayParams.stripe_account_id;
      },
      get publishableApiKey() {
        return r.gatewayParams.publishable_api_key;
      },
      get elementsConfiguration() {
        return d(g2);
      },
      get brandingInfo() {
        return r.brandingInfo;
      },
      get skipEmail() {
        return d(cs);
      },
      get billingAddressRequired() {
        return d(ds);
      },
      onLoadingComplete: re,
      onError: Yr,
      onEmailChange: pe,
      onPaymentInfoChange: ge,
      onExpressCheckoutElementSubmit: he,
      get expressCheckoutOptions() {
        return d(ne);
      },
      get stripe() {
        return d(f2);
      },
      set stripe(F) {
        D(f2, L2(F));
      },
      get elements() {
        return d(h2);
      },
      set elements(F) {
        D(h2, L2(F));
      }
    });
    var xa = C(Vt, 2), us = P2(xa);
    $p(us, { subscriptionOption: i });
    var An = C(xa, 2), Mn = P2(An), ps = /* @__PURE__ */ E2(() => !d(G)), _s = /* @__PURE__ */ E2(() => {
      var F;
      return (F = r.brandingInfo) != null && F.gateway_tax_collection_enabled ? d(_) : void 0;
    });
    yp(Mn, {
      get disabled() {
        return d(ps);
      },
      subscriptionOption: i,
      get priceBreakdown() {
        return d(_s);
      }
    });
    var gs = C(Mn, 2), ms = P2(gs);
    rp(ms, {
      get brandingInfo() {
        return r.brandingInfo;
      },
      subscriptionOption: i
    }), A(() => {
      fr(Gr, "invisible", d(z) !== "form"), fr(xa, "fully-hidden", d(s2) !== "miss-match" || d(z) !== "form"), fr(An, "fully-hidden", d(z) !== "form");
    }), nt("submit", Ut, ce), b2(e, xr), H();
  }
  function n_(e) {
    return e != null;
  }
  var Lr = /* @__PURE__ */ ((e) => (e.Subscription = "subscription", e.Consumable = "consumable", e.NonConsumable = "non_consumable", e))(Lr || {});
  var Ri = (e) => ({
    amount: e.amount_micros / 1e4,
    amountMicros: e.amount_micros,
    currency: e.currency,
    formattedPrice: Ir(e.amount_micros, e.currency)
  });
  var xo = (e) => {
    const r = e.period_duration, t = e.price ? Ri(e.price) : null, a2 = r ? mi(r) : null;
    let n = null, o = null, i = null;
    if (t !== null && a2 !== null) {
      const s2 = i_(a2), l2 = 1e4, c2 = Math.round(t.amountMicros * s2.toWeek);
      n = {
        amount: c2 / l2,
        amountMicros: c2,
        currency: t.currency,
        formattedPrice: Ir(c2, t.currency)
      };
      const p2 = Math.round(t.amountMicros * s2.toMonth);
      o = {
        amount: p2 / l2,
        amountMicros: p2,
        currency: t.currency,
        formattedPrice: Ir(p2, t.currency)
      };
      const u = Math.round(t.amountMicros * s2.toYear);
      i = {
        amount: u / l2,
        amountMicros: u,
        currency: t.currency,
        formattedPrice: Ir(u, t.currency)
      };
    }
    return {
      periodDuration: r,
      period: a2,
      cycleCount: e.cycle_count,
      price: t,
      pricePerWeek: n,
      pricePerMonth: o,
      pricePerYear: i
    };
  };
  function i_(e) {
    const { number: r, unit: t } = e, a2 = 7, n = 30, o = 365;
    let i;
    switch (t) {
      case we.Day:
        i = r;
        break;
      case we.Week:
        i = r * a2;
        break;
      case we.Month:
        i = r * n;
        break;
      case we.Year:
        i = r * o;
        break;
      default:
        i = 0, K.errorLog(`Unknown period unit: ${t}`);
    }
    const s2 = i > 0 ? a2 / i : 0, l2 = i > 0 ? n / i : 0, c2 = i > 0 ? o / i : 0;
    return { toWeek: s2, toMonth: l2, toYear: c2 };
  }
  var s_ = (e) => e.base == null ? (K.debugLog("Missing base phase for subscription option. Ignoring."), null) : {
    id: e.id,
    priceId: e.price_id,
    base: xo(e.base),
    trial: e.trial ? xo(e.trial) : null
  };
  var l_ = (e) => e.base_price == null ? (K.debugLog(
    "Missing base price for non-subscription option. Ignoring."
  ), null) : {
    id: e.id,
    priceId: e.price_id,
    basePrice: Ri(e.base_price)
  };
  var c_ = (e, r) => {
    const t = e.product_type;
    return t === "subscription" ? u_(
      e,
      r,
      t
    ) : d_(
      e,
      r,
      t
    );
  };
  var d_ = (e, r, t) => {
    const a2 = {};
    if (Object.entries(e.purchase_options).forEach(
      ([i, s2]) => {
        const l2 = l_(
          s2
        );
        l2 != null && (a2[i] = l2);
      }
    ), Object.keys(a2).length === 0)
      return K.debugLog(
        `Product ${e.identifier} has no purchase options. Ignoring.`
      ), null;
    const n = e.default_purchase_option_id, o = n && n in e.purchase_options ? a2[n] : null;
    return o == null ? (K.debugLog(
      `Product ${e.identifier} has no default purchase option. Ignoring.`
    ), null) : {
      identifier: e.identifier,
      displayName: e.title,
      title: e.title,
      description: e.description,
      productType: t,
      currentPrice: o.basePrice,
      normalPeriodDuration: null,
      presentedOfferingIdentifier: r.offeringIdentifier,
      presentedOfferingContext: r,
      defaultPurchaseOption: o,
      defaultSubscriptionOption: null,
      subscriptionOptions: {},
      defaultNonSubscriptionOption: o
    };
  };
  var u_ = (e, r, t) => {
    const a2 = {};
    if (Object.entries(e.purchase_options).forEach(
      ([s2, l2]) => {
        const c2 = s_(l2);
        c2 != null && (a2[s2] = c2);
      }
    ), Object.keys(a2).length === 0)
      return K.debugLog(
        `Product ${e.identifier} has no subscription options. Ignoring.`
      ), null;
    const n = e.default_purchase_option_id, o = n && n in a2 ? a2[n] : null;
    if (o == null)
      return K.debugLog(
        `Product ${e.identifier} has no default subscription option. Ignoring.`
      ), null;
    const i = o.base.price;
    return i == null ? (K.debugLog(
      `Product ${e.identifier} default option has no base price. Ignoring.`
    ), null) : {
      identifier: e.identifier,
      displayName: e.title,
      title: e.title,
      description: e.description,
      productType: t,
      currentPrice: i,
      normalPeriodDuration: o.base.periodDuration,
      presentedOfferingIdentifier: r.offeringIdentifier,
      presentedOfferingContext: r,
      defaultPurchaseOption: o,
      defaultSubscriptionOption: o,
      subscriptionOptions: a2,
      defaultNonSubscriptionOption: null
    };
  };
  var p_ = (e, r, t) => {
    const a2 = t[r.platform_product_identifier];
    if (a2 === void 0) return null;
    const n = c_(a2, e);
    return n === null ? null : {
      identifier: r.identifier,
      rcBillingProduct: n,
      webBillingProduct: n,
      packageType: g_(r.identifier)
    };
  };
  var __ = (e, r, t, a2) => {
    const n = {
      offeringIdentifier: r.identifier,
      targetingContext: e && a2 ? {
        ruleId: a2.rule_id,
        revision: a2.revision
      } : null,
      placementIdentifier: null
    }, o = r.packages.map(
      (s2) => p_(n, s2, t)
    ).filter(n_), i = {};
    for (const s2 of o)
      s2 != null && (i[s2.identifier] = s2);
    return o.length == 0 ? null : {
      identifier: r.identifier,
      serverDescription: r.description,
      metadata: r.metadata,
      packagesById: i,
      availablePackages: o,
      lifetime: i.$rc_lifetime ?? null,
      annual: i.$rc_annual ?? null,
      sixMonth: i.$rc_six_month ?? null,
      threeMonth: i.$rc_three_month ?? null,
      twoMonth: i.$rc_two_month ?? null,
      monthly: i.$rc_monthly ?? null,
      weekly: i.$rc_weekly ?? null,
      paywall_components: r.paywall_components ? r.paywall_components : null
    };
  };
  function g_(e) {
    switch (e) {
      case "$rc_lifetime":
        return "$rc_lifetime";
      case "$rc_annual":
        return "$rc_annual";
      case "$rc_six_month":
        return "$rc_six_month";
      case "$rc_three_month":
        return "$rc_three_month";
      case "$rc_two_month":
        return "$rc_two_month";
      case "$rc_monthly":
        return "$rc_monthly";
      case "$rc_weekly":
        return "$rc_weekly";
      default:
        return e.startsWith("$rc_") ? "unknown" : "custom";
    }
  }
  var m_ = /* @__PURE__ */ pr('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" class="arrow-fill svelte-1qexsu3" fill-opacity="0.7"></path></svg>');
  var f_ = {
    hash: "svelte-1qexsu3",
    code: ".arrow.svelte-1qexsu3 {transition:transform 0.3s ease;}.arrow-fill.svelte-1qexsu3 {fill:var(--rc-color-grey-text-dark);}.arrow.left.svelte-1qexsu3 {transform:rotate(90deg);}.arrow.up.svelte-1qexsu3 {transform:rotate(180deg);}.arrow.right.svelte-1qexsu3 {transform:rotate(-90deg);}.arrow.down.svelte-1qexsu3 {transform:rotate(0deg);}"
  };
  function Gt(e, r) {
    R2(e, f_);
    let t = U(r, "direction", 8);
    var a2 = m_();
    A(() => Cl(a2, `arrow ${t() ?? ""} svelte-1qexsu3`)), b2(e, a2);
  }
  var y_ = /* @__PURE__ */ pr('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow"><path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" class="arrow-fill svelte-r0zny8" fill-opacity="0.7"></path></svg>');
  var b_ = {
    hash: "svelte-r0zny8",
    code: ".arrow-fill.svelte-r0zny8 {fill:var(--rc-color-grey-text-dark);}"
  };
  function h_(e) {
    R2(e, b_);
    var r = y_();
    b2(e, r);
  }
  var v_ = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
     xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5" clip-path="url(#clip0_344_3390)">
        <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
              fill="currentColor"/>
    </g>
    <defs>
        <clipPath id="clip0_344_3390">
            <rect width="24" height="24" fill="currentColor"/>
        </clipPath>
    </defs>
</svg>
`;
  var k_ = /* @__PURE__ */ I2('<div style="color:var(--rc-color-gray-text-dark);"><!></div>');
  function w_(e) {
    var r = k_(), t = P2(r);
    Wr(t, () => v_), b2(e, r);
  }
  var x_ = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
     xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
          fill="currentColor"/>
</svg>
`;
  var P_ = /* @__PURE__ */ I2('<div style="color:var(--rc-color-accent);" class="rcb-ui-asset-icon svelte-wgufvv"><!></div>');
  var S_ = {
    hash: "svelte-wgufvv",
    code: "div.svelte-wgufvv {height:24px;width:24px;}"
  };
  function E_(e) {
    R2(e, S_);
    var r = P_(), t = P2(r);
    Wr(t, () => x_), b2(e, r);
  }
  var T_ = `<svg viewBox="0 0 124 124" fill="var(--rc-color-grey-text-dark)" xmlns="http://www.w3.org/2000/svg">
    <circle cx="62" cy="62" r="62" fill="var(--rc-color-grey-text-dark)" opacity="0.2"/>
    <rect x="44.1116" y="56" width="27.5" height="11" transform="rotate(45 44.1116 56)" fill="var(--rc-color-grey-text-dark)"/>
    <rect x="79.1133" y="44.334" width="11" height="44" transform="rotate(45 79.1133 44.334)" fill="var(--rc-color-grey-text-dark)"/>
</svg>
`;
  var I_ = /* @__PURE__ */ I2('<div style="color:var(--rc-color-primary)"><!></div>');
  function Ui(e) {
    var r = I_(), t = P2(r);
    Wr(t, () => T_), b2(e, r);
  }
  var q_ = /* @__PURE__ */ pr('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" class="arrow-fill svelte-1jpfelf" fill-opacity="0.7"></path></svg>');
  var F_ = {
    hash: "svelte-1jpfelf",
    code: ".arrow-fill.svelte-1jpfelf {fill:var(--arrow-fill-color, var(--rc-color-grey-text-dark));}"
  };
  function z_(e) {
    R2(e, F_);
    var r = q_();
    b2(e, r);
  }
  var D_ = {
    cart: w_,
    error: yi,
    lock: E_,
    success: Ui,
    back: h_,
    info: Bi,
    close: z_,
    "chevron-left": Gt,
    "chevron-right": Gt,
    "chevron-up": Gt,
    "chevron-down": Gt
  };
  function qt(e, r) {
    V(r, true);
    const t = D_[r.name];
    let a2 = X(L2({}));
    if (r.name.startsWith("chevron")) {
      const n = r.name.split("-")[1];
      D(a2, L2({ direction: n }));
    }
    t(e, hr(() => d(a2))), H();
  }
  var A_ = /* @__PURE__ */ I2('<span class="rc-sandbox-only-error svelte-1d8gf9n"><!></span> <br> <br>', 1);
  var M_ = /* @__PURE__ */ I2('<!> <a class="svelte-1d8gf9n"> </a>.', 1);
  var j_ = /* @__PURE__ */ I2("<!> <!>", 1);
  var N_ = {
    hash: "svelte-1d8gf9n",
    code: "a.svelte-1d8gf9n {color:var(--rc-color-grey-text-dark);}.rc-sandbox-only-error.svelte-1d8gf9n {font-weight:bold;}"
  };
  function C_(e, r) {
    V(r, true), R2(e, N_);
    const t = De(), a2 = () => ze(o, "$translator", t), n = /* @__PURE__ */ E2(() => r.lastError ?? new de(oe.UnknownError, "Unknown error without state set.")), o = Ee(Ne), i = /* @__PURE__ */ E2(() => d(n).errorCode === oe.StripeTaxNotActive || d(n).errorCode === oe.StripeInvalidTaxOriginAddress || d(n).errorCode === oe.StripeMissingRequiredPermission);
    We(() => {
      K.errorLog(`Displayed error: ${oe[d(n).errorCode]}. Message: ${d(n).message ?? "None"}. Underlying error: ${d(n).underlyingErrorMessage ?? "None"}`);
    });
    function s2() {
      return d(n).errorCode === oe.AlreadyPurchasedError ? a2().translate(O.ErrorPageCloseButtonTitle, { appName: r.appName ?? "App" }) : d(i) ? a2().translate(O.ErrorButtonClose) : a2().translate(O.ErrorButtonTryAgain);
    }
    function l2() {
      switch (d(n).errorCode) {
        case oe.AlreadyPurchasedError:
          return r.productDetails.productType === Lr.Subscription ? a2().translate(O.ErrorPageErrorTitleAlreadySubscribed, { productTitle: r.productDetails.title }) : a2().translate(O.ErrorPageErrorTitleAlreadyPurchased, { productTitle: r.productDetails.title });
        case oe.StripeTaxNotActive:
          return a2().translate(O.ErrorPageErrorTitleStripeTaxNotActive);
        case oe.StripeInvalidTaxOriginAddress:
          return a2().translate(O.ErrorPageErrorTitleStripeInvalidTaxOriginAddress);
        case oe.StripeMissingRequiredPermission:
          return a2().translate(O.ErrorPageErrorTitleStripeMissingRequiredPermission);
        default:
          return a2().translate(O.ErrorPageErrorTitleOtherErrors);
      }
    }
    function c2() {
      const m2 = d(n).getErrorCode();
      switch (d(n).errorCode) {
        case oe.ErrorSettingUpPurchase:
          return a2().translate(O.ErrorPageErrorMessageErrorSettingUpPurchase, { errorCode: m2 });
        case oe.ErrorChargingPayment:
          return a2().translate(O.ErrorPageErrorMessageErrorChargingPayment, { errorCode: m2 });
        case oe.AlreadyPurchasedError:
          return r.productDetails.productType === Lr.Subscription ? a2().translate(O.ErrorPageErrorMessageAlreadySubscribed, { errorCode: m2 }) : a2().translate(O.ErrorPageErrorMessageAlreadyPurchased, { errorCode: m2 });
        case oe.StripeTaxNotActive:
          return a2().translate(O.ErrorPageErrorMessageStripeTaxNotActive, { errorCode: m2 });
        case oe.StripeInvalidTaxOriginAddress:
          return a2().translate(O.ErrorPageErrorMessageStripeInvalidTaxOriginAddress, { errorCode: m2 });
        case oe.StripeMissingRequiredPermission:
          return a2().translate(O.ErrorPageErrorMessageStripeMissingRequiredPermission, { errorCode: m2 });
        case oe.NetworkError:
          return a2().translate(O.ErrorPageErrorMessageNetworkError, { errorCode: m2 });
        default:
          return a2().translate(O.ErrorPageErrorMessageUnknownError, { errorCode: m2 });
      }
    }
    function p2() {
      return d(n).errorCode === oe.AlreadyPurchasedError ? O.ErrorPageTroubleAccessing : O.ErrorPageIfErrorPersists;
    }
    function u() {
      return d(n).errorCode === oe.AlreadyPurchasedError ? "success" : "error";
    }
    var _ = /* @__PURE__ */ E2(l2), g2 = /* @__PURE__ */ E2(s2);
    Sn(e, {
      get title() {
        return d(_);
      },
      get onDismiss() {
        return r.onDismiss;
      },
      type: "error",
      get closeButtonTitle() {
        return d(g2);
      },
      icon: (h2) => {
        var v = /* @__PURE__ */ E2(u);
        qt(h2, {
          get name() {
            return d(v);
          }
        });
      },
      message: (h2) => {
        var v = j_(), y2 = W(v);
        {
          var x2 = (B) => {
            var k = A_(), w2 = W(k), z = P2(w2);
            ur(z, {
              get key() {
                return O.ErrorPageErrorMessageOnlyInSandbox;
              }
            }), b2(B, k);
          };
          N(y2, (B) => {
            d(i) && B(x2);
          });
        }
        var T2 = C(y2);
        A(() => te(T2, ` ${c2() ?? ""} `));
        var S2 = C(T2);
        {
          var q = (B) => {
            var k = M_(), w2 = W(k), z = /* @__PURE__ */ E2(p2);
            ur(w2, {
              get key() {
                return d(z);
              }
            });
            var Y = C(w2, 2), G = P2(Y);
            A(() => {
              j2(Y, "href", `mailto:${r.supportEmail ?? ""}`), te(G, r.supportEmail);
            }), b2(B, k);
          };
          N(S2, (B) => {
            !d(i) && r.supportEmail && B(q);
          });
        }
        b2(h2, v);
      },
      $$slots: { icon: true, message: true }
    }), H();
  }
  function O_(e, r) {
    V(r, false);
    const t = De(), a2 = () => ze(o, "$translator", t);
    let n = U(r, "onContinue", 8);
    const o = Ee(Ne), i = Ee(xn);
    function s2() {
      i.trackSDKEvent({
        eventName: Fe.CheckoutPurchaseSuccessfulDismiss,
        properties: { ui_element: "go_back_to_app" }
      }), n()();
    }
    We(() => {
      i.trackSDKEvent({
        eventName: Fe.CheckoutPurchaseSuccessfulImpression
      });
    }), Qe();
    var l2 = /* @__PURE__ */ et(() => a2().translate(O.SuccessPagePurchaseSuccessful)), c2 = /* @__PURE__ */ et(() => a2().translate(O.SuccessPageButtonClose));
    Sn(e, {
      type: "success",
      get title() {
        return d(l2);
      },
      onDismiss: s2,
      get closeButtonTitle() {
        return d(c2);
      },
      icon: (u) => {
        Ui(u);
      },
      $$slots: { icon: true }
    }), H();
  }
  function L_(e) {
    Ai(e);
  }
  var B_ = /* @__PURE__ */ I2('<div class="rcb-pricing-dropdown svelte-fgrbnh"><div class="rcb-pricing-dropdown-header svelte-fgrbnh" tabindex="0" role="button"><!> <span class="rcb-pricing-dropdown-toggle svelte-fgrbnh"><!></span></div> <div class="rcb-pricing-dropdown-content svelte-fgrbnh"><div class="rcb-pricing-dropdown-content-inner svelte-fgrbnh"><!></div></div></div>');
  var R_ = {
    hash: "svelte-fgrbnh",
    code: `.rcb-pricing-dropdown.svelte-fgrbnh {width:100%;overflow:hidden;display:flex;flex-direction:column;}.rcb-pricing-dropdown-header.svelte-fgrbnh {padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);padding-left:var(--rc-spacing-gapLarge-mobile);padding-right:var(--rc-spacing-gapMedium-mobile);color:var(--rc-color-grey-text-light);border-radius:var(--rc-shape-input-button-border-radius);cursor:pointer;display:inline-flex;align-items:center;background-color:var(--rc-color-grey-ui-light);width:fit-content;user-select:none;}.rcb-pricing-dropdown-toggle.svelte-fgrbnh {display:flex;align-items:center;margin-left:var(--rc-spacing-gapSmall-mobile);}.rcb-pricing-dropdown-content.svelte-fgrbnh {display:flex;flex-direction:column;overflow:hidden;}

  @container layout-query-container (width < 768px) {.rcb-pricing-dropdown-content.svelte-fgrbnh {max-height:1000px; /* Set a large max-height for animation */transition:max-height 0.2s ease-in-out;}.rcb-pricing-dropdown-content.collapsed.svelte-fgrbnh {max-height:0;}.rcb-pricing-dropdown-content-inner.svelte-fgrbnh {padding-top:var(--rc-spacing-gapMedium-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-pricing-dropdown-header.svelte-fgrbnh {display:none;}
  }`
  };
  function U_(e, r) {
    V(r, false), R2(e, R_);
    const t = De(), a2 = () => ze(i, "$translator", t);
    let n = U(r, "isExpanded", 12, true), o = U(r, "children", 8);
    const i = Ee(Ne);
    function s2() {
      n(!n());
    }
    Qe();
    var l2 = B_(), c2 = P2(l2), p2 = P2(c2);
    se(p2, {
      size: "label-default",
      children: (y2, x2) => {
        var T2 = ee(), S2 = W(T2);
        {
          var q = (k) => {
            var w2 = ie();
            A(() => te(w2, a2().translate(O.PricingDropdownHideDetails))), b2(k, w2);
          }, B = (k) => {
            var w2 = ie();
            A(() => te(w2, a2().translate(O.PricingDropdownShowDetails))), b2(k, w2);
          };
          N(S2, (k) => {
            n() ? k(q) : k(B, false);
          });
        }
        b2(y2, T2);
      },
      $$slots: { default: true }
    });
    var u = C(p2, 2), _ = P2(u);
    {
      var g2 = (y2) => {
        qt(y2, { name: "chevron-up" });
      }, m2 = (y2) => {
        qt(y2, { name: "chevron-down" });
      };
      N(_, (y2) => {
        n() ? y2(g2) : y2(m2, false);
      });
    }
    var f2 = C(c2, 2), h2 = P2(f2), v = P2(h2);
    _e(v, () => o() ?? ae), A(() => {
      j2(c2, "aria-expanded", n()), fr(f2, "collapsed", !n());
    }), nt("click", c2, s2), nt("keydown", c2, (y2) => y2.key === "Enter" || y2.key === " " ? s2() : null), b2(e, l2), H();
  }
  var V_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-value-loading svelte-erv89n"><!></div>');
  var H_ = {
    hash: "svelte-erv89n",
    code: `.rcb-pricing-table-value-loading.svelte-erv89n {color:transparent;
    animation: svelte-erv89n-rcb-pricing-table-value-loading 1.5s ease-in-out 0s infinite
      normal none running;cursor:progress;background-color:var(--rc-color-grey-text-dark);user-select:none;border-radius:var(--rc-shape-input-border-radius);}

  @keyframes svelte-erv89n-rcb-pricing-table-value-loading {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.3;
    }
  }`
  };
  function W_(e, r) {
    V(r, false), R2(e, H_);
    let t = U(r, "children", 8);
    Qe();
    var a2 = V_(), n = P2(a2);
    _e(n, () => t() ?? ae), b2(e, a2), H();
  }
  var Y_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-row svelte-i12130" data-testid="tax-loading-skeleton"><div class="rcb-pricing-table-header svelte-i12130"><!></div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div>');
  var G_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-row svelte-i12130"><div class="rcb-pricing-table-header svelte-i12130"> </div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div>');
  var X_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-row svelte-i12130"><div class="rcb-pricing-table-header svelte-i12130"><!></div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div>');
  var Z_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-row svelte-i12130"><div class="rcb-pricing-table-header svelte-i12130"><!></div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div> <!> <div class="rcb-pricing-table-separator svelte-i12130"></div>', 1);
  var K_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table-row svelte-i12130"><div class="rcb-pricing-table-header svelte-i12130"><!></div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div>');
  var J_ = /* @__PURE__ */ I2('<div class="rcb-pricing-table svelte-i12130"><!> <!> <div class="rcb-pricing-table-row rcb-header svelte-i12130"><div class="rcb-pricing-table-header svelte-i12130"><!></div> <div class="rcb-pricing-table-value svelte-i12130"><!></div></div></div>');
  var Q_ = {
    hash: "svelte-i12130",
    code: `.rcb-pricing-table.svelte-i12130 {display:flex;flex-direction:column;gap:var(--rc-spacing-gapSmall-mobile);}.rcb-pricing-table-row.svelte-i12130 {display:flex;flex-direction:row;align-items:center;justify-content:space-between;}.rcb-pricing-table-separator.svelte-i12130 {height:1px;background-color:var(--rc-color-grey-ui-dark);}.rcb-pricing-table-row.svelte-i12130 > .rcb-pricing-table-header:where(.svelte-i12130) {color:var(--rc-color-grey-text-light);}.rcb-pricing-table-row.svelte-i12130 > .rcb-pricing-table-value:where(.svelte-i12130) {color:var(--rc-color-grey-text-dark);}.rcb-pricing-table-row.svelte-i12130:last-child > .rcb-pricing-table-header:where(.svelte-i12130),
  .rcb-pricing-table-row.svelte-i12130:last-child > .rcb-pricing-table-value:where(.svelte-i12130) {color:var(--rc-color-grey-text-dark);}

  @container layout-query-container (width >= 768px) {.rcb-pricing-table-separator.svelte-i12130 {display:none;}.rcb-pricing-table.svelte-i12130 {gap:var(--rc-spacing-gapSmall-desktop);}.rcb-pricing-table-row.svelte-i12130 > .rcb-pricing-table-header:where(.svelte-i12130),
    .rcb-pricing-table-row.svelte-i12130 > .rcb-pricing-table-value:where(.svelte-i12130) {color:var(--rc-color-grey-text-light);}
  }`
  };
  function $_(e, r) {
    var _;
    V(r, true), R2(e, Q_);
    const t = De(), a2 = () => ze(i, "$translator", t), n = (g2) => {
      var m2 = J_(), f2 = P2(m2);
      {
        var h2 = (k) => {
          var w2 = Z_(), z = W(w2), Y = P2(z), G = P2(Y);
          se(G, {
            size: "body-small",
            children: (ce, he) => {
              var xe = ie();
              A(() => te(xe, a2().translate(O.PricingTotalExcludingTax))), b2(ce, xe);
            },
            $$slots: { default: true }
          });
          var ne = C(Y, 2), J = P2(ne);
          se(J, {
            size: "body-small",
            children: (ce, he) => {
              var xe = ie();
              A(() => te(xe, a2().formatPrice(r.priceBreakdown.totalExcludingTaxInMicros, r.priceBreakdown.currency))), b2(ce, xe);
            },
            $$slots: { default: true }
          });
          var re = C(z, 2);
          {
            var pe = (ce) => {
              var he = Y_(), xe = P2(he), vr = P2(xe);
              se(vr, {
                size: "body-small",
                children: (Oe, kr) => {
                  var $e = ie();
                  A(() => te($e, a2().translate(O.PricingTableTax))), b2(Oe, $e);
                },
                $$slots: { default: true }
              });
              var _r = C(xe, 2), Ge = P2(_r);
              se(Ge, {
                size: "body-small",
                children: (Oe, kr) => {
                  W_(Oe, {
                    children: ($e, wr) => {
                      var Xe = ie();
                      A(() => te(Xe, a2().formatPrice(1234e4, r.priceBreakdown.currency))), b2($e, Xe);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              }), b2(ce, he);
            }, ge = (ce) => {
              var he = ee(), xe = W(he);
              {
                var vr = (Ge) => {
                  var Oe = G_(), kr = P2(Oe), $e = P2(kr);
                  A(() => te($e, a2().translate(O.PricingTableTax)));
                  var wr = C(kr, 2), Xe = P2(wr);
                  se(Xe, {
                    size: "body-small",
                    children: (Yr, Lt) => {
                      var xr = ie();
                      A(() => te(xr, a2().translate(O.PricingTableEnterBillingAddressToCalculate))), b2(Yr, xr);
                    },
                    $$slots: { default: true }
                  }), b2(Ge, Oe);
                }, _r = (Ge) => {
                  var Oe = ee(), kr = W(Oe);
                  {
                    var $e = (wr) => {
                      var Xe = ee(), Yr = W(Xe);
                      it(Yr, 17, () => r.priceBreakdown.taxBreakdown, ot, (Lt, xr) => {
                        var pt = X_(), Bt = P2(pt), Rt = P2(Bt);
                        se(Rt, {
                          size: "body-small",
                          children: (Gr, Vt) => {
                            var Mr = ie();
                            A(() => te(Mr, d(xr).display_name)), b2(Gr, Mr);
                          },
                          $$slots: { default: true }
                        });
                        var wa = C(Bt, 2), Ut = P2(wa);
                        se(Ut, {
                          size: "body-small",
                          children: (Gr, Vt) => {
                            var Mr = ie();
                            A(() => te(Mr, a2().formatPrice(d(xr).tax_amount_in_micros, r.priceBreakdown.currency))), b2(Gr, Mr);
                          },
                          $$slots: { default: true }
                        }), b2(Lt, pt);
                      }), b2(wr, Xe);
                    };
                    N(
                      kr,
                      (wr) => {
                        r.priceBreakdown.taxBreakdown !== null && wr($e);
                      },
                      true
                    );
                  }
                  b2(Ge, Oe);
                };
                N(
                  xe,
                  (Ge) => {
                    r.priceBreakdown.taxCalculationStatus === "pending" ? Ge(vr) : Ge(_r, false);
                  },
                  true
                );
              }
              b2(ce, he);
            };
            N(re, (ce) => {
              r.priceBreakdown.taxCalculationStatus === "loading" ? ce(pe) : ce(ge, false);
            });
          }
          b2(k, w2);
        };
        N(f2, (k) => {
          d(s2) && k(h2);
        });
      }
      var v = C(f2, 2);
      {
        var y2 = (k) => {
          var w2 = K_(), z = P2(w2), Y = P2(z);
          se(Y, {
            size: "body-small",
            children: (J, re) => {
              var pe = ie();
              A(() => te(pe, a2().translate(O.PricingTableTrialEnds, {
                formattedTrialEndDate: a2().translateDate(d(o), { dateStyle: "medium" })
              }))), b2(J, pe);
            },
            $$slots: { default: true }
          });
          var G = C(z, 2), ne = P2(G);
          se(ne, {
            size: "body-small",
            children: (J, re) => {
              var pe = ie();
              A(() => te(pe, a2().formatPrice(r.priceBreakdown.totalAmountInMicros, r.priceBreakdown.currency))), b2(J, pe);
            },
            $$slots: { default: true }
          }), b2(k, w2);
        };
        N(v, (k) => {
          d(o) && k(y2);
        });
      }
      var x2 = C(v, 2), T2 = P2(x2), S2 = P2(T2);
      se(S2, {
        size: "body-small",
        children: (k, w2) => {
          var z = ie();
          A(() => te(z, a2().translate(O.PricingTableTotalDueToday))), b2(k, z);
        },
        $$slots: { default: true }
      });
      var q = C(T2, 2), B = P2(q);
      se(B, {
        size: "body-small",
        children: (k, w2) => {
          var z = ee(), Y = W(z);
          {
            var G = (J) => {
              var re = ie();
              A(() => te(re, a2().formatPrice(0, r.priceBreakdown.currency))), b2(J, re);
            }, ne = (J) => {
              var re = ie();
              A(() => te(re, a2().formatPrice(r.priceBreakdown.totalAmountInMicros, r.priceBreakdown.currency))), b2(J, re);
            };
            N(Y, (J) => {
              d(o) ? J(G) : J(ne, false);
            });
          }
          b2(k, z);
        },
        $$slots: { default: true }
      }), b2(g2, m2);
    };
    let o = X(null);
    (_ = r.trialPhase) != null && _.period && D(o, L2(Xa(/* @__PURE__ */ new Date(), r.trialPhase.period, true)));
    const i = Ee(Ne), s2 = /* @__PURE__ */ E2(() => r.priceBreakdown.taxCalculationStatus !== "unavailable" && r.priceBreakdown.taxCalculationStatus !== "disabled" && r.priceBreakdown.taxBreakdown && r.priceBreakdown.taxBreakdown.length > 0);
    var l2 = ee(), c2 = W(l2);
    {
      var p2 = (g2) => {
        U_(g2, {
          children: (m2, f2) => {
            n(m2);
          },
          $$slots: { default: true }
        });
      }, u = (g2) => {
        n(g2);
      };
      N(c2, (g2) => {
        d(s2) ? g2(p2) : g2(u, false);
      });
    }
    b2(e, l2), H();
  }
  var eg = /* @__PURE__ */ I2('<div class="rcb-subscribe-to svelte-4fnm8t"><!></div>');
  var rg = /* @__PURE__ */ I2('<span class="rcb-product-description svelte-4fnm8t"><!></span>');
  var tg = /* @__PURE__ */ I2('<div class="rcb-pricing-info-header svelte-4fnm8t"><!> <div class="rcb-product-title svelte-4fnm8t"><!></div> <!></div>');
  var ag = {
    hash: "svelte-4fnm8t",
    code: `.rcb-pricing-info-header.svelte-4fnm8t {display:flex;flex-direction:column;gap:var(--rc-spacing-gapMedium-mobile);}.rcb-product-title.svelte-4fnm8t {color:var(--rc-color-grey-text-dark);}.rcb-product-description.svelte-4fnm8t {color:var(--rc-color-grey-text-light);}.rcb-subscribe-to.svelte-4fnm8t {display:none;}

  @container layout-query-container (width >= 768px) {.rcb-subscribe-to.svelte-4fnm8t {display:block;}.rcb-pricing-info-header.svelte-4fnm8t {display:flex;flex-direction:column;gap:var(--rc-spacing-gapMedium-desktop);}
  }`
  };
  function ng(e, r) {
    V(r, false), R2(e, ag);
    let t = U(r, "productDetails", 8), a2 = U(r, "showProductDescription", 8);
    const n = t().productType === Lr.Subscription;
    Qe();
    var o = tg(), i = P2(o);
    {
      var s2 = (_) => {
        var g2 = eg(), m2 = P2(g2);
        se(m2, {
          size: "body-base",
          children: (f2, h2) => {
            var v = /* @__PURE__ */ et(() => ({ productTitle: t().title }));
            ur(f2, {
              get key() {
                return O.ProductInfoSubscribeTo;
              },
              get variables() {
                return d(v);
              }
            });
          },
          $$slots: { default: true }
        }), b2(_, g2);
      };
      N(i, (_) => {
        n && _(s2);
      });
    }
    var l2 = C(i, 2), c2 = P2(l2);
    se(c2, {
      size: "heading-lg",
      branded: true,
      children: (_, g2) => {
        var m2 = /* @__PURE__ */ et(() => ({ productTitle: t().title }));
        ur(_, {
          get key() {
            return O.ProductInfoProductTitle;
          },
          get variables() {
            return d(m2);
          }
        });
      },
      $$slots: { default: true }
    });
    var p2 = C(l2, 2);
    {
      var u = (_) => {
        var g2 = rg(), m2 = P2(g2);
        se(m2, {
          size: "body-small",
          children: (f2, h2) => {
            var v = /* @__PURE__ */ et(() => ({
              productDescription: t().description
            }));
            ur(f2, {
              get key() {
                return O.ProductInfoProductDescription;
              },
              get variables() {
                return d(v);
              }
            });
          },
          $$slots: { default: true }
        }), b2(_, g2);
      };
      N(p2, (_) => {
        a2() && t().description && _(u);
      });
    }
    b2(e, o), H();
  }
  var og = /* @__PURE__ */ I2("<div><!></div>");
  var ig = /* @__PURE__ */ I2('<div class="rcb-product-price-container svelte-509gz3"><!> <div><!> <!></div></div>');
  var sg = {
    hash: "svelte-509gz3",
    code: ".rcb-product-price-container.svelte-509gz3 {display:flex;flex-direction:column;justify-content:space-between;gap:var(--rc-spacing-gapMedium-mobile);color:var(--rc-color-grey-text-dark);}"
  };
  function lg(e, r) {
    V(r, true), R2(e, sg);
    const t = De(), a2 = () => ze(n, "$translator", t), n = Ee(Ne), o = /* @__PURE__ */ E2(() => a2().formatPrice(r.priceBreakdown.totalAmountInMicros, r.priceBreakdown.currency));
    var i = ig(), s2 = P2(i);
    {
      var l2 = (g2) => {
        var m2 = og(), f2 = P2(m2);
        se(f2, {
          size: "heading-lg",
          children: (h2, v) => {
            var y2 = /* @__PURE__ */ E2(() => ({
              trialDuration: Dc(r.trialPhase.periodDuration, a2())
            }));
            ur(h2, {
              get key() {
                return O.ProductInfoFreeTrialDuration;
              },
              get variables() {
                return d(y2);
              }
            });
          },
          $$slots: { default: true }
        }), b2(g2, m2);
      };
      N(s2, (g2) => {
        var m2;
        (m2 = r.trialPhase) != null && m2.periodDuration && g2(l2);
      });
    }
    var c2 = C(s2, 2), p2 = P2(c2);
    se(p2, {
      size: "heading-lg",
      children: (g2, m2) => {
        var f2 = ie();
        A(() => te(f2, d(o))), b2(g2, f2);
      },
      $$slots: { default: true }
    });
    var u = C(p2, 2);
    {
      var _ = (g2) => {
        se(g2, {
          size: "body-small",
          children: (m2, f2) => {
            var h2 = ie();
            A(() => te(h2, a2().translatePeriodFrequency(r.basePhase.period.number, r.basePhase.period.unit, { useMultipleWords: true }))), b2(m2, h2);
          },
          $$slots: { default: true }
        });
      };
      N(u, (g2) => {
        var m2;
        (m2 = r.basePhase) != null && m2.period && g2(_);
      });
    }
    b2(e, i), H();
  }
  var cg = /* @__PURE__ */ I2('<div class="rcb-pricing-info svelte-18guro7"><div class="rcb-pricing-info-header svelte-18guro7"><!> <!></div> <!></div>');
  var dg = {
    hash: "svelte-18guro7",
    code: `.rcb-pricing-info.svelte-18guro7 {display:flex;flex-direction:column;user-select:none;gap:var(--rc-spacing-gapXXLarge-mobile);}.rcb-pricing-info-header.svelte-18guro7 {display:flex;flex-direction:column;gap:var(--rc-spacing-gapLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rcb-pricing-info.svelte-18guro7 {gap:var(--rc-spacing-gapXXXLarge-desktop);}.rcb-pricing-info-header.svelte-18guro7 {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
  };
  function ug(e, r) {
    R2(e, dg);
    let t = U(r, "productDetails", 8), a2 = U(r, "purchaseOption", 8), n = U(r, "showProductDescription", 8), o = U(r, "priceBreakdown", 8);
    const i = a2(), s2 = i == null ? void 0 : i.base, l2 = i == null ? void 0 : i.trial;
    var c2 = cg(), p2 = P2(c2), u = P2(p2);
    ng(u, {
      get productDetails() {
        return t();
      },
      get showProductDescription() {
        return n();
      }
    });
    var _ = C(u, 2);
    lg(_, {
      get priceBreakdown() {
        return o();
      },
      basePhase: s2,
      trialPhase: l2
    });
    var g2 = C(p2, 2);
    $_(g2, {
      get priceBreakdown() {
        return o();
      },
      trialPhase: l2
    }), b2(e, c2);
  }
  var bt = (e) => `https://da08ctfrofx1b.cloudfront.net/${e}`;
  var pg = /* @__PURE__ */ I2('<div class="rcb-ui-container svelte-1h6xr8z"><!></div>');
  var _g = {
    hash: "svelte-1h6xr8z",
    code: `.rcb-ui-container.svelte-1h6xr8z {display:flex;flex-direction:column;inset:0;color-scheme:none;line-height:1.5em;font-family:-apple-system,
      BlinkMacSystemFont,
      avenir next,
      avenir,
      segoe ui,
      helvetica neue,
      helvetica,
      Cantarell,
      Ubuntu,
      roboto,
      noto,
      arial,
      sans-serif;overflow-x:hidden;overflow-y:auto;}.rcb-ui-container.fullscreen.svelte-1h6xr8z {position:fixed;top:0;left:0;right:0;bottom:0;overscroll-behavior:none;z-index:1000001;}.rcb-ui-container.inside.svelte-1h6xr8z {position:relative;width:100%;z-index:unset;height:100%;top:0;left:0;}`
  };
  function gg(e, r) {
    V(r, true), R2(e, _g);
    const t = U(r, "brandingAppearance", 3, void 0), a2 = U(r, "brandFontConfig", 3, void 0), n = U(r, "isInElement", 3, false), o = /* @__PURE__ */ E2(() => new It(t()).getTextStyleVars(a2())), i = /* @__PURE__ */ E2(() => new It(t()).spacingStyleVars), s2 = /* @__PURE__ */ E2(() => [d(o), d(i)].join("; ")), l2 = /* @__PURE__ */ E2(() => {
      var _;
      return (_ = a2()) != null && _.font_url ? bt(a2().font_url) : null;
    }), c2 = async (_) => {
      try {
        const g2 = new FontFace(Ni, `url(${_})`);
        await g2.load(), document.fonts.add(g2);
      } catch (g2) {
        console.error("Failed to set brand font:", g2);
      }
    };
    at(() => {
      d(l2) && c2(d(l2));
    });
    var p2 = pg(), u = P2(p2);
    _e(u, () => r.children ?? ae), A(() => {
      j2(p2, "style", d(s2)), fr(p2, "fullscreen", !n()), fr(p2, "inside", n());
    }), b2(e, p2), H();
  }
  var mg = /* @__PURE__ */ I2('<div id="layout-query-container" class="svelte-1x4ow5d"><div class="rcb-ui-layout svelte-1x4ow5d"><!></div></div>');
  var fg = {
    hash: "svelte-1x4ow5d",
    code: `#layout-query-container.svelte-1x4ow5d {width:100%;height:100%;container-type:size;container-name:layout-query-container;overflow-y:auto;overscroll-behavior:none;}.rcb-ui-layout.svelte-1x4ow5d {width:100%;min-height:100%;display:flex;box-sizing:border-box;flex-direction:column;overflow-y:auto;overscroll-behavior:none;}

  @container layout-query-container (width < 768px) {.rcb-ui-layout.svelte-1x4ow5d {flex-grow:1;}
  }

  @container layout-query-container (width >= 768px) {.rcb-ui-layout.svelte-1x4ow5d {flex-direction:row;}
  }`
  };
  function yg(e, r) {
    V(r, false), R2(e, fg);
    let t = U(r, "style", 8, ""), a2 = U(r, "children", 8);
    Qe();
    var n = mg(), o = P2(n), i = P2(o);
    _e(i, () => a2() ?? ae), A(() => j2(o, "style", t())), b2(e, n), H();
  }
  var bg = (e) => e;
  function hg(e) {
    const r = e - 1;
    return r * r * r + 1;
  }
  function Po(e) {
    const r = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return r ? [parseFloat(r[1]), r[2] || "px"] : [
      /** @type {number} */
      e,
      "px"
    ];
  }
  function vg(e, { delay: r = 0, duration: t = 400, easing: a2 = bg } = {}) {
    const n = +getComputedStyle(e).opacity;
    return {
      delay: r,
      duration: t,
      easing: a2,
      css: (o) => `opacity: ${o * n}`
    };
  }
  function kg(e, { delay: r = 0, duration: t = 400, easing: a2 = hg, x: n = 0, y: o = 0, opacity: i = 0 } = {}) {
    const s2 = getComputedStyle(e), l2 = +s2.opacity, c2 = s2.transform === "none" ? "" : s2.transform, p2 = l2 * (1 - i), [u, _] = Po(n), [g2, m2] = Po(o);
    return {
      delay: r,
      duration: t,
      easing: a2,
      css: (f2, h2) => `
			transform: ${c2} translate(${(1 - f2) * u}${_}, ${(1 - f2) * g2}${m2});
			opacity: ${l2 - p2 * h2}`
    };
  }
  var wg = /* @__PURE__ */ I2('<div><div class="layout-wrapper svelte-1w6qvx7"><div><!></div></div></div>');
  var xg = {
    hash: "svelte-1w6qvx7",
    code: `.layout-wrapper-outer.svelte-1w6qvx7 {flex:1;display:flex;background-color:var(--rc-color-background);}.layout-wrapper-outer.rcb-navbar.svelte-1w6qvx7 {justify-content:flex-end;}.layout-wrapper.svelte-1w6qvx7 {width:100%;}.layout-content.svelte-1w6qvx7 {box-sizing:border-box;background-color:var(--rc-color-background);color:var(--rc-color-grey-text-dark);display:flex;flex-direction:column;}.layout-content.rcb-navbar.svelte-1w6qvx7 {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);}

  @container layout-query-container (width < 768px) {.layout-wrapper.svelte-1w6qvx7 {width:100%;min-width:300px;display:flex;flex-grow:1;}.layout-content.svelte-1w6qvx7 {flex-grow:1;height:100%;}.layout-content.rcb-navbar.svelte-1w6qvx7 {padding-bottom:var(--rc-spacing-outerPadding-mobile);}.layout-content.rcb-main-block.svelte-1w6qvx7 {padding:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.layout-wrapper.svelte-1w6qvx7 {flex-basis:544px;}.layout-content.rcb-main-block.svelte-1w6qvx7 {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}.layout-content.rcb-navbar.svelte-1w6qvx7 {gap:var(--rc-spacing-gapXXLarge-desktop);}.layout-wrapper-outer.svelte-1w6qvx7 {padding-top:var(--rc-spacing-outerPaddingTop-desktop);padding-bottom:var(--rc-spacing-outerPadding-desktop);}
  }`
  };
  function Vi(e, r) {
    V(r, true), R2(e, xg);
    const t = `rcb-${r.location}`;
    var a2 = wg();
    Fr(a2, `layout-wrapper-outer ${t ?? ""} svelte-1w6qvx7`);
    var n = P2(a2), o = P2(n);
    Fr(o, `layout-content ${t ?? ""} svelte-1w6qvx7`);
    var i = P2(o);
    _e(i, () => r.children ?? ae), pi(3, o, () => vg, () => ({ duration: 500, delay: 50 })), b2(e, a2), H();
  }
  var Pg = /* @__PURE__ */ I2('<div class="navbar-body svelte-jz90ay"><!></div>');
  var Sg = /* @__PURE__ */ I2('<div class="navbar-header svelte-jz90ay"><!></div> <!>', 1);
  var Eg = /* @__PURE__ */ I2('<div class="rcb-ui-navbar svelte-jz90ay"><!></div>');
  var Tg = {
    hash: "svelte-jz90ay",
    code: `.rcb-ui-navbar.svelte-jz90ay {width:100%;max-width:none;flex-shrink:0;background-color:var(--rc-color-background);}

  @container layout-query-container (width < 768px) {.navbar-body.svelte-jz90ay {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-ui-navbar.svelte-jz90ay {width:50vw;display:flex;justify-content:flex-end;}.navbar-header.svelte-jz90ay {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}.navbar-body.svelte-jz90ay {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}
  }`
  };
  function Ig(e, r) {
    V(r, true), R2(e, Tg);
    const t = U(r, "brandingAppearance", 3, void 0), a2 = /* @__PURE__ */ E2(() => new It(t()).productInfoStyleVars);
    var n = Eg(), o = P2(n);
    Vi(o, {
      location: "navbar",
      children: (i, s2) => {
        var l2 = Sg(), c2 = W(l2), p2 = P2(c2);
        _e(p2, () => r.headerContent ?? ae);
        var u = C(c2, 2);
        {
          var _ = (g2) => {
            var m2 = Pg(), f2 = P2(m2);
            _e(f2, () => r.bodyContent ?? ae), b2(g2, m2);
          };
          N(u, (g2) => {
            r.bodyContent && g2(_);
          });
        }
        b2(i, l2);
      },
      $$slots: { default: true }
    }), A(() => j2(n, "style", d(a2))), b2(e, n), H();
  }
  var qg = /* @__PURE__ */ I2('<button class="rcb-close-button svelte-nssttr" data-testid="close-button"><!></button>');
  var Fg = {
    hash: "svelte-nssttr",
    code: ".rcb-close-button.svelte-nssttr {padding:10px;border:none;cursor:pointer;background-color:transparent;border-radius:50%;color:var(--rc-color-grey-text-dark);display:inline-flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;}.rcb-close-button.svelte-nssttr:active {transition:outline 0.1s ease-in-out;outline:2px solid var(--rc-color-focus);}.rcb-close-button.svelte-nssttr:hover {color:var(--rc-color-grey-text-dark);}"
  };
  function Hi(e, r) {
    R2(e, Fg);
    var t = qg(), a2 = P2(t);
    qt(a2, { name: "close" }), nt("click", t, function(n) {
      gi.call(this, r, n);
    }), b2(e, t);
  }
  var zg = /* @__PURE__ */ I2('<span class="rcb-sandbox-text svelte-1rtxyta">Sandbox</span>');
  var Dg = /* @__PURE__ */ I2('<div class="rcb-ui-sandbox-banner svelte-1rtxyta"><!> <div class="rcb-sandbox-banner-close-button-wrapper svelte-1rtxyta" style="--arrow-fill-color: black"><!></div></div>');
  var Ag = {
    hash: "svelte-1rtxyta",
    code: `.rcb-ui-sandbox-banner.svelte-1rtxyta {position:fixed;top:0;z-index:1000002;left:0;width:100%;background-color:var(--rc-color-warning);color:rgba(0, 0, 0, 1);text-transform:uppercase;padding:var(--rc-spacing-gapSmall-mobile);display:flex;justify-content:center;align-items:center;}.rcb-ui-sandbox-banner.isInElement.svelte-1rtxyta {position:absolute;}.rcb-sandbox-banner-close-button-wrapper.svelte-1rtxyta {position:absolute;right:var(--rc-spacing-gapMedium-mobile);top:50%;transform:translateY(-50%);color:black;}.rcb-sandbox-text.svelte-1rtxyta {font-weight:bold;}

  @container layout-query-container (width >= 768px) {.rcb-ui-sandbox-banner.svelte-1rtxyta {padding:var(--rc-spacing-gapMedium-desktop);}.rcb-sandbox-banner-close-button-wrapper.svelte-1rtxyta {right:var(--rc-spacing-gapMedium-desktop);}
  }`
  };
  function Mg(e, r) {
    V(r, false), R2(e, Ag);
    let t = U(r, "style", 8, ""), a2 = U(r, "isInElement", 8, false), n = Ca(true);
    function o() {
      K.debugLog("closeBanner"), D(n, false);
    }
    Qe();
    var i = ee(), s2 = W(i);
    {
      var l2 = (c2) => {
        var p2 = Dg(), u = P2(p2);
        se(u, {
          size: "caption-default",
          children: (m2, f2) => {
            var h2 = zg();
            b2(m2, h2);
          },
          $$slots: { default: true }
        });
        var _ = C(u, 2), g2 = P2(_);
        se(g2, {
          size: "caption-default",
          children: (m2, f2) => {
            Hi(m2, { $$events: { click: o } });
          },
          $$slots: { default: true }
        }), A(() => {
          j2(p2, "style", t()), fr(p2, "isInElement", a2());
        }), pi(2, p2, () => kg, () => ({ y: -100, duration: 300 })), b2(c2, p2);
      };
      N(s2, (c2) => {
        d(n) && c2(l2);
      });
    }
    b2(e, i), H();
  }
  var jg = /* @__PURE__ */ I2('<div class="rcb-ui-main svelte-nr408n"><!></div>');
  var Ng = {
    hash: "svelte-nr408n",
    code: ".rcb-ui-main.svelte-nr408n {flex:1;display:flex;background-color:var(--rc-color-background);}"
  };
  function Cg(e, r) {
    V(r, true), R2(e, Ng);
    const t = /* @__PURE__ */ E2(() => new It(r.brandingAppearance).formStyleVars);
    var a2 = jg(), n = P2(a2);
    Vi(n, {
      location: "main-block",
      children: (o, i) => {
        var s2 = ee(), l2 = W(s2);
        _e(l2, () => r.children ?? ae), b2(o, s2);
      },
      $$slots: { default: true }
    }), A(() => j2(a2, "style", d(t))), b2(e, a2), H();
  }
  var Og = /* @__PURE__ */ I2("<!> <!>", 1);
  var Lg = /* @__PURE__ */ I2("<!> <!>", 1);
  function Bg(e, r) {
    V(r, true);
    const t = /* @__PURE__ */ E2(() => {
      var o;
      return Li((o = r.brandingInfo) == null ? void 0 : o.appearance) ?? "";
    });
    var a2 = /* @__PURE__ */ E2(() => {
      var o;
      return (o = r.brandingInfo) == null ? void 0 : o.appearance;
    }), n = /* @__PURE__ */ E2(() => {
      var o;
      return (o = r.brandingInfo) == null ? void 0 : o.brand_font_config;
    });
    gg(e, {
      get brandingAppearance() {
        return d(a2);
      },
      get brandFontConfig() {
        return d(n);
      },
      get isInElement() {
        return r.isInElement;
      },
      children: (o, i) => {
        var s2 = Lg(), l2 = W(s2);
        {
          var c2 = (u) => {
            Mg(u, {
              get style() {
                return d(t);
              },
              get isInElement() {
                return r.isInElement;
              }
            });
          };
          N(l2, (u) => {
            r.isSandbox && u(c2);
          });
        }
        var p2 = C(l2, 2);
        yg(p2, {
          get style() {
            return d(t);
          },
          children: (u, _) => {
            var g2 = Og(), m2 = W(g2);
            {
              var f2 = (y2) => {
                var x2 = /* @__PURE__ */ E2(() => {
                  var T2;
                  return (T2 = r.brandingInfo) == null ? void 0 : T2.appearance;
                });
                Ig(y2, {
                  get brandingAppearance() {
                    return d(x2);
                  },
                  get headerContent() {
                    return r.navbarHeaderContent;
                  },
                  get bodyContent() {
                    return r.navbarBodyContent;
                  }
                });
              };
              N(m2, (y2) => {
                (r.navbarHeaderContent || r.navbarBodyContent) && y2(f2);
              });
            }
            var h2 = C(m2, 2), v = /* @__PURE__ */ E2(() => {
              var y2;
              return (y2 = r.brandingInfo) == null ? void 0 : y2.appearance;
            });
            Cg(h2, {
              get brandingAppearance() {
                return d(v);
              },
              children: (y2, x2) => {
                var T2 = ee(), S2 = W(T2);
                _e(S2, () => r.mainContent ?? ae), b2(y2, T2);
              },
              $$slots: { default: true }
            }), b2(u, g2);
          },
          $$slots: { default: true }
        }), b2(o, s2);
      },
      $$slots: { default: true }
    }), H();
  }
  var Rg = /* @__PURE__ */ I2('<source type="image/webp">');
  var Ug = /* @__PURE__ */ I2('<picture class="rcb-app-icon-picture-container svelte-el1u77"><!> <img class="rcb-app-icon svelte-el1u77" alt="App icon"></picture>');
  var Vg = /* @__PURE__ */ I2('<div class="rcb-app-icon loading svelte-el1u77"></div>');
  var Hg = {
    hash: "svelte-el1u77",
    code: ".rcb-app-icon.svelte-el1u77 {width:32px;height:32px;border-radius:12px;box-shadow:0px 1px 10px 0px rgba(0, 0, 0, 0.1);}.rcb-app-icon-picture-container.svelte-el1u77 {height:32px;}.rcb-app-icon.loading.svelte-el1u77 {background-color:gray;}"
  };
  function Wg(e, r) {
    R2(e, Hg);
    var t = ee(), a2 = W(t);
    {
      var n = (i) => {
        var s2 = Ug(), l2 = P2(s2);
        {
          var c2 = (u) => {
            var _ = Rg();
            A(() => j2(_, "srcset", r.srcWebp)), b2(u, _);
          };
          N(l2, (u) => {
            r.srcWebp && u(c2);
          });
        }
        var p2 = C(l2, 2);
        A(() => j2(p2, "src", r.src)), b2(i, s2);
      }, o = (i) => {
        var s2 = Vg();
        b2(i, s2);
      };
      N(a2, (i) => {
        r.src ? i(n) : i(o, false);
      });
    }
    b2(e, t);
  }
  var Yg = /* @__PURE__ */ I2('<button class="rcb-back-button svelte-9xjbko" data-testid="close-button"><!></button>');
  var Gg = {
    hash: "svelte-9xjbko",
    code: ".rcb-back-button.svelte-9xjbko {padding:8px;border:none;cursor:pointer;background-color:transparent;border-radius:50%;color:var(--rc-color-grey-text-dark);display:inline-flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;}"
  };
  function Xg(e, r) {
    R2(e, Gg);
    var t = Yg(), a2 = P2(t);
    qt(a2, { name: "back" }), nt("click", t, function(n) {
      gi.call(this, r, n);
    }), b2(e, t);
  }
  var Zg = /* @__PURE__ */ I2('<source type="image/webp" class="rcb-app-icon svelte-19gv4gf">');
  var Kg = /* @__PURE__ */ I2('<picture class="rcb-app-icon svelte-19gv4gf"><!> <img class="rcb-app-icon svelte-19gv4gf" alt="App icon"></picture>');
  var Jg = {
    hash: "svelte-19gv4gf",
    code: ".rcb-app-icon.svelte-19gv4gf {height:32px;}"
  };
  function Qg(e, r) {
    R2(e, Jg);
    var t = Kg(), a2 = P2(t);
    {
      var n = (i) => {
        var s2 = Zg();
        A(() => j2(s2, "srcset", r.srcWebp)), b2(i, s2);
      };
      N(a2, (i) => {
        r.srcWebp && i(n);
      });
    }
    var o = C(a2, 2);
    A(() => j2(o, "src", r.src)), b2(e, t);
  }
  var $g = /* @__PURE__ */ I2('<div class="rcb-back-wrapper svelte-11zapuq"><!></div>');
  var em = /* @__PURE__ */ I2('<div class="rcb-close-wrapper svelte-11zapuq"><!></div>');
  var rm = /* @__PURE__ */ I2('<div class="rcb-header-wrapper svelte-11zapuq"><!> <div class="rcb-header svelte-11zapuq"><div class="rcb-title svelte-11zapuq"><!> <!></div></div> <!></div>');
  var tm = {
    hash: "svelte-11zapuq",
    code: `.rcb-header-wrapper.svelte-11zapuq {display:flex;position:relative;justify-content:space-between;align-items:center;}.rcb-header.svelte-11zapuq {display:flex;flex-direction:row;align-items:center;padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);height:40px;justify-content:space-between;}.rcb-title.svelte-11zapuq {display:flex;align-items:center;position:relative;gap:var(--rc-spacing-gapMedium-mobile);}.rcb-close-wrapper.svelte-11zapuq,
  .rcb-back-wrapper.svelte-11zapuq {padding:var(--rc-spacing-gapSmall-mobile);}

  @container layout-query-container (width < 768px) {.rcb-header.svelte-11zapuq {padding-top:var(--rc-spacing-gapMedium-mobile);}.rcb-close-wrapper.svelte-11zapuq {padding-top:var(--rc-spacing-gapMedium-mobile);}.rcb-header-wrapper.svelte-11zapuq {padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}.rcb-header-wrapper.rcb-with-close-button.svelte-11zapuq {padding-right:var(--rc-spacing-gapSmall-mobile);}.rcb-back-wrapper.svelte-11zapuq {display:none;}.rcb-header-wrapper.svelte-11zapuq {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-close-wrapper.svelte-11zapuq {display:none;}.rcb-back-wrapper.svelte-11zapuq {position:absolute;left:-48px;margin-left:0;}
  }`
  };
  function am(e, r) {
    V(r, true), R2(e, tm);
    const t = (k) => k == null || k == null || k == "" ? null : k, a2 = /* @__PURE__ */ E2(() => {
      var k;
      return t((k = r.brandingInfo) == null ? void 0 : k.app_icon);
    }), n = /* @__PURE__ */ E2(() => {
      var k;
      return t((k = r.brandingInfo) == null ? void 0 : k.app_icon_webp);
    }), o = /* @__PURE__ */ E2(() => {
      var k;
      return t((k = r.brandingInfo) == null ? void 0 : k.app_wordmark);
    }), i = /* @__PURE__ */ E2(() => {
      var k;
      return t((k = r.brandingInfo) == null ? void 0 : k.app_wordmark_webp);
    }), s2 = /* @__PURE__ */ E2(() => d(a2) ? bt(d(a2)) : null), l2 = /* @__PURE__ */ E2(() => d(n) ? bt(d(n)) : null), c2 = /* @__PURE__ */ E2(() => d(o) ? bt(d(o)) : null), p2 = /* @__PURE__ */ E2(() => d(i) ? bt(d(i)) : null), u = () => {
      r.onClose && r.onClose();
    };
    var _ = rm(), g2 = P2(_);
    {
      var m2 = (k) => {
        var w2 = $g(), z = P2(w2);
        Xg(z, { $$events: { click: u } }), b2(k, w2);
      };
      N(g2, (k) => {
        r.showCloseButton && k(m2);
      });
    }
    var f2 = C(g2, 2), h2 = P2(f2), v = P2(h2);
    {
      var y2 = (k) => {
        Qg(k, {
          get src() {
            return d(c2);
          },
          get srcWebp() {
            return d(p2);
          }
        });
      }, x2 = (k) => {
        var w2 = ee(), z = W(w2);
        {
          var Y = (G) => {
            Wg(G, {
              get src() {
                return d(s2);
              },
              get srcWebp() {
                return d(l2);
              }
            });
          };
          N(
            z,
            (G) => {
              d(s2) !== null && d(l2) !== null && G(Y);
            },
            true
          );
        }
        b2(k, w2);
      };
      N(v, (k) => {
        d(c2) !== null ? k(y2) : k(x2, false);
      });
    }
    var T2 = C(v, 2);
    {
      var S2 = (k) => {
        se(k, {
          size: "body-base",
          children: (w2, z) => {
            var Y = ie();
            A(() => {
              var G;
              return te(Y, (G = r.brandingInfo) == null ? void 0 : G.app_name);
            }), b2(w2, Y);
          },
          $$slots: { default: true }
        });
      };
      N(T2, (k) => {
        d(c2) === null && k(S2);
      });
    }
    var q = C(f2, 2);
    {
      var B = (k) => {
        var w2 = em(), z = P2(w2);
        Hi(z, { $$events: { click: u } }), b2(k, w2);
      };
      N(q, (k) => {
        r.showCloseButton && k(B);
      });
    }
    A(() => fr(_, "rcb-with-close-button", r.showCloseButton)), b2(e, _), H();
  }
  var nm = /* @__PURE__ */ I2("<!> <!> <!> <!>", 1);
  function om(e, r) {
    V(r, true);
    const t = U(r, "onClose", 3, void 0);
    let a2 = X(L2(r.defaultPriceBreakdown ?? {
      currency: r.productDetails.currentPrice.currency,
      totalAmountInMicros: r.productDetails.currentPrice.amountMicros,
      totalExcludingTaxInMicros: r.productDetails.currentPrice.amountMicros,
      taxCalculationStatus: "unavailable",
      taxAmountInMicros: null,
      taxBreakdown: null
    }));
    const n = (o) => {
      D(a2, L2(o));
    };
    Bg(e, {
      get brandingInfo() {
        return r.brandingInfo;
      },
      get isInElement() {
        return r.isInElement;
      },
      get isSandbox() {
        return r.isSandbox;
      },
      get onClose() {
        return t();
      },
      navbarHeaderContent: (l2) => {
        var c2 = /* @__PURE__ */ E2(() => !r.isInElement && !!t());
        am(l2, {
          get brandingInfo() {
            return r.brandingInfo;
          },
          get onClose() {
            return t();
          },
          get showCloseButton() {
            return d(c2);
          }
        });
      },
      navbarBodyContent: (l2) => {
        var c2 = /* @__PURE__ */ E2(() => {
          var p2, u;
          return ((u = (p2 = r.brandingInfo) == null ? void 0 : p2.appearance) == null ? void 0 : u.show_product_description) ?? false;
        });
        ug(l2, {
          get productDetails() {
            return r.productDetails;
          },
          get purchaseOption() {
            return r.purchaseOptionToUse;
          },
          get showProductDescription() {
            return d(c2);
          },
          get priceBreakdown() {
            return d(a2);
          }
        });
      },
      mainContent: (l2) => {
        var c2 = nm(), p2 = W(c2);
        {
          var u = (y2) => {
            L_(y2);
          };
          N(p2, (y2) => {
            r.currentPage === "payment-entry-loading" && y2(u);
          });
        }
        var _ = C(p2, 2);
        {
          var g2 = (y2) => {
            a_(y2, {
              get productDetails() {
                return r.productDetails;
              },
              get purchaseOption() {
                return r.purchaseOptionToUse;
              },
              get brandingInfo() {
                return r.brandingInfo;
              },
              get purchaseOperationHelper() {
                return r.purchaseOperationHelper;
              },
              get gatewayParams() {
                return r.gatewayParams;
              },
              get managementUrl() {
                return r.managementUrl;
              },
              get customerEmail() {
                return r.customerEmail;
              },
              get defaultPriceBreakdown() {
                return r.defaultPriceBreakdown;
              },
              get onContinue() {
                return r.onContinue;
              },
              get onError() {
                return r.onError;
              },
              onPriceBreakdownUpdated: n
            });
          };
          N(_, (y2) => {
            r.currentPage === "payment-entry" && y2(g2);
          });
        }
        var m2 = C(_, 2);
        {
          var f2 = (y2) => {
            var x2 = /* @__PURE__ */ E2(() => {
              var S2;
              return ((S2 = r.brandingInfo) == null ? void 0 : S2.support_email) ?? null;
            }), T2 = /* @__PURE__ */ E2(() => {
              var S2;
              return ((S2 = r.brandingInfo) == null ? void 0 : S2.app_name) ?? null;
            });
            C_(y2, {
              get lastError() {
                return r.lastError;
              },
              get productDetails() {
                return r.productDetails;
              },
              get supportEmail() {
                return d(x2);
              },
              get onDismiss() {
                return r.closeWithError;
              },
              get appName() {
                return d(T2);
              }
            });
          };
          N(m2, (y2) => {
            r.currentPage === "error" && y2(f2);
          });
        }
        var h2 = C(m2, 2);
        {
          var v = (y2) => {
            O_(y2, {
              get onContinue() {
                return r.onContinue;
              }
            });
          };
          N(h2, (y2) => {
            r.currentPage === "success" && y2(v);
          });
        }
        b2(l2, c2);
      },
      $$slots: {
        navbarHeaderContent: true,
        navbarBodyContent: true,
        mainContent: true
      }
    }), H();
  }
  function im(e) {
    return e.trim() === "" ? "You need to provide your email address to continue." : e.match(/^[^@]+@[^@]+\.[^@]+$/) ? null : "Email is not valid. Please provide a valid email address.";
  }
  function sm(e) {
    if (e && !e.match(/^[A-Z]{3}$/)) {
      const r = `Currency code ${e} is not valid. Please provide a valid ISO 4217 currency code.`;
      throw K.errorLog(r), new ye(Se.ConfigurationError, r);
    }
  }
  function lm(e, r) {
    var B;
    V(r, true);
    const t = U(r, "customTranslations", 19, () => ({})), a2 = r.customerEmail ? im(r.customerEmail) : null;
    let n = X(L2(a2 ? void 0 : r.customerEmail)), o = r.rcPackage.webBillingProduct, i = X(null);
    const s2 = r.rcPackage.webBillingProduct.identifier ?? null;
    let l2 = X("payment-entry-loading"), c2 = X(null), p2 = X(null), u = X(L2({})), _ = X(null), g2 = X(null), m2 = X(null), f2 = X(null), h2 = new va(t(), r.selectedLocale, r.defaultLocale);
    var v = hi(h2);
    Ia(Ne, v), Ia(Pn, (B = r.brandingInfo) == null ? void 0 : B.appearance), We(() => {
      r.isInElement || (D(g2, L2(document.documentElement.style.height)), D(m2, L2(document.documentElement.style.overflow)), D(f2, L2(document.body.style.height)), document.documentElement.style.height = "100%", document.body.style.height = "100%", document.documentElement.style.overflow = "hidden");
    }), Nt(() => {
      if (!r.isInElement) {
        const k = (w2, z, Y) => {
          Y === "" ? w2.style.removeProperty(z) : w2.style.setProperty(z, Y);
        };
        k(document.documentElement, "height", d(g2)), k(document.body, "height", d(f2)), k(document.documentElement, "overflow", d(m2));
      }
    }), Ia(xn, r.eventsTracker), We(async () => {
      if (s2 === null) {
        x2(new de(oe.ErrorSettingUpPurchase, "Product ID was not set before purchase."));
        return;
      }
      r.purchaseOperationHelper.checkoutStart(r.appUserId, s2, r.purchaseOption, r.rcPackage.webBillingProduct.presentedOfferingContext, d(n), r.metadata).then((k) => {
        D(i, null), D(l2, "payment-entry"), D(u, L2(k.gateway_params)), D(_, L2(k.management_url));
      }).catch((k) => {
        if (k.errorCode === oe.MissingEmailError)
          return D(n, void 0), r.purchaseOperationHelper.checkoutStart(r.appUserId, s2, r.purchaseOption, r.rcPackage.webBillingProduct.presentedOfferingContext, d(n), r.metadata).then((w2) => {
            D(i, null), D(l2, "payment-entry"), D(u, L2(w2.gateway_params)), D(_, L2(w2.management_url));
          }).catch((w2) => {
            x2(w2);
          });
        x2(k);
      });
    });
    const y2 = () => {
      if (d(l2) === "payment-entry") {
        r.purchaseOperationHelper.pollCurrentPurchaseForCompletion().then((k) => {
          D(l2, "success"), D(c2, L2(k.redemptionInfo)), D(p2, L2(k.operationSessionId));
        }).catch((k) => {
          x2(k);
        });
        return;
      }
      if (d(l2) === "success" || d(l2) === "error") {
        r.onFinished(d(p2), d(c2));
        return;
      }
      D(l2, "success");
    }, x2 = (k) => {
      const w2 = tp({
        errorCode: k.getErrorCode().toString(),
        errorMessage: k.message
      });
      r.eventsTracker.trackSDKEvent(w2), D(i, L2(k)), D(l2, "error");
    }, T2 = () => {
      r.onError(d(i) ?? new de(oe.UnknownError, "Unknown error without state set."));
    };
    var S2 = /* @__PURE__ */ E2(() => r.purchases.isSandbox()), q = /* @__PURE__ */ E2(() => d(n) ?? null);
    om(e, {
      get isSandbox() {
        return d(S2);
      },
      get currentPage() {
        return d(l2);
      },
      get brandingInfo() {
        return r.brandingInfo;
      },
      productDetails: o,
      get purchaseOptionToUse() {
        return r.purchaseOption;
      },
      get lastError() {
        return d(i);
      },
      get gatewayParams() {
        return d(u);
      },
      get managementUrl() {
        return d(_);
      },
      get purchaseOperationHelper() {
        return r.purchaseOperationHelper;
      },
      get isInElement() {
        return r.isInElement;
      },
      get customerEmail() {
        return d(q);
      },
      closeWithError: T2,
      onContinue: y2,
      onError: x2,
      get onClose() {
        return r.onClose;
      }
    }), H();
  }
  function Wi(e) {
    return e == null ? true : new Date(e) > /* @__PURE__ */ new Date();
  }
  function cm(e, r, t, a2) {
    const n = r.product_identifier;
    if (n in t)
      return dm(
        e,
        r,
        t[n]
      );
    if (n in a2)
      return um(
        e,
        r,
        a2[n]
      );
    throw new ye(
      Se.CustomerInfoError,
      "Could not find entitlement product in subscriptions or non-subscriptions."
    );
  }
  function dm(e, r, t) {
    return {
      identifier: e,
      isActive: Wi(r.expires_date),
      willRenew: Yi(
        r.expires_date,
        t
      ),
      store: (t == null ? void 0 : t.store) ?? "unknown",
      latestPurchaseDate: new Date(r.purchase_date),
      originalPurchaseDate: new Date(r.purchase_date),
      expirationDate: lr(r.expires_date),
      productIdentifier: r.product_identifier,
      productPlanIdentifier: r.product_plan_identifier ?? null,
      unsubscribeDetectedAt: lr(
        t == null ? void 0 : t.unsubscribe_detected_at
      ),
      billingIssueDetectedAt: lr(
        t == null ? void 0 : t.billing_issues_detected_at
      ),
      isSandbox: (t == null ? void 0 : t.is_sandbox) ?? false,
      periodType: (t == null ? void 0 : t.period_type) ?? "normal",
      ownershipType: (t == null ? void 0 : t.ownership_type) ?? "UNKNOWN"
    };
  }
  function um(e, r, t) {
    return {
      identifier: e,
      isActive: true,
      willRenew: false,
      store: t.store,
      latestPurchaseDate: new Date(r.purchase_date),
      originalPurchaseDate: new Date(
        t.original_purchase_date
      ),
      expirationDate: null,
      productIdentifier: r.product_identifier,
      productPlanIdentifier: null,
      unsubscribeDetectedAt: null,
      billingIssueDetectedAt: null,
      isSandbox: t.is_sandbox,
      periodType: "normal",
      ownershipType: "UNKNOWN"
    };
  }
  function pm(e, r, t) {
    const a2 = {}, n = {};
    for (const o in e) {
      const i = cm(
        o,
        e[o],
        r,
        t
      );
      a2[o] = i, i.isActive && (n[o] = i);
    }
    return {
      all: a2,
      active: n
    };
  }
  function lr(e) {
    return e == null ? null : new Date(e);
  }
  function _m(e) {
    const r = mm(e), t = e.subscriber, a2 = ym(
      t.non_subscriptions
    ), n = Object.entries(e.subscriber.non_subscriptions).flatMap(
      ([s2, l2]) => l2.map((c2) => ({
        transactionIdentifier: c2.id,
        productIdentifier: s2,
        purchaseDate: new Date(
          c2.purchase_date || c2.original_purchase_date
        ),
        storeTransactionId: c2.store_transaction_id || null,
        store: c2.store
      }))
    ), o = new Date(e.request_date), i = Object.fromEntries(
      Object.entries(e.subscriber.subscriptions).map(
        ([s2, l2]) => [
          s2,
          {
            productIdentifier: s2,
            purchaseDate: new Date(l2.purchase_date),
            originalPurchaseDate: lr(
              l2.original_purchase_date
            ),
            expiresDate: lr(l2.expires_date),
            store: l2.store,
            unsubscribeDetectedAt: lr(
              l2.unsubscribe_detected_at
            ),
            isSandbox: l2.is_sandbox,
            billingIssuesDetectedAt: lr(
              l2.billing_issues_detected_at
            ),
            gracePeriodExpiresDate: lr(
              l2.grace_period_expires_date
            ),
            ownershipType: l2.ownership_type ?? "UNKNOWN",
            periodType: l2.period_type,
            refundedAt: lr(l2.refunded_at),
            storeTransactionId: l2.store_transaction_id || null,
            isActive: Wi(l2.expires_date),
            willRenew: Yi(l2.expires_date, l2)
          }
        ]
      )
    );
    return {
      entitlements: pm(
        t.entitlements,
        t.subscriptions,
        a2
      ),
      allExpirationDatesByProduct: r,
      allPurchaseDatesByProduct: gm(
        e,
        a2
      ),
      activeSubscriptions: fm(r),
      managementURL: t.management_url,
      requestDate: o,
      firstSeenDate: new Date(t.first_seen),
      originalPurchaseDate: lr(
        t.original_purchase_date
      ),
      originalAppUserId: e.subscriber.original_app_user_id,
      nonSubscriptionTransactions: n,
      subscriptionsByProductIdentifier: i
    };
  }
  function Yi(e, r) {
    if (r == null) return false;
    const t = r.store == "promotional", a2 = e == null, n = r.unsubscribe_detected_at != null, o = r.billing_issues_detected_at != null;
    return !(t || a2 || n || o);
  }
  function gm(e, r) {
    const t = {};
    for (const a2 in e.subscriber.subscriptions) {
      const n = e.subscriber.subscriptions[a2];
      t[a2] = new Date(
        n.purchase_date
      );
    }
    for (const a2 in r) {
      const n = r[a2].purchase_date;
      n == null ? t[a2] = null : t[a2] = new Date(n);
    }
    return t;
  }
  function mm(e) {
    const r = {};
    for (const t in e.subscriber.subscriptions) {
      const a2 = e.subscriber.subscriptions[t];
      a2.expires_date == null ? r[t] = null : r[t] = new Date(
        a2.expires_date
      );
    }
    return r;
  }
  function fm(e) {
    const r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Date();
    for (const a2 in e) {
      const n = e[a2];
      (n == null || n > t) && r.add(a2);
    }
    return r;
  }
  function ym(e) {
    const r = {};
    for (const t in e) {
      if (e[t].length === 0) continue;
      const a2 = e[t].length;
      r[t] = e[t][a2 - 1];
    }
    return r;
  }
  var Gi = "1.5.3";
  var bm = "https://api.revenuecat.com";
  var hm = "https://e.revenue.cat";
  var da;
  (function(e) {
    e[e.CONTINUE = 100] = "CONTINUE", e[e.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e[e.PROCESSING = 102] = "PROCESSING", e[e.EARLY_HINTS = 103] = "EARLY_HINTS", e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.RESET_CONTENT = 205] = "RESET_CONTENT", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.MULTI_STATUS = 207] = "MULTI_STATUS", e[e.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", e[e.SEE_OTHER = 303] = "SEE_OTHER", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.USE_PROXY = 305] = "USE_PROXY", e[e.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e[e.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", e[e.METHOD_FAILURE = 420] = "METHOD_FAILURE", e[e.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", e[e.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e[e.LOCKED = 423] = "LOCKED", e[e.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e[e.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", e[e.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e[e.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  })(da || (da = {}));
  function ua(e) {
    return e ? e.startsWith("rcb_sb_") : false;
  }
  async function gr(e, r, t) {
    const { apiKey: a2, body: n, headers: o, httpConfig: i } = r, l2 = `${(i == null ? void 0 : i.proxyURL) ?? bm}${e.urlPath()}`;
    try {
      const c2 = await fetch(l2, {
        method: e.method,
        headers: ts(a2, o, i == null ? void 0 : i.additionalHeaders),
        body: km(n),
        signal: t
      });
      return await vm(c2, e), await c2.json();
    } catch (c2) {
      throw c2 instanceof TypeError ? new ye(
        Se.NetworkError,
        kt.getPublicMessage(Se.NetworkError),
        c2.message
      ) : c2;
    }
  }
  async function vm(e, r) {
    const t = e.status;
    if (t >= da.INTERNAL_SERVER_ERROR)
      Da(r, t, await e.text());
    else if (t >= da.BAD_REQUEST) {
      const a2 = await e.json(), n = a2 ? JSON.stringify(a2) : null, o = a2 == null ? void 0 : a2.code, i = a2 == null ? void 0 : a2.message;
      if (o != null) {
        const s2 = kt.convertCodeToBackendErrorCode(o);
        if (s2 == null)
          Da(
            r,
            t,
            n,
            o
          );
        else
          throw ye.getForBackendError(
            s2,
            i
          );
      } else
        Da(r, t, n);
    }
  }
  function Da(e, r, t, a2) {
    throw new ye(
      Se.UnknownBackendError,
      "Unknown backend error.",
      `Request: ${e.name}. Status code: ${r}. Body: ${t}.`,
      { backendErrorCode: a2 }
    );
  }
  function km(e) {
    return e == null ? null : JSON.stringify(e);
  }
  var Xi = "Authorization";
  var Zi = "Content-Type";
  var Ki = "Accept";
  var Ji = "X-Platform";
  var Qi = "X-Version";
  var $i = "X-Platform-Flavor";
  var es = "X-Platform-Flavor-Version";
  var rs = "X-Is-Sandbox";
  var wm = /* @__PURE__ */ new Set([
    Xi,
    Zi,
    Ki,
    Ji,
    Qi,
    rs,
    $i,
    es
  ]);
  function ts(e, r, t) {
    let a2 = {
      [Xi]: `Bearer ${e}`,
      [Zi]: "application/json",
      [Ki]: "application/json",
      [Ji]: "web",
      [Qi]: Gi,
      [rs]: `${ua(e)}`
    };
    const n = an.getPlatformInfo();
    if (n) {
      const o = {
        [$i]: n.flavor,
        [es]: n.version
      };
      a2 = { ...a2, ...o };
    }
    return r && (a2 = { ...a2, ...r }), t && (a2 = { ...t, ...a2 }), a2;
  }
  var Fn = "/v1/subscribers";
  var ut = "/rcbilling/v1";
  var xm = class {
    constructor(r) {
      M(this, "appUserId");
      M(this, "method", "GET");
      M(this, "name", "getOfferings");
      this.appUserId = r;
    }
    urlPath() {
      const r = encodeURIComponent(this.appUserId);
      return `${Fn}/${r}/offerings`;
    }
  };
  var Pm = class {
    constructor(r, t, a2) {
      M(this, "method", "GET");
      M(this, "name", "getProducts");
      M(this, "appUserId");
      M(this, "productIds");
      M(this, "currency");
      this.appUserId = r, this.productIds = t, this.currency = a2;
    }
    urlPath() {
      const r = encodeURIComponent(this.appUserId), t = this.productIds.map(encodeURIComponent).join("&id="), a2 = this.currency ? `&currency=${this.currency}` : "";
      return `${ut}/subscribers/${r}/products?id=${t}${a2}`;
    }
  };
  var Sm = class {
    constructor(r) {
      M(this, "method", "GET");
      M(this, "name", "getCustomerInfo");
      M(this, "appUserId");
      this.appUserId = r;
    }
    urlPath() {
      const r = encodeURIComponent(this.appUserId);
      return `${Fn}/${r}`;
    }
  };
  var Em = class {
    constructor() {
      M(this, "method", "GET");
      M(this, "name", "getBrandingInfo");
    }
    urlPath() {
      return `${ut}/branding`;
    }
  };
  var Tm = class {
    constructor() {
      M(this, "method", "POST");
      M(this, "name", "postCheckoutStart");
    }
    urlPath() {
      return `${ut}/checkout/start`;
    }
  };
  var Im = class {
    constructor(r) {
      M(this, "method", "POST");
      M(this, "name", "postCheckoutCalculateTax");
      M(this, "operationSessionId");
      this.operationSessionId = r;
    }
    urlPath() {
      return `${ut}/checkout/${this.operationSessionId}/calculate_taxes`;
    }
  };
  var qm = class {
    constructor(r) {
      M(this, "method", "POST");
      M(this, "name", "postCheckoutComplete");
      M(this, "operationSessionId");
      this.operationSessionId = r;
    }
    urlPath() {
      return `${ut}/checkout/${this.operationSessionId}/complete`;
    }
  };
  var Fm = class {
    constructor(r) {
      M(this, "method", "GET");
      M(this, "name", "getCheckoutStatus");
      M(this, "operationSessionId");
      this.operationSessionId = r;
    }
    urlPath() {
      return `${ut}/checkout/${this.operationSessionId}`;
    }
  };
  var zm = class {
    constructor(r) {
      M(this, "method", "POST");
      M(this, "name", "setAttributes");
      M(this, "appUserId");
      this.appUserId = r;
    }
    urlPath() {
      const r = encodeURIComponent(this.appUserId);
      return `${Fn}/${r}/attributes`;
    }
  };
  var tn = {};
  var Dm = class {
    constructor(r, t = tn) {
      M(this, "API_KEY");
      M(this, "httpConfig");
      M(this, "isSandbox");
      this.API_KEY = r, this.httpConfig = t, this.isSandbox = ua(r);
    }
    getIsSandbox() {
      return this.isSandbox;
    }
    async getOfferings(r) {
      return await gr(
        new xm(r),
        {
          apiKey: this.API_KEY,
          httpConfig: this.httpConfig
        }
      );
    }
    async getCustomerInfo(r) {
      return await gr(
        new Sm(r),
        {
          apiKey: this.API_KEY,
          httpConfig: this.httpConfig
        }
      );
    }
    async getProducts(r, t, a2) {
      return await gr(
        new Pm(r, t, a2),
        {
          apiKey: this.API_KEY,
          httpConfig: this.httpConfig
        }
      );
    }
    async getBrandingInfo() {
      return await gr(
        new Em(),
        {
          apiKey: this.API_KEY,
          httpConfig: this.httpConfig
        }
      );
    }
    async postCheckoutStart(r, t, a2, n, o, i, s2 = void 0) {
      const l2 = {
        app_user_id: r,
        product_id: t,
        email: i,
        price_id: n.priceId,
        presented_offering_identifier: a2.offeringIdentifier,
        trace_id: o
      };
      return s2 && (l2.metadata = s2), n.id !== "base_option" && (l2.offer_id = n.id), a2.targetingContext && (l2.applied_targeting_rule = {
        rule_id: a2.targetingContext.ruleId,
        revision: a2.targetingContext.revision
      }), a2.placementIdentifier && (l2.presented_placement_identifier = a2.placementIdentifier), await gr(new Tm(), {
        apiKey: this.API_KEY,
        body: l2,
        httpConfig: this.httpConfig
      });
    }
    async postCheckoutCalculateTax(r, t, a2, n) {
      const o = {
        country_code: t,
        postal_code: a2
      };
      return await gr(
        new Im(r),
        {
          apiKey: this.API_KEY,
          body: o,
          httpConfig: this.httpConfig
        },
        n
      );
    }
    async postCheckoutComplete(r, t) {
      const a2 = {
        email: t
      };
      return await gr(new qm(r), {
        apiKey: this.API_KEY,
        body: a2,
        httpConfig: this.httpConfig
      });
    }
    async getCheckoutStatus(r) {
      return await gr(
        new Fm(r),
        {
          apiKey: this.API_KEY,
          httpConfig: this.httpConfig
        }
      );
    }
    async setAttributes(r, t) {
      const a2 = Date.now(), n = {};
      for (const [i, s2] of Object.entries(t))
        n[i] = {
          value: s2,
          updated_at_ms: a2
        };
      const o = {
        attributes: n
      };
      return await gr(
        new zm(r),
        {
          apiKey: this.API_KEY,
          body: o,
          httpConfig: this.httpConfig
        }
      );
    }
  };
  function Am(e) {
    const r = /^rcb_[a-zA-Z0-9_.-]+$/, t = /^pdl_[a-zA-Z0-9_.-]+$/;
    if (!r.test(e) && !t.test(e))
      throw new ye(
        Se.InvalidCredentialsError,
        "Invalid API key. Use your Web Billing or Paddle API key."
      );
  }
  function So(e) {
    if (!e || (/* @__PURE__ */ new Set([
      "no_user",
      "null",
      "none",
      "nil",
      "(null)",
      "NaN",
      "\\x00",
      "",
      "unidentified",
      "undefined",
      "unknown"
    ])).has(e) || e.includes("/"))
      throw new ye(
        Se.InvalidAppUserIdError,
        'Provided user id: "' + (e ?? "[Not provided]") + '" is not valid. See https://www.revenuecat.com/docs/customers/user-ids#tips-for-setting-app-user-ids for more information.'
      );
  }
  function Mm(e) {
    if (e != null && e.endsWith("/"))
      throw new ye(
        Se.ConfigurationError,
        "Invalid proxy URL. The proxy URL should not end with a trailing slash."
      );
  }
  function jm(e) {
    if (e) {
      for (const r in e)
        if (wm.has(r))
          throw new ye(
            Se.ConfigurationError,
            "Invalid additional headers. Some headers are reserved for internal use."
          );
    }
  }
  var as = /* @__PURE__ */ ((e) => (e.Current = "current", e))(as || {});
  function Nm(e, r) {
    async function t(...a2) {
      return await this.preload(), await e.call(this, ...a2);
    }
    return t;
  }
  var ns = (e, r) => {
    const t = {
      ...e.webBillingProduct,
      presentedOfferingContext: {
        ...e.webBillingProduct.presentedOfferingContext,
        placementIdentifier: r
      }
    };
    return {
      ...e,
      webBillingProduct: t,
      rcBillingProduct: t
    };
  };
  var Cr = (e, r) => e == null ? null : ns(e, r);
  var Cm = (e, r, t) => {
    const a2 = e.offering_ids_by_placement ?? null;
    if (a2 == null)
      return null;
    const n = e.fallback_offering_id ?? null;
    let o;
    if (t in a2) {
      const s2 = a2[t] ?? null;
      if (s2 == null)
        return null;
      o = r[s2], o == null && (o = r[n]);
    } else
      o = r[n];
    if (o == null)
      return null;
    const i = Object.fromEntries(
      Object.entries(o.packagesById).map(([s2, l2]) => [
        s2,
        ns(l2, t)
      ])
    );
    return {
      ...o,
      packagesById: i,
      availablePackages: Object.values(i),
      weekly: Cr(o.weekly, t),
      monthly: Cr(
        o.monthly,
        t
      ),
      twoMonth: Cr(
        o.twoMonth,
        t
      ),
      threeMonth: Cr(
        o.threeMonth,
        t
      ),
      sixMonth: Cr(
        o.sixMonth,
        t
      ),
      annual: Cr(o.annual, t),
      lifetime: Cr(
        o.lifetime,
        t
      )
    };
  };
  function Om(e, r) {
    const t = {};
    r.product_details.forEach((o) => {
      t[o.identifier] = o;
    });
    const a2 = {};
    e.offerings.forEach((o) => {
      const i = o.identifier === e.current_offering_id, s2 = __(
        i,
        o,
        t,
        e.targeting
      );
      s2 != null && (a2[o.identifier] = s2);
    });
    const n = e.current_offering_id ? a2[e.current_offering_id] ?? null : null;
    return Object.keys(a2).length == 0 && K.debugLog(
      "Empty offerings. Please make sure you've configured offerings correctly in the RevenueCat dashboard and that the products are properly configured."
    ), {
      all: a2,
      current: n
    };
  }
  var Lm = 1000001;
  function Bm(e) {
    return e.webBillingProduct.defaultPurchaseOption;
  }
  function Eo(e, r, t, a2 = false) {
    return t.translate(O.PaywallVariablesPricePerPeriod, {
      formattedPrice: e,
      period: r.base.period ? t.translatePeriod(
        r.base.period.number,
        r.base.period.unit,
        {
          noWhitespace: true,
          short: !a2
        }
      ) : ""
    });
  }
  function Rm(e, r) {
    return e.unit === "year" ? r.translatePeriod(e.number * 12, we.Month) : r.translatePeriod(e.number, e.unit);
  }
  function Um({
    price: e,
    period: r,
    translator: t
  }) {
    const a2 = t.formatPrice(e.amountMicros, e.currency);
    return r ? r.unit === "year" ? t.formatPrice(e.amountMicros / 12 / 4, e.currency) : r.unit === "month" || r.unit === "week" && r.number > 1 ? t.formatPrice(
      e.amountMicros / r.number,
      e.currency
    ) : r.unit === "day" ? t.formatPrice(
      e.amountMicros * 7 / r.number,
      e.currency
    ) : a2 : a2;
  }
  function Vm({
    price: e,
    period: r,
    translator: t
  }) {
    const a2 = t.formatPrice(e.amountMicros, e.currency);
    return !r || !r.number ? a2 : r.unit === "year" ? t.formatPrice(e.amountMicros / 12, e.currency) : r.unit === "month" && r.number > 1 ? t.formatPrice(
      e.amountMicros / r.number,
      e.currency
    ) : r.unit === "week" ? t.formatPrice(
      e.amountMicros * 4 / r.number,
      e.currency
    ) : r.unit === "day" ? t.formatPrice(
      e.amountMicros * 30 / r.number,
      e.currency
    ) : a2;
  }
  function To({
    price: e,
    period: r,
    full: t = false,
    translator: a2
  }) {
    if (!r || !r.number || r.unit === we.Month && r.number == 1)
      return a2.formatPrice(e.amountMicros, e.currency);
    let n = "";
    switch (r.unit) {
      case we.Year:
        n = a2.formatPrice(
          e.amountMicros / 12,
          e.currency
        );
        break;
      case we.Month:
        n = a2.formatPrice(
          e.amountMicros / r.number,
          e.currency
        );
        break;
      case we.Week:
        n = a2.formatPrice(
          e.amountMicros * 4 / r.number,
          e.currency
        );
        break;
      case we.Day:
        n = a2.formatPrice(
          e.amountMicros * 30 / r.number,
          e.currency
        );
        break;
    }
    return a2.translate(
      O.PaywallVariablesTotalPriceAndPerMonth,
      {
        formattedPrice: a2.formatPrice(
          e.amountMicros,
          e.currency
        ),
        period: a2.translatePeriod(r.number, r.unit, {
          noWhitespace: true,
          short: !t
        }),
        formattedPricePerMonth: n,
        monthPeriod: a2.translatePeriodUnit(we.Month, {
          noWhitespace: true,
          short: !t
        })
      }
    );
  }
  function Hm(e, r) {
    const t = e.availablePackages, a2 = t.reduce((n, o) => n.webBillingProduct.currentPrice.amountMicros > o.webBillingProduct.currentPrice.amountMicros ? n : o);
    return t.reduce(
      (n, o) => (n[o.identifier] = Wm(
        o,
        a2,
        r
      ), n),
      {}
    );
  }
  function Wm(e, r, t) {
    const a2 = e.webBillingProduct, n = t.formatPrice(
      a2.currentPrice.amountMicros,
      a2.currentPrice.currency
    ), o = Bm(e), i = a2.productType, s2 = {
      product_name: a2.title,
      price: n,
      price_per_period: "",
      price_per_period_full: "",
      total_price_and_per_month: "",
      total_price_and_per_month_full: "",
      sub_price_per_month: "",
      sub_price_per_week: "",
      sub_duration: "",
      sub_duration_in_months: "",
      sub_period: "",
      sub_period_length: "",
      sub_period_abbreviated: "",
      sub_offer_duration: void 0,
      sub_offer_duration_2: void 0,
      // doesn't apply - only google play
      sub_offer_price: void 0,
      sub_offer_price_2: void 0,
      // doesn't apply - only google play
      sub_relative_discount: ""
    };
    if (i === Lr.Subscription && o) {
      s2.price_per_period = Eo(
        n,
        o,
        t
      ), s2.price_per_period_full = Eo(
        n,
        o,
        t,
        true
      );
      const l2 = o.base.period;
      s2.total_price_and_per_month = To({
        price: a2.currentPrice,
        period: l2,
        translator: t
      }), s2.total_price_and_per_month_full = To({
        price: a2.currentPrice,
        period: l2,
        full: true,
        translator: t
      }), s2.sub_price_per_month = Vm({
        price: a2.currentPrice,
        period: l2,
        translator: t
      }), s2.sub_price_per_week = Um({
        price: a2.currentPrice,
        period: l2,
        translator: t
      }), s2.sub_duration = t.translatePeriod(
        l2 == null ? void 0 : l2.number,
        l2 == null ? void 0 : l2.unit
      ), s2.sub_duration_in_months = Rm(
        l2,
        t
      ), s2.sub_period = t.translatePeriodFrequency(
        l2 == null ? void 0 : l2.number,
        l2 == null ? void 0 : l2.unit
      ), s2.sub_period_length = l2 ? t.translatePeriodUnit(l2.unit, {
        noWhitespace: true
      }) : void 0, s2.sub_period_abbreviated = l2 ? t.translatePeriodUnit(l2.unit, {
        noWhitespace: true,
        short: true
      }) : void 0;
      const c2 = a2.currentPrice.amountMicros, p2 = r.webBillingProduct.currentPrice.amountMicros, u = ((p2 - c2) * 100 / p2).toFixed(0);
      s2.sub_relative_discount = c2 === p2 ? "" : t.translate(
        O.PaywallVariablesSubRelativeDiscount,
        {
          discount: u
        }
      );
    }
    return (i === Lr.NonConsumable || i === Lr.Consumable) && o && (s2.price = n, s2.price_per_period = n, s2.price_per_period_full = n, s2.total_price_and_per_month = n, s2.sub_price_per_month = n, s2.sub_duration = t.translate(
      O.PeriodsLifetime
    ), s2.sub_duration_in_months = t.translate(
      O.PeriodsLifetime
    ), s2.sub_period = t.translate(
      O.PeriodsLifetime
    ), s2.sub_price_per_week = void 0, s2.sub_relative_discount = void 0, s2.price_per_period_full = n, s2.total_price_and_per_month_full = n, s2.sub_period_length = void 0, s2.sub_period_abbreviated = void 0), s2;
  }
  var ve = [];
  for (let e = 0; e < 256; ++e)
    ve.push((e + 256).toString(16).slice(1));
  function Ym(e, r = 0) {
    return (ve[e[r + 0]] + ve[e[r + 1]] + ve[e[r + 2]] + ve[e[r + 3]] + "-" + ve[e[r + 4]] + ve[e[r + 5]] + "-" + ve[e[r + 6]] + ve[e[r + 7]] + "-" + ve[e[r + 8]] + ve[e[r + 9]] + "-" + ve[e[r + 10]] + ve[e[r + 11]] + ve[e[r + 12]] + ve[e[r + 13]] + ve[e[r + 14]] + ve[e[r + 15]]).toLowerCase();
  }
  var Aa;
  var Gm = new Uint8Array(16);
  function Xm() {
    if (!Aa) {
      if (typeof crypto > "u" || !crypto.getRandomValues)
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      Aa = crypto.getRandomValues.bind(crypto);
    }
    return Aa(Gm);
  }
  var Zm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var Io = { randomUUID: Zm };
  function os(e, r, t) {
    var n;
    if (Io.randomUUID && !e)
      return Io.randomUUID();
    e = e || {};
    const a2 = e.random ?? ((n = e.rng) == null ? void 0 : n.call(e)) ?? Xm();
    if (a2.length < 16)
      throw new Error("Random bytes length must be >= 16");
    return a2[6] = a2[6] & 15 | 64, a2[8] = a2[8] & 63 | 128, Ym(a2);
  }
  var Km = /(%?)(%([sdijo]))/g;
  function Jm(e, r) {
    switch (r) {
      case "s":
        return e;
      case "d":
      case "i":
        return Number(e);
      case "j":
        return JSON.stringify(e);
      case "o": {
        if (typeof e == "string")
          return e;
        const t = JSON.stringify(e);
        return t === "{}" || t === "[]" || /^\[object .+?\]$/.test(t) ? e : t;
      }
    }
  }
  function zn(e, ...r) {
    if (r.length === 0)
      return e;
    let t = 0, a2 = e.replace(
      Km,
      (n, o, i, s2) => {
        const l2 = r[t], c2 = Jm(l2, s2);
        return o ? n : (t++, c2);
      }
    );
    return t < r.length && (a2 += ` ${r.slice(t).join(" ")}`), a2 = a2.replace(/%{2,2}/g, "%"), a2;
  }
  var Qm = 2;
  function $m(e) {
    if (!e.stack)
      return;
    const r = e.stack.split(`
`);
    r.splice(1, Qm), e.stack = r.join(`
`);
  }
  var ef = class extends Error {
    constructor(e, ...r) {
      super(e), this.message = e, this.name = "Invariant Violation", this.message = zn(e, ...r), $m(this);
    }
  };
  var is = (e, r, ...t) => {
    if (!e)
      throw new ef(r, ...t);
  };
  is.as = (e, r, t, ...a2) => {
    if (!r) {
      const n = a2.length === 0 ? t : zn(t, ...a2);
      let o;
      try {
        o = Reflect.construct(e, [
          n
        ]);
      } catch {
        o = e(n);
      }
      throw o;
    }
  };
  var rf = "[MSW]";
  function Dn(e, ...r) {
    const t = zn(e, ...r);
    return `${rf} ${t}`;
  }
  function tf(e, ...r) {
    console.warn(Dn(e, ...r));
  }
  function af(e, ...r) {
    console.error(Dn(e, ...r));
  }
  var nf = {
    formatMessage: Dn,
    warn: tf,
    error: af
  };
  function of() {
    is(
      typeof URL < "u",
      nf.formatMessage(
        `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
      )
    );
  }
  var ss = /* @__PURE__ */ ((e) => (e.HEAD = "HEAD", e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.PATCH = "PATCH", e.OPTIONS = "OPTIONS", e.DELETE = "DELETE", e))(ss || {});
  of();
  var sf = class {
    constructor(r, t, a2, n) {
      M(this, "initialDelay");
      M(this, "maxDelay");
      M(this, "jitterPercent");
      M(this, "callback");
      M(this, "currentDelay");
      M(this, "timeoutId");
      M(this, "executingCallback", false);
      this.initialDelay = r, this.currentDelay = r, this.maxDelay = t, this.jitterPercent = a2, this.callback = n;
    }
    tryFlush() {
      if (this.backingOff()) {
        K.debugLog("Backing off, not flushing");
        return;
      }
      this.clearTimeout(), this.executeCallbackWithRetries();
    }
    stop() {
      this.clearTimeout();
    }
    schedule(r) {
      if (this.timeoutId !== void 0)
        return;
      const t = this.addJitter(r || this.currentDelay);
      this.timeoutId = setTimeout(() => {
        this.timeoutId = void 0, this.executeCallbackWithRetries();
      }, t);
    }
    backoff() {
      const r = this.currentDelay, t = Math.min(this.currentDelay * 2, this.maxDelay);
      K.debugLog(`Backing next off to ${r}ms delay`), this.clearTimeout(), this.currentDelay = t, this.schedule(r);
    }
    reset() {
      this.currentDelay !== this.initialDelay && (this.clearTimeout(), this.currentDelay = this.initialDelay);
    }
    async executeCallbackWithRetries() {
      if (this.executingCallback) {
        K.debugLog("Callback already running, rescheduling"), this.schedule();
        return;
      }
      this.executingCallback = true;
      try {
        await this.callback(), this.reset();
      } catch {
        this.backoff();
      } finally {
        this.executingCallback = false;
      }
    }
    backingOff() {
      return this.currentDelay > this.initialDelay;
    }
    clearTimeout() {
      clearTimeout(this.timeoutId), this.timeoutId = void 0;
    }
    addJitter(r) {
      const t = r * this.jitterPercent, a2 = r - t, n = r + t;
      return Math.floor(Math.random() * (n - a2 + 1) + a2);
    }
  };
  function ls(e) {
    const r = {};
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a2 = t.replace(/([A-Z])/g, "_$1").toLowerCase(), n = e[t];
        n && typeof n == "object" && !Array.isArray(n) ? r[a2] = ls(
          n
        ) : r[a2] = n;
      }
    return r;
  }
  var lf = class {
    constructor(r) {
      M(this, "EVENT_TYPE", "web_billing");
      M(this, "id");
      M(this, "timestampMs");
      M(this, "data");
      this.id = os(), this.timestampMs = Date.now(), this.data = r;
    }
    toJSON() {
      return ls({
        id: this.id,
        timestampMs: this.timestampMs,
        type: this.EVENT_TYPE,
        eventName: this.data.eventName,
        appUserId: this.data.appUserId,
        context: {
          ...this.data.context
        },
        properties: {
          ...this.data.properties,
          traceId: this.data.traceId
        }
      });
    }
  };
  function cf(e, r) {
    const t = new URLSearchParams(window.location.search);
    return {
      libraryName: "purchases-js",
      libraryVersion: Gi,
      locale: navigator.language,
      userAgent: navigator.userAgent,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenWidth: screen.width,
      screenHeight: screen.height,
      utmSource: t.get("utm_source") ?? null,
      utmMedium: t.get("utm_medium") ?? null,
      utmCampaign: t.get("utm_campaign") ?? null,
      utmContent: t.get("utm_content") ?? null,
      utmTerm: t.get("utm_term") ?? null,
      pageReferrer: document.referrer,
      pageUrl: `${window.location.origin}${window.location.pathname}`,
      pageTitle: document.title,
      source: e,
      rcSource: r
    };
  }
  var df = 2e3;
  var uf = 5 * 6e4;
  var pf = 0.1;
  var _f = class {
    constructor(r) {
      M(this, "apiKey");
      M(this, "eventsQueue", []);
      M(this, "eventsUrl");
      M(this, "flushManager");
      M(this, "traceId", os());
      M(this, "appUserId");
      M(this, "isSilent");
      M(this, "rcSource");
      this.apiKey = r.apiKey, this.eventsUrl = `${hm}/v1/events`, this.appUserId = r.appUserId, this.isSilent = r.silent || false, this.rcSource = r.rcSource, this.flushManager = new sf(
        df,
        uf,
        pf,
        this.flushEvents.bind(this)
      );
    }
    async updateUser(r) {
      this.appUserId = r;
    }
    getTraceId() {
      return this.traceId;
    }
    trackSDKEvent(r) {
      this.trackEvent({ ...r, source: "sdk" });
    }
    trackExternalEvent(r) {
      this.trackEvent({ ...r });
    }
    trackEvent(r) {
      if (this.isSilent) {
        K.verboseLog("Skipping event tracking, the EventsTracker is silent");
        return;
      }
      try {
        const t = new lf({
          eventName: r.eventName,
          traceId: this.traceId,
          appUserId: this.appUserId,
          context: cf(r.source, this.rcSource),
          properties: r.properties || {}
        });
        this.eventsQueue.push(t), this.flushManager.tryFlush();
      } catch {
        K.errorLog(`Error while tracking event ${r.eventName}`);
      }
    }
    dispose() {
      this.flushManager.stop();
    }
    flushEvents() {
      if (this.eventsQueue.length === 0)
        return Promise.resolve();
      const r = [...this.eventsQueue];
      return fetch(this.eventsUrl, {
        method: ss.POST,
        headers: ts(this.apiKey),
        body: JSON.stringify({ events: r })
      }).then((t) => {
        if (t.status === 200 || t.status === 201) {
          this.eventsQueue.splice(0, r.length);
          return;
        } else
          throw K.debugLog("Events failed to flush due to server error"), new Error("Events failed to flush due to server error");
      }).catch((t) => {
        throw K.debugLog("Error while flushing events"), t;
      });
    }
  };
  var gf = () => {
    const e = new URLSearchParams(window.location.search), r = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content"
    ], t = {};
    return r.forEach((a2) => {
      const n = e.get(a2);
      n !== null && (t[a2] = n);
    }), t;
  };
  var Ma = {
    autoCollectUTMAsMetadata: true,
    collectAnalyticsEvents: true
  };
  function mf() {
    if (crypto && crypto.randomUUID)
      return crypto.randomUUID();
    const e = new Uint8Array(16);
    if (crypto && crypto.getRandomValues)
      crypto.getRandomValues(e);
    else
      for (let t = 0; t < 16; t++)
        e[t] = Math.floor(Math.random() * 256);
    e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    const r = Array.from(e).map((t) => t.toString(16).padStart(2, "0"));
    return [
      r.slice(0, 4).join(""),
      r.slice(4, 6).join(""),
      r.slice(6, 8).join(""),
      r.slice(8, 10).join(""),
      r.slice(10, 16).join("")
    ].join("-");
  }
  var qo = "$RCAnonymousID:";
  var Fo;
  var ja;
  Fo = [Nm];
  var ke = class ke2 {
    /** @internal */
    constructor(r, t, a2 = tn, n = Ma) {
      Wn(ja, 5, this);
      M(this, "_API_KEY");
      M(this, "_appUserId");
      M(this, "_brandingInfo", null);
      M(this, "_loadingResourcesPromise", null);
      M(this, "_flags");
      M(this, "backend");
      M(this, "purchaseOperationHelper");
      M(this, "eventsTracker");
      this._API_KEY = r, this._appUserId = t, this._flags = { ...Ma, ...n }, ua(r) && K.debugLog("Initializing Purchases SDK with sandbox API Key"), this.eventsTracker = new _f({
        apiKey: this._API_KEY,
        appUserId: this._appUserId,
        silent: !this._flags.collectAnalyticsEvents,
        rcSource: this._flags.rcSource ?? null
      }), this.backend = new Dm(this._API_KEY, a2), this.purchaseOperationHelper = new Kl(
        this.backend,
        this.eventsTracker
      ), this.eventsTracker.trackSDKEvent({
        eventName: Fe.SDKInitialized
      });
    }
    /**
     * Set the log level. Logs of the given level and below will be printed
     * in the console.
     * Default is `LogLevel.Silent` so no logs will be printed in the console.
     * @param logLevel - LogLevel to set.
     */
    static setLogLevel(r) {
      K.setLogLevel(r);
    }
    /**
     * Meant to be used by RevenueCat hybrids SDKS only.
     * @experimental
     * */
    static setPlatformInfo(r) {
      ke2._platformInfo = r;
    }
    /** @internal */
    static getPlatformInfo() {
      return ke2._platformInfo;
    }
    /**
     * Get the singleton instance of Purchases. It's preferred to use the instance
     * obtained from the {@link Purchases.configure} method when possible.
     * @throws {@link UninitializedPurchasesError} if the instance has not been initialized yet.
     */
    static getSharedInstance() {
      if (ke2.isConfigured())
        return ke2.instance;
      throw new Xl();
    }
    /**
     * Returns whether the Purchases SDK is configured or not.
     */
    static isConfigured() {
      return ke2.instance !== void 0;
    }
    /**
     * Configures the Purchases SDK. This should be called as soon as your app
     * has a unique user id for your user. You should only call this once, and
     * keep the returned instance around for use throughout your application.
     * @param apiKey - RevenueCat API Key. Can be obtained from the RevenueCat dashboard.
     * @param appUserId - Your unique id for identifying the user.
     * @param httpConfig - Advanced http configuration to customise the SDK usage {@link HttpConfig}.
     * @param flags - Advanced functionality configuration {@link FlagsConfig}.
     * @throws {@link PurchasesError} if the API key or user id are invalid.
     */
    static configure(r, t, a2 = tn, n = Ma) {
      return ke2.instance !== void 0 && K.warnLog(
        "Purchases is already initialized. You normally should only configure Purchases once. Creating and returning new instance."
      ), Am(r), So(t), Mm(a2.proxyURL), jm(a2.additionalHeaders), ke2.instance = new ke2(r, t, a2, n), ke2.getSharedInstance();
    }
    /**
     * Loads and caches some optional data in the Purchases SDK.
     * Currently only fetching branding information.
     * You can call this method after configuring the SDK to speed
     * up the first call to {@link Purchases.purchase}.
     */
    async preload() {
      if (this.hasLoadedResources()) {
        K.verboseLog("Purchases resources are loaded. Skipping.");
        return;
      }
      if (this._loadingResourcesPromise !== null) {
        K.verboseLog("Purchases resources are loading. Waiting."), await this._loadingResourcesPromise;
        return;
      }
      return this._loadingResourcesPromise = this.fetchAndCacheBrandingInfo().catch((r) => {
        let t = `${r}`;
        r instanceof ye && (t = `${r.message}. ${r.underlyingErrorMessage ? `Underlying error: ${r.underlyingErrorMessage}` : ""}`), K.errorLog(`Error fetching branding info: ${t}`);
      }).finally(() => {
        this._loadingResourcesPromise = null;
      }), this._loadingResourcesPromise;
    }
    /** @internal */
    fetchAndCacheBrandingInfo() {
      return this.backend.getBrandingInfo().then((r) => {
        this._brandingInfo = r;
      });
    }
    /** @internal */
    hasLoadedResources() {
      return this._brandingInfo !== null;
    }
    /**
     * Renders an RC Paywall and allows the user to purchase from it using Web Billing.
     * @experimental
     * @internal
     * @param paywallParams - The parameters object to customise the paywall render. Check {@link RenderPaywallParams}
     * @returns Promise<PurchaseResult>
     */
    async renderPaywall(r) {
      console.warn(
        "This method is @experimental, Paywalls are not generally available but they will come soon!"
      );
      let a2 = r.htmlTarget ?? document.getElementById("rcb-ui-pw-root");
      if (a2 === null) {
        const g2 = document.createElement("div");
        g2.id = "rcb-ui-pw-root", g2.className = "rcb-ui-pw-root", g2.style.zIndex = `${Lm}`, document.body.appendChild(g2), a2 = g2;
      }
      if (a2 === null)
        throw new Error(
          "Could not generate a mount point for the billing widget"
        );
      const n = a2;
      n.innerHTML = "";
      const o = r.offering;
      if (!o.paywall_components)
        throw new Error("You cannot use paywalls yet, they are coming soon!");
      const i = r.selectedLocale || navigator.language, s2 = new va(
        {},
        i,
        o.paywall_components.default_locale
      ), l2 = (g2) => {
        var f2;
        const m2 = o.availablePackages.find(
          (h2) => h2.identifier === g2
        );
        if (m2 === void 0)
          throw new Error(`No package found for ${g2}`);
        return this.purchase({
          rcPackage: m2,
          htmlTarget: r.purchaseHtmlTarget,
          customerEmail: r.customerEmail,
          selectedLocale: i,
          defaultLocale: ((f2 = o.paywall_components) == null ? void 0 : f2.default_locale) || tt
        });
      }, c2 = (g2) => {
        var m2;
        if (r.onNavigateToUrl) {
          r.onNavigateToUrl(g2);
          return;
        }
        (m2 = window.open(g2, "_blank")) == null || m2.focus();
      }, p2 = () => {
      }, u = () => {
        if (r.onVisitCustomerCenter) {
          r.onVisitCustomerCenter();
          return;
        }
      }, _ = Hm(
        o,
        s2
      );
      return new Promise((g2, m2) => {
        ro(kd, {
          target: n,
          props: {
            paywallData: o.paywall_components,
            selectedLocale: i,
            onNavigateToUrlClicked: c2,
            onVisitCustomerCenterClicked: u,
            onBackClicked: () => {
              if (r.onBack) {
                r.onBack();
                return;
              }
              n.innerHTML = "", K.debugLog("Purchase cancelled by user"), m2(new ye(Se.UserCancelledError));
            },
            onRestorePurchasesClicked: p2,
            onPurchaseClicked: (f2) => {
              l2(f2).then((h2) => {
                g2(h2);
              }).catch((h2) => m2(h2));
            },
            onError: (f2) => m2(f2),
            variablesPerPackage: _
          }
        });
      });
    }
    /**
     * Fetch the configured offerings for this user. You can configure these
     * in the RevenueCat dashboard.
     * @param params - The parameters object to customise the offerings fetch. Check {@link GetOfferingsParams}
     */
    async getOfferings(r) {
      sm(r == null ? void 0 : r.currency);
      const t = this._appUserId, a2 = await this.backend.getOfferings(t), n = (r == null ? void 0 : r.offeringIdentifier) === as.Current ? a2.current_offering_id : r == null ? void 0 : r.offeringIdentifier;
      return n && (a2.offerings = a2.offerings.filter(
        (o) => o.identifier === n
      )), await this.getAllOfferings(a2, t, r);
    }
    /**
     * Retrieves a specific offering by a placement identifier.
     * For more info see https://www.revenuecat.com/docs/tools/targeting
     * @param placementIdentifier - The placement identifier to retrieve the offering for.
     * @param params - The parameters object to customise the offerings fetch. Check {@link GetOfferingsParams}
     */
    async getCurrentOfferingForPlacement(r, t) {
      const a2 = this._appUserId, n = await this.backend.getOfferings(a2), o = await this.getAllOfferings(
        n,
        a2,
        t
      ), i = n.placements ?? null;
      return i == null ? null : Cm(
        i,
        o.all,
        r
      );
    }
    async getAllOfferings(r, t, a2) {
      const n = r.offerings.flatMap((i) => i.packages).map((i) => i.platform_product_identifier), o = await this.backend.getProducts(
        t,
        n,
        a2 == null ? void 0 : a2.currency
      );
      return this.logMissingProductIds(n, o.product_details), Om(r, o);
    }
    /**
     * Convenience method to check whether a user is entitled to a specific
     * entitlement. This will use {@link Purchases.getCustomerInfo} under the hood.
     * @param entitlementIdentifier - The entitlement identifier you want to check.
     * @returns Whether the user is entitled to the specified entitlement
     * @throws {@link PurchasesError} if there is an error while fetching the customer info.
     * @see {@link Purchases.getCustomerInfo}
     */
    async isEntitledTo(r) {
      const t = await this.getCustomerInfo();
      return r in t.entitlements.active;
    }
    /**
     * Method to perform a purchase for a given package. You can obtain the
     * package from {@link Purchases.getOfferings}. This method will present the purchase
     * form on your site, using the given HTML element as the mount point, if
     * provided, or as a modal if not.
     * @deprecated - please use .purchase
     * @param rcPackage - The package you want to purchase. Obtained from {@link Purchases.getOfferings}.
     * @param customerEmail - The email of the user. If undefined, RevenueCat will ask the customer for their email.
     * @param htmlTarget - The HTML element where the billing view should be added. If undefined, a new div will be created at the root of the page and appended to the body.
     * @returns a Promise for the customer info after the purchase is completed successfully.
     * @throws {@link PurchasesError} if there is an error while performing the purchase. If the {@link PurchasesError.errorCode} is {@link ErrorCode.UserCancelledError}, the user cancelled the purchase.
     */
    purchasePackage(r, t, a2) {
      return this.purchase({
        rcPackage: r,
        customerEmail: t,
        htmlTarget: a2
      });
    }
    purchase(r) {
      var x2;
      const {
        rcPackage: t,
        purchaseOption: a2,
        htmlTarget: n,
        customerEmail: o,
        selectedLocale: i = tt,
        defaultLocale: s2 = tt
      } = r;
      let l2 = n ?? document.getElementById("rcb-ui-root");
      if (l2 === null) {
        const T2 = document.createElement("div");
        T2.className = "rcb-ui-root", document.body.appendChild(T2), l2 = T2;
      }
      if (l2 === null)
        throw new Error(
          "Could not generate a mount point for the billing widget"
        );
      const c2 = l2, p2 = this._appUserId;
      K.debugLog(
        `Presenting purchase form for package ${t.identifier}`
      );
      const u = i || s2, _ = a2 ?? t.webBillingProduct.defaultPurchaseOption, g2 = np({
        appearance: (x2 = this._brandingInfo) == null ? void 0 : x2.appearance,
        rcPackage: t,
        purchaseOptionToUse: _,
        customerEmail: o
      });
      this.eventsTracker.trackSDKEvent(g2);
      const f2 = { ...this._flags.autoCollectUTMAsMetadata ? gf() : {}, ...r.metadata || {} };
      let h2 = null;
      const v = this._brandingInfo;
      v && r.brandingAppearanceOverride && (v.appearance = r.brandingAppearanceOverride);
      const y2 = n !== void 0;
      return new Promise((T2, S2) => {
        y2 || window.history.pushState({ checkoutOpen: true }, "");
        const q = this._flags.rcSource === "app" ? void 0 : () => {
          const w2 = ip();
          this.eventsTracker.trackSDKEvent(w2), window.removeEventListener("popstate", q), h2 && qa(h2), c2.innerHTML = "", K.debugLog("Purchase cancelled by user"), S2(new ye(Se.UserCancelledError));
        };
        !y2 && q && window.addEventListener("popstate", q), h2 = ro(lm, {
          target: c2,
          props: {
            isInElement: y2,
            appUserId: p2,
            rcPackage: t,
            purchaseOption: _,
            customerEmail: o,
            onFinished: async (w2, z) => {
              const Y = op({
                redemptionInfo: z
              });
              this.eventsTracker.trackSDKEvent(Y), K.debugLog("Purchase finished"), h2 && qa(h2), c2.innerHTML = "";
              const G = {
                customerInfo: await this._getCustomerInfoForUserId(p2),
                redemptionInfo: z,
                operationSessionId: w2
              };
              T2(G);
            },
            onClose: q,
            onError: (w2) => {
              var Y;
              const z = sp({
                errorCode: (Y = w2.errorCode) == null ? void 0 : Y.toString(),
                errorMessage: w2.message
              });
              this.eventsTracker.trackSDKEvent(z), h2 && qa(h2), c2.innerHTML = "", S2(ye.getForPurchasesFlowError(w2));
            },
            purchases: this,
            eventsTracker: this.eventsTracker,
            brandingInfo: this._brandingInfo,
            purchaseOperationHelper: this.purchaseOperationHelper,
            selectedLocale: u,
            metadata: f2,
            defaultLocale: s2,
            customTranslations: r.labelsOverride
          }
        });
      });
    }
    /**
     * Gets latest available {@link CustomerInfo}.
     * @returns The latest {@link CustomerInfo}.
     * @throws {@link PurchasesError} if there is an error while fetching the customer info.
     */
    async getCustomerInfo() {
      return await this._getCustomerInfoForUserId(this._appUserId);
    }
    /**
     * Gets the current app user id.
     */
    getAppUserId() {
      return this._appUserId;
    }
    /**
     * Sets attributes for the current user. Attributes are useful for storing additional, structured information on a customer that can be used elsewhere in the system.
     * For example, you could store your customer's email address or additional system identifiers through the applicable reserved attributes, or store arbitrary facts like onboarding survey responses, feature usage, or other dimensions as custom attributes.
     *
     * Note: Unlike our mobile SDKs, the web SDK does not cache or retry sending attributes if the request fails. If the request fails, the attributes will not be saved and you will need to retry the operation.
     *
     * @param attributes - A dictionary of attributes to set for the current user.
     * @throws {@link PurchasesError} if there is an error while setting the attributes or if the customer doesn't exist.
     */
    async setAttributes(r) {
      return await this.getCustomerInfo(), await this.backend.setAttributes(this._appUserId, r);
    }
    /**
     * Change the current app user id. Returns the customer info for the new
     * user id.
     * @param newAppUserId - The user id to change to.
     */
    async changeUser(r) {
      return So(r), this._appUserId = r, this.eventsTracker.updateUser(r), await this.getCustomerInfo();
    }
    /** @internal */
    logMissingProductIds(r, t) {
      const a2 = {};
      t.forEach(
        (o) => a2[o.identifier] = o
      );
      const n = [];
      r.forEach((o) => {
        a2[o] === void 0 && n.push(o);
      }), n.length > 0 && K.debugLog(
        `Could not find product data for product ids:
        ${n.join()}.
        Please check that your product configuration is correct.`
      );
    }
    /**
     * @returns Whether the SDK is using a sandbox API Key.
     */
    isSandbox() {
      return ua(this._API_KEY);
    }
    /**
     * @returns Whether the current user is anonymous.
     */
    isAnonymous() {
      return this._appUserId.startsWith(qo);
    }
    /**
     * Closes the Purchases instance. You should never have to do this normally.
     */
    close() {
      ke2.instance === this ? (this.eventsTracker && this.eventsTracker.dispose(), ke2.instance = void 0) : K.warnLog(
        "Trying to close a Purchases instance that is not the current instance. Ignoring."
      );
    }
    /** @internal */
    async _getCustomerInfoForUserId(r) {
      const t = await this.backend.getCustomerInfo(r);
      return _m(t);
    }
    /**
     * Generates an anonymous app user ID that follows RevenueCat's format.
     * This can be used when you don't have a user identifier system in place.
     * The generated ID will be in the format: $RCAnonymousID:\<UUID without dashes\>
     * Example: $RCAnonymousID:123e4567e89b12d3a456426614174000
     * @returns A new anonymous app user ID string
     * @public
     */
    static generateRevenueCatAnonymousAppUserId() {
      return `${qo}${mf().replace(/-/g, "")}`;
    }
    /**
     * Track an event.
     * @param props - The properties of the event.
     * @internal
     */
    _trackEvent(r) {
      this.eventsTracker.trackExternalEvent(r);
    }
  };
  ja = Vn(null), Yn(ja, 1, "purchase", Fo, ke), Sa(ja, ke), /** @internal */
  M(ke, "_platformInfo"), /** @internal */
  M(ke, "instance");
  var an = ke;

  // js/main.js
  var WEB_BILLING_PUBLIC_API_KEY = "rcb_eGkVzEcZFpluGWwOCBLFyPAqzsTb";
  var appUserId = "1";
  var purchases = an.configure(WEB_BILLING_PUBLIC_API_KEY, appUserId);
  purchases.getOfferings().then((res) => {
    console.log(JSON.stringify(res, null, " "));
    window.offerings = res;
  });
})();

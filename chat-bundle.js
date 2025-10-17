var oy = Object.defineProperty;
var sy = (e, t, n) => t in e ? oy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _s = (e, t, n) => sy(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.61.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const tt = {}, ro = [], Dt = () => {
}, iy = () => !1, hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yu = (e) => e.startsWith("onUpdate:"), Ct = Object.assign, wu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ay = Object.prototype.hasOwnProperty, Xe = (e, t) => ay.call(e, t), Ie = Array.isArray, oo = (e) => gi(e) === "[object Map]", Eh = (e) => gi(e) === "[object Set]", Se = (e) => typeof e == "function", Ke = (e) => typeof e == "string", Yn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", Ah = (e) => (Fe(e) || Se(e)) && Se(e.then) && Se(e.catch), Th = Object.prototype.toString, gi = (e) => Th.call(e), Fs = (e) => gi(e).slice(8, -1), Mh = (e) => gi(e) === "[object Object]", ku = (e) => Ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Po = /* @__PURE__ */ _u(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ly = /-(\w)/g, un = mi(
  (e) => e.replace(ly, (t, n) => n ? n.toUpperCase() : "")
), cy = /\B([A-Z])/g, br = mi(
  (e) => e.replace(cy, "-$1").toLowerCase()
), vi = mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), ea = mi(
  (e) => e ? `on${vi(e)}` : ""
), mr = (e, t) => !Object.is(e, t), qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $h = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Nc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, uy = (e) => {
  const t = Ke(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Df;
const bi = () => Df || (Df = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function st(e) {
  if (Ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ke(r) ? hy(r) : st(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (Ke(e) || Fe(e))
    return e;
}
const fy = /;(?![^(]*\))/g, dy = /:([^]+)/, py = /\/\*[^]*?\*\//g;
function hy(e) {
  const t = {};
  return e.replace(py, "").split(fy).forEach((n) => {
    if (n) {
      const r = n.split(dy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (Ke(e))
    t = e;
  else if (Ie(e))
    for (let n = 0; n < e.length; n++) {
      const r = Q(e[n]);
      r && (t += r + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ys(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ke(t) && (e.class = Q(t)), n && (e.style = st(n)), e;
}
const gy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", my = /* @__PURE__ */ _u(gy);
function Lh(e) {
  return !!e || e === "";
}
const Ih = (e) => !!(e && e.__v_isRef === !0), Ye = (e) => Ke(e) ? e : e == null ? "" : Ie(e) || Fe(e) && (e.toString === Th || !Se(e.toString)) ? Ih(e) ? Ye(e.value) : JSON.stringify(e, Rh, 2) : String(e), Rh = (e, t) => Ih(t) ? Rh(e, t.value) : oo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[ta(r, o) + " =>"] = s, n),
    {}
  )
} : Eh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ta(n))
} : Yn(t) ? ta(t) : Fe(t) && !Ie(t) && !Mh(t) ? String(t) : t, ta = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ht;
class vy {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ht, !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ht;
      try {
        return Ht = this, t();
      } finally {
        Ht = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ht = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function xu() {
  return Ht;
}
function Oh(e, t = !1) {
  Ht && Ht.cleanups.push(e);
}
let ct;
const na = /* @__PURE__ */ new WeakSet();
class Ph {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ht && Ht.active && Ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, na.has(this) && (na.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bf(this), Nh(this);
    const t = ct, n = _n;
    ct = this, _n = !0;
    try {
      return this.fn();
    } finally {
      Fh(this), ct = t, _n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Eu(t);
      this.deps = this.depsTail = void 0, Bf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Fc(this) && this.run();
  }
  get dirty() {
    return Fc(this);
  }
}
let Dh = 0, Do, Bo;
function Bh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Do, Do = e;
}
function Cu() {
  Dh++;
}
function Su() {
  if (--Dh > 0)
    return;
  if (Bo) {
    let t = Bo;
    for (Bo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Do; ) {
    let t = Do;
    for (Do = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Nh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fh(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Eu(r), by(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Fc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Uo))
    return;
  e.globalVersion = Uo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Fc(e)) {
    e.flags &= -3;
    return;
  }
  const n = ct, r = _n;
  ct = e, _n = !0;
  try {
    Nh(e);
    const s = e.fn(e._value);
    (t.version === 0 || mr(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ct = n, _n = r, Fh(e), e.flags &= -3;
  }
}
function Eu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Eu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function by(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _n = !0;
const zh = [];
function _r() {
  zh.push(_n), _n = !1;
}
function yr() {
  const e = zh.pop();
  _n = e === void 0 ? !0 : e;
}
function Bf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ct;
    ct = void 0;
    try {
      t();
    } finally {
      ct = n;
    }
  }
}
let Uo = 0;
class _y {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Au {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!ct || !_n || ct === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ct)
      n = this.activeLink = new _y(ct, this), ct.deps ? (n.prevDep = ct.depsTail, ct.depsTail.nextDep = n, ct.depsTail = n) : ct.deps = ct.depsTail = n, Hh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ct.depsTail, n.nextDep = void 0, ct.depsTail.nextDep = n, ct.depsTail = n, ct.deps === n && (ct.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Uo++, this.notify(t);
  }
  notify(t) {
    Cu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Su();
    }
  }
}
function Hh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Hh(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Qs = /* @__PURE__ */ new WeakMap(), Br = Symbol(
  ""
), qc = Symbol(
  ""
), Ko = Symbol(
  ""
);
function It(e, t, n) {
  if (_n && ct) {
    let r = Qs.get(e);
    r || Qs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Au()), s.map = r, s.key = n), s.track();
  }
}
function jn(e, t, n, r, s, o) {
  const i = Qs.get(e);
  if (!i) {
    Uo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Cu(), t === "clear")
    i.forEach(a);
  else {
    const l = Ie(e), u = l && ku(n);
    if (l && n === "length") {
      const f = Number(r);
      i.forEach((c, p) => {
        (p === "length" || p === Ko || !Yn(p) && p >= f) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Ko)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Br)), oo(e) && a(i.get(qc)));
          break;
        case "delete":
          l || (a(i.get(Br)), oo(e) && a(i.get(qc)));
          break;
        case "set":
          oo(e) && a(i.get(Br));
          break;
      }
  }
  Su();
}
function yy(e, t) {
  const n = Qs.get(e);
  return n && n.get(t);
}
function Zr(e) {
  const t = je(e);
  return t === e ? t : (It(t, "iterate", Ko), ln(e) ? t : t.map(Rt));
}
function _i(e) {
  return It(e = je(e), "iterate", Ko), e;
}
const wy = {
  __proto__: null,
  [Symbol.iterator]() {
    return ra(this, Symbol.iterator, Rt);
  },
  concat(...e) {
    return Zr(this).concat(
      ...e.map((t) => Ie(t) ? Zr(t) : t)
    );
  },
  entries() {
    return ra(this, "entries", (e) => (e[1] = Rt(e[1]), e));
  },
  every(e, t) {
    return Bn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Bn(this, "filter", e, t, (n) => n.map(Rt), arguments);
  },
  find(e, t) {
    return Bn(this, "find", e, t, Rt, arguments);
  },
  findIndex(e, t) {
    return Bn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Bn(this, "findLast", e, t, Rt, arguments);
  },
  findLastIndex(e, t) {
    return Bn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Bn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oa(this, "includes", e);
  },
  indexOf(...e) {
    return oa(this, "indexOf", e);
  },
  join(e) {
    return Zr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return oa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Bn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Co(this, "pop");
  },
  push(...e) {
    return Co(this, "push", e);
  },
  reduce(e, ...t) {
    return Nf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nf(this, "reduceRight", e, t);
  },
  shift() {
    return Co(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Bn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Co(this, "splice", e);
  },
  toReversed() {
    return Zr(this).toReversed();
  },
  toSorted(e) {
    return Zr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Co(this, "unshift", e);
  },
  values() {
    return ra(this, "values", Rt);
  }
};
function ra(e, t, n) {
  const r = _i(e), s = r[t]();
  return r !== e && !ln(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const ky = Array.prototype;
function Bn(e, t, n, r, s, o) {
  const i = _i(e), a = i !== e && !ln(e), l = i[t];
  if (l !== ky[t]) {
    const c = l.apply(e, o);
    return a ? Rt(c) : c;
  }
  let u = n;
  i !== e && (a ? u = function(c, p) {
    return n.call(this, Rt(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = l.call(i, u, r);
  return a && s ? s(f) : f;
}
function Nf(e, t, n, r) {
  const s = _i(e);
  let o = n;
  return s !== e && (ln(e) ? n.length > 3 && (o = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : o = function(i, a, l) {
    return n.call(this, i, Rt(a), l, e);
  }), s[t](o, ...r);
}
function oa(e, t, n) {
  const r = je(e);
  It(r, "iterate", Ko);
  const s = r[t](...n);
  return (s === -1 || s === !1) && $u(n[0]) ? (n[0] = je(n[0]), r[t](...n)) : s;
}
function Co(e, t, n = []) {
  _r(), Cu();
  const r = je(e)[t].apply(e, n);
  return Su(), yr(), r;
}
const xy = /* @__PURE__ */ _u("__proto__,__v_isRef,__isVue"), jh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yn)
);
function Cy(e) {
  Yn(e) || (e = String(e));
  const t = je(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class Vh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Oy : Wh : o ? Gh : Kh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Ie(t);
    if (!s) {
      let l;
      if (i && (l = wy[n]))
        return l;
      if (n === "hasOwnProperty")
        return Cy;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      bt(t) ? t : r
    );
    return (Yn(n) ? jh.has(n) : xy(n)) || (s || It(t, "get", n), o) ? a : bt(a) ? i && ku(n) ? a : a.value : Fe(a) ? s ? yi(a) : xn(a) : a;
  }
}
class Uh extends Vh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Hr(o);
      if (!ln(r) && !Hr(r) && (o = je(o), r = je(r)), !Ie(t) && bt(o) && !bt(r))
        return l ? !1 : (o.value = r, !0);
    }
    const i = Ie(t) && ku(n) ? Number(n) < t.length : Xe(t, n), a = Reflect.set(
      t,
      n,
      r,
      bt(t) ? t : s
    );
    return t === je(s) && (i ? mr(r, o) && jn(t, "set", n, r) : jn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Xe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && jn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Yn(n) || !jh.has(n)) && It(t, "has", n), r;
  }
  ownKeys(t) {
    return It(
      t,
      "iterate",
      Ie(t) ? "length" : Br
    ), Reflect.ownKeys(t);
  }
}
class Sy extends Vh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ey = /* @__PURE__ */ new Uh(), Ay = /* @__PURE__ */ new Sy(), Ty = /* @__PURE__ */ new Uh(!0);
const zc = (e) => e, ys = (e) => Reflect.getPrototypeOf(e);
function My(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = je(s), i = oo(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), f = n ? zc : t ? Hc : Rt;
    return !t && It(
      o,
      "iterate",
      l ? qc : Br
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: a ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ws(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $y(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      e || (mr(s, a) && It(i, "get", s), It(i, "get", a));
      const { has: l } = ys(i), u = t ? zc : e ? Hc : Rt;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && It(je(s), "iterate", Br), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw, i = je(o), a = je(s);
      return e || (mr(s, a) && It(i, "has", s), It(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = je(a), u = t ? zc : e ? Hc : Rt;
      return !e && It(l, "iterate", Br), a.forEach((f, c) => s.call(o, u(f), u(c), i));
    }
  };
  return Ct(
    n,
    e ? {
      add: ws("add"),
      set: ws("set"),
      delete: ws("delete"),
      clear: ws("clear")
    } : {
      add(s) {
        !t && !ln(s) && !Hr(s) && (s = je(s));
        const o = je(this);
        return ys(o).has.call(o, s) || (o.add(s), jn(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !ln(o) && !Hr(o) && (o = je(o));
        const i = je(this), { has: a, get: l } = ys(i);
        let u = a.call(i, s);
        u || (s = je(s), u = a.call(i, s));
        const f = l.call(i, s);
        return i.set(s, o), u ? mr(o, f) && jn(i, "set", s, o) : jn(i, "add", s, o), this;
      },
      delete(s) {
        const o = je(this), { has: i, get: a } = ys(o);
        let l = i.call(o, s);
        l || (s = je(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && jn(o, "delete", s, void 0), u;
      },
      clear() {
        const s = je(this), o = s.size !== 0, i = s.clear();
        return o && jn(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = My(s, e, t);
  }), n;
}
function Tu(e, t) {
  const n = $y(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Xe(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Ly = {
  get: /* @__PURE__ */ Tu(!1, !1)
}, Iy = {
  get: /* @__PURE__ */ Tu(!1, !0)
}, Ry = {
  get: /* @__PURE__ */ Tu(!0, !1)
};
const Kh = /* @__PURE__ */ new WeakMap(), Gh = /* @__PURE__ */ new WeakMap(), Wh = /* @__PURE__ */ new WeakMap(), Oy = /* @__PURE__ */ new WeakMap();
function Py(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Dy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Py(Fs(e));
}
function xn(e) {
  return Hr(e) ? e : Mu(
    e,
    !1,
    Ey,
    Ly,
    Kh
  );
}
function By(e) {
  return Mu(
    e,
    !1,
    Ty,
    Iy,
    Gh
  );
}
function yi(e) {
  return Mu(
    e,
    !0,
    Ay,
    Ry,
    Wh
  );
}
function Mu(e, t, n, r, s) {
  if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Dy(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function so(e) {
  return Hr(e) ? so(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Hr(e) {
  return !!(e && e.__v_isReadonly);
}
function ln(e) {
  return !!(e && e.__v_isShallow);
}
function $u(e) {
  return e ? !!e.__v_raw : !1;
}
function je(e) {
  const t = e && e.__v_raw;
  return t ? je(t) : e;
}
function Ny(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && $h(e, "__v_skip", !0), e;
}
const Rt = (e) => Fe(e) ? xn(e) : e, Hc = (e) => Fe(e) ? yi(e) : e;
function bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return Zh(e, !1);
}
function Un(e) {
  return Zh(e, !0);
}
function Zh(e, t) {
  return bt(e) ? e : new Fy(e, t);
}
class Fy {
  constructor(t, n) {
    this.dep = new Au(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : je(t), this._value = n ? t : Rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || ln(t) || Hr(t);
    t = r ? t : je(t), mr(t, n) && (this._rawValue = t, this._value = r ? t : Rt(t), this.dep.trigger());
  }
}
function So(e) {
  e.dep && e.dep.trigger();
}
function b(e) {
  return bt(e) ? e.value : e;
}
const qy = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return bt(s) && !bt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Xh(e) {
  return so(e) ? e : new Proxy(e, qy);
}
function wi(e) {
  const t = Ie(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Jh(e, n);
  return t;
}
class zy {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return yy(je(this._object), this._key);
  }
}
class Hy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function bn(e, t, n) {
  return bt(e) ? e : Se(e) ? new Hy(e) : Fe(e) && arguments.length > 1 ? Jh(e, t, n) : G(e);
}
function Jh(e, t, n) {
  const r = e[t];
  return bt(r) ? r : new zy(e, t, n);
}
class jy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Au(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ct !== this)
      return Bh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Vy(e, t, n = !1) {
  let r, s;
  return Se(e) ? r = e : (r = e.get, s = e.set), new jy(r, s, n);
}
const ks = {}, ei = /* @__PURE__ */ new WeakMap();
let Or;
function Uy(e, t = !1, n = Or) {
  if (n) {
    let r = ei.get(n);
    r || ei.set(n, r = []), r.push(e);
  }
}
function Ky(e, t, n = tt) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (y) => s ? y : ln(y) || s === !1 || s === 0 ? Vn(y, 1) : Vn(y);
  let f, c, p, d, v = !1, g = !1;
  if (bt(e) ? (c = () => e.value, v = ln(e)) : so(e) ? (c = () => u(e), v = !0) : Ie(e) ? (g = !0, v = e.some((y) => so(y) || ln(y)), c = () => e.map((y) => {
    if (bt(y))
      return y.value;
    if (so(y))
      return u(y);
    if (Se(y))
      return l ? l(y, 2) : y();
  })) : Se(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (p) {
      _r();
      try {
        p();
      } finally {
        yr();
      }
    }
    const y = Or;
    Or = f;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      Or = y;
    }
  } : c = Dt, t && s) {
    const y = c, S = s === !0 ? 1 / 0 : s;
    c = () => Vn(y(), S);
  }
  const k = xu(), m = () => {
    f.stop(), k && k.active && wu(k.effects, f);
  };
  if (o && t) {
    const y = t;
    t = (...S) => {
      y(...S), m();
    };
  }
  let x = g ? new Array(e.length).fill(ks) : ks;
  const w = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const S = f.run();
        if (s || v || (g ? S.some((C, $) => mr(C, x[$])) : mr(S, x))) {
          p && p();
          const C = Or;
          Or = f;
          try {
            const $ = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === ks ? void 0 : g && x[0] === ks ? [] : x,
              d
            ];
            l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            ), x = S;
          } finally {
            Or = C;
          }
        }
      } else
        f.run();
  };
  return a && a(w), f = new Ph(c), f.scheduler = i ? () => i(w, !1) : w, d = (y) => Uy(y, !1, f), p = f.onStop = () => {
    const y = ei.get(f);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const S of y) S();
      ei.delete(f);
    }
  }, t ? r ? w(!0) : x = f.run() : i ? i(w.bind(null, !0), !0) : f.run(), m.pause = f.pause.bind(f), m.resume = f.resume.bind(f), m.stop = m, m;
}
function Vn(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, bt(e))
    Vn(e.value, t, n);
  else if (Ie(e))
    for (let r = 0; r < e.length; r++)
      Vn(e[r], t, n);
  else if (Eh(e) || oo(e))
    e.forEach((r) => {
      Vn(r, t, n);
    });
  else if (Mh(e)) {
    for (const r in e)
      Vn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Vn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function as(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ki(s, t, n);
  }
}
function wn(e, t, n, r) {
  if (Se(e)) {
    const s = as(e, t, n, r);
    return s && Ah(s) && s.catch((o) => {
      ki(o, t, n);
    }), s;
  }
  if (Ie(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(wn(e[o], t, n, r));
    return s;
  }
}
function ki(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || tt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      _r(), as(o, null, 10, [
        e,
        l,
        u
      ]), yr();
      return;
    }
  }
  Gy(e, n, s, r, i);
}
function Gy(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const jt = [];
let Ln = -1;
const io = [];
let ur = null, Yr = 0;
const Yh = /* @__PURE__ */ Promise.resolve();
let ti = null;
function Ue(e) {
  const t = ti || Yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wy(e) {
  let t = Ln + 1, n = jt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = jt[r], o = Go(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Lu(e) {
  if (!(e.flags & 1)) {
    const t = Go(e), n = jt[jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Go(n) ? jt.push(e) : jt.splice(Wy(t), 0, e), e.flags |= 1, Qh();
  }
}
function Qh() {
  ti || (ti = Yh.then(t1));
}
function Zy(e) {
  Ie(e) ? io.push(...e) : ur && e.id === -1 ? ur.splice(Yr + 1, 0, e) : e.flags & 1 || (io.push(e), e.flags |= 1), Qh();
}
function Ff(e, t, n = Ln + 1) {
  for (; n < jt.length; n++) {
    const r = jt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      jt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function e1(e) {
  if (io.length) {
    const t = [...new Set(io)].sort(
      (n, r) => Go(n) - Go(r)
    );
    if (io.length = 0, ur) {
      ur.push(...t);
      return;
    }
    for (ur = t, Yr = 0; Yr < ur.length; Yr++) {
      const n = ur[Yr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ur = null, Yr = 0;
  }
}
const Go = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function t1(e) {
  try {
    for (Ln = 0; Ln < jt.length; Ln++) {
      const t = jt[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), as(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < jt.length; Ln++) {
      const t = jt[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, jt.length = 0, e1(), ti = null, (jt.length || io.length) && t1();
  }
}
let xt = null, n1 = null;
function ni(e) {
  const t = xt;
  return xt = e, n1 = e && e.type.__scopeId || null, t;
}
function he(e, t = xt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Qf(-1);
    const o = ni(t);
    let i;
    try {
      i = e(...s);
    } finally {
      ni(o), r._d && Qf(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ut(e, t) {
  if (xt === null)
    return e;
  const n = Ti(xt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = tt] = t[s];
    o && (Se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Vn(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Er(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (_r(), wn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), yr());
  }
}
const r1 = Symbol("_vte"), o1 = (e) => e.__isTeleport, No = (e) => e && (e.disabled || e.disabled === ""), qf = (e) => e && (e.defer || e.defer === ""), zf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Hf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, jc = (e, t) => {
  const n = e && e.to;
  return Ke(n) ? t ? t(n) : null : n;
}, s1 = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: p,
      o: { insert: d, querySelector: v, createText: g, createComment: k }
    } = u, m = No(t.props);
    let { shapeFlag: x, children: w, dynamicChildren: y } = t;
    if (e == null) {
      const S = t.el = g(""), C = t.anchor = g("");
      d(S, n, r), d(C, n, r);
      const $ = (R, D) => {
        x & 16 && (s && s.isCE && (s.ce._teleportTarget = R), f(
          w,
          R,
          D,
          s,
          o,
          i,
          a,
          l
        ));
      }, M = () => {
        const R = t.target = jc(t.props, v), D = i1(R, t, g, d);
        R && (i !== "svg" && zf(R) ? i = "svg" : i !== "mathml" && Hf(R) && (i = "mathml"), m || ($(R, D), zs(t, !1)));
      };
      m && ($(n, C), zs(t, !0)), qf(t.props) ? qt(() => {
        M(), t.el.__isMounted = !0;
      }, o) : M();
    } else {
      if (qf(t.props) && !e.el.__isMounted) {
        qt(() => {
          s1.process(
            e,
            t,
            n,
            r,
            s,
            o,
            i,
            a,
            l,
            u
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, C = t.target = e.target, $ = t.targetAnchor = e.targetAnchor, M = No(e.props), R = M ? n : C, D = M ? S : $;
      if (i === "svg" || zf(C) ? i = "svg" : (i === "mathml" || Hf(C)) && (i = "mathml"), y ? (p(
        e.dynamicChildren,
        y,
        R,
        s,
        o,
        i,
        a
      ), Pu(e, t, !0)) : l || c(
        e,
        t,
        R,
        D,
        s,
        o,
        i,
        a,
        !1
      ), m)
        M ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : xs(
          t,
          n,
          S,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = t.target = jc(
          t.props,
          v
        );
        N && xs(
          t,
          N,
          null,
          u,
          0
        );
      } else M && xs(
        t,
        C,
        $,
        u,
        1
      );
      zs(t, m);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, o) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: f,
      target: c,
      props: p
    } = e;
    if (c && (s(u), s(f)), o && s(l), i & 16) {
      const d = o || !No(p);
      for (let v = 0; v < a.length; v++) {
        const g = a[v];
        r(
          g,
          t,
          n,
          d,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: xs,
  hydrate: Xy
};
function xs(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: f } = e, c = o === 2;
  if (c && r(i, t, n), (!c || No(f)) && l & 16)
    for (let p = 0; p < u.length; p++)
      s(
        u[p],
        t,
        n,
        2
      );
  c && r(a, t, n);
}
function Xy(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: f }
}, c) {
  const p = t.target = jc(
    t.props,
    l
  );
  if (p) {
    const d = No(t.props), v = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (d)
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          r,
          s,
          o
        ), t.targetStart = v, t.targetAnchor = v && i(v);
      else {
        t.anchor = i(e);
        let g = v;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || i1(p, t, f, u), c(
          v && i(v),
          t,
          p,
          n,
          r,
          s,
          o
        );
      }
    zs(t, d);
  }
  return t.anchor && i(t.anchor);
}
const Jy = s1;
function zs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function i1(e, t, n, r) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[r1] = o, e && (r(s, e), r(o, e)), o;
}
const fr = Symbol("_leaveCb"), Cs = Symbol("_enterCb");
function Yy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return it(() => {
    e.isMounted = !0;
  }), Jt(() => {
    e.isUnmounting = !0;
  }), e;
}
const an = [Function, Array], a1 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: an,
  onEnter: an,
  onAfterEnter: an,
  onEnterCancelled: an,
  // leave
  onBeforeLeave: an,
  onLeave: an,
  onAfterLeave: an,
  onLeaveCancelled: an,
  // appear
  onBeforeAppear: an,
  onAppear: an,
  onAfterAppear: an,
  onAppearCancelled: an
}, l1 = (e) => {
  const t = e.subTree;
  return t.component ? l1(t.component) : t;
}, Qy = {
  name: "BaseTransition",
  props: a1,
  setup(e, { slots: t }) {
    const n = _t(), r = Yy();
    return () => {
      const s = t.default && f1(t.default(), !0);
      if (!s || !s.length)
        return;
      const o = c1(s), i = je(e), { mode: a } = i;
      if (r.isLeaving)
        return sa(o);
      const l = jf(o);
      if (!l)
        return sa(o);
      let u = Vc(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      l.type !== Ot && Wo(l, u);
      let f = n.subTree && jf(n.subTree);
      if (f && f.type !== Ot && !Pr(l, f) && l1(n).type !== Ot) {
        let c = Vc(
          f,
          i,
          r,
          n
        );
        if (Wo(f, c), a === "out-in" && l.type !== Ot)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, sa(o);
        a === "in-out" && l.type !== Ot ? c.delayLeave = (p, d, v) => {
          const g = u1(
            r,
            f
          );
          g[String(f.key)] = f, p[fr] = () => {
            d(), p[fr] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            v(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return o;
    };
  }
};
function c1(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
const e4 = Qy;
function u1(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Vc(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: d,
    onAfterLeave: v,
    onLeaveCancelled: g,
    onBeforeAppear: k,
    onAppear: m,
    onAfterAppear: x,
    onAppearCancelled: w
  } = t, y = String(e.key), S = u1(n, e), C = (R, D) => {
    R && wn(
      R,
      r,
      9,
      D
    );
  }, $ = (R, D) => {
    const N = D[1];
    C(R, D), Ie(R) ? R.every((B) => B.length <= 1) && N() : R.length <= 1 && N();
  }, M = {
    mode: i,
    persisted: a,
    beforeEnter(R) {
      let D = l;
      if (!n.isMounted)
        if (o)
          D = k || l;
        else
          return;
      R[fr] && R[fr](
        !0
        /* cancelled */
      );
      const N = S[y];
      N && Pr(e, N) && N.el[fr] && N.el[fr](), C(D, [R]);
    },
    enter(R) {
      let D = u, N = f, B = c;
      if (!n.isMounted)
        if (o)
          D = m || u, N = x || f, B = w || c;
        else
          return;
      let oe = !1;
      const q = R[Cs] = (ie) => {
        oe || (oe = !0, ie ? C(B, [R]) : C(N, [R]), M.delayedLeave && M.delayedLeave(), R[Cs] = void 0);
      };
      D ? $(D, [R, q]) : q();
    },
    leave(R, D) {
      const N = String(e.key);
      if (R[Cs] && R[Cs](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      C(p, [R]);
      let B = !1;
      const oe = R[fr] = (q) => {
        B || (B = !0, D(), q ? C(g, [R]) : C(v, [R]), R[fr] = void 0, S[N] === e && delete S[N]);
      };
      S[N] = e, d ? $(d, [R, oe]) : oe();
    },
    clone(R) {
      const D = Vc(
        R,
        t,
        n,
        r,
        s
      );
      return s && s(D), D;
    }
  };
  return M;
}
function sa(e) {
  if (xi(e))
    return e = Wn(e), e.children = null, e;
}
function jf(e) {
  if (!xi(e))
    return o1(e.type) && e.children ? c1(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Se(n.default))
      return n.default();
  }
}
function Wo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function f1(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === et ? (i.patchFlag & 128 && s++, r = r.concat(
      f1(i.children, t, a)
    )) : (t || i.type !== Ot) && r.push(a != null ? Wn(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  return Se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function d1(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ri(e, t, n, r, s = !1) {
  if (Ie(e)) {
    e.forEach(
      (v, g) => ri(
        v,
        t && (Ie(t) ? t[g] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (ao(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ri(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ti(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, f = a.refs === tt ? a.refs = {} : a.refs, c = a.setupState, p = je(c), d = c === tt ? () => !1 : (v) => Xe(p, v);
  if (u != null && u !== l && (Ke(u) ? (f[u] = null, d(u) && (c[u] = null)) : bt(u) && (u.value = null)), Se(l))
    as(l, a, 12, [i, f]);
  else {
    const v = Ke(l), g = bt(l);
    if (v || g) {
      const k = () => {
        if (e.f) {
          const m = v ? d(l) ? c[l] : f[l] : l.value;
          s ? Ie(m) && wu(m, o) : Ie(m) ? m.includes(o) || m.push(o) : v ? (f[l] = [o], d(l) && (c[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value));
        } else v ? (f[l] = i, d(l) && (c[l] = i)) : g && (l.value = i, e.k && (f[e.k] = i));
      };
      i ? (k.id = -1, qt(k, n)) : k();
    }
  }
}
bi().requestIdleCallback;
bi().cancelIdleCallback;
const ao = (e) => !!e.type.__asyncLoader, xi = (e) => e.type.__isKeepAlive;
function t4(e, t) {
  h1(e, "a", t);
}
function p1(e, t) {
  h1(e, "da", t);
}
function h1(e, t, n = Tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ci(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      xi(s.parent.vnode) && n4(r, t, n, s), s = s.parent;
  }
}
function n4(e, t, n, r) {
  const s = Ci(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Si(() => {
    wu(r[t], s);
  }, n);
}
function Ci(e, t, n = Tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      _r();
      const a = ls(n), l = wn(t, n, e, i);
      return a(), yr(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Qn = (e) => (t, n = Tt) => {
  (!Jo || e === "sp") && Ci(e, (...r) => t(...r), n);
}, g1 = Qn("bm"), it = Qn("m"), r4 = Qn(
  "bu"
), m1 = Qn("u"), Jt = Qn(
  "bum"
), Si = Qn("um"), o4 = Qn(
  "sp"
), s4 = Qn("rtg"), i4 = Qn("rtc");
function a4(e, t = Tt) {
  Ci("ec", e, t);
}
const Iu = "components", l4 = "directives";
function sr(e, t) {
  return Ru(Iu, e, !0, t) || e;
}
const v1 = Symbol.for("v-ndc");
function Pt(e) {
  return Ke(e) ? Ru(Iu, e, !1) || e : e || v1;
}
function b1(e) {
  return Ru(l4, e);
}
function Ru(e, t, n = !0, r = !1) {
  const s = xt || Tt;
  if (s) {
    const o = s.type;
    if (e === Iu) {
      const a = U4(
        o,
        !1
      );
      if (a && (a === t || a === un(t) || a === vi(un(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vf(s[e] || o[e], t) || // global registration
      Vf(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function Vf(e, t) {
  return e && (e[t] || e[un(t)] || e[vi(un(t))]);
}
function yn(e, t, n, r) {
  let s;
  const o = n, i = Ie(e);
  if (i || Ke(e)) {
    const a = i && so(e);
    let l = !1;
    a && (l = !ln(e), e = _i(e)), s = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(
        l ? Rt(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const f = a[l];
        s[l] = t(e[f], f, l, o);
      }
    }
  else
    s = [];
  return s;
}
function oi(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ie(r))
      for (let s = 0; s < r.length; s++)
        e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function we(e, t, n = {}, r, s) {
  if (xt.ce || xt.parent && ao(xt.parent) && xt.parent.ce)
    return t !== "default" && (n.name = t), _(), ue(
      et,
      null,
      [xe("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), _();
  const i = o && _1(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ue(
    et,
    {
      key: (a && !Yn(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function _1(e) {
  return e.some((t) => Xo(t) ? !(t.type === Ot || t.type === et && !_1(t.children)) : !0) ? e : null;
}
const Uc = (e) => e ? q1(e) ? Ti(e) : Uc(e.parent) : null, Fo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ct(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Uc(e.parent),
    $root: (e) => Uc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => x1(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Lu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => M4.bind(e)
  })
), ia = (e, t) => e !== tt && !e.__isScriptSetup && Xe(e, t), c4 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = i[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ia(r, t))
          return i[t] = 1, r[t];
        if (s !== tt && Xe(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Xe(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== tt && Xe(n, t))
          return i[t] = 4, n[t];
        Kc && (i[t] = 0);
      }
    }
    const f = Fo[t];
    let c, p;
    if (f)
      return t === "$attrs" && It(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== tt && Xe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Xe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return ia(s, t) ? (s[t] = n, !0) : r !== tt && Xe(r, t) ? (r[t] = n, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== tt && Xe(e, i) || ia(t, i) || (a = o[0]) && Xe(a, i) || Xe(r, i) || Xe(Fo, i) || Xe(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function y1() {
  return w1().slots;
}
function Ei() {
  return w1().attrs;
}
function w1() {
  const e = _t();
  return e.setupContext || (e.setupContext = H1(e));
}
function Uf(e) {
  return Ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Kc = !0;
function u4(e) {
  const t = x1(e), n = e.proxy, r = e.ctx;
  Kc = !1, t.beforeCreate && Kf(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: d,
    updated: v,
    activated: g,
    deactivated: k,
    beforeDestroy: m,
    beforeUnmount: x,
    destroyed: w,
    unmounted: y,
    render: S,
    renderTracked: C,
    renderTriggered: $,
    errorCaptured: M,
    serverPrefetch: R,
    // public API
    expose: D,
    inheritAttrs: N,
    // assets
    components: B,
    directives: oe,
    filters: q
  } = t;
  if (u && f4(u, r, null), i)
    for (const V in i) {
      const H = i[V];
      Se(H) && (r[V] = H.bind(n));
    }
  if (s) {
    const V = s.call(n, n);
    Fe(V) && (e.data = xn(V));
  }
  if (Kc = !0, o)
    for (const V in o) {
      const H = o[V], Y = Se(H) ? H.bind(n, n) : Se(H.get) ? H.get.bind(n, n) : Dt, I = !Se(H) && Se(H.set) ? H.set.bind(n) : Dt, Z = P({
        get: Y,
        set: I
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Z.value,
        set: (K) => Z.value = K
      });
    }
  if (a)
    for (const V in a)
      k1(a[V], r, n, V);
  if (l) {
    const V = Se(l) ? l.call(n) : l;
    Reflect.ownKeys(V).forEach((H) => {
      Kt(H, V[H]);
    });
  }
  f && Kf(f, e, "c");
  function j(V, H) {
    Ie(H) ? H.forEach((Y) => V(Y.bind(n))) : H && V(H.bind(n));
  }
  if (j(g1, c), j(it, p), j(r4, d), j(m1, v), j(t4, g), j(p1, k), j(a4, M), j(i4, C), j(s4, $), j(Jt, x), j(Si, y), j(o4, R), Ie(D))
    if (D.length) {
      const V = e.exposed || (e.exposed = {});
      D.forEach((H) => {
        Object.defineProperty(V, H, {
          get: () => n[H],
          set: (Y) => n[H] = Y
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Dt && (e.render = S), N != null && (e.inheritAttrs = N), B && (e.components = B), oe && (e.directives = oe), R && d1(e);
}
function f4(e, t, n = Dt) {
  Ie(e) && (e = Gc(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Fe(s) ? "default" in s ? o = qe(
      s.from || r,
      s.default,
      !0
    ) : o = qe(s.from || r) : o = qe(s), bt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Kf(e, t, n) {
  wn(
    Ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function k1(e, t, n, r) {
  let s = r.includes(".") ? P1(n, r) : () => n[r];
  if (Ke(e)) {
    const o = t[e];
    Se(o) && Te(s, o);
  } else if (Se(e))
    Te(s, e.bind(n));
  else if (Fe(e))
    if (Ie(e))
      e.forEach((o) => k1(o, t, n, r));
    else {
      const o = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
      Se(o) && Te(s, o, e);
    }
}
function x1(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => si(l, u, i, !0)
  ), si(l, t, i)), Fe(t) && o.set(t, l), l;
}
function si(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && si(e, o, n, !0), s && s.forEach(
    (i) => si(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = d4[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const d4 = {
  data: Gf,
  props: Wf,
  emits: Wf,
  // objects
  methods: Ro,
  computed: Ro,
  // lifecycle
  beforeCreate: Ft,
  created: Ft,
  beforeMount: Ft,
  mounted: Ft,
  beforeUpdate: Ft,
  updated: Ft,
  beforeDestroy: Ft,
  beforeUnmount: Ft,
  destroyed: Ft,
  unmounted: Ft,
  activated: Ft,
  deactivated: Ft,
  errorCaptured: Ft,
  serverPrefetch: Ft,
  // assets
  components: Ro,
  directives: Ro,
  // watch
  watch: h4,
  // provide / inject
  provide: Gf,
  inject: p4
};
function Gf(e, t) {
  return t ? e ? function() {
    return Ct(
      Se(e) ? e.call(this, this) : e,
      Se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function p4(e, t) {
  return Ro(Gc(e), Gc(t));
}
function Gc(e) {
  if (Ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ro(e, t) {
  return e ? Ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wf(e, t) {
  return e ? Ie(e) && Ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ct(
    /* @__PURE__ */ Object.create(null),
    Uf(e),
    Uf(t ?? {})
  ) : t;
}
function h4(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ct(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ft(e[r], t[r]);
  return n;
}
function C1() {
  return {
    app: null,
    config: {
      isNativeTag: iy,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let g4 = 0;
function m4(e, t) {
  return function(r, s = null) {
    Se(r) || (r = Ct({}, r)), s != null && !Fe(s) && (s = null);
    const o = C1(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: g4++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: G4,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return i.has(f) || (f && Se(f.install) ? (i.add(f), f.install(u, ...c)) : Se(f) && (i.add(f), f(u, ...c))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, c) {
        return c ? (o.components[f] = c, u) : o.components[f];
      },
      directive(f, c) {
        return c ? (o.directives[f] = c, u) : o.directives[f];
      },
      mount(f, c, p) {
        if (!l) {
          const d = u._ceVNode || xe(r, s);
          return d.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(d, f, p), l = !0, u._container = f, f.__vue_app__ = u, Ti(d.component);
        }
      },
      onUnmount(f) {
        a.push(f);
      },
      unmount() {
        l && (wn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, c) {
        return o.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = lo;
        lo = u;
        try {
          return f();
        } finally {
          lo = c;
        }
      }
    };
    return u;
  };
}
let lo = null;
function Kt(e, t) {
  if (Tt) {
    let n = Tt.provides;
    const r = Tt.parent && Tt.parent.provides;
    r === n && (n = Tt.provides = Object.create(r)), n[e] = t;
  }
}
function qe(e, t, n = !1) {
  const r = Tt || xt;
  if (r || lo) {
    const s = lo ? lo._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Se(t) ? t.call(r && r.proxy) : t;
  }
}
const S1 = {}, E1 = () => Object.create(S1), A1 = (e) => Object.getPrototypeOf(e) === S1;
function v4(e, t, n, r = !1) {
  const s = {}, o = E1();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), T1(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : By(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function b4(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = je(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (Ai(e.emitsOptions, p))
          continue;
        const d = t[p];
        if (l)
          if (Xe(o, p))
            d !== o[p] && (o[p] = d, u = !0);
          else {
            const v = un(p);
            s[v] = Wc(
              l,
              a,
              v,
              d,
              e,
              !1
            );
          }
        else
          d !== o[p] && (o[p] = d, u = !0);
      }
    }
  } else {
    T1(e, t, s, o) && (u = !0);
    let f;
    for (const c in a)
      (!t || // for camelCase
      !Xe(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = br(c)) === c || !Xe(t, f))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[c] = Wc(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete s[c]);
    if (o !== a)
      for (const c in o)
        (!t || !Xe(t, c)) && (delete o[c], u = !0);
  }
  u && jn(e.attrs, "set", "");
}
function T1(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (Po(l))
        continue;
      const u = t[l];
      let f;
      s && Xe(s, f = un(l)) ? !o || !o.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : Ai(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = je(n), u = a || tt;
    for (let f = 0; f < o.length; f++) {
      const c = o[f];
      n[c] = Wc(
        s,
        l,
        c,
        u[c],
        e,
        !Xe(u, c)
      );
    }
  }
  return i;
}
function Wc(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Xe(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Se(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const f = ls(s);
          r = u[n] = l.call(
            null,
            t
          ), f();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === br(n)) && (r = !0));
  }
  return r;
}
const _4 = /* @__PURE__ */ new WeakMap();
function M1(e, t, n = !1) {
  const r = n ? _4 : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!Se(e)) {
    const f = (c) => {
      l = !0;
      const [p, d] = M1(c, t, !0);
      Ct(i, p), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l)
    return Fe(e) && r.set(e, ro), ro;
  if (Ie(o))
    for (let f = 0; f < o.length; f++) {
      const c = un(o[f]);
      Zf(c) && (i[c] = tt);
    }
  else if (o)
    for (const f in o) {
      const c = un(f);
      if (Zf(c)) {
        const p = o[f], d = i[c] = Ie(p) || Se(p) ? { type: p } : Ct({}, p), v = d.type;
        let g = !1, k = !0;
        if (Ie(v))
          for (let m = 0; m < v.length; ++m) {
            const x = v[m], w = Se(x) && x.name;
            if (w === "Boolean") {
              g = !0;
              break;
            } else w === "String" && (k = !1);
          }
        else
          g = Se(v) && v.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = k, (g || Xe(d, "default")) && a.push(c);
      }
    }
  const u = [i, a];
  return Fe(e) && r.set(e, u), u;
}
function Zf(e) {
  return e[0] !== "$" && !Po(e);
}
const $1 = (e) => e[0] === "_" || e === "$stable", Ou = (e) => Ie(e) ? e.map(In) : [In(e)], y4 = (e, t, n) => {
  if (t._n)
    return t;
  const r = he((...s) => Ou(t(...s)), n);
  return r._c = !1, r;
}, L1 = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if ($1(s)) continue;
    const o = e[s];
    if (Se(o))
      t[s] = y4(s, o, r);
    else if (o != null) {
      const i = Ou(o);
      t[s] = () => i;
    }
  }
}, I1 = (e, t) => {
  const n = Ou(t);
  e.slots.default = () => n;
}, R1 = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, w4 = (e, t, n) => {
  const r = e.slots = E1();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (R1(r, t, n), n && $h(r, "_", s, !0)) : L1(t, r);
  } else t && I1(e, t);
}, k4 = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = tt;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : R1(s, t, n) : (o = !t.$stable, L1(t, s)), i = t;
  } else t && (I1(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !$1(a) && i[a] == null && delete s[a];
}, qt = D4;
function x4(e) {
  return C4(e);
}
function C4(e, t) {
  const n = bi();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: d = Dt,
    insertStaticContent: v
  } = e, g = (T, L, z, J = null, X = null, ee = null, ae = void 0, se = null, ne = !!L.dynamicChildren) => {
    if (T === L)
      return;
    T && !Pr(T, L) && (J = Ge(T), K(T, X, ee, !0), T = null), L.patchFlag === -2 && (ne = !1, L.dynamicChildren = null);
    const { type: te, ref: ye, shapeFlag: fe } = L;
    switch (te) {
      case yo:
        k(T, L, z, J);
        break;
      case Ot:
        m(T, L, z, J);
        break;
      case Hs:
        T == null && x(L, z, J, ae);
        break;
      case et:
        B(
          T,
          L,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne
        );
        break;
      default:
        fe & 1 ? S(
          T,
          L,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne
        ) : fe & 6 ? oe(
          T,
          L,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne
        ) : (fe & 64 || fe & 128) && te.process(
          T,
          L,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne,
          pe
        );
    }
    ye != null && X && ri(ye, T && T.ref, ee, L || T, !L);
  }, k = (T, L, z, J) => {
    if (T == null)
      r(
        L.el = a(L.children),
        z,
        J
      );
    else {
      const X = L.el = T.el;
      L.children !== T.children && u(X, L.children);
    }
  }, m = (T, L, z, J) => {
    T == null ? r(
      L.el = l(L.children || ""),
      z,
      J
    ) : L.el = T.el;
  }, x = (T, L, z, J) => {
    [T.el, T.anchor] = v(
      T.children,
      L,
      z,
      J,
      T.el,
      T.anchor
    );
  }, w = ({ el: T, anchor: L }, z, J) => {
    let X;
    for (; T && T !== L; )
      X = p(T), r(T, z, J), T = X;
    r(L, z, J);
  }, y = ({ el: T, anchor: L }) => {
    let z;
    for (; T && T !== L; )
      z = p(T), s(T), T = z;
    s(L);
  }, S = (T, L, z, J, X, ee, ae, se, ne) => {
    L.type === "svg" ? ae = "svg" : L.type === "math" && (ae = "mathml"), T == null ? C(
      L,
      z,
      J,
      X,
      ee,
      ae,
      se,
      ne
    ) : R(
      T,
      L,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, C = (T, L, z, J, X, ee, ae, se) => {
    let ne, te;
    const { props: ye, shapeFlag: fe, transition: ve, dirs: U } = T;
    if (ne = T.el = i(
      T.type,
      ee,
      ye && ye.is,
      ye
    ), fe & 8 ? f(ne, T.children) : fe & 16 && M(
      T.children,
      ne,
      null,
      J,
      X,
      aa(T, ee),
      ae,
      se
    ), U && Er(T, null, J, "created"), $(ne, T, T.scopeId, ae, J), ye) {
      for (const Ae in ye)
        Ae !== "value" && !Po(Ae) && o(ne, Ae, null, ye[Ae], ee, J);
      "value" in ye && o(ne, "value", null, ye.value, ee), (te = ye.onVnodeBeforeMount) && $n(te, J, T);
    }
    U && Er(T, null, J, "beforeMount");
    const ce = S4(X, ve);
    ce && ve.beforeEnter(ne), r(ne, L, z), ((te = ye && ye.onVnodeMounted) || ce || U) && qt(() => {
      te && $n(te, J, T), ce && ve.enter(ne), U && Er(T, null, J, "mounted");
    }, X);
  }, $ = (T, L, z, J, X) => {
    if (z && d(T, z), J)
      for (let ee = 0; ee < J.length; ee++)
        d(T, J[ee]);
    if (X) {
      let ee = X.subTree;
      if (L === ee || B1(ee.type) && (ee.ssContent === L || ee.ssFallback === L)) {
        const ae = X.vnode;
        $(
          T,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          X.parent
        );
      }
    }
  }, M = (T, L, z, J, X, ee, ae, se, ne = 0) => {
    for (let te = ne; te < T.length; te++) {
      const ye = T[te] = se ? dr(T[te]) : In(T[te]);
      g(
        null,
        ye,
        L,
        z,
        J,
        X,
        ee,
        ae,
        se
      );
    }
  }, R = (T, L, z, J, X, ee, ae) => {
    const se = L.el = T.el;
    let { patchFlag: ne, dynamicChildren: te, dirs: ye } = L;
    ne |= T.patchFlag & 16;
    const fe = T.props || tt, ve = L.props || tt;
    let U;
    if (z && Ar(z, !1), (U = ve.onVnodeBeforeUpdate) && $n(U, z, L, T), ye && Er(L, T, z, "beforeUpdate"), z && Ar(z, !0), (fe.innerHTML && ve.innerHTML == null || fe.textContent && ve.textContent == null) && f(se, ""), te ? D(
      T.dynamicChildren,
      te,
      se,
      z,
      J,
      aa(L, X),
      ee
    ) : ae || H(
      T,
      L,
      se,
      null,
      z,
      J,
      aa(L, X),
      ee,
      !1
    ), ne > 0) {
      if (ne & 16)
        N(se, fe, ve, z, X);
      else if (ne & 2 && fe.class !== ve.class && o(se, "class", null, ve.class, X), ne & 4 && o(se, "style", fe.style, ve.style, X), ne & 8) {
        const ce = L.dynamicProps;
        for (let Ae = 0; Ae < ce.length; Ae++) {
          const Re = ce[Ae], ut = fe[Re], ht = ve[Re];
          (ht !== ut || Re === "value") && o(se, Re, ut, ht, X, z);
        }
      }
      ne & 1 && T.children !== L.children && f(se, L.children);
    } else !ae && te == null && N(se, fe, ve, z, X);
    ((U = ve.onVnodeUpdated) || ye) && qt(() => {
      U && $n(U, z, L, T), ye && Er(L, T, z, "updated");
    }, J);
  }, D = (T, L, z, J, X, ee, ae) => {
    for (let se = 0; se < L.length; se++) {
      const ne = T[se], te = L[se], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pr(ne, te) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 70) ? c(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      g(
        ne,
        te,
        ye,
        null,
        J,
        X,
        ee,
        ae,
        !0
      );
    }
  }, N = (T, L, z, J, X) => {
    if (L !== z) {
      if (L !== tt)
        for (const ee in L)
          !Po(ee) && !(ee in z) && o(
            T,
            ee,
            L[ee],
            null,
            X,
            J
          );
      for (const ee in z) {
        if (Po(ee)) continue;
        const ae = z[ee], se = L[ee];
        ae !== se && ee !== "value" && o(T, ee, se, ae, X, J);
      }
      "value" in z && o(T, "value", L.value, z.value, X);
    }
  }, B = (T, L, z, J, X, ee, ae, se, ne) => {
    const te = L.el = T ? T.el : a(""), ye = L.anchor = T ? T.anchor : a("");
    let { patchFlag: fe, dynamicChildren: ve, slotScopeIds: U } = L;
    U && (se = se ? se.concat(U) : U), T == null ? (r(te, z, J), r(ye, z, J), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      z,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    )) : fe > 0 && fe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (D(
      T.dynamicChildren,
      ve,
      z,
      X,
      ee,
      ae,
      se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || X && L === X.subTree) && Pu(
      T,
      L,
      !0
      /* shallow */
    )) : H(
      T,
      L,
      z,
      ye,
      X,
      ee,
      ae,
      se,
      ne
    );
  }, oe = (T, L, z, J, X, ee, ae, se, ne) => {
    L.slotScopeIds = se, T == null ? L.shapeFlag & 512 ? X.ctx.activate(
      L,
      z,
      J,
      ae,
      ne
    ) : q(
      L,
      z,
      J,
      X,
      ee,
      ae,
      ne
    ) : ie(T, L, ne);
  }, q = (T, L, z, J, X, ee, ae) => {
    const se = T.component = z4(
      T,
      J,
      X
    );
    if (xi(T) && (se.ctx.renderer = pe), H4(se, !1, ae), se.asyncDep) {
      if (X && X.registerDep(se, j, ae), !T.el) {
        const ne = se.subTree = xe(Ot);
        m(null, ne, L, z);
      }
    } else
      j(
        se,
        T,
        L,
        z,
        X,
        ee,
        ae
      );
  }, ie = (T, L, z) => {
    const J = L.component = T.component;
    if (O4(T, L, z))
      if (J.asyncDep && !J.asyncResolved) {
        V(J, L, z);
        return;
      } else
        J.next = L, J.update();
    else
      L.el = T.el, J.vnode = L;
  }, j = (T, L, z, J, X, ee, ae) => {
    const se = () => {
      if (T.isMounted) {
        let { next: fe, bu: ve, u: U, parent: ce, vnode: Ae } = T;
        {
          const St = O1(T);
          if (St) {
            fe && (fe.el = Ae.el, V(T, fe, ae)), St.asyncDep.then(() => {
              T.isUnmounted || se();
            });
            return;
          }
        }
        let Re = fe, ut;
        Ar(T, !1), fe ? (fe.el = Ae.el, V(T, fe, ae)) : fe = Ae, ve && qs(ve), (ut = fe.props && fe.props.onVnodeBeforeUpdate) && $n(ut, ce, fe, Ae), Ar(T, !0);
        const ht = Jf(T), kt = T.subTree;
        T.subTree = ht, g(
          kt,
          ht,
          // parent may have changed if it's in a teleport
          c(kt.el),
          // anchor may have changed if it's in a fragment
          Ge(kt),
          T,
          X,
          ee
        ), fe.el = ht.el, Re === null && P4(T, ht.el), U && qt(U, X), (ut = fe.props && fe.props.onVnodeUpdated) && qt(
          () => $n(ut, ce, fe, Ae),
          X
        );
      } else {
        let fe;
        const { el: ve, props: U } = L, { bm: ce, m: Ae, parent: Re, root: ut, type: ht } = T, kt = ao(L);
        Ar(T, !1), ce && qs(ce), !kt && (fe = U && U.onVnodeBeforeMount) && $n(fe, Re, L), Ar(T, !0);
        {
          ut.ce && ut.ce._injectChildStyle(ht);
          const St = T.subTree = Jf(T);
          g(
            null,
            St,
            z,
            J,
            T,
            X,
            ee
          ), L.el = St.el;
        }
        if (Ae && qt(Ae, X), !kt && (fe = U && U.onVnodeMounted)) {
          const St = L;
          qt(
            () => $n(fe, Re, St),
            X
          );
        }
        (L.shapeFlag & 256 || Re && ao(Re.vnode) && Re.vnode.shapeFlag & 256) && T.a && qt(T.a, X), T.isMounted = !0, L = z = J = null;
      }
    };
    T.scope.on();
    const ne = T.effect = new Ph(se);
    T.scope.off();
    const te = T.update = ne.run.bind(ne), ye = T.job = ne.runIfDirty.bind(ne);
    ye.i = T, ye.id = T.uid, ne.scheduler = () => Lu(ye), Ar(T, !0), te();
  }, V = (T, L, z) => {
    L.component = T;
    const J = T.vnode.props;
    T.vnode = L, T.next = null, b4(T, L.props, J, z), k4(T, L.children, z), _r(), Ff(T), yr();
  }, H = (T, L, z, J, X, ee, ae, se, ne = !1) => {
    const te = T && T.children, ye = T ? T.shapeFlag : 0, fe = L.children, { patchFlag: ve, shapeFlag: U } = L;
    if (ve > 0) {
      if (ve & 128) {
        I(
          te,
          fe,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      } else if (ve & 256) {
        Y(
          te,
          fe,
          z,
          J,
          X,
          ee,
          ae,
          se,
          ne
        );
        return;
      }
    }
    U & 8 ? (ye & 16 && Pe(te, X, ee), fe !== te && f(z, fe)) : ye & 16 ? U & 16 ? I(
      te,
      fe,
      z,
      J,
      X,
      ee,
      ae,
      se,
      ne
    ) : Pe(te, X, ee, !0) : (ye & 8 && f(z, ""), U & 16 && M(
      fe,
      z,
      J,
      X,
      ee,
      ae,
      se,
      ne
    ));
  }, Y = (T, L, z, J, X, ee, ae, se, ne) => {
    T = T || ro, L = L || ro;
    const te = T.length, ye = L.length, fe = Math.min(te, ye);
    let ve;
    for (ve = 0; ve < fe; ve++) {
      const U = L[ve] = ne ? dr(L[ve]) : In(L[ve]);
      g(
        T[ve],
        U,
        z,
        null,
        X,
        ee,
        ae,
        se,
        ne
      );
    }
    te > ye ? Pe(
      T,
      X,
      ee,
      !0,
      !1,
      fe
    ) : M(
      L,
      z,
      J,
      X,
      ee,
      ae,
      se,
      ne,
      fe
    );
  }, I = (T, L, z, J, X, ee, ae, se, ne) => {
    let te = 0;
    const ye = L.length;
    let fe = T.length - 1, ve = ye - 1;
    for (; te <= fe && te <= ve; ) {
      const U = T[te], ce = L[te] = ne ? dr(L[te]) : In(L[te]);
      if (Pr(U, ce))
        g(
          U,
          ce,
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      te++;
    }
    for (; te <= fe && te <= ve; ) {
      const U = T[fe], ce = L[ve] = ne ? dr(L[ve]) : In(L[ve]);
      if (Pr(U, ce))
        g(
          U,
          ce,
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        );
      else
        break;
      fe--, ve--;
    }
    if (te > fe) {
      if (te <= ve) {
        const U = ve + 1, ce = U < ye ? L[U].el : J;
        for (; te <= ve; )
          g(
            null,
            L[te] = ne ? dr(L[te]) : In(L[te]),
            z,
            ce,
            X,
            ee,
            ae,
            se,
            ne
          ), te++;
      }
    } else if (te > ve)
      for (; te <= fe; )
        K(T[te], X, ee, !0), te++;
    else {
      const U = te, ce = te, Ae = /* @__PURE__ */ new Map();
      for (te = ce; te <= ve; te++) {
        const mt = L[te] = ne ? dr(L[te]) : In(L[te]);
        mt.key != null && Ae.set(mt.key, te);
      }
      let Re, ut = 0;
      const ht = ve - ce + 1;
      let kt = !1, St = 0;
      const pn = new Array(ht);
      for (te = 0; te < ht; te++) pn[te] = 0;
      for (te = U; te <= fe; te++) {
        const mt = T[te];
        if (ut >= ht) {
          K(mt, X, ee, !0);
          continue;
        }
        let $t;
        if (mt.key != null)
          $t = Ae.get(mt.key);
        else
          for (Re = ce; Re <= ve; Re++)
            if (pn[Re - ce] === 0 && Pr(mt, L[Re])) {
              $t = Re;
              break;
            }
        $t === void 0 ? K(mt, X, ee, !0) : (pn[$t - ce] = te + 1, $t >= St ? St = $t : kt = !0, g(
          mt,
          L[$t],
          z,
          null,
          X,
          ee,
          ae,
          se,
          ne
        ), ut++);
      }
      const sn = kt ? E4(pn) : ro;
      for (Re = sn.length - 1, te = ht - 1; te >= 0; te--) {
        const mt = ce + te, $t = L[mt], An = mt + 1 < ye ? L[mt + 1].el : J;
        pn[te] === 0 ? g(
          null,
          $t,
          z,
          An,
          X,
          ee,
          ae,
          se,
          ne
        ) : kt && (Re < 0 || te !== sn[Re] ? Z($t, z, An, 2) : Re--);
      }
    }
  }, Z = (T, L, z, J, X = null) => {
    const { el: ee, type: ae, transition: se, children: ne, shapeFlag: te } = T;
    if (te & 6) {
      Z(T.component.subTree, L, z, J);
      return;
    }
    if (te & 128) {
      T.suspense.move(L, z, J);
      return;
    }
    if (te & 64) {
      ae.move(T, L, z, pe);
      return;
    }
    if (ae === et) {
      r(ee, L, z);
      for (let fe = 0; fe < ne.length; fe++)
        Z(ne[fe], L, z, J);
      r(T.anchor, L, z);
      return;
    }
    if (ae === Hs) {
      w(T, L, z);
      return;
    }
    if (J !== 2 && te & 1 && se)
      if (J === 0)
        se.beforeEnter(ee), r(ee, L, z), qt(() => se.enter(ee), X);
      else {
        const { leave: fe, delayLeave: ve, afterLeave: U } = se, ce = () => r(ee, L, z), Ae = () => {
          fe(ee, () => {
            ce(), U && U();
          });
        };
        ve ? ve(ee, ce, Ae) : Ae();
      }
    else
      r(ee, L, z);
  }, K = (T, L, z, J = !1, X = !1) => {
    const {
      type: ee,
      props: ae,
      ref: se,
      children: ne,
      dynamicChildren: te,
      shapeFlag: ye,
      patchFlag: fe,
      dirs: ve,
      cacheIndex: U
    } = T;
    if (fe === -2 && (X = !1), se != null && ri(se, null, z, T, !0), U != null && (L.renderCache[U] = void 0), ye & 256) {
      L.ctx.deactivate(T);
      return;
    }
    const ce = ye & 1 && ve, Ae = !ao(T);
    let Re;
    if (Ae && (Re = ae && ae.onVnodeBeforeUnmount) && $n(Re, L, T), ye & 6)
      Oe(T.component, z, J);
    else {
      if (ye & 128) {
        T.suspense.unmount(z, J);
        return;
      }
      ce && Er(T, null, L, "beforeUnmount"), ye & 64 ? T.type.remove(
        T,
        L,
        z,
        pe,
        J
      ) : te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ee !== et || fe > 0 && fe & 64) ? Pe(
        te,
        L,
        z,
        !1,
        !0
      ) : (ee === et && fe & 384 || !X && ye & 16) && Pe(ne, L, z), J && me(T);
    }
    (Ae && (Re = ae && ae.onVnodeUnmounted) || ce) && qt(() => {
      Re && $n(Re, L, T), ce && Er(T, null, L, "unmounted");
    }, z);
  }, me = (T) => {
    const { type: L, el: z, anchor: J, transition: X } = T;
    if (L === et) {
      Ee(z, J);
      return;
    }
    if (L === Hs) {
      y(T);
      return;
    }
    const ee = () => {
      s(z), X && !X.persisted && X.afterLeave && X.afterLeave();
    };
    if (T.shapeFlag & 1 && X && !X.persisted) {
      const { leave: ae, delayLeave: se } = X, ne = () => ae(z, ee);
      se ? se(T.el, ee, ne) : ne();
    } else
      ee();
  }, Ee = (T, L) => {
    let z;
    for (; T !== L; )
      z = p(T), s(T), T = z;
    s(L);
  }, Oe = (T, L, z) => {
    const { bum: J, scope: X, job: ee, subTree: ae, um: se, m: ne, a: te } = T;
    Xf(ne), Xf(te), J && qs(J), X.stop(), ee && (ee.flags |= 8, K(ae, T, L, z)), se && qt(se, L), qt(() => {
      T.isUnmounted = !0;
    }, L), L && L.pendingBranch && !L.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === L.pendingId && (L.deps--, L.deps === 0 && L.resolve());
  }, Pe = (T, L, z, J = !1, X = !1, ee = 0) => {
    for (let ae = ee; ae < T.length; ae++)
      K(T[ae], L, z, J, X);
  }, Ge = (T) => {
    if (T.shapeFlag & 6)
      return Ge(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const L = p(T.anchor || T.el), z = L && L[r1];
    return z ? p(z) : L;
  };
  let ze = !1;
  const dt = (T, L, z) => {
    T == null ? L._vnode && K(L._vnode, null, null, !0) : g(
      L._vnode || null,
      T,
      L,
      null,
      null,
      null,
      z
    ), L._vnode = T, ze || (ze = !0, Ff(), e1(), ze = !1);
  }, pe = {
    p: g,
    um: K,
    m: Z,
    r: me,
    mt: q,
    mc: M,
    pc: H,
    pbc: D,
    n: Ge,
    o: e
  };
  return {
    render: dt,
    hydrate: void 0,
    createApp: m4(dt)
  };
}
function aa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ar({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function S4(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pu(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (Ie(r) && Ie(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = dr(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && Pu(i, a)), a.type === yo && (a.el = i.el);
    }
}
function E4(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function O1(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : O1(t);
}
function Xf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const A4 = Symbol.for("v-scx"), T4 = () => qe(A4);
function Du(e, t) {
  return Bu(e, null, t);
}
function Te(e, t, n) {
  return Bu(e, t, n);
}
function Bu(e, t, n = tt) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = Ct({}, n), l = t && r || !t && o !== "post";
  let u;
  if (Jo) {
    if (o === "sync") {
      const d = T4();
      u = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Dt, d.resume = Dt, d.pause = Dt, d;
    }
  }
  const f = Tt;
  a.call = (d, v, g) => wn(d, f, v, g);
  let c = !1;
  o === "post" ? a.scheduler = (d) => {
    qt(d, f && f.suspense);
  } : o !== "sync" && (c = !0, a.scheduler = (d, v) => {
    v ? d() : Lu(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), c && (d.flags |= 2, f && (d.id = f.uid, d.i = f));
  };
  const p = Ky(e, t, a);
  return Jo && (u ? u.push(p) : l && p()), p;
}
function M4(e, t, n) {
  const r = this.proxy, s = Ke(e) ? e.includes(".") ? P1(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Se(t) ? o = t : (o = t.handler, n = t);
  const i = ls(this), a = Bu(s, o.bind(r), n);
  return i(), a;
}
function P1(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const $4 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${un(t)}Modifiers`] || e[`${br(t)}Modifiers`];
function L4(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || tt;
  let s = n;
  const o = t.startsWith("update:"), i = o && $4(r, t.slice(7));
  i && (i.trim && (s = n.map((f) => Ke(f) ? f.trim() : f)), i.number && (s = n.map(Nc)));
  let a, l = r[a = ea(t)] || // also try camelCase event handler (#2249)
  r[a = ea(un(t))];
  !l && o && (l = r[a = ea(br(t))]), l && wn(
    l,
    e,
    6,
    s
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, wn(
      u,
      e,
      6,
      s
    );
  }
}
function D1(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!Se(e)) {
    const l = (u) => {
      const f = D1(u, t, !0);
      f && (a = !0, Ct(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Fe(e) && r.set(e, null), null) : (Ie(o) ? o.forEach((l) => i[l] = null) : Ct(i, o), Fe(e) && r.set(e, i), i);
}
function Ai(e, t) {
  return !e || !hi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, br(t)) || Xe(e, t));
}
function Jf(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: f,
    props: c,
    data: p,
    setupState: d,
    ctx: v,
    inheritAttrs: g
  } = e, k = ni(e);
  let m, x;
  try {
    if (n.shapeFlag & 4) {
      const y = s || r, S = y;
      m = In(
        u.call(
          S,
          y,
          f,
          c,
          d,
          p,
          v
        )
      ), x = a;
    } else {
      const y = t;
      m = In(
        y.length > 1 ? y(
          c,
          { attrs: a, slots: i, emit: l }
        ) : y(
          c,
          null
        )
      ), x = t.props ? a : I4(a);
    }
  } catch (y) {
    qo.length = 0, ki(y, e, 1), m = xe(Ot);
  }
  let w = m;
  if (x && g !== !1) {
    const y = Object.keys(x), { shapeFlag: S } = w;
    y.length && S & 7 && (o && y.some(yu) && (x = R4(
      x,
      o
    )), w = Wn(w, x, !1, !0));
  }
  return n.dirs && (w = Wn(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && Wo(w, n.transition), m = w, ni(k), m;
}
const I4 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, R4 = (e, t) => {
  const n = {};
  for (const r in e)
    (!yu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function O4(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Yf(r, i, u) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (i[p] !== r[p] && !Ai(u, p))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Yf(r, i, u) : !0 : !!i;
  return !1;
}
function Yf(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Ai(n, o))
      return !0;
  }
  return !1;
}
function P4({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const B1 = (e) => e.__isSuspense;
function D4(e, t) {
  t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : Zy(e);
}
const et = Symbol.for("v-fgt"), yo = Symbol.for("v-txt"), Ot = Symbol.for("v-cmt"), Hs = Symbol.for("v-stc"), qo = [];
let on = null;
function _(e = !1) {
  qo.push(on = e ? null : []);
}
function B4() {
  qo.pop(), on = qo[qo.length - 1] || null;
}
let Zo = 1;
function Qf(e, t = !1) {
  Zo += e, e < 0 && on && t && (on.hasOnce = !0);
}
function N1(e) {
  return e.dynamicChildren = Zo > 0 ? on || ro : null, B4(), Zo > 0 && on && on.push(e), e;
}
function A(e, t, n, r, s, o) {
  return N1(
    h(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function ue(e, t, n, r, s) {
  return N1(
    xe(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const F1 = ({ key: e }) => e ?? null, js = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ke(e) || bt(e) || Se(e) ? { i: xt, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, r = 0, s = null, o = e === et ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && F1(t),
    ref: t && js(t),
    scopeId: n1,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: xt
  };
  return a ? (Fu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ke(n) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const xe = N4;
function N4(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === v1) && (e = Ot), Xo(e)) {
    const a = Wn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fu(a, n), Zo > 0 && !o && on && (a.shapeFlag & 6 ? on[on.indexOf(e)] = a : on.push(a)), a.patchFlag = -2, a;
  }
  if (K4(e) && (e = e.__vccOpts), t) {
    t = Nu(t);
    let { class: a, style: l } = t;
    a && !Ke(a) && (t.class = Q(a)), Fe(l) && ($u(l) && !Ie(l) && (l = Ct({}, l)), t.style = st(l));
  }
  const i = Ke(e) ? 1 : B1(e) ? 128 : o1(e) ? 64 : Fe(e) ? 4 : Se(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Nu(e) {
  return e ? $u(e) || A1(e) ? Ct({}, e) : e : null;
}
function Wn(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? gt(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && F1(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ie(o) ? o.concat(js(t)) : [o, js(t)] : js(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== et ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wn(e.ssContent),
    ssFallback: e.ssFallback && Wn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Wo(
    f,
    l.clone(f)
  ), f;
}
function jr(e = " ", t = 0) {
  return xe(yo, null, e, t);
}
function wr(e, t) {
  const n = xe(Hs, null, e);
  return n.staticCount = t, n;
}
function _e(e = "", t = !1) {
  return t ? (_(), ue(Ot, null, e)) : xe(Ot, null, e);
}
function In(e) {
  return e == null || typeof e == "boolean" ? xe(Ot) : Ie(e) ? xe(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? dr(e) : xe(yo, null, String(e));
}
function dr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wn(e);
}
function Fu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ie(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Fu(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !A1(t) ? t._ctx = xt : s === 3 && xt && (xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Se(t) ? (t = { default: t, _ctx: xt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Q([t.class, r.class]));
      else if (s === "style")
        t.style = st([t.style, r.style]);
      else if (hi(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(Ie(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function $n(e, t, n, r = null) {
  wn(e, t, 7, [
    n,
    r
  ]);
}
const F4 = C1();
let q4 = 0;
function z4(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || F4, o = {
    uid: q4++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new vy(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: M1(r, s),
    emitsOptions: D1(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = L4.bind(null, o), e.ce && e.ce(o), o;
}
let Tt = null;
const _t = () => Tt || xt;
let ii, Zc;
{
  const e = bi(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  ii = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Tt = n
  ), Zc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jo = n
  );
}
const ls = (e) => {
  const t = Tt;
  return ii(e), e.scope.on(), () => {
    e.scope.off(), ii(t);
  };
}, ed = () => {
  Tt && Tt.scope.off(), ii(null);
};
function q1(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
function H4(e, t = !1, n = !1) {
  t && Zc(t);
  const { props: r, children: s } = e.vnode, o = q1(e);
  v4(e, r, o, t), w4(e, s, n);
  const i = o ? j4(e, t) : void 0;
  return t && Zc(!1), i;
}
function j4(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, c4);
  const { setup: r } = n;
  if (r) {
    _r();
    const s = e.setupContext = r.length > 1 ? H1(e) : null, o = ls(e), i = as(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = Ah(i);
    if (yr(), o(), (a || e.sp) && !ao(e) && d1(e), a) {
      if (i.then(ed, ed), t)
        return i.then((l) => {
          td(e, l);
        }).catch((l) => {
          ki(l, e, 0);
        });
      e.asyncDep = i;
    } else
      td(e, i);
  } else
    z1(e);
}
function td(e, t, n) {
  Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = Xh(t)), z1(e);
}
function z1(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const s = ls(e);
    _r();
    try {
      u4(e);
    } finally {
      yr(), s();
    }
  }
}
const V4 = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  }
};
function H1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, V4),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ti(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xh(Ny(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Fo)
        return Fo[n](e);
    },
    has(t, n) {
      return n in t || n in Fo;
    }
  })) : e.proxy;
}
function U4(e, t = !0) {
  return Se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function K4(e) {
  return Se(e) && "__vccOpts" in e;
}
const P = (e, t) => Vy(e, t, Jo);
function vn(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Fe(t) && !Ie(t) ? Xo(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Xo(n) && (n = [n]), xe(e, t, n));
}
const G4 = "3.5.13", W4 = Dt;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xc;
const nd = typeof window < "u" && window.trustedTypes;
if (nd)
  try {
    Xc = /* @__PURE__ */ nd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const j1 = Xc ? (e) => Xc.createHTML(e) : (e) => e, Z4 = "http://www.w3.org/2000/svg", X4 = "http://www.w3.org/1998/Math/MathML", qn = typeof document < "u" ? document : null, rd = qn && /* @__PURE__ */ qn.createElement("template"), J4 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? qn.createElementNS(Z4, e) : t === "mathml" ? qn.createElementNS(X4, e) : n ? qn.createElement(e, { is: n }) : qn.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => qn.createTextNode(e),
  createComment: (e) => qn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      rd.innerHTML = j1(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = rd.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ir = "transition", Eo = "animation", Yo = Symbol("_vtc"), V1 = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Y4 = /* @__PURE__ */ Ct(
  {},
  a1,
  V1
), Q4 = (e) => (e.displayName = "Transition", e.props = Y4, e), Vr = /* @__PURE__ */ Q4(
  (e, { slots: t }) => vn(e4, e3(e), t)
), Tr = (e, t = []) => {
  Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, od = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function e3(e) {
  const t = {};
  for (const B in e)
    B in V1 || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = i,
    appearToClass: f = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, v = t3(s), g = v && v[0], k = v && v[1], {
    onBeforeEnter: m,
    onEnter: x,
    onEnterCancelled: w,
    onLeave: y,
    onLeaveCancelled: S,
    onBeforeAppear: C = m,
    onAppear: $ = x,
    onAppearCancelled: M = w
  } = t, R = (B, oe, q, ie) => {
    B._enterCancelled = ie, Mr(B, oe ? f : a), Mr(B, oe ? u : i), q && q();
  }, D = (B, oe) => {
    B._isLeaving = !1, Mr(B, c), Mr(B, d), Mr(B, p), oe && oe();
  }, N = (B) => (oe, q) => {
    const ie = B ? $ : x, j = () => R(oe, B, q);
    Tr(ie, [oe, j]), sd(() => {
      Mr(oe, B ? l : o), Nn(oe, B ? f : a), od(ie) || id(oe, r, g, j);
    });
  };
  return Ct(t, {
    onBeforeEnter(B) {
      Tr(m, [B]), Nn(B, o), Nn(B, i);
    },
    onBeforeAppear(B) {
      Tr(C, [B]), Nn(B, l), Nn(B, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(B, oe) {
      B._isLeaving = !0;
      const q = () => D(B, oe);
      Nn(B, c), B._enterCancelled ? (Nn(B, p), cd()) : (cd(), Nn(B, p)), sd(() => {
        B._isLeaving && (Mr(B, c), Nn(B, d), od(y) || id(B, r, k, q));
      }), Tr(y, [B, q]);
    },
    onEnterCancelled(B) {
      R(B, !1, void 0, !0), Tr(w, [B]);
    },
    onAppearCancelled(B) {
      R(B, !0, void 0, !0), Tr(M, [B]);
    },
    onLeaveCancelled(B) {
      D(B), Tr(S, [B]);
    }
  });
}
function t3(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [la(e.enter), la(e.leave)];
  {
    const t = la(e);
    return [t, t];
  }
}
function la(e) {
  return uy(e);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yo] || (e[Yo] = /* @__PURE__ */ new Set())).add(t);
}
function Mr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Yo];
  n && (n.delete(t), n.size || (e[Yo] = void 0));
}
function sd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let n3 = 0;
function id(e, t, n, r) {
  const s = e._endId = ++n3, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = r3(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, p), o();
  }, p = (d) => {
    d.target === e && ++f >= l && c();
  };
  setTimeout(() => {
    f < l && c();
  }, a + 1), e.addEventListener(u, p);
}
function r3(e, t) {
  const n = window.getComputedStyle(e), r = (v) => (n[v] || "").split(", "), s = r(`${ir}Delay`), o = r(`${ir}Duration`), i = ad(s, o), a = r(`${Eo}Delay`), l = r(`${Eo}Duration`), u = ad(a, l);
  let f = null, c = 0, p = 0;
  t === ir ? i > 0 && (f = ir, c = i, p = o.length) : t === Eo ? u > 0 && (f = Eo, c = u, p = l.length) : (c = Math.max(i, u), f = c > 0 ? i > u ? ir : Eo : null, p = f ? f === ir ? o.length : l.length : 0);
  const d = f === ir && /\b(transform|all)(,|$)/.test(
    r(`${ir}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: p,
    hasTransform: d
  };
}
function ad(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ld(n) + ld(e[r])));
}
function ld(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function cd() {
  return document.body.offsetHeight;
}
function o3(e, t, n) {
  const r = e[Yo];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ai = Symbol("_vod"), U1 = Symbol("_vsh"), Zn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ai] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ao(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ao(e, !0), r.enter(e)) : r.leave(e, () => {
      Ao(e, !1);
    }) : Ao(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ao(e, t);
  }
};
function Ao(e, t) {
  e.style.display = t ? e[ai] : "none", e[U1] = !t;
}
const s3 = Symbol(""), i3 = /(^|;)\s*display\s*:/;
function a3(e, t, n) {
  const r = e.style, s = Ke(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Ke(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Vs(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Vs(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), Vs(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[s3];
      i && (n += ";" + i), r.cssText = n, o = i3.test(n);
    }
  } else t && e.removeAttribute("style");
  ai in e && (e[ai] = o ? r.display : "", e[U1] && (r.display = "none"));
}
const ud = /\s*!important$/;
function Vs(e, t, n) {
  if (Ie(n))
    n.forEach((r) => Vs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = l3(e, t);
    ud.test(n) ? e.setProperty(
      br(r),
      n.replace(ud, ""),
      "important"
    ) : e[r] = n;
  }
}
const fd = ["Webkit", "Moz", "ms"], ca = {};
function l3(e, t) {
  const n = ca[t];
  if (n)
    return n;
  let r = un(t);
  if (r !== "filter" && r in e)
    return ca[t] = r;
  r = vi(r);
  for (let s = 0; s < fd.length; s++) {
    const o = fd[s] + r;
    if (o in e)
      return ca[t] = o;
  }
  return t;
}
const dd = "http://www.w3.org/1999/xlink";
function pd(e, t, n, r, s, o = my(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dd, t.slice(6, t.length)) : e.setAttributeNS(dd, t, n) : n == null || o && !Lh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Yn(n) ? String(n) : n
  );
}
function hd(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? j1(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Lh(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function Qr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function c3(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const gd = Symbol("_vei");
function u3(e, t, n, r, s = null) {
  const o = e[gd] || (e[gd] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = f3(t);
    if (r) {
      const u = o[t] = h3(
        r,
        s
      );
      Qr(e, a, u, l);
    } else i && (c3(e, a, i, l), o[t] = void 0);
  }
}
const md = /(?:Once|Passive|Capture)$/;
function f3(e) {
  let t;
  if (md.test(e)) {
    t = {};
    let r;
    for (; r = e.match(md); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : br(e.slice(2)), t];
}
let ua = 0;
const d3 = /* @__PURE__ */ Promise.resolve(), p3 = () => ua || (d3.then(() => ua = 0), ua = Date.now());
function h3(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    wn(
      g3(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = p3(), n;
}
function g3(e, t) {
  if (Ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const vd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, m3 = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? o3(e, r, i) : t === "style" ? a3(e, n, r) : hi(t) ? yu(t) || u3(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : v3(e, t, r, i)) ? (hd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pd(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ke(r)) ? hd(e, un(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), pd(e, t, r, i));
};
function v3(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vd(t) && Se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return vd(t) && Ke(n) ? !1 : t in e;
}
function qu(e = "$style") {
  {
    const t = _t();
    if (!t)
      return tt;
    const n = t.type.__cssModules;
    if (!n)
      return tt;
    const r = n[e];
    return r || tt;
  }
}
const bd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ie(t) ? (n) => qs(t, n) : t;
};
function b3(e) {
  e.target.composing = !0;
}
function _d(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fa = Symbol("_assign"), K1 = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[fa] = bd(s);
    const o = r || s.props && s.props.type === "number";
    Qr(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = Nc(a)), e[fa](a);
    }), n && Qr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Qr(e, "compositionstart", b3), Qr(e, "compositionend", _d), Qr(e, "change", _d));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[fa] = bd(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Nc(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
  }
}, _3 = ["ctrl", "shift", "alt", "meta"], y3 = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => _3.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = y3[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  });
}, w3 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, zt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (s) => {
    if (!("key" in s))
      return;
    const o = br(s.key);
    if (t.some(
      (i) => i === o || w3[i] === o
    ))
      return e(s);
  });
}, k3 = /* @__PURE__ */ Ct({ patchProp: m3 }, J4);
let yd;
function x3() {
  return yd || (yd = x4(k3));
}
const C3 = (...e) => {
  const t = x3().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = E3(r);
    if (!s) return;
    const o = t._component;
    !Se(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, S3(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function S3(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function E3(e) {
  return Ke(e) ? document.querySelector(e) : e;
}
const To = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: !1,
  initialMessages: ["Hi there! ??", "My name is Nathan. How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! ??",
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question..",
      closeButtonTooltip: "Close chat"
    }
  },
  theme: {},
  enableStreaming: !1
}, A3 = "#n8n-chat", T3 = "n8n-chat", wd = `${T3}/sessionId`, G1 = "Chat", W1 = "ChatOptions";
var At = [];
for (var da = 0; da < 256; ++da)
  At.push((da + 256).toString(16).slice(1));
function M3(e, t = 0) {
  return (At[e[t + 0]] + At[e[t + 1]] + At[e[t + 2]] + At[e[t + 3]] + "-" + At[e[t + 4]] + At[e[t + 5]] + "-" + At[e[t + 6]] + At[e[t + 7]] + "-" + At[e[t + 8]] + At[e[t + 9]] + "-" + At[e[t + 10]] + At[e[t + 11]] + At[e[t + 12]] + At[e[t + 13]] + At[e[t + 14]] + At[e[t + 15]]).toLowerCase();
}
var Ss, $3 = new Uint8Array(16);
function L3() {
  if (!Ss && (Ss = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ss))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ss($3);
}
var I3 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const kd = {
  randomUUID: I3
};
function Nr(e, t, n) {
  if (kd.randomUUID && !e)
    return kd.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || L3)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, M3(r);
}
async function R3() {
  return "";
}
async function zu(...e) {
  var i, a;
  const t = await R3(), n = (i = e[1]) == null ? void 0 : i.body, r = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(a = e[1]) == null ? void 0 : a.headers
  };
  n instanceof FormData ? delete r["Content-Type"] : r["Content-Type"] = "application/json";
  const s = await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: r
  });
  let o;
  try {
    o = await s.clone().json();
  } catch {
    o = await s.text();
  }
  return o;
}
async function Z1(e, t = {}, n = {}) {
  let r = e;
  return Object.keys(t).length > 0 && (r = `${r}?${new URLSearchParams(
    t
  ).toString()}`), await zu(r, { ...n, method: "GET" });
}
async function X1(e, t = {}, n = {}) {
  return await zu(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function O3(e, t = {}, n = [], r = {}) {
  const s = new FormData();
  for (const o in t) {
    const i = t[o];
    typeof i == "object" && i !== null ? s.append(o, JSON.stringify(i)) : s.append(o, i);
  }
  for (const o of n)
    s.append("files", o);
  return await zu(e, {
    ...r,
    method: "POST",
    body: s
  });
}
async function P3(e, t) {
  var r, s;
  return await (((r = t.webhookConfig) == null ? void 0 : r.method) === "POST" ? X1 : Z1)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (s = t.webhookConfig) == null ? void 0 : s.headers
    }
  );
}
async function D3(e, t, n, r) {
  var o, i, a;
  return t.length > 0 ? await O3(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    t,
    {
      headers: (o = r.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = r.webhookConfig) == null ? void 0 : i.method) === "POST" ? X1 : Z1)(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    {
      headers: (a = r.webhookConfig) == null ? void 0 : a.headers
    }
  );
}
function B3() {
  let e = "";
  const t = new TextDecoder();
  return new TransformStream({
    transform(n, r) {
      e += t.decode(n, { stream: !0 });
      const s = e.split(`
`);
      e = s.pop() ?? "";
      for (const o of s)
        if (o.trim())
          try {
            const i = JSON.parse(o);
            r.enqueue(i);
          } catch {
            r.enqueue({
              type: "item",
              content: o
            });
          }
    },
    flush(n) {
      if (e.trim())
        try {
          const r = JSON.parse(e);
          n.enqueue(r);
        } catch {
          n.enqueue({
            type: "item",
            content: e
          });
        }
    }
  });
}
async function N3(e, t, n, r, s) {
  var l, u;
  const o = await (t.length > 0 ? F3(e, t, n, r) : q3(e, n, r));
  if (!o.ok) {
    const f = await o.text();
    throw console.error("HTTP error response:", o.status, f), new Error(`Error while sending message. Error: ${f}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(B3()).getReader();
  let a = !1;
  try {
    for (; ; ) {
      const { done: f, value: c } = await i.read();
      if (f) break;
      const p = ((l = c.metadata) == null ? void 0 : l.nodeId) || "unknown", d = (u = c.metadata) == null ? void 0 : u.runIndex;
      switch (c.type) {
        case "begin":
          s.onBeginMessage(p, d);
          break;
        case "item":
          a = !0, s.onChunk(c.content ?? "", p, d);
          break;
        case "end":
          s.onEndMessage(p, d);
          break;
        case "error":
          a = !0, s.onChunk(`Error: ${c.content ?? "Unknown error"}`, p, d), s.onEndMessage(p, d);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
  return { hasReceivedChunks: a };
}
async function F3(e, t, n, r) {
  var o;
  const s = new FormData();
  s.append("action", "sendMessage"), s.append(r.chatSessionKey, n), s.append(r.chatInputKey, e), r.metadata && s.append("metadata", JSON.stringify(r.metadata));
  for (const i of t)
    s.append("files", i);
  return await fetch(r.webhookUrl, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      ...(o = r.webhookConfig) == null ? void 0 : o.headers
    },
    body: s
  });
}
async function q3(e, t, n) {
  var s;
  const r = {
    action: "sendMessage",
    [n.chatSessionKey]: t,
    [n.chatInputKey]: e,
    ...n.metadata ? { metadata: n.metadata } : {}
  };
  return await fetch(n.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      ...(s = n.webhookConfig) == null ? void 0 : s.headers
    },
    body: JSON.stringify(r)
  });
}
function z3() {
  const e = /* @__PURE__ */ new Map();
  function t(s, o) {
    const i = e.get(s);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(s, o) {
    let i = e.get(s);
    return i ? i.push(o) : i = [o], e.set(s, i), () => t(s, o);
  }
  function r(s, o) {
    const i = e.get(s);
    i && i.slice().forEach(async (a) => {
      await a(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: r
  };
}
function H3(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function j3(e, t, n, r) {
  const s = new URL(e).origin, o = s.startsWith("https") ? "wss" : "ws";
  return `${s.replace(/^https?/, o)}/chat?sessionId=${n}&executionId=${t}&isPublic=true`;
}
const Vt = z3();
class V3 {
  constructor() {
    _s(this, "nodeRuns", /* @__PURE__ */ new Map());
    _s(this, "runOrder", []);
    _s(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const r = this.getRunKey(t, n);
    if (!this.nodeRuns.has(r)) {
      const s = uo();
      return this.nodeRuns.set(r, {
        content: "",
        isComplete: !1,
        message: s
      }), this.runOrder.push(r), s;
    }
    return this.nodeRuns.get(r).message;
  }
  registerRunStart(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.add(r);
  }
  addRunToActive(t, n) {
    const r = this.getRunKey(t, n);
    return this.activeRuns.add(r), this.initializeRun(t, n);
  }
  removeRunFromActive(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.delete(r);
    const s = this.nodeRuns.get(r);
    s && (s.isComplete = !0);
  }
  addChunkToRun(t, n, r) {
    const s = this.getRunKey(t, r), o = this.nodeRuns.get(s);
    if (o) {
      o.content += n;
      const i = {
        ...o.message,
        text: o.content
      };
      return o.message = i, i;
    }
    return null;
  }
  getRunMessage(t, n) {
    const r = this.getRunKey(t, n), s = this.nodeRuns.get(r);
    return (s == null ? void 0 : s.message) ?? null;
  }
  areAllRunsComplete() {
    return Array.from(this.nodeRuns.values()).every((t) => t.isComplete);
  }
  getRunCount() {
    return this.runOrder.length;
  }
  getActiveRunCount() {
    return this.activeRuns.size;
  }
  getAllMessages() {
    return this.runOrder.map((t) => {
      var n;
      return (n = this.nodeRuns.get(t)) == null ? void 0 : n.message;
    }).filter((t) => t !== void 0);
  }
  reset() {
    this.nodeRuns.clear(), this.runOrder = [], this.activeRuns.clear();
  }
}
function uo(e) {
  return {
    id: e ?? Nr(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function xd(e, t, n) {
  const r = e.findIndex((s) => s.id === t);
  if (r === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[r] = n;
}
function U3(e, t, n, r, s, o) {
  try {
    if (e === "")
      return;
    if (t) {
      let i = n.getRunMessage(t, o);
      i || (i = n.addRunToActive(t, o), s.value.push(i));
      const a = n.addChunkToRun(t, e, o);
      a && xd(s.value, a.id, a);
    } else {
      r.value || (r.value = uo(), s.value.push(r.value));
      const i = {
        ...r.value,
        text: r.value.text + e
      };
      xd(s.value, r.value.id, i), r.value = i;
    }
    Ue(() => {
      Vt.emit("scrollToBottom");
    });
  } catch (i) {
    console.error("Error handling stream chunk:", i);
  }
}
function K3(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (r) {
    console.error("Error handling node start:", r);
  }
}
function G3(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (r) {
    console.error("Error handling node complete:", r);
  }
}
function W3(e, t = []) {
  return {
    id: Nr(),
    text: e,
    sender: "user",
    files: t
  };
}
function Z3(e) {
  let t = e.output ?? e.text ?? e.message ?? "";
  if (t === "" && Object.keys(e).length > 0)
    try {
      t = JSON.stringify(e, null, 2);
    } catch {
    }
  return t;
}
function X3(e) {
  const { receivedMessage: t, messages: n } = e;
  t.value && n.value.some(
    (s) => s.sender === "bot" && "text" in s && s.text.trim().length > 0
  ) || (t.value = uo(), n.value.push(t.value)), t.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function J3(e) {
  const { error: t, receivedMessage: n, messages: r } = e;
  n.value ?? (n.value = uo()), n.value.text = "Error: Failed to receive response", r.value.includes(n.value) || r.value.push(n.value), console.error("Chat API error:", t);
}
async function Y3(e) {
  const { text: t, files: n, sessionId: r, options: s, messages: o, receivedMessage: i, streamingManager: a } = e, l = {
    onChunk: (f, c, p) => {
      U3(f, c, a, i, o, p);
    },
    onBeginMessage: (f, c) => {
      K3(f, a, c);
    },
    onEndMessage: (f, c) => {
      G3(f, a, c);
    }
  }, { hasReceivedChunks: u } = await N3(
    t,
    n,
    r,
    s,
    l
  );
  u || X3({ receivedMessage: i, messages: o });
}
async function Q3(e) {
  const { text: t, files: n, sessionId: r, options: s } = e, o = await D3(t, n, r, s);
  if (o != null && o.executionStarted)
    return { response: o };
  const i = uo();
  return i.text = Z3(o), { botMessage: i };
}
const ew = {
  install(e, t) {
    e.provide(W1, t);
    const n = G([]), r = G(null), s = G(!1), o = P(
      () => (t.initialMessages ?? []).map((f) => ({
        id: Nr(),
        text: f,
        sender: "bot"
      }))
    );
    async function i(f, c = []) {
      var g;
      const p = W3(f, c);
      n.value.push(p), s.value = !0, Ue(() => {
        Vt.emit("scrollToBottom");
      });
      const d = G(null), v = new V3();
      try {
        if (t != null && t.enableStreaming)
          await Y3({
            text: f,
            files: c,
            sessionId: r.value,
            options: t,
            messages: n,
            receivedMessage: d,
            streamingManager: v
          });
        else {
          const k = await Q3({
            text: f,
            files: c,
            sessionId: r.value,
            options: t
          });
          if ((g = k.response) != null && g.executionStarted)
            return s.value = !1, k.response;
          k.botMessage && (d.value = k.botMessage, n.value.push(k.botMessage));
        }
      } catch (k) {
        J3({ error: k, receivedMessage: d, messages: n });
      } finally {
        s.value = !1;
      }
      return Ue(() => {
        Vt.emit("scrollToBottom");
      }), null;
    }
    async function a() {
      if (!t.loadPreviousSession)
        return;
      const f = localStorage.getItem(wd) ?? Nr(), c = await P3(f, t);
      return n.value = ((c == null ? void 0 : c.data) || []).map((p, d) => ({
        id: `${d}`,
        text: p.kwargs.content,
        sender: p.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (r.value = f), f;
    }
    async function l() {
      r.value = Nr(), localStorage.setItem(wd, r.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: r,
      waitingForResponse: s,
      loadPreviousSession: a,
      startNewSession: l,
      sendMessage: i
    };
    e.provide(G1, u), e.config.globalProperties.$chat = u;
  }
};
var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pa, Cd;
function tw() {
  if (Cd) return pa;
  Cd = 1;
  function e(E) {
    return E instanceof Map ? E.clear = E.delete = E.set = function() {
      throw new Error("map is read-only");
    } : E instanceof Set && (E.add = E.clear = E.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(E), Object.getOwnPropertyNames(E).forEach((O) => {
      const W = E[O], ke = typeof W;
      (ke === "object" || ke === "function") && !Object.isFrozen(W) && e(W);
    }), E;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(O) {
      O.data === void 0 && (O.data = {}), this.data = O.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(E) {
    return E.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(E, ...O) {
    const W = /* @__PURE__ */ Object.create(null);
    for (const ke in E)
      W[ke] = E[ke];
    return O.forEach(function(ke) {
      for (const He in ke)
        W[He] = ke[He];
    }), /** @type {T} */
    W;
  }
  const s = "</span>", o = (E) => !!E.scope, i = (E, { prefix: O }) => {
    if (E.startsWith("language:"))
      return E.replace("language:", "language-");
    if (E.includes(".")) {
      const W = E.split(".");
      return [
        `${O}${W.shift()}`,
        ...W.map((ke, He) => `${ke}${"_".repeat(He + 1)}`)
      ].join(" ");
    }
    return `${O}${E}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(O, W) {
      this.buffer = "", this.classPrefix = W.classPrefix, O.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(O) {
      this.buffer += n(O);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(O) {
      if (!o(O)) return;
      const W = i(
        O.scope,
        { prefix: this.classPrefix }
      );
      this.span(W);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(O) {
      o(O) && (this.buffer += s);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(O) {
      this.buffer += `<span class="${O}">`;
    }
  }
  const l = (E = {}) => {
    const O = { children: [] };
    return Object.assign(O, E), O;
  };
  class u {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(O) {
      this.top.children.push(O);
    }
    /** @param {string} scope */
    openNode(O) {
      const W = l({ scope: O });
      this.add(W), this.stack.push(W);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(O) {
      return this.constructor._walk(O, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(O, W) {
      return typeof W == "string" ? O.addText(W) : W.children && (O.openNode(W), W.children.forEach((ke) => this._walk(O, ke)), O.closeNode(W)), O;
    }
    /**
     * @param {Node} node
     */
    static _collapse(O) {
      typeof O != "string" && O.children && (O.children.every((W) => typeof W == "string") ? O.children = [O.children.join("")] : O.children.forEach((W) => {
        u._collapse(W);
      }));
    }
  }
  class f extends u {
    /**
     * @param {*} options
     */
    constructor(O) {
      super(), this.options = O;
    }
    /**
     * @param {string} text
     */
    addText(O) {
      O !== "" && this.add(O);
    }
    /** @param {string} scope */
    startScope(O) {
      this.openNode(O);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(O, W) {
      const ke = O.root;
      W && (ke.scope = `language:${W}`), this.add(ke);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function c(E) {
    return E ? typeof E == "string" ? E : E.source : null;
  }
  function p(E) {
    return g("(?=", E, ")");
  }
  function d(E) {
    return g("(?:", E, ")*");
  }
  function v(E) {
    return g("(?:", E, ")?");
  }
  function g(...E) {
    return E.map((W) => c(W)).join("");
  }
  function k(E) {
    const O = E[E.length - 1];
    return typeof O == "object" && O.constructor === Object ? (E.splice(E.length - 1, 1), O) : {};
  }
  function m(...E) {
    return "(" + (k(E).capture ? "" : "?:") + E.map((ke) => c(ke)).join("|") + ")";
  }
  function x(E) {
    return new RegExp(E.toString() + "|").exec("").length - 1;
  }
  function w(E, O) {
    const W = E && E.exec(O);
    return W && W.index === 0;
  }
  const y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function S(E, { joinWith: O }) {
    let W = 0;
    return E.map((ke) => {
      W += 1;
      const He = W;
      let We = c(ke), be = "";
      for (; We.length > 0; ) {
        const de = y.exec(We);
        if (!de) {
          be += We;
          break;
        }
        be += We.substring(0, de.index), We = We.substring(de.index + de[0].length), de[0][0] === "\\" && de[1] ? be += "\\" + String(Number(de[1]) + He) : (be += de[0], de[0] === "(" && W++);
      }
      return be;
    }).map((ke) => `(${ke})`).join(O);
  }
  const C = /\b\B/, $ = "[a-zA-Z]\\w*", M = "[a-zA-Z_]\\w*", R = "\\b\\d+(\\.\\d+)?", D = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", N = "\\b(0b[01]+)", B = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", oe = (E = {}) => {
    const O = /^#![ ]*\//;
    return E.binary && (E.begin = g(
      O,
      /.*\b/,
      E.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: O,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (W, ke) => {
        W.index !== 0 && ke.ignoreMatch();
      }
    }, E);
  }, q = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, ie = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [q]
  }, j = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [q]
  }, V = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(E, O, W = {}) {
    const ke = r(
      {
        scope: "comment",
        begin: E,
        end: O,
        contains: []
      },
      W
    );
    ke.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const He = m(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return ke.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          He,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ke;
  }, Y = H("//", "$"), I = H("/\\*", "\\*/"), Z = H("#", "$"), K = {
    scope: "number",
    begin: R,
    relevance: 0
  }, me = {
    scope: "number",
    begin: D,
    relevance: 0
  }, Ee = {
    scope: "number",
    begin: N,
    relevance: 0
  }, Oe = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      q,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [q]
      }
    ]
  }, Pe = {
    scope: "title",
    begin: $,
    relevance: 0
  }, Ge = {
    scope: "title",
    begin: M,
    relevance: 0
  }, ze = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + M,
    relevance: 0
  };
  var pe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ie,
    BACKSLASH_ESCAPE: q,
    BINARY_NUMBER_MODE: Ee,
    BINARY_NUMBER_RE: N,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: I,
    C_LINE_COMMENT_MODE: Y,
    C_NUMBER_MODE: me,
    C_NUMBER_RE: D,
    END_SAME_AS_BEGIN: function(E) {
      return Object.assign(
        E,
        {
          /** @type {ModeCallback} */
          "on:begin": (O, W) => {
            W.data._beginMatch = O[1];
          },
          /** @type {ModeCallback} */
          "on:end": (O, W) => {
            W.data._beginMatch !== O[1] && W.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Z,
    IDENT_RE: $,
    MATCH_NOTHING_RE: C,
    METHOD_GUARD: ze,
    NUMBER_MODE: K,
    NUMBER_RE: R,
    PHRASAL_WORDS_MODE: V,
    QUOTE_STRING_MODE: j,
    REGEXP_MODE: Oe,
    RE_STARTERS_RE: B,
    SHEBANG: oe,
    TITLE_MODE: Pe,
    UNDERSCORE_IDENT_RE: M,
    UNDERSCORE_TITLE_MODE: Ge
  });
  function Me(E, O) {
    E.input[E.index - 1] === "." && O.ignoreMatch();
  }
  function T(E, O) {
    E.className !== void 0 && (E.scope = E.className, delete E.className);
  }
  function L(E, O) {
    O && E.beginKeywords && (E.begin = "\\b(" + E.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", E.__beforeBegin = Me, E.keywords = E.keywords || E.beginKeywords, delete E.beginKeywords, E.relevance === void 0 && (E.relevance = 0));
  }
  function z(E, O) {
    Array.isArray(E.illegal) && (E.illegal = m(...E.illegal));
  }
  function J(E, O) {
    if (E.match) {
      if (E.begin || E.end) throw new Error("begin & end are not supported with match");
      E.begin = E.match, delete E.match;
    }
  }
  function X(E, O) {
    E.relevance === void 0 && (E.relevance = 1);
  }
  const ee = (E, O) => {
    if (!E.beforeMatch) return;
    if (E.starts) throw new Error("beforeMatch cannot be used with starts");
    const W = Object.assign({}, E);
    Object.keys(E).forEach((ke) => {
      delete E[ke];
    }), E.keywords = W.keywords, E.begin = g(W.beforeMatch, p(W.begin)), E.starts = {
      relevance: 0,
      contains: [
        Object.assign(W, { endsParent: !0 })
      ]
    }, E.relevance = 0, delete W.beforeMatch;
  }, ae = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], se = "keyword";
  function ne(E, O, W = se) {
    const ke = /* @__PURE__ */ Object.create(null);
    return typeof E == "string" ? He(W, E.split(" ")) : Array.isArray(E) ? He(W, E) : Object.keys(E).forEach(function(We) {
      Object.assign(
        ke,
        ne(E[We], O, We)
      );
    }), ke;
    function He(We, be) {
      O && (be = be.map((de) => de.toLowerCase())), be.forEach(function(de) {
        const Le = de.split("|");
        ke[Le[0]] = [We, te(Le[0], Le[1])];
      });
    }
  }
  function te(E, O) {
    return O ? Number(O) : ye(E) ? 0 : 1;
  }
  function ye(E) {
    return ae.includes(E.toLowerCase());
  }
  const fe = {}, ve = (E) => {
    console.error(E);
  }, U = (E, ...O) => {
    console.log(`WARN: ${E}`, ...O);
  }, ce = (E, O) => {
    fe[`${E}/${O}`] || (console.log(`Deprecated as of ${E}. ${O}`), fe[`${E}/${O}`] = !0);
  }, Ae = new Error();
  function Re(E, O, { key: W }) {
    let ke = 0;
    const He = E[W], We = {}, be = {};
    for (let de = 1; de <= O.length; de++)
      be[de + ke] = He[de], We[de + ke] = !0, ke += x(O[de - 1]);
    E[W] = be, E[W]._emit = We, E[W]._multi = !0;
  }
  function ut(E) {
    if (Array.isArray(E.begin)) {
      if (E.skip || E.excludeBegin || E.returnBegin)
        throw ve("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ae;
      if (typeof E.beginScope != "object" || E.beginScope === null)
        throw ve("beginScope must be object"), Ae;
      Re(E, E.begin, { key: "beginScope" }), E.begin = S(E.begin, { joinWith: "" });
    }
  }
  function ht(E) {
    if (Array.isArray(E.end)) {
      if (E.skip || E.excludeEnd || E.returnEnd)
        throw ve("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ae;
      if (typeof E.endScope != "object" || E.endScope === null)
        throw ve("endScope must be object"), Ae;
      Re(E, E.end, { key: "endScope" }), E.end = S(E.end, { joinWith: "" });
    }
  }
  function kt(E) {
    E.scope && typeof E.scope == "object" && E.scope !== null && (E.beginScope = E.scope, delete E.scope);
  }
  function St(E) {
    kt(E), typeof E.beginScope == "string" && (E.beginScope = { _wrap: E.beginScope }), typeof E.endScope == "string" && (E.endScope = { _wrap: E.endScope }), ut(E), ht(E);
  }
  function pn(E) {
    function O(be, de) {
      return new RegExp(
        c(be),
        "m" + (E.case_insensitive ? "i" : "") + (E.unicodeRegex ? "u" : "") + (de ? "g" : "")
      );
    }
    class W {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(de, Le) {
        Le.position = this.position++, this.matchIndexes[this.matchAt] = Le, this.regexes.push([Le, de]), this.matchAt += x(de) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const de = this.regexes.map((Le) => Le[1]);
        this.matcherRe = O(S(de, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(de) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Le = this.matcherRe.exec(de);
        if (!Le)
          return null;
        const yt = Le.findIndex((Yt, Wi) => Wi > 0 && Yt !== void 0), Ze = this.matchIndexes[yt];
        return Le.splice(0, yt), Object.assign(Le, Ze);
      }
    }
    class ke {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(de) {
        if (this.multiRegexes[de]) return this.multiRegexes[de];
        const Le = new W();
        return this.rules.slice(de).forEach(([yt, Ze]) => Le.addRule(yt, Ze)), Le.compile(), this.multiRegexes[de] = Le, Le;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(de, Le) {
        this.rules.push([de, Le]), Le.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(de) {
        const Le = this.getMatcher(this.regexIndex);
        Le.lastIndex = this.lastIndex;
        let yt = Le.exec(de);
        if (this.resumingScanAtSamePosition() && !(yt && yt.index === this.lastIndex)) {
          const Ze = this.getMatcher(0);
          Ze.lastIndex = this.lastIndex + 1, yt = Ze.exec(de);
        }
        return yt && (this.regexIndex += yt.position + 1, this.regexIndex === this.count && this.considerAll()), yt;
      }
    }
    function He(be) {
      const de = new ke();
      return be.contains.forEach((Le) => de.addRule(Le.begin, { rule: Le, type: "begin" })), be.terminatorEnd && de.addRule(be.terminatorEnd, { type: "end" }), be.illegal && de.addRule(be.illegal, { type: "illegal" }), de;
    }
    function We(be, de) {
      const Le = (
        /** @type CompiledMode */
        be
      );
      if (be.isCompiled) return Le;
      [
        T,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        J,
        St,
        ee
      ].forEach((Ze) => Ze(be, de)), E.compilerExtensions.forEach((Ze) => Ze(be, de)), be.__beforeBegin = null, [
        L,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        z,
        // default to 1 relevance if not specified
        X
      ].forEach((Ze) => Ze(be, de)), be.isCompiled = !0;
      let yt = null;
      return typeof be.keywords == "object" && be.keywords.$pattern && (be.keywords = Object.assign({}, be.keywords), yt = be.keywords.$pattern, delete be.keywords.$pattern), yt = yt || /\w+/, be.keywords && (be.keywords = ne(be.keywords, E.case_insensitive)), Le.keywordPatternRe = O(yt, !0), de && (be.begin || (be.begin = /\B|\b/), Le.beginRe = O(Le.begin), !be.end && !be.endsWithParent && (be.end = /\B|\b/), be.end && (Le.endRe = O(Le.end)), Le.terminatorEnd = c(Le.end) || "", be.endsWithParent && de.terminatorEnd && (Le.terminatorEnd += (be.end ? "|" : "") + de.terminatorEnd)), be.illegal && (Le.illegalRe = O(
        /** @type {RegExp | string} */
        be.illegal
      )), be.contains || (be.contains = []), be.contains = [].concat(...be.contains.map(function(Ze) {
        return mt(Ze === "self" ? be : Ze);
      })), be.contains.forEach(function(Ze) {
        We(
          /** @type Mode */
          Ze,
          Le
        );
      }), be.starts && We(be.starts, de), Le.matcher = He(Le), Le;
    }
    if (E.compilerExtensions || (E.compilerExtensions = []), E.contains && E.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return E.classNameAliases = r(E.classNameAliases || {}), We(
      /** @type Mode */
      E
    );
  }
  function sn(E) {
    return E ? E.endsWithParent || sn(E.starts) : !1;
  }
  function mt(E) {
    return E.variants && !E.cachedVariants && (E.cachedVariants = E.variants.map(function(O) {
      return r(E, { variants: null }, O);
    })), E.cachedVariants ? E.cachedVariants : sn(E) ? r(E, { starts: E.starts ? r(E.starts) : null }) : Object.isFrozen(E) ? r(E) : E;
  }
  var $t = "11.11.1";
  class An extends Error {
    constructor(O, W) {
      super(O), this.name = "HTMLInjectionError", this.html = W;
    }
  }
  const nr = n, Gr = r, Cr = Symbol("nomatch"), xo = 7, Wr = function(E) {
    const O = /* @__PURE__ */ Object.create(null), W = /* @__PURE__ */ Object.create(null), ke = [];
    let He = !0;
    const We = "Could not find the language '{}', did you forget to load/include a language module?", be = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let de = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: f
    };
    function Le(le) {
      return de.noHighlightRe.test(le);
    }
    function yt(le) {
      let $e = le.className + " ";
      $e += le.parentNode ? le.parentNode.className : "";
      const Ve = de.languageDetectRe.exec($e);
      if (Ve) {
        const at = rr(Ve[1]);
        return at || (U(We.replace("{}", Ve[1])), U("Falling back to no-highlight mode for this block.", le)), at ? Ve[1] : "no-highlight";
      }
      return $e.split(/\s+/).find((at) => Le(at) || rr(at));
    }
    function Ze(le, $e, Ve) {
      let at = "", wt = "";
      typeof $e == "object" ? (at = le, Ve = $e.ignoreIllegals, wt = $e.language) : (ce("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ce("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), wt = le, at = $e), Ve === void 0 && (Ve = !0);
      const hn = {
        code: at,
        language: wt
      };
      gs("before:highlight", hn);
      const or = hn.result ? hn.result : Yt(hn.language, hn.code, Ve);
      return or.code = hn.code, gs("after:highlight", or), or;
    }
    function Yt(le, $e, Ve, at) {
      const wt = /* @__PURE__ */ Object.create(null);
      function hn(ge, Ce) {
        return ge.keywords[Ce];
      }
      function or() {
        if (!De.keywords) {
          Et.addText(lt);
          return;
        }
        let ge = 0;
        De.keywordPatternRe.lastIndex = 0;
        let Ce = De.keywordPatternRe.exec(lt), Ne = "";
        for (; Ce; ) {
          Ne += lt.substring(ge, Ce.index);
          const rt = Mn.case_insensitive ? Ce[0].toLowerCase() : Ce[0], Lt = hn(De, rt);
          if (Lt) {
            const [Dn, ny] = Lt;
            if (Et.addText(Ne), Ne = "", wt[rt] = (wt[rt] || 0) + 1, wt[rt] <= xo && (bs += ny), Dn.startsWith("_"))
              Ne += Ce[0];
            else {
              const ry = Mn.classNameAliases[Dn] || Dn;
              Tn(Ce[0], ry);
            }
          } else
            Ne += Ce[0];
          ge = De.keywordPatternRe.lastIndex, Ce = De.keywordPatternRe.exec(lt);
        }
        Ne += lt.substring(ge), Et.addText(Ne);
      }
      function ms() {
        if (lt === "") return;
        let ge = null;
        if (typeof De.subLanguage == "string") {
          if (!O[De.subLanguage]) {
            Et.addText(lt);
            return;
          }
          ge = Yt(De.subLanguage, lt, !0, Pf[De.subLanguage]), Pf[De.subLanguage] = /** @type {CompiledMode} */
          ge._top;
        } else
          ge = Zi(lt, De.subLanguage.length ? De.subLanguage : null);
        De.relevance > 0 && (bs += ge.relevance), Et.__addSublanguage(ge._emitter, ge.language);
      }
      function Qt() {
        De.subLanguage != null ? ms() : or(), lt = "";
      }
      function Tn(ge, Ce) {
        ge !== "" && (Et.startScope(Ce), Et.addText(ge), Et.endScope());
      }
      function Lf(ge, Ce) {
        let Ne = 1;
        const rt = Ce.length - 1;
        for (; Ne <= rt; ) {
          if (!ge._emit[Ne]) {
            Ne++;
            continue;
          }
          const Lt = Mn.classNameAliases[ge[Ne]] || ge[Ne], Dn = Ce[Ne];
          Lt ? Tn(Dn, Lt) : (lt = Dn, or(), lt = ""), Ne++;
        }
      }
      function If(ge, Ce) {
        return ge.scope && typeof ge.scope == "string" && Et.openNode(Mn.classNameAliases[ge.scope] || ge.scope), ge.beginScope && (ge.beginScope._wrap ? (Tn(lt, Mn.classNameAliases[ge.beginScope._wrap] || ge.beginScope._wrap), lt = "") : ge.beginScope._multi && (Lf(ge.beginScope, Ce), lt = "")), De = Object.create(ge, { parent: { value: De } }), De;
      }
      function Rf(ge, Ce, Ne) {
        let rt = w(ge.endRe, Ne);
        if (rt) {
          if (ge["on:end"]) {
            const Lt = new t(ge);
            ge["on:end"](Ce, Lt), Lt.isMatchIgnored && (rt = !1);
          }
          if (rt) {
            for (; ge.endsParent && ge.parent; )
              ge = ge.parent;
            return ge;
          }
        }
        if (ge.endsWithParent)
          return Rf(ge.parent, Ce, Ne);
      }
      function J_(ge) {
        return De.matcher.regexIndex === 0 ? (lt += ge[0], 1) : (Qi = !0, 0);
      }
      function Y_(ge) {
        const Ce = ge[0], Ne = ge.rule, rt = new t(Ne), Lt = [Ne.__beforeBegin, Ne["on:begin"]];
        for (const Dn of Lt)
          if (Dn && (Dn(ge, rt), rt.isMatchIgnored))
            return J_(Ce);
        return Ne.skip ? lt += Ce : (Ne.excludeBegin && (lt += Ce), Qt(), !Ne.returnBegin && !Ne.excludeBegin && (lt = Ce)), If(Ne, ge), Ne.returnBegin ? 0 : Ce.length;
      }
      function Q_(ge) {
        const Ce = ge[0], Ne = $e.substring(ge.index), rt = Rf(De, ge, Ne);
        if (!rt)
          return Cr;
        const Lt = De;
        De.endScope && De.endScope._wrap ? (Qt(), Tn(Ce, De.endScope._wrap)) : De.endScope && De.endScope._multi ? (Qt(), Lf(De.endScope, ge)) : Lt.skip ? lt += Ce : (Lt.returnEnd || Lt.excludeEnd || (lt += Ce), Qt(), Lt.excludeEnd && (lt = Ce));
        do
          De.scope && Et.closeNode(), !De.skip && !De.subLanguage && (bs += De.relevance), De = De.parent;
        while (De !== rt.parent);
        return rt.starts && If(rt.starts, ge), Lt.returnEnd ? 0 : Ce.length;
      }
      function ey() {
        const ge = [];
        for (let Ce = De; Ce !== Mn; Ce = Ce.parent)
          Ce.scope && ge.unshift(Ce.scope);
        ge.forEach((Ce) => Et.openNode(Ce));
      }
      let vs = {};
      function Of(ge, Ce) {
        const Ne = Ce && Ce[0];
        if (lt += ge, Ne == null)
          return Qt(), 0;
        if (vs.type === "begin" && Ce.type === "end" && vs.index === Ce.index && Ne === "") {
          if (lt += $e.slice(Ce.index, Ce.index + 1), !He) {
            const rt = new Error(`0 width match regex (${le})`);
            throw rt.languageName = le, rt.badRule = vs.rule, rt;
          }
          return 1;
        }
        if (vs = Ce, Ce.type === "begin")
          return Y_(Ce);
        if (Ce.type === "illegal" && !Ve) {
          const rt = new Error('Illegal lexeme "' + Ne + '" for mode "' + (De.scope || "<unnamed>") + '"');
          throw rt.mode = De, rt;
        } else if (Ce.type === "end") {
          const rt = Q_(Ce);
          if (rt !== Cr)
            return rt;
        }
        if (Ce.type === "illegal" && Ne === "")
          return lt += `
`, 1;
        if (Yi > 1e5 && Yi > Ce.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return lt += Ne, Ne.length;
      }
      const Mn = rr(le);
      if (!Mn)
        throw ve(We.replace("{}", le)), new Error('Unknown language: "' + le + '"');
      const ty = pn(Mn);
      let Ji = "", De = at || ty;
      const Pf = {}, Et = new de.__emitter(de);
      ey();
      let lt = "", bs = 0, Sr = 0, Yi = 0, Qi = !1;
      try {
        if (Mn.__emitTokens)
          Mn.__emitTokens($e, Et);
        else {
          for (De.matcher.considerAll(); ; ) {
            Yi++, Qi ? Qi = !1 : De.matcher.considerAll(), De.matcher.lastIndex = Sr;
            const ge = De.matcher.exec($e);
            if (!ge) break;
            const Ce = $e.substring(Sr, ge.index), Ne = Of(Ce, ge);
            Sr = ge.index + Ne;
          }
          Of($e.substring(Sr));
        }
        return Et.finalize(), Ji = Et.toHTML(), {
          language: le,
          value: Ji,
          relevance: bs,
          illegal: !1,
          _emitter: Et,
          _top: De
        };
      } catch (ge) {
        if (ge.message && ge.message.includes("Illegal"))
          return {
            language: le,
            value: nr($e),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ge.message,
              index: Sr,
              context: $e.slice(Sr - 100, Sr + 100),
              mode: ge.mode,
              resultSoFar: Ji
            },
            _emitter: Et
          };
        if (He)
          return {
            language: le,
            value: nr($e),
            illegal: !1,
            relevance: 0,
            errorRaised: ge,
            _emitter: Et,
            _top: De
          };
        throw ge;
      }
    }
    function Wi(le) {
      const $e = {
        value: nr(le),
        illegal: !1,
        relevance: 0,
        _top: be,
        _emitter: new de.__emitter(de)
      };
      return $e._emitter.addText(le), $e;
    }
    function Zi(le, $e) {
      $e = $e || de.languages || Object.keys(O);
      const Ve = Wi(le), at = $e.filter(rr).filter($f).map(
        (Qt) => Yt(Qt, le, !1)
      );
      at.unshift(Ve);
      const wt = at.sort((Qt, Tn) => {
        if (Qt.relevance !== Tn.relevance) return Tn.relevance - Qt.relevance;
        if (Qt.language && Tn.language) {
          if (rr(Qt.language).supersetOf === Tn.language)
            return 1;
          if (rr(Tn.language).supersetOf === Qt.language)
            return -1;
        }
        return 0;
      }), [hn, or] = wt, ms = hn;
      return ms.secondBest = or, ms;
    }
    function q_(le, $e, Ve) {
      const at = $e && W[$e] || Ve;
      le.classList.add("hljs"), le.classList.add(`language-${at}`);
    }
    function Xi(le) {
      let $e = null;
      const Ve = yt(le);
      if (Le(Ve)) return;
      if (gs(
        "before:highlightElement",
        { el: le, language: Ve }
      ), le.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", le);
        return;
      }
      if (le.children.length > 0 && (de.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(le)), de.throwUnescapedHTML))
        throw new An(
          "One of your code blocks includes unescaped HTML.",
          le.innerHTML
        );
      $e = le;
      const at = $e.textContent, wt = Ve ? Ze(at, { language: Ve, ignoreIllegals: !0 }) : Zi(at);
      le.innerHTML = wt.value, le.dataset.highlighted = "yes", q_(le, Ve, wt.language), le.result = {
        language: wt.language,
        // TODO: remove with version 11.0
        re: wt.relevance,
        relevance: wt.relevance
      }, wt.secondBest && (le.secondBest = {
        language: wt.secondBest.language,
        relevance: wt.secondBest.relevance
      }), gs("after:highlightElement", { el: le, result: wt, text: at });
    }
    function z_(le) {
      de = Gr(de, le);
    }
    const H_ = () => {
      hs(), ce("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function j_() {
      hs(), ce("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Tf = !1;
    function hs() {
      function le() {
        hs();
      }
      if (document.readyState === "loading") {
        Tf || window.addEventListener("DOMContentLoaded", le, !1), Tf = !0;
        return;
      }
      document.querySelectorAll(de.cssSelector).forEach(Xi);
    }
    function V_(le, $e) {
      let Ve = null;
      try {
        Ve = $e(E);
      } catch (at) {
        if (ve("Language definition for '{}' could not be registered.".replace("{}", le)), He)
          ve(at);
        else
          throw at;
        Ve = be;
      }
      Ve.name || (Ve.name = le), O[le] = Ve, Ve.rawDefinition = $e.bind(null, E), Ve.aliases && Mf(Ve.aliases, { languageName: le });
    }
    function U_(le) {
      delete O[le];
      for (const $e of Object.keys(W))
        W[$e] === le && delete W[$e];
    }
    function K_() {
      return Object.keys(O);
    }
    function rr(le) {
      return le = (le || "").toLowerCase(), O[le] || O[W[le]];
    }
    function Mf(le, { languageName: $e }) {
      typeof le == "string" && (le = [le]), le.forEach((Ve) => {
        W[Ve.toLowerCase()] = $e;
      });
    }
    function $f(le) {
      const $e = rr(le);
      return $e && !$e.disableAutodetect;
    }
    function G_(le) {
      le["before:highlightBlock"] && !le["before:highlightElement"] && (le["before:highlightElement"] = ($e) => {
        le["before:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      }), le["after:highlightBlock"] && !le["after:highlightElement"] && (le["after:highlightElement"] = ($e) => {
        le["after:highlightBlock"](
          Object.assign({ block: $e.el }, $e)
        );
      });
    }
    function W_(le) {
      G_(le), ke.push(le);
    }
    function Z_(le) {
      const $e = ke.indexOf(le);
      $e !== -1 && ke.splice($e, 1);
    }
    function gs(le, $e) {
      const Ve = le;
      ke.forEach(function(at) {
        at[Ve] && at[Ve]($e);
      });
    }
    function X_(le) {
      return ce("10.7.0", "highlightBlock will be removed entirely in v12.0"), ce("10.7.0", "Please use highlightElement now."), Xi(le);
    }
    Object.assign(E, {
      highlight: Ze,
      highlightAuto: Zi,
      highlightAll: hs,
      highlightElement: Xi,
      // TODO: Remove with v12 API
      highlightBlock: X_,
      configure: z_,
      initHighlighting: H_,
      initHighlightingOnLoad: j_,
      registerLanguage: V_,
      unregisterLanguage: U_,
      listLanguages: K_,
      getLanguage: rr,
      registerAliases: Mf,
      autoDetection: $f,
      inherit: Gr,
      addPlugin: W_,
      removePlugin: Z_
    }), E.debugMode = function() {
      He = !1;
    }, E.safeMode = function() {
      He = !0;
    }, E.versionString = $t, E.regex = {
      concat: g,
      lookahead: p,
      either: m,
      optional: v,
      anyNumberOfTimes: d
    };
    for (const le in pe)
      typeof pe[le] == "object" && e(pe[le]);
    return Object.assign(E, pe), E;
  }, F = Wr({});
  return F.newInstance = () => Wr({}), pa = F, F.HighlightJS = F, F.default = F, pa;
}
var nw = /* @__PURE__ */ tw();
const zn = /* @__PURE__ */ Hu(nw), Sd = "[A-Za-z$_][0-9A-Za-z$_]*", rw = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], ow = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], J1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Y1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Q1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], sw = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], iw = [].concat(
  Q1,
  J1,
  Y1
);
function eg(e) {
  const t = e.regex, n = (H, { after: Y }) => {
    const I = "</" + H[0].slice(1);
    return H.input.indexOf(I, Y) !== -1;
  }, r = Sd, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, Y) => {
      const I = H[0].length + H.index, Z = H.input[I];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        Y.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: I }) || Y.ignoreMatch());
      let K;
      const me = H.input.substring(I);
      if (K = me.match(/^\s*=/)) {
        Y.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        Y.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Sd,
    keyword: rw,
    literal: ow,
    built_in: iw,
    "variable.language": sw
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, k = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, x = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, w = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    v,
    g,
    k,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = w.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(w)
  });
  const y = [].concat(x, p.contains), S = y.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(y)
    }
  ]), C = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: S
  }, $ = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, M = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...J1,
        ...Y1
      ]
    }
  }, R = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [C],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      B([
        ...Q1,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      C
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      C
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: S, CLASS_REFERENCE: M },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      R,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      v,
      g,
      k,
      x,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      M,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          x,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: S
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          C,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [C]
      },
      oe,
      N,
      $,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function tg(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, s = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [s]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [s]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          a,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  l,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      s,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const aw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lw(e, t) {
  return _(), A("svg", aw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const cw = { name: "mdi-close", render: lw }, kr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, uw = {}, fw = { class: "chat-button" };
function dw(e, t) {
  return _(), A("button", fw, [
    we(e.$slots, "default")
  ]);
}
const pw = /* @__PURE__ */ kr(uw, [["render", dw]]);
function ju() {
  return qe(G1);
}
function cs() {
  return {
    options: qe(W1)
  };
}
function Mi() {
  const { options: e } = cs(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(s) {
    var i, a;
    const o = (a = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : a[s];
    return bt(o) ? o.value : o ?? s;
  }
  function r(s) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[s]);
  }
  return { t: n, te: r };
}
const hw = { class: "chat-get-started" }, gw = /* @__PURE__ */ re({
  __name: "GetStarted",
  setup(e) {
    const { t } = Mi();
    return (n, r) => (_(), A("div", hw, [
      xe(pw, {
        onClick: r[0] || (r[0] = (s) => n.$emit("click:button"))
      }, {
        default: he(() => [
          jr(Ye(b(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), mw = {}, vw = { class: "chat-powered-by" };
function bw(e, t) {
  return _(), A("div", vw, t[0] || (t[0] = [
    jr(" Powered by "),
    h("a", { href: "https://n8n.io?utm_source=n8n-external&utm_medium=widget-powered-by" }, "n8n", -1)
  ]));
}
const _w = /* @__PURE__ */ kr(mw, [["render", bw]]), yw = { class: "chat-get-started-footer" }, ww = { key: 0 }, kw = /* @__PURE__ */ re({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = Mi();
    return (r, s) => (_(), A("div", yw, [
      b(n)("footer") ? (_(), A("div", ww, Ye(b(t)("footer")), 1)) : _e("", !0),
      xe(_w)
    ]));
  }
});
function xw(e) {
  return xu() ? (Oh(e), !0) : !1;
}
function Cw() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const o = () => t(s);
      return xw(o), {
        off: o
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((o) => o(...s)))
  };
}
const Sw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ew = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Aw = Sw ? window.document : void 0, Tw = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Mw(e = {}) {
  const {
    document: t = Aw
  } = e, n = G(null), { on: r, trigger: s } = Cw();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (l) => {
    const u = l.target;
    n.value = u.files, s(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", s(null));
  }, a = (l) => {
    if (!o)
      return;
    const u = {
      ...Tw,
      ...e,
      ...l
    };
    o.multiple = u.multiple, o.accept = u.accept, o.webkitdirectory = u.directory, Ew(u, "capture") && (o.capture = u.capture), u.reset && i(), o.click();
  };
  return {
    files: yi(n),
    open: a,
    reset: i,
    onChange: r
  };
}
const $w = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Lw(e, t) {
  return _(), A("svg", $w, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const Iw = { name: "mdi-paperclip", render: Lw }, Rw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ow(e, t) {
  return _(), A("svg", Rw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const Pw = { name: "mdi-send", render: Ow }, Dw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bw(e, t) {
  return _(), A("svg", Dw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const Nw = { name: "mdi-closeThick", render: Bw }, Fw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qw(e, t) {
  return _(), A("svg", Fw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const zw = { name: "mdi-fileImage", render: qw }, Hw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jw(e, t) {
  return _(), A("svg", Hw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const Vw = { name: "mdi-fileMusic", render: jw }, Uw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Kw(e, t) {
  return _(), A("svg", Uw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const Ed = { name: "mdi-fileText", render: Kw }, Gw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ww(e, t) {
  return _(), A("svg", Gw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const Zw = { name: "mdi-fileVideo", render: Ww }, Xw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jw(e, t) {
  return _(), A("svg", Xw, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const Yw = { name: "mdi-openInNew", render: Jw }, Qw = { class: "chat-file-name" }, ek = /* @__PURE__ */ re({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = {
      document: Ed,
      audio: Vw,
      image: zw,
      video: Zw
    }, o = P(() => {
      var u;
      const l = (u = n.file) == null ? void 0 : u.type.split("/")[0];
      return s[l] || Ed;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function a() {
      r("remove", n.file);
    }
    return (l, u) => (_(), A("div", {
      class: "chat-file",
      onClick: i
    }, [
      xe(b(o)),
      h("p", Qw, Ye(l.file.name), 1),
      l.isRemovable ? (_(), A("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: nn(a, ["stop"])
      }, [
        xe(b(Nw))
      ])) : l.isPreviewable ? (_(), ue(b(Yw), {
        key: 1,
        class: "chat-file-preview"
      })) : _e("", !0)
    ]));
  }
}), ng = /* @__PURE__ */ kr(ek, [["__scopeId", "data-v-e0d57af7"]]), tk = { class: "chat-inputs" }, nk = {
  key: 0,
  class: "chat-input-left-panel"
}, rk = ["disabled", "placeholder"], ok = { class: "chat-inputs-controls" }, sk = ["disabled"], ik = ["disabled"], ak = {
  key: 0,
  class: "chat-files"
}, lk = /* @__PURE__ */ re({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown", "escapeKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Mi(), s = t, { options: o } = cs(), i = ju(), { waitingForResponse: a } = i, l = G(null), u = G(null), f = G(""), c = G(!1), p = G(null), d = G(!1), v = P(() => {
      var I;
      return d.value ? !1 : f.value === "" || b(a) || ((I = o.disabled) == null ? void 0 : I.value) === !0;
    }), g = P(() => {
      var I;
      return ((I = o.disabled) == null ? void 0 : I.value) === !0;
    }), k = P(
      () => {
        var I;
        return m.value && b(a) && !((I = o.disabled) != null && I.value);
      }
    ), m = P(() => b(o.allowFileUploads) === !0), x = P(() => b(o.allowedFilesMimeTypes)), w = P(() => ({
      "--controls-count": m.value ? 2 : 1
    })), {
      open: y,
      reset: S,
      onChange: C
    } = Mw({
      multiple: !0,
      reset: !1
    });
    C((I) => {
      if (!I) return;
      const Z = new DataTransfer();
      if (l.value)
        for (let K = 0; K < l.value.length; K++)
          Z.items.add(l.value[K]);
      for (let K = 0; K < I.length; K++)
        Z.items.add(I[K]);
      l.value = Z.files;
    }), it(() => {
      Vt.on("focusInput", M), Vt.on("blurInput", $), Vt.on("setInputValue", R), u.value && (p.value = new ResizeObserver((I) => {
        for (const Z of I)
          Z.target === u.value && Y();
      }), p.value.observe(u.value));
    }), Si(() => {
      Vt.off("focusInput", M), Vt.off("blurInput", $), Vt.off("setInputValue", R), p.value && (p.value.disconnect(), p.value = null);
    });
    function $() {
      u.value && u.value.blur();
    }
    function M() {
      u.value && u.value.focus();
    }
    function R(I) {
      f.value = I, M();
    }
    function D() {
      if (l.value) {
        const I = Array.from(l.value);
        return S(), l.value = null, I;
      }
      return [];
    }
    function N(I) {
      if (o.webhookUrl && i.currentSessionId.value)
        try {
          const Z = j3(
            o.webhookUrl,
            I,
            i.currentSessionId.value,
            !0
          );
          i.ws = new WebSocket(Z), i.ws.onmessage = (K) => {
            var Ee;
            if (K.data === "n8n|heartbeat") {
              (Ee = i.ws) == null || Ee.send("n8n|heartbeat-ack");
              return;
            }
            if (K.data === "n8n|continue") {
              d.value = !1, i.waitingForResponse.value = !0;
              return;
            }
            const me = {
              id: Nr(),
              text: K.data,
              sender: "bot"
            };
            i.messages.value.push(me), d.value = !0, i.waitingForResponse.value = !1;
          }, i.ws.onclose = () => {
            i.ws = null, d.value = !1, i.waitingForResponse.value = !1;
          };
        } catch (Z) {
          console.error("Error setting up websocket connection", Z);
        }
    }
    async function B(I) {
      if (!I || I.length === 0) return [];
      const Z = I.map(async (K) => new Promise((me, Ee) => {
        const Oe = new FileReader();
        Oe.onload = () => me({
          name: K.name,
          type: K.type,
          data: Oe.result
        }), Oe.onerror = () => {
          var Pe;
          return Ee(new Error(`Error reading file: ${((Pe = Oe.error) == null ? void 0 : Pe.message) ?? "Unknown error"}`));
        }, Oe.readAsDataURL(K);
      }));
      return await Promise.all(Z);
    }
    async function oe(I, Z) {
      const K = {
        id: Nr(),
        text: Z,
        sender: "user",
        files: l.value ? D() : void 0
      };
      i.messages.value.push(K), I.send(
        JSON.stringify({
          sessionId: i.currentSessionId.value,
          action: "sendMessage",
          chatInput: Z,
          files: await B(K.files)
        })
      ), i.waitingForResponse.value = !0, d.value = !1;
    }
    async function q(I) {
      if (I.preventDefault(), v.value)
        return;
      const Z = f.value;
      if (f.value = "", c.value = !0, i.ws && d.value) {
        await oe(i.ws, Z);
        return;
      }
      const K = await i.sendMessage(Z, D());
      K != null && K.executionId && N(K.executionId), c.value = !1;
    }
    async function ie(I) {
      I.shiftKey || I.isComposing || (await q(I), Y());
    }
    function j(I) {
      if (!l.value) return;
      const Z = new DataTransfer();
      for (let K = 0; K < l.value.length; K++) {
        const me = l.value[K];
        I.name !== me.name && Z.items.add(me);
      }
      S(), l.value = Z.files;
    }
    function V(I) {
      I.key === "ArrowUp" || I.key === "ArrowDown" ? (I.preventDefault(), s("arrowKeyDown", {
        key: I.key,
        currentInputValue: f.value
      })) : I.key === "Escape" && (I.preventDefault(), s("escapeKeyDown", {
        currentInputValue: f.value
      }));
    }
    function H() {
      k.value || y({ accept: b(x) });
    }
    function Y() {
      const I = u.value;
      if (!I) return;
      I.style.height = "var(--chat--textarea--height)";
      const Z = Math.min(I.scrollHeight, 480);
      I.style.height = `${Z}px`;
    }
    return (I, Z) => {
      var K;
      return _(), A("div", {
        class: "chat-input",
        style: st(w.value),
        onKeydown: nn(V, ["stop"])
      }, [
        h("div", tk, [
          I.$slots.leftPanel ? (_(), A("div", nk, [
            we(I.$slots, "leftPanel", {}, void 0, !0)
          ])) : _e("", !0),
          Ut(h("textarea", {
            ref_key: "chatTextArea",
            ref: u,
            "onUpdate:modelValue": Z[0] || (Z[0] = (me) => f.value = me),
            "data-test-id": "chat-input",
            disabled: g.value,
            placeholder: b(r)(n.placeholder),
            onKeydown: zt(ie, ["enter"]),
            onInput: Y,
            onMousedown: Y,
            onFocus: Y
          }, null, 40, rk), [
            [K1, f.value]
          ]),
          h("div", ok, [
            m.value ? (_(), A("button", {
              key: 0,
              disabled: k.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: H
            }, [
              xe(b(Iw), {
                height: "24",
                width: "24"
              })
            ], 8, sk)) : _e("", !0),
            h("button", {
              disabled: v.value,
              class: "chat-input-send-button",
              onClick: q
            }, [
              xe(b(Pw), {
                height: "24",
                width: "24"
              })
            ], 8, ik)
          ])
        ]),
        (K = l.value) != null && K.length && (!c.value || d.value) ? (_(), A("div", ak, [
          (_(!0), A(et, null, yn(l.value, (me) => (_(), ue(ng, {
            key: me.name,
            file: me,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: j
          }, null, 8, ["file"]))), 128))
        ])) : _e("", !0)
      ], 36);
    };
  }
}), ck = /* @__PURE__ */ kr(lk, [["__scopeId", "data-v-66014261"]]), uk = { class: "chat-layout" }, fk = {
  key: 0,
  class: "chat-header"
}, dk = {
  key: 2,
  class: "chat-footer"
}, pk = /* @__PURE__ */ re({
  __name: "Layout",
  setup(e) {
    const t = G(null);
    function n() {
      const r = t.value;
      r && (r.scrollTop = r.scrollHeight);
    }
    return it(() => {
      Vt.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), Jt(() => {
      Vt.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (r, s) => (_(), A("main", uk, [
      r.$slots.header ? (_(), A("div", fk, [
        we(r.$slots, "header")
      ])) : _e("", !0),
      r.$slots.default ? (_(), A("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        we(r.$slots, "default")
      ], 512)) : _e("", !0),
      r.$slots.footer ? (_(), A("div", dk, [
        we(r.$slots, "footer")
      ])) : _e("", !0)
    ]));
  }
}), rg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", hk = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2251%201.02271C13.5179%200.968554%2013.8195%201.00233%2014.0913%201.11939L14.2055%201.17506L14.3149%201.23951C14.5275%201.37763%2014.7014%201.56758%2014.8208%201.79127L14.8764%201.90553L14.9214%202.02467C15.0145%202.30522%2015.0227%202.60793%2014.9438%202.89478C14.9403%202.90772%2014.9372%202.92106%2014.9331%202.93385L13.0132%208.95338L12.9965%209.00025H19.9995C20.3769%208.99952%2020.7471%209.10523%2021.0669%209.30592C21.3874%209.50712%2021.6437%209.79562%2021.8071%2010.137C21.9704%2010.4783%2022.0341%2010.8588%2021.9897%2011.2346C21.9453%2011.6105%2021.7946%2011.9661%2021.5561%2012.26C21.5375%2012.2829%2021.5181%2012.3052%2021.4975%2012.3264L11.5971%2022.5266L11.5962%2022.5256C11.3774%2022.7595%2011.0907%2022.9194%2010.7749%2022.9778C10.4403%2023.0397%2010.0944%2022.9859%209.7944%2022.8254C9.4944%2022.665%209.25775%2022.4066%209.1235%2022.094C8.98941%2021.7815%208.96593%2021.4327%209.05612%2021.1047L9.06686%2021.0657L10.9868%2015.0462L11.0034%2015.0003H3.99948C3.62236%2015.0008%203.25253%2014.8941%202.93307%2014.6936C2.61276%2014.4925%202.35617%2014.2047%202.19284%2013.8635C2.02947%2013.5221%201.96581%2013.1408%202.01022%2012.7649C2.05468%2012.3892%202.20544%2012.0333%202.44382%2011.7395C2.46238%2011.7167%202.4819%2011.6942%202.50241%2011.6731L12.4028%201.47389C12.6215%201.23984%2012.9091%201.08117%2013.2251%201.02271Z'%20fill='currentColor'%20fill-opacity='0.9'%20style='fill:currentColor;fill-opacity:0.9;'/%3e%3c/svg%3e", gk = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M224.975%2049.429c17.138-17.139%2044.919-17.139%2062.057%200l175.546%20175.546a43.8%2043.8%200%200%201%209.347%2013.817l.146.349q.125.298.243.598.1.25.197.5l.147.388q.133.356.261.716l.09.257q.141.407.275.818l.044.136a39%2039%200%200%201%20.306.988%2043.9%2043.9%200%200%201%201.802%2012.473c0%2012.497-5.225%2023.774-13.608%2031.767L287.032%20462.578c-17.138%2017.138-44.919%2017.138-62.057%200s-17.139-44.92%200-62.059l100.618-100.618H80.458c-24.238%200-43.887-19.649-43.887-43.886s19.65-43.887%2043.887-43.887h245.158L224.975%20111.486c-17.139-17.138-17.139-44.919%200-62.057'%20fill='currentColor'/%3e%3c/svg%3e", mk = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M209.675%20387.718c20.945%2010.711%2030.794%2035.749%2022.073%2058.141-9.306%2023.886-36.221%2035.695-60.107%2026.389-29.106-11.34-56.354-28.746-79.744-52.137-20.47-20.47-36.356-43.894-47.607-68.932l-4.53-10.812-1.517-4.508c-6.284-22.673%205.511-46.874%2027.906-55.599%2022.392-8.721%2047.431%201.129%2058.141%2022.073l1.945%204.338%202.735%206.453c6.714%2014.943%2016.204%2028.982%2028.568%2041.346%2014.132%2014.132%2030.44%2024.54%2047.799%2031.304zM91.897%2091.905c23.39-23.39%2050.638-40.796%2079.744-52.137l4.508-1.517c22.673-6.284%2046.874%205.512%2055.599%2027.906%209.303%2023.885-2.526%2050.781-26.411%2060.086-17.359%206.763-33.667%2017.171-47.799%2031.303-12.364%2012.364-21.854%2026.403-28.568%2041.347l-2.735%206.453-1.945%204.337c-10.71%2020.945-35.75%2030.794-58.141%2022.073-23.886-9.306-35.695-36.221-26.39-60.107%2011.341-29.106%2028.747-56.353%2052.138-79.744M354.462%20354.47c12.364-12.364%2021.854-26.403%2028.568-41.346l2.735-6.453%201.945-4.338c10.71-20.944%2035.749-30.794%2058.141-22.073%2022.394%208.725%2034.19%2032.926%2027.906%2055.599l-1.517%204.508-4.53%2010.812c-11.251%2025.038-27.137%2048.462-47.607%2068.932-23.39%2023.391-50.638%2040.797-79.744%2052.137-23.886%209.306-50.801-2.503-60.107-26.389-9.303-23.885%202.526-50.78%2026.411-60.085l6.453-2.735c14.943-6.715%2028.982-16.205%2041.346-28.569m65.641-262.565c23.391%2023.391%2040.796%2050.638%2052.137%2079.744%209.306%2023.886-2.503%2050.801-26.389%2060.107-22.392%208.721-47.431-1.128-58.141-22.073l-1.945-4.337-2.735-6.453c-6.714-14.944-16.204-28.983-28.568-41.347-14.132-14.132-30.44-24.54-47.799-31.303-23.885-9.305-35.714-36.201-26.411-60.086%209.306-23.886%2036.221-35.694%2060.107-26.389l10.812%204.53c25.038%2011.25%2048.462%2027.137%2068.932%2047.607'%20fill='currentColor'%20/%3e%3c/svg%3e", vk = "data:image/svg+xml,%3csvg%20viewBox='0%200%2010%2010'%20fill='currentColor'%20overflow='hidden'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0'%20y='0'%20width='10'%20height='10'%20rx='2'%20ry='2'/%3e%3c/svg%3e", og = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", sg = "data:image/svg+xml,%3csvg%20fill='currentColor'%20fill-rule='evenodd'%20height='1em'%20style='flex:none;line-height:1'%20viewBox='0%200%2024%2024'%20width='1em'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eModelContextProtocol%3c/title%3e%3cpath%20d='M15.688%202.343a2.588%202.588%200%2000-3.61%200l-9.626%209.44a.863.863%200%2001-1.203%200%20.823.823%200%20010-1.18l9.626-9.44a4.313%204.313%200%20016.016%200%204.116%204.116%200%20011.204%203.54%204.3%204.3%200%20013.609%201.18l.05.05a4.115%204.115%200%20010%205.9l-8.706%208.537a.274.274%200%20000%20.393l1.788%201.754a.823.823%200%20010%201.18.863.863%200%2001-1.203%200l-1.788-1.753a1.92%201.92%200%20010-2.754l8.706-8.538a2.47%202.47%200%20000-3.54l-.05-.049a2.588%202.588%200%2000-3.607-.003l-7.172%207.034-.002.002-.098.097a.863.863%200%2001-1.204%200%20.823.823%200%20010-1.18l7.273-7.133a2.47%202.47%200%2000-.003-3.537z'%3e%3c/path%3e%3cpath%20d='M14.485%204.703a.823.823%200%20000-1.18.863.863%200%2000-1.204%200l-7.119%206.982a4.115%204.115%200%20000%205.9%204.314%204.314%200%20006.016%200l7.12-6.982a.823.823%200%20000-1.18.863.863%200%2000-1.204%200l-7.119%206.982a2.588%202.588%200%2001-3.61%200%202.47%202.47%200%20010-3.54l7.12-6.982z'%3e%3c/path%3e%3c/svg%3e", bk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M10.12%203.3c.911-1.395%203.012-1.349%203.844.14l8.222%2014.712c.838%201.5-.246%203.348-1.964%203.348H3.778c-1.718%200-2.802-1.848-1.964-3.348L10.036%203.44zM5.057%2018.5h13.886L12%206.073z'/%3e%3c/svg%3e", _k = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M4.5%209.5a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5m7.5%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5m7.5%200a2.5%202.5%200%201%201%200%205%202.5%202.5%200%200%201%200-5'/%3e%3c/svg%3e", yk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M12%201c6.075%200%2011%204.925%2011%2011s-4.925%2011-11%2011S1%2018.075%201%2012%205.925%201%2012%201m5.56%205.44a1.5%201.5%200%200%200-2.12%200L12%209.878l-3.44-3.44A1.5%201.5%200%201%200%206.44%208.56L9.878%2012l-3.44%203.44a1.5%201.5%200%201%200%202.122%202.12L12%2014.122l3.44%203.44.114.103a1.5%201.5%200%200%200%202.11-2.11l-.104-.114L14.122%2012l3.44-3.44a1.5%201.5%200%200%200%200-2.12'%20clip-rule='evenodd'/%3e%3c/svg%3e", wk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M16.297%202.515A3%203%200%200%201%2016%208.5v2.26l.01.138a1%201%200%200%200%20.545.756l.006.003%201.774.898.184.1A3%203%200%200%201%2020%2015.238V16a2%202%200%200%201-2%202h-4.5v4a1.5%201.5%200%200%201-3%200v-4H6a2%202%200%200%201-1.99-1.803L4%2016v-.76l.008-.209a3%203%200%200%201%201.657-2.476l1.773-.898.007-.003a1%201%200%200%200%20.545-.756L8%2010.76V8.5a3%203%200%200%201%200-6h8z'/%3e%3c/svg%3e", kk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20fill='currentColor'%20d='M5.52%202.122c.322-.175.713-.16%201.021.037l14%209a1%201%200%200%201%200%201.682l-14%209A1.001%201.001%200%200%201%205%2021V3a1%201%200%200%201%20.52-.878'/%3e%3c/svg%3e", xk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M16.645%205.907a1.5%201.5%200%200%201%202.122.028%209.77%209.77%200%200%201%202.585%204.953%209.9%209.9%200%200%201-.53%205.579%209.66%209.66%200%200%201-3.476%204.357%209.36%209.36%200%200%201-5.28%201.657%209.36%209.36%200%200%201-5.292-1.623%209.66%209.66%200%200%201-3.504-4.335%209.9%209.9%200%200%201-.564-5.576%209.77%209.77%200%200%201%202.556-4.97l.11-.105a1.501%201.501%200%200%201%202.05%202.187l-.166.178a6.8%206.8%200%200%200-1.602%203.266%206.9%206.9%200%200%200%20.393%203.884%206.66%206.66%200%200%200%202.413%202.989%206.36%206.36%200%200%200%203.595%201.105%206.36%206.36%200%200%200%203.59-1.128%206.66%206.66%200%200%200%202.394-3.005%206.9%206.9%200%200%200%20.37-3.887%206.77%206.77%200%200%200-1.79-3.433%201.5%201.5%200%200%201%20.026-2.12'/%3e%3cpath%20fill='currentColor'%20d='M12.035%201.481a1.5%201.5%200%200%201%201.5%201.5v9a1.5%201.5%200%200%201-3%200v-9a1.5%201.5%200%200%201%201.5-1.5'/%3e%3c/svg%3e", Ck = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M19.94%205.502a1.5%201.5%200%201%201%202.12%202.12L9.687%2019.999a1.5%201.5%200%200%201-2.122%200L1.94%2014.373a1.5%201.5%200%200%201%202.007-2.225l.115.104%204.564%204.564z'/%3e%3c/svg%3e", Sk = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M21%206a1%201%200%201%201%200%202h-1v12.125c0%20.817-.424%201.534-.941%202.019-.522.488-1.256.856-2.059.856H7c-.803%200-1.537-.368-2.059-.856C4.424%2021.659%204%2020.943%204%2020.125V8H3a1%201%200%200%201%200-2zm-7-5a3%203%200%200%201%203%203H7a3%203%200%200%201%203-3z'/%3e%3c/svg%3e", Ek = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0506%202.38452C10.9161%200.882058%2013.0845%200.882058%2013.95%202.38452L23.3065%2018.6267C24.1706%2020.1267%2023.0883%2021.9997%2021.3572%2021.9998H2.6424C0.911559%2021.9994%20-0.170877%2020.1266%200.693176%2018.6267L10.0506%202.38452ZM11.9998%2015.9998C11.1715%2015.9999%2010.4999%2016.6715%2010.4998%2017.4998C10.4998%2018.3281%2011.1715%2018.9997%2011.9998%2018.9998C12.8282%2018.9998%2013.4998%2018.3282%2013.4998%2017.4998C13.4997%2016.6714%2012.8282%2015.9998%2011.9998%2015.9998ZM11.9998%207.49976C11.1715%207.49986%2010.4999%208.17148%2010.4998%208.99976V12.4998C10.4998%2013.3281%2011.1715%2013.9997%2011.9998%2013.9998C12.8282%2013.9998%2013.4998%2013.3282%2013.4998%2012.4998V8.99976C13.4997%208.17142%2012.8282%207.49976%2011.9998%207.49976Z'%20fill='currentColor'/%3e%3c/svg%3e", ig = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", Ak = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M416.648%20227.85c23.324%200%2042.232%2018.908%2042.232%2042.232v84.462c0%2038.872-31.513%2070.384-70.385%2070.385H191.423v36.402c0%2012.541-15.163%2018.822-24.031%209.954l-78.63-78.631c-5.498-5.497-5.498-14.411%200-19.908l78.63-78.631c8.868-8.868%2024.031-2.587%2024.031%209.954v36.398h182.995v-70.385c0-23.324%2018.907-42.231%2042.23-42.232M304.028%2050.669c0-12.541%2015.163-18.822%2024.031-9.954l78.63%2078.631c5.498%205.497%205.498%2014.41%200%2019.908l-78.63%2078.631c-8.868%208.867-24.031%202.587-24.031-9.954v-36.38H121.033v70.385c0%2023.324-18.908%2042.231-42.231%2042.231s-42.23-18.907-42.23-42.231v-84.462c0-38.872%2031.512-70.385%2070.384-70.385h197.072z'%20fill='currentColor'/%3e%3c/svg%3e", Tk = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M275.114%2036.8c22.13%202.247%2039.401%2020.934%2039.401%2043.657v307.204h73.142c24.237%200%2043.886%2019.648%2043.886%2043.885s-19.648%2043.886-43.886%2043.886H153.6c-24.238-.001-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.885h73.143V124.343H153.6c-24.238%200-43.886-19.649-43.886-43.886s19.648-43.885%2043.886-43.886h117.029z'%20fill='currentColor'/%3e%3c/svg%3e", ag = "data:image/svg+xml,%3csvg%20viewBox='0%20-1%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", lg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", cg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", ug = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", fg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", dg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", pg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", hg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", gg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", mg = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", vg = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", bg = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", _g = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", Mk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $k(e, t) {
  return _(), A("svg", Mk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ]));
}
const yg = { name: "lucide-align-right", render: $k }, Lk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ik(e, t) {
  return _(), A("svg", Lk, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      h("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ]));
}
const wg = { name: "lucide-archive", render: Ik }, Rk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ok(e, t) {
  return _(), A("svg", Rk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ]));
}
const kg = { name: "lucide-arrow-down", render: Ok }, Pk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Dk(e, t) {
  return _(), A("svg", Pk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ]));
}
const Jc = { name: "lucide-arrow-left", render: Dk }, Bk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nk(e, t) {
  return _(), A("svg", Bk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ]));
}
const xg = { name: "lucide-arrow-left-right", render: Nk }, Fk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qk(e, t) {
  return _(), A("svg", Fk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ]));
}
const Cg = { name: "lucide-arrow-right", render: qk }, zk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Hk(e, t) {
  return _(), A("svg", zk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
    }, null, -1)
  ]));
}
const jk = { name: "lucide-arrow-right-from-line", render: Hk }, Vk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Uk(e, t) {
  return _(), A("svg", Vk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
    }, null, -1)
  ]));
}
const Kk = { name: "lucide-arrow-right-to-line", render: Uk }, Gk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Wk(e, t) {
  return _(), A("svg", Gk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ]));
}
const Sg = { name: "lucide-arrow-up", render: Wk }, Zk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Xk(e, t) {
  return _(), A("svg", Zk, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      h("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ]));
}
const Eg = { name: "lucide-at-sign", render: Xk }, Jk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Yk(e, t) {
  return _(), A("svg", Jk, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "m4.9 4.9l14.2 14.2" })
    ], -1)
  ]));
}
const Ag = { name: "lucide-ban", render: Yk }, Qk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e6(e, t) {
  return _(), A("svg", Qk, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ]));
}
const Tg = { name: "lucide-bell", render: e6 }, t6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n6(e, t) {
  return _(), A("svg", t6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ]));
}
const Mg = { name: "lucide-book", render: n6 }, r6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o6(e, t) {
  return _(), A("svg", r6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"
    }, null, -1)
  ]));
}
const s6 = { name: "lucide-book-open", render: o6 }, i6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a6(e, t) {
  return _(), A("svg", i6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 8V4H8" }),
      h("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      h("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ]));
}
const Yc = { name: "lucide-bot", render: a6 }, l6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c6(e, t) {
  return _(), A("svg", l6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      h("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ]));
}
const $g = { name: "lucide-box", render: c6 }, u6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f6(e, t) {
  return _(), A("svg", u6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
    }, null, -1)
  ]));
}
const Lg = { name: "lucide-braces", render: f6 }, d6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p6(e, t) {
  return _(), A("svg", d6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
      h("path", { d: "M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
      h("path", { d: "M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" })
    ], -1)
  ]));
}
const Ig = { name: "lucide-brain", render: p6 }, h6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g6(e, t) {
  return _(), A("svg", h6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
      h("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9" }),
      h("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" })
    ], -1)
  ]));
}
const Rg = { name: "lucide-bug", render: g6 }, m6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v6(e, t) {
  return _(), A("svg", m6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      h("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ]));
}
const Og = { name: "lucide-calculator", render: v6 }, b6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _6(e, t) {
  return _(), A("svg", b6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M8 2v4m8-4v4" }),
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      h("path", { d: "M3 10h18" })
    ], -1)
  ]));
}
const Pg = { name: "lucide-calendar", render: _6 }, y6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w6(e, t) {
  return _(), A("svg", y6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
    }, null, -1)
  ]));
}
const Dg = { name: "lucide-case-upper", render: w6 }, k6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x6(e, t) {
  return _(), A("svg", k6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ]));
}
const Bg = { name: "lucide-chart-column-decreasing", render: x6 }, C6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S6(e, t) {
  return _(), A("svg", C6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
const Ng = { name: "lucide-check", render: S6 }, E6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A6(e, t) {
  return _(), A("svg", E6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ]));
}
const Fg = { name: "lucide-check-check", render: A6 }, T6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M6(e, t) {
  return _(), A("svg", T6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
const Us = { name: "lucide-chevron-down", render: M6 }, $6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L6(e, t) {
  return _(), A("svg", $6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ]));
}
const Ks = { name: "lucide-chevron-left", render: L6 }, I6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R6(e, t) {
  return _(), A("svg", I6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ]));
}
const Gs = { name: "lucide-chevron-right", render: R6 }, O6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P6(e, t) {
  return _(), A("svg", O6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ]));
}
const Ws = { name: "lucide-chevron-up", render: P6 }, D6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B6(e, t) {
  return _(), A("svg", D6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 20l5-5l5 5M7 4l5 5l5-5"
    }, null, -1)
  ]));
}
const N6 = { name: "lucide-chevrons-down-up", render: B6 }, F6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q6(e, t) {
  return _(), A("svg", F6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ]));
}
const qg = { name: "lucide-chevrons-left", render: q6 }, z6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H6(e, t) {
  return _(), A("svg", z6, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ]));
}
const zg = { name: "lucide-chevrons-up-down", render: H6 }, j6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V6(e, t) {
  return _(), A("svg", j6, t[0] || (t[0] = [
    h("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const Hg = { name: "lucide-circle", render: V6 }, U6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K6(e, t) {
  return _(), A("svg", U6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ]));
}
const jg = { name: "lucide-circle-alert", render: K6 }, G6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W6(e, t) {
  return _(), A("svg", G6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const Vg = { name: "lucide-circle-check", render: W6 }, Z6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X6(e, t) {
  return _(), A("svg", Z6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Ug = { name: "lucide-circle-dot", render: X6 }, J6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y6(e, t) {
  return _(), A("svg", J6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ]));
}
const Qc = { name: "lucide-circle-help", render: Y6 }, Q6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ex(e, t) {
  return _(), A("svg", Q6, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M8 12h8" })
    ], -1)
  ]));
}
const Kg = { name: "lucide-circle-minus", render: ex }, tx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nx(e, t) {
  return _(), A("svg", tx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ]));
}
const Gg = { name: "lucide-circle-pause", render: nx }, rx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ox(e, t) {
  return _(), A("svg", rx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "m10 8l6 4l-6 4z" })
    ], -1)
  ]));
}
const Wg = { name: "lucide-circle-play", render: ox }, sx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ix(e, t) {
  return _(), A("svg", sx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const Zg = { name: "lucide-circle-plus", render: ix }, ax = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lx(e, t) {
  return _(), A("svg", ax, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      h("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Xg = { name: "lucide-circle-user-round", render: lx }, cx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ux(e, t) {
  return _(), A("svg", cx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ]));
}
const Jg = { name: "lucide-circle-x", render: ux }, fx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dx(e, t) {
  return _(), A("svg", fx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      h("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" })
    ], -1)
  ]));
}
const Yg = { name: "lucide-clipboard", render: dx }, px = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hx(e, t) {
  return _(), A("svg", px, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      h("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
      h("path", { d: "m9 14l2 2l4-4" })
    ], -1)
  ]));
}
const Qg = { name: "lucide-clipboard-check", render: hx }, gx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mx(e, t) {
  return _(), A("svg", gx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      h("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ]));
}
const em = { name: "lucide-clipboard-list", render: mx }, vx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bx(e, t) {
  return _(), A("svg", vx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 6v6l4 2" }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const tm = { name: "lucide-clock", render: bx }, _x = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yx(e, t) {
  return _(), A("svg", _x, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ]));
}
const nm = { name: "lucide-cloud", render: yx }, wx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kx(e, t) {
  return _(), A("svg", wx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      h("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ]));
}
const rm = { name: "lucide-cloud-download", render: kx }, xx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Cx(e, t) {
  return _(), A("svg", xx, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ]));
}
const om = { name: "lucide-code", render: Cx }, Sx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ex(e, t) {
  return _(), A("svg", Sx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" }),
      h("path", { d: "M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" })
    ], -1)
  ]));
}
const eu = { name: "lucide-cog", render: Ex }, Ax = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tx(e, t) {
  return _(), A("svg", Ax, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ]));
}
const sm = { name: "lucide-contrast", render: Tx }, Mx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $x(e, t) {
  return _(), A("svg", Mx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      h("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ]));
}
const im = { name: "lucide-copy", render: $x }, Lx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ix(e, t) {
  return _(), A("svg", Lx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })
    ], -1)
  ]));
}
const Rx = { name: "lucide-crosshair", render: Ix }, Ox = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Px(e, t) {
  return _(), A("svg", Ox, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      h("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      h("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ]));
}
const am = { name: "lucide-database", render: Px }, Dx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bx(e, t) {
  return _(), A("svg", Dx, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3"
    }, null, -1)
  ]));
}
const Nx = { name: "lucide-door-open", render: Bx }, Fx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qx(e, t) {
  return _(), A("svg", Fx, t[0] || (t[0] = [
    h("circle", {
      cx: "12.1",
      cy: "12.1",
      r: "1",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const zx = { name: "lucide-dot", render: qx }, Hx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jx(e, t) {
  return _(), A("svg", Hx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const lm = { name: "lucide-earth", render: jx }, Vx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ux(e, t) {
  return _(), A("svg", Vx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      h("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      h("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const cm = { name: "lucide-ellipsis", render: Ux }, Kx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gx(e, t) {
  return _(), A("svg", Kx, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      h("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      h("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const um = { name: "lucide-ellipsis-vertical", render: Gx }, Wx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Zx(e, t) {
  return _(), A("svg", Wx, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ]));
}
const fm = { name: "lucide-equal", render: Zx }, Xx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jx(e, t) {
  return _(), A("svg", Xx, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 15l6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0l6-6M3 8V3h5m1 6L3 3"
    }, null, -1)
  ]));
}
const Yx = { name: "lucide-expand", render: Jx }, Qx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eC(e, t) {
  return _(), A("svg", Qx, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ]));
}
const dm = { name: "lucide-external-link", render: eC }, tC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nC(e, t) {
  return _(), A("svg", tC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const pm = { name: "lucide-eye", render: nC }, rC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oC(e, t) {
  return _(), A("svg", rC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      h("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ]));
}
const hm = { name: "lucide-eye-off", render: oC }, sC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iC(e, t) {
  return _(), A("svg", sC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      h("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const gm = { name: "lucide-file", render: iC }, aC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lC(e, t) {
  return _(), A("svg", aC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      h("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      h("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ]));
}
const mm = { name: "lucide-file-archive", render: lC }, cC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uC(e, t) {
  return _(), A("svg", cC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      h("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ]));
}
const vm = { name: "lucide-file-code", render: uC }, fC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dC(e, t) {
  return _(), A("svg", fC, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-6 8h6m-3 3V7M9 17h6"
    }, null, -1)
  ]));
}
const pC = { name: "lucide-file-diff", render: dC }, hC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gC(e, t) {
  return _(), A("svg", hC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      h("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ]));
}
const bm = { name: "lucide-file-down", render: gC }, mC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vC(e, t) {
  return _(), A("svg", mC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      h("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ]));
}
const _m = { name: "lucide-file-input", render: vC }, bC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _C(e, t) {
  return _(), A("svg", bC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      h("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      h("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ]));
}
const ym = { name: "lucide-file-output", render: _C }, yC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wC(e, t) {
  return _(), A("svg", yC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      h("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ]));
}
const tu = { name: "lucide-file-text", render: wC }, kC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xC(e, t) {
  return _(), A("svg", kC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
      h("path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }),
      h("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
    ], -1)
  ]));
}
const wm = { name: "lucide-files", render: xC }, CC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function SC(e, t) {
  return _(), A("svg", CC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      h("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ]));
}
const km = { name: "lucide-fingerprint", render: SC }, EC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AC(e, t) {
  return _(), A("svg", EC, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ]));
}
const xm = { name: "lucide-flask-conical", render: AC }, TC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MC(e, t) {
  return _(), A("svg", TC, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const Cm = { name: "lucide-folder", render: MC }, $C = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LC(e, t) {
  return _(), A("svg", $C, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ]));
}
const Sm = { name: "lucide-folder-open", render: LC }, IC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RC(e, t) {
  return _(), A("svg", IC, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const Em = { name: "lucide-folder-plus", render: RC }, OC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PC(e, t) {
  return _(), A("svg", OC, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ]));
}
const Am = { name: "lucide-funnel", render: PC }, DC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function BC(e, t) {
  return _(), A("svg", DC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M6 3h12l4 6l-10 13L2 9Z" }),
      h("path", { d: "M11 3L8 9l4 13l4-13l-3-6M2 9h20" })
    ], -1)
  ]));
}
const Tm = { name: "lucide-gem", render: BC }, NC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FC(e, t) {
  return _(), A("svg", NC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      h("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ]));
}
const Mm = { name: "lucide-gift", render: FC }, qC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zC(e, t) {
  return _(), A("svg", qC, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ]));
}
const $m = { name: "lucide-git-branch", render: zC }, HC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jC(e, t) {
  return _(), A("svg", HC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ]));
}
const Lm = { name: "lucide-globe", render: jC }, VC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UC(e, t) {
  return _(), A("svg", VC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      h("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ]));
}
const Im = { name: "lucide-graduation-cap", render: UC }, KC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GC(e, t) {
  return _(), A("svg", KC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 3v18m-9-9h18" }),
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ]));
}
const Rm = { name: "lucide-grid-2x2", render: GC }, WC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZC(e, t) {
  return _(), A("svg", WC, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ]));
}
const Om = { name: "lucide-grip-vertical", render: ZC }, XC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function JC(e, t) {
  return _(), A("svg", XC, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ]));
}
const Pm = { name: "lucide-hand-coins", render: JC }, YC = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QC(e, t) {
  return _(), A("svg", YC, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      h("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      h("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ]));
}
const Dm = { name: "lucide-handshake", render: QC }, e5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t5(e, t) {
  return _(), A("svg", e5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ]));
}
const Bm = { name: "lucide-hard-drive", render: t5 }, n5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r5(e, t) {
  return _(), A("svg", n5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      h("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      h("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ]));
}
const Nm = { name: "lucide-hard-drive-download", render: r5 }, o5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s5(e, t) {
  return _(), A("svg", o5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ]));
}
const Fm = { name: "lucide-hash", render: s5 }, i5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a5(e, t) {
  return _(), A("svg", i5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      h("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ]));
}
const qm = { name: "lucide-history", render: a5 }, l5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c5(e, t) {
  return _(), A("svg", l5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ]));
}
const zm = { name: "lucide-hourglass", render: c5 }, u5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f5(e, t) {
  return _(), A("svg", u5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      h("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ]));
}
const Hm = { name: "lucide-house", render: f5 }, d5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p5(e, t) {
  return _(), A("svg", d5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      h("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      h("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ]));
}
const jm = { name: "lucide-image", render: p5 }, h5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g5(e, t) {
  return _(), A("svg", h5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      h("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ]));
}
const Vm = { name: "lucide-inbox", render: g5 }, m5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v5(e, t) {
  return _(), A("svg", m5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
const nu = { name: "lucide-info", render: v5 }, b5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _5(e, t) {
  return _(), A("svg", b5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      h("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const Um = { name: "lucide-key-round", render: _5 }, y5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w5(e, t) {
  return _(), A("svg", y5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ]));
}
const Km = { name: "lucide-languages", render: w5 }, k5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x5(e, t) {
  return _(), A("svg", k5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      h("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      h("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ]));
}
const Gm = { name: "lucide-layers", render: x5 }, C5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S5(e, t) {
  return _(), A("svg", C5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
const Wm = { name: "lucide-lightbulb", render: S5 }, E5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A5(e, t) {
  return _(), A("svg", E5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      h("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ]));
}
const Zm = { name: "lucide-link", render: A5 }, T5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M5(e, t) {
  return _(), A("svg", T5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"
    }, null, -1)
  ]));
}
const Xm = { name: "lucide-list", render: M5 }, $5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L5(e, t) {
  return _(), A("svg", $5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8"
    }, null, -1)
  ]));
}
const Jm = { name: "lucide-list-checks", render: L5 }, I5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R5(e, t) {
  return _(), A("svg", I5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      h("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ]));
}
const Ym = { name: "lucide-lock", render: R5 }, O5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P5(e, t) {
  return _(), A("svg", O5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ]));
}
const Qm = { name: "lucide-log-in", render: P5 }, D5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B5(e, t) {
  return _(), A("svg", D5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ]));
}
const ev = { name: "lucide-log-out", render: B5 }, N5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F5(e, t) {
  return _(), A("svg", N5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      h("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
const tv = { name: "lucide-mail", render: F5 }, q5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z5(e, t) {
  return _(), A("svg", q5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ]));
}
const nv = { name: "lucide-maximize", render: z5 }, H5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j5(e, t) {
  return _(), A("svg", H5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ]));
}
const rv = { name: "lucide-maximize-2", render: j5 }, V5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U5(e, t) {
  return _(), A("svg", V5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 12h16M4 18h16M4 6h16"
    }, null, -1)
  ]));
}
const ov = { name: "lucide-menu", render: U5 }, K5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G5(e, t) {
  return _(), A("svg", K5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }, null, -1)
  ]));
}
const sv = { name: "lucide-message-circle", render: G5 }, W5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z5(e, t) {
  return _(), A("svg", W5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ]));
}
const iv = { name: "lucide-messages-square", render: Z5 }, X5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J5(e, t) {
  return _(), A("svg", X5, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" }),
      h("rect", {
        width: "6",
        height: "13",
        x: "9",
        y: "2",
        rx: "3"
      })
    ], -1)
  ]));
}
const Y5 = { name: "lucide-mic", render: J5 }, Q5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e8(e, t) {
  return _(), A("svg", Q5, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ]));
}
const av = { name: "lucide-milestone", render: e8 }, t8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n8(e, t) {
  return _(), A("svg", t8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ]));
}
const r8 = { name: "lucide-minimize-2", render: n8 }, o8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s8(e, t) {
  return _(), A("svg", o8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ]));
}
const lv = { name: "lucide-mouse-pointer", render: s8 }, i8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a8(e, t) {
  return _(), A("svg", i8, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ]));
}
const cv = { name: "lucide-network", render: a8 }, l8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c8(e, t) {
  return _(), A("svg", l8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      h("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      h("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ]));
}
const uv = { name: "lucide-package-open", render: c8 }, u8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f8(e, t) {
  return _(), A("svg", u8, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ]));
}
const fv = { name: "lucide-palette", render: f8 }, d8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p8(e, t) {
  return _(), A("svg", d8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      h("path", { d: "M9 3v18" })
    ], -1)
  ]));
}
const h8 = { name: "lucide-panel-left", render: p8 }, g8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m8(e, t) {
  return _(), A("svg", g8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      h("path", { d: "M15 3v18" })
    ], -1)
  ]));
}
const v8 = { name: "lucide-panel-right", render: m8 }, b8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _8(e, t) {
  return _(), A("svg", b8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 6l-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
    }, null, -1)
  ]));
}
const y8 = { name: "lucide-paperclip", render: _8 }, w8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k8(e, t) {
  return _(), A("svg", w8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        rx: "1"
      }),
      h("rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        rx: "1"
      })
    ], -1)
  ]));
}
const dv = { name: "lucide-pause", render: k8 }, x8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C8(e, t) {
  return _(), A("svg", x8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ]));
}
const pv = { name: "lucide-pen", render: C8 }, S8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E8(e, t) {
  return _(), A("svg", S8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ]));
}
const hv = { name: "lucide-pencil", render: E8 }, A8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T8(e, t) {
  return _(), A("svg", A8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ]));
}
const gv = { name: "lucide-pin", render: T8 }, M8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $8(e, t) {
  return _(), A("svg", M8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
const mv = { name: "lucide-play", render: $8 }, L8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I8(e, t) {
  return _(), A("svg", L8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ]));
}
const vv = { name: "lucide-plug", render: I8 }, R8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O8(e, t) {
  return _(), A("svg", R8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ]));
}
const bv = { name: "lucide-plus", render: O8 }, P8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D8(e, t) {
  return _(), A("svg", P8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      h("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ]));
}
const _v = { name: "lucide-pocket-knife", render: D8 }, B8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N8(e, t) {
  return _(), A("svg", B8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ]));
}
const yv = { name: "lucide-power", render: N8 }, F8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q8(e, t) {
  return _(), A("svg", F8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m15 14l5-5l-5-5" }),
      h("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ]));
}
const wv = { name: "lucide-redo-2", render: q8 }, z8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H8(e, t) {
  return _(), A("svg", z8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      h("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      h("path", { d: "M8 16H3v5" })
    ], -1)
  ]));
}
const Zs = { name: "lucide-refresh-cw", render: H8 }, j8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V8(e, t) {
  return _(), A("svg", j8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ]));
}
const kv = { name: "lucide-remove-formatting", render: V8 }, U8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K8(e, t) {
  return _(), A("svg", U8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      h("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const xv = { name: "lucide-rss", render: K8 }, G8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W8(e, t) {
  return _(), A("svg", G8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ]));
}
const Cv = { name: "lucide-satellite-dish", render: W8 }, Z8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X8(e, t) {
  return _(), A("svg", Z8, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      h("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ]));
}
const Sv = { name: "lucide-save", render: X8 }, J8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y8(e, t) {
  return _(), A("svg", J8, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ]));
}
const Ev = { name: "lucide-scale", render: Y8 }, Q8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e9(e, t) {
  return _(), A("svg", Q8, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ]));
}
const ru = { name: "lucide-scissors", render: e9 }, t9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n9(e, t) {
  return _(), A("svg", t9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m21 21l-4.34-4.34" }),
      h("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ]));
}
const Av = { name: "lucide-search", render: n9 }, r9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o9(e, t) {
  return _(), A("svg", r9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ]));
}
const Tv = { name: "lucide-send", render: o9 }, s9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i9(e, t) {
  return _(), A("svg", s9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      h("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      h("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ]));
}
const Mv = { name: "lucide-server", render: i9 }, a9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l9(e, t) {
  return _(), A("svg", a9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2" }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const c9 = { name: "lucide-settings", render: l9 }, u9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f9(e, t) {
  return _(), A("svg", u9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ]));
}
const $v = { name: "lucide-share", render: f9 }, d9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p9(e, t) {
  return _(), A("svg", d9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"
    }, null, -1)
  ]));
}
const Lv = { name: "lucide-sliders-horizontal", render: p9 }, h9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g9(e, t) {
  return _(), A("svg", h9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      h("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ]));
}
const Iv = { name: "lucide-smile", render: g9 }, m9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v9(e, t) {
  return _(), A("svg", m9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4m2-2h-4M4 17v2m1-1H3"
    }, null, -1)
  ]));
}
const b9 = { name: "lucide-sparkles", render: v9 }, _9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y9(e, t) {
  return _(), A("svg", _9, t[0] || (t[0] = [
    h("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      rx: "2"
    }, null, -1)
  ]));
}
const Rv = { name: "lucide-square", render: y9 }, w9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k9(e, t) {
  return _(), A("svg", w9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      h("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const Ov = { name: "lucide-square-check", render: k9 }, x9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C9(e, t) {
  return _(), A("svg", x9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      h("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ]));
}
const Pv = { name: "lucide-square-pen", render: C9 }, S9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E9(e, t) {
  return _(), A("svg", S9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      h("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const Dv = { name: "lucide-square-plus", render: E9 }, A9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T9(e, t) {
  return _(), A("svg", A9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      h("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const Bv = { name: "lucide-sticky-note", render: T9 }, M9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $9(e, t) {
  return _(), A("svg", M9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      h("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ]));
}
const Nv = { name: "lucide-sun", render: $9 }, L9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I9(e, t) {
  return _(), A("svg", L9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M12 3v18" }),
      h("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      h("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ]));
}
const Fv = { name: "lucide-table", render: I9 }, R9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O9(e, t) {
  return _(), A("svg", R9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
      h("path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }),
      h("circle", {
        cx: "6.5",
        cy: "9.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const qv = { name: "lucide-tags", render: O9 }, P9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D9(e, t) {
  return _(), A("svg", P9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ]));
}
const zv = { name: "lucide-terminal", render: D9 }, B9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N9(e, t) {
  return _(), A("svg", B9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ]));
}
const Hv = { name: "lucide-thumbs-down", render: N9 }, F9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q9(e, t) {
  return _(), A("svg", F9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ]));
}
const jv = { name: "lucide-thumbs-up", render: q9 }, z9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H9(e, t) {
  return _(), A("svg", z9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "15",
        cy: "12",
        r: "3"
      }),
      h("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "7"
      })
    ], -1)
  ]));
}
const j9 = { name: "lucide-toggle-right", render: H9 }, V9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U9(e, t) {
  return _(), A("svg", V9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
    }, null, -1)
  ]));
}
const Vv = { name: "lucide-trash-2", render: U9 }, K9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G9(e, t) {
  return _(), A("svg", K9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ]));
}
const Uv = { name: "lucide-tree-pine", render: G9 }, W9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z9(e, t) {
  return _(), A("svg", W9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ]));
}
const Kv = { name: "lucide-triangle-alert", render: Z9 }, X9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J9(e, t) {
  return _(), A("svg", X9, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6"
    }, null, -1)
  ]));
}
const Y9 = { name: "lucide-type", render: J9 }, Q9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e7(e, t) {
  return _(), A("svg", Q9, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M9 14L4 9l5-5" }),
      h("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ]));
}
const Gv = { name: "lucide-undo-2", render: e7 }, t7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n7(e, t) {
  return _(), A("svg", t7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ]));
}
const Wv = { name: "lucide-unlink", render: n7 }, r7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o7(e, t) {
  return _(), A("svg", r7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      h("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Zv = { name: "lucide-user", render: o7 }, s7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i7(e, t) {
  return _(), A("svg", s7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      h("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Xv = { name: "lucide-user-check", render: i7 }, a7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l7(e, t) {
  return _(), A("svg", a7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      h("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      h("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ]));
}
const Jv = { name: "lucide-user-lock", render: l7 }, c7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u7(e, t) {
  return _(), A("svg", c7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      h("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ]));
}
const Yv = { name: "lucide-user-round", render: u7 }, f7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d7(e, t) {
  return _(), A("svg", f7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      h("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Qv = { name: "lucide-users", render: d7 }, p7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h7(e, t) {
  return _(), A("svg", p7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ]));
}
const eb = { name: "lucide-variable", render: h7 }, g7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m7(e, t) {
  return _(), A("svg", g7, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ]));
}
const tb = { name: "lucide-vault", render: m7 }, v7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b7(e, t) {
  return _(), A("svg", v7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      h("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ]));
}
const nb = { name: "lucide-video", render: b7 }, _7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y7(e, t) {
  return _(), A("svg", _7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"
    }, null, -1)
  ]));
}
const w7 = { name: "lucide-wand-sparkles", render: y7 }, k7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x7(e, t) {
  return _(), A("svg", k7, t[0] || (t[0] = [
    wr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ]));
}
const rb = { name: "lucide-waypoints", render: x7 }, C7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S7(e, t) {
  return _(), A("svg", C7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, null, -1)
  ]));
}
const ob = { name: "lucide-wrench", render: S7 }, E7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A7(e, t) {
  return _(), A("svg", E7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const ou = { name: "lucide-x", render: A7 }, T7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M7(e, t) {
  return _(), A("svg", T7, t[0] || (t[0] = [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ]));
}
const sb = { name: "lucide-zap", render: M7 }, $7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L7(e, t) {
  return _(), A("svg", $7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      h("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ]));
}
const ib = { name: "lucide-zoom-in", render: L7 }, I7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R7(e, t) {
  return _(), A("svg", I7, t[0] || (t[0] = [
    h("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      h("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      h("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ]));
}
const ab = { name: "lucide-zoom-out", render: R7 }, Ad = {
  // customIcons
  variable: eb,
  "pop-out": ig,
  triangle: bg,
  "status-completed": ug,
  "status-waiting": hg,
  "status-error": fg,
  "status-canceled": cg,
  "status-new": dg,
  "status-unknown": pg,
  "status-warning": gg,
  "vector-square": _g,
  schema: ag,
  json: Lg,
  binary: rg,
  text: mg,
  toolbox: vg,
  spinner: lg,
  xmark: ou,
  mcp: sg,
  // fontAwesomeIcons
  "caret-up": Ws,
  "caret-down": Us,
  "caret-right": Gs,
  "caret-left": Ks,
  "folder-plus": Em,
  share: $v,
  "user-check": Xv,
  "check-double": Fg,
  "exclamation-circle": jg,
  circle: Hg,
  "eye-slash": hm,
  folder: Cm,
  "minus-circle": Kg,
  adjust: sm,
  refresh: Zs,
  vault: tb,
  "angle-double-left": qg,
  "angle-down": Us,
  "angle-left": Ks,
  "angle-right": Gs,
  "angle-up": Ws,
  archive: wg,
  "arrow-left": Jc,
  "arrow-right": Cg,
  "arrow-up": Sg,
  "arrow-down": kg,
  at: Eg,
  ban: Ag,
  "balance-scale-left": Ev,
  bars: ov,
  bolt: sb,
  book: Mg,
  "box-open": uv,
  bug: Rg,
  brain: Ig,
  calculator: Og,
  calendar: Pg,
  "chart-bar": Bg,
  check: Ng,
  "check-circle": Vg,
  "check-square": Ov,
  "chevron-left": Ks,
  "chevron-right": Gs,
  "chevron-down": Us,
  "chevron-up": Ws,
  code: om,
  "code-branch": $m,
  cog: eu,
  cogs: eu,
  comment: sv,
  comments: iv,
  clipboard: Yg,
  "clipboard-check": Qg,
  "clipboard-list": em,
  clock: tm,
  clone: im,
  cloud: nm,
  "cloud-download-alt": rm,
  compress: zg,
  copy: wm,
  cube: $g,
  cut: ru,
  database: am,
  "dot-circle": Ug,
  "grip-lines-vertical": og,
  "grip-vertical": Om,
  edit: Pv,
  "ellipsis-h": cm,
  "ellipsis-v": um,
  envelope: tv,
  equals: fm,
  eye: pm,
  "exclamation-triangle": Kv,
  expand: nv,
  "expand-alt": rv,
  "external-link-alt": dm,
  "exchange-alt": xg,
  file: gm,
  "file-alt": tu,
  "file-archive": mm,
  "file-code": vm,
  "file-download": bm,
  "file-export": ym,
  "file-import": _m,
  "file-pdf": tu,
  filter: Am,
  fingerprint: km,
  flask: xm,
  "folder-open": Sm,
  font: Dg,
  gift: Mm,
  globe: Lm,
  "globe-americas": lm,
  "graduation-cap": Im,
  "hand-holding-usd": Pm,
  "hand-scissors": ru,
  handshake: Dm,
  "hand-point-left": Jc,
  hashtag: Fm,
  hdd: Bm,
  history: qm,
  home: Hm,
  hourglass: zm,
  image: jm,
  inbox: Vm,
  info: nu,
  "info-circle": nu,
  key: Um,
  language: Km,
  "layer-group": Gm,
  link: Zm,
  list: Xm,
  lightbulb: Wm,
  lock: Ym,
  "map-signs": av,
  "mouse-pointer": lv,
  "network-wired": cv,
  palette: fv,
  pause: dv,
  "pause-circle": Gg,
  pen: pv,
  "pencil-alt": hv,
  play: mv,
  "play-circle": Wg,
  plug: vv,
  plus: bv,
  "plus-circle": Zg,
  "plus-square": Dv,
  "project-diagram": rb,
  question: Qc,
  "question-circle": Qc,
  redo: wv,
  "remove-format": kv,
  robot: Yc,
  rss: xv,
  save: Sv,
  "satellite-dish": Cv,
  search: Av,
  "search-minus": ab,
  "search-plus": ib,
  server: Mv,
  screwdriver: _v,
  smile: Iv,
  "sign-in-alt": Qm,
  "sign-out-alt": ev,
  "sliders-h": Lv,
  "sticky-note": Bv,
  stop: Rv,
  stream: yg,
  sun: Nv,
  sync: Zs,
  "sync-alt": Zs,
  table: Fv,
  tags: qv,
  tasks: Jm,
  terminal: zv,
  "th-large": Rm,
  thumbtack: gv,
  "thumbs-down": Hv,
  "thumbs-up": jv,
  times: ou,
  "times-circle": Jg,
  tools: ob,
  trash: Vv,
  undo: Gv,
  unlink: Wv,
  user: Zv,
  "user-circle": Xg,
  "user-friends": Yv,
  users: Qv,
  video: nb,
  tree: Uv,
  "user-lock": Jv,
  gem: Tm,
  download: Nm,
  "power-off": yv,
  "paper-plane": Tv,
  bell: Tg
}, Td = {
  // custom icons
  // NOTE: ensure to replace any colors with "currentColor" in SVG
  "bolt-filled": hk,
  "filled-square": vk,
  "grip-lines-vertical": og,
  variable: eb,
  "pop-out": ig,
  triangle: bg,
  "status-completed": ug,
  "status-waiting": hg,
  "status-error": fg,
  "status-canceled": cg,
  "status-new": dg,
  "status-unknown": pg,
  "status-warning": gg,
  "vector-square": _g,
  "continue-on-error": gk,
  "always-output-data": mk,
  "retry-on-fail": Ak,
  "execute-once": Tk,
  schema: ag,
  json: Lg,
  binary: rg,
  text: mg,
  toolbox: vg,
  spinner: lg,
  "node-dirty": bk,
  "node-ellipsis": _k,
  "node-execution-error": yk,
  "node-validation-error": Ek,
  "node-pin": wk,
  "node-play": kk,
  "node-power": xk,
  "node-success": Ck,
  "node-trash": Sk,
  mcp: sg,
  // lucide
  "align-right": yg,
  archive: wg,
  "arrow-down": kg,
  "arrow-left": Jc,
  "arrow-left-right": xg,
  "arrow-right": Cg,
  "arrow-right-from-line": jk,
  "arrow-right-to-line": Kk,
  "arrow-up": Sg,
  "at-sign": Eg,
  ban: Ag,
  bell: Tg,
  book: Mg,
  "book-open": s6,
  bot: Yc,
  box: $g,
  brain: Ig,
  bug: Rg,
  calculator: Og,
  calendar: Pg,
  "case-upper": Dg,
  "chart-column-decreasing": Bg,
  check: Ng,
  "check-check": Fg,
  "chevron-down": Us,
  "chevron-left": Ks,
  "chevron-right": Gs,
  "chevron-up": Ws,
  "chevrons-left": qg,
  "chevrons-down-up": N6,
  "chevrons-up-down": zg,
  circle: Hg,
  "circle-alert": jg,
  "circle-check": Vg,
  "circle-dot": Ug,
  "circle-help": Qc,
  "circle-minus": Kg,
  "circle-pause": Gg,
  "circle-play": Wg,
  "circle-plus": Zg,
  "circle-user-round": Xg,
  "circle-x": Jg,
  clipboard: Yg,
  "clipboard-check": Qg,
  "clipboard-list": em,
  clock: tm,
  cloud: nm,
  "cloud-download": rm,
  code: om,
  cog: eu,
  contrast: sm,
  copy: im,
  crosshair: Rx,
  database: am,
  "door-open": Nx,
  dot: zx,
  earth: lm,
  ellipsis: cm,
  "ellipsis-vertical": um,
  equal: fm,
  expand: Yx,
  "external-link": dm,
  eye: pm,
  "eye-off": hm,
  file: gm,
  "file-archive": mm,
  "file-code": vm,
  "file-diff": pC,
  "file-down": bm,
  "file-input": _m,
  "file-output": ym,
  "file-text": tu,
  files: wm,
  fingerprint: km,
  "flask-conical": xm,
  folder: Cm,
  "folder-open": Sm,
  "folder-plus": Em,
  funnel: Am,
  gem: Tm,
  gift: Mm,
  "git-branch": $m,
  globe: Lm,
  "graduation-cap": Im,
  "grid-2x2": Rm,
  "grip-vertical": Om,
  "hand-coins": Pm,
  handshake: Dm,
  "hard-drive": Bm,
  "hard-drive-download": Nm,
  hash: Fm,
  history: qm,
  hourglass: zm,
  house: Hm,
  image: jm,
  inbox: Vm,
  info: nu,
  "key-round": Um,
  languages: Km,
  layers: Gm,
  lightbulb: Wm,
  link: Zm,
  list: Xm,
  "list-checks": Jm,
  lock: Ym,
  "log-in": Qm,
  "log-out": ev,
  mail: tv,
  "minimize-2": r8,
  maximize: nv,
  "maximize-2": rv,
  menu: ov,
  "message-circle": sv,
  "messages-square": iv,
  mic: Y5,
  milestone: av,
  "mouse-pointer": lv,
  network: cv,
  "package-open": uv,
  palette: fv,
  "panel-left": h8,
  "panel-right": v8,
  paperclip: y8,
  pause: dv,
  pen: pv,
  pencil: hv,
  pin: gv,
  play: mv,
  plug: vv,
  plus: bv,
  "pocket-knife": _v,
  power: yv,
  "redo-2": wv,
  "refresh-cw": Zs,
  "remove-formatting": kv,
  rss: xv,
  robot: Yc,
  "satellite-dish": Cv,
  save: Sv,
  scale: Ev,
  scissors: ru,
  search: Av,
  settings: c9,
  send: Tv,
  server: Mv,
  share: $v,
  "sliders-horizontal": Lv,
  smile: Iv,
  sparkles: b9,
  square: Rv,
  "square-check": Ov,
  "square-pen": Pv,
  "square-plus": Dv,
  "sticky-note": Bv,
  sun: Nv,
  table: Fv,
  tags: qv,
  terminal: zv,
  "thumbs-down": Hv,
  "thumbs-up": jv,
  "trash-2": Vv,
  "tree-pine": Uv,
  "triangle-alert": Kv,
  type: Y9,
  "toggle-right": j9,
  "undo-2": Gv,
  unlink: Wv,
  user: Zv,
  "user-check": Xv,
  "user-lock": Jv,
  "user-round": Yv,
  users: Qv,
  vault: tb,
  video: nb,
  "wand-sparkles": w7,
  waypoints: rb,
  wrench: ob,
  x: ou,
  zap: sb,
  "zoom-in": ib,
  "zoom-out": ab
}, O7 = /* @__PURE__ */ re({
  name: "N8nIcon",
  __name: "Icon",
  props: {
    icon: {},
    size: { default: void 0 },
    spin: { type: Boolean, default: !1 },
    color: { default: void 0 },
    strokeWidth: {}
  },
  setup(e) {
    const t = e, n = qu(), r = P(() => {
      const a = [];
      return t.spin && a.push("spin"), t.strokeWidth && a.push("strokeWidth"), ["n8n-icon", ...a.map((l) => n[l])];
    }), s = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = P(() => {
      let a = "1em";
      return t.size && (a = `${typeof t.size == "number" ? t.size : s[t.size]}px`), {
        height: a,
        width: a
      };
    }), i = P(() => {
      const a = {};
      return t.color && (a.color = `var(--color-${t.color})`), t.strokeWidth && (a["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), a;
    });
    return (a, l) => b(Td)[a.icon] ?? b(Ad)[a.icon] ? (_(), ue(Pt(
      b(Td)[a.icon] ?? b(Ad)[a.icon]
    ), {
      key: 0,
      class: Q(r.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: st(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : _e("", !0);
  }
}), P7 = "_strokeWidth_fqxq5_1", D7 = "_spin_fqxq5_6", B7 = {
  strokeWidth: P7,
  spin: D7
}, N7 = {
  $style: B7
}, Vu = /* @__PURE__ */ kr(O7, [["__cssModules", N7]]), F7 = { class: "n8n-spinner" }, q7 = {
  key: 0,
  class: "lds-ring"
}, z7 = /* @__PURE__ */ re({
  name: "N8nSpinner",
  __name: "Spinner",
  props: {
    size: { default: "medium" },
    type: { default: "dots" }
  },
  setup(e) {
    return (t, n) => (_(), A("span", F7, [
      t.type === "ring" ? (_(), A("div", q7, n[0] || (n[0] = [
        h("div", null, null, -1),
        h("div", null, null, -1),
        h("div", null, null, -1),
        h("div", null, null, -1)
      ]))) : (_(), ue(b(Vu), {
        key: 1,
        icon: "spinner",
        size: t.size,
        spin: ""
      }, null, 8, ["size"]))
    ]));
  }
}), H7 = { key: 1 }, j7 = /* @__PURE__ */ re({
  name: "N8nButton",
  __name: "Button",
  props: {
    block: { type: Boolean, default: !1 },
    element: { default: "button" },
    href: {},
    label: { default: "" },
    square: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    float: {},
    icon: {},
    loading: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    size: { default: "medium" },
    iconSize: {},
    text: { type: Boolean, default: !1 },
    type: { default: "primary" },
    nativeType: {}
  },
  setup(e) {
    const t = qu(), n = Ei(), r = e;
    Du(() => {
      r.element === "a" && !r.href && console.error("n8n-button:href is required for link buttons");
    });
    const s = P(() => r.loading ? "true" : void 0), o = P(() => r.disabled ? "true" : void 0), i = P(() => r.disabled || r.loading), a = P(
      () => r.iconSize ?? (r.size === "xmini" || r.size === "mini" ? "xsmall" : r.size)
    ), l = P(() => `button ${t.button} ${t[r.type]}${r.size ? ` ${t[r.size]}` : ""}${r.outline ? ` ${t.outline}` : ""}${r.loading ? ` ${t.loading}` : ""}${r.float ? ` ${t[`float-${r.float}`]}` : ""}${r.text ? ` ${t.text}` : ""}${r.disabled ? ` ${t.disabled}` : ""}${r.block ? ` ${t.block}` : ""}${r.active ? ` ${t.active}` : ""}${r.icon || r.loading ? ` ${t.withIcon}` : ""}${r.square ? ` ${t.square}` : ""}`);
    return (u, f) => (_(), ue(Pt(u.element), gt({
      class: l.value,
      disabled: i.value,
      "aria-disabled": o.value,
      "aria-busy": s.value,
      href: u.href,
      "aria-live": "polite"
    }, {
      ...b(n),
      ...r.nativeType ? { type: r.nativeType } : {}
    }), {
      default: he(() => [
        u.loading || u.icon ? (_(), A("span", {
          key: 0,
          class: Q(b(t).icon)
        }, [
          u.loading ? (_(), ue(b(z7), {
            key: 0,
            size: a.value
          }, null, 8, ["size"])) : u.icon ? (_(), ue(b(Vu), {
            key: 1,
            icon: u.icon,
            size: a.value
          }, null, 8, ["icon", "size"])) : _e("", !0)
        ], 2)) : _e("", !0),
        u.label ? (_(), A("span", H7, Ye(u.label), 1)) : u.$slots.default ? we(u.$slots, "default", { key: 2 }) : _e("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy", "href"]));
  }
}), V7 = "_button_dxdq8_115", U7 = "_active_dxdq8_149", K7 = "_disabled_dxdq8_167", G7 = "_loading_dxdq8_175", W7 = "_secondary_dxdq8_198", Z7 = "_highlight_dxdq8_220", X7 = "_tertiary_dxdq8_242", J7 = "_success_dxdq8_264", Y7 = "_warning_dxdq8_286", Q7 = "_danger_dxdq8_308", eS = "_xmini_dxdq8_333", tS = "_square_dxdq8_338", nS = "_mini_dxdq8_343", rS = "_small_dxdq8_353", oS = "_medium_dxdq8_363", sS = "_large_dxdq8_373", iS = "_xlarge_dxdq8_378", aS = "_outline_dxdq8_391", lS = "_primary_dxdq8_395", cS = "_text_dxdq8_432", uS = "_transparent_dxdq8_500", fS = "_withIcon_dxdq8_505", dS = "_icon_dxdq8_511", pS = "_block_dxdq8_520", hS = {
  button: V7,
  active: U7,
  disabled: K7,
  loading: G7,
  secondary: W7,
  highlight: Z7,
  tertiary: X7,
  success: J7,
  warning: Y7,
  danger: Q7,
  xmini: eS,
  square: tS,
  mini: nS,
  small: rS,
  medium: oS,
  large: sS,
  xlarge: iS,
  outline: aS,
  primary: lS,
  text: cS,
  transparent: uS,
  withIcon: fS,
  icon: dS,
  block: pS,
  "float-left": "_float-left_dxdq8_524",
  "float-right": "_float-right_dxdq8_528"
}, gS = {
  $style: hS
}, mS = /* @__PURE__ */ kr(j7, [["__cssModules", gS]]), vS = /* @__PURE__ */ re({
  name: "N8nText",
  __name: "Text",
  props: {
    bold: { type: Boolean, default: !1 },
    size: { default: "medium" },
    color: {},
    align: {},
    compact: { type: Boolean, default: !1 },
    tag: { default: "span" }
  },
  setup(e) {
    const t = e, n = qu(), r = P(() => {
      const s = [];
      return t.align && s.push(`align-${t.align}`), t.color && s.push(t.color), t.compact && s.push("compact"), s.push(`size-${t.size}`), s.push(t.bold ? "bold" : "regular"), s.map((o) => n[o]);
    });
    return (s, o) => (_(), ue(Pt(s.tag), gt({
      class: ["n8n-text", ...r.value]
    }, s.$attrs), {
      default: he(() => [
        we(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bS = "_bold_1e0nf_1", _S = "_regular_1e0nf_5", yS = "_compact_1e0nf_34", wS = "_primary_1e0nf_38", kS = "_secondary_1e0nf_42", xS = "_danger_1e0nf_62", CS = "_success_1e0nf_66", SS = "_warning_1e0nf_70", ES = {
  bold: bS,
  regular: _S,
  "size-xlarge": "_size-xlarge_1e0nf_9",
  "size-large": "_size-large_1e0nf_14",
  "size-medium": "_size-medium_1e0nf_19",
  "size-small": "_size-small_1e0nf_24",
  "size-xsmall": "_size-xsmall_1e0nf_29",
  compact: yS,
  primary: wS,
  secondary: kS,
  "text-dark": "_text-dark_1e0nf_46",
  "text-base": "_text-base_1e0nf_50",
  "text-light": "_text-light_1e0nf_54",
  "text-xlight": "_text-xlight_1e0nf_58",
  danger: xS,
  success: CS,
  warning: SS,
  "foreground-dark": "_foreground-dark_1e0nf_74",
  "foreground-xdark": "_foreground-xdark_1e0nf_78",
  "align-left": "_align-left_1e0nf_82",
  "align-right": "_align-right_1e0nf_86",
  "align-center": "_align-center_1e0nf_90"
}, AS = {
  $style: ES
}, TS = /* @__PURE__ */ kr(vS, [["__cssModules", AS]]), Hn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = e == null ? void 0 : e(s);
  if (n === !1 || !o)
    return t == null ? void 0 : t(s);
};
var Md;
const Bt = typeof window < "u", MS = (e) => typeof e == "string", lb = () => {
}, cb = Bt && ((Md = window == null ? void 0 : window.navigator) == null ? void 0 : Md.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ub(e) {
  return typeof e == "function" ? e() : b(e);
}
function $S(e) {
  return e;
}
function Uu(e) {
  return xu() ? (Oh(e), !0) : !1;
}
function LS(e, t = !0) {
  _t() ? it(e) : t ? e() : Ue(e);
}
function hr(e) {
  var t;
  const n = ub(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ku = Bt ? window : void 0;
function Fr(...e) {
  let t, n, r, s;
  if (MS(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = Ku) : [t, n, r, s] = e, !t)
    return lb;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((f) => f()), o.length = 0;
  }, a = (f, c, p, d) => (f.addEventListener(c, p, d), () => f.removeEventListener(c, p, d)), l = Te(() => [hr(t), ub(s)], ([f, c]) => {
    i(), f && o.push(...n.flatMap((p) => r.map((d) => a(f, p, d, c))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return Uu(u), u;
}
let $d = !1;
function IS(e, t, n = {}) {
  const { window: r = Ku, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  cb && !$d && ($d = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", lb)));
  let a = !0;
  const l = (p) => s.some((d) => {
    if (typeof d == "string")
      return Array.from(r.document.querySelectorAll(d)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = hr(d);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), f = [
    Fr(r, "click", (p) => {
      const d = hr(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (a = !l(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    Fr(r, "pointerdown", (p) => {
      const d = hr(e);
      d && (a = !p.composedPath().includes(d) && !l(p));
    }, { passive: !0 }),
    i && Fr(r, "blur", (p) => {
      var d;
      const v = hr(e);
      ((d = r.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function RS(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), LS(r, t), n;
}
const Ld = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Id = "__vueuse_ssr_handlers__";
Ld[Id] = Ld[Id] || {};
var Rd = Object.getOwnPropertySymbols, OS = Object.prototype.hasOwnProperty, PS = Object.prototype.propertyIsEnumerable, DS = (e, t) => {
  var n = {};
  for (var r in e)
    OS.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Rd)
    for (var r of Rd(e))
      t.indexOf(r) < 0 && PS.call(e, r) && (n[r] = e[r]);
  return n;
};
function $i(e, t, n = {}) {
  const r = n, { window: s = Ku } = r, o = DS(r, ["window"]);
  let i;
  const a = RS(() => s && "ResizeObserver" in s), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = Te(() => hr(e), (c) => {
    l(), a.value && s && c && (i = new ResizeObserver(t), i.observe(c, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Uu(f), {
    isSupported: a,
    stop: f
  };
}
var Od;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Od || (Od = {}));
var BS = Object.defineProperty, Pd = Object.getOwnPropertySymbols, NS = Object.prototype.hasOwnProperty, FS = Object.prototype.propertyIsEnumerable, Dd = (e, t, n) => t in e ? BS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qS = (e, t) => {
  for (var n in t || (t = {}))
    NS.call(t, n) && Dd(e, n, t[n]);
  if (Pd)
    for (var n of Pd(t))
      FS.call(t, n) && Dd(e, n, t[n]);
  return e;
};
const zS = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
qS({
  linear: $S
}, zS);
const HS = () => Bt && /firefox/i.test(window.navigator.userAgent), Gu = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
    clientX: t,
    clientY: n
  };
};
var fb = typeof global == "object" && global && global.Object === Object && global, jS = typeof self == "object" && self && self.Object === Object && self, Pn = fb || jS || Function("return this")(), vr = Pn.Symbol, db = Object.prototype, VS = db.hasOwnProperty, US = db.toString, Mo = vr ? vr.toStringTag : void 0;
function KS(e) {
  var t = VS.call(e, Mo), n = e[Mo];
  try {
    e[Mo] = void 0;
    var r = !0;
  } catch {
  }
  var s = US.call(e);
  return r && (t ? e[Mo] = n : delete e[Mo]), s;
}
var GS = Object.prototype, WS = GS.toString;
function ZS(e) {
  return WS.call(e);
}
var XS = "[object Null]", JS = "[object Undefined]", Bd = vr ? vr.toStringTag : void 0;
function wo(e) {
  return e == null ? e === void 0 ? JS : XS : Bd && Bd in Object(e) ? KS(e) : ZS(e);
}
function fo(e) {
  return e != null && typeof e == "object";
}
var YS = "[object Symbol]";
function Li(e) {
  return typeof e == "symbol" || fo(e) && wo(e) == YS;
}
function QS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Xn = Array.isArray, Nd = vr ? vr.prototype : void 0, Fd = Nd ? Nd.toString : void 0;
function pb(e) {
  if (typeof e == "string")
    return e;
  if (Xn(e))
    return QS(e, pb) + "";
  if (Li(e))
    return Fd ? Fd.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var eE = /\s/;
function tE(e) {
  for (var t = e.length; t-- && eE.test(e.charAt(t)); )
    ;
  return t;
}
var nE = /^\s+/;
function rE(e) {
  return e && e.slice(0, tE(e) + 1).replace(nE, "");
}
function po(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qd = NaN, oE = /^[-+]0x[0-9a-f]+$/i, sE = /^0b[01]+$/i, iE = /^0o[0-7]+$/i, aE = parseInt;
function zd(e) {
  if (typeof e == "number")
    return e;
  if (Li(e))
    return qd;
  if (po(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = po(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = rE(e);
  var n = sE.test(e);
  return n || iE.test(e) ? aE(e.slice(2), n ? 2 : 8) : oE.test(e) ? qd : +e;
}
function lE(e) {
  return e;
}
var cE = "[object AsyncFunction]", uE = "[object Function]", fE = "[object GeneratorFunction]", dE = "[object Proxy]";
function hb(e) {
  if (!po(e))
    return !1;
  var t = wo(e);
  return t == uE || t == fE || t == cE || t == dE;
}
var ha = Pn["__core-js_shared__"], Hd = (function() {
  var e = /[^.]+$/.exec(ha && ha.keys && ha.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function pE(e) {
  return !!Hd && Hd in e;
}
var hE = Function.prototype, gE = hE.toString;
function Kr(e) {
  if (e != null) {
    try {
      return gE.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var mE = /[\\^$.*+?()[\]{}|]/g, vE = /^\[object .+?Constructor\]$/, bE = Function.prototype, _E = Object.prototype, yE = bE.toString, wE = _E.hasOwnProperty, kE = RegExp(
  "^" + yE.call(wE).replace(mE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xE(e) {
  if (!po(e) || pE(e))
    return !1;
  var t = hb(e) ? kE : vE;
  return t.test(Kr(e));
}
function CE(e, t) {
  return e == null ? void 0 : e[t];
}
function ko(e, t) {
  var n = CE(e, t);
  return xE(n) ? n : void 0;
}
var su = ko(Pn, "WeakMap");
function SE(e, t, n, r) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var EE = 9007199254740991, AE = /^(?:0|[1-9]\d*)$/;
function gb(e, t) {
  var n = typeof e;
  return t = t ?? EE, !!t && (n == "number" || n != "symbol" && AE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function mb(e, t) {
  return e === t || e !== e && t !== t;
}
var TE = 9007199254740991;
function Wu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= TE;
}
function ME(e) {
  return e != null && Wu(e.length) && !hb(e);
}
var $E = Object.prototype;
function LE(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || $E;
  return e === n;
}
function IE(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var RE = "[object Arguments]";
function jd(e) {
  return fo(e) && wo(e) == RE;
}
var vb = Object.prototype, OE = vb.hasOwnProperty, PE = vb.propertyIsEnumerable, bb = jd(/* @__PURE__ */ (function() {
  return arguments;
})()) ? jd : function(e) {
  return fo(e) && OE.call(e, "callee") && !PE.call(e, "callee");
};
function DE() {
  return !1;
}
var _b = typeof exports == "object" && exports && !exports.nodeType && exports, Vd = _b && typeof module == "object" && module && !module.nodeType && module, BE = Vd && Vd.exports === _b, Ud = BE ? Pn.Buffer : void 0, NE = Ud ? Ud.isBuffer : void 0, iu = NE || DE, FE = "[object Arguments]", qE = "[object Array]", zE = "[object Boolean]", HE = "[object Date]", jE = "[object Error]", VE = "[object Function]", UE = "[object Map]", KE = "[object Number]", GE = "[object Object]", WE = "[object RegExp]", ZE = "[object Set]", XE = "[object String]", JE = "[object WeakMap]", YE = "[object ArrayBuffer]", QE = "[object DataView]", eA = "[object Float32Array]", tA = "[object Float64Array]", nA = "[object Int8Array]", rA = "[object Int16Array]", oA = "[object Int32Array]", sA = "[object Uint8Array]", iA = "[object Uint8ClampedArray]", aA = "[object Uint16Array]", lA = "[object Uint32Array]", ft = {};
ft[eA] = ft[tA] = ft[nA] = ft[rA] = ft[oA] = ft[sA] = ft[iA] = ft[aA] = ft[lA] = !0;
ft[FE] = ft[qE] = ft[YE] = ft[zE] = ft[QE] = ft[HE] = ft[jE] = ft[VE] = ft[UE] = ft[KE] = ft[GE] = ft[WE] = ft[ZE] = ft[XE] = ft[JE] = !1;
function cA(e) {
  return fo(e) && Wu(e.length) && !!ft[wo(e)];
}
function uA(e) {
  return function(t) {
    return e(t);
  };
}
var yb = typeof exports == "object" && exports && !exports.nodeType && exports, zo = yb && typeof module == "object" && module && !module.nodeType && module, fA = zo && zo.exports === yb, ga = fA && fb.process, Kd = (function() {
  try {
    var e = zo && zo.require && zo.require("util").types;
    return e || ga && ga.binding && ga.binding("util");
  } catch {
  }
})(), Gd = Kd && Kd.isTypedArray, wb = Gd ? uA(Gd) : cA, dA = Object.prototype, pA = dA.hasOwnProperty;
function hA(e, t) {
  var n = Xn(e), r = !n && bb(e), s = !n && !r && iu(e), o = !n && !r && !s && wb(e), i = n || r || s || o, a = i ? IE(e.length, String) : [], l = a.length;
  for (var u in e)
    pA.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gb(u, l))) && a.push(u);
  return a;
}
function gA(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var mA = gA(Object.keys, Object), vA = Object.prototype, bA = vA.hasOwnProperty;
function _A(e) {
  if (!LE(e))
    return mA(e);
  var t = [];
  for (var n in Object(e))
    bA.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function kb(e) {
  return ME(e) ? hA(e) : _A(e);
}
var yA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wA = /^\w*$/;
function Zu(e, t) {
  if (Xn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Li(e) ? !0 : wA.test(e) || !yA.test(e) || t != null && e in Object(t);
}
var Qo = ko(Object, "create");
function kA() {
  this.__data__ = Qo ? Qo(null) : {}, this.size = 0;
}
function xA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var CA = "__lodash_hash_undefined__", SA = Object.prototype, EA = SA.hasOwnProperty;
function AA(e) {
  var t = this.__data__;
  if (Qo) {
    var n = t[e];
    return n === CA ? void 0 : n;
  }
  return EA.call(t, e) ? t[e] : void 0;
}
var TA = Object.prototype, MA = TA.hasOwnProperty;
function $A(e) {
  var t = this.__data__;
  return Qo ? t[e] !== void 0 : MA.call(t, e);
}
var LA = "__lodash_hash_undefined__";
function IA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qo && t === void 0 ? LA : t, this;
}
function Ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ur.prototype.clear = kA;
Ur.prototype.delete = xA;
Ur.prototype.get = AA;
Ur.prototype.has = $A;
Ur.prototype.set = IA;
function RA() {
  this.__data__ = [], this.size = 0;
}
function Ii(e, t) {
  for (var n = e.length; n--; )
    if (mb(e[n][0], t))
      return n;
  return -1;
}
var OA = Array.prototype, PA = OA.splice;
function DA(e) {
  var t = this.__data__, n = Ii(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : PA.call(t, n, 1), --this.size, !0;
}
function BA(e) {
  var t = this.__data__, n = Ii(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function NA(e) {
  return Ii(this.__data__, e) > -1;
}
function FA(e, t) {
  var n = this.__data__, r = Ii(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
er.prototype.clear = RA;
er.prototype.delete = DA;
er.prototype.get = BA;
er.prototype.has = NA;
er.prototype.set = FA;
var es = ko(Pn, "Map");
function qA() {
  this.size = 0, this.__data__ = {
    hash: new Ur(),
    map: new (es || er)(),
    string: new Ur()
  };
}
function zA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ri(e, t) {
  var n = e.__data__;
  return zA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function HA(e) {
  var t = Ri(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function jA(e) {
  return Ri(this, e).get(e);
}
function VA(e) {
  return Ri(this, e).has(e);
}
function UA(e, t) {
  var n = Ri(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function tr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = qA;
tr.prototype.delete = HA;
tr.prototype.get = jA;
tr.prototype.has = VA;
tr.prototype.set = UA;
var KA = "Expected a function";
function Xu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(KA);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, r);
    return n.cache = o.set(s, i) || o, i;
  };
  return n.cache = new (Xu.Cache || tr)(), n;
}
Xu.Cache = tr;
var GA = 500;
function WA(e) {
  var t = Xu(e, function(r) {
    return n.size === GA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ZA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, XA = /\\(\\)?/g, JA = WA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ZA, function(n, r, s, o) {
    t.push(s ? o.replace(XA, "$1") : r || n);
  }), t;
});
function YA(e) {
  return e == null ? "" : pb(e);
}
function xb(e, t) {
  return Xn(e) ? e : Zu(e, t) ? [e] : JA(YA(e));
}
function Oi(e) {
  if (typeof e == "string" || Li(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Cb(e, t) {
  t = xb(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Oi(t[n++])];
  return n && n == r ? e : void 0;
}
function rn(e, t, n) {
  var r = e == null ? void 0 : Cb(e, t);
  return r === void 0 ? n : r;
}
function QA(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
function eT() {
  this.__data__ = new er(), this.size = 0;
}
function tT(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function nT(e) {
  return this.__data__.get(e);
}
function rT(e) {
  return this.__data__.has(e);
}
var oT = 200;
function sT(e, t) {
  var n = this.__data__;
  if (n instanceof er) {
    var r = n.__data__;
    if (!es || r.length < oT - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new tr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Kn(e) {
  var t = this.__data__ = new er(e);
  this.size = t.size;
}
Kn.prototype.clear = eT;
Kn.prototype.delete = tT;
Kn.prototype.get = nT;
Kn.prototype.has = rT;
Kn.prototype.set = sT;
function iT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i);
  }
  return o;
}
function aT() {
  return [];
}
var lT = Object.prototype, cT = lT.propertyIsEnumerable, Wd = Object.getOwnPropertySymbols, uT = Wd ? function(e) {
  return e == null ? [] : (e = Object(e), iT(Wd(e), function(t) {
    return cT.call(e, t);
  }));
} : aT;
function fT(e, t, n) {
  var r = t(e);
  return Xn(e) ? r : QA(r, n(e));
}
function Zd(e) {
  return fT(e, kb, uT);
}
var au = ko(Pn, "DataView"), lu = ko(Pn, "Promise"), cu = ko(Pn, "Set"), Xd = "[object Map]", dT = "[object Object]", Jd = "[object Promise]", Yd = "[object Set]", Qd = "[object WeakMap]", e0 = "[object DataView]", pT = Kr(au), hT = Kr(es), gT = Kr(lu), mT = Kr(cu), vT = Kr(su), pr = wo;
(au && pr(new au(new ArrayBuffer(1))) != e0 || es && pr(new es()) != Xd || lu && pr(lu.resolve()) != Jd || cu && pr(new cu()) != Yd || su && pr(new su()) != Qd) && (pr = function(e) {
  var t = wo(e), n = t == dT ? e.constructor : void 0, r = n ? Kr(n) : "";
  if (r)
    switch (r) {
      case pT:
        return e0;
      case hT:
        return Xd;
      case gT:
        return Jd;
      case mT:
        return Yd;
      case vT:
        return Qd;
    }
  return t;
});
var t0 = Pn.Uint8Array, bT = "__lodash_hash_undefined__";
function _T(e) {
  return this.__data__.set(e, bT), this;
}
function yT(e) {
  return this.__data__.has(e);
}
function li(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new tr(); ++t < n; )
    this.add(e[t]);
}
li.prototype.add = li.prototype.push = _T;
li.prototype.has = yT;
function wT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function kT(e, t) {
  return e.has(t);
}
var xT = 1, CT = 2;
function Sb(e, t, n, r, s, o) {
  var i = n & xT, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, p = !0, d = n & CT ? new li() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < a; ) {
    var v = e[c], g = t[c];
    if (r)
      var k = i ? r(g, v, c, t, e, o) : r(v, g, c, e, t, o);
    if (k !== void 0) {
      if (k)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!wT(t, function(m, x) {
        if (!kT(d, x) && (v === m || s(v, m, n, r, o)))
          return d.push(x);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || s(v, g, n, r, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
function ST(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
function ET(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var AT = 1, TT = 2, MT = "[object Boolean]", $T = "[object Date]", LT = "[object Error]", IT = "[object Map]", RT = "[object Number]", OT = "[object RegExp]", PT = "[object Set]", DT = "[object String]", BT = "[object Symbol]", NT = "[object ArrayBuffer]", FT = "[object DataView]", n0 = vr ? vr.prototype : void 0, ma = n0 ? n0.valueOf : void 0;
function qT(e, t, n, r, s, o, i) {
  switch (n) {
    case FT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case NT:
      return !(e.byteLength != t.byteLength || !o(new t0(e), new t0(t)));
    case MT:
    case $T:
    case RT:
      return mb(+e, +t);
    case LT:
      return e.name == t.name && e.message == t.message;
    case OT:
    case DT:
      return e == t + "";
    case IT:
      var a = ST;
    case PT:
      var l = r & AT;
      if (a || (a = ET), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= TT, i.set(e, t);
      var f = Sb(a(e), a(t), r, s, o, i);
      return i.delete(e), f;
    case BT:
      if (ma)
        return ma.call(e) == ma.call(t);
  }
  return !1;
}
var zT = 1, HT = Object.prototype, jT = HT.hasOwnProperty;
function VT(e, t, n, r, s, o) {
  var i = n & zT, a = Zd(e), l = a.length, u = Zd(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(i ? p in t : jT.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var k = i; ++c < l; ) {
    p = a[c];
    var m = e[p], x = t[p];
    if (r)
      var w = i ? r(x, m, p, t, e, o) : r(m, x, p, e, t, o);
    if (!(w === void 0 ? m === x || s(m, x, n, r, o) : w)) {
      g = !1;
      break;
    }
    k || (k = p == "constructor");
  }
  if (g && !k) {
    var y = e.constructor, S = t.constructor;
    y != S && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var UT = 1, r0 = "[object Arguments]", o0 = "[object Array]", Es = "[object Object]", KT = Object.prototype, s0 = KT.hasOwnProperty;
function GT(e, t, n, r, s, o) {
  var i = Xn(e), a = Xn(t), l = i ? o0 : pr(e), u = a ? o0 : pr(t);
  l = l == r0 ? Es : l, u = u == r0 ? Es : u;
  var f = l == Es, c = u == Es, p = l == u;
  if (p && iu(e)) {
    if (!iu(t))
      return !1;
    i = !0, f = !1;
  }
  if (p && !f)
    return o || (o = new Kn()), i || wb(e) ? Sb(e, t, n, r, s, o) : qT(e, t, l, n, r, s, o);
  if (!(n & UT)) {
    var d = f && s0.call(e, "__wrapped__"), v = c && s0.call(t, "__wrapped__");
    if (d || v) {
      var g = d ? e.value() : e, k = v ? t.value() : t;
      return o || (o = new Kn()), s(g, k, n, r, o);
    }
  }
  return p ? (o || (o = new Kn()), VT(e, t, n, r, s, o)) : !1;
}
function Pi(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !fo(e) && !fo(t) ? e !== e && t !== t : GT(e, t, n, r, Pi, s);
}
var WT = 1, ZT = 2;
function XT(e, t, n, r) {
  var s = n.length, o = s;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var i = n[s];
    if (i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    i = n[s];
    var a = i[0], l = e[a], u = i[1];
    if (i[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var f = new Kn(), c;
      if (!(c === void 0 ? Pi(u, l, WT | ZT, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Eb(e) {
  return e === e && !po(e);
}
function JT(e) {
  for (var t = kb(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, Eb(s)];
  }
  return t;
}
function Ab(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function YT(e) {
  var t = JT(e);
  return t.length == 1 && t[0][2] ? Ab(t[0][0], t[0][1]) : function(n) {
    return n === e || XT(n, e, t);
  };
}
function QT(e, t) {
  return e != null && t in Object(e);
}
function eM(e, t, n) {
  t = xb(t, e);
  for (var r = -1, s = t.length, o = !1; ++r < s; ) {
    var i = Oi(t[r]);
    if (!(o = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && Wu(s) && gb(i, s) && (Xn(e) || bb(e)));
}
function tM(e, t) {
  return e != null && eM(e, t, QT);
}
var nM = 1, rM = 2;
function oM(e, t) {
  return Zu(e) && Eb(t) ? Ab(Oi(e), t) : function(n) {
    var r = rn(n, e);
    return r === void 0 && r === t ? tM(n, e) : Pi(t, r, nM | rM);
  };
}
function sM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function iM(e) {
  return function(t) {
    return Cb(t, e);
  };
}
function aM(e) {
  return Zu(e) ? sM(Oi(e)) : iM(e);
}
function lM(e) {
  return typeof e == "function" ? e : e == null ? lE : typeof e == "object" ? Xn(e) ? oM(e[0], e[1]) : YT(e) : aM(e);
}
var va = function() {
  return Pn.Date.now();
}, cM = "Expected a function", uM = Math.max, fM = Math.min;
function uu(e, t, n) {
  var r, s, o, i, a, l, u = 0, f = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(cM);
  t = zd(t) || 0, po(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? uM(zd(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function d(C) {
    var $ = r, M = s;
    return r = s = void 0, u = C, i = e.apply(M, $), i;
  }
  function v(C) {
    return u = C, a = setTimeout(m, t), f ? d(C) : i;
  }
  function g(C) {
    var $ = C - l, M = C - u, R = t - $;
    return c ? fM(R, o - M) : R;
  }
  function k(C) {
    var $ = C - l, M = C - u;
    return l === void 0 || $ >= t || $ < 0 || c && M >= o;
  }
  function m() {
    var C = va();
    if (k(C))
      return x(C);
    a = setTimeout(m, g(C));
  }
  function x(C) {
    return a = void 0, p && r ? d(C) : (r = s = void 0, i);
  }
  function w() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = s = a = void 0;
  }
  function y() {
    return a === void 0 ? i : x(va());
  }
  function S() {
    var C = va(), $ = k(C);
    if (r = arguments, s = this, l = C, $) {
      if (a === void 0)
        return v(l);
      if (c)
        return clearTimeout(a), a = setTimeout(m, t), d(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), i;
  }
  return S.cancel = w, S.flush = y, S;
}
function dM(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var s = r - 1;
  return SE(e, lM(t), s);
}
function ci(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
function fu(e, t) {
  return Pi(e, t);
}
function qr(e) {
  return e == null;
}
function pM(e) {
  return e === void 0;
}
const Tb = (e) => e === void 0, Ju = (e) => typeof e == "boolean", vt = (e) => typeof e == "number", ts = (e) => typeof Element > "u" ? !1 : e instanceof Element, hM = (e) => Ke(e) ? !Number.isNaN(Number(e)) : !1, gM = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class mM extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function vM(e, t) {
  throw new mM(`[${e}] ${t}`);
}
function ho(e, t = "px") {
  if (!e)
    return "";
  if (vt(e) || hM(e))
    return `${e}${t}`;
  if (Ke(e))
    return e;
}
function bM(e, t) {
  if (!Bt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const s = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), o = s + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  s < i ? e.scrollTop = s : o > a && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var _M = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Mb = _M, yM = /* @__PURE__ */ re({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), wM = yM, kM = /* @__PURE__ */ re({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), xM = kM, CM = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      h("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), SM = CM, EM = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      h("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Yu = EM, AM = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), du = AM, TM = /* @__PURE__ */ re({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), MM = TM, $M = /* @__PURE__ */ re({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), LM = $M, IM = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      h("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), RM = IM, OM = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), $b = OM, PM = /* @__PURE__ */ re({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), i0 = PM, DM = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), BM = DM;
const Lb = "__epPropKey", Be = (e) => e, NM = (e) => Fe(e) && !!e[Lb], Di = (e, t) => {
  if (!Fe(e) || NM(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, l = {
    type: o,
    required: !!r,
    validator: n || i ? (u) => {
      let f = !1, c = [];
      if (n && (c = Array.from(n), Xe(e, "default") && c.push(s), f || (f = c.includes(u))), i && (f || (f = i(u))), !f && c.length > 0) {
        const p = [...new Set(c)].map((d) => JSON.stringify(d)).join(", ");
        W4(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Lb]: !0
  };
  return Xe(e, "default") && (l.default = s), l;
}, ot = (e) => ci(Object.entries(e).map(([t, n]) => [
  t,
  Di(n, t)
])), kn = Be([
  String,
  Object,
  Function
]), Ib = {
  validating: $b,
  success: SM,
  error: Yu
}, Cn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, FM = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Qu = (e) => (e.install = Dt, e), Gn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Gt = "update:modelValue", ef = "change", us = ["", "default", "small", "large"], qM = {
  large: 40,
  default: 32,
  small: 24
}, zM = (e) => qM[e || "default"], HM = (e) => ["", ...us].includes(e), Rb = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), tf = (e) => e, jM = ["class", "style"], VM = /^on[A-Z]/, UM = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => ((n == null ? void 0 : n.value) || []).concat(jM)), s = _t();
  return P(s ? () => {
    var o;
    return ci(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !r.value.includes(i) && !(t && VM.test(i))));
  } : () => ({}));
}, Ob = ({ from: e, replacement: t, scope: n, version: r, ref: s, type: o = "API" }, i) => {
  Te(() => b(i), (a) => {
  }, {
    immediate: !0
  });
};
var KM = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const GM = (e) => (t, n) => WM(t, n, b(e)), WM = (e, t, n) => rn(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var o;
  return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`;
}), ZM = (e) => {
  const t = P(() => b(e).name), n = bt(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: GM(e)
  };
}, XM = Symbol("localeContextKey"), Sn = (e) => {
  const t = qe(XM, G());
  return ZM(P(() => t.value || KM));
}, ba = "el", JM = "is-", $r = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, YM = Symbol("namespaceContextKey"), nf = (e) => {
  const t = _t() ? qe(YM, G(ba)) : G(ba);
  return P(() => b(t) || ba);
}, Qe = (e, t) => {
  const n = nf();
  return {
    namespace: n,
    b: (g = "") => $r(n.value, e, g, "", ""),
    e: (g) => g ? $r(n.value, e, "", g, "") : "",
    m: (g) => g ? $r(n.value, e, "", "", g) : "",
    be: (g, k) => g && k ? $r(n.value, e, g, k, "") : "",
    em: (g, k) => g && k ? $r(n.value, e, "", g, k) : "",
    bm: (g, k) => g && k ? $r(n.value, e, g, "", k) : "",
    bem: (g, k, m) => g && k && m ? $r(n.value, e, g, k, m) : "",
    is: (g, ...k) => {
      const m = k.length >= 1 ? k[0] : !0;
      return g && m ? `${JM}${g}` : "";
    },
    cssVar: (g) => {
      const k = {};
      for (const m in g)
        g[m] && (k[`--${n.value}-${m}`] = g[m]);
      return k;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const k = {};
      for (const m in g)
        g[m] && (k[`--${n.value}-${e}-${m}`] = g[m]);
      return k;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, QM = Di({
  type: Be(Boolean),
  default: null
}), e$ = Di({
  type: Be(Function)
}), t$ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], s = {
    [e]: QM,
    [n]: e$
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: c
    }) => {
      const p = _t(), { emit: d } = p, v = p.props, g = P(() => Se(v[n])), k = P(() => v[e] === null), m = ($) => {
        i.value !== !0 && (i.value = !0, a && (a.value = $), Se(f) && f($));
      }, x = ($) => {
        i.value !== !1 && (i.value = !1, a && (a.value = $), Se(c) && c($));
      }, w = ($) => {
        if (v.disabled === !0 || Se(u) && !u())
          return;
        const M = g.value && Bt;
        M && d(t, !0), (k.value || !M) && m($);
      }, y = ($) => {
        if (v.disabled === !0 || !Bt)
          return;
        const M = g.value && Bt;
        M && d(t, !1), (k.value || !M) && x($);
      }, S = ($) => {
        Ju($) && (v.disabled && $ ? g.value && d(t, !1) : i.value !== $ && ($ ? m() : x()));
      }, C = () => {
        i.value ? y() : w();
      };
      return Te(() => v[e], S), l && p.appContext.config.globalProperties.$route !== void 0 && Te(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && i.value && y();
      }), it(() => {
        S(v[e]);
      }), {
        hide: y,
        show: w,
        toggle: C,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: r
  };
}, Pb = (e) => {
  const t = _t();
  return P(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Zt = "top", fn = "bottom", dn = "right", Xt = "left", rf = "auto", fs = [Zt, fn, dn, Xt], go = "start", ns = "end", n$ = "clippingParents", Db = "viewport", $o = "popper", r$ = "reference", a0 = fs.reduce(function(e, t) {
  return e.concat([t + "-" + go, t + "-" + ns]);
}, []), Bi = [].concat(fs, [rf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + go, t + "-" + ns]);
}, []), o$ = "beforeRead", s$ = "read", i$ = "afterRead", a$ = "beforeMain", l$ = "main", c$ = "afterMain", u$ = "beforeWrite", f$ = "write", d$ = "afterWrite", p$ = [o$, s$, i$, a$, l$, c$, u$, f$, d$];
function On(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function En(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function mo(e) {
  var t = En(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = En(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function of(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = En(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function h$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !cn(o) || !On(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(i) {
      var a = s[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function g$(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !cn(s) || !On(s) || (Object.assign(s.style, a), Object.keys(o).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
var Bb = { name: "applyStyles", enabled: !0, phase: "write", fn: h$, effect: g$, requires: ["computeStyles"] };
function Rn(e) {
  return e.split("-")[0];
}
var zr = Math.max, ui = Math.min, vo = Math.round;
function bo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, s = 1;
  if (cn(e) && t) {
    var o = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = vo(n.width) / i || 1), o > 0 && (s = vo(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / s, top: n.top / s, right: n.right / r, bottom: n.bottom / s, left: n.left / r, x: n.left / r, y: n.top / s };
}
function sf(e) {
  var t = bo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Nb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && of(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Jn(e) {
  return En(e).getComputedStyle(e);
}
function m$(e) {
  return ["table", "td", "th"].indexOf(On(e)) >= 0;
}
function xr(e) {
  return ((mo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ni(e) {
  return On(e) === "html" ? e : e.assignedSlot || e.parentNode || (of(e) ? e.host : null) || xr(e);
}
function l0(e) {
  return !cn(e) || Jn(e).position === "fixed" ? null : e.offsetParent;
}
function v$(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && cn(e)) {
    var r = Jn(e);
    if (r.position === "fixed") return null;
  }
  var s = Ni(e);
  for (of(s) && (s = s.host); cn(s) && ["html", "body"].indexOf(On(s)) < 0; ) {
    var o = Jn(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function ds(e) {
  for (var t = En(e), n = l0(e); n && m$(n) && Jn(n).position === "static"; ) n = l0(n);
  return n && (On(n) === "html" || On(n) === "body" && Jn(n).position === "static") ? t : n || v$(e) || t;
}
function af(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ho(e, t, n) {
  return zr(e, ui(t, n));
}
function b$(e, t, n) {
  var r = Ho(e, t, n);
  return r > n ? n : r;
}
function Fb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function qb(e) {
  return Object.assign({}, Fb(), e);
}
function zb(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var _$ = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, qb(typeof e != "number" ? e : zb(e, fs));
};
function y$(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Rn(n.placement), l = af(a), u = [Xt, dn].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!o || !i)) {
    var c = _$(s.padding, n), p = sf(o), d = l === "y" ? Zt : Xt, v = l === "y" ? fn : dn, g = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], k = i[l] - n.rects.reference[l], m = ds(o), x = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, w = g / 2 - k / 2, y = c[d], S = x - p[f] - c[v], C = x / 2 - p[f] / 2 + w, $ = Ho(y, C, S), M = l;
    n.modifiersData[r] = (t = {}, t[M] = $, t.centerOffset = $ - C, t);
  }
}
function w$(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Nb(t.elements.popper, s) || (t.elements.arrow = s));
}
var k$ = { name: "arrow", enabled: !0, phase: "main", fn: y$, effect: w$, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function _o(e) {
  return e.split("-")[1];
}
var x$ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function C$(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return { x: vo(t * s) / s || 0, y: vo(n * s) / s || 0 };
}
function c0(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, c = e.isFixed, p = i.x, d = p === void 0 ? 0 : p, v = i.y, g = v === void 0 ? 0 : v, k = typeof f == "function" ? f({ x: d, y: g }) : { x: d, y: g };
  d = k.x, g = k.y;
  var m = i.hasOwnProperty("x"), x = i.hasOwnProperty("y"), w = Xt, y = Zt, S = window;
  if (u) {
    var C = ds(n), $ = "clientHeight", M = "clientWidth";
    if (C === En(n) && (C = xr(n), Jn(C).position !== "static" && a === "absolute" && ($ = "scrollHeight", M = "scrollWidth")), C = C, s === Zt || (s === Xt || s === dn) && o === ns) {
      y = fn;
      var R = c && C === S && S.visualViewport ? S.visualViewport.height : C[$];
      g -= R - r.height, g *= l ? 1 : -1;
    }
    if (s === Xt || (s === Zt || s === fn) && o === ns) {
      w = dn;
      var D = c && C === S && S.visualViewport ? S.visualViewport.width : C[M];
      d -= D - r.width, d *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: a }, u && x$), B = f === !0 ? C$({ x: d, y: g }) : { x: d, y: g };
  if (d = B.x, g = B.y, l) {
    var oe;
    return Object.assign({}, N, (oe = {}, oe[y] = x ? "0" : "", oe[w] = m ? "0" : "", oe.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", oe));
  }
  return Object.assign({}, N, (t = {}, t[y] = x ? g + "px" : "", t[w] = m ? d + "px" : "", t.transform = "", t));
}
function S$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, i = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: Rn(t.placement), variation: _o(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, c0(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, c0(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Hb = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: S$, data: {} }, As = { passive: !0 };
function E$(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, i = r.resize, a = i === void 0 ? !0 : i, l = En(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, As);
  }), a && l.addEventListener("resize", n.update, As), function() {
    o && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, As);
    }), a && l.removeEventListener("resize", n.update, As);
  };
}
var jb = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: E$, data: {} }, A$ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return A$[t];
  });
}
var T$ = { start: "end", end: "start" };
function u0(e) {
  return e.replace(/start|end/g, function(t) {
    return T$[t];
  });
}
function lf(e) {
  var t = En(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function cf(e) {
  return bo(xr(e)).left + lf(e).scrollLeft;
}
function M$(e) {
  var t = En(e), n = xr(e), r = t.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, a = 0;
  return r && (s = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, a = r.offsetTop)), { width: s, height: o, x: i + cf(e), y: a };
}
function $$(e) {
  var t, n = xr(e), r = lf(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = zr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = zr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -r.scrollLeft + cf(e), l = -r.scrollTop;
  return Jn(s || n).direction === "rtl" && (a += zr(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: i, x: a, y: l };
}
function uf(e) {
  var t = Jn(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Vb(e) {
  return ["html", "body", "#document"].indexOf(On(e)) >= 0 ? e.ownerDocument.body : cn(e) && uf(e) ? e : Vb(Ni(e));
}
function jo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Vb(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = En(r), i = s ? [o].concat(o.visualViewport || [], uf(r) ? r : []) : r, a = t.concat(i);
  return s ? a : a.concat(jo(Ni(i)));
}
function pu(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function L$(e) {
  var t = bo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function f0(e, t) {
  return t === Db ? pu(M$(e)) : mo(t) ? L$(t) : pu($$(xr(e)));
}
function I$(e) {
  var t = jo(Ni(e)), n = ["absolute", "fixed"].indexOf(Jn(e).position) >= 0, r = n && cn(e) ? ds(e) : e;
  return mo(r) ? t.filter(function(s) {
    return mo(s) && Nb(s, r) && On(s) !== "body";
  }) : [];
}
function R$(e, t, n) {
  var r = t === "clippingParents" ? I$(e) : [].concat(t), s = [].concat(r, [n]), o = s[0], i = s.reduce(function(a, l) {
    var u = f0(e, l);
    return a.top = zr(u.top, a.top), a.right = ui(u.right, a.right), a.bottom = ui(u.bottom, a.bottom), a.left = zr(u.left, a.left), a;
  }, f0(e, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ub(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Rn(r) : null, o = r ? _o(r) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case Zt:
      l = { x: i, y: t.y - n.height };
      break;
    case fn:
      l = { x: i, y: t.y + t.height };
      break;
    case dn:
      l = { x: t.x + t.width, y: a };
      break;
    case Xt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = s ? af(s) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (o) {
      case go:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ns:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function rs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.boundary, i = o === void 0 ? n$ : o, a = n.rootBoundary, l = a === void 0 ? Db : a, u = n.elementContext, f = u === void 0 ? $o : u, c = n.altBoundary, p = c === void 0 ? !1 : c, d = n.padding, v = d === void 0 ? 0 : d, g = qb(typeof v != "number" ? v : zb(v, fs)), k = f === $o ? r$ : $o, m = e.rects.popper, x = e.elements[p ? k : f], w = R$(mo(x) ? x : x.contextElement || xr(e.elements.popper), i, l), y = bo(e.elements.reference), S = Ub({ reference: y, element: m, placement: s }), C = pu(Object.assign({}, m, S)), $ = f === $o ? C : y, M = { top: w.top - $.top + g.top, bottom: $.bottom - w.bottom + g.bottom, left: w.left - $.left + g.left, right: $.right - w.right + g.right }, R = e.modifiersData.offset;
  if (f === $o && R) {
    var D = R[s];
    Object.keys(M).forEach(function(N) {
      var B = [dn, fn].indexOf(N) >= 0 ? 1 : -1, oe = [Zt, fn].indexOf(N) >= 0 ? "y" : "x";
      M[N] += D[oe] * B;
    });
  }
  return M;
}
function O$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Bi : l, f = _o(r), c = f ? a ? a0 : a0.filter(function(v) {
    return _o(v) === f;
  }) : fs, p = c.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = c);
  var d = p.reduce(function(v, g) {
    return v[g] = rs(e, { placement: g, boundary: s, rootBoundary: o, padding: i })[Rn(g)], v;
  }, {});
  return Object.keys(d).sort(function(v, g) {
    return d[v] - d[g];
  });
}
function P$(e) {
  if (Rn(e) === rf) return [];
  var t = Xs(e);
  return [u0(e), t, u0(t)];
}
function D$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, c = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, v = d === void 0 ? !0 : d, g = n.allowedAutoPlacements, k = t.options.placement, m = Rn(k), x = m === k, w = l || (x || !v ? [Xs(k)] : P$(k)), y = [k].concat(w).reduce(function(Ee, Oe) {
      return Ee.concat(Rn(Oe) === rf ? O$(t, { placement: Oe, boundary: f, rootBoundary: c, padding: u, flipVariations: v, allowedAutoPlacements: g }) : Oe);
    }, []), S = t.rects.reference, C = t.rects.popper, $ = /* @__PURE__ */ new Map(), M = !0, R = y[0], D = 0; D < y.length; D++) {
      var N = y[D], B = Rn(N), oe = _o(N) === go, q = [Zt, fn].indexOf(B) >= 0, ie = q ? "width" : "height", j = rs(t, { placement: N, boundary: f, rootBoundary: c, altBoundary: p, padding: u }), V = q ? oe ? dn : Xt : oe ? fn : Zt;
      S[ie] > C[ie] && (V = Xs(V));
      var H = Xs(V), Y = [];
      if (o && Y.push(j[B] <= 0), a && Y.push(j[V] <= 0, j[H] <= 0), Y.every(function(Ee) {
        return Ee;
      })) {
        R = N, M = !1;
        break;
      }
      $.set(N, Y);
    }
    if (M) for (var I = v ? 3 : 1, Z = function(Ee) {
      var Oe = y.find(function(Pe) {
        var Ge = $.get(Pe);
        if (Ge) return Ge.slice(0, Ee).every(function(ze) {
          return ze;
        });
      });
      if (Oe) return R = Oe, "break";
    }, K = I; K > 0; K--) {
      var me = Z(K);
      if (me === "break") break;
    }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var B$ = { name: "flip", enabled: !0, phase: "main", fn: D$, requiresIfExists: ["offset"], data: { _skip: !1 } };
function d0(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function p0(e) {
  return [Zt, dn, fn, Xt].some(function(t) {
    return e[t] >= 0;
  });
}
function N$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, o = t.modifiersData.preventOverflow, i = rs(t, { elementContext: "reference" }), a = rs(t, { altBoundary: !0 }), l = d0(i, r), u = d0(a, s, o), f = p0(l), c = p0(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: c }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": c });
}
var F$ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: N$ };
function q$(e, t, n) {
  var r = Rn(e), s = [Xt, Zt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * s, [Xt, dn].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function z$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, i = Bi.reduce(function(f, c) {
    return f[c] = q$(c, t.rects, o), f;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var H$ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: z$ };
function j$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ub({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Kb = { name: "popperOffsets", enabled: !0, phase: "read", fn: j$, data: {} };
function V$(e) {
  return e === "x" ? "y" : "x";
}
function U$(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, c = n.padding, p = n.tether, d = p === void 0 ? !0 : p, v = n.tetherOffset, g = v === void 0 ? 0 : v, k = rs(t, { boundary: l, rootBoundary: u, padding: c, altBoundary: f }), m = Rn(t.placement), x = _o(t.placement), w = !x, y = af(m), S = V$(y), C = t.modifiersData.popperOffsets, $ = t.rects.reference, M = t.rects.popper, R = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, D = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (C) {
    if (o) {
      var oe, q = y === "y" ? Zt : Xt, ie = y === "y" ? fn : dn, j = y === "y" ? "height" : "width", V = C[y], H = V + k[q], Y = V - k[ie], I = d ? -M[j] / 2 : 0, Z = x === go ? $[j] : M[j], K = x === go ? -M[j] : -$[j], me = t.elements.arrow, Ee = d && me ? sf(me) : { width: 0, height: 0 }, Oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Fb(), Pe = Oe[q], Ge = Oe[ie], ze = Ho(0, $[j], Ee[j]), dt = w ? $[j] / 2 - I - ze - Pe - D.mainAxis : Z - ze - Pe - D.mainAxis, pe = w ? -$[j] / 2 + I + ze + Ge + D.mainAxis : K + ze + Ge + D.mainAxis, Me = t.elements.arrow && ds(t.elements.arrow), T = Me ? y === "y" ? Me.clientTop || 0 : Me.clientLeft || 0 : 0, L = (oe = N == null ? void 0 : N[y]) != null ? oe : 0, z = V + dt - L - T, J = V + pe - L, X = Ho(d ? ui(H, z) : H, V, d ? zr(Y, J) : Y);
      C[y] = X, B[y] = X - V;
    }
    if (a) {
      var ee, ae = y === "x" ? Zt : Xt, se = y === "x" ? fn : dn, ne = C[S], te = S === "y" ? "height" : "width", ye = ne + k[ae], fe = ne - k[se], ve = [Zt, Xt].indexOf(m) !== -1, U = (ee = N == null ? void 0 : N[S]) != null ? ee : 0, ce = ve ? ye : ne - $[te] - M[te] - U + D.altAxis, Ae = ve ? ne + $[te] + M[te] - U - D.altAxis : fe, Re = d && ve ? b$(ce, ne, Ae) : Ho(d ? ce : ye, ne, d ? Ae : fe);
      C[S] = Re, B[S] = Re - ne;
    }
    t.modifiersData[r] = B;
  }
}
var K$ = { name: "preventOverflow", enabled: !0, phase: "main", fn: U$, requiresIfExists: ["offset"] };
function G$(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function W$(e) {
  return e === En(e) || !cn(e) ? lf(e) : G$(e);
}
function Z$(e) {
  var t = e.getBoundingClientRect(), n = vo(t.width) / e.offsetWidth || 1, r = vo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function X$(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), s = cn(t) && Z$(t), o = xr(t), i = bo(e, s), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((On(t) !== "body" || uf(o)) && (a = W$(t)), cn(t) ? (l = bo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = cf(o))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function J$(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && s(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function Y$(e) {
  var t = J$(e);
  return p$.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Q$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function eL(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, { options: Object.assign({}, s.options, r.options), data: Object.assign({}, s.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var h0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function g0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ff(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? h0 : s;
  return function(i, a, l) {
    l === void 0 && (l = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, h0, o), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, f = [], c = !1, p = { state: u, setOptions: function(g) {
      var k = typeof g == "function" ? g(u.options) : g;
      v(), u.options = Object.assign({}, o, u.options, k), u.scrollParents = { reference: mo(i) ? jo(i) : i.contextElement ? jo(i.contextElement) : [], popper: jo(a) };
      var m = Y$(eL([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(x) {
        return x.enabled;
      }), d(), p.update();
    }, forceUpdate: function() {
      if (!c) {
        var g = u.elements, k = g.reference, m = g.popper;
        if (g0(k, m)) {
          u.rects = { reference: X$(k, ds(m), u.options.strategy === "fixed"), popper: sf(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var x = 0; x < u.orderedModifiers.length; x++) {
            if (u.reset === !0) {
              u.reset = !1, x = -1;
              continue;
            }
            var w = u.orderedModifiers[x], y = w.fn, S = w.options, C = S === void 0 ? {} : S, $ = w.name;
            typeof y == "function" && (u = y({ state: u, options: C, name: $, instance: p }) || u);
          }
        }
      }
    }, update: Q$(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      v(), c = !0;
    } };
    if (!g0(i, a)) return p;
    p.setOptions(l).then(function(g) {
      !c && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function d() {
      u.orderedModifiers.forEach(function(g) {
        var k = g.name, m = g.options, x = m === void 0 ? {} : m, w = g.effect;
        if (typeof w == "function") {
          var y = w({ state: u, name: k, instance: p, options: x }), S = function() {
          };
          f.push(y || S);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
ff();
var tL = [jb, Kb, Hb, Bb];
ff({ defaultModifiers: tL });
var nL = [jb, Kb, Hb, Bb, H$, B$, K$, k$, F$], rL = ff({ defaultModifiers: nL });
const oL = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = sL(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, s = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: c } = b(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...c || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = Un(), i = G({
    styles: {
      popper: {
        position: b(s).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return Te(s, (l) => {
    const u = b(o);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Te([e, t], ([l, u]) => {
    a(), !(!l || !u) && (o.value = rL(l, u, b(s)));
  }), Jt(() => {
    a();
  }), {
    state: P(() => {
      var l;
      return { ...((l = b(o)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => b(i).styles),
    attributes: P(() => b(i).attributes),
    update: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => b(o))
  };
};
function sL(e) {
  const t = Object.keys(e.elements), n = ci(t.map((s) => [s, e.styles[s] || {}])), r = ci(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: r
  };
}
function m0() {
  let e;
  const t = (r, s) => {
    n(), e = window.setTimeout(r, s);
  }, n = () => window.clearTimeout(e);
  return Uu(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const v0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, iL = Symbol("elIdInjection"), Gb = () => _t() ? qe(iL, v0) : v0, Fi = (e) => {
  const t = Gb(), n = nf();
  return P(() => b(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let eo = [];
const b0 = (e) => {
  const t = e;
  t.key === Gn.esc && eo.forEach((n) => n(t));
}, aL = (e) => {
  it(() => {
    eo.length === 0 && document.addEventListener("keydown", b0), Bt && eo.push(e);
  }), Jt(() => {
    eo = eo.filter((t) => t !== e), eo.length === 0 && Bt && document.removeEventListener("keydown", b0);
  });
};
let _0;
const Wb = () => {
  const e = nf(), t = Gb(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, lL = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, cL = () => {
  const { id: e, selector: t } = Wb();
  return g1(() => {
    Bt && !_0 && !document.body.querySelector(t.value) && (_0 = lL(e.value));
  }), {
    id: e,
    selector: t
  };
}, uL = ot({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), fL = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: s
}) => {
  const { registerTimeout: o } = m0(), {
    registerTimeout: i,
    cancelTimeout: a
  } = m0();
  return {
    onOpen: (f) => {
      o(() => {
        r(f);
        const c = b(n);
        vt(c) && c > 0 && i(() => {
          s(f);
        }, c);
      }, b(e));
    },
    onClose: (f) => {
      a(), o(() => {
        s(f);
      }, b(t));
    }
  };
}, Zb = Symbol("elForwardRef"), dL = (e) => {
  Kt(Zb, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, pL = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), y0 = G(0), hL = 2e3, gL = Symbol("zIndexContextKey"), mL = (e) => {
  const t = _t() ? qe(gL, void 0) : void 0, n = P(() => {
    const o = b(t);
    return vt(o) ? o : hL;
  }), r = P(() => n.value + y0.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (y0.value++, r.value)
  };
};
function vL(e) {
  const t = G();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: i } = e.value;
    if (s == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, s)), l = i.slice(Math.max(0, o));
    t.value = {
      selectionStart: s,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = t.value;
    if (o == null || i == null || a == null)
      return;
    let l = s.length;
    if (s.endsWith(i))
      l = s.length - i.length;
    else if (s.startsWith(o))
      l = o.length;
    else {
      const u = o[a - 1], f = s.indexOf(u, a - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const df = Di({
  type: String,
  values: us,
  required: !1
}), bL = Symbol("size"), _L = () => {
  const e = qe(bL, {});
  return P(() => b(e.size) || "");
};
function Xb(e, { afterFocus: t, beforeBlur: n, afterBlur: r } = {}) {
  const s = _t(), { emit: o } = s, i = Un(), a = G(!1), l = (c) => {
    a.value || (a.value = !0, o("focus", c), t == null || t());
  }, u = (c) => {
    var p;
    Se(n) && n(c) || c.relatedTarget && ((p = i.value) != null && p.contains(c.relatedTarget)) || (a.value = !1, o("blur", c), r == null || r());
  }, f = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Te(i, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), Fr(i, "click", f), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: l,
    handleBlur: u
  };
}
const yL = Symbol(), w0 = G();
function wL(e, t = void 0) {
  const n = _t() ? qe(yL, w0) : w0;
  return P(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  });
}
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const kL = ot({
  size: {
    type: Be([Number, String])
  },
  color: {
    type: String
  }
}), xL = /* @__PURE__ */ re({
  name: "ElIcon",
  inheritAttrs: !1
}), CL = /* @__PURE__ */ re({
  ...xL,
  props: kL,
  setup(e) {
    const t = e, n = Qe("icon"), r = P(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Tb(s) ? void 0 : ho(s),
        "--color": o
      };
    });
    return (s, o) => (_(), A("i", gt({
      class: b(n).b(),
      style: b(r)
    }, s.$attrs), [
      we(s.$slots, "default")
    ], 16));
  }
});
var SL = /* @__PURE__ */ Je(CL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Wt = Cn(SL), pf = Symbol("formContextKey"), fi = Symbol("formItemContextKey"), ps = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : Pb("size"), s = t.global ? n : _L(), o = t.form ? { size: void 0 } : qe(pf, void 0), i = t.formItem ? { size: void 0 } : qe(fi, void 0);
  return P(() => r.value || b(e) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || s.value || "");
}, qi = (e) => {
  const t = Pb("disabled"), n = qe(pf, void 0);
  return P(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, zi = () => {
  const e = qe(pf, void 0), t = qe(fi, void 0);
  return {
    form: e,
    formItem: t
  };
}, Jb = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = G(!1)), r || (r = G(!1));
  const s = G();
  let o;
  const i = P(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return it(() => {
    o = Te([bn(e, "id"), n], ([a, l]) => {
      const u = a ?? (l ? void 0 : Fi().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(r != null && r.value) && !l && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Si(() => {
    o && o(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: i,
    inputId: s
  };
};
let gn;
const EL = `
  height:0 !important;
  visibility:hidden !important;
  ${HS() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, AL = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function TL(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: AL.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: s, boxSizing: n };
}
function k0(e, t = 1, n) {
  var r;
  gn || (gn = document.createElement("textarea"), document.body.appendChild(gn));
  const { paddingSize: s, borderSize: o, boxSizing: i, contextStyle: a } = TL(e);
  gn.setAttribute("style", `${a};${EL}`), gn.value = e.value || e.placeholder || "";
  let l = gn.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + o : i === "content-box" && (l = l - s), gn.value = "";
  const f = gn.scrollHeight - s;
  if (vt(t)) {
    let c = f * t;
    i === "border-box" && (c = c + s + o), l = Math.max(c, l), u.minHeight = `${c}px`;
  }
  if (vt(n)) {
    let c = f * n;
    i === "border-box" && (c = c + s + o), l = Math.min(c, l);
  }
  return u.height = `${l}px`, (r = gn.parentNode) == null || r.removeChild(gn), gn = void 0, u;
}
const ML = ot({
  id: {
    type: String,
    default: void 0
  },
  size: df,
  disabled: Boolean,
  modelValue: {
    type: Be([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Be([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: kn
  },
  prefixIcon: {
    type: kn
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Be([Object, Array, String]),
    default: () => tf({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), $L = {
  [Gt]: (e) => Ke(e),
  input: (e) => Ke(e),
  change: (e) => Ke(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, LL = ["role"], IL = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], RL = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], OL = /* @__PURE__ */ re({
  name: "ElInput",
  inheritAttrs: !1
}), PL = /* @__PURE__ */ re({
  ...OL,
  props: ML,
  emits: $L,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Ei(), o = y1(), i = P(() => {
      const U = {};
      return r.containerRole === "combobox" && (U["aria-haspopup"] = s["aria-haspopup"], U["aria-owns"] = s["aria-owns"], U["aria-expanded"] = s["aria-expanded"]), U;
    }), a = P(() => [
      r.type === "textarea" ? k.b() : g.b(),
      g.m(d.value),
      g.is("disabled", v.value),
      g.is("exceed", Ee.value),
      {
        [g.b("group")]: o.prepend || o.append,
        [g.bm("group", "append")]: o.append,
        [g.bm("group", "prepend")]: o.prepend,
        [g.m("prefix")]: o.prefix || r.prefixIcon,
        [g.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: I.value && Z.value
      },
      s.class
    ]), l = P(() => [
      g.e("wrapper"),
      g.is("focus", D.value)
    ]), u = UM({
      excludeKeys: P(() => Object.keys(i.value))
    }), { form: f, formItem: c } = zi(), { inputId: p } = Jb(r, {
      formItemContext: c
    }), d = ps(), v = qi(), g = Qe("input"), k = Qe("textarea"), m = Un(), x = Un(), w = G(!1), y = G(!1), S = G(!1), C = G(), $ = Un(r.inputStyle), M = P(() => m.value || x.value), { wrapperRef: R, isFocused: D, handleFocus: N, handleBlur: B } = Xb(M, {
      afterBlur() {
        var U;
        r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "blur").catch((ce) => void 0));
      }
    }), oe = P(() => {
      var U;
      return (U = f == null ? void 0 : f.statusIcon) != null ? U : !1;
    }), q = P(() => (c == null ? void 0 : c.validateState) || ""), ie = P(() => q.value && Ib[q.value]), j = P(() => S.value ? BM : RM), V = P(() => [
      s.style,
      r.inputStyle
    ]), H = P(() => [
      r.inputStyle,
      $.value,
      { resize: r.resize }
    ]), Y = P(() => qr(r.modelValue) ? "" : String(r.modelValue)), I = P(() => r.clearable && !v.value && !r.readonly && !!Y.value && (D.value || w.value)), Z = P(() => r.showPassword && !v.value && !r.readonly && !!Y.value && (!!Y.value || D.value)), K = P(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), me = P(() => Y.value.length), Ee = P(() => !!K.value && me.value > Number(u.value.maxlength)), Oe = P(() => !!o.suffix || !!r.suffixIcon || I.value || r.showPassword || K.value || !!q.value && oe.value), [Pe, Ge] = vL(m);
    $i(x, (U) => {
      if (pe(), !K.value || r.resize !== "both")
        return;
      const ce = U[0], { width: Ae } = ce.contentRect;
      C.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const ze = () => {
      const { type: U, autosize: ce } = r;
      if (!(!Bt || U !== "textarea" || !x.value))
        if (ce) {
          const Ae = Fe(ce) ? ce.minRows : void 0, Re = Fe(ce) ? ce.maxRows : void 0, ut = k0(x.value, Ae, Re);
          $.value = {
            overflowY: "hidden",
            ...ut
          }, Ue(() => {
            x.value.offsetHeight, $.value = ut;
          });
        } else
          $.value = {
            minHeight: k0(x.value).minHeight
          };
    }, pe = ((U) => {
      let ce = !1;
      return () => {
        var Ae;
        if (ce || !r.autosize)
          return;
        ((Ae = x.value) == null ? void 0 : Ae.offsetParent) === null || (U(), ce = !0);
      };
    })(ze), Me = () => {
      const U = M.value, ce = r.formatter ? r.formatter(Y.value) : Y.value;
      !U || U.value === ce || (U.value = ce);
    }, T = async (U) => {
      Pe();
      let { value: ce } = U.target;
      if (r.formatter && (ce = r.parser ? r.parser(ce) : ce), !y.value) {
        if (ce === Y.value) {
          Me();
          return;
        }
        n(Gt, ce), n("input", ce), await Ue(), Me(), Ge();
      }
    }, L = (U) => {
      n("change", U.target.value);
    }, z = (U) => {
      n("compositionstart", U), y.value = !0;
    }, J = (U) => {
      var ce;
      n("compositionupdate", U);
      const Ae = (ce = U.target) == null ? void 0 : ce.value, Re = Ae[Ae.length - 1] || "";
      y.value = !Rb(Re);
    }, X = (U) => {
      n("compositionend", U), y.value && (y.value = !1, T(U));
    }, ee = () => {
      S.value = !S.value, ae();
    }, ae = async () => {
      var U;
      await Ue(), (U = M.value) == null || U.focus();
    }, se = () => {
      var U;
      return (U = M.value) == null ? void 0 : U.blur();
    }, ne = (U) => {
      w.value = !1, n("mouseleave", U);
    }, te = (U) => {
      w.value = !0, n("mouseenter", U);
    }, ye = (U) => {
      n("keydown", U);
    }, fe = () => {
      var U;
      (U = M.value) == null || U.select();
    }, ve = () => {
      n(Gt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Te(() => r.modelValue, () => {
      var U;
      Ue(() => ze()), r.validateEvent && ((U = c == null ? void 0 : c.validate) == null || U.call(c, "change").catch((ce) => void 0));
    }), Te(Y, () => Me()), Te(() => r.type, async () => {
      await Ue(), Me(), ze();
    }), it(() => {
      !r.formatter && r.parser, Me(), Ue(ze);
    }), t({
      input: m,
      textarea: x,
      ref: M,
      textareaStyle: H,
      autosize: bn(r, "autosize"),
      focus: ae,
      blur: se,
      select: fe,
      clear: ve,
      resizeTextarea: ze
    }), (U, ce) => Ut((_(), A("div", gt(b(i), {
      class: b(a),
      style: b(V),
      role: U.containerRole,
      onMouseenter: te,
      onMouseleave: ne
    }), [
      _e(" input "),
      U.type !== "textarea" ? (_(), A(et, { key: 0 }, [
        _e(" prepend slot "),
        U.$slots.prepend ? (_(), A("div", {
          key: 0,
          class: Q(b(g).be("group", "prepend"))
        }, [
          we(U.$slots, "prepend")
        ], 2)) : _e("v-if", !0),
        h("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: Q(b(l))
        }, [
          _e(" prefix slot "),
          U.$slots.prefix || U.prefixIcon ? (_(), A("span", {
            key: 0,
            class: Q(b(g).e("prefix"))
          }, [
            h("span", {
              class: Q(b(g).e("prefix-inner"))
            }, [
              we(U.$slots, "prefix"),
              U.prefixIcon ? (_(), ue(b(Wt), {
                key: 0,
                class: Q(b(g).e("icon"))
              }, {
                default: he(() => [
                  (_(), ue(Pt(U.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0),
          h("input", gt({
            id: b(p),
            ref_key: "input",
            ref: m,
            class: b(g).e("inner")
          }, b(u), {
            type: U.showPassword ? S.value ? "text" : "password" : U.type,
            disabled: b(v),
            formatter: U.formatter,
            parser: U.parser,
            readonly: U.readonly,
            autocomplete: U.autocomplete,
            tabindex: U.tabindex,
            "aria-label": U.label,
            placeholder: U.placeholder,
            style: U.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: z,
            onCompositionupdate: J,
            onCompositionend: X,
            onInput: T,
            onFocus: ce[0] || (ce[0] = (...Ae) => b(N) && b(N)(...Ae)),
            onBlur: ce[1] || (ce[1] = (...Ae) => b(B) && b(B)(...Ae)),
            onChange: L,
            onKeydown: ye
          }), null, 16, IL),
          _e(" suffix slot "),
          b(Oe) ? (_(), A("span", {
            key: 1,
            class: Q(b(g).e("suffix"))
          }, [
            h("span", {
              class: Q(b(g).e("suffix-inner"))
            }, [
              !b(I) || !b(Z) || !b(K) ? (_(), A(et, { key: 0 }, [
                we(U.$slots, "suffix"),
                U.suffixIcon ? (_(), ue(b(Wt), {
                  key: 0,
                  class: Q(b(g).e("icon"))
                }, {
                  default: he(() => [
                    (_(), ue(Pt(U.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0)
              ], 64)) : _e("v-if", !0),
              b(I) ? (_(), ue(b(Wt), {
                key: 1,
                class: Q([b(g).e("icon"), b(g).e("clear")]),
                onMousedown: nn(b(Dt), ["prevent"]),
                onClick: ve
              }, {
                default: he(() => [
                  xe(b(Yu))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : _e("v-if", !0),
              b(Z) ? (_(), ue(b(Wt), {
                key: 2,
                class: Q([b(g).e("icon"), b(g).e("password")]),
                onClick: ee
              }, {
                default: he(() => [
                  (_(), ue(Pt(b(j))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0),
              b(K) ? (_(), A("span", {
                key: 3,
                class: Q(b(g).e("count"))
              }, [
                h("span", {
                  class: Q(b(g).e("count-inner"))
                }, Ye(b(me)) + " / " + Ye(b(u).maxlength), 3)
              ], 2)) : _e("v-if", !0),
              b(q) && b(ie) && b(oe) ? (_(), ue(b(Wt), {
                key: 4,
                class: Q([
                  b(g).e("icon"),
                  b(g).e("validateIcon"),
                  b(g).is("loading", b(q) === "validating")
                ])
              }, {
                default: he(() => [
                  (_(), ue(Pt(b(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : _e("v-if", !0)
            ], 2)
          ], 2)) : _e("v-if", !0)
        ], 2),
        _e(" append slot "),
        U.$slots.append ? (_(), A("div", {
          key: 1,
          class: Q(b(g).be("group", "append"))
        }, [
          we(U.$slots, "append")
        ], 2)) : _e("v-if", !0)
      ], 64)) : (_(), A(et, { key: 1 }, [
        _e(" textarea "),
        h("textarea", gt({
          id: b(p),
          ref_key: "textarea",
          ref: x,
          class: b(k).e("inner")
        }, b(u), {
          tabindex: U.tabindex,
          disabled: b(v),
          readonly: U.readonly,
          autocomplete: U.autocomplete,
          style: b(H),
          "aria-label": U.label,
          placeholder: U.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: z,
          onCompositionupdate: J,
          onCompositionend: X,
          onInput: T,
          onFocus: ce[2] || (ce[2] = (...Ae) => b(N) && b(N)(...Ae)),
          onBlur: ce[3] || (ce[3] = (...Ae) => b(B) && b(B)(...Ae)),
          onChange: L,
          onKeydown: ye
        }), null, 16, RL),
        b(K) ? (_(), A("span", {
          key: 0,
          style: st(C.value),
          class: Q(b(g).e("count"))
        }, Ye(b(me)) + " / " + Ye(b(u).maxlength), 7)) : _e("v-if", !0)
      ], 64))
    ], 16, LL)), [
      [Zn, U.type !== "hidden"]
    ]);
  }
});
var DL = /* @__PURE__ */ Je(PL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Hi = Cn(DL), no = 4, BL = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, NL = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Yb = Symbol("scrollbarContextKey"), FL = ot({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), qL = "Thumb", zL = /* @__PURE__ */ re({
  __name: "thumb",
  props: FL,
  setup(e) {
    const t = e, n = qe(Yb), r = Qe("scrollbar");
    n || vM(qL, "can not inject scrollbar context");
    const s = G(), o = G(), i = G({}), a = G(!1);
    let l = !1, u = !1, f = Bt ? document.onselectstart : null;
    const c = P(() => BL[t.vertical ? "vertical" : "horizontal"]), p = P(() => NL({
      size: t.size,
      move: t.move,
      bar: c.value
    })), d = P(() => s.value[c.value.offset] ** 2 / n.wrapElement[c.value.scrollSize] / t.ratio / o.value[c.value.offset]), v = (C) => {
      var $;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), k(C);
      const M = C.currentTarget;
      M && (i.value[c.value.axis] = M[c.value.offset] - (C[c.value.client] - M.getBoundingClientRect()[c.value.direction]));
    }, g = (C) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const $ = Math.abs(C.target.getBoundingClientRect()[c.value.direction] - C[c.value.client]), M = o.value[c.value.offset] / 2, R = ($ - M) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = R * n.wrapElement[c.value.scrollSize] / 100;
    }, k = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", x), f = document.onselectstart, document.onselectstart = () => !1;
    }, m = (C) => {
      if (!s.value || !o.value || l === !1)
        return;
      const $ = i.value[c.value.axis];
      if (!$)
        return;
      const M = (s.value.getBoundingClientRect()[c.value.direction] - C[c.value.client]) * -1, R = o.value[c.value.offset] - $, D = (M - R) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = D * n.wrapElement[c.value.scrollSize] / 100;
    }, x = () => {
      l = !1, i.value[c.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", x), S(), u && (a.value = !1);
    }, w = () => {
      u = !1, a.value = !!t.size;
    }, y = () => {
      u = !0, a.value = l;
    };
    Jt(() => {
      S(), document.removeEventListener("mouseup", x);
    });
    const S = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Fr(bn(n, "scrollbarElement"), "mousemove", w), Fr(bn(n, "scrollbarElement"), "mouseleave", y), (C, $) => (_(), ue(Vr, {
      name: b(r).b("fade"),
      persisted: ""
    }, {
      default: he(() => [
        Ut(h("div", {
          ref_key: "instance",
          ref: s,
          class: Q([b(r).e("bar"), b(r).is(b(c).key)]),
          onMousedown: g
        }, [
          h("div", {
            ref_key: "thumb",
            ref: o,
            class: Q(b(r).e("thumb")),
            style: st(b(p)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Zn, C.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var x0 = /* @__PURE__ */ Je(zL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const HL = ot({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), jL = /* @__PURE__ */ re({
  __name: "bar",
  props: HL,
  setup(e, { expose: t }) {
    const n = e, r = G(0), s = G(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - no, l = i.offsetWidth - no;
          s.value = i.scrollTop * 100 / a * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, a) => (_(), A(et, null, [
      xe(x0, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      xe(x0, {
        move: s.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var VL = /* @__PURE__ */ Je(jL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const UL = ot({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Be([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), KL = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(vt)
}, GL = "ElScrollbar", WL = /* @__PURE__ */ re({
  name: GL
}), ZL = /* @__PURE__ */ re({
  ...WL,
  props: UL,
  emits: KL,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Qe("scrollbar");
    let o, i;
    const a = G(), l = G(), u = G(), f = G("0"), c = G("0"), p = G(), d = G(1), v = G(1), g = P(() => {
      const $ = {};
      return r.height && ($.height = ho(r.height)), r.maxHeight && ($.maxHeight = ho(r.maxHeight)), [r.wrapStyle, $];
    }), k = P(() => [
      r.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !r.native }
    ]), m = P(() => [s.e("view"), r.viewClass]), x = () => {
      var $;
      l.value && (($ = p.value) == null || $.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function w($, M) {
      Fe($) ? l.value.scrollTo($) : vt($) && vt(M) && l.value.scrollTo($, M);
    }
    const y = ($) => {
      vt($) && (l.value.scrollTop = $);
    }, S = ($) => {
      vt($) && (l.value.scrollLeft = $);
    }, C = () => {
      if (!l.value)
        return;
      const $ = l.value.offsetHeight - no, M = l.value.offsetWidth - no, R = $ ** 2 / l.value.scrollHeight, D = M ** 2 / l.value.scrollWidth, N = Math.max(R, r.minSize), B = Math.max(D, r.minSize);
      d.value = R / ($ - R) / (N / ($ - N)), v.value = D / (M - D) / (B / (M - B)), c.value = N + no < $ ? `${N}px` : "", f.value = B + no < M ? `${B}px` : "";
    };
    return Te(() => r.noresize, ($) => {
      $ ? (o == null || o(), i == null || i()) : ({ stop: o } = $i(u, C), i = Fr("resize", C));
    }, { immediate: !0 }), Te(() => [r.maxHeight, r.height], () => {
      r.native || Ue(() => {
        var $;
        C(), l.value && (($ = p.value) == null || $.handleScroll(l.value));
      });
    }), Kt(Yb, xn({
      scrollbarElement: a,
      wrapElement: l
    })), it(() => {
      r.native || Ue(() => {
        C();
      });
    }), m1(() => C()), t({
      wrapRef: l,
      update: C,
      scrollTo: w,
      setScrollTop: y,
      setScrollLeft: S,
      handleScroll: x
    }), ($, M) => (_(), A("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: Q(b(s).b())
    }, [
      h("div", {
        ref_key: "wrapRef",
        ref: l,
        class: Q(b(k)),
        style: st(b(g)),
        onScroll: x
      }, [
        (_(), ue(Pt($.tag), {
          id: $.id,
          ref_key: "resizeRef",
          ref: u,
          class: Q(b(m)),
          style: st($.viewStyle),
          role: $.role,
          "aria-label": $.ariaLabel,
          "aria-orientation": $.ariaOrientation
        }, {
          default: he(() => [
            we($.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      $.native ? _e("v-if", !0) : (_(), ue(VL, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: c.value,
        width: f.value,
        always: $.always,
        "ratio-x": v.value,
        "ratio-y": d.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var XL = /* @__PURE__ */ Je(ZL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const JL = Cn(XL), hf = Symbol("popper"), Qb = Symbol("popperContent"), YL = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], e_ = ot({
  role: {
    type: String,
    values: YL,
    default: "tooltip"
  }
}), QL = /* @__PURE__ */ re({
  name: "ElPopper",
  inheritAttrs: !1
}), eI = /* @__PURE__ */ re({
  ...QL,
  props: e_,
  setup(e, { expose: t }) {
    const n = e, r = G(), s = G(), o = G(), i = G(), a = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: i,
      role: a
    };
    return t(l), Kt(hf, l), (u, f) => we(u.$slots, "default");
  }
});
var tI = /* @__PURE__ */ Je(eI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const t_ = ot({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), nI = /* @__PURE__ */ re({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), rI = /* @__PURE__ */ re({
  ...nI,
  props: t_,
  setup(e, { expose: t }) {
    const n = e, r = Qe("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: i } = qe(Qb, void 0);
    return Te(() => n.arrowOffset, (a) => {
      s.value = a;
    }), Jt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (a, l) => (_(), A("span", {
      ref_key: "arrowRef",
      ref: o,
      class: Q(b(r).e("arrow")),
      style: st(b(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var oI = /* @__PURE__ */ Je(rI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const sI = "ElOnlyChild", iI = /* @__PURE__ */ re({
  name: sI,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const s = qe(Zb), o = pL((r = s == null ? void 0 : s.setForwardRef) != null ? r : Dt);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a || a.length > 1)
        return null;
      const l = n_(a);
      return l ? Ut(Wn(l, n), [[o]]) : null;
    };
  }
});
function n_(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Fe(n))
      switch (n.type) {
        case Ot:
          continue;
        case yo:
        case "svg":
          return C0(n);
        case et:
          return n_(n.children);
        default:
          return n;
      }
    return C0(n);
  }
  return null;
}
function C0(e) {
  const t = Qe("only-child");
  return xe("span", {
    class: t.e("content")
  }, [e]);
}
const r_ = ot({
  virtualRef: {
    type: Be(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Be(Function)
  },
  onMouseleave: {
    type: Be(Function)
  },
  onClick: {
    type: Be(Function)
  },
  onKeydown: {
    type: Be(Function)
  },
  onFocus: {
    type: Be(Function)
  },
  onBlur: {
    type: Be(Function)
  },
  onContextmenu: {
    type: Be(Function)
  },
  id: String,
  open: Boolean
}), aI = /* @__PURE__ */ re({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), lI = /* @__PURE__ */ re({
  ...aI,
  props: r_,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: s } = qe(hf, void 0);
    dL(s);
    const o = P(() => a.value ? n.id : void 0), i = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = P(() => a.value ? `${n.open}` : void 0);
    let u;
    return it(() => {
      Te(() => n.virtualRef, (f) => {
        f && (s.value = hr(f));
      }, {
        immediate: !0
      }), Te(s, (f, c) => {
        u == null || u(), u = void 0, ts(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var d;
          const v = n[p];
          v && (f.addEventListener(p.slice(2).toLowerCase(), v), (d = c == null ? void 0 : c.removeEventListener) == null || d.call(c, p.slice(2).toLowerCase(), v));
        }), u = Te([o, i, a, l], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, v) => {
            qr(p[v]) ? f.removeAttribute(d) : f.setAttribute(d, p[v]);
          });
        }, { immediate: !0 })), ts(c) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => c.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Jt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: s
    }), (f, c) => f.virtualTriggering ? _e("v-if", !0) : (_(), ue(b(iI), gt({ key: 0 }, f.$attrs, {
      "aria-controls": b(o),
      "aria-describedby": b(i),
      "aria-expanded": b(l),
      "aria-haspopup": b(a)
    }), {
      default: he(() => [
        we(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var cI = /* @__PURE__ */ Je(lI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const _a = "focus-trap.focus-after-trapped", ya = "focus-trap.focus-after-released", uI = "focus-trap.focusout-prevented", S0 = {
  cancelable: !0,
  bubbles: !1
}, fI = {
  cancelable: !0,
  bubbles: !1
}, E0 = "focusAfterTrapped", A0 = "focusAfterReleased", dI = Symbol("elFocusTrap"), gf = G(), ji = G(0), mf = G(0);
let Ts = 0;
const o_ = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, T0 = (e, t) => {
  for (const n of e)
    if (!pI(n, t))
      return n;
}, pI = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, hI = (e) => {
  const t = o_(e), n = T0(t, e), r = T0(t.reverse(), e);
  return [n, r];
}, gI = (e) => e instanceof HTMLInputElement && "select" in e, lr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), mf.value = window.performance.now(), e !== n && gI(e) && t && e.select();
  }
};
function M0(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const mI = () => {
  let e = [];
  return {
    push: (r) => {
      const s = e[0];
      s && r !== s && s.pause(), e = M0(e, r), e.unshift(r);
    },
    remove: (r) => {
      var s, o;
      e = M0(e, r), (o = (s = e[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, vI = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (lr(r, t), document.activeElement !== n)
      return;
}, $0 = mI(), bI = () => ji.value > mf.value, Ms = () => {
  gf.value = "pointer", ji.value = window.performance.now();
}, L0 = () => {
  gf.value = "keyboard", ji.value = window.performance.now();
}, _I = () => (it(() => {
  Ts === 0 && (document.addEventListener("mousedown", Ms), document.addEventListener("touchstart", Ms), document.addEventListener("keydown", L0)), Ts++;
}), Jt(() => {
  Ts--, Ts <= 0 && (document.removeEventListener("mousedown", Ms), document.removeEventListener("touchstart", Ms), document.removeEventListener("keydown", L0));
}), {
  focusReason: gf,
  lastUserFocusTimestamp: ji,
  lastAutomatedFocusTimestamp: mf
}), $s = (e) => new CustomEvent(uI, {
  ...fI,
  detail: e
}), yI = /* @__PURE__ */ re({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    E0,
    A0,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = G();
    let r, s;
    const { focusReason: o } = _I();
    aL((v) => {
      e.trapped && !i.paused && t("release-requested", v);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (v) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: g, altKey: k, ctrlKey: m, metaKey: x, currentTarget: w, shiftKey: y } = v, { loop: S } = e, C = g === Gn.tab && !k && !m && !x, $ = document.activeElement;
      if (C && $) {
        const M = w, [R, D] = hI(M);
        if (R && D) {
          if (!y && $ === D) {
            const B = $s({
              focusReason: o.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), S && lr(R, !0));
          } else if (y && [R, M].includes($)) {
            const B = $s({
              focusReason: o.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), S && lr(D, !0));
          }
        } else if ($ === M) {
          const B = $s({
            focusReason: o.value
          });
          t("focusout-prevented", B), B.defaultPrevented || v.preventDefault();
        }
      }
    };
    Kt(dI, {
      focusTrapRef: n,
      onKeydown: a
    }), Te(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), Te([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", a), v.addEventListener("focusin", f), v.addEventListener("focusout", c)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", f), g.removeEventListener("focusout", c));
    });
    const l = (v) => {
      t(E0, v);
    }, u = (v) => t(A0, v), f = (v) => {
      const g = b(n);
      if (!g)
        return;
      const k = v.target, m = v.relatedTarget, x = k && g.contains(k);
      e.trapped || m && g.contains(m) || (r = m), x && t("focusin", v), !i.paused && e.trapped && (x ? s = k : lr(s, !0));
    }, c = (v) => {
      const g = b(n);
      if (!(i.paused || !g))
        if (e.trapped) {
          const k = v.relatedTarget;
          !qr(k) && !g.contains(k) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const m = $s({
                focusReason: o.value
              });
              t("focusout-prevented", m), m.defaultPrevented || lr(s, !0);
            }
          }, 0);
        } else {
          const k = v.target;
          k && g.contains(k) || t("focusout", v);
        }
    };
    async function p() {
      await Ue();
      const v = b(n);
      if (v) {
        $0.push(i);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const m = new Event(_a, S0);
          v.addEventListener(_a, l), v.dispatchEvent(m), m.defaultPrevented || Ue(() => {
            let x = e.focusStartEl;
            Ke(x) || (lr(x), document.activeElement !== x && (x = "first")), x === "first" && vI(o_(v), !0), (document.activeElement === g || x === "container") && lr(v);
          });
        }
      }
    }
    function d() {
      const v = b(n);
      if (v) {
        v.removeEventListener(_a, l);
        const g = new CustomEvent(ya, {
          ...S0,
          detail: {
            focusReason: o.value
          }
        });
        v.addEventListener(ya, u), v.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !bI() || v.contains(document.activeElement)) && lr(r ?? document.body), v.removeEventListener(ya, u), $0.remove(i);
      }
    }
    return it(() => {
      e.trapped && p(), Te(() => e.trapped, (v) => {
        v ? p() : d();
      });
    }), Jt(() => {
      e.trapped && d();
    }), {
      onKeydown: a
    };
  }
});
function wI(e, t, n, r, s, o) {
  return we(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var kI = /* @__PURE__ */ Je(yI, [["render", wI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const xI = ["fixed", "absolute"], CI = ot({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Be(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Bi,
    default: "bottom"
  },
  popperOptions: {
    type: Be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: xI,
    default: "absolute"
  }
}), s_ = ot({
  ...CI,
  id: String,
  style: {
    type: Be([String, Array, Object])
  },
  className: {
    type: Be([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Be([String, Array, Object])
  },
  popperStyle: {
    type: Be([String, Array, Object])
  },
  referenceEl: {
    type: Be(Object)
  },
  triggerTargetEl: {
    type: Be(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), SI = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, EI = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: s } = e, o = {
    placement: n,
    strategy: r,
    ...s,
    modifiers: [...TI(e), ...t]
  };
  return MI(o, s == null ? void 0 : s.modifiers), o;
}, AI = (e) => {
  if (Bt)
    return hr(e);
};
function TI(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function MI(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const $I = 0, LI = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: s } = qe(hf, void 0), o = G(), i = G(), a = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var m;
    const x = b(o), w = (m = b(i)) != null ? m : $I;
    return {
      name: "arrow",
      enabled: !pM(x),
      options: {
        element: x,
        padding: w
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...EI(e, [
      b(l),
      b(a)
    ])
  })), f = P(() => AI(e.referenceEl) || b(r)), { attributes: c, state: p, styles: d, update: v, forceUpdate: g, instanceRef: k } = oL(f, n, u);
  return Te(k, (m) => t.value = m), it(() => {
    Te(() => {
      var m;
      return (m = b(f)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: c,
    arrowRef: o,
    contentRef: n,
    instanceRef: k,
    state: p,
    styles: d,
    role: s,
    forceUpdate: g,
    update: v
  };
}, II = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: s } = mL(), o = Qe("popper"), i = P(() => b(t).popper), a = G(vt(e.zIndex) ? e.zIndex : s()), l = P(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: b(a) },
    b(n).popper,
    e.popperStyle || {}
  ]), f = P(() => r.value === "dialog" ? "false" : void 0), c = P(() => b(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: c,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = vt(e.zIndex) ? e.zIndex : s();
    }
  };
}, RI = (e, t) => {
  const n = G(!1), r = G();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, OI = /* @__PURE__ */ re({
  name: "ElPopperContent"
}), PI = /* @__PURE__ */ re({
  ...OI,
  props: s_,
  emits: SI,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = RI(r, n), { attributes: c, arrowRef: p, contentRef: d, styles: v, instanceRef: g, role: k, update: m } = LI(r), {
      ariaModal: x,
      arrowStyle: w,
      contentAttrs: y,
      contentClass: S,
      contentStyle: C,
      updateZIndex: $
    } = II(r, {
      styles: v,
      attributes: c,
      role: k
    }), M = qe(fi, void 0), R = G();
    Kt(Qb, {
      arrowStyle: w,
      arrowRef: p,
      arrowOffset: R
    }), M && (M.addInputId || M.removeInputId) && Kt(fi, {
      ...M,
      addInputId: Dt,
      removeInputId: Dt
    });
    let D;
    const N = (oe = !0) => {
      m(), oe && $();
    }, B = () => {
      N(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return it(() => {
      Te(() => r.triggerTargetEl, (oe, q) => {
        D == null || D(), D = void 0;
        const ie = b(oe || d.value), j = b(q || d.value);
        ts(ie) && (D = Te([k, () => r.ariaLabel, x, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, Y) => {
            qr(V[Y]) ? ie.removeAttribute(H) : ie.setAttribute(H, V[Y]);
          });
        }, { immediate: !0 })), j !== ie && ts(j) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          j.removeAttribute(V);
        });
      }, { immediate: !0 }), Te(() => r.visible, B, { immediate: !0 });
    }), Jt(() => {
      D == null || D(), D = void 0;
    }), t({
      popperContentRef: d,
      popperInstanceRef: g,
      updatePopper: N,
      contentStyle: C
    }), (oe, q) => (_(), A("div", gt({
      ref_key: "contentRef",
      ref: d
    }, b(y), {
      style: b(C),
      class: b(S),
      tabindex: "-1",
      onMouseenter: q[0] || (q[0] = (ie) => oe.$emit("mouseenter", ie)),
      onMouseleave: q[1] || (q[1] = (ie) => oe.$emit("mouseleave", ie))
    }), [
      xe(b(kI), {
        trapped: b(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": b(d),
        "focus-start-el": b(s),
        onFocusAfterTrapped: b(a),
        onFocusAfterReleased: b(i),
        onFocusin: b(l),
        onFocusoutPrevented: b(u),
        onReleaseRequested: b(f)
      }, {
        default: he(() => [
          we(oe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var DI = /* @__PURE__ */ Je(PI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const BI = Cn(tI), vf = Symbol("elTooltip"), tn = ot({
  ...uL,
  ...s_,
  appendTo: {
    type: Be([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Be(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), os = ot({
  ...r_,
  disabled: Boolean,
  trigger: {
    type: Be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Be(Array),
    default: () => [Gn.enter, Gn.space]
  }
}), {
  useModelToggleProps: NI,
  useModelToggleEmits: FI,
  useModelToggle: qI
} = t$("visible"), zI = ot({
  ...e_,
  ...NI,
  ...tn,
  ...os,
  ...t_,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), HI = [
  ...FI,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], jI = (e, t) => Ie(e) ? e.includes(t) : e === t, Xr = (e, t, n) => (r) => {
  jI(b(e), t) && n(r);
}, VI = /* @__PURE__ */ re({
  name: "ElTooltipTrigger"
}), UI = /* @__PURE__ */ re({
  ...VI,
  props: os,
  setup(e, { expose: t }) {
    const n = e, r = Qe("tooltip"), { controlled: s, id: o, open: i, onOpen: a, onClose: l, onToggle: u } = qe(vf, void 0), f = G(null), c = () => {
      if (b(s) || n.disabled)
        return !0;
    }, p = bn(n, "trigger"), d = Hn(c, Xr(p, "hover", a)), v = Hn(c, Xr(p, "hover", l)), g = Hn(c, Xr(p, "click", (y) => {
      y.button === 0 && u(y);
    })), k = Hn(c, Xr(p, "focus", a)), m = Hn(c, Xr(p, "focus", l)), x = Hn(c, Xr(p, "contextmenu", (y) => {
      y.preventDefault(), u(y);
    })), w = Hn(c, (y) => {
      const { code: S } = y;
      n.triggerKeys.includes(S) && (y.preventDefault(), u(y));
    });
    return t({
      triggerRef: f
    }), (y, S) => (_(), ue(b(cI), {
      id: b(o),
      "virtual-ref": y.virtualRef,
      open: b(i),
      "virtual-triggering": y.virtualTriggering,
      class: Q(b(r).e("trigger")),
      onBlur: b(m),
      onClick: b(g),
      onContextmenu: b(x),
      onFocus: b(k),
      onMouseenter: b(d),
      onMouseleave: b(v),
      onKeydown: b(w)
    }, {
      default: he(() => [
        we(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var KI = /* @__PURE__ */ Je(UI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const GI = /* @__PURE__ */ re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), WI = /* @__PURE__ */ re({
  ...GI,
  props: tn,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Wb(), s = Qe("tooltip"), o = G(null), i = G(!1), {
      controlled: a,
      id: l,
      open: u,
      trigger: f,
      onClose: c,
      onOpen: p,
      onShow: d,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: k
    } = qe(vf, void 0), m = P(() => n.transition || `${s.namespace.value}-fade-in-linear`), x = P(() => n.persistent);
    Jt(() => {
      i.value = !0;
    });
    const w = P(() => b(x) ? !0 : b(u)), y = P(() => n.disabled ? !1 : b(u)), S = P(() => n.appendTo || r.value), C = P(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), $ = P(() => !b(u)), M = () => {
      v();
    }, R = () => {
      if (b(a))
        return !0;
    }, D = Hn(R, () => {
      n.enterable && b(f) === "hover" && p();
    }), N = Hn(R, () => {
      b(f) === "hover" && c();
    }), B = () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V), g == null || g();
    }, oe = () => {
      k == null || k();
    }, q = () => {
      d(), j = IS(P(() => {
        var V;
        return (V = o.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (b(a))
          return;
        b(f) !== "hover" && c();
      });
    }, ie = () => {
      n.virtualTriggering || c();
    };
    let j;
    return Te(() => b(u), (V) => {
      V || j == null || j();
    }, {
      flush: "post"
    }), Te(() => n.content, () => {
      var V, H;
      (H = (V = o.value) == null ? void 0 : V.updatePopper) == null || H.call(V);
    }), t({
      contentRef: o
    }), (V, H) => (_(), ue(Jy, {
      disabled: !V.teleported,
      to: b(S)
    }, [
      xe(Vr, {
        name: b(m),
        onAfterLeave: M,
        onBeforeEnter: B,
        onAfterEnter: q,
        onBeforeLeave: oe
      }, {
        default: he(() => [
          b(w) ? Ut((_(), ue(b(DI), gt({
            key: 0,
            id: b(l),
            ref_key: "contentRef",
            ref: o
          }, V.$attrs, {
            "aria-label": V.ariaLabel,
            "aria-hidden": b($),
            "boundaries-padding": V.boundariesPadding,
            "fallback-placements": V.fallbackPlacements,
            "gpu-acceleration": V.gpuAcceleration,
            offset: V.offset,
            placement: V.placement,
            "popper-options": V.popperOptions,
            strategy: V.strategy,
            effect: V.effect,
            enterable: V.enterable,
            pure: V.pure,
            "popper-class": V.popperClass,
            "popper-style": [V.popperStyle, b(C)],
            "reference-el": V.referenceEl,
            "trigger-target-el": V.triggerTargetEl,
            visible: b(y),
            "z-index": V.zIndex,
            onMouseenter: b(D),
            onMouseleave: b(N),
            onBlur: ie,
            onClose: b(c)
          }), {
            default: he(() => [
              i.value ? _e("v-if", !0) : we(V.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Zn, b(y)]
          ]) : _e("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var ZI = /* @__PURE__ */ Je(WI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const XI = ["innerHTML"], JI = { key: 1 }, YI = /* @__PURE__ */ re({
  name: "ElTooltip"
}), QI = /* @__PURE__ */ re({
  ...YI,
  props: zI,
  emits: HI,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    cL();
    const s = Fi(), o = G(), i = G(), a = () => {
      var m;
      const x = b(o);
      x && ((m = x.popperInstanceRef) == null || m.update());
    }, l = G(!1), u = G(), { show: f, hide: c, hasUpdateHandler: p } = qI({
      indicator: l,
      toggleReason: u
    }), { onOpen: d, onClose: v } = fL({
      showAfter: bn(r, "showAfter"),
      hideAfter: bn(r, "hideAfter"),
      autoClose: bn(r, "autoClose"),
      open: f,
      close: c
    }), g = P(() => Ju(r.visible) && !p.value);
    Kt(vf, {
      controlled: g,
      id: s,
      open: yi(l),
      trigger: bn(r, "trigger"),
      onOpen: (m) => {
        d(m);
      },
      onClose: (m) => {
        v(m);
      },
      onToggle: (m) => {
        b(l) ? v(m) : d(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), Te(() => r.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const k = (m) => {
      var x, w;
      const y = (w = (x = i.value) == null ? void 0 : x.contentRef) == null ? void 0 : w.popperContentRef, S = (m == null ? void 0 : m.relatedTarget) || document.activeElement;
      return y && y.contains(S);
    };
    return p1(() => l.value && c()), t({
      popperRef: o,
      contentRef: i,
      isFocusInsideContent: k,
      updatePopper: a,
      onOpen: d,
      onClose: v,
      hide: c
    }), (m, x) => (_(), ue(b(BI), {
      ref_key: "popperRef",
      ref: o,
      role: m.role
    }, {
      default: he(() => [
        xe(KI, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: he(() => [
            m.$slots.default ? we(m.$slots, "default", { key: 0 }) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        xe(ZI, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: he(() => [
            we(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), A("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, XI)) : (_(), A("span", JI, Ye(m.content), 1))
            ]),
            m.showArrow ? (_(), ue(b(oI), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : _e("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var eR = /* @__PURE__ */ Je(QI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const ss = Cn(eR), i_ = Symbol("buttonGroupContextKey"), tR = (e, t) => {
  Ob({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, P(() => e.type === "text"));
  const n = qe(i_, void 0), r = wL("button"), { form: s } = zi(), o = ps(P(() => n == null ? void 0 : n.size)), i = qi(), a = G(), l = y1(), u = P(() => e.type || (n == null ? void 0 : n.type) || ""), f = P(() => {
    var v, g, k;
    return (k = (g = e.autoInsertSpace) != null ? g : (v = r.value) == null ? void 0 : v.autoInsertSpace) != null ? k : !1;
  }), c = P(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), p = P(() => {
    var v;
    const g = (v = l.default) == null ? void 0 : v.call(l);
    if (f.value && (g == null ? void 0 : g.length) === 1) {
      const k = g[0];
      if ((k == null ? void 0 : k.type) === yo) {
        const m = k.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: u,
    _ref: a,
    _props: c,
    shouldAddSpace: p,
    handleClick: (v) => {
      e.nativeType === "reset" && (s == null || s.resetFields()), t("click", v);
    }
  };
}, nR = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], rR = ["button", "submit", "reset"], hu = ot({
  size: df,
  disabled: Boolean,
  type: {
    type: String,
    values: nR,
    default: ""
  },
  icon: {
    type: kn
  },
  nativeType: {
    type: String,
    values: rR,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: kn,
    default: () => $b
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Be([String, Object]),
    default: "button"
  }
}), oR = {
  click: (e) => e instanceof MouseEvent
};
function Mt(e, t) {
  sR(e) && (e = "100%");
  var n = iR(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ls(e) {
  return Math.min(1, Math.max(0, e));
}
function sR(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function iR(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function a_(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Is(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Dr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function aR(e, t, n) {
  return {
    r: Mt(e, 255) * 255,
    g: Mt(t, 255) * 255,
    b: Mt(n, 255) * 255
  };
}
function I0(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = 0, a = (r + s) / 2;
  if (r === s)
    i = 0, o = 0;
  else {
    var l = r - s;
    switch (i = a > 0.5 ? l / (2 - r - s) : l / (r + s), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: a };
}
function wa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function lR(e, t, n) {
  var r, s, o;
  if (e = Mt(e, 360), t = Mt(t, 100), n = Mt(n, 100), t === 0)
    s = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = wa(a, i, e + 1 / 3), s = wa(a, i, e), o = wa(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: o * 255 };
}
function R0(e, t, n) {
  e = Mt(e, 255), t = Mt(t, 255), n = Mt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function cR(e, t, n) {
  e = Mt(e, 360) * 6, t = Mt(t, 100), n = Mt(n, 100);
  var r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return { r: u * 255, g: f * 255, b: c * 255 };
}
function O0(e, t, n, r) {
  var s = [
    Dr(Math.round(e).toString(16)),
    Dr(Math.round(t).toString(16)),
    Dr(Math.round(n).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function uR(e, t, n, r, s) {
  var o = [
    Dr(Math.round(e).toString(16)),
    Dr(Math.round(t).toString(16)),
    Dr(Math.round(n).toString(16)),
    Dr(fR(r))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function fR(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function P0(e) {
  return en(e) / 255;
}
function en(e) {
  return parseInt(e, 16);
}
function dR(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var gu = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function pR(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, s = null, o = null, i = !1, a = !1;
  return typeof e == "string" && (e = mR(e)), typeof e == "object" && (Fn(e.r) && Fn(e.g) && Fn(e.b) ? (t = aR(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Fn(e.h) && Fn(e.s) && Fn(e.v) ? (r = Is(e.s), s = Is(e.v), t = cR(e.h, r, s), i = !0, a = "hsv") : Fn(e.h) && Fn(e.s) && Fn(e.l) && (r = Is(e.s), o = Is(e.l), t = lR(e.h, r, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = a_(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var hR = "[-\\+]?\\d+%?", gR = "[-\\+]?\\d*\\.\\d+%?", gr = "(?:".concat(gR, ")|(?:").concat(hR, ")"), ka = "[\\s|\\(]+(".concat(gr, ")[,|\\s]+(").concat(gr, ")[,|\\s]+(").concat(gr, ")\\s*\\)?"), xa = "[\\s|\\(]+(".concat(gr, ")[,|\\s]+(").concat(gr, ")[,|\\s]+(").concat(gr, ")[,|\\s]+(").concat(gr, ")\\s*\\)?"), mn = {
  CSS_UNIT: new RegExp(gr),
  rgb: new RegExp("rgb" + ka),
  rgba: new RegExp("rgba" + xa),
  hsl: new RegExp("hsl" + ka),
  hsla: new RegExp("hsla" + xa),
  hsv: new RegExp("hsv" + ka),
  hsva: new RegExp("hsva" + xa),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function mR(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (gu[e])
    e = gu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = mn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = mn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = mn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = mn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = mn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = mn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = mn.hex8.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    a: P0(n[4]),
    format: t ? "name" : "hex8"
  } : (n = mn.hex6.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    format: t ? "name" : "hex"
  } : (n = mn.hex4.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    a: P0(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = mn.hex3.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Fn(e) {
  return !!mn.CSS_UNIT.exec(String(e));
}
var vR = (
  /** @class */
  (function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = dR(t)), this.originalInput = t;
      var s = pR(t);
      this.originalInput = t, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : s.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, s, o = t.r / 255, i = t.g / 255, a = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * s;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = a_(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = R0(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = R0(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = I0(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = I0(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), O0(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), uR(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Mt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Mt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + O0(this.r, this.g, this.b, !1), n = 0, r = Object.entries(gu); n < r.length; n++) {
        var s = r[n], o = s[0], i = s[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, s = this.a < 1 && this.a >= 0, o = !n && s && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Ls(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Ls(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Ls(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Ls(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), s = new e(t).toRgb(), o = n / 100, i = {
        r: (s.r - r.r) * o + r.r,
        g: (s.g - r.g) * o + r.g,
        b: (s.b - r.b) * o + r.b,
        a: (s.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), s = 360 / n, o = [this];
      for (r.h = (r.h - (s * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + s) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, s = n.s, o = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s, v: o })), o = (o + a) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), s = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
        a: s
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, s = [this], o = 360 / t, i = 1; i < t; i++)
        s.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return s;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  })()
);
function ar(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function bR(e) {
  const t = qi(), n = Qe("button");
  return P(() => {
    let r = {};
    const s = e.color;
    if (s) {
      const o = new vR(s), i = e.dark ? o.tint(20).toString() : ar(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? ar(o, 90) : o.tint(90).toString(),
          "text-color": s,
          "border-color": e.dark ? ar(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? ar(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? ar(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? ar(o, 80) : o.tint(80).toString());
      else {
        const a = e.dark ? ar(o, 30) : o.tint(30).toString(), l = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": s,
          "text-color": l,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": l,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? ar(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const _R = /* @__PURE__ */ re({
  name: "ElButton"
}), yR = /* @__PURE__ */ re({
  ..._R,
  props: hu,
  emits: oR,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = bR(r), o = Qe("button"), { _ref: i, _size: a, _type: l, _disabled: u, _props: f, shouldAddSpace: c, handleClick: p } = tR(r, n);
    return t({
      ref: i,
      size: a,
      type: l,
      disabled: u,
      shouldAddSpace: c
    }), (d, v) => (_(), ue(Pt(d.tag), gt({
      ref_key: "_ref",
      ref: i
    }, b(f), {
      class: [
        b(o).b(),
        b(o).m(b(l)),
        b(o).m(b(a)),
        b(o).is("disabled", b(u)),
        b(o).is("loading", d.loading),
        b(o).is("plain", d.plain),
        b(o).is("round", d.round),
        b(o).is("circle", d.circle),
        b(o).is("text", d.text),
        b(o).is("link", d.link),
        b(o).is("has-bg", d.bg)
      ],
      style: b(s),
      onClick: b(p)
    }), {
      default: he(() => [
        d.loading ? (_(), A(et, { key: 0 }, [
          d.$slots.loading ? we(d.$slots, "loading", { key: 0 }) : (_(), ue(b(Wt), {
            key: 1,
            class: Q(b(o).is("loading"))
          }, {
            default: he(() => [
              (_(), ue(Pt(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (_(), ue(b(Wt), { key: 1 }, {
          default: he(() => [
            d.icon ? (_(), ue(Pt(d.icon), { key: 0 })) : we(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : _e("v-if", !0),
        d.$slots.default ? (_(), A("span", {
          key: 2,
          class: Q({ [b(o).em("text", "expand")]: b(c) })
        }, [
          we(d.$slots, "default")
        ], 2)) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var wR = /* @__PURE__ */ Je(yR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const kR = {
  size: hu.size,
  type: hu.type
}, xR = /* @__PURE__ */ re({
  name: "ElButtonGroup"
}), CR = /* @__PURE__ */ re({
  ...xR,
  props: kR,
  setup(e) {
    const t = e;
    Kt(i_, xn({
      size: bn(t, "size"),
      type: bn(t, "type")
    }));
    const n = Qe("button");
    return (r, s) => (_(), A("div", {
      class: Q(`${b(n).b("group")}`)
    }, [
      we(r.$slots, "default")
    ], 2));
  }
});
var l_ = /* @__PURE__ */ Je(CR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const D0 = Cn(wR, {
  ButtonGroup: l_
});
Qu(l_);
const cr = /* @__PURE__ */ new Map();
let B0;
Bt && (document.addEventListener("mousedown", (e) => B0 = e), document.addEventListener("mouseup", (e) => {
  for (const t of cr.values())
    for (const { documentHandler: n } of t)
      n(e, B0);
}));
function N0(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ts(t.arg) && n.push(t.arg), function(r, s) {
    const o = t.instance.popperRef, i = r.target, a = s == null ? void 0 : s.target, l = !t || !t.instance, u = !i || !a, f = e.contains(i) || e.contains(a), c = e === i, p = n.length && n.some((v) => v == null ? void 0 : v.contains(i)) || n.length && n.includes(a), d = o && (o.contains(i) || o.contains(a));
    l || u || f || c || p || d || t.value(r, s);
  };
}
const c_ = {
  beforeMount(e, t) {
    cr.has(e) || cr.set(e, []), cr.get(e).push({
      documentHandler: N0(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    cr.has(e) || cr.set(e, []);
    const n = cr.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), s = {
      documentHandler: N0(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, s) : n.push(s);
  },
  unmounted(e) {
    cr.delete(e);
  }
}, u_ = ot({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: us,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), SR = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, ER = /* @__PURE__ */ re({
  name: "ElTag"
}), AR = /* @__PURE__ */ re({
  ...ER,
  props: u_,
  emits: SR,
  setup(e, { emit: t }) {
    const n = e, r = ps(), s = Qe("tag"), o = P(() => {
      const { type: l, hit: u, effect: f, closable: c, round: p } = n;
      return [
        s.b(),
        s.is("closable", c),
        s.m(l),
        s.m(r.value),
        s.m(f),
        s.is("hit", u),
        s.is("round", p)
      ];
    }), i = (l) => {
      t("close", l);
    }, a = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (_(), A("span", {
      key: 0,
      class: Q(b(o)),
      style: st({ backgroundColor: l.color }),
      onClick: a
    }, [
      h("span", {
        class: Q(b(s).e("content"))
      }, [
        we(l.$slots, "default")
      ], 2),
      l.closable ? (_(), ue(b(Wt), {
        key: 0,
        class: Q(b(s).e("close")),
        onClick: nn(i, ["stop"])
      }, {
        default: he(() => [
          xe(b(du))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : _e("v-if", !0)
    ], 6)) : (_(), ue(Vr, {
      key: 1,
      name: `${b(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: he(() => [
        h("span", {
          class: Q(b(o)),
          style: st({ backgroundColor: l.color }),
          onClick: a
        }, [
          h("span", {
            class: Q(b(s).e("content"))
          }, [
            we(l.$slots, "default")
          ], 2),
          l.closable ? (_(), ue(b(Wt), {
            key: 0,
            class: Q(b(s).e("close")),
            onClick: nn(i, ["stop"])
          }, {
            default: he(() => [
              xe(b(du))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : _e("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var TR = /* @__PURE__ */ Je(AR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const MR = Cn(TR), $R = ot({
  color: {
    type: Be(Object),
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
});
let Ca = !1;
function is(e, t) {
  if (!Bt)
    return;
  const n = function(o) {
    var i;
    (i = t.drag) == null || i.call(t, o);
  }, r = function(o) {
    var i;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, Ca = !1, (i = t.end) == null || i.call(t, o);
  }, s = function(o) {
    var i;
    Ca || (o.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), Ca = !0, (i = t.start) == null || i.call(t, o));
  };
  e.addEventListener("mousedown", s), e.addEventListener("touchstart", s);
}
const LR = (e) => {
  const t = _t(), n = Un(), r = Un();
  function s(i) {
    i.target !== n.value && o(i);
  }
  function o(i) {
    if (!r.value || !n.value)
      return;
    const l = t.vnode.el.getBoundingClientRect(), { clientX: u, clientY: f } = Gu(i);
    if (e.vertical) {
      let c = f - l.top;
      c = Math.max(n.value.offsetHeight / 2, c), c = Math.min(c, l.height - n.value.offsetHeight / 2), e.color.set("alpha", Math.round((c - n.value.offsetHeight / 2) / (l.height - n.value.offsetHeight) * 100));
    } else {
      let c = u - l.left;
      c = Math.max(n.value.offsetWidth / 2, c), c = Math.min(c, l.width - n.value.offsetWidth / 2), e.color.set("alpha", Math.round((c - n.value.offsetWidth / 2) / (l.width - n.value.offsetWidth) * 100));
    }
  }
  return {
    thumb: n,
    bar: r,
    handleDrag: o,
    handleClick: s
  };
}, IR = (e, {
  bar: t,
  thumb: n,
  handleDrag: r
}) => {
  const s = _t(), o = Qe("color-alpha-slider"), i = G(0), a = G(0), l = G();
  function u() {
    if (!n.value || e.vertical)
      return 0;
    const x = s.vnode.el, w = e.color.get("alpha");
    return x ? Math.round(w * (x.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function f() {
    if (!n.value)
      return 0;
    const x = s.vnode.el;
    if (!e.vertical)
      return 0;
    const w = e.color.get("alpha");
    return x ? Math.round(w * (x.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function c() {
    if (e.color && e.color.value) {
      const { r: x, g: w, b: y } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${x}, ${w}, ${y}, 0) 0%, rgba(${x}, ${w}, ${y}, 1) 100%)`;
    }
    return "";
  }
  function p() {
    i.value = u(), a.value = f(), l.value = c();
  }
  it(() => {
    if (!t.value || !n.value)
      return;
    const x = {
      drag: (w) => {
        r(w);
      },
      end: (w) => {
        r(w);
      }
    };
    is(t.value, x), is(n.value, x), p();
  }), Te(() => e.color.get("alpha"), () => p()), Te(() => e.color.value, () => p());
  const d = P(() => [o.b(), o.is("vertical", e.vertical)]), v = P(() => o.e("bar")), g = P(() => o.e("thumb")), k = P(() => ({ background: l.value })), m = P(() => ({
    left: ho(i.value),
    top: ho(a.value)
  }));
  return { rootKls: d, barKls: v, barStyle: k, thumbKls: g, thumbStyle: m, update: p };
}, RR = "ElColorAlphaSlider", OR = /* @__PURE__ */ re({
  name: RR
}), PR = /* @__PURE__ */ re({
  ...OR,
  props: $R,
  setup(e, { expose: t }) {
    const n = e, { bar: r, thumb: s, handleDrag: o, handleClick: i } = LR(n), { rootKls: a, barKls: l, barStyle: u, thumbKls: f, thumbStyle: c, update: p } = IR(n, {
      bar: r,
      thumb: s,
      handleDrag: o
    });
    return t({
      update: p,
      bar: r,
      thumb: s
    }), (d, v) => (_(), A("div", {
      class: Q(b(a))
    }, [
      h("div", {
        ref_key: "bar",
        ref: r,
        class: Q(b(l)),
        style: st(b(u)),
        onClick: v[0] || (v[0] = (...g) => b(i) && b(i)(...g))
      }, null, 6),
      h("div", {
        ref_key: "thumb",
        ref: s,
        class: Q(b(f)),
        style: st(b(c))
      }, null, 6)
    ], 2));
  }
});
var DR = /* @__PURE__ */ Je(PR, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const BR = /* @__PURE__ */ re({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(e) {
    const t = Qe("color-hue-slider"), n = _t(), r = G(), s = G(), o = G(0), i = G(0), a = P(() => e.color.get("hue"));
    Te(() => a.value, () => {
      p();
    });
    function l(d) {
      d.target !== r.value && u(d);
    }
    function u(d) {
      if (!s.value || !r.value)
        return;
      const g = n.vnode.el.getBoundingClientRect(), { clientX: k, clientY: m } = Gu(d);
      let x;
      if (e.vertical) {
        let w = m - g.top;
        w = Math.min(w, g.height - r.value.offsetHeight / 2), w = Math.max(r.value.offsetHeight / 2, w), x = Math.round((w - r.value.offsetHeight / 2) / (g.height - r.value.offsetHeight) * 360);
      } else {
        let w = k - g.left;
        w = Math.min(w, g.width - r.value.offsetWidth / 2), w = Math.max(r.value.offsetWidth / 2, w), x = Math.round((w - r.value.offsetWidth / 2) / (g.width - r.value.offsetWidth) * 360);
      }
      e.color.set("hue", x);
    }
    function f() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (e.vertical)
        return 0;
      const v = e.color.get("hue");
      return d ? Math.round(v * (d.offsetWidth - r.value.offsetWidth / 2) / 360) : 0;
    }
    function c() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (!e.vertical)
        return 0;
      const v = e.color.get("hue");
      return d ? Math.round(v * (d.offsetHeight - r.value.offsetHeight / 2) / 360) : 0;
    }
    function p() {
      o.value = f(), i.value = c();
    }
    return it(() => {
      if (!s.value || !r.value)
        return;
      const d = {
        drag: (v) => {
          u(v);
        },
        end: (v) => {
          u(v);
        }
      };
      is(s.value, d), is(r.value, d), p();
    }), {
      bar: s,
      thumb: r,
      thumbLeft: o,
      thumbTop: i,
      hueValue: a,
      handleClick: l,
      update: p,
      ns: t
    };
  }
});
function NR(e, t, n, r, s, o) {
  return _(), A("div", {
    class: Q([e.ns.b(), e.ns.is("vertical", e.vertical)])
  }, [
    h("div", {
      ref: "bar",
      class: Q(e.ns.e("bar")),
      onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
    }, null, 2),
    h("div", {
      ref: "thumb",
      class: Q(e.ns.e("thumb")),
      style: st({
        left: e.thumbLeft + "px",
        top: e.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var FR = /* @__PURE__ */ Je(BR, [["render", NR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const qR = ot({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: df,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  predefine: {
    type: Be(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), zR = {
  [Gt]: (e) => Ke(e) || qr(e),
  [ef]: (e) => Ke(e) || qr(e),
  activeChange: (e) => Ke(e) || qr(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent
}, f_ = Symbol("colorPickerContextKey"), F0 = function(e, t, n) {
  return [
    e,
    t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0,
    e / 2
  ];
}, HR = function(e) {
  return typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1;
}, jR = function(e) {
  return typeof e == "string" && e.includes("%");
}, co = function(e, t) {
  HR(e) && (e = "100%");
  const n = jR(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, q0 = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, Js = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${q0[t] || t}${q0[n] || n}`;
}, z0 = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${Js(e)}${Js(t)}${Js(n)}`;
}, Sa = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, Lr = function(e) {
  return e.length === 2 ? (Sa[e[0].toUpperCase()] || +e[0]) * 16 + (Sa[e[1].toUpperCase()] || +e[1]) : Sa[e[1].toUpperCase()] || +e[1];
}, VR = function(e, t, n) {
  t = t / 100, n = n / 100;
  let r = t;
  const s = Math.max(n, 0.01);
  n *= 2, t *= n <= 1 ? n : 2 - n, r *= s <= 1 ? s : 2 - s;
  const o = (n + t) / 2, i = n === 0 ? 2 * r / (s + r) : 2 * t / (n + t);
  return {
    h: e,
    s: i * 100,
    v: o * 100
  };
}, H0 = (e, t, n) => {
  e = co(e, 255), t = co(t, 255), n = co(n, 255);
  const r = Math.max(e, t, n), s = Math.min(e, t, n);
  let o;
  const i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e: {
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      }
      case t: {
        o = (n - e) / a + 2;
        break;
      }
      case n: {
        o = (e - t) / a + 4;
        break;
      }
    }
    o /= 6;
  }
  return { h: o * 360, s: l * 100, v: i * 100 };
}, Lo = function(e, t, n) {
  e = co(e, 360) * 6, t = co(t, 100), n = co(n, 100);
  const r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return {
    r: Math.round(u * 255),
    g: Math.round(f * 255),
    b: Math.round(c * 255)
  };
};
class Vo {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const n in t)
      Xe(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const r in t)
        Xe(t, r) && this.set(r, t[r]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return Lo(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const n = (r, s, o) => {
      this._hue = Math.max(0, Math.min(360, r)), this._saturation = Math.max(0, Math.min(100, s)), this._value = Math.max(0, Math.min(100, o)), this.doOnChange();
    };
    if (t.includes("hsl")) {
      const r = t.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = VR(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("hsv")) {
      const r = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3 && n(r[0], r[1], r[2]);
    } else if (t.includes("rgb")) {
      const r = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = H0(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("#")) {
      const r = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(r))
        return;
      let s, o, i;
      r.length === 3 ? (s = Lr(r[0] + r[0]), o = Lr(r[1] + r[1]), i = Lr(r[2] + r[2])) : (r.length === 6 || r.length === 8) && (s = Lr(r.slice(0, 2)), o = Lr(r.slice(2, 4)), i = Lr(r.slice(4, 6))), r.length === 8 ? this._alpha = Lr(r.slice(6)) / 255 * 100 : (r.length === 3 || r.length === 6) && (this._alpha = 100);
      const { h: a, s: l, v: u } = H0(s, o, i);
      n(a, l, u);
    }
  }
  compare(t) {
    return Math.abs(t._hue - this._hue) < 2 && Math.abs(t._saturation - this._saturation) < 1 && Math.abs(t._value - this._value) < 1 && Math.abs(t._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: r, _alpha: s, format: o } = this;
    if (this.enableAlpha)
      switch (o) {
        case "hsl": {
          const i = F0(t, n / 100, r / 100);
          this.value = `hsla(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(r)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${z0(Lo(t, n, r))}${Js(s * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: a, b: l } = Lo(t, n, r);
          this.value = `rgba(${i}, ${a}, ${l}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = F0(t, n / 100, r / 100);
          this.value = `hsl(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(r)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: a, b: l } = Lo(t, n, r);
          this.value = `rgb(${i}, ${a}, ${l})`;
          break;
        }
        default:
          this.value = z0(Lo(t, n, r));
      }
  }
}
const UR = /* @__PURE__ */ re({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-predefine"), { currentColor: n } = qe(f_), r = G(o(e.colors, e.color));
    Te(() => n.value, (i) => {
      const a = new Vo();
      a.fromString(i), r.value.forEach((l) => {
        l.selected = a.compare(l);
      });
    }), Du(() => {
      r.value = o(e.colors, e.color);
    });
    function s(i) {
      e.color.fromString(e.colors[i]);
    }
    function o(i, a) {
      return i.map((l) => {
        const u = new Vo();
        return u.enableAlpha = !0, u.format = "rgba", u.fromString(l), u.selected = u.value === a.value, u;
      });
    }
    return {
      rgbaColors: r,
      handleSelect: s,
      ns: t
    };
  }
}), KR = ["onClick"];
function GR(e, t, n, r, s, o) {
  return _(), A("div", {
    class: Q(e.ns.b())
  }, [
    h("div", {
      class: Q(e.ns.e("colors"))
    }, [
      (_(!0), A(et, null, yn(e.rgbaColors, (i, a) => (_(), A("div", {
        key: e.colors[a],
        class: Q([
          e.ns.e("color-selector"),
          e.ns.is("alpha", i._alpha < 100),
          { selected: i.selected }
        ]),
        onClick: (l) => e.handleSelect(a)
      }, [
        h("div", {
          style: st({ backgroundColor: i.value })
        }, null, 4)
      ], 10, KR))), 128))
    ], 2)
  ], 2);
}
var WR = /* @__PURE__ */ Je(UR, [["render", GR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const ZR = /* @__PURE__ */ re({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Qe("color-svpanel"), n = _t(), r = G(0), s = G(0), o = G("hsl(0, 100%, 50%)"), i = P(() => {
      const u = e.color.get("hue"), f = e.color.get("value");
      return { hue: u, value: f };
    });
    function a() {
      const u = e.color.get("saturation"), f = e.color.get("value"), c = n.vnode.el, { clientWidth: p, clientHeight: d } = c;
      s.value = u * p / 100, r.value = (100 - f) * d / 100, o.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
    }
    function l(u) {
      const c = n.vnode.el.getBoundingClientRect(), { clientX: p, clientY: d } = Gu(u);
      let v = p - c.left, g = d - c.top;
      v = Math.max(0, v), v = Math.min(v, c.width), g = Math.max(0, g), g = Math.min(g, c.height), s.value = v, r.value = g, e.color.set({
        saturation: v / c.width * 100,
        value: 100 - g / c.height * 100
      });
    }
    return Te(() => i.value, () => {
      a();
    }), it(() => {
      is(n.vnode.el, {
        drag: (u) => {
          l(u);
        },
        end: (u) => {
          l(u);
        }
      }), a();
    }), {
      cursorTop: r,
      cursorLeft: s,
      background: o,
      colorValue: i,
      handleDrag: l,
      update: a,
      ns: t
    };
  }
}), XR = /* @__PURE__ */ h("div", null, null, -1), JR = [
  XR
];
function YR(e, t, n, r, s, o) {
  return _(), A("div", {
    class: Q(e.ns.b()),
    style: st({
      backgroundColor: e.background
    })
  }, [
    h("div", {
      class: Q(e.ns.e("white"))
    }, null, 2),
    h("div", {
      class: Q(e.ns.e("black"))
    }, null, 2),
    h("div", {
      class: Q(e.ns.e("cursor")),
      style: st({
        top: e.cursorTop + "px",
        left: e.cursorLeft + "px"
      })
    }, JR, 6)
  ], 6);
}
var QR = /* @__PURE__ */ Je(ZR, [["render", YR], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const eO = ["onKeydown"], tO = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"], nO = /* @__PURE__ */ re({
  name: "ElColorPicker"
}), rO = /* @__PURE__ */ re({
  ...nO,
  props: qR,
  emits: zR,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = Sn(), o = Qe("color"), { formItem: i } = zi(), a = ps(), l = qi(), { inputId: u, isLabeledByFormItem: f } = Jb(r, {
      formItemContext: i
    }), c = G(), p = G(), d = G(), v = G(), g = G(), k = G(), {
      isFocused: m,
      handleFocus: x,
      handleBlur: w
    } = Xb(g, {
      beforeBlur(pe) {
        var Me;
        return (Me = v.value) == null ? void 0 : Me.isFocusInsideContent(pe);
      },
      afterBlur() {
        j(!1), I();
      }
    }), y = (pe) => {
      if (l.value)
        return dt();
      x(pe);
    };
    let S = !0;
    const C = xn(new Vo({
      enableAlpha: r.showAlpha,
      format: r.colorFormat || "",
      value: r.modelValue
    })), $ = G(!1), M = G(!1), R = G(""), D = P(() => !r.modelValue && !M.value ? "transparent" : ie(C, r.showAlpha)), N = P(() => !r.modelValue && !M.value ? "" : C.value), B = P(() => f.value ? void 0 : r.label || s("el.colorpicker.defaultLabel")), oe = P(() => f.value ? i == null ? void 0 : i.labelId : void 0), q = P(() => [
      o.b("picker"),
      o.is("disabled", l.value),
      o.bm("picker", a.value),
      o.is("focused", m.value)
    ]);
    function ie(pe, Me) {
      if (!(pe instanceof Vo))
        throw new TypeError("color should be instance of _color Class");
      const { r: T, g: L, b: z } = pe.toRgb();
      return Me ? `rgba(${T}, ${L}, ${z}, ${pe.get("alpha") / 100})` : `rgb(${T}, ${L}, ${z})`;
    }
    function j(pe) {
      $.value = pe;
    }
    const V = uu(j, 100, { leading: !0 });
    function H() {
      l.value || j(!0);
    }
    function Y() {
      V(!1), I();
    }
    function I() {
      Ue(() => {
        r.modelValue ? C.fromString(r.modelValue) : (C.value = "", Ue(() => {
          M.value = !1;
        }));
      });
    }
    function Z() {
      l.value || V(!$.value);
    }
    function K() {
      C.fromString(R.value);
    }
    function me() {
      const pe = C.value;
      n(Gt, pe), n("change", pe), r.validateEvent && (i == null || i.validate("change").catch((Me) => void 0)), V(!1), Ue(() => {
        const Me = new Vo({
          enableAlpha: r.showAlpha,
          format: r.colorFormat || "",
          value: r.modelValue
        });
        C.compare(Me) || I();
      });
    }
    function Ee() {
      V(!1), n(Gt, null), n("change", null), r.modelValue !== null && r.validateEvent && (i == null || i.validate("change").catch((pe) => void 0)), I();
    }
    function Oe(pe) {
      if ($.value && (Y(), m.value)) {
        const Me = new FocusEvent("focus", pe);
        w(Me);
      }
    }
    function Pe(pe) {
      pe.preventDefault(), pe.stopPropagation(), j(!1), I();
    }
    function Ge(pe) {
      switch (pe.code) {
        case Gn.enter:
        case Gn.space:
          pe.preventDefault(), pe.stopPropagation(), H(), k.value.focus();
          break;
        case Gn.esc:
          Pe(pe);
          break;
      }
    }
    function ze() {
      g.value.focus();
    }
    function dt() {
      g.value.blur();
    }
    return it(() => {
      r.modelValue && (R.value = N.value);
    }), Te(() => r.modelValue, (pe) => {
      pe ? pe && pe !== C.value && (S = !1, C.fromString(pe)) : M.value = !1;
    }), Te(() => N.value, (pe) => {
      R.value = pe, S && n("activeChange", pe), S = !0;
    }), Te(() => C.value, () => {
      !r.modelValue && !M.value && (M.value = !0);
    }), Te(() => $.value, () => {
      Ue(() => {
        var pe, Me, T;
        (pe = c.value) == null || pe.update(), (Me = p.value) == null || Me.update(), (T = d.value) == null || T.update();
      });
    }), Kt(f_, {
      currentColor: N
    }), t({
      color: C,
      show: H,
      hide: Y,
      focus: ze,
      blur: dt
    }), (pe, Me) => (_(), ue(b(ss), {
      ref_key: "popper",
      ref: v,
      visible: $.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [b(o).be("picker", "panel"), b(o).b("dropdown"), pe.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${b(o).namespace.value}-zoom-in-top`,
      persistent: "",
      onHide: Me[2] || (Me[2] = (T) => j(!1))
    }, {
      content: he(() => [
        Ut((_(), A("div", {
          onKeydown: zt(Pe, ["esc"])
        }, [
          h("div", {
            class: Q(b(o).be("dropdown", "main-wrapper"))
          }, [
            xe(FR, {
              ref_key: "hue",
              ref: c,
              class: "hue-slider",
              color: b(C),
              vertical: ""
            }, null, 8, ["color"]),
            xe(QR, {
              ref_key: "sv",
              ref: p,
              color: b(C)
            }, null, 8, ["color"])
          ], 2),
          pe.showAlpha ? (_(), ue(DR, {
            key: 0,
            ref_key: "alpha",
            ref: d,
            color: b(C)
          }, null, 8, ["color"])) : _e("v-if", !0),
          pe.predefine ? (_(), ue(WR, {
            key: 1,
            ref: "predefine",
            color: b(C),
            colors: pe.predefine
          }, null, 8, ["color", "colors"])) : _e("v-if", !0),
          h("div", {
            class: Q(b(o).be("dropdown", "btns"))
          }, [
            h("span", {
              class: Q(b(o).be("dropdown", "value"))
            }, [
              xe(b(Hi), {
                ref_key: "inputRef",
                ref: k,
                modelValue: R.value,
                "onUpdate:modelValue": Me[0] || (Me[0] = (T) => R.value = T),
                "validate-event": !1,
                size: "small",
                onKeyup: zt(K, ["enter"]),
                onBlur: K
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            xe(b(D0), {
              class: Q(b(o).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: Ee
            }, {
              default: he(() => [
                jr(Ye(b(s)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            xe(b(D0), {
              plain: "",
              size: "small",
              class: Q(b(o).be("dropdown", "btn")),
              onClick: me
            }, {
              default: he(() => [
                jr(Ye(b(s)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ], 40, eO)), [
          [b(c_), Oe]
        ])
      ]),
      default: he(() => [
        h("div", {
          id: b(u),
          ref_key: "triggerRef",
          ref: g,
          class: Q(b(q)),
          role: "button",
          "aria-label": b(B),
          "aria-labelledby": b(oe),
          "aria-description": b(s)("el.colorpicker.description", { color: pe.modelValue || "" }),
          "aria-disabled": b(l),
          tabindex: b(l) ? -1 : pe.tabindex,
          onKeydown: Ge,
          onFocus: y,
          onBlur: Me[1] || (Me[1] = (...T) => b(w) && b(w)(...T))
        }, [
          b(l) ? (_(), A("div", {
            key: 0,
            class: Q(b(o).be("picker", "mask"))
          }, null, 2)) : _e("v-if", !0),
          h("div", {
            class: Q(b(o).be("picker", "trigger")),
            onClick: Z
          }, [
            h("span", {
              class: Q([b(o).be("picker", "color"), b(o).is("alpha", pe.showAlpha)])
            }, [
              h("span", {
                class: Q(b(o).be("picker", "color-inner")),
                style: st({
                  backgroundColor: b(D)
                })
              }, [
                Ut(xe(b(Wt), {
                  class: Q([b(o).be("picker", "icon"), b(o).is("icon-arrow-down")])
                }, {
                  default: he(() => [
                    xe(b(Mb))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Zn, pe.modelValue || M.value]
                ]),
                Ut(xe(b(Wt), {
                  class: Q([b(o).be("picker", "empty"), b(o).is("icon-close")])
                }, {
                  default: he(() => [
                    xe(b(du))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Zn, !pe.modelValue && !M.value]
                ])
              ], 6)
            ], 2)
          ], 2)
        ], 42, tO)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var oO = /* @__PURE__ */ Je(rO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const sO = Cn(oO), iO = /* @__PURE__ */ re({
  inheritAttrs: !1
});
function aO(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var lO = /* @__PURE__ */ Je(iO, [["render", aO], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const cO = /* @__PURE__ */ re({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function uO(e, t, n, r, s, o) {
  return we(e.$slots, "default");
}
var fO = /* @__PURE__ */ Je(cO, [["render", uO], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const dO = "data-el-collection-item", pO = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), s = Symbol(n), o = {
    ...lO,
    name: t,
    setup() {
      const a = G(null), l = /* @__PURE__ */ new Map();
      Kt(r, {
        itemMap: l,
        getItems: () => {
          const f = b(a);
          if (!f)
            return [];
          const c = Array.from(f.querySelectorAll(`[${dO}]`));
          return [...l.values()].sort((d, v) => c.indexOf(d.ref) - c.indexOf(v.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...fO,
    name: n,
    setup(a, { attrs: l }) {
      const u = G(null), f = qe(r, void 0);
      Kt(s, {
        collectionItemRef: u
      }), it(() => {
        const c = b(u);
        c && f.itemMap.set(c, {
          ref: c,
          ...l
        });
      }), Jt(() => {
        const c = b(u);
        f.itemMap.delete(c);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: i
  };
}, Ea = ot({
  trigger: os.trigger,
  effect: {
    ...tn.effect,
    default: "light"
  },
  type: {
    type: Be(String)
  },
  placement: {
    type: Be(String),
    default: "bottom"
  },
  popperOptions: {
    type: Be(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: Be([Number, String]),
    default: 0
  },
  maxHeight: {
    type: Be([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: Be(Object)
  },
  teleported: tn.teleported
});
ot({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: kn
  }
});
ot({
  onKeydown: { type: Be(Function) }
});
pO("Dropdown");
const d_ = Symbol("elPaginationKey"), hO = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: kn
  }
}), gO = {
  click: (e) => e instanceof MouseEvent
}, mO = ["disabled", "aria-label", "aria-disabled"], vO = { key: 0 }, bO = /* @__PURE__ */ re({
  name: "ElPaginationPrev"
}), _O = /* @__PURE__ */ re({
  ...bO,
  props: hO,
  emits: gO,
  setup(e) {
    const t = e, { t: n } = Sn(), r = P(() => t.disabled || t.currentPage <= 1);
    return (s, o) => (_(), A("button", {
      type: "button",
      class: "btn-prev",
      disabled: b(r),
      "aria-label": s.prevText || b(n)("el.pagination.prev"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.prevText ? (_(), A("span", vO, Ye(s.prevText), 1)) : (_(), ue(b(Wt), { key: 1 }, {
        default: he(() => [
          (_(), ue(Pt(s.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, mO));
  }
});
var yO = /* @__PURE__ */ Je(_O, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const wO = ot({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: kn
  }
}), kO = ["disabled", "aria-label", "aria-disabled"], xO = { key: 0 }, CO = /* @__PURE__ */ re({
  name: "ElPaginationNext"
}), SO = /* @__PURE__ */ re({
  ...CO,
  props: wO,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Sn(), r = P(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (s, o) => (_(), A("button", {
      type: "button",
      class: "btn-next",
      disabled: b(r),
      "aria-label": s.nextText || b(n)("el.pagination.next"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.nextText ? (_(), A("span", xO, Ye(s.nextText), 1)) : (_(), ue(b(Wt), { key: 1 }, {
        default: he(() => [
          (_(), ue(Pt(s.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, kO));
  }
});
var EO = /* @__PURE__ */ Je(SO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const p_ = Symbol("ElSelectGroup"), Vi = Symbol("ElSelect");
function AO(e, t) {
  const n = qe(Vi), r = qe(p_, { disabled: !1 }), s = P(() => Fe(e.value)), o = P(() => n.props.multiple ? c(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), i = P(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = P(() => e.label || (s.value ? "" : e.value)), l = P(() => e.value || e.label || ""), u = P(() => e.disabled || t.groupDisabled || i.value), f = _t(), c = (g = [], k) => {
    if (s.value) {
      const m = n.props.valueKey;
      return g && g.some((x) => je(rn(x, m)) === rn(k, m));
    } else
      return g && g.includes(k);
  }, p = (g, k) => {
    if (s.value) {
      const { valueKey: m } = n.props;
      return rn(g, m) === rn(k, m);
    } else
      return g === k;
  }, d = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  Te(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Te(() => e.value, (g, k) => {
    const { remote: m, valueKey: x } = n.props;
    if (Object.is(g, k) || (n.onOptionDestroy(k, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !m) {
      if (x && Fe(g) && Fe(k) && g[x] === k[x])
        return;
      n.setSelected();
    }
  }), Te(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: v } = je(n);
  return Te(v, (g) => {
    const { query: k } = b(g), m = new RegExp(gM(k), "i");
    t.visible = m.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: d
  };
}
const TO = /* @__PURE__ */ re({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = Fi(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", b(a)),
      {
        selected: b(i),
        hover: b(c)
      }
    ]), s = xn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: i, isDisabled: a, select: l, hoverItem: u } = AO(e, s), { visible: f, hover: c } = wi(s), p = _t().proxy;
    l.onOptionCreate(p), Jt(() => {
      const v = p.value, { selected: g } = l, m = (l.props.multiple ? g : [g]).some((x) => x.value === p.value);
      Ue(() => {
        l.cachedOptions.get(v) === p && !m && l.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, p);
    });
    function d() {
      e.disabled !== !0 && s.groupDisabled !== !0 && l.handleOptionSelect(p);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: o,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      visible: f,
      hover: c,
      selectOptionClick: d,
      states: s
    };
  }
}), MO = ["id", "aria-disabled", "aria-selected"];
function $O(e, t, n, r, s, o) {
  return Ut((_(), A("li", {
    id: e.id,
    class: Q(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = nn((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    we(e.$slots, "default", {}, () => [
      h("span", null, Ye(e.currentLabel), 1)
    ])
  ], 42, MO)), [
    [Zn, e.visible]
  ]);
}
var bf = /* @__PURE__ */ Je(TO, [["render", $O], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const LO = /* @__PURE__ */ re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = qe(Vi), t = Qe("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), s = P(() => e.props.fitInputWidth), o = G("");
    function i() {
      var a;
      o.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return it(() => {
      i(), $i(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: s
    };
  }
});
function IO(e, t, n, r, s, o) {
  return _(), A("div", {
    class: Q([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: st({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), A("div", {
      key: 0,
      class: Q(e.ns.be("dropdown", "header"))
    }, [
      we(e.$slots, "header")
    ], 2)) : _e("v-if", !0),
    we(e.$slots, "default"),
    e.$slots.footer ? (_(), A("div", {
      key: 1,
      class: Q(e.ns.be("dropdown", "footer"))
    }, [
      we(e.$slots, "footer")
    ], 2)) : _e("v-if", !0)
  ], 6);
}
var RO = /* @__PURE__ */ Je(LO, [["render", IO], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function OO(e) {
  const { t } = Sn();
  return xn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const PO = (e, t, n) => {
  const { t: r } = Sn(), s = Qe("select");
  Ob({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, P(() => e.suffixTransition === !1));
  const o = G(null), i = G(null), a = G(null), l = G(null), u = G(null), f = G(null), c = G(null), p = G(null), d = G(), v = Un({ query: "" }), g = Un(""), k = G([]);
  let m = 0;
  const { form: x, formItem: w } = zi(), y = P(() => !e.filterable || e.multiple || !t.visible), S = P(() => e.disabled || (x == null ? void 0 : x.disabled)), C = P(() => {
    const F = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !S.value && t.inputHovering && F;
  }), $ = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), M = P(() => s.is("reverse", $.value && t.visible && e.suffixTransition)), R = P(() => (x == null ? void 0 : x.statusIcon) && (w == null ? void 0 : w.validateState) && Ib[w == null ? void 0 : w.validateState]), D = P(() => e.remote ? 300 : 0), N = P(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), B = P(() => {
    const F = Array.from(t.options.values()), E = [];
    return k.value.forEach((O) => {
      const W = F.findIndex((ke) => ke.currentLabel === O);
      W > -1 && E.push(F[W]);
    }), E.length >= F.length ? E : F;
  }), oe = P(() => Array.from(t.cachedOptions.values())), q = P(() => {
    const F = B.value.filter((E) => !E.created).some((E) => E.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !F;
  }), ie = ps(), j = P(() => ["small"].includes(ie.value) ? "small" : "default"), V = P({
    get() {
      return t.visible && N.value !== !1;
    },
    set(F) {
      t.visible = F;
    }
  });
  Te([() => S.value, () => ie.value, () => x == null ? void 0 : x.size], () => {
    Ue(() => {
      H();
    });
  }), Te(() => e.placeholder, (F) => {
    t.cachedPlaceHolder = t.currentPlaceholder = F, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Te(() => e.modelValue, (F, E) => {
    e.multiple && (H(), F && F.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", Y(t.query))), K(), e.filterable && !e.multiple && (t.inputLength = 20), !fu(F, E) && e.validateEvent && (w == null || w.validate("change").catch((O) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), Te(() => t.visible, (F) => {
    var E, O, W, ke, He;
    F ? ((O = (E = l.value) == null ? void 0 : E.updatePopper) == null || O.call(E), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (ke = (W = a.value) == null ? void 0 : W.focus) == null || ke.call(W), e.multiple ? (He = i.value) == null || He.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), Y(t.query), !e.multiple && !e.remote && (v.value.query = "", So(v), So(g)))) : (e.filterable && (Se(e.filterMethod) && e.filterMethod(""), Se(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Ee(), Ue(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", F);
  }), Te(() => t.options.entries(), () => {
    var F, E, O;
    if (!Bt)
      return;
    (E = (F = l.value) == null ? void 0 : F.updatePopper) == null || E.call(F), e.multiple && H();
    const W = ((O = c.value) == null ? void 0 : O.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !Tb(e.modelValue) || !Array.from(W).includes(document.activeElement)) && K(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Z();
  }, {
    flush: "post"
  }), Te(() => t.hoverIndex, (F) => {
    vt(F) && F > -1 ? d.value = B.value[F] || {} : d.value = {}, B.value.forEach((E) => {
      E.hover = d.value === E;
    });
  });
  const H = () => {
    Ue(() => {
      var F, E;
      if (!o.value)
        return;
      const O = o.value.$el.querySelector("input");
      m = m || (O.clientHeight > 0 ? O.clientHeight + 2 : 0);
      const W = f.value, ke = getComputedStyle(O).getPropertyValue(s.cssVarName("input-height")), He = Number.parseFloat(ke) || zM(ie.value || (x == null ? void 0 : x.size)), We = ie.value || He === m || m <= 0 ? He : m;
      !(O.offsetParent === null) && (O.style.height = `${(t.selected.length === 0 ? We : Math.max(W ? W.clientHeight + (W.clientHeight > We ? 6 : 0) : 0, We)) - 2}px`), t.visible && N.value !== !1 && ((E = (F = l.value) == null ? void 0 : F.updatePopper) == null || E.call(F));
    });
  }, Y = async (F) => {
    if (!(t.previousQuery === F || t.isOnComposition)) {
      if (t.previousQuery === null && (Se(e.filterMethod) || Se(e.remoteMethod))) {
        t.previousQuery = F;
        return;
      }
      t.previousQuery = F, Ue(() => {
        var E, O;
        t.visible && ((O = (E = l.value) == null ? void 0 : E.updatePopper) == null || O.call(E));
      }), t.hoverIndex = -1, e.multiple && e.filterable && Ue(() => {
        if (!S.value) {
          const E = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, E) : E, I();
        }
        H();
      }), e.remote && Se(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(F)) : Se(e.filterMethod) ? (e.filterMethod(F), So(g)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = F, So(v), So(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await Ue(), Z());
    }
  }, I = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, Z = () => {
    const F = B.value.filter((W) => W.visible && !W.disabled && !W.states.groupDisabled), E = F.find((W) => W.created), O = F[0];
    t.hoverIndex = X(B.value, E || O);
  }, K = () => {
    var F;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const O = me(e.modelValue);
      (F = O.props) != null && F.created ? (t.createdLabel = O.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = O.currentLabel, t.selected = O, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const E = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((O) => {
      E.push(me(O));
    }), t.selected = E, Ue(() => {
      H();
    });
  }, me = (F) => {
    let E;
    const O = Fs(F).toLowerCase() === "object", W = Fs(F).toLowerCase() === "null", ke = Fs(F).toLowerCase() === "undefined";
    for (let be = t.cachedOptions.size - 1; be >= 0; be--) {
      const de = oe.value[be];
      if (O ? rn(de.value, e.valueKey) === rn(F, e.valueKey) : de.value === F) {
        E = {
          value: F,
          currentLabel: de.currentLabel,
          isDisabled: de.isDisabled
        };
        break;
      }
    }
    if (E)
      return E;
    const He = O ? F.label : !W && !ke ? F : "", We = {
      value: F,
      currentLabel: He
    };
    return e.multiple && (We.hitState = !1), We;
  }, Ee = () => {
    setTimeout(() => {
      const F = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((E) => B.value.findIndex((O) => rn(O, F) === rn(E, F)))) : t.hoverIndex = -1 : t.hoverIndex = B.value.findIndex((E) => sn(E) === sn(t.selected));
    }, 300);
  }, Oe = () => {
    var F, E;
    Pe(), (E = (F = l.value) == null ? void 0 : F.updatePopper) == null || E.call(F), e.multiple && H();
  }, Pe = () => {
    var F;
    t.inputWidth = (F = o.value) == null ? void 0 : F.$el.offsetWidth;
  }, Ge = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, Y(t.query));
  }, ze = uu(() => {
    Ge();
  }, D.value), dt = uu((F) => {
    Y(F.target.value);
  }, D.value), pe = (F) => {
    fu(e.modelValue, F) || n.emit(ef, F);
  }, Me = (F) => dM(F, (E) => !t.disabledOptions.has(E)), T = (F) => {
    if (F.code !== Gn.delete) {
      if (F.target.value.length <= 0 && !ye()) {
        const E = e.modelValue.slice(), O = Me(E);
        if (O < 0)
          return;
        E.splice(O, 1), n.emit(Gt, E), pe(E);
      }
      F.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, L = (F, E) => {
    const O = t.selected.indexOf(E);
    if (O > -1 && !S.value) {
      const W = e.modelValue.slice();
      W.splice(O, 1), n.emit(Gt, W), pe(W), n.emit("remove-tag", E.value);
    }
    F.stopPropagation(), ce();
  }, z = (F) => {
    F.stopPropagation();
    const E = e.multiple ? [] : "";
    if (!Ke(E))
      for (const O of t.selected)
        O.isDisabled && E.push(O.value);
    n.emit(Gt, E), pe(E), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), ce();
  }, J = (F) => {
    var E;
    if (e.multiple) {
      const O = (e.modelValue || []).slice(), W = X(O, F.value);
      W > -1 ? O.splice(W, 1) : (e.multipleLimit <= 0 || O.length < e.multipleLimit) && O.push(F.value), n.emit(Gt, O), pe(O), F.created && (t.query = "", Y(""), t.inputLength = 20), e.filterable && ((E = i.value) == null || E.focus());
    } else
      n.emit(Gt, F.value), pe(F.value), t.visible = !1;
    ee(), !t.visible && Ue(() => {
      ae(F);
    });
  }, X = (F = [], E) => {
    if (!Fe(E))
      return F.indexOf(E);
    const O = e.valueKey;
    let W = -1;
    return F.some((ke, He) => je(rn(ke, O)) === rn(E, O) ? (W = He, !0) : !1), W;
  }, ee = () => {
    const F = i.value || o.value;
    F && (F == null || F.focus());
  }, ae = (F) => {
    var E, O, W, ke, He;
    const We = Array.isArray(F) ? F[0] : F;
    let be = null;
    if (We != null && We.value) {
      const de = B.value.filter((Le) => Le.value === We.value);
      de.length > 0 && (be = de[0].$el);
    }
    if (l.value && be) {
      const de = (ke = (W = (O = (E = l.value) == null ? void 0 : E.popperRef) == null ? void 0 : O.contentRef) == null ? void 0 : W.querySelector) == null ? void 0 : ke.call(W, `.${s.be("dropdown", "wrap")}`);
      de && bM(de, be);
    }
    (He = p.value) == null || He.handleScroll();
  }, se = (F) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(F.value, F), t.cachedOptions.set(F.value, F), F.disabled && t.disabledOptions.set(F.value, F);
  }, ne = (F, E) => {
    t.options.get(F) === E && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(F));
  }, te = (F) => {
    F.code !== Gn.backspace && ye(!1), t.inputLength = i.value.value.length * 15 + 20, H();
  }, ye = (F) => {
    if (!Array.isArray(t.selected))
      return;
    const E = Me(t.selected.map((W) => W.value)), O = t.selected[E];
    if (O)
      return F === !0 || F === !1 ? (O.hitState = F, F) : (O.hitState = !O.hitState, O.hitState);
  }, fe = (F) => {
    const E = F.target.value;
    if (F.type === "compositionend")
      t.isOnComposition = !1, Ue(() => Y(E));
    else {
      const O = E[E.length - 1] || "";
      t.isOnComposition = !Rb(O);
    }
  }, ve = () => {
    Ue(() => ae(t.selected));
  }, U = (F) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", F));
  }, ce = () => {
    var F, E;
    t.visible ? (F = i.value || o.value) == null || F.focus() : (E = o.value) == null || E.focus();
  }, Ae = () => {
    var F, E, O;
    t.visible = !1, (F = o.value) == null || F.blur(), (O = (E = a.value) == null ? void 0 : E.blur) == null || O.call(E);
  }, Re = (F) => {
    var E, O, W;
    (E = l.value) != null && E.isFocusInsideContent(F) || (O = u.value) != null && O.isFocusInsideContent(F) || (W = c.value) != null && W.contains(F.relatedTarget) || (t.visible && ht(), t.focused = !1, n.emit("blur", F));
  }, ut = (F) => {
    z(F);
  }, ht = () => {
    t.visible = !1;
  }, kt = (F) => {
    t.visible && (F.preventDefault(), F.stopPropagation(), t.visible = !1);
  }, St = (F) => {
    F && !t.mouseEnter || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), ce());
  }, pn = () => {
    t.visible ? B.value[t.hoverIndex] && J(B.value[t.hoverIndex]) : St();
  }, sn = (F) => Fe(F.value) ? rn(F.value, e.valueKey) : F.value, mt = P(() => B.value.filter((F) => F.visible).every((F) => F.disabled)), $t = P(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), An = P(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), nr = (F) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !mt.value) {
      F === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : F === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const E = B.value[t.hoverIndex];
      (E.disabled === !0 || E.states.groupDisabled === !0 || !E.visible) && nr(F), Ue(() => ae(d.value));
    }
  }, Gr = () => {
    t.mouseEnter = !0;
  }, Cr = () => {
    t.mouseEnter = !1;
  }, xo = (F, E) => {
    var O, W;
    L(F, E), (W = (O = u.value) == null ? void 0 : O.updatePopper) == null || W.call(O);
  }, Wr = P(() => ({
    maxWidth: `${b(t.inputWidth) - 32 - (R.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: k,
    optionsArray: B,
    hoverOption: d,
    selectSize: ie,
    handleResize: Oe,
    debouncedOnInputChange: ze,
    debouncedQueryChange: dt,
    deletePrevTag: T,
    deleteTag: L,
    deleteSelected: z,
    handleOptionSelect: J,
    scrollToOption: ae,
    readonly: y,
    resetInputHeight: H,
    showClose: C,
    iconComponent: $,
    iconReverse: M,
    showNewOption: q,
    collapseTagSize: j,
    setSelected: K,
    managePlaceholder: I,
    selectDisabled: S,
    emptyText: N,
    toggleLastOptionHitState: ye,
    resetInputState: te,
    handleComposition: fe,
    onOptionCreate: se,
    onOptionDestroy: ne,
    handleMenuEnter: ve,
    handleFocus: U,
    focus: ce,
    blur: Ae,
    handleBlur: Re,
    handleClearClick: ut,
    handleClose: ht,
    handleKeydownEscape: kt,
    toggleMenu: St,
    selectOption: pn,
    getValueKey: sn,
    navigateOptions: nr,
    handleDeleteTooltipTag: xo,
    dropMenuVisible: V,
    queryChange: v,
    groupQueryChange: g,
    showTagList: $t,
    collapseTagList: An,
    selectTagsStyle: Wr,
    reference: o,
    input: i,
    iOSInput: a,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: c,
    scrollbar: p,
    handleMouseEnter: Gr,
    handleMouseLeave: Cr
  };
};
var DO = /* @__PURE__ */ re({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function s(o, i) {
      if (o.length !== i.length)
        return !1;
      for (const [a] of o.entries())
        if (o[a] != i[a])
          return !1;
      return !0;
    }
    return () => {
      var o, i;
      const a = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(f) {
        Array.isArray(f) && f.forEach((c) => {
          var p, d, v, g;
          const k = (p = (c == null ? void 0 : c.type) || {}) == null ? void 0 : p.name;
          k === "ElOptionGroup" ? u(!Ke(c.children) && !Array.isArray(c.children) && Se((d = c.children) == null ? void 0 : d.default) ? (v = c.children) == null ? void 0 : v.default() : c.children) : k === "ElOption" ? l.push((g = c.props) == null ? void 0 : g.label) : Array.isArray(c.children) && u(c.children);
        });
      }
      return a.length && u((i = a[0]) == null ? void 0 : i.children), s(l, r) || (r = l, n("update-options", l)), a;
    };
  }
});
const j0 = "ElSelect", BO = /* @__PURE__ */ re({
  name: j0,
  componentName: j0,
  components: {
    ElInput: Hi,
    ElSelectMenu: RO,
    ElOption: bf,
    ElOptions: DO,
    ElTag: MR,
    ElScrollbar: JL,
    ElTooltip: ss,
    ElIcon: Wt
  },
  directives: { ClickOutside: c_ },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: HM
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: tn.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: kn,
      default: Yu
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: kn,
      default: Mb
    },
    tagType: { ...u_.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Bi,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    Gt,
    ef,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Qe("select"), r = Qe("input"), { t: s } = Sn(), o = Fi(), i = OO(e), {
      optionList: a,
      optionsArray: l,
      hoverOption: u,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: k,
      deleteTag: m,
      deleteSelected: x,
      handleOptionSelect: w,
      scrollToOption: y,
      setSelected: S,
      resetInputHeight: C,
      managePlaceholder: $,
      showClose: M,
      selectDisabled: R,
      iconComponent: D,
      iconReverse: N,
      showNewOption: B,
      emptyText: oe,
      toggleLastOptionHitState: q,
      resetInputState: ie,
      handleComposition: j,
      onOptionCreate: V,
      onOptionDestroy: H,
      handleMenuEnter: Y,
      handleFocus: I,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Ee,
      handleClose: Oe,
      handleKeydownEscape: Pe,
      toggleMenu: Ge,
      selectOption: ze,
      getValueKey: dt,
      navigateOptions: pe,
      handleDeleteTooltipTag: Me,
      dropMenuVisible: T,
      reference: L,
      input: z,
      iOSInput: J,
      tooltipRef: X,
      tagTooltipRef: ee,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      queryChange: te,
      groupQueryChange: ye,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: ce,
      selectTagsStyle: Ae
    } = PO(e, i, t), {
      inputWidth: Re,
      selected: ut,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: St,
      selectedLabel: pn,
      hoverIndex: sn,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: An,
      menuVisibleOnFocus: nr,
      isOnComposition: Gr,
      options: Cr,
      cachedOptions: xo,
      optionsCount: Wr,
      prefixWidth: F
    } = wi(i), E = P(() => {
      const Ze = [n.b()], Yt = b(f);
      return Yt && Ze.push(n.m(Yt)), e.disabled && Ze.push(n.m("disabled")), Ze;
    }), O = P(() => [
      n.e("tags"),
      n.is("disabled", b(R))
    ]), W = P(() => [
      n.b("tags-wrapper"),
      { "has-prefix": b(F) && b(ut).length }
    ]), ke = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.is("disabled", b(R))
    ]), He = P(() => [
      n.e("input"),
      n.is(b(f)),
      n.em("input", "iOS")
    ]), We = P(() => [
      n.is("empty", !e.allowCreate && !!b(mt) && b(kt) === 0)
    ]), be = P(() => ({ maxWidth: `${b(Re) > 123 && b(ut).length > e.maxCollapseTags ? b(Re) - 123 : b(Re) - 75}px` })), de = P(() => ({
      marginLeft: `${b(F)}px`,
      flexGrow: 1,
      width: `${b(ht) / (b(Re) - 32)}%`,
      maxWidth: `${b(Re) - 42}px`
    }));
    Kt(Vi, xn({
      props: e,
      options: Cr,
      optionsArray: l,
      cachedOptions: xo,
      optionsCount: Wr,
      filteredOptionsCount: kt,
      hoverIndex: sn,
      handleOptionSelect: w,
      onOptionCreate: V,
      onOptionDestroy: H,
      selectWrapper: se,
      selected: ut,
      setSelected: S,
      queryChange: te,
      groupQueryChange: ye
    })), it(() => {
      i.cachedPlaceHolder = An.value = e.placeholder || (() => s("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (An.value = ""), $i(se, p), e.remote && e.multiple && C(), Ue(() => {
        const Ze = L.value && L.value.$el;
        if (Ze && (Re.value = Ze.getBoundingClientRect().width, t.slots.prefix)) {
          const Yt = Ze.querySelector(`.${r.e("prefix")}`);
          F.value = Math.max(Yt.getBoundingClientRect().width + 11, 30);
        }
      }), S();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Gt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Gt, "");
    const Le = P(() => {
      var Ze, Yt;
      return (Yt = (Ze = X.value) == null ? void 0 : Ze.popperRef) == null ? void 0 : Yt.contentRef;
    });
    return {
      isIOS: cb,
      onOptionsRendered: (Ze) => {
        a.value = Ze;
      },
      prefixWidth: F,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: k,
      deleteTag: m,
      handleDeleteTooltipTag: Me,
      deleteSelected: x,
      handleOptionSelect: w,
      scrollToOption: y,
      inputWidth: Re,
      selected: ut,
      inputLength: ht,
      filteredOptionsCount: kt,
      visible: St,
      selectedLabel: pn,
      hoverIndex: sn,
      query: mt,
      inputHovering: $t,
      currentPlaceholder: An,
      menuVisibleOnFocus: nr,
      isOnComposition: Gr,
      options: Cr,
      resetInputHeight: C,
      managePlaceholder: $,
      showClose: M,
      selectDisabled: R,
      iconComponent: D,
      iconReverse: N,
      showNewOption: B,
      emptyText: oe,
      toggleLastOptionHitState: q,
      resetInputState: ie,
      handleComposition: j,
      handleMenuEnter: Y,
      handleFocus: I,
      focus: Z,
      blur: K,
      handleBlur: me,
      handleClearClick: Ee,
      handleClose: Oe,
      handleKeydownEscape: Pe,
      toggleMenu: Ge,
      selectOption: ze,
      getValueKey: dt,
      navigateOptions: pe,
      dropMenuVisible: T,
      reference: L,
      input: z,
      iOSInput: J,
      tooltipRef: X,
      popperPaneRef: Le,
      tags: ae,
      selectWrapper: se,
      scrollbar: ne,
      wrapperKls: E,
      tagsKls: O,
      tagWrapperKls: W,
      inputKls: ke,
      iOSInputKls: He,
      scrollbarKls: We,
      selectTagsStyle: Ae,
      nsSelect: n,
      tagTextStyle: be,
      inputStyle: de,
      handleMouseEnter: fe,
      handleMouseLeave: ve,
      showTagList: U,
      collapseTagList: ce,
      tagTooltipRef: ee,
      contentId: o,
      hoverOption: u
    };
  }
}), NO = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], FO = ["disabled"], qO = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function zO(e, t, n, r, s, o) {
  const i = sr("el-tag"), a = sr("el-tooltip"), l = sr("el-icon"), u = sr("el-input"), f = sr("el-option"), c = sr("el-options"), p = sr("el-scrollbar"), d = sr("el-select-menu"), v = b1("click-outside");
  return Ut((_(), A("div", {
    ref: "selectWrapper",
    class: Q(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = nn((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    xe(a, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: he(() => {
        var g, k;
        return [
          h("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (m) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (m) => e.inputHovering = !1)
          }, [
            e.multiple ? (_(), A("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: Q(e.tagsKls),
              style: st(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...m) => e.focus && e.focus(...m))
            }, [
              e.collapseTags && e.selected.length ? (_(), ue(Vr, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  h("span", {
                    class: Q(e.tagWrapperKls)
                  }, [
                    (_(!0), A(et, null, yn(e.showTagList, (m) => (_(), ue(i, {
                      key: e.getValueKey(m),
                      closable: !e.selectDisabled && !m.isDisabled,
                      size: e.collapseTagSize,
                      hit: m.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (x) => e.deleteTag(x, m)
                    }, {
                      default: he(() => [
                        h("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st(e.tagTextStyle)
                        }, Ye(m.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (_(), ue(i, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: he(() => [
                        e.collapseTagsTooltip ? (_(), ue(a, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: he(() => [
                            h("span", {
                              class: Q(e.nsSelect.e("tags-text"))
                            }, "+ " + Ye(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: he(() => [
                            h("div", {
                              class: Q(e.nsSelect.e("collapse-tags"))
                            }, [
                              (_(!0), A(et, null, yn(e.collapseTagList, (m) => (_(), A("div", {
                                key: e.getValueKey(m),
                                class: Q(e.nsSelect.e("collapse-tag"))
                              }, [
                                xe(i, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !m.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: m.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (x) => e.handleDeleteTooltipTag(x, m)
                                }, {
                                  default: he(() => [
                                    h("span", {
                                      class: Q(e.nsSelect.e("tags-text")),
                                      style: st({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, Ye(m.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (_(), A("span", {
                          key: 1,
                          class: Q(e.nsSelect.e("tags-text"))
                        }, "+ " + Ye(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : _e("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : _e("v-if", !0),
              e.collapseTags ? _e("v-if", !0) : (_(), ue(Vr, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: he(() => [
                  h("span", {
                    class: Q(e.tagWrapperKls),
                    style: st(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (_(!0), A(et, null, yn(e.selected, (m) => (_(), ue(i, {
                      key: e.getValueKey(m),
                      closable: !e.selectDisabled && !m.isDisabled,
                      size: e.collapseTagSize,
                      hit: m.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (x) => e.deleteTag(x, m)
                    }, {
                      default: he(() => [
                        h("span", {
                          class: Q(e.nsSelect.e("tags-text")),
                          style: st({ maxWidth: e.inputWidth - 75 + "px" })
                        }, Ye(m.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Ut((_(), A("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (m) => e.query = m),
                type: "text",
                class: Q(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: st(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...m) => e.handleFocus && e.handleFocus(...m)),
                onBlur: t[2] || (t[2] = (...m) => e.handleBlur && e.handleBlur(...m)),
                onKeyup: t[3] || (t[3] = (...m) => e.managePlaceholder && e.managePlaceholder(...m)),
                onKeydown: [
                  t[4] || (t[4] = (...m) => e.resetInputState && e.resetInputState(...m)),
                  t[5] || (t[5] = zt(nn((m) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = zt(nn((m) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = zt((...m) => e.handleKeydownEscape && e.handleKeydownEscape(...m), ["esc"])),
                  t[8] || (t[8] = zt(nn((...m) => e.selectOption && e.selectOption(...m), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = zt((...m) => e.deletePrevTag && e.deletePrevTag(...m), ["delete"])),
                  t[10] || (t[10] = zt((m) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...m) => e.handleComposition && e.handleComposition(...m)),
                onCompositionupdate: t[12] || (t[12] = (...m) => e.handleComposition && e.handleComposition(...m)),
                onCompositionend: t[13] || (t[13] = (...m) => e.handleComposition && e.handleComposition(...m)),
                onInput: t[14] || (t[14] = (...m) => e.debouncedQueryChange && e.debouncedQueryChange(...m))
              }, null, 46, NO)), [
                [K1, e.query]
              ]) : _e("v-if", !0)
            ], 6)) : _e("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (_(), A("input", {
              key: 1,
              ref: "iOSInput",
              class: Q(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, FO)) : _e("v-if", !0),
            xe(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (m) => e.selectedLabel = m),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: Q([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((k = e.hoverOption) == null ? void 0 : k.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = zt(nn((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = zt(nn((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                zt(nn(e.selectOption, ["stop", "prevent"]), ["enter"]),
                zt(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = zt((m) => e.visible = !1, ["tab"]))
              ]
            }, oi({
              suffix: he(() => [
                e.iconComponent && !e.showClose ? (_(), ue(l, {
                  key: 0,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: he(() => [
                    (_(), ue(Pt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _e("v-if", !0),
                e.showClose && e.clearIcon ? (_(), ue(l, {
                  key: 1,
                  class: Q([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: he(() => [
                    (_(), ue(Pt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : _e("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: he(() => [
                  h("div", qO, [
                    we(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: he(() => [
        xe(d, null, oi({
          default: he(() => [
            Ut(xe(p, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Q(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: he(() => [
                e.showNewOption ? (_(), ue(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : _e("v-if", !0),
                xe(c, { onUpdateOptions: e.onOptionsRendered }, {
                  default: he(() => [
                    we(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Zn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (_(), A(et, { key: 0 }, [
              e.$slots.empty ? we(e.$slots, "empty", { key: 0 }) : (_(), A("p", {
                key: 1,
                class: Q(e.nsSelect.be("dropdown", "empty"))
              }, Ye(e.emptyText), 3))
            ], 64)) : _e("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: he(() => [
              we(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: he(() => [
              we(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var HO = /* @__PURE__ */ Je(BO, [["render", zO], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const jO = /* @__PURE__ */ re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Qe("select"), n = G(!0), r = _t(), s = G([]);
    Kt(p_, xn({
      ...wi(e)
    }));
    const o = qe(Vi);
    it(() => {
      s.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((f) => {
        var c;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (c = f.children) != null && c.length && u.push(...i(f));
      }), u;
    }, { groupQueryChange: a } = je(o);
    return Te(a, () => {
      n.value = s.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function VO(e, t, n, r, s, o) {
  return Ut((_(), A("ul", {
    class: Q(e.ns.be("group", "wrap"))
  }, [
    h("li", {
      class: Q(e.ns.be("group", "title"))
    }, Ye(e.label), 3),
    h("li", null, [
      h("ul", {
        class: Q(e.ns.b("group"))
      }, [
        we(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Zn, e.visible]
  ]);
}
var h_ = /* @__PURE__ */ Je(jO, [["render", VO], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const mu = Cn(HO, {
  Option: bf,
  OptionGroup: h_
}), UO = Qu(bf);
Qu(h_);
const _f = () => qe(d_, {}), KO = ot({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: Be(Array),
    default: () => tf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: us
  }
}), GO = /* @__PURE__ */ re({
  name: "ElPaginationSizes"
}), WO = /* @__PURE__ */ re({
  ...GO,
  props: KO,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Sn(), s = Qe("pagination"), o = _f(), i = G(n.pageSize);
    Te(() => n.pageSizes, (u, f) => {
      if (!fu(u, f) && Array.isArray(u)) {
        const c = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", c);
      }
    }), Te(() => n.pageSize, (u) => {
      i.value = u;
    });
    const a = P(() => n.pageSizes);
    function l(u) {
      var f;
      u !== i.value && (i.value = u, (f = o.handleSizeChange) == null || f.call(o, Number(u)));
    }
    return (u, f) => (_(), A("span", {
      class: Q(b(s).e("sizes"))
    }, [
      xe(b(mu), {
        "model-value": i.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: l
      }, {
        default: he(() => [
          (_(!0), A(et, null, yn(b(a), (c) => (_(), ue(b(UO), {
            key: c,
            value: c,
            label: c + b(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var ZO = /* @__PURE__ */ Je(WO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const XO = ot({
  size: {
    type: String,
    values: us
  }
}), JO = ["disabled"], YO = /* @__PURE__ */ re({
  name: "ElPaginationJumper"
}), QO = /* @__PURE__ */ re({
  ...YO,
  props: XO,
  setup(e) {
    const { t } = Sn(), n = Qe("pagination"), { pageCount: r, disabled: s, currentPage: o, changeEvent: i } = _f(), a = G(), l = P(() => {
      var c;
      return (c = a.value) != null ? c : o == null ? void 0 : o.value;
    });
    function u(c) {
      a.value = c ? +c : "";
    }
    function f(c) {
      c = Math.trunc(+c), i == null || i(c), a.value = void 0;
    }
    return (c, p) => (_(), A("span", {
      class: Q(b(n).e("jump")),
      disabled: b(s)
    }, [
      h("span", {
        class: Q([b(n).e("goto")])
      }, Ye(b(t)("el.pagination.goto")), 3),
      xe(b(Hi), {
        size: c.size,
        class: Q([b(n).e("editor"), b(n).is("in-pagination")]),
        min: 1,
        max: b(r),
        disabled: b(s),
        "model-value": b(l),
        "validate-event": !1,
        label: b(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      h("span", {
        class: Q([b(n).e("classifier")])
      }, Ye(b(t)("el.pagination.pageClassifier")), 3)
    ], 10, JO));
  }
});
var eP = /* @__PURE__ */ Je(QO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const tP = ot({
  total: {
    type: Number,
    default: 1e3
  }
}), nP = ["disabled"], rP = /* @__PURE__ */ re({
  name: "ElPaginationTotal"
}), oP = /* @__PURE__ */ re({
  ...rP,
  props: tP,
  setup(e) {
    const { t } = Sn(), n = Qe("pagination"), { disabled: r } = _f();
    return (s, o) => (_(), A("span", {
      class: Q(b(n).e("total")),
      disabled: b(r)
    }, Ye(b(t)("el.pagination.total", {
      total: s.total
    })), 11, nP));
  }
});
var sP = /* @__PURE__ */ Je(oP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const iP = ot({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), aP = ["onKeyup"], lP = ["aria-current", "aria-label", "tabindex"], cP = ["tabindex", "aria-label"], uP = ["aria-current", "aria-label", "tabindex"], fP = ["tabindex", "aria-label"], dP = ["aria-current", "aria-label", "tabindex"], pP = /* @__PURE__ */ re({
  name: "ElPaginationPager"
}), hP = /* @__PURE__ */ re({
  ...pP,
  props: iP,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = Qe("pager"), s = Qe("icon"), { t: o } = Sn(), i = G(!1), a = G(!1), l = G(!1), u = G(!1), f = G(!1), c = G(!1), p = P(() => {
      const y = n.pagerCount, S = (y - 1) / 2, C = Number(n.currentPage), $ = Number(n.pageCount);
      let M = !1, R = !1;
      $ > y && (C > y - S && (M = !0), C < $ - S && (R = !0));
      const D = [];
      if (M && !R) {
        const N = $ - (y - 2);
        for (let B = N; B < $; B++)
          D.push(B);
      } else if (!M && R)
        for (let N = 2; N < y; N++)
          D.push(N);
      else if (M && R) {
        const N = Math.floor(y / 2) - 1;
        for (let B = C - N; B <= C + N; B++)
          D.push(B);
      } else
        for (let N = 2; N < $; N++)
          D.push(N);
      return D;
    }), d = P(() => [
      "more",
      "btn-quickprev",
      s.b(),
      r.is("disabled", n.disabled)
    ]), v = P(() => [
      "more",
      "btn-quicknext",
      s.b(),
      r.is("disabled", n.disabled)
    ]), g = P(() => n.disabled ? -1 : 0);
    Du(() => {
      const y = (n.pagerCount - 1) / 2;
      i.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - y && (i.value = !0), n.currentPage < n.pageCount - y && (a.value = !0));
    });
    function k(y = !1) {
      n.disabled || (y ? l.value = !0 : u.value = !0);
    }
    function m(y = !1) {
      y ? f.value = !0 : c.value = !0;
    }
    function x(y) {
      const S = y.target;
      if (S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("number")) {
        const C = Number(S.textContent);
        C !== n.currentPage && t("change", C);
      } else S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("more") && w(y);
    }
    function w(y) {
      const S = y.target;
      if (S.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let C = Number(S.textContent);
      const $ = n.pageCount, M = n.currentPage, R = n.pagerCount - 2;
      S.className.includes("more") && (S.className.includes("quickprev") ? C = M - R : S.className.includes("quicknext") && (C = M + R)), Number.isNaN(+C) || (C < 1 && (C = 1), C > $ && (C = $)), C !== M && t("change", C);
    }
    return (y, S) => (_(), A("ul", {
      class: Q(b(r).b()),
      onClick: w,
      onKeyup: zt(x, ["enter"])
    }, [
      y.pageCount > 0 ? (_(), A("li", {
        key: 0,
        class: Q([[
          b(r).is("active", y.currentPage === 1),
          b(r).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === 1,
        "aria-label": b(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: b(g)
      }, " 1 ", 10, lP)) : _e("v-if", !0),
      i.value ? (_(), A("li", {
        key: 1,
        class: Q(b(d)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.prevPages", { pager: y.pagerCount - 2 }),
        onMouseenter: S[0] || (S[0] = (C) => k(!0)),
        onMouseleave: S[1] || (S[1] = (C) => l.value = !1),
        onFocus: S[2] || (S[2] = (C) => m(!0)),
        onBlur: S[3] || (S[3] = (C) => f.value = !1)
      }, [
        (l.value || f.value) && !y.disabled ? (_(), ue(b(MM), { key: 0 })) : (_(), ue(b(i0), { key: 1 }))
      ], 42, cP)) : _e("v-if", !0),
      (_(!0), A(et, null, yn(b(p), (C) => (_(), A("li", {
        key: C,
        class: Q([[
          b(r).is("active", y.currentPage === C),
          b(r).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === C,
        "aria-label": b(o)("el.pagination.currentPage", { pager: C }),
        tabindex: b(g)
      }, Ye(C), 11, uP))), 128)),
      a.value ? (_(), A("li", {
        key: 2,
        class: Q(b(v)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.nextPages", { pager: y.pagerCount - 2 }),
        onMouseenter: S[4] || (S[4] = (C) => k()),
        onMouseleave: S[5] || (S[5] = (C) => u.value = !1),
        onFocus: S[6] || (S[6] = (C) => m()),
        onBlur: S[7] || (S[7] = (C) => c.value = !1)
      }, [
        (u.value || c.value) && !y.disabled ? (_(), ue(b(LM), { key: 0 })) : (_(), ue(b(i0), { key: 1 }))
      ], 42, fP)) : _e("v-if", !0),
      y.pageCount > 1 ? (_(), A("li", {
        key: 3,
        class: Q([[
          b(r).is("active", y.currentPage === y.pageCount),
          b(r).is("disabled", y.disabled)
        ], "number"]),
        "aria-current": y.currentPage === y.pageCount,
        "aria-label": b(o)("el.pagination.currentPage", { pager: y.pageCount }),
        tabindex: b(g)
      }, Ye(y.pageCount), 11, dP)) : _e("v-if", !0)
    ], 42, aP));
  }
});
var gP = /* @__PURE__ */ Je(hP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Nt = (e) => typeof e != "number", g_ = ot({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => vt(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: Be(Array),
    default: () => tf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: kn,
    default: () => wM
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: kn,
    default: () => xM
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), mP = {
  "update:current-page": (e) => vt(e),
  "update:page-size": (e) => vt(e),
  "size-change": (e) => vt(e),
  "current-change": (e) => vt(e),
  "prev-click": (e) => vt(e),
  "next-click": (e) => vt(e)
}, V0 = "ElPagination";
var vP = /* @__PURE__ */ re({
  name: V0,
  props: g_,
  emits: mP,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = Sn(), s = Qe("pagination"), o = _t().vnode.props || {}, i = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, a = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, l = P(() => {
      if (Nt(e.total) && Nt(e.pageCount) || !Nt(e.currentPage) && !i)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Nt(e.pageCount)) {
          if (!Nt(e.total) && !Nt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = G(Nt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = G(Nt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), c = P({
      get() {
        return Nt(e.pageSize) ? u.value : e.pageSize;
      },
      set(w) {
        Nt(e.pageSize) && (u.value = w), a && (t("update:page-size", w), t("size-change", w));
      }
    }), p = P(() => {
      let w = 0;
      return Nt(e.pageCount) ? Nt(e.total) || (w = Math.max(1, Math.ceil(e.total / c.value))) : w = e.pageCount, w;
    }), d = P({
      get() {
        return Nt(e.currentPage) ? f.value : e.currentPage;
      },
      set(w) {
        let y = w;
        w < 1 ? y = 1 : w > p.value && (y = p.value), Nt(e.currentPage) && (f.value = y), i && (t("update:current-page", y), t("current-change", y));
      }
    });
    Te(p, (w) => {
      d.value > w && (d.value = w);
    });
    function v(w) {
      d.value = w;
    }
    function g(w) {
      c.value = w;
      const y = p.value;
      d.value > y && (d.value = y);
    }
    function k() {
      e.disabled || (d.value -= 1, t("prev-click", d.value));
    }
    function m() {
      e.disabled || (d.value += 1, t("next-click", d.value));
    }
    function x(w, y) {
      w && (w.props || (w.props = {}), w.props.class = [w.props.class, y].join(" "));
    }
    return Kt(d_, {
      pageCount: p,
      disabled: P(() => e.disabled),
      currentPage: d,
      changeEvent: v,
      handleSizeChange: g
    }), () => {
      var w, y;
      if (!l.value)
        return r("el.pagination.deprecationWarning"), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const S = [], C = [], $ = vn("div", { class: s.e("rightwrapper") }, C), M = {
        prev: vn(yO, {
          disabled: e.disabled,
          currentPage: d.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: k
        }),
        jumper: vn(eP, {
          size: e.small ? "small" : "default"
        }),
        pager: vn(gP, {
          currentPage: d.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: vn(EO, {
          disabled: e.disabled,
          currentPage: d.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: m
        }),
        sizes: vn(ZO, {
          pageSize: c.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (y = (w = n == null ? void 0 : n.default) == null ? void 0 : w.call(n)) != null ? y : null,
        total: vn(sP, { total: Nt(e.total) ? 0 : e.total })
      }, R = e.layout.split(",").map((N) => N.trim());
      let D = !1;
      return R.forEach((N) => {
        if (N === "->") {
          D = !0;
          return;
        }
        D ? C.push(M[N]) : S.push(M[N]);
      }), x(S[0], s.is("first")), x(S[S.length - 1], s.is("last")), D && C.length > 0 && (x(C[0], s.is("first")), x(C[C.length - 1], s.is("last")), S.push($)), vn("div", {
        class: [
          s.b(),
          s.is("background", e.background),
          {
            [s.m("small")]: e.small
          }
        ]
      }, S);
    };
  }
});
const bP = Cn(vP), m_ = ot({
  trigger: os.trigger,
  placement: Ea.placement,
  disabled: os.disabled,
  visible: tn.visible,
  transition: tn.transition,
  popperOptions: Ea.popperOptions,
  tabindex: Ea.tabindex,
  content: tn.content,
  popperStyle: tn.popperStyle,
  popperClass: tn.popperClass,
  enterable: {
    ...tn.enterable,
    default: !0
  },
  effect: {
    ...tn.effect,
    default: "light"
  },
  teleported: tn.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), _P = {
  "update:visible": (e) => Ju(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, yP = "onUpdate:visible", wP = /* @__PURE__ */ re({
  name: "ElPopover"
}), kP = /* @__PURE__ */ re({
  ...wP,
  props: m_,
  emits: _P,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = P(() => r[yP]), o = Qe("popover"), i = G(), a = P(() => {
      var k;
      return (k = b(i)) == null ? void 0 : k.popperRef;
    }), l = P(() => [
      {
        width: ho(r.width)
      },
      r.popperStyle
    ]), u = P(() => [o.b(), r.popperClass, { [o.m("plain")]: !!r.content }]), f = P(() => r.transition === `${o.namespace.value}-fade-in-linear`), c = () => {
      var k;
      (k = i.value) == null || k.hide();
    }, p = () => {
      n("before-enter");
    }, d = () => {
      n("before-leave");
    }, v = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: a,
      hide: c
    }), (k, m) => (_(), ue(b(ss), gt({
      ref_key: "tooltipRef",
      ref: i
    }, k.$attrs, {
      trigger: k.trigger,
      placement: k.placement,
      disabled: k.disabled,
      visible: k.visible,
      transition: k.transition,
      "popper-options": k.popperOptions,
      tabindex: k.tabindex,
      content: k.content,
      offset: k.offset,
      "show-after": k.showAfter,
      "hide-after": k.hideAfter,
      "auto-close": k.autoClose,
      "show-arrow": k.showArrow,
      "aria-label": k.title,
      effect: k.effect,
      enterable: k.enterable,
      "popper-class": b(u),
      "popper-style": b(l),
      teleported: k.teleported,
      persistent: k.persistent,
      "gpu-acceleration": b(f),
      "onUpdate:visible": b(s),
      onBeforeShow: p,
      onBeforeHide: d,
      onShow: v,
      onHide: g
    }), {
      content: he(() => [
        k.title ? (_(), A("div", {
          key: 0,
          class: Q(b(o).e("title")),
          role: "title"
        }, Ye(k.title), 3)) : _e("v-if", !0),
        we(k.$slots, "default", {}, () => [
          jr(Ye(k.content), 1)
        ])
      ]),
      default: he(() => [
        k.$slots.reference ? we(k.$slots, "reference", { key: 0 }) : _e("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var xP = /* @__PURE__ */ Je(kP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const U0 = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var CP = {
  mounted(e, t) {
    U0(e, t);
  },
  updated(e, t) {
    U0(e, t);
  }
};
const SP = "popover", EP = FM(CP, SP), AP = Cn(xP, {
  directive: EP
}), TP = "TOOLTIP_APPEND_TO";
function MP() {
  return qe(
    TP,
    P(() => {
    })
  );
}
({
  ...ss.props
});
function $P(e, t) {
  return /^on[A-Z]/.test(t);
}
function v_(e) {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
const LP = /* @__PURE__ */ re({
  name: "N8nInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "large" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    rows: { default: 2 },
    maxlength: { default: void 0 },
    title: { default: "" },
    name: { default: () => v_("input") },
    autocomplete: { default: "off" }
  },
  setup(e, { expose: t }) {
    const n = e, r = P(
      () => n.size === "medium" ? "default" : n.size
    ), s = P(() => {
      const f = [];
      return n.size === "xlarge" && f.push("xlarge"), n.type === "password" && f.push("ph-no-capture"), f;
    }), o = G(), i = P(() => {
      if (!(o != null && o.value)) return;
      const f = n.type === "textarea" ? "textarea" : "input";
      return o.value.$el.querySelector(f);
    });
    return t({ focus: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.focus();
    }, blur: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.blur();
    }, select: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.select();
    } }), (f, c) => (_(), ue(b(Hi), gt({
      ref_key: "innerInput",
      ref: o,
      "model-value": f.modelValue,
      type: f.type,
      size: r.value,
      class: ["n8n-input", ...s.value],
      autocomplete: f.autocomplete,
      name: f.name,
      placeholder: f.placeholder,
      disabled: f.disabled,
      readonly: f.readonly,
      clearable: f.clearable,
      rows: f.rows,
      title: f.title,
      maxlength: f.maxlength
    }, f.$attrs), oi({ _: 2 }, [
      f.$slots.prepend ? {
        name: "prepend",
        fn: he(() => [
          we(f.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      f.$slots.append ? {
        name: "append",
        fn: he(() => [
          we(f.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      f.$slots.prefix ? {
        name: "prefix",
        fn: he(() => [
          we(f.$slots, "prefix")
        ]),
        key: "2"
      } : void 0,
      f.$slots.suffix ? {
        name: "suffix",
        fn: he(() => [
          we(f.$slots, "suffix")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["model-value", "type", "size", "class", "autocomplete", "name", "placeholder", "disabled", "readonly", "clearable", "rows", "title", "maxlength"]));
  }
}), IP = "_xlarge_1pesg_1", RP = {
  xlarge: IP
}, OP = {
  $style: RP
}, PP = /* @__PURE__ */ kr(LP, [["__cssModules", OP]]);
var Aa = {};
const DP = "Á", BP = "á", NP = "A", FP = "a", qP = "?", zP = "?", HP = "??", jP = "Â", VP = "â", UP = "´", KP = "?", GP = "?", WP = "Æ", ZP = "æ", XP = "?", JP = "??", YP = "??", QP = "À", eD = "à", tD = "?", nD = "?", rD = "?", oD = "a", sD = "A", iD = "a", aD = "?", lD = "&", cD = "&", uD = "?", fD = "?", dD = "?", pD = "?", hD = "?", gD = "?", mD = "?", vD = "?", bD = "?", _D = "?", yD = "?", wD = "?", kD = "?", xD = "?", CD = "?", SD = "?", ED = "?", AD = "?", TD = "?", MD = "?", $D = "?", LD = "?", ID = "Å", RD = "?", OD = "A", PD = "a", DD = "??", BD = "??", ND = "?", FD = "˜", qD = "?", zD = "?", HD = "?", jD = "'", VD = "?", UD = "˜", KD = "?", GD = "Å", WD = "å", ZD = "??", XD = "??", JD = "?", YD = "*", QD = "˜", eB = "?", tB = "Ã", nB = "ã", rB = "Ä", oB = "ä", sB = "?", iB = "?", aB = "?", lB = "?", cB = "`", uB = "?", fB = "?", dB = "\", pB = "?", hB = "?", gB = "?", mB = "?", vB = "?", bB = "?", _B = "?", yB = "?", wB = "?", kB = "?", xB = "„", CB = "?", SB = "?", EB = "?", AB = "?", TB = "?", MB = "B", $B = "B", LB = "?", IB = "ß", RB = "?", OB = "?", PB = "??", DB = "??", BB = "?", NB = "?", FB = "?", qB = "?", zB = "?", HB = "?", jB = "?", VB = "?", UB = "?", KB = "?", GB = "?", WB = "?", ZB = "?", XB = "?", JB = "?", YB = "?", QB = "?", eN = "?", tN = "?", nN = "?", rN = "?", oN = "¦", sN = "¦", iN = "¦", aN = "¦", lN = "=?", cN = "=?", uN = "?", fN = "¬", dN = "??", pN = "??", hN = "?", gN = "?", mN = "?", vN = "?", bN = "+", _N = "+", yN = "+", wN = "+", kN = "+", xN = "+", CN = "+", SN = "+", EN = "-", AN = "-", TN = "-", MN = "-", $N = "-", LN = "-", IN = "-", RN = "-", ON = "-", PN = "-", DN = "?", BN = "?", NN = "?", FN = "+", qN = "+", zN = "+", HN = "+", jN = "+", VN = "+", UN = "+", KN = "+", GN = "¦", WN = "¦", ZN = "+", XN = "+", JN = "+", YN = "+", QN = "¦", eF = "¦", tF = "¦", nF = "¦", rF = "+", oF = "¦", sF = "¦", iF = "¦", aF = "`", lF = "?", cF = "?", uF = "¦", fF = "??", dF = "B", pF = "?", hF = "?", gF = "?", mF = "?", vF = "\\", bF = "?", _F = "•", yF = "•", wF = "?", kF = "?", xF = "?", CF = "?", SF = "?", EF = "C", AF = "c", TF = "?", MF = "?", $F = "?", LF = "n", IF = "?", RF = "?", OF = "?", PF = "?", DF = "n?", BF = "?", NF = "?", FF = "C", qF = "?", zF = "C", HF = "c", jF = "Ç", VF = "ç", UF = "C", KF = "c", GF = "?", WF = "?", ZF = "?", XF = "C", JF = "c", YF = "¸", QF = "¸", eq = "?", tq = "¢", nq = "·", rq = "·", oq = "??", sq = "C", iq = "?", aq = "?", lq = "?", cq = "?", uq = "?", fq = "?", dq = "ˆ", pq = "?", hq = "?", gq = "?", mq = "?", vq = "?", bq = "?", _q = "?", yq = "®", wq = "?", kq = "?", xq = "?", Cq = "?", Sq = "?", Eq = "?", Aq = "?", Tq = "?", Mq = "?", $q = "?", Lq = "?", Iq = "”", Rq = "’", Oq = "?", Pq = "?", Dq = ":", Bq = "?", Nq = "?", Fq = "?", qq = "?", zq = ",", Hq = "@", jq = "?", Vq = "°", Uq = "?", Kq = "C", Gq = "?", Wq = "?", Zq = "=", Xq = "?", Jq = "?", Yq = "?", Qq = "??", ez = "C", tz = "?", nz = "?", rz = "©", oz = "©", sz = "?", iz = "?", az = "?", lz = "?", cz = "?", uz = "??", fz = "??", dz = "?", pz = "?", hz = "?", gz = "?", mz = "?", vz = "?", bz = "?", _z = "?", yz = "?", wz = "?", kz = "?", xz = "?", Cz = "?", Sz = "?", Ez = "?", Az = "?", Tz = "?", Mz = "?", $z = "?", Lz = "??", Iz = "?", Rz = "?", Oz = "?", Pz = "?", Dz = "?", Bz = "?", Nz = "¤", Fz = "?", qz = "?", zz = "?", Hz = "?", jz = "?", Vz = "?", Uz = "?", Kz = "†", Gz = "‡", Wz = "?", Zz = "?", Xz = "?", Jz = "?", Yz = "-", Qz = "?", eH = "?", tH = "?", nH = "?", rH = "D", oH = "d", sH = "?", iH = "?", aH = "‡", lH = "?", cH = "?", uH = "?", fH = "?", dH = "?", pH = "°", hH = "?", gH = "?", mH = "d", vH = "?", bH = "?", _H = "??", yH = "??", wH = "?", kH = "?", xH = "?", CH = "´", SH = "?", EH = "?", AH = "`", TH = "˜", MH = "?", $H = "?", LH = "?", IH = "?", RH = "?", OH = "¨", PH = "?", DH = "?", BH = "?", NH = "÷", FH = "÷", qH = "?", zH = "?", HH = "?", jH = "?", VH = "?", UH = "?", KH = "$", GH = "??", WH = "??", ZH = "¨", XH = "?", JH = "?", YH = "?", QH = "?", ej = "?", tj = "?", nj = "?", rj = "?", oj = "?", sj = "?", ij = "¨", aj = "?", lj = "?", cj = "?", uj = "?", fj = "?", dj = "?", pj = "?", hj = "?", gj = "?", mj = "?", vj = "?", bj = "?", _j = "?", yj = "?", wj = "?", kj = "?", xj = "?", Cj = "?", Sj = "?", Ej = "?", Aj = "?", Tj = "?", Mj = "?", $j = "?", Lj = "?", Ij = "?", Rj = "?", Oj = "?", Pj = "?", Dj = "?", Bj = "?", Nj = "?", Fj = "?", qj = "??", zj = "??", Hj = "?", jj = "?", Vj = "?", Uj = "Ð", Kj = "d", Gj = "?", Wj = "?", Zj = "?", Xj = "?", Jj = "?", Yj = "?", Qj = "?", eV = "?", tV = "?", nV = "É", rV = "é", oV = "?", sV = "E", iV = "e", aV = "Ê", lV = "ê", cV = "?", uV = "?", fV = "?", dV = "?", pV = "?", hV = "E", gV = "e", mV = "?", vV = "?", bV = "?", _V = "??", yV = "??", wV = "?", kV = "È", xV = "è", CV = "?", SV = "?", EV = "?", AV = "?", TV = "?", MV = "l", $V = "?", LV = "?", IV = "E", RV = "e", OV = "Ø", PV = "Ø", DV = "?", BV = "Ø", NV = "?", FV = " ", qV = " ", zV = " ", HV = "?", jV = "?", VV = " ", UV = "E", KV = "e", GV = "??", WV = "??", ZV = "?", XV = "?", JV = "?", YV = "e", QV = "?", eU = "e", tU = "?", nU = "?", rU = "?", oU = "?", sU = "?", iU = "?", aU = "?", lU = "=", cU = "?", uU = "?", fU = "?", dU = "=", pU = "?", hU = "?", gU = "?", mU = "?", vU = "e", bU = "E", _U = "?", yU = "?", wU = "?", kU = "?", xU = "?", CU = "Ð", SU = "ð", EU = "Ë", AU = "ë", TU = "€", MU = "!", $U = "?", LU = "?", IU = "E", RU = "?", OU = "?", PU = "?", DU = "?", BU = "?", NU = "?", FU = "?", qU = "?", zU = "?", HU = "??", jU = "??", VU = "?", UU = "?", KU = "?", GU = "fj", WU = "?", ZU = "?", XU = "?", JU = "ƒ", YU = "??", QU = "??", eK = "?", tK = "?", nK = "?", rK = "?", oK = "F", sK = "?", iK = "½", aK = "?", lK = "¼", cK = "?", uK = "?", fK = "?", dK = "?", pK = "?", hK = "¾", gK = "?", mK = "?", vK = "?", bK = "?", _K = "?", yK = "?", wK = "/", kK = "?", xK = "??", CK = "F", SK = "?", EK = "G", AK = "?", TK = "?", MK = "?", $K = "?", LK = "G", IK = "g", RK = "G", OK = "G", PK = "g", DK = "?", BK = "?", NK = "G", FK = "g", qK = "=", zK = "?", HK = "?", jK = "?", VK = "=", UK = "?", KK = "?", GK = "?", WK = "?", ZK = "?", XK = "?", JK = "?", YK = "??", QK = "?", eG = "??", tG = "??", nG = "»", rG = "?", oG = "?", sG = "?", iG = "?", aG = "?", lG = "?", cG = "?", uG = "?", fG = "?", dG = "?", pG = "?", hG = "?", gG = "?", mG = "?", vG = "?", bG = "?", _G = "??", yG = "??", wG = "`", kG = "=", xG = "?", CG = "?", SG = "?", EG = "?", AG = "?", TG = "?", MG = "??", $G = "g", LG = "?", IG = "?", RG = "?", OG = "?", PG = "?", DG = ">", BG = ">", NG = "»", FG = "?", qG = "?", zG = "?", HG = "?", jG = "?", VG = "?", UG = "?", KG = "?", GG = "?", WG = "?", ZG = "??", XG = "??", JG = "?", YG = "?", QG = "½", eW = "H", tW = "?", nW = "?", rW = "?", oW = "?", sW = "?", iW = "?", aW = "^", lW = "?", cW = "H", uW = "h", fW = "?", dW = "?", pW = "…", hW = "?", gW = "??", mW = "H", vW = "H", bW = "?", _W = "?", yW = "?", wW = "?", kW = "?", xW = "?", CW = "??", SW = "H", EW = "?", AW = "-", TW = "??", MW = "H", $W = "?", LW = "H", IW = "h", RW = "?", OW = "?", PW = "?", DW = "-", BW = "Í", NW = "í", FW = "?", qW = "Î", zW = "î", HW = "?", jW = "?", VW = "I", UW = "?", KW = "?", GW = "¡", WW = "?", ZW = "??", XW = "I", JW = "Ì", YW = "ì", QW = "?", eZ = "?", tZ = "?", nZ = "?", rZ = "?", oZ = "?", sZ = "?", iZ = "I", aZ = "i", lZ = "I", cZ = "?", uZ = "I", fZ = "I", dZ = "i", pZ = "I", hZ = "?", gZ = "?", mZ = "?", vZ = "?", bZ = "8", _Z = "?", yZ = "i", wZ = "?", kZ = "?", xZ = "?", CZ = "Z", SZ = "?", EZ = "?", AZ = "?", TZ = "?", MZ = "?", $Z = "?", LZ = "?", IZ = "?", RZ = "?", OZ = "I", PZ = "i", DZ = "??", BZ = "??", NZ = "?", FZ = "?", qZ = "?", zZ = "¿", HZ = "??", jZ = "I", VZ = "?", UZ = "?", KZ = "?", GZ = "?", WZ = "?", ZZ = "?", XZ = "?", JZ = "I", YZ = "i", QZ = "?", eX = "?", tX = "Ï", nX = "ï", rX = "J", oX = "j", sX = "?", iX = "?", aX = "??", lX = "??", cX = "?", uX = "??", fX = "??", dX = "??", pX = "??", hX = "?", gX = "?", mX = "?", vX = "?", bX = "?", _X = "?", yX = "?", wX = "K", kX = "k", xX = "?", CX = "?", SX = "??", EX = "??", AX = "?", TX = "?", MX = "?", $X = "?", LX = "?", IX = "??", RX = "??", OX = "??", PX = "??", DX = "?", BX = "L", NX = "l", FX = "?", qX = "L", zX = "?", HX = "?", jX = "?", VX = "?", UX = "?", KX = "?", GX = "?", WX = "L", ZX = "«", XX = "?", JX = "?", YX = "?", QX = "?", eJ = "?", tJ = "?", nJ = "?", rJ = "?", oJ = "?", sJ = "?", iJ = "?", aJ = "?", lJ = "?", cJ = "?", uJ = "?", fJ = "??", dJ = "?", pJ = "?", hJ = "?", gJ = "{", mJ = "[", vJ = "?", bJ = "?", _J = "?", yJ = "L", wJ = "l", kJ = "L", xJ = "l", CJ = "?", SJ = "{", EJ = "?", AJ = "?", TJ = "?", MJ = "“", $J = "„", LJ = "?", IJ = "?", RJ = "?", OJ = "=", PJ = "?", DJ = "?", BJ = "?", NJ = "?", FJ = "?", qJ = "?", zJ = "?", HJ = "?", jJ = "?", VJ = "?", UJ = "?", KJ = "?", GJ = "?", WJ = "?", ZJ = "?", XJ = "?", JJ = "?", YJ = "?", QJ = "?", eY = "?", tY = "?", nY = "?", rY = "?", oY = "?", sY = "?", iY = "?", aY = "?", lY = "?", cY = "?", uY = "?", fY = "?", dY = "?", pY = "?", hY = "?", gY = "?", mY = "?", vY = "?", bY = "?", _Y = "?", yY = "=", wY = "?", kY = "?", xY = "?", CY = "?", SY = "?", EY = "?", AY = "?", TY = "??", MY = "?", $Y = "?", LY = "?", IY = "?", RY = "?", OY = "?", PY = "?", DY = "?", BY = "?", NY = "?", FY = "?", qY = "?", zY = "?", HY = "?", jY = "?", VY = "??", UY = "??", KY = "?", GY = "?", WY = "?", ZY = "?", XY = "?", JY = "?", YY = "_", QY = "?", eQ = "?", tQ = "?", nQ = "«", rQ = "?", oQ = "?", sQ = "?", iQ = "?", aQ = "?", lQ = "?", cQ = "?", uQ = "?", fQ = "?", dQ = "?", pQ = "?", hQ = "?", gQ = "?", mQ = "?", vQ = "?", bQ = "?", _Q = "?", yQ = "?", wQ = "?", kQ = "?", xQ = "?", CQ = "?", SQ = "?", EQ = "?", AQ = "?", TQ = "?", MQ = "?", $Q = "?", LQ = "?", IQ = "?", RQ = "?", OQ = "?", PQ = "??", DQ = "??", BQ = "?", NQ = "?", FQ = "*", qQ = "_", zQ = "?", HQ = "?", jQ = "?", VQ = "?", UQ = "?", KQ = "(", GQ = "?", WQ = "?", ZQ = "?", XQ = "?", JQ = "?", YQ = "?", QQ = "?", eee = "‹", tee = "??", nee = "L", ree = "?", oee = "?", see = "?", iee = "?", aee = "?", lee = "[", cee = "‘", uee = "‚", fee = "L", dee = "l", pee = "?", hee = "?", gee = "<", mee = "<", vee = "«", bee = "?", _ee = "?", yee = "?", wee = "?", kee = "?", xee = "?", Cee = "?", See = "?", Eee = "?", Aee = "?", Tee = "?", Mee = "??", $ee = "??", Lee = "¯", Iee = "?", Ree = "?", Oee = "?", Pee = "?", Dee = "?", Bee = "?", Nee = "?", Fee = "?", qee = "?", zee = "?", Hee = "?", jee = "?", Vee = "—", Uee = "?", Kee = "?", Gee = "?", Wee = "M", Zee = "??", Xee = "??", Jee = "?", Yee = "µ", Qee = "*", ete = "?", tte = "|", nte = "·", rte = "?", ote = "-", ste = "?", ite = "?", ate = "±", lte = "?", cte = "…", ute = "±", fte = "?", dte = "??", pte = "??", hte = "±", gte = "??", mte = "M", vte = "?", bte = "?", _te = "µ", yte = "?", wte = "?", kte = "?", xte = "N", Cte = "n", Ste = "??", Ete = "?", Ate = "??", Tte = "??", Mte = "?", $te = "?", Lte = "?", Ite = "N", Rte = "?", Ote = " ", Pte = "??", Dte = "??", Bte = "?", Nte = "N", Fte = "n", qte = "N", zte = "n", Hte = "?", jte = "??", Vte = "?", Ute = "?", Kte = "?", Gte = "–", Wte = "?", Zte = "?", Xte = "?", Jte = "?", Yte = "?", Qte = "??", ene = "?", tne = "?", nne = "?", rne = "?", one = "?", sne = "?", ine = "??", ane = "»", lne = "«", cne = `
`, une = "?", fne = "?", dne = "??", pne = "??", hne = "??", gne = "?", mne = "?", vne = "??", bne = "??", _ne = "??", yne = "??", wne = "?", kne = "»?", xne = "?", Cne = "?", Sne = "»?", Ene = "?", Ane = "?", Tne = "?", Mne = "?", $ne = "?", Lne = "?", Ine = "?", Rne = "?", One = "?", Pne = "?", Dne = "?", Bne = "?", Nne = "??", Fne = "?", qne = "?", zne = "?", Hne = "?", jne = "?", Vne = "?", Une = "??", Kne = "??", Gne = "??", Wne = "?", Zne = "??", Xne = "?", Jne = "«?", Yne = "?", Qne = "?", ere = "?", tre = "«?", nre = "?", rre = "?", ore = " ", sre = "??", ire = "N", are = "?", lre = "¬", cre = "?", ure = "?", fre = "?", dre = "?", pre = "?", hre = "??", gre = "?", mre = "?", vre = "?", bre = "??", _re = "»?", yre = "?", wre = "??", kre = "?", xre = "??", Cre = "??", Sre = "?", Ere = "??", Are = "??", Tre = "?", Mre = "?", $re = "?", Lre = "??", Ire = "?", Rre = "?", Ore = "?", Pre = "?", Dre = "?", Bre = "«?", Nre = "??", Fre = "?", qre = "??", zre = "??", Hre = "?", jre = "?", Vre = "?", Ure = "?", Kre = "?", Gre = "??", Wre = "?", Zre = "?", Xre = "??", Jre = "?", Yre = "?", Qre = "??", eoe = "?", toe = "??", noe = "?", roe = "??", ooe = "?", soe = "?", ioe = "??", aoe = "?", loe = "??", coe = "??", uoe = "?", foe = "?", doe = "?", poe = "?", hoe = "?", goe = "?", moe = "?", voe = "?", boe = "??", _oe = "??", yoe = "?", woe = "?", koe = "?", xoe = "?", Coe = "??", Soe = "??", Eoe = "??", Aoe = "?", Toe = "?", Moe = "??", $oe = "?", Loe = "?", Ioe = "?", Roe = "?", Ooe = "?", Poe = "?", Doe = "??", Boe = "??", Noe = "??", Foe = "?", qoe = "?", zoe = "?", Hoe = "?", joe = "?", Voe = "?", Uoe = "?", Koe = "?", Goe = "?", Woe = "?", Zoe = "??", Xoe = "?", Joe = "??", Yoe = "?", Qoe = "??", ese = "?", tse = "??", nse = "?", rse = "??", ose = "?", sse = "??", ise = "?", ase = "??", lse = "?", cse = "Ñ", use = "ñ", fse = "?", dse = "?", pse = "?", hse = "?", gse = "?", mse = "?", vse = "?", bse = "#", _se = "?", yse = "?", wse = "??", kse = "?", xse = "?", Cse = "?", Sse = "?", Ese = "=?", Ase = ">?", Tse = "?", Mse = "?", $se = "?", Lse = "=?", Ise = "<?", Rse = "??", Ose = "?", Pse = "??", Dse = "~?", Bse = "?", Nse = "?", Fse = "?", qse = "?", zse = "?", Hse = "Ó", jse = "ó", Vse = "?", Use = "Ô", Kse = "ô", Gse = "?", Wse = "?", Zse = "?", Xse = "?", Jse = "O", Yse = "o", Qse = "?", eie = "?", tie = "?", nie = "Œ", rie = "œ", oie = "?", sie = "??", iie = "??", aie = "?", lie = "Ò", cie = "ò", uie = "?", fie = "?", die = "O", pie = "?", hie = "?", gie = "?", mie = "?", vie = "?", bie = "?", _ie = "O", yie = "o", wie = "O", kie = "?", xie = "?", Cie = "?", Sie = "?", Eie = "?", Aie = "??", Tie = "??", Mie = "?", $ie = "“", Lie = "‘", Iie = "?", Rie = "?", Oie = "?", Pie = "?", Die = "?", Bie = "?", Nie = "o", Fie = "o", qie = "ª", zie = "º", Hie = "?", jie = "?", Vie = "?", Uie = "?", Kie = "?", Gie = "??", Wie = "o", Zie = "Ø", Xie = "ø", Jie = "?", Yie = "Õ", Qie = "õ", eae = "?", tae = "?", nae = "?", rae = "Ö", oae = "ö", sae = "?", iae = "?", aae = "?", lae = "?", cae = "?", uae = "¶", fae = "?", dae = "?", pae = "?", hae = "?", gae = "?", mae = "?", vae = "?", bae = "?", _ae = "%", yae = ".", wae = "‰", kae = "?", xae = "?", Cae = "??", Sae = "??", Eae = "F", Aae = "f", Tae = "?", Mae = "M", $ae = "?", Lae = "?", Iae = "p", Rae = "?", Oae = "?", Pae = "?", Dae = "h", Bae = "?", Nae = "?", Fae = "?", qae = "?", zae = "+", Hae = "?", jae = "?", Vae = "?", Uae = "±", Kae = "±", Gae = "?", Wae = "?", Zae = "±", Xae = "H", Jae = "?", Yae = "??", Qae = "P", ele = "£", tle = "?", nle = "?", rle = "?", ole = "?", sle = "?", ile = "?", ale = "?", lle = "?", cle = "?", ule = "?", fle = "?", dle = "?", ple = "?", hle = "?", gle = "?", mle = "?", vle = "?", ble = "?", _le = "'", yle = "?", wle = "P", kle = "?", xle = "?", Cle = "?", Sle = "?", Ele = "?", Ale = "?", Tle = "?", Mle = "?", $le = "?", Lle = "?", Ile = "?", Rle = "?", Ole = "?", Ple = "?", Dle = "??", Ble = "??", Nle = "?", Fle = "?", qle = "?", zle = "??", Hle = "??", jle = "?", Vle = "??", Ule = "Q", Kle = "?", Gle = "??", Wle = "??", Zle = "H", Xle = "?", Jle = "?", Yle = "?", Qle = '"', ece = '"', tce = "?", nce = "?_", rce = "R", oce = "r", sce = "v", ice = "?", ace = "?", lce = "?", cce = "?", uce = "?", fce = "?", dce = "»", pce = "?", hce = "?", gce = "?", mce = "?", vce = "?", bce = "?", _ce = "?", yce = "?", wce = "?", kce = "?", xce = "?", Cce = "?", Sce = "?", Ece = "?", Ace = "?", Tce = "?", Mce = "?", $ce = ":", Lce = "Q", Ice = "?", Rce = "?", Oce = "?", Pce = "?", Dce = "}", Bce = "]", Nce = "?", Fce = "?", qce = "?", zce = "R", Hce = "r", jce = "R", Vce = "r", Uce = "?", Kce = "}", Gce = "?", Wce = "?", Zce = "?", Xce = "?", Jce = "”", Yce = "”", Qce = "?", eue = "R", tue = "R", nue = "R", rue = "R", oue = "R", sue = "?", iue = "®", aue = "®", lue = "?", cue = "?", uue = "?", fue = "?", due = "?", pue = "??", hue = "R", gue = "?", mue = "?", vue = "?", bue = "?", _ue = "?", yue = "?", wue = "?", kue = "?", xue = "?", Cue = "?", Sue = "?", Eue = "?", Aue = "?", Tue = "?", Mue = "?", $ue = "?", Lue = "?", Iue = "?", Rue = "?", Oue = "?", Pue = "?", Due = "?", Bue = "?", Nue = "?", Fue = "?", que = "?", zue = "?", Hue = "?", jue = "?", Vue = "?", Uue = "?", Kue = "?", Gue = "?", Wue = "?", Zue = "?", Xue = "?", Jue = "?", Yue = "?", Que = "?", efe = "°", tfe = "?", nfe = "?", rfe = "?", ofe = "?", sfe = "?", ife = "?", afe = "?", lfe = "?", cfe = "?", ufe = "?", ffe = "?", dfe = "??", pfe = "R", hfe = "?", gfe = "?", mfe = "?", vfe = ")", bfe = "?", _fe = "?", yfe = "?", wfe = "?", kfe = "›", xfe = "??", Cfe = "R", Sfe = "?", Efe = "?", Afe = "]", Tfe = "’", Mfe = "’", $fe = "?", Lfe = "?", Ife = "?", Rfe = "?", Ofe = "?", Pfe = "?", Dfe = "?", Bfe = "?", Nfe = "?", Ffe = "S", qfe = "s", zfe = "‚", Hfe = "?", jfe = "Š", Vfe = "š", Ufe = "?", Kfe = "?", Gfe = "?", Wfe = "?", Zfe = "?", Xfe = "S", Jfe = "s", Yfe = "S", Qfe = "s", ede = "?", tde = "?", nde = "?", rde = "?", ode = "?", sde = "?", ide = "?", ade = "?", lde = "·", cde = "?", ude = "?", fde = "?", dde = "?", pde = "?", hde = "§", gde = ";", mde = "?", vde = "\", bde = "\", _de = "?", yde = "??", wde = "??", kde = "?", xde = "?", Cde = "?", Sde = "?", Ede = "?", Ade = "?", Tde = "?", Mde = "?", $de = "|", Lde = "?", Ide = "?", Rde = "?", Ode = "­", Pde = "S", Dde = "s", Bde = "?", Nde = "?", Fde = "~", qde = "?", zde = "?", Hde = "?", jde = "?", Vde = "?", Ude = "?", Kde = "?", Gde = "?", Wde = "?", Zde = "?", Xde = "?", Jde = "°", Yde = "\", Qde = "?", e0e = "?", t0e = "|", n0e = "?", r0e = "?", o0e = "?", s0e = "??", i0e = "?", a0e = "?", l0e = "?", c0e = "?", u0e = "/", f0e = "??", d0e = "??", p0e = "?", h0e = "?", g0e = "?", m0e = "?", v0e = "??", b0e = "?", _0e = "??", y0e = "v", w0e = "?", k0e = "?", x0e = "?", C0e = "?", S0e = "?", E0e = "?", A0e = "?", T0e = "?", M0e = "?", $0e = "?", L0e = "?", I0e = "?", R0e = "?", O0e = "?", P0e = "?", D0e = "?", B0e = "?", N0e = "?", F0e = "?", q0e = "?", z0e = "??", H0e = "??", j0e = "\", V0e = "?", U0e = "?", K0e = "?", G0e = "?", W0e = "?", Z0e = "?", X0e = "?", J0e = "¯", Y0e = "?", Q0e = "?", e2e = "?", t2e = "?", n2e = "?", r2e = "?", o2e = "?", s2e = "?", i2e = "?", a2e = "?", l2e = "?", c2e = "?", u2e = "?", f2e = "?", d2e = "?", p2e = "?", h2e = "?", g2e = "?", m2e = "?", v2e = "?", b2e = "?", _2e = "?", y2e = "?", w2e = "?", k2e = "?", x2e = "?", C2e = "?", S2e = "?", E2e = "?", A2e = "?", T2e = "?", M2e = "?", $2e = "?", L2e = "?", I2e = "?", R2e = "?", O2e = "?", P2e = "¹", D2e = "²", B2e = "³", N2e = "?", F2e = "?", q2e = "?", z2e = "?", H2e = "?", j2e = "?", V2e = "?", U2e = "?", K2e = "?", G2e = "?", W2e = "?", Z2e = "?", X2e = "?", J2e = "?", Y2e = "?", Q2e = "?", epe = "?", tpe = "?", npe = "?", rpe = "?", ope = "?", spe = "?", ipe = "?", ape = "?", lpe = "?", cpe = "?", upe = "?", fpe = "?", dpe = "?", ppe = "?", hpe = "ß", gpe = "	", mpe = "?", vpe = "?", bpe = "t", _pe = "?", ype = "T", wpe = "t", kpe = "T", xpe = "t", Cpe = "?", Spe = "?", Epe = "?", Ape = "?", Tpe = "??", Mpe = "??", $pe = "?", Lpe = "?", Ipe = "?", Rpe = "T", Ope = "?", Ppe = "?", Dpe = "?", Bpe = "˜", Npe = "~", Fpe = "??", qpe = "?", zpe = "?", Hpe = "˜", jpe = "~", Vpe = "Þ", Upe = "þ", Kpe = "˜", Gpe = "~", Wpe = "?", Zpe = "?", Xpe = "˜", Jpe = "?", Ype = "?", Qpe = "×", ehe = "?", the = "?", nhe = "?", rhe = "?", ohe = "?", she = "?", ihe = "??", ahe = "??", lhe = "?", che = "?", uhe = "?", fhe = "™", dhe = "™", phe = "?", hhe = "?", ghe = "?", mhe = "?", vhe = "?", bhe = "?", _he = "?", yhe = "?", whe = "?", khe = "?", xhe = "?", Che = "?", She = "?", Ehe = "?", Ahe = "?", The = "??", Mhe = "??", $he = "?", Lhe = "?", Ihe = "?", Rhe = "?", Ohe = "T", Phe = "t", Dhe = "?", Bhe = "?", Nhe = "?", Fhe = "Ú", qhe = "ú", zhe = "?", Hhe = "?", jhe = "?", Vhe = "?", Uhe = "?", Khe = "?", Ghe = "U", Whe = "u", Zhe = "Û", Xhe = "û", Jhe = "?", Yhe = "?", Qhe = "?", e1e = "U", t1e = "u", n1e = "?", r1e = "?", o1e = "??", s1e = "??", i1e = "Ù", a1e = "ù", l1e = "?", c1e = "?", u1e = "?", f1e = "¯", d1e = "?", p1e = "?", h1e = "?", g1e = "?", m1e = "U", v1e = "u", b1e = "¨", _1e = "_", y1e = "?", w1e = "?", k1e = "?", x1e = "?", C1e = "?", S1e = "U", E1e = "u", A1e = "??", T1e = "??", M1e = "?", $1e = "?", L1e = "?", I1e = "?", R1e = "?", O1e = "?", P1e = "?", D1e = "?", B1e = "?", N1e = "?", F1e = "?", q1e = "?", z1e = "?", H1e = "?", j1e = "?", V1e = "?", U1e = "?", K1e = "?", G1e = "?", W1e = "?", Z1e = "?", X1e = "?", J1e = "?", Y1e = "?", Q1e = "?", ege = "U", tge = "u", nge = "?", rge = "??", oge = "??", sge = "?", ige = "U", age = "u", lge = "?", cge = "?", uge = "?", fge = "Ü", dge = "ü", pge = "?", hge = "?", gge = "?", mge = "?", vge = "Ø", bge = "?", _ge = "?", yge = "?", wge = "?", kge = "?", xge = "?", Cge = "?", Sge = "??", Ege = "??", Age = "??", Tge = "??", Mge = "?", $ge = "?", Lge = "?", Ige = "?", Rge = "?", Oge = "?", Pge = "?", Dge = "?", Bge = "?", Nge = "?", Fge = "?", qge = "?", zge = "?", Hge = "?", jge = "?", Vge = "?", Uge = "?", Kge = "?", Gge = "|", Wge = "?", Zge = "|", Xge = "?", Jge = "|", Yge = "|", Qge = "|", eme = "?", tme = "?", nme = "??", rme = "??", ome = "?", sme = "??", ime = "??", ame = "??", lme = "??", cme = "?", ume = "?", fme = "??", dme = "??", pme = "??", hme = "??", gme = "??", mme = "??", vme = "?", bme = "?", _me = "W", yme = "w", wme = "?", kme = "?", xme = "?", Cme = "?", Sme = "P", Eme = "??", Ame = "??", Tme = "??", Mme = "??", $me = "P", Lme = "?", Ime = "?", Rme = "??", Ome = "??", Pme = "?", Dme = "?", Bme = "?", Nme = "?", Fme = "??", qme = "??", zme = "?", Hme = "?", jme = "?", Vme = "?", Ume = "?", Kme = "?", Gme = "?", Wme = "?", Zme = "?", Xme = "??", Jme = "??", Yme = "?", Qme = "?", eve = "?", tve = "?", nve = "??", rve = "??", ove = "?", sve = "?", ive = "?", ave = "?", lve = "?", cve = "Ý", uve = "ý", fve = "?", dve = "?", pve = "Y", hve = "y", gve = "?", mve = "?", vve = "¥", bve = "??", _ve = "??", yve = "?", wve = "?", kve = "??", xve = "??", Cve = "??", Sve = "??", Eve = "?", Ave = "?", Tve = "ÿ", Mve = "Ÿ", $ve = "Z", Lve = "z", Ive = "Ž", Rve = "ž", Ove = "?", Pve = "?", Dve = "Z", Bve = "z", Nve = "Z", Fve = "?", qve = "?", zve = "?", Hve = "??", jve = "Z", Vve = "?", Uve = "?", Kve = "?", Gve = "??", Wve = "Z", Zve = "??", Xve = "??", Jve = "?", Yve = "?", Qve = {
  Aacute: DP,
  aacute: BP,
  Abreve: NP,
  abreve: FP,
  ac: qP,
  acd: zP,
  acE: HP,
  Acirc: jP,
  acirc: VP,
  acute: UP,
  Acy: KP,
  acy: GP,
  AElig: WP,
  aelig: ZP,
  af: XP,
  Afr: JP,
  afr: YP,
  Agrave: QP,
  agrave: eD,
  alefsym: tD,
  aleph: nD,
  Alpha: rD,
  alpha: oD,
  Amacr: sD,
  amacr: iD,
  amalg: aD,
  amp: lD,
  AMP: cD,
  andand: uD,
  And: fD,
  and: dD,
  andd: pD,
  andslope: hD,
  andv: gD,
  ang: mD,
  ange: vD,
  angle: bD,
  angmsdaa: _D,
  angmsdab: yD,
  angmsdac: wD,
  angmsdad: kD,
  angmsdae: xD,
  angmsdaf: CD,
  angmsdag: SD,
  angmsdah: ED,
  angmsd: AD,
  angrt: TD,
  angrtvb: MD,
  angrtvbd: $D,
  angsph: LD,
  angst: ID,
  angzarr: RD,
  Aogon: OD,
  aogon: PD,
  Aopf: DD,
  aopf: BD,
  apacir: ND,
  ap: FD,
  apE: qD,
  ape: zD,
  apid: HD,
  apos: jD,
  ApplyFunction: VD,
  approx: UD,
  approxeq: KD,
  Aring: GD,
  aring: WD,
  Ascr: ZD,
  ascr: XD,
  Assign: JD,
  ast: YD,
  asymp: QD,
  asympeq: eB,
  Atilde: tB,
  atilde: nB,
  Auml: rB,
  auml: oB,
  awconint: sB,
  awint: iB,
  backcong: aB,
  backepsilon: lB,
  backprime: cB,
  backsim: uB,
  backsimeq: fB,
  Backslash: dB,
  Barv: pB,
  barvee: hB,
  barwed: gB,
  Barwed: mB,
  barwedge: vB,
  bbrk: bB,
  bbrktbrk: _B,
  bcong: yB,
  Bcy: wB,
  bcy: kB,
  bdquo: xB,
  becaus: CB,
  because: SB,
  Because: EB,
  bemptyv: AB,
  bepsi: TB,
  bernou: MB,
  Bernoullis: $B,
  Beta: LB,
  beta: IB,
  beth: RB,
  between: OB,
  Bfr: PB,
  bfr: DB,
  bigcap: BB,
  bigcirc: NB,
  bigcup: FB,
  bigodot: qB,
  bigoplus: zB,
  bigotimes: HB,
  bigsqcup: jB,
  bigstar: VB,
  bigtriangledown: UB,
  bigtriangleup: KB,
  biguplus: GB,
  bigvee: WB,
  bigwedge: ZB,
  bkarow: XB,
  blacklozenge: JB,
  blacksquare: YB,
  blacktriangle: QB,
  blacktriangledown: eN,
  blacktriangleleft: tN,
  blacktriangleright: nN,
  blank: rN,
  blk12: oN,
  blk14: sN,
  blk34: iN,
  block: aN,
  bne: lN,
  bnequiv: cN,
  bNot: uN,
  bnot: fN,
  Bopf: dN,
  bopf: pN,
  bot: hN,
  bottom: gN,
  bowtie: mN,
  boxbox: vN,
  boxdl: bN,
  boxdL: _N,
  boxDl: yN,
  boxDL: wN,
  boxdr: kN,
  boxdR: xN,
  boxDr: CN,
  boxDR: SN,
  boxh: EN,
  boxH: AN,
  boxhd: TN,
  boxHd: MN,
  boxhD: $N,
  boxHD: LN,
  boxhu: IN,
  boxHu: RN,
  boxhU: ON,
  boxHU: PN,
  boxminus: DN,
  boxplus: BN,
  boxtimes: NN,
  boxul: FN,
  boxuL: qN,
  boxUl: zN,
  boxUL: HN,
  boxur: jN,
  boxuR: VN,
  boxUr: UN,
  boxUR: KN,
  boxv: GN,
  boxV: WN,
  boxvh: ZN,
  boxvH: XN,
  boxVh: JN,
  boxVH: YN,
  boxvl: QN,
  boxvL: eF,
  boxVl: tF,
  boxVL: nF,
  boxvr: rF,
  boxvR: oF,
  boxVr: sF,
  boxVR: iF,
  bprime: aF,
  breve: lF,
  Breve: cF,
  brvbar: uF,
  bscr: fF,
  Bscr: dF,
  bsemi: pF,
  bsim: hF,
  bsime: gF,
  bsolb: mF,
  bsol: vF,
  bsolhsub: bF,
  bull: _F,
  bullet: yF,
  bump: wF,
  bumpE: kF,
  bumpe: xF,
  Bumpeq: CF,
  bumpeq: SF,
  Cacute: EF,
  cacute: AF,
  capand: TF,
  capbrcup: MF,
  capcap: $F,
  cap: LF,
  Cap: IF,
  capcup: RF,
  capdot: OF,
  CapitalDifferentialD: PF,
  caps: DF,
  caret: BF,
  caron: NF,
  Cayleys: FF,
  ccaps: qF,
  Ccaron: zF,
  ccaron: HF,
  Ccedil: jF,
  ccedil: VF,
  Ccirc: UF,
  ccirc: KF,
  Cconint: GF,
  ccups: WF,
  ccupssm: ZF,
  Cdot: XF,
  cdot: JF,
  cedil: YF,
  Cedilla: QF,
  cemptyv: eq,
  cent: tq,
  centerdot: nq,
  CenterDot: rq,
  cfr: oq,
  Cfr: sq,
  CHcy: iq,
  chcy: aq,
  check: lq,
  checkmark: cq,
  Chi: uq,
  chi: fq,
  circ: dq,
  circeq: pq,
  circlearrowleft: hq,
  circlearrowright: gq,
  circledast: mq,
  circledcirc: vq,
  circleddash: bq,
  CircleDot: _q,
  circledR: yq,
  circledS: wq,
  CircleMinus: kq,
  CirclePlus: xq,
  CircleTimes: Cq,
  cir: Sq,
  cirE: Eq,
  cire: Aq,
  cirfnint: Tq,
  cirmid: Mq,
  cirscir: $q,
  ClockwiseContourIntegral: Lq,
  CloseCurlyDoubleQuote: Iq,
  CloseCurlyQuote: Rq,
  clubs: Oq,
  clubsuit: Pq,
  colon: Dq,
  Colon: Bq,
  Colone: Nq,
  colone: Fq,
  coloneq: qq,
  comma: zq,
  commat: Hq,
  comp: jq,
  compfn: Vq,
  complement: Uq,
  complexes: Kq,
  cong: Gq,
  congdot: Wq,
  Congruent: Zq,
  conint: Xq,
  Conint: Jq,
  ContourIntegral: Yq,
  copf: Qq,
  Copf: ez,
  coprod: tz,
  Coproduct: nz,
  copy: rz,
  COPY: oz,
  copysr: sz,
  CounterClockwiseContourIntegral: iz,
  crarr: az,
  cross: lz,
  Cross: cz,
  Cscr: uz,
  cscr: fz,
  csub: dz,
  csube: pz,
  csup: hz,
  csupe: gz,
  ctdot: mz,
  cudarrl: vz,
  cudarrr: bz,
  cuepr: _z,
  cuesc: yz,
  cularr: wz,
  cularrp: kz,
  cupbrcap: xz,
  cupcap: Cz,
  CupCap: Sz,
  cup: Ez,
  Cup: Az,
  cupcup: Tz,
  cupdot: Mz,
  cupor: $z,
  cups: Lz,
  curarr: Iz,
  curarrm: Rz,
  curlyeqprec: Oz,
  curlyeqsucc: Pz,
  curlyvee: Dz,
  curlywedge: Bz,
  curren: Nz,
  curvearrowleft: Fz,
  curvearrowright: qz,
  cuvee: zz,
  cuwed: Hz,
  cwconint: jz,
  cwint: Vz,
  cylcty: Uz,
  dagger: Kz,
  Dagger: Gz,
  daleth: Wz,
  darr: Zz,
  Darr: Xz,
  dArr: Jz,
  dash: Yz,
  Dashv: Qz,
  dashv: eH,
  dbkarow: tH,
  dblac: nH,
  Dcaron: rH,
  dcaron: oH,
  Dcy: sH,
  dcy: iH,
  ddagger: aH,
  ddarr: lH,
  DD: cH,
  dd: uH,
  DDotrahd: fH,
  ddotseq: dH,
  deg: pH,
  Del: hH,
  Delta: gH,
  delta: mH,
  demptyv: vH,
  dfisht: bH,
  Dfr: _H,
  dfr: yH,
  dHar: wH,
  dharl: kH,
  dharr: xH,
  DiacriticalAcute: CH,
  DiacriticalDot: SH,
  DiacriticalDoubleAcute: EH,
  DiacriticalGrave: AH,
  DiacriticalTilde: TH,
  diam: MH,
  diamond: $H,
  Diamond: LH,
  diamondsuit: IH,
  diams: RH,
  die: OH,
  DifferentialD: PH,
  digamma: DH,
  disin: BH,
  div: NH,
  divide: FH,
  divideontimes: qH,
  divonx: zH,
  DJcy: HH,
  djcy: jH,
  dlcorn: VH,
  dlcrop: UH,
  dollar: KH,
  Dopf: GH,
  dopf: WH,
  Dot: ZH,
  dot: XH,
  DotDot: JH,
  doteq: YH,
  doteqdot: QH,
  DotEqual: ej,
  dotminus: tj,
  dotplus: nj,
  dotsquare: rj,
  doublebarwedge: oj,
  DoubleContourIntegral: sj,
  DoubleDot: ij,
  DoubleDownArrow: aj,
  DoubleLeftArrow: lj,
  DoubleLeftRightArrow: cj,
  DoubleLeftTee: uj,
  DoubleLongLeftArrow: fj,
  DoubleLongLeftRightArrow: dj,
  DoubleLongRightArrow: pj,
  DoubleRightArrow: hj,
  DoubleRightTee: gj,
  DoubleUpArrow: mj,
  DoubleUpDownArrow: vj,
  DoubleVerticalBar: bj,
  DownArrowBar: _j,
  downarrow: yj,
  DownArrow: wj,
  Downarrow: kj,
  DownArrowUpArrow: xj,
  DownBreve: Cj,
  downdownarrows: Sj,
  downharpoonleft: Ej,
  downharpoonright: Aj,
  DownLeftRightVector: Tj,
  DownLeftTeeVector: Mj,
  DownLeftVectorBar: $j,
  DownLeftVector: Lj,
  DownRightTeeVector: Ij,
  DownRightVectorBar: Rj,
  DownRightVector: Oj,
  DownTeeArrow: Pj,
  DownTee: Dj,
  drbkarow: Bj,
  drcorn: Nj,
  drcrop: Fj,
  Dscr: qj,
  dscr: zj,
  DScy: Hj,
  dscy: jj,
  dsol: Vj,
  Dstrok: Uj,
  dstrok: Kj,
  dtdot: Gj,
  dtri: Wj,
  dtrif: Zj,
  duarr: Xj,
  duhar: Jj,
  dwangle: Yj,
  DZcy: Qj,
  dzcy: eV,
  dzigrarr: tV,
  Eacute: nV,
  eacute: rV,
  easter: oV,
  Ecaron: sV,
  ecaron: iV,
  Ecirc: aV,
  ecirc: lV,
  ecir: cV,
  ecolon: uV,
  Ecy: fV,
  ecy: dV,
  eDDot: pV,
  Edot: hV,
  edot: gV,
  eDot: mV,
  ee: vV,
  efDot: bV,
  Efr: _V,
  efr: yV,
  eg: wV,
  Egrave: kV,
  egrave: xV,
  egs: CV,
  egsdot: SV,
  el: EV,
  Element: AV,
  elinters: TV,
  ell: MV,
  els: $V,
  elsdot: LV,
  Emacr: IV,
  emacr: RV,
  empty: OV,
  emptyset: PV,
  EmptySmallSquare: DV,
  emptyv: BV,
  EmptyVerySmallSquare: NV,
  emsp13: FV,
  emsp14: qV,
  emsp: zV,
  ENG: HV,
  eng: jV,
  ensp: VV,
  Eogon: UV,
  eogon: KV,
  Eopf: GV,
  eopf: WV,
  epar: ZV,
  eparsl: XV,
  eplus: JV,
  epsi: YV,
  Epsilon: QV,
  epsilon: eU,
  epsiv: tU,
  eqcirc: nU,
  eqcolon: rU,
  eqsim: oU,
  eqslantgtr: sU,
  eqslantless: iU,
  Equal: aU,
  equals: lU,
  EqualTilde: cU,
  equest: uU,
  Equilibrium: fU,
  equiv: dU,
  equivDD: pU,
  eqvparsl: hU,
  erarr: gU,
  erDot: mU,
  escr: vU,
  Escr: bU,
  esdot: _U,
  Esim: yU,
  esim: wU,
  Eta: kU,
  eta: xU,
  ETH: CU,
  eth: SU,
  Euml: EU,
  euml: AU,
  euro: TU,
  excl: MU,
  exist: $U,
  Exists: LU,
  expectation: IU,
  exponentiale: RU,
  ExponentialE: OU,
  fallingdotseq: PU,
  Fcy: DU,
  fcy: BU,
  female: NU,
  ffilig: FU,
  fflig: qU,
  ffllig: zU,
  Ffr: HU,
  ffr: jU,
  filig: VU,
  FilledSmallSquare: UU,
  FilledVerySmallSquare: KU,
  fjlig: GU,
  flat: WU,
  fllig: ZU,
  fltns: XU,
  fnof: JU,
  Fopf: YU,
  fopf: QU,
  forall: eK,
  ForAll: tK,
  fork: nK,
  forkv: rK,
  Fouriertrf: oK,
  fpartint: sK,
  frac12: iK,
  frac13: aK,
  frac14: lK,
  frac15: cK,
  frac16: uK,
  frac18: fK,
  frac23: dK,
  frac25: pK,
  frac34: hK,
  frac35: gK,
  frac38: mK,
  frac45: vK,
  frac56: bK,
  frac58: _K,
  frac78: yK,
  frasl: wK,
  frown: kK,
  fscr: xK,
  Fscr: CK,
  gacute: SK,
  Gamma: EK,
  gamma: AK,
  Gammad: TK,
  gammad: MK,
  gap: $K,
  Gbreve: LK,
  gbreve: IK,
  Gcedil: RK,
  Gcirc: OK,
  gcirc: PK,
  Gcy: DK,
  gcy: BK,
  Gdot: NK,
  gdot: FK,
  ge: qK,
  gE: zK,
  gEl: HK,
  gel: jK,
  geq: VK,
  geqq: UK,
  geqslant: KK,
  gescc: GK,
  ges: WK,
  gesdot: ZK,
  gesdoto: XK,
  gesdotol: JK,
  gesl: YK,
  gesles: QK,
  Gfr: eG,
  gfr: tG,
  gg: nG,
  Gg: rG,
  ggg: oG,
  gimel: sG,
  GJcy: iG,
  gjcy: aG,
  gla: lG,
  gl: cG,
  glE: uG,
  glj: fG,
  gnap: dG,
  gnapprox: pG,
  gne: hG,
  gnE: gG,
  gneq: mG,
  gneqq: vG,
  gnsim: bG,
  Gopf: _G,
  gopf: yG,
  grave: wG,
  GreaterEqual: kG,
  GreaterEqualLess: xG,
  GreaterFullEqual: CG,
  GreaterGreater: SG,
  GreaterLess: EG,
  GreaterSlantEqual: AG,
  GreaterTilde: TG,
  Gscr: MG,
  gscr: $G,
  gsim: LG,
  gsime: IG,
  gsiml: RG,
  gtcc: OG,
  gtcir: PG,
  gt: DG,
  GT: BG,
  Gt: NG,
  gtdot: FG,
  gtlPar: qG,
  gtquest: zG,
  gtrapprox: HG,
  gtrarr: jG,
  gtrdot: VG,
  gtreqless: UG,
  gtreqqless: KG,
  gtrless: GG,
  gtrsim: WG,
  gvertneqq: ZG,
  gvnE: XG,
  Hacek: JG,
  hairsp: YG,
  half: QG,
  hamilt: eW,
  HARDcy: tW,
  hardcy: nW,
  harrcir: rW,
  harr: oW,
  hArr: sW,
  harrw: iW,
  Hat: aW,
  hbar: lW,
  Hcirc: cW,
  hcirc: uW,
  hearts: fW,
  heartsuit: dW,
  hellip: pW,
  hercon: hW,
  hfr: gW,
  Hfr: mW,
  HilbertSpace: vW,
  hksearow: bW,
  hkswarow: _W,
  hoarr: yW,
  homtht: wW,
  hookleftarrow: kW,
  hookrightarrow: xW,
  hopf: CW,
  Hopf: SW,
  horbar: EW,
  HorizontalLine: AW,
  hscr: TW,
  Hscr: MW,
  hslash: $W,
  Hstrok: LW,
  hstrok: IW,
  HumpDownHump: RW,
  HumpEqual: OW,
  hybull: PW,
  hyphen: DW,
  Iacute: BW,
  iacute: NW,
  ic: FW,
  Icirc: qW,
  icirc: zW,
  Icy: HW,
  icy: jW,
  Idot: VW,
  IEcy: UW,
  iecy: KW,
  iexcl: GW,
  iff: WW,
  ifr: ZW,
  Ifr: XW,
  Igrave: JW,
  igrave: YW,
  ii: QW,
  iiiint: eZ,
  iiint: tZ,
  iinfin: nZ,
  iiota: rZ,
  IJlig: oZ,
  ijlig: sZ,
  Imacr: iZ,
  imacr: aZ,
  image: lZ,
  ImaginaryI: cZ,
  imagline: uZ,
  imagpart: fZ,
  imath: dZ,
  Im: pZ,
  imof: hZ,
  imped: gZ,
  Implies: mZ,
  incare: vZ,
  in: "?",
  infin: bZ,
  infintie: _Z,
  inodot: yZ,
  intcal: wZ,
  int: kZ,
  Int: xZ,
  integers: CZ,
  Integral: SZ,
  intercal: EZ,
  Intersection: AZ,
  intlarhk: TZ,
  intprod: MZ,
  InvisibleComma: $Z,
  InvisibleTimes: LZ,
  IOcy: IZ,
  iocy: RZ,
  Iogon: OZ,
  iogon: PZ,
  Iopf: DZ,
  iopf: BZ,
  Iota: NZ,
  iota: FZ,
  iprod: qZ,
  iquest: zZ,
  iscr: HZ,
  Iscr: jZ,
  isin: VZ,
  isindot: UZ,
  isinE: KZ,
  isins: GZ,
  isinsv: WZ,
  isinv: ZZ,
  it: XZ,
  Itilde: JZ,
  itilde: YZ,
  Iukcy: QZ,
  iukcy: eX,
  Iuml: tX,
  iuml: nX,
  Jcirc: rX,
  jcirc: oX,
  Jcy: sX,
  jcy: iX,
  Jfr: aX,
  jfr: lX,
  jmath: cX,
  Jopf: uX,
  jopf: fX,
  Jscr: dX,
  jscr: pX,
  Jsercy: hX,
  jsercy: gX,
  Jukcy: mX,
  jukcy: vX,
  Kappa: bX,
  kappa: _X,
  kappav: yX,
  Kcedil: wX,
  kcedil: kX,
  Kcy: xX,
  kcy: CX,
  Kfr: SX,
  kfr: EX,
  kgreen: AX,
  KHcy: TX,
  khcy: MX,
  KJcy: $X,
  kjcy: LX,
  Kopf: IX,
  kopf: RX,
  Kscr: OX,
  kscr: PX,
  lAarr: DX,
  Lacute: BX,
  lacute: NX,
  laemptyv: FX,
  lagran: qX,
  Lambda: zX,
  lambda: HX,
  lang: jX,
  Lang: VX,
  langd: UX,
  langle: KX,
  lap: GX,
  Laplacetrf: WX,
  laquo: ZX,
  larrb: XX,
  larrbfs: JX,
  larr: YX,
  Larr: QX,
  lArr: eJ,
  larrfs: tJ,
  larrhk: nJ,
  larrlp: rJ,
  larrpl: oJ,
  larrsim: sJ,
  larrtl: iJ,
  latail: aJ,
  lAtail: lJ,
  lat: cJ,
  late: uJ,
  lates: fJ,
  lbarr: dJ,
  lBarr: pJ,
  lbbrk: hJ,
  lbrace: gJ,
  lbrack: mJ,
  lbrke: vJ,
  lbrksld: bJ,
  lbrkslu: _J,
  Lcaron: yJ,
  lcaron: wJ,
  Lcedil: kJ,
  lcedil: xJ,
  lceil: CJ,
  lcub: SJ,
  Lcy: EJ,
  lcy: AJ,
  ldca: TJ,
  ldquo: MJ,
  ldquor: $J,
  ldrdhar: LJ,
  ldrushar: IJ,
  ldsh: RJ,
  le: OJ,
  lE: PJ,
  LeftAngleBracket: DJ,
  LeftArrowBar: BJ,
  leftarrow: NJ,
  LeftArrow: FJ,
  Leftarrow: qJ,
  LeftArrowRightArrow: zJ,
  leftarrowtail: HJ,
  LeftCeiling: jJ,
  LeftDoubleBracket: VJ,
  LeftDownTeeVector: UJ,
  LeftDownVectorBar: KJ,
  LeftDownVector: GJ,
  LeftFloor: WJ,
  leftharpoondown: ZJ,
  leftharpoonup: XJ,
  leftleftarrows: JJ,
  leftrightarrow: YJ,
  LeftRightArrow: QJ,
  Leftrightarrow: eY,
  leftrightarrows: tY,
  leftrightharpoons: nY,
  leftrightsquigarrow: rY,
  LeftRightVector: oY,
  LeftTeeArrow: sY,
  LeftTee: iY,
  LeftTeeVector: aY,
  leftthreetimes: lY,
  LeftTriangleBar: cY,
  LeftTriangle: uY,
  LeftTriangleEqual: fY,
  LeftUpDownVector: dY,
  LeftUpTeeVector: pY,
  LeftUpVectorBar: hY,
  LeftUpVector: gY,
  LeftVectorBar: mY,
  LeftVector: vY,
  lEg: bY,
  leg: _Y,
  leq: yY,
  leqq: wY,
  leqslant: kY,
  lescc: xY,
  les: CY,
  lesdot: SY,
  lesdoto: EY,
  lesdotor: AY,
  lesg: TY,
  lesges: MY,
  lessapprox: $Y,
  lessdot: LY,
  lesseqgtr: IY,
  lesseqqgtr: RY,
  LessEqualGreater: OY,
  LessFullEqual: PY,
  LessGreater: DY,
  lessgtr: BY,
  LessLess: NY,
  lesssim: FY,
  LessSlantEqual: qY,
  LessTilde: zY,
  lfisht: HY,
  lfloor: jY,
  Lfr: VY,
  lfr: UY,
  lg: KY,
  lgE: GY,
  lHar: WY,
  lhard: ZY,
  lharu: XY,
  lharul: JY,
  lhblk: YY,
  LJcy: QY,
  ljcy: eQ,
  llarr: tQ,
  ll: nQ,
  Ll: rQ,
  llcorner: oQ,
  Lleftarrow: sQ,
  llhard: iQ,
  lltri: aQ,
  Lmidot: lQ,
  lmidot: cQ,
  lmoustache: uQ,
  lmoust: fQ,
  lnap: dQ,
  lnapprox: pQ,
  lne: hQ,
  lnE: gQ,
  lneq: mQ,
  lneqq: vQ,
  lnsim: bQ,
  loang: _Q,
  loarr: yQ,
  lobrk: wQ,
  longleftarrow: kQ,
  LongLeftArrow: xQ,
  Longleftarrow: CQ,
  longleftrightarrow: SQ,
  LongLeftRightArrow: EQ,
  Longleftrightarrow: AQ,
  longmapsto: TQ,
  longrightarrow: MQ,
  LongRightArrow: $Q,
  Longrightarrow: LQ,
  looparrowleft: IQ,
  looparrowright: RQ,
  lopar: OQ,
  Lopf: PQ,
  lopf: DQ,
  loplus: BQ,
  lotimes: NQ,
  lowast: FQ,
  lowbar: qQ,
  LowerLeftArrow: zQ,
  LowerRightArrow: HQ,
  loz: jQ,
  lozenge: VQ,
  lozf: UQ,
  lpar: KQ,
  lparlt: GQ,
  lrarr: WQ,
  lrcorner: ZQ,
  lrhar: XQ,
  lrhard: JQ,
  lrm: YQ,
  lrtri: QQ,
  lsaquo: eee,
  lscr: tee,
  Lscr: nee,
  lsh: ree,
  Lsh: oee,
  lsim: see,
  lsime: iee,
  lsimg: aee,
  lsqb: lee,
  lsquo: cee,
  lsquor: uee,
  Lstrok: fee,
  lstrok: dee,
  ltcc: pee,
  ltcir: hee,
  lt: gee,
  LT: mee,
  Lt: vee,
  ltdot: bee,
  lthree: _ee,
  ltimes: yee,
  ltlarr: wee,
  ltquest: kee,
  ltri: xee,
  ltrie: Cee,
  ltrif: See,
  ltrPar: Eee,
  lurdshar: Aee,
  luruhar: Tee,
  lvertneqq: Mee,
  lvnE: $ee,
  macr: Lee,
  male: Iee,
  malt: Ree,
  maltese: Oee,
  Map: "?",
  map: Pee,
  mapsto: Dee,
  mapstodown: Bee,
  mapstoleft: Nee,
  mapstoup: Fee,
  marker: qee,
  mcomma: zee,
  Mcy: Hee,
  mcy: jee,
  mdash: Vee,
  mDDot: Uee,
  measuredangle: Kee,
  MediumSpace: Gee,
  Mellintrf: Wee,
  Mfr: Zee,
  mfr: Xee,
  mho: Jee,
  micro: Yee,
  midast: Qee,
  midcir: ete,
  mid: tte,
  middot: nte,
  minusb: rte,
  minus: ote,
  minusd: ste,
  minusdu: ite,
  MinusPlus: ate,
  mlcp: lte,
  mldr: cte,
  mnplus: ute,
  models: fte,
  Mopf: dte,
  mopf: pte,
  mp: hte,
  mscr: gte,
  Mscr: mte,
  mstpos: vte,
  Mu: bte,
  mu: _te,
  multimap: yte,
  mumap: wte,
  nabla: kte,
  Nacute: xte,
  nacute: Cte,
  nang: Ste,
  nap: Ete,
  napE: Ate,
  napid: Tte,
  napos: Mte,
  napprox: $te,
  natural: Lte,
  naturals: Ite,
  natur: Rte,
  nbsp: Ote,
  nbump: Pte,
  nbumpe: Dte,
  ncap: Bte,
  Ncaron: Nte,
  ncaron: Fte,
  Ncedil: qte,
  ncedil: zte,
  ncong: Hte,
  ncongdot: jte,
  ncup: Vte,
  Ncy: Ute,
  ncy: Kte,
  ndash: Gte,
  nearhk: Wte,
  nearr: Zte,
  neArr: Xte,
  nearrow: Jte,
  ne: Yte,
  nedot: Qte,
  NegativeMediumSpace: ene,
  NegativeThickSpace: tne,
  NegativeThinSpace: nne,
  NegativeVeryThinSpace: rne,
  nequiv: one,
  nesear: sne,
  nesim: ine,
  NestedGreaterGreater: ane,
  NestedLessLess: lne,
  NewLine: cne,
  nexist: une,
  nexists: fne,
  Nfr: dne,
  nfr: pne,
  ngE: hne,
  nge: gne,
  ngeq: mne,
  ngeqq: vne,
  ngeqslant: bne,
  nges: _ne,
  nGg: yne,
  ngsim: wne,
  nGt: kne,
  ngt: xne,
  ngtr: Cne,
  nGtv: Sne,
  nharr: Ene,
  nhArr: Ane,
  nhpar: Tne,
  ni: Mne,
  nis: $ne,
  nisd: Lne,
  niv: Ine,
  NJcy: Rne,
  njcy: One,
  nlarr: Pne,
  nlArr: Dne,
  nldr: Bne,
  nlE: Nne,
  nle: Fne,
  nleftarrow: qne,
  nLeftarrow: zne,
  nleftrightarrow: Hne,
  nLeftrightarrow: jne,
  nleq: Vne,
  nleqq: Une,
  nleqslant: Kne,
  nles: Gne,
  nless: Wne,
  nLl: Zne,
  nlsim: Xne,
  nLt: Jne,
  nlt: Yne,
  nltri: Qne,
  nltrie: ere,
  nLtv: tre,
  nmid: nre,
  NoBreak: rre,
  NonBreakingSpace: ore,
  nopf: sre,
  Nopf: ire,
  Not: are,
  not: lre,
  NotCongruent: cre,
  NotCupCap: ure,
  NotDoubleVerticalBar: fre,
  NotElement: dre,
  NotEqual: pre,
  NotEqualTilde: hre,
  NotExists: gre,
  NotGreater: mre,
  NotGreaterEqual: vre,
  NotGreaterFullEqual: bre,
  NotGreaterGreater: _re,
  NotGreaterLess: yre,
  NotGreaterSlantEqual: wre,
  NotGreaterTilde: kre,
  NotHumpDownHump: xre,
  NotHumpEqual: Cre,
  notin: Sre,
  notindot: Ere,
  notinE: Are,
  notinva: Tre,
  notinvb: Mre,
  notinvc: $re,
  NotLeftTriangleBar: Lre,
  NotLeftTriangle: Ire,
  NotLeftTriangleEqual: Rre,
  NotLess: Ore,
  NotLessEqual: Pre,
  NotLessGreater: Dre,
  NotLessLess: Bre,
  NotLessSlantEqual: Nre,
  NotLessTilde: Fre,
  NotNestedGreaterGreater: qre,
  NotNestedLessLess: zre,
  notni: Hre,
  notniva: jre,
  notnivb: Vre,
  notnivc: Ure,
  NotPrecedes: Kre,
  NotPrecedesEqual: Gre,
  NotPrecedesSlantEqual: Wre,
  NotReverseElement: Zre,
  NotRightTriangleBar: Xre,
  NotRightTriangle: Jre,
  NotRightTriangleEqual: Yre,
  NotSquareSubset: Qre,
  NotSquareSubsetEqual: eoe,
  NotSquareSuperset: toe,
  NotSquareSupersetEqual: noe,
  NotSubset: roe,
  NotSubsetEqual: ooe,
  NotSucceeds: soe,
  NotSucceedsEqual: ioe,
  NotSucceedsSlantEqual: aoe,
  NotSucceedsTilde: loe,
  NotSuperset: coe,
  NotSupersetEqual: uoe,
  NotTilde: foe,
  NotTildeEqual: doe,
  NotTildeFullEqual: poe,
  NotTildeTilde: hoe,
  NotVerticalBar: goe,
  nparallel: moe,
  npar: voe,
  nparsl: boe,
  npart: _oe,
  npolint: yoe,
  npr: woe,
  nprcue: koe,
  nprec: xoe,
  npreceq: Coe,
  npre: Soe,
  nrarrc: Eoe,
  nrarr: Aoe,
  nrArr: Toe,
  nrarrw: Moe,
  nrightarrow: $oe,
  nRightarrow: Loe,
  nrtri: Ioe,
  nrtrie: Roe,
  nsc: Ooe,
  nsccue: Poe,
  nsce: Doe,
  Nscr: Boe,
  nscr: Noe,
  nshortmid: Foe,
  nshortparallel: qoe,
  nsim: zoe,
  nsime: Hoe,
  nsimeq: joe,
  nsmid: Voe,
  nspar: Uoe,
  nsqsube: Koe,
  nsqsupe: Goe,
  nsub: Woe,
  nsubE: Zoe,
  nsube: Xoe,
  nsubset: Joe,
  nsubseteq: Yoe,
  nsubseteqq: Qoe,
  nsucc: ese,
  nsucceq: tse,
  nsup: nse,
  nsupE: rse,
  nsupe: ose,
  nsupset: sse,
  nsupseteq: ise,
  nsupseteqq: ase,
  ntgl: lse,
  Ntilde: cse,
  ntilde: use,
  ntlg: fse,
  ntriangleleft: dse,
  ntrianglelefteq: pse,
  ntriangleright: hse,
  ntrianglerighteq: gse,
  Nu: mse,
  nu: vse,
  num: bse,
  numero: _se,
  numsp: yse,
  nvap: wse,
  nvdash: kse,
  nvDash: xse,
  nVdash: Cse,
  nVDash: Sse,
  nvge: Ese,
  nvgt: Ase,
  nvHarr: Tse,
  nvinfin: Mse,
  nvlArr: $se,
  nvle: Lse,
  nvlt: Ise,
  nvltrie: Rse,
  nvrArr: Ose,
  nvrtrie: Pse,
  nvsim: Dse,
  nwarhk: Bse,
  nwarr: Nse,
  nwArr: Fse,
  nwarrow: qse,
  nwnear: zse,
  Oacute: Hse,
  oacute: jse,
  oast: Vse,
  Ocirc: Use,
  ocirc: Kse,
  ocir: Gse,
  Ocy: Wse,
  ocy: Zse,
  odash: Xse,
  Odblac: Jse,
  odblac: Yse,
  odiv: Qse,
  odot: eie,
  odsold: tie,
  OElig: nie,
  oelig: rie,
  ofcir: oie,
  Ofr: sie,
  ofr: iie,
  ogon: aie,
  Ograve: lie,
  ograve: cie,
  ogt: uie,
  ohbar: fie,
  ohm: die,
  oint: pie,
  olarr: hie,
  olcir: gie,
  olcross: mie,
  oline: vie,
  olt: bie,
  Omacr: _ie,
  omacr: yie,
  Omega: wie,
  omega: kie,
  Omicron: xie,
  omicron: Cie,
  omid: Sie,
  ominus: Eie,
  Oopf: Aie,
  oopf: Tie,
  opar: Mie,
  OpenCurlyDoubleQuote: $ie,
  OpenCurlyQuote: Lie,
  operp: Iie,
  oplus: Rie,
  orarr: Oie,
  Or: Pie,
  or: Die,
  ord: Bie,
  order: Nie,
  orderof: Fie,
  ordf: qie,
  ordm: zie,
  origof: Hie,
  oror: jie,
  orslope: Vie,
  orv: Uie,
  oS: Kie,
  Oscr: Gie,
  oscr: Wie,
  Oslash: Zie,
  oslash: Xie,
  osol: Jie,
  Otilde: Yie,
  otilde: Qie,
  otimesas: eae,
  Otimes: tae,
  otimes: nae,
  Ouml: rae,
  ouml: oae,
  ovbar: sae,
  OverBar: iae,
  OverBrace: aae,
  OverBracket: lae,
  OverParenthesis: cae,
  para: uae,
  parallel: fae,
  par: dae,
  parsim: pae,
  parsl: hae,
  part: gae,
  PartialD: mae,
  Pcy: vae,
  pcy: bae,
  percnt: _ae,
  period: yae,
  permil: wae,
  perp: kae,
  pertenk: xae,
  Pfr: Cae,
  pfr: Sae,
  Phi: Eae,
  phi: Aae,
  phiv: Tae,
  phmmat: Mae,
  phone: $ae,
  Pi: Lae,
  pi: Iae,
  pitchfork: Rae,
  piv: Oae,
  planck: Pae,
  planckh: Dae,
  plankv: Bae,
  plusacir: Nae,
  plusb: Fae,
  pluscir: qae,
  plus: zae,
  plusdo: Hae,
  plusdu: jae,
  pluse: Vae,
  PlusMinus: Uae,
  plusmn: Kae,
  plussim: Gae,
  plustwo: Wae,
  pm: Zae,
  Poincareplane: Xae,
  pointint: Jae,
  popf: Yae,
  Popf: Qae,
  pound: ele,
  prap: tle,
  Pr: nle,
  pr: rle,
  prcue: ole,
  precapprox: sle,
  prec: ile,
  preccurlyeq: ale,
  Precedes: lle,
  PrecedesEqual: cle,
  PrecedesSlantEqual: ule,
  PrecedesTilde: fle,
  preceq: dle,
  precnapprox: ple,
  precneqq: hle,
  precnsim: gle,
  pre: mle,
  prE: vle,
  precsim: ble,
  prime: _le,
  Prime: yle,
  primes: wle,
  prnap: kle,
  prnE: xle,
  prnsim: Cle,
  prod: Sle,
  Product: Ele,
  profalar: Ale,
  profline: Tle,
  profsurf: Mle,
  prop: $le,
  Proportional: Lle,
  Proportion: Ile,
  propto: Rle,
  prsim: Ole,
  prurel: Ple,
  Pscr: Dle,
  pscr: Ble,
  Psi: Nle,
  psi: Fle,
  puncsp: qle,
  Qfr: zle,
  qfr: Hle,
  qint: jle,
  qopf: Vle,
  Qopf: Ule,
  qprime: Kle,
  Qscr: Gle,
  qscr: Wle,
  quaternions: Zle,
  quatint: Xle,
  quest: Jle,
  questeq: Yle,
  quot: Qle,
  QUOT: ece,
  rAarr: tce,
  race: nce,
  Racute: rce,
  racute: oce,
  radic: sce,
  raemptyv: ice,
  rang: ace,
  Rang: lce,
  rangd: cce,
  range: uce,
  rangle: fce,
  raquo: dce,
  rarrap: pce,
  rarrb: hce,
  rarrbfs: gce,
  rarrc: mce,
  rarr: vce,
  Rarr: bce,
  rArr: _ce,
  rarrfs: yce,
  rarrhk: wce,
  rarrlp: kce,
  rarrpl: xce,
  rarrsim: Cce,
  Rarrtl: Sce,
  rarrtl: Ece,
  rarrw: Ace,
  ratail: Tce,
  rAtail: Mce,
  ratio: $ce,
  rationals: Lce,
  rbarr: Ice,
  rBarr: Rce,
  RBarr: Oce,
  rbbrk: Pce,
  rbrace: Dce,
  rbrack: Bce,
  rbrke: Nce,
  rbrksld: Fce,
  rbrkslu: qce,
  Rcaron: zce,
  rcaron: Hce,
  Rcedil: jce,
  rcedil: Vce,
  rceil: Uce,
  rcub: Kce,
  Rcy: Gce,
  rcy: Wce,
  rdca: Zce,
  rdldhar: Xce,
  rdquo: Jce,
  rdquor: Yce,
  rdsh: Qce,
  real: eue,
  realine: tue,
  realpart: nue,
  reals: rue,
  Re: oue,
  rect: sue,
  reg: iue,
  REG: aue,
  ReverseElement: lue,
  ReverseEquilibrium: cue,
  ReverseUpEquilibrium: uue,
  rfisht: fue,
  rfloor: due,
  rfr: pue,
  Rfr: hue,
  rHar: gue,
  rhard: mue,
  rharu: vue,
  rharul: bue,
  Rho: _ue,
  rho: yue,
  rhov: wue,
  RightAngleBracket: kue,
  RightArrowBar: xue,
  rightarrow: Cue,
  RightArrow: Sue,
  Rightarrow: Eue,
  RightArrowLeftArrow: Aue,
  rightarrowtail: Tue,
  RightCeiling: Mue,
  RightDoubleBracket: $ue,
  RightDownTeeVector: Lue,
  RightDownVectorBar: Iue,
  RightDownVector: Rue,
  RightFloor: Oue,
  rightharpoondown: Pue,
  rightharpoonup: Due,
  rightleftarrows: Bue,
  rightleftharpoons: Nue,
  rightrightarrows: Fue,
  rightsquigarrow: que,
  RightTeeArrow: zue,
  RightTee: Hue,
  RightTeeVector: jue,
  rightthreetimes: Vue,
  RightTriangleBar: Uue,
  RightTriangle: Kue,
  RightTriangleEqual: Gue,
  RightUpDownVector: Wue,
  RightUpTeeVector: Zue,
  RightUpVectorBar: Xue,
  RightUpVector: Jue,
  RightVectorBar: Yue,
  RightVector: Que,
  ring: efe,
  risingdotseq: tfe,
  rlarr: nfe,
  rlhar: rfe,
  rlm: ofe,
  rmoustache: sfe,
  rmoust: ife,
  rnmid: afe,
  roang: lfe,
  roarr: cfe,
  robrk: ufe,
  ropar: ffe,
  ropf: dfe,
  Ropf: pfe,
  roplus: hfe,
  rotimes: gfe,
  RoundImplies: mfe,
  rpar: vfe,
  rpargt: bfe,
  rppolint: _fe,
  rrarr: yfe,
  Rrightarrow: wfe,
  rsaquo: kfe,
  rscr: xfe,
  Rscr: Cfe,
  rsh: Sfe,
  Rsh: Efe,
  rsqb: Afe,
  rsquo: Tfe,
  rsquor: Mfe,
  rthree: $fe,
  rtimes: Lfe,
  rtri: Ife,
  rtrie: Rfe,
  rtrif: Ofe,
  rtriltri: Pfe,
  RuleDelayed: Dfe,
  ruluhar: Bfe,
  rx: Nfe,
  Sacute: Ffe,
  sacute: qfe,
  sbquo: zfe,
  scap: Hfe,
  Scaron: jfe,
  scaron: Vfe,
  Sc: Ufe,
  sc: Kfe,
  sccue: Gfe,
  sce: Wfe,
  scE: Zfe,
  Scedil: Xfe,
  scedil: Jfe,
  Scirc: Yfe,
  scirc: Qfe,
  scnap: ede,
  scnE: tde,
  scnsim: nde,
  scpolint: rde,
  scsim: ode,
  Scy: sde,
  scy: ide,
  sdotb: ade,
  sdot: lde,
  sdote: cde,
  searhk: ude,
  searr: fde,
  seArr: dde,
  searrow: pde,
  sect: hde,
  semi: gde,
  seswar: mde,
  setminus: vde,
  setmn: bde,
  sext: _de,
  Sfr: yde,
  sfr: wde,
  sfrown: kde,
  sharp: xde,
  SHCHcy: Cde,
  shchcy: Sde,
  SHcy: Ede,
  shcy: Ade,
  ShortDownArrow: Tde,
  ShortLeftArrow: Mde,
  shortmid: $de,
  shortparallel: Lde,
  ShortRightArrow: Ide,
  ShortUpArrow: Rde,
  shy: Ode,
  Sigma: Pde,
  sigma: Dde,
  sigmaf: Bde,
  sigmav: Nde,
  sim: Fde,
  simdot: qde,
  sime: zde,
  simeq: Hde,
  simg: jde,
  simgE: Vde,
  siml: Ude,
  simlE: Kde,
  simne: Gde,
  simplus: Wde,
  simrarr: Zde,
  slarr: Xde,
  SmallCircle: Jde,
  smallsetminus: Yde,
  smashp: Qde,
  smeparsl: e0e,
  smid: t0e,
  smile: n0e,
  smt: r0e,
  smte: o0e,
  smtes: s0e,
  SOFTcy: i0e,
  softcy: a0e,
  solbar: l0e,
  solb: c0e,
  sol: u0e,
  Sopf: f0e,
  sopf: d0e,
  spades: p0e,
  spadesuit: h0e,
  spar: g0e,
  sqcap: m0e,
  sqcaps: v0e,
  sqcup: b0e,
  sqcups: _0e,
  Sqrt: y0e,
  sqsub: w0e,
  sqsube: k0e,
  sqsubset: x0e,
  sqsubseteq: C0e,
  sqsup: S0e,
  sqsupe: E0e,
  sqsupset: A0e,
  sqsupseteq: T0e,
  square: M0e,
  Square: $0e,
  SquareIntersection: L0e,
  SquareSubset: I0e,
  SquareSubsetEqual: R0e,
  SquareSuperset: O0e,
  SquareSupersetEqual: P0e,
  SquareUnion: D0e,
  squarf: B0e,
  squ: N0e,
  squf: F0e,
  srarr: q0e,
  Sscr: z0e,
  sscr: H0e,
  ssetmn: j0e,
  ssmile: V0e,
  sstarf: U0e,
  Star: K0e,
  star: G0e,
  starf: W0e,
  straightepsilon: Z0e,
  straightphi: X0e,
  strns: J0e,
  sub: Y0e,
  Sub: Q0e,
  subdot: e2e,
  subE: t2e,
  sube: n2e,
  subedot: r2e,
  submult: o2e,
  subnE: s2e,
  subne: i2e,
  subplus: a2e,
  subrarr: l2e,
  subset: c2e,
  Subset: u2e,
  subseteq: f2e,
  subseteqq: d2e,
  SubsetEqual: p2e,
  subsetneq: h2e,
  subsetneqq: g2e,
  subsim: m2e,
  subsub: v2e,
  subsup: b2e,
  succapprox: _2e,
  succ: y2e,
  succcurlyeq: w2e,
  Succeeds: k2e,
  SucceedsEqual: x2e,
  SucceedsSlantEqual: C2e,
  SucceedsTilde: S2e,
  succeq: E2e,
  succnapprox: A2e,
  succneqq: T2e,
  succnsim: M2e,
  succsim: $2e,
  SuchThat: L2e,
  sum: I2e,
  Sum: R2e,
  sung: O2e,
  sup1: P2e,
  sup2: D2e,
  sup3: B2e,
  sup: N2e,
  Sup: F2e,
  supdot: q2e,
  supdsub: z2e,
  supE: H2e,
  supe: j2e,
  supedot: V2e,
  Superset: U2e,
  SupersetEqual: K2e,
  suphsol: G2e,
  suphsub: W2e,
  suplarr: Z2e,
  supmult: X2e,
  supnE: J2e,
  supne: Y2e,
  supplus: Q2e,
  supset: epe,
  Supset: tpe,
  supseteq: npe,
  supseteqq: rpe,
  supsetneq: ope,
  supsetneqq: spe,
  supsim: ipe,
  supsub: ape,
  supsup: lpe,
  swarhk: cpe,
  swarr: upe,
  swArr: fpe,
  swarrow: dpe,
  swnwar: ppe,
  szlig: hpe,
  Tab: gpe,
  target: mpe,
  Tau: vpe,
  tau: bpe,
  tbrk: _pe,
  Tcaron: ype,
  tcaron: wpe,
  Tcedil: kpe,
  tcedil: xpe,
  Tcy: Cpe,
  tcy: Spe,
  tdot: Epe,
  telrec: Ape,
  Tfr: Tpe,
  tfr: Mpe,
  there4: $pe,
  therefore: Lpe,
  Therefore: Ipe,
  Theta: Rpe,
  theta: Ope,
  thetasym: Ppe,
  thetav: Dpe,
  thickapprox: Bpe,
  thicksim: Npe,
  ThickSpace: Fpe,
  ThinSpace: qpe,
  thinsp: zpe,
  thkap: Hpe,
  thksim: jpe,
  THORN: Vpe,
  thorn: Upe,
  tilde: Kpe,
  Tilde: Gpe,
  TildeEqual: Wpe,
  TildeFullEqual: Zpe,
  TildeTilde: Xpe,
  timesbar: Jpe,
  timesb: Ype,
  times: Qpe,
  timesd: ehe,
  tint: the,
  toea: nhe,
  topbot: rhe,
  topcir: ohe,
  top: she,
  Topf: ihe,
  topf: ahe,
  topfork: lhe,
  tosa: che,
  tprime: uhe,
  trade: fhe,
  TRADE: dhe,
  triangle: phe,
  triangledown: hhe,
  triangleleft: ghe,
  trianglelefteq: mhe,
  triangleq: vhe,
  triangleright: bhe,
  trianglerighteq: _he,
  tridot: yhe,
  trie: whe,
  triminus: khe,
  TripleDot: xhe,
  triplus: Che,
  trisb: She,
  tritime: Ehe,
  trpezium: Ahe,
  Tscr: The,
  tscr: Mhe,
  TScy: $he,
  tscy: Lhe,
  TSHcy: Ihe,
  tshcy: Rhe,
  Tstrok: Ohe,
  tstrok: Phe,
  twixt: Dhe,
  twoheadleftarrow: Bhe,
  twoheadrightarrow: Nhe,
  Uacute: Fhe,
  uacute: qhe,
  uarr: zhe,
  Uarr: Hhe,
  uArr: jhe,
  Uarrocir: Vhe,
  Ubrcy: Uhe,
  ubrcy: Khe,
  Ubreve: Ghe,
  ubreve: Whe,
  Ucirc: Zhe,
  ucirc: Xhe,
  Ucy: Jhe,
  ucy: Yhe,
  udarr: Qhe,
  Udblac: e1e,
  udblac: t1e,
  udhar: n1e,
  ufisht: r1e,
  Ufr: o1e,
  ufr: s1e,
  Ugrave: i1e,
  ugrave: a1e,
  uHar: l1e,
  uharl: c1e,
  uharr: u1e,
  uhblk: f1e,
  ulcorn: d1e,
  ulcorner: p1e,
  ulcrop: h1e,
  ultri: g1e,
  Umacr: m1e,
  umacr: v1e,
  uml: b1e,
  UnderBar: _1e,
  UnderBrace: y1e,
  UnderBracket: w1e,
  UnderParenthesis: k1e,
  Union: x1e,
  UnionPlus: C1e,
  Uogon: S1e,
  uogon: E1e,
  Uopf: A1e,
  uopf: T1e,
  UpArrowBar: M1e,
  uparrow: $1e,
  UpArrow: L1e,
  Uparrow: I1e,
  UpArrowDownArrow: R1e,
  updownarrow: O1e,
  UpDownArrow: P1e,
  Updownarrow: D1e,
  UpEquilibrium: B1e,
  upharpoonleft: N1e,
  upharpoonright: F1e,
  uplus: q1e,
  UpperLeftArrow: z1e,
  UpperRightArrow: H1e,
  upsi: j1e,
  Upsi: V1e,
  upsih: U1e,
  Upsilon: K1e,
  upsilon: G1e,
  UpTeeArrow: W1e,
  UpTee: Z1e,
  upuparrows: X1e,
  urcorn: J1e,
  urcorner: Y1e,
  urcrop: Q1e,
  Uring: ege,
  uring: tge,
  urtri: nge,
  Uscr: rge,
  uscr: oge,
  utdot: sge,
  Utilde: ige,
  utilde: age,
  utri: lge,
  utrif: cge,
  uuarr: uge,
  Uuml: fge,
  uuml: dge,
  uwangle: pge,
  vangrt: hge,
  varepsilon: gge,
  varkappa: mge,
  varnothing: vge,
  varphi: bge,
  varpi: _ge,
  varpropto: yge,
  varr: wge,
  vArr: kge,
  varrho: xge,
  varsigma: Cge,
  varsubsetneq: Sge,
  varsubsetneqq: Ege,
  varsupsetneq: Age,
  varsupsetneqq: Tge,
  vartheta: Mge,
  vartriangleleft: $ge,
  vartriangleright: Lge,
  vBar: Ige,
  Vbar: Rge,
  vBarv: Oge,
  Vcy: Pge,
  vcy: Dge,
  vdash: Bge,
  vDash: Nge,
  Vdash: Fge,
  VDash: qge,
  Vdashl: zge,
  veebar: Hge,
  vee: jge,
  Vee: Vge,
  veeeq: Uge,
  vellip: Kge,
  verbar: Gge,
  Verbar: Wge,
  vert: Zge,
  Vert: Xge,
  VerticalBar: Jge,
  VerticalLine: Yge,
  VerticalSeparator: Qge,
  VerticalTilde: eme,
  VeryThinSpace: tme,
  Vfr: nme,
  vfr: rme,
  vltri: ome,
  vnsub: sme,
  vnsup: ime,
  Vopf: ame,
  vopf: lme,
  vprop: cme,
  vrtri: ume,
  Vscr: fme,
  vscr: dme,
  vsubnE: pme,
  vsubne: hme,
  vsupnE: gme,
  vsupne: mme,
  Vvdash: vme,
  vzigzag: bme,
  Wcirc: _me,
  wcirc: yme,
  wedbar: wme,
  wedge: kme,
  Wedge: xme,
  wedgeq: Cme,
  weierp: Sme,
  Wfr: Eme,
  wfr: Ame,
  Wopf: Tme,
  wopf: Mme,
  wp: $me,
  wr: Lme,
  wreath: Ime,
  Wscr: Rme,
  wscr: Ome,
  xcap: Pme,
  xcirc: Dme,
  xcup: Bme,
  xdtri: Nme,
  Xfr: Fme,
  xfr: qme,
  xharr: zme,
  xhArr: Hme,
  Xi: jme,
  xi: Vme,
  xlarr: Ume,
  xlArr: Kme,
  xmap: Gme,
  xnis: Wme,
  xodot: Zme,
  Xopf: Xme,
  xopf: Jme,
  xoplus: Yme,
  xotime: Qme,
  xrarr: eve,
  xrArr: tve,
  Xscr: nve,
  xscr: rve,
  xsqcup: ove,
  xuplus: sve,
  xutri: ive,
  xvee: ave,
  xwedge: lve,
  Yacute: cve,
  yacute: uve,
  YAcy: fve,
  yacy: dve,
  Ycirc: pve,
  ycirc: hve,
  Ycy: gve,
  ycy: mve,
  yen: vve,
  Yfr: bve,
  yfr: _ve,
  YIcy: yve,
  yicy: wve,
  Yopf: kve,
  yopf: xve,
  Yscr: Cve,
  yscr: Sve,
  YUcy: Eve,
  yucy: Ave,
  yuml: Tve,
  Yuml: Mve,
  Zacute: $ve,
  zacute: Lve,
  Zcaron: Ive,
  zcaron: Rve,
  Zcy: Ove,
  zcy: Pve,
  Zdot: Dve,
  zdot: Bve,
  zeetrf: Nve,
  ZeroWidthSpace: Fve,
  Zeta: qve,
  zeta: zve,
  zfr: Hve,
  Zfr: jve,
  ZHcy: Vve,
  zhcy: Uve,
  zigrarr: Kve,
  zopf: Gve,
  Zopf: Wve,
  Zscr: Zve,
  zscr: Xve,
  zwj: Jve,
  zwnj: Yve
};
var Ta, K0;
function b_() {
  return K0 || (K0 = 1, Ta = Qve), Ta;
}
var Ma, G0;
function yf() {
  return G0 || (G0 = 1, Ma = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), Ma;
}
var Jr = {}, $a, W0;
function ebe() {
  if (W0) return $a;
  W0 = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), /^[0-9a-z]$/i.test(o) ? i.push(o) : i.push("%" + ("0" + s.toString(16).toUpperCase()).slice(-2));
    for (s = 0; s < r.length; s++)
      i[r.charCodeAt(s)] = r[s];
    return i;
  }
  function n(r, s, o) {
    var i, a, l, u, f, c = "";
    for (typeof s != "string" && (o = s, s = n.defaultChars), typeof o > "u" && (o = !0), f = t(s), i = 0, a = r.length; i < a; i++) {
      if (l = r.charCodeAt(i), o && l === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(r.slice(i + 1, i + 3))) {
        c += r.slice(i, i + 3), i += 2;
        continue;
      }
      if (l < 128) {
        c += f[l];
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        if (l >= 55296 && l <= 56319 && i + 1 < a && (u = r.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          c += encodeURIComponent(r[i] + r[i + 1]), i++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(r[i]);
    }
    return c;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", $a = n, $a;
}
var La, Z0;
function tbe() {
  if (Z0) return La;
  Z0 = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), i.push(o);
    for (s = 0; s < r.length; s++)
      o = r.charCodeAt(s), i[o] = "%" + ("0" + o.toString(16).toUpperCase()).slice(-2);
    return i;
  }
  function n(r, s) {
    var o;
    return typeof s != "string" && (s = n.defaultChars), o = t(s), r.replace(/(%[a-f0-9]{2})+/gi, function(i) {
      var a, l, u, f, c, p, d, v = "";
      for (a = 0, l = i.length; a < l; a += 3) {
        if (u = parseInt(i.slice(a + 1, a + 3), 16), u < 128) {
          v += o[u];
          continue;
        }
        if ((u & 224) === 192 && a + 3 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), (f & 192) === 128)) {
          d = u << 6 & 1984 | f & 63, d < 128 ? v += "??" : v += String.fromCharCode(d), a += 3;
          continue;
        }
        if ((u & 240) === 224 && a + 6 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), (f & 192) === 128 && (c & 192) === 128)) {
          d = u << 12 & 61440 | f << 6 & 4032 | c & 63, d < 2048 || d >= 55296 && d <= 57343 ? v += "???" : v += String.fromCharCode(d), a += 6;
          continue;
        }
        if ((u & 248) === 240 && a + 9 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), p = parseInt(i.slice(a + 10, a + 12), 16), (f & 192) === 128 && (c & 192) === 128 && (p & 192) === 128)) {
          d = u << 18 & 1835008 | f << 12 & 258048 | c << 6 & 4032 | p & 63, d < 65536 || d > 1114111 ? v += "????" : (d -= 65536, v += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), a += 9;
          continue;
        }
        v += "?";
      }
      return v;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", La = n, La;
}
var Ia, X0;
function nbe() {
  return X0 || (X0 = 1, Ia = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), Ia;
}
var Ra, J0;
function rbe() {
  if (J0) return Ra;
  J0 = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), i = ["'"].concat(o), a = ["%", "/", "?", ";", "#"].concat(i), l = ["/", "?", "#"], u = 255, f = /^[+a-z0-9A-Z_-]{0,63}$/, c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, p = {
    javascript: !0,
    "javascript:": !0
  }, d = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };
  function v(g, k) {
    if (g && g instanceof e)
      return g;
    var m = new e();
    return m.parse(g, k), m;
  }
  return e.prototype.parse = function(g, k) {
    var m, x, w, y, S, C = g;
    if (C = C.trim(), !k && g.split("#").length === 1) {
      var $ = r.exec(C);
      if ($)
        return this.pathname = $[1], $[2] && (this.search = $[2]), this;
    }
    var M = t.exec(C);
    if (M && (M = M[0], w = M.toLowerCase(), this.protocol = M, C = C.substr(M.length)), (k || M || C.match(/^\/\/[^@\/]+@[^@\/]+/)) && (S = C.substr(0, 2) === "//", S && !(M && p[M]) && (C = C.substr(2), this.slashes = !0)), !p[M] && (S || M && !d[M])) {
      var R = -1;
      for (m = 0; m < l.length; m++)
        y = C.indexOf(l[m]), y !== -1 && (R === -1 || y < R) && (R = y);
      var D, N;
      for (R === -1 ? N = C.lastIndexOf("@") : N = C.lastIndexOf("@", R), N !== -1 && (D = C.slice(0, N), C = C.slice(N + 1), this.auth = D), R = -1, m = 0; m < a.length; m++)
        y = C.indexOf(a[m]), y !== -1 && (R === -1 || y < R) && (R = y);
      R === -1 && (R = C.length), C[R - 1] === ":" && R--;
      var B = C.slice(0, R);
      C = C.slice(R), this.parseHost(B), this.hostname = this.hostname || "";
      var oe = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!oe) {
        var q = this.hostname.split(/\./);
        for (m = 0, x = q.length; m < x; m++) {
          var ie = q[m];
          if (ie && !ie.match(f)) {
            for (var j = "", V = 0, H = ie.length; V < H; V++)
              ie.charCodeAt(V) > 127 ? j += "x" : j += ie[V];
            if (!j.match(f)) {
              var Y = q.slice(0, m), I = q.slice(m + 1), Z = ie.match(c);
              Z && (Y.push(Z[1]), I.unshift(Z[2])), I.length && (C = I.join(".") + C), this.hostname = Y.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), oe && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var K = C.indexOf("#");
    K !== -1 && (this.hash = C.substr(K), C = C.slice(0, K));
    var me = C.indexOf("?");
    return me !== -1 && (this.search = C.substr(me), C = C.slice(0, me)), C && (this.pathname = C), d[w] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(g) {
    var k = n.exec(g);
    k && (k = k[0], k !== ":" && (this.port = k.substr(1)), g = g.substr(0, g.length - k.length)), g && (this.hostname = g);
  }, Ra = v, Ra;
}
var Y0;
function __() {
  return Y0 || (Y0 = 1, Jr.encode = ebe(), Jr.decode = tbe(), Jr.format = nbe(), Jr.parse = rbe()), Jr;
}
var Ir = {}, Oa, Q0;
function y_() {
  return Q0 || (Q0 = 1, Oa = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Oa;
}
var Pa, e2;
function w_() {
  return e2 || (e2 = 1, Pa = /[\0-\x1F\x7F-\x9F]/), Pa;
}
var Da, t2;
function obe() {
  return t2 || (t2 = 1, Da = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Da;
}
var Ba, n2;
function k_() {
  return n2 || (n2 = 1, Ba = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Ba;
}
var r2;
function sbe() {
  return r2 || (r2 = 1, Ir.Any = y_(), Ir.Cc = w_(), Ir.Cf = obe(), Ir.P = yf(), Ir.Z = k_()), Ir;
}
var o2;
function nt() {
  return o2 || (o2 = 1, (function(e) {
    function t(q) {
      return Object.prototype.toString.call(q);
    }
    function n(q) {
      return t(q) === "[object String]";
    }
    var r = Object.prototype.hasOwnProperty;
    function s(q, ie) {
      return r.call(q, ie);
    }
    function o(q) {
      var ie = Array.prototype.slice.call(arguments, 1);
      return ie.forEach(function(j) {
        if (j) {
          if (typeof j != "object")
            throw new TypeError(j + "must be object");
          Object.keys(j).forEach(function(V) {
            q[V] = j[V];
          });
        }
      }), q;
    }
    function i(q, ie, j) {
      return [].concat(q.slice(0, ie), j, q.slice(ie + 1));
    }
    function a(q) {
      return !(q >= 55296 && q <= 57343 || q >= 64976 && q <= 65007 || (q & 65535) === 65535 || (q & 65535) === 65534 || q >= 0 && q <= 8 || q === 11 || q >= 14 && q <= 31 || q >= 127 && q <= 159 || q > 1114111);
    }
    function l(q) {
      if (q > 65535) {
        q -= 65536;
        var ie = 55296 + (q >> 10), j = 56320 + (q & 1023);
        return String.fromCharCode(ie, j);
      }
      return String.fromCharCode(q);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, f = /&([a-z#][a-z0-9]{1,31});/gi, c = new RegExp(u.source + "|" + f.source, "gi"), p = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, d = b_();
    function v(q, ie) {
      var j;
      return s(d, ie) ? d[ie] : ie.charCodeAt(0) === 35 && p.test(ie) && (j = ie[1].toLowerCase() === "x" ? parseInt(ie.slice(2), 16) : parseInt(ie.slice(1), 10), a(j)) ? l(j) : q;
    }
    function g(q) {
      return q.indexOf("\\") < 0 ? q : q.replace(u, "$1");
    }
    function k(q) {
      return q.indexOf("\\") < 0 && q.indexOf("&") < 0 ? q : q.replace(c, function(ie, j, V) {
        return j || v(ie, V);
      });
    }
    var m = /[&<>"]/, x = /[&<>"]/g, w = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function y(q) {
      return w[q];
    }
    function S(q) {
      return m.test(q) ? q.replace(x, y) : q;
    }
    var C = /[.?*+^$[\]\\(){}|-]/g;
    function $(q) {
      return q.replace(C, "\\$&");
    }
    function M(q) {
      switch (q) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function R(q) {
      if (q >= 8192 && q <= 8202)
        return !0;
      switch (q) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return !0;
      }
      return !1;
    }
    var D = yf();
    function N(q) {
      return D.test(q);
    }
    function B(q) {
      switch (q) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return !0;
        default:
          return !1;
      }
    }
    function oe(q) {
      return q = q.trim().replace(/\s+/g, " "), "?".toLowerCase() === "?" && (q = q.replace(/?/g, "ß")), q.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = __(), e.lib.ucmicro = sbe(), e.assign = o, e.isString = n, e.has = s, e.unescapeMd = g, e.unescapeAll = k, e.isValidEntityCode = a, e.fromCodePoint = l, e.escapeHtml = S, e.arrayReplaceAt = i, e.isSpace = M, e.isWhiteSpace = R, e.isMdAsciiPunct = B, e.isPunctChar = N, e.escapeRE = $, e.normalizeReference = oe;
  })(Aa)), Aa;
}
var Io = {}, Na, s2;
function ibe() {
  return s2 || (s2 = 1, Na = function(t, n, r) {
    var s, o, i, a, l = -1, u = t.posMax, f = t.pos;
    for (t.pos = n + 1, s = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (s--, s === 0)) {
        o = !0;
        break;
      }
      if (a = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (a === t.pos - 1)
          s++;
        else if (r)
          return t.pos = f, -1;
      }
    }
    return o && (l = t.pos), t.pos = f, l;
  }), Na;
}
var Fa, i2;
function abe() {
  if (i2) return Fa;
  i2 = 1;
  var e = nt().unescapeAll;
  return Fa = function(n, r, s) {
    var o, i, a = r, l = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(a) === 60) {
      for (a++; a < s; ) {
        if (o = n.charCodeAt(a), o === 10 || o === 60)
          return l;
        if (o === 62)
          return l.pos = a + 1, l.str = e(n.slice(r + 1, a)), l.ok = !0, l;
        if (o === 92 && a + 1 < s) {
          a += 2;
          continue;
        }
        a++;
      }
      return l;
    }
    for (i = 0; a < s && (o = n.charCodeAt(a), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && a + 1 < s) {
        if (n.charCodeAt(a + 1) === 32)
          break;
        a += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return l;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      a++;
    }
    return r === a || i !== 0 || (l.str = e(n.slice(r, a)), l.pos = a, l.ok = !0), l;
  }, Fa;
}
var qa, a2;
function lbe() {
  if (a2) return qa;
  a2 = 1;
  var e = nt().unescapeAll;
  return qa = function(n, r, s) {
    var o, i, a = 0, l = r, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (l >= s || (i = n.charCodeAt(l), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (l++, i === 40 && (i = 41); l < s; ) {
      if (o = n.charCodeAt(l), o === i)
        return u.pos = l + 1, u.lines = a, u.str = e(n.slice(r + 1, l)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? a++ : o === 92 && l + 1 < s && (l++, n.charCodeAt(l) === 10 && a++), l++;
    }
    return u;
  }, qa;
}
var l2;
function cbe() {
  return l2 || (l2 = 1, Io.parseLinkLabel = ibe(), Io.parseLinkDestination = abe(), Io.parseLinkTitle = lbe()), Io;
}
var za, c2;
function ube() {
  if (c2) return za;
  c2 = 1;
  var e = nt().assign, t = nt().unescapeAll, n = nt().escapeHtml, r = {};
  r.code_inline = function(o, i, a, l, u) {
    var f = o[i];
    return "<code" + u.renderAttrs(f) + ">" + n(f.content) + "</code>";
  }, r.code_block = function(o, i, a, l, u) {
    var f = o[i];
    return "<pre" + u.renderAttrs(f) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, r.fence = function(o, i, a, l, u) {
    var f = o[i], c = f.info ? t(f.info).trim() : "", p = "", d = "", v, g, k, m, x;
    return c && (k = c.split(/(\s+)/g), p = k[0], d = k.slice(2).join("")), a.highlight ? v = a.highlight(f.content, p, d) || n(f.content) : v = n(f.content), v.indexOf("<pre") === 0 ? v + `
` : c ? (g = f.attrIndex("class"), m = f.attrs ? f.attrs.slice() : [], g < 0 ? m.push(["class", a.langPrefix + p]) : (m[g] = m[g].slice(), m[g][1] += " " + a.langPrefix + p), x = {
      attrs: m
    }, "<pre><code" + u.renderAttrs(x) + ">" + v + `</code></pre>
`) : "<pre><code" + u.renderAttrs(f) + ">" + v + `</code></pre>
`;
  }, r.image = function(o, i, a, l, u) {
    var f = o[i];
    return f.attrs[f.attrIndex("alt")][1] = u.renderInlineAsText(f.children, a, l), u.renderToken(o, i, a);
  }, r.hardbreak = function(o, i, a) {
    return a.xhtmlOut ? `<br />
` : `<br>
`;
  }, r.softbreak = function(o, i, a) {
    return a.breaks ? a.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  }, r.text = function(o, i) {
    return n(o[i].content);
  }, r.html_block = function(o, i) {
    return o[i].content;
  }, r.html_inline = function(o, i) {
    return o[i].content;
  };
  function s() {
    this.rules = e({}, r);
  }
  return s.prototype.renderAttrs = function(i) {
    var a, l, u;
    if (!i.attrs)
      return "";
    for (u = "", a = 0, l = i.attrs.length; a < l; a++)
      u += " " + n(i.attrs[a][0]) + '="' + n(i.attrs[a][1]) + '"';
    return u;
  }, s.prototype.renderToken = function(i, a, l) {
    var u, f = "", c = !1, p = i[a];
    return p.hidden ? "" : (p.block && p.nesting !== -1 && a && i[a - 1].hidden && (f += `
`), f += (p.nesting === -1 ? "</" : "<") + p.tag, f += this.renderAttrs(p), p.nesting === 0 && l.xhtmlOut && (f += " /"), p.block && (c = !0, p.nesting === 1 && a + 1 < i.length && (u = i[a + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === p.tag) && (c = !1))), f += c ? `>
` : ">", f);
  }, s.prototype.renderInline = function(o, i, a) {
    for (var l, u = "", f = this.rules, c = 0, p = o.length; c < p; c++)
      l = o[c].type, typeof f[l] < "u" ? u += f[l](o, c, i, a, this) : u += this.renderToken(o, c, i);
    return u;
  }, s.prototype.renderInlineAsText = function(o, i, a) {
    for (var l = "", u = 0, f = o.length; u < f; u++)
      o[u].type === "text" ? l += o[u].content : o[u].type === "image" ? l += this.renderInlineAsText(o[u].children, i, a) : o[u].type === "softbreak" && (l += `
`);
    return l;
  }, s.prototype.render = function(o, i, a) {
    var l, u, f, c = "", p = this.rules;
    for (l = 0, u = o.length; l < u; l++)
      f = o[l].type, f === "inline" ? c += this.renderInline(o[l].children, i, a) : typeof p[f] < "u" ? c += p[f](o, l, i, a, this) : c += this.renderToken(o, l, i, a);
    return c;
  }, za = s, za;
}
var Ha, u2;
function wf() {
  if (u2) return Ha;
  u2 = 1;
  function e() {
    this.__rules__ = [], this.__cache__ = null;
  }
  return e.prototype.__find__ = function(t) {
    for (var n = 0; n < this.__rules__.length; n++)
      if (this.__rules__[n].name === t)
        return n;
    return -1;
  }, e.prototype.__compile__ = function() {
    var t = this, n = [""];
    t.__rules__.forEach(function(r) {
      r.enabled && r.alt.forEach(function(s) {
        n.indexOf(s) < 0 && n.push(s);
      });
    }), t.__cache__ = {}, n.forEach(function(r) {
      t.__cache__[r] = [], t.__rules__.forEach(function(s) {
        s.enabled && (r && s.alt.indexOf(r) < 0 || t.__cache__[r].push(s.fn));
      });
    });
  }, e.prototype.at = function(t, n, r) {
    var s = this.__find__(t), o = r || {};
    if (s === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__[s].fn = n, this.__rules__[s].alt = o.alt || [], this.__cache__ = null;
  }, e.prototype.before = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.after = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o + 1, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.push = function(t, n, r) {
    var s = r || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: n,
      alt: s.alt || []
    }), this.__cache__ = null;
  }, e.prototype.enable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !0, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.enableOnly = function(t, n) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
      r.enabled = !1;
    }), this.enable(t, n);
  }, e.prototype.disable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !1, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  }, Ha = e, Ha;
}
var ja, f2;
function fbe() {
  if (f2) return ja;
  f2 = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return ja = function(r) {
    var s;
    s = r.src.replace(e, `
`), s = s.replace(t, "?"), r.src = s;
  }, ja;
}
var Va, d2;
function dbe() {
  return d2 || (d2 = 1, Va = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), Va;
}
var Ua, p2;
function pbe() {
  return p2 || (p2 = 1, Ua = function(t) {
    var n = t.tokens, r, s, o;
    for (s = 0, o = n.length; s < o; s++)
      r = n[s], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
  }), Ua;
}
var Ka, h2;
function hbe() {
  if (h2) return Ka;
  h2 = 1;
  var e = nt().arrayReplaceAt;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  return Ka = function(s) {
    var o, i, a, l, u, f, c, p, d, v, g, k, m, x, w, y, S = s.tokens, C;
    if (s.md.options.linkify) {
      for (i = 0, a = S.length; i < a; i++)
        if (!(S[i].type !== "inline" || !s.md.linkify.pretest(S[i].content)))
          for (l = S[i].children, m = 0, o = l.length - 1; o >= 0; o--) {
            if (f = l[o], f.type === "link_close") {
              for (o--; l[o].level !== f.level && l[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (f.type === "html_inline" && (t(f.content) && m > 0 && m--, n(f.content) && m++), !(m > 0) && f.type === "text" && s.md.linkify.test(f.content)) {
              for (d = f.content, C = s.md.linkify.match(d), c = [], k = f.level, g = 0, C.length > 0 && C[0].index === 0 && o > 0 && l[o - 1].type === "text_special" && (C = C.slice(1)), p = 0; p < C.length; p++)
                x = C[p].url, w = s.md.normalizeLink(x), s.md.validateLink(w) && (y = C[p].text, C[p].schema ? C[p].schema === "mailto:" && !/^mailto:/i.test(y) ? y = s.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : y = s.md.normalizeLinkText(y) : y = s.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""), v = C[p].index, v > g && (u = new s.Token("text", "", 0), u.content = d.slice(g, v), u.level = k, c.push(u)), u = new s.Token("link_open", "a", 1), u.attrs = [["href", w]], u.level = k++, u.markup = "linkify", u.info = "auto", c.push(u), u = new s.Token("text", "", 0), u.content = y, u.level = k, c.push(u), u = new s.Token("link_close", "a", -1), u.level = --k, u.markup = "linkify", u.info = "auto", c.push(u), g = C[p].lastIndex);
              g < d.length && (u = new s.Token("text", "", 0), u.content = d.slice(g), u.level = k, c.push(u)), S[i].children = l = e(l, o, c);
            }
          }
    }
  }, Ka;
}
var Ga, g2;
function gbe() {
  if (g2) return Ga;
  g2 = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, r = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function s(a, l) {
    return r[l.toLowerCase()];
  }
  function o(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && (u.content = u.content.replace(n, s)), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  function i(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  return Ga = function(l) {
    var u;
    if (l.md.options.typographer)
      for (u = l.tokens.length - 1; u >= 0; u--)
        l.tokens[u].type === "inline" && (t.test(l.tokens[u].content) && o(l.tokens[u].children), e.test(l.tokens[u].content) && i(l.tokens[u].children));
  }, Ga;
}
var Wa, m2;
function mbe() {
  if (m2) return Wa;
  m2 = 1;
  var e = nt().isWhiteSpace, t = nt().isPunctChar, n = nt().isMdAsciiPunct, r = /['"]/, s = /['"]/g, o = "’";
  function i(l, u, f) {
    return l.slice(0, u) + f + l.slice(u + 1);
  }
  function a(l, u) {
    var f, c, p, d, v, g, k, m, x, w, y, S, C, $, M, R, D, N, B, oe, q;
    for (B = [], f = 0; f < l.length; f++) {
      for (c = l[f], k = l[f].level, D = B.length - 1; D >= 0 && !(B[D].level <= k); D--)
        ;
      if (B.length = D + 1, c.type === "text") {
        p = c.content, v = 0, g = p.length;
        e:
          for (; v < g && (s.lastIndex = v, d = s.exec(p), !!d); ) {
            if (M = R = !0, v = d.index + 1, N = d[0] === "'", x = 32, d.index - 1 >= 0)
              x = p.charCodeAt(d.index - 1);
            else
              for (D = f - 1; D >= 0 && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D--)
                if (l[D].content) {
                  x = l[D].content.charCodeAt(l[D].content.length - 1);
                  break;
                }
            if (w = 32, v < g)
              w = p.charCodeAt(v);
            else
              for (D = f + 1; D < l.length && !(l[D].type === "softbreak" || l[D].type === "hardbreak"); D++)
                if (l[D].content) {
                  w = l[D].content.charCodeAt(0);
                  break;
                }
            if (y = n(x) || t(String.fromCharCode(x)), S = n(w) || t(String.fromCharCode(w)), C = e(x), $ = e(w), $ ? M = !1 : S && (C || y || (M = !1)), C ? R = !1 : y && ($ || S || (R = !1)), w === 34 && d[0] === '"' && x >= 48 && x <= 57 && (R = M = !1), M && R && (M = y, R = S), !M && !R) {
              N && (c.content = i(c.content, d.index, o));
              continue;
            }
            if (R) {
              for (D = B.length - 1; D >= 0 && (m = B[D], !(B[D].level < k)); D--)
                if (m.single === N && B[D].level === k) {
                  m = B[D], N ? (oe = u.md.options.quotes[2], q = u.md.options.quotes[3]) : (oe = u.md.options.quotes[0], q = u.md.options.quotes[1]), c.content = i(c.content, d.index, q), l[m.token].content = i(
                    l[m.token].content,
                    m.pos,
                    oe
                  ), v += q.length - 1, m.token === f && (v += oe.length - 1), p = c.content, g = p.length, B.length = D;
                  continue e;
                }
            }
            M ? B.push({
              token: f,
              pos: d.index,
              single: N,
              level: k
            }) : R && N && (c.content = i(c.content, d.index, o));
          }
      }
    }
  }
  return Wa = function(u) {
    var f;
    if (u.md.options.typographer)
      for (f = u.tokens.length - 1; f >= 0; f--)
        u.tokens[f].type !== "inline" || !r.test(u.tokens[f].content) || a(u.tokens[f].children, u);
  }, Wa;
}
var Za, v2;
function vbe() {
  return v2 || (v2 = 1, Za = function(t) {
    var n, r, s, o, i, a, l = t.tokens;
    for (n = 0, r = l.length; n < r; n++)
      if (l[n].type === "inline") {
        for (s = l[n].children, i = s.length, o = 0; o < i; o++)
          s[o].type === "text_special" && (s[o].type = "text");
        for (o = a = 0; o < i; o++)
          s[o].type === "text" && o + 1 < i && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== a && (s[a] = s[o]), a++);
        o !== a && (s.length = a);
      }
  }), Za;
}
var Xa, b2;
function kf() {
  if (b2) return Xa;
  b2 = 1;
  function e(t, n, r) {
    this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  return e.prototype.attrIndex = function(n) {
    var r, s, o;
    if (!this.attrs)
      return -1;
    for (r = this.attrs, s = 0, o = r.length; s < o; s++)
      if (r[s][0] === n)
        return s;
    return -1;
  }, e.prototype.attrPush = function(n) {
    this.attrs ? this.attrs.push(n) : this.attrs = [n];
  }, e.prototype.attrSet = function(n, r) {
    var s = this.attrIndex(n), o = [n, r];
    s < 0 ? this.attrPush(o) : this.attrs[s] = o;
  }, e.prototype.attrGet = function(n) {
    var r = this.attrIndex(n), s = null;
    return r >= 0 && (s = this.attrs[r][1]), s;
  }, e.prototype.attrJoin = function(n, r) {
    var s = this.attrIndex(n);
    s < 0 ? this.attrPush([n, r]) : this.attrs[s][1] = this.attrs[s][1] + " " + r;
  }, Xa = e, Xa;
}
var Ja, _2;
function bbe() {
  if (_2) return Ja;
  _2 = 1;
  var e = kf();
  function t(n, r, s) {
    this.src = n, this.env = s, this.tokens = [], this.inlineMode = !1, this.md = r;
  }
  return t.prototype.Token = e, Ja = t, Ja;
}
var Ya, y2;
function _be() {
  if (y2) return Ya;
  y2 = 1;
  var e = wf(), t = [
    ["normalize", fbe()],
    ["block", dbe()],
    ["inline", pbe()],
    ["linkify", hbe()],
    ["replacements", gbe()],
    ["smartquotes", mbe()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", vbe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1]);
  }
  return n.prototype.process = function(r) {
    var s, o, i;
    for (i = this.ruler.getRules(""), s = 0, o = i.length; s < o; s++)
      i[s](r);
  }, n.prototype.State = bbe(), Ya = n, Ya;
}
var Qa, w2;
function ybe() {
  if (w2) return Qa;
  w2 = 1;
  var e = nt().isSpace;
  function t(r, s) {
    var o = r.bMarks[s] + r.tShift[s], i = r.eMarks[s];
    return r.src.slice(o, i);
  }
  function n(r) {
    var s = [], o = 0, i = r.length, a, l = !1, u = 0, f = "";
    for (a = r.charCodeAt(o); o < i; )
      a === 124 && (l ? (f += r.substring(u, o - 1), u = o) : (s.push(f + r.substring(u, o)), f = "", u = o + 1)), l = a === 92, o++, a = r.charCodeAt(o);
    return s.push(f + r.substring(u)), s;
  }
  return Qa = function(s, o, i, a) {
    var l, u, f, c, p, d, v, g, k, m, x, w, y, S, C, $, M, R;
    if (o + 2 > i || (d = o + 1, s.sCount[d] < s.blkIndent) || s.sCount[d] - s.blkIndent >= 4 || (f = s.bMarks[d] + s.tShift[d], f >= s.eMarks[d]) || (M = s.src.charCodeAt(f++), M !== 124 && M !== 45 && M !== 58) || f >= s.eMarks[d] || (R = s.src.charCodeAt(f++), R !== 124 && R !== 45 && R !== 58 && !e(R)) || M === 45 && e(R))
      return !1;
    for (; f < s.eMarks[d]; ) {
      if (l = s.src.charCodeAt(f), l !== 124 && l !== 45 && l !== 58 && !e(l))
        return !1;
      f++;
    }
    for (u = t(s, o + 1), v = u.split("|"), m = [], c = 0; c < v.length; c++) {
      if (x = v[c].trim(), !x) {
        if (c === 0 || c === v.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(x))
        return !1;
      x.charCodeAt(x.length - 1) === 58 ? m.push(x.charCodeAt(0) === 58 ? "center" : "right") : x.charCodeAt(0) === 58 ? m.push("left") : m.push("");
    }
    if (u = t(s, o).trim(), u.indexOf("|") === -1 || s.sCount[o] - s.blkIndent >= 4 || (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), g = v.length, g === 0 || g !== m.length))
      return !1;
    if (a)
      return !0;
    for (S = s.parentType, s.parentType = "table", $ = s.md.block.ruler.getRules("blockquote"), k = s.push("table_open", "table", 1), k.map = w = [o, 0], k = s.push("thead_open", "thead", 1), k.map = [o, o + 1], k = s.push("tr_open", "tr", 1), k.map = [o, o + 1], c = 0; c < v.length; c++)
      k = s.push("th_open", "th", 1), m[c] && (k.attrs = [["style", "text-align:" + m[c]]]), k = s.push("inline", "", 0), k.content = v[c].trim(), k.children = [], k = s.push("th_close", "th", -1);
    for (k = s.push("tr_close", "tr", -1), k = s.push("thead_close", "thead", -1), d = o + 2; d < i && !(s.sCount[d] < s.blkIndent); d++) {
      for (C = !1, c = 0, p = $.length; c < p; c++)
        if ($[c](s, d, i, !0)) {
          C = !0;
          break;
        }
      if (C || (u = t(s, d).trim(), !u) || s.sCount[d] - s.blkIndent >= 4)
        break;
      for (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), d === o + 2 && (k = s.push("tbody_open", "tbody", 1), k.map = y = [o + 2, 0]), k = s.push("tr_open", "tr", 1), k.map = [d, d + 1], c = 0; c < g; c++)
        k = s.push("td_open", "td", 1), m[c] && (k.attrs = [["style", "text-align:" + m[c]]]), k = s.push("inline", "", 0), k.content = v[c] ? v[c].trim() : "", k.children = [], k = s.push("td_close", "td", -1);
      k = s.push("tr_close", "tr", -1);
    }
    return y && (k = s.push("tbody_close", "tbody", -1), y[1] = d), k = s.push("table_close", "table", -1), w[1] = d, s.parentType = S, s.line = d, !0;
  }, Qa;
}
var el, k2;
function wbe() {
  return k2 || (k2 = 1, el = function(t, n, r) {
    var s, o, i;
    if (t.sCount[n] - t.blkIndent < 4)
      return !1;
    for (o = s = n + 1; s < r; ) {
      if (t.isEmpty(s)) {
        s++;
        continue;
      }
      if (t.sCount[s] - t.blkIndent >= 4) {
        s++, o = s;
        continue;
      }
      break;
    }
    return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(n, o, 4 + t.blkIndent, !1) + `
`, i.map = [n, t.line], !0;
  }), el;
}
var tl, x2;
function kbe() {
  return x2 || (x2 = 1, tl = function(t, n, r, s) {
    var o, i, a, l, u, f, c, p = !1, d = t.bMarks[n] + t.tShift[n], v = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || d + 3 > v || (o = t.src.charCodeAt(d), o !== 126 && o !== 96) || (u = d, d = t.skipChars(d, o), i = d - u, i < 3) || (c = t.src.slice(u, d), a = t.src.slice(d, v), o === 96 && a.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (s)
      return !0;
    for (l = n; l++, !(l >= r || (d = u = t.bMarks[l] + t.tShift[l], v = t.eMarks[l], d < v && t.sCount[l] < t.blkIndent)); )
      if (t.src.charCodeAt(d) === o && !(t.sCount[l] - t.blkIndent >= 4) && (d = t.skipChars(d, o), !(d - u < i) && (d = t.skipSpaces(d), !(d < v)))) {
        p = !0;
        break;
      }
    return i = t.sCount[n], t.line = l + (p ? 1 : 0), f = t.push("fence", "code", 0), f.info = a, f.content = t.getLines(n + 1, l, i, !0), f.markup = c, f.map = [n, t.line], !0;
  }), tl;
}
var nl, C2;
function xbe() {
  if (C2) return nl;
  C2 = 1;
  var e = nt().isSpace;
  return nl = function(n, r, s, o) {
    var i, a, l, u, f, c, p, d, v, g, k, m, x, w, y, S, C, $, M, R, D = n.lineMax, N = n.bMarks[r] + n.tShift[r], B = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(N) !== 62)
      return !1;
    if (o)
      return !0;
    for (g = [], k = [], w = [], y = [], $ = n.md.block.ruler.getRules("blockquote"), x = n.parentType, n.parentType = "blockquote", d = r; d < s && (R = n.sCount[d] < n.blkIndent, N = n.bMarks[d] + n.tShift[d], B = n.eMarks[d], !(N >= B)); d++) {
      if (n.src.charCodeAt(N++) === 62 && !R) {
        for (u = n.sCount[d] + 1, n.src.charCodeAt(N) === 32 ? (N++, u++, i = !1, S = !0) : n.src.charCodeAt(N) === 9 ? (S = !0, (n.bsCount[d] + u) % 4 === 3 ? (N++, u++, i = !1) : i = !0) : S = !1, v = u, g.push(n.bMarks[d]), n.bMarks[d] = N; N < B && (a = n.src.charCodeAt(N), e(a)); ) {
          a === 9 ? v += 4 - (v + n.bsCount[d] + (i ? 1 : 0)) % 4 : v++;
          N++;
        }
        c = N >= B, k.push(n.bsCount[d]), n.bsCount[d] = n.sCount[d] + 1 + (S ? 1 : 0), w.push(n.sCount[d]), n.sCount[d] = v - u, y.push(n.tShift[d]), n.tShift[d] = N - n.bMarks[d];
        continue;
      }
      if (c)
        break;
      for (C = !1, l = 0, f = $.length; l < f; l++)
        if ($[l](n, d, s, !0)) {
          C = !0;
          break;
        }
      if (C) {
        n.lineMax = d, n.blkIndent !== 0 && (g.push(n.bMarks[d]), k.push(n.bsCount[d]), y.push(n.tShift[d]), w.push(n.sCount[d]), n.sCount[d] -= n.blkIndent);
        break;
      }
      g.push(n.bMarks[d]), k.push(n.bsCount[d]), y.push(n.tShift[d]), w.push(n.sCount[d]), n.sCount[d] = -1;
    }
    for (m = n.blkIndent, n.blkIndent = 0, M = n.push("blockquote_open", "blockquote", 1), M.markup = ">", M.map = p = [r, 0], n.md.block.tokenize(n, r, d), M = n.push("blockquote_close", "blockquote", -1), M.markup = ">", n.lineMax = D, n.parentType = x, p[1] = n.line, l = 0; l < y.length; l++)
      n.bMarks[l + r] = g[l], n.tShift[l + r] = y[l], n.sCount[l + r] = w[l], n.bsCount[l + r] = k[l];
    return n.blkIndent = m, !0;
  }, nl;
}
var rl, S2;
function Cbe() {
  if (S2) return rl;
  S2 = 1;
  var e = nt().isSpace;
  return rl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (a = 1; f < c; ) {
      if (l = n.src.charCodeAt(f++), l !== i && !e(l))
        return !1;
      l === i && a++;
    }
    return a < 3 ? !1 : (o || (n.line = r + 1, u = n.push("hr", "hr", 0), u.map = [r, n.line], u.markup = Array(a + 1).join(String.fromCharCode(i))), !0);
  }, rl;
}
var ol, E2;
function Sbe() {
  if (E2) return ol;
  E2 = 1;
  var e = nt().isSpace;
  function t(s, o) {
    var i, a, l, u;
    return a = s.bMarks[o] + s.tShift[o], l = s.eMarks[o], i = s.src.charCodeAt(a++), i !== 42 && i !== 45 && i !== 43 || a < l && (u = s.src.charCodeAt(a), !e(u)) ? -1 : a;
  }
  function n(s, o) {
    var i, a = s.bMarks[o] + s.tShift[o], l = a, u = s.eMarks[o];
    if (l + 1 >= u || (i = s.src.charCodeAt(l++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (l >= u)
        return -1;
      if (i = s.src.charCodeAt(l++), i >= 48 && i <= 57) {
        if (l - a >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return l < u && (i = s.src.charCodeAt(l), !e(i)) ? -1 : l;
  }
  function r(s, o) {
    var i, a, l = s.level + 2;
    for (i = o + 2, a = s.tokens.length - 2; i < a; i++)
      s.tokens[i].level === l && s.tokens[i].type === "paragraph_open" && (s.tokens[i + 2].hidden = !0, s.tokens[i].hidden = !0, i += 2);
  }
  return ol = function(o, i, a, l) {
    var u, f, c, p, d, v, g, k, m, x, w, y, S, C, $, M, R, D, N, B, oe, q, ie, j, V, H, Y, I = i, Z = !1, K = !0;
    if (o.sCount[I] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[I] - o.listIndent >= 4 && o.sCount[I] < o.blkIndent)
      return !1;
    if (l && o.parentType === "paragraph" && o.sCount[I] >= o.blkIndent && (Z = !0), (q = n(o, I)) >= 0) {
      if (g = !0, j = o.bMarks[I] + o.tShift[I], S = Number(o.src.slice(j, q - 1)), Z && S !== 1) return !1;
    } else if ((q = t(o, I)) >= 0)
      g = !1;
    else
      return !1;
    if (Z && o.skipSpaces(q) >= o.eMarks[I])
      return !1;
    if (l)
      return !0;
    for (y = o.src.charCodeAt(q - 1), w = o.tokens.length, g ? (Y = o.push("ordered_list_open", "ol", 1), S !== 1 && (Y.attrs = [["start", S]])) : Y = o.push("bullet_list_open", "ul", 1), Y.map = x = [I, 0], Y.markup = String.fromCharCode(y), ie = !1, H = o.md.block.ruler.getRules("list"), R = o.parentType, o.parentType = "list"; I < a; ) {
      for (oe = q, C = o.eMarks[I], v = $ = o.sCount[I] + q - (o.bMarks[I] + o.tShift[I]); oe < C; ) {
        if (u = o.src.charCodeAt(oe), u === 9)
          $ += 4 - ($ + o.bsCount[I]) % 4;
        else if (u === 32)
          $++;
        else
          break;
        oe++;
      }
      if (f = oe, f >= C ? d = 1 : d = $ - v, d > 4 && (d = 1), p = v + d, Y = o.push("list_item_open", "li", 1), Y.markup = String.fromCharCode(y), Y.map = k = [I, 0], g && (Y.info = o.src.slice(j, q - 1)), B = o.tight, N = o.tShift[I], D = o.sCount[I], M = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = p, o.tight = !0, o.tShift[I] = f - o.bMarks[I], o.sCount[I] = $, f >= C && o.isEmpty(I + 1) ? o.line = Math.min(o.line + 2, a) : o.md.block.tokenize(o, I, a, !0), (!o.tight || ie) && (K = !1), ie = o.line - I > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = M, o.tShift[I] = N, o.sCount[I] = D, o.tight = B, Y = o.push("list_item_close", "li", -1), Y.markup = String.fromCharCode(y), I = o.line, k[1] = I, I >= a || o.sCount[I] < o.blkIndent || o.sCount[I] - o.blkIndent >= 4)
        break;
      for (V = !1, c = 0, m = H.length; c < m; c++)
        if (H[c](o, I, a, !0)) {
          V = !0;
          break;
        }
      if (V)
        break;
      if (g) {
        if (q = n(o, I), q < 0)
          break;
        j = o.bMarks[I] + o.tShift[I];
      } else if (q = t(o, I), q < 0)
        break;
      if (y !== o.src.charCodeAt(q - 1))
        break;
    }
    return g ? Y = o.push("ordered_list_close", "ol", -1) : Y = o.push("bullet_list_close", "ul", -1), Y.markup = String.fromCharCode(y), x[1] = I, o.line = I, o.parentType = R, K && r(o, w), !0;
  }, ol;
}
var sl, A2;
function Ebe() {
  if (A2) return sl;
  A2 = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return sl = function(r, s, o, i) {
    var a, l, u, f, c, p, d, v, g, k, m, x, w, y, S, C, $ = 0, M = r.bMarks[s] + r.tShift[s], R = r.eMarks[s], D = s + 1;
    if (r.sCount[s] - r.blkIndent >= 4 || r.src.charCodeAt(M) !== 91)
      return !1;
    for (; ++M < R; )
      if (r.src.charCodeAt(M) === 93 && r.src.charCodeAt(M - 1) !== 92) {
        if (M + 1 === R || r.src.charCodeAt(M + 1) !== 58)
          return !1;
        break;
      }
    for (f = r.lineMax, S = r.md.block.ruler.getRules("reference"), k = r.parentType, r.parentType = "reference"; D < f && !r.isEmpty(D); D++)
      if (!(r.sCount[D] - r.blkIndent > 3) && !(r.sCount[D] < 0)) {
        for (y = !1, p = 0, d = S.length; p < d; p++)
          if (S[p](r, D, f, !0)) {
            y = !0;
            break;
          }
        if (y)
          break;
      }
    for (w = r.getLines(s, D, r.blkIndent, !1).trim(), R = w.length, M = 1; M < R; M++) {
      if (a = w.charCodeAt(M), a === 91)
        return !1;
      if (a === 93) {
        g = M;
        break;
      } else a === 10 ? $++ : a === 92 && (M++, M < R && w.charCodeAt(M) === 10 && $++);
    }
    if (g < 0 || w.charCodeAt(g + 1) !== 58)
      return !1;
    for (M = g + 2; M < R; M++)
      if (a = w.charCodeAt(M), a === 10)
        $++;
      else if (!t(a)) break;
    if (m = r.md.helpers.parseLinkDestination(w, M, R), !m.ok || (c = r.md.normalizeLink(m.str), !r.md.validateLink(c)))
      return !1;
    for (M = m.pos, $ += m.lines, l = M, u = $, x = M; M < R; M++)
      if (a = w.charCodeAt(M), a === 10)
        $++;
      else if (!t(a)) break;
    for (m = r.md.helpers.parseLinkTitle(w, M, R), M < R && x !== M && m.ok ? (C = m.str, M = m.pos, $ += m.lines) : (C = "", M = l, $ = u); M < R && (a = w.charCodeAt(M), !!t(a)); )
      M++;
    if (M < R && w.charCodeAt(M) !== 10 && C)
      for (C = "", M = l, $ = u; M < R && (a = w.charCodeAt(M), !!t(a)); )
        M++;
    return M < R && w.charCodeAt(M) !== 10 || (v = e(w.slice(1, g)), !v) ? !1 : (i || (typeof r.env.references > "u" && (r.env.references = {}), typeof r.env.references[v] > "u" && (r.env.references[v] = { title: C, href: c }), r.parentType = k, r.line = s + $ + 1), !0);
  }, sl;
}
var il, T2;
function Abe() {
  return T2 || (T2 = 1, il = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ]), il;
}
var Rs = {}, M2;
function x_() {
  if (M2) return Rs;
  M2 = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", r = '"[^"]*"', s = "(?:" + t + "|" + n + "|" + r + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + s + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", l = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", f = "<![A-Z]+\\s+[^>]*>", c = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", p = new RegExp("^(?:" + i + "|" + a + "|" + l + "|" + u + "|" + f + "|" + c + ")"), d = new RegExp("^(?:" + i + "|" + a + ")");
  return Rs.HTML_TAG_RE = p, Rs.HTML_OPEN_CLOSE_TAG_RE = d, Rs;
}
var al, $2;
function Tbe() {
  if ($2) return al;
  $2 = 1;
  var e = Abe(), t = x_().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return al = function(s, o, i, a) {
    var l, u, f, c, p = s.bMarks[o] + s.tShift[o], d = s.eMarks[o];
    if (s.sCount[o] - s.blkIndent >= 4 || !s.md.options.html || s.src.charCodeAt(p) !== 60)
      return !1;
    for (c = s.src.slice(p, d), l = 0; l < n.length && !n[l][0].test(c); l++)
      ;
    if (l === n.length)
      return !1;
    if (a)
      return n[l][2];
    if (u = o + 1, !n[l][1].test(c)) {
      for (; u < i && !(s.sCount[u] < s.blkIndent); u++)
        if (p = s.bMarks[u] + s.tShift[u], d = s.eMarks[u], c = s.src.slice(p, d), n[l][1].test(c)) {
          c.length !== 0 && u++;
          break;
        }
    }
    return s.line = u, f = s.push("html_block", "", 0), f.map = [o, u], f.content = s.getLines(o, u, s.blkIndent, !0), !0;
  }, al;
}
var ll, L2;
function Mbe() {
  if (L2) return ll;
  L2 = 1;
  var e = nt().isSpace;
  return ll = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f), i !== 35 || f >= c))
      return !1;
    for (a = 1, i = n.src.charCodeAt(++f); i === 35 && f < c && a <= 6; )
      a++, i = n.src.charCodeAt(++f);
    return a > 6 || f < c && !e(i) ? !1 : (o || (c = n.skipSpacesBack(c, f), l = n.skipCharsBack(c, 35, f), l > f && e(n.src.charCodeAt(l - 1)) && (c = l), n.line = r + 1, u = n.push("heading_open", "h" + String(a), 1), u.markup = "########".slice(0, a), u.map = [r, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(f, c).trim(), u.map = [r, n.line], u.children = [], u = n.push("heading_close", "h" + String(a), -1), u.markup = "########".slice(0, a)), !0);
  }, ll;
}
var cl, I2;
function $be() {
  return I2 || (I2 = 1, cl = function(t, n, r) {
    var s, o, i, a, l, u, f, c, p, d = n + 1, v, g = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (v = t.parentType, t.parentType = "paragraph"; d < r && !t.isEmpty(d); d++)
      if (!(t.sCount[d] - t.blkIndent > 3)) {
        if (t.sCount[d] >= t.blkIndent && (u = t.bMarks[d] + t.tShift[d], f = t.eMarks[d], u < f && (p = t.src.charCodeAt(u), (p === 45 || p === 61) && (u = t.skipChars(u, p), u = t.skipSpaces(u), u >= f)))) {
          c = p === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[d] < 0)) {
          for (o = !1, i = 0, a = g.length; i < a; i++)
            if (g[i](t, d, r, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return c ? (s = t.getLines(n, d, t.blkIndent, !1).trim(), t.line = d + 1, l = t.push("heading_open", "h" + String(c), 1), l.markup = String.fromCharCode(p), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line - 1], l.children = [], l = t.push("heading_close", "h" + String(c), -1), l.markup = String.fromCharCode(p), t.parentType = v, !0) : !1;
  }), cl;
}
var ul, R2;
function Lbe() {
  return R2 || (R2 = 1, ul = function(t, n, r) {
    var s, o, i, a, l, u, f = n + 1, c = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; f < r && !t.isEmpty(f); f++)
      if (!(t.sCount[f] - t.blkIndent > 3) && !(t.sCount[f] < 0)) {
        for (o = !1, i = 0, a = c.length; i < a; i++)
          if (c[i](t, f, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return s = t.getLines(n, f, t.blkIndent, !1).trim(), t.line = f, l = t.push("paragraph_open", "p", 1), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line], l.children = [], l = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), ul;
}
var fl, O2;
function Ibe() {
  if (O2) return fl;
  O2 = 1;
  var e = kf(), t = nt().isSpace;
  function n(r, s, o, i) {
    var a, l, u, f, c, p, d, v;
    for (this.src = r, this.md = s, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", l = this.src, v = !1, u = f = p = d = 0, c = l.length; f < c; f++) {
      if (a = l.charCodeAt(f), !v)
        if (t(a)) {
          p++, a === 9 ? d += 4 - d % 4 : d++;
          continue;
        } else
          v = !0;
      (a === 10 || f === c - 1) && (a !== 10 && f++, this.bMarks.push(u), this.eMarks.push(f), this.tShift.push(p), this.sCount.push(d), this.bsCount.push(0), v = !1, p = 0, d = 0, u = f + 1);
    }
    this.bMarks.push(l.length), this.eMarks.push(l.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  return n.prototype.push = function(r, s, o) {
    var i = new e(r, s, o);
    return i.block = !0, o < 0 && this.level--, i.level = this.level, o > 0 && this.level++, this.tokens.push(i), i;
  }, n.prototype.isEmpty = function(s) {
    return this.bMarks[s] + this.tShift[s] >= this.eMarks[s];
  }, n.prototype.skipEmptyLines = function(s) {
    for (var o = this.lineMax; s < o && !(this.bMarks[s] + this.tShift[s] < this.eMarks[s]); s++)
      ;
    return s;
  }, n.prototype.skipSpaces = function(s) {
    for (var o, i = this.src.length; s < i && (o = this.src.charCodeAt(s), !!t(o)); s++)
      ;
    return s;
  }, n.prototype.skipSpacesBack = function(s, o) {
    if (s <= o)
      return s;
    for (; s > o; )
      if (!t(this.src.charCodeAt(--s)))
        return s + 1;
    return s;
  }, n.prototype.skipChars = function(s, o) {
    for (var i = this.src.length; s < i && this.src.charCodeAt(s) === o; s++)
      ;
    return s;
  }, n.prototype.skipCharsBack = function(s, o, i) {
    if (s <= i)
      return s;
    for (; s > i; )
      if (o !== this.src.charCodeAt(--s))
        return s + 1;
    return s;
  }, n.prototype.getLines = function(s, o, i, a) {
    var l, u, f, c, p, d, v, g = s;
    if (s >= o)
      return "";
    for (d = new Array(o - s), l = 0; g < o; g++, l++) {
      for (u = 0, v = c = this.bMarks[g], g + 1 < o || a ? p = this.eMarks[g] + 1 : p = this.eMarks[g]; c < p && u < i; ) {
        if (f = this.src.charCodeAt(c), t(f))
          f === 9 ? u += 4 - (u + this.bsCount[g]) % 4 : u++;
        else if (c - v < this.tShift[g])
          u++;
        else
          break;
        c++;
      }
      u > i ? d[l] = new Array(u - i + 1).join(" ") + this.src.slice(c, p) : d[l] = this.src.slice(c, p);
    }
    return d.join("");
  }, n.prototype.Token = e, fl = n, fl;
}
var dl, P2;
function Rbe() {
  if (P2) return dl;
  P2 = 1;
  var e = wf(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", ybe(), ["paragraph", "reference"]],
    ["code", wbe()],
    ["fence", kbe(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", xbe(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", Cbe(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", Sbe(), ["paragraph", "reference", "blockquote"]],
    ["reference", Ebe()],
    ["html_block", Tbe(), ["paragraph", "reference", "blockquote"]],
    ["heading", Mbe(), ["paragraph", "reference", "blockquote"]],
    ["lheading", $be()],
    ["paragraph", Lbe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1], { alt: (t[r][2] || []).slice() });
  }
  return n.prototype.tokenize = function(r, s, o) {
    for (var i, a, l, u = this.ruler.getRules(""), f = u.length, c = s, p = !1, d = r.md.options.maxNesting; c < o && (r.line = c = r.skipEmptyLines(c), !(c >= o || r.sCount[c] < r.blkIndent)); ) {
      if (r.level >= d) {
        r.line = o;
        break;
      }
      for (l = r.line, a = 0; a < f; a++)
        if (i = u[a](r, c, o, !1), i) {
          if (l >= r.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      r.tight = !p, r.isEmpty(r.line - 1) && (p = !0), c = r.line, c < o && r.isEmpty(c) && (p = !0, c++, r.line = c);
    }
  }, n.prototype.parse = function(r, s, o, i) {
    var a;
    r && (a = new this.State(r, s, o, i), this.tokenize(a, a.line, a.lineMax));
  }, n.prototype.State = Ibe(), dl = n, dl;
}
var pl, D2;
function Obe() {
  if (D2) return pl;
  D2 = 1;
  function e(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  return pl = function(n, r) {
    for (var s = n.pos; s < n.posMax && !e(n.src.charCodeAt(s)); )
      s++;
    return s === n.pos ? !1 : (r || (n.pending += n.src.slice(n.pos, s)), n.pos = s, !0);
  }, pl;
}
var hl, B2;
function Pbe() {
  if (B2) return hl;
  B2 = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return hl = function(n, r) {
    var s, o, i, a, l, u, f, c;
    return !n.md.options.linkify || n.linkLevel > 0 || (s = n.pos, o = n.posMax, s + 3 > o) || n.src.charCodeAt(s) !== 58 || n.src.charCodeAt(s + 1) !== 47 || n.src.charCodeAt(s + 2) !== 47 || (i = n.pending.match(e), !i) || (a = i[1], l = n.md.linkify.matchAtStart(n.src.slice(s - a.length)), !l) || (u = l.url, u.length <= a.length) || (u = u.replace(/\*+$/, ""), f = n.md.normalizeLink(u), !n.md.validateLink(f)) ? !1 : (r || (n.pending = n.pending.slice(0, -a.length), c = n.push("link_open", "a", 1), c.attrs = [["href", f]], c.markup = "linkify", c.info = "auto", c = n.push("text", "", 0), c.content = n.md.normalizeLinkText(u), c = n.push("link_close", "a", -1), c.markup = "linkify", c.info = "auto"), n.pos += u.length - a.length, !0);
  }, hl;
}
var gl, N2;
function Dbe() {
  if (N2) return gl;
  N2 = 1;
  var e = nt().isSpace;
  return gl = function(n, r) {
    var s, o, i, a = n.pos;
    if (n.src.charCodeAt(a) !== 10)
      return !1;
    if (s = n.pending.length - 1, o = n.posMax, !r)
      if (s >= 0 && n.pending.charCodeAt(s) === 32)
        if (s >= 1 && n.pending.charCodeAt(s - 1) === 32) {
          for (i = s - 1; i >= 1 && n.pending.charCodeAt(i - 1) === 32; ) i--;
          n.pending = n.pending.slice(0, i), n.push("hardbreak", "br", 0);
        } else
          n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
      else
        n.push("softbreak", "br", 0);
    for (a++; a < o && e(n.src.charCodeAt(a)); )
      a++;
    return n.pos = a, !0;
  }, gl;
}
var ml, F2;
function Bbe() {
  if (F2) return ml;
  F2 = 1;
  for (var e = nt().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
    t[r.charCodeAt(0)] = 1;
  }), ml = function(s, o) {
    var i, a, l, u, f, c = s.pos, p = s.posMax;
    if (s.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (i = s.src.charCodeAt(c), i === 10) {
      for (o || s.push("hardbreak", "br", 0), c++; c < p && (i = s.src.charCodeAt(c), !!e(i)); )
        c++;
      return s.pos = c, !0;
    }
    return u = s.src[c], i >= 55296 && i <= 56319 && c + 1 < p && (a = s.src.charCodeAt(c + 1), a >= 56320 && a <= 57343 && (u += s.src[c + 1], c++)), l = "\\" + u, o || (f = s.push("text_special", "", 0), i < 256 && t[i] !== 0 ? f.content = u : f.content = l, f.markup = l, f.info = "escape"), s.pos = c + 1, !0;
  }, ml;
}
var vl, q2;
function Nbe() {
  return q2 || (q2 = 1, vl = function(t, n) {
    var r, s, o, i, a, l, u, f, c = t.pos, p = t.src.charCodeAt(c);
    if (p !== 96)
      return !1;
    for (r = c, c++, s = t.posMax; c < s && t.src.charCodeAt(c) === 96; )
      c++;
    if (o = t.src.slice(r, c), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= r)
      return n || (t.pending += o), t.pos += u, !0;
    for (l = c; (a = t.src.indexOf("`", l)) !== -1; ) {
      for (l = a + 1; l < s && t.src.charCodeAt(l) === 96; )
        l++;
      if (f = l - a, f === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(c, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = l, !0;
      t.backticks[f] = a;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), vl;
}
var Os = {}, z2;
function H2() {
  if (z2) return Os;
  z2 = 1, Os.tokenize = function(n, r) {
    var s, o, i, a, l, u = n.pos, f = n.src.charCodeAt(u);
    if (r || f !== 126 || (o = n.scanDelims(n.pos, !0), a = o.length, l = String.fromCharCode(f), a < 2))
      return !1;
    for (a % 2 && (i = n.push("text", "", 0), i.content = l, a--), s = 0; s < a; s += 2)
      i = n.push("text", "", 0), i.content = l + l, n.delimiters.push({
        marker: f,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: n.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l = [], u = n.length;
    for (r = 0; r < u; r++)
      o = n[r], o.marker === 126 && o.end !== -1 && (i = n[o.end], a = t.tokens[o.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[i.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && l.push(i.token - 1));
    for (; l.length; ) {
      for (r = l.pop(), s = r + 1; s < t.tokens.length && t.tokens[s].type === "s_close"; )
        s++;
      s--, r !== s && (a = t.tokens[s], t.tokens[s] = t.tokens[r], t.tokens[r] = a);
    }
  }
  return Os.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Os;
}
var Ps = {}, j2;
function V2() {
  if (j2) return Ps;
  j2 = 1, Ps.tokenize = function(n, r) {
    var s, o, i, a = n.pos, l = n.src.charCodeAt(a);
    if (r || l !== 95 && l !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, l === 42), s = 0; s < o.length; s++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(l), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: l,
        // Total length of these series of delimiters.
        //
        length: o.length,
        // A position of the token this delimiter corresponds to.
        //
        token: n.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l, u = n.length;
    for (r = u - 1; r >= 0; r--)
      s = n[r], !(s.marker !== 95 && s.marker !== 42) && s.end !== -1 && (o = n[s.end], l = r > 0 && n[r - 1].end === s.end + 1 && // check that first two markers match and adjacent
      n[r - 1].marker === s.marker && n[r - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[s.end + 1].token === o.token + 1, a = String.fromCharCode(s.marker), i = t.tokens[s.token], i.type = l ? "strong_open" : "em_open", i.tag = l ? "strong" : "em", i.nesting = 1, i.markup = l ? a + a : a, i.content = "", i = t.tokens[o.token], i.type = l ? "strong_close" : "em_close", i.tag = l ? "strong" : "em", i.nesting = -1, i.markup = l ? a + a : a, i.content = "", l && (t.tokens[n[r - 1].token].content = "", t.tokens[n[s.end + 1].token].content = "", r--));
  }
  return Ps.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Ps;
}
var bl, U2;
function Fbe() {
  if (U2) return bl;
  U2 = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return bl = function(r, s) {
    var o, i, a, l, u, f, c, p, d, v = "", g = "", k = r.pos, m = r.posMax, x = r.pos, w = !0;
    if (r.src.charCodeAt(r.pos) !== 91 || (u = r.pos + 1, l = r.md.helpers.parseLinkLabel(r, r.pos, !0), l < 0))
      return !1;
    if (f = l + 1, f < m && r.src.charCodeAt(f) === 40) {
      for (w = !1, f++; f < m && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= m)
        return !1;
      if (x = f, c = r.md.helpers.parseLinkDestination(r.src, f, r.posMax), c.ok) {
        for (v = r.md.normalizeLink(c.str), r.md.validateLink(v) ? f = c.pos : v = "", x = f; f < m && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
        if (c = r.md.helpers.parseLinkTitle(r.src, f, r.posMax), f < m && x !== f && c.ok)
          for (g = c.str, f = c.pos; f < m && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
            ;
      }
      (f >= m || r.src.charCodeAt(f) !== 41) && (w = !0), f++;
    }
    if (w) {
      if (typeof r.env.references > "u")
        return !1;
      if (f < m && r.src.charCodeAt(f) === 91 ? (x = f + 1, f = r.md.helpers.parseLinkLabel(r, f), f >= 0 ? a = r.src.slice(x, f++) : f = l + 1) : f = l + 1, a || (a = r.src.slice(u, l)), p = r.env.references[e(a)], !p)
        return r.pos = k, !1;
      v = p.href, g = p.title;
    }
    return s || (r.pos = u, r.posMax = l, d = r.push("link_open", "a", 1), d.attrs = o = [["href", v]], g && o.push(["title", g]), r.linkLevel++, r.md.inline.tokenize(r), r.linkLevel--, d = r.push("link_close", "a", -1)), r.pos = f, r.posMax = m, !0;
  }, bl;
}
var _l, K2;
function qbe() {
  if (K2) return _l;
  K2 = 1;
  var e = nt().normalizeReference, t = nt().isSpace;
  return _l = function(r, s) {
    var o, i, a, l, u, f, c, p, d, v, g, k, m, x = "", w = r.pos, y = r.posMax;
    if (r.src.charCodeAt(r.pos) !== 33 || r.src.charCodeAt(r.pos + 1) !== 91 || (f = r.pos + 2, u = r.md.helpers.parseLinkLabel(r, r.pos + 1, !1), u < 0))
      return !1;
    if (c = u + 1, c < y && r.src.charCodeAt(c) === 40) {
      for (c++; c < y && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (c >= y)
        return !1;
      for (m = c, d = r.md.helpers.parseLinkDestination(r.src, c, r.posMax), d.ok && (x = r.md.normalizeLink(d.str), r.md.validateLink(x) ? c = d.pos : x = ""), m = c; c < y && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (d = r.md.helpers.parseLinkTitle(r.src, c, r.posMax), c < y && m !== c && d.ok)
        for (v = d.str, c = d.pos; c < y && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
          ;
      else
        v = "";
      if (c >= y || r.src.charCodeAt(c) !== 41)
        return r.pos = w, !1;
      c++;
    } else {
      if (typeof r.env.references > "u")
        return !1;
      if (c < y && r.src.charCodeAt(c) === 91 ? (m = c + 1, c = r.md.helpers.parseLinkLabel(r, c), c >= 0 ? l = r.src.slice(m, c++) : c = u + 1) : c = u + 1, l || (l = r.src.slice(f, u)), p = r.env.references[e(l)], !p)
        return r.pos = w, !1;
      x = p.href, v = p.title;
    }
    return s || (a = r.src.slice(f, u), r.md.inline.parse(
      a,
      r.md,
      r.env,
      k = []
    ), g = r.push("image", "img", 0), g.attrs = o = [["src", x], ["alt", ""]], g.children = k, g.content = a, v && o.push(["title", v])), r.pos = c, r.posMax = y, !0;
  }, _l;
}
var yl, G2;
function zbe() {
  if (G2) return yl;
  G2 = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return yl = function(r, s) {
    var o, i, a, l, u, f, c = r.pos;
    if (r.src.charCodeAt(c) !== 60)
      return !1;
    for (u = r.pos, f = r.posMax; ; ) {
      if (++c >= f || (l = r.src.charCodeAt(c), l === 60)) return !1;
      if (l === 62) break;
    }
    return o = r.src.slice(u + 1, c), t.test(o) ? (i = r.md.normalizeLink(o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = r.md.normalizeLink("mailto:" + o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : !1;
  }, yl;
}
var wl, W2;
function Hbe() {
  if (W2) return wl;
  W2 = 1;
  var e = x_().HTML_TAG_RE;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  function r(s) {
    var o = s | 32;
    return o >= 97 && o <= 122;
  }
  return wl = function(o, i) {
    var a, l, u, f, c = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(c) !== 60 || c + 2 >= u) || (a = o.src.charCodeAt(c + 1), a !== 33 && a !== 63 && a !== 47 && !r(a)) || (l = o.src.slice(c).match(e), !l) ? !1 : (i || (f = o.push("html_inline", "", 0), f.content = l[0], t(f.content) && o.linkLevel++, n(f.content) && o.linkLevel--), o.pos += l[0].length, !0);
  }, wl;
}
var kl, Z2;
function jbe() {
  if (Z2) return kl;
  Z2 = 1;
  var e = b_(), t = nt().has, n = nt().isValidEntityCode, r = nt().fromCodePoint, s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return kl = function(a, l) {
    var u, f, c, p, d = a.pos, v = a.posMax;
    if (a.src.charCodeAt(d) !== 38 || d + 1 >= v) return !1;
    if (u = a.src.charCodeAt(d + 1), u === 35) {
      if (c = a.src.slice(d).match(s), c)
        return l || (f = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), p = a.push("text_special", "", 0), p.content = n(f) ? r(f) : r(65533), p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    } else if (c = a.src.slice(d).match(o), c && t(e, c[1]))
      return l || (p = a.push("text_special", "", 0), p.content = e[c[1]], p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    return !1;
  }, kl;
}
var xl, X2;
function Vbe() {
  if (X2) return xl;
  X2 = 1;
  function e(t) {
    var n, r, s, o, i, a, l, u, f = {}, c = t.length;
    if (c) {
      var p = 0, d = -2, v = [];
      for (n = 0; n < c; n++)
        if (s = t[n], v.push(0), (t[p].marker !== s.marker || d !== s.token - 1) && (p = n), d = s.token, s.length = s.length || 0, !!s.close) {
          for (f.hasOwnProperty(s.marker) || (f[s.marker] = [-1, -1, -1, -1, -1, -1]), i = f[s.marker][(s.open ? 3 : 0) + s.length % 3], r = p - v[p] - 1, a = r; r > i; r -= v[r] + 1)
            if (o = t[r], o.marker === s.marker && o.open && o.end < 0 && (l = !1, (o.close || s.open) && (o.length + s.length) % 3 === 0 && (o.length % 3 !== 0 || s.length % 3 !== 0) && (l = !0), !l)) {
              u = r > 0 && !t[r - 1].open ? v[r - 1] + 1 : 0, v[n] = n - r + u, v[r] = u, s.open = !1, o.end = n, o.close = !1, a = -1, d = -2;
              break;
            }
          a !== -1 && (f[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
        }
    }
  }
  return xl = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(s[r].delimiters);
  }, xl;
}
var Cl, J2;
function Ube() {
  return J2 || (J2 = 1, Cl = function(t) {
    var n, r, s = 0, o = t.tokens, i = t.tokens.length;
    for (n = r = 0; n < i; n++)
      o[n].nesting < 0 && s--, o[n].level = s, o[n].nesting > 0 && s++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
    n !== r && (o.length = r);
  }), Cl;
}
var Sl, Y2;
function Kbe() {
  if (Y2) return Sl;
  Y2 = 1;
  var e = kf(), t = nt().isWhiteSpace, n = nt().isPunctChar, r = nt().isMdAsciiPunct;
  function s(o, i, a, l) {
    this.src = o, this.env = a, this.md = i, this.tokens = l, this.tokens_meta = Array(l.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return s.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, s.prototype.push = function(o, i, a) {
    this.pending && this.pushPending();
    var l = new e(o, i, a), u = null;
    return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), l.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(l), this.tokens_meta.push(u), l;
  }, s.prototype.scanDelims = function(o, i) {
    var a = o, l, u, f, c, p, d, v, g, k, m = !0, x = !0, w = this.posMax, y = this.src.charCodeAt(o);
    for (l = o > 0 ? this.src.charCodeAt(o - 1) : 32; a < w && this.src.charCodeAt(a) === y; )
      a++;
    return f = a - o, u = a < w ? this.src.charCodeAt(a) : 32, v = r(l) || n(String.fromCharCode(l)), k = r(u) || n(String.fromCharCode(u)), d = t(l), g = t(u), g ? m = !1 : k && (d || v || (m = !1)), d ? x = !1 : v && (g || k || (x = !1)), i ? (c = m, p = x) : (c = m && (!x || v), p = x && (!m || k)), {
      can_open: c,
      can_close: p,
      length: f
    };
  }, s.prototype.Token = e, Sl = s, Sl;
}
var El, Q2;
function Gbe() {
  if (Q2) return El;
  Q2 = 1;
  var e = wf(), t = [
    ["text", Obe()],
    ["linkify", Pbe()],
    ["newline", Dbe()],
    ["escape", Bbe()],
    ["backticks", Nbe()],
    ["strikethrough", H2().tokenize],
    ["emphasis", V2().tokenize],
    ["link", Fbe()],
    ["image", qbe()],
    ["autolink", zbe()],
    ["html_inline", Hbe()],
    ["entity", jbe()]
  ], n = [
    ["balance_pairs", Vbe()],
    ["strikethrough", H2().postProcess],
    ["emphasis", V2().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", Ube()]
  ];
  function r() {
    var s;
    for (this.ruler = new e(), s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
    for (this.ruler2 = new e(), s = 0; s < n.length; s++)
      this.ruler2.push(n[s][0], n[s][1]);
  }
  return r.prototype.skipToken = function(s) {
    var o, i, a = s.pos, l = this.ruler.getRules(""), u = l.length, f = s.md.options.maxNesting, c = s.cache;
    if (typeof c[a] < "u") {
      s.pos = c[a];
      return;
    }
    if (s.level < f) {
      for (i = 0; i < u; i++)
        if (s.level++, o = l[i](s, !0), s.level--, o) {
          if (a >= s.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      s.pos = s.posMax;
    o || s.pos++, c[a] = s.pos;
  }, r.prototype.tokenize = function(s) {
    for (var o, i, a, l = this.ruler.getRules(""), u = l.length, f = s.posMax, c = s.md.options.maxNesting; s.pos < f; ) {
      if (a = s.pos, s.level < c) {
        for (i = 0; i < u; i++)
          if (o = l[i](s, !1), o) {
            if (a >= s.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (s.pos >= f)
          break;
        continue;
      }
      s.pending += s.src[s.pos++];
    }
    s.pending && s.pushPending();
  }, r.prototype.parse = function(s, o, i, a) {
    var l, u, f, c = new this.State(s, o, i, a);
    for (this.tokenize(c), u = this.ruler2.getRules(""), f = u.length, l = 0; l < f; l++)
      u[l](c);
  }, r.prototype.State = Kbe(), El = r, El;
}
var Al, ep;
function Wbe() {
  return ep || (ep = 1, Al = function(e) {
    var t = {};
    e = e || {}, t.src_Any = y_().source, t.src_Cc = w_().source, t.src_Z = k_().source, t.src_P = yf().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><|]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`||]|" + t.src_ZPCc + "))((?![$+<=>^`||])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`||]|" + t.src_ZPCc + "))((?![$+<=>^`||])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), Al;
}
var Tl, tp;
function Zbe() {
  if (tp) return Tl;
  tp = 1;
  function e(w) {
    var y = Array.prototype.slice.call(arguments, 1);
    return y.forEach(function(S) {
      S && Object.keys(S).forEach(function(C) {
        w[C] = S[C];
      });
    }), w;
  }
  function t(w) {
    return Object.prototype.toString.call(w);
  }
  function n(w) {
    return t(w) === "[object String]";
  }
  function r(w) {
    return t(w) === "[object Object]";
  }
  function s(w) {
    return t(w) === "[object RegExp]";
  }
  function o(w) {
    return t(w) === "[object Function]";
  }
  function i(w) {
    return w.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function l(w) {
    return Object.keys(w || {}).reduce(function(y, S) {
      return y || a.hasOwnProperty(S);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(w, y, S) {
        var C = w.slice(y);
        return S.re.http || (S.re.http = new RegExp(
          "^\\/\\/" + S.re.src_auth + S.re.src_host_port_strict + S.re.src_path,
          "i"
        )), S.re.http.test(C) ? C.match(S.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(w, y, S) {
        var C = w.slice(y);
        return S.re.no_http || (S.re.no_http = new RegExp(
          "^" + S.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + S.re.src_domain + ")\\.)+" + S.re.src_domain_root + ")" + S.re.src_port + S.re.src_host_terminator + S.re.src_path,
          "i"
        )), S.re.no_http.test(C) ? y >= 3 && w[y - 3] === ":" || y >= 3 && w[y - 3] === "/" ? 0 : C.match(S.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(w, y, S) {
        var C = w.slice(y);
        return S.re.mailto || (S.re.mailto = new RegExp(
          "^" + S.re.src_email_name + "@" + S.re.src_host_strict,
          "i"
        )), S.re.mailto.test(C) ? C.match(S.re.mailto)[0].length : 0;
      }
    }
  }, f = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|??".split("|");
  function p(w) {
    w.__index__ = -1, w.__text_cache__ = "";
  }
  function d(w) {
    return function(y, S) {
      var C = y.slice(S);
      return w.test(C) ? C.match(w)[0].length : 0;
    };
  }
  function v() {
    return function(w, y) {
      y.normalize(w);
    };
  }
  function g(w) {
    var y = w.re = Wbe()(w.__opts__), S = w.__tlds__.slice();
    w.onCompile(), w.__tlds_replaced__ || S.push(f), S.push(y.src_xn), y.src_tlds = S.join("|");
    function C(D) {
      return D.replace("%TLDS%", y.src_tlds);
    }
    y.email_fuzzy = RegExp(C(y.tpl_email_fuzzy), "i"), y.link_fuzzy = RegExp(C(y.tpl_link_fuzzy), "i"), y.link_no_ip_fuzzy = RegExp(C(y.tpl_link_no_ip_fuzzy), "i"), y.host_fuzzy_test = RegExp(C(y.tpl_host_fuzzy_test), "i");
    var $ = [];
    w.__compiled__ = {};
    function M(D, N) {
      throw new Error('(LinkifyIt) Invalid schema "' + D + '": ' + N);
    }
    Object.keys(w.__schemas__).forEach(function(D) {
      var N = w.__schemas__[D];
      if (N !== null) {
        var B = { validate: null, link: null };
        if (w.__compiled__[D] = B, r(N)) {
          s(N.validate) ? B.validate = d(N.validate) : o(N.validate) ? B.validate = N.validate : M(D, N), o(N.normalize) ? B.normalize = N.normalize : N.normalize ? M(D, N) : B.normalize = v();
          return;
        }
        if (n(N)) {
          $.push(D);
          return;
        }
        M(D, N);
      }
    }), $.forEach(function(D) {
      w.__compiled__[w.__schemas__[D]] && (w.__compiled__[D].validate = w.__compiled__[w.__schemas__[D]].validate, w.__compiled__[D].normalize = w.__compiled__[w.__schemas__[D]].normalize);
    }), w.__compiled__[""] = { validate: null, normalize: v() };
    var R = Object.keys(w.__compiled__).filter(function(D) {
      return D.length > 0 && w.__compiled__[D];
    }).map(i).join("|");
    w.re.schema_test = RegExp("(^|(?!_)(?:[><|]|" + y.src_ZPCc + "))(" + R + ")", "i"), w.re.schema_search = RegExp("(^|(?!_)(?:[><|]|" + y.src_ZPCc + "))(" + R + ")", "ig"), w.re.schema_at_start = RegExp("^" + w.re.schema_search.source, "i"), w.re.pretest = RegExp(
      "(" + w.re.schema_test.source + ")|(" + w.re.host_fuzzy_test.source + ")|@",
      "i"
    ), p(w);
  }
  function k(w, y) {
    var S = w.__index__, C = w.__last_index__, $ = w.__text_cache__.slice(S, C);
    this.schema = w.__schema__.toLowerCase(), this.index = S + y, this.lastIndex = C + y, this.raw = $, this.text = $, this.url = $;
  }
  function m(w, y) {
    var S = new k(w, y);
    return w.__compiled__[S.schema].normalize(S, w), S;
  }
  function x(w, y) {
    if (!(this instanceof x))
      return new x(w, y);
    y || l(w) && (y = w, w = {}), this.__opts__ = e({}, a, y), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, w), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, g(this);
  }
  return x.prototype.add = function(y, S) {
    return this.__schemas__[y] = S, g(this), this;
  }, x.prototype.set = function(y) {
    return this.__opts__ = e(this.__opts__, y), this;
  }, x.prototype.test = function(y) {
    if (this.__text_cache__ = y, this.__index__ = -1, !y.length)
      return !1;
    var S, C, $, M, R, D, N, B, oe;
    if (this.re.schema_test.test(y)) {
      for (N = this.re.schema_search, N.lastIndex = 0; (S = N.exec(y)) !== null; )
        if (M = this.testSchemaAt(y, S[2], N.lastIndex), M) {
          this.__schema__ = S[2], this.__index__ = S.index + S[1].length, this.__last_index__ = S.index + S[0].length + M;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (B = y.search(this.re.host_fuzzy_test), B >= 0 && (this.__index__ < 0 || B < this.__index__) && (C = y.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (R = C.index + C[1].length, (this.__index__ < 0 || R < this.__index__) && (this.__schema__ = "", this.__index__ = R, this.__last_index__ = C.index + C[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (oe = y.indexOf("@"), oe >= 0 && ($ = y.match(this.re.email_fuzzy)) !== null && (R = $.index + $[1].length, D = $.index + $[0].length, (this.__index__ < 0 || R < this.__index__ || R === this.__index__ && D > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = R, this.__last_index__ = D))), this.__index__ >= 0;
  }, x.prototype.pretest = function(y) {
    return this.re.pretest.test(y);
  }, x.prototype.testSchemaAt = function(y, S, C) {
    return this.__compiled__[S.toLowerCase()] ? this.__compiled__[S.toLowerCase()].validate(y, C, this) : 0;
  }, x.prototype.match = function(y) {
    var S = 0, C = [];
    this.__index__ >= 0 && this.__text_cache__ === y && (C.push(m(this, S)), S = this.__last_index__);
    for (var $ = S ? y.slice(S) : y; this.test($); )
      C.push(m(this, S)), $ = $.slice(this.__last_index__), S += this.__last_index__;
    return C.length ? C : null;
  }, x.prototype.matchAtStart = function(y) {
    if (this.__text_cache__ = y, this.__index__ = -1, !y.length) return null;
    var S = this.re.schema_at_start.exec(y);
    if (!S) return null;
    var C = this.testSchemaAt(y, S[2], S[0].length);
    return C ? (this.__schema__ = S[2], this.__index__ = S.index + S[1].length, this.__last_index__ = S.index + S[0].length + C, m(this, 0)) : null;
  }, x.prototype.tlds = function(y, S) {
    return y = Array.isArray(y) ? y : [y], S ? (this.__tlds__ = this.__tlds__.concat(y).sort().filter(function(C, $, M) {
      return C !== M[$ - 1];
    }).reverse(), g(this), this) : (this.__tlds__ = y.slice(), this.__tlds_replaced__ = !0, g(this), this);
  }, x.prototype.normalize = function(y) {
    y.schema || (y.url = "http://" + y.url), y.schema === "mailto:" && !/^mailto:/i.test(y.url) && (y.url = "mailto:" + y.url);
  }, x.prototype.onCompile = function() {
  }, Tl = x, Tl;
}
var Oo = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
var Xbe = Oo.exports, np;
function Jbe() {
  return np || (np = 1, (function(e, t) {
    (function(n) {
      var r = t && !t.nodeType && t, s = e && !e.nodeType && e, o = typeof to == "object" && to;
      (o.global === o || o.window === o || o.self === o) && (n = o);
      var i, a = 2147483647, l = 36, u = 1, f = 26, c = 38, p = 700, d = 72, v = 128, g = "-", k = /^xn--/, m = /[^\x20-\x7E]/, x = /[\x2E\u3002\uFF0E\uFF61]/g, w = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, y = l - u, S = Math.floor, C = String.fromCharCode, $;
      function M(I) {
        throw new RangeError(w[I]);
      }
      function R(I, Z) {
        for (var K = I.length, me = []; K--; )
          me[K] = Z(I[K]);
        return me;
      }
      function D(I, Z) {
        var K = I.split("@"), me = "";
        K.length > 1 && (me = K[0] + "@", I = K[1]), I = I.replace(x, ".");
        var Ee = I.split("."), Oe = R(Ee, Z).join(".");
        return me + Oe;
      }
      function N(I) {
        for (var Z = [], K = 0, me = I.length, Ee, Oe; K < me; )
          Ee = I.charCodeAt(K++), Ee >= 55296 && Ee <= 56319 && K < me ? (Oe = I.charCodeAt(K++), (Oe & 64512) == 56320 ? Z.push(((Ee & 1023) << 10) + (Oe & 1023) + 65536) : (Z.push(Ee), K--)) : Z.push(Ee);
        return Z;
      }
      function B(I) {
        return R(I, function(Z) {
          var K = "";
          return Z > 65535 && (Z -= 65536, K += C(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023), K += C(Z), K;
        }).join("");
      }
      function oe(I) {
        return I - 48 < 10 ? I - 22 : I - 65 < 26 ? I - 65 : I - 97 < 26 ? I - 97 : l;
      }
      function q(I, Z) {
        return I + 22 + 75 * (I < 26) - ((Z != 0) << 5);
      }
      function ie(I, Z, K) {
        var me = 0;
        for (I = K ? S(I / p) : I >> 1, I += S(I / Z); I > y * f >> 1; me += l)
          I = S(I / y);
        return S(me + (y + 1) * I / (I + c));
      }
      function j(I) {
        var Z = [], K = I.length, me, Ee = 0, Oe = v, Pe = d, Ge, ze, dt, pe, Me, T, L, z, J;
        for (Ge = I.lastIndexOf(g), Ge < 0 && (Ge = 0), ze = 0; ze < Ge; ++ze)
          I.charCodeAt(ze) >= 128 && M("not-basic"), Z.push(I.charCodeAt(ze));
        for (dt = Ge > 0 ? Ge + 1 : 0; dt < K; ) {
          for (pe = Ee, Me = 1, T = l; dt >= K && M("invalid-input"), L = oe(I.charCodeAt(dt++)), (L >= l || L > S((a - Ee) / Me)) && M("overflow"), Ee += L * Me, z = T <= Pe ? u : T >= Pe + f ? f : T - Pe, !(L < z); T += l)
            J = l - z, Me > S(a / J) && M("overflow"), Me *= J;
          me = Z.length + 1, Pe = ie(Ee - pe, me, pe == 0), S(Ee / me) > a - Oe && M("overflow"), Oe += S(Ee / me), Ee %= me, Z.splice(Ee++, 0, Oe);
        }
        return B(Z);
      }
      function V(I) {
        var Z, K, me, Ee, Oe, Pe, Ge, ze, dt, pe, Me, T = [], L, z, J, X;
        for (I = N(I), L = I.length, Z = v, K = 0, Oe = d, Pe = 0; Pe < L; ++Pe)
          Me = I[Pe], Me < 128 && T.push(C(Me));
        for (me = Ee = T.length, Ee && T.push(g); me < L; ) {
          for (Ge = a, Pe = 0; Pe < L; ++Pe)
            Me = I[Pe], Me >= Z && Me < Ge && (Ge = Me);
          for (z = me + 1, Ge - Z > S((a - K) / z) && M("overflow"), K += (Ge - Z) * z, Z = Ge, Pe = 0; Pe < L; ++Pe)
            if (Me = I[Pe], Me < Z && ++K > a && M("overflow"), Me == Z) {
              for (ze = K, dt = l; pe = dt <= Oe ? u : dt >= Oe + f ? f : dt - Oe, !(ze < pe); dt += l)
                X = ze - pe, J = l - pe, T.push(
                  C(q(pe + X % J, 0))
                ), ze = S(X / J);
              T.push(C(q(ze, 0))), Oe = ie(K, z, me == Ee), K = 0, ++me;
            }
          ++K, ++Z;
        }
        return T.join("");
      }
      function H(I) {
        return D(I, function(Z) {
          return k.test(Z) ? j(Z.slice(4).toLowerCase()) : Z;
        });
      }
      function Y(I) {
        return D(I, function(Z) {
          return m.test(Z) ? "xn--" + V(Z) : Z;
        });
      }
      if (i = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: "1.4.1",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
          decode: N,
          encode: B
        },
        decode: j,
        encode: V,
        toASCII: Y,
        toUnicode: H
      }, r && s)
        if (e.exports == r)
          s.exports = i;
        else
          for ($ in i)
            i.hasOwnProperty($) && (r[$] = i[$]);
      else
        n.punycode = i;
    })(Xbe);
  })(Oo, Oo.exports)), Oo.exports;
}
var Ml, rp;
function Ybe() {
  return rp || (rp = 1, Ml = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }), Ml;
}
var $l, op;
function Qbe() {
  return op || (op = 1, $l = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  }), $l;
}
var Ll, sp;
function e_e() {
  return sp || (sp = 1, Ll = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }), Ll;
}
var Il, ip;
function t_e() {
  if (ip) return Il;
  ip = 1;
  var e = nt(), t = cbe(), n = ube(), r = _be(), s = Rbe(), o = Gbe(), i = Zbe(), a = __(), l = Jbe(), u = {
    default: Ybe(),
    zero: Qbe(),
    commonmark: e_e()
  }, f = /^(vbscript|javascript|file|data):/, c = /^data:image\/(gif|png|jpeg|webp);/;
  function p(m) {
    var x = m.trim().toLowerCase();
    return f.test(x) ? !!c.test(x) : !0;
  }
  var d = ["http:", "https:", "mailto:"];
  function v(m) {
    var x = a.parse(m, !0);
    if (x.hostname && (!x.protocol || d.indexOf(x.protocol) >= 0))
      try {
        x.hostname = l.toASCII(x.hostname);
      } catch {
      }
    return a.encode(a.format(x));
  }
  function g(m) {
    var x = a.parse(m, !0);
    if (x.hostname && (!x.protocol || d.indexOf(x.protocol) >= 0))
      try {
        x.hostname = l.toUnicode(x.hostname);
      } catch {
      }
    return a.decode(a.format(x), a.decode.defaultChars + "%");
  }
  function k(m, x) {
    if (!(this instanceof k))
      return new k(m, x);
    x || e.isString(m) || (x = m || {}, m = "default"), this.inline = new o(), this.block = new s(), this.core = new r(), this.renderer = new n(), this.linkify = new i(), this.validateLink = p, this.normalizeLink = v, this.normalizeLinkText = g, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(m), x && this.set(x);
  }
  return k.prototype.set = function(m) {
    return e.assign(this.options, m), this;
  }, k.prototype.configure = function(m) {
    var x = this, w;
    if (e.isString(m) && (w = m, m = u[w], !m))
      throw new Error('Wrong `markdown-it` preset "' + w + '", check name');
    if (!m)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return m.options && x.set(m.options), m.components && Object.keys(m.components).forEach(function(y) {
      m.components[y].rules && x[y].ruler.enableOnly(m.components[y].rules), m.components[y].rules2 && x[y].ruler2.enableOnly(m.components[y].rules2);
    }), this;
  }, k.prototype.enable = function(m, x) {
    var w = [];
    Array.isArray(m) || (m = [m]), ["core", "block", "inline"].forEach(function(S) {
      w = w.concat(this[S].ruler.enable(m, !0));
    }, this), w = w.concat(this.inline.ruler2.enable(m, !0));
    var y = m.filter(function(S) {
      return w.indexOf(S) < 0;
    });
    if (y.length && !x)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + y);
    return this;
  }, k.prototype.disable = function(m, x) {
    var w = [];
    Array.isArray(m) || (m = [m]), ["core", "block", "inline"].forEach(function(S) {
      w = w.concat(this[S].ruler.disable(m, !0));
    }, this), w = w.concat(this.inline.ruler2.disable(m, !0));
    var y = m.filter(function(S) {
      return w.indexOf(S) < 0;
    });
    if (y.length && !x)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + y);
    return this;
  }, k.prototype.use = function(m) {
    var x = [this].concat(Array.prototype.slice.call(arguments, 1));
    return m.apply(m, x), this;
  }, k.prototype.parse = function(m, x) {
    if (typeof m != "string")
      throw new Error("Input data should be a String");
    var w = new this.core.State(m, this, x);
    return this.core.process(w), w.tokens;
  }, k.prototype.render = function(m, x) {
    return x = x || {}, this.renderer.render(this.parse(m, x), this.options, x);
  }, k.prototype.parseInline = function(m, x) {
    var w = new this.core.State(m, this, x);
    return w.inlineMode = !0, this.core.process(w), w.tokens;
  }, k.prototype.renderInline = function(m, x) {
    return x = x || {}, this.renderer.render(this.parseInline(m, x), this.options, x);
  }, Il = k, Il;
}
var Rl, ap;
function n_e() {
  return ap || (ap = 1, Rl = t_e()), Rl;
}
var r_e = n_e();
const o_e = /* @__PURE__ */ Hu(r_e);
var Ol, lp;
function s_e() {
  if (lp) return Ol;
  lp = 1;
  function e(r, s) {
    var o, i, a = r.attrs[r.attrIndex("href")][1];
    for (o = 0; o < s.length; ++o) {
      if (i = s[o], typeof i.matcher == "function") {
        if (i.matcher(a, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(r, s, o) {
    Object.keys(o).forEach(function(i) {
      var a, l = o[i];
      i === "className" && (i = "class"), a = s[r].attrIndex(i), a < 0 ? s[r].attrPush([i, l]) : s[r].attrs[a][1] = l;
    });
  }
  function n(r, s) {
    s ? s = Array.isArray(s) ? s : [s] : s = [], Object.freeze(s);
    var o = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(i, a, l, u, f) {
      var c = e(i[a], s), p = c && c.attrs;
      return p && t(a, i, p), o(i, a, l, u, f);
    };
  }
  return n.defaultRender = function(r, s, o, i, a) {
    return a.renderToken(r, s, o);
  }, Ol = n, Ol;
}
var i_e = s_e();
const a_e = /* @__PURE__ */ Hu(i_e);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const l_e = () => {
}, di = Array.isArray;
function cp(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function c_e(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!u_e(e[n], t[n]))
      return !1;
  return !0;
}
function u_e(e, t) {
  return di(e) ? up(e, t) : di(t) ? up(t, e) : e === t;
}
function up(e, t) {
  return di(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
var fp;
(function(e) {
  e.pop = "pop", e.push = "push";
})(fp || (fp = {}));
var dp;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(dp || (dp = {}));
var pp;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(pp || (pp = {}));
const C_ = Symbol(""), f_e = Symbol("");
function hp(e) {
  const t = qe(C_), n = qe(f_e), r = P(() => {
    const l = b(e.to);
    return t.resolve(l);
  }), s = P(() => {
    const { matched: l } = r.value, { length: u } = l, f = l[u - 1], c = n.matched;
    if (!f || !c.length)
      return -1;
    const p = c.findIndex(cp.bind(null, f));
    if (p > -1)
      return p;
    const d = mp(l[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      mp(f) === d && // avoid comparing the child with its parent
      c[c.length - 1].path !== d ? c.findIndex(cp.bind(null, l[u - 2])) : p
    );
  }), o = P(() => s.value > -1 && g_e(n.params, r.value.params)), i = P(() => s.value > -1 && s.value === n.matched.length - 1 && c_e(n.params, r.value.params));
  function a(l = {}) {
    if (h_e(l)) {
      const u = t[b(e.replace) ? "replace" : "push"](
        b(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(l_e);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: P(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function d_e(e) {
  return e.length === 1 ? e[0] : e;
}
const p_e = /* @__PURE__ */ re({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: hp,
  setup(e, { slots: t }) {
    const n = xn(hp(e)), { options: r } = qe(C_), s = P(() => ({
      [vp(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [vp(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && d_e(t.default(n));
      return e.custom ? o : vn("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), gp = p_e;
function h_e(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function g_e(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s)
        return !1;
    } else if (!di(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function mp(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const vp = (e, t, n) => e ?? t ?? n;
v_("color-picker");
({
  ...g_
});
({
  ...mu.props
});
var Ds = { exports: {} }, pt = {}, Bs = { exports: {} }, Rr = {}, bp;
function S_() {
  if (bp) return Rr;
  bp = 1;
  function e() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function t(o, i, a) {
  }
  function n(o, i, a) {
  }
  var r = /javascript\s*\:/img;
  function s(o, i) {
    return r.test(i) ? "" : i;
  }
  return Rr.whiteList = e(), Rr.getDefaultWhiteList = e, Rr.onAttr = t, Rr.onIgnoreAttr = n, Rr.safeAttrValue = s, Rr;
}
var Pl, _p;
function E_() {
  return _p || (_p = 1, Pl = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(e) {
      return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
    }
  }), Pl;
}
var Dl, yp;
function m_e() {
  if (yp) return Dl;
  yp = 1;
  var e = E_();
  function t(n, r) {
    n = e.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var s = n.length, o = !1, i = 0, a = 0, l = "";
    function u() {
      if (!o) {
        var p = e.trim(n.slice(i, a)), d = p.indexOf(":");
        if (d !== -1) {
          var v = e.trim(p.slice(0, d)), g = e.trim(p.slice(d + 1));
          if (v) {
            var k = r(i, l.length, v, g, p);
            k && (l += k + "; ");
          }
        }
      }
      i = a + 1;
    }
    for (; a < s; a++) {
      var f = n[a];
      if (f === "/" && n[a + 1] === "*") {
        var c = n.indexOf("*/", a + 2);
        if (c === -1) break;
        a = c + 1, i = a + 1, o = !1;
      } else f === "(" ? o = !0 : f === ")" ? o = !1 : f === ";" ? o || u() : f === `
` && u();
    }
    return e.trim(l);
  }
  return Dl = t, Dl;
}
var Bl, wp;
function v_e() {
  if (wp) return Bl;
  wp = 1;
  var e = S_(), t = m_e();
  E_();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var i = {};
    for (var a in o)
      i[a] = o[a];
    return i;
  }
  function s(o) {
    o = r(o || {}), o.whiteList = o.whiteList || e.whiteList, o.onAttr = o.onAttr || e.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || e.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || e.safeAttrValue, this.options = o;
  }
  return s.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var i = this, a = i.options, l = a.whiteList, u = a.onAttr, f = a.onIgnoreAttr, c = a.safeAttrValue, p = t(o, function(d, v, g, k, m) {
      var x = l[g], w = !1;
      if (x === !0 ? w = x : typeof x == "function" ? w = x(k) : x instanceof RegExp && (w = x.test(k)), w !== !0 && (w = !1), k = c(g, k), !!k) {
        var y = {
          position: v,
          sourcePosition: d,
          source: m,
          isWhite: w
        };
        if (w) {
          var S = u(g, k, y);
          return n(S) ? g + ":" + k : S;
        } else {
          var S = f(g, k, y);
          if (!n(S))
            return S;
        }
      }
    });
    return p;
  }, Bl = s, Bl;
}
var kp;
function vu() {
  return kp || (kp = 1, (function(e, t) {
    var n = S_(), r = v_e();
    function s(i, a) {
      var l = new r(a);
      return l.process(i);
    }
    t = e.exports = s, t.FilterCSS = r;
    for (var o in n) t[o] = n[o];
    typeof window < "u" && (window.filterCSS = e.exports);
  })(Bs, Bs.exports)), Bs.exports;
}
var Nl, xp;
function xf() {
  return xp || (xp = 1, Nl = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(e) {
      var t = /\s|\n|\t/, n = t.exec(e);
      return n ? n.index : -1;
    }
  }), Nl;
}
var Cp;
function A_() {
  if (Cp) return pt;
  Cp = 1;
  var e = vu().FilterCSS, t = vu().getDefaultWhiteList, n = xf();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var s = new e();
  function o(j, V, H) {
  }
  function i(j, V, H) {
  }
  function a(j, V, H) {
  }
  function l(j, V, H) {
  }
  function u(j) {
    return j.replace(c, "&lt;").replace(p, "&gt;");
  }
  function f(j, V, H, Y) {
    if (H = D(H), V === "href" || V === "src") {
      if (H = n.trim(H), H === "#") return "#";
      if (!(H.substr(0, 7) === "http://" || H.substr(0, 8) === "https://" || H.substr(0, 7) === "mailto:" || H.substr(0, 4) === "tel:" || H.substr(0, 11) === "data:image/" || H.substr(0, 6) === "ftp://" || H.substr(0, 2) === "./" || H.substr(0, 3) === "../" || H[0] === "#" || H[0] === "/"))
        return "";
    } else if (V === "background") {
      if (x.lastIndex = 0, x.test(H))
        return "";
    } else if (V === "style") {
      if (w.lastIndex = 0, w.test(H) || (y.lastIndex = 0, y.test(H) && (x.lastIndex = 0, x.test(H))))
        return "";
      Y !== !1 && (Y = Y || s, H = Y.process(H));
    }
    return H = N(H), H;
  }
  var c = /</g, p = />/g, d = /"/g, v = /&quot;/g, g = /&#([a-zA-Z0-9]*);?/gim, k = /&colon;?/gim, m = /&newline;?/gim, x = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, w = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, y = /u\s*r\s*l\s*\(.*/gi;
  function S(j) {
    return j.replace(d, "&quot;");
  }
  function C(j) {
    return j.replace(v, '"');
  }
  function $(j) {
    return j.replace(g, function(H, Y) {
      return Y[0] === "x" || Y[0] === "X" ? String.fromCharCode(parseInt(Y.substr(1), 16)) : String.fromCharCode(parseInt(Y, 10));
    });
  }
  function M(j) {
    return j.replace(k, ":").replace(m, " ");
  }
  function R(j) {
    for (var V = "", H = 0, Y = j.length; H < Y; H++)
      V += j.charCodeAt(H) < 32 ? " " : j.charAt(H);
    return n.trim(V);
  }
  function D(j) {
    return j = C(j), j = $(j), j = M(j), j = R(j), j;
  }
  function N(j) {
    return j = S(j), j = u(j), j;
  }
  function B() {
    return "";
  }
  function oe(j, V) {
    typeof V != "function" && (V = function() {
    });
    var H = !Array.isArray(j);
    function Y(K) {
      return H ? !0 : n.indexOf(j, K) !== -1;
    }
    var I = [], Z = !1;
    return {
      onIgnoreTag: function(K, me, Ee) {
        if (Y(K))
          if (Ee.isClosing) {
            var Oe = "[/removed]", Pe = Ee.position + Oe.length;
            return I.push([
              Z !== !1 ? Z : Ee.position,
              Pe
            ]), Z = !1, Oe;
          } else
            return Z || (Z = Ee.position), "[removed]";
        else
          return V(K, me, Ee);
      },
      remove: function(K) {
        var me = "", Ee = 0;
        return n.forEach(I, function(Oe) {
          me += K.slice(Ee, Oe[0]), Ee = Oe[1];
        }), me += K.slice(Ee), me;
      }
    };
  }
  function q(j) {
    for (var V = "", H = 0; H < j.length; ) {
      var Y = j.indexOf("<!--", H);
      if (Y === -1) {
        V += j.slice(H);
        break;
      }
      V += j.slice(H, Y);
      var I = j.indexOf("-->", Y);
      if (I === -1)
        break;
      H = I + 3;
    }
    return V;
  }
  function ie(j) {
    var V = j.split("");
    return V = V.filter(function(H) {
      var Y = H.charCodeAt(0);
      return Y === 127 ? !1 : Y <= 31 ? Y === 10 || Y === 13 : !0;
    }), V.join("");
  }
  return pt.whiteList = r(), pt.getDefaultWhiteList = r, pt.onTag = o, pt.onIgnoreTag = i, pt.onTagAttr = a, pt.onIgnoreTagAttr = l, pt.safeAttrValue = f, pt.escapeHtml = u, pt.escapeQuote = S, pt.unescapeQuote = C, pt.escapeHtmlEntities = $, pt.escapeDangerHtml5Entities = M, pt.clearNonPrintableCharacter = R, pt.friendlyAttrValue = D, pt.escapeAttrValue = N, pt.onIgnoreTagStripAll = B, pt.StripTagBody = oe, pt.stripCommentTag = q, pt.stripBlankChar = ie, pt.attributeWrapSign = '"', pt.cssFilter = s, pt.getDefaultCSSWhiteList = t, pt;
}
var Ns = {}, Sp;
function T_() {
  if (Sp) return Ns;
  Sp = 1;
  var e = xf();
  function t(c) {
    var p = e.spaceIndex(c), d;
    return p === -1 ? d = c.slice(1, -1) : d = c.slice(1, p + 1), d = e.trim(d).toLowerCase(), d.slice(0, 1) === "/" && (d = d.slice(1)), d.slice(-1) === "/" && (d = d.slice(0, -1)), d;
  }
  function n(c) {
    return c.slice(0, 2) === "</";
  }
  function r(c, p, d) {
    var v = "", g = 0, k = !1, m = !1, x = 0, w = c.length, y = "", S = "";
    e: for (x = 0; x < w; x++) {
      var C = c.charAt(x);
      if (k === !1) {
        if (C === "<") {
          k = x;
          continue;
        }
      } else if (m === !1) {
        if (C === "<") {
          v += d(c.slice(g, x)), k = x, g = x;
          continue;
        }
        if (C === ">" || x === w - 1) {
          v += d(c.slice(g, k)), S = c.slice(k, x + 1), y = t(S), v += p(
            k,
            v.length,
            y,
            S,
            n(S)
          ), g = x + 1, k = !1;
          continue;
        }
        if (C === '"' || C === "'")
          for (var $ = 1, M = c.charAt(x - $); M.trim() === "" || M === "="; ) {
            if (M === "=") {
              m = C;
              continue e;
            }
            M = c.charAt(x - ++$);
          }
      } else if (C === m) {
        m = !1;
        continue;
      }
    }
    return g < w && (v += d(c.substr(g))), v;
  }
  var s = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(c, p) {
    var d = 0, v = 0, g = [], k = !1, m = c.length;
    function x($, M) {
      if ($ = e.trim($), $ = $.replace(s, "").toLowerCase(), !($.length < 1)) {
        var R = p($, M || "");
        R && g.push(R);
      }
    }
    for (var w = 0; w < m; w++) {
      var y = c.charAt(w), S, C;
      if (k === !1 && y === "=") {
        k = c.slice(d, w), d = w + 1, v = c.charAt(d) === '"' || c.charAt(d) === "'" ? d : a(c, w + 1);
        continue;
      }
      if (k !== !1 && w === v) {
        if (C = c.indexOf(y, w + 1), C === -1)
          break;
        S = e.trim(c.slice(v + 1, C)), x(k, S), k = !1, w = C, d = w + 1;
        continue;
      }
      if (/\s|\n|\t/.test(y))
        if (c = c.replace(/\s|\n|\t/g, " "), k === !1)
          if (C = i(c, w), C === -1) {
            S = e.trim(c.slice(d, w)), x(S), k = !1, d = w + 1;
            continue;
          } else {
            w = C - 1;
            continue;
          }
        else if (C = l(c, w - 1), C === -1) {
          S = e.trim(c.slice(d, w)), S = f(S), x(k, S), k = !1, d = w + 1;
          continue;
        } else
          continue;
    }
    return d < c.length && (k === !1 ? x(c.slice(d)) : x(k, f(e.trim(c.slice(d))))), e.trim(g.join(" "));
  }
  function i(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function a(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "'" || d === '"' ? p : -1;
    }
  }
  function l(c, p) {
    for (; p > 0; p--) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function u(c) {
    return c[0] === '"' && c[c.length - 1] === '"' || c[0] === "'" && c[c.length - 1] === "'";
  }
  function f(c) {
    return u(c) ? c.substr(1, c.length - 2) : c;
  }
  return Ns.parseTag = r, Ns.parseAttr = o, Ns;
}
var Fl, Ep;
function b_e() {
  if (Ep) return Fl;
  Ep = 1;
  var e = vu().FilterCSS, t = A_(), n = T_(), r = n.parseTag, s = n.parseAttr, o = xf();
  function i(c) {
    return c == null;
  }
  function a(c) {
    var p = o.spaceIndex(c);
    if (p === -1)
      return {
        html: "",
        closing: c[c.length - 2] === "/"
      };
    c = o.trim(c.slice(p + 1, -1));
    var d = c[c.length - 1] === "/";
    return d && (c = o.trim(c.slice(0, -1))), {
      html: c,
      closing: d
    };
  }
  function l(c) {
    var p = {};
    for (var d in c)
      p[d] = c[d];
    return p;
  }
  function u(c) {
    var p = {};
    for (var d in c)
      Array.isArray(c[d]) ? p[d.toLowerCase()] = c[d].map(function(v) {
        return v.toLowerCase();
      }) : p[d.toLowerCase()] = c[d];
    return p;
  }
  function f(c) {
    c = l(c || {}), c.stripIgnoreTag && (c.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), c.onIgnoreTag = t.onIgnoreTagStripAll), c.whiteList || c.allowList ? c.whiteList = u(c.whiteList || c.allowList) : c.whiteList = t.whiteList, this.attributeWrapSign = c.singleQuotedAttributeValue === !0 ? "'" : t.attributeWrapSign, c.onTag = c.onTag || t.onTag, c.onTagAttr = c.onTagAttr || t.onTagAttr, c.onIgnoreTag = c.onIgnoreTag || t.onIgnoreTag, c.onIgnoreTagAttr = c.onIgnoreTagAttr || t.onIgnoreTagAttr, c.safeAttrValue = c.safeAttrValue || t.safeAttrValue, c.escapeHtml = c.escapeHtml || t.escapeHtml, this.options = c, c.css === !1 ? this.cssFilter = !1 : (c.css = c.css || {}, this.cssFilter = new e(c.css));
  }
  return f.prototype.process = function(c) {
    if (c = c || "", c = c.toString(), !c) return "";
    var p = this, d = p.options, v = d.whiteList, g = d.onTag, k = d.onIgnoreTag, m = d.onTagAttr, x = d.onIgnoreTagAttr, w = d.safeAttrValue, y = d.escapeHtml, S = p.attributeWrapSign, C = p.cssFilter;
    d.stripBlankChar && (c = t.stripBlankChar(c)), d.allowCommentTag || (c = t.stripCommentTag(c));
    var $ = !1;
    d.stripIgnoreTagBody && ($ = t.StripTagBody(
      d.stripIgnoreTagBody,
      k
    ), k = $.onIgnoreTag);
    var M = r(
      c,
      function(R, D, N, B, oe) {
        var q = {
          sourcePosition: R,
          position: D,
          isClosing: oe,
          isWhite: Object.prototype.hasOwnProperty.call(v, N)
        }, ie = g(N, B, q);
        if (!i(ie)) return ie;
        if (q.isWhite) {
          if (q.isClosing)
            return "</" + N + ">";
          var j = a(B), V = v[N], H = s(j.html, function(Y, I) {
            var Z = o.indexOf(V, Y) !== -1, K = m(N, Y, I, Z);
            return i(K) ? Z ? (I = w(N, Y, I, C), I ? Y + "=" + S + I + S : Y) : (K = x(N, Y, I, Z), i(K) ? void 0 : K) : K;
          });
          return B = "<" + N, H && (B += " " + H), j.closing && (B += " /"), B += ">", B;
        } else
          return ie = k(N, B, q), i(ie) ? y(B) : ie;
      },
      y
    );
    return $ && (M = $.remove(M)), M;
  }, Fl = f, Fl;
}
var Ap;
function __e() {
  return Ap || (Ap = 1, (function(e, t) {
    var n = A_(), r = T_(), s = b_e();
    function o(a, l) {
      var u = new s(l);
      return u.process(a);
    }
    t = e.exports = o, t.filterXSS = o, t.FilterXSS = s, (function() {
      for (var a in n)
        t[a] = n[a];
      for (var l in r)
        t[l] = r[l];
    })(), typeof window < "u" && (window.filterXSS = e.exports);
    function i() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    i() && (self.filterXSS = e.exports);
  })(Ds, Ds.exports)), Ds.exports;
}
__e();
({
  // @ts-expect-error TS doesn't understand this but it works
  ...gp.props
  // <a> element "props" are passed as attributes
});
({
  ...m_
});
var ql, Tp;
function Cf() {
  if (Tp) return ql;
  Tp = 1;
  var e = Array.isArray;
  return ql = e, ql;
}
var zl, Mp;
function y_e() {
  if (Mp) return zl;
  Mp = 1;
  var e = typeof to == "object" && to && to.Object === Object && to;
  return zl = e, zl;
}
var Hl, $p;
function Sf() {
  if ($p) return Hl;
  $p = 1;
  var e = y_e(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Hl = n, Hl;
}
var jl, Lp;
function Ef() {
  if (Lp) return jl;
  Lp = 1;
  var e = Sf(), t = e.Symbol;
  return jl = t, jl;
}
var Vl, Ip;
function w_e() {
  if (Ip) return Vl;
  Ip = 1;
  var e = Ef(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var a = n.call(i, s), l = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = r.call(i);
    return u && (a ? i[s] = l : delete i[s]), f;
  }
  return Vl = o, Vl;
}
var Ul, Rp;
function k_e() {
  if (Rp) return Ul;
  Rp = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Ul = n, Ul;
}
var Kl, Op;
function M_() {
  if (Op) return Kl;
  Op = 1;
  var e = Ef(), t = w_e(), n = k_e(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(a) {
    return a == null ? a === void 0 ? s : r : o && o in Object(a) ? t(a) : n(a);
  }
  return Kl = i, Kl;
}
var Gl, Pp;
function x_e() {
  if (Pp) return Gl;
  Pp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Gl = e, Gl;
}
var Wl, Dp;
function Af() {
  if (Dp) return Wl;
  Dp = 1;
  var e = M_(), t = x_e(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return Wl = r, Wl;
}
var Zl, Bp;
function C_e() {
  if (Bp) return Zl;
  Bp = 1;
  var e = Cf(), t = Af(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function s(o, i) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return Zl = s, Zl;
}
var Xl, Np;
function $_() {
  if (Np) return Xl;
  Np = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Xl = e, Xl;
}
var Jl, Fp;
function S_e() {
  if (Fp) return Jl;
  Fp = 1;
  var e = M_(), t = $_(), n = "[object AsyncFunction]", r = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == s || l == n || l == o;
  }
  return Jl = i, Jl;
}
var Yl, qp;
function E_e() {
  if (qp) return Yl;
  qp = 1;
  var e = Sf(), t = e["__core-js_shared__"];
  return Yl = t, Yl;
}
var Ql, zp;
function A_e() {
  if (zp) return Ql;
  zp = 1;
  var e = E_e(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return Ql = n, Ql;
}
var ec, Hp;
function T_e() {
  if (Hp) return ec;
  Hp = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return ec = n, ec;
}
var tc, jp;
function M_e() {
  if (jp) return tc;
  jp = 1;
  var e = S_e(), t = A_e(), n = $_(), r = T_e(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(p) {
    if (!n(p) || t(p))
      return !1;
    var d = e(p) ? f : o;
    return d.test(r(p));
  }
  return tc = c, tc;
}
var nc, Vp;
function $_e() {
  if (Vp) return nc;
  Vp = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return nc = e, nc;
}
var rc, Up;
function L_() {
  if (Up) return rc;
  Up = 1;
  var e = M_e(), t = $_e();
  function n(r, s) {
    var o = t(r, s);
    return e(o) ? o : void 0;
  }
  return rc = n, rc;
}
var oc, Kp;
function Ui() {
  if (Kp) return oc;
  Kp = 1;
  var e = L_(), t = e(Object, "create");
  return oc = t, oc;
}
var sc, Gp;
function L_e() {
  if (Gp) return sc;
  Gp = 1;
  var e = Ui();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return sc = t, sc;
}
var ic, Wp;
function I_e() {
  if (Wp) return ic;
  Wp = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ic = e, ic;
}
var ac, Zp;
function R_e() {
  if (Zp) return ac;
  Zp = 1;
  var e = Ui(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function s(o) {
    var i = this.__data__;
    if (e) {
      var a = i[o];
      return a === t ? void 0 : a;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return ac = s, ac;
}
var lc, Xp;
function O_e() {
  if (Xp) return lc;
  Xp = 1;
  var e = Ui(), t = Object.prototype, n = t.hasOwnProperty;
  function r(s) {
    var o = this.__data__;
    return e ? o[s] !== void 0 : n.call(o, s);
  }
  return lc = r, lc;
}
var cc, Jp;
function P_e() {
  if (Jp) return cc;
  Jp = 1;
  var e = Ui(), t = "__lodash_hash_undefined__";
  function n(r, s) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && s === void 0 ? t : s, this;
  }
  return cc = n, cc;
}
var uc, Yp;
function D_e() {
  if (Yp) return uc;
  Yp = 1;
  var e = L_e(), t = I_e(), n = R_e(), r = O_e(), s = P_e();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, uc = o, uc;
}
var fc, Qp;
function B_e() {
  if (Qp) return fc;
  Qp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return fc = e, fc;
}
var dc, eh;
function N_e() {
  if (eh) return dc;
  eh = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return dc = e, dc;
}
var pc, th;
function Ki() {
  if (th) return pc;
  th = 1;
  var e = N_e();
  function t(n, r) {
    for (var s = n.length; s--; )
      if (e(n[s][0], r))
        return s;
    return -1;
  }
  return pc = t, pc;
}
var hc, nh;
function F_e() {
  if (nh) return hc;
  nh = 1;
  var e = Ki(), t = Array.prototype, n = t.splice;
  function r(s) {
    var o = this.__data__, i = e(o, s);
    if (i < 0)
      return !1;
    var a = o.length - 1;
    return i == a ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return hc = r, hc;
}
var gc, rh;
function q_e() {
  if (rh) return gc;
  rh = 1;
  var e = Ki();
  function t(n) {
    var r = this.__data__, s = e(r, n);
    return s < 0 ? void 0 : r[s][1];
  }
  return gc = t, gc;
}
var mc, oh;
function z_e() {
  if (oh) return mc;
  oh = 1;
  var e = Ki();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return mc = t, mc;
}
var vc, sh;
function H_e() {
  if (sh) return vc;
  sh = 1;
  var e = Ki();
  function t(n, r) {
    var s = this.__data__, o = e(s, n);
    return o < 0 ? (++this.size, s.push([n, r])) : s[o][1] = r, this;
  }
  return vc = t, vc;
}
var bc, ih;
function j_e() {
  if (ih) return bc;
  ih = 1;
  var e = B_e(), t = F_e(), n = q_e(), r = z_e(), s = H_e();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, bc = o, bc;
}
var _c, ah;
function V_e() {
  if (ah) return _c;
  ah = 1;
  var e = L_(), t = Sf(), n = e(t, "Map");
  return _c = n, _c;
}
var yc, lh;
function U_e() {
  if (lh) return yc;
  lh = 1;
  var e = D_e(), t = j_e(), n = V_e();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return yc = r, yc;
}
var wc, ch;
function K_e() {
  if (ch) return wc;
  ch = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return wc = e, wc;
}
var kc, uh;
function Gi() {
  if (uh) return kc;
  uh = 1;
  var e = K_e();
  function t(n, r) {
    var s = n.__data__;
    return e(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map;
  }
  return kc = t, kc;
}
var xc, fh;
function G_e() {
  if (fh) return xc;
  fh = 1;
  var e = Gi();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return xc = t, xc;
}
var Cc, dh;
function W_e() {
  if (dh) return Cc;
  dh = 1;
  var e = Gi();
  function t(n) {
    return e(this, n).get(n);
  }
  return Cc = t, Cc;
}
var Sc, ph;
function Z_e() {
  if (ph) return Sc;
  ph = 1;
  var e = Gi();
  function t(n) {
    return e(this, n).has(n);
  }
  return Sc = t, Sc;
}
var Ec, hh;
function X_e() {
  if (hh) return Ec;
  hh = 1;
  var e = Gi();
  function t(n, r) {
    var s = e(this, n), o = s.size;
    return s.set(n, r), this.size += s.size == o ? 0 : 1, this;
  }
  return Ec = t, Ec;
}
var Ac, gh;
function J_e() {
  if (gh) return Ac;
  gh = 1;
  var e = U_e(), t = G_e(), n = W_e(), r = Z_e(), s = X_e();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Ac = o, Ac;
}
var Tc, mh;
function Y_e() {
  if (mh) return Tc;
  mh = 1;
  var e = J_e(), t = "Expected a function";
  function n(r, s) {
    if (typeof r != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, a = s ? s.apply(this, i) : i[0], l = o.cache;
      if (l.has(a))
        return l.get(a);
      var u = r.apply(this, i);
      return o.cache = l.set(a, u) || l, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, Tc = n, Tc;
}
var Mc, vh;
function Q_e() {
  if (vh) return Mc;
  vh = 1;
  var e = Y_e(), t = 500;
  function n(r) {
    var s = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = s.cache;
    return s;
  }
  return Mc = n, Mc;
}
var $c, bh;
function eye() {
  if (bh) return $c;
  bh = 1;
  var e = Q_e(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(s) {
    var o = [];
    return s.charCodeAt(0) === 46 && o.push(""), s.replace(t, function(i, a, l, u) {
      o.push(l ? u.replace(n, "$1") : a || i);
    }), o;
  });
  return $c = r, $c;
}
var Lc, _h;
function tye() {
  if (_h) return Lc;
  _h = 1;
  function e(t, n) {
    for (var r = -1, s = t == null ? 0 : t.length, o = Array(s); ++r < s; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Lc = e, Lc;
}
var Ic, yh;
function nye() {
  if (yh) return Ic;
  yh = 1;
  var e = Ef(), t = tye(), n = Cf(), r = Af(), s = e ? e.prototype : void 0, o = s ? s.toString : void 0;
  function i(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, i) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }
  return Ic = i, Ic;
}
var Rc, wh;
function rye() {
  if (wh) return Rc;
  wh = 1;
  var e = nye();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Rc = t, Rc;
}
var Oc, kh;
function oye() {
  if (kh) return Oc;
  kh = 1;
  var e = Cf(), t = C_e(), n = eye(), r = rye();
  function s(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return Oc = s, Oc;
}
var Pc, xh;
function sye() {
  if (xh) return Pc;
  xh = 1;
  var e = Af();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Pc = t, Pc;
}
var Dc, Ch;
function iye() {
  if (Ch) return Dc;
  Ch = 1;
  var e = oye(), t = sye();
  function n(r, s) {
    s = e(s, r);
    for (var o = 0, i = s.length; r != null && o < i; )
      r = r[t(s[o++])];
    return o && o == i ? r : void 0;
  }
  return Dc = n, Dc;
}
var Bc, Sh;
function aye() {
  if (Sh) return Bc;
  Sh = 1;
  var e = iye();
  function t(n, r, s) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? s : o;
  }
  return Bc = t, Bc;
}
aye();
function lye(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const s = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), i = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, a = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      s
    ]
  };
  s.contains.push(a);
  const l = {
    match: /\\"/
  }, u = {
    className: "string",
    begin: /'/,
    end: /'/
  }, f = {
    match: /\\'/
  }, c = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, p = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], d = e.SHEBANG({
    binary: `(${p.join("|")})`,
    relevance: 10
  }), v = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, g = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], k = [
    "true",
    "false"
  ], m = { match: /(\/[a-z._-]+)+/ }, x = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], w = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], y = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], S = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: g,
      literal: k,
      built_in: [
        ...x,
        ...w,
        // Shell modifiers
        "set",
        "shopt",
        ...y,
        ...S
      ]
    },
    contains: [
      d,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      v,
      c,
      o,
      i,
      m,
      a,
      l,
      u,
      f,
      n
    ]
  };
}
function cye(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], a = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a,
    illegal: /#/
  }, f = {
    begin: /\{\{/,
    relevance: 0
  }, c = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", d = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, v = `\\b|${r.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${d}))[eE][+-]?(${p})[jJ]?(?=${v})`
      },
      {
        begin: `(${d})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${v})`
      }
    ]
  }, k = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: a,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, m = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: a,
        contains: [
          "self",
          l,
          g,
          c,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    c,
    g,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: a,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      g,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      c,
      k,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [m]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          m,
          c
        ]
      }
    ]
  };
}
const pi = "[A-Za-z$_][0-9A-Za-z$_]*", I_ = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], R_ = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], O_ = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], P_ = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], D_ = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], B_ = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], N_ = [].concat(
  D_,
  O_,
  P_
);
function uye(e) {
  const t = e.regex, n = (H, { after: Y }) => {
    const I = "</" + H[0].slice(1);
    return H.input.indexOf(I, Y) !== -1;
  }, r = pi, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, Y) => {
      const I = H[0].length + H.index, Z = H.input[I];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Z === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Z === ","
      ) {
        Y.ignoreMatch();
        return;
      }
      Z === ">" && (n(H, { after: I }) || Y.ignoreMatch());
      let K;
      const me = H.input.substring(I);
      if (K = me.match(/^\s*=/)) {
        Y.ignoreMatch();
        return;
      }
      if ((K = me.match(/^\s+extends\s+/)) && K.index === 0) {
        Y.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: pi,
    keyword: I_,
    literal: R_,
    built_in: N_,
    "variable.language": B_
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, k = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, x = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, w = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    v,
    g,
    k,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = w.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(w)
  });
  const y = [].concat(x, p.contains), S = y.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(y)
    }
  ]), C = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: S
  }, $ = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, M = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...O_,
        ...P_
      ]
    }
  }, R = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [C],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      B([
        ...D_,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      C
    ]
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      C
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: S, CLASS_REFERENCE: M },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      R,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      v,
      g,
      k,
      x,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      M,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          x,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: j,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: S
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          C,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      q,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [C]
      },
      oe,
      N,
      $,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function fye(e) {
  const t = e.regex, n = uye(e), r = pi, s = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, i = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: s
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, a = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], u = {
    $pattern: pi,
    keyword: I_.concat(l),
    literal: R_,
    built_in: N_.concat(s),
    "variable.language": B_
  }, f = {
    className: "meta",
    begin: "@" + r
  }, c = (g, k, m) => {
    const x = g.contains.findIndex((w) => w.label === k);
    if (x === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(x, 1, m);
  };
  Object.assign(n.keywords, u), n.exports.PARAMS_CONTAINS.push(f);
  const p = n.contains.find((g) => g.scope === "attr"), d = Object.assign(
    {},
    p,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    d
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    f,
    o,
    i,
    d
    // Added for optional property assignment highlighting
  ]), c(n, "shebang", e.SHEBANG()), c(n, "use_strict", a);
  const v = n.contains.find((g) => g.label === "func.def");
  return v.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
const dye = /* @__PURE__ */ re({
  name: "VueMarkdown",
  props: {
    source: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      required: !1
    }
  },
  setup(e) {
    const t = G(new o_e(e.options ?? {}));
    for (const r of e.plugins ?? [])
      t.value.use(r);
    const n = P(() => t.value.render(e.source));
    return () => vn("div", { innerHTML: n.value });
  }
}), pye = {
  key: 0,
  class: "chat-message-actions"
}, hye = {
  key: 2,
  class: "chat-message-files"
}, bu = /* @__PURE__ */ re({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    zn.registerLanguage("javascript", eg), zn.registerLanguage("typescript", fye), zn.registerLanguage("python", cye), zn.registerLanguage("xml", tg), zn.registerLanguage("bash", lye);
    const { message: r } = wi(n), { options: s } = cs(), o = G(null), i = G({}), a = P(() => r.value.text || "&lt;Empty response&gt;"), l = P(() => ({
      "chat-message-from-user": r.value.sender === "user",
      "chat-message-from-bot": r.value.sender === "bot",
      "chat-message-transparent": r.value.transparent === !0
    })), u = (v) => {
      v.use(a_e, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, f = () => {
      var v;
      (v = o.value) != null && v.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, c = {
      highlight(v, g) {
        if (g && zn.getLanguage(g))
          try {
            return zn.highlight(v, { language: g }).value;
          } catch {
          }
        return "";
      }
    }, p = { ...(s == null ? void 0 : s.messageComponents) ?? {} };
    t({ scrollToView: f });
    const d = async (v) => await new Promise((g, k) => {
      const m = new FileReader();
      m.onload = () => g(m.result), m.onerror = k, m.readAsDataURL(v);
    });
    return it(async () => {
      if (r.value.files)
        for (const v of r.value.files)
          try {
            const g = await d(v);
            i.value[v.name] = g;
          } catch (g) {
            console.error("Error reading file:", g);
          }
    }), (v, g) => (_(), A("div", {
      ref_key: "messageContainer",
      ref: o,
      class: Q(["chat-message", l.value])
    }, [
      v.$slots.beforeMessage ? (_(), A("div", pye, [
        we(v.$slots, "beforeMessage", Ys(Nu({ message: b(r) })))
      ])) : _e("", !0),
      we(v.$slots, "default", {}, () => [
        b(r).type === "component" && p[b(r).key] ? (_(), ue(Pt(p[b(r).key]), Ys(gt({ key: 0 }, b(r).arguments)), null, 16)) : (_(), ue(b(dye), {
          key: 1,
          class: "chat-message-markdown",
          source: a.value,
          options: c,
          plugins: [u]
        }, null, 8, ["source", "plugins"])),
        (b(r).files ?? []).length > 0 ? (_(), A("div", hye, [
          (_(!0), A(et, null, yn(b(r).files ?? [], (k) => (_(), A("div", {
            key: k.name,
            class: "chat-message-file"
          }, [
            xe(ng, {
              file: k,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : _e("", !0)
      ])
    ], 2));
  }
}), gye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mye(e, t) {
  return _(), A("svg", gye, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const vye = { name: "mdi-chat", render: mye }, bye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _ye(e, t) {
  return _(), A("svg", bye, t[0] || (t[0] = [
    h("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const yye = { name: "mdi-chevron-down", render: _ye }, wye = { class: "chat-window-wrapper" }, kye = { class: "chat-window" }, xye = /* @__PURE__ */ re({
  __name: "ChatWindow",
  setup(e) {
    const t = G(!1);
    function n() {
      t.value = !t.value, t.value && Ue(() => {
        Vt.emit("scrollToBottom");
      });
    }
    return (r, s) => (_(), A("div", wye, [
      xe(Vr, { name: "chat-window-transition" }, {
        default: he(() => [
          Ut(h("div", kye, [
            xe(F_)
          ], 512), [
            [Zn, t.value]
          ])
        ]),
        _: 1
      }),
      h("div", {
        class: "chat-window-toggle",
        onClick: n
      }, [
        xe(Vr, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: he(() => [
            t.value ? (_(), ue(b(yye), {
              key: 1,
              height: "32",
              width: "32"
            })) : (_(), ue(b(vye), {
              key: 0,
              height: "32",
              width: "32"
            }))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Cye = /* @__PURE__ */ re({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, r = G(), s = P(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return it(() => {
      var o;
      (o = r.value) == null || o.scrollToView();
    }), (o, i) => (_(), ue(b(bu), {
      ref_key: "messageContainer",
      ref: r,
      class: Q(s.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: he(() => i[0] || (i[0] = [
        h("div", { class: "chat-message-typing-body" }, [
          h("span", { class: "chat-message-typing-circle" }),
          h("span", { class: "chat-message-typing-circle" }),
          h("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])),
      _: 1
    }, 8, ["class"]));
  }
}), Sye = {
  key: 0,
  class: "empty-container"
}, Eye = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, Aye = {
  key: 1,
  class: "chat-messages-list"
}, Tye = /* @__PURE__ */ re({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = ju(), n = G([]), { initialMessages: r, waitingForResponse: s } = t;
    return Te(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && b(r).length === 0 && o.messages.length === 0 ? (_(), A("div", Sye, [
      h("div", Eye, [
        xe(b(Vu), {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        xe(b(TS), {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: he(() => [
            jr(Ye(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (_(), A("div", Aye, [
      (_(!0), A(et, null, yn(b(r), (a) => (_(), ue(bu, {
        key: a.id,
        message: a
      }, null, 8, ["message"]))), 128)),
      (_(!0), A(et, null, yn(o.messages, (a) => (_(), ue(bu, {
        key: a.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: a
      }, {
        beforeMessage: he(({ message: l }) => [
          we(o.$slots, "beforeMessage", gt({ ref_for: !0 }, { message: l }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      b(s) ? (_(), ue(Cye, { key: 0 })) : _e("", !0)
    ]));
  }
}), Mye = { class: "chat-heading" }, $ye = ["title"], Lye = { key: 0 }, F_ = /* @__PURE__ */ re({
  __name: "Chat",
  setup(e) {
    const { t } = Mi(), n = ju(), { messages: r, currentSessionId: s } = n, { options: o } = cs(), i = P(() => o.mode === "window" && o.showWindowCloseButton);
    async function a() {
      n.startNewSession && (n.startNewSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    async function l() {
      n.loadPreviousSession && (await n.loadPreviousSession(), Ue(() => {
        Vt.emit("scrollToBottom");
      }));
    }
    function u() {
      Vt.emit("close");
    }
    return it(async () => {
      await l(), !o.showWelcomeScreen && !s.value && await a();
    }), (f, c) => (_(), ue(pk, { class: "chat-wrapper" }, {
      header: he(() => [
        h("div", Mye, [
          h("h1", null, Ye(b(t)("title")), 1),
          i.value ? (_(), A("button", {
            key: 0,
            class: "chat-close-button",
            title: b(t)("closeButtonTooltip"),
            onClick: u
          }, [
            xe(b(cw), {
              height: "18",
              width: "18"
            })
          ], 8, $ye)) : _e("", !0)
        ]),
        b(t)("subtitle") ? (_(), A("p", Lye, Ye(b(t)("subtitle")), 1)) : _e("", !0)
      ]),
      footer: he(() => [
        b(s) ? (_(), ue(ck, { key: 0 })) : (_(), ue(kw, { key: 1 }))
      ]),
      default: he(() => [
        !b(s) && b(o).showWelcomeScreen ? (_(), ue(gw, {
          key: 0,
          "onClick:button": a
        })) : (_(), ue(Tye, {
          key: 1,
          messages: b(r)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), Iye = /* @__PURE__ */ re({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = cs(), n = P(() => t.mode === "fullscreen");
    return it(() => {
      zn.registerLanguage("xml", tg), zn.registerLanguage("javascript", eg);
    }), (r, s) => n.value ? (_(), ue(F_, {
      key: 0,
      class: "n8n-chat"
    })) : (_(), ue(xye, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function Oye(e) {
  var s, o;
  const t = {
    ...To,
    ...e,
    webhookConfig: {
      ...To.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...To.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(s = To.i18n) == null ? void 0 : s.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...To.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? A3;
  typeof n == "string" && H3(n);
  const r = C3(Iye);
  return r.use(ew, t), r.mount(n), r;
}
export {
  Oye as createChat
};


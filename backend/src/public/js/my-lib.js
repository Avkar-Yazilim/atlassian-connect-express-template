function hk(s, d) {
  for (var h = 0; h < d.length; h++) {
    const p = d[h];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const E in p)
        if (E !== "default" && !(E in s)) {
          const T = Object.getOwnPropertyDescriptor(p, E);
          T && Object.defineProperty(s, E, T.get ? T : {
            enumerable: !0,
            get: () => p[E]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
function O0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function mk(s) {
  if (s.__esModule)
    return s;
  var d = s.default;
  if (typeof d == "function") {
    var h = function p() {
      if (this instanceof p) {
        var E = [null];
        E.push.apply(E, arguments);
        var T = Function.bind.apply(d, E);
        return new T();
      }
      return d.apply(this, arguments);
    };
    h.prototype = d.prototype;
  } else
    h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(s).forEach(function(p) {
    var E = Object.getOwnPropertyDescriptor(s, p);
    Object.defineProperty(h, p, E.get ? E : {
      enumerable: !0,
      get: function() {
        return s[p];
      }
    });
  }), h;
}
var p0 = { exports: {} }, Yc = {}, v0 = { exports: {} }, Gt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var e0, TS;
function lm() {
  if (TS)
    return e0;
  TS = 1;
  var s = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function p(T) {
    if (T == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(T);
  }
  function E() {
    try {
      if (!Object.assign)
        return !1;
      var T = new String("abc");
      if (T[5] = "de", Object.getOwnPropertyNames(T)[0] === "5")
        return !1;
      for (var R = {}, y = 0; y < 10; y++)
        R["_" + String.fromCharCode(y)] = y;
      var N = Object.getOwnPropertyNames(R).map(function(P) {
        return R[P];
      });
      if (N.join("") !== "0123456789")
        return !1;
      var z = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(P) {
        z[P] = P;
      }), Object.keys(Object.assign({}, z)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return e0 = E() ? Object.assign : function(T, R) {
    for (var y, N = p(T), z, P = 1; P < arguments.length; P++) {
      y = Object(arguments[P]);
      for (var q in y)
        d.call(y, q) && (N[q] = y[q]);
      if (s) {
        z = s(y);
        for (var se = 0; se < z.length; se++)
          h.call(y, z[se]) && (N[z[se]] = y[z[se]]);
      }
    }
    return N;
  }, e0;
}
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xS;
function yk() {
  if (xS)
    return Gt;
  xS = 1;
  var s = lm(), d = typeof Symbol == "function" && Symbol.for, h = d ? Symbol.for("react.element") : 60103, p = d ? Symbol.for("react.portal") : 60106, E = d ? Symbol.for("react.fragment") : 60107, T = d ? Symbol.for("react.strict_mode") : 60108, R = d ? Symbol.for("react.profiler") : 60114, y = d ? Symbol.for("react.provider") : 60109, N = d ? Symbol.for("react.context") : 60110, z = d ? Symbol.for("react.forward_ref") : 60112, P = d ? Symbol.for("react.suspense") : 60113, q = d ? Symbol.for("react.memo") : 60115, se = d ? Symbol.for("react.lazy") : 60116, he = typeof Symbol == "function" && Symbol.iterator;
  function ue(w) {
    for (var x = "https://reactjs.org/docs/error-decoder.html?invariant=" + w, W = 1; W < arguments.length; W++)
      x += "&args[]=" + encodeURIComponent(arguments[W]);
    return "Minified React error #" + w + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = {};
  function de(w, x, W) {
    this.props = w, this.context = x, this.refs = $, this.updater = W || te;
  }
  de.prototype.isReactComponent = {}, de.prototype.setState = function(w, x) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(ue(85));
    this.updater.enqueueSetState(this, w, x, "setState");
  }, de.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function K() {
  }
  K.prototype = de.prototype;
  function le(w, x, W) {
    this.props = w, this.context = x, this.refs = $, this.updater = W || te;
  }
  var ae = le.prototype = new K();
  ae.constructor = le, s(ae, de.prototype), ae.isPureReactComponent = !0;
  var M = { current: null }, ge = Object.prototype.hasOwnProperty, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(w, x, W) {
    var V, fe = {}, Oe = null, Se = null;
    if (x != null)
      for (V in x.ref !== void 0 && (Se = x.ref), x.key !== void 0 && (Oe = "" + x.key), x)
        ge.call(x, V) && !ye.hasOwnProperty(V) && (fe[V] = x[V]);
    var H = arguments.length - 2;
    if (H === 1)
      fe.children = W;
    else if (1 < H) {
      for (var qe = Array(H), ce = 0; ce < H; ce++)
        qe[ce] = arguments[ce + 2];
      fe.children = qe;
    }
    if (w && w.defaultProps)
      for (V in H = w.defaultProps, H)
        fe[V] === void 0 && (fe[V] = H[V]);
    return { $$typeof: h, type: w, key: Oe, ref: Se, props: fe, _owner: M.current };
  }
  function Ke(w, x) {
    return { $$typeof: h, type: w.type, key: x, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function it(w) {
    return typeof w == "object" && w !== null && w.$$typeof === h;
  }
  function pt(w) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + ("" + w).replace(/[=:]/g, function(W) {
      return x[W];
    });
  }
  var et = /\/+/g, St = [];
  function Qe(w, x, W, V) {
    if (St.length) {
      var fe = St.pop();
      return fe.result = w, fe.keyPrefix = x, fe.func = W, fe.context = V, fe.count = 0, fe;
    }
    return { result: w, keyPrefix: x, func: W, context: V, count: 0 };
  }
  function Ce(w) {
    w.result = null, w.keyPrefix = null, w.func = null, w.context = null, w.count = 0, 10 > St.length && St.push(w);
  }
  function Ze(w, x, W, V) {
    var fe = typeof w;
    (fe === "undefined" || fe === "boolean") && (w = null);
    var Oe = !1;
    if (w === null)
      Oe = !0;
    else
      switch (fe) {
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case h:
            case p:
              Oe = !0;
          }
      }
    if (Oe)
      return W(V, w, x === "" ? "." + Ae(w, 0) : x), 1;
    if (Oe = 0, x = x === "" ? "." : x + ":", Array.isArray(w))
      for (var Se = 0; Se < w.length; Se++) {
        fe = w[Se];
        var H = x + Ae(fe, Se);
        Oe += Ze(fe, H, W, V);
      }
    else if (w === null || typeof w != "object" ? H = null : (H = he && w[he] || w["@@iterator"], H = typeof H == "function" ? H : null), typeof H == "function")
      for (w = H.call(w), Se = 0; !(fe = w.next()).done; )
        fe = fe.value, H = x + Ae(fe, Se++), Oe += Ze(fe, H, W, V);
    else if (fe === "object")
      throw W = "" + w, Error(ue(31, W === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : W, ""));
    return Oe;
  }
  function Te(w, x, W) {
    return w == null ? 0 : Ze(w, "", x, W);
  }
  function Ae(w, x) {
    return typeof w == "object" && w !== null && w.key != null ? pt(w.key) : x.toString(36);
  }
  function _e(w, x) {
    w.func.call(w.context, x, w.count++);
  }
  function Be(w, x, W) {
    var V = w.result, fe = w.keyPrefix;
    w = w.func.call(w.context, x, w.count++), Array.isArray(w) ? yt(w, V, W, function(Oe) {
      return Oe;
    }) : w != null && (it(w) && (w = Ke(w, fe + (!w.key || x && x.key === w.key ? "" : ("" + w.key).replace(et, "$&/") + "/") + W)), V.push(w));
  }
  function yt(w, x, W, V, fe) {
    var Oe = "";
    W != null && (Oe = ("" + W).replace(et, "$&/") + "/"), x = Qe(x, Oe, V, fe), Te(w, Be, x), Ce(x);
  }
  var be = { current: null };
  function ne() {
    var w = be.current;
    if (w === null)
      throw Error(ue(321));
    return w;
  }
  var U = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: M, IsSomeRendererActing: { current: !1 }, assign: s };
  return Gt.Children = { map: function(w, x, W) {
    if (w == null)
      return w;
    var V = [];
    return yt(w, V, null, x, W), V;
  }, forEach: function(w, x, W) {
    if (w == null)
      return w;
    x = Qe(null, null, x, W), Te(w, _e, x), Ce(x);
  }, count: function(w) {
    return Te(w, function() {
      return null;
    }, null);
  }, toArray: function(w) {
    var x = [];
    return yt(w, x, null, function(W) {
      return W;
    }), x;
  }, only: function(w) {
    if (!it(w))
      throw Error(ue(143));
    return w;
  } }, Gt.Component = de, Gt.Fragment = E, Gt.Profiler = R, Gt.PureComponent = le, Gt.StrictMode = T, Gt.Suspense = P, Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, Gt.cloneElement = function(w, x, W) {
    if (w == null)
      throw Error(ue(267, w));
    var V = s({}, w.props), fe = w.key, Oe = w.ref, Se = w._owner;
    if (x != null) {
      if (x.ref !== void 0 && (Oe = x.ref, Se = M.current), x.key !== void 0 && (fe = "" + x.key), w.type && w.type.defaultProps)
        var H = w.type.defaultProps;
      for (qe in x)
        ge.call(x, qe) && !ye.hasOwnProperty(qe) && (V[qe] = x[qe] === void 0 && H !== void 0 ? H[qe] : x[qe]);
    }
    var qe = arguments.length - 2;
    if (qe === 1)
      V.children = W;
    else if (1 < qe) {
      H = Array(qe);
      for (var ce = 0; ce < qe; ce++)
        H[ce] = arguments[ce + 2];
      V.children = H;
    }
    return {
      $$typeof: h,
      type: w.type,
      key: fe,
      ref: Oe,
      props: V,
      _owner: Se
    };
  }, Gt.createContext = function(w, x) {
    return x === void 0 && (x = null), w = { $$typeof: N, _calculateChangedBits: x, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null }, w.Provider = { $$typeof: y, _context: w }, w.Consumer = w;
  }, Gt.createElement = Xe, Gt.createFactory = function(w) {
    var x = Xe.bind(null, w);
    return x.type = w, x;
  }, Gt.createRef = function() {
    return { current: null };
  }, Gt.forwardRef = function(w) {
    return { $$typeof: z, render: w };
  }, Gt.isValidElement = it, Gt.lazy = function(w) {
    return { $$typeof: se, _ctor: w, _status: -1, _result: null };
  }, Gt.memo = function(w, x) {
    return { $$typeof: q, type: w, compare: x === void 0 ? null : x };
  }, Gt.useCallback = function(w, x) {
    return ne().useCallback(w, x);
  }, Gt.useContext = function(w, x) {
    return ne().useContext(w, x);
  }, Gt.useDebugValue = function() {
  }, Gt.useEffect = function(w, x) {
    return ne().useEffect(w, x);
  }, Gt.useImperativeHandle = function(w, x, W) {
    return ne().useImperativeHandle(w, x, W);
  }, Gt.useLayoutEffect = function(w, x) {
    return ne().useLayoutEffect(w, x);
  }, Gt.useMemo = function(w, x) {
    return ne().useMemo(w, x);
  }, Gt.useReducer = function(w, x, W) {
    return ne().useReducer(w, x, W);
  }, Gt.useRef = function(w) {
    return ne().useRef(w);
  }, Gt.useState = function(w) {
    return ne().useState(w);
  }, Gt.version = "16.14.0", Gt;
}
var Qt = {}, t0, wS;
function gk() {
  if (wS)
    return t0;
  wS = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return t0 = s, t0;
}
var n0, RS;
function bk() {
  return RS || (RS = 1, n0 = Function.call.bind(Object.prototype.hasOwnProperty)), n0;
}
var r0, _S;
function CC() {
  if (_S)
    return r0;
  _S = 1;
  var s = function() {
  };
  if ({}.NODE_ENV !== "production") {
    var d = gk(), h = {}, p = bk();
    s = function(T) {
      var R = "Warning: " + T;
      typeof console < "u" && console.error(R);
      try {
        throw new Error(R);
      } catch {
      }
    };
  }
  function E(T, R, y, N, z) {
    if ({}.NODE_ENV !== "production") {
      for (var P in T)
        if (p(T, P)) {
          var q;
          try {
            if (typeof T[P] != "function") {
              var se = Error(
                (N || "React class") + ": " + y + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw se.name = "Invariant Violation", se;
            }
            q = T[P](R, P, N, y, null, d);
          } catch (ue) {
            q = ue;
          }
          if (q && !(q instanceof Error) && s(
            (N || "React class") + ": type specification of " + y + " `" + P + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof q + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), q instanceof Error && !(q.message in h)) {
            h[q.message] = !0;
            var he = z ? z() : "";
            s(
              "Failed " + y + " type: " + q.message + (he ?? "")
            );
          }
        }
    }
  }
  return E.resetWarningCache = function() {
    ({}).NODE_ENV !== "production" && (h = {});
  }, r0 = E, r0;
}
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kS;
function Ek() {
  return kS || (kS = 1, {}.NODE_ENV !== "production" && function() {
    var s = lm(), d = CC(), h = "16.14.0", p = typeof Symbol == "function" && Symbol.for, E = p ? Symbol.for("react.element") : 60103, T = p ? Symbol.for("react.portal") : 60106, R = p ? Symbol.for("react.fragment") : 60107, y = p ? Symbol.for("react.strict_mode") : 60108, N = p ? Symbol.for("react.profiler") : 60114, z = p ? Symbol.for("react.provider") : 60109, P = p ? Symbol.for("react.context") : 60110, q = p ? Symbol.for("react.concurrent_mode") : 60111, se = p ? Symbol.for("react.forward_ref") : 60112, he = p ? Symbol.for("react.suspense") : 60113, ue = p ? Symbol.for("react.suspense_list") : 60120, te = p ? Symbol.for("react.memo") : 60115, $ = p ? Symbol.for("react.lazy") : 60116, de = p ? Symbol.for("react.block") : 60121, K = p ? Symbol.for("react.fundamental") : 60117, le = p ? Symbol.for("react.responder") : 60118, ae = p ? Symbol.for("react.scope") : 60119, M = typeof Symbol == "function" && Symbol.iterator, ge = "@@iterator";
    function ye(S) {
      if (S === null || typeof S != "object")
        return null;
      var A = M && S[M] || S[ge];
      return typeof A == "function" ? A : null;
    }
    var Xe = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, Ke = {
      suspense: null
    }, it = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, pt = /^(.*)[\\\/]/;
    function et(S, A, G) {
      var J = "";
      if (A) {
        var Ne = A.fileName, at = Ne.replace(pt, "");
        if (/^index\./.test(at)) {
          var Ye = Ne.match(pt);
          if (Ye) {
            var ft = Ye[1];
            if (ft) {
              var jt = ft.replace(pt, "");
              at = jt + "/" + at;
            }
          }
        }
        J = " (at " + at + ":" + A.lineNumber + ")";
      } else
        G && (J = " (created by " + G + ")");
      return `
    in ` + (S || "Unknown") + J;
    }
    var St = 1;
    function Qe(S) {
      return S._status === St ? S._result : null;
    }
    function Ce(S, A, G) {
      var J = A.displayName || A.name || "";
      return S.displayName || (J !== "" ? G + "(" + J + ")" : G);
    }
    function Ze(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && ne("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case R:
          return "Fragment";
        case T:
          return "Portal";
        case N:
          return "Profiler";
        case y:
          return "StrictMode";
        case he:
          return "Suspense";
        case ue:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case P:
            return "Context.Consumer";
          case z:
            return "Context.Provider";
          case se:
            return Ce(S, S.render, "ForwardRef");
          case te:
            return Ze(S.type);
          case de:
            return Ze(S.render);
          case $: {
            var A = S, G = Qe(A);
            if (G)
              return Ze(G);
            break;
          }
        }
      return null;
    }
    var Te = {}, Ae = null;
    function _e(S) {
      Ae = S;
    }
    Te.getCurrentStack = null, Te.getStackAddendum = function() {
      var S = "";
      if (Ae) {
        var A = Ze(Ae.type), G = Ae._owner;
        S += et(A, Ae._source, G && Ze(G.type));
      }
      var J = Te.getCurrentStack;
      return J && (S += J() || ""), S;
    };
    var Be = {
      current: !1
    }, yt = {
      ReactCurrentDispatcher: Xe,
      ReactCurrentBatchConfig: Ke,
      ReactCurrentOwner: it,
      IsSomeRendererActing: Be,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: s
    };
    s(yt, {
      // These should not be included in production.
      ReactDebugCurrentFrame: Te,
      // Shim for React DOM 16.0.0 which still destructured (but not used) this.
      // TODO: remove in React 17.0.
      ReactComponentTreeHook: {}
    });
    function be(S) {
      {
        for (var A = arguments.length, G = new Array(A > 1 ? A - 1 : 0), J = 1; J < A; J++)
          G[J - 1] = arguments[J];
        U("warn", S, G);
      }
    }
    function ne(S) {
      {
        for (var A = arguments.length, G = new Array(A > 1 ? A - 1 : 0), J = 1; J < A; J++)
          G[J - 1] = arguments[J];
        U("error", S, G);
      }
    }
    function U(S, A, G) {
      {
        var J = G.length > 0 && typeof G[G.length - 1] == "string" && G[G.length - 1].indexOf(`
    in`) === 0;
        if (!J) {
          var Ne = yt.ReactDebugCurrentFrame, at = Ne.getStackAddendum();
          at !== "" && (A += "%s", G = G.concat([at]));
        }
        var Ye = G.map(function(kn) {
          return "" + kn;
        });
        Ye.unshift("Warning: " + A), Function.prototype.apply.call(console[S], console, Ye);
        try {
          var ft = 0, jt = "Warning: " + A.replace(/%s/g, function() {
            return G[ft++];
          });
          throw new Error(jt);
        } catch {
        }
      }
    }
    var w = {};
    function x(S, A) {
      {
        var G = S.constructor, J = G && (G.displayName || G.name) || "ReactClass", Ne = J + "." + A;
        if (w[Ne])
          return;
        ne("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", A, J), w[Ne] = !0;
      }
    }
    var W = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(S) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(S, A, G) {
        x(S, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(S, A, G, J) {
        x(S, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(S, A, G, J) {
        x(S, "setState");
      }
    }, V = {};
    Object.freeze(V);
    function fe(S, A, G) {
      this.props = S, this.context = A, this.refs = V, this.updater = G || W;
    }
    fe.prototype.isReactComponent = {}, fe.prototype.setState = function(S, A) {
      if (!(typeof S == "object" || typeof S == "function" || S == null))
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, A, "setState");
    }, fe.prototype.forceUpdate = function(S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    };
    {
      var Oe = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, Se = function(S, A) {
        Object.defineProperty(fe.prototype, S, {
          get: function() {
            be("%s(...) is deprecated in plain JavaScript React classes. %s", A[0], A[1]);
          }
        });
      };
      for (var H in Oe)
        Oe.hasOwnProperty(H) && Se(H, Oe[H]);
    }
    function qe() {
    }
    qe.prototype = fe.prototype;
    function ce(S, A, G) {
      this.props = S, this.context = A, this.refs = V, this.updater = G || W;
    }
    var Ue = ce.prototype = new qe();
    Ue.constructor = ce, s(Ue, fe.prototype), Ue.isPureReactComponent = !0;
    function nt() {
      var S = {
        current: null
      };
      return Object.seal(S), S;
    }
    var rt = Object.prototype.hasOwnProperty, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hn, At, Rn;
    Rn = {};
    function Pn(S) {
      if (rt.call(S, "ref")) {
        var A = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function nn(S) {
      if (rt.call(S, "key")) {
        var A = Object.getOwnPropertyDescriptor(S, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ge(S, A) {
      var G = function() {
        Hn || (Hn = !0, ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", A));
      };
      G.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: G,
        configurable: !0
      });
    }
    function Nt(S, A) {
      var G = function() {
        At || (At = !0, ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", A));
      };
      G.isReactWarning = !0, Object.defineProperty(S, "ref", {
        get: G,
        configurable: !0
      });
    }
    function Cn(S) {
      if (typeof S.ref == "string" && it.current && S.__self && it.current.stateNode !== S.__self) {
        var A = Ze(it.current.type);
        Rn[A] || (ne('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', Ze(it.current.type), S.ref), Rn[A] = !0);
      }
    }
    var ur = function(S, A, G, J, Ne, at, Ye) {
      var ft = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: S,
        key: A,
        ref: G,
        props: Ye,
        // Record the component responsible for creating this element.
        _owner: at
      };
      return ft._store = {}, Object.defineProperty(ft._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ft, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(ft, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
    };
    function _n(S, A, G) {
      var J, Ne = {}, at = null, Ye = null, ft = null, jt = null;
      if (A != null) {
        Pn(A) && (Ye = A.ref, Cn(A)), nn(A) && (at = "" + A.key), ft = A.__self === void 0 ? null : A.__self, jt = A.__source === void 0 ? null : A.__source;
        for (J in A)
          rt.call(A, J) && !ht.hasOwnProperty(J) && (Ne[J] = A[J]);
      }
      var kn = arguments.length - 2;
      if (kn === 1)
        Ne.children = G;
      else if (kn > 1) {
        for (var Dn = Array(kn), zn = 0; zn < kn; zn++)
          Dn[zn] = arguments[zn + 2];
        Object.freeze && Object.freeze(Dn), Ne.children = Dn;
      }
      if (S && S.defaultProps) {
        var pr = S.defaultProps;
        for (J in pr)
          Ne[J] === void 0 && (Ne[J] = pr[J]);
      }
      if (at || Ye) {
        var vr = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
        at && Ge(Ne, vr), Ye && Nt(Ne, vr);
      }
      return ur(S, at, Ye, ft, jt, it.current, Ne);
    }
    function Mn(S, A) {
      var G = ur(S.type, A, S.ref, S._self, S._source, S._owner, S.props);
      return G;
    }
    function na(S, A, G) {
      if (S == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
      var J, Ne = s({}, S.props), at = S.key, Ye = S.ref, ft = S._self, jt = S._source, kn = S._owner;
      if (A != null) {
        Pn(A) && (Ye = A.ref, kn = it.current), nn(A) && (at = "" + A.key);
        var Dn;
        S.type && S.type.defaultProps && (Dn = S.type.defaultProps);
        for (J in A)
          rt.call(A, J) && !ht.hasOwnProperty(J) && (A[J] === void 0 && Dn !== void 0 ? Ne[J] = Dn[J] : Ne[J] = A[J]);
      }
      var zn = arguments.length - 2;
      if (zn === 1)
        Ne.children = G;
      else if (zn > 1) {
        for (var pr = Array(zn), vr = 0; vr < zn; vr++)
          pr[vr] = arguments[vr + 2];
        Ne.children = pr;
      }
      return ur(S.type, at, Ye, ft, jt, kn, Ne);
    }
    function L(S) {
      return typeof S == "object" && S !== null && S.$$typeof === E;
    }
    var me = ".", Pe = ":";
    function ot(S) {
      var A = /[=:]/g, G = {
        "=": "=0",
        ":": "=2"
      }, J = ("" + S).replace(A, function(Ne) {
        return G[Ne];
      });
      return "$" + J;
    }
    var wt = !1, bt = /\/+/g;
    function Ct(S) {
      return ("" + S).replace(bt, "$&/");
    }
    var ct = 10, sn = [];
    function $n(S, A, G, J) {
      if (sn.length) {
        var Ne = sn.pop();
        return Ne.result = S, Ne.keyPrefix = A, Ne.func = G, Ne.context = J, Ne.count = 0, Ne;
      } else
        return {
          result: S,
          keyPrefix: A,
          func: G,
          context: J,
          count: 0
        };
    }
    function Fn(S) {
      S.result = null, S.keyPrefix = null, S.func = null, S.context = null, S.count = 0, sn.length < ct && sn.push(S);
    }
    function Zn(S, A, G, J) {
      var Ne = typeof S;
      (Ne === "undefined" || Ne === "boolean") && (S = null);
      var at = !1;
      if (S === null)
        at = !0;
      else
        switch (Ne) {
          case "string":
          case "number":
            at = !0;
            break;
          case "object":
            switch (S.$$typeof) {
              case E:
              case T:
                at = !0;
            }
        }
      if (at)
        return G(
          J,
          S,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          A === "" ? me + sr(S, 0) : A
        ), 1;
      var Ye, ft, jt = 0, kn = A === "" ? me : A + Pe;
      if (Array.isArray(S))
        for (var Dn = 0; Dn < S.length; Dn++)
          Ye = S[Dn], ft = kn + sr(Ye, Dn), jt += Zn(Ye, ft, G, J);
      else {
        var zn = ye(S);
        if (typeof zn == "function") {
          zn === S.entries && (wt || be("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."), wt = !0);
          for (var pr = zn.call(S), vr, al = 0; !(vr = pr.next()).done; )
            Ye = vr.value, ft = kn + sr(Ye, al++), jt += Zn(Ye, ft, G, J);
        } else if (Ne === "object") {
          var qa = "";
          qa = " If you meant to render a collection of children, use an array instead." + Te.getStackAddendum();
          var aa = "" + S;
          throw Error("Objects are not valid as a React child (found: " + (aa === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : aa) + ")." + qa);
        }
      }
      return jt;
    }
    function on(S, A, G) {
      return S == null ? 0 : Zn(S, "", A, G);
    }
    function sr(S, A) {
      return typeof S == "object" && S !== null && S.key != null ? ot(S.key) : A.toString(36);
    }
    function yi(S, A, G) {
      var J = S.func, Ne = S.context;
      J.call(Ne, A, S.count++);
    }
    function Ht(S, A, G) {
      if (S == null)
        return S;
      var J = $n(null, null, A, G);
      on(S, yi, J), Fn(J);
    }
    function hn(S, A, G) {
      var J = S.result, Ne = S.keyPrefix, at = S.func, Ye = S.context, ft = at.call(Ye, A, S.count++);
      Array.isArray(ft) ? Nr(ft, J, G, function(jt) {
        return jt;
      }) : ft != null && (L(ft) && (ft = Mn(
        ft,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        Ne + (ft.key && (!A || A.key !== ft.key) ? Ct(ft.key) + "/" : "") + G
      )), J.push(ft));
    }
    function Nr(S, A, G, J, Ne) {
      var at = "";
      G != null && (at = Ct(G) + "/");
      var Ye = $n(A, at, J, Ne);
      on(S, hn, Ye), Fn(Ye);
    }
    function Vn(S, A, G) {
      if (S == null)
        return S;
      var J = [];
      return Nr(S, J, null, A, G), J;
    }
    function Pr(S) {
      return on(S, function() {
        return null;
      }, null);
    }
    function cr(S) {
      var A = [];
      return Nr(S, A, null, function(G) {
        return G;
      }), A;
    }
    function Ba(S) {
      if (!L(S))
        throw Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
    function gi(S, A) {
      A === void 0 ? A = null : A !== null && typeof A != "function" && ne("createContext: Expected the optional second argument to be a function. Instead received: %s", A);
      var G = {
        $$typeof: P,
        _calculateChangedBits: A,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: S,
        _currentValue2: S,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      G.Provider = {
        $$typeof: z,
        _context: G
      };
      var J = !1, Ne = !1;
      {
        var at = {
          $$typeof: P,
          _context: G,
          _calculateChangedBits: G._calculateChangedBits
        };
        Object.defineProperties(at, {
          Provider: {
            get: function() {
              return Ne || (Ne = !0, ne("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), G.Provider;
            },
            set: function(Ye) {
              G.Provider = Ye;
            }
          },
          _currentValue: {
            get: function() {
              return G._currentValue;
            },
            set: function(Ye) {
              G._currentValue = Ye;
            }
          },
          _currentValue2: {
            get: function() {
              return G._currentValue2;
            },
            set: function(Ye) {
              G._currentValue2 = Ye;
            }
          },
          _threadCount: {
            get: function() {
              return G._threadCount;
            },
            set: function(Ye) {
              G._threadCount = Ye;
            }
          },
          Consumer: {
            get: function() {
              return J || (J = !0, ne("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), G.Consumer;
            }
          }
        }), G.Consumer = at;
      }
      return G._currentRenderer = null, G._currentRenderer2 = null, G;
    }
    function tl(S) {
      var A = {
        $$typeof: $,
        _ctor: S,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };
      {
        var G, J;
        Object.defineProperties(A, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(Ne) {
              ne("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Ne, Object.defineProperty(A, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(Ne) {
              ne("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Ne, Object.defineProperty(A, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return A;
    }
    function nl(S) {
      return S != null && S.$$typeof === te ? ne("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? ne("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && ne("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && ne("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"), {
        $$typeof: se,
        render: S
      };
    }
    function lo(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === R || S === q || S === N || S === y || S === he || S === ue || typeof S == "object" && S !== null && (S.$$typeof === $ || S.$$typeof === te || S.$$typeof === z || S.$$typeof === P || S.$$typeof === se || S.$$typeof === K || S.$$typeof === le || S.$$typeof === ae || S.$$typeof === de);
    }
    function bi(S, A) {
      return lo(S) || ne("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S), {
        $$typeof: te,
        type: S,
        compare: A === void 0 ? null : A
      };
    }
    function Wn() {
      var S = Xe.current;
      if (S === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
      return S;
    }
    function wa(S, A) {
      var G = Wn();
      if (A !== void 0 && ne("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", A, typeof A == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks` : ""), S._context !== void 0) {
        var J = S._context;
        J.Consumer === S ? ne("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : J.Provider === S && ne("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return G.useContext(S, A);
    }
    function Ya(S) {
      var A = Wn();
      return A.useState(S);
    }
    function fr(S, A, G) {
      var J = Wn();
      return J.useReducer(S, A, G);
    }
    function Ra(S) {
      var A = Wn();
      return A.useRef(S);
    }
    function Jn(S, A) {
      var G = Wn();
      return G.useEffect(S, A);
    }
    function ra(S, A) {
      var G = Wn();
      return G.useLayoutEffect(S, A);
    }
    function uo(S, A) {
      var G = Wn();
      return G.useCallback(S, A);
    }
    function Ga(S, A) {
      var G = Wn();
      return G.useMemo(S, A);
    }
    function so(S, A, G) {
      var J = Wn();
      return J.useImperativeHandle(S, A, G);
    }
    function oe(S, A) {
      {
        var G = Wn();
        return G.useDebugValue(S, A);
      }
    }
    var Ee;
    Ee = !1;
    function lt() {
      if (it.current) {
        var S = Ze(it.current.type);
        if (S)
          return `

Check the render method of \`` + S + "`.";
      }
      return "";
    }
    function Rt(S) {
      if (S !== void 0) {
        var A = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
        return `

Check your code at ` + A + ":" + G + ".";
      }
      return "";
    }
    function cn(S) {
      return S != null ? Rt(S.__source) : "";
    }
    var ln = {};
    function Tn(S) {
      var A = lt();
      if (!A) {
        var G = typeof S == "string" ? S : S.displayName || S.name;
        G && (A = `

Check the top-level render call using <` + G + ">.");
      }
      return A;
    }
    function dr(S, A) {
      if (!(!S._store || S._store.validated || S.key != null)) {
        S._store.validated = !0;
        var G = Tn(A);
        if (!ln[G]) {
          ln[G] = !0;
          var J = "";
          S && S._owner && S._owner !== it.current && (J = " It was passed a child from " + Ze(S._owner.type) + "."), _e(S), ne('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', G, J), _e(null);
        }
      }
    }
    function fn(S, A) {
      if (typeof S == "object") {
        if (Array.isArray(S))
          for (var G = 0; G < S.length; G++) {
            var J = S[G];
            L(J) && dr(J, A);
          }
        else if (L(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Ne = ye(S);
          if (typeof Ne == "function" && Ne !== S.entries)
            for (var at = Ne.call(S), Ye; !(Ye = at.next()).done; )
              L(Ye.value) && dr(Ye.value, A);
        }
      }
    }
    function Ei(S) {
      {
        var A = S.type;
        if (A == null || typeof A == "string")
          return;
        var G = Ze(A), J;
        if (typeof A == "function")
          J = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === te))
          J = A.propTypes;
        else
          return;
        J ? (_e(S), d(J, S.props, "prop", G, Te.getStackAddendum), _e(null)) : A.PropTypes !== void 0 && !Ee && (Ee = !0, ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown")), typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rl(S) {
      {
        _e(S);
        for (var A = Object.keys(S.props), G = 0; G < A.length; G++) {
          var J = A[G];
          if (J !== "children" && J !== "key") {
            ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J);
            break;
          }
        }
        S.ref !== null && ne("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null);
      }
    }
    function mn(S, A, G) {
      var J = lo(S);
      if (!J) {
        var Ne = "";
        (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var at = cn(A);
        at ? Ne += at : Ne += lt();
        var Ye;
        S === null ? Ye = "null" : Array.isArray(S) ? Ye = "array" : S !== void 0 && S.$$typeof === E ? (Ye = "<" + (Ze(S.type) || "Unknown") + " />", Ne = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof S, ne("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, Ne);
      }
      var ft = _n.apply(this, arguments);
      if (ft == null)
        return ft;
      if (J)
        for (var jt = 2; jt < arguments.length; jt++)
          fn(arguments[jt], S);
      return S === R ? rl(ft) : Ei(ft), ft;
    }
    var xn = !1;
    function co(S) {
      var A = mn.bind(null, S);
      return A.type = S, xn || (xn = !0, be("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(A, "type", {
        enumerable: !1,
        get: function() {
          return be("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: S
          }), S;
        }
      }), A;
    }
    function Bl(S, A, G) {
      for (var J = na.apply(this, arguments), Ne = 2; Ne < arguments.length; Ne++)
        fn(arguments[Ne], J.type);
      return Ei(J), J;
    }
    try {
      var Qa = Object.freeze({}), Yl = /* @__PURE__ */ new Map([[Qa, null]]), us = /* @__PURE__ */ new Set([Qa]);
      Yl.set(0, 0), us.add(0);
    } catch {
    }
    var fo = mn, Gl = Bl, ss = co, Ql = {
      map: Vn,
      forEach: Ht,
      count: Pr,
      toArray: cr,
      only: Ba
    };
    Qt.Children = Ql, Qt.Component = fe, Qt.Fragment = R, Qt.Profiler = N, Qt.PureComponent = ce, Qt.StrictMode = y, Qt.Suspense = he, Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yt, Qt.cloneElement = Gl, Qt.createContext = gi, Qt.createElement = fo, Qt.createFactory = ss, Qt.createRef = nt, Qt.forwardRef = nl, Qt.isValidElement = L, Qt.lazy = tl, Qt.memo = bi, Qt.useCallback = uo, Qt.useContext = wa, Qt.useDebugValue = oe, Qt.useEffect = Jn, Qt.useImperativeHandle = so, Qt.useLayoutEffect = ra, Qt.useMemo = Ga, Qt.useReducer = fr, Qt.useRef = Ra, Qt.useState = Ya, Qt.version = h;
  }()), Qt;
}
({}).NODE_ENV === "production" ? v0.exports = yk() : v0.exports = Ek();
var $e = v0.exports;
const Xn = /* @__PURE__ */ O0($e), OS = /* @__PURE__ */ hk({
  __proto__: null,
  default: Xn
}, [$e]);
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DS;
function Sk() {
  if (DS)
    return Yc;
  DS = 1;
  var s = $e, d = 60103;
  if (Yc.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    d = h("react.element"), Yc.Fragment = h("react.fragment");
  }
  var p = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = Object.prototype.hasOwnProperty, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(y, N, z) {
    var P, q = {}, se = null, he = null;
    z !== void 0 && (se = "" + z), N.key !== void 0 && (se = "" + N.key), N.ref !== void 0 && (he = N.ref);
    for (P in N)
      E.call(N, P) && !T.hasOwnProperty(P) && (q[P] = N[P]);
    if (y && y.defaultProps)
      for (P in N = y.defaultProps, N)
        q[P] === void 0 && (q[P] = N[P]);
    return { $$typeof: d, type: y, key: se, ref: he, props: q, _owner: p.current };
  }
  return Yc.jsx = R, Yc.jsxs = R, Yc;
}
var a0 = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AS;
function Ck() {
  return AS || (AS = 1, function(s) {
    ({}).NODE_ENV !== "production" && function() {
      var d = $e, h = 60103, p = 60106;
      s.Fragment = 60107;
      var E = 60108, T = 60114, R = 60109, y = 60110, N = 60112, z = 60113, P = 60120, q = 60115, se = 60116, he = 60121, ue = 60122, te = 60117, $ = 60129, de = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var K = Symbol.for;
        h = K("react.element"), p = K("react.portal"), s.Fragment = K("react.fragment"), E = K("react.strict_mode"), T = K("react.profiler"), R = K("react.provider"), y = K("react.context"), N = K("react.forward_ref"), z = K("react.suspense"), P = K("react.suspense_list"), q = K("react.memo"), se = K("react.lazy"), he = K("react.block"), ue = K("react.server.block"), te = K("react.fundamental"), K("react.scope"), K("react.opaque.id"), $ = K("react.debug_trace_mode"), K("react.offscreen"), de = K("react.legacy_hidden");
      }
      var le = typeof Symbol == "function" && Symbol.iterator, ae = "@@iterator";
      function M(L) {
        if (L === null || typeof L != "object")
          return null;
        var me = le && L[le] || L[ae];
        return typeof me == "function" ? me : null;
      }
      var ge = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function ye(L) {
        {
          for (var me = arguments.length, Pe = new Array(me > 1 ? me - 1 : 0), ot = 1; ot < me; ot++)
            Pe[ot - 1] = arguments[ot];
          Xe("error", L, Pe);
        }
      }
      function Xe(L, me, Pe) {
        {
          var ot = ge.ReactDebugCurrentFrame, wt = "";
          if (Ae) {
            var bt = Ze(Ae.type), Ct = Ae._owner;
            wt += et(bt, Ae._source, Ct && Ze(Ct.type));
          }
          wt += ot.getStackAddendum(), wt !== "" && (me += "%s", Pe = Pe.concat([wt]));
          var ct = Pe.map(function(sn) {
            return "" + sn;
          });
          ct.unshift("Warning: " + me), Function.prototype.apply.call(console[L], console, ct);
        }
      }
      var Ke = !1;
      function it(L) {
        return !!(typeof L == "string" || typeof L == "function" || L === s.Fragment || L === T || L === $ || L === E || L === z || L === P || L === de || Ke || typeof L == "object" && L !== null && (L.$$typeof === se || L.$$typeof === q || L.$$typeof === R || L.$$typeof === y || L.$$typeof === N || L.$$typeof === te || L.$$typeof === he || L[0] === ue));
      }
      var pt = /^(.*)[\\\/]/;
      function et(L, me, Pe) {
        var ot = "";
        if (me) {
          var wt = me.fileName, bt = wt.replace(pt, "");
          if (/^index\./.test(bt)) {
            var Ct = wt.match(pt);
            if (Ct) {
              var ct = Ct[1];
              if (ct) {
                var sn = ct.replace(pt, "");
                bt = sn + "/" + bt;
              }
            }
          }
          ot = " (at " + bt + ":" + me.lineNumber + ")";
        } else
          Pe && (ot = " (created by " + Pe + ")");
        return `
    in ` + (L || "Unknown") + ot;
      }
      var St = 1;
      function Qe(L) {
        return L._status === St ? L._result : null;
      }
      function Ce(L, me, Pe) {
        var ot = me.displayName || me.name || "";
        return L.displayName || (ot !== "" ? Pe + "(" + ot + ")" : Pe);
      }
      function Ze(L) {
        if (L == null)
          return null;
        if (typeof L.tag == "number" && ye("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof L == "function")
          return L.displayName || L.name || null;
        if (typeof L == "string")
          return L;
        switch (L) {
          case s.Fragment:
            return "Fragment";
          case p:
            return "Portal";
          case T:
            return "Profiler";
          case E:
            return "StrictMode";
          case z:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if (typeof L == "object")
          switch (L.$$typeof) {
            case y:
              return "Context.Consumer";
            case R:
              return "Context.Provider";
            case N:
              return Ce(L, L.render, "ForwardRef");
            case q:
              return Ze(L.type);
            case he:
              return Ze(L.render);
            case se: {
              var me = L, Pe = Qe(me);
              if (Pe)
                return Ze(Pe);
              break;
            }
          }
        return null;
      }
      var Te = {};
      ge.ReactDebugCurrentFrame;
      var Ae = null;
      function _e(L) {
        Ae = L;
      }
      function Be(L, me, Pe, ot, wt) {
        {
          var bt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Ct in L)
            if (bt(L, Ct)) {
              var ct = void 0;
              try {
                if (typeof L[Ct] != "function") {
                  var sn = Error((ot || "React class") + ": " + Pe + " type `" + Ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw sn.name = "Invariant Violation", sn;
                }
                ct = L[Ct](me, Ct, ot, Pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($n) {
                ct = $n;
              }
              ct && !(ct instanceof Error) && (_e(wt), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ot || "React class", Pe, Ct, typeof ct), _e(null)), ct instanceof Error && !(ct.message in Te) && (Te[ct.message] = !0, _e(wt), ye("Failed %s type: %s", Pe, ct.message), _e(null));
            }
        }
      }
      var yt = ge.ReactCurrentOwner, be = Object.prototype.hasOwnProperty, ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, U, w, x;
      x = {};
      function W(L) {
        if (be.call(L, "ref")) {
          var me = Object.getOwnPropertyDescriptor(L, "ref").get;
          if (me && me.isReactWarning)
            return !1;
        }
        return L.ref !== void 0;
      }
      function V(L) {
        if (be.call(L, "key")) {
          var me = Object.getOwnPropertyDescriptor(L, "key").get;
          if (me && me.isReactWarning)
            return !1;
        }
        return L.key !== void 0;
      }
      function fe(L, me) {
        if (typeof L.ref == "string" && yt.current && me && yt.current.stateNode !== me) {
          var Pe = Ze(yt.current.type);
          x[Pe] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ze(yt.current.type), L.ref), x[Pe] = !0);
        }
      }
      function Oe(L, me) {
        {
          var Pe = function() {
            U || (U = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
          };
          Pe.isReactWarning = !0, Object.defineProperty(L, "key", {
            get: Pe,
            configurable: !0
          });
        }
      }
      function Se(L, me) {
        {
          var Pe = function() {
            w || (w = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
          };
          Pe.isReactWarning = !0, Object.defineProperty(L, "ref", {
            get: Pe,
            configurable: !0
          });
        }
      }
      var H = function(L, me, Pe, ot, wt, bt, Ct) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: L,
          key: me,
          ref: Pe,
          props: Ct,
          // Record the component responsible for creating this element.
          _owner: bt
        };
        return ct._store = {}, Object.defineProperty(ct._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ct, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ot
        }), Object.defineProperty(ct, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: wt
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function qe(L, me, Pe, ot, wt) {
        {
          var bt, Ct = {}, ct = null, sn = null;
          Pe !== void 0 && (ct = "" + Pe), V(me) && (ct = "" + me.key), W(me) && (sn = me.ref, fe(me, wt));
          for (bt in me)
            be.call(me, bt) && !ne.hasOwnProperty(bt) && (Ct[bt] = me[bt]);
          if (L && L.defaultProps) {
            var $n = L.defaultProps;
            for (bt in $n)
              Ct[bt] === void 0 && (Ct[bt] = $n[bt]);
          }
          if (ct || sn) {
            var Fn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
            ct && Oe(Ct, Fn), sn && Se(Ct, Fn);
          }
          return H(L, ct, sn, wt, ot, yt.current, Ct);
        }
      }
      var ce = ge.ReactCurrentOwner;
      ge.ReactDebugCurrentFrame;
      function Ue(L) {
        Ae = L;
      }
      var nt;
      nt = !1;
      function rt(L) {
        return typeof L == "object" && L !== null && L.$$typeof === h;
      }
      function ht() {
        {
          if (ce.current) {
            var L = Ze(ce.current.type);
            if (L)
              return `

Check the render method of \`` + L + "`.";
          }
          return "";
        }
      }
      function Hn(L) {
        {
          if (L !== void 0) {
            var me = L.fileName.replace(/^.*[\\\/]/, ""), Pe = L.lineNumber;
            return `

Check your code at ` + me + ":" + Pe + ".";
          }
          return "";
        }
      }
      var At = {};
      function Rn(L) {
        {
          var me = ht();
          if (!me) {
            var Pe = typeof L == "string" ? L : L.displayName || L.name;
            Pe && (me = `

Check the top-level render call using <` + Pe + ">.");
          }
          return me;
        }
      }
      function Pn(L, me) {
        {
          if (!L._store || L._store.validated || L.key != null)
            return;
          L._store.validated = !0;
          var Pe = Rn(me);
          if (At[Pe])
            return;
          At[Pe] = !0;
          var ot = "";
          L && L._owner && L._owner !== ce.current && (ot = " It was passed a child from " + Ze(L._owner.type) + "."), Ue(L), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Pe, ot), Ue(null);
        }
      }
      function nn(L, me) {
        {
          if (typeof L != "object")
            return;
          if (Array.isArray(L))
            for (var Pe = 0; Pe < L.length; Pe++) {
              var ot = L[Pe];
              rt(ot) && Pn(ot, me);
            }
          else if (rt(L))
            L._store && (L._store.validated = !0);
          else if (L) {
            var wt = M(L);
            if (typeof wt == "function" && wt !== L.entries)
              for (var bt = wt.call(L), Ct; !(Ct = bt.next()).done; )
                rt(Ct.value) && Pn(Ct.value, me);
          }
        }
      }
      function Ge(L) {
        {
          var me = L.type;
          if (me == null || typeof me == "string")
            return;
          var Pe;
          if (typeof me == "function")
            Pe = me.propTypes;
          else if (typeof me == "object" && (me.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          me.$$typeof === q))
            Pe = me.propTypes;
          else
            return;
          if (Pe) {
            var ot = Ze(me);
            Be(Pe, L.props, "prop", ot, L);
          } else if (me.PropTypes !== void 0 && !nt) {
            nt = !0;
            var wt = Ze(me);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", wt || "Unknown");
          }
          typeof me.getDefaultProps == "function" && !me.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Nt(L) {
        {
          for (var me = Object.keys(L.props), Pe = 0; Pe < me.length; Pe++) {
            var ot = me[Pe];
            if (ot !== "children" && ot !== "key") {
              Ue(L), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ot), Ue(null);
              break;
            }
          }
          L.ref !== null && (Ue(L), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function Cn(L, me, Pe, ot, wt, bt) {
        {
          var Ct = it(L);
          if (!Ct) {
            var ct = "";
            (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sn = Hn(wt);
            sn ? ct += sn : ct += ht();
            var $n;
            L === null ? $n = "null" : Array.isArray(L) ? $n = "array" : L !== void 0 && L.$$typeof === h ? ($n = "<" + (Ze(L.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : $n = typeof L, ye("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $n, ct);
          }
          var Fn = qe(L, me, Pe, wt, bt);
          if (Fn == null)
            return Fn;
          if (Ct) {
            var Zn = me.children;
            if (Zn !== void 0)
              if (ot)
                if (Array.isArray(Zn)) {
                  for (var on = 0; on < Zn.length; on++)
                    nn(Zn[on], L);
                  Object.freeze && Object.freeze(Zn);
                } else
                  ye("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                nn(Zn, L);
          }
          return L === s.Fragment ? Nt(Fn) : Ge(Fn), Fn;
        }
      }
      function ur(L, me, Pe) {
        return Cn(L, me, Pe, !0);
      }
      function _n(L, me, Pe) {
        return Cn(L, me, Pe, !1);
      }
      var Mn = _n, na = ur;
      s.jsx = Mn, s.jsxs = na;
    }();
  }(a0)), a0;
}
({}).NODE_ENV === "production" ? p0.exports = Sk() : p0.exports = Ck();
var Yr = p0.exports;
function Tk(s) {
  if (s.sheet)
    return s.sheet;
  for (var d = 0; d < document.styleSheets.length; d++)
    if (document.styleSheets[d].ownerNode === s)
      return document.styleSheets[d];
}
function xk(s) {
  var d = document.createElement("style");
  return d.setAttribute("data-emotion", s.key), s.nonce !== void 0 && d.setAttribute("nonce", s.nonce), d.appendChild(document.createTextNode("")), d.setAttribute("data-s", ""), d;
}
var wk = /* @__PURE__ */ function() {
  function s(h) {
    var p = this;
    this._insertTag = function(E) {
      var T;
      p.tags.length === 0 ? p.insertionPoint ? T = p.insertionPoint.nextSibling : p.prepend ? T = p.container.firstChild : T = p.before : T = p.tags[p.tags.length - 1].nextSibling, p.container.insertBefore(E, T), p.tags.push(E);
    }, this.isSpeedy = h.speedy === void 0 ? {}.NODE_ENV === "production" : h.speedy, this.tags = [], this.ctr = 0, this.nonce = h.nonce, this.key = h.key, this.container = h.container, this.prepend = h.prepend, this.insertionPoint = h.insertionPoint, this.before = null;
  }
  var d = s.prototype;
  return d.hydrate = function(p) {
    p.forEach(this._insertTag);
  }, d.insert = function(p) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xk(this));
    var E = this.tags[this.tags.length - 1];
    if ({}.NODE_ENV !== "production") {
      var T = p.charCodeAt(0) === 64 && p.charCodeAt(1) === 105;
      T && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + p + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !T;
    }
    if (this.isSpeedy) {
      var R = Tk(E);
      try {
        R.insertRule(p, R.cssRules.length);
      } catch (y) {
        ({}).NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(p) && console.error('There was a problem inserting the following rule: "' + p + '"', y);
      }
    } else
      E.appendChild(document.createTextNode(p));
    this.ctr++;
  }, d.flush = function() {
    this.tags.forEach(function(p) {
      return p.parentNode && p.parentNode.removeChild(p);
    }), this.tags = [], this.ctr = 0, {}.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, s;
}(), Dr = "-ms-", tm = "-moz-", Vt = "-webkit-", D0 = "comm", A0 = "rule", N0 = "decl", Rk = "@import", TC = "@keyframes", _k = Math.abs, um = String.fromCharCode, kk = Object.assign;
function Ok(s, d) {
  return Sr(s, 0) ^ 45 ? (((d << 2 ^ Sr(s, 0)) << 2 ^ Sr(s, 1)) << 2 ^ Sr(s, 2)) << 2 ^ Sr(s, 3) : 0;
}
function xC(s) {
  return s.trim();
}
function Dk(s, d) {
  return (s = d.exec(s)) ? s[0] : s;
}
function Wt(s, d, h) {
  return s.replace(d, h);
}
function h0(s, d) {
  return s.indexOf(d);
}
function Sr(s, d) {
  return s.charCodeAt(d) | 0;
}
function cp(s, d, h) {
  return s.slice(d, h);
}
function io(s) {
  return s.length;
}
function P0(s) {
  return s.length;
}
function Wh(s, d) {
  return d.push(s), s;
}
function Ak(s, d) {
  return s.map(d).join("");
}
var sm = 1, qc = 1, wC = 0, ta = 0, Kn = 0, Zc = "";
function cm(s, d, h, p, E, T, R) {
  return { value: s, root: d, parent: h, type: p, props: E, children: T, line: sm, column: qc, length: R, return: "" };
}
function lp(s, d) {
  return kk(cm("", null, null, "", null, null, 0), s, { length: -s.length }, d);
}
function Nk() {
  return Kn;
}
function Pk() {
  return Kn = ta > 0 ? Sr(Zc, --ta) : 0, qc--, Kn === 10 && (qc = 1, sm--), Kn;
}
function xa() {
  return Kn = ta < wC ? Sr(Zc, ta++) : 0, qc++, Kn === 10 && (qc = 1, sm++), Kn;
}
function oo() {
  return Sr(Zc, ta);
}
function Xh() {
  return ta;
}
function mp(s, d) {
  return cp(Zc, s, d);
}
function fp(s) {
  switch (s) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function RC(s) {
  return sm = qc = 1, wC = io(Zc = s), ta = 0, [];
}
function _C(s) {
  return Zc = "", s;
}
function Kh(s) {
  return xC(mp(ta - 1, m0(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function Mk(s) {
  for (; (Kn = oo()) && Kn < 33; )
    xa();
  return fp(s) > 2 || fp(Kn) > 3 ? "" : " ";
}
function Fk(s, d) {
  for (; --d && xa() && !(Kn < 48 || Kn > 102 || Kn > 57 && Kn < 65 || Kn > 70 && Kn < 97); )
    ;
  return mp(s, Xh() + (d < 6 && oo() == 32 && xa() == 32));
}
function m0(s) {
  for (; xa(); )
    switch (Kn) {
      case s:
        return ta;
      case 34:
      case 39:
        s !== 34 && s !== 39 && m0(Kn);
        break;
      case 40:
        s === 41 && m0(s);
        break;
      case 92:
        xa();
        break;
    }
  return ta;
}
function zk(s, d) {
  for (; xa() && s + Kn !== 47 + 10; )
    if (s + Kn === 42 + 42 && oo() === 47)
      break;
  return "/*" + mp(d, ta - 1) + "*" + um(s === 47 ? s : xa());
}
function Lk(s) {
  for (; !fp(oo()); )
    xa();
  return mp(s, ta);
}
function Uk(s) {
  return _C(Zh("", null, null, null, [""], s = RC(s), 0, [0], s));
}
function Zh(s, d, h, p, E, T, R, y, N) {
  for (var z = 0, P = 0, q = R, se = 0, he = 0, ue = 0, te = 1, $ = 1, de = 1, K = 0, le = "", ae = E, M = T, ge = p, ye = le; $; )
    switch (ue = K, K = xa()) {
      case 40:
        if (ue != 108 && Sr(ye, q - 1) == 58) {
          h0(ye += Wt(Kh(K), "&", "&\f"), "&\f") != -1 && (de = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        ye += Kh(K);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        ye += Mk(ue);
        break;
      case 92:
        ye += Fk(Xh() - 1, 7);
        continue;
      case 47:
        switch (oo()) {
          case 42:
          case 47:
            Wh(Ik(zk(xa(), Xh()), d, h), N);
            break;
          default:
            ye += "/";
        }
        break;
      case 123 * te:
        y[z++] = io(ye) * de;
      case 125 * te:
      case 59:
      case 0:
        switch (K) {
          case 0:
          case 125:
            $ = 0;
          case 59 + P:
            de == -1 && (ye = Wt(ye, /\f/g, "")), he > 0 && io(ye) - q && Wh(he > 32 ? PS(ye + ";", p, h, q - 1) : PS(Wt(ye, " ", "") + ";", p, h, q - 2), N);
            break;
          case 59:
            ye += ";";
          default:
            if (Wh(ge = NS(ye, d, h, z, P, E, y, le, ae = [], M = [], q), T), K === 123)
              if (P === 0)
                Zh(ye, d, ge, ge, ae, T, q, y, M);
              else
                switch (se === 99 && Sr(ye, 3) === 110 ? 100 : se) {
                  case 100:
                  case 109:
                  case 115:
                    Zh(s, ge, ge, p && Wh(NS(s, ge, ge, 0, 0, E, y, le, E, ae = [], q), M), E, M, q, y, p ? ae : M);
                    break;
                  default:
                    Zh(ye, ge, ge, ge, [""], M, 0, y, M);
                }
        }
        z = P = he = 0, te = de = 1, le = ye = "", q = R;
        break;
      case 58:
        q = 1 + io(ye), he = ue;
      default:
        if (te < 1) {
          if (K == 123)
            --te;
          else if (K == 125 && te++ == 0 && Pk() == 125)
            continue;
        }
        switch (ye += um(K), K * te) {
          case 38:
            de = P > 0 ? 1 : (ye += "\f", -1);
            break;
          case 44:
            y[z++] = (io(ye) - 1) * de, de = 1;
            break;
          case 64:
            oo() === 45 && (ye += Kh(xa())), se = oo(), P = q = io(le = ye += Lk(Xh())), K++;
            break;
          case 45:
            ue === 45 && io(ye) == 2 && (te = 0);
        }
    }
  return T;
}
function NS(s, d, h, p, E, T, R, y, N, z, P) {
  for (var q = E - 1, se = E === 0 ? T : [""], he = P0(se), ue = 0, te = 0, $ = 0; ue < p; ++ue)
    for (var de = 0, K = cp(s, q + 1, q = _k(te = R[ue])), le = s; de < he; ++de)
      (le = xC(te > 0 ? se[de] + " " + K : Wt(K, /&\f/g, se[de]))) && (N[$++] = le);
  return cm(s, d, h, E === 0 ? A0 : y, N, z, P);
}
function Ik(s, d, h) {
  return cm(s, d, h, D0, um(Nk()), cp(s, 2, -2), 0);
}
function PS(s, d, h, p) {
  return cm(s, d, h, N0, cp(s, 0, p), cp(s, p + 1, -1), p);
}
function Qc(s, d) {
  for (var h = "", p = P0(s), E = 0; E < p; E++)
    h += d(s[E], E, s, d) || "";
  return h;
}
function jk(s, d, h, p) {
  switch (s.type) {
    case Rk:
    case N0:
      return s.return = s.return || s.value;
    case D0:
      return "";
    case TC:
      return s.return = s.value + "{" + Qc(s.children, p) + "}";
    case A0:
      s.value = s.props.join(",");
  }
  return io(h = Qc(s.children, p)) ? s.return = s.value + "{" + h + "}" : "";
}
function Hk(s) {
  var d = P0(s);
  return function(h, p, E, T) {
    for (var R = "", y = 0; y < d; y++)
      R += s[y](h, p, E, T) || "";
    return R;
  };
}
function $k(s) {
  return function(d) {
    d.root || (d = d.return) && s(d);
  };
}
function kC(s) {
  var d = /* @__PURE__ */ Object.create(null);
  return function(h) {
    return d[h] === void 0 && (d[h] = s(h)), d[h];
  };
}
var Vk = function(d, h, p) {
  for (var E = 0, T = 0; E = T, T = oo(), E === 38 && T === 12 && (h[p] = 1), !fp(T); )
    xa();
  return mp(d, ta);
}, Wk = function(d, h) {
  var p = -1, E = 44;
  do
    switch (fp(E)) {
      case 0:
        E === 38 && oo() === 12 && (h[p] = 1), d[p] += Vk(ta - 1, h, p);
        break;
      case 2:
        d[p] += Kh(E);
        break;
      case 4:
        if (E === 44) {
          d[++p] = oo() === 58 ? "&\f" : "", h[p] = d[p].length;
          break;
        }
      default:
        d[p] += um(E);
    }
  while (E = xa());
  return d;
}, Bk = function(d, h) {
  return _C(Wk(RC(d), h));
}, MS = /* @__PURE__ */ new WeakMap(), Yk = function(d) {
  if (!(d.type !== "rule" || !d.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  d.length < 1)) {
    for (var h = d.value, p = d.parent, E = d.column === p.column && d.line === p.line; p.type !== "rule"; )
      if (p = p.parent, !p)
        return;
    if (!(d.props.length === 1 && h.charCodeAt(0) !== 58 && !MS.get(p)) && !E) {
      MS.set(d, !0);
      for (var T = [], R = Bk(h, T), y = p.props, N = 0, z = 0; N < R.length; N++)
        for (var P = 0; P < y.length; P++, z++)
          d.props[z] = T[N] ? R[N].replace(/&\f/g, y[P]) : y[P] + " " + R[N];
    }
  }
}, Gk = function(d) {
  if (d.type === "decl") {
    var h = d.value;
    // charcode for l
    h.charCodeAt(0) === 108 && // charcode for b
    h.charCodeAt(2) === 98 && (d.return = "", d.value = "");
  }
}, Qk = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", qk = function(d) {
  return d.type === "comm" && d.children.indexOf(Qk) > -1;
}, Xk = function(d) {
  return function(h, p, E) {
    if (!(h.type !== "rule" || d.compat)) {
      var T = h.value.match(/(:first|:nth|:nth-last)-child/g);
      if (T) {
        for (var R = !!h.parent, y = R ? h.parent.children : (
          // ({}) rule at the root level
          E
        ), N = y.length - 1; N >= 0; N--) {
          var z = y[N];
          if (z.line < h.line)
            break;
          if (z.column < h.column) {
            if (qk(z))
              return;
            break;
          }
        }
        T.forEach(function(P) {
          console.error('The pseudo class "' + P + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + P.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, OC = function(d) {
  return d.type.charCodeAt(1) === 105 && d.type.charCodeAt(0) === 64;
}, Kk = function(d, h) {
  for (var p = d - 1; p >= 0; p--)
    if (!OC(h[p]))
      return !0;
  return !1;
}, FS = function(d) {
  d.type = "", d.value = "", d.return = "", d.children = "", d.props = "";
}, Zk = function(d, h, p) {
  OC(d) && (d.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within ({}) styles."), FS(d)) : Kk(h, p) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), FS(d)));
};
function DC(s, d) {
  switch (Ok(s, d)) {
    case 5103:
      return Vt + "print-" + s + s;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Vt + s + s;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Vt + s + tm + s + Dr + s + s;
    case 6828:
    case 4268:
      return Vt + s + Dr + s + s;
    case 6165:
      return Vt + s + Dr + "flex-" + s + s;
    case 5187:
      return Vt + s + Wt(s, /(\w+).+(:[^]+)/, Vt + "box-$1$2" + Dr + "flex-$1$2") + s;
    case 5443:
      return Vt + s + Dr + "flex-item-" + Wt(s, /flex-|-self/, "") + s;
    case 4675:
      return Vt + s + Dr + "flex-line-pack" + Wt(s, /align-content|flex-|-self/, "") + s;
    case 5548:
      return Vt + s + Dr + Wt(s, "shrink", "negative") + s;
    case 5292:
      return Vt + s + Dr + Wt(s, "basis", "preferred-size") + s;
    case 6060:
      return Vt + "box-" + Wt(s, "-grow", "") + Vt + s + Dr + Wt(s, "grow", "positive") + s;
    case 4554:
      return Vt + Wt(s, /([^-])(transform)/g, "$1" + Vt + "$2") + s;
    case 6187:
      return Wt(Wt(Wt(s, /(zoom-|grab)/, Vt + "$1"), /(image-set)/, Vt + "$1"), s, "") + s;
    case 5495:
    case 3959:
      return Wt(s, /(image-set\([^]*)/, Vt + "$1$`$1");
    case 4968:
      return Wt(Wt(s, /(.+:)(flex-)?(.*)/, Vt + "box-pack:$3" + Dr + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Vt + s + s;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Wt(s, /(.+)-inline(.+)/, Vt + "$1$2") + s;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (io(s) - 1 - d > 6)
        switch (Sr(s, d + 1)) {
          case 109:
            if (Sr(s, d + 4) !== 45)
              break;
          case 102:
            return Wt(s, /(.+:)(.+)-([^]+)/, "$1" + Vt + "$2-$3$1" + tm + (Sr(s, d + 3) == 108 ? "$3" : "$2-$3")) + s;
          case 115:
            return ~h0(s, "stretch") ? DC(Wt(s, "stretch", "fill-available"), d) + s : s;
        }
      break;
    case 4949:
      if (Sr(s, d + 1) !== 115)
        break;
    case 6444:
      switch (Sr(s, io(s) - 3 - (~h0(s, "!important") && 10))) {
        case 107:
          return Wt(s, ":", ":" + Vt) + s;
        case 101:
          return Wt(s, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Vt + (Sr(s, 14) === 45 ? "inline-" : "") + "box$3$1" + Vt + "$2$3$1" + Dr + "$2box$3") + s;
      }
      break;
    case 5936:
      switch (Sr(s, d + 11)) {
        case 114:
          return Vt + s + Dr + Wt(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        case 108:
          return Vt + s + Dr + Wt(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        case 45:
          return Vt + s + Dr + Wt(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
      return Vt + s + Dr + s + s;
  }
  return s;
}
var Jk = function(d, h, p, E) {
  if (d.length > -1 && !d.return)
    switch (d.type) {
      case N0:
        d.return = DC(d.value, d.length);
        break;
      case TC:
        return Qc([lp(d, {
          value: Wt(d.value, "@", "@" + Vt)
        })], E);
      case A0:
        if (d.length)
          return Ak(d.props, function(T) {
            switch (Dk(T, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Qc([lp(d, {
                  props: [Wt(T, /:(read-\w+)/, ":" + tm + "$1")]
                })], E);
              case "::placeholder":
                return Qc([lp(d, {
                  props: [Wt(T, /:(plac\w+)/, ":" + Vt + "input-$1")]
                }), lp(d, {
                  props: [Wt(T, /:(plac\w+)/, ":" + tm + "$1")]
                }), lp(d, {
                  props: [Wt(T, /:(plac\w+)/, Dr + "input-$1")]
                })], E);
            }
            return "";
          });
    }
}, eO = [Jk], tO = function(d) {
  var h = d.key;
  if ({}.NODE_ENV !== "production" && !h)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (h === "css") {
    var p = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(p, function(te) {
      var $ = te.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(te), te.setAttribute("data-s", ""));
    });
  }
  var E = d.stylisPlugins || eO;
  if ({}.NODE_ENV !== "production" && /[^a-z-]/.test(h))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + h + '" was passed');
  var T = {}, R, y = [];
  R = d.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + h + ' "]'),
    function(te) {
      for (var $ = te.getAttribute("data-emotion").split(" "), de = 1; de < $.length; de++)
        T[$[de]] = !0;
      y.push(te);
    }
  );
  var N, z = [Yk, Gk];
  ({}).NODE_ENV !== "production" && z.push(Xk({
    get compat() {
      return ue.compat;
    }
  }), Zk);
  {
    var P, q = [jk, {}.NODE_ENV !== "production" ? function(te) {
      te.root || (te.return ? P.insert(te.return) : te.value && te.type !== D0 && P.insert(te.value + "{}"));
    } : $k(function(te) {
      P.insert(te);
    })], se = Hk(z.concat(E, q)), he = function($) {
      return Qc(Uk($), se);
    };
    N = function($, de, K, le) {
      P = K, {}.NODE_ENV !== "production" && de.map !== void 0 && (P = {
        insert: function(M) {
          K.insert(M + de.map);
        }
      }), he($ ? $ + "{" + de.styles + "}" : de.styles), le && (ue.inserted[de.name] = !0);
    };
  }
  var ue = {
    key: h,
    sheet: new wk({
      key: h,
      container: R,
      nonce: d.nonce,
      speedy: d.speedy,
      prepend: d.prepend,
      insertionPoint: d.insertionPoint
    }),
    nonce: d.nonce,
    inserted: T,
    registered: {},
    insert: N
  };
  return ue.sheet.hydrate(y), ue;
};
function nm() {
  return nm = Object.assign ? Object.assign.bind() : function(s) {
    for (var d = 1; d < arguments.length; d++) {
      var h = arguments[d];
      for (var p in h)
        Object.prototype.hasOwnProperty.call(h, p) && (s[p] = h[p]);
    }
    return s;
  }, nm.apply(this, arguments);
}
var y0 = { exports: {} }, qt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zS;
function nO() {
  if (zS)
    return qt;
  zS = 1;
  var s = typeof Symbol == "function" && Symbol.for, d = s ? Symbol.for("react.element") : 60103, h = s ? Symbol.for("react.portal") : 60106, p = s ? Symbol.for("react.fragment") : 60107, E = s ? Symbol.for("react.strict_mode") : 60108, T = s ? Symbol.for("react.profiler") : 60114, R = s ? Symbol.for("react.provider") : 60109, y = s ? Symbol.for("react.context") : 60110, N = s ? Symbol.for("react.async_mode") : 60111, z = s ? Symbol.for("react.concurrent_mode") : 60111, P = s ? Symbol.for("react.forward_ref") : 60112, q = s ? Symbol.for("react.suspense") : 60113, se = s ? Symbol.for("react.suspense_list") : 60120, he = s ? Symbol.for("react.memo") : 60115, ue = s ? Symbol.for("react.lazy") : 60116, te = s ? Symbol.for("react.block") : 60121, $ = s ? Symbol.for("react.fundamental") : 60117, de = s ? Symbol.for("react.responder") : 60118, K = s ? Symbol.for("react.scope") : 60119;
  function le(M) {
    if (typeof M == "object" && M !== null) {
      var ge = M.$$typeof;
      switch (ge) {
        case d:
          switch (M = M.type, M) {
            case N:
            case z:
            case p:
            case T:
            case E:
            case q:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case y:
                case P:
                case ue:
                case he:
                case R:
                  return M;
                default:
                  return ge;
              }
          }
        case h:
          return ge;
      }
    }
  }
  function ae(M) {
    return le(M) === z;
  }
  return qt.AsyncMode = N, qt.ConcurrentMode = z, qt.ContextConsumer = y, qt.ContextProvider = R, qt.Element = d, qt.ForwardRef = P, qt.Fragment = p, qt.Lazy = ue, qt.Memo = he, qt.Portal = h, qt.Profiler = T, qt.StrictMode = E, qt.Suspense = q, qt.isAsyncMode = function(M) {
    return ae(M) || le(M) === N;
  }, qt.isConcurrentMode = ae, qt.isContextConsumer = function(M) {
    return le(M) === y;
  }, qt.isContextProvider = function(M) {
    return le(M) === R;
  }, qt.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === d;
  }, qt.isForwardRef = function(M) {
    return le(M) === P;
  }, qt.isFragment = function(M) {
    return le(M) === p;
  }, qt.isLazy = function(M) {
    return le(M) === ue;
  }, qt.isMemo = function(M) {
    return le(M) === he;
  }, qt.isPortal = function(M) {
    return le(M) === h;
  }, qt.isProfiler = function(M) {
    return le(M) === T;
  }, qt.isStrictMode = function(M) {
    return le(M) === E;
  }, qt.isSuspense = function(M) {
    return le(M) === q;
  }, qt.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === p || M === z || M === T || M === E || M === q || M === se || typeof M == "object" && M !== null && (M.$$typeof === ue || M.$$typeof === he || M.$$typeof === R || M.$$typeof === y || M.$$typeof === P || M.$$typeof === $ || M.$$typeof === de || M.$$typeof === K || M.$$typeof === te);
  }, qt.typeOf = le, qt;
}
var Xt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LS;
function rO() {
  return LS || (LS = 1, {}.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, d = s ? Symbol.for("react.element") : 60103, h = s ? Symbol.for("react.portal") : 60106, p = s ? Symbol.for("react.fragment") : 60107, E = s ? Symbol.for("react.strict_mode") : 60108, T = s ? Symbol.for("react.profiler") : 60114, R = s ? Symbol.for("react.provider") : 60109, y = s ? Symbol.for("react.context") : 60110, N = s ? Symbol.for("react.async_mode") : 60111, z = s ? Symbol.for("react.concurrent_mode") : 60111, P = s ? Symbol.for("react.forward_ref") : 60112, q = s ? Symbol.for("react.suspense") : 60113, se = s ? Symbol.for("react.suspense_list") : 60120, he = s ? Symbol.for("react.memo") : 60115, ue = s ? Symbol.for("react.lazy") : 60116, te = s ? Symbol.for("react.block") : 60121, $ = s ? Symbol.for("react.fundamental") : 60117, de = s ? Symbol.for("react.responder") : 60118, K = s ? Symbol.for("react.scope") : 60119;
    function le(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === p || H === z || H === T || H === E || H === q || H === se || typeof H == "object" && H !== null && (H.$$typeof === ue || H.$$typeof === he || H.$$typeof === R || H.$$typeof === y || H.$$typeof === P || H.$$typeof === $ || H.$$typeof === de || H.$$typeof === K || H.$$typeof === te);
    }
    function ae(H) {
      if (typeof H == "object" && H !== null) {
        var qe = H.$$typeof;
        switch (qe) {
          case d:
            var ce = H.type;
            switch (ce) {
              case N:
              case z:
              case p:
              case T:
              case E:
              case q:
                return ce;
              default:
                var Ue = ce && ce.$$typeof;
                switch (Ue) {
                  case y:
                  case P:
                  case ue:
                  case he:
                  case R:
                    return Ue;
                  default:
                    return qe;
                }
            }
          case h:
            return qe;
        }
      }
    }
    var M = N, ge = z, ye = y, Xe = R, Ke = d, it = P, pt = p, et = ue, St = he, Qe = h, Ce = T, Ze = E, Te = q, Ae = !1;
    function _e(H) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Be(H) || ae(H) === N;
    }
    function Be(H) {
      return ae(H) === z;
    }
    function yt(H) {
      return ae(H) === y;
    }
    function be(H) {
      return ae(H) === R;
    }
    function ne(H) {
      return typeof H == "object" && H !== null && H.$$typeof === d;
    }
    function U(H) {
      return ae(H) === P;
    }
    function w(H) {
      return ae(H) === p;
    }
    function x(H) {
      return ae(H) === ue;
    }
    function W(H) {
      return ae(H) === he;
    }
    function V(H) {
      return ae(H) === h;
    }
    function fe(H) {
      return ae(H) === T;
    }
    function Oe(H) {
      return ae(H) === E;
    }
    function Se(H) {
      return ae(H) === q;
    }
    Xt.AsyncMode = M, Xt.ConcurrentMode = ge, Xt.ContextConsumer = ye, Xt.ContextProvider = Xe, Xt.Element = Ke, Xt.ForwardRef = it, Xt.Fragment = pt, Xt.Lazy = et, Xt.Memo = St, Xt.Portal = Qe, Xt.Profiler = Ce, Xt.StrictMode = Ze, Xt.Suspense = Te, Xt.isAsyncMode = _e, Xt.isConcurrentMode = Be, Xt.isContextConsumer = yt, Xt.isContextProvider = be, Xt.isElement = ne, Xt.isForwardRef = U, Xt.isFragment = w, Xt.isLazy = x, Xt.isMemo = W, Xt.isPortal = V, Xt.isProfiler = fe, Xt.isStrictMode = Oe, Xt.isSuspense = Se, Xt.isValidElementType = le, Xt.typeOf = ae;
  }()), Xt;
}
({}).NODE_ENV === "production" ? y0.exports = nO() : y0.exports = rO();
var aO = y0.exports, M0 = aO, iO = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, oO = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, lO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, AC = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, F0 = {};
F0[M0.ForwardRef] = lO;
F0[M0.Memo] = AC;
function US(s) {
  return M0.isMemo(s) ? AC : F0[s.$$typeof] || iO;
}
var uO = Object.defineProperty, sO = Object.getOwnPropertyNames, IS = Object.getOwnPropertySymbols, cO = Object.getOwnPropertyDescriptor, fO = Object.getPrototypeOf, jS = Object.prototype;
function NC(s, d, h) {
  if (typeof d != "string") {
    if (jS) {
      var p = fO(d);
      p && p !== jS && NC(s, p, h);
    }
    var E = sO(d);
    IS && (E = E.concat(IS(d)));
    for (var T = US(s), R = US(d), y = 0; y < E.length; ++y) {
      var N = E[y];
      if (!oO[N] && !(h && h[N]) && !(R && R[N]) && !(T && T[N])) {
        var z = cO(d, N);
        try {
          uO(s, N, z);
        } catch {
        }
      }
    }
  }
  return s;
}
var dO = NC;
const pO = /* @__PURE__ */ O0(dO);
var vO = !0;
function PC(s, d, h) {
  var p = "";
  return h.split(" ").forEach(function(E) {
    s[E] !== void 0 ? d.push(s[E] + ";") : p += E + " ";
  }), p;
}
var z0 = function(d, h, p) {
  var E = d.key + "-" + h.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (p === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is ({}) or not
  // also, note that this check will be dead code eliminated in the browser
  vO === !1) && d.registered[E] === void 0 && (d.registered[E] = h.styles);
}, L0 = function(d, h, p) {
  z0(d, h, p);
  var E = d.key + "-" + h.name;
  if (d.inserted[h.name] === void 0) {
    var T = h;
    do
      d.insert(h === T ? "." + E : "", T, d.sheet, !0), T = T.next;
    while (T !== void 0);
  }
};
function hO(s) {
  for (var d = 0, h, p = 0, E = s.length; E >= 4; ++p, E -= 4)
    h = s.charCodeAt(p) & 255 | (s.charCodeAt(++p) & 255) << 8 | (s.charCodeAt(++p) & 255) << 16 | (s.charCodeAt(++p) & 255) << 24, h = /* Math.imul(k, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16), h ^= /* k >>> r: */
    h >>> 24, d = /* Math.imul(k, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16);
  switch (E) {
    case 3:
      d ^= (s.charCodeAt(p + 2) & 255) << 16;
    case 2:
      d ^= (s.charCodeAt(p + 1) & 255) << 8;
    case 1:
      d ^= s.charCodeAt(p) & 255, d = /* Math.imul(h, m): */
      (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16);
  }
  return d ^= d >>> 13, d = /* Math.imul(h, m): */
  (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16), ((d ^ d >>> 15) >>> 0).toString(36);
}
var mO = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, HS = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, yO = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", gO = /[A-Z]|^ms/g, MC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, U0 = function(d) {
  return d.charCodeAt(1) === 45;
}, $S = function(d) {
  return d != null && typeof d != "boolean";
}, i0 = /* @__PURE__ */ kC(function(s) {
  return U0(s) ? s : s.replace(gO, "-$&").toLowerCase();
}), rm = function(d, h) {
  switch (d) {
    case "animation":
    case "animationName":
      if (typeof h == "string")
        return h.replace(MC, function(p, E, T) {
          return mi = {
            name: E,
            styles: T,
            next: mi
          }, E;
        });
  }
  return mO[d] !== 1 && !U0(d) && typeof h == "number" && h !== 0 ? h + "px" : h;
};
if ({}.NODE_ENV !== "production") {
  var bO = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, EO = ["normal", "none", "initial", "inherit", "unset"], SO = rm, CO = /^-ms-/, TO = /-(.)/g, VS = {};
  rm = function(d, h) {
    if (d === "content" && (typeof h != "string" || EO.indexOf(h) === -1 && !bO.test(h) && (h.charAt(0) !== h.charAt(h.length - 1) || h.charAt(0) !== '"' && h.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + h + "\"'`");
    var p = SO(d, h);
    return p !== "" && !U0(d) && d.indexOf("-") !== -1 && VS[d] === void 0 && (VS[d] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + d.replace(CO, "ms-").replace(TO, function(E, T) {
      return T.toUpperCase();
    }) + "?")), p;
  };
}
var FC = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function dp(s, d, h) {
  if (h == null)
    return "";
  if (h.__emotion_styles !== void 0) {
    if ({}.NODE_ENV !== "production" && h.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(FC);
    return h;
  }
  switch (typeof h) {
    case "boolean":
      return "";
    case "object": {
      if (h.anim === 1)
        return mi = {
          name: h.name,
          styles: h.styles,
          next: mi
        }, h.name;
      if (h.styles !== void 0) {
        var p = h.next;
        if (p !== void 0)
          for (; p !== void 0; )
            mi = {
              name: p.name,
              styles: p.styles,
              next: mi
            }, p = p.next;
        var E = h.styles + ";";
        return {}.NODE_ENV !== "production" && h.map !== void 0 && (E += h.map), E;
      }
      return xO(s, d, h);
    }
    case "function": {
      if (s !== void 0) {
        var T = mi, R = h(s);
        return mi = T, dp(s, d, R);
      } else
        ({}).NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if ({}.NODE_ENV !== "production") {
        var y = [], N = h.replace(MC, function(P, q, se) {
          var he = "animation" + y.length;
          return y.push("const " + he + " = keyframes`" + se.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + he + "}";
        });
        y.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(y, ["`" + N + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + N + "`"));
      }
      break;
  }
  if (d == null)
    return h;
  var z = d[h];
  return z !== void 0 ? z : h;
}
function xO(s, d, h) {
  var p = "";
  if (Array.isArray(h))
    for (var E = 0; E < h.length; E++)
      p += dp(s, d, h[E]) + ";";
  else
    for (var T in h) {
      var R = h[T];
      if (typeof R != "object")
        d != null && d[R] !== void 0 ? p += T + "{" + d[R] + "}" : $S(R) && (p += i0(T) + ":" + rm(T, R) + ";");
      else {
        if (T === "NO_COMPONENT_SELECTOR" && {}.NODE_ENV !== "production")
          throw new Error(FC);
        if (Array.isArray(R) && typeof R[0] == "string" && (d == null || d[R[0]] === void 0))
          for (var y = 0; y < R.length; y++)
            $S(R[y]) && (p += i0(T) + ":" + rm(T, R[y]) + ";");
        else {
          var N = dp(s, d, R);
          switch (T) {
            case "animation":
            case "animationName": {
              p += i0(T) + ":" + N + ";";
              break;
            }
            default:
              ({}).NODE_ENV !== "production" && T === "undefined" && console.error(yO), p += T + "{" + N + "}";
          }
        }
      }
    }
  return p;
}
var WS = /label:\s*([^\s;\n{]+)\s*(;|$)/g, zC;
({}).NODE_ENV !== "production" && (zC = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var mi, pp = function(d, h, p) {
  if (d.length === 1 && typeof d[0] == "object" && d[0] !== null && d[0].styles !== void 0)
    return d[0];
  var E = !0, T = "";
  mi = void 0;
  var R = d[0];
  R == null || R.raw === void 0 ? (E = !1, T += dp(p, h, R)) : ({}.NODE_ENV !== "production" && R[0] === void 0 && console.error(HS), T += R[0]);
  for (var y = 1; y < d.length; y++)
    T += dp(p, h, d[y]), E && ({}.NODE_ENV !== "production" && R[y] === void 0 && console.error(HS), T += R[y]);
  var N;
  ({}).NODE_ENV !== "production" && (T = T.replace(zC, function(se) {
    return N = se, "";
  })), WS.lastIndex = 0;
  for (var z = "", P; (P = WS.exec(T)) !== null; )
    z += "-" + // $FlowFixMe we know it's not null
    P[1];
  var q = hO(T) + z;
  return {}.NODE_ENV !== "production" ? {
    name: q,
    styles: T,
    map: N,
    next: mi,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: q,
    styles: T,
    next: mi
  };
}, wO = function(d) {
  return d();
}, LC = OS["useInsertionEffect"] ? OS["useInsertionEffect"] : !1, UC = LC || wO, BS = LC || $e.useLayoutEffect, I0 = {}.hasOwnProperty, j0 = /* @__PURE__ */ $e.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ tO({
    key: "css"
  }) : null
);
({}).NODE_ENV !== "production" && (j0.displayName = "EmotionCacheContext");
j0.Provider;
var H0 = function(d) {
  return /* @__PURE__ */ $e.forwardRef(function(h, p) {
    var E = $e.useContext(j0);
    return d(h, E, p);
  });
}, fm = /* @__PURE__ */ $e.createContext({});
({}).NODE_ENV !== "production" && (fm.displayName = "EmotionThemeContext");
var YS = function(d) {
  var h = d.split(".");
  return h[h.length - 1];
}, RO = function(d) {
  var h = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(d);
  if (h || (h = /^([A-Za-z0-9$.]+)@/.exec(d), h))
    return YS(h[1]);
}, _O = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), kO = function(d) {
  return d.replace(/\$/g, "-");
}, OO = function(d) {
  if (d)
    for (var h = d.split(`
`), p = 0; p < h.length; p++) {
      var E = RO(h[p]);
      if (E) {
        if (_O.has(E))
          break;
        if (/^[A-Z]/.test(E))
          return kO(E);
      }
    }
}, g0 = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", b0 = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", DO = function(d, h) {
  if ({}.NODE_ENV !== "production" && typeof h.css == "string" && // check if there is a css declaration
  h.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + h.css + "`");
  var p = {};
  for (var E in h)
    I0.call(h, E) && (p[E] = h[E]);
  if (p[g0] = d, {}.NODE_ENV !== "production" && h.css && (typeof h.css != "object" || typeof h.css.name != "string" || h.css.name.indexOf("-") === -1)) {
    var T = OO(new Error().stack);
    T && (p[b0] = T);
  }
  return p;
}, AO = function(d) {
  var h = d.cache, p = d.serialized, E = d.isStringTag;
  return z0(h, p, E), UC(function() {
    return L0(h, p, E);
  }), null;
}, IC = /* @__PURE__ */ H0(function(s, d, h) {
  var p = s.css;
  typeof p == "string" && d.registered[p] !== void 0 && (p = d.registered[p]);
  var E = s[g0], T = [p], R = "";
  typeof s.className == "string" ? R = PC(d.registered, T, s.className) : s.className != null && (R = s.className + " ");
  var y = pp(T, void 0, $e.useContext(fm));
  if ({}.NODE_ENV !== "production" && y.name.indexOf("-") === -1) {
    var N = s[b0];
    N && (y = pp([y, "label:" + N + ";"]));
  }
  R += d.key + "-" + y.name;
  var z = {};
  for (var P in s)
    I0.call(s, P) && P !== "css" && P !== g0 && ({}.NODE_ENV === "production" || P !== b0) && (z[P] = s[P]);
  return z.ref = h, z.className = R, /* @__PURE__ */ $e.createElement($e.Fragment, null, /* @__PURE__ */ $e.createElement(AO, {
    cache: d,
    serialized: y,
    isStringTag: typeof E == "string"
  }), /* @__PURE__ */ $e.createElement(E, z));
});
({}).NODE_ENV !== "production" && (IC.displayName = "EmotionCssPropInternal");
var NO = {
  name: "@emotion/react",
  version: "11.10.8",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.8",
    "@emotion/cache": "^11.10.8",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.8",
    "@emotion/css-prettifier": "1.1.2",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.8",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, Ar = function(d, h) {
  var p = arguments;
  if (h == null || !I0.call(h, "css"))
    return $e.createElement.apply(void 0, p);
  var E = p.length, T = new Array(E);
  T[0] = IC, T[1] = DO(d, h);
  for (var R = 2; R < E; R++)
    T[R] = p[R];
  return $e.createElement.apply(null, T);
}, GS = !1, PO = /* @__PURE__ */ H0(function(s, d) {
  ({}).NODE_ENV !== "production" && !GS && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (s.className || s.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), GS = !0);
  var h = s.styles, p = pp([h], void 0, $e.useContext(fm)), E = $e.useRef();
  return BS(function() {
    var T = d.key + "-({})", R = new d.sheet.constructor({
      key: T,
      nonce: d.sheet.nonce,
      container: d.sheet.container,
      speedy: d.sheet.isSpeedy
    }), y = !1, N = document.querySelector('style[data-emotion="' + T + " " + p.name + '"]');
    return d.sheet.tags.length && (R.before = d.sheet.tags[0]), N !== null && (y = !0, N.setAttribute("data-emotion", T), R.hydrate([N])), E.current = [R, y], function() {
      R.flush();
    };
  }, [d]), BS(function() {
    var T = E.current, R = T[0], y = T[1];
    if (y) {
      T[1] = !1;
      return;
    }
    if (p.next !== void 0 && L0(d, p.next, !0), R.tags.length) {
      var N = R.tags[R.tags.length - 1].nextElementSibling;
      R.before = N, R.flush();
    }
    d.insert("", p, R, !1);
  }, [d, p.name]), null;
});
({}).NODE_ENV !== "production" && (PO.displayName = "EmotionGlobal");
function k() {
  for (var s = arguments.length, d = new Array(s), h = 0; h < s; h++)
    d[h] = arguments[h];
  return pp(d);
}
var MO = function s(d) {
  for (var h = d.length, p = 0, E = ""; p < h; p++) {
    var T = d[p];
    if (T != null) {
      var R = void 0;
      switch (typeof T) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(T))
            R = s(T);
          else {
            ({}).NODE_ENV !== "production" && T.styles !== void 0 && T.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), R = "";
            for (var y in T)
              T[y] && y && (R && (R += " "), R += y);
          }
          break;
        }
        default:
          R = T;
      }
      R && (E && (E += " "), E += R);
    }
  }
  return E;
};
function FO(s, d, h) {
  var p = [], E = PC(s, p, h);
  return p.length < 2 ? h : E + d(p);
}
var zO = function(d) {
  var h = d.cache, p = d.serializedArr;
  return UC(function() {
    for (var E = 0; E < p.length; E++)
      L0(h, p[E], !1);
  }), null;
}, LO = /* @__PURE__ */ H0(function(s, d) {
  var h = !1, p = [], E = function() {
    if (h && {}.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var z = arguments.length, P = new Array(z), q = 0; q < z; q++)
      P[q] = arguments[q];
    var se = pp(P, d.registered);
    return p.push(se), z0(d, se, !1), d.key + "-" + se.name;
  }, T = function() {
    if (h && {}.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var z = arguments.length, P = new Array(z), q = 0; q < z; q++)
      P[q] = arguments[q];
    return FO(d.registered, E, MO(P));
  }, R = {
    css: E,
    cx: T,
    theme: $e.useContext(fm)
  }, y = s.children(R);
  return h = !0, /* @__PURE__ */ $e.createElement($e.Fragment, null, /* @__PURE__ */ $e.createElement(zO, {
    cache: d,
    serializedArr: p
  }), y);
});
({}).NODE_ENV !== "production" && (LO.displayName = "EmotionClassNames");
if ({}.NODE_ENV !== "production") {
  var QS = !0, UO = typeof jest < "u" || typeof vi < "u";
  if (QS && !UO) {
    var qS = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : QS ? window : {}
    ), XS = "__EMOTION_REACT_" + NO.version.split(".")[0] + "__";
    qS[XS] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), qS[XS] = !0;
  }
}
var Jh = 8, jC = 12, IO = Jh * 10, jO = {
  comfortable: Jh * 5,
  cosy: Jh * 2,
  compact: Jh * 0.5
}, HC = "cosy", $0 = 0, HO = "fixed", V0 = "--ds-columns-num", $C = "--ds-column-span", Vl = "--ds-grid-spacing";
function vp(s) {
  return vp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
    return typeof d;
  } : function(d) {
    return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
  }, vp(s);
}
function $O(s, d) {
  if (vp(s) !== "object" || s === null)
    return s;
  var h = s[Symbol.toPrimitive];
  if (h !== void 0) {
    var p = h.call(s, d || "default");
    if (vp(p) !== "object")
      return p;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (d === "string" ? String : Number)(s);
}
function VO(s) {
  var d = $O(s, "string");
  return vp(d) === "symbol" ? d : String(d);
}
function Jo(s, d, h) {
  return d = VO(d), d in s ? Object.defineProperty(s, d, {
    value: h,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[d] = h, s;
}
var am = /* @__PURE__ */ $e.createContext({
  isRoot: !0,
  isNested: !1,
  spacing: HC,
  columns: jC
}), WO = k({
  display: "flex",
  margin: "0 auto",
  padding: "0 calc(var(".concat(Vl, ") / 2)"),
  position: "relative",
  alignItems: "flex-start",
  flexWrap: "wrap"
}), BO = {
  fixed: k({
    maxWidth: "calc(var(".concat(V0, ") * ").concat(IO, "px)")
  }),
  fluid: k({
    maxWidth: "100%"
  })
}, YO = k({
  margin: "0 calc(-1 * var(".concat(Vl, "))")
}), GO = function(d) {
  var h, p = d.layout, E = p === void 0 ? HO : p, T = d.testId, R = d.children, y = $e.useContext(am), N = y.isNested, z = y.columns, P = y.spacing;
  return Ar("div", {
    css: [WO, BO[E], N && YO],
    style: (h = {}, Jo(h, V0, z), Jo(h, Vl, "".concat(jO[P], "px")), h),
    "data-testid": T
  }, R);
}, up, el;
(function(s) {
  s.Auto = "auto", s.Bounded = "bounded", s.FullWidth = "fullWidth";
})(el || (el = {}));
var QO = function(d) {
  var h = d.medium, p = d.columns;
  return h === $0 ? el.Auto : h < p ? el.Bounded : el.FullWidth;
}, qO = "99.9999%", VC = "(".concat(qO, " / var(").concat(V0, "))"), XO = k({
  minWidth: "calc(".concat(VC, " - var(").concat(Vl, "))"),
  margin: "0 calc(var(".concat(Vl, ") / 2)"),
  flexGrow: 1,
  flexShrink: 0,
  wordWrap: "break-word"
}), KO = (up = {}, Jo(up, el.Auto, k({
  maxWidth: "calc(100% - var(".concat(Vl, "))"),
  flexBasis: "auto"
})), Jo(up, el.Bounded, k({
  maxWidth: "calc(".concat(VC, " *  var(").concat($C, ") - var(").concat(Vl, "))"),
  flexBasis: "100%"
})), Jo(up, el.FullWidth, k({
  maxWidth: "calc(100% - var(".concat(Vl, "))"),
  flexBasis: "100%"
})), up), WC = /* @__PURE__ */ $e.createContext({
  medium: $0
}), ZO = function(d) {
  var h = d.medium, p = h === void 0 ? $0 : h, E = d.children, T = d.testId, R = $e.useContext(am), y = R.columns, N = $e.useMemo(function() {
    return {
      medium: p
    };
  }, [p]), z = Math.max(1, Math.min(p, y)), P = QO({
    medium: p,
    columns: y
  });
  return Ar(WC.Provider, {
    value: N
  }, Ar("div", {
    css: [XO, KO[P]],
    style: Jo({}, $C, P === el.Auto ? "auto" : z),
    "data-testid": T
  }, E));
};
const Gc = ZO;
var JO = function(d) {
  var h, p, E, T = d.spacing, R = d.columns, y = d.layout, N = d.testId, z = d.children, P = d.theme, q = $e.useContext(am), se = q.isRoot, he = $e.useContext(WC), ue = he.medium, te = ue > 0 ? ue : jC, $ = (h = T ?? (P == null ? void 0 : P.spacing)) !== null && h !== void 0 ? h : HC, de = (p = R ?? (P == null ? void 0 : P.columns)) !== null && p !== void 0 ? p : te, K = (E = P == null ? void 0 : P.isNestedGrid) !== null && E !== void 0 ? E : !se, le = $e.useMemo(function() {
    return {
      isRoot: !1,
      isNested: K,
      spacing: $,
      columns: de
    };
  }, [$, de, K]);
  return /* @__PURE__ */ Xn.createElement(am.Provider, {
    value: le
  }, /* @__PURE__ */ Xn.createElement(GO, {
    layout: y,
    testId: N
  }, z));
};
const o0 = JO;
function eD(s, d) {
  if (s == null)
    return {};
  var h = {}, p = Object.keys(s), E, T;
  for (T = 0; T < p.length; T++)
    E = p[T], !(d.indexOf(E) >= 0) && (h[E] = s[E]);
  return h;
}
function W0(s, d) {
  if (s == null)
    return {};
  var h = eD(s, d), p, E;
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(s);
    for (E = 0; E < T.length; E++)
      p = T[E], !(d.indexOf(p) >= 0) && Object.prototype.propertyIsEnumerable.call(s, p) && (h[p] = s[p]);
  }
  return h;
}
var Ko = {
  card: 100,
  navigation: 200,
  dialog: 300,
  layer: 400,
  blanket: 500,
  modal: 510,
  flag: 600,
  spotlight: 700,
  tooltip: 800
}, B0 = /* @__PURE__ */ $e.createContext("elevation.surface"), tD = function() {
  return $e.useContext(B0);
};
B0.displayName = "SurfaceProvider";
var nD = ["children", "as", "className", "display", "flexDirection", "alignItems", "justifyContent", "backgroundColor", "borderColor", "borderStyle", "borderWidth", "borderRadius", "shadow", "layer", "padding", "paddingBlock", "paddingInline", "position", "height", "overflow", "width", "UNSAFE_style", "testId"], BC = /* @__PURE__ */ $e.forwardRef(function(s, d) {
  var h = s.children, p = s.as, E = s.className, T = s.display, R = T === void 0 ? "flex" : T, y = s.flexDirection, N = s.alignItems, z = s.justifyContent, P = s.backgroundColor, q = s.borderColor, se = s.borderStyle, he = s.borderWidth, ue = s.borderRadius, te = s.shadow, $ = s.layer, de = s.padding, K = s.paddingBlock, le = s.paddingInline, ae = s.position, M = ae === void 0 ? "relative" : ae, ge = s.height, ye = s.overflow, Xe = s.width, Ke = s.UNSAFE_style, it = s.testId, pt = W0(s, nD), et = p || "div", St = Ar(et, nm({
    style: Ke,
    ref: d
    // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
  }, pt, {
    className: E,
    css: [dD, R && sD[R], de && hD[de], M && cD[M], K && mD[K], le && yD[le], N && lD[N], z && uD[z], P && bD[P], q && gD[q], se && rD[se], he && aD[he], ue && iD[ue], te && ED[te], $ && SD[$], y && oD[y], ye && fD[ye], Xe && pD[Xe], ge && vD[ge]],
    "data-testid": it
  }), h);
  return P ? Ar(B0.Provider, {
    value: P
  }, St) : St;
});
BC.displayName = "Box";
const KS = BC;
var rD = {
  none: k({
    borderStyle: "none"
  }),
  solid: k({
    borderStyle: "solid"
  }),
  dashed: k({
    borderStyle: "dashed"
  }),
  dotted: k({
    borderStyle: "dotted"
  })
}, aD = {
  "0px": k({
    borderWidth: "0px"
  }),
  "1px": k({
    borderWidth: "1px"
  }),
  "2px": k({
    borderWidth: "2px"
  }),
  "3px": k({
    borderWidth: "3px"
  })
}, iD = {
  normal: k({
    borderRadius: "var(--ds-radius-100, 3px)"
  }),
  rounded: k({
    borderRadius: "50%"
  }),
  badge: k({
    borderRadius: "8px"
  })
}, oD = {
  column: k({
    flexDirection: "column"
  }),
  row: k({
    flexDirection: "row"
  })
}, lD = {
  center: k({
    alignItems: "center"
  }),
  baseline: k({
    alignItems: "baseline"
  }),
  flexStart: k({
    alignItems: "flex-start"
  }),
  flexEnd: k({
    alignItems: "flex-end"
  }),
  start: k({
    alignItems: "start"
  }),
  end: k({
    alignItems: "end"
  })
}, uD = {
  center: k({
    justifyContent: "center"
  }),
  flexStart: k({
    justifyContent: "flex-start"
  }),
  flexEnd: k({
    justifyContent: "flex-end"
  }),
  start: k({
    justifyContent: "start"
  }),
  end: k({
    justifyContent: "end"
  })
}, sD = {
  block: k({
    display: "block"
  }),
  inline: k({
    display: "inline"
  }),
  flex: k({
    display: "flex"
  }),
  inlineFlex: k({
    display: "inline-flex"
  }),
  inlineBlock: k({
    display: "inline-block"
  })
}, cD = {
  absolute: k({
    position: "absolute"
  }),
  fixed: k({
    position: "fixed"
  }),
  relative: k({
    position: "relative"
  }),
  static: k({
    position: "static"
  })
}, fD = {
  auto: k({
    overflow: "auto"
  }),
  hidden: k({
    overflow: "hidden"
  })
}, dD = k({
  boxSizing: "border-box",
  appearance: "none",
  border: "none"
}), pD = {
  "100%": k({
    width: "100%"
  }),
  "size.100": k({
    width: "16px"
  }),
  "size.1000": k({
    width: "192px"
  }),
  "size.200": k({
    width: "24px"
  }),
  "size.300": k({
    width: "32px"
  }),
  "size.400": k({
    width: "40px"
  }),
  "size.500": k({
    width: "48px"
  }),
  "size.600": k({
    width: "96px"
  })
}, vD = {
  "100%": k({
    height: "100%"
  }),
  "size.100": k({
    height: "16px"
  }),
  "size.1000": k({
    height: "192px"
  }),
  "size.200": k({
    height: "24px"
  }),
  "size.300": k({
    height: "32px"
  }),
  "size.400": k({
    height: "40px"
  }),
  "size.500": k({
    height: "48px"
  }),
  "size.600": k({
    height: "96px"
  })
}, hD = {
  "space.0": k({
    padding: "var(--ds-space-0, 0px)"
  }),
  "space.025": k({
    padding: "var(--ds-space-025, 2px)"
  }),
  "space.050": k({
    padding: "var(--ds-space-050, 4px)"
  }),
  "space.075": k({
    padding: "var(--ds-space-075, 6px)"
  }),
  "space.100": k({
    padding: "var(--ds-space-100, 8px)"
  }),
  "space.1000": k({
    padding: "var(--ds-space-1000, 80px)"
  }),
  "space.150": k({
    padding: "var(--ds-space-150, 12px)"
  }),
  "space.200": k({
    padding: "var(--ds-space-200, 16px)"
  }),
  "space.250": k({
    padding: "var(--ds-space-250, 20px)"
  }),
  "space.300": k({
    padding: "var(--ds-space-300, 24px)"
  }),
  "space.400": k({
    padding: "var(--ds-space-400, 32px)"
  }),
  "space.500": k({
    padding: "var(--ds-space-500, 40px)"
  }),
  "space.600": k({
    padding: "var(--ds-space-600, 48px)"
  }),
  "space.800": k({
    padding: "var(--ds-space-800, 64px)"
  })
}, mD = {
  "space.0": k({
    paddingBlock: "var(--ds-space-0, 0px)"
  }),
  "space.025": k({
    paddingBlock: "var(--ds-space-025, 2px)"
  }),
  "space.050": k({
    paddingBlock: "var(--ds-space-050, 4px)"
  }),
  "space.075": k({
    paddingBlock: "var(--ds-space-075, 6px)"
  }),
  "space.100": k({
    paddingBlock: "var(--ds-space-100, 8px)"
  }),
  "space.1000": k({
    paddingBlock: "var(--ds-space-1000, 80px)"
  }),
  "space.150": k({
    paddingBlock: "var(--ds-space-150, 12px)"
  }),
  "space.200": k({
    paddingBlock: "var(--ds-space-200, 16px)"
  }),
  "space.250": k({
    paddingBlock: "var(--ds-space-250, 20px)"
  }),
  "space.300": k({
    paddingBlock: "var(--ds-space-300, 24px)"
  }),
  "space.400": k({
    paddingBlock: "var(--ds-space-400, 32px)"
  }),
  "space.500": k({
    paddingBlock: "var(--ds-space-500, 40px)"
  }),
  "space.600": k({
    paddingBlock: "var(--ds-space-600, 48px)"
  }),
  "space.800": k({
    paddingBlock: "var(--ds-space-800, 64px)"
  })
}, yD = {
  "space.0": k({
    paddingInline: "var(--ds-space-0, 0px)"
  }),
  "space.025": k({
    paddingInline: "var(--ds-space-025, 2px)"
  }),
  "space.050": k({
    paddingInline: "var(--ds-space-050, 4px)"
  }),
  "space.075": k({
    paddingInline: "var(--ds-space-075, 6px)"
  }),
  "space.100": k({
    paddingInline: "var(--ds-space-100, 8px)"
  }),
  "space.1000": k({
    paddingInline: "var(--ds-space-1000, 80px)"
  }),
  "space.150": k({
    paddingInline: "var(--ds-space-150, 12px)"
  }),
  "space.200": k({
    paddingInline: "var(--ds-space-200, 16px)"
  }),
  "space.250": k({
    paddingInline: "var(--ds-space-250, 20px)"
  }),
  "space.300": k({
    paddingInline: "var(--ds-space-300, 24px)"
  }),
  "space.400": k({
    paddingInline: "var(--ds-space-400, 32px)"
  }),
  "space.500": k({
    paddingInline: "var(--ds-space-500, 40px)"
  }),
  "space.600": k({
    paddingInline: "var(--ds-space-600, 48px)"
  }),
  "space.800": k({
    paddingInline: "var(--ds-space-800, 64px)"
  })
}, gD = {
  "color.border": k({
    borderColor: "var(--ds-border, #091e4221)"
  }),
  disabled: k({
    borderColor: "var(--ds-border-disabled, #FAFBFC)"
  }),
  focused: k({
    borderColor: "var(--ds-border-focused, #4C9AFF)"
  }),
  input: k({
    borderColor: "var(--ds-border-input, #FAFBFC)"
  }),
  inverse: k({
    borderColor: "var(--ds-border-inverse, #FFFFFF)"
  }),
  selected: k({
    borderColor: "var(--ds-border-selected, #0052CC)"
  }),
  brand: k({
    borderColor: "var(--ds-border-brand, #0052CC)"
  }),
  danger: k({
    borderColor: "var(--ds-border-danger, #FF5630)"
  }),
  warning: k({
    borderColor: "var(--ds-border-warning, #FFC400)"
  }),
  success: k({
    borderColor: "var(--ds-border-success, #00875A)"
  }),
  discovery: k({
    borderColor: "var(--ds-border-discovery, #998DD9)"
  }),
  information: k({
    borderColor: "var(--ds-border-information, #0065FF)"
  }),
  bold: k({
    borderColor: "var(--ds-border-bold, #344563)"
  })
}, bD = {
  disabled: k({
    backgroundColor: "var(--ds-background-disabled, #091e4289)"
  }),
  input: k({
    backgroundColor: "var(--ds-background-input, #FAFBFC)"
  }),
  "inverse.subtle": k({
    backgroundColor: "var(--ds-background-inverse-subtle, #00000029)"
  }),
  neutral: k({
    backgroundColor: "var(--ds-background-neutral, #DFE1E6)"
  }),
  "neutral.subtle": k({
    backgroundColor: "var(--ds-background-neutral-subtle, transparent)"
  }),
  "neutral.bold": k({
    backgroundColor: "var(--ds-background-neutral-bold, #42526E)"
  }),
  selected: k({
    backgroundColor: "var(--ds-background-selected, #DEEBFF)"
  }),
  "selected.bold": k({
    backgroundColor: "var(--ds-background-selected-bold, #0052CC)"
  }),
  "brand.bold": k({
    backgroundColor: "var(--ds-background-brand-bold, #0052CC)"
  }),
  danger: k({
    backgroundColor: "var(--ds-background-danger, #FFEBE6)"
  }),
  "danger.bold": k({
    backgroundColor: "var(--ds-background-danger-bold, #DE350B)"
  }),
  warning: k({
    backgroundColor: "var(--ds-background-warning, #FFFAE6)"
  }),
  "warning.bold": k({
    backgroundColor: "var(--ds-background-warning-bold, #FFAB00)"
  }),
  success: k({
    backgroundColor: "var(--ds-background-success, #E3FCEF)"
  }),
  "success.bold": k({
    backgroundColor: "var(--ds-background-success-bold, #00875A)"
  }),
  discovery: k({
    backgroundColor: "var(--ds-background-discovery, #EAE6FF)"
  }),
  "discovery.bold": k({
    backgroundColor: "var(--ds-background-discovery-bold, #5243AA)"
  }),
  information: k({
    backgroundColor: "var(--ds-background-information, #DEEBFF)"
  }),
  "information.bold": k({
    backgroundColor: "var(--ds-background-information-bold, #0052CC)"
  }),
  "color.blanket": k({
    backgroundColor: "var(--ds-blanket, #091e4289)"
  }),
  "color.blanket.selected": k({
    backgroundColor: "var(--ds-blanket-selected, #388BFF14)"
  }),
  "color.blanket.danger": k({
    backgroundColor: "var(--ds-blanket-danger, #EF5C4814)"
  }),
  "elevation.surface": k({
    backgroundColor: "var(--ds-surface, #FFFFFF)"
  }),
  "elevation.surface.overlay": k({
    backgroundColor: "var(--ds-surface-overlay, #FFFFFF)"
  }),
  "elevation.surface.raised": k({
    backgroundColor: "var(--ds-surface-raised, #FFFFFF)"
  }),
  "elevation.surface.sunken": k({
    backgroundColor: "var(--ds-surface-sunken, #F4F5F7)"
  })
}, ED = {
  overflow: k({
    boxShadow: "var(--ds-shadow-overflow, 0px 0px 8px #091e423f, 0px 0px 1px #091e424f)"
  }),
  "overflow.perimeter": k({
    boxShadow: "var(--ds-shadow-overflow-perimeter, #091e421f)"
  }),
  "overflow.spread": k({
    boxShadow: "var(--ds-shadow-overflow-spread, #091e4229)"
  }),
  overlay: k({
    boxShadow: "var(--ds-shadow-overlay, 0px 8px 12px #091e423f, 0px 0px 1px #091e424f)"
  }),
  raised: k({
    boxShadow: "var(--ds-shadow-raised, 0px 1px 1px #091e423f, 0px 0px 1px #091e4221)"
  })
}, SD = {
  card: k({
    zIndex: Ko.card
  }),
  navigation: k({
    zIndex: Ko.navigation
  }),
  dialog: k({
    zIndex: Ko.dialog
  }),
  layer: k({
    zIndex: Ko.layer
  }),
  blanket: k({
    zIndex: Ko.blanket
  }),
  modal: k({
    zIndex: Ko.modal
  }),
  flag: k({
    zIndex: Ko.flag
  }),
  spotlight: k({
    zIndex: Ko.spotlight
  }),
  tooltip: k({
    zIndex: Ko.tooltip
  })
}, CD = {}.NODE_ENV === "production", l0 = "Invariant failed";
function TD(s, d) {
  if (!s) {
    if (CD)
      throw new Error(l0);
    var h = typeof d == "function" ? d() : d, p = h ? "".concat(l0, ": ").concat(h) : l0;
    throw new Error(p);
  }
}
const xD = {
  "neutral.bold": "inverse",
  "neutral.bold.hovered": "inverse",
  "neutral.bold.pressed": "inverse",
  "selected.bold": "inverse",
  "selected.bold.hovered": "inverse",
  "selected.bold.pressed": "inverse",
  "brand.bold": "inverse",
  "brand.bold.hovered": "inverse",
  "brand.bold.pressed": "inverse",
  "danger.bold": "inverse",
  "danger.bold.hovered": "inverse",
  "danger.bold.pressed": "inverse",
  "warning.bold": "warning.inverse",
  "warning.bold.hovered": "warning.inverse",
  "warning.bold.pressed": "warning.inverse",
  "success.bold": "inverse",
  "success.bold.hovered": "inverse",
  "success.bold.pressed": "inverse",
  "discovery.bold": "inverse",
  "discovery.bold.hovered": "inverse",
  "discovery.bold.pressed": "inverse",
  "information.bold": "inverse",
  "information.bold.hovered": "inverse",
  "information.bold.pressed": "inverse"
};
var wD = ["children"], RD = ["span", "div", "p", "strong"], _D = {
  center: k({
    textAlign: "center"
  }),
  end: k({
    textAlign: "end"
  }),
  start: k({
    textAlign: "start"
  })
}, kD = {
  none: k({
    textTransform: "none"
  }),
  lowercase: k({
    textTransform: "lowercase"
  }),
  uppercase: k({
    textTransform: "uppercase"
  })
}, OD = {
  top: k({
    verticalAlign: "top"
  }),
  middle: k({
    verticalAlign: "middle"
  }),
  bottom: k({
    verticalAlign: "bottom"
  })
}, DD = k({
  boxSizing: "border-box",
  margin: "var(--ds-space-0, 0px)",
  padding: "var(--ds-space-0, 0px)"
}), AD = k({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), ND = function(d) {
  var h = tD(), p = xD[h], E = p ?? d;
  return E;
}, YC = /* @__PURE__ */ $e.createContext(!1), PD = function() {
  return $e.useContext(YC);
}, MD = function(d) {
  var h = d.children, p = W0(d, wD), E = p.as, T = E === void 0 ? "span" : E, R = p.color, y = p.fontSize, N = p.fontWeight, z = p.lineHeight, P = p.shouldTruncate, q = P === void 0 ? !1 : P, se = p.textAlign, he = p.textTransform, ue = p.verticalAlign, te = p.testId, $ = p.UNSAFE_style, de = p.id;
  TD(RD.includes(T), '@atlaskit/ds-explorations: Text received an invalid "as" value of "'.concat(T, '"'));
  var K = ND(R), le = PD();
  if (le && Object.keys(p).length === 0)
    return Ar($e.Fragment, null, h);
  var ae = Ar(T, {
    style: $,
    css: [DD, UD.sans, K && jD[K], y && zD[y], N && LD[N], z && ID[z], q && AD, se && _D[se], he && kD[he], ue && OD[ue]],
    "data-testid": te,
    id: de
  }, h);
  return le ? (
    // no need to re-apply context if the text is already wrapped
    ae
  ) : Ar(YC.Provider, {
    value: !0
  }, ae);
};
const FD = MD;
var zD = {
  "size.050": k({
    fontSize: "var(--ds-font-size-050, 11px)"
  }),
  "size.075": k({
    fontSize: "var(--ds-font-size-075, 12px)"
  }),
  "size.100": k({
    fontSize: "var(--ds-font-size-100, 14px)"
  }),
  "size.200": k({
    fontSize: "var(--ds-font-size-200, 16px)"
  }),
  "size.300": k({
    fontSize: "var(--ds-font-size-300, 20px)"
  }),
  "size.400": k({
    fontSize: "var(--ds-font-size-400, 24px)"
  }),
  "size.500": k({
    fontSize: "var(--ds-font-size-500, 29px)"
  }),
  "size.600": k({
    fontSize: "var(--ds-font-size-600, 35px)"
  })
}, LD = {
  bold: k({
    fontWeight: "var(--ds-font-weight-bold, 700)"
  }),
  medium: k({
    fontWeight: "var(--ds-font-weight-medium, 500)"
  }),
  regular: k({
    fontWeight: "var(--ds-font-weight-regular, 400)"
  }),
  semibold: k({
    fontWeight: "var(--ds-font-weight-semibold, 600)"
  })
}, UD = {
  monospace: k({
    fontFamily: 'var(--ds-font-family-monospace, "SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace)'
  }),
  sans: k({
    fontFamily: 'var(--ds-font-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif)'
  })
}, ID = {
  "lineHeight.100": k({
    lineHeight: "var(--ds-font-lineHeight-100, 16px)"
  }),
  "lineHeight.200": k({
    lineHeight: "var(--ds-font-lineHeight-200, 20px)"
  }),
  "lineHeight.300": k({
    lineHeight: "var(--ds-font-lineHeight-300, 24px)"
  }),
  "lineHeight.400": k({
    lineHeight: "var(--ds-font-lineHeight-400, 28px)"
  }),
  "lineHeight.500": k({
    lineHeight: "var(--ds-font-lineHeight-500, 32px)"
  }),
  "lineHeight.600": k({
    lineHeight: "var(--ds-font-lineHeight-600, 40px)"
  })
}, jD = {
  "color.text": k({
    color: "var(--ds-text, #172B4D)"
  }),
  disabled: k({
    color: "var(--ds-text-disabled, #A5ADBA)"
  }),
  inverse: k({
    color: "var(--ds-text-inverse, #FFFFFF)"
  }),
  selected: k({
    color: "var(--ds-text-selected, #0052CC)"
  }),
  brand: k({
    color: "var(--ds-text-brand, #0065FF)"
  }),
  danger: k({
    color: "var(--ds-text-danger, #DE350B)"
  }),
  warning: k({
    color: "var(--ds-text-warning, #974F0C)"
  }),
  "warning.inverse": k({
    color: "var(--ds-text-warning-inverse, #172B4D)"
  }),
  success: k({
    color: "var(--ds-text-success, #006644)"
  }),
  discovery: k({
    color: "var(--ds-text-discovery, #403294)"
  }),
  information: k({
    color: "var(--ds-text-information, #0052CC)"
  }),
  subtlest: k({
    color: "var(--ds-text-subtlest, #7A869A)"
  }),
  subtle: k({
    color: "var(--ds-text-subtle, #42526E)"
  })
}, HD = /* @__PURE__ */ $e.createContext(void 0), $D = function() {
  return Math.min($e.useContext(HD) || 0, 6);
}, VD = {
  h900: "h1",
  h800: "h1",
  h700: "h2",
  h600: "h3",
  h500: "h4",
  h400: "h5",
  h300: "h6",
  // NB: These two levels are not covered at all by the existing @atlaskit/css-reset
  h200: "div",
  h100: "div"
}, WD = k({
  marginTop: "var(--ds-space-0, 0px)",
  marginBottom: "var(--ds-space-0, 0px)",
  color: "var(--ds-text, #172B4D)"
}), BD = k({
  fontSize: "var(--ds-font-size-600, 35px)",
  fontWeight: "var(--ds-font-weight-medium, 500)",
  letterSpacing: "-0.01em",
  lineHeight: "var(--ds-font-lineHeight-600, 40px)"
}), YD = k({
  fontSize: "var(--ds-font-size-500, 29px)",
  fontWeight: "var(--ds-font-weight-semibold, 600)",
  letterSpacing: "-0.01em",
  lineHeight: "var(--ds-font-lineHeight-500, 32px)"
}), GD = k({
  fontSize: "var(--ds-font-size-400, 24px)",
  fontWeight: "var(--ds-font-weight-medium, 500)",
  letterSpacing: "-0.01em",
  lineHeight: "var(--ds-font-lineHeight-400, 28px)"
}), QD = k({
  fontSize: "var(--ds-font-size-300, 20px)",
  fontWeight: "var(--ds-font-weight-medium, 500)",
  letterSpacing: "-0.008em",
  lineHeight: "var(--ds-font-lineHeight-300, 24px)"
}), qD = k({
  fontSize: "var(--ds-font-size-200, 16px)",
  fontWeight: "var(--ds-font-weight-semibold, 600)",
  letterSpacing: "-0.006em",
  lineHeight: "var(--ds-font-lineHeight-200, 20px)"
}), XD = k({
  fontSize: "var(--ds-font-size-100, 14px)",
  fontWeight: "var(--ds-font-weight-semibold, 600)",
  letterSpacing: "-0.003em",
  lineHeight: "var(--ds-font-lineHeight-100, 16px)"
}), KD = k({
  fontSize: "var(--ds-font-size-075, 12px)",
  fontWeight: "var(--ds-font-weight-semibold, 600)",
  letterSpacing: 0,
  lineHeight: "var(--ds-font-lineHeight-100, 16px)",
  textTransform: "uppercase"
}), ZD = k({
  fontSize: "var(--ds-font-size-075, 12px)",
  fontWeight: "var(--ds-font-weight-semibold, 600)",
  letterSpacing: 0,
  lineHeight: "var(--ds-font-lineHeight-100, 16px)"
}), JD = k({
  fontSize: "var(--ds-font-size-050, 11px)",
  fontWeight: "var(--ds-font-weight-bold, 700)",
  letterSpacing: 0,
  lineHeight: "var(--ds-font-lineHeight-100, 16px)"
}), eA = k({
  color: "var(--ds-text-inverse, #FFF)"
}), tA = k({
  color: "var(--ds-text-subtlest, #6B778C)"
}), nA = function(d) {
  var h = d.children, p = d.level, E = d.id, T = d.testId, R = d.as, y = d.color, N = y === void 0 ? "default" : y;
  if (typeof process < "u" && {}.NODE_ENV !== "production" && R && typeof R != "string")
    throw new Error("`as` prop should be a string.");
  var z = $D(), P = R || z && "h".concat(z) || VD[p], q = p === "h200" || p === "h100";
  return Ar(P, {
    id: E,
    "data-testid": T,
    css: [
      WD,
      // This can be refactored when @compiled supports style maps
      p === "h100" && JD,
      p === "h200" && ZD,
      p === "h300" && KD,
      p === "h400" && XD,
      p === "h500" && qD,
      p === "h600" && QD,
      p === "h700" && GD,
      p === "h800" && YD,
      p === "h900" && BD,
      N === "inverse" && eA,
      N === "default" && q && tA
    ]
  }, h);
};
const rA = nA;
var aA = {
  "space.0": "var(--ds-space-0, 0px)",
  "space.025": "var(--ds-space-025, 2px)",
  "space.050": "var(--ds-space-050, 4px)",
  "space.075": "var(--ds-space-075, 6px)",
  "space.100": "var(--ds-space-100, 8px)",
  "space.150": "var(--ds-space-150, 12px)",
  "space.200": "var(--ds-space-200, 16px)",
  "space.250": "var(--ds-space-250, 20px)",
  "space.300": "var(--ds-space-300, 24px)",
  "space.400": "var(--ds-space-400, 32px)",
  "space.500": "var(--ds-space-500, 40px)",
  "space.600": "var(--ds-space-600, 48px)",
  "space.800": "var(--ds-space-800, 64px)",
  "space.1000": "var(--ds-space-1000, 80px)"
}, iA = {
  "space.0": "var(--ds-space-0, 0px)",
  "space.025": "var(--ds-space-025, 2px)",
  "space.050": "var(--ds-space-050, 4px)",
  "space.075": "var(--ds-space-075, 6px)",
  "space.100": "var(--ds-space-100, 8px)",
  "space.150": "var(--ds-space-150, 12px)",
  "space.200": "var(--ds-space-200, 16px)",
  "space.250": "var(--ds-space-250, 20px)",
  "space.300": "var(--ds-space-300, 24px)",
  "space.400": "var(--ds-space-400, 32px)",
  "space.500": "var(--ds-space-500, 40px)",
  "space.600": "var(--ds-space-600, 48px)",
  "space.800": "var(--ds-space-800, 64px)",
  "space.1000": "var(--ds-space-1000, 80px)"
}, oA = {
  "accent.red.subtlest": "var(--ds-background-accent-red-subtlest, #FF8F73)",
  "accent.red.subtler": "var(--ds-background-accent-red-subtler, #FF7452)",
  "accent.red.subtle": "var(--ds-background-accent-red-subtle, #DE350B)",
  "accent.red.bolder": "var(--ds-background-accent-red-bolder, #DE350B)",
  "accent.orange.subtlest": "var(--ds-background-accent-orange-subtlest, #F18D13)",
  "accent.orange.subtler": "var(--ds-background-accent-orange-subtler, #B65C02)",
  "accent.orange.subtle": "var(--ds-background-accent-orange-subtle, #5F3811)",
  "accent.orange.bolder": "var(--ds-background-accent-orange-bolder, #43290F)",
  "accent.yellow.subtlest": "var(--ds-background-accent-yellow-subtlest, #FFE380)",
  "accent.yellow.subtler": "var(--ds-background-accent-yellow-subtler, #FFC400)",
  "accent.yellow.subtle": "var(--ds-background-accent-yellow-subtle, #FF991F)",
  "accent.yellow.bolder": "var(--ds-background-accent-yellow-bolder, #FF991F)",
  "accent.green.subtlest": "var(--ds-background-accent-green-subtlest, #79F2C0)",
  "accent.green.subtler": "var(--ds-background-accent-green-subtler, #57D9A3)",
  "accent.green.subtle": "var(--ds-background-accent-green-subtle, #00875A)",
  "accent.green.bolder": "var(--ds-background-accent-green-bolder, #00875A)",
  "accent.teal.subtlest": "var(--ds-background-accent-teal-subtlest, #79E2F2)",
  "accent.teal.subtler": "var(--ds-background-accent-teal-subtler, #00C7E6)",
  "accent.teal.subtle": "var(--ds-background-accent-teal-subtle, #00A3BF)",
  "accent.teal.bolder": "var(--ds-background-accent-teal-bolder, #00A3BF)",
  "accent.blue.subtlest": "var(--ds-background-accent-blue-subtlest, #4C9AFF)",
  "accent.blue.subtler": "var(--ds-background-accent-blue-subtler, #2684FF)",
  "accent.blue.subtle": "var(--ds-background-accent-blue-subtle, #0052CC)",
  "accent.blue.bolder": "var(--ds-background-accent-blue-bolder, #0052CC)",
  "accent.purple.subtlest": "var(--ds-background-accent-purple-subtlest, #998DD9)",
  "accent.purple.subtler": "var(--ds-background-accent-purple-subtler, #8777D9)",
  "accent.purple.subtle": "var(--ds-background-accent-purple-subtle, #5243AA)",
  "accent.purple.bolder": "var(--ds-background-accent-purple-bolder, #5243AA)",
  "accent.magenta.subtlest": "var(--ds-background-accent-magenta-subtlest, #E774BB)",
  "accent.magenta.subtler": "var(--ds-background-accent-magenta-subtler, #E774BB)",
  "accent.magenta.subtle": "var(--ds-background-accent-magenta-subtle, #E774BB)",
  "accent.magenta.bolder": "var(--ds-background-accent-magenta-bolder, #E774BB)",
  "accent.gray.subtlest": "var(--ds-background-accent-gray-subtlest, #6B778C)",
  "accent.gray.subtler": "var(--ds-background-accent-gray-subtler, #5E6C84)",
  "accent.gray.subtle": "var(--ds-background-accent-gray-subtle, #42526E)",
  "accent.gray.bolder": "var(--ds-background-accent-gray-bolder, #505F79)",
  disabled: "var(--ds-background-disabled, #091e4289)",
  input: "var(--ds-background-input, #FAFBFC)",
  "input.hovered": "var(--ds-background-input-hovered, #EBECF0)",
  "input.pressed": "var(--ds-background-input-pressed, #FFFFFF)",
  "inverse.subtle": "var(--ds-background-inverse-subtle, #00000029)",
  "inverse.subtle.hovered": "var(--ds-background-inverse-subtle-hovered, #0000003D)",
  "inverse.subtle.pressed": "var(--ds-background-inverse-subtle-pressed, #00000052)",
  neutral: "var(--ds-background-neutral, #DFE1E6)",
  "neutral.hovered": "var(--ds-background-neutral-hovered, #091e4214)",
  "neutral.pressed": "var(--ds-background-neutral-pressed, #B3D4FF)",
  "neutral.subtle": "var(--ds-background-neutral-subtle, transparent)",
  "neutral.subtle.hovered": "var(--ds-background-neutral-subtle-hovered, #091e4214)",
  "neutral.subtle.pressed": "var(--ds-background-neutral-subtle-pressed, #B3D4FF)",
  "neutral.bold": "var(--ds-background-neutral-bold, #42526E)",
  "neutral.bold.hovered": "var(--ds-background-neutral-bold-hovered, #505F79)",
  "neutral.bold.pressed": "var(--ds-background-neutral-bold-pressed, #344563)",
  selected: "var(--ds-background-selected, #DEEBFF)",
  "selected.hovered": "var(--ds-background-selected-hovered, #B3D4FF)",
  "selected.pressed": "var(--ds-background-selected-pressed, #4C9AFF)",
  "selected.bold": "var(--ds-background-selected-bold, #0052CC)",
  "selected.bold.hovered": "var(--ds-background-selected-bold-hovered, #2684FF)",
  "selected.bold.pressed": "var(--ds-background-selected-bold-pressed, #0052CC)",
  "brand.bold": "var(--ds-background-brand-bold, #0052CC)",
  "brand.bold.hovered": "var(--ds-background-brand-bold-hovered, #0065FF)",
  "brand.bold.pressed": "var(--ds-background-brand-bold-pressed, #0747A6)",
  danger: "var(--ds-background-danger, #FFEBE6)",
  "danger.hovered": "var(--ds-background-danger-hovered, #FFBDAD)",
  "danger.pressed": "var(--ds-background-danger-pressed, #FF8F73)",
  "danger.bold": "var(--ds-background-danger-bold, #DE350B)",
  "danger.bold.hovered": "var(--ds-background-danger-bold-hovered, #FF5630)",
  "danger.bold.pressed": "var(--ds-background-danger-bold-pressed, #BF2600)",
  warning: "var(--ds-background-warning, #FFFAE6)",
  "warning.hovered": "var(--ds-background-warning-hovered, #FFF0B3)",
  "warning.pressed": "var(--ds-background-warning-pressed, #FFE380)",
  "warning.bold": "var(--ds-background-warning-bold, #FFAB00)",
  "warning.bold.hovered": "var(--ds-background-warning-bold-hovered, #FFC400)",
  "warning.bold.pressed": "var(--ds-background-warning-bold-pressed, #FF991F)",
  success: "var(--ds-background-success, #E3FCEF)",
  "success.hovered": "var(--ds-background-success-hovered, #ABF5D1)",
  "success.pressed": "var(--ds-background-success-pressed, #79F2C0)",
  "success.bold": "var(--ds-background-success-bold, #00875A)",
  "success.bold.hovered": "var(--ds-background-success-bold-hovered, #57D9A3)",
  "success.bold.pressed": "var(--ds-background-success-bold-pressed, #00875A)",
  discovery: "var(--ds-background-discovery, #EAE6FF)",
  "discovery.hovered": "var(--ds-background-discovery-hovered, #C0B6F2)",
  "discovery.pressed": "var(--ds-background-discovery-pressed, #998DD9)",
  "discovery.bold": "var(--ds-background-discovery-bold, #5243AA)",
  "discovery.bold.hovered": "var(--ds-background-discovery-bold-hovered, #8777D9)",
  "discovery.bold.pressed": "var(--ds-background-discovery-bold-pressed, #5243AA)",
  information: "var(--ds-background-information, #DEEBFF)",
  "information.hovered": "var(--ds-background-information-hovered, #B3D4FF)",
  "information.pressed": "var(--ds-background-information-pressed, #4C9AFF)",
  "information.bold": "var(--ds-background-information-bold, #0052CC)",
  "information.bold.hovered": "var(--ds-background-information-bold-hovered, #2684FF)",
  "information.bold.pressed": "var(--ds-background-information-bold-pressed, #0052CC)",
  "color.blanket": "var(--ds-blanket, #091e4289)",
  "color.blanket.selected": "var(--ds-blanket-selected, #388BFF14)",
  "color.blanket.danger": "var(--ds-blanket-danger, #EF5C4814)",
  "elevation.surface": "var(--ds-surface, #FFFFFF)",
  "elevation.surface.hovered": "var(--ds-surface-hovered, #FAFBFC)",
  "elevation.surface.pressed": "var(--ds-surface-pressed, #F4F5F7)",
  "elevation.surface.overlay": "var(--ds-surface-overlay, #FFFFFF)",
  "elevation.surface.overlay.hovered": "var(--ds-surface-overlay-hovered, #FAFBFC)",
  "elevation.surface.overlay.pressed": "var(--ds-surface-overlay-pressed, #F4F5F7)",
  "elevation.surface.raised": "var(--ds-surface-raised, #FFFFFF)",
  "elevation.surface.raised.hovered": "var(--ds-surface-raised-hovered, #FAFBFC)",
  "elevation.surface.raised.pressed": "var(--ds-surface-raised-pressed, #F4F5F7)",
  "elevation.surface.sunken": "var(--ds-surface-sunken, #F4F5F7)"
}, GC = ["padding", "paddingBlock", "paddingBlockStart", "paddingBlockEnd", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "gap", "rowGap"], Y0 = function(d, h) {
  return Object.keys(h).reduce(function(p, E) {
    return p[E] = k(Jo({}, d, h[E])), p;
  }, {});
};
GC.reduce(function(s, d) {
  return s[d] = Y0(d, aA), s;
}, {});
var E0 = GC.reduce(function(s, d) {
  return s[d] = Y0(d, iA), s;
}, {});
Y0("backgroundColor", oA);
var lA = {
  center: k({
    alignItems: "center"
  }),
  baseline: k({
    alignItems: "baseline"
  }),
  start: k({
    alignItems: "flex-start"
  }),
  end: k({
    alignItems: "flex-end"
  })
}, uA = {
  start: k({
    justifyContent: "flex-start"
  }),
  center: k({
    justifyContent: "center"
  }),
  end: k({
    justifyContent: "flex-end"
  }),
  "space-between": k({
    justifyContent: "space-between"
  })
}, sA = {
  hug: k({
    flexGrow: 0
  }),
  fill: k({
    width: "100%",
    flexGrow: 1
  })
}, cA = k({
  flexWrap: "wrap"
}), fA = k({
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "row"
}), dA = k({
  color: "var(--ds-text-subtle, #42526E)",
  marginBlock: "var(--ds-space-0, 0px)",
  marginInline: "calc(-1 * ".concat("var(--ds-space-025, 2px)", ")"),
  pointerEvents: "none",
  userSelect: "none"
}), pA = function(d) {
  var h = d.children;
  return Ar("span", {
    css: dA
  }, h);
}, QC = /* @__PURE__ */ $e.memo(/* @__PURE__ */ $e.forwardRef(function(s, d) {
  var h = s.as, p = s.alignInline, E = s.alignBlock, T = s.shouldWrap, R = T === void 0 ? !1 : T, y = s.spread, N = s.grow, z = s.space, P = s.rowSpace, q = s.separator, se = s.testId, he = s.children, ue = h || "div", te = typeof q == "string" ? Ar(pA, null, q) : q, $ = te ? $e.Children.toArray(he).filter(Boolean).map(function(K, le) {
    return Ar($e.Fragment, {
      key: le
    }, q && le > 0 ? te : null, K);
  }) : he, de = y || p;
  return Ar(ue, {
    css: [fA, z && E0.gap[z], de && uA[de], N && sA[N], E && lA[E], R && cA, P && E0.rowGap[P]],
    "data-testid": se,
    ref: d
  }, $);
}));
QC.displayName = "Inline";
const ZS = QC;
var vA = {
  start: k({
    justifyContent: "start"
  }),
  center: k({
    justifyContent: "center"
  }),
  end: k({
    justifyContent: "end"
  }),
  "space-between": k({
    justifyContent: "space-between"
  })
}, hA = {
  start: k({
    alignItems: "start"
  }),
  center: k({
    alignItems: "center"
  }),
  end: k({
    alignItems: "end"
  })
}, mA = {
  hug: k({
    flexGrow: 0
  }),
  fill: k({
    width: "100%",
    flexGrow: 1
  })
}, yA = k({
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column"
}), qC = /* @__PURE__ */ $e.memo(/* @__PURE__ */ $e.forwardRef(function(s, d) {
  var h = s.as, p = s.alignInline, E = s.alignBlock, T = s.spread, R = s.grow, y = s.space, N = s.children, z = s.testId, P = h || "div", q = T || E;
  return Ar(P, {
    css: [yA, y && E0.gap[y], p && hA[p], R && mA[R], q && vA[q]],
    "data-testid": z,
    ref: d
  }, N);
}));
qC.displayName = "Stack";
const gA = qC;
var G0 = {}, bA = "#FFEBE6", EA = "#BF2600", SA = "#FFFAE6", CA = "#FF8B00", TA = "#E3FCEF", xA = "#006644", wA = "#DEEBFF", RA = "#0747A6", _A = "#EAE6FF", kA = "#403294", OA = ["children"];
function DA(s) {
  var d = function(y, N) {
    return y(N);
  }, h = /* @__PURE__ */ $e.createContext(s);
  function p(R) {
    var y = $e.useContext(h), N = y || d, z = N(R);
    return z;
  }
  function E(R) {
    var y = R.children, N = W0(R, OA), z = p(N);
    return /* @__PURE__ */ Xn.createElement(Xn.Fragment, null, y(z));
  }
  function T(R) {
    var y = $e.useContext(h), N = R.value || d, z = $e.useCallback(function(P) {
      return N(y, P);
    }, [y, N]);
    return /* @__PURE__ */ Xn.createElement(h.Provider, {
      value: z
    }, R.children);
  }
  return {
    Consumer: E,
    Provider: T,
    useTheme: p
  };
}
var AA = DA(function() {
  return {
    mode: "light"
  };
}), NA = AA.useTheme, PA = {
  light: "var(--ds-surface, #FFFFFF)",
  dark: "var(--ds-surface, #1B2638)"
}, MA = function() {
  var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "light";
  return PA[d];
}, $l = {
  small: "16px",
  medium: "24px",
  large: "32px",
  xlarge: "48px"
}, yp = {
  small: {
    width: $l.small,
    height: $l.small
  },
  medium: {
    width: $l.medium,
    height: $l.medium
  },
  large: {
    width: $l.large,
    height: $l.large
  },
  xlarge: {
    width: $l.xlarge,
    height: $l.xlarge
  }
}, FA = {
  overflow: "hidden",
  pointerEvents: "none",
  /**
   * Stop-color doesn't properly apply in chrome when the inherited/current color changes.
   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS
   * rule) and then override it with currentColor for the color changes to be picked up.
   */
  stop: {
    stopColor: "currentColor"
  }
};
k(yp.small);
k(yp.medium);
k(yp.large);
k(yp.xlarge);
var zA = function(d) {
  var h = d.width, p = d.height, E = d.size;
  if (h && p)
    return {
      width: h,
      height: p
    };
  if (E)
    return yp[E];
};
function JS(s, d) {
  var h = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(s);
    d && (p = p.filter(function(E) {
      return Object.getOwnPropertyDescriptor(s, E).enumerable;
    })), h.push.apply(h, p);
  }
  return h;
}
function eC(s) {
  for (var d = 1; d < arguments.length; d++) {
    var h = arguments[d] != null ? arguments[d] : {};
    d % 2 ? JS(Object(h), !0).forEach(function(p) {
      Jo(s, p, h[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(h)) : JS(Object(h)).forEach(function(p) {
      Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(h, p));
    });
  }
  return s;
}
var LA = k({
  display: "inline-block",
  flexShrink: 0,
  lineHeight: 1,
  // eslint-disable-next-line @repo/internal/styles/no-nested-styles
  "> svg": eC(eC({}, FA), {}, {
    maxWidth: "100%",
    maxHeight: "100%",
    color: "var(--icon-primary-color)",
    fill: "var(--icon-secondary-color)",
    verticalAlign: "bottom"
  })
}), UA = k({
  "@media screen and (forced-colors: active)": {
    // eslint-disable-next-line @repo/internal/styles/no-nested-styles
    "> svg": {
      filter: "grayscale(1)",
      "--icon-primary-color": "CanvasText",
      // foreground
      "--icon-secondary-color": "Canvas"
      // background
    }
  }
}), IA = k({
  "@media screen and (forced-colors: active)": {
    // eslint-disable-next-line @repo/internal/styles/no-nested-styles
    "> svg": {
      // if the primaryColor is the same as the secondaryColor we
      // set the --icon-primary-color to Canvas
      // this is usually to convey state i.e. Checkbox checked -> not checked
      "--icon-primary-color": "Canvas"
      // foreground
    }
  }
}), jA = k({
  "@media screen and (forced-colors: active)": {
    // eslint-disable-next-line @repo/internal/styles/no-nested-styles
    "> svg": {
      "--icon-secondary-color": "transparent"
      // background
    }
  }
}), XC = /* @__PURE__ */ $e.memo(function(d) {
  var h = d, p = h.glyph, E = h.dangerouslySetGlyph, T = h.primaryColor, R = T === void 0 ? "currentColor" : T, y = h.secondaryColor, N = h.size, z = h.testId, P = h.label, q = h.width, se = h.height, he = E ? {
    dangerouslySetInnerHTML: {
      __html: E
    }
  } : {
    children: p ? Ar(p, {
      role: "presentation"
    }) : null
  }, ue = zA({
    width: q,
    height: se,
    size: N
  }), te = NA(), $ = te.mode;
  return Ar("span", nm({
    "data-testid": z,
    role: P ? "img" : void 0,
    "aria-label": P || void 0,
    "aria-hidden": P ? void 0 : !0,
    style: {
      "--icon-primary-color": R,
      "--icon-secondary-color": y || MA($)
    }
  }, he, {
    css: [
      LA,
      UA,
      R === y && IA,
      y === "transparent" && jA,
      // NB: This can be resolved if this component, composes base SVG / and/or skeleton
      // We could then simplify how common styles are dealt with simply by encapsualting them
      // at their appropriate level and/or having a singular approach to css variables in the package
      ue && // eslint-disable-next-line @repo/internal/react/consistent-css-prop-usage
      k({
        width: ue.width,
        height: ue.height,
        "> svg": ue
      })
    ]
  }));
});
const HA = XC, $A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: XC,
  default: HA
}, Symbol.toStringTag, { value: "Module" })), gp = /* @__PURE__ */ mk($A);
Object.defineProperty(G0, "__esModule", {
  value: !0
});
var KC = G0.default = void 0, VA = BA($e), WA = gp;
function BA(s) {
  return s && s.__esModule ? s : { default: s };
}
const ZC = (s) => /* @__PURE__ */ VA.default.createElement(WA.Icon, Object.assign({
  dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
}, s));
ZC.displayName = "CheckCircleIcon";
var YA = ZC;
KC = G0.default = YA;
var Q0 = {};
Object.defineProperty(Q0, "__esModule", {
  value: !0
});
var JC = Q0.default = void 0, GA = qA($e), QA = gp;
function qA(s) {
  return s && s.__esModule ? s : { default: s };
}
const eT = (s) => /* @__PURE__ */ GA.default.createElement(QA.Icon, Object.assign({
  dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><path d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z" fill="currentColor"/><path d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'
}, s));
eT.displayName = "ErrorIcon";
var XA = eT;
JC = Q0.default = XA;
var q0 = {};
Object.defineProperty(q0, "__esModule", {
  value: !0
});
var tT = q0.default = void 0, KA = JA($e), ZA = gp;
function JA(s) {
  return s && s.__esModule ? s : { default: s };
}
const nT = (s) => /* @__PURE__ */ KA.default.createElement(ZA.Icon, Object.assign({
  dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><rect fill="inherit" x="11" y="10" width="2" height="7" rx="1"/><circle fill="inherit" cx="12" cy="8" r="1"/></g></svg>'
}, s));
nT.displayName = "InfoIcon";
var eN = nT;
tT = q0.default = eN;
var X0 = {};
Object.defineProperty(X0, "__esModule", {
  value: !0
});
var rT = X0.default = void 0, tN = rN($e), nN = gp;
function rN(s) {
  return s && s.__esModule ? s : { default: s };
}
const aT = (s) => /* @__PURE__ */ tN.default.createElement(nN.Icon, Object.assign({
  dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="18" r="1"/><path d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05" fill="inherit"/></g></svg>'
}, s));
aT.displayName = "QuestionCircleIcon";
var aN = aT;
rT = X0.default = aN;
var K0 = {};
Object.defineProperty(K0, "__esModule", {
  value: !0
});
var iT = K0.default = void 0, iN = lN($e), oN = gp;
function lN(s) {
  return s && s.__esModule ? s : { default: s };
}
const oT = (s) => /* @__PURE__ */ iN.default.createElement(oN.Icon, Object.assign({
  dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><path d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z" fill="currentColor"/><path d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'
}, s));
oT.displayName = "WarningIcon";
var uN = oT;
iT = K0.default = uN;
function tC(s, d) {
  var h = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(s);
    d && (p = p.filter(function(E) {
      return Object.getOwnPropertyDescriptor(s, E).enumerable;
    })), h.push.apply(h, p);
  }
  return h;
}
function nC(s) {
  for (var d = 1; d < arguments.length; d++) {
    var h = arguments[d] != null ? arguments[d] : {};
    d % 2 ? tC(Object(h), !0).forEach(function(p) {
      Jo(s, p, h[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(h)) : tC(Object(h)).forEach(function(p) {
      Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(h, p));
    });
  }
  return s;
}
var rC = {
  information: {
    backgroundColor: "var(--ds-background-information, ".concat(wA, ")"),
    Icon: tT,
    primaryIconColor: "var(--ds-icon-information, ".concat(RA, ")")
  },
  warning: {
    backgroundColor: "var(--ds-background-warning, ".concat(SA, ")"),
    Icon: iT,
    primaryIconColor: "var(--ds-icon-warning, ".concat(CA, ")")
  },
  error: {
    backgroundColor: "var(--ds-background-danger, ".concat(bA, ")"),
    Icon: JC,
    primaryIconColor: "var(--ds-icon-danger, ".concat(EA, ")")
  },
  success: {
    backgroundColor: "var(--ds-background-success, ".concat(TA, ")"),
    Icon: KC,
    primaryIconColor: "var(--ds-icon-success, ".concat(xA, ")")
  },
  discovery: {
    backgroundColor: "var(--ds-background-discovery, ".concat(_A, ")"),
    Icon: rT,
    primaryIconColor: "var(--ds-icon-discovery, ".concat(kA, ")")
  }
};
function sN(s, d) {
  var h = rC[s] || rC.information, p = d || h.Icon;
  return nC(nC({}, h), {}, {
    Icon: p
  });
}
var lT = /* @__PURE__ */ $e.forwardRef(function(d, h) {
  var p = d.children, E = d.appearance, T = E === void 0 ? "information" : E, R = d.actions, y = d.title, N = d.icon, z = d.testId, P = sN(T, N), q = P.primaryIconColor, se = P.backgroundColor, he = P.Icon, ue = R && R.type === Xn.Fragment ? R.props.children : R, te = Xn.Children.toArray(ue);
  return /* @__PURE__ */ Xn.createElement(KS, {
    as: "section",
    backgroundColor: cN[T],
    padding: "space.200",
    borderRadius: "normal",
    testId: z,
    ref: h,
    UNSAFE_style: {
      wordBreak: "break-word"
    }
  }, /* @__PURE__ */ Xn.createElement(ZS, {
    space: "space.200"
  }, /* @__PURE__ */ Xn.createElement(KS, {
    UNSAFE_style: {
      margin: "-2px 0"
    }
  }, /* @__PURE__ */ Xn.createElement(he, {
    size: "medium",
    primaryColor: q,
    secondaryColor: se
  })), /* @__PURE__ */ Xn.createElement(gA, {
    space: "space.100",
    testId: z && "".concat(z, "--content")
  }, !!y && /* @__PURE__ */ Xn.createElement(rA, {
    as: "h2",
    level: "h500"
  }, y), /* @__PURE__ */ Xn.createElement(FD, null, p), te.length > 0 && /* @__PURE__ */ Xn.createElement(ZS, {
    shouldWrap: !0,
    testId: z && "".concat(z, "--actions"),
    separator: "·",
    space: "space.100",
    rowSpace: "space.0"
  }, te))));
}), cN = {
  information: "information",
  warning: "warning",
  error: "danger",
  success: "success",
  discovery: "discovery"
};
lT.displayName = "SectionMessage";
const fN = lT;
var S0 = { exports: {} }, Ca = {}, Bh = { exports: {} }, u0 = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aC;
function dN() {
  return aC || (aC = 1, function(s) {
    var d, h, p, E, T;
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var R = null, y = null, N = function() {
        if (R !== null)
          try {
            var U = s.unstable_now();
            R(!0, U), R = null;
          } catch (w) {
            throw setTimeout(N, 0), w;
          }
      }, z = Date.now();
      s.unstable_now = function() {
        return Date.now() - z;
      }, d = function(U) {
        R !== null ? setTimeout(d, 0, U) : (R = U, setTimeout(N, 0));
      }, h = function(U, w) {
        y = setTimeout(U, w);
      }, p = function() {
        clearTimeout(y);
      }, E = function() {
        return !1;
      }, T = s.unstable_forceFrameRate = function() {
      };
    } else {
      var P = window.performance, q = window.Date, se = window.setTimeout, he = window.clearTimeout;
      if (typeof console < "u") {
        var ue = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof ue != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if (typeof P == "object" && typeof P.now == "function")
        s.unstable_now = function() {
          return P.now();
        };
      else {
        var te = q.now();
        s.unstable_now = function() {
          return q.now() - te;
        };
      }
      var $ = !1, de = null, K = -1, le = 5, ae = 0;
      E = function() {
        return s.unstable_now() >= ae;
      }, T = function() {
      }, s.unstable_forceFrameRate = function(U) {
        0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : le = 0 < U ? Math.floor(1e3 / U) : 5;
      };
      var M = new MessageChannel(), ge = M.port2;
      M.port1.onmessage = function() {
        if (de !== null) {
          var U = s.unstable_now();
          ae = U + le;
          try {
            de(!0, U) ? ge.postMessage(null) : ($ = !1, de = null);
          } catch (w) {
            throw ge.postMessage(null), w;
          }
        } else
          $ = !1;
      }, d = function(U) {
        de = U, $ || ($ = !0, ge.postMessage(null));
      }, h = function(U, w) {
        K = se(function() {
          U(s.unstable_now());
        }, w);
      }, p = function() {
        he(K), K = -1;
      };
    }
    function ye(U, w) {
      var x = U.length;
      U.push(w);
      e:
        for (; ; ) {
          var W = x - 1 >>> 1, V = U[W];
          if (V !== void 0 && 0 < it(V, w))
            U[W] = w, U[x] = V, x = W;
          else
            break e;
        }
    }
    function Xe(U) {
      return U = U[0], U === void 0 ? null : U;
    }
    function Ke(U) {
      var w = U[0];
      if (w !== void 0) {
        var x = U.pop();
        if (x !== w) {
          U[0] = x;
          e:
            for (var W = 0, V = U.length; W < V; ) {
              var fe = 2 * (W + 1) - 1, Oe = U[fe], Se = fe + 1, H = U[Se];
              if (Oe !== void 0 && 0 > it(Oe, x))
                H !== void 0 && 0 > it(H, Oe) ? (U[W] = H, U[Se] = x, W = Se) : (U[W] = Oe, U[fe] = x, W = fe);
              else if (H !== void 0 && 0 > it(H, x))
                U[W] = H, U[Se] = x, W = Se;
              else
                break e;
            }
        }
        return w;
      }
      return null;
    }
    function it(U, w) {
      var x = U.sortIndex - w.sortIndex;
      return x !== 0 ? x : U.id - w.id;
    }
    var pt = [], et = [], St = 1, Qe = null, Ce = 3, Ze = !1, Te = !1, Ae = !1;
    function _e(U) {
      for (var w = Xe(et); w !== null; ) {
        if (w.callback === null)
          Ke(et);
        else if (w.startTime <= U)
          Ke(et), w.sortIndex = w.expirationTime, ye(pt, w);
        else
          break;
        w = Xe(et);
      }
    }
    function Be(U) {
      if (Ae = !1, _e(U), !Te)
        if (Xe(pt) !== null)
          Te = !0, d(yt);
        else {
          var w = Xe(et);
          w !== null && h(Be, w.startTime - U);
        }
    }
    function yt(U, w) {
      Te = !1, Ae && (Ae = !1, p()), Ze = !0;
      var x = Ce;
      try {
        for (_e(w), Qe = Xe(pt); Qe !== null && (!(Qe.expirationTime > w) || U && !E()); ) {
          var W = Qe.callback;
          if (W !== null) {
            Qe.callback = null, Ce = Qe.priorityLevel;
            var V = W(Qe.expirationTime <= w);
            w = s.unstable_now(), typeof V == "function" ? Qe.callback = V : Qe === Xe(pt) && Ke(pt), _e(w);
          } else
            Ke(pt);
          Qe = Xe(pt);
        }
        if (Qe !== null)
          var fe = !0;
        else {
          var Oe = Xe(et);
          Oe !== null && h(Be, Oe.startTime - w), fe = !1;
        }
        return fe;
      } finally {
        Qe = null, Ce = x, Ze = !1;
      }
    }
    function be(U) {
      switch (U) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var ne = T;
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, s.unstable_continueExecution = function() {
      Te || Ze || (Te = !0, d(yt));
    }, s.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, s.unstable_getFirstCallbackNode = function() {
      return Xe(pt);
    }, s.unstable_next = function(U) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var w = 3;
          break;
        default:
          w = Ce;
      }
      var x = Ce;
      Ce = w;
      try {
        return U();
      } finally {
        Ce = x;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = ne, s.unstable_runWithPriority = function(U, w) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var x = Ce;
      Ce = U;
      try {
        return w();
      } finally {
        Ce = x;
      }
    }, s.unstable_scheduleCallback = function(U, w, x) {
      var W = s.unstable_now();
      if (typeof x == "object" && x !== null) {
        var V = x.delay;
        V = typeof V == "number" && 0 < V ? W + V : W, x = typeof x.timeout == "number" ? x.timeout : be(U);
      } else
        x = be(U), V = W;
      return x = V + x, U = { id: St++, callback: w, priorityLevel: U, startTime: V, expirationTime: x, sortIndex: -1 }, V > W ? (U.sortIndex = V, ye(et, U), Xe(pt) === null && U === Xe(et) && (Ae ? p() : Ae = !0, h(Be, V - W))) : (U.sortIndex = x, ye(pt, U), Te || Ze || (Te = !0, d(yt))), U;
    }, s.unstable_shouldYield = function() {
      var U = s.unstable_now();
      _e(U);
      var w = Xe(pt);
      return w !== Qe && Qe !== null && w !== null && w.callback !== null && w.startTime <= U && w.expirationTime < Qe.expirationTime || E();
    }, s.unstable_wrapCallback = function(U) {
      var w = Ce;
      return function() {
        var x = Ce;
        Ce = w;
        try {
          return U.apply(this, arguments);
        } finally {
          Ce = x;
        }
      };
    };
  }(u0)), u0;
}
var s0 = {};
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iC;
function pN() {
  return iC || (iC = 1, function(s) {
    ({}).NODE_ENV !== "production" && function() {
      var d = !1, h = !0, p, E, T, R, y;
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window > "u" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var N = null, z = null, P = function() {
          if (N !== null)
            try {
              var oe = s.unstable_now(), Ee = !0;
              N(Ee, oe), N = null;
            } catch (lt) {
              throw setTimeout(P, 0), lt;
            }
        }, q = Date.now();
        s.unstable_now = function() {
          return Date.now() - q;
        }, p = function(oe) {
          N !== null ? setTimeout(p, 0, oe) : (N = oe, setTimeout(P, 0));
        }, E = function(oe, Ee) {
          z = setTimeout(oe, Ee);
        }, T = function() {
          clearTimeout(z);
        }, R = function() {
          return !1;
        }, y = s.unstable_forceFrameRate = function() {
        };
      } else {
        var se = window.performance, he = window.Date, ue = window.setTimeout, te = window.clearTimeout;
        if (typeof console < "u") {
          var $ = window.requestAnimationFrame, de = window.cancelAnimationFrame;
          typeof $ != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof de != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if (typeof se == "object" && typeof se.now == "function")
          s.unstable_now = function() {
            return se.now();
          };
        else {
          var K = he.now();
          s.unstable_now = function() {
            return he.now() - K;
          };
        }
        var le = !1, ae = null, M = -1, ge = 5, ye = 0;
        R = function() {
          return s.unstable_now() >= ye;
        }, y = function() {
        }, s.unstable_forceFrameRate = function(oe) {
          if (oe < 0 || oe > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
            return;
          }
          oe > 0 ? ge = Math.floor(1e3 / oe) : ge = 5;
        };
        var Xe = function() {
          if (ae !== null) {
            var oe = s.unstable_now();
            ye = oe + ge;
            var Ee = !0;
            try {
              var lt = ae(Ee, oe);
              lt ? it.postMessage(null) : (le = !1, ae = null);
            } catch (Rt) {
              throw it.postMessage(null), Rt;
            }
          } else
            le = !1;
        }, Ke = new MessageChannel(), it = Ke.port2;
        Ke.port1.onmessage = Xe, p = function(oe) {
          ae = oe, le || (le = !0, it.postMessage(null));
        }, E = function(oe, Ee) {
          M = ue(function() {
            oe(s.unstable_now());
          }, Ee);
        }, T = function() {
          te(M), M = -1;
        };
      }
      function pt(oe, Ee) {
        var lt = oe.length;
        oe.push(Ee), Qe(oe, Ee, lt);
      }
      function et(oe) {
        var Ee = oe[0];
        return Ee === void 0 ? null : Ee;
      }
      function St(oe) {
        var Ee = oe[0];
        if (Ee !== void 0) {
          var lt = oe.pop();
          return lt !== Ee && (oe[0] = lt, Ce(oe, lt, 0)), Ee;
        } else
          return null;
      }
      function Qe(oe, Ee, lt) {
        for (var Rt = lt; ; ) {
          var cn = Rt - 1 >>> 1, ln = oe[cn];
          if (ln !== void 0 && Ze(ln, Ee) > 0)
            oe[cn] = Ee, oe[Rt] = ln, Rt = cn;
          else
            return;
        }
      }
      function Ce(oe, Ee, lt) {
        for (var Rt = lt, cn = oe.length; Rt < cn; ) {
          var ln = (Rt + 1) * 2 - 1, Tn = oe[ln], dr = ln + 1, fn = oe[dr];
          if (Tn !== void 0 && Ze(Tn, Ee) < 0)
            fn !== void 0 && Ze(fn, Tn) < 0 ? (oe[Rt] = fn, oe[dr] = Ee, Rt = dr) : (oe[Rt] = Tn, oe[ln] = Ee, Rt = ln);
          else if (fn !== void 0 && Ze(fn, Ee) < 0)
            oe[Rt] = fn, oe[dr] = Ee, Rt = dr;
          else
            return;
        }
      }
      function Ze(oe, Ee) {
        var lt = oe.sortIndex - Ee.sortIndex;
        return lt !== 0 ? lt : oe.id - Ee.id;
      }
      var Te = 0, Ae = 1, _e = 2, Be = 3, yt = 4, be = 5, ne = 0, U = 0, w = 4, x = (
        // $FlowFixMe Flow doesn't know about SharedArrayBuffer
        typeof SharedArrayBuffer == "function" ? new SharedArrayBuffer(w * Int32Array.BYTES_PER_ELEMENT) : (
          // $FlowFixMe Flow doesn't know about ArrayBuffer
          typeof ArrayBuffer == "function" ? new ArrayBuffer(w * Int32Array.BYTES_PER_ELEMENT) : null
        )
      ), W = x !== null ? new Int32Array(x) : [], V = 0, fe = 1, Oe = 2, Se = 3;
      W[V] = Te, W[Se] = 0, W[fe] = 0;
      var H = 131072, qe = 524288, ce = 0, Ue = null, nt = null, rt = 0, ht = 1, Hn = 2, At = 3, Rn = 4, Pn = 5, nn = 6, Ge = 7, Nt = 8;
      function Cn(oe) {
        if (nt !== null) {
          var Ee = rt;
          if (rt += oe.length, rt + 1 > ce) {
            if (ce *= 2, ce > qe) {
              console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."), _n();
              return;
            }
            var lt = new Int32Array(ce * 4);
            lt.set(nt), Ue = lt.buffer, nt = lt;
          }
          nt.set(oe, Ee);
        }
      }
      function ur() {
        ce = H, Ue = new ArrayBuffer(ce * 4), nt = new Int32Array(Ue), rt = 0;
      }
      function _n() {
        var oe = Ue;
        return ce = 0, Ue = null, nt = null, rt = 0, oe;
      }
      function Mn(oe, Ee) {
        W[Se]++, nt !== null && Cn([ht, Ee * 1e3, oe.id, oe.priorityLevel]);
      }
      function na(oe, Ee) {
        W[V] = Te, W[fe] = 0, W[Se]--, nt !== null && Cn([Hn, Ee * 1e3, oe.id]);
      }
      function L(oe, Ee) {
        W[Se]--, nt !== null && Cn([Rn, Ee * 1e3, oe.id]);
      }
      function me(oe, Ee) {
        W[V] = Te, W[fe] = 0, W[Se]--, nt !== null && Cn([At, Ee * 1e3, oe.id]);
      }
      function Pe(oe, Ee) {
        ne++, W[V] = oe.priorityLevel, W[fe] = oe.id, W[Oe] = ne, nt !== null && Cn([Pn, Ee * 1e3, oe.id, ne]);
      }
      function ot(oe, Ee) {
        W[V] = Te, W[fe] = 0, W[Oe] = 0, nt !== null && Cn([nn, Ee * 1e3, oe.id, ne]);
      }
      function wt(oe) {
        U++, nt !== null && Cn([Ge, oe * 1e3, U]);
      }
      function bt(oe) {
        nt !== null && Cn([Nt, oe * 1e3, U]);
      }
      var Ct = 1073741823, ct = -1, sn = 250, $n = 5e3, Fn = 1e4, Zn = Ct, on = [], sr = [], yi = 1, Ht = null, hn = Be, Nr = !1, Vn = !1, Pr = !1;
      function cr(oe) {
        for (var Ee = et(sr); Ee !== null; ) {
          if (Ee.callback === null)
            St(sr);
          else if (Ee.startTime <= oe)
            St(sr), Ee.sortIndex = Ee.expirationTime, pt(on, Ee), Mn(Ee, oe), Ee.isQueued = !0;
          else
            return;
          Ee = et(sr);
        }
      }
      function Ba(oe) {
        if (Pr = !1, cr(oe), !Vn)
          if (et(on) !== null)
            Vn = !0, p(gi);
          else {
            var Ee = et(sr);
            Ee !== null && E(Ba, Ee.startTime - oe);
          }
      }
      function gi(oe, Ee) {
        bt(Ee), Vn = !1, Pr && (Pr = !1, T()), Nr = !0;
        var lt = hn;
        try {
          if (h)
            try {
              return tl(oe, Ee);
            } catch (ln) {
              if (Ht !== null) {
                var Rt = s.unstable_now();
                me(Ht, Rt), Ht.isQueued = !1;
              }
              throw ln;
            }
        } finally {
          Ht = null, hn = lt, Nr = !1;
          {
            var cn = s.unstable_now();
            wt(cn);
          }
        }
      }
      function tl(oe, Ee) {
        var lt = Ee;
        for (cr(lt), Ht = et(on); Ht !== null && !d && !(Ht.expirationTime > lt && (!oe || R())); ) {
          var Rt = Ht.callback;
          if (Rt !== null) {
            Ht.callback = null, hn = Ht.priorityLevel;
            var cn = Ht.expirationTime <= lt;
            Pe(Ht, lt);
            var ln = Rt(cn);
            lt = s.unstable_now(), typeof ln == "function" ? (Ht.callback = ln, ot(Ht, lt)) : (na(Ht, lt), Ht.isQueued = !1, Ht === et(on) && St(on)), cr(lt);
          } else
            St(on);
          Ht = et(on);
        }
        if (Ht !== null)
          return !0;
        var Tn = et(sr);
        return Tn !== null && E(Ba, Tn.startTime - lt), !1;
      }
      function nl(oe, Ee) {
        switch (oe) {
          case Ae:
          case _e:
          case Be:
          case yt:
          case be:
            break;
          default:
            oe = Be;
        }
        var lt = hn;
        hn = oe;
        try {
          return Ee();
        } finally {
          hn = lt;
        }
      }
      function lo(oe) {
        var Ee;
        switch (hn) {
          case Ae:
          case _e:
          case Be:
            Ee = Be;
            break;
          default:
            Ee = hn;
            break;
        }
        var lt = hn;
        hn = Ee;
        try {
          return oe();
        } finally {
          hn = lt;
        }
      }
      function bi(oe) {
        var Ee = hn;
        return function() {
          var lt = hn;
          hn = Ee;
          try {
            return oe.apply(this, arguments);
          } finally {
            hn = lt;
          }
        };
      }
      function Wn(oe) {
        switch (oe) {
          case Ae:
            return ct;
          case _e:
            return sn;
          case be:
            return Zn;
          case yt:
            return Fn;
          case Be:
          default:
            return $n;
        }
      }
      function wa(oe, Ee, lt) {
        var Rt = s.unstable_now(), cn, ln;
        if (typeof lt == "object" && lt !== null) {
          var Tn = lt.delay;
          typeof Tn == "number" && Tn > 0 ? cn = Rt + Tn : cn = Rt, ln = typeof lt.timeout == "number" ? lt.timeout : Wn(oe);
        } else
          ln = Wn(oe), cn = Rt;
        var dr = cn + ln, fn = {
          id: yi++,
          callback: Ee,
          priorityLevel: oe,
          startTime: cn,
          expirationTime: dr,
          sortIndex: -1
        };
        return fn.isQueued = !1, cn > Rt ? (fn.sortIndex = cn, pt(sr, fn), et(on) === null && fn === et(sr) && (Pr ? T() : Pr = !0, E(Ba, cn - Rt))) : (fn.sortIndex = dr, pt(on, fn), Mn(fn, Rt), fn.isQueued = !0, !Vn && !Nr && (Vn = !0, p(gi))), fn;
      }
      function Ya() {
      }
      function fr() {
        !Vn && !Nr && (Vn = !0, p(gi));
      }
      function Ra() {
        return et(on);
      }
      function Jn(oe) {
        if (oe.isQueued) {
          var Ee = s.unstable_now();
          L(oe, Ee), oe.isQueued = !1;
        }
        oe.callback = null;
      }
      function ra() {
        return hn;
      }
      function uo() {
        var oe = s.unstable_now();
        cr(oe);
        var Ee = et(on);
        return Ee !== Ht && Ht !== null && Ee !== null && Ee.callback !== null && Ee.startTime <= oe && Ee.expirationTime < Ht.expirationTime || R();
      }
      var Ga = y, so = {
        startLoggingProfilingEvents: ur,
        stopLoggingProfilingEvents: _n,
        sharedProfilingBuffer: x
      };
      s.unstable_IdlePriority = be, s.unstable_ImmediatePriority = Ae, s.unstable_LowPriority = yt, s.unstable_NormalPriority = Be, s.unstable_Profiling = so, s.unstable_UserBlockingPriority = _e, s.unstable_cancelCallback = Jn, s.unstable_continueExecution = fr, s.unstable_getCurrentPriorityLevel = ra, s.unstable_getFirstCallbackNode = Ra, s.unstable_next = lo, s.unstable_pauseExecution = Ya, s.unstable_requestPaint = Ga, s.unstable_runWithPriority = nl, s.unstable_scheduleCallback = wa, s.unstable_shouldYield = uo, s.unstable_wrapCallback = bi;
    }();
  }(s0)), s0;
}
var oC;
function uT() {
  return oC || (oC = 1, {}.NODE_ENV === "production" ? Bh.exports = dN() : Bh.exports = pN()), Bh.exports;
}
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lC;
function vN() {
  if (lC)
    return Ca;
  lC = 1;
  var s = $e, d = lm(), h = uT();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!s)
    throw Error(p(227));
  function E(n, r, o, u, f, g, b, _, Q) {
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Y);
    } catch (Fe) {
      this.onError(Fe);
    }
  }
  var T = !1, R = null, y = !1, N = null, z = { onError: function(n) {
    T = !0, R = n;
  } };
  function P(n, r, o, u, f, g, b, _, Q) {
    T = !1, R = null, E.apply(z, arguments);
  }
  function q(n, r, o, u, f, g, b, _, Q) {
    if (P.apply(this, arguments), T) {
      if (T) {
        var Y = R;
        T = !1, R = null;
      } else
        throw Error(p(198));
      y || (y = !0, N = Y);
    }
  }
  var se = null, he = null, ue = null;
  function te(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = ue(o), q(u, r, void 0, n), n.currentTarget = null;
  }
  var $ = null, de = {};
  function K() {
    if ($)
      for (var n in de) {
        var r = de[n], o = $.indexOf(n);
        if (!(-1 < o))
          throw Error(p(96, n));
        if (!ae[o]) {
          if (!r.extractEvents)
            throw Error(p(97, n));
          ae[o] = r, o = r.eventTypes;
          for (var u in o) {
            var f = void 0, g = o[u], b = r, _ = u;
            if (M.hasOwnProperty(_))
              throw Error(p(99, _));
            M[_] = g;
            var Q = g.phasedRegistrationNames;
            if (Q) {
              for (f in Q)
                Q.hasOwnProperty(f) && le(Q[f], b, _);
              f = !0;
            } else
              g.registrationName ? (le(g.registrationName, b, _), f = !0) : f = !1;
            if (!f)
              throw Error(p(98, u, n));
          }
        }
      }
  }
  function le(n, r, o) {
    if (ge[n])
      throw Error(p(100, n));
    ge[n] = r, ye[n] = r.eventTypes[o].dependencies;
  }
  var ae = [], M = {}, ge = {}, ye = {};
  function Xe(n) {
    var r = !1, o;
    for (o in n)
      if (n.hasOwnProperty(o)) {
        var u = n[o];
        if (!de.hasOwnProperty(o) || de[o] !== u) {
          if (de[o])
            throw Error(p(102, o));
          de[o] = u, r = !0;
        }
      }
    r && K();
  }
  var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), it = null, pt = null, et = null;
  function St(n) {
    if (n = he(n)) {
      if (typeof it != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = se(r), it(n.stateNode, n.type, r));
    }
  }
  function Qe(n) {
    pt ? et ? et.push(n) : et = [n] : pt = n;
  }
  function Ce() {
    if (pt) {
      var n = pt, r = et;
      if (et = pt = null, St(n), r)
        for (n = 0; n < r.length; n++)
          St(r[n]);
    }
  }
  function Ze(n, r) {
    return n(r);
  }
  function Te(n, r, o, u, f) {
    return n(r, o, u, f);
  }
  function Ae() {
  }
  var _e = Ze, Be = !1, yt = !1;
  function be() {
    (pt !== null || et !== null) && (Ae(), Ce());
  }
  function ne(n, r, o) {
    if (yt)
      return n(r, o);
    yt = !0;
    try {
      return _e(n, r, o);
    } finally {
      yt = !1, be();
    }
  }
  var U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = Object.prototype.hasOwnProperty, x = {}, W = {};
  function V(n) {
    return w.call(W, n) ? !0 : w.call(x, n) ? !1 : U.test(n) ? W[n] = !0 : (x[n] = !0, !1);
  }
  function fe(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(n, r, o, u) {
    if (r === null || typeof r > "u" || fe(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Se(n, r, o, u, f, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = g;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    H[n] = new Se(n, 0, !1, n, null, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    H[r] = new Se(r, 1, !1, n[1], null, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    H[n] = new Se(n, 2, !1, n.toLowerCase(), null, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    H[n] = new Se(n, 2, !1, n, null, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    H[n] = new Se(n, 3, !1, n.toLowerCase(), null, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    H[n] = new Se(n, 3, !0, n, null, !1);
  }), ["capture", "download"].forEach(function(n) {
    H[n] = new Se(n, 4, !1, n, null, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    H[n] = new Se(n, 6, !1, n, null, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    H[n] = new Se(n, 5, !1, n.toLowerCase(), null, !1);
  });
  var qe = /[\-:]([a-z])/g;
  function ce(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      qe,
      ce
    );
    H[r] = new Se(r, 1, !1, n, null, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(qe, ce);
    H[r] = new Se(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(qe, ce);
    H[r] = new Se(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    H[n] = new Se(n, 1, !1, n.toLowerCase(), null, !1);
  }), H.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(n) {
    H[n] = new Se(n, 1, !1, n.toLowerCase(), null, !0);
  });
  var Ue = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ue.hasOwnProperty("ReactCurrentDispatcher") || (Ue.ReactCurrentDispatcher = { current: null }), Ue.hasOwnProperty("ReactCurrentBatchConfig") || (Ue.ReactCurrentBatchConfig = { suspense: null });
  function nt(n, r, o, u) {
    var f = H.hasOwnProperty(r) ? H[r] : null, g = f !== null ? f.type === 0 : u ? !1 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N");
    g || (Oe(r, o, f, u) && (o = null), u || f === null ? V(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var rt = /^(.*)[\\\/]/, ht = typeof Symbol == "function" && Symbol.for, Hn = ht ? Symbol.for("react.element") : 60103, At = ht ? Symbol.for("react.portal") : 60106, Rn = ht ? Symbol.for("react.fragment") : 60107, Pn = ht ? Symbol.for("react.strict_mode") : 60108, nn = ht ? Symbol.for("react.profiler") : 60114, Ge = ht ? Symbol.for("react.provider") : 60109, Nt = ht ? Symbol.for("react.context") : 60110, Cn = ht ? Symbol.for("react.concurrent_mode") : 60111, ur = ht ? Symbol.for("react.forward_ref") : 60112, _n = ht ? Symbol.for("react.suspense") : 60113, Mn = ht ? Symbol.for("react.suspense_list") : 60120, na = ht ? Symbol.for("react.memo") : 60115, L = ht ? Symbol.for("react.lazy") : 60116, me = ht ? Symbol.for("react.block") : 60121, Pe = typeof Symbol == "function" && Symbol.iterator;
  function ot(n) {
    return n === null || typeof n != "object" ? null : (n = Pe && n[Pe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  function wt(n) {
    if (n._status === -1) {
      n._status = 0;
      var r = n._ctor;
      r = r(), n._result = r, r.then(function(o) {
        n._status === 0 && (o = o.default, n._status = 1, n._result = o);
      }, function(o) {
        n._status === 0 && (n._status = 2, n._result = o);
      });
    }
  }
  function bt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Rn:
        return "Fragment";
      case At:
        return "Portal";
      case nn:
        return "Profiler";
      case Pn:
        return "StrictMode";
      case _n:
        return "Suspense";
      case Mn:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Nt:
          return "Context.Consumer";
        case Ge:
          return "Context.Provider";
        case ur:
          var r = n.render;
          return r = r.displayName || r.name || "", n.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case na:
          return bt(n.type);
        case me:
          return bt(n.render);
        case L:
          if (n = n._status === 1 ? n._result : null)
            return bt(n);
      }
    return null;
  }
  function Ct(n) {
    var r = "";
    do {
      e:
        switch (n.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var o = "";
            break e;
          default:
            var u = n._debugOwner, f = n._debugSource, g = bt(n.type);
            o = null, u && (o = bt(u.type)), u = g, g = "", f ? g = " (at " + f.fileName.replace(rt, "") + ":" + f.lineNumber + ")" : o && (g = " (created by " + o + ")"), o = `
    in ` + (u || "Unknown") + g;
        }
      r += o, n = n.return;
    } while (n);
    return r;
  }
  function ct(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function sn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $n(n) {
    var r = sn(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, g = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(b) {
        u = "" + b, g.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(b) {
        u = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Fn(n) {
    n._valueTracker || (n._valueTracker = $n(n));
  }
  function Zn(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = sn(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function on(n, r) {
    var o = r.checked;
    return d({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function sr(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ct(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function yi(n, r) {
    r = r.checked, r != null && nt(n, "checked", r, !1);
  }
  function Ht(n, r) {
    yi(n, r);
    var o = ct(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Nr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Nr(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function hn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Nr(n, r, o) {
    (r !== "number" || n.ownerDocument.activeElement !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  function Vn(n) {
    var r = "";
    return s.Children.forEach(n, function(o) {
      o != null && (r += o);
    }), r;
  }
  function Pr(n, r) {
    return n = d({ children: void 0 }, r), (r = Vn(r.children)) && (n.children = r), n;
  }
  function cr(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < o.length; f++)
        r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ct(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ba(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return d({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gi(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(p(92));
        if (Array.isArray(o)) {
          if (!(1 >= o.length))
            throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ct(o) };
  }
  function tl(n, r) {
    var o = ct(r.value), u = ct(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function nl(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  var lo = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function bi(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Wn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? bi(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wa, Ya = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== lo.svg || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wa = wa || document.createElement("div"), wa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wa.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function fr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  function Ra(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Jn = { animationend: Ra("Animation", "AnimationEnd"), animationiteration: Ra("Animation", "AnimationIteration"), animationstart: Ra("Animation", "AnimationStart"), transitionend: Ra("Transition", "TransitionEnd") }, ra = {}, uo = {};
  Ke && (uo = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Ga(n) {
    if (ra[n])
      return ra[n];
    if (!Jn[n])
      return n;
    var r = Jn[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in uo)
        return ra[n] = r[o];
    return n;
  }
  var so = Ga("animationend"), oe = Ga("animationiteration"), Ee = Ga("animationstart"), lt = Ga("transitionend"), Rt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cn = new (typeof WeakMap == "function" ? WeakMap : Map)();
  function ln(n) {
    var r = cn.get(n);
    return r === void 0 && (r = /* @__PURE__ */ new Map(), cn.set(n, r)), r;
  }
  function Tn(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.effectTag & 1026 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function dr(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function fn(n) {
    if (Tn(n) !== n)
      throw Error(p(188));
  }
  function Ei(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Tn(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var g = f.alternate;
      if (g === null) {
        if (u = f.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === o)
            return fn(f), n;
          if (g === u)
            return fn(f), r;
          g = g.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== u.return)
        o = f, u = g;
      else {
        for (var b = !1, _ = f.child; _; ) {
          if (_ === o) {
            b = !0, o = f, u = g;
            break;
          }
          if (_ === u) {
            b = !0, u = f, o = g;
            break;
          }
          _ = _.sibling;
        }
        if (!b) {
          for (_ = g.child; _; ) {
            if (_ === o) {
              b = !0, o = g, u = f;
              break;
            }
            if (_ === u) {
              b = !0, u = g, o = f;
              break;
            }
            _ = _.sibling;
          }
          if (!b)
            throw Error(p(189));
        }
      }
      if (o.alternate !== u)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function rl(n) {
    if (n = Ei(n), !n)
      return null;
    for (var r = n; ; ) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      if (r.child)
        r.child.return = r, r = r.child;
      else {
        if (r === n)
          break;
        for (; !r.sibling; ) {
          if (!r.return || r.return === n)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return null;
  }
  function mn(n, r) {
    if (r == null)
      throw Error(p(30));
    return n == null ? r : Array.isArray(n) ? Array.isArray(r) ? (n.push.apply(n, r), n) : (n.push(r), n) : Array.isArray(r) ? [n].concat(r) : [n, r];
  }
  function xn(n, r, o) {
    Array.isArray(n) ? n.forEach(r, o) : n && r.call(o, n);
  }
  var co = null;
  function Bl(n) {
    if (n) {
      var r = n._dispatchListeners, o = n._dispatchInstances;
      if (Array.isArray(r))
        for (var u = 0; u < r.length && !n.isPropagationStopped(); u++)
          te(n, r[u], o[u]);
      else
        r && te(n, r, o);
      n._dispatchListeners = null, n._dispatchInstances = null, n.isPersistent() || n.constructor.release(n);
    }
  }
  function Qa(n) {
    if (n !== null && (co = mn(co, n)), n = co, co = null, n) {
      if (xn(n, Bl), co)
        throw Error(p(95));
      if (y)
        throw n = N, y = !1, N = null, n;
    }
  }
  function Yl(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  function us(n) {
    if (!Ke)
      return !1;
    n = "on" + n;
    var r = n in document;
    return r || (r = document.createElement("div"), r.setAttribute(n, "return;"), r = typeof r[n] == "function"), r;
  }
  var fo = [];
  function Gl(n) {
    n.topLevelType = null, n.nativeEvent = null, n.targetInst = null, n.ancestors.length = 0, 10 > fo.length && fo.push(n);
  }
  function ss(n, r, o, u) {
    if (fo.length) {
      var f = fo.pop();
      return f.topLevelType = n, f.eventSystemFlags = u, f.nativeEvent = r, f.targetInst = o, f;
    }
    return { topLevelType: n, eventSystemFlags: u, nativeEvent: r, targetInst: o, ancestors: [] };
  }
  function Ql(n) {
    var r = n.targetInst, o = r;
    do {
      if (!o) {
        n.ancestors.push(o);
        break;
      }
      var u = o;
      if (u.tag === 3)
        u = u.stateNode.containerInfo;
      else {
        for (; u.return; )
          u = u.return;
        u = u.tag !== 3 ? null : u.stateNode.containerInfo;
      }
      if (!u)
        break;
      r = o.tag, r !== 5 && r !== 6 || n.ancestors.push(o), o = fl(u);
    } while (o);
    for (o = 0; o < n.ancestors.length; o++) {
      r = n.ancestors[o];
      var f = Yl(n.nativeEvent);
      u = n.topLevelType;
      var g = n.nativeEvent, b = n.eventSystemFlags;
      o === 0 && (b |= 64);
      for (var _ = null, Q = 0; Q < ae.length; Q++) {
        var Y = ae[Q];
        Y && (Y = Y.extractEvents(u, r, g, f, b)) && (_ = mn(_, Y));
      }
      Qa(_);
    }
  }
  function S(n, r, o) {
    if (!o.has(n)) {
      switch (n) {
        case "scroll":
          ia(r, "scroll", !0);
          break;
        case "focus":
        case "blur":
          ia(r, "focus", !0), ia(r, "blur", !0), o.set("blur", null), o.set("focus", null);
          break;
        case "cancel":
        case "close":
          us(n) && ia(r, n, !0);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          Rt.indexOf(n) === -1 && Tt(n, r);
      }
      o.set(n, null);
    }
  }
  var A, G, J, Ne = !1, at = [], Ye = null, ft = null, jt = null, kn = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), zn = [], pr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), vr = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  function al(n, r) {
    var o = ln(r);
    pr.forEach(function(u) {
      S(u, r, o);
    }), vr.forEach(function(u) {
      S(u, r, o);
    });
  }
  function qa(n, r, o, u, f) {
    return { blockedOn: n, topLevelType: r, eventSystemFlags: o | 32, nativeEvent: f, container: u };
  }
  function aa(n, r) {
    switch (n) {
      case "focus":
      case "blur":
        Ye = null;
        break;
      case "dragenter":
      case "dragleave":
        ft = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        kn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(r.pointerId);
    }
  }
  function il(n, r, o, u, f, g) {
    return n === null || n.nativeEvent !== g ? (n = qa(r, o, u, f, g), r !== null && (r = Zl(r), r !== null && G(r)), n) : (n.eventSystemFlags |= u, n);
  }
  function bp(n, r, o, u, f) {
    switch (r) {
      case "focus":
        return Ye = il(Ye, n, r, o, u, f), !0;
      case "dragenter":
        return ft = il(ft, n, r, o, u, f), !0;
      case "mouseover":
        return jt = il(jt, n, r, o, u, f), !0;
      case "pointerover":
        var g = f.pointerId;
        return kn.set(g, il(kn.get(g) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return g = f.pointerId, Dn.set(g, il(Dn.get(g) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function dm(n) {
    var r = fl(n.target);
    if (r !== null) {
      var o = Tn(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = dr(o), r !== null) {
            n.blockedOn = r, h.unstable_runWithPriority(n.priority, function() {
              J(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.hydrate) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function _a(n) {
    if (n.blockedOn !== null)
      return !1;
    var r = Oa(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
    if (r !== null) {
      var o = Zl(r);
      return o !== null && G(o), n.blockedOn = r, !1;
    }
    return !0;
  }
  function Ep(n, r, o) {
    _a(n) && o.delete(r);
  }
  function ef() {
    for (Ne = !1; 0 < at.length; ) {
      var n = at[0];
      if (n.blockedOn !== null) {
        n = Zl(n.blockedOn), n !== null && A(n);
        break;
      }
      var r = Oa(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
      r !== null ? n.blockedOn = r : at.shift();
    }
    Ye !== null && _a(Ye) && (Ye = null), ft !== null && _a(ft) && (ft = null), jt !== null && _a(jt) && (jt = null), kn.forEach(Ep), Dn.forEach(Ep);
  }
  function po(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ne || (Ne = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, ef)));
  }
  function Sp(n) {
    function r(f) {
      return po(f, n);
    }
    if (0 < at.length) {
      po(at[0], n);
      for (var o = 1; o < at.length; o++) {
        var u = at[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ye !== null && po(Ye, n), ft !== null && po(ft, n), jt !== null && po(jt, n), kn.forEach(r), Dn.forEach(r), o = 0; o < zn.length; o++)
      u = zn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < zn.length && (o = zn[0], o.blockedOn === null); )
      dm(o), o.blockedOn === null && zn.shift();
  }
  var tf = {}, Cp = /* @__PURE__ */ new Map(), nf = /* @__PURE__ */ new Map(), Me = [
    "abort",
    "abort",
    so,
    "animationEnd",
    oe,
    "animationIteration",
    Ee,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    lt,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function cs(n, r) {
    for (var o = 0; o < n.length; o += 2) {
      var u = n[o], f = n[o + 1], g = "on" + (f[0].toUpperCase() + f.slice(1));
      g = { phasedRegistrationNames: { bubbled: g, captured: g + "Capture" }, dependencies: [u], eventPriority: r }, nf.set(u, r), Cp.set(u, g), tf[f] = g;
    }
  }
  cs("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), cs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), cs(Me, 2);
  for (var Tp = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ar = 0; ar < Tp.length; ar++)
    nf.set(Tp[ar], 0);
  var Xa = h.unstable_UserBlockingPriority, ql = h.unstable_runWithPriority, Si = !0;
  function Tt(n, r) {
    ia(r, n, !1);
  }
  function ia(n, r, o) {
    var u = nf.get(r);
    switch (u === void 0 ? 2 : u) {
      case 0:
        u = ol.bind(null, r, 1, n);
        break;
      case 1:
        u = ka.bind(null, r, 1, n);
        break;
      default:
        u = hr.bind(null, r, 1, n);
    }
    o ? n.addEventListener(r, u, !0) : n.addEventListener(r, u, !1);
  }
  function ol(n, r, o, u) {
    Be || Ae();
    var f = hr, g = Be;
    Be = !0;
    try {
      Te(f, n, r, o, u);
    } finally {
      (Be = g) || be();
    }
  }
  function ka(n, r, o, u) {
    ql(Xa, hr.bind(null, n, r, o, u));
  }
  function hr(n, r, o, u) {
    if (Si)
      if (0 < at.length && -1 < pr.indexOf(n))
        n = qa(null, n, r, o, u), at.push(n);
      else {
        var f = Oa(n, r, o, u);
        if (f === null)
          aa(n, u);
        else if (-1 < pr.indexOf(n))
          n = qa(f, n, r, o, u), at.push(n);
        else if (!bp(f, n, r, o, u)) {
          aa(n, u), n = ss(n, u, null, r);
          try {
            ne(Ql, n);
          } finally {
            Gl(n);
          }
        }
      }
  }
  function Oa(n, r, o, u) {
    if (o = Yl(u), o = fl(o), o !== null) {
      var f = Tn(o);
      if (f === null)
        o = null;
      else {
        var g = f.tag;
        if (g === 13) {
          if (o = dr(f), o !== null)
            return o;
          o = null;
        } else if (g === 3) {
          if (f.stateNode.hydrate)
            return f.tag === 3 ? f.stateNode.containerInfo : null;
          o = null;
        } else
          f !== o && (o = null);
      }
    }
    n = ss(n, u, o, r);
    try {
      ne(Ql, n);
    } finally {
      Gl(n);
    }
    return null;
  }
  var ll = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, fs = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ll).forEach(function(n) {
    fs.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ll[r] = ll[n];
    });
  });
  function xp(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ll.hasOwnProperty(n) && ll[n] ? ("" + r).trim() : r + "px";
  }
  function wp(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, f = xp(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
      }
  }
  var Rp = d({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ds(n, r) {
    if (r) {
      if (Rp[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(p(137, n, ""));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (!(typeof r.dangerouslySetInnerHTML == "object" && "__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62, ""));
    }
  }
  function rf(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _p = lo.html;
  function Ka(n, r) {
    n = n.nodeType === 9 || n.nodeType === 11 ? n : n.ownerDocument;
    var o = ln(n);
    r = ye[r];
    for (var u = 0; u < r.length; u++)
      S(r[u], n, o);
  }
  function vo() {
  }
  function ps(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function af(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function of(n, r) {
    var o = af(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = af(o);
    }
  }
  function lf(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? lf(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function uf() {
    for (var n = window, r = ps(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = ps(n.document);
    }
    return r;
  }
  function vs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  var hs = "$", sf = "/$", ms = "$?", Xl = "$!", ys = null, cf = null;
  function kp(n, r) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!r.autoFocus;
    }
    return !1;
  }
  function Kl(n, r) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gs = typeof setTimeout == "function" ? setTimeout : void 0, Op = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function ul(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
    }
    return n;
  }
  function ff(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === hs || o === Xl || o === ms) {
          if (r === 0)
            return n;
          r--;
        } else
          o === sf && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var df = Math.random().toString(36).slice(2), Da = "__reactInternalInstance$" + df, sl = "__reactEventHandlers$" + df, cl = "__reactContainere$" + df;
  function fl(n) {
    var r = n[Da];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[cl] || o[Da]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = ff(n); n !== null; ) {
            if (o = n[Da])
              return o;
            n = ff(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Zl(n) {
    return n = n[Da] || n[cl], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Gr(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Jl(n) {
    return n[sl] || null;
  }
  function Aa(n) {
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dp(n, r) {
    var o = n.stateNode;
    if (!o)
      return null;
    var u = se(o);
    if (!u)
      return null;
    o = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(p(
        231,
        r,
        typeof o
      ));
    return o;
  }
  function Ap(n, r, o) {
    (r = Dp(n, o.dispatchConfig.phasedRegistrationNames[r])) && (o._dispatchListeners = mn(o._dispatchListeners, r), o._dispatchInstances = mn(o._dispatchInstances, n));
  }
  function pm(n) {
    if (n && n.dispatchConfig.phasedRegistrationNames) {
      for (var r = n._targetInst, o = []; r; )
        o.push(r), r = Aa(r);
      for (r = o.length; 0 < r--; )
        Ap(o[r], "captured", n);
      for (r = 0; r < o.length; r++)
        Ap(o[r], "bubbled", n);
    }
  }
  function bs(n, r, o) {
    n && o && o.dispatchConfig.registrationName && (r = Dp(n, o.dispatchConfig.registrationName)) && (o._dispatchListeners = mn(o._dispatchListeners, r), o._dispatchInstances = mn(o._dispatchInstances, n));
  }
  function pf(n) {
    n && n.dispatchConfig.registrationName && bs(n._targetInst, null, n);
  }
  function ho(n) {
    xn(n, pm);
  }
  var Za = null, Es = null, Ss = null;
  function eu() {
    if (Ss)
      return Ss;
    var n, r = Es, o = r.length, u, f = "value" in Za ? Za.value : Za.textContent, g = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++)
      ;
    var b = o - n;
    for (u = 1; u <= b && r[o - u] === f[g - u]; u++)
      ;
    return Ss = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function tu() {
    return !0;
  }
  function dl() {
    return !1;
  }
  function Cr(n, r, o, u) {
    this.dispatchConfig = n, this._targetInst = r, this.nativeEvent = o, n = this.constructor.Interface;
    for (var f in n)
      n.hasOwnProperty(f) && ((r = n[f]) ? this[f] = r(o) : f === "target" ? this.target = u : this[f] = o[f]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? tu : dl, this.isPropagationStopped = dl, this;
  }
  d(Cr.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = tu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = tu);
  }, persist: function() {
    this.isPersistent = tu;
  }, isPersistent: dl, destructor: function() {
    var n = this.constructor.Interface, r;
    for (r in n)
      this[r] = null;
    this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = dl, this._dispatchInstances = this._dispatchListeners = null;
  } }), Cr.Interface = { type: null, target: null, currentTarget: function() {
    return null;
  }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null }, Cr.extend = function(n) {
    function r() {
    }
    function o() {
      return u.apply(this, arguments);
    }
    var u = this;
    r.prototype = u.prototype;
    var f = new r();
    return d(f, o.prototype), o.prototype = f, o.prototype.constructor = o, o.Interface = d({}, u.Interface, n), o.extend = u.extend, Np(o), o;
  }, Np(Cr);
  function vf(n, r, o, u) {
    if (this.eventPool.length) {
      var f = this.eventPool.pop();
      return this.call(f, n, r, o, u), f;
    }
    return new this(n, r, o, u);
  }
  function hf(n) {
    if (!(n instanceof this))
      throw Error(p(279));
    n.destructor(), 10 > this.eventPool.length && this.eventPool.push(n);
  }
  function Np(n) {
    n.eventPool = [], n.getPooled = vf, n.release = hf;
  }
  var Cs = Cr.extend({ data: null }), Pp = Cr.extend({ data: null }), oa = [9, 13, 27, 32], la = Ke && "CompositionEvent" in window, mr = null;
  Ke && "documentMode" in document && (mr = document.documentMode);
  var Ci = Ke && "TextEvent" in window && !mr, Ts = Ke && (!la || mr && 8 < mr && 11 >= mr), nu = String.fromCharCode(32), Ti = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
    bubbled: "onCompositionStart",
    captured: "onCompositionStartCapture"
  }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, vm = !1;
  function ru(n, r) {
    switch (n) {
      case "keyup":
        return oa.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1;
    }
  }
  function mo(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var xi = !1;
  function Mp(n, r) {
    switch (n) {
      case "compositionend":
        return mo(r);
      case "keypress":
        return r.which !== 32 ? null : (vm = !0, nu);
      case "textInput":
        return n = r.data, n === nu && vm ? null : n;
      default:
        return null;
    }
  }
  function xs(n, r) {
    if (xi)
      return n === "compositionend" || !la && ru(n, r) ? (n = eu(), Ss = Es = Za = null, xi = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Ts && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var mf = { eventTypes: Ti, extractEvents: function(n, r, o, u) {
    var f;
    if (la)
      e: {
        switch (n) {
          case "compositionstart":
            var g = Ti.compositionStart;
            break e;
          case "compositionend":
            g = Ti.compositionEnd;
            break e;
          case "compositionupdate":
            g = Ti.compositionUpdate;
            break e;
        }
        g = void 0;
      }
    else
      xi ? ru(n, o) && (g = Ti.compositionEnd) : n === "keydown" && o.keyCode === 229 && (g = Ti.compositionStart);
    return g ? (Ts && o.locale !== "ko" && (xi || g !== Ti.compositionStart ? g === Ti.compositionEnd && xi && (f = eu()) : (Za = u, Es = "value" in Za ? Za.value : Za.textContent, xi = !0)), g = Cs.getPooled(
      g,
      r,
      o,
      u
    ), f ? g.data = f : (f = mo(o), f !== null && (g.data = f)), ho(g), f = g) : f = null, (n = Ci ? Mp(n, o) : xs(n, o)) ? (r = Pp.getPooled(Ti.beforeInput, r, o, u), r.data = n, ho(r)) : r = null, f === null ? r : r === null ? f : [f, r];
  } }, Fp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Fp[n.type] : r === "textarea";
  }
  var gf = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
  function er(n, r, o) {
    return n = Cr.getPooled(gf.change, n, r, o), n.type = "change", Qe(o), ho(n), n;
  }
  var yo = null, go = null;
  function ws(n) {
    Qa(n);
  }
  function wi(n) {
    var r = Gr(n);
    if (Zn(r))
      return n;
  }
  function au(n, r) {
    if (n === "change")
      return r;
  }
  var pl = !1;
  Ke && (pl = us("input") && (!document.documentMode || 9 < document.documentMode));
  function Ja() {
    yo && (yo.detachEvent("onpropertychange", iu), go = yo = null);
  }
  function iu(n) {
    if (n.propertyName === "value" && wi(go))
      if (n = er(go, n, Yl(n)), Be)
        Qa(n);
      else {
        Be = !0;
        try {
          Ze(ws, n);
        } finally {
          Be = !1, be();
        }
      }
  }
  function bf(n, r, o) {
    n === "focus" ? (Ja(), yo = r, go = o, yo.attachEvent("onpropertychange", iu)) : n === "blur" && Ja();
  }
  function ou(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return wi(go);
  }
  function Ef(n, r) {
    if (n === "click")
      return wi(r);
  }
  function Sf(n, r) {
    if (n === "input" || n === "change")
      return wi(r);
  }
  var Cf = { eventTypes: gf, _isInputEventSupported: pl, extractEvents: function(n, r, o, u) {
    var f = r ? Gr(r) : window, g = f.nodeName && f.nodeName.toLowerCase();
    if (g === "select" || g === "input" && f.type === "file")
      var b = au;
    else if (yf(f))
      if (pl)
        b = Sf;
      else {
        b = ou;
        var _ = bf;
      }
    else
      (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = Ef);
    if (b && (b = b(n, r)))
      return er(b, o, u);
    _ && _(n, f, r), n === "blur" && (n = f._wrapperState) && n.controlled && f.type === "number" && Nr(f, "number", f.value);
  } }, bo = Cr.extend({ view: null, detail: null }), zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lu(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = zp[n]) ? !!r[n] : !1;
  }
  function Eo() {
    return lu;
  }
  var Tf = 0, uu = 0, xf = !1, Rs = !1, So = bo.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Eo, button: null, buttons: null, relatedTarget: function(n) {
    return n.relatedTarget || (n.fromElement === n.srcElement ? n.toElement : n.fromElement);
  }, movementX: function(n) {
    if ("movementX" in n)
      return n.movementX;
    var r = Tf;
    return Tf = n.screenX, xf ? n.type === "mousemove" ? n.screenX - r : 0 : (xf = !0, 0);
  }, movementY: function(n) {
    if ("movementY" in n)
      return n.movementY;
    var r = uu;
    return uu = n.screenY, Rs ? n.type === "mousemove" ? n.screenY - r : 0 : (Rs = !0, 0);
  } }), _s = So.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Co = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  } }, wf = { eventTypes: Co, extractEvents: function(n, r, o, u, f) {
    var g = n === "mouseover" || n === "pointerover", b = n === "mouseout" || n === "pointerout";
    if (g && !(f & 32) && (o.relatedTarget || o.fromElement) || !b && !g)
      return null;
    if (g = u.window === u ? u : (g = u.ownerDocument) ? g.defaultView || g.parentWindow : window, b) {
      if (b = r, r = (r = o.relatedTarget || o.toElement) ? fl(r) : null, r !== null) {
        var _ = Tn(r);
        (r !== _ || r.tag !== 5 && r.tag !== 6) && (r = null);
      }
    } else
      b = null;
    if (b === r)
      return null;
    if (n === "mouseout" || n === "mouseover")
      var Q = So, Y = Co.mouseLeave, Fe = Co.mouseEnter, je = "mouse";
    else
      (n === "pointerout" || n === "pointerover") && (Q = _s, Y = Co.pointerLeave, Fe = Co.pointerEnter, je = "pointer");
    if (n = b == null ? g : Gr(b), g = r == null ? g : Gr(r), Y = Q.getPooled(Y, b, o, u), Y.type = je + "leave", Y.target = n, Y.relatedTarget = g, o = Q.getPooled(Fe, r, o, u), o.type = je + "enter", o.target = g, o.relatedTarget = n, u = b, je = r, u && je)
      e: {
        for (Q = u, Fe = je, b = 0, n = Q; n; n = Aa(n))
          b++;
        for (n = 0, r = Fe; r; r = Aa(r))
          n++;
        for (; 0 < b - n; )
          Q = Aa(Q), b--;
        for (; 0 < n - b; )
          Fe = Aa(Fe), n--;
        for (; b--; ) {
          if (Q === Fe || Q === Fe.alternate)
            break e;
          Q = Aa(Q), Fe = Aa(Fe);
        }
        Q = null;
      }
    else
      Q = null;
    for (Fe = Q, Q = []; u && u !== Fe && (b = u.alternate, !(b !== null && b === Fe)); )
      Q.push(u), u = Aa(u);
    for (u = []; je && je !== Fe && (b = je.alternate, !(b !== null && b === Fe)); )
      u.push(je), je = Aa(je);
    for (je = 0; je < Q.length; je++)
      bs(Q[je], "bubbled", Y);
    for (je = u.length; 0 < je--; )
      bs(u[je], "captured", o);
    return f & 64 ? [Y, o] : [Y];
  } };
  function Rf(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Mr = typeof Object.is == "function" ? Object.is : Rf, Qr = Object.prototype.hasOwnProperty;
  function ei(n, r) {
    if (Mr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++)
      if (!Qr.call(r, o[u]) || !Mr(n[o[u]], r[o[u]]))
        return !1;
    return !0;
  }
  var su = Ke && "documentMode" in document && 11 >= document.documentMode, Na = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, tr = null, qr = null, yr = null, Ri = !1;
  function ks(n, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    return Ri || tr == null || tr !== ps(o) ? null : (o = tr, "selectionStart" in o && vs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), yr && ei(yr, o) ? null : (yr = o, n = Cr.getPooled(Na.select, qr, n, r), n.type = "select", n.target = tr, ho(n), n));
  }
  var _f = { eventTypes: Na, extractEvents: function(n, r, o, u, f, g) {
    if (f = g || (u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument), !(g = !f)) {
      e: {
        f = ln(f), g = ye.onSelect;
        for (var b = 0; b < g.length; b++)
          if (!f.has(g[b])) {
            f = !1;
            break e;
          }
        f = !0;
      }
      g = !f;
    }
    if (g)
      return null;
    switch (f = r ? Gr(r) : window, n) {
      case "focus":
        (yf(f) || f.contentEditable === "true") && (tr = f, qr = r, yr = null);
        break;
      case "blur":
        yr = qr = tr = null;
        break;
      case "mousedown":
        Ri = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        return Ri = !1, ks(o, u);
      case "selectionchange":
        if (su)
          break;
      case "keydown":
      case "keyup":
        return ks(o, u);
    }
    return null;
  } }, kf = Cr.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), Os = Cr.extend({ clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ti = bo.extend({ relatedTarget: null });
  function cu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  var _i = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ni = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, fu = bo.extend({ key: function(n) {
    if (n.key) {
      var r = _i[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = cu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? ni[n.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Eo, charCode: function(n) {
    return n.type === "keypress" ? cu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? cu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), du = So.extend({ dataTransfer: null }), Of = bo.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Eo }), Df = Cr.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), Af = So.extend({ deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null }), Nf = { eventTypes: tf, extractEvents: function(n, r, o, u) {
    var f = Cp.get(n);
    if (!f)
      return null;
    switch (n) {
      case "keypress":
        if (cu(o) === 0)
          return null;
      case "keydown":
      case "keyup":
        n = fu;
        break;
      case "blur":
      case "focus":
        n = ti;
        break;
      case "click":
        if (o.button === 2)
          return null;
      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        n = So;
        break;
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        n = du;
        break;
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        n = Of;
        break;
      case so:
      case oe:
      case Ee:
        n = kf;
        break;
      case lt:
        n = Df;
        break;
      case "scroll":
        n = bo;
        break;
      case "wheel":
        n = Af;
        break;
      case "copy":
      case "cut":
      case "paste":
        n = Os;
        break;
      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        n = _s;
        break;
      default:
        n = Cr;
    }
    return r = n.getPooled(f, r, o, u), ho(r), r;
  } };
  if ($)
    throw Error(p(101));
  $ = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), K();
  var Pf = Zl;
  se = Jl, he = Pf, ue = Gr, Xe({ SimpleEventPlugin: Nf, EnterLeaveEventPlugin: wf, ChangeEventPlugin: Cf, SelectEventPlugin: _f, BeforeInputEventPlugin: mf });
  var Ds = [], Fr = -1;
  function Pt(n) {
    0 > Fr || (n.current = Ds[Fr], Ds[Fr] = null, Fr--);
  }
  function yn(n, r) {
    Fr++, Ds[Fr] = n.current, n.current = r;
  }
  var Pa = {}, Bn = { current: Pa }, Ln = { current: !1 }, Ma = Pa;
  function ki(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Pa;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, g;
    for (g in o)
      f[g] = r[g];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function ir(n) {
    return n = n.childContextTypes, n != null;
  }
  function Oi() {
    Pt(Ln), Pt(Bn);
  }
  function As(n, r, o) {
    if (Bn.current !== Pa)
      throw Error(p(168));
    yn(Bn, r), yn(Ln, o);
  }
  function To(n, r, o) {
    var u = n.stateNode;
    if (n = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var f in u)
      if (!(f in n))
        throw Error(p(108, bt(r) || "Unknown", f));
    return d({}, o, {}, u);
  }
  function vl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, Ma = Bn.current, yn(Bn, n), yn(Ln, Ln.current), !0;
  }
  function pu(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(p(169));
    o ? (n = To(n, r, Ma), u.__reactInternalMemoizedMergedChildContext = n, Pt(Ln), Pt(Bn), yn(Bn, n)) : Pt(Ln), yn(Ln, o);
  }
  var Mf = h.unstable_runWithPriority, hl = h.unstable_scheduleCallback, Ns = h.unstable_cancelCallback, Ps = h.unstable_requestPaint, Ms = h.unstable_now, Ff = h.unstable_getCurrentPriorityLevel, vu = h.unstable_ImmediatePriority, Fs = h.unstable_UserBlockingPriority, zs = h.unstable_NormalPriority, zf = h.unstable_LowPriority, ml = h.unstable_IdlePriority, Lf = {}, hm = h.unstable_shouldYield, Lp = Ps !== void 0 ? Ps : function() {
  }, ua = null, ri = null, Uf = !1, Up = Ms(), $t = 1e4 > Up ? Ms : function() {
    return Ms() - Up;
  };
  function sa() {
    switch (Ff()) {
      case vu:
        return 99;
      case Fs:
        return 98;
      case zs:
        return 97;
      case zf:
        return 96;
      case ml:
        return 95;
      default:
        throw Error(p(332));
    }
  }
  function An(n) {
    switch (n) {
      case 99:
        return vu;
      case 98:
        return Fs;
      case 97:
        return zs;
      case 96:
        return zf;
      case 95:
        return ml;
      default:
        throw Error(p(332));
    }
  }
  function Mt(n, r) {
    return n = An(n), Mf(n, r);
  }
  function Ip(n, r, o) {
    return n = An(n), hl(n, r, o);
  }
  function xo(n) {
    return ua === null ? (ua = [n], ri = hl(vu, If)) : ua.push(n), Lf;
  }
  function zr() {
    if (ri !== null) {
      var n = ri;
      ri = null, Ns(n);
    }
    If();
  }
  function If() {
    if (!Uf && ua !== null) {
      Uf = !0;
      var n = 0;
      try {
        var r = ua;
        Mt(99, function() {
          for (; n < r.length; n++) {
            var o = r[n];
            do
              o = o(!0);
            while (o !== null);
          }
        }), ua = null;
      } catch (o) {
        throw ua !== null && (ua = ua.slice(n + 1)), hl(vu, zr), o;
      } finally {
        Uf = !1;
      }
    }
  }
  function Jt(n, r, o) {
    return o /= 10, 1073741821 - (((1073741821 - n + r / 10) / o | 0) + 1) * o;
  }
  function Tr(n, r) {
    if (n && n.defaultProps) {
      r = d({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
    }
    return r;
  }
  var Di = { current: null }, Ai = null, Xr = null, Ls = null;
  function jf() {
    Ls = Xr = Ai = null;
  }
  function Hf(n) {
    var r = Di.current;
    Pt(Di), n.type._context._currentValue = r;
  }
  function yl(n, r) {
    for (; n !== null; ) {
      var o = n.alternate;
      if (n.childExpirationTime < r)
        n.childExpirationTime = r, o !== null && o.childExpirationTime < r && (o.childExpirationTime = r);
      else if (o !== null && o.childExpirationTime < r)
        o.childExpirationTime = r;
      else
        break;
      n = n.return;
    }
  }
  function xr(n, r) {
    Ai = n, Ls = Xr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.expirationTime >= r && (fa = !0), n.firstContext = null);
  }
  function Kr(n, r) {
    if (Ls !== n && r !== !1 && r !== 0)
      if ((typeof r != "number" || r === 1073741823) && (Ls = n, r = 1073741823), r = { context: n, observedBits: r, next: null }, Xr === null) {
        if (Ai === null)
          throw Error(p(308));
        Xr = r, Ai.dependencies = { expirationTime: 0, firstContext: r, responders: null };
      } else
        Xr = Xr.next = r;
    return n._currentValue;
  }
  var wr = !1;
  function Us(n) {
    n.updateQueue = { baseState: n.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
  }
  function Is(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, baseQueue: n.baseQueue, shared: n.shared, effects: n.effects });
  }
  function Ni(n, r) {
    return n = { expirationTime: n, suspenseConfig: r, tag: 0, payload: null, callback: null, next: null }, n.next = n;
  }
  function Pi(n, r) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var o = n.pending;
      o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
    }
  }
  function $f(n, r) {
    var o = n.alternate;
    o !== null && Is(o, n), n = n.updateQueue, o = n.baseQueue, o === null ? (n.baseQueue = r.next = r, r.next = r) : (r.next = o.next, o.next = r);
  }
  function gl(n, r, o, u) {
    var f = n.updateQueue;
    wr = !1;
    var g = f.baseQueue, b = f.shared.pending;
    if (b !== null) {
      if (g !== null) {
        var _ = g.next;
        g.next = b.next, b.next = _;
      }
      g = b, f.shared.pending = null, _ = n.alternate, _ !== null && (_ = _.updateQueue, _ !== null && (_.baseQueue = b));
    }
    if (g !== null) {
      _ = g.next;
      var Q = f.baseState, Y = 0, Fe = null, je = null, _t = null;
      if (_ !== null) {
        var zt = _;
        do {
          if (b = zt.expirationTime, b < u) {
            var Hr = { expirationTime: zt.expirationTime, suspenseConfig: zt.suspenseConfig, tag: zt.tag, payload: zt.payload, callback: zt.callback, next: null };
            _t === null ? (je = _t = Hr, Fe = Q) : _t = _t.next = Hr, b > Y && (Y = b);
          } else {
            _t !== null && (_t = _t.next = { expirationTime: 1073741823, suspenseConfig: zt.suspenseConfig, tag: zt.tag, payload: zt.payload, callback: zt.callback, next: null }), cd(b, zt.suspenseConfig);
            e: {
              var rr = n, I = zt;
              switch (b = r, Hr = o, I.tag) {
                case 1:
                  if (rr = I.payload, typeof rr == "function") {
                    Q = rr.call(Hr, Q, b);
                    break e;
                  }
                  Q = rr;
                  break e;
                case 3:
                  rr.effectTag = rr.effectTag & -4097 | 64;
                case 0:
                  if (rr = I.payload, b = typeof rr == "function" ? rr.call(Hr, Q, b) : rr, b == null)
                    break e;
                  Q = d({}, Q, b);
                  break e;
                case 2:
                  wr = !0;
              }
            }
            zt.callback !== null && (n.effectTag |= 32, b = f.effects, b === null ? f.effects = [zt] : b.push(zt));
          }
          if (zt = zt.next, zt === null || zt === _) {
            if (b = f.shared.pending, b === null)
              break;
            zt = g.next = b.next, b.next = _, f.baseQueue = g = b, f.shared.pending = null;
          }
        } while (1);
      }
      _t === null ? Fe = Q : _t.next = je, f.baseState = Fe, f.baseQueue = _t, Ou(Y), n.expirationTime = Y, n.memoizedState = Q;
    }
  }
  function Vf(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], f = u.callback;
        if (f !== null) {
          if (u.callback = null, u = f, f = o, typeof u != "function")
            throw Error(p(191, u));
          u.call(f);
        }
      }
  }
  var hu = Ue.ReactCurrentBatchConfig, wo = new s.Component().refs;
  function bl(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : d({}, r, o), n.memoizedState = o, n.expirationTime === 0 && (n.updateQueue.baseState = o);
  }
  var Mi = { isMounted: function(n) {
    return (n = n._reactInternalFiber) ? Tn(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternalFiber;
    var u = Qn(), f = hu.suspense;
    u = Hi(u, n, f), f = Ni(u, f), f.payload = r, o != null && (f.callback = o), Pi(n, f), $i(n, u);
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternalFiber;
    var u = Qn(), f = hu.suspense;
    u = Hi(u, n, f), f = Ni(u, f), f.tag = 1, f.payload = r, o != null && (f.callback = o), Pi(n, f), $i(n, u);
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternalFiber;
    var o = Qn(), u = hu.suspense;
    o = Hi(o, n, u), u = Ni(o, u), u.tag = 2, r != null && (u.callback = r), Pi(n, u), $i(n, o);
  } };
  function jp(n, r, o, u, f, g, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, g, b) : r.prototype && r.prototype.isPureReactComponent ? !ei(o, u) || !ei(f, g) : !0;
  }
  function Hp(n, r, o) {
    var u = !1, f = Pa, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Kr(g) : (f = ir(r) ? Ma : Bn.current, u = r.contextTypes, g = (u = u != null) ? ki(n, f) : Pa), r = new r(o, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Mi, n.stateNode = r, r._reactInternalFiber = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function js(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Mi.enqueueReplaceState(r, r.state, null);
  }
  function mu(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = wo, Us(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? f.context = Kr(g) : (g = ir(r) ? Ma : Bn.current, f.context = ki(n, g)), gl(n, o, f, u), f.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (bl(n, r, g, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Mi.enqueueReplaceState(f, f.state, null), gl(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.effectTag |= 4);
  }
  var yu = Array.isArray;
  function gu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(p(147, n));
        var f = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === f ? r.ref : (r = function(g) {
          var b = u.refs;
          b === wo && (b = u.refs = {}), g === null ? delete b[f] : b[f] = g;
        }, r._stringRef = f, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function Ro(n, r) {
    if (n.type !== "textarea")
      throw Error(p(31, Object.prototype.toString.call(r) === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : r, ""));
  }
  function $p(n) {
    function r(I, F) {
      if (n) {
        var Z = I.lastEffect;
        Z !== null ? (Z.nextEffect = F, I.lastEffect = F) : I.firstEffect = I.lastEffect = F, F.nextEffect = null, F.effectTag = 8;
      }
    }
    function o(I, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r(I, F), F = F.sibling;
      return null;
    }
    function u(I, F) {
      for (I = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? I.set(F.key, F) : I.set(F.index, F), F = F.sibling;
      return I;
    }
    function f(I, F) {
      return I = va(I, F), I.index = 0, I.sibling = null, I;
    }
    function g(I, F, Z) {
      return I.index = Z, n ? (Z = I.alternate, Z !== null ? (Z = Z.index, Z < F ? (I.effectTag = 2, F) : Z) : (I.effectTag = 2, F)) : F;
    }
    function b(I) {
      return n && I.alternate === null && (I.effectTag = 2), I;
    }
    function _(I, F, Z, ve) {
      return F === null || F.tag !== 6 ? (F = pd(Z, I.mode, ve), F.return = I, F) : (F = f(F, Z), F.return = I, F);
    }
    function Q(I, F, Z, ve) {
      return F !== null && F.elementType === Z.type ? (ve = f(F, Z.props), ve.ref = gu(I, F, Z), ve.return = I, ve) : (ve = pc(Z.type, Z.key, Z.props, null, I.mode, ve), ve.ref = gu(I, F, Z), ve.return = I, ve);
    }
    function Y(I, F, Z, ve) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== Z.containerInfo || F.stateNode.implementation !== Z.implementation ? (F = vd(Z, I.mode, ve), F.return = I, F) : (F = f(F, Z.children || []), F.return = I, F);
    }
    function Fe(I, F, Z, ve, ke) {
      return F === null || F.tag !== 7 ? (F = oi(Z, I.mode, ve, ke), F.return = I, F) : (F = f(F, Z), F.return = I, F);
    }
    function je(I, F, Z) {
      if (typeof F == "string" || typeof F == "number")
        return F = pd("" + F, I.mode, Z), F.return = I, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Hn:
            return Z = pc(F.type, F.key, F.props, null, I.mode, Z), Z.ref = gu(I, null, F), Z.return = I, Z;
          case At:
            return F = vd(F, I.mode, Z), F.return = I, F;
        }
        if (yu(F) || ot(F))
          return F = oi(F, I.mode, Z, null), F.return = I, F;
        Ro(I, F);
      }
      return null;
    }
    function _t(I, F, Z, ve) {
      var ke = F !== null ? F.key : null;
      if (typeof Z == "string" || typeof Z == "number")
        return ke !== null ? null : _(I, F, "" + Z, ve);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Hn:
            return Z.key === ke ? Z.type === Rn ? Fe(I, F, Z.props.children, ve, ke) : Q(I, F, Z, ve) : null;
          case At:
            return Z.key === ke ? Y(I, F, Z, ve) : null;
        }
        if (yu(Z) || ot(Z))
          return ke !== null ? null : Fe(I, F, Z, ve, null);
        Ro(I, Z);
      }
      return null;
    }
    function zt(I, F, Z, ve, ke) {
      if (typeof ve == "string" || typeof ve == "number")
        return I = I.get(Z) || null, _(F, I, "" + ve, ke);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case Hn:
            return I = I.get(ve.key === null ? Z : ve.key) || null, ve.type === Rn ? Fe(F, I, ve.props.children, ke, ve.key) : Q(F, I, ve, ke);
          case At:
            return I = I.get(ve.key === null ? Z : ve.key) || null, Y(F, I, ve, ke);
        }
        if (yu(ve) || ot(ve))
          return I = I.get(Z) || null, Fe(F, I, ve, ke, null);
        Ro(F, ve);
      }
      return null;
    }
    function Hr(I, F, Z, ve) {
      for (var ke = null, He = null, ut = F, Dt = F = 0, En = null; ut !== null && Dt < Z.length; Dt++) {
        ut.index > Dt ? (En = ut, ut = null) : En = ut.sibling;
        var Et = _t(I, ut, Z[Dt], ve);
        if (Et === null) {
          ut === null && (ut = En);
          break;
        }
        n && ut && Et.alternate === null && r(I, ut), F = g(Et, F, Dt), He === null ? ke = Et : He.sibling = Et, He = Et, ut = En;
      }
      if (Dt === Z.length)
        return o(I, ut), ke;
      if (ut === null) {
        for (; Dt < Z.length; Dt++)
          ut = je(I, Z[Dt], ve), ut !== null && (F = g(ut, F, Dt), He === null ? ke = ut : He.sibling = ut, He = ut);
        return ke;
      }
      for (ut = u(I, ut); Dt < Z.length; Dt++)
        En = zt(ut, I, Dt, Z[Dt], ve), En !== null && (n && En.alternate !== null && ut.delete(En.key === null ? Dt : En.key), F = g(En, F, Dt), He === null ? ke = En : He.sibling = En, He = En);
      return n && ut.forEach(function(Yi) {
        return r(I, Yi);
      }), ke;
    }
    function rr(I, F, Z, ve) {
      var ke = ot(Z);
      if (typeof ke != "function")
        throw Error(p(150));
      if (Z = ke.call(Z), Z == null)
        throw Error(p(151));
      for (var He = ke = null, ut = F, Dt = F = 0, En = null, Et = Z.next(); ut !== null && !Et.done; Dt++, Et = Z.next()) {
        ut.index > Dt ? (En = ut, ut = null) : En = ut.sibling;
        var Yi = _t(I, ut, Et.value, ve);
        if (Yi === null) {
          ut === null && (ut = En);
          break;
        }
        n && ut && Yi.alternate === null && r(I, ut), F = g(Yi, F, Dt), He === null ? ke = Yi : He.sibling = Yi, He = Yi, ut = En;
      }
      if (Et.done)
        return o(I, ut), ke;
      if (ut === null) {
        for (; !Et.done; Dt++, Et = Z.next())
          Et = je(I, Et.value, ve), Et !== null && (F = g(Et, F, Dt), He === null ? ke = Et : He.sibling = Et, He = Et);
        return ke;
      }
      for (ut = u(I, ut); !Et.done; Dt++, Et = Z.next())
        Et = zt(ut, I, Dt, Et.value, ve), Et !== null && (n && Et.alternate !== null && ut.delete(Et.key === null ? Dt : Et.key), F = g(Et, F, Dt), He === null ? ke = Et : He.sibling = Et, He = Et);
      return n && ut.forEach(function(Nm) {
        return r(I, Nm);
      }), ke;
    }
    return function(I, F, Z, ve) {
      var ke = typeof Z == "object" && Z !== null && Z.type === Rn && Z.key === null;
      ke && (Z = Z.props.children);
      var He = typeof Z == "object" && Z !== null;
      if (He)
        switch (Z.$$typeof) {
          case Hn:
            e: {
              for (He = Z.key, ke = F; ke !== null; ) {
                if (ke.key === He) {
                  switch (ke.tag) {
                    case 7:
                      if (Z.type === Rn) {
                        o(I, ke.sibling), F = f(ke, Z.props.children), F.return = I, I = F;
                        break e;
                      }
                      break;
                    default:
                      if (ke.elementType === Z.type) {
                        o(
                          I,
                          ke.sibling
                        ), F = f(ke, Z.props), F.ref = gu(I, ke, Z), F.return = I, I = F;
                        break e;
                      }
                  }
                  o(I, ke);
                  break;
                } else
                  r(I, ke);
                ke = ke.sibling;
              }
              Z.type === Rn ? (F = oi(Z.props.children, I.mode, ve, Z.key), F.return = I, I = F) : (ve = pc(Z.type, Z.key, Z.props, null, I.mode, ve), ve.ref = gu(I, F, Z), ve.return = I, I = ve);
            }
            return b(I);
          case At:
            e: {
              for (ke = Z.key; F !== null; ) {
                if (F.key === ke)
                  if (F.tag === 4 && F.stateNode.containerInfo === Z.containerInfo && F.stateNode.implementation === Z.implementation) {
                    o(I, F.sibling), F = f(F, Z.children || []), F.return = I, I = F;
                    break e;
                  } else {
                    o(I, F);
                    break;
                  }
                else
                  r(I, F);
                F = F.sibling;
              }
              F = vd(Z, I.mode, ve), F.return = I, I = F;
            }
            return b(I);
        }
      if (typeof Z == "string" || typeof Z == "number")
        return Z = "" + Z, F !== null && F.tag === 6 ? (o(I, F.sibling), F = f(F, Z), F.return = I, I = F) : (o(I, F), F = pd(Z, I.mode, ve), F.return = I, I = F), b(I);
      if (yu(Z))
        return Hr(I, F, Z, ve);
      if (ot(Z))
        return rr(I, F, Z, ve);
      if (He && Ro(I, Z), typeof Z > "u" && !ke)
        switch (I.tag) {
          case 1:
          case 0:
            throw I = I.type, Error(p(152, I.displayName || I.name || "Component"));
        }
      return o(I, F);
    };
  }
  var El = $p(!0), Wf = $p(!1), bu = {}, Fa = { current: bu }, Eu = { current: bu }, Sl = { current: bu };
  function _o(n) {
    if (n === bu)
      throw Error(p(174));
    return n;
  }
  function Hs(n, r) {
    switch (yn(Sl, r), yn(Eu, n), yn(Fa, bu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Wn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Wn(r, n);
    }
    Pt(Fa), yn(Fa, r);
  }
  function Cl() {
    Pt(Fa), Pt(Eu), Pt(Sl);
  }
  function Bf(n) {
    _o(Sl.current);
    var r = _o(Fa.current), o = Wn(r, n.type);
    r !== o && (yn(Eu, n), yn(Fa, o));
  }
  function Yf(n) {
    Eu.current === n && (Pt(Fa), Pt(Eu));
  }
  var dn = { current: 0 };
  function $s(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === ms || o.data === Xl))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.effectTag & 64)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  function Vs(n, r) {
    return { responder: n, props: r };
  }
  var Ws = Ue.ReactCurrentDispatcher, Rr = Ue.ReactCurrentBatchConfig, or = 0, rn = null, gn = null, bn = null, Fi = !1;
  function nr() {
    throw Error(p(321));
  }
  function ko(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Mr(n[o], r[o]))
        return !1;
    return !0;
  }
  function Gf(n, r, o, u, f, g) {
    if (or = g, rn = r, r.memoizedState = null, r.updateQueue = null, r.expirationTime = 0, Ws.current = n === null || n.memoizedState === null ? mm : ym, n = o(u, f), r.expirationTime === or) {
      g = 0;
      do {
        if (r.expirationTime = 0, !(25 > g))
          throw Error(p(301));
        g += 1, bn = gn = null, r.updateQueue = null, Ws.current = gm, n = o(u, f);
      } while (r.expirationTime === or);
    }
    if (Ws.current = Zs, r = gn !== null && gn.next !== null, or = 0, bn = gn = rn = null, Fi = !1, r)
      throw Error(p(300));
    return n;
  }
  function Oo() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return bn === null ? rn.memoizedState = bn = n : bn = bn.next = n, bn;
  }
  function Tl() {
    if (gn === null) {
      var n = rn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = gn.next;
    var r = bn === null ? rn.memoizedState : bn.next;
    if (r !== null)
      bn = r, gn = n;
    else {
      if (n === null)
        throw Error(p(310));
      gn = n, n = { memoizedState: gn.memoizedState, baseState: gn.baseState, baseQueue: gn.baseQueue, queue: gn.queue, next: null }, bn === null ? rn.memoizedState = bn = n : bn = bn.next = n;
    }
    return bn;
  }
  function zi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Su(n) {
    var r = Tl(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = gn, f = u.baseQueue, g = o.pending;
    if (g !== null) {
      if (f !== null) {
        var b = f.next;
        f.next = g.next, g.next = b;
      }
      u.baseQueue = f = g, o.pending = null;
    }
    if (f !== null) {
      f = f.next, u = u.baseState;
      var _ = b = g = null, Q = f;
      do {
        var Y = Q.expirationTime;
        if (Y < or) {
          var Fe = { expirationTime: Q.expirationTime, suspenseConfig: Q.suspenseConfig, action: Q.action, eagerReducer: Q.eagerReducer, eagerState: Q.eagerState, next: null };
          _ === null ? (b = _ = Fe, g = u) : _ = _.next = Fe, Y > rn.expirationTime && (rn.expirationTime = Y, Ou(Y));
        } else
          _ !== null && (_ = _.next = { expirationTime: 1073741823, suspenseConfig: Q.suspenseConfig, action: Q.action, eagerReducer: Q.eagerReducer, eagerState: Q.eagerState, next: null }), cd(Y, Q.suspenseConfig), u = Q.eagerReducer === n ? Q.eagerState : n(u, Q.action);
        Q = Q.next;
      } while (Q !== null && Q !== f);
      _ === null ? g = u : _.next = b, Mr(u, r.memoizedState) || (fa = !0), r.memoizedState = u, r.baseState = g, r.baseQueue = _, o.lastRenderedState = u;
    }
    return [r.memoizedState, o.dispatch];
  }
  function Bs(n) {
    var r = Tl(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, g = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var b = f = f.next;
      do
        g = n(g, b.action), b = b.next;
      while (b !== f);
      Mr(g, r.memoizedState) || (fa = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), o.lastRenderedState = g;
    }
    return [g, u];
  }
  function Ys(n) {
    var r = Oo();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = r.queue = { pending: null, dispatch: null, lastRenderedReducer: zi, lastRenderedState: n }, n = n.dispatch = Ks.bind(null, rn, n), [r.memoizedState, n];
  }
  function Gs(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = rn.updateQueue, r === null ? (r = { lastEffect: null }, rn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Qf() {
    return Tl().memoizedState;
  }
  function Do(n, r, o, u) {
    var f = Oo();
    rn.effectTag |= n, f.memoizedState = Gs(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function qf(n, r, o, u) {
    var f = Tl();
    u = u === void 0 ? null : u;
    var g = void 0;
    if (gn !== null) {
      var b = gn.memoizedState;
      if (g = b.destroy, u !== null && ko(u, b.deps)) {
        Gs(r, o, g, u);
        return;
      }
    }
    rn.effectTag |= n, f.memoizedState = Gs(1 | r, o, g, u);
  }
  function Vp(n, r) {
    return Do(516, 4, n, r);
  }
  function Ao(n, r) {
    return qf(516, 4, n, r);
  }
  function Xf(n, r) {
    return qf(4, 2, n, r);
  }
  function Wp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function xl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, qf(4, 2, Wp.bind(null, r, n), o);
  }
  function Qs() {
  }
  function Bp(n, r) {
    return Oo().memoizedState = [n, r === void 0 ? null : r], n;
  }
  function qs(n, r) {
    var o = Tl();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ko(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Kf(n, r) {
    var o = Tl();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ko(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Xs(n, r, o) {
    var u = sa();
    Mt(98 > u ? 98 : u, function() {
      n(!0);
    }), Mt(97 < u ? 97 : u, function() {
      var f = Rr.suspense;
      Rr.suspense = r === void 0 ? null : r;
      try {
        n(!1), o();
      } finally {
        Rr.suspense = f;
      }
    });
  }
  function Ks(n, r, o) {
    var u = Qn(), f = hu.suspense;
    u = Hi(u, n, f), f = { expirationTime: u, suspenseConfig: f, action: o, eagerReducer: null, eagerState: null, next: null };
    var g = r.pending;
    if (g === null ? f.next = f : (f.next = g.next, g.next = f), r.pending = f, g = n.alternate, n === rn || g !== null && g === rn)
      Fi = !0, f.expirationTime = or, rn.expirationTime = or;
    else {
      if (n.expirationTime === 0 && (g === null || g.expirationTime === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var b = r.lastRenderedState, _ = g(b, o);
          if (f.eagerReducer = g, f.eagerState = _, Mr(_, b))
            return;
        } catch {
        } finally {
        }
      $i(
        n,
        u
      );
    }
  }
  var Zs = { readContext: Kr, useCallback: nr, useContext: nr, useEffect: nr, useImperativeHandle: nr, useLayoutEffect: nr, useMemo: nr, useReducer: nr, useRef: nr, useState: nr, useDebugValue: nr, useResponder: nr, useDeferredValue: nr, useTransition: nr }, mm = { readContext: Kr, useCallback: Bp, useContext: Kr, useEffect: Vp, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Do(4, 2, Wp.bind(null, r, n), o);
  }, useLayoutEffect: function(n, r) {
    return Do(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Oo();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [
      n,
      r
    ], n;
  }, useReducer: function(n, r, o) {
    var u = Oo();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = u.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, n = n.dispatch = Ks.bind(null, rn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Oo();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ys, useDebugValue: Qs, useResponder: Vs, useDeferredValue: function(n, r) {
    var o = Ys(n), u = o[0], f = o[1];
    return Vp(function() {
      var g = Rr.suspense;
      Rr.suspense = r === void 0 ? null : r;
      try {
        f(n);
      } finally {
        Rr.suspense = g;
      }
    }, [n, r]), u;
  }, useTransition: function(n) {
    var r = Ys(!1), o = r[0];
    return r = r[1], [Bp(Xs.bind(null, r, n), [r, n]), o];
  } }, ym = { readContext: Kr, useCallback: qs, useContext: Kr, useEffect: Ao, useImperativeHandle: xl, useLayoutEffect: Xf, useMemo: Kf, useReducer: Su, useRef: Qf, useState: function() {
    return Su(zi);
  }, useDebugValue: Qs, useResponder: Vs, useDeferredValue: function(n, r) {
    var o = Su(zi), u = o[0], f = o[1];
    return Ao(function() {
      var g = Rr.suspense;
      Rr.suspense = r === void 0 ? null : r;
      try {
        f(n);
      } finally {
        Rr.suspense = g;
      }
    }, [n, r]), u;
  }, useTransition: function(n) {
    var r = Su(zi), o = r[0];
    return r = r[1], [qs(Xs.bind(null, r, n), [r, n]), o];
  } }, gm = { readContext: Kr, useCallback: qs, useContext: Kr, useEffect: Ao, useImperativeHandle: xl, useLayoutEffect: Xf, useMemo: Kf, useReducer: Bs, useRef: Qf, useState: function() {
    return Bs(zi);
  }, useDebugValue: Qs, useResponder: Vs, useDeferredValue: function(n, r) {
    var o = Bs(zi), u = o[0], f = o[1];
    return Ao(function() {
      var g = Rr.suspense;
      Rr.suspense = r === void 0 ? null : r;
      try {
        f(n);
      } finally {
        Rr.suspense = g;
      }
    }, [n, r]), u;
  }, useTransition: function(n) {
    var r = Bs(zi), o = r[0];
    return r = r[1], [qs(Xs.bind(
      null,
      r,
      n
    ), [r, n]), o];
  } }, ca = null, Li = null, No = !1;
  function Yp(n, r) {
    var o = Ua(5, null, null, 0);
    o.elementType = "DELETED", o.type = "DELETED", o.stateNode = r, o.return = n, o.effectTag = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = o, n.lastEffect = o) : n.firstEffect = n.lastEffect = o;
  }
  function Gp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function Cu(n) {
    if (No) {
      var r = Li;
      if (r) {
        var o = r;
        if (!Gp(n, r)) {
          if (r = ul(o.nextSibling), !r || !Gp(n, r)) {
            n.effectTag = n.effectTag & -1025 | 2, No = !1, ca = n;
            return;
          }
          Yp(ca, o);
        }
        ca = n, Li = ul(r.firstChild);
      } else
        n.effectTag = n.effectTag & -1025 | 2, No = !1, ca = n;
    }
  }
  function Zf(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ca = n;
  }
  function Js(n) {
    if (n !== ca)
      return !1;
    if (!No)
      return Zf(n), No = !0, !1;
    var r = n.type;
    if (n.tag !== 5 || r !== "head" && r !== "body" && !Kl(r, n.memoizedProps))
      for (r = Li; r; )
        Yp(n, r), r = ul(r.nextSibling);
    if (Zf(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === sf) {
              if (r === 0) {
                Li = ul(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== hs && o !== Xl && o !== ms || r++;
          }
          n = n.nextSibling;
        }
        Li = null;
      }
    } else
      Li = ca ? ul(n.stateNode.nextSibling) : null;
    return !0;
  }
  function un() {
    Li = ca = null, No = !1;
  }
  var ec = Ue.ReactCurrentOwner, fa = !1;
  function Lr(n, r, o, u) {
    r.child = n === null ? Wf(r, null, o, u) : El(r, n.child, o, u);
  }
  function Qp(n, r, o, u, f) {
    o = o.render;
    var g = r.ref;
    return xr(r, f), u = Gf(n, r, o, u, g, f), n !== null && !fa ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= f && (n.expirationTime = 0), ai(n, r, f)) : (r.effectTag |= 1, Lr(n, r, u, f), r.child);
  }
  function Tu(n, r, o, u, f, g) {
    if (n === null) {
      var b = o.type;
      return typeof b == "function" && !dd(b) && b.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = b, tc(n, r, b, u, f, g)) : (n = pc(o.type, null, u, null, r.mode, g), n.ref = r.ref, n.return = r, r.child = n);
    }
    return b = n.child, f < g && (f = b.memoizedProps, o = o.compare, o = o !== null ? o : ei, o(f, u) && n.ref === r.ref) ? ai(n, r, g) : (r.effectTag |= 1, n = va(b, u), n.ref = r.ref, n.return = r, r.child = n);
  }
  function tc(n, r, o, u, f, g) {
    return n !== null && ei(n.memoizedProps, u) && n.ref === r.ref && (fa = !1, f < g) ? (r.expirationTime = n.expirationTime, ai(n, r, g)) : Po(n, r, o, u, g);
  }
  function qp(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.effectTag |= 128);
  }
  function Po(n, r, o, u, f) {
    var g = ir(o) ? Ma : Bn.current;
    return g = ki(r, g), xr(r, f), o = Gf(n, r, o, u, g, f), n !== null && !fa ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= f && (n.expirationTime = 0), ai(n, r, f)) : (r.effectTag |= 1, Lr(n, r, o, f), r.child);
  }
  function Xp(n, r, o, u, f) {
    if (ir(o)) {
      var g = !0;
      vl(r);
    } else
      g = !1;
    if (xr(r, f), r.stateNode === null)
      n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), Hp(r, o, u), mu(r, o, u, f), u = !0;
    else if (n === null) {
      var b = r.stateNode, _ = r.memoizedProps;
      b.props = _;
      var Q = b.context, Y = o.contextType;
      typeof Y == "object" && Y !== null ? Y = Kr(Y) : (Y = ir(o) ? Ma : Bn.current, Y = ki(r, Y));
      var Fe = o.getDerivedStateFromProps, je = typeof Fe == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      je || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== u || Q !== Y) && js(r, b, u, Y), wr = !1;
      var _t = r.memoizedState;
      b.state = _t, gl(r, u, b, f), Q = r.memoizedState, _ !== u || _t !== Q || Ln.current || wr ? (typeof Fe == "function" && (bl(r, o, Fe, u), Q = r.memoizedState), (_ = wr || jp(r, o, _, u, _t, Q, Y)) ? (je || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.effectTag |= 4)) : (typeof b.componentDidMount == "function" && (r.effectTag |= 4), r.memoizedProps = u, r.memoizedState = Q), b.props = u, b.state = Q, b.context = Y, u = _) : (typeof b.componentDidMount == "function" && (r.effectTag |= 4), u = !1);
    } else
      b = r.stateNode, Is(n, r), _ = r.memoizedProps, b.props = r.type === r.elementType ? _ : Tr(r.type, _), Q = b.context, Y = o.contextType, typeof Y == "object" && Y !== null ? Y = Kr(Y) : (Y = ir(o) ? Ma : Bn.current, Y = ki(r, Y)), Fe = o.getDerivedStateFromProps, (je = typeof Fe == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== u || Q !== Y) && js(r, b, u, Y), wr = !1, Q = r.memoizedState, b.state = Q, gl(r, u, b, f), _t = r.memoizedState, _ !== u || Q !== _t || Ln.current || wr ? (typeof Fe == "function" && (bl(r, o, Fe, u), _t = r.memoizedState), (Fe = wr || jp(r, o, _, u, Q, _t, Y)) ? (je || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(
        u,
        _t,
        Y
      ), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(u, _t, Y)), typeof b.componentDidUpdate == "function" && (r.effectTag |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.effectTag |= 256)) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && Q === n.memoizedState || (r.effectTag |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && Q === n.memoizedState || (r.effectTag |= 256), r.memoizedProps = u, r.memoizedState = _t), b.props = u, b.state = _t, b.context = Y, u = Fe) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && Q === n.memoizedState || (r.effectTag |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && Q === n.memoizedState || (r.effectTag |= 256), u = !1);
    return Jf(n, r, o, u, g, f);
  }
  function Jf(n, r, o, u, f, g) {
    qp(n, r);
    var b = (r.effectTag & 64) !== 0;
    if (!u && !b)
      return f && pu(r, o, !1), ai(n, r, g);
    u = r.stateNode, ec.current = r;
    var _ = b && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.effectTag |= 1, n !== null && b ? (r.child = El(r, n.child, null, g), r.child = El(r, null, _, g)) : Lr(n, r, _, g), r.memoizedState = u.state, f && pu(r, o, !0), r.child;
  }
  function nc(n) {
    var r = n.stateNode;
    r.pendingContext ? As(n, r.pendingContext, r.pendingContext !== r.context) : r.context && As(n, r.context, !1), Hs(n, r.containerInfo);
  }
  var ed = { dehydrated: null, retryTime: 0 };
  function Kp(n, r, o) {
    var u = r.mode, f = r.pendingProps, g = dn.current, b = !1, _;
    if ((_ = (r.effectTag & 64) !== 0) || (_ = (g & 2) !== 0 && (n === null || n.memoizedState !== null)), _ ? (b = !0, r.effectTag &= -65) : n !== null && n.memoizedState === null || f.fallback === void 0 || f.unstable_avoidThisFallback === !0 || (g |= 1), yn(dn, g & 1), n === null) {
      if (f.fallback !== void 0 && Cu(r), b) {
        if (b = f.fallback, f = oi(null, u, 0, null), f.return = r, !(r.mode & 2))
          for (n = r.memoizedState !== null ? r.child.child : r.child, f.child = n; n !== null; )
            n.return = f, n = n.sibling;
        return o = oi(b, u, o, null), o.return = r, f.sibling = o, r.memoizedState = ed, r.child = f, o;
      }
      return u = f.children, r.memoizedState = null, r.child = Wf(r, null, u, o);
    }
    if (n.memoizedState !== null) {
      if (n = n.child, u = n.sibling, b) {
        if (f = f.fallback, o = va(n, n.pendingProps), o.return = r, !(r.mode & 2) && (b = r.memoizedState !== null ? r.child.child : r.child, b !== n.child))
          for (o.child = b; b !== null; )
            b.return = o, b = b.sibling;
        return u = va(u, f), u.return = r, o.sibling = u, o.childExpirationTime = 0, r.memoizedState = ed, r.child = o, u;
      }
      return o = El(r, n.child, f.children, o), r.memoizedState = null, r.child = o;
    }
    if (n = n.child, b) {
      if (b = f.fallback, f = oi(null, u, 0, null), f.return = r, f.child = n, n !== null && (n.return = f), !(r.mode & 2))
        for (n = r.memoizedState !== null ? r.child.child : r.child, f.child = n; n !== null; )
          n.return = f, n = n.sibling;
      return o = oi(b, u, o, null), o.return = r, f.sibling = o, o.effectTag |= 2, f.childExpirationTime = 0, r.memoizedState = ed, r.child = f, o;
    }
    return r.memoizedState = null, r.child = El(r, n, f.children, o);
  }
  function Zp(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var o = n.alternate;
    o !== null && o.expirationTime < r && (o.expirationTime = r), yl(n.return, r);
  }
  function rc(n, r, o, u, f, g) {
    var b = n.memoizedState;
    b === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailExpiration: 0, tailMode: f, lastEffect: g } : (b.isBackwards = r, b.rendering = null, b.renderingStartTime = 0, b.last = u, b.tail = o, b.tailExpiration = 0, b.tailMode = f, b.lastEffect = g);
  }
  function Jp(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, g = u.tail;
    if (Lr(n, r, u.children, o), u = dn.current, u & 2)
      u = u & 1 | 2, r.effectTag |= 64;
    else {
      if (n !== null && n.effectTag & 64)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Zp(n, o);
            else if (n.tag === 19)
              Zp(n, o);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (yn(dn, u), !(r.mode & 2))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = r.child, f = null; o !== null; )
            n = o.alternate, n !== null && $s(n) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), rc(r, !1, f, o, g, r.lastEffect);
          break;
        case "backwards":
          for (o = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && $s(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = o, o = f, f = n;
          }
          rc(r, !0, o, null, g, r.lastEffect);
          break;
        case "together":
          rc(r, !1, null, null, void 0, r.lastEffect);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ai(n, r, o) {
    n !== null && (r.dependencies = n.dependencies);
    var u = r.expirationTime;
    if (u !== 0 && Ou(u), r.childExpirationTime < o)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = va(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = va(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  var ev, ac, Mo, ic;
  ev = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, ac = function() {
  }, Mo = function(n, r, o, u, f) {
    var g = n.memoizedProps;
    if (g !== u) {
      var b = r.stateNode;
      switch (_o(Fa.current), n = null, o) {
        case "input":
          g = on(b, g), u = on(b, u), n = [];
          break;
        case "option":
          g = Pr(b, g), u = Pr(b, u), n = [];
          break;
        case "select":
          g = d({}, g, { value: void 0 }), u = d({}, u, { value: void 0 }), n = [];
          break;
        case "textarea":
          g = Ba(b, g), u = Ba(b, u), n = [];
          break;
        default:
          typeof g.onClick != "function" && typeof u.onClick == "function" && (b.onclick = vo);
      }
      ds(o, u);
      var _, Q;
      o = null;
      for (_ in g)
        if (!u.hasOwnProperty(_) && g.hasOwnProperty(_) && g[_] != null)
          if (_ === "style")
            for (Q in b = g[_], b)
              b.hasOwnProperty(Q) && (o || (o = {}), o[Q] = "");
          else
            _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (ge.hasOwnProperty(_) ? n || (n = []) : (n = n || []).push(_, null));
      for (_ in u) {
        var Y = u[_];
        if (b = g != null ? g[_] : void 0, u.hasOwnProperty(_) && Y !== b && (Y != null || b != null))
          if (_ === "style")
            if (b) {
              for (Q in b)
                !b.hasOwnProperty(Q) || Y && Y.hasOwnProperty(Q) || (o || (o = {}), o[Q] = "");
              for (Q in Y)
                Y.hasOwnProperty(Q) && b[Q] !== Y[Q] && (o || (o = {}), o[Q] = Y[Q]);
            } else
              o || (n || (n = []), n.push(_, o)), o = Y;
          else
            _ === "dangerouslySetInnerHTML" ? (Y = Y ? Y.__html : void 0, b = b ? b.__html : void 0, Y != null && b !== Y && (n = n || []).push(_, Y)) : _ === "children" ? b === Y || typeof Y != "string" && typeof Y != "number" || (n = n || []).push(_, "" + Y) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (ge.hasOwnProperty(_) ? (Y != null && Ka(f, _), n || b === Y || (n = [])) : (n = n || []).push(_, Y));
      }
      o && (n = n || []).push("style", o), f = n, (r.updateQueue = f) && (r.effectTag |= 4);
    }
  }, ic = function(n, r, o, u) {
    o !== u && (r.effectTag |= 4);
  };
  function xu(n, r) {
    switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; )
          r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; )
          o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function tv(n, r, o) {
    var u = r.pendingProps;
    switch (r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return ir(r.type) && Oi(), null;
      case 3:
        return Cl(), Pt(Ln), Pt(Bn), o = r.stateNode, o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), n !== null && n.child !== null || !Js(r) || (r.effectTag |= 4), ac(r), null;
      case 5:
        Yf(r), o = _o(Sl.current);
        var f = r.type;
        if (n !== null && r.stateNode != null)
          Mo(n, r, f, u, o), n.ref !== r.ref && (r.effectTag |= 128);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(p(166));
            return null;
          }
          if (n = _o(Fa.current), Js(r)) {
            u = r.stateNode, f = r.type;
            var g = r.memoizedProps;
            switch (u[Da] = r, u[sl] = g, f) {
              case "iframe":
              case "object":
              case "embed":
                Tt("load", u);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Rt.length; n++)
                  Tt(Rt[n], u);
                break;
              case "source":
                Tt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Tt("error", u), Tt("load", u);
                break;
              case "form":
                Tt("reset", u), Tt("submit", u);
                break;
              case "details":
                Tt("toggle", u);
                break;
              case "input":
                sr(u, g), Tt("invalid", u), Ka(o, "onChange");
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!g.multiple }, Tt("invalid", u), Ka(o, "onChange");
                break;
              case "textarea":
                gi(u, g), Tt("invalid", u), Ka(o, "onChange");
            }
            ds(f, g), n = null;
            for (var b in g)
              if (g.hasOwnProperty(b)) {
                var _ = g[b];
                b === "children" ? typeof _ == "string" ? u.textContent !== _ && (n = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (n = ["children", "" + _]) : ge.hasOwnProperty(b) && _ != null && Ka(o, b);
              }
            switch (f) {
              case "input":
                Fn(u), hn(u, g, !0);
                break;
              case "textarea":
                Fn(u), nl(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (u.onclick = vo);
            }
            o = n, r.updateQueue = o, o !== null && (r.effectTag |= 4);
          } else {
            switch (b = o.nodeType === 9 ? o : o.ownerDocument, n === _p && (n = bi(f)), n === _p ? f === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = b.createElement(f, { is: u.is }) : (n = b.createElement(f), f === "select" && (b = n, u.multiple ? b.multiple = !0 : u.size && (b.size = u.size))) : n = b.createElementNS(n, f), n[Da] = r, n[sl] = u, ev(n, r, !1, !1), r.stateNode = n, b = rf(f, u), f) {
              case "iframe":
              case "object":
              case "embed":
                Tt(
                  "load",
                  n
                ), _ = u;
                break;
              case "video":
              case "audio":
                for (_ = 0; _ < Rt.length; _++)
                  Tt(Rt[_], n);
                _ = u;
                break;
              case "source":
                Tt("error", n), _ = u;
                break;
              case "img":
              case "image":
              case "link":
                Tt("error", n), Tt("load", n), _ = u;
                break;
              case "form":
                Tt("reset", n), Tt("submit", n), _ = u;
                break;
              case "details":
                Tt("toggle", n), _ = u;
                break;
              case "input":
                sr(n, u), _ = on(n, u), Tt("invalid", n), Ka(o, "onChange");
                break;
              case "option":
                _ = Pr(n, u);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!u.multiple }, _ = d({}, u, { value: void 0 }), Tt("invalid", n), Ka(o, "onChange");
                break;
              case "textarea":
                gi(
                  n,
                  u
                ), _ = Ba(n, u), Tt("invalid", n), Ka(o, "onChange");
                break;
              default:
                _ = u;
            }
            ds(f, _);
            var Q = _;
            for (g in Q)
              if (Q.hasOwnProperty(g)) {
                var Y = Q[g];
                g === "style" ? wp(n, Y) : g === "dangerouslySetInnerHTML" ? (Y = Y ? Y.__html : void 0, Y != null && Ya(n, Y)) : g === "children" ? typeof Y == "string" ? (f !== "textarea" || Y !== "") && fr(n, Y) : typeof Y == "number" && fr(n, "" + Y) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (ge.hasOwnProperty(g) ? Y != null && Ka(o, g) : Y != null && nt(n, g, Y, b));
              }
            switch (f) {
              case "input":
                Fn(n), hn(n, u, !1);
                break;
              case "textarea":
                Fn(n), nl(n);
                break;
              case "option":
                u.value != null && n.setAttribute("value", "" + ct(u.value));
                break;
              case "select":
                n.multiple = !!u.multiple, o = u.value, o != null ? cr(n, !!u.multiple, o, !1) : u.defaultValue != null && cr(n, !!u.multiple, u.defaultValue, !0);
                break;
              default:
                typeof _.onClick == "function" && (n.onclick = vo);
            }
            kp(f, u) && (r.effectTag |= 4);
          }
          r.ref !== null && (r.effectTag |= 128);
        }
        return null;
      case 6:
        if (n && r.stateNode != null)
          ic(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(p(166));
          o = _o(Sl.current), _o(Fa.current), Js(r) ? (o = r.stateNode, u = r.memoizedProps, o[Da] = r, o.nodeValue !== u && (r.effectTag |= 4)) : (o = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), o[Da] = r, r.stateNode = o);
        }
        return null;
      case 13:
        return Pt(dn), u = r.memoizedState, r.effectTag & 64 ? (r.expirationTime = o, r) : (o = u !== null, u = !1, n === null ? r.memoizedProps.fallback !== void 0 && Js(r) : (f = n.memoizedState, u = f !== null, o || f === null || (f = n.child.sibling, f !== null && (g = r.firstEffect, g !== null ? (r.firstEffect = f, f.nextEffect = g) : (r.firstEffect = r.lastEffect = f, f.nextEffect = null), f.effectTag = 8))), o && !u && r.mode & 2 && (n === null && r.memoizedProps.unstable_avoidThisFallback !== !0 || dn.current & 1 ? wn === Ui && (wn = _u) : ((wn === Ui || wn === _u) && (wn = uc), da !== 0 && Ur !== null && (Ho(Ur, en), hd(Ur, da)))), (o || u) && (r.effectTag |= 4), null);
      case 4:
        return Cl(), ac(r), null;
      case 10:
        return Hf(r), null;
      case 17:
        return ir(r.type) && Oi(), null;
      case 19:
        if (Pt(dn), u = r.memoizedState, u === null)
          return null;
        if (f = (r.effectTag & 64) !== 0, g = u.rendering, g === null) {
          if (f)
            xu(u, !1);
          else if (wn !== Ui || n !== null && n.effectTag & 64)
            for (g = r.child; g !== null; ) {
              if (n = $s(g), n !== null) {
                for (r.effectTag |= 64, xu(u, !1), f = n.updateQueue, f !== null && (r.updateQueue = f, r.effectTag |= 4), u.lastEffect === null && (r.firstEffect = null), r.lastEffect = u.lastEffect, u = r.child; u !== null; )
                  f = u, g = o, f.effectTag &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, n = f.alternate, n === null ? (f.childExpirationTime = 0, f.expirationTime = g, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null) : (f.childExpirationTime = n.childExpirationTime, f.expirationTime = n.expirationTime, f.child = n.child, f.memoizedProps = n.memoizedProps, f.memoizedState = n.memoizedState, f.updateQueue = n.updateQueue, g = n.dependencies, f.dependencies = g === null ? null : { expirationTime: g.expirationTime, firstContext: g.firstContext, responders: g.responders }), u = u.sibling;
                return yn(dn, dn.current & 1 | 2), r.child;
              }
              g = g.sibling;
            }
        } else {
          if (!f)
            if (n = $s(g), n !== null) {
              if (r.effectTag |= 64, f = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.effectTag |= 4), xu(u, !0), u.tail === null && u.tailMode === "hidden" && !g.alternate)
                return r = r.lastEffect = u.lastEffect, r !== null && (r.nextEffect = null), null;
            } else
              2 * $t() - u.renderingStartTime > u.tailExpiration && 1 < o && (r.effectTag |= 64, f = !0, xu(u, !1), r.expirationTime = r.childExpirationTime = o - 1);
          u.isBackwards ? (g.sibling = r.child, r.child = g) : (o = u.last, o !== null ? o.sibling = g : r.child = g, u.last = g);
        }
        return u.tail !== null ? (u.tailExpiration === 0 && (u.tailExpiration = $t() + 500), o = u.tail, u.rendering = o, u.tail = o.sibling, u.lastEffect = r.lastEffect, u.renderingStartTime = $t(), o.sibling = null, r = dn.current, yn(dn, f ? r & 1 | 2 : r & 1), o) : null;
    }
    throw Error(p(
      156,
      r.tag
    ));
  }
  function bm(n) {
    switch (n.tag) {
      case 1:
        ir(n.type) && Oi();
        var r = n.effectTag;
        return r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 3:
        if (Cl(), Pt(Ln), Pt(Bn), r = n.effectTag, r & 64)
          throw Error(p(285));
        return n.effectTag = r & -4097 | 64, n;
      case 5:
        return Yf(n), null;
      case 13:
        return Pt(dn), r = n.effectTag, r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 19:
        return Pt(dn), null;
      case 4:
        return Cl(), null;
      case 10:
        return Hf(n), null;
      default:
        return null;
    }
  }
  function td(n, r) {
    return { value: n, source: r, stack: Ct(r) };
  }
  var Em = typeof WeakSet == "function" ? WeakSet : Set;
  function nd(n, r) {
    var o = r.source, u = r.stack;
    u === null && o !== null && (u = Ct(o)), o !== null && bt(o.type), r = r.value, n !== null && n.tag === 1 && bt(n.type);
    try {
      console.error(r);
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Sm(n, r) {
    try {
      r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
    } catch (o) {
      Wi(n, o);
    }
  }
  function nv(n) {
    var r = n.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Wi(n, o);
        }
      else
        r.current = null;
  }
  function Cm(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (r.effectTag & 256 && n !== null) {
          var o = n.memoizedProps, u = n.memoizedState;
          n = r.stateNode, r = n.getSnapshotBeforeUpdate(r.elementType === r.type ? o : Tr(r.type, o), u), n.__reactInternalSnapshotBeforeUpdate = r;
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(p(163));
  }
  function rv(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function rd(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Tm(n, r, o) {
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        rd(3, o);
        return;
      case 1:
        if (n = o.stateNode, o.effectTag & 4)
          if (r === null)
            n.componentDidMount();
          else {
            var u = o.elementType === o.type ? r.memoizedProps : Tr(o.type, r.memoizedProps);
            n.componentDidUpdate(u, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
          }
        r = o.updateQueue, r !== null && Vf(o, r, n);
        return;
      case 3:
        if (r = o.updateQueue, r !== null) {
          if (n = null, o.child !== null)
            switch (o.child.tag) {
              case 5:
                n = o.child.stateNode;
                break;
              case 1:
                n = o.child.stateNode;
            }
          Vf(o, r, n);
        }
        return;
      case 5:
        n = o.stateNode, r === null && o.effectTag & 4 && kp(o.type, o.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        o.memoizedState === null && (o = o.alternate, o !== null && (o = o.memoizedState, o !== null && (o = o.dehydrated, o !== null && Sp(o))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(p(163));
  }
  function ad(n, r, o) {
    switch (typeof Au == "function" && Au(r), r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var u = n.next;
          Mt(97 < o ? 97 : o, function() {
            var f = u;
            do {
              var g = f.destroy;
              if (g !== void 0) {
                var b = r;
                try {
                  g();
                } catch (_) {
                  Wi(b, _);
                }
              }
              f = f.next;
            } while (f !== u);
          });
        }
        break;
      case 1:
        nv(r), o = r.stateNode, typeof o.componentWillUnmount == "function" && Sm(r, o);
        break;
      case 5:
        nv(r);
        break;
      case 4:
        oc(n, r, o);
    }
  }
  function av(n) {
    var r = n.alternate;
    n.return = null, n.child = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.alternate = null, n.firstEffect = null, n.lastEffect = null, n.pendingProps = null, n.memoizedProps = null, n.stateNode = null, r !== null && av(r);
  }
  function iv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ov(n) {
    e: {
      for (var r = n.return; r !== null; ) {
        if (iv(r)) {
          var o = r;
          break e;
        }
        r = r.return;
      }
      throw Error(p(160));
    }
    switch (r = o.stateNode, o.tag) {
      case 5:
        var u = !1;
        break;
      case 3:
        r = r.containerInfo, u = !0;
        break;
      case 4:
        r = r.containerInfo, u = !0;
        break;
      default:
        throw Error(p(161));
    }
    o.effectTag & 16 && (fr(r, ""), o.effectTag &= -17);
    e:
      t:
        for (o = n; ; ) {
          for (; o.sibling === null; ) {
            if (o.return === null || iv(o.return)) {
              o = null;
              break e;
            }
            o = o.return;
          }
          for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
            if (o.effectTag & 2 || o.child === null || o.tag === 4)
              continue t;
            o.child.return = o, o = o.child;
          }
          if (!(o.effectTag & 2)) {
            o = o.stateNode;
            break e;
          }
        }
    u ? id(n, o, r) : wu(n, o, r);
  }
  function id(n, r, o) {
    var u = n.tag, f = u === 5 || u === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = vo));
    else if (u !== 4 && (n = n.child, n !== null))
      for (id(n, r, o), n = n.sibling; n !== null; )
        id(n, r, o), n = n.sibling;
  }
  function wu(n, r, o) {
    var u = n.tag, f = u === 5 || u === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (wu(n, r, o), n = n.sibling; n !== null; )
        wu(n, r, o), n = n.sibling;
  }
  function oc(n, r, o) {
    for (var u = r, f = !1, g, b; ; ) {
      if (!f) {
        f = u.return;
        e:
          for (; ; ) {
            if (f === null)
              throw Error(p(160));
            switch (g = f.stateNode, f.tag) {
              case 5:
                b = !1;
                break e;
              case 3:
                g = g.containerInfo, b = !0;
                break e;
              case 4:
                g = g.containerInfo, b = !0;
                break e;
            }
            f = f.return;
          }
        f = !0;
      }
      if (u.tag === 5 || u.tag === 6) {
        e:
          for (var _ = n, Q = u, Y = o, Fe = Q; ; )
            if (ad(_, Fe, Y), Fe.child !== null && Fe.tag !== 4)
              Fe.child.return = Fe, Fe = Fe.child;
            else {
              if (Fe === Q)
                break e;
              for (; Fe.sibling === null; ) {
                if (Fe.return === null || Fe.return === Q)
                  break e;
                Fe = Fe.return;
              }
              Fe.sibling.return = Fe.return, Fe = Fe.sibling;
            }
        b ? (_ = g, Q = u.stateNode, _.nodeType === 8 ? _.parentNode.removeChild(Q) : _.removeChild(Q)) : g.removeChild(u.stateNode);
      } else if (u.tag === 4) {
        if (u.child !== null) {
          g = u.stateNode.containerInfo, b = !0, u.child.return = u, u = u.child;
          continue;
        }
      } else if (ad(n, u, o), u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return, u.tag === 4 && (f = !1);
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }
  function ii(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        rv(3, r);
        return;
      case 1:
        return;
      case 5:
        var o = r.stateNode;
        if (o != null) {
          var u = r.memoizedProps, f = n !== null ? n.memoizedProps : u;
          n = r.type;
          var g = r.updateQueue;
          if (r.updateQueue = null, g !== null) {
            for (o[sl] = u, n === "input" && u.type === "radio" && u.name != null && yi(o, u), rf(n, f), r = rf(n, u), f = 0; f < g.length; f += 2) {
              var b = g[f], _ = g[f + 1];
              b === "style" ? wp(o, _) : b === "dangerouslySetInnerHTML" ? Ya(o, _) : b === "children" ? fr(o, _) : nt(o, b, _, r);
            }
            switch (n) {
              case "input":
                Ht(o, u);
                break;
              case "textarea":
                tl(o, u);
                break;
              case "select":
                r = o._wrapperState.wasMultiple, o._wrapperState.wasMultiple = !!u.multiple, n = u.value, n != null ? cr(o, !!u.multiple, n, !1) : r !== !!u.multiple && (u.defaultValue != null ? cr(o, !!u.multiple, u.defaultValue, !0) : cr(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (r.stateNode === null)
          throw Error(p(162));
        r.stateNode.nodeValue = r.memoizedProps;
        return;
      case 3:
        r = r.stateNode, r.hydrate && (r.hydrate = !1, Sp(r.containerInfo));
        return;
      case 12:
        return;
      case 13:
        if (o = r, r.memoizedState === null ? u = !1 : (u = !0, o = r.child, Ii = $t()), o !== null)
          e:
            for (n = o; ; ) {
              if (n.tag === 5)
                g = n.stateNode, u ? (g = g.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (g = n.stateNode, f = n.memoizedProps.style, f = f != null && f.hasOwnProperty("display") ? f.display : null, g.style.display = xp("display", f));
              else if (n.tag === 6)
                n.stateNode.nodeValue = u ? "" : n.memoizedProps;
              else if (n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null) {
                g = n.child.sibling, g.return = n, n = g;
                continue;
              } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === o)
                break;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === o)
                  break e;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
        Ru(r);
        return;
      case 19:
        Ru(r);
        return;
      case 17:
        return;
    }
    throw Error(p(163));
  }
  function Ru(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Em()), r.forEach(function(u) {
        var f = km.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  var lv = typeof WeakMap == "function" ? WeakMap : Map;
  function Fo(n, r, o) {
    o = Ni(o, null), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Uo || (Uo = !0, Rl = u), nd(n, r);
    }, o;
  }
  function uv(n, r, o) {
    o = Ni(o, null), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return nd(n, r), u(f);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
      typeof u != "function" && (Jr === null ? Jr = /* @__PURE__ */ new Set([this]) : Jr.add(this), nd(n, r));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), o;
  }
  var xm = Math.ceil, lc = Ue.ReactCurrentDispatcher, sv = Ue.ReactCurrentOwner, Yn = 0, od = 8, Zr = 16, za = 32, Ui = 0, Gn = 1, cv = 2, _u = 3, uc = 4, ld = 5, mt = Yn, Ur = null, gt = null, en = 0, wn = Ui, zo = null, Ir = 1073741823, wl = 1073741823, La = null, da = 0, Lo = !1, Ii = 0, sc = 500, We = null, Uo = !1, Rl = null, Jr = null, ku = !1, ji = null, _l = 90, pa = null, kl = 0, ud = null, cc = 0;
  function Qn() {
    return (mt & (Zr | za)) !== Yn ? 1073741821 - ($t() / 10 | 0) : cc !== 0 ? cc : cc = 1073741821 - ($t() / 10 | 0);
  }
  function Hi(n, r, o) {
    if (r = r.mode, !(r & 2))
      return 1073741823;
    var u = sa();
    if (!(r & 4))
      return u === 99 ? 1073741823 : 1073741822;
    if ((mt & Zr) !== Yn)
      return en;
    if (o !== null)
      n = Jt(n, o.timeoutMs | 0 || 5e3, 250);
    else
      switch (u) {
        case 99:
          n = 1073741823;
          break;
        case 98:
          n = Jt(n, 150, 100);
          break;
        case 97:
        case 96:
          n = Jt(n, 5e3, 250);
          break;
        case 95:
          n = 2;
          break;
        default:
          throw Error(p(326));
      }
    return Ur !== null && n === en && --n, n;
  }
  function $i(n, r) {
    if (50 < kl)
      throw kl = 0, ud = null, Error(p(185));
    if (n = Io(n, r), n !== null) {
      var o = sa();
      r === 1073741823 ? (mt & od) !== Yn && (mt & (Zr | za)) === Yn ? sd(n) : (jr(n), mt === Yn && zr()) : jr(n), (mt & 4) === Yn || o !== 98 && o !== 99 || (pa === null ? pa = /* @__PURE__ */ new Map([[n, r]]) : (o = pa.get(n), (o === void 0 || o > r) && pa.set(n, r)));
    }
  }
  function Io(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var o = n.alternate;
    o !== null && o.expirationTime < r && (o.expirationTime = r);
    var u = n.return, f = null;
    if (u === null && n.tag === 3)
      f = n.stateNode;
    else
      for (; u !== null; ) {
        if (o = u.alternate, u.childExpirationTime < r && (u.childExpirationTime = r), o !== null && o.childExpirationTime < r && (o.childExpirationTime = r), u.return === null && u.tag === 3) {
          f = u.stateNode;
          break;
        }
        u = u.return;
      }
    return f !== null && (Ur === f && (Ou(r), wn === uc && Ho(f, en)), hd(f, r)), f;
  }
  function fc(n) {
    var r = n.lastExpiredTime;
    if (r !== 0 || (r = n.firstPendingTime, !xv(n, r)))
      return r;
    var o = n.lastPingedTime;
    return n = n.nextKnownPendingLevel, n = o > n ? o : n, 2 >= n && r !== n ? 0 : n;
  }
  function jr(n) {
    if (n.lastExpiredTime !== 0)
      n.callbackExpirationTime = 1073741823, n.callbackPriority = 99, n.callbackNode = xo(sd.bind(null, n));
    else {
      var r = fc(n), o = n.callbackNode;
      if (r === 0)
        o !== null && (n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90);
      else {
        var u = Qn();
        if (r === 1073741823 ? u = 99 : r === 1 || r === 2 ? u = 95 : (u = 10 * (1073741821 - r) - 10 * (1073741821 - u), u = 0 >= u ? 99 : 250 >= u ? 98 : 5250 >= u ? 97 : 95), o !== null) {
          var f = n.callbackPriority;
          if (n.callbackExpirationTime === r && f >= u)
            return;
          o !== Lf && Ns(o);
        }
        n.callbackExpirationTime = r, n.callbackPriority = u, r = r === 1073741823 ? xo(sd.bind(null, n)) : Ip(u, fv.bind(null, n), { timeout: 10 * (1073741821 - r) - $t() }), n.callbackNode = r;
      }
    }
  }
  function fv(n, r) {
    if (cc = 0, r)
      return r = Qn(), Bi(n, r), jr(n), null;
    var o = fc(n);
    if (o !== 0) {
      if (r = n.callbackNode, (mt & (Zr | za)) !== Yn)
        throw Error(p(327));
      if (Ol(), n === Ur && o === en || jo(n, o), gt !== null) {
        var u = mt;
        mt |= Zr;
        var f = hv();
        do
          try {
            yv();
            break;
          } catch (_) {
            vv(n, _);
          }
        while (1);
        if (jf(), mt = u, lc.current = f, wn === Gn)
          throw r = zo, jo(n, o), Ho(n, o), jr(n), r;
        if (gt === null)
          switch (f = n.finishedWork = n.current.alternate, n.finishedExpirationTime = o, u = wn, Ur = null, u) {
            case Ui:
            case Gn:
              throw Error(p(345));
            case cv:
              Bi(n, 2 < o ? 2 : o);
              break;
            case _u:
              if (Ho(n, o), u = n.lastSuspendedTime, o === u && (n.nextKnownPendingLevel = Du(f)), Ir === 1073741823 && (f = Ii + sc - $t(), 10 < f)) {
                if (Lo) {
                  var g = n.lastPingedTime;
                  if (g === 0 || g >= o) {
                    n.lastPingedTime = o, jo(n, o);
                    break;
                  }
                }
                if (g = fc(n), g !== 0 && g !== o)
                  break;
                if (u !== 0 && u !== o) {
                  n.lastPingedTime = u;
                  break;
                }
                n.timeoutHandle = gs(Vi.bind(null, n), f);
                break;
              }
              Vi(n);
              break;
            case uc:
              if (Ho(n, o), u = n.lastSuspendedTime, o === u && (n.nextKnownPendingLevel = Du(f)), Lo && (f = n.lastPingedTime, f === 0 || f >= o)) {
                n.lastPingedTime = o, jo(n, o);
                break;
              }
              if (f = fc(n), f !== 0 && f !== o)
                break;
              if (u !== 0 && u !== o) {
                n.lastPingedTime = u;
                break;
              }
              if (wl !== 1073741823 ? u = 10 * (1073741821 - wl) - $t() : Ir === 1073741823 ? u = 0 : (u = 10 * (1073741821 - Ir) - 5e3, f = $t(), o = 10 * (1073741821 - o) - f, u = f - u, 0 > u && (u = 0), u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * xm(u / 1960)) - u, o < u && (u = o)), 10 < u) {
                n.timeoutHandle = gs(Vi.bind(null, n), u);
                break;
              }
              Vi(n);
              break;
            case ld:
              if (Ir !== 1073741823 && La !== null) {
                g = Ir;
                var b = La;
                if (u = b.busyMinDurationMs | 0, 0 >= u ? u = 0 : (f = b.busyDelayMs | 0, g = $t() - (10 * (1073741821 - g) - (b.timeoutMs | 0 || 5e3)), u = g <= f ? 0 : f + u - g), 10 < u) {
                  Ho(n, o), n.timeoutHandle = gs(Vi.bind(null, n), u);
                  break;
                }
              }
              Vi(n);
              break;
            default:
              throw Error(p(329));
          }
        if (jr(n), n.callbackNode === r)
          return fv.bind(null, n);
      }
    }
    return null;
  }
  function sd(n) {
    var r = n.lastExpiredTime;
    if (r = r !== 0 ? r : 1073741823, (mt & (Zr | za)) !== Yn)
      throw Error(p(327));
    if (Ol(), n === Ur && r === en || jo(n, r), gt !== null) {
      var o = mt;
      mt |= Zr;
      var u = hv();
      do
        try {
          mv();
          break;
        } catch (f) {
          vv(n, f);
        }
      while (1);
      if (jf(), mt = o, lc.current = u, wn === Gn)
        throw o = zo, jo(n, r), Ho(n, r), jr(n), o;
      if (gt !== null)
        throw Error(p(261));
      n.finishedWork = n.current.alternate, n.finishedExpirationTime = r, Ur = null, Vi(n), jr(n);
    }
    return null;
  }
  function wm() {
    if (pa !== null) {
      var n = pa;
      pa = null, n.forEach(function(r, o) {
        Bi(o, r), jr(o);
      }), zr();
    }
  }
  function dv(n, r) {
    var o = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = o, mt === Yn && zr();
    }
  }
  function pv(n, r) {
    var o = mt;
    mt &= -2, mt |= od;
    try {
      return n(r);
    } finally {
      mt = o, mt === Yn && zr();
    }
  }
  function jo(n, r) {
    n.finishedWork = null, n.finishedExpirationTime = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Op(o)), gt !== null)
      for (o = gt.return; o !== null; ) {
        var u = o;
        switch (u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Oi();
            break;
          case 3:
            Cl(), Pt(Ln), Pt(Bn);
            break;
          case 5:
            Yf(u);
            break;
          case 4:
            Cl();
            break;
          case 13:
            Pt(dn);
            break;
          case 19:
            Pt(dn);
            break;
          case 10:
            Hf(u);
        }
        o = o.return;
      }
    Ur = n, gt = va(n.current, null), en = r, wn = Ui, zo = null, wl = Ir = 1073741823, La = null, da = 0, Lo = !1;
  }
  function vv(n, r) {
    do {
      try {
        if (jf(), Ws.current = Zs, Fi)
          for (var o = rn.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), o = o.next;
          }
        if (or = 0, bn = gn = rn = null, Fi = !1, gt === null || gt.return === null)
          return wn = Gn, zo = r, gt = null;
        e: {
          var f = n, g = gt.return, b = gt, _ = r;
          if (r = en, b.effectTag |= 2048, b.firstEffect = b.lastEffect = null, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var Q = _;
            if (!(b.mode & 2)) {
              var Y = b.alternate;
              Y ? (b.updateQueue = Y.updateQueue, b.memoizedState = Y.memoizedState, b.expirationTime = Y.expirationTime) : (b.updateQueue = null, b.memoizedState = null);
            }
            var Fe = (dn.current & 1) !== 0, je = g;
            do {
              var _t;
              if (_t = je.tag === 13) {
                var zt = je.memoizedState;
                if (zt !== null)
                  _t = zt.dehydrated !== null;
                else {
                  var Hr = je.memoizedProps;
                  _t = Hr.fallback === void 0 ? !1 : Hr.unstable_avoidThisFallback !== !0 ? !0 : !Fe;
                }
              }
              if (_t) {
                var rr = je.updateQueue;
                if (rr === null) {
                  var I = /* @__PURE__ */ new Set();
                  I.add(Q), je.updateQueue = I;
                } else
                  rr.add(Q);
                if (!(je.mode & 2)) {
                  if (je.effectTag |= 64, b.effectTag &= -2981, b.tag === 1)
                    if (b.alternate === null)
                      b.tag = 17;
                    else {
                      var F = Ni(1073741823, null);
                      F.tag = 2, Pi(b, F);
                    }
                  b.expirationTime = 1073741823;
                  break e;
                }
                _ = void 0, b = r;
                var Z = f.pingCache;
                if (Z === null ? (Z = f.pingCache = new lv(), _ = /* @__PURE__ */ new Set(), Z.set(Q, _)) : (_ = Z.get(Q), _ === void 0 && (_ = /* @__PURE__ */ new Set(), Z.set(Q, _))), !_.has(b)) {
                  _.add(b);
                  var ve = Sv.bind(null, f, Q, b);
                  Q.then(ve, ve);
                }
                je.effectTag |= 4096, je.expirationTime = r;
                break e;
              }
              je = je.return;
            } while (je !== null);
            _ = Error((bt(b.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + Ct(b));
          }
          wn !== ld && (wn = cv), _ = td(_, b), je = g;
          do {
            switch (je.tag) {
              case 3:
                Q = _, je.effectTag |= 4096, je.expirationTime = r;
                var ke = Fo(je, Q, r);
                $f(je, ke);
                break e;
              case 1:
                Q = _;
                var He = je.type, ut = je.stateNode;
                if (!(je.effectTag & 64) && (typeof He.getDerivedStateFromError == "function" || ut !== null && typeof ut.componentDidCatch == "function" && (Jr === null || !Jr.has(ut)))) {
                  je.effectTag |= 4096, je.expirationTime = r;
                  var Dt = uv(je, Q, r);
                  $f(je, Dt);
                  break e;
                }
            }
            je = je.return;
          } while (je !== null);
        }
        gt = gv(gt);
      } catch (En) {
        r = En;
        continue;
      }
      break;
    } while (1);
  }
  function hv() {
    var n = lc.current;
    return lc.current = Zs, n === null ? Zs : n;
  }
  function cd(n, r) {
    n < Ir && 2 < n && (Ir = n), r !== null && n < wl && 2 < n && (wl = n, La = r);
  }
  function Ou(n) {
    n > da && (da = n);
  }
  function mv() {
    for (; gt !== null; )
      gt = fd(gt);
  }
  function yv() {
    for (; gt !== null && !hm(); )
      gt = fd(gt);
  }
  function fd(n) {
    var r = Cv(n.alternate, n, en);
    return n.memoizedProps = n.pendingProps, r === null && (r = gv(n)), sv.current = null, r;
  }
  function gv(n) {
    gt = n;
    do {
      var r = gt.alternate;
      if (n = gt.return, gt.effectTag & 2048) {
        if (r = bm(gt), r !== null)
          return r.effectTag &= 2047, r;
        n !== null && (n.firstEffect = n.lastEffect = null, n.effectTag |= 2048);
      } else {
        if (r = tv(r, gt, en), en === 1 || gt.childExpirationTime !== 1) {
          for (var o = 0, u = gt.child; u !== null; ) {
            var f = u.expirationTime, g = u.childExpirationTime;
            f > o && (o = f), g > o && (o = g), u = u.sibling;
          }
          gt.childExpirationTime = o;
        }
        if (r !== null)
          return r;
        n !== null && !(n.effectTag & 2048) && (n.firstEffect === null && (n.firstEffect = gt.firstEffect), gt.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = gt.firstEffect), n.lastEffect = gt.lastEffect), 1 < gt.effectTag && (n.lastEffect !== null ? n.lastEffect.nextEffect = gt : n.firstEffect = gt, n.lastEffect = gt));
      }
      if (r = gt.sibling, r !== null)
        return r;
      gt = n;
    } while (gt !== null);
    return wn === Ui && (wn = ld), null;
  }
  function Du(n) {
    var r = n.expirationTime;
    return n = n.childExpirationTime, r > n ? r : n;
  }
  function Vi(n) {
    var r = sa();
    return Mt(99, Rm.bind(null, n, r)), null;
  }
  function Rm(n, r) {
    do
      Ol();
    while (ji !== null);
    if ((mt & (Zr | za)) !== Yn)
      throw Error(p(327));
    var o = n.finishedWork, u = n.finishedExpirationTime;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedExpirationTime = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90, n.nextKnownPendingLevel = 0;
    var f = Du(o);
    if (n.firstPendingTime = f, u <= n.lastSuspendedTime ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : u <= n.firstSuspendedTime && (n.firstSuspendedTime = u - 1), u <= n.lastPingedTime && (n.lastPingedTime = 0), u <= n.lastExpiredTime && (n.lastExpiredTime = 0), n === Ur && (gt = Ur = null, en = 0), 1 < o.effectTag ? o.lastEffect !== null ? (o.lastEffect.nextEffect = o, f = o.firstEffect) : f = o : f = o.firstEffect, f !== null) {
      var g = mt;
      mt |= za, sv.current = null, ys = Si;
      var b = uf();
      if (vs(b)) {
        if ("selectionStart" in b)
          var _ = { start: b.selectionStart, end: b.selectionEnd };
        else
          e: {
            _ = (_ = b.ownerDocument) && _.defaultView || window;
            var Q = _.getSelection && _.getSelection();
            if (Q && Q.rangeCount !== 0) {
              _ = Q.anchorNode;
              var Y = Q.anchorOffset, Fe = Q.focusNode;
              Q = Q.focusOffset;
              try {
                _.nodeType, Fe.nodeType;
              } catch {
                _ = null;
                break e;
              }
              var je = 0, _t = -1, zt = -1, Hr = 0, rr = 0, I = b, F = null;
              t:
                for (; ; ) {
                  for (var Z; I !== _ || Y !== 0 && I.nodeType !== 3 || (_t = je + Y), I !== Fe || Q !== 0 && I.nodeType !== 3 || (zt = je + Q), I.nodeType === 3 && (je += I.nodeValue.length), (Z = I.firstChild) !== null; )
                    F = I, I = Z;
                  for (; ; ) {
                    if (I === b)
                      break t;
                    if (F === _ && ++Hr === Y && (_t = je), F === Fe && ++rr === Q && (zt = je), (Z = I.nextSibling) !== null)
                      break;
                    I = F, F = I.parentNode;
                  }
                  I = Z;
                }
              _ = _t === -1 || zt === -1 ? null : { start: _t, end: zt };
            } else
              _ = null;
          }
        _ = _ || { start: 0, end: 0 };
      } else
        _ = null;
      cf = { activeElementDetached: null, focusedElem: b, selectionRange: _ }, Si = !1, We = f;
      do
        try {
          bv();
        } catch (Et) {
          if (We === null)
            throw Error(p(330));
          Wi(We, Et), We = We.nextEffect;
        }
      while (We !== null);
      We = f;
      do
        try {
          for (b = n, _ = r; We !== null; ) {
            var ve = We.effectTag;
            if (ve & 16 && fr(We.stateNode, ""), ve & 128) {
              var ke = We.alternate;
              if (ke !== null) {
                var He = ke.ref;
                He !== null && (typeof He == "function" ? He(null) : He.current = null);
              }
            }
            switch (ve & 1038) {
              case 2:
                ov(We), We.effectTag &= -3;
                break;
              case 6:
                ov(We), We.effectTag &= -3, ii(We.alternate, We);
                break;
              case 1024:
                We.effectTag &= -1025;
                break;
              case 1028:
                We.effectTag &= -1025, ii(We.alternate, We);
                break;
              case 4:
                ii(We.alternate, We);
                break;
              case 8:
                Y = We, oc(b, Y, _), av(Y);
            }
            We = We.nextEffect;
          }
        } catch (Et) {
          if (We === null)
            throw Error(p(330));
          Wi(We, Et), We = We.nextEffect;
        }
      while (We !== null);
      if (He = cf, ke = uf(), ve = He.focusedElem, _ = He.selectionRange, ke !== ve && ve && ve.ownerDocument && lf(ve.ownerDocument.documentElement, ve)) {
        for (_ !== null && vs(ve) && (ke = _.start, He = _.end, He === void 0 && (He = ke), "selectionStart" in ve ? (ve.selectionStart = ke, ve.selectionEnd = Math.min(He, ve.value.length)) : (He = (ke = ve.ownerDocument || document) && ke.defaultView || window, He.getSelection && (He = He.getSelection(), Y = ve.textContent.length, b = Math.min(_.start, Y), _ = _.end === void 0 ? b : Math.min(_.end, Y), !He.extend && b > _ && (Y = _, _ = b, b = Y), Y = of(ve, b), Fe = of(ve, _), Y && Fe && (He.rangeCount !== 1 || He.anchorNode !== Y.node || He.anchorOffset !== Y.offset || He.focusNode !== Fe.node || He.focusOffset !== Fe.offset) && (ke = ke.createRange(), ke.setStart(Y.node, Y.offset), He.removeAllRanges(), b > _ ? (He.addRange(ke), He.extend(Fe.node, Fe.offset)) : (ke.setEnd(Fe.node, Fe.offset), He.addRange(ke)))))), ke = [], He = ve; He = He.parentNode; )
          He.nodeType === 1 && ke.push({
            element: He,
            left: He.scrollLeft,
            top: He.scrollTop
          });
        for (typeof ve.focus == "function" && ve.focus(), ve = 0; ve < ke.length; ve++)
          He = ke[ve], He.element.scrollLeft = He.left, He.element.scrollTop = He.top;
      }
      Si = !!ys, cf = ys = null, n.current = o, We = f;
      do
        try {
          for (ve = n; We !== null; ) {
            var ut = We.effectTag;
            if (ut & 36 && Tm(ve, We.alternate, We), ut & 128) {
              ke = void 0;
              var Dt = We.ref;
              if (Dt !== null) {
                var En = We.stateNode;
                switch (We.tag) {
                  case 5:
                    ke = En;
                    break;
                  default:
                    ke = En;
                }
                typeof Dt == "function" ? Dt(ke) : Dt.current = ke;
              }
            }
            We = We.nextEffect;
          }
        } catch (Et) {
          if (We === null)
            throw Error(p(330));
          Wi(We, Et), We = We.nextEffect;
        }
      while (We !== null);
      We = null, Lp(), mt = g;
    } else
      n.current = o;
    if (ku)
      ku = !1, ji = n, _l = r;
    else
      for (We = f; We !== null; )
        r = We.nextEffect, We.nextEffect = null, We = r;
    if (r = n.firstPendingTime, r === 0 && (Jr = null), r === 1073741823 ? n === ud ? kl++ : (kl = 0, ud = n) : kl = 0, typeof dc == "function" && dc(o.stateNode, u), jr(n), Uo)
      throw Uo = !1, n = Rl, Rl = null, n;
    return (mt & od) !== Yn || zr(), null;
  }
  function bv() {
    for (; We !== null; ) {
      var n = We.effectTag;
      n & 256 && Cm(We.alternate, We), !(n & 512) || ku || (ku = !0, Ip(97, function() {
        return Ol(), null;
      })), We = We.nextEffect;
    }
  }
  function Ol() {
    if (_l !== 90) {
      var n = 97 < _l ? 97 : _l;
      return _l = 90, Mt(n, _m);
    }
  }
  function _m() {
    if (ji === null)
      return !1;
    var n = ji;
    if (ji = null, (mt & (Zr | za)) !== Yn)
      throw Error(p(331));
    var r = mt;
    for (mt |= za, n = n.current.firstEffect; n !== null; ) {
      try {
        var o = n;
        if (o.effectTag & 512)
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              rv(5, o), rd(5, o);
          }
      } catch (u) {
        if (n === null)
          throw Error(p(330));
        Wi(n, u);
      }
      o = n.nextEffect, n.nextEffect = null, n = o;
    }
    return mt = r, zr(), !0;
  }
  function Ev(n, r, o) {
    r = td(o, r), r = Fo(n, r, 1073741823), Pi(n, r), n = Io(n, 1073741823), n !== null && jr(n);
  }
  function Wi(n, r) {
    if (n.tag === 3)
      Ev(n, n, r);
    else
      for (var o = n.return; o !== null; ) {
        if (o.tag === 3) {
          Ev(o, n, r);
          break;
        } else if (o.tag === 1) {
          var u = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Jr === null || !Jr.has(u))) {
            n = td(r, n), n = uv(o, n, 1073741823), Pi(o, n), o = Io(o, 1073741823), o !== null && jr(o);
            break;
          }
        }
        o = o.return;
      }
  }
  function Sv(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), Ur === n && en === o ? wn === uc || wn === _u && Ir === 1073741823 && $t() - Ii < sc ? jo(n, en) : Lo = !0 : xv(n, o) && (r = n.lastPingedTime, r !== 0 && r < o || (n.lastPingedTime = o, jr(n)));
  }
  function km(n, r) {
    var o = n.stateNode;
    o !== null && o.delete(r), r = 0, r === 0 && (r = Qn(), r = Hi(r, n, null)), n = Io(n, r), n !== null && jr(n);
  }
  var Cv;
  Cv = function(n, r, o) {
    var u = r.expirationTime;
    if (n !== null) {
      var f = r.pendingProps;
      if (n.memoizedProps !== f || Ln.current)
        fa = !0;
      else {
        if (u < o) {
          switch (fa = !1, r.tag) {
            case 3:
              nc(r), un();
              break;
            case 5:
              if (Bf(r), r.mode & 4 && o !== 1 && f.hidden)
                return r.expirationTime = r.childExpirationTime = 1, null;
              break;
            case 1:
              ir(r.type) && vl(r);
              break;
            case 4:
              Hs(r, r.stateNode.containerInfo);
              break;
            case 10:
              u = r.memoizedProps.value, f = r.type._context, yn(Di, f._currentValue), f._currentValue = u;
              break;
            case 13:
              if (r.memoizedState !== null)
                return u = r.child.childExpirationTime, u !== 0 && u >= o ? Kp(n, r, o) : (yn(dn, dn.current & 1), r = ai(n, r, o), r !== null ? r.sibling : null);
              yn(dn, dn.current & 1);
              break;
            case 19:
              if (u = r.childExpirationTime >= o, n.effectTag & 64) {
                if (u)
                  return Jp(n, r, o);
                r.effectTag |= 64;
              }
              if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null), yn(dn, dn.current), !u)
                return null;
          }
          return ai(n, r, o);
        }
        fa = !1;
      }
    } else
      fa = !1;
    switch (r.expirationTime = 0, r.tag) {
      case 2:
        if (u = r.type, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, f = ki(r, Bn.current), xr(r, o), f = Gf(
          null,
          r,
          u,
          n,
          f,
          o
        ), r.effectTag |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) {
          if (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ir(u)) {
            var g = !0;
            vl(r);
          } else
            g = !1;
          r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Us(r);
          var b = u.getDerivedStateFromProps;
          typeof b == "function" && bl(r, u, b, n), f.updater = Mi, r.stateNode = f, f._reactInternalFiber = r, mu(r, u, n, o), r = Jf(null, r, u, !0, g, o);
        } else
          r.tag = 0, Lr(null, r, f, o), r = r.child;
        return r;
      case 16:
        e: {
          if (f = r.elementType, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, wt(f), f._status !== 1)
            throw f._result;
          switch (f = f._result, r.type = f, g = r.tag = Nu(f), n = Tr(f, n), g) {
            case 0:
              r = Po(null, r, f, n, o);
              break e;
            case 1:
              r = Xp(null, r, f, n, o);
              break e;
            case 11:
              r = Qp(null, r, f, n, o);
              break e;
            case 14:
              r = Tu(null, r, f, Tr(f.type, n), u, o);
              break e;
          }
          throw Error(p(306, f, ""));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Tr(u, f), Po(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Tr(u, f), Xp(n, r, u, f, o);
      case 3:
        if (nc(r), u = r.updateQueue, n === null || u === null)
          throw Error(p(282));
        if (u = r.pendingProps, f = r.memoizedState, f = f !== null ? f.element : null, Is(n, r), gl(r, u, null, o), u = r.memoizedState.element, u === f)
          un(), r = ai(n, r, o);
        else {
          if ((f = r.stateNode.hydrate) && (Li = ul(r.stateNode.containerInfo.firstChild), ca = r, f = No = !0), f)
            for (o = Wf(r, null, u, o), r.child = o; o; )
              o.effectTag = o.effectTag & -3 | 1024, o = o.sibling;
          else
            Lr(n, r, u, o), un();
          r = r.child;
        }
        return r;
      case 5:
        return Bf(r), n === null && Cu(r), u = r.type, f = r.pendingProps, g = n !== null ? n.memoizedProps : null, b = f.children, Kl(u, f) ? b = null : g !== null && Kl(u, g) && (r.effectTag |= 16), qp(n, r), r.mode & 4 && o !== 1 && f.hidden ? (r.expirationTime = r.childExpirationTime = 1, r = null) : (Lr(n, r, b, o), r = r.child), r;
      case 6:
        return n === null && Cu(r), null;
      case 13:
        return Kp(n, r, o);
      case 4:
        return Hs(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = El(r, null, u, o) : Lr(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Tr(u, f), Qp(n, r, u, f, o);
      case 7:
        return Lr(n, r, r.pendingProps, o), r.child;
      case 8:
        return Lr(
          n,
          r,
          r.pendingProps.children,
          o
        ), r.child;
      case 12:
        return Lr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          u = r.type._context, f = r.pendingProps, b = r.memoizedProps, g = f.value;
          var _ = r.type._context;
          if (yn(Di, _._currentValue), _._currentValue = g, b !== null)
            if (_ = b.value, g = Mr(_, g) ? 0 : (typeof u._calculateChangedBits == "function" ? u._calculateChangedBits(_, g) : 1073741823) | 0, g === 0) {
              if (b.children === f.children && !Ln.current) {
                r = ai(n, r, o);
                break e;
              }
            } else
              for (_ = r.child, _ !== null && (_.return = r); _ !== null; ) {
                var Q = _.dependencies;
                if (Q !== null) {
                  b = _.child;
                  for (var Y = Q.firstContext; Y !== null; ) {
                    if (Y.context === u && Y.observedBits & g) {
                      _.tag === 1 && (Y = Ni(o, null), Y.tag = 2, Pi(_, Y)), _.expirationTime < o && (_.expirationTime = o), Y = _.alternate, Y !== null && Y.expirationTime < o && (Y.expirationTime = o), yl(_.return, o), Q.expirationTime < o && (Q.expirationTime = o);
                      break;
                    }
                    Y = Y.next;
                  }
                } else
                  b = _.tag === 10 && _.type === r.type ? null : _.child;
                if (b !== null)
                  b.return = _;
                else
                  for (b = _; b !== null; ) {
                    if (b === r) {
                      b = null;
                      break;
                    }
                    if (_ = b.sibling, _ !== null) {
                      _.return = b.return, b = _;
                      break;
                    }
                    b = b.return;
                  }
                _ = b;
              }
          Lr(n, r, f.children, o), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, g = r.pendingProps, u = g.children, xr(r, o), f = Kr(f, g.unstable_observedBits), u = u(f), r.effectTag |= 1, Lr(n, r, u, o), r.child;
      case 14:
        return f = r.type, g = Tr(f, r.pendingProps), g = Tr(f.type, g), Tu(n, r, f, g, u, o);
      case 15:
        return tc(n, r, r.type, r.pendingProps, u, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Tr(u, f), n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), r.tag = 1, ir(u) ? (n = !0, vl(r)) : n = !1, xr(r, o), Hp(r, u, f), mu(r, u, f, o), Jf(
          null,
          r,
          u,
          !0,
          n,
          o
        );
      case 19:
        return Jp(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  var dc = null, Au = null;
  function Om(n) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (r.isDisabled || !r.supportsFiber)
      return !0;
    try {
      var o = r.inject(n);
      dc = function(u) {
        try {
          r.onCommitFiberRoot(o, u, void 0, (u.current.effectTag & 64) === 64);
        } catch {
        }
      }, Au = function(u) {
        try {
          r.onCommitFiberUnmount(o, u);
        } catch {
        }
      };
    } catch {
    }
    return !0;
  }
  function Dm(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
  }
  function Ua(n, r, o, u) {
    return new Dm(n, r, o, u);
  }
  function dd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Nu(n) {
    if (typeof n == "function")
      return dd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ur)
        return 11;
      if (n === na)
        return 14;
    }
    return 2;
  }
  function va(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ua(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.effectTag = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childExpirationTime = n.childExpirationTime, o.expirationTime = n.expirationTime, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : {
      expirationTime: r.expirationTime,
      firstContext: r.firstContext,
      responders: r.responders
    }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function pc(n, r, o, u, f, g) {
    var b = 2;
    if (u = n, typeof n == "function")
      dd(n) && (b = 1);
    else if (typeof n == "string")
      b = 5;
    else
      e:
        switch (n) {
          case Rn:
            return oi(o.children, f, g, r);
          case Cn:
            b = 8, f |= 7;
            break;
          case Pn:
            b = 8, f |= 1;
            break;
          case nn:
            return n = Ua(12, o, r, f | 8), n.elementType = nn, n.type = nn, n.expirationTime = g, n;
          case _n:
            return n = Ua(13, o, r, f), n.type = _n, n.elementType = _n, n.expirationTime = g, n;
          case Mn:
            return n = Ua(19, o, r, f), n.elementType = Mn, n.expirationTime = g, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ge:
                  b = 10;
                  break e;
                case Nt:
                  b = 9;
                  break e;
                case ur:
                  b = 11;
                  break e;
                case na:
                  b = 14;
                  break e;
                case L:
                  b = 16, u = null;
                  break e;
                case me:
                  b = 22;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = Ua(b, o, r, f), r.elementType = n, r.type = u, r.expirationTime = g, r;
  }
  function oi(n, r, o, u) {
    return n = Ua(7, n, u, r), n.expirationTime = o, n;
  }
  function pd(n, r, o) {
    return n = Ua(6, n, null, r), n.expirationTime = o, n;
  }
  function vd(n, r, o) {
    return r = Ua(4, n.children !== null ? n.children : [], n.key, r), r.expirationTime = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Tv(n, r, o) {
    this.tag = r, this.current = null, this.containerInfo = n, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  function xv(n, r) {
    var o = n.firstSuspendedTime;
    return n = n.lastSuspendedTime, o !== 0 && o >= r && n <= r;
  }
  function Ho(n, r) {
    var o = n.firstSuspendedTime, u = n.lastSuspendedTime;
    o < r && (n.firstSuspendedTime = r), (u > r || o === 0) && (n.lastSuspendedTime = r), r <= n.lastPingedTime && (n.lastPingedTime = 0), r <= n.lastExpiredTime && (n.lastExpiredTime = 0);
  }
  function hd(n, r) {
    r > n.firstPendingTime && (n.firstPendingTime = r);
    var o = n.firstSuspendedTime;
    o !== 0 && (r >= o ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : r >= n.lastSuspendedTime && (n.lastSuspendedTime = r + 1), r > n.nextKnownPendingLevel && (n.nextKnownPendingLevel = r));
  }
  function Bi(n, r) {
    var o = n.lastExpiredTime;
    (o === 0 || o > r) && (n.lastExpiredTime = r);
  }
  function Pu(n, r, o, u) {
    var f = r.current, g = Qn(), b = hu.suspense;
    g = Hi(g, f, b);
    e:
      if (o) {
        o = o._reactInternalFiber;
        t: {
          if (Tn(o) !== o || o.tag !== 1)
            throw Error(p(170));
          var _ = o;
          do {
            switch (_.tag) {
              case 3:
                _ = _.stateNode.context;
                break t;
              case 1:
                if (ir(_.type)) {
                  _ = _.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            _ = _.return;
          } while (_ !== null);
          throw Error(p(171));
        }
        if (o.tag === 1) {
          var Q = o.type;
          if (ir(Q)) {
            o = To(o, Q, _);
            break e;
          }
        }
        o = _;
      } else
        o = Pa;
    return r.context === null ? r.context = o : r.pendingContext = o, r = Ni(g, b), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), Pi(f, r), $i(f, g), g;
  }
  function vc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function hc(n, r) {
    n = n.memoizedState, n !== null && n.dehydrated !== null && n.retryTime < r && (n.retryTime = r);
  }
  function Mu(n, r) {
    hc(n, r), (n = n.alternate) && hc(n, r);
  }
  function md(n, r, o) {
    o = o != null && o.hydrate === !0;
    var u = new Tv(n, r, o), f = Ua(3, null, null, r === 2 ? 7 : r === 1 ? 3 : 0);
    u.current = f, f.stateNode = u, Us(f), n[cl] = u.current, o && r !== 0 && al(n, n.nodeType === 9 ? n : n.ownerDocument), this._internalRoot = u;
  }
  md.prototype.render = function(n) {
    Pu(n, this._internalRoot, null, null);
  }, md.prototype.unmount = function() {
    var n = this._internalRoot, r = n.containerInfo;
    Pu(null, n, null, function() {
      r[cl] = null;
    });
  };
  function $o(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function yd(n, r) {
    if (r || (r = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, r = !(!r || r.nodeType !== 1 || !r.hasAttribute("data-reactroot"))), !r)
      for (var o; o = n.lastChild; )
        n.removeChild(o);
    return new md(n, 0, r ? { hydrate: !0 } : void 0);
  }
  function Fu(n, r, o, u, f) {
    var g = o._reactRootContainer;
    if (g) {
      var b = g._internalRoot;
      if (typeof f == "function") {
        var _ = f;
        f = function() {
          var Y = vc(b);
          _.call(Y);
        };
      }
      Pu(r, b, n, f);
    } else {
      if (g = o._reactRootContainer = yd(o, u), b = g._internalRoot, typeof f == "function") {
        var Q = f;
        f = function() {
          var Y = vc(b);
          Q.call(Y);
        };
      }
      pv(function() {
        Pu(r, b, n, f);
      });
    }
    return vc(b);
  }
  function Am(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: At, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  A = function(n) {
    if (n.tag === 13) {
      var r = Jt(Qn(), 150, 100);
      $i(n, r), Mu(n, r);
    }
  }, G = function(n) {
    n.tag === 13 && ($i(n, 3), Mu(n, 3));
  }, J = function(n) {
    if (n.tag === 13) {
      var r = Qn();
      r = Hi(r, n, null), $i(n, r), Mu(n, r);
    }
  }, it = function(n, r, o) {
    switch (r) {
      case "input":
        if (Ht(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = Jl(u);
              if (!f)
                throw Error(p(90));
              Zn(u), Ht(u, f);
            }
          }
        }
        break;
      case "textarea":
        tl(n, o);
        break;
      case "select":
        r = o.value, r != null && cr(n, !!o.multiple, r, !1);
    }
  }, Ze = dv, Te = function(n, r, o, u, f) {
    var g = mt;
    mt |= 4;
    try {
      return Mt(98, n.bind(null, r, o, u, f));
    } finally {
      mt = g, mt === Yn && zr();
    }
  }, Ae = function() {
    (mt & (1 | Zr | za)) === Yn && (wm(), Ol());
  }, _e = function(n, r) {
    var o = mt;
    mt |= 2;
    try {
      return n(r);
    } finally {
      mt = o, mt === Yn && zr();
    }
  };
  function wv(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$o(r))
      throw Error(p(200));
    return Am(n, r, null, o);
  }
  var tb = { Events: [Zl, Gr, Jl, Xe, M, ho, function(n) {
    xn(n, pf);
  }, Qe, Ce, hr, Qa, Ol, { current: !1 }] };
  return function(n) {
    var r = n.findFiberByHostInstance;
    return Om(d({}, n, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(o) {
      return o = rl(o), o === null ? null : o.stateNode;
    }, findFiberByHostInstance: function(o) {
      return r ? r(o) : null;
    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
  }({
    findFiberByHostInstance: fl,
    bundleType: 0,
    version: "16.14.0",
    rendererPackageName: "react-dom"
  }), Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tb, Ca.createPortal = wv, Ca.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternalFiber;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : Error(p(268, Object.keys(n)));
    return n = rl(r), n = n === null ? null : n.stateNode, n;
  }, Ca.flushSync = function(n, r) {
    if ((mt & (Zr | za)) !== Yn)
      throw Error(p(187));
    var o = mt;
    mt |= 1;
    try {
      return Mt(99, n.bind(null, r));
    } finally {
      mt = o, zr();
    }
  }, Ca.hydrate = function(n, r, o) {
    if (!$o(r))
      throw Error(p(200));
    return Fu(null, n, r, !0, o);
  }, Ca.render = function(n, r, o) {
    if (!$o(r))
      throw Error(p(200));
    return Fu(null, n, r, !1, o);
  }, Ca.unmountComponentAtNode = function(n) {
    if (!$o(n))
      throw Error(p(40));
    return n._reactRootContainer ? (pv(function() {
      Fu(null, null, n, !1, function() {
        n._reactRootContainer = null, n[cl] = null;
      });
    }), !0) : !1;
  }, Ca.unstable_batchedUpdates = dv, Ca.unstable_createPortal = function(n, r) {
    return wv(n, r, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Ca.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!$o(o))
      throw Error(p(200));
    if (n == null || n._reactInternalFiber === void 0)
      throw Error(p(38));
    return Fu(n, r, o, !1, u);
  }, Ca.version = "16.14.0", Ca;
}
var Ta = {}, Yh = { exports: {} }, hi = {};
/** @license React v0.19.1
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uC;
function hN() {
  if (uC)
    return hi;
  uC = 1;
  var s = 0;
  return hi.__interactionsRef = null, hi.__subscriberRef = null, hi.unstable_clear = function(d) {
    return d();
  }, hi.unstable_getCurrent = function() {
    return null;
  }, hi.unstable_getThreadID = function() {
    return ++s;
  }, hi.unstable_subscribe = function() {
  }, hi.unstable_trace = function(d, h, p) {
    return p();
  }, hi.unstable_unsubscribe = function() {
  }, hi.unstable_wrap = function(d) {
    return d;
  }, hi;
}
var c0 = {};
/** @license React v0.19.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sC;
function mN() {
  return sC || (sC = 1, function(s) {
    ({}).NODE_ENV !== "production" && function() {
      var d = 0, h = 0, p = 0;
      s.__interactionsRef = null, s.__subscriberRef = null, s.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, s.__subscriberRef = {
        current: null
      };
      function E(K) {
        var le = s.__interactionsRef.current;
        s.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return K();
        } finally {
          s.__interactionsRef.current = le;
        }
      }
      function T() {
        return s.__interactionsRef.current;
      }
      function R() {
        return ++p;
      }
      function y(K, le, ae) {
        var M = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : d, ge = {
          __count: 1,
          id: h++,
          name: K,
          timestamp: le
        }, ye = s.__interactionsRef.current, Xe = new Set(ye);
        Xe.add(ge), s.__interactionsRef.current = Xe;
        var Ke = s.__subscriberRef.current, it;
        try {
          Ke !== null && Ke.onInteractionTraced(ge);
        } finally {
          try {
            Ke !== null && Ke.onWorkStarted(Xe, M);
          } finally {
            try {
              it = ae();
            } finally {
              s.__interactionsRef.current = ye;
              try {
                Ke !== null && Ke.onWorkStopped(Xe, M);
              } finally {
                ge.__count--, Ke !== null && ge.__count === 0 && Ke.onInteractionScheduledWorkCompleted(ge);
              }
            }
          }
        }
        return it;
      }
      function N(K) {
        var le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, ae = s.__interactionsRef.current, M = s.__subscriberRef.current;
        M !== null && M.onWorkScheduled(ae, le), ae.forEach(function(Xe) {
          Xe.__count++;
        });
        var ge = !1;
        function ye() {
          var Xe = s.__interactionsRef.current;
          s.__interactionsRef.current = ae, M = s.__subscriberRef.current;
          try {
            var Ke;
            try {
              M !== null && M.onWorkStarted(ae, le);
            } finally {
              try {
                Ke = K.apply(void 0, arguments);
              } finally {
                s.__interactionsRef.current = Xe, M !== null && M.onWorkStopped(ae, le);
              }
            }
            return Ke;
          } finally {
            ge || (ge = !0, ae.forEach(function(it) {
              it.__count--, M !== null && it.__count === 0 && M.onInteractionScheduledWorkCompleted(it);
            }));
          }
        }
        return ye.cancel = function() {
          M = s.__subscriberRef.current;
          try {
            M !== null && M.onWorkCanceled(ae, le);
          } finally {
            ae.forEach(function(Ke) {
              Ke.__count--, M && Ke.__count === 0 && M.onInteractionScheduledWorkCompleted(Ke);
            });
          }
        }, ye;
      }
      var z = null;
      z = /* @__PURE__ */ new Set();
      function P(K) {
        z.add(K), z.size === 1 && (s.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: he,
          onInteractionTraced: se,
          onWorkCanceled: de,
          onWorkScheduled: ue,
          onWorkStarted: te,
          onWorkStopped: $
        });
      }
      function q(K) {
        z.delete(K), z.size === 0 && (s.__subscriberRef.current = null);
      }
      function se(K) {
        var le = !1, ae = null;
        if (z.forEach(function(M) {
          try {
            M.onInteractionTraced(K);
          } catch (ge) {
            le || (le = !0, ae = ge);
          }
        }), le)
          throw ae;
      }
      function he(K) {
        var le = !1, ae = null;
        if (z.forEach(function(M) {
          try {
            M.onInteractionScheduledWorkCompleted(K);
          } catch (ge) {
            le || (le = !0, ae = ge);
          }
        }), le)
          throw ae;
      }
      function ue(K, le) {
        var ae = !1, M = null;
        if (z.forEach(function(ge) {
          try {
            ge.onWorkScheduled(K, le);
          } catch (ye) {
            ae || (ae = !0, M = ye);
          }
        }), ae)
          throw M;
      }
      function te(K, le) {
        var ae = !1, M = null;
        if (z.forEach(function(ge) {
          try {
            ge.onWorkStarted(K, le);
          } catch (ye) {
            ae || (ae = !0, M = ye);
          }
        }), ae)
          throw M;
      }
      function $(K, le) {
        var ae = !1, M = null;
        if (z.forEach(function(ge) {
          try {
            ge.onWorkStopped(K, le);
          } catch (ye) {
            ae || (ae = !0, M = ye);
          }
        }), ae)
          throw M;
      }
      function de(K, le) {
        var ae = !1, M = null;
        if (z.forEach(function(ge) {
          try {
            ge.onWorkCanceled(K, le);
          } catch (ye) {
            ae || (ae = !0, M = ye);
          }
        }), ae)
          throw M;
      }
      s.unstable_clear = E, s.unstable_getCurrent = T, s.unstable_getThreadID = R, s.unstable_subscribe = P, s.unstable_trace = y, s.unstable_unsubscribe = q, s.unstable_wrap = N;
    }();
  }(c0)), c0;
}
var cC;
function yN() {
  return cC || (cC = 1, {}.NODE_ENV === "production" ? Yh.exports = hN() : Yh.exports = mN()), Yh.exports;
}
/** @license React v16.14.0
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fC;
function gN() {
  return fC || (fC = 1, {}.NODE_ENV !== "production" && function() {
    var s = $e, d = lm(), h = uT(), p = CC(), E = yN(), T = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    T.hasOwnProperty("ReactCurrentDispatcher") || (T.ReactCurrentDispatcher = {
      current: null
    }), T.hasOwnProperty("ReactCurrentBatchConfig") || (T.ReactCurrentBatchConfig = {
      suspense: null
    });
    function R(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("warn", e, a);
      }
    }
    function y(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("error", e, a);
      }
    }
    function N(e, t, a) {
      {
        var i = a.length > 0 && typeof a[a.length - 1] == "string" && a[a.length - 1].indexOf(`
    in`) === 0;
        if (!i) {
          var l = T.ReactDebugCurrentFrame, c = l.getStackAddendum();
          c !== "" && (t += "%s", a = a.concat([c]));
        }
        var v = a.map(function(O) {
          return "" + O;
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
        try {
          var m = 0, C = "Warning: " + t.replace(/%s/g, function() {
            return a[m++];
          });
          throw new Error(C);
        } catch {
        }
      }
    }
    if (!s)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var z = function(e, t, a, i, l, c, v, m, C) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, O);
      } catch (D) {
        this.onError(D);
      }
    };
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var P = document.createElement("react"), q = function(e, t, a, i, l, c, v, m, C) {
        if (!(typeof document < "u"))
          throw Error("The `document` ({}) was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var O = document.createEvent("Event"), D = !0, ee = window.event, j = Object.getOwnPropertyDescriptor(window, "event"), re = Array.prototype.slice.call(arguments, 3);
        function we() {
          P.removeEventListener(kt, we, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = ee), t.apply(a, re), D = !1;
        }
        var De, st = !1, dt = !1;
        function Bt(an) {
          if (De = an.error, st = !0, De === null && an.colno === 0 && an.lineno === 0 && (dt = !0), an.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var kt = "react-" + (e || "invokeguardedcallback");
        window.addEventListener("error", Bt), P.addEventListener(kt, we, !1), O.initEvent(kt, !1, !1), P.dispatchEvent(O), j && Object.defineProperty(window, "event", j), D && (st ? dt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", Bt);
      };
      z = q;
    }
    var se = z, he = !1, ue = null, te = !1, $ = null, de = {
      onError: function(e) {
        he = !0, ue = e;
      }
    };
    function K(e, t, a, i, l, c, v, m, C) {
      he = !1, ue = null, se.apply(de, arguments);
    }
    function le(e, t, a, i, l, c, v, m, C) {
      if (K.apply(this, arguments), he) {
        var O = ge();
        te || (te = !0, $ = O);
      }
    }
    function ae() {
      if (te) {
        var e = $;
        throw te = !1, $ = null, e;
      }
    }
    function M() {
      return he;
    }
    function ge() {
      if (he) {
        var e = ue;
        return he = !1, ue = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var ye = null, Xe = null, Ke = null;
    function it(e, t, a) {
      ye = e, Xe = t, Ke = a, (!Ke || !Xe) && y("EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.");
    }
    var pt;
    pt = function(e) {
      var t = e._dispatchListeners, a = e._dispatchInstances, i = Array.isArray(t), l = i ? t.length : t ? 1 : 0, c = Array.isArray(a), v = c ? a.length : a ? 1 : 0;
      (c !== i || v !== l) && y("EventPluginUtils: Invalid `event`.");
    };
    function et(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = Ke(a), le(i, t, void 0, e), e.currentTarget = null;
    }
    function St(e) {
      var t = e._dispatchListeners, a = e._dispatchInstances;
      if (pt(e), Array.isArray(t))
        for (var i = 0; i < t.length && !e.isPropagationStopped(); i++)
          et(e, t[i], a[i]);
      else
        t && et(e, t, a);
      e._dispatchListeners = null, e._dispatchInstances = null;
    }
    var Qe = 0, Ce = 1, Ze = 2, Te = 3, Ae = 4, _e = 5, Be = 6, yt = 7, be = 8, ne = 9, U = 10, w = 11, x = 12, W = 13, V = 14, fe = 15, Oe = 16, Se = 17, H = 18, qe = 19, ce = 20, Ue = 21, nt = 22, rt = null, ht = {};
    function Hn() {
      if (rt)
        for (var e in ht) {
          var t = ht[e], a = rt.indexOf(e);
          if (!(a > -1))
            throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + e + "`.");
          if (!Pn[a]) {
            if (!t.extractEvents)
              throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + e + "` does not.");
            Pn[a] = t;
            var i = t.eventTypes;
            for (var l in i)
              if (!At(i[l], t, l))
                throw Error("EventPluginRegistry: Failed to publish event `" + l + "` for plugin `" + e + "`.");
          }
        }
    }
    function At(e, t, a) {
      if (nn.hasOwnProperty(a))
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + a + "`.");
      nn[a] = e;
      var i = e.phasedRegistrationNames;
      if (i) {
        for (var l in i)
          if (i.hasOwnProperty(l)) {
            var c = i[l];
            Rn(c, t, a);
          }
        return !0;
      } else if (e.registrationName)
        return Rn(e.registrationName, t, a), !0;
      return !1;
    }
    function Rn(e, t, a) {
      if (Ge[e])
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + e + "`.");
      Ge[e] = t, Nt[e] = t.eventTypes[a].dependencies;
      {
        var i = e.toLowerCase();
        Cn[i] = e, e === "onDoubleClick" && (Cn.ondblclick = e);
      }
    }
    var Pn = [], nn = {}, Ge = {}, Nt = {}, Cn = {};
    function ur(e) {
      if (rt)
        throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");
      rt = Array.prototype.slice.call(e), Hn();
    }
    function _n(e) {
      var t = !1;
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var i = e[a];
          if (!ht.hasOwnProperty(a) || ht[a] !== i) {
            if (ht[a])
              throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + a + "`.");
            ht[a] = i, t = !0;
          }
        }
      t && Hn();
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", na = 1, L = 1 << 5, me = 1 << 6, Pe = null, ot = null, wt = null;
    function bt(e) {
      var t = Xe(e);
      if (t) {
        if (typeof Pe != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = ye(a);
          Pe(t.stateNode, t.type, i);
        }
      }
    }
    function Ct(e) {
      Pe = e;
    }
    function ct(e) {
      ot ? wt ? wt.push(e) : wt = [e] : ot = e;
    }
    function sn() {
      return ot !== null || wt !== null;
    }
    function $n() {
      if (ot) {
        var e = ot, t = wt;
        if (ot = null, wt = null, bt(e), t)
          for (var a = 0; a < t.length; a++)
            bt(t[a]);
      }
    }
    var Fn = !0, Zn = !1, on = !1, sr = !1, yi = function(e, t) {
      return e(t);
    }, Ht = function(e, t, a, i, l) {
      return e(t, a, i, l);
    }, hn = function() {
    }, Nr = yi, Vn = !1, Pr = !1;
    function cr() {
      var e = sn();
      e && (hn(), $n());
    }
    function Ba(e, t) {
      if (Vn)
        return e(t);
      Vn = !0;
      try {
        return yi(e, t);
      } finally {
        Vn = !1, cr();
      }
    }
    function gi(e, t, a) {
      if (Pr)
        return e(t, a);
      Pr = !0;
      try {
        return Nr(e, t, a);
      } finally {
        Pr = !1, cr();
      }
    }
    function tl(e, t, a, i, l) {
      var c = Vn;
      Vn = !0;
      try {
        return Ht(e, t, a, i, l);
      } finally {
        Vn = c, Vn || cr();
      }
    }
    function nl(e) {
      !Vn && !Zn && hn();
    }
    function lo(e, t, a, i) {
      yi = e, Ht = t, hn = a, Nr = i;
    }
    var bi = 0, Wn = 1, wa = 2, Ya = 0, fr = 1, Ra = 2, Jn = 3, ra = 4, uo = 5, Ga = 6, so = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", oe = so + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ee = "data-reactroot", lt = new RegExp("^[" + so + "][" + oe + "]*$"), Rt = Object.prototype.hasOwnProperty, cn = {}, ln = {};
    function Tn(e) {
      return Rt.call(ln, e) ? !0 : Rt.call(cn, e) ? !1 : lt.test(e) ? (ln[e] = !0, !0) : (cn[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function dr(e, t, a) {
      return t !== null ? t.type === Ya : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Ya)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ei(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Jn:
            return !t;
          case ra:
            return t === !1;
          case uo:
            return isNaN(t);
          case Ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function rl(e) {
      return xn.hasOwnProperty(e) ? xn[e] : null;
    }
    function mn(e, t, a, i, l, c) {
      this.acceptsBooleans = t === Ra || t === Jn || t === ra, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c;
    }
    var xn = {}, co = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    co.forEach(function(e) {
      xn[e] = new mn(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      xn[t] = new mn(
        t,
        fr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      xn[e] = new mn(
        e,
        Ra,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      xn[e] = new mn(
        e,
        Ra,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      xn[e] = new mn(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      xn[e] = new mn(
        e,
        Jn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      xn[e] = new mn(
        e,
        ra,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      xn[e] = new mn(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      xn[e] = new mn(
        e,
        uo,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var Bl = /[\-\:]([a-z])/g, Qa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bl, Qa);
      xn[t] = new mn(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bl, Qa);
      xn[t] = new mn(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bl, Qa);
      xn[t] = new mn(
        t,
        fr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      xn[e] = new mn(
        e,
        fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var Yl = "xlinkHref";
    xn[Yl] = new mn(
      "xlinkHref",
      fr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      xn[e] = new mn(
        e,
        fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0
      );
    }), T.ReactDebugCurrentFrame;
    var us = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fo = !1;
    function Gl(e) {
      !fo && us.test(e) && (fo = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ss(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        i.sanitizeURL && Gl("" + a);
        var c = i.attributeName, v = null;
        if (i.type === ra) {
          if (e.hasAttribute(c)) {
            var m = e.getAttribute(c);
            return m === "" ? !0 : Ei(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(c)) {
          if (Ei(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === Jn)
            return a;
          v = e.getAttribute(c);
        }
        return Ei(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Ql(e, t, a) {
      {
        if (!Tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var i = e.getAttribute(t);
        return i === "" + a ? a : i;
      }
    }
    function S(e, t, a, i) {
      var l = rl(t);
      if (!dr(t, l, i)) {
        if (Ei(t, a, l, i) && (a = null), i || l === null) {
          if (Tn(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : e.setAttribute(c, "" + a);
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var m = l.propertyName;
          if (a === null) {
            var C = l.type;
            e[m] = C === Jn ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var O = l.attributeName, D = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(O);
        else {
          var ee = l.type, j;
          ee === Jn || ee === ra && a === !0 ? j = "" : (j = "" + a, l.sanitizeURL && Gl(j.toString())), D ? e.setAttributeNS(D, O, j) : e.setAttribute(O, j);
        }
      }
    }
    var A = /^(.*)[\\\/]/;
    function G(e, t, a) {
      var i = "";
      if (t) {
        var l = t.fileName, c = l.replace(A, "");
        if (/^index\./.test(c)) {
          var v = l.match(A);
          if (v) {
            var m = v[1];
            if (m) {
              var C = m.replace(A, "");
              c = C + "/" + c;
            }
          }
        }
        i = " (at " + c + ":" + t.lineNumber + ")";
      } else
        a && (i = " (created by " + a + ")");
      return `
    in ` + (e || "Unknown") + i;
    }
    var J = typeof Symbol == "function" && Symbol.for, Ne = J ? Symbol.for("react.element") : 60103, at = J ? Symbol.for("react.portal") : 60106, Ye = J ? Symbol.for("react.fragment") : 60107, ft = J ? Symbol.for("react.strict_mode") : 60108, jt = J ? Symbol.for("react.profiler") : 60114, kn = J ? Symbol.for("react.provider") : 60109, Dn = J ? Symbol.for("react.context") : 60110, zn = J ? Symbol.for("react.concurrent_mode") : 60111, pr = J ? Symbol.for("react.forward_ref") : 60112, vr = J ? Symbol.for("react.suspense") : 60113, al = J ? Symbol.for("react.suspense_list") : 60120, qa = J ? Symbol.for("react.memo") : 60115, aa = J ? Symbol.for("react.lazy") : 60116, il = J ? Symbol.for("react.block") : 60121, bp = typeof Symbol == "function" && Symbol.iterator, dm = "@@iterator";
    function _a(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = bp && e[bp] || e[dm];
      return typeof t == "function" ? t : null;
    }
    var Ep = -1, ef = 0, po = 1, Sp = 2;
    function tf(e) {
      return e._status === po ? e._result : null;
    }
    function Cp(e) {
      if (e._status === Ep) {
        e._status = ef;
        var t = e._ctor, a = t();
        e._result = a, a.then(function(i) {
          if (e._status === ef) {
            var l = i.default;
            l === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), e._status = po, e._result = l;
          }
        }, function(i) {
          e._status === ef && (e._status = Sp, e._result = i);
        });
      }
    }
    function nf(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Me(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ye:
          return "Fragment";
        case at:
          return "Portal";
        case jt:
          return "Profiler";
        case ft:
          return "StrictMode";
        case vr:
          return "Suspense";
        case al:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Dn:
            return "Context.Consumer";
          case kn:
            return "Context.Provider";
          case pr:
            return nf(e, e.render, "ForwardRef");
          case qa:
            return Me(e.type);
          case il:
            return Me(e.render);
          case aa: {
            var t = e, a = tf(t);
            if (a)
              return Me(a);
            break;
          }
        }
      return null;
    }
    var cs = T.ReactDebugCurrentFrame;
    function Tp(e) {
      switch (e.tag) {
        case Te:
        case Ae:
        case Be:
        case yt:
        case U:
        case ne:
          return "";
        default:
          var t = e._debugOwner, a = e._debugSource, i = Me(e.type), l = null;
          return t && (l = Me(t.type)), G(i, a, l);
      }
    }
    function ar(e) {
      var t = "", a = e;
      do
        t += Tp(a), a = a.return;
      while (a);
      return t;
    }
    var Xa = null, ql = !1;
    function Si() {
      {
        if (Xa === null)
          return null;
        var e = Xa._debugOwner;
        if (e !== null && typeof e < "u")
          return Me(e.type);
      }
      return null;
    }
    function Tt() {
      return Xa === null ? "" : ar(Xa);
    }
    function ia() {
      cs.getCurrentStack = null, Xa = null, ql = !1;
    }
    function ol(e) {
      cs.getCurrentStack = Tt, Xa = e, ql = !1;
    }
    function ka(e) {
      ql = e;
    }
    function hr(e) {
      return "" + e;
    }
    function Oa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var ll = null, fs = {
      checkPropTypes: null
    };
    {
      ll = T.ReactDebugCurrentFrame;
      var xp = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      }, wp = {
        value: function(e, t, a) {
          return xp[e.type] || e.onChange || e.readOnly || e.disabled || e[t] == null || Zn ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        },
        checked: function(e, t, a) {
          return e.onChange || e.readOnly || e.disabled || e[t] == null || Zn ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        }
      };
      fs.checkPropTypes = function(e, t) {
        p(wp, t, "prop", e, ll.getStackAddendum);
      };
    }
    function Rp(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ds(e) {
      return e._valueTracker;
    }
    function rf(e) {
      e._valueTracker = null;
    }
    function _p(e) {
      var t = "";
      return e && (Rp(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ka(e) {
      var t = Rp(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            i = "" + m, c.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            i = "" + m;
          },
          stopTracking: function() {
            rf(e), delete e[t];
          }
        };
        return v;
      }
    }
    function vo(e) {
      ds(e) || (e._valueTracker = Ka(e));
    }
    function ps(e) {
      if (!e)
        return !1;
      var t = ds(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = _p(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    var af = !1, of = !1, lf = !1, uf = !1;
    function vs(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function hs(e, t) {
      var a = e, i = t.checked, l = d({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function sf(e, t) {
      fs.checkPropTypes("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !of && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", Si() || "A component", t.type), of = !0), t.value !== void 0 && t.defaultValue !== void 0 && !af && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", Si() || "A component", t.type), af = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: vs(t)
      };
    }
    function ms(e, t) {
      var a = e, i = t.checked;
      i != null && S(a, "checked", i, !1);
    }
    function Xl(e, t) {
      var a = e;
      {
        var i = vs(t);
        !a._wrapperState.controlled && i && !uf && (y("A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), uf = !0), a._wrapperState.controlled && !i && !lf && (y("A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), lf = !0);
      }
      ms(e, t);
      var l = Oa(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = hr(l)) : a.value !== hr(l) && (a.value = hr(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Kl(a, t.type, l) : t.hasOwnProperty("defaultValue") && Kl(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ys(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = hr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function cf(e, t) {
      var a = e;
      Xl(a, t), kp(a, t);
    }
    function kp(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var v = l[c];
          if (!(v === e || v.form !== e.form)) {
            var m = Fm(v);
            if (!m)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ps(v), Xl(v, m);
          }
        }
      }
    }
    function Kl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || e.ownerDocument.activeElement !== e) && (a == null ? e.defaultValue = hr(e._wrapperState.initialValue) : e.defaultValue !== hr(a) && (e.defaultValue = hr(a)));
    }
    var gs = !1, Op = !1;
    function ul(e) {
      var t = "";
      return s.Children.forEach(e, function(a) {
        a != null && (t += a);
      }), t;
    }
    function ff(e, t) {
      typeof t.children == "object" && t.children !== null && s.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || typeof a.type == "string" && (Op || (Op = !0, y("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !gs && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gs = !0);
    }
    function df(e, t) {
      t.value != null && e.setAttribute("value", hr(Oa(t.value)));
    }
    function Da(e, t) {
      var a = d({
        children: void 0
      }, t), i = ul(t.children);
      return i && (a.children = i), a;
    }
    var sl;
    sl = !1;
    function cl() {
      var e = Si();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var fl = ["value", "defaultValue"];
    function Zl(e) {
      {
        fs.checkPropTypes("select", e);
        for (var t = 0; t < fl.length; t++) {
          var a = fl[t];
          if (e[a] != null) {
            var i = Array.isArray(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, cl()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, cl());
          }
        }
      }
    }
    function Gr(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var c = a, v = {}, m = 0; m < c.length; m++)
          v["$" + c[m]] = !0;
        for (var C = 0; C < l.length; C++) {
          var O = v.hasOwnProperty("$" + l[C].value);
          l[C].selected !== O && (l[C].selected = O), O && i && (l[C].defaultSelected = !0);
        }
      } else {
        for (var D = hr(Oa(a)), ee = null, j = 0; j < l.length; j++) {
          if (l[j].value === D) {
            l[j].selected = !0, i && (l[j].defaultSelected = !0);
            return;
          }
          ee === null && !l[j].disabled && (ee = l[j]);
        }
        ee !== null && (ee.selected = !0);
      }
    }
    function Jl(e, t) {
      return d({}, t, {
        value: void 0
      });
    }
    function Aa(e, t) {
      var a = e;
      Zl(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !sl && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"), sl = !0);
    }
    function Dp(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gr(a, !!t.multiple, i, !1) : t.defaultValue != null && Gr(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ap(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Gr(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gr(a, !!t.multiple, t.defaultValue, !0) : Gr(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function pm(e, t) {
      var a = e, i = t.value;
      i != null && Gr(a, !!t.multiple, i, !1);
    }
    var bs = !1;
    function pf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = d({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: hr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ho(e, t) {
      var a = e;
      fs.checkPropTypes("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bs && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components", Si() || "A component"), bs = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(l)) {
              if (!(l.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: Oa(i)
      };
    }
    function Za(e, t) {
      var a = e, i = Oa(t.value), l = Oa(t.defaultValue);
      if (i != null) {
        var c = hr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = hr(l));
    }
    function Es(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ss(e, t) {
      Za(e, t);
    }
    var eu = "http://www.w3.org/1999/xhtml", tu = "http://www.w3.org/1998/Math/MathML", dl = "http://www.w3.org/2000/svg", Cr = {
      html: eu,
      mathml: tu,
      svg: dl
    };
    function vf(e) {
      switch (e) {
        case "svg":
          return dl;
        case "math":
          return tu;
        default:
          return eu;
      }
    }
    function hf(e, t) {
      return e == null || e === eu ? vf(t) : e === dl && t === "foreignObject" ? eu : e;
    }
    var Np = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Cs, Pp = Np(function(e, t) {
      if (e.namespaceURI === Cr.svg && !("innerHTML" in e)) {
        Cs = Cs || document.createElement("div"), Cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), oa = 1, la = 3, mr = 8, Ci = 9, Ts = 11, nu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === la) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    };
    function Ti(e) {
      return e;
    }
    function vm(e) {
      return e;
    }
    function ru(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var mo = {
      animationend: ru("Animation", "AnimationEnd"),
      animationiteration: ru("Animation", "AnimationIteration"),
      animationstart: ru("Animation", "AnimationStart"),
      transitionend: ru("Transition", "TransitionEnd")
    }, xi = {}, Mp = {};
    Mn && (Mp = document.createElement("div").style, "AnimationEvent" in window || (delete mo.animationend.animation, delete mo.animationiteration.animation, delete mo.animationstart.animation), "TransitionEvent" in window || delete mo.transitionend.transition);
    function xs(e) {
      if (xi[e])
        return xi[e];
      if (!mo[e])
        return e;
      var t = mo[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Mp)
          return xi[e] = t[a];
      return e;
    }
    var mf = "abort", Fp = xs("animationend"), yf = xs("animationiteration"), gf = xs("animationstart"), er = "blur", yo = "canplay", go = "canplaythrough", ws = "cancel", wi = "change", au = "click", pl = "close", Ja = "compositionend", iu = "compositionstart", bf = "compositionupdate", ou = "contextmenu", Ef = "copy", Sf = "cut", Cf = "dblclick", bo = "auxclick", zp = "drag", lu = "dragend", Eo = "dragenter", Tf = "dragexit", uu = "dragleave", xf = "dragover", Rs = "dragstart", So = "drop", _s = "durationchange", Co = "emptied", wf = "encrypted", Rf = "ended", Mr = "error", Qr = "focus", ei = "gotpointercapture", su = "input", Na = "invalid", tr = "keydown", qr = "keypress", yr = "keyup", Ri = "load", ks = "loadstart", _f = "loadeddata", kf = "loadedmetadata", Os = "lostpointercapture", ti = "mousedown", cu = "mousemove", _i = "mouseout", ni = "mouseover", fu = "mouseup", du = "paste", Of = "pause", Df = "play", Af = "playing", Nf = "pointercancel", Pf = "pointerdown", Ds = "pointermove", Fr = "pointerout", Pt = "pointerover", yn = "pointerup", Pa = "progress", Bn = "ratechange", Ln = "reset", Ma = "scroll", ki = "seeked", ir = "seeking", Oi = "selectionchange", As = "stalled", To = "submit", vl = "suspend", pu = "textInput", Mf = "timeupdate", hl = "toggle", Ns = "touchcancel", Ps = "touchend", Ms = "touchmove", Ff = "touchstart", vu = xs("transitionend"), Fs = "volumechange", zs = "waiting", zf = "wheel", ml = [mf, yo, go, _s, Co, wf, Rf, Mr, _f, kf, ks, Of, Df, Af, Pa, Bn, ki, ir, As, vl, Mf, Fs, zs];
    function Lf(e) {
      return e;
    }
    var hm = typeof WeakMap == "function" ? WeakMap : Map, Lp = new hm();
    function ua(e) {
      var t = Lp.get(e);
      return t === void 0 && (t = /* @__PURE__ */ new Map(), Lp.set(e, t)), t;
    }
    function ri(e) {
      return e._reactInternalFiber;
    }
    function Uf(e) {
      return e._reactInternalFiber !== void 0;
    }
    function Up(e, t) {
      e._reactInternalFiber = t;
    }
    var $t = (
      /*              */
      0
    ), sa = (
      /*         */
      1
    ), An = (
      /*             */
      2
    ), Mt = (
      /*                */
      4
    ), Ip = (
      /*    */
      6
    ), xo = (
      /*              */
      8
    ), zr = (
      /*          */
      16
    ), If = (
      /*              */
      32
    ), Jt = (
      /*            */
      64
    ), Tr = (
      /*                   */
      128
    ), Di = (
      /*              */
      256
    ), Ai = (
      /*               */
      512
    ), Xr = (
      /*             */
      1024
    ), Ls = (
      /*    */
      1028
    ), jf = (
      /*   */
      932
    ), Hf = (
      /*        */
      2047
    ), yl = (
      /*            */
      2048
    ), xr = (
      /*         */
      4096
    ), Kr = T.ReactCurrentOwner;
    function wr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.effectTag & (An | Xr)) !== $t && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Te ? a : null;
    }
    function Us(e) {
      if (e.tag === W) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Is(e) {
      return e.tag === Te ? e.stateNode.containerInfo : null;
    }
    function Ni(e) {
      return wr(e) === e;
    }
    function Pi(e) {
      {
        var t = Kr.current;
        if (t !== null && t.tag === Ce) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Me(a.type) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ri(e);
      return l ? wr(l) === l : !1;
    }
    function $f(e) {
      if (wr(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function gl(e) {
      var t = e.alternate;
      if (!t) {
        var a = wr(e);
        if (a === null)
          throw Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var m = c.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var C = c.child; C; ) {
            if (C === i)
              return $f(c), e;
            if (C === l)
              return $f(c), t;
            C = C.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = c, l = v;
        else {
          for (var O = !1, D = c.child; D; ) {
            if (D === i) {
              O = !0, i = c, l = v;
              break;
            }
            if (D === l) {
              O = !0, l = c, i = v;
              break;
            }
            D = D.sibling;
          }
          if (!O) {
            for (D = v.child; D; ) {
              if (D === i) {
                O = !0, i = v, l = c;
                break;
              }
              if (D === l) {
                O = !0, l = v, i = c;
                break;
              }
              D = D.sibling;
            }
            if (!O)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Te)
        throw Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Vf(e) {
      var t = gl(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === _e || a.tag === Be)
          return a;
        if (a.child) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return null;
        for (; !a.sibling; ) {
          if (!a.return || a.return === t)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return null;
    }
    function hu(e) {
      var t = gl(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === _e || a.tag === Be || on)
          return a;
        if (a.child && a.tag !== Ae) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return null;
        for (; !a.sibling; ) {
          if (!a.return || a.return === t)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return null;
    }
    function wo(e, t) {
      if (t == null)
        throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");
      return e == null ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
    }
    function bl(e, t, a) {
      Array.isArray(e) ? e.forEach(t, a) : e && t.call(a, e);
    }
    var Mi = null, jp = function(e) {
      e && (St(e), e.isPersistent() || e.constructor.release(e));
    }, Hp = function(e) {
      return jp(e);
    };
    function js(e) {
      e !== null && (Mi = wo(Mi, e));
      var t = Mi;
      if (Mi = null, !!t) {
        if (bl(t, Hp), Mi)
          throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
        ae();
      }
    }
    function mu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === la ? t.parentNode : t;
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function yu(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    var gu = 10, Ro = [];
    function $p(e) {
      e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, Ro.length < gu && Ro.push(e);
    }
    function El(e, t, a, i) {
      if (Ro.length) {
        var l = Ro.pop();
        return l.topLevelType = e, l.eventSystemFlags = i, l.nativeEvent = t, l.targetInst = a, l;
      }
      return {
        topLevelType: e,
        eventSystemFlags: i,
        nativeEvent: t,
        targetInst: a,
        ancestors: []
      };
    }
    function Wf(e) {
      if (e.tag === Te)
        return e.stateNode.containerInfo;
      for (; e.return; )
        e = e.return;
      return e.tag !== Te ? null : e.stateNode.containerInfo;
    }
    function bu(e, t, a, i, l) {
      for (var c = null, v = 0; v < Pn.length; v++) {
        var m = Pn[v];
        if (m) {
          var C = m.extractEvents(e, t, a, i, l);
          C && (c = wo(c, C));
        }
      }
      return c;
    }
    function Fa(e, t, a, i, l) {
      var c = bu(e, t, a, i, l);
      js(c);
    }
    function Eu(e) {
      var t = e.targetInst, a = t;
      do {
        if (!a) {
          var i = e.ancestors;
          i.push(a);
          break;
        }
        var l = Wf(a);
        if (!l)
          break;
        var c = a.tag;
        (c === _e || c === Be) && e.ancestors.push(a), a = Ed(l);
      } while (a);
      for (var v = 0; v < e.ancestors.length; v++) {
        t = e.ancestors[v];
        var m = mu(e.nativeEvent), C = e.topLevelType, O = e.nativeEvent, D = e.eventSystemFlags;
        v === 0 && (D |= me), Fa(C, t, O, m, D);
      }
    }
    function Sl(e, t, a, i) {
      var l = El(e, a, i, t);
      try {
        gi(Eu, l);
      } finally {
        $p(l);
      }
    }
    function _o(e, t) {
      for (var a = ua(t), i = Nt[e], l = 0; l < i.length; l++) {
        var c = i[l];
        Hs(c, t, a);
      }
    }
    function Hs(e, t, a) {
      if (!a.has(e)) {
        switch (e) {
          case Ma:
            ec(Ma, t);
            break;
          case Qr:
          case er:
            ec(Qr, t), ec(er, t), a.set(er, null), a.set(Qr, null);
            break;
          case ws:
          case pl:
            yu(Lf(e)) && ec(e, t);
            break;
          case Na:
          case To:
          case Ln:
            break;
          default:
            var i = ml.indexOf(e) !== -1;
            i || un(e, t);
            break;
        }
        a.set(e, null);
      }
    }
    function Cl(e, t) {
      for (var a = ua(t), i = Nt[e], l = 0; l < i.length; l++) {
        var c = i[l];
        if (!a.has(c))
          return !1;
      }
      return !0;
    }
    var Bf;
    function Yf(e) {
      Bf = e;
    }
    var dn;
    function $s(e) {
      dn = e;
    }
    var Vs;
    function Ws(e) {
      Vs = e;
    }
    var Rr = !1, or = [], rn = null, gn = null, bn = null, Fi = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), ko = [];
    function Gf() {
      return or.length > 0;
    }
    var Oo = [ti, fu, Ns, Ps, Ff, bo, Cf, Nf, Pf, yn, lu, Rs, So, Ja, iu, tr, qr, yr, su, pu, pl, ws, Ef, Sf, du, au, wi, ou, Ln, To], Tl = [Qr, er, Eo, uu, ni, _i, Pt, Fr, ei, Os];
    function zi(e) {
      return Oo.indexOf(e) > -1;
    }
    function Su(e, t, a) {
      Hs(e, t, a);
    }
    function Bs(e, t) {
      var a = ua(t);
      Oo.forEach(function(i) {
        Su(i, t, a);
      }), Tl.forEach(function(i) {
        Su(i, t, a);
      });
    }
    function Ys(e, t, a, i, l) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: a | L,
        nativeEvent: l,
        container: i
      };
    }
    function Gs(e, t, a, i, l) {
      var c = Ys(e, t, a, i, l);
      or.push(c);
    }
    function Qf(e, t) {
      switch (e) {
        case Qr:
        case er:
          rn = null;
          break;
        case Eo:
        case uu:
          gn = null;
          break;
        case ni:
        case _i:
          bn = null;
          break;
        case Pt:
        case Fr: {
          var a = t.pointerId;
          Fi.delete(a);
          break;
        }
        case ei:
        case Os: {
          var i = t.pointerId;
          nr.delete(i);
          break;
        }
      }
    }
    function Do(e, t, a, i, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = Ys(t, a, i, l, c);
        if (t !== null) {
          var m = Dl(t);
          m !== null && dn(m);
        }
        return v;
      }
      return e.eventSystemFlags |= i, e;
    }
    function qf(e, t, a, i, l) {
      switch (t) {
        case Qr: {
          var c = l;
          return rn = Do(rn, e, t, a, i, c), !0;
        }
        case Eo: {
          var v = l;
          return gn = Do(gn, e, t, a, i, v), !0;
        }
        case ni: {
          var m = l;
          return bn = Do(bn, e, t, a, i, m), !0;
        }
        case Pt: {
          var C = l, O = C.pointerId;
          return Fi.set(O, Do(Fi.get(O) || null, e, t, a, i, C)), !0;
        }
        case ei: {
          var D = l, ee = D.pointerId;
          return nr.set(ee, Do(nr.get(ee) || null, e, t, a, i, D)), !0;
        }
      }
      return !1;
    }
    function Vp(e) {
      var t = Ed(e.target);
      if (t !== null) {
        var a = wr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === W) {
            var l = Us(a);
            if (l !== null) {
              e.blockedOn = l, h.unstable_runWithPriority(e.priority, function() {
                Vs(a);
              });
              return;
            }
          } else if (i === Te) {
            var c = a.stateNode;
            if (c.hydrate) {
              e.blockedOn = Is(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ao(e) {
      if (e.blockedOn !== null)
        return !1;
      var t = tc(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
      if (t !== null) {
        var a = Dl(t);
        return a !== null && dn(a), e.blockedOn = t, !1;
      }
      return !0;
    }
    function Xf(e, t, a) {
      Ao(e) && a.delete(t);
    }
    function Wp() {
      for (Rr = !1; or.length > 0; ) {
        var e = or[0];
        if (e.blockedOn !== null) {
          var t = Dl(e.blockedOn);
          t !== null && Bf(t);
          break;
        }
        var a = tc(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        a !== null ? e.blockedOn = a : or.shift();
      }
      rn !== null && Ao(rn) && (rn = null), gn !== null && Ao(gn) && (gn = null), bn !== null && Ao(bn) && (bn = null), Fi.forEach(Xf), nr.forEach(Xf);
    }
    function xl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Rr || (Rr = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, Wp)));
    }
    function Qs(e) {
      if (or.length > 0) {
        xl(or[0], e);
        for (var t = 1; t < or.length; t++) {
          var a = or[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      rn !== null && xl(rn, e), gn !== null && xl(gn, e), bn !== null && xl(bn, e);
      var i = function(m) {
        return xl(m, e);
      };
      Fi.forEach(i), nr.forEach(i);
      for (var l = 0; l < ko.length; l++) {
        var c = ko[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; ko.length > 0; ) {
        var v = ko[0];
        if (v.blockedOn !== null)
          break;
        Vp(v), v.blockedOn === null && ko.shift();
      }
    }
    function Bp(e, t, a) {
      e.addEventListener(t, a, !1);
    }
    function qs(e, t, a) {
      e.addEventListener(t, a, !0);
    }
    var Kf = {}, Xs = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new Map(), Zs = [er, "blur", ws, "cancel", au, "click", pl, "close", ou, "contextMenu", Ef, "copy", Sf, "cut", bo, "auxClick", Cf, "doubleClick", lu, "dragEnd", Rs, "dragStart", So, "drop", Qr, "focus", su, "input", Na, "invalid", tr, "keyDown", qr, "keyPress", yr, "keyUp", ti, "mouseDown", fu, "mouseUp", du, "paste", Of, "pause", Df, "play", Nf, "pointerCancel", Pf, "pointerDown", yn, "pointerUp", Bn, "rateChange", Ln, "reset", ki, "seeked", To, "submit", Ns, "touchCancel", Ps, "touchEnd", Ff, "touchStart", Fs, "volumeChange"], mm = [wi, Oi, pu, iu, Ja, bf], ym = [zp, "drag", Eo, "dragEnter", Tf, "dragExit", uu, "dragLeave", xf, "dragOver", cu, "mouseMove", _i, "mouseOut", ni, "mouseOver", Ds, "pointerMove", Fr, "pointerOut", Pt, "pointerOver", Ma, "scroll", hl, "toggle", Ms, "touchMove", zf, "wheel"], gm = [mf, "abort", Fp, "animationEnd", yf, "animationIteration", gf, "animationStart", yo, "canPlay", go, "canPlayThrough", _s, "durationChange", Co, "emptied", wf, "encrypted", Rf, "ended", Mr, "error", ei, "gotPointerCapture", Ri, "load", _f, "loadedData", kf, "loadedMetadata", ks, "loadStart", Os, "lostPointerCapture", Af, "playing", Pa, "progress", ir, "seeking", As, "stalled", vl, "suspend", Mf, "timeUpdate", vu, "transitionEnd", zs, "waiting"];
    function ca(e, t) {
      for (var a = 0; a < e.length; a += 2) {
        var i = e[a], l = e[a + 1], c = l[0].toUpperCase() + l.slice(1), v = "on" + c, m = {
          phasedRegistrationNames: {
            bubbled: v,
            captured: v + "Capture"
          },
          dependencies: [i],
          eventPriority: t
        };
        Ks.set(i, t), Xs.set(i, m), Kf[l] = m;
      }
    }
    function Li(e, t) {
      for (var a = 0; a < e.length; a++)
        Ks.set(e[a], t);
    }
    ca(Zs, bi), ca(ym, Wn), ca(gm, wa), Li(mm, bi);
    function No(e) {
      var t = Ks.get(e);
      return t === void 0 ? wa : t;
    }
    var Yp = h.unstable_UserBlockingPriority, Gp = h.unstable_runWithPriority, Cu = !0;
    function Zf(e) {
      Cu = !!e;
    }
    function Js() {
      return Cu;
    }
    function un(e, t) {
      fa(t, e, !1);
    }
    function ec(e, t) {
      fa(t, e, !0);
    }
    function fa(e, t, a) {
      var i;
      switch (No(t)) {
        case bi:
          i = Lr.bind(null, t, na, e);
          break;
        case Wn:
          i = Qp.bind(null, t, na, e);
          break;
        case wa:
        default:
          i = Tu.bind(null, t, na, e);
          break;
      }
      var l = Lf(t);
      a ? qs(e, l, i) : Bp(e, l, i);
    }
    function Lr(e, t, a, i) {
      nl(i.timeStamp), tl(Tu, e, t, a, i);
    }
    function Qp(e, t, a, i) {
      Gp(Yp, Tu.bind(null, e, t, a, i));
    }
    function Tu(e, t, a, i) {
      if (Cu) {
        if (Gf() && zi(e)) {
          Gs(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            a,
            i
          );
          return;
        }
        var l = tc(e, t, a, i);
        if (l === null) {
          Qf(e, i);
          return;
        }
        if (zi(e)) {
          Gs(l, e, t, a, i);
          return;
        }
        qf(l, e, t, a, i) || (Qf(e, i), Sl(e, t, i, null));
      }
    }
    function tc(e, t, a, i) {
      var l = mu(i), c = Ed(l);
      if (c !== null) {
        var v = wr(c);
        if (v === null)
          c = null;
        else {
          var m = v.tag;
          if (m === W) {
            var C = Us(v);
            if (C !== null)
              return C;
            c = null;
          } else if (m === Te) {
            var O = v.stateNode;
            if (O.hydrate)
              return Is(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return Sl(e, t, i, c), null;
    }
    var qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Po = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Xp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jf = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Po).forEach(function(e) {
      Jf.forEach(function(t) {
        Po[Xp(t, e)] = Po[e];
      });
    });
    function nc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Po.hasOwnProperty(e) && Po[e]) ? t + "px" : ("" + t).trim();
    }
    var ed = /([A-Z])/g, Kp = /^ms-/;
    function Zp(e) {
      return e.replace(ed, "-$1").toLowerCase().replace(Kp, "-ms-");
    }
    var rc = function() {
    };
    {
      var Jp = /^(?:webkit|moz|o)[A-Z]/, ai = /^-ms-/, ev = /-(.)/g, ac = /;\s*$/, Mo = {}, ic = {}, xu = !1, tv = !1, bm = function(e) {
        return e.replace(ev, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        Mo.hasOwnProperty(e) && Mo[e] || (Mo[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bm(e.replace(ai, "ms-"))
        ));
      }, Em = function(e) {
        Mo.hasOwnProperty(e) && Mo[e] || (Mo[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, nd = function(e, t) {
        ic.hasOwnProperty(t) && ic[t] || (ic[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ac, "")));
      }, Sm = function(e, t) {
        xu || (xu = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, nv = function(e, t) {
        tv || (tv = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rc = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Jp.test(e) ? Em(e) : ac.test(t) && nd(e, t), typeof t == "number" && (isNaN(t) ? Sm(e, t) : isFinite(t) || nv(e, t));
      };
    }
    var Cm = rc;
    function rv(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : Zp(i)) + ":", t += nc(i, l, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function rd(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Cm(i, t[i]);
          var c = nc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function Tm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ad(e) {
      var t = {};
      for (var a in e)
        for (var i = qp[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function av(e, t) {
      {
        if (!t)
          return;
        var a = ad(e), i = ad(t), l = {};
        for (var c in a) {
          var v = a[c], m = i[c];
          if (m && v !== m) {
            var C = v + "," + m;
            if (l[C])
              continue;
            l[C] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Tm(e[v]) ? "Removing" : "Updating", v, m);
          }
        }
      }
    }
    var iv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ov = d({
      menuitem: !0
    }, iv), id = "__html", wu = null;
    wu = T.ReactDebugCurrentFrame;
    function oc(e, t) {
      if (t) {
        if (ov[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + wu.getStackAddendum());
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && id in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + wu.getStackAddendum());
      }
    }
    function ii(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ru = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, lv = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Fo = {}, uv = new RegExp("^(aria)-[" + oe + "]*$"), xm = new RegExp("^(aria)[A-Z][" + oe + "]*$"), lc = Object.prototype.hasOwnProperty;
    function sv(e, t) {
      {
        if (lc.call(Fo, t) && Fo[t])
          return !0;
        if (xm.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = lv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Fo[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Fo[t] = !0, !0;
        }
        if (uv.test(t)) {
          var l = t.toLowerCase(), c = lv.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Fo[t] = !0, !1;
          if (t !== c)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Fo[t] = !0, !0;
        }
      }
      return !0;
    }
    function Yn(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = sv(e, i);
          l || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", c, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", c, e);
      }
    }
    function od(e, t) {
      ii(e, t) || Yn(e, t);
    }
    var Zr = !1;
    function za(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Zr && (Zr = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ui = function() {
    };
    {
      var Gn = {}, cv = Object.prototype.hasOwnProperty, _u = /^on./, uc = /^on[^A-Z]/, ld = new RegExp("^(aria)-[" + oe + "]*$"), mt = new RegExp("^(aria)[A-Z][" + oe + "]*$");
      Ui = function(e, t, a, i) {
        if (cv.call(Gn, t) && Gn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Gn[t] = !0, !0;
        if (i) {
          if (Ge.hasOwnProperty(t))
            return !0;
          var c = Cn.hasOwnProperty(l) ? Cn[l] : null;
          if (c != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, c), Gn[t] = !0, !0;
          if (_u.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Gn[t] = !0, !0;
        } else if (_u.test(t))
          return uc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Gn[t] = !0, !0;
        if (ld.test(t) || mt.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Gn[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Gn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Gn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Gn[t] = !0, !0;
        var v = rl(t), m = v !== null && v.type === Ya;
        if (Ru.hasOwnProperty(l)) {
          var C = Ru[l];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), Gn[t] = !0, !0;
        } else if (!m && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Gn[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Gn[t] = !0, !0) : m ? !0 : fn(t, a, v, !1) ? (Gn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Jn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Gn[t] = !0), !0);
      };
    }
    var Ur = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = Ui(e, l, t[l], a);
          c || i.push(l);
        }
        var v = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", v, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", v, e);
      }
    };
    function gt(e, t, a) {
      ii(e, t) || Ur(e, t, a);
    }
    var en = !1, wn = "dangerouslySetInnerHTML", zo = "suppressContentEditableWarning", Ir = "suppressHydrationWarning", wl = "autoFocus", La = "children", da = "style", Lo = "__html", Ii = Cr.html, sc, We, Uo, Rl, Jr, ku, ji, _l, pa, kl;
    {
      sc = {
        // Chrome is the only major browser not shipping <time>. But as of July
        // 2017 it intends to ship it due to widespread usage. We intentionally
        // *don't* warn for <time> even if it's unrecognized by Chrome because
        // it soon will be, and many apps have been using it anyway.
        time: !0,
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Uo = function(e, t) {
        od(e, t), za(e, t), gt(
          e,
          t,
          /* canUseEventSystem */
          !0
        );
      }, _l = Mn && !document.documentMode;
      var ud = /\r\n?/g, cc = /\u0000|\uFFFD/g;
      pa = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(ud, `
`).replace(cc, "");
      }, Rl = function(e, t) {
        if (!en) {
          var a = pa(t), i = pa(e);
          i !== a && (en = !0, y('Text content did not match. Server: "%s" Client: "%s"', i, a));
        }
      }, Jr = function(e, t, a) {
        if (!en) {
          var i = pa(a), l = pa(t);
          l !== i && (en = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
        }
      }, ku = function(e) {
        if (!en) {
          en = !0;
          var t = [];
          e.forEach(function(a) {
            t.push(a);
          }), y("Extra attributes from the server: %s", t);
        }
      }, ji = function(e, t) {
        t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, kl = function(e, t) {
        var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return a.innerHTML = t, a.innerHTML;
      };
    }
    function Qn(e, t) {
      var a = e.nodeType === Ci || e.nodeType === Ts, i = a ? e : e.ownerDocument;
      _o(t, i);
    }
    function Hi(e) {
      return e.nodeType === Ci ? e : e.ownerDocument;
    }
    function $i() {
    }
    function Io(e) {
      e.onclick = $i;
    }
    function fc(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === da)
            v && Object.freeze(v), rd(t, v);
          else if (c === wn) {
            var m = v ? v[Lo] : void 0;
            m != null && Pp(t, m);
          } else if (c === La)
            if (typeof v == "string") {
              var C = e !== "textarea" || v !== "";
              C && nu(t, v);
            } else
              typeof v == "number" && nu(t, "" + v);
          else
            c === zo || c === Ir || c === wl || (Ge.hasOwnProperty(c) ? v != null && (typeof v != "function" && ji(c, v), Qn(a, c)) : v != null && S(t, c, v, l));
        }
    }
    function jr(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], v = t[l + 1];
        c === da ? rd(e, v) : c === wn ? Pp(e, v) : c === La ? nu(e, v) : S(e, c, v, i);
      }
    }
    function fv(e, t, a, i) {
      var l, c = Hi(a), v, m = i;
      if (m === Ii && (m = vf(e)), m === Ii) {
        if (l = ii(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = c.createElement("div");
          C.innerHTML = "<script><\/script>";
          var O = C.firstChild;
          v = C.removeChild(O);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var D = v;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        v = c.createElementNS(m, e);
      return m === Ii && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(sc, e) && (sc[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function sd(e, t) {
      return Hi(t).createTextNode(e);
    }
    function wm(e, t, a, i) {
      var l = ii(t, a);
      Uo(t, a);
      var c;
      switch (t) {
        case "iframe":
        case "object":
        case "embed":
          un(Ri, e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < ml.length; v++)
            un(ml[v], e);
          c = a;
          break;
        case "source":
          un(Mr, e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          un(Mr, e), un(Ri, e), c = a;
          break;
        case "form":
          un(Ln, e), un(To, e), c = a;
          break;
        case "details":
          un(hl, e), c = a;
          break;
        case "input":
          sf(e, a), c = hs(e, a), un(Na, e), Qn(i, "onChange");
          break;
        case "option":
          ff(e, a), c = Da(e, a);
          break;
        case "select":
          Aa(e, a), c = Jl(e, a), un(Na, e), Qn(i, "onChange");
          break;
        case "textarea":
          ho(e, a), c = pf(e, a), un(Na, e), Qn(i, "onChange");
          break;
        default:
          c = a;
      }
      switch (oc(t, c), fc(t, e, i, c, l), t) {
        case "input":
          vo(e), ys(e, a, !1);
          break;
        case "textarea":
          vo(e), Es(e);
          break;
        case "option":
          df(e, a);
          break;
        case "select":
          Dp(e, a);
          break;
        default:
          typeof c.onClick == "function" && Io(e);
          break;
      }
    }
    function dv(e, t, a, i, l) {
      Uo(t, i);
      var c = null, v, m;
      switch (t) {
        case "input":
          v = hs(e, a), m = hs(e, i), c = [];
          break;
        case "option":
          v = Da(e, a), m = Da(e, i), c = [];
          break;
        case "select":
          v = Jl(e, a), m = Jl(e, i), c = [];
          break;
        case "textarea":
          v = pf(e, a), m = pf(e, i), c = [];
          break;
        default:
          v = a, m = i, typeof v.onClick != "function" && typeof m.onClick == "function" && Io(e);
          break;
      }
      oc(t, m);
      var C, O, D = null;
      for (C in v)
        if (!(m.hasOwnProperty(C) || !v.hasOwnProperty(C) || v[C] == null))
          if (C === da) {
            var ee = v[C];
            for (O in ee)
              ee.hasOwnProperty(O) && (D || (D = {}), D[O] = "");
          } else
            C === wn || C === La || C === zo || C === Ir || C === wl || (Ge.hasOwnProperty(C) ? c || (c = []) : (c = c || []).push(C, null));
      for (C in m) {
        var j = m[C], re = v != null ? v[C] : void 0;
        if (!(!m.hasOwnProperty(C) || j === re || j == null && re == null))
          if (C === da)
            if (j && Object.freeze(j), re) {
              for (O in re)
                re.hasOwnProperty(O) && (!j || !j.hasOwnProperty(O)) && (D || (D = {}), D[O] = "");
              for (O in j)
                j.hasOwnProperty(O) && re[O] !== j[O] && (D || (D = {}), D[O] = j[O]);
            } else
              D || (c || (c = []), c.push(C, D)), D = j;
          else if (C === wn) {
            var we = j ? j[Lo] : void 0, De = re ? re[Lo] : void 0;
            we != null && De !== we && (c = c || []).push(C, we);
          } else
            C === La ? re !== j && (typeof j == "string" || typeof j == "number") && (c = c || []).push(C, "" + j) : C === zo || C === Ir || (Ge.hasOwnProperty(C) ? (j != null && (typeof j != "function" && ji(C, j), Qn(l, C)), !c && re !== j && (c = [])) : (c = c || []).push(C, j));
      }
      return D && (av(D, m[da]), (c = c || []).push(da, D)), c;
    }
    function pv(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && ms(e, l);
      var c = ii(a, i), v = ii(a, l);
      switch (jr(e, t, c, v), a) {
        case "input":
          Xl(e, l);
          break;
        case "textarea":
          Za(e, l);
          break;
        case "select":
          Ap(e, l);
          break;
      }
    }
    function jo(e) {
      {
        var t = e.toLowerCase();
        return Ru.hasOwnProperty(t) && Ru[t] || null;
      }
    }
    function vv(e, t, a, i, l) {
      var c, v;
      switch (We = a[Ir] === !0, c = ii(t, a), Uo(t, a), t) {
        case "iframe":
        case "object":
        case "embed":
          un(Ri, e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < ml.length; m++)
            un(ml[m], e);
          break;
        case "source":
          un(Mr, e);
          break;
        case "img":
        case "image":
        case "link":
          un(Mr, e), un(Ri, e);
          break;
        case "form":
          un(Ln, e), un(To, e);
          break;
        case "details":
          un(hl, e);
          break;
        case "input":
          sf(e, a), un(Na, e), Qn(l, "onChange");
          break;
        case "option":
          ff(e, a);
          break;
        case "select":
          Aa(e, a), un(Na, e), Qn(l, "onChange");
          break;
        case "textarea":
          ho(e, a), un(Na, e), Qn(l, "onChange");
          break;
      }
      oc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var C = e.attributes, O = 0; O < C.length; O++) {
          var D = C[O].name.toLowerCase();
          switch (D) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(C[O].name);
          }
        }
      }
      var ee = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var re = a[j];
          if (j === La)
            typeof re == "string" ? e.textContent !== re && (We || Rl(e.textContent, re), ee = [La, re]) : typeof re == "number" && e.textContent !== "" + re && (We || Rl(e.textContent, re), ee = [La, "" + re]);
          else if (Ge.hasOwnProperty(j))
            re != null && (typeof re != "function" && ji(j, re), Qn(l, j));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof c == "boolean"
          ) {
            var we = void 0, De = rl(j);
            if (!We) {
              if (!(j === zo || j === Ir || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === wn) {
                  var st = e.innerHTML, dt = re ? re[Lo] : void 0, Bt = kl(e, dt ?? "");
                  Bt !== st && Jr(j, st, Bt);
                } else if (j === da) {
                  if (v.delete(j), _l) {
                    var kt = rv(re);
                    we = e.getAttribute("style"), kt !== we && Jr(j, we, kt);
                  }
                } else if (c)
                  v.delete(j.toLowerCase()), we = Ql(e, j, re), re !== we && Jr(j, we, re);
                else if (!dr(j, De, c) && !Ei(j, re, De, c)) {
                  var an = !1;
                  if (De !== null)
                    v.delete(De.attributeName), we = ss(e, j, re, De);
                  else {
                    var X = i;
                    if (X === Ii && (X = vf(t)), X === Ii)
                      v.delete(j.toLowerCase());
                    else {
                      var ie = jo(j);
                      ie !== null && ie !== j && (an = !0, v.delete(ie)), v.delete(j);
                    }
                    we = Ql(e, j, re);
                  }
                  re !== we && !an && Jr(j, we, re);
                }
              }
            }
          }
        }
      switch (v.size > 0 && !We && ku(v), t) {
        case "input":
          vo(e), ys(e, a, !0);
          break;
        case "textarea":
          vo(e), Es(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Io(e);
          break;
      }
      return ee;
    }
    function hv(e, t) {
      var a = e.nodeValue !== t;
      return a;
    }
    function cd(e, t) {
      Rl(e.nodeValue, t);
    }
    function Ou(e, t) {
      {
        if (en)
          return;
        en = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function mv(e, t) {
      {
        if (en)
          return;
        en = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function yv(e, t, a) {
      {
        if (en)
          return;
        en = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function fd(e, t) {
      {
        if (t === "" || en)
          return;
        en = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function gv(e, t, a) {
      switch (t) {
        case "input":
          cf(e, a);
          return;
        case "textarea":
          Ss(e, a);
          return;
        case "select":
          pm(e, a);
          return;
      }
    }
    function Du(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Vi(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Rm(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function bv(e, t) {
      for (var a = Vi(e), i = 0, l = 0; a; ) {
        if (a.nodeType === la) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Vi(Rm(a));
      }
    }
    function Ol(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, c = i.anchorOffset, v = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return _m(e, l, c, v, m);
    }
    function _m(e, t, a, i, l) {
      var c = 0, v = -1, m = -1, C = 0, O = 0, D = e, ee = null;
      e:
        for (; ; ) {
          for (var j = null; D === t && (a === 0 || D.nodeType === la) && (v = c + a), D === i && (l === 0 || D.nodeType === la) && (m = c + l), D.nodeType === la && (c += D.nodeValue.length), (j = D.firstChild) !== null; )
            ee = D, D = j;
          for (; ; ) {
            if (D === e)
              break e;
            if (ee === t && ++C === a && (v = c), ee === i && ++O === l && (m = c), (j = D.nextSibling) !== null)
              break;
            D = ee, ee = D.parentNode;
          }
          D = j;
        }
      return v === -1 || m === -1 ? null : {
        start: v,
        end: m
      };
    }
    function Ev(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), m = t.end === void 0 ? v : Math.min(t.end, c);
        if (!l.extend && v > m) {
          var C = m;
          m = v, v = C;
        }
        var O = bv(e, v), D = bv(e, m);
        if (O && D) {
          if (l.rangeCount === 1 && l.anchorNode === O.node && l.anchorOffset === O.offset && l.focusNode === D.node && l.focusOffset === D.offset)
            return;
          var ee = a.createRange();
          ee.setStart(O.node, O.offset), l.removeAllRanges(), v > m ? (l.addRange(ee), l.extend(D.node, D.offset)) : (ee.setEnd(D.node, D.offset), l.addRange(ee));
        }
      }
    }
    function Wi(e) {
      return e && e.nodeType === la;
    }
    function Sv(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Wi(e) ? !1 : Wi(t) ? Sv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function km(e) {
      return e && e.ownerDocument && Sv(e.ownerDocument.documentElement, e);
    }
    function Cv(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function dc() {
      for (var e = window, t = Du(); t instanceof e.HTMLIFrameElement; ) {
        if (Cv(t))
          e = t.contentWindow;
        else
          return t;
        t = Du(e.document);
      }
      return t;
    }
    function Au(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Om() {
      var e = dc();
      return {
        // Used by Flare
        activeElementDetached: null,
        focusedElem: e,
        selectionRange: Au(e) ? Ua(e) : null
      };
    }
    function Dm(e) {
      var t = dc(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && km(a)) {
        i !== null && Au(a) && dd(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === oa && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var m = l[v];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function Ua(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ol(e), t || {
        start: 0,
        end: 0
      };
    }
    function dd(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ev(e, t);
    }
    var Nu = function() {
    }, va = function() {
    };
    {
      var pc = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], oi = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], pd = oi.concat(["button"]), vd = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Tv = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      va = function(e, t) {
        var a = d({}, e || Tv), i = {
          tag: t
        };
        return oi.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), pd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), pc.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var xv = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return vd.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Ho = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, hd = {};
      Nu = function(e, t, a) {
        a = a || Tv;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = xv(e, l) ? null : i, v = c ? null : Ho(e, a), m = c || v;
        if (m) {
          var C = m.tag, O = Tt(), D = !!c + "|" + e + "|" + C + "|" + O;
          if (!hd[D]) {
            hd[D] = !0;
            var ee = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? ee = "Text nodes" : (ee = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : ee = "<" + e + ">", c) {
              var re = "";
              C === "table" && e === "tr" && (re += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", ee, C, j, re);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", ee, C);
          }
        }
      };
    }
    var Bi;
    Bi = "suppressHydrationWarning";
    var Pu = "$", vc = "/$", hc = "$?", Mu = "$!", md = "style", $o = null, yd = null;
    function Fu(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Am(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ci:
        case Ts: {
          t = i === Ci ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : hf(null, "");
          break;
        }
        default: {
          var c = i === mr ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = hf(v, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), C = va(null, m);
        return {
          namespace: a,
          ancestorInfo: C
        };
      }
    }
    function wv(e, t, a) {
      {
        var i = e, l = hf(i.namespace, t), c = va(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function tb(e) {
      return e;
    }
    function n(e) {
      $o = Js(), yd = Om(), Zf(!1);
    }
    function r(e) {
      Dm(yd), Zf($o), $o = null, yd = null;
    }
    function o(e, t, a, i, l) {
      var c;
      {
        var v = i;
        if (Nu(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, C = va(v.ancestorInfo, e);
          Nu(null, m, C);
        }
        c = v.namespace;
      }
      var O = fv(e, t, a, c);
      return _v(l, O), zm(O, t), O;
    }
    function u(e, t) {
      e.appendChild(t);
    }
    function f(e, t, a, i, l) {
      return wm(e, t, a, i), Fu(t, a);
    }
    function g(e, t, a, i, l, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, C = va(v.ancestorInfo, t);
          Nu(null, m, C);
        }
      }
      return dv(e, t, a, i, l);
    }
    function b(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _(e, t) {
      return !!t.hidden;
    }
    function Q(e, t, a, i) {
      {
        var l = a;
        Nu(null, e, l.ancestorInfo);
      }
      var c = sd(e, t);
      return _v(i, c), c;
    }
    var Y = typeof setTimeout == "function" ? setTimeout : void 0, Fe = typeof clearTimeout == "function" ? clearTimeout : void 0, je = -1;
    function _t(e, t, a, i) {
      Fu(t, a) && e.focus();
    }
    function zt(e, t, a, i, l, c) {
      zm(e, l), pv(e, t, a, i, l);
    }
    function Hr(e) {
      nu(e, "");
    }
    function rr(e, t, a) {
      e.nodeValue = a;
    }
    function I(e, t) {
      e.appendChild(t);
    }
    function F(e, t) {
      var a;
      e.nodeType === mr ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Io(a);
    }
    function Z(e, t, a) {
      e.insertBefore(t, a);
    }
    function ve(e, t, a) {
      e.nodeType === mr ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ke(e, t) {
      e.removeChild(t);
    }
    function He(e, t) {
      e.nodeType === mr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function ut(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Dt(e) {
      e.nodeValue = "";
    }
    function En(e, t) {
      e = e;
      var a = t[md], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = nc("display", i);
    }
    function Et(e, t) {
      e.nodeValue = t;
    }
    function Yi(e, t, a) {
      return e.nodeType !== oa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nm(e, t) {
      return t === "" || e.nodeType !== la ? null : e;
    }
    function gT(e) {
      return e.data === hc;
    }
    function bT(e) {
      return e.data === Mu;
    }
    function nb(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === oa || t === la)
          break;
      }
      return e;
    }
    function Rv(e) {
      return nb(e.nextSibling);
    }
    function rb(e) {
      return nb(e.firstChild);
    }
    function ET(e, t, a, i, l, c) {
      _v(c, e), zm(e, a);
      var v;
      {
        var m = l;
        v = m.namespace;
      }
      return vv(e, t, a, v, i);
    }
    function ST(e, t, a) {
      return _v(a, e), hv(e, t);
    }
    function CT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === mr) {
          var i = t.data;
          if (i === vc) {
            if (a === 0)
              return Rv(t);
            a--;
          } else
            (i === Pu || i === Mu || i === hc) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function ab(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === mr) {
          var i = t.data;
          if (i === Pu || i === Mu || i === hc) {
            if (a === 0)
              return t;
            a--;
          } else
            i === vc && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function TT(e) {
      Qs(e);
    }
    function xT(e) {
      Qs(e);
    }
    function wT(e, t, a) {
      cd(t, a);
    }
    function RT(e, t, a, i, l) {
      t[Bi] !== !0 && cd(i, l);
    }
    function _T(e, t) {
      t.nodeType === oa ? Ou(e, t) : t.nodeType === mr || mv(e, t);
    }
    function kT(e, t, a, i) {
      t[Bi] !== !0 && (i.nodeType === oa ? Ou(a, i) : i.nodeType === mr || mv(a, i));
    }
    function OT(e, t, a) {
      yv(e, t);
    }
    function DT(e, t) {
      fd(e, t);
    }
    function AT(e, t, a, i, l) {
      t[Bi] !== !0 && yv(a, i);
    }
    function NT(e, t, a, i) {
      t[Bi] !== !0 && fd(a, i);
    }
    function PT(e, t, a) {
      t[Bi];
    }
    var Pm = Math.random().toString(36).slice(2), gd = "__reactInternalInstance$" + Pm, ib = "__reactEventHandlers$" + Pm, bd = "__reactContainere$" + Pm;
    function _v(e, t) {
      t[gd] = e;
    }
    function MT(e, t) {
      t[bd] = e;
    }
    function ob(e) {
      e[bd] = null;
    }
    function Mm(e) {
      return !!e[bd];
    }
    function Ed(e) {
      var t = e[gd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bd] || a[gd], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = ab(e); l !== null; ) {
              var c = l[gd];
              if (c)
                return c;
              l = ab(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Dl(e) {
      var t = e[gd] || e[bd];
      return t && (t.tag === _e || t.tag === Be || t.tag === W || t.tag === Te) ? t : null;
    }
    function zu(e) {
      if (e.tag === _e || e.tag === Be)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Fm(e) {
      return e[ib] || null;
    }
    function zm(e, t) {
      e[ib] = t;
    }
    function Vo(e) {
      do
        e = e.return;
      while (e && e.tag !== _e);
      return e || null;
    }
    function FT(e, t) {
      for (var a = 0, i = e; i; i = Vo(i))
        a++;
      for (var l = 0, c = t; c; c = Vo(c))
        l++;
      for (; a - l > 0; )
        e = Vo(e), a--;
      for (; l - a > 0; )
        t = Vo(t), l--;
      for (var v = a; v--; ) {
        if (e === t || e === t.alternate)
          return e;
        e = Vo(e), t = Vo(t);
      }
      return null;
    }
    function zT(e, t, a) {
      for (var i = []; e; )
        i.push(e), e = Vo(e);
      var l;
      for (l = i.length; l-- > 0; )
        t(i[l], "captured", a);
      for (l = 0; l < i.length; l++)
        t(i[l], "bubbled", a);
    }
    function LT(e, t, a, i, l) {
      for (var c = e && t ? FT(e, t) : null, v = []; !(!e || e === c); ) {
        var m = e.alternate;
        if (m !== null && m === c)
          break;
        v.push(e), e = Vo(e);
      }
      for (var C = []; !(!t || t === c); ) {
        var O = t.alternate;
        if (O !== null && O === c)
          break;
        C.push(t), t = Vo(t);
      }
      for (var D = 0; D < v.length; D++)
        a(v[D], "bubbled", i);
      for (var ee = C.length; ee-- > 0; )
        a(C[ee], "captured", l);
    }
    function UT(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function IT(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && UT(t));
        default:
          return !1;
      }
    }
    function lb(e, t) {
      var a, i = e.stateNode;
      if (!i)
        return null;
      var l = ye(i);
      if (!l || (a = l[t], IT(t, e.type, l)))
        return null;
      if (!(!a || typeof a == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type.");
      return a;
    }
    function jT(e, t, a) {
      var i = t.dispatchConfig.phasedRegistrationNames[a];
      return lb(e, i);
    }
    function HT(e, t, a) {
      e || y("Dispatching inst must not be null");
      var i = jT(e, a, t);
      i && (a._dispatchListeners = wo(a._dispatchListeners, i), a._dispatchInstances = wo(a._dispatchInstances, e));
    }
    function $T(e) {
      e && e.dispatchConfig.phasedRegistrationNames && zT(e._targetInst, HT, e);
    }
    function ub(e, t, a) {
      if (e && a && a.dispatchConfig.registrationName) {
        var i = a.dispatchConfig.registrationName, l = lb(e, i);
        l && (a._dispatchListeners = wo(a._dispatchListeners, l), a._dispatchInstances = wo(a._dispatchInstances, e));
      }
    }
    function VT(e) {
      e && e.dispatchConfig.registrationName && ub(e._targetInst, null, e);
    }
    function mc(e) {
      bl(e, $T);
    }
    function WT(e, t, a, i) {
      LT(a, i, ub, e, t);
    }
    function BT(e) {
      bl(e, VT);
    }
    var Sd = null, Lm = null, Cd = null;
    function YT(e) {
      return Sd = e, Lm = cb(), !0;
    }
    function GT() {
      Sd = null, Lm = null, Cd = null;
    }
    function sb() {
      if (Cd)
        return Cd;
      var e, t = Lm, a = t.length, i, l = cb(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[c - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Cd = l.slice(e, m), Cd;
    }
    function cb() {
      return "value" in Sd ? Sd.value : Sd.textContent;
    }
    var QT = 10, qT = {
      type: null,
      target: null,
      // currentTarget is set when dispatching; no use in copying it here
      currentTarget: function() {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    function kv() {
      return !0;
    }
    function Lu() {
      return !1;
    }
    function ha(e, t, a, i) {
      delete this.nativeEvent, delete this.preventDefault, delete this.stopPropagation, delete this.isDefaultPrevented, delete this.isPropagationStopped, this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = a;
      var l = this.constructor.Interface;
      for (var c in l)
        if (l.hasOwnProperty(c)) {
          delete this[c];
          var v = l[c];
          v ? this[c] = v(a) : c === "target" ? this.target = i : this[c] = a[c];
        }
      var m = a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1;
      return m ? this.isDefaultPrevented = kv : this.isDefaultPrevented = Lu, this.isPropagationStopped = Lu, this;
    }
    d(ha.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = kv);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = kv);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
        this.isPersistent = kv;
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: Lu,
      /**
       * `PooledClass` looks for `destructor` on each instance it releases.
       */
      destructor: function() {
        var e = this.constructor.Interface;
        for (var t in e)
          Object.defineProperty(this, t, yc(t, e[t]));
        this.dispatchConfig = null, this._targetInst = null, this.nativeEvent = null, this.isDefaultPrevented = Lu, this.isPropagationStopped = Lu, this._dispatchListeners = null, this._dispatchInstances = null, Object.defineProperty(this, "nativeEvent", yc("nativeEvent", null)), Object.defineProperty(this, "isDefaultPrevented", yc("isDefaultPrevented", Lu)), Object.defineProperty(this, "isPropagationStopped", yc("isPropagationStopped", Lu)), Object.defineProperty(this, "preventDefault", yc("preventDefault", function() {
        })), Object.defineProperty(this, "stopPropagation", yc("stopPropagation", function() {
        }));
      }
    }), ha.Interface = qT, ha.extend = function(e) {
      var t = this, a = function() {
      };
      a.prototype = t.prototype;
      var i = new a();
      function l() {
        return t.apply(this, arguments);
      }
      return d(i, l.prototype), l.prototype = i, l.prototype.constructor = l, l.Interface = d({}, t.Interface, e), l.extend = t.extend, fb(l), l;
    }, fb(ha);
    function yc(e, t) {
      var a = typeof t == "function";
      return {
        configurable: !0,
        set: i,
        get: l
      };
      function i(v) {
        var m = a ? "setting the method" : "setting the property";
        return c(m, "This is effectively a no-op"), v;
      }
      function l() {
        var v = a ? "accessing the method" : "accessing the property", m = a ? "This is a no-op function" : "This is set to null";
        return c(v, m), t;
      }
      function c(v, m) {
        y("This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", v, e, m);
      }
    }
    function XT(e, t, a, i) {
      var l = this;
      if (l.eventPool.length) {
        var c = l.eventPool.pop();
        return l.call(c, e, t, a, i), c;
      }
      return new l(e, t, a, i);
    }
    function KT(e) {
      var t = this;
      if (!(e instanceof t))
        throw Error("Trying to release an event instance into a pool of a different type.");
      e.destructor(), t.eventPool.length < QT && t.eventPool.push(e);
    }
    function fb(e) {
      e.eventPool = [], e.getPooled = XT, e.release = KT;
    }
    var ZT = ha.extend({
      data: null
    }), JT = ha.extend({
      data: null
    }), ex = [9, 13, 27, 32], db = 229, Um = Mn && "CompositionEvent" in window, Td = null;
    Mn && "documentMode" in document && (Td = document.documentMode);
    var tx = Mn && "TextEvent" in window && !Td, pb = Mn && (!Um || Td && Td > 8 && Td <= 11), vb = 32, hb = String.fromCharCode(vb), Wo = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: [Ja, qr, pu, du]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: [er, Ja, tr, qr, yr, ti]
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: [er, iu, tr, qr, yr, ti]
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: [er, bf, tr, qr, yr, ti]
      }
    }, mb = !1;
    function nx(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function rx(e) {
      switch (e) {
        case iu:
          return Wo.compositionStart;
        case Ja:
          return Wo.compositionEnd;
        case bf:
          return Wo.compositionUpdate;
      }
    }
    function ax(e, t) {
      return e === tr && t.keyCode === db;
    }
    function yb(e, t) {
      switch (e) {
        case yr:
          return ex.indexOf(t.keyCode) !== -1;
        case tr:
          return t.keyCode !== db;
        case qr:
        case ti:
        case er:
          return !0;
        default:
          return !1;
      }
    }
    function gb(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function bb(e) {
      return e.locale === "ko";
    }
    var gc = !1;
    function ix(e, t, a, i) {
      var l, c;
      if (Um ? l = rx(e) : gc ? yb(e, a) && (l = Wo.compositionEnd) : ax(e, a) && (l = Wo.compositionStart), !l)
        return null;
      pb && !bb(a) && (!gc && l === Wo.compositionStart ? gc = YT(i) : l === Wo.compositionEnd && gc && (c = sb()));
      var v = ZT.getPooled(l, t, a, i);
      if (c)
        v.data = c;
      else {
        var m = gb(a);
        m !== null && (v.data = m);
      }
      return mc(v), v;
    }
    function ox(e, t) {
      switch (e) {
        case Ja:
          return gb(t);
        case qr:
          var a = t.which;
          return a !== vb ? null : (mb = !0, hb);
        case pu:
          var i = t.data;
          return i === hb && mb ? null : i;
        default:
          return null;
      }
    }
    function lx(e, t) {
      if (gc) {
        if (e === Ja || !Um && yb(e, t)) {
          var a = sb();
          return GT(), gc = !1, a;
        }
        return null;
      }
      switch (e) {
        case du:
          return null;
        case qr:
          if (!nx(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case Ja:
          return pb && !bb(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ux(e, t, a, i) {
      var l;
      if (tx ? l = ox(e, a) : l = lx(e, a), !l)
        return null;
      var c = JT.getPooled(Wo.beforeInput, t, a, i);
      return c.data = l, mc(c), c;
    }
    var sx = {
      eventTypes: Wo,
      extractEvents: function(e, t, a, i, l) {
        var c = ix(e, t, a, i), v = ux(e, t, a, i);
        return c === null ? v : v === null ? c : [c, v];
      }
    }, cx = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Eb(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!cx[e.type] : t === "textarea";
    }
    var Sb = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: [er, wi, au, Qr, su, tr, yr, Oi]
      }
    };
    function Cb(e, t, a) {
      var i = ha.getPooled(Sb.change, e, t, a);
      return i.type = "change", ct(a), mc(i), i;
    }
    var xd = null, wd = null;
    function fx(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function dx(e) {
      var t = Cb(wd, e, mu(e));
      Ba(px, t);
    }
    function px(e) {
      js(e);
    }
    function Ov(e) {
      var t = zu(e);
      if (ps(t))
        return e;
    }
    function vx(e, t) {
      if (e === wi)
        return t;
    }
    var Im = !1;
    Mn && (Im = yu("input") && (!document.documentMode || document.documentMode > 9));
    function hx(e, t) {
      xd = e, wd = t, xd.attachEvent("onpropertychange", xb);
    }
    function Tb() {
      xd && (xd.detachEvent("onpropertychange", xb), xd = null, wd = null);
    }
    function xb(e) {
      e.propertyName === "value" && Ov(wd) && dx(e);
    }
    function mx(e, t, a) {
      e === Qr ? (Tb(), hx(t, a)) : e === er && Tb();
    }
    function yx(e, t) {
      if (e === Oi || e === yr || e === tr)
        return Ov(wd);
    }
    function gx(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function bx(e, t) {
      if (e === au)
        return Ov(t);
    }
    function Ex(e, t) {
      if (e === su || e === wi)
        return Ov(t);
    }
    function Sx(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Kl(e, "number", e.value);
    }
    var Cx = {
      eventTypes: Sb,
      _isInputEventSupported: Im,
      extractEvents: function(e, t, a, i, l) {
        var c = t ? zu(t) : window, v, m;
        if (fx(c) ? v = vx : Eb(c) ? Im ? v = Ex : (v = yx, m = mx) : gx(c) && (v = bx), v) {
          var C = v(e, t);
          if (C) {
            var O = Cb(C, a, i);
            return O;
          }
        }
        m && m(e, c, t), e === er && Sx(c);
      }
    }, Rd = ha.extend({
      view: null,
      detail: null
    }), Tx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function xx(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Tx[e];
      return i ? !!a[i] : !1;
    }
    function jm(e) {
      return xx;
    }
    var wb = 0, Rb = 0, _b = !1, kb = !1, _d = Rd.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: jm,
      button: null,
      buttons: null,
      relatedTarget: function(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      movementX: function(e) {
        if ("movementX" in e)
          return e.movementX;
        var t = wb;
        return wb = e.screenX, _b ? e.type === "mousemove" ? e.screenX - t : 0 : (_b = !0, 0);
      },
      movementY: function(e) {
        if ("movementY" in e)
          return e.movementY;
        var t = Rb;
        return Rb = e.screenY, kb ? e.type === "mousemove" ? e.screenY - t : 0 : (kb = !0, 0);
      }
    }), Ob = _d.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null
    }), kd = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: [_i, ni]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: [_i, ni]
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: [Fr, Pt]
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: [Fr, Pt]
      }
    }, wx = {
      eventTypes: kd,
      /**
       * For almost every interaction we care about, there will be both a top-level
       * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
       * we do not extract duplicate events. However, moving the mouse into the
       * browser from outside will not fire a `mouseout` event. In this case, we use
       * the `mouseover` top-level event.
       */
      extractEvents: function(e, t, a, i, l) {
        var c = e === ni || e === Pt, v = e === _i || e === Fr;
        if (c && !(l & L) && (a.relatedTarget || a.fromElement) || !v && !c)
          return null;
        var m;
        if (i.window === i)
          m = i;
        else {
          var C = i.ownerDocument;
          C ? m = C.defaultView || C.parentWindow : m = window;
        }
        var O, D;
        if (v) {
          O = t;
          var ee = a.relatedTarget || a.toElement;
          if (D = ee ? Ed(ee) : null, D !== null) {
            var j = wr(D);
            (D !== j || D.tag !== _e && D.tag !== Be) && (D = null);
          }
        } else
          O = null, D = t;
        if (O === D)
          return null;
        var re, we, De, st;
        e === _i || e === ni ? (re = _d, we = kd.mouseLeave, De = kd.mouseEnter, st = "mouse") : (e === Fr || e === Pt) && (re = Ob, we = kd.pointerLeave, De = kd.pointerEnter, st = "pointer");
        var dt = O == null ? m : zu(O), Bt = D == null ? m : zu(D), kt = re.getPooled(we, O, a, i);
        kt.type = st + "leave", kt.target = dt, kt.relatedTarget = Bt;
        var an = re.getPooled(De, D, a, i);
        return an.type = st + "enter", an.target = Bt, an.relatedTarget = dt, WT(kt, an, O, D), l & me ? [kt, an] : [kt];
      }
    };
    function Rx(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Uu = typeof Object.is == "function" ? Object.is : Rx, _x = Object.prototype.hasOwnProperty;
    function Od(e, t) {
      if (Uu(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++)
        if (!_x.call(t, a[l]) || !Uu(e[a[l]], t[a[l]]))
          return !1;
      return !0;
    }
    var kx = Mn && "documentMode" in document && document.documentMode <= 11, Db = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: [er, ou, lu, Qr, tr, yr, ti, fu, Oi]
      }
    }, bc = null, Hm = null, Dd = null, $m = !1;
    function Ox(e) {
      if ("selectionStart" in e && Au(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Ab(e) {
      return e.window === e ? e.document : e.nodeType === Ci ? e : e.ownerDocument;
    }
    function Nb(e, t) {
      var a = Ab(t);
      if ($m || bc == null || bc !== Du(a))
        return null;
      var i = Ox(bc);
      if (!Dd || !Od(Dd, i)) {
        Dd = i;
        var l = ha.getPooled(Db.select, Hm, e, t);
        return l.type = "select", l.target = bc, mc(l), l;
      }
      return null;
    }
    var Dx = {
      eventTypes: Db,
      extractEvents: function(e, t, a, i, l, c) {
        var v = c || Ab(i);
        if (!v || !Cl("onSelect", v))
          return null;
        var m = t ? zu(t) : window;
        switch (e) {
          case Qr:
            (Eb(m) || m.contentEditable === "true") && (bc = m, Hm = t, Dd = null);
            break;
          case er:
            bc = null, Hm = null, Dd = null;
            break;
          case ti:
            $m = !0;
            break;
          case ou:
          case fu:
          case lu:
            return $m = !1, Nb(a, i);
          case Oi:
            if (kx)
              break;
          case tr:
          case yr:
            return Nb(a, i);
        }
        return null;
      }
    }, Ax = ha.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }), Nx = ha.extend({
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Px = Rd.extend({
      relatedTarget: null
    });
    function Dv(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    var Mx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Fx = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function zx(e) {
      if (e.key) {
        var t = Mx[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Dv(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Fx[e.keyCode] || "Unidentified" : "";
    }
    var Lx = Rd.extend({
      key: zx,
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: jm,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Dv(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Dv(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ux = _d.extend({
      dataTransfer: null
    }), Ix = Rd.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: jm
    }), jx = ha.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }), Hx = _d.extend({
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: null,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: null
    }), $x = [mf, ws, yo, go, pl, _s, Co, wf, Rf, Mr, su, Na, Ri, _f, kf, ks, Of, Df, Af, Pa, Bn, Ln, ki, ir, As, To, vl, Mf, hl, Fs, zs], Vx = {
      // simpleEventPluginEventTypes gets populated from
      // the DOMEventProperties module.
      eventTypes: Kf,
      extractEvents: function(e, t, a, i, l) {
        var c = Xs.get(e);
        if (!c)
          return null;
        var v;
        switch (e) {
          case qr:
            if (Dv(a) === 0)
              return null;
          case tr:
          case yr:
            v = Lx;
            break;
          case er:
          case Qr:
            v = Px;
            break;
          case au:
            if (a.button === 2)
              return null;
          case bo:
          case Cf:
          case ti:
          case cu:
          case fu:
          case _i:
          case ni:
          case ou:
            v = _d;
            break;
          case zp:
          case lu:
          case Eo:
          case Tf:
          case uu:
          case xf:
          case Rs:
          case So:
            v = Ux;
            break;
          case Ns:
          case Ps:
          case Ms:
          case Ff:
            v = Ix;
            break;
          case Fp:
          case yf:
          case gf:
            v = Ax;
            break;
          case vu:
            v = jx;
            break;
          case Ma:
            v = Rd;
            break;
          case zf:
            v = Hx;
            break;
          case Ef:
          case Sf:
          case du:
            v = Nx;
            break;
          case ei:
          case Os:
          case Nf:
          case Pf:
          case Ds:
          case Fr:
          case Pt:
          case yn:
            v = Ob;
            break;
          default:
            $x.indexOf(e) === -1 && y("SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.", e), v = ha;
            break;
        }
        var m = v.getPooled(c, t, a, i);
        return mc(m), m;
      }
    }, Wx = ["ResponderEventPlugin", "SimpleEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
    ur(Wx), it(Fm, Dl, zu), _n({
      SimpleEventPlugin: Vx,
      EnterLeaveEventPlugin: wx,
      ChangeEventPlugin: Cx,
      SelectEventPlugin: Dx,
      BeforeInputEventPlugin: sx
    });
    var Pb = "⚛", Bx = "⛔", _r = typeof performance < "u" && typeof performance.mark == "function" && typeof performance.clearMarks == "function" && typeof performance.measure == "function" && typeof performance.clearMeasures == "function", Iu = null, Gi = null, ju = null, Av = !1, Nv = !1, Vm = !1, Ad = 0, Qi = 0, Pv = /* @__PURE__ */ new Set(), Wm = function(e) {
      return Pb + " " + e;
    }, Yx = function(e, t) {
      var a = t ? Bx + " " : Pb + " ", i = t ? " Warning: " + t : "";
      return "" + a + e + i;
    }, Ec = function(e) {
      performance.mark(Wm(e));
    }, Gx = function(e) {
      performance.clearMarks(Wm(e));
    }, Sc = function(e, t, a) {
      var i = Wm(t), l = Yx(e, a);
      try {
        performance.measure(l, i);
      } catch {
      }
      performance.clearMarks(i), performance.clearMeasures(l);
    }, Bm = function(e, t) {
      return e + " (#" + t + ")";
    }, Ym = function(e, t, a) {
      return a === null ? e + " [" + (t ? "update" : "mount") + "]" : e + "." + a;
    }, Gm = function(e, t) {
      var a = Me(e.type) || "Unknown", i = e._debugID, l = e.alternate !== null, c = Ym(a, l, t);
      if (Av && Pv.has(c))
        return !1;
      Pv.add(c);
      var v = Bm(c, i);
      return Ec(v), !0;
    }, Mb = function(e, t) {
      var a = Me(e.type) || "Unknown", i = e._debugID, l = e.alternate !== null, c = Ym(a, l, t), v = Bm(c, i);
      Gx(v);
    }, Mv = function(e, t, a) {
      var i = Me(e.type) || "Unknown", l = e._debugID, c = e.alternate !== null, v = Ym(i, c, t), m = Bm(v, l);
      Sc(v, m, a);
    }, Fv = function(e) {
      switch (e.tag) {
        case Te:
        case _e:
        case Be:
        case Ae:
        case yt:
        case U:
        case ne:
        case be:
          return !0;
        default:
          return !1;
      }
    }, Qx = function() {
      Gi !== null && ju !== null && Mb(ju, Gi), ju = null, Gi = null, Vm = !1;
    }, qx = function() {
      for (var e = Iu; e; )
        e._debugIsCurrentlyTiming && Mv(e, null, null), e = e.return;
    }, Fb = function(e) {
      e.return !== null && Fb(e.return), e._debugIsCurrentlyTiming && Gm(e, null);
    }, Xx = function() {
      Iu !== null && Fb(Iu);
    };
    function zv() {
      Qi++;
    }
    function Kx() {
      Av && (Nv = !0), Gi !== null && Gi !== "componentWillMount" && Gi !== "componentWillReceiveProps" && (Vm = !0);
    }
    function zb(e) {
      {
        if (!_r || Fv(e) || (Iu = e, !Gm(e, null)))
          return;
        e._debugIsCurrentlyTiming = !0;
      }
    }
    function Lb(e) {
      {
        if (!_r || Fv(e))
          return;
        e._debugIsCurrentlyTiming = !1, Mb(e, null);
      }
    }
    function Ub(e) {
      {
        if (!_r || Fv(e) || (Iu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1, Mv(e, null, null);
      }
    }
    function Zx(e) {
      {
        if (!_r || Fv(e) || (Iu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1;
        var t = e.tag === W ? "Rendering was suspended" : "An error was thrown inside this error boundary";
        Mv(e, null, t);
      }
    }
    function qi(e, t) {
      {
        if (!_r || (Qx(), !Gm(e, t)))
          return;
        ju = e, Gi = t;
      }
    }
    function Xi() {
      {
        if (!_r)
          return;
        if (Gi !== null && ju !== null) {
          var e = Vm ? "Scheduled a cascading update" : null;
          Mv(ju, Gi, e);
        }
        Gi = null, ju = null;
      }
    }
    function Ib(e) {
      {
        if (Iu = e, !_r)
          return;
        Ad = 0, Ec("(React Tree Reconciliation)"), Xx();
      }
    }
    function jb(e, t) {
      {
        if (!_r)
          return;
        var a = null;
        if (e !== null)
          if (e.tag === Te)
            a = "A top-level update interrupted the previous render";
          else {
            var i = Me(e.type) || "Unknown";
            a = "An update to " + i + " interrupted the previous render";
          }
        else
          Ad > 1 && (a = "There were cascading updates");
        Ad = 0;
        var l = t ? "(React Tree Reconciliation: Completed Root)" : "(React Tree Reconciliation: Yielded)";
        qx(), Sc(l, "(React Tree Reconciliation)", a);
      }
    }
    function Jx() {
      {
        if (!_r)
          return;
        Av = !0, Nv = !1, Pv.clear(), Ec("(Committing Changes)");
      }
    }
    function ew() {
      {
        if (!_r)
          return;
        var e = null;
        Nv ? e = "Lifecycle hook scheduled a cascading update" : Ad > 0 && (e = "Caused by a cascading update in earlier commit"), Nv = !1, Ad++, Av = !1, Pv.clear(), Sc("(Committing Changes)", "(Committing Changes)", e);
      }
    }
    function Hb() {
      {
        if (!_r)
          return;
        Qi = 0, Ec("(Committing Snapshot Effects)");
      }
    }
    function $b() {
      {
        if (!_r)
          return;
        var e = Qi;
        Qi = 0, Sc("(Committing Snapshot Effects: " + e + " Total)", "(Committing Snapshot Effects)", null);
      }
    }
    function Vb() {
      {
        if (!_r)
          return;
        Qi = 0, Ec("(Committing Host Effects)");
      }
    }
    function Wb() {
      {
        if (!_r)
          return;
        var e = Qi;
        Qi = 0, Sc("(Committing Host Effects: " + e + " Total)", "(Committing Host Effects)", null);
      }
    }
    function Bb() {
      {
        if (!_r)
          return;
        Qi = 0, Ec("(Calling Lifecycle Methods)");
      }
    }
    function Yb() {
      {
        if (!_r)
          return;
        var e = Qi;
        Qi = 0, Sc("(Calling Lifecycle Methods: " + e + " Total)", "(Calling Lifecycle Methods)", null);
      }
    }
    var Qm = [], Lv;
    Lv = [];
    var Bo = -1;
    function Hu(e) {
      return {
        current: e
      };
    }
    function $r(e, t) {
      if (Bo < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Lv[Bo] && y("Unexpected Fiber popped."), e.current = Qm[Bo], Qm[Bo] = null, Lv[Bo] = null, Bo--;
    }
    function Vr(e, t, a) {
      Bo++, Qm[Bo] = e.current, Lv[Bo] = a, e.current = t;
    }
    var qm;
    qm = {};
    var ma = {};
    Object.freeze(ma);
    var Yo = Hu(ma), Ki = Hu(!1), Xm = ma;
    function Cc(e, t, a) {
      return a && Zi(t) ? Xm : Yo.current;
    }
    function Gb(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ma;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var m = Me(a) || "Unknown";
          p(i, c, "context", m, Tt);
        }
        return l && Gb(e, t, c), c;
      }
    }
    function Uv() {
      return Ki.current;
    }
    function Zi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Iv(e) {
      $r(Ki, e), $r(Yo, e);
    }
    function Km(e) {
      $r(Ki, e), $r(Yo, e);
    }
    function Qb(e, t, a) {
      {
        if (Yo.current !== ma)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Yo, t, e), Vr(Ki, a, e);
      }
    }
    function qb(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = Me(t) || "Unknown";
            qm[c] || (qm[c] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v;
        qi(e, "getChildContext"), v = i.getChildContext(), Xi();
        for (var m in v)
          if (!(m in l))
            throw Error((Me(t) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var C = Me(t) || "Unknown";
          p(
            l,
            v,
            "child context",
            C,
            // In practice, there is one case in which we won't get a stack. It's when
            // somebody calls unstable_renderSubtreeIntoContainer() and we process
            // context from the parent component instance. The stack will be missing
            // because it's outside of the reconciliation, and so the pointer has not
            // been set. This is rare and doesn't matter. We'll also remove that API.
            Tt
          );
        }
        return d({}, a, {}, v);
      }
    }
    function jv(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ma;
        return Xm = Yo.current, Vr(Yo, a, e), Vr(Ki, Ki.current, e), !0;
      }
    }
    function Xb(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = qb(e, t, Xm);
          i.__reactInternalMemoizedMergedChildContext = l, $r(Ki, e), $r(Yo, e), Vr(Yo, l, e), Vr(Ki, a, e);
        } else
          $r(Ki, e), Vr(Ki, a, e);
      }
    }
    function tw(e) {
      {
        if (!(Ni(e) && e.tag === Ce))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Te:
              return t.stateNode.context;
            case Ce: {
              var a = t.type;
              if (Zi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Kb = 0, nw = 1, rw = 2, aw = h.unstable_runWithPriority, Zm = h.unstable_scheduleCallback, Zb = h.unstable_cancelCallback, iw = h.unstable_shouldYield, Jb = h.unstable_requestPaint, Jm = h.unstable_now, ow = h.unstable_getCurrentPriorityLevel, Hv = h.unstable_ImmediatePriority, eE = h.unstable_UserBlockingPriority, tE = h.unstable_NormalPriority, nE = h.unstable_LowPriority, rE = h.unstable_IdlePriority;
    if (!(E.__interactionsRef != null && E.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");
    var aE = {}, Wr = 99, Al = 98, li = 97, ey = 96, Nd = 95, xc = 90, lw = iw, uw = (
      // Fall back gracefully if we're running an older version of Scheduler.
      Jb !== void 0 ? Jb : function() {
      }
    ), Go = null, $v = null, ty = !1, iE = Jm(), ya = iE < 1e4 ? Jm : function() {
      return Jm() - iE;
    };
    function wc() {
      switch (ow()) {
        case Hv:
          return Wr;
        case eE:
          return Al;
        case tE:
          return li;
        case nE:
          return ey;
        case rE:
          return Nd;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function oE(e) {
      switch (e) {
        case Wr:
          return Hv;
        case Al:
          return eE;
        case li:
          return tE;
        case ey:
          return nE;
        case Nd:
          return rE;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Qo(e, t) {
      var a = oE(e);
      return aw(a, t);
    }
    function Pd(e, t, a) {
      var i = oE(e);
      return Zm(i, t, a);
    }
    function lE(e) {
      return Go === null ? (Go = [e], $v = Zm(Hv, uE)) : Go.push(e), aE;
    }
    function sw(e) {
      e !== aE && Zb(e);
    }
    function Ji() {
      if ($v !== null) {
        var e = $v;
        $v = null, Zb(e);
      }
      uE();
    }
    function uE() {
      if (!ty && Go !== null) {
        ty = !0;
        var e = 0;
        try {
          var t = !0, a = Go;
          Qo(Wr, function() {
            for (; e < a.length; e++) {
              var i = a[e];
              do
                i = i(t);
              while (i !== null);
            }
          }), Go = null;
        } catch (i) {
          throw Go !== null && (Go = Go.slice(e + 1)), Zm(Hv, Ji), i;
        } finally {
          ty = !1;
        }
      }
    }
    var gr = 0, On = 1, Ia = 2, Rc = 4, eo = 8, Md = 1073741823, Ie = 0, to = 1, $u = 2, sE = 3, Ft = Md, cE = Ft - 1, Vv = 10, Wv = cE - 1;
    function ny(e) {
      return Wv - (e / Vv | 0);
    }
    function Vu(e) {
      return (Wv - e) * Vv;
    }
    function cw(e, t) {
      return ((e / t | 0) + 1) * t;
    }
    function ry(e, t, a) {
      return Wv - cw(Wv - e + t / Vv, a / Vv);
    }
    var Fd = 5e3, ay = 250;
    function fw(e) {
      return ry(e, Fd, ay);
    }
    function dw(e, t) {
      return ry(e, t, ay);
    }
    var fE = 500, dE = 100;
    function pE(e) {
      return ry(e, fE, dE);
    }
    function vE(e, t) {
      if (t === Ft)
        return Wr;
      if (t === to || t === $u)
        return Nd;
      var a = Vu(t) - Vu(e);
      return a <= 0 ? Wr : a <= fE + dE ? Al : a <= Fd + ay ? li : Nd;
    }
    var ui = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var pw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & On && (t = a), a = a.return;
        return t;
      }, Wu = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, zd = [], Ld = [], Ud = [], Id = [], jd = [], Hd = [], Bu = /* @__PURE__ */ new Set();
      ui.recordUnsafeLifecycleWarnings = function(e, t) {
        Bu.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && zd.push(e), e.mode & On && typeof t.UNSAFE_componentWillMount == "function" && Ld.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ud.push(e), e.mode & On && typeof t.UNSAFE_componentWillReceiveProps == "function" && Id.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & On && typeof t.UNSAFE_componentWillUpdate == "function" && Hd.push(e));
      }, ui.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        zd.length > 0 && (zd.forEach(function(j) {
          e.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), zd = []);
        var t = /* @__PURE__ */ new Set();
        Ld.length > 0 && (Ld.forEach(function(j) {
          t.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), Ld = []);
        var a = /* @__PURE__ */ new Set();
        Ud.length > 0 && (Ud.forEach(function(j) {
          a.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), Ud = []);
        var i = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(j) {
          i.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), Id = []);
        var l = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(j) {
          l.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), jd = []);
        var c = /* @__PURE__ */ new Set();
        if (Hd.length > 0 && (Hd.forEach(function(j) {
          c.add(Me(j.type) || "Component"), Bu.add(j.type);
        }), Hd = []), t.size > 0) {
          var v = Wu(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var m = Wu(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state

Please update the following components: %s`, m);
        }
        if (c.size > 0) {
          var C = Wu(c);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var O = Wu(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (a.size > 0) {
          var D = Wu(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (l.size > 0) {
          var ee = Wu(l);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, ee);
        }
      };
      var Bv = /* @__PURE__ */ new Map(), hE = /* @__PURE__ */ new Set();
      ui.recordLegacyContextWarning = function(e, t) {
        var a = pw(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!hE.has(e.type)) {
          var i = Bv.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bv.set(a, i)), i.push(e));
        }
      }, ui.flushLegacyContextWarning = function() {
        Bv.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(v) {
              i.add(Me(v.type) || "Component"), hE.add(v.type);
            });
            var l = Wu(i), c = ar(a);
            y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://fb.me/react-legacy-context%s`, l, c);
          }
        });
      }, ui.discardPendingWarnings = function() {
        zd = [], Ld = [], Ud = [], Id = [], jd = [], Hd = [], Bv = /* @__PURE__ */ new Map();
      };
    }
    var ja = null, _c = null, vw = function(e) {
      ja = e;
    };
    function kc(e) {
      {
        if (ja === null)
          return e;
        var t = ja(e);
        return t === void 0 ? e : t.current;
      }
    }
    function iy(e) {
      return kc(e);
    }
    function oy(e) {
      {
        if (ja === null)
          return e;
        var t = ja(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = kc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: pr,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mE(e, t) {
      {
        if (ja === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Ce: {
            typeof i == "function" && (l = !0);
            break;
          }
          case Qe: {
            (typeof i == "function" || c === aa) && (l = !0);
            break;
          }
          case w: {
            (c === pr || c === aa) && (l = !0);
            break;
          }
          case V:
          case fe: {
            (c === qa || c === aa) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = ja(a);
          if (v !== void 0 && v === ja(i))
            return !0;
        }
        return !1;
      }
    }
    function yE(e) {
      {
        if (ja === null || typeof WeakSet != "function")
          return;
        _c === null && (_c = /* @__PURE__ */ new WeakSet()), _c.add(e);
      }
    }
    var hw = function(e, t) {
      {
        if (ja === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ul(), H1(function() {
          ly(e.current, i, a);
        });
      }
    }, mw = function(e, t) {
      {
        if (e.context !== ma)
          return;
        Ul(), $R(function() {
          op(t, e, null, null);
        });
      }
    };
    function ly(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, v = e.tag, m = e.type, C = null;
        switch (v) {
          case Qe:
          case fe:
          case Ce:
            C = m;
            break;
          case w:
            C = m.render;
            break;
        }
        if (ja === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var O = !1, D = !1;
        if (C !== null) {
          var ee = ja(C);
          ee !== void 0 && (a.has(ee) ? D = !0 : t.has(ee) && (v === Ce ? D = !0 : O = !0));
        }
        _c !== null && (_c.has(e) || i !== null && _c.has(i)) && (D = !0), D && (e._debugNeedsRemount = !0), (D || O) && Wa(e, Ft), l !== null && !D && ly(l, t, a), c !== null && ly(c, t, a);
      }
    }
    var yw = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return uy(e.current, i, a), a;
      }
    };
    function uy(e, t, a) {
      {
        var i = e.child, l = e.sibling, c = e.tag, v = e.type, m = null;
        switch (c) {
          case Qe:
          case fe:
          case Ce:
            m = v;
            break;
          case w:
            m = v.render;
            break;
        }
        var C = !1;
        m !== null && t.has(m) && (C = !0), C ? gw(e, a) : i !== null && uy(i, t, a), l !== null && uy(l, t, a);
      }
    }
    function gw(e, t) {
      {
        var a = bw(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case _e:
              t.add(i.stateNode);
              return;
            case Ae:
              t.add(i.stateNode.containerInfo);
              return;
            case Te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function bw(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === _e)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    function si(e, t) {
      if (e && e.defaultProps) {
        var a = d({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    function Ew(e) {
      if (Cp(e), e._status !== po)
        throw e._result;
      return e._result;
    }
    var sy = Hu(null), cy;
    cy = {};
    var Yv = null, Oc = null, Gv = null, Qv = !1;
    function qv() {
      Yv = null, Oc = null, Gv = null, Qv = !1;
    }
    function gE() {
      Qv = !0;
    }
    function bE() {
      Qv = !1;
    }
    function EE(e, t) {
      var a = e.type._context;
      Vr(sy, a._currentValue, e), a._currentValue = t, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== cy && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = cy;
    }
    function fy(e) {
      var t = sy.current;
      $r(sy, e);
      var a = e.type._context;
      a._currentValue = t;
    }
    function Sw(e, t, a) {
      if (Uu(a, t))
        return 0;
      var i = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(a, t) : Md;
      return (i & Md) !== i && y("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", i), i | 0;
    }
    function SE(e, t) {
      for (var a = e; a !== null; ) {
        var i = a.alternate;
        if (a.childExpirationTime < t)
          a.childExpirationTime = t, i !== null && i.childExpirationTime < t && (i.childExpirationTime = t);
        else if (i !== null && i.childExpirationTime < t)
          i.childExpirationTime = t;
        else
          break;
        a = a.return;
      }
    }
    function Cw(e, t, a, i) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var c = void 0, v = l.dependencies;
        if (v !== null) {
          c = l.child;
          for (var m = v.firstContext; m !== null; ) {
            if (m.context === t && m.observedBits & a) {
              if (l.tag === Ce) {
                var C = Nl(i, null);
                C.tag = Xv, Pl(l, C);
              }
              l.expirationTime < i && (l.expirationTime = i);
              var O = l.alternate;
              O !== null && O.expirationTime < i && (O.expirationTime = i), SE(l.return, i), v.expirationTime < i && (v.expirationTime = i);
              break;
            }
            m = m.next;
          }
        } else
          l.tag === U ? c = l.type === e.type ? null : l.child : c = l.child;
        if (c !== null)
          c.return = l;
        else
          for (c = l; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            var D = c.sibling;
            if (D !== null) {
              D.return = c.return, c = D;
              break;
            }
            c = c.return;
          }
        l = c;
      }
    }
    function Dc(e, t) {
      Yv = e, Oc = null, Gv = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (a.expirationTime >= t && mg(), a.firstContext = null);
      }
    }
    function qn(e, t) {
      if (Qv && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Gv !== e) {
        if (!(t === !1 || t === 0)) {
          var a;
          typeof t != "number" || t === Md ? (Gv = e, a = Md) : a = t;
          var i = {
            context: e,
            observedBits: a,
            next: null
          };
          if (Oc === null) {
            if (Yv === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Oc = i, Yv.dependencies = {
              expirationTime: Ie,
              firstContext: i,
              responders: null
            };
          } else
            Oc = Oc.next = i;
        }
      }
      return e._currentValue;
    }
    var CE = 0, TE = 1, Xv = 2, dy = 3, Kv = !1, py, Zv;
    py = !1, Zv = null;
    function vy(e) {
      var t = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function hy(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          baseQueue: i.baseQueue,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Nl(e, t) {
      var a = {
        expirationTime: e,
        suspenseConfig: t,
        tag: CE,
        payload: null,
        callback: null,
        next: null
      };
      return a.next = a, a.priority = wc(), a;
    }
    function Pl(e, t) {
      var a = e.updateQueue;
      if (a !== null) {
        var i = a.shared, l = i.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Zv === i && !py && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), py = !0);
      }
    }
    function xE(e, t) {
      var a = e.alternate;
      a !== null && hy(a, e);
      var i = e.updateQueue, l = i.baseQueue;
      l === null ? (i.baseQueue = t.next = t, t.next = t) : (t.next = l.next, l.next = t);
    }
    function Tw(e, t, a, i, l, c) {
      switch (a.tag) {
        case TE: {
          var v = a.payload;
          if (typeof v == "function") {
            gE(), e.mode & On && v.call(c, i, l);
            var m = v.call(c, i, l);
            return bE(), m;
          }
          return v;
        }
        case dy:
          e.effectTag = e.effectTag & ~xr | Jt;
        case CE: {
          var C = a.payload, O;
          return typeof C == "function" ? (gE(), e.mode & On && C.call(c, i, l), O = C.call(c, i, l), bE()) : O = C, O == null ? i : d({}, i, O);
        }
        case Xv:
          return Kv = !0, i;
      }
      return i;
    }
    function $d(e, t, a, i) {
      var l = e.updateQueue;
      Kv = !1, Zv = l.shared;
      var c = l.baseQueue, v = l.shared.pending;
      if (v !== null) {
        if (c !== null) {
          var m = c.next, C = v.next;
          c.next = C, v.next = m;
        }
        c = v, l.shared.pending = null;
        var O = e.alternate;
        if (O !== null) {
          var D = O.updateQueue;
          D !== null && (D.baseQueue = v);
        }
      }
      if (c !== null) {
        var ee = c.next, j = l.baseState, re = Ie, we = null, De = null, st = null;
        if (ee !== null) {
          var dt = ee;
          do {
            var Bt = dt.expirationTime;
            if (Bt < i) {
              var kt = {
                expirationTime: dt.expirationTime,
                suspenseConfig: dt.suspenseConfig,
                tag: dt.tag,
                payload: dt.payload,
                callback: dt.callback,
                next: null
              };
              st === null ? (De = st = kt, we = j) : st = st.next = kt, Bt > re && (re = Bt);
            } else {
              if (st !== null) {
                var an = {
                  expirationTime: Ft,
                  // This update is going to be committed so we never want uncommit it.
                  suspenseConfig: dt.suspenseConfig,
                  tag: dt.tag,
                  payload: dt.payload,
                  callback: dt.callback,
                  next: null
                };
                st = st.next = an;
              }
              B1(Bt, dt.suspenseConfig), j = Tw(e, l, dt, j, t, a);
              var X = dt.callback;
              if (X !== null) {
                e.effectTag |= If;
                var ie = l.effects;
                ie === null ? l.effects = [dt] : ie.push(dt);
              }
            }
            if (dt = dt.next, dt === null || dt === ee) {
              if (v = l.shared.pending, v === null)
                break;
              dt = c.next = v.next, v.next = ee, l.baseQueue = c = v, l.shared.pending = null;
            }
          } while (!0);
        }
        st === null ? we = j : st.next = De, l.baseState = we, l.baseQueue = st, jh(re), e.expirationTime = re, e.memoizedState = j;
      }
      Zv = null;
    }
    function xw(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function wE() {
      Kv = !1;
    }
    function Jv() {
      return Kv;
    }
    function RE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], v = c.callback;
          v !== null && (c.callback = null, xw(v, a));
        }
    }
    var ww = T.ReactCurrentBatchConfig;
    function Vd() {
      return ww.suspense;
    }
    var my = {}, Rw = Array.isArray, _E = new s.Component().refs, yy, gy, by, Ey, Sy, kE, eh, Cy, Ty, xy;
    {
      yy = /* @__PURE__ */ new Set(), gy = /* @__PURE__ */ new Set(), by = /* @__PURE__ */ new Set(), Ey = /* @__PURE__ */ new Set(), Cy = /* @__PURE__ */ new Set(), Sy = /* @__PURE__ */ new Set(), Ty = /* @__PURE__ */ new Set(), xy = /* @__PURE__ */ new Set();
      var OE = /* @__PURE__ */ new Set();
      eh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          OE.has(a) || (OE.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, kE = function(e, t) {
        if (t === void 0) {
          var a = Me(e) || "Component";
          Sy.has(a) || (Sy.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(my, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(my);
    }
    function th(e, t, a, i) {
      var l = e.memoizedState;
      e.mode & On && a(i, l);
      var c = a(i, l);
      kE(t, c);
      var v = c == null ? l : d({}, l, c);
      if (e.memoizedState = v, e.expirationTime === Ie) {
        var m = e.updateQueue;
        m.baseState = v;
      }
    }
    var wy = {
      isMounted: Pi,
      enqueueSetState: function(e, t, a) {
        var i = ri(e), l = ao(), c = Vd(), v = es(l, i, c), m = Nl(v, c);
        m.payload = t, a != null && (eh(a, "setState"), m.callback = a), Pl(i, m), Wa(i, v);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ri(e), l = ao(), c = Vd(), v = es(l, i, c), m = Nl(v, c);
        m.tag = TE, m.payload = t, a != null && (eh(a, "replaceState"), m.callback = a), Pl(i, m), Wa(i, v);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ri(e), i = ao(), l = Vd(), c = es(i, a, l), v = Nl(c, l);
        v.tag = Xv, t != null && (eh(t, "forceUpdate"), v.callback = t), Pl(a, v), Wa(a, c);
      }
    };
    function DE(e, t, a, i, l, c, v) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        e.mode & On && m.shouldComponentUpdate(i, c, v), qi(e, "shouldComponentUpdate");
        var C = m.shouldComponentUpdate(i, c, v);
        return Xi(), C === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Me(t) || "Component"), C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Od(a, i) || !Od(l, c) : !0;
    }
    function _w(e, t, a) {
      var i = e.stateNode;
      {
        var l = Me(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Ty.has(t) && (Ty.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Me(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !by.has(t) && (by.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Me(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || Rw(m)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function AE(e, t) {
      t.updater = wy, e.stateNode = t, Up(t, e), t._reactInternalInstance = my;
    }
    function NE(e, t, a) {
      var i = !1, l = ma, c = ma, v = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Dn && v._context === void 0
        );
        if (!m && !xy.has(t)) {
          xy.add(t);
          var C = "";
          v === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? C = " However, it is set to a " + typeof v + "." : v.$$typeof === kn ? C = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Me(t) || "Component", C);
        }
      }
      if (typeof v == "object" && v !== null)
        c = qn(v);
      else {
        l = Cc(e, t, !0);
        var O = t.contextTypes;
        i = O != null, c = i ? Tc(e, l) : ma;
      }
      e.mode & On && new t(a, c);
      var D = new t(a, c), ee = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      AE(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && ee === null) {
          var j = Me(t) || "Component";
          gy.has(j) || (gy.add(j), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, D.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var re = null, we = null, De = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? re = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (re = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? we = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (we = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? De = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (De = "UNSAFE_componentWillUpdate"), re !== null || we !== null || De !== null) {
            var st = Me(t) || "Component", dt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ey.has(st) || (Ey.add(st), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-unsafe-component-lifecycles`, st, dt, re !== null ? `
  ` + re : "", we !== null ? `
  ` + we : "", De !== null ? `
  ` + De : ""));
          }
        }
      }
      return i && Gb(e, l, c), D;
    }
    function kw(e, t) {
      qi(e, "componentWillMount");
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), Xi(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Me(e.type) || "Component"), wy.enqueueReplaceState(t, t.state, null));
    }
    function PE(e, t, a, i) {
      var l = t.state;
      if (qi(e, "componentWillReceiveProps"), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), Xi(), t.state !== l) {
        {
          var c = Me(e.type) || "Component";
          yy.has(c) || (yy.add(c), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        wy.enqueueReplaceState(t, t.state, null);
      }
    }
    function Ry(e, t, a, i) {
      _w(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = _E, vy(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = qn(c);
      else {
        var v = Cc(e, t, !0);
        l.context = Tc(e, v);
      }
      {
        if (l.state === a) {
          var m = Me(t) || "Component";
          Cy.has(m) || (Cy.add(m), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & On && ui.recordLegacyContextWarning(e, l), ui.recordUnsafeLifecycleWarnings(e, l);
      }
      $d(e, a, l, i), l.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      typeof C == "function" && (th(e, t, C, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (kw(e, l), $d(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.effectTag |= Mt);
    }
    function Ow(e, t, a, i) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var v = l.context, m = t.contextType, C = ma;
      if (typeof m == "object" && m !== null)
        C = qn(m);
      else {
        var O = Cc(e, t, !0);
        C = Tc(e, O);
      }
      var D = t.getDerivedStateFromProps, ee = typeof D == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !ee && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || v !== C) && PE(e, l, a, C), wE();
      var j = e.memoizedState, re = l.state = j;
      if ($d(e, a, l, i), re = e.memoizedState, c === a && j === re && !Uv() && !Jv())
        return typeof l.componentDidMount == "function" && (e.effectTag |= Mt), !1;
      typeof D == "function" && (th(e, t, D, a), re = e.memoizedState);
      var we = Jv() || DE(e, t, c, a, j, re, C);
      return we ? (!ee && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (qi(e, "componentWillMount"), typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), Xi()), typeof l.componentDidMount == "function" && (e.effectTag |= Mt)) : (typeof l.componentDidMount == "function" && (e.effectTag |= Mt), e.memoizedProps = a, e.memoizedState = re), l.props = a, l.state = re, l.context = C, we;
    }
    function Dw(e, t, a, i, l) {
      var c = t.stateNode;
      hy(e, t);
      var v = t.memoizedProps;
      c.props = t.type === t.elementType ? v : si(t.type, v);
      var m = c.context, C = a.contextType, O = ma;
      if (typeof C == "object" && C !== null)
        O = qn(C);
      else {
        var D = Cc(t, a, !0);
        O = Tc(t, D);
      }
      var ee = a.getDerivedStateFromProps, j = typeof ee == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !j && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== i || m !== O) && PE(t, c, i, O), wE();
      var re = t.memoizedState, we = c.state = re;
      if ($d(t, i, c, l), we = t.memoizedState, v === i && re === we && !Uv() && !Jv())
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.effectTag |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.effectTag |= Di), !1;
      typeof ee == "function" && (th(t, a, ee, i), we = t.memoizedState);
      var De = Jv() || DE(t, a, v, i, re, we, O);
      return De ? (!j && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (qi(t, "componentWillUpdate"), typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, we, O), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, we, O), Xi()), typeof c.componentDidUpdate == "function" && (t.effectTag |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (t.effectTag |= Di)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.effectTag |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.effectTag |= Di), t.memoizedProps = i, t.memoizedState = we), c.props = i, c.state = we, c.context = O, De;
    }
    var _y, ky, Oy, Dy, Ay, ME = function(e) {
    };
    _y = !1, ky = !1, Oy = {}, Dy = {}, Ay = {}, ME = function(e) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var t = 'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.' + Tt();
        Dy[t] || (Dy[t] = !0, y('Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'));
      }
    };
    var nh = Array.isArray;
    function Wd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & On || sr) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = Me(e.type) || "Component";
          Oy[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s', i, ar(e)), Oy[l] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var m = c;
            if (m.tag !== Ce)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref");
            v = m.stateNode;
          }
          if (!v)
            throw Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var O = function(D) {
            var ee = v.refs;
            ee === _E && (ee = v.refs = {}), D === null ? delete ee[C] : ee[C] = D;
          };
          return O._stringRef = C, O;
        } else {
          if (typeof i != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://fb.me/react-refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function rh(e, t) {
      if (e.type !== "textarea") {
        var a = "";
        throw a = " If you meant to render a collection of children, use an array instead." + Tt(), Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + ")." + a);
      }
    }
    function ah() {
      {
        var e = "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." + Tt();
        if (Ay[e])
          return;
        Ay[e] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function FE(e) {
      function t(X, ie) {
        if (e) {
          var B = X.lastEffect;
          B !== null ? (B.nextEffect = ie, X.lastEffect = ie) : X.firstEffect = X.lastEffect = ie, ie.nextEffect = null, ie.effectTag = xo;
        }
      }
      function a(X, ie) {
        if (!e)
          return null;
        for (var B = ie; B !== null; )
          t(X, B), B = B.sibling;
        return null;
      }
      function i(X, ie) {
        for (var B = /* @__PURE__ */ new Map(), Re = ie; Re !== null; )
          Re.key !== null ? B.set(Re.key, Re) : B.set(Re.index, Re), Re = Re.sibling;
        return B;
      }
      function l(X, ie) {
        var B = is(X, ie);
        return B.index = 0, B.sibling = null, B;
      }
      function c(X, ie, B) {
        if (X.index = B, !e)
          return ie;
        var Re = X.alternate;
        if (Re !== null) {
          var xe = Re.index;
          return xe < ie ? (X.effectTag = An, ie) : xe;
        } else
          return X.effectTag = An, ie;
      }
      function v(X) {
        return e && X.alternate === null && (X.effectTag = An), X;
      }
      function m(X, ie, B, Re) {
        if (ie === null || ie.tag !== Be) {
          var xe = Bg(B, X.mode, Re);
          return xe.return = X, xe;
        } else {
          var ze = l(ie, B);
          return ze.return = X, ze;
        }
      }
      function C(X, ie, B, Re) {
        if (ie !== null && (ie.elementType === B.type || // Keep this check inline so it only runs on the false path:
        mE(ie, B))) {
          var xe = l(ie, B.props);
          return xe.ref = Wd(X, ie, B), xe.return = X, xe._debugSource = B._source, xe._debugOwner = B._owner, xe;
        }
        var ze = Wg(B, X.mode, Re);
        return ze.ref = Wd(X, ie, B), ze.return = X, ze;
      }
      function O(X, ie, B, Re) {
        if (ie === null || ie.tag !== Ae || ie.stateNode.containerInfo !== B.containerInfo || ie.stateNode.implementation !== B.implementation) {
          var xe = Yg(B, X.mode, Re);
          return xe.return = X, xe;
        } else {
          var ze = l(ie, B.children || []);
          return ze.return = X, ze;
        }
      }
      function D(X, ie, B, Re, xe) {
        if (ie === null || ie.tag !== yt) {
          var ze = jl(B, X.mode, Re, xe);
          return ze.return = X, ze;
        } else {
          var Ot = l(ie, B);
          return Ot.return = X, Ot;
        }
      }
      function ee(X, ie, B) {
        if (typeof ie == "string" || typeof ie == "number") {
          var Re = Bg("" + ie, X.mode, B);
          return Re.return = X, Re;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Ne: {
              var xe = Wg(ie, X.mode, B);
              return xe.ref = Wd(X, null, ie), xe.return = X, xe;
            }
            case at: {
              var ze = Yg(ie, X.mode, B);
              return ze.return = X, ze;
            }
          }
          if (nh(ie) || _a(ie)) {
            var Ot = jl(ie, X.mode, B, null);
            return Ot.return = X, Ot;
          }
          rh(X, ie);
        }
        return typeof ie == "function" && ah(), null;
      }
      function j(X, ie, B, Re) {
        var xe = ie !== null ? ie.key : null;
        if (typeof B == "string" || typeof B == "number")
          return xe !== null ? null : m(X, ie, "" + B, Re);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Ne:
              return B.key === xe ? B.type === Ye ? D(X, ie, B.props.children, Re, xe) : C(X, ie, B, Re) : null;
            case at:
              return B.key === xe ? O(X, ie, B, Re) : null;
          }
          if (nh(B) || _a(B))
            return xe !== null ? null : D(X, ie, B, Re, null);
          rh(X, B);
        }
        return typeof B == "function" && ah(), null;
      }
      function re(X, ie, B, Re, xe) {
        if (typeof Re == "string" || typeof Re == "number") {
          var ze = X.get(B) || null;
          return m(ie, ze, "" + Re, xe);
        }
        if (typeof Re == "object" && Re !== null) {
          switch (Re.$$typeof) {
            case Ne: {
              var Ot = X.get(Re.key === null ? B : Re.key) || null;
              return Re.type === Ye ? D(ie, Ot, Re.props.children, xe, Re.key) : C(ie, Ot, Re, xe);
            }
            case at: {
              var Lt = X.get(Re.key === null ? B : Re.key) || null;
              return O(ie, Lt, Re, xe);
            }
          }
          if (nh(Re) || _a(Re)) {
            var tn = X.get(B) || null;
            return D(ie, tn, Re, xe, null);
          }
          rh(ie, Re);
        }
        return typeof Re == "function" && ah(), null;
      }
      function we(X, ie) {
        {
          if (typeof X != "object" || X === null)
            return ie;
          switch (X.$$typeof) {
            case Ne:
            case at:
              ME(X);
              var B = X.key;
              if (typeof B != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(B);
                break;
              }
              if (!ie.has(B)) {
                ie.add(B);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", B);
              break;
          }
        }
        return ie;
      }
      function De(X, ie, B, Re) {
        for (var xe = null, ze = 0; ze < B.length; ze++) {
          var Ot = B[ze];
          xe = we(Ot, xe);
        }
        for (var Lt = null, tn = null, Ut = ie, Yt = 0, It = 0, Sn = null; Ut !== null && It < B.length; It++) {
          Ut.index > It ? (Sn = Ut, Ut = null) : Sn = Ut.sibling;
          var In = j(X, Ut, B[It], Re);
          if (In === null) {
            Ut === null && (Ut = Sn);
            break;
          }
          e && Ut && In.alternate === null && t(X, Ut), Yt = c(In, Yt, It), tn === null ? Lt = In : tn.sibling = In, tn = In, Ut = Sn;
        }
        if (It === B.length)
          return a(X, Ut), Lt;
        if (Ut === null) {
          for (; It < B.length; It++) {
            var jn = ee(X, B[It], Re);
            jn !== null && (Yt = c(jn, Yt, It), tn === null ? Lt = jn : tn.sibling = jn, tn = jn);
          }
          return Lt;
        }
        for (var Or = i(X, Ut); It < B.length; It++) {
          var vn = re(Or, X, It, B[It], Re);
          vn !== null && (e && vn.alternate !== null && Or.delete(vn.key === null ? It : vn.key), Yt = c(vn, Yt, It), tn === null ? Lt = vn : tn.sibling = vn, tn = vn);
        }
        return e && Or.forEach(function(Br) {
          return t(X, Br);
        }), Lt;
      }
      function st(X, ie, B, Re) {
        var xe = _a(B);
        if (typeof xe != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (ky || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ky = !0), B.entries === xe && (_y || y("Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."), _y = !0);
          var ze = xe.call(B);
          if (ze)
            for (var Ot = null, Lt = ze.next(); !Lt.done; Lt = ze.next()) {
              var tn = Lt.value;
              Ot = we(tn, Ot);
            }
        }
        var Ut = xe.call(B);
        if (Ut == null)
          throw Error("An iterable object provided no iterator.");
        for (var Yt = null, It = null, Sn = ie, In = 0, jn = 0, Or = null, vn = Ut.next(); Sn !== null && !vn.done; jn++, vn = Ut.next()) {
          Sn.index > jn ? (Or = Sn, Sn = null) : Or = Sn.sibling;
          var Br = j(X, Sn, vn.value, Re);
          if (Br === null) {
            Sn === null && (Sn = Or);
            break;
          }
          e && Sn && Br.alternate === null && t(X, Sn), In = c(Br, In, jn), It === null ? Yt = Br : It.sibling = Br, It = Br, Sn = Or;
        }
        if (vn.done)
          return a(X, Sn), Yt;
        if (Sn === null) {
          for (; !vn.done; jn++, vn = Ut.next()) {
            var pi = ee(X, vn.value, Re);
            pi !== null && (In = c(pi, In, jn), It === null ? Yt = pi : It.sibling = pi, It = pi);
          }
          return Yt;
        }
        for (var Jg = i(X, Sn); !vn.done; jn++, vn = Ut.next()) {
          var Hl = re(Jg, X, jn, vn.value, Re);
          Hl !== null && (e && Hl.alternate !== null && Jg.delete(Hl.key === null ? jn : Hl.key), In = c(Hl, In, jn), It === null ? Yt = Hl : It.sibling = Hl, It = Hl);
        }
        return e && Jg.forEach(function(vk) {
          return t(X, vk);
        }), Yt;
      }
      function dt(X, ie, B, Re) {
        if (ie !== null && ie.tag === Be) {
          a(X, ie.sibling);
          var xe = l(ie, B);
          return xe.return = X, xe;
        }
        a(X, ie);
        var ze = Bg(B, X.mode, Re);
        return ze.return = X, ze;
      }
      function Bt(X, ie, B, Re) {
        for (var xe = B.key, ze = ie; ze !== null; ) {
          if (ze.key === xe) {
            switch (ze.tag) {
              case yt: {
                if (B.type === Ye) {
                  a(X, ze.sibling);
                  var Ot = l(ze, B.props.children);
                  return Ot.return = X, Ot._debugSource = B._source, Ot._debugOwner = B._owner, Ot;
                }
                break;
              }
              case nt:
              default: {
                if (ze.elementType === B.type || // Keep this check inline so it only runs on the false path:
                mE(ze, B)) {
                  a(X, ze.sibling);
                  var Lt = l(ze, B.props);
                  return Lt.ref = Wd(X, ze, B), Lt.return = X, Lt._debugSource = B._source, Lt._debugOwner = B._owner, Lt;
                }
                break;
              }
            }
            a(X, ze);
            break;
          } else
            t(X, ze);
          ze = ze.sibling;
        }
        if (B.type === Ye) {
          var tn = jl(B.props.children, X.mode, Re, B.key);
          return tn.return = X, tn;
        } else {
          var Ut = Wg(B, X.mode, Re);
          return Ut.ref = Wd(X, ie, B), Ut.return = X, Ut;
        }
      }
      function kt(X, ie, B, Re) {
        for (var xe = B.key, ze = ie; ze !== null; ) {
          if (ze.key === xe)
            if (ze.tag === Ae && ze.stateNode.containerInfo === B.containerInfo && ze.stateNode.implementation === B.implementation) {
              a(X, ze.sibling);
              var Ot = l(ze, B.children || []);
              return Ot.return = X, Ot;
            } else {
              a(X, ze);
              break;
            }
          else
            t(X, ze);
          ze = ze.sibling;
        }
        var Lt = Yg(B, X.mode, Re);
        return Lt.return = X, Lt;
      }
      function an(X, ie, B, Re) {
        var xe = typeof B == "object" && B !== null && B.type === Ye && B.key === null;
        xe && (B = B.props.children);
        var ze = typeof B == "object" && B !== null;
        if (ze)
          switch (B.$$typeof) {
            case Ne:
              return v(Bt(X, ie, B, Re));
            case at:
              return v(kt(X, ie, B, Re));
          }
        if (typeof B == "string" || typeof B == "number")
          return v(dt(X, ie, "" + B, Re));
        if (nh(B))
          return De(X, ie, B, Re);
        if (_a(B))
          return st(X, ie, B, Re);
        if (ze && rh(X, B), typeof B == "function" && ah(), typeof B > "u" && !xe)
          switch (X.tag) {
            case Ce: {
              var Ot = X.stateNode;
              if (Ot.render._isMockFunction)
                break;
            }
            case Qe: {
              var Lt = X.type;
              throw Error((Lt.displayName || Lt.name || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
            }
          }
        return a(X, ie);
      }
      return an;
    }
    var Ac = FE(!0), Ny = FE(!1);
    function Aw(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = is(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = is(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nw(e, t) {
      for (var a = e.child; a !== null; )
        F_(a, t), a = a.sibling;
    }
    var Bd = {}, Ml = Hu(Bd), Yd = Hu(Bd), ih = Hu(Bd);
    function oh(e) {
      if (e === Bd)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function zE() {
      var e = oh(ih.current);
      return e;
    }
    function Py(e, t) {
      Vr(ih, t, e), Vr(Yd, e, e), Vr(Ml, Bd, e);
      var a = Am(t);
      $r(Ml, e), Vr(Ml, a, e);
    }
    function Nc(e) {
      $r(Ml, e), $r(Yd, e), $r(ih, e);
    }
    function My() {
      var e = oh(Ml.current);
      return e;
    }
    function LE(e) {
      oh(ih.current);
      var t = oh(Ml.current), a = wv(t, e.type);
      t !== a && (Vr(Yd, e, e), Vr(Ml, a, e));
    }
    function Fy(e) {
      Yd.current === e && ($r(Ml, e), $r(Yd, e));
    }
    var Pw = 0, UE = 1, zy = 1, Gd = 2, ci = Hu(Pw);
    function lh(e, t) {
      return (e & t) !== 0;
    }
    function Qd(e) {
      return e & UE;
    }
    function Ly(e, t) {
      return e & UE | t;
    }
    function Mw(e, t) {
      return e | t;
    }
    function Yu(e, t) {
      Vr(ci, t, e);
    }
    function Pc(e) {
      $r(ci, e);
    }
    function Fw(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var i = e.memoizedProps;
      return i.fallback === void 0 ? !1 : i.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function uh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || gT(i) || bT(i))
              return t;
          }
        } else if (t.tag === qe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.effectTag & Jt) !== $t;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Gu(e, t) {
      var a = {
        responder: e,
        props: t
      };
      return Object.freeze(a), a;
    }
    var Mc = (
      /* */
      1
    ), Fc = (
      /*    */
      2
    ), sh = (
      /*   */
      4
    ), Le = T.ReactCurrentDispatcher, Ha = T.ReactCurrentBatchConfig, Uy;
    Uy = /* @__PURE__ */ new Set();
    var Fl = Ie, Nn = null, kr = null, br = null, ch = !1, zw = 25, pe = null, $a = null, zl = -1, Iy = !1;
    function pn() {
      {
        var e = pe;
        $a === null ? $a = [e] : $a.push(e);
      }
    }
    function Ve() {
      {
        var e = pe;
        $a !== null && (zl++, $a[zl] !== e && Lw(e));
      }
    }
    function qd(e) {
      e != null && !Array.isArray(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", pe, typeof e);
    }
    function Lw(e) {
      {
        var t = Me(Nn.type);
        if (!Uy.has(t) && (Uy.add(t), $a !== null)) {
          for (var a = "", i = 30, l = 0; l <= zl; l++) {
            for (var c = $a[l], v = l === zl ? e : c, m = l + 1 + ". " + c; m.length < i; )
              m += " ";
            m += v + `
`, a += m;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ga() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jy(e, t) {
      if (Iy)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", pe), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, pe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Uu(e[a], t[a]))
          return !1;
      return !0;
    }
    function zc(e, t, a, i, l, c) {
      Fl = c, Nn = t, $a = e !== null ? e._debugHookTypes : null, zl = -1, Iy = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.expirationTime = Ie, e !== null && e.memoizedState !== null ? Le.current = qE : $a !== null ? Le.current = QE : Le.current = GE;
      var v = a(i, l);
      if (t.expirationTime === Fl) {
        var m = 0;
        do {
          if (t.expirationTime = Ie, !(m < zw))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, Iy = !1, kr = null, br = null, t.updateQueue = null, zl = -1, Le.current = XE, v = a(i, l);
        } while (t.expirationTime === Fl);
      }
      Le.current = Eh, t._debugHookTypes = $a;
      var C = kr !== null && kr.next !== null;
      if (Fl = Ie, Nn = null, kr = null, br = null, pe = null, $a = null, zl = -1, ch = !1, C)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function IE(e, t, a) {
      t.updateQueue = e.updateQueue, t.effectTag &= ~(Ai | Mt), e.expirationTime <= a && (e.expirationTime = Ie);
    }
    function jE() {
      if (Le.current = Eh, ch)
        for (var e = Nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
      Fl = Ie, Nn = null, kr = null, br = null, $a = null, zl = -1, pe = null, ch = !1;
    }
    function Lc() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return br === null ? Nn.memoizedState = br = e : br = br.next = e, br;
    }
    function Uc() {
      var e;
      if (kr === null) {
        var t = Nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = kr.next;
      var a;
      if (br === null ? a = Nn.memoizedState : a = br.next, a !== null)
        br = a, a = br.next, kr = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        kr = e;
        var i = {
          memoizedState: kr.memoizedState,
          baseState: kr.baseState,
          baseQueue: kr.baseQueue,
          queue: kr.queue,
          next: null
        };
        br === null ? Nn.memoizedState = br = i : br = br.next = i;
      }
      return br;
    }
    function Uw() {
      return {
        lastEffect: null
      };
    }
    function Hy(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function $y(e, t, a) {
      var i = Lc(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var c = i.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, v = c.dispatch = YE.bind(null, Nn, c);
      return [i.memoizedState, v];
    }
    function Vy(e, t, a) {
      var i = Uc(), l = i.queue;
      if (l === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = kr, v = c.baseQueue, m = l.pending;
      if (m !== null) {
        if (v !== null) {
          var C = v.next, O = m.next;
          v.next = O, m.next = C;
        }
        c.baseQueue = v = m, l.pending = null;
      }
      if (v !== null) {
        var D = v.next, ee = c.baseState, j = null, re = null, we = null, De = D;
        do {
          var st = De.expirationTime;
          if (st < Fl) {
            var dt = {
              expirationTime: De.expirationTime,
              suspenseConfig: De.suspenseConfig,
              action: De.action,
              eagerReducer: De.eagerReducer,
              eagerState: De.eagerState,
              next: null
            };
            we === null ? (re = we = dt, j = ee) : we = we.next = dt, st > Nn.expirationTime && (Nn.expirationTime = st, jh(st));
          } else {
            if (we !== null) {
              var Bt = {
                expirationTime: Ft,
                // This update is going to be committed so we never want uncommit it.
                suspenseConfig: De.suspenseConfig,
                action: De.action,
                eagerReducer: De.eagerReducer,
                eagerState: De.eagerState,
                next: null
              };
              we = we.next = Bt;
            }
            if (B1(st, De.suspenseConfig), De.eagerReducer === e)
              ee = De.eagerState;
            else {
              var kt = De.action;
              ee = e(ee, kt);
            }
          }
          De = De.next;
        } while (De !== null && De !== D);
        we === null ? j = ee : we.next = re, Uu(ee, i.memoizedState) || mg(), i.memoizedState = ee, i.baseState = j, i.baseQueue = we, l.lastRenderedState = ee;
      }
      var an = l.dispatch;
      return [i.memoizedState, an];
    }
    function Wy(e, t, a) {
      var i = Uc(), l = i.queue;
      if (l === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, v = l.pending, m = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var C = v.next, O = C;
        do {
          var D = O.action;
          m = e(m, D), O = O.next;
        } while (O !== C);
        Uu(m, i.memoizedState) || mg(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, c];
    }
    function Xd(e) {
      var t = Lc();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Hy,
        lastRenderedState: e
      }, i = a.dispatch = YE.bind(null, Nn, a);
      return [t.memoizedState, i];
    }
    function fh(e) {
      return Vy(Hy);
    }
    function dh(e) {
      return Wy(Hy);
    }
    function By(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = Nn.updateQueue;
      if (c === null)
        c = Uw(), Nn.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = l.next = l;
        else {
          var m = v.next;
          v.next = l, l.next = m, c.lastEffect = l;
        }
      }
      return l;
    }
    function Yy(e) {
      var t = Lc(), a = {
        current: e
      };
      return Object.seal(a), t.memoizedState = a, a;
    }
    function ph(e) {
      var t = Uc();
      return t.memoizedState;
    }
    function Gy(e, t, a, i) {
      var l = Lc(), c = i === void 0 ? null : i;
      Nn.effectTag |= e, l.memoizedState = By(Mc | t, a, void 0, c);
    }
    function Qy(e, t, a, i) {
      var l = Uc(), c = i === void 0 ? null : i, v = void 0;
      if (kr !== null) {
        var m = kr.memoizedState;
        if (v = m.destroy, c !== null) {
          var C = m.deps;
          if (jy(c, C)) {
            By(t, a, v, c);
            return;
          }
        }
      }
      Nn.effectTag |= e, l.memoizedState = By(Mc | t, a, v, c);
    }
    function vh(e, t) {
      return typeof jest < "u" && J1(Nn), Gy(Mt | Ai, sh, e, t);
    }
    function Ic(e, t) {
      return typeof jest < "u" && J1(Nn), Qy(Mt | Ai, sh, e, t);
    }
    function qy(e, t) {
      return Gy(Mt, Fc, e, t);
    }
    function hh(e, t) {
      return Qy(Mt, Fc, e, t);
    }
    function HE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function Xy(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gy(Mt, Fc, HE.bind(null, t, e), i);
    }
    function mh(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Qy(Mt, Fc, HE.bind(null, t, e), i);
    }
    function Iw(e, t) {
    }
    var yh = Iw;
    function gh(e, t) {
      var a = Lc(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function jc(e, t) {
      var a = Uc(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (jy(i, c))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ky(e, t) {
      var a = Lc(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function bh(e, t) {
      var a = Uc(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (jy(i, c))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function Zy(e, t) {
      var a = Xd(e), i = a[0], l = a[1];
      return vh(function() {
        var c = Ha.suspense;
        Ha.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          Ha.suspense = c;
        }
      }, [e, t]), i;
    }
    function $E(e, t) {
      var a = fh(), i = a[0], l = a[1];
      return Ic(function() {
        var c = Ha.suspense;
        Ha.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          Ha.suspense = c;
        }
      }, [e, t]), i;
    }
    function VE(e, t) {
      var a = dh(), i = a[0], l = a[1];
      return Ic(function() {
        var c = Ha.suspense;
        Ha.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          Ha.suspense = c;
        }
      }, [e, t]), i;
    }
    function Jy(e, t, a) {
      var i = wc();
      Qo(i < Al ? Al : i, function() {
        e(!0);
      }), Qo(i > li ? li : i, function() {
        var l = Ha.suspense;
        Ha.suspense = t === void 0 ? null : t;
        try {
          e(!1), a();
        } finally {
          Ha.suspense = l;
        }
      });
    }
    function eg(e) {
      var t = Xd(!1), a = t[0], i = t[1], l = gh(Jy.bind(null, i, e), [i, e]);
      return [l, a];
    }
    function WE(e) {
      var t = fh(), a = t[0], i = t[1], l = jc(Jy.bind(null, i, e), [i, e]);
      return [l, a];
    }
    function BE(e) {
      var t = dh(), a = t[0], i = t[1], l = jc(Jy.bind(null, i, e), [i, e]);
      return [l, a];
    }
    function YE(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ao(), l = Vd(), c = es(i, e, l), v = {
        expirationTime: c,
        suspenseConfig: l,
        action: a,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      v.priority = wc();
      var m = t.pending;
      m === null ? v.next = v : (v.next = m.next, m.next = v), t.pending = v;
      var C = e.alternate;
      if (e === Nn || C !== null && C === Nn)
        ch = !0, v.expirationTime = Fl, Nn.expirationTime = Fl;
      else {
        if (e.expirationTime === Ie && (C === null || C.expirationTime === Ie)) {
          var O = t.lastRenderedReducer;
          if (O !== null) {
            var D;
            D = Le.current, Le.current = fi;
            try {
              var ee = t.lastRenderedState, j = O(ee, a);
              if (v.eagerReducer = O, v.eagerState = j, Uu(j, ee))
                return;
            } catch {
            } finally {
              Le.current = D;
            }
          }
        }
        typeof jest < "u" && (Z1(e), C_(e)), Wa(e, c);
      }
    }
    var Eh = {
      readContext: qn,
      useCallback: ga,
      useContext: ga,
      useEffect: ga,
      useImperativeHandle: ga,
      useLayoutEffect: ga,
      useMemo: ga,
      useReducer: ga,
      useRef: ga,
      useState: ga,
      useDebugValue: ga,
      useResponder: ga,
      useDeferredValue: ga,
      useTransition: ga
    }, GE = null, QE = null, qE = null, XE = null, no = null, fi = null, Sh = null;
    {
      var tg = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, xt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks");
      };
      GE = {
        readContext: function(e, t) {
          return qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", pn(), qd(t), gh(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", pn(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", pn(), qd(t), vh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", pn(), qd(a), Xy(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", pn(), qd(t), qy(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", pn(), qd(t);
          var a = Le.current;
          Le.current = no;
          try {
            return Ky(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", pn();
          var i = Le.current;
          Le.current = no;
          try {
            return $y(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", pn(), Yy(e);
        },
        useState: function(e) {
          pe = "useState", pn();
          var t = Le.current;
          Le.current = no;
          try {
            return Xd(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", pn(), void 0;
        },
        useResponder: function(e, t) {
          return pe = "useResponder", pn(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", pn(), Zy(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", pn(), eg(e);
        }
      }, QE = {
        readContext: function(e, t) {
          return qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", Ve(), gh(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", Ve(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", Ve(), vh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", Ve(), Xy(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", Ve(), qy(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", Ve();
          var a = Le.current;
          Le.current = no;
          try {
            return Ky(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", Ve();
          var i = Le.current;
          Le.current = no;
          try {
            return $y(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", Ve(), Yy(e);
        },
        useState: function(e) {
          pe = "useState", Ve();
          var t = Le.current;
          Le.current = no;
          try {
            return Xd(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", Ve(), void 0;
        },
        useResponder: function(e, t) {
          return pe = "useResponder", Ve(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", Ve(), Zy(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", Ve(), eg(e);
        }
      }, qE = {
        readContext: function(e, t) {
          return qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", Ve(), jc(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", Ve(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", Ve(), Ic(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", Ve(), mh(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", Ve(), hh(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", Ve();
          var a = Le.current;
          Le.current = fi;
          try {
            return bh(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", Ve();
          var i = Le.current;
          Le.current = fi;
          try {
            return Vy(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", Ve(), ph();
        },
        useState: function(e) {
          pe = "useState", Ve();
          var t = Le.current;
          Le.current = fi;
          try {
            return fh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", Ve(), yh();
        },
        useResponder: function(e, t) {
          return pe = "useResponder", Ve(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", Ve(), $E(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", Ve(), WE(e);
        }
      }, XE = {
        readContext: function(e, t) {
          return qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", Ve(), jc(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", Ve(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", Ve(), Ic(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", Ve(), mh(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", Ve(), hh(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", Ve();
          var a = Le.current;
          Le.current = Sh;
          try {
            return bh(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", Ve();
          var i = Le.current;
          Le.current = Sh;
          try {
            return Wy(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", Ve(), ph();
        },
        useState: function(e) {
          pe = "useState", Ve();
          var t = Le.current;
          Le.current = Sh;
          try {
            return dh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", Ve(), yh();
        },
        useResponder: function(e, t) {
          return pe = "useResponder", Ve(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", Ve(), VE(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", Ve(), BE(e);
        }
      }, no = {
        readContext: function(e, t) {
          return tg(), qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", xt(), pn(), gh(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", xt(), pn(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", xt(), pn(), vh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", xt(), pn(), Xy(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", xt(), pn(), qy(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", xt(), pn();
          var a = Le.current;
          Le.current = no;
          try {
            return Ky(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", xt(), pn();
          var i = Le.current;
          Le.current = no;
          try {
            return $y(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", xt(), pn(), Yy(e);
        },
        useState: function(e) {
          pe = "useState", xt(), pn();
          var t = Le.current;
          Le.current = no;
          try {
            return Xd(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", xt(), pn(), void 0;
        },
        useResponder: function(e, t) {
          return pe = "useResponder", xt(), pn(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", xt(), pn(), Zy(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", xt(), pn(), eg(e);
        }
      }, fi = {
        readContext: function(e, t) {
          return tg(), qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", xt(), Ve(), jc(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", xt(), Ve(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", xt(), Ve(), Ic(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", xt(), Ve(), mh(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", xt(), Ve(), hh(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", xt(), Ve();
          var a = Le.current;
          Le.current = fi;
          try {
            return bh(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", xt(), Ve();
          var i = Le.current;
          Le.current = fi;
          try {
            return Vy(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", xt(), Ve(), ph();
        },
        useState: function(e) {
          pe = "useState", xt(), Ve();
          var t = Le.current;
          Le.current = fi;
          try {
            return fh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", xt(), Ve(), yh();
        },
        useResponder: function(e, t) {
          return pe = "useResponder", xt(), Ve(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", xt(), Ve(), $E(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", xt(), Ve(), WE(e);
        }
      }, Sh = {
        readContext: function(e, t) {
          return tg(), qn(e, t);
        },
        useCallback: function(e, t) {
          return pe = "useCallback", xt(), Ve(), jc(e, t);
        },
        useContext: function(e, t) {
          return pe = "useContext", xt(), Ve(), qn(e, t);
        },
        useEffect: function(e, t) {
          return pe = "useEffect", xt(), Ve(), Ic(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return pe = "useImperativeHandle", xt(), Ve(), mh(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return pe = "useLayoutEffect", xt(), Ve(), hh(e, t);
        },
        useMemo: function(e, t) {
          pe = "useMemo", xt(), Ve();
          var a = Le.current;
          Le.current = fi;
          try {
            return bh(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          pe = "useReducer", xt(), Ve();
          var i = Le.current;
          Le.current = fi;
          try {
            return Wy(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return pe = "useRef", xt(), Ve(), ph();
        },
        useState: function(e) {
          pe = "useState", xt(), Ve();
          var t = Le.current;
          Le.current = fi;
          try {
            return dh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return pe = "useDebugValue", xt(), Ve(), yh();
        },
        useResponder: function(e, t) {
          return pe = "useResponder", xt(), Ve(), Gu(e, t);
        },
        useDeferredValue: function(e, t) {
          return pe = "useDeferredValue", xt(), Ve(), VE(e, t);
        },
        useTransition: function(e) {
          return pe = "useTransition", xt(), Ve(), BE(e);
        }
      };
    }
    var Ch = h.unstable_now, KE = 0, Kd = -1;
    function jw() {
      return KE;
    }
    function ZE() {
      KE = Ch();
    }
    function ng(e) {
      Kd = Ch(), e.actualStartTime < 0 && (e.actualStartTime = Ch());
    }
    function JE(e) {
      Kd = -1;
    }
    function Th(e, t) {
      if (Kd >= 0) {
        var a = Ch() - Kd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kd = -1;
      }
    }
    var Va = null, Qu = null, qu = !1;
    function Hw(e) {
      var t = e.stateNode.containerInfo;
      return Qu = rb(t), Va = e, qu = !0, !0;
    }
    function e1(e, t) {
      switch (e.tag) {
        case Te:
          _T(e.stateNode.containerInfo, t);
          break;
        case _e:
          kT(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var a = j_();
      a.stateNode = t, a.return = e, a.effectTag = xo, e.lastEffect !== null ? (e.lastEffect.nextEffect = a, e.lastEffect = a) : e.firstEffect = e.lastEffect = a;
    }
    function t1(e, t) {
      switch (t.effectTag = t.effectTag & ~Xr | An, e.tag) {
        case Te: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case _e:
              var i = t.type;
              t.pendingProps, OT(a, i);
              break;
            case Be:
              var l = t.pendingProps;
              DT(a, l);
              break;
          }
          break;
        }
        case _e: {
          var c = e.type, v = e.memoizedProps, m = e.stateNode;
          switch (t.tag) {
            case _e:
              var C = t.type;
              t.pendingProps, AT(c, v, m, C);
              break;
            case Be:
              var O = t.pendingProps;
              NT(c, v, m, O);
              break;
            case W:
              PT(c, v);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function n1(e, t) {
      switch (e.tag) {
        case _e: {
          var a = e.type;
          e.pendingProps;
          var i = Yi(t, a);
          return i !== null ? (e.stateNode = i, !0) : !1;
        }
        case Be: {
          var l = e.pendingProps, c = Nm(t, l);
          return c !== null ? (e.stateNode = c, !0) : !1;
        }
        case W:
          return !1;
        default:
          return !1;
      }
    }
    function rg(e) {
      if (qu) {
        var t = Qu;
        if (!t) {
          t1(Va, e), qu = !1, Va = e;
          return;
        }
        var a = t;
        if (!n1(e, t)) {
          if (t = Rv(a), !t || !n1(e, t)) {
            t1(Va, e), qu = !1, Va = e;
            return;
          }
          e1(Va, a);
        }
        Va = e, Qu = rb(t);
      }
    }
    function $w(e, t, a) {
      var i = e.stateNode, l = ET(i, e.type, e.memoizedProps, t, a, e);
      return e.updateQueue = l, l !== null;
    }
    function Vw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ST(t, a, e);
      if (i) {
        var l = Va;
        if (l !== null)
          switch (l.tag) {
            case Te: {
              var c = l.stateNode.containerInfo;
              wT(c, t, a);
              break;
            }
            case _e: {
              var v = l.type, m = l.memoizedProps, C = l.stateNode;
              RT(v, m, C, t, a);
              break;
            }
          }
      }
      return i;
    }
    function Ww(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return CT(a);
    }
    function r1(e) {
      for (var t = e.return; t !== null && t.tag !== _e && t.tag !== Te && t.tag !== W; )
        t = t.return;
      Va = t;
    }
    function xh(e) {
      if (e !== Va)
        return !1;
      if (!qu)
        return r1(e), qu = !0, !1;
      var t = e.type;
      if (e.tag !== _e || t !== "head" && t !== "body" && !b(t, e.memoizedProps))
        for (var a = Qu; a; )
          e1(e, a), a = Rv(a);
      return r1(e), e.tag === W ? Qu = Ww(e) : Qu = Va ? Rv(e.stateNode) : null, !0;
    }
    function ag() {
      Va = null, Qu = null, qu = !1;
    }
    var Zd = T.ReactCurrentOwner, Ll = !1, ig, og, lg, ug, sg, Xu, cg, wh;
    ig = {}, og = {}, lg = {}, ug = {}, sg = {}, Xu = !1, cg = {}, wh = {};
    function ba(e, t, a, i) {
      e === null ? t.child = Ny(t, null, a, i) : t.child = Ac(t, e.child, a, i);
    }
    function Bw(e, t, a, i) {
      t.child = Ac(t, e.child, null, i), t.child = Ac(t, null, a, i);
    }
    function a1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && p(
          c,
          i,
          // Resolved props
          "prop",
          Me(a),
          Tt
        );
      }
      var v = a.render, m = t.ref, C;
      return Dc(t, l), Zd.current = t, ka(!0), C = zc(e, t, v, i, m, l), t.mode & On && t.memoizedState !== null && (C = zc(e, t, v, i, m, l)), ka(!1), e !== null && !Ll ? (IE(e, t, l), qo(e, t, l)) : (t.effectTag |= sa, ba(e, t, C, l), t.child);
    }
    function i1(e, t, a, i, l, c) {
      if (e === null) {
        var v = a.type;
        if (P_(v) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var m = v;
          return m = kc(v), t.tag = fe, t.type = m, pg(t, v), o1(e, t, m, i, l, c);
        }
        {
          var C = v.propTypes;
          C && p(
            C,
            i,
            // Resolved props
            "prop",
            Me(v),
            Tt
          );
        }
        var O = Vg(a.type, null, i, null, t.mode, c);
        return O.ref = t.ref, O.return = t, t.child = O, O;
      }
      {
        var D = a.type, ee = D.propTypes;
        ee && p(
          ee,
          i,
          // Resolved props
          "prop",
          Me(D),
          Tt
        );
      }
      var j = e.child;
      if (l < c) {
        var re = j.memoizedProps, we = a.compare;
        if (we = we !== null ? we : Od, we(re, i) && e.ref === t.ref)
          return qo(e, t, c);
      }
      t.effectTag |= sa;
      var De = is(j, i);
      return De.ref = t.ref, De.return = t, t.child = De, De;
    }
    function o1(e, t, a, i, l, c) {
      if (t.type !== t.elementType) {
        var v = t.elementType;
        v.$$typeof === aa && (v = tf(v));
        var m = v && v.propTypes;
        m && p(
          m,
          i,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          Me(v),
          Tt
        );
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Od(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type && (Ll = !1, l < c))
          return t.expirationTime = e.expirationTime, qo(e, t, c);
      }
      return fg(e, t, a, i, c);
    }
    function Yw(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function Gw(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function Qw(e, t, a) {
      t.effectTag |= Mt;
      var i = t.pendingProps, l = i.children;
      return ba(e, t, l, a), t.child;
    }
    function l1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.effectTag |= Tr);
    }
    function fg(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && p(
          c,
          i,
          // Resolved props
          "prop",
          Me(a),
          Tt
        );
      }
      var v;
      {
        var m = Cc(t, a, !0);
        v = Tc(t, m);
      }
      var C;
      return Dc(t, l), Zd.current = t, ka(!0), C = zc(e, t, a, i, v, l), t.mode & On && t.memoizedState !== null && (C = zc(e, t, a, i, v, l)), ka(!1), e !== null && !Ll ? (IE(e, t, l), qo(e, t, l)) : (t.effectTag |= sa, ba(e, t, C, l), t.child);
    }
    function u1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && p(
          c,
          i,
          // Resolved props
          "prop",
          Me(a),
          Tt
        );
      }
      var v;
      Zi(a) ? (v = !0, jv(t)) : v = !1, Dc(t, l);
      var m = t.stateNode, C;
      m === null ? (e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= An), NE(t, a, i), Ry(t, a, i, l), C = !0) : e === null ? C = Ow(t, a, i, l) : C = Dw(e, t, a, i, l);
      var O = dg(e, t, a, C, v, l);
      {
        var D = t.stateNode;
        D.props !== i && (Xu || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Me(t.type) || "a component"), Xu = !0);
      }
      return O;
    }
    function dg(e, t, a, i, l, c) {
      l1(e, t);
      var v = (t.effectTag & Jt) !== $t;
      if (!i && !v)
        return l && Xb(t, a, !1), qo(e, t, c);
      var m = t.stateNode;
      Zd.current = t;
      var C;
      return v && typeof a.getDerivedStateFromError != "function" ? (C = null, JE()) : (ka(!0), C = m.render(), t.mode & On && m.render(), ka(!1)), t.effectTag |= sa, e !== null && v ? Bw(e, t, C, c) : ba(e, t, C, c), t.memoizedState = m.state, l && Xb(t, a, !0), t.child;
    }
    function s1(e) {
      var t = e.stateNode;
      t.pendingContext ? Qb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qb(e, t.context, !1), Py(e, t.containerInfo);
    }
    function qw(e, t, a) {
      s1(t);
      var i = t.updateQueue;
      if (!(e !== null && i !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var l = t.pendingProps, c = t.memoizedState, v = c !== null ? c.element : null;
      hy(e, t), $d(t, l, null, a);
      var m = t.memoizedState, C = m.element;
      if (C === v)
        return ag(), qo(e, t, a);
      var O = t.stateNode;
      if (O.hydrate && Hw(t)) {
        var D = Ny(t, null, C, a);
        t.child = D;
        for (var ee = D; ee; )
          ee.effectTag = ee.effectTag & ~An | Xr, ee = ee.sibling;
      } else
        ba(e, t, C, a), ag();
      return t.child;
    }
    function Xw(e, t, a) {
      LE(t), e === null && rg(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = l.children, m = b(i, l);
      return m ? v = null : c !== null && b(i, c) && (t.effectTag |= zr), l1(e, t), t.mode & Rc && a !== to && _(i, l) ? (Lg(to), t.expirationTime = t.childExpirationTime = to, null) : (ba(e, t, v, a), t.child);
    }
    function Kw(e, t) {
      return e === null && rg(t), null;
    }
    function Zw(e, t, a, i, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= An);
      var c = t.pendingProps;
      Lb(t);
      var v = Ew(a);
      t.type = v;
      var m = t.tag = M_(v);
      zb(t);
      var C = si(v, c), O;
      switch (m) {
        case Qe:
          return pg(t, v), t.type = v = kc(v), O = fg(null, t, v, C, l), O;
        case Ce:
          return t.type = v = iy(v), O = u1(null, t, v, C, l), O;
        case w:
          return t.type = v = oy(v), O = a1(null, t, v, C, l), O;
        case V: {
          if (t.type !== t.elementType) {
            var D = v.propTypes;
            D && p(
              D,
              C,
              // Resolved for outer only
              "prop",
              Me(v),
              Tt
            );
          }
          return O = i1(
            null,
            t,
            v,
            si(v.type, C),
            // The inner type can have defaults too
            i,
            l
          ), O;
        }
      }
      var ee = "";
      throw v !== null && typeof v == "object" && v.$$typeof === aa && (ee = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + v + ". Lazy element type must resolve to a class or function." + ee);
    }
    function Jw(e, t, a, i, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= An), t.tag = Ce;
      var c;
      return Zi(a) ? (c = !0, jv(t)) : c = !1, Dc(t, l), NE(t, a, i), Ry(t, a, i, l), dg(null, t, a, !0, c, l);
    }
    function eR(e, t, a, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= An);
      var l = t.pendingProps, c;
      {
        var v = Cc(t, a, !1);
        c = Tc(t, v);
      }
      Dc(t, i);
      var m;
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Me(a) || "Unknown";
          ig[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), ig[C] = !0);
        }
        t.mode & On && ui.recordLegacyContextWarning(t, null), ka(!0), Zd.current = t, m = zc(null, t, a, l, c, i), ka(!1);
      }
      if (t.effectTag |= sa, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        {
          var O = Me(a) || "Unknown";
          og[O] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), og[O] = !0);
        }
        t.tag = Ce, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        Zi(a) ? (D = !0, jv(t)) : D = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, vy(t);
        var ee = a.getDerivedStateFromProps;
        return typeof ee == "function" && th(t, a, ee, l), AE(t, m), Ry(t, a, l, i), dg(null, t, a, !0, D, i);
      } else
        return t.tag = Qe, t.mode & On && t.memoizedState !== null && (m = zc(null, t, a, l, c, i)), ba(null, t, m, i), pg(t, a), t.child;
    }
    function pg(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Si();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || e._debugID || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), sg[l] || (sg[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Me(t) || "Unknown";
          ug[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), ug[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Me(t) || "Unknown";
          lg[m] || (y("%s: Function components do not support contextType.", m), lg[m] = !0);
        }
      }
    }
    var vg = {
      dehydrated: null,
      retryTime: Ie
    };
    function tR(e, t, a) {
      return lh(e, Gd) && (t === null || t.memoizedState !== null);
    }
    function c1(e, t, a) {
      var i = t.mode, l = t.pendingProps;
      X_(t) && (t.effectTag |= Jt);
      var c = ci.current, v = !1, m = (t.effectTag & Jt) !== $t;
      if (m || tR(c, e) ? (v = !0, t.effectTag &= ~Jt) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (c = Mw(c, zy)), c = Qd(c), Yu(t, c), e === null)
        if (l.fallback !== void 0 && rg(t), v) {
          var C = l.fallback, O = jl(null, i, Ie, null);
          if (O.return = t, (t.mode & Ia) === gr) {
            var D = t.memoizedState, ee = D !== null ? t.child.child : t.child;
            O.child = ee;
            for (var j = ee; j !== null; )
              j.return = O, j = j.sibling;
          }
          var re = jl(C, i, a, null);
          return re.return = t, O.sibling = re, t.memoizedState = vg, t.child = O, re;
        } else {
          var we = l.children;
          return t.memoizedState = null, t.child = Ny(t, null, we, a);
        }
      else {
        var De = e.memoizedState;
        if (De !== null) {
          var st = e.child, dt = st.sibling;
          if (v) {
            var Bt = l.fallback, kt = is(st, st.pendingProps);
            if (kt.return = t, (t.mode & Ia) === gr) {
              var an = t.memoizedState, X = an !== null ? t.child.child : t.child;
              if (X !== st.child) {
                kt.child = X;
                for (var ie = X; ie !== null; )
                  ie.return = kt, ie = ie.sibling;
              }
            }
            if (t.mode & eo) {
              for (var B = 0, Re = kt.child; Re !== null; )
                B += Re.treeBaseDuration, Re = Re.sibling;
              kt.treeBaseDuration = B;
            }
            var xe = is(dt, Bt);
            return xe.return = t, kt.sibling = xe, kt.childExpirationTime = Ie, t.memoizedState = vg, t.child = kt, xe;
          } else {
            var ze = l.children, Ot = st.child, Lt = Ac(t, Ot, ze, a);
            return t.memoizedState = null, t.child = Lt;
          }
        } else {
          var tn = e.child;
          if (v) {
            var Ut = l.fallback, Yt = jl(
              // It shouldn't matter what the pending props are because we aren't
              // going to render this fragment.
              null,
              i,
              Ie,
              null
            );
            if (Yt.return = t, Yt.child = tn, tn !== null && (tn.return = Yt), (t.mode & Ia) === gr) {
              var It = t.memoizedState, Sn = It !== null ? t.child.child : t.child;
              Yt.child = Sn;
              for (var In = Sn; In !== null; )
                In.return = Yt, In = In.sibling;
            }
            if (t.mode & eo) {
              for (var jn = 0, Or = Yt.child; Or !== null; )
                jn += Or.treeBaseDuration, Or = Or.sibling;
              Yt.treeBaseDuration = jn;
            }
            var vn = jl(Ut, i, a, null);
            return vn.return = t, Yt.sibling = vn, vn.effectTag |= An, Yt.childExpirationTime = Ie, t.memoizedState = vg, t.child = Yt, vn;
          } else {
            t.memoizedState = null;
            var Br = l.children;
            return t.child = Ac(t, tn, Br, a);
          }
        }
      }
    }
    function f1(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var a = e.alternate;
      a !== null && a.expirationTime < t && (a.expirationTime = t), SE(e.return, t);
    }
    function nR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === W) {
          var l = i.memoizedState;
          l !== null && f1(i, a);
        } else if (i.tag === qe)
          f1(i, a);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function rR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && uh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function aR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cg[e])
        if (cg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function iR(e, t) {
      e !== void 0 && !wh[e] && (e !== "collapsed" && e !== "hidden" ? (wh[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wh[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function d1(e, t) {
      {
        var a = Array.isArray(e), i = !a && typeof _a(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function oR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a++)
            if (!d1(e[a], a))
              return;
        } else {
          var i = _a(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), v = 0; !c.done; c = l.next()) {
                if (!d1(c.value, v))
                  return;
                v++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function hg(e, t, a, i, l, c) {
      var v = e.memoizedState;
      v === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailExpiration: 0,
        tailMode: l,
        lastEffect: c
      } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = i, v.tail = a, v.tailExpiration = 0, v.tailMode = l, v.lastEffect = c);
    }
    function p1(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, v = i.children;
      aR(l), iR(c, l), oR(v, l), ba(e, t, v, a);
      var m = ci.current, C = lh(m, Gd);
      if (C)
        m = Ly(m, Gd), t.effectTag |= Jt;
      else {
        var O = e !== null && (e.effectTag & Jt) !== $t;
        O && nR(t, t.child, a), m = Qd(m);
      }
      if (Yu(t, m), (t.mode & Ia) === gr)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var D = rR(t.child), ee;
            D === null ? (ee = t.child, t.child = null) : (ee = D.sibling, D.sibling = null), hg(
              t,
              !1,
              // isBackwards
              ee,
              D,
              c,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var j = null, re = t.child;
            for (t.child = null; re !== null; ) {
              var we = re.alternate;
              if (we !== null && uh(we) === null) {
                t.child = re;
                break;
              }
              var De = re.sibling;
              re.sibling = j, j = re, re = De;
            }
            hg(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              c,
              t.lastEffect
            );
            break;
          }
          case "together": {
            hg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function lR(e, t, a) {
      Py(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ac(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    function uR(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, v = t.memoizedProps, m = c.value;
      {
        var C = t.type.propTypes;
        C && p(C, c, "prop", "Context.Provider", Tt);
      }
      if (EE(t, m), v !== null) {
        var O = v.value, D = Sw(l, m, O);
        if (D === 0) {
          if (v.children === c.children && !Uv())
            return qo(e, t, a);
        } else
          Cw(t, l, D, a);
      }
      var ee = c.children;
      return ba(e, t, ee, a), t.child;
    }
    var v1 = !1;
    function sR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (v1 || (v1 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Dc(t, a);
      var v = qn(i, l.unstable_observedBits), m;
      return Zd.current = t, ka(!0), m = c(v), ka(!1), t.effectTag |= sa, ba(e, t, m, a), t.child;
    }
    function mg() {
      Ll = !0;
    }
    function qo(e, t, a) {
      Lb(t), e !== null && (t.dependencies = e.dependencies), JE();
      var i = t.expirationTime;
      i !== Ie && jh(i);
      var l = t.childExpirationTime;
      return l < a ? null : (Aw(e, t), t.child);
    }
    function cR(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var c = i.lastEffect;
        return c !== null ? (c.nextEffect = e, i.lastEffect = e) : i.firstEffect = i.lastEffect = e, e.nextEffect = null, e.effectTag = xo, a.effectTag |= An, a;
      }
    }
    function h1(e, t, a) {
      var i = t.expirationTime;
      if (t._debugNeedsRemount && e !== null)
        return cR(e, t, Vg(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.expirationTime));
      if (e !== null) {
        var l = e.memoizedProps, c = t.pendingProps;
        if (l !== c || Uv() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ll = !0;
        else if (i < a) {
          switch (Ll = !1, t.tag) {
            case Te:
              s1(t), ag();
              break;
            case _e:
              if (LE(t), t.mode & Rc && a !== to && _(t.type, c))
                return Lg(to), t.expirationTime = t.childExpirationTime = to, null;
              break;
            case Ce: {
              var v = t.type;
              Zi(v) && jv(t);
              break;
            }
            case Ae:
              Py(t, t.stateNode.containerInfo);
              break;
            case U: {
              var m = t.memoizedProps.value;
              EE(t, m);
              break;
            }
            case x:
              {
                var C = t.childExpirationTime >= a;
                C && (t.effectTag |= Mt);
              }
              break;
            case W: {
              var O = t.memoizedState;
              if (O !== null) {
                var D = t.child, ee = D.childExpirationTime;
                if (ee !== Ie && ee >= a)
                  return c1(e, t, a);
                Yu(t, Qd(ci.current));
                var j = qo(e, t, a);
                return j !== null ? j.sibling : null;
              } else
                Yu(t, Qd(ci.current));
              break;
            }
            case qe: {
              var re = (e.effectTag & Jt) !== $t, we = t.childExpirationTime >= a;
              if (re) {
                if (we)
                  return p1(e, t, a);
                t.effectTag |= Jt;
              }
              var De = t.memoizedState;
              if (De !== null && (De.rendering = null, De.tail = null), Yu(t, ci.current), we)
                break;
              return null;
            }
          }
          return qo(e, t, a);
        } else
          Ll = !1;
      } else
        Ll = !1;
      switch (t.expirationTime = Ie, t.tag) {
        case Ze:
          return eR(e, t, t.type, a);
        case Oe: {
          var st = t.elementType;
          return Zw(e, t, st, i, a);
        }
        case Qe: {
          var dt = t.type, Bt = t.pendingProps, kt = t.elementType === dt ? Bt : si(dt, Bt);
          return fg(e, t, dt, kt, a);
        }
        case Ce: {
          var an = t.type, X = t.pendingProps, ie = t.elementType === an ? X : si(an, X);
          return u1(e, t, an, ie, a);
        }
        case Te:
          return qw(e, t, a);
        case _e:
          return Xw(e, t, a);
        case Be:
          return Kw(e, t);
        case W:
          return c1(e, t, a);
        case Ae:
          return lR(e, t, a);
        case w: {
          var B = t.type, Re = t.pendingProps, xe = t.elementType === B ? Re : si(B, Re);
          return a1(e, t, B, xe, a);
        }
        case yt:
          return Yw(e, t, a);
        case be:
          return Gw(e, t, a);
        case x:
          return Qw(e, t, a);
        case U:
          return uR(e, t, a);
        case ne:
          return sR(e, t, a);
        case V: {
          var ze = t.type, Ot = t.pendingProps, Lt = si(ze, Ot);
          if (t.type !== t.elementType) {
            var tn = ze.propTypes;
            tn && p(
              tn,
              Lt,
              // Resolved for outer only
              "prop",
              Me(ze),
              Tt
            );
          }
          return Lt = si(ze.type, Lt), i1(e, t, ze, Lt, i, a);
        }
        case fe:
          return o1(e, t, t.type, t.pendingProps, i, a);
        case Se: {
          var Ut = t.type, Yt = t.pendingProps, It = t.elementType === Ut ? Yt : si(Ut, Yt);
          return Jw(e, t, Ut, It, a);
        }
        case qe:
          return p1(e, t, a);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hc(e) {
      e.effectTag |= Mt;
    }
    function m1(e) {
      e.effectTag |= Tr;
    }
    var y1, yg, g1, b1;
    y1 = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === _e || l.tag === Be)
          u(e, l.stateNode);
        else if (l.tag !== Ae) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, yg = function(e) {
    }, g1 = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, m = My(), C = g(v, a, c, i, l, m);
        t.updateQueue = C, C && Hc(t);
      }
    }, b1 = function(e, t, a, i) {
      a !== i && Hc(t);
    };
    function Rh(e, t) {
      switch (e.tailMode) {
        case "hidden": {
          for (var a = e.tail, i = null; a !== null; )
            a.alternate !== null && (i = a), a = a.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        }
        case "collapsed": {
          for (var l = e.tail, c = null; l !== null; )
            l.alternate !== null && (c = l), l = l.sibling;
          c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
          break;
        }
      }
    }
    function E1(e, t, a) {
      var i = t.pendingProps;
      switch (t.tag) {
        case Ze:
        case Oe:
        case fe:
        case Qe:
        case w:
        case yt:
        case be:
        case x:
        case ne:
        case V:
          return null;
        case Ce: {
          var l = t.type;
          return Zi(l) && Iv(t), null;
        }
        case Te: {
          Nc(t), Km(t);
          var c = t.stateNode;
          if (c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = xh(t);
            v && Hc(t);
          }
          return yg(t), null;
        }
        case _e: {
          Fy(t);
          var m = zE(), C = t.type;
          if (e !== null && t.stateNode != null)
            g1(e, t, C, i, m), e.ref !== t.ref && m1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var O = My(), D = xh(t);
            if (D)
              $w(t, m, O) && Hc(t);
            else {
              var ee = o(C, i, m, O, t);
              y1(ee, t, !1, !1), t.stateNode = ee, f(ee, C, i, m) && Hc(t);
            }
            t.ref !== null && m1(t);
          }
          return null;
        }
        case Be: {
          var j = i;
          if (e && t.stateNode != null) {
            var re = e.memoizedProps;
            b1(e, t, re, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var we = zE(), De = My(), st = xh(t);
            st ? Vw(t) && Hc(t) : t.stateNode = Q(j, we, De, t);
          }
          return null;
        }
        case W: {
          Pc(t);
          var dt = t.memoizedState;
          if ((t.effectTag & Jt) !== $t)
            return t.expirationTime = a, t;
          var Bt = dt !== null, kt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && xh(t);
          else {
            var an = e.memoizedState;
            if (kt = an !== null, !Bt && an !== null) {
              var X = e.child.sibling;
              if (X !== null) {
                var ie = t.firstEffect;
                ie !== null ? (t.firstEffect = X, X.nextEffect = ie) : (t.firstEffect = t.lastEffect = X, X.nextEffect = null), X.effectTag = xo;
              }
            }
          }
          if (Bt && !kt && (t.mode & Ia) !== gr) {
            var B = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            B || lh(ci.current, zy) ? GR() : QR();
          }
          return (Bt || kt) && (t.effectTag |= Mt), null;
        }
        case Ae:
          return Nc(t), yg(t), null;
        case U:
          return fy(t), null;
        case Se: {
          var Re = t.type;
          return Zi(Re) && Iv(t), null;
        }
        case qe: {
          Pc(t);
          var xe = t.memoizedState;
          if (xe === null)
            return null;
          var ze = (t.effectTag & Jt) !== $t, Ot = xe.rendering;
          if (Ot === null)
            if (ze)
              Rh(xe, !1);
            else {
              var Lt = XR() && (e === null || (e.effectTag & Jt) === $t);
              if (!Lt)
                for (var tn = t.child; tn !== null; ) {
                  var Ut = uh(tn);
                  if (Ut !== null) {
                    ze = !0, t.effectTag |= Jt, Rh(xe, !1);
                    var Yt = Ut.updateQueue;
                    return Yt !== null && (t.updateQueue = Yt, t.effectTag |= Mt), xe.lastEffect === null && (t.firstEffect = null), t.lastEffect = xe.lastEffect, Nw(t, a), Yu(t, Ly(ci.current, Gd)), t.child;
                  }
                  tn = tn.sibling;
                }
            }
          else {
            if (!ze) {
              var It = uh(Ot);
              if (It !== null) {
                t.effectTag |= Jt, ze = !0;
                var Sn = It.updateQueue;
                if (Sn !== null && (t.updateQueue = Sn, t.effectTag |= Mt), Rh(xe, !0), xe.tail === null && xe.tailMode === "hidden" && !Ot.alternate) {
                  var In = t.lastEffect = xe.lastEffect;
                  return In !== null && (In.nextEffect = null), null;
                }
              } else if (
                // The time it took to render last row is greater than time until
                // the expiration.
                ya() * 2 - xe.renderingStartTime > xe.tailExpiration && a > to
              ) {
                t.effectTag |= Jt, ze = !0, Rh(xe, !1);
                var jn = a - 1;
                t.expirationTime = t.childExpirationTime = jn, Lg(jn);
              }
            }
            if (xe.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var Or = xe.last;
              Or !== null ? Or.sibling = Ot : t.child = Ot, xe.last = Ot;
            }
          }
          if (xe.tail !== null) {
            if (xe.tailExpiration === 0) {
              var vn = 500;
              xe.tailExpiration = ya() + vn;
            }
            var Br = xe.tail;
            xe.rendering = Br, xe.tail = Br.sibling, xe.lastEffect = t.lastEffect, xe.renderingStartTime = ya(), Br.sibling = null;
            var pi = ci.current;
            return ze ? pi = Ly(pi, Gd) : pi = Qd(pi), Yu(t, pi), Br;
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fR(e, t) {
      switch (e.tag) {
        case Ce: {
          var a = e.type;
          Zi(a) && Iv(e);
          var i = e.effectTag;
          return i & xr ? (e.effectTag = i & ~xr | Jt, e) : null;
        }
        case Te: {
          Nc(e), Km(e);
          var l = e.effectTag;
          if ((l & Jt) !== $t)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.effectTag = l & ~xr | Jt, e;
        }
        case _e:
          return Fy(e), null;
        case W: {
          Pc(e);
          var c = e.effectTag;
          return c & xr ? (e.effectTag = c & ~xr | Jt, e) : null;
        }
        case qe:
          return Pc(e), null;
        case Ae:
          return Nc(e), null;
        case U:
          return fy(e), null;
        default:
          return null;
      }
    }
    function S1(e) {
      switch (e.tag) {
        case Ce: {
          var t = e.type.childContextTypes;
          t != null && Iv(e);
          break;
        }
        case Te: {
          Nc(e), Km(e);
          break;
        }
        case _e: {
          Fy(e);
          break;
        }
        case Ae:
          Nc(e);
          break;
        case W:
          Pc(e);
          break;
        case qe:
          Pc(e);
          break;
        case U:
          fy(e);
          break;
      }
    }
    function gg(e, t) {
      return {
        value: e,
        source: t,
        stack: ar(t)
      };
    }
    function dR(e) {
      var t = e.error;
      {
        var a = e.componentName, i = e.componentStack, l = e.errorBoundaryName, c = e.errorBoundaryFound, v = e.willRetry;
        if (t != null && t._suppressLogging) {
          if (c && v)
            return;
          console.error(t);
        }
        var m = a ? "The above error occurred in the <" + a + "> component:" : "The above error occurred in one of your React components:", C;
        c && l ? v ? C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + l + ".") : C = "This error was initially handled by the error boundary " + l + `.
Recreating the tree from scratch failed so React will unmount the tree.` : C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.`;
        var O = "" + m + i + `

` + ("" + C);
        console.error(O);
      }
    }
    var C1 = null;
    C1 = /* @__PURE__ */ new Set();
    var pR = typeof WeakSet == "function" ? WeakSet : Set;
    function bg(e, t) {
      var a = t.source, i = t.stack;
      i === null && a !== null && (i = ar(a));
      var l = {
        componentName: a !== null ? Me(a.type) : null,
        componentStack: i !== null ? i : "",
        error: t.value,
        errorBoundary: null,
        errorBoundaryName: null,
        errorBoundaryFound: !1,
        willRetry: !1
      };
      e !== null && e.tag === Ce && (l.errorBoundary = e.stateNode, l.errorBoundaryName = Me(e.type), l.errorBoundaryFound = !0, l.willRetry = !0);
      try {
        dR(l);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var vR = function(e, t) {
      qi(e, "componentWillUnmount"), t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount(), Xi();
    };
    function hR(e, t) {
      if (K(null, vR, null, e, t), M()) {
        var a = ge();
        rs(e, a);
      }
    }
    function T1(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (K(null, t, null, null), M()) {
            var a = ge();
            rs(e, a);
          }
        } else
          t.current = null;
    }
    function mR(e, t) {
      if (K(null, t, null), M()) {
        var a = ge();
        rs(e, a);
      }
    }
    function yR(e, t) {
      switch (t.tag) {
        case Qe:
        case w:
        case fe:
        case nt:
          return;
        case Ce: {
          if (t.effectTag & Di && e !== null) {
            var a = e.memoizedProps, i = e.memoizedState;
            qi(t, "getSnapshotBeforeUpdate");
            var l = t.stateNode;
            t.type === t.elementType && !Xu && (l.props !== t.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(t.type) || "instance"), l.state !== t.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(t.type) || "instance"));
            var c = l.getSnapshotBeforeUpdate(t.elementType === t.type ? a : si(t.type, a), i);
            {
              var v = C1;
              c === void 0 && !v.has(t.type) && (v.add(t.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Me(t.type)));
            }
            l.__reactInternalSnapshotBeforeUpdate = c, Xi();
          }
          return;
        }
        case Te:
        case _e:
        case Be:
        case Ae:
        case Se:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function x1(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            var v = c.destroy;
            c.destroy = void 0, v !== void 0 && v();
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function w1(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            var v = c.create;
            c.destroy = v();
            {
              var m = c.destroy;
              if (m !== void 0 && typeof m != "function") {
                var C = void 0;
                m === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? C = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching` : C = " You returned: " + m, y("An effect function must not return anything besides a function, which is used for clean-up.%s%s", C, ar(t));
              }
            }
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function gR(e) {
      if ((e.effectTag & Ai) !== $t)
        switch (e.tag) {
          case Qe:
          case w:
          case fe:
          case nt: {
            x1(sh | Mc, e), w1(sh | Mc, e);
            break;
          }
        }
    }
    function bR(e, t, a, i) {
      switch (a.tag) {
        case Qe:
        case w:
        case fe:
        case nt: {
          w1(Fc | Mc, a);
          return;
        }
        case Ce: {
          var l = a.stateNode;
          if (a.effectTag & Mt)
            if (t === null)
              qi(a, "componentDidMount"), a.type === a.elementType && !Xu && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance")), l.componentDidMount(), Xi();
            else {
              var c = a.elementType === a.type ? t.memoizedProps : si(a.type, t.memoizedProps), v = t.memoizedState;
              qi(a, "componentDidUpdate"), a.type === a.elementType && !Xu && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance")), l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate), Xi();
            }
          var m = a.updateQueue;
          m !== null && (a.type === a.elementType && !Xu && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a.type) || "instance")), RE(a, m, l));
          return;
        }
        case Te: {
          var C = a.updateQueue;
          if (C !== null) {
            var O = null;
            if (a.child !== null)
              switch (a.child.tag) {
                case _e:
                  O = a.child.stateNode;
                  break;
                case Ce:
                  O = a.child.stateNode;
                  break;
              }
            RE(a, C, O);
          }
          return;
        }
        case _e: {
          var D = a.stateNode;
          if (t === null && a.effectTag & Mt) {
            var ee = a.type, j = a.memoizedProps;
            _t(D, ee, j);
          }
          return;
        }
        case Be:
          return;
        case Ae:
          return;
        case x: {
          {
            var re = a.memoizedProps.onRender;
            typeof re == "function" && re(a.memoizedProps.id, t === null ? "mount" : "update", a.actualDuration, a.treeBaseDuration, a.actualStartTime, jw(), e.memoizedInteractions);
          }
          return;
        }
        case W: {
          kR(e, a);
          return;
        }
        case qe:
        case Se:
        case ce:
        case Ue:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ER(e, t) {
      for (var a = e; ; ) {
        if (a.tag === _e) {
          var i = a.stateNode;
          t ? ut(i) : En(a.stateNode, a.memoizedProps);
        } else if (a.tag === Be) {
          var l = a.stateNode;
          t ? Dt(l) : Et(l, a.memoizedProps);
        } else if (a.tag === W && a.memoizedState !== null && a.memoizedState.dehydrated === null) {
          var c = a.child.sibling;
          c.return = a, a = c;
          continue;
        } else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function SR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case _e:
            i = a;
            break;
          default:
            i = a;
        }
        typeof t == "function" ? t(i) : (t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s", Me(e.type), ar(e)), t.current = i);
      }
    }
    function CR(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function R1(e, t, a) {
      switch (k_(t), t.tag) {
        case Qe:
        case w:
        case V:
        case fe:
        case nt: {
          var i = t.updateQueue;
          if (i !== null) {
            var l = i.lastEffect;
            if (l !== null) {
              var c = l.next;
              {
                var v = a > li ? li : a;
                Qo(v, function() {
                  var C = c;
                  do {
                    var O = C.destroy;
                    O !== void 0 && mR(t, O), C = C.next;
                  } while (C !== c);
                });
              }
            }
          }
          return;
        }
        case Ce: {
          T1(t);
          var m = t.stateNode;
          typeof m.componentWillUnmount == "function" && hR(t, m);
          return;
        }
        case _e: {
          T1(t);
          return;
        }
        case Ae: {
          D1(e, t, a);
          return;
        }
        case ce:
          return;
        case H:
          return;
        case Ue:
          return;
      }
    }
    function TR(e, t, a) {
      for (var i = t; ; ) {
        if (R1(e, i, a), i.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        i.tag !== Ae) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _1(e) {
      var t = e.alternate;
      e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, t !== null && _1(t);
    }
    function xR(e) {
      for (var t = e.return; t !== null; ) {
        if (k1(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function k1(e) {
      return e.tag === _e || e.tag === Te || e.tag === Ae;
    }
    function wR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || k1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== _e && t.tag !== Be && t.tag !== H; ) {
            if (t.effectTag & An || t.child === null || t.tag === Ae)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.effectTag & An))
            return t.stateNode;
        }
    }
    function O1(e) {
      var t = xR(e), a, i, l = t.stateNode;
      switch (t.tag) {
        case _e:
          a = l, i = !1;
          break;
        case Te:
          a = l.containerInfo, i = !0;
          break;
        case Ae:
          a = l.containerInfo, i = !0;
          break;
        case ce:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.effectTag & zr && (Hr(a), t.effectTag &= ~zr);
      var c = wR(e);
      i ? Eg(e, c, a) : Sg(e, c, a);
    }
    function Eg(e, t, a) {
      var i = e.tag, l = i === _e || i === Be;
      if (l || on) {
        var c = l ? e.stateNode : e.stateNode.instance;
        t ? ve(a, c, t) : F(a, c);
      } else if (i !== Ae) {
        var v = e.child;
        if (v !== null) {
          Eg(v, t, a);
          for (var m = v.sibling; m !== null; )
            Eg(m, t, a), m = m.sibling;
        }
      }
    }
    function Sg(e, t, a) {
      var i = e.tag, l = i === _e || i === Be;
      if (l || on) {
        var c = l ? e.stateNode : e.stateNode.instance;
        t ? Z(a, c, t) : I(a, c);
      } else if (i !== Ae) {
        var v = e.child;
        if (v !== null) {
          Sg(v, t, a);
          for (var m = v.sibling; m !== null; )
            Sg(m, t, a), m = m.sibling;
        }
      }
    }
    function D1(e, t, a) {
      for (var i = t, l = !1, c, v; ; ) {
        if (!l) {
          var m = i.return;
          e:
            for (; ; ) {
              if (m === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var C = m.stateNode;
              switch (m.tag) {
                case _e:
                  c = C, v = !1;
                  break e;
                case Te:
                  c = C.containerInfo, v = !0;
                  break e;
                case Ae:
                  c = C.containerInfo, v = !0;
                  break e;
              }
              m = m.return;
            }
          l = !0;
        }
        if (i.tag === _e || i.tag === Be)
          TR(e, i, a), v ? He(c, i.stateNode) : ke(c, i.stateNode);
        else if (i.tag === Ae) {
          if (i.child !== null) {
            c = i.stateNode.containerInfo, v = !0, i.child.return = i, i = i.child;
            continue;
          }
        } else if (R1(e, i, a), i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return, i.tag === Ae && (l = !1);
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function RR(e, t, a) {
      D1(e, t, a), _1(t);
    }
    function Cg(e, t) {
      switch (t.tag) {
        case Qe:
        case w:
        case V:
        case fe:
        case nt: {
          x1(Fc | Mc, t);
          return;
        }
        case Ce:
          return;
        case _e: {
          var a = t.stateNode;
          if (a != null) {
            var i = t.memoizedProps, l = e !== null ? e.memoizedProps : i, c = t.type, v = t.updateQueue;
            t.updateQueue = null, v !== null && zt(a, v, c, l, i);
          }
          return;
        }
        case Be: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var m = t.stateNode, C = t.memoizedProps, O = e !== null ? e.memoizedProps : C;
          rr(m, O, C);
          return;
        }
        case Te: {
          {
            var D = t.stateNode;
            D.hydrate && (D.hydrate = !1, TT(D.containerInfo));
          }
          return;
        }
        case x:
          return;
        case W: {
          _R(t), A1(t);
          return;
        }
        case qe: {
          A1(t);
          return;
        }
        case Se:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _R(e) {
      var t = e.memoizedState, a, i = e;
      t === null ? a = !1 : (a = !0, i = e.child, YR()), i !== null && ER(i, a);
    }
    function kR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && xT(c);
          }
        }
      }
    }
    function A1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new pR()), t.forEach(function(i) {
          var l = d_.bind(null, e, i);
          a.has(i) || (i.__reactDoNotTraceInteractions !== !0 && (l = E.unstable_wrap(l)), a.add(i), i.then(l, l));
        });
      }
    }
    function OR(e) {
      Hr(e.stateNode);
    }
    var DR = typeof WeakMap == "function" ? WeakMap : Map;
    function N1(e, t, a) {
      var i = Nl(a, null);
      i.tag = dy, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        s_(l), bg(e, t);
      }, i;
    }
    function P1(e, t, a) {
      var i = Nl(a, null);
      i.tag = dy;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return bg(e, t), l(c);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" ? i.callback = function() {
        yE(e), typeof l != "function" && (l_(this), bg(e, t));
        var C = t.value, O = t.stack;
        this.componentDidCatch(C, {
          componentStack: O !== null ? O : ""
        }), typeof l != "function" && e.expirationTime !== Ft && y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Me(e.type) || "Unknown");
      } : i.callback = function() {
        yE(e);
      }, i;
    }
    function AR(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new DR(), l = /* @__PURE__ */ new Set(), i.set(a, l)) : (l = i.get(a), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(a, l))), !l.has(t)) {
        l.add(t);
        var c = c_.bind(null, e, a, t);
        a.then(c, c);
      }
    }
    function NR(e, t, a, i, l) {
      if (a.effectTag |= yl, a.firstEffect = a.lastEffect = null, i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        if ((a.mode & Ia) === gr) {
          var v = a.alternate;
          v ? (a.updateQueue = v.updateQueue, a.memoizedState = v.memoizedState, a.expirationTime = v.expirationTime) : (a.updateQueue = null, a.memoizedState = null);
        }
        var m = lh(ci.current, zy), C = t;
        do {
          if (C.tag === W && Fw(C, m)) {
            var O = C.updateQueue;
            if (O === null) {
              var D = /* @__PURE__ */ new Set();
              D.add(c), C.updateQueue = D;
            } else
              O.add(c);
            if ((C.mode & Ia) === gr) {
              if (C.effectTag |= Jt, a.effectTag &= ~(jf | yl), a.tag === Ce) {
                var ee = a.alternate;
                if (ee === null)
                  a.tag = Se;
                else {
                  var j = Nl(Ft, null);
                  j.tag = Xv, Pl(a, j);
                }
              }
              a.expirationTime = Ft;
              return;
            }
            AR(e, l, c), C.effectTag |= xr, C.expirationTime = l;
            return;
          }
          C = C.return;
        } while (C !== null);
        i = new Error((Me(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + ar(a));
      }
      qR(), i = gg(i, a);
      var re = t;
      do {
        switch (re.tag) {
          case Te: {
            var we = i;
            re.effectTag |= xr, re.expirationTime = l;
            var De = N1(re, we, l);
            xE(re, De);
            return;
          }
          case Ce:
            var st = i, dt = re.type, Bt = re.stateNode;
            if ((re.effectTag & Jt) === $t && (typeof dt.getDerivedStateFromError == "function" || Bt !== null && typeof Bt.componentDidCatch == "function" && !Q1(Bt))) {
              re.effectTag |= xr, re.expirationTime = l;
              var kt = P1(re, st, l);
              xE(re, kt);
              return;
            }
            break;
        }
        re = re.return;
      } while (re !== null);
    }
    var PR = Math.ceil, Tg = T.ReactCurrentDispatcher, M1 = T.ReactCurrentOwner, xg = T.IsSomeRendererActing, Un = (
      /*                    */
      0
    ), _h = (
      /*               */
      1
    ), MR = (
      /*                 */
      2
    ), F1 = (
      /*         */
      4
    ), wg = (
      /*       */
      8
    ), Ea = (
      /*                */
      16
    ), ro = (
      /*                */
      32
    ), Ku = 0, kh = 1, z1 = 2, Oh = 3, Dh = 4, Rg = 5, vt = Un, ea = null, tt = null, Er = Ie, lr = Ku, Ah = null, Xo = Ft, Jd = Ft, Nh = null, ep = Ie, Ph = !1, _g = 0, L1 = 500, Je = null, Mh = !1, kg = null, $c = null, tp = !1, Vc = null, np = xc, Og = Ie, Zu = null, FR = 50, rp = 0, Dg = null, zR = 50, Fh = 0, ap = null, Ju = null, ip = Ie;
    function ao() {
      return (vt & (Ea | ro)) !== Un ? ny(ya()) : (ip !== Ie || (ip = ny(ya())), ip);
    }
    function LR() {
      return ny(ya());
    }
    function es(e, t, a) {
      var i = t.mode;
      if ((i & Ia) === gr)
        return Ft;
      var l = wc();
      if ((i & Rc) === gr)
        return l === Wr ? Ft : cE;
      if ((vt & Ea) !== Un)
        return Er;
      var c;
      if (a !== null)
        c = dw(e, a.timeoutMs | 0 || Fd);
      else
        switch (l) {
          case Wr:
            c = Ft;
            break;
          case Al:
            c = pE(e);
            break;
          case li:
          case ey:
            c = fw(e);
            break;
          case Nd:
            c = $u;
            break;
          default:
            throw Error("Expected a valid priority level");
        }
      return ea !== null && c === Er && (c -= 1), c;
    }
    function UR(e, t) {
      h_(), E_(e);
      var a = zh(e, t);
      if (a === null) {
        g_(e);
        return;
      }
      y_(e, t), Kx();
      var i = wc();
      if (t === Ft ? /* Check if we're inside unbatchedUpdates */ (vt & wg) !== Un && // Check if we're not already rendering
      (vt & (Ea | ro)) === Un ? (Il(a, t), Ag(a)) : (Sa(a), Il(a, t), vt === Un && Ji()) : (Sa(a), Il(a, t)), (vt & F1) !== Un && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (i === Al || i === Wr))
        if (Zu === null)
          Zu = /* @__PURE__ */ new Map([[a, t]]);
        else {
          var l = Zu.get(a);
          (l === void 0 || l > t) && Zu.set(a, t);
        }
    }
    var Wa = UR;
    function zh(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var a = e.alternate;
      a !== null && a.expirationTime < t && (a.expirationTime = t);
      var i = e.return, l = null;
      if (i === null && e.tag === Te)
        l = e.stateNode;
      else
        for (; i !== null; ) {
          if (a = i.alternate, i.childExpirationTime < t && (i.childExpirationTime = t), a !== null && a.childExpirationTime < t && (a.childExpirationTime = t), i.return === null && i.tag === Te) {
            l = i.stateNode;
            break;
          }
          i = i.return;
        }
      return l !== null && (ea === l && (jh(t), lr === Dh && os(l, Er)), lS(l, t)), l;
    }
    function Lh(e) {
      var t = e.lastExpiredTime;
      if (t !== Ie)
        return t;
      var a = e.firstPendingTime;
      if (!oS(e, a))
        return a;
      var i = e.lastPingedTime, l = e.nextKnownPendingLevel, c = i > l ? i : l;
      return c <= $u && a !== c ? Ie : c;
    }
    function Sa(e) {
      var t = e.lastExpiredTime;
      if (t !== Ie) {
        e.callbackExpirationTime = Ft, e.callbackPriority = Wr, e.callbackNode = lE(Ag.bind(null, e));
        return;
      }
      var a = Lh(e), i = e.callbackNode;
      if (a === Ie) {
        i !== null && (e.callbackNode = null, e.callbackExpirationTime = Ie, e.callbackPriority = xc);
        return;
      }
      var l = ao(), c = vE(l, a);
      if (i !== null) {
        var v = e.callbackPriority, m = e.callbackExpirationTime;
        if (
          // Callback must have the exact same expiration time.
          m === a && // Callback must have greater or equal priority.
          v >= c
        )
          return;
        sw(i);
      }
      e.callbackExpirationTime = a, e.callbackPriority = c;
      var C;
      a === Ft ? C = lE(Ag.bind(null, e)) : C = Pd(
        c,
        U1.bind(null, e),
        // Compute a task timeout based on the expiration time. This also affects
        // ordering because tasks are processed in timeout order.
        {
          timeout: Vu(a) - ya()
        }
      ), e.callbackNode = C;
    }
    function U1(e, t) {
      if (ip = Ie, t) {
        var a = ao();
        return Gg(e, a), Sa(e), null;
      }
      var i = Lh(e);
      if (i !== Ie) {
        var l = e.callbackNode;
        if ((vt & (Ea | ro)) !== Un)
          throw Error("Should not already be working.");
        if (Ul(), (e !== ea || i !== Er) && (ts(e, i), nS(e, i)), tt !== null) {
          var c = vt;
          vt |= Ea;
          var v = V1(), m = Uh(e);
          Ib(tt);
          do
            try {
              e_();
              break;
            } catch (D) {
              $1(e, D);
            }
          while (!0);
          if (qv(), vt = c, W1(v), Ih(m), lr === kh) {
            var C = Ah;
            throw Pg(), ts(e, i), os(e, i), Sa(e), C;
          }
          if (tt !== null)
            Pg();
          else {
            X1();
            var O = e.finishedWork = e.current.alternate;
            e.finishedExpirationTime = i, IR(e, O, lr, i);
          }
          if (Sa(e), e.callbackNode === l)
            return U1.bind(null, e);
        }
      }
      return null;
    }
    function IR(e, t, a, i) {
      switch (ea = null, a) {
        case Ku:
        case kh:
          throw Error("Root did not complete. This is a bug in React.");
        case z1: {
          Gg(e, i > $u ? $u : i);
          break;
        }
        case Oh: {
          os(e, i);
          var l = e.lastSuspendedTime;
          i === l && (e.nextKnownPendingLevel = Ng(t));
          var c = Xo === Ft;
          if (c && // do not delay if we're inside an act() scope
          !as.current) {
            var v = _g + L1 - ya();
            if (v > 10) {
              if (Ph) {
                var m = e.lastPingedTime;
                if (m === Ie || m >= i) {
                  e.lastPingedTime = i, ts(e, i);
                  break;
                }
              }
              var C = Lh(e);
              if (C !== Ie && C !== i)
                break;
              if (l !== Ie && l !== i) {
                e.lastPingedTime = l;
                break;
              }
              e.timeoutHandle = Y(ns.bind(null, e), v);
              break;
            }
          }
          ns(e);
          break;
        }
        case Dh: {
          os(e, i);
          var O = e.lastSuspendedTime;
          if (i === O && (e.nextKnownPendingLevel = Ng(t)), // do not delay if we're inside an act() scope
          !as.current) {
            if (Ph) {
              var D = e.lastPingedTime;
              if (D === Ie || D >= i) {
                e.lastPingedTime = i, ts(e, i);
                break;
              }
            }
            var ee = Lh(e);
            if (ee !== Ie && ee !== i)
              break;
            if (O !== Ie && O !== i) {
              e.lastPingedTime = O;
              break;
            }
            var j;
            if (Jd !== Ft)
              j = Vu(Jd) - ya();
            else if (Xo === Ft)
              j = 0;
            else {
              var re = KR(Xo), we = ya(), De = Vu(i) - we, st = we - re;
              st < 0 && (st = 0), j = p_(st) - st, De < j && (j = De);
            }
            if (j > 10) {
              e.timeoutHandle = Y(ns.bind(null, e), j);
              break;
            }
          }
          ns(e);
          break;
        }
        case Rg: {
          if (
            // do not delay if we're inside an act() scope
            !as.current && Xo !== Ft && Nh !== null
          ) {
            var dt = v_(Xo, i, Nh);
            if (dt > 10) {
              os(e, i), e.timeoutHandle = Y(ns.bind(null, e), dt);
              break;
            }
          }
          ns(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function Ag(e) {
      var t = e.lastExpiredTime, a = t !== Ie ? t : Ft;
      if ((vt & (Ea | ro)) !== Un)
        throw Error("Should not already be working.");
      if (Ul(), (e !== ea || a !== Er) && (ts(e, a), nS(e, a)), tt !== null) {
        var i = vt;
        vt |= Ea;
        var l = V1(), c = Uh(e);
        Ib(tt);
        do
          try {
            JR();
            break;
          } catch (m) {
            $1(e, m);
          }
        while (!0);
        if (qv(), vt = i, W1(l), Ih(c), lr === kh) {
          var v = Ah;
          throw Pg(), ts(e, a), os(e, a), Sa(e), v;
        }
        if (tt !== null)
          throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
        X1(), e.finishedWork = e.current.alternate, e.finishedExpirationTime = a, jR(e), Sa(e);
      }
      return null;
    }
    function jR(e) {
      ea = null, ns(e);
    }
    function HR() {
      if ((vt & (_h | Ea | ro)) !== Un) {
        (vt & Ea) !== Un && y("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      VR(), Ul();
    }
    function $R(e, t, a, i) {
      return Qo(Wr, e.bind(null, t, a, i));
    }
    function VR() {
      if (Zu !== null) {
        var e = Zu;
        Zu = null, e.forEach(function(t, a) {
          Gg(a, t), Sa(a);
        }), Ji();
      }
    }
    function I1(e, t) {
      var a = vt;
      vt |= _h;
      try {
        return e(t);
      } finally {
        vt = a, vt === Un && Ji();
      }
    }
    function WR(e, t) {
      var a = vt;
      vt |= MR;
      try {
        return e(t);
      } finally {
        vt = a, vt === Un && Ji();
      }
    }
    function BR(e, t, a, i, l) {
      var c = vt;
      vt |= F1;
      try {
        return Qo(Al, e.bind(null, t, a, i, l));
      } finally {
        vt = c, vt === Un && Ji();
      }
    }
    function j1(e, t) {
      var a = vt;
      vt &= ~_h, vt |= wg;
      try {
        return e(t);
      } finally {
        vt = a, vt === Un && Ji();
      }
    }
    function H1(e, t) {
      if ((vt & (Ea | ro)) !== Un)
        throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");
      var a = vt;
      vt |= _h;
      try {
        return Qo(Wr, e.bind(null, t));
      } finally {
        vt = a, Ji();
      }
    }
    function ts(e, t) {
      e.finishedWork = null, e.finishedExpirationTime = Ie;
      var a = e.timeoutHandle;
      if (a !== je && (e.timeoutHandle = je, Fe(a)), tt !== null)
        for (var i = tt.return; i !== null; )
          S1(i), i = i.return;
      ea = e, tt = is(e.current, null), Er = t, lr = Ku, Ah = null, Xo = Ft, Jd = Ft, Nh = null, ep = Ie, Ph = !1, Ju = null, ui.discardPendingWarnings();
    }
    function $1(e, t) {
      do {
        try {
          if (qv(), jE(), ia(), tt === null || tt.return === null)
            return lr = kh, Ah = t, tt = null, null;
          Fn && tt.mode & eo && Th(tt, !0), NR(e, tt.return, tt, t, Er), tt = G1(tt);
        } catch (a) {
          t = a;
          continue;
        }
        return;
      } while (!0);
    }
    function V1(e) {
      var t = Tg.current;
      return Tg.current = Eh, t === null ? Eh : t;
    }
    function W1(e) {
      Tg.current = e;
    }
    function Uh(e) {
      {
        var t = E.__interactionsRef.current;
        return E.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function Ih(e) {
      E.__interactionsRef.current = e;
    }
    function YR() {
      _g = ya();
    }
    function B1(e, t) {
      e < Xo && e > $u && (Xo = e), t !== null && e < Jd && e > $u && (Jd = e, Nh = t);
    }
    function jh(e) {
      e > ep && (ep = e);
    }
    function GR() {
      lr === Ku && (lr = Oh);
    }
    function QR() {
      (lr === Ku || lr === Oh) && (lr = Dh), ep !== Ie && ea !== null && (os(ea, Er), lS(ea, ep));
    }
    function qR() {
      lr !== Rg && (lr = z1);
    }
    function XR() {
      return lr === Ku;
    }
    function KR(e) {
      var t = Vu(e);
      return t - Fd;
    }
    function ZR(e, t) {
      var a = Vu(e);
      return a - (t.timeoutMs | 0 || Fd);
    }
    function JR() {
      for (; tt !== null; )
        tt = Y1(tt);
    }
    function e_() {
      for (; tt !== null && !lw(); )
        tt = Y1(tt);
    }
    function Y1(e) {
      var t = e.alternate;
      zb(e), ol(e);
      var a;
      return (e.mode & eo) !== gr ? (ng(e), a = Mg(t, e, Er), Th(e, !0)) : a = Mg(t, e, Er), ia(), e.memoizedProps = e.pendingProps, a === null && (a = G1(e)), M1.current = null, a;
    }
    function G1(e) {
      tt = e;
      do {
        var t = tt.alternate, a = tt.return;
        if ((tt.effectTag & yl) === $t) {
          ol(tt);
          var i = void 0;
          if ((tt.mode & eo) === gr ? i = E1(t, tt, Er) : (ng(tt), i = E1(t, tt, Er), Th(tt, !1)), Ub(tt), ia(), t_(tt), i !== null)
            return i;
          if (a !== null && // Do not append effects to parents if a sibling failed to complete
          (a.effectTag & yl) === $t) {
            a.firstEffect === null && (a.firstEffect = tt.firstEffect), tt.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = tt.firstEffect), a.lastEffect = tt.lastEffect);
            var l = tt.effectTag;
            l > sa && (a.lastEffect !== null ? a.lastEffect.nextEffect = tt : a.firstEffect = tt, a.lastEffect = tt);
          }
        } else {
          var c = fR(tt);
          if ((tt.mode & eo) !== gr) {
            Th(tt, !1);
            for (var v = tt.actualDuration, m = tt.child; m !== null; )
              v += m.actualDuration, m = m.sibling;
            tt.actualDuration = v;
          }
          if (c !== null)
            return Zx(tt), c.effectTag &= Hf, c;
          Ub(tt), a !== null && (a.firstEffect = a.lastEffect = null, a.effectTag |= yl);
        }
        var C = tt.sibling;
        if (C !== null)
          return C;
        tt = a;
      } while (tt !== null);
      return lr === Ku && (lr = Rg), null;
    }
    function Ng(e) {
      var t = e.expirationTime, a = e.childExpirationTime;
      return t > a ? t : a;
    }
    function t_(e) {
      if (!(Er !== to && e.childExpirationTime === to)) {
        var t = Ie;
        if ((e.mode & eo) !== gr) {
          for (var a = e.actualDuration, i = e.selfBaseDuration, l = e.alternate === null || e.child !== e.alternate.child, c = e.child; c !== null; ) {
            var v = c.expirationTime, m = c.childExpirationTime;
            v > t && (t = v), m > t && (t = m), l && (a += c.actualDuration), i += c.treeBaseDuration, c = c.sibling;
          }
          e.actualDuration = a, e.treeBaseDuration = i;
        } else
          for (var C = e.child; C !== null; ) {
            var O = C.expirationTime, D = C.childExpirationTime;
            O > t && (t = O), D > t && (t = D), C = C.sibling;
          }
        e.childExpirationTime = t;
      }
    }
    function ns(e) {
      var t = wc();
      return Qo(Wr, n_.bind(null, e, t)), null;
    }
    function n_(e, t) {
      do
        Ul();
      while (Vc !== null);
      if (m_(), (vt & (Ea | ro)) !== Un)
        throw Error("Should not already be working.");
      var a = e.finishedWork, i = e.finishedExpirationTime;
      if (a === null)
        return null;
      if (e.finishedWork = null, e.finishedExpirationTime = Ie, a === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackExpirationTime = Ie, e.callbackPriority = xc, e.nextKnownPendingLevel = Ie, Jx();
      var l = Ng(a);
      V_(e, i, l), e === ea && (ea = null, tt = null, Er = Ie);
      var c;
      if (a.effectTag > sa ? a.lastEffect !== null ? (a.lastEffect.nextEffect = a, c = a.firstEffect) : c = a : c = a.firstEffect, c !== null) {
        var v = vt;
        vt |= ro;
        var m = Uh(e);
        M1.current = null, Hb(), n(e.containerInfo), Je = c;
        do
          if (K(null, r_, null), M()) {
            if (Je === null)
              throw Error("Should be working on an effect.");
            var C = ge();
            rs(Je, C), Je = Je.nextEffect;
          }
        while (Je !== null);
        $b(), ZE(), Vb(), Je = c;
        do
          if (K(null, a_, null, e, t), M()) {
            if (Je === null)
              throw Error("Should be working on an effect.");
            var O = ge();
            rs(Je, O), Je = Je.nextEffect;
          }
        while (Je !== null);
        Wb(), r(e.containerInfo), e.current = a, Bb(), Je = c;
        do
          if (K(null, i_, null, e, i), M()) {
            if (Je === null)
              throw Error("Should be working on an effect.");
            var D = ge();
            rs(Je, D), Je = Je.nextEffect;
          }
        while (Je !== null);
        Yb(), Je = null, uw(), Ih(m), vt = v;
      } else
        e.current = a, Hb(), $b(), ZE(), Vb(), Wb(), Bb(), Yb();
      ew();
      var ee = tp;
      if (tp)
        tp = !1, Vc = e, Og = i, np = t;
      else
        for (Je = c; Je !== null; ) {
          var j = Je.nextEffect;
          Je.nextEffect = null, Je = j;
        }
      var re = e.firstPendingTime;
      if (re !== Ie) {
        if (Ju !== null) {
          var we = Ju;
          Ju = null;
          for (var De = 0; De < we.length; De++)
            tS(e, we[De], e.memoizedInteractions);
        }
        Il(e, re);
      } else
        $c = null;
      if (ee || rS(e, i), re === Ft ? e === Dg ? rp++ : (rp = 0, Dg = e) : rp = 0, __(a.stateNode, i), Sa(e), Mh) {
        Mh = !1;
        var st = kg;
        throw kg = null, st;
      }
      return (vt & wg) !== Un || Ji(), null;
    }
    function r_() {
      for (; Je !== null; ) {
        var e = Je.effectTag;
        if ((e & Di) !== $t) {
          ol(Je), zv();
          var t = Je.alternate;
          yR(t, Je), ia();
        }
        (e & Ai) !== $t && (tp || (tp = !0, Pd(li, function() {
          return Ul(), null;
        }))), Je = Je.nextEffect;
      }
    }
    function a_(e, t) {
      for (; Je !== null; ) {
        ol(Je);
        var a = Je.effectTag;
        if (a & zr && OR(Je), a & Tr) {
          var i = Je.alternate;
          i !== null && CR(i);
        }
        var l = a & (An | Mt | xo | Xr);
        switch (l) {
          case An: {
            O1(Je), Je.effectTag &= ~An;
            break;
          }
          case Ip: {
            O1(Je), Je.effectTag &= ~An;
            var c = Je.alternate;
            Cg(c, Je);
            break;
          }
          case Xr: {
            Je.effectTag &= ~Xr;
            break;
          }
          case Ls: {
            Je.effectTag &= ~Xr;
            var v = Je.alternate;
            Cg(v, Je);
            break;
          }
          case Mt: {
            var m = Je.alternate;
            Cg(m, Je);
            break;
          }
          case xo: {
            RR(e, Je, t);
            break;
          }
        }
        zv(), ia(), Je = Je.nextEffect;
      }
    }
    function i_(e, t) {
      for (; Je !== null; ) {
        ol(Je);
        var a = Je.effectTag;
        if (a & (Mt | If)) {
          zv();
          var i = Je.alternate;
          bR(e, i, Je);
        }
        a & Tr && (zv(), SR(Je)), ia(), Je = Je.nextEffect;
      }
    }
    function Ul() {
      if (np !== xc) {
        var e = np > li ? li : np;
        return np = xc, Qo(e, o_);
      }
    }
    function o_() {
      if (Vc === null)
        return !1;
      var e = Vc, t = Og;
      if (Vc = null, Og = Ie, (vt & (Ea | ro)) !== Un)
        throw Error("Cannot flush passive effects while already rendering.");
      var a = vt;
      vt |= ro;
      for (var i = Uh(e), l = e.current.firstEffect; l !== null; ) {
        {
          if (ol(l), K(null, gR, null, l), M()) {
            if (l === null)
              throw Error("Should be working on an effect.");
            var c = ge();
            rs(l, c);
          }
          ia();
        }
        var v = l.nextEffect;
        l.nextEffect = null, l = v;
      }
      return Ih(i), rS(e, t), vt = a, Ji(), Fh = Vc === null ? 0 : Fh + 1, !0;
    }
    function Q1(e) {
      return $c !== null && $c.has(e);
    }
    function l_(e) {
      $c === null ? $c = /* @__PURE__ */ new Set([e]) : $c.add(e);
    }
    function u_(e) {
      Mh || (Mh = !0, kg = e);
    }
    var s_ = u_;
    function q1(e, t, a) {
      var i = gg(a, t), l = N1(e, i, Ft);
      Pl(e, l);
      var c = zh(e, Ft);
      c !== null && (Sa(c), Il(c, Ft));
    }
    function rs(e, t) {
      if (e.tag === Te) {
        q1(e, e, t);
        return;
      }
      for (var a = e.return; a !== null; ) {
        if (a.tag === Te) {
          q1(a, e, t);
          return;
        } else if (a.tag === Ce) {
          var i = a.type, l = a.stateNode;
          if (typeof i.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && !Q1(l)) {
            var c = gg(t, e), v = P1(
              a,
              c,
              // TODO: This is always sync
              Ft
            );
            Pl(a, v);
            var m = zh(a, Ft);
            m !== null && (Sa(m), Il(m, Ft));
            return;
          }
        }
        a = a.return;
      }
    }
    function c_(e, t, a) {
      var i = e.pingCache;
      if (i !== null && i.delete(t), ea === e && Er === a) {
        lr === Dh || lr === Oh && Xo === Ft && ya() - _g < L1 ? ts(e, Er) : Ph = !0;
        return;
      }
      if (oS(e, a)) {
        var l = e.lastPingedTime;
        l !== Ie && l < a || (e.lastPingedTime = a, Sa(e), Il(e, a));
      }
    }
    function f_(e, t) {
      if (t === Ie) {
        var a = null, i = ao();
        t = es(i, e, a);
      }
      var l = zh(e, t);
      l !== null && (Sa(l), Il(l, t));
    }
    function d_(e, t) {
      var a = Ie, i;
      i = e.stateNode, i !== null && i.delete(t), f_(e, a);
    }
    function p_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : PR(e / 1960) * 1960;
    }
    function v_(e, t, a) {
      var i = a.busyMinDurationMs | 0;
      if (i <= 0)
        return 0;
      var l = a.busyDelayMs | 0, c = ya(), v = ZR(e, a), m = c - v;
      if (m <= l)
        return 0;
      var C = l + i - m;
      return C;
    }
    function h_() {
      if (rp > FR)
        throw rp = 0, Dg = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Fh > zR && (Fh = 0, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function m_() {
      ui.flushLegacyContextWarning(), ui.flushPendingUnsafeLifecycleWarnings();
    }
    function X1() {
      var e = !0;
      jb(ap, e), ap = null;
    }
    function Pg() {
      var e = !1;
      jb(ap, e), ap = null;
    }
    function y_(e, t) {
      ea !== null && t > Er && (ap = e);
    }
    var Hh = null;
    function g_(e) {
      {
        var t = e.tag;
        if (t !== Te && t !== Ce && t !== Qe && t !== w && t !== V && t !== fe && t !== nt)
          return;
        var a = Me(e.type) || "ReactComponent";
        if (Hh !== null) {
          if (Hh.has(a))
            return;
          Hh.add(a);
        } else
          Hh = /* @__PURE__ */ new Set([a]);
        y("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s", t === Ce ? "the componentWillUnmount method" : "a useEffect cleanup function", ar(e));
      }
    }
    var Mg;
    {
      var b_ = null;
      Mg = function(e, t, a) {
        var i = iS(b_, t);
        try {
          return h1(e, t, a);
        } catch (c) {
          if (c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (qv(), jE(), S1(t), iS(t, i), t.mode & eo && ng(t), K(null, h1, null, e, t, a), M()) {
            var l = ge();
            throw l;
          } else
            throw c;
        }
      };
    }
    var K1 = !1, Fg;
    Fg = /* @__PURE__ */ new Set();
    function E_(e) {
      if (ql && (vt & Ea) !== Un)
        switch (e.tag) {
          case Qe:
          case w:
          case fe: {
            var t = tt && Me(tt.type) || "Unknown", a = t;
            if (!Fg.has(a)) {
              Fg.add(a);
              var i = Me(e.type) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render", i, t, t);
            }
            break;
          }
          case Ce: {
            K1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), K1 = !0);
            break;
          }
        }
    }
    var as = {
      current: !1
    };
    function Z1(e) {
      xg.current === !0 && as.current !== !0 && y(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);%s`, ar(e));
    }
    function J1(e) {
      (e.mode & On) !== gr && xg.current === !1 && as.current === !1 && y(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, Me(e.type), ar(e));
    }
    function S_(e) {
      vt === Un && xg.current === !1 && as.current === !1 && y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, Me(e.type), ar(e));
    }
    var C_ = S_, eS = !1;
    function T_(e) {
      eS === !1 && h.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ia || e.mode & Rc) && (eS = !0, y(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`));
    }
    function zg(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Lg(e) {
      Ju === null ? Ju = [e] : Ju.push(e);
    }
    function tS(e, t, a) {
      if (a.size > 0) {
        var i = e.pendingInteractionMap, l = i.get(t);
        l != null ? a.forEach(function(m) {
          l.has(m) || m.__count++, l.add(m);
        }) : (i.set(t, new Set(a)), a.forEach(function(m) {
          m.__count++;
        }));
        var c = E.__subscriberRef.current;
        if (c !== null) {
          var v = zg(e, t);
          c.onWorkScheduled(a, v);
        }
      }
    }
    function Il(e, t) {
      tS(e, t, E.__interactionsRef.current);
    }
    function nS(e, t) {
      var a = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(c, v) {
        v >= t && c.forEach(function(m) {
          return a.add(m);
        });
      }), e.memoizedInteractions = a, a.size > 0) {
        var i = E.__subscriberRef.current;
        if (i !== null) {
          var l = zg(e, t);
          try {
            i.onWorkStarted(a, l);
          } catch (c) {
            Pd(Wr, function() {
              throw c;
            });
          }
        }
      }
    }
    function rS(e, t) {
      var a = e.firstPendingTime, i;
      try {
        if (i = E.__subscriberRef.current, i !== null && e.memoizedInteractions.size > 0) {
          var l = zg(e, t);
          i.onWorkStopped(e.memoizedInteractions, l);
        }
      } catch (v) {
        Pd(Wr, function() {
          throw v;
        });
      } finally {
        var c = e.pendingInteractionMap;
        c.forEach(function(v, m) {
          m > a && (c.delete(m), v.forEach(function(C) {
            if (C.__count--, i !== null && C.__count === 0)
              try {
                i.onInteractionScheduledWorkCompleted(C);
              } catch (O) {
                Pd(Wr, function() {
                  throw O;
                });
              }
          }));
        });
      }
    }
    var Ug = null, Ig = null, jg = null, Wc = !1, x_ = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function w_(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"), !0;
      try {
        var a = t.inject(e);
        typeof t.onScheduleFiberRoot == "function" && (Ug = function(i, l) {
          try {
            t.onScheduleFiberRoot(a, i, l);
          } catch (c) {
            Wc || (Wc = !0, y("React instrumentation encountered an error: %s", c));
          }
        }), Ig = function(i, l) {
          try {
            var c = (i.current.effectTag & Jt) === Jt;
            if (Fn) {
              var v = LR(), m = vE(v, l);
              t.onCommitFiberRoot(a, i, m, c);
            }
          } catch (C) {
            Wc || (Wc = !0, y("React instrumentation encountered an error: %s", C));
          }
        }, jg = function(i) {
          try {
            t.onCommitFiberUnmount(a, i);
          } catch (l) {
            Wc || (Wc = !0, y("React instrumentation encountered an error: %s", l));
          }
        };
      } catch (i) {
        y("React instrumentation encountered an error: %s.", i);
      }
      return !0;
    }
    function R_(e, t) {
      typeof Ug == "function" && Ug(e, t);
    }
    function __(e, t) {
      typeof Ig == "function" && Ig(e, t);
    }
    function k_(e) {
      typeof jg == "function" && jg(e);
    }
    var Hg;
    {
      Hg = !1;
      try {
        var aS = Object.preventExtensions({}), O_ = /* @__PURE__ */ new Map([[aS, null]]), D_ = /* @__PURE__ */ new Set([aS]);
        O_.set(0, 0), D_.add(0);
      } catch {
        Hg = !0;
      }
    }
    var A_ = 1;
    function N_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.effectTag = $t, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.expirationTime = Ie, this.childExpirationTime = Ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = A_++, this._debugIsCurrentlyTiming = !1, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Hg && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new N_(e, t, a, i);
    };
    function $g(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function P_(e) {
      return typeof e == "function" && !$g(e) && e.defaultProps === void 0;
    }
    function M_(e) {
      if (typeof e == "function")
        return $g(e) ? Ce : Qe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === pr)
          return w;
        if (t === qa)
          return V;
      }
      return Ze;
    }
    function is(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugID = e._debugID, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.effectTag = $t, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, a.actualDuration = 0, a.actualStartTime = -1), a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        expirationTime: i.expirationTime,
        firstContext: i.firstContext,
        responders: i.responders
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ze:
        case Qe:
        case fe:
          a.type = kc(e.type);
          break;
        case Ce:
          a.type = iy(e.type);
          break;
        case w:
          a.type = oy(e.type);
          break;
      }
      return a;
    }
    function F_(e, t) {
      e.effectTag &= An, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var a = e.alternate;
      if (a === null)
        e.childExpirationTime = Ie, e.expirationTime = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          expirationTime: i.expirationTime,
          firstContext: i.firstContext,
          responders: i.responders
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function z_(e) {
      var t;
      return e === rw ? t = Rc | Ia | On : e === nw ? t = Ia | On : t = gr, x_ && (t |= eo), di(Te, null, null, t);
    }
    function Vg(e, t, a, i, l, c) {
      var v, m = Ze, C = e;
      if (typeof e == "function")
        $g(e) ? (m = Ce, C = iy(C)) : C = kc(C);
      else if (typeof e == "string")
        m = _e;
      else
        e:
          switch (e) {
            case Ye:
              return jl(a.children, l, c, t);
            case zn:
              m = be, l |= Rc | Ia | On;
              break;
            case ft:
              m = be, l |= On;
              break;
            case jt:
              return L_(a, l, c, t);
            case vr:
              return U_(a, l, c, t);
            case al:
              return I_(a, l, c, t);
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case kn:
                    m = U;
                    break e;
                  case Dn:
                    m = ne;
                    break e;
                  case pr:
                    m = w, C = oy(C);
                    break e;
                  case qa:
                    m = V;
                    break e;
                  case aa:
                    m = Oe, C = null;
                    break e;
                  case il:
                    m = nt;
                    break e;
                }
              var O = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var D = i ? Me(i.type) : null;
                D && (O += `

Check the render method of \`` + D + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + O);
            }
          }
      return v = di(m, a, t, l), v.elementType = e, v.type = C, v.expirationTime = c, v;
    }
    function Wg(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, c = e.key, v = e.props, m = Vg(l, c, v, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function jl(e, t, a, i) {
      var l = di(yt, e, i, t);
      return l.expirationTime = a, l;
    }
    function L_(e, t, a, i) {
      (typeof e.id != "string" || typeof e.onRender != "function") && y('Profiler must specify an "id" string and "onRender" function as props');
      var l = di(x, e, i, t | eo);
      return l.elementType = jt, l.type = jt, l.expirationTime = a, l;
    }
    function U_(e, t, a, i) {
      var l = di(W, e, i, t);
      return l.type = vr, l.elementType = vr, l.expirationTime = a, l;
    }
    function I_(e, t, a, i) {
      var l = di(qe, e, i, t);
      return l.type = al, l.elementType = al, l.expirationTime = a, l;
    }
    function Bg(e, t, a) {
      var i = di(Be, e, null, t);
      return i.expirationTime = a, i;
    }
    function j_() {
      var e = di(_e, null, null, gr);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function Yg(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(Ae, i, e.key, t);
      return l.expirationTime = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function iS(e, t) {
      return e === null && (e = di(Ze, null, null, gr)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.effectTag = t.effectTag, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.expirationTime = t.expirationTime, e.childExpirationTime = t.childExpirationTime, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugIsCurrentlyTiming = t._debugIsCurrentlyTiming, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function H_(e, t, a) {
      this.tag = t, this.current = null, this.containerInfo = e, this.pendingChildren = null, this.pingCache = null, this.finishedExpirationTime = Ie, this.finishedWork = null, this.timeoutHandle = je, this.context = null, this.pendingContext = null, this.hydrate = a, this.callbackNode = null, this.callbackPriority = xc, this.firstPendingTime = Ie, this.firstSuspendedTime = Ie, this.lastSuspendedTime = Ie, this.nextKnownPendingLevel = Ie, this.lastPingedTime = Ie, this.lastExpiredTime = Ie, this.interactionThreadID = E.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map();
    }
    function $_(e, t, a, i) {
      var l = new H_(e, t, a), c = z_(t);
      return l.current = c, c.stateNode = l, vy(c), l;
    }
    function oS(e, t) {
      var a = e.firstSuspendedTime, i = e.lastSuspendedTime;
      return a !== Ie && a >= t && i <= t;
    }
    function os(e, t) {
      var a = e.firstSuspendedTime, i = e.lastSuspendedTime;
      a < t && (e.firstSuspendedTime = t), (i > t || a === Ie) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = Ie), t <= e.lastExpiredTime && (e.lastExpiredTime = Ie);
    }
    function lS(e, t) {
      var a = e.firstPendingTime;
      t > a && (e.firstPendingTime = t);
      var i = e.firstSuspendedTime;
      i !== Ie && (t >= i ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = Ie : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function V_(e, t, a) {
      e.firstPendingTime = a, t <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = Ie : t <= e.firstSuspendedTime && (e.firstSuspendedTime = t - 1), t <= e.lastPingedTime && (e.lastPingedTime = Ie), t <= e.lastExpiredTime && (e.lastExpiredTime = Ie);
    }
    function Gg(e, t) {
      var a = e.lastExpiredTime;
      (a === Ie || a > t) && (e.lastExpiredTime = t);
    }
    var Qg, qg;
    Qg = !1, qg = {};
    function W_(e) {
      if (!e)
        return ma;
      var t = ri(e), a = tw(t);
      if (t.tag === Ce) {
        var i = t.type;
        if (Zi(i))
          return qb(t, i, a);
      }
      return a;
    }
    function B_(e, t) {
      {
        var a = ri(e);
        if (a === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var i = Vf(a);
        if (i === null)
          return null;
        if (i.mode & On) {
          var l = Me(a.type) || "Component";
          qg[l] || (qg[l] = !0, a.mode & On ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, l, ar(i)) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, l, ar(i)));
        }
        return i.stateNode;
      }
    }
    function Y_(e, t, a, i) {
      return $_(e, t, a);
    }
    function op(e, t, a, i) {
      R_(t, e);
      var l = t.current, c = ao();
      typeof jest < "u" && (T_(l), Z1(l));
      var v = Vd(), m = es(c, l, v), C = W_(a);
      t.context === null ? t.context = C : t.pendingContext = C, ql && Xa !== null && !Qg && (Qg = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Me(Xa.type) || "Unknown"));
      var O = Nl(m, v);
      return O.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), O.callback = i), Pl(l, O), Wa(l, m), m;
    }
    function Xg(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case _e:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function uS(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && a.retryTime < t && (a.retryTime = t);
    }
    function Kg(e, t) {
      uS(e, t);
      var a = e.alternate;
      a && uS(a, t);
    }
    function G_(e) {
      if (e.tag === W) {
        var t = pE(ao());
        Wa(e, t), Kg(e, t);
      }
    }
    function Q_(e) {
      e.tag === W && (Wa(e, sE), Kg(e, sE));
    }
    function q_(e) {
      if (e.tag === W) {
        var t = ao(), a = es(t, e, null);
        Wa(e, a), Kg(e, a);
      }
    }
    function sS(e) {
      var t = hu(e);
      return t === null ? null : t.tag === ce ? t.stateNode.instance : t.stateNode;
    }
    var cS = function(e) {
      return !1;
    };
    function X_(e) {
      return cS(e);
    }
    var fS = null, dS = null, pS = null, vS = null;
    {
      var hS = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = Array.isArray(e) ? e.slice() : d({}, e);
        return c[l] = hS(e[l], t, a + 1, i), c;
      }, mS = function(e, t, a) {
        return hS(e, t, 0, a);
      };
      fS = function(e, t, a, i) {
        for (var l = e.memoizedState; l !== null && t > 0; )
          l = l.next, t--;
        if (l !== null) {
          var c = mS(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = d({}, e.memoizedProps), Wa(e, Ft);
        }
      }, dS = function(e, t, a) {
        e.pendingProps = mS(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), Wa(e, Ft);
      }, pS = function(e) {
        Wa(e, Ft);
      }, vS = function(e) {
        cS = e;
      };
    }
    function K_(e) {
      var t = e.findFiberByHostInstance, a = T.ReactCurrentDispatcher;
      return w_(d({}, e, {
        overrideHookState: fS,
        overrideProps: dS,
        setSuspenseHandler: vS,
        scheduleUpdate: pS,
        currentDispatcherRef: a,
        findHostInstanceByFiber: function(i) {
          var l = Vf(i);
          return l === null ? null : l.stateNode;
        },
        findFiberByHostInstance: function(i) {
          return t ? t(i) : null;
        },
        // React Refresh
        findHostInstancesForRefresh: yw,
        scheduleRefresh: hw,
        scheduleRoot: mw,
        setRefreshHandler: vw,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: function() {
          return Xa;
        }
      }));
    }
    T.IsSomeRendererActing;
    function Zg(e, t, a) {
      this._internalRoot = Z_(e, t, a);
    }
    Zg.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var a = t.containerInfo;
        if (a.nodeType !== mr) {
          var i = sS(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      op(e, t, null, null);
    }, Zg.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      op(null, e, null, function() {
        ob(t);
      });
    };
    function Z_(e, t, a) {
      var i = a != null && a.hydrate === !0;
      a != null && a.hydrationOptions;
      var l = Y_(e, t, i);
      if (MT(l.current, e), i && t !== Kb) {
        var c = e.nodeType === Ci ? e : e.ownerDocument;
        Bs(e, c);
      }
      return l;
    }
    function J_(e, t) {
      return new Zg(e, Kb, t);
    }
    function Bc(e) {
      return !!(e && (e.nodeType === oa || e.nodeType === Ci || e.nodeType === Ts || e.nodeType === mr && e.nodeValue === " react-mount-point-unstable "));
    }
    var ek = T.ReactCurrentOwner, yS, gS = !1;
    yS = function(e) {
      if (e._reactRootContainer && e.nodeType !== mr) {
        var t = sS(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = $h(e), l = !!(i && Dl(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === oa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function $h(e) {
      return e ? e.nodeType === Ci ? e.documentElement : e.firstChild : null;
    }
    function tk(e) {
      var t = $h(e);
      return !!(t && t.nodeType === oa && t.hasAttribute(Ee));
    }
    function nk(e, t) {
      var a = t || tk(e);
      if (!a)
        for (var i = !1, l; l = e.lastChild; )
          !i && l.nodeType === oa && l.hasAttribute(Ee) && (i = !0, y("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(l);
      return a && !t && !gS && (gS = !0, R("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), J_(e, a ? {
        hydrate: !0
      } : void 0);
    }
    function rk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vh(e, t, a, i, l) {
      yS(a), rk(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, v;
      if (c) {
        if (v = c._internalRoot, typeof l == "function") {
          var C = l;
          l = function() {
            var O = Xg(v);
            C.call(O);
          };
        }
        op(t, v, e, l);
      } else {
        if (c = a._reactRootContainer = nk(a, i), v = c._internalRoot, typeof l == "function") {
          var m = l;
          l = function() {
            var O = Xg(v);
            m.call(O);
          };
        }
        j1(function() {
          op(t, v, e, l);
        });
      }
      return Xg(v);
    }
    function ak(e) {
      {
        var t = ek.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Me(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === oa ? e : B_(e, "findDOMNode");
    }
    function ik(e, t, a) {
      if (!Bc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = Mm(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Vh(null, e, t, !0, a);
    }
    function ok(e, t, a) {
      if (!Bc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = Mm(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vh(null, e, t, !1, a);
    }
    function lk(e, t, a, i) {
      if (!Bc(a))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Uf(e)))
        throw Error("parentComponent must be a valid React Component");
      return Vh(e, t, a, !1, i);
    }
    function uk(e) {
      if (!Bc(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Mm(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = $h(e), i = a && !Dl(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return j1(function() {
          Vh(null, null, e, !1, function() {
            e._reactRootContainer = null, ob(e);
          });
        }), !0;
      } else {
        {
          var l = $h(e), c = !!(l && Dl(l)), v = e.nodeType === oa && Bc(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    function sk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: at,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var bS = "16.14.0";
    Yf(G_), $s(Q_), Ws(q_);
    var ES = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), Ct(gv), lo(I1, BR, HR, WR);
    function SS(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bc(t))
        throw Error("Target container is not a DOM element.");
      return sk(e, t, null, a);
    }
    function ck(e, t, a, i) {
      return lk(e, t, a, i);
    }
    function fk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return ES || (ES = !0, R('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), SS(e, t, a);
    }
    var dk = {
      // Keep in sync with ReactDOMUnstableNativeDependencies.js
      // ReactTestUtils.js, and ReactTestUtilsAct.js. This is an array for better minification.
      Events: [Dl, zu, Fm, _n, nn, mc, BT, ct, $n, Tu, js, Ul, as]
    }, pk = K_({
      findFiberByHostInstance: Ed,
      bundleType: 1,
      version: bS,
      rendererPackageName: "react-dom"
    });
    if (!pk && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var CS = window.location.protocol;
      /^(https?|file):$/.test(CS) && console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" + (CS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dk, Ta.createPortal = SS, Ta.findDOMNode = ak, Ta.flushSync = H1, Ta.hydrate = ik, Ta.render = ok, Ta.unmountComponentAtNode = uk, Ta.unstable_batchedUpdates = I1, Ta.unstable_createPortal = fk, Ta.unstable_renderSubtreeIntoContainer = ck, Ta.version = bS;
  }()), Ta;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if ({}.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (s) {
      console.error(s);
    }
  }
}
({}).NODE_ENV === "production" ? (sT(), S0.exports = vN()) : S0.exports = gN();
var bN = S0.exports;
const EN = /* @__PURE__ */ O0(bN);
var C0 = { exports: {} }, Kt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dC;
function SN() {
  if (dC)
    return Kt;
  dC = 1;
  var s = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), y = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), ue;
  ue = Symbol.for("react.module.reference");
  function te($) {
    if (typeof $ == "object" && $ !== null) {
      var de = $.$$typeof;
      switch (de) {
        case s:
          switch ($ = $.type, $) {
            case h:
            case E:
            case p:
            case z:
            case P:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case y:
                case R:
                case N:
                case se:
                case q:
                case T:
                  return $;
                default:
                  return de;
              }
          }
        case d:
          return de;
      }
    }
  }
  return Kt.ContextConsumer = R, Kt.ContextProvider = T, Kt.Element = s, Kt.ForwardRef = N, Kt.Fragment = h, Kt.Lazy = se, Kt.Memo = q, Kt.Portal = d, Kt.Profiler = E, Kt.StrictMode = p, Kt.Suspense = z, Kt.SuspenseList = P, Kt.isAsyncMode = function() {
    return !1;
  }, Kt.isConcurrentMode = function() {
    return !1;
  }, Kt.isContextConsumer = function($) {
    return te($) === R;
  }, Kt.isContextProvider = function($) {
    return te($) === T;
  }, Kt.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === s;
  }, Kt.isForwardRef = function($) {
    return te($) === N;
  }, Kt.isFragment = function($) {
    return te($) === h;
  }, Kt.isLazy = function($) {
    return te($) === se;
  }, Kt.isMemo = function($) {
    return te($) === q;
  }, Kt.isPortal = function($) {
    return te($) === d;
  }, Kt.isProfiler = function($) {
    return te($) === E;
  }, Kt.isStrictMode = function($) {
    return te($) === p;
  }, Kt.isSuspense = function($) {
    return te($) === z;
  }, Kt.isSuspenseList = function($) {
    return te($) === P;
  }, Kt.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === h || $ === E || $ === p || $ === z || $ === P || $ === he || typeof $ == "object" && $ !== null && ($.$$typeof === se || $.$$typeof === q || $.$$typeof === T || $.$$typeof === R || $.$$typeof === N || $.$$typeof === ue || $.getModuleId !== void 0);
  }, Kt.typeOf = te, Kt;
}
var Zt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pC;
function CN() {
  return pC || (pC = 1, {}.NODE_ENV !== "production" && function() {
    var s = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), y = Symbol.for("react.server_context"), N = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), ue = !1, te = !1, $ = !1, de = !1, K = !1, le;
    le = Symbol.for("react.module.reference");
    function ae(ce) {
      return !!(typeof ce == "string" || typeof ce == "function" || ce === h || ce === E || K || ce === p || ce === z || ce === P || de || ce === he || ue || te || $ || typeof ce == "object" && ce !== null && (ce.$$typeof === se || ce.$$typeof === q || ce.$$typeof === T || ce.$$typeof === R || ce.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ce.$$typeof === le || ce.getModuleId !== void 0));
    }
    function M(ce) {
      if (typeof ce == "object" && ce !== null) {
        var Ue = ce.$$typeof;
        switch (Ue) {
          case s:
            var nt = ce.type;
            switch (nt) {
              case h:
              case E:
              case p:
              case z:
              case P:
                return nt;
              default:
                var rt = nt && nt.$$typeof;
                switch (rt) {
                  case y:
                  case R:
                  case N:
                  case se:
                  case q:
                  case T:
                    return rt;
                  default:
                    return Ue;
                }
            }
          case d:
            return Ue;
        }
      }
    }
    var ge = R, ye = T, Xe = s, Ke = N, it = h, pt = se, et = q, St = d, Qe = E, Ce = p, Ze = z, Te = P, Ae = !1, _e = !1;
    function Be(ce) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function yt(ce) {
      return _e || (_e = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function be(ce) {
      return M(ce) === R;
    }
    function ne(ce) {
      return M(ce) === T;
    }
    function U(ce) {
      return typeof ce == "object" && ce !== null && ce.$$typeof === s;
    }
    function w(ce) {
      return M(ce) === N;
    }
    function x(ce) {
      return M(ce) === h;
    }
    function W(ce) {
      return M(ce) === se;
    }
    function V(ce) {
      return M(ce) === q;
    }
    function fe(ce) {
      return M(ce) === d;
    }
    function Oe(ce) {
      return M(ce) === E;
    }
    function Se(ce) {
      return M(ce) === p;
    }
    function H(ce) {
      return M(ce) === z;
    }
    function qe(ce) {
      return M(ce) === P;
    }
    Zt.ContextConsumer = ge, Zt.ContextProvider = ye, Zt.Element = Xe, Zt.ForwardRef = Ke, Zt.Fragment = it, Zt.Lazy = pt, Zt.Memo = et, Zt.Portal = St, Zt.Profiler = Qe, Zt.StrictMode = Ce, Zt.Suspense = Ze, Zt.SuspenseList = Te, Zt.isAsyncMode = Be, Zt.isConcurrentMode = yt, Zt.isContextConsumer = be, Zt.isContextProvider = ne, Zt.isElement = U, Zt.isForwardRef = w, Zt.isFragment = x, Zt.isLazy = W, Zt.isMemo = V, Zt.isPortal = fe, Zt.isProfiler = Oe, Zt.isStrictMode = Se, Zt.isSuspense = H, Zt.isSuspenseList = qe, Zt.isValidElementType = ae, Zt.typeOf = M;
  }()), Zt;
}
({}).NODE_ENV === "production" ? C0.exports = SN() : C0.exports = CN();
var Z0 = C0.exports;
function TN(s) {
  function d(be, ne, U, w, x) {
    for (var W = 0, V = 0, fe = 0, Oe = 0, Se, H, qe = 0, ce = 0, Ue, nt = Ue = Se = 0, rt = 0, ht = 0, Hn = 0, At = 0, Rn = U.length, Pn = Rn - 1, nn, Ge = "", Nt = "", Cn = "", ur = "", _n; rt < Rn; ) {
      if (H = U.charCodeAt(rt), rt === Pn && V + Oe + fe + W !== 0 && (V !== 0 && (H = V === 47 ? 10 : 47), Oe = fe = W = 0, Rn++, Pn++), V + Oe + fe + W === 0) {
        if (rt === Pn && (0 < ht && (Ge = Ge.replace(se, "")), 0 < Ge.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Ge += U.charAt(rt);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (Ge = Ge.trim(), Se = Ge.charCodeAt(0), Ue = 1, At = ++rt; rt < Rn; ) {
              switch (H = U.charCodeAt(rt)) {
                case 123:
                  Ue++;
                  break;
                case 125:
                  Ue--;
                  break;
                case 47:
                  switch (H = U.charCodeAt(rt + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (nt = rt + 1; nt < Pn; ++nt)
                          switch (U.charCodeAt(nt)) {
                            case 47:
                              if (H === 42 && U.charCodeAt(nt - 1) === 42 && rt + 2 !== nt) {
                                rt = nt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (H === 47) {
                                rt = nt + 1;
                                break e;
                              }
                          }
                        rt = nt;
                      }
                  }
                  break;
                case 91:
                  H++;
                case 40:
                  H++;
                case 34:
                case 39:
                  for (; rt++ < Pn && U.charCodeAt(rt) !== H; )
                    ;
              }
              if (Ue === 0)
                break;
              rt++;
            }
            switch (Ue = U.substring(At, rt), Se === 0 && (Se = (Ge = Ge.replace(q, "").trim()).charCodeAt(0)), Se) {
              case 64:
                switch (0 < ht && (Ge = Ge.replace(se, "")), H = Ge.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ht = ne;
                    break;
                  default:
                    ht = Ze;
                }
                if (Ue = d(ne, ht, Ue, H, x + 1), At = Ue.length, 0 < Ae && (ht = h(Ze, Ge, Hn), _n = y(3, Ue, ht, ne, St, et, At, H, x, w), Ge = ht.join(""), _n !== void 0 && (At = (Ue = _n.trim()).length) === 0 && (H = 0, Ue = "")), 0 < At)
                  switch (H) {
                    case 115:
                      Ge = Ge.replace(ge, R);
                    case 100:
                    case 109:
                    case 45:
                      Ue = Ge + "{" + Ue + "}";
                      break;
                    case 107:
                      Ge = Ge.replace(K, "$1 $2"), Ue = Ge + "{" + Ue + "}", Ue = Ce === 1 || Ce === 2 && T("@" + Ue, 3) ? "@-webkit-" + Ue + "@" + Ue : "@" + Ue;
                      break;
                    default:
                      Ue = Ge + Ue, w === 112 && (Ue = (Nt += Ue, ""));
                  }
                else
                  Ue = "";
                break;
              default:
                Ue = d(ne, h(ne, Ge, Hn), Ue, w, x + 1);
            }
            Cn += Ue, Ue = Hn = ht = nt = Se = 0, Ge = "", H = U.charCodeAt(++rt);
            break;
          case 125:
          case 59:
            if (Ge = (0 < ht ? Ge.replace(se, "") : Ge).trim(), 1 < (At = Ge.length))
              switch (nt === 0 && (Se = Ge.charCodeAt(0), Se === 45 || 96 < Se && 123 > Se) && (At = (Ge = Ge.replace(" ", ":")).length), 0 < Ae && (_n = y(1, Ge, ne, be, St, et, Nt.length, w, x, w)) !== void 0 && (At = (Ge = _n.trim()).length) === 0 && (Ge = "\0\0"), Se = Ge.charCodeAt(0), H = Ge.charCodeAt(1), Se) {
                case 0:
                  break;
                case 64:
                  if (H === 105 || H === 99) {
                    ur += Ge + U.charAt(rt);
                    break;
                  }
                default:
                  Ge.charCodeAt(At - 1) !== 58 && (Nt += E(Ge, Se, H, Ge.charCodeAt(2)));
              }
            Hn = ht = nt = Se = 0, Ge = "", H = U.charCodeAt(++rt);
        }
      }
      switch (H) {
        case 13:
        case 10:
          V === 47 ? V = 0 : 1 + Se === 0 && w !== 107 && 0 < Ge.length && (ht = 1, Ge += "\0"), 0 < Ae * Be && y(0, Ge, ne, be, St, et, Nt.length, w, x, w), et = 1, St++;
          break;
        case 59:
        case 125:
          if (V + Oe + fe + W === 0) {
            et++;
            break;
          }
        default:
          switch (et++, nn = U.charAt(rt), H) {
            case 9:
            case 32:
              if (Oe + W + V === 0)
                switch (qe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    nn = "";
                    break;
                  default:
                    H !== 32 && (nn = " ");
                }
              break;
            case 0:
              nn = "\\0";
              break;
            case 12:
              nn = "\\f";
              break;
            case 11:
              nn = "\\v";
              break;
            case 38:
              Oe + V + W === 0 && (ht = Hn = 1, nn = "\f" + nn);
              break;
            case 108:
              if (Oe + V + W + Qe === 0 && 0 < nt)
                switch (rt - nt) {
                  case 2:
                    qe === 112 && U.charCodeAt(rt - 3) === 58 && (Qe = qe);
                  case 8:
                    ce === 111 && (Qe = ce);
                }
              break;
            case 58:
              Oe + V + W === 0 && (nt = rt);
              break;
            case 44:
              V + fe + Oe + W === 0 && (ht = 1, nn += "\r");
              break;
            case 34:
            case 39:
              V === 0 && (Oe = Oe === H ? 0 : Oe === 0 ? H : Oe);
              break;
            case 91:
              Oe + V + fe === 0 && W++;
              break;
            case 93:
              Oe + V + fe === 0 && W--;
              break;
            case 41:
              Oe + V + W === 0 && fe--;
              break;
            case 40:
              if (Oe + V + W === 0) {
                if (Se === 0)
                  switch (2 * qe + 3 * ce) {
                    case 533:
                      break;
                    default:
                      Se = 1;
                  }
                fe++;
              }
              break;
            case 64:
              V + fe + Oe + W + nt + Ue === 0 && (Ue = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Oe + W + fe))
                switch (V) {
                  case 0:
                    switch (2 * H + 3 * U.charCodeAt(rt + 1)) {
                      case 235:
                        V = 47;
                        break;
                      case 220:
                        At = rt, V = 42;
                    }
                    break;
                  case 42:
                    H === 47 && qe === 42 && At + 2 !== rt && (U.charCodeAt(At + 2) === 33 && (Nt += U.substring(At, rt + 1)), nn = "", V = 0);
                }
          }
          V === 0 && (Ge += nn);
      }
      ce = qe, qe = H, rt++;
    }
    if (At = Nt.length, 0 < At) {
      if (ht = ne, 0 < Ae && (_n = y(2, Nt, ht, be, St, et, At, w, x, w), _n !== void 0 && (Nt = _n).length === 0))
        return ur + Nt + Cn;
      if (Nt = ht.join(",") + "{" + Nt + "}", Ce * Qe !== 0) {
        switch (Ce !== 2 || T(Nt, 2) || (Qe = 0), Qe) {
          case 111:
            Nt = Nt.replace(ae, ":-moz-$1") + Nt;
            break;
          case 112:
            Nt = Nt.replace(le, "::-webkit-input-$1") + Nt.replace(le, "::-moz-$1") + Nt.replace(le, ":-ms-input-$1") + Nt;
        }
        Qe = 0;
      }
    }
    return ur + Nt + Cn;
  }
  function h(be, ne, U) {
    var w = ne.trim().split($);
    ne = w;
    var x = w.length, W = be.length;
    switch (W) {
      case 0:
      case 1:
        var V = 0;
        for (be = W === 0 ? "" : be[0] + " "; V < x; ++V)
          ne[V] = p(be, ne[V], U).trim();
        break;
      default:
        var fe = V = 0;
        for (ne = []; V < x; ++V)
          for (var Oe = 0; Oe < W; ++Oe)
            ne[fe++] = p(be[Oe] + " ", w[V], U).trim();
    }
    return ne;
  }
  function p(be, ne, U) {
    var w = ne.charCodeAt(0);
    switch (33 > w && (w = (ne = ne.trim()).charCodeAt(0)), w) {
      case 38:
        return ne.replace(de, "$1" + be.trim());
      case 58:
        return be.trim() + ne.replace(de, "$1" + be.trim());
      default:
        if (0 < 1 * U && 0 < ne.indexOf("\f"))
          return ne.replace(de, (be.charCodeAt(0) === 58 ? "" : "$1") + be.trim());
    }
    return be + ne;
  }
  function E(be, ne, U, w) {
    var x = be + ";", W = 2 * ne + 3 * U + 4 * w;
    if (W === 944) {
      be = x.indexOf(":", 9) + 1;
      var V = x.substring(be, x.length - 1).trim();
      return V = x.substring(0, be).trim() + V + ";", Ce === 1 || Ce === 2 && T(V, 1) ? "-webkit-" + V + V : V;
    }
    if (Ce === 0 || Ce === 2 && !T(x, 1))
      return x;
    switch (W) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45)
          return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11))
          return x.replace(pt, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45)
          switch (x.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
            case 115:
              return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
            case 98:
              return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
          }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99)
          break;
        return V = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + V + "-webkit-" + x + "-ms-flex-pack" + V + x;
      case 1005:
        return ue.test(x) ? x.replace(he, ":-webkit-") + x.replace(he, ":-moz-") + x : x;
      case 1e3:
        switch (V = x.substring(13).trim(), ne = V.indexOf("-") + 1, V.charCodeAt(0) + V.charCodeAt(ne)) {
          case 226:
            V = x.replace(M, "tb");
            break;
          case 232:
            V = x.replace(M, "tb-rl");
            break;
          case 220:
            V = x.replace(M, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + V + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (ne = (x = be).length - 10, V = (x.charCodeAt(ne) === 33 ? x.substring(0, ne) : x).substring(be.indexOf(":", 7) + 1).trim(), W = V.charCodeAt(0) + (V.charCodeAt(7) | 0)) {
          case 203:
            if (111 > V.charCodeAt(8))
              break;
          case 115:
            x = x.replace(V, "-webkit-" + V) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(V, "-webkit-" + (102 < W ? "inline-" : "") + "box") + ";" + x.replace(V, "-webkit-" + V) + ";" + x.replace(V, "-ms-" + V + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45)
          switch (x.charCodeAt(6)) {
            case 105:
              return V = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + V + "-ms-flex-" + V + x;
            case 115:
              return "-webkit-" + x + "-ms-flex-item-" + x.replace(Xe, "") + x;
            default:
              return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(Xe, "") + x;
          }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (it.test(be) === !0)
          return (V = be.substring(be.indexOf(":") + 1)).charCodeAt(0) === 115 ? E(be.replace("stretch", "fill-available"), ne, U, w).replace(":fill-available", ":stretch") : x.replace(V, "-webkit-" + V) + x.replace(V, "-moz-" + V.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, U + w === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10))
          return x.substring(0, x.indexOf(";", 27) + 1).replace(te, "$1-webkit-$2") + x;
    }
    return x;
  }
  function T(be, ne) {
    var U = be.indexOf(ne === 1 ? ":" : "{"), w = be.substring(0, ne !== 3 ? U : 10);
    return U = be.substring(U + 1, be.length - 1), _e(ne !== 2 ? w : w.replace(Ke, "$1"), U, ne);
  }
  function R(be, ne) {
    var U = E(ne, ne.charCodeAt(0), ne.charCodeAt(1), ne.charCodeAt(2));
    return U !== ne + ";" ? U.replace(ye, " or ($1)").substring(4) : "(" + ne + ")";
  }
  function y(be, ne, U, w, x, W, V, fe, Oe, Se) {
    for (var H = 0, qe = ne, ce; H < Ae; ++H)
      switch (ce = Te[H].call(P, be, qe, U, w, x, W, V, fe, Oe, Se)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          qe = ce;
      }
    if (qe !== ne)
      return qe;
  }
  function N(be) {
    switch (be) {
      case void 0:
      case null:
        Ae = Te.length = 0;
        break;
      default:
        if (typeof be == "function")
          Te[Ae++] = be;
        else if (typeof be == "object")
          for (var ne = 0, U = be.length; ne < U; ++ne)
            N(be[ne]);
        else
          Be = !!be | 0;
    }
    return N;
  }
  function z(be) {
    return be = be.prefix, be !== void 0 && (_e = null, be ? typeof be != "function" ? Ce = 1 : (Ce = 2, _e = be) : Ce = 0), z;
  }
  function P(be, ne) {
    var U = be;
    if (33 > U.charCodeAt(0) && (U = U.trim()), yt = U, U = [yt], 0 < Ae) {
      var w = y(-1, ne, U, U, St, et, 0, 0, 0, 0);
      w !== void 0 && typeof w == "string" && (ne = w);
    }
    var x = d(Ze, U, ne, 0, 0);
    return 0 < Ae && (w = y(-2, x, U, U, St, et, x.length, 0, 0, 0), w !== void 0 && (x = w)), yt = "", Qe = 0, et = St = 1, x;
  }
  var q = /^\0+/g, se = /[\0\r\f]/g, he = /: */g, ue = /zoo|gra/, te = /([,: ])(transform)/g, $ = /,\r+?/g, de = /([\t\r\n ])*\f?&/g, K = /@(k\w+)\s*(\S*)\s*/, le = /::(place)/g, ae = /:(read-only)/g, M = /[svh]\w+-[tblr]{2}/, ge = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Xe = /-self|flex-/g, Ke = /[^]*?(:[rp][el]a[\w-]+)[^]*/, it = /stretch|:\s*\w+\-(?:conte|avail)/, pt = /([^-])(image-set\()/, et = 1, St = 1, Qe = 0, Ce = 1, Ze = [], Te = [], Ae = 0, _e = null, Be = 0, yt = "";
  return P.use = N, P.set = z, s !== void 0 && z(s), P;
}
var xN = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, wN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vC = /* @__PURE__ */ kC(
  function(s) {
    return wN.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Zo() {
  return (Zo = Object.assign || function(s) {
    for (var d = 1; d < arguments.length; d++) {
      var h = arguments[d];
      for (var p in h)
        Object.prototype.hasOwnProperty.call(h, p) && (s[p] = h[p]);
    }
    return s;
  }).apply(this, arguments);
}
var hC = function(s, d) {
  for (var h = [s[0]], p = 0, E = d.length; p < E; p += 1)
    h.push(d[p], s[p + 1]);
  return h;
}, T0 = function(s) {
  return s !== null && typeof s == "object" && (s.toString ? s.toString() : Object.prototype.toString.call(s)) === "[object Object]" && !Z0.typeOf(s);
}, im = Object.freeze([]), Wl = Object.freeze({});
function hp(s) {
  return typeof s == "function";
}
function x0(s) {
  return {}.NODE_ENV !== "production" && typeof s == "string" && s || s.displayName || s.name || "Component";
}
function J0(s) {
  return s && typeof s.styledComponentId == "string";
}
var Xc = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", eb = typeof window < "u" && "HTMLElement" in window, RN = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production")), _N = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function kN() {
  for (var s = arguments.length <= 0 ? void 0 : arguments[0], d = [], h = 1, p = arguments.length; h < p; h += 1)
    d.push(h < 0 || arguments.length <= h ? void 0 : arguments[h]);
  return d.forEach(function(E) {
    s = s.replace(/%[a-z]/, E);
  }), s;
}
function Jc(s) {
  for (var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
    h[p - 1] = arguments[p];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + s + " for more information." + (h.length > 0 ? " Args: " + h.join(", ") : "")) : new Error(kN.apply(void 0, [_N[s]].concat(h)).trim());
}
var ON = function() {
  function s(h) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = h;
  }
  var d = s.prototype;
  return d.indexOfGroup = function(h) {
    for (var p = 0, E = 0; E < h; E++)
      p += this.groupSizes[E];
    return p;
  }, d.insertRules = function(h, p) {
    if (h >= this.groupSizes.length) {
      for (var E = this.groupSizes, T = E.length, R = T; h >= R; )
        (R <<= 1) < 0 && Jc(16, "" + h);
      this.groupSizes = new Uint32Array(R), this.groupSizes.set(E), this.length = R;
      for (var y = T; y < R; y++)
        this.groupSizes[y] = 0;
    }
    for (var N = this.indexOfGroup(h + 1), z = 0, P = p.length; z < P; z++)
      this.tag.insertRule(N, p[z]) && (this.groupSizes[h]++, N++);
  }, d.clearGroup = function(h) {
    if (h < this.length) {
      var p = this.groupSizes[h], E = this.indexOfGroup(h), T = E + p;
      this.groupSizes[h] = 0;
      for (var R = E; R < T; R++)
        this.tag.deleteRule(E);
    }
  }, d.getGroup = function(h) {
    var p = "";
    if (h >= this.length || this.groupSizes[h] === 0)
      return p;
    for (var E = this.groupSizes[h], T = this.indexOfGroup(h), R = T + E, y = T; y < R; y++)
      p += this.tag.getRule(y) + `/*!sc*/
`;
    return p;
  }, s;
}(), em = /* @__PURE__ */ new Map(), om = /* @__PURE__ */ new Map(), sp = 1, Gh = function(s) {
  if (em.has(s))
    return em.get(s);
  for (; om.has(sp); )
    sp++;
  var d = sp++;
  return {}.NODE_ENV !== "production" && ((0 | d) < 0 || d > 1 << 30) && Jc(16, "" + d), em.set(s, d), om.set(d, s), d;
}, DN = function(s) {
  return om.get(s);
}, AN = function(s, d) {
  d >= sp && (sp = d + 1), em.set(s, d), om.set(d, s);
}, NN = "style[" + Xc + '][data-styled-version="5.3.10"]', PN = new RegExp("^" + Xc + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), MN = function(s, d, h) {
  for (var p, E = h.split(","), T = 0, R = E.length; T < R; T++)
    (p = E[T]) && s.registerName(d, p);
}, FN = function(s, d) {
  for (var h = (d.textContent || "").split(`/*!sc*/
`), p = [], E = 0, T = h.length; E < T; E++) {
    var R = h[E].trim();
    if (R) {
      var y = R.match(PN);
      if (y) {
        var N = 0 | parseInt(y[1], 10), z = y[2];
        N !== 0 && (AN(z, N), MN(s, z, y[3]), s.getTag().insertRules(N, p)), p.length = 0;
      } else
        p.push(R);
    }
  }
}, zN = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, cT = function(s) {
  var d = document.head, h = s || d, p = document.createElement("style"), E = function(y) {
    for (var N = y.childNodes, z = N.length; z >= 0; z--) {
      var P = N[z];
      if (P && P.nodeType === 1 && P.hasAttribute(Xc))
        return P;
    }
  }(h), T = E !== void 0 ? E.nextSibling : null;
  p.setAttribute(Xc, "active"), p.setAttribute("data-styled-version", "5.3.10");
  var R = zN();
  return R && p.setAttribute("nonce", R), h.insertBefore(p, T), p;
}, LN = function() {
  function s(h) {
    var p = this.element = cT(h);
    p.appendChild(document.createTextNode("")), this.sheet = function(E) {
      if (E.sheet)
        return E.sheet;
      for (var T = document.styleSheets, R = 0, y = T.length; R < y; R++) {
        var N = T[R];
        if (N.ownerNode === E)
          return N;
      }
      Jc(17);
    }(p), this.length = 0;
  }
  var d = s.prototype;
  return d.insertRule = function(h, p) {
    try {
      return this.sheet.insertRule(p, h), this.length++, !0;
    } catch {
      return !1;
    }
  }, d.deleteRule = function(h) {
    this.sheet.deleteRule(h), this.length--;
  }, d.getRule = function(h) {
    var p = this.sheet.cssRules[h];
    return p !== void 0 && typeof p.cssText == "string" ? p.cssText : "";
  }, s;
}(), UN = function() {
  function s(h) {
    var p = this.element = cT(h);
    this.nodes = p.childNodes, this.length = 0;
  }
  var d = s.prototype;
  return d.insertRule = function(h, p) {
    if (h <= this.length && h >= 0) {
      var E = document.createTextNode(p), T = this.nodes[h];
      return this.element.insertBefore(E, T || null), this.length++, !0;
    }
    return !1;
  }, d.deleteRule = function(h) {
    this.element.removeChild(this.nodes[h]), this.length--;
  }, d.getRule = function(h) {
    return h < this.length ? this.nodes[h].textContent : "";
  }, s;
}(), IN = function() {
  function s(h) {
    this.rules = [], this.length = 0;
  }
  var d = s.prototype;
  return d.insertRule = function(h, p) {
    return h <= this.length && (this.rules.splice(h, 0, p), this.length++, !0);
  }, d.deleteRule = function(h) {
    this.rules.splice(h, 1), this.length--;
  }, d.getRule = function(h) {
    return h < this.length ? this.rules[h] : "";
  }, s;
}(), mC = eb, jN = { isServer: !eb, useCSSOMInjection: !RN }, fT = function() {
  function s(h, p, E) {
    h === void 0 && (h = Wl), p === void 0 && (p = {}), this.options = Zo({}, jN, {}, h), this.gs = p, this.names = new Map(E), this.server = !!h.isServer, !this.server && eb && mC && (mC = !1, function(T) {
      for (var R = document.querySelectorAll(NN), y = 0, N = R.length; y < N; y++) {
        var z = R[y];
        z && z.getAttribute(Xc) !== "active" && (FN(T, z), z.parentNode && z.parentNode.removeChild(z));
      }
    }(this));
  }
  s.registerId = function(h) {
    return Gh(h);
  };
  var d = s.prototype;
  return d.reconstructWithOptions = function(h, p) {
    return p === void 0 && (p = !0), new s(Zo({}, this.options, {}, h), this.gs, p && this.names || void 0);
  }, d.allocateGSInstance = function(h) {
    return this.gs[h] = (this.gs[h] || 0) + 1;
  }, d.getTag = function() {
    return this.tag || (this.tag = (E = (p = this.options).isServer, T = p.useCSSOMInjection, R = p.target, h = E ? new IN(R) : T ? new LN(R) : new UN(R), new ON(h)));
    var h, p, E, T, R;
  }, d.hasNameForId = function(h, p) {
    return this.names.has(h) && this.names.get(h).has(p);
  }, d.registerName = function(h, p) {
    if (Gh(h), this.names.has(h))
      this.names.get(h).add(p);
    else {
      var E = /* @__PURE__ */ new Set();
      E.add(p), this.names.set(h, E);
    }
  }, d.insertRules = function(h, p, E) {
    this.registerName(h, p), this.getTag().insertRules(Gh(h), E);
  }, d.clearNames = function(h) {
    this.names.has(h) && this.names.get(h).clear();
  }, d.clearRules = function(h) {
    this.getTag().clearGroup(Gh(h)), this.clearNames(h);
  }, d.clearTag = function() {
    this.tag = void 0;
  }, d.toString = function() {
    return function(h) {
      for (var p = h.getTag(), E = p.length, T = "", R = 0; R < E; R++) {
        var y = DN(R);
        if (y !== void 0) {
          var N = h.names.get(y), z = p.getGroup(R);
          if (N && z && N.size) {
            var P = Xc + ".g" + R + '[id="' + y + '"]', q = "";
            N !== void 0 && N.forEach(function(se) {
              se.length > 0 && (q += se + ",");
            }), T += "" + z + P + '{content:"' + q + `"}/*!sc*/
`;
          }
        }
      }
      return T;
    }(this);
  }, s;
}(), HN = /(a)(d)/gi, yC = function(s) {
  return String.fromCharCode(s + (s > 25 ? 39 : 97));
};
function w0(s) {
  var d, h = "";
  for (d = Math.abs(s); d > 52; d = d / 52 | 0)
    h = yC(d % 52) + h;
  return (yC(d % 52) + h).replace(HN, "$1-$2");
}
var ls = function(s, d) {
  for (var h = d.length; h; )
    s = 33 * s ^ d.charCodeAt(--h);
  return s;
}, dT = function(s) {
  return ls(5381, s);
};
function $N(s) {
  for (var d = 0; d < s.length; d += 1) {
    var h = s[d];
    if (hp(h) && !J0(h))
      return !1;
  }
  return !0;
}
var VN = dT("5.3.10"), WN = function() {
  function s(d, h, p) {
    this.rules = d, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (p === void 0 || p.isStatic) && $N(d), this.componentId = h, this.baseHash = ls(VN, h), this.baseStyle = p, fT.registerId(h);
  }
  return s.prototype.generateAndInjectStyles = function(d, h, p) {
    var E = this.componentId, T = [];
    if (this.baseStyle && T.push(this.baseStyle.generateAndInjectStyles(d, h, p)), this.isStatic && !p.hash)
      if (this.staticRulesId && h.hasNameForId(E, this.staticRulesId))
        T.push(this.staticRulesId);
      else {
        var R = Kc(this.rules, d, h, p).join(""), y = w0(ls(this.baseHash, R) >>> 0);
        if (!h.hasNameForId(E, y)) {
          var N = p(R, "." + y, void 0, E);
          h.insertRules(E, y, N);
        }
        T.push(y), this.staticRulesId = y;
      }
    else {
      for (var z = this.rules.length, P = ls(this.baseHash, p.hash), q = "", se = 0; se < z; se++) {
        var he = this.rules[se];
        if (typeof he == "string")
          q += he, {}.NODE_ENV !== "production" && (P = ls(P, he + se));
        else if (he) {
          var ue = Kc(he, d, h, p), te = Array.isArray(ue) ? ue.join("") : ue;
          P = ls(P, te + se), q += te;
        }
      }
      if (q) {
        var $ = w0(P >>> 0);
        if (!h.hasNameForId(E, $)) {
          var de = p(q, "." + $, void 0, E);
          h.insertRules(E, $, de);
        }
        T.push($);
      }
    }
    return T.join(" ");
  }, s;
}(), BN = /^\s*\/\/.*$/gm, YN = [":", "[", ".", "#"];
function GN(s) {
  var d, h, p, E, T = s === void 0 ? Wl : s, R = T.options, y = R === void 0 ? Wl : R, N = T.plugins, z = N === void 0 ? im : N, P = new TN(y), q = [], se = function(te) {
    function $(de) {
      if (de)
        try {
          te(de + "}");
        } catch {
        }
    }
    return function(de, K, le, ae, M, ge, ye, Xe, Ke, it) {
      switch (de) {
        case 1:
          if (Ke === 0 && K.charCodeAt(0) === 64)
            return te(K + ";"), "";
          break;
        case 2:
          if (Xe === 0)
            return K + "/*|*/";
          break;
        case 3:
          switch (Xe) {
            case 102:
            case 112:
              return te(le[0] + K), "";
            default:
              return K + (it === 0 ? "/*|*/" : "");
          }
        case -2:
          K.split("/*|*/}").forEach($);
      }
    };
  }(function(te) {
    q.push(te);
  }), he = function(te, $, de) {
    return $ === 0 && YN.indexOf(de[h.length]) !== -1 || de.match(E) ? te : "." + d;
  };
  function ue(te, $, de, K) {
    K === void 0 && (K = "&");
    var le = te.replace(BN, ""), ae = $ && de ? de + " " + $ + " { " + le + " }" : le;
    return d = K, h = $, p = new RegExp("\\" + h + "\\b", "g"), E = new RegExp("(\\" + h + "\\b){2,}"), P(de || !$ ? "" : $, ae);
  }
  return P.use([].concat(z, [function(te, $, de) {
    te === 2 && de.length && de[0].lastIndexOf(h) > 0 && (de[0] = de[0].replace(p, he));
  }, se, function(te) {
    if (te === -2) {
      var $ = q;
      return q = [], $;
    }
  }])), ue.hash = z.length ? z.reduce(function(te, $) {
    return $.name || Jc(15), ls(te, $.name);
  }, 5381).toString() : "", ue;
}
var pT = Xn.createContext();
pT.Consumer;
var vT = Xn.createContext(), QN = (vT.Consumer, new fT()), R0 = GN();
function qN() {
  return $e.useContext(pT) || QN;
}
function XN() {
  return $e.useContext(vT) || R0;
}
var KN = function() {
  function s(d, h) {
    var p = this;
    this.inject = function(E, T) {
      T === void 0 && (T = R0);
      var R = p.name + T.hash;
      E.hasNameForId(p.id, R) || E.insertRules(p.id, R, T(p.rules, R, "@keyframes"));
    }, this.toString = function() {
      return Jc(12, String(p.name));
    }, this.name = d, this.id = "sc-keyframes-" + d, this.rules = h;
  }
  return s.prototype.getName = function(d) {
    return d === void 0 && (d = R0), this.name + d.hash;
  }, s;
}(), ZN = /([A-Z])/, JN = /([A-Z])/g, eP = /^ms-/, tP = function(s) {
  return "-" + s.toLowerCase();
};
function gC(s) {
  return ZN.test(s) ? s.replace(JN, tP).replace(eP, "-ms-") : s;
}
var bC = function(s) {
  return s == null || s === !1 || s === "";
};
function Kc(s, d, h, p) {
  if (Array.isArray(s)) {
    for (var E, T = [], R = 0, y = s.length; R < y; R += 1)
      (E = Kc(s[R], d, h, p)) !== "" && (Array.isArray(E) ? T.push.apply(T, E) : T.push(E));
    return T;
  }
  if (bC(s))
    return "";
  if (J0(s))
    return "." + s.styledComponentId;
  if (hp(s)) {
    if (typeof (z = s) != "function" || z.prototype && z.prototype.isReactComponent || !d)
      return s;
    var N = s(d);
    return {}.NODE_ENV !== "production" && Z0.isElement(N) && console.warn(x0(s) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Kc(N, d, h, p);
  }
  var z;
  return s instanceof KN ? h ? (s.inject(h, p), s.getName(p)) : s : T0(s) ? function P(q, se) {
    var he, ue, te = [];
    for (var $ in q)
      q.hasOwnProperty($) && !bC(q[$]) && (Array.isArray(q[$]) && q[$].isCss || hp(q[$]) ? te.push(gC($) + ":", q[$], ";") : T0(q[$]) ? te.push.apply(te, P(q[$], $)) : te.push(gC($) + ": " + (he = $, (ue = q[$]) == null || typeof ue == "boolean" || ue === "" ? "" : typeof ue != "number" || ue === 0 || he in xN || he.startsWith("--") ? String(ue).trim() : ue + "px") + ";"));
    return se ? [se + " {"].concat(te, ["}"]) : te;
  }(s) : s.toString();
}
var EC = function(s) {
  return Array.isArray(s) && (s.isCss = !0), s;
};
function nP(s) {
  for (var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
    h[p - 1] = arguments[p];
  return hp(s) || T0(s) ? EC(Kc(hC(im, [s].concat(h)))) : h.length === 0 && s.length === 1 && typeof s[0] == "string" ? s : EC(Kc(hC(s, h)));
}
var SC = /invalid hook call/i, Qh = /* @__PURE__ */ new Set(), rP = function(s, d) {
  if ({}.NODE_ENV !== "production") {
    var h = "The component " + s + (d ? ' with the id of "' + d + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, p = console.error;
    try {
      var E = !0;
      console.error = function(T) {
        if (SC.test(T))
          E = !1, Qh.delete(h);
        else {
          for (var R = arguments.length, y = new Array(R > 1 ? R - 1 : 0), N = 1; N < R; N++)
            y[N - 1] = arguments[N];
          p.apply(void 0, [T].concat(y));
        }
      }, $e.useRef(), E && !Qh.has(h) && (console.warn(h), Qh.add(h));
    } catch (T) {
      SC.test(T.message) && Qh.delete(h);
    } finally {
      console.error = p;
    }
  }
}, aP = function(s, d, h) {
  return h === void 0 && (h = Wl), s.theme !== h.theme && s.theme || d || h.theme;
}, iP = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oP = /(^-|-$)/g;
function f0(s) {
  return s.replace(iP, "-").replace(oP, "");
}
var lP = function(s) {
  return w0(dT(s) >>> 0);
};
function qh(s) {
  return typeof s == "string" && ({}.NODE_ENV === "production" || s.charAt(0) === s.charAt(0).toLowerCase());
}
var _0 = function(s) {
  return typeof s == "function" || typeof s == "object" && s !== null && !Array.isArray(s);
}, uP = function(s) {
  return s !== "__proto__" && s !== "constructor" && s !== "prototype";
};
function sP(s, d, h) {
  var p = s[h];
  _0(d) && _0(p) ? hT(p, d) : s[h] = d;
}
function hT(s) {
  for (var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
    h[p - 1] = arguments[p];
  for (var E = 0, T = h; E < T.length; E++) {
    var R = T[E];
    if (_0(R))
      for (var y in R)
        uP(y) && sP(s, R[y], y);
  }
  return s;
}
var mT = Xn.createContext();
mT.Consumer;
var d0 = {};
function yT(s, d, h) {
  var p = J0(s), E = !qh(s), T = d.attrs, R = T === void 0 ? im : T, y = d.componentId, N = y === void 0 ? function(K, le) {
    var ae = typeof K != "string" ? "sc" : f0(K);
    d0[ae] = (d0[ae] || 0) + 1;
    var M = ae + "-" + lP("5.3.10" + ae + d0[ae]);
    return le ? le + "-" + M : M;
  }(d.displayName, d.parentComponentId) : y, z = d.displayName, P = z === void 0 ? function(K) {
    return qh(K) ? "styled." + K : "Styled(" + x0(K) + ")";
  }(s) : z, q = d.displayName && d.componentId ? f0(d.displayName) + "-" + d.componentId : d.componentId || N, se = p && s.attrs ? Array.prototype.concat(s.attrs, R).filter(Boolean) : R, he = d.shouldForwardProp;
  p && s.shouldForwardProp && (he = d.shouldForwardProp ? function(K, le, ae) {
    return s.shouldForwardProp(K, le, ae) && d.shouldForwardProp(K, le, ae);
  } : s.shouldForwardProp);
  var ue, te = new WN(h, q, p ? s.componentStyle : void 0), $ = te.isStatic && R.length === 0, de = function(K, le) {
    return function(ae, M, ge, ye) {
      var Xe = ae.attrs, Ke = ae.componentStyle, it = ae.defaultProps, pt = ae.foldedComponentIds, et = ae.shouldForwardProp, St = ae.styledComponentId, Qe = ae.target;
      ({}).NODE_ENV !== "production" && $e.useDebugValue(St);
      var Ce = function(w, x, W) {
        w === void 0 && (w = Wl);
        var V = Zo({}, x, { theme: w }), fe = {};
        return W.forEach(function(Oe) {
          var Se, H, qe, ce = Oe;
          for (Se in hp(ce) && (ce = ce(V)), ce)
            V[Se] = fe[Se] = Se === "className" ? (H = fe[Se], qe = ce[Se], H && qe ? H + " " + qe : H || qe) : ce[Se];
        }), [V, fe];
      }(aP(M, $e.useContext(mT), it) || Wl, M, Xe), Ze = Ce[0], Te = Ce[1], Ae = function(w, x, W, V) {
        var fe = qN(), Oe = XN(), Se = x ? w.generateAndInjectStyles(Wl, fe, Oe) : w.generateAndInjectStyles(W, fe, Oe);
        return {}.NODE_ENV !== "production" && $e.useDebugValue(Se), {}.NODE_ENV !== "production" && !x && V && V(Se), Se;
      }(Ke, ye, Ze, {}.NODE_ENV !== "production" ? ae.warnTooManyClasses : void 0), _e = ge, Be = Te.$as || M.$as || Te.as || M.as || Qe, yt = qh(Be), be = Te !== M ? Zo({}, M, {}, Te) : M, ne = {};
      for (var U in be)
        U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? ne.as = be[U] : (et ? et(U, vC, Be) : !yt || vC(U)) && (ne[U] = be[U]));
      return M.style && Te.style !== M.style && (ne.style = Zo({}, M.style, {}, Te.style)), ne.className = Array.prototype.concat(pt, St, Ae !== St ? Ae : null, M.className, Te.className).filter(Boolean).join(" "), ne.ref = _e, $e.createElement(Be, ne);
    }(ue, K, le, $);
  };
  return de.displayName = P, (ue = Xn.forwardRef(de)).attrs = se, ue.componentStyle = te, ue.displayName = P, ue.shouldForwardProp = he, ue.foldedComponentIds = p ? Array.prototype.concat(s.foldedComponentIds, s.styledComponentId) : im, ue.styledComponentId = q, ue.target = p ? s.target : s, ue.withComponent = function(K) {
    var le = d.componentId, ae = function(ge, ye) {
      if (ge == null)
        return {};
      var Xe, Ke, it = {}, pt = Object.keys(ge);
      for (Ke = 0; Ke < pt.length; Ke++)
        Xe = pt[Ke], ye.indexOf(Xe) >= 0 || (it[Xe] = ge[Xe]);
      return it;
    }(d, ["componentId"]), M = le && le + "-" + (qh(K) ? K : f0(x0(K)));
    return yT(K, Zo({}, ae, { attrs: se, componentId: M }), h);
  }, Object.defineProperty(ue, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(K) {
    this._foldedDefaultProps = p ? hT({}, s.defaultProps, K) : K;
  } }), {}.NODE_ENV !== "production" && (rP(P, q), ue.warnTooManyClasses = function(K, le) {
    var ae = {}, M = !1;
    return function(ge) {
      if (!M && (ae[ge] = !0, Object.keys(ae).length >= 200)) {
        var ye = le ? ' with the id of "' + le + '"' : "";
        console.warn("Over 200 classes were generated for component " + K + ye + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, ae = {};
      }
    };
  }(P, q)), Object.defineProperty(ue, "toString", { value: function() {
    return "." + ue.styledComponentId;
  } }), E && pO(ue, s, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), ue;
}
var k0 = function(s) {
  return function d(h, p, E) {
    if (E === void 0 && (E = Wl), !Z0.isValidElementType(p))
      return Jc(1, String(p));
    var T = function() {
      return h(p, E, nP.apply(void 0, arguments));
    };
    return T.withConfig = function(R) {
      return d(h, p, Zo({}, E, {}, R));
    }, T.attrs = function(R) {
      return d(h, p, Zo({}, E, { attrs: Array.prototype.concat(E.attrs, R).filter(Boolean) }));
    }, T;
  }(yT, s);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(s) {
  k0[s] = k0(s);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), {}.NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const cP = k0, fP = cP.div`
    min-width: 780px;
    max-width: 780px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: block;
`;
function dP(s) {
  const { displayName: d, repoPath: h } = s, [p, E] = $e.useState("");
  return $e.useLayoutEffect(() => {
    AP.require("request", (T) => {
      T({
        url: "/2.0/user/",
        success(R) {
          E(R.display_name);
        }
      });
    });
  }), /* @__PURE__ */ Yr.jsx(fP, { children: /* @__PURE__ */ Yr.jsxs(fN, { title: "Repository Information", children: [
    /* @__PURE__ */ Yr.jsxs(o0, { layout: "fluid", children: [
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 8, children: "Add-on user (retrieved via server-to-server REST):" }),
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 4, children: /* @__PURE__ */ Yr.jsx("b", { children: d }) })
    ] }),
    /* @__PURE__ */ Yr.jsxs(o0, { children: [
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 8, children: "Your name (retrieved via AP.request()):" }),
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 4, children: /* @__PURE__ */ Yr.jsx("b", { children: p }) })
    ] }),
    /* @__PURE__ */ Yr.jsxs(o0, { children: [
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 8, children: "This repository:" }),
      /* @__PURE__ */ Yr.jsx(Gc, { medium: 4, children: /* @__PURE__ */ Yr.jsx("b", { children: h }) })
    ] })
  ] }) });
}
window.addEventListener("load", () => {
  const s = document.getElementById("displayName").value, d = document.getElementById("repoPath").value;
  EN.render(
    /* @__PURE__ */ Yr.jsx(dP, { displayName: s, repoPath: d }),
    document.getElementById("container")
  );
});
export {
  dP as default
};

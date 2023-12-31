(function(K) {
    typeof define == "function" && define.amd ? define(K) : K()
}
)(function() {
    "use strict";
    var Qb = Object.defineProperty;
    var Xb = (K,gt,Yt)=>gt in K ? Qb(K, gt, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Yt
    }) : K[gt] = Yt;
    var Pe = (K,gt,Yt)=>(Xb(K, typeof gt != "symbol" ? gt + "" : gt, Yt),
    Yt);
    var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function gt(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function Yt(e) {
        var t = e.default;
        if (typeof t == "function") {
            var n = function() {
                return t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else
            n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        Object.keys(e).forEach(function(r) {
            var i = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }),
        n
    }
    var Ce = {}
      , Qt = {};
    Object.defineProperty(Qt, "__esModule", {
        value: !0
    });
    var to = function() {
        function e() {}
        return e.prototype.handleError = function(t) {}
        ,
        e
    }();
    Qt.NoopErrorHandler = to;
    var no = new to;
    function Yf(e) {
        no = e
    }
    Qt.setErrorHandler = Yf;
    function Qf() {
        return no
    }
    Qt.getErrorHandler = Qf;
    function Xf() {
        no = new to
    }
    Qt.resetErrorHandler = Xf;
    var ro = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            t[t.NOTSET = 0] = "NOTSET",
            t[t.DEBUG = 1] = "DEBUG",
            t[t.INFO = 2] = "INFO",
            t[t.WARNING = 3] = "WARNING",
            t[t.ERROR = 4] = "ERROR"
        }(e.LogLevel || (e.LogLevel = {}))
    }
    )(ro);
    var Ot = {}
      , gn = {}
      , Fr = {
        exports: {}
    }
      , Ss = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (Ss) {
        var ks = new Uint8Array(16);
        Fr.exports = function() {
            return Ss(ks),
            ks
        }
    } else {
        var xs = new Array(16);
        Fr.exports = function() {
            for (var t = 0, n; t < 16; t++)
                (t & 3) === 0 && (n = Math.random() * 4294967296),
                xs[t] = n >>> ((t & 3) << 3) & 255;
            return xs
        }
    }
    for (var As = [], Vr = 0; Vr < 256; ++Vr)
        As[Vr] = (Vr + 256).toString(16).substr(1);
    function Jf(e, t) {
        var n = t || 0
          , r = As;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    var Ts = Jf, ep = Fr.exports, tp = Ts, Rs, io, oo = 0, ao = 0;
    function np(e, t, n) {
        var r = t && n || 0
          , i = t || [];
        e = e || {};
        var o = e.node || Rs
          , a = e.clockseq !== void 0 ? e.clockseq : io;
        if (o == null || a == null) {
            var s = ep();
            o == null && (o = Rs = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]),
            a == null && (a = io = (s[6] << 8 | s[7]) & 16383)
        }
        var l = e.msecs !== void 0 ? e.msecs : new Date().getTime()
          , u = e.nsecs !== void 0 ? e.nsecs : ao + 1
          , c = l - oo + (u - ao) / 1e4;
        if (c < 0 && e.clockseq === void 0 && (a = a + 1 & 16383),
        (c < 0 || l > oo) && e.nsecs === void 0 && (u = 0),
        u >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        oo = l,
        ao = u,
        io = a,
        l += 122192928e5;
        var d = ((l & 268435455) * 1e4 + u) % 4294967296;
        i[r++] = d >>> 24 & 255,
        i[r++] = d >>> 16 & 255,
        i[r++] = d >>> 8 & 255,
        i[r++] = d & 255;
        var f = l / 4294967296 * 1e4 & 268435455;
        i[r++] = f >>> 8 & 255,
        i[r++] = f & 255,
        i[r++] = f >>> 24 & 15 | 16,
        i[r++] = f >>> 16 & 255,
        i[r++] = a >>> 8 | 128,
        i[r++] = a & 255;
        for (var p = 0; p < 6; ++p)
            i[r + p] = o[p];
        return t || tp(i)
    }
    var rp = np
      , ip = Fr.exports
      , op = Ts;
    function ap(e, t, n) {
        var r = t && n || 0;
        typeof e == "string" && (t = e === "binary" ? new Array(16) : null,
        e = null),
        e = e || {};
        var i = e.random || (e.rng || ip)();
        if (i[6] = i[6] & 15 | 64,
        i[8] = i[8] & 63 | 128,
        t)
            for (var o = 0; o < 16; ++o)
                t[r + o] = i[o];
        return t || op(i)
    }
    var sp = ap
      , lp = rp
      , Ls = sp
      , so = Ls;
    so.v1 = lp,
    so.v4 = Ls;
    var up = so;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = up;
        function n() {
            return t.v4()
        }
        e.generateUUID = n;
        function r() {
            return new Date().getTime()
        }
        e.getTimestamp = r;
        function i(d, f) {
            for (var p = !1, h = Object.keys(d), m = 0; m < h.length; m++)
                if (f === d[h[m]]) {
                    p = !0;
                    break
                }
            return p
        }
        e.isValidEnum = i;
        function o(d, f) {
            var p = {};
            return d.forEach(function(h) {
                var m = f(h);
                p[m] = p[m] || [],
                p[m].push(h)
            }),
            a(p)
        }
        e.groupBy = o;
        function a(d) {
            return Object.keys(d).map(function(f) {
                return d[f]
            })
        }
        e.objectValues = a;
        function s(d) {
            return Object.keys(d).map(function(f) {
                return [f, d[f]]
            })
        }
        e.objectEntries = s;
        function l(d, f) {
            for (var p, h = 0, m = d; h < m.length; h++) {
                var g = m[h];
                if (f(g)) {
                    p = g;
                    break
                }
            }
            return p
        }
        e.find = l;
        function u(d, f) {
            var p = {};
            return d.forEach(function(h) {
                var m = f(h);
                p[m] = h
            }),
            p
        }
        e.keyBy = u;
        function c(d) {
            for (var f = [], p = 1; p < arguments.length; p++)
                f[p - 1] = arguments[p];
            var h = 0;
            return d.replace(/%s/g, function() {
                var m = f[h++]
                  , g = typeof m;
                return g === "function" ? m() : g === "string" ? m : String(m)
            })
        }
        e.sprintf = c,
        function(d) {
            d.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event",
            d.DECISION = "DECISION:type, userId, attributes, decisionInfo",
            d.LOG_EVENT = "LOG_EVENT:logEvent",
            d.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE",
            d.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
        }(e.NOTIFICATION_TYPES || (e.NOTIFICATION_TYPES = {}))
    }
    )(gn);
    var cp = K && K.__spreadArrays || function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    ;
    Object.defineProperty(Ot, "__esModule", {
        value: !0
    });
    var dp = Qt
      , Br = gn
      , he = ro
      , Os = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    };
    function lo(e) {
        return typeof e != "string" || (e = e.toUpperCase(),
        e === "WARN" && (e = "WARNING"),
        !Os[e]) ? e : Os[e]
    }
    var Ns = function() {
        function e() {
            this.defaultLoggerFacade = new Ds,
            this.loggers = {}
        }
        return e.prototype.getLogger = function(t) {
            return t ? (this.loggers[t] || (this.loggers[t] = new Ds({
                messagePrefix: t
            })),
            this.loggers[t]) : this.defaultLoggerFacade
        }
        ,
        e
    }()
      , fp = function() {
        function e(t) {
            t === void 0 && (t = {}),
            this.logLevel = he.LogLevel.NOTSET,
            t.logLevel !== void 0 && Br.isValidEnum(he.LogLevel, t.logLevel) && this.setLogLevel(t.logLevel),
            this.logToConsole = t.logToConsole !== void 0 ? !!t.logToConsole : !0,
            this.prefix = t.prefix !== void 0 ? t.prefix : "[OPTIMIZELY]"
        }
        return e.prototype.log = function(t, n) {
            if (!(!this.shouldLog(t) || !this.logToConsole)) {
                var r = this.prefix + " - " + this.getLogLevelName(t) + " " + this.getTime() + " " + n;
                this.consoleLog(t, [r])
            }
        }
        ,
        e.prototype.setLogLevel = function(t) {
            t = lo(t),
            !Br.isValidEnum(he.LogLevel, t) || t === void 0 ? this.logLevel = he.LogLevel.ERROR : this.logLevel = t
        }
        ,
        e.prototype.getTime = function() {
            return new Date().toISOString()
        }
        ,
        e.prototype.shouldLog = function(t) {
            return t >= this.logLevel
        }
        ,
        e.prototype.getLogLevelName = function(t) {
            switch (t) {
            case he.LogLevel.DEBUG:
                return "DEBUG";
            case he.LogLevel.INFO:
                return "INFO ";
            case he.LogLevel.WARNING:
                return "WARN ";
            case he.LogLevel.ERROR:
                return "ERROR";
            default:
                return "NOTSET"
            }
        }
        ,
        e.prototype.consoleLog = function(t, n) {
            switch (t) {
            case he.LogLevel.DEBUG:
                console.log.apply(console, n);
                break;
            case he.LogLevel.INFO:
                console.info.apply(console, n);
                break;
            case he.LogLevel.WARNING:
                console.warn.apply(console, n);
                break;
            case he.LogLevel.ERROR:
                console.error.apply(console, n);
                break;
            default:
                console.log.apply(console, n)
            }
        }
        ,
        e
    }();
    Ot.ConsoleLogHandler = fp;
    var Yn = he.LogLevel.NOTSET
      , uo = null
      , Ds = function() {
        function e(t) {
            t === void 0 && (t = {}),
            this.messagePrefix = "",
            t.messagePrefix && (this.messagePrefix = t.messagePrefix)
        }
        return e.prototype.log = function(t, n) {
            for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
            this.internalLog(lo(t), {
                message: n,
                splat: r
            })
        }
        ,
        e.prototype.info = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            this.namedLog(he.LogLevel.INFO, t, n)
        }
        ,
        e.prototype.debug = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            this.namedLog(he.LogLevel.DEBUG, t, n)
        }
        ,
        e.prototype.warn = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            this.namedLog(he.LogLevel.WARNING, t, n)
        }
        ,
        e.prototype.error = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            this.namedLog(he.LogLevel.ERROR, t, n)
        }
        ,
        e.prototype.format = function(t) {
            return (this.messagePrefix ? this.messagePrefix + ": " : "") + Br.sprintf.apply(void 0, cp([t.message], t.splat))
        }
        ,
        e.prototype.internalLog = function(t, n) {
            !uo || t < Yn || (uo.log(t, this.format(n)),
            n.error && n.error instanceof Error && dp.getErrorHandler().handleError(n.error))
        }
        ,
        e.prototype.namedLog = function(t, n, r) {
            var i;
            if (n instanceof Error) {
                i = n,
                n = i.message,
                this.internalLog(t, {
                    error: i,
                    message: n,
                    splat: r
                });
                return
            }
            if (r.length === 0) {
                this.internalLog(t, {
                    message: n,
                    splat: r
                });
                return
            }
            var o = r[r.length - 1];
            o instanceof Error && (i = o,
            r.splice(-1)),
            this.internalLog(t, {
                message: n,
                error: i,
                splat: r
            })
        }
        ,
        e
    }()
      , Us = new Ns;
    function pp(e) {
        return Us.getLogger(e)
    }
    Ot.getLogger = pp;
    function hp(e) {
        uo = e
    }
    Ot.setLogHandler = hp;
    function mp(e) {
        e = lo(e),
        !Br.isValidEnum(he.LogLevel, e) || e === void 0 ? Yn = he.LogLevel.ERROR : Yn = e
    }
    Ot.setLogLevel = mp;
    function gp() {
        return Yn
    }
    Ot.getLogLevel = gp;
    function vp() {
        Us = new Ns,
        Yn = he.LogLevel.NOTSET
    }
    Ot.resetLogger = vp,
    function(e) {
        function t(n) {
            for (var r in n)
                e.hasOwnProperty(r) || (e[r] = n[r])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        t(Qt),
        t(ro),
        t(Ot)
    }(Ce);
    var yp = {}
      , Qn = {};
    Object.defineProperty(Qn, "__esModule", {
        value: !0
    }),
    Qn.areEventContextsEqual = void 0;
    function _p(e, t) {
        var n = e.context
          , r = t.context;
        return n.accountId === r.accountId && n.projectId === r.projectId && n.clientName === r.clientName && n.clientVersion === r.clientVersion && n.revision === r.revision && n.anonymizeIP === r.anonymizeIP && n.botFiltering === r.botFiltering
    }
    Qn.areEventContextsEqual = _p;
    var co = {}
      , vn = {};
    Object.defineProperty(vn, "__esModule", {
        value: !0
    }),
    vn.DefaultEventQueue = vn.SingleEventQueue = void 0;
    var bp = Ce
      , wp = bp.getLogger("EventProcessor")
      , Cp = function() {
        function e(t) {
            var n = t.timeout
              , r = t.callback;
            this.timeout = Math.max(n, 0),
            this.callback = r
        }
        return e.prototype.start = function() {
            this.timeoutId = setTimeout(this.callback, this.timeout)
        }
        ,
        e.prototype.refresh = function() {
            this.stop(),
            this.start()
        }
        ,
        e.prototype.stop = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
        }
        ,
        e
    }()
      , Ep = function() {
        function e(t) {
            var n = t.sink;
            this.sink = n
        }
        return e.prototype.start = function() {}
        ,
        e.prototype.stop = function() {
            return Promise.resolve()
        }
        ,
        e.prototype.enqueue = function(t) {
            this.sink([t])
        }
        ,
        e
    }();
    vn.SingleEventQueue = Ep;
    var Ip = function() {
        function e(t) {
            var n = t.flushInterval
              , r = t.maxQueueSize
              , i = t.sink
              , o = t.batchComparator;
            this.buffer = [],
            this.maxQueueSize = Math.max(r, 1),
            this.sink = i,
            this.batchComparator = o,
            this.timer = new Cp({
                callback: this.flush.bind(this),
                timeout: n
            }),
            this.started = !1
        }
        return e.prototype.start = function() {
            this.started = !0
        }
        ,
        e.prototype.stop = function() {
            this.started = !1;
            var t = this.sink(this.buffer);
            return this.buffer = [],
            this.timer.stop(),
            t
        }
        ,
        e.prototype.enqueue = function(t) {
            if (!this.started) {
                wp.warn("Queue is stopped, not accepting event");
                return
            }
            var n = this.buffer[0];
            n && !this.batchComparator(n, t) && this.flush(),
            this.buffer.length === 0 && this.timer.refresh(),
            this.buffer.push(t),
            this.buffer.length >= this.maxQueueSize && this.flush()
        }
        ,
        e.prototype.flush = function() {
            this.sink(this.buffer),
            this.buffer = [],
            this.timer.stop()
        }
        ,
        e
    }();
    vn.DefaultEventQueue = Ip,
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.sendEventNotification = e.getQueue = e.validateAndGetBatchSize = e.validateAndGetFlushInterval = e.DEFAULT_BATCH_SIZE = e.DEFAULT_FLUSH_INTERVAL = void 0;
        var t = vn
          , n = Ce
          , r = gn;
        e.DEFAULT_FLUSH_INTERVAL = 3e4,
        e.DEFAULT_BATCH_SIZE = 10;
        var i = n.getLogger("EventProcessor");
        function o(u) {
            return u <= 0 && (i.warn("Invalid flushInterval " + u + ", defaulting to " + e.DEFAULT_FLUSH_INTERVAL),
            u = e.DEFAULT_FLUSH_INTERVAL),
            u
        }
        e.validateAndGetFlushInterval = o;
        function a(u) {
            return u = Math.floor(u),
            u < 1 && (i.warn("Invalid batchSize " + u + ", defaulting to " + e.DEFAULT_BATCH_SIZE),
            u = e.DEFAULT_BATCH_SIZE),
            u = Math.max(1, u),
            u
        }
        e.validateAndGetBatchSize = a;
        function s(u, c, d, f) {
            var p;
            return u > 1 ? p = new t.DefaultEventQueue({
                flushInterval: c,
                maxQueueSize: u,
                sink: d,
                batchComparator: f
            }) : p = new t.SingleEventQueue({
                sink: d
            }),
            p
        }
        e.getQueue = s;
        function l(u, c) {
            u && u.sendNotifications(r.NOTIFICATION_TYPES.LOG_EVENT, c)
        }
        e.sendEventNotification = l
    }(co);
    var Ps = {};
    Object.defineProperty(Ps, "__esModule", {
        value: !0
    });
    var Ms = {};
    Object.defineProperty(Ms, "__esModule", {
        value: !0
    });
    var yn = {}
      , jr = {};
    Object.defineProperty(jr, "__esModule", {
        value: !0
    }),
    jr.LocalStorageStore = void 0;
    var Sp = gn
      , kp = Ce
      , Fs = kp.getLogger("EventProcessor")
      , xp = function() {
        function e(t) {
            var n = t.key
              , r = t.maxValues
              , i = r === void 0 ? 1e3 : r;
            this.LS_KEY = n,
            this.maxValues = i
        }
        return e.prototype.get = function(t) {
            return this.getMap()[t] || null
        }
        ,
        e.prototype.set = function(t, n) {
            var r = this.getMap();
            r[t] = n,
            this.replace(r)
        }
        ,
        e.prototype.remove = function(t) {
            var n = this.getMap();
            delete n[t],
            this.replace(n)
        }
        ,
        e.prototype.values = function() {
            return Sp.objectValues(this.getMap())
        }
        ,
        e.prototype.clear = function() {
            this.replace({})
        }
        ,
        e.prototype.replace = function(t) {
            try {
                window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(t)),
                this.clean()
            } catch (n) {
                Fs.error(n)
            }
        }
        ,
        e.prototype.clean = function() {
            var t = this.getMap()
              , n = Object.keys(t)
              , r = n.length - this.maxValues;
            if (!(r < 1)) {
                var i = n.map(function(a) {
                    return {
                        key: a,
                        value: t[a]
                    }
                });
                i.sort(function(a, s) {
                    return a.value.timestamp - s.value.timestamp
                });
                for (var o = 0; o < r; o++)
                    delete t[i[o].key];
                this.replace(t)
            }
        }
        ,
        e.prototype.getMap = function() {
            try {
                var t = window.localStorage && localStorage.getItem(this.LS_KEY);
                if (t)
                    return JSON.parse(t) || {}
            } catch (n) {
                Fs.error(n)
            }
            return {}
        }
        ,
        e
    }();
    jr.LocalStorageStore = xp;
    var Ap = K && K.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(r, i) {
                r.__proto__ = i
            }
            || function(r, i) {
                for (var o in i)
                    Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            e(t, n);
            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
            new r)
        }
    }();
    Object.defineProperty(yn, "__esModule", {
        value: !0
    }),
    yn.LocalStoragePendingEventsDispatcher = yn.PendingEventsDispatcher = void 0;
    var Tp = Ce
      , Rp = jr
      , Vs = gn
      , Lp = Tp.getLogger("EventProcessor")
      , Bs = function() {
        function e(t) {
            var n = t.eventDispatcher
              , r = t.store;
            this.dispatcher = n,
            this.store = r
        }
        return e.prototype.dispatchEvent = function(t, n) {
            this.send({
                uuid: Vs.generateUUID(),
                timestamp: Vs.getTimestamp(),
                request: t
            }, n)
        }
        ,
        e.prototype.sendPendingEvents = function() {
            var t = this
              , n = this.store.values();
            Lp.debug("Sending %s pending events from previous page", n.length),
            n.forEach(function(r) {
                try {
                    t.send(r, function() {})
                } catch {}
            })
        }
        ,
        e.prototype.send = function(t, n) {
            var r = this;
            this.store.set(t.uuid, t),
            this.dispatcher.dispatchEvent(t.request, function(i) {
                r.store.remove(t.uuid),
                n(i)
            })
        }
        ,
        e
    }();
    yn.PendingEventsDispatcher = Bs;
    var Op = function(e) {
        Ap(t, e);
        function t(n) {
            var r = n.eventDispatcher;
            return e.call(this, {
                eventDispatcher: r,
                store: new Rp.LocalStorageStore({
                    maxValues: 100,
                    key: "fs_optly_pending_events"
                })
            }) || this
        }
        return t
    }(Bs);
    yn.LocalStoragePendingEventsDispatcher = Op;
    var qe = {}
      , fo = K && K.__assign || function() {
        return fo = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }
        ,
        fo.apply(this, arguments)
    }
    ;
    Object.defineProperty(qe, "__esModule", {
        value: !0
    }),
    qe.formatEvents = qe.buildConversionEventV1 = qe.buildImpressionEventV1 = qe.makeBatchedEventV1 = void 0;
    var Np = "campaign_activated"
      , Dp = "custom"
      , js = "$opt_bot_filtering";
    function Hs(e) {
        var t = []
          , n = e[0];
        return e.forEach(function(r) {
            if (r.type === "conversion" || r.type === "impression") {
                var i = po(r);
                r.type === "impression" ? i.snapshots.push(Ks(r)) : r.type === "conversion" && i.snapshots.push(zs(r)),
                t.push(i)
            }
        }),
        {
            client_name: n.context.clientName,
            client_version: n.context.clientVersion,
            account_id: n.context.accountId,
            project_id: n.context.projectId,
            revision: n.context.revision,
            anonymize_ip: n.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: t
        }
    }
    qe.makeBatchedEventV1 = Hs;
    function zs(e) {
        var t = fo({}, e.tags);
        delete t.revenue,
        delete t.value;
        var n = {
            entity_id: e.event.id,
            key: e.event.key,
            timestamp: e.timestamp,
            uuid: e.uuid
        };
        return e.tags && (n.tags = e.tags),
        e.value != null && (n.value = e.value),
        e.revenue != null && (n.revenue = e.revenue),
        {
            events: [n]
        }
    }
    function Ks(e) {
        var t, n, r = e.layer, i = e.experiment, o = e.variation, a = e.ruleKey, s = e.flagKey, l = e.ruleType, u = e.enabled, c = r ? r.id : null, d = (t = i == null ? void 0 : i.id) !== null && t !== void 0 ? t : "", f = (n = o == null ? void 0 : o.id) !== null && n !== void 0 ? n : "", p = o ? o.key : "";
        return {
            decisions: [{
                campaign_id: c,
                experiment_id: d,
                variation_id: f,
                metadata: {
                    flag_key: s,
                    rule_key: a,
                    rule_type: l,
                    variation_key: p,
                    enabled: u
                }
            }],
            events: [{
                entity_id: c,
                timestamp: e.timestamp,
                key: Np,
                uuid: e.uuid
            }]
        }
    }
    function po(e) {
        var t = {
            snapshots: [],
            visitor_id: e.user.id,
            attributes: []
        };
        return e.user.attributes.forEach(function(n) {
            t.attributes.push({
                entity_id: n.entityId,
                key: n.key,
                type: "custom",
                value: n.value
            })
        }),
        typeof e.context.botFiltering == "boolean" && t.attributes.push({
            entity_id: js,
            key: js,
            type: Dp,
            value: e.context.botFiltering
        }),
        t
    }
    function Up(e) {
        var t = po(e);
        return t.snapshots.push(Ks(e)),
        {
            client_name: e.context.clientName,
            client_version: e.context.clientVersion,
            account_id: e.context.accountId,
            project_id: e.context.projectId,
            revision: e.context.revision,
            anonymize_ip: e.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [t]
        }
    }
    qe.buildImpressionEventV1 = Up;
    function Pp(e) {
        var t = po(e);
        return t.snapshots.push(zs(e)),
        {
            client_name: e.context.clientName,
            client_version: e.context.clientVersion,
            account_id: e.context.accountId,
            project_id: e.context.projectId,
            revision: e.context.revision,
            anonymize_ip: e.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [t]
        }
    }
    qe.buildConversionEventV1 = Pp;
    function Mp(e) {
        return {
            url: "https://logx.optimizely.com/v1/events",
            httpVerb: "POST",
            params: Hs(e)
        }
    }
    qe.formatEvents = Mp;
    var Hr = {}
      , ho = {};
    Object.defineProperty(ho, "__esModule", {
        value: !0
    });
    var Fp = function() {
        function e() {
            this.reqsInFlightCount = 0,
            this.reqsCompleteResolvers = []
        }
        return e.prototype.trackRequest = function(t) {
            var n = this;
            this.reqsInFlightCount++;
            var r = function() {
                n.reqsInFlightCount--,
                n.reqsInFlightCount === 0 && (n.reqsCompleteResolvers.forEach(function(i) {
                    return i()
                }),
                n.reqsCompleteResolvers = [])
            };
            t.then(r, r)
        }
        ,
        e.prototype.onRequestsComplete = function() {
            var t = this;
            return new Promise(function(n) {
                t.reqsInFlightCount === 0 ? n() : t.reqsCompleteResolvers.push(n)
            }
            )
        }
        ,
        e
    }();
    ho.default = Fp;
    var Vp = K && K.__awaiter || function(e, t, n, r) {
        function i(o) {
            return o instanceof n ? o : new n(function(a) {
                a(o)
            }
            )
        }
        return new (n || (n = Promise))(function(o, a) {
            function s(c) {
                try {
                    u(r.next(c))
                } catch (d) {
                    a(d)
                }
            }
            function l(c) {
                try {
                    u(r.throw(c))
                } catch (d) {
                    a(d)
                }
            }
            function u(c) {
                c.done ? o(c.value) : i(c.value).then(s, l)
            }
            u((r = r.apply(e, t || [])).next())
        }
        )
    }
      , Bp = K && K.__generator || function(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (o[0] & 1)
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        }, r, i, o, a;
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function s(u) {
            return function(c) {
                return l([u, c])
            }
        }
        function l(u) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; n; )
                try {
                    if (r = 1,
                    i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i),
                    0) : i.next) && !(o = o.call(i, u[1])).done)
                        return o;
                    switch (i = 0,
                    o && (u = [u[0] & 2, o.value]),
                    u[0]) {
                    case 0:
                    case 1:
                        o = u;
                        break;
                    case 4:
                        return n.label++,
                        {
                            value: u[1],
                            done: !1
                        };
                    case 5:
                        n.label++,
                        i = u[1],
                        u = [0];
                        continue;
                    case 7:
                        u = n.ops.pop(),
                        n.trys.pop();
                        continue;
                    default:
                        if (o = n.trys,
                        !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                            n.label = u[1];
                            break
                        }
                        if (u[0] === 6 && n.label < o[1]) {
                            n.label = o[1],
                            o = u;
                            break
                        }
                        if (o && n.label < o[2]) {
                            n.label = o[2],
                            n.ops.push(u);
                            break
                        }
                        o[2] && n.ops.pop(),
                        n.trys.pop();
                        continue
                    }
                    u = t.call(e, n)
                } catch (c) {
                    u = [6, c],
                    i = 0
                } finally {
                    r = o = 0
                }
            if (u[0] & 5)
                throw u[1];
            return {
                value: u[0] ? u[1] : void 0,
                done: !0
            }
        }
    }
      , jp = K && K.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ;
    Object.defineProperty(Hr, "__esModule", {
        value: !0
    }),
    Hr.LogTierV1EventProcessor = void 0;
    var Hp = Ce
      , _n = co
      , zp = jp(ho)
      , Kp = Qn
      , Gp = qe
      , Gs = Hp.getLogger("LogTierV1EventProcessor")
      , Wp = function() {
        function e(t) {
            var n = t.dispatcher
              , r = t.flushInterval
              , i = r === void 0 ? _n.DEFAULT_FLUSH_INTERVAL : r
              , o = t.batchSize
              , a = o === void 0 ? _n.DEFAULT_BATCH_SIZE : o
              , s = t.notificationCenter;
            this.dispatcher = n,
            this.notificationCenter = s,
            this.requestTracker = new zp.default,
            i = _n.validateAndGetFlushInterval(i),
            a = _n.validateAndGetBatchSize(a),
            this.queue = _n.getQueue(a, i, this.drainQueue.bind(this), Kp.areEventContextsEqual)
        }
        return e.prototype.drainQueue = function(t) {
            var n = this
              , r = new Promise(function(i) {
                if (Gs.debug("draining queue with %s events", t.length),
                t.length === 0) {
                    i();
                    return
                }
                var o = Gp.formatEvents(t);
                n.dispatcher.dispatchEvent(o, function() {
                    i()
                }),
                _n.sendEventNotification(n.notificationCenter, o)
            }
            );
            return this.requestTracker.trackRequest(r),
            r
        }
        ,
        e.prototype.process = function(t) {
            this.queue.enqueue(t)
        }
        ,
        e.prototype.stop = function() {
            try {
                return this.queue.stop(),
                this.requestTracker.onRequestsComplete()
            } catch (t) {
                Gs.error('Error stopping EventProcessor: "%s"', t.message, t)
            }
            return Promise.resolve()
        }
        ,
        e.prototype.start = function() {
            return Vp(this, void 0, void 0, function() {
                return Bp(this, function(t) {
                    return this.queue.start(),
                    [2]
                })
            })
        }
        ,
        e
    }();
    Hr.LogTierV1EventProcessor = Wp,
    function(e) {
        var t = K && K.__createBinding || (Object.create ? function(r, i, o, a) {
            a === void 0 && (a = o),
            Object.defineProperty(r, a, {
                enumerable: !0,
                get: function() {
                    return i[o]
                }
            })
        }
        : function(r, i, o, a) {
            a === void 0 && (a = o),
            r[a] = i[o]
        }
        )
          , n = K && K.__exportStar || function(r, i) {
            for (var o in r)
                o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n(Qn, e),
        n(co, e),
        n(Ps, e),
        n(Ms, e),
        n(yn, e),
        n(qe, e),
        n(Hr, e)
    }(yp);
    var zr = {
        exports: {}
    }
      , Ws = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (Ws) {
        var $s = new Uint8Array(16);
        zr.exports = function() {
            return Ws($s),
            $s
        }
    } else {
        var qs = new Array(16);
        zr.exports = function() {
            for (var t = 0, n; t < 16; t++)
                (t & 3) === 0 && (n = Math.random() * 4294967296),
                qs[t] = n >>> ((t & 3) << 3) & 255;
            return qs
        }
    }
    for (var Zs = [], Kr = 0; Kr < 256; ++Kr)
        Zs[Kr] = (Kr + 256).toString(16).substr(1);
    function $p(e, t) {
        var n = t || 0
          , r = Zs;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    var Ys = $p, qp = zr.exports, Zp = Ys, Qs, mo, go = 0, vo = 0;
    function Yp(e, t, n) {
        var r = t && n || 0
          , i = t || [];
        e = e || {};
        var o = e.node || Qs
          , a = e.clockseq !== void 0 ? e.clockseq : mo;
        if (o == null || a == null) {
            var s = qp();
            o == null && (o = Qs = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]),
            a == null && (a = mo = (s[6] << 8 | s[7]) & 16383)
        }
        var l = e.msecs !== void 0 ? e.msecs : new Date().getTime()
          , u = e.nsecs !== void 0 ? e.nsecs : vo + 1
          , c = l - go + (u - vo) / 1e4;
        if (c < 0 && e.clockseq === void 0 && (a = a + 1 & 16383),
        (c < 0 || l > go) && e.nsecs === void 0 && (u = 0),
        u >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        go = l,
        vo = u,
        mo = a,
        l += 122192928e5;
        var d = ((l & 268435455) * 1e4 + u) % 4294967296;
        i[r++] = d >>> 24 & 255,
        i[r++] = d >>> 16 & 255,
        i[r++] = d >>> 8 & 255,
        i[r++] = d & 255;
        var f = l / 4294967296 * 1e4 & 268435455;
        i[r++] = f >>> 8 & 255,
        i[r++] = f & 255,
        i[r++] = f >>> 24 & 15 | 16,
        i[r++] = f >>> 16 & 255,
        i[r++] = a >>> 8 | 128,
        i[r++] = a & 255;
        for (var p = 0; p < 6; ++p)
            i[r + p] = o[p];
        return t || Zp(i)
    }
    var Qp = Yp
      , Xp = zr.exports
      , Jp = Ys;
    function eh(e, t, n) {
        var r = t && n || 0;
        typeof e == "string" && (t = e === "binary" ? new Array(16) : null,
        e = null),
        e = e || {};
        var i = e.random || (e.rng || Xp)();
        if (i[6] = i[6] & 15 | 64,
        i[8] = i[8] & 63 | 128,
        t)
            for (var o = 0; o < 16; ++o)
                t[r + o] = i[o];
        return t || Jp(i)
    }
    var th = eh
      , nh = Qp
      , Xs = th
      , Js = Xs;
    Js.v1 = nh,
    Js.v4 = Xs;
    var rh = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(i, o) {
                for (var a = i.length, s = o ^ a, l = 0, u; a >= 4; )
                    u = i.charCodeAt(l) & 255 | (i.charCodeAt(++l) & 255) << 8 | (i.charCodeAt(++l) & 255) << 16 | (i.charCodeAt(++l) & 255) << 24,
                    u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16),
                    u ^= u >>> 24,
                    u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16),
                    s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16) ^ u,
                    a -= 4,
                    ++l;
                switch (a) {
                case 3:
                    s ^= (i.charCodeAt(l + 2) & 255) << 16;
                case 2:
                    s ^= (i.charCodeAt(l + 1) & 255) << 8;
                case 1:
                    s ^= i.charCodeAt(l) & 255,
                    s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16)
                }
                return s ^= s >>> 13,
                s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16),
                s ^= s >>> 15,
                s >>> 0
            }
            function n(i, o) {
                var a, s, l, u, c, d, f, p;
                for (a = i.length & 3,
                s = i.length - a,
                l = o,
                c = 3432918353,
                d = 461845907,
                p = 0; p < s; )
                    f = i.charCodeAt(p) & 255 | (i.charCodeAt(++p) & 255) << 8 | (i.charCodeAt(++p) & 255) << 16 | (i.charCodeAt(++p) & 255) << 24,
                    ++p,
                    f = (f & 65535) * c + (((f >>> 16) * c & 65535) << 16) & 4294967295,
                    f = f << 15 | f >>> 17,
                    f = (f & 65535) * d + (((f >>> 16) * d & 65535) << 16) & 4294967295,
                    l ^= f,
                    l = l << 13 | l >>> 19,
                    u = (l & 65535) * 5 + (((l >>> 16) * 5 & 65535) << 16) & 4294967295,
                    l = (u & 65535) + 27492 + (((u >>> 16) + 58964 & 65535) << 16);
                switch (f = 0,
                a) {
                case 3:
                    f ^= (i.charCodeAt(p + 2) & 255) << 16;
                case 2:
                    f ^= (i.charCodeAt(p + 1) & 255) << 8;
                case 1:
                    f ^= i.charCodeAt(p) & 255,
                    f = (f & 65535) * c + (((f >>> 16) * c & 65535) << 16) & 4294967295,
                    f = f << 15 | f >>> 17,
                    f = (f & 65535) * d + (((f >>> 16) * d & 65535) << 16) & 4294967295,
                    l ^= f
                }
                return l ^= i.length,
                l ^= l >>> 16,
                l = (l & 65535) * 2246822507 + (((l >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
                l ^= l >>> 13,
                l = (l & 65535) * 3266489909 + (((l >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
                l ^= l >>> 16,
                l >>> 0
            }
            var r = n;
            r.v2 = t,
            r.v3 = n,
            e.exports = r
        }
        )()
    }
    )(rh);
    var el = {}
      , yo = {}
      , _o = {}
      , rt = {};
    Object.defineProperty(rt, "__esModule", {
        value: !0
    }),
    rt.DEFAULT_UPDATE_INTERVAL = 5 * 60 * 1e3,
    rt.MIN_UPDATE_INTERVAL = 1e3,
    rt.DEFAULT_URL_TEMPLATE = "https://cdn.optimizely.com/datafiles/%s.json",
    rt.DEFAULT_AUTHENTICATED_URL_TEMPLATE = "https://config.optimizely.com/datafiles/auth/%s.json",
    rt.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT = [0, 8, 16, 32, 64, 128, 256, 512],
    rt.REQUEST_TIMEOUT_MS = 60 * 1e3,
    Object.defineProperty(_o, "__esModule", {
        value: !0
    });
    var ih = rt
      , oh = Ce
      , ah = oh.getLogger("DatafileManager")
      , sh = "GET"
      , lh = 4;
    function uh(e) {
        var t = e.getAllResponseHeaders();
        if (t === null)
            return {};
        var n = t.split(`\r
`)
          , r = {};
        return n.forEach(function(i) {
            var o = i.indexOf(": ");
            if (o > -1) {
                var a = i.slice(0, o)
                  , s = i.slice(o + 2);
                s.length > 0 && (r[a] = s)
            }
        }),
        r
    }
    function ch(e, t) {
        Object.keys(e).forEach(function(n) {
            var r = e[n];
            t.setRequestHeader(n, r)
        })
    }
    function dh(e, t) {
        var n = new XMLHttpRequest
          , r = new Promise(function(i, o) {
            n.open(sh, e, !0),
            ch(t, n),
            n.onreadystatechange = function() {
                if (n.readyState === lh) {
                    var a = n.status;
                    if (a === 0) {
                        o(new Error("Request error"));
                        return
                    }
                    var s = uh(n)
                      , l = {
                        statusCode: n.status,
                        body: n.responseText,
                        headers: s
                    };
                    i(l)
                }
            }
            ,
            n.timeout = ih.REQUEST_TIMEOUT_MS,
            n.ontimeout = function() {
                ah.error("Request timed out")
            }
            ,
            n.send()
        }
        );
        return {
            responsePromise: r,
            abort: function() {
                n.abort()
            }
        }
    }
    _o.makeGetRequest = dh;
    var bo = {}
      , wo = {};
    Object.defineProperty(wo, "__esModule", {
        value: !0
    });
    var fh = function() {
        function e() {
            this.listeners = {},
            this.listenerId = 1
        }
        return e.prototype.on = function(t, n) {
            var r = this;
            this.listeners[t] || (this.listeners[t] = {});
            var i = String(this.listenerId);
            return this.listenerId++,
            this.listeners[t][i] = n,
            function() {
                r.listeners[t] && delete r.listeners[t][i]
            }
        }
        ,
        e.prototype.emit = function(t, n) {
            var r = this.listeners[t];
            r && Object.keys(r).forEach(function(i) {
                var o = r[i];
                o(n)
            })
        }
        ,
        e.prototype.removeAllListeners = function() {
            this.listeners = {}
        }
        ,
        e
    }();
    wo.default = fh;
    var Co = {};
    Object.defineProperty(Co, "__esModule", {
        value: !0
    });
    var Eo = rt;
    function ph() {
        return Math.round(Math.random() * 1e3)
    }
    var hh = function() {
        function e() {
            this.errorCount = 0
        }
        return e.prototype.getDelay = function() {
            if (this.errorCount === 0)
                return 0;
            var t = Eo.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT[Math.min(Eo.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1, this.errorCount)];
            return t * 1e3 + ph()
        }
        ,
        e.prototype.countError = function() {
            this.errorCount < Eo.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1 && this.errorCount++
        }
        ,
        e.prototype.reset = function() {
            this.errorCount = 0
        }
        ,
        e
    }();
    Co.default = hh;
    var Gr = K && K.__assign || function() {
        return Gr = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }
        ,
        Gr.apply(this, arguments)
    }
      , tl = K && K.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ;
    Object.defineProperty(bo, "__esModule", {
        value: !0
    });
    var mh = Ce
      , gh = gn
      , vh = tl(wo)
      , Xn = rt
      , yh = tl(Co)
      , ze = mh.getLogger("DatafileManager")
      , _h = "update";
    function bh(e) {
        return e >= Xn.MIN_UPDATE_INTERVAL
    }
    function nl(e) {
        return e >= 200 && e < 400
    }
    var wh = {
        get: function() {
            return Promise.resolve("")
        },
        set: function() {
            return Promise.resolve()
        },
        contains: function() {
            return Promise.resolve(!1)
        },
        remove: function() {
            return Promise.resolve()
        }
    }
      , Ch = function() {
        function e(t) {
            var n = this
              , r = Gr(Gr({}, this.getConfigDefaults()), t)
              , i = r.datafile
              , o = r.autoUpdate
              , a = o === void 0 ? !1 : o
              , s = r.sdkKey
              , l = r.updateInterval
              , u = l === void 0 ? Xn.DEFAULT_UPDATE_INTERVAL : l
              , c = r.urlTemplate
              , d = c === void 0 ? Xn.DEFAULT_URL_TEMPLATE : c
              , f = r.cache
              , p = f === void 0 ? wh : f;
            this.cache = p,
            this.cacheKey = "opt-datafile-" + s,
            this.isReadyPromiseSettled = !1,
            this.readyPromiseResolver = function() {}
            ,
            this.readyPromiseRejecter = function() {}
            ,
            this.readyPromise = new Promise(function(h, m) {
                n.readyPromiseResolver = h,
                n.readyPromiseRejecter = m
            }
            ),
            i ? (this.currentDatafile = i,
            s || this.resolveReadyPromise()) : this.currentDatafile = "",
            this.isStarted = !1,
            this.datafileUrl = gh.sprintf(d, s),
            this.emitter = new vh.default,
            this.autoUpdate = a,
            bh(u) ? this.updateInterval = u : (ze.warn("Invalid updateInterval %s, defaulting to %s", u, Xn.DEFAULT_UPDATE_INTERVAL),
            this.updateInterval = Xn.DEFAULT_UPDATE_INTERVAL),
            this.currentTimeout = null,
            this.currentRequest = null,
            this.backoffController = new yh.default,
            this.syncOnCurrentRequestComplete = !1
        }
        return e.prototype.get = function() {
            return this.currentDatafile
        }
        ,
        e.prototype.start = function() {
            this.isStarted || (ze.debug("Datafile manager started"),
            this.isStarted = !0,
            this.backoffController.reset(),
            this.setDatafileFromCacheIfAvailable(),
            this.syncDatafile())
        }
        ,
        e.prototype.stop = function() {
            return ze.debug("Datafile manager stopped"),
            this.isStarted = !1,
            this.currentTimeout && (clearTimeout(this.currentTimeout),
            this.currentTimeout = null),
            this.emitter.removeAllListeners(),
            this.currentRequest && (this.currentRequest.abort(),
            this.currentRequest = null),
            Promise.resolve()
        }
        ,
        e.prototype.onReady = function() {
            return this.readyPromise
        }
        ,
        e.prototype.on = function(t, n) {
            return this.emitter.on(t, n)
        }
        ,
        e.prototype.onRequestRejected = function(t) {
            !this.isStarted || (this.backoffController.countError(),
            t instanceof Error ? ze.error("Error fetching datafile: %s", t.message, t) : typeof t == "string" ? ze.error("Error fetching datafile: %s", t) : ze.error("Error fetching datafile"))
        }
        ,
        e.prototype.onRequestResolved = function(t) {
            if (!!this.isStarted) {
                typeof t.statusCode < "u" && nl(t.statusCode) ? this.backoffController.reset() : this.backoffController.countError(),
                this.trySavingLastModified(t.headers);
                var n = this.getNextDatafileFromResponse(t);
                if (n !== "")
                    if (ze.info("Updating datafile from response"),
                    this.currentDatafile = n,
                    this.cache.set(this.cacheKey, n),
                    !this.isReadyPromiseSettled)
                        this.resolveReadyPromise();
                    else {
                        var r = {
                            datafile: n
                        };
                        this.emitter.emit(_h, r)
                    }
            }
        }
        ,
        e.prototype.onRequestComplete = function() {
            !this.isStarted || (this.currentRequest = null,
            !this.isReadyPromiseSettled && !this.autoUpdate && this.rejectReadyPromise(new Error("Failed to become ready")),
            this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(),
            this.syncOnCurrentRequestComplete = !1)
        }
        ,
        e.prototype.syncDatafile = function() {
            var t = this
              , n = {};
            this.lastResponseLastModified && (n["if-modified-since"] = this.lastResponseLastModified),
            ze.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                return JSON.stringify(n)
            }),
            this.currentRequest = this.makeGetRequest(this.datafileUrl, n);
            var r = function() {
                t.onRequestComplete()
            }
              , i = function(a) {
                t.onRequestResolved(a)
            }
              , o = function(a) {
                t.onRequestRejected(a)
            };
            this.currentRequest.responsePromise.then(i, o).then(r, r),
            this.autoUpdate && this.scheduleNextUpdate()
        }
        ,
        e.prototype.resolveReadyPromise = function() {
            this.readyPromiseResolver(),
            this.isReadyPromiseSettled = !0
        }
        ,
        e.prototype.rejectReadyPromise = function(t) {
            this.readyPromiseRejecter(t),
            this.isReadyPromiseSettled = !0
        }
        ,
        e.prototype.scheduleNextUpdate = function() {
            var t = this
              , n = this.backoffController.getDelay()
              , r = Math.max(n, this.updateInterval);
            ze.debug("Scheduling sync in %s ms", r),
            this.currentTimeout = setTimeout(function() {
                t.currentRequest ? t.syncOnCurrentRequestComplete = !0 : t.syncDatafile()
            }, r)
        }
        ,
        e.prototype.getNextDatafileFromResponse = function(t) {
            return ze.debug("Response status code: %s", t.statusCode),
            typeof t.statusCode > "u" || t.statusCode === 304 ? "" : nl(t.statusCode) ? t.body : ""
        }
        ,
        e.prototype.trySavingLastModified = function(t) {
            var n = t["last-modified"] || t["Last-Modified"];
            typeof n < "u" && (this.lastResponseLastModified = n,
            ze.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
        }
        ,
        e.prototype.setDatafileFromCacheIfAvailable = function() {
            var t = this;
            this.cache.get(this.cacheKey).then(function(n) {
                t.isStarted && !t.isReadyPromiseSettled && n !== "" && (ze.debug("Using datafile from cache"),
                t.currentDatafile = n,
                t.resolveReadyPromise())
            })
        }
        ,
        e
    }();
    bo.default = Ch;
    var Eh = K && K.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(r, i) {
                r.__proto__ = i
            }
            || function(r, i) {
                for (var o in i)
                    i.hasOwnProperty(o) && (r[o] = i[o])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            e(t, n);
            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
            new r)
        }
    }()
      , Ih = K && K.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ;
    Object.defineProperty(yo, "__esModule", {
        value: !0
    });
    var Sh = _o
      , kh = Ih(bo)
      , xh = function(e) {
        Eh(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.makeGetRequest = function(n, r) {
            return Sh.makeGetRequest(n, r)
        }
        ,
        t.prototype.getConfigDefaults = function() {
            return {
                autoUpdate: !1
            }
        }
        ,
        t
    }(kh.default);
    yo.default = xh,
    Object.defineProperty(el, "__esModule", {
        value: !0
    });
    var Ah = yo;
    el.HttpPollingDatafileManager = Ah.default;
    var Th = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    }, Rh = {
        CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
        DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
        EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
        FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
        IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
        INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
        INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
        INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
        INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
        INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
        INVALID_JSON: "%s: JSON object is not valid.",
        INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
        INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
        INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
        INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
        INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
        INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
        INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
        INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
        INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
        INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
        NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
        NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
        NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
        UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
        UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
        UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
        USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
        USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
        USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
        VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
        VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
        VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
        INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
        INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
        INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
    }, Lh = {
        ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
        DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
        DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
        DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
        EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
        EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
        FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
        FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
        FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
        FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
        FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
        FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
        INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
        INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
        INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
        INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
        INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
        NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
        NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
        NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
        NOT_TRACKING_USER: "%s: Not tracking user %s.",
        PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
        PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
        RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
        ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
        SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
        SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
        SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
        SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
        TRACK_EVENT: "%s: Tracking event %s for user %s.",
        UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
        USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
        USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
        USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
        USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
        USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
        USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
        USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
        USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
        USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
        USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
        USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
        USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
        USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
        USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
        USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
        USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
        USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
        USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
        USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
        USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
        USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
        USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
        USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
        FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
        VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
        USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
        VALID_DATAFILE: "%s: Datafile is valid.",
        VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
        VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
        VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
        VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
        BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
        EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
        EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
        AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
        AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
        MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
        UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
        UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
        UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
        UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
        UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
        UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
        OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
        UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
    }, Oh = {
        BOT_FILTERING: "$opt_bot_filtering",
        BUCKETING_ID: "$opt_bucketing_id",
        STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
        USER_AGENT: "$opt_user_agent",
        FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
    }, Nh = "javascript-sdk", Dh = "node-sdk", Uh = "react-sdk", Ph = "react-native-sdk", Mh = "react-native-js-sdk", Fh = "4.9.4", Vh = "4.9.4", Bh = {
        AB_TEST: "ab-test",
        FEATURE: "feature",
        FEATURE_TEST: "feature-test",
        FEATURE_VARIABLE: "feature-variable",
        ALL_FEATURE_VARIABLES: "all-feature-variables",
        FLAG: "flag"
    }, jh = {
        FEATURE_TEST: "feature-test",
        ROLLOUT: "rollout",
        EXPERIMENT: "experiment"
    }, Hh = {
        RULE: "rule",
        EXPERIMENT: "experiment"
    }, zh = {
        BOOLEAN: "boolean",
        DOUBLE: "double",
        INTEGER: "integer",
        STRING: "string",
        JSON: "json"
    }, Wr = {
        V2: "2",
        V3: "3",
        V4: "4"
    }, Kh = {
        SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
        FLAG_KEY_INVALID: 'No flag was found for key "%s".',
        VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
    }, Io;
    (function(e) {
        e.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event",
        e.DECISION = "DECISION:type, userId, attributes, decisionInfo",
        e.LOG_EVENT = "LOG_EVENT:logEvent",
        e.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE",
        e.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
    }
    )(Io || (Io = {}));
    var Gh = Object.freeze({
        __proto__: null,
        LOG_LEVEL: Th,
        ERROR_MESSAGES: Rh,
        LOG_MESSAGES: Lh,
        CONTROL_ATTRIBUTES: Oh,
        JAVASCRIPT_CLIENT_ENGINE: Nh,
        NODE_CLIENT_ENGINE: Dh,
        REACT_CLIENT_ENGINE: Uh,
        REACT_NATIVE_CLIENT_ENGINE: Ph,
        REACT_NATIVE_JS_CLIENT_ENGINE: Mh,
        BROWSER_CLIENT_VERSION: Fh,
        NODE_CLIENT_VERSION: Vh,
        DECISION_NOTIFICATION_TYPES: Bh,
        DECISION_SOURCES: jh,
        AUDIENCE_EVALUATION_TYPES: Hh,
        FEATURE_VARIABLE_TYPES: zh,
        DATAFILE_VERSIONS: Wr,
        DECISION_MESSAGES: Kh,
        get NOTIFICATION_TYPES() {
            return Io
        }
    });
    Wr.V2,
    Wr.V3,
    Wr.V4,
    function() {
        function e() {}
        return e.prototype.log = function() {}
        ,
        e
    }();
    function Wh(e) {
        return new Ce.ConsoleLogHandler(e)
    }
    var rl;
    (function(e) {
        e.BOOLEAN = "boolean",
        e.DOUBLE = "double",
        e.INTEGER = "integer",
        e.STRING = "string",
        e.JSON = "json"
    }
    )(rl || (rl = {}));
    var il;
    (function(e) {
        e.DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT",
        e.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY",
        e.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE",
        e.INCLUDE_REASONS = "INCLUDE_REASONS",
        e.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES"
    }
    )(il || (il = {})),
    Ce.getLogger(),
    Ce.getLogger(),
    Ce.getLogger(),
    Ce.getLogger(),
    Ce.getLogger("EVENT_BUILDER"),
    Ce.getLogger(),
    Ce.setLogHandler(Wh()),
    Ce.setLogLevel(Ce.LogLevel.INFO);
    let $r;
    const $h = new Uint8Array(16);
    function qh() {
        if (!$r && ($r = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
        !$r))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return $r($h)
    }
    const Ie = [];
    for (let e = 0; e < 256; ++e)
        Ie.push((e + 256).toString(16).slice(1));
    function Zh(e, t=0) {
        return (Ie[e[t + 0]] + Ie[e[t + 1]] + Ie[e[t + 2]] + Ie[e[t + 3]] + "-" + Ie[e[t + 4]] + Ie[e[t + 5]] + "-" + Ie[e[t + 6]] + Ie[e[t + 7]] + "-" + Ie[e[t + 8]] + Ie[e[t + 9]] + "-" + Ie[e[t + 10]] + Ie[e[t + 11]] + Ie[e[t + 12]] + Ie[e[t + 13]] + Ie[e[t + 14]] + Ie[e[t + 15]]).toLowerCase()
    }
    const ol = {
        randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    function Nt(e, t, n) {
        if (ol.randomUUID && !t && !e)
            return ol.randomUUID();
        e = e || {};
        const r = e.random || (e.rng || qh)();
        if (r[6] = r[6] & 15 | 64,
        r[8] = r[8] & 63 | 128,
        t) {
            n = n || 0;
            for (let i = 0; i < 16; ++i)
                t[n + i] = r[i];
            return t
        }
        return Zh(r)
    }
    const bn = "ul-app";
    var L = (e=>(e.Caption = "ul-caption",
    e.CardContainer = "ul-card__container",
    e.CardMainContent = "ul-card-main-content",
    e.Choice = "choice",
    e.ChoiceCheckbox = "select-checkbox",
    e.ChoiceGroup = "ul-card__choices",
    e.ChoiceLabel = "select-label",
    e.ChoiceLabelContainer = "choice-label-container",
    e.ChoiceRadio = "select-radio",
    e.ChoiceTextEntryContainer = "choice-text-entry-container",
    e.ChoiceTextInput = "choice-text-input",
    e.CloseButton = "close-btn",
    e.CloseContainer = "close-container",
    e.ConsentLegalNameInput = "ul-consent-legal__name-input",
    e.CustomStyle = "ul-custom-style",
    e.DesktopSuffix = "--desktop",
    e.FadeInTransition = "fade-in-transition",
    e.LikertNumber = "likert-number",
    e.LikertSmiley = "likert-smiley",
    e.LikertStar = "likert-star",
    e.LoadingSpinner = "ul-loading-spinner",
    e.LoadingSpinnerContainer = "ul-loading-spinner-container",
    e.LoadingSpinnerFirst = "first",
    e.LoadingSpinnerFourth = "fourth",
    e.LoadingSpinnerSecond = "second",
    e.LoadingSpinnerThird = "third",
    e.MobileSuffix = "--mobile",
    e.NPSNumber = "nps-number",
    e.OpenTextInput = "ul-card-text__input",
    e.QuestionHeader = "ul-question",
    e.VideoCard = "ul-card--video",
    e.CheckmarkButton = "ul-button-checkmark",
    e.InactiveButton = "ul-button-inactive",
    e.LeftAlignButton = "ul-button-left-align",
    e.ButtonDisabled = "sprig-button-disabled",
    e.SkipButton = "ul-card-skip__button",
    e))(L || {});
    const So = "#e6e6e6"
      , Jn = "#bd282a"
      , Yh = 500
      , Qh = 1030;
    var vt = (e=>(e.Closed = "close.click",
    e.Complete = "survey.completed",
    e.PageChange = "page.change",
    e.API = "api",
    e.Override = "override",
    e))(vt || {})
      , z = (e=>(e.SDKReady = "sdk.ready",
    e.SurveyAppeared = "survey.appeared",
    e.SurveyClosed = "survey.closed",
    e.SurveyDimensions = "survey.dimensions",
    e.SurveyFadingOut = "survey.fadingOut",
    e.SurveyHeight = "survey.height",
    e.SurveyPresented = "survey.presented",
    e.SurveyLifeCycle = "survey.lifeCycle",
    e.SurveyWillClose = "survey.willClose",
    e.SurveyWillPresent = "survey.will.present",
    e.CloseSurveyOnOverlayClick = "close.survey.overlayClick",
    e.VisitorIDUpdated = "visitor.id.updated",
    e.QuestionAnswered = "question.answered",
    e))(z || {})
      , al = (e=>(e.SurveyId = "survey.id",
    e))(al || {});
    const sl = {
        SDK_READY: "sdk.ready",
        SURVEY_APPEARED: "survey.appeared",
        SURVEY_CLOSED: "survey.closed",
        SURVEY_DIMENSIONS: "survey.dimensions",
        SURVEY_FADING_OUT: "survey.fadingOut",
        SURVEY_HEIGHT: "survey.height",
        SURVEY_PRESENTED: "survey.presented",
        SURVEY_LIFE_CYCLE: "survey.lifeCycle",
        SURVEY_WILL_CLOSE: "survey.willClose",
        SURVEY_WILL_PRESENT: "survey.will.present",
        QUESTION_ANSWERED: "question.answered",
        CLOSE_SURVEY_ON_OVERLAY_CLICK: "close.survey.overlayClick",
        VISITOR_ID_UPDATED: "visitor.id.updated",
        DATA: {
            DISMISS_REASONS: {
                API: "api",
                CLOSED: "close.click",
                COMPLETE: "survey.completed",
                PAGE_CHANGE: "page.change",
                OVERRIDE: "override"
            },
            SURVEY_ID: "survey.id"
        }
    };
    var Ke = (e=>(e.VerifyViewVersion = "verify.view.version",
    e.CurrentQuestion = "survey.question",
    e.ViewPrototypeClick = "question.prototype.click",
    e.ViewAgreementClick = "question.agreement.click",
    e.RecordedTaskStart = "recorded.task.start",
    e.RecordedTaskPermissionScreen = "recorded.task.permission.screen",
    e.SurveyComplete = "survey.complete",
    e))(Ke || {})
      , Xt = (e=>(e.ViewVersion = "view.version",
    e.QuestionId = "qid",
    e.Props = "props",
    e))(Xt || {})
      , Fe = (e=>(e.Preview = "sprig.previewKey",
    e.Credentials = "userleap.ids",
    e.PageViews = "userleap.pageviews",
    e))(Fe || {});
    const ll = ()=>{
        try {
            return window.parent.Intercom
        } catch (e) {
            return console.error(e),
            null
        }
    }
      , ul = [Object.freeze(Object.defineProperty({
        __proto__: null,
        enable: ()=>{
            const e = ll();
            !e || (e.ul_wasVisible && e("update", {
                hide_default_launcher: !1
            }),
            delete e.ul_wasVisible)
        }
        ,
        disable: ()=>{
            const e = ll();
            !e || (e.ul_wasVisible = !!document.querySelector("iframe.intercom-launcher-frame"),
            e.ul_wasVisible && e("update", {
                hide_default_launcher: !0
            }))
        }
    }, Symbol.toStringTag, {
        value: "Module"
    }))];
    class ko {
        static disable() {
            ul.forEach(t=>t.disable())
        }
        static enable() {
            ul.forEach(t=>t.enable())
        }
    }
    const Xh = 1
      , wn = e=>e instanceof HTMLElement
      , Jh = e=>e instanceof HTMLInputElement
      , er = e=>e instanceof HTMLTextAreaElement
      , cl = (e,t,n)=>{
        const r = e.createElement("style");
        n && (r.nonce = n),
        r.textContent = t,
        r.id = L.CustomStyle,
        e.head.appendChild(r)
    }
      , dl = e=>{
        const t = e.querySelector(`.${L.CardContainer}`);
        let n = 600
          , r = 0;
        if (t) {
            n = t.scrollHeight;
            const i = getComputedStyle(t)
              , o = parseFloat(i.marginTop) + parseFloat(i.marginBottom)
              , a = parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth);
            r = o + a
        }
        return n + r + Xh
    }
      , em = e=>{
        const t = e.querySelector(`.${L.CardContainer}`);
        t && (t.scrollTop = 0)
    }
    ;
    var fl = {}
      , qr = {}
      , tr = {};
    Object.defineProperty(tr, "__esModule", {
        value: !0
    }),
    tr.MemoryLeakError = void 0;
    class tm extends Error {
        constructor(t, n, r) {
            super(`Possible EventEmitter memory leak detected. ${r} ${n.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
            this.emitter = t,
            this.type = n,
            this.count = r,
            this.name = "MaxListenersExceededWarning"
        }
    }
    tr.MemoryLeakError = tm,
    Object.defineProperty(qr, "__esModule", {
        value: !0
    }),
    qr.Emitter = void 0;
    const nm = tr;
    class Zr {
        constructor() {
            this.events = new Map,
            this.maxListeners = Zr.defaultMaxListeners,
            this.hasWarnedAboutPotentialMemoryLeak = !1
        }
        static listenerCount(t, n) {
            return t.listenerCount(n)
        }
        _emitInternalEvent(t, n, r) {
            this.emit(t, n, r)
        }
        _getListeners(t) {
            return this.events.get(t) || []
        }
        _removeListener(t, n) {
            const r = t.indexOf(n);
            return r > -1 && t.splice(r, 1),
            []
        }
        _wrapOnceListener(t, n) {
            const r = (...i)=>{
                this.removeListener(t, r),
                n.apply(this, i)
            }
            ;
            return r
        }
        setMaxListeners(t) {
            return this.maxListeners = t,
            this
        }
        getMaxListeners() {
            return this.maxListeners
        }
        eventNames() {
            return Array.from(this.events.keys())
        }
        emit(t, ...n) {
            const r = this._getListeners(t);
            return r.forEach(i=>{
                i.apply(this, n)
            }
            ),
            r.length > 0
        }
        addListener(t, n) {
            this._emitInternalEvent("newListener", t, n);
            const r = this._getListeners(t).concat(n);
            if (this.events.set(t, r),
            this.maxListeners > 0 && this.listenerCount(t) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                this.hasWarnedAboutPotentialMemoryLeak = !0;
                const i = new nm.MemoryLeakError(this,t,this.listenerCount(t));
                console.warn(i)
            }
            return this
        }
        on(t, n) {
            return this.addListener(t, n)
        }
        once(t, n) {
            return this.addListener(t, this._wrapOnceListener(t, n))
        }
        prependListener(t, n) {
            const r = this._getListeners(t);
            if (r.length > 0) {
                const i = [n].concat(r);
                this.events.set(t, i)
            } else
                this.events.set(t, r.concat(n));
            return this
        }
        prependOnceListener(t, n) {
            return this.prependListener(t, this._wrapOnceListener(t, n))
        }
        removeListener(t, n) {
            const r = this._getListeners(t);
            return r.length > 0 && (this._removeListener(r, n),
            this.events.set(t, r),
            this._emitInternalEvent("removeListener", t, n)),
            this
        }
        off(t, n) {
            return this.removeListener(t, n)
        }
        removeAllListeners(t) {
            return t ? this.events.delete(t) : this.events.clear(),
            this
        }
        listeners(t) {
            return Array.from(this._getListeners(t))
        }
        listenerCount(t) {
            return this._getListeners(t).length
        }
        rawListeners(t) {
            return this.listeners(t)
        }
    }
    qr.Emitter = Zr,
    Zr.defaultMaxListeners = 10,
    function(e) {
        var t = K && K.__createBinding || (Object.create ? function(r, i, o, a) {
            a === void 0 && (a = o);
            var s = Object.getOwnPropertyDescriptor(i, o);
            (!s || ("get"in s ? !i.__esModule : s.writable || s.configurable)) && (s = {
                enumerable: !0,
                get: function() {
                    return i[o]
                }
            }),
            Object.defineProperty(r, a, s)
        }
        : function(r, i, o, a) {
            a === void 0 && (a = o),
            r[a] = i[o]
        }
        )
          , n = K && K.__exportStar || function(r, i) {
            for (var o in r)
                o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n(qr, e),
        n(tr, e)
    }(fl);
    const W = new fl.Emitter;
    var nr = (e=>(e.BottomLeft = "bottomLeft",
    e.BottomRight = "bottomRight",
    e.Center = "center",
    e.TopLeft = "topLeft",
    e.TopRight = "topRight",
    e))(nr || {})
      , it = (e=>(e.Error = "x-ul-error",
    e.EnvironmentID = "x-ul-environment-id",
    e.InstallationMethod = "x-ul-installation-method",
    e.PartnerAnonymousId = "x-ul-anonymous-id",
    e.Platform = "userleap-platform",
    e.PreviewMode = "x-ul-preview-mode",
    e.UserID = "x-ul-user-id",
    e.VisitorID = "x-ul-visitor-id",
    e))(it || {})
      , Jt = (e=>(e.Email = "email",
    e.Link = "link",
    e.Web = "web",
    e))(Jt || {})
      , Cn = (e=>(e.Npm = "web-npm",
    e.Gtm = "web-gtm",
    e.Segment = "web-segment",
    e.SegmentAndroid = "android-segment",
    e.SegmentReactNative = "react-native-segment",
    e.SegmentIOS = "ios-segment",
    e.Snippet = "web-snippet",
    e))(Cn || {});
    const Yr = e=>new Promise(t=>{
        setTimeout(()=>{
            t()
        }
        , e)
    }
    )
      , En = ({"userleap-platform": e})=>e !== Jt.Web
      , ve = (e,t)=>{
        const n = t ? L.MobileSuffix : L.DesktopSuffix;
        return [e + n, e]
    }
      , ot = (e,t)=>[e, `${e}__ ${t}`];
    class rm {
        constructor(t) {
            Pe(this, "payload");
            Pe(this, "promise");
            Pe(this, "reject", ()=>{}
            );
            Pe(this, "resolve", ()=>{}
            );
            this.payload = t,
            this.promise = new Promise((n,r)=>{
                this.reject = r,
                this.resolve = n
            }
            )
        }
        resolveRequest(t) {
            this.resolve(t)
        }
    }
    const im = {
        RATELIMIT_RESET_DEFAULT: 10
    };
    let pl = !1
      , hl = ""
      , Qr = !1
      , Xr = [];
    const om = e=>e._config && e._config.installationMethod ? e._config.installationMethod : e._gtm ? Cn.Gtm : e._segment ? Cn.Segment : Cn.Snippet
      , xo = (e="")=>{
        pl = !0,
        hl = e
    }
    ;
    function rr(e={}) {
        const t = {
            "Content-Type": "application/json",
            "userleap-platform": Jt.Web,
            "x-ul-sdk-version": "2.24.5",
            [it.InstallationMethod]: om(e)
        };
        if (e.envId && (t[it.EnvironmentID] = e.envId),
        e.token && (t.Authorization = "Bearer " + e.token),
        e.userId && (t[it.UserID] = e.userId),
        e.visitorId && (t[it.VisitorID] = e.visitorId),
        e.partnerAnonymousId && (t[it.PartnerAnonymousId] = e.partnerAnonymousId),
        e.mobileHeadersJSON) {
            const n = JSON.parse(e.mobileHeadersJSON);
            Object.assign(t, n)
        }
        return e.locale && (t["accept-language"] = e.locale),
        window.previewMode && (t[it.PreviewMode] = "1"),
        t
    }
    const ml = async(e,t,n)=>{
        if (e)
            return {
                status: 429
            };
        {
            const r = new rm(n);
            return Xr.push(r),
            r.promise
        }
    }
      , at = async(e,t,n=0,r=!1,i=!1)=>{
        const o = {
            url: e,
            options: t,
            attempt: n,
            shouldDropOnRateLimit: r
        };
        if (Qr && !i)
            return ml(r, i, o);
        const a = {
            ok: !1,
            reportError: !1
        };
        if (pl)
            return console.info(`UserLeap - ${hl}`),
            a;
        try {
            t.headers = Object.assign(rr(), t.headers);
            const s = await fetch(e, t);
            if (s.status === 429)
                if (!Qr && !r || i) {
                    Qr = !0;
                    const u = s.headers.has("ratelimit-reset") ? Number(s.headers.get("ratelimit-reset")) : im.RATELIMIT_RESET_DEFAULT;
                    return await Yr(u * 1e3),
                    at(e, t, 0, r, !0)
                } else
                    return ml(r, !1, o);
            if (Qr = !1,
            Xr.length && (Xr.map(l=>{
                const {url: u, options: c, attempt: d, shouldDropOnRateLimit: f} = l.payload;
                at(u, c, d, f).then(p=>{
                    l.resolveRequest(p)
                }
                )
            }
            ),
            Xr = []),
            s.ok) {
                if (s.status === 249)
                    return xo(),
                    a;
                const l = await s.text();
                try {
                    return l && l !== "OK" && (s.json = JSON.parse(l)),
                    s
                } catch {
                    return {
                        ok: !1,
                        reportError: !1,
                        error: new Error(`failed parsing response json for ${e} - ${l}`)
                    }
                }
            }
            return s
        } catch (s) {
            const l = n + 1;
            return l > 5 ? {
                ok: !1,
                reportError: !1,
                error: s
            } : (await Yr(Math.pow(2, n) * 1e3),
            at(e, t, l))
        }
    }
    ;
    var ye;
    (function(e) {
        e[e.Document = 0] = "Document",
        e[e.DocumentType = 1] = "DocumentType",
        e[e.Element = 2] = "Element",
        e[e.Text = 3] = "Text",
        e[e.CDATA = 4] = "CDATA",
        e[e.Comment = 5] = "Comment"
    }
    )(ye || (ye = {}));
    function am(e) {
        return e.nodeType === e.ELEMENT_NODE
    }
    function ir(e) {
        var t = e == null ? void 0 : e.host;
        return Boolean((t == null ? void 0 : t.shadowRoot) === e)
    }
    function or(e) {
        return Object.prototype.toString.call(e) === "[object ShadowRoot]"
    }
    function sm(e) {
        return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
        e
    }
    function Ao(e) {
        try {
            var t = e.rules || e.cssRules;
            return t ? sm(Array.from(t).map(gl).join("")) : null
        } catch {
            return null
        }
    }
    function gl(e) {
        var t = e.cssText;
        if (lm(e))
            try {
                t = Ao(e.styleSheet) || t
            } catch {}
        return t
    }
    function lm(e) {
        return "styleSheet"in e
    }
    var vl = function() {
        function e() {
            this.idNodeMap = new Map,
            this.nodeMetaMap = new WeakMap
        }
        return e.prototype.getId = function(t) {
            var n;
            if (!t)
                return -1;
            var r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
            return r != null ? r : -1
        }
        ,
        e.prototype.getNode = function(t) {
            return this.idNodeMap.get(t) || null
        }
        ,
        e.prototype.getIds = function() {
            return Array.from(this.idNodeMap.keys())
        }
        ,
        e.prototype.getMeta = function(t) {
            return this.nodeMetaMap.get(t) || null
        }
        ,
        e.prototype.removeNodeFromMap = function(t) {
            var n = this
              , r = this.getId(t);
            this.idNodeMap.delete(r),
            t.childNodes && t.childNodes.forEach(function(i) {
                return n.removeNodeFromMap(i)
            })
        }
        ,
        e.prototype.has = function(t) {
            return this.idNodeMap.has(t)
        }
        ,
        e.prototype.hasNode = function(t) {
            return this.nodeMetaMap.has(t)
        }
        ,
        e.prototype.add = function(t, n) {
            var r = n.id;
            this.idNodeMap.set(r, t),
            this.nodeMetaMap.set(t, n)
        }
        ,
        e.prototype.replace = function(t, n) {
            var r = this.getNode(t);
            if (r) {
                var i = this.nodeMetaMap.get(r);
                i && this.nodeMetaMap.set(n, i)
            }
            this.idNodeMap.set(t, n)
        }
        ,
        e.prototype.reset = function() {
            this.idNodeMap = new Map,
            this.nodeMetaMap = new WeakMap
        }
        ,
        e
    }();
    function um() {
        return new vl
    }
    function To(e) {
        var t = e.maskInputOptions
          , n = e.tagName
          , r = e.type
          , i = e.value
          , o = e.maskInputFn
          , a = i || "";
        return (t[n.toLowerCase()] || t[r]) && (o ? a = o(a) : a = "*".repeat(a.length)),
        a
    }
    var yl = "__rrweb_original__";
    function cm(e) {
        var t = e.getContext("2d");
        if (!t)
            return !0;
        for (var n = 50, r = 0; r < e.width; r += n)
            for (var i = 0; i < e.height; i += n) {
                var o = t.getImageData
                  , a = yl in o ? o[yl] : o
                  , s = new Uint32Array(a.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i)).data.buffer);
                if (s.some(function(l) {
                    return l !== 0
                }))
                    return !1
            }
        return !0
    }
    var dm = 1
      , fm = new RegExp("[^a-z0-9-_:]")
      , ar = -2;
    function _l() {
        return dm++
    }
    function pm(e) {
        if (e instanceof HTMLFormElement)
            return "form";
        var t = e.tagName.toLowerCase().trim();
        return fm.test(t) ? "div" : t
    }
    function hm(e) {
        return e.cssRules ? Array.from(e.cssRules).map(function(t) {
            return t.cssText || ""
        }).join("") : ""
    }
    function mm(e) {
        var t = "";
        return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
        t = t.split("?")[0],
        t
    }
    var In, bl, gm = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, vm = /^(?:[a-z+]+:)?\/\//i, ym = /^www\..*/i, _m = /^(data:)([^,]*),(.*)/i;
    function Jr(e, t) {
        return (e || "").replace(gm, function(n, r, i, o, a, s) {
            var l = i || a || s
              , u = r || o || "";
            if (!l)
                return n;
            if (vm.test(l) || ym.test(l) || _m.test(l))
                return "url(".concat(u).concat(l).concat(u, ")");
            if (l[0] === "/")
                return "url(".concat(u).concat(mm(t) + l).concat(u, ")");
            var c = t.split("/")
              , d = l.split("/");
            c.pop();
            for (var f = 0, p = d; f < p.length; f++) {
                var h = p[f];
                h !== "." && (h === ".." ? c.pop() : c.push(h))
            }
            return "url(".concat(u).concat(c.join("/")).concat(u, ")")
        })
    }
    var bm = /^[^ \t\n\r\u000c]+/
      , wm = /^[, \t\n\r\u000c]+/;
    function Cm(e, t) {
        if (t.trim() === "")
            return t;
        var n = 0;
        function r(u) {
            var c, d = u.exec(t.substring(n));
            return d ? (c = d[0],
            n += c.length,
            c) : ""
        }
        for (var i = []; r(wm),
        !(n >= t.length); ) {
            var o = r(bm);
            if (o.slice(-1) === ",")
                o = Sn(e, o.substring(0, o.length - 1)),
                i.push(o);
            else {
                var a = "";
                o = Sn(e, o);
                for (var s = !1; ; ) {
                    var l = t.charAt(n);
                    if (l === "") {
                        i.push((o + a).trim());
                        break
                    } else if (s)
                        l === ")" && (s = !1);
                    else if (l === ",") {
                        n += 1,
                        i.push((o + a).trim());
                        break
                    } else
                        l === "(" && (s = !0);
                    a += l,
                    n += 1
                }
            }
        }
        return i.join(", ")
    }
    function Sn(e, t) {
        if (!t || t.trim() === "")
            return t;
        var n = e.createElement("a");
        return n.href = t,
        n.href
    }
    function Em(e) {
        return Boolean(e.tagName === "svg" || e.ownerSVGElement)
    }
    function Ro() {
        var e = document.createElement("a");
        return e.href = "",
        e.href
    }
    function wl(e, t, n, r) {
        return r && (n === "src" || n === "href" && !(t === "use" && r[0] === "#") || n === "xlink:href" && r[0] !== "#" || n === "background" && (t === "table" || t === "td" || t === "th") ? Sn(e, r) : n === "srcset" ? Cm(e, r) : n === "style" ? Jr(r, Ro()) : t === "object" && n === "data" ? Sn(e, r) : r)
    }
    function Cl(e, t, n) {
        return (e === "video" || e === "audio") && t === "autoplay"
    }
    function Im(e, t, n) {
        if (typeof t == "string") {
            if (e.classList.contains(t))
                return !0
        } else
            for (var r = e.classList.length; r--; ) {
                var i = e.classList[r];
                if (t.test(i))
                    return !0
            }
        return n ? e.matches(n) : !1
    }
    function ei(e, t, n) {
        if (!e)
            return !1;
        if (e.nodeType !== e.ELEMENT_NODE)
            return n ? ei(e.parentNode, t, n) : !1;
        for (var r = e.classList.length; r--; ) {
            var i = e.classList[r];
            if (t.test(i))
                return !0
        }
        return n ? ei(e.parentNode, t, n) : !1
    }
    function El(e, t, n) {
        var r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (r === null)
            return !1;
        if (typeof t == "string") {
            if (r.classList.contains(t) || r.closest(".".concat(t)))
                return !0
        } else if (ei(r, t, !0))
            return !0;
        return !!(n && (r.matches(n) || r.closest(n)))
    }
    function Sm(e, t, n) {
        var r = e.contentWindow;
        if (!!r) {
            var i = !1, o;
            try {
                o = r.document.readyState
            } catch {
                return
            }
            if (o !== "complete") {
                var a = setTimeout(function() {
                    i || (t(),
                    i = !0)
                }, n);
                e.addEventListener("load", function() {
                    clearTimeout(a),
                    i = !0,
                    t()
                });
                return
            }
            var s = "about:blank";
            if (r.location.href !== s || e.src === s || e.src === "")
                return setTimeout(t, 0),
                e.addEventListener("load", t);
            e.addEventListener("load", t)
        }
    }
    function km(e, t, n) {
        var r = !1, i;
        try {
            i = e.sheet
        } catch {
            return
        }
        if (!i) {
            var o = setTimeout(function() {
                r || (t(),
                r = !0)
            }, n);
            e.addEventListener("load", function() {
                clearTimeout(o),
                r = !0,
                t()
            })
        }
    }
    function xm(e, t) {
        var n = t.doc
          , r = t.mirror
          , i = t.blockClass
          , o = t.blockSelector
          , a = t.maskTextClass
          , s = t.maskTextSelector
          , l = t.inlineStylesheet
          , u = t.maskInputOptions
          , c = u === void 0 ? {} : u
          , d = t.maskTextFn
          , f = t.maskInputFn
          , p = t.dataURLOptions
          , h = p === void 0 ? {} : p
          , m = t.inlineImages
          , g = t.recordCanvas
          , _ = t.keepIframeSrcFn
          , v = t.newlyAddedElement
          , b = v === void 0 ? !1 : v
          , y = Am(n, r);
        switch (e.nodeType) {
        case e.DOCUMENT_NODE:
            return e.compatMode !== "CSS1Compat" ? {
                type: ye.Document,
                childNodes: [],
                compatMode: e.compatMode
            } : {
                type: ye.Document,
                childNodes: []
            };
        case e.DOCUMENT_TYPE_NODE:
            return {
                type: ye.DocumentType,
                name: e.name,
                publicId: e.publicId,
                systemId: e.systemId,
                rootId: y
            };
        case e.ELEMENT_NODE:
            return Rm(e, {
                doc: n,
                blockClass: i,
                blockSelector: o,
                inlineStylesheet: l,
                maskInputOptions: c,
                maskInputFn: f,
                dataURLOptions: h,
                inlineImages: m,
                recordCanvas: g,
                keepIframeSrcFn: _,
                newlyAddedElement: b,
                rootId: y
            });
        case e.TEXT_NODE:
            return Tm(e, {
                maskTextClass: a,
                maskTextSelector: s,
                maskTextFn: d,
                rootId: y
            });
        case e.CDATA_SECTION_NODE:
            return {
                type: ye.CDATA,
                textContent: "",
                rootId: y
            };
        case e.COMMENT_NODE:
            return {
                type: ye.Comment,
                textContent: e.textContent || "",
                rootId: y
            };
        default:
            return !1
        }
    }
    function Am(e, t) {
        if (!!t.hasNode(e)) {
            var n = t.getId(e);
            return n === 1 ? void 0 : n
        }
    }
    function Tm(e, t) {
        var n, r = t.maskTextClass, i = t.maskTextSelector, o = t.maskTextFn, a = t.rootId, s = e.parentNode && e.parentNode.tagName, l = e.textContent, u = s === "STYLE" ? !0 : void 0, c = s === "SCRIPT" ? !0 : void 0;
        if (u && l) {
            try {
                e.nextSibling || e.previousSibling || !((n = e.parentNode.sheet) === null || n === void 0) && n.cssRules && (l = hm(e.parentNode.sheet))
            } catch (d) {
                console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(d), e)
            }
            l = Jr(l, Ro())
        }
        return c && (l = "SCRIPT_PLACEHOLDER"),
        !u && !c && l && El(e, r, i) && (l = o ? o(l) : l.replace(/[\S]/g, "*")),
        {
            type: ye.Text,
            textContent: l || "",
            isStyle: u,
            rootId: a
        }
    }
    function Rm(e, t) {
        for (var n = t.doc, r = t.blockClass, i = t.blockSelector, o = t.inlineStylesheet, a = t.maskInputOptions, s = a === void 0 ? {} : a, l = t.maskInputFn, u = t.dataURLOptions, c = u === void 0 ? {} : u, d = t.inlineImages, f = t.recordCanvas, p = t.keepIframeSrcFn, h = t.newlyAddedElement, m = h === void 0 ? !1 : h, g = t.rootId, _ = Im(e, r, i), v = pm(e), b = {}, y = e.attributes.length, C = 0; C < y; C++) {
            var S = e.attributes[C];
            Cl(v, S.name, S.value) || (b[S.name] = wl(n, v, S.name, S.value))
        }
        if (v === "link" && o) {
            var I = Array.from(n.styleSheets).find(function(ne) {
                return ne.href === e.href
            })
              , E = null;
            I && (E = Ao(I)),
            E && (delete b.rel,
            delete b.href,
            b._cssText = Jr(E, I.href))
        }
        if (v === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
            var E = Ao(e.sheet);
            E && (b._cssText = Jr(E, Ro()))
        }
        if (v === "input" || v === "textarea" || v === "select") {
            var x = e.value
              , R = e.checked;
            b.type !== "radio" && b.type !== "checkbox" && b.type !== "submit" && b.type !== "button" && x ? b.value = To({
                type: b.type,
                tagName: v,
                value: x,
                maskInputOptions: s,
                maskInputFn: l
            }) : R && (b.checked = R)
        }
        if (v === "option" && (e.selected && !s.select ? b.selected = !0 : delete b.selected),
        v === "canvas" && f) {
            if (e.__context === "2d")
                cm(e) || (b.rr_dataURL = e.toDataURL(c.type, c.quality));
            else if (!("__context"in e)) {
                var T = e.toDataURL(c.type, c.quality)
                  , N = document.createElement("canvas");
                N.width = e.width,
                N.height = e.height;
                var k = N.toDataURL(c.type, c.quality);
                T !== k && (b.rr_dataURL = T)
            }
        }
        if (v === "img" && d) {
            In || (In = n.createElement("canvas"),
            bl = In.getContext("2d"));
            var D = e
              , A = D.crossOrigin;
            D.crossOrigin = "anonymous";
            var j = function() {
                try {
                    In.width = D.naturalWidth,
                    In.height = D.naturalHeight,
                    bl.drawImage(D, 0, 0),
                    b.rr_dataURL = In.toDataURL(c.type, c.quality)
                } catch (ne) {
                    console.warn("Cannot inline img src=".concat(D.currentSrc, "! Error: ").concat(ne))
                }
                A ? b.crossOrigin = A : D.removeAttribute("crossorigin")
            };
            D.complete && D.naturalWidth !== 0 ? j() : D.onload = j
        }
        if ((v === "audio" || v === "video") && (b.rr_mediaState = e.paused ? "paused" : "played",
        b.rr_mediaCurrentTime = e.currentTime),
        m || (e.scrollLeft && (b.rr_scrollLeft = e.scrollLeft),
        e.scrollTop && (b.rr_scrollTop = e.scrollTop)),
        _) {
            var ee = e.getBoundingClientRect()
              , ue = ee.width
              , ce = ee.height;
            b = {
                class: b.class,
                rr_width: "".concat(ue, "px"),
                rr_height: "".concat(ce, "px")
            }
        }
        return v === "iframe" && !p(b.src) && (e.contentDocument || (b.rr_src = b.src),
        delete b.src),
        {
            type: ye.Element,
            tagName: v,
            attributes: b,
            childNodes: [],
            isSVG: Em(e) || void 0,
            needBlock: _,
            rootId: g
        }
    }
    function ie(e) {
        return e == null ? "" : e.toLowerCase()
    }
    function Lm(e, t) {
        if (t.comment && e.type === ye.Comment)
            return !0;
        if (e.type === ye.Element) {
            if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && e.attributes.href.endsWith(".js")))
                return !0;
            if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (ie(e.attributes.name).match(/^msapplication-tile(image|color)$/) || ie(e.attributes.name) === "application-name" || ie(e.attributes.rel) === "icon" || ie(e.attributes.rel) === "apple-touch-icon" || ie(e.attributes.rel) === "shortcut icon")))
                return !0;
            if (e.tagName === "meta") {
                if (t.headMetaDescKeywords && ie(e.attributes.name).match(/^description|keywords$/))
                    return !0;
                if (t.headMetaSocial && (ie(e.attributes.property).match(/^(og|twitter|fb):/) || ie(e.attributes.name).match(/^(og|twitter):/) || ie(e.attributes.name) === "pinterest"))
                    return !0;
                if (t.headMetaRobots && (ie(e.attributes.name) === "robots" || ie(e.attributes.name) === "googlebot" || ie(e.attributes.name) === "bingbot"))
                    return !0;
                if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
                    return !0;
                if (t.headMetaAuthorship && (ie(e.attributes.name) === "author" || ie(e.attributes.name) === "generator" || ie(e.attributes.name) === "framework" || ie(e.attributes.name) === "publisher" || ie(e.attributes.name) === "progid" || ie(e.attributes.property).match(/^article:/) || ie(e.attributes.property).match(/^product:/)))
                    return !0;
                if (t.headMetaVerification && (ie(e.attributes.name) === "google-site-verification" || ie(e.attributes.name) === "yandex-verification" || ie(e.attributes.name) === "csrf-token" || ie(e.attributes.name) === "p:domain_verify" || ie(e.attributes.name) === "verify-v1" || ie(e.attributes.name) === "verification" || ie(e.attributes.name) === "shopify-checkout-api-token"))
                    return !0
            }
        }
        return !1
    }
    function kn(e, t) {
        var n = t.doc
          , r = t.mirror
          , i = t.blockClass
          , o = t.blockSelector
          , a = t.maskTextClass
          , s = t.maskTextSelector
          , l = t.skipChild
          , u = l === void 0 ? !1 : l
          , c = t.inlineStylesheet
          , d = c === void 0 ? !0 : c
          , f = t.maskInputOptions
          , p = f === void 0 ? {} : f
          , h = t.maskTextFn
          , m = t.maskInputFn
          , g = t.slimDOMOptions
          , _ = t.dataURLOptions
          , v = _ === void 0 ? {} : _
          , b = t.inlineImages
          , y = b === void 0 ? !1 : b
          , C = t.recordCanvas
          , S = C === void 0 ? !1 : C
          , I = t.onSerialize
          , E = t.onIframeLoad
          , x = t.iframeLoadTimeout
          , R = x === void 0 ? 5e3 : x
          , T = t.onStylesheetLoad
          , N = t.stylesheetLoadTimeout
          , k = N === void 0 ? 5e3 : N
          , D = t.keepIframeSrcFn
          , A = D === void 0 ? function() {
            return !1
        }
        : D
          , j = t.newlyAddedElement
          , ee = j === void 0 ? !1 : j
          , ue = t.preserveWhiteSpace
          , ce = ue === void 0 ? !0 : ue
          , ne = xm(e, {
            doc: n,
            mirror: r,
            blockClass: i,
            blockSelector: o,
            maskTextClass: a,
            maskTextSelector: s,
            inlineStylesheet: d,
            maskInputOptions: p,
            maskTextFn: h,
            maskInputFn: m,
            dataURLOptions: v,
            inlineImages: y,
            recordCanvas: S,
            keepIframeSrcFn: A,
            newlyAddedElement: ee
        });
        if (!ne)
            return console.warn(e, "not serialized"),
            null;
        var ke;
        r.hasNode(e) ? ke = r.getId(e) : Lm(ne, g) || !ce && ne.type === ye.Text && !ne.isStyle && !ne.textContent.replace(/^\s+|\s+$/gm, "").length ? ke = ar : ke = _l();
        var Q = Object.assign(ne, {
            id: ke
        });
        if (r.add(e, Q),
        ke === ar)
            return null;
        I && I(e);
        var nt = !u;
        if (Q.type === ye.Element) {
            nt = nt && !Q.needBlock,
            delete Q.needBlock;
            var de = e.shadowRoot;
            de && or(de) && (Q.isShadowHost = !0)
        }
        if ((Q.type === ye.Document || Q.type === ye.Element) && nt) {
            g.headWhitespace && Q.type === ye.Element && Q.tagName === "head" && (ce = !1);
            for (var De = {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: u,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: h,
                maskInputFn: m,
                slimDOMOptions: g,
                dataURLOptions: v,
                inlineImages: y,
                recordCanvas: S,
                preserveWhiteSpace: ce,
                onSerialize: I,
                onIframeLoad: E,
                iframeLoadTimeout: R,
                onStylesheetLoad: T,
                stylesheetLoadTimeout: k,
                keepIframeSrcFn: A
            }, ht = 0, H = Array.from(e.childNodes); ht < H.length; ht++) {
                var Ue = H[ht]
                  , X = kn(Ue, De);
                X && Q.childNodes.push(X)
            }
            if (am(e) && e.shadowRoot)
                for (var we = 0, mt = Array.from(e.shadowRoot.childNodes); we < mt.length; we++) {
                    var Ue = mt[we]
                      , X = kn(Ue, De);
                    X && (or(e.shadowRoot) && (X.isShadow = !0),
                    Q.childNodes.push(X))
                }
        }
        return e.parentNode && ir(e.parentNode) && or(e.parentNode) && (Q.isShadow = !0),
        Q.type === ye.Element && Q.tagName === "iframe" && Sm(e, function() {
            var J = e.contentDocument;
            if (J && E) {
                var Zn = kn(J, {
                    doc: J,
                    mirror: r,
                    blockClass: i,
                    blockSelector: o,
                    maskTextClass: a,
                    maskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: p,
                    maskTextFn: h,
                    maskInputFn: m,
                    slimDOMOptions: g,
                    dataURLOptions: v,
                    inlineImages: y,
                    recordCanvas: S,
                    preserveWhiteSpace: ce,
                    onSerialize: I,
                    onIframeLoad: E,
                    iframeLoadTimeout: R,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: k,
                    keepIframeSrcFn: A
                });
                Zn && E(e, Zn)
            }
        }, R),
        Q.type === ye.Element && Q.tagName === "link" && Q.attributes.rel === "stylesheet" && km(e, function() {
            if (T) {
                var J = kn(e, {
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: o,
                    maskTextClass: a,
                    maskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: p,
                    maskTextFn: h,
                    maskInputFn: m,
                    slimDOMOptions: g,
                    dataURLOptions: v,
                    inlineImages: y,
                    recordCanvas: S,
                    preserveWhiteSpace: ce,
                    onSerialize: I,
                    onIframeLoad: E,
                    iframeLoadTimeout: R,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: k,
                    keepIframeSrcFn: A
                });
                J && T(e, J)
            }
        }, k),
        Q
    }
    function Om(e, t) {
        var n = t || {}
          , r = n.mirror
          , i = r === void 0 ? new vl : r
          , o = n.blockClass
          , a = o === void 0 ? "rr-block" : o
          , s = n.blockSelector
          , l = s === void 0 ? null : s
          , u = n.maskTextClass
          , c = u === void 0 ? "rr-mask" : u
          , d = n.maskTextSelector
          , f = d === void 0 ? null : d
          , p = n.inlineStylesheet
          , h = p === void 0 ? !0 : p
          , m = n.inlineImages
          , g = m === void 0 ? !1 : m
          , _ = n.recordCanvas
          , v = _ === void 0 ? !1 : _
          , b = n.maskAllInputs
          , y = b === void 0 ? !1 : b
          , C = n.maskTextFn
          , S = n.maskInputFn
          , I = n.slimDOM
          , E = I === void 0 ? !1 : I
          , x = n.dataURLOptions
          , R = n.preserveWhiteSpace
          , T = n.onSerialize
          , N = n.onIframeLoad
          , k = n.iframeLoadTimeout
          , D = n.onStylesheetLoad
          , A = n.stylesheetLoadTimeout
          , j = n.keepIframeSrcFn
          , ee = j === void 0 ? function() {
            return !1
        }
        : j
          , ue = y === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : y === !1 ? {
            password: !0
        } : y
          , ce = E === !0 || E === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: E === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : E === !1 ? {} : E;
        return kn(e, {
            doc: e,
            mirror: i,
            blockClass: a,
            blockSelector: l,
            maskTextClass: c,
            maskTextSelector: f,
            skipChild: !1,
            inlineStylesheet: h,
            maskInputOptions: ue,
            maskTextFn: C,
            maskInputFn: S,
            slimDOMOptions: ce,
            dataURLOptions: x,
            inlineImages: g,
            recordCanvas: v,
            preserveWhiteSpace: R,
            onSerialize: T,
            onIframeLoad: N,
            iframeLoadTimeout: k,
            onStylesheetLoad: D,
            stylesheetLoadTimeout: A,
            keepIframeSrcFn: ee,
            newlyAddedElement: !1
        })
    }
    function Re(e, t, n=document) {
        const r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(e, t, r),
        ()=>n.removeEventListener(e, t, r)
    }
    const xn = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
    let Il = {
        map: {},
        getId() {
            return console.error(xn),
            -1
        },
        getNode() {
            return console.error(xn),
            null
        },
        removeNodeFromMap() {
            console.error(xn)
        },
        has() {
            return console.error(xn),
            !1
        },
        reset() {
            console.error(xn)
        }
    };
    typeof window < "u" && window.Proxy && window.Reflect && (Il = new Proxy(Il,{
        get(e, t, n) {
            return t === "map" && console.error(xn),
            Reflect.get(e, t, n)
        }
    }));
    function sr(e, t, n={}) {
        let r = null
          , i = 0;
        return function(...o) {
            const a = Date.now();
            !i && n.leading === !1 && (i = a);
            const s = t - (a - i)
              , l = this;
            s <= 0 || s > t ? (r && (clearTimeout(r),
            r = null),
            i = a,
            e.apply(l, o)) : !r && n.trailing !== !1 && (r = setTimeout(()=>{
                i = n.leading === !1 ? 0 : Date.now(),
                r = null,
                e.apply(l, o)
            }
            , s))
        }
    }
    function ti(e, t, n, r, i=window) {
        const o = i.Object.getOwnPropertyDescriptor(e, t);
        return i.Object.defineProperty(e, t, r ? n : {
            set(a) {
                setTimeout(()=>{
                    n.set.call(this, a)
                }
                , 0),
                o && o.set && o.set.call(this, a)
            }
        }),
        ()=>ti(e, t, o || {}, !0)
    }
    function lr(e, t, n) {
        try {
            if (!(t in e))
                return ()=>{}
                ;
            const r = e[t]
              , i = n(r);
            return typeof i == "function" && (i.prototype = i.prototype || {},
            Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })),
            e[t] = i,
            ()=>{
                e[t] = r
            }
        } catch {
            return ()=>{}
        }
    }
    function Sl(e) {
        var t, n, r, i, o, a;
        const s = e.document;
        return {
            left: s.scrollingElement ? s.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : (s == null ? void 0 : s.documentElement.scrollLeft) || ((n = (t = s == null ? void 0 : s.body) === null || t === void 0 ? void 0 : t.parentElement) === null || n === void 0 ? void 0 : n.scrollLeft) || ((r = s == null ? void 0 : s.body) === null || r === void 0 ? void 0 : r.scrollLeft) || 0,
            top: s.scrollingElement ? s.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : (s == null ? void 0 : s.documentElement.scrollTop) || ((o = (i = s == null ? void 0 : s.body) === null || i === void 0 ? void 0 : i.parentElement) === null || o === void 0 ? void 0 : o.scrollTop) || ((a = s == null ? void 0 : s.body) === null || a === void 0 ? void 0 : a.scrollTop) || 0
        }
    }
    function kl() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }
    function xl() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }
    function Le(e, t, n, r) {
        if (!e)
            return !1;
        const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (!i)
            return !1;
        if (typeof t == "string") {
            if (i.classList.contains(t) || r && i.closest("." + t) !== null)
                return !0
        } else if (ei(i, t, r))
            return !0;
        return !!(n && (i.matches(n) || r && i.closest(n) !== null))
    }
    function Nm(e, t) {
        return t.getId(e) !== -1
    }
    function Lo(e, t) {
        return t.getId(e) === ar
    }
    function Al(e, t) {
        if (ir(e))
            return !1;
        const n = t.getId(e);
        return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? Al(e.parentNode, t) : !0 : !0
    }
    function Tl(e) {
        return Boolean(e.changedTouches)
    }
    function Dm(e=window) {
        "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
        "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
        Node.prototype.contains || (Node.prototype.contains = (...t)=>{
            let n = t[0];
            if (!(0 in t))
                throw new TypeError("1 argument is required");
            do
                if (this === n)
                    return !0;
            while (n = n && n.parentNode);
            return !1
        }
        )
    }
    function Rl(e, t) {
        return Boolean(e.nodeName === "IFRAME" && t.getMeta(e))
    }
    function Ll(e, t) {
        return Boolean(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
    }
    function Oo(e) {
        return Boolean(e == null ? void 0 : e.shadowRoot)
    }
    class Um {
        constructor() {
            this.id = 1,
            this.styleIDMap = new WeakMap,
            this.idStyleMap = new Map
        }
        getId(t) {
            var n;
            return (n = this.styleIDMap.get(t)) !== null && n !== void 0 ? n : -1
        }
        has(t) {
            return this.styleIDMap.has(t)
        }
        add(t, n) {
            if (this.has(t))
                return this.getId(t);
            let r;
            return n === void 0 ? r = this.id++ : r = n,
            this.styleIDMap.set(t, r),
            this.idStyleMap.set(r, t),
            r
        }
        getStyle(t) {
            return this.idStyleMap.get(t) || null
        }
        reset() {
            this.styleIDMap = new WeakMap,
            this.idStyleMap = new Map,
            this.id = 1
        }
        generateId() {
            return this.id++
        }
    }
    function Ol(e) {
        var t, n;
        let r = null;
        return ((n = (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)) === null || n === void 0 ? void 0 : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (r = e.getRootNode().host),
        r
    }
    function Pm(e) {
        let t = e, n;
        for (; n = Ol(t); )
            t = n;
        return t
    }
    function Mm(e) {
        const t = e.ownerDocument;
        if (!t)
            return !1;
        const n = Pm(e);
        return t.contains(n)
    }
    function Nl(e) {
        const t = e.ownerDocument;
        return t ? t.contains(e) || Mm(e) : !1
    }
    var Y = (e=>(e[e.DomContentLoaded = 0] = "DomContentLoaded",
    e[e.Load = 1] = "Load",
    e[e.FullSnapshot = 2] = "FullSnapshot",
    e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
    e[e.Meta = 4] = "Meta",
    e[e.Custom = 5] = "Custom",
    e[e.Plugin = 6] = "Plugin",
    e))(Y || {})
      , Z = (e=>(e[e.Mutation = 0] = "Mutation",
    e[e.MouseMove = 1] = "MouseMove",
    e[e.MouseInteraction = 2] = "MouseInteraction",
    e[e.Scroll = 3] = "Scroll",
    e[e.ViewportResize = 4] = "ViewportResize",
    e[e.Input = 5] = "Input",
    e[e.TouchMove = 6] = "TouchMove",
    e[e.MediaInteraction = 7] = "MediaInteraction",
    e[e.StyleSheetRule = 8] = "StyleSheetRule",
    e[e.CanvasMutation = 9] = "CanvasMutation",
    e[e.Font = 10] = "Font",
    e[e.Log = 11] = "Log",
    e[e.Drag = 12] = "Drag",
    e[e.StyleDeclaration = 13] = "StyleDeclaration",
    e[e.Selection = 14] = "Selection",
    e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
    e))(Z || {})
      , No = (e=>(e[e.MouseUp = 0] = "MouseUp",
    e[e.MouseDown = 1] = "MouseDown",
    e[e.Click = 2] = "Click",
    e[e.ContextMenu = 3] = "ContextMenu",
    e[e.DblClick = 4] = "DblClick",
    e[e.Focus = 5] = "Focus",
    e[e.Blur = 6] = "Blur",
    e[e.TouchStart = 7] = "TouchStart",
    e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
    e[e.TouchEnd = 9] = "TouchEnd",
    e[e.TouchCancel = 10] = "TouchCancel",
    e))(No || {})
      , An = (e=>(e[e["2D"] = 0] = "2D",
    e[e.WebGL = 1] = "WebGL",
    e[e.WebGL2 = 2] = "WebGL2",
    e))(An || {});
    function Dl(e) {
        return "__ln"in e
    }
    class Fm {
        constructor() {
            this.length = 0,
            this.head = null
        }
        get(t) {
            if (t >= this.length)
                throw new Error("Position outside of list range");
            let n = this.head;
            for (let r = 0; r < t; r++)
                n = (n == null ? void 0 : n.next) || null;
            return n
        }
        addNode(t) {
            const n = {
                value: t,
                previous: null,
                next: null
            };
            if (t.__ln = n,
            t.previousSibling && Dl(t.previousSibling)) {
                const r = t.previousSibling.__ln.next;
                n.next = r,
                n.previous = t.previousSibling.__ln,
                t.previousSibling.__ln.next = n,
                r && (r.previous = n)
            } else if (t.nextSibling && Dl(t.nextSibling) && t.nextSibling.__ln.previous) {
                const r = t.nextSibling.__ln.previous;
                n.previous = r,
                n.next = t.nextSibling.__ln,
                t.nextSibling.__ln.previous = n,
                r && (r.next = n)
            } else
                this.head && (this.head.previous = n),
                n.next = this.head,
                this.head = n;
            this.length++
        }
        removeNode(t) {
            const n = t.__ln;
            !this.head || (n.previous ? (n.previous.next = n.next,
            n.next && (n.next.previous = n.previous)) : (this.head = n.next,
            this.head && (this.head.previous = null)),
            t.__ln && delete t.__ln,
            this.length--)
        }
    }
    const Ul = (e,t)=>`${e}@${t}`;
    class Vm {
        constructor() {
            this.frozen = !1,
            this.locked = !1,
            this.texts = [],
            this.attributes = [],
            this.removes = [],
            this.mapRemoves = [],
            this.movedMap = {},
            this.addedSet = new Set,
            this.movedSet = new Set,
            this.droppedSet = new Set,
            this.processMutations = t=>{
                t.forEach(this.processMutation),
                this.emit()
            }
            ,
            this.emit = ()=>{
                if (this.frozen || this.locked)
                    return;
                const t = []
                  , n = new Fm
                  , r = s=>{
                    let l = s
                      , u = ar;
                    for (; u === ar; )
                        l = l && l.nextSibling,
                        u = l && this.mirror.getId(l);
                    return u
                }
                  , i = s=>{
                    if (!s.parentNode || !Nl(s))
                        return;
                    const l = ir(s.parentNode) ? this.mirror.getId(Ol(s)) : this.mirror.getId(s.parentNode)
                      , u = r(s);
                    if (l === -1 || u === -1)
                        return n.addNode(s);
                    const c = kn(s, {
                        doc: this.doc,
                        mirror: this.mirror,
                        blockClass: this.blockClass,
                        blockSelector: this.blockSelector,
                        maskTextClass: this.maskTextClass,
                        maskTextSelector: this.maskTextSelector,
                        skipChild: !0,
                        newlyAddedElement: !0,
                        inlineStylesheet: this.inlineStylesheet,
                        maskInputOptions: this.maskInputOptions,
                        maskTextFn: this.maskTextFn,
                        maskInputFn: this.maskInputFn,
                        slimDOMOptions: this.slimDOMOptions,
                        dataURLOptions: this.dataURLOptions,
                        recordCanvas: this.recordCanvas,
                        inlineImages: this.inlineImages,
                        onSerialize: d=>{
                            Rl(d, this.mirror) && this.iframeManager.addIframe(d),
                            Ll(d, this.mirror) && this.stylesheetManager.trackLinkElement(d),
                            Oo(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc)
                        }
                        ,
                        onIframeLoad: (d,f)=>{
                            this.iframeManager.attachIframe(d, f),
                            this.shadowDomManager.observeAttachShadow(d)
                        }
                        ,
                        onStylesheetLoad: (d,f)=>{
                            this.stylesheetManager.attachLinkElement(d, f)
                        }
                    });
                    c && t.push({
                        parentId: l,
                        nextId: u,
                        node: c
                    })
                }
                ;
                for (; this.mapRemoves.length; )
                    this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (const s of Array.from(this.movedSet.values()))
                    Pl(this.removes, s, this.mirror) && !this.movedSet.has(s.parentNode) || i(s);
                for (const s of Array.from(this.addedSet.values()))
                    !Fl(this.droppedSet, s) && !Pl(this.removes, s, this.mirror) || Fl(this.movedSet, s) ? i(s) : this.droppedSet.add(s);
                let o = null;
                for (; n.length; ) {
                    let s = null;
                    if (o) {
                        const l = this.mirror.getId(o.value.parentNode)
                          , u = r(o.value);
                        l !== -1 && u !== -1 && (s = o)
                    }
                    if (!s)
                        for (let l = n.length - 1; l >= 0; l--) {
                            const u = n.get(l);
                            if (u) {
                                const c = this.mirror.getId(u.value.parentNode);
                                if (r(u.value) === -1)
                                    continue;
                                if (c !== -1) {
                                    s = u;
                                    break
                                } else {
                                    const f = u.value;
                                    if (f.parentNode && f.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        const p = f.parentNode.host;
                                        if (this.mirror.getId(p) !== -1) {
                                            s = u;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    if (!s) {
                        for (; n.head; )
                            n.removeNode(n.head.value);
                        break
                    }
                    o = s.previous,
                    n.removeNode(s.value),
                    i(s.value)
                }
                const a = {
                    texts: this.texts.map(s=>({
                        id: this.mirror.getId(s.node),
                        value: s.value
                    })).filter(s=>this.mirror.has(s.id)),
                    attributes: this.attributes.map(s=>({
                        id: this.mirror.getId(s.node),
                        attributes: s.attributes
                    })).filter(s=>this.mirror.has(s.id)),
                    removes: this.removes,
                    adds: t
                };
                !a.texts.length && !a.attributes.length && !a.removes.length && !a.adds.length || (this.texts = [],
                this.attributes = [],
                this.removes = [],
                this.addedSet = new Set,
                this.movedSet = new Set,
                this.droppedSet = new Set,
                this.movedMap = {},
                this.mutationCb(a))
            }
            ,
            this.processMutation = t=>{
                if (!Lo(t.target, this.mirror))
                    switch (t.type) {
                    case "characterData":
                        {
                            const n = t.target.textContent;
                            !Le(t.target, this.blockClass, this.blockSelector, !1) && n !== t.oldValue && this.texts.push({
                                value: El(t.target, this.maskTextClass, this.maskTextSelector) && n ? this.maskTextFn ? this.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                                node: t.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            const n = t.target;
                            let r = t.target.getAttribute(t.attributeName);
                            if (t.attributeName === "value" && (r = To({
                                maskInputOptions: this.maskInputOptions,
                                tagName: t.target.tagName,
                                type: t.target.getAttribute("type"),
                                value: r,
                                maskInputFn: this.maskInputFn
                            })),
                            Le(t.target, this.blockClass, this.blockSelector, !1) || r === t.oldValue)
                                return;
                            let i = this.attributes.find(o=>o.node === t.target);
                            if (n.tagName === "IFRAME" && t.attributeName === "src" && !this.keepIframeSrcFn(r))
                                if (!n.contentDocument)
                                    t.attributeName = "rr_src";
                                else
                                    return;
                            if (i || (i = {
                                node: t.target,
                                attributes: {}
                            },
                            this.attributes.push(i)),
                            t.attributeName === "style") {
                                const o = this.doc.createElement("span");
                                t.oldValue && o.setAttribute("style", t.oldValue),
                                (i.attributes.style === void 0 || i.attributes.style === null) && (i.attributes.style = {});
                                const a = i.attributes.style;
                                for (const s of Array.from(n.style)) {
                                    const l = n.style.getPropertyValue(s)
                                      , u = n.style.getPropertyPriority(s);
                                    (l !== o.style.getPropertyValue(s) || u !== o.style.getPropertyPriority(s)) && (u === "" ? a[s] = l : a[s] = [l, u])
                                }
                                for (const s of Array.from(o.style))
                                    n.style.getPropertyValue(s) === "" && (a[s] = !1)
                            } else
                                Cl(n.tagName, t.attributeName) || (i.attributes[t.attributeName] = wl(this.doc, n.tagName, t.attributeName, r));
                            break
                        }
                    case "childList":
                        {
                            if (Le(t.target, this.blockClass, this.blockSelector, !0))
                                return;
                            t.addedNodes.forEach(n=>this.genAdds(n, t.target)),
                            t.removedNodes.forEach(n=>{
                                const r = this.mirror.getId(n)
                                  , i = ir(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                Le(t.target, this.blockClass, this.blockSelector, !1) || Lo(n, this.mirror) || !Nm(n, this.mirror) || (this.addedSet.has(n) ? (Do(this.addedSet, n),
                                this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || Al(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[Ul(r, i)] ? Do(this.movedSet, n) : this.removes.push({
                                    parentId: i,
                                    id: r,
                                    isShadow: ir(t.target) && or(t.target) ? !0 : void 0
                                })),
                                this.mapRemoves.push(n))
                            }
                            );
                            break
                        }
                    }
            }
            ,
            this.genAdds = (t,n)=>{
                if (!this.processedNodeManager.inOtherBuffer(t, this)) {
                    if (this.mirror.hasNode(t)) {
                        if (Lo(t, this.mirror))
                            return;
                        this.movedSet.add(t);
                        let r = null;
                        n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                        r && r !== -1 && (this.movedMap[Ul(this.mirror.getId(t), r)] = !0)
                    } else
                        this.addedSet.add(t),
                        this.droppedSet.delete(t);
                    Le(t, this.blockClass, this.blockSelector, !1) || (t.childNodes.forEach(r=>this.genAdds(r)),
                    Oo(t) && t.shadowRoot.childNodes.forEach(r=>{
                        this.processedNodeManager.add(r, this),
                        this.genAdds(r, t)
                    }
                    ))
                }
            }
        }
        init(t) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(n=>{
                this[n] = t[n]
            }
            )
        }
        freeze() {
            this.frozen = !0,
            this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1,
            this.canvasManager.unfreeze(),
            this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0,
            this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1,
            this.canvasManager.unlock(),
            this.emit()
        }
        reset() {
            this.shadowDomManager.reset(),
            this.canvasManager.reset()
        }
    }
    function Do(e, t) {
        e.delete(t),
        t.childNodes.forEach(n=>Do(e, n))
    }
    function Pl(e, t, n) {
        return e.length === 0 ? !1 : Ml(e, t, n)
    }
    function Ml(e, t, n) {
        const {parentNode: r} = t;
        if (!r)
            return !1;
        const i = n.getId(r);
        return e.some(o=>o.id === i) ? !0 : Ml(e, r, n)
    }
    function Fl(e, t) {
        return e.size === 0 ? !1 : Vl(e, t)
    }
    function Vl(e, t) {
        const {parentNode: n} = t;
        return n ? e.has(n) ? !0 : Vl(e, n) : !1
    }
    class Bm {
        constructor() {
            this.nodeMap = new WeakMap,
            this.periodicallyClear()
        }
        periodicallyClear() {
            requestAnimationFrame(()=>{
                this.clear(),
                this.periodicallyClear()
            }
            )
        }
        inOtherBuffer(t, n) {
            const r = this.nodeMap.get(t);
            return r && Array.from(r).some(i=>i !== n)
        }
        add(t, n) {
            this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(n))
        }
        clear() {
            this.nodeMap = new WeakMap
        }
    }
    const en = []
      , Bl = new Bm;
    function ur(e) {
        try {
            if ("composedPath"in e) {
                const t = e.composedPath();
                if (t.length)
                    return t[0]
            } else if ("path"in e && e.path.length)
                return e.path[0];
            return e.target
        } catch {
            return e.target
        }
    }
    function jl(e, t) {
        var n, r;
        const i = new Vm;
        en.push(i),
        i.init(e);
        let o = window.MutationObserver || window.__rrMutationObserver;
        const a = (r = (n = window == null ? void 0 : window.Zone) === null || n === void 0 ? void 0 : n.__symbol__) === null || r === void 0 ? void 0 : r.call(n, "MutationObserver");
        a && window[a] && (o = window[a]);
        const s = new o(i.processMutations.bind(i));
        return s.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }),
        s
    }
    function jm({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
        if (t.mousemove === !1)
            return ()=>{}
            ;
        const i = typeof t.mousemove == "number" ? t.mousemove : 50
          , o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
        let a = [], s;
        const l = sr(d=>{
            const f = Date.now() - s;
            e(a.map(p=>(p.timeOffset -= f,
            p)), d),
            a = [],
            s = null
        }
        , o)
          , u = sr(d=>{
            const f = ur(d)
              , {clientX: p, clientY: h} = Tl(d) ? d.changedTouches[0] : d;
            s || (s = Date.now()),
            a.push({
                x: p,
                y: h,
                id: r.getId(f),
                timeOffset: Date.now() - s
            }),
            l(typeof DragEvent < "u" && d instanceof DragEvent ? Z.Drag : d instanceof MouseEvent ? Z.MouseMove : Z.TouchMove)
        }
        , i, {
            trailing: !1
        })
          , c = [Re("mousemove", u, n), Re("touchmove", u, n), Re("drag", u, n)];
        return ()=>{
            c.forEach(d=>d())
        }
    }
    function Hm({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, sampling: o}) {
        if (o.mouseInteraction === !1)
            return ()=>{}
            ;
        const a = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction
          , s = []
          , l = u=>c=>{
            const d = ur(c);
            if (Le(d, r, i, !0))
                return;
            const f = Tl(c) ? c.changedTouches[0] : c;
            if (!f)
                return;
            const p = n.getId(d)
              , {clientX: h, clientY: m} = f;
            e({
                type: No[u],
                id: p,
                x: h,
                y: m
            })
        }
        ;
        return Object.keys(No).filter(u=>Number.isNaN(Number(u)) && !u.endsWith("_Departed") && a[u] !== !1).forEach(u=>{
            const c = u.toLowerCase()
              , d = l(u);
            s.push(Re(c, d, t))
        }
        ),
        ()=>{
            s.forEach(u=>u())
        }
    }
    function Hl({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, sampling: o}) {
        const a = sr(s=>{
            const l = ur(s);
            if (!l || Le(l, r, i, !0))
                return;
            const u = n.getId(l);
            if (l === t && t.defaultView) {
                const c = Sl(t.defaultView);
                e({
                    id: u,
                    x: c.left,
                    y: c.top
                })
            } else
                e({
                    id: u,
                    x: l.scrollLeft,
                    y: l.scrollTop
                })
        }
        , o.scroll || 100);
        return Re("scroll", a, t)
    }
    function zm({viewportResizeCb: e}) {
        let t = -1
          , n = -1;
        const r = sr(()=>{
            const i = kl()
              , o = xl();
            (t !== i || n !== o) && (e({
                width: Number(o),
                height: Number(i)
            }),
            t = i,
            n = o)
        }
        , 200);
        return Re("resize", r, window)
    }
    function zl(e, t) {
        const n = Object.assign({}, e);
        return t || delete n.userTriggered,
        n
    }
    const Km = ["INPUT", "TEXTAREA", "SELECT"]
      , Kl = new WeakMap;
    function Gm({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, ignoreClass: o, maskInputOptions: a, maskInputFn: s, sampling: l, userTriggeredOnInput: u}) {
        function c(_) {
            let v = ur(_);
            const b = _.isTrusted;
            if (v && v.tagName === "OPTION" && (v = v.parentElement),
            !v || !v.tagName || Km.indexOf(v.tagName) < 0 || Le(v, r, i, !0))
                return;
            const y = v.type;
            if (v.classList.contains(o))
                return;
            let C = v.value
              , S = !1;
            y === "radio" || y === "checkbox" ? S = v.checked : (a[v.tagName.toLowerCase()] || a[y]) && (C = To({
                maskInputOptions: a,
                tagName: v.tagName,
                type: y,
                value: C,
                maskInputFn: s
            })),
            d(v, zl({
                text: C,
                isChecked: S,
                userTriggered: b
            }, u));
            const I = v.name;
            y === "radio" && I && S && t.querySelectorAll(`input[type="radio"][name="${I}"]`).forEach(E=>{
                E !== v && d(E, zl({
                    text: E.value,
                    isChecked: !S,
                    userTriggered: !1
                }, u))
            }
            )
        }
        function d(_, v) {
            const b = Kl.get(_);
            if (!b || b.text !== v.text || b.isChecked !== v.isChecked) {
                Kl.set(_, v);
                const y = n.getId(_);
                e(Object.assign(Object.assign({}, v), {
                    id: y
                }))
            }
        }
        const p = (l.input === "last" ? ["change"] : ["input", "change"]).map(_=>Re(_, c, t))
          , h = t.defaultView;
        if (!h)
            return ()=>{
                p.forEach(_=>_())
            }
            ;
        const m = h.Object.getOwnPropertyDescriptor(h.HTMLInputElement.prototype, "value")
          , g = [[h.HTMLInputElement.prototype, "value"], [h.HTMLInputElement.prototype, "checked"], [h.HTMLSelectElement.prototype, "value"], [h.HTMLTextAreaElement.prototype, "value"], [h.HTMLSelectElement.prototype, "selectedIndex"], [h.HTMLOptionElement.prototype, "selected"]];
        return m && m.set && p.push(...g.map(_=>ti(_[0], _[1], {
            set() {
                c({
                    target: this,
                    isTrusted: !1
                })
            }
        }, !1, h))),
        ()=>{
            p.forEach(_=>_())
        }
    }
    function ni(e) {
        const t = [];
        function n(r, i) {
            if (ri("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule || ri("CSSMediaRule") && r.parentRule instanceof CSSMediaRule || ri("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule || ri("CSSConditionRule") && r.parentRule instanceof CSSConditionRule) {
                const a = Array.from(r.parentRule.cssRules).indexOf(r);
                i.unshift(a)
            } else if (r.parentStyleSheet) {
                const a = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
                i.unshift(a)
            }
            return i
        }
        return n(e, t)
    }
    function Dt(e, t, n) {
        let r, i;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e),
        {
            styleId: i,
            id: r
        }) : {}
    }
    function Wm({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
        if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
            return ()=>{}
            ;
        const i = r.CSSStyleSheet.prototype.insertRule;
        r.CSSStyleSheet.prototype.insertRule = function(c, d) {
            const {id: f, styleId: p} = Dt(this, t, n.styleMirror);
            return (f && f !== -1 || p && p !== -1) && e({
                id: f,
                styleId: p,
                adds: [{
                    rule: c,
                    index: d
                }]
            }),
            i.apply(this, [c, d])
        }
        ;
        const o = r.CSSStyleSheet.prototype.deleteRule;
        r.CSSStyleSheet.prototype.deleteRule = function(c) {
            const {id: d, styleId: f} = Dt(this, t, n.styleMirror);
            return (d && d !== -1 || f && f !== -1) && e({
                id: d,
                styleId: f,
                removes: [{
                    index: c
                }]
            }),
            o.apply(this, [c])
        }
        ;
        let a;
        r.CSSStyleSheet.prototype.replace && (a = r.CSSStyleSheet.prototype.replace,
        r.CSSStyleSheet.prototype.replace = function(c) {
            const {id: d, styleId: f} = Dt(this, t, n.styleMirror);
            return (d && d !== -1 || f && f !== -1) && e({
                id: d,
                styleId: f,
                replace: c
            }),
            a.apply(this, [c])
        }
        );
        let s;
        r.CSSStyleSheet.prototype.replaceSync && (s = r.CSSStyleSheet.prototype.replaceSync,
        r.CSSStyleSheet.prototype.replaceSync = function(c) {
            const {id: d, styleId: f} = Dt(this, t, n.styleMirror);
            return (d && d !== -1 || f && f !== -1) && e({
                id: d,
                styleId: f,
                replaceSync: c
            }),
            s.apply(this, [c])
        }
        );
        const l = {};
        ii("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (ii("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
        ii("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule),
        ii("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
        const u = {};
        return Object.entries(l).forEach(([c,d])=>{
            u[c] = {
                insertRule: d.prototype.insertRule,
                deleteRule: d.prototype.deleteRule
            },
            d.prototype.insertRule = function(f, p) {
                const {id: h, styleId: m} = Dt(this.parentStyleSheet, t, n.styleMirror);
                return (h && h !== -1 || m && m !== -1) && e({
                    id: h,
                    styleId: m,
                    adds: [{
                        rule: f,
                        index: [...ni(this), p || 0]
                    }]
                }),
                u[c].insertRule.apply(this, [f, p])
            }
            ,
            d.prototype.deleteRule = function(f) {
                const {id: p, styleId: h} = Dt(this.parentStyleSheet, t, n.styleMirror);
                return (p && p !== -1 || h && h !== -1) && e({
                    id: p,
                    styleId: h,
                    removes: [{
                        index: [...ni(this), f]
                    }]
                }),
                u[c].deleteRule.apply(this, [f])
            }
        }
        ),
        ()=>{
            r.CSSStyleSheet.prototype.insertRule = i,
            r.CSSStyleSheet.prototype.deleteRule = o,
            a && (r.CSSStyleSheet.prototype.replace = a),
            s && (r.CSSStyleSheet.prototype.replaceSync = s),
            Object.entries(l).forEach(([c,d])=>{
                d.prototype.insertRule = u[c].insertRule,
                d.prototype.deleteRule = u[c].deleteRule
            }
            )
        }
    }
    function Gl({mirror: e, stylesheetManager: t}, n) {
        var r, i, o;
        let a = null;
        n.nodeName === "#document" ? a = e.getId(n) : a = e.getId(n.host);
        const s = n.nodeName === "#document" ? (r = n.defaultView) === null || r === void 0 ? void 0 : r.Document : (o = (i = n.ownerDocument) === null || i === void 0 ? void 0 : i.defaultView) === null || o === void 0 ? void 0 : o.ShadowRoot
          , l = Object.getOwnPropertyDescriptor(s == null ? void 0 : s.prototype, "adoptedStyleSheets");
        return a === null || a === -1 || !s || !l ? ()=>{}
        : (Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: l.configurable,
            enumerable: l.enumerable,
            get() {
                var u;
                return (u = l.get) === null || u === void 0 ? void 0 : u.call(this)
            },
            set(u) {
                var c;
                const d = (c = l.set) === null || c === void 0 ? void 0 : c.call(this, u);
                if (a !== null && a !== -1)
                    try {
                        t.adoptStyleSheets(u, a)
                    } catch {}
                return d
            }
        }),
        ()=>{
            Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: l.configurable,
                enumerable: l.enumerable,
                get: l.get,
                set: l.set
            })
        }
        )
    }
    function $m({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: i}) {
        const o = i.CSSStyleDeclaration.prototype.setProperty;
        i.CSSStyleDeclaration.prototype.setProperty = function(s, l, u) {
            var c;
            if (n.has(s))
                return o.apply(this, [s, l, u]);
            const {id: d, styleId: f} = Dt((c = this.parentRule) === null || c === void 0 ? void 0 : c.parentStyleSheet, t, r.styleMirror);
            return (d && d !== -1 || f && f !== -1) && e({
                id: d,
                styleId: f,
                set: {
                    property: s,
                    value: l,
                    priority: u
                },
                index: ni(this.parentRule)
            }),
            o.apply(this, [s, l, u])
        }
        ;
        const a = i.CSSStyleDeclaration.prototype.removeProperty;
        return i.CSSStyleDeclaration.prototype.removeProperty = function(s) {
            var l;
            if (n.has(s))
                return a.apply(this, [s]);
            const {id: u, styleId: c} = Dt((l = this.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet, t, r.styleMirror);
            return (u && u !== -1 || c && c !== -1) && e({
                id: u,
                styleId: c,
                remove: {
                    property: s
                },
                index: ni(this.parentRule)
            }),
            a.apply(this, [s])
        }
        ,
        ()=>{
            i.CSSStyleDeclaration.prototype.setProperty = o,
            i.CSSStyleDeclaration.prototype.removeProperty = a
        }
    }
    function qm({mediaInteractionCb: e, blockClass: t, blockSelector: n, mirror: r, sampling: i}) {
        const o = s=>sr(l=>{
            const u = ur(l);
            if (!u || Le(u, t, n, !0))
                return;
            const {currentTime: c, volume: d, muted: f, playbackRate: p} = u;
            e({
                type: s,
                id: r.getId(u),
                currentTime: c,
                volume: d,
                muted: f,
                playbackRate: p
            })
        }
        , i.media || 500)
          , a = [Re("play", o(0)), Re("pause", o(1)), Re("seeked", o(2)), Re("volumechange", o(3)), Re("ratechange", o(4))];
        return ()=>{
            a.forEach(s=>s())
        }
    }
    function Zm({fontCb: e, doc: t}) {
        const n = t.defaultView;
        if (!n)
            return ()=>{}
            ;
        const r = []
          , i = new WeakMap
          , o = n.FontFace;
        n.FontFace = function(l, u, c) {
            const d = new o(l,u,c);
            return i.set(d, {
                family: l,
                buffer: typeof u != "string",
                descriptors: c,
                fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
            }),
            d
        }
        ;
        const a = lr(t.fonts, "add", function(s) {
            return function(l) {
                return setTimeout(()=>{
                    const u = i.get(l);
                    u && (e(u),
                    i.delete(l))
                }
                , 0),
                s.apply(this, [l])
            }
        });
        return r.push(()=>{
            n.FontFace = o
        }
        ),
        r.push(a),
        ()=>{
            r.forEach(s=>s())
        }
    }
    function Ym(e) {
        const {doc: t, mirror: n, blockClass: r, blockSelector: i, selectionCb: o} = e;
        let a = !0;
        const s = ()=>{
            const l = t.getSelection();
            if (!l || a && (l == null ? void 0 : l.isCollapsed))
                return;
            a = l.isCollapsed || !1;
            const u = []
              , c = l.rangeCount || 0;
            for (let d = 0; d < c; d++) {
                const f = l.getRangeAt(d)
                  , {startContainer: p, startOffset: h, endContainer: m, endOffset: g} = f;
                Le(p, r, i, !0) || Le(m, r, i, !0) || u.push({
                    start: n.getId(p),
                    startOffset: h,
                    end: n.getId(m),
                    endOffset: g
                })
            }
            o({
                ranges: u
            })
        }
        ;
        return s(),
        Re("selectionchange", s)
    }
    function Qm(e, t) {
        const {mutationCb: n, mousemoveCb: r, mouseInteractionCb: i, scrollCb: o, viewportResizeCb: a, inputCb: s, mediaInteractionCb: l, styleSheetRuleCb: u, styleDeclarationCb: c, canvasMutationCb: d, fontCb: f, selectionCb: p} = e;
        e.mutationCb = (...h)=>{
            t.mutation && t.mutation(...h),
            n(...h)
        }
        ,
        e.mousemoveCb = (...h)=>{
            t.mousemove && t.mousemove(...h),
            r(...h)
        }
        ,
        e.mouseInteractionCb = (...h)=>{
            t.mouseInteraction && t.mouseInteraction(...h),
            i(...h)
        }
        ,
        e.scrollCb = (...h)=>{
            t.scroll && t.scroll(...h),
            o(...h)
        }
        ,
        e.viewportResizeCb = (...h)=>{
            t.viewportResize && t.viewportResize(...h),
            a(...h)
        }
        ,
        e.inputCb = (...h)=>{
            t.input && t.input(...h),
            s(...h)
        }
        ,
        e.mediaInteractionCb = (...h)=>{
            t.mediaInteaction && t.mediaInteaction(...h),
            l(...h)
        }
        ,
        e.styleSheetRuleCb = (...h)=>{
            t.styleSheetRule && t.styleSheetRule(...h),
            u(...h)
        }
        ,
        e.styleDeclarationCb = (...h)=>{
            t.styleDeclaration && t.styleDeclaration(...h),
            c(...h)
        }
        ,
        e.canvasMutationCb = (...h)=>{
            t.canvasMutation && t.canvasMutation(...h),
            d(...h)
        }
        ,
        e.fontCb = (...h)=>{
            t.font && t.font(...h),
            f(...h)
        }
        ,
        e.selectionCb = (...h)=>{
            t.selection && t.selection(...h),
            p(...h)
        }
    }
    function Xm(e, t={}) {
        const n = e.doc.defaultView;
        if (!n)
            return ()=>{}
            ;
        Qm(e, t);
        const r = jl(e, e.doc)
          , i = jm(e)
          , o = Hm(e)
          , a = Hl(e)
          , s = zm(e)
          , l = Gm(e)
          , u = qm(e)
          , c = Wm(e, {
            win: n
        })
          , d = Gl(e, e.doc)
          , f = $m(e, {
            win: n
        })
          , p = e.collectFonts ? Zm(e) : ()=>{}
          , h = Ym(e)
          , m = [];
        for (const g of e.plugins)
            m.push(g.observer(g.callback, n, g.options));
        return ()=>{
            en.forEach(g=>g.reset()),
            r.disconnect(),
            i(),
            o(),
            a(),
            s(),
            l(),
            u(),
            c(),
            d(),
            f(),
            p(),
            h(),
            m.forEach(g=>g())
        }
    }
    function ri(e) {
        return typeof window[e] < "u"
    }
    function ii(e) {
        return Boolean(typeof window[e] < "u" && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
    }
    class Wl {
        constructor(t) {
            this.generateIdFn = t,
            this.iframeIdToRemoteIdMap = new WeakMap,
            this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(t, n, r, i) {
            const o = r || this.getIdToRemoteIdMap(t)
              , a = i || this.getRemoteIdToIdMap(t);
            let s = o.get(n);
            return s || (s = this.generateIdFn(),
            o.set(n, s),
            a.set(s, n)),
            s
        }
        getIds(t, n) {
            const r = this.getIdToRemoteIdMap(t)
              , i = this.getRemoteIdToIdMap(t);
            return n.map(o=>this.getId(t, o, r, i))
        }
        getRemoteId(t, n, r) {
            const i = r || this.getRemoteIdToIdMap(t);
            if (typeof n != "number")
                return n;
            const o = i.get(n);
            return o || -1
        }
        getRemoteIds(t, n) {
            const r = this.getRemoteIdToIdMap(t);
            return n.map(i=>this.getRemoteId(t, i, r))
        }
        reset(t) {
            if (!t) {
                this.iframeIdToRemoteIdMap = new WeakMap,
                this.iframeRemoteIdToIdMap = new WeakMap;
                return
            }
            this.iframeIdToRemoteIdMap.delete(t),
            this.iframeRemoteIdToIdMap.delete(t)
        }
        getIdToRemoteIdMap(t) {
            let n = this.iframeIdToRemoteIdMap.get(t);
            return n || (n = new Map,
            this.iframeIdToRemoteIdMap.set(t, n)),
            n
        }
        getRemoteIdToIdMap(t) {
            let n = this.iframeRemoteIdToIdMap.get(t);
            return n || (n = new Map,
            this.iframeRemoteIdToIdMap.set(t, n)),
            n
        }
    }
    class Jm {
        constructor(t) {
            this.iframes = new WeakMap,
            this.crossOriginIframeMap = new WeakMap,
            this.crossOriginIframeMirror = new Wl(_l),
            this.crossOriginIframeRootIdMap = new WeakMap,
            this.mutationCb = t.mutationCb,
            this.wrappedEmit = t.wrappedEmit,
            this.stylesheetManager = t.stylesheetManager,
            this.recordCrossOriginIframes = t.recordCrossOriginIframes,
            this.crossOriginIframeStyleMirror = new Wl(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
            this.mirror = t.mirror,
            this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(t) {
            this.iframes.set(t, !0),
            t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
        }
        addLoadListener(t) {
            this.loadListener = t
        }
        attachIframe(t, n) {
            var r;
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(t),
                    nextId: null,
                    node: n
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }),
            (r = this.loadListener) === null || r === void 0 || r.call(this, t),
            t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
        }
        handleMessage(t) {
            const n = t;
            if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
                return;
            const i = this.crossOriginIframeMap.get(t.source);
            if (!i)
                return;
            const o = this.transformCrossOriginEvent(i, n.data.event);
            o && this.wrappedEmit(o, n.data.isCheckout)
        }
        transformCrossOriginEvent(t, n) {
            var r;
            switch (n.type) {
            case Y.FullSnapshot:
                {
                    this.crossOriginIframeMirror.reset(t),
                    this.crossOriginIframeStyleMirror.reset(t),
                    this.replaceIdOnNode(n.data.node, t);
                    const i = n.data.node.id;
                    return this.crossOriginIframeRootIdMap.set(t, i),
                    this.patchRootIdOnNode(n.data.node, i),
                    {
                        timestamp: n.timestamp,
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: Z.Mutation,
                            adds: [{
                                parentId: this.mirror.getId(t),
                                nextId: null,
                                node: n.data.node
                            }],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    }
                }
            case Y.Meta:
            case Y.Load:
            case Y.DomContentLoaded:
                return !1;
            case Y.Plugin:
                return n;
            case Y.Custom:
                return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]),
                n;
            case Y.IncrementalSnapshot:
                switch (n.data.source) {
                case Z.Mutation:
                    return n.data.adds.forEach(i=>{
                        this.replaceIds(i, t, ["parentId", "nextId", "previousId"]),
                        this.replaceIdOnNode(i.node, t);
                        const o = this.crossOriginIframeRootIdMap.get(t);
                        o && this.patchRootIdOnNode(i.node, o)
                    }
                    ),
                    n.data.removes.forEach(i=>{
                        this.replaceIds(i, t, ["parentId", "id"])
                    }
                    ),
                    n.data.attributes.forEach(i=>{
                        this.replaceIds(i, t, ["id"])
                    }
                    ),
                    n.data.texts.forEach(i=>{
                        this.replaceIds(i, t, ["id"])
                    }
                    ),
                    n;
                case Z.Drag:
                case Z.TouchMove:
                case Z.MouseMove:
                    return n.data.positions.forEach(i=>{
                        this.replaceIds(i, t, ["id"])
                    }
                    ),
                    n;
                case Z.ViewportResize:
                    return !1;
                case Z.MediaInteraction:
                case Z.MouseInteraction:
                case Z.Scroll:
                case Z.CanvasMutation:
                case Z.Input:
                    return this.replaceIds(n.data, t, ["id"]),
                    n;
                case Z.StyleSheetRule:
                case Z.StyleDeclaration:
                    return this.replaceIds(n.data, t, ["id"]),
                    this.replaceStyleIds(n.data, t, ["styleId"]),
                    n;
                case Z.Font:
                    return n;
                case Z.Selection:
                    return n.data.ranges.forEach(i=>{
                        this.replaceIds(i, t, ["start", "end"])
                    }
                    ),
                    n;
                case Z.AdoptedStyleSheet:
                    return this.replaceIds(n.data, t, ["id"]),
                    this.replaceStyleIds(n.data, t, ["styleIds"]),
                    (r = n.data.styles) === null || r === void 0 || r.forEach(i=>{
                        this.replaceStyleIds(i, t, ["styleId"])
                    }
                    ),
                    n
                }
            }
        }
        replace(t, n, r, i) {
            for (const o of i)
                !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = t.getIds(r, n[o]) : n[o] = t.getId(r, n[o]));
            return n
        }
        replaceIds(t, n, r) {
            return this.replace(this.crossOriginIframeMirror, t, n, r)
        }
        replaceStyleIds(t, n, r) {
            return this.replace(this.crossOriginIframeStyleMirror, t, n, r)
        }
        replaceIdOnNode(t, n) {
            this.replaceIds(t, n, ["id", "rootId"]),
            "childNodes"in t && t.childNodes.forEach(r=>{
                this.replaceIdOnNode(r, n)
            }
            )
        }
        patchRootIdOnNode(t, n) {
            t.type !== ye.Document && !t.rootId && (t.rootId = n),
            "childNodes"in t && t.childNodes.forEach(r=>{
                this.patchRootIdOnNode(r, n)
            }
            )
        }
    }
    class eg {
        constructor(t) {
            this.shadowDoms = new WeakSet,
            this.restoreHandlers = [],
            this.mutationCb = t.mutationCb,
            this.scrollCb = t.scrollCb,
            this.bypassOptions = t.bypassOptions,
            this.mirror = t.mirror,
            this.init()
        }
        init() {
            this.reset(),
            this.patchAttachShadow(Element, document)
        }
        addShadowRoot(t, n) {
            if (!or(t) || this.shadowDoms.has(t))
                return;
            this.shadowDoms.add(t);
            const r = jl(Object.assign(Object.assign({}, this.bypassOptions), {
                doc: n,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }), t);
            this.restoreHandlers.push(()=>r.disconnect()),
            this.restoreHandlers.push(Hl(Object.assign(Object.assign({}, this.bypassOptions), {
                scrollCb: this.scrollCb,
                doc: t,
                mirror: this.mirror
            }))),
            setTimeout(()=>{
                t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
                this.restoreHandlers.push(Gl({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, t))
            }
            , 0)
        }
        observeAttachShadow(t) {
            !t.contentWindow || !t.contentDocument || this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
        }
        patchAttachShadow(t, n) {
            const r = this;
            this.restoreHandlers.push(lr(t.prototype, "attachShadow", function(i) {
                return function(o) {
                    const a = i.call(this, o);
                    return this.shadowRoot && Nl(this) && r.addShadowRoot(this.shadowRoot, n),
                    a
                }
            }))
        }
        reset() {
            this.restoreHandlers.forEach(t=>{
                try {
                    t()
                } catch {}
            }
            ),
            this.restoreHandlers = [],
            this.shadowDoms = new WeakSet
        }
    }
    /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
    function tg(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }
    function ng(e, t, n, r) {
        function i(o) {
            return o instanceof n ? o : new n(function(a) {
                a(o)
            }
            )
        }
        return new (n || (n = Promise))(function(o, a) {
            function s(c) {
                try {
                    u(r.next(c))
                } catch (d) {
                    a(d)
                }
            }
            function l(c) {
                try {
                    u(r.throw(c))
                } catch (d) {
                    a(d)
                }
            }
            function u(c) {
                c.done ? o(c.value) : i(c.value).then(s, l)
            }
            u((r = r.apply(e, t || [])).next())
        }
        )
    }
    for (var Tn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rg = typeof Uint8Array > "u" ? [] : new Uint8Array(256), oi = 0; oi < Tn.length; oi++)
        rg[Tn.charCodeAt(oi)] = oi;
    var ig = function(e) {
        var t = new Uint8Array(e), n, r = t.length, i = "";
        for (n = 0; n < r; n += 3)
            i += Tn[t[n] >> 2],
            i += Tn[(t[n] & 3) << 4 | t[n + 1] >> 4],
            i += Tn[(t[n + 1] & 15) << 2 | t[n + 2] >> 6],
            i += Tn[t[n + 2] & 63];
        return r % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
        i
    };
    const $l = new Map;
    function og(e, t) {
        let n = $l.get(e);
        return n || (n = new Map,
        $l.set(e, n)),
        n.has(t) || n.set(t, []),
        n.get(t)
    }
    const ql = (e,t,n)=>{
        if (!e || !(Yl(e, t) || typeof e == "object"))
            return;
        const r = e.constructor.name
          , i = og(n, r);
        let o = i.indexOf(e);
        return o === -1 && (o = i.length,
        i.push(e)),
        o
    }
    ;
    function ai(e, t, n) {
        if (e instanceof Array)
            return e.map(r=>ai(r, t, n));
        if (e === null)
            return e;
        if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
            return {
                rr_type: e.constructor.name,
                args: [Object.values(e)]
            };
        if (e instanceof ArrayBuffer) {
            const r = e.constructor.name
              , i = ig(e);
            return {
                rr_type: r,
                base64: i
            }
        } else {
            if (e instanceof DataView)
                return {
                    rr_type: e.constructor.name,
                    args: [ai(e.buffer, t, n), e.byteOffset, e.byteLength]
                };
            if (e instanceof HTMLImageElement) {
                const r = e.constructor.name
                  , {src: i} = e;
                return {
                    rr_type: r,
                    src: i
                }
            } else if (e instanceof HTMLCanvasElement) {
                const r = "HTMLImageElement"
                  , i = e.toDataURL();
                return {
                    rr_type: r,
                    src: i
                }
            } else {
                if (e instanceof ImageData)
                    return {
                        rr_type: e.constructor.name,
                        args: [ai(e.data, t, n), e.width, e.height]
                    };
                if (Yl(e, t) || typeof e == "object") {
                    const r = e.constructor.name
                      , i = ql(e, t, n);
                    return {
                        rr_type: r,
                        index: i
                    }
                }
            }
        }
        return e
    }
    const Zl = (e,t,n)=>[...e].map(r=>ai(r, t, n))
      , Yl = (e,t)=>{
        const r = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(i=>typeof t[i] == "function");
        return Boolean(r.find(i=>e instanceof t[i]))
    }
    ;
    function ag(e, t, n, r) {
        const i = []
          , o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
        for (const a of o)
            try {
                if (typeof t.CanvasRenderingContext2D.prototype[a] != "function")
                    continue;
                const s = lr(t.CanvasRenderingContext2D.prototype, a, function(l) {
                    return function(...u) {
                        return Le(this.canvas, n, r, !0) || setTimeout(()=>{
                            const c = Zl([...u], t, this);
                            e(this.canvas, {
                                type: An["2D"],
                                property: a,
                                args: c
                            })
                        }
                        , 0),
                        l.apply(this, u)
                    }
                });
                i.push(s)
            } catch {
                const l = ti(t.CanvasRenderingContext2D.prototype, a, {
                    set(u) {
                        e(this.canvas, {
                            type: An["2D"],
                            property: a,
                            args: [u],
                            setter: !0
                        })
                    }
                });
                i.push(l)
            }
        return ()=>{
            i.forEach(a=>a())
        }
    }
    function Ql(e, t, n) {
        const r = [];
        try {
            const i = lr(e.HTMLCanvasElement.prototype, "getContext", function(o) {
                return function(a, ...s) {
                    return Le(this, t, n, !0) || "__context"in this || (this.__context = a),
                    o.apply(this, [a, ...s])
                }
            });
            r.push(i)
        } catch {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return ()=>{
            r.forEach(i=>i())
        }
    }
    function Xl(e, t, n, r, i, o, a) {
        const s = []
          , l = Object.getOwnPropertyNames(e);
        for (const u of l)
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(u))
                try {
                    if (typeof e[u] != "function")
                        continue;
                    const c = lr(e, u, function(d) {
                        return function(...f) {
                            const p = d.apply(this, f);
                            if (ql(p, a, this),
                            !Le(this.canvas, r, i, !0)) {
                                const h = Zl([...f], a, this)
                                  , m = {
                                    type: t,
                                    property: u,
                                    args: h
                                };
                                n(this.canvas, m)
                            }
                            return p
                        }
                    });
                    s.push(c)
                } catch {
                    const d = ti(e, u, {
                        set(f) {
                            n(this.canvas, {
                                type: t,
                                property: u,
                                args: [f],
                                setter: !0
                            })
                        }
                    });
                    s.push(d)
                }
        return s
    }
    function sg(e, t, n, r, i) {
        const o = [];
        return o.push(...Xl(t.WebGLRenderingContext.prototype, An.WebGL, e, n, r, i, t)),
        typeof t.WebGL2RenderingContext < "u" && o.push(...Xl(t.WebGL2RenderingContext.prototype, An.WebGL2, e, n, r, i, t)),
        ()=>{
            o.forEach(a=>a())
        }
    }
    var Jl = null;
    try {
        var lg = typeof module < "u" && typeof module.require == "function" && module.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
        Jl = lg.Worker
    } catch {}
    function ug(e, t) {
        return Buffer.from(e, "base64").toString(t ? "utf16" : "utf8")
    }
    function cg(e, t, n) {
        var r = t === void 0 ? null : t
          , i = n === void 0 ? !1 : n
          , o = ug(e, i)
          , a = o.indexOf(`
`, 10) + 1
          , s = o.substring(a) + (r ? "//# sourceMappingURL=" + r : "");
        return function(u) {
            return new Jl(s,Object.assign({}, u, {
                eval: !0
            }))
        }
    }
    function dg(e, t) {
        var n = atob(e);
        if (t) {
            for (var r = new Uint8Array(n.length), i = 0, o = n.length; i < o; ++i)
                r[i] = n.charCodeAt(i);
            return String.fromCharCode.apply(null, new Uint16Array(r.buffer))
        }
        return n
    }
    function fg(e, t, n) {
        var r = t === void 0 ? null : t
          , i = n === void 0 ? !1 : n
          , o = dg(e, i)
          , a = o.indexOf(`
`, 10) + 1
          , s = o.substring(a) + (r ? "//# sourceMappingURL=" + r : "")
          , l = new Blob([s],{
            type: "application/javascript"
        });
        return URL.createObjectURL(l)
    }
    function pg(e, t, n) {
        var r;
        return function(o) {
            return r = r || fg(e, t, n),
            new Worker(r,o)
        }
    }
    var hg = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
    function mg() {
        return hg
    }
    function gg(e, t, n) {
        return mg() ? cg(e, t, n) : pg(e, t, n)
    }
    var vg = gg("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=", null, !1);
    class yg {
        constructor(t) {
            this.pendingCanvasMutations = new Map,
            this.rafStamps = {
                latestId: 0,
                invokeId: null
            },
            this.frozen = !1,
            this.locked = !1,
            this.processMutation = (l,u)=>{
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId),
                this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []),
                this.pendingCanvasMutations.get(l).push(u)
            }
            ;
            const {sampling: n="all", win: r, blockClass: i, blockSelector: o, recordCanvas: a, dataURLOptions: s} = t;
            this.mutationCb = t.mutationCb,
            this.mirror = t.mirror,
            a && n === "all" && this.initCanvasMutationObserver(r, i, o),
            a && typeof n == "number" && this.initCanvasFPSObserver(n, r, i, o, {
                dataURLOptions: s
            })
        }
        reset() {
            this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers()
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        initCanvasFPSObserver(t, n, r, i, o) {
            const a = Ql(n, r, i)
              , s = new Map
              , l = new vg;
            l.onmessage = h=>{
                const {id: m} = h.data;
                if (s.set(m, !1),
                !("base64"in h.data))
                    return;
                const {base64: g, type: _, width: v, height: b} = h.data;
                this.mutationCb({
                    id: m,
                    type: An["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, v, b]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: g
                                }],
                                type: _
                            }]
                        }, 0, 0]
                    }]
                })
            }
            ;
            const u = 1e3 / t;
            let c = 0, d;
            const f = ()=>{
                const h = [];
                return n.document.querySelectorAll("canvas").forEach(m=>{
                    Le(m, r, i, !0) || h.push(m)
                }
                ),
                h
            }
              , p = h=>{
                if (c && h - c < u) {
                    d = requestAnimationFrame(p);
                    return
                }
                c = h,
                f().forEach(m=>ng(this, void 0, void 0, function*() {
                    var g;
                    const _ = this.mirror.getId(m);
                    if (s.get(_))
                        return;
                    if (s.set(_, !0),
                    ["webgl", "webgl2"].includes(m.__context)) {
                        const b = m.getContext(m.__context);
                        ((g = b == null ? void 0 : b.getContextAttributes()) === null || g === void 0 ? void 0 : g.preserveDrawingBuffer) === !1 && (b == null || b.clear(b.COLOR_BUFFER_BIT))
                    }
                    const v = yield createImageBitmap(m);
                    l.postMessage({
                        id: _,
                        bitmap: v,
                        width: m.width,
                        height: m.height,
                        dataURLOptions: o.dataURLOptions
                    }, [v])
                })),
                d = requestAnimationFrame(p)
            }
            ;
            d = requestAnimationFrame(p),
            this.resetObservers = ()=>{
                a(),
                cancelAnimationFrame(d)
            }
        }
        initCanvasMutationObserver(t, n, r) {
            this.startRAFTimestamping(),
            this.startPendingCanvasMutationFlusher();
            const i = Ql(t, n, r)
              , o = ag(this.processMutation.bind(this), t, n, r)
              , a = sg(this.processMutation.bind(this), t, n, r, this.mirror);
            this.resetObservers = ()=>{
                i(),
                o(),
                a()
            }
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(()=>this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            const t = n=>{
                this.rafStamps.latestId = n,
                requestAnimationFrame(t)
            }
            ;
            requestAnimationFrame(t)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((t,n)=>{
                const r = this.mirror.getId(n);
                this.flushPendingCanvasMutationFor(n, r)
            }
            ),
            requestAnimationFrame(()=>this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(t, n) {
            if (this.frozen || this.locked)
                return;
            const r = this.pendingCanvasMutations.get(t);
            if (!r || n === -1)
                return;
            const i = r.map(a=>tg(a, ["type"]))
              , {type: o} = r[0];
            this.mutationCb({
                id: n,
                type: o,
                commands: i
            }),
            this.pendingCanvasMutations.delete(t)
        }
    }
    class _g {
        constructor(t) {
            this.trackedLinkElements = new WeakSet,
            this.styleMirror = new Um,
            this.mutationCb = t.mutationCb,
            this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
        }
        attachLinkElement(t, n) {
            "_cssText"in n.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: n.id,
                    attributes: n.attributes
                }]
            }),
            this.trackLinkElement(t)
        }
        trackLinkElement(t) {
            this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t),
            this.trackStylesheetInLinkElement(t))
        }
        adoptStyleSheets(t, n) {
            if (t.length === 0)
                return;
            const r = {
                id: n,
                styleIds: []
            }
              , i = [];
            for (const o of t) {
                let a;
                if (this.styleMirror.has(o))
                    a = this.styleMirror.getId(o);
                else {
                    a = this.styleMirror.add(o);
                    const s = Array.from(o.rules || CSSRule);
                    i.push({
                        styleId: a,
                        rules: s.map((l,u)=>({
                            rule: gl(l),
                            index: u
                        }))
                    })
                }
                r.styleIds.push(a)
            }
            i.length > 0 && (r.styles = i),
            this.adoptedStyleSheetCb(r)
        }
        reset() {
            this.styleMirror.reset(),
            this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(t) {}
    }
    function _e(e) {
        return Object.assign(Object.assign({}, e), {
            timestamp: Date.now()
        })
    }
    let fe, si, Uo, li = !1;
    const Ze = um();
    function Ut(e={}) {
        const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: i="rr-block", blockSelector: o=null, ignoreClass: a="rr-ignore", maskTextClass: s="rr-mask", maskTextSelector: l=null, inlineStylesheet: u=!0, maskAllInputs: c, maskInputOptions: d, slimDOMOptions: f, maskInputFn: p, maskTextFn: h, hooks: m, packFn: g, sampling: _={}, dataURLOptions: v={}, mousemoveWait: b, recordCanvas: y=!1, recordCrossOriginIframes: C=!1, recordAfter: S=e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: I=!1, collectFonts: E=!1, inlineImages: x=!1, plugins: R, keepIframeSrcFn: T=()=>!1, ignoreCSSAttributes: N=new Set([])} = e
          , k = C ? window.parent === window : !0;
        let D = !1;
        if (!k)
            try {
                window.parent.document && (D = !1)
            } catch {
                D = !0
            }
        if (k && !t)
            throw new Error("emit function is required");
        b !== void 0 && _.mousemove === void 0 && (_.mousemove = b),
        Ze.reset();
        const A = c === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : d !== void 0 ? d : {
            password: !0
        }
          , j = f === !0 || f === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: f === "all",
            headMetaDescKeywords: f === "all"
        } : f || {};
        Dm();
        let ee, ue = 0;
        const ce = H=>{
            for (const Ue of R || [])
                Ue.eventProcessor && (H = Ue.eventProcessor(H));
            return g && !D && (H = g(H)),
            H
        }
        ;
        fe = (H,Ue)=>{
            var X;
            if (((X = en[0]) === null || X === void 0 ? void 0 : X.isFrozen()) && H.type !== Y.FullSnapshot && !(H.type === Y.IncrementalSnapshot && H.data.source === Z.Mutation) && en.forEach(we=>we.unfreeze()),
            k)
                t == null || t(ce(H), Ue);
            else if (D) {
                const we = {
                    type: "rrweb",
                    event: ce(H),
                    origin: window.location.origin,
                    isCheckout: Ue
                };
                window.parent.postMessage(we, "*")
            }
            if (H.type === Y.FullSnapshot)
                ee = H,
                ue = 0;
            else if (H.type === Y.IncrementalSnapshot) {
                if (H.data.source === Z.Mutation && H.data.isAttachIframe)
                    return;
                ue++;
                const we = r && ue >= r
                  , mt = n && H.timestamp - ee.timestamp > n;
                (we || mt) && si(!0)
            }
        }
        ;
        const ne = H=>{
            fe(_e({
                type: Y.IncrementalSnapshot,
                data: Object.assign({
                    source: Z.Mutation
                }, H)
            }))
        }
          , ke = H=>fe(_e({
            type: Y.IncrementalSnapshot,
            data: Object.assign({
                source: Z.Scroll
            }, H)
        }))
          , Q = H=>fe(_e({
            type: Y.IncrementalSnapshot,
            data: Object.assign({
                source: Z.CanvasMutation
            }, H)
        }))
          , nt = H=>fe(_e({
            type: Y.IncrementalSnapshot,
            data: Object.assign({
                source: Z.AdoptedStyleSheet
            }, H)
        }))
          , de = new _g({
            mutationCb: ne,
            adoptedStyleSheetCb: nt
        })
          , De = new Jm({
            mirror: Ze,
            mutationCb: ne,
            stylesheetManager: de,
            recordCrossOriginIframes: C,
            wrappedEmit: fe
        });
        for (const H of R || [])
            H.getMirror && H.getMirror({
                nodeMirror: Ze,
                crossOriginIframeMirror: De.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: De.crossOriginIframeStyleMirror
            });
        Uo = new yg({
            recordCanvas: y,
            mutationCb: Q,
            win: window,
            blockClass: i,
            blockSelector: o,
            mirror: Ze,
            sampling: _.canvas,
            dataURLOptions: v
        });
        const ht = new eg({
            mutationCb: ne,
            scrollCb: ke,
            bypassOptions: {
                blockClass: i,
                blockSelector: o,
                maskTextClass: s,
                maskTextSelector: l,
                inlineStylesheet: u,
                maskInputOptions: A,
                dataURLOptions: v,
                maskTextFn: h,
                maskInputFn: p,
                recordCanvas: y,
                inlineImages: x,
                sampling: _,
                slimDOMOptions: j,
                iframeManager: De,
                stylesheetManager: de,
                canvasManager: Uo,
                keepIframeSrcFn: T,
                processedNodeManager: Bl
            },
            mirror: Ze
        });
        si = (H=!1)=>{
            fe(_e({
                type: Y.Meta,
                data: {
                    href: window.location.href,
                    width: xl(),
                    height: kl()
                }
            }), H),
            de.reset(),
            ht.init(),
            en.forEach(X=>X.lock());
            const Ue = Om(document, {
                mirror: Ze,
                blockClass: i,
                blockSelector: o,
                maskTextClass: s,
                maskTextSelector: l,
                inlineStylesheet: u,
                maskAllInputs: A,
                maskTextFn: h,
                slimDOM: j,
                dataURLOptions: v,
                recordCanvas: y,
                inlineImages: x,
                onSerialize: X=>{
                    Rl(X, Ze) && De.addIframe(X),
                    Ll(X, Ze) && de.trackLinkElement(X),
                    Oo(X) && ht.addShadowRoot(X.shadowRoot, document)
                }
                ,
                onIframeLoad: (X,we)=>{
                    De.attachIframe(X, we),
                    ht.observeAttachShadow(X)
                }
                ,
                onStylesheetLoad: (X,we)=>{
                    de.attachLinkElement(X, we)
                }
                ,
                keepIframeSrcFn: T
            });
            if (!Ue)
                return console.warn("Failed to snapshot the document");
            fe(_e({
                type: Y.FullSnapshot,
                data: {
                    node: Ue,
                    initialOffset: Sl(window)
                }
            }), H),
            en.forEach(X=>X.unlock()),
            document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && de.adoptStyleSheets(document.adoptedStyleSheets, Ze.getId(document))
        }
        ;
        try {
            const H = []
              , Ue = we=>{
                var mt;
                return Xm({
                    mutationCb: ne,
                    mousemoveCb: (J,Zn)=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: {
                            source: Zn,
                            positions: J
                        }
                    })),
                    mouseInteractionCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.MouseInteraction
                        }, J)
                    })),
                    scrollCb: ke,
                    viewportResizeCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.ViewportResize
                        }, J)
                    })),
                    inputCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.Input
                        }, J)
                    })),
                    mediaInteractionCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.MediaInteraction
                        }, J)
                    })),
                    styleSheetRuleCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.StyleSheetRule
                        }, J)
                    })),
                    styleDeclarationCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.StyleDeclaration
                        }, J)
                    })),
                    canvasMutationCb: Q,
                    fontCb: J=>fe(_e({
                        type: Y.IncrementalSnapshot,
                        data: Object.assign({
                            source: Z.Font
                        }, J)
                    })),
                    selectionCb: J=>{
                        fe(_e({
                            type: Y.IncrementalSnapshot,
                            data: Object.assign({
                                source: Z.Selection
                            }, J)
                        }))
                    }
                    ,
                    blockClass: i,
                    ignoreClass: a,
                    maskTextClass: s,
                    maskTextSelector: l,
                    maskInputOptions: A,
                    inlineStylesheet: u,
                    sampling: _,
                    recordCanvas: y,
                    inlineImages: x,
                    userTriggeredOnInput: I,
                    collectFonts: E,
                    doc: we,
                    maskInputFn: p,
                    maskTextFn: h,
                    keepIframeSrcFn: T,
                    blockSelector: o,
                    slimDOMOptions: j,
                    dataURLOptions: v,
                    mirror: Ze,
                    iframeManager: De,
                    stylesheetManager: de,
                    shadowDomManager: ht,
                    processedNodeManager: Bl,
                    canvasManager: Uo,
                    ignoreCSSAttributes: N,
                    plugins: ((mt = R == null ? void 0 : R.filter(J=>J.observer)) === null || mt === void 0 ? void 0 : mt.map(J=>({
                        observer: J.observer,
                        options: J.options,
                        callback: Zn=>fe(_e({
                            type: Y.Plugin,
                            data: {
                                plugin: J.name,
                                payload: Zn
                            }
                        }))
                    }))) || []
                }, m)
            }
            ;
            De.addLoadListener(we=>{
                try {
                    H.push(Ue(we.contentDocument))
                } catch (mt) {
                    console.warn(mt)
                }
            }
            );
            const X = ()=>{
                si(),
                H.push(Ue(document)),
                li = !0
            }
            ;
            return document.readyState === "interactive" || document.readyState === "complete" ? X() : (H.push(Re("DOMContentLoaded", ()=>{
                fe(_e({
                    type: Y.DomContentLoaded,
                    data: {}
                })),
                S === "DOMContentLoaded" && X()
            }
            )),
            H.push(Re("load", ()=>{
                fe(_e({
                    type: Y.Load,
                    data: {}
                })),
                S === "load" && X()
            }
            , window))),
            ()=>{
                H.forEach(we=>we()),
                li = !1
            }
        } catch (H) {
            console.warn(H)
        }
    }
    Ut.addCustomEvent = (e,t)=>{
        if (!li)
            throw new Error("please add custom event after start recording");
        fe(_e({
            type: Y.Custom,
            data: {
                tag: e,
                payload: t
            }
        }))
    }
    ,
    Ut.freezePage = ()=>{
        en.forEach(e=>e.freeze())
    }
    ,
    Ut.takeFullSnapshot = e=>{
        if (!li)
            throw new Error("please take full snapshot after start recording");
        si(e)
    }
    ,
    Ut.mirror = Ze;
    var eu = {
        exports: {}
    };
    (function(e, t) {
        (function(n, r) {
            e.exports = r()
        }
        )(K, function() {
            var n = function(o, a) {
                if (a = a || {},
                typeof o != "function")
                    throw new i("fetch must be a function");
                if (typeof a != "object")
                    throw new i("defaults must be an object");
                if (a.retries !== void 0 && !r(a.retries))
                    throw new i("retries must be a positive integer");
                if (a.retryDelay !== void 0 && !r(a.retryDelay) && typeof a.retryDelay != "function")
                    throw new i("retryDelay must be a positive integer or a function returning a positive integer");
                if (a.retryOn !== void 0 && !Array.isArray(a.retryOn) && typeof a.retryOn != "function")
                    throw new i("retryOn property expects an array or function");
                var s = {
                    retries: 3,
                    retryDelay: 1e3,
                    retryOn: []
                };
                return a = Object.assign(s, a),
                function(u, c) {
                    var d = a.retries
                      , f = a.retryDelay
                      , p = a.retryOn;
                    if (c && c.retries !== void 0)
                        if (r(c.retries))
                            d = c.retries;
                        else
                            throw new i("retries must be a positive integer");
                    if (c && c.retryDelay !== void 0)
                        if (r(c.retryDelay) || typeof c.retryDelay == "function")
                            f = c.retryDelay;
                        else
                            throw new i("retryDelay must be a positive integer or a function returning a positive integer");
                    if (c && c.retryOn)
                        if (Array.isArray(c.retryOn) || typeof c.retryOn == "function")
                            p = c.retryOn;
                        else
                            throw new i("retryOn property expects an array or function");
                    return new Promise(function(h, m) {
                        var g = function(v) {
                            var b = typeof Request < "u" && u instanceof Request ? u.clone() : u;
                            o(b, c).then(function(y) {
                                if (Array.isArray(p) && p.indexOf(y.status) === -1)
                                    h(y);
                                else if (typeof p == "function")
                                    try {
                                        return Promise.resolve(p(v, null, y)).then(function(C) {
                                            C ? _(v, null, y) : h(y)
                                        }).catch(m)
                                    } catch (C) {
                                        m(C)
                                    }
                                else
                                    v < d ? _(v, null, y) : h(y)
                            }).catch(function(y) {
                                if (typeof p == "function")
                                    try {
                                        Promise.resolve(p(v, y, null)).then(function(C) {
                                            C ? _(v, y, null) : m(y)
                                        }).catch(function(C) {
                                            m(C)
                                        })
                                    } catch (C) {
                                        m(C)
                                    }
                                else
                                    v < d ? _(v, y, null) : m(y)
                            })
                        };
                        function _(v, b, y) {
                            var C = typeof f == "function" ? f(v, b, y) : f;
                            setTimeout(function() {
                                g(++v)
                            }, C)
                        }
                        g(0)
                    }
                    )
                }
            };
            function r(o) {
                return Number.isInteger(o) && o >= 0
            }
            function i(o) {
                this.name = "ArgumentError",
                this.message = o
            }
            return n
        })
    }
    )(eu);
    const bg = eu.exports;
    class wg {
        constructor(t) {
            Pe(this, "awaitingResolvers", []);
            Pe(this, "activeCount", 0);
            this.capacity = t
        }
        async acquire() {
            if (this.activeCount < this.capacity) {
                this.activeCount++;
                return
            }
            return new Promise(t=>{
                this.awaitingResolvers.push(t)
            }
            )
        }
        release() {
            const t = this.awaitingResolvers.shift();
            t && this.activeCount <= this.capacity ? t() : this.activeCount--
        }
        async execute(t) {
            try {
                return await this.acquire(),
                await t()
            } finally {
                this.release()
            }
        }
        setLimit(t) {
            this.capacity = t
        }
    }
    const tu = new wg(2)
      , Cg = e=>tu.setLimit(e)
      , Eg = bg(fetch)
      , Ig = async(e,t=3)=>tu.execute(async()=>{
        const r = (await Eg(e.uploadUrl, {
            body: e.data,
            method: "PUT",
            retries: t,
            retryDelay: i=>Math.pow(2, i) * 1e3
        })).headers.get("ETag");
        if (!r)
            throw new Error(`Upload response did not include etag for upload ${e.uploadId}, part ${e.chunkIndex}`);
        return r
    }
    )
      , Sg = async({apiUrl: e, surveyId: t, uploadId: n, etags: r, headers: i, responseGroupUuid: o, replayDuration: a})=>{
        var s;
        return at(`${e}/sdk/1/completeSessionReplay`, {
            method: "POST",
            body: JSON.stringify({
                etags: r,
                uploadId: n,
                responseGroupUuid: o,
                surveyId: t,
                replayDuration: a,
                userAgent: (s = window == null ? void 0 : window.navigator) == null ? void 0 : s.userAgent
            }),
            headers: i
        })
    }
    ;
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var $ = function() {
        return $ = Object.assign || function(t) {
            for (var n, r = 1, i = arguments.length; r < i; r++) {
                n = arguments[r];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }
        ,
        $.apply(this, arguments)
    };
    function Po(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, i = t.length, o; r < i; r++)
                (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
                o[r] = t[r]);
        return e.concat(o || Array.prototype.slice.call(t))
    }
    var oe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
      , me = Object.keys
      , xe = Array.isArray;
    typeof Promise < "u" && !oe.Promise && (oe.Promise = Promise);
    function Oe(e, t) {
        return typeof t != "object" || me(t).forEach(function(n) {
            e[n] = t[n]
        }),
        e
    }
    var cr = Object.getPrototypeOf
      , kg = {}.hasOwnProperty;
    function Ve(e, t) {
        return kg.call(e, t)
    }
    function Rn(e, t) {
        typeof t == "function" && (t = t(cr(e))),
        (typeof Reflect > "u" ? me : Reflect.ownKeys)(t).forEach(function(n) {
            yt(e, n, t[n])
        })
    }
    var nu = Object.defineProperty;
    function yt(e, t, n, r) {
        nu(e, t, Oe(n && Ve(n, "get") && typeof n.get == "function" ? {
            get: n.get,
            set: n.set,
            configurable: !0
        } : {
            value: n,
            configurable: !0,
            writable: !0
        }, r))
    }
    function Ln(e) {
        return {
            from: function(t) {
                return e.prototype = Object.create(t.prototype),
                yt(e.prototype, "constructor", e),
                {
                    extend: Rn.bind(null, e.prototype)
                }
            }
        }
    }
    var xg = Object.getOwnPropertyDescriptor;
    function Mo(e, t) {
        var n = xg(e, t), r;
        return n || (r = cr(e)) && Mo(r, t)
    }
    var Ag = [].slice;
    function ui(e, t, n) {
        return Ag.call(e, t, n)
    }
    function ru(e, t) {
        return t(e)
    }
    function dr(e) {
        if (!e)
            throw new Error("Assertion Failed")
    }
    function iu(e) {
        oe.setImmediate ? setImmediate(e) : setTimeout(e, 0)
    }
    function ou(e, t) {
        return e.reduce(function(n, r, i) {
            var o = t(r, i);
            return o && (n[o[0]] = o[1]),
            n
        }, {})
    }
    function Tg(e, t, n) {
        try {
            e.apply(null, n)
        } catch (r) {
            t && t(r)
        }
    }
    function _t(e, t) {
        if (Ve(e, t))
            return e[t];
        if (!t)
            return e;
        if (typeof t != "string") {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
                var o = _t(e, t[r]);
                n.push(o)
            }
            return n
        }
        var a = t.indexOf(".");
        if (a !== -1) {
            var s = e[t.substr(0, a)];
            return s === void 0 ? void 0 : _t(s, t.substr(a + 1))
        }
    }
    function Ye(e, t, n) {
        if (!(!e || t === void 0) && !("isFrozen"in Object && Object.isFrozen(e)))
            if (typeof t != "string" && "length"in t) {
                dr(typeof n != "string" && "length"in n);
                for (var r = 0, i = t.length; r < i; ++r)
                    Ye(e, t[r], n[r])
            } else {
                var o = t.indexOf(".");
                if (o !== -1) {
                    var a = t.substr(0, o)
                      , s = t.substr(o + 1);
                    if (s === "")
                        n === void 0 ? xe(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n;
                    else {
                        var l = e[a];
                        (!l || !Ve(e, a)) && (l = e[a] = {}),
                        Ye(l, s, n)
                    }
                } else
                    n === void 0 ? xe(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
            }
    }
    function Rg(e, t) {
        typeof t == "string" ? Ye(e, t, void 0) : "length"in t && [].map.call(t, function(n) {
            Ye(e, n, void 0)
        })
    }
    function au(e) {
        var t = {};
        for (var n in e)
            Ve(e, n) && (t[n] = e[n]);
        return t
    }
    var Lg = [].concat;
    function su(e) {
        return Lg.apply([], e)
    }
    var lu = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(su([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
            return t + e + "Array"
        })
    }))).filter(function(e) {
        return oe[e]
    })
      , Og = lu.map(function(e) {
        return oe[e]
    });
    ou(lu, function(e) {
        return [e, !0]
    });
    var Pt = null;
    function fr(e) {
        Pt = typeof WeakMap < "u" && new WeakMap;
        var t = Fo(e);
        return Pt = null,
        t
    }
    function Fo(e) {
        if (!e || typeof e != "object")
            return e;
        var t = Pt && Pt.get(e);
        if (t)
            return t;
        if (xe(e)) {
            t = [],
            Pt && Pt.set(e, t);
            for (var n = 0, r = e.length; n < r; ++n)
                t.push(Fo(e[n]))
        } else if (Og.indexOf(e.constructor) >= 0)
            t = e;
        else {
            var i = cr(e);
            t = i === Object.prototype ? {} : Object.create(i),
            Pt && Pt.set(e, t);
            for (var o in e)
                Ve(e, o) && (t[o] = Fo(e[o]))
        }
        return t
    }
    var Ng = {}.toString;
    function Vo(e) {
        return Ng.call(e).slice(8, -1)
    }
    var Bo = typeof Symbol < "u" ? Symbol.iterator : "@@iterator"
      , Dg = typeof Bo == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Bo]) && t.apply(e)
    }
    : function() {
        return null
    }
      , On = {};
    function bt(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
            if (xe(e))
                return e.slice();
            if (this === On && typeof e == "string")
                return [e];
            if (i = Dg(e)) {
                for (n = []; r = i.next(),
                !r.done; )
                    n.push(r.value);
                return n
            }
            if (e == null)
                return [e];
            if (t = e.length,
            typeof t == "number") {
                for (n = new Array(t); t--; )
                    n[t] = e[t];
                return n
            }
            return [e]
        }
        for (t = arguments.length,
        n = new Array(t); t--; )
            n[t] = arguments[t];
        return n
    }
    var jo = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction"
    }
    : function() {
        return !1
    }
      , st = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function uu(e, t) {
        st = e,
        cu = t
    }
    var cu = function() {
        return !0
    }
      , Ug = !new Error("").stack;
    function tn() {
        if (Ug)
            try {
                throw tn.arguments,
                new Error
            } catch (e) {
                return e
            }
        return new Error
    }
    function Ho(e, t) {
        var n = e.stack;
        return n ? (t = t || 0,
        n.indexOf(e.name) === 0 && (t += (e.name + e.message).split(`
`).length),
        n.split(`
`).slice(t).filter(cu).map(function(r) {
            return `
` + r
        }).join("")) : ""
    }
    var Pg = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"]
      , du = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"]
      , zo = Pg.concat(du)
      , Mg = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
    };
    function Nn(e, t) {
        this._e = tn(),
        this.name = e,
        this.message = t
    }
    Ln(Nn).from(Error).extend({
        stack: {
            get: function() {
                return this._stack || (this._stack = this.name + ": " + this.message + Ho(this._e, 2))
            }
        },
        toString: function() {
            return this.name + ": " + this.message
        }
    });
    function fu(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
            return t[n].toString()
        }).filter(function(n, r, i) {
            return i.indexOf(n) === r
        }).join(`
`)
    }
    function ci(e, t, n, r) {
        this._e = tn(),
        this.failures = t,
        this.failedKeys = r,
        this.successCount = n,
        this.message = fu(e, t)
    }
    Ln(ci).from(Nn);
    function pr(e, t) {
        this._e = tn(),
        this.name = "BulkError",
        this.failures = Object.keys(t).map(function(n) {
            return t[n]
        }),
        this.failuresByPos = t,
        this.message = fu(e, t)
    }
    Ln(pr).from(Nn);
    var Ko = zo.reduce(function(e, t) {
        return e[t] = t + "Error",
        e
    }, {})
      , Fg = Nn
      , V = zo.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
            this._e = tn(),
            this.name = n,
            i ? typeof i == "string" ? (this.message = "" + i + (o ? `
 ` + o : ""),
            this.inner = o || null) : typeof i == "object" && (this.message = i.name + " " + i.message,
            this.inner = i) : (this.message = Mg[t] || n,
            this.inner = null)
        }
        return Ln(r).from(Fg),
        e[t] = r,
        e
    }, {});
    V.Syntax = SyntaxError,
    V.Type = TypeError,
    V.Range = RangeError;
    var pu = du.reduce(function(e, t) {
        return e[t + "Error"] = V[t],
        e
    }, {});
    function Vg(e, t) {
        if (!e || e instanceof Nn || e instanceof TypeError || e instanceof SyntaxError || !e.name || !pu[e.name])
            return e;
        var n = new pu[e.name](t || e.message,e);
        return "stack"in e && yt(n, "stack", {
            get: function() {
                return this.inner.stack
            }
        }),
        n
    }
    var di = zo.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = V[t]),
        e
    }, {});
    di.ModifyError = ci,
    di.DexieError = Nn,
    di.BulkError = pr;
    function re() {}
    function hr(e) {
        return e
    }
    function Bg(e, t) {
        return e == null || e === hr ? t : function(n) {
            return t(e(n))
        }
    }
    function nn(e, t) {
        return function() {
            e.apply(this, arguments),
            t.apply(this, arguments)
        }
    }
    function jg(e, t) {
        return e === re ? t : function() {
            var n = e.apply(this, arguments);
            n !== void 0 && (arguments[0] = n);
            var r = this.onsuccess
              , i = this.onerror;
            this.onsuccess = null,
            this.onerror = null;
            var o = t.apply(this, arguments);
            return r && (this.onsuccess = this.onsuccess ? nn(r, this.onsuccess) : r),
            i && (this.onerror = this.onerror ? nn(i, this.onerror) : i),
            o !== void 0 ? o : n
        }
    }
    function Hg(e, t) {
        return e === re ? t : function() {
            e.apply(this, arguments);
            var n = this.onsuccess
              , r = this.onerror;
            this.onsuccess = this.onerror = null,
            t.apply(this, arguments),
            n && (this.onsuccess = this.onsuccess ? nn(n, this.onsuccess) : n),
            r && (this.onerror = this.onerror ? nn(r, this.onerror) : r)
        }
    }
    function zg(e, t) {
        return e === re ? t : function(n) {
            var r = e.apply(this, arguments);
            Oe(n, r);
            var i = this.onsuccess
              , o = this.onerror;
            this.onsuccess = null,
            this.onerror = null;
            var a = t.apply(this, arguments);
            return i && (this.onsuccess = this.onsuccess ? nn(i, this.onsuccess) : i),
            o && (this.onerror = this.onerror ? nn(o, this.onerror) : o),
            r === void 0 ? a === void 0 ? void 0 : a : Oe(r, a)
        }
    }
    function Kg(e, t) {
        return e === re ? t : function() {
            return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments)
        }
    }
    function Go(e, t) {
        return e === re ? t : function() {
            var n = e.apply(this, arguments);
            if (n && typeof n.then == "function") {
                for (var r = this, i = arguments.length, o = new Array(i); i--; )
                    o[i] = arguments[i];
                return n.then(function() {
                    return t.apply(r, o)
                })
            }
            return t.apply(this, arguments)
        }
    }
    var mr = {}
      , Gg = 100
      , Wg = 20
      , hu = 100
      , Wo = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
            return [e, cr(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, cr(t), e]
    }()
      , $o = Wo[0]
      , fi = Wo[1]
      , qo = Wo[2]
      , mu = fi && fi.then
      , pi = $o && $o.constructor
      , Zo = !!qo
      , Yo = !1
      , $g = qo ? function() {
        qo.then(vi)
    }
    : oe.setImmediate ? setImmediate.bind(null, vi) : oe.MutationObserver ? function() {
        var e = document.createElement("div");
        new MutationObserver(function() {
            vi(),
            e = null
        }
        ).observe(e, {
            attributes: !0
        }),
        e.setAttribute("i", "1")
    }
    : function() {
        setTimeout(vi, 0)
    }
      , gr = function(e, t) {
        vr.push([e, t]),
        hi && ($g(),
        hi = !1)
    }
      , Qo = !0
      , hi = !0
      , rn = []
      , mi = []
      , Xo = null
      , Jo = hr
      , Dn = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: Su,
        pgp: !1,
        env: {},
        finalize: function() {
            this.unhandleds.forEach(function(e) {
                try {
                    Su(e[0], e[1])
                } catch {}
            })
        }
    }
      , M = Dn
      , vr = []
      , on = 0
      , gi = [];
    function U(e) {
        if (typeof this != "object")
            throw new TypeError("Promises must be constructed via new");
        this._listeners = [],
        this.onuncatched = re,
        this._lib = !1;
        var t = this._PSD = M;
        if (st && (this._stackHolder = tn(),
        this._prev = null,
        this._numPrev = 0),
        typeof e != "function") {
            if (e !== mr)
                throw new TypeError("Not a function");
            this._state = arguments[1],
            this._value = arguments[2],
            this._state === !1 && ta(this, this._value);
            return
        }
        this._state = null,
        this._value = null,
        ++t.ref,
        vu(this, e)
    }
    var ea = {
        get: function() {
            var e = M
              , t = bi;
            function n(r, i) {
                var o = this
                  , a = !e.global && (e !== M || t !== bi)
                  , s = a && !wt()
                  , l = new U(function(u, c) {
                    na(o, new gu(Ci(r, e, a, s),Ci(i, e, a, s),u,c,e))
                }
                );
                return st && bu(l, this),
                l
            }
            return n.prototype = mr,
            n
        },
        set: function(e) {
            yt(this, "then", e && e.prototype === mr ? ea : {
                get: function() {
                    return e
                },
                set: ea.set
            })
        }
    };
    Rn(U.prototype, {
        then: ea,
        _then: function(e, t) {
            na(this, new gu(null,null,e,t,M))
        },
        catch: function(e) {
            if (arguments.length === 1)
                return this.then(null, e);
            var t = arguments[0]
              , n = arguments[1];
            return typeof t == "function" ? this.then(null, function(r) {
                return r instanceof t ? n(r) : yi(r)
            }) : this.then(null, function(r) {
                return r && r.name === t ? n(r) : yi(r)
            })
        },
        finally: function(e) {
            return this.then(function(t) {
                return e(),
                t
            }, function(t) {
                return e(),
                yi(t)
            })
        },
        stack: {
            get: function() {
                if (this._stack)
                    return this._stack;
                try {
                    Yo = !0;
                    var e = _u(this, [], Wg)
                      , t = e.join(`
From previous: `);
                    return this._state !== null && (this._stack = t),
                    t
                } finally {
                    Yo = !1
                }
            }
        },
        timeout: function(e, t) {
            var n = this;
            return e < 1 / 0 ? new U(function(r, i) {
                var o = setTimeout(function() {
                    return i(new V.Timeout(t))
                }, e);
                n.then(r, i).finally(clearTimeout.bind(null, o))
            }
            ) : this
        }
    }),
    typeof Symbol < "u" && Symbol.toStringTag && yt(U.prototype, Symbol.toStringTag, "Dexie.Promise"),
    Dn.env = wu();
    function gu(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null,
        this.onRejected = typeof t == "function" ? t : null,
        this.resolve = n,
        this.reject = r,
        this.psd = i
    }
    Rn(U, {
        all: function() {
            var e = bt.apply(null, arguments).map(wi);
            return new U(function(t, n) {
                e.length === 0 && t([]);
                var r = e.length;
                e.forEach(function(i, o) {
                    return U.resolve(i).then(function(a) {
                        e[o] = a,
                        --r || t(e)
                    }, n)
                })
            }
            )
        },
        resolve: function(e) {
            if (e instanceof U)
                return e;
            if (e && typeof e.then == "function")
                return new U(function(n, r) {
                    e.then(n, r)
                }
                );
            var t = new U(mr,!0,e);
            return bu(t, Xo),
            t
        },
        reject: yi,
        race: function() {
            var e = bt.apply(null, arguments).map(wi);
            return new U(function(t, n) {
                e.map(function(r) {
                    return U.resolve(r).then(t, n)
                })
            }
            )
        },
        PSD: {
            get: function() {
                return M
            },
            set: function(e) {
                return M = e
            }
        },
        totalEchoes: {
            get: function() {
                return bi
            }
        },
        newPSD: Mt,
        usePSD: Pn,
        scheduler: {
            get: function() {
                return gr
            },
            set: function(e) {
                gr = e
            }
        },
        rejectionMapper: {
            get: function() {
                return Jo
            },
            set: function(e) {
                Jo = e
            }
        },
        follow: function(e, t) {
            return new U(function(n, r) {
                return Mt(function(i, o) {
                    var a = M;
                    a.unhandleds = [],
                    a.onunhandled = o,
                    a.finalize = nn(function() {
                        var s = this;
                        Zg(function() {
                            s.unhandleds.length === 0 ? i() : o(s.unhandleds[0])
                        })
                    }, a.finalize),
                    e()
                }, t, n, r)
            }
            )
        }
    }),
    pi && (pi.allSettled && yt(U, "allSettled", function() {
        var e = bt.apply(null, arguments).map(wi);
        return new U(function(t) {
            e.length === 0 && t([]);
            var n = e.length
              , r = new Array(n);
            e.forEach(function(i, o) {
                return U.resolve(i).then(function(a) {
                    return r[o] = {
                        status: "fulfilled",
                        value: a
                    }
                }, function(a) {
                    return r[o] = {
                        status: "rejected",
                        reason: a
                    }
                }).then(function() {
                    return --n || t(r)
                })
            })
        }
        )
    }),
    pi.any && typeof AggregateError < "u" && yt(U, "any", function() {
        var e = bt.apply(null, arguments).map(wi);
        return new U(function(t, n) {
            e.length === 0 && n(new AggregateError([]));
            var r = e.length
              , i = new Array(r);
            e.forEach(function(o, a) {
                return U.resolve(o).then(function(s) {
                    return t(s)
                }, function(s) {
                    i[a] = s,
                    --r || n(new AggregateError(i))
                })
            })
        }
        )
    }));
    function vu(e, t) {
        try {
            t(function(n) {
                if (e._state === null) {
                    if (n === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    var r = e._lib && yr();
                    n && typeof n.then == "function" ? vu(e, function(i, o) {
                        n instanceof U ? n._then(i, o) : n.then(i, o)
                    }) : (e._state = !0,
                    e._value = n,
                    yu(e)),
                    r && _r()
                }
            }, ta.bind(null, e))
        } catch (n) {
            ta(e, n)
        }
    }
    function ta(e, t) {
        if (mi.push(t),
        e._state === null) {
            var n = e._lib && yr();
            t = Jo(t),
            e._state = !1,
            e._value = t,
            st && t !== null && typeof t == "object" && !t._promise && Tg(function() {
                var r = Mo(t, "stack");
                t._promise = e,
                yt(t, "stack", {
                    get: function() {
                        return Yo ? r && (r.get ? r.get.apply(t) : r.value) : e.stack
                    }
                })
            }),
            Yg(e),
            yu(e),
            n && _r()
        }
    }
    function yu(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n)
            na(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(),
        on === 0 && (++on,
        gr(function() {
            --on === 0 && ra()
        }, []))
    }
    function na(e, t) {
        if (e._state === null) {
            e._listeners.push(t);
            return
        }
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null)
            return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref,
        ++on,
        gr(qg, [n, e, t])
    }
    function qg(e, t, n) {
        try {
            Xo = t;
            var r, i = t._value;
            t._state ? r = e(i) : (mi.length && (mi = []),
            r = e(i),
            mi.indexOf(i) === -1 && Qg(t)),
            n.resolve(r)
        } catch (o) {
            n.reject(o)
        } finally {
            Xo = null,
            --on === 0 && ra(),
            --n.psd.ref || n.psd.finalize()
        }
    }
    function _u(e, t, n) {
        if (t.length === n)
            return t;
        var r = "";
        if (e._state === !1) {
            var i = e._value, o, a;
            i != null ? (o = i.name || "Error",
            a = i.message || i,
            r = Ho(i, 0)) : (o = i,
            a = ""),
            t.push(o + (a ? ": " + a : "") + r)
        }
        return st && (r = Ho(e._stackHolder, 2),
        r && t.indexOf(r) === -1 && t.push(r),
        e._prev && _u(e._prev, t, n)),
        t
    }
    function bu(e, t) {
        var n = t ? t._numPrev + 1 : 0;
        n < Gg && (e._prev = t,
        e._numPrev = n)
    }
    function vi() {
        yr() && _r()
    }
    function yr() {
        var e = Qo;
        return Qo = !1,
        hi = !1,
        e
    }
    function _r() {
        var e, t, n;
        do
            for (; vr.length > 0; )
                for (e = vr,
                vr = [],
                n = e.length,
                t = 0; t < n; ++t) {
                    var r = e[t];
                    r[0].apply(null, r[1])
                }
        while (vr.length > 0);
        Qo = !0,
        hi = !0
    }
    function ra() {
        var e = rn;
        rn = [],
        e.forEach(function(r) {
            r._PSD.onunhandled.call(null, r._value, r)
        });
        for (var t = gi.slice(0), n = t.length; n; )
            t[--n]()
    }
    function Zg(e) {
        function t() {
            e(),
            gi.splice(gi.indexOf(t), 1)
        }
        gi.push(t),
        ++on,
        gr(function() {
            --on === 0 && ra()
        }, [])
    }
    function Yg(e) {
        rn.some(function(t) {
            return t._value === e._value
        }) || rn.push(e)
    }
    function Qg(e) {
        for (var t = rn.length; t; )
            if (rn[--t]._value === e._value) {
                rn.splice(t, 1);
                return
            }
    }
    function yi(e) {
        return new U(mr,!1,e)
    }
    function se(e, t) {
        var n = M;
        return function() {
            var r = yr()
              , i = M;
            try {
                return Ft(n, !0),
                e.apply(this, arguments)
            } catch (o) {
                t && t(o)
            } finally {
                Ft(i, !1),
                r && _r()
            }
        }
    }
    var Ae = {
        awaits: 0,
        echoes: 0,
        id: 0
    }
      , Xg = 0
      , _i = []
      , ia = 0
      , bi = 0
      , Jg = 0;
    function Mt(e, t, n, r) {
        var i = M
          , o = Object.create(i);
        o.parent = i,
        o.ref = 0,
        o.global = !1,
        o.id = ++Jg;
        var a = Dn.env;
        o.env = Zo ? {
            Promise: U,
            PromiseProp: {
                value: U,
                configurable: !0,
                writable: !0
            },
            all: U.all,
            race: U.race,
            allSettled: U.allSettled,
            any: U.any,
            resolve: U.resolve,
            reject: U.reject,
            nthen: Eu(a.nthen, o),
            gthen: Eu(a.gthen, o)
        } : {},
        t && Oe(o, t),
        ++i.ref,
        o.finalize = function() {
            --this.parent.ref || this.parent.finalize()
        }
        ;
        var s = Pn(o, e, n, r);
        return o.ref === 0 && o.finalize(),
        s
    }
    function Un() {
        return Ae.id || (Ae.id = ++Xg),
        ++Ae.awaits,
        Ae.echoes += hu,
        Ae.id
    }
    function wt() {
        return Ae.awaits ? (--Ae.awaits === 0 && (Ae.id = 0),
        Ae.echoes = Ae.awaits * hu,
        !0) : !1
    }
    ("" + mu).indexOf("[native code]") === -1 && (Un = wt = re);
    function wi(e) {
        return Ae.echoes && e && e.constructor === pi ? (Un(),
        e.then(function(t) {
            return wt(),
            t
        }, function(t) {
            return wt(),
            be(t)
        })) : e
    }
    function ev(e) {
        ++bi,
        (!Ae.echoes || --Ae.echoes === 0) && (Ae.echoes = Ae.id = 0),
        _i.push(M),
        Ft(e, !0)
    }
    function tv() {
        var e = _i[_i.length - 1];
        _i.pop(),
        Ft(e, !1)
    }
    function Ft(e, t) {
        var n = M;
        if ((t ? Ae.echoes && (!ia++ || e !== M) : ia && (!--ia || e !== M)) && Cu(t ? ev.bind(null, e) : tv),
        e !== M && (M = e,
        n === Dn && (Dn.env = wu()),
        Zo)) {
            var r = Dn.env.Promise
              , i = e.env;
            fi.then = i.nthen,
            r.prototype.then = i.gthen,
            (n.global || e.global) && (Object.defineProperty(oe, "Promise", i.PromiseProp),
            r.all = i.all,
            r.race = i.race,
            r.resolve = i.resolve,
            r.reject = i.reject,
            i.allSettled && (r.allSettled = i.allSettled),
            i.any && (r.any = i.any))
        }
    }
    function wu() {
        var e = oe.Promise;
        return Zo ? {
            Promise: e,
            PromiseProp: Object.getOwnPropertyDescriptor(oe, "Promise"),
            all: e.all,
            race: e.race,
            allSettled: e.allSettled,
            any: e.any,
            resolve: e.resolve,
            reject: e.reject,
            nthen: fi.then,
            gthen: e.prototype.then
        } : {}
    }
    function Pn(e, t, n, r, i) {
        var o = M;
        try {
            return Ft(e, !0),
            t(n, r, i)
        } finally {
            Ft(o, !1)
        }
    }
    function Cu(e) {
        mu.call($o, e)
    }
    function Ci(e, t, n, r) {
        return typeof e != "function" ? e : function() {
            var i = M;
            n && Un(),
            Ft(t, !0);
            try {
                return e.apply(this, arguments)
            } finally {
                Ft(i, !1),
                r && Cu(wt)
            }
        }
    }
    function Eu(e, t) {
        return function(n, r) {
            return e.call(this, Ci(n, t), Ci(r, t))
        }
    }
    var Iu = "unhandledrejection";
    function Su(e, t) {
        var n;
        try {
            n = t.onuncatched(e)
        } catch {}
        if (n !== !1)
            try {
                var r, i = {
                    promise: t,
                    reason: e
                };
                if (oe.document && document.createEvent ? (r = document.createEvent("Event"),
                r.initEvent(Iu, !0, !0),
                Oe(r, i)) : oe.CustomEvent && (r = new CustomEvent(Iu,{
                    detail: i
                }),
                Oe(r, i)),
                r && oe.dispatchEvent && (dispatchEvent(r),
                !oe.PromiseRejectionEvent && oe.onunhandledrejection))
                    try {
                        oe.onunhandledrejection(r)
                    } catch {}
                st && r && !r.defaultPrevented && console.warn("Unhandled rejection: " + (e.stack || e))
            } catch {}
    }
    var be = U.reject;
    function oa(e, t, n, r) {
        if (!e.idbdb || !e._state.openComplete && !M.letThrough && !e._vip) {
            if (e._state.openComplete)
                return be(new V.DatabaseClosed(e._state.dbOpenError));
            if (!e._state.isBeingOpened) {
                if (!e._options.autoOpen)
                    return be(new V.DatabaseClosed);
                e.open().catch(re)
            }
            return e._state.dbReadyPromise.then(function() {
                return oa(e, t, n, r)
            })
        } else {
            var i = e._createTransaction(t, n, e._dbSchema);
            try {
                i.create(),
                e._state.PR1398_maxLoop = 3
            } catch (o) {
                return o.name === Ko.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
                e._close(),
                e.open().then(function() {
                    return oa(e, t, n, r)
                })) : be(o)
            }
            return i._promise(t, function(o, a) {
                return Mt(function() {
                    return M.trans = i,
                    r(o, a, i)
                })
            }).then(function(o) {
                return i._completion.then(function() {
                    return o
                })
            })
        }
    }
    var ku = "3.2.3"
      , an = String.fromCharCode(65535)
      , aa = -1 / 0
      , Ct = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>."
      , xu = "String expected."
      , br = []
      , Ei = typeof navigator < "u" && /(MSIE|Trident|Edge)/.test(navigator.userAgent)
      , nv = Ei
      , rv = Ei
      , Au = function(e) {
        return !/(dexie\.js|dexie\.min\.js)/.test(e)
    }
      , Ii = "__dbnames"
      , sa = "readonly"
      , la = "readwrite";
    function sn(e, t) {
        return e ? t ? function() {
            return e.apply(this, arguments) && t.apply(this, arguments)
        }
        : e : t
    }
    var Tu = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
    };
    function Si(e) {
        return typeof e == "string" && !/\./.test(e) ? function(t) {
            return t[e] === void 0 && e in t && (t = fr(t),
            delete t[e]),
            t
        }
        : function(t) {
            return t
        }
    }
    var iv = function() {
        function e() {}
        return e.prototype._trans = function(t, n, r) {
            var i = this._tx || M.trans
              , o = this.name;
            function a(l, u, c) {
                if (!c.schema[o])
                    throw new V.NotFound("Table " + o + " not part of transaction");
                return n(c.idbtrans, c)
            }
            var s = yr();
            try {
                return i && i.db === this.db ? i === M.trans ? i._promise(t, a, r) : Mt(function() {
                    return i._promise(t, a, r)
                }, {
                    trans: i,
                    transless: M.transless || M
                }) : oa(this.db, t, [this.name], a)
            } finally {
                s && _r()
            }
        }
        ,
        e.prototype.get = function(t, n) {
            var r = this;
            return t && t.constructor === Object ? this.where(t).first(n) : this._trans("readonly", function(i) {
                return r.core.get({
                    trans: i,
                    key: t
                }).then(function(o) {
                    return r.hook.reading.fire(o)
                })
            }).then(n)
        }
        ,
        e.prototype.where = function(t) {
            if (typeof t == "string")
                return new this.db.WhereClause(this,t);
            if (xe(t))
                return new this.db.WhereClause(this,"[" + t.join("+") + "]");
            var n = me(t);
            if (n.length === 1)
                return this.where(n[0]).equals(t[n[0]]);
            var r = this.schema.indexes.concat(this.schema.primKey).filter(function(c) {
                return c.compound && n.every(function(d) {
                    return c.keyPath.indexOf(d) >= 0
                }) && c.keyPath.every(function(d) {
                    return n.indexOf(d) >= 0
                })
            })[0];
            if (r && this.db._maxKey !== an)
                return this.where(r.name).equals(r.keyPath.map(function(c) {
                    return t[c]
                }));
            !r && st && console.warn("The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a " + ("compound index [" + n.join("+") + "]"));
            var i = this.schema.idxByName
              , o = this.db._deps.indexedDB;
            function a(c, d) {
                try {
                    return o.cmp(c, d) === 0
                } catch {
                    return !1
                }
            }
            var s = n.reduce(function(c, d) {
                var f = c[0]
                  , p = c[1]
                  , h = i[d]
                  , m = t[d];
                return [f || h, f || !h ? sn(p, h && h.multi ? function(g) {
                    var _ = _t(g, d);
                    return xe(_) && _.some(function(v) {
                        return a(m, v)
                    })
                }
                : function(g) {
                    return a(m, _t(g, d))
                }
                ) : p]
            }, [null, null])
              , l = s[0]
              , u = s[1];
            return l ? this.where(l.name).equals(t[l.keyPath]).filter(u) : r ? this.filter(u) : this.where(n).equals("")
        }
        ,
        e.prototype.filter = function(t) {
            return this.toCollection().and(t)
        }
        ,
        e.prototype.count = function(t) {
            return this.toCollection().count(t)
        }
        ,
        e.prototype.offset = function(t) {
            return this.toCollection().offset(t)
        }
        ,
        e.prototype.limit = function(t) {
            return this.toCollection().limit(t)
        }
        ,
        e.prototype.each = function(t) {
            return this.toCollection().each(t)
        }
        ,
        e.prototype.toArray = function(t) {
            return this.toCollection().toArray(t)
        }
        ,
        e.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this))
        }
        ,
        e.prototype.orderBy = function(t) {
            return new this.db.Collection(new this.db.WhereClause(this,xe(t) ? "[" + t.join("+") + "]" : t))
        }
        ,
        e.prototype.reverse = function() {
            return this.toCollection().reverse()
        }
        ,
        e.prototype.mapToClass = function(t) {
            this.schema.mappedClass = t;
            var n = function(r) {
                if (!r)
                    return r;
                var i = Object.create(t.prototype);
                for (var o in r)
                    if (Ve(r, o))
                        try {
                            i[o] = r[o]
                        } catch {}
                return i
            };
            return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
            this.schema.readHook = n,
            this.hook("reading", n),
            t
        }
        ,
        e.prototype.defineClass = function() {
            function t(n) {
                Oe(this, n)
            }
            return this.mapToClass(t)
        }
        ,
        e.prototype.add = function(t, n) {
            var r = this
              , i = this.schema.primKey
              , o = i.auto
              , a = i.keyPath
              , s = t;
            return a && o && (s = Si(a)(t)),
            this._trans("readwrite", function(l) {
                return r.core.mutate({
                    trans: l,
                    type: "add",
                    keys: n != null ? [n] : null,
                    values: [s]
                })
            }).then(function(l) {
                return l.numFailures ? U.reject(l.failures[0]) : l.lastResult
            }).then(function(l) {
                if (a)
                    try {
                        Ye(t, a, l)
                    } catch {}
                return l
            })
        }
        ,
        e.prototype.update = function(t, n) {
            if (typeof t == "object" && !xe(t)) {
                var r = _t(t, this.schema.primKey.keyPath);
                if (r === void 0)
                    return be(new V.InvalidArgument("Given object does not contain its primary key"));
                try {
                    typeof n != "function" ? me(n).forEach(function(i) {
                        Ye(t, i, n[i])
                    }) : n(t, {
                        value: t,
                        primKey: r
                    })
                } catch {}
                return this.where(":id").equals(r).modify(n)
            } else
                return this.where(":id").equals(t).modify(n)
        }
        ,
        e.prototype.put = function(t, n) {
            var r = this
              , i = this.schema.primKey
              , o = i.auto
              , a = i.keyPath
              , s = t;
            return a && o && (s = Si(a)(t)),
            this._trans("readwrite", function(l) {
                return r.core.mutate({
                    trans: l,
                    type: "put",
                    values: [s],
                    keys: n != null ? [n] : null
                })
            }).then(function(l) {
                return l.numFailures ? U.reject(l.failures[0]) : l.lastResult
            }).then(function(l) {
                if (a)
                    try {
                        Ye(t, a, l)
                    } catch {}
                return l
            })
        }
        ,
        e.prototype.delete = function(t) {
            var n = this;
            return this._trans("readwrite", function(r) {
                return n.core.mutate({
                    trans: r,
                    type: "delete",
                    keys: [t]
                })
            }).then(function(r) {
                return r.numFailures ? U.reject(r.failures[0]) : void 0
            })
        }
        ,
        e.prototype.clear = function() {
            var t = this;
            return this._trans("readwrite", function(n) {
                return t.core.mutate({
                    trans: n,
                    type: "deleteRange",
                    range: Tu
                })
            }).then(function(n) {
                return n.numFailures ? U.reject(n.failures[0]) : void 0
            })
        }
        ,
        e.prototype.bulkGet = function(t) {
            var n = this;
            return this._trans("readonly", function(r) {
                return n.core.getMany({
                    keys: t,
                    trans: r
                }).then(function(i) {
                    return i.map(function(o) {
                        return n.hook.reading.fire(o)
                    })
                })
            })
        }
        ,
        e.prototype.bulkAdd = function(t, n, r) {
            var i = this
              , o = Array.isArray(n) ? n : void 0;
            r = r || (o ? void 0 : n);
            var a = r ? r.allKeys : void 0;
            return this._trans("readwrite", function(s) {
                var l = i.schema.primKey
                  , u = l.auto
                  , c = l.keyPath;
                if (c && o)
                    throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== t.length)
                    throw new V.InvalidArgument("Arguments objects and keys must have the same length");
                var d = t.length
                  , f = c && u ? t.map(Si(c)) : t;
                return i.core.mutate({
                    trans: s,
                    type: "add",
                    keys: o,
                    values: f,
                    wantResults: a
                }).then(function(p) {
                    var h = p.numFailures
                      , m = p.results
                      , g = p.lastResult
                      , _ = p.failures
                      , v = a ? m : g;
                    if (h === 0)
                        return v;
                    throw new pr(i.name + ".bulkAdd(): " + h + " of " + d + " operations failed",_)
                })
            })
        }
        ,
        e.prototype.bulkPut = function(t, n, r) {
            var i = this
              , o = Array.isArray(n) ? n : void 0;
            r = r || (o ? void 0 : n);
            var a = r ? r.allKeys : void 0;
            return this._trans("readwrite", function(s) {
                var l = i.schema.primKey
                  , u = l.auto
                  , c = l.keyPath;
                if (c && o)
                    throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (o && o.length !== t.length)
                    throw new V.InvalidArgument("Arguments objects and keys must have the same length");
                var d = t.length
                  , f = c && u ? t.map(Si(c)) : t;
                return i.core.mutate({
                    trans: s,
                    type: "put",
                    keys: o,
                    values: f,
                    wantResults: a
                }).then(function(p) {
                    var h = p.numFailures
                      , m = p.results
                      , g = p.lastResult
                      , _ = p.failures
                      , v = a ? m : g;
                    if (h === 0)
                        return v;
                    throw new pr(i.name + ".bulkPut(): " + h + " of " + d + " operations failed",_)
                })
            })
        }
        ,
        e.prototype.bulkDelete = function(t) {
            var n = this
              , r = t.length;
            return this._trans("readwrite", function(i) {
                return n.core.mutate({
                    trans: i,
                    type: "delete",
                    keys: t
                })
            }).then(function(i) {
                var o = i.numFailures
                  , a = i.lastResult
                  , s = i.failures;
                if (o === 0)
                    return a;
                throw new pr(n.name + ".bulkDelete(): " + o + " of " + r + " operations failed",s)
            })
        }
        ,
        e
    }();
    function wr(e) {
        var t = {}
          , n = function(s, l) {
            if (l) {
                for (var u = arguments.length, c = new Array(u - 1); --u; )
                    c[u - 1] = arguments[u];
                return t[s].subscribe.apply(null, c),
                e
            } else if (typeof s == "string")
                return t[s]
        };
        n.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r)
            o(arguments[r]);
        return n;
        function o(s, l, u) {
            if (typeof s == "object")
                return a(s);
            l || (l = Kg),
            u || (u = re);
            var c = {
                subscribers: [],
                fire: u,
                subscribe: function(d) {
                    c.subscribers.indexOf(d) === -1 && (c.subscribers.push(d),
                    c.fire = l(c.fire, d))
                },
                unsubscribe: function(d) {
                    c.subscribers = c.subscribers.filter(function(f) {
                        return f !== d
                    }),
                    c.fire = c.subscribers.reduce(l, u)
                }
            };
            return t[s] = n[s] = c,
            c
        }
        function a(s) {
            me(s).forEach(function(l) {
                var u = s[l];
                if (xe(u))
                    o(l, s[l][0], s[l][1]);
                else if (u === "asap")
                    var c = o(l, hr, function() {
                        for (var f = arguments.length, p = new Array(f); f--; )
                            p[f] = arguments[f];
                        c.subscribers.forEach(function(h) {
                            iu(function() {
                                h.apply(null, p)
                            })
                        })
                    });
                else
                    throw new V.InvalidArgument("Invalid event config")
            })
        }
    }
    function Cr(e, t) {
        return Ln(t).from({
            prototype: e
        }),
        t
    }
    function ov(e) {
        return Cr(iv.prototype, function(n, r, i) {
            this.db = e,
            this._tx = i,
            this.name = n,
            this.schema = r,
            this.hook = e._allTables[n] ? e._allTables[n].hook : wr(null, {
                creating: [jg, re],
                reading: [Bg, hr],
                updating: [zg, re],
                deleting: [Hg, re]
            })
        })
    }
    function Mn(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
    }
    function ua(e, t) {
        e.filter = sn(e.filter, t)
    }
    function ca(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
            return sn(r(), t())
        }
        : t,
        e.justLimit = n && !r
    }
    function av(e, t) {
        e.isMatch = sn(e.isMatch, t)
    }
    function ki(e, t) {
        if (e.isPrimKey)
            return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n)
            throw new V.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n
    }
    function Ru(e, t, n) {
        var r = ki(e, t.schema);
        return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: e.dir === "prev",
            unique: !!e.unique,
            query: {
                index: r,
                range: e.range
            }
        })
    }
    function xi(e, t, n, r) {
        var i = e.replayFilter ? sn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
            var o = {}
              , a = function(s, l, u) {
                if (!i || i(l, u, function(f) {
                    return l.stop(f)
                }, function(f) {
                    return l.fail(f)
                })) {
                    var c = l.primaryKey
                      , d = "" + c;
                    d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(c)),
                    Ve(o, d) || (o[d] = !0,
                    t(s, l, u))
                }
            };
            return Promise.all([e.or._iterate(a, n), Lu(Ru(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])
        } else
            return Lu(Ru(e, r, n), sn(e.algorithm, i), t, !e.keysOnly && e.valueMapper)
    }
    function Lu(e, t, n, r) {
        var i = r ? function(a, s, l) {
            return n(r(a), s, l)
        }
        : n
          , o = se(i);
        return e.then(function(a) {
            if (a)
                return a.start(function() {
                    var s = function() {
                        return a.continue()
                    };
                    (!t || t(a, function(l) {
                        return s = l
                    }, function(l) {
                        a.stop(l),
                        s = re
                    }, function(l) {
                        a.fail(l),
                        s = re
                    })) && o(a.value, a, function(l) {
                        return s = l
                    }),
                    s()
                })
        })
    }
    function Ne(e, t) {
        try {
            var n = Ou(e)
              , r = Ou(t);
            if (n !== r)
                return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
            switch (n) {
            case "number":
            case "Date":
            case "string":
                return e > t ? 1 : e < t ? -1 : 0;
            case "binary":
                return lv(Nu(e), Nu(t));
            case "Array":
                return sv(e, t)
            }
        } catch {}
        return NaN
    }
    function sv(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o) {
            var a = Ne(e[o], t[o]);
            if (a !== 0)
                return a
        }
        return n === r ? 0 : n < r ? -1 : 1
    }
    function lv(e, t) {
        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o)
            if (e[o] !== t[o])
                return e[o] < t[o] ? -1 : 1;
        return n === r ? 0 : n < r ? -1 : 1
    }
    function Ou(e) {
        var t = typeof e;
        if (t !== "object")
            return t;
        if (ArrayBuffer.isView(e))
            return "binary";
        var n = Vo(e);
        return n === "ArrayBuffer" ? "binary" : n
    }
    function Nu(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : new Uint8Array(e)
    }
    var uv = function() {
        function e() {}
        return e.prototype._read = function(t, n) {
            var r = this._ctx;
            return r.error ? r.table._trans(null, be.bind(null, r.error)) : r.table._trans("readonly", t).then(n)
        }
        ,
        e.prototype._write = function(t) {
            var n = this._ctx;
            return n.error ? n.table._trans(null, be.bind(null, n.error)) : n.table._trans("readwrite", t, "locked")
        }
        ,
        e.prototype._addAlgorithm = function(t) {
            var n = this._ctx;
            n.algorithm = sn(n.algorithm, t)
        }
        ,
        e.prototype._iterate = function(t, n) {
            return xi(this._ctx, t, n, this._ctx.table.core)
        }
        ,
        e.prototype.clone = function(t) {
            var n = Object.create(this.constructor.prototype)
              , r = Object.create(this._ctx);
            return t && Oe(r, t),
            n._ctx = r,
            n
        }
        ,
        e.prototype.raw = function() {
            return this._ctx.valueMapper = null,
            this
        }
        ,
        e.prototype.each = function(t) {
            var n = this._ctx;
            return this._read(function(r) {
                return xi(n, t, r, n.table.core)
            })
        }
        ,
        e.prototype.count = function(t) {
            var n = this;
            return this._read(function(r) {
                var i = n._ctx
                  , o = i.table.core;
                if (Mn(i, !0))
                    return o.count({
                        trans: r,
                        query: {
                            index: ki(i, o.schema),
                            range: i.range
                        }
                    }).then(function(s) {
                        return Math.min(s, i.limit)
                    });
                var a = 0;
                return xi(i, function() {
                    return ++a,
                    !1
                }, r, o).then(function() {
                    return a
                })
            }).then(t)
        }
        ,
        e.prototype.sortBy = function(t, n) {
            var r = t.split(".").reverse()
              , i = r[0]
              , o = r.length - 1;
            function a(u, c) {
                return c ? a(u[r[c]], c - 1) : u[i]
            }
            var s = this._ctx.dir === "next" ? 1 : -1;
            function l(u, c) {
                var d = a(u, o)
                  , f = a(c, o);
                return d < f ? -s : d > f ? s : 0
            }
            return this.toArray(function(u) {
                return u.sort(l)
            }).then(n)
        }
        ,
        e.prototype.toArray = function(t) {
            var n = this;
            return this._read(function(r) {
                var i = n._ctx;
                if (i.dir === "next" && Mn(i, !0) && i.limit > 0) {
                    var o = i.valueMapper
                      , a = ki(i, i.table.core.schema);
                    return i.table.core.query({
                        trans: r,
                        limit: i.limit,
                        values: !0,
                        query: {
                            index: a,
                            range: i.range
                        }
                    }).then(function(l) {
                        var u = l.result;
                        return o ? u.map(o) : u
                    })
                } else {
                    var s = [];
                    return xi(i, function(l) {
                        return s.push(l)
                    }, r, i.table.core).then(function() {
                        return s
                    })
                }
            }, t)
        }
        ,
        e.prototype.offset = function(t) {
            var n = this._ctx;
            return t <= 0 ? this : (n.offset += t,
            Mn(n) ? ca(n, function() {
                var r = t;
                return function(i, o) {
                    return r === 0 ? !0 : r === 1 ? (--r,
                    !1) : (o(function() {
                        i.advance(r),
                        r = 0
                    }),
                    !1)
                }
            }) : ca(n, function() {
                var r = t;
                return function() {
                    return --r < 0
                }
            }),
            this)
        }
        ,
        e.prototype.limit = function(t) {
            return this._ctx.limit = Math.min(this._ctx.limit, t),
            ca(this._ctx, function() {
                var n = t;
                return function(r, i, o) {
                    return --n <= 0 && i(o),
                    n >= 0
                }
            }, !0),
            this
        }
        ,
        e.prototype.until = function(t, n) {
            return ua(this._ctx, function(r, i, o) {
                return t(r.value) ? (i(o),
                n) : !0
            }),
            this
        }
        ,
        e.prototype.first = function(t) {
            return this.limit(1).toArray(function(n) {
                return n[0]
            }).then(t)
        }
        ,
        e.prototype.last = function(t) {
            return this.reverse().first(t)
        }
        ,
        e.prototype.filter = function(t) {
            return ua(this._ctx, function(n) {
                return t(n.value)
            }),
            av(this._ctx, t),
            this
        }
        ,
        e.prototype.and = function(t) {
            return this.filter(t)
        }
        ,
        e.prototype.or = function(t) {
            return new this.db.WhereClause(this._ctx.table,t,this)
        }
        ,
        e.prototype.reverse = function() {
            return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev",
            this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
            this
        }
        ,
        e.prototype.desc = function() {
            return this.reverse()
        }
        ,
        e.prototype.eachKey = function(t) {
            var n = this._ctx;
            return n.keysOnly = !n.isMatch,
            this.each(function(r, i) {
                t(i.key, i)
            })
        }
        ,
        e.prototype.eachUniqueKey = function(t) {
            return this._ctx.unique = "unique",
            this.eachKey(t)
        }
        ,
        e.prototype.eachPrimaryKey = function(t) {
            var n = this._ctx;
            return n.keysOnly = !n.isMatch,
            this.each(function(r, i) {
                t(i.primaryKey, i)
            })
        }
        ,
        e.prototype.keys = function(t) {
            var n = this._ctx;
            n.keysOnly = !n.isMatch;
            var r = [];
            return this.each(function(i, o) {
                r.push(o.key)
            }).then(function() {
                return r
            }).then(t)
        }
        ,
        e.prototype.primaryKeys = function(t) {
            var n = this._ctx;
            if (n.dir === "next" && Mn(n, !0) && n.limit > 0)
                return this._read(function(i) {
                    var o = ki(n, n.table.core.schema);
                    return n.table.core.query({
                        trans: i,
                        values: !1,
                        limit: n.limit,
                        query: {
                            index: o,
                            range: n.range
                        }
                    })
                }).then(function(i) {
                    var o = i.result;
                    return o
                }).then(t);
            n.keysOnly = !n.isMatch;
            var r = [];
            return this.each(function(i, o) {
                r.push(o.primaryKey)
            }).then(function() {
                return r
            }).then(t)
        }
        ,
        e.prototype.uniqueKeys = function(t) {
            return this._ctx.unique = "unique",
            this.keys(t)
        }
        ,
        e.prototype.firstKey = function(t) {
            return this.limit(1).keys(function(n) {
                return n[0]
            }).then(t)
        }
        ,
        e.prototype.lastKey = function(t) {
            return this.reverse().firstKey(t)
        }
        ,
        e.prototype.distinct = function() {
            var t = this._ctx
              , n = t.index && t.table.schema.idxByName[t.index];
            if (!n || !n.multi)
                return this;
            var r = {};
            return ua(this._ctx, function(i) {
                var o = i.primaryKey.toString()
                  , a = Ve(r, o);
                return r[o] = !0,
                !a
            }),
            this
        }
        ,
        e.prototype.modify = function(t) {
            var n = this
              , r = this._ctx;
            return this._write(function(i) {
                var o;
                if (typeof t == "function")
                    o = t;
                else {
                    var a = me(t)
                      , s = a.length;
                    o = function(_) {
                        for (var v = !1, b = 0; b < s; ++b) {
                            var y = a[b]
                              , C = t[y];
                            _t(_, y) !== C && (Ye(_, y, C),
                            v = !0)
                        }
                        return v
                    }
                }
                var l = r.table.core
                  , u = l.schema.primaryKey
                  , c = u.outbound
                  , d = u.extractKey
                  , f = n.db._options.modifyChunkSize || 200
                  , p = []
                  , h = 0
                  , m = []
                  , g = function(_, v) {
                    var b = v.failures
                      , y = v.numFailures;
                    h += _ - y;
                    for (var C = 0, S = me(b); C < S.length; C++) {
                        var I = S[C];
                        p.push(b[I])
                    }
                };
                return n.clone().primaryKeys().then(function(_) {
                    var v = function(b) {
                        var y = Math.min(f, _.length - b);
                        return l.getMany({
                            trans: i,
                            keys: _.slice(b, b + y),
                            cache: "immutable"
                        }).then(function(C) {
                            for (var S = [], I = [], E = c ? [] : null, x = [], R = 0; R < y; ++R) {
                                var T = C[R]
                                  , N = {
                                    value: fr(T),
                                    primKey: _[b + R]
                                };
                                o.call(N, N.value, N) !== !1 && (N.value == null ? x.push(_[b + R]) : !c && Ne(d(T), d(N.value)) !== 0 ? (x.push(_[b + R]),
                                S.push(N.value)) : (I.push(N.value),
                                c && E.push(_[b + R])))
                            }
                            var k = Mn(r) && r.limit === 1 / 0 && (typeof t != "function" || t === da) && {
                                index: r.index,
                                range: r.range
                            };
                            return Promise.resolve(S.length > 0 && l.mutate({
                                trans: i,
                                type: "add",
                                values: S
                            }).then(function(D) {
                                for (var A in D.failures)
                                    x.splice(parseInt(A), 1);
                                g(S.length, D)
                            })).then(function() {
                                return (I.length > 0 || k && typeof t == "object") && l.mutate({
                                    trans: i,
                                    type: "put",
                                    keys: E,
                                    values: I,
                                    criteria: k,
                                    changeSpec: typeof t != "function" && t
                                }).then(function(D) {
                                    return g(I.length, D)
                                })
                            }).then(function() {
                                return (x.length > 0 || k && t === da) && l.mutate({
                                    trans: i,
                                    type: "delete",
                                    keys: x,
                                    criteria: k
                                }).then(function(D) {
                                    return g(x.length, D)
                                })
                            }).then(function() {
                                return _.length > b + y && v(b + f)
                            })
                        })
                    };
                    return v(0).then(function() {
                        if (p.length > 0)
                            throw new ci("Error modifying one or more objects",p,h,m);
                        return _.length
                    })
                })
            })
        }
        ,
        e.prototype.delete = function() {
            var t = this._ctx
              , n = t.range;
            return Mn(t) && (t.isPrimKey && !rv || n.type === 3) ? this._write(function(r) {
                var i = t.table.core.schema.primaryKey
                  , o = n;
                return t.table.core.count({
                    trans: r,
                    query: {
                        index: i,
                        range: o
                    }
                }).then(function(a) {
                    return t.table.core.mutate({
                        trans: r,
                        type: "deleteRange",
                        range: o
                    }).then(function(s) {
                        var l = s.failures;
                        s.lastResult,
                        s.results;
                        var u = s.numFailures;
                        if (u)
                            throw new ci("Could not delete some values",Object.keys(l).map(function(c) {
                                return l[c]
                            }),a - u);
                        return a - u
                    })
                })
            }) : this.modify(da)
        }
        ,
        e
    }()
      , da = function(e, t) {
        return t.value = null
    };
    function cv(e) {
        return Cr(uv.prototype, function(n, r) {
            this.db = e;
            var i = Tu
              , o = null;
            if (r)
                try {
                    i = r()
                } catch (u) {
                    o = u
                }
            var a = n._ctx
              , s = a.table
              , l = s.hook.reading.fire;
            this._ctx = {
                table: s,
                index: a.index,
                isPrimKey: !a.index || s.schema.primKey.keyPath && a.index === s.schema.primKey.name,
                range: i,
                keysOnly: !1,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: !0,
                isMatch: null,
                offset: 0,
                limit: 1 / 0,
                error: o,
                or: a.or,
                valueMapper: l !== hr ? l : null
            }
        })
    }
    function dv(e, t) {
        return e < t ? -1 : e === t ? 0 : 1
    }
    function fv(e, t) {
        return e > t ? -1 : e === t ? 0 : 1
    }
    function Be(e, t, n) {
        var r = e instanceof Uu ? new e.Collection(e) : e;
        return r._ctx.error = n ? new n(t) : new TypeError(t),
        r
    }
    function Fn(e) {
        return new e.Collection(e,function() {
            return Du("")
        }
        ).limit(0)
    }
    function pv(e) {
        return e === "next" ? function(t) {
            return t.toUpperCase()
        }
        : function(t) {
            return t.toLowerCase()
        }
    }
    function hv(e) {
        return e === "next" ? function(t) {
            return t.toLowerCase()
        }
        : function(t) {
            return t.toUpperCase()
        }
    }
    function mv(e, t, n, r, i, o) {
        for (var a = Math.min(e.length, r.length), s = -1, l = 0; l < a; ++l) {
            var u = t[l];
            if (u !== r[l])
                return i(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : i(e[l], r[l]) < 0 ? e.substr(0, l) + r[l] + n.substr(l + 1) : s >= 0 ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
            i(e[l], u) < 0 && (s = l)
        }
        return a < r.length && o === "next" ? e + n.substr(e.length) : a < e.length && o === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1)
    }
    function Ai(e, t, n, r) {
        var i, o, a, s, l, u, c, d = n.length;
        if (!n.every(function(m) {
            return typeof m == "string"
        }))
            return Be(e, xu);
        function f(m) {
            i = pv(m),
            o = hv(m),
            a = m === "next" ? dv : fv;
            var g = n.map(function(_) {
                return {
                    lower: o(_),
                    upper: i(_)
                }
            }).sort(function(_, v) {
                return a(_.lower, v.lower)
            });
            s = g.map(function(_) {
                return _.upper
            }),
            l = g.map(function(_) {
                return _.lower
            }),
            u = m,
            c = m === "next" ? "" : r
        }
        f("next");
        var p = new e.Collection(e,function() {
            return Vt(s[0], l[d - 1] + r)
        }
        );
        p._ondirectionchange = function(m) {
            f(m)
        }
        ;
        var h = 0;
        return p._addAlgorithm(function(m, g, _) {
            var v = m.key;
            if (typeof v != "string")
                return !1;
            var b = o(v);
            if (t(b, l, h))
                return !0;
            for (var y = null, C = h; C < d; ++C) {
                var S = mv(v, b, s[C], l[C], a, u);
                S === null && y === null ? h = C + 1 : (y === null || a(y, S) > 0) && (y = S)
            }
            return g(y !== null ? function() {
                m.continue(y + c)
            }
            : _),
            !1
        }),
        p
    }
    function Vt(e, t, n, r) {
        return {
            type: 2,
            lower: e,
            upper: t,
            lowerOpen: n,
            upperOpen: r
        }
    }
    function Du(e) {
        return {
            type: 1,
            lower: e,
            upper: e
        }
    }
    var Uu = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "Collection", {
            get: function() {
                return this._ctx.table.db.Collection
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.between = function(t, n, r, i) {
            r = r !== !1,
            i = i === !0;
            try {
                return this._cmp(t, n) > 0 || this._cmp(t, n) === 0 && (r || i) && !(r && i) ? Fn(this) : new this.Collection(this,function() {
                    return Vt(t, n, !r, !i)
                }
                )
            } catch {
                return Be(this, Ct)
            }
        }
        ,
        e.prototype.equals = function(t) {
            return t == null ? Be(this, Ct) : new this.Collection(this,function() {
                return Du(t)
            }
            )
        }
        ,
        e.prototype.above = function(t) {
            return t == null ? Be(this, Ct) : new this.Collection(this,function() {
                return Vt(t, void 0, !0)
            }
            )
        }
        ,
        e.prototype.aboveOrEqual = function(t) {
            return t == null ? Be(this, Ct) : new this.Collection(this,function() {
                return Vt(t, void 0, !1)
            }
            )
        }
        ,
        e.prototype.below = function(t) {
            return t == null ? Be(this, Ct) : new this.Collection(this,function() {
                return Vt(void 0, t, !1, !0)
            }
            )
        }
        ,
        e.prototype.belowOrEqual = function(t) {
            return t == null ? Be(this, Ct) : new this.Collection(this,function() {
                return Vt(void 0, t)
            }
            )
        }
        ,
        e.prototype.startsWith = function(t) {
            return typeof t != "string" ? Be(this, xu) : this.between(t, t + an, !0, !0)
        }
        ,
        e.prototype.startsWithIgnoreCase = function(t) {
            return t === "" ? this.startsWith(t) : Ai(this, function(n, r) {
                return n.indexOf(r[0]) === 0
            }, [t], an)
        }
        ,
        e.prototype.equalsIgnoreCase = function(t) {
            return Ai(this, function(n, r) {
                return n === r[0]
            }, [t], "")
        }
        ,
        e.prototype.anyOfIgnoreCase = function() {
            var t = bt.apply(On, arguments);
            return t.length === 0 ? Fn(this) : Ai(this, function(n, r) {
                return r.indexOf(n) !== -1
            }, t, "")
        }
        ,
        e.prototype.startsWithAnyOfIgnoreCase = function() {
            var t = bt.apply(On, arguments);
            return t.length === 0 ? Fn(this) : Ai(this, function(n, r) {
                return r.some(function(i) {
                    return n.indexOf(i) === 0
                })
            }, t, an)
        }
        ,
        e.prototype.anyOf = function() {
            var t = this
              , n = bt.apply(On, arguments)
              , r = this._cmp;
            try {
                n.sort(r)
            } catch {
                return Be(this, Ct)
            }
            if (n.length === 0)
                return Fn(this);
            var i = new this.Collection(this,function() {
                return Vt(n[0], n[n.length - 1])
            }
            );
            i._ondirectionchange = function(a) {
                r = a === "next" ? t._ascending : t._descending,
                n.sort(r)
            }
            ;
            var o = 0;
            return i._addAlgorithm(function(a, s, l) {
                for (var u = a.key; r(u, n[o]) > 0; )
                    if (++o,
                    o === n.length)
                        return s(l),
                        !1;
                return r(u, n[o]) === 0 ? !0 : (s(function() {
                    a.continue(n[o])
                }),
                !1)
            }),
            i
        }
        ,
        e.prototype.notEqual = function(t) {
            return this.inAnyRange([[aa, t], [t, this.db._maxKey]], {
                includeLowers: !1,
                includeUppers: !1
            })
        }
        ,
        e.prototype.noneOf = function() {
            var t = bt.apply(On, arguments);
            if (t.length === 0)
                return new this.Collection(this);
            try {
                t.sort(this._ascending)
            } catch {
                return Be(this, Ct)
            }
            var n = t.reduce(function(r, i) {
                return r ? r.concat([[r[r.length - 1][1], i]]) : [[aa, i]]
            }, null);
            return n.push([t[t.length - 1], this.db._maxKey]),
            this.inAnyRange(n, {
                includeLowers: !1,
                includeUppers: !1
            })
        }
        ,
        e.prototype.inAnyRange = function(t, n) {
            var r = this
              , i = this._cmp
              , o = this._ascending
              , a = this._descending
              , s = this._min
              , l = this._max;
            if (t.length === 0)
                return Fn(this);
            if (!t.every(function(C) {
                return C[0] !== void 0 && C[1] !== void 0 && o(C[0], C[1]) <= 0
            }))
                return Be(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
            var u = !n || n.includeLowers !== !1
              , c = n && n.includeUppers === !0;
            function d(C, S) {
                for (var I = 0, E = C.length; I < E; ++I) {
                    var x = C[I];
                    if (i(S[0], x[1]) < 0 && i(S[1], x[0]) > 0) {
                        x[0] = s(x[0], S[0]),
                        x[1] = l(x[1], S[1]);
                        break
                    }
                }
                return I === E && C.push(S),
                C
            }
            var f = o;
            function p(C, S) {
                return f(C[0], S[0])
            }
            var h;
            try {
                h = t.reduce(d, []),
                h.sort(p)
            } catch {
                return Be(this, Ct)
            }
            var m = 0
              , g = c ? function(C) {
                return o(C, h[m][1]) > 0
            }
            : function(C) {
                return o(C, h[m][1]) >= 0
            }
              , _ = u ? function(C) {
                return a(C, h[m][0]) > 0
            }
            : function(C) {
                return a(C, h[m][0]) >= 0
            }
            ;
            function v(C) {
                return !g(C) && !_(C)
            }
            var b = g
              , y = new this.Collection(this,function() {
                return Vt(h[0][0], h[h.length - 1][1], !u, !c)
            }
            );
            return y._ondirectionchange = function(C) {
                C === "next" ? (b = g,
                f = o) : (b = _,
                f = a),
                h.sort(p)
            }
            ,
            y._addAlgorithm(function(C, S, I) {
                for (var E = C.key; b(E); )
                    if (++m,
                    m === h.length)
                        return S(I),
                        !1;
                return v(E) ? !0 : (r._cmp(E, h[m][1]) === 0 || r._cmp(E, h[m][0]) === 0 || S(function() {
                    f === o ? C.continue(h[m][0]) : C.continue(h[m][1])
                }),
                !1)
            }),
            y
        }
        ,
        e.prototype.startsWithAnyOf = function() {
            var t = bt.apply(On, arguments);
            return t.every(function(n) {
                return typeof n == "string"
            }) ? t.length === 0 ? Fn(this) : this.inAnyRange(t.map(function(n) {
                return [n, n + an]
            })) : Be(this, "startsWithAnyOf() only works with strings")
        }
        ,
        e
    }();
    function gv(e) {
        return Cr(Uu.prototype, function(n, r, i) {
            this.db = e,
            this._ctx = {
                table: n,
                index: r === ":id" ? null : r,
                or: i
            };
            var o = e._deps.indexedDB;
            if (!o)
                throw new V.MissingAPI;
            this._cmp = this._ascending = o.cmp.bind(o),
            this._descending = function(a, s) {
                return o.cmp(s, a)
            }
            ,
            this._max = function(a, s) {
                return o.cmp(a, s) > 0 ? a : s
            }
            ,
            this._min = function(a, s) {
                return o.cmp(a, s) < 0 ? a : s
            }
            ,
            this._IDBKeyRange = e._deps.IDBKeyRange
        })
    }
    function lt(e) {
        return se(function(t) {
            return Er(t),
            e(t.target.error),
            !1
        })
    }
    function Er(e) {
        e.stopPropagation && e.stopPropagation(),
        e.preventDefault && e.preventDefault()
    }
    var Ir = "storagemutated"
      , Bt = "x-storagemutated-1"
      , jt = wr(null, Ir)
      , vv = function() {
        function e() {}
        return e.prototype._lock = function() {
            return dr(!M.global),
            ++this._reculock,
            this._reculock === 1 && !M.global && (M.lockOwnerFor = this),
            this
        }
        ,
        e.prototype._unlock = function() {
            if (dr(!M.global),
            --this._reculock === 0)
                for (M.global || (M.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
                    var t = this._blockedFuncs.shift();
                    try {
                        Pn(t[1], t[0])
                    } catch {}
                }
            return this
        }
        ,
        e.prototype._locked = function() {
            return this._reculock && M.lockOwnerFor !== this
        }
        ,
        e.prototype.create = function(t) {
            var n = this;
            if (!this.mode)
                return this;
            var r = this.db.idbdb
              , i = this.db._state.dbOpenError;
            if (dr(!this.idbtrans),
            !t && !r)
                switch (i && i.name) {
                case "DatabaseClosedError":
                    throw new V.DatabaseClosed(i);
                case "MissingAPIError":
                    throw new V.MissingAPI(i.message,i);
                default:
                    throw new V.OpenFailed(i)
                }
            if (!this.active)
                throw new V.TransactionInactive;
            return dr(this._completion._state === null),
            t = this.idbtrans = t || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
                durability: this.chromeTransactionDurability
            }) : r.transaction(this.storeNames, this.mode, {
                durability: this.chromeTransactionDurability
            })),
            t.onerror = se(function(o) {
                Er(o),
                n._reject(t.error)
            }),
            t.onabort = se(function(o) {
                Er(o),
                n.active && n._reject(new V.Abort(t.error)),
                n.active = !1,
                n.on("abort").fire(o)
            }),
            t.oncomplete = se(function() {
                n.active = !1,
                n._resolve(),
                "mutatedParts"in t && jt.storagemutated.fire(t.mutatedParts)
            }),
            this
        }
        ,
        e.prototype._promise = function(t, n, r) {
            var i = this;
            if (t === "readwrite" && this.mode !== "readwrite")
                return be(new V.ReadOnly("Transaction is readonly"));
            if (!this.active)
                return be(new V.TransactionInactive);
            if (this._locked())
                return new U(function(a, s) {
                    i._blockedFuncs.push([function() {
                        i._promise(t, n, r).then(a, s)
                    }
                    , M])
                }
                );
            if (r)
                return Mt(function() {
                    var a = new U(function(s, l) {
                        i._lock();
                        var u = n(s, l, i);
                        u && u.then && u.then(s, l)
                    }
                    );
                    return a.finally(function() {
                        return i._unlock()
                    }),
                    a._lib = !0,
                    a
                });
            var o = new U(function(a, s) {
                var l = n(a, s, i);
                l && l.then && l.then(a, s)
            }
            );
            return o._lib = !0,
            o
        }
        ,
        e.prototype._root = function() {
            return this.parent ? this.parent._root() : this
        }
        ,
        e.prototype.waitFor = function(t) {
            var n = this._root()
              , r = U.resolve(t);
            if (n._waitingFor)
                n._waitingFor = n._waitingFor.then(function() {
                    return r
                });
            else {
                n._waitingFor = r,
                n._waitingQueue = [];
                var i = n.idbtrans.objectStore(n.storeNames[0]);
                (function a() {
                    for (++n._spinCount; n._waitingQueue.length; )
                        n._waitingQueue.shift()();
                    n._waitingFor && (i.get(-1 / 0).onsuccess = a)
                }
                )()
            }
            var o = n._waitingFor;
            return new U(function(a, s) {
                r.then(function(l) {
                    return n._waitingQueue.push(se(a.bind(null, l)))
                }, function(l) {
                    return n._waitingQueue.push(se(s.bind(null, l)))
                }).finally(function() {
                    n._waitingFor === o && (n._waitingFor = null)
                })
            }
            )
        }
        ,
        e.prototype.abort = function() {
            this.active && (this.active = !1,
            this.idbtrans && this.idbtrans.abort(),
            this._reject(new V.Abort))
        }
        ,
        e.prototype.table = function(t) {
            var n = this._memoizedTables || (this._memoizedTables = {});
            if (Ve(n, t))
                return n[t];
            var r = this.schema[t];
            if (!r)
                throw new V.NotFound("Table " + t + " not part of transaction");
            var i = new this.db.Table(t,r,this);
            return i.core = this.db.core.table(t),
            n[t] = i,
            i
        }
        ,
        e
    }();
    function yv(e) {
        return Cr(vv.prototype, function(n, r, i, o, a) {
            var s = this;
            this.db = e,
            this.mode = n,
            this.storeNames = r,
            this.schema = i,
            this.chromeTransactionDurability = o,
            this.idbtrans = null,
            this.on = wr(this, "complete", "error", "abort"),
            this.parent = a || null,
            this.active = !0,
            this._reculock = 0,
            this._blockedFuncs = [],
            this._resolve = null,
            this._reject = null,
            this._waitingFor = null,
            this._waitingQueue = null,
            this._spinCount = 0,
            this._completion = new U(function(l, u) {
                s._resolve = l,
                s._reject = u
            }
            ),
            this._completion.then(function() {
                s.active = !1,
                s.on.complete.fire()
            }, function(l) {
                var u = s.active;
                return s.active = !1,
                s.on.error.fire(l),
                s.parent ? s.parent._reject(l) : u && s.idbtrans && s.idbtrans.abort(),
                be(l)
            })
        })
    }
    function fa(e, t, n, r, i, o, a) {
        return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: o,
            src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Pu(t)
        }
    }
    function Pu(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
    }
    function Mu(e, t, n) {
        return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: ou(n, function(r) {
                return [r.name, r]
            })
        }
    }
    function _v(e) {
        return e.length === 1 ? e[0] : e
    }
    var Sr = function(e) {
        try {
            return e.only([[]]),
            Sr = function() {
                return [[]]
            }
            ,
            [[]]
        } catch {
            return Sr = function() {
                return an
            }
            ,
            an
        }
    };
    function pa(e) {
        return e == null ? function() {}
        : typeof e == "string" ? bv(e) : function(t) {
            return _t(t, e)
        }
    }
    function bv(e) {
        var t = e.split(".");
        return t.length === 1 ? function(n) {
            return n[e]
        }
        : function(n) {
            return _t(n, e)
        }
    }
    function Fu(e) {
        return [].slice.call(e)
    }
    var wv = 0;
    function kr(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[" + e.join("+") + "]"
    }
    function Cv(e, t, n) {
        function r(d, f) {
            var p = Fu(d.objectStoreNames);
            return {
                schema: {
                    name: d.name,
                    tables: p.map(function(h) {
                        return f.objectStore(h)
                    }).map(function(h) {
                        var m = h.keyPath
                          , g = h.autoIncrement
                          , _ = xe(m)
                          , v = m == null
                          , b = {}
                          , y = {
                            name: h.name,
                            primaryKey: {
                                name: null,
                                isPrimaryKey: !0,
                                outbound: v,
                                compound: _,
                                keyPath: m,
                                autoIncrement: g,
                                unique: !0,
                                extractKey: pa(m)
                            },
                            indexes: Fu(h.indexNames).map(function(C) {
                                return h.index(C)
                            }).map(function(C) {
                                var S = C.name
                                  , I = C.unique
                                  , E = C.multiEntry
                                  , x = C.keyPath
                                  , R = xe(x)
                                  , T = {
                                    name: S,
                                    compound: R,
                                    keyPath: x,
                                    unique: I,
                                    multiEntry: E,
                                    extractKey: pa(x)
                                };
                                return b[kr(x)] = T,
                                T
                            }),
                            getIndexByKeyPath: function(C) {
                                return b[kr(C)]
                            }
                        };
                        return b[":id"] = y.primaryKey,
                        m != null && (b[kr(m)] = y.primaryKey),
                        y
                    })
                },
                hasGetAll: p.length > 0 && "getAll"in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            }
        }
        function i(d) {
            if (d.type === 3)
                return null;
            if (d.type === 4)
                throw new Error("Cannot convert never type to IDBKeyRange");
            var f = d.lower
              , p = d.upper
              , h = d.lowerOpen
              , m = d.upperOpen
              , g = f === void 0 ? p === void 0 ? null : t.upperBound(p, !!m) : p === void 0 ? t.lowerBound(f, !!h) : t.bound(f, p, !!h, !!m);
            return g
        }
        function o(d) {
            var f = d.name;
            function p(g) {
                var _ = g.trans
                  , v = g.type
                  , b = g.keys
                  , y = g.values
                  , C = g.range;
                return new Promise(function(S, I) {
                    S = se(S);
                    var E = _.objectStore(f)
                      , x = E.keyPath == null
                      , R = v === "put" || v === "add";
                    if (!R && v !== "delete" && v !== "deleteRange")
                        throw new Error("Invalid operation type: " + v);
                    var T = (b || y || {
                        length: 1
                    }).length;
                    if (b && y && b.length !== y.length)
                        throw new Error("Given keys array must have same length as given values array.");
                    if (T === 0)
                        return S({
                            numFailures: 0,
                            failures: {},
                            results: [],
                            lastResult: void 0
                        });
                    var N, k = [], D = [], A = 0, j = function(Q) {
                        ++A,
                        Er(Q)
                    };
                    if (v === "deleteRange") {
                        if (C.type === 4)
                            return S({
                                numFailures: A,
                                failures: D,
                                results: [],
                                lastResult: void 0
                            });
                        C.type === 3 ? k.push(N = E.clear()) : k.push(N = E.delete(i(C)))
                    } else {
                        var ee = R ? x ? [y, b] : [y, null] : [b, null]
                          , ue = ee[0]
                          , ce = ee[1];
                        if (R)
                            for (var ne = 0; ne < T; ++ne)
                                k.push(N = ce && ce[ne] !== void 0 ? E[v](ue[ne], ce[ne]) : E[v](ue[ne])),
                                N.onerror = j;
                        else
                            for (var ne = 0; ne < T; ++ne)
                                k.push(N = E[v](ue[ne])),
                                N.onerror = j
                    }
                    var ke = function(Q) {
                        var nt = Q.target.result;
                        k.forEach(function(de, De) {
                            return de.error != null && (D[De] = de.error)
                        }),
                        S({
                            numFailures: A,
                            failures: D,
                            results: v === "delete" ? b : k.map(function(de) {
                                return de.result
                            }),
                            lastResult: nt
                        })
                    };
                    N.onerror = function(Q) {
                        j(Q),
                        ke(Q)
                    }
                    ,
                    N.onsuccess = ke
                }
                )
            }
            function h(g) {
                var _ = g.trans
                  , v = g.values
                  , b = g.query
                  , y = g.reverse
                  , C = g.unique;
                return new Promise(function(S, I) {
                    S = se(S);
                    var E = b.index
                      , x = b.range
                      , R = _.objectStore(f)
                      , T = E.isPrimaryKey ? R : R.index(E.name)
                      , N = y ? C ? "prevunique" : "prev" : C ? "nextunique" : "next"
                      , k = v || !("openKeyCursor"in T) ? T.openCursor(i(x), N) : T.openKeyCursor(i(x), N);
                    k.onerror = lt(I),
                    k.onsuccess = se(function(D) {
                        var A = k.result;
                        if (!A) {
                            S(null);
                            return
                        }
                        A.___id = ++wv,
                        A.done = !1;
                        var j = A.continue.bind(A)
                          , ee = A.continuePrimaryKey;
                        ee && (ee = ee.bind(A));
                        var ue = A.advance.bind(A)
                          , ce = function() {
                            throw new Error("Cursor not started")
                        }
                          , ne = function() {
                            throw new Error("Cursor not stopped")
                        };
                        A.trans = _,
                        A.stop = A.continue = A.continuePrimaryKey = A.advance = ce,
                        A.fail = se(I),
                        A.next = function() {
                            var ke = this
                              , Q = 1;
                            return this.start(function() {
                                return Q-- ? ke.continue() : ke.stop()
                            }).then(function() {
                                return ke
                            })
                        }
                        ,
                        A.start = function(ke) {
                            var Q = new Promise(function(de, De) {
                                de = se(de),
                                k.onerror = lt(De),
                                A.fail = De,
                                A.stop = function(ht) {
                                    A.stop = A.continue = A.continuePrimaryKey = A.advance = ne,
                                    de(ht)
                                }
                            }
                            )
                              , nt = function() {
                                if (k.result)
                                    try {
                                        ke()
                                    } catch (de) {
                                        A.fail(de)
                                    }
                                else
                                    A.done = !0,
                                    A.start = function() {
                                        throw new Error("Cursor behind last entry")
                                    }
                                    ,
                                    A.stop()
                            };
                            return k.onsuccess = se(function(de) {
                                k.onsuccess = nt,
                                nt()
                            }),
                            A.continue = j,
                            A.continuePrimaryKey = ee,
                            A.advance = ue,
                            nt(),
                            Q
                        }
                        ,
                        S(A)
                    }, I)
                }
                )
            }
            function m(g) {
                return function(_) {
                    return new Promise(function(v, b) {
                        v = se(v);
                        var y = _.trans
                          , C = _.values
                          , S = _.limit
                          , I = _.query
                          , E = S === 1 / 0 ? void 0 : S
                          , x = I.index
                          , R = I.range
                          , T = y.objectStore(f)
                          , N = x.isPrimaryKey ? T : T.index(x.name)
                          , k = i(R);
                        if (S === 0)
                            return v({
                                result: []
                            });
                        if (g) {
                            var D = C ? N.getAll(k, E) : N.getAllKeys(k, E);
                            D.onsuccess = function(ue) {
                                return v({
                                    result: ue.target.result
                                })
                            }
                            ,
                            D.onerror = lt(b)
                        } else {
                            var A = 0
                              , j = C || !("openKeyCursor"in N) ? N.openCursor(k) : N.openKeyCursor(k)
                              , ee = [];
                            j.onsuccess = function(ue) {
                                var ce = j.result;
                                if (!ce)
                                    return v({
                                        result: ee
                                    });
                                if (ee.push(C ? ce.value : ce.primaryKey),
                                ++A === S)
                                    return v({
                                        result: ee
                                    });
                                ce.continue()
                            }
                            ,
                            j.onerror = lt(b)
                        }
                    }
                    )
                }
            }
            return {
                name: f,
                schema: d,
                mutate: p,
                getMany: function(g) {
                    var _ = g.trans
                      , v = g.keys;
                    return new Promise(function(b, y) {
                        b = se(b);
                        for (var C = _.objectStore(f), S = v.length, I = new Array(S), E = 0, x = 0, R, T = function(A) {
                            var j = A.target;
                            (I[j._pos] = j.result) != null,
                            ++x === E && b(I)
                        }, N = lt(y), k = 0; k < S; ++k) {
                            var D = v[k];
                            D != null && (R = C.get(v[k]),
                            R._pos = k,
                            R.onsuccess = T,
                            R.onerror = N,
                            ++E)
                        }
                        E === 0 && b(I)
                    }
                    )
                },
                get: function(g) {
                    var _ = g.trans
                      , v = g.key;
                    return new Promise(function(b, y) {
                        b = se(b);
                        var C = _.objectStore(f)
                          , S = C.get(v);
                        S.onsuccess = function(I) {
                            return b(I.target.result)
                        }
                        ,
                        S.onerror = lt(y)
                    }
                    )
                },
                query: m(l),
                openCursor: h,
                count: function(g) {
                    var _ = g.query
                      , v = g.trans
                      , b = _.index
                      , y = _.range;
                    return new Promise(function(C, S) {
                        var I = v.objectStore(f)
                          , E = b.isPrimaryKey ? I : I.index(b.name)
                          , x = i(y)
                          , R = x ? E.count(x) : E.count();
                        R.onsuccess = se(function(T) {
                            return C(T.target.result)
                        }),
                        R.onerror = lt(S)
                    }
                    )
                }
            }
        }
        var a = r(e, n)
          , s = a.schema
          , l = a.hasGetAll
          , u = s.tables.map(function(d) {
            return o(d)
        })
          , c = {};
        return u.forEach(function(d) {
            return c[d.name] = d
        }),
        {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table: function(d) {
                var f = c[d];
                if (!f)
                    throw new Error("Table '" + d + "' not found");
                return c[d]
            },
            MIN_KEY: -1 / 0,
            MAX_KEY: Sr(t),
            schema: s
        }
    }
    function Ev(e, t) {
        return t.reduce(function(n, r) {
            var i = r.create;
            return $($({}, n), i(n))
        }, e)
    }
    function Iv(e, t, n, r) {
        var i = n.IDBKeyRange;
        n.indexedDB;
        var o = Ev(Cv(t, i, r), e.dbcore);
        return {
            dbcore: o
        }
    }
    function ha(e, t) {
        var n = e._novip
          , r = t.db
          , i = Iv(n._middlewares, r, n._deps, t);
        n.core = i.dbcore,
        n.tables.forEach(function(o) {
            var a = o.name;
            n.core.schema.tables.some(function(s) {
                return s.name === a
            }) && (o.core = n.core.table(a),
            n[a]instanceof n.Table && (n[a].core = o.core))
        })
    }
    function Ti(e, t, n, r) {
        var i = e._novip;
        n.forEach(function(o) {
            var a = r[o];
            t.forEach(function(s) {
                var l = Mo(s, o);
                (!l || "value"in l && l.value === void 0) && (s === i.Transaction.prototype || s instanceof i.Transaction ? yt(s, o, {
                    get: function() {
                        return this.table(o)
                    },
                    set: function(u) {
                        nu(this, o, {
                            value: u,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                }) : s[o] = new i.Table(o,a))
            })
        })
    }
    function ma(e, t) {
        var n = e._novip;
        t.forEach(function(r) {
            for (var i in r)
                r[i]instanceof n.Table && delete r[i]
        })
    }
    function Sv(e, t) {
        return e._cfg.version - t._cfg.version
    }
    function kv(e, t, n, r) {
        var i = e._dbSchema
          , o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n),
        o._completion.catch(r);
        var a = o._reject.bind(o)
          , s = M.transless || M;
        Mt(function() {
            M.trans = o,
            M.transless = s,
            t === 0 ? (me(i).forEach(function(l) {
                ga(n, l, i[l].primKey, i[l].indexes)
            }),
            ha(e, n),
            U.follow(function() {
                return e.on.populate.fire(o)
            }).catch(a)) : xv(e, t, o, n).catch(a)
        })
    }
    function xv(e, t, n, r) {
        var i = e._novip
          , o = []
          , a = i._versions
          , s = i._dbSchema = ya(i, i.idbdb, r)
          , l = !1
          , u = a.filter(function(d) {
            return d._cfg.version >= t
        });
        u.forEach(function(d) {
            o.push(function() {
                var f = s
                  , p = d._cfg.dbschema;
                _a(i, f, r),
                _a(i, p, r),
                s = i._dbSchema = p;
                var h = Vu(f, p);
                h.add.forEach(function(y) {
                    ga(r, y[0], y[1].primKey, y[1].indexes)
                }),
                h.change.forEach(function(y) {
                    if (y.recreate)
                        throw new V.Upgrade("Not yet support for changing primary key");
                    var C = r.objectStore(y.name);
                    y.add.forEach(function(S) {
                        return va(C, S)
                    }),
                    y.change.forEach(function(S) {
                        C.deleteIndex(S.name),
                        va(C, S)
                    }),
                    y.del.forEach(function(S) {
                        return C.deleteIndex(S)
                    })
                });
                var m = d._cfg.contentUpgrade;
                if (m && d._cfg.version > t) {
                    ha(i, r),
                    n._memoizedTables = {},
                    l = !0;
                    var g = au(p);
                    h.del.forEach(function(y) {
                        g[y] = f[y]
                    }),
                    ma(i, [i.Transaction.prototype]),
                    Ti(i, [i.Transaction.prototype], me(g), g),
                    n.schema = g;
                    var _ = jo(m);
                    _ && Un();
                    var v, b = U.follow(function() {
                        if (v = m(n),
                        v && _) {
                            var y = wt.bind(null, null);
                            v.then(y, y)
                        }
                    });
                    return v && typeof v.then == "function" ? U.resolve(v) : b.then(function() {
                        return v
                    })
                }
            }),
            o.push(function(f) {
                if (!l || !nv) {
                    var p = d._cfg.dbschema;
                    Tv(p, f)
                }
                ma(i, [i.Transaction.prototype]),
                Ti(i, [i.Transaction.prototype], i._storeNames, i._dbSchema),
                n.schema = i._dbSchema
            })
        });
        function c() {
            return o.length ? U.resolve(o.shift()(n.idbtrans)).then(c) : U.resolve()
        }
        return c().then(function() {
            Av(s, r)
        })
    }
    function Vu(e, t) {
        var n = {
            del: [],
            add: [],
            change: []
        }, r;
        for (r in e)
            t[r] || n.del.push(r);
        for (r in t) {
            var i = e[r]
              , o = t[r];
            if (!i)
                n.add.push([r, o]);
            else {
                var a = {
                    name: r,
                    def: o,
                    recreate: !1,
                    del: [],
                    add: [],
                    change: []
                };
                if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto && !Ei)
                    a.recreate = !0,
                    n.change.push(a);
                else {
                    var s = i.idxByName
                      , l = o.idxByName
                      , u = void 0;
                    for (u in s)
                        l[u] || a.del.push(u);
                    for (u in l) {
                        var c = s[u]
                          , d = l[u];
                        c ? c.src !== d.src && a.change.push(d) : a.add.push(d)
                    }
                    (a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && n.change.push(a)
                }
            }
        }
        return n
    }
    function ga(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? {
            keyPath: n.keyPath,
            autoIncrement: n.auto
        } : {
            autoIncrement: n.auto
        });
        return r.forEach(function(o) {
            return va(i, o)
        }),
        i
    }
    function Av(e, t) {
        me(e).forEach(function(n) {
            t.db.objectStoreNames.contains(n) || ga(t, n, e[n].primKey, e[n].indexes)
        })
    }
    function Tv(e, t) {
        [].slice.call(t.db.objectStoreNames).forEach(function(n) {
            return e[n] == null && t.db.deleteObjectStore(n)
        })
    }
    function va(e, t) {
        e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi
        })
    }
    function ya(e, t, n) {
        var r = {}
          , i = ui(t.objectStoreNames, 0);
        return i.forEach(function(o) {
            for (var a = n.objectStore(o), s = a.keyPath, l = fa(Pu(s), s || "", !1, !1, !!a.autoIncrement, s && typeof s != "string", !0), u = [], c = 0; c < a.indexNames.length; ++c) {
                var d = a.index(a.indexNames[c]);
                s = d.keyPath;
                var f = fa(d.name, s, !!d.unique, !!d.multiEntry, !1, s && typeof s != "string", !1);
                u.push(f)
            }
            r[o] = Mu(o, l, u)
        }),
        r
    }
    function Rv(e, t, n) {
        var r = e._novip;
        r.verno = t.version / 10;
        var i = r._dbSchema = ya(r, t, n);
        r._storeNames = ui(t.objectStoreNames, 0),
        Ti(r, [r._allTables], me(i), i)
    }
    function Lv(e, t) {
        var n = ya(e, e.idbdb, t)
          , r = Vu(n, e._dbSchema);
        return !(r.add.length || r.change.some(function(i) {
            return i.add.length || i.change.length
        }))
    }
    function _a(e, t, n) {
        for (var r = e._novip, i = n.db.objectStoreNames, o = 0; o < i.length; ++o) {
            var a = i[o]
              , s = n.objectStore(a);
            r._hasGetAll = "getAll"in s;
            for (var l = 0; l < s.indexNames.length; ++l) {
                var u = s.indexNames[l]
                  , c = s.index(u).keyPath
                  , d = typeof c == "string" ? c : "[" + ui(c).join("+") + "]";
                if (t[a]) {
                    var f = t[a].idxByName[d];
                    f && (f.name = u,
                    delete t[a].idxByName[d],
                    t[a].idxByName[u] = f)
                }
            }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && oe.WorkerGlobalScope && oe instanceof oe.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (r._hasGetAll = !1)
    }
    function Ov(e) {
        return e.split(",").map(function(t, n) {
            t = t.trim();
            var r = t.replace(/([&*]|\+\+)/g, "")
              , i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
            return fa(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), xe(i), n === 0)
        })
    }
    var Nv = function() {
        function e() {}
        return e.prototype._parseStoresSpec = function(t, n) {
            me(t).forEach(function(r) {
                if (t[r] !== null) {
                    var i = Ov(t[r])
                      , o = i.shift();
                    if (o.multi)
                        throw new V.Schema("Primary key cannot be multi-valued");
                    i.forEach(function(a) {
                        if (a.auto)
                            throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!a.keyPath)
                            throw new V.Schema("Index must have a name and cannot be an empty string")
                    }),
                    n[r] = Mu(r, o, i)
                }
            })
        }
        ,
        e.prototype.stores = function(t) {
            var n = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? Oe(this._cfg.storesSource, t) : t;
            var r = n._versions
              , i = {}
              , o = {};
            return r.forEach(function(a) {
                Oe(i, a._cfg.storesSource),
                o = a._cfg.dbschema = {},
                a._parseStoresSpec(i, o)
            }),
            n._dbSchema = o,
            ma(n, [n._allTables, n, n.Transaction.prototype]),
            Ti(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], me(o), o),
            n._storeNames = me(o),
            this
        }
        ,
        e.prototype.upgrade = function(t) {
            return this._cfg.contentUpgrade = Go(this._cfg.contentUpgrade || re, t),
            this
        }
        ,
        e
    }();
    function Dv(e) {
        return Cr(Nv.prototype, function(n) {
            this.db = e,
            this._cfg = {
                version: n,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }
        })
    }
    function ba(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Aa(Ii,{
            addons: [],
            indexedDB: e,
            IDBKeyRange: t
        }),
        n.version(1).stores({
            dbnames: "name"
        })),
        n.table("dbnames")
    }
    function wa(e) {
        return e && typeof e.databases == "function"
    }
    function Uv(e) {
        var t = e.indexedDB
          , n = e.IDBKeyRange;
        return wa(t) ? Promise.resolve(t.databases()).then(function(r) {
            return r.map(function(i) {
                return i.name
            }).filter(function(i) {
                return i !== Ii
            })
        }) : ba(t, n).toCollection().primaryKeys()
    }
    function Pv(e, t) {
        var n = e.indexedDB
          , r = e.IDBKeyRange;
        !wa(n) && t !== Ii && ba(n, r).put({
            name: t
        }).catch(re)
    }
    function Mv(e, t) {
        var n = e.indexedDB
          , r = e.IDBKeyRange;
        !wa(n) && t !== Ii && ba(n, r).delete(t).catch(re)
    }
    function Ca(e) {
        return Mt(function() {
            return M.letThrough = !0,
            e()
        })
    }
    function Fv() {
        var e = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!e || !indexedDB.databases)
            return Promise.resolve();
        var t;
        return new Promise(function(n) {
            var r = function() {
                return indexedDB.databases().finally(n)
            };
            t = setInterval(r, 100),
            r()
        }
        ).finally(function() {
            return clearInterval(t)
        })
    }
    function Vv(e) {
        var t = e._state
          , n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb)
            return t.dbReadyPromise.then(function() {
                return t.dbOpenError ? be(t.dbOpenError) : e
            });
        st && (t.openCanceller._stackHolder = tn()),
        t.isBeingOpened = !0,
        t.dbOpenError = null,
        t.openComplete = !1;
        var r = t.openCanceller;
        function i() {
            if (t.openCanceller !== r)
                throw new V.DatabaseClosed("db.open() was cancelled")
        }
        var o = t.dbReadyResolve
          , a = null
          , s = !1;
        return U.race([r, (typeof navigator > "u" ? U.resolve() : Fv()).then(function() {
            return new U(function(l, u) {
                if (i(),
                !n)
                    throw new V.MissingAPI;
                var c = e.name
                  , d = t.autoSchema ? n.open(c) : n.open(c, Math.round(e.verno * 10));
                if (!d)
                    throw new V.MissingAPI;
                d.onerror = lt(u),
                d.onblocked = se(e._fireOnBlocked),
                d.onupgradeneeded = se(function(f) {
                    if (a = d.transaction,
                    t.autoSchema && !e._options.allowEmptyDB) {
                        d.onerror = Er,
                        a.abort(),
                        d.result.close();
                        var p = n.deleteDatabase(c);
                        p.onsuccess = p.onerror = se(function() {
                            u(new V.NoSuchDatabase("Database " + c + " doesnt exist"))
                        })
                    } else {
                        a.onerror = lt(u);
                        var h = f.oldVersion > Math.pow(2, 62) ? 0 : f.oldVersion;
                        s = h < 1,
                        e._novip.idbdb = d.result,
                        kv(e, h / 10, a, u)
                    }
                }, u),
                d.onsuccess = se(function() {
                    a = null;
                    var f = e._novip.idbdb = d.result
                      , p = ui(f.objectStoreNames);
                    if (p.length > 0)
                        try {
                            var h = f.transaction(_v(p), "readonly");
                            t.autoSchema ? Rv(e, f, h) : (_a(e, e._dbSchema, h),
                            Lv(e, h) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),
                            ha(e, h)
                        } catch {}
                    br.push(e),
                    f.onversionchange = se(function(m) {
                        t.vcFired = !0,
                        e.on("versionchange").fire(m)
                    }),
                    f.onclose = se(function(m) {
                        e.on("close").fire(m)
                    }),
                    s && Pv(e._deps, c),
                    l()
                }, u)
            }
            )
        })]).then(function() {
            return i(),
            t.onReadyBeingFired = [],
            U.resolve(Ca(function() {
                return e.on.ready.fire(e.vip)
            })).then(function l() {
                if (t.onReadyBeingFired.length > 0) {
                    var u = t.onReadyBeingFired.reduce(Go, re);
                    return t.onReadyBeingFired = [],
                    U.resolve(Ca(function() {
                        return u(e.vip)
                    })).then(l)
                }
            })
        }).finally(function() {
            t.onReadyBeingFired = null,
            t.isBeingOpened = !1
        }).then(function() {
            return e
        }).catch(function(l) {
            t.dbOpenError = l;
            try {
                a && a.abort()
            } catch {}
            return r === t.openCanceller && e._close(),
            be(l)
        }).finally(function() {
            t.openComplete = !0,
            o()
        })
    }
    function Ea(e) {
        var t = function(a) {
            return e.next(a)
        }
          , n = function(a) {
            return e.throw(a)
        }
          , r = o(t)
          , i = o(n);
        function o(a) {
            return function(s) {
                var l = a(s)
                  , u = l.value;
                return l.done ? u : !u || typeof u.then != "function" ? xe(u) ? Promise.all(u).then(r, i) : r(u) : u.then(r, i)
            }
        }
        return o(t)()
    }
    function Bv(e, t, n) {
        var r = arguments.length;
        if (r < 2)
            throw new V.InvalidArgument("Too few arguments");
        for (var i = new Array(r - 1); --r; )
            i[r - 1] = arguments[r];
        n = i.pop();
        var o = su(i);
        return [e, o, n]
    }
    function Bu(e, t, n, r, i) {
        return U.resolve().then(function() {
            var o = M.transless || M
              , a = e._createTransaction(t, n, e._dbSchema, r)
              , s = {
                trans: a,
                transless: o
            };
            if (r)
                a.idbtrans = r.idbtrans;
            else
                try {
                    a.create(),
                    e._state.PR1398_maxLoop = 3
                } catch (d) {
                    return d.name === Ko.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
                    e._close(),
                    e.open().then(function() {
                        return Bu(e, t, n, null, i)
                    })) : be(d)
                }
            var l = jo(i);
            l && Un();
            var u, c = U.follow(function() {
                if (u = i.call(a, a),
                u)
                    if (l) {
                        var d = wt.bind(null, null);
                        u.then(d, d)
                    } else
                        typeof u.next == "function" && typeof u.throw == "function" && (u = Ea(u))
            }, s);
            return (u && typeof u.then == "function" ? U.resolve(u).then(function(d) {
                return a.active ? d : be(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
            }) : c.then(function() {
                return u
            })).then(function(d) {
                return r && a._resolve(),
                a._completion.then(function() {
                    return d
                })
            }).catch(function(d) {
                return a._reject(d),
                be(d)
            })
        })
    }
    function Ri(e, t, n) {
        for (var r = xe(e) ? e.slice() : [e], i = 0; i < n; ++i)
            r.push(t);
        return r
    }
    function jv(e) {
        return $($({}, e), {
            table: function(t) {
                var n = e.table(t)
                  , r = n.schema
                  , i = {}
                  , o = [];
                function a(m, g, _) {
                    var v = kr(m)
                      , b = i[v] = i[v] || []
                      , y = m == null ? 0 : typeof m == "string" ? 1 : m.length
                      , C = g > 0
                      , S = $($({}, _), {
                        isVirtual: C,
                        keyTail: g,
                        keyLength: y,
                        extractKey: pa(m),
                        unique: !C && _.unique
                    });
                    if (b.push(S),
                    S.isPrimaryKey || o.push(S),
                    y > 1) {
                        var I = y === 2 ? m[0] : m.slice(0, y - 1);
                        a(I, g + 1, _)
                    }
                    return b.sort(function(E, x) {
                        return E.keyTail - x.keyTail
                    }),
                    S
                }
                var s = a(r.primaryKey.keyPath, 0, r.primaryKey);
                i[":id"] = [s];
                for (var l = 0, u = r.indexes; l < u.length; l++) {
                    var c = u[l];
                    a(c.keyPath, 0, c)
                }
                function d(m) {
                    var g = i[kr(m)];
                    return g && g[0]
                }
                function f(m, g) {
                    return {
                        type: m.type === 1 ? 2 : m.type,
                        lower: Ri(m.lower, m.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g),
                        lowerOpen: !0,
                        upper: Ri(m.upper, m.upperOpen ? e.MIN_KEY : e.MAX_KEY, g),
                        upperOpen: !0
                    }
                }
                function p(m) {
                    var g = m.query.index;
                    return g.isVirtual ? $($({}, m), {
                        query: {
                            index: g,
                            range: f(m.query.range, g.keyTail)
                        }
                    }) : m
                }
                var h = $($({}, n), {
                    schema: $($({}, r), {
                        primaryKey: s,
                        indexes: o,
                        getIndexByKeyPath: d
                    }),
                    count: function(m) {
                        return n.count(p(m))
                    },
                    query: function(m) {
                        return n.query(p(m))
                    },
                    openCursor: function(m) {
                        var g = m.query.index
                          , _ = g.keyTail
                          , v = g.isVirtual
                          , b = g.keyLength;
                        if (!v)
                            return n.openCursor(m);
                        function y(C) {
                            function S(E) {
                                E != null ? C.continue(Ri(E, m.reverse ? e.MAX_KEY : e.MIN_KEY, _)) : m.unique ? C.continue(C.key.slice(0, b).concat(m.reverse ? e.MIN_KEY : e.MAX_KEY, _)) : C.continue()
                            }
                            var I = Object.create(C, {
                                continue: {
                                    value: S
                                },
                                continuePrimaryKey: {
                                    value: function(E, x) {
                                        C.continuePrimaryKey(Ri(E, e.MAX_KEY, _), x)
                                    }
                                },
                                primaryKey: {
                                    get: function() {
                                        return C.primaryKey
                                    }
                                },
                                key: {
                                    get: function() {
                                        var E = C.key;
                                        return b === 1 ? E[0] : E.slice(0, b)
                                    }
                                },
                                value: {
                                    get: function() {
                                        return C.value
                                    }
                                }
                            });
                            return I
                        }
                        return n.openCursor(p(m)).then(function(C) {
                            return C && y(C)
                        })
                    }
                });
                return h
            }
        })
    }
    var Hv = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: jv
    };
    function Ia(e, t, n, r) {
        return n = n || {},
        r = r || "",
        me(e).forEach(function(i) {
            if (!Ve(t, i))
                n[r + i] = void 0;
            else {
                var o = e[i]
                  , a = t[i];
                if (typeof o == "object" && typeof a == "object" && o && a) {
                    var s = Vo(o)
                      , l = Vo(a);
                    s !== l ? n[r + i] = t[i] : s === "Object" ? Ia(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i])
                } else
                    o !== a && (n[r + i] = t[i])
            }
        }),
        me(t).forEach(function(i) {
            Ve(e, i) || (n[r + i] = t[i])
        }),
        n
    }
    function zv(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey)
    }
    var Kv = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
            return $($({}, e), {
                table: function(t) {
                    var n = e.table(t)
                      , r = n.schema.primaryKey
                      , i = $($({}, n), {
                        mutate: function(o) {
                            var a = M.trans
                              , s = a.table(t).hook
                              , l = s.deleting
                              , u = s.creating
                              , c = s.updating;
                            switch (o.type) {
                            case "add":
                                if (u.fire === re)
                                    break;
                                return a._promise("readwrite", function() {
                                    return d(o)
                                }, !0);
                            case "put":
                                if (u.fire === re && c.fire === re)
                                    break;
                                return a._promise("readwrite", function() {
                                    return d(o)
                                }, !0);
                            case "delete":
                                if (l.fire === re)
                                    break;
                                return a._promise("readwrite", function() {
                                    return d(o)
                                }, !0);
                            case "deleteRange":
                                if (l.fire === re)
                                    break;
                                return a._promise("readwrite", function() {
                                    return f(o)
                                }, !0)
                            }
                            return n.mutate(o);
                            function d(h) {
                                var m = M.trans
                                  , g = h.keys || zv(r, h);
                                if (!g)
                                    throw new Error("Keys missing");
                                return h = h.type === "add" || h.type === "put" ? $($({}, h), {
                                    keys: g
                                }) : $({}, h),
                                h.type !== "delete" && (h.values = Po([], h.values, !0)),
                                h.keys && (h.keys = Po([], h.keys, !0)),
                                Gv(n, h, g).then(function(_) {
                                    var v = g.map(function(b, y) {
                                        var C = _[y]
                                          , S = {
                                            onerror: null,
                                            onsuccess: null
                                        };
                                        if (h.type === "delete")
                                            l.fire.call(S, b, C, m);
                                        else if (h.type === "add" || C === void 0) {
                                            var I = u.fire.call(S, b, h.values[y], m);
                                            b == null && I != null && (b = I,
                                            h.keys[y] = b,
                                            r.outbound || Ye(h.values[y], r.keyPath, b))
                                        } else {
                                            var E = Ia(C, h.values[y])
                                              , x = c.fire.call(S, E, b, C, m);
                                            if (x) {
                                                var R = h.values[y];
                                                Object.keys(x).forEach(function(T) {
                                                    Ve(R, T) ? R[T] = x[T] : Ye(R, T, x[T])
                                                })
                                            }
                                        }
                                        return S
                                    });
                                    return n.mutate(h).then(function(b) {
                                        for (var y = b.failures, C = b.results, S = b.numFailures, I = b.lastResult, E = 0; E < g.length; ++E) {
                                            var x = C ? C[E] : g[E]
                                              , R = v[E];
                                            x == null ? R.onerror && R.onerror(y[E]) : R.onsuccess && R.onsuccess(h.type === "put" && _[E] ? h.values[E] : x)
                                        }
                                        return {
                                            failures: y,
                                            results: C,
                                            numFailures: S,
                                            lastResult: I
                                        }
                                    }).catch(function(b) {
                                        return v.forEach(function(y) {
                                            return y.onerror && y.onerror(b)
                                        }),
                                        Promise.reject(b)
                                    })
                                })
                            }
                            function f(h) {
                                return p(h.trans, h.range, 1e4)
                            }
                            function p(h, m, g) {
                                return n.query({
                                    trans: h,
                                    values: !1,
                                    query: {
                                        index: r,
                                        range: m
                                    },
                                    limit: g
                                }).then(function(_) {
                                    var v = _.result;
                                    return d({
                                        type: "delete",
                                        keys: v,
                                        trans: h
                                    }).then(function(b) {
                                        return b.numFailures > 0 ? Promise.reject(b.failures[0]) : v.length < g ? {
                                            failures: [],
                                            numFailures: 0,
                                            lastResult: void 0
                                        } : p(h, $($({}, m), {
                                            lower: v[v.length - 1],
                                            lowerOpen: !0
                                        }), g)
                                    })
                                })
                            }
                        }
                    });
                    return i
                }
            })
        }
    };
    function Gv(e, t, n) {
        return t.type === "add" ? Promise.resolve([]) : e.getMany({
            trans: t.trans,
            keys: n,
            cache: "immutable"
        })
    }
    function ju(e, t, n) {
        try {
            if (!t || t.keys.length < e.length)
                return null;
            for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i)
                Ne(t.keys[i], e[o]) === 0 && (r.push(n ? fr(t.values[i]) : t.values[i]),
                ++o);
            return r.length === e.length ? r : null
        } catch {
            return null
        }
    }
    var Wv = {
        stack: "dbcore",
        level: -1,
        create: function(e) {
            return {
                table: function(t) {
                    var n = e.table(t);
                    return $($({}, n), {
                        getMany: function(r) {
                            if (!r.cache)
                                return n.getMany(r);
                            var i = ju(r.keys, r.trans._cache, r.cache === "clone");
                            return i ? U.resolve(i) : n.getMany(r).then(function(o) {
                                return r.trans._cache = {
                                    keys: r.keys,
                                    values: r.cache === "clone" ? fr(o) : o
                                },
                                o
                            })
                        },
                        mutate: function(r) {
                            return r.type !== "add" && (r.trans._cache = null),
                            n.mutate(r)
                        }
                    })
                }
            }
        }
    }, Sa;
    function ka(e) {
        return !("from"in e)
    }
    var Et = function(e, t) {
        if (this)
            Oe(this, arguments.length ? {
                d: 1,
                from: e,
                to: arguments.length > 1 ? t : e
            } : {
                d: 0
            });
        else {
            var n = new Et;
            return e && "d"in e && Oe(n, e),
            n
        }
    };
    Rn(Et.prototype, (Sa = {
        add: function(e) {
            return Li(this, e),
            this
        },
        addKey: function(e) {
            return xr(this, e, e),
            this
        },
        addKeys: function(e) {
            var t = this;
            return e.forEach(function(n) {
                return xr(t, n, n)
            }),
            this
        }
    },
    Sa[Bo] = function() {
        return xa(this)
    }
    ,
    Sa));
    function xr(e, t, n) {
        var r = Ne(t, n);
        if (!isNaN(r)) {
            if (r > 0)
                throw RangeError();
            if (ka(e))
                return Oe(e, {
                    from: t,
                    to: n,
                    d: 1
                });
            var i = e.l
              , o = e.r;
            if (Ne(n, e.from) < 0)
                return i ? xr(i, t, n) : e.l = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                },
                Hu(e);
            if (Ne(t, e.to) > 0)
                return o ? xr(o, t, n) : e.r = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                },
                Hu(e);
            Ne(t, e.from) < 0 && (e.from = t,
            e.l = null,
            e.d = o ? o.d + 1 : 1),
            Ne(n, e.to) > 0 && (e.to = n,
            e.r = null,
            e.d = e.l ? e.l.d + 1 : 1);
            var a = !e.r;
            i && !e.l && Li(e, i),
            o && a && Li(e, o)
        }
    }
    function Li(e, t) {
        function n(r, i) {
            var o = i.from
              , a = i.to
              , s = i.l
              , l = i.r;
            xr(r, o, a),
            s && n(r, s),
            l && n(r, l)
        }
        ka(t) || n(e, t)
    }
    function $v(e, t) {
        var n = xa(t)
          , r = n.next();
        if (r.done)
            return !1;
        for (var i = r.value, o = xa(e), a = o.next(i.from), s = a.value; !r.done && !a.done; ) {
            if (Ne(s.from, i.to) <= 0 && Ne(s.to, i.from) >= 0)
                return !0;
            Ne(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (a = o.next(i.from)).value
        }
        return !1
    }
    function xa(e) {
        var t = ka(e) ? null : {
            s: 0,
            n: e
        };
        return {
            next: function(n) {
                for (var r = arguments.length > 0; t; )
                    switch (t.s) {
                    case 0:
                        if (t.s = 1,
                        r)
                            for (; t.n.l && Ne(n, t.n.from) < 0; )
                                t = {
                                    up: t,
                                    n: t.n.l,
                                    s: 1
                                };
                        else
                            for (; t.n.l; )
                                t = {
                                    up: t,
                                    n: t.n.l,
                                    s: 1
                                };
                    case 1:
                        if (t.s = 2,
                        !r || Ne(n, t.n.to) <= 0)
                            return {
                                value: t.n,
                                done: !1
                            };
                    case 2:
                        if (t.n.r) {
                            t.s = 3,
                            t = {
                                up: t,
                                n: t.n.r,
                                s: 0
                            };
                            continue
                        }
                    case 3:
                        t = t.up
                    }
                return {
                    done: !0
                }
            }
        }
    }
    function Hu(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = r > 1 ? "r" : r < -1 ? "l" : "";
        if (i) {
            var o = i === "r" ? "l" : "r"
              , a = $({}, e)
              , s = e[i];
            e.from = s.from,
            e.to = s.to,
            e[i] = s[i],
            a[i] = s[o],
            e[o] = a,
            a.d = zu(a)
        }
        e.d = zu(e)
    }
    function zu(e) {
        var t = e.r
          , n = e.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1
    }
    var qv = {
        stack: "dbcore",
        level: 0,
        create: function(e) {
            var t = e.schema.name
              , n = new Et(e.MIN_KEY,e.MAX_KEY);
            return $($({}, e), {
                table: function(r) {
                    var i = e.table(r)
                      , o = i.schema
                      , a = o.primaryKey
                      , s = a.extractKey
                      , l = a.outbound
                      , u = $($({}, i), {
                        mutate: function(f) {
                            var p = f.trans
                              , h = p.mutatedParts || (p.mutatedParts = {})
                              , m = function(I) {
                                var E = "idb://" + t + "/" + r + "/" + I;
                                return h[E] || (h[E] = new Et)
                            }
                              , g = m("")
                              , _ = m(":dels")
                              , v = f.type
                              , b = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [[], f.values] : []
                              , y = b[0]
                              , C = b[1]
                              , S = f.trans._cache;
                            return i.mutate(f).then(function(I) {
                                if (xe(y)) {
                                    v !== "delete" && (y = I.results),
                                    g.addKeys(y);
                                    var E = ju(y, S);
                                    !E && v !== "add" && _.addKeys(y),
                                    (E || C) && Zv(m, o, E, C)
                                } else if (y) {
                                    var x = {
                                        from: y.lower,
                                        to: y.upper
                                    };
                                    _.add(x),
                                    g.add(x)
                                } else
                                    g.add(n),
                                    _.add(n),
                                    o.indexes.forEach(function(R) {
                                        return m(R.name).add(n)
                                    });
                                return I
                            })
                        }
                    })
                      , c = function(f) {
                        var p, h, m = f.query, g = m.index, _ = m.range;
                        return [g, new Et((p = _.lower) !== null && p !== void 0 ? p : e.MIN_KEY,(h = _.upper) !== null && h !== void 0 ? h : e.MAX_KEY)]
                    }
                      , d = {
                        get: function(f) {
                            return [a, new Et(f.key)]
                        },
                        getMany: function(f) {
                            return [a, new Et().addKeys(f.keys)]
                        },
                        count: c,
                        query: c,
                        openCursor: c
                    };
                    return me(d).forEach(function(f) {
                        u[f] = function(p) {
                            var h = M.subscr;
                            if (h) {
                                var m = function(S) {
                                    var I = "idb://" + t + "/" + r + "/" + S;
                                    return h[I] || (h[I] = new Et)
                                }
                                  , g = m("")
                                  , _ = m(":dels")
                                  , v = d[f](p)
                                  , b = v[0]
                                  , y = v[1];
                                if (m(b.name || "").add(y),
                                !b.isPrimaryKey)
                                    if (f === "count")
                                        _.add(n);
                                    else {
                                        var C = f === "query" && l && p.values && i.query($($({}, p), {
                                            values: !1
                                        }));
                                        return i[f].apply(this, arguments).then(function(S) {
                                            if (f === "query") {
                                                if (l && p.values)
                                                    return C.then(function(R) {
                                                        var T = R.result;
                                                        return g.addKeys(T),
                                                        S
                                                    });
                                                var I = p.values ? S.result.map(s) : S.result;
                                                p.values ? g.addKeys(I) : _.addKeys(I)
                                            } else if (f === "openCursor") {
                                                var E = S
                                                  , x = p.values;
                                                return E && Object.create(E, {
                                                    key: {
                                                        get: function() {
                                                            return _.addKey(E.primaryKey),
                                                            E.key
                                                        }
                                                    },
                                                    primaryKey: {
                                                        get: function() {
                                                            var R = E.primaryKey;
                                                            return _.addKey(R),
                                                            R
                                                        }
                                                    },
                                                    value: {
                                                        get: function() {
                                                            return x && g.addKey(E.primaryKey),
                                                            E.value
                                                        }
                                                    }
                                                })
                                            }
                                            return S
                                        })
                                    }
                            }
                            return i[f].apply(this, arguments)
                        }
                    }),
                    u
                }
            })
        }
    };
    function Zv(e, t, n, r) {
        function i(o) {
            var a = e(o.name || "");
            function s(u) {
                return u != null ? o.extractKey(u) : null
            }
            var l = function(u) {
                return o.multiEntry && xe(u) ? u.forEach(function(c) {
                    return a.addKey(c)
                }) : a.addKey(u)
            };
            (n || r).forEach(function(u, c) {
                var d = n && s(n[c])
                  , f = r && s(r[c]);
                Ne(d, f) !== 0 && (d != null && l(d),
                f != null && l(f))
            })
        }
        t.indexes.forEach(i)
    }
    var Aa = function() {
        function e(t, n) {
            var r = this;
            this._middlewares = {},
            this.verno = 0;
            var i = e.dependencies;
            this._options = n = $({
                addons: e.addons,
                autoOpen: !0,
                indexedDB: i.indexedDB,
                IDBKeyRange: i.IDBKeyRange
            }, n),
            this._deps = {
                indexedDB: n.indexedDB,
                IDBKeyRange: n.IDBKeyRange
            };
            var o = n.addons;
            this._dbSchema = {},
            this._versions = [],
            this._storeNames = [],
            this._allTables = {},
            this.idbdb = null,
            this._novip = this;
            var a = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: re,
                dbReadyPromise: null,
                cancelOpen: re,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3
            };
            a.dbReadyPromise = new U(function(s) {
                a.dbReadyResolve = s
            }
            ),
            a.openCanceller = new U(function(s, l) {
                a.cancelOpen = l
            }
            ),
            this._state = a,
            this.name = t,
            this.on = wr(this, "populate", "blocked", "versionchange", "close", {
                ready: [Go, re]
            }),
            this.on.ready.subscribe = ru(this.on.ready.subscribe, function(s) {
                return function(l, u) {
                    e.vip(function() {
                        var c = r._state;
                        if (c.openComplete)
                            c.dbOpenError || U.resolve().then(l),
                            u && s(l);
                        else if (c.onReadyBeingFired)
                            c.onReadyBeingFired.push(l),
                            u && s(l);
                        else {
                            s(l);
                            var d = r;
                            u || s(function f() {
                                d.on.ready.unsubscribe(l),
                                d.on.ready.unsubscribe(f)
                            })
                        }
                    })
                }
            }),
            this.Collection = cv(this),
            this.Table = ov(this),
            this.Transaction = yv(this),
            this.Version = Dv(this),
            this.WhereClause = gv(this),
            this.on("versionchange", function(s) {
                s.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + r.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + r.name + "'. Closing db now to resume the delete request."),
                r.close()
            }),
            this.on("blocked", function(s) {
                !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('" + r.name + "') was blocked") : console.warn("Upgrade '" + r.name + "' blocked by other connection holding version " + s.oldVersion / 10)
            }),
            this._maxKey = Sr(n.IDBKeyRange),
            this._createTransaction = function(s, l, u, c) {
                return new r.Transaction(s,l,u,r._options.chromeTransactionDurability,c)
            }
            ,
            this._fireOnBlocked = function(s) {
                r.on("blocked").fire(s),
                br.filter(function(l) {
                    return l.name === r.name && l !== r && !l._state.vcFired
                }).map(function(l) {
                    return l.on("versionchange").fire(s)
                })
            }
            ,
            this.use(Hv),
            this.use(Kv),
            this.use(qv),
            this.use(Wv),
            this.vip = Object.create(this, {
                _vip: {
                    value: !0
                }
            }),
            o.forEach(function(s) {
                return s(r)
            })
        }
        return e.prototype.version = function(t) {
            if (isNaN(t) || t < .1)
                throw new V.Type("Given version is not a positive number");
            if (t = Math.round(t * 10) / 10,
            this.idbdb || this._state.isBeingOpened)
                throw new V.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, t);
            var n = this._versions
              , r = n.filter(function(i) {
                return i._cfg.version === t
            })[0];
            return r || (r = new this.Version(t),
            n.push(r),
            n.sort(Sv),
            r.stores({}),
            this._state.autoSchema = !1,
            r)
        }
        ,
        e.prototype._whenReady = function(t) {
            var n = this;
            return this.idbdb && (this._state.openComplete || M.letThrough || this._vip) ? t() : new U(function(r, i) {
                if (n._state.openComplete)
                    return i(new V.DatabaseClosed(n._state.dbOpenError));
                if (!n._state.isBeingOpened) {
                    if (!n._options.autoOpen) {
                        i(new V.DatabaseClosed);
                        return
                    }
                    n.open().catch(re)
                }
                n._state.dbReadyPromise.then(r, i)
            }
            ).then(t)
        }
        ,
        e.prototype.use = function(t) {
            var n = t.stack
              , r = t.create
              , i = t.level
              , o = t.name;
            o && this.unuse({
                stack: n,
                name: o
            });
            var a = this._middlewares[n] || (this._middlewares[n] = []);
            return a.push({
                stack: n,
                create: r,
                level: i == null ? 10 : i,
                name: o
            }),
            a.sort(function(s, l) {
                return s.level - l.level
            }),
            this
        }
        ,
        e.prototype.unuse = function(t) {
            var n = t.stack
              , r = t.name
              , i = t.create;
            return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(o) {
                return i ? o.create !== i : r ? o.name !== r : !1
            })),
            this
        }
        ,
        e.prototype.open = function() {
            return Vv(this)
        }
        ,
        e.prototype._close = function() {
            var t = this._state
              , n = br.indexOf(this);
            if (n >= 0 && br.splice(n, 1),
            this.idbdb) {
                try {
                    this.idbdb.close()
                } catch {}
                this._novip.idbdb = null
            }
            t.dbReadyPromise = new U(function(r) {
                t.dbReadyResolve = r
            }
            ),
            t.openCanceller = new U(function(r, i) {
                t.cancelOpen = i
            }
            )
        }
        ,
        e.prototype.close = function() {
            this._close();
            var t = this._state;
            this._options.autoOpen = !1,
            t.dbOpenError = new V.DatabaseClosed,
            t.isBeingOpened && t.cancelOpen(t.dbOpenError)
        }
        ,
        e.prototype.delete = function() {
            var t = this
              , n = arguments.length > 0
              , r = this._state;
            return new U(function(i, o) {
                var a = function() {
                    t.close();
                    var s = t._deps.indexedDB.deleteDatabase(t.name);
                    s.onsuccess = se(function() {
                        Mv(t._deps, t.name),
                        i()
                    }),
                    s.onerror = lt(o),
                    s.onblocked = t._fireOnBlocked
                };
                if (n)
                    throw new V.InvalidArgument("Arguments not allowed in db.delete()");
                r.isBeingOpened ? r.dbReadyPromise.then(a) : a()
            }
            )
        }
        ,
        e.prototype.backendDB = function() {
            return this.idbdb
        }
        ,
        e.prototype.isOpen = function() {
            return this.idbdb !== null
        }
        ,
        e.prototype.hasBeenClosed = function() {
            var t = this._state.dbOpenError;
            return t && t.name === "DatabaseClosed"
        }
        ,
        e.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null
        }
        ,
        e.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema
        }
        ,
        Object.defineProperty(e.prototype, "tables", {
            get: function() {
                var t = this;
                return me(this._allTables).map(function(n) {
                    return t._allTables[n]
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.transaction = function() {
            var t = Bv.apply(this, arguments);
            return this._transaction.apply(this, t)
        }
        ,
        e.prototype._transaction = function(t, n, r) {
            var i = this
              , o = M.trans;
            (!o || o.db !== this || t.indexOf("!") !== -1) && (o = null);
            var a = t.indexOf("?") !== -1;
            t = t.replace("!", "").replace("?", "");
            var s, l;
            try {
                if (l = n.map(function(c) {
                    var d = c instanceof i.Table ? c.name : c;
                    if (typeof d != "string")
                        throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                    return d
                }),
                t == "r" || t === sa)
                    s = sa;
                else if (t == "rw" || t == la)
                    s = la;
                else
                    throw new V.InvalidArgument("Invalid transaction mode: " + t);
                if (o) {
                    if (o.mode === sa && s === la)
                        if (a)
                            o = null;
                        else
                            throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    o && l.forEach(function(c) {
                        if (o && o.storeNames.indexOf(c) === -1)
                            if (a)
                                o = null;
                            else
                                throw new V.SubTransaction("Table " + c + " not included in parent transaction.")
                    }),
                    a && o && !o.active && (o = null)
                }
            } catch (c) {
                return o ? o._promise(null, function(d, f) {
                    f(c)
                }) : be(c)
            }
            var u = Bu.bind(null, this, s, l, o, r);
            return o ? o._promise(s, u, "lock") : M.trans ? Pn(M.transless, function() {
                return i._whenReady(u)
            }) : this._whenReady(u)
        }
        ,
        e.prototype.table = function(t) {
            if (!Ve(this._allTables, t))
                throw new V.InvalidTable("Table " + t + " does not exist");
            return this._allTables[t]
        }
        ,
        e
    }()
      , Yv = typeof Symbol < "u" && "observable"in Symbol ? Symbol.observable : "@@observable"
      , Qv = function() {
        function e(t) {
            this._subscribe = t
        }
        return e.prototype.subscribe = function(t, n, r) {
            return this._subscribe(!t || typeof t == "function" ? {
                next: t,
                error: n,
                complete: r
            } : t)
        }
        ,
        e.prototype[Yv] = function() {
            return this
        }
        ,
        e
    }();
    function Ku(e, t) {
        return me(t).forEach(function(n) {
            var r = e[n] || (e[n] = new Et);
            Li(r, t[n])
        }),
        e
    }
    function Xv(e) {
        return new Qv(function(t) {
            var n = jo(e);
            function r(p) {
                n && Un();
                var h = function() {
                    return Mt(e, {
                        subscr: p,
                        trans: null
                    })
                }
                  , m = M.trans ? Pn(M.transless, h) : h();
                return n && m.then(wt, wt),
                m
            }
            var i = !1
              , o = {}
              , a = {}
              , s = {
                get closed() {
                    return i
                },
                unsubscribe: function() {
                    i = !0,
                    jt.storagemutated.unsubscribe(d)
                }
            };
            t.start && t.start(s);
            var l = !1
              , u = !1;
            function c() {
                return me(a).some(function(p) {
                    return o[p] && $v(o[p], a[p])
                })
            }
            var d = function(p) {
                Ku(o, p),
                c() && f()
            }
              , f = function() {
                if (!(l || i)) {
                    o = {};
                    var p = {}
                      , h = r(p);
                    u || (jt(Ir, d),
                    u = !0),
                    l = !0,
                    Promise.resolve(h).then(function(m) {
                        l = !1,
                        !i && (c() ? f() : (o = {},
                        a = p,
                        t.next && t.next(m)))
                    }, function(m) {
                        l = !1,
                        t.error && t.error(m),
                        s.unsubscribe()
                    })
                }
            };
            return f(),
            s
        }
        )
    }
    var Ta;
    try {
        Ta = {
            indexedDB: oe.indexedDB || oe.mozIndexedDB || oe.webkitIndexedDB || oe.msIndexedDB,
            IDBKeyRange: oe.IDBKeyRange || oe.webkitIDBKeyRange
        }
    } catch {
        Ta = {
            indexedDB: null,
            IDBKeyRange: null
        }
    }
    var ln = Aa;
    Rn(ln, $($({}, di), {
        delete: function(e) {
            var t = new ln(e,{
                addons: []
            });
            return t.delete()
        },
        exists: function(e) {
            return new ln(e,{
                addons: []
            }).open().then(function(t) {
                return t.close(),
                !0
            }).catch("NoSuchDatabaseError", function() {
                return !1
            })
        },
        getDatabaseNames: function(e) {
            try {
                return Uv(ln.dependencies).then(e)
            } catch {
                return be(new V.MissingAPI)
            }
        },
        defineClass: function() {
            function e(t) {
                Oe(this, t)
            }
            return e
        },
        ignoreTransaction: function(e) {
            return M.trans ? Pn(M.transless, e) : e()
        },
        vip: Ca,
        async: function(e) {
            return function() {
                try {
                    var t = Ea(e.apply(this, arguments));
                    return !t || typeof t.then != "function" ? U.resolve(t) : t
                } catch (n) {
                    return be(n)
                }
            }
        },
        spawn: function(e, t, n) {
            try {
                var r = Ea(e.apply(n, t || []));
                return !r || typeof r.then != "function" ? U.resolve(r) : r
            } catch (i) {
                return be(i)
            }
        },
        currentTransaction: {
            get: function() {
                return M.trans || null
            }
        },
        waitFor: function(e, t) {
            var n = U.resolve(typeof e == "function" ? ln.ignoreTransaction(e) : e).timeout(t || 6e4);
            return M.trans ? M.trans.waitFor(n) : n
        },
        Promise: U,
        debug: {
            get: function() {
                return st
            },
            set: function(e) {
                uu(e, e === "dexie" ? function() {
                    return !0
                }
                : Au)
            }
        },
        derive: Ln,
        extend: Oe,
        props: Rn,
        override: ru,
        Events: wr,
        on: jt,
        liveQuery: Xv,
        extendObservabilitySet: Ku,
        getByKeyPath: _t,
        setByKeyPath: Ye,
        delByKeyPath: Rg,
        shallowClone: au,
        deepClone: fr,
        getObjectDiff: Ia,
        cmp: Ne,
        asap: iu,
        minKey: aa,
        addons: [],
        connections: br,
        errnames: Ko,
        dependencies: Ta,
        semVer: ku,
        version: ku.split(".").map(function(e) {
            return parseInt(e)
        }).reduce(function(e, t, n) {
            return e + t / Math.pow(10, n * 2)
        })
    })),
    ln.maxKey = Sr(ln.dependencies.IDBKeyRange),
    typeof dispatchEvent < "u" && typeof addEventListener < "u" && (jt(Ir, function(e) {
        if (!It) {
            var t;
            Ei ? (t = document.createEvent("CustomEvent"),
            t.initCustomEvent(Bt, !0, !0, e)) : t = new CustomEvent(Bt,{
                detail: e
            }),
            It = !0,
            dispatchEvent(t),
            It = !1
        }
    }),
    addEventListener(Bt, function(e) {
        var t = e.detail;
        It || Oi(t)
    }));
    function Oi(e) {
        var t = It;
        try {
            It = !0,
            jt.storagemutated.fire(e)
        } finally {
            It = t
        }
    }
    var It = !1;
    if (typeof BroadcastChannel < "u") {
        var Ni = new BroadcastChannel(Bt);
        typeof Ni.unref == "function" && Ni.unref(),
        jt(Ir, function(e) {
            It || Ni.postMessage(e)
        }),
        Ni.onmessage = function(e) {
            e.data && Oi(e.data)
        }
    } else if (typeof self < "u" && typeof navigator < "u") {
        jt(Ir, function(e) {
            try {
                It || (typeof localStorage < "u" && localStorage.setItem(Bt, JSON.stringify({
                    trig: Math.random(),
                    changedParts: e
                })),
                typeof self.clients == "object" && Po([], self.clients.matchAll({
                    includeUncontrolled: !0
                }), !0).forEach(function(t) {
                    return t.postMessage({
                        type: Bt,
                        changedParts: e
                    })
                }))
            } catch {}
        }),
        typeof addEventListener < "u" && addEventListener("storage", function(e) {
            if (e.key === Bt) {
                var t = JSON.parse(e.newValue);
                t && Oi(t.changedParts)
            }
        });
        var Gu = self.document && navigator.serviceWorker;
        Gu && Gu.addEventListener("message", Jv)
    }
    function Jv(e) {
        var t = e.data;
        t && t.type === Bt && Oi(t.changedParts)
    }
    U.rejectionMapper = Vg,
    uu(st, Au);
    var Vn = (e=>(e.ReadyForUpload = "ReadyForUpload",
    e.UploadComplete = "UploadComplete",
    e))(Vn || {})
      , Bn = (e=>(e.After = "after",
    e.Before = "before",
    e.BeforeAndAfter = "beforeAndAfter",
    e))(Bn || {});
    const Ra = "sprig.sessionId"
      , Wu = "sprig.disableReplayRecording"
      , ey = 30
      , $u = ()=>{
        sessionStorage.setItem(Wu, "disabled")
    }
      , un = ()=>!!sessionStorage.getItem(Wu)
      , ty = ["did not allow mutations", "called in an invalid security context"]
      , ny = e=>{
        if (!e)
            return !0;
        for (const t of ty)
            if (e.toLowerCase().includes(t))
                return !1;
        return !0
    }
      , qu = (e,t,n)=>{
        un() || t instanceof Error && ($u(),
        ny(t == null ? void 0 : t.message) && (iy(),
        window.UserLeap.reportError(e, t, n)))
    }
      , ry = (e,t)=>{
        var n, r;
        (r = (n = window.navigator) == null ? void 0 : n.storage) != null && r.estimate ? window.navigator.storage.estimate().then(i=>{
            qu(e, t, i)
        }
        ).catch(i=>{
            window.UserLeap.reportError("Error getting storage estimate", i)
        }
        ) : qu(e, t)
    }
      , Me = (()=>{
        const e = sessionStorage.getItem(Ra);
        return e ? (sessionStorage.removeItem(Ra),
        e) : Nt()
    }
    )();
    window.addEventListener("beforeunload", ()=>{
        sessionStorage.setItem(Ra, Me)
    }
    );
    const iy = ()=>{
        Promise.all([te.events.clear(), te.chunkUploads.clear(), te.pendingCaptures.clear()]).catch(e=>{
            window.UserLeap.reportError("Error wiping database", e)
        }
        )
    }
      , La = (e,t,n=()=>!0)=>te.table(t).where("timestamp").below(e).and(n).delete()
      , oy = ()=>{
        te.events.where("sessionId").equals(Me).delete(),
        te.pendingCaptures.where("sessionId").equals(Me).delete()
    }
      , ay = e=>{
        const t = e.map(n=>{
            var r;
            return {
                ...n,
                sessionId: (r = n.sessionId) != null ? r : Me
            }
        }
        );
        return te.events.bulkAdd(t)
    }
      , sy = (e,t)=>te.events.where("[sessionId+timestamp]").between([Me, e], [Me, t]).toArray()
      , ly = (e,t,n)=>{
        const r = new Date
          , i = r.setMinutes(r.getMinutes() + (n != null ? n : ey));
        return te.events.where("[sessionId+timestamp]").between([Me, e], [Me, t]).modify({
            expiredAt: i
        })
    }
      , uy = e=>{
        var t;
        return te.chunkUploads.add({
            ...e,
            sessionId: (t = e.sessionId) != null ? t : Me
        })
    }
      , cy = (e,t)=>te.chunkUploads.update(e, {
        data: null,
        etag: t,
        status: Vn.UploadComplete
    })
      , dy = ({status: e, uploadId: t})=>t ? te.chunkUploads.where({
        uploadId: t,
        status: e
    }).toArray() : te.chunkUploads.where({
        sessionId: Me,
        status: e
    }).toArray()
      , fy = e=>te.chunkUploads.where({
        uploadId: e,
        status: Vn.UploadComplete
    }).toArray()
      , py = e=>te.chunkUploads.where({
        uploadId: e,
        status: Vn.UploadComplete
    }).delete()
      , hy = e=>{
        var t;
        return te.pendingCaptures.add({
            ...e,
            sessionId: (t = e.sessionId) != null ? t : Me,
            canUpload: !1
        })
    }
      , my = ()=>te.pendingCaptures.where("sessionId").equals(Me).and(e=>e.targetTimestamp < Date.now()).toArray()
      , gy = ()=>te.pendingCaptures.where("sessionId").equals(Me).toArray()
      , vy = e=>te.pendingCaptures.where("sessionId").equals(Me).and(t=>t.captureParams.responseGroupId === e).modify({
        canUpload: !0
    });
    class yy extends Aa {
        constructor() {
            super("replayStorage", {
                autoOpen: !1
            });
            Pe(this, "events");
            Pe(this, "chunkUploads");
            Pe(this, "pendingCaptures")
        }
    }
    const te = new yy;
    te.version(1).stores({
        events: "uuid, timestamp, [sessionId+timestamp]",
        chunkUploads: "uuid, timestamp, [sessionId+status], [uploadId+status], [sessionId+status+uploadId]",
        pendingCaptures: "uuid, timestamp, [sessionId+targetTimestamp]"
    }),
    te.open().catch(()=>{
        $u()
    }
    );
    let Zu = 5e3
      , Oa = 6e4;
    const _y = 5
      , Yu = 1e3
      , Qu = 30
      , Di = Qu + _y
      , Na = "sprig.pendingCount";
    let Xu = 0
      , Ju = Date.now()
      , Da = !1;
    const by = async(e,t=2,n)=>{
        try {
            if (un() || !e)
                return;
            n != null && n.minDuration && (Zu = n.minDuration),
            n != null && n.batchDuration && (Oa = n.batchDuration),
            Cg(t),
            xy(),
            Ey(e + Di, 30 * 60, e + Di),
            Iy();
            let r = !0;
            Ut({
                checkoutEveryNms: Qu * 1e3,
                sampling: {
                    input: "last",
                    scroll: 250,
                    media: 800
                },
                emit: (i,o)=>{
                    if (un())
                        return;
                    Ju = Date.now();
                    const a = r || !!o;
                    r = !1,
                    wy({
                        uuid: Nt(),
                        event: JSON.stringify(i),
                        isValidStart: a,
                        timestamp: Date.now()
                    })
                }
                ,
                ...n
            }),
            Da = !0,
            Xu || (Xu = window.setInterval(()=>{
                Date.now() - Ju > Yu && Ar("Sprig_Noop", {})
            }
            , Yu))
        } catch (r) {
            ut("Error initializing replay", r)
        }
    }
    ;
    let Ua = !1
      , Pa = [];
    const wy = e=>{
        Pa.push(e),
        Ua || Cy()
    }
      , Cy = ()=>{
        Ua = !0,
        setTimeout(async()=>{
            if (un())
                return;
            const e = Pa;
            Pa = [],
            Ua = !1;
            try {
                await ay(e)
            } catch (t) {
                ut("Error storing replay events", t)
            }
        }
        , 500)
    }
      , Ey = (e=6 * 60,t=30 * 60,n=4 * 60)=>{
        const r = setInterval(async()=>{
            const i = Date.now();
            un() || await te.transaction("rw", te.events, te.chunkUploads, te.pendingCaptures, ()=>{
                La(i - e * 1e3, "events", o=>o.expiredAt === void 0 || o.expiredAt < i - e * 1e3),
                La(i - t * 1e3, "chunkUploads"),
                La(i - n * 1e3, "pendingCaptures", o=>o.canUpload === void 0 || o.canUpload === !1)
            }
            ).catch(o=>{
                clearInterval(r),
                ut("Error deleting table rows", o)
            }
            )
        }
        , 3e4)
    }
      , Iy = (e=5)=>{
        setInterval(Oy, e * 1e3)
    }
      , Sy = async(e,t,n,r,i)=>{
        try {
            const o = Math.min(e + i, n)
              , a = await sy(e, o);
            if (!(a != null && a.length))
                return [r, []];
            if (!r) {
                let s = -1;
                return a == null || a.forEach((l,u)=>{
                    if (!l.isValidStart)
                        return;
                    const c = l.timestamp <= t;
                    (s < 0 || c) && (s = u)
                }
                ),
                s < 0 ? [] : [!0, a == null ? void 0 : a.slice(s)]
            }
            return [r, a]
        } catch (o) {
            ut("Error getting events batch", o)
        }
    }
      , ky = (e,t,n)=>{
        const r = e.length
          , i = t * 1024 * 1024
          , o = Math.ceil(r / n)
          , a = Math.max(i, o)
          , s = [];
        let l = 0;
        for (; l < r; )
            s.push(e.slice(l, l + a)),
            l += a;
        return s
    }
      , ec = e=>Promise.all(e.map(async t=>{
        const n = await Ig(t);
        return await cy(t.uuid, n),
        t.uploadId
    }
    ))
      , tc = async e=>{
        const t = await fy(e);
        if (!(t != null && t.length))
            return;
        t.sort((i,o)=>i.chunkIndex - o.chunkIndex);
        const n = t.map(i=>({
            ETag: i.etag,
            PartNumber: i.chunkIndex
        })).filter(i=>i.ETag !== null)
          , r = t[0];
        await Sg({
            apiUrl: r.apiUrl,
            surveyId: r.surveyId,
            uploadId: e,
            responseGroupUuid: r.responseGroupId,
            etags: n,
            headers: r.completeUploadHeaders,
            replayDuration: r.replayDuration
        }),
        await py(e)
    }
      , xy = async()=>{
        try {
            let e = [];
            if (await te.transaction("rw", te.chunkUploads, async()=>{
                e = await dy({
                    status: Vn.ReadyForUpload
                }).catch(n=>{
                    ut("chunkUploads transaction error", n)
                }
                )
            }
            ),
            !(e != null && e.length))
                return;
            const t = await ec(e);
            t != null && t.length && await Promise.all(t.map(async n=>{
                n && await tc(n)
            }
            ))
        } catch (e) {
            ut("Error getting chunk upload uuids", e)
        }
    }
      , Ay = async(e,t)=>{
        await ec(t),
        await Promise.all(e.map(n=>tc(n)))
    }
      , Ty = e=>{
        let t = 0;
        e.forEach(i=>{
            t += i.length
        }
        );
        const n = new Uint8Array(t);
        let r = 0;
        return e.forEach(i=>{
            n.set(i, r),
            r += i.length
        }
        ),
        n
    }
      , nc = async(e,t,n)=>{
        const r = new TextEncoder;
        let i = null
          , o = null
          , a = null
          , s = !1
          , l = !1
          , [u,c] = [0, 0];
        const d = e - Di * 1e3
          , f = [];
        let p = [];
        for (let m = d; m < t; m += Oa) {
            if ([l,p] = await Sy(m, e, t, l, Oa),
            !(p != null && p.length))
                continue;
            u === 0 && (u = p[0].timestamp),
            c = p[p.length - 1].timestamp;
            const g = `${s ? "," : "["}${p.map(v=>v.event).join(",")}`
              , _ = r.encode(g);
            n ? (o === null && (a = new window.CompressionStream("gzip"),
            o = a.writable.getWriter()),
            o.write(_)) : f.push(_),
            s = !0
        }
        if (c - u < Zu)
            return null;
        const h = r.encode("]");
        return o && a ? (o.write(h),
        o.close(),
        i = new Uint8Array(await new Response(a.readable).arrayBuffer())) : (f.push(h),
        i = Ty(f)),
        i
    }
      , Ry = async(e,t)=>{
        const n = window.CompressionStream !== void 0;
        let r = null;
        const i = t != null ? t : Date.now()
          , o = i - e;
        try {
            r = await nc(o, i, n)
        } catch (a) {
            if (a instanceof Error && window.UserLeap.reportError("Error compressing replay", a),
            n)
                try {
                    r = await nc(o, i, !1)
                } catch (s) {
                    ut("fileData fallback failed", s)
                }
        }
        return r
    }
      , rc = async e=>{
        const {surveyId: t, responseGroupId: n, visitorId: r, apiUrl: i, completeUploadHeaders: o, replayParams: a, triggerTimestamp: s} = e
          , l = await Ry(a.replayDurationSeconds * 1e3, s);
        if (!(l != null && l.length))
            return;
        const u = ky(l, a.minimumChunkSizeMb, a.signedUrls.length)
          , c = await Promise.all(u.map(async(d,f)=>{
            const p = Nt()
              , h = {
                apiUrl: i,
                chunkIndex: f + 1,
                completeUploadHeaders: o,
                etag: null,
                responseGroupId: n,
                status: Vn.ReadyForUpload,
                surveyId: t,
                timestamp: s,
                totalChunks: u.length,
                data: d,
                uploadId: a.uploadId,
                uploadUrl: a.signedUrls[f].url,
                uuid: p,
                visitorId: r
            };
            return await uy(h),
            h
        }
        ));
        await Ay([a.uploadId], c)
    }
      , ic = async(e,t)=>{
        if (!un())
            try {
                const {isStandalone: n, replayParams: r, triggerTimestamp: i, responseGroupId: o} = e
                  , a = async()=>{
                    setTimeout(()=>W.removeListener(z.QuestionAnswered, a), 0),
                    r.replayDurationType === Bn.Before ? await rc(e) : await vy(o)
                }
                ;
                if (r.replayDurationType === Bn.After || r.replayDurationType === Bn.BeforeAndAfter) {
                    n || W.on(z.QuestionAnswered, a),
                    await Ly(e);
                    return
                }
                if (n || t)
                    await rc(e);
                else {
                    const s = Di + r.replayDurationSeconds;
                    await ly(i - s * 1e3, i, r.expirationTimeLimitMinutes),
                    W.on(z.QuestionAnswered, a)
                }
            } catch (n) {
                ut("Error scheduling or capturing replay", n)
            }
    }
      , oc = ()=>{
        if (!un())
            try {
                oy()
            } catch (e) {
                ut("Error clearing session event data", e)
            }
    }
    ;
    let St = sessionStorage.getItem(Na);
    const Ly = async e=>{
        const {surveyId: t} = e
          , n = await gy()
          , r = n == null ? void 0 : n.filter(a=>a.captureParams.surveyId === t);
        if (r != null && r.length)
            return;
        const i = {
            ...e,
            replayParams: {
                ...e.replayParams
            }
        };
        e.replayParams.replayDurationType === Bn.BeforeAndAfter && (i.replayParams.replayDurationSeconds *= 2),
        i.replayParams.replayDurationType = Bn.Before;
        const o = e.triggerTimestamp + e.replayParams.replayDurationSeconds * 1e3;
        return i.triggerTimestamp = o,
        St = St ? (parseInt(St) + 1).toString() : "1",
        sessionStorage.setItem(Na, St),
        hy({
            uuid: Nt(),
            targetTimestamp: o,
            timestamp: Date.now(),
            captureParams: i
        })
    }
      , Oy = async()=>{
        try {
            if (St && parseInt(St) > 0) {
                const e = await my();
                e.length && await Promise.all(e.map(async t=>{
                    await te.pendingCaptures.delete(t.uuid),
                    await ic(t.captureParams, t.canUpload)
                }
                )),
                St = (parseInt(St) - e.length).toString(),
                sessionStorage.setItem(Na, St)
            }
        } catch (e) {
            ut("Error initiating pending captures", e)
        }
    }
      , Ar = (e,t)=>{
        var n;
        !Da || (n = Ut.addCustomEvent) == null || n.call(Ut, e, t)
    }
      , ac = e=>{
        Ar("Sprig_PageView", e)
    }
      , Ny = e=>{
        Ar("Sprig_TrackEvent", e)
    }
      , Dy = e=>{
        Ar("Sprig_ShowSurvey", e)
    }
      , Uy = e=>{
        Ar("Sprig_SubmitSurvey", e)
    }
      , ut = (e,t)=>{
        Da = !1,
        ry(e, t)
    }
    ;
    var Tr, P, sc, jn, cn, lc, uc, cc, Ui = {}, dc = [], Py = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function kt(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function fc(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function pe(e, t, n) {
        var r, i, o, a = {};
        for (o in t)
            o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? Tr.call(arguments, 2) : n),
        typeof e == "function" && e.defaultProps != null)
            for (o in e.defaultProps)
                a[o] === void 0 && (a[o] = e.defaultProps[o]);
        return Rr(e, a, r, i, null)
    }
    function Rr(e, t, n, r, i) {
        var o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: i == null ? ++sc : i
        };
        return i == null && P.vnode != null && P.vnode(o),
        o
    }
    function pc() {
        return {
            current: null
        }
    }
    function Qe(e) {
        return e.children
    }
    function My(e, t, n, r, i) {
        var o;
        for (o in n)
            o === "children" || o === "key" || o in t || Pi(e, o, null, n[o], r);
        for (o in t)
            i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Pi(e, o, t[o], n[o], r)
    }
    function hc(e, t, n) {
        t[0] === "-" ? e.setProperty(t, n == null ? "" : n) : e[t] = n == null ? "" : typeof n != "number" || Py.test(t) ? n : n + "px"
    }
    function Pi(e, t, n, r, i) {
        var o;
        e: if (t === "style")
            if (typeof n == "string")
                e.style.cssText = n;
            else {
                if (typeof r == "string" && (e.style.cssText = r = ""),
                r)
                    for (t in r)
                        n && t in n || hc(e.style, t, "");
                if (n)
                    for (t in n)
                        r && n[t] === r[t] || hc(e.style, t, n[t])
            }
        else if (t[0] === "o" && t[1] === "n")
            o = t !== (t = t.replace(/Capture$/, "")),
            t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + o] = n,
            n ? r || e.addEventListener(t, o ? gc : mc, o) : e.removeEventListener(t, o ? gc : mc, o);
        else if (t !== "dangerouslySetInnerHTML") {
            if (i)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
                try {
                    e[t] = n == null ? "" : n;
                    break e
                } catch {}
            typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
    }
    function mc(e) {
        jn = !0;
        try {
            return this.l[e.type + !1](P.event ? P.event(e) : e)
        } finally {
            jn = !1
        }
    }
    function gc(e) {
        jn = !0;
        try {
            return this.l[e.type + !0](P.event ? P.event(e) : e)
        } finally {
            jn = !1
        }
    }
    function Xe(e, t) {
        this.props = e,
        this.context = t
    }
    function Lr(e, t) {
        if (t == null)
            return e.__ ? Lr(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null)
                return n.__e;
        return typeof e.type == "function" ? Lr(e) : null
    }
    function vc(e) {
        var t, n;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if ((n = e.__k[t]) != null && n.__e != null) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return vc(e)
        }
    }
    function Fy(e) {
        jn ? setTimeout(e) : uc(e)
    }
    function Ma(e) {
        (!e.__d && (e.__d = !0) && cn.push(e) && !Mi.__r++ || lc !== P.debounceRendering) && ((lc = P.debounceRendering) || Fy)(Mi)
    }
    function Mi() {
        var e, t, n, r, i, o, a, s;
        for (cn.sort(function(l, u) {
            return l.__v.__b - u.__v.__b
        }); e = cn.shift(); )
            e.__d && (t = cn.length,
            r = void 0,
            i = void 0,
            a = (o = (n = e).__v).__e,
            (s = n.__P) && (r = [],
            (i = kt({}, o)).__v = o.__v + 1,
            Fa(s, o, i, n.__n, s.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? Lr(o) : a, o.__h),
            Cc(r, o),
            o.__e != a && vc(o)),
            cn.length > t && cn.sort(function(l, u) {
                return l.__v.__b - u.__v.__b
            }));
        Mi.__r = 0
    }
    function yc(e, t, n, r, i, o, a, s, l, u) {
        var c, d, f, p, h, m, g, _ = r && r.__k || dc, v = _.length;
        for (n.__k = [],
        c = 0; c < t.length; c++)
            if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Rr(null, p, null, null, p) : Array.isArray(p) ? Rr(Qe, {
                children: p
            }, null, null, null) : p.__b > 0 ? Rr(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
                if (p.__ = n,
                p.__b = n.__b + 1,
                (f = _[c]) === null || f && p.key == f.key && p.type === f.type)
                    _[c] = void 0;
                else
                    for (d = 0; d < v; d++) {
                        if ((f = _[d]) && p.key == f.key && p.type === f.type) {
                            _[d] = void 0;
                            break
                        }
                        f = null
                    }
                Fa(e, p, f = f || Ui, i, o, a, s, l, u),
                h = p.__e,
                (d = p.ref) && f.ref != d && (g || (g = []),
                f.ref && g.push(f.ref, null, p),
                g.push(d, p.__c || h, p)),
                h != null ? (m == null && (m = h),
                typeof p.type == "function" && p.__k === f.__k ? p.__d = l = _c(p, l, e) : l = bc(e, p, f, _, h, l),
                typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = Lr(f))
            }
        for (n.__e = m,
        c = v; c--; )
            _[c] != null && (typeof n.type == "function" && _[c].__e != null && _[c].__e == n.__d && (n.__d = wc(r).nextSibling),
            Ic(_[c], _[c]));
        if (g)
            for (c = 0; c < g.length; c++)
                Ec(g[c], g[++c], g[++c])
    }
    function _c(e, t, n) {
        for (var r, i = e.__k, o = 0; i && o < i.length; o++)
            (r = i[o]) && (r.__ = e,
            t = typeof r.type == "function" ? _c(r, t, n) : bc(n, r, r, i, r.__e, t));
        return t
    }
    function xt(e, t) {
        return t = t || [],
        e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
            xt(n, t)
        }) : t.push(e)),
        t
    }
    function bc(e, t, n, r, i, o) {
        var a, s, l;
        if (t.__d !== void 0)
            a = t.__d,
            t.__d = void 0;
        else if (n == null || i != o || i.parentNode == null)
            e: if (o == null || o.parentNode !== e)
                e.appendChild(i),
                a = null;
            else {
                for (s = o,
                l = 0; (s = s.nextSibling) && l < r.length; l += 1)
                    if (s == i)
                        break e;
                e.insertBefore(i, o),
                a = o
            }
        return a !== void 0 ? a : i.nextSibling
    }
    function wc(e) {
        var t, n, r;
        if (e.type == null || typeof e.type == "string")
            return e.__e;
        if (e.__k) {
            for (t = e.__k.length - 1; t >= 0; t--)
                if ((n = e.__k[t]) && (r = wc(n)))
                    return r
        }
        return null
    }
    function Fa(e, t, n, r, i, o, a, s, l) {
        var u, c, d, f, p, h, m, g, _, v, b, y, C, S, I, E = t.type;
        if (t.constructor !== void 0)
            return null;
        n.__h != null && (l = n.__h,
        s = t.__e = n.__e,
        t.__h = null,
        o = [s]),
        (u = P.__b) && u(t);
        try {
            e: if (typeof E == "function") {
                if (g = t.props,
                _ = (u = E.contextType) && r[u.__c],
                v = u ? _ ? _.props.value : u.__ : r,
                n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype"in E && E.prototype.render ? t.__c = c = new E(g,v) : (t.__c = c = new Xe(g,v),
                c.constructor = E,
                c.render = By),
                _ && _.sub(c),
                c.props = g,
                c.state || (c.state = {}),
                c.context = v,
                c.__n = r,
                d = c.__d = !0,
                c.__h = [],
                c._sb = []),
                c.__s == null && (c.__s = c.state),
                E.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = kt({}, c.__s)),
                kt(c.__s, E.getDerivedStateFromProps(g, c.__s))),
                f = c.props,
                p = c.state,
                c.__v = t,
                d)
                    E.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(),
                    c.componentDidMount != null && c.__h.push(c.componentDidMount);
                else {
                    if (E.getDerivedStateFromProps == null && g !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, v),
                    !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, v) === !1 || t.__v === n.__v) {
                        for (t.__v !== n.__v && (c.props = g,
                        c.state = c.__s,
                        c.__d = !1),
                        t.__e = n.__e,
                        t.__k = n.__k,
                        t.__k.forEach(function(x) {
                            x && (x.__ = t)
                        }),
                        b = 0; b < c._sb.length; b++)
                            c.__h.push(c._sb[b]);
                        c._sb = [],
                        c.__h.length && a.push(c);
                        break e
                    }
                    c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, v),
                    c.componentDidUpdate != null && c.__h.push(function() {
                        c.componentDidUpdate(f, p, h)
                    })
                }
                if (c.context = v,
                c.props = g,
                c.__P = e,
                y = P.__r,
                C = 0,
                "prototype"in E && E.prototype.render) {
                    for (c.state = c.__s,
                    c.__d = !1,
                    y && y(t),
                    u = c.render(c.props, c.state, c.context),
                    S = 0; S < c._sb.length; S++)
                        c.__h.push(c._sb[S]);
                    c._sb = []
                } else
                    do
                        c.__d = !1,
                        y && y(t),
                        u = c.render(c.props, c.state, c.context),
                        c.state = c.__s;
                    while (c.__d && ++C < 25);
                c.state = c.__s,
                c.getChildContext != null && (r = kt(kt({}, r), c.getChildContext())),
                d || c.getSnapshotBeforeUpdate == null || (h = c.getSnapshotBeforeUpdate(f, p)),
                I = u != null && u.type === Qe && u.key == null ? u.props.children : u,
                yc(e, Array.isArray(I) ? I : [I], t, n, r, i, o, a, s, l),
                c.base = t.__e,
                t.__h = null,
                c.__h.length && a.push(c),
                m && (c.__E = c.__ = null),
                c.__e = !1
            } else
                o == null && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = Vy(n.__e, t, n, r, i, o, a, l);
            (u = P.diffed) && u(t)
        } catch (x) {
            t.__v = null,
            (l || o != null) && (t.__e = s,
            t.__h = !!l,
            o[o.indexOf(s)] = null),
            P.__e(x, t, n)
        }
    }
    function Cc(e, t) {
        P.__c && P.__c(t, e),
        e.some(function(n) {
            try {
                e = n.__h,
                n.__h = [],
                e.some(function(r) {
                    r.call(n)
                })
            } catch (r) {
                P.__e(r, n.__v)
            }
        })
    }
    function Vy(e, t, n, r, i, o, a, s) {
        var l, u, c, d = n.props, f = t.props, p = t.type, h = 0;
        if (p === "svg" && (i = !0),
        o != null) {
            for (; h < o.length; h++)
                if ((l = o[h]) && "setAttribute"in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
                    e = l,
                    o[h] = null;
                    break
                }
        }
        if (e == null) {
            if (p === null)
                return document.createTextNode(f);
            e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f),
            o = null,
            s = !1
        }
        if (p === null)
            d === f || s && e.data === f || (e.data = f);
        else {
            if (o = o && Tr.call(e.childNodes),
            u = (d = n.props || Ui).dangerouslySetInnerHTML,
            c = f.dangerouslySetInnerHTML,
            !s) {
                if (o != null)
                    for (d = {},
                    h = 0; h < e.attributes.length; h++)
                        d[e.attributes[h].name] = e.attributes[h].value;
                (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
            }
            if (My(e, f, d, i, s),
            c)
                t.__k = [];
            else if (h = t.props.children,
            yc(e, Array.isArray(h) ? h : [h], t, n, r, i && p !== "foreignObject", o, a, o ? o[0] : n.__k && Lr(n, 0), s),
            o != null)
                for (h = o.length; h--; )
                    o[h] != null && fc(o[h]);
            s || ("value"in f && (h = f.value) !== void 0 && (h !== e.value || p === "progress" && !h || p === "option" && h !== d.value) && Pi(e, "value", h, d.value, !1),
            "checked"in f && (h = f.checked) !== void 0 && h !== e.checked && Pi(e, "checked", h, d.checked, !1))
        }
        return e
    }
    function Ec(e, t, n) {
        try {
            typeof e == "function" ? e(t) : e.current = t
        } catch (r) {
            P.__e(r, n)
        }
    }
    function Ic(e, t, n) {
        var r, i;
        if (P.unmount && P.unmount(e),
        (r = e.ref) && (r.current && r.current !== e.__e || Ec(r, null, t)),
        (r = e.__c) != null) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (o) {
                    P.__e(o, t)
                }
            r.base = r.__P = null,
            e.__c = void 0
        }
        if (r = e.__k)
            for (i = 0; i < r.length; i++)
                r[i] && Ic(r[i], t, n || typeof e.type != "function");
        n || e.__e == null || fc(e.__e),
        e.__ = e.__e = e.__d = void 0
    }
    function By(e, t, n) {
        return this.constructor(e, n)
    }
    function Hn(e, t, n) {
        var r, i, o;
        P.__ && P.__(e, t),
        i = (r = typeof n == "function") ? null : n && n.__k || t.__k,
        o = [],
        Fa(t, e = (!r && n || t).__k = pe(Qe, null, [e]), i || Ui, Ui, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Tr.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r),
        Cc(o, e)
    }
    function Sc(e, t) {
        Hn(e, t, Sc)
    }
    function jy(e, t, n) {
        var r, i, o, a = kt({}, e.props);
        for (o in t)
            o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
        return arguments.length > 2 && (a.children = arguments.length > 3 ? Tr.call(arguments, 2) : n),
        Rr(e.type, a, r || e.key, i || e.ref, null)
    }
    function kc(e, t) {
        var n = {
            __c: t = "__cC" + cc++,
            __: e,
            Consumer: function(r, i) {
                return r.children(i)
            },
            Provider: function(r) {
                var i, o;
                return this.getChildContext || (i = [],
                (o = {})[t] = this,
                this.getChildContext = function() {
                    return o
                }
                ,
                this.shouldComponentUpdate = function(a) {
                    this.props.value !== a.value && i.some(function(s) {
                        s.__e = !0,
                        Ma(s)
                    })
                }
                ,
                this.sub = function(a) {
                    i.push(a);
                    var s = a.componentWillUnmount;
                    a.componentWillUnmount = function() {
                        i.splice(i.indexOf(a), 1),
                        s && s.call(a)
                    }
                }
                ),
                r.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }
    Tr = dc.slice,
    P = {
        __e: function(e, t, n, r) {
            for (var i, o, a; t = t.__; )
                if ((i = t.__c) && !i.__)
                    try {
                        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)),
                        a = i.__d),
                        i.componentDidCatch != null && (i.componentDidCatch(e, r || {}),
                        a = i.__d),
                        a)
                            return i.__E = i
                    } catch (s) {
                        e = s
                    }
            throw e
        }
    },
    sc = 0,
    jn = !1,
    Xe.prototype.setState = function(e, t) {
        var n;
        n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = kt({}, this.state),
        typeof e == "function" && (e = e(kt({}, n), this.props)),
        e && kt(n, e),
        e != null && this.__v && (t && this._sb.push(t),
        Ma(this))
    }
    ,
    Xe.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        Ma(this))
    }
    ,
    Xe.prototype.render = Qe,
    cn = [],
    uc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    Mi.__r = 0,
    cc = 0;
    var O = (e=>(e.ConsentLegal = "consentlegal",
    e.Likert = "likert",
    e.MultipleChoice = "multiplechoice",
    e.MultipleSelect = "multipleselect",
    e.NPS = "nps",
    e.Open = "open",
    e.RecordedTask = "recordedtask",
    e.TextUrlPrompt = "texturlprompt",
    e.Thanks = "thanks",
    e.Uploading = "uploading",
    e.VideoVoice = "videovoice",
    e))(O || {})
      , At = (e=>(e.Answered = "answered",
    e.Equal = "eq",
    e.NotEqual = "neq",
    e.Skipped = "skipped",
    e.LessThan = "lt",
    e.LessThanOrEqual = "lte",
    e.GivenUp = "given_up",
    e.GreaterThan = "gt",
    e.GreaterThanOrEqual = "gte",
    e.ListAll = "list_all",
    e.ListAtLeastOne = "list_alo",
    e.ListExact = "list_exact",
    e.DoesNotInclude = "list_dni",
    e.Contains = "contains",
    e.DoesNotContain = "notcontains",
    e))(At || {})
      , zn = (e=>(e.Camera = "camera",
    e.Microphone = "microphone",
    e.Screen = "screen",
    e))(zn || {})
      , Ge = (e=>(e.AvPermission = "av_permission",
    e.ScreenPermission = "screen_permission",
    e.StartTask = "start_task",
    e.CompleteTask = "complete_task",
    e))(Ge || {})
      , dn = (e=>(e.Number = "number",
    e.Smiley = "smiley",
    e.Star = "star",
    e))(dn || {})
      , Hy = Object.create
      , xc = Object.defineProperty
      , zy = Object.getOwnPropertyDescriptor
      , Ky = Object.getOwnPropertyNames
      , Gy = Object.getPrototypeOf
      , Wy = Object.prototype.hasOwnProperty
      , Or = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , $y = (e,t,n,r)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Ky(t))
                !Wy.call(e, i) && i !== n && xc(e, i, {
                    get: ()=>t[i],
                    enumerable: !(r = zy(t, i)) || r.enumerable
                });
        return e
    }
      , qy = (e,t,n)=>(n = e != null ? Hy(Gy(e)) : {},
    $y(t || !e || !e.__esModule ? xc(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , Zy = Or((e,t)=>{
        var n;
        typeof window < "u" ? n = window : typeof global < "u" ? n = global : typeof self < "u" ? n = self : n = {},
        t.exports = n
    }
    )
      , Yy = Or((e,t)=>{
        t.exports = r;
        var n = Object.prototype.toString;
        function r(i) {
            if (!i)
                return !1;
            var o = n.call(i);
            return o === "[object Function]" || typeof i == "function" && o !== "[object RegExp]" || typeof window < "u" && (i === window.setTimeout || i === window.alert || i === window.confirm || i === window.prompt)
        }
    }
    )
      , Qy = Or((e,t)=>{
        var n = function(i) {
            return i.replace(/^\s+|\s+$/g, "")
        }
          , r = function(i) {
            return Object.prototype.toString.call(i) === "[object Array]"
        };
        t.exports = function(i) {
            if (!i)
                return {};
            for (var o = {}, a = n(i).split(`
`), s = 0; s < a.length; s++) {
                var l = a[s]
                  , u = l.indexOf(":")
                  , c = n(l.slice(0, u)).toLowerCase()
                  , d = n(l.slice(u + 1));
                typeof o[c] > "u" ? o[c] = d : r(o[c]) ? o[c].push(d) : o[c] = [o[c], d]
            }
            return o
        }
    }
    )
      , Xy = Or((e,t)=>{
        t.exports = r;
        var n = Object.prototype.hasOwnProperty;
        function r() {
            for (var i = {}, o = 0; o < arguments.length; o++) {
                var a = arguments[o];
                for (var s in a)
                    n.call(a, s) && (i[s] = a[s])
            }
            return i
        }
    }
    )
      , Jy = Or((e,t)=>{
        var n = Zy()
          , r = Yy()
          , i = Qy()
          , o = Xy();
        t.exports = u,
        t.exports.default = u,
        u.XMLHttpRequest = n.XMLHttpRequest || f,
        u.XDomainRequest = "withCredentials"in new u.XMLHttpRequest ? u.XMLHttpRequest : n.XDomainRequest,
        a(["get", "put", "post", "patch", "head", "delete"], function(p) {
            u[p === "delete" ? "del" : p] = function(h, m, g) {
                return m = l(h, m, g),
                m.method = p.toUpperCase(),
                c(m)
            }
        });
        function a(p, h) {
            for (var m = 0; m < p.length; m++)
                h(p[m])
        }
        function s(p) {
            for (var h in p)
                if (p.hasOwnProperty(h))
                    return !1;
            return !0
        }
        function l(p, h, m) {
            var g = p;
            return r(h) ? (m = h,
            typeof p == "string" && (g = {
                uri: p
            })) : g = o(h, {
                uri: p
            }),
            g.callback = m,
            g
        }
        function u(p, h, m) {
            return h = l(p, h, m),
            c(h)
        }
        function c(p) {
            if (typeof p.callback > "u")
                throw new Error("callback argument missing");
            var h = !1
              , m = function(A, j, ee) {
                h || (h = !0,
                p.callback(A, j, ee))
            };
            function g() {
                y.readyState === 4 && setTimeout(b, 0)
            }
            function _() {
                var A = void 0;
                if (y.response ? A = y.response : A = y.responseText || d(y),
                N)
                    try {
                        A = JSON.parse(A)
                    } catch {}
                return A
            }
            function v(A) {
                return clearTimeout(k),
                A instanceof Error || (A = new Error("" + (A || "Unknown XMLHttpRequest Error"))),
                A.statusCode = 0,
                m(A, D)
            }
            function b() {
                if (!S) {
                    var A;
                    clearTimeout(k),
                    p.useXDR && y.status === void 0 ? A = 200 : A = y.status === 1223 ? 204 : y.status;
                    var j = D
                      , ee = null;
                    return A !== 0 ? (j = {
                        body: _(),
                        statusCode: A,
                        method: E,
                        headers: {},
                        url: I,
                        rawRequest: y
                    },
                    y.getAllResponseHeaders && (j.headers = i(y.getAllResponseHeaders()))) : ee = new Error("Internal XMLHttpRequest Error"),
                    m(ee, j, j.body)
                }
            }
            var y = p.xhr || null;
            y || (p.cors || p.useXDR ? y = new u.XDomainRequest : y = new u.XMLHttpRequest);
            var C, S, I = y.url = p.uri || p.url, E = y.method = p.method || "GET", x = p.body || p.data, R = y.headers = p.headers || {}, T = !!p.sync, N = !1, k, D = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: E,
                url: I,
                rawRequest: y
            };
            if ("json"in p && p.json !== !1 && (N = !0,
            R.accept || R.Accept || (R.Accept = "application/json"),
            E !== "GET" && E !== "HEAD" && (R["content-type"] || R["Content-Type"] || (R["Content-Type"] = "application/json"),
            x = JSON.stringify(p.json === !0 ? x : p.json))),
            y.onreadystatechange = g,
            y.onload = b,
            y.onerror = v,
            y.onprogress = function() {}
            ,
            y.onabort = function() {
                S = !0
            }
            ,
            y.ontimeout = v,
            y.open(E, I, !T, p.username, p.password),
            T || (y.withCredentials = !!p.withCredentials),
            !T && p.timeout > 0 && (k = setTimeout(function() {
                if (!S) {
                    S = !0,
                    y.abort("timeout");
                    var A = new Error("XMLHttpRequest timeout");
                    A.code = "ETIMEDOUT",
                    v(A)
                }
            }, p.timeout)),
            y.setRequestHeader)
                for (C in R)
                    R.hasOwnProperty(C) && y.setRequestHeader(C, R[C]);
            else if (p.headers && !s(p.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in p && (y.responseType = p.responseType),
            "beforeSend"in p && typeof p.beforeSend == "function" && p.beforeSend(y),
            y.send(x || null),
            y
        }
        function d(p) {
            try {
                if (p.responseType === "document")
                    return p.responseXML;
                var h = p.responseXML && p.responseXML.documentElement.nodeName === "parsererror";
                if (p.responseType === "" && !h)
                    return p.responseXML
            } catch {}
            return null
        }
        function f() {}
    }
    );
    function Va(e, t, ...n) {
        if (!e)
            throw new TypeError(Ac(t, n))
    }
    function Ac(e, t) {
        let n = 0;
        return e.replace(/%[os]/gu, ()=>Tc(t[n++]))
    }
    function Tc(e) {
        return typeof e != "object" || e === null ? String(e) : Object.prototype.toString.call(e)
    }
    var e0;
    function t0(e) {
        try {
            let t = e instanceof Error ? e : new Error(Tc(e));
            if (typeof dispatchEvent == "function" && typeof ErrorEvent == "function")
                dispatchEvent(new ErrorEvent("error",{
                    error: t,
                    message: t.message
                }));
            else if (typeof process < "u" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        } catch {}
    }
    var Je = typeof window < "u" ? window : typeof self < "u" ? self : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : void 0, n0, Tt = class {
        constructor(e, t) {
            this.code = e,
            this.message = t
        }
        warn(...e) {
            var t;
            try {
                let n = ((t = new Error().stack) !== null && t !== void 0 ? t : "").replace(/^(?:.+?\n){2}/gu, `
`);
                console.warn(this.message, ...e, n)
            } catch {}
        }
    }
    , r0 = new Tt("W01","Unable to initialize event under dispatching."), i0 = new Tt("W02","Assigning any falsy value to 'cancelBubble' property has no effect."), o0 = new Tt("W03","Assigning any truthy value to 'returnValue' property has no effect."), a0 = new Tt("W04","Unable to preventDefault on non-cancelable events."), s0 = new Tt("W05","Unable to preventDefault inside passive event listener invocation."), l0 = new Tt("W06","An event listener wasn't added because it has been added already: %o, %o"), Ba = new Tt("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."), Rc = new Tt("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
    new Tt("W09","Event attribute handler must be a function: %o");
    var Rt = class {
        static get NONE() {
            return Lc
        }
        static get CAPTURING_PHASE() {
            return Oc
        }
        static get AT_TARGET() {
            return Nc
        }
        static get BUBBLING_PHASE() {
            return Dc
        }
        constructor(e, t) {
            Object.defineProperty(this, "isTrusted", {
                value: !1,
                enumerable: !0
            });
            let n = t != null ? t : {};
            ja.set(this, {
                type: String(e),
                bubbles: Boolean(n.bubbles),
                cancelable: Boolean(n.cancelable),
                composed: Boolean(n.composed),
                target: null,
                currentTarget: null,
                stopPropagationFlag: !1,
                stopImmediatePropagationFlag: !1,
                canceledFlag: !1,
                inPassiveListenerFlag: !1,
                dispatchFlag: !1,
                timeStamp: Date.now()
            })
        }
        get type() {
            return ge(this).type
        }
        get target() {
            return ge(this).target
        }
        get srcElement() {
            return ge(this).target
        }
        get currentTarget() {
            return ge(this).currentTarget
        }
        composedPath() {
            let e = ge(this).currentTarget;
            return e ? [e] : []
        }
        get NONE() {
            return Lc
        }
        get CAPTURING_PHASE() {
            return Oc
        }
        get AT_TARGET() {
            return Nc
        }
        get BUBBLING_PHASE() {
            return Dc
        }
        get eventPhase() {
            return ge(this).dispatchFlag ? 2 : 0
        }
        stopPropagation() {
            ge(this).stopPropagationFlag = !0
        }
        get cancelBubble() {
            return ge(this).stopPropagationFlag
        }
        set cancelBubble(e) {
            e ? ge(this).stopPropagationFlag = !0 : i0.warn()
        }
        stopImmediatePropagation() {
            let e = ge(this);
            e.stopPropagationFlag = e.stopImmediatePropagationFlag = !0
        }
        get bubbles() {
            return ge(this).bubbles
        }
        get cancelable() {
            return ge(this).cancelable
        }
        get returnValue() {
            return !ge(this).canceledFlag
        }
        set returnValue(e) {
            e ? o0.warn() : Uc(ge(this))
        }
        preventDefault() {
            Uc(ge(this))
        }
        get defaultPrevented() {
            return ge(this).canceledFlag
        }
        get composed() {
            return ge(this).composed
        }
        get isTrusted() {
            return !1
        }
        get timeStamp() {
            return ge(this).timeStamp
        }
        initEvent(e, t=!1, n=!1) {
            let r = ge(this);
            if (r.dispatchFlag) {
                r0.warn();
                return
            }
            ja.set(this, {
                ...r,
                type: String(e),
                bubbles: Boolean(t),
                cancelable: Boolean(n),
                target: null,
                currentTarget: null,
                stopPropagationFlag: !1,
                stopImmediatePropagationFlag: !1,
                canceledFlag: !1
            })
        }
    }
      , Lc = 0
      , Oc = 1
      , Nc = 2
      , Dc = 3
      , ja = new WeakMap;
    function ge(e, t="this") {
        let n = ja.get(e);
        return Va(n != null, "'%s' must be an object that Event constructor created, but got another one: %o", t, e),
        n
    }
    function Uc(e) {
        if (e.inPassiveListenerFlag) {
            s0.warn();
            return
        }
        if (!e.cancelable) {
            a0.warn();
            return
        }
        e.canceledFlag = !0
    }
    Object.defineProperty(Rt, "NONE", {
        enumerable: !0
    }),
    Object.defineProperty(Rt, "CAPTURING_PHASE", {
        enumerable: !0
    }),
    Object.defineProperty(Rt, "AT_TARGET", {
        enumerable: !0
    }),
    Object.defineProperty(Rt, "BUBBLING_PHASE", {
        enumerable: !0
    });
    var Ha = Object.getOwnPropertyNames(Rt.prototype);
    for (let e = 0; e < Ha.length; ++e)
        Ha[e] !== "constructor" && Object.defineProperty(Rt.prototype, Ha[e], {
            enumerable: !0
        });
    typeof Je < "u" && typeof Je.Event < "u" && Object.setPrototypeOf(Rt.prototype, Je.Event.prototype);
    function u0(e) {
        return Je.DOMException ? new Je.DOMException(e,"InvalidStateError") : (Kn == null && (Kn = class Zf extends Error {
            constructor(n) {
                super(n),
                Error.captureStackTrace && Error.captureStackTrace(this, Zf)
            }
            get code() {
                return 11
            }
            get name() {
                return "InvalidStateError"
            }
        }
        ,
        Object.defineProperties(Kn.prototype, {
            code: {
                enumerable: !0
            },
            name: {
                enumerable: !0
            }
        }),
        Mc(Kn),
        Mc(Kn.prototype)),
        new Kn(e))
    }
    var Kn, Pc = {
        INDEX_SIZE_ERR: 1,
        DOMSTRING_SIZE_ERR: 2,
        HIERARCHY_REQUEST_ERR: 3,
        WRONG_DOCUMENT_ERR: 4,
        INVALID_CHARACTER_ERR: 5,
        NO_DATA_ALLOWED_ERR: 6,
        NO_MODIFICATION_ALLOWED_ERR: 7,
        NOT_FOUND_ERR: 8,
        NOT_SUPPORTED_ERR: 9,
        INUSE_ATTRIBUTE_ERR: 10,
        INVALID_STATE_ERR: 11,
        SYNTAX_ERR: 12,
        INVALID_MODIFICATION_ERR: 13,
        NAMESPACE_ERR: 14,
        INVALID_ACCESS_ERR: 15,
        VALIDATION_ERR: 16,
        TYPE_MISMATCH_ERR: 17,
        SECURITY_ERR: 18,
        NETWORK_ERR: 19,
        ABORT_ERR: 20,
        URL_MISMATCH_ERR: 21,
        QUOTA_EXCEEDED_ERR: 22,
        TIMEOUT_ERR: 23,
        INVALID_NODE_TYPE_ERR: 24,
        DATA_CLONE_ERR: 25
    };
    function Mc(e) {
        let t = Object.keys(Pc);
        for (let n = 0; n < t.length; ++n) {
            let r = t[n]
              , i = Pc[r];
            Object.defineProperty(e, r, {
                get() {
                    return i
                },
                configurable: !0,
                enumerable: !0
            })
        }
    }
    var Fi = class extends Rt {
        static wrap(e) {
            return new (Vc(e))(e)
        }
        constructor(e) {
            super(e.type, {
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                composed: e.composed
            }),
            e.cancelBubble && super.stopPropagation(),
            e.defaultPrevented && super.preventDefault(),
            Fc.set(this, {
                original: e
            });
            let t = Object.keys(e);
            for (let n = 0; n < t.length; ++n) {
                let r = t[n];
                r in this || Object.defineProperty(this, r, Bc(e, r))
            }
        }
        stopPropagation() {
            super.stopPropagation();
            let {original: e} = Ht(this);
            "stopPropagation"in e && e.stopPropagation()
        }
        get cancelBubble() {
            return super.cancelBubble
        }
        set cancelBubble(e) {
            super.cancelBubble = e;
            let {original: t} = Ht(this);
            "cancelBubble"in t && (t.cancelBubble = e)
        }
        stopImmediatePropagation() {
            super.stopImmediatePropagation();
            let {original: e} = Ht(this);
            "stopImmediatePropagation"in e && e.stopImmediatePropagation()
        }
        get returnValue() {
            return super.returnValue
        }
        set returnValue(e) {
            super.returnValue = e;
            let {original: t} = Ht(this);
            "returnValue"in t && (t.returnValue = e)
        }
        preventDefault() {
            super.preventDefault();
            let {original: e} = Ht(this);
            "preventDefault"in e && e.preventDefault()
        }
        get timeStamp() {
            let {original: e} = Ht(this);
            return "timeStamp"in e ? e.timeStamp : super.timeStamp
        }
    }
      , Fc = new WeakMap;
    function Ht(e) {
        let t = Fc.get(e);
        return Va(t != null, "'this' is expected an Event object, but got", e),
        t
    }
    var Vi = new WeakMap;
    Vi.set(Object.prototype, Fi),
    typeof Je < "u" && typeof Je.Event < "u" && Vi.set(Je.Event.prototype, Fi);
    function Vc(e) {
        let t = Object.getPrototypeOf(e);
        if (t == null)
            return Fi;
        let n = Vi.get(t);
        return n == null && (n = c0(Vc(t), t),
        Vi.set(t, n)),
        n
    }
    function c0(e, t) {
        class n extends e {
        }
        let r = Object.keys(t);
        for (let i = 0; i < r.length; ++i)
            Object.defineProperty(n.prototype, r[i], Bc(t, r[i]));
        return n
    }
    function Bc(e, t) {
        let n = Object.getOwnPropertyDescriptor(e, t);
        return {
            get() {
                let r = Ht(this).original
                  , i = r[t];
                return typeof i == "function" ? i.bind(r) : i
            },
            set(r) {
                let i = Ht(this).original;
                i[t] = r
            },
            configurable: n.configurable,
            enumerable: n.enumerable
        }
    }
    function d0(e, t, n, r, i, o) {
        return {
            callback: e,
            flags: (t ? 1 : 0) | (n ? 2 : 0) | (r ? 4 : 0),
            signal: i,
            signalListener: o
        }
    }
    function f0(e) {
        e.flags |= 8
    }
    function jc(e) {
        return (e.flags & 1) === 1
    }
    function Hc(e) {
        return (e.flags & 2) === 2
    }
    function zc(e) {
        return (e.flags & 4) === 4
    }
    function p0(e) {
        return (e.flags & 8) === 8
    }
    function h0({callback: e}, t, n) {
        try {
            typeof e == "function" ? e.call(t, n) : typeof e.handleEvent == "function" && e.handleEvent(n)
        } catch (r) {
            t0(r)
        }
    }
    function Kc({listeners: e}, t, n) {
        for (let r = 0; r < e.length; ++r)
            if (e[r].callback === t && jc(e[r]) === n)
                return r;
        return -1
    }
    function m0(e, t, n, r, i, o) {
        let a;
        o && (a = Gc.bind(null, e, t, n),
        o.addEventListener("abort", a));
        let s = d0(t, n, r, i, o, a);
        return e.cow ? (e.cow = !1,
        e.listeners = [...e.listeners, s]) : e.listeners.push(s),
        s
    }
    function Gc(e, t, n) {
        let r = Kc(e, t, n);
        return r !== -1 ? Wc(e, r) : !1
    }
    function Wc(e, t, n=!1) {
        let r = e.listeners[t];
        return f0(r),
        r.signal && r.signal.removeEventListener("abort", r.signalListener),
        e.cow && !n ? (e.cow = !1,
        e.listeners = e.listeners.filter((i,o)=>o !== t),
        !1) : (e.listeners.splice(t, 1),
        !0)
    }
    function g0() {
        return Object.create(null)
    }
    function v0(e, t) {
        var n;
        return (n = e[t]) !== null && n !== void 0 ? n : e[t] = {
            attrCallback: void 0,
            attrListener: void 0,
            cow: !1,
            listeners: []
        }
    }
    var Bi = class {
        constructor() {
            $c.set(this, g0())
        }
        addEventListener(e, t, n) {
            let r = za(this)
              , {callback: i, capture: o, once: a, passive: s, signal: l, type: u} = y0(e, t, n);
            if (i == null || (l == null ? void 0 : l.aborted))
                return;
            let c = v0(r, u)
              , d = Kc(c, i, o);
            if (d !== -1) {
                b0(c.listeners[d], s, a, l);
                return
            }
            m0(c, i, o, s, a, l)
        }
        removeEventListener(e, t, n) {
            let r = za(this)
              , {callback: i, capture: o, type: a} = _0(e, t, n)
              , s = r[a];
            i != null && s && Gc(s, i, o)
        }
        dispatchEvent(e) {
            let t = za(this)[String(e.type)];
            if (t == null)
                return !0;
            let n = e instanceof Rt ? e : Fi.wrap(e)
              , r = ge(n, "event");
            if (r.dispatchFlag)
                throw u0("This event has been in dispatching.");
            if (r.dispatchFlag = !0,
            r.target = r.currentTarget = this,
            !r.stopPropagationFlag) {
                let {cow: i, listeners: o} = t;
                t.cow = !0;
                for (let a = 0; a < o.length; ++a) {
                    let s = o[a];
                    if (!p0(s) && (zc(s) && Wc(t, a, !i) && (a -= 1),
                    r.inPassiveListenerFlag = Hc(s),
                    h0(s, this, n),
                    r.inPassiveListenerFlag = !1,
                    r.stopImmediatePropagationFlag))
                        break
                }
                i || (t.cow = !1)
            }
            return r.target = null,
            r.currentTarget = null,
            r.stopImmediatePropagationFlag = !1,
            r.stopPropagationFlag = !1,
            r.dispatchFlag = !1,
            !r.canceledFlag
        }
    }
      , $c = new WeakMap;
    function za(e, t="this") {
        let n = $c.get(e);
        return Va(n != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", t, e),
        n
    }
    function y0(e, t, n) {
        var r;
        return qc(t),
        typeof n == "object" && n !== null ? {
            type: String(e),
            callback: t != null ? t : void 0,
            capture: Boolean(n.capture),
            passive: Boolean(n.passive),
            once: Boolean(n.once),
            signal: (r = n.signal) !== null && r !== void 0 ? r : void 0
        } : {
            type: String(e),
            callback: t != null ? t : void 0,
            capture: Boolean(n),
            passive: !1,
            once: !1,
            signal: void 0
        }
    }
    function _0(e, t, n) {
        return qc(t),
        typeof n == "object" && n !== null ? {
            type: String(e),
            callback: t != null ? t : void 0,
            capture: Boolean(n.capture)
        } : {
            type: String(e),
            callback: t != null ? t : void 0,
            capture: Boolean(n)
        }
    }
    function qc(e) {
        if (!(typeof e == "function" || typeof e == "object" && e !== null && typeof e.handleEvent == "function")) {
            if (e == null || typeof e == "object") {
                Rc.warn(e);
                return
            }
            throw new TypeError(Ac(Rc.message, [e]))
        }
    }
    function b0(e, t, n, r) {
        l0.warn(jc(e) ? "capture" : "bubble", e.callback),
        Hc(e) !== t && Ba.warn("passive"),
        zc(e) !== n && Ba.warn("once"),
        e.signal !== r && Ba.warn("signal")
    }
    var Ka = Object.getOwnPropertyNames(Bi.prototype);
    for (let e = 0; e < Ka.length; ++e)
        Ka[e] !== "constructor" && Object.defineProperty(Bi.prototype, Ka[e], {
            enumerable: !0
        });
    typeof Je < "u" && typeof Je.EventTarget < "u" && Object.setPrototypeOf(Bi.prototype, Je.EventTarget.prototype);
    var w0 = qy(Jy())
      , Zc = 30720
      , ji = 512e3
      , Hi = 256
      , Ga = (e,{minChunkSize: t=Hi, maxChunkSize: n=ji}={})=>e == null || typeof e == "number" && e >= 256 && e % 256 === 0 && e >= t && e <= n
      , Wa = (e,{minChunkSize: t=Hi, maxChunkSize: n=ji}={})=>new TypeError(`chunkSize ${e} must be a positive number in multiples of 256, between ${t} and ${n}`)
      , C0 = class {
        constructor(e, t={}) {
            this.readableStream = e;
            var n, r, i;
            if (!Ga(t.defaultChunkSize, t))
                throw Wa(t.defaultChunkSize, t);
            this.defaultChunkSize = (n = t.defaultChunkSize) != null ? n : Zc,
            this.minChunkSize = (r = t.minChunkSize) != null ? r : Hi,
            this.maxChunkSize = (i = t.maxChunkSize) != null ? i : ji
        }
        get chunkSize() {
            var e;
            return (e = this._chunkSize) != null ? e : this.defaultChunkSize
        }
        set chunkSize(e) {
            if (!Ga(e, this))
                throw Wa(e, this);
            this._chunkSize = e
        }
        get chunkByteSize() {
            return this.chunkSize * 1024
        }
        async*[Symbol.asyncIterator]() {
            let e, t = this.readableStream.getReader();
            try {
                for (; ; ) {
                    let {done: n, value: r} = await t.read();
                    if (n) {
                        if (e) {
                            let o = e;
                            e = void 0,
                            yield o
                        }
                        break
                    }
                    let i = r instanceof Uint8Array ? new Blob([r],{
                        type: "application/octet-stream"
                    }) : r;
                    for (e = e ? new Blob([e, i]) : i; e; )
                        if (e.size === this.chunkByteSize) {
                            let o = e;
                            e = void 0,
                            yield o;
                            break
                        } else {
                            if (e.size < this.chunkByteSize)
                                break;
                            {
                                let o = e.slice(0, this.chunkByteSize);
                                e = e.slice(this.chunkByteSize),
                                yield o
                            }
                        }
                }
            } finally {
                if (e) {
                    let n = e;
                    e = void 0,
                    yield n
                }
                t.releaseLock();
                return
            }
        }
    }
      , E0 = [200, 201, 202, 204, 308]
      , Yc = [408, 502, 503, 504]
      , Qc = (e,t)=>!!e && E0.includes(e.statusCode)
      , I0 = (e,{retryCodes: t=Yc})=>!e || t.includes(e.statusCode)
      , S0 = (e,t)=>t.attemptCount >= t.attempts || !(Qc(e) || I0(e, t))
      , Xc = class {
        static createUpload(e) {
            return new Xc(e)
        }
        constructor(e) {
            this.endpoint = e.endpoint,
            this.file = e.file,
            this.headers = e.headers || {},
            this.method = e.method || "PUT",
            this.attempts = e.attempts || 5,
            this.delayBeforeAttempt = e.delayBeforeAttempt || 1,
            this.retryCodes = e.retryCodes || Yc,
            this.dynamicChunkSize = e.dynamicChunkSize || !1,
            this.maxFileBytes = (e.maxFileSize || 0) * 1024,
            this.chunkCount = 0,
            this.attemptCount = 0,
            this.offline = !1,
            this._paused = !1,
            this.success = !1,
            this.nextChunkRangeStart = 0,
            this.chunkedStreamIterable = new C0(this.file.stream(),{
                ...e,
                defaultChunkSize: e.chunkSize
            }),
            this.chunkedStreamIterator = this.chunkedStreamIterable[Symbol.asyncIterator](),
            this.totalChunks = Math.ceil(this.file.size / this.chunkByteSize),
            this.eventTarget = new Bi,
            this.validateOptions(),
            this.getEndpoint().then(()=>this.sendChunks()),
            typeof window < "u" && (window.addEventListener("online", ()=>{
                !this.offline || (this.offline = !1,
                this.dispatch("online"),
                this.sendChunks())
            }
            ),
            window.addEventListener("offline", ()=>{
                this.offline = !0,
                this.dispatch("offline")
            }
            ))
        }
        get maxChunkSize() {
            var e, t;
            return (t = (e = this.chunkedStreamIterable) == null ? void 0 : e.maxChunkSize) != null ? t : ji
        }
        get minChunkSize() {
            var e, t;
            return (t = (e = this.chunkedStreamIterable) == null ? void 0 : e.minChunkSize) != null ? t : Hi
        }
        get chunkSize() {
            var e, t;
            return (t = (e = this.chunkedStreamIterable) == null ? void 0 : e.chunkSize) != null ? t : Zc
        }
        set chunkSize(e) {
            this.chunkedStreamIterable.chunkSize = e
        }
        get chunkByteSize() {
            return this.chunkedStreamIterable.chunkByteSize
        }
        get totalChunkSize() {
            return Math.ceil(this.file.size / this.chunkByteSize)
        }
        on(e, t) {
            this.eventTarget.addEventListener(e, t)
        }
        once(e, t) {
            this.eventTarget.addEventListener(e, t, {
                once: !0
            })
        }
        off(e, t) {
            this.eventTarget.removeEventListener(e, t)
        }
        get paused() {
            return this._paused
        }
        abort() {
            var e;
            this.pause(),
            (e = this.currentXhr) == null || e.abort()
        }
        pause() {
            this._paused = !0
        }
        resume() {
            this._paused && (this._paused = !1,
            this.sendChunks())
        }
        dispatch(e, t) {
            let n = new CustomEvent(e,{
                detail: t
            });
            this.eventTarget.dispatchEvent(n)
        }
        validateOptions() {
            if (!this.endpoint || typeof this.endpoint != "function" && typeof this.endpoint != "string")
                throw new TypeError("endpoint must be defined as a string or a function that returns a promise");
            if (!(this.file instanceof File))
                throw new TypeError("file must be a File object");
            if (this.headers && typeof this.headers != "function" && typeof this.headers != "object")
                throw new TypeError("headers must be null, an object, or a function that returns an object or a promise");
            if (!Ga(this.chunkSize, {
                maxChunkSize: this.maxChunkSize,
                minChunkSize: this.minChunkSize
            }))
                throw Wa(this.chunkSize, {
                    maxChunkSize: this.maxChunkSize,
                    minChunkSize: this.minChunkSize
                });
            if (this.maxChunkSize && (typeof this.maxChunkSize != "number" || this.maxChunkSize < 256 || this.maxChunkSize % 256 !== 0 || this.maxChunkSize < this.chunkSize || this.maxChunkSize < this.minChunkSize))
                throw new TypeError(`maxChunkSize must be a positive number in multiples of 256, and larger than or equal to both ${this.minChunkSize} and ${this.chunkSize}`);
            if (this.minChunkSize && (typeof this.minChunkSize != "number" || this.minChunkSize < 256 || this.minChunkSize % 256 !== 0 || this.minChunkSize > this.chunkSize || this.minChunkSize > this.maxChunkSize))
                throw new TypeError(`minChunkSize must be a positive number in multiples of 256, and smaller than ${this.chunkSize} and ${this.maxChunkSize}`);
            if (this.maxFileBytes > 0 && this.maxFileBytes < this.file.size)
                throw new Error(`file size exceeds maximum (${this.file.size} > ${this.maxFileBytes})`);
            if (this.attempts && (typeof this.attempts != "number" || this.attempts <= 0))
                throw new TypeError("retries must be a positive number");
            if (this.delayBeforeAttempt && (typeof this.delayBeforeAttempt != "number" || this.delayBeforeAttempt < 0))
                throw new TypeError("delayBeforeAttempt must be a positive number")
        }
        getEndpoint() {
            return typeof this.endpoint == "string" ? (this.endpointValue = this.endpoint,
            Promise.resolve(this.endpoint)) : this.endpoint(this.file).then(e=>(this.endpointValue = e,
            this.endpointValue))
        }
        xhrPromise(e) {
            let t = n=>{
                n.upload.onprogress = r=>{
                    var i;
                    let o = this.totalChunks - this.chunkCount
                      , a = (this.file.size - this.nextChunkRangeStart) / this.file.size / o
                      , s = this.nextChunkRangeStart / this.file.size
                      , l = r.loaded / ((i = r.total) != null ? i : this.chunkByteSize) * a;
                    this.dispatch("progress", Math.min((s + l) * 100, 100))
                }
            }
            ;
            return new Promise((n,r)=>{
                this.currentXhr = (0,
                w0.default)({
                    ...e,
                    beforeSend: t
                }, (i,o)=>(this.currentXhr = void 0,
                i ? r(i) : n(o)))
            }
            )
        }
        async sendChunk(e) {
            let t = this.nextChunkRangeStart
              , n = t + e.size - 1
              , r = {
                ...await (typeof this.headers == "function" ? this.headers() : this.headers),
                "Content-Type": this.file.type,
                "Content-Range": `bytes ${t}-${n}/${this.file.size}`
            };
            return this.dispatch("attempt", {
                chunkNumber: this.chunkCount,
                totalChunks: this.totalChunks,
                chunkSize: this.chunkSize
            }),
            this.xhrPromise({
                headers: r,
                url: this.endpointValue,
                method: this.method,
                body: e
            })
        }
        async sendChunkWithRetries(e) {
            let t = async(a,s)=>{
                var l;
                let u = (new Date().getTime() - this.lastChunkStart.getTime()) / 1e3;
                if (this.dispatch("chunkSuccess", {
                    chunk: this.chunkCount,
                    chunkSize: this.chunkSize,
                    attempts: this.attemptCount,
                    timeInterval: u,
                    response: a
                }),
                this.attemptCount = 0,
                this.chunkCount = ((l = this.chunkCount) != null ? l : 0) + 1,
                this.nextChunkRangeStart = this.nextChunkRangeStart + this.chunkByteSize,
                this.dynamicChunkSize) {
                    let c = this.chunkSize;
                    u < 10 ? c = Math.min(this.chunkSize * 2, this.maxChunkSize) : u > 30 && (c = Math.max(this.chunkSize / 2, this.minChunkSize)),
                    this.chunkSize = Math.ceil(c / 256) * 256;
                    let d = (this.file.size - this.nextChunkRangeStart) / this.chunkByteSize;
                    this.totalChunks = Math.ceil(this.chunkCount + d)
                }
                return !0
            }
            , n = async(a,s)=>(this.dispatch("error", {
                message: `Server responded with ${a.statusCode}. Stopping upload.`,
                chunk: this.chunkCount,
                attempts: this.attemptCount
            }),
            !1), r = async(a,s)=>(this.dispatch("attemptFailure", {
                message: `An error occured uploading chunk ${this.chunkCount}. ${this.attempts - this.attemptCount} retries left.`,
                chunkNumber: this.chunkCount,
                attemptsLeft: this.attempts - this.attemptCount
            }),
            new Promise(l=>{
                setTimeout(async()=>{
                    if (this._paused || this.offline) {
                        this.pendingChunk = e,
                        l(!1);
                        return
                    }
                    let u = await this.sendChunkWithRetries(e);
                    l(u)
                }
                , this.delayBeforeAttempt * 1e3)
            }
            )), i;
            try {
                this.attemptCount = this.attemptCount + 1,
                this.lastChunkStart = new Date,
                i = await this.sendChunk(e)
            } catch {}
            let o = {
                retryCodes: this.retryCodes,
                attemptCount: this.attemptCount,
                attempts: this.attempts
            };
            return Qc(i) ? t(i) : S0(i, o) ? n(i) : r()
        }
        async sendChunks() {
            if (this.pendingChunk && !(this._paused || this.offline)) {
                let e = this.pendingChunk;
                this.pendingChunk = void 0;
                let t = await this.sendChunkWithRetries(e);
                this.success && t && this.dispatch("success")
            }
            for (; !(this.success || this._paused || this.offline); ) {
                let {value: e, done: t} = await this.chunkedStreamIterator.next()
                  , n = !e && t;
                if (e && (n = await this.sendChunkWithRetries(e)),
                this.success = !!t,
                this.success && n && this.dispatch("success"),
                !n)
                    return
            }
        }
    }
      , k0 = Xc.createUpload
      , et = (e=>(e.Video = "video",
    e.Audio = "audio",
    e.Screen = "screen",
    e))(et || {})
      , Te = (e=>(e.PermissionStatus = "permission.status",
    e.AvPermission = "av.permission",
    e.ScreenPermission = "screen.permission",
    e.BeginRecording = "begin.recording",
    e.StartTask = "start.task",
    e.FinishTask = "finish.task",
    e))(Te || {})
      , We = (e=>(e.Abandoned = "abandoned",
    e.GivenUp = "given.up",
    e.Completed = "completed",
    e))(We || {})
      , q = (e=>(e.ScreenPermissionRequested = "screen.permission.requested",
    e.PermissionDescriptors = "permission.descriptors",
    e.PermissionStatusCallback = "permission.status.callback",
    e.StreamReadyCallback = "stream.ready.callback",
    e.StreamCanceledCallback = "stream.canceled.callback",
    e.TaskCompleteCallback = "task.complete.callback",
    e.TaskResponse = "task.response",
    e.TaskStatus = "task.status",
    e.RecordingMediaTypes = "recording.media.types",
    e.StartRecordingCallback = "start.recording.callback",
    e.PassthroughData = "passthrough.data",
    e.CurrentIndex = "current.index",
    e.UploadCallback = "upload.callback",
    e.ProgressCallback = "progress.callback",
    e.BeginCallback = "begin.callback",
    e))(q || {});
    const Jc = e=>{
        let t;
        const n = new Set
          , r = (l,u)=>{
            const c = typeof l == "function" ? l(t) : l;
            if (!Object.is(c, t)) {
                const d = t;
                t = (u != null ? u : typeof c != "object") ? c : Object.assign({}, t, c),
                n.forEach(f=>f(t, d))
            }
        }
          , i = ()=>t
          , s = {
            setState: r,
            getState: i,
            subscribe: l=>(n.add(l),
            ()=>n.delete(l)),
            destroy: ()=>n.clear()
        };
        return t = e(r, i, s),
        s
    }
      , x0 = e=>e ? Jc(e) : Jc;
    var zt, ae, $a, ed, Gn = 0, td = [], zi = [], nd = P.__b, rd = P.__r, id = P.diffed, od = P.__c, ad = P.unmount;
    function fn(e, t) {
        P.__h && P.__h(ae, e, Gn || t),
        Gn = 0;
        var n = ae.__H || (ae.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({
            __V: zi
        }),
        n.__[e]
    }
    function Se(e) {
        return Gn = 1,
        qa(fd, e)
    }
    function qa(e, t, n) {
        var r = fn(zt++, 2);
        if (r.t = e,
        !r.__c && (r.__ = [n ? n(t) : fd(void 0, t), function(o) {
            var a = r.__N ? r.__N[0] : r.__[0]
              , s = r.t(a, o);
            a !== s && (r.__N = [s, r.__[1]],
            r.__c.setState({}))
        }
        ],
        r.__c = ae,
        !ae.u)) {
            ae.u = !0;
            var i = ae.shouldComponentUpdate;
            ae.shouldComponentUpdate = function(o, a, s) {
                if (!r.__c.__H)
                    return !0;
                var l = r.__c.__H.__.filter(function(c) {
                    return c.__c
                });
                if (l.every(function(c) {
                    return !c.__N
                }))
                    return !i || i.call(this, o, a, s);
                var u = !1;
                return l.forEach(function(c) {
                    if (c.__N) {
                        var d = c.__[0];
                        c.__ = c.__N,
                        c.__N = void 0,
                        d !== c.__[0] && (u = !0)
                    }
                }),
                !(!u && r.__c.props === o) && (!i || i.call(this, o, a, s))
            }
        }
        return r.__N || r.__
    }
    function $e(e, t) {
        var n = fn(zt++, 3);
        !P.__s && Qa(n.__H, t) && (n.__ = e,
        n.i = t,
        ae.__H.__h.push(n))
    }
    function Nr(e, t) {
        var n = fn(zt++, 4);
        !P.__s && Qa(n.__H, t) && (n.__ = e,
        n.i = t,
        ae.__h.push(n))
    }
    function Kt(e) {
        return Gn = 5,
        Ki(function() {
            return {
                current: e
            }
        }, [])
    }
    function sd(e, t, n) {
        Gn = 6,
        Nr(function() {
            return typeof e == "function" ? (e(t()),
            function() {
                return e(null)
            }
            ) : e ? (e.current = t(),
            function() {
                return e.current = null
            }
            ) : void 0
        }, n == null ? n : n.concat(e))
    }
    function Ki(e, t) {
        var n = fn(zt++, 7);
        return Qa(n.__H, t) ? (n.__V = e(),
        n.i = t,
        n.__h = e,
        n.__V) : n.__
    }
    function ld(e, t) {
        return Gn = 8,
        Ki(function() {
            return e
        }, t)
    }
    function ud(e) {
        var t = ae.context[e.__c]
          , n = fn(zt++, 9);
        return n.c = e,
        t ? (n.__ == null && (n.__ = !0,
        t.sub(ae)),
        t.props.value) : e.__
    }
    function Za(e, t) {
        P.useDebugValue && P.useDebugValue(t ? t(e) : e)
    }
    function A0(e) {
        var t = fn(zt++, 10)
          , n = Se();
        return t.__ = e,
        ae.componentDidCatch || (ae.componentDidCatch = function(r, i) {
            t.__ && t.__(r, i),
            n[1](r)
        }
        ),
        [n[0], function() {
            n[1](void 0)
        }
        ]
    }
    function cd() {
        var e = fn(zt++, 11);
        if (!e.__) {
            for (var t = ae.__v; t !== null && !t.__m && t.__ !== null; )
                t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++
        }
        return e.__
    }
    function T0() {
        for (var e; e = td.shift(); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(Gi),
                    e.__H.__h.forEach(Ya),
                    e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [],
                    P.__e(t, e.__v)
                }
    }
    P.__b = function(e) {
        ae = null,
        nd && nd(e)
    }
    ,
    P.__r = function(e) {
        rd && rd(e),
        zt = 0;
        var t = (ae = e.__c).__H;
        t && ($a === ae ? (t.__h = [],
        ae.__h = [],
        t.__.forEach(function(n) {
            n.__N && (n.__ = n.__N),
            n.__V = zi,
            n.__N = n.i = void 0
        })) : (t.__h.forEach(Gi),
        t.__h.forEach(Ya),
        t.__h = [])),
        $a = ae
    }
    ,
    P.diffed = function(e) {
        id && id(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (td.push(t) !== 1 && ed === P.requestAnimationFrame || ((ed = P.requestAnimationFrame) || R0)(T0)),
        t.__H.__.forEach(function(n) {
            n.i && (n.__H = n.i),
            n.__V !== zi && (n.__ = n.__V),
            n.i = void 0,
            n.__V = zi
        })),
        $a = ae = null
    }
    ,
    P.__c = function(e, t) {
        t.some(function(n) {
            try {
                n.__h.forEach(Gi),
                n.__h = n.__h.filter(function(r) {
                    return !r.__ || Ya(r)
                })
            } catch (r) {
                t.some(function(i) {
                    i.__h && (i.__h = [])
                }),
                t = [],
                P.__e(r, n.__v)
            }
        }),
        od && od(e, t)
    }
    ,
    P.unmount = function(e) {
        ad && ad(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach(function(r) {
            try {
                Gi(r)
            } catch (i) {
                t = i
            }
        }),
        n.__H = void 0,
        t && P.__e(t, n.__v))
    }
    ;
    var dd = typeof requestAnimationFrame == "function";
    function R0(e) {
        var t, n = function() {
            clearTimeout(r),
            dd && cancelAnimationFrame(t),
            setTimeout(e)
        }, r = setTimeout(n, 100);
        dd && (t = requestAnimationFrame(n))
    }
    function Gi(e) {
        var t = ae
          , n = e.__c;
        typeof n == "function" && (e.__c = void 0,
        n()),
        ae = t
    }
    function Ya(e) {
        var t = ae;
        e.__c = e.__(),
        ae = t
    }
    function Qa(e, t) {
        return !e || e.length !== t.length || t.some(function(n, r) {
            return n !== e[r]
        })
    }
    function fd(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function pd(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function Xa(e, t) {
        for (var n in e)
            if (n !== "__source" && !(n in t))
                return !0;
        for (var r in t)
            if (r !== "__source" && e[r] !== t[r])
                return !0;
        return !1
    }
    function Ja(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t
    }
    function Wi(e) {
        this.props = e
    }
    function hd(e, t) {
        function n(i) {
            var o = this.props.ref
              , a = o == i.ref;
            return !a && o && (o.call ? o(null) : o.current = null),
            t ? !t(this.props, i) || !a : Xa(this.props, i)
        }
        function r(i) {
            return this.shouldComponentUpdate = n,
            pe(e, i)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
        r.prototype.isReactComponent = !0,
        r.__f = !0,
        r
    }
    (Wi.prototype = new Xe).isPureReactComponent = !0,
    Wi.prototype.shouldComponentUpdate = function(e, t) {
        return Xa(this.props, e) || Xa(this.state, t)
    }
    ;
    var md = P.__b;
    P.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
        e.ref = null),
        md && md(e)
    }
    ;
    var L0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    function gd(e) {
        function t(n) {
            var r = pd({}, n);
            return delete r.ref,
            e(r, n.ref || null)
        }
        return t.$$typeof = L0,
        t.render = t,
        t.prototype.isReactComponent = t.__f = !0,
        t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
        t
    }
    var vd = function(e, t) {
        return e == null ? null : xt(xt(e).map(t))
    }
      , yd = {
        map: vd,
        forEach: vd,
        count: function(e) {
            return e ? xt(e).length : 0
        },
        only: function(e) {
            var t = xt(e);
            if (t.length !== 1)
                throw "Children.only";
            return t[0]
        },
        toArray: xt
    }
      , O0 = P.__e;
    P.__e = function(e, t, n, r) {
        if (e.then) {
            for (var i, o = t; o = o.__; )
                if ((i = o.__c) && i.__c)
                    return t.__e == null && (t.__e = n.__e,
                    t.__k = n.__k),
                    i.__c(e, t)
        }
        O0(e, t, n, r)
    }
    ;
    var _d = P.unmount;
    function bd(e, t, n) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
            typeof r.__c == "function" && r.__c()
        }),
        e.__c.__H = null),
        (e = pd({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t),
        e.__c = null),
        e.__k = e.__k && e.__k.map(function(r) {
            return bd(r, t, n)
        })),
        e
    }
    function wd(e, t, n) {
        return e && (e.__v = null,
        e.__k = e.__k && e.__k.map(function(r) {
            return wd(r, t, n)
        }),
        e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d),
        e.__c.__e = !0,
        e.__c.__P = n)),
        e
    }
    function Dr() {
        this.__u = 0,
        this.t = null,
        this.__b = null
    }
    function Cd(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }
    function Ed(e) {
        var t, n, r;
        function i(o) {
            if (t || (t = e()).then(function(a) {
                n = a.default || a
            }, function(a) {
                r = a
            }),
            r)
                throw r;
            if (!n)
                throw t;
            return pe(n, o)
        }
        return i.displayName = "Lazy",
        i.__f = !0,
        i
    }
    function Wn() {
        this.u = null,
        this.o = null
    }
    P.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(),
        t && e.__h === !0 && (e.type = null),
        _d && _d(e)
    }
    ,
    (Dr.prototype = new Xe).__c = function(e, t) {
        var n = t.__c
          , r = this;
        r.t == null && (r.t = []),
        r.t.push(n);
        var i = Cd(r.__v)
          , o = !1
          , a = function() {
            o || (o = !0,
            n.__R = null,
            i ? i(s) : s())
        };
        n.__R = a;
        var s = function() {
            if (!--r.__u) {
                if (r.state.__a) {
                    var u = r.state.__a;
                    r.__v.__k[0] = wd(u, u.__c.__P, u.__c.__O)
                }
                var c;
                for (r.setState({
                    __a: r.__b = null
                }); c = r.t.pop(); )
                    c.forceUpdate()
            }
        }
          , l = t.__h === !0;
        r.__u++ || l || r.setState({
            __a: r.__b = r.__v.__k[0]
        }),
        e.then(a, a)
    }
    ,
    Dr.prototype.componentWillUnmount = function() {
        this.t = []
    }
    ,
    Dr.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div")
                  , r = this.__v.__k[0].__c;
                this.__v.__k[0] = bd(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var i = t.__a && pe(Qe, null, e.fallback);
        return i && (i.__h = null),
        [pe(Qe, null, t.__a ? null : e.children), i]
    }
    ;
    var Id = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t),
        e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
            for (n = e.u; n; ) {
                for (; n.length > 3; )
                    n.pop()();
                if (n[1] < n[0])
                    break;
                e.u = n = n[2]
            }
    };
    function N0(e) {
        return this.getChildContext = function() {
            return e.context
        }
        ,
        e.children
    }
    function D0(e) {
        var t = this
          , n = e.i;
        t.componentWillUnmount = function() {
            Hn(null, t.l),
            t.l = null,
            t.i = null
        }
        ,
        t.i && t.i !== n && t.componentWillUnmount(),
        e.__v ? (t.l || (t.i = n,
        t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(r) {
                this.childNodes.push(r),
                t.i.appendChild(r)
            },
            insertBefore: function(r, i) {
                this.childNodes.push(r),
                t.i.appendChild(r)
            },
            removeChild: function(r) {
                this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.i.removeChild(r)
            }
        }),
        Hn(pe(N0, {
            context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }
    function Sd(e, t) {
        var n = pe(D0, {
            __v: e,
            i: t
        });
        return n.containerInfo = t,
        n
    }
    (Wn.prototype = new Xe).__a = function(e) {
        var t = this
          , n = Cd(t.__v)
          , r = t.o.get(e);
        return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i),
                Id(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
    }
    ,
    Wn.prototype.render = function(e) {
        this.u = null,
        this.o = new Map;
        var t = xt(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var n = t.length; n--; )
            this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }
    ,
    Wn.prototype.componentDidUpdate = Wn.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach(function(t, n) {
            Id(e, n, t)
        })
    }
    ;
    var kd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
      , U0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
      , P0 = typeof document < "u"
      , M0 = function(e) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
    function xd(e, t, n) {
        return t.__k == null && (t.textContent = ""),
        Hn(e, t),
        typeof n == "function" && n(),
        e ? e.__c : null
    }
    function Ad(e, t, n) {
        return Sc(e, t),
        typeof n == "function" && n(),
        e ? e.__c : null
    }
    Xe.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
        Object.defineProperty(Xe.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var Td = P.event;
    function F0() {}
    function V0() {
        return this.cancelBubble
    }
    function B0() {
        return this.defaultPrevented
    }
    P.event = function(e) {
        return Td && (e = Td(e)),
        e.persist = F0,
        e.isPropagationStopped = V0,
        e.isDefaultPrevented = B0,
        e.nativeEvent = e
    }
    ;
    var Rd, Ld = {
        configurable: !0,
        get: function() {
            return this.class
        }
    }, Od = P.vnode;
    P.vnode = function(e) {
        var t = e.type
          , n = e.props
          , r = n;
        if (typeof t == "string") {
            var i = t.indexOf("-") === -1;
            for (var o in r = {},
            n) {
                var a = n[o];
                P0 && o === "children" && t === "noscript" || o === "value" && "defaultValue"in n && a == null || (o === "defaultValue" && "value"in n && n.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !M0(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && U0.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0),
                /^oninput$/i.test(o) && (o = o.toLowerCase(),
                r[o] && (o = "oninputCapture")),
                r[o] = a)
            }
            t == "select" && r.multiple && Array.isArray(r.value) && (r.value = xt(n.children).forEach(function(s) {
                s.props.selected = r.value.indexOf(s.props.value) != -1
            })),
            t == "select" && r.defaultValue != null && (r.value = xt(n.children).forEach(function(s) {
                s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value
            })),
            e.props = r,
            n.class != n.className && (Ld.enumerable = "className"in n,
            n.className != null && (r.class = n.className),
            Object.defineProperty(r, "className", Ld))
        }
        e.$$typeof = kd,
        Od && Od(e)
    }
    ;
    var Nd = P.__r;
    P.__r = function(e) {
        Nd && Nd(e),
        Rd = e.__c
    }
    ;
    var Dd = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return Rd.__n[e.__c].props.value
                }
            }
        }
    }
      , j0 = "17.0.2";
    function Ud(e) {
        return pe.bind(null, e)
    }
    function es(e) {
        return !!e && e.$$typeof === kd
    }
    function Pd(e) {
        return es(e) ? jy.apply(null, arguments) : e
    }
    function Md(e) {
        return !!e.__k && (Hn(null, e),
        !0)
    }
    function Fd(e) {
        return e && (e.base || e.nodeType === 1 && e) || null
    }
    var Vd = function(e, t) {
        return e(t)
    }
      , Bd = function(e, t) {
        return e(t)
    }
      , jd = Qe;
    function ts(e) {
        e()
    }
    function Hd(e) {
        return e
    }
    function zd() {
        return [!1, ts]
    }
    var Kd = Nr;
    function Gd(e, t) {
        var n = t()
          , r = Se({
            h: {
                __: n,
                v: t
            }
        })
          , i = r[0].h
          , o = r[1];
        return Nr(function() {
            i.__ = n,
            i.v = t,
            Ja(i.__, t()) || o({
                h: i
            })
        }, [e, n, t]),
        $e(function() {
            return Ja(i.__, i.v()) || o({
                h: i
            }),
            e(function() {
                Ja(i.__, i.v()) || o({
                    h: i
                })
            })
        }, [e]),
        n
    }
    var H0 = {
        useState: Se,
        useId: cd,
        useReducer: qa,
        useEffect: $e,
        useLayoutEffect: Nr,
        useInsertionEffect: Kd,
        useTransition: zd,
        useDeferredValue: Hd,
        useSyncExternalStore: Gd,
        startTransition: ts,
        useRef: Kt,
        useImperativeHandle: sd,
        useMemo: Ki,
        useCallback: ld,
        useContext: ud,
        useDebugValue: Za,
        version: "17.0.2",
        Children: yd,
        render: xd,
        hydrate: Ad,
        unmountComponentAtNode: Md,
        createPortal: Sd,
        createElement: pe,
        createContext: kc,
        createFactory: Ud,
        cloneElement: Pd,
        createRef: pc,
        Fragment: Qe,
        isValidElement: es,
        findDOMNode: Fd,
        Component: Xe,
        PureComponent: Wi,
        memo: hd,
        forwardRef: gd,
        flushSync: Bd,
        unstable_batchedUpdates: Vd,
        StrictMode: jd,
        Suspense: Dr,
        SuspenseList: Wn,
        lazy: Ed,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Dd
    };
    const z0 = Object.freeze(Object.defineProperty({
        __proto__: null,
        Children: yd,
        PureComponent: Wi,
        StrictMode: jd,
        Suspense: Dr,
        SuspenseList: Wn,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Dd,
        cloneElement: Pd,
        createFactory: Ud,
        createPortal: Sd,
        default: H0,
        findDOMNode: Fd,
        flushSync: Bd,
        forwardRef: gd,
        hydrate: Ad,
        isValidElement: es,
        lazy: Ed,
        memo: hd,
        render: xd,
        startTransition: ts,
        unmountComponentAtNode: Md,
        unstable_batchedUpdates: Vd,
        useDeferredValue: Hd,
        useInsertionEffect: Kd,
        useSyncExternalStore: Gd,
        useTransition: zd,
        version: j0,
        Component: Xe,
        Fragment: Qe,
        createContext: kc,
        createElement: pe,
        createRef: pc,
        useCallback: ld,
        useContext: ud,
        useDebugValue: Za,
        useEffect: $e,
        useErrorBoundary: A0,
        useId: cd,
        useImperativeHandle: sd,
        useLayoutEffect: Nr,
        useMemo: Ki,
        useReducer: qa,
        useRef: Kt,
        useState: Se
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var Wd = {
        exports: {}
    }
      , $d = {};
    const qd = Yt(z0);
    var Zd = {
        exports: {}
    }
      , Yd = {};
    /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var $n = qd;
    function K0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var G0 = typeof Object.is == "function" ? Object.is : K0
      , W0 = $n.useState
      , $0 = $n.useEffect
      , q0 = $n.useLayoutEffect
      , Z0 = $n.useDebugValue;
    function Y0(e, t) {
        var n = t()
          , r = W0({
            inst: {
                value: n,
                getSnapshot: t
            }
        })
          , i = r[0].inst
          , o = r[1];
        return q0(function() {
            i.value = n,
            i.getSnapshot = t,
            ns(i) && o({
                inst: i
            })
        }, [e, n, t]),
        $0(function() {
            return ns(i) && o({
                inst: i
            }),
            e(function() {
                ns(i) && o({
                    inst: i
                })
            })
        }, [e]),
        Z0(n),
        n
    }
    function ns(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !G0(e, n)
        } catch {
            return !0
        }
    }
    function Q0(e, t) {
        return t()
    }
    var X0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Q0 : Y0;
    Yd.useSyncExternalStore = $n.useSyncExternalStore !== void 0 ? $n.useSyncExternalStore : X0,
    function(e) {
        e.exports = Yd
    }(Zd);
    /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var $i = qd
      , J0 = Zd.exports;
    function e_(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var t_ = typeof Object.is == "function" ? Object.is : e_
      , n_ = J0.useSyncExternalStore
      , r_ = $i.useRef
      , i_ = $i.useEffect
      , o_ = $i.useMemo
      , a_ = $i.useDebugValue;
    $d.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
        var o = r_(null);
        if (o.current === null) {
            var a = {
                hasValue: !1,
                value: null
            };
            o.current = a
        } else
            a = o.current;
        o = o_(function() {
            function l(p) {
                if (!u) {
                    if (u = !0,
                    c = p,
                    p = r(p),
                    i !== void 0 && a.hasValue) {
                        var h = a.value;
                        if (i(h, p))
                            return d = h
                    }
                    return d = p
                }
                if (h = d,
                t_(c, p))
                    return h;
                var m = r(p);
                return i !== void 0 && i(h, m) ? h : (c = p,
                d = m)
            }
            var u = !1, c, d, f = n === void 0 ? null : n;
            return [function() {
                return l(t())
            }
            , f === null ? void 0 : function() {
                return l(f())
            }
            ]
        }, [t, n, r, i]);
        var s = n_(e, o[0], o[1]);
        return i_(function() {
            a.hasValue = !0,
            a.value = s
        }, [s]),
        a_(s),
        s
    }
    ,
    function(e) {
        e.exports = $d
    }(Wd);
    const s_ = gt(Wd.exports)
      , {useSyncExternalStoreWithSelector: l_} = s_;
    function u_(e, t=e.getState, n) {
        const r = l_(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
        return Za(r),
        r
    }
    const Qd = e=>{
        const t = typeof e == "function" ? x0(e) : e
          , n = (r,i)=>u_(t, r, i);
        return Object.assign(n, t),
        n
    }
      , Xd = e=>e ? Qd(e) : Qd;
    var rs = (e=>(e[e.And = 1] = "And",
    e[e.Or = 2] = "Or",
    e))(rs || {});
    const Jd = 1
      , is = {
        eq(e, t) {
            return e == t
        },
        neq(e, t) {
            return !this.eq(e, t)
        },
        gt(e, t) {
            return e > t
        },
        gte(e, t) {
            return e >= t
        },
        lt(e, t) {
            return e < t
        },
        lte(e, t) {
            return e <= t
        },
        list_exact(e, t) {
            return !Array.isArray(e) || !Array.isArray(t) ? !1 : e.slice().sort().join(",") === t.slice().sort().join(",")
        },
        list_all(e, t) {
            return !Array.isArray(e) || !Array.isArray(t) ? !1 : !t.some(n=>e.indexOf(n) === -1)
        },
        list_alo(e, t) {
            if (!Array.isArray(t))
                return !1;
            const n = Array.isArray(e) ? e : [e]
              , r = new Set(n);
            return t.some(i=>r.has(i))
        },
        list_dni(e, t) {
            if (!Array.isArray(t))
                return !1;
            const n = Array.isArray(e) ? e : [e]
              , r = new Set(n);
            return t.every(i=>!r.has(i))
        },
        contains(e, t) {
            const n = e.toLowerCase()
              , r = t.toLowerCase();
            return n.includes(r)
        },
        notcontains(e, t) {
            return !this.contains(e, t)
        }
    }
      , c_ = (e,t,n)=>{
        switch (t) {
        case O.VideoVoice:
            return Boolean(e && e.value);
        case O.Open:
            return !!n;
        case O.MultipleSelect:
            return Boolean(n && !!Object.keys(n).length);
        case O.RecordedTask:
            return (n == null ? void 0 : n.taskStatus) === We.Completed;
        case O.TextUrlPrompt:
            return !e.value;
        case O.ConsentLegal:
            return n !== null;
        case O.MultipleChoice:
            return n !== void 0;
        case O.NPS:
            return n !== null;
        case O.Likert:
            return n !== null;
        default:
            return !0
        }
    }
      , ef = ({cards: e, index: t, hasEndCard: n, allResponses: r, uploadProgress: i={}})=>{
        if (t >= e.length || t < 0)
            return null;
        const o = e[t];
        let a = t + 1;
        const s = o.props.routingOptions || [];
        for (let c = 0; c < s.length; c++) {
            const {group: d, target: f} = s[c];
            if (!(d != null && d.length))
                continue;
            const p = d[0];
            if (p.questionIndex === void 0 || p.questionIndex > r.length)
                continue;
            let h = tf({
                comparator: p.comparator,
                response: r[p.questionIndex],
                type: o.type,
                value: p.value
            });
            for (let m = 1; m < d.length; m += 2) {
                const g = d[m]
                  , _ = d[m + 1]
                  , v = tf({
                    comparator: _.comparator,
                    response: r[_.questionIndex],
                    type: e[_.questionIndex].type,
                    value: _.value
                });
                g === rs.And ? h && (h = v) : g === rs.Or && (h || (h = v))
            }
            if (h) {
                a = f === -1 && n ? e.length - 1 : f;
                break
            }
        }
        const l = e.findIndex(c=>c.type === O.Uploading);
        let u;
        return l > 0 ? u = n ? e.length - 3 : e.length - 2 : u = e.length - 1,
        t >= u || a === -1 || a !== null && a > u ? l > 0 && Object.values(i).some(d=>d.isSubmitted && !d.isComplete) ? l : n ? e.length - 1 : null : a === -1 ? null : a
    }
      , tf = ({comparator: e, response: t, type: n, value: r})=>{
        if (e === At.Answered)
            switch (n) {
            case O.TextUrlPrompt:
                return t === void 0;
            case O.ConsentLegal:
                return t && t.submitted === !0;
            case O.RecordedTask:
                return "taskStatus"in t && t.taskStatus === We.Completed;
            case O.Likert:
                return Number.isInteger(t);
            case O.Open:
                return t && t.length > 0;
            case O.MultipleChoice:
            case O.MultipleSelect:
                return Object.keys(t).length > 0;
            case O.NPS:
                return Number.isInteger(t);
            case O.VideoVoice:
                return !!(t != null && t.mediaRecordingUid);
            default:
                return !1
            }
        if (e === At.Skipped)
            switch (n) {
            case O.TextUrlPrompt:
                return t == null ? void 0 : t.skipped;
            case O.ConsentLegal:
                return t === null;
            case O.RecordedTask:
                return "taskStatus"in t && t.taskStatus === We.Abandoned;
            case O.Likert:
                return t === null;
            case O.Open:
                return (t == null ? void 0 : t.length) === 0;
            case O.MultipleChoice:
                return t === void 0;
            case O.MultipleSelect:
                return (t == null ? void 0 : t.length) === 0;
            case O.NPS:
                return t === null;
            case O.VideoVoice:
                return t === null;
            default:
                return !1
            }
        return e === At.GivenUp ? n === O.RecordedTask ? "taskStatus"in t && t.taskStatus === We.GivenUp : !0 : is[e](t, r)
    }
      , d_ = 13
      , f_ = (e,t)=>e.reduce((n,r)=>n.concat(n.map(i=>[...i, r])), [[]]).filter(n=>t || n.length > 0)
      , p_ = e=>{
        var t, n;
        switch (e.type) {
        case O.MultipleSelect:
            return !e || !e.props || !e.props.options ? null : e.props.options.length > d_ ? e.props.options.map(r=>[r.value]) : f_(e.props.options.map(r=>r.value), !e.props.properties.required);
        case O.MultipleChoice:
            {
                if (!e || !e.props || !e.props.options)
                    return null;
                const r = e.props.options.map(i=>i.value);
                return e.props.properties.required || r.push(void 0),
                r
            }
        case O.Likert:
            {
                const r = Number((n = (t = e.props) == null ? void 0 : t.properties) == null ? void 0 : n.range) || 5;
                return [...Array.from(Array(r).keys()).map(o=>o + 1), ...e.props.properties.required ? [] : [null]]
            }
        case O.NPS:
            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...e.props.properties.required ? [] : [null]];
        case O.VideoVoice:
        case O.Open:
            return ["1", ...e.props.properties.required ? [] : [""]];
        case O.RecordedTask:
            return [{
                taskStatus: We.Completed
            }, {
                taskStatus: We.GivenUp
            }, ...e.props.properties.required ? [] : [{
                taskStatus: We.Abandoned
            }]];
        case O.TextUrlPrompt:
            return [void 0, ...e.props.properties.required ? [] : [{
                skipped: !0
            }]];
        case O.ConsentLegal:
            return [Jd, ...e.props.properties.required ? [] : [null]];
        default:
            return [Jd]
        }
    }
      , h_ = e=>e in is
      , m_ = e=>typeof e == "object" && e !== null && "taskStatus"in e
      , g_ = (e,t=[])=>t.reduce((n,r)=>{
        const {group: i, target: o} = r;
        if (!(i != null && i.length))
            return [...n];
        const a = i.filter(s=>Number(s) ? !0 : typeof s == "object" ? s.questionIndex === e : !1).map(s=>{
            const {comparator: l, value: u} = s;
            return {
                comparator: l,
                target: o,
                value: u
            }
        }
        );
        return [...n, ...a]
    }
    , [])
      , v_ = (e,t)=>{
        const n = new Set([O.Thanks, O.Uploading]);
        if (t >= e.length || t < 0 || n.has(e[t].type))
            return 0;
        const r = e.filter(o=>!n.has(o.type));
        if (t === r.length - 1)
            return 1;
        const i = {
            [r.length - 1]: 1,
            [-1]: 0
        };
        for (let o = r.length - 2; o >= t; o--) {
            const a = r[o]
              , s = g_(o, a.props.routingOptions);
            if (s.length === 0) {
                i[o] = i[o + 1] + 1;
                continue
            }
            let l = 0
              , u = p_(a);
            if (u === null)
                return r.length - 1 - t;
            for (let c = 0; c < s.length && u.length !== 0; c++) {
                const {comparator: d, target: f, value: p} = s[c]
                  , h = u.filter(m=>{
                    const g = c_({
                        value: m
                    }, a.type, m);
                    return !(g && d === At.Answered || !g && d === At.Skipped || d === At.GivenUp && m_(m) && m.taskStatus === We.GivenUp || g && a.type === O.Open && (d === At.Contains || d === At.DoesNotContain) || g && h_(d) && is[d](m, p))
                }
                );
                if (h.length < u.length) {
                    const m = parseInt(String(f), 10);
                    if (m !== -1 && m <= o || m >= r.length)
                        return r.length - 1 - t;
                    l = Math.max(i[m] + 1, l)
                }
                u = h
            }
            u.length > 0 && (l = Math.max(i[o + 1] + 1, l)),
            i[o] = l
        }
        return i[t]
    }
      , y_ = e=>!(e.type === O.Thanks || e.type === O.Uploading)
      , le = Xd()((e,t)=>({
        allResponses: [],
        answers: void 0,
        apiURL: "",
        border: "#000000",
        cards: [],
        close: async(n=bn)=>{
            const r = t()
              , {fadeout: i, remove: o, trackHistory: a} = r;
            await i(n),
            os(r) || a({
                event: "closed"
            }),
            ko.enable(),
            o({
                initiator: vt.Closed
            })
        }
        ,
        configureExitOnOverlayClick: ()=>{}
        ,
        customMetadata: {},
        destroy: async n=>{
            const {eventEmitFn: r, fadeout: i, remove: o} = t();
            r(Ke.SurveyComplete),
            await i(n),
            ko.enable(),
            o({
                initiator: vt.Complete
            })
        }
        ,
        endCard: {
            headline: ""
        },
        envId: "",
        eventEmitFn: W.emit.bind(W),
        fadeout: async n=>{
            const {eventEmitFn: r, headers: i, viewDocument: o} = t();
            return En(i) ? Promise.resolve() : (r(z.SurveyFadingOut),
            new Promise(a=>{
                const s = o.getElementById(n);
                s ? (s.addEventListener("transitionend", ()=>{
                    a()
                }
                ),
                s.classList.remove("ul-app--visible")) : a()
            }
            ))
        }
        ,
        frame: document.createElement("iframe"),
        handleClickEmbedButton: n=>{
            const {cards: r, eventEmitFn: i, index: o} = t();
            i(n, {
                [Xt.QuestionId]: r[o].name,
                [Xt.Props]: r[o].props
            }),
            e(()=>({
                hasViewedEmbed: !0
            }))
        }
        ,
        handleUploadUpdate: ({mediaRecordingUid: n, isComplete: r, progressPct: i, isSubmitted: o})=>{
            var f, p, h;
            const {cards: a, destroy: s, index: l, uploadProgress: u} = t()
              , c = {
                ...u,
                [n]: {
                    progressPct: i || i === 0 ? i : (f = u[n]) == null ? void 0 : f.progressPct,
                    isComplete: r || ((p = u[n]) == null ? void 0 : p.isComplete),
                    isSubmitted: o || ((h = u[n]) == null ? void 0 : h.isSubmitted)
                }
            };
            if (a[l].type !== O.Uploading) {
                e({
                    uploadProgress: c
                });
                return
            }
            const d = Object.entries(u).every(([m,g])=>!g.isSubmitted || g.isComplete || n == m && r);
            if (d && l >= a.length - 1) {
                s(bn);
                return
            }
            e({
                index: d ? l + 1 : l,
                uploadingCardViewed: !0,
                uploadProgress: c
            })
        }
        ,
        hasViewedEmbed: !1,
        headers: {
            Authorization: "",
            "Content-Type": "",
            "userleap-platform": Jt.Web,
            "x-ul-environment-id": "",
            "x-ul-installation-method": Cn.Snippet,
            "x-ul-sdk-version": "",
            "x-ul-visitor-id": ""
        },
        index: 0,
        isPreview: !1,
        marketingUrl: "https://sprig.com",
        meta: {
            ch: 0,
            cw: 0,
            l: "",
            mode: null,
            p: "",
            sh: 0,
            sw: 0
        },
        mode: void 0,
        next: n=>{
            const {allResponses: r, cards: i, eventEmitFn: o, index: a, responseGroupUid: s, submit: l, trackHistory: u, uploadProgress: c, viewedCardCount: d} = t()
              , f = Date.now()
              , p = [...i]
              , h = p[a]
              , {type: m} = n.data
              , g = {
                ...n.data
            }
              , _ = g.value;
            y_(h) && (h.value = _),
            g.answeredAt = f,
            delete g.type;
            const v = {
                response: g,
                responseGroupUid: s,
                questionIndex: a
            };
            let b = m === O.MultipleChoice ? Object.values(_).find(E=>E !== !1) : _;
            m === O.MultipleSelect && (b = p[a].props.options.reduce((E,x)=>(_[x.id] && E.push(x.value),
            E), []));
            const y = r.slice(0);
            y[a] = b,
            e({
                allResponses: y
            });
            const C = ef({
                cards: p,
                index: a,
                hasEndCard: !!n.endCard,
                uploadProgress: c,
                allResponses: y
            });
            if (C === null) {
                v.completedAt = f,
                l(v),
                n.completeSurvey();
                return
            } else
                [O.Thanks, O.Uploading].includes(p[C].type) && (v.completedAt = f);
            const S = l(v);
            [O.Thanks, O.Uploading].includes(p[C].type) || S.finally(()=>{
                u({
                    event: "seen",
                    index: C
                })
            }
            );
            const I = p[C];
            p[C] && o && o(Ke.CurrentQuestion, {
                [Xt.QuestionId]: I.name,
                [Xt.Props]: I.props
            }),
            e({
                cards: p,
                hasViewedEmbed: !1,
                index: C,
                viewedCardCount: d + 1
            })
        }
        ,
        previewKey: null,
        recorder: ()=>{}
        ,
        recorderEventEmitter: W,
        responseGroupUid: "",
        remove: ({initiator: n})=>{
            const {frame: r, headers: i, eventEmitFn: o} = t();
            ["ios", "android"].includes(i["userleap-platform"]) && o(z.SurveyWillClose, {
                name: z.SurveyWillClose,
                initiator: n
            }),
            !En(i) && (o(z.SurveyWillClose, {
                name: z.SurveyWillClose,
                initiator: n
            }),
            r.remove())
        }
        ,
        seen: async()=>{
            const {trackHistory: n} = t();
            return n({
                event: "seen",
                isNew: !0
            })
        }
        ,
        slugName: null,
        showStripes: !1,
        showSurveyBrand: !1,
        styleNonce: "",
        submit: async({completedAt: n, questionIndex: r, response: i, responseGroupUid: o})=>{
            const a = t();
            if (!o || os(a))
                return;
            const s = {
                responseGroupUid: o,
                meta: a.meta,
                customMetadata: a.customMetadata,
                responses: [i],
                completedAt: n,
                previewKey: a.previewKey
            };
            n && Uy({
                id: a.surveyId
            });
            const l = await at(`${a.apiURL}/sdk/1/environments/${a.envId}/visitors/${a.userId}/responses/submit`, {
                body: JSON.stringify(s),
                headers: a.headers,
                method: "POST"
            });
            if (!l.ok) {
                l.reportError && (console.warn("[Sprig] (ERR-427) Failed to submit response", l.error),
                await nf(a, "submitResponse", l.error));
                return
            }
            a.eventEmitFn(z.QuestionAnswered, {
                ...i,
                questionIndex: r
            })
        }
        ,
        surveyId: 0,
        tabTitle: "",
        trackHistory: async({event: n, index: r, isNew: i=!1})=>{
            const o = t();
            if (os(o))
                return;
            const {cards: a, index: s} = o
              , l = r !== void 0 ? a[r] : a[s]
              , u = {
                sid: o.surveyId,
                qid: l.name,
                action: n,
                vid: o.userId,
                eid: o.envId,
                isNew: i,
                responseGroupUid: o.responseGroupUid,
                previewKey: o.previewKey
            }
              , c = await at(`${o.apiURL}/sdk/1/visitors/${o.userId}/surveys/${o.surveyId}/history`, {
                body: JSON.stringify(u),
                headers: o.headers,
                method: "POST"
            });
            !c.ok && c.reportError && (console.warn("[Sprig] (ERR-428) Failed to track survey event", c.error),
            await nf(o, "trackHistory", c.error))
        }
        ,
        update: ()=>{
            const {headers: n, eventEmitFn: r, frame: i, viewDocument: o} = t();
            setTimeout(()=>{
                var s;
                const a = dl(o);
                En(n) ? r(z.SurveyHeight, {
                    name: z.SurveyHeight,
                    contentFrameHeight: a
                }) : (s = i.setHeight) == null || s.call(i, a)
            }
            , 100)
        }
        ,
        uploadingCardViewed: !1,
        uploadProgress: {},
        useDesktopPrototype: void 0,
        useMobileStyling: !1,
        userId: "",
        viewDocument: window.document,
        viewedCardCount: 0
    }))
      , os = e=>!e.userId || e.meta && e.meta.mode === "test" || e.isPreview
      , nf = async(e,t,n)=>{
        const {mode: r, userId: i, envId: o, apiURL: a, headers: s, viewDocument: l} = e
          , u = l.documentElement
          , c = {
            mode: r,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            clientWidth: u.clientWidth,
            clientHeight: u.clientHeight,
            location: window.location.href,
            language: window.navigator.language
        }
          , d = {
            action: t,
            err: {
                message: n == null ? void 0 : n.message,
                stack: n == null ? void 0 : n.stack
            },
            meta: c,
            vid: i,
            envId: o
        };
        (await at(`${a}/sdk/1/errors`, {
            method: "POST",
            headers: Object.assign({
                "x-ul-error": window.btoa(`userleap-${Date.now()}-error`)
            }, s),
            body: JSON.stringify(d)
        })).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", n)
    }
      , __ = async(e,t)=>{
        var r;
        const n = await fetch(t, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (n.ok) {
            const i = await n.json();
            return (r = i == null ? void 0 : i.upload) == null ? void 0 : r.url
        } else
            return null
    }
      , rf = ()=>MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4"
      , of = e=>{
        const t = {
            audioBitsPerSecond: 128e3,
            videoBitsPerSecond: 25e5,
            mimeType: rf()
        };
        return new MediaRecorder(e,t)
    }
      , af = (e,t,n)=>{
        n[t] = [],
        e.ondataavailable = function(r) {
            n[t].push(r.data)
        }
        ,
        e.currentMediaRecordingUid = t,
        e.start()
    }
    ;
    function sf(e, t, n, r, i) {
        if (e && e.state !== "inactive") {
            const {[q.BeginCallback]: o} = r
              , a = e.currentMediaRecordingUid;
            if (!a)
                return;
            o && o(a),
            e.onstop = ()=>b_(t, n, r, a, i),
            e.stop()
        }
    }
    async function b_(e, t, n, r, i) {
        const o = le.getState().viewDocument
          , {[q.UploadCallback]: a, [q.ProgressCallback]: s} = n
          , l = {
            mediaType: t,
            updatedAt: new Date().toISOString(),
            mediaRecordingUid: r,
            ...n[q.PassthroughData]
        }
          , u = await __(l, e);
        if (!u) {
            a && a(null, {
                message: "failed to get upload url"
            });
            return
        }
        const c = new Blob(i,{
            type: rf()
        });
        if (!o.defaultView)
            return;
        const d = new o.defaultView.File([c],`recording video ${Date.now()}`)
          , f = k0({
            endpoint: u,
            file: d,
            chunkSize: 5120
        });
        f.on("error", p=>{
            a && a(null, p)
        }
        ),
        f.on("progress", p=>{
            s && s(r, p)
        }
        ),
        f.on("success", ()=>{
            a && a(r, !0)
        }
        )
    }
    const w_ = {
        state: {
            ...{
                chunks: {}
            }
        },
        stopRecording(e) {
            const {uploadApiEndpoint: t, avRecorder: n, screenRecorder: r} = this.state
              , i = this.state.avStream && this.state.avStream.getVideoTracks().length > 0 ? et.Video : et.Audio;
            this.state.chunks && t && (n != null && n.currentMediaRecordingUid && sf(n, t, i, e, this.state.chunks[n == null ? void 0 : n.currentMediaRecordingUid]),
            r != null && r.currentMediaRecordingUid && sf(r, t, et.Screen, e, this.state.chunks[r == null ? void 0 : r.currentMediaRecordingUid]))
        },
        handleCancelledStream(e) {
            const t = e.getVideoTracks()
              , n = e.getAudioTracks();
            let r = t.length && t[0];
            r = r || n.length && n[0],
            r && r.addEventListener("ended", ()=>{
                [this.state.avRecorder, this.state.screenRecorder].map(i=>{
                    i && (i.state === "recording" && i.stop(),
                    i.stream.getTracks().map(o=>{
                        o.readyState === "live" && o.stop()
                    }
                    ))
                }
                ),
                Object.assign(this.state, {
                    avStream: null,
                    captureStream: null,
                    avRecorder: null,
                    screenRecorder: null
                })
            }
            )
        },
        taskDurationMillisecond() {
            return this.state.startTime ? new Date().getTime() - this.state.startTime.getTime() : 0
        },
        configure(e, t) {
            Object.assign(this.state, t),
            this.state.uploadApiEndpoint = `${t.apiURL}/2/environments/integrations/upload`,
            this.state.chunks = {},
            e.on(Te.PermissionStatus, this.permissionStatusCallback.bind(this)),
            e.on(Te.AvPermission, async n=>{
                this.avPermissionCallback(n)
            }
            ),
            e.on(Te.BeginRecording, this.beginRecordingCallback.bind(this)),
            e.on(Te.StartTask, this.startTaskCallback.bind(this)),
            e.on(Te.ScreenPermission, async n=>{
                this.screenPermissionCallback(n)
            }
            ),
            e.on(Te.FinishTask, async n=>{
                this.finishTaskCallback(n)
            }
            )
        },
        async avPermissionCallback(e) {
            var r, i, o;
            const {[q.StreamReadyCallback]: t, [q.PermissionDescriptors]: n} = e;
            try {
                (r = this.state.avStream) != null && r.active && (this.state.avStream.getTracks().map(a=>a.readyState === "live" && a.stop()),
                ((i = this.state.captureStream) == null ? void 0 : i.getAudioTracks().length) === 1 && this.state.captureStream.removeTrack(this.state.captureStream.getAudioTracks()[0])),
                this.state.avStream = await navigator.mediaDevices.getUserMedia({
                    video: n.includes(zn.Camera),
                    audio: !0
                }),
                ((o = this.state.captureStream) == null ? void 0 : o.getAudioTracks().length) === 0 && this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]),
                this.handleCancelledStream(this.state.avStream)
            } catch (a) {
                console.warn("Error: failed to get permissions: " + a),
                t && t(null, null);
                return
            }
            t && t(this.state.avStream, this.state.captureStream)
        },
        async screenPermissionCallback(e) {
            const {[q.ScreenPermissionRequested]: t, [q.StreamReadyCallback]: n} = e;
            t == null || t(!0);
            try {
                this.state.captureStream = await navigator.mediaDevices.getDisplayMedia({
                    video: !0,
                    cursor: "always",
                    displaySurface: "browser",
                    preferCurrentTab: !0
                })
            } catch (r) {
                t == null || t(!1),
                console.warn("Error: failed to get permissions: " + r),
                n && n(null, null);
                return
            }
            t == null || t(!1),
            this.state.avStream && this.state.avStream.getAudioTracks().length > 0 && this.state.captureStream.addTrack(this.state.avStream.getAudioTracks()[0]),
            this.handleCancelledStream(this.state.captureStream),
            n && n(this.state.avStream || null, this.state.captureStream)
        },
        beginRecordingCallback(e) {
            const {[q.RecordingMediaTypes]: t, [q.StartRecordingCallback]: n} = e;
            if (!t)
                return;
            const r = [];
            if (t.includes(et.Video) && this.state.avStream) {
                this.state.avRecorder = of(this.state.avStream);
                const i = Nt();
                af(this.state.avRecorder, i, this.state.chunks),
                r.push(i)
            }
            if (t.includes(et.Screen) && this.state.captureStream) {
                this.state.screenRecorder = of(this.state.captureStream);
                const i = Nt();
                af(this.state.screenRecorder, i, this.state.chunks),
                r.push(i)
            }
            r && n && n(r)
        },
        async finishTaskCallback(e) {
            const {[q.CurrentIndex]: t, [q.TaskResponse]: n, [q.TaskCompleteCallback]: r} = e;
            await this.stopRecording(e),
            r && r(this.taskDurationMillisecond()),
            this.state.cards && this.state.hasEndCard !== void 0 && this.lookAheadAndStopStream(t, n, this.state.cards, this.state.hasEndCard)
        },
        startTaskCallback() {
            this.state.startTime = new Date
        },
        permissionStatusCallback(e) {
            var r;
            const {[q.PermissionStatusCallback]: t} = e
              , n = this.state.avStream;
            t && t(n, n ? (n == null ? void 0 : n.getVideoTracks().length) > 0 : !1, !!((r = this.state.captureStream) != null && r.active), this.state.captureStream)
        },
        lookAheadAndStopStream(e, t, n, r) {
            const {avRecorder: i, screenRecorder: o} = this.state
              , {allResponses: a} = le.getState()
              , s = ef({
                cards: n,
                index: e,
                hasEndCard: r,
                allResponses: a
            });
            s !== null && n[s].type === O.RecordedTask || [i, o].map(l=>{
                l && (l.state === "recording" && l.stop(),
                l.stream.getTracks().map(u=>{
                    u.readyState === "live" && u.stop()
                }
                ))
            }
            )
        }
    }
      , as = Object.create(w_);
    Object.freeze(as);
    function lf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number")
            r += e;
        else if (typeof e == "object")
            if (Array.isArray(e))
                for (t = 0; t < e.length; t++)
                    e[t] && (n = lf(e[t])) && (r && (r += " "),
                    r += n);
            else
                for (t in e)
                    e[t] && (r && (r += " "),
                    r += t);
        return r
    }
    function B() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = lf(e)) && (r && (r += " "),
            r += t);
        return r
    }
    var C_ = 0;
    function w(e, t, n, r, i, o) {
        var a, s, l = {};
        for (s in t)
            s == "ref" ? a = t[s] : l[s] = t[s];
        var u = {
            type: e,
            props: l,
            key: n,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --C_,
            __source: i,
            __self: o
        };
        if (typeof e == "function" && (a = e.defaultProps))
            for (s in a)
                l[s] === void 0 && (l[s] = a[s]);
        return P.vnode && P.vnode(u),
        u
    }
    const je = e=>w("button", {
        ...e,
        className: B("ul-card-text__button", e.className),
        id: "ul-card-text__button"
    })
      , ct = ({message: e, properties: t})=>{
        const n = t == null ? void 0 : t.captionText;
        return w(Qe, {
            children: [e && w("h1", {
                className: L.QuestionHeader,
                id: L.QuestionHeader,
                ...n ? {} : {
                    style: {
                        marginBottom: "15px"
                    }
                },
                children: e
            }), n && w("p", {
                className: L.Caption,
                id: L.Caption,
                children: n
            })]
        })
    }
      , uf = ({buttonText: e="View Prototype", handleClick: t})=>w("button", {
        className: "prototype-button",
        onClick: t,
        children: e
    }, "prototype-btn")
      , Gt = ({defaultBody: e, embeddedType: t="prototype", properties: n})=>{
        var d;
        const {handleClickEmbedButton: r, hasViewedEmbed: i, headers: o, useDesktopPrototype: a} = le(f=>({
            handleClickEmbedButton: f.handleClickEmbedButton,
            hasViewedEmbed: f.hasViewedEmbed,
            headers: f.headers,
            useDesktopPrototype: f.useDesktopPrototype
        }))
          , s = (n == null ? void 0 : n.conceptUrl) || ((d = n == null ? void 0 : n.consentDocument) == null ? void 0 : d.url)
          , l = window.innerWidth < Qh
          , u = o["userleap-platform"]
          , c = (f,p)=>{
            f.preventDefault(),
            r(p)
        }
        ;
        if (!a && l && !i && s && ["email", "link"].includes(u)) {
            if (t === "prototype")
                return w(uf, {
                    handleClick: f=>{
                        c(f, Ke.ViewPrototypeClick)
                    }
                });
            if (t === "pdf")
                return w(uf, {
                    buttonText: (n == null ? void 0 : n.viewDocumentText) || "View Document",
                    handleClick: f=>{
                        c(f, Ke.ViewAgreementClick)
                    }
                })
        }
        return e()
    }
      , cf = (e,t)=>{
        const n = Kt(0)
          , r = ()=>{
            if (e.current) {
                const i = e.current;
                i.style.height = "1px";
                const o = i.scrollHeight
                  , a = i.offsetHeight - i.clientHeight
                  , s = o + a
                  , l = parseInt(window.getComputedStyle(i).getPropertyValue("max-height"))
                  , u = s <= l ? s : l;
                n.current !== u && t(),
                n.current = u,
                i.style.height = `${u}px`
            }
        }
        ;
        return $e(r, []),
        r
    }
      , df = ({border: e, label: t, isSelected: n, value: r, text: i, id: o, isRadio: a, useMobileStyling: s, error: l, allowTextEntry: u, promptText: c, onUserInputChanged: d})=>{
        const {styleNonce: f, viewDocument: p} = le(x=>({
            styleNonce: x.styleNonce,
            viewDocument: x.viewDocument
        }))
          , [h,m] = Se(!1);
        S_(p, e, f);
        const g = ({isSelected: x, userText: R})=>{
            d && d({
                id: o || "",
                selected: x,
                value: r,
                userText: R
            })
        }
          , _ = x=>{
            x.stopPropagation(),
            g({
                isSelected: a || !n,
                userText: i
            }),
            m(!1)
        }
          , v = ()=>{
            h || m(!0)
        }
          , b = ()=>{
            h && m(!1)
        }
          , y = x=>{
            er(x.target) || (x.key === "Enter" || x.key === " ") && _(x)
        }
          , C = {
            onClick: x=>_(x),
            onKeyPress: x=>y(x)
        };
        "ontouchstart"in p.documentElement ? (C.onTouchStart = b,
        C.onTouchCancel = b,
        C.onTouchEnd = b) : (C.onMouseDown = v,
        C.onMouseLeave = b);
        const S = a ? `radio-${o}` : `checkbox-${o}`
          , I = n || h ? [qi] : []
          , E = [...l ? [pf] : [], ...I];
        return w("div", {
            className: B([...ve(L.Choice, s), ...E]),
            id: `choice-div-${o}`,
            style: l ? {
                borderColor: Jn
            } : {},
            ...C,
            children: [w("div", {
                className: B([L.ChoiceLabelContainer]),
                children: [a ? w("div", {
                    "aria-labelledby": `label-${o}`,
                    className: B([L.ChoiceRadio, ...I]),
                    id: S,
                    role: "radio",
                    tabIndex: 0
                }) : w("div", {
                    "aria-checked": n,
                    "aria-labelledby": `label-${o}`,
                    className: L.ChoiceCheckbox,
                    id: S,
                    role: "checkbox",
                    style: n ? {
                        backgroundColor: e,
                        borderColor: e,
                        boxShadow: "none"
                    } : {},
                    tabIndex: 0,
                    children: n && w("svg", {
                        fill: "none",
                        height: "10",
                        viewBox: "0 0 10 10",
                        width: "10",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: w("path", {
                            d: "M9.15377 1.30774L4.07685 8.23082L1.30762 5.00005",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeWidth: "2"
                        })
                    })
                }), w("label", {
                    className: B(ve(L.ChoiceLabel, s)),
                    htmlFor: S,
                    id: `label-${o}`,
                    children: t
                })]
            }), u && n && w("div", {
                className: B([L.ChoiceTextEntryContainer, ...I]),
                children: w(E_, {
                    onTextChange: x=>g({
                        isSelected: n,
                        userText: x
                    }),
                    promptText: c || "Please specify",
                    textValue: i,
                    useMobileStyling: s
                })
            })]
        })
    }
      , E_ = ({promptText: e, textValue: t, onTextChange: n, useMobileStyling: r})=>{
        const i = Kt(null)
          , {update: o} = le(s=>({
            update: s.update
        }))
          , a = cf(i, ()=>o());
        return $e(()=>{
            i.current && i.current.focus()
        }
        , []),
        w("textarea", {
            "aria-label": e,
            "aria-multiline": "true",
            "aria-placeholder": e,
            className: B(ve(L.ChoiceTextInput, r)),
            "data-gramm": "false",
            maxLength: 5e3,
            name: "text",
            onChange: s=>{
                a(),
                er(s.target) && (s.stopPropagation(),
                n(s.target.value))
            }
            ,
            onClick: s=>{
                s.stopPropagation()
            }
            ,
            onKeyPress: s=>{
                s.stopPropagation()
            }
            ,
            placeholder: e,
            ref: i,
            role: "textbox",
            rows: 1,
            value: t
        })
    }
      , ff = "ul-select-style-element"
      , qi = "ul-select-active-dynamic-style"
      , pf = "ul-select-error-dynamic-style"
      , I_ = e=>e.tagName.toLowerCase() === "style"
      , S_ = (e,t,n)=>{
        let r = e.getElementById(ff)
          , i = !1;
        r || (r = e.createElement("style"),
        i = !0),
        I_(r) && (r.id = ff,
        n && (r.nonce = n),
        r.textContent = k_(t),
        i && e.head.appendChild(r))
    }
      , k_ = e=>`
    .${qi} {
      border-color: ${e};
    }
    .${qi} .${L.ChoiceRadio}, .${qi}.${L.ChoiceRadio} {
      border: 6px solid ${e};
      box-shadow: none;
    }
    .${pf} {
      border-color: ${Jn};
    }
  `
      , qn = e=>(e == null ? void 0 : e.buttonText) || "Next"
      , ss = e=>(e == null ? void 0 : e.skipButtonText) || "Skip"
      , x_ = ({className: e, message: t, next: n, properties: r, questionId: i, type: o})=>{
        const {headers: a, useMobileStyling: s, border: l} = le(T=>({
            headers: T.headers,
            useMobileStyling: T.useMobileStyling,
            border: T.border
        }))
          , [u,c] = Se(!1)
          , [d,f] = Se("")
          , [p,h] = Se(!1)
          , m = a["userleap-platform"]
          , g = r == null ? void 0 : r.collectName
          , _ = (r == null ? void 0 : r.nameLabelText) || "Full Name"
          , v = (r == null ? void 0 : r.consentText) || "I agree to the stated conditions"
          , b = (r == null ? void 0 : r.submitButtonText) || "Submit"
          , y = !!d.trim()
          , C = u && (!g || y)
          , S = (T,N=!1)=>{
            T.preventDefault(),
            T.stopPropagation();
            let k = null;
            if (!N) {
                if (!C) {
                    h(!0);
                    return
                }
                k = {
                    submitted: !0
                },
                g && (k.name = d)
            }
            n({
                value: k,
                questionId: i,
                type: o
            })
        }
          , I = T=>{
            Jh(T.target) && (T.preventDefault(),
            T.stopPropagation(),
            f(T.target.value))
        }
          , E = T=>{
            wn(T.target) && (T.target.style.borderColor = p && !y ? Jn : l)
        }
          , x = T=>{
            wn(T.target) && (T.target.style.borderColor = p && !y ? Jn : So)
        }
          , R = ()=>w("div", {
            children: [w(df, {
                allowTextEntry: !1,
                border: l,
                error: p && !u,
                index: 0,
                isRadio: !1,
                isSelected: u,
                label: v,
                onUserInputChanged: ({selected: T})=>{
                    T !== u && c(!u)
                }
                ,
                useMobileStyling: s
            }), g && w("input", {
                "aria-label": _,
                "aria-placeholder": _,
                className: B(ve(L.ConsentLegalNameInput, s)),
                "data-gramm": "false",
                maxLength: 250,
                name: "name",
                onBlur: x,
                onFocus: E,
                onInput: I,
                placeholder: _,
                style: p && !y ? {
                    borderColor: Jn
                } : {},
                tabIndex: 0,
                value: d
            }), w("div", {
                className: "ul-card__button-wrapper ul-card-vertical__button-wrapper",
                children: [w(je, {
                    className: C ? "" : L.ButtonDisabled,
                    onClick: S,
                    children: b
                }), r.required === !1 && w("button", {
                    className: L.SkipButton,
                    onClick: T=>S(T, !0),
                    children: ss(r)
                })]
            })]
        });
        return w("div", {
            className: B(ot(L.CardMainContent, m)),
            children: w("div", {
                className: B([e, "ul-card__consent-legal", L.FadeInTransition]),
                children: [w(ct, {
                    message: t
                }), w("div", {
                    className: "ul-rich-text-body",
                    dangerouslySetInnerHTML: r && r.richTextBody ? {
                        __html: r && r.richTextBody
                    } : void 0,
                    id: "ul-card__consent-legal-body-container"
                }), w(Gt, {
                    properties: r,
                    defaultBody: R,
                    embeddedType: "pdf"
                })]
            }, i)
        })
    }
      , A_ = ({activeValue: e, border: t, icon: n, isPressed: r, onSubmit: i, range: o, scaleLabelType: a, setActiveValue: s, setIsPressed: l, useMobileStyling: u, value: c})=>{
        const d = `option-${c}`
          , f = a === dn.Number
          , p = a === dn.Star
          , h = f && c === e
          , [m,g] = (()=>c <= e && p || c === e ? r ? [t, 1] : [t, .3] : ["", 1])()
          , _ = ()=>{
            switch (a) {
            case dn.Star:
                return B([...ve(L.LikertStar, u), ...ve(`${L.LikertStar}-${c}`, u)]);
            case dn.Smiley:
                return B([...ve(L.LikertSmiley, u), ...ve(`${L.LikertSmiley}-${c}`, u)]);
            default:
                return B(c === o ? [...ve(L.LikertNumber, u), ...ve(`${L.LikertNumber}-${c}`, u), ...ve("likert-last-option", u)] : [...ve(L.LikertNumber, u), ...ve(`${L.LikertNumber}-${c}`, u)])
            }
        }
          , v = ()=>{
            s(-1),
            l(!1)
        }
        ;
        return w("div", {
            "aria-label": f ? void 0 : String(c),
            className: _(),
            dangerouslySetInnerHTML: {
                __html: n
            },
            id: d,
            onClick: ()=>i(),
            onPointerDown: ()=>l(!0),
            onPointerEnter: ()=>s(c),
            onPointerLeave: v,
            role: "radio",
            style: {
                color: f ? "" : m,
                borderColor: h ? m : "",
                fillOpacity: h ? "" : g,
                zIndex: h ? 3 : "auto"
            },
            tabIndex: 0
        })
    }
      , T_ = ({className: e, labels: t, message: n, next: r, properties: i, questionId: o, type: a})=>{
        const {border: s, headers: l, useMobileStyling: u} = le(R=>({
            border: R.border,
            headers: R.headers,
            useMobileStyling: R.useMobileStyling
        }))
          , [c,d] = Se(-1)
          , [f,p] = Se(!1)
          , h = l["userleap-platform"]
          , m = t && t.left
          , g = t && t.right;
        let _;
        const {range: v, scaleLabelType: b, ratingIcons: y} = i;
        v && (_ = Number(v));
        const C = _ || 5
          , S = R=>{
            var T, N;
            switch (b) {
            case dn.Star:
                return (T = y[0]) == null ? void 0 : T.svg;
            case dn.Smiley:
                return (N = y[R]) == null ? void 0 : N.svg;
            default:
                return String(R + 1)
            }
        }
          , I = [...Array(C)].map((R,T)=>{
            const N = T + 1;
            return w(A_, {
                activeValue: c,
                border: s,
                icon: S(T),
                isPressed: f,
                onSubmit: ()=>r({
                    value: N,
                    questionId: o,
                    type: a
                }),
                range: C,
                scaleLabelType: b,
                setActiveValue: d,
                setIsPressed: p,
                useMobileStyling: u,
                value: N
            }, T)
        }
        )
          , E = R=>{
            R.preventDefault(),
            R.stopPropagation(),
            r({
                value: null,
                questionId: o,
                type: a
            })
        }
          , x = ()=>w(Qe, {
            children: [w("div", {
                "aria-label": `Rating (1 - ${C})`,
                className: "ul-card--likert__numbers",
                role: "radiogroup",
                children: I
            }), w("div", {
                className: "ul-card--likert__labels",
                children: [w("span", {
                    children: m
                }), w("span", {
                    children: g
                })]
            }), !i.required && w("div", {
                className: "ul-vertical-centered-container",
                children: w(je, {
                    onClick: E,
                    children: qn(i)
                })
            })]
        });
        return w("div", {
            className: B(ot(L.CardMainContent, h)),
            children: w("form", {
                className: B([e, "ul-card--likert", L.FadeInTransition]),
                children: [w(ct, {
                    message: n,
                    properties: i
                }), w(Gt, {
                    properties: i,
                    defaultBody: x
                })]
            }, o)
        })
    }
      , hf = ({className: e, message: t, onSubmit: n, options: r=[], properties: i, questionId: o, type: a})=>{
        const {border: s, headers: l, useMobileStyling: u} = le(I=>({
            border: I.border,
            headers: I.headers,
            useMobileStyling: I.useMobileStyling
        }))
          , c = r.reduce((I,E)=>(I[E.id] = {
            isSelected: !1
        },
        I), {})
          , [d,f] = Se(c)
          , p = l["userleap-platform"]
          , h = a === O.MultipleChoice
          , m = i.required
          , g = Object.entries(d).some(([I,E])=>{
            var T;
            const x = r.find(N=>`${N.id}` === I)
              , R = E.userText === void 0 || E.userText.trim() === "";
            return ((T = x == null ? void 0 : x.optionProperties) == null ? void 0 : T.allowsTextEntry) && R && E.isSelected
        }
        )
          , _ = Object.values(d).some(I=>I.isSelected)
          , v = g || m && !_
          , b = r.map(({id: I, label: E, value: x, optionProperties: R},T)=>{
            var D, A;
            const N = `${I}`
              , {allowsTextEntry: k} = R || {
                allowsTextEntry: !1
            };
            return w(df, {
                allowTextEntry: k,
                border: s,
                error: !1,
                id: N,
                index: T,
                isRadio: h,
                isSelected: !!((D = d[N]) != null && D.isSelected),
                label: E,
                onUserInputChanged: j=>C(j.id, j.selected, j.userText),
                promptText: "Please specify",
                text: (A = d[I]) == null ? void 0 : A.userText,
                useMobileStyling: u,
                value: x
            }, N)
        }
        )
          , y = I=>{
            I.preventDefault(),
            I.stopPropagation(),
            n(d)
        }
          , C = (I,E,x)=>{
            const R = Object.assign({}, d);
            if (h && E)
                for (const T of Object.values(R))
                    T.isSelected = !1,
                    delete T.userText;
            R[I] = {
                isSelected: E,
                userText: x
            },
            f(R)
        }
          , S = ()=>w("div", {
            children: [w("div", {
                className: B(ve(L.ChoiceGroup, u)),
                role: h ? "radiogroup" : "group",
                children: b
            }), w("div", {
                className: "ul-card__button-wrapper",
                children: w(je, {
                    disabled: v,
                    onClick: y,
                    children: qn(i)
                })
            })]
        });
        return w("div", {
            className: B(ot(L.CardMainContent, p)),
            children: w("form", {
                className: B([e, "ul-card--multiple", L.FadeInTransition]),
                id: "text-form",
                onSubmit: y,
                children: [w(ct, {
                    message: t,
                    properties: i
                }), w(Gt, {
                    properties: i,
                    defaultBody: S
                })]
            }, o)
        })
    }
      , R_ = e=>{
        const {questionId: t, type: n, next: r, options: i} = e;
        return w(hf, {
            ...e,
            onSubmit: a=>{
                const s = Object.entries(a).find(([,f])=>f.isSelected) || [void 0, void 0]
                  , [l,u] = s
                  , c = i.find(f=>`${f.id}` === l)
                  , d = u != null && u.userText ? {
                    [l]: {
                        userText: u.userText
                    }
                } : null;
                r({
                    value: c && l ? {
                        [l]: c.value
                    } : {},
                    secondaryValue: d,
                    questionId: t,
                    type: n
                })
            }
        })
    }
      , L_ = e=>{
        const {questionId: t, type: n, next: r} = e;
        return w(hf, {
            ...e,
            onSubmit: o=>{
                const a = {}
                  , s = Object.entries(o).reduce((u,[c,d])=>(u[c] = d.isSelected,
                u), a)
                  , l = Object.entries(o).reduce((u,[c,d])=>{
                    if (!d.userText)
                        return u;
                    const f = u || {};
                    return f[c] = {
                        userText: d.userText
                    },
                    f
                }
                , null);
                r({
                    value: s,
                    secondaryValue: l,
                    questionId: t,
                    type: n
                })
            }
        })
    }
      , O_ = ({className: e, props: {labels: t, message: n, properties: r}, next: i, questionId: o, type: a})=>{
        const {border: s, headers: l, useMobileStyling: u} = le(g=>({
            border: g.border,
            headers: g.headers,
            useMobileStyling: g.useMobileStyling
        }))
          , c = l["userleap-platform"]
          , d = t && t.left
          , f = t && t.right
          , p = [...Array(11)].map((g,_)=>w("div", {
            className: B([...ve(L.NPSNumber, u), ...ve(`${L.NPSNumber}-${_}`, u)]),
            id: `option-${_}`,
            onClick: ()=>i({
                value: _,
                questionId: o,
                type: a
            }),
            onKeyPress: v=>{
                v.preventDefault(),
                (v.key === "Enter" || v.key === " ") && i({
                    value: _,
                    questionId: o,
                    type: a
                })
            }
            ,
            onPointerDown: v=>{
                wn(v.target) && (v.target.style.zIndex = "2",
                v.target.style.borderColor = s)
            }
            ,
            onPointerLeave: v=>{
                wn(v.target) && (v.target.style.zIndex = "auto",
                v.target.style.borderColor = So)
            }
            ,
            role: "radio",
            tabIndex: 0,
            children: _
        }, _))
          , h = g=>{
            g.preventDefault(),
            g.stopPropagation(),
            i({
                value: null,
                questionId: o,
                type: a
            })
        }
          , m = ()=>w("div", {
            children: [w("div", {
                className: "ul-card--nps__numbers",
                children: p
            }), w("div", {
                className: "ul-card--nps__labels",
                children: [w("span", {
                    children: d
                }), w("span", {
                    children: f
                })]
            }), !r.required && w("div", {
                className: "ul-vertical-centered-container",
                children: w(je, {
                    onClick: h,
                    children: qn(r)
                })
            })]
        });
        return w("div", {
            className: B(ot(L.CardMainContent, c)),
            children: w("form", {
                className: B([e, "ul-card--nps", L.FadeInTransition]),
                children: [w(ct, {
                    message: n,
                    properties: r
                }), w(Gt, {
                    properties: r,
                    defaultBody: m
                })]
            }, o)
        })
    }
      , N_ = ({className: e, message: t, next: n, properties: r, questionId: i, type: o})=>{
        const {border: a, headers: s, useMobileStyling: l, update: u} = le(I=>({
            border: I.border,
            headers: I.headers,
            useMobileStyling: I.useMobileStyling,
            update: I.update
        }))
          , [c,d] = Se("")
          , f = Kt(null)
          , p = s["userleap-platform"]
          , h = c.trim()
          , m = r.required === !0 && !h
          , g = cf(f, ()=>u())
          , _ = I=>{
            g(),
            I.preventDefault(),
            I.stopPropagation(),
            er(I.target) && d(I.target.value)
        }
          , v = I=>{
            I.preventDefault(),
            I.stopPropagation(),
            n({
                value: c,
                questionId: i,
                type: o
            })
        }
          , b = r && r.openTextPlaceholder ? r.openTextPlaceholder : ""
          , y = I=>{
            er(I.target) && (I.target.style.borderColor = a)
        }
          , C = I=>{
            er(I.target) && (I.target.style.borderColor = So)
        }
          , S = ()=>w("div", {
            className: "ul-card-text",
            children: [w("div", {
                className: "ul-card-text__container",
                children: w("textarea", {
                    "aria-label": b,
                    "aria-labelledby": L.QuestionHeader,
                    "aria-multiline": "true",
                    "aria-placeholder": b,
                    className: B(ve(L.OpenTextInput, l)),
                    "data-gramm": "false",
                    maxLength: 5e3,
                    name: "text",
                    onBlur: C,
                    onChange: _,
                    onFocus: y,
                    placeholder: b,
                    ref: f,
                    role: "textbox",
                    tabIndex: 0
                })
            }), w(je, {
                disabled: m,
                onClick: v,
                style: {
                    backgroundColor: m ? "" : a
                },
                children: qn(r)
            })]
        });
        return w("div", {
            className: B(ot(L.CardMainContent, p)),
            children: w("form", {
                className: B([e, "ul-card--text", L.FadeInTransition]),
                id: "text-form",
                children: [w(ct, {
                    message: t,
                    properties: r
                }), w(Gt, {
                    defaultBody: S,
                    properties: r
                })]
            }, i)
        })
    }
    ;
    var Wt = (e=>(e[e.RequestNeeded = 1] = "RequestNeeded",
    e[e.TryAgain = 2] = "TryAgain",
    e[e.Ready = 3] = "Ready",
    e))(Wt || {});
    const Zi = e=>e.type === Ge.AvPermission
      , mf = e=>e.type === Ge.ScreenPermission
      , D_ = (e,t)=>!(Zi(t) ? t.permissionDescriptors : []).includes(zn.Camera) || e.getVideoTracks().length > 0
      , gf = (e,t)=>{
        if (e === void 0)
            return Wt.RequestNeeded;
        if (e) {
            if (!D_(e, t))
                return Wt.RequestNeeded
        } else
            return Wt.TryAgain;
        return Wt.Ready
    }
      , vf = {
        avStream: null,
        currentPage: null,
        mediaRecordingUids: null,
        nextQuestion: ()=>{}
        ,
        passthroughData: void 0,
        recordingMediaTypes: void 0,
        screenPermissionRequested: !1,
        type: void 0
    }
      , dt = Xd(e=>({
        ...vf,
        reset: ()=>{
            e(vf)
        }
        ,
        updatePage: t=>{
            e(t)
        }
    }));
    function ls({currentPage: e, pages: t}) {
        const {avStream: n, recordingMediaTypes: r, updatePage: i} = dt.getState()
          , {recorderEventEmitter: o} = le.getState();
        o.emit(Te.AvPermission, {
            [q.PermissionDescriptors]: e.permissionDescriptors,
            [q.StreamReadyCallback]: (a,s)=>{
                if (n === a)
                    return;
                let l = e;
                if (a && !e.permissionDescriptors.includes(zn.Camera)) {
                    const u = t.indexOf(e)
                      , c = s != null && s.active ? u + 2 : u + 1;
                    (s == null ? void 0 : s.active) && r && o.emit(Te.BeginRecording, {
                        [q.RecordingMediaTypes]: r,
                        [q.StartRecordingCallback]: d=>i({
                            mediaRecordingUids: d
                        })
                    }),
                    l = t[c]
                }
                i({
                    currentPage: l,
                    avStream: a
                })
            }
        })
    }
    function U_({pages: e, userId: t, responseGroupUid: n, surveyId: r, questionId: i, next: o}) {
        const {updatePage: a} = dt.getState()
          , {eventEmitFn: s, recorderEventEmitter: l} = le.getState()
          , u = {
            questionId: i,
            surveyId: r,
            visitorId: t,
            responseGroupUid: n
        };
        let c = 0;
        l.emit(Ke.RecordedTaskPermissionScreen),
        s(Ke.RecordedTaskPermissionScreen),
        l.emit(Te.PermissionStatus, {
            [q.PermissionStatusCallback]: (f,p,h,m)=>{
                const g = e[c]
                  , {type: _} = g
                  , v = [et.Screen];
                if (Zi(g)) {
                    const {permissionDescriptors: b} = g
                      , y = b == null ? void 0 : b.includes(zn.Microphone)
                      , C = b == null ? void 0 : b.includes(zn.Camera);
                    y && v.push(et.Audio),
                    C && v.push(et.Video);
                    const S = (f == null ? void 0 : f.active) && !C
                      , I = (f == null ? void 0 : f.active) && p;
                    (S || I) && c++
                }
                mf(e[c]) && h && (c++,
                l.emit(Te.BeginRecording, {
                    [q.RecordingMediaTypes]: v,
                    [q.StartRecordingCallback]: b=>a({
                        mediaRecordingUids: b
                    })
                })),
                a({
                    currentPage: e[c],
                    avStream: f,
                    screenPermissionRequested: h,
                    nextQuestion: o,
                    type: _,
                    passthroughData: u,
                    recordingMediaTypes: v,
                    captureStream: m
                })
            }
        });
        const d = e[c];
        return d.type === Ge.AvPermission && ls({
            currentPage: d,
            pages: e
        }),
        d
    }
    function us({status: e}) {
        const {nextQuestion: t, passthroughData: n, mediaRecordingUids: r, reset: i} = dt.getState()
          , {recorderEventEmitter: o, handleUploadUpdate: a, index: s} = le.getState()
          , l = {
            value: {
                taskStatus: e
            },
            type: O.RecordedTask,
            questionId: (n == null ? void 0 : n.questionId) || 1
        };
        !n || o.emit(Te.FinishTask, {
            [q.BeginCallback]: u=>{
                a({
                    mediaRecordingUid: u,
                    isSubmitted: !0,
                    progressPct: 0,
                    isComplete: !1
                })
            }
            ,
            [q.ProgressCallback]: (u,c)=>{
                a({
                    mediaRecordingUid: u,
                    progressPct: c.detail,
                    isSubmitted: !1,
                    isComplete: !1
                })
            }
            ,
            [q.UploadCallback]: u=>{
                u && a({
                    mediaRecordingUid: u,
                    isComplete: !0,
                    isSubmitted: !0,
                    progressPct: 100
                })
            }
            ,
            [q.PassthroughData]: n,
            [q.CurrentIndex]: s,
            [q.TaskResponse]: l,
            [q.TaskCompleteCallback]: u=>{
                l.value.taskDurationMillisecond = u,
                r && (l.value.mediaRecordingUids = r),
                i(),
                t(l)
            }
        })
    }
    function cs({pages: e, setIsRequestingPermission: t}) {
        const {recorderEventEmitter: n, eventEmitFn: r} = le.getState()
          , {updatePage: i, currentPage: o, recordingMediaTypes: a, screenPermissionRequested: s} = dt.getState();
        if (!o)
            return;
        const l = e.indexOf(o);
        switch (o.type) {
        case Ge.AvPermission:
            {
                const u = s ? l + 2 : l + 1;
                s && a && n.emit(Te.BeginRecording, {
                    [q.RecordingMediaTypes]: a,
                    [q.StartRecordingCallback]: c=>{
                        i({
                            mediaRecordingUids: c
                        })
                    }
                }),
                i({
                    currentPage: e[u]
                });
                return
            }
        case Ge.ScreenPermission:
            n.emit(Te.ScreenPermission, {
                [q.ScreenPermissionRequested]: t,
                [q.StreamReadyCallback]: (u,c)=>{
                    const d = c ? e[l + 1] : o;
                    c && a && n.emit(Te.BeginRecording, {
                        [q.RecordingMediaTypes]: a,
                        [q.StartRecordingCallback]: f=>{
                            i({
                                captureStream: c,
                                mediaRecordingUids: f
                            })
                        }
                    }),
                    i({
                        currentPage: d,
                        screenPermissionRequested: !0,
                        captureStream: c
                    })
                }
            });
            return;
        case Ge.StartTask:
            r(Ke.RecordedTaskStart),
            n.emit(Ke.RecordedTaskStart),
            n.emit(Te.StartTask),
            i({
                currentPage: e[l + 1],
                screenPermissionRequested: !0
            });
            return;
        case Ge.CompleteTask:
            return
        }
    }
    const yf = "ul-permission-graphics-container"
      , _f = "ul-permission-body"
      , bf = B([yf, "ul_recorded-task-inset-spacing"])
      , Yi = B(["ul-horizontal-button-container", "ul-horizontal-button-container-left"])
      , wf = ({richTextBody: e})=>w("div", {
        className: "ul-rich-text-body",
        dangerouslySetInnerHTML: {
            __html: e
        },
        id: "ul-task-detail-container"
    })
      , Qi = ({required: e, skipButtonText: t, bottom: n=!1})=>e ? null : w(je, {
        className: B([n && "ul-skip-button-below", L.InactiveButton]),
        onClick: us.bind(null, {
            status: We.Abandoned
        }),
        children: t || "Skip"
    })
      , ds = e=>{
        const {avStream: t, captureStream: n, recordingMediaTypes: r, updatePage: i} = dt.getState()
          , o = (r == null ? void 0 : r.includes(et.Audio)) || (r == null ? void 0 : r.includes(et.Video));
        $e(()=>{
            const a = setInterval(()=>{
                o && t && !t.active ? i({
                    avStream: null,
                    currentPage: e[0]
                }) : (!n || !n.active) && i({
                    captureStream: void 0,
                    currentPage: e[o ? 1 : 0]
                })
            }
            , 1e3);
            return ()=>clearInterval(a)
        }
        , [t, n, o, e, r, i])
    }
      , P_ = ({content: e, pages: t, required: n})=>{
        const {buttonText: r, skipButtonText: i, taskDetail: o} = e;
        return ds(t),
        w("div", {
            className: "ul-task-page",
            children: [w(wf, {
                richTextBody: o
            }), w("div", {
                className: Yi,
                children: [w(je, {
                    onClick: cs.bind(null, {
                        pages: t
                    }),
                    children: r
                }), w(Qi, {
                    required: n,
                    skipButtonText: i
                })]
            })]
        }, "start-task")
    }
      , M_ = ({content: e, pages: t, properties: n})=>{
        const {buttonText: r, skipButtonText: i} = e;
        ds(t);
        const a = w(Gt, {
            properties: n,
            defaultBody: ()=>w("div", {
                className: Yi,
                children: [w(je, {
                    className: "ul-complete-task-button",
                    onClick: us.bind(null, {
                        status: We.Completed
                    }),
                    children: r
                }), w(je, {
                    className: B([L.InactiveButton]),
                    onClick: us.bind(null, {
                        status: We.GivenUp
                    }),
                    children: i
                })]
            })
        });
        return w("div", {
            className: "ul-task-page",
            children: [w(wf, {
                richTextBody: e.taskDetail
            }), a]
        }, "complete-task")
    }
      , F_ = ({content: e, pages: t, required: n})=>{
        const {buttonText: r, skipButtonText: i} = e
          , [o] = le(l=>[l.tabTitle])
          , [a,s] = Se(!1);
        return w("div", {
            children: [w("div", {
                className: bf,
                children: [w("p", {
                    style: {
                        marginTop: "auto"
                    },
                    children: e.selectTabText
                }), w("div", {
                    className: "ul-select-tab-container",
                    children: w("p", {
                        className: _f,
                        children: o
                    })
                })]
            }), w("div", {
                className: n ? "" : Yi,
                children: [w(je, {
                    disabled: a,
                    onClick: cs.bind(null, {
                        pages: t,
                        setIsRequestingPermission: s
                    }),
                    children: r
                }), w(Qi, {
                    required: n,
                    skipButtonText: i
                })]
            })]
        })
    }
      , V_ = ({content: e})=>w("div", {
        className: B([yf, "ul_permission_svg_container", "ul_recorded-task-inset-spacing", "ul-center-horizontally"]),
        dangerouslySetInnerHTML: {
            __html: e.svg
        }
    }, "ul-permission-request-graphic")
      , B_ = ({content: e, pages: t, required: n})=>{
        const {permissionDeniedHeadline: r, permissionDeniedBody: i, skipButtonText: o, tryAgainButtonText: a} = e
          , s = Zi(t[0]) ? t[0] : null;
        return $e(()=>{
            const l = setInterval(()=>{
                s !== null && ls({
                    currentPage: s,
                    pages: t
                })
            }
            , 1e3);
            return ()=>clearInterval(l)
        }
        , [s, t]),
        s ? w("div", {
            children: [w("div", {
                className: bf,
                children: w("p", {
                    className: "ul-av-permission-denied-paragraph",
                    children: [w("span", {
                        className: "ul-av-permission-denied-headline",
                        children: r
                    }), w("span", {
                        className: _f,
                        children: i
                    })]
                })
            }), w("div", {
                className: Yi,
                children: [w(je, {
                    onClick: ls.bind(null, {
                        currentPage: s,
                        pages: t
                    }),
                    children: a
                }), w(Qi, {
                    required: n,
                    skipButtonText: o
                })]
            })]
        }) : null
    }
      , j_ = ({stream: e})=>w("video", {
        autoPlay: !0,
        className: B(["ul_recorded-task-inset-spacing"]),
        id: "ul-record-task-video-preview",
        muted: !0,
        ref: t=>{
            t && (t.srcObject = e || null)
        }
    })
      , H_ = ({content: e, pages: t, required: n})=>{
        const {skipButtonText: r} = e
          , {avStream: i} = dt.getState();
        return ds(t),
        w("div", {
            children: [w(j_, {
                stream: i
            }), w("div", {
                className: "ul-vertical-button-container-center",
                children: [w(je, {
                    onClick: cs.bind(null, {
                        pages: t
                    }),
                    children: e.buttonText
                }), w(Qi, {
                    bottom: !0,
                    required: n,
                    skipButtonText: r
                })]
            })]
        })
    }
      , z_ = ({properties: e})=>{
        const {pages: t, required: n} = e
          , {avStream: r, currentPage: i} = dt.getState();
        if (i === void 0)
            return null;
        switch (i == null ? void 0 : i.type) {
        case Ge.AvPermission:
            {
                const o = gf(r, i);
                return o === Wt.RequestNeeded ? w(V_, {
                    content: i
                }) : o === Wt.TryAgain ? w(B_, {
                    content: i,
                    pages: t,
                    required: n
                }) : w(H_, {
                    content: i,
                    pages: t,
                    required: n
                })
            }
        case Ge.ScreenPermission:
            return w(F_, {
                content: i,
                pages: t,
                required: n
            });
        case Ge.StartTask:
            return w(P_, {
                content: i,
                pages: t,
                required: n
            });
        case Ge.CompleteTask:
            return w(M_, {
                content: i,
                pages: t,
                properties: e
            });
        default:
            return null
        }
    }
      , K_ = ({className: e, properties: t, next: n, questionId: r})=>{
        const i = le()
          , {headers: o, surveyId: a, responseGroupUid: s, userId: l} = i
          , u = dt()
          , {screenPermissionRequested: c} = u
          , d = dt(g=>g.avStream);
        let f = dt(g=>g.currentPage);
        f || (f = U_({
            questionId: r,
            surveyId: a,
            next: g=>{
                n(g)
            }
            ,
            pages: t.pages,
            responseGroupUid: s,
            userId: l
        }));
        let p = f.headline
          , h = f.captionText;
        const m = gf(d, f);
        return mf(f) && c && (p = f.permissionDeniedHeadline,
        h = f.permissionDeniedCaptionText),
        Zi(f) && m === Wt.Ready && (p = f.permissionGrantedHeadline,
        h = f.permissionGrantedCaptionText),
        w("div", {
            className: B([...ot(L.CardMainContent, o["userleap-platform"])]),
            children: w("div", {
                className: B([e, "ul-center-horizontally", L.FadeInTransition]),
                children: [w(ct, {
                    message: p,
                    properties: {
                        captionText: h
                    }
                }), w(z_, {
                    properties: t
                })]
            })
        })
    }
      , G_ = {
        "{{user_id}}": "externalUserId",
        "{{email}}": "email"
    }
      , W_ = (e=void 0,t={})=>{
        if (!e)
            return e;
        let n = e;
        const r = [];
        for (const [l,u] of Object.entries(G_))
            if (n.toLowerCase().includes(l))
                if (t[u]) {
                    const c = new RegExp(l,"gi");
                    n = n.replace(c, t[u])
                } else
                    r.push(l);
        if (r.length === 0 || !n.includes("?"))
            return n;
        const i = n.slice(0, n.indexOf("?"))
          , a = n.slice(n.indexOf("?") + 1).split("&").map(l=>l.split("=")).filter(l=>!r.includes(l[1]));
        if (a.length === 0)
            return i;
        const s = a.map(l=>l.join("=")).join("&");
        return `${i}?${s}`
    }
      , $_ = ({className: e, message: t, next: n, properties: r, questionId: i, type: o})=>{
        const {headers: a, visitorAttributes: s} = le(p=>({
            headers: p.headers,
            visitorAttributes: p.visitorAttributes
        }))
          , l = a["userleap-platform"]
          , u = (p,h=!1)=>{
            n({
                value: h ? {
                    skipped: !0
                } : void 0,
                questionId: i,
                type: o
            })
        }
          , c = p=>{
            (p.key === "Enter" || p.key === " ") && n({
                value: void 0,
                questionId: i,
                type: o
            })
        }
          , d = ()=>w("div", {
            className: "ul-card-button-group",
            children: [w("a", {
                className: "ul-card-text__button ul-card__text-url-prompt-button",
                href: W_(r && r.buttonUrl, s),
                id: "ul-card-text__button",
                onClick: u,
                onKeyPress: c,
                rel: "noreferrer",
                role: "button",
                tabIndex: 0,
                target: "_blank",
                children: qn(r)
            }), r.required === !1 && w("button", {
                className: L.SkipButton,
                onClick: p=>u(p, !0),
                children: ss(r)
            })]
        })
          , f = (p,h)=>p ? w("div", {
            className: "ul-rich-text-body",
            dangerouslySetInnerHTML: {
                __html: p
            },
            id: "ul-card__text-url-body-container"
        }) : w("div", {
            className: "ul-rich-text-body",
            id: "ul-card__text-url-body-container",
            children: (h ? h.split(/\n\s*\n/g) : []).map((m,g)=>w("p", {
                children: m
            }, g))
        });
        return w("div", {
            className: B(ot(L.CardMainContent, l)),
            children: w("div", {
                className: B([e, "ul-card__text-url-prompt", L.FadeInTransition]),
                children: [w(ct, {
                    message: t
                }), f(r && r.richTextBody, r && r.body), w(Gt, {
                    defaultBody: d,
                    properties: r
                })]
            }, i)
        })
    }
      , q_ = ({className: e, questionId: t})=>{
        const {border: n, destroy: r, endCard: i, headers: o} = le(l=>({
            border: l.border,
            endCard: l.endCard,
            destroy: l.destroy,
            headers: l.headers
        }));
        $e(()=>{
            setTimeout(()=>{
                r(bn)
            }
            , 2e3)
        }
        , [r]);
        const a = i && i.subheader ? w("p", {
            className: L.Caption,
            children: i.subheader
        }) : null
          , s = i && i.headline ? i.headline : "";
        return w("div", {
            className: B(ot(L.CardMainContent, o["userleap-platform"])),
            children: w("div", {
                className: B([e, "ul-card--thanks", L.FadeInTransition]),
                children: w("div", {
                    children: w("div", {
                        className: "ul-card--thanks-content",
                        children: [w("div", {
                            className: "ul-thanks-check",
                            children: w("svg", {
                                "aria-labelledby": "title",
                                fill: "none",
                                height: "99",
                                viewBox: "0 0 81 99",
                                width: "81",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [w("path", {
                                    clipRule: "evenodd",
                                    d: "M40.5 77C60.9345 77 77.5 60.4345 77.5 40C77.5 19.5655 60.9345 3 40.5 3C20.0655 3 3.5 19.5655 3.5 40C3.5 60.4345 20.0655 77 40.5 77ZM80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40Z",
                                    fill: n,
                                    fillRule: "evenodd"
                                }), w("path", {
                                    clipRule: "evenodd",
                                    d: "M55.025 22.9046C55.6299 23.4705 55.6616 24.4198 55.0956 25.0247C54.8724 25.2634 54.6109 25.5285 54.3157 25.8277C52.2547 27.9168 48.5549 31.667 44.8135 39.6658C43.2818 42.9406 42.0864 45.8386 41.0823 48.2729C40.6539 49.3116 40.2603 50.2659 39.8902 51.129C39.287 52.5359 38.7248 53.7508 38.1744 54.625C37.8997 55.0613 37.5806 55.4905 37.2017 55.8245C36.8201 56.1607 36.2613 56.5 35.5457 56.5C34.6742 56.5 34.0892 55.9692 33.7774 55.6083C33.4502 55.2296 33.1752 54.7511 32.9396 54.301C32.7305 53.9013 32.5088 53.4367 32.2797 52.9565C32.2429 52.8794 32.2059 52.8019 32.1688 52.7243C31.8942 52.1499 31.5959 51.534 31.2537 50.8868C29.8886 48.305 27.8539 45.2878 24.2343 43.1382C23.522 42.7152 23.2875 41.7949 23.7105 41.0826C24.1335 40.3703 25.0539 40.1358 25.7662 40.5588C30.0556 43.1062 32.4149 46.6647 33.9058 49.4845C34.2776 50.1876 34.5973 50.8487 34.8753 51.4302C34.9147 51.5124 34.9529 51.5926 34.9902 51.6707C35.2222 52.1567 35.4164 52.5637 35.5978 52.9102C35.6151 52.9434 35.6321 52.9754 35.6485 53.0061C36.0565 52.3531 36.5341 51.3434 37.133 49.9468C37.4781 49.1418 37.8572 48.2229 38.2761 47.2074C39.2886 44.7532 40.5339 41.7347 42.0961 38.3948C46.0591 29.9221 50.0641 25.8648 52.1535 23.7482C52.4423 23.4556 52.6944 23.2002 52.9048 22.9753C53.4708 22.3703 54.42 22.3387 55.025 22.9046ZM35.1994 53.5892C35.1994 53.5892 35.2 53.5888 35.2012 53.5879C35.2 53.5889 35.1994 53.5893 35.1994 53.5892ZM36.0666 53.6682C36.0732 53.674 36.0765 53.6775 36.0765 53.6777C36.0765 53.678 36.0732 53.6751 36.0666 53.6682Z",
                                    fill: n,
                                    fillRule: "evenodd"
                                }), w("path", {
                                    d: "M69.5 97C69.5 98.1046 56.2924 99 40 99C23.7076 99 10.5 98.1046 10.5 97C10.5 95.8954 23.7076 95 40 95C56.2924 95 69.5 95.8954 69.5 97Z",
                                    fill: "black",
                                    fillOpacity: "0.2"
                                })]
                            })
                        }), w(ct, {
                            message: s
                        }), a]
                    })
                })
            }, t)
        })
    }
      , pn = "https://cdn.sprig.com"
      , F = {
        document: void 0,
        videojs: void 0
    }
      , Z_ = `/* progress control styles */
.video-js .vjs-control {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 0px;
}

.video-js .vjs-progress-control {
  position: absolute;
  height: 3px;
  width: 100%;
}
/* position and align the buttons and button texts */
.ul-control-panel {
  bottom: 0;
  width: 100%;
  flex-direction: column;
  background-color: white;
  height: fit-content;
  z-index: 2;
}

.ul-buttons-panel {
  color: black;
  display: flex;
  gap: 20px;
  height: 50px;
  justify-content: center;
  margin: 10px;
  padding: 2px 14px 0;
}

.video-js .vjs-volume-panel {
  height: 30px;
  width: 40px;
}

.ul-inactive {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}

/* buttons */
.ul-buttons-panel > .vjs-button {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  height: 3em;
  justify-content: center;
  width: 3em;
}

.vjs-button>.vjs-icon-placeholder:before {
  align-items: center;
  display: flex;
  font-size: unset;
  line-height: 0.5;
  justify-content: center;
}

span.ul-button-text {
  align-self: flex-end;
  position: relative;
  top: 14px;
}

#ul-camera-button {
  white-space: nowrap;
}

.video-js .vjs-volume-control.vjs-volume-horizontal {
  background-color: #fff;
  z-index: 1;
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  background-color: black;
}

.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
  width: 40px;
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,
.video-js .vjs-volume-panel .vjs-volume-control:active,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,
.video-js .vjs-volume-panel:active .vjs-volume-control,
.video-js .vjs-volume-panel:focus .vjs-volume-control {
  visibility: visible;
  left: 40px;
  position: absolute;
  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;
}

/* play button customization */
.video-js .vjs-play-control {
  color: black;
}

.video-js .vjs-play-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* position and style the current timer */
.ul-time-panel {
  position: absolute;
  bottom: 80px;
  left: 10px;
  height: 22px;
  color: black;
  border: 1px solid #e0e0eb;
  border-radius: 23px;
  background-color: white;
  width: fit-content;
}

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
  display: flex;
  align-items: center;
  text-align: center;
}

/* remove the dot progress indicator */
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before,
.vjs-icon-circle:before,
.vjs-seek-to-live-control .vjs-icon-placeholder:before {
  content: none;
}

.video-js .vjs-mute-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.825.324A.75.75 0 019.25 1v11.667a.75.75 0 01-1.219.585l-3.96-3.169H1a.75.75 0 01-.75-.75v-5a.75.75 0 01.75-.75h3.07L8.031.414a.75.75 0 01.794-.09zM7.75 2.56L4.802 4.92a.75.75 0 01-.469.164H1.75v3.5h2.583a.75.75 0 01.469.165l2.948 2.358V2.56zM14.911.47a.75.75 0 011.061 0 9.084 9.084 0 010 12.844.75.75 0 01-1.06-1.06 7.584 7.584 0 000-10.724.75.75 0 010-1.06zM11.97 3.41a.75.75 0 011.06 0 4.917 4.917 0 010 6.953.75.75 0 11-1.06-1.06 3.417 3.417 0 000-4.832.75.75 0 010-1.06z' fill='%23262136'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 1.167L4.333 4.5H1v5h3.333L8.5 12.833V1.167zM17.17 4.5l-5 5M12.17 4.5l5 5' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.82489 0.32403C9.08474 0.44892 9.25 0.711703 9.25 1.00001V12.6667C9.25 12.955 9.08474 13.2178 8.82489 13.3427C8.56504 13.4675 8.25661 13.4324 8.03148 13.2523L4.07025 10.0833H1C0.585786 10.0833 0.25 9.74755 0.25 9.33334V4.33334C0.25 3.91913 0.585786 3.58334 1 3.58334H4.07025L8.03148 0.414355C8.25661 0.234253 8.56504 0.19914 8.82489 0.32403ZM7.75 2.56048L4.80185 4.91899C4.66887 5.02538 4.50364 5.08334 4.33333 5.08334H1.75V8.58334H4.33333C4.50364 8.58334 4.66887 8.6413 4.80185 8.74769L7.75 11.1062V2.56048Z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9698 3.41124C12.2627 3.11839 12.7376 3.11846 13.0304 3.4114C13.9521 4.33341 14.4699 5.58376 14.4699 6.88748C14.4699 8.19121 13.9521 9.44156 13.0304 10.3636C12.7376 10.6565 12.2627 10.6566 11.9698 10.3637C11.6768 10.0709 11.6767 9.596 11.9696 9.30307C12.6101 8.66235 12.9699 7.79346 12.9699 6.88748C12.9699 5.98151 12.6101 5.11262 11.9696 4.4719C11.6767 4.17896 11.6768 3.70409 11.9698 3.41124Z' fill='%23262136'/%3E%3C/svg%3E%0A");
}

.video-js .vjs-volume-control:hover .vjs-mouse-display {
  display: none !important;
}

.video-js .vjs-play-progress {
  background-color: black;
}

/* position video player inside the container */
.video-js .vjs-tech {
  position: static;
}

.video-js .vjs-time-tooltip {
  padding: 0.25em 0.75em;
  align-items: center;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -25px;
  font-size: 12px !important;
  width: 50px !important;
}

.video-js .vjs-play-progress.vjs-slider-bar .vjs-time-tooltip {
  visibility: hidden !important;
}

.video-js .vjs-progress-control .vjs-mouse-display {
  z-index: 2;
}

.ul-video-player {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border: 1px solid #E6E6E6;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  background-clip: border-box;
  overflow: hidden;
}

.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {
  border: none;
}

#video-response-player-secondary-video-player {
  max-width: 200px;
  margin-right: 20px;
  background-color: transparent;
}

#ul-card-video__player_recorder-video-recorder.vjs-fullscreen {
  display: table;
}

.video-js div.vjs-progress-control {
  margin-top: -3px;
}

.video-js .vjs-progress-control .vjs-slider {
  background-color: #B2BBBD;
}

.vjs-record.video-js .vjs-control.vjs-button.vjs-fullscreen-control {
  position:relative;
}

.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.82143 2.54004L12.2614 2.54004C12.9242 2.54004 13.4614 3.0773 13.4614 3.74004L13.4614 6.18004' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.17955 13.46L3.73955 13.46C3.07681 13.46 2.53955 12.9227 2.53955 12.26L2.53955 9.81996' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.7772 3.22266L9.36475 6.63516' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.29434 9.70605L2.88184 13.1186' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.583 9.813H5.25a1 1 0 011 1v3.666M5.375 10.688L1 15.061M14.917 5.813H11.25a1 1 0 01-1-1V1.146M15.063 1l-4.376 4.375' stroke='%23262136' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before, .video-js .vjs-icon-replay:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5363 6.40226L1.93958 10.7006C1.64037 10.8502 1.28833 10.6326 1.28833 10.2981V1.7014C1.28833 1.36688 1.64037 1.14931 1.93958 1.29891L10.5363 5.59727C10.868 5.76311 10.868 6.23642 10.5363 6.40226Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before, .vjs-icon-pause:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3.61885' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3Crect x='9.21797' y='2.06074' width='3.16185' height='11.88' rx='0.9' fill='black' stroke='%23EDEDED' stroke-width='0.6' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  padding: 2px;
}

.vjs-error-display {
  display: none;
}

.ul-video-player-video {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}

.ul-video-container {
  width: 100%;
  height: auto;
  left: 0px;
  top: 0px;

  background-color: transparent;
  border-radius: 4px;

  align-items: start;
  display: flex;
  flex-direction: column;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
  position: relative;
}

.vjs-record button.vjs-device-button.vjs-control {
  background: rgba(255, 255, 255, 96);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  border-radius: 0;
  line-height: 0.6;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
}

.vjs-record .vjs-device-button.vjs-control:before {
  font-size: 14px !important;
  color: #333;
  content: "Your browser needs to access your camera and microphone for video recording";
  line-height: 135%;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:before {
  font-size: 16px !important;
  color: #262136;
  content: "Unable to access your camera and microphone";
}

.vjs-record .vjs-device-button.vjs-control:after {
  display: inline-block;
  background: #F0F0F5;
  font-size: 13px;
  border-radius: 4px;
  content: "Request Permissions";
  padding: 1em 2em;
  color: #333;
  margin-top: 20px;
}

.vjs-record .vjs-device-button.vjs-control.permission-denied:after {
  display: inline-block;
  background: white;
  font-size: 13px;
  content: "Please go to your browser settings and update permissions to enable recording";
  padding: 1em;
  color: #4B575D;
  margin: 5px;
  line-height: 135%;
  text-align: center;
}

.vjs-control.vjs-button.ul-video-recorder-delete-button, .vjs-control.vjs-button.ul-video-recorder-toggle-button, .vjs-control.vjs-button.ul-video-recorder-camera-off-button-audio-only, .vjs-control.vjs-button.ul-video-recorder-camera-off-button {
  cursor: pointer;
}

.ul-video-recorder-delete-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.21234 7.37549V11.1193M2.53931 4.25595H13.4593H2.53931ZM5.57234 4.25595V3.00833C5.57222 2.84433 5.60354 2.68192 5.6645 2.53038C5.72546 2.37884 5.81488 2.24115 5.92762 2.12519C6.04037 2.00922 6.17424 1.91726 6.32158 1.85456C6.46892 1.79185 6.62683 1.75964 6.78628 1.75977H9.21234C9.37179 1.75964 9.5297 1.79185 9.67703 1.85456C9.82437 1.91726 9.95824 2.00922 10.071 2.12519C10.1837 2.24115 10.2732 2.37884 10.3341 2.53038C10.3951 2.68192 10.4264 2.84433 10.4263 3.00833V4.25595H5.57234ZM12.2463 4.25595V12.9912C12.2463 13.3223 12.1184 13.6399 11.8907 13.8741C11.6631 14.1082 11.3543 14.2398 11.0323 14.2398H4.96628C4.64432 14.2398 4.33555 14.1082 4.10789 13.8741C3.88023 13.6399 3.75234 13.3223 3.75234 12.9912V4.25595H12.2463ZM6.78628 7.37549V11.1193V7.37549Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-toggle-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z' fill='%23D15153'/%3E%3C/svg%3E");
}

.ul-video-recorder-toggle-button.ul-recording-in-session .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L12 2C12 0.89543 11.1046 -4.85396e-07 10 -4.37114e-07L2 -8.74228e-08C0.89543 -3.91405e-08 -4.85396e-07 0.895431 -4.37114e-07 2L-8.74228e-08 10C-3.91405e-08 11.1046 0.895431 12 2 12L10 12C11.1046 12 12 11.1046 12 10Z' fill='%23D15153'/%3E%3C/svg%3E%0A");
}

.ul-video-recorder-camera-off-button .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.ul-video-recorder-camera-off-button-audio-only .vjs-icon-placeholder:before {
  content: url("data:image/svg+xml,%3Csvg width='22' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.75 3A2.75 2.75 0 013.5.25h9.081A2.75 2.75 0 0115.331 3v9a2.75 2.75 0 01-2.75 2.75H3.5A2.75 2.75 0 01.75 12V3zM3.5 1.75c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h9.081c.69 0 1.25-.56 1.25-1.25V3c0-.69-.56-1.25-1.25-1.25H3.5z' fill='%23262136'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.53 2.03l-12 12-1.06-1.06 12-12 1.06 1.06zM20.87 1.525a.75.75 0 01.38.652v10.588a.75.75 0 01-1.134.644l-5.92-3.53a.75.75 0 01-.365-.643v-3.53a.75.75 0 01.366-.644l5.919-3.53a.75.75 0 01.754-.007zm-5.539 4.607V8.81l4.419 2.635V3.497l-4.419 2.635z' fill='%23262136'/%3E%3C/svg%3E");
  transform: scale(0.75);
}

.ul-upload-progress-label {
  padding: 0.15em 0.75em;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 75px;
  left: calc(50% - 65px);
  width: 130px;
  z-index: 5;
}

.ul-upload-progress-label__time {
  display: inline-flex;
  margin-left: 0.8em;
  align-items: center;
}

.ul-upload-progress-label__time:before {
  content: "";
  display: inline-flex;
  width: 1px;
  height: 12px;
  background-color: #E0E0EB;
  margin-right: 0.8em;
}

@keyframes grow {
  0% {
    transform: scale(1);
    background-color: #EEECFC;
  }
  50%  {
    transform: scale(1.2);
    background-color: #E1DFF4;
  }
  100% {
    transform: scale(1);
    background-color: #EEECFC;
  }
}

.ul-audio-recorder-placeholder:before {
  width: 80px;
  height: 80px;
  border-radius: 120px;
  background-color: #EEECFC;
  content: "";
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  animation: 6s infinite grow;
  transform-origin: 50% 60%;
}

.ul-audio-recorder-placeholder:after {
  content: url("data:image/svg+xml,%3Csvg width='98' height='98' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='98' height='98'%3E%3Ccircle cx='49' cy='49' r='49' fill='%23EDECF8'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Ccircle cx='49' cy='49' r='50' fill='%23645CC2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.422 81.812c5.405-15.547 20.187-26.706 37.576-26.706 17.39 0 32.172 11.159 37.577 26.707-9.164 10.43-22.601 17.013-37.576 17.013-14.976 0-28.414-6.583-37.577-17.014z' fill='%23fff' fill-opacity='.6'/%3E%3Ccircle cx='49' cy='29' r='17' fill='%23fff' fill-opacity='.7'/%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%) scale(0.6);
}

.ul-audio-recorder-placeholder {
  min-height: 150px;
  width: 100%;
  background-color: #fcfcfd;
  display: block;
  position: relative;
}

.vjs-fullscreen .ul-audio-recorder-placeholder {
  vertical-align: middle;
  display: table-cell;
}

.vjs-fullscreen .ul-control-panel {
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  background-color: #F8F8F8;
}

.vjs-playback-rate .vjs-playback-rate-value {
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: center;
}

.vjs-playback-rate .vjs-menu {
  left: -5px;
  bottom: 3px;
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
}

.vjs-menu li {
  font-size: 12px;
  padding: 5px 0;
}

.vjs-menu li.vjs-selected {
  color: lightgray;
}

.vjs-menu li.vjs-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.vjs-fullscreen .ul-buttons-panel {
  top: calc(50% - 30px);
  position: relative;
}

.vjs-fullscreen .vjs-record-indicator.vjs-control {
  bottom: 90px !important;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator {
  padding: 0.3em 0.75em 0.15em 15px;
  align-items: center;
  font-size: 12px;
  color: #333;
  background: #FCFCFD;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #E0E0EB;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 75px;
  top: auto;
  left: calc(50% - 21px);
  width: 43px;
  height: 16px;
  z-index: 4;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:after {
  content: "";
  background-color: #EB5757;
  width: 6px;
  height: 6px;
  border-radius: 8px;
  animation: none;
  top: 4px;
  left: 5px;
}

.vjs-record.video-js div.vjs-control.vjs-record-indicator:before {
  position: relative;
  font-size: 9px;
  animation: none;
  opacity: 1;
  color: #333;
  top: auto;
  left: auto;
}

.ul-video-player-loading {
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 6rem;

}
.ul-video-player-loading div {
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 80%;
  height: 80%;
  margin: 5px;
  border: 5px solid #666;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #666 transparent transparent transparent;
}

.first {
  animation-delay: -0.45s;
}
.second {
  animation-delay: -0.3s;
}
.third {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ul-video-btn {
  width: 100%;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 8px;
  font-weight: 500;
  font-size: 15px;
}

.ul-record-response-btn:before, .ul-record-response-btn:after, .ul-back-question-btn:before, .ul-back-question-btn:after {
  margin: 0 5px;
  vertical-align: middle;
}

.ul-record-response-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2645_4654)'%3E%3Cpath d='M15.1491 4.75L10.5991 8L15.1491 11.25V4.75Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.29912 3.4502H2.14912C1.43115 3.4502 0.849121 4.03223 0.849121 4.7502V11.2502C0.849121 11.9682 1.43115 12.5502 2.14912 12.5502H9.29912C10.0171 12.5502 10.5991 11.9682 10.5991 11.2502V4.7502C10.5991 4.03223 10.0171 3.4502 9.29912 3.4502Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2645_4654'%3E%3Crect width='15.6' height='15.6' fill='white' transform='translate(0.199951 0.200195)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  display: inline-block;
  transform: translate(0px, 2px);
}

.ul-record-response-btn:after {
  content: 'Record your Response';
}

.ul-back-question-btn:before {
  content: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.8757 8.22361L1.1118 14.6056C0.945578 14.6887 0.75 14.5678 0.75 14.382V1.61803C0.75 1.43219 0.945579 1.31131 1.1118 1.39443L13.8757 7.77639C14.06 7.86852 14.06 8.13148 13.8757 8.22361Z' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  display: inline-block;
  transform: scale(0.85) translate(0, 1px);
  -moz-transform: scale(0.85) translate(0, 2px);
}

.ul-back-question-btn:after {
  content: 'Back to Question';
}

.hidden {
  display: none !important;
  opacity: 0;
  visibility: hidden;
}

.visible {
  visibility: visible;
  opacity: 1;
  animation: fade 0.3s;
}

@keyframes fade {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
}

#ul-recording-countdown-screen {
  width: 100%;
  height: 100%;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  text-align: center;
  font-size: 15px;
  z-index: 1;
  display: table;
}

.ul-countdown-text {
  vertical-align: middle;
  display: table-cell;
  transform: translate(0, -25px);
}

.vjs-fullscreen > #ul-recording-countdown-screen {
  font-size: 25px;
  transform: unset;
}

.vjs-poster {
  background-size: cover;
}
`
      , Y_ = e=>{
        const t = F.document.createElement("div");
        return t.className = "ul-video-player-loading",
        t.id = fs(e),
        ["first", "second", "third", "fourth"].map(n=>{
            const r = F.document.createElement("div");
            r.className = n,
            t.appendChild(r)
        }
        ),
        t
    }
      , fs = e=>e + "-loading-spiner"
      , Ee = "hidden"
      , Cf = ".m3u8"
      , ps = "questionId"
      , hs = "ul-video-recorder-camera-off-button"
      , ms = "ul-recording-in-session"
      , Q_ = [{
        type: "link",
        content: `${pn}/dependencies/videojs-record-4.5.0.min.css`
    }, {
        type: "script",
        content: `${pn}/dependencies/RecordRTC-5.6.2.js`
    }, {
        type: "script",
        content: `${pn}/dependencies/adapter.8.0.0.min.js`
    }, {
        type: "script",
        content: `${pn}/dependencies/videojs-record-4.5.0.min.js`
    }, {
        type: "script",
        content: `${pn}/userleap-web-upchunk-v2.2.2.js`
    }]
      , Ef = [{
        type: "link",
        content: `${pn}/dependencies/video-js-7.18.0.min.css`
    }, {
        type: "script",
        content: `${pn}/dependencies/video-js-7.18.0.min.js`
    }, {
        type: "style",
        content: Z_
    }]
      , If = "-video-player"
      , Sf = "-secondary-video-player"
      , kf = "-video-recorder";
    let ft, xf;
    const $t = async({event: e, apiBase: t, headers: n, visitorId: r, envId: i, metadata: o})=>{
        const a = F.document.documentElement;
        if (!r || !i)
            return;
        const s = {
            event: `SDK - ${e}`,
            visitorId: r,
            environmentId: i,
            metadata: {
                ...o || {},
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: a.clientWidth,
                clientHeight: a.clientHeight,
                location: window.location.href,
                language: navigator.language
            }
        };
        (await fetch(`${t}/sdk/1/visitors/${r}/analytics`, {
            method: "POST",
            cache: "no-cache",
            headers: n,
            body: JSON.stringify(s)
        })).ok || console.warn("[Sprig] (ERR-444) Failed to track analytics", e)
    }
      , Lt = async(e,t,n,r,i,o)=>{
        $t({
            event: `Video Error ${t}`,
            apiBase: n,
            headers: r,
            visitorId: i,
            envId: o,
            metadata: {
                errorMessage: e.message
            }
        });
        const a = F.document.documentElement
          , s = {
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            clientWidth: a.clientWidth,
            clientHeight: a.clientHeight,
            location: window.location.href,
            language: navigator.language
        }
          , l = {
            action: t,
            err: {
                message: e.message,
                stack: e.stack
            },
            meta: s,
            vid: i,
            envId: o
        };
        (await fetch(`${n}/sdk/1/errors`, {
            method: "POST",
            cache: "no-cache",
            headers: {
                ...r,
                "userleap-platform": "video_recorder",
                "x-ul-error": window.btoa(`userleap-${Date.now()}-error`)
            },
            body: JSON.stringify(l)
        })).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", e)
    }
      , X_ = (e,{type: t, content: n})=>new Promise(function(r, i) {
        let o;
        t === "script" ? (o = F.document.createElement("script"),
        o.src = n) : t === "link" ? (o = F.document.createElement("link"),
        o.rel = "stylesheet",
        o.href = n,
        o.type = "text/css") : (o = F.document.createElement("style"),
        o.innerHTML = n),
        o.onload = function() {
            r(n)
        }
        ,
        o.onerror = function() {
            i(n)
        }
        ,
        o.async = !1,
        o.id = btoa(n),
        e.appendChild(o)
    }
    )
      , Af = (e,t)=>{
        if (e.length === 0)
            return t && t();
        Promise.all(e.reduce((n,r)=>(n.push(X_(F.document.head, r)),
        n), [])).then(()=>{
            F.videojs = F.document.defaultView.videojs,
            t && t()
        }
        ).catch(function(n) {
            console.log(n + " failed to load")
        })
    }
      , Tf = (e,t,n)=>{
        if (t === "start" && (e.style.visibility = "visible"),
        t === "none")
            e.style.visibility = Ee;
        else if (t === "success")
            e.style.visibility = Ee,
            e.innerHTML = "Upload succeeded!";
        else {
            const r = Math.round(parseFloat(n));
            e.innerHTML = `Uploading <span class="ul-upload-progress-label__time">${r}%</span>`,
            e.style.background = `linear-gradient(to right, #E0E0EB 0%, #E0E0EB ${r}%, #FCFCFD ${r}%, #FCFCFD 100%)`
        }
    }
      , gs = (e,t)=>{
        const n = F.videojs(e.id());
        return n == null ? void 0 : n.payload[t]
    }
      , J_ = (e,t,n,r,i)=>{
        const {surveyId: o, responseGroupUid: a, visitorId: s, envId: l} = e.payload;
        e.on("deviceError", function() {
            console.warn("device error: ", e.deviceErrorCode),
            e.deviceErrorCode.message === "Permission denied" ? (e.deviceButton.addClass("permission-denied"),
            n && n(G.ERROR, {
                type: G.PERMISSION_DENIED
            }),
            $t({
                event: "Video Permission Denied",
                apiBase: t,
                headers: i,
                visitorId: s,
                envId: l,
                metadata: {
                    questionId: gs(e, ps),
                    responseGroupUid: a,
                    surveyId: o
                }
            })) : (n && n(G.ERROR, {
                type: G.OTHER
            }),
            Lt(new Error(e.deviceErrorCode.message), "recorderDeviceError", t, i, s, l))
        }),
        e.on("error", function(u, c) {
            Lt(c || e.error(), "recorderError", t, i, s, l)
        }),
        e.on("startRecord", function(u, c) {
            r(e.uploadProgressLabel, "none"),
            $t({
                event: "Video Record Start",
                apiBase: t,
                headers: i,
                visitorId: s,
                envId: l,
                metadata: {
                    questionId: gs(e, ps),
                    responseGroupUid: a,
                    surveyId: o
                }
            })
        }),
        e.on("finishRecord", async function() {
            r(e.uploadProgressLabel, "start", 0);
            const u = gs(e, ps);
            if (!o) {
                const m = "internal error: missing fields in payload";
                return n && n(G.ERROR, {
                    type: G.OTHER
                }),
                Lt(new Error(m), "finishRecord", t, i, s, l),
                null
            }
            e.record().stopDevice();
            const c = e.cameraOff ? G.MEDIA_TYPE_AUDIO : G.MEDIA_TYPE_VIDEO
              , d = Nt();
            $t({
                event: "Video Record Finish",
                apiBase: t,
                headers: i,
                visitorId: s,
                envId: l,
                metadata: {
                    mediaRecordingUid: d,
                    questionId: u,
                    responseGroupUid: a,
                    surveyId: o,
                    mediaType: c
                }
            });
            const f = {
                surveyId: o,
                updatedAt: new Date().toISOString(),
                mediaType: c,
                mediaRecordingUid: d
            };
            u && (f.questionId = u),
            a && (f.responseGroupUid = a),
            s && (f.visitorId = s);
            const h = await (async()=>{
                const m = await fetch(`${t}/2/environments/integrations/upload`, {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(f)
                });
                if (m.ok) {
                    const g = await m.json();
                    return n && n(G.UPLOAD_STARTED, {
                        [G.UPLOAD_ID]: g.upload.id,
                        [G.MEDIA_TYPE]: c,
                        [G.MEDIA_RECORDING_UID]: d
                    }),
                    g.upload.url
                } else
                    return n && n(G.ERROR, {
                        type: G.OTHER,
                        response: m
                    }),
                    Lt(new Error("failed to get upload response with url"), "finishRecord", t, i, s, l),
                    null
            }
            )();
            !h || (ft = F.document.defaultView.UpChunk.createUpload({
                endpoint: h,
                file: new F.document.defaultView.File([e.recordedData],`recording ${c} ${Date.now()}`),
                chunkSize: 5120
            }),
            ft.startTime = Date.now(),
            $t({
                event: "Video Upload Start",
                apiBase: t,
                headers: i,
                visitorId: s,
                envId: l,
                metadata: {
                    mediaRecordingUid: d,
                    questionId: u,
                    responseGroupUid: a,
                    surveyId: o,
                    mediaType: c,
                    url: h
                }
            }),
            ft.on("error", m=>{
                r(e.uploadProgressLabel, "none"),
                n && n(G.UPLOAD_FINISHED, {
                    [G.MEDIA_RECORDING_UID]: d
                }),
                Lt(m, "finishRecord", t, i, s, l)
            }
            ),
            ft.on("progress", m=>{
                n && n(G.UPLOAD_PROGRESS, {
                    [G.MEDIA_RECORDING_UID]: d,
                    [G.UPLOAD_PROGRESS_PCT]: m.detail
                }),
                r(e.uploadProgressLabel, "progress", m.detail)
            }
            ),
            ft.on("success", ()=>{
                r(e.uploadProgressLabel, "success"),
                n && n(G.UPLOAD_FINISHED, {
                    [G.MEDIA_RECORDING_UID]: d
                }),
                $t({
                    event: "Video Upload Success",
                    apiBase: t,
                    headers: i,
                    visitorId: s,
                    envId: l,
                    metadata: {
                        mediaRecordingUid: d,
                        questionId: u,
                        responseGroupUid: a,
                        surveyId: o,
                        mediaType: c,
                        url: h,
                        elapsedMs: ft.startTime && Date.now() - ft.startTime
                    }
                })
            }
            ))
        })
    }
      , Rf = (e,t)=>{
        const n = new (F.videojs.getComponent("Component"))(e);
        return n.addClass("ul-buttons-panel"),
        t.map(r=>{
            n.addChild(r)
        }
        ),
        eb(n),
        n
    }
      , eb = e=>{
        e.children().forEach(t=>{
            if (tt[t.name_]) {
                const n = Xi(tt[t.name_], `ul-${tt[t.name_]}`);
                t.el_.appendChild(n)
            }
        }
        )
    }
      , Xi = (e,t="")=>{
        const n = F.document.createElement("span");
        return n.className = "ul-button-text",
        n.innerHTML = e,
        n.id = t,
        n
    }
      , Lf = (e,t,n,r,i=!1,o)=>{
        e.addClass("ul-video-player");
        const a = new (F.videojs.getComponent("Component"))(e);
        a.addClass("ul-control-panel"),
        e.progressBar = a.addChild("ProgressControl"),
        n && e.src(n),
        e.audioPlayerPlaceholder = new (F.videojs.getComponent("Component"))(e),
        e.audioPlayerPlaceholder.addClass("ul-audio-recorder-placeholder");
        const s = n && n.src ? lb(n.src) : null;
        n && (i || !s) ? (e.children()[0].classList.add("vjs-hidden"),
        F.document.getElementById(`${e.id()}_html5_api`).style.height = "0px") : (e.audioPlayerPlaceholder.hide(),
        F.document.getElementById(`${e.id()}_html5_api`).style.height = "100%",
        s && e.poster(s)),
        e.on("play", ()=>{
            !i && n && !s && rb(e, !1),
            o == null || o.play()
        }
        ),
        e.on("pause", ()=>{
            o == null || o.pause()
        }
        ),
        e.on("seeked", ()=>{
            o == null || o.currentTime(e.currentTime())
        }
        ),
        e.on("ratechange", ()=>{
            o == null || o.playbackRate(e.playbackRate())
        }
        ),
        e.addChild(e.audioPlayerPlaceholder, {}, 1),
        a.addChild(t),
        e.addChild(a),
        r && r(e)
    }
      , tb = (e,t,n)=>{
        e.addClass(`ul ${Sf}`);
        const r = new (F.videojs.getComponent("Component"))(e);
        t && e.src(t),
        e.addChild(r),
        n && n(e)
    }
      , nb = (e,t,n,r,i,o,a,s=!1)=>{
        xf = Date.now();
        const u = Ji(t, {
            controls: !1,
            bigPlayButton: !1,
            fluid: !1,
            width: 1280,
            height: 720,
            playsinline: !0,
            plugins: {
                record: {
                    audio: !0,
                    video: {
                        mandatory: {
                            minWidth: 1280,
                            minHeight: 720
                        }
                    },
                    frameWidth: 1280,
                    frameHeight: 720,
                    maxLength: 600,
                    autoMuteDevice: !0
                }
            }
        });
        if (!u)
            return;
        u.payload = n;
        const {surveyId: c, questionId: d, responseGroupUid: f, visitorId: p, envId: h} = n;
        let m;
        const g = T=>{
            const N = hs
              , k = hs + "-audio-only";
            Tf(u.uploadProgressLabel, "none"),
            ft && ft.startTime >= xf && ft.abort();
            const D = F.document.getElementById("ul-camera-button");
            T ? (u.children()[0].classList.add("vjs-hidden"),
            y.removeClass(N),
            y.addClass(k),
            D.innerHTML = tt.TurnOnCamera,
            u.audioPlayerPlaceholder.removeClass("vjs-hidden"),
            m == null || m.getTracks().forEach(A=>{
                A.stop()
            }
            ),
            window.navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !0
            }).then(A=>{
                m = A,
                A.getVideoTracks().forEach(j=>{
                    j.enabled = !1
                }
                ),
                u.record().onDeviceReady(A)
            }
            ).catch(u.record().onDeviceError.bind(u.record()))) : (m == null || m.getVideoTracks().forEach(A=>{
                A.enabled = !0
            }
            ),
            u.children()[0].classList.remove("vjs-hidden"),
            u.record().getDevice(),
            y.removeClass(k),
            y.addClass(N),
            D.innerHTML = tt.TurnOffCamera,
            u.audioPlayerPlaceholder.addClass("vjs-hidden"))
        }
          , _ = new (F.videojs.getComponent("Button"))(u,{
            clickHandler: ()=>{
                _.hasClass(Ee) || ($t({
                    event: "Video Delete Button Clicked",
                    apiBase: r,
                    headers: a,
                    visitorId: p,
                    envId: h,
                    metadata: {
                        questionId: d,
                        responseGroupUid: f,
                        surveyId: c
                    }
                }),
                g(u.cameraOff),
                i(G.DELETE, {}),
                y.removeClass(Ee),
                _.addClass(Ee))
            }
        });
        _.addClass("ul-video-recorder-delete-button"),
        _.el_.appendChild(Xi(tt.DeleteButton, "ul-delete-button"));
        const v = F.document.getElementById(t)
          , b = ()=>{
            v.classList.contains("vjs-fullscreen") && u.cameraOff ? v.style.display = "table" : v.style.display = "flex"
        }
        ;
        b();
        const y = new (F.videojs.getComponent("Button"))(u,{
            clickHandler: ()=>{
                u.record().isRecording() || (u.cameraOff = !u.cameraOff,
                $t({
                    event: "Video Camera Button Clicked",
                    apiBase: r,
                    headers: a,
                    visitorId: n.visitorId,
                    envId: n.envId,
                    metadata: {
                        questionId: d,
                        responseGroupUid: f,
                        surveyId: c,
                        cameraOff: u.cameraOff
                    }
                }),
                g(u.cameraOff),
                !_.hasClass(Ee) && _.addClass(Ee),
                i(G.DELETE, {}),
                b())
            }
        });
        y.addClass(hs),
        y.el_.appendChild(Xi(tt.TurnOffCamera, "ul-camera-button"));
        const C = new (F.videojs.getComponent("Button"))(u,{
            clickHandler: ()=>{
                const T = F.document.getElementById("ul-recorder-toggle");
                if (u.record().isRecording())
                    u.record().stop(),
                    T && (T.innerHTML = tt.RecordButton),
                    C.removeClass(ms),
                    _.removeClass(Ee);
                else {
                    const N = F.document.getElementById("ul-recording-countdown-screen");
                    if (N)
                        N.remove(),
                        T && (T.innerHTML = tt.RecordButton),
                        g(u.cameraOff),
                        i(G.DELETE, {}),
                        y.removeClass(Ee),
                        _.addClass(Ee),
                        C.removeClass(ms),
                        E.show();
                    else {
                        C.addClass(ms),
                        E.hide(),
                        y.addClass(Ee),
                        _.addClass(Ee),
                        T && (T.innerHTML = tt.StopButton);
                        const k = F.document.createElement("div");
                        k.id = "ul-recording-countdown-screen",
                        v.insertBefore(k, v.children[1]),
                        k.style.height = `${v.offsetHeight}px`,
                        Of(u, 3)
                    }
                }
            }
        });
        C.addClass("ul-video-recorder-toggle-button"),
        C.el_.appendChild(Xi(tt.RecordButton, "ul-recorder-toggle"));
        const S = F.document.createElement("p");
        S.style.visibility = "hidden",
        S.className = "ul-upload-progress-label",
        e.appendChild(S),
        u.uploadProgressLabel = S;
        const I = Rf(u, [_, y, "PlayToggle", C, "FullscreenToggle"])
          , E = I.children().find(T=>T.name_ === "FullscreenToggle");
        E.hasClass("vjs-disabled") && E.hide();
        const x = I.children().find(T=>T.name_ === "PlayToggle");
        x.hide(),
        o && y.addClass(Ee),
        !o && _.addClass(Ee),
        Lf(u, I, o, !1, s),
        u.on("stopRecord", ()=>{
            C.hide(),
            x.show(),
            E.show(),
            _.removeClass(Ee)
        }
        ),
        u.on("deviceReady", ()=>{
            C.show(),
            x.hide(),
            _.addClass(Ee)
        }
        ),
        J_(u, r, i, Tf, a),
        o && (u.deviceButton && u.deviceButton.hide(),
        u.src(o),
        x.show(),
        C.hide(),
        _.removeClass(Ee));
        const R = [{
            name: "microphone"
        }];
        !u.cameraOff && R.push({
            name: "camera"
        }),
        Promise.all(R.map(T=>{
            var N;
            return (N = navigator == null ? void 0 : navigator.permissions) == null ? void 0 : N.query(T)
        }
        )).then(T=>{
            T.reduce((k,D)=>k & D.state === "granted", !0) && u && (u.deviceButton && u.deviceButton.hide(),
            !o && u.record().getDevice())
        }
        ).catch(T=>{}
        )
    }
      , Of = (e,t=3)=>{
        const n = F.document.getElementById("ul-recording-countdown-screen");
        n && t === 0 ? (n.remove(),
        e.record().start()) : n && (n.innerHTML = `<span class='ul-countdown-text'>Recording in... ${t}</span>`,
        setTimeout(()=>{
            Of(e, t - 1)
        }
        , 1e3))
    }
      , Nf = e=>{
        const t = F.document.createElement("div");
        return t.className = "ul-video-container",
        t.appendChild(Y_(e)),
        t
    }
      , vs = (e,t)=>{
        const n = F.document.createElement("video");
        n.id = e,
        n.className = "video-js vjs-default-skin ul-video-player-video";
        const r = F.document.createElement("p");
        r.className = "vjs-no-js",
        r.innerHTML = "To view this video please enable JavaScript, and consider upgrading to a web browser that";
        const i = F.document.createElement("a");
        return i.href = "https://videojs.com/html5-video-support/",
        i.target = "_blank",
        i.innerHTML = "supports HTML5 video",
        r.appendChild(i),
        n.appendChild(r),
        t.appendChild(n),
        t
    }
      , rb = (e,t)=>{
        t ? (e.children()[0].classList.add("vjs-hidden"),
        e.audioPlayerPlaceholder.show(),
        F.document.getElementById(`${e.id()}_html5_api`).style.height = "0px") : (e.children()[0].classList.remove("vjs-hidden"),
        e.audioPlayerPlaceholder.hide(),
        F.document.getElementById(`${e.id()}_html5_api`).style.height = "100%")
    }
      , Ji = (e,t)=>F.document.getElementById(e) ? t ? F.videojs(e, t) : F.videojs(e) : (console.error(`Error in finding player element with ID, ${e}`),
    null)
      , ib = (e,t,n,r=!1,i="https://api.sprig.com",o=document,a=null,s=null)=>{
        F.document = o;
        const l = e + If
          , u = Nf(l);
        return F.document.addEventListener("securitypolicyviolation", c=>{
            Lt(new Error(`Voice & Video feature violates ${c.violatedDirective} web page CSP policies for the question player.`), "playerDeviceError", i, {})
        }
        ),
        Af(Ef, ()=>{
            F.document.getElementById(fs(l)).remove(),
            vs(l, u);
            const c = {
                playsinline: !0,
                playbackRates: [.5, 1, 1.5, 2],
                fill: !0
            };
            try {
                const d = e + Sf;
                vs(d, u);
                const f = Ji(l, c)
                  , p = Ji(d, {
                    muted: !0,
                    ...c
                });
                if (!f || !p)
                    return;
                tb(p, a, s),
                a || p.addClass(Ee);
                const h = Rf(f, ["PlaybackRateMenuButton", "PlayToggle", "FullscreenToggle"])
                  , m = h.children().find(g=>g.name_ === "FullscreenToggle");
                m.hasClass("vjs-disabled") && m.hide(),
                Lf(f, h, t, n, r, p)
            } catch (d) {
                Lt(new Error(`Error when creating video player object ${d}`), "playerDeviceError", i, {});
                return
            }
        }
        ),
        u
    }
      , ob = (e,t={},n="https://api.userleap.com",r,i,o,a=!1,s=document)=>{
        F.document = s;
        const l = e + kf
          , u = Nf(l);
        return F.document.addEventListener("securitypolicyviolation", c=>{
            Lt(new Error(`Voice & Video feature violates ${c.violatedDirective} web page CSP policies for the recorder player.`), "recorderDeviceError", n, o, t.visitorId, t.envId)
        }
        ),
        Af(Ef.concat(Q_), ()=>{
            vs(l, u),
            F.document.getElementById(fs(l)).remove();
            try {
                nb(u, l, t, n, r, i, o, a)
            } catch (c) {
                Lt(new Error(`Error when creating video recorder player object ${c}`), "recorderDeviceError", n, o, t.visitorId, t.envId);
                return
            }
        }
        ),
        u
    }
      , ab = e=>{
        const t = e + kf;
        if (!!F.document.getElementById(t) && !!F.videojs) {
            try {
                if (!F.videojs(t).record().stream)
                    return
            } catch {
                return
            }
            F.videojs(t).record().stop(),
            F.videojs(t).record().stopDevice()
        }
    }
      , sb = e=>{
        const t = Ji(e + If);
        t == null || t.pause()
    }
      , lb = e=>{
        if (!e)
            return null;
        const t = e.match(/https:\/\/stream.mux.com\/(.*)/);
        let n = t ? t[1] : null;
        return n.includes(Cf) && (n = n.replace(Cf, "")),
        n ? `https://image.mux.com/${n}/thumbnail.jpg?time=0` : null
    }
      , G = {
        UPLOAD_STARTED: "upload.started",
        UPLOAD_PROGRESS: "upload.progress",
        UPLOAD_FINISHED: "upload.finished",
        DELETE: "delete",
        ERROR: "error",
        MEDIA_TYPE: "media.type",
        PERMISSION_DENIED: "permission_denied",
        OTHER: "other",
        UPLOAD_ID: "upload.id",
        UPLOAD_PROGRESS_PCT: "upload.progress.pct",
        MEDIA_RECORDING_UID: "media.recording.uid",
        MEDIA_TYPE_VIDEO: "video",
        MEDIA_TYPE_AUDIO: "audio"
    }
      , tt = {
        PlaybackRateMenuButton: "Speed",
        PlayToggle: "Play",
        FullscreenToggle: "Expand",
        TurnOnCamera: "Turn on",
        TurnOffCamera: "Turn off",
        DeleteButton: "Delete",
        RecordButton: "Record",
        StopButton: "Stop",
        PauseButton: "Pause"
    }
      , Ur = "ul-card-video__player_recorder"
      , ub = "ul-card-video__skip_button"
      , cb = "ul-video-interview-form"
      , Df = "ul-video-btn"
      , db = ({className: e, message: t, next: n, properties: r, questionId: i, type: o})=>{
        const {apiURL: a, envId: s, handleUploadUpdate: l, headers: u, responseGroupUid: c, surveyId: d, viewDocument: f, visitorId: p} = le(k=>({
            apiURL: k.apiURL,
            envId: k.envId,
            handleUploadUpdate: k.handleUploadUpdate,
            headers: k.headers,
            responseGroupUid: k.responseGroupUid,
            surveyId: k.surveyId,
            viewDocument: k.viewDocument,
            visitorId: k.userId
        }))
          , [h,m] = Se(!1)
          , [g,_] = Se(null)
          , [v,b] = Se(null)
          , [y,C] = Se(0)
          , S = u["userleap-platform"]
          , I = r && r.videoUrl
          , E = (k,D)=>{
            k === G.UPLOAD_STARTED ? (_(D[G.UPLOAD_ID]),
            b(D[G.MEDIA_RECORDING_UID]),
            m(!0)) : k === G.DELETE ? (_(null),
            b(null),
            m(!1)) : k === G.UPLOAD_PROGRESS ? isNaN(D[G.UPLOAD_PROGRESS_PCT]) ? l({
                mediaRecordingUid: D[G.MEDIA_RECORDING_UID],
                isComplete: !0
            }) : l({
                mediaRecordingUid: D[G.MEDIA_RECORDING_UID],
                progressPct: D[G.UPLOAD_PROGRESS_PCT]
            }) : k === G.UPLOAD_FINISHED && l({
                mediaRecordingUid: D[G.MEDIA_RECORDING_UID],
                isComplete: !0
            })
        }
          , x = k=>{
            if (k && k.children.length === 0) {
                const D = ib(Ur, {
                    src: I,
                    type: "application/x-mpegURL"
                }, void 0, r.mediaType === G.MEDIA_TYPE_AUDIO, a, f);
                k.appendChild(D)
            }
        }
          , R = k=>{
            if (k && k.children.length === 0) {
                const D = ob(Ur, {
                    surveyId: d,
                    responseGroupUid: c,
                    questionId: i,
                    visitorId: p,
                    envId: s
                }, a, E, void 0, {
                    ...u,
                    "x-ul-video-recorder-origin": "sdk"
                }, r.mediaType === G.MEDIA_TYPE_AUDIO, f);
                k.appendChild(D)
            }
        }
          , T = k=>{
            k.preventDefault(),
            k.stopPropagation(),
            ab(Ur),
            g && v ? (l({
                mediaRecordingUid: v,
                isSubmitted: !0
            }),
            n({
                value: {
                    mediaRecordingUid: v
                },
                questionId: i,
                type: o
            })) : n({
                value: null,
                questionId: i,
                type: o
            })
        }
          , N = ()=>w(Gt, {
            defaultBody: ()=>w("button", {
                className: `${Df} ul-record-response-btn`,
                onClick: k=>{
                    k.preventDefault(),
                    k.stopPropagation(),
                    sb(Ur),
                    C(1)
                }
            }),
            properties: r
        });
        return w("div", {
            className: B(ot(L.CardMainContent, S)),
            style: {
                marginTop: "unset"
            },
            children: w("form", {
                className: B([e, L.VideoCard, L.FadeInTransition]),
                id: cb,
                children: [w(ct, {
                    message: t,
                    properties: r
                }), w("div", {
                    id: "ul-card-voice__video",
                    children: [w("div", {
                        children: [w("div", {
                            id: "ul-question-player-container",
                            style: {
                                display: y === 0 ? "" : "none"
                            },
                            children: [w("div", {
                                id: Ur,
                                ref: x
                            }), N()]
                        }), w("div", {
                            style: {
                                display: y === 1 ? "block" : "none"
                            },
                            children: [w("button", {
                                className: `${Df} ul-back-question-btn`,
                                onClick: k=>{
                                    k.preventDefault(),
                                    k.stopPropagation(),
                                    C(0)
                                }
                            }), w("div", {
                                id: "ul-recorder-player-container",
                                ref: R
                            })]
                        })]
                    }), w(je, {
                        disabled: !h,
                        onClick: T,
                        children: qn(r)
                    }), w("button", {
                        className: `ul-card-text__button ${L.InactiveButton} ${L.SkipButton}`,
                        id: ub,
                        onClick: T,
                        style: {
                            display: r.required ? "none" : "block",
                            ...h ? {
                                display: "none"
                            } : {}
                        },
                        children: ss(r)
                    })]
                })]
            })
        })
    }
      , fb = ({className: e})=>{
        const {headers: t, uploadProgress: n} = le(a=>({
            headers: a.headers,
            uploadProgress: a.uploadProgress
        }));
        let r, i;
        Object.values(n).filter(a=>a.isSubmitted).length > 1 ? (r = "Your responses are processing",
        i = "Please keep this tab open until your responses are fully processed.") : (r = "Your response is processing",
        i = "Please keep this tab open until your response is fully processed.");
        const o = Math.round(Math.min(99, ...Object.values(n).filter(a=>a.isSubmitted).map(a=>a.progressPct)));
        return w("div", {
            className: B(ot(L.CardMainContent, t["userleap-platform"])),
            children: w("div", {
                className: B([e, "ul-card--uploading", L.FadeInTransition]),
                children: [w("div", {
                    "aria-busy": "true",
                    "aria-label": "Processing...",
                    "aria-live": "polite",
                    className: L.LoadingSpinnerContainer,
                    role: "progressbar",
                    children: w("div", {
                        className: L.LoadingSpinner,
                        children: [w("div", {
                            className: L.LoadingSpinnerFirst
                        }), w("div", {
                            className: L.LoadingSpinnerSecond
                        }), w("div", {
                            className: L.LoadingSpinnerThird
                        }), w("div", {
                            className: L.LoadingSpinnerFourth
                        })]
                    })
                }), w(ct, {
                    message: `${r} (${o}% complete)`
                }), w("p", {
                    className: L.Caption,
                    children: i
                })]
            })
        })
    }
      , Uf = ()=>w("svg", {
        alt: "Powered by Sprig",
        fill: "none",
        height: "13",
        viewBox: "0 0 100 13",
        width: "100",
        xmlns: "http://www.w3.org/2000/svg",
        children: [w("path", {
            d: "M3.0369 0.839981H0.0249023V8.99998H1.3209V6.53998H2.8569C4.8969 6.53998 6.2409 5.37598 6.2409 3.62398C6.2409 1.95598 4.9689 0.839981 3.0369 0.839981ZM3.0009 5.35198H1.3209V2.02798H3.0009C4.1769 2.02798 4.9689 2.67598 4.9689 3.62398C4.9689 4.65598 4.1769 5.35198 3.0009 5.35198Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M9.90653 3.21598C8.15453 3.21598 6.90653 4.45198 6.90653 6.17998C6.90653 7.90798 8.15453 9.14398 9.90653 9.14398C11.6585 9.14398 12.9065 7.90798 12.9065 6.17998C12.9065 4.45198 11.6585 3.21598 9.90653 3.21598ZM9.90653 8.01598C8.88653 8.01598 8.15453 7.23598 8.15453 6.17998C8.15453 5.11198 8.88653 4.34398 9.90653 4.34398C10.9265 4.34398 11.6585 5.11198 11.6585 6.17998C11.6585 7.23598 10.9265 8.01598 9.90653 8.01598Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M20.9631 3.35998L19.7391 7.11598L18.3951 3.35998H17.3271L15.9831 7.12798L14.7591 3.35998H13.4151L15.4431 8.99998H16.5351L17.8671 5.08798L19.1871 8.99998H20.2791L22.3071 3.35998H20.9631Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M25.7246 3.21598C24.0086 3.21598 22.8206 4.51198 22.8206 6.17998C22.8206 7.85998 24.0206 9.14398 25.7966 9.14398C27.0206 9.14398 28.0166 8.54398 28.3766 7.52398H27.0086C26.7806 7.88398 26.3606 8.05198 25.8086 8.05198C24.7526 8.05198 24.2126 7.40398 24.0926 6.55198H28.5206C28.7606 4.64398 27.5966 3.21598 25.7246 3.21598ZM25.7366 4.27198C26.6126 4.27198 27.2126 4.76398 27.2846 5.68798H24.1166C24.2606 4.89598 24.8006 4.27198 25.7366 4.27198Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M31.1297 4.12798V3.35998H29.8817V8.99998H31.1297V5.44798C31.6337 4.78798 32.3177 4.45198 33.2177 4.41598V3.23998C32.3537 3.23998 31.6457 3.56398 31.1297 4.12798Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M36.8222 3.21598C35.1062 3.21598 33.9182 4.51198 33.9182 6.17998C33.9182 7.85998 35.1182 9.14398 36.8942 9.14398C38.1182 9.14398 39.1142 8.54398 39.4742 7.52398H38.1062C37.8782 7.88398 37.4582 8.05198 36.9062 8.05198C35.8502 8.05198 35.3102 7.40398 35.1902 6.55198H39.6182C39.8582 4.64398 38.6942 3.21598 36.8222 3.21598ZM36.8342 4.27198C37.7102 4.27198 38.3102 4.76398 38.3822 5.68798H35.2142C35.3582 4.89598 35.8982 4.27198 36.8342 4.27198Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M45.4886 0.47998V3.80398C45.0086 3.43198 44.3966 3.21598 43.6766 3.21598C42.0926 3.21598 40.8206 4.53598 40.8206 6.16798C40.8206 7.82398 42.0926 9.14398 43.6766 9.14398C44.3966 9.14398 45.0086 8.92798 45.4886 8.54398V8.99998H46.7246V0.47998H45.4886ZM43.8566 8.01598C42.8246 8.01598 42.0686 7.17598 42.0686 6.16798C42.0686 5.17198 42.8246 4.34398 43.8566 4.34398C44.4806 4.34398 45.0686 4.55998 45.4886 5.15998V7.18798C45.0686 7.79998 44.4806 8.01598 43.8566 8.01598Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M54.6797 3.21598C53.9597 3.21598 53.3477 3.43198 52.8797 3.79198V0.47998H51.6317V8.99998H52.8797V8.55598C53.3477 8.92798 53.9597 9.14398 54.6797 9.14398C56.2637 9.14398 57.5477 7.82398 57.5477 6.16798C57.5477 4.53598 56.2637 3.21598 54.6797 3.21598ZM54.4997 8.01598C53.8757 8.01598 53.2997 7.79998 52.8797 7.21198V5.13598C53.2997 4.54798 53.8757 4.34398 54.4997 4.34398C55.5437 4.34398 56.2997 5.17198 56.2997 6.16798C56.2997 7.17598 55.5437 8.01598 54.4997 8.01598Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M63.3347 3.34798L61.3907 7.76398L59.2667 3.34798H57.9347L60.8147 9.08398L59.6267 11.784H60.9347L64.6547 3.34798H63.3347Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M71.1466 4.34661C69.8092 4.05038 69.131 3.53001 69.131 2.80065C69.131 2.04705 69.8546 1.47822 70.8142 1.47822C71.8034 1.47822 72.5496 2.10339 72.5496 2.9321V2.99813H73.9165V2.9321C73.9165 1.41764 72.5883 0.272705 70.8271 0.272705C69.9784 0.272705 69.2009 0.533191 68.6379 1.0057C68.3584 1.23619 68.1339 1.52487 67.9805 1.8511C67.8271 2.17733 67.7486 2.53303 67.7506 2.89273C67.7451 3.22255 67.8137 3.54949 67.9515 3.84994C68.0894 4.15038 68.293 4.41686 68.5478 4.63012C69.0218 5.04266 69.6945 5.34798 70.5463 5.5388C71.9806 5.85502 72.7078 6.39296 72.7078 7.13686C72.7078 7.94316 71.9156 8.55076 70.8682 8.55076C69.7804 8.55076 68.9599 7.87531 68.9599 6.97996V6.91393H67.5918V6.97996C67.5918 8.56348 68.9942 9.75688 70.8535 9.75688C71.7426 9.75688 72.5588 9.48731 73.1518 8.99662C73.446 8.75831 73.6827 8.4581 73.8445 8.1179C74.0063 7.7777 74.0891 7.40611 74.087 7.03024C74.087 5.6854 73.0991 4.78217 71.1466 4.34661Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M78.7986 2.50806C78.2874 2.50175 77.7823 2.6176 77.3263 2.84576C76.8703 3.07391 76.4768 3.40759 76.1795 3.81837V2.66738H74.8789V12.0752H76.1795V8.48716C76.4768 8.8979 76.8703 9.23152 77.3263 9.45957C77.7824 9.68763 78.2875 9.80335 78.7986 9.79687C80.8167 9.79687 82.3381 8.23031 82.3381 6.15246C82.3381 4.07462 80.8167 2.50806 78.7986 2.50806ZM80.9835 6.42264C80.9316 6.9629 80.6921 7.46879 80.3056 7.8544C79.919 8.24001 79.4093 8.48156 78.863 8.53804C78.1369 8.61074 77.4605 8.40295 76.9583 7.95407C76.4561 7.50518 76.1795 6.86365 76.1795 6.15246C76.1795 4.7846 77.2122 3.75295 78.5815 3.75295C79.2904 3.75295 79.9306 4.02191 80.3776 4.51018C80.8387 5.01116 81.054 5.69025 80.9835 6.42264Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M98.2908 2.6692V3.80747C97.6776 2.97875 96.7302 2.50806 95.6583 2.50806C93.6482 2.50806 92.1323 4.04615 92.1323 6.08582C92.1323 8.1255 93.6482 9.66299 95.6583 9.66299C96.7345 9.66299 97.6819 9.19714 98.2908 8.37691V8.55198C98.2908 9.96891 97.3906 10.8843 95.9974 10.8843C95.0561 10.8843 94.2718 10.4766 93.8996 9.79384L93.8806 9.7587H92.5389L92.5695 9.84654C92.7961 10.514 93.2392 11.0889 93.8303 11.4822C94.4233 11.8723 95.1726 12.0783 95.9974 12.0783C97.0552 12.0783 97.9554 11.7451 98.6017 11.1157C99.2481 10.4862 99.5915 9.6012 99.5915 8.56773V2.6692H98.2908ZM97.5611 7.842C97.0092 8.36418 96.2225 8.58348 95.4001 8.44294C94.9132 8.35796 94.4664 8.12184 94.1245 7.76889C93.7827 7.41593 93.5636 6.96452 93.4992 6.48019C93.3833 5.66541 93.631 4.89364 94.1786 4.36418C94.6383 3.92741 95.2542 3.68788 95.8919 3.69782C96.0464 3.69795 96.2006 3.71031 96.3531 3.73477C97.3459 3.89349 98.1314 4.70403 98.2632 5.71024C98.3749 6.53835 98.1179 7.31436 97.5611 7.842Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M90.705 0.0995975C90.4602 0.046773 90.2043 0.0911971 89.9925 0.223269C89.7806 0.35534 89.6299 0.564452 89.5729 0.805409C89.5159 1.04637 89.5571 1.29982 89.6877 1.51098C89.8183 1.72215 90.0277 1.87407 90.2708 1.93391C90.3415 1.94954 90.4136 1.95747 90.486 1.95754C90.72 1.9579 90.9458 1.87325 91.1206 1.71973C91.2955 1.5662 91.407 1.35452 91.4341 1.125C91.4611 0.89547 91.4017 0.664135 91.2673 0.475046C91.1329 0.285958 90.9327 0.152325 90.705 0.0995975V0.0995975Z",
            fill: "#5D696F"
        }), w("path", {
            d: "M89.8366 8.39143H88.715C87.9178 8.39143 87.4389 7.85531 87.4389 6.95693C87.4389 6.08096 87.8681 5.03659 88.7432 3.76444L88.7548 3.74748V3.38825L85.0271 2.86727C85.0284 2.71553 84.9886 2.56622 84.9118 2.43478C84.8351 2.30335 84.7241 2.19458 84.5905 2.11973C84.2563 1.938 83.8908 1.938 83.5879 2.11368C83.4361 2.2023 83.3122 2.33077 83.23 2.4848C83.1477 2.63884 83.1103 2.8124 83.1219 2.98618C83.1336 3.15996 83.1938 3.32714 83.2958 3.46914C83.3979 3.61114 83.5379 3.72238 83.7001 3.79049L82.5405 9.63753H83.8283L84.8977 4.08551L86.9115 4.42111C86.3701 5.38007 86.0953 6.27421 86.0953 7.07869C86.0953 8.56347 87.0041 9.53576 88.4734 9.62965V9.63753H91.1341V2.69099H89.8366V8.39143Z",
            fill: "#5D696F"
        })]
    })
      , pb = ()=>{
        const {border: e, cards: t, headers: n, index: r, marketingUrl: i, showSurveyBrand: o, slugName: a, surveyId: s, viewedCardCount: l} = le(m=>({
            border: m.border,
            cards: m.cards,
            headers: m.headers,
            index: m.index,
            marketingUrl: m.marketingUrl,
            showSurveyBrand: m.showSurveyBrand,
            slugName: m.slugName,
            surveyId: m.surveyId,
            viewedCardCount: m.viewedCardCount
        }))
          , u = Kt(null)
          , c = t.filter(m=>m.type !== O.Uploading && m.type !== O.Thanks)
          , d = v_(t, r)
          , f = l + 1
          , p = f / (f + d);
        $e(()=>{
            u.current && (u.current.style.width = `${p * 100}%`)
        }
        , [p]);
        const h = ()=>o ? w("a", {
            href: `${i}?utm_source=survey_branding&utm_medium=website&utm_campaign=${a}&utm_content=${s}`,
            rel: "noreferrer",
            style: {
                display: "block",
                margin: "5px 0"
            },
            target: "_blank",
            children: w(Uf, {})
        }) : null;
        return !c || c.length === 1 ? w("footer", {
            className: "ul-footer",
            style: o ? {} : {
                marginBottom: "10px"
            },
            children: h()
        }) : w("footer", {
            className: `ul-footer ${n["userleap-platform"] === "link" ? "ul-footer__link" : ""}`,
            children: [c.length > 1 && w("div", {
                id: "ul-progress-bar-container",
                children: w("div", {
                    id: "ul-progress-bar-current",
                    ref: u,
                    style: {
                        border: `1px solid ${e || "#000"}`
                    }
                })
            }), o && w("a", {
                href: `${i}?utm_source=survey_branding&utm_medium=website&utm_campaign=${a}&utm_content=${s}`,
                rel: "noreferrer",
                style: {
                    display: "block",
                    margin: "5px 0"
                },
                target: "_blank",
                children: w(Uf, {})
            })]
        })
    }
      , hb = ()=>{
        const {answers: e, border: t, cards: n, close: r, configureExitOnOverlayClick: i, destroy: o, endCard: a, eventEmitFn: s, fontFamily: l, headers: u, index: c, next: d, showStripes: f, update: p, useMobileStyling: h, viewDocument: m} = le(k=>({
            answers: k.answers,
            border: k.border,
            cards: k.cards,
            close: k.close,
            configureExitOnOverlayClick: k.configureExitOnOverlayClick,
            destroy: k.destroy,
            endCard: k.endCard,
            eventEmitFn: k.eventEmitFn,
            fontFamily: k.fontFamily,
            headers: k.headers,
            index: k.index,
            next: k.next,
            showStripes: k.showStripes,
            update: k.update,
            useMobileStyling: k.useMobileStyling,
            viewDocument: k.viewDocument
        }))
          , g = Kt(null)
          , _ = Kt(!1)
          , {props: v, type: b, name: y} = n[c]
          , C = n.length;
        $e(()=>{
            g.current && (g.current.classList.contains("ul-app--visible") || g.current.classList.add("ul-app--visible"),
            !_.current && s && (_.current = !0,
            s(z.SurveyAppeared)))
        }
        , [s]),
        $e(()=>{
            p()
        }
        , [c, p]),
        $e(()=>{
            i(()=>r())
        }
        , [r, i]);
        const S = ()=>r(bn)
          , I = k=>{
            k.key === "Enter" && S()
        }
          , E = async function(k) {
            d({
                data: k,
                completeSurvey: ()=>{
                    o(bn)
                }
                ,
                endCard: a
            }),
            em(m)
        };
        if (e) {
            for (const k of e)
                if (k.questionId === y) {
                    let D;
                    if (b === O.MultipleChoice) {
                        const A = v.options.find(({value: j})=>j === k.value);
                        if (!A)
                            break;
                        D = {
                            [A.id]: A.value
                        }
                    } else
                        D = k.value;
                    E({
                        value: D,
                        type: b,
                        questionId: k.questionId
                    });
                    break
                }
        }
        const x = ()=>[Jt.Email, Jt.Link].includes(u["userleap-platform"]) ? !1 : !a || c + 1 !== C
          , R = ()=>h ? {
            borderColor: t
        } : {
            borderColor: t,
            margin: "15px"
        }
          , T = ()=>{
            const k = {
                className: "ul-card",
                next: E,
                questionId: y,
                type: b
            };
            switch (b) {
            case O.ConsentLegal:
                return pe(x_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.Likert:
                return pe(T_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.MultipleChoice:
                return pe(R_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.MultipleSelect:
                return pe(L_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.NPS:
                return pe(O_, {
                    ...k,
                    key: y,
                    props: v
                });
            case O.Open:
                return pe(N_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.RecordedTask:
                return pe(K_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.TextUrlPrompt:
                return pe($_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.Thanks:
                return pe(q_, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.Uploading:
                return pe(fb, {
                    ...k,
                    ...v,
                    key: y
                });
            case O.VideoVoice:
                return pe(db, {
                    ...k,
                    ...v,
                    key: y
                });
            default:
                return null
            }
        }
          , N = k=>{
            var ee;
            const D = window.sprigAPI
              , A = k.target;
            if (!D || !A)
                return;
            const j = [A, A.parentElement];
            for (const ue of j)
                if (((ee = ue == null ? void 0 : ue.tagName) == null ? void 0 : ee.toLowerCase()) === "a") {
                    k.preventDefault(),
                    D == null || D.openUrl(ue.href);
                    return
                }
        }
        ;
        return w("div", {
            className: B("ul-app", En(u) ? "ul-app--visible" : "ul-app--overlay"),
            id: bn,
            onClick: N,
            ref: g,
            style: {
                "--theme": t,
                ...l ? {
                    fontFamily: l.replace(";", "")
                } : {}
            },
            children: w("div", {
                className: "ul-app__container",
                children: [w("div", {
                    className: B(ve(L.CardContainer, h)),
                    style: R(),
                    children: [f && w("div", {
                        className: "ul-header__container",
                        children: w("div", {
                            className: "ul-header",
                            children: "For development purposes only"
                        })
                    }), T(), w(pb, {})]
                }), x() && w("div", {
                    className: B(ve(L.CloseContainer, h)),
                    children: w("div", {
                        "aria-label": "Close button",
                        className: L.CloseButton,
                        onClick: S,
                        onKeyPress: I,
                        role: "button",
                        tabIndex: 0,
                        children: w("svg", {
                            fill: "none",
                            height: "18px",
                            viewBox: "0 0 13 13",
                            width: "18px",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: w("path", {
                                d: "M2.54964 1.78369L1.78369 2.54964L5.73405 6.5L1.78369 10.4504L2.54964 11.2163L6.5 7.26595L10.4504 11.2163L11.2163 10.4504L7.26595 6.5L11.2163 2.54964L10.4504 1.78369L6.5 5.73405L2.54964 1.78369Z",
                                fill: "#262136"
                            })
                        })
                    })
                })]
            })
        })
    }
      , mb = `html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.ul-card{flex:1 1 auto;border-radius:2px;display:flex;flex-direction:column;font-size:17px;line-height:19px;text-align:left;margin:auto}.ul-card__container--desktop{border:2px solid #fff;box-shadow:0 0 15px #00000026}.ul-card__container--mobile{border-width:0;box-shadow:0 0 5px #00000040;margin-top:5px}.ul-card__container{background:#ffffff;border-radius:6px;display:flex;flex-direction:column;flex-grow:1;flex:1 1 auto;font-size:17px;line-height:23px;overflow:auto;padding:20px 20px 5px;position:relative;text-align:center;word-break:break-word}.ul-card-vertical__button-wrapper{flex-direction:column;align-items:center}.ul-card__button-wrapper{margin-top:4px;margin-bottom:3px;display:flex;gap:16px;justify-content:center}.ul-rich-text-body{min-height:2em}.ul-rich-text-body,.ul-rich-text-body p{margin-top:10px;margin-bottom:10px}.ul-rich-text-body li{margin:5px 0 5px 20px}.ul-rich-text-body p,.ul-rich-text-body li{font-size:15px;line-height:130.35%;letter-spacing:.02em;color:#343442;text-align:left;white-space:pre-line}.ul-rich-text-body:last-child,.ul-rich-text-body li:last-child{margin-bottom:15px}.ul-card-main-content__link,.ul-card-main-content__email{flex-grow:55;display:flex}.ul-card-main-content__web,.ul-card-main-content__android,.ul-card-main-content__ios{padding-top:15px;margin-bottom:5px}.ul-question{color:#343442;display:block;font-size:20px;line-height:125%;font-weight:500;cursor:default;text-align:left}.ul-caption{flex:1 0 auto;margin-top:8px;margin-bottom:15px;font-size:15px;line-height:130.35%;letter-spacing:.02em;color:#6c6c6e;text-align:left}.ul-card__choices{margin:5px 0 0;flex:1 0}.choice--mobile{border:2px solid #e6e6e6}.choice--desktop{border:1px solid #e6e6e6}.choice{align-items:flex-start;color:#262136;cursor:pointer;display:flex;justify-content:flex-start;flex-direction:column;box-sizing:border-box;border-radius:3px;margin-bottom:7px;font-size:15px;line-height:20px;padding:10px 20px 10px 15px;background-color:#00000003}.choice--desktop:hover,.choice--desktop:active,.choice--mobile:active{background-color:#0000000d}.choice-label-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:fit-content;flex:0 0 fit-content}.choice-text-entry-container{width:100%;height:fit-content;flex:0 1 fit-content;overflow:hidden}.choice .choice-text-input--mobile{max-height:63px}.choice .choice-text-input--desktop{max-height:150px}.choice .choice-text-input{box-sizing:border-box;background-color:transparent;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:20px;max-height:60px;padding:0;margin-top:8px;resize:none;width:100%;font-size:14px;line-height:20px;outline:none;border:none;overflow-wrap:break-word}.choice .choice-text-input::placeholder{color:#6c6c6e80}.ul-thanks-check{text-align:center;margin-bottom:20px}.ul-card--thanks-content{padding:20px 0 10px}.ul-card--thanks .ul-question{padding-top:0;text-align:center}.ul-card--thanks .ul-caption{padding-top:0;text-align:center;overflow-wrap:break-word;hyphens:auto;hyphenate-limit-lines:no-limit}.ul-card--uploading .ul-question{padding-top:15px;text-align:center}.ul-card--uploading .ul-caption{padding-top:5px;text-align:center;overflow-wrap:break-word}.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.select-checkbox{height:16px;width:16px;border-radius:3px;border:1px solid #323232;display:flex;box-sizing:border-box;box-shadow:inset 3px 3px #0000001a;background-color:"transparent";align-items:center;justify-content:center}.select-radio{height:16px;width:16px;border-radius:16px;border:1px solid #323232;display:flex;box-sizing:border-box;box-shadow:inset 2px 2px #0000001a;background-color:"transparent";align-items:center;justify-content:center}.fade-in-transition{animation:fadeIn .4s ease-in;-webkit-animation:fadeIn .4s ease-in;-moz-animation:fadeIn .4s ease-in;-o-animation:fadeIn .4s ease-in;-ms-animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}to{opacity:1}}[class^=CenteredSurveyLayout] .ul-header__container,[class^=QuestionConceptTestLayout] .ul-header__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{margin-bottom:unset}[class^=CenteredSurveyLayout] .ul-card__container,[class^=QuestionConceptTestLayout] .ul-card__container,.ul-websurvey-frame .ul-card__container,.ul-websurvey-frame-mobile .ul-card__container{box-shadow:unset;border-radius:unset;border:none!important;position:unset}@media only screen and (min-height: 600px) and (width: 600px){.ul-card{position:relative;top:-20px}}.ul-vertical-centered-container{display:flex;flex-direction:column;align-items:center}.ul-consent-legal__name-input--mobile{border:2px solid #e6e6e6}.ul-consent-legal__name-input--desktop{border:1px solid #e6e6e6}.ul-consent-legal__name-input{background:rgba(0,0,0,.01);box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;padding:10px 20px 10px 15px;border-radius:3px;font-size:15px;line-height:20px;margin-bottom:7px;width:100%}.ul-consent-legal__name-input::placeholder{color:#6c6c6e80}.ul-consent-legal__name-input:focus{outline:none;background:white}.ul-consent-legal__name-input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__consent-legal .choice{font-size:15px;padding:10px 15px;background-color:#00000003}.ul-card__consent-legal .choice--desktop:hover,.ul-card__consent-legal .choice--desktop:active,.ul-card__consent-legal .choice--mobile:active{background-color:#0000000d}.ul-card--likert__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.likert-number--mobile{border:2px solid #e6e6e6;margin-left:-2px}.likert-number--desktop{border:1px solid #e6e6e6;margin-left:-1px}.likert-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px}.likert-number:active,.likert-number--desktop:hover{background-color:#0000000d;font-weight:500}.likert-number-1{border-top-left-radius:5px;border-bottom-left-radius:5px}.likert-last-option{border-top-right-radius:5px;border-bottom-right-radius:5px}.likert-star--mobile{margin-left:-2px}.likert-star--desktop{margin-left:-1px}.likert-star{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;font-size:18px;line-height:24px;height:67px}.likert-smiley--mobile{margin-left:-2px}.likert-smiley--desktop{margin-left:-1px}.likert-smiley{align-items:center;cursor:pointer;display:flex;justify-content:space-between;flex:1 0;color:transparent;line-height:24px;height:67px}.likert-smiley circle:not(:first-child){fill-opacity:1}.ul-card--likert__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card--likert__labels span:last-child{text-align:right}.select-label{flex:1;overflow-wrap:anywhere;cursor:pointer;padding-left:15px}.ul-card--nps__numbers{align-items:center;border-radius:5px;display:flex;flex-direction:row;flex:1 0;justify-content:center;margin:5px 0 0}.nps-number--mobile{border:2px solid #e6e6e6;margin-left:-2px}.nps-number--desktop{border:1px solid #e6e6e6;margin-left:-1px}.nps-number{align-items:center;cursor:pointer;display:flex;justify-content:center;flex:1 0;background-color:#00000003;font-size:18px;line-height:24px;height:67px}.nps-number:active,.nps-number--desktop:hover{background-color:#0000000d;font-weight:500}.nps-number-0{border-top-left-radius:5px;border-bottom-left-radius:5px}.nps-number-10{border-top-right-radius:5px;border-bottom-right-radius:5px}.ul-card--nps__labels{align-items:center;color:#262136;display:flex;flex-direction:row;flex:1 0;font-weight:500;font-size:13px;line-height:15px;justify-content:space-between;margin:7px 0 10px}.ul-card--nps__labels span:last-child{text-align:right}.ul-card-text{flex:1 0 auto;margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0}.ul-card-text__container{align-items:center;box-sizing:border-box;border-radius:3px;display:flex;justify-content:center;margin-bottom:12px;flex:1 0 100%}.ul-card-text__input--mobile{border:2px solid #e6e6e6;max-height:63px}.ul-card-text__input--desktop{border:1px solid #e6e6e6;max-height:150px}.ul-card-text__input{background:rgba(0,0,0,.01);box-sizing:border-box;color:#343442;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;min-height:63px;overflow:auto;padding:12px;resize:none;width:100%;border-radius:3px;font-size:15px;line-height:20px;overflow-wrap:break-word}.ul-card-text__input::placeholder{color:#6c6c6e80}.ul-card-text__input:focus{outline:none;background:white}.ul-card-text__input--desktop:hover:not(:focus){background-color:#0000000d}.ul-card__text-url-prompt-button{text-decoration:none;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}#ul-card-voice__video{align-items:center;display:flex;flex-direction:column}#ul-card-voice__video>div{margin-bottom:10px;width:100%}#ul-card-video__player_recorder{width:100%;width:-moz-available;width:-webkit-fill-available;width:fill-available}.ul-card-record__task{flex:1 0 auto;margin-top:2px;margin-bottom:3px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0}#ul-record-task-upload-progress,#ul-record-task-video-preview{width:100%;height:150px}.ul-permission-graphics-container{width:100%;height:150px;background-color:#0000000d;text-align:center;flex-direction:column;margin-left:auto;margin-right:auto;border-radius:5px;display:flex;align-items:center;font-size:15px;color:#000000b3}.ul-av-permission-denied-paragraph{margin:auto 15px;font-size:12px}.ul-av-permission-denied-headline{font-size:14px;color:#262136;text-decoration:underline;font-size:12px}.ul-permission-body{color:#000;margin:5px auto 5px 5px;line-height:135%;text-align:center}.ul-select-tab-container{width:240px;height:46px;background:#ffffff;border-radius:5px;text-align:left;align-items:center;display:flex;padding:0 5px;margin-top:20px;margin-bottom:auto}.ul-select-tab-text{color:#4b575d;margin:5px;line-height:135%;text-align:center}button.ul-task-skip-button{color:#000;background-color:#fff}#ul-task-detail-container{margin-top:0;margin-bottom:0;overflow:auto}#ul-task-detail-container.ul-rich-text-body p,#ul-task-detail-container.ul-rich-text-body li,#ul-task-detail-container.ul-rich-text-body{color:#4c4c4c}#ul-task-detail-container :first-child{margin-top:0}#ul-task-detail-container :last-child{margin-bottom:20px}.ul-horizontal-button-container{width:100%;display:flex;flex-direction:row}.ul-skip-button-below{margin-top:5px}.ul-horizontal-button-container-center{justify-content:center}.ul-vertical-button-container-center{display:flex;flex-direction:column;align-items:center}.ul-horizontal-button-container-left{justify-content:flex-start}.ul_recorded-task-inset-spacing{margin-top:5px;margin-bottom:24px}.ul_permission_svg_container{justify-content:center}.ul-card-text__button{background-color:var(--theme);border-radius:3px;border:none;color:#fff;cursor:pointer;font-size:15px;font-weight:500;line-height:18px;padding:10.5px 21px}.ul-card-text__button:disabled,.ul-card-text__button.sprig-button-disabled{background-color:#0000001a;color:#0003}.ul-card-text__button.ul-button-inactive{background-color:#fff!important;color:#5d696f!important}.ul-card-skip__button{color:#00000080;background:none;border:none;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;cursor:pointer}.ul-card-button-group{align-items:center;display:flex;gap:30px;justify-content:center}html,body{cursor:default;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;height:100%;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-webkit-touch-callout:none}b{font-weight:500}#ul-app{opacity:0;width:100%;flex-grow:2;display:flex}#ul-app.ul-app--overlay{position:absolute;bottom:0;transition:opacity .1s ease-out;transition-delay:.1s}#ul-app.ul-app--visible{opacity:1;bottom:0}.ul-app__container{width:100%;display:flex;flex-direction:column;max-height:100vh}.ul-header__container{margin-bottom:15px}.ul-header{align-items:center;background:repeating-linear-gradient(120deg,#ebebeb,#ebebeb 24px,#fff 24px,#fff 48px);border-bottom:2px solid #ebebeb;display:flex;font-size:14px;font-weight:500;height:40px;justify-content:center;left:0;position:absolute;top:0;width:100%}.ul-footer{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:auto;flex-grow:1;width:100%}.ul-footer-bubble{display:inline-block;margin:0 3px;width:7px;height:7px;border-radius:3px;border:1px solid transparent}.close-container--desktop,.close-container--mobile{height:22px;width:22px;border-radius:22px;background-color:#fff;align-items:center;justify-content:center}.close-container--desktop{top:25px;right:25px}.close-container--mobile{top:15px;right:10px}.close-container{background:transparent;box-sizing:border-box;display:flex;position:absolute}.close-btn{height:18px;width:18px;align-items:center;justify-content:center;display:flex;cursor:pointer}.ul-app__container{transition:opacity .3s ease-out}.ul-center-horizontally{text-align:center}#ul-progress-bar-container{width:100%;height:2px;background-color:#0000001a;border-radius:2px;max-width:250px;margin:25px 0}#ul-progress-bar-current{transition:width 1s ease;width:0%;height:0;border-radius:2px}.prototype-button{width:100%;background:rgba(0,0,0,.01);border:1.5px solid #e6e6e6;border-radius:4px 0 0 4px;flex:none;flex-grow:1;margin:0;padding:20px 0;font-size:14px;font-family:inherit;text-decoration:underline}.prototype-button:hover{cursor:pointer}
`
      , gb = (e,t)=>{
        const n = [...e]
          , r = new Set([O.VideoVoice, O.RecordedTask]);
        return e.some(i=>r.has(i.type)) && n.push({
            name: -2,
            props: {
                routingOptions: []
            },
            type: O.Uploading
        }),
        t && n.push({
            name: -1,
            props: {
                routingOptions: []
            },
            type: O.Thanks
        }),
        n
    }
      , vb = ({mode: e=null, viewWindow: t, viewDocument: n})=>{
        const r = n.documentElement;
        return {
            mode: e,
            sw: t.screen.width,
            sh: t.screen.height,
            cw: r.clientWidth,
            ch: r.clientHeight,
            p: t.location.href,
            l: t.navigator.language
        }
    }
    ;
    function yb(e, t=!0) {
        var y;
        const {answers: n, apiURL: r, customStyles: i, endCard: o, eventEmitFn: a, fontFamilyURL: s, frame: l, previewKey: u, viewDocument: c, viewWindow: d} = e
          , f = En(e.headers) ? e.frame : c.body
          , p = W
          , h = gb(e.cards, !!o);
        as.configure(p, {
            cards: h,
            hasEndCard: !!o,
            apiURL: r
        }),
        le.setState({
            apiURL: r,
            answers: n,
            border: e.border,
            index: e.startingQuestionIdx || 0,
            cards: h,
            configureExitOnOverlayClick: e.configureExitOnOverlayClick,
            customMetadata: e.customMetadata,
            endCard: e.endCard,
            envId: e.envId,
            eventEmitFn: a,
            fontFamily: e.fontFamily,
            frame: l,
            headers: e.headers,
            hasViewedEmbed: !1,
            isPreview: e.isPreview,
            marketingUrl: "https://sprig.com",
            meta: vb({
                mode: e.mode,
                viewWindow: d,
                viewDocument: c
            }),
            mode: e.mode,
            previewKey: u,
            recorder: as,
            recorderEventEmitter: p,
            responseGroupUid: e.responseGroupUid,
            showStripes: e.showStripes,
            showSurveyBrand: e.showSurveyBrand,
            slugName: e.slugName,
            styleNonce: e.styleNonce,
            surveyId: e.surveyId,
            tabTitle: e.tabTitle,
            uploadingCardViewed: !1,
            uploadProgress: {},
            useMobileStyling: e.useMobileStyling,
            useDesktopPrototype: e.useDesktopPrototype,
            userId: e.userId,
            viewDocument: e.viewDocument,
            visitorAttributes: e.visitorAttributes,
            viewedCardCount: e.startingQuestionIdx || 0
        });
        const {seen: m} = le.getState();
        m();
        const {head: g} = c
          , _ = c.createElement("style");
        if (_.id = "sprig-style",
        _.textContent = mb,
        _.nonce = e.styleNonce,
        g.appendChild(_),
        e.fontFamily && s && parent) {
            const C = c.createElement("link");
            C.rel = "stylesheet",
            C.href = s,
            g.appendChild(C)
        }
        e.customStyles && cl(c, i, e.styleNonce);
        const v = "2.24.5"
          , b = a || ((y = l.eventEmitter) == null ? void 0 : y.emit);
        b == null || b(Ke.VerifyViewVersion, {
            [Xt.ViewVersion]: v
        }),
        f && t && Hn(w(hb, {}), f)
    }
    const _b = {
        configure: yb
    };
    window.UserLeap && window.Sprig && (window.Sprig._gtm ? window.Sprig = window.UserLeap : window.UserLeap = window.Sprig),
    window.UserLeap || (window.UserLeap = window.Sprig),
    window.Sprig || (window.Sprig = window.UserLeap);
    const bb = "rgba(255,255,255, 0.95)"
      , wb = "rgba(0,0,0,0.9)"
      , Cb = "360px"
      , ys = "0px"
      , Pf = ()=>{
        window.UserLeap.container = document.createElement("div"),
        window.UserLeap.container.className = "ul-container",
        document.body.appendChild(window.UserLeap.container)
    }
      , Mf = e=>{
        xb();
        const t = window.UserLeap.container;
        if (!(!t || !t.parentNode))
            try {
                t.parentNode.removeChild(t),
                window.UserLeap.container = null,
                He("trackStartUrl", null),
                W.emit(z.SurveyLifeCycle, {
                    state: "dismissed"
                }),
                W.emit(z.SurveyClosed, {
                    name: z.SurveyClosed,
                    initiator: e
                })
            } catch (n) {
                console.warn(`[Sprig] (ERR-412) Error removing UserLeap container by ${e} ` + t),
                n instanceof Error && window.UserLeap.reportError("dismissActiveSurvey", n)
            }
    }
      , Ff = ()=>{
        W.on(z.SurveyWillClose, ({initiator: e})=>{
            Mf(e)
        }
        )
    }
      , Eb = (e,t)=>{
        const r = {
            ...{
                position: "fixed",
                overflow: "auto",
                top: "0px",
                left: "0px",
                display: "none",
                height: "100%",
                width: "100%",
                transition: "background-color 0.3s ease-out",
                zIndex: 2147483646
            }
        }
          , i = t ? e.overlayStyleMobile : e.overlayStyle;
        r["background-color"] = i === "light" ? bb : wb,
        t || (r.margin = "auto"),
        window.UserLeap.container && Object.assign(window.UserLeap.container.style, r)
    }
      , Ib = (e,t,n)=>{
        var s, l;
        const r = {
            position: "fixed",
            bottom: "0px",
            right: ys,
            border: 0,
            backgroundColor: "rgba(0,0,0,0)",
            zIndex: 2147483646
        }
          , i = Object.assign({}, t, window.UserLeap);
        let o, a = !1;
        return n ? ((s = window.UserLeap.windowDimensions) != null && s.width ? r.width = `${window.UserLeap.windowDimensions.width}px` : r.width = "100%",
        (l = window.UserLeap.windowDimensions) != null && l.height ? r.maxHeight = `${window.UserLeap.windowDimensions.height - 20}px` : window.UserLeap.maxHeight ? r.maxHeight = window.UserLeap.maxHeight : r.maxHeight = `${document.body.clientHeight - 20}px`,
        ["light", "dark"].includes(i.overlayStyleMobile) && (a = !0)) : (r.width = Cb,
        r.maxHeight = window.UserLeap.maxHeight || "66vh",
        i.framePosition === nr.BottomLeft ? o = {
            left: ys
        } : i.framePosition === nr.TopLeft ? o = {
            left: ys,
            top: "0px"
        } : i.framePosition === nr.TopRight ? o = {
            top: "0px"
        } : i.framePosition === nr.Center && (a = !0,
        o = {
            margin: "auto",
            position: "static"
        },
        r.maxHeight = null)),
        a && Eb(i, n),
        Object.assign(e.style, r, o),
        a
    }
      , Sb = (e,t)=>{
        var s, l;
        const n = "ul-frame";
        Pf(),
        kb();
        const r = document.createElement("iframe");
        r.id = n,
        r.setAttribute("title", "Sprig User Feedback Dialog");
        const i = Ib(r, e, t);
        Ff(),
        r.setHeight = u=>{
            parseInt(r.style.height) != u && (r.style.height = `${u}px`,
            W.emit(z.SurveyHeight, {
                name: z.SurveyHeight,
                contentFrameHeight: u
            }))
        }
        ,
        (s = window.UserLeap.container) == null || s.appendChild(r),
        e && (t ? e.exitOnOverlayClickMobile : e.exitOnOverlayClick) && window.UserLeap.container && (window.UserLeap.container.onclick = ()=>{
            W.emit(z.CloseSurveyOnOverlayClick)
        }
        ),
        W.emit(z.SurveyLifeCycle, {
            state: "presented"
        }),
        W.emit(z.SurveyPresented, {
            name: z.SurveyPresented
        });
        const o = (l = r.contentWindow) == null ? void 0 : l.document;
        o && (o.open("text/html", "replace"),
        o.write("<!doctype html><head></head><body></body></html>"),
        o.close());
        const a = o == null ? void 0 : o.head;
        return {
            frameId: n,
            contentWinDocHead: a,
            contentWindow: r.contentWindow,
            hasOverlay: i,
            iframe: r
        }
    }
      , Vf = {
        [z.SurveyFadingOut]: ()=>{
            window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                "background-color": "rgba(0,0,0,0)"
            })
        }
    }
      , kb = ()=>{
        Object.entries(Vf).forEach(([e,t])=>{
            W.on(e, t)
        }
        )
    }
      , xb = ()=>{
        Object.entries(Vf).forEach(([e,t])=>{
            W.off(e, t)
        }
        )
    }
      , Ab = "!launch_darkly_";
    class Tb {
        constructor() {
            Pe(this, "_ldData", {})
        }
        getAllLaunchDarklyVariations() {
            return this._ldData
        }
        setLDFlagsVariations(t) {
            try {
                return !t || typeof t != "object" || Array.isArray(t) ? !1 : (Object.keys(this._ldData).forEach(n=>{
                    delete this._ldData[n]
                }
                ),
                Object.keys(t).forEach(n=>{
                    var r;
                    return this._ldData[`${Ab}${n}`] = ((r = t[n]) != null ? r : 0) + 1
                }
                ),
                !0)
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("setAllLDFlagsVariations", n),
                console.warn("[Sprig] An issue had occured when setting LaunchDarkly flags and variations."),
                !1
            }
        }
    }
    const _s = new Tb;
    Object.freeze(_s);
    const Rb = "!optimizely_experiments_";
    class Lb {
        constructor() {
            Pe(this, "_optimizelyData", {})
        }
        setOptimizelyExperiment(t, n=!0) {
            if (!t || typeof t != "object")
                return !1;
            const {experiments: r} = t;
            try {
                return n && Object.keys(this._optimizelyData).map(i=>{
                    delete this._optimizelyData[i]
                }
                ),
                r && r.map(i=>{
                    const {id: o, variation: a} = i
                      , s = this.transformExperimentId(o);
                    a && typeof a == "string" && (this._optimizelyData[s] = a)
                }
                ),
                !0
            } catch (i) {
                return i instanceof Error && window.UserLeap.reportError("setOptimizelyExperiment", i),
                !1
            }
        }
        getAllOptimizelyExperiments() {
            return this._optimizelyData
        }
        getOptimizelyVariationName(t) {
            return this._optimizelyData[this.transformExperimentId(t)]
        }
        transformExperimentId(t) {
            return Rb + t
        }
        getAndSetWebOptimizelyExperiments() {
            var t;
            try {
                if (window && window.optimizely && typeof window.optimizely.get == "function") {
                    const n = (t = window.optimizely.get("state")) == null ? void 0 : t.getExperimentStates({
                        isActive: !0
                    });
                    if (n) {
                        const r = Object.keys(n).map(i=>{
                            var o, a;
                            return (o = n[i].variation) != null && o.name ? {
                                id: i,
                                variation: (a = n[i].variation) == null ? void 0 : a.name
                            } : {
                                id: i,
                                variation: "Original"
                            }
                        }
                        );
                        return this.setOptimizelyExperiment({
                            experiments: r
                        }, !1),
                        !0
                    }
                    return !1
                }
                return !1
            } catch (n) {
                return n instanceof Error && window.UserLeap.reportError("getAndSetWebOptimizely", n),
                !1
            }
        }
    }
    const eo = new Lb;
    Object.freeze(eo);
    class Ob {
        constructor(t, n) {
            Pe(this, "paused");
            Pe(this, "queue");
            Pe(this, "ul");
            this.ul = t,
            this.paused = !1,
            this.queue = [],
            this.flush(n)
        }
        flush(t) {
            const n = t.length;
            if (n)
                for (let r = 0; r < n; r++)
                    this.push(t[r])
        }
        isPaused() {
            return this.paused
        }
        pause() {
            this.paused = !0
        }
        unpause() {
            this.paused = !1;
            const t = this.queue.slice();
            this.empty(),
            this.flush(t)
        }
        push(t) {
            if (this.paused)
                this.queue.push(t);
            else if (t instanceof Function)
                t();
            else {
                const n = Array.prototype.slice.call(t, 1)
                  , r = t[0]
                  , i = this.ul[r];
                i instanceof Function ? i.apply(this.ul, n) : r && console.warn("[Sprig] (ERR-100) No valid UserLeap action called", r)
            }
        }
        perform(t) {
            if (this.paused) {
                let n = ()=>{}
                ;
                const r = new Promise(function(i) {
                    n = function() {
                        i(t())
                    }
                }
                );
                return this.queue.push(n),
                r
            } else
                return t()
        }
        empty() {
            this.queue.length = 0
        }
    }
    const Nb = ["popState", "pushState", "replaceState"]
      , Db = {
        test: "test"
    }
      , Pr = "!email"
      , Ub = ["ios", "android"]
      , qt = "environments"
      , bs = "pageUrl"
      , hn = "visitors"
      , Bf = "ul-view-sdk-script"
      , jf = Object.freeze({
        contains: (e,t)=>t.includes(e),
        notContains: (e,t)=>!t.includes(e),
        exactly: (e,t)=>t === e,
        notExactly: (e,t)=>t !== e,
        startsWith: (e,t)=>t.startsWith(e),
        endsWith: (e,t)=>t.endsWith(e),
        regex: (e,t)=>new RegExp(e).test(t),
        legacy: (e,t)=>new RegExp(e,"i").test(t)
    });
    function ws(e, t) {
        const {matchType: n, pattern: r} = e
          , i = n ? jf[n] : jf.legacy;
        let o = !1;
        try {
            o = i(r, t)
        } catch (a) {
            const s = `[Sprig] (ERR-445) Failed to check url match with pattern ${r}`;
            a instanceof Error && (console.warn(s, a),
            a.stack = JSON.stringify(e),
            window.UserLeap.reportError(s, a))
        }
        return o
    }
    function Pb(e, t) {
        const {pageUrlEvents: n, interactiveEvents: r, dismissOnPageChange: i} = window.UserLeap._config;
        if (!i)
            return !0;
        const o = [];
        n && n.length && o.push(...n),
        r && r.length && o.push(...r);
        const a = e && o.find(s=>s.id === e);
        return a ? ws(a, window.location.href) : t === window.location.href
    }
    function Mr(e) {
        const {pageUrlEvents: t, interactiveEvents: n, dismissOnPageChange: r, platform: i} = window.UserLeap._config;
        if (i && i !== Jt.Web)
            return;
        const o = mn("trackStartUrl")
          , a = o ? String(o) : null;
        t && Wf(window.location.href),
        n && (zf(),
        Mb()),
        r && a && a !== window.location.href && e && Nb.includes(e.type) && window.UserLeap("dismissActiveSurvey", vt.PageChange)
    }
    const Hf = {
        capture: !0
    }
      , Mb = ()=>{
        const t = window.UserLeap._config.interactiveEvents.filter(r=>ws(r, window.location.href)).map(r=>{
            const {name: i, properties: o} = r
              , {selector: a, innerText: s} = o;
            return a ? l=>{
                if (wn(l.target))
                    try {
                        l.target.closest(a) && window.UserLeap("track", i)
                    } catch {}
                return !1
            }
            : l=>(wn(l.target) && l.target.innerText === s && window.UserLeap("track", i),
            !1)
        }
        )
          , n = r=>t.forEach(i=>i(r));
        window.UserLeap._config.interactiveEventsHandler = n,
        window.addEventListener("click", n, Hf)
    }
      , zf = ()=>{
        window.UserLeap._config.interactiveEventsHandler && window.removeEventListener("click", window.UserLeap._config.interactiveEventsHandler, Hf),
        delete window.UserLeap._config.interactiveEventsHandler
    }
    ;
    function Fb() {
        ["hashchange", "popstate"].forEach(e=>window.addEventListener(e, Mr, !0))
    }
    function Vb() {
        ["hashchange", "popstate"].forEach(e=>window.removeEventListener(e, Mr, !0)),
        window.UserLeap._config.interactiveEvents && zf()
    }
    function pt(e, t, n) {
        const r = [window.UserLeap._API_URL, "sdk", e];
        return t && t.forEach(i=>{
            r.push(i),
            i === qt ? r.push(window.UserLeap.envId) : i === hn && r.push(Cs())
        }
        ),
        n && r.push(n),
        r.join("/")
    }
    function Bb(e, t) {
        let n = pt("1", [qt], "questions?");
        return e != null && (n += `&vid=${e}`),
        t && (t.surveyId && (n += `&surveyid=${t.surveyId}`),
        t.surveyTemplateId && (n += `&surveytemplateid=${t.surveyTemplateId}`)),
        n
    }
    function Kf() {
        try {
            if (typeof localStorage < "u" && (localStorage.setItem("is_available", "yes"),
            localStorage.getItem("is_available") === "yes"))
                return localStorage.removeItem("is_available"),
                !0
        } catch {
            return !1
        }
        return !1
    }
    function mn(e) {
        if (!window.UserLeap.localStorageAvailable)
            return null;
        const t = localStorage.getItem(Fe.Credentials);
        if (t)
            try {
                const r = JSON.parse(t)[window.UserLeap.envId];
                return r && r[e] || null
            } catch (n) {
                n instanceof Error && (n.stack = t,
                window.UserLeap.reportError("Failed to parse local storage credentials", n)),
                console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", n)
            }
        return null
    }
    function He(e, t) {
        if (!window.UserLeap.localStorageAvailable)
            return;
        const n = localStorage.getItem(Fe.Credentials);
        let r = {};
        if (n)
            try {
                r = JSON.parse(n)
            } catch (o) {
                o instanceof Error && (o.stack = n,
                window.UserLeap.reportError("Failed to parse local storage credentials", o)),
                console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", o)
            }
        let i = r[window.UserLeap.envId];
        i ? i[e] = t : i = {
            [e]: t
        },
        r[window.UserLeap.envId] = i;
        try {
            localStorage.setItem(Fe.Credentials, JSON.stringify(r))
        } catch (o) {
            o instanceof Error && console.warn(`[Sprig] (ERR-426) Unable to write to Local Storage:: ${o.message}`)
        }
    }
    function Gf() {
        window.previewMode || (window.UserLeap.visitorId = Nt(),
        He("vid", window.UserLeap.visitorId),
        W.emit(z.VisitorIDUpdated, {
            visitorId: window.UserLeap.visitorId
        }))
    }
    function Cs() {
        return window.previewMode ? "0" : window.UserLeap.visitorId || ""
    }
    function Wf(e, t, n) {
        if (!window.UserLeap.localStorageAvailable || e.endsWith("mock_snippet.html"))
            return;
        const r = window.UserLeap._config.pageUrlEvents;
        if (r && r.length) {
            let u = !1;
            for (let c = 0; c < r.length && (u = ws(r[c], e),
            !u); c++)
                ;
            if (!u)
                return
        }
        window.UserLeap.debugMode && console.info("[DEBUG] Sprig trackPageView", e);
        const i = 10
          , o = 1;
        let a = [];
        const s = {
            viewedAt: Date.now(),
            location: e
        }
          , l = localStorage.getItem(Fe.PageViews);
        try {
            if (a = l ? JSON.parse(l) : [],
            Array.isArray(a) || (a = []),
            a.length > 0) {
                const u = a[a.length - 1]
                  , c = (Date.now() - u.viewedAt) / 1e3;
                u.location != e && c > o && ac({
                    url: e
                }),
                (u.location != e && c > o || c > i) && (window.UserLeap._queue.push(["track", bs, t, {
                    url: e
                }, n]),
                a.push(s))
            } else
                window.UserLeap._queue.push(["track", bs, t, {
                    url: e
                }, n]),
                a.push(s),
                ac({
                    url: e
                });
            a.length > 5 && a.splice(0, a.length - 5);
            try {
                localStorage.setItem(Fe.PageViews, JSON.stringify(a))
            } catch (u) {
                u instanceof Error && console.warn(`[Sprig] Unable to write to Local Storage: ${u.message}`)
            }
        } catch (u) {
            u instanceof Error && window.UserLeap.reportError("trackPageView", u, {
                pageViewsStorage: l
            }),
            console.warn("[Sprig] (ERR-425) Failed to update page views in local storage")
        }
    }
    function jb() {
        const e = "Backbone"in window && window.Backbone && window.Backbone.history ? window.Backbone.history : window.history;
        "pushState"in e && (e.pushState = (t=>function(...r) {
            const i = t.apply(this, r)
              , o = new Event("pushState");
            return window.dispatchEvent(o),
            Mr(o),
            i
        }
        )(e.pushState)),
        "replaceState"in e && (e.replaceState = (t=>function(...r) {
            const i = t.apply(this, r)
              , o = new Event("replaceState");
            return window.dispatchEvent(o),
            Mr(o),
            i
        }
        )(e.replaceState)),
        Fb()
    }
    async function Es(e, t) {
        const n = Cs();
        e && !t && (window.UserLeap._config.mode = Db.test);
        const r = await Zt(Bb(n, e), {}, 0, !0);
        return r.ok ? (r.json.delay && await Yr(r.json.delay),
        $f(r.json)) : (r.reportError && r.error && (console.warn("[Sprig] (ERR-414) Failed to request questions from the server", r.error),
        window.UserLeap.reportError("getQuestions", r.error)),
        {
            success: !1,
            surveyState: "no survey"
        })
    }
    const $f = async e=>{
        var T, N, k, D;
        const {context: t, endCard: n, locale: r, productConfig: i, questions: o, responseGroupUid: a, surveyId: s, uuid: l, vid: u, sessionReplay: c} = e
          , d = rr(window.UserLeap)
          , f = Is(d)
          , p = Hb(d);
        if (c && ic({
            responseGroupId: a,
            surveyId: s,
            visitorId: u,
            replayParams: c,
            completeUploadHeaders: d,
            apiUrl: window.UserLeap._API_URL,
            triggerTimestamp: Date.now(),
            isStandalone: o.length === 0
        }),
        u == null || !o || !o.length)
            return {
                success: !1,
                message: "[Sprig] no survey found",
                surveyState: "no survey"
            };
        if (window.UserLeap.container) {
            const A = "[Sprig] (ERR-409) Found an existing Survey container, aborting rendering of this survey";
            return console.warn(A),
            {
                success: !1,
                message: A,
                surveyState: "no survey"
            }
        }
        if (u !== window.UserLeap.visitorId && l !== window.UserLeap.visitorId && !window.previewMode) {
            const A = "Attempted to display survey to a different visitor";
            return window.UserLeap.reportError("DisplaySurvey", new Error(A)),
            {
                success: !1,
                message: A,
                surveyState: "no survey"
            }
        }
        Dy({
            id: s
        }),
        ko.disable(),
        W.emit(z.SurveyWillPresent, {
            name: z.SurveyWillPresent,
            [al.SurveyId]: s
        });
        let h, m = document.createElement("div"), g, _, v;
        const b = A=>{
            const {[Xt.ViewVersion]: j} = A;
            j !== d["x-ul-sdk-version"] && Mf(),
            W.removeListener(Ke.VerifyViewVersion, b)
        }
        ;
        W.on(Ke.VerifyViewVersion, b),
        En(d) ? (h = "ul-direct-embeded-frame",
        g = document.head,
        _ = window,
        v = !1,
        f && (Pf(),
        m.id = h,
        window.UserLeap.container.appendChild(m),
        Ff(),
        W.emit(z.SurveyLifeCycle, {
            state: "presented"
        }),
        W.emit(z.SurveyPresented, {
            name: z.SurveyPresented
        }))) : {frameId: h, contentWinDocHead: g, contentWindow: _, hasOverlay: v, iframe: m} = Sb(i, p),
        window.UserLeap.frameId = h,
        window.UserLeap.useMobileStyling = p;
        const y = A=>{
            W.on(z.CloseSurveyOnOverlayClick, A)
        }
          , C = Object.assign({
            frame: m,
            envId: window.UserLeap.envId,
            surveyId: s,
            userId: l,
            visitorAttributes: {
                externalUserId: window.UserLeap.userId,
                email: window.UserLeap.email
            },
            cards: o,
            context: t,
            locale: r,
            fontFamily: window.UserLeap.fontFamily,
            fontFamilyURL: window.UserLeap.fontFamilyURL,
            apiURL: window.UserLeap._API_URL,
            responseGroupUid: a,
            headers: d,
            endCard: n,
            useMobileStyling: p,
            mobileSDKVersion: window.UserLeap.mobileSDKVersion,
            configureExitOnOverlayClick: y,
            eventEmitFn: W.emit.bind(W),
            ulEvents: sl,
            viewDocument: _ == null ? void 0 : _.document,
            viewWindow: _,
            tabTitle: document.title,
            startingQuestionIdx: (T = window.UserLeap.config) == null ? void 0 : T.startingQuestionIdx,
            styleNonce: window.UserLeap.styleNonce,
            previewKey: (N = window.UserLeap) != null && N.localStorageAvailable ? (k = window.localStorage) == null ? void 0 : k.getItem(Fe.Preview) : null
        }, window.UserLeap._config);
        (D = window.UserLeap.config) != null && D.startingQuestionIdx && (window.UserLeap.config = {
            ...window.UserLeap.config,
            startingQuestionIdx: null
        }),
        window.UserLeap.customStyles && (C.customStyles = window.UserLeap.customStyles),
        _ && (_.__cfg = C);
        function S() {
            const A = document.createElement("script");
            return window.UserLeap.nonce && A.setAttribute("nonce", window.UserLeap.nonce),
            A.id = Bf,
            A
        }
        const I = window.UserLeap.viewSDKURL ? window.UserLeap.viewSDKURL : C.path
          , E = document.getElementById(Bf);
        E && E.remove();
        const x = S()
          , R = ()=>{
            window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                display: "flex"
            })
        }
        ;
        return C.installationMethod === Cn.Npm ? (_b.configure(C),
        v && window.UserLeap.container && R()) : I && (x.src = I,
        v && x.addEventListener("load", ()=>{
            window.UserLeap.container && R()
        }
        ),
        _ == null || _.addEventListener("error", A=>{
            A.target instanceof HTMLScriptElement && A.target.src === I && window.UserLeap.reportError("loadFrameScript", new Error("Frame script failed to load"))
        }
        , {
            capture: !0,
            once: !0
        })),
        g == null || g.appendChild(x),
        {
            success: !0,
            surveyState: "ready"
        }
    }
    ;
    function Hb(e) {
        if (window.UserLeap.useMobileStyling !== void 0)
            return window.UserLeap.useMobileStyling;
        const t = window.UserLeap.windowDimensions && window.UserLeap.windowDimensions.width || document.body.clientWidth;
        return Is(e) || t > 10 && t < Yh
    }
    function Is(e) {
        return Ub.includes(e[it.Platform])
    }
    function zb(e) {
        let t = e.length;
        for (; t; ) {
            const n = Math.floor(Math.random() * t);
            t -= 1;
            const r = e[t];
            e[t] = e[n],
            e[n] = r
        }
    }
    function Kb(e) {
        if (!e)
            return;
        window.UserLeap._config = e,
        e.mute && window.UserLeap._queue.pause();
        const {interactiveEvents: t, pageUrlEvents: n, dismissOnPageChange: r} = e;
        t && zb(t),
        (t || n || r) && (jb(),
        Mr())
    }
    async function Zt(e, t, n=0, r=!1) {
        var o, a;
        t.headers = Object.assign(rr(window.UserLeap), t.headers);
        const i = await at(e, t, n, r);
        if (i.ok) {
            const s = (o = i.headers) == null ? void 0 : o.get("Authorization")
              , l = s ? s.split(" ") : void 0
              , u = l && l.length === 2 ? l[1] : void 0
              , c = (a = i.headers) == null ? void 0 : a.get(it.VisitorID);
            u && c && (c !== window.UserLeap.visitorId || window.UserLeap.token !== u) && (He("token", u),
            He("vid", c),
            W.emit(z.VisitorIDUpdated, {
                visitorId: c
            }),
            window.UserLeap.token = u,
            window.UserLeap.visitorId = c)
        }
        return i.json && i.json.logMessage && console.warn(`[Sprig] ${i.json.logMessage}`),
        i
    }
    async function Gb(e, t) {
        var r, i;
        let n = !0;
        return t && ((r = e == null ? void 0 : e.json) == null ? void 0 : r.surveyId) && (window.UserLeap.delayingSurvey = !0,
        n = await t(e.json.surveyId),
        window.UserLeap.delayingSurvey = !1,
        !n) ? !1 : ((i = e == null ? void 0 : e.json) != null && i.delay && (window.UserLeap.delayingSurvey = !0,
        await Yr(e.json.delay),
        window.UserLeap.delayingSurvey = !1),
        n)
    }
    const Wb = function(e) {
        if (!window.UserLeap)
            return;
        const t = async(r={})=>{
            var m, g, _, v, b;
            const {userId: i, anonymousId: o, metadata: a={}, properties: s, showSurveyCallback: l} = r;
            let {eventName: u} = r;
            if (window.UserLeap.debugMode && u !== bs && console.info("[DEBUG] Sprig track", r),
            e.mode === "test")
                return;
            const c = window.UserLeap.localStorageAvailable && (m = localStorage.getItem(Fe.Preview)) != null ? m : void 0;
            if (e.requireUserIdForTracking && !window.UserLeap.userId && !i) {
                const y = "[Sprig] - Skipping tracking without userId";
                return console.warn(y),
                {
                    success: !1,
                    message: y,
                    surveyState: "no survey"
                }
            }
            if (!u || u.trim().length === 0) {
                u = u ? String(u) : "";
                const y = "[Sprig] - Invalid event name " + u;
                return console.warn(y),
                {
                    success: !1,
                    message: y,
                    surveyState: "no survey"
                }
            }
            const d = window.location.href;
            if (a.url || (a.url = d),
            He("trackStartUrl", d),
            (_ = (g = window.UserLeap) == null ? void 0 : g._config) != null && _.optimizelyEnabled) {
                const y = rr(window.UserLeap);
                Is(y) || eo.getAndSetWebOptimizelyExperiments(),
                a.optimizelyExperiments = Object.assign({}, eo.getAllOptimizelyExperiments())
            }
            (b = (v = window.UserLeap) == null ? void 0 : v._config) != null && b.launchDarklyEnabled && (a.launchDarklyFlags = _s.getAllLaunchDarklyVariations()),
            i && (window.UserLeap.userId = i),
            o && (window.UserLeap.partnerAnonymousId = o),
            s && (a.eventProperties = s),
            Ny({
                name: u
            });
            const f = window.UserLeap.delayingSurvey ? await Zt(pt("1", [hn], "events/batch"), {
                body: JSON.stringify({
                    events: [{
                        event: u,
                        metadata: a
                    }],
                    previewKey: c
                }),
                method: "POST"
            }, 0, !0) : await Zt(pt("1", [hn], "events"), {
                body: JSON.stringify({
                    event: u,
                    metadata: a,
                    previewKey: c
                }),
                method: "POST"
            }, 0, !0);
            if (!f.ok) {
                const y = "[Sprig] (ERR-421) Failed to track event";
                return f.reportError && (console.warn(y, f.error),
                f.error && window.UserLeap.reportError("track", f.error)),
                {
                    success: !1,
                    message: y,
                    error: f.error,
                    surveyState: "no survey"
                }
            }
            i && He("uid", i),
            o && He("aid", o);
            const p = f.json;
            return p.invalidPreviewKey && window.UserLeap.localStorageAvailable && localStorage.removeItem(Fe.Preview),
            await Gb(f, l) ? Pb(p.eventId, d) ? $f(p) : {
                success: !1,
                message: "Study should not be displayed after page navigation",
                surveyState: "no survey"
            } : {
                success: !1,
                message: "[Sprig] Callback returned false, aborting rendering of survey",
                surveyState: "no survey"
            }
        }
          , n = {
            async displaySurvey(r) {
                return console.warn("[Sprig] displaySurvey should only be used to debug your studies; not intended for production usage."),
                window.UserLeap("dismissActiveSurvey", vt.Override),
                Es({
                    surveyId: r
                }, !0)
            },
            _previewSurvey(r) {
                window.UserLeap("dismissActiveSurvey", vt.Override),
                Es({
                    surveyTemplateId: r
                }, !1)
            },
            _reviewSurvey(r) {
                window.UserLeap("dismissActiveSurvey", vt.Override),
                Es({
                    surveyId: r
                }, !1)
            },
            previewSurvey(r) {
                n._previewSurvey(r)
            },
            reviewSurvey(r) {
                n._reviewSurvey(r)
            },
            mute() {
                window.UserLeap._queue.pause()
            },
            unmute() {
                window.UserLeap._queue.unpause()
            },
            setVisitorToken() {
                console.warn("[Sprig] setVisitorToken is deprecated.")
            },
            dismissActiveSurvey(r=vt.API) {
                W.emit(z.SurveyWillClose, {
                    name: z.SurveyWillClose,
                    initiator: r
                })
            },
            async setAttribute(r, i) {
                if (!r || !i && i !== 0) {
                    const o = "[Sprig] - Disregarding empty attribute / value provided";
                    return console.warn(o),
                    {
                        success: !1,
                        message: o
                    }
                }
                return this.setAttributes({
                    [r]: i
                })
            },
            async setAttributes(r) {
                if (r == null || Object.keys(r).length === 0) {
                    const i = "[Sprig] - Disregarding empty attributes provided";
                    return console.warn(i),
                    {
                        success: !1,
                        message: i
                    }
                }
                return this.identifyAndSetAttributes({
                    attributes: r
                })
            },
            async identifyAndSetAttributes(r) {
                if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig identifyAndSetAttributes", r),
                e.mode === "test")
                    return;
                if (r === null || typeof r != "object" || !(r.userId || r.anonymousId || r.attributes)) {
                    const u = "[Sprig] - Disregarding empty payload provided";
                    return console.warn(u),
                    {
                        success: !1,
                        message: u
                    }
                }
                const {userId: i, anonymousId: o, attributes: a} = r;
                if (e.requireUserIdForTracking && !window.UserLeap.userId && !i) {
                    const u = "[Sprig] - Skipping tracking without userId";
                    return console.warn(u),
                    {
                        success: !1,
                        message: u
                    }
                }
                if (!a && (!i || window.UserLeap.userId === i) && (!o || window.UserLeap.partnerAnonymousId === o))
                    return {
                        success: !0
                    };
                const s = {};
                i && (s.userId = window.UserLeap.userId = i),
                o && (s.partnerAnonymousId = window.UserLeap.partnerAnonymousId = o);
                let l;
                return a ? (a.email && !Object.prototype.hasOwnProperty.call(a, Pr) && (a[Pr] = a.email,
                delete a.email),
                l = await Zt(pt("1", [qt, hn], "attributes"), {
                    body: JSON.stringify(a),
                    method: "PUT"
                }),
                !l.ok && l.reportError && (console.warn("[Sprig] (ERR-432) identifyAndSetAttributes failed", l.error),
                l.error && window.UserLeap.reportError("identifyAndSetAttributes", l.error))) : l = await Zt(pt("1", [qt, hn]), {
                    body: JSON.stringify(s),
                    method: "PUT"
                }),
                a && a[Pr] && (window.UserLeap.email = a[Pr]),
                l.ok && (i && He("uid", i),
                o && He("aid", o)),
                {
                    success: !!l.ok
                }
            },
            async removeAttributes(r) {
                if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig removeAttributes", r),
                e.mode === "test")
                    return;
                if (r == null || r.length === 0) {
                    const o = "[Sprig] - Disregarding empty attributes provided";
                    return console.warn(o),
                    {
                        success: !1,
                        message: o
                    }
                }
                if (e.requireUserIdForTracking && !window.UserLeap.userId) {
                    const o = "[Sprig] - Skipping tracking without userId";
                    return console.warn(o),
                    {
                        success: !1,
                        message: o
                    }
                }
                const i = await Zt(pt("1", [qt, hn], "attributes"), {
                    body: JSON.stringify({
                        delete: r
                    }),
                    method: "DELETE"
                });
                return !i.ok && i.reportError && (console.warn("[Sprig] (ERR-433) Remove attributes failed", i.error),
                i.error && window.UserLeap.reportError("removeAttributes", i.error)),
                {
                    success: !!i.ok
                }
            },
            async addSurveyListener(r) {
                W.on(z.SurveyLifeCycle, r)
            },
            async removeSurveyListener(r) {
                W.removeListener(z.SurveyLifeCycle, r)
            },
            async addListener(r, i) {
                W.on(r, i)
            },
            async removeListener(r, i) {
                W.removeListener(r, i)
            },
            async removeAllListeners() {
                W.removeAllListeners()
            },
            setPreviewKey(r) {
                if (!r || typeof r != "string")
                    return;
                const i = Kf();
                window.UserLeap.localStorageAvailable = i,
                i && r && localStorage.setItem(Fe.Preview, r)
            },
            async setUserId(r) {
                if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setUserId", r),
                r == null) {
                    const a = `[Sprig] - Invalid userId ${r}`;
                    return console.warn(a),
                    {
                        success: !1,
                        message: a
                    }
                }
                if (e.mode === "test" || r === window.UserLeap.userId)
                    return;
                window.UserLeap.userId = r;
                const i = window.UserLeap.visitorId
                  , o = await Zt(pt("1", [qt, hn]), {
                    body: JSON.stringify({
                        userId: r
                    }),
                    method: "PUT"
                });
                if (!o.ok) {
                    o.reportError && (console.warn("[Sprig] (ERR-420) Failed to set user id", o.error),
                    o.error && window.UserLeap.reportError("setUserId", o.error));
                    return
                }
                i !== window.UserLeap.visitorId && oc(),
                He("uid", r)
            },
            async setPartnerAnonymousId(r) {
                if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setPartnerAnonymousId", r),
                r == null) {
                    const i = `[Sprig] - Invalid partnerAnonymousId ${r}`;
                    return console.warn(i),
                    {
                        success: !1,
                        message: i
                    }
                }
                return window.UserLeap.partnerAnonymousId = r,
                He("aid", r),
                {
                    success: !0
                }
            },
            async track(r, i, o={}, a=void 0) {
                return t({
                    eventName: r,
                    properties: i,
                    metadata: o,
                    showSurveyCallback: a
                })
            },
            async identifyAndTrack(r) {
                return await t(r)
            },
            trackPageView(r, i=void 0, o=void 0) {
                Wf(r, i, o)
            },
            applyStyles(r) {
                if (window.UserLeap.customStyles = r,
                window.UserLeap.container) {
                    const i = window.UserLeap.container.children[0].contentDocument;
                    if (i) {
                        const o = i.getElementById(L.CustomStyle);
                        o ? o.textContent = r : cl(i, r, window.UserLeap.styleNonce)
                    }
                }
            },
            setWindowDimensions(r, i) {
                var l, u;
                const o = typeof r == "string" ? parseInt(r, 10) : r
                  , a = typeof i == "string" ? parseInt(i, 10) : i;
                if (!isNaN(o) && !isNaN(a) && (window.UserLeap.windowDimensions = {
                    width: o,
                    height: a
                }),
                !window.UserLeap.frameId)
                    return;
                const s = document.getElementById(window.UserLeap.frameId);
                !s || (window.UserLeap.useMobileStyling && ((l = window.UserLeap.windowDimensions) != null && l.width && (s.style.width = `${window.UserLeap.windowDimensions.width}px`),
                (u = window.UserLeap.windowDimensions) != null && u.height && (s.style.maxHeight = `${window.UserLeap.windowDimensions.height - 20}px`),
                s.contentDocument && (s.style.height = String(dl(s.contentDocument)) + "px")),
                W.emit(z.SurveyDimensions, {
                    name: z.SurveyDimensions,
                    contentFrameWidth: s.clientWidth,
                    contentFrameHeight: s.clientHeight
                }))
            },
            logoutUser() {
                window.UserLeap.debugMode && console.info("[DEBUG] Sprig logout"),
                window.UserLeap.visitorId = null,
                window.UserLeap.userId = null,
                window.UserLeap.partnerAnonymousId = null,
                window.UserLeap.token = null,
                window.UserLeap.email = null,
                window.UserLeap.localStorageAvailable && (localStorage.removeItem(Fe.Credentials),
                localStorage.removeItem(Fe.PageViews)),
                window.UserLeap._queue.isPaused() && window.UserLeap._queue.empty(),
                Gf(),
                oc(),
                window.UserLeap._queue.unpause()
            },
            teardown() {
                Vb(),
                window.UserLeap("dismissActiveSurvey", vt.API),
                delete window.UserLeap,
                delete window.Sprig,
                delete window._Sprig
            },
            integrateOptimizely(r, i=!0) {
                var o, a;
                if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                    console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                    return
                }
                try {
                    const s = typeof r == "string" ? JSON.parse(r) : r;
                    eo.setOptimizelyExperiment(s, i)
                } catch (s) {
                    console.warn("[Sprig] Error with integrating Optimizely data"),
                    s instanceof Error && window.UserLeap.reportError("integrateOptimizely", s)
                }
            },
            integrateOptimizelyClient(r) {
                var o, a;
                if (!((a = (o = window.UserLeap) == null ? void 0 : o._config) != null && a.optimizelyEnabled)) {
                    console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                    return
                }
                const i = ({experiment: s, variation: l})=>{
                    const u = {
                        experiments: [{
                            id: s.id,
                            variation: l.key
                        }]
                    };
                    window.UserLeap("integrateOptimizely", u, !1)
                }
                ;
                r.notificationCenter.addNotificationListener(Gh.NOTIFICATION_TYPES.ACTIVATE, i)
            },
            importLaunchDarklyData(r) {
                var i, o;
                if (!((o = (i = window.UserLeap) == null ? void 0 : i._config) != null && o.launchDarklyEnabled)) {
                    console.warn("[SPRIG] LaunchDarkly integration is currently not enabled for your product.");
                    return
                }
                _s.setLDFlagsVariations(r)
            },
            setVisitorAttribute(r, i) {
                return console.warn("[Sprig] setVisitorAttribute is deprecated. Please use setAttribute"),
                n.setAttribute(r, i)
            },
            async setEmail(r) {
                return n.setAttribute(Pr, r)
            },
            async setVisitorEmail(r) {
                return console.warn("[Sprig] setVisitorEmail is deprecated. Please use setEmail"),
                n.setEmail(r)
            }
        };
        Object.assign(window.UserLeap, n)
    };
    async function $b(e) {
        const t = rr(window.UserLeap);
        let n = await at(pt("1", [qt], "config"), {
            headers: t
        });
        const r = "TypeError";
        if (window.UserLeap.error = n.error,
        !n.ok && n.error && n.error.name === r && (window.UserLeap._API_URL = "https://api.sprig.com",
        window.UserLeap.reportError("sprigDomainRequest", n.error),
        n = await at(pt("1", [qt], "config"), {
            headers: t
        })),
        !n.ok)
            return n.reportError && (console.warn("[Sprig] (ERR-422) Failed to load configuration", n.error),
            n.error && window.UserLeap.reportError("applyRemoteConfig", n.error)),
            xo("Disabled: failed to fetch configuration"),
            e;
        const i = n.json;
        return i != null && i.disabled ? (xo(`Disabled: ${i.disabled}`),
        {
            disabled: i.disabled
        }) : Object.assign({}, i, e)
    }
    async function qb(e, t, n={}) {
        const r = window.__cfg && window.__cfg.mode
          , i = Cs()
          , o = window.UserLeap.envId
          , a = window.document.documentElement
          , s = {
            mode: r,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            clientWidth: a.clientWidth,
            clientHeight: a.clientHeight,
            location: window.location.href,
            language: window.navigator.language,
            ...n
        }
          , l = {
            action: e,
            err: {
                message: t.message,
                stack: t.stack
            },
            meta: s,
            vid: i,
            envId: o
        };
        (await Zt(pt("1", null, "errors"), {
            method: "POST",
            headers: {
                [it.Error]: window.btoa(`userleap-${Date.now()}-error`)
            },
            body: JSON.stringify(l)
        }, 0, !0)).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", t)
    }
    function Zb(e={}) {
        var i;
        const t = (i = new URLSearchParams(window.location.search).get("sprigPreviewKey")) != null ? i : ""
          , n = Kf();
        window.UserLeap.localStorageAvailable = n,
        window.UserLeap.UPDATES = sl,
        window.UserLeap("setPreviewKey", t);
        async function r() {
            if (window.UserLeap.loaded)
                return;
            if (window.UserLeap.reportError = qb,
            window.UserLeap.loaded = !0,
            window.UserLeap._config = Object.assign({}, e, window.UserLeap.config),
            window.UserLeap.delayingSurvey = !1,
            window.UserLeap._config && typeof window.UserLeap._config == "object")
                for (const u in window.UserLeap._config)
                    window.UserLeap[u] = window.UserLeap._config[u];
            if (!window.UserLeap.envId)
                if (window.UserLeap.appId)
                    window.UserLeap.envId = window.UserLeap.appId;
                else
                    throw new Error("Missing Environment id");
            window.UserLeap.debugMode && console.info("[DEBUG] Sprig debug mode enabled");
            const o = window.UserLeap.sampleRate;
            if (o)
                if (!n)
                    window.UserLeap.debugMode && console.info("[DEBUG] Sprig cannot sample users without localStorage permissions");
                else {
                    let u = mn("sampled");
                    if (u === null && (u = Math.random() < o,
                    He("sampled", u)),
                    !u)
                        return
                }
            else
                n && mn("sampled") !== null && He("sampled", null);
            window.UserLeap._API_URL || (window.UserLeap._API_URL = "https://api.sprig.com");
            const a = [...window.UserLeap._queue];
            window.UserLeap._queue = new Ob(window.UserLeap,[]),
            window.UserLeap._queue.pause();
            for (let u = 0; u < a.length; u++)
                window.UserLeap._queue.push(a[u]);
            const s = mn("token");
            s ? (window.UserLeap.token = s,
            window.UserLeap.visitorId = mn("vid"),
            window.UserLeap.userId = mn("uid"),
            window.UserLeap.partnerAnonymousId = mn("aid")) : (window.UserLeap.localStorageAvailable && localStorage.removeItem(Fe.Credentials),
            Gf());
            const l = await $b(e);
            by(l.maxReplayDurationSeconds, window.UserLeap.maxInflightReplayRequests, l.replaySettings),
            Wb(l),
            await Kb(l),
            window.UserLeap._queue.unpause(),
            W.emit(z.SDKReady),
            W.emit(z.VisitorIDUpdated, {
                visitorId: window.UserLeap.visitorId
            })
        }
        document.readyState === "complete" ? r() : window.attachEvent ? window.attachEvent("onload", r) : window.addEventListener("load", r, !1)
    }
    const Yb = "sprig-web-view-sdk";
    let qf;
    qf = {
        path: `https://cdn.sprig.com/${Yb}-v2.24.5.js`
    },
    Zb(qf)
});
//# sourceMappingURL=shim.js.map

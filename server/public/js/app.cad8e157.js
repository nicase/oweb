(function(t) {
  function e(e) {
    for (
      var r, a, c = e[0], i = e[1], p = e[2], s = 0, f = [];
      s < c.length;
      s++
    )
      (a = c[s]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    l && l(e);
    while (f.length) f.shift()();
    return u.push.apply(u, p || []), n();
  }
  function n() {
    for (var t, e = 0; e < u.length; e++) {
      for (var n = u[e], r = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== o[i] && (r = !1);
      }
      r && (u.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var r = {},
    o = { app: 0 },
    u = [];
  function a(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = r),
    (a.d = function(t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var p = 0; p < c.length; p++) e(c[p]);
  var l = i;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function(t, e, n) {
    "use strict";
    var r = n("64a9"),
      o = n.n(r);
    o.a;
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var r = n("2b0e"),
      o = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r("img", { attrs: { alt: "Vue logo", src: n("cf05") } }),
            r("MainComponent", { attrs: { msg: "Welcome to Your Vue.js App" } })
          ],
          1
        );
      },
      u = [],
      a = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n("p", [t._v("Això és un component vue")]),
          n("p", [t._v("Aquest text ve de la api: " + t._s(t.text))])
        ]);
      },
      c = [],
      i = (n("96cf"), n("3b8d")),
      p = n("bc3a"),
      l = n.n(p),
      s = n("d225"),
      f = n("b0b4"),
      d = "/api/",
      v = (function() {
        function t() {
          Object(s["a"])(this, t);
        }
        return (
          Object(f["a"])(t, null, [
            {
              key: "makeGet",
              value: (function() {
                var t = Object(i["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              l.a
                                .get(d)
                                .then(function(t) {
                                  console.log(t);
                                })
                                .catch(function(t) {
                                  console.log(t);
                                })
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })()
            }
          ]),
          t
        );
      })(),
      h = v,
      b = {
        name: "MainComponent",
        data: function() {
          return { text: "" };
        },
        created: (function() {
          var t = Object(i["a"])(
            regeneratorRuntime.mark(function t() {
              var e = this;
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        h.makeGet(),
                        (t.next = 3),
                        l.a
                          .get("/api")
                          .then(function(t) {
                            e.text = t.data + " status: " + t.status;
                          })
                          .catch(function(t) {
                            e.text = t.status;
                          })
                      );
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          function e() {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        methods: {}
      },
      m = b,
      g = n("2877"),
      y = Object(g["a"])(m, a, c, !1, null, null, null),
      x = y.exports,
      w = { name: "app", components: { MainComponent: x } },
      O = w,
      j = (n("034f"), Object(g["a"])(O, o, u, !1, null, null, null)),
      _ = j.exports;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        render: function(t) {
          return t(_);
        }
      }).$mount("#app");
  },
  "64a9": function(t, e, n) {},
  cf05: function(t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  }
});
//# sourceMappingURL=app.cad8e157.js.map

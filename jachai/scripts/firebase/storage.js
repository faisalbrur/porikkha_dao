!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t((e = e || self).firebase);
})(this, function (wt) {
  "use strict";
  try {
    (function () {
      wt =
        wt && Object.prototype.hasOwnProperty.call(wt, "default")
          ? wt.default
          : wt;
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function e(e, a, s, u) {
        return new (s = s || Promise)(function (r, t) {
          function n(e) {
            try {
              i(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            try {
              i(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(n, o);
          }
          i((u = u.apply(e, a || [])).next());
        });
      }
      function s(r, n) {
        var o,
          i,
          a,
          e,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (e = { next: t(0), throw: t(1), return: t(2) }),
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((o = 1),
                    i &&
                      (a =
                        2 & t[0]
                          ? i.return
                          : t[0]
                          ? i.throw || ((a = i.return) && a.call(i), 0)
                          : i.next) &&
                      !(a = a.call(i, t[1])).done)
                  )
                    return a;
                  switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (i = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = t);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(t);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = n.call(r, s);
                } catch (e) {
                  (t = [6, e]), (i = 0);
                } finally {
                  o = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            n[o] = i[a];
        return n;
      }
      var n,
        t,
        o,
        f =
          ((n = Error),
          r((t = a), (o = n)),
          (t.prototype =
            null === o
              ? Object.create(o)
              : ((i.prototype = o.prototype), new i())),
          a);
      function i() {
        this.constructor = t;
      }
      function a(e, t) {
        var r = n.call(this, t) || this;
        return (
          (r.code = e),
          (r.name = "FirebaseError"),
          Object.setPrototypeOf(r, a.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(r, u.prototype.create),
          r
        );
      }
      var u =
        ((l.prototype.create = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          for (
            var n,
              o = t[0] || {},
              i = this.service + "/" + e,
              a = this.errors[e],
              s = a
                ? ((n = o),
                  a.replace(d, function (e, t) {
                    var r = n[t];
                    return null != r ? r.toString() : "<" + t + "?>";
                  }))
                : "Error",
              u = this.serviceName + ": " + s + " (" + i + ").",
              l = new f(i, u),
              c = 0,
              p = Object.keys(o);
            c < p.length;
            c++
          ) {
            var h = p[c];
            "_" !== h.slice(-1) &&
              (h in l &&
                console.warn(
                  'Overwriting FirebaseError base field "' +
                    h +
                    '" can cause unexpected behavior.'
                ),
              (l[h] = o[h]));
          }
          return l;
        }),
        l);
      function l(e, t, r) {
        (this.service = e), (this.serviceName = t), (this.errors = r);
      }
      var d = /\{\$([^}]+)}/g,
        c =
          ((p.prototype.setInstantiationMode = function (e) {
            return (this.instantiationMode = e), this;
          }),
          (p.prototype.setMultipleInstances = function (e) {
            return (this.multipleInstances = e), this;
          }),
          (p.prototype.setServiceProps = function (e) {
            return (this.serviceProps = e), this;
          }),
          p);
      function p(e, t, r) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = r),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY");
      }
      var _ = "firebasestorage.googleapis.com",
        m =
          ((h.prototype.codeProp = function () {
            return this.code;
          }),
          (h.prototype.codeEquals = function (e) {
            return g(e) === this.codeProp();
          }),
          (h.prototype.serverResponseProp = function () {
            return this.serverResponse_;
          }),
          (h.prototype.setServerResponseProp = function (e) {
            this.serverResponse_ = e;
          }),
          Object.defineProperty(h.prototype, "name", {
            get: function () {
              return this.name_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, "code", {
            get: function () {
              return this.code_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, "message", {
            get: function () {
              return this.message_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, "serverResponse", {
            get: function () {
              return this.serverResponse_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          h);
      function h(e, t) {
        (this.code_ = g(e)),
          (this.message_ = "Firebase Storage: " + t),
          (this.serverResponse_ = null),
          (this.name_ = "FirebaseError");
      }
      var b = {
        UNKNOWN: "unknown",
        OBJECT_NOT_FOUND: "object-not-found",
        BUCKET_NOT_FOUND: "bucket-not-found",
        PROJECT_NOT_FOUND: "project-not-found",
        QUOTA_EXCEEDED: "quota-exceeded",
        UNAUTHENTICATED: "unauthenticated",
        UNAUTHORIZED: "unauthorized",
        RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded",
        INVALID_CHECKSUM: "invalid-checksum",
        CANCELED: "canceled",
        INVALID_EVENT_NAME: "invalid-event-name",
        INVALID_URL: "invalid-url",
        INVALID_DEFAULT_BUCKET: "invalid-default-bucket",
        NO_DEFAULT_BUCKET: "no-default-bucket",
        CANNOT_SLICE_BLOB: "cannot-slice-blob",
        SERVER_FILE_WRONG_SIZE: "server-file-wrong-size",
        NO_DOWNLOAD_URL: "no-download-url",
        INVALID_ARGUMENT: "invalid-argument",
        INVALID_ARGUMENT_COUNT: "invalid-argument-count",
        APP_DELETED: "app-deleted",
        INVALID_ROOT_OPERATION: "invalid-root-operation",
        INVALID_FORMAT: "invalid-format",
        INTERNAL_ERROR: "internal-error",
      };
      function g(e) {
        return "storage/" + e;
      }
      function y() {
        return new m(
          b.UNKNOWN,
          "An unknown error occurred, please check the error payload for server response."
        );
      }
      function w() {
        return new m(b.CANCELED, "User canceled the upload/download.");
      }
      function R() {
        return new m(
          b.CANNOT_SLICE_BLOB,
          "Cannot slice blob for upload. Please retry the upload."
        );
      }
      function T(e, t, r) {
        return new m(
          b.INVALID_ARGUMENT,
          "Invalid argument in `" + t + "` at index " + e + ": " + r
        );
      }
      function E() {
        return new m(b.APP_DELETED, "The Firebase app was deleted.");
      }
      function k(e, t) {
        return new m(
          b.INVALID_FORMAT,
          "String does not match format '" + e + "': " + t
        );
      }
      function O(e) {
        throw new m(b.INTERNAL_ERROR, "Internal error: " + e);
      }
      var U = {
        RAW: "raw",
        BASE64: "base64",
        BASE64URL: "base64url",
        DATA_URL: "data_url",
      };
      function A(e) {
        switch (e) {
          case U.RAW:
          case U.BASE64:
          case U.BASE64URL:
          case U.DATA_URL:
            return;
          default:
            throw (
              "Expected one of the event types: [" +
              U.RAW +
              ", " +
              U.BASE64 +
              ", " +
              U.BASE64URL +
              ", " +
              U.DATA_URL +
              "]."
            );
        }
      }
      var x = function (e, t) {
        (this.data = e), (this.contentType = t || null);
      };
      function P(e, t) {
        switch (e) {
          case U.RAW:
            return new x(S(t));
          case U.BASE64:
          case U.BASE64URL:
            return new x(C(e, t));
          case U.DATA_URL:
            return new x(
              (r = new N(t)).base64
                ? C(U.BASE64, r.rest)
                : (function (e) {
                    var t;
                    try {
                      t = decodeURIComponent(e);
                    } catch (e) {
                      throw k(U.DATA_URL, "Malformed data URL.");
                    }
                    return S(t);
                  })(r.rest),
              new N(t).contentType
            );
        }
        var r;
        throw y();
      }
      function S(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          if (n <= 127) t.push(n);
          else if (n <= 2047) t.push(192 | (n >> 6), 128 | (63 & n));
          else if (55296 == (64512 & n))
            if (r < e.length - 1 && 56320 == (64512 & e.charCodeAt(r + 1)))
              (n = 65536 | ((1023 & n) << 10) | (1023 & e.charCodeAt(++r))),
                t.push(
                  240 | (n >> 18),
                  128 | ((n >> 12) & 63),
                  128 | ((n >> 6) & 63),
                  128 | (63 & n)
                );
            else t.push(239, 191, 189);
          else
            56320 == (64512 & n)
              ? t.push(239, 191, 189)
              : t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n));
        }
        return new Uint8Array(t);
      }
      function C(t, e) {
        switch (t) {
          case U.BASE64:
            var r = -1 !== e.indexOf("-"),
              n = -1 !== e.indexOf("_");
            if (r || n)
              throw k(
                t,
                "Invalid character '" +
                  (r ? "-" : "_") +
                  "' found: is it base64url encoded?"
              );
            break;
          case U.BASE64URL:
            var o = -1 !== e.indexOf("+"),
              i = -1 !== e.indexOf("/");
            if (o || i)
              throw k(
                t,
                "Invalid character '" +
                  (o ? "+" : "/") +
                  "' found: is it base64 encoded?"
              );
            e = e.replace(/-/g, "+").replace(/_/g, "/");
        }
        var a;
        try {
          a = atob(e);
        } catch (e) {
          throw k(t, "Invalid character found");
        }
        for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++)
          s[u] = a.charCodeAt(u);
        return s;
      }
      var N = function (e) {
        (this.base64 = !1), (this.contentType = null);
        var t = e.match(/^data:([^,]+)?,/);
        if (null === t)
          throw k(
            U.DATA_URL,
            "Must be formatted 'data:[<mediatype>][;base64],<data>"
          );
        var r,
          n,
          o = t[1] || null;
        null != o &&
          ((this.base64 =
            ((n = ";base64"),
            (r = o).length >= n.length &&
              r.substring(r.length - n.length) === n)),
          (this.contentType = this.base64
            ? o.substring(0, o.length - ";base64".length)
            : o)),
          (this.rest = e.substring(e.indexOf(",") + 1));
      };
      var I,
        L,
        D = { STATE_CHANGED: "state_changed" },
        M = "running",
        W = "pausing",
        B = "paused",
        j = "success",
        q = "canceling",
        F = "canceled",
        H = "error",
        z = {
          RUNNING: "running",
          PAUSED: "paused",
          SUCCESS: "success",
          CANCELED: "canceled",
          ERROR: "error",
        };
      function G(e) {
        switch (e) {
          case M:
          case W:
          case q:
            return z.RUNNING;
          case B:
            return z.PAUSED;
          case j:
            return z.SUCCESS;
          case F:
            return z.CANCELED;
          case H:
          default:
            return z.ERROR;
        }
      }
      function X(e) {
        return null != e;
      }
      function V(e) {
        return void 0 !== e;
      }
      function K(e) {
        return "function" == typeof e;
      }
      function Z(e) {
        return "object" == typeof e;
      }
      function J(e) {
        return "string" == typeof e || e instanceof String;
      }
      function $(e) {
        return "number" == typeof e || e instanceof Number;
      }
      function Q(e) {
        return Y() && e instanceof Blob;
      }
      function Y() {
        return "undefined" != typeof Blob;
      }
      ((L = I = I || {})[(L.NO_ERROR = 0)] = "NO_ERROR"),
        (L[(L.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
        (L[(L.ABORT = 2)] = "ABORT");
      var ee =
        ((te.prototype.send = function (e, t, r, n) {
          if (this.sent_) throw O("cannot .send() more than once");
          if (((this.sent_ = !0), this.xhr_.open(t, e, !0), X(n)))
            for (var o in n)
              n.hasOwnProperty(o) &&
                this.xhr_.setRequestHeader(o, n[o].toString());
          return X(r) ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
        }),
        (te.prototype.getErrorCode = function () {
          if (!this.sent_) throw O("cannot .getErrorCode() before sending");
          return this.errorCode_;
        }),
        (te.prototype.getStatus = function () {
          if (!this.sent_) throw O("cannot .getStatus() before sending");
          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        }),
        (te.prototype.getResponseText = function () {
          if (!this.sent_) throw O("cannot .getResponseText() before sending");
          return this.xhr_.responseText;
        }),
        (te.prototype.abort = function () {
          this.xhr_.abort();
        }),
        (te.prototype.getResponseHeader = function (e) {
          return this.xhr_.getResponseHeader(e);
        }),
        (te.prototype.addUploadProgressListener = function (e) {
          X(this.xhr_.upload) &&
            this.xhr_.upload.addEventListener("progress", e);
        }),
        (te.prototype.removeUploadProgressListener = function (e) {
          X(this.xhr_.upload) &&
            this.xhr_.upload.removeEventListener("progress", e);
        }),
        te);
      function te() {
        var t = this;
        (this.sent_ = !1),
          (this.xhr_ = new XMLHttpRequest()),
          (this.errorCode_ = I.NO_ERROR),
          (this.sendPromise_ = new Promise(function (e) {
            t.xhr_.addEventListener("abort", function () {
              (t.errorCode_ = I.ABORT), e(t);
            }),
              t.xhr_.addEventListener("error", function () {
                (t.errorCode_ = I.NETWORK_ERROR), e(t);
              }),
              t.xhr_.addEventListener("load", function () {
                e(t);
              });
          }));
      }
      var re =
        ((ne.prototype.createXhrIo = function () {
          return new ee();
        }),
        ne);
      function ne() {}
      function oe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r =
          "undefined" != typeof BlobBuilder
            ? BlobBuilder
            : "undefined" != typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : void 0;
        if (void 0 !== r) {
          for (var n = new r(), o = 0; o < e.length; o++) n.append(e[o]);
          return n.getBlob();
        }
        if (Y()) return new Blob(e);
        throw Error("This browser doesn't seem to support creating Blobs");
      }
      var ie =
        ((ae.prototype.size = function () {
          return this.size_;
        }),
        (ae.prototype.type = function () {
          return this.type_;
        }),
        (ae.prototype.slice = function (e, t) {
          if (Q(this.data_)) {
            var r = this.data_,
              n =
                ((i = e),
                (a = t),
                (o = r).webkitSlice
                  ? o.webkitSlice(i, a)
                  : o.mozSlice
                  ? o.mozSlice(i, a)
                  : o.slice
                  ? o.slice(i, a)
                  : null);
            return null === n ? null : new ae(n);
          }
          var o, i, a;
          return new ae(new Uint8Array(this.data_.buffer, e, t - e), !0);
        }),
        (ae.getBlob = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (Y()) {
            var r = e.map(function (e) {
              return e instanceof ae ? e.data_ : e;
            });
            return new ae(oe.apply(null, r));
          }
          var n = e.map(function (e) {
              return J(e) ? P(U.RAW, e).data : e.data_;
            }),
            o = 0;
          n.forEach(function (e) {
            o += e.byteLength;
          });
          var i = new Uint8Array(o),
            a = 0;
          return (
            n.forEach(function (e) {
              for (var t = 0; t < e.length; t++) i[a++] = e[t];
            }),
            new ae(i, !0)
          );
        }),
        (ae.prototype.uploadData = function () {
          return this.data_;
        }),
        ae);
      function ae(e, t) {
        var r = 0,
          n = "";
        Q(e)
          ? ((r = (this.data_ = e).size), (n = e.type))
          : e instanceof ArrayBuffer
          ? (t
              ? (this.data_ = new Uint8Array(e))
              : ((this.data_ = new Uint8Array(e.byteLength)),
                this.data_.set(new Uint8Array(e))),
            (r = this.data_.length))
          : e instanceof Uint8Array &&
            (t
              ? (this.data_ = e)
              : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
            (r = e.length)),
          (this.size_ = r),
          (this.type_ = n);
      }
      var se =
        (Object.defineProperty(ue.prototype, "path", {
          get: function () {
            return this.path_;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(ue.prototype, "isRoot", {
          get: function () {
            return 0 === this.path.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (ue.prototype.fullServerUrl = function () {
          var e = encodeURIComponent;
          return "/b/" + e(this.bucket) + "/o/" + e(this.path);
        }),
        (ue.prototype.bucketOnlyServerUrl = function () {
          return "/b/" + encodeURIComponent(this.bucket) + "/o";
        }),
        (ue.makeFromBucketSpec = function (t) {
          var e, r;
          try {
            e = ue.makeFromUrl(t);
          } catch (e) {
            return new ue(t, "");
          }
          if ("" === e.path) return e;
          throw (
            ((r = t),
            new m(
              b.INVALID_DEFAULT_BUCKET,
              "Invalid default bucket '" + r + "'."
            ))
          );
        }),
        (ue.makeFromUrl = function (e) {
          var t = null,
            r = "([A-Za-z0-9.\\-_]+)",
            n = new RegExp("^gs://" + r + "(/(.*))?$", "i");
          function o(e) {
            e.path_ = decodeURIComponent(e.path);
          }
          for (
            var i,
              a = _.replace(/[.]/g, "\\."),
              s = [
                {
                  regex: n,
                  indices: { bucket: 1, path: 3 },
                  postModify: function (e) {
                    "/" === e.path.charAt(e.path.length - 1) &&
                      (e.path_ = e.path_.slice(0, -1));
                  },
                },
                {
                  regex: new RegExp(
                    "^https?://" +
                      a +
                      "/v[A-Za-z0-9_]+/b/" +
                      r +
                      "/o(/([^?#]*).*)?$",
                    "i"
                  ),
                  indices: { bucket: 1, path: 3 },
                  postModify: o,
                },
                {
                  regex: new RegExp(
                    "^https?://(?:storage.googleapis.com|storage.cloud.google.com)/" +
                      r +
                      "/([^?#]*)",
                    "i"
                  ),
                  indices: { bucket: 1, path: 2 },
                  postModify: o,
                },
              ],
              u = 0;
            u < s.length;
            u++
          ) {
            var l = s[u],
              c = l.regex.exec(e);
            if (c) {
              var p = c[l.indices.bucket],
                h = c[l.indices.path];
              (t = new ue(p, (h = h || ""))), l.postModify(t);
              break;
            }
          }
          if (null == t)
            throw ((i = e), new m(b.INVALID_URL, "Invalid URL '" + i + "'."));
          return t;
        }),
        ue);
      function ue(e, t) {
        (this.bucket = e), (this.path_ = t);
      }
      function le(e) {
        var t, r;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return null;
        }
        return Z((r = t)) && !Array.isArray(r) ? t : null;
      }
      function ce(e) {
        var t = e.lastIndexOf("/", e.length - 2);
        return -1 === t ? e : e.slice(t + 1);
      }
      function pe(e) {
        return "https://" + _ + "/v0" + e;
      }
      function he(e) {
        var t = encodeURIComponent,
          r = "?";
        for (var n in e) {
          if (e.hasOwnProperty(n)) r = r + (t(n) + "=" + t(e[n])) + "&";
        }
        return (r = r.slice(0, -1));
      }
      function fe(e, t) {
        return t;
      }
      var de = function (e, t, r, n) {
          (this.server = e),
            (this.local = t || e),
            (this.writable = !!r),
            (this.xform = n || fe);
        },
        _e = null;
      function ve() {
        if (_e) return _e;
        var e = [];
        e.push(new de("bucket")),
          e.push(new de("generation")),
          e.push(new de("metageneration")),
          e.push(new de("name", "fullPath", !0));
        var t = new de("name");
        (t.xform = function (e, t) {
          return !J((r = t)) || r.length < 2 ? r : ce(r);
          var r;
        }),
          e.push(t);
        var r = new de("size");
        return (
          (r.xform = function (e, t) {
            return X(t) ? Number(t) : t;
          }),
          e.push(r),
          e.push(new de("timeCreated")),
          e.push(new de("updated")),
          e.push(new de("md5Hash", null, !0)),
          e.push(new de("cacheControl", null, !0)),
          e.push(new de("contentDisposition", null, !0)),
          e.push(new de("contentEncoding", null, !0)),
          e.push(new de("contentLanguage", null, !0)),
          e.push(new de("contentType", null, !0)),
          e.push(new de("metadata", "customMetadata", !0)),
          (_e = e)
        );
      }
      function me(n, o) {
        Object.defineProperty(n, "ref", {
          get: function () {
            var e = n.bucket,
              t = n.fullPath,
              r = new se(e, t);
            return o.makeStorageReference(r);
          },
        });
      }
      function be(e, t, r) {
        var n = le(t);
        return null === n
          ? null
          : (function (e, t, r) {
              for (var n = { type: "file" }, o = r.length, i = 0; i < o; i++) {
                var a = r[i];
                n[a.local] = a.xform(n, t[a.server]);
              }
              return me(n, e), n;
            })(e, n, r);
      }
      function ge(e, t) {
        for (var r = {}, n = t.length, o = 0; o < n; o++) {
          var i = t[o];
          i.writable && (r[i.server] = e[i.local]);
        }
        return JSON.stringify(r);
      }
      function ye(e) {
        if (!Z(e) || !e) throw "Expected Metadata object.";
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if ("customMetadata" === t) {
              if (!Z(r)) throw "Expected object for 'customMetadata' mapping.";
            } else if (Z((n = r)) && null !== n)
              throw "Mapping for '" + t + "' cannot be an object.";
          }
        var n;
      }
      var we = "maxResults",
        Re = 1e3,
        Te = "pageToken",
        Ee = "prefixes",
        ke = "items";
      function Oe(e, t, r) {
        var n = le(r);
        return null === n
          ? null
          : (function (e, t, r) {
              var n = {
                prefixes: [],
                items: [],
                nextPageToken: r.nextPageToken,
              };
              if (r[Ee])
                for (var o = 0, i = r[Ee]; o < i.length; o++) {
                  var a = i[o].replace(/\/$/, ""),
                    s = e.makeStorageReference(new se(t, a));
                  n.prefixes.push(s);
                }
              if (r[ke])
                for (var u = 0, l = r[ke]; u < l.length; u++) {
                  var c = l[u];
                  s = e.makeStorageReference(new se(t, c.name));
                  n.items.push(s);
                }
              return n;
            })(e, t, n);
      }
      function Ue(e) {
        if (!Z(e) || !e) throw "Expected ListOptions object.";
        for (var t in e)
          if (t === we) {
            if (!$((r = e[we])) || !Number.isInteger(r) || e[we] <= 0)
              throw "Expected maxResults to be a positive number.";
            if (1e3 < e[we])
              throw (
                "Expected maxResults to be less than or equal to " + Re + "."
              );
          } else {
            if (t !== Te) throw "Unknown option: " + t;
            if (e[Te] && !J(e[Te])) throw "Expected pageToken to be string.";
          }
        var r;
      }
      var Ae = function (e, t, r, n) {
        (this.url = e),
          (this.method = t),
          (this.handler = r),
          (this.timeout = n),
          (this.urlParams = {}),
          (this.headers = {}),
          (this.body = null),
          (this.errorHandler = null),
          (this.progressCallback = null),
          (this.successCodes = [200]),
          (this.additionalRetryCodes = []);
      };
      function xe(e) {
        if (!e) throw y();
      }
      function Pe(n, o) {
        return function (e, t) {
          var r = be(n, t, o);
          return xe(null !== r), r;
        };
      }
      function Se(n, o) {
        return function (e, t) {
          var r = Oe(n, o, t);
          return xe(null !== r), r;
        };
      }
      function Ce(n, o) {
        return function (e, t) {
          var r = be(n, t, o);
          return (
            xe(null !== r),
            (function (n, e) {
              var t = le(e);
              if (null === t) return null;
              if (!J(t.downloadTokens)) return null;
              var r = t.downloadTokens;
              if (0 === r.length) return null;
              var o = encodeURIComponent;
              return r.split(",").map(function (e) {
                var t = n.bucket,
                  r = n.fullPath;
                return (
                  pe("/b/" + o(t) + "/o/" + o(r)) +
                  he({ alt: "media", token: e })
                );
              })[0];
            })(r, t)
          );
        };
      }
      function Ne(i) {
        return function (e, t) {
          var r, n, o;
          return (
            (r =
              401 === e.getStatus()
                ? new m(
                    b.UNAUTHENTICATED,
                    "User is not authenticated, please authenticate using Firebase Authentication and try again."
                  )
                : 402 === e.getStatus()
                ? ((o = i.bucket),
                  new m(
                    b.QUOTA_EXCEEDED,
                    "Quota for bucket '" +
                      o +
                      "' exceeded, please view quota on https://firebase.google.com/pricing/."
                  ))
                : 403 === e.getStatus()
                ? ((n = i.path),
                  new m(
                    b.UNAUTHORIZED,
                    "User does not have permission to access '" + n + "'."
                  ))
                : t).setServerResponseProp(t.serverResponseProp()),
            r
          );
        };
      }
      function Ie(o) {
        var i = Ne(o);
        return function (e, t) {
          var r,
            n = i(e, t);
          return (
            404 === e.getStatus() &&
              ((r = o.path),
              (n = new m(
                b.OBJECT_NOT_FOUND,
                "Object '" + r + "' does not exist."
              ))),
            n.setServerResponseProp(t.serverResponseProp()),
            n
          );
        };
      }
      function Le(e, t, r) {
        var n = pe(t.fullServerUrl()),
          o = e.maxOperationRetryTime(),
          i = new Ae(n, "GET", Pe(e, r), o);
        return (i.errorHandler = Ie(t)), i;
      }
      function De(e, t, r) {
        var n,
          o,
          i = Object.assign({}, r);
        return (
          (i.fullPath = e.path),
          (i.size = t.size()),
          i.contentType ||
            (i.contentType =
              ((o = t),
              ((n = null) && n.contentType) ||
                (o && o.type()) ||
                "application/octet-stream")),
          i
        );
      }
      function Me(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = { "X-Goog-Upload-Protocol": "multipart" };
        var s = (function () {
          for (var e = "", t = 0; t < 2; t++)
            e += Math.random().toString().slice(2);
          return e;
        })();
        a["Content-Type"] = "multipart/related; boundary=" + s;
        var u = De(t, n, o),
          l =
            "--" +
            s +
            "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" +
            ge(u, r) +
            "\r\n--" +
            s +
            "\r\nContent-Type: " +
            u.contentType +
            "\r\n\r\n",
          c = "\r\n--" + s + "--",
          p = ie.getBlob(l, n, c);
        if (null === p) throw R();
        var h = { name: u.fullPath },
          f = pe(i),
          d = e.maxUploadRetryTime(),
          _ = new Ae(f, "POST", Pe(e, r), d);
        return (
          (_.urlParams = h),
          (_.headers = a),
          (_.body = p.uploadData()),
          (_.errorHandler = Ne(t)),
          _
        );
      }
      var We = function (e, t, r, n) {
        (this.current = e),
          (this.total = t),
          (this.finalized = !!r),
          (this.metadata = n || null);
      };
      function Be(e, t) {
        var r = null;
        try {
          r = e.getResponseHeader("X-Goog-Upload-Status");
        } catch (e) {
          xe(!1);
        }
        return xe(!!r && -1 !== (t || ["active"]).indexOf(r)), r;
      }
      function je(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = De(t, n, o),
          s = { name: a.fullPath },
          u = pe(i),
          l = {
            "X-Goog-Upload-Protocol": "resumable",
            "X-Goog-Upload-Command": "start",
            "X-Goog-Upload-Header-Content-Length": n.size(),
            "X-Goog-Upload-Header-Content-Type": a.contentType,
            "Content-Type": "application/json; charset=utf-8",
          },
          c = ge(a, r),
          p = e.maxUploadRetryTime();
        var h = new Ae(
          u,
          "POST",
          function (e) {
            var t;
            Be(e);
            try {
              t = e.getResponseHeader("X-Goog-Upload-URL");
            } catch (e) {
              xe(!1);
            }
            return xe(J(t)), t;
          },
          p
        );
        return (
          (h.urlParams = s),
          (h.headers = l),
          (h.body = c),
          (h.errorHandler = Ne(t)),
          h
        );
      }
      function qe(e, t, r, o) {
        var n = e.maxUploadRetryTime(),
          i = new Ae(
            r,
            "POST",
            function (e) {
              var t = Be(e, ["active", "final"]),
                r = null;
              try {
                r = e.getResponseHeader("X-Goog-Upload-Size-Received");
              } catch (e) {
                xe(!1);
              }
              r || xe(!1);
              var n = Number(r);
              return xe(!isNaN(n)), new We(n, o.size(), "final" === t);
            },
            n
          );
        return (
          (i.headers = { "X-Goog-Upload-Command": "query" }),
          (i.errorHandler = Ne(t)),
          i
        );
      }
      function Fe(e, a, t, s, r, u, n, o) {
        var l = new We(0, 0);
        if (
          (n
            ? ((l.current = n.current), (l.total = n.total))
            : ((l.current = 0), (l.total = s.size())),
          s.size() !== l.total)
        )
          throw new m(
            b.SERVER_FILE_WRONG_SIZE,
            "Server recorded incorrect upload file size, please retry the upload."
          );
        var i = l.total - l.current,
          c = i;
        0 < r && (c = Math.min(c, r));
        var p = l.current,
          h = p + c,
          f = {
            "X-Goog-Upload-Command": c === i ? "upload, finalize" : "upload",
            "X-Goog-Upload-Offset": l.current,
          },
          d = s.slice(p, h);
        if (null === d) throw R();
        var _ = a.maxUploadRetryTime(),
          v = new Ae(
            t,
            "POST",
            function (e, t) {
              var r,
                n = Be(e, ["active", "final"]),
                o = l.current + c,
                i = s.size();
              return (
                (r = "final" === n ? Pe(a, u)(e, t) : null),
                new We(o, i, "final" === n, r)
              );
            },
            _
          );
        return (
          (v.headers = f),
          (v.body = d.uploadData()),
          (v.progressCallback = o || null),
          (v.errorHandler = Ne(e)),
          v
        );
      }
      var He = function (e, t, r) {
          if (K(e) || X(t) || X(r))
            (this.next = e),
              (this.error = t || null),
              (this.complete = r || null);
          else {
            var n = e;
            (this.next = n.next || null),
              (this.error = n.error || null),
              (this.complete = n.complete || null);
          }
        },
        ze = function (e, t, r, n, o, i) {
          (this.bytesTransferred = e),
            (this.totalBytes = t),
            (this.state = r),
            (this.metadata = n),
            (this.task = o),
            (this.ref = i);
        };
      function Ge(t, e, r) {
        for (var n = e.length, o = e.length, i = 0; i < e.length; i++)
          if (e[i].optional) {
            n = i;
            break;
          }
        var a, s, u, l, c, p;
        if (!(n <= r.length && r.length <= o))
          throw (
            ((a = n),
            (s = o),
            (u = t),
            (l = r.length),
            (p =
              a === s
                ? 1 === (c = a)
                  ? "argument"
                  : "arguments"
                : ((c = "between " + a + " and " + s), "arguments")),
            new m(
              b.INVALID_ARGUMENT_COUNT,
              "Invalid argument count in `" +
                u +
                "`: Expected " +
                c +
                " " +
                p +
                ", received " +
                l +
                "."
            ))
          );
        for (i = 0; i < r.length; i++)
          try {
            e[i].validator(r[i]);
          } catch (e) {
            throw e instanceof Error ? T(i, t, e.message) : T(i, t, e);
          }
      }
      var Xe = function (t, e) {
        var r = this;
        (this.validator = function (e) {
          (r.optional && !V(e)) || t(e);
        }),
          (this.optional = !!e);
      };
      function Ve(e, t) {
        function r(e) {
          if (!J(e)) throw "Expected string.";
        }
        var n, o, i;
        return (
          (n = e
            ? ((o = r),
              (i = e),
              function (e) {
                o(e), i(e);
              })
            : r),
          new Xe(n, t)
        );
      }
      function Ke() {
        return new Xe(function (e) {
          if (
            !(
              e instanceof Uint8Array ||
              e instanceof ArrayBuffer ||
              (Y() && e instanceof Blob)
            )
          )
            throw "Expected Blob or File.";
        });
      }
      function Ze(e) {
        return new Xe(ye, e);
      }
      function Je() {
        return new Xe(function (e) {
          if (!($(e) && 0 <= e)) throw "Expected a number 0 or greater.";
        });
      }
      function $e(t, e) {
        return new Xe(function (e) {
          if (!(null === e || (X(e) && e instanceof Object)))
            throw "Expected an Object.";
          null != t && t(e);
        }, e);
      }
      function Qe(e) {
        return new Xe(function (e) {
          if (!(null === e || K(e))) throw "Expected a Function.";
        }, e);
      }
      function Ye(r) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          Promise.resolve().then(function () {
            return r.apply(void 0, e);
          });
        };
      }
      var et =
        ((tt.prototype.makeProgressCallback_ = function () {
          var t = this,
            r = this.transferred_;
          return function (e) {
            return t.updateProgress_(r + e);
          };
        }),
        (tt.prototype.shouldDoResumable_ = function (e) {
          return 262144 < e.size();
        }),
        (tt.prototype.start_ = function () {
          this.state_ === M &&
            null === this.request_ &&
            (this.resumable_
              ? null === this.uploadUrl_
                ? this.createResumable_()
                : this.needToFetchStatus_
                ? this.fetchStatus_()
                : this.needToFetchMetadata_
                ? this.fetchMetadata_()
                : this.continueUpload_()
              : this.oneShotUpload_());
        }),
        (tt.prototype.resolveToken_ = function (t) {
          var r = this;
          this.authWrapper_.getAuthToken().then(function (e) {
            switch (r.state_) {
              case M:
                t(e);
                break;
              case q:
                r.transition_(F);
                break;
              case W:
                r.transition_(B);
            }
          });
        }),
        (tt.prototype.createResumable_ = function () {
          var n = this;
          this.resolveToken_(function (e) {
            var t = je(
                n.authWrapper_,
                n.location_,
                n.mappings_,
                n.blob_,
                n.metadata_
              ),
              r = n.authWrapper_.makeRequest(t, e);
            (n.request_ = r).getPromise().then(function (e) {
              (n.request_ = null),
                (n.uploadUrl_ = e),
                (n.needToFetchStatus_ = !1),
                n.completeTransitions_();
            }, n.errorHandler_);
          });
        }),
        (tt.prototype.fetchStatus_ = function () {
          var n = this,
            o = this.uploadUrl_;
          this.resolveToken_(function (e) {
            var t = qe(n.authWrapper_, n.location_, o, n.blob_),
              r = n.authWrapper_.makeRequest(t, e);
            (n.request_ = r).getPromise().then(function (e) {
              (e = e),
                (n.request_ = null),
                n.updateProgress_(e.current),
                (n.needToFetchStatus_ = !1),
                e.finalized && (n.needToFetchMetadata_ = !0),
                n.completeTransitions_();
            }, n.errorHandler_);
          });
        }),
        (tt.prototype.continueUpload_ = function () {
          var n = this,
            o = 262144 * this.chunkMultiplier_,
            i = new We(this.transferred_, this.blob_.size()),
            a = this.uploadUrl_;
          this.resolveToken_(function (e) {
            var t;
            try {
              t = Fe(
                n.location_,
                n.authWrapper_,
                a,
                n.blob_,
                o,
                n.mappings_,
                i,
                n.makeProgressCallback_()
              );
            } catch (e) {
              return (n.error_ = e), void n.transition_(H);
            }
            var r = n.authWrapper_.makeRequest(t, e);
            (n.request_ = r).getPromise().then(function (e) {
              n.increaseMultiplier_(),
                (n.request_ = null),
                n.updateProgress_(e.current),
                e.finalized
                  ? ((n.metadata_ = e.metadata), n.transition_(j))
                  : n.completeTransitions_();
            }, n.errorHandler_);
          });
        }),
        (tt.prototype.increaseMultiplier_ = function () {
          262144 * this.chunkMultiplier_ < 33554432 &&
            (this.chunkMultiplier_ *= 2);
        }),
        (tt.prototype.fetchMetadata_ = function () {
          var n = this;
          this.resolveToken_(function (e) {
            var t = Le(n.authWrapper_, n.location_, n.mappings_),
              r = n.authWrapper_.makeRequest(t, e);
            (n.request_ = r).getPromise().then(function (e) {
              (n.request_ = null), (n.metadata_ = e), n.transition_(j);
            }, n.metadataErrorHandler_);
          });
        }),
        (tt.prototype.oneShotUpload_ = function () {
          var n = this;
          this.resolveToken_(function (e) {
            var t = Me(
                n.authWrapper_,
                n.location_,
                n.mappings_,
                n.blob_,
                n.metadata_
              ),
              r = n.authWrapper_.makeRequest(t, e);
            (n.request_ = r).getPromise().then(function (e) {
              (n.request_ = null),
                (n.metadata_ = e),
                n.updateProgress_(n.blob_.size()),
                n.transition_(j);
            }, n.errorHandler_);
          });
        }),
        (tt.prototype.updateProgress_ = function (e) {
          var t = this.transferred_;
          (this.transferred_ = e),
            this.transferred_ !== t && this.notifyObservers_();
        }),
        (tt.prototype.transition_ = function (e) {
          if (this.state_ !== e)
            switch (e) {
              case q:
              case W:
                (this.state_ = e),
                  null !== this.request_ && this.request_.cancel();
                break;
              case M:
                var t = this.state_ === B;
                (this.state_ = e),
                  t && (this.notifyObservers_(), this.start_());
                break;
              case B:
                (this.state_ = e), this.notifyObservers_();
                break;
              case F:
                (this.error_ = w()), (this.state_ = e), this.notifyObservers_();
                break;
              case H:
              case j:
                (this.state_ = e), this.notifyObservers_();
            }
        }),
        (tt.prototype.completeTransitions_ = function () {
          switch (this.state_) {
            case W:
              this.transition_(B);
              break;
            case q:
              this.transition_(F);
              break;
            case M:
              this.start_();
          }
        }),
        Object.defineProperty(tt.prototype, "snapshot", {
          get: function () {
            var e = G(this.state_);
            return new ze(
              this.transferred_,
              this.blob_.size(),
              e,
              this.metadata_,
              this,
              this.ref_
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (tt.prototype.on = function (e, t, r, i) {
          var n =
              "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
            o = Qe(!0).validator,
            a = $e(null, !0).validator;
          function s(e) {
            try {
              return void o(e);
            } catch (e) {}
            try {
              if ((a(e), !(V(e.next) || V(e.error) || V(e.complete)))) throw "";
              return;
            } catch (e) {
              throw n;
            }
          }
          Ge(
            "on",
            [
              Ve(function () {
                if (e !== D.STATE_CHANGED)
                  throw (
                    "Expected one of the event types: [" +
                    D.STATE_CHANGED +
                    "]."
                  );
              }),
              $e(s, !0),
              Qe(!0),
              Qe(!0),
            ],
            arguments
          );
          var u = this;
          function l(o) {
            return function (e, t, r) {
              null !== o && Ge("on", o, arguments);
              var n = new He(e, t, i);
              return (
                u.addObserver_(n),
                function () {
                  u.removeObserver_(n);
                }
              );
            };
          }
          var c = [
            $e(function (e) {
              if (null === e) throw n;
              s(e);
            }),
            Qe(!0),
            Qe(!0),
          ];
          return V(t) || V(r) || V(i) ? l(null)(t, r, i) : l(c);
        }),
        (tt.prototype.then = function (e, t) {
          return this.promise_.then(e, t);
        }),
        (tt.prototype.catch = function (e) {
          return this.then(null, e);
        }),
        (tt.prototype.addObserver_ = function (e) {
          this.observers_.push(e), this.notifyObserver_(e);
        }),
        (tt.prototype.removeObserver_ = function (e) {
          var t = this.observers_.indexOf(e);
          -1 !== t && this.observers_.splice(t, 1);
        }),
        (tt.prototype.notifyObservers_ = function () {
          var t = this;
          this.finishPromise_(),
            this.observers_.slice().forEach(function (e) {
              t.notifyObserver_(e);
            });
        }),
        (tt.prototype.finishPromise_ = function () {
          if (null !== this.resolve_) {
            var e = !0;
            switch (G(this.state_)) {
              case z.SUCCESS:
                Ye(this.resolve_.bind(null, this.snapshot))();
                break;
              case z.CANCELED:
              case z.ERROR:
                Ye(this.reject_.bind(null, this.error_))();
                break;
              default:
                e = !1;
            }
            e && ((this.resolve_ = null), (this.reject_ = null));
          }
        }),
        (tt.prototype.notifyObserver_ = function (e) {
          switch (G(this.state_)) {
            case z.RUNNING:
            case z.PAUSED:
              e.next && Ye(e.next.bind(e, this.snapshot))();
              break;
            case z.SUCCESS:
              e.complete && Ye(e.complete.bind(e))();
              break;
            case z.CANCELED:
            case z.ERROR:
              e.error && Ye(e.error.bind(e, this.error_))();
              break;
            default:
              e.error && Ye(e.error.bind(e, this.error_))();
          }
        }),
        (tt.prototype.resume = function () {
          Ge("resume", [], arguments);
          var e = this.state_ === B || this.state_ === W;
          return e && this.transition_(M), e;
        }),
        (tt.prototype.pause = function () {
          Ge("pause", [], arguments);
          var e = this.state_ === M;
          return e && this.transition_(W), e;
        }),
        (tt.prototype.cancel = function () {
          Ge("cancel", [], arguments);
          var e = this.state_ === M || this.state_ === W;
          return e && this.transition_(q), e;
        }),
        tt);
      function tt(e, t, r, n, o, i) {
        var a = this;
        void 0 === i && (i = null),
          (this.transferred_ = 0),
          (this.needToFetchStatus_ = !1),
          (this.needToFetchMetadata_ = !1),
          (this.observers_ = []),
          (this.error_ = null),
          (this.uploadUrl_ = null),
          (this.request_ = null),
          (this.chunkMultiplier_ = 1),
          (this.resolve_ = null),
          (this.reject_ = null),
          (this.ref_ = e),
          (this.authWrapper_ = t),
          (this.location_ = r),
          (this.blob_ = o),
          (this.metadata_ = i),
          (this.mappings_ = n),
          (this.resumable_ = this.shouldDoResumable_(this.blob_)),
          (this.state_ = M),
          (this.errorHandler_ = function (e) {
            (a.request_ = null),
              (a.chunkMultiplier_ = 1),
              e.codeEquals(b.CANCELED)
                ? ((a.needToFetchStatus_ = !0), a.completeTransitions_())
                : ((a.error_ = e), a.transition_(H));
          }),
          (this.metadataErrorHandler_ = function (e) {
            (a.request_ = null),
              e.codeEquals(b.CANCELED)
                ? a.completeTransitions_()
                : ((a.error_ = e), a.transition_(H));
          }),
          (this.promise_ = new Promise(function (e, t) {
            (a.resolve_ = e), (a.reject_ = t), a.start_();
          })),
          this.promise_.then(null, function () {});
      }
      var rt =
        ((nt.prototype.toString = function () {
          return (
            Ge("toString", [], arguments),
            "gs://" + this.location.bucket + "/" + this.location.path
          );
        }),
        (nt.prototype.newRef = function (e, t) {
          return new nt(e, t);
        }),
        (nt.prototype.mappings = function () {
          return ve();
        }),
        (nt.prototype.child = function (e) {
          Ge("child", [Ve()], arguments);
          var t,
            r,
            n =
              ((t = this.location.path),
              (r = e
                .split("/")
                .filter(function (e) {
                  return 0 < e.length;
                })
                .join("/")),
              0 === t.length ? r : t + "/" + r),
            o = new se(this.location.bucket, n);
          return this.newRef(this.authWrapper, o);
        }),
        Object.defineProperty(nt.prototype, "parent", {
          get: function () {
            var e = (function (e) {
              if (0 === e.length) return null;
              var t = e.lastIndexOf("/");
              return -1 === t ? "" : e.slice(0, t);
            })(this.location.path);
            if (null === e) return null;
            var t = new se(this.location.bucket, e);
            return this.newRef(this.authWrapper, t);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(nt.prototype, "root", {
          get: function () {
            var e = new se(this.location.bucket, "");
            return this.newRef(this.authWrapper, e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(nt.prototype, "bucket", {
          get: function () {
            return this.location.bucket;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(nt.prototype, "fullPath", {
          get: function () {
            return this.location.path;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(nt.prototype, "name", {
          get: function () {
            return ce(this.location.path);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(nt.prototype, "storage", {
          get: function () {
            return this.authWrapper.service();
          },
          enumerable: !0,
          configurable: !0,
        }),
        (nt.prototype.put = function (e, t) {
          return (
            void 0 === t && (t = null),
            Ge("put", [Ke(), Ze(!0)], arguments),
            this.throwIfRoot_("put"),
            new et(
              this,
              this.authWrapper,
              this.location,
              this.mappings(),
              new ie(e),
              t
            )
          );
        }),
        (nt.prototype.putString = function (e, t, r) {
          void 0 === t && (t = U.RAW),
            Ge("putString", [Ve(), Ve(A, !0), Ze(!0)], arguments),
            this.throwIfRoot_("putString");
          var n = P(t, e),
            o = Object.assign({}, r);
          return (
            !X(o.contentType) &&
              X(n.contentType) &&
              (o.contentType = n.contentType),
            new et(
              this,
              this.authWrapper,
              this.location,
              this.mappings(),
              new ie(n.data, !0),
              o
            )
          );
        }),
        (nt.prototype.delete = function () {
          var s = this;
          return (
            Ge("delete", [], arguments),
            this.throwIfRoot_("delete"),
            this.authWrapper.getAuthToken().then(function (e) {
              var t,
                r,
                n,
                o,
                i,
                a =
                  ((t = s.authWrapper),
                  (r = s.location),
                  (n = pe(r.fullServerUrl())),
                  (o = t.maxOperationRetryTime()),
                  ((i = new Ae(
                    n,
                    "DELETE",
                    function (e, t) {},
                    o
                  )).successCodes = [200, 204]),
                  (i.errorHandler = Ie(r)),
                  i);
              return s.authWrapper.makeRequest(a, e).getPromise();
            })
          );
        }),
        (nt.prototype.listAll = function () {
          Ge("listAll", [], arguments);
          var e = { prefixes: [], items: [] };
          return this.listAllHelper(e).then(function () {
            return e;
          });
        }),
        (nt.prototype.listAllHelper = function (i, a) {
          return e(this, void 0, void 0, function () {
            var t, r, n, o;
            return s(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = { pageToken: a }), [4, this.list(t)];
                case 1:
                  return (
                    (r = e.sent()),
                    (n = i.prefixes).push.apply(n, r.prefixes),
                    (o = i.items).push.apply(o, r.items),
                    null == r.nextPageToken
                      ? [3, 3]
                      : [4, this.listAllHelper(i, r.nextPageToken)]
                  );
                case 2:
                  e.sent(), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        (nt.prototype.list = function (n) {
          Ge("list", [new Xe(Ue, !0)], arguments);
          var o = this;
          return this.authWrapper.getAuthToken().then(function (e) {
            var t = n || {},
              r = (function (e, t, r, n, o) {
                var i = {};
                t.isRoot ? (i.prefix = "") : (i.prefix = t.path + "/"),
                  r && 0 < r.length && (i.delimiter = r),
                  n && (i.pageToken = n),
                  o && (i.maxResults = o);
                var a = pe(t.bucketOnlyServerUrl()),
                  s = e.maxOperationRetryTime(),
                  u = new Ae(a, "GET", Se(e, t.bucket), s);
                return (u.urlParams = i), (u.errorHandler = Ne(t)), u;
              })(o.authWrapper, o.location, "/", t.pageToken, t.maxResults);
            return o.authWrapper.makeRequest(r, e).getPromise();
          });
        }),
        (nt.prototype.getMetadata = function () {
          var r = this;
          return (
            Ge("getMetadata", [], arguments),
            this.throwIfRoot_("getMetadata"),
            this.authWrapper.getAuthToken().then(function (e) {
              var t = Le(r.authWrapper, r.location, r.mappings());
              return r.authWrapper.makeRequest(t, e).getPromise();
            })
          );
        }),
        (nt.prototype.updateMetadata = function (c) {
          var p = this;
          return (
            Ge("updateMetadata", [Ze()], arguments),
            this.throwIfRoot_("updateMetadata"),
            this.authWrapper.getAuthToken().then(function (e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s,
                u,
                l =
                  ((t = p.authWrapper),
                  (r = p.location),
                  (n = c),
                  (o = p.mappings()),
                  (i = pe(r.fullServerUrl())),
                  (a = ge(n, o)),
                  (s = t.maxOperationRetryTime()),
                  ((u = new Ae(i, "PATCH", Pe(t, o), s)).headers = {
                    "Content-Type": "application/json; charset=utf-8",
                  }),
                  (u.body = a),
                  (u.errorHandler = Ie(r)),
                  u);
              return p.authWrapper.makeRequest(l, e).getPromise();
            })
          );
        }),
        (nt.prototype.getDownloadURL = function () {
          var u = this;
          return (
            Ge("getDownloadURL", [], arguments),
            this.throwIfRoot_("getDownloadURL"),
            this.authWrapper.getAuthToken().then(function (e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s =
                  ((t = u.authWrapper),
                  (r = u.location),
                  (n = u.mappings()),
                  (o = pe(r.fullServerUrl())),
                  (i = t.maxOperationRetryTime()),
                  ((a = new Ae(o, "GET", Ce(t, n), i)).errorHandler = Ie(r)),
                  a);
              return u.authWrapper
                .makeRequest(s, e)
                .getPromise()
                .then(function (e) {
                  if (null === e)
                    throw new m(
                      b.NO_DOWNLOAD_URL,
                      "The given file does not have any download URLs."
                    );
                  return e;
                });
            })
          );
        }),
        (nt.prototype.throwIfRoot_ = function (e) {
          if ("" === this.location.path)
            throw (
              ((t = e),
              new m(
                b.INVALID_ROOT_OPERATION,
                "The operation '" +
                  t +
                  "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
              ))
            );
          var t;
        }),
        nt);
      function nt(e, t) {
        (this.authWrapper = e),
          (this.location = t instanceof se ? t : se.makeFromUrl(t));
      }
      var ot =
        ((it.prototype.getPromise = function () {
          return this.promise_;
        }),
        (it.prototype.cancel = function (e) {}),
        it);
      function it(e) {
        this.promise_ = Promise.reject(e);
      }
      var at =
        ((st.prototype.addRequest = function (e) {
          var t = this,
            r = this.id;
          this.id++,
            this.map.set(r, e),
            e.getPromise().then(
              function () {
                return t.map.delete(r);
              },
              function () {
                return t.map.delete(r);
              }
            );
        }),
        (st.prototype.clear = function () {
          this.map.forEach(function (e) {
            e && e.cancel(!0);
          }),
            this.map.clear();
        }),
        st);
      function st() {
        (this.map = new Map()), (this.id = -9007199254740991);
      }
      var ut =
        ((lt.extractBucket_ = function (e) {
          var t = e.storageBucket || null;
          return null == t ? null : se.makeFromBucketSpec(t).bucket;
        }),
        (lt.prototype.getAuthToken = function () {
          var e = this.authProvider_.getImmediate({ optional: !0 });
          return e
            ? e.getToken().then(
                function (e) {
                  return null !== e ? e.accessToken : null;
                },
                function () {
                  return null;
                }
              )
            : Promise.resolve(null);
        }),
        (lt.prototype.bucket = function () {
          if (this.deleted_) throw E();
          return this.bucket_;
        }),
        (lt.prototype.service = function () {
          return this.service_;
        }),
        (lt.prototype.makeStorageReference = function (e) {
          return this.storageRefMaker_(this, e);
        }),
        (lt.prototype.makeRequest = function (e, t) {
          if (this.deleted_) return new ot(E());
          var r = this.requestMaker_(e, this.appId_, t, this.pool_);
          return this.requestMap_.addRequest(r), r;
        }),
        (lt.prototype.deleteApp = function () {
          (this.deleted_ = !0), (this.app_ = null), this.requestMap_.clear();
        }),
        (lt.prototype.maxUploadRetryTime = function () {
          return this.maxUploadRetryTime_;
        }),
        (lt.prototype.setMaxUploadRetryTime = function (e) {
          this.maxUploadRetryTime_ = e;
        }),
        (lt.prototype.maxOperationRetryTime = function () {
          return this.maxOperationRetryTime_;
        }),
        (lt.prototype.setMaxOperationRetryTime = function (e) {
          this.maxOperationRetryTime_ = e;
        }),
        lt);
      function lt(e, t, r, n, o, i) {
        var a;
        if (
          ((this.bucket_ = null),
          (this.appId_ = null),
          (this.deleted_ = !1),
          (this.app_ = e),
          null !== this.app_)
        ) {
          var s = this.app_.options;
          X(s) &&
            ((this.bucket_ = lt.extractBucket_(s)),
            (this.appId_ = null !== (a = s.appId) && void 0 !== a ? a : null));
        }
        (this.authProvider_ = t),
          (this.storageRefMaker_ = r),
          (this.requestMaker_ = n),
          (this.pool_ = i),
          (this.service_ = o),
          (this.maxOperationRetryTime_ = 12e4),
          (this.maxUploadRetryTime_ = 6e5),
          (this.requestMap_ = new at());
      }
      var ct =
        ((pt.prototype.start_ = function () {
          var t,
            r,
            e,
            n,
            o,
            i,
            a,
            s,
            u,
            l = this;
          function c(e, t) {
            var r,
              n = l.resolve_,
              o = l.reject_,
              i = t.xhr;
            if (t.wasSuccessCode)
              try {
                var a = l.callback_(i, i.getResponseText());
                V(a) ? n(a) : n();
              } catch (e) {
                o(e);
              }
            else
              null !== i
                ? ((r = y()).setServerResponseProp(i.getResponseText()),
                  l.errorCallback_ ? o(l.errorCallback_(i, r)) : o(r))
                : t.canceled
                ? o((r = (l.appDelete_ ? E : w)()))
                : o(
                    (r = new m(
                      b.RETRY_LIMIT_EXCEEDED,
                      "Max retry time for operation exceeded, please try again."
                    ))
                  );
          }
          function p() {
            return 2 === a;
          }
          function h() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            s || ((s = !0), r.apply(null, e));
          }
          function f(e) {
            o = setTimeout(function () {
              (o = null), t(d, p());
            }, e);
          }
          function d(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            s ||
              (e || p() || i
                ? h.call.apply(h, v([null, e], t))
                : (n < 64 && (n *= 2),
                  f(1 === a ? ((a = 2), 0) : 1e3 * (n + Math.random()))));
          }
          function _(e) {
            u ||
              ((u = !0),
              s ||
                (null !== o
                  ? (e || (a = 2), clearTimeout(o), f(0))
                  : e || (a = 1)));
          }
          this.canceled_
            ? c(0, new ht(!1, null, !0))
            : (this.backoffId_ =
                ((t = function (i, e) {
                  if (e) i(!1, new ht(!1, null, !0));
                  else {
                    var t = l.pool_.createXhrIo();
                    (l.pendingXhr_ = t),
                      null !== l.progressCallback_ &&
                        t.addUploadProgressListener(a),
                      t
                        .send(l.url_, l.method_, l.body_, l.headers_)
                        .then(function (e) {
                          null !== l.progressCallback_ &&
                            e.removeUploadProgressListener(a),
                            (l.pendingXhr_ = null);
                          var t = (e = e).getErrorCode() === I.NO_ERROR,
                            r = e.getStatus();
                          if (t && !l.isRetryStatusCode_(r)) {
                            var n = -1 !== l.successCodes_.indexOf(r);
                            i(!0, new ht(n, e));
                          } else {
                            var o = e.getErrorCode() === I.ABORT;
                            i(!1, new ht(!1, null, o));
                          }
                        });
                  }
                  function a(e) {
                    var t = e.loaded,
                      r = e.lengthComputable ? e.total : -1;
                    null !== l.progressCallback_ && l.progressCallback_(t, r);
                  }
                }),
                (r = c),
                (e = this.timeout_),
                (o = null),
                (u = s = i = !(n = 1)),
                f((a = 0)),
                setTimeout(function () {
                  _((i = !0));
                }, e),
                _));
        }),
        (pt.prototype.getPromise = function () {
          return this.promise_;
        }),
        (pt.prototype.cancel = function (e) {
          (this.canceled_ = !0),
            (this.appDelete_ = e || !1),
            null !== this.backoffId_ && (0, this.backoffId_)(!1),
            null !== this.pendingXhr_ && this.pendingXhr_.abort();
        }),
        (pt.prototype.isRetryStatusCode_ = function (e) {
          var t = 500 <= e && e < 600,
            r = -1 !== [408, 429].indexOf(e),
            n = -1 !== this.additionalRetryCodes_.indexOf(e);
          return t || r || n;
        }),
        pt);
      function pt(e, t, r, n, o, i, a, s, u, l, c) {
        var p = this;
        (this.pendingXhr_ = null),
          (this.backoffId_ = null),
          (this.resolve_ = null),
          (this.reject_ = null),
          (this.canceled_ = !1),
          (this.appDelete_ = !1),
          (this.url_ = e),
          (this.method_ = t),
          (this.headers_ = r),
          (this.body_ = n),
          (this.successCodes_ = o.slice()),
          (this.additionalRetryCodes_ = i.slice()),
          (this.callback_ = a),
          (this.errorCallback_ = s),
          (this.progressCallback_ = l),
          (this.timeout_ = u),
          (this.pool_ = c),
          (this.promise_ = new Promise(function (e, t) {
            (p.resolve_ = e), (p.reject_ = t), p.start_();
          }));
      }
      var ht = function (e, t, r) {
        (this.wasSuccessCode = e), (this.xhr = t), (this.canceled = !!r);
      };
      function ft(e, t, r, n) {
        var o,
          i,
          a,
          s,
          u,
          l,
          c = he(e.urlParams),
          p = e.url + c,
          h = Object.assign({}, e.headers);
        return (
          (o = h),
          (i = t) && (o["X-Firebase-GMPID"] = i),
          (a = h),
          null !== (s = r) &&
            0 < s.length &&
            (a.Authorization = "Firebase " + s),
          (u = h),
          (l = void 0 !== wt ? wt.SDK_VERSION : "AppManager"),
          (u["X-Firebase-Storage-Version"] = "webjs/" + l),
          new ct(
            p,
            e.method,
            h,
            e.body,
            e.successCodes,
            e.additionalRetryCodes,
            e.handler,
            e.errorHandler,
            e.timeout,
            e.progressCallback,
            n
          )
        );
      }
      var dt =
        ((_t.prototype.ref = function (e) {
          if (
            (Ge(
              "ref",
              [
                Ve(function (e) {
                  if ("string" != typeof e) throw "Path is not a string.";
                  if (/^[A-Za-z]+:\/\//.test(e))
                    throw "Expected child path but got a URL, use refFromURL instead.";
                }, !0),
              ],
              arguments
            ),
            null == this.bucket_)
          )
            throw new Error("No Storage Bucket defined in Firebase Options.");
          var t = new rt(this.authWrapper_, this.bucket_);
          return null != e ? t.child(e) : t;
        }),
        (_t.prototype.refFromURL = function (e) {
          return (
            Ge(
              "refFromURL",
              [
                Ve(function (e) {
                  if ("string" != typeof e) throw "Path is not a string.";
                  if (!/^[A-Za-z]+:\/\//.test(e))
                    throw "Expected full URL but got a child path, use ref instead.";
                  try {
                    se.makeFromUrl(e);
                  } catch (e) {
                    throw "Expected valid full URL but got an invalid one.";
                  }
                }, !1),
              ],
              arguments
            ),
            new rt(this.authWrapper_, e)
          );
        }),
        Object.defineProperty(_t.prototype, "maxUploadRetryTime", {
          get: function () {
            return this.authWrapper_.maxUploadRetryTime();
          },
          enumerable: !0,
          configurable: !0,
        }),
        (_t.prototype.setMaxUploadRetryTime = function (e) {
          Ge("setMaxUploadRetryTime", [Je()], arguments),
            this.authWrapper_.setMaxUploadRetryTime(e);
        }),
        (_t.prototype.setMaxOperationRetryTime = function (e) {
          Ge("setMaxOperationRetryTime", [Je()], arguments),
            this.authWrapper_.setMaxOperationRetryTime(e);
        }),
        Object.defineProperty(_t.prototype, "app", {
          get: function () {
            return this.app_;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(_t.prototype, "INTERNAL", {
          get: function () {
            return this.internals_;
          },
          enumerable: !0,
          configurable: !0,
        }),
        _t);
      function _t(e, t, r, n) {
        if (
          ((this.bucket_ = null),
          (this.authWrapper_ = new ut(
            e,
            t,
            function (e, t) {
              return new rt(e, t);
            },
            ft,
            this,
            r
          )),
          (this.app_ = e),
          null != n)
        )
          this.bucket_ = se.makeFromBucketSpec(n);
        else {
          var o = this.authWrapper_.bucket();
          null != o && (this.bucket_ = new se(o, ""));
        }
        this.internals_ = new vt(this);
      }
      var vt =
        ((mt.prototype.delete = function () {
          return this.service_.authWrapper_.deleteApp(), Promise.resolve();
        }),
        mt);
      function mt(e) {
        this.service_ = e;
      }
      var bt, gt;
      function yt(e, t) {
        var r = e.getProvider("app").getImmediate(),
          n = e.getProvider("auth-internal");
        return new dt(r, n, new re(), t);
      }
      (gt = {
        TaskState: z,
        TaskEvent: D,
        StringFormat: U,
        Storage: dt,
        Reference: rt,
      }),
        (bt = wt).INTERNAL.registerComponent(
          new c("storage", yt, "PUBLIC")
            .setServiceProps(gt)
            .setMultipleInstances(!0)
        ),
        bt.registerVersion("@firebase/storage", "0.3.33");
    }.apply(this, arguments));
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-storage.js.map

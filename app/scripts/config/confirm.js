/**
 * Created by 陈子枫 on 2016/9/14.
 */
!function (a) {
  function e(n) {
    if (i[n])return i[n].exports;
    var t = i[n] = {exports: {}, id: n, loaded: !1};
    return a[n].call(t.exports, t, t.exports, e), t.loaded = !0, t.exports
  }

  var i = {};
  return e.m = a, e.c = i, e.p = "", e(0)
}([function (a, e, i) {
  i(1), function (a) {
    a.fn.jDialog = function (e) {
      return this.each(function () {
        function i() {
          n.allowOverlay && o.get(0).remove(), t.removeClass("show")
        }

        var n = a.extend({
          skinClassName: "",
          animationType: "fade-in",
          allowOverlay: !0
        }, e), t = a(this), l = a('<div class="jDialog-content"></div>').addClass(n.skinClassName).append(t.html());
        if (t.empty().append(l).addClass(n.animationType), n.allowOverlay) {
          var o = a('<div class="jDialog-overlay"></div>');
          o.click(i)
        }
        t.find('[data-dismiss="JDialog"]').click(i);
        var s = a('[data-toggle="JDialog"][data-target=' + t.attr("id") + "]");
        s.click(function () {
          n.allowOverlay && a("body").append(o), t.addClass("show")
        })
      })
    }
  }(jQuery)
}, function (a, e) {
}]);

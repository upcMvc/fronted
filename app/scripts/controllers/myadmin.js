'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MyadminCtrl
 * @description
 * # MyadminCtrl
 * Controller of the frontedApp
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
window.onload = function(){
  $("#dialog-4").jDialog({
    skinClassName: 'demo',
    animationType: 'flip',
    allowOverlay: false
  });
  $("#input-id").fileinput();
  $("#input-id").fileinput({'showUpload':false,'previewFileType':'any'});


};
angular.module('frontedApp')
  .controller('MyadminCtrl', function ($scope,$http,$route) {
    
    $http.get("http://localhost:8080/shop/ownshop").then(function (data) {
      if(data.data.code==-1){
      //  location.href(http://);      //登陆页面
      }
      else{
        console.log(data);
        var sellerid =data.data.id;
        console.log(sellerid);
        $http.get(config.serveraddress+"/shop/showshop?id="+sellerid).then(function(data){
          $scope.shop= data.data;

        });

        $http.get(config.serveraddress+"/goods/show?shopid="+sellerid).then(function(data){
          $scope.goods= data.data;
          console.log(data);
          console.log($scope.goods);


        });
      }
    });

    //发数据
    $scope.delete=function (index) {

      $http.get(config.serveraddress+"/goods/delete?id="+$scope.goods[index].id).success(function (data) {
        console.log(data);
        if(data.code==1){
          $scope.goods.splice(index,1);
        }
      });
    };
  });

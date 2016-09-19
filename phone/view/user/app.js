/**
 *
 * 用户 模块
 *
 * @author marker
 * @date 2016-06-05
 */
define(['app','css!./app.css'], function (app) {//加载依赖js,
	return ["$scope","$location", function ($scope, $location) {



		$( "div[data-role='header']" ).toolbar({ });

		$( ".user-menus ul" ).listview({ });


		$(".footerbars").show();


		$scope.gotoUserInfo = function(){


			$location.path("/user/detail.html")


		}
		 
    }];
});
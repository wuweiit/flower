/**
 *
 * 用户 模块
 *
 * @author marker
 * @date 2016-06-05
 */
define(['app','css!./app.css'], function (app) {//加载依赖js,
	return ["$scope", function ($scope) {



        $(":jqmData(role='listview')").listview({ });
        $(":jqmData(role='header')").toolbar({ });
		 
    }];
});

// Declare app level module which depends on filters, and services



define([
   	    'angularAMD'
   	   , 'app'
  	
  	], function (angularAMD, app) {//加载依赖js,
 
	
/* 配置路由器 */

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	
	/* 主页 */
	$routeProvider
		// 主页
		// .when('/index.html', router({
	     //    templateUrl: 'view/home/index.htm'
	     //  , controllerUrl: 'view/home/app.js'
		// }))
        //
		// // 登录
		// .when('/login.html', router({
		// 	minTitle: "登录",
		// 	templateUrl: '/view/login/login.htm'
		//   , controllerUrl: '/view/login/login.js'
		// }))
		//
        //
		//
		// // 关于我们
		// .when('/about.html', {templateUrl: 'service/about.htm'})
		//
		//
		// .when('/register.html', router({
		// 	templateUrl: 'view/register/register.htm'
		//   , controllerUrl: 'view/register/register.js'
		// }))
		//
		// /* 用户路由  */
		// .when('/user/profile.html', router({
		// 	templateUrl: '/template/user/profile.htm'
		//   , controllerUrl: '/js/controllers/user/profile.js'
		// }))
		// .when('/user/archives.html', router({
		// 	templateUrl: '/template/user/archives.htm'
		//   , controllerUrl: '/js/controllers/user/archives.js'
		//
		// }))
		// .when('/user/photos.html', router({
		// 	templateUrl: '/template/user/photos.htm'
		// }))
		// .when('/user/messages.html', router({
		// 	templateUrl: '/template/user/messages.htm'
		// }))
		// .when('/user/friends.html', router({
		// 	templateUrl: '/template/user/friends.htm'
		// }))
		// .when('/user/wishs.html', router({
		// 	templateUrl: '/template/user/wishs.htm'
		// }))
		//
		//
		// /* 闪聊模式 */
		// .when('/flashchat/index.html', router({
		// 	templateUrl: '/template/flashchat/index.htm'
		//   , controllerUrl: '/js/controllers/flashchat.js'
		// }))
		//
		// /* 心愿墙 */
        // .when('/wishwall/build.html', router({
		// 	templateUrl: '/template/wishwall/build.htm'
		//   , controllerUrl: '/js/controllers/wishwall.js'
		// }))
        //
		// // 在线视频
		// .when('/app/video/index.html', router({
		// 	minTitle: "登录",
		// 	templateUrl: '/view/video/video.htm'
		// 	, controllerUrl: '/view/video/video.js'
		// }))
		//
		//
		//
		// .when('/wishwall/item/:objectId.html', router({
		// 	templateUrl: '/template/wishwall/item.htm'
		//   , controllerUrl: '/js/controllers/wishwall/item.js'
		// }))
		//
		// .when('/wishwall/index.html', router({
		// 	templateUrl: '/template/wishwall/index.htm'
		//   , controllerUrl: '/js/controllers/wishwall/app.js'
		// }))




		/** ****************************************
		 *
		 *    手机端(AmazeUI)
		 *
		 * ****************************************
		 * */
		// .when('/mobi/secret.html', router({
		// 	templateUrl: '/view/mobi/secret/app.htm'
		// 	, controllerUrl: '/view/mobi/secret/app.js'
		// }))
		// /** 登录 */
		// .when('/mobi/login.html', router({
		// 	templateUrl: '/view/mobi/login/app.htm'
		// 	, controllerUrl: '/view/mobi/login/app.js'
		// }))
        // /** 注册账号 */
        // .when('/mobi/register.html', router({
         //    templateUrl: '/view/mobi/register/app.htm'
         //    , controllerUrl: '/view/mobi/register/app.js'
        // }))
        // /** 忘记密码 */
        // .when('/mobi/forget.html', router({
         //    templateUrl: '/view/mobi/forget/app.htm'
         //    , controllerUrl: '/view/mobi/forget/app.js'
        // }))
        //
		// /** 个人资料 */
		// .when('/mobi/profile.html', router({
		// 	templateUrl: '/view/mobi/profile/app.htm'
		// 	, controllerUrl: '/view/mobi/profile/app.js'
		// }))



		/** 主页 */
		.when('/', router({
			templateUrl: 'view/home/index.htm'
			, controllerUrl: 'view/home/app.js'
		}))
        /** 用户 */
        .when('/user.html', router({
            templateUrl: 'view/user/index.htm'
            , controllerUrl: 'view/user/app.js'
        }))
        /** 分类 */
        .when('/category.html', router({
            templateUrl: 'view/category/index.htm'
            , controllerUrl: 'view/category/app.js'
        }))
        /** 购物车 */
        .when('/shopcar.html', router({
            templateUrl: 'view/shopcar/index.htm'
            , controllerUrl: 'view/shopcar/app.js'
        }))


		/** 用户 */
		.when('/user/order/:status.html', router({
			templateUrl: 'view/user/order/index.htm'
			, controllerUrl: 'view/user/order/app.js'
		}))
        .when('/user/detail.html', router({
            templateUrl: 'view/user/detail/index.htm'
            , controllerUrl: 'view/user/detail/app.js'
        }))



		// 访问其他地址，自动跳转至主页
	    .otherwise({redirectTo: '/'});



	// 重写地址支持s
     $locationProvider.html5Mode(true); //.hashPrefix('!#');

    /**
     * 实现AMD规范异步加载数据
     */
    function router(config){
        // 生成独立URL，保证不缓存页面数据
        var random = "?t="+Math.random();
        config.templateUrl = config.templateUrl + random;
        return angularAMD.route(config);
    }


}]).run(['$rootScope', function($rootScope) {


   $rootScope.$on('$routeChangeStart', function(evt, next, current) {
       // 如果用户未登录
    // 	var control = next.$$route.controller;// 控制器名称


       console.log(evt)
       console.log(next)
       console.log(current)



   });

		$rootScope.$on('$routeChangeSuccess', function(evt, next, current) {
			// 数据reload
			console.log(current);
		});

}]);

 

});
/**
 *
 * reuqirejs 配置文件
 *
 * 在引用的js中需要配置mode属性来指定采用视图模式.
 *
 *
 *
 *
 * @type {{baseUrl: string, paths: {jquery: string, bootstrap: string, angular: string, x18n: string, angular-animate: string, angular-route: string, angularAMD: string, webchat: string, umeditor: string, umeditorConfig: string, handlebars: string, loading: string, amazeui: string, app: string, moudleRouter: string, moudleServices: string, moudleController: string, moudleFilters: string, moudleDirectives: string, ajax: string, api: string}, map: {*: {css: string}}, shim: {angular: {exports: string}, angularAMD: {deps: string[]}, bootstrap: {deps: string[]}, angular-route: {deps: string[], exports: string}, angular-animate: {deps: string[], exports: string}, loading: {deps: string[]}, umeditor: {deps: string[]}}, deps: string[]}}
 */
var options = {
	baseUrl: './', //js文件存放的路径
    paths: {//配置加载路径
          'jquery': 'lib/jquery/jquery-1.10.2.min'
        , 'bootstrap': 'lib/bootstrap3/js/bootstrap.min'
        , 'angular': 'lib/angular-1.2.30/angular' // requirejs的一个文本插件
        , 'x18n': 'lib/x18n/x18n'
        , 'angular-animate': 'lib/angular-1.2.30/angular-animate'
        , 'angular-route': 'lib/angular-1.2.30/angular-route'
        , 'angularAMD': 'lib/angular/angularAMD.min'
        , 'webchat': 'lib/faceinner/websocket'
        , 'umeditor': 'lib/umeditor/umeditor'	        	
        , 'umeditorConfig': 'lib/umeditor/umeditor.config'
        , 'handlebars': 'lib/handlebars/handlebars-v1.3.0'
        , 'loading': 'lib/jquery/jquery.loading'
        , 'dropload':'lib/jquery/plugins/dropload-gh-pages/dropload'
        , 'jquerymobile': 'lib/jquerymobile/jquery.mobile-1.4.5'
        , 'flickity':'lib/jquery/plugins/flickity/js/flickity.pkgd.min'


        /* 自定义JavaScript */	
        , 'app': 'js/app'
        , 'moudleRouter': 'js/routersa'
        , 'moudleServices': 'js/services'
        , 'moudleController': 'js/controller'
        , 'moudleFilters': 'js/filters'
        , 'moudleDirectives': 'js/directives'
        , 'ajax': 'js/faceinner.ajax'
        , 'api': 'js/faceinner.api'



    },
    map: {
  	  '*': {
  	      'css': 'lib/require/plugins/css.min' // or whatever the path to require-css is
  	   }
  	},
    shim: {
       'angular': {
    	   exports: 'angular'
       }
       , 'angularAMD':{
    	   deps:['angular']
       }
       , 'bootstrap':{
    	   deps:['jquery']
       }
       , 'angular-route':{
           deps:['angular'],
           exports: 'angular-route'
       }
       , 'angular-animate':{
           deps:['angular'],
           exports: 'angular-animate'
       }
       , 'loading':{
    	   deps:['jquery']
       }
       , 'flickity':{
            deps:['jquery','jquerymobile']

        }
       ,'jquerymobile':{
            deps:['jquery']
        }
       , 'umeditor':{
           deps:['jquery','umeditorConfig']
       }
        
    },
    deps: [ 'bootstrap','loading','api','ajax']
    , urlArgs: "time=" + Math.random() // 防止读取缓存，调试用
};



var mode = getViewMode();// 获取视图模式;
switch (mode){
    case 'pc':// pc端使用的bootstrap


        break;
    case 'pad':// 平板端使用


        break;
    case 'mobile': // 手机端依赖于
        options.deps = ['jquerymobile', 'loading', 'api', 'ajax']
        break;
}

// 初始化requrejs
require.config(options);



/**
 * 启动App
 * */
require([
        'angular'
      , 'angularAMD'
      , 'jquery'
      , 'app'
      , 'moudleRouter'
      , 'moudleController'
      , 'loading'
      , 'jquerymobile'
      
    ], function(angular, angularAMD,$, app, loading) {
	console.log('ready bootstrap angular');

    // $.mobile.loading( "show", {
    //    text: "启动中...",
    //    textVisible: true,
    //    theme: "a",
    //    textonly: false,
    //    html: "..."
    // });

    console.log("Jquery Mobile init...")
    $.mobile.page.prototype.options.domCache = false;// 关闭缓存
    $.mobile.initializePage = false;
    $.mobile.defaultPageTransition = "fade";
    $.mobile.autoInitializePage = false;
    $.mobile.hideUrlBar = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.ajaxEnabled = false;
    $.support.boxShadow = false;
    console.log( $.support);
    // $( document ).on( "mobileinit", function() {
    //
    //
    //
    // });


    // 启动angularjs
	angularAMD.bootstrap(app);
	     
	
	
	
});


/**
 * 获取视图模式
 * (mobile | pc | pad)
 *
 * @author marker
 * @date 2016-08-13
 */
function getViewMode(){
    var els= document.getElementsByTagName("script");
    var len = els.length;
    for(var i=0; i < len; i++){
        var dom = els[i];
        if(dom.getAttribute("data-main")){
            var mode = dom.getAttribute("mode");
            if(mode){ return mode; }
        };
    }
    return "pc";// 默认显示电脑版本
}


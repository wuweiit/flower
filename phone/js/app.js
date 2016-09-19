'use strict';


define([
	      'require'
	    , 'jquery'
	 	, 'angular'
		, 'angular-route'
		, 'angular-animate'
		, 'moudleFilters',
		, 'moudleServices',
		, 'moudleDirectives' 
	
	], function (require, $, angular) {//加载依赖js,


	var lang = 'zh';


	// 加载国际化文件
	$.getScript('lib/angular/i18n/angular-locale_'+lang+'.js');




	$( document ).on( "mobileinit", function() {
		$.mobile.page.prototype.options.domCache = false;// 关闭缓存
		$.mobile.initializePage = false;
		$.mobile.defaultPageTransition = "fade";
		$.mobile.autoInitializePage = true;
		$.mobile.hideUrlBar = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.ajaxEnabled = false;

	});
	
	
	return angular.module('faceinner', [
			'ngRoute',
			'ngAnimate', 
			'app.filters',
			'app.services',
			'app.directives' 
		]
	)
	
	// 配置初始化信息
	.config(['$httpProvider',  
	    function ($httpProvider) {
			//这里可以初始化全局变量
			console.log('应用程序初始化....');
			
			
			
			
			
			
			 
		}
	]);
	
	
});



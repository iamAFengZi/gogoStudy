/**
 * Created by dasxx on 2017-08-17.
 */
//define(name,["依赖的模块列表"],function(arg){  });
//参数1: name   [String]  可选项,如果设置了name,表示该模块是个具名模块,在require加载时,必须先设置别名,并且别名必须和name保持一致
//参数2: []  [Array]  数组中存放该模块需要依赖的模块路径(该路径永远是相对ruquire引用的html文件相对的地址)或者是别名
//                    一旦依赖某个模块,则该模块必然在依赖模块后执行
//参数3: function [Function] 模块主体,形参是用来接收依赖的模块的返回值,比如jquery.js中返回的jquery对象
//返回值:  return的返回值可以被require的回调函数接收,并使用.
define([],function () {
  console.log("我是test定义的模块");
});
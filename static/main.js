 /*热门城市的城市名*/
    var rcity=new Array("北京","上海","郑州","东莞");
/*按省份选择的数据*/
/*河南省，北京 这个省份名字添加后需要在页面的 下拉菜单里添加上*/
  var selectcity=new Array();
  selectcity["河南省"]=new Array("开封市","郑州市","洛阳市");
  selectcity["北京"]=new Array("朝阳区","海淀区","石景山区","丰台区"); 
  
  
 $(document).ready(function(){
   for(i=0;i<rcity.length;i++){
	 // $(".r").append('<a href="javascript:void(0);" class="city">'+rcity[i]+'</a>');
   }
 
  //省份的下拉列表变化后后面的下拉列表更新新值
  $("#selecta").change(function(){
	  var ct=$(this).val();$("#selectb").children().remove();
	  for(i=0;i<selectcity[ct].length;i++){
		  $("#selectb").append("<option>"+selectcity[ct][i]+"</option>");
	  }
	  
  });

   //点击“确定”按钮后，关闭窗口，返回选择值
   $(".submit").click(function(){
	   $(".sanjiao").hide();	$(".city-main").hide();
	   $("#city").val($("#selectb").val());
	   
   });

	//输入框ID 一定要是city，用户点击输入框后显示弹窗
	$("#city").click(function(){
		var offset=$("#city").offset();
		
		//小三角和弹窗的偏移位置
	   $(".sanjiao").css("top",offset.top+22).css("left",offset.left);
	   //$(".city-main").css("top",offset.top+38).css("left",offset.left);
	   $(".city-main").css("top",90).css("left",offset.left);
	   $(".sanjiao").show();	$(".city-main").show();	
	});
	 
	 //热门城市里的链接呗点击后关闭弹窗，返回值
	 $(".city").click(function(){
		  $(".sanjiao").hide();	$(".city-main").hide();
		  $("#city").val($(this).html());
	 });
	 //字母排序的城市里的链接呗点击后关闭弹窗，返回值
	  $(".zmcity").click(function(){
		 
		  $(".sanjiao").hide();	$(".city-main").hide();
		  $("#city").val($(this).html());
	 });
	 
		 //城市名字的hover的反馈
	 $(".city").hover(function(){
		$(this).css("background","#FFAD19").css("color","#fff"); 
	 },function(){
		 
		 $(this).css("background"," #FEF9F0").css("color","#666"); 
	 });
	 $(".zmcity").hover(function(){
		$(this).css("background","#FFAD19").css("color","#fff"); 
	 },function(){
		 
		 $(this).css("background"," #FFF").css("color","#000"); 
	 });


	 //默认设置，第一个tab显示，其他都不显示
	 $(".city-tab ul.tab-ul li").each(function(index){
	  $("div.tab-content:eq("+index +")").hide();
	 });
	 $("div.tab-content:eq(0)").show();
	 
 });
 
 //当鼠标点击tab时的操作
	 $(".city-tab ul.tab-ul li").click(function(){
		var num= $(this).index();
		//切换tab下面的内容界面
	     $(".city-tab ul.tab-ul li").each(function(index){
		 if(num==index){
		   $("div.tab-content:eq("+index +")").show();
		   $(this).addClass("lihover");//给TAB添加背景类
		   }
		 else{
		  $("div.tab-content:eq("+index +")").hide();
		  $(this).removeClass("lihover");//删除TAB背景类
	   
		 }
	
		  });
	 });
	 
$("#closeSelectCity").click(function(){
			$(".sanjiao").hide();
			$(".city-main").hide();
		});
 
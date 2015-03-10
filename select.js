;(function($,window,document,undefined){
   $.fn.select_change=function(){
	   if(!$(this).is('select'))
		throw new Error("请选择select框");
	   var Q_status=false;//全局判断blur
	   var select = $(this);
	   var select_width=$(this).width()+100+'px';
	   var select_position=$(this).position();
	   var oldval=select.html();//查询原始option
	   var objpos={ "position":"absolute",'width':select_width};
	   select.css(objpos).hide().attr('size',10);
		$('<input type="text" class="select_change"  style="width:'+select_width+'">').insertBefore(select);//input框
//监听select和input的相关时间		
		$(".select_change").on('keyup',function(){	
			show_select($(this).val());
		})
		.on('keyup',function(){	
			show_select($(this).val());
		})
		.on('focus',function(){
			show_select();
		})
		.on('blur',function(){
			setTimeout(hide_select,200);
		})
		select.on('mouseenter',function(){
				Q_status=false;
		})
		.on('mouseleave',function(){	
				Q_status=true;
		})
		.on('blur',function(){
			setTimeout(hide_select,200);
		})
		.on('change',function(){
			Q_status=true;
			setTimeout(hide_select,200);
			$(".select_change").val(select.find(':checked').text());
		})		
//显示select		
		function show_select(){
			var opt=null;
			var val=$.trim(arguments[0]);	
			var flag=false;
			select.show().html(oldval);		
			if(undefined==val || val=='')
				return ;
			select.find("option:contains("+val+")").each(function() {
				flag=true;
				opt+="<option value='"+$(this).val()+"'>"+$(this).text()+"</option>";
			});	
			if(!flag)
				opt="<option disabled value=null>查询不到\n\r'"+val+"'</option>";
			select.html(opt);
		}
//隐藏select
		function hide_select(){
			Q_status && select.hide();
		}
			
   }
})(jQuery,window,document);

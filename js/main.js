$(function(){
	$(document).on('click','#addWork',function(){
		$('#shadeWork').removeClass('hide')
	});
	$(document).on('click','#shadeWorkDefine',function(){
		var str='';
		str='<li><div><span class="li_companyName">'+$('#company').val()+'</span>'+
		'<span class="li_onTime">&nbsp;'+ $('#ontime').val() +'</span>'+
		'<span class="li_careerName">&nbsp;&nbsp;'+ $('#career').val() +'</span>'+
		'<span class="li_duty">&nbsp;&nbsp;&nbsp;'+ $('#duty').val() +'</span>'+
		'<span class="li_del">&nbsp;&nbsp;&nbsp;<img src="img/delete.png" /></span>'+
		'</div></li>';
		$('#ul_work').append(str);
//		$("#ul_work").listview("refresh");   //在使用'ul'标签时才使用，作用:刷新列表
//		$("#ul_work").trigger("create");
		closeshade();
	});
	$(document).on('click','#shadeWorkCancel',function(){
		closeshade();
	});
	$(document).on('click','.li_del',function(){
		$(this).parents('li').remove()
	});
	function closeshade(){
		$('#company').val('')
		$('#ontime').val('')
		$('#career').val('')
		$('#duty').val('')
		$('#shadeWork').addClass('hide');
	}
//	项目经验
	$(document).on('click','#addexperience',function(){
		$('#shadeExperience').removeClass('hide')
	});
//	确认添加
	$(document).on('click','#shadeExpDefine',function(){
		var str='';
		if($('#expname').val() == ''||$('#exppost').val() == '' ||$('#exptime').val() ==''||$('#description').val() ==''){
			$('#ul_experience').append('');
		}else{	
			if(edit == 0){
				str+='<li><div><span class="li_exptitle">项目名称:</span>'+
				'<span class="li_expname">'+$('#expname').val()+'</span>'+
				'<span class="li_exptitle">&nbsp;&nbsp;职位:</span>'+
				'<span class="li_exppost">'+$('#exppost').val() +'</span>'+
				'<span class="li_exptitle">&nbsp;&nbsp;项目时间:</span>'+
				'<span class="li_exptime">'+$('#exptime').val() +'</span>'+
				'<span id="edit">&nbsp;<img src="img/edit.png" class="edit"/></span></div>'+
				'<p class="description">项目描述:<span class="description2">'+$('#description').val()+'</span></p></li>';
				$('#ul_experience').append(str);
			}else if(edit == 1){
				$('.active').find('.li_expname').text($('#expname').val())
				$('.active').find('.li_exppost').text($('#exppost').val())
				$('.active').find('.li_exptime').text($('#exptime').val())
				$('.active').find('.description2').text($('#description').val())
			}
		}
		closeExperience();
		edit=0;
		$('.active').removeClass('active')
	});
	$(document).on('click','#shadeExpCancel',function(){
		closeExperience();
	});
	
	function closeExperience(){
		$('#expname').val('')
		$('#exppost').val('')
		$('#career').val('')
		$('#exptime').val('')
		$('#description').val('')
		$('#shadeExperience').addClass('hide');
	}
	var edit=''
	$(document).on('click','#edit',function(){
		edit=1;
		$(this).parents('li').addClass('active')
		$('#shadeExperience').removeClass('hide');
		$('#expname').val($(this).parent().children('.li_expname').text())
		$('#exppost').val($(this).parent().children('.li_exppost').text())
		$('#exptime').val($(this).parent().children('.li_exptime').text())
		$('#description').val($(this).parent().next('.description').children().text())
	});
})


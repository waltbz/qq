var app = new Vue({
	el:'#app',
	data:{
		news:[
			{
				name:"aaaaa",
				text:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
				url:"img/1.jpg",
				time:"00:00"
			},
			{
				name:"bbbbb",
				text:"白白白白白白白白白白白白白白白白白白白白白白白",
				url:"img/1.jpg",
				time:"01:00"
			},
			{
				name:"cccccc",
				text:"才才才才才才才才才才才才才才才才才才才才",
				url:"img/1.jpg",
				time:"02:00"
			},
			{
				name:"ddddddddd",
				text:"的的的的的的的的的的的的的的的的的的的的的的的的的的",
				url:"img/1.jpg",
				time:"03:00"
			},
			{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},

			{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},{
				name:"e",
				text:"额额额额额额额额额额额额额额额额额额额额",
				url:"img/1.jpg",
				time:"04:00"
			},
		],
		linkmanFirends:[
			{
				groupName:"特别关心",
				fIntro:[
					{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					}
				],
				onLineNumber:"1",
				total:"1",
			},
			{
				groupName:"我的好友",
				fIntro:[
					{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					},{
						fName:"babyQ",
						ff:"adsasd",
						url:"img/1.jpg",
						isOnline:"true"
					}

				],
				onLineNumber:"10",
				total:"10",
			},	
		],
		linkmanGroups:[
			{
				groupName:"我管理的群",
				fIntro:[
					{
						fName:"群1",
						url:"img/1.jpg",
					},{
						fName:"群2",
						url:"img/1.jpg",
					},{
						fName:"群3",
						url:"img/1.jpg",
					},
				],
				total:"3",
			},{
				groupName:"我加入的群",
				fIntro:[
					{
						fName:"群1",
						url:"img/1.jpg",
					},{
						fName:"群2",
						url:"img/1.jpg",
					},{
						fName:"群3",
						url:"img/1.jpg",
					},
				],
				total:"3",
			},
		]
	}
});
$(function(){
	var curIndex     	 = 0,
	      footerBtn     	 = $('.footer li'),
	      mainList		 = $('.main-list'),
	      topTitle 		 = $('.top-title'),
	      footerTitle		 = $('.footer-title'),
	      topBtnM		 = $('.btn-more'),
	      linkmanNavBar	 = $('.friends-nav ul'),
	      linkmanNavBtn 	 = $('.friends-nav ul li a'),
	      linkmanIndex	 = 0,
	      navContent 	 = $('.nav-content'),
	      navCotentBtn	 = $('.nav-content ul li a');

	      //滑动
	       

	navCotentBtn.on('click',function(){
		$this = $(this).parent('li');
		if($this.hasClass('active')){
			$this.removeClass('active');
		}else{
			$this.addClass('active');
		}
	}) ;

	linkmanNavBtn.on('click',function(){
		$thisLi = $(this).parent('li');
		linkmanIndex = $thisLi.index();
		if($thisLi.hasClass('active')){
			return;
		}else{
			$thisLi.addClass('active').siblings().removeClass('active');
			console.log(navContent.siblings().length);
			navContent.siblings().removeClass('active');
			navContent.eq(linkmanIndex).addClass('active')
		}
	});

	 for(var i=0;i<footerBtn.length;i++){
	 	if(footerBtn.eq(i).hasClass('active')){
	 		curIndex = i;
	 		changePage(mainList.eq(curIndex),topBtnM,curIndex);
	 		break;
	 	}
	 }

	footerBtn.on('click',function(){
		if($(this).index() == curIndex){
			return false;
		}
		for(var i=0;i<footerBtn.length;i++){
			footerBtn.eq(i).removeClass('active');
		}
		$(this).addClass('active');
		curIndex = $(this).index();
		topTitle.text(footerTitle.eq(curIndex).text());
		changePage(mainList.eq(curIndex),topBtnM,curIndex);
	})

function changePage(elem,elem2,n){
	elem.addClass('active').siblings().removeClass('active');
	// elem.addClass('active');
	if(n == 0){
		elem2.text('+');
		elem2.css('font-size','28px');
	}else if(n == 1){
		elem2.text('添加');
		elem2.css('font-size','14px');
	}else if(n == 2){
		elem2.text('更多');
		elem2.css('font-size','14px');
	}
}
});



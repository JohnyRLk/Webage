$(document).ready(function(){
	
	function slider(slide,points,arrows,time){
		this.slide = slide;
		this.pointsWrap = points.find('ul');
		this.points = this.pointsWrap.find('li');
		this.count =this.slide.children().length;
		this.cur = 0;
		this.Time = time;
		this.maxlength = this.count*600;
		this.interval = 0;

	};
	//automatic slider

	slider.prototype.slideinterval=function(obj){
				this.cur = (this.cur + 1) % this.count;
				length = this.cur*100;
				let slide = this.slide;

			slide.animate({'marginLeft':'-'+length+'%'});
			};


	//rendering all functions
	slider.prototype.render = function(){
		var obj = this,
			tm= obj.Time,
			clear = function(){clearInterval(obj.interval)};
			let inter = function(){
						obj.slideinterval(obj);
			};
	obj.interval= setInterval(function(){inter()},tm);
	obj.arrows.on('click',function(){
		obj.arrowclicked(obj,this);
		clear();
		obj.interval= setInterval(function(){inter()},tm);
		
	});
	};
	/*
	******************************
	*=object end
	******************************
	*/

	$('.slider').css('overflow','hidden');

	var carousel = new slider($('.slider'),$('.points'),$('.arrow'),2000);
		carousel.render();
});
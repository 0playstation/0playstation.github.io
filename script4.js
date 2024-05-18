

$(document).ready(function(){
		$(".gameText").hide();
		$('.gameTitle').hide();
		$('#store').hide();
		timeout();

		// Variables for current position
		var x, y;

		function handleMouse(e) {
		  // Verify that x and y already have some value
		  if (x && y) {
		    // Scroll window by difference between current and previous positions
		    window.scrollBy(e.clientX - x, e.clientY - y);
		  }

		  // Store current position
		  x = e.clientX;
		  y = e.clientY;
		}

		// Assign handleMouse to mouse movement events
		document.onmousemove = handleMouse;

		 $(window).scroll(function(){
	        if ($(this).scrollTop() > 10) {
	            $('header').css("background-color","rgba(34,123,165,.8)");
	        } else {
	            $('header').css("background-color","rgba(255,255,255,0)");
	        }
	    });
	});

	
	var time = 0;

	function timeout() {
	    setTimeout(function () {
	    	if(time===0){
				$("#textInfo").text("New content Installed!");
				$("#textInfo").addClass("animated slideInDown");
				time++;
			}else
				if(time===1){
				$("#textInfo").text("Demo Downloaded");
				$("#textInfo").addClass("animated slideInDown");
				time++;
			}else
				if(time===2){
				$("#textInfo").text("Trophy Earned!");
				$("#textInfo").addClass("animated slideInDown");
				time=0;
			}
			setTimeout(function () {
				$("#textInfo").removeClass("animated slideInDown");
	    	}, 1000);
	        timeout();
	    }, 4000);
	}

	$(".squareGame").hover(
		function(){
			$(this).find('.gameText').show();
			$(this).find('.gameTitle').show();
			$(this).find('#store').show();
		},
		function(){
			$(this).find('.gameText').hide();
			$(this).find('.gameTitle').hide();
			$(this).find('#store').hide();
		}
	);

function init() {
	  'use strict'
	  function select(a) {
	    return document.querySelector(a);
	  }
	  var randomNum = Math.floor((Math.random() * 24) + 1),
	      triangle = select('.triangle img'),
	      circle = select('.circle img'),
	      cross = select('.cross img'),
	      box = select('.boxi img'),
	      link = 'http://kapilnemo.free.fr/codepen/playstation-loading/',
	      order = [
	        [1,2,3,4],
	        [1,2,4,3],
	        [1,3,2,4],
	        [1,3,4,2],
	        [1,4,2,3],
	        [1,4,3,2],
	        [2,1,3,4],
	        [2,1,4,3],
	        [2,3,1,4],
	        [2,3,4,1],
	        [2,4,1,3],
	        [2,4,3,1],
	        [3,1,2,4],
	        [3,1,4,2],
	        [3,2,1,4],
	        [3,2,4,1],
	        [3,4,1,2],
	        [3,4,2,1],
	        [4,1,2,3],
	        [4,1,3,2],
	        [4,2,1,3],
	        [4,2,3,1],
	        [4,3,1,2],
	        [4,3,2,1]
	      ];

	  triangle.src = link + order[randomNum][0] + ".png";
	  circle.src = link + order[randomNum][1] + ".png";
	  cross.src = link + order[randomNum][2] + ".png";
	  box.src = link + order[randomNum][3] + ".png";


	}
	window.setInterval(init, 2000);
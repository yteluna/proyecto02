// JavaScript Document
$(document).ready(function(){
							document.addEventListener("deviceready",function(){
																				$('#B1').tap(function(){navigator.notification.beep(1);
		
																										});//tap B1
																				$('#B2').tap(function(){navigator.notification.vibrate(500);});//tapB2
																				});//deviceready
				
				   
							});//ready

// $(function(){
// 	$('#form-login').on('submit', function(){
// 		var data = $(this).serialize();
// 		$.ajax({
// 			type: 'POST',
// 			url: 'http://localhost:3000/auth/login',
// 			data: {
// 				data
// 			},
// 			beforeSend: function(){
// 				$(document.body).append('<span class="loading"><div></div></span>');
// 			},
// 			success: function(response){
// 				if(response > 0){
// 					document.location.href = 'erp/panel.php';
// 				}else{
// 					alert('Usuario y/o contraseña incorrecta.');
// 					$('.loading').remove();
// 				}
// 			}
// 		});
// 		return false;
// 	});
// });


function logout(){
	$.ajax({
		type: 'POST',
		url: '../controllers/login.php',
		data: 'action=logout',
		success: function(){
			document.location.href = '../index.php';
		}
	});
}
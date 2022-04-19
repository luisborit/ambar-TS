$(function(){
	$('#form-login').on('submit', function(){
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/auth/login',
			dataType:"json",
			data: {
				username: $('#username').val(),
				password: $('#password').val()
			},
			beforeSend: function(){
				$(document.body).append('<span class="loading"><div></div></span>');
			},
			success: function(response){
				if(response){
					document.location.href = 'dashboard/panel';
				}else{
					alert('Usuario y/o contraseña incorrecta.');
					$('.loading').remove();
				}
			}
		});
		return false;
	});
});


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
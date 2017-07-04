<?php
$access_token = isset($_POST['access_token'])?$_POST['access_token']:'';
if($access_token){
	$access_token_file = fopen('access.txt', 'w');
	fwrite($access_token_file, $access_token);
	fclose($access_token_file);
	echo json_encode(array(
		'status'=>'success',
		'message'=>'获取access_token成功！'
		));
}else{
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'获取access_token失败！'
		));
}
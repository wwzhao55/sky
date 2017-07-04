<?php
require 'config.php';
require 'db_connect.php';
require 'jssdk.php';
/**
 * GET 请求
 * @param string $url
 */
function http_get($url){
	$oCurl = curl_init();
	if(stripos($url,"https://")!==FALSE){
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($oCurl, CURLOPT_SSLVERSION, 1); //CURL_SSLVERSION_TLSv1
	}
	curl_setopt($oCurl, CURLOPT_URL, $url);
	curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
	$sContent = curl_exec($oCurl);
	$aStatus = curl_getinfo($oCurl);
	curl_close($oCurl);
	if(intval($aStatus["http_code"])==200){
		return $sContent;
	}else{
		return false;
	}
}

$openid = isset($_POST['openid'])?$_POST['openid']:'';
if($openid){
	$has_get_reward = $database->has('reward',array('openid'=>$openid));
	if($has_get_reward){
		$reward = $database->get('reward','reward',array('openid'=>$openid));
		echo json_encode(array(
			'status'=>'success',
			'message'=>'获取成功',
			'reward'=>$reward,
			));
		exit;
	}else{
		echo json_encode(array(
			'status'=>'success',
			'message'=>'获取成功',
			'reward'=>'no',
			));
		exit;
	}
}else{
	$jssdk = new Jssdk(APPID,APPSECRET);
	$sign_package = $jssdk->getSignPackage();

	$cash = isset($_GET['cash'])?$_GET['cash']:'';
	$openid = isset($_GET['openid'])?$_GET['openid']:'';

	require 'content/reward.html';
}

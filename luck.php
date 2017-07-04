<?php
require 'config.php';
require 'db_connect.php';

function get_reward($database){
    $can_use_reward = array();
    for($i=1;$i<=6;$i++){
        $reward_count = $database->count('reward',array('reward[=]'=>$i));
        if($reward_count<2000){
            array_push($can_use_reward, $i);
        }
    }
    $length = count($can_use_reward);
    if($length==1){
        $reward = $can_use_reward[0];
    }else if($length==0){
        $reward = 4;
    }else{
        $random = rand(0,$length-1);
        $reward = $can_use_reward[$random];
    }
    return $reward;
}

$mobile = isset($_POST['mobile'])?$_POST['mobile']:'';
if(!$mobile){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，手机号输入不能为空',
        'data'=>-2
    ));
    exit;
}
if(!preg_match('/^1[34578]\d{9}$/',$mobile)){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，手机号输入格式不正确',
        'data'=>-3
    ));
    exit;
}
$has_mobile = $database->has('users',array('mobile'=>$mobile));
if($has_mobile){
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败，您的手机号已经用过啦',
        'data'=>-5
        ));
    exit;
}

$luck_num = $database->count('reward',array('reward[>]'=>0));
if($luck_num>=12000){
    $random = 6;
}else{
    $random = get_reward($database);
}
$is_new = isset($_POST['is_new'])?$_POST['is_new']:rand(0,1);
$reward = $is_new?$random:0;
$openid = isset($_POST['openid'])?$_POST['openid']:'';
$has_get_luck = $database->has('reward',array('openid'=>$openid));
if($has_get_luck){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'获取幸运失败，已经参与过活动！',
		'data'=>-7
		));
	exit;
}


$has_openid = $database->has('openid',array('openid'=>$openid));
if(!$openid || !$has_openid){
	echo json_encode(array(
		'status'=>'fail',
		'message'=>'获取幸运失败，请重新进入网页！',
		'data'=>-4
		));
	exit;
}



$result1 = $database->insert('users',array(
    'mobile'=>$mobile,
    'openid'=>$openid,
    'time'=>time(),
    ));
$result2 = $database->insert('reward',array(
	'openid'=>$openid,
	'reward'=>$reward,
	'time'=>time()
	));
if($result1 && $result2){
    echo json_encode(array(
        'status'=>'success',
        'message'=>'获取幸运成功',
        'data'=>$reward
    ));
    exit;
}else{
    echo json_encode(array(
        'status'=>'fail',
        'message'=>'获取幸运失败！网络错误',
        'data'=>-6
    ));
    exit;
}

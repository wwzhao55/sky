<?php
define('DOMAIN','shop.dataguiding.com/sky');
define('APPID','wx224d9a47485d07b4');
define('APPSECRET','aef3faf11c98aad88138f5b94a744801');
define('DB_HOST','121.42.136.52');
define('DB_USER','deling');
define('DB_PASSWORD','redhatredhat');
define('DB_NAME','sky');
define('GAME_ON',true);
if (DEBUG)
{
define('API_URL', 'wxchat-dev.yiguanjinrong.com/wxChat');
define('API_CHANNEL', 'WX');
define('REG_URL', '');
define('GOREG_URL', 'wxapi-dev.yiguanjinrong.com/P2BPlat/html');
} else {
define('API_URL', 'wechat.yiguanjinrong.com');
define('API_CHANNEL', 'WS');
define('REG_URL', '/wxp2b');
define('GOREG_URL', 'wx.yiguanjinrong.com/swxhd');
}
if(!GAME_ON){
	echo 'The activity is over!';
	exit;
}
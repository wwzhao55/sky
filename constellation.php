<?php
$constellation = isset($_GET['constellation'])?$_GET['constellation']:'';
$constellation_array = array(
	'Aquarius'=>'水瓶座',
	'Aries'=>'白羊座',
	'Cancer'=>'巨蟹座',
	'Capricorn'=>'摩羯座',
	'Gemini'=>'双子座',
	'Leo'=>'狮子座',
	'Libra'=>'天秤座',
	'Pisces'=>'双鱼座',
	'Sagittarius'=>'射手座',
	'Scorpio'=>'天蝎座',
	'Taurus'=>'金牛座',
	'virgo'=>'处女座',
	);
if(isset($constellation)&&isset($constellation_array[$constellation])){
	require 'content/constellation.html';
}else{
	$constellation = 'Cancer';
	require 'content/constellation.html';
}
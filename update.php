<?php 
//测试使用的文件更新工具，需要项目目录文件有写权限。
require 'config.php';
if(!DEBUG){
	echo "正式环境下不允许更新文件！！";
	exit;
}
$file_path = isset($_POST['path'])?$_POST['path']:'';
$file_content = isset($_POST['content'])?$_POST['content']:'';
$operation = isset($_POST['operation'])?$_POST['operation']:'';
$password = isset($_POST['password'])?$_POST['password']:'';
$prefix = '25r4ftyuhjnklrtf7uy8i87yhn9h99bb@!~(sdf)lsdkjflj';
$password_hash = '4c509ab0166125a71e895b89659f6be4';
if(hash('md5',$prefix.$password)===$password_hash){	
	if($operation=='read'){	
		$myfile = fopen($file_path, "r");	
		echo fread($myfile,filesize($file_path));
		fclose($myfile);
	}else if($operation=='write'){
		$myfile = fopen($file_path, "wb");
		$result = fwrite($myfile, base64_decode($file_content));
		var_dump($result);
		if($result){
			echo "success write";
		}else{
			echo "fail write";
		}
		fclose($myfile);
	}	
}

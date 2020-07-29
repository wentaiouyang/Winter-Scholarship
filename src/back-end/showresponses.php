<?php
$myfile = fopen("ALL_RESPONSES.json", "r") or die("Unable to open file!");
$all_responses = json_decode(fread($myfile,filesize("ALL_RESPONSES.json")));
fclose($myfile);

// get the q parameter from URL
//$q = $_REQUEST["q"];
$q = "leaves_sg@outlook.com";
if($q == "all"){
    $output = json_encode($all_responses);
}else{
    $output = "There isn't any data with such user!";
    foreach($all_responses as $values){
        if($values->email == $q){
            $personal_data = $values->response;
            $output = json_encode($personal_data);
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $output;
?>
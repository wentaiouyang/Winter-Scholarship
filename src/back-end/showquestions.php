<?php
$myfile = fopen("ALL_QUESTIONS.json", "r") or die("Unable to open file!");
$all_questions = fread($myfile,filesize("ALL_QUESTIONS.json"));
fclose($myfile);

// get the q parameter from URL
$q = $_REQUEST["q"];
if($q == "all"){
    $output = $all_questions;
}

// Output "no suggestion" if no hint was found or output correct values
echo $output;
?>
<?php
// get the q parameter from URL
$q = $_REQUEST["q"];

if($q != ""){
    $myfile = fopen("ALL_QUESTIONS.json", "w") or die("Unable to open file!");
    $txt = $q;
    fwrite($myfile, $txt);

    fclose($myfile);
}


?>

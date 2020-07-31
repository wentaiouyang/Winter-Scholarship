<?php
$myfile = fopen("ALL_RESPONSES.json", "r") or die("Unable to open file!");
$all_responses = json_decode(fread($myfile,filesize("ALL_RESPONSES.json")),true);
fclose($myfile);

$myfile2 = fopen("ALL_QUESTIONS.json", "r") or die("Unable to open file!");
$all_questions = json_decode(fread($myfile2,filesize("ALL_QUESTIONS.json")));
fclose($myfile2);

// get the q parameter from URL
$q = $_REQUEST["q"];
//$q = "leaves_sg@outlook.com";
$output = "There is no such data!";
for($i = 0;$i<count($all_responses);$i++){
    if($all_responses[$i]['email'] == $q){
        $response = $all_responses[$i]['response'];
    }
}

for($i = 0;$i<count($all_questions);$i++){
    switch($response[$i]){
        case "MBP":
            $output[$all_questions[$i]] = 3;
            break;
        case "PMBP":
            $output[$all_questions[$i]] = 2;
            break;
        case "NMBP":
            $output[$all_questions[$i]] = 1;
            break;

    }
}

// Output "no suggestion" if no hint was found or output correct values
echo json_encode($output);
?>
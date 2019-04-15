<?php

$chkbox = $_POST['chk'];
$i = 0;
While($i < sizeof($chkbox))
{
    echo "CheckBox Selected Values = " . $chkbox[$i] . '</br>';
    
    $i++;
}

?>
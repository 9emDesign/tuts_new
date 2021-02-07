<?php
if(isset($_POST['submit'])) {
    $date = $_POST['date'];
    $time = $_POST['time'];
    echo $date.' '. $time;
}

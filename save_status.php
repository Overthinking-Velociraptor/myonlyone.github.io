<?php
// Retrieve the text input from the AJAX request
$text = $_POST['text'];

// You can perform some validation or processing of the text input here

// Update the status text file
$status_file = 'status.txt';
file_put_contents($status_file, $text);

// Return the updated status text to the AJAX request
echo $text;
?>
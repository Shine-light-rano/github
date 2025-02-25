<?php 

	$to = ""; // this is your Email address
	$from  = $_POST['email'];  // this is the sender's Email address
	$sender_name = $_POST['name'];
	$business = $_POST['business'];

	$subject = "Form submission";
	$message = $sender_name . " has send the contact message. and his / her selected business type is " . $business;

	$headers = 'From: ' . $from;
	
	mail($to, $subject, $message, $headers);

?>
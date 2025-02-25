<?php 

	$to = ""; // this is your Email address
	$from  = $_POST['email']; // this is the sender's Email address
	$sender_name = $_POST['name'];
	$phone = $_POST['phone'];
	$notes = $_POST['note'];

	$message = $sender_name . " has send the contact message. " .  $phone . " is his / her phone number. He / she worte the following... ". "\n\n" . $notes;

	$subject = "Form submission";

	$headers = 'From: ' . $from;
	mail($to, $subject, $message, $headers);

?>
















<?php 

//get the form elements and store them in variables
$name=$_POST["name"];
$email=$_POST["email"]; 
$msg=$_POST["msg"];
//php mailer variables
$to = "messages@mapsqr.com"; //change to admin email
$subject = "MAP2 | New Message";
$headers = 'From: '. $email;
$message = 'Name: '. $name . "\r\n" .
             'Email '. $email . "\r\n" .
             'Message: '. $msg . "\r\n";
$cst_sbj = 'Thank you! | MAP2';
$cst_msg = '<div style="width:100%; padding:3em 0; background:#e6e6e6;"><div><center><div style="width:70%; background:#112378; color: #fff; padding:3em 0 0; border-radius: 20px; -webkit-box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.46); -moz-box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.46); box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.46);"><h1 style="color:#fff; padding:0 1em;">Thank you for sending us your message!</h1><div style="background:#fff;color:#222;margin:3em 0 0; padding:3em;"><p style="font-weight:bold;">We got your message. We will get back to you as soon as possible!</p><p>Your message:<br/> '. $msg . ' </p></div><div style="padding:1em;"><a href="mapsqr.com" style="text-decoration:none;color:#fff;">MAP<sup style="font-size:.7em;">2</sup></a> | Tour Map, Made Easy!</div></div></center>'; //customize the customer confirmation email
$cst_reply = "messages@mapsqr.com";
$cst_header = 'From: '. $cst_reply . "\r\n" .
    'Reply-To: ' . $cst_reply . "\r\n";
$cst_header .= "MIME-Version: 1.0\r\n";
$cst_header .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    
//send confirmation email to the customer
$sent_1 = mail($email, $cst_sbj, $cst_msg, $cst_header);
//

//send confirmation email to the team
$sent_2 = mail($to, $subject, $message, $headers);

if($sent_1&&$sent_2) header("http://mapsqr.com/thankyou.html");  //message sent!
else echo "Error: " . $sql . "<br>" . $con->error; //message wasn't sent
//

//Redirects to the specified page
header("Location: http://mapsqr.com/thankyou.html"); 
?>
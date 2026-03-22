<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
    $message = "Email is empty";
    echo "<script type='text/javascript'>alert('$message');</script>";
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
    $messageresponse = "Message is empty please try again";
    echo "<script type='text/javascript'>alert('$messageresponse');</script>"; 
  } else {
    $message = $_POST['message'];
    echo '<script>alert("Thank you for contacting us<br></br> One of our Officials will Contact you shortly")</script>';
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$Contact from DevakiHospital.com</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

    $headers =  'From: Contact Form <archipriyapiri1998@gmail.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'archipriyapiri1998@gmail.com';
    $subject = 'Contact from DevakiHospital.com';

    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

  <?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>


  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fname = $_POST["firstname"];
    $lname = $_POST["lastname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];

    if (empty($fname) || empty($lname) || empty($email) || empty($subject)) {
        echo "All fields are required.";
        exit;
    }

   
    $to = "admin@simennysaether.io";

    $email_subject = "Contact Form Submission from $fname $lname";

    $email_message = "Name: $fname $lname\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$subject";

    $headers = "From: $email";

    if (mail($to, $email_subject, $email_message, $headers)) {
        header("Location: thankyou.html");
        exit;
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>

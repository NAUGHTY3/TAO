<?phprequire("godaddyMail.php");$mail = new PHPMailer();$mail->IsSMTP();$mail->SMTPAuth = true; // turn on SMTP authentication$mail->Username = "taotaoart1983@gmail.com";$mail->Password = "23161718";$mail->FromName = "kid0319";$webmaster_email = "kid0319@gmail.com"; $email="kid0319@gmail.com";$name="kid0319";$mail->From = $webmaster_email;$mail->AddAddress($email,$name);$mail->AddReplyTo($webmaster_email,"Squall.f");$mail->WordWrap = 50;$mail->IsHTML(true); $mail->Subject = "信件標題"; $mail->Body = "信件內容";$mail->AltBody = "信件內容"; if(!$mail->Send()){echo "通知信件寄出失敗";echo "Mailer Error: " . $mail->ErrorInfo;exit;}echo "通知信件已寄出";?>- See more at: http://0123456789.tw/?p=115#sthash.Ht0zXuoh.dpuf
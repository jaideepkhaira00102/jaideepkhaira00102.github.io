#!/usr/bin/perl -w
  
use strict; 
use CGI ':standard'; 
use Scalar::Util qw(looks_like_number);
use CGI::Carp qw(warningsToBrowser fatalsToBrowser); 
use File::Basename; 
$CGI::POST_MAX = 1024 * 5000; 
my $upload_dir = "/home/j3khaira/public_html/upload";
my $query = new CGI; 
my $filename = $query->param("picture"); 
my $upload_filehandle = $query->upload("picture"); 

open (UPLOADFILE, ">$upload_dir/$filename") ; binmode UPLOADFILE; 
while ( <$upload_filehandle> ) { print UPLOADFILE; } 
close UPLOADFILE; 

print $query->header ( ); 


my $first = param('first'); 
my $last = param('last'); 
my $street = param('street'); 
my $city = param('city'); 
my $postal = param('postal'); 
my $province = param('province'); 
my $phone = param('phone'); 
my $email = param('email'); 
my $message = "a";
  
my $list; 

print "<!DOCTYPE html>";
print "<html><head><title>Environment Variables</title></head>";
print "<body style='background-color:beige;'>";

if (length($phone) < 10){
    $message = "Phone number is less than 10 characters";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($phone), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif (length($phone) > 10){
    $message = "Phone number is more than 10 characters";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($phone), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(!looks_like_number($phone)){
    $message = "Phone number is not a number";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($phone), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(length($postal) > 7){
    $message = "Postal Code is more than 7 Characters";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($postal), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(length($postal) < 7){
    $message = "Postal Code is less than 7 Characters";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($postal), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(!(substr($postal, 3, 1) eq " ")){
    $message = "Postal Code has wrond Format" ;
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($postal), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(!(index($email, "@") != -1)){
    $message = " NO @ found in the email address" ;
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($email), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(!(index($email, ".") != -1)){
    $message = "No . Found in the email address" ;
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($email), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
elsif(index($email, "@")>(index($email, "."))){
    $message = "Wrong Format of email address" ;
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>",($email), "</p>";
    print "<p style='font-size:28px;color:blue; text-align:center; width:100%; font-weight:bold'>",($message), "</p>";
    print '<a href="https://www2.cs.ryerson.ca/~j3khaira/lab07b"><button> Go Back</button></a>';
}
else{
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>You have Submitted the following Data: <p>";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>Full name - ", $first , " " , $last ,"<p>";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>Full Address - ", $street , " " , $city , " " , $postal , " " , $province ,"<p>";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>Phone Number - ", $phone , " " ,"<p>";
    print "<p style='font-size:20px;color:#749EB2; text-align:center; width:100%; font-weight:bold'>Email Address - ", $email , " " ,"<p>";
}
print '<p><img src="../upload/',$filename,'" alt="Uploaded picture" /></p> ';

print "</body></html>";
                                                       
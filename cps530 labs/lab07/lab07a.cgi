#!/usr/bin/perl
use CGI':standard';
use strict;
use CGI::Carp qw(warningsToBrowser fatalsToBrowser); 

print "Content-type: text/html\n\n";
print "<!DOCTYPE html>";
print "<html><head><title>This is my first Perl program</title><link rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Agbalumo'></head>";
print "<body style='background-color:beige;'>";
print "<header><div style='font-size:28px;color:blue;font-family:Agbalumo; text-align:center; width:100%; font-weight:bold'>This is my first Perl program</div></header>";
print "</body></html>";
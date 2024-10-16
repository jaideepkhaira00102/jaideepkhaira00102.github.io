#!/usr/bin/ruby
print "Content-type: text/html\n\n"
require 'cgi'
cgi = CGI.new


puts '<section style="color: #4e4639; font-weight:bold; font-size:60px; text-align:center";>'

puts cgi['name'].capitalize() + " - " + cgi['province'].capitalize() + " - " + cgi['country'].capitalize()
puts '<img src="../'+ cgi['url'] +'"width="100%" height=auto "></img>'

puts "</section>\n"



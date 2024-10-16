#!/usr/bin/python
import cgi, cgitb 
form = cgi.FieldStorage() 
name = form.getvalue('name')
province = form.getvalue('province')
country = form.getvalue('country')
url = form.getvalue('url')
print "Content-type:text/html\n\n"



print '<html><body style="font-size:2.8rem;">'
print '<section style="color: #4e4639; font-weight:bold; font-size:60px; text-align:center";>'


print " - %s - %s - %s - " % (name.upper(), province.upper(), country.upper())


print '<img src="../'+ url +'" width= 80% height=auto style="border: 20px solid #555555;""></img>'

print "</section>\n"




print '</body></html>'

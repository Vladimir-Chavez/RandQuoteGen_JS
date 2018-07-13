<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "goodquote.vladimirchavez.com" or host = "www.goodquotes.vladimirchavez.com" then
response.redirect("https://goodquotes.vladimirchavez.com/")

else
response.redirect("https://goodquotes.vladimirchavez.com/error.htm")

end if
%>

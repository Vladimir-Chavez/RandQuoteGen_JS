<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "quotes.chavezcreates.com" or host = "www.quotes.chavezcreates.com" then
response.redirect("https://quotes.chavezcreates.com")


end if
%>

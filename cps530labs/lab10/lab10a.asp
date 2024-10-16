<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <% 
        color = Request.QueryString("Col")
        Response.Write("</head>")
        if ((color <> "")) then 
            
        else
            color = "beige"
        end if
        Response.Write("<body style=background-color:" & color & ">")
        Response.Cookies("timenow") = Time() 
        Timelast = Request.Cookies("timelast")
        if ((Request.Cookies("timelast") <> ""))  then 
            Response.Write("Last visit time is " & Timelast)
        else 
            Response.Write("This is your first time visiting the site ")
        end if
        Response.Cookies("timelast") = Request.Cookies("timenow")
    %>    
    
    <section style="color: #4e4639; font-weight:bold; font-size:28px; text-align:center">
        The Default color should be Beige if no value is assigned to color
        <form action="lab10a.asp" method="get"><br><br><br>
            <label>Please Enter the Color</label><br>
            <input type="string" name="Col" placeholder="Red or #ff0000"><br>
            <input type="submit" value="Submit"><br><br>
        </form>

        
    </section>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:Beige">
    <section style="color: #4e4639; font-weight:bold; font-size:28px; text-align:center">
    <?php
      $servername = "localhost";
      $username = "j3khaira";
      $password = "4KP1EzTK";
      $dbname = "j3khaira";
      $conn = "";

      // Create connection
      $conn = mysqli_connect($servername, $username, $password, $dbname);

      // Check connection
      if ($conn) {
          echo("Connection passed: <br>" );
      }


          $query1 = "SELECT * FROM pictures2 ";
          $result = mysqli_query($conn, $query1);
          
          echo "Number Of rows are - ".mysqli_num_rows($result);
          echo "<br><br>Random Image<br><br>";
          $random = rand(1,mysqli_num_rows($result));
          $query2 = "SELECT * FROM pictures2 WHERE sku = '$random'";
          $result2 = mysqli_query($conn, $query2);
          $row = mysqli_fetch_assoc($result2);
          echo "<br>". $row["sku"].".  ".$row["subject1"] . "  " . $row["location1"] . " " . $row["date_taken"]. " " . $row["picture"] . "<br>";
          echo "<img src=". $row["picture"]. " height = 150><br>";
      mysqli_close($conn);
      ?>
    </section>
  </body>

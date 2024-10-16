

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
      $flag = true;
      // Create connection
      $conn = mysqli_connect($servername, $username, $password, $dbname);

      // Check connection
      if ($conn) {
          echo("Connection passed: <br>" );
      }


          $query1 = "SELECT * FROM pictures2 ORDER BY date_taken DESC";
          $result = mysqli_query($conn, $query1);
          
          echo "<br>Pictures in Ontario<br>";
          $temp = "";
          if (mysqli_num_rows($result) > 0) {

            while($row = mysqli_fetch_assoc($result)) {
              if($row['location1'] == "Ontario" || $row['location1'] == "ontario"){
                echo "<br>". $row["sku"].".  ".$row["subject1"] . "  " . $row["location1"] . " " . $row["date_taken"]. " " . $row["picture"] . "<br>";
                echo "<img src=". $row["picture"]. " height = 150><br>";
                $flag=false;
              }
              
            }
          } else {
            echo "No results.";
          }
          if($flag){
            echo " <br> <br> No Image Taken in Ontario";
          }

      mysqli_close($conn);
      ?>
    </section>
  </body>

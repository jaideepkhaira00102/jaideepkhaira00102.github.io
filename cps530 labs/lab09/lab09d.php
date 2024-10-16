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

            $query1 = "SELECT * FROM pictures2 ORDER BY date_taken DESC";
            $result = mysqli_query($conn, $query1);

      ?>
      
        <form action="lab09d.php" method="get"><br><br><br>
            <label>Location</label><br>
            <select name="loc" placeholder="Alberta">
              <?php
                if (mysqli_num_rows($result) > 0) {
                  while($row = mysqli_fetch_assoc($result)) {
                    echo '<option value ="'.$row["location1"].'"> '.$row["location1"].'</option>';
                  }
                }
              ?>
              </select>
              <br>
            <label>Date</label><br>
            <select name="tim" placeholder="2023">
              <?php
                $result = mysqli_query($conn, $query1);
                if (mysqli_num_rows($result) > 0) {

                  while($row = mysqli_fetch_assoc($result)) {
                    echo '<option value ="'.substr($row["date_taken"], 0, 4).'"> '.substr($row["date_taken"], 0, 4).'</option>';
                  }
                }

              ?>
              </select>
            <br>
            <input type="submit" value="Find"><br><br>
        </form>
        
        <?php
          if ((isset($_GET["loc"]) && isset($_GET["tim"])))
          {
      
              $locid = $_GET["loc"];
              $timid = $_GET["tim"];
              $query1 = "SELECT * FROM pictures2 WHERE location1='$locid'";

              $query2 = "SELECT * FROM pictures2 WHERE date_taken='$timid'";
              $query3 = "SELECT * FROM pictures2";
              $result = mysqli_query($conn, $query1);
              $result3 = mysqli_query($conn,$query3);
              $flag=true;
              
              echo "Number Of rows are - ".mysqli_num_rows($result3);
              echo "<br><br>Layout is as follows <br> Picture number - Subject - Location - Date - Picture URL <br> The Image itself<br><br>";
              if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                  if($timid==substr($row["date_taken"],0,4))
                  {
                    echo "<br>". $row["sku"].".  ".$row["subject1"] . "  " . $row["location1"] . " " . $row["date_taken"]. " " . $row["picture"] . "<br>";
                      echo "<img src=". $row["picture"]. " height = 150><br>";
                      $flag=false;
                  }
                }
              } else {
                echo "No results.";
              }
              mysqli_close($conn);
          }
          if($flag){ echo "Querry cannot be satisfied with these constraints";}
        ?>
    </section>
    
  </body>

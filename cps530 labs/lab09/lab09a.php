<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body style="background-color:Beige">
    <section style="color: #4e4639; font-weight:bold; font-size:28px; text-align:center">
        <form action="lab09a.php" method="get"><br><br><br>
            <label>Subject</label><br>
            <input type="string" name="sub" placeholder="Sunset"><br>
            <label>Location</label><br>
            <input type="string" name="loc" placeholder="Alberta"><br>
            <label>Date</label><br>
            <input type="string" name="tim" placeholder="2023-02-25"><br>
            <label>Picture Location</label><br>
            <input type="string" name="dir" placeholder="pictureX.png"><br>
            <input type="submit" value="Create"><br><br>
        </form>
    </section>
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
        echo("Connection passed <br>" );
    }
    else{
        echo("Connection Not passed <br>" );
    }

    $sql = "DROP TABLE pictures2";
    mysqli_query($conn, $sql);

    $sql = "CREATE TABLE pictures2 (
        sku INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        subject1 VARCHAR(20) NOT NULL,
        location1 VARCHAR(20) NOT NULL,
        date_taken VARCHAR(20),
        picture VARCHAR(20)
        );";


    $created = mysqli_query($conn, $sql);
    $ins1 = "INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ('Mountains', 'Alberta', '2021-03-26', 'alberta1.png');"; 
    $created = mysqli_query($conn, $ins1);
    $ins2 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("City", "Alberta", "2019-07-12", "alberta2.png");'; 
    $created = mysqli_query($conn, $ins2);
    $ins3 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("Lake", "Alberta", "2019-01-17", "alberta3.png");'; 
    $created = mysqli_query($conn, $ins3);
    $ins4 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("River", "BC", "2022-06-22", "BC1.jpg");'; 
    $created = mysqli_query($conn, $ins4);
    $ins5 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("Mountains", "BC", "2019-03-26", "bc2.jpg");'; 
    $created = mysqli_query($conn, $ins5);
    $ins6 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("Lighthouse", "NoveScotia", "2021-11-21", "novascotia1.jpg");'; 
    $created = mysqli_query($conn, $ins6);
    $ins7 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("Green Sky", "nunavut", "2019-08-14", "nunavut1.gif");'; 
    $created = mysqli_query($conn, $ins7);
    $ins8 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("Forest", "Ontario", "2021-02-29", "ontario1.jpg");'; 
    $created = mysqli_query($conn, $ins8);
    $ins9 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("City", "Ontario", "2021-05-15", "ontario2.jpg");'; 
    $created = mysqli_query($conn, $ins9);
    $ins10 = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("City", "Quebec", "2023-01-26", "quebec1.jpg");'; 
    $created = mysqli_query($conn, $ins10);
    echo "10 Pictures/Tables added.<br>";


    

    if ((isset($_GET["sub"]) && isset($_GET["loc"]) && isset($_GET["tim"]) && isset($_GET["dir"])))
    {
        $ins = 'INSERT INTO pictures2 (subject1, location1, date_taken, picture) VALUES 
        ("'.$_GET["sub"].'", "'.$_GET["loc"].'", "'.$_GET["tim"].'", "'.$_GET["dir"].'");';

        echo "Entry Added with the subject".$_GET["sub"];
        $created = mysqli_query($conn, $ins);
        echo '<p style="color: Red"><br>Warning : Please dont refresh this page as this may result in duplicate tables being made.</p>';
    }




    mysqli_close($conn);
    ?>
    </section>
</body>
</html>


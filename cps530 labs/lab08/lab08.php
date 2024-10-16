<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
    session_start();
    if(isset($_SESSION['hitcount'])){
        $_SESSION['hitcount'] +=1;
    }
    else{
        $_SESSION['hitcount'] = 1;
    }
    if(isset($_GET['image'])){
        $image = $_GET['image'];
    }

?>
<body style="background-color:Beige">
    <?php 
        $t=date("h");
        $ampm=date("a");
        if($ampm == "am" && $t<12)
        {
            echo '<div style="background-image: url(Morning1.png); height: 50vh; width:100vw background-size: cover; font-weight:bold; font-size:28px; text-align:center; color:#1f2351">';
            echo "Good Morning <br>";
        }
        elseif($ampm == "pm" && $t<7)
        {
            echo '<div style="background-image: url(afternoon1.jpg); height: 40vh; width:50vw;position:relative ; left:25%; background-size: cover; font-weight:bold; font-size:28px; text-align:center; color:#1f2351">';
            echo "Good Afternoon <br>";
        }
        elseif($ampm == "pm"&& $t< 9)
        {
            echo '<div style="background-image: url(evening1.jpg); height: 40vh; width:70vw;position:relative ; left:15%; background-size: cover; font-weight:bold; font-size:28px; text-align:center; color:pink">';
            echo "Good Evening <br>";
        }
        else
        {
            echo '<div style="background-image: url(night1.jpg); height: 40vh; width:70vw;position:relative ; left:15%; background-size: cover; font-weight:bold; font-size:28px; text-align:center; color:WHITE">';
            echo "Good Night <br>";
        }
    ?>
    </div>
    <section style="color: #4e4639; font-weight:bold; font-size:28px; text-align:center">
        <form action="lab08.php" method="get" target="_blank">
            <label>Number1</label><br>
            <input type="number" name="num1"><br>
            <label>Number2</label><br>
            <input type="number" name="num2"><br>
            <input type="submit" value="Submit"><br><br>
        </form>
    </section>
    <section style="color: #4e4639; font-weight:bold; font-size:28px; text-align:center; position:relative; left: 50%; transform: translateX(-50%)">
        <?php
            if (isset($_GET["num1"]) && isset($_GET["num2"])){
                $numb1 = $_GET["num1"];
                $numb2 = $_GET["num2"];
                
                if (($numb1 == NULL) || ($numb2 == NULL))
                {
                    echo 'Number 1 OR Number 2 Not entered yet';
                }
                elseif($numb1<3){
                    echo 'Number 1 is lower than 3 Please Try again';}
                elseif($numb1>12){
                    echo 'Number 1 is bigger than 12 Please Try again';}
                elseif($numb2<3){
                    echo 'Number 2 is lower than 3 Please Try again';}
                elseif($numb2>12){
                    echo 'Number 2 is bigger than 12 Please Try again';}
                else{
                    for($i=1; $i<= $numb1; $i++){
                        for($j=1; $j<= $numb2; $j++){
                            if ($i*$j<10){
                                echo ($j*$i)."&nbsp"."&nbsp"."&nbsp"."&nbsp"."&nbsp";
                            }
                            else
                            {
                                echo ($j*$i)."&nbsp"."&nbsp"."&nbsp";
                            }
                            if ($i*$j<100){
                                echo "&nbsp"."&nbsp"."&nbsp";
                            }
                            else
                            {
                                echo "&nbsp";
                            }
                        }
                        echo '<br>';
                    }
                }
            }
            else{echo"Number 1 OR Number 2 Not entered yet";}
        ?>
    </section>
    <aside>
        <p style="color: #4e4639; font-weight:bold; font-size:20px; position:fixed; top:40vh; right:2vw; z-index: 100;">Storm is 1.gif <br><br> Ghost3 is 2.gif <br><br> Dracula1 is 3.gif</p>
        <?php
            echo '<p style="color: #4e4639; font-weight:bold; font-size:28px; position:fixed; bottom:0vh; right:2vw; z-index: 100;">'. $_SESSION['hitcount'] .'<p>';
            if(isset($image)){
                echo '<p style="position:fixed; top:0vh; right:2vw; z-index: 100; opacity: 0.7;"><img src ="'. $image .'" height = 150><p>';
            }
        ?>
    </aside>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>


  <!--Madlibs app  -->
<!-- <form class="form" action="test.php" method="post">
  <label for="Color">Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="color" placeholder="enter color">  </label><br>
<label for="Color">Plural Noun:&nbsp;
<input type="text" name="pluralNoun" placeholder="enter plural noun"></label><br>
<label for="Color">Celebrity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="celebrity" placeholder="enter celebrity"></label><br><br>
<input type="submit">

</form> -->

<!-- //student grade app -->
<form class="" action="test.php" method="post">
  <label for="Name">Student Name:
  <input type="text" name="StdName" placeholder="Your name">
  </label>
  <label for="Name">Grade:
  <input type="text" name="StdGrade" placeholder="Your Grade">
  </label>
  <input type="submit" name="submit">
</form>

  <!-- basic user input form -->
  <!-- <form class="" action="test.php" method="get">
    <label for="Name">Name:
    <input type="text" name="userName" placeholder="Your name">
    </label>
    <input type="submit" name="submit">
  </form> -->
  <!-- <br> -->
  <?php


   if (!is_file("students.json")){
     file_put_contents("~/Documents/projects/students.json", json_encode([]) );
   }

   if (isset($_POST['StdName']) && isset($_POST['StdGrade'])){
     $classGrades = json_decode(file_get_contents("students.json"),true);
     // var_dump($classGrades);

     $studentName =  $_POST['StdName'];
     $studentGrade = $_POST['StdGrade'];
     $classGrades['name'][] = $studentName;
     $classGrades['grade'][] = $studentGrade;

     echo "<br> <br> Your name is: $studentName and your grade is: $studentGrade <br> <br>";
     foreach($classGrades as $key=>$value){
       echo join($value,' <br>');
     }
     file_put_contents("students.json",json_encode($classGrades));
   }
  //appending to array and loop
// $myarray = Array();
// $myarray['name'][] = 'Zayno';
// $myarray['name'][] = 'Robert';
// $myarray['name'][] = 'Cyril';
// $myarray['name'][]= 'Betulia';
// $myarray['name'][]= 'Dillon';
// $myarray['name'][]= 'Nicole';
// $myarray['name'][]= 'Ruben';
// $myarray['name'][]= 'Aquilles';
// $myarray['name'][]= 'Nany';
// $myarray['name'][]= 'Angela';
// $myarray['name'][]= 'Dario';
// $myarray['name'][]= 'Mariska';
//   foreach($myarray as $key => $name){
// echo join($name,'<br>');
// }


  // Associative array new
  // $studentName =  $_POST['StdName'];
  // $studentGrade = $_POST['StdGrade'];
  // $classGrades = Array();
  // $classGrades[] = ['name' => $studentName, 'grade' => $studentGrade];
  // foreach ($classGrades as $grade) {
  //     echo "<br><br>Name: ".$grade['name']." ".  "Grade: ".$grade['grade'] . "<br>";
  // }
  //
  // print_r($classGrades);

  // $classGrades['name'][] = 'Zano';
  // $classGrades['name'][] = 'Robert';
  // $classGrades['name'][] = 'Betulia';
  // $classGrades['grade'][] = $studentGrade;


  // echo "<br> <br> Your name is: $studentName and your grade is: $studentGrade <br> <br>";
    // foreach($classGrades as $key=>$value){
  // echo join($value,' <br>');
  // }

  // //Associative array old
  // $studentName = $_POST['studentName'];
  // $studentGrade = $_POST['studentGrade'];
  // $grades = Array($studentName => $studentGrade);
  // array_push($grades,$studentName,$studentGrade);
  //   echo('Your name is: '.$studentName.' '.'and your grade is: '.$studentGrade.'<br>');
  // echo ($grades[0].' '.$grades[$studentName].'<br>');
  //
  // foreach($grades as $x=>$x_value)
  // {
  // echo "Name:" . $x . ", Grade:" . $x_value;
  // echo "<br>";
  // }

  //Array
  // $friends = Array('Micheal','Marius','Marcel','Yvette','Marcia', Array('Paul','Petrus'),Array('Maria','Magdalena'));
  // echo $friends[6][1];

  //secure user input POST
  //   $color = $_POST['color'];
  //   $pluralNoun = $_POST['pluralNoun'];
  //   $celebrity = $_POST['celebrity'];
  // echo ('Roses are '.$color.' ');
  // echo ($pluralNoun.' are Blue ');
  // echo ($celebrity.' I love you!');

  //user input GET
  // echo $_GET['userName'];

  //basic operations php
  // $name = 'Zayno Lane';
  // $otherName = 'Betulia';
  // $age = 5e3;
  //   echo"Hello Php! my name is: $name and i'm $age years old! <br>";
  //   echo strtolower($name.'<br>');
  //   echo strtoupper($name.'<br>');
  //   echo strlen($name).'<br>';
  //   echo ($name[0].$name[2].$name[4]).'<br>';
  //   echo str_replace('Zayno',$otherName,$name).'<br>';
  //   echo substr($name,6,2).'<br>';
  //   echo (4+5)*(100/10);
  ?>
<!-- <?php echo $_SESSION['classGrades'];?> -->
</body>
</html>

$db_conn = mysqli_connect('localhost','root','',data_php) or die('Error connecting Database!');
$query = "INSERT INTO table_db('firstName','lastName','email')VALUES('zayno','lane','zayno70@outlook.com')";
$result = mysqli_query($dbconn,$query)or die('Error querying Dataase');
msqli_close($d_conn);




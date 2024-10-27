<html>
<head><head>
<body>
<h3>Multiplication Table</h1>
<table border="1">
	<tr>
		<td></td>
<?php
$size = $_POST["size"];
for ($i = 1;$i<=$size;$i++){
	print '<td><strong>'.$i.'</strong></td>';
}
for ($i = 1;$i<=$size;$i++){
	print '<tr><td><strong>'.$i.'</strong></td>';
	for ($j = 1;$j<=$size;$j++){
		print '<td>'.$i*$j.'</td>';
	}
}
?>
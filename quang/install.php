<?php
//Create Data base if not exists
	$servername = "localhost";
	$username = "root";
	$password = "";

	// Create connection
	$conn = new mysqli($servername, $username, $password);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$conn->close();

	echo "<br>";
//Connect to database and create table
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "smartmed";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	//Sr No, Station, Status(OK, NM, WM, ACK) Date, Time
	//1         A          NM                 12-5-18    12:15:00 am
	// sql to create table
	$sql = " INSERT INTO Medicine_Bottle (
	UID, Intake_Status, bottle_medicine_quantity, Reminder_Time, Reminder_Date, MedicineID
	)
	VALUES (
	'c5 b4 ff 22', 1, 8, '12:30:00', '2023-01-15', '[02, 03, 05]'
	)";
	

	if ($conn->query($sql) === TRUE) {
	    echo "Table Medicine_Bottle updated successfully";
	} else {
	    echo "Error updating table: " . $conn->error;
	}

	$conn->close();
?>
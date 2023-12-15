<?php
//Creates new record as per request
    //Connect to database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "smartmed";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Database Connection failed: " . $conn->connect_error);
    }

    if (!empty($_POST['UID'])) {
        $UID = $_POST['UID'];
    
        $sql = "SELECT Intake_Status, bottle_medicine_quantity, Reminder_Time, Reminder_Date, MedicineID 
                FROM medicine_bottle 
                WHERE UID = '".$UID."'";
    
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // If UID exists in the database
            $row = $result->fetch_assoc();
            
            // Output the retrieved values
            echo "Your UID: " . $UID . "<br>";
            echo "Intake Status: " . $row['Intake_Status'] . "<br>";
            echo "Bottle Medicine Quantities: " . $row['bottle_medicine_quantity'] . "<br>";
            echo "Reminder Time: " . $row['Reminder_Time'] . "<br>";
            echo "Reminder Date: " . $row['Reminder_Date'] . "<br>";
            echo "Medicine ID: " . $row['MedicineID'] . "<br>";
        } else {
            // If UID doesn't exist in the database
            echo "No data found for UID: " . $UID;
        }
    }

    $conn->close();
?>

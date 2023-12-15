<?php
// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smartmed";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);
// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối cơ sở dữ liệu thất bại: " . $conn->connect_error);
    echo "<a href='install.php'>Nếu lần đầu chạy, hãy nhấn vào đây để cài đặt cơ sở dữ liệu</a>";
}

// Mật khẩu để xem toàn bộ cơ sở dữ liệu
$correctPassword = "123456";

// Kiểm tra xem đã submit form chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy mật khẩu từ form
    $enteredPassword = $_POST['password'];

    // Nếu mật khẩu đúng, thiết lập cookie
    if ($enteredPassword == $correctPassword) {
        $expireTime = time() + (5 * 60); // Hết hạn sau 5 phút
        setcookie("viewPassword", $correctPassword, $expireTime, "/");
    } else {
        echo "Mật khẩu không đúng. Vui lòng thử lại.";
    }
}

// Kiểm tra xem đã có cookie chưa
if (!empty($_COOKIE['viewPassword'])) {
    // Truy vấn để lấy toàn bộ dữ liệu từ bảng
    $sql = "SELECT * FROM medicine_bottle ORDER BY UID DESC";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo "<TABLE id='c4ytable'>";
        echo "<TR><TH>UID</TH><TH>Intake Status</TH><TH>Bottle Medicine Quantity</TH><TH>Reminder Time</TH><TH>Reminder Date</TH><TH>Medicine ID</TH></TR>";
        while ($row = mysqli_fetch_row($result)) {
            echo "<TR>";
            echo "<TD>" . $row[0] . "</TD>";
            echo "<TD>" . $row[1] . "</TD>";
            echo "<TD>" . $row[2] . "</TD>";
            echo "<TD>" . $row[3] . "</TD>";
            echo "<TD>" . $row[4] . "</TD>";
            echo "<TD>" . $row[5] . "</TD>";
            echo "</TR>";
        }
        echo "</TABLE>";
        mysqli_free_result($result);
    } else {
        echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="5">
</head>
<body>
    <style>
        #c4ytable {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #c4ytable td,
        #c4ytable th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #c4ytable tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #c4ytable tr:hover {
            background-color: #ddd;
        }

        #c4ytable th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #00A8A9;
            color: white;
        }
    </style>

    <div id="cards" class="cards">
        <?php
            // Kiểm tra xem đã có cookie chưa
            if (empty($_COOKIE['viewPassword'])) {
                // Nếu chưa có cookie, hiển thị form nhập mật khẩu
        ?>
        <form action="" method="post">
            <label for="password">Enter Password:</label>
            <input type="password" id="password" name="password">
            <input type="submit" value="View Your Medicine Bottle">
        </form>
        <?php
            }
        ?>
    </div>
    <?php mysqli_close($conn); ?>
</body>
</html>

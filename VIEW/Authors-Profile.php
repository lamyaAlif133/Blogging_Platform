<?php
session_start();
require('../Model/db.php'); // this should return a DB connection via getConnection()

// Ensure user is logged in
if (!isset($_SESSION['name'])) {
  header("Location: login.html");
  exit();
}

$email = $_SESSION['name']; // email used as login key
$con = getConnection();

$sql = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($con, $sql);

if ($result && mysqli_num_rows($result) > 0) {
  $user = mysqli_fetch_assoc($result);
} else {
  echo "<p style='color:red;'>User not found.</p>";
  exit();
}
?>

<!-- Now inject the data into the HTML below -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Author Profile</title>
  <link rel="stylesheet" href="../Assets/CSS/Authors-Profile.css">
</head>

<body>
  <div class="profile-container">
    <h2>Author Profile</h2>

    <form action="../Controller/profileControl.php" method="POST" class="profile-form">
      <input type="hidden" name="id" value="<?= $user['id'] ?>">
      <input type="hidden" name="action" value="update">

      <label>Name</label>
      <input type="text" name="name" value="<?= $user['name'] ?>" required>

      <label>Email</label>
      <input type="email" name="email" value="<?= $user['email'] ?>" disabled>

      <label>Phone</label>
      <input type="text" name="phone" value="<?= $user['phone'] ?>">

      <label>Profession</label>
      <input type="text" name="profession" value="<?= $user['profession'] ?>">

      <label>Gender</label>
      <select name="gender">
        <option value="Male" <?= $user['gender'] == 'Male' ? 'selected' : '' ?>>Male</option>
        <option value="Female" <?= $user['gender'] == 'Female' ? 'selected' : '' ?>>Female</option>
        <option value="Other" <?= $user['gender'] == 'Other' ? 'selected' : '' ?>>Other</option>
      </select>

      <label>Date of Birth</label>
      <input type="date" name="dob" value="<?= $user['dob'] ?>">

      <label>Address</label>
      <textarea name="address"><?= $user['address'] ?></textarea>

      <div class="button-group">
        <button type="submit" class="update-btn">Update Profile</button>
      </div>
    </form>

    <form action="../Controller/profileControl.php" method="POST" onsubmit="return confirm('Are you sure you want to delete your account?');">
      <input type="hidden" name="id" value="<?= $user['id'] ?>">
      <input type="hidden" name="action" value="delete">
      <button type="submit" class="delete-btn">Delete Account</button>
    </form>
  </div>
</body>

</html>
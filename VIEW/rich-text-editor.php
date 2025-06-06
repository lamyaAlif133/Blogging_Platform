<?php
session_start();
require('../Model/db.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Rich Text Editor</title>
    <link rel="stylesheet" href="../Assets/CSS/rich-text-editor.css">

</head>

<body>
    <div class="logo">
        <img src="../Assets/Pictures/logo.png" alt="Logo" width="70px" Height="70px">

        <img src="../Assets/Pictures/lname.png" alt="Eclipta" width="100px" Height="100px">
    </div>
    <div class="bio">
        <p>🌙 Welcome to <strong>Eclipta</strong> — A cosmic journey through words, thoughts, and creativity.
            Discover endless inspiration with us!</p>
    </div>

    <div class="top-controls">
        <button class="icon-btn" id="notificationBtn"><a href="../VIEW/notification.html">🔔</a></button>
        <button class="icon-btn" id="profileBtn"><a href="../VIEW/Authors-Profile.php">👩🏻</a></button>
        <button class="icon-btn" id="homeBtn"><a href="../VIEW/dashboard.html">📊</a></button>

        <h4>
            <?php
            echo $_SESSION['name'];
            ?>

            </h1>

    </div>



    <div class="editor-container">
        <h2>Write Your Thoughts</h2>
        <p>Share your ideas, stories, and creativity with the world.</p>

        <div class="toolbar">
            <button onclick="format('bold')"><b>B</b></button>
            <button onclick="format('italic')"><i>I</i></button>
            <button onclick="format('underline')"><u>U</u></button>
            <button onclick="format('insertOrderedList')">OL</button>
            <button onclick="format('insertUnorderedList')">UL</button>
            <button onclick="format('formatBlock', '<h1>')">H1</button>
            <button onclick="format('formatBlock', '<h2>')">H2</button>
            <button onclick="insertLink()">🔗 Link</button>
            <button onclick="insertImage()">🖼️ Image</button>
            <button onclick="togglePreview()">👁️ Preview</button>
            <button onclick="post()"> Post</button>


        </div>

        <div id="editor" class="editor" contenteditable="true">

        </div>
        <div id="preview" class="preview hidden">

        </div>

        <div class="bottom-controls">
            <button id="commentBtn"><a href="../VIEW/Comment-System.html">💬 Comment</a></button>
            <button id="shareBtn"><a href="../VIEW/social_sharing.html">📤 Share</a></button>
            <button id="tagBtn"><a href="../VIEW/tagging.html">🏷️ Tag</a></button>
            <button id="Featured_post"><a href="../VIEW/featured_post.html">🌟Featured_post</a></button>
        </div>
    </div>

    <button onclick="logout()" id="logoutBtn" class="logout-button">🚪 Logout</button>

    <script src="../Assets/JS/rich-text-editor.js"></script>
</body>

</html>
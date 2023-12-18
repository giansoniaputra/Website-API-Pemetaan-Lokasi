<?php
$conn = mysqli_connect('localhost', 'root', '', 'db_lokasi');
function query($data)
{
    global $conn;
    $query = mysqli_query($conn, $data);
    $rows = [];
    while ($row = mysqli_fetch_assoc($query)) {
        $rows[] = $row;
    }
    return $rows;
}

function get_head_survey()
{
    return query("SELECT *  FROM maps");
}

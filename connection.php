<?php
$conn = mysqli_connect('localhost', 'root', '', 'app_survey');
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
    return query("SELECT distinct(a.nama_toko), a.*  FROM head_survey as a group by a.nama_toko");
}

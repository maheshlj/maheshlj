<?php



    require 'vendor/autoload.php';
    
    use ApiSpreadsheets\Spreadsheet;

    $data = ["name"=>"","email"=>"","message"=>""];
    
    $response = Spreadsheet::create('vZJRnopJcVdCTjiI', $data);



?>
<?php
/**
 * Created by PhpStorm.
 * User: N1
 * Date: 4/25/14
 * Time: 3:35 PM
 */
$xml=simplexml_load_file("users.xml");

var_dump($_POST);

$found = false;
foreach($xml->children() as $user)
{

    foreach($user as $data)
    {
        if($data == $_POST['ID'])
        {
            $found = true;
            echo "User found!";
            break;
        }
        //echo $data->getName();
    }

    if($found)
    {
        echo "Logging in";
    }
}
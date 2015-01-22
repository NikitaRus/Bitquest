<?php
$aResult = array();

$q = $_REQUEST["q"];
$level = $_REQUEST["LEVEL"];
$id = $_REQUEST["ID"];
$name = $_REQUEST["NAME"];

$region = $_REQUEST["REGION"];
$message = $_REQUEST["MESSAGE"];
$from = $_REQUEST["FROM"];
$global = $_REQUEST["GLOBAL"];
$to = $_REQUEST["TO"];

//$jarr = json_encode($q);
$json = json_decode(str_replace('\"', '"', $q), true);
//$json = json_decode($utf, true);

//print_r($level . $id . $name);

//print_r("Player: ". $player);
//print_r($w);

//print_r($json);

// lookup all hints from array if $q is different from ""

//print_r("Read:" . $read);

if($_GET["READ"] == "GLOBAL")
{
    readRegional($_GET["REGION"]);
} else if($_GET["READ"] == "PRIVATE") {
    readPrivate($_GET["FROM"]);
}

function readRegional()
{
    $sqlHost = "localhost";
    $sqlUser = "username";
    $sqlPwd = "password";
    $sqlDb = "database";

    $sqlConn = mysql_connect($sqlHost, $sqlUser, $sqlPwd);
    mysql_select_db($sqlDb, $sqlConn);

    $count = 0;

    //GET COUNT

    $sqlQuery = "(SELECT * FROM bitquest_messages HAVING global= '". 1 ."' ORDER BY id DESC LIMIT 20) ORDER BY id ASC";

    $result = mysql_query($sqlQuery);

    if(!$result)
    {
        $message = mysql_error();
        die($message);
    }

    while($row = mysql_fetch_assoc($result))
    {
        
        print_r("<p style='color: orange'><b>".$row['name'].": ". $row['message']."</b> - ".substr($row['date'], 11, 19)."</p>");
    }      


    mysql_close($sqlConn);

}

function readPrivate($from)
{
    $sqlHost = "localhost";
    $sqlUser = "username";
    $sqlPwd = "password";
    $sqlDb = "database";


    $sqlConn = mysql_connect($sqlHost, $sqlUser, $sqlPwd);
    mysql_select_db($sqlDb, $sqlConn);

    $count = 0;

    //GET COUNT

    $sqlQuery = "(SELECT * FROM bitquest_messages HAVING `to`= '". $from ."' OR `from`= '".$from."' AND `global`=0 ORDER BY id DESC LIMIT 20) ORDER BY id ASC";

    $result = mysql_query($sqlQuery);

    if(!$result)
    {
        $message = mysql_error();
        die($message);
    }

    while($row = mysql_fetch_assoc($result))
    {
        
        print_r("<p style='color: orange'><b>".$row['name'].": ". $row['message']."</b> - ".substr($row['date'], 11, 19)."</p>");
    }      


    mysql_close($sqlConn);

}

if($to == "" && $message != "" && $from != "" && $id != "")
{
    if(lowerPoints($id) == true)
    {
	$sqlHost = "localhost";
	$sqlUser = "username";
	$sqlPwd = "password";
	$sqlDb = "database";


        $sqlConn = mysql_connect($sqlHost, $sqlUser, $sqlPwd);
        mysql_select_db($sqlDb, $sqlConn);

        $sqlQuery = "INSERT INTO bitquest_messages (`id`, `from`, `name`, `message`) VALUES (NULL, '".$id."', '".$from."', '".$message."')";

        $result = mysql_query($sqlQuery);

        if (!$result) {
            $message = mysql_error();
            die($message);
        }

        readRegional();
    } else {
    print_r("<p>You lack 1000 points.</p>");
    }
}

if($to != "" && $message != "" && $from != "" && $id != "")
{
    if(lowerPoints($id) == true)
    {
	$sqlHost = "localhost";
	$sqlUser = "username";
	$sqlPwd = "password";
	$sqlDb = "database";


        $sqlConn = mysql_connect($sqlHost, $sqlUser, $sqlPwd);
        mysql_select_db($sqlDb, $sqlConn);

        $sqlQuery = "INSERT INTO bitquest_messages (`id`, `from`, `name`, `message`, `to`, `global`) VALUES (NULL, '".$id."', '".$from."', '".$message."', '".$to."', '0')";

        $result = mysql_query($sqlQuery);

        if (!$result) {
            $message = mysql_error();
            die($message);
        }

        readRegional();
    } else {
    print_r("<p>You lack 1000 points.</p>");
    }
}

if (!$level && $id != "" && $name != "") {
    if (!file_exists('users/' . $id . '.xml')) {
        //print_r("<p>Creando usuario con ID: " . $json['ID'] . ". Sesion iniciada con el nombre " . $name . ".</p>");

        if ($id) {
            $xmlString = "
        <Stats>
    <Name>" . $name . "</Name>
    <ID>" . $id . "</ID>
    <Picture>http://graph.facebook.com/".$id."/picture?type=large</Picture>

    <Shield>100</Shield>
    <Power>30</Power>

    <Levels>
        <System>1</System>
        <CPU>0</CPU>
        <Power>0</Power>
        <Shield>0</Shield>
        <Virus>0</Virus>
        <Memory>1</Memory>
        <HDD>0</HDD>
        <Network>1</Network>
    </Levels>

    <Resources>
        <Chips>0</Chips>
        <Gates>0</Gates>
        <Connectors>0</Connectors>
        <Codes>0</Codes>
        <Scripts>0</Scripts>
        <Bugs>0</Bugs>
    </Resources>

    <Abilities>
        <Programming>0</Programming>
        <Engineering>0</Engineering>
        <Storage>0</Storage>
        <Trade>0</Trade>
        <Architecture>0</Architecture>
        <Points>1</Points>
    </Abilities>

    <Modules>
        <Items>
            <Power>
                <Recharge>0</Recharge>
                <Power>0</Power>
                <CPUConsumption>0</CPUConsumption>
                <ShieldConsumption>0</ShieldConsumption>
            </Power>
            <Shield>
                <VirusAvoidance>0</VirusAvoidance>
                <StabilityBoost>0</StabilityBoost>
                <VirusResistance>0</VirusResistance>
            </Shield>
            <CPU>
                <CPUBoost>0</CPUBoost>
            </CPU>
            <Virus>
                <VirusBoost>0</VirusBoost>
                <VirusTimer>0</VirusTimer>
            </Virus>
        </Items>

        <Quantity>
            <CPU>0</CPU>
            <Power>0</Power>
            <Shield>0</Shield>
            <Virus>0</Virus>
        </Quantity>
    </Modules>

    <Inventory>
        <Item>
            <x>0</x>
            <y>0</y>

            <ID>0</ID>
            <Name>Puntos</Name>
            <Class>Global</Class>
            <Level>0</Level>
            <Status>Passive</Status>
            <Stats>
                <Points>0</Points>
            </Stats>
        </Item>
    </Inventory>

</Stats>";


            $xml = simplexml_load_string($xmlString);
            $xml->asXML("users/" . $id . ".xml");
        }
    }
}

function lowerPoints($id)
{
    $player = simplexml_load_file("users/".$id.".xml");

    if(intval($player->Inventory[0]->Item->Stats->Points) >= 1000)
    {
        $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - 1000;

        $player->asXML("users/".$id.".xml");

        return true;
    } else {
        return false;
    }
}

if($level && $name && $id) {

    /*print_r($level);
    print_r($name);
    print_r($id);
    print_r($picture);*/

    /*$xml = @simplexml_load_file("users/100007245512782.xml");

    $stats = new SimpleXMLElement($xml);

    $stats->Stats->Inventory->Item[0]->Stats->Points = 100;

    //$time = time();
    $xml->asXML();*/

    //echo $q && "<br>";

    //echo "Tiempo restante: $tleft <br>";

    //if ($tleft >= 3) {

    //$xml = simplexml_load_file("users/100007245512782.xml");

    $ranks = simplexml_load_file("users/ranks.xml");

    //$stats = new SimpleXMLElement($xml);

    //print_r($xml);
    //echo $stats;

    $found = false;

    if ($id != "") {
        foreach ($ranks->children() as $user) {
            if (strval($user->ID) == strval($id)) {
                $found = true;
                $user->Level = $level;
                $user->Name = $name;

                break;
            }
        }

        if ($found == false) {
            $ranks->addChild("User");

            foreach ($ranks->children() as $user) {
                if (!$user->Name) {
                    $user->addChild("Level", $level);
                    $user->addChild("ID", $id);
                    $user->addChild("Name", $name);
                    $user->addChild("Picture", "http://graph.facebook.com/".$id."/picture?type=large");
                }
            }

        }


        $ranks->asXML("users/ranks.xml");
    }
}

    //print_r($json['Inventory'][0]['Stats']['Points'] . "<br>");

   /* $xml = simplexml_load_file("users/".$json['ID'].".xml");

    if($xml && $json['ID'])
    {
        if ($json['Inventory'][0]['Stats']['Points']) {
            $xml->Inventory->Item[0]->Stats->Points = $json['Inventory'][0]['Stats']['Points'];
        }

        //$xml->Picture = $json['Picture'];

        //items del inventario

        $currentItems = array(sizeof($xml->Inventory->children()) + 1);

        $itemfound = false;
        if (sizeof($json['Inventory']) > 0) {
            $aux = 0;
            foreach($xml->Inventory->children() as $xItem) {
                $currentItems[strval($xItem->ID)] = false;
            }

            foreach ($json['Inventory'] as $item) {
                $itemfound = false;

                foreach ($xml->Inventory->children() as $xItem) {
                    if ($item['ID'] == $xItem->ID) {
                        $itemfound = true;
                        $xItem->Status = $item['Status'];
                        break;
                    }
                }

                //var_dump($currentItems);

                if ($itemfound == false) {
                    $xml->Inventory->addChild("Item");
                    foreach ($xml->Inventory->children() as $xItem) {
                        if (!$xItem->ID) {
                            $xItem->addChild("x", $item['x']);
                            $xItem->addChild("y", $item['y']);
                            $xItem->addChild("ID", $item['ID']);
                            $xItem->addChild("Name", $item['Name']);
                            $xItem->addChild("Class", $item['Class']);
                            $xItem->addChild("Level", $item['Level']);
                            $xItem->addChild("Status", $item['Status']);
                            $xItem->addChild("Stats");

                            switch ($item['Class']) {
                                case "Power":
                                    $xItem->Stats->addChild("Power", floatval($item['Stats']['Power']));
                                    $xItem->Stats->addChild("Recharge", floatval($item['Stats']['Recharge']));
                                    $xItem->Stats->addChild("CPUConsumption", floatval($item['Stats']['CPUConsumption']));
                                    $xItem->Stats->addChild("ShieldConsumption", floatval($item['Stats']['ShieldConsumption']));
                                    break;

                                case "CPU":
                                    $xItem->Stats->addChild("CPUBoost", floatval($item['Stats']['CPUBoost']));
                                    break;

                                case "Virus":
                                    $xItem->Stats->addChild("VirusTimer", $item['Stats']['VirusTimer']);
                                    $xItem->Stats->addChild("VirusBoost", $item['Stats']['VirusBoost']);
                                    break;

                                case "Shield":
                                    $xItem->Stats->addChild("VirusResistance", $item['Stats']['VirusResistance']);
                                    $xItem->Stats->addChild("VirusAvoidance", $item['Stats']['VirusAvoidance']);
                                    $xItem->Stats->addChild("StabilityBoost", $item['Stats']['StabilityBoost']);
                                    break;
                            }

                        }
                    }
                }
                $aux++;
            }

            $excluding = false;

            foreach($currentItems as $current => $key) {
                //print_r($item." ");

                foreach($json['Inventory'] as $item)
                {
                    if(strval($current) == strval($item['ID']))
                    {
                        $currentItems[$current] = true;
                    }
                }
            }

            //var_dump($currentItems);

            foreach($currentItems as $item => $key)
            {
                //var_dump($currentItems);
                if($currentItems[$item] != true)
                {
                    foreach($xml->Inventory->children() as $child)
                    {
                        if(strval($child->ID) == strval($item))
                        {
                            $dom = dom_import_simplexml($child);
                            //print_r("Item demas encontrado!");
                            //print_r($item);
                            //print_r($child);
                            $dom->parentNode->removeChild($dom);
                        }
                    }
                }
            }


        } else {
            $itemfound = true;
        }


        if($json['Levels']['System'])
        $xml->Levels->System = $json['Levels']['System'];

        if($json['Levels']['CPU'])
        $xml->Levels->CPU = $json['Levels']['CPU'];

        if($json['Levels']['Virus'])
        $xml->Levels->Virus = $json['Levels']['Virus'];

        if($json['Levels']['Power'])
        $xml->Levels->Power = $json['Levels']['Power'];

        if($json['Levels']['Shield'])
        $xml->Levels->Shield = $json['Levels']['Shield'];

        if(!$xml->Abilities)
        {
            $xml->addChild("Abilities");
        }




        if ($xml->Abilities->Programming)
            if($json['Abilities']['Programming'])
                $xml->Abilities->Programming = $json['Abilities']['Programming'];
            else
                $xml->Abilities->Programming = 0;
        else if (!$xml->Abilities->Programming)
            $xml->Abilities->addChild("Programming", 0);

        if ($xml->Abilities->Engineering)
            if($json['Abilities']['Engineering'])
                $xml->Abilities->Engineering = $json['Abilities']['Engineering'];
            else
                $xml->Abilities->Engineering = 0;
        else if (!$xml->Abilities->Engineering)
            $xml->Abilities->addChild("Engineering", 0);

        if ($xml->Abilities->Storage)
            if($json['Abilities']['Storage'])
                $xml->Abilities->Storage = $json['Abilities']['Storage'];
            else
                $xml->Abilities->Storage = 0;
        else if (!$xml->Abilities->Storage)
            $xml->Abilities->addChild("Storage", 0);

        if ($xml->Abilities->Trade)
            if($json['Abilities']['Trade'])
                $xml->Abilities->Trade = $json['Abilities']['Trade'];
            else
                $xml->Abilities->Trade = 0;
        else if (!$xml->Abilities->Trade)
            $xml->Abilities->addChild("Trade", 0);

        if ($xml->Abilities->Architecture)
            if($json['Abilities']['Architecture'])
                $xml->Abilities->Architecture = $json['Abilities']['Architecture'];
            else
                $xml->Abilities->Architecture = 0;
        else if (!$xml->Abilities->Architecture)
            $xml->Abilities->addChild("Architecture", 0);


        if ($xml->Abilities->Points){
            if($json['Abilities']['Points'])
                $xml->Abilities->Points = $json['Abilities']['Points'];
            else
                $xml->Abilities->Points = 0;
        }
        else if (!$xml->Abilities->Points)
            $xml->Abilities->addChild("Points", 0);

        if(!$xml->Resources)
        {
            $xml->addChild("Resources");
        }

        if ($xml->Resources->Chips && $json['Resources']['Chips'])
            $xml->Resources->Chips = $json['Resources']['Chips'];
        else if (!$xml->Resources->Chips)
            $xml->Resources->addChild("Chips", 0);

        if ($xml->Resources->Gates && $json['Resources']['Gates'])
            $xml->Resources->Gates = $json['Resources']['Gates'];
        else if (!$xml->Resources->Gates)
            $xml->Resources->addChild("Gates", 0);

        if ($xml->Resources->Connectors && $json['Resources']['Connectors'])
            $xml->Resources->Connectors = $json['Resources']['Connectors'];
        else if (!$xml->Resources->Connectors)
            $xml->Resources->addChild("Connectors", 0);

        if ($xml->Resources->Codes && $json['Resources']['Codes'])
            $xml->Resources->Codes = $json['Resources']['Codes'];
        else if (!$xml->Resources->Codes)
            $xml->Resources->addChild("Codes", 0);

        if ($xml->Resources->Scripts && $json['Resources']['Scripts'])
            $xml->Resources->Scripts = $json['Resources']['Scripts'];
        else if (!$xml->Resources->Scripts)
            $xml->Resources->addChild("Scripts", 0);

        if ($xml->Resources->Bugs && $json['Resources']['Bugs'])
            $xml->Resources->Bugs = $json['Resources']['Bugs'];
        else if (!$xml->Resources->Bugs)
            $xml->Resources->addChild("Bugs", 0);
*/
        /*$xml->Resources->Chips = $json['Resources']['Chips'];
        $xml->Resources->Gates = $json['Resources']['Gates'];
        $xml->Resources->Connectors = $json['Resources']['Connectors'];
        $xml->Resources->Codes = $json['Resources']['Codes'];
        $xml->Resources->Scripts = $json['Resources']['Scripts'];
        $xml->Resources->Bugs = $json['Resources']['Bugs'];*/
/*
        $Power = 0;
        $Recharge = 0;
        $CPUConsumption = 0;
        $ShieldConsumption = 0;
        $CPUBoost = 0;
        $VirusBoost = 0;
        $VirusTimer = 0;
        $VirusAvoidance = 0;
        $StabilityBoost = 0;
        $VirusResistance = 0;

        foreach ($xml->Inventory->children() as $item) {
            if ($item->Status == "Equipar") {
                switch ($item->Class) {
                    case "Power":
                        $Power += floatval($item->Stats->Power) * floatval($item->Level / 10 + 1);
                        $Recharge += floatval($item->Stats->Recharge) * floatval($item->Level / 10 + 1);
                        $CPUConsumption += floatval($item->Stats->CPUConsumption) * floatval($item->Level / 10 + 1);
                        $ShieldConsumption += floatval($item->Stats->ShieldConsumption) * floatval($item->Level / 10 + 1);
                        break;
                    case "CPU":
                        $CPUBoost += floatval($item->Stats->CPUBoost) * floatval($item->Level / 10 + 1);
                        break;
                    case "Virus":
                        $VirusBoost += floatval($item->Stats->VirusBoost) * floatval($item->Level / 10 + 1);
                        $VirusTimer += floatval($item->Stats->VirusTimer) * floatval($item->Level / 10 + 1);
                        break;
                    case "Shield":
                        $VirusAvoidance += floatval($item->Stats->VirusAvoidance) * floatval($item->Level / 10 + 1);
                        $StabilityBoost += floatval($item->Stats->StabilityBoost) * floatval($item->Level / 10 + 1);
                        $VirusResistance += floatval($item->Stats->VirusResistance) * floatval($item->Level / 10 + 1);
                        break;
                }
            }
        }

        $xml->Modules->Items->Power->Power = $Power;
        $xml->Modules->Items->Power->Recharge = $Recharge;
        $xml->Modules->Items->Power->CPUConsumption = $CPUConsumption;
        $xml->Modules->Items->Power->ShieldConsumption = $ShieldConsumption;
        $xml->Modules->Items->CPU->CPUBoost = $CPUBoost;
        $xml->Modules->Items->Virus->VirusBoost = $VirusBoost;
        $xml->Modules->Items->Virus->VirusTimer = $VirusTimer;
        $xml->Modules->Items->Shield->VirusAvoidance = $VirusAvoidance;
        $xml->Modules->Items->Shield->StabilityBoost = $StabilityBoost;
        $xml->Modules->Items->Shield->VirusResistance = $VirusResistance;

        $xml->Modules->Quantity->Power = $json['Modules']['Quantity']['Power'];
        $xml->Modules->Quantity->Shield = $json['Modules']['Quantity']['Shield'];
        $xml->Modules->Quantity->Virus = $json['Modules']['Quantity']['Virus'];
        $xml->Modules->Quantity->CPU = $json['Modules']['Quantity']['CPU'];

        if ($json['Levels']['Memory'] == 0)
            $json['Levels']['Memory'] = 1;

        if ($json['Levels']['Network'] == 0)
            $json['Levels']['Network'] = 1;

        if($json['Levels']['Memory'])
        $xml->Levels->Memory = $json['Levels']['Memory'];

//patch: HDD Network
        if ($xml->Levels->HDD && $json['Levels']['HDD'])
            $xml->Levels->HDD = $json['Levels']['HDD'];
        else if (!$xml->Levels->HDD)
            $xml->Levels->addChild("HDD", $json['Levels']['HDD']);

        if ($xml->Levels->Network && $json['Levels']['Network'])
            $xml->Levels->Network = $json['Levels']['Network'];
        else if (!$xml->Levels->Network)
            $xml->Levels->addChild("Network", $json['Levels']['Network']);


//$_SESSION['time'] = time();

        $xml->asXml("users/" . $json['ID'] . ".xml");
        //print_r("Saving user data");
    }
}
*/

/*
if(isset($_POST))
{
    var_dump($_POST);
}



//if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

}

json_encode($aResult);
*/
?>

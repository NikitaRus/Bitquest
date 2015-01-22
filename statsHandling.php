<?php
/**
 * Created by PhpStorm.
 * User: N1
 * Date: 9/3/14
 * Time: 12:07 PM
 */
include 'stats.php';

$Stats = Array(
    "Name" => "",
    "ID" => "",
    "Picture" => "",
    "Update" => timeToSeconds(),
    "Levels" => Array(
        "System" => 1,
        "CPU" => 0,
        "Power" => 0,
        "Virus" => 0,
        "Shield" => 0,
        "Network" => 1,
        "HDD" => 0,
        "Memory" => 1
    ),
    "Abilities" => Array(
        "Engineering" => 0,
        "Programming" => 0,
        "Storage" => 0,
        "Trade" => 0,
        "Architecture" => 0,
        "Points" => 1
    ),
    "Resources" => Array(
        "Gates" => 0,
        "Chips" => 0,
        "Connectors" => 0,
        "Scripts" => 0,
        "Codes" => 0,
        "Bugs" => 0
    ),
    "Inventory" => Array(
        Array(
            "x" => 0,
            "y" => 0,
            "Name" => "Points",
            "Class" => "Global",
            "Level" => 0,
            "Stats" => Array(
                "Points" => 0
            ),
            "State" => "Quitar"
        )
    ),
    "Modules" => Array(
        "Quantity" => Array(
            "CPU" => 0,
            "Power" => 0,
            "Shield" => 0,
            "Virus" => 0
        ),
        "Modules" => Array(),
        "Stats" => Array(
            "CPU" => Array(
                "CPUBoost" => 0
            ),
            "Virus" => Array(
                "VirusBoost" => 0,
                "VirusTimer" => 0
            ),
            "Shield" => Array(
                "VirusAvoidance" => 0,
                "StabilityBoost" => 0,
                "VirusResistance" => 0
            ),
            "Power" => Array(
                "Recharge" => 0,
                "Power" => 0,
                "CPUConsumption" => 0,
                "ShieldConsumption" => 0
            )
        )
    )
);

$players = Array();
$playerStats = Array();

$playerGET = $_REQUEST['player'];
$playerACTION = $_REQUEST['action'];
$playerSTAT = $_REQUEST['stat'];
$playerJSON = json_decode(str_replace('\"', '"', $playerGET), true);


$storeITEM = $_REQUEST['item'];
$storeJSON = json_decode(str_replace('\"', '"', $storeITEM), true);
$storeSTAT = $_REQUEST['stat'];

//print_r($playerGET);
//print_r($playerJSON);
//print_r($playerACTION);

if($playerGET != "")
{
    if($playerACTION == "connect")
    {
        addPlayer();
    }

    if($playerACTION == "check")
    {
        statsUp();
    }

    if($playerACTION == "levelUp")
    {
        levelUp($playerSTAT);
    }

    if($playerACTION == "abilitiesUp")
    {
        abilitiesUp($playerSTAT);
    }

    if($playerACTION == "addItem")
    {
        $item = json_decode(str_replace('\"', '"', $playerSTAT), true);

        addItem($item);
    }

    if($playerACTION == "removeItem")
    {
        $item = json_decode(str_replace('\"', '"', $playerSTAT), true);

        removeModule($item);
        removeItem($item);
    }

    if($playerACTION == "virusAttack")
    {
        $virus = json_decode(str_replace('\"', '"', $playerSTAT), true);
        virusAttack($virus);
    }

    if($playerACTION == "virusBonus")
    {
        virusBonus($playerSTAT);
    }

    if($playerACTION == "addMaterials")
    {
        $item = json_decode(str_replace('\"', '"', $playerSTAT), true);

        addMaterials($item);
    }
    if($playerACTION == "addPosition")
    {
        $pos = json_decode(str_replace('\"', '"', $playerSTAT), true);

        addPosition($pos);
    }

    if($playerACTION == "powerLess")
    {
        powerLess($playerSTAT);
    }

    if($playerACTION == "setLanguage")
    {
        $lang = $playerSTAT;

        setLanguage($lang);
    }

    if($playerACTION == "setVirusTimer")
    {
        $time = $playerSTAT;

        setVirusTimer($time);
    }

    /*if($playerACTION == "saveHealth")
    {
        $healthStats = json_decode(str_replace('\"', '"', $playerSTATS), true);

        saveHealth($healthStats);
    }*/

    if($playerACTION == "lowerVirus")
    {
        lowerVirus();
    }

    if($playerACTION == "lowerCPU")
    {
        lowerCPU();
    }

    if($playerACTION == "lowerShield")
    {
        lowerShield();
    }

    if($playerACTION == "lowerPower")
    {
        lowerPower();
    }

    if($playerACTION == "attackNotification")
    {
        sendNotification($playerGET, $playerSTAT);
    }
}

if($playerACTION != "")
{
    if($playerACTION == "removeListing")
    {
        removeListing($storeSTAT);
    }
    if($playerACTION == "removeReport")
    {
        removeReport($storeSTAT);
    }

    if($playerACTION == "addListing")
    {
        addListing($storeJSON, $playerGET);
    }

    if($playerACTION == "addModule")
    {
        $module = json_decode(str_replace('\"', '"', $playerSTAT), true);

        addModule($module);
    }

    if($playerACTION == "removeModule")
    {
        $module = json_decode(str_replace('\"', '"', $playerSTAT), true);

        removeModule($module);
    }
}



/*function fillStats($player)
{
    global $Stats;

    $tmpStats = Array();
    $tmpStats = $Stats;

    $xml = simplexml_load_file("users/".$player['ID'].".xml");

    foreach($xml->children() as $child => $key)
    {

        print_r($child);
        if($child == "Name" || $child == "ID" || $child == "Picture")
        {

            //print_r($child. " ". $xml->$child);
            $tmpStats[$child] = strval($xml->$child);


        }

        if($child == "Abilities" || $child == "Levels" || $child == "Resources")
        {
            print_r("Llego!");
            //print_r($child);
            foreach($xml->$child->children() as $value => $key)
            {
                //print_r($value. " " . intval($xml->$child->$value));
                $tmpStats[$child][$value] = intval($xml->$child->$value);
            }
        }

        else if($child == "Inventory")
        {
            foreach($Stats[$child] as $item)
            {
                if(sizeof($Stats['Inventory']) == sizeof($xml->Inventory->children()))
                {
                    foreach($item as $name => $key)
                    {
                        if($name != "Stats")
                        {
                            $item[$name] = $xml->$child[$item]->$name;
                        } else {
                            $tmpStat = Array();

                            foreach($child[$item]->$name->children() as $stat => $key)
                            {
                                $tmpStat[$xml->$child[$item]->$name->$stat->$key] = $child[$item]->$name->$stat[$key];
                            }

                            $item[$name][] = $tmpStat;
                        }
                    }
                } else {

                }
            }
        }

    }

    $playerStats[] = $tmpStats;

    print_r($playerStats);

}*/

function addPlayer()
{
    global $playerJSON;

    if(!file_exists("sessions/".$playerJSON['ID'].".xml"))
    {
        $xmlString = "
        <Session>
            <Created>".date("y-m-d")."</Created>
            <Time>0</Time>
            <Current>
                <Year>".date("y")."</Year>
                <Month>".date("m")."</Month>
                <Day>".date("d")."</Day>
                <Hour>".date("G")."</Hour>
                <Minute>".date("i")."</Minute>
                <Second>".date("s")."</Second>
            </Current>
            <Last>
                <Year>".date("y")."</Year>
                <Month>".date("m")."</Month>
                <Day>".date("d")."</Day>
                <Hour>".date("G")."</Hour>
                <Minute>".date("i")."</Minute>
                <Second>".date("s")."</Second>
            </Last>
            <Resources>
                <Gates>0</Gates>
                <Chips>0</Chips>
                <Connectors>0</Connectors>
                <Bugs>0</Bugs>
                <Codes>0</Codes>
                <Scripts>0</Scripts>
            </Resources>
            <Health>
                <CPU>100</CPU>
                <Power>100</Power>
                <Virus>100</Virus>
                <Shield>100</Shield>
            </Health>
            <Power>0</Power>
            <Store>
            </Store>
            <Virus>
            </Virus>
            <VirusTimer>0</VirusTimer>

        </Session>";

        $xml = simplexml_load_string($xmlString);

        $xml->asXML("sessions/".$playerJSON['ID'].".xml");

        $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

        if(!$player->Shield)
            $player->addChild("Shield", 100);

        if(!$player->Power)
            $player->addChild("Power", 30);

        if(!$player->Health->CPU)
            $player->Health->addChild("CPU", 100);
        if(!$player->Health->Virus)
            $player->Health->addChild("Virus", 100);
        if(!$player->Health->Shield)
            $player->Health->addChild("Shield", 100);
        if(!$player->Health->Power)
            $player->Health->addChild("Power", 100);

        if(!$player->VirusTimer)
            $player->addChild("VirusTimer", 0);

        $player->asXML("users/".$playerJSON['ID'].".xml");

        //print_r($playerJSON);

    } else {
        if(playerActive())
        {
            statsUp();
        } else {
            updatePlayer();
        }
    }

    //fillStats($player);
}

function setVirusTimer($time)
{
    global $playerJSON;

    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    $xml->VirusTimer = $time;

    $xml->asXML("sessions/". $playerJSON['ID']. ".xml");
}

function timeToSeconds()
{
    $h = date('G') * 60 * 60;
    $m = date('i') * 60;
    $s = date('s');

    return intval($h) + intval($m) + intval($s);
}

function setLanguage($lang)
{
    global $playerJSON;

    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    $xml->Language = $lang;

    $xml->asXML("sessions/". $playerJSON['ID']. ".xml");
}

function sendNotification($id, $name)
{
    $response = $this->facebook->api( '/' . $id . '/notifications', 'POST', array('template' => $name . ' infected your system.', 'href' => "", 'access_token' => '311553562324982'.'|'.'43ae99f64ff29b892cef9d2eb7ad68bb'));
}

function propInv($number, $range) {
    return ($number - $range) / $range * (-$range);
}

function addPosition($positions)
{
    global $playerJSON;

    //print_r($positions);

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if(!$player->PosX) {
        $player->addChild("PosX", $positions['x']);
        $player->addChild("PosY", $positions['y']);
        $player->addChild("PosP", $positions['p']);
    }

    $mapXml = simplexml_load_file("region/map.xml");

    if(!file_exists("region/".$positions['r'].".xml"))
    {
        $regionString = "<Region>
        <Player>
            <Name>".$playerJSON['Name']."</Name>
            <ID>".$playerJSON['ID']."</ID>
            <x>".$positions['x']."</x>
            <y>".$positions['y']."</y>
            <p>".$positions['p']."</p>
            <System>".$player->Levels->System."</System>
            <CPU>".$player->Levels->CPU."</CPU>
            <Power>".$player->Levels->Power."</Power>
            <Shield>".$player->Levels->Shield."</Shield>
            <Virus>".$player->Levels->Virus."</Virus>
            <Memory>".$player->Levels->Memory."</Memory>
            <HDD>".$player->Levels->HDD."</HDD>
            <Network>".$player->Levels->Network."</Network>
        </Player></Region>";

        $regionXml = simplexml_load_string($regionString);

        $regionXml->asXML("region/".$positions['r'].".xml");


        $found = false;

        foreach($mapXml->children() as $position)
        {
            if($position->x == $positions['x'] && $position->y == $positions['y'])
            {
                $found = true;
                $position->p = intval($position->p) + 1;
            }
        }

        if(!$found)
        {
            $mapXml->addChild("Position");

            foreach($mapXml->children() as $position) {
            if(!$position->x)
            {
                $position->addChild("x", $positions['x']);
                $position->addChild("y", $positions['y']);
                $position->addChild("p", 1);
            }
            }

        }

    } else {
        $regionXml = simplexml_load_file("region/".$positions['r'].".xml");

        $regionXml->addChild("Player");

        foreach($regionXml->children() as $child)
        {
            if(!$child->ID)
            {
                $child->addChild("Name", $playerJSON['Name']);
                $child->addChild("ID", $playerJSON['ID']);
                $child->addChild("x", $positions['x']);
                $child->addChild("y", $positions['y']);
                $child->addChild("p",$positions['p']);
                $child->addChild("System", $player->Levels->System);
                $child->addChild("CPU", $player->Levels->CPU);
                $child->addChild("Power", $player->Levels->Power);
                $child->addChild("Shield", $player->Levels->Shield);
                $child->addChild("Virus", $player->Levels->Virus);
                $child->addChild("Memory", $player->Levels->Memory);
                $child->addChild("HDD", $player->Levels->HDD);
                $child->addChild("Network", $player->Levels->Network);
            }
        }

        //Agregar uno si existe la region
        //Cambiar los players de la region
        $regionXml->asXML("region/".$positions['r'].".xml");

        $found = false;

        foreach($mapXml->children() as $position)
        {
            if($position->x == $positions['x'] && $position->y == $positions['y'])
            {
                $found = true;
                $position->p = intval($position->p) + 1;
            }
        }

        if(!$found)
        {
            $mapXml->addChild("Position");

            foreach($mapXml->children() as $position) {
                if(!$position->x)
                {
                    $position->addChild("x", $positions['x']);
                    $position->addChild("y", $positions['y']);
                    $position->addChild("p", 1);
                }
            }

        }

    }
    $mapXml->asXML("region/map.xml");

    $player->asXML("users/".$playerJSON['ID'].".xml");
}

function playerActive()
{
    global $playerJSON;

    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    if(date('y') == $xml->Current->Year)
    {
        if(date('m') == $xml->Current->Month)
        {
            if(date('d') == $xml->Current->Day)
            {
                $time = intval($xml->Current->Hour)*60*60 + intval($xml->Current->Minute)*60 + intval($xml->Current->Second);

                if($time + 120 > timeToSeconds())
                {
                    return true;
                } else {

                    return false;
                }
            }
        }
    }

    return false;

}

function removeListing($index)
{
    global $playerJSON;
    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    //$xml->Store[$index]->Item->removeChild();


    $itemaux = 0;
    foreach($xml->Store->children() as $item)
    {
        if($itemaux == $index)
        {

            $player = simplexml_load_file("users/".$item->Player.".xml");

            $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) + intval($item->Price);

            $player->asXML("users/".$item->Player.".xml");

            $dom = dom_import_simplexml($item);
            $dom->parentNode->removeChild($dom);
        } else {
          $itemaux++;
        }
    }



    $xml->asXML("sessions/".$playerJSON['ID'].".xml");
}

function removeReport($index)
{
    global $playerJSON;
    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    //$xml->Store[$index]->Item->removeChild();


    $itemaux = 0;
    foreach($xml->Virus->children() as $item)
    {
        if($itemaux == $index)
        {
            $dom = dom_import_simplexml($item);
            $dom->parentNode->removeChild($dom);
        } else {
            $itemaux++;
        }
    }

    $xml->asXML("sessions/".$playerJSON['ID'].".xml");
}


function addListing($item, $id)
{
    $player = simplexml_load_file("users/".$id.".xml");

    if(intval($player->Inventory[0]->Item->Stats->Points) >= intval($item['Price']))
    {
        $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - intval($item['Price']);

        $player->asXML("users/".$id.".xml");

            //print_r($item);
            $xml = simplexml_load_file("sessions/".$item['Player'].".xml");

            $xml->Store->addChild("Item");
                foreach($xml->Store->children() as $child)
                {
                    if(!$child->Show)
                    {
                        $child->addChild("Level", $item['Level']);
                        $child->addChild("Price", $item['Price']);
                        $child->addChild("Quantity", $item['Quantity']);
                        $child->addChild("Level", $item['Level']);
                        $child->addChild("Name", $item['Name']);
                        $child->addChild("Player", $item['Player']);
                        $child->addChild("From", $item['From']);
                        $child->addChild("Show", 1);
                    }
                }

            $xml->asXML("sessions/".$item['Player'].".xml");

    }
}

function updatePlayer()
{
    global $playerJSON;

    $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    $xml->Last->Year = $xml->Current->Year;
    $xml->Last->Month = $xml->Current->Month;
    $xml->Last->Day = $xml->Current->Day;
    $xml->Last->Hour = $xml->Current->Hour;
    $xml->Last->Minute = $xml->Current->Minute;
    $xml->Last->Second = $xml->Current->Second;

    $xml->Current->Year = date('y');
    $xml->Current->Month = date('m');
    $xml->Current->Day = date('d');

    $xml->Current->Hour = date('G');
    $xml->Current->Minute = date('i');
    $xml->Current->Second = date('s');

    if(date('y') == $xml->Current->Year)
    if(date('m') == $xml->Current->Month)
    if(date('d') == $xml->Current->Day)
    $xml->Time = intval($xml->Time) +
        (intval($xml->Current->Hour)*60*60 + intval($xml->Current->Minute)*60 + intval($xml->Current->Second) -
        (intval($xml->Last->Hour)*60*60 + intval($xml->Last->Minute)*60 +  intval($xml->Last->Second)));


    if(!$xml->Virus)
        $xml->addChild("Virus", "");

    if(!$xml->Virus)
        $xml->addChild("Language", "");

    if(!$xml->VirusTimer)
        $xml->addChild("VirusTimer", 0);


        $xml->asXML("sessions/".$playerJSON['ID'].".xml");

}

function abilitiesUp($ability)
{
    global $playerJSON;

    statsUp();

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    $totalPoints = 0;
    foreach($player->Abilities->children() as $stat => $key)
    {
        $totalPoints += intval($player->Abilities->$stat);

    }
    if($totalPoints < $player->Levels->System)
    {
        //print_r("Points:".$totalPoints);
        $player->Abilities->Points = intval($player->Levels->System);
    } else if($totalPoints > $player->Levels->System)
    {
        foreach($player->Abilities->children() as $stat => $key)
            if($stat != "Points")
                $player->Abilities->$stat = 0;
            else
                $player->Abilities->Points = $player->Levels->System;
    }

    if($player->Abilities->Points > 0) {
        $player->Abilities->$ability += 1;
        $player->Abilities->Points -= 1;
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");

}

function lowerVirus()
{
    global $playerJSON;
    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if($xml->Levels->Virus > 0)
    {
        $xml->Levels->Virus -= 1;
    }

    $xml->asXML("users/".$playerJSON['ID'].".xml");
}

function lowerShield()
{
    global $playerJSON;
    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if($xml->Levels->Shield > 0)
    {
        $xml->Levels->Shield -= 1;
    }

    $xml->asXML("users/".$playerJSON['ID'].".xml");
}

function lowerPower()
{
    global $playerJSON;
    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if($xml->Levels->Power > 0)
    {
        $xml->Levels->Power -= 1;
    }

    $xml->asXML("users/".$playerJSON['ID'].".xml");
}

function lowerCPU()
{
    global $playerJSON;
    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if($xml->Levels->CPU > 0)
    {
        $xml->Levels->CPU -= 1;
    }

    $xml->asXML("users/".$playerJSON['ID'].".xml");
}

/*function updateHealth(healthData)
{
    global $playerJSON;

    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml")

    $xml->Health->CPU = healthData['CPU'];
    $xml->Health->Virus = healthData['Virus'];
    $xml->Health->Shield = healthData['Shield'];
    $xml->Health->Power = healthData['Power'];

    $xml->asXML("users/".$playerJSON['ID'].".xml");
}*/


function powerLess($power)
{
    global $playerJSON;

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    if(intval($player->Power) - $power > 0)
    {
        $player->Power = intval($player->Power) - $power;
    } else {
        $player->Power = 0;
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");
}

function removeItem($item)
{
    global $playerJSON;

        //var_dump($currentItems);

    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    //print_r($item);

    foreach ($xml->Inventory->children() as $child) {
        if (strval($child->ID) == strval($item['ID'])) {
            $dom = dom_import_simplexml($child);
            //print_r("Item demas encontrado!");
            //print_r($item);
            //print_r($child);
            $dom->parentNode->removeChild($dom);
        }
    }

    $xml->asXML("users/".$playerJSON['ID'].".xml");

}

function statsUp()
{
    global $Components, $playerJSON;

    $timeElapsed = 0;

    if(playerActive())
    {
        $xml = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

        $time = intval($xml->Current->Hour)*60*60 + intval($xml->Current->Minute)*60 + intval($xml->Current->Second);

        $timeElapsed = timeToSeconds() - $time;

        if($timeElapsed < 0) {
            updatePlayer();

            return 0;
        }

        //print_r("Time elapsed between updates: ". $timeElapsed);

        $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");


        $MemoryPoints = 256;

        if(intval($player->Levels->Memory) > 0)
            $MemoryPoints = ($MemoryPoints * ($MemoryPoints/propInv(intval($player->Levels->Memory), 30))*intval($player->Levels->Memory));


        $PowerHealingloss = (($player->Levels->System / 10) * ($player->Levels->Shield / 10) - doubleval($player->Modules->Stats->Power->ShieldConsumption))*2;
        $PowerCPUloss = (0.15 * $player->Levels->CPU * (($player->Levels->System / 10 + 1) - doubleval($player->Modules->Stats->Power->CPUConsumption)))*2;

        $totalBoosts = 0;

        $totalHeals = 0;


        //16000 ms - powerboosttimer
        $powerBoostTimer = ((((intval($player->Levels->Power) * 0.2))) * (intval($player->Levels->System) / 10) + 1);
        if($powerBoostTimer > 7)
        {
            $powerBoostTimer = 7;
        }
        //print_r("PowerBoostTimer ". $powerBoostTimer." ");


        $powerTimes = doubleval(($timeElapsed + doubleval($xml->Power)) / (16 - $powerBoostTimer));
        $xml->Power = doubleval(($timeElapsed + doubleval($xml->Power)) % (16 - $powerBoostTimer));

        //print_r("E: ". (16-$powerBoostTimer));

        //print_r($powerTimes);

        //Power points
        $powerBoost = (4 * intval($player->Levels->Power)) * ((intval($player->Levels->System) / 10) + 1) + doubleval($player->Modules->Stats->Power->Recharge);
        //print_r("R: ".$powerBoost);

        //while (1) {
        $power = intval($player->Power);
        //print_r($power);
        $shield = intval($player->Shield);
        //print_r("Initial power " . $power);

        //print_r("C: ".$PowerCPUloss. " H: ". $PowerHealingloss);
        for($pb = 0; $pb < intval($powerTimes); $pb++)
        {
            if($power + $powerBoost <= (intval($Components['Power']['Values'][intval($player->Levels->Power)])+$player->Modules->Items->Power->Power)*($player->Abilities->Architecture/10*4+1))
            {
                $power += $powerBoost;

            } else {
                $power = (intval($Components['Power']['Values'][intval($player->Levels->Power)])+$player->Modules->Items->Power->Power)*($player->Abilities->Architecture/10*4+1);
                break;
            }
        }

        $timesToSubtract = 0;
        $timesToSubtractCPU = 0;
        $timesToSubtractHealing = 0;

        if(doubleval(doubleval($PowerCPUloss) + doubleval($PowerHealingloss)) > doubleval(0))
        {
            if($PowerCPUloss > 0)
            $timesToSubtractCPU = ($power / doubleval($PowerCPUloss));

            if($PowerHealingloss > 0)
            $timesToSubtractHealing = ($power / doubleval($PowerHealingloss));

            if($timesToSubtractCPU > $timesToSubtractHealing)
                $timesToSubtract = $timesToSubtractCPU;
            else
                $timesToSubtract = $timesToSubtractHealing;

            if($timeElapsed - $timesToSubtract < 0)
            {
                $timesToSubtract = $timeElapsed;
            }
        }
        else {
            $timesToSubtract = 0;
        }


        if(intval($player->Inventory[0]->Item->Stats->Points) < ($MemoryPoints- 10))
        {

           // print_r("Power boosted ". $power);

            //$timesToSubtract = 0;
                //print_r($timesToSubtractHealing);
            //print_r("Powerhealingloss".$PowerHealingloss);

            $maxShield = 100 + (20 * $player->Levels->Shield * doubleval(intval($player->Levels->System) / 10 + 1) * ($player->Stats->Modules->Shield->StabilityBoost + 1)) * ((intval($player->Abilities->Architecture) / 10*4) + 1);


                for($pl = 0; $pl < $timesToSubtract; $pl++)
                {
                    if($pl <= $timesToSubtractCPU)
                    if ($power - doubleval($PowerCPUloss) > 0) {
                        $power -= $PowerCPUloss;
                        $totalBoosts += 1;
                    }

                    if($shield < $maxShield)
                    if($pl <= $timesToSubtractHealing)
                    {
                        if ($power - doubleval($PowerHealingloss) > 0) {
                            $power -= $PowerHealingloss;
                            $totalHeals += 1;
                        } else {
                            break;
                        }
                    }
                }
            //}

                //print_r("Total boosts: ". $totalBoosts);
               // print_r("Empty power: " . $power);

                $levelBoost = (intval($player->Levels->System) / 10) + 1;
                $moduleCPUBoost = doubleval($player->Modules->Stats->CPU->CPUBoost) + 1;




                $shield += doubleval(((intval($player->Levels->System) / 10) + 1)*((doubleval($Components['Shield']['Healing'][intval($player->Levels->Shield)]) * 2)))*$totalHeals;

                /*print_r("Total heals: ".$totalHeals);
                print_r("Healing: " .(doubleval($Components['Shield']['Healing'][intval($player->Levels->Shield)])*((intval($player->Levels->System) / 10) + 1)) * 2);
                print_r("Total healing:".(doubleval($Components['Shield']['Healing'][intval($player->Levels->Shield)])*((intval($player->Levels->System) / 10) + 1)) * 2*$totalHeals);*/

                //print_r(doubleval(((intval($player->Levels->System) / 10) + 1)*((doubleval($Components['Shield']['Healing'][intval($player->Levels->Shield)]) * 2))));

                if($shield > $maxShield)
                {
                    $shield = $maxShield;
                }

                //print_r("Puntos actuales: ". $player->Inventory[0]->Item->Stats->Points);
                $additionalPoints = ((($Components['CPU']['Values'][intval($player->Levels->CPU)]) * $levelBoost * $moduleCPUBoost)*2) * $totalBoosts;
                $additionalPoints += ((($Components['CPU']['Values'][0]))*2) * ($timeElapsed - $totalBoosts);
                //print_r("Puntos adicionales: ". ($additionalPoints));
                //print_r("Puntos finales: ". (intval($player->Inventory[0]->Item->Stats->Points) + $additionalPoints));

                //print_r("Puntos adicionales".$additionalPoints);

                $player->Shield = $shield;
                $player->Power = $power;

        } else {
            $player->Inventory[0]->Item->Stats->Points = $MemoryPoints;
        }

        //print_r("System level: ".intval($player->Levels->System));
        //print_r("CPU value: ".$Components['CPU']['Values'][intval($player->Levels->System)]);

        $gatesReq = (18 / ($player->Abilities->Engineering / 5 + 1));
        $chipsReq = (41 / ($player->Abilities->Engineering / 5 + 1));
        $connectorsReq = (9 / ($player->Abilities->Engineering / 5 + 1));

        $bugsReq = (29 / ($player->Abilities->Programming / 5 + 1));
        $scriptsReq = (12 / ($player->Abilities->Programming / 5 + 1));
        $codesReq = (6 / ($player->Abilities->Programming / 5 + 1));

        $additionalGates = ($timeElapsed+intval($xml->Resources->Gates)) / $gatesReq;
        $xml->Resources->Gates = (($timeElapsed+intval($xml->Resources->Gates)) % $gatesReq);

        $additionalChips = ($timeElapsed+intval($xml->Resources->Chips)) / $chipsReq;
        $xml->Resources->Chips = (($timeElapsed+intval($xml->Resources->Chips)) % $chipsReq);

        $additionalConnectors = ($timeElapsed+intval($xml->Resources->Connectors)) / $connectorsReq;
        $xml->Resources->Connectors = (($timeElapsed+intval($xml->Resources->Connectors)) % $connectorsReq);

        $additionalCodes = ($timeElapsed+intval($xml->Resources->Codes)) / $codesReq;
        $xml->Resources->Codes = (($timeElapsed+intval($xml->Resources->Codes)) % $codesReq);

        $additionalScripts = ($timeElapsed+intval($xml->Resources->Scripts)) / $scriptsReq;
        $xml->Resources->Scripts = (($timeElapsed+intval($xml->Resources->Scripts)) % $scriptsReq);

        $additionalBugs = ($timeElapsed+intval($xml->Resources->Bugs)) / $bugsReq;
        $xml->Resources->Bugs = (($timeElapsed+intval($xml->Resources->Bugs)) % $bugsReq);

        $xml->asXML("sessions/".$playerJSON['ID'].".xml");

        $resourcesLimit = 150;

        for($l = 0; $l < $player->Levels->System; $l++)
        {
            $resourcesLimit *= 1.05;
        }

        $resourcesLimit = $resourcesLimit * doubleval(((intval($player->Abilities->Storage) / 10)*12)+1);


        $resourcesLimit = intval($resourcesLimit);

        if($player->Resources->Chips + $additionalChips < $resourcesLimit)
            $player->Resources->Chips += intval($additionalChips);
        else
            $player->Resources->Chips = $resourcesLimit;

        if($player->Resources->Gates + $additionalGates < $resourcesLimit)
            $player->Resources->Gates += intval($additionalGates);
        else
            $player->Resources->Gates = $resourcesLimit;

        if($player->Resources->Connectors + $additionalConnectors < $resourcesLimit)
            $player->Resources->Connectors += intval($additionalConnectors);
        else
            $player->Resources->Connectors = $resourcesLimit;

        if($player->Resources->Bugs + $additionalBugs < $resourcesLimit)
            $player->Resources->Bugs += intval($additionalBugs);
        else
            $player->Resources->Bugs = $resourcesLimit;

        if($player->Resources->Codes + $additionalCodes < $resourcesLimit)
            $player->Resources->Codes += intval($additionalCodes);
        else
            $player->Resources->Codes = $resourcesLimit;

        if($player->Resources->Scripts + $additionalScripts < $resourcesLimit)
            $player->Resources->Scripts += intval($additionalScripts);
        else
            $player->Resources->Scripts = $resourcesLimit;

        //print_r($additionalPoints);

        $player->Inventory[0]->Item->Stats->Points += $additionalPoints;

        $player->asXML("users/".$playerJSON['ID'].".xml");

        updatePlayer();

    } else {
        updatePlayer();
    }



    //$timeElapsed = $players[$player]['update'] - (timeToSeconds() - $players[$player]['update']);





    //print_r($playerStats[$player]['Inventory'][0]['Stats']['Points']);
    //$player[$player]['update'] = timeToSeconds();
}

function levelUp($component)
{
    global $playerJSON, $Components, $Language;

    statsUp();

    //print_r($component);

    $session = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    $region = simplexml_load_file("region/".(intval(intval($player->PosY)/6)*8+intval(intval($player->PosX)/6)+1).".xml");

    //print_r((intval(intval($player->PosY)/6)*8+intval(intval($player->PosX)/6)));

    foreach($region->children() as $pl)
    {
        //print_r($pl->ID);
        //print_r($player->Levels->CPU);
        if(strval($pl->ID) == strval($player->ID))
        {
            $pl->System = $player->Levels->System;
            $pl->Shield = $player->Levels->Shield;
            $pl->Power = $player->Levels->Power;
            $pl->Virus = $player->Levels->Virus;
            $pl->CPU = $player->Levels->CPU;
            $pl->Network = $player->Levels->Network;
            $pl->HDD = $player->Levels->HDD;
            $pl->Memory = $player->Levels->Memory;

            break;
        }
    }

    $region->asXML("region/".(intval(intval($player->PosY)/6)*8+intval(intval($player->PosX)/6)+1).".xml");

    if($component != "System") {
        if($component == "CPU" || $component == "Power")
        {
            if(intval($player->Inventory[0]->Item->Stats->Points) >= intval($Components[$component]['Prices'][intval($player->Levels->$component)]/($player->Abilities->Trade/ 10/2 + 1)) - 5 &&
                $player->Resources->Gates >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Gates']*2 &&
                $player->Resources->Chips >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Chips']*2 &&
                $player->Resources->Connectors >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Connectors']*2) {

                $player->Resources->Gates -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Gates']*2;
                $player->Resources->Chips -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Chips']*2;
                $player->Resources->Connectors -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Connectors']*2;
                $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1));
                $player->Levels->$component += 1;
            } else {
                print_r($Language[strval($session->Language)]["Resources"]["LackingResources1"]. $component. $Language[strval($session->Language)]["Resources"]["LackingResources2"] . intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1)) . $Language[strval($session->Language)]["Resources"]["LackingResources3"]);
            }
        } else if ($component == "Virus" || $component == "Shield") {
            if(intval($player->Inventory[0]->Item->Stats->Points) >= intval($Components[$component]['Prices'][intval($player->Levels->$component)]/($player->Abilities->Trade/ 10/2 + 1)) - 5 &&
                $player->Resources->Codes >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Codes']*2 &&
                $player->Resources->Scripts >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Scripts']*2 &&
                $player->Resources->Bugs >= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Bugs']*2) {


                $player->Resources->Codes -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Codes']*2;
                $player->Resources->Scripts -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Scripts']*2;
                $player->Resources->Bugs -= $Components[$component]['Requirements'][intval($player->Levels->$component)]['Bugs']*2;
                $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1));

                //print_r("Precio de ". $component. $Components[$component]['Prices'][intval($player->Levels->$component)+ 1] /($player->Abilities->Trade/ 5 + 1));

                $player->Levels->$component += 1;
            } else {
                print_r($Language[strval($session->Language)]["Resources"]["LackingResources1"]. $component. $Language[strval($session->Language)]["Resources"]["LackingResources2"] . intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1)).$Language[strval($session->Language)]["Resources"]["LackingResources3"]);
            }

        } else {
            if($component == "Memory")
            {
                $MemoryPoints = 256;

                if(intval($player->Levels->Memory) > 0)
                    $MemoryPoints = ($MemoryPoints * ($MemoryPoints/propInv(intval($player->Levels->Memory), 30))*intval($player->Levels->Memory));

                if($player->Levels->Memory > 0)
                    $MemoryPrice =  $MemoryPoints / 2;
                else
                    $MemoryPrice = 60;

                if(intval($player->Inventory[0]->Item->Stats->Points) >= $MemoryPrice)
                {
                    $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - $MemoryPrice /($player->Abilities->Trade/ 10/2 + 1);
                    $player->Levels->$component += 1;
                }
            } else if($component == "HDD") {

                if($player->Levels->HDD < 20)
                {
                    $HDDPrice = 150;

                    if(intval($player->Levels->HDD) > 0)
                        for($l = 0; $l < intval($player->Levels->HDD); $l++)
                        {
                            $HDDPrice = doubleval($HDDPrice * 1.65);

                        }

                    //print_r($HDDPrice);

                    if(intval($player->Inventory[0]->Item->Stats->Points) >= $HDDPrice)
                    {
                        $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - $HDDPrice /($player->Abilities->Trade/ 10/2 + 1);
                        $player->Levels->$component += 1;
                    } else {
                        print_r($Language[strval($session->Language)]["Resources"]["LackingResources1"]. $component. $Language[strval($session->Language)]["Resources"]["LackingResources2"] . intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1)).$Language[strval($session->Language)]["Resources"]["LackingResources3"]);
                    }
                } else {
                    print_r($Language[strval($session->Language)]["Warnings"]["HDDMaxLevel"]);
                }
            } else {
               $NetworkPrice = 10;
                if($player->Levels->Network > 0)
                    for($l = 0; $l < $player->Levels->Network; $l++)
                    {
                        $NetworkPrice = $NetworkPrice * 1.6;
                    }

                if(intval($player->Inventory[0]->Item->Stats->Points) >= $NetworkPrice)
                {
                    $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) - $NetworkPrice /($player->Abilities->Trade/ 10/2 + 1);
                    $player->Levels->$component += 1;
                } else {
                    print_r($Language[strval($session->Language)]["Resources"]["LackingResources1"]. $component. $Language[strval($session->Language)]["Resources"]["LackingResources2"] . intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1)).$Language[strval($session->Language)]["Resources"]["LackingResources3"]);
                }
            }
        }

        if(intval($player->Inventory[0]->Item->Stats->Points) < 0)
        {
            $player->Inventory[0]->Item->Stats->Points = 0;
        }
    }
    else {
        $defaultPrice = 100;

        $LevelPrice = $defaultPrice;
        for($l = 1; $l < intval($player->Levels->System); $l++)
            {
                if($l < 5)
                {
                    $LevelPrice = $LevelPrice + $LevelPrice;
                }
                else if($l >= 5 && $l < 10) {
                    $LevelPrice = $LevelPrice + $LevelPrice * 0.5;
                }
                else if($l >= 10 && $l < 15) {
                    $LevelPrice = $LevelPrice + $LevelPrice * 0.25;
                } else {
                    $LevelPrice = $LevelPrice + $LevelPrice * 0.12;
                }
            }

        if(intval($player->Inventory[0]->Item->Stats->Points) *1.05 > $LevelPrice)
        {
            $player->Abilities->Points += 1;
            $player->Levels->System = intval($player->Levels->System) + 1;
        } else {
            print_r($Language[strval($session->Language)]["Resources"]["LackingResources1"]. $component. $Language[strval($session->Language)]["Resources"]["LackingResources2"] . intval($Components[$component]['Prices'][intval($player->Levels->$component)] /($player->Abilities->Trade/ 10/2 + 1)).$Language[strval($session->Language)]["Resources"]["LackingResources3"]);
        }
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");

    return true;
}

function addItem($item)
{
    global $playerJSON;
    $xml = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    //print_r($item);

    /*for($i = 0; $i < sizeof($xml->Inventory->children()); $i++) {
        print_r($xml->Inventory[$i]."<br>");
    }*/


    $xml->Inventory->addChild("Item");
    foreach ($xml->Inventory->children() as $xItem) {
        if (!$xItem->ID) {

            $xItem->addChild("x", $item['x']);
            $xItem->addChild("y", $item['y']);
            $xItem->addChild("ID", $item['ID']);
            $xItem->addChild("Name", $item['Name']);
            $xItem->addChild("Class", $item['Class']);
            $xItem->addChild("Level", $item['Level']);
            $xItem->addChild("Status", "Quitar");
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

            /*print_r($xItem);


            print_r($xml);*/
            $xml->asXML("users/".$playerJSON['ID'].".xml");
            //print_r("users/".$playerJSON['ID'].".xml");

            break;
        }
    }

}

function addMaterials($item)
{
    global $playerJSON, $MaterialsDB, $Language;


    $session = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");
    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    $resourcesLimit = 150;

    for($l = 0; $l < $player->Levels->System; $l++)
    {
        $resourcesLimit *= 1.05;
    }

    $resourcesLimit = $resourcesLimit * doubleval(((intval($player->Abilities->Storage) / 10)*12)+1);

    if(intval($player->Resources->$item["Item"]) + intval($item['Quantity']) < $resourcesLimit)
    {
        $player->Resources->$item["Item"] = intval($player->Resources->$item["Item"]) + intval($item['Quantity']);

        foreach($MaterialsDB as $Material)
        {
            if($Material->Name == $item["Item"])
            {
                if($player->Inventory[0]->Item->Stats->Points - intval($Material->Price) * intval($item['Quantity']) > 0) {
                    $player->Inventory[0]->Item->Stats->Points -= intval($Material->Price) * intval($item['Quantity']);

                }
            }
        }
    } else {
        print_r('<p class="psmall">'.$Language[strval($session->Language)]["Resources"]["ResourcesLimit"].'</p>');
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");
}

function virusAttack($stat)
{
    global $playerJSON, $Components, $Language;

    statsUp();


    $session = simplexml_load_file("sessions/".$playerJSON['ID'].".xml");
    //Le resta los puntos
    $player2 = simplexml_load_file("users/".$stat['player2'].".xml");

    if(strval($stat['player1']) == strval($stat['player2']))
    {
        if(intval($player2->Shield) - $stat['points'] <= 0)
        {
            print_r("<p class='psmall'  style='color: red'>".$Language[strval($session->Language)]["Virus"]["Infected1"].intval($player2->Shield).$Language[strval($session->Language)]["Virus"]["Infected2"]. "</p>");

            $stat['points'] = $stat['points'] - $player2->Shield;
            $player2->Shield = 0;

            if(intval($player2->Inventory[0]->Item->Stats->Points) - $stat['points'] > 0)
            {
                $player2->Inventory[0]->Item->Stats->Points = intval($player2->Inventory[0]->Item->Stats->Points) - $stat['points'];
                print_r("<p class='psmall'  style='color: red; font-weight: bold'>".$Language[strval($session->Language)]["Virus"]["PointsLoss1"].intval($stat['points']). $Language[strval($session->Language)]["Virus"]["PointsLoss2"]."</p>");
            } else {
                print_r("<p class='psmall'  style='color: red; font-weight: bold'>".$Language[strval($session->Language)]["Virus"]["PointsLoss1"]. intval($player2->Inventory[0]->Item->Stats->Points) . $Language[strval($session->Language)]["Virus"]["PointsLoss2"]."</p>");
                $player2->Inventory[0]->Item->Stats->Points = 0;
            }

        } else if(intval($player2->Shield) - $stat['points'] > 0)
        {
            print_r("<p class='psmall'  style='color: red'>".$Language[strval($session->Language)]["Virus"]["Infected1"].intval($stat['points']). $Language[strval($session->Language)]["Virus"]["Infected2"]."</p>");
            $player2->Shield = intval($player2->Shield) - $stat['points'];
        }

        $player2->asXML("users/".$stat['player2'].".xml");

        return 0;
    } else {
        $player1 = simplexml_load_file("users/".$stat['player1'].".xml");
        if(intval($player1->Shield) - $stat['points'] < 0)
        {
            $player1->Shield = 0;
            $stat['points'] -= $player1->Shield;

            if(intval($player1->Inventory[0]->Item->Stats->Points) - intval($stat['points']) > 0)
            {
                print_r("<p class='psmall' style='color: violet; font-weight: bold;'>".$Language[strval($session->Language)]["Virus"]["PointsStolen1"] . intval($stat['points']).$Language[strval($session->Language)]["Virus"]["PointsStolen2"]. $player1->Name . "</p>");
                $player1->Inventory[0]->Item->Stats->Points = intval($player1->Inventory[0]->Item->Stats->Points) - $stat['points'];


                $player2->Inventory[0]->Item->Stats->Points = intval($player2->Inventory[0]->Item->Stats->Points) + $stat['points'];
            } else {
                print_r("<p class='psmall' style='color: violet; font-weight: bold;'>".$Language[strval($session->Language)]["Virus"]["PointsStolen1"] .intval($player1->Inventory[0]->Item->Stats->Points).$Language[strval($session->Language)]["Virus"]["PointsStolen2"]. $player1->Name . "</p>");
                $stat['points'] = intval($player1->Inventory[0]->Item->Stats->Points);
                $player2->Inventory[0]->Item->Stats->Points = intval($player2->Inventory[0]->Item->Stats->Points) + $stat['points'];
                $player1->Inventory[0]->Item->Stats->Points = 0;
            }

        } else {
            $player1->Shield -= $stat['points'];
            $stat['points'] -= $player1->Shield;
        }

        $player1->asXML("users/".$stat['player1'].".xml");
        $player2->asXML("users/".$stat['player2'].".xml");

        $xml = simplexml_load_file("sessions/".$stat['player2'].".xml");

        $xml->Virus->addChild("Report");
        foreach($xml->Virus->children() as $child)
        {
            if(!$child->Show)
            {
                $child->addChild("Points", $stat['points']);
                $child->addChild("From", $stat['from']);
                $child->addChild("Show", 1);
            }
        }

        $xml->asXML("sessions/".$stat['player1'].".xml");


    }
}

function virusBonus($points)
{
    global $playerJSON;

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    $MemoryPoints = 256;

    if(intval($player->Levels->Memory) > 0)
        $MemoryPoints = ($MemoryPoints * ($MemoryPoints/propInv(intval($player->Levels->Memory), 30))*intval($player->Levels->Memory));

    If(intval($player->Inventory[0]->Item->Stats->Points) + $points < $MemoryPoints)
        $player->Inventory[0]->Item->Stats->Points = intval($player->Inventory[0]->Item->Stats->Points) + $points;
    else
        $player->Inventory[0]->Item->Stats->Points = $MemoryPoints;

    $player->asXML("users/".$playerJSON['ID'].".xml");
}

function addModule($module)
{
    global $playerJSON;

    //print_r($module);

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    foreach($player->Inventory->children() as $child)
    {
        if(strval($child->ID) == strval($module['ID']))
        {
                $child->Status = "Equipar";
        }
    }

    if($player->Modules->Quantity->$module['Class'] < 3) {
        $player->Modules->Quantity->$module['Class'] += 1;
        foreach($player->Modules->Items->$module['Class']->children() as $stat => $key) {
            $player->Modules->Items->$module['Class']->$stat += ($module['Stats'][$stat]*($module['Level']/10+1));
        };
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");
}

function removeModule($module)
{
    global $playerJSON;

    $player = simplexml_load_file("users/".$playerJSON['ID'].".xml");

    foreach($player->Inventory->children() as $item)
    {
        if(strval($item->ID) == strval($module['ID']))
        {
            $item->Status = "Quitar";
        }
    }

    if($player->Modules->Quantity->$module['Class'] > 0) {
        $player->Modules->Quantity->$module['Class'] -= 1;
        foreach($player->Modules->Items->$module['Class']->children() as $stat => $key) {
            $player->Modules->Items->$module['Class']->$stat -= ($module['Stats'][$stat]*($module['Level']/10+1));
        };
    }

    $player->asXML("users/".$playerJSON['ID'].".xml");
}
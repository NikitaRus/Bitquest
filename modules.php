<?php
$aResult = array();

$item = $_REQUEST["item"];
$action = $_REQUEST["action"];
$id = $_REQUEST["id"];

//$jarr = json_encode($q);
$json = json_decode(str_replace('\"', '"', $item), true);
//$json = json_decode($utf, true);

//print_r($json);

/*print_r($item);
print_r($action);
print_r($id);
print_r($json);*/

// lookup all hints from array if $q is different from ""

if ($action !== "" && $id !== "") {

    /*$xml = @simplexml_load_file("users/100007245512782.xml");

    $stats = new SimpleXMLElement($xml);

    $stats->Stats->Inventory->Item[0]->Stats->Points = 100;

    //$time = time();
    $xml->asXML();*/

    //echo $q && "<br>";

    //echo "Tiempo restante: $tleft <br>";

    //if ($tleft >= 3) {

    //$xml = simplexml_load_file("users/100007245512782.xml");

    $xml = simplexml_load_file("store/modules.xml");

    //$stats = new SimpleXMLElement($xml);

    //print_r($xml);
    //echo $stats;

    $found = false;

    if($action == "remove") {
        //print_r("Borrando item ".$id);
        //var_dump($currentItems);

        $dom = null;

        foreach($xml->children() as $child)
        {
            if(strval($child->id) == strval($id))
            {

                $dom = dom_import_simplexml($child);
                //print_r("Item demas encontrado!");
                //print_r($item);
                //print_r($child);
                $dom->parentNode->removeChild($dom);

                break;
            }
        }
    }
    else if($action == "add")
    {
        //print_r("Agregando item");

        $found = false;

        foreach($xml->children() as $listing)
        {
            if(strval($listing->id) == strval($id))
            {
                $found = true;
                break;
            }
        }

        if($found == false)
        {
            $xml->addChild("Item");
            foreach($xml->children() as $child)
            {
                if(!$child->id) {
                    foreach($json as $item => $key) {
                        $child->addChild($item, $json[$item]);
                    }
                    $child->addChild("player", $json['player']);
                    break;
                }
            }
        }
    }

    $xml->asXML("store/modules.xml");
}
?>
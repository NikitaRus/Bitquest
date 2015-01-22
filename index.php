<?php
function pointsUp()
{

}

?>
<?php
$_SESSION['time'] = time();
session_start();
?>

<html>
<head>

    <title>Bitquest - Inside The System</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <h1><img src="img/bitquest%20logo1.png" width="30px" height="30px" style="position: relative;
top: 8px;
margin-right: 10px;
margin-left: 6px;">Bitquest</h1>

    <link rel="stylesheet" type="text/css" href="main.css">
    <script src="js/jquery.js"></script>
    <!--- <script type="application/javascript" src="jquery.js"></script> ---->
    <script type="application/javascript" src="js/XMLHandler.js"></script>
    <script type="application/javascript" src="js/globals.js"></script>
    <script type="application/javascript" src="js/language.js"></script>
    <script type="application/javascript" src="js/ModulesDB.js"></script>
    <script type="application/javascript" src="js/ItemsDB.js"></script>
    <script type="application/javascript" src="js/DescriptionDB.js"></script>
    <script type="application/javascript" src="js/bitquest.js"></script>
    <script type="application/javascript" src="js/InstructionsDB.js"></script>

</head>

<body>

<div id="fb-root"></div>
<div class="InvisibleContainer">

    <img src="img/bitquest%20logo1.png">
    <img id="Reserve" src="img/Reserve.jpg">
    <img id="AlternativeCurrent" src="img/AlternativeCurrent.jpg">
    <img id="Capacitors" src="img/Capacitors.jpg">
    <img id="Arithmetic" src="img/Arithmetic.jpg">
    <img id="Exploit" src="img/Exploit.jpg">
    <img id="PortMapping" src="img/PortMapping.jpg">
    <img id="Puntos" src="img/Puntos.jpg">
    <img id="Empty" src="img/Empty2.jpg">
    <img id="Blacklist" src="img/Blacklist.jpg">
    <img id="Repairer" src="img/Repairer.jpg">
    <img id="SystemPatch" src="img/SystemPatch.jpg">
    <img id="Store" src="img/Store.jpg">
    <img id="Map" src="img/Map.jpg">
    <img id="Firewall" src="img/firewall.png" style="height: 15px !important; width: 15px !important;">
    <img id="Antivirus" src="img/antivirus.png" style="height: 15px !important; width: 15px !important;">
    <img id="Item" src="img/item.png" style="height: 15px !important; width: 15px !important;">

    <img src="img/script.png" id="script">
    <img src="img/bug.png" id="bug">
    <img src="img/code.png" id="code">
    <img src="img/connector.png" id="connector">
    <img src="img/chip.png" id="chipimg">
    <img src="img/gate.png" id="gate">

    <img src="img/FirewallPoints.png" id="FirewallPoints">
    <img src="img/FirewallVirus.png" id="FirewallVirus">
    <img src="img/FirewallItem.png" id="FirewallItem">



</div>

<div class="Inventory Frame" style="position: absolute; left: 10px; top: 67px; min-height: 750px; position: absolute; width: 180px;">
    <div class="blackout3" id="Blackout3"></div>
    <h2 class="hlevel" id="titleCounter">Counter</h2>
    <canvas id="watchCvas" width="180px" height="68px" style="background: #2E434E;"></canvas>
    <h2 class="hlevel" id="titleMaterials">Materiales</h2>
    <table width="100%" style="padding-left: 10px; padding-right: 10px;" class="resourcesIndicator">
        <tr width="100%">
            <td width="25%">
                <p id="chips">0</p>
            </td>
            <td width="50%">
                <img src="img/chip.png" title="Chips">
            </td>
            <td width="25%">
                <p id="bugs">0</p>
            </td>
            <td>
                <img src="img/bug.png" title="Bugs">
            </td>
        </tr>
        <tr>
            <td width="25%">
                <p id="connectors">0</p>
            </td>
            <td>
                <img src="img/connector.png" title="Connectors">
            </td>
            <td width="25%">
                <p id="codes">0</p>
            </td>
            <td>
                <img src="img/code.png" title="Codes">
            </td>
        </tr>

        <tr>
            <td width="25%">
                <p id="gates">0</p>
            </td>
            <td>
                <img src="img/gate.png" title="Gates">
            </td>
            <td width="25%">
                <p id="scripts">0</p>
            </td>
            <td>
                <img src="img/script.png" title="Scripts">
            </td>
        </tr>
    </table>

    <h2 class="hlevel" id="titleStatistics">Estadisticas</h2>
    <table width="100%" height="200px" class="resourcesIndicator">
        <tr>
            <td width="86%"><button id="programacionButton" class="Botonpuntos">Programacion</button></td>
            <td><p id="programacionLevel">0</p></td>
        </tr>
        <tr>
            <td width="86%"><button id="ingenieriaButton" class="Botonpuntos">Ingenieria</button></td>
            <td><p id="ingenieriaLevel">0</p></td>
        </tr>
        <tr>
            <td width="86%"><button id="almacenamientoButton" class="Botonpuntos">Almacenamiento</button></td>
            <td><p id="almacenamientoLevel">0</p></td>
        </tr>
        <tr>
            <td width="86%"><button id="comercioButton" class="Botonpuntos">Comercio</button></td>
            <td><p id="comercioLevel">0</p></td>
        </tr>
        <tr>
            <td width="86%"><button id="arquitecturaButton" class="Botonpuntos">Arquitectura</button></td>
            <td><p id="arquitecturaLevel">0</p></td>
        </tr>
        <tr height="100%" align="center">
            <td><canvas id="statisticsCvas" height="160px" width="280px" style="width: 140px; height: 80px;"></canvas></td>
        </tr>
        <tr>
            <td width="86%"><p style="padding-left: 8px;" id="pointsLabel">Puntos</p></td>
            <td><p id="puntosHabilidad">0</p></td>
        </tr>
    </table>

    <h2 class="hlevel" id="titleMenu">Menu</h2>
    <table>
        <tr>
            <td><button id="drawShop" style="width: 32px;height: 32px;border: solid 2px;border-color: #757575;border-radius: 9px;background: #15104f;background-image: url('img/Store.jpg');background-size: 26px;margin-left: 5px;background-position: 1px;" title="Store"></button></td><td><h3 id="buttonStore"></h3></td>
            <td><button id="drawMap" style="width: 32px;height: 32px;border: solid 2px;border-color: #757575;border-radius: 9px;background: #15104f;background-image: url('img/Map.jpg');background-size: 28px;margin-left: 5px;" title="Map"></button></td><td><h3 id="buttonWorld"></h3></td>
            <td><button id="drawRank" style="width: 32px;height: 32px;border: solid 2px;border-color: #757575;border-radius: 9px;background: #15104f;background-image: url('img/Rank.jpg');background-size: 28px;margin-left: 5px;" title="Ranking"></button></td><td><h3 id="buttonRanking"></h3></td>
            <td><button id="drawStatistics" style="width: 32px;height: 32px;border: solid 2px;border-color: #757575;border-radius: 9px;background: #15104f;background-image: url('img/MenuStatistics.jpg');background-size: 28px;margin-left: 5px;" title="Instructions"></button></td><td><h3 id="buttonRanking"></h3></td>
        </tr>
    </table>
</div>
<div class="MainFrame">
    <div class="System">
        <div class="container1">
            <div class="column1">
                <div class="itemSquare CPU" id="CPU" title="CPU">

                </div>

                <div class="itemLevel statsCPU" id="CPUGUI">
                    <p id="CPUlevel" class="plevel" style="padding-left: 21px;">0</p>
                    <p id="CPUValue" class="pstats"><img src="img/points.gif"></p>
                    <p id="CPUPrice" class="pstats"></p>
                    <button id="CPUInfo" class="smallInfo">i</button>
                    <canvas id="cpuHealth" width="59px" height="3px" style="background: black;border: double 0px;position: absolute;left: 1px;top: 96px;width: 61px;"></canvas>
                </div>

                <div class="Slots" style="top: 183px; left: 15px;">
                    <table>
                        <tr>
                            <td id="CPUModule0" class="Slot">0</td>
                            <td id="CPUModule1" class="Slot">0</td>
                            <td id="CPUModule2" class="Slot">0</td>
                        </tr>
                    </table>
                </div>


                <div class="itemSquare Virus" id="Virus" title="Virus">

                </div>

                <div class="itemLevel statsVirus">
                    <button id="VirusInfo" class="smallInfo">i</button>
                    <p id="Viruslevel" class="plevel" style="padding-left: 21px;">0</p>
                    <p id="VirusStrength" class="pstats"><img src="img/virus.gif"></p>
                    <p id="VirusPrice" class="pstats"></p>
                    <p id="SpreadVirus" class="psmall pstats" style="line-height: 10px;
border-bottom: solid 1px;
border-top: solid 1px;
border-color: #8f8f8f;
background: #2A3C4B;
margin: 2px;
padding-bottom: 5px;
border-radius: 3px;
height: auto;
padding-left: 1px;
width: 56px;
margin-top: 17px;
padding-top: 3px;">Enviar</p>
                    <canvas id="virusHealth" width="59px" height="3px" style="background: black;border: double 0px;position: absolute;left: 1px;top: 96px;width: 61px;"></canvas>
                </div>

                <div class="Slots" style="left: 15px;">
                    <table>
                        <tr>
                            <td id="VirusModule0" class="Slot">0</td>
                            <td id="VirusModule1" class="Slot">0</td>
                            <td id="VirusModule2" class="Slot">0</td>
                        </tr>
                    </table>
                </div>


                <div class="itemSquareSmall Memory" id="Memory" title="RAM">

                </div>
                <div class="itemLevelSmall statsMemory">
                    <p id="Memorylevel" style="margin-left: 2px;">0</p>
                </div>

            </div>

            <div class="pointsSquare" style="text-align: center;">
                <p id="points">Puntos: 0</p>
            </div>

            <div class="column2">
                <table width="100%" align="right" height="100%">
                    <tr>
                        <td>

                        </td>
                    </tr>
                    <tr align="center">
                        <td height="100px">
                            <p class="hlevel" style="font-size: 20px; !important" id="Level">1</p>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <canvas id="PowerCvas" width="100px" height="20px"></canvas>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <p id="powerText" class="plevel" style="font-size: 14px !important;">Power: 30 / 30</p>
                        </td>
                    </tr>
                    <tr width="20px">
                        <td></td>
                    </tr>
                    <tr align="center">
                        <td>
                            <canvas id="HealthCvas" width="100px" height="100px"></canvas>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <p id="healthText" class="plevel" style="font-size: 14px !important;">Health: 100 / 100</p>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <button class="tabButton" id="drawInstructions" style="margin-top: 10px; width: 100px !important">Instrucciones</button>
                        </td>
                    </tr>
                    <tr>
                        <td height="36%">

                        </td>
                    </tr>
                </table>
                <div class="itemSquareSmall HDD" id="HDD" style="top:356px" title="HDD">

                </div>
                <div class="itemLevelSmall statsHDD">
                    <p id="HDDlevel" style="margin-left: 2px;">0</p>
                </div>

            </div>

            <div class="column3">
                <div class="itemLevel statsShield">

                    <p id="Shieldlevel" class="plevel" style="padding-left: 21px;">0</p>
                    <p id="ShieldHealing" class="pstats"><img src="img/healing.gif"></p>
                    <p id="ShieldPrice" class="pstats"></p>
                    <button id="ShieldInfo" class="smallInfo">i</button>
                    <canvas id="shieldHealth" width="59px" height="3px" style="background: black;border: double 0px;position: absolute;left: 1px;top: 96px;width: 61px;"></canvas>
                </div>

                <div class="itemSquare Shield" id="Shield" title="Antivirus">

                </div>

                <div class="Slots" style="top: 183px;">
                    <table>
                        <tr>
                            <td id="ShieldModule0" class="Slot">0</td>
                            <td id="ShieldModule1" class="Slot">0</td>
                            <td id="ShieldModule2" class="Slot">0</td>
                        </tr>
                    </table>
                </div>


                <div class="itemLevel statsPower">
                    <p id="Powerlevel" class="plevel" style="padding-left: 21px;">0</p>
                    <p id="PowerBurst" class="pstats"></p>
                    <p id="PowerSpeed" class="pstats"></p>
                    <p id="PowerCPU" class="pstats"></p>
                    <p id="PowerHealing" class="pstats"></p>
                    <p id="PowerPrice" class="pstats"></p>
                    <button id="PowerInfo" class="smallInfo">i</button>
                    <canvas id="powerHealth" width="59px" height="3px" style="background: black;border: double 0px;position: absolute;left: 1px;top: 96px;width: 61px;"></canvas>
                </div>

                <div class="itemSquare Power" id="Power" title="Battery">

                </div>

                <div class="Slots">
                    <table>
                        <tr>
                            <td id="PowerModule0" class="Slot">0</td>
                            <td id="PowerModule1" class="Slot">0</td>
                            <td id="PowerModule2" class="Slot">0</td>
                        </tr>
                    </table>
                </div>

                <div class="itemSquareSmall Network" style="margin-left: 90px;" id="Network" title="Network">

                </div>
                <div class="itemLevelSmall statsNetwork">
                    <p id="Networklevel" style="margin-left: 2px;">0</p>
                </div>

            </div>
        </div>

        <div class="container3" class="container3">
            <div class="Console" id="Console">
                <button class="tabButton" style="width: 150px; left: 20px; position: absolute;" id="consoleButton">Console</button><button class="tabButton" style="margin-left: 2px; width: 150px; left: 170px; position: absolute;" id="regionButton" onclick="readRegional();">Messages</button><button class="tabButton" style="margin-left: 2px; width: 150px; left: 322px; position: absolute;" id="privateButton" onclick="readPrivate();">Private</button>
                <div class="ConsoleText" id="ConsoleText">
                    Welcome to Bitquest. You can start playing the game by interacting with your computer components.

                </div>
                <div class="ConsoleText" id="RegionText">
                    Welcome to Bitquest global Chat.

                </div>

                <div class="ConsoleText" id="PrivateText">
                    Welcome to Bitquest private Chat.

                </div>

                <p style="font-size: 10pt; text-align: right;"> <input type="text" placeholder="Write a message" id="textMessage" style="width: 440px;padding-left: 10px;left: 20px;position: absolute;top: 707px; color: #35c5ff;background: #254E63;"><input type="text" placeholder="Facebook ID" id="textTo" style="width: 100px;padding-left: 10px;left: 20px;position: absolute;top: 677px; color: #35c5ff;background: #254E63;"><button id="buttonMessage" style="position: absolute;top: 706px;left: 465px; color: #35c5ff; background: #254E63; border-radius: 1px;">Message</button> v2.1</p>
            </div>
        </div>

        <canvas id="Battle" height="200px" class="Frame" width="600px" style="position: absolute; left: 0px; top: 772px; margin-bottom: 20px;"></canvas>
        <canvas id="Detected" height="54px" class="Frame" width="600px" style="position: relative; top: 14px;margin-bottom: 20px;"></canvas>
    </div>
    <div class="storeBox" id="storeBox">
        <table width="100%" align="center"><tr><td id="tabMaterials" class="tabButton">Recursos</td><td id="tabInventory" class="tabButton">Inventario</td><td id="tabSell" class="tabButton">Venta</td><td width="40%"></td><td align="right"><button id="closeShop" class="closeButton">X</button></td></tr></table>
        <div id="storeSquare" style="padding-top: 10px;"></div>
    </div>
    <div class="rankingBox" id="rankingBox" style="padding: 10px;">
        <table width="100%" align="center"><tr><td id="tabRanking" class="tabButton" style="width:200px">Ranking</td><td width="30%"></td><td align="right"><button id="closeRank" class="closeButton">X</button></td></tr></table>
        <div id="rankingSquare" style="padding-top: 10px;"></div>
    </div>
    <div class="statisticsBox" id="statisticsBox" style="padding: 10px;">
        <table width="100%" align="center"><tr><td id="tabStatistics" class="tabButton" style="width:200px">Statistics</td><td width="30%"></td><td align="right"><button id="closeStatistics" class="closeButton">X</button></td></tr></table>
        <div id="statisticsSquare" style="padding-top: 10px;"></div>
    </div>
    <div class="storeBox" id="instructionsBox" style="padding: 10px; width: 552px;">
        <table width="100%" align="center"><tr><td id="tabInstructions" class="tabButton" style="width:200px">Instrucciones</td><td width="30%"></td><td align="right"><button id="closeInstructions" class="closeButton">X</button></td></tr></table>
        <div id="instructionsSquare" style="padding-top: 10px;"></div>
    </div>
    <div class="blackout" id="Blackout">
    </div>
    <div class="Clearance" id="Clearance"></div>
    <div class="Initialize" id="Initialize">
        <h2 id="loginTitle" class="dcolor">Bienvenido a Bitquest</h2>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <h3 id="loginLogin" class="dcolor">Para iniciar el sistema presiona el boton de login.</h3>
        <p></p>
        <fb:login-button show-faces="false" width="200" max-rows="4"></fb:login-button><br>
        <p class="psmall" id="gameWarning" style="top: 500px;
left: 140px;
position: absolute;">Si el juego no inicia presiona F5 para actualizar.</p>
        <canvas height="30px" width="350px" id="loadingBar" style="border: solid 1px; border-radius: 50px; margin-top: 150px;"></canvas>
        <p class="psmall" id="loadingMessage">Esperando sesion...</p>

        <div
            class="fb-like"
            data-send="true"
            data-width="450"
            data-show-faces="true"
            style="padding-top: 40px; left: -30px; color: white !important">
        </div>
    </div>
</div>
<div class="Inventory Frame" style="position: absolute; float: left; left: 830px; top: 67px; min-height: 750px;">
    <div class="blackout2" id="Blackout2"></div>
    <table width="100%"><tr>
         <td>
             <p class="plevel" style="color: #2978a1;"  id="ProfileTab">Perfil</p>
         </td>
         <td>
             <p class="plevel" id="InventoryTab">Inventario</p>
         </td>
    </tr>
    </table>
    <canvas id="Inventory" width="320px" height="680px" style="width: 160px; height: 340px; padding: 10px;"></canvas>
    <div class="Profile" id="Profile" style="width: 160px; height: 340px; overflow: auto;">
    </div>

    <div class="Ranking" id="Ranking" style="min-height: 200px; margin-top: -6px;">

    </div>
</div>
<div class="infoBox" id="infoBox"><div id="infoSquare">Bienvenido a Bitquest. Para continuar presiona el boton de Ok.</div><br><button onclick="nextInfo();">Ok</button></div>
<div class="mapBox" id="mapBox" style="width:1000px; height:640px">
    <!---<table><tr><td><h4 id="titleMap1">Map</h4></td><td>-</td><td><h4 id="titleMap2"></h4></td></tr></table>--->
    <button class="closeButton" style="
    left: 920px;
    position: absolute;
    border-radius: 25px 25px 25px 25px;
    border: solid 8px;  border-color: #336A86;
    background: #D5DBDF;
    color: #000000;
    width: 50px;
    height: 50px;
    top: 13px;
" id="mapClosebutton">X</button>
    <canvas id="bitCvas" width="992" height="667"></canvas>
</div>
<div id="messageBox" style="
    width: 300px;
    height: 160px;
    border: double 4px;
    border-color: #254E63;
    border-radius: 4px;
    text-align: center;
    background-color: rgba(80, 110, 128, 0.86);
    position: absolute;
    left: 358px;
    top: 125px;
">
    <h3 id="titleImportant">Importante</h3>
    <p id="selectLabel">Para continuar selecciona una un lugar en el mapa.</p>
    <button class="tabButton" onclick="$('#messageBox').hide();">Ok</button>
</div>
</body>
</html>

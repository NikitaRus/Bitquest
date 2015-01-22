/**
 * Created by N1 on 4/13/14.
 */

function showClearance(image, x, y, Data) {

    $('#Clearance').show();
    Clearance = document.getElementById("Clearance");
    Part = document.getElementById("CPU");
    Clearance.innerHTML = "";
    Clearance.innerHTML +=
        "<table>" +
            "<tr>" +
            "<td>" +
            "<img width='100px' height='100px' src='" + image + "'><button onclick='hideClearance()' style='position: absolute; top: 0px; left: 375px; border-radius: 0 3 0 6px; background: #678fa3; border: solid 1px;'>X</button>" +
            "</td>" +
            "<td>" +
            "<div style='height: 220px' class='autoscroll'>" +
            "<p><b>" + Data.Title + "</b></p>" +
            "<p>" + Data.Description + "</p>" +
            "<p><i>" + Data.Attributes + "</i></p>" +
            "</div>" +
            "</td>" +
            "</tr>" +
            "</table>";
    Clearance.style.left = x + "px";
    Clearance.style.top = y + "px";

}

var lang = "es";

function hideClearance() {
    $('#Clearance').hide();
}

function showGUI(element) {
    CPU = document.getElementById("CPUGUI");
    CPUleft = CPU.style.left;

    switch (element) {
        case "CPUGUI":
            if (parseInt(CPU.style.left) < 200)
                CPU.style.left = String(parseInt(CPU.style.left + 1));
    }
}

function hideGUI(element) {
    CPU = document.getElementById("CPUGUI");
    CPUleft = CPU.style.left;

    switch (element) {
        case "CPUGUI":
            if (parseInt(CPU.style.left) > 0)
                CPU.style.left = String(parseInt(CPU.style.left - 1));
    }
}

var infoNumber = 0;

function nextInfo()
   {
        switch(infoNumber)
            {
                case 0:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText2'>"+Language[lang].Description.infoText2+"</p>";
                infoNumber += 1;
                break;

                case 1:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText3'>"+Language[lang].Description.infoText3+"</p>";
                document.getElementById("infoBox").style.left = "296px";
                infoNumber += 1;
                break;

                case 2:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText4'>"+Language[lang].Description.infoText4+"</p>";
                document.getElementById("infoBox").style.left = "350px";
                document.getElementById("infoBox").style.top = "300px";
                infoNumber += 1;
                break;

                case 3:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText5'>"+Language[lang].Description.infoText5+"</p>";
                document.getElementById("infoBox").style.left = "296px";
                document.getElementById("infoBox").style.top = "300px";
                infoNumber += 1;
                break;

                case 4:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText6'>"+Language[lang].Description.infoText6+"</p>";
                document.getElementById("infoBox").style.left = "100px";
                document.getElementById("infoBox").style.top = "280px";
                infoNumber += 1;
                break;

                case 5:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText7'>"+Language[lang].Description.infoText7+"</p>";
                document.getElementById("infoBox").style.left = "630px";
                document.getElementById("infoBox").style.top = "150px";
                infoNumber += 1;
                break;

                case 6:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText8'>"+Language[lang].Description.infoText8+"</p>";
                document.getElementById("infoBox").style.left = "400px";
                document.getElementById("infoBox").style.top = "220px";
                infoNumber += 1;
                break;

                case 7:
                document.getElementById("infoSquare").innerHTML = "<p id='infoText9'>"+Language[lang].Description.infoText9+"</p>";
                document.getElementById("infoBox").style.left = "400px";
                document.getElementById("infoBox").style.top = "100px";
                infoNumber += 1;
                break;

                case 8:
                $('#infoBox').hide();
                break;
            }
   }

var map = [
    [432, 108],
    [450, 108],
    [324, 126],
    [342, 126],
    [414, 126],
    [432, 126],
    [450, 126],
    [306, 144],
    [342, 144],
    [378, 144],
    [396, 144],
    [414, 144],
    [432, 144],
    [450, 144],
    [468, 144],
    [306, 162],
    [378, 162],
    [396, 162],
    [414, 162],
    [432, 162],
    [450, 162],
    [702, 162],
    [324, 180],
    [360, 180],
    [378, 180],
    [396, 180],
    [414, 180],
    [432, 180],
    [450, 180],
    [666, 180],
    [684, 180],
    [702, 180],
    [198, 198],
    [252, 198],
    [270, 198],
    [396, 198],
    [414, 198],
    [432, 198],
    [450, 198],
    [630, 198],
    [648, 198],
    [666, 198],
    [684, 198],
    [702, 198],
    [720, 198],
    [738, 198],
    [90, 216],
    [108, 216],
    [126, 216],
    [162, 216],
    [288, 216],
    [396, 216],
    [414, 216],
    [432, 216],
    [450, 216],
    [630, 216],
    [648, 216],
    [666, 216],
    [684, 216],
    [702, 216],
    [720, 216],
    [738, 216],
    [756, 216],
    [774, 216],
    [792, 216],
    [810, 216],
    [846, 216],
    [90, 234],
    [108, 234],
    [126, 234],
    [144, 234],
    [162, 234],
    [180, 234],
    [198, 234],
    [216, 234],
    [234, 234],
    [252, 234],
    [288, 234],
    [414, 234],
    [432, 234],
    [450, 234],
    [558, 234],
    [576, 234],
    [594, 234],
    [612, 234],
    [630, 234],
    [648, 234],
    [666, 234],
    [684, 234],
    [702, 234],
    [720, 234],
    [738, 234],
    [756, 234],
    [774, 234],
    [792, 234],
    [810, 234],
    [828, 234],
    [846, 234],
    [864, 234],
    [90, 252],
    [108, 252],
    [126, 252],
    [144, 252],
    [162, 252],
    [180, 252],
    [198, 252],
    [216, 252],
    [234, 252],
    [414, 252],
    [432, 252],
    [450, 252],
    [540, 252],
    [558, 252],
    [576, 252],
    [594, 252],
    [612, 252],
    [630, 252],
    [648, 252],
    [666, 252],
    [684, 252],
    [702, 252],
    [720, 252],
    [738, 252],
    [756, 252],
    [774, 252],
    [792, 252],
    [810, 252],
    [828, 252],
    [846, 252],
    [144, 270],
    [162, 270],
    [180, 270],
    [198, 270],
    [216, 270],
    [234, 270],
    [288, 270],
    [414, 270],
    [522, 270],
    [540, 270],
    [558, 270],
    [576, 270],
    [594, 270],
    [612, 270],
    [630, 270],
    [648, 270],
    [666, 270],
    [684, 270],
    [702, 270],
    [720, 270],
    [738, 270],
    [756, 270],
    [774, 270],
    [162, 288],
    [180, 288],
    [198, 288],
    [216, 288],
    [234, 288],
    [288, 288],
    [306, 288],
    [414, 288],
    [504, 288],
    [522, 288],
    [540, 288],
    [558, 288],
    [576, 288],
    [594, 288],
    [612, 288],
    [630, 288],
    [648, 288],
    [666, 288],
    [684, 288],
    [702, 288],
    [720, 288],
    [738, 288],
    [756, 288],
    [180, 306],
    [198, 306],
    [216, 306],
    [234, 306],
    [252, 306],
    [270, 306],
    [288, 306],
    [468, 306],
    [486, 306],
    [504, 306],
    [522, 306],
    [540, 306],
    [558, 306],
    [576, 306],
    [594, 306],
    [612, 306],
    [630, 306],
    [648, 306],
    [666, 306],
    [684, 306],
    [702, 306],
    [720, 306],
    [738, 306],
    [756, 306],
    [774, 306],
    [180, 324],
    [198, 324],
    [216, 324],
    [234, 324],
    [252, 324],
    [270, 324],
    [342, 324],
    [360, 324],
    [378, 324],
    [504, 324],
    [558, 324],
    [594, 324],
    [612, 324],
    [630, 324],
    [648, 324],
    [666, 324],
    [684, 324],
    [702, 324],
    [720, 324],
    [738, 324],
    [756, 324],
    [180, 342],
    [198, 342],
    [216, 342],
    [234, 342],
    [252, 342],
    [270, 342],
    [342, 342],
    [360, 342],
    [378, 342],
    [396, 342],
    [450, 342],
    [522, 342],
    [540, 342],
    [558, 342],
    [594, 342],
    [612, 342],
    [630, 342],
    [648, 342],
    [666, 342],
    [684, 342],
    [702, 342],
    [720, 342],
    [198, 360],
    [216, 360],
    [234, 360],
    [252, 360],
    [378, 360],
    [396, 360],
    [450, 360],
    [468, 360],
    [540, 360],
    [558, 360],
    [576, 360],
    [594, 360],
    [612, 360],
    [630, 360],
    [648, 360],
    [666, 360],
    [684, 360],
    [702, 360],
    [720, 360],
    [216, 378],
    [432, 378],
    [450, 378],
    [468, 378],
    [486, 378],
    [504, 378],
    [522, 378],
    [540, 378],
    [558, 378],
    [612, 378],
    [630, 378],
    [648, 378],
    [666, 378],
    [684, 378],
    [702, 378],
    [720, 378],
    [306, 396],
    [324, 396],
    [432, 396],
    [450, 396],
    [468, 396],
    [486, 396],
    [504, 396],
    [522, 396],
    [558, 396],
    [630, 396],
    [684, 396],
    [306, 414],
    [324, 414],
    [342, 414],
    [360, 414],
    [432, 414],
    [450, 414],
    [468, 414],
    [486, 414],
    [504, 414],
    [522, 414],
    [540, 414],
    [558, 414],
    [306, 432],
    [324, 432],
    [342, 432],
    [360, 432],
    [378, 432],
    [486, 432],
    [504, 432],
    [522, 432],
    [540, 432],
    [324, 450],
    [342, 450],
    [360, 450],
    [378, 450],
    [486, 450],
    [504, 450],
    [522, 450],
    [324, 468],
    [342, 468],
    [360, 468],
    [504, 468],
    [522, 468],
    [324, 486],
    [342, 486],
    [504, 486],
    [522, 486],
    [324, 504],
    [504, 504],
    [522, 504]
];

regions = [
    "Hexa",
    "Brada",
    "Rada",
    "Doro",
    "Rida",
    "Mila",
    "Bogo",
    "Mira",
    "Rofa",
    "Delan",

    "Ralen",
    "Mada",
    "Sera",
    "Gada",
    "Foro",
    "Gizo",
    "Mora",
    "Heda",
    "Tefa",
    "Jola",

    "Greter",
    "Richar",
    "Farmi",
    "Kol",
    "Jota",
    "Jade",
    "Rodi",
    "Olan",
    "Jera",
    "Rof",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""

    ];

(function () {

    var bitmap = [];
    var playermap = [];

    for (y = 0; y <= 44; y++) {
        col = [];
        col2 = [];
        bitmap.push(col);
        playermap.push(col2);
        for (x = 0; x <= 24; x++) {
            row = {
                Players: 0
            };
            bitmap[y].push(0);

            playermap[y].push(row);
        }
    }

    var region = 0;
    var positionx = 0;
    var positiony = 0;
    var position = 0;
    players = [];

    var nX = 0;
    var nY = 0;

    var second = false;
    var mapShown = false;

    var Mx = 0;
    var My = 0;
    var pX = 0;
    var pY = 0;

    var tmpRegion = 0;
    var tmpPosX = 0;
    var tmpPosY = 0;
    var first = true;
    var sendItem = false;

    function drawMap(pX, pY) {
        if (first) {
            //tmpRegion = region;
            first = false;
            tmpRegion = region;

            regionXml = loadXMLDoc("region/" + region + ".xml");

            if (regionXml) {
                XRegion = regionXml.getElementsByTagName("Region")[0];
                XPlayers = XRegion.getElementsByTagName("Player");

                for (i = 0; i < XPlayers.length; i++) {
                        tmpPosX = positionx;
                        tmpPosY = positiony;

                        var regionPos = [];

                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("x")[0].textContent));
                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("y")[0].textContent));
                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("p")[0].textContent));


                        player = {
                            name: XPlayers[i].getElementsByTagName("Name")[0].textContent,
                            id: XPlayers[i].getElementsByTagName("ID")[0].textContent,
                            region: regionPos,
                            level: parseInt(XPlayers[i].getElementsByTagName("System")[0].textContent),
                            cpu: parseInt(XPlayers[i].getElementsByTagName("CPU")[0].textContent),
                            power: parseInt(XPlayers[i].getElementsByTagName("Power")[0].textContent),
                            virus: parseInt(XPlayers[i].getElementsByTagName("Virus")[0].textContent),
                            shield: parseInt(XPlayers[i].getElementsByTagName("Shield")[0].textContent),
                            network: parseInt(XPlayers[i].getElementsByTagName("Network")[0].textContent),
                            hdd: parseInt(XPlayers[i].getElementsByTagName("HDD")[0].textContent),
                            ram: parseInt(XPlayers[i].getElementsByTagName("Memory")[0].textContent)
                        };

                        players.push(player);


                }
            }
        }
         else if(!first && tmpRegion != region)
        {
            tmpRegion = region;
            players = [];
            regionXml = loadXMLDoc("region/" + region + ".xml");

            if (regionXml) {
                XRegion = regionXml.getElementsByTagName("Region")[0];
                XPlayers = XRegion.getElementsByTagName("Player");

                playersFound = false;
                for (i = 0; i < XPlayers.length; i++) {
                        tmpPosX = positionx;
                        tmpPosY = positiony;
                        playersFound = true;
                        var regionPos = [];

                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("x")[0].textContent));
                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("y")[0].textContent));
                        regionPos.push(parseInt(XPlayers[i].getElementsByTagName("p")[0].textContent));


                        player = {
                            name: XPlayers[i].getElementsByTagName("Name")[0].textContent,
                            region: regionPos,
                            level: parseInt(XPlayers[i].getElementsByTagName("System")[0].textContent),
                            cpu: parseInt(XPlayers[i].getElementsByTagName("CPU")[0].textContent),
                            power: parseInt(XPlayers[i].getElementsByTagName("Power")[0].textContent),
                            virus: parseInt(XPlayers[i].getElementsByTagName("Virus")[0].textContent),
                            shield: parseInt(XPlayers[i].getElementsByTagName("Shield")[0].textContent),
                            network: parseInt(XPlayers[i].getElementsByTagName("Network")[0].textContent),
                            hdd: parseInt(XPlayers[i].getElementsByTagName("HDD")[0].textContent),
                            ram: parseInt(XPlayers[i].getElementsByTagName("Memory")[0].textContent)
                        };

                        players.push(player);

                }

                if (!playersFound) {
                    players = [];
                }
            }
        }


        var tmpNum = 0;

        if ((pX * 18 + 90 - 18) > 20 && (pX * 18 + 90 - 18) < 470 && (pY * 18 + 108) > 20 && (pY * 18 + 108) < 300) {
            bitBox.clearRect(18, 18, 453, 304);

            bitBox.strokeRect((pX * 18 + 90 - 18), (pY * 18 + 108), 14, 14);

            bitBox.beginPath();
            bitBox.moveTo(20, 20);
            bitBox.lineTo((pX * 18 + 90 - 18), (pY * 18 + 108));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(470, 20);
            bitBox.lineTo((pX * 18 + 90 - 5), (pY * 18 + 108));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(20, 320);
            bitBox.lineTo((pX * 18 + 90 - 18), (pY * 18 + 108) + 13);
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(470, 320);
            bitBox.lineTo((pX * 18 + 90 - 5), (pY * 18 + 108 + 13));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.strokeRect(20, 20, 450, 300);
        } else {
            bitBox.beginPath();
            bitBox.moveTo(20, 20);
            bitBox.lineTo((pX * 18 + 90 - 18), (pY * 18 + 108));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(470, 20);
            bitBox.lineTo((pX * 18 + 90 - 5), (pY * 18 + 108));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(20, 320);
            bitBox.lineTo((pX * 18 + 90 - 18), (pY * 18 + 108) + 13);
            bitBox.stroke();
            bitBox.closePath();

            bitBox.beginPath();
            bitBox.moveTo(470, 320);
            bitBox.lineTo((pX * 18 + 90 - 5), (pY * 18 + 108 + 13));
            bitBox.stroke();
            bitBox.closePath();

            bitBox.clearRect(18, 18, 453, 304);
            bitBox.strokeRect(20, 20, 450, 300);
        }


        if(position == 0 && players.length > 0) {
            bitBox.fillStyle = 'white';
            bitBox.clearRect(330, 30, 102, 111);
            bitBox.strokeRect(330, 30, 100, 111);
            bitBox.fillRect(331, 31, 98, 110);
            bitBox.strokeText("Player: " + Stats.Name, 340, 50);
            bitBox.strokeText("[" + regions[region] + "-" + region + "]", 340, 70);
            bitBox.strokeText("System: " + Stats.Levels.System, 340, 90);
            bitBox.strokeText("Shield: " + Stats.Levels.Shield, 340, 110);
            bitBox.strokeText("Virus: " + Stats.Levels.Virus, 340, 130);
        } else if(position == 0)
        {
            bitBox.fillStyle = 'white';
            bitBox.clearRect(330, 30, 102, 51);
            bitBox.strokeRect(330, 30, 100, 51);
            bitBox.fillRect(331, 31, 98, 50);
            bitBox.strokeText("Player: " + Stats.Name, 340, 50);
            bitBox.strokeText("[" + regions[region] + "-" + region + "]", 340, 70);
        }

        //console.log(pX + " " + pY);

        for (var y = 0; y < 6; y++) {
            for (var x = 0; x < 6; x++) {
                bitBox.strokeRect(20 + x * 50, 20 + y * 50, 50, 50);
                tmpNum++;
                for (pl in players)
                    if (tmpNum == players[pl].region[2]) {
                        if (pX - 1 == players[pl].region[0] && pY - 1 == players[pl].region[1]) {
                            drawBoxes(20 + x * 50, 20 + y * 50, players[pl]);

                        }
                    }
            }
        }

        if(Stats.x != null && Stats.y != null && Stats.p != null)
        {
            bitBox.fillStyle = 'white';
            bitBox.strokeRect(340, 260, 75, 20);
            bitBox.fillRect(341, 261, 73, 18);
            bitBox.strokeText(Language[lang].Button.Leave, 352, 274);
        }

        if (Stats.x == null && Stats.y == null && Stats.p == null) {
            bitBox.fillStyle = 'white';
            bitBox.strokeRect(340, 285, 75, 20);
            bitBox.fillRect(341, 286, 73, 18);
            bitBox.strokeText(Language[lang].Button.Select, 352, 299);
        }
    }


    function drawBoxes(x, y, player) {
        bitBox.clearRect(x + 1, y + 1, 49, 49);
        bitBox.fillStyle = "black";
        //bitBox.strokeRect(x+0, y+0, 50, 49);
        bitBox.beginPath();
        bitBox.moveTo(x + 5, y + 5);
        bitBox.lineTo(x + 5, y + 41);
        bitBox.stroke();
        bitBox.closePath();

        //bitBox.fillRect(x+part-0.5, y+part, 13, 12.5);

        bitBox.beginPath();
        bitBox.moveTo(x + 5, y + 5);
        bitBox.lineTo(x + 41, y + 5);
        bitBox.stroke();
        bitBox.closePath();

        //bitBox.strokeRect(x+5, y+5, 37, 37);
        drawBox(x + 5, y + 5, player.level);
        drawBox(x + 5, y + 17, player.cpu);
        drawBox(x + 5, y + 29, player.power);
        drawBox(x + 17, y + 5, player.virus);
        drawBox(x + 17, y + 19, player.shield);
        drawBox(x + 17, y + 19, player.ram);
        drawBox(x + 17, y + 29, player.network);
        drawBox(x + 29, y + 5, player.hdd);
    }

    function drawBox(x, y, part) {


        bitBox.fillStyle = "black";
        bitBox.fillRect(x + part - 0.5, y + part, 13, 12.5);


        bitBox.lineWidth = 1;
        //LT
        bitBox.beginPath();
        bitBox.moveTo(x, y);
        bitBox.lineTo(x + part - 1, y + part);
        bitBox.stroke();
        bitBox.closePath();

        //RT
        bitBox.beginPath();
        bitBox.moveTo(x + 12, y);
        bitBox.lineTo(x + 12 + part, y + part);
        bitBox.stroke();
        bitBox.closePath();

        //LB;
        bitBox.beginPath();
        bitBox.moveTo(x, y + 12);
        bitBox.lineTo(x + part, y + 12 + part);
        bitBox.stroke();
        bitBox.closePath();

        bitBox.strokeStyle = "black";
    }


    //Values
    var points = 120;
    var health = 100;
    var maxHealth = 100;
    var power = 30;

    //Modules
    var CPUConsumption = 0;
    var Power = 0;
    var Recharge = 0;
    var ShieldConsumption = 0;

    //Arrays
    var Rank = [];

    var Sectors = [];
    var Inventory = [];
    var Modules = [];

    var Buttons = [];

    var dataReady = false;
    var verifieduser;

    var MPower = [];
    var MShield = [];
    var MVirus = [];
    var MCPU = [];

    //Player data
    Stats = {
        Name: "Player" + Math.floor(Math.random() * 1000),
        ID: null,
        Picture: null,
        x: null,
        y: null,
        p: null,
        Levels: {
            System: 1,
            CPU: 0,
            Power: 0,
            Shield: 0,
            Virus: 0,
            Memory: 1,
            HDD: 0,
            Network: 1
        },

        Abilities: {
            Programming: 0,
            Engineering: 0,
            Storage: 0,
            Trade: 0,
            Architecture: 0,
            Points: 0
        },

        Resources: {
            Chips: 0,
            Connectors: 0,
            Gates: 0,
            Codes: 0,
            Scripts: 0,
            Bugs: 0
        },

        Modules: {
            Items: {
                Power: MPower,
                Shield: MShield,
                Virus: MVirus,
                CPU: MCPU
            },

            Stats: {
                Power: {
                    Recharge: 0,
                    CPUConsumption: 0,
                    ShieldConsumption: 0,
                    Power: 0,
                    Health: 0
                },

                CPU: {
                    CPUBoost: 0,
                    Health: 0
                },

                Virus: {
                    VirusBoost: 0,
                    VirusTimer: 0,
                    Health: 0
                },

                Shield: {
                    VirusResistance: 0,
                    VirusAvoidance: 0,
                    StabilityBoost: 0,
                    Health: 0
                }
            },

            Quantity: {
                Power: 0,
                CPU: 0,
                Shield: 0,
                Virus: 0
            }
        },
        Inventory: Inventory

    };

    var items = [];
    var list = [];

    var changes = true;

    function sell(item) {

        var Item;
        Item = item[0].id.slice(4, item[0].id.length, item[0].id);
        var price = parseInt(document.getElementById("price" + Item).value);
        document.getElementById("price" + Item).value = "--";

        console.log(Item);
        console.log(price);

        if (price > 0)
            for (var i = 0; i < Stats.Inventory.length; i++) {
                if (Item == Stats.Inventory[i].ID) {
                    listing = {
                        from: Stats.Name,
                        item: Stats.Inventory[i].Name,
                        class: Stats.Inventory[i].Class,
                        level: Stats.Inventory[i].Level,
                        id: Stats.Inventory[i].ID,
                        price: price,
                        player: Stats.ID
                    };


                    //Stats.Inventory[0].Stats.Points += Module[Stats.Inventory[i].Class][Stats.Inventory[i].Name].Price;

                    //list.push(listing);
                    changes = true;

                    storeXml = loadXMLDoc("sessions/" + Stats.ID + ".xml");
                    Session = storeXml.getElementsByTagName("Session")[0];
                    Store = Session.getElementsByTagName("Store")[0];
                    StoreItems = Store.getElementsByTagName("Item");


                    saveListings("add", listing.id, listing);
                    actionPlayer(Stats.ID, Stats.Name, "removeItem", Stats.Inventory[i]);


                    Stats.Inventory.splice(i, 1);
                    saveData();
                    drawInventory();
                    tabSell();
                    break;
                }
            }
    }

    function purchase(item) {
        //console.log(item);
        //alert(item[0].id);
        //alert();
        //var lowerItem = item.toLowerCase();


        //player1.lowerItem += quantity;

        var keys = [];
        /*for(var k in player1)
         keys.push(k);

         console.log(keys);*/
        var Item;

        if (storetab == "materials") {

            Item = item[0].id.slice(8, item[0].id.length, item[0].id);
            var quantity = parseInt(document.getElementById("quantity" + Item).value);
            document.getElementById("quantity" + Item).value = "";

            if (quantity) {
                for (var i = 0; i < MaterialsDB.length; i++) {
                    if (MaterialsDB[i].Name == Item) {
                        if (Stats.Inventory[0].Stats.Points > MaterialsDB[i].Price * quantity) {
                            if (Stats.Resources[Item] + quantity < resourcesLimit) {
                                Stats.Resources[Item] += quantity;
                                Stats.Inventory[0].Stats.Points -= MaterialsDB[i].Price * quantity;
                                drawStats();
                                material = {
                                    Item: Item,
                                    Quantity: quantity
                                };
                                actionPlayer(Stats.ID, Stats.Name, "addMaterials", material);
                                break;
                            }
                        } else {
                            Console.innerHTML += '<p class="psmall">' + Language[lang].Console.NotEnoughForMat1 + parseInt((parseInt(MaterialsDB[i].Price) * quantity) - Stats.Inventory[0].Stats.Points) + Language[lang].Console.NotEnoughForMat2 + quantity + ' ' + Item + '.</p>';
                        }
                    }
                }


            } else {
                Console.innerHTML += '<p class="psmall">'+ Language[lang].Console.OneOrMore +'</p>'
            }
        }
        else if (storetab == "inventory") {
            var added = false;
            var avX, avY;

            Item = item[0].id.slice(8, item[0].id.length, item[0].id);
            //console.log(Item);

            for (var i = 0; i < list.length; i++) {
                //console.log(Module);
                if (list[i].id == Item) {
                    for (var l = 0; l < Stats.Inventory.length; l++) {
                        if (list[i].id == Stats.Inventory[l].ID) {
                            tabInventory();
                            break;
                        }
                    }

                    if (list[i].price < Stats.Inventory[0].Stats.Points || list[i].player == Stats.ID) {
                        if (Stats.Inventory.length > 0) {

                            for (var y = 0; y <= 4; y++) {
                                for (var x = 0; x <= 3; x++) {
                                    var available = true;

                                    for (var l = 0; l < Stats.Inventory.length; l++) {
                                        if (Stats.Inventory[l]) {
                                            if (Stats.Inventory[l].x == x && Stats.Inventory[l].y == y) {
                                                available = false;
                                            }
                                        }
                                    }

                                    if (available) {
                                        avX = x;
                                        avY = y;
                                        break;
                                    }

                                }
                                if (available)
                                    break;
                            }


                            var ItemStats = {};

                            for (stat in Module[list[i].class][list[i].item]) {
                                if (stat != "Price" && stat != "Name")
                                    ItemStats[stat] = Module[list[i].class][list[i].item][stat];
                            }

                            Item = { "x": avX,
                                "y": avY,
                                "Class": list[i].class,
                                "Name": list[i].item,
                                "ID": list[i].id,
                                "Stats": ItemStats,
                                "Status": "Quitar",
                                "Level": list[i].level
                            };


                            if(Stats.Inventory.length < Stats.Levels.HDD + 2) {
                                Stats.Inventory.push(Item);

                                added = true;

                                tabInventory();

                                if (list[i].player != Stats.ID) {
                                    Stats.Inventory[0].Stats.Points -= list[i].price;
                                    saveListing(list[i].id, list[i].item, list[i].level, list[i].price, 1, list[i].player, list[i].from);
                                }
                                drawStats();
                                actionPlayer(Stats.ID, Stats.Name, "addItem", Item);
                                if(list[i].from != Stats.Name)
                                sendNotification(list[i].player, list[i].from, list[i].from + " purchased your " + list[i].item + " at a price of " + list[i].price + " points.");
                            }
                        }
                    } else {

                        if (list[i].price < Stats.Inventory[0].Stats.Points) {
                            var ItemStats = {};

                            for (stat in Module[list[i].class][list[i].item]) {
                                if (stat != "Price" && stat != "Name")
                                    ItemStats[stat] = Module[list[i].class][list[i].item][stat];
                            }

                            //console.log(Stats);

                            Stats.Inventory.push(
                                { "x": 0,
                                    "y": 0,
                                    "Class": list[i].class,
                                    "Name": list[i].item,
                                    "ID": list[i].id,
                                    "Stats": ItemStats,
                                    "Status": "Quitar",
                                    "Level": list[i].level
                                }
                            );

                            added = true;

                            Stats.Inventory[0].Stats.Points -= list[i].price;
                            drawStats();
                        }

                    }

                    if (added) {
                        //changes = true;
                        list.splice(i, 1);
                        saveListings("remove", Item.ID, Item);
                        drawInventory();
                        saveData();
                        tabInventory();
                    }

                }

                if (added)
                    break;
            }
        }
    }

    var storeButtons = [];
    var labels = [];
    var materials = [];
    var inventory = [];

    var storetab = "materials";


    function addHandlers(items) {
        storeButtons = [];
        for (var i = 0; i < items.length; i++) {
            storeButtons.push(document.getElementById(items[i].Button));


            //console.log(items);
        }

        //console.log(storeButtons);


        for (var i = 0; i < storeButtons.length; i++) {
            //var item = items[i].Item;
            storeButtons[i].addEventListener("click", function () {
                //console.log(items[i].Item);
                //e.preventDefault();
                var item = $(this);
                if (storetab != "sell")
                {
                    purchase(item);
                }
                else if(storetab == "sell")
                {
                    sell(item);
                }
            }, false);
        }
    }

    function tabMaterials() {
        storetab = "materials";
        items = [];
        document.getElementById("storeSquare").innerHTML = "";
        for (var m = 0; m < MaterialsDB.length; m++) {
            var item = MaterialsDB[m];

            //console.log(MaterialsDB[m]);

            document.getElementById("storeSquare").innerHTML += "<div class=itemRow>" +
                "<table>" +
                "<tr>" +
                "<td width=30px><img width=30px height=30px src=img/" + item.Name.toLowerCase().slice(0, item.Name.length - 1) + ".png></td>" +
                "<td width=60px align=left><p>" + item.Price + "$</p></td>" +
                "<td width=400px align=left><p>" + item.Name + "</p></td>" +
                "<td width=50px><input type=text placeholder=# id=quantity" + item.Name + " class='StoreInput'>" +
                "<td width=50px><button id=purchase" + item.Name + " class='StoreButton'>"+ Language[lang].Button.Purchase +"</button></td>" +
                "</tr>" +
                "</table></div>";

            items.push({Button: "purchase" + item.Name,
                Item: item.Name});
        }
        addHandlers(items);
    }

    function tabInventory() {
        storetab = "inventory";
        items = [];
        document.getElementById("storeSquare").innerHTML = "";

        if (changes) {
            var xml = loadXMLDoc("store/modules.xml");

            var Items = xml.getElementsByTagName("Items")[0];
            var listing = Items.getElementsByTagName("Item");

            //console.log(xml);

            list = [];

            for (var i = 0; i < listing.length; i++) {
                var item = {
                    from: listing[i].getElementsByTagName('from')[0].textContent,
                    item: listing[i].getElementsByTagName('item')[0].textContent,
                    class: listing[i].getElementsByTagName('class')[0].textContent,
                    level: listing[i].getElementsByTagName('level')[0].textContent,
                    id: listing[i].getElementsByTagName('id')[0].textContent,
                    price: listing[i].getElementsByTagName('price')[0].textContent,
                    player: listing[i].getElementsByTagName('player')[0].textContent
                };

                list.push(item)
            }

            changes = false;
        }


        for (var i = 0; i < list.length; i++) {
            var module = list[i].item;


            ItemRow = "<div class=itemRow>" +
                "<table>" +
                "<tr>" +
                "<td width=30px><img width=30px height=30px src=img/" + list[i].item + ".jpg></td>" +
                "<td width=60px align=left><p>" + list[i].price + "$</p></td>" +
                "<td width=150px align=left><p>" + list[i].item + "</p></td>" +
                "<td width=62px align=left><p>" + list[i].class + "</p></td>" +
                "<td width=32px align=left><p>" + list[i].level + "</p></td>" +
                "<td width=80px align=left><p>" + list[i].from + "</p></td>";

            if ((list[i].player).toString() != (Stats.ID).toString())
                ItemRow += "<td width=80px align=right><button id=purchase" + list[i].id + " class='StoreButton'>"+Language[lang].Button.Purchase+"</button></td>";
            else if ((list[i].player).toString() == (Stats.ID).toString())
                ItemRow += "<td width=80px align=right><button id=purchase" + list[i].id + " class='StoreButton'>"+ Language[lang].Button.Unlist +"</button></td>";

            document.getElementById("storeSquare").innerHTML += ItemRow;

            items.push({Button: "purchase" + list[i].id,
                Item: module.item});

            /*var quantity = document.getElementById("quantity" + item.Name);
             var buttonHandler = document.getElementById("purchase" + item.Name);*/
        }

        addHandlers(items);
    }

    function tabSell() {
        storetab = "sell";
        items = [];
        document.getElementById("storeSquare").innerHTML = "";

        //Patch "remove" bug
        if (changes) {
                tabSell();
                changes = false;
        }

        for (var i = 0; i < Stats.Inventory.length; i++) {
            var module = Stats.Inventory[i];

            if (module.Name != "Puntos") {
                document.getElementById("storeSquare").innerHTML += "<div class=itemRow>" +
                    "<table>" +
                    "<tr>" +
                    "<td width=30px><img width=30px height=30px src=img/" + module.Name + ".jpg></td>" +
                    "<td width=170px align=left><p>" + module.Name + "</p></td>" +
                    "<td width=70px align=left><p>" + module.Class + "</p></td>" +
                    "<td width=40px align=left><p>" + module.Level + "</p></td>" +
                    "<td width=104px align=left><p id=id" + module.ID + ">" + module.ID + "</p></td>" +
                    "<td width=50px align=right><input class='StoreInput' placeholder='--' type=text id=price" + module.ID + "></td>" +
                    "<td width=50px><button id=sell" + module.ID + " class='StoreButton'>"+Language[lang].Button.Sell+"</button></td>" +
                    "</tr>" +
                    "</table></div>";

                items.push({Button: "sell" + module.ID,
                    Item: module.Name});
            }


            /*var quantity = document.getElementById("quantity" + item.Name);
             var buttonHandler = document.getElementById("purchase" + item.Name);*/
        }

        addHandlers(items);
    }

    var bitCvas = null;
    var bitBox = null;

    function drawBitmap() {
        bitBox.clearRect(0, 0, 1000, 1000);
        if (Stats.x == null && Stats.y == null && Stats.p == null) {
            bitBox.strokeText(Language[lang].Label.ChoosePlace, 20, 40);
        }
        for (point in map) {

            bitBox.strokeRect(map[point][0], map[point][1], 14, 14);

            if (playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players == 0)
                bitBox.fillStyle = 'white';
            if (playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players > 0 && playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players < 4)
                bitBox.fillStyle = '#FFAA00';
            else if (playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players >= 4 && playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players < 8)
                bitBox.fillStyle = "red";

            if (playermap[(map[point][0] - 90) / 18][(map[point][1] - 108) / 18].Players > 0)
                bitBox.fillRect(map[point][0], map[point][1] + 18, 14, 13);
            bitmap[((map[point][0] - 90) / 18)][(map[point][1] - 108) / 18] = 1;


            /*for(y = 0; y < 4; y++)
             {
             for(x = 0; x < 8; x++)
             {
             bitBox.strokeWidth = 2;
             bitBox.strokeRect(90+x*6*18, 108+y*6*18, 6*18, 6*18);
             bitBox.strokeWidth = 1;
             }
             }*/
        }

    }


    var attackSpeed = Math.floor((Math.random()*30+60))*1000;
    window.setInterval(pointUp, 500);
    window.setInterval(saveData, 75000);
    setTimeout((function () {
        window.setInterval(syncData, 75000);
    }), 2000);
    window.setInterval(top10, 30000);
    //var systemAttack = setInterval(receiveAttack, attackSpeed); //arreglar timer
    var timer = setInterval(watchTick, 1000);



    var distance = 40;
    
    var radius = Math.random()*3.14;
    var position = 50; //Math.floor(Math.random()*25+10);

    function drawHealth()
        {
            healthPoints.clearRect(0, 0, 100, 100);

            innerRadius = (health / (maxHealth / 100)) / 2.5 - 3;
            if (innerRadius <= 1)
               innerRadius = 1;

            healthCore.fillStyle = 'darkgrey';
            healthCore.beginPath();
            healthCore.arc(50, 50, 40, 0, Math.PI * 2);
            healthCore.closePath();
            healthCore.fill();

            healthCore.fillStyle = 'grey';
            healthCore.beginPath();
            healthCore.arc(50, 50, 39, 0, Math.PI * 2);
            healthCore.closePath();
            healthCore.fill();

            healthCore.fillStyle = 'black';
            healthCore.beginPath();
            healthCore.arc(50, 50, 37, 0, Math.PI * 2);
            healthCore.closePath();
            healthCore.fill();

            if (innerRadius < 15)
            healthPoints.fillStyle = '#FF1213';
            else if (innerRadius < 35)
            healthPoints.fillStyle = '#FF7E22';
            else
            healthPoints.fillStyle = '#266441';

            healthPoints.beginPath();
            healthPoints.arc(50, 50, innerRadius, 0, Math.PI * 2);
            healthPoints.closePath();
            healthPoints.fill();

            healthCore.strokeStyle = 'black';
            healthCore.beginPath();
            healthCore.arc(50,50,15,0,2*Math.PI);
            healthCore.closePath();
            healthCore.stroke();

            healthCore.beginPath();
            healthCore.arc(50,50,35,0,2*Math.PI);
            healthCore.closePath();
            healthCore.stroke();
        }


    virusClosingFunc = function() {
            healthCore.fillStyle = '#35c5ff';
            healthCore.beginPath();
            healthCore.arc(position, position, distance, radius-0.15, radius+0.15);
            healthCore.closePath();
            healthCore.fill();

            healthCore.fillStyle = '#35c5ff';
            healthCore.beginPath();
            healthCore.arc(position, position, distance-1, radius-0.15, radius+0.15);
            healthCore.closePath();
            healthCore.fill();

            healthCore.fillStyle = '#35c5ff';
            healthCore.beginPath();
            healthCore.arc(position, position, distance-2, radius-0.15, radius+0.15);
            healthCore.closePath();
            healthCore.fill();

            distance = Math.floor(distance - (distance/100*1));

            console.log("Distance: " + distance);

            if(distance <= Math.floor(50/100*2))
            {
                receiveAttack();
                console.log("Virus got to destination");
                //position = Math.floor(Math.random()*25+10);
                radius = Math.random()*3.14;
                distance = 40;

                healthCore.fillStyle = 'red';
                healthCore.beginPath();
                healthCore.arc(position, position, 8, 0, Math.PI * 2);
                healthCore.closePath();
                healthCore.fill();

                healthCore.fillStyle = 'black';
                healthCore.beginPath();
                healthCore.arc(position, position, 7, 0, Math.PI * 2);
                healthCore.closePath();
                healthCore.fill();

                healthCore.fillStyle = 'red';
                healthCore.beginPath();
                healthCore.arc(position, position, 5, 0, Math.PI * 2);
                healthCore.closePath();
                healthCore.fill();

                setTimeout(drawHealth, 100);
                console.log("Attack speed: " + attackSpeed);
            }
        };
    virusClosing = setInterval(virusClosingFunc, attackSpeed/100*5);//attackSpeed/(attackSpeed/100*20));

    var MemoryPrice;
    var MemoryPoints;

    var NetworkPrice;

    var HDDSlots;
    var HDDPrice;

    var Console;
    var HealthIndicator;
    var PowerIndicator;

    var chips;
    var gates;
    var connectors;

    var resourcesLimit = 150;

    var codes;
    var scripts;
    var bugs;

    var healthCore;
    var healthPoints;

    var virusHealthCvas;
    var virusBox;
    var cpuHealthCvas;
    var cpuBox;
    var shieldHealthCvas;
    var shieldBox;
    var powerHealthCvas;
    var powerBox;

    var powerBar;
    var powerPoints;

    var canInfect = true;
    var virusTimer = 30;
    var virusCooldown;


//Modules

    var infect = false;

    Levels = {
        0: 0,
        1: 100,
        2: 300,
        3: 500,
        4: 900,
        5: 1400,
        6: 2800,
        7: 4500,
        8: 7800,
        9: 10000,
        10: 25000
    };

    function showAbilities() {
        document.getElementById("ingenieriaLevel").innerHTML = Stats.Abilities.Engineering;
        document.getElementById("programacionLevel").innerHTML = Stats.Abilities.Programming;
        document.getElementById("almacenamientoLevel").innerHTML = Stats.Abilities.Storage;
        document.getElementById("comercioLevel").innerHTML = Stats.Abilities.Trade;
        document.getElementById("arquitecturaLevel").innerHTML = Stats.Abilities.Architecture;
        document.getElementById("puntosHabilidad").innerHTML = Stats.Abilities.Points;

        statCvas = document.getElementById("statisticsCvas");
        statBox = statCvas.getContext("2d");

        abilityPoints = 0;
        highestValue = 0;
        for(ab in Stats.Abilities)
        {
            if(ab != "Points") {
                abilityPoints += Stats.Abilities[ab];

                if(Stats.Abilities[ab] > highestValue)
                highestValue = Stats.Abilities[ab];
            }


        }

        highestValue += 2;

        statBox.fillStyle = "#2978a1";
        if(Stats.Abilities.Programming > 0)
        statBox.fillRect(6, 140, 40, (120/highestValue)*Stats.Abilities.Programming*-1);
        else
            statBox.fillRect(6, 140, 40, (120/highestValue)*0.5*-1);
        if(Stats.Abilities.Engineering > 0)
        statBox.fillRect(62, 140, 40, (120/highestValue)*Stats.Abilities.Engineering*-1);
        else
            statBox.fillRect(62, 140, 40, (120/highestValue)*0.5*-1);
        if(Stats.Abilities.Storage > 0)
        statBox.fillRect(118, 140, 40, (120/highestValue)*Stats.Abilities.Storage*-1);
        else
            statBox.fillRect(118, 140, 40, (120/highestValue)*0.5*-1);
        if(Stats.Abilities.Trade > 0)
        statBox.fillRect(174, 140, 40, (120/highestValue)*Stats.Abilities.Trade*-1);
        else
            statBox.fillRect(174, 140, 40, (120/highestValue)*0.5*-1);
        if(Stats.Abilities.Architecture > 0)
        statBox.fillRect(230, 140, 40, (120/highestValue)*Stats.Abilities.Architecture*-1);
        else
            statBox.fillRect(230, 140, 40, (120/highestValue)*0.5*-1);


        statBox.strokeRect(0, 140, 280, -4);

    }

    function syncData() {
        if (Stats.ID) {
            storeXml = loadXMLDoc("sessions/" + Stats.ID + ".xml");
            Session = storeXml.getElementsByTagName("Session")[0];
            Store = Session.getElementsByTagName("Store")[0];
            StoreItems = Store.getElementsByTagName("Item");


            playerXml = loadXMLDoc("users/" + Stats.ID + ".xml");
            Player = playerXml.getElementsByTagName("Stats")[0];
            XInventory = Player.getElementsByTagName("Inventory")[0];
            XItems = XInventory.getElementsByTagName("Item");
            XItem = XItems[0];
            XStats = XItem.getElementsByTagName("Stats")[0];
            var XPoints = parseFloat(XStats.getElementsByTagName("Points")[0].textContent);

            Levels = Player.getElementsByTagName("Levels")[0];
            Stats.Levels.System = parseInt(Levels.getElementsByTagName("System")[0].textContent);
            system = document.getElementById('Level');
            system.innerHTML = Stats.Levels.System;

            Abilities = Player.getElementsByTagName("Abilities")[0];
            Stats.Abilities.Programming = parseInt(Abilities.getElementsByTagName("Programming")[0].textContent);
            Stats.Abilities.Engineering = parseInt(Abilities.getElementsByTagName("Engineering")[0].textContent);
            Stats.Abilities.Storage = parseInt(Abilities.getElementsByTagName("Storage")[0].textContent);
            Stats.Abilities.Trade = parseInt(Abilities.getElementsByTagName("Trade")[0].textContent);
            Stats.Abilities.Architecture = parseInt(Abilities.getElementsByTagName("Architecture")[0].textContent);
            Stats.Abilities.Points = parseInt(Abilities.getElementsByTagName("Points")[0].textContent);


            Resources = Player.getElementsByTagName("Resources")[0];
            Stats.Resources.Chips = parseInt(Resources.getElementsByTagName("Chips")[0].textContent);
            Stats.Resources.Gates = parseInt(Resources.getElementsByTagName("Gates")[0].textContent);
            Stats.Resources.Connectors = parseInt(Resources.getElementsByTagName("Connectors")[0].textContent);
            Stats.Resources.Codes = parseInt(Resources.getElementsByTagName("Codes")[0].textContent);
            Stats.Resources.Scripts = parseInt(Resources.getElementsByTagName("Scripts")[0].textContent);
            Stats.Resources.Bugs = parseInt(Resources.getElementsByTagName("Bugs")[0].textContent);
            //console.log("Resources loaded");

            Stats.Levels.CPU = parseInt(Levels.getElementsByTagName("CPU")[0].textContent);
            Stats.Levels.Power = parseInt(Levels.getElementsByTagName("Power")[0].textContent);
            Stats.Levels.Virus = parseInt(Levels.getElementsByTagName("Virus")[0].textContent);
            Stats.Levels.Shield = parseInt(Levels.getElementsByTagName("Shield")[0].textContent);
            Stats.Levels.Memory = parseInt(Levels.getElementsByTagName("Memory")[0].textContent);
            Stats.Levels.HDD = parseInt(Levels.getElementsByTagName("HDD")[0].textContent);
            Stats.Levels.Network = parseInt(Levels.getElementsByTagName("Network")[0].textContent);

            Stats.Inventory = [];

            for(Class in Stats.Modules.Items) {
                Stats.Modules.Items[Class] = [];
            }

            for (i = 0; i < XItems.length; i++) {
                Slot = {};
                XItem = XItems[i];

                // console.log("Items");
                // console.log(XItemStats);

                SpecificStats = {};

                if(XItem.getElementsByTagName("Class")[0].textContent != "Global")
                for(Stat in Module[XItem.getElementsByTagName("Class")[0].textContent][XItem.getElementsByTagName("Name")[0].textContent])
                {
                    if (Stat != "Price" || Stat != "Name") {
                        value = Module[XItem.getElementsByTagName("Class")[0].textContent][XItem.getElementsByTagName("Name")[0].textContent][Stat];
                        SpecificStats[Stat] = value;
                        //Stats.Modules.Stats[XItem.getElementsByTagName("Class")[0].textContent][Stat] = value;
                    }
                }
                else
                SpecificStats["Points"] = parseInt(XItem.getElementsByTagName("Stats")[0].getElementsByTagName("Points")[0].textContent);

                Slot = {
                    x: parseInt(XItem.getElementsByTagName("x")[0].textContent),
                    y: parseInt(XItem.getElementsByTagName("y")[0].textContent),

                    ID: XItem.getElementsByTagName("ID")[0].textContent,
                    Name: XItem.getElementsByTagName("Name")[0].textContent,
                    Class: XItem.getElementsByTagName("Class")[0].textContent,
                    Level: parseInt(XItem.getElementsByTagName("Level")[0].textContent),

                    Status: XItem.getElementsByTagName("Status")[0].textContent,

                    Stats: SpecificStats
                };
                //console.log("Puntos!");

                Stats.Inventory.push(Slot);

                if(Slot.Status == "Equipar")
                {
                    Stats.Modules.Items[Slot.Class].push(Slot);
                }
            }

            drawInventory();
            drawItem();


            if (XPoints) {
                XPoints.toFixed(2).replace('"', '');

                Stats.Inventory[0].Stats.Points = XPoints;
                //console.log(XPoints);
            }

            if (StoreItems.length > 0) {
                for (l = 0; l < StoreItems.length; l++) {
                    StoreItem = StoreItems[l];

                    ItemShow = StoreItem.getElementsByTagName("Show")[0].textContent;
                    ItemName = StoreItem.getElementsByTagName("Name")[0].textContent;
                    ItemLevel = StoreItem.getElementsByTagName("Level")[0].textContent;
                    ItemQuantity = StoreItem.getElementsByTagName("Quantity")[0].textContent;
                    ItemPrice = StoreItem.getElementsByTagName("Price")[0].textContent;
                    ItemOwner = StoreItem.getElementsByTagName("Player")[0].textContent;
                    ItemFrom = StoreItem.getElementsByTagName("From")[0].textContent;

                    if (ItemShow == 1) {
                        if ((Stats.Inventory[0].Stats.Points + parseInt(ItemPrice) * parseInt(ItemQuantity)) < MemoryPoints) {

                            Stats.Inventory[0].Stats.Points += parseInt(ItemPrice) * parseInt(ItemQuantity);
                            if (parseInt(ItemQuantity) == 1) {
                                Console.innerHTML += '<p class="psmall" style="color: forestgreen; font-weight: bold">'+ Language[lang].Console.PurchaseFrom1 + ItemLevel + ']' + ItemName + Language[lang].Console.PurchaseFrom2 + ItemPrice + Language[lang].Console.PurchaseFrom3 + ItemFrom + ".</p>";
                                removeListing("store", l);
                            }
                            else {
                                Console.innerHTML += '<p class="psmall" style="color: forestgreen; font-weight: bold">' + Language[lang].Console.SellTo1 + ItemQuantity + ']' + ItemName + Language[lang].Console.SellTo2 + ItemPrice + ".</p>";
                                removeListing("store", l);
                            }
                        } else {
                            Console.innerHTML += '<p class="psmall" style="color: yellowgreen">' + Language[lang].Console.MaximumPoints +'</p>';
                        }
                    }
                }
            }

            reportXml = loadXMLDoc("sessions/" + Stats.ID + ".xml");
            Session = reportXml.getElementsByTagName("Session")[0];
            Report = Session.getElementsByTagName("Virus")[0];
            ReportItems = Report.getElementsByTagName("Report");

            if (ReportItems.length > 0) {
                for (l = 0; l < ReportItems.length; l++) {
                    ReportItem = ReportItems[l];

                    ItemShow = ReportItem.getElementsByTagName("Show")[0].textContent;
                    ItemPoints = ReportItem.getElementsByTagName("Points")[0].textContent;
                    ItemFrom = ReportItem.getElementsByTagName("From")[0].textContent;


                    if (ItemShow == 1) {
                        removeListing("virus", l);
                        Console.innerHTML += '<p class="psmall" style="color: violet; font-weight: bold;">'+ Language[lang].Console.AttackFrom1 + ItemFrom + Language[lang].Console.AttackFrom2 + ItemPoints + Language[lang].Console.AttackFrom3 + '</p>'

                    }
                }
            }

            mapXml = loadXMLDoc("region/map.xml");
            Map = mapXml.getElementsByTagName("Position");

            for (p = 0; p < Map.length; p++) {
                var X = parseInt(Map[p].getElementsByTagName("x")[0].textContent);
                var Y = parseInt(Map[p].getElementsByTagName("y")[0].textContent);
                var P = parseInt(Map[p].getElementsByTagName("p")[0].textContent);

                playermap[X][Y].Players = P;
            }
            drawBitmap();

            second = false;

            levelUp();
            return true;
        }
    }

    function loadData(id) {

        gotPosition = false;

        usersXml = loadXMLDoc("users/" + id + ".xml");
        XStats = usersXml.getElementsByTagName("Stats")[0];

        // // console.log(XStats);
        // // console.log(Stats);

        Stats.ID = XStats.getElementsByTagName("ID")[0].textContent;
        //Stats.Name = XStats.getElementsByTagName("Name")[0].textContent;
        Stats.Picture = XStats.getElementsByTagName("Picture")[0].textContent;
        power = parseFloat(XStats.getElementsByTagName("Power")[0].textContent);
        health = parseFloat(XStats.getElementsByTagName("Shield")[0].textContent);
        progressBar(Language[lang].Loading.Step4);


        if (XStats.getElementsByTagName("PosX")[0])
            Stats.x = parseInt(XStats.getElementsByTagName("PosX")[0].textContent);

        if (XStats.getElementsByTagName("PosY")[0])
            Stats.y = parseInt(XStats.getElementsByTagName("PosY")[0].textContent);

        if (XStats.getElementsByTagName("PosP")[0])
            Stats.p = parseInt(XStats.getElementsByTagName("PosP")[0].textContent);

        //console.log(Stats.p);

        if (Stats.x == null && Stats.y == null && Stats.p == null) {
            drawBitmap();
            $('#mapClosebutton').hide();
            $('#mapBox').show();
            mapShown = true;
            $('#messageBox').show();

            var positionTimer;
            var positionFunc = function () {
                    if (Stats.x != null && Stats.y != null && Stats.p != null) {
                    gotPisition = true;
                    $('#mapBox').hide();
                        mapShown = false;

                    clearInterval(positionTimer);
                    verifieduser = true;
                    levelUp();
                    loadData(id);
                } else {
                    dataReady = false;
                    clearInterval(positionTimer);
                    return false;
                }
            }

            positionTimer = setInterval(function () {
                positionFunc();
            }, 1000);

        } else {
            //$('#mapClosebutton').hide();
            $('#mapBox').hide();
            mapShown = false;
            $('#messageBox').hide();
            gotPosition = true;
        }


        if (gotPosition) {
            //console.log("Stats System");
            Levels = XStats.getElementsByTagName("Levels")[0];
            Stats.Levels.System = parseInt(Levels.getElementsByTagName("System")[0].textContent);
            system = document.getElementById('Level');
            system.innerHTML = Stats.Levels.System;

            Abilities = XStats.getElementsByTagName("Abilities")[0];
            Stats.Abilities.Programming = parseInt(Abilities.getElementsByTagName("Programming")[0].textContent);
            Stats.Abilities.Engineering = parseInt(Abilities.getElementsByTagName("Engineering")[0].textContent);
            Stats.Abilities.Storage = parseInt(Abilities.getElementsByTagName("Storage")[0].textContent);
            Stats.Abilities.Trade = parseInt(Abilities.getElementsByTagName("Trade")[0].textContent);
            Stats.Abilities.Architecture = parseInt(Abilities.getElementsByTagName("Architecture")[0].textContent);
            Stats.Abilities.Points = parseInt(Abilities.getElementsByTagName("Points")[0].textContent);


            Resources = XStats.getElementsByTagName("Resources")[0];
            Stats.Resources.Chips = parseInt(Resources.getElementsByTagName("Chips")[0].textContent);
            Stats.Resources.Gates = parseInt(Resources.getElementsByTagName("Gates")[0].textContent);
            Stats.Resources.Connectors = parseInt(Resources.getElementsByTagName("Connectors")[0].textContent);
            Stats.Resources.Codes = parseInt(Resources.getElementsByTagName("Codes")[0].textContent);
            Stats.Resources.Scripts = parseInt(Resources.getElementsByTagName("Scripts")[0].textContent);
            Stats.Resources.Bugs = parseInt(Resources.getElementsByTagName("Bugs")[0].textContent);
            //console.log("Resources loaded");

            Stats.Levels.CPU = parseInt(Levels.getElementsByTagName("CPU")[0].textContent);
            Stats.Levels.Power = parseInt(Levels.getElementsByTagName("Power")[0].textContent);
            Stats.Levels.Virus = parseInt(Levels.getElementsByTagName("Virus")[0].textContent);
            Stats.Levels.Shield = parseInt(Levels.getElementsByTagName("Shield")[0].textContent);
            Stats.Levels.Memory = parseInt(Levels.getElementsByTagName("Memory")[0].textContent);
            Stats.Levels.HDD = parseInt(Levels.getElementsByTagName("HDD")[0].textContent);
            Stats.Levels.Network = parseInt(Levels.getElementsByTagName("Network")[0].textContent);
            progressBar(Language[lang].Loading.Step5);
            // // console.log(Stats.Levels);

            XModules = XStats.getElementsByTagName("Modules")[0];
            XModulesStats = XModules.getElementsByTagName("Items")[0];


            XItems = XModulesStats.getElementsByTagName("Power")[0];
            if (parseFloat(XItems.getElementsByTagName("Recharge")[0].textContent))
                Stats.Modules.Stats.Power.Recharge = parseFloat(XItems.getElementsByTagName("Recharge")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("Power")[0].textContent))
                Stats.Modules.Stats.Power.Power = parseFloat(XItems.getElementsByTagName("Power")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("CPUConsumption")[0].textContent))
                Stats.Modules.Stats.Power.CPUConsumption = parseFloat(XItems.getElementsByTagName("CPUConsumption")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("ShieldConsumption")[0].textContent))
                Stats.Modules.Stats.Power.ShieldConsumption = parseFloat(XItems.getElementsByTagName("ShieldConsumption")[0].textContent);


            XItems = XModulesStats.getElementsByTagName("CPU")[0];
            if (parseFloat(XItems.getElementsByTagName("CPUBoost")[0].textContent))
                Stats.Modules.Stats.CPU.CPUBoost = parseFloat(XItems.getElementsByTagName("CPUBoost")[0].textContent);


            XItems = XModulesStats.getElementsByTagName("Virus")[0];
            if (parseFloat(XItems.getElementsByTagName("VirusTimer")[0].textContent))
                Stats.Modules.Stats.Virus.VirusTimer = parseFloat(XItems.getElementsByTagName("VirusTimer")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("VirusBoost")[0].textContent))
                Stats.Modules.Stats.Virus.VirusBoost = parseFloat(XItems.getElementsByTagName("VirusBoost")[0].textContent);


            XItems = XModulesStats.getElementsByTagName("Shield")[0];
            if (parseFloat(XItems.getElementsByTagName("VirusAvoidance")[0].textContent))
                Stats.Modules.Stats.Shield.VirusAvoidance = parseFloat(XItems.getElementsByTagName("VirusAvoidance")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("StabilityBoost")[0].textContent))
                Stats.Modules.Stats.Shield.StabilityBoost = parseFloat(XItems.getElementsByTagName("StabilityBoost")[0].textContent);
            if (parseFloat(XItems.getElementsByTagName("VirusResistance")[0].textContent))
                Stats.Modules.Stats.Shield.VirusResistance = parseFloat(XItems.getElementsByTagName("VirusResistance")[0].textContent);
            // console.log("Modules loaded");

            XQuantity = XModules.getElementsByTagName("Quantity")[0];
            Stats.Modules.Quantity.CPU = parseInt(XQuantity.getElementsByTagName("CPU")[0].textContent);
            Stats.Modules.Quantity.Power = parseInt(XQuantity.getElementsByTagName("Power")[0].textContent);
            Stats.Modules.Quantity.Virus = parseInt(XQuantity.getElementsByTagName("Virus")[0].textContent);
            Stats.Modules.Quantity.Shield = parseInt(XQuantity.getElementsByTagName("Shield")[0].textContent);
            progressBar(Language[lang].Loading.Step6);
            // // console.log(Stats.Modules);


            XInventory = XStats.getElementsByTagName("Item");

            // console.log("Inventory");
            //console.log(XInventory);

            for (i = 0; i < XInventory.length; i++) {
                Slot = {};
                XItem = XInventory[i];
                XItemStats = XItem.getElementsByTagName("Stats")[0];

                XSpecificStats = {};

                // console.log("Items");
                // console.log(XItemStats);

                if (XItem.getElementsByTagName("Class")[0].textContent == "Power") {
                    XSpecificStats = {
                        Recharge: parseFloat(XItemStats.getElementsByTagName("Recharge")[0].textContent),
                        Power: parseFloat(XItemStats.getElementsByTagName("Power")[0].textContent),
                        CPUConsumption: parseFloat(XItemStats.getElementsByTagName("CPUConsumption")[0].textContent),
                        ShieldConsumption: parseFloat(XItemStats.getElementsByTagName("ShieldConsumption")[0].textContent)
                    };

                }
                else if (XItem.getElementsByTagName("Class")[0].textContent == "Shield") {
                    XSpecificStats = {
                        VirusAvoidance: parseFloat(XItemStats.getElementsByTagName("VirusAvoidance")[0].textContent),
                        StabilityBoost: parseFloat(XItemStats.getElementsByTagName("StabilityBoost")[0].textContent),
                        VirusResistance: parseFloat(XItemStats.getElementsByTagName("VirusResistance")[0].textContent)
                    };

                }
                else if (XItem.getElementsByTagName("Class")[0].textContent == "Virus") {
                    XSpecificStats = {
                        VirusTimer: parseFloat(XItemStats.getElementsByTagName("VirusTimer")[0].textContent),
                        VirusBoost: parseFloat(XItemStats.getElementsByTagName("VirusBoost")[0].textContent)
                    };

                }
                else if (XItem.getElementsByTagName("Class")[0].textContent == "CPU") {
                    XSpecificStats = {
                        CPUBoost: parseFloat(XItemStats.getElementsByTagName("CPUBoost")[0].textContent)
                    };

                }
                else if (XItem.getElementsByTagName("Name")[0].textContent == "Puntos") {
                    console.log("Encontrados!");
                    XSpecificStats = {
                        Points: parseFloat(XItemStats.getElementsByTagName("Points")[0].textContent)
                    };
                }

                Slot = {
                    x: parseInt(XItem.getElementsByTagName("x")[0].textContent),
                    y: parseInt(XItem.getElementsByTagName("y")[0].textContent),

                    ID: XItem.getElementsByTagName("ID")[0].textContent,
                    Name: XItem.getElementsByTagName("Name")[0].textContent,
                    Class: XItem.getElementsByTagName("Class")[0].textContent,
                    Level: parseInt(XItem.getElementsByTagName("Level")[0].textContent),

                    Status: XItem.getElementsByTagName("Status")[0].textContent,

                    Stats: XSpecificStats
                };
                //console.log("Puntos!");

                Inventory.push(Slot);

                if (Slot.Status == "Equipar")
                    switch (Slot.Class) {
                        case "Power":
                            MPower.push(Slot);
                            break;

                        case "CPU":
                            MCPU.push(Slot);
                            break;

                        case "Virus":
                            MVirus.push(Slot);
                            break;

                        case "Shield":
                            MShield.push(Slot);
                            break;
                    }
            }

            showAbilities();
            progressBar(Language[lang].Loading.Step7);
            drawInventory();
            maxHealth = Math.round(100 + (20 * Stats.Levels.Shield * SystemBonus * (Stats.Modules.Stats.Shield.StabilityBoost + 1)) * ((Stats.Abilities.Architecture / 10)*4 + 1));
            setTimeout(function() { levelUp(); }, 3000);
            // // console.log(Stats.Inventory);


            /*Users = usersXml.getElementsByTagName("Users")[0];
             var newUser;
             alert("Creating new user");
             newUser = usersXml.createElement("User");
             newUser.setAttribute("ID", id);
             newUser.setAttribute("Level", 0);
             alert("Appending child to xml");
             Users.appendChild(newUser);
             alert("New user created");

             // console.log(usersXml);


             //Create user
             */
        }

        sessionXml = loadXMLDoc("sessions/"+Stats.ID+".xml");

        virusTimer = parseInt(sessionXml.getElementsByTagName("VirusTimer")[0].textContent);

        canInfect = false;
        virusCooldown = setInterval(virusTimeout, 1000);


        mapXml = loadXMLDoc("region/map.xml");
        Map = mapXml.getElementsByTagName("Position");

        for (p = 0; p < Map.length; p++) {
            var X = parseInt(Map[p].getElementsByTagName("x")[0].textContent);
            var Y = parseInt(Map[p].getElementsByTagName("y")[0].textContent);
            var P = parseInt(Map[p].getElementsByTagName("p")[0].textContent);

            playermap[X][Y].Players = P;
            //console.log(X + " " + Y + " " + P);
        }
        drawBitmap();
    }

    function post_to_url(path, params, method) {
        method = method || "post"; // Set method to post by default if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);

        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }

    var LevelPrice = Levels[1];
    var PowerBurst = 0;
    var ShieldHealing = 0;
    var PowerCapacity = 30;

    var ShieldStrength;

    function addAbilities(ability) {
        if (Stats.Abilities.Points > 0) {
            actionPlayer(Stats.ID, Stats.Name, "abilitiesUp", ability);
            switch (ability) {
                case "Programming":
                    Stats.Abilities.Programming++;
                    break;
                case "Engineering":
                    Stats.Abilities.Engineering++;
                    break;
                case "Storage":
                    Stats.Abilities.Storage++;
                    break;
                case "Trade":
                    Stats.Abilities.Trade++;
                    levelUp();
                    break;
                case "Architecture":
                    Stats.Abilities.Architecture++;
                    levelUp();
                    break;
            }
            Stats.Abilities.Points--;
        }
        else {
            Console.innerHTML += "<p class='psmall' style='color: red'>" + Language[lang].Console.NotEnoughForAbil1 + ability + Language[lang].Console.NotEnoughForAbil2 +  "</p>";
        }

        showAbilities();
    }

    function top10() {

        xml = loadXMLDoc("users/ranks.xml");

        XUsers = xml.getElementsByTagName("User");

        Rank = [];

        for (u = 0; u < XUsers.length; u++) {
            XUser = XUsers[u];

            User = {
                Name: XUser.getElementsByTagName("Name")[0].textContent,
                Level: parseInt(XUser.getElementsByTagName("Level")[0].textContent),
                Picture: XUser.getElementsByTagName("Picture")[0].textContent
            };

            Rank.push(User);
        }

        Ranking = document.getElementById('Ranking');

        var aux;


        Ranking.innerHTML = "";
        for (y = Rank.length; y >= 0; y--) {
            for (x = 0; x < y - 1; x++) {
                if (Rank[x].Level < Rank[x + 1].Level) {
                    aux = {
                        Name: Rank[x].Name,
                        Level: Rank[x].Level,
                        Picture: Rank[x].Picture
                    };

                    Rank[x] = {
                        Name: Rank[x + 1].Name,
                        Level: Rank[x + 1].Level,
                        Picture: Rank[x + 1].Picture
                    };

                    Rank[x + 1] = aux;
                }
            }
        }


        for (p = 0; p < 10; p++) {
            if (Rank[p])
                if (Rank[p].Name == Stats.Name)
                    if(p == 0)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingFirst.png'></td></tr></table>";
                        else if(p == 1)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingSecond.png'></td></tr></table>";
                        else if(p == 2)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingThird.png'></td></tr></table>";
                        else
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingDefault.png'></td></tr></table>";
                    else
                        if(p == 0)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingFirst.png'></td></tr></table>";
                        else if(p == 1)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingSecond.png'></td></tr></table>";
                        else if(p == 2)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingThird.png'></td></tr></table>";
                        else
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingDefault.png'></td></tr></table>";
            else
                Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="30px"></td><td width="20px"><p style="text-align: center !important">' + "</p></td><td><p>Empty</p></td></tr></table>";
        }

    }

    var scriptsCounter = 0;
    var codesCounter = 0;
    var connectorsCounter = 0;
    var gatesCounter = 0;

    function watchTick()
    {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        if(hours < 10)
        {
            hours = "0" + hours;
        }

        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }

        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }

        watchBox.clearRect(0, 0, 200, 100);
        watchBox.strokeStyle = "#35c5ff";
        watchBox.font = "12pt Arial";
        watchBox.strokeText(hours + " " + minutes + " " + seconds, 10, 20);


        watchBox.strokeRect(10, 35, 160, 30);

            defaultPrice = 100;

            LevelPrice = defaultPrice;
            for (l = 1; l < Stats.Levels.System; l++) {
                if (l < 5) {
                    LevelPrice = LevelPrice + LevelPrice;
                }
                else if (l >= 5 && l < 10) {
                    LevelPrice = LevelPrice + LevelPrice * 0.5;
                }
                else if (l >= 10 && l < 15) {
                    LevelPrice = LevelPrice + LevelPrice * 0.25;
                } else {
                    LevelPrice = LevelPrice + LevelPrice * 0.12;
                }
            }

        watchBox.fillStyle = "#2978a1";
        watchBox.font = "9pt Arial";
        watchBox.fillRect(11, 36, (158/100)*(100/LevelPrice*Stats.Inventory[0].Stats.Points), 28);
        watchBox.strokeText("Lv" + parseInt(Stats.Levels.System + 1), 153/2, 54);

    }

    function powerUp() {
        if (power + PowerBurst > (Stats.Levels.Power + 1) * 40) {
            power = PowerCapacity;
        } else {
            power += PowerBurst;
        }
        if (power + PowerBurst < PowerBurst + 2)
            powerSent = false;
    }

    var PowerCPUloss = 0;
    var PowerHealingloss = 0;

    var SystemBonus;

    function showResources() {
        chips.innerHTML = Stats.Resources.Chips;
        gates.innerHTML = Stats.Resources.Gates;
        connectors.innerHTML = Stats.Resources.Connectors;

        codes.innerHTML = Stats.Resources.Codes;
        scripts.innerHTML = Stats.Resources.Scripts;
        bugs.innerHTML = Stats.Resources.Bugs;

        var indicator1, indicator2, indicator3, indicator4, indicator5, indicator6;

        indicator1 = document.getElementById("chips");
        indicator2 = document.getElementById("gates");
        indicator3 = document.getElementById("connectors");
        indicator4 = document.getElementById("codes");
        indicator5 = document.getElementById("scripts");
        indicator6 = document.getElementById("bugs");

        indicator1.style.color = "#35c5ff";
        indicator2.style.color = "#35c5ff";
        indicator3.style.color = "#35c5ff";
        indicator4.style.color = "#35c5ff";
        indicator5.style.color = "#35c5ff";
        indicator6.style.color = "#35c5ff";
    }

    var powerSent = false;
    var powerBool1 = false;
    var powerBool2 = false;


    var shieldDelay = 0;
    var powerDelay = 0;
    var cpuDelay = 0;
    var virusDelay = 0;

    var healthTimeout = 12;

    function pointUp() {


        //console.log("DataReady:" + dataReady);

        SystemBonus = (Stats.Levels.System / 10) + 1;

        //sumHealth = Components.Shield.Healing[Stats.Levels.Shield] * SystemBonus * Stats.Modules.Stats.Shield.VirusResistance;

        if (dataReady) {


            if (power > PowerCapacity) {
                power = PowerCapacity;
            }


            if (Stats.Inventory[0].Stats.Points + Components.CPU.Values[Stats.Levels.CPU] * SystemBonus < MemoryPoints) {
                if (power - PowerCPUloss > 0) {


                    Stats.Inventory[0].Stats.Points += Components.CPU.Values[Stats.Levels.CPU] * SystemBonus * (Stats.Modules.Stats.CPU.CPUBoost + 1).toFixed(2);
                    power -= PowerCPUloss;
                } else {

                    Stats.Inventory[0].Stats.Points += Components.CPU.Values[0];
                }
            }


            if (health < maxHealth) {
                if (power > PowerHealingloss) {
                    //console.log(maxHealth);
                    if (health + ShieldHealing < maxHealth)
                        health += ShieldHealing;
                    else
                        health = maxHealth;

                    power -= PowerHealingloss;
                }
            }


            indicator = document.getElementById("points");

            indicator.innerHTML = '<p style="line-height: 10%;">' + Language[lang].Label.Points + " " + Stats.Inventory[0].Stats.Points.toFixed(2) + " / " + MemoryPoints.toFixed(2) + ' RAM</p> <p style="line-height: 10%; font-size: 10pt;  color: green;">+' + (LevelPrice - Stats.Inventory[0].Stats.Points).toFixed(2) + "</p>";
            // // console.log((Levels[1] * 6 * 1.3) + (Levels[1] * ((7 + 1) * 1.3)));

            HealthIndicator.innerHTML = "<p style='psmall'>" + Language[lang].Label.Health + Math.round(parseInt(health.toFixed(0))) + " / " + Math.round(maxHealth) + "</p>";
            PowerIndicator.innerHTML = "<p style='psmall'>" + Language[lang].Label.Power + Math.round(parseInt(power.toFixed(0))) + " / " + Math.round(PowerCapacity) + "</p>";
            //$("#Console").animate({ scrollTop: $('#Console')[0].height}, 0);

            defaultPrice = 100;

            LevelPrice = defaultPrice;
            for (l = 1; l < Stats.Levels.System; l++) {
                if (l < 5) {
                    LevelPrice = LevelPrice + LevelPrice;
                }
                else if (l >= 5 && l < 10) {
                    LevelPrice = LevelPrice + LevelPrice * 0.5;
                }
                else if (l >= 10 && l < 15) {
                    LevelPrice = LevelPrice + LevelPrice * 0.25;
                } else {
                    LevelPrice = LevelPrice + LevelPrice * 0.12;
                }
            }

            resourcesLimit = 150;
            for (var l = 0; l < Stats.Levels.System; l++) {
                resourcesLimit = resourcesLimit * 1.05;
            }

            resourcesLimit = resourcesLimit * ((Stats.Abilities.Storage / 10 * 12 + 1));

            if (Stats.Inventory[0].Stats.Points > LevelPrice) {
                Stats.Levels.System++;
                Stats.Abilities.Points++;

                actionPlayer(Stats.ID, Stats.Name, "levelUp", "System");

                clearInterval(powerInterval);
                powerSpeed = 16000 - ((Stats.Levels.Power * 200) * ((Stats.Levels.System / 10) + 1));
                // // console.log(powerSpeed);
                powerInterval = setInterval(powerUp, powerSpeed);

                levelUp();
            }

            
            virusBox.clearRect(0, 0, 59, 2);
            shieldBox.clearRect(0, 0, 59, 2);
            cpuBox.clearRect(0, 0, 59, 2);
            powerBox.clearRect(0, 0, 59, 2);

            shieldBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Shield.Health, 3);
            cpuBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.CPU.Health, 3);
            powerBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Power.Health, 3);
            virusBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Virus.Health, 3);


            shieldDelay += 1;
            if(shieldDelay < healthTimeout)
            {
                if(Stats.Modules.Stats.Shield.Health < 100)
                {
                    Stats.Modules.Stats.Shield.Health += 1;
                    shieldBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Shield.Health, 3);
                }
            } else {
                shieldDelay = 0;
            }

            cpuDelay += 1;
            if(cpuDelay < healthTimeout)
            {
                if(Stats.Modules.Stats.CPU.Health < 100)
                {
                    Stats.Modules.Stats.CPU.Health += 1;
                    cpuBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.CPU.Health, 3);
                }
            } else {
                cpuDelay = 0;
            }

            powerDelay += 1;
            if(powerDelay < healthTimeout)
            {
                if(Stats.Modules.Stats.Power.Health < 100)
                {
                    Stats.Modules.Stats.Power.Health += 1;
                    powerBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Power.Health, 3);
                }
            } else {
                powerDelay = 0;
            }

            virusDelay += 1;
            if(virusDelay < healthTimeout)
            {
                if(Stats.Modules.Stats.Virus.Health < 100)
                {
                    Stats.Modules.Stats.Virus.Health += 1;
                    virusBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Virus.Health, 3);
                }
            } else {
                virusDelay = 0;
            }


            gatesCounter++;
            scriptsCounter++;
            connectorsCounter++;
            codesCounter++;

            if (Stats.Resources.Gates < resourcesLimit)
                if (gatesCounter % parseInt(36 / (Stats.Abilities.Engineering / 10 / 2 + 1)) == 0) {
                    Stats.Resources.Gates++;
                    showResources();
                }
            if (gatesCounter >= parseInt(168 / (Stats.Abilities.Engineering / 10 / 2 + 1))) {
                if (Stats.Resources.Chips < resourcesLimit)
                    Stats.Resources.Chips++;
                gatesCounter = 0;
                showResources();
            }

            if (Stats.Resources.Connectors < resourcesLimit)
                if (connectorsCounter % parseInt(18 / (Stats.Abilities.Engineering / 10 / 2 + 1)) == 0) {
                    Stats.Resources.Connectors++;
                    showResources();
                }
            if (connectorsCounter >= parseInt(180 / (Stats.Abilities.Engineering / 10 / 2 + 1))) {
                if (Stats.Resources.Chips < resourcesLimit)
                    Stats.Resources.Chips++;
                connectorsCounter = 0;
                showResources();
            }

            if (Stats.Resources.Codes < resourcesLimit)
                if (codesCounter % parseInt(12 / (Stats.Abilities.Programming / 10 / 2 + 1)) == 0) {
                    Stats.Resources.Codes++;
                    showResources();
                }
            if (codesCounter >= parseInt(120 / (Stats.Abilities.Programming / 10 / 2 + 1))) {
                if (Stats.Resources.Bugs < resourcesLimit)
                    Stats.Resources.Bugs++;
                codesCounter = 0;
                showResources();
            }

            if (Stats.Resources.Scripts < resourcesLimit)
                if (scriptsCounter % parseInt(24 / (Stats.Abilities.Programming / 10 / 2 + 1)) == 0) {
                    Stats.Resources.Scripts++;
                    showResources();
                }
            if (scriptsCounter >= parseInt(112 / (Stats.Abilities.Programming / 10 / 2 + 1))) {
                if (Stats.Resources.Bugs < resourcesLimit)
                    Stats.Resources.Bugs++;
                scriptsCounter = 0;
                showResources();
            }

            // // console.log(Stats.Levels.System);
            system = document.getElementById('Level');

            indicator.innerHTML = '<p style="line-height: 10%;">' + Language[lang].Label.Points + " " + Stats.Inventory[0].Stats.Points.toFixed(2) + " / " + MemoryPoints.toFixed(2) + ' RAM</p> <p style="line-height: 10%; font-size: 10pt;  color: green;">+' + (LevelPrice - Stats.Inventory[0].Stats.Points).toFixed(2) + "</p>";
            //indicator.innerHTML = Stats.Inventory[0].Stats.Points.toFixed(2) + " / " + LevelPrice.toFixed(2);
            system.innerHTML = "Lv" + Stats.Levels.System;


            //Health points
            

            drawHealth();


            //Power levels
            powerPoints.clearRect(0, 0, 100, 20);

            powerBar.fillStyle = 'darkgrey';
            powerBar.beginPath();
            powerBar.rect(0, 0, 100, 30);
            powerBar.closePath();
            powerBar.fill();

            powerBar.fillStyle = 'grey';
            powerBar.beginPath();
            powerBar.rect(1, 1, 98, 18);
            powerBar.closePath();
            powerBar.fill();

            powerBar.fillStyle = 'black';
            powerBar.beginPath();
            powerBar.rect(3, 3, 94, 14);
            powerBar.closePath();
            powerBar.fill();


            powerrange = ((94 / PowerCapacity) * power);
            if (powerrange < 70)
                powerPoints.fillStyle = 'orange';
            else if (powerrange > 70)
                powerPoints.fillStyle = '#266441';

            powerPoints.beginPath();
            powerPoints.rect(3, 3, powerrange, 14);
            powerPoints.closePath();
            powerPoints.fill();
        } else {
            //Global Modifiers

            //console.log("Verified user:" + verifieduser);

            if(verifieduser == true) {

                //console.log("User verified");
                levelUp();
                top10();
                //drawInventory();
                dataReady = true;
                verifieduser = false;
                showResources();
            }
        }

    }

    function calculateDamage(level, LevelShield)
    {
        if (level) {
            str = level;
        } else {
            if (Stats.Levels.System > 2) {
                str = Math.floor(Math.random() * Stats.Levels.System) + Math.floor(Math.random() * 5);
            }
            else
                str = Math.round(Math.floor((Math.random() * Stats.Levels.System) + (Math.floor(Math.random() * 2))));

            if (str > 20)
                str = 20;

            if (str < 0)
                str = 0;
        }

        // // console.log("Virus: " + str);

        var ShieldStr = 0;
        for (s = 0; s <= LevelShield; s++) {
            ShieldStr += Components.Shield.Strength[s];
        }

        virusDamage = Components.Virus.Damage[str] * Components.Virus.Complexity[str];
        virusCleaned = virusDamage - (virusDamage / 100 * ShieldStr);
        damage = virusCleaned / (ShieldStr + Stats.Levels.CPU);

        return damage;
    }

    function receiveAttack(level) {

        var hpdmg = 0;
        var pdmg = 0;
        var damage = 0;

        if(!level)
        damage = calculateDamage(null, Stats.Levels.Shield);
        else
        damage = calculateDamage(level, Stats.Levels.Shield);

        attackSpeed = Math.floor(Math.random()*30+60)*1000;
        clearInterval(virusClosing);
        virusClosing = setInterval(virusClosingFunc, attackSpeed/100*5);

        if (damage > health) {
            hpdmg = health;
            pdmg = damage - hpdmg;
            health -= hpdmg;


            if (pdmg > Stats.Inventory[0].Stats.Points) {
                pdmg = Stats.Inventory[0].Stats.Points;
            }

            if(Stats.Modules.Stats.CPU.Health > 35)
                Stats.Modules.Stats.CPU.Health -= 35;
            else
            {
                Stats.Modules.Stats.CPU.Health = 0;
                if(Stats.Levels.CPU > 0)
                {
                    Stats.Levels.CPU -= 1;
                    Console.innerHTML += '<p style="color: orange;">' + Language[lang].Console.CPULower + '</p>';
                    actionPlayer(Stats.ID, Stats.Name, "lowerCPU", null);
                }
            }

            if(Stats.Modules.Stats.Shield.Health > 20)
                Stats.Modules.Stats.Shield.Health -= 20;
            else
            {
                Stats.Modules.Stats.Shield.Health = 0;
                if(Stats.Levels.Shield > 0)
                {
                    Stats.Levels.Shield -= 1;
                    Console.innerHTML += '<p style="color: orange;">' + Language[lang].Console.ShieldLower + '</p>';
                    actionPlayer(Stats.ID, Stats.Name, "lowerShield", null);
                }
            }

            if(Stats.Modules.Stats.Virus.Health > 55)
                Stats.Modules.Stats.Virus.Health -= 55;
            else
            {
                Stats.Modules.Stats.Virus.Health = 0;
                if(Stats.Levels.Virus > 0)
                {
                    Stats.Levels.Virus -= 1;
                    Console.innerHTML += '<p style="color: orange;">' + Language[lang].Console.VirusLower + '</p>';
                    actionPlayer(Stats.ID, Stats.Name, "lowerVirus", null);
                }
            }

            if(Stats.Modules.Stats.Power.Health > 40)
                Stats.Modules.Stats.Power.Health -= 40;
            else
            {
                Stats.Modules.Stats.Power.Health = 0;
                if(Stats.Levels.Power > 0)
                {
                    Stats.Levels.Power -= 1;
                    Console.innerHTML += '<p style="color: orange;">' + Language[lang].Console.PowerLower + '</p>';
                    actionPlayer(Stats.ID, Stats.Name, "lowerPower", null);
                }

            }

            levelUp();

            tmpStats = {
                CPU: Stats.Modules.Stats.CPU.Health,
                Virus: Stats.Modules.Stats.Virus.Health,
                Shield: Stats.Modules.Stats.Shield.Health,
                Power: Stats.Modules.Stats.Power.Health
            }

            actionPlayer(Stats.ID, Stats.Name, "saveHealth", tmpStats);


            virusBox.clearRect(0, 0, 59, 2);
            virusBox.fillStyle = "darkgreen";
            virusBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Virus.Health, 3);

            shieldBox.clearRect(0, 0, 59, 2);
            shieldBox.fillStyle = "darkgreen";
            shieldBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Shield.Health, 3);

            cpuBox.clearRect(0, 0, 59, 2);
            cpuBox.fillStyle = "darkgreen";
            cpuBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.CPU.Health, 3);

            powerBox.clearRect(0, 0, 59, 2);
            powerBox.fillStyle = "darkgreen";
            powerBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Power.Health, 3);


            Stats.Inventory[0].Stats.Points -= pdmg;


        } else {
                health -= damage;
        }

        virusAttack = {
            damage: hpdmg,
            points: damage,
            player2: Stats.ID,
            player1: Stats.ID,
            from: Stats.Name
        };

        actionPlayer(Stats.ID, Stats.Name, "virusAttack", virusAttack);

        HealthIndicator.innerHTML = "Health: " + Math.round(health).toFixed(0) + " / " + maxHealth;
        PowerIndicator.innerHTML = "Power: " + Math.round(power).toFixed(0) + " / " + PowerCapacity;
        $("#Console").animate({ scrollTop: $('#Console')[0].scrollHeight}, 0);

        /*attackSpeed = Math.floor((Math.random() * 60000) + 30001);
        attackSpeed = attackSpeed - (attackSpeed * (Stats.Modules.Stats.Shield.VirusAvoidance + 1) - attackSpeed);
        clearInterval(systemAttack);
        systemAttack = setInterval(receiveAttack, attackSpeed);*/

        return damage;
    }


    var prop;
    var invprop;

    var powerSpeed;
    var powerInterval;

    function levelUp(component) {
        // // console.log("Level up");

        var levelUp = false;

        switch (component) {


            case "CPU":
                if (Stats.Inventory[0].Stats.Points > Components.CPU.Prices[Stats.Levels.CPU + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)
                    && Stats.Resources.Connectors >= Components.CPU.Requirements[Stats.Levels.CPU].Connectors*2
                    && Stats.Resources.Chips >= Components.CPU.Requirements[Stats.Levels.CPU].Chips*2
                    && Stats.Resources.Gates >= Components.CPU.Requirements[Stats.Levels.CPU].Gates*2) {
                    if (Components.CPU.Prices[Stats.Levels.CPU + 1]) {
                        Stats.Inventory[0].Stats.Points -= Components.CPU.Prices[Stats.Levels.CPU + 1] / (Stats.Abilities.Trade / 10 / 2 + 1);
                        Stats.Resources.Connectors -= Components.CPU.Requirements[Stats.Levels.CPU].Connectors*2;
                        Stats.Resources.Gates -= Components.CPU.Requirements[Stats.Levels.CPU].Gates*2;
                        Stats.Resources.Chips -= Components.CPU.Requirements[Stats.Levels.CPU].Chips*2;
                        Stats.Levels.CPU += 1;

                        levelUp = true;
                        actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                        if (Stats.Levels.CPU == 1) {
                            showClearance("img/CPU.png", 130, 100, Description[lang].CPU);
                        }


                        Console.innerHTML += "<p class='psmall'  style='color: green'>"+ Language[lang].Console.CPUToLevel + Stats.Levels.CPU + ".</p>";
                    }

                } else {
                    showRemaining(Components.CPU.Requirements[Stats.Levels.CPU].Chips*2, Components.CPU.Requirements[Stats.Levels.CPU].Connectors*2, Components.CPU.Requirements[Stats.Levels.CPU].Gates*2, true);
                    if (Stats.Levels.CPU + 1)
                        Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>"+ Language[lang].Console.CPUPrice1 + (Stats.Levels.CPU + 1) + Language[lang].Console.CPUPrice2 + (Components.CPU.Prices[Stats.Levels.CPU + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.CPUPrice3 + ".<br>" + Language[lang].Console.Have + Stats.Resources.Connectors + Language[lang].Console.From + Components.CPU.Requirements[Stats.Levels.CPU].Connectors*2 + " connectors, "  + Stats.Resources.Chips + Language[lang].Console.From + Components.CPU.Requirements[Stats.Levels.CPU].Chips*2 + " chips, " + Stats.Resources.Gates + Language[lang].Console.From + Components.CPU.Requirements[Stats.Levels.CPU].Gates*2 + " gates.</p></div>";
                }
                break;


            case "Shield":
                //console.log(Components.Shield.Requirements);
                if (Stats.Inventory[0].Stats.Points > Components.Shield.Prices[Stats.Levels.Shield + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)
                    && Stats.Resources.Codes >= Components.Shield.Requirements[Stats.Levels.Shield].Codes*2
                    && Stats.Resources.Bugs >= Components.Shield.Requirements[Stats.Levels.Shield].Bugs*2
                    && Stats.Resources.Scripts >= Components.Shield.Requirements[Stats.Levels.Shield].Scripts*2) {
                    if (Components.Shield.Prices[Stats.Levels.Shield + 1]) {
                        Stats.Inventory[0].Stats.Points -= Components.Shield.Prices[Stats.Levels.Shield + 1] / (Stats.Abilities.Trade / 10 / 2 + 1);
                        Stats.Resources.Codes -= Components.Shield.Requirements[Stats.Levels.Shield].Codes*2;
                        Stats.Resources.Scripts -= Components.Shield.Requirements[Stats.Levels.Shield].Scripts*2;
                        Stats.Resources.Bugs -= Components.Shield.Requirements[Stats.Levels.Shield].Bugs*2;
                        Stats.Levels.Shield += 1;

                        levelUp = true;
                        actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                        //console.log(Components.Shield.Requirements);

                        if (Stats.Levels.Shield == 1) {
                            showClearance("img/Shield.png", 130, 100, Description[lang].Shield);
                        }

                        Console.innerHTML += "<p class='psmall'  style='color: green'>" + Language[lang].Console.ShieldToLevel + Stats.Levels.Shield + "</p>";
                    }
                } else {
                    showRemaining(Components.Shield.Requirements[Stats.Levels.Shield].Bugs*2, Components.Shield.Requirements[Stats.Levels.Shield].Codes*2, Components.Shield.Requirements[Stats.Levels.Shield].Scripts*2, false);
                    if (Stats.Levels.Shield + 1)
                        Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>"+ Language[lang].Console.ShieldPrice1 + (Stats.Levels.Shield + 1) + Language[lang].Console.ShieldPrice2 + (Components.Shield.Prices[Stats.Levels.Shield + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.ShieldPrice3 + ".<br>" + Language[lang].Console.Have  + Stats.Resources.Scripts + Language[lang].Console.From + Components.Shield.Requirements[Stats.Levels.Shield].Scripts*2 + " scripts, "  + Stats.Resources.Bugs + Language[lang].Console.From + Components.Shield.Requirements[Stats.Levels.Shield].Bugs*2 + " bugs, " + Stats.Resources.Bugs + Language[lang].Console.From + Components.Shield.Requirements[Stats.Levels.Shield].Codes*2 + " codes.</p></div>";
                }
                break;


            case "Power":

                if (Stats.Inventory[0].Stats.Points > Components.Power.Prices[Stats.Levels.Power + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)
                    && Stats.Resources.Connectors >= Components.Power.Requirements[Stats.Levels.Power].Connectors*2
                    && Stats.Resources.Chips >= Components.Power.Requirements[Stats.Levels.Power].Chips*2
                    && Stats.Resources.Gates >= Components.Power.Requirements[Stats.Levels.Power].Gates*2) {
                    if (Components.Power.Prices[Stats.Levels.Power + 1]) {
                        Stats.Inventory[0].Stats.Points -= Components.Power.Prices[Stats.Levels.Power + 1] / (Stats.Abilities.Trade / 10 / 2 + 1);
                        Stats.Resources.Connectors -= Components.Power.Requirements[Stats.Levels.Power].Connectors*2;
                        Stats.Resources.Gates -= Components.Power.Requirements[Stats.Levels.Power].Gates*2;
                        Stats.Resources.Chips -= Components.Power.Requirements[Stats.Levels.Power].Chips*2;
                        Stats.Levels.Power += 1;

                        levelUp = true;
                        actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                        if (Stats.Levels.Power == 1) {
                            showClearance("img/Battery.png", 130, 300, Description[lang].Power);
                        }


                        Console.innerHTML += "<p class='psmall' style='color: green'>" + Language[lang].Console.PowerToLevel + Stats.Levels.Power + ".</p>";
                    }

                } else {
                    showRemaining(Components.Power.Requirements[Stats.Levels.Power].Chips*2, Components.Power.Requirements[Stats.Levels.Power].Connectors*2, Components.Power.Requirements[Stats.Levels.Power].Gates*2, true);
                    if (Stats.Levels.Power + 1)
                        Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>"+ Language[lang].Console.PowerPrice1 + (Stats.Levels.Power + 1) + Language[lang].Console.PowerPrice2 + (Components.Power.Prices[Stats.Levels.Power + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.PowerPrice3 + ".<br>" + Language[lang].Console.Have  + Stats.Resources.Connectors + Language[lang].Console.From + Components.Power.Requirements[Stats.Levels.Power].Connectors*2 + " connectors, "  + Stats.Resources.Chips + Language[lang].Console.From + Components.Power.Requirements[Stats.Levels.Power].Chips*2 + " chips, " + Stats.Resources.Gates + Language[lang].Console.From + Components.Power.Requirements[Stats.Levels.Power].Gates*2 + " gates.</p></div>";
                }
                break;


            case "Virus":
                if (Stats.Inventory[0].Stats.Points > Components.Virus.Prices[Stats.Levels.Virus + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)
                    && Stats.Resources.Codes >= Components.Virus.Requirements[Stats.Levels.Virus].Codes*2
                    && Stats.Resources.Bugs >= Components.Virus.Requirements[Stats.Levels.Virus].Bugs*2
                    && Stats.Resources.Scripts >= Components.Virus.Requirements[Stats.Levels.Virus].Scripts*2) {
                    if (Components.Virus.Prices[Stats.Levels.Virus + 1]) {
                        if (!infect) {
                            Stats.Inventory[0].Stats.Points -= Components.Virus.Prices[Stats.Levels.Virus + 1] / (Stats.Abilities.Trade / 10 / 2 + 1);
                            Stats.Resources.Codes -= Components.Virus.Requirements[Stats.Levels.Virus].Codes*2;
                            Stats.Resources.Scripts -= Components.Virus.Requirements[Stats.Levels.Virus].Scripts*2;
                            Stats.Resources.Bugs -= Components.Virus.Requirements[Stats.Levels.Virus].Bugs*2;
                            Stats.Levels.Virus += 1;

                            levelUp = true;
                            actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                            if (Stats.Levels.Virus == 1) {
                                showClearance("img/Virus.png", 130, 300, Description[lang].Virus);
                            }

                            Console.innerHTML += "<p class='psmall'  style='color: green'>" + Language[lang].Console.VirusToLevel + Stats.Levels.Virus + ".</p>";
                        } else {
                            Console.innerHTML += "<p class='psmall'  style='color: red'>" + Language[lang].Console.VirusInUse +"</p>";
                        }

                    }
                } else {
                    showRemaining(Components.Virus.Requirements[Stats.Levels.Virus + 1].Bugs*2, Components.Virus.Requirements[Stats.Levels.Virus].Codes*2, Components.Virus.Requirements[Stats.Levels.Virus].Scripts*2, false);
                    if (Stats.Levels.Virus + 1)
                        Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>"+ Language[lang].Console.VirusPrice1 + (Stats.Levels.Virus + 1) + Language[lang].Console.VirusPrice2 + (Components.Virus.Prices[Stats.Levels.Virus + 1] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.VirusPrice3 + ".<br>" + Language[lang].Console.Have  + Stats.Resources.Scripts + Language[lang].Console.From + Components.Virus.Requirements[Stats.Levels.Virus].Scripts*2 + " scripts, "  + Stats.Resources.Bugs + Language[lang].Console.From + Components.Virus.Requirements[Stats.Levels.Virus].Bugs*2 + " bugs, " + Stats.Resources.Bugs + Language[lang].Console.From + Components.Virus.Requirements[Stats.Levels.Virus].Codes*2 + " codes.</p></div>";
                }
                break;

            case "Memory":
                if (Stats.Inventory[0].Stats.Points > MemoryPrice / (Stats.Abilities.Trade / 10 / 2 + 1)) {
                    Stats.Inventory[0].Stats.Points -= MemoryPrice / (Stats.Abilities.Trade / 10 / 2 + 1);
                    Stats.Levels.Memory += 1;

                    levelUp = true;
                    actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                    if (Stats.Levels.Memory == 1) {
                        showClearance("img/RAM.png", 130, 400, Description[lang].RAM);
                    }

                    Console.innerHTML += "<p class='psmall'  style='color: green'>" + Language[lang].Console.MemoryToLevel + Stats.Levels.Memory + ".</p>";

                } else {
                    Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>"+ Language[lang].Console.MemoryPrice1 + (Stats.Levels.Memory + 1) + Language[lang].Console.MemoryPrice2 + (MemoryPrice / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.MemoryPrice3 + "</p></div>"
                }
                break;

            case "HDD":
            if(Stats.Levels.HDD < 20)
            {
                if (Stats.Inventory[0].Stats.Points > HDDPrice / (Stats.Abilities.Trade / 10 / 2 + 1)) {
                    Stats.Inventory[0].Stats.Points -= HDDPrice / (Stats.Abilities.Trade / 10 / 2 + 1);
                    Stats.Levels.HDD += 1;

                    levelUp = true;
                    actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                    if (Stats.Levels.HDD == 1) {
                        showClearance("img/HDD.png", 130, 400, Description[lang].HDD);
                    }

                    drawInventory();

                    Console.innerHTML += "<p class='psmall'  style='color: green'>" + Language[lang].Console.HDDToLevel + Stats.Levels.HDD + ".</p>";

                } else {
                    Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>" + Language[lang].Console.HDDPrice1 + (Stats.Levels.HDD + 1) + Language[lang].Console.HDDPrice2 + (HDDPrice / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.HDDPrice3 + "</p></div>";
                }
            }
            break;

            case "Network":
                if (Stats.Inventory[0].Stats.Points > NetworkPrice / (Stats.Abilities.Trade / 10 / 2 + 1)) {
                    Stats.Inventory[0].Stats.Points -= NetworkPrice / (Stats.Abilities.Trade / 10 / 2 + 1);
                    Stats.Levels.Network += 1;

                    levelUp = true;
                    actionPlayer(Stats.ID, Stats.Name, "levelUp", component);

                    if (Stats.Levels.Network == 2) {
                        showClearance("img/Network.png", 130, 400, Description[lang].Network);
                    }

                    Console.innerHTML += "<p class='psmall'  style='color: green'>" + Language[lang].Console.NetworkToLevel + Stats.Levels.Network + ".</p>";

                } else {
                    Console.innerHTML += "<div style='border-radius: 3px;background: rgb(224, 224, 224);border-color: blue;border-bottom-width: 1px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;margin-top: 5px;padding-top: 0px;padding-bottom: 0px;'><p class='psmall'  style='color: blue'>" + Language[lang].Console.NetworkPrice1 + (Stats.Levels.Network + 1) + Language[lang].Console.NetworkPrice2 + (NetworkPrice / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2) + Language[lang].Console.NetworkPrice3 + "</p></div>"
                }
            break;
        }

        if (levelUp) {
            syncData();

            levelUp = false;
        }

        for (m = 0; m < 3; m++) {
            ID = "PowerModule" + m;
            if (m < Stats.Modules.Quantity.Power) {
                document.getElementById(ID).innerHTML = "1";
            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "CPUModule" + m;
            if (m < Stats.Modules.Quantity.CPU) {
                document.getElementById(ID).innerHTML = "1";

            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "VirusModule" + m;
            if (m < Stats.Modules.Quantity.Virus) {
                document.getElementById(ID).innerHTML = "1";
            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "ShieldModule" + m;
            if (m < Stats.Modules.Quantity.Shield) {
                document.getElementById(ID).innerHTML = "1";
            } else {
                document.getElementById(ID).innerHTML = "0";
            }
        }

        VirusStrength = document.getElementById('VirusStrength');
        tvdmg = Components.Virus.Complexity[Stats.Levels.Virus] * Components.Virus.Damage[Stats.Levels.Virus] * (Stats.Modules.Stats.Virus.VirusBoost / 10 + 1);
        VirusStrength.innerHTML = 'S: ' + Math.round(tvdmg / 63);

        CPUValue = document.getElementById('CPUValue');
        CPUValue.innerHTML = 'C: +' + ((Components.CPU.Values[Stats.Levels.CPU] * 2) * SystemBonus * (Stats.Modules.Stats.CPU.CPUBoost + 1)).toFixed(2) + "/s";

        //patch puntos habilidad
        if (Stats.Abilities.Points == 0 && Stats.Abilities.Architecture == 0 && Stats.Abilities.Trade == 0 && Stats.Abilities.Storage == 0 && Stats.Abilities.Programming == 0 && Stats.Abilities.Engineering == 0) {
            Stats.Abilities.Points = Stats.Levels.System;
        }

        MemoryBasePoints = 256;

        HDDBasePrice = 150;
        HDDBaseSlots = 2;

        NetworkBasePrice = 10;

        NetworkPrice = NetworkBasePrice;
        if (Stats.Levels.Network > 0)
            for (l = 0; l < Stats.Levels.Network; l++) {
                NetworkPrice = NetworkPrice * 1.6;
            }

        HDDPrice = HDDBasePrice;
        HDDSlots = 2;
        if (Stats.Levels.HDD > 0)
            for (l = 0; l < Stats.Levels.HDD; l++) {
                HDDPrice = HDDPrice * 1.8;
                HDDSlots += 1;
            }


        if (Stats.Levels.Memory > 0)
            MemoryPrice = MemoryPoints / 2;
        else
            MemoryPrice = 60;

        MemoryPoints = MemoryBasePoints;
        if (Stats.Levels.Memory < 30 && Stats.Levels.Memory > 0)
            MemoryPoints = MemoryPoints * (MemoryPoints / invProp(Stats.Levels.Memory, 30)) * Stats.Levels.Memory;


        PowerCapacity = (Components.Power.Values[Stats.Levels.Power] + Stats.Modules.Stats.Power.Power) * ((Stats.Abilities.Architecture / 10)*4 + 1);
        tmpPowerSpeed = 16000 - ((Stats.Levels.Power * 200) * SystemBonus); //(Stats.Levels.System / 10)
        if (tmpPowerSpeed > 7000)
            powerSpeed = tmpPowerSpeed;
        else
            powerSpeed = 7000;

        PowerBurst = (4 * Stats.Levels.Power) * (SystemBonus + Stats.Modules.Stats.Power.Recharge);
        // // console.log(PowerBurst);
        ShieldHealing = ((Stats.Levels.System / 10) + 1) * Components.Shield.Healing[Stats.Levels.Shield];

        PowerHealingloss = (Stats.Levels.System / 10) * (Stats.Levels.Shield / 10 - Stats.Modules.Stats.Power.ShieldConsumption);
        PowerCPUloss = 0.15 * Stats.Levels.CPU * (SystemBonus - Stats.Modules.Stats.Power.CPUConsumption);

        ShieldStrength = 0;
        for (s = 0; s <= Stats.Levels.Shield; s++) {
            ShieldStrength += Components.Shield.Strength[s];
        }


        Components.Power.Prices[0] = Components.Power.Prices[Stats.Levels.Power + 1];
        Components.CPU.Prices[0] = Components.CPU.Prices[Stats.Levels.CPU + 1];
        Components.Shield.Prices[0] = Components.Shield.Prices[Stats.Levels.Shield + 1];
        Components.Virus.Prices[0] = Components.Virus.Prices[Stats.Levels.Virus + 1];
        if(Stats.Levels.CPU < 25)
        {
            document.getElementById('CPUPrice').innerHTML = "$" + (Components.CPU.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2);
        } else {
            document.getElementById('CPUPrice').innerHTML = "Max Level.";
        }

        if(Stats.Levels.Shield < 25)
        {
            document.getElementById('ShieldPrice').innerHTML = "$" + (Components.Shield.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2);
        } else {
            document.getElementById('CPUPrice').innerHTML = "Max Level.";
        }
        
        if(Stats.Levels.Power < 25)
        {
            document.getElementById('PowerPrice').innerHTML = "$" + (Components.Power.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2);
        } else {
            document.getElementById('CPUPrice').innerHTML = "Max Level.";
        }
        
        if(Stats.Levels.Virus < 25)
        {
            document.getElementById('VirusPrice').innerHTML = "$" + (Components.Virus.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2);
        } else {
            document.getElementById('CPUPrice').innerHTML = "Max Level.";
        }

        document.getElementById("Viruslevel").innerHTML = "+" + Stats.Levels.Virus;
        document.getElementById("CPUlevel").innerHTML = "+" + Stats.Levels.CPU;
        document.getElementById("Shieldlevel").innerHTML = "+" + Stats.Levels.Shield;
        document.getElementById("Powerlevel").innerHTML = "+" + Stats.Levels.Power;
        document.getElementById("Memorylevel").innerHTML = "+" + Stats.Levels.Memory;
        document.getElementById("HDDlevel").innerHTML = "+" + Stats.Levels.HDD;
        document.getElementById("Networklevel").innerHTML = "+" + Stats.Levels.Network;

        document.getElementById('ShieldHealing').innerHTML = 'H: +' + (ShieldHealing * 2).toFixed(2) + "/s";

        document.getElementById('PowerBurst').innerHTML = "R: +" + PowerBurst.toFixed(1);
        document.getElementById('PowerSpeed').innerHTML = "E: /" + (powerSpeed / 1000).toFixed(1) + "s";
        document.getElementById('PowerCPU').innerHTML = "C: -" + (PowerCPUloss * 2).toFixed(2) + "/s";
        document.getElementById('PowerHealing').innerHTML = "H: -" + (PowerHealingloss * 2).toFixed(2) + "/s";

        maxHealth = Math.round(100 + (20 * Stats.Levels.Shield * SystemBonus * (Stats.Modules.Stats.Shield.StabilityBoost + 1)) * ((Stats.Abilities.Architecture / 10)*4 + 1));

        virusSpeed = 1000 / Stats.Levels.Network;//(((Components.Virus.Damage[Stats.Levels.Virus] / Components.Virus.Complexity[Stats.Levels.Virus]) / Components.CPU.Values[Stats.Levels.CPU]) * Components.Shield.Strength[0]) * (1+(Stats.Levels.System / 10));
        if (infect && (!directionalVirus && !canInfect)) {
            clearInterval(infection);
            infection = setInterval(fillBox, virusSpeed);
        }

        //Arreglar esto
        clearInterval(powerInterval);
        // // console.log(powerSpeed);
        powerInterval = setInterval(powerUp, powerSpeed);

        showAbilities();

        for (r = 0; r < Rank.length; r++)
            if (Rank[r].Name == Stats.Name)
                Rank[r].Level = Stats.Levels.System;

        $("#Console").animate({ scrollTop: $('#Console')[0].scrollHeight}, 0);
        drawStats();
        /*if(dataReady)
         {
         saveData();
         }*/
    }

    function drawInstructions() {
        //console.log(instruction);
        var index = 0;
        document.getElementById('instructionsSquare').innerHTML = "";
        for (Item in Instructions[lang]) {
            index = Item;
            if (index == 0 || index == 1) {

                document.getElementById('instructionsSquare').innerHTML += '<h3>' + Instructions[lang][Item].Title + '</h3><p>' + Instructions[lang][Item].Description + '</p>';

                if (Instructions[lang][Item].Items)
                    for (Subitem in Instructions[lang][Item].Items)
                        document.getElementById('instructionsSquare').innerHTML += '<h4>' + Instructions[lang][Item].Items[Subitem].Title + '</h4><p>' + Instructions[lang][Item].Items[Subitem].Description + '</p>';

            }
        }
        for (Item in Instructions[lang]) {
            index = Item;
            if (index == 3) {

                document.getElementById('instructionsSquare').innerHTML += '<h3>' + Instructions[lang][Item].Title + '</h3><p>' + Instructions[lang][Item].Description + '</p>';

                if (Instructions[lang][Item].Items)
                    for (Subitem in Instructions[lang][Item].Items)
                        document.getElementById('instructionsSquare').innerHTML += '<h4 style="padding-left: 20px;">' + Instructions[lang][Item].Items[Subitem].Title + '</h4><p style="padding-left: 20px;">' + Instructions[lang][Item].Items[Subitem].Description + '</p>';

            }
        }
        for (Item in Instructions[lang]) {
            index = Item;
            if (index == 4) {

                document.getElementById('instructionsSquare').innerHTML += '<h3>'+Instructions[lang][Item].Title + '</h3><p>' + Instructions[lang][Item].Description + '</p>';

                if (Instructions[lang][Item].Items)
                    for (Subitem in Instructions[lang][Item].Items)
                        document.getElementById('instructionsSquare').innerHTML += '<h4 style="padding-left: 20px;">' + Instructions[lang][Item].Items[Subitem].Title + '</h4><p style="padding-left: 20px;">' + Instructions[lang][Item].Items[Subitem].Description + '</p>';

            }
        }
        for (Item in Instructions[lang]) {
            index = Item;
            if (index >= 5) {

                document.getElementById('instructionsSquare').innerHTML += '<h3>' + Instructions[lang][Item].Title + '</h3><p>' + Instructions[lang][Item].Description + '</p>';

                if (Instructions[lang][Item].Items)
                    for (Subitem in Instructions[lang][Item].Items)
                        document.getElementById('instructionsSquare').innerHTML += '<h4>' + Instructions[lang][Item].Items[Subitem].Title + '</h4><p>' + Instructions[lang][Item].Items[Subitem].Description + '</p>';

            }
        }

    }


    function drawProfile() {
        $('#Inventory').hide();
        $('#Profile').show();

        document.getElementById("InventoryTab").style.color = "#2978a1";
        document.getElementById("ProfileTab").style.color = "#35c5ff";


    }

    function showRemaining(m1, m2, m3, physical) {
        var indicator1;
        var indicator2;
        var indicator3;

        if (physical) {
            indicator1 = document.getElementById('chips');
            indicator2 = document.getElementById('connectors');
            indicator3 = document.getElementById('gates');
        } else {
            indicator1 = document.getElementById('bugs');
            indicator2 = document.getElementById('codes');
            indicator3 = document.getElementById('scripts');
        }

        indicator1.innerHTML = m1;
        indicator2.innerHTML = m2;
        indicator3.innerHTML = m3;
        indicator1.style.color = "red";
        indicator2.style.color = "red";
        indicator3.style.color = "red";

        setTimeout(function () {

            showResources();
        }, 2000);
    }

    function invProp(number, range) {
        return (number - range) / range * (-range);
    }

    var virusSpeed = 0;

    function sendMessage()
    {
        var xmlhttp = new XMLHttpRequest();

        var message = document.getElementById('textMessage').value;
        document.getElementById('textMessage').value = "";

        if(Stats.Levels.System > 5)
        {
            if(message != "") {
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        //document.getElementById("MessageBox").innerHTML = '<tr class="messageTo"><td width="100%"> -><b>' + name+ '</b></td></tr><tr><td>' + message+ '</td></tr><tr align="right"><td style="font-size: 8px; color: grey;">' + new Date().getYear()+"-"+new Date().getMonth()+"-"+ new Date().getDay() + " " + new Date().getHours() + "-" + new Date().getMinutes() + "-" + new Date().getSeconds() + '</td></tr>' + document.getElementById("MessageBox").innerHTML;
                        document.getElementById("RegionText").innerHTML = "Welcome to Bitquest regional Chat.";
                        document.getElementById("RegionText").innerHTML += xmlhttp.response;

                    }
                }

                if(document.getElementById("textTo").value != "")
                {
                    if(Stats.Inventory[0].Stats.Points > 1000)
                    {
                        xmlhttp.open("GET", "ajax.php?MESSAGE=" + message + "&FROM=" + Stats.Name + "&ID=" + Stats.ID, true);
                        xmlhttp.send();
                        Stats.Inventory[0].Stats.Points -= 1000;
                    }
                } else {
                    if(Stats.Inventory[0].Stats.Points > 1000)
                    {
                        xmlhttp.open("GET", "ajax.php?MESSAGE=" + message + "&FROM=" + Stats.Name + "&ID=" + Stats.ID + "&TO=" + document.getElementById("textTo").value, true);
                        xmlhttp.send();
                        Stats.Inventory[0].Stats.Points -= 1000;
                        document.getElementById("textTo").value = "";
                    }
                }

            }
        } else {
            document.getElementById("RegionText").innerHTML += "<p>Minimum level: 5</p>";
        }
    }

    $(document).ready(function () {

        bitCvas = document.getElementById("bitCvas");
        bitBox = bitCvas.getContext("2d");
        //Implementacion de getters y setters

        virusHealthCvas = document.getElementById("virusHealth");
        virusBox = virusHealthCvas.getContext("2d");
        cpuHealthCvas = document.getElementById("cpuHealth");
        cpuBox = cpuHealthCvas.getContext("2d");
        shieldHealthCvas = document.getElementById("shieldHealth");
        shieldBox = shieldHealthCvas.getContext("2d");
        powerHealthCvas = document.getElementById("powerHealth");
        powerBox = powerHealthCvas.getContext("2d");

        watchCvas = document.getElementById("watchCvas");
        watchBox = watchCvas.getContext("2d");

        virusBox.fillStyle = "darkgreen";
        virusBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Virus.Health, 3);

        shieldBox.fillStyle = "darkgreen";
        shieldBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Shield.Health, 3);

        cpuBox.fillStyle = "darkgreen";
        cpuBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.CPU.Health, 3);

        powerBox.fillStyle = "darkgreen";
        powerBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.Power.Health, 3);

        $('#Inventory').hide();
        $('#Battle').hide();
        $('#Clearance').hide();
        $('#Detected').hide();
        $('#rankingBox').hide();


        tabMaterials();
        $('#storeBox').hide();
        $('#instructionsBox').hide();
        drawBitmap();
        $('#mapBox').hide();
        $('#messageBox').hide();
        $('#statisticsBox').hide();
        $('#RegionText').hide();
        $('#GlobalText').hide();
        $('#PrivateText').hide();
        $('#textTo').hide();
        $('#infoBox').hide();
        //$('#Blackout').hide();
        //$('#Initialize').hide();

        mapShown = false;

        virusBox.fillRect(0, 0, 59/100*Stats.Modules.Stats.CPU.Health, 1);


        //New API
        window.fbAsyncInit = function () {
            FB.init({
                appId: '311553562324982',
                xfbml: true,
                version: 'v2.0'
            });

            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    testAPI();

                    delayedFunction = function() {
                        location.reload();
                    };

                    delayedUpdate = setInterval(delayedFunction, 15000);
                }
                else {
                    FB.login();
                }
            });

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        //Old API
        /*window.fbAsyncInit = function () {
         FB.init({
         appId: '311553562324982',
         status: true, // check login status
         cookie: true, // enable cookies to allow the server to access the session
         xfbml: true  // parse XFBML
         });

         FB.Event.subscribe('auth.authResponseChange', function (response) {
         if (response.status === 'connected') {
         testAPI();
         } else if (response.status === 'not_authorized') {
         FB.login();
         } else {
         FB.login();
         }
         });
         };

         // Load the SDK asynchronously
         (function (d) {
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {
         return;
         }
         js = d.createElement('script');
         js.id = id;
         js.async = true;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         ref.parentNode.insertBefore(js, ref);
         }(document));
         */


        function testAPI() {
            // console.log('Welcome!  Fetching your information.... ');
            FB.api('/me/?fields=', {fields: ["name", "first_name", "id", "locale"]}, function (response) {
                // console.log(response);

                if(response.languages)
                    lang = response.locale.substring(0, 2);



                translate();
                progressBar(Language[lang].Loading.Step2);
                loginTimer = setInterval(progressDelay, 1000);
                Stats.Name = response.first_name;
                Stats.ID = response.id;


                Stats.Picture = "http://graph.facebook.com/" + response.id + "/picture?type=large";


                // console.log(response.picture.data.url);
                // // console.log(response);
                //loadData(response.id);
                $('#Profile').hide();
                $('#Inventory').show();

                // console.log(Stats);
                found = setTimeout(function () { sendIt(response.id, response.first_name, Stats.Picture); }, 2000);
                positionSet = false;
                // // console.log(found);
                if (found) {
                    actionPlayer(response.id, response.first_name, "connect", null);
                    setTimeout(function () { positionSet = loadData(response.id); }, 2000);
                    actionPlayer(Stats.ID, Stats.Name, "setLanguage", lang);
                    progressBar(Language[lang].Loading.Step3 + response.name + '.');
                    drawStats();
                    verifieduser = true;
                    //setTimeout(function() { location.reload(); }, 1000);
                } else {
                    location.reload();
                }

                drawInventory();
                // // console.log(parseXml(found));

            });
        }

        ShieldStrength = Components.Shield.Strength[0];

        Components.CPU.Prices[0] = (Components.CPU.Prices[Stats.Levels.CPU + 1]).toFixed(2);
        Components.Power.Prices[0] = (Components.Power.Prices[Stats.Levels.Power + 1]).toFixed(2);
        Components.Shield.Prices[0] = (Components.Shield.Prices[Stats.Levels.Shield + 1]).toFixed(2);
        document.getElementById('CPUPrice').innerHTML = "$" + Components.CPU.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1);
        document.getElementById('PowerPrice').innerHTML = "$" + Components.Power.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1);
        document.getElementById('ShieldPrice').innerHTML = "$" + Components.Power.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1);

        Shield = document.getElementById("CPU");

        $('#CPU').click(function () {
            levelUp("CPU");
        });

        $('#Shield').click(function () {
            levelUp("Shield");
        });

        $('#Power').click(function () {
            levelUp("Power");
        });

        $('#Virus').click(function () {
            levelUp("Virus");
        });

        $('#Memory').click(function () {
            levelUp("Memory");
        });

        $('#HDD').click(function () {
            levelUp("HDD");
        });

        $('#Network').click(function () {
            levelUp("Network");
        });

        $('#InventoryTab').click(function () {
            drawInventory();
        });

        $('#ProfileTab').click(function () {
            drawProfile();
        });

        $('#drawShop').click(function () {
            $('#storeBox').show();
            tabMaterials();
        });

        $('#drawInstructions').click(function () {
            $('#instructionsBox').show();
            drawInstructions("Instructions");
        });

        $('#closeShop').click(function () {
            $('#storeBox').hide();
        });

        $('#closeStatistics').click(function () {
            $('#statisticsBox').hide();
        });

        $('#closeInstructions').click(function () {
            $('#instructionsBox').hide();
        });

        $('#mapClosebutton').click(function () {
            $('#mapBox').hide();
            mapShown = false;
            sendItem = false;
        });

        $('#closeRank').click(function () {
            $('#rankingBox').hide();
        });

        $('#SpreadVirus').click(function () {
            if (Stats.Levels.Virus > 0) {
                if (canInfect == true && infect == false) {
                    virusTimer = Stats.Levels.Virus * 30;
                    //console.log(virusTimer);
                    virusTimer = virusTimer - ((virusTimer * (Stats.Modules.Stats.Virus.VirusTimer + 1)) - virusTimer);
                    //console.log(virusTimer);
                    //console.log(Stats.Modules.Stats.Virus.VirusTimer);
                    spreadVirus();
                    document.getElementById('SpreadVirus').innerHTML = Language[lang].Button.Uploading;
                }
            } else {
                Console.innerHTML += "<p class='psmall'  style='color: red'>" + Language[lang].Console.VirusHigher+ "</p>";
            }
        });

        $('#CPUInfo').click(function () {
            showClearance('img/CPU.png', 130, 100, Description[lang].CPU);
        });

        $('#ShieldInfo').click(function () {
            showClearance('img/Shield.png', 130, 100, Description[lang].Shield);
        });

        $('#VirusInfo').click(function () {
            showClearance('img/Virus.png', 130, 300, Description[lang].Virus);
        });

        $('#PowerInfo').click(function () {
            showClearance('img/Battery.png', 130, 300, Description[lang].Power);
        });

        $('#showShop').click(function () {
            $('#shopWindow').show();
        });

        $('#drawMap').click(function () {
            $('#mapBox').show();
            $('#mapClosebutton').show();
            mapShown = true;

        });

        $('#drawRank').click(function () {
            $('#rankingBox').show();

            xml = loadXMLDoc("users/ranks.xml");

            XUsers = xml.getElementsByTagName("User");

            Rank = [];

            for (u = 0; u < XUsers.length; u++) {
                XUser = XUsers[u];

                User = {
                    Name: XUser.getElementsByTagName("Name")[0].textContent,
                    Level: parseInt(XUser.getElementsByTagName("Level")[0].textContent),
                    Picture: XUser.getElementsByTagName("Picture")[0].textContent
                };

                Rank.push(User);
            }

            Ranking = document.getElementById('rankingSquare');

            var aux;


            Ranking.innerHTML = "";
            for (y = Rank.length; y >= 0; y--) {
                for (x = 0; x < y - 1; x++) {
                    if (Rank[x].Level < Rank[x + 1].Level) {
                        aux = {
                            Name: Rank[x].Name,
                            Level: Rank[x].Level,
                            Picture: Rank[x].Picture
                        };

                        Rank[x] = {
                            Name: Rank[x + 1].Name,
                            Level: Rank[x + 1].Level,
                            Picture: Rank[x + 1].Picture
                        };

                        Rank[x + 1] = aux;
                    }
                }
            }


            for (p = 0; p < Rank.length; p++) {
                if (Rank[p])
                    if (Rank[p].Name == Stats.Name)
                        if(p == 0)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingFirst.png' style='padding-right: 8px;'></td></tr></table>";
                        else if(p == 1)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingSecond.png' style='padding-right: 8px;'></td></tr></table>";
                        else if(p == 2)
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingThird.png' style='padding-right: 8px;'></td></tr></table>";
                        else
                        Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p class="prank" style="text-align: center !important;">Lv' + Rank[p].Level + '</p></td><td><p class="prank">' + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingDefault.png' style='padding-right: 8px;'></td></tr></table>";
                else
                    if(p == 0)
                    Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingFirst.png' style='padding-right: 8px;'></td></tr></table>";
                    else if(p == 1)
                    Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingSecond.png' style='padding-right: 8px;'></td></tr></table>";
                    else if(p == 2)
                    Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingThird.png' style='padding-right: 8px;'></td></tr></table>";
                    else
                    Ranking.innerHTML += '<table width="100%" class="playerRank"><tr><td width="25px"><p>'+parseInt(p+1)+'</p></td><td width="30px"><img height="30px" width="30px" src="' + Rank[p].Picture + '"></td><td width="20px"><p style="text-align: center !important">Lv' + Rank[p].Level + "</p></td><td><p>" + Rank[p].Name + "</p></td><td style='text-align: right;'><img src='img/RankingDefault.png' style='padding-right: 8px;'></td></tr></table>";
                else
                    Ranking.innerHTML += '<table width="100%" class="playerRank2" style="margin-bottom: 5px; opacity: 0.8; padding: 5px;"><tr><td width="30px"></td><td width="20px"><p style="text-align: center !important">' + "</p></td><td><p>Empty</p></td></tr></table>";
            }
        });

        $('#drawStatistics').click(function () {
            $('#statisticsBox').show();

            Statistics = document.getElementById("statisticsSquare");

            for(Component in Components)
            {
                Statistics.innerHTML += "<h2 style='margin-top: 20px; margin-bottom: -10px;'>" + Component + "</h2>";

                //console.log(Component);
                Statistics.innerHTML += "<h3>" + Language[lang].Label.Price + "</h3>";
                for(Price in Components[Component].Prices)
                {
                    if(Price == 0)
                    Statistics.innerHTML += "<p><b>Current price: " + Components[Component].Prices[Price] + "</b> -" + parseFloat(Components[Component].Prices[Price]-(Components[Component].Prices[Price]/(Stats.Abilities.Trade / 10 / 2 + 1))).toFixed(2) + "</p>"
                    else
                    Statistics.innerHTML += "<p>Lv" + Price + ": "+ Components[Component].Prices[Price] + "</p>"
                }
                
                switch(Component)
                {
                    case "CPU":
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Clock</h3>";
                    for(Value in Components[Component].Values)
                    {
                        Statistics.innerHTML += "<p>Clock +" + Value + ": " + Components[Component].Values[Value] + "</p>"
                    }
                    break;
                    case "Shield":
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Strength</h3>";
                    for(Strength in Components[Component].Strength)
                    {
                        Statistics.innerHTML += "<p>Strength +" + Strength + ": " + Components[Component].Strength[Strength] + "</p>"
                    }
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Healing</h3>";
                    for(Healing in Components[Component].Healing)
                    {
                        Statistics.innerHTML += "<p>Healing +" + Healing + ": " + Components[Component].Healing[Healing] + "</p>"
                    }
                    break;
                    case "Virus":
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Complexity</h3>";
                    for(Complexity in Components[Component].Complexity)
                    {
                        Statistics.innerHTML += "<p>Complexity +" + Complexity + ": " + Components[Component].Complexity[Complexity] + "</p>"
                    }
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Damage</h3>";
                    for(Damage in Components[Component].Damage)
                    {
                        Statistics.innerHTML += "<p>Damage +" + Damage + ": " + Components[Component].Damage[Damage] + "</p>"
                    }
                    break;
                    case "Power":
                    Statistics.innerHTML += "<h3>" + Language[lang].Label.Value + " Power</h3>";
                    for(Value in Components[Component].Values)
                    {
                        Statistics.innerHTML += "<p>Power +" + Value + ": " + Components[Component].Values[Value] + "</p>"
                    }
                    break;
                }
            }

        });


        $('#programacionButton').click(function () {
            addAbilities('Programming');
        });
        $('#ingenieriaButton').click(function () {
            addAbilities('Engineering');
        });
        $('#almacenamientoButton').click(function () {
            addAbilities('Storage');
        });
        $('#comercioButton').click(function () {
            addAbilities('Trade');
        });
        $('#arquitecturaButton').click(function () {
            addAbilities('Architecture');
        });

        buttonDisabled = function() {
                document.getElementById("buttonMessage").disabled = false;
                document.getElementById("buttonMessage").innerHTML = "Message";
            };


        $('#buttonMessage').click(function () {
            sendMessage();
            document.getElementById("buttonMessage").disabled = true;
            document.getElementById("buttonMessage").innerHTML = "-1000 EP";

            setTimeout(buttonDisabled, 5000);
        });

        $('#consoleButton').click(function () {
            $('#ConsoleText').show();
            $('#RegionText').hide();
            $('#PrivateText').hide();
            $('#textTo').hide();
        });

        $('#regionButton').click(function () {
            $('#ConsoleText').hide();
            $('#RegionText').show();
            $('#PrivateText').hide();
            $('#textTo').hide();
        });

        $('#privateButton').click(function () {
            $('#ConsoleText').hide();
            $('#RegionText').hide();
            $('#PrivateText').show();
            $('#textTo').show();
        });

        document.getElementById("tabMaterials").addEventListener("click", tabMaterials, false);
        document.getElementById("tabInventory").addEventListener("click", tabInventory, false);
        document.getElementById("tabSell").addEventListener("click", tabSell, false);
        document.getElementById("tabStatistics").addEventListener("click", tabStatistics, false);


        bitCvas.addEventListener("click", clickEvent, false);

        document.getElementById("tabInstructions").addEventListener("click", function () {
            drawInstructions;
        }, false);
        //document.getElementById("tabHabilidades").addEventListener("click", function() { drawInstructions("Abilities"); }, false);
        //document.getElementById("tabComponentes").addEventListener("click", function() { drawInstructions("Components"); }, false);
        //document.getElementById("tabDetalles").addEventListener("click", function() { drawInstructions("Details"); }, false);

        /*var Slot = {
         Position: {
         x: 0,
         y: 0
         },
         Item: {
         ID: 0,
         Name: "Puntos",
         Class: "Global",
         Level: "0",
         Count: points,
         Status: "Quitartable",
         Ubicar: null
         }
         };

         // console.log(Stats);

         Inventory.push(Slot);

         Slot = {
         Position: {
         x: 1,
         y: 0
         },
         Item: {
         ID: 1,
         Name: "Corriente Alterna",
         Class: "Power",
         Level: 0,
         Count: 0,
         Stats: Items.Power.AltCurrent,
         Status: "Quitar",
         Ubicar: null
         }
         };
         Inventory.push(Slot);

         Slot = {
         Position: {
         x: 2,
         y: 0
         },
         Item: {
         ID: 2,
         Name: "Capacitores",
         Class: "Power",
         Level: 0,
         Count: 0,
         Stats: Items.Power.Capacitors,
         Status: "Quitar",
         Ubicar: null
         }
         };
         Inventory.push(Slot);

         Slot = {
         Position: {
         x: 1,
         y: 3
         },
         Item: {
         ID: 3,
         Name: "Bateria",
         Class: "Power",
         Level: 0,
         Count: 0,
         Stats: Items.Power.Reserve,
         Status: "Quitar"
         }
         };
         Inventory.push(Slot);
         */

        Console = document.getElementById("ConsoleText");
        HealthIndicator = document.getElementById("healthText");
        PowerIndicator = document.getElementById("powerText");

        healthCvas = document.getElementById("HealthCvas");
        healthCore = healthCvas.getContext("2d");
        healthPoints = healthCvas.getContext("2d");

        powerCvas = document.getElementById("PowerCvas");
        powerBar = powerCvas.getContext("2d");
        powerPoints = powerCvas.getContext("2d");

        powerrange = (power / (Components.Power.Values[Stats.Levels.Power] / 100));
        if (powerrange < 70)
            powerPoints.fillStyle = 'orange';
        else
            powerPoints.fillStyle = 'green';

        healthCore.fillStyle = 'black';
        healthCore.beginPath();
        healthCore.arc(50, 50, 50, 0, Math.PI * 2);
        healthCore.closePath();
        healthCore.fill();

        powerBar.fillStyle = 'black';
        powerBar.beginPath();
        powerBar.rect(0, 0, 100, 30);
        powerBar.closePath();
        powerBar.fill();


        Field = document.getElementById("Battle");
        FieldBox = Field.getContext("2d");

        prop = ((Components.Virus.Damage[0] / Components.Virus.Complexity[0]) / Components.CPU.Values[Stats.Levels.CPU]) * Components.Shield.Strength[10];

        InventoryCvas = document.getElementById('Inventory');
        InventoryBox = InventoryCvas.getContext('2d');
        InventoryText = InventoryCvas.getContext('2d');

        chips = document.getElementById("chips");
        gates = document.getElementById("gates");
        connectors = document.getElementById("connectors");

        scripts = document.getElementById("scripts");
        codes = document.getElementById("codes");
        bugs = document.getElementById("bugs");

        InventoryCvas.addEventListener("click", clickEvent, false);
    });

    function translate()
    {
        document.getElementById("titleMaterials").innerHTML = Language[lang].Title.Materials;
        document.getElementById("titleStatistics").innerHTML = Language[lang].Title.Stats;
        document.getElementById("titleMenu").innerHTML = Language[lang].Title.Menu;
        document.getElementById("titleCounter").innerHTML = Language[lang].Title.Counter;
        document.getElementById("InventoryTab").innerHTML = Language[lang].Button.Inventary;
        document.getElementById("ProfileTab").innerHTML = Language[lang].Button.Profile;
        document.getElementById("tabSell").innerHTML = Language[lang].Button.Selling;
        document.getElementById("tabInventory").innerHTML = Language[lang].Button.Inventary;
        document.getElementById("tabMaterials").innerHTML = Language[lang].Button.Resources;
        document.getElementById("tabInstructions").innerHTML = Language[lang].Button.Instructions;
        document.getElementById("programacionButton").innerHTML = Language[lang].Label.Programming;
        document.getElementById("ingenieriaButton").innerHTML = Language[lang].Label.Engineering;
        document.getElementById("almacenamientoButton").innerHTML = Language[lang].Label.Storage;
        document.getElementById("comercioButton").innerHTML = Language[lang].Label.Trade;
        document.getElementById("arquitecturaButton").innerHTML = Language[lang].Label.Architecture;
        document.getElementById("pointsLabel").innerHTML = Language[lang].Label.Points;
        //document.getElementById("buttonStore").innerHTML = Language[lang].Button.Store;
        //document.getElementById("buttonWorld").innerHTML = Language[lang].Button.World;
        document.getElementById("SpreadVirus").innerHTML = Language[lang].Button.Send;
        document.getElementById("drawInstructions").innerHTML = Language[lang].Button.Instructions;
        document.getElementById("selectLabel").innerHTML = Language[lang].Label.Warning;
        document.getElementById("loadingMessage").innerHTML = Language[lang].Loading.Step1;
        document.getElementById("loginTitle").innerHTML = Language[lang].Loading.Title;
        document.getElementById("loginLogin").innerHTML = Language[lang].Loading.Login;
        document.getElementById("gameWarning").innerHTML = Language[lang].Loading.Warning;

        document.getElementById("infoSquare").innerHTML = Language[lang].Description.infoText1;
    }

    function drawInventory() {

        levelUp();
        $('#Inventory').show();
        $('#Profile').hide();

        InventoryBox.clearRect(0, 0, 400, 1200);
        tab = "Inventory";
        document.getElementById("InventoryTab").style.color = "#35c5ff";
        document.getElementById("ProfileTab").style.color = "#2978a1";
        hline = 38;
        wline = 38;

        hlines = 200 / hline;
        wlines = 160 / wline;
        citem = 0;

        for (y = 0; y < hlines - 1; y++) {
            for (x = 0; x < wlines - 1; x++) {

                add = true;
                for (i = 0; i < Stats.Inventory.length; i++) {
                    if (Stats.Inventory[i])
                        if (Stats.Inventory[i].x == x && Stats.Inventory[i].y == y)
                            add = false;
                }

                if (add) {

                    sX = (x * wline) * 2 + 10;
                    sY = (y * hline) * 2 + 1;

                    //Text position
                    tX = (x * wline + 7) * 2;
                    tY = (y * hline + 7) * 2;

                    if (citem < HDDSlots) {
                        InventoryText.strokeStyle = "black";
                        InventoryBox.fillStyle = 'white';
                        InventoryBox.beginPath();
                        InventoryBox.rect(sX, sY, wline * 2 - 3, hline * 2 - 3);
                        InventoryBox.closePath();
                        InventoryBox.fill();
                        InventoryBox.stroke();


                        InventoryText.font = "13pt Arial";


                        ItemImage = document.getElementById("Empty");
                        InventoryText.strokeStyle = "lightgrey";
                        InventoryBox.drawImage(ItemImage, tX - 4, tY - 14, 76, 76);
                        //InventoryText.strokeText("Empty", tX + 9, tY + 28);


                        /*Slot = {
                         Position: {
                         x: x,
                         y: y
                         },
                         Item: {
                         ID: "Empty",
                         Name: "Empty",
                         Class: "Empty",
                         Level: "Empty",
                         Count: "Empty"
                         }
                         };

                         Inventory.push(Slot);*/
                    } else {
                        InventoryText.strokeStyle = "black";
                        InventoryBox.fillStyle = '#2E434E';
                        InventoryBox.beginPath();
                        InventoryBox.rect(sX, sY, wline * 2 - 3, hline * 2 - 3);
                        InventoryBox.closePath();
                        InventoryBox.fill();
                        InventoryBox.stroke();


                        InventoryText.font = "13pt Arial";


                        InventoryText.strokeStyle = "lightgrey";
                        InventoryText.strokeText("X", tX + 26, tY + 30);
                    }
                }
                InventoryBox.fillStyle = 'white';


                //Box position
                if (Stats.Inventory[citem]) {
                    sX = (Stats.Inventory[citem].x * wline) * 2 + 10;
                    sY = (Stats.Inventory[citem].y * hline) * 2 + 1;

                    //Text position
                    tX = (Stats.Inventory[citem].x * wline + 7) * 2;
                    tY = (Stats.Inventory[citem].y * hline + 7) * 2;

                    InventoryText.strokeStyle = "black";
                    InventoryBox.fillStyle = 'white';
                    InventoryBox.beginPath();
                    InventoryBox.rect(sX, sY, wline * 2 - 3, hline * 2 - 3);
                    InventoryBox.closePath();
                    InventoryBox.fill();
                    InventoryBox.stroke();

                    ItemImage = document.getElementById(Stats.Inventory[citem].Name);
                    if (ItemImage) {
                        InventoryBox.drawImage(ItemImage, sX, sY, 76, 76);
                    }

                    /*if (citem >= 2 && citem <= 3) {
                     // console.log(Stats.Inventory[citem].x * wline);
                     // console.log(Stats.Inventory[citem].Name);
                     // console.log(citem);
                     }*/

                    InventoryText.font = "13pt Arial";

                    if (Stats.Inventory[citem].Name != "Empty") {
                        InventoryText.strokeStyle = "black";
                        //InventoryText.strokeText(Stats.Inventory[citem].Name, tX, tY + 10);

                        if (Stats.Inventory[citem].Name == "Points")
                            InventoryText.strokeText(Stats.Inventory[citem].Stats.Points, tX, tY + 30);
                    } else {
                        InventoryText.strokeStyle = "lightgrey";
                        //ItemImage = document.getElementById("Empty");
                        //InventoryBox.drawImage(ItemImage, sX, sY, 76, 76);
                        //InventoryText.strokeText(Stats.Inventory[citem].Name, tX + 10, tY + 24);
                    }
                }


                citem++;
            }
        }

        //Stats.Items = Items;

        // // console.log(Stats);

    }

    var detection = 0;
    var infection;
    var tmpDet = 0;
    var directionalVirus = false;
    var directionsVirus = [];
    var slowFill;

    function spreadVirus() {
        if (directionalVirus == false) {
            $('#Battle').slideDown(1500);
            infect = true;

            generateField();
            sweepField();
            detectionPoints = 0;
            tmpDet = 0;
            slowFill = setInterval(function () {
                if (tmpDet < detectionPoints) {
                    tmpDet++;
                    // // console.log(tmpDet);
                    FieldBox.clearRect(6, 191, 550, 6);

                    FieldBox.fillStyle = 'red';
                    FieldBox.beginPath();
                    FieldBox.rect(6 + (detectionLimit * 70) - 2, 191, 6, 8);
                    FieldBox.closePath();
                    FieldBox.fill();

                    FieldBox.fillStyle = 'orange';
                    FieldBox.beginPath();
                    FieldBox.rect(7, 191, tmpDet, 6);
                    FieldBox.closePath();
                    FieldBox.fill();

                    for (tp = 1; tp < 10; tp++) {

                        FieldBox.fillStyle = 'lightgrey';
                        FieldBox.beginPath();
                        FieldBox.rect(6 + detectionLimit * 10 * tp, 190, 1, 8);
                        FieldBox.closePath();
                        FieldBox.fill();
                    }
                }
            },60);
            infection = setInterval(fillBox, virusSpeed);
        } else if (directionalVirus) {
            $('#Detected').slideDown(1500);
            infect = true;
            startUpload();
        }

    }

    function startUpload() {
        regionXml = loadXMLDoc("region/" + directionsVirus[0] + ".xml");
        Region = regionXml.getElementsByTagName("Region")[0];
        Players = Region.getElementsByTagName("Player");

        var tmpId;
        var tmpName;

        found = false;

        LevelSystem = 0;
        LevelShield = 0;
        LevelConexion = 0;

        for (p = 0; p < Players.length; p++) {
            if (parseInt(Players[p].getElementsByTagName("x")[0].textContent) == directionsVirus[1] && parseInt(Players[p].getElementsByTagName("y")[0].textContent) == directionsVirus[2]) {
                if (parseInt(Players[p].getElementsByTagName("p")[0].textContent) == directionsVirus[3]) {
                    found = true;

                    tmpId = Players[p].getElementsByTagName("ID")[0].textContent;
                    tmpName = Players[p].getElementsByTagName("Name")[0].textContent;

                    //console.log("Found " + found);


                    LevelSystem = parseInt(Players[p].getElementsByTagName("System")[0].textContent);
                    LevelShield = parseInt(Players[p].getElementsByTagName("Shield")[0].textContent);
                    if (LevelShield == 0) LevelShield = 1;
                    LevelConexion = parseInt(Players[p].getElementsByTagName("Network")[0].textContent);

                    playerXml = loadXMLDoc("users/" + Players[p].getElementsByTagName("ID")[0].textContent + ".xml");

                    Items = playerXml.getElementsByTagName("Inventory")[0].getElementsByTagName("Item");

                    maxiumTime = 60 * Stats.Levels.Network;

                    firewalls = parseInt((Math.floor((Math.random() + 1) * LevelShield) / (Math.floor((Math.random() + 1) * 3) + 2)) + 2);
                    porc = Math.floor(Math.random() * 50) + 1;
                    if (porc > 0 && porc <= 20) {
                        antivirus = 1;
                    }
                    porc = Math.floor(Math.random() * 100) + 1;
                    additionalItems = parseInt(porc / 40);
                    //console.log(additionalItems);
                    //console.log(Items);

                    if (additionalItems > Items.length - 1) {
                        additionalItems = Items.length - 1;
                    }

                    firewallStr = LevelShield * (LevelSystem / 10 + 1) * 10;
                    antivirusStr = LevelShield * LevelSystem * 10;

                    //console.log(firewallStr);
                    //console.log(antivirusStr);

                    objects = [];

                    totalItems = firewalls + antivirus + additionalItems;

                    //console.log(firewalls);
                    //console.log(additionalItems);
                    //console.log(antivirus);

                    //console.log((firewallStr / ((Components.Virus.Complexity[Stats.Levels.Virus] * Components.Virus.Damage[Stats.Levels.Virus] * (Stats.Modules.Stats.Virus.VirusBoost / 10 + 1)))) / 67);

                    var virusStrength = Components.Virus.Complexity[Stats.Levels.Virus] * Components.Virus.Damage[Stats.Levels.Virus] * (Stats.Modules.Stats.Virus.VirusBoost / 10 + 1) / 63;


                    while (firewalls + antivirus + additionalItems > 0) {
                        chance = (Math.floor((Math.random() + 1) * 3)) - 2;

                        switch (chance) {
                            case 1:
                                if (firewalls > 0) {
                                    objects.push("firewall");
                                    firewalls -= 1;
                                }
                                break;

                            case 2:
                                if (antivirus > 0) {
                                    objects.push("antivirus");
                                    antivirus -= 1;
                                }
                                break;

                            case 3:
                                if (additionalItems > 0) {
                                    objects.push("item");
                                    additionalItems -= 1;
                                }
                                break;

                        }
                    }

                    var uploadInterval;
                    var firewallInterval;
                    var antivirusInterval;

                    detectionCvas = document.getElementById("Detected");
                    detectionBox = detectionCvas.getContext("2d");

                    detectionBox.clearRect(0, 0, 600, 200);

                    separator = parseInt(Math.floor(580 / (totalItems+1)));

                    posX = separator;
                    for (object in objects) {
                        if (objects[object] == "firewall") {
                            Img = document.getElementById("Firewall");
                            detectionBox.drawImage(Img, posX-12, 7, 25, 25);
                        }
                        else if (objects[object] == "antivirus") {
                            Img = document.getElementById("Antivirus");
                            detectionBox.drawImage(Img, posX-12, 7, 25, 25);
                        }
                        else {
                            Img = document.getElementById("Item");
                            detectionBox.drawImage(Img, posX-12, 7, 25, 25);
                        }

                        posX += separator;
                    }

                    totalTime = 0;
                    posX = 0;

                    UploadSpeed = 0;

                    if (LevelConexion > Stats.Levels.Network) {
                        UploadSpeed = Stats.Levels.Network;
                    } else {
                        UploadSpeed = LevelConexion;
                    }

                    gotItems = 0;

                    canAdvance = true;

                    var tmpFirewallHealth = 0;
                    var tmpAntivirusHealth = 0;

                    var antivirusInterval;
                    var firewallInterval;
                    var totalCPUConsumption = 0;

                    firewallFunc = function () {
                        if(power - (PowerCPUloss / 4) > 0) {
                        if (virusStrength < firewallStr) {
                            tmpFirewallHealth -= (firewallStr / invProp(virusStrength, firewallStr));
                            power -= (PowerCPUloss / 4);
                            totalCPUConsumption += (PowerCPUloss / 4);
                        }
                        else {
                            tmpFirewallHealth -= (firewallStr / 11);
                            power -= (PowerCPUloss / 4);
                            totalCPUConsumption += (PowerCPUloss / 4);
                        }
                        }

                        Strporc = firewallStr / 100;
                        fillporc = tmpFirewallHealth / Strporc;

                        detectionBox.fillStyle = "orange";

                        switchPorc = 100 - fillporc;

                        detectionBox.clearRect(posX, 1, 11, 52);

                        if (switchPorc > 10)
                            detectionBox.fillRect(posX + 1, 52 - 10.5, 4, (52 / 5));

                        if (switchPorc > 20)
                            detectionBox.fillRect(posX + 6, 52 - 10.5, 4, (52 / 5));

                        if (switchPorc > 30)
                            detectionBox.fillRect(posX + 1, 52 - 21, 4, (52 / 5));

                        if (switchPorc > 40)
                            detectionBox.fillRect(posX + 6, 52 - 21, 4, (52 / 5));

                        if (switchPorc > 50)
                            detectionBox.fillRect(posX + 1, 52 - 31.5, 4, (52 / 5));

                        if (switchPorc > 60)
                            detectionBox.fillRect(posX + 6, 52 - 31.5, 4, (52 / 5));

                        if (switchPorc > 70)
                            detectionBox.fillRect(posX + 1, 52 - 41, 4, (52 / 5));

                        if (switchPorc > 80)
                            detectionBox.fillRect(posX + 6, 52 - 41, 4, (52 / 5));

                        if (switchPorc > 90)
                            detectionBox.fillRect(posX + 1, 52 - 52.5, 4, (52 / 5));

                        if (switchPorc > 100)
                            detectionBox.fillRect(posX + 6, 52 - 52.5, 4, (52 / 5));


                        //console.log(tmpFirewallHealth);
                        for (y = 0; y <= 4; y++) {

                            detectionBox.strokeRect(posX, y * (52 / 5) + 1, 5, (52 / 5));
                            detectionBox.strokeRect(posX + 5, y * (52 / 5) + 1, 5, (52 / 5));
                        }


                        if (tmpFirewallHealth < 0) {
                            canAdvance = true;
                            actionPlayer(Stats.ID, Stats.Name, "powerLess", totalCPUConsumption);
                            totalCPUConsumption = 0;
                            clearInterval(firewallInterval);
                        }
                    };


                    antivirusFunc = function () {
                        if(power - (PowerCPUloss / 4) > 0) {
                            if (virusStrength < firewallStr) {
                                tmpAntivirusHealth -= (antivirusStr / invProp(virusStrength, antivirusStr));
                                power -= (PowerCPUloss / 4);
                                totalCPUConsumption += (PowerCPUloss / 4);
                            }
                            else {
                                tmpAntivirusHealth -= (antivirusStr / 11);
                                power -= (PowerCPUloss / 4);
                                totalCPUConsumption += (PowerCPUloss / 4);
                            }
                        }

                        Strporc = firewallStr / 100;
                        fillporc = tmpAntivirusHealth / Strporc;

                        detectionBox.fillStyle = "red";

                        switchPorc = 100 - fillporc;

                        detectionBox.clearRect(posX, 1, 11, 52);

                        if (switchPorc > 10)
                            detectionBox.fillRect(posX + 1, 52 - 10.5, 4, (52 / 5));

                        if (switchPorc > 20)
                            detectionBox.fillRect(posX + 6, 52 - 10.5, 4, (52 / 5));

                        if (switchPorc > 30)
                            detectionBox.fillRect(posX + 1, 52 - 21, 4, (52 / 5));

                        if (switchPorc > 40)
                            detectionBox.fillRect(posX + 6, 52 - 21, 4, (52 / 5));

                        if (switchPorc > 50)
                            detectionBox.fillRect(posX + 1, 52 - 31.5, 4, (52 / 5));

                        if (switchPorc > 60)
                            detectionBox.fillRect(posX + 6, 52 - 31.5, 4, (52 / 5));

                        if (switchPorc > 70)
                            detectionBox.fillRect(posX + 1, 52 - 42, 4, (52 / 5));

                        if (switchPorc > 80)
                            detectionBox.fillRect(posX + 6, 52 - 42, 4, (52 / 5));

                        if (switchPorc > 90)
                            detectionBox.fillRect(posX + 1, 52 - 53.5, 4, (52 / 5));

                        if (switchPorc > 100)
                            detectionBox.fillRect(posX + 6, 52 - 53.5, 4, (52 / 5));


                        //console.log(tmpAntivirusHealth);
                        for (y = 0; y <= 4; y++) {

                            detectionBox.strokeRect(posX, y * (52 / 5) + 1, 5, (52 / 5));
                            detectionBox.strokeRect(posX + 5, y * (52 / 5) + 1, 5, (52 / 5));
                        }
                        if (tmpAntivirusHealth < 0) {
                            canAdvance = true;
                            actionPlayer(Stats.ID, Stats.Name, "powerLess", totalCPUConsumption);
                            totalCPUConsumption = 0;
                            clearInterval(antivirusInterval);
                        }

                    };


                    uploadInterval = setInterval(function () {

                        totalTime += ((1000 / (UploadSpeed / 10 + 1))/2) / 1000;

                        if (totalTime >= maxiumTime) {
                            detectionBox.fillStyle = 'red';
                            detectionBox.fillRect(1, 1, posX, 52);
                            Console.innerHTML += '<p class="psmall" style="font-weight: bold;">'+ Language[lang].Console.LackConnection +'</p>';
                            $('#Detected').slideUp(500);
                            directionalVirus = false;
                            canInfect = false;
                            infect = false;
                            virusCooldown = setInterval(virusTimeout, 1000);
                            clearInterval(uploadInterval);
                            clearInterval(firewallInterval);
                            clearInterval(antivirusInterval);
                        }

                        if (canAdvance) {
                            posX += 1;
                            detectionBox.fillStyle = '#2978a1'; //'#35c5ff';
                            detectionBox.clearRect(0, 0, 70, 54);
                            detectionBox.clearRect(0, 0, posX, 54);
                            detectionBox.fillRect(1, 1, posX, 52);
                            detectionBox.strokeText((posX / (600 / 100)).toFixed(2) + "%", 30, 20);
                            detectionBox.strokeText((maxiumTime - totalTime).toFixed(2) + "s", 30, 40);
                            clearInterval(firewallInterval);
                            clearInterval(antivirusInterval);
                        } else {
                            detectionBox.clearRect(0, 0, 70, 54);
                            detectionBox.clearRect(0, 0, posX-2, 54);
                            detectionBox.fillRect(1, 1, posX-2, 52);
                            detectionBox.strokeText((posX / (600 / 100)).toFixed(2) + "%", 30, 20);
                            detectionBox.strokeText((maxiumTime - totalTime).toFixed(2) + "s", 30, 40);
                        }

                        if (posX % separator == 0) {
                            if (objects[(posX / separator) - 1] == "firewall") {
                                canAdvance = false;
                                tmpFirewallHealth = firewallStr;
                                detectionBox.fillStyle = 'orange';
                                firewallInterval = setInterval(firewallFunc, 1000 / (UploadSpeed / 10 + 1));

                            } else if (objects[(posX / separator) - 1] == "antivirus") {
                                canAdvance = false;
                                tmpAntivirusHealth = antivirusStr;
                                detectionBox.fillStyle = 'red';
                                antivirusInterval = setInterval(antivirusFunc, 1000 / (UploadSpeed / 10 + 1));
                            } else if (objects[(posX / separator) - 1] == "item") {
                                gotItems++;
                            }
                            posX++;

                        }

                        if (posX >= 580) {
                            canAdvance = false;
                            //console.log(tmpId + " " + tmpName);

                            virusAttack = {
                                damage: 1,
                                points: calculateDamage(Stats.Levels.Virus, LevelShield),
                                player2: Stats.ID,
                                player1: tmpId,
                                from: Stats.Name
                            };

                            sendNotification(tmpId, tmpName, Stats.Name + " infected your system.");

                            for (i = 0; i <= gotItems; i++) {
                                getItem();
                            }

                            gotItems = 0;

                            Console.innerHTML += '<p class="psmall" style="font-weight: bold;">' + Language[lang].Console.VirusSentTo + tmpName + '</p>';
                            actionPlayer(Stats.ID, Stats.Name, "virusAttack", virusAttack);

                            $('#Detected').hide(500);
                            directionalVirus = false;
                            canInfect = false;
                            infect = false;
                            virusCooldown = setInterval(virusTimeout, 1000);
                            clearInterval(uploadInterval);
                        }
                    }, (1000 / (UploadSpeed / 10 + 1)) / 2)
                }
            }
        }

    }


    var slot;
    var done;

    function sweepField() {
        done = false;
        slot = Math.floor((Math.random() * Sectors.length - 1) + 1);
        timer = true;
    }

    var firstClock = true;
    var mins = 0, secs = 0;

    function virusTimeout() {

        if (firstClock)
            if (virusTimer > 60) {
                mins = parseInt(virusTimer / 60);
                firstClock = false;
                secs = virusTimer % 60;
            }
            else
                mins = 0;

        if (secs <= 0) {
            mins--;
            secs = 59;
        } else {
            secs--;
        }

        if (secs >= 10) {
            secs = Math.round(secs);
        } else {
            secs = '0' + Math.round(secs);
        }

        if(secs == 0)
        {
            secs = '00';
        }

        if (secs < 60 && mins != 0) {
            document.getElementById('SpreadVirus').innerHTML = mins + ":" + secs;
        } else if(secs > 0 && mins == 0)
        {
            document.getElementById('SpreadVirus').innerHTML = mins + ":" + secs;
        }
        else {
            if(!directionalVirus)
            {
                document.getElementById('SpreadVirus').innerHTML = Language[lang].Button.Send;
                actionPlayer(Stats.ID, Stats.Name, "setVirusTimer", 0);
            }
            else
            {
                document.getElementById('SpreadVirus').innerHTML = Language[lang].Button.SendTo + "\n" + directionsVirus[0] + "." + directionsVirus[1] + "." + directionsVirus[2] + "." + directionsVirus[3];
                actionPlayer(Stats.ID, Stats.Name, "setVirusTimer", 0);
            }

        }


        if (parseInt(secs) == 0 && parseInt(mins) == 0) {
            mins = 0;
            secs = 0;
            clearInterval(virusCooldown);
            canInfect = true;
            firstClock = true;
        }
    }

    function getItem() {
        Slot = {};

        avSlotX = null;
        avSlotY = null;
        available = true;

        for (y = 0; y <= 4; y++) {
            for (x = 0; x <= 3; x++) {
                available = true;
                for (i = 0; i <= Stats.Inventory.length; i++) {
                    if (Stats.Inventory[i]) {
                        if (Stats.Inventory[i].x == x && Stats.Inventory[i].y == y) {
                            available = false;
                        }
                    }
                }

                if (available) {
                    avSlotX = x;
                    avSlotY = y;
                    break;
                }
            }
            if (available)
                break;
        }

        if (!directionalVirus) {
            if (Stats.Inventory.length < HDDSlots) {
                Chance = Math.floor(Math.random() * 100) + 1;

                if (Chance >= 0 && Chance < 40) {
                    Level = Math.floor(Math.random() * 5);
                }
                else if (Chance >= 40 && Chance < 70) {
                    Level = Math.floor(Math.random() * 10);
                }
                else if (Chance >= 70 && Chance < 90) {
                    Level = Math.floor(Math.random() * 15);
                }
                else if (Chance >= 90 && Chance < 95) {
                    Level = Math.floor(Math.random() * 20);
                }
                else {
                    Level = Math.floor(Math.random() * 25);
                }

                citem = 0;

                Type = Math.floor(Math.random() * 4);

                switch (Type) {
                    case 0:
                        Type = Module.CPU;

                        Class = "CPU";
                        Name = "Arithmetic";
                        Item = Type.Arithmetic;

                        break;
                    case 1:
                        Type = Module.Power;
                        Item = Math.floor(Math.random() * 3);
                        Class = "Power";
                        switch (Item) {
                            case 0:
                                Name = "Reserve";
                                Item = Type.Reserve;
                                break;
                            case 1:
                                Name = "AlternativeCurrent";
                                Item = Type.AlternativeCurrent;
                                break;
                            case 2:
                                Name = "Capacitors";
                                Item = Type.Capacitors;
                                break;
                        }

                        break;
                    case 2:
                        Type = Module.Virus;
                        Item = Math.floor(Math.random() * 2);
                        Class = "Virus";
                        switch (Item) {
                            case 0:
                                Name = "Exploit";
                                Item = Type.Exploit;
                                break;
                            case 1:
                                Name = "PortMapping";
                                Item = Type.PortMapping;
                                break;
                        }

                        break;
                    case 3:
                        Type = Module.Shield;
                        Item = Math.floor(Math.random() * 3);
                        Class = "Shield";
                        switch (Item) {
                            case 0:
                                Name = "Blacklist";
                                Item = Type.Blacklist;
                                break;
                            case 1:
                                Name = "Repairer";
                                Item = Type.Repairer;
                                break;
                            case 2:
                                Name = "SystemPatch";
                                Item = Type.SystemPatch;
                                break;
                        }

                        break;
                    default:
                    // console.log("Tipo de modulo indefinido" + Type);
                }

                Slot = {
                    x: avSlotX,
                    y: avSlotY,
                    ID: Math.floor(Math.random() * 100000000),
                    Name: Name,
                    Class: Class,
                    Level: Level,
                    Count: 0,
                    Stats: Item,
                    Status: "Quitar"
                };

                Stats.Inventory.push(Slot);
                drawInventory();
                actionPlayer(Stats.ID, Stats.Name, "addItem", Slot);

            }
        } else if(directionalVirus) {
            if(Stats.Inventory.length < HDDSlots) {
                regionXml = loadXMLDoc("region/" + directionsVirus[0] + ".xml");
                XRegion = regionXml.getElementsByTagName("Region")[0];
                XPlayers = XRegion.getElementsByTagName("Player");

                //console.log(XPlayers);

                var tmpId = null;
                var tmpName = null;

                for (p = 0; p < XPlayers.length; p++) {
                    if (XPlayers[p].getElementsByTagName("x")[0].textContent == directionsVirus[1] && XPlayers[p].getElementsByTagName("y")[0].textContent == directionsVirus[2]) {
                        if (XPlayers[p].getElementsByTagName("p")[0].textContent == directionsVirus[3]) {
                            tmpId = XPlayers[p].getElementsByTagName("ID")[0].textContent;
                            tmpName = XPlayers[p].getElementsByTagName("Name")[0].textContent;
                        }
                    }
                }

                if (tmpId != null) {
                    usersXml = loadXMLDoc("users/" + tmpId + ".xml");
                    XStats = usersXml.getElementsByTagName("Stats")[0];
                    XInventory = XStats.getElementsByTagName("Inventory")[0];
                    XItems = XInventory.getElementsByTagName("Item");

                    virusItem = Math.floor((Math.random() * XItems.length) + 1);

                    // console.log("Items");
                    // console.log(XItemStats);

                    tmpStat = {};
                    for (Stat in Module[XItems[virusItem].getElementsByTagName("Class")[0].textContent][XItems[virusItem].getElementsByTagName("Name")[0].textContent]) {
                        if (Stat != "Price" || Stat != "Name")
                            tmpStat[Stat] = Module[XItems[virusItem].getElementsByTagName("Class")[0].textContent][XItems[virusItem].getElementsByTagName("Name")[0].textContent][Stat];
                    }

                    Slot = {
                        x: avSlotX,
                        y: avSlotY,

                        ID: XItems[virusItem].getElementsByTagName("ID")[0].textContent,
                        Name: XItems[virusItem].getElementsByTagName("Name")[0].textContent,
                        Class: XItems[virusItem].getElementsByTagName("Class")[0].textContent,
                        Level: parseInt(XItems[virusItem].getElementsByTagName("Level")[0].textContent),
                        Status: "Quitar",
                        Stats: tmpStat
                    };

                }

                Stats.Inventory.push(Slot);
                drawInventory();
                actionPlayer(Stats.ID, Stats.Name, "addItem", Slot);
                actionPlayer(tmpId, tmpName, "removeItem", Slot);
            }
        }

    }

    var tmpw = 0;
    var loot = 0;
    var antivirus = false;
    var answerattack = 0;
    var detectionStrength = 5;

    function fillBox() {
        // // console.log(virusSpeed);
        /* // console.log(Sectors);
         // console.log(Sectors[1]);
         // console.log(Sectors[1].Square);*/

        if (infect) {
            if (Sectors[slot].Found == true) {
                sweepField();
            } else {
                if (tmpw < Sectors[slot].Square.width) {
                    tmpw += 1;

                    var SlotImage = null;
                    FieldBox.fillStyle = 'black';
                    if (tmpw == Sectors[slot].Square.width) {
                        if (Sectors[slot].Loot == "Loot") {
                            FieldBox.fillStyle = 'grey';
                            SlotImage = document.getElementById("FirewallPoints");
                        }
                        else if (Sectors[slot].Loot == "Firewall") {
                            FieldBox.fillStyle = 'yellow';
                            SlotImage = null;
                        }
                        else if (Sectors[slot].Loot == "Item") {
                            FieldBox.fillStyle = 'green';
                            SlotImage = document.getElementById("FirewallItem");
                        }
                        else if (Sectors[slot].Loot == "User") {
                            FieldBox.fillStyle = 'orange';
                            SlotImage = null;
                        }
                        else if (Sectors[slot].Loot == "Antivirus") {
                            FieldBox.fillStyle = 'red';
                            SlotImage = document.getElementById("FirewallVirus");
                        }
                    }

                    FieldBox.beginPath();
                    FieldBox.rect(Sectors[slot].Square.x, Sectors[slot].Square.y, tmpw, Sectors[slot].Square.height);
                    FieldBox.closePath();
                    FieldBox.fill();

                    if(SlotImage != null)
                    {
                        FieldBox.drawImage(SlotImage, Sectors[slot].Square.x+tmpw/2-7, Sectors[slot].Square.y + 2)
                    }

                } else {
                    //FieldBox.clearRect(10, 181, 586, 6);
                    FieldBox.fillStyle = 'black';
                    tmpw = 0;

                    if (detection == 0)
                        tmpDet = 0;

                    detection += detectionStrength;
                    Sectors[slot].Found = true;
                    if (Sectors[slot].Loot == "Loot") {
                        loot += (30 * Stats.Levels.Virus * SystemBonus)/2;
                        // // console.log("Loot: " + loot);
                    }
                    else if (Sectors[slot].Loot == "Item") {
                        getItem();
                        drawInventory();
                    }
                    else if (Sectors[slot].Loot == "Firewall") {
                        detection += 20;//(Components.Shield.Strength[Stats.Levels.Shield] / Stats.Levels.Virus);
                        // // console.log("Detection: " + detection);
                    }
                    else if (Sectors[slot].Loot == "User") {
                        detectionStrength += 2;
                        answerattack++;
                        receiveAttack(null, 9);
                    }
                    else if (Sectors[slot].Loot == "Antivirus") {
                        detection += 35; //(Components.Shield.Strength[Stats.Levels.System] / Stats.Levels.Virus) * 2;
                        antivirus = true;
                    }

                    if (detection > 0) {
                        detectionPoints = (586 / 100) * detection;
                    }

                    sweepField();
                }
            }

            if (detection >= 70) {
                clearInterval(slowFill);
                if (antivirus) {
                    Stats.Levels.Virus -= 1;
                    document.getElementById("Viruslevel").innerHTML = "+" + Stats.Levels.Virus;
                    document.getElementById("VirusPrice").innerHTML = '$' + (Components.Virus.Prices[0] / (Stats.Abilities.Trade / 10 / 2 + 1)).toFixed(2);
                    tvdmg = Components.Virus.Complexity[Stats.Levels.Virus] * Components.Virus.Damage[Stats.Levels.Virus] * (Stats.Modules.Stats.Virus.VirusBoost / 10 + 1);
                    VirusStrength.innerHTML = 'S: ' + Math.round(tvdmg / 63);
                }
                infect = false;
                tmpDet = 0;
            }
        } else {
            var VirusReport = "";
            VirusReport += "<div style='border: solid 1px;border-radius: 3px;background: rgb(224, 224, 224);border-color: red;border-bottom-width: 5px;border-bottom-left-radius: 9px;border-bottom-right-radius: 9px;padding: 6px;'><p class='psmall'  style='color: red; font-weight: bold;'>"+ Language[lang].Console.Report1+"</p>";
            if (answerattack)
                VirusReport += "<p class='psmall'  style='color: red;'>"+Language[lang].Console.Report2+ "</p>";
            if (antivirus && detection >= 70) {
                VirusReport += "<p class='psmall'  style='color: red;'>"+ Language[lang].Console.Report3 + Stats.Levels.Virus + "</p>";
                actionPlayer(Stats.ID, Stats.Name, "lowerVirus", null);
            }
            else if (detection >= 70)
                VirusReport += "<p class='psmall'  style='color: red;'>" + Language[lang].Console.Report4 + "</p>";
            VirusReport += "<p class='psmall'  style='color: red;'>" + Language[lang].Console.Report5 + (loot).toFixed(2) + "</p>";
            VirusReport += "<p class='psmall'  style='color: red; font-weight: bold;'>"+ Language[lang].Console.Report6 +"</p></div>";

            Console.innerHTML += VirusReport;

            $("#Console").animate({ scrollTop: $('#Console')[0].scrollHeight}, 0);

            FieldBox.fillStyle = 'red';
            FieldBox.beginPath();
            FieldBox.rect(12, 181, tmpDet, 6);
            FieldBox.closePath();
            FieldBox.fill();

            if (Stats.Inventory[0].Stats.Points + loot <= MemoryPoints) {
                Stats.Inventory[0].Stats.Points += loot;
            }
            else
                Stats.Inventory[0].Stats.Points = MemoryPoints;

            actionPlayer(Stats.ID, Stats.Name, "virusBonus", loot);
            actionPlayer(Stats.ID, Stats.Name, "setVirusTimer", virusTimer);

            $('#Battle').slideUp(1000);
            FieldBox.clearRect(0, 0, 600, 200);

            detectionStrength = 5;
            antivirus = false;
            detection = 0;
            loot = 0;
            answerattack = 0;
            clearInterval(infection);

            canInfect = false;
            virusCooldown = setInterval(virusTimeout, 1000);
        }
    }

    Buttons = [];
    function assignLoot() {
        Percentage = Math.floor((Math.random() * 100) + 1);

        // // console.log(Percentage);

        if (Percentage >= 60 && Percentage < 67) {
            return "Firewall";
        }
        else if (Percentage >= 67 && Percentage < 70) {
            return "Antivirus";
        }
        else if (Percentage >= 70 && Percentage < 93) {
            return "Loot";
        }
        else if (Percentage >= 93 && Percentage < 95) {
            return "Item";
        }
        else if (Percentage >= 95 && Percentage < 100) {
            return "User";
        }

        //return "Empty";
    }

    function generateField() {
        var x = 6, y = 10;

        var height = 20;
        var width = 60;

        var cheight = 20;
        var cwidth = 60;


        total = (300 / height) * (300 / width);
        var num = 0;

        var Sector;

        for (var r = 0; r <= 7; r++) {
            for (ry = 0; ry <= 9; ry++) {
                if ((x + width) > 600) {
                    cwidth = 600 - x + width - 4;

                    if (600 - x > 30) {
                        Sector = {
                            Square: {
                                x: x,
                                y: y,
                                width: 600 - x - 5,
                                height: cheight
                            },

                            Found: false,
                            Loot: assignLoot()};

                        Sectors.push(Sector);

                        num++;


                        FieldBox.fillStyle = 'white';
                        FieldBox.beginPath();
                        FieldBox.rect(x, y, 600 - x - 5, cheight);
                        FieldBox.closePath();
                        FieldBox.stroke();
                        FieldBox.fill();

                    }

                    break;
                } else {
                    //Espacio vacio
                }


                Sector = {
                    Square: {
                        x: x,
                        y: y,
                        width: cwidth,
                        height: cheight
                    },

                    Found: false,
                    Loot: assignLoot() };
                Sectors.push(Sector);
                num++;

                FieldBox.fillStyle = 'white';
                FieldBox.beginPath();
                FieldBox.rect(x, y, cwidth, cheight);
                FieldBox.closePath();
                FieldBox.fill();
                FieldBox.stroke();
                x += cwidth + 1;
                cwidth = width;
            }
            y += height + 1;
            x = 6;
        }

        detectionLimit = (586 / 100);

        FieldBox.clearRect(6, 190, 589, 8);
        FieldBox.fillStyle = 'brown';
        FieldBox.beginPath();
        FieldBox.rect(6, 190, 589, 8);
        FieldBox.closePath();
        FieldBox.fill();
        FieldBox.clearRect(7, 191, 586, 6);


        FieldBox.fillStyle = 'red';
        FieldBox.beginPath();
        FieldBox.rect(6 + (detectionLimit * 70) - 2, 191, 6, 8);
        FieldBox.closePath();
        FieldBox.fill();

        for (tp = 1; tp < 10; tp++) {
            FieldBox.fillStyle = 'lightgrey';
            FieldBox.beginPath();
            FieldBox.rect(6 + detectionLimit * 10 * tp, 190, 2, 8);
            FieldBox.closePath();
            FieldBox.fill();
        }

        // // console.log(Sectors);
    }

    var mouseX, mouseY;

    var itemPos = 0;
    var tmpItem = null;

    function drawButtons() {
        InventoryBox.clearRect(0, 566, 500, 500);

        for (b = 0; b < Buttons.length; b++) {
            // console.log("Button redraw");
            InventoryBox.beginPath();
            InventoryBox.rect(Buttons[b].x, 566, Buttons[b].width, 40);
            InventoryBox.closePath();
            InventoryBox.stroke();
            InventoryBox.fill();
            if(Buttons[b].label == "Quitar")
                InventoryBox.strokeText(Language[lang].Button.Unfit, Buttons[b].x + 16, Buttons[b].y + 26);
            else if(Buttons[b].label == "Equipar")
                InventoryBox.strokeText(Language[lang].Button.Fit, Buttons[b].x + 16, Buttons[b].y + 26);
            else if(Buttons[b].label == "Eliminar")
                InventoryBox.strokeText(Language[lang].Button.Remove, Buttons[b].x + 16, Buttons[b].y + 26);
            else
                InventoryBox.strokeText(Language[lang].Button.Trade, Buttons[b].x + 16, Buttons[b].y + 26);
        }
    }

    function modulesStats(bID) {
        Class = Stats.Inventory[Buttons[bID].item].Class;

        // console.log(bID);
        // console.log(Class);

        switch (Class) {
            case "Power":
                Quantity = Stats.Modules.Quantity.Power;
                break;
            case "CPU":
                Quantity = Stats.Modules.Quantity.CPU;
                break;
            case "Virus":
                Quantity = Stats.Modules.Quantity.Virus;
                break;
            case "Shield":
                Quantity = Stats.Modules.Quantity.Shield;
                break;
        }

        if (Buttons[bID].label == "Eliminar") {
            tmpItem = Stats.Inventory[Buttons[bID].item];

            if (Stats.Modules.Items[Class].length > 0)
                for (l = 0; l < Stats.Modules.Items[Class].length; l++) {
                    if (Stats.Modules.Items[Class][l].ID == Stats.Inventory[Buttons[bID].item].ID) {
                        Stats.Modules.Items[Class].splice(l, 1);
                        Stats.Inventory.splice(Buttons[bID].item, 1);
                    }
                }
            else
                Stats.Inventory.splice(Buttons[bID].item, 1);

            actionPlayer(Stats.ID, Stats.Name, "removeItem", tmpItem);

            drawInventory();
        } else if (Buttons[bID].label == "Enviar") {
            tmpItem = Stats.Inventory[Buttons[bID].item];

            $('#mapBox').show();
            mapShown = true;
            $('#mapClosebutton').show();


            sendItem = true;

            drawInventory();
        }
        else if (Stats.Inventory[Buttons[bID].item].Status == "Quitar") {
            if (Quantity < 3) {
                Stats.Inventory[Buttons[bID].item].Status = "Equipar";
                Buttons[bID].label = "Quitar";
                actionPlayer(Stats.ID, Stats.Name, "addModule", Stats.Inventory[Buttons[bID].item]);
                Stats.Modules.Items[Class].push(Stats.Inventory[Buttons[bID].item]);
            }
            drawButtons();
        }
        else if (Stats.Inventory[Buttons[bID].item].Status == "Equipar") {
            Stats.Inventory[Buttons[bID].item].Status = "Quitar";
            Buttons[bID].label = "Equipar";
            actionPlayer(Stats.ID, Stats.Name, "removeModule", Stats.Inventory[Buttons[bID].item]);
            for (l = 0; l < Stats.Modules.Items[Class].length; l++) {
                tmpFound = false;
                if (Stats.Modules.Items[Class].length > 0)
                    for (l = 0; l < Stats.Modules.Items[Class].length; l++) {
                        if (Stats.Modules.Items[Class][l].ID == Stats.Inventory[Buttons[bID].item].ID) {
                            Stats.Modules.Items[Class].splice(l, 1);
                        }
                    }
                if (tmpFound)
                    break;

            }
            drawButtons();
        }


        Stats.Modules.Quantity.Power = Stats.Modules.Items.Power.length;

        Stats.Modules.Quantity.CPU = Stats.Modules.Items.CPU.length;

        Stats.Modules.Quantity.Virus = Stats.Modules.Items.Virus.length;

        Stats.Modules.Quantity.Shield = Stats.Modules.Items.Shield.length;


        //Power
        Stats.Modules.Stats.Power.CPUConsumption = 0;
        Stats.Modules.Stats.Power.Power = 0;
        Stats.Modules.Stats.Power.Recharge = 0;
        Stats.Modules.Stats.Power.ShieldConsumption = 0;

        Stats.Modules.Stats.CPU.CPUBoost = 0;

        Stats.Modules.Stats.Virus.VirusBoost = 0;

        Stats.Modules.Stats.Shield.VirusAvoidance = 0;
        Stats.Modules.Stats.Shield.VirusResistance = 0;
        Stats.Modules.Stats.Shield.StabilityBoost = 0;


        for (m = 0; m < 3; m++) {
            ID = "PowerModule" + m;
            if (m < Stats.Modules.Quantity.Power) {
                document.getElementById(ID).innerHTML = "1";

                Stats.Modules.Stats.Power.CPUConsumption += Stats.Modules.Items.Power[m].Stats.CPUConsumption * (Stats.Modules.Items.Power[m].Level / 10 + 1);
                Stats.Modules.Stats.Power.Power += Stats.Modules.Items.Power[m].Stats.Power * (Stats.Modules.Items.Power[m].Level / 10 + 1);
                Stats.Modules.Stats.Power.Recharge += Stats.Modules.Items.Power[m].Stats.Recharge * (Stats.Modules.Items.Power[m].Level / 10 + 1);
                Stats.Modules.Stats.Power.ShieldConsumption += Stats.Modules.Items.Power[m].Stats.ShieldConsumption * (Stats.Modules.Items.Power[m].Level / 10 + 1);

                // // console.log(Stats.Modules.Stats.Power)

            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "CPUModule" + m;
            if (m < Stats.Modules.Quantity.CPU) {
                document.getElementById(ID).innerHTML = "1";

                Stats.Modules.Stats.CPU.CPUBoost += parseFloat((Stats.Modules.Items.CPU[m].Stats.CPUBoost).toFixed(2)) * parseFloat((Stats.Modules.Items.CPU[m].Level / 10 + 1).toFixed(2));

                // // console.log(Stats.Modules.Stats.Power)

            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "VirusModule" + m;
            if (m < Stats.Modules.Quantity.Virus) {
                document.getElementById(ID).innerHTML = "1";

                // console.log(Stats);
                Stats.Modules.Stats.Virus.VirusBoost += Stats.Modules.Items.Virus[m].Stats.VirusBoost * (Stats.Modules.Items.Virus[m].Level / 10 + 1);
                Stats.Modules.Stats.Virus.VirusTimer += Stats.Modules.Items.Virus[m].Stats.VirusTimer * (Stats.Modules.Items.Virus[m].Level / 10 + 1);

                // // console.log(Stats.Modules.Stats.Power)

            } else {
                document.getElementById(ID).innerHTML = "0";
            }

            ID = "ShieldModule" + m;
            if (m < Stats.Modules.Quantity.Shield) {
                document.getElementById(ID).innerHTML = "1";

                Stats.Modules.Stats.Shield.StabilityBoost += Stats.Modules.Items.Shield[m].Stats.StabilityBoost * (Stats.Modules.Items.Shield[m].Level / 10 + 1);
                Stats.Modules.Stats.Shield.VirusAvoidance += Stats.Modules.Items.Shield[m].Stats.VirusAvoidance * (Stats.Modules.Items.Shield[m].Level / 10 + 1);
                Stats.Modules.Stats.Shield.VirusResistance += Stats.Modules.Items.Shield[m].Stats.VirusResistance * (Stats.Modules.Items.Shield[m].Level / 10 + 1);

                // // console.log(Stats.Modules.Stats.Power)

            } else {
                document.getElementById(ID).innerHTML = "0";
            }
        }
    }

    function modulesHandler() {
        for (i = 0; i < Buttons.length; i++) {
            bx = Buttons[i].x / 2;
            by = Buttons[i].y / 2;
            bw = Buttons[i].width / 2;
            bh = Buttons[i].height / 2;

            if (mouseX >= bx && mouseX <= bx + bw && mouseY >= by && mouseY <= by + bh) {
                if (Buttons[i].label == "Equipar" || Buttons[i].label == "Quitar") {
                    modulesStats(i);

                    // console.log(Stats);
                    levelUp();
                } else if (Buttons[i].label == "Eliminar") {
                    modulesStats(i);

                    levelUp();
                } else if(Buttons[i].label == "Enviar") {
                    modulesStats(i);

                    levelUp();
                }
                else {
                    Stats.Inventory[i].remove();
                    drawInventory();
                    drawButtons();
                }
            }
        }
    }

    function drawItem() {
        if (tab == "Inventory") {

            InventoryBox.strokeStyle = "black";
            for (var i = 0; i < Stats.Inventory.length; i++) {
                if ((mouseX >= Stats.Inventory[i].x * 40 && (mouseX <= ((Stats.Inventory[i].x * 40) + 40)) && mouseY >= Stats.Inventory[i].y * 40 && mouseY <= ((Stats.Inventory[i].y * 40) + 40))) {
                    //i);
                    InventoryBox.clearRect(0, 380, 320, 360);
                    InventoryBox.beginPath();
                    InventoryBox.rect(10, 400, 302, 160);
                    InventoryBox.closePath();
                    InventoryBox.stroke();
                    InventoryBox.fill();

                    x = 115 * 2;
                    y = 210 * 2;

                    InventoryBox.strokeText(Stats.Inventory[i].Name, x - 30, y + 14);
                    if (Stats.Inventory[i].Name != "Empty") {
                        ItemImage = document.getElementById(Stats.Inventory[i].Name);
                        InventoryBox.drawImage(ItemImage, x - 220, y - 20, 160, 160);
                        InventoryBox.font = "12pt Arial";
                        InventoryBox.strokeText("[ " + Stats.Inventory[i].Class + " ]", x - 30, y + 34);
                        InventoryBox.strokeText("Level: " + Stats.Inventory[i].Level, x - 30, y + 54);
                        // console.log(Stats.Inventory[i]);

                        if (Stats.Inventory[i].Stats) {
                            switch (Stats.Inventory[i].Class) {
                                case "Power":
                                    InventoryBox.strokeText("CC: " + (Stats.Inventory[i].Stats.CPUConsumption * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 74);
                                    InventoryBox.strokeText("PW: " + (Stats.Inventory[i].Stats.Power * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 90);
                                    InventoryBox.strokeText("RC: " + (Stats.Inventory[i].Stats.Recharge * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 106);
                                    InventoryBox.strokeText("SC: " + (Stats.Inventory[i].Stats.ShieldConsumption * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 122);

                                    break;
                                case "CPU":
                                    InventoryBox.strokeText("CB: " + (Stats.Inventory[i].Stats.CPUBoost * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 74);
                                    break;
                                case "Virus":
                                    InventoryBox.strokeText("VT: " + (Stats.Inventory[i].Stats.VirusTimer * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 74);
                                    InventoryBox.strokeText("VB: " + (Stats.Inventory[i].Stats.VirusBoost * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 90);
                                    break;
                                case "Shield":
                                    InventoryBox.strokeText("VA: " + (Stats.Inventory[i].Stats.VirusAvoidance * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 74);
                                    InventoryBox.strokeText("SB: " + (Stats.Inventory[i].Stats.StabilityBoost * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 90);
                                    InventoryBox.strokeText("VR: " + (Stats.Inventory[i].Stats.VirusResistance * (Stats.Inventory[i].Level / 10 + 1)).toFixed(2), x - 30, y + 106);
                                    break;
                            }
                        }

                        tClass = Stats.Inventory[i].Class;
                        if (tClass == "Power" || tClass == "CPU" || tClass == "Virus" || tClass == "Shield") {
                            bx = 10;
                            bw = 90;


                            /* TODO */
                            //Verificar clicks en cualquiera de los modulos para hacer Quitar de un modulo

                            InventoryBox.font = "13pt Arial";
                            Buttons = [];
                            if (Stats.Inventory[i].Status == "Equipar" || Stats.Inventory[i].Status == "Quitar") {
                                if (Stats.Inventory[i].Status == "Quitar")
                                    State = "Equipar";
                                else if (Stats.Inventory[i].Status == "Equipar")
                                    State = "Quitar";

                                Button = {
                                    item: i,
                                    label: State,
                                    x: bx,
                                    y: 566,
                                    width: bw,
                                    height: 40
                                };

                                Buttons.push(Button);

                                Button = {
                                    item: i,
                                    label: "Eliminar",
                                    x: bx + 100,
                                    y: 566,
                                    width: bw,
                                    height: 40
                                };

                                Buttons.push(Button);

                                Button = {
                                    item: i,
                                    label: "Enviar",
                                    x: bx + 200,
                                    y: 566,
                                    width: bw,
                                    height: 40
                                };

                                Buttons.push(Button);
                            }
                            drawButtons();
                        } else {
                            Buttons = [];
                        }
                    }
                    break;

                }
                else if ((mouseX >= Stats.Inventory[i].x * 40 && (mouseX <= ((Stats.Inventory[i].x * 40) + 40)) && mouseY >= Stats.Inventory[i].y * 40 && mouseY <= ((Stats.Inventory[i].y * 40) + 40))) {

                }
            }
            modulesHandler();
        }
    }

    function clickEvent(e) {
        getCursorPosition(e);

        drawItem();


        if (!second) {
            nX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - bitCvas.offsetLeft - 16;
            nY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - bitCvas.offsetTop - 118;

            //console.log(nX);
            //console.log(nY);
        }

        var rX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - bitCvas.offsetLeft - 15;
        var rY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - bitCvas.offsetTop - 115;

        var width = 50;
        var height = 50;


        bitBox.fillStyle = "black";

        if(mapShown) {

            if (!second) {
                positionx = (parseInt(((nX - 90) / 18 + 1).toFixed(0)));
                positiony = (parseInt(((nY - 108) / 18).toFixed(0)));
                console.log("X:" + positionx + " Y:" + positiony);
                region = parseInt(parseInt((positiony-1) / 6) * 8 + parseInt((positionx-1)/6)+1);

                tmpPosX = positionx - 1;
                if (bitmap[tmpPosX][positiony]) {
                    drawMap(positionx, positiony);
                    second = true;
                }
                else
                    drawBitmap();

                //drawMap(nX, nY);
                /*document.getElementById("titleMap1").innerHTML = region;
                 document.getElementById("titleMap2").innerHTML = positionx + " - "+ positiony;*/
            } else {
                for (var y = 0; y < 6; y++) {
                    for (var x = 0; x < 6; x++) {
                        if (rX > 20 + x * width && rX < 20 + x * width + width && rY > 20 + y * height && rY < 20 + y * height + height) {
                            drawMap(positionx, positiony);
                            bitBox.lineWidth = 3;
                            bitBox.strokeRect(20 + x * width, 20 + y * height, width, height);
                            bitBox.lineWidth = 1;

                            position = y * 6 + x;

                            bitBox.fillStyle = 'white';

                            if(players.length > 0) {
                                for (p = 0; p < players.length; p++) {
                                    if (players[p].region[0] == positionx - 1 && players[p].region[1] == positiony - 1 && players[p].region[2] == position + 1) {
                                        bitBox.strokeRect(330, 30, 100, 195);
                                        bitBox.fillRect(331, 31, 98, 193);
                                        bitBox.strokeText("Player: " + players[p].name, 340, 50);
                                        bitBox.strokeText("[" + regions[region] + "-" + region + "]", 340, 70);
                                        bitBox.strokeText("System: " + players[p].level, 340, 90);
                                        bitBox.strokeText("Shield: " + players[p].shield, 340, 110);
                                        bitBox.strokeText("Virus: " + players[p].virus, 340, 130);
                                        bitBox.strokeText("Power: " + players[p].power, 340, 150);
                                        bitBox.strokeText("Network: " + players[p].network, 340, 170);
                                        bitBox.strokeText("HDD: " + players[p].hdd, 340, 190);
                                        bitBox.strokeText("Memory: " + players[p].ram, 340, 210);

                                        if ((Stats.x != players[p].region[0] && Stats.y != players[p].region[1])) {
                                            bitBox.strokeRect(340, 285, 75, 20);
                                            bitBox.fillRect(341, 286, 73, 18);
                                            bitBox.strokeText(Language[lang].Button.Attack, 352, 299);

                                            if (sendItem == true) {
                                                bitBox.strokeRect(340, 235, 75, 20);
                                                bitBox.fillRect(341, 236, 73, 18);
                                                bitBox.strokeText(Language[lang].Button.Select, 352, 249);
                                            }

                                        } else {
                                            if (Stats.p != players[p].region[2]) {
                                                bitBox.strokeRect(340, 285, 75, 20);
                                                bitBox.fillRect(341, 286, 73, 18);
                                                bitBox.strokeText(Language[lang].Button.Attack, 352, 299);

                                                if (sendItem) {
                                                    bitBox.strokeRect(340, 235, 75, 20);
                                                    bitBox.fillRect(341, 236, 73, 18);
                                                    bitBox.strokeText(Language[lang].Button.Select, 352, 249);
                                                }
                                            }
                                        }
                                        break;
                                    } else {
                                        bitBox.clearRect(330, 30, 102, 111);
                                        bitBox.strokeRect(330, 30, 100, 111);
                                        bitBox.fillRect(331, 31, 98, 110);
                                        bitBox.strokeText("Player: " + Stats.Name, 340, 50);
                                        bitBox.strokeText("[" + regions[region] + "-" + region + "]", 340, 70);
                                        bitBox.strokeText("System: " + Stats.Levels.System, 340, 90);
                                        bitBox.strokeText("Shield: " + Stats.Levels.Shield, 340, 110);
                                        bitBox.strokeText("Virus: " + Stats.Levels.Virus, 340, 130);
                                    }
                                }
                            } else {
                                bitBox.clearRect(330, 30, 102, 51);
                                bitBox.strokeRect(330, 30, 100, 51);
                                bitBox.fillRect(331, 31, 98, 50);
                                bitBox.strokeText("Player: " + Stats.Name, 340, 50);
                                bitBox.strokeText("[" + regions[region] + "-" + region + "]", 340, 70);
                            }





                            //document.getElementById("titleMap2").innerHTML = positionx + " - "+ positiony + " - " + position;
                        }
                    }
                }
            }

            if (rX > 340 && rX < 340 + 50 && rY > 260 && rY < 260 + 20) {
                if (!second) {
                    drawMap(positionx, positiony);
                    second = true;
                }
                else {
                    second = false;
                    drawBitmap();
                    //document.getElementById("titleMap2").innerHTML = positionx + " - "+ positiony;
                    positionx = 0;
                    positiony = 0;
                    position = 0;
                }
            }

            if (rX > 340 && rX < 340 + 50 && rY > 235 && rY < 235 + 20) {
                if(sendItem == true)
                {
                    if (positionx != 0 && positiony != 0 && position != 0 && region != 0)
                    {
                        console.log("positionx:" + positionx + " positiony: " + positiony + " position: " + position + " region: " + region);
                        console.log("Players:" + players);
                        for (var p = 0; p < players.length; p++) {
                            if (players[pl].region[2] == (position + 1)) {
                                if ((players[pl].region[0] == Stats.x && players[pl].region[1] == Stats.y) && players[pl].region[2] != Stats.p) {
                                    playerXml = loadXMLDoc("users/" + players[p].id + ".xml");

                                    XStats = playerXml.getElementsByTagName("Stats")[0];
                                    XLevels = XStats.getElementsByTagName("Levels")[0];

                                    XInventory = XStats.getElementsByTagName("Inventory")[0];
                                    XItems = XInventory.getElementsByTagName("Item");


                                    tmpInventory = [];

                                    HDDLevel = parseInt(XLevels.getElementsByTagName("HDD")[0].textContent);

                                    if (HDDLevel + 1 >= (XItems.length)) {

                                        tmpInventory = [];

                                        for(i = 0; i < XItems.length; i++)
                                        {
                                            tmpInventory.push({x: parseInt(XItems[i].getElementsByTagName("x")[0].textContent), y: parseInt(XItems[i].getElementsByTagName("y")[0].textContent)});
                                        }

                                        //console.log(tmpInventory);

                                        avSlotX = null;
                                        avSlotY = null;
                                        available = true;

                                        for (y = 0; y <= 4; y++) {
                                            for (x = 0; x <= 3; x++) {
                                                available = true;
                                                if(y > 0 || (y == 0 && x != 0)) {
                                                    for (i = 0; i <= tmpInventory.length; i++) {
                                                        if (tmpInventory[i]) {
                                                            if (tmpInventory[i].x == x && tmpInventory[i].y == y) {
                                                                available = false;
                                                                break;
                                                            }
                                                        }
                                                    }

                                                if (available) {
                                                    avSlotX = x;
                                                    avSlotY = y;
                                                    break;
                                                }
                                                }
                                            }
                                            if (available)
                                                break;
                                        }

                                        tmpItem.x = avSlotX;
                                        tmpItem.y = avSlotY;

                                        if (tmpItem != null) {
                                            actionPlayer(Stats.ID, Stats.Name, "removeItem", tmpItem);
                                            actionPlayer(players[p].id, players[p].name, "addItem", tmpItem);
                                            sendNotification(players[p].id, players[p].name, Stats.Name + " just sent you an item.");

                                            for (i = 0; i < Stats.Inventory.length; i++) {
                                                if (tmpItem.ID == Stats.Inventory[i].ID) {
                                                    Stats.Inventory.splice(i, 1);
                                                }
                                            }

                                            for (i = 0; i < Stats.Modules.Items[tmpItem.Class].length; i++) {
                                                if (tmpItem.ID == Stats.Modules.Items[tmpItem.Class][i].ID) {
                                                    Stats.Modules.Items[tmpItem.Class].splice(i, 1);
                                                    Stats.Modules.Quantity[tmpItem.Class] -= 1;
                                                }
                                            }
                                            sendItem = false;
                                            drawInventory();
                                            $('#mapBox').hide();
                                            mapShown = false;
                                        }
                                    } else {
                                        Console.innerHTML += '<p class="psmall">'+Language[lang].Console.MaxItems + '</p>';
                                        sendItem = false;
                                        tmpItem = null;
                                    }
                                } else if (players[pl].region[0] != Stats.x && players[pl].region[1] != Stats.y) {
                                    playerXml = loadXMLDoc("users/" + players[p].id + ".xml");



                                    XStats = playerXml.getElementsByTagName("Stats")[0];
                                    XLevels = XStats.getElementsByTagName("Levels")[0];

                                    XInventory = XStats.getElementsByTagName("Inventory")[0];
                                    XItems = XInventory.getElementsByTagName("Item");

                                    tmpInventory = [];

                                    HDDLevel = parseInt(XLevels.getElementsByTagName("HDD")[0].textContent);

                                    if (HDDLevel + 1 >= (XItems.length)) {
                                        tmpInventory = [];

                                        for(i = 0; i < XItems.length; i++)
                                        {
                                            tmpInventory.push({x: parseInt(XItems[i].getElementsByTagName("x")[0].textContent), y: parseInt(XItems[i].getElementsByTagName("y")[0].textContent)});
                                        }


                                        avSlotX = null;
                                        avSlotY = null;
                                        available = true;

                                        for (y = 0; y <= 4; y++) {
                                            for (x = 0; x <= 3; x++) {
                                                available = true;
                                                if(y > 0 || (y == 0 && x != 0)) {
                                                    for (i = 0; i <= tmpInventory.length; i++) {
                                                        if (tmpInventory[i]) {
                                                            if (tmpInventory[i].x == x && tmpInventory[i].y == y) {
                                                                available = false;
                                                                break;
                                                            }
                                                        }
                                                    }

                                                if (available) {
                                                    avSlotX = x;
                                                    avSlotY = y;
                                                    break;
                                                }
                                                }
                                            }
                                            if (available)
                                                break;
                                        }

                                        tmpItem.x = avSlotX;
                                        tmpItem.y = avSlotY;

                                        if (tmpItem != null) {
                                            actionPlayer(players[p].id, players[p].name, "addItem", tmpItem);
                                            actionPlayer(Stats.ID, Stats.Name, "removeItem", tmpItem);

                                            for (i = 0; i < Stats.Inventory.length; i++) {
                                                if (tmpItem.ID == Stats.Inventory[i].ID) {
                                                    Stats.Inventory.splice(i, 1);
                                                }
                                            }

                                            for (i = 0; i < Stats.Modules.Items[tmpItem.Class].length; i++) {
                                                if (tmpItem.ID == Stats.Modules.Items[tmpItem.Class][i].ID) {
                                                    Stats.Modules.Items[tmpItem.Class].splice(i, 1);
                                                    Stats.Modules.Quantity[tmpItem.Class] -= 1;
                                                }
                                            }
                                            sendItem = false;
                                            drawInventory();
                                            $('#mapBox').hide();
                                            mapShown = false;
                                        }
                                    } else {
                                        Console.innerHTML += '<p class="psmall">'+Language[lang].Console.MaxItems+'</p>';
                                        sendItem = false;
                                        tmpItem = null;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (rX > 340 && rX < 340 + 50 && rY > 280 && rY < 280 + 20) {
                if (Stats.x == null && Stats.y == null && Stats.p == null) {
                    if (positionx != 0 && positiony != 0 && position != 0 && region != 0) {
                        var ocupped = false;
                        for (var p = 0; p < players.length; p++) {
                            if (positionx - 1 == players[p].region[0] && positiony - 1 == players[p].region[1]) {
                                if (players[p].region[2] == position + 1)
                                    ocupped = true;
                            }
                        }

                        if (!ocupped) {
                            Stats.x = positionx;
                            Stats.y = positiony;
                            Stats.p = position;

                            player = {
                                name: Stats.Name,
                                region: [positionx - 1, positiony - 1, position + 1],
                                level: Stats.Levels.System,
                                cpu: Stats.Levels.CPU,
                                power: Stats.Levels.Power,
                                virus: Stats.Levels.Virus,
                                shield: Stats.Levels.Shield,
                                network: Stats.Levels.Network,
                                hdd: Stats.Levels.HDD,
                                ram: Stats.Levels.Memory
                            };

                            stat = {
                                x: positionx - 1,
                                y: positiony - 1,
                                p: position + 1,
                                r: region
                            }

                            actionPlayer(Stats.ID, Stats.Name, "addPosition", stat);
                            sendNotification(Stats.ID, Stats.Name, "You have created a new position in Bitquest");

                            $('#infoBox').show();

                            post_to_url("#", "", "GET");


                            players.push(player);
                            $('#mapBox').hide();
                            mapShown = false;

                        } else {
                            console.log("Lugar ocupado, selecciona otro.");
                        }
                    }
                } else {
                    for (pl in players) {
                        if (players[pl].region[2] == (position + 1)) {
                            if ((players[pl].region[0] == Stats.x && players[pl].region[1] == Stats.y) && players[pl].region[2] != Stats.p) {
                                $('#mapBox').hide();
                                mapShown = false;

                                if(!infect)
                                document.getElementById('SpreadVirus').innerHTML = Language[lang].Button.SendTo + "\n" + region + "." + positionx + "." + positiony + "." + position;

                                directionalVirus = true;
                                directionsVirus = [];
                                directionsVirus.push(region);
                                directionsVirus.push(positionx - 1);
                                directionsVirus.push(positiony - 1);
                                directionsVirus.push(position + 1);

                                //console.log(directionsVirus);
                                break;
                            } else if (players[pl].region[0] != Stats.x && players[pl].region[1] != Stats.y) {
                                $('#mapBox').hide();
                                mapShown = false;

                                if(!infect)
                                document.getElementById('SpreadVirus').innerHTML = Language[lang].Button.SendTo + "\n" + region + "." + positionx + "." + positiony + "." + position;

                                directionalVirus = true;
                                directionsVirus = [];
                                directionsVirus.push(region);
                                directionsVirus.push(positionx - 1);
                                directionsVirus.push(positiony - 1);
                                directionsVirus.push(position + 1);

                                //console.log(directionsVirus);
                                break;
                            }
                        }
                    }
                }
            }
        }

    }


    function getCursorPosition(e) {

        mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - InventoryCvas.offsetLeft - 846;
        mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - InventoryCvas.offsetLeft - 105;
        //console.log(mouseX);
        //console.log(mouseY);
    }

})();
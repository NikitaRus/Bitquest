/**
 * Created by N1 on 4/26/14.
 */

var regionalUpdate = setInterval(readRegional, 5000);
var delayedUpdate;
var delayedFunction;

function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename+ "?cache=" + new Date().getTime(),false);
    xhttp.send();

    return xhttp.responseXML;
}

function readRegional()
{
    //console.log("Reading regional messages");
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("RegionText").innerHTML = "Welcome to Bitquest global Chat.";
            document.getElementById("RegionText").innerHTML += xmlhttp.response;
            $("#Console").animate({ scrollTop: $('#Console')[0].scrollHeight}, 0);
            //console.log("Callback:" + xmlhttp.response);
        }
    }

    xmlhttp.open("GET", "ajax.php?READ=GLOBAL", true);
    xmlhttp.send();
}

function readPrivate()
{
    //console.log("Reading regional messages");
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("PrivateText").innerHTML = "Welcome to Bitquest private Chat.";
            document.getElementById("PrivateText").innerHTML += xmlhttp.response;
            $("#Console").animate({ scrollTop: $('#Console')[0].scrollHeight}, 0);
            //console.log("Callback:" + xmlhttp.response);
        }
    }

    xmlhttp.open("GET", "ajax.php?READ=PRIVATE&FROM="+Stats.ID, true);
    xmlhttp.send();
}

function sendIt(id, name, picture)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.open("GET", "users/" + id + ".xml", false);
    xhttp.send();

    if(xhttp.responseXML)
    {
        console.log("Data found!");
        //console.log(xhttp.responseXML);
        return true;
    } else {
        setTimeout(function() {
            console.log("User doesn't exist.");
            createUser(id, name, picture);
        }, 2000);
    }


    return xhttp.responseXML;
}

function saveListing(id, name, level, price, quantity, player, from)
{
    Item = {
        ID: id,
        Player: player,
        Name: name,
        Level: level,
        Price: price,
        From: from,
        Quantity: quantity
    };

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }
    json = JSON.stringify(Item);

    xmlhttp.open("GET", "statsHandling.php?player=" + Stats.ID + "&action=addListing" + "&item=" + json, true);
    xmlhttp.send();
}

function removeListing(category, index)
{
    var xmlhttp = new XMLHttpRequest();

    player = {
        Name: Stats.Name,
        ID: Stats.ID
    };

    action = "";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }
    json = JSON.stringify(player);

    if(category == "virus")
    {
        action = "removeReport";
    } else if(category == "store")
    {
        action = "removeListing";
    }

    xmlhttp.open("GET", "statsHandling.php?player=" + json + "&action=" + action + "&stat=" + index, true);
    xmlhttp.send();
}

function parseXml(xml, arrayTags)
{
    var dom = null;
    if (window.DOMParser)
    {
        dom = (new DOMParser()).parseFromString(xml, "text/xml");
    }
    else if (window.ActiveXObject)
    {
        dom = new ActiveXObject('Microsoft.XMLDOM');
        dom.async = false;
        if (!dom.loadXML(xml))
        {
            throw dom.parseError.reason + " " + dom.parseError.srcText;
        }
    }
    else
    {
        throw "cannot parse xml string!";
    }

    function isArray(o)
    {
        return Object.prototype.toString.apply(o) === '[object Array]';
    }

    function parseNode(xmlNode, result)
    {
        if(xmlNode.nodeName == "#text" && xmlNode.nodeValue.trim() == "")
        {
            return;
        }

        var jsonNode = {};
        var existing = result[xmlNode.nodeName];
        if(existing)
        {
            if(!isArray(existing))
            {
                result[xmlNode.nodeName] = [existing, jsonNode];
            }
            else
            {
                result[xmlNode.nodeName].push(jsonNode);
            }
        }
        else
        {
            if(arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1)
            {
                result[xmlNode.nodeName] = [jsonNode];
            }
            else
            {
                result[xmlNode.nodeName] = jsonNode;
            }
        }

        if(xmlNode.attributes)
        {
            var length = xmlNode.attributes.length;
            for(var i = 0; i < length; i++)
            {
                var attribute = xmlNode.attributes[i];
                jsonNode[attribute.nodeName] = attribute.nodeValue;
            }
        }

        var length = xmlNode.childNodes.length;
        for(var i = 0; i < length; i++)
        {
            parseNode(xmlNode.childNodes[i], jsonNode);
        }
    }

    var result = {};
    if(dom.childNodes.length)
    {
        parseNode(dom.childNodes[0], result);
    }

    return result;
}

function saveData()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }

    /*var player = {
        ID: Stats.ID,
        Name: Stats.Name,
        Level: Stats.Levels.System,
        Picture: Stats.Picture.replace("?type=large", "")
    };

    json = JSON.stringify(player);*/


    actionPlayer(Stats.ID, Stats.Name, "check", null);
    xmlhttp.open("GET", "ajax.php?w=rank&ID=" + Stats.ID + "&NAME=" + Stats.Name + "&LEVEL=" + Stats.Levels.System, true);
    xmlhttp.send();
    //console.log("Saving data");
}

function sendNotification(id, name, string)
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }

    notification = {};

    address = "https://graph.facebook.com/" + id + "/notifications";

    notification['access_token'] = '311553562324982|oCQEie-jCnO1aXIJvxt8VkoTBIU';
    notification['href'] = "";
    notification['template'] = string;

    xmlhttp.open("POST", "https://graph.facebook.com/" + id + "/notifications?access_token=" + notification['access_token'] + "&href=" + notification['href'] + "&template=" + notification['template'], true);
    xmlhttp.send();
}

function actionPlayer(id, name, action, stat)
{
    player = {
        Name: name,
        ID: id
    };


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }
    json = JSON.stringify(player);

    if(action == "addItem")
    {
        stat = JSON.stringify(stat);
    }
    else if(action == "addMaterials")
    {
        stat = JSON.stringify((stat));
    }
    else if(action == "removeItem")
    {
        stat = JSON.stringify(stat);
    }
    else if(action == "addPosition")
    {
        stat = JSON.stringify(stat);
    } else if(action == "virusAttack")
    {
        stat = JSON.stringify(stat);
    } else
    if(action == "addModule")
    {
        stat = JSON.stringify(stat);
    } else
    if(action == "removeModule")
    {
        stat = JSON.stringify(stat);
    }


    xmlhttp.open("GET", "statsHandling.php?player=" + json + "&action="+action + "&stat="+stat, false);
    xmlhttp.send();

    if(xmlhttp.responseXML)
    {
        return true;
    } else {
        return false;
    }
    //console.log("Saving Store");

}

function saveListings(action, id, item)
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("ConsoleText").innerHTML += xmlhttp.responseText;
            //console.log("Sent");
        }
    }
    json = JSON.stringify(item);

    xmlhttp.open("GET", "modules.php?id=" + id + "&action=" + action + "&item=" + json, true);
    xmlhttp.send();
    console.log("Saving Store");
}

function createUser(id, name, picture)
{
    //console.log("Creating user");
    //verificar funcionalidad
    var xmlhttp = new XMLHttpRequest();

    json = JSON.stringify(Stats);

    xmlhttp.open("GET", "ajax.php?ID=" + id + "&NAME=" + name, true);
    xmlhttp.send();

    sendIt(id);
}

function updateData(stat)
{
    usersXml = loadXMLDoc("users/" + Stats.ID + ".xml");
    XStats = usersXml.getElementsByTagName("Stats")[0];

    switch(stat)
    {
        case "points":
            XInventory = XStats.getElementsByTagName("Inventory")[0];
            //console.log(XInventory);
            XItem = XInventory.getElementsByTagName("Item")[0];
            XItemStats = XItem.getElementsByTagName("Stats")[0];

            //console.log(XItemStats.getElementsByTagName("Points")[0].textContent);

            Stats.Inventory[0].Stats.Points = parseInt(XItemStats.getElementsByTagName("Points")[0].textContent);
            break;
    }

}

var verifieduser = false;

var progressLevel = 0;
var progressDone = 0;
var messages = [];
function progressBar(message)
{

    messages.push(message);

    progressLevel += 1;
}
var loginTimer;
var slowFill;
function progressDelay()
{
    if(progressLevel > progressDone)
    {
        document.getElementById('loadingMessage').innerHTML = messages[progressDone];
        progressDone += 1;
        slowFill = setInterval(fillBar, 20);

        if(progressDone > 4)
        {
            progressBar(Language[lang].Loading.Step3 + Stats.Name);

            if(progressDone > 8)
            {
                $('#Blackout').hide();
                $('#Blackout2').hide();
                $('#Blackout3').hide();
                $('#Initialize').hide();
                clearInterval(loginTimer);

                if(Stats.Levels.System == 1)
                {
                    $('#infoBox').show();
                }

                delayedFunction = function() { return 0; };
                clearInterval(delayedUpdate);

            }
        }
    }
}

var p = 0;
function fillBar()
{
    loadingBar = document.getElementById('loadingBar');
    cvasBar = loadingBar.getContext("2d");
    cvasBar.fillStyle = "white";
    progress = 350 / 8 * progressDone;
    if(progressLevel > 0)
    {
            cvasBar.clearRect(0, 0, progress-1, 30);
            if(p < progress)
            p++;
            else
            clearInterval(slowFill);

            cvasBar.fillRect(0, 0, p, 30);
    }
    if(progressLevel == 6)
    {
        progressBar(Language[lang].Loading.Step8);
        verifieduser = true;
    }
}

function InviteFriend()
{
    var friends;

    console.log("Querying friends");
    FB.api('/me?fields=invitable_friends', function (response) {
        if (response && !response.error) {
            friends = response;
            console.log(response);
            /* handle the result */

            ProfileDiv = document.getElementById('Profile');
            ProfileDiv.innerHTML = '<div id="FriendsGraph"></div>';

            FriendsGraph = document.getElementById('FriendsGraph');

            for(f = 0; f < friends.invitable_friends.data.length; f++)
            {
                FriendsGraph.innerHTML += '<div id="friend' + f + '" class="Friend">';
                friend = friends.invitable_friends.data[f];
                //FriendsGraph.innerHTML += '<tr><td>' + friend.name + '</td></tr>'
                FriendsGraph.innerHTML += "<img src='" + friend.picture.data.url + "'>";
                FriendsGraph.innerHTML += "<button style='margin-left: 16px;' class='InviteButton dcolor' onclick=SendInvite('" + friend.id + "')>Invitar</button>";
                FriendsGraph.innerHTML += "<p>" + friend.name + '</p>';
                FriendsGraph.innerHTML += '</div>';
            }

            //FriendsGraph.innerHTML += '</table>'
        } else {
            console.log(response.error);
        }
    });

}

function drawStats()
{
    document.getElementById('Profile').innerHTML = '<img width=135px height=135px src="' + Stats.Picture + '"><p>' + Stats.Name + '</p>';
    document.getElementById('Profile').innerHTML += '<p class="pline">System: ' + Stats.Levels.System + '</p>';
    document.getElementById('Profile').innerHTML += '<p class="pline">CPU: ' + Stats.Levels.CPU + '</p>';
    document.getElementById('Profile').innerHTML += '<p class="pline">Shield: ' + Stats.Levels.Shield + '</p>';
    document.getElementById('Profile').innerHTML += '<p class="pline">Virus: ' + Stats.Levels.Virus + '</p>';
    document.getElementById('Profile').innerHTML += '<p class="pline">Power: ' + Stats.Levels.Power + '</p>';
    document.getElementById('Profile').innerHTML += '<button class="InviteButton dcolor" id="InviteFriend">Invitar a un amigo</button>';
    $('#InviteFriend').click(function () {
        InviteFriend();
    });
}

function SendInvite(id)
{
    FB.ui({
            method: 'apprequests',
            message: 'Fuiste invitado por ' + Stats.Name + ' al mundo de Bitquest. Aceptas el reto?',
            to: id,
            new_style_message:true
        },
        function(){
            //handle result
            console.log("Request...");
            drawStats();
        }
    );
}


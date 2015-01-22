# Bitquest

Bitquest is lacking the following folders and structure:

regions\
regions\map.xml
map.xml
  <Map>
  </Map>
  
session\

users\

store\
store\modules.xml
modules.xml
  <Items>
  </Items>

Which can be created by hand to make the game work.

Also, a database is requiered to make the chat system work with the following structure:

TABLE messages
id int(11), from varchar(48), to varchar(48), name varchar(48), message varchar(64), global, region, name


Actual State: v2.1

Nikita Fomishyn,
Owner of Bitquest

<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.6" name="gate" tilewidth="34" tileheight="52" tilecount="5" columns="5" objectalignment="bottom">
 <tileoffset x="1" y="8"/>
 <grid orientation="isometric" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="gate.png" width="170" height="52"/>
 <tile id="0">
  <objectgroup draworder="index" id="3">
   <object id="3" x="0" y="32" width="33" height="32"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="50"/>
   <frame tileid="1" duration="50"/>
   <frame tileid="2" duration="50"/>
   <frame tileid="3" duration="50"/>
  </animation>
 </tile>
</tileset>

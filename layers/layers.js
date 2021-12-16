var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_200mm_2 = new ol.format.GeoJSON();
var features_200mm_2 = format_200mm_2.readFeatures(json_200mm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mm_2.addFeatures(features_200mm_2);
var lyr_200mm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200mm_2, 
                style: style_200mm_2,
                interactive: true,
    title: '一日雨量200mm<br />\
    <img src="styles/legend/200mm_2_0.png" /> 淹水深度0-0.3公尺<br />\
    <img src="styles/legend/200mm_2_1.png" /> 淹水深度0.3公尺-0.5公尺<br />\
    <img src="styles/legend/200mm_2_2.png" /> 淹水深度0.5公尺-1公尺<br />\
    <img src="styles/legend/200mm_2_3.png" /> 淹水深度1公尺-2公尺<br />\
    <img src="styles/legend/200mm_2_4.png" /> 淹水深度2公尺-3公尺<br />\
    <img src="styles/legend/200mm_2_5.png" /> 淹水深度3公尺以上<br />\
    <img src="styles/legend/200mm_2_6.png" /> <br />'
        });
var format_350mm_3 = new ol.format.GeoJSON();
var features_350mm_3 = format_350mm_3.readFeatures(json_350mm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_350mm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_350mm_3.addFeatures(features_350mm_3);
var lyr_350mm_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_350mm_3, 
                style: style_350mm_3,
                interactive: true,
    title: '一日雨量350mm<br />\
    <img src="styles/legend/350mm_3_0.png" /> 淹水深度0-0.3公尺<br />\
    <img src="styles/legend/350mm_3_1.png" /> 淹水深度0.3公尺-0.5公尺<br />\
    <img src="styles/legend/350mm_3_2.png" /> 淹水深度0.5公尺-1公尺<br />\
    <img src="styles/legend/350mm_3_3.png" /> 淹水深度1公尺-2公尺<br />\
    <img src="styles/legend/350mm_3_4.png" /> 淹水深度2公尺-3公尺<br />\
    <img src="styles/legend/350mm_3_5.png" /> 淹水深度3公尺以上<br />\
    <img src="styles/legend/350mm_3_6.png" /> <br />'
        });
var format_500mm_4 = new ol.format.GeoJSON();
var features_500mm_4 = format_500mm_4.readFeatures(json_500mm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500mm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500mm_4.addFeatures(features_500mm_4);
var lyr_500mm_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_500mm_4, 
                style: style_500mm_4,
                interactive: true,
    title: '一日雨量500mm<br />\
    <img src="styles/legend/500mm_4_0.png" /> 淹水深度0-0.3公尺<br />\
    <img src="styles/legend/500mm_4_1.png" /> 淹水深度0.3公尺-0.5公尺<br />\
    <img src="styles/legend/500mm_4_2.png" /> 淹水深度0.5公尺-1公尺<br />\
    <img src="styles/legend/500mm_4_3.png" /> 淹水深度1公尺-2公尺<br />\
    <img src="styles/legend/500mm_4_4.png" /> 淹水深度2公尺-3公尺<br />\
    <img src="styles/legend/500mm_4_5.png" /> 淹水深度3公尺以上<br />\
    <img src="styles/legend/500mm_4_6.png" /> <br />'
        });
var format_650mm_5 = new ol.format.GeoJSON();
var features_650mm_5 = format_650mm_5.readFeatures(json_650mm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_650mm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_650mm_5.addFeatures(features_650mm_5);
var lyr_650mm_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_650mm_5, 
                style: style_650mm_5,
                interactive: true,
    title: '一日雨量650mm<br />\
    <img src="styles/legend/650mm_5_0.png" /> 淹水深度0-0.3公尺<br />\
    <img src="styles/legend/650mm_5_1.png" /> 淹水深度0.3公尺-0.5公尺<br />\
    <img src="styles/legend/650mm_5_2.png" /> 淹水深度0.5公尺-1公尺<br />\
    <img src="styles/legend/650mm_5_3.png" /> 淹水深度1公尺-2公尺<br />\
    <img src="styles/legend/650mm_5_4.png" /> 淹水深度2公尺-3公尺<br />\
    <img src="styles/legend/650mm_5_5.png" /> 淹水深度3公尺以上<br />\
    <img src="styles/legend/650mm_5_6.png" /> <br />'
        });
var format_22_6 = new ol.format.GeoJSON();
var features_22_6 = format_22_6.readFeatures(json_22_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_6.addFeatures(features_22_6);
var lyr_22_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22_6, 
                style: style_22_6,
                interactive: true,
                title: '<img src="styles/legend/22_6.png" /> 台灣22縣市'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_200mm_2.setVisible(true);lyr_350mm_3.setVisible(true);lyr_500mm_4.setVisible(true);lyr_650mm_5.setVisible(true);lyr_22_6.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_200mm_2,lyr_350mm_3,lyr_500mm_4,lyr_650mm_5,lyr_22_6];
lyr_200mm_2.set('fieldAliases', {'fid': 'fid', '淹水深度': '淹水深度', });
lyr_350mm_3.set('fieldAliases', {'fid': 'fid', '淹水深度': '淹水深度', });
lyr_500mm_4.set('fieldAliases', {'fid': 'fid', '淹水深度': '淹水深度', });
lyr_650mm_5.set('fieldAliases', {'fid': 'fid', '淹水深度': '淹水深度', });
lyr_22_6.set('fieldAliases', {'城市名': '城市名', });
lyr_200mm_2.set('fieldImages', {'fid': 'TextEdit', '淹水深度': 'TextEdit', });
lyr_350mm_3.set('fieldImages', {'fid': 'TextEdit', '淹水深度': 'TextEdit', });
lyr_500mm_4.set('fieldImages', {'fid': 'TextEdit', '淹水深度': 'TextEdit', });
lyr_650mm_5.set('fieldImages', {'fid': 'TextEdit', '淹水深度': 'TextEdit', });
lyr_22_6.set('fieldImages', {'城市名': 'TextEdit', });
lyr_200mm_2.set('fieldLabels', {'fid': 'no label', '淹水深度': 'inline label', });
lyr_350mm_3.set('fieldLabels', {'fid': 'no label', '淹水深度': 'inline label', });
lyr_500mm_4.set('fieldLabels', {'fid': 'no label', '淹水深度': 'inline label', });
lyr_650mm_5.set('fieldLabels', {'fid': 'no label', '淹水深度': 'inline label', });
lyr_22_6.set('fieldLabels', {'城市名': 'no label', });
lyr_22_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
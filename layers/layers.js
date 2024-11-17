ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32720").setExtent([-886263.405052, 7423740.905011, 1753444.476434, 8966898.882496]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_09_PANDO_WGS84_3 = new ol.format.GeoJSON();
var features_09_PANDO_WGS84_3 = format_09_PANDO_WGS84_3.readFeatures(json_09_PANDO_WGS84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_09_PANDO_WGS84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_PANDO_WGS84_3.addFeatures(features_09_PANDO_WGS84_3);
var lyr_09_PANDO_WGS84_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_PANDO_WGS84_3, 
                style: style_09_PANDO_WGS84_3,
                popuplayertitle: "09_PANDO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/09_PANDO_WGS84_3.png" /> 09_PANDO_WGS84'
            });
var format_09_PANDO_TRAMOS_PRECISOS_INTRA_4 = new ol.format.GeoJSON();
var features_09_PANDO_TRAMOS_PRECISOS_INTRA_4 = format_09_PANDO_TRAMOS_PRECISOS_INTRA_4.readFeatures(json_09_PANDO_TRAMOS_PRECISOS_INTRA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_09_PANDO_TRAMOS_PRECISOS_INTRA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_PANDO_TRAMOS_PRECISOS_INTRA_4.addFeatures(features_09_PANDO_TRAMOS_PRECISOS_INTRA_4);
var lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_PANDO_TRAMOS_PRECISOS_INTRA_4, 
                style: style_09_PANDO_TRAMOS_PRECISOS_INTRA_4,
                popuplayertitle: "09_PANDO_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '09_PANDO_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_0.png" /> UT_A - Bella Flor / UT_B - Filadelfia<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_1.png" /> UT_A - Bella Flor / UT_B - Puerto Rico<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_2.png" /> UT_A - Bella Flor / UT_B - Santa Rosa<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_3.png" /> UT_A - Bolpebra / UT_B - Cobija<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_4.png" /> UT_A - Bolpebra / UT_B - Filadelfia<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_5.png" /> UT_A - Cobija / UT_B - Porvenir<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_6.png" /> UT_A - Ingavi / UT_B - San Pedro<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_7.png" /> UT_A - Ingavi / UT_B - Santa Rosa<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_8.png" /> UT_A - Porvenir / UT_B - Filadelfia<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_9.png" /> UT_A - Puerto Gonzalo Moreno / UT_B - San Pedro<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_10.png" /> UT_A - San Lorenzo / UT_B - San Pedro<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_11.png" /> UT_A - Santa Rosa / UT_B - Puerto Rico<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_12.png" /> UT_A - Sena / UT_B - Puerto Rico<br />\
    <img src="styles/legend/09_PANDO_TRAMOS_PRECISOS_INTRA_4_13.png" /> UT_A - Villa Nueva / UT_B - San Pedro<br />'
        });
var format_08_BENI_WGS84_5 = new ol.format.GeoJSON();
var features_08_BENI_WGS84_5 = format_08_BENI_WGS84_5.readFeatures(json_08_BENI_WGS84_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_08_BENI_WGS84_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_BENI_WGS84_5.addFeatures(features_08_BENI_WGS84_5);
var lyr_08_BENI_WGS84_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_BENI_WGS84_5, 
                style: style_08_BENI_WGS84_5,
                popuplayertitle: "08_BENI_WGS84",
                interactive: true,
                title: '<img src="styles/legend/08_BENI_WGS84_5.png" /> 08_BENI_WGS84'
            });
var format_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6 = new ol.format.GeoJSON();
var features_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6 = format_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.readFeatures(json_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.addFeatures(features_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6);
var lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6, 
                style: style_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6,
                popuplayertitle: "08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_0.png" /> UT_A - Exaltación / UT_B - Guayaramerín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_1.png" /> UT_A - Exaltación / UT_B - Puerto Siles<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_2.png" /> UT_A - Exaltación / UT_B - San Joaquín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_3.png" /> UT_A - Magdalena / UT_B - San Joaquín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_4.png" /> UT_A - Puerto Siles / UT_B - Guayaramerín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_5.png" /> UT_A - Riberalta / UT_B - Exaltación<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_6.png" /> UT_A - Riberalta / UT_B - Guayaramerín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_7.png" /> UT_A - Riberalta / UT_B - Reyes<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_8.png" /> UT_A - Riberalta / UT_B - Santa Rosa<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_9.png" /> UT_A - San Javier / UT_B - San Ignacio<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_10.png" /> UT_A - San Javier / UT_B - Santa Ana<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_11.png" /> UT_A - San Joaquín / UT_B - San Ramón<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_12.png" /> UT_A - San Ramón / UT_B - Magdalena<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_13.png" /> UT_A - Santa Ana / UT_B - San Joaquín<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_14.png" /> UT_A - Santa Ana / UT_B - San Ramón<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_15.png" /> UT_A - Santa Rosa / UT_B - Exaltación<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_16.png" /> UT_A - TIOC-Territorio Indigena* / UT_B - San Ignacio<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_17.png" /> UT_A - TIOC-Territorio Indigena* / UT_B - Santa Ana<br />\
    <img src="styles/legend/08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6_18.png" /> UT_A - Trinidad / UT_B - Loreto<br />'
        });
var format_07_SANTA_CRUZ_WGS84s_7 = new ol.format.GeoJSON();
var features_07_SANTA_CRUZ_WGS84s_7 = format_07_SANTA_CRUZ_WGS84s_7.readFeatures(json_07_SANTA_CRUZ_WGS84s_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_07_SANTA_CRUZ_WGS84s_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_SANTA_CRUZ_WGS84s_7.addFeatures(features_07_SANTA_CRUZ_WGS84s_7);
var lyr_07_SANTA_CRUZ_WGS84s_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_SANTA_CRUZ_WGS84s_7, 
                style: style_07_SANTA_CRUZ_WGS84s_7,
                popuplayertitle: "07_SANTA_CRUZ_WGS84s",
                interactive: true,
                title: '<img src="styles/legend/07_SANTA_CRUZ_WGS84s_7.png" /> 07_SANTA_CRUZ_WGS84s'
            });
var format_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8 = new ol.format.GeoJSON();
var features_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8 = format_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.readFeatures(json_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.addFeatures(features_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8);
var lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8, 
                style: style_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8,
                popuplayertitle: "07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_0.png" /> UT_A - Colpa Bélgica / UT_B - Porongo<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_1.png" /> UT_A - Colpa Bélgica / UT_B - Portachuelo<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_2.png" /> UT_A - Colpa Bélgica / UT_B - Santa Cruz de la Sierra<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_3.png" /> UT_A - Colpa Bélgica / UT_B - Warnes<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_4.png" /> UT_A - Cotoca / UT_B - Pailón<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_5.png" /> UT_A - Cotoca / UT_B - Santa Cruz de la Sierra<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_6.png" /> UT_A - Cuatro Cañadas / UT_B - Concepción<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_7.png" /> UT_A - Cuatro Cañadas / UT_B - Okinawa Uno<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_8.png" /> UT_A - Cuatro Cañadas / UT_B - Pailón<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_9.png" /> UT_A - Cuatro Cañadas / UT_B - San Miguel<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_10.png" /> UT_A - El Carmen Rivero Tórrez / UT_B - Charagua<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_11.png" /> UT_A - El Carmen Rivero Tórrez / UT_B - Puerto Suarez<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_12.png" /> UT_A - El Carmen Rivero Tórrez / UT_B - Roboré<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_13.png" /> UT_A - El Carmen Rivero Tórrez / UT_B - San Matias<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_14.png" /> UT_A - Fernández Alonso / UT_B - Mineros<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_15.png" /> UT_A - Fernández Alonso / UT_B - San Julián<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_16.png" /> UT_A - Fernández Alonso / UT_B - San Pedro<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_17.png" /> UT_A - Mineros / UT_B - General Saavedra<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_18.png" /> UT_A - Pampa Grande / UT_B - Mairana<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_19.png" /> UT_A - Porongo / UT_B - El Torno<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_20.png" /> UT_A - Porongo / UT_B - La Guardia<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_21.png" /> UT_A - San Antonio de Lomerio / UT_B - Cuatro Cañadas<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_22.png" /> UT_A - San Javier / UT_B - San Julián<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_23.png" /> UT_A - San Javier / UT_B - San Ramón<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_24.png" /> UT_A - San Juan / UT_B - San Carlos<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_25.png" /> UT_A - San Juan / UT_B - Santa Rosa<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_26.png" /> UT_A - San Juan / UT_B - Yapacani<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_27.png" /> UT_A - San Julián / UT_B - Cuatro Cañadas<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_28.png" /> UT_A - San Pedro / UT_B - El Puente<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_29.png" /> UT_A - San Pedro / UT_B - Mineros<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_30.png" /> UT_A - San Pedro / UT_B - San Julián<br />\
    <img src="styles/legend/07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8_31.png" /> UT_A - Santa Rosa / UT_B - San Pedro<br />'
        });
var format_06_TARIJA_WGS84_9 = new ol.format.GeoJSON();
var features_06_TARIJA_WGS84_9 = format_06_TARIJA_WGS84_9.readFeatures(json_06_TARIJA_WGS84_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_06_TARIJA_WGS84_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_TARIJA_WGS84_9.addFeatures(features_06_TARIJA_WGS84_9);
var lyr_06_TARIJA_WGS84_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_TARIJA_WGS84_9, 
                style: style_06_TARIJA_WGS84_9,
                popuplayertitle: "06_TARIJA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/06_TARIJA_WGS84_9.png" /> 06_TARIJA_WGS84'
            });
var format_06_TARIJA_TRAMOS_PRECISOS_INTRA_10 = new ol.format.GeoJSON();
var features_06_TARIJA_TRAMOS_PRECISOS_INTRA_10 = format_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.readFeatures(json_06_TARIJA_TRAMOS_PRECISOS_INTRA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_06_TARIJA_TRAMOS_PRECISOS_INTRA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.addFeatures(features_06_TARIJA_TRAMOS_PRECISOS_INTRA_10);
var lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_TARIJA_TRAMOS_PRECISOS_INTRA_10, 
                style: style_06_TARIJA_TRAMOS_PRECISOS_INTRA_10,
                popuplayertitle: "06_TARIJA_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '06_TARIJA_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_0.png" /> UT_A - El Puente / UT_B - San Lorenzo<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_1.png" /> UT_A - El Puente / UT_B - Yunchará<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_2.png" /> UT_A - Entre Ríos / UT_B - Padcaya<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_3.png" /> UT_A - San Lorenzo / UT_B - Entre Ríos<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_4.png" /> UT_A - Tarija / UT_B - Entre Ríos<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_5.png" /> UT_A - Tarija / UT_B - Yunchará<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_6.png" /> UT_A - Uriondo / UT_B - Entre Ríos<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_7.png" /> UT_A - Uriondo / UT_B - Padcaya<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_8.png" /> UT_A - Yunchará / UT_B - Padcaya<br />\
    <img src="styles/legend/06_TARIJA_TRAMOS_PRECISOS_INTRA_10_9.png" /> UT_A - Yunchará / UT_B - Uriondo<br />'
        });
var format_05_POTOSI_WGS84_11 = new ol.format.GeoJSON();
var features_05_POTOSI_WGS84_11 = format_05_POTOSI_WGS84_11.readFeatures(json_05_POTOSI_WGS84_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_05_POTOSI_WGS84_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_POTOSI_WGS84_11.addFeatures(features_05_POTOSI_WGS84_11);
var lyr_05_POTOSI_WGS84_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_POTOSI_WGS84_11, 
                style: style_05_POTOSI_WGS84_11,
                popuplayertitle: "05_POTOSI_WGS84",
                interactive: true,
                title: '<img src="styles/legend/05_POTOSI_WGS84_11.png" /> 05_POTOSI_WGS84'
            });
var format_05_POTOSI_TRAMOS_PRECISOS_INTRA_12 = new ol.format.GeoJSON();
var features_05_POTOSI_TRAMOS_PRECISOS_INTRA_12 = format_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.readFeatures(json_05_POTOSI_TRAMOS_PRECISOS_INTRA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_05_POTOSI_TRAMOS_PRECISOS_INTRA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.addFeatures(features_05_POTOSI_TRAMOS_PRECISOS_INTRA_12);
var lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_POTOSI_TRAMOS_PRECISOS_INTRA_12, 
                style: style_05_POTOSI_TRAMOS_PRECISOS_INTRA_12,
                popuplayertitle: "05_POTOSI_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '05_POTOSI_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_0.png" /> UT_A - Betanzos / UT_B - Chaquí<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_1.png" /> UT_A - Betanzos / UT_B - CK ochas<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_2.png" /> UT_A - Chaquí / UT_B - Porco<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_3.png" /> UT_A - Chaquí / UT_B - Puna<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_4.png" /> UT_A - Chayanta / UT_B - Caripuyo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_5.png" /> UT_A - Chayanta / UT_B - Chuquihuta Ayllu Jucumani<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_6.png" /> UT_A - Chayanta / UT_B - Pocoata<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_7.png" /> UT_A - Chayanta / UT_B - Sacaca<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_8.png" /> UT_A - Colcha K / UT_B - San Agustín<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_9.png" /> UT_A - Colcha K / UT_B - San Pablo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_10.png" /> UT_A - Colquechaca / UT_B - San Pedro de Macha<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_11.png" /> UT_A - Cotagaita / UT_B - Caiza "D"<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_12.png" /> UT_A - Cuerpo de agua / UT_B - TIOC-Jatun Ayllu Yura<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_13.png" /> UT_A - Llallagua / UT_B - Caripuyo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_14.png" /> UT_A - Llica / UT_B - Tahua<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_15.png" /> UT_A - Ocurí / UT_B - Tacobamba<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_16.png" /> UT_A - Pocoata / UT_B - Chuquihuta Ayllu Jucumani<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_17.png" /> UT_A - Porco / UT_B - Cuerpo de agua<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_18.png" /> UT_A - Porco / UT_B - TIOC-Jatun Ayllu Yura<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_19.png" /> UT_A - Potosí / UT_B - Betanzos<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_20.png" /> UT_A - Puna / UT_B - Caiza D<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_21.png" /> UT_A - Puna / UT_B - CK ochas<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_22.png" /> UT_A - Ravelo / UT_B - Tacobamba<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_23.png" /> UT_A - Sacaca / UT_B - Caripuyo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_24.png" /> UT_A - San Pedro / UT_B - Chayanta<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_25.png" /> UT_A - San Pedro / UT_B - Colquechaca<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_26.png" /> UT_A - San Pedro / UT_B - Pocoata<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_27.png" /> UT_A - San Pedro / UT_B - Ravelo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_28.png" /> UT_A - San Pedro / UT_B - Sacaca<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_29.png" /> UT_A - San Pedro / UT_B - Toro Toro<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_30.png" /> UT_A - San Pedro de Macha / UT_B - Ocurí<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_31.png" /> UT_A - San Pedro de Macha / UT_B - Pocoata<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_32.png" /> UT_A - San Pedro de Macha / UT_B - Tinguipaya<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_33.png" /> UT_A - San Pedro de Quemes / UT_B - San Pablo<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_34.png" /> UT_A - Tacobamba / UT_B - Betanzos<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_35.png" /> UT_A - Tinguipaya / UT_B - Ocurí<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_36.png" /> UT_A - TIOC-Jatun Ayllu Yura / UT_B - Cotagaita<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_37.png" /> UT_A - TIOC-Jatun Ayllu Yura / UT_B - Tomave<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_38.png" /> UT_A - Tomave / UT_B - Porco<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_39.png" /> UT_A - Uncía / UT_B - Chuquihuta Ayllu Jucumani<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_40.png" /> UT_A - Uncía / UT_B - Llallagua<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_41.png" /> UT_A - Urmiri / UT_B - Porco<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_42.png" /> UT_A - Urmiri / UT_B - Tinguipaya<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_43.png" /> UT_A - Urmiri / UT_B - Tomave<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_44.png" /> UT_A - Urmiri / UT_B - Yocalla<br />\
    <img src="styles/legend/05_POTOSI_TRAMOS_PRECISOS_INTRA_12_45.png" /> UT_A - Uyuni / UT_B - Urmiri<br />'
        });
var format_04_ORURO_WGS84_13 = new ol.format.GeoJSON();
var features_04_ORURO_WGS84_13 = format_04_ORURO_WGS84_13.readFeatures(json_04_ORURO_WGS84_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_04_ORURO_WGS84_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ORURO_WGS84_13.addFeatures(features_04_ORURO_WGS84_13);
var lyr_04_ORURO_WGS84_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ORURO_WGS84_13, 
                style: style_04_ORURO_WGS84_13,
                popuplayertitle: "04_ORURO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/04_ORURO_WGS84_13.png" /> 04_ORURO_WGS84'
            });
var format_04_ORURO_TRAMOS_PRECISOS_INTRA_14 = new ol.format.GeoJSON();
var features_04_ORURO_TRAMOS_PRECISOS_INTRA_14 = format_04_ORURO_TRAMOS_PRECISOS_INTRA_14.readFeatures(json_04_ORURO_TRAMOS_PRECISOS_INTRA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_04_ORURO_TRAMOS_PRECISOS_INTRA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ORURO_TRAMOS_PRECISOS_INTRA_14.addFeatures(features_04_ORURO_TRAMOS_PRECISOS_INTRA_14);
var lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ORURO_TRAMOS_PRECISOS_INTRA_14, 
                style: style_04_ORURO_TRAMOS_PRECISOS_INTRA_14,
                popuplayertitle: "04_ORURO_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '04_ORURO_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_0.png" /> UT_A - Belén Andamarca / UT_B - GAIC Salinas<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_1.png" /> UT_A - Belén de Andamarca / UT_B - Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_2.png" /> UT_A - Belén de Andamarca / UT_B - Escara<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_3.png" /> UT_A - Caracollo / UT_B - El Choro<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_4.png" /> UT_A - Caracollo / UT_B - Paria<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_5.png" /> UT_A - Caracollo / UT_B - Toledo<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_6.png" /> UT_A - Carahuara de Carangas / UT_B - Totora<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_7.png" /> UT_A - Carangas / UT_B - La Rivera<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_8.png" /> UT_A - El Choro / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_9.png" /> UT_A - Escara / UT_B - Esmeralda<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_10.png" /> UT_A - Esmeralda / UT_B - Belén de Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_11.png" /> UT_A - Eucaliptus / UT_B - Caracollo<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_12.png" /> UT_A - GAIOC Salinas / UT_B - Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_13.png" /> UT_A - Huanuni / UT_B - Challapata<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_14.png" /> UT_A - Huanuni / UT_B - Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_15.png" /> UT_A - La Rivera / UT_B - Todos Santos<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_16.png" /> UT_A - Lago Poopó / UT_B - Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_17.png" /> UT_A - Lago Poopó / UT_B - Challapata<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_18.png" /> UT_A - Lago Poopó / UT_B - Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_19.png" /> UT_A - Machacamarca / UT_B - Huanuni<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_20.png" /> UT_A - Machacamarca / UT_B - Paria<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_21.png" /> UT_A - Machacamarca / UT_B - Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_22.png" /> UT_A - Oruro / UT_B - Paria<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_23.png" /> UT_A - Pampa Aullagas / UT_B - Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_24.png" /> UT_A - Pampa Aullagas / UT_B - GAIC Salinas<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_25.png" /> UT_A - Pampa Aullagas / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_26.png" /> UT_A - Pazña / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_27.png" /> UT_A - Poopó / UT_B - El Choro<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_28.png" /> UT_A - Poopó / UT_B - Huanuni<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_29.png" /> UT_A - Poopó / UT_B - Machacamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_30.png" /> UT_A - Sabaya / UT_B - Todos Santos<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_31.png" /> UT_A - Santiago de Huari / UT_B - Challapata<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_32.png" /> UT_A - Santiago de Huari / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_33.png" /> UT_A - Santiago de Huayllamarca / UT_B - Caracollo<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_34.png" /> UT_A - Santiago de Huayllamarca / UT_B - Choquecota<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_35.png" /> UT_A - Santiago de Huayllamarca / UT_B - Totora<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_36.png" /> UT_A - Santuario de Quillacas / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_37.png" /> UT_A - Toledo / UT_B - Andamarca<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_38.png" /> UT_A - Toledo / UT_B - Caracollo<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_39.png" /> UT_A - Toledo / UT_B - El Choro<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_40.png" /> UT_A - Toledo / UT_B - Lago Poopó<br />\
    <img src="styles/legend/04_ORURO_TRAMOS_PRECISOS_INTRA_14_41.png" /> UT_A - Turco / UT_B - Carahuara de Carangas<br />'
        });
var format_03_COCHABAMBA_WGS84_15 = new ol.format.GeoJSON();
var features_03_COCHABAMBA_WGS84_15 = format_03_COCHABAMBA_WGS84_15.readFeatures(json_03_COCHABAMBA_WGS84_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_03_COCHABAMBA_WGS84_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_COCHABAMBA_WGS84_15.addFeatures(features_03_COCHABAMBA_WGS84_15);
var lyr_03_COCHABAMBA_WGS84_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_COCHABAMBA_WGS84_15, 
                style: style_03_COCHABAMBA_WGS84_15,
                popuplayertitle: "03_COCHABAMBA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/03_COCHABAMBA_WGS84_15.png" /> 03_COCHABAMBA_WGS84'
            });
var format_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16 = new ol.format.GeoJSON();
var features_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16 = format_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.readFeatures(json_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.addFeatures(features_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16);
var lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16, 
                style: style_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16,
                popuplayertitle: "03_COCHABAMBA_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '03_COCHABAMBA_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_0.png" /> UT_A - Arque / UT_B - Tapacari<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_1.png" /> UT_A - Bolivar / UT_B - Arque<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_2.png" /> UT_A - Bolivar / UT_B - Tacopaya<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_3.png" /> UT_A - Cocapata / UT_B - Ayopaya<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_4.png" /> UT_A - Cocapata / UT_B - Morochata<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_5.png" /> UT_A - Cocapata / UT_B - Quillacollo<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_6.png" /> UT_A - Cocapata / UT_B - Villa Tunari<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_7.png" /> UT_A - Cochabamba / UT_B - Arbieto<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_8.png" /> UT_A - Cochabamba / UT_B - Colcapirhua<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_9.png" /> UT_A - Entre Ríos / UT_B - Puerto Villarroel<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_10.png" /> UT_A - Omereque / UT_B - Pasorapa<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_11.png" /> UT_A - Omereque / UT_B - Totora<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_12.png" /> UT_A - Pojo / UT_B - Entre Ríos<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_13.png" /> UT_A - Pojo / UT_B - Totora<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_14.png" /> UT_A - Punata / UT_B - Arani<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_15.png" /> UT_A - Santivañez / UT_B - Arbieto<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_16.png" /> UT_A - Santivañez / UT_B - Capinota<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_17.png" /> UT_A - Santivañez / UT_B - Cochabamba<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_18.png" /> UT_A - Santivañez / UT_B - Tarata<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_19.png" /> UT_A - Shinahota / UT_B - Chimoré<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_20.png" /> UT_A - Shinahota / UT_B - Tiraque<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_21.png" /> UT_A - Shinahota / UT_B - Totora<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_22.png" /> UT_A - Shinahota / UT_B - Villa Tunari<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_23.png" /> UT_A - Sipesipe / UT_B - Santivañez<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_24.png" /> UT_A - TIOC Raqaypampa / UT_B - Aiquile<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_25.png" /> UT_A - TIOC Raqaypampa / UT_B - Mizque<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_26.png" /> UT_A - Tolata / UT_B - Arbieto<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_27.png" /> UT_A - Tolata / UT_B - Cuerpo de agua<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_28.png" /> UT_A - Villa Tunari / UT_B - Chimoré<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_29.png" /> UT_A - Vinto / UT_B - Quillacollo<br />\
    <img src="styles/legend/03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16_30.png" /> UT_A - Vinto / UT_B - Sipesipe<br />'
        });
var format_02_LA_PAZ_WGS84_17 = new ol.format.GeoJSON();
var features_02_LA_PAZ_WGS84_17 = format_02_LA_PAZ_WGS84_17.readFeatures(json_02_LA_PAZ_WGS84_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_02_LA_PAZ_WGS84_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_LA_PAZ_WGS84_17.addFeatures(features_02_LA_PAZ_WGS84_17);
var lyr_02_LA_PAZ_WGS84_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_LA_PAZ_WGS84_17, 
                style: style_02_LA_PAZ_WGS84_17,
                popuplayertitle: "02_LA_PAZ_WGS84",
                interactive: true,
                title: '<img src="styles/legend/02_LA_PAZ_WGS84_17.png" /> 02_LA_PAZ_WGS84'
            });
var format_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18 = new ol.format.GeoJSON();
var features_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18 = format_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.readFeatures(json_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.addFeatures(features_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18);
var lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18, 
                style: style_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18,
                popuplayertitle: "02_LA_PAZ_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '02_LA_PAZ_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_0.png" /> UT_A - Achocalla / UT_B - Calamarca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_1.png" /> UT_A - Achocalla / UT_B - Mecapaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_2.png" /> UT_A - Alto Beni / UT_B - Caranavi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_3.png" /> UT_A - Alto Beni / UT_B - La Asunta<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_4.png" /> UT_A - Alto Beni / UT_B - Palos Blancos<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_5.png" /> UT_A - Ayo Ayo / UT_B - Calamarca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_6.png" /> UT_A - Ayo Ayo / UT_B - Colquencha<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_7.png" /> UT_A - Ayo Ayo / UT_B - Corocoro<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_8.png" /> UT_A - Ayo Ayo / UT_B - Patacamaya<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_9.png" /> UT_A - Ayo Ayo / UT_B - Sapahaqui<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_10.png" /> UT_A - Ayo Ayo / UT_B - Waldo Ballivian<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_11.png" /> UT_A - Calamarca / UT_B - Sapahaqui<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_12.png" /> UT_A - Chua Cocani / UT_B - Achacachi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_13.png" /> UT_A - Chua Cocani / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_14.png" /> UT_A - Chulumani / UT_B - Coripata<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_15.png" /> UT_A - El Alto / UT_B - Achocalla<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_16.png" /> UT_A - El Alto / UT_B - Laja<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_17.png" /> UT_A - El Alto / UT_B - Nuestra Señora de La Paz<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_18.png" /> UT_A - El Alto / UT_B - Pucarani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_19.png" /> UT_A - El Alto / UT_B - Viacha<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_20.png" /> UT_A - Escoma / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_21.png" /> UT_A - Escoma / UT_B - Puerto Acosta<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_22.png" /> UT_A - Escoma / UT_B - Puerto Mayor de Carabuco<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_23.png" /> UT_A - Huarina / UT_B - Achacachi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_24.png" /> UT_A - Huarina / UT_B - Batallas<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_25.png" /> UT_A - Huarina / UT_B - Huatajata<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_26.png" /> UT_A - Huarina / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_27.png" /> UT_A - Huatajata / UT_B - Achacachi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_28.png" /> UT_A - Huatajata / UT_B - Chua Cocani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_29.png" /> UT_A - Huatajata / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_30.png" /> UT_A - Humanata / UT_B - Puerto Acosta<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_31.png" /> UT_A - Inquisivi / UT_B - Ichoca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_32.png" /> UT_A - Irupana / UT_B - Cairoma<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_33.png" /> UT_A - Irupana / UT_B - Cajuata<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_34.png" /> UT_A - Irupana / UT_B - Chulumani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_35.png" /> UT_A - Jesús de Machaca / UT_B - Caquiaviri<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_36.png" /> UT_A - Jesús de Machaca / UT_B - Comanche<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_37.png" /> UT_A - Jesús de Machaca / UT_B - Desaguadero<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_38.png" /> UT_A - Jesús de Machaca / UT_B - Laja<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_39.png" /> UT_A - Jesús de Machaca / UT_B - Nazacara de Pacajes<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_40.png" /> UT_A - Jesús de Machaca / UT_B - Puerto Mayor de Guaqui<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_41.png" /> UT_A - Jesús de Machaca / UT_B - Tiahuanacu<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_42.png" /> UT_A - Jesús de Machaca / UT_B - Viacha<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_43.png" /> UT_A - Luribay / UT_B - Malla<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_44.png" /> UT_A - Luribay / UT_B - Sica Sica<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_45.png" /> UT_A - Mapiri / UT_B - Apolo<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_46.png" /> UT_A - Mapiri / UT_B - Charazani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_47.png" /> UT_A - Mapiri / UT_B - Guanay<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_48.png" /> UT_A - Mapiri / UT_B - Sorata<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_49.png" /> UT_A - Mapiri / UT_B - Tacacoma<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_50.png" /> UT_A - Mocomoco / UT_B - Charazani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_51.png" /> UT_A - Mocomoco / UT_B - Chuma<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_52.png" /> UT_A - Mocomoco / UT_B - Escoma<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_53.png" /> UT_A - Mocomoco / UT_B - Humanata<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_54.png" /> UT_A - Mocomoco / UT_B - Puerto Acosta<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_55.png" /> UT_A - Mocomoco / UT_B - Puerto Mayor de Carabuco<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_56.png" /> UT_A - Nazacara de Pacajes / UT_B - Caquiaviri<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_57.png" /> UT_A - Puerto Pérez / UT_B - Batallas<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_58.png" /> UT_A - Puerto Pérez / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_59.png" /> UT_A - Puerto Pérez / UT_B - Pucarani<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_60.png" /> UT_A - San Andres de Machaca / UT_B - Caquiaviri<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_61.png" /> UT_A - San Andres de Machaca / UT_B - Desaguadero<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_62.png" /> UT_A - San Andres de Machaca / UT_B - Jesús de Machaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_63.png" /> UT_A - San Andres de Machaca / UT_B - Nazacara de Pacajes<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_64.png" /> UT_A - San Andres de Machaca / UT_B - Santiago de Machaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_65.png" /> UT_A - Santiago de Huata / UT_B - Achacachi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_66.png" /> UT_A - Santiago de Huata / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_67.png" /> UT_A - Taraco / UT_B - Lago Titicaca<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_68.png" /> UT_A - Taraco / UT_B - Puerto Mayor de Guaqui<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_69.png" /> UT_A - Taraco / UT_B - Tiahuanacu<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_70.png" /> UT_A - Teoponte / UT_B - Alto Beni<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_71.png" /> UT_A - Teoponte / UT_B - Apolo<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_72.png" /> UT_A - Teoponte / UT_B - Caranavi<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_73.png" /> UT_A - Teoponte / UT_B - Guanay<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_74.png" /> UT_A - Teoponte / UT_B - Palos Blancos<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_75.png" /> UT_A - Umala / UT_B - Chacarilla<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_76.png" /> UT_A - Umala / UT_B - Corocoro<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_77.png" /> UT_A - Umala / UT_B - Papel Pampa<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_78.png" /> UT_A - Umala / UT_B - Patacamaya<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_79.png" /> UT_A - Umala / UT_B - San Pedro de Curahuara<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_80.png" /> UT_A - Umala / UT_B - Santiago de Callapa<br />\
    <img src="styles/legend/02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18_81.png" /> UT_A - Umala / UT_B - Sica Sica<br />'
        });
var format_01_CHUQUISACA_WGS84_19 = new ol.format.GeoJSON();
var features_01_CHUQUISACA_WGS84_19 = format_01_CHUQUISACA_WGS84_19.readFeatures(json_01_CHUQUISACA_WGS84_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_01_CHUQUISACA_WGS84_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_CHUQUISACA_WGS84_19.addFeatures(features_01_CHUQUISACA_WGS84_19);
var lyr_01_CHUQUISACA_WGS84_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_CHUQUISACA_WGS84_19, 
                style: style_01_CHUQUISACA_WGS84_19,
                popuplayertitle: "01_CHUQUISACA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/01_CHUQUISACA_WGS84_19.png" /> 01_CHUQUISACA_WGS84'
            });
var format_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20 = new ol.format.GeoJSON();
var features_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20 = format_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.readFeatures(json_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.addFeatures(features_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20);
var lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20, 
                style: style_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20,
                popuplayertitle: "01_CHUQUISACA_TRAMOS_PRECISOS_INTRA",
                interactive: true,
    title: '01_CHUQUISACA_TRAMOS_PRECISOS_INTRA<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_0.png" /> UT_A - Alcalá / UT_B - El Villar<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_1.png" /> UT_A - Camargo / UT_B - Culpina<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_2.png" /> UT_A - Culpina / UT_B - Villa Charcas<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_3.png" /> UT_A - Mojocoya / UT_B - Tomina<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_4.png" /> UT_A - Mojocoya / UT_B - Villa Serrano<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_5.png" /> UT_A - Padilla / UT_B - Villa Vaca Guzmán<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_6.png" /> UT_A - Poroma / UT_B - Sucre<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_7.png" /> UT_A - San Lucas / UT_B - Azurduy<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_8.png" /> UT_A - San Lucas / UT_B - Camargo<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_9.png" /> UT_A - San Lucas / UT_B - Incahuasi<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_10.png" /> UT_A - San Lucas / UT_B - Tarvita<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_11.png" /> UT_A - Sopachuy / UT_B - El Villar<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_12.png" /> UT_A - Sopachuy / UT_B - Icla<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_13.png" /> UT_A - Sucre / UT_B - Presto<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_14.png" /> UT_A - Sucre / UT_B - Yotala<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_15.png" /> UT_A - Tarvita / UT_B - Azurduy<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_16.png" /> UT_A - Tarvita / UT_B - El Villar<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_17.png" /> UT_A - Tomina / UT_B - Padilla<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_18.png" /> UT_A - Tomina / UT_B - Sopachuy<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_19.png" /> UT_A - Villa Abecia / UT_B - Culpina<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_20.png" /> UT_A - Villa Abecia / UT_B - Las Carreras<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_21.png" /> UT_A - Villa Charcas / UT_B - Camargo<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_22.png" /> UT_A - Villa Charcas / UT_B - Incahuasi<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_23.png" /> UT_A - Villa Charcas / UT_B - San Lucas<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_24.png" /> UT_A - Zudañez / UT_B - Sopachuy<br />\
    <img src="styles/legend/01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20_25.png" /> UT_A - Zudañez / UT_B - Tarabuco<br />'
        });
var format_LMITEREFERENCIALDEMUNICIPIOS_21 = new ol.format.GeoJSON();
var features_LMITEREFERENCIALDEMUNICIPIOS_21 = format_LMITEREFERENCIALDEMUNICIPIOS_21.readFeatures(json_LMITEREFERENCIALDEMUNICIPIOS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEREFERENCIALDEMUNICIPIOS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEREFERENCIALDEMUNICIPIOS_21.addFeatures(features_LMITEREFERENCIALDEMUNICIPIOS_21);
var lyr_LMITEREFERENCIALDEMUNICIPIOS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEREFERENCIALDEMUNICIPIOS_21, 
                style: style_LMITEREFERENCIALDEMUNICIPIOS_21,
                popuplayertitle: "LÍMITE REFERENCIAL DE MUNICIPIOS",
                interactive: true,
                title: '<img src="styles/legend/LMITEREFERENCIALDEMUNICIPIOS_21.png" /> LÍMITE REFERENCIAL DE MUNICIPIOS'
            });
var format_LMITEREFERENCIALDEPROVINCIAS_22 = new ol.format.GeoJSON();
var features_LMITEREFERENCIALDEPROVINCIAS_22 = format_LMITEREFERENCIALDEPROVINCIAS_22.readFeatures(json_LMITEREFERENCIALDEPROVINCIAS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEREFERENCIALDEPROVINCIAS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEREFERENCIALDEPROVINCIAS_22.addFeatures(features_LMITEREFERENCIALDEPROVINCIAS_22);
var lyr_LMITEREFERENCIALDEPROVINCIAS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEREFERENCIALDEPROVINCIAS_22, 
                style: style_LMITEREFERENCIALDEPROVINCIAS_22,
                popuplayertitle: "LÍMITE REFERENCIAL DE PROVINCIAS",
                interactive: true,
                title: '<img src="styles/legend/LMITEREFERENCIALDEPROVINCIAS_22.png" /> LÍMITE REFERENCIAL DE PROVINCIAS'
            });
var format_LMITEREFERENCIALDEDEPARTAMENTOS_23 = new ol.format.GeoJSON();
var features_LMITEREFERENCIALDEDEPARTAMENTOS_23 = format_LMITEREFERENCIALDEDEPARTAMENTOS_23.readFeatures(json_LMITEREFERENCIALDEDEPARTAMENTOS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEREFERENCIALDEDEPARTAMENTOS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEREFERENCIALDEDEPARTAMENTOS_23.addFeatures(features_LMITEREFERENCIALDEDEPARTAMENTOS_23);
var lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEREFERENCIALDEDEPARTAMENTOS_23, 
                style: style_LMITEREFERENCIALDEDEPARTAMENTOS_23,
                popuplayertitle: "LÍMITE REFERENCIAL DE DEPARTAMENTOS",
                interactive: true,
                title: '<img src="styles/legend/LMITEREFERENCIALDEDEPARTAMENTOS_23.png" /> LÍMITE REFERENCIAL DE DEPARTAMENTOS'
            });
var format_TIOC_URU_CHIPAYA_24 = new ol.format.GeoJSON();
var features_TIOC_URU_CHIPAYA_24 = format_TIOC_URU_CHIPAYA_24.readFeatures(json_TIOC_URU_CHIPAYA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_URU_CHIPAYA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_URU_CHIPAYA_24.addFeatures(features_TIOC_URU_CHIPAYA_24);
var lyr_TIOC_URU_CHIPAYA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_URU_CHIPAYA_24, 
                style: style_TIOC_URU_CHIPAYA_24,
                popuplayertitle: "TIOC_URU_CHIPAYA",
                interactive: true,
                title: '<img src="styles/legend/TIOC_URU_CHIPAYA_24.png" /> TIOC_URU_CHIPAYA'
            });
var format_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25 = new ol.format.GeoJSON();
var features_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25 = format_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.readFeatures(json_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.addFeatures(features_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25);
var lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25, 
                style: style_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25,
                popuplayertitle: "TIOC_TERRITORIO_INDIGENA_MULTIETNICO_-_TIM",
                interactive: true,
                title: '<img src="styles/legend/TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.png" /> TIOC_TERRITORIO_INDIGENA_MULTIETNICO_-_TIM'
            });
var format_TIOC_SALINAS_DE_GARCI_MENDOZA_26 = new ol.format.GeoJSON();
var features_TIOC_SALINAS_DE_GARCI_MENDOZA_26 = format_TIOC_SALINAS_DE_GARCI_MENDOZA_26.readFeatures(json_TIOC_SALINAS_DE_GARCI_MENDOZA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_SALINAS_DE_GARCI_MENDOZA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_SALINAS_DE_GARCI_MENDOZA_26.addFeatures(features_TIOC_SALINAS_DE_GARCI_MENDOZA_26);
var lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_SALINAS_DE_GARCI_MENDOZA_26, 
                style: style_TIOC_SALINAS_DE_GARCI_MENDOZA_26,
                popuplayertitle: "TIOC_SALINAS_DE_GARCI_MENDOZA",
                interactive: true,
                title: '<img src="styles/legend/TIOC_SALINAS_DE_GARCI_MENDOZA_26.png" /> TIOC_SALINAS_DE_GARCI_MENDOZA'
            });
var format_TIOC_RAQAYPAMPA_27 = new ol.format.GeoJSON();
var features_TIOC_RAQAYPAMPA_27 = format_TIOC_RAQAYPAMPA_27.readFeatures(json_TIOC_RAQAYPAMPA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_RAQAYPAMPA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_RAQAYPAMPA_27.addFeatures(features_TIOC_RAQAYPAMPA_27);
var lyr_TIOC_RAQAYPAMPA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_RAQAYPAMPA_27, 
                style: style_TIOC_RAQAYPAMPA_27,
                popuplayertitle: "TIOC_RAQAYPAMPA",
                interactive: true,
                title: '<img src="styles/legend/TIOC_RAQAYPAMPA_27.png" /> TIOC_RAQAYPAMPA'
            });
var format_TIOC_KEREMBA_IYAMBAE_28 = new ol.format.GeoJSON();
var features_TIOC_KEREMBA_IYAMBAE_28 = format_TIOC_KEREMBA_IYAMBAE_28.readFeatures(json_TIOC_KEREMBA_IYAMBAE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_KEREMBA_IYAMBAE_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_KEREMBA_IYAMBAE_28.addFeatures(features_TIOC_KEREMBA_IYAMBAE_28);
var lyr_TIOC_KEREMBA_IYAMBAE_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_KEREMBA_IYAMBAE_28, 
                style: style_TIOC_KEREMBA_IYAMBAE_28,
                popuplayertitle: "TIOC_KERE+MBA_IYAMBAE",
                interactive: true,
                title: '<img src="styles/legend/TIOC_KEREMBA_IYAMBAE_28.png" /> TIOC_KERE+MBA_IYAMBAE'
            });
var format_TIOC_JATUM_AYLLU_YURA_29 = new ol.format.GeoJSON();
var features_TIOC_JATUM_AYLLU_YURA_29 = format_TIOC_JATUM_AYLLU_YURA_29.readFeatures(json_TIOC_JATUM_AYLLU_YURA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_JATUM_AYLLU_YURA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_JATUM_AYLLU_YURA_29.addFeatures(features_TIOC_JATUM_AYLLU_YURA_29);
var lyr_TIOC_JATUM_AYLLU_YURA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_JATUM_AYLLU_YURA_29, 
                style: style_TIOC_JATUM_AYLLU_YURA_29,
                popuplayertitle: "TIOC_JATUM_AYLLU_YURA",
                interactive: true,
                title: '<img src="styles/legend/TIOC_JATUM_AYLLU_YURA_29.png" /> TIOC_JATUM_AYLLU_YURA'
            });
var format_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30 = new ol.format.GeoJSON();
var features_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30 = format_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.readFeatures(json_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.addFeatures(features_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30);
var lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30, 
                style: style_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30,
                popuplayertitle: "TIOC_GUARANI_CHAQUEÑO_DE_HUACAYA",
                interactive: true,
                title: '<img src="styles/legend/TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.png" /> TIOC_GUARANI_CHAQUEÑO_DE_HUACAYA'
            });
var format_TIOCCHARAGUAIYAMBAE_31 = new ol.format.GeoJSON();
var features_TIOCCHARAGUAIYAMBAE_31 = format_TIOCCHARAGUAIYAMBAE_31.readFeatures(json_TIOCCHARAGUAIYAMBAE_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCCHARAGUAIYAMBAE_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCCHARAGUAIYAMBAE_31.addFeatures(features_TIOCCHARAGUAIYAMBAE_31);
var lyr_TIOCCHARAGUAIYAMBAE_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCCHARAGUAIYAMBAE_31, 
                style: style_TIOCCHARAGUAIYAMBAE_31,
                popuplayertitle: "TIOC CHARAGUA IYAMBAE",
                interactive: true,
                title: '<img src="styles/legend/TIOCCHARAGUAIYAMBAE_31.png" /> TIOC CHARAGUA IYAMBAE'
            });
var format_LMITEINTERDEPARTAMENTALPRECISO_32 = new ol.format.GeoJSON();
var features_LMITEINTERDEPARTAMENTALPRECISO_32 = format_LMITEINTERDEPARTAMENTALPRECISO_32.readFeatures(json_LMITEINTERDEPARTAMENTALPRECISO_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEINTERDEPARTAMENTALPRECISO_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEINTERDEPARTAMENTALPRECISO_32.addFeatures(features_LMITEINTERDEPARTAMENTALPRECISO_32);
var lyr_LMITEINTERDEPARTAMENTALPRECISO_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEINTERDEPARTAMENTALPRECISO_32, 
                style: style_LMITEINTERDEPARTAMENTALPRECISO_32,
                popuplayertitle: "LÍMITE INTERDEPARTAMENTAL PRECISO",
                interactive: true,
                title: '<img src="styles/legend/LMITEINTERDEPARTAMENTALPRECISO_32.png" /> LÍMITE INTERDEPARTAMENTAL PRECISO'
            });
var format_LMITEINTRADEPARTAMENTALPRECISO_33 = new ol.format.GeoJSON();
var features_LMITEINTRADEPARTAMENTALPRECISO_33 = format_LMITEINTRADEPARTAMENTALPRECISO_33.readFeatures(json_LMITEINTRADEPARTAMENTALPRECISO_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEINTRADEPARTAMENTALPRECISO_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEINTRADEPARTAMENTALPRECISO_33.addFeatures(features_LMITEINTRADEPARTAMENTALPRECISO_33);
var lyr_LMITEINTRADEPARTAMENTALPRECISO_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEINTRADEPARTAMENTALPRECISO_33, 
                style: style_LMITEINTRADEPARTAMENTALPRECISO_33,
                popuplayertitle: "LÍMITE INTRADEPARTAMENTAL PRECISO",
                interactive: true,
                title: '<img src="styles/legend/LMITEINTRADEPARTAMENTALPRECISO_33.png" /> LÍMITE INTRADEPARTAMENTAL PRECISO'
            });
var format_LMITEINTERNACIONAL_34 = new ol.format.GeoJSON();
var features_LMITEINTERNACIONAL_34 = format_LMITEINTERNACIONAL_34.readFeatures(json_LMITEINTERNACIONAL_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEINTERNACIONAL_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEINTERNACIONAL_34.addFeatures(features_LMITEINTERNACIONAL_34);
var lyr_LMITEINTERNACIONAL_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEINTERNACIONAL_34, 
                style: style_LMITEINTERNACIONAL_34,
                popuplayertitle: "LÍMITE INTERNACIONAL",
                interactive: true,
                title: '<img src="styles/legend/LMITEINTERNACIONAL_34.png" /> LÍMITE INTERNACIONAL'
            });
var group_LMITESINTERNACIONALES = new ol.layer.Group({
                                layers: [lyr_LMITEINTERNACIONAL_34,],
                                fold: "open",
                                title: "LÍMITES INTERNACIONALES"});
var group_LMITESPRECISOSANIVELNACIONAL = new ol.layer.Group({
                                layers: [lyr_LMITEINTERDEPARTAMENTALPRECISO_32,lyr_LMITEINTRADEPARTAMENTALPRECISO_33,],
                                fold: "open",
                                title: "LÍMITES PRECISOS A NIVEL NACIONAL"});
var group_LMITESPRECISOSDEPARTAMENTOTARIJA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LÍMITES PRECISOS DEPARTAMENTO TARIJA"});
var group_LMITESDETERRITORIOSINDIGENAORIGINARIOCAMPESINOS = new ol.layer.Group({
                                layers: [lyr_TIOC_URU_CHIPAYA_24,lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25,lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26,lyr_TIOC_RAQAYPAMPA_27,lyr_TIOC_KEREMBA_IYAMBAE_28,lyr_TIOC_JATUM_AYLLU_YURA_29,lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30,lyr_TIOCCHARAGUAIYAMBAE_31,],
                                fold: "open",
                                title: "LÍMITES DE TERRITORIOS INDIGENA ORIGINARIO CAMPESINOS"});
var group_LMITESREFERENCIALESDEUNIDADESTERRITORIALES = new ol.layer.Group({
                                layers: [lyr_LMITEREFERENCIALDEMUNICIPIOS_21,lyr_LMITEREFERENCIALDEPROVINCIAS_22,lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23,],
                                fold: "open",
                                title: "LÍMITES REFERENCIALES DE UNIDADES TERRITORIALES"});
var group_LMITESPRECISOSINTRADEPARTAMENTALES = new ol.layer.Group({
                                layers: [lyr_09_PANDO_WGS84_3,lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4,lyr_08_BENI_WGS84_5,lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6,lyr_07_SANTA_CRUZ_WGS84s_7,lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8,lyr_06_TARIJA_WGS84_9,lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10,lyr_05_POTOSI_WGS84_11,lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12,lyr_04_ORURO_WGS84_13,lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14,lyr_03_COCHABAMBA_WGS84_15,lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16,lyr_02_LA_PAZ_WGS84_17,lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18,lyr_01_CHUQUISACA_WGS84_19,lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20,],
                                fold: "open",
                                title: "LÍMITES PRECISOS INTRADEPARTAMENTALES"});

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_09_PANDO_WGS84_3.setVisible(true);lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4.setVisible(true);lyr_08_BENI_WGS84_5.setVisible(true);lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.setVisible(true);lyr_07_SANTA_CRUZ_WGS84s_7.setVisible(true);lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.setVisible(true);lyr_06_TARIJA_WGS84_9.setVisible(true);lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.setVisible(true);lyr_05_POTOSI_WGS84_11.setVisible(true);lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.setVisible(true);lyr_04_ORURO_WGS84_13.setVisible(true);lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14.setVisible(true);lyr_03_COCHABAMBA_WGS84_15.setVisible(true);lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.setVisible(true);lyr_02_LA_PAZ_WGS84_17.setVisible(true);lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.setVisible(true);lyr_01_CHUQUISACA_WGS84_19.setVisible(true);lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.setVisible(true);lyr_LMITEREFERENCIALDEMUNICIPIOS_21.setVisible(true);lyr_LMITEREFERENCIALDEPROVINCIAS_22.setVisible(true);lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23.setVisible(true);lyr_TIOC_URU_CHIPAYA_24.setVisible(true);lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.setVisible(true);lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26.setVisible(true);lyr_TIOC_RAQAYPAMPA_27.setVisible(true);lyr_TIOC_KEREMBA_IYAMBAE_28.setVisible(true);lyr_TIOC_JATUM_AYLLU_YURA_29.setVisible(true);lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.setVisible(true);lyr_TIOCCHARAGUAIYAMBAE_31.setVisible(true);lyr_LMITEINTERDEPARTAMENTALPRECISO_32.setVisible(true);lyr_LMITEINTRADEPARTAMENTALPRECISO_33.setVisible(true);lyr_LMITEINTERNACIONAL_34.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_GoogleSatellite_2,group_LMITESPRECISOSINTRADEPARTAMENTALES,group_LMITESREFERENCIALESDEUNIDADESTERRITORIALES,group_LMITESDETERRITORIOSINDIGENAORIGINARIOCAMPESINOS,group_LMITESPRECISOSANIVELNACIONAL,group_LMITESINTERNACIONALES];
lyr_09_PANDO_WGS84_3.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_08_BENI_WGS84_5.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_07_SANTA_CRUZ_WGS84s_7.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_06_TARIJA_WGS84_9.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_05_POTOSI_WGS84_11.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_04_ORURO_WGS84_13.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_03_COCHABAMBA_WGS84_15.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_02_LA_PAZ_WGS84_17.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_01_CHUQUISACA_WGS84_19.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_21.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_LMITEREFERENCIALDEPROVINCIAS_22.set('fieldAliases', {'ID_UT_P_': 'ID_UT_P_', 'PROVINCIA_': 'PROVINCIA_', 'B_LEGAL_P': 'B_LEGAL_P', 'SUP_KM2': 'SUP_KM2', });
lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23.set('fieldAliases', {'ID_UT_D_': 'ID_UT_D_', 'DEPARTAM': 'DEPARTAM', 'B_LEGAL_D_': 'B_LEGAL_D_', 'SUP_KM2_': 'SUP_KM2_', });
lyr_TIOC_URU_CHIPAYA_24.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_RAQAYPAMPA_27.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_KEREMBA_IYAMBAE_28.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_JATUM_AYLLU_YURA_29.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_TIOCCHARAGUAIYAMBAE_31.set('fieldAliases', {'ID_UT_M_': 'ID_UT_M_', 'MUN_TIOC': 'MUN_TIOC', 'B_LEGAL_M': 'B_LEGAL_M', 'SUP_KM2': 'SUP_KM2', 'C_SIOT_': 'C_SIOT_', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'COD_SIOT_': 'COD_SIOT_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE_': 'ID_LIMITE_', 'DEPARTAM_': 'DEPARTAM_', 'BASE_LEGAL': 'BASE_LEGAL', 'TIPO': 'TIPO', 'COLINDANTE': 'COLINDANTE', 'DIST_KM_': 'DIST_KM_', });
lyr_LMITEINTERNACIONAL_34.set('fieldAliases', {'B_LEGAL_I': 'B_LEGAL_I', 'SUP_KM2_': 'SUP_KM2_', });
lyr_09_PANDO_WGS84_3.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_08_BENI_WGS84_5.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_07_SANTA_CRUZ_WGS84s_7.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_06_TARIJA_WGS84_9.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_05_POTOSI_WGS84_11.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_04_ORURO_WGS84_13.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_03_COCHABAMBA_WGS84_15.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_02_LA_PAZ_WGS84_17.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_01_CHUQUISACA_WGS84_19.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_21.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_LMITEREFERENCIALDEPROVINCIAS_22.set('fieldImages', {'ID_UT_P_': 'TextEdit', 'PROVINCIA_': 'TextEdit', 'B_LEGAL_P': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23.set('fieldImages', {'ID_UT_D_': 'TextEdit', 'DEPARTAM': 'TextEdit', 'B_LEGAL_D_': 'TextEdit', 'SUP_KM2_': 'TextEdit', });
lyr_TIOC_URU_CHIPAYA_24.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_RAQAYPAMPA_27.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_KEREMBA_IYAMBAE_28.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_JATUM_AYLLU_YURA_29.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_TIOCCHARAGUAIYAMBAE_31.set('fieldImages', {'ID_UT_M_': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'B_LEGAL_M': 'TextEdit', 'SUP_KM2': 'TextEdit', 'C_SIOT_': 'TextEdit', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'COD_SIOT_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE_': 'TextEdit', 'DEPARTAM_': 'TextEdit', 'BASE_LEGAL': 'TextEdit', 'TIPO': 'TextEdit', 'COLINDANTE': 'TextEdit', 'DIST_KM_': 'TextEdit', });
lyr_LMITEINTERNACIONAL_34.set('fieldImages', {'B_LEGAL_I': '', 'SUP_KM2_': '', });
lyr_09_PANDO_WGS84_3.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_09_PANDO_TRAMOS_PRECISOS_INTRA_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_08_BENI_WGS84_5.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_08_BENI_PRECISOS_TRAMOS_PRECISOS_INTRA_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_07_SANTA_CRUZ_WGS84s_7.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_07_SANTA_CRUZ_TRAMOS_PRECISOS_INTRA_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_06_TARIJA_WGS84_9.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_06_TARIJA_TRAMOS_PRECISOS_INTRA_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_05_POTOSI_WGS84_11.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_05_POTOSI_TRAMOS_PRECISOS_INTRA_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_04_ORURO_WGS84_13.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_04_ORURO_TRAMOS_PRECISOS_INTRA_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_03_COCHABAMBA_WGS84_15.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_03_COCHABAMBA_TRAMOS_PRECISOS_INTRA_16.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_02_LA_PAZ_WGS84_17.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_02_LA_PAZ_TRAMOS_PRECISOS_INTRA_18.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_01_CHUQUISACA_WGS84_19.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_01_CHUQUISACA_TRAMOS_PRECISOS_INTRA_20.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_21.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_LMITEREFERENCIALDEPROVINCIAS_22.set('fieldLabels', {'ID_UT_P_': 'no label', 'PROVINCIA_': 'no label', 'B_LEGAL_P': 'no label', 'SUP_KM2': 'no label', });
lyr_LMITEREFERENCIALDEDEPARTAMENTOS_23.set('fieldLabels', {'ID_UT_D_': 'no label', 'DEPARTAM': 'no label', 'B_LEGAL_D_': 'no label', 'SUP_KM2_': 'no label', });
lyr_TIOC_URU_CHIPAYA_24.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_TERRITORIO_INDIGENA_MULTIETNICO__TIM_25.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_SALINAS_DE_GARCI_MENDOZA_26.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_RAQAYPAMPA_27.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_KEREMBA_IYAMBAE_28.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_JATUM_AYLLU_YURA_29.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOC_GUARANI_CHAQUEO_DE_HUACAYA_30.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_TIOCCHARAGUAIYAMBAE_31.set('fieldLabels', {'ID_UT_M_': 'no label', 'MUN_TIOC': 'no label', 'B_LEGAL_M': 'no label', 'SUP_KM2': 'no label', 'C_SIOT_': 'no label', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_32.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'COD_SIOT_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'no label', 'DIST_KM_': 'no label', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_33.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID_LIMITE_': 'no label', 'DEPARTAM_': 'no label', 'BASE_LEGAL': 'no label', 'TIPO': 'no label', 'COLINDANTE': 'inline label - visible with data', 'DIST_KM_': 'no label', });
lyr_LMITEINTERNACIONAL_34.set('fieldLabels', {'B_LEGAL_I': 'no label', 'SUP_KM2_': 'no label', });
lyr_LMITEINTERNACIONAL_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
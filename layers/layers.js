ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32720").setExtent([-757626.744455, 7341722.666050, 1766278.429070, 8884880.643535]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_09_PANDO_WGS84_2 = new ol.format.GeoJSON();
var features_09_PANDO_WGS84_2 = format_09_PANDO_WGS84_2.readFeatures(json_09_PANDO_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_09_PANDO_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_PANDO_WGS84_2.addFeatures(features_09_PANDO_WGS84_2);
var lyr_09_PANDO_WGS84_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_PANDO_WGS84_2, 
                style: style_09_PANDO_WGS84_2,
                popuplayertitle: "09_PANDO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/09_PANDO_WGS84_2.png" /> 09_PANDO_WGS84'
            });
var format_09_PANDO_PRECISO_WGS84_3 = new ol.format.GeoJSON();
var features_09_PANDO_PRECISO_WGS84_3 = format_09_PANDO_PRECISO_WGS84_3.readFeatures(json_09_PANDO_PRECISO_WGS84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_09_PANDO_PRECISO_WGS84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_PANDO_PRECISO_WGS84_3.addFeatures(features_09_PANDO_PRECISO_WGS84_3);
var lyr_09_PANDO_PRECISO_WGS84_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_PANDO_PRECISO_WGS84_3, 
                style: style_09_PANDO_PRECISO_WGS84_3,
                popuplayertitle: "09_PANDO_PRECISO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/09_PANDO_PRECISO_WGS84_3.png" /> 09_PANDO_PRECISO_WGS84'
            });
var format_08_BENI_WGS84_4 = new ol.format.GeoJSON();
var features_08_BENI_WGS84_4 = format_08_BENI_WGS84_4.readFeatures(json_08_BENI_WGS84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_08_BENI_WGS84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_BENI_WGS84_4.addFeatures(features_08_BENI_WGS84_4);
var lyr_08_BENI_WGS84_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_BENI_WGS84_4, 
                style: style_08_BENI_WGS84_4,
                popuplayertitle: "08_BENI_WGS84",
                interactive: true,
                title: '<img src="styles/legend/08_BENI_WGS84_4.png" /> 08_BENI_WGS84'
            });
var format_08_BENI_PRECISOS_WGS84_5 = new ol.format.GeoJSON();
var features_08_BENI_PRECISOS_WGS84_5 = format_08_BENI_PRECISOS_WGS84_5.readFeatures(json_08_BENI_PRECISOS_WGS84_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_08_BENI_PRECISOS_WGS84_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_BENI_PRECISOS_WGS84_5.addFeatures(features_08_BENI_PRECISOS_WGS84_5);
var lyr_08_BENI_PRECISOS_WGS84_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_BENI_PRECISOS_WGS84_5, 
                style: style_08_BENI_PRECISOS_WGS84_5,
                popuplayertitle: "08_BENI_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/08_BENI_PRECISOS_WGS84_5.png" /> 08_BENI_PRECISOS_WGS84'
            });
var format_07_SANTA_CRUZ_WGS84s_6 = new ol.format.GeoJSON();
var features_07_SANTA_CRUZ_WGS84s_6 = format_07_SANTA_CRUZ_WGS84s_6.readFeatures(json_07_SANTA_CRUZ_WGS84s_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_07_SANTA_CRUZ_WGS84s_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_SANTA_CRUZ_WGS84s_6.addFeatures(features_07_SANTA_CRUZ_WGS84s_6);
var lyr_07_SANTA_CRUZ_WGS84s_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_SANTA_CRUZ_WGS84s_6, 
                style: style_07_SANTA_CRUZ_WGS84s_6,
                popuplayertitle: "07_SANTA_CRUZ_WGS84s",
                interactive: true,
                title: '<img src="styles/legend/07_SANTA_CRUZ_WGS84s_6.png" /> 07_SANTA_CRUZ_WGS84s'
            });
var format_07_SANTA_CRUZ_PRECISOS_WGS84_7 = new ol.format.GeoJSON();
var features_07_SANTA_CRUZ_PRECISOS_WGS84_7 = format_07_SANTA_CRUZ_PRECISOS_WGS84_7.readFeatures(json_07_SANTA_CRUZ_PRECISOS_WGS84_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_07_SANTA_CRUZ_PRECISOS_WGS84_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_SANTA_CRUZ_PRECISOS_WGS84_7.addFeatures(features_07_SANTA_CRUZ_PRECISOS_WGS84_7);
var lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_SANTA_CRUZ_PRECISOS_WGS84_7, 
                style: style_07_SANTA_CRUZ_PRECISOS_WGS84_7,
                popuplayertitle: "07_SANTA_CRUZ_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/07_SANTA_CRUZ_PRECISOS_WGS84_7.png" /> 07_SANTA_CRUZ_PRECISOS_WGS84'
            });
var format_06_TARIJA_WGS84_8 = new ol.format.GeoJSON();
var features_06_TARIJA_WGS84_8 = format_06_TARIJA_WGS84_8.readFeatures(json_06_TARIJA_WGS84_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_06_TARIJA_WGS84_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_TARIJA_WGS84_8.addFeatures(features_06_TARIJA_WGS84_8);
var lyr_06_TARIJA_WGS84_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_TARIJA_WGS84_8, 
                style: style_06_TARIJA_WGS84_8,
                popuplayertitle: "06_TARIJA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/06_TARIJA_WGS84_8.png" /> 06_TARIJA_WGS84'
            });
var format_06_TARIJA_PRECISOS_WGS84_9 = new ol.format.GeoJSON();
var features_06_TARIJA_PRECISOS_WGS84_9 = format_06_TARIJA_PRECISOS_WGS84_9.readFeatures(json_06_TARIJA_PRECISOS_WGS84_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_06_TARIJA_PRECISOS_WGS84_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_TARIJA_PRECISOS_WGS84_9.addFeatures(features_06_TARIJA_PRECISOS_WGS84_9);
var lyr_06_TARIJA_PRECISOS_WGS84_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_TARIJA_PRECISOS_WGS84_9, 
                style: style_06_TARIJA_PRECISOS_WGS84_9,
                popuplayertitle: "06_TARIJA_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/06_TARIJA_PRECISOS_WGS84_9.png" /> 06_TARIJA_PRECISOS_WGS84'
            });
var format_05_POTOSI_WGS84_10 = new ol.format.GeoJSON();
var features_05_POTOSI_WGS84_10 = format_05_POTOSI_WGS84_10.readFeatures(json_05_POTOSI_WGS84_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_05_POTOSI_WGS84_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_POTOSI_WGS84_10.addFeatures(features_05_POTOSI_WGS84_10);
var lyr_05_POTOSI_WGS84_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_POTOSI_WGS84_10, 
                style: style_05_POTOSI_WGS84_10,
                popuplayertitle: "05_POTOSI_WGS84",
                interactive: true,
                title: '<img src="styles/legend/05_POTOSI_WGS84_10.png" /> 05_POTOSI_WGS84'
            });
var format_05_POTOSI_PRECISOS_WGS84_11 = new ol.format.GeoJSON();
var features_05_POTOSI_PRECISOS_WGS84_11 = format_05_POTOSI_PRECISOS_WGS84_11.readFeatures(json_05_POTOSI_PRECISOS_WGS84_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_05_POTOSI_PRECISOS_WGS84_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_POTOSI_PRECISOS_WGS84_11.addFeatures(features_05_POTOSI_PRECISOS_WGS84_11);
var lyr_05_POTOSI_PRECISOS_WGS84_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_POTOSI_PRECISOS_WGS84_11, 
                style: style_05_POTOSI_PRECISOS_WGS84_11,
                popuplayertitle: "05_POTOSI_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/05_POTOSI_PRECISOS_WGS84_11.png" /> 05_POTOSI_PRECISOS_WGS84'
            });
var format_04_ORURO_WGS84_12 = new ol.format.GeoJSON();
var features_04_ORURO_WGS84_12 = format_04_ORURO_WGS84_12.readFeatures(json_04_ORURO_WGS84_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_04_ORURO_WGS84_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ORURO_WGS84_12.addFeatures(features_04_ORURO_WGS84_12);
var lyr_04_ORURO_WGS84_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ORURO_WGS84_12, 
                style: style_04_ORURO_WGS84_12,
                popuplayertitle: "04_ORURO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/04_ORURO_WGS84_12.png" /> 04_ORURO_WGS84'
            });
var format_04_ORURO_PRECISOS_WGS84_13 = new ol.format.GeoJSON();
var features_04_ORURO_PRECISOS_WGS84_13 = format_04_ORURO_PRECISOS_WGS84_13.readFeatures(json_04_ORURO_PRECISOS_WGS84_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_04_ORURO_PRECISOS_WGS84_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ORURO_PRECISOS_WGS84_13.addFeatures(features_04_ORURO_PRECISOS_WGS84_13);
var lyr_04_ORURO_PRECISOS_WGS84_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ORURO_PRECISOS_WGS84_13, 
                style: style_04_ORURO_PRECISOS_WGS84_13,
                popuplayertitle: "04_ORURO_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/04_ORURO_PRECISOS_WGS84_13.png" /> 04_ORURO_PRECISOS_WGS84'
            });
var format_03_COCHABAMBA_WGS84_14 = new ol.format.GeoJSON();
var features_03_COCHABAMBA_WGS84_14 = format_03_COCHABAMBA_WGS84_14.readFeatures(json_03_COCHABAMBA_WGS84_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_03_COCHABAMBA_WGS84_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_COCHABAMBA_WGS84_14.addFeatures(features_03_COCHABAMBA_WGS84_14);
var lyr_03_COCHABAMBA_WGS84_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_COCHABAMBA_WGS84_14, 
                style: style_03_COCHABAMBA_WGS84_14,
                popuplayertitle: "03_COCHABAMBA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/03_COCHABAMBA_WGS84_14.png" /> 03_COCHABAMBA_WGS84'
            });
var format_03_COCHABAMBA_PRECISOS_WGS84_15 = new ol.format.GeoJSON();
var features_03_COCHABAMBA_PRECISOS_WGS84_15 = format_03_COCHABAMBA_PRECISOS_WGS84_15.readFeatures(json_03_COCHABAMBA_PRECISOS_WGS84_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_03_COCHABAMBA_PRECISOS_WGS84_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_COCHABAMBA_PRECISOS_WGS84_15.addFeatures(features_03_COCHABAMBA_PRECISOS_WGS84_15);
var lyr_03_COCHABAMBA_PRECISOS_WGS84_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_COCHABAMBA_PRECISOS_WGS84_15, 
                style: style_03_COCHABAMBA_PRECISOS_WGS84_15,
                popuplayertitle: "03_COCHABAMBA_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/03_COCHABAMBA_PRECISOS_WGS84_15.png" /> 03_COCHABAMBA_PRECISOS_WGS84'
            });
var format_02_LA_PAZ_WGS84_16 = new ol.format.GeoJSON();
var features_02_LA_PAZ_WGS84_16 = format_02_LA_PAZ_WGS84_16.readFeatures(json_02_LA_PAZ_WGS84_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_02_LA_PAZ_WGS84_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_LA_PAZ_WGS84_16.addFeatures(features_02_LA_PAZ_WGS84_16);
var lyr_02_LA_PAZ_WGS84_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_LA_PAZ_WGS84_16, 
                style: style_02_LA_PAZ_WGS84_16,
                popuplayertitle: "02_LA_PAZ_WGS84",
                interactive: true,
                title: '<img src="styles/legend/02_LA_PAZ_WGS84_16.png" /> 02_LA_PAZ_WGS84'
            });
var format_02_LA_PAZ_PRECISOS_WGS84_17 = new ol.format.GeoJSON();
var features_02_LA_PAZ_PRECISOS_WGS84_17 = format_02_LA_PAZ_PRECISOS_WGS84_17.readFeatures(json_02_LA_PAZ_PRECISOS_WGS84_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_02_LA_PAZ_PRECISOS_WGS84_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_LA_PAZ_PRECISOS_WGS84_17.addFeatures(features_02_LA_PAZ_PRECISOS_WGS84_17);
var lyr_02_LA_PAZ_PRECISOS_WGS84_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_LA_PAZ_PRECISOS_WGS84_17, 
                style: style_02_LA_PAZ_PRECISOS_WGS84_17,
                popuplayertitle: "02_LA_PAZ_PRECISOS_WGS84",
                interactive: true,
                title: '<img src="styles/legend/02_LA_PAZ_PRECISOS_WGS84_17.png" /> 02_LA_PAZ_PRECISOS_WGS84'
            });
var format_01_CHUQUISACA_WGS84_18 = new ol.format.GeoJSON();
var features_01_CHUQUISACA_WGS84_18 = format_01_CHUQUISACA_WGS84_18.readFeatures(json_01_CHUQUISACA_WGS84_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_01_CHUQUISACA_WGS84_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_CHUQUISACA_WGS84_18.addFeatures(features_01_CHUQUISACA_WGS84_18);
var lyr_01_CHUQUISACA_WGS84_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_CHUQUISACA_WGS84_18, 
                style: style_01_CHUQUISACA_WGS84_18,
                popuplayertitle: "01_CHUQUISACA_WGS84",
                interactive: true,
                title: '<img src="styles/legend/01_CHUQUISACA_WGS84_18.png" /> 01_CHUQUISACA_WGS84'
            });
var format_01_CHUQUISACA_PRECISOS_WGS84s_19 = new ol.format.GeoJSON();
var features_01_CHUQUISACA_PRECISOS_WGS84s_19 = format_01_CHUQUISACA_PRECISOS_WGS84s_19.readFeatures(json_01_CHUQUISACA_PRECISOS_WGS84s_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_01_CHUQUISACA_PRECISOS_WGS84s_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_CHUQUISACA_PRECISOS_WGS84s_19.addFeatures(features_01_CHUQUISACA_PRECISOS_WGS84s_19);
var lyr_01_CHUQUISACA_PRECISOS_WGS84s_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_CHUQUISACA_PRECISOS_WGS84s_19, 
                style: style_01_CHUQUISACA_PRECISOS_WGS84s_19,
                popuplayertitle: "01_CHUQUISACA_PRECISOS_WGS84s",
                interactive: true,
                title: '<img src="styles/legend/01_CHUQUISACA_PRECISOS_WGS84s_19.png" /> 01_CHUQUISACA_PRECISOS_WGS84s'
            });
var format_LMITEREFERENCIALDEMUNICIPIOS_20 = new ol.format.GeoJSON();
var features_LMITEREFERENCIALDEMUNICIPIOS_20 = format_LMITEREFERENCIALDEMUNICIPIOS_20.readFeatures(json_LMITEREFERENCIALDEMUNICIPIOS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEREFERENCIALDEMUNICIPIOS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEREFERENCIALDEMUNICIPIOS_20.addFeatures(features_LMITEREFERENCIALDEMUNICIPIOS_20);
var lyr_LMITEREFERENCIALDEMUNICIPIOS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEREFERENCIALDEMUNICIPIOS_20, 
                style: style_LMITEREFERENCIALDEMUNICIPIOS_20,
                popuplayertitle: "LÍMITE REFERENCIAL DE MUNICIPIOS",
                interactive: true,
                title: '<img src="styles/legend/LMITEREFERENCIALDEMUNICIPIOS_20.png" /> LÍMITE REFERENCIAL DE MUNICIPIOS'
            });
var format_TIOCURUCHIPAYA_21 = new ol.format.GeoJSON();
var features_TIOCURUCHIPAYA_21 = format_TIOCURUCHIPAYA_21.readFeatures(json_TIOCURUCHIPAYA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCURUCHIPAYA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCURUCHIPAYA_21.addFeatures(features_TIOCURUCHIPAYA_21);
var lyr_TIOCURUCHIPAYA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCURUCHIPAYA_21, 
                style: style_TIOCURUCHIPAYA_21,
                popuplayertitle: "TIOC URU CHIPAYA",
                interactive: true,
                title: '<img src="styles/legend/TIOCURUCHIPAYA_21.png" /> TIOC URU CHIPAYA'
            });
var format_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22 = new ol.format.GeoJSON();
var features_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22 = format_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.readFeatures(json_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.addFeatures(features_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22);
var lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22, 
                style: style_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22,
                popuplayertitle: "TIOC TERRITORIO INDIGENA MULTIETNICO - TIM",
                interactive: true,
                title: '<img src="styles/legend/TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.png" /> TIOC TERRITORIO INDIGENA MULTIETNICO - TIM'
            });
var format_TIOCSALINASDEGARCIMENDOZA_23 = new ol.format.GeoJSON();
var features_TIOCSALINASDEGARCIMENDOZA_23 = format_TIOCSALINASDEGARCIMENDOZA_23.readFeatures(json_TIOCSALINASDEGARCIMENDOZA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCSALINASDEGARCIMENDOZA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCSALINASDEGARCIMENDOZA_23.addFeatures(features_TIOCSALINASDEGARCIMENDOZA_23);
var lyr_TIOCSALINASDEGARCIMENDOZA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCSALINASDEGARCIMENDOZA_23, 
                style: style_TIOCSALINASDEGARCIMENDOZA_23,
                popuplayertitle: "TIOC SALINAS DE GARCI MENDOZA",
                interactive: true,
                title: '<img src="styles/legend/TIOCSALINASDEGARCIMENDOZA_23.png" /> TIOC SALINAS DE GARCI MENDOZA'
            });
var format_TIOCRAQAYPAMPA_24 = new ol.format.GeoJSON();
var features_TIOCRAQAYPAMPA_24 = format_TIOCRAQAYPAMPA_24.readFeatures(json_TIOCRAQAYPAMPA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCRAQAYPAMPA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCRAQAYPAMPA_24.addFeatures(features_TIOCRAQAYPAMPA_24);
var lyr_TIOCRAQAYPAMPA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCRAQAYPAMPA_24, 
                style: style_TIOCRAQAYPAMPA_24,
                popuplayertitle: "TIOC RAQAYPAMPA",
                interactive: true,
                title: '<img src="styles/legend/TIOCRAQAYPAMPA_24.png" /> TIOC RAQAYPAMPA'
            });
var format_TIOCKEREMBAIYAMBAE_25 = new ol.format.GeoJSON();
var features_TIOCKEREMBAIYAMBAE_25 = format_TIOCKEREMBAIYAMBAE_25.readFeatures(json_TIOCKEREMBAIYAMBAE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCKEREMBAIYAMBAE_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCKEREMBAIYAMBAE_25.addFeatures(features_TIOCKEREMBAIYAMBAE_25);
var lyr_TIOCKEREMBAIYAMBAE_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCKEREMBAIYAMBAE_25, 
                style: style_TIOCKEREMBAIYAMBAE_25,
                popuplayertitle: "TIOC KERE+MBA IYAMBAE",
                interactive: true,
                title: '<img src="styles/legend/TIOCKEREMBAIYAMBAE_25.png" /> TIOC KERE+MBA IYAMBAE'
            });
var format_TIOCJATUMAYLLUYURA_26 = new ol.format.GeoJSON();
var features_TIOCJATUMAYLLUYURA_26 = format_TIOCJATUMAYLLUYURA_26.readFeatures(json_TIOCJATUMAYLLUYURA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCJATUMAYLLUYURA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCJATUMAYLLUYURA_26.addFeatures(features_TIOCJATUMAYLLUYURA_26);
var lyr_TIOCJATUMAYLLUYURA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCJATUMAYLLUYURA_26, 
                style: style_TIOCJATUMAYLLUYURA_26,
                popuplayertitle: "TIOC JATUM AYLLU YURA",
                interactive: true,
                title: '<img src="styles/legend/TIOCJATUMAYLLUYURA_26.png" /> TIOC JATUM AYLLU YURA'
            });
var format_TIOCGUARANICHAQUEODEHUACAYA_27 = new ol.format.GeoJSON();
var features_TIOCGUARANICHAQUEODEHUACAYA_27 = format_TIOCGUARANICHAQUEODEHUACAYA_27.readFeatures(json_TIOCGUARANICHAQUEODEHUACAYA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCGUARANICHAQUEODEHUACAYA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCGUARANICHAQUEODEHUACAYA_27.addFeatures(features_TIOCGUARANICHAQUEODEHUACAYA_27);
var lyr_TIOCGUARANICHAQUEODEHUACAYA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCGUARANICHAQUEODEHUACAYA_27, 
                style: style_TIOCGUARANICHAQUEODEHUACAYA_27,
                popuplayertitle: "TIOC GUARANI CHAQUEÑO DE HUACAYA",
                interactive: true,
                title: '<img src="styles/legend/TIOCGUARANICHAQUEODEHUACAYA_27.png" /> TIOC GUARANI CHAQUEÑO DE HUACAYA'
            });
var format_TIOCCHARAGUAIYAMBAE_28 = new ol.format.GeoJSON();
var features_TIOCCHARAGUAIYAMBAE_28 = format_TIOCCHARAGUAIYAMBAE_28.readFeatures(json_TIOCCHARAGUAIYAMBAE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_TIOCCHARAGUAIYAMBAE_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIOCCHARAGUAIYAMBAE_28.addFeatures(features_TIOCCHARAGUAIYAMBAE_28);
var lyr_TIOCCHARAGUAIYAMBAE_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIOCCHARAGUAIYAMBAE_28, 
                style: style_TIOCCHARAGUAIYAMBAE_28,
                popuplayertitle: "TIOC CHARAGUA IYAMBAE",
                interactive: true,
                title: '<img src="styles/legend/TIOCCHARAGUAIYAMBAE_28.png" /> TIOC CHARAGUA IYAMBAE'
            });
var format_LMITEREFERENCIALDEPROVINCIAS_29 = new ol.format.GeoJSON();
var features_LMITEREFERENCIALDEPROVINCIAS_29 = format_LMITEREFERENCIALDEPROVINCIAS_29.readFeatures(json_LMITEREFERENCIALDEPROVINCIAS_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEREFERENCIALDEPROVINCIAS_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEREFERENCIALDEPROVINCIAS_29.addFeatures(features_LMITEREFERENCIALDEPROVINCIAS_29);
var lyr_LMITEREFERENCIALDEPROVINCIAS_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEREFERENCIALDEPROVINCIAS_29, 
                style: style_LMITEREFERENCIALDEPROVINCIAS_29,
                popuplayertitle: "LÍMITE REFERENCIAL DE PROVINCIAS",
                interactive: true,
                title: '<img src="styles/legend/LMITEREFERENCIALDEPROVINCIAS_29.png" /> LÍMITE REFERENCIAL DE PROVINCIAS'
            });
var format_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30 = new ol.format.GeoJSON();
var features_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30 = format_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.readFeatures(json_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.addFeatures(features_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30);
var lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30, 
                style: style_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30,
                popuplayertitle: "LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84",
                interactive: true,
                title: '<img src="styles/legend/LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.png" /> LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84'
            });
var format_LIMITE_INTERNACIONAL_31 = new ol.format.GeoJSON();
var features_LIMITE_INTERNACIONAL_31 = format_LIMITE_INTERNACIONAL_31.readFeatures(json_LIMITE_INTERNACIONAL_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITE_INTERNACIONAL_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_INTERNACIONAL_31.addFeatures(features_LIMITE_INTERNACIONAL_31);
var lyr_LIMITE_INTERNACIONAL_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE_INTERNACIONAL_31, 
                style: style_LIMITE_INTERNACIONAL_31,
                popuplayertitle: "LIMITE_INTERNACIONAL",
                interactive: true,
                title: '<img src="styles/legend/LIMITE_INTERNACIONAL_31.png" /> LIMITE_INTERNACIONAL'
            });
var format_LMITEINTRADEPARTAMENTALPRECISO_32 = new ol.format.GeoJSON();
var features_LMITEINTRADEPARTAMENTALPRECISO_32 = format_LMITEINTRADEPARTAMENTALPRECISO_32.readFeatures(json_LMITEINTRADEPARTAMENTALPRECISO_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEINTRADEPARTAMENTALPRECISO_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEINTRADEPARTAMENTALPRECISO_32.addFeatures(features_LMITEINTRADEPARTAMENTALPRECISO_32);
var lyr_LMITEINTRADEPARTAMENTALPRECISO_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEINTRADEPARTAMENTALPRECISO_32, 
                style: style_LMITEINTRADEPARTAMENTALPRECISO_32,
                popuplayertitle: "LÍMITE INTRADEPARTAMENTAL PRECISO",
                interactive: true,
                title: '<img src="styles/legend/LMITEINTRADEPARTAMENTALPRECISO_32.png" /> LÍMITE INTRADEPARTAMENTAL PRECISO'
            });
var format_LMITEINTERDEPARTAMENTALPRECISO_33 = new ol.format.GeoJSON();
var features_LMITEINTERDEPARTAMENTALPRECISO_33 = format_LMITEINTERDEPARTAMENTALPRECISO_33.readFeatures(json_LMITEINTERDEPARTAMENTALPRECISO_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LMITEINTERDEPARTAMENTALPRECISO_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEINTERDEPARTAMENTALPRECISO_33.addFeatures(features_LMITEINTERDEPARTAMENTALPRECISO_33);
var lyr_LMITEINTERDEPARTAMENTALPRECISO_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMITEINTERDEPARTAMENTALPRECISO_33, 
                style: style_LMITEINTERDEPARTAMENTALPRECISO_33,
                popuplayertitle: "LÍMITE INTERDEPARTAMENTAL PRECISO",
                interactive: true,
                title: '<img src="styles/legend/LMITEINTERDEPARTAMENTALPRECISO_33.png" /> LÍMITE INTERDEPARTAMENTAL PRECISO'
            });
var group_CLASIFICACINDELOSLMITESPRECISOS = new ol.layer.Group({
                                layers: [lyr_LMITEINTRADEPARTAMENTALPRECISO_32,lyr_LMITEINTERDEPARTAMENTALPRECISO_33,],
                                fold: "open",
                                title: "CLASIFICACIÓN DE LOS LÍMITES PRECISOS"});
var group_TERRITORIOSINDIGENAORIGINARIOCAMPESINOS = new ol.layer.Group({
                                layers: [lyr_TIOCURUCHIPAYA_21,lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22,lyr_TIOCSALINASDEGARCIMENDOZA_23,lyr_TIOCRAQAYPAMPA_24,lyr_TIOCKEREMBAIYAMBAE_25,lyr_TIOCJATUMAYLLUYURA_26,lyr_TIOCGUARANICHAQUEODEHUACAYA_27,lyr_TIOCCHARAGUAIYAMBAE_28,],
                                fold: "open",
                                title: "TERRITORIOS INDIGENA ORIGINARIO CAMPESINOS"});
var group_CLSIFICACIONPORDEPARTAMENTO = new ol.layer.Group({
                                layers: [lyr_09_PANDO_WGS84_2,lyr_09_PANDO_PRECISO_WGS84_3,lyr_08_BENI_WGS84_4,lyr_08_BENI_PRECISOS_WGS84_5,lyr_07_SANTA_CRUZ_WGS84s_6,lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7,lyr_06_TARIJA_WGS84_8,lyr_06_TARIJA_PRECISOS_WGS84_9,lyr_05_POTOSI_WGS84_10,lyr_05_POTOSI_PRECISOS_WGS84_11,lyr_04_ORURO_WGS84_12,lyr_04_ORURO_PRECISOS_WGS84_13,lyr_03_COCHABAMBA_WGS84_14,lyr_03_COCHABAMBA_PRECISOS_WGS84_15,lyr_02_LA_PAZ_WGS84_16,lyr_02_LA_PAZ_PRECISOS_WGS84_17,lyr_01_CHUQUISACA_WGS84_18,lyr_01_CHUQUISACA_PRECISOS_WGS84s_19,],
                                fold: "open",
                                title: "CLSIFICACION POR DEPARTAMENTO"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_09_PANDO_WGS84_2.setVisible(true);lyr_09_PANDO_PRECISO_WGS84_3.setVisible(true);lyr_08_BENI_WGS84_4.setVisible(true);lyr_08_BENI_PRECISOS_WGS84_5.setVisible(true);lyr_07_SANTA_CRUZ_WGS84s_6.setVisible(true);lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7.setVisible(true);lyr_06_TARIJA_WGS84_8.setVisible(true);lyr_06_TARIJA_PRECISOS_WGS84_9.setVisible(true);lyr_05_POTOSI_WGS84_10.setVisible(true);lyr_05_POTOSI_PRECISOS_WGS84_11.setVisible(true);lyr_04_ORURO_WGS84_12.setVisible(true);lyr_04_ORURO_PRECISOS_WGS84_13.setVisible(true);lyr_03_COCHABAMBA_WGS84_14.setVisible(true);lyr_03_COCHABAMBA_PRECISOS_WGS84_15.setVisible(true);lyr_02_LA_PAZ_WGS84_16.setVisible(true);lyr_02_LA_PAZ_PRECISOS_WGS84_17.setVisible(true);lyr_01_CHUQUISACA_WGS84_18.setVisible(true);lyr_01_CHUQUISACA_PRECISOS_WGS84s_19.setVisible(true);lyr_LMITEREFERENCIALDEMUNICIPIOS_20.setVisible(true);lyr_TIOCURUCHIPAYA_21.setVisible(true);lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.setVisible(true);lyr_TIOCSALINASDEGARCIMENDOZA_23.setVisible(true);lyr_TIOCRAQAYPAMPA_24.setVisible(true);lyr_TIOCKEREMBAIYAMBAE_25.setVisible(true);lyr_TIOCJATUMAYLLUYURA_26.setVisible(true);lyr_TIOCGUARANICHAQUEODEHUACAYA_27.setVisible(true);lyr_TIOCCHARAGUAIYAMBAE_28.setVisible(true);lyr_LMITEREFERENCIALDEPROVINCIAS_29.setVisible(true);lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.setVisible(true);lyr_LIMITE_INTERNACIONAL_31.setVisible(true);lyr_LMITEINTRADEPARTAMENTALPRECISO_32.setVisible(true);lyr_LMITEINTERDEPARTAMENTALPRECISO_33.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRISatellite_1,group_CLSIFICACIONPORDEPARTAMENTO,lyr_LMITEREFERENCIALDEMUNICIPIOS_20,group_TERRITORIOSINDIGENAORIGINARIOCAMPESINOS,lyr_LMITEREFERENCIALDEPROVINCIAS_29,lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30,lyr_LIMITE_INTERNACIONAL_31,group_CLASIFICACINDELOSLMITESPRECISOS];
lyr_09_PANDO_WGS84_2.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_09_PANDO_PRECISO_WGS84_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_08_BENI_WGS84_4.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_08_BENI_PRECISOS_WGS84_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_07_SANTA_CRUZ_WGS84s_6.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_06_TARIJA_WGS84_8.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_06_TARIJA_PRECISOS_WGS84_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_05_POTOSI_WGS84_10.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_05_POTOSI_PRECISOS_WGS84_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_04_ORURO_WGS84_12.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_04_ORURO_PRECISOS_WGS84_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_03_COCHABAMBA_WGS84_14.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_03_COCHABAMBA_PRECISOS_WGS84_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_02_LA_PAZ_WGS84_16.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_02_LA_PAZ_PRECISOS_WGS84_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_01_CHUQUISACA_WGS84_18.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_01_CHUQUISACA_PRECISOS_WGS84s_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_20.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCURUCHIPAYA_21.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCSALINASDEGARCIMENDOZA_23.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCRAQAYPAMPA_24.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCKEREMBAIYAMBAE_25.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCJATUMAYLLUYURA_26.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCGUARANICHAQUEODEHUACAYA_27.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_TIOCCHARAGUAIYAMBAE_28.set('fieldAliases', {'C_UT': 'C_UT', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'C_SIOT': 'C_SIOT', 'MUN_TIOC': 'MUN_TIOC', });
lyr_LMITEREFERENCIALDEPROVINCIAS_29.set('fieldAliases', {'FECHA_LEY': 'FECHA_LEY', 'BL_COMLI_M': 'BL_COMLI_M', 'PROVINCIA': 'PROVINCIA', 'ID_UT_P': 'ID_UT_P', });
lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.set('fieldAliases', {'ID_UT_D': 'ID_UT_D', 'DEPARTAMEN': 'DEPARTAMEN', 'B_LEGAL_D': 'B_LEGAL_D', 'SUP_KM2': 'SUP_KM2', });
lyr_LIMITE_INTERNACIONAL_31.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'B_LEGAL_D': 'B_LEGAL_D', 'SUP_KM2': 'SUP_KM2', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', 'ESTADO': 'ESTADO', });
lyr_09_PANDO_WGS84_2.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_09_PANDO_PRECISO_WGS84_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_08_BENI_WGS84_4.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_08_BENI_PRECISOS_WGS84_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_07_SANTA_CRUZ_WGS84s_6.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_06_TARIJA_WGS84_8.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_06_TARIJA_PRECISOS_WGS84_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_05_POTOSI_WGS84_10.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_05_POTOSI_PRECISOS_WGS84_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_04_ORURO_WGS84_12.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_04_ORURO_PRECISOS_WGS84_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_03_COCHABAMBA_WGS84_14.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_03_COCHABAMBA_PRECISOS_WGS84_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_02_LA_PAZ_WGS84_16.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_02_LA_PAZ_PRECISOS_WGS84_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_01_CHUQUISACA_WGS84_18.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_01_CHUQUISACA_PRECISOS_WGS84s_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_20.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCURUCHIPAYA_21.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCSALINASDEGARCIMENDOZA_23.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCRAQAYPAMPA_24.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCKEREMBAIYAMBAE_25.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCJATUMAYLLUYURA_26.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCGUARANICHAQUEODEHUACAYA_27.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_TIOCCHARAGUAIYAMBAE_28.set('fieldImages', {'C_UT': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'C_SIOT': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_LMITEREFERENCIALDEPROVINCIAS_29.set('fieldImages', {'FECHA_LEY': 'DateTime', 'BL_COMLI_M': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ID_UT_P': 'TextEdit', });
lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.set('fieldImages', {'ID_UT_D': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'B_LEGAL_D': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_LIMITE_INTERNACIONAL_31.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'B_LEGAL_D': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_09_PANDO_WGS84_2.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_09_PANDO_PRECISO_WGS84_3.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_08_BENI_WGS84_4.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_08_BENI_PRECISOS_WGS84_5.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_07_SANTA_CRUZ_WGS84s_6.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_07_SANTA_CRUZ_PRECISOS_WGS84_7.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_06_TARIJA_WGS84_8.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_06_TARIJA_PRECISOS_WGS84_9.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_05_POTOSI_WGS84_10.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_05_POTOSI_PRECISOS_WGS84_11.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_04_ORURO_WGS84_12.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_04_ORURO_PRECISOS_WGS84_13.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_03_COCHABAMBA_WGS84_14.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_03_COCHABAMBA_PRECISOS_WGS84_15.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_02_LA_PAZ_WGS84_16.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_02_LA_PAZ_PRECISOS_WGS84_17.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_01_CHUQUISACA_WGS84_18.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_01_CHUQUISACA_PRECISOS_WGS84s_19.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_LMITEREFERENCIALDEMUNICIPIOS_20.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCURUCHIPAYA_21.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCTERRITORIOINDIGENAMULTIETNICOTIM_22.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCSALINASDEGARCIMENDOZA_23.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCRAQAYPAMPA_24.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCKEREMBAIYAMBAE_25.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCJATUMAYLLUYURA_26.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCGUARANICHAQUEODEHUACAYA_27.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_TIOCCHARAGUAIYAMBAE_28.set('fieldLabels', {'C_UT': 'no label', 'N°_LEY': 'no label', 'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'C_SIOT': 'no label', 'MUN_TIOC': 'no label', });
lyr_LMITEREFERENCIALDEPROVINCIAS_29.set('fieldLabels', {'FECHA_LEY': 'no label', 'BL_COMLI_M': 'no label', 'PROVINCIA': 'no label', 'ID_UT_P': 'no label', });
lyr_LIMITE_INTERDEPARTAMENTAL_IMPRECISO_WGS84_30.set('fieldLabels', {'ID_UT_D': 'no label', 'DEPARTAMEN': 'no label', 'B_LEGAL_D': 'no label', 'SUP_KM2': 'no label', });
lyr_LIMITE_INTERNACIONAL_31.set('fieldLabels', {'DEPARTAMEN': 'no label', 'B_LEGAL_D': 'no label', 'SUP_KM2': 'no label', });
lyr_LMITEINTRADEPARTAMENTALPRECISO_32.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_33.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'no label', 'UT_B_': 'no label', 'LEY_DE_EST': 'no label', 'ESTADO': 'no label', });
lyr_LMITEINTERDEPARTAMENTALPRECISO_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
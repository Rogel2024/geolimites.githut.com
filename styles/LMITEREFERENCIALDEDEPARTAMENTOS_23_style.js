var size = 0;
var placement = 'point';

var style_LMITEREFERENCIALDEDEPARTAMENTOS_23 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("DEPARTAM") !== null) {
        labelText = String(feature.get("DEPARTAM"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,233,103,1.0)', lineDash: [6.536,3.268], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(243,166,178,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

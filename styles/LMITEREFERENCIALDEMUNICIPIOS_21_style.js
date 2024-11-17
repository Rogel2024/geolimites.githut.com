var size = 0;
var placement = 'point';

var style_LMITEREFERENCIALDEMUNICIPIOS_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#f8f8f8";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("MUN_TIOC") !== null && resolution > 0 && resolution < 140) {
        labelText = String(feature.get("MUN_TIOC"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,120,204,1.0)', lineDash: [2.28,1.14], lineCap: 'butt', lineJoin: 'miter', width: 1.14}),fill: new ol.style.Fill({color: 'rgba(229,182,54,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

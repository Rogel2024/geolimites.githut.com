var size = 0;
var placement = 'point';

var style_LMITEREFERENCIALDEPROVINCIAS_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#ef15d9";
    var bufferColor = "#f1f1f1";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PROVINCIA_") !== null && resolution > 0 && resolution < 252) {
        labelText = String(feature.get("PROVINCIA_"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(186,26,171,1.0)', lineDash: [3.8,1.9], lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(145,82,45,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

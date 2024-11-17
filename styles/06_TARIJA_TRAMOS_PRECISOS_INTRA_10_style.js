var size = 0;
var placement = 'point';
function categories_06_TARIJA_TRAMOS_PRECISOS_INTRA_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'UT_A - El Puente / UT_B - San Lorenzo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - El Puente / UT_B - Yunchará':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Entre Ríos / UT_B - Padcaya':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - San Lorenzo / UT_B - Entre Ríos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Tarija / UT_B - Entre Ríos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Tarija / UT_B - Yunchará':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Uriondo / UT_B - Entre Ríos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Uriondo / UT_B - Padcaya':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Yunchará / UT_B - Padcaya':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UT_A - Yunchará / UT_B - Uriondo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,91,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_06_TARIJA_TRAMOS_PRECISOS_INTRA_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("COLINDANTE");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("COLINDANTE") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("COLINDANTE"));
    }
    
var style = categories_06_TARIJA_TRAMOS_PRECISOS_INTRA_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

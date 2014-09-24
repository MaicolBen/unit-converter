var CONV_MASS = 0;
var CONV_AREA = 1;
var CONV_SPEED = 2;
var CONV_LENGTH = 3;
var CONV_VOLUME = 4;


var converters = [ {
    id: CONV_MASS,
    name: 'Mass',
    factors: [{
        id : 'kg',
        name: 'Kilograms (kg)',
        conValue: 1
    }, {
        id : 'g',
        name: 'Grams (g)',
        conValue: 1000
    }, {
        id : 'oz',
        name: 'Ounces (oz)',
        conValue: 35.273962
    }, {
        id : 'lb',
        name: 'Pounds (lb)',
        conValue: 2.2046227
    }, ]
}, {
    id: CONV_AREA,
    name: 'Area',
    factors: [{
        id : 'm2',
        name: 'Square meter (m^2)',
        conValue: 1
    }, {
        id : 'ft2',
        name: 'Square foot (ft^2)',
        conValue: 10.7639
    }, ]
}, {
    id: CONV_SPEED,
    name: 'Speed',
    factors: [{
        id : 'kmh',
        name: 'Km per hour (km/h)',
        conValue: 1
    }, {
        id : 'mph',
        name: 'Miles per hour (mph)',
        conValue: 0.621371
    }, ]
}, {
    id: CONV_LENGTH,
    name: 'Length',
    factors: [{
        id : 'm',
        name: 'Meters (m)',
        conValue: 1
    }, {
        id : 'cm',
        name: 'Centimeters (cm)',
        conValue: 100
    }, {
        id : 'yd',
        name: 'Yards (yd)',
        conValue: 1.0936133
    }, {
        id : 'ft',
        name: 'Feet (ft)',
        conValue: 3.2808399
    }, {
        id : 'in',
        name: 'Inches (in)',
        conValue: 39.37
    }, {
        id : 'mi',
        name: 'Land miles (mi)',
        conValue: 0.00062137119
    }, ]
}, {
    id: CONV_VOLUME,
    name: 'Volume',
    factors: [{
        id : 'l',
        name: 'Liters (l)',
        conValue: 1
    }, {
        id : 'usgal',
        name: 'US Gallons (gal)',
        conValue: 0.26417205
    }, {
        id : 'm3',
        name: 'Cubic meters (m^3)',
        conValue: 0.001
    }, {
        id : 'ft3',
        name: 'Cubic feet (ft^3)',
        conValue: 0.03532
    } ]
} ];

function convert(type, factorFrom, factorTo, value){
    var converter = getConverter(type);
    var factorFrom = getFactor(converter, factorFrom);
    var factorTo = getFactor(converter, factorTo);
    if (factorTo.conValue == 1)
        return  value / factorFrom.conValue;
    else {
        return  (value * factorTo.conValue) / factorFrom.conValue;
    }
}

function getConverter(type){
    for (var i = converters.length - 1; i >= 0; i--) {
        if(converters[i].id === type){
            return converters[i];
        }
    };
    throw new Error("Doesn't exist type of convert");
}

function getFactor(converter, factorId){
    for (var i = converter.factors.length - 1; i >= 0; i--) {
        if(converter.factors[i].id === factorId){
            return converter.factors[i];
        }
    };
    throw new Error("Doesn't exist type of factor in convert type");
}
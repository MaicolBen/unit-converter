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
        label: 'Kilograms (kg)',
        conversion_value: 1
    }, {
        id : 'g',
        label: 'Grams (g)',
        conversion_value: 1000
    }, {
        id : 'oz',
        label: 'Ounces (oz)',
        conversion_value: 35.2739619
    }, {
        id : 'lb',
        label: 'Pounds (lb)',
        conversion_value: 2.20462262
    }, ]
}, {
    id: CONV_AREA,
    name: 'Area',
    factors: [{
        id : 'm2',
        label: 'Square meter (m^2)',
        conversion_value: 1
    }, {
        id : 'ft2',
        label: 'Square foot (ft^2)',
        conversion_value: 10.76391
    }, ]
}, {
    id: CONV_SPEED,
    name: 'Speed',
    factors: [{
        id : 'kmh',
        label: 'Kilometers per hour (km/h)',
        conversion_value: 1
    }, {
        id : 'mph',
        label: 'Miles per hour (mph)',
        conversion_value: 0.621371
    }, ]
}, {
    id: CONV_LENGTH,
    name: 'Length',
    factors: [{
        id : 'm',
        label: 'Meters (m)',
        conversion_value: 1
    }, {
        id : 'cm',
        label: 'Centimeters (cm)',
        conversion_value: 100
    }, {
        id : 'ft',
        label: 'Feet (ft)',
        conversion_value: 3.2808399
    }, {
        id : 'in',
        label: 'Inches (in)',
        conversion_value: 39.37
    }, {
        id : 'yd',
        label: 'Yards (yd)',
        conversion_value: 1.0936133
    }, {
        id : 'mi',
        label: 'Land miles (mi)',
        conversion_value: 0.000621371192
    }, ]
}, {
    id: CONV_VOLUME,
    name: 'Volume',
    factors: [{
        id : 'l',
        label: 'Liters (l)',
        conversion_value: 1
    }, {
        id : 'm3',
        label: 'Cubic meters (m^3)',
        conversion_value: 0.001
    }, {
        id : 'ft3',
        label: 'Cubic feet (ft^3)',
        conversion_value: 0.035315
    }, {
        id : 'usgal',
        label: 'US Gallons (gal)',
        conversion_value: 0.264172052
    }, {
        id : 'floz',
        label: 'US Fluid ounces (fl oz)',
        conversion_value: 33.8140227
    }, {
        id : 'usq',
        label: 'US Quarts',
        conversion_value: 1.05668821
    }, {
        id : 'usp',
        label: 'US Pints (pt)',
        conversion_value: 2.11337642
    }, {
        id : ukq'',
        label: 'UK Quarts',
        conversion_value: 0.87987663
    }, {
        id : 'uspt',
        label: 'UK Pints (pt)',
        conversion_value: 1.75975326
    }, {
        id : 'ukgal',
        label: 'UK Gallons (gal)',
        conversion_value: 0.219969157
    }, {
        id : 'ukfloz',
        label: 'UK Fluid ounces (fl oz)',
        conversion_value: 35.195009
    }, ]
} ];

function convert(type, factor_from, factor_to, value){
    var converter = getConverter(type);
    var factor_from = getFactor(converter,factor_from);
    var factor_to = getFactor(converter,factor_to);
    if (factor_from.conversion_value == 1)
        return  value / factor_to.conversion_value
    else {
        return  (value * factor_from.conversion_value) / factor_to.conversion_value
    }
}

function getConverter(type){
    for (var i = converters.length - 1; i >= 0; i--) {
        if(converters[i].id === type){
            return converters[i];
        }
    };
    throw new Error("Doesn't Exist type of convert");
}

function getFactor(converter, factor_id){
    for (var i = converter.factors.length - 1; i >= 0; i--) {
        if(converter.factors[i].id === factor_id){
            return converter.factors[i];
        }
    };
    throw new Error("Doesn't Exist type of factor in convert type");
}
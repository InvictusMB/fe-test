const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

// Validates true
const carObj = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 200000,
    extras: [
        '2001 Special Edition'
    ],
};

// Validates false
const carObjF = {
    brand: 'BMW',
    type: '335',
    milage: '100000',
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};
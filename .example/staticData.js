import {types} from 'react-native-form-builder';

const typesOfHomes = [
    {value: 1, label: 'Casa'},
    {value: 2, label: 'Rancho'},
    {value: 3, label: 'Casilla'},
    {value: 4, label: 'Departamento'},
    {value: 5, label: 'Pieza en inquilinato'},
    {value: 6, label: 'Pieza en hotel familiar o pensión'},
    {value: 7, label: 'Local no construido para habitación'},
    {value: 8, label: 'Vievienda móvil'},
    {value: 9, label: 'Persona/s viviendo en la calle'}
];

const exampleQuestions = [{
    id: 1,
    name: 'root',
    validator: null,
    rows: [{
        id: 1,
        questions: [
            {
                col: 6,
                name: 'título',
                noValidate: true,
                text: 'Este es un título.',
                type: types.TITLE
            }
        ]
    }, {
        id: 2,
        questions: [
            {
                col: 6,
                name: 'yesNo',
                text: 'Yes No question.',
                type: types.YES_NO
            }
        ]
    }, {
        id: 3,
        questions: [
            {
                col: 6,
                name: 'label',
                text: 'Es un label',
                type: types.LABEL
            }
        ]
    }, {
        id: 4,
        questions: [
            {
                name: 'kindOfHome',
                type: types.RADIO,
                text: 'Tipo de vivienda particular',
                number: 1,
                options: [
                    {value: 1, label: 'Casa'},
                    {value: 2, label: 'Rancho'},
                    {value: 3, label: 'Casilla'},
                    {value: 4, label: 'Departamento'},
                    {value: 5, label: 'Pieza en inquilinato'},
                    {value: 6, label: 'Pieza en hotel familiar o pensión'},
                    {value: 7, label: 'Local no construido para habitación'},
                    {value: 8, label: 'Vievienda móvil'},
                    {value: 9, label: 'Persona/s viviendo en la calle'}
                ]
            }]
    }, {
        id: 5,
        questions: [
            {
                col: 2,
                number: 2,
                name: 'residueTypeGeneratedSolid',
                text: 'Sólidos',
                type: types.CHECKBOX
            },
            {
                col: 2,
                number: null,
                name: 'residueTypeGeneratedLiquid',
                text: 'Líquidos',
                type: types.CHECKBOX
            }
        ]
    }, {
        id: 6,
        questions: [
            {
                col: 6,
                number: 14,
                name: 'select',
                options: typesOfHomes,
                text: 'Tipo de casas',
                type: types.SELECT
            }
        ]
    }, {
        id: 7,
        questions: [
            {
                col: 6,
                number: 15,
                name: 'text',
                text: 'Input text',
                type: types.TEXT
            }
        ]
    }, {
        id: 8,
        questions: [
            {
                col: 6,
                max: 500,
                min: 1,
                maxLength: 3,
                number: 555,
                name: 'number',
                text: 'Input Number',
                type: types.NUMBER
            }
        ]
    }]
}];

export default exampleQuestions;

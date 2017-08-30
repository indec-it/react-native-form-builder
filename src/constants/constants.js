// eslint-disable-next-line import/prefer-default-export
const types = {
    CHECKBOX: 'checkbox',
    DATE: 'date',
    EMAIL: 'email',
    INT: 'int',
    INFO_TEXT_BOX: 'infoTextBox',
    INT_ALLOW_ZERO: 'intAllowZero',
    LABEL: 'label',
    LINE: 'line',
    MASKED_DATE: 'maskedDate',
    MONEY: 'money',
    NUMBER: 'number',
    NUMBER_FORMAT: 'numberFormat',
    NUMBER_WITHOUT_LABEL: 'numberWithoutLabel',
    NUMBER_WITH_IGNORE: 'numberWithIgnore',
    PERCENTAGE: 'percentage',
    QUESTION_WITHOUT_ANSWER: 'questionWithoutAnswer',
    RADIO: 'radio',
    RADIO_TABLE: 'radioTable',
    RADIO_SECTIONS: 'radioSections',
    SELECT: 'select',
    SELECT_DISABLED: 'selectDisabled',
    SELECT_MULTIPLE: 'selectMultiple',
    SELECT_SPECIAL_OPTIONS: 'selectSpecialOptions',
    SPACE: 'space',
    SUM: 'sum',
    TEXT: 'text',
    TEXT_OR_NO_ANSWER: 'textNoAnswer',
    TEXT_WITH_IGNORE: 'textWithIgnore',
    TEXT_AREA: 'textarea',
    TITLE: 'title',
    YEAR: 'Year',
    YES_NO: 'YesNoQuestion'
};

// Types Parent Value is a temporal enum in this package.
const typesParentValue = {
    EQUALS: 'equals',
    NOT_EQUALS: 'notEquals',
    GREATER_THAN: 'greaterThan',
    GREATER_OR_EQUAL_THAN: 'greaterOrEqualThan',
    LESS_THAN: 'lessThan',
    LESS_OR_EQUAL_THAN: 'lessOrEqualThan',
    VOID: 'void'
};

export {
    types,
    typesParentValue
};

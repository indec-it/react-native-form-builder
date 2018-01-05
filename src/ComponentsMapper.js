import {mapKeys} from 'lodash';

import preMadeComponents from './components';

export default class ComponentsMapper {
    constructor() {
        this.components = {};
    }

    registerComponent(type, component) {
        if (component) {
            this.components[type] = component;
            return;
        }
        const preMadeComponent = mapKeys(preMadeComponents, (value, key) => type === key);
        this.components[type] = preMadeComponent;
    }

    getComponent(key) {
        return this.components[key];
    }
}

import {forEach} from 'lodash';

import * as builtInComponents from './components';

export default class ComponentsRegistry {
    constructor() {
        this.components = {};
        forEach(builtInComponents, component => this.add(component));
    }

    add(component, key = null) {
        this.components[key || component.displayName] = component;
    }

    get(key) {
        return this.components[key];
    }
}

import {forEach} from 'lodash';

import * as builtInComponents from './components';

/**
 * Builds a registry of components to quick and dynamic access.
 */
export default class ComponentsRegistry {
    constructor() {
        this.components = {};
        forEach(builtInComponents, component => this.add(component));
    }

    /**
     * Add a component to the registry.
     * @param component a component to add to the registry.
     * @param {string} key a key to lookup the component in the registry.
     * component.displayName is used if a key is not given.
     */
    add(component, key = null) {
        const name = key || component.displayName;
        if (!name) {
            throw new Error(
                'ComponentsRegistry: displayName is required to support minification if a key is not given.'
            );
        }
        this.components[name] = component;
    }

    /**
     * Returns a component from the registry.
     * @param {string} key a key to look up for the component.
     * @returns {*} Returns the found component or `undefined`.
     */
    get(key) {
        return this.components[key];
    }
}

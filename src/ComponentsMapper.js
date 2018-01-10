import preMadeComponents from './components';

export default class ComponentsMapper {
    constructor() {
        this.components = preMadeComponents;
    }

    registerComponent(type, component) {
        this.components[type] = component;
    }

    getComponent(key) {
        return this.components[key];
    }
}

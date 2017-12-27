export default class ComponentsMapper {
    constructor() {
        this.components = {};
    }

    registerComponent(type, component) {
        this.components[type] = component;
    }

    getComponent(key) {
        return this.components[key];
    }
}

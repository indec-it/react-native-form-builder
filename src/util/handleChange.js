export default (name, value, change, parser, oldValue) => {
    if (value !== oldValue) {
        change({
            [name]: parser ? parser(value) : value
        });
    }
}

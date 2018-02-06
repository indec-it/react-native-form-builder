export default (name, value, change, parser) => change({
    [name]: parser ? parser(value) : value
});

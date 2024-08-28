var config = {
    start: function () { return console.log("App has started"); },
    update: function () { return console.log("App has updated"); }
};
// we freeze the object to prevent new properties being added or existing properties being removed
Object.freeze(config);
config.start();
config.update();
// config.name = "Robert"; we try to add new key
console.log(config);

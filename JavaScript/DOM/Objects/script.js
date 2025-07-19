var bellBoy1 = {
    name: "Timmy",
    age: 20,
    hasWorkPermint: true,
    languages: ["English", "Hindi"]
}

document.write("Hello, my name is " + bellBoy1.name + " age is " + bellBoy1.age);

// use comsturtor

function bellBoy(name, age, hasPermit, lang) {
    this.name = name;
    this.age = age;
    this.hasWorkPermint = this.hasWorkPermint;
    this.lang = lang;
    this.clean = function () {
        alert('cleaning......');
    }
}

var bellBoy2 = new bellBoy("xyz", 20, true, ["hindi", "englsih"]);

console.logbellBoy2;
bellBoy2.clean();
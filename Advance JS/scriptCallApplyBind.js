const person1 = {
    firstname: "John",
    lastname: "Doe",
    fullname: function(prefix, suffix) {
        let fullName = this.firstname + " " + this.lastname;
        if (prefix) fullName = prefix + " " + fullName;
        if (suffix) fullName = fullName + " " + suffix;
        console.log(fullName);
    }
};

const person2 = {
    firstname: "Nilay",
    lastname: "Doshi"
};

person1.fullname.call(person2, "Mr.", "SDE3"); 

// Using apply
person1.fullname.apply(person2, ["Master", "SDE2"]); 

// Using bind
const fullName = person1.fullname.bind(person2, "Hello", "SDE1");
fullName(); 
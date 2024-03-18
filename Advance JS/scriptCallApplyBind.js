const person1 = {
    firstname: "Ridham",
    lastname: "Patel",
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
//Call
person1.fullname.call(person2, "Mr.", "SDE3"); 

// Apply
person1.fullname.apply(person2, ["Master", "SDE2"]); 

// Bind
const fullName = person1.fullname.bind(person2, "Hello", "SDE1");

fullName(); 

//Output

// Call - Mr. Nilay Doshi SDE3
// Apply - Master Nilay Doshi SDE2
// Bind - Hello Nilay Doshi SDE1
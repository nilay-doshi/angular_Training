var PersonInfo = {
    firstName: "Nilay",
    lastName: "Doshi",
    age: 30,
    address: {
        city: "Ahmedabad",
        pincode: "382415",
        street: "Ambicanagar",
    },
    contacts: [],
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    getFullAddress: function () {
        return "".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.pincode);
    },
};
console.log("Full Name:", PersonInfo.getFullName());
console.log("Full Address:", PersonInfo.getFullAddress());
console.log("Contacts:", PersonInfo.contacts);

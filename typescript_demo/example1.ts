interface Address {
  city: string;
  pincode: string;
  street: string;
}

interface PersonInfo {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  contacts?: string[];
  getFullName: () => string;
  getFullAddress: () => string;
}

const PersonInfo: PersonInfo = {
  firstName: "Nilay",
  lastName: "Doshi",
  age: 30,
  address: {
    city: "Ahmedabad",
    pincode: "382415",
    street: "Ambicanagar",
  },
  contacts: ["nilaydoshi@bacancy.com", "+91-9033062657"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullAddress: function () {
    return `${this.address.street}, ${this.address.city}, ${this.address.pincode}`;
  },
};

console.log("Full Name:", PersonInfo.getFullName());
console.log("Full Address:", PersonInfo.getFullAddress());
console.log("Contacts:", PersonInfo.contacts);

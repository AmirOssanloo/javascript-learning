// Delayed instantiation of an object
// Constant interface to gain access to the object
// Only one instance of the object is created

var Singleton = (function() {
  let instance;

  function init() {
    let members = [];

    function generateId() {
      return Math.round(Math.random() * 100);
    }

    function addMemberByName(name) {
      members.push(name);
    };

    function removeMemberByName(name) {
      members = members.filter(member => member !== name);
    };

    function printMembers() {
      console.log(members);
    };

    return {
      addMemberByName,
      removeMemberByName,
      printMembers
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
})();

const singA = Singleton.getInstance();
const singB = Singleton.getInstance();

// Add members
singA.addMemberByName('Jerry');
singA.addMemberByName('Larry');
singA.addMemberByName('Ferry');

console.log('Print members for A:');
singA.printMembers();
console.log('Print members for B:');
singB.printMembers();

// Remove members
singB.removeMemberByName('Larry');

console.log('Print members for A:');
singA.printMembers();
console.log('Print members for B:');
singB.printMembers();
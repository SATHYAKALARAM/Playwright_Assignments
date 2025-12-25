function getUserData(callback) {
  // Simulate fetching data
  setTimeout(() => {
    const user = {
      name: "Sathya",
      age: 25
    };
    // Call the callback with user data
    callback(user);
  }, 3000);
}

// Calling the function with a callback
getUserData(function(user) {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
});
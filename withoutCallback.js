const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  setTimeout(function () {
    for (let i = 0; i < cookies.length; i++) {
      console.log(cookies[i].name);
    }
  }, 1000);
}

  // Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
  function createCookies() {
    setTimeout(function () {
      cookies.push(newCookie);
    }, 2000);
  }
// Progression 4: calling functions
createCookies();
getAllCookies();
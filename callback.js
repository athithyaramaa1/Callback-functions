const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function getAllCookies(){
  setTimeout(function() {
    for (let i = 0; i < cookies.length; i++){
      console.log(cookies[i])
    }
  }, 1000)
}
  // Progression 2: using setTimeout() 

//Progression 3: Create a function to create cookies
function createCookie(getCookiesFn){
  setTimeout(function () {
    cookies.push(newCookie);
    getCookiesFn();
  }, 2000);
}

createCookie(getAllCookies)
// Progression 5: calling function
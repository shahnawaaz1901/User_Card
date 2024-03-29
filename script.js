/* We Use XMLHttpRequest to Fetch the Data from the API */
/* XML Request is done using the AJAX(Asynchronous Javascript and XML) */
let userNumber = Math.floor(Math.random() * 30);
if (!userNumber) {
  userNumber = 1;
}
function fetchUser(id) {
  //* Create Instance of XMLHttpRequest
  const request = new XMLHttpRequest();

  //* Initiate Request By Specifying Method and URL
  request.open("get", `https://dummyjson.com/users/${id}`);

  //* Sends Request to the Server(In Post Request Specify the Data in Object as a argument which we want to send to the server)
  request.send();

  //* For Returning Response Directly in JSON format withOut using any JSON.parse function
  request.responseType = "json";

  //* onload event is emit when request is completed successfully
  //* data is the response which server send back corresponding to the request
  // request.onload = (data) => {
  //   console.log(data);
  // };

  //* When We successfully fetch the Data from the Server then and only then we want to show the data to the user
  //* So we need to displaying the data when "load" event is occure
  //* In the callback it contains the Response and Other Types of Details
  //* But we can access the response using the using request.response or request.responseText
  request.addEventListener("load", (event) => {
    // * Access Response using Instance of XMLHTTPRequest
    const response = request.response;
    if (request.status == 404) {
      return;
    }
    //   console.log(response);
    updateUserData(response);
    //   console.log(response);
    //* Access Response using the event which we collect when "load" event is occure
    //   console.log(event.currentTarget);
    //   console.log(event.currentTarget.response); //* Response Collect in RAW format
    //   console.log(event.currentTarget.responseText); //* Response Collect in RAW format

    //* All Data which we Recieved is in RAW format so for understanding we need to convert this data into JSON format
    //   console.log(request.response);
    //   console.log(JSON.parse(event.currentTarget.response));
  });
}

function updateUserData(userData) {
  //* Fetch the Elements
  const container = document.querySelector(".card-container");
  const card = `<div class="user-card">
  <img
    src="${userData.image}"
    alt="Profile Image"
    id="image"
  />
  <h3 id="first_name">${userData.firstName}</h3>
  <h3 id="last_name">${userData.lastName}</h3>
  <p class="email">${userData.email}</p>
  <button class="btn">View Profile</button>
</div>`;
  /* 
        innerHTML override the HTML content and replace it with 
        the HTML content which we provided
    */
  container.insertAdjacentHTML("beforebegin", card);
  /* Change Data Like this
  const image = document.querySelector("#image");
  const firstName = document.querySelector("#first_name");
  const lastName = document.querySelector("#last_name");
  const email = document.querySelector(".email");

  //* Set Value to the fetch element
  image.setAttribute("src", userData.image);
  firstName.textContent = userData.firstName;
  lastName.textContent = userData.lastName;
  email.textContent = userData.email;
  */
}

/* Chaining of Callback functions is called Droom pyramid */
/* Droom Pyramid is called callback hell means it's hard to understand the code */
/* Callback function chaining is more diffficult to understand */
/* For Preventing this type of situations of callback functions new Concept called Promises is Introduced */
/* Which uses by the modern way by using the "fetch" function to fetch the data from Server */

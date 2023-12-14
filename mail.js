const firebaseConfig = {
    apiKey: "AIzaSyCA44GBAlMm2Sq_7vzKsxWheSSVWE6iaDY",
    authDomain: "financetracker-6db73.firebaseapp.com",
    databaseURL: "https://financetracker-6db73-default-rtdb.firebaseio.com",
    projectId: "financetracker-6db73",
    storageBucket: "financetracker-6db73.appspot.com",
    messagingSenderId: "402948770997",
    appId: "1:402948770997:web:951e5f4885041d34eb82fc"
  };

const result = document.getElementById("result");


  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
 
  const signUpForm = document.getElementById("contactForm");
 
  signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();
 
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
 
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User creation successful
        console.log("User created successfully:", userCredential.user.email);
        result.value="User Created successfully";
        // Show a success message or redirect to a new page
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // Show an error message
      });
  });

const firebaseConfig = {
    apiKey: "AIzaSyCA44GBAlMm2Sq_7vzKsxWheSSVWE6iaDY",
    authDomain: "financetracker-6db73.firebaseapp.com",
    databaseURL: "https://financetracker-6db73-default-rtdb.firebaseio.com",
    projectId: "financetracker-6db73",
    storageBucket: "financetracker-6db73.appspot.com",
    messagingSenderId: "402948770997",
    appId: "1:402948770997:web:951e5f4885041d34eb82fc"
  };
 
  firebase.initializeApp(firebaseConfig);

  const result = document.getElementById("result");

  const auth = firebase.auth();
 
  const loginForm = document.getElementById("loginForm");
 
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
 
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User logged in successfully!");
        result.value="User login successful";
        window.location.href="index.html";
        // Show a success message or redirect to a new page
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        // Show an error message in your "alert" element
        document.querySelector(".alert").style.display = "block";
        result.value="User login UNsuccessful"
      });
  });

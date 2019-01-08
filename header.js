<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js">
     </script>
     <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase-app.js">
     </script>
     <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase-auth.js">
     </script>
     <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase-database.js">
     </script>
     <script>


     var string = window.location.href;
     expr1 = "/home/site";
     expr2 = "/site";

     expr1Res = string.search(expr1);
     expr2Res = string.search(expr2);

     var useFirebase = true;
     if (expr1Res>-1 || expr2Res>-1){
         useFirebase = false;
     }

     if (useFirebase){
          if (!firebase.apps.length) {
          // Initialize Firebase
             var config = {
                apiKey: "AIzaSyBzkkA0JXKOl7AIrytZAWJ2zmtNJC1eh4s",
                authDomain: "digital-range-database.firebaseapp.com",
                databaseURL: "https://digital-range-database.firebaseio.com",
                projectId: "digital-range-database",
                storageBucket: "digital-range-database.appspot.com",
                messagingSenderId: "321150468698"
             };
            firebase.initializeApp(config);
         }
     }
</script>

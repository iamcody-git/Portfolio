const firebaseConfig = {
    apiKey: "AIzaSyAI_sNfmDf24BD7FCovHd48GYwA-V37wVI",
    authDomain: "portfolio-web-ca971.firebaseapp.com",
    databaseURL: "https://portfolio-web-ca971-default-rtdb.firebaseio.com",
    projectId: "portfolio-web-ca971",
    storageBucket: "portfolio-web-ca971.appspot.com",
    messagingSenderId: "282120097883",
    appId: "1:282120097883:web:3cffbbe419d560178d6f7e"
  };

  // initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);

  // reference our data base
  const data= firebaseConfig.database().ref('contactForm');

  document.getElementById("contactForm").addEventListener("submit",submitform);

  function submitform(event){
    event.preventDefault();
     var name =getElementVal('name');
     var email =getElementVal('email');
     var phone =getElementVal('phone');
     var message =getElementVal('message');

     saveMsg(name,email,phone,message);

     // enable alert

     document.querySelector('.alert').computedStyleMap.display="block";

     // clearing data
     setTimeout(()=>{
     document.querySelector('.alert').computedStyleMap.display="none";
     },3000);

     // reset
     document.getElementById("contactForm").reset();

  }

     const saveMsg=(name,email,phone,message)=>{
        let newForm=contactDB.push();

        newForm.set({
            name:name,
            email:email,
            phone:phone,
            message:message,
        })


     }
  

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }

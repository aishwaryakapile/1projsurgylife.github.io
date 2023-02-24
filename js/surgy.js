// window.onload = ()=>{
//   // $(selector).countMe(delay,speed)
//   $("#num1").countMe(40,65);
//   $("#num2").countMe(30, 30);
//   $("#num3").countMe(40, 50);
//   $("#num4").countMe(100,200);
// }


// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-36251023-1']);
// _gaq.push(['_setDomainName', 'jqueryscript.net']);
// _gaq.push(['_trackPageview']);

// (function() {
// var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
// ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
// var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
           
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

function validate() {
    var fname = document.f1.fname.value;
    var lname = document.f1.lname.value;
    var Phone = document.f1.Phone.value;
    var email = document.f1.email.value;
    var Address = document.f1.Address.value;

    var alphaExp = /^[A-Za-z ]+$/;
    var numExp = /^[0-9]+$/;
    var emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    var addExp = /^[A-Za-z0-9,  ]+$/;

    status1 = status2 = status3 = status4 = status5 = false;

    if (fname == "") {
      document.getElementById('fnameNote').innerHTML = "Please enter name";
      status1 = false;
    }
    else {
      if (fname.match(alphaExp)) {
        document.getElementById('fnameNote').innerHTML = "";
        status1 = true;
      }
      else {
        document.getElementById('fnameNote').innerHTML = "Please enter characters only";
        status1 = false;
      }
    }
    if (lname == "") {
      document.getElementById('lnameNote').innerHTML = "Please enter City name";
      status2 = false;
    }
    else {
      if (lname.match(alphaExp)) {
        document.getElementById('lnameNote').innerHTML = "";
        status2 = true;
      }
      else {
        document.getElementById('lnameNote').innerHTML = "Please enter characters only";
        status2 = false;
      }
    }
    if (Phone == "") {
      document.getElementById('PhoneNote').innerHTML = "Please enter phone number";
      status3 = false;
    }
    else {
      if (Phone.match(numExp)) {
        if (Phone.length == 10) {
          document.getElementById('PhoneNote').innerHTML = "";
          status3 = true;
        }
        else {
          document.getElementById('PhoneNote').innerHTML = "Please enter 10 digit number only";
          status3 = false;
        }
      }
      else {
        document.getElementById('PhoneNote').innerHTML = "Please enter digits only";
        status3 = false;
      }
    }
    if (email == "") {
      document.getElementById('emailNote').innerHTML = "Please enter email id"
      status4 = false;
    }
    else {
      if (email.match(emailExp)) {
        document.getElementById('emailNote').innerHTML = "";
        status4 = true;
      }
      else {
        document.getElementById('emailNote').innerHTML = "Please enter valid email id";
        status4 = false;
      }
    }
    if (Address == "") {
      document.getElementById('AddressNote').innerHTML = "Please enter Address"
      status5 = false;
    }
    else {
      if (Address.match(addExp)) {
        document.getElementById('AddressNote').innerHTML = ""
        status5 = true;
      }
      else {
        document.getElementById('AddressNote').innerHTML = "Please enter valid address"
        status5 = false;
      }
    }


    if (status1 == true && status2 == true && status3 == true && status4 == true && status5 == true) {
      return true;
    }
    else {
      return false;
    }

  }
  function book(){
    var x=confirm('Do You Want To Proceed')
    if(x){
      return true;
    }
    else{
      return false;
    }
  }
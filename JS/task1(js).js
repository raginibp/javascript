function validate(){  
    event.preventDefault();
  var name=document.f1.name.value;  
  var name1=document.f1.name1.value;  
  var address=document.f1.address.value; 
  var city=document.f1.city.value; 
  var state=document.f1.pincode.value;  
  var postal=document.f1.postal.value; 
  var phone=document.f1.phone_num.value; 
  var email=document.f1.email.value;  
  var checkbox = document.f1.check.value;
  var gender = document.f1.Gender.value;
  var suggest = document.f1.subject.value;
  var feedback = document.f1.subject.value;
  // var password=document.f1.password.value;  
  // var status=false;  
    
  if(name =="" || name<=0 || name >0){  
  document.getElementById("demo").innerHTML=  
  " Please enter valid first name ";  
  // status=false;  
  }
  if(name1 ==""||name1<=0 || name1 >0){  
    document.getElementById("demo1").innerHTML=  
    " Please enter valid last name";  
     }
     if(address ==""||address<=0 || address >0){  
      document.getElementById("demo3").innerHTML=  
      " Please enter Address";  
       }
       if(city ==""||city<=0 || city >0){  
        document.getElementById("demo4").innerHTML=  
        " Please enter city";  
         }
         if(state ==""||state<=0 || state >0){  
          document.getElementById("demo5").innerHTML=  
          " Please enter state";  
           }
           if(postal !="^[0-9]{6}$"){  
            document.getElementById("demo6").innerHTML=  
            " Please enter pincode";  
             }
             if(phone != "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$"){  
              document.getElementById("demo7").innerHTML=  
              " Please enter phone number";  
               }
              

               if(email ==""||email<=0 || email >0){  
                document.getElementById("demo8").innerHTML=  
                " Please enter email";  
                 }
                 if(checkbox !=null){  
                  document.getElementById("demo9").innerHTML=  
                  " Please choose any of them";  
                   }
                   if(gender !=null){  
                    document.getElementById("demo10").innerHTML=  
                    " Please choose any of them";  
                     }
                     if(suggest !=null){  
                      document.getElementById("demo11").innerHTML=  
                      " Please write anything";  
                       }
                       if(feedback !=null){  
                        document.getElementById("demo12").innerHTML=  
                        " Please write anything";  
                         }
                         
  }  
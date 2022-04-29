
// ------------------sidebar.js----------------------------------------------
console.log("ok")
document.querySelector("#three_line-icon").addEventListener("click",sliding_function)

function sliding_function(){
    console.log("ok")
let sliding_sidebar = document.getElementById("side_bar")
sliding_sidebar.style.left = "0";
sliding_sidebar.style.background = "white";
 }

 document.querySelector("#sliding2").addEventListener("click",sliding_function2)

function sliding_function2(){
let sliding_sidebar = document.getElementById("side_bar")
sliding_sidebar.style.left = "-320px";
 }

//  document.querySelector("#main_div").addEventListener("click",sliding_function3)

// function sliding_function3(){
//     console.log("OK")
// let sliding_sidebar = document.getElementById("side_bar")
// sliding_sidebar.style.left = "-320px";
//  }


// let sliding_sidebar = document.getElementById("side_bar")
// sliding_sidebar.style.left = "-310px";

let show = document.getElementById("ul1")
console.log(show)
show.onclick = function(){
    let show1 = document.getElementById("ul-1")
    console.log(show1)
    if( show1.style.display === ''){
        show1.style.display = "none";
    }
    else if( show1.style.display === "none"){  
        show1.style.display = 'block';
    }
    else if( show1.style.display === "block"){  
        show1.style.display = 'none';
    }
  
}
let show_2 = document.getElementById("ul2")
console.log(show_2)
show_2.onclick = function(){
    let show2 = document.getElementById("ul-2")
    console.log(show2)
    if( show2.style.display === ''){
        show2.style.display = "none";
    }
    else if( show2.style.display === "none"){  
        show2.style.display = 'block';
    }
    else if( show2.style.display === "block"){  
        show2.style.display = 'none';
    }   
}

let show_3 = document.getElementById("ul3")
    console.log(show_3)
    show_3.onclick = function(){
        let show3 = document.getElementById("ul-3")
        console.log(show3)
        if( show3.style.display === ''){
            show3.style.display = "none";
        }
        else if( show3.style.display === "none"){  
            show3.style.display = 'block';
        }
        else if( show3.style.display === "block"){  
            show3.style.display = 'none';
        }   
    }

// ------------------Registration.js----------------------------------------------


    student_Register_arr = JSON.parse(localStorage.getItem("studennt_Register_arr")) || [];
    document.querySelector(".form").addEventListener("submit", function () {
        event.preventDefault();
        var emailnumber = document.querySelector("#email").value;
        var passwrd = document.querySelector("#password").value;
        var loginSuccss = true;
        // console.log(student_Register_arr)
        for (var i = 0; i < student_Register_arr.length; i++) {
            // console.log(student_Register_arr[i].phone,emailnumber,student_Register_arr[i].pass , passwrd)

            if ((student_Register_arr[i].email == emailnumber || student_Register_arr[i].phone == emailnumber) && student_Register_arr[i].pass == passwrd) {
                loginSuccss = true;
                break;
            }
            else {
                loginSuccss = false;
            }
        }
        if (loginSuccss) {
            alert("login Success");
             window.location.href = "index.html"
        }
        else {
            alert("invalid details");
        }
    })


    function student() {
        document.querySelector(".form").style.display = "none"
        document.querySelector(".form2").style.display = "none"
        document.querySelector(".form1").style.display = "block"
        //  student data taking through localStorage 
        //student_Register_arr = JSON.parse(localStorage.getItem("studennt_Register_arr")) || [];
        //Empty inquey id and append new value.
        // document.querySelector("#inqury").textContent = "";
        // var peragraf = document.createElement("p")
        // peragraf.setAttribute("class", "pera")
        // peragraf.innerHTML = "If you are a company looking to hire interns, please register as a company by clicking &nbsp;"
        // var spn = document.createElement("span")
        // var ancr = document.createElement("a")
        // ancr.innerText = "here."
        // ancr.setAttribute("href", "#")
        // ancr.setAttribute("target", "_blank")
        // spn.append(ancr);
        // peragraf.append(spn);
        // document.querySelector("#inqury").append(peragraf);

        //Empty #api-option id and append new value.
        document.querySelector("#api-option").textContent = "";
        var divF = document.createElement("div");
        divF.setAttribute("id", "fb")
        var icon = document.createElement("i")
        icon.setAttribute("class", "fab fa-facebook-square")
        var btnF = document.createElement("button")
        btnF.textContent = "SIGNIN WITH FACEBOOK"
        divF.append(icon, btnF)

        var divG = document.createElement("div");
        divG.setAttribute("id", "gl")
        var icon = document.createElement("i")
        icon.setAttribute("class", "fab fa-google")
        var btnG = document.createElement("button")
        btnG.textContent = "SIGNIN WITH GOOGLE"
        divG.append(icon, btnG)
        document.querySelector("#api-option").append(divF, divG);

        // //Empty #forgot id and append new value.
        // document.querySelector("#forgot").textContent = "";
        // var studentanchar = document.createElement("a");
        // studentanchar.setAttribute("href", "#");
        // studentanchar.setAttribute("target", "_blank");
        // studentanchar.textContent = "Forgot password";
        // document.querySelector("#forgot").append(studentanchar);

        // //Empty create new acc. id newAc and append new value
        // var newAc = document.querySelector("#newAc")
        // newAc.setAttribute("href", "studentRegister.html")
        // newAc.setAttribute("target", "_blank");

        
        // add Event for cheking your are Register Or not .
        student_Register_arr = JSON.parse(localStorage.getItem("studennt_Register_arr")) || [];
        document.querySelector(".form1").addEventListener("submit", function () {
            event.preventDefault();
            var emailnumber = document.querySelector("#email1").value;
            var passwrd = document.querySelector("#password1").value;
            var loginSuccss = true;
            for (var i = 0; i < student_Register_arr.length; i++) {
    

                if ((student_Register_arr[i].email == emailnumber || student_Register_arr[i].phone == emailnumber) && student_Register_arr[i].pass == passwrd)
                 {
                    loginSuccss = true;
                    break;
                }
                else {
                    loginSuccss = false;
                }
            }
            if (loginSuccss) {
                alert("login Success");
                 window.location.href = "index.html"
            }
            else {
                alert("invalid details");
            }
        })

    }

    function company() {
        document.querySelector(".form2").style.display = "block"
        document.querySelector(".form").style.display = "none"
        document.querySelector(".form1").style.display = "none"
        // get company valu through backend ...
        company_Register_arr = JSON.parse(localStorage.getItem("company_Register_arr"))||[];
        document.querySelector("#api-option").textContent = "";
        var divL = document.createElement("div");
        divL.setAttribute("id", "fb")
        var icon = document.createElement("i")
        icon.setAttribute("class", "fab fa-linkedin")
        var btnL = document.createElement("button")
        btnL.textContent = "SIGNIN WITH LINKEDIN"
        divL.append(icon, btnL)
        document.querySelector("#api-option").append(divL);

        document.querySelector(".form2").addEventListener("submit", function () {
         alert("log in success");
            event.preventDefault();
            var emailnumber = document.querySelector("#email2").value;
            var passwrd = document.querySelector("#password2").value;
            var loginSuccss = true;
            for (var i = 0; i < company_Register_arr.length; i++) {
                console.log(emailnumber,passwrd)

                if ((company_Register_arr[i].email == emailnumber || company_Register_arr[i].phone == emailnumber) && company_Register_arr[i].pass == passwrd) {
                    loginSuccss = true;
                    break;
                }
                else {
                    loginSuccss = false;
                }
            }
            if (loginSuccss) {
                alert("login Success");
                  window.location.href = "index.html"
            }
            else {
                alert("invalid details");
            }
        });
    }
    
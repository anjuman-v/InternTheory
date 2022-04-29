
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



studennt_Register_arr = JSON.parse(localStorage.getItem("studennt_Register_arr")) || [];
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    var frstName = document.querySelector("#firstname").value
    var secondName = document.querySelector("#lastname").value
    var email = document.querySelector("#email").value
    var pass = document.querySelector("#password").value
    var phone = document.querySelector("#number").value
    studennt_Register_Obj = {
        frstName:frstName,
        secondName:secondName,
        email : email,
        pass : pass,
        phone : phone
    }
    var eml = true;
    var phon = true;
    console.log(studennt_Register_Obj.email)
    for(var i=0; i<studennt_Register_arr.length; i++)
    {
        if(studennt_Register_arr[i].email == studennt_Register_Obj.email &&studennt_Register_arr[i].phone== studennt_Register_Obj.phone )
        {
            eml = false;
            phon = false;
            break;
        }
        else if(studennt_Register_arr[i].email == studennt_Register_Obj.email )
        {
            eml = false;
            break;
        }
        else if(studennt_Register_arr[i].phone== studennt_Register_Obj.phone )
        {
            phon = false;
            break;
        }
    } 
    if(eml==true && phon==true)
    {
    studennt_Register_arr.push(studennt_Register_Obj);
    localStorage.setItem("studennt_Register_arr",JSON.stringify(studennt_Register_arr))||[];
    alert("Account Success Fully Created")
    window.location.href="student and company login.html"
    document.querySelector("#firstname").value=""
     document.querySelector("#lastname").value=""
     document.querySelector("#email").value=""
     document.querySelector("#password").value=""
     document.querySelector("#number").value=""
    } 
    else if(eml!==true && phon!==true)
    {
        alert(" Opps!! email and phone number already Register")
        document.querySelector("#email").value=""
        document.querySelector("#number").value=""
    }
    else if(eml!==true)
    {
        alert(" Opps!! email  already Register")
        document.querySelector("#email").value=""
    }
    else if(phon!==true)
    {
        alert(" Opps!! Phone Number   already Register")
        document.querySelector("#number").value=""
    }

    
})

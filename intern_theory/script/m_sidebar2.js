function sideBar(){
    var  sidebar =` <div id="side_bar">
    <div id="sliding2" class="text"><i class="fa-solid fa-bars"></i><img id="im" src="https://assets.interntheory.com/creative/logo.png" alt=""></div>
    <ul id="ul" >
        <li><i class="fa-solid fa-house"></i></i><a href="index.html">Home</a></li>
        <li><i class="fa-solid fa-bars"></i><a href="internship.html">Internships</a></li>
        <li><i class="fa-solid fa-suitcase"></i><a href="jobs.html">Jobs</a></li>
        <li><i class="fa-solid fa-plus"></i><a href="">Post Internship</a></li>
        <li id="ul1"><i class="fa-solid fa-graduation-cap"></i>Courses<i class="fa-solid fa-caret-down"></i>
            <ul id="ul-1">
                <li><a href="onlinecourses.html">Online Courses</a></li>
                <li><a href="classTraining.html">Classroom Training</a></li>
            </ul>
        </li>
        <li><i class="fa-solid fa-phone"></i><a href="contract.html">Contact Us</a></li>
        <hr>
        <li id="ul2" ><i class="fa-solid fa-bars-staggered"></i>Register<i class="fa-solid fa-caret-down"></i>
            <ul id="ul-2">
                <li><a href="companyreg.html">Company</a></li>
                <li><a href="studentregs.html">Student</a></li>
            </ul>
        </li>
        <li id="ul3" ><i class="fa-solid fa-arrow-right-to-bracket"></i>Login<i class="fa-solid fa-caret-down"></i>
            <ul id="ul-3">
                <li><a href="student and company login.html">Company</a></li>
                <li><a href="student and company login.html">Student</a></li>
            </ul>
        </li>

    </ul>
   </div>`
    return  sidebar;
}

export default sideBar
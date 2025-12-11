document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); 


    let fullName = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phono").value.trim();
    let dob = document.getElementById("dob").value.trim();


    let gender = document.querySelector("input[name='gender']:checked");
    let selectedGender = gender ? gender.value : "Not Selected";


 

     let skills = [];
    document.querySelectorAll('input[name="skills"]:checked').forEach(function (checkbox) {
        skills.push(checkbox.value);
    });
  

 console.log(
  "Full Name:", fullName,
  "  Email:", email,
  "  Password:", password,
  "  Phone:", phone,
  "  Date of Birth:", dob,
  "  Gender:", selectedGender,
  "  Selected Courses:", skills

);
 alert("Form submitted successfully!");


//    document.getElementById("name").value=""
//   document.getElementById("email").value=""
//   document.getElementById("password").value=""
//   document.getElementById("phono").value=''
//    document.getElementById("dob").value='' 
  
//   document.querySelectorAll('input[name="gender"]').forEach(g => g.checked = false);
//   document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
     document.getElementById("form").reset();
});


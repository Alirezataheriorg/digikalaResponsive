
const menuItems = document.querySelectorAll(".nav-footer .col i")

function changeIcon(selected) {
  menuItems.forEach(i => {
    let baseClass = i.classList[1]   // این برای دومین کلاس هست برای همین index 1
    let name = baseClass.replace("-fill", "") 

    if (i === selected) {
      i.className = `bi ${name}-fill fs-4` 
    } else {
      i.className = `bi ${name} fs-4`      
    }
  })
}
document.querySelectorAll(".nav-footer .col").forEach(col => {
  col.addEventListener("click", () => {
    let icon = col.querySelector("i")
    changeIcon(icon)
  })
})








const inputSearchLg = document.querySelector(".title-ult");
const expandedInput = document.querySelector(".expanded-input");

inputSearchLg.addEventListener("click", (e) => {
  expandedInput.style.display = "block";
});
document.addEventListener("click", (e) => {
  if (!expandedInput.contains(e.target) && e.target !== inputSearchLg) {
    expandedInput.style.display = "none";
  }
});









const emailInput = document.querySelector('#email');
const submit = document.querySelector('#submit');
const error = document.querySelector('#error');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})+$/;

emailInput.addEventListener('input', function() {
        const value = emailInput.value.trim();  // php -> اول اخرشو برامون تمیز میکنه

        if (value === "") {
            error.textContent = "لطفا این قسمت را خالی نگذارید"; 
            error.style.display = "block";
            submit.classList.remove('active');
            submit.disabled = true;
        } else if (!emailRegex.test(value)) {
            error.textContent = "لطفا یک ایمیل معتبر وارد کنید"; 
            error.style.display = "block";
            submit.classList.remove('active');
            submit.disabled = true;
        } else {
            error.style.display = "none"; 
            submit.classList.add('active');
            submit.disabled = false;
        }
});




// =============================
// login page


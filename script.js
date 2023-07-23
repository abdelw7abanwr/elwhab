document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Check credentials
  if (username === "moah" && password === "2552023") {
    showMessage("تم رصد عضو مميز", "green", true);
    setTimeout(function() {
      showMessage("جاري دخول منطقة العملاء المميزين", "red", false);
      setTimeout(function() {
        window.location.href = "nom/index.html";
      }, 3000);
    }, 3000);
  } else {
    showMessage("اسم المستخدم أو كلمة المرور غير صحيحة.", "red", true);
  }
});

function showMessage(message, color, flash) {
  const messageElement = document.getElementById("message");
  messageElement.innerText = message;
  messageElement.style.color = color;
  if (flash) {
    setInterval(function() {
      messageElement.style.visibility = (messageElement.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500);
  }
}

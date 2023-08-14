document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");
    const isLoginPage = window.location.pathname.endsWith("login.html");
  
    if (!isLoggedIn) {
      if (!isLoginPage) {
        window.location.href = "login.html";
      }
    }
  });
  
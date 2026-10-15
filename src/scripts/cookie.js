/**
 * Privacy notice: only essential storage is used. Prefer a quiet dialog.
 */
function initCookieNotice() {
  const dialog = document.getElementById("privacyDialog");
  const btnAccept = document.getElementById("acceptCookiesBtn");

  if (!(dialog instanceof HTMLDialogElement) || !btnAccept) return;

  const consentGiven = localStorage.getItem("cecanltd_cookie_consent");
  if (consentGiven) return;

  if (typeof dialog.show === "function") {
    dialog.show();
  } else {
    dialog.setAttribute("open", "");
  }

  btnAccept.addEventListener("click", () => {
    localStorage.setItem("cecanltd_cookie_consent", "true");
    dialog.close();
  });
}
initCookieNotice();
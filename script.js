alert("Should you require any item not currently available on our website, \n kindly contact us via whatsapp number to place a special order.\n Additionally we offer a full delivery service from vendors around the school available for a delivery fee of N1000.");

let selectedItems = [];

function toggleItem(el, name, price) {
  el.classList.toggle("selected");

  let index = selectedItems.findIndex(i => i.name === name);

  if (index > -1) {
    selectedItems.splice(index, 1); // remove
  } else {
    selectedItems.push({name, price}); // add
  }

  document.getElementById("proceedBtn").style.display = "block";
}

function toggleCategory(btn) {
  let hidden = btn.nextElementSibling;
  hidden.style.display = hidden.style.display === "grid" ? "none" : "grid";
}

function openFAQ() {
  window.location.href = "faq.html";
}

function contactUs() {
  window.open("https://wa.me/2349031576717?text=Hello%20I%20need%20help");
}

function toggleMenu() {
  let menu = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

function closeMenu() {
  let menu = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");

  menu.classList.remove("active");
  overlay.style.display = "none";
}

window.onpopstate = function () {
  closeMenu();

  // CLOSE FORM TOO
  document.getElementById("formBox").style.display = "none";
};

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function openForm() {

  let total = 0;
  let text = "<h4>Order Summary</h4>";

  selectedItems.forEach(item => {
    total += item.price;
    text += `<p>${item.name} - ₦${item.price}</p>`;
  });

  text += `<p>Delivery+Service charge - ₦2750</p>`;
  text += `<b>Total: ₦${total + 2750}</b>`;

  document.getElementById("summary").innerHTML = text;
  document.getElementById("totalPrice").innerText = total + 2750;

  document.getElementById("formBox").style.display = "block";

  // THIS SCROLLS USER TO FORM (VERY IMPORTANT UX FIX)
  document.getElementById("formBox").scrollIntoView({
    behavior: "smooth"
  });

  document.getElementById("proceedBtn").style.display = "none";
}


window.onload = function () {
  let btn = document.querySelector(".order-btn");

  window.scrollTo(0, 0); // always start from top

  document.getElementById("formBox").style.display = "none"; // hide form on load
};


  let total = 0;
  let text = "<h4>Order Summary</h4>";

  selectedItems.forEach(item => {
    total += item.price;
    text += `<p>${item.name} - ₦${item.price}</p>`;
  });

  text += `<p>Delivery+Service charge - ₦2750</p>`;
  text += `<b>Total: ₦${total + 2750}</b>`;

  document.getElementById("summary").innerHTML = text;


document.getElementById("totalPrice").innerText = total;

function sendOrder() {

  alert("⚠️ Please pay the exact total amount to the account above and take a screenshot of your payment.\n You will be required to send it on WhatsApp after placing your order. Orders without proof of payment will not be processed.");

  let name = document.getElementById("full-name").value;
  let hostel = document.getElementById("hostel").value;
  let dept = document.getElementById("dept").value;

  let total = 2750;
  let message = `Hi Saint Leo's Mart 👋%0AName: ${full-name}%0AHostel: ${hostel}%0ADept: ${dept}%0AOrder:%0A`;

  selectedItems.forEach(item => {
    total += item.price;
    message += `- ${item.name} ₦${item.price}%0A`;
  });

  message += `Total: ₦${total}`;

  window.open(`https://api.whatsapp.com/send?phone=2349031576717&text=${message}`);
}

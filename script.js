document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("New Enquiry - Dynamic Enterprise");
  const body = encodeURIComponent(
`New Industrial Enquiry

Name: ${data.get("name")}
Company: ${data.get("company")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}
Product / Part: ${data.get("product")}
Part Number: ${data.get("part")}
Quantity: ${data.get("quantity")}
Specification: ${data.get("specification")}

Requirement:
${data.get("message")}`
  );
  window.location.href = `mailto:info@dynamicent.co.in?subject=${subject}&body=${body}`;
});

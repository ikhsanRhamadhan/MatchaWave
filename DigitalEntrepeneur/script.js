// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })
}

// Menu Filter
const filterBtns = document.querySelectorAll(".filter-btn")
const menuItems = document.querySelectorAll(".menu-item")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    menuItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block"
      } else {
        if (item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      }
    })
  })
})

// WhatsApp Order Function
function openWhatsApp(productName, price) {
  // Format harga
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price)

  // Nomor WhatsApp (ganti dengan nomor WhatsApp bisnis Anda)
  const phoneNumber = "6281234567890" // Format: 62xxx (tanpa +)

  // Pesan yang akan dikirim
  const message = `Halo, saya tertarik untuk memesan:\n\nProduk: ${productName}\nHarga: ${formattedPrice}\n\nMohon informasi lebih lanjut untuk pemesanan. Terima kasih!`

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message)

  // Buka WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappURL, "_blank")
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href !== "") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value
    alert(`Terima kasih! Email ${email} telah terdaftar untuk newsletter kami.`)
    newsletterForm.reset()
  })
}

// Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Apply animation to elements
document
  .querySelectorAll(".product-card, .benefit-card, .location-card, .menu-item, .value-card, .team-member")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

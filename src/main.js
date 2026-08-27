import './style.css'

const couplePhotoUrl = `${import.meta.env.BASE_URL}couple-photo.png`

document.querySelector('#app').innerHTML = `
  <div class="petals" aria-hidden="true"></div>
  <main class="invitation">
    <div class="ambient-photo" style="background-image: url('${couplePhotoUrl}');" aria-hidden="true"></div>
    <div class="paper-card">
      <header class="topbar reveal reveal--fade">
        <p class="monogram">V <span>&amp;</span> D</p>
        <p>Our wedding invitation</p>
        <p>30 · 08 · 2026</p>
      </header>
      
      <section class="hero reveal reveal--up" aria-labelledby="invitation-title">
        <div class="floral-corner floral-corner-left" aria-hidden="true">✽</div>
        <div class="floral-corner floral-corner-right" aria-hidden="true">✽</div>
        <div class="duo-seal-container reveal reveal--up">
        <p class="eyebrow">Together with our families</p>
        <p class="invitation-line">We joyfully invite you to celebrate</p>
        <div class="photo-stage">
          <img src="${couplePhotoUrl}" alt="Vishnu and Divyadharshni walking together on a beach" />
          <div class="photo-wash" aria-hidden="true"></div>
          <button class="name-seal" id="celebrate" type="button" aria-label="Celebrate Divyadharshni and Vishnu">
            <span id="invitation-title" class="name-line">Divyadharshni</span><i>&amp;</i><span class="name-line">Vishnu</span>
          </button>
        </div>
        <p class="tamil-line">அவளும் நானும்</p>
        <div class="scroll-mark" aria-hidden="true"><span></span></div>
      </section>
<section class="countdown-line reveal reveal--up" aria-label="Countdown to the wedding">
  <div class="countdown-header-row">
    <div class="countdown-heading">
      <span class="eyebrow">Counting the moments</span>
      <strong>Until forever</strong>
    </div>

  </div>

  <!-- Bottom Row: Compact Horizontal Timer -->
  <div class="countdown" id="countdown">
    <div class="countdown-unit"><strong data-unit="days">00</strong><small>days</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="hours">00</strong><small>hours</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="minutes">00</strong><small>min</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="seconds">00</strong><small>sec</small></div>
  </div>
</section>

      <section class="events" aria-label="Wedding events">
        <article class="event event--haldi reveal reveal--up">
          <div class="event-content">
            <div class="event-label-line">
              <span class="event-emblem event-emblem--haldi" aria-hidden="true"><img src="${import.meta.env.BASE_URL}event-images/haldi.jpeg" alt="" /></span>
              <span class="event-label">Haldi ceremony</span>
            </div>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">10:00 - 11:30 AM</span>
            </div>
          </div>
        </article>

        <article class="event event--betrothal reveal reveal--up">
          <div class="event-content">
            <div class="event-label-line">
              <span class="event-emblem event-emblem--betrothal" aria-hidden="true"><img src="${import.meta.env.BASE_URL}event-images/betrothal.jpeg" alt="" /></span>
              <span class="event-label">Betrothal</span>
            </div>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">4:30 - 6:00 PM</span>
            </div>
          </div>
        </article>

        <article class="event event--reception reveal reveal--up">
          <div class="event-content">
            <div class="event-label-line">
              <span class="event-emblem event-emblem--reception" aria-hidden="true"><img src="${import.meta.env.BASE_URL}event-images/reception.jpg" alt="" /></span>
              <span class="event-label">Reception</span>
            </div>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">6:00 PM onwards</span>
            </div>
          </div>
        </article>

        <article class="event event--wedding reveal reveal--up">
          <div class="event-content">
            <div class="event-label-line">
              <span class="event-emblem event-emblem--wedding" aria-hidden="true"><img src="${import.meta.env.BASE_URL}event-images/wedding.png" alt="" /></span>
              <span class="event-label">Wedding</span>
            </div>
            <h2>30.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Sunday</span>
              <span class="event-time">8:00 - 9:00 AM</span>
            </div>
          </div>
        </article>
      </section>

      <section class="venue reveal reveal--up" aria-labelledby="venue-title">
        <p class="eyebrow">The celebration will be held at</p>
        <h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2>
        <p class="venue-place">Kallidaikurchi, Tirunelveli</p>
        <a class="venue-map-btn" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurchi%2C+Tirunelveli" target="_blank" rel="noreferrer">
          <span class="gmap-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#ea4335" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/>
              <path fill="#fbbc04" d="M5.7 13.2C7.4 17 12 22 12 22s1.6-1.8 3.2-4.1l-2.1-4.7z"/>
              <path fill="#34a853" d="M15.1 17.9C16.9 15.2 19 11.1 19 9a7 7 0 0 0-.3-2L12 12.7z"/>
              <circle cx="12" cy="9" r="2.5" fill="#1a73e8"/>
            </svg>
          </span>
          <span class="btn-text">Open in Google Maps</span>
        </a>
      </section>

      <footer class="reveal reveal--fade">
        <div class="footer-message">
          <p>We eagerly wait to celebrate with you.</p>
          <p>With love, family, relatives &amp; friends</p>
        </div>
        <p class="footer-contact">Gokhul K: 9344006224</p>
      </footer>
    </div>
  </main>
`

/* Floating Petals Generator */
const petals = document.querySelector('.petals')
for (let index = 0; index < 14; index += 1) {
    const petal = document.createElement('span')
    petal.style.setProperty('--left', `${Math.random() * 100}%`)
    petal.style.setProperty('--delay', `${Math.random() * 8}s`)
    petal.style.setProperty('--duration', `${9 + Math.random() * 7}s`)
    petals.append(petal)
}

/* Countdown Logic */
const weddingDate = new Date('2026-08-30T08:00:00+05:30').getTime()
const updateCountdown = () => {
    let remaining = Math.max(0, weddingDate - Date.now())
    const units = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000 }
    Object.entries(units).forEach(([unit, duration]) => {
        const value = Math.floor(remaining / duration)
        document.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(2, '0')
        remaining -= value * duration
    })
}
updateCountdown()
window.setInterval(updateCountdown, 1000)

/* Scroll Observer for Smooth Animations */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
            }
        })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

/* Celebrate Button Confetti Trigger */
const celebrateButton = document.querySelector('#celebrate')
celebrateButton.addEventListener('click', () => {
    const colors = ['#29483f', '#397c78', '#77a9a0', '#b99152']
    const confetti = document.createDocumentFragment()
    for (let index = 0; index < 42; index += 1) {
        const piece = document.createElement('span')
        piece.className = 'confetti'
        piece.style.setProperty('--x', `${(Math.random() - 0.5) * 110}vw`)
        piece.style.setProperty('--y', `${70 + Math.random() * 40}vh`)
        piece.style.setProperty('--r', `${Math.random() * 720 - 360}deg`)
        piece.style.setProperty('--delay', `${Math.random() * 180}ms`)
        piece.style.backgroundColor = colors[index % colors.length]
        confetti.append(piece)
    }
    document.body.append(confetti)
    celebrateButton.classList.remove('celebrating')
    requestAnimationFrame(() => celebrateButton.classList.add('celebrating'))
    window.setTimeout(() => document.querySelectorAll('.confetti').forEach((piece) => piece.remove()), 2200)
})
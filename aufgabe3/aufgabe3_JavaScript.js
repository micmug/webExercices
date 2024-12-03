window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY
  var background = document.querySelector('.body')
  var foreground = document.querySelector('.foreground')
  background.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'
})

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.imageBox-4__overlay')

  const tiltEffect = (e) => {
    const rect = overlay.getBoundingClientRect()
    const x = e.clientX - rect.left // Mausposition relativ zur linken Kante des Overlays
    const y = e.clientY - rect.top // Mausposition relativ zur oberen Kante des Overlays

    const width = rect.width
    const height = rect.height

    // Berechnung der Neigung
    const intensity = 2 // Faktor für stärkeren Effekt
    let rotateX = (y / height - 0.5) * -30 * intensity // Invertierte Y-Achse
    let rotateY = (x / width - 0.5) * 30 * intensity

    // Begrenzung auf maximal ±30 Grad
    rotateX = Math.max(-30, Math.min(30, rotateX))
    rotateY = Math.max(-30, Math.min(30, rotateY))

    // Transformation anwenden
    overlay.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTilt = () => {
    // Overlay in die Ausgangslage zurücksetzen
    overlay.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  // Effekt, wenn die Maus außerhalb des Overlays bewegt wird
  document.addEventListener('mousemove', (e) => {
    if (!overlay.matches(':hover')) {
      // Überprüft, ob die Maus außerhalb des Overlays ist
      tiltEffect(e)
    }
  })

  // Zurücksetzen, wenn die Maus das Overlay betritt
  overlay.addEventListener('mouseenter', resetTilt)
})

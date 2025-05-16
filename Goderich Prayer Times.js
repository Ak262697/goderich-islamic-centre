const city = "Goderich";
const country = "Canada";
const method = 2; // ISNA
const school = 1; // Hanafi
const today = new Date();
const dateString = today.toISOString().split('T')[0];

async function getPrayerTimes() {
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}&school=${school}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const times = data.data.timings;

    const container = document.getElementById("prayer-times");
    container.innerHTML = `
      <ul class="space-y-1">
        <li><strong>Fajr:</strong> ${times.Fajr}</li>
        <li><strong>Dhuhr:</strong> ${times.Dhuhr}</li>
        <li><strong>Asr (Hanafi):</strong> ${times.Asr}</li>
        <li><strong>Maghrib:</strong> ${times.Maghrib}</li>
        <li><strong>Isha:</strong> ${times.Isha}</li>
        <li><strong>Sunrise:</strong> ${times.Sunrise}</li>
      </ul>
    `;
  } catch (error) {
    console.error("Failed to fetch prayer times:", error);
    document.getElementById("prayer-times").textContent = "Failed to load prayer times.";
  }
}

getPrayerTimes();

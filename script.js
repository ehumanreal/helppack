// sprawdzenie i przywrócenie motywu ciemnego z pamięci przeglądarki
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

const toggleButton = document.getElementById("toggle-theme");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

const searchInput = document.getElementById('searchInput');
const topics = document.querySelectorAll('.topic-list li');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    topics.forEach(function (topic) {
      const text = topic.textContent.toLowerCase();
      topic.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
}

const proposalForm = document.getElementById("proposalForm");
const confirmationMessage = document.getElementById("confirmationMessage");

if (proposalForm) {
  proposalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTopic = document.getElementById("newTopic").value.trim();
    const webhookURL = "https://discord.com/api/webhooks/1440027170524102676/N4NVf0o97-o1IS37DAtSHOSVC6YJ9NbOUhbQ9oNkFZeig7-Xi-f9VcYAys0iIcAv8co6";

    if (newTopic.length > 0) {
      const payload = {
        content: `📩 Nowa propozycja tematu: **${newTopic}**`
      };

      fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.ok) {
          confirmationMessage.style.display = "block";
          proposalForm.reset();
        } else {
          alert("Błąd podczas wysyłania do Discorda.");
        }
      })
      .catch(error => {
        console.error("Błąd:", error);
        alert("Nie udało się połączyć z Discordem.");
      });
    }
  });
}

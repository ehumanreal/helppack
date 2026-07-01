# 💻 Base0203 – Baza Wiedzy INF.02 & INF.03

Zbiór przydatnych narzędzi, notatek i poradników dla informatyków, przygotowany głównie z myślą o nauce, egzaminach zawodowych (kwalifikacje **INF.02** i **INF.03**) oraz codziennej pracy z systemami operacyjnymi.

Dostępny online: [ehumanreal.github.io/0203](https://ehumanreal.github.io/0203/)

## 📂 Struktura

```
/
├── index.html          # Strona główna (INF.02 + INF.03)
├── style.css           # Motyw z CSS variables (jasny/ciemny)
├── script.js           # Wyszukiwarka, dark mode
├── subpages/           # Poradniki INF.02
│   ├── files.html      #   Instalki (programy + narzędzia)
│   ├── grub.html       #   Przywracanie GRUB
│   ├── linux_tools.html#   Narzędzia terminala Linux
│   ├── netplan.html    #   Konfiguracja Netplan
│   ├── windows_tools.html   # Narzędzia Windows
│   └── windows_activation.html
├── inf03/              # Materiały INF.03
│   ├── list.html       #   Notatki (.odt)
│   ├── xampp.html      #   Instalacja XAMPP
│   └── notatki/        #   Pliki .odt z lekcji
├── instalki/           # Instalatory do pobrania
└── photos/             # Zrzuty ekranu
```

## ⚙️ Funkcjonalności

*   **Dark Mode** – przełącznik z zapisem preferencji w `localStorage`
*   **Wyszukiwarka** – filtrowanie list w czasie rzeczywistym
*   **Zgłaszanie tematów** – formularz wysyłający propozycje
*   **Responsywność** – układ skalowany na komputerach i telefonach (Flexbox + media queries)
*   **Minimalistyczny design** – systemowa czcionka, CSS Custom Properties, płynne przejścia

## 🚀 Uruchomienie

Strona jest statyczna (HTML/CSS/JS). Otwórz `index.html` w przeglądarce.

Do plików `.odt` zalecany jest **LibreOffice**.
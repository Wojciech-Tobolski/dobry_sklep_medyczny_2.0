# Dobry Sklep Medyczny 2.0

Profesjonalny sklep ortopedyczny oferujący sprzęt rehabilitacyjny i ortopedyczny najwyższej jakości. Strona informacyjna z możliwością przeglądania produktów i kontaktowania się w sprawie zakupów.

## 🏥 O projekcie

Strona internetowa sklepu ortopedycznego "Dobry Sklep Medyczny" z siedzibą we Wrocławiu. Projekt został stworzony w technologii Astro z TypeScript i Tailwind CSS, zapewniając szybkie ładowanie i doskonałe doświadczenie użytkownika.

### Główne funkcjonalności:

- ✅ Przeglądanie produktów ortopedycznych
- ✅ Szczegółowe opisy produktów z specyfikacją techniczną
- ✅ Informacje o refundacjach NFZ
- ✅ Formularze kontaktowe
- ✅ Responsywny design
- ✅ SEO zoptymalizowany
- ✅ Szybkie ładowanie (statyczna strona)

## 🚀 Technologie

- **Astro** - Framework do budowania statycznych stron
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Framework CSS
- **Google Fonts** - Czcionki Inter i Montserrat

## 📁 Struktura projektu

```
sklep-ortopedyczny/
├── src/
│   ├── components/
│   │   ├── common/          # Komponenty wspólne (Header, Footer)
│   │   ├── products/        # Komponenty produktów
│   │   └── sections/        # Sekcje stron
│   ├── layouts/             # Layouty stron
│   ├── pages/               # Strony (routing)
│   ├── services/            # Serwisy (ProductService)
│   ├── types/               # Definicje TypeScript
│   ├── utils/               # Funkcje pomocnicze
│   └── styles/              # Style globalne
├── public/
│   └── images/              # Obrazy statyczne
├── astro.config.mjs         # Konfiguracja Astro
├── tailwind.config.cjs      # Konfiguracja Tailwind
└── tsconfig.json           # Konfiguracja TypeScript
```

## 🛠️ Instalacja i uruchomienie

### Wymagania:

- Node.js 18+
- npm lub yarn

### Krok 1: Klonowanie repozytorium

```bash
git clone https://github.com/Wojciech-Tobolski/dobry_sklep_medyczny_2.0.git
cd dobry_sklep_medyczny_2.0
```

### Krok 2: Instalacja zależności

```bash
npm install
```

### Krok 3: Uruchomienie serwera deweloperskiego

```bash
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:4321`

## 📦 Skrypty npm

- `npm run dev` - Uruchamia serwer deweloperski
- `npm run build` - Buduje wersję produkcyjną
- `npm run preview` - Podgląd wersji produkcyjnej
- `npm run astro` - Dostęp do CLI Astro

## 🎨 Paleta kolorów

- **Główny kolor**: `#E91E63` (Vivid Pink)
- **Jasnoróżowy**: `#FCE4EC` (Light Pink)
- **Niebieski**: `#2196F3` (Blue)
- **Szary**: `#6B7280` (Gray)

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:

- 📱 Telefonów (320px+)
- 📱 Tabletów (768px+)
- 💻 Desktopów (1024px+)
- 🖥️ Dużych ekranów (1280px+)

## 🏗️ Budowanie dla produkcji

### Lokalne budowanie:

```bash
npm run build
```

Pliki produkcyjne zostaną wygenerowane w folderze `dist/`.

### Deployment na Hostinger:

1. **Przygotowanie plików:**

   ```bash
   npm run build
   ```

2. **Upload na Hostinger:**

   - Zaloguj się do panelu Hostinger
   - Przejdź do File Manager
   - Przejdź do folderu `public_html`
   - Usuń wszystkie pliki (zachowaj kopię zapasową)
   - Uploaduj wszystkie pliki z folderu `dist/`

3. **Konfiguracja domeny:**
   - Upewnij się, że domena `dobrysklepmedyczny.com` wskazuje na folder `public_html`
   - Sprawdź, czy plik `.htaccess` jest poprawnie skonfigurowany

## 🔧 Konfiguracja

### Zmiana danych kontaktowych:

Edytuj plik `src/components/common/Header.astro` i `src/components/common/Footer.astro`

### Dodawanie nowych produktów:

Edytuj plik `src/services/ProductService.ts`

### Zmiana kolorów:

Edytuj plik `tailwind.config.cjs`

## 📊 SEO i wydajność

- ✅ Meta tagi dla każdej strony
- ✅ Open Graph dla social media
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml (automatycznie generowany)
- ✅ Optymalizacja obrazów
- ✅ Lazy loading
- ✅ Minifikacja CSS/JS

## 🔒 Bezpieczeństwo

- ✅ HTTPS (wymagane na produkcji)
- ✅ Walidacja formularzy
- ✅ Sanityzacja danych wejściowych
- ✅ Brak wrażliwych danych w kodzie

## 📞 Kontakt

**Dobry Sklep Medyczny**

- 📍 ul. Przykładowa 123, 50-000 Wrocław
- 📞 +48 71 123 45 67
- 📧 kontakt@dobrysklepmedyczny.com
- 🕒 Pon-Pt: 9:00-18:00, Sob: 9:00-14:00

## 📄 Licencja

MIT License - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 🤝 Współpraca

Projekt jest otwarty na współpracę. Jeśli chcesz zgłosić błąd lub zaproponować ulepszenie, utwórz issue lub pull request.

---

**Wersja:** 2.0  
**Ostatnia aktualizacja:** 2024  
**Autor:** Dobry Sklep Medyczny

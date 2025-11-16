# Jak uruchomić aplikację BookTracker - Instrukcja PL

## 🚀 Szybki start (5 minut)

### 1. Zainstaluj zależności
```bash
npm install
```

### 2. Załóż konto w Supabase (DARMOWE)

1. Wejdź na [supabase.com](https://supabase.com)
2. Kliknij "Start your project" lub "Sign up"
3. Zaloguj się przez GitHub lub email
4. Kliknij "New Project"
5. Wypełnij formularz:
   - **Name**: `book-tracker` (lub dowolna nazwa)
   - **Database Password**: wymyśl silne hasło (zapisz je!)
   - **Region**: wybierz najbliższy (np. Frankfurt dla Polski)
6. Kliknij "Create new project"
7. Poczekaj 1-2 minuty aż projekt się utworzy

### 3. Pobierz klucze z Supabase

1. W panelu Supabase, po lewej stronie kliknij ikonę **⚙️ (Settings)**
2. Kliknij **API**
3. Znajdź i skopiuj:
   - **Project URL** (coś jak: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (długi ciąg znaków pod "Project API keys")

### 4. Skonfiguruj zmienne środowiskowe

1. W folderze projektu stwórz plik `.env.local`:
```bash
cp .env.example .env.local
```

2. Otwórz plik `.env.local` w edytorze i wklej swoje dane:
```env
NEXT_PUBLIC_SUPABASE_URL=https://twojprojekt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=twoj-klucz-anon
```

### 5. WAŻNE: Włącz autentykację email w Supabase

1. W panelu Supabase przejdź do **Authentication** (po lewej stronie)
2. Kliknij **Providers**
3. Upewnij się, że **Email** jest włączony (zielony przełącznik)

### 6. (Opcjonalne) Wyłącz potwierdzanie email dla testów

Aby nie musieć klikać w linki potwierdzające w emailu podczas testowania:

1. W Supabase przejdź do **Authentication** → **Providers**
2. Kliknij **Email**
3. Znajdź **"Confirm email"** i **wyłącz** to (ustaw na OFF)
4. Kliknij **Save**

Teraz możesz tworzyć konta i logować się bez potwierdzania email!

### 7. Uruchom aplikację

```bash
npm run dev
```

### 8. Otwórz w przeglądarce

Wejdź na [http://localhost:3000](http://localhost:3000)

### 9. Załóż konto testowe

1. Kliknij "Login" lub "Get Started"
2. Wpisz email (może być dowolny, np. `test@example.com`)
3. Wpisz hasło (minimum 6 znaków)
4. Kliknij "Don't have an account? Sign up" na dole
5. Kliknij "Sign Up"
6. Jeśli wyłączyłeś potwierdzanie email (krok 6), możesz się od razu zalogować!

## ✅ Gotowe!

Teraz możesz:
- Przeglądać stronę główną
- Zalogować się
- Zobaczyć dashboard z wykresami i statystykami

## 🐛 Problemy?

### Błąd: "createMiddlewareClient is not a function"
✅ **NAPRAWIONE!** Ten błąd został już poprawiony w najnowszej wersji.

### Nie mogę się zalogować
- Sprawdź czy skopiowałeś poprawnie URL i klucz z Supabase
- Upewnij się że plik `.env.local` istnieje i ma poprawne dane
- Sprawdź czy autentykacja Email jest włączona w Supabase

### Dashboard nie działa
- Upewnij się że jesteś zalogowany
- Sprawdź konsolę przeglądarki (F12) czy nie ma błędów

### Strona nie ładuje się
- Upewnij się że `npm run dev` działa bez błędów
- Sprawdź czy port 3000 nie jest zajęty przez inną aplikację

## 📧 Potrzebujesz pomocy?

Zobacz pełną dokumentację w pliku `README.md` (po angielsku i polsku).

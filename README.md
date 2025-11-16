# BookTracker - Modern Book Tracking Application

A production-ready book tracking application built with Next.js 14+, Supabase, and modern UI components.

## 🚀 Quick Start / Szybki Start

### Prerequisites / Wymagania

- Node.js 18+ installed
- A Supabase account (free tier works perfectly)

### Installation / Instalacja

1. **Clone the repository and install dependencies:**
```bash
npm install
```

2. **Set up Supabase:**

   **English:**
   - Go to [supabase.com](https://supabase.com) and create a free account
   - Click "New Project"
   - Fill in your project details (name, database password, region)
   - Wait for the project to be created (usually takes 1-2 minutes)
   - Go to Project Settings → API
   - Copy your `Project URL` and `anon/public` key

   **Polski:**
   - Wejdź na [supabase.com](https://supabase.com) i załóż darmowe konto
   - Kliknij "New Project"
   - Wypełnij dane projektu (nazwa, hasło do bazy danych, region)
   - Poczekaj aż projekt się utworzy (zazwyczaj 1-2 minuty)
   - Przejdź do Project Settings → API
   - Skopiuj `Project URL` i klucz `anon/public`

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Enable Email Authentication in Supabase (IMPORTANT):**

   **English:**
   - In your Supabase dashboard, go to Authentication → Providers
   - Make sure "Email" is enabled
   - Optionally enable Google and GitHub OAuth providers if you want social login

   **Polski:**
   - W panelu Supabase przejdź do Authentication → Providers
   - Upewnij się, że "Email" jest włączony
   - Opcjonalnie możesz włączyć Google i GitHub OAuth jeśli chcesz logowanie przez social media

5. **Run the development server:**
```bash
npm run dev
```

6. **Open your browser:**
   - Go to [http://localhost:3000](http://localhost:3000)
   - The landing page should load
   - Click "Login" or "Get Started" to go to the auth page
   - Create an account by entering email and password, then click "Sign up"
   - Check your email for verification link (check spam folder)
   - After verification, you can login and access the dashboard

## 📧 Testing / Testowanie

### Creating a Test Account / Tworzenie Konta Testowego

**English:**
1. Go to [http://localhost:3000/auth](http://localhost:3000/auth)
2. Enter any email address (it can be fake for testing, like `test@example.com`)
3. Enter a password (minimum 6 characters)
4. Click "Don't have an account? Sign up" to switch to signup mode
5. Click "Sign Up"
6. **For development:** Supabase will send a confirmation email. You can:
   - Check the email and click the confirmation link, OR
   - In Supabase Dashboard → Authentication → Users, manually confirm the user
   - Or disable email confirmation in Authentication → Settings → Email Auth → Confirm email (turn off for development)

**Polski:**
1. Wejdź na [http://localhost:3000/auth](http://localhost:3000/auth)
2. Wpisz dowolny adres email (może być fikcyjny do testów, np. `test@example.com`)
3. Wpisz hasło (minimum 6 znaków)
4. Kliknij "Don't have an account? Sign up" aby przełączyć się na tryb rejestracji
5. Kliknij "Sign Up"
6. **Dla developmentu:** Supabase wyśle email potwierdzający. Możesz:
   - Sprawdzić email i kliknąć link potwierdzający, LUB
   - W panelu Supabase → Authentication → Users, ręcznie potwierdzić użytkownika
   - Albo wyłączyć potwierdzanie email w Authentication → Settings → Email Auth → Confirm email (wyłącz dla developmentu)

### Disable Email Confirmation (Recommended for Development)

**English:**
1. Go to your Supabase Dashboard
2. Navigate to Authentication → Email Templates
3. Click on Settings (gear icon)
4. Find "Enable email confirmations" and toggle it OFF
5. Now you can create accounts and login immediately without email verification

**Polski:**
1. Wejdź do panelu Supabase
2. Przejdź do Authentication → Email Templates
3. Kliknij w Settings (ikonka koła zębatego)
4. Znajdź "Enable email confirmations" i wyłącz
5. Teraz możesz tworzyć konta i logować się od razu bez weryfikacji email

## 🎨 Features

- **Landing Page**: Modern hero section, features, carousel, statistics, testimonials
- **Authentication**: Email/password login, social login (Google, GitHub)
- **Dashboard**: Reading statistics, interactive charts, book tracking
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Full dark mode support
- **Animations**: Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React

## 📝 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── auth/page.tsx         # Authentication page
│   ├── dashboard/page.tsx    # Dashboard page
│   └── layout.tsx            # Root layout
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── hero.tsx              # Hero section
│   ├── features.tsx          # Features section
│   ├── image-slider.tsx      # Carousel component
│   ├── stats-section.tsx     # Statistics section
│   ├── auth-form.tsx         # Auth form component
│   └── dashboard/
│       ├── sidebar.tsx       # Dashboard sidebar
│       ├── stats.tsx         # Stats cards
│       ├── charts.tsx        # Reading charts
│       └── book-card.tsx     # Book card component
├── lib/
│   └── supabase.ts           # Supabase client
└── middleware.ts             # Route protection
```

## 🔒 Security

- Route protection via Next.js middleware
- Secure authentication with Supabase
- Environment variables for sensitive data
- TypeScript for type safety

## 🐛 Troubleshooting

### Middleware Error
If you see an error about `createMiddlewareClient`, make sure you have the latest version of dependencies installed:
```bash
npm install @supabase/ssr@latest
```

### Can't Login
- Make sure your Supabase URL and keys are correct in `.env.local`
- Check if email authentication is enabled in Supabase
- For development, consider disabling email confirmation
- Check browser console for any errors

### Dashboard Not Loading
- Make sure you're logged in
- Check if the middleware is working correctly
- Verify Supabase credentials are set

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 📄 License

MIT License - feel free to use this project for learning or as a template for your own applications.

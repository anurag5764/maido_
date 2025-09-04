# Maido - Cooking and Dishwashing Service Platform

A modern React-based web application for booking domestic help services, specifically focused on cooking and dishwashing services.

## 🚀 Features

- **Service Booking**: Domestic help, cooking, and dishwashing services
- **Dynamic Pricing**: Real-time pricing based on house size, people count, and preferences
- **Multi-step Forms**: Intuitive booking flow with form validation
- **State Management**: Redux for managing complex form states
- **Database Integration**: Supabase for data persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend**: Supabase (PostgreSQL)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/anurag5764/maido_.git
cd maido_
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

5. Run the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

1. Create a new Supabase project
2. Run the migration files in the `supabase/migrations/` directory
3. Update your environment variables with the Supabase credentials

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📱 Services

### Domestic Help
- Brooming & Mopping (Mandatory)
- Bathroom Cleaning (Add-on)
- Dusting (Add-on)
- Dishwashing (Add-on)

### Cooking Services
- Home-style food (Mandatory)
- Dishwashing (Optional add-on)

### Standalone Dishwashing
- Independent dishwashing service

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

Anurag Deshmukh

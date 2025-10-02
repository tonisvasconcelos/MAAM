# BJJ Management System

A comprehensive React-based management system for Brazilian Jiu-Jitsu academies, built with TypeScript, Tailwind CSS, and modern web technologies.

🚀 **Live Demo**: https://tonisvasconcelos.github.io/MAAM/

📱 **Features**: Students Management, Multi-language (EN/PT), Responsive Design

## Features

### Core Modules
- **Students Management** - Complete CRUD operations for student records
- **Teachers Management** - Instructor and coach management
- **Branches Management** - Multi-location academy support
- **Fight Plans** - Training program and membership plans
- **Enrollments** - Student enrollment in fight plans
- **Classes** - Class scheduling and management
- **Schedule & Check-in** - Class attendance tracking
- **Championships** - Competition management
- **Results** - Competition results tracking
- **Quality & Evaluation** - Student assessment system

### Technical Features
- **Internationalization** - English and Portuguese support
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Form Validation** - Zod schema validation
- **Type Safety** - Full TypeScript implementation
- **Modern UI** - Clean, professional interface
- **Data Management** - Local data storage (ready for API integration)

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **i18next** - Internationalization
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tonisvasconcelos/MAAM.git
cd MAAM
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── i18n/           # Internationalization setup
│   ├── layout/         # Layout components
│   └── router.tsx      # Application routing
├── components/
│   ├── ui/             # Reusable UI components
│   └── common/         # Common components
├── features/           # Feature-based modules
│   ├── students/       # Student management
│   ├── teachers/       # Teacher management
│   ├── branches/       # Branch management
│   ├── plans/          # Fight plans
│   ├── enrollments/    # Student enrollments
│   ├── classes/        # Class management
│   ├── checkin/        # Schedule & check-in
│   ├── championships/  # Championship management
│   ├── results/        # Results tracking
│   └── quality/        # Quality evaluations
├── lib/
│   ├── validation.ts   # Zod validation schemas
│   └── utils.ts        # Utility functions
└── types/
    └── index.ts        # TypeScript type definitions
```

## Data Model

The application includes comprehensive data models for:

- **Students** - Personal info, belt level, contact details
- **Teachers** - Instructor profiles and qualifications
- **Branches** - Academy locations and details
- **Fight Plans** - Training programs and pricing
- **Enrollments** - Student-plan relationships
- **Classes** - Scheduled training sessions
- **Check-ins** - Attendance tracking
- **Championships** - Competition information
- **Results** - Competition outcomes
- **Quality Evaluations** - Student assessments

## Internationalization

The application supports both English and Portuguese languages. Language switching is available in the header. All user-facing text is externalized and can be easily translated.

## Development Guidelines

### Code Style
- Use TypeScript for all components and functions
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling
- Implement proper error handling and loading states

### Component Structure
- Feature-based organization
- Reusable UI components in `components/ui/`
- Form validation with Zod schemas
- Proper TypeScript typing throughout

### State Management
- React Query for server state
- Local state with React hooks
- Form state with React Hook Form

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.

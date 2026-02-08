# Login Page - Firebase Authentication

A modern, responsive login page built with React and Firebase authentication, featuring Google Sign-In integration.

## Features

- **Email/Password Login** - Traditional login with form validation
- **Google Sign-In** - Quick authentication via Google
- **Firebase Authentication** - Secure backend authentication
- **Access Token Display** - View authentication tokens on dashboard
- **Responsive Design** - Mobile-friendly layout using Material-UI
- **Form Validation** - Email format and password strength checks
- **User Dashboard** - Display user profile and access token after login

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **UI Library**: Material-UI (MUI) 7.3.7
- **Authentication**: Firebase 12.9.0
- **Routing**: React Router DOM 7.13.0
- **Styling**: Emotion (CSS-in-JS)
- **Linting**: ESLint 9.39.1

## Project Structure

```
login-page/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx      # Main login form component
│   │   └── TokenDisplay.jsx   # Dashboard displaying user info & token
│   ├── firebase/
│   │   └── config.js          # Firebase configuration
│   ├── assets/                # Static images
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles
│   └── App.css                # App-specific styles
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
├── package.json               # Dependencies
├── firebase.json              # Firebase hosting config
└── .firebaserc                # Firebase project ID
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd login-page
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
   - Update Firebase config in `src/firebase/config.js` if using a different Firebase project

## Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Usage

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Firebase

```bash
firebase deploy
```

## Features Overview

### Login Page (src/components/LoginPage.jsx)

- Email and password input fields
- Form validation with error messages
- Password visibility toggle
- Google Sign-In button
- Responsive two-column layout (image + form)
- Forgot password link
- Sign-up navigation

### Dashboard (src/components/TokenDisplay.jsx)

- User profile display (avatar, name, email)
- Access token display
- Logout functionality
- Responsive card layout

## Authentication Flow

1. User enters email and password or clicks Google Sign-In
2. Firebase authenticates the user
3. Access token is retrieved
4. User is redirected to dashboard with token and user data
5. Dashboard displays user information and token
6. Logout clears authentication

## Form Validation

- **Email**: Must be valid email format
- **Password**: Minimum 6 characters required

## Firebase Configuration

Firebase config is located in `src/firebase/config.js`. The project uses:
- Firebase Authentication
- Google OAuth Provider

## Browser Support

- Modern browsers supporting ES2020+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ESLint Configuration

ESLint is configured in `eslint.config.js` with:
- Recommended JS rules
- React Hooks best practices
- React Refresh compatibility

## Deployment

The app is configured for Firebase Hosting. Deployment configuration is in `firebase.json`.

## Future Enhancements

- Backend API integration for email/password login
- Password reset functionality
- User registration/sign-up page
- Two-factor authentication
- Social login (Apple, Facebook)
- User profile management


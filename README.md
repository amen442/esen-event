# E-Commerce: The Comeback - ESEN Event Website

A modern, responsive event website built with React, Tailwind CSS, and Framer Motion for the "E-Commerce: The Comeback" conference by ESEN.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Futuristic Design**: Purple/blue neon gradient theme with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth scrolling, hover effects, and micro-interactions
- **Form Validation**: Complete registration form with real-time validation
- **Google Apps Script Integration**: Ready-to-use form submission to Google Sheets
- **Component Architecture**: Clean, modular React components

## 📋 Sections

- **Hero**: Eye-catching landing section with animated background
- **About**: Event information and key features
- **Program**: Interactive timeline of event schedule
- **Panels**: Expert panel discussions with speaker information
- **Speakers**: Featured speakers with profiles and topics
- **Registration**: Comprehensive form with validation
- **Footer**: Navigation and contact information

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd esen-event
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Colors
The theme uses custom Tailwind CSS colors defined in `tailwind.config.js`:
- `neon-purple`: #8B5CF6
- `neon-blue`: #3B82F6
- `dark-bg`: #0F172A
- `card-bg`: #1E293B

### Google Apps Script Integration
To enable form submission to Google Sheets:

1. Create a Google Apps Script
2. Deploy it as a web app
3. Replace `YOUR_GOOGLE_SCRIPT_URL` in `src/components/Form.jsx` with your deployment URL
4. Set up the Google Sheet to receive the data

### Components Structure
```
src/components/
├── Navbar.jsx      # Navigation with smooth scrolling
├── Hero.jsx        # Landing section with animations
├── About.jsx       # Event information
├── Program.jsx     # Timeline schedule
├── Panels.jsx      # Panel discussions
├── Speakers.jsx    # Speaker profiles
├── Form.jsx        # Registration form
└── Footer.jsx      # Footer with links
```

## 🎯 Key Features

### Form Validation
- Real-time field validation
- Custom error messages
- Email and phone format checking
- Required field enforcement

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Loading states

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📝 Google Apps Script Setup

1. Create a new Google Sheet with columns: `Name`, `Email`, `Phone`, `Status`, `Organization`, `Timestamp`
2. Go to Extensions > Apps Script
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.status,
      data.organization,
      data.timestamp
    ]);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy as Web App (execute as "Me", access "Anyone")
5. Copy the URL and update the form component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎨 Design System

### Typography
- Font: Poppins (Google Fonts)
- Headings: Gradient text effect
- Body: Clean, readable text

### Animations
- Fade in on scroll
- Hover scale effects
- Smooth transitions
- Loading states

### Color Scheme
- Primary: Neon Purple (#8B5CF6)
- Secondary: Neon Blue (#3B82F6)
- Background: Dark (#0F172A)
- Cards: Medium Dark (#1E293B)

## 📱 Browser Support

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

---

Built with ❤️ for the ESEN community

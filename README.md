# The Py Website Clone

This is a clone of the [thepy.in](https://thepy.in) website landing page.

## Project Structure

```
thepy-clone/
├── dist/                # Distribution folder for build
├── node_modules/        # Dependencies
├── src/                 # Source files
│   ├── assets/
│   │   ├── css/         # CSS stylesheets
│   │   ├── images/      # Images
│   │   └── js/          # JavaScript files
│   └── index.html       # Main HTML file
├── package.json         # Project metadata and scripts
└── netlify.toml         # Netlify configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Bun

### Installation

1. Clone the repository or extract the ZIP file
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
# or
bun install
```

### Development

To start the development server:

```bash
npm run dev
# or
bun run dev
```

### Building for Production

To build for production:

```bash
npm run build
# or
bun run build
```

The production-ready files will be in the `dist` folder.

## Features

- Responsive design that works on mobile and desktop
- "Launching Soon" landing page
- Contact Us section
- Cookie consent banner
- Powered by GoDaddy banner

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts (Playfair Display, Source Sans Pro, Montserrat)

## License

MIT

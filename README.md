# A Little Birthday Magic 🎂

A responsive React + Vite birthday surprise page with cinematic gradients, a CSS cake, animated stars, confetti, a four-part heartfelt message, a name editor, and a music toggle.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm (included with Node.js)

## Run locally
1. Extract the ZIP.
2. Open the extracted `birthday-surprise` folder in VS Code.
3. Open Terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Personalize it
- Click **Make it personal — add their name** on the welcome screen.
- Edit the birthday message in the `scenes` array near the top of `src/App.jsx`.
- Change colors and animation styles in `src/index.css`.

## Music note
The page creates a soft, gentle piano-like ambient melody using the browser's Web Audio API, so no external music file is required. Browsers require a user interaction before audio can play. If you want a real piano recording, put a licensed MP3 at `public/birthday-piano.mp3` and replace the `PianoMusic` component with an HTML `<audio>` element.

## Build for deployment
```bash
npm run build
npm run preview
```

Deploy the generated `dist` folder to Vercel or Netlify. For Vercel, the default Vite preset is sufficient.

## Included interactions
- Animated welcome screen
- Optional friend name personalization
- Surprise button with confetti
- Four story scenes with animated transitions and different backgrounds
- Music on/off toggle
- Restart button at the end
- Mobile-friendly layout and reduced-motion support

# ދިވެހި ނިއުސް (Dhivehi News)

A modern news website built with HTML, Tailwind CSS, and JavaScript, featuring RTL support for the Dhivehi language.

## Features

- 🌐 RTL support for Dhivehi language
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 📰 Dynamic news content loading
- 🔄 Breaking news ticker
- 🖼️ Hero slider with featured articles
- 📊 Admin dashboard
- 💼 News management system
- 📢 Advertisement management system
- 🔒 Secure admin login
- 🎯 SEO friendly

## Project Structure

```
dhivehi-news-site/
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── news-manager.html
│   └── ads-manager.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── favicon.svg
│   ├── news.json
│   └── ads.json
├── index.html
├── article.html
└── README.md
```

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)
- Google Fonts (Noto Sans Thaana)
- Font Awesome Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dhivehi-news-site.git
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open in browser:
   ```
   http://localhost:8000/dhivehi-news-site/
   ```

## Admin Access

Default admin credentials:
- Username: admin
- Password: admin123

## Development Notes

### RTL Support
- The website uses RTL (Right-to-Left) layout for Dhivehi language support
- Utilizes Google's Noto Sans Thaana font for proper Dhivehi text rendering

### Styling
- Uses Tailwind CSS for utility-first styling
- Custom CSS for specific components and animations
- Responsive design breakpoints at standard screen sizes

### JavaScript Features
- Dynamic content loading from JSON files
- News ticker animation
- Hero slider with auto-rotation
- Form validation
- Loading state management

## Future Improvements

1. Backend Integration
   - Replace static JSON with a proper backend API
   - Implement real database storage
   - Add user authentication system

2. Features
   - Add comment system
   - Implement search functionality
   - Add category filtering
   - Add social media sharing
   - Implement real-time news updates

3. Performance
   - Implement proper image optimization
   - Add lazy loading for images
   - Implement proper caching
   - Add service worker for offline support

4. SEO
   - Add meta tags
   - Implement sitemap
   - Add schema markup
   - Improve accessibility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Lorem Picsum](https://picsum.photos/) for demo images

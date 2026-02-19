# Full Stack Web Development Bootcamp Website

A complete, responsive website for a Full Stack Web Development Bootcamp with modern design and interactive features.

## 🚀 Project Structure

```
├── index.html                 # Home page
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── script.js             # JavaScript functionality
├── images/                    # Images folder (add your images here)
└── pages/
    ├── about.html            # About page
    ├── services.html         # Services page
    ├── training.html         # Training programs page
    ├── placement.html        # Placement assistance page
    ├── portfolio.html        # Student portfolio page
    ├── testimonials.html     # Testimonials page
    └── contact.html          # Contact page
```

## 📄 Pages Overview

### 1. Home (index.html)
- Hero section with CTA buttons
- Statistics counter (Students, Placement Rate, Companies, Rating)
- Why Choose Us section
- Call-to-action section

### 2. About (about.html)
- Company story
- Mission & Vision
- Team members

### 3. Services (services.html)
- 6 service cards:
  - Full Stack Development
  - Frontend Development
  - Backend Development
  - DevOps & Cloud
  - Mobile App Development
  - Career Counseling

### 4. Training (training.html)
- Course filtering (All, Beginner, Intermediate, Advanced)
- 6 course cards with details
- Pricing and enrollment options

### 5. Placement (placement.html)
- Placement statistics
- Hiring partner logos
- 4-step placement process
- Success stories

### 6. Portfolio (portfolio.html)
- Project filtering (All, Web Apps, Mobile Apps, E-commerce, SaaS)
- Student project showcase
- Live demo and GitHub links

### 7. Testimonials (testimonials.html)
- Overall rating display
- Student reviews
- Video testimonials

### 8. Contact (contact.html)
- Contact form with validation
- Contact information
- Map placeholder
- FAQ accordion

## ✨ Features

### Interactive Elements
- ✅ Responsive mobile menu (hamburger)
- ✅ Animated counter for statistics
- ✅ Smooth scroll navigation
- ✅ Back to top button
- ✅ Course/Portfolio filtering
- ✅ FAQ accordion
- ✅ Form validation
- ✅ Scroll animations
- ✅ Hover effects

### Design Features
- ✅ Modern gradient backgrounds
- ✅ Card-based layouts
- ✅ Font Awesome icons
- ✅ Responsive grid system
- ✅ Professional color scheme
- ✅ Box shadows and transitions

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🎨 Color Scheme

```css
Primary: #2563eb (Blue)
Secondary: #10b981 (Green)
Accent: #f59e0b (Orange)
Dark: #1f2937
Gray: #6b7280
Light: #f3f4f6
White: #ffffff
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome 6.4.0 (Icons)

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- Small mobile devices

## 🚀 How to Run

1. Open `index.html` in your web browser
2. Navigate through pages using the navigation menu
3. All pages are linked and functional

## 📝 Customization Guide

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #2563eb;
    --secondary: #10b981;
    --accent: #f59e0b;
}
```

### Add Images
1. Place images in the `images/` folder
2. Replace icon placeholders with actual images in HTML
3. Update CSS background-image properties

### Modify Content
- Edit text directly in HTML files
- Update course details in `training.html`
- Change testimonials in `testimonials.html`
- Modify contact information in `contact.html`

### Add More Courses
Copy a course card in `training.html` and modify:
```html
<div class="course-card" data-level="beginner">
    <!-- Course content -->
</div>
```

## 🔧 JavaScript Functions

- `Mobile Menu Toggle` - Hamburger menu functionality
- `Counter Animation` - Animated statistics counter
- `Back to Top` - Smooth scroll to top button
- `Filter Functionality` - Course and portfolio filtering
- `FAQ Accordion` - Expandable FAQ items
- `Form Validation` - Contact form validation
- `Smooth Scroll` - Smooth navigation scrolling
- `Scroll Animations` - Elements animate on scroll

## 📞 Contact Form

The contact form includes validation for:
- Name (required)
- Email (required, valid format)
- Phone (required, 10 digits)
- Course selection (required)
- Message (required)

## 🌟 Future Enhancements

- [ ] Add actual images
- [ ] Integrate backend for form submission
- [ ] Add video testimonials functionality
- [ ] Implement course detail pages
- [ ] Add blog section
- [ ] Integrate payment gateway
- [ ] Add student login portal
- [ ] Implement live chat support

## 📄 License

This project is free to use for educational purposes.

## 👨‍💻 Developer

Created with ❤️ for Full Stack Web Development Bootcamp

---

**Note:** This is a frontend template. For production use, integrate with a backend system for form handling, database, and user authentication.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  currentSlide = 0;
  
  testimonials = [
    {
      name: 'Rahul Verma',
      role: 'Full Stack Developer at TCS',
      rating: 5,
      feedback: 'Best bootcamp for full stack development. Got placed in 3 months after completion. Highly recommended!',
      icon: 'fas fa-user-circle'
    },
    {
      name: 'Priya Singh',
      role: 'Software Engineer at Infosys',
      rating: 5,
      feedback: 'Excellent instructors and hands-on projects. The placement support was outstanding.',
      icon: 'fas fa-user-circle'
    },
    {
      name: 'Amit Kumar',
      role: 'Frontend Developer at Wipro',
      rating: 5,
      feedback: 'Changed my career completely. From non-tech to tech in 6 months. Thank you team!',
      icon: 'fas fa-user-circle'
    },
    {
      name: 'Sneha Reddy',
      role: 'MERN Developer at Accenture',
      rating: 5,
      feedback: 'The MERN stack course was comprehensive. Live projects gave me real-world experience.',
      icon: 'fas fa-user-circle'
    },
    {
      name: 'Vikram Patel',
      role: 'Backend Developer at Cognizant',
      rating: 5,
      feedback: 'Great learning experience! Mock interviews were very helpful. Got 6.5 LPA package.',
      icon: 'fas fa-user-circle'
    },
    {
      name: 'Neha Gupta',
      role: 'Full Stack Developer at HCL',
      rating: 5,
      feedback: 'Best investment in my career. Instructors are patient and explain concepts clearly.',
      icon: 'fas fa-user-circle'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}

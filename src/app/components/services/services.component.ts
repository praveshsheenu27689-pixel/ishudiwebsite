import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { icon: 'fas fa-laptop-code', title: 'Full Stack Development', description: 'Master both frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, and databases.' },
    { icon: 'fas fa-paint-brush', title: 'Frontend Development', description: 'Specialize in creating beautiful, responsive user interfaces with modern frameworks like React, Vue, and Angular.' },
    { icon: 'fas fa-server', title: 'Backend Development', description: 'Learn server-side programming with Node.js, Python, Java, and database management systems.' },
    { icon: 'fas fa-cloud', title: 'DevOps & Cloud', description: 'Master deployment, CI/CD pipelines, Docker, Kubernetes, and cloud platforms like AWS and Azure.' },
    { icon: 'fas fa-mobile-alt', title: 'Mobile App Development', description: 'Build cross-platform mobile applications using React Native and Flutter frameworks.' },
    { icon: 'fas fa-user-graduate', title: 'Career Counseling', description: 'Get personalized career guidance, resume building, and interview preparation from industry experts.' }
  ];
}

import { Component } from '@angular/core';

interface Course {
  title: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  description: string;
  price: number;
  icon: string;
  syllabus: { module: string; topics: string[] }[];
  showSyllabus?: boolean;
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  selectedFilter = 'all';
  
  trainingModes = [
    { icon: 'fas fa-laptop', title: 'Online Classes', description: 'Live interactive sessions from anywhere' },
    { icon: 'fas fa-building', title: 'Offline Classes', description: 'Classroom training at our centers' },
    { icon: 'fas fa-calendar-week', title: 'Weekend Batches', description: 'Perfect for working professionals' }
  ];
  
  courses: Course[] = [
    {
      title: 'Full Stack Web Development',
      duration: '6 Months',
      level: 'beginner',
      rating: 4.8,
      students: 2000,
      description: 'Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and deployment',
      price: 49999,
      icon: 'fas fa-code',
      showSyllabus: false,
      syllabus: [
        { module: 'Frontend Basics', topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'] },
        { module: 'Advanced JavaScript', topics: ['DOM Manipulation', 'Async/Await', 'APIs', 'ES6 Features'] },
        { module: 'React & State Management', topics: ['React Basics', 'Hooks', 'Redux', 'Context API'] },
        { module: 'Backend with Node.js', topics: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
        { module: 'Database & APIs', topics: ['MongoDB', 'Mongoose', 'API Design', 'CRUD Operations'] },
        { module: 'Deployment & DevOps', topics: ['Git/GitHub', 'Heroku', 'AWS', 'CI/CD'] }
      ]
    },
    {
      title: 'MERN Stack Development',
      duration: '4 Months',
      level: 'intermediate',
      rating: 4.7,
      students: 1500,
      description: 'Specialize in MongoDB, Express.js, React, and Node.js stack',
      price: 39999,
      icon: 'fas fa-layer-group',
      showSyllabus: false,
      syllabus: [
        { module: 'MongoDB Mastery', topics: ['Database Design', 'Aggregation', 'Indexing', 'Performance'] },
        { module: 'Express.js Advanced', topics: ['Middleware', 'Routing', 'Error Handling', 'Security'] },
        { module: 'React Advanced', topics: ['Advanced Hooks', 'Performance', 'Testing', 'Best Practices'] },
        { module: 'Node.js Deep Dive', topics: ['Event Loop', 'Streams', 'Clustering', 'Microservices'] }
      ]
    },
    {
      title: 'Frontend Development',
      duration: '3 Months',
      level: 'beginner',
      rating: 4.9,
      students: 1800,
      description: 'Learn HTML, CSS, JavaScript, React, and responsive design',
      price: 29999,
      icon: 'fas fa-palette',
      showSyllabus: false,
      syllabus: [
        { module: 'HTML & CSS', topics: ['Semantic HTML', 'Flexbox', 'Grid', 'Animations'] },
        { module: 'JavaScript', topics: ['Core Concepts', 'DOM', 'Events', 'Fetch API'] },
        { module: 'React', topics: ['Components', 'Props', 'State', 'Lifecycle'] },
        { module: 'UI/UX', topics: ['Design Principles', 'Responsive Design', 'Accessibility'] }
      ]
    },
    {
      title: 'Backend Development',
      duration: '4 Months',
      level: 'intermediate',
      rating: 4.6,
      students: 1200,
      description: 'Master Node.js, Express, databases, APIs, and authentication',
      price: 34999,
      icon: 'fas fa-database',
      showSyllabus: false,
      syllabus: [
        { module: 'Node.js Fundamentals', topics: ['Core Modules', 'NPM', 'Async Programming'] },
        { module: 'Express Framework', topics: ['Routing', 'Middleware', 'REST APIs'] },
        { module: 'Databases', topics: ['SQL', 'NoSQL', 'ORMs', 'Migrations'] },
        { module: 'Security', topics: ['JWT', 'OAuth', 'Encryption', 'Best Practices'] }
      ]
    },
    {
      title: 'DevOps & Cloud Computing',
      duration: '3 Months',
      level: 'advanced',
      rating: 4.8,
      students: 900,
      description: 'Learn Docker, Kubernetes, AWS, CI/CD, and deployment strategies',
      price: 44999,
      icon: 'fas fa-cloud-upload-alt',
      showSyllabus: false,
      syllabus: [
        { module: 'Docker', topics: ['Containers', 'Images', 'Docker Compose', 'Networking'] },
        { module: 'Kubernetes', topics: ['Pods', 'Services', 'Deployments', 'Scaling'] },
        { module: 'AWS', topics: ['EC2', 'S3', 'RDS', 'Lambda'] },
        { module: 'CI/CD', topics: ['Jenkins', 'GitHub Actions', 'Pipelines'] }
      ]
    },
    {
      title: 'Mobile App Development',
      duration: '4 Months',
      level: 'intermediate',
      rating: 4.7,
      students: 1100,
      description: 'Build cross-platform apps with React Native and Flutter',
      price: 39999,
      icon: 'fas fa-mobile-alt',
      showSyllabus: false,
      syllabus: [
        { module: 'React Native', topics: ['Components', 'Navigation', 'State Management'] },
        { module: 'Flutter', topics: ['Widgets', 'Dart', 'State', 'Animations'] },
        { module: 'APIs & Storage', topics: ['REST APIs', 'Local Storage', 'Firebase'] },
        { module: 'Deployment', topics: ['Play Store', 'App Store', 'Testing'] }
      ]
    }
  ];

  get filteredCourses() {
    if (this.selectedFilter === 'all') {
      return this.courses;
    }
    return this.courses.filter(course => course.level === this.selectedFilter);
  }

  filterCourses(level: string) {
    this.selectedFilter = level;
  }

  toggleSyllabus(index: number) {
    const courses = this.filteredCourses;
    courses[index].showSyllabus = !courses[index].showSyllabus;
  }
}

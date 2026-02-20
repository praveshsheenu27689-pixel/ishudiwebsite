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
      title: 'C/C++ Programming',
      duration: '3 Months',
      level: 'beginner',
      rating: 4.7,
      students: 1500,
      description: 'Master C and C++ programming fundamentals and advanced concepts',
      price: 24999,
      icon: 'fas fa-code',
      showSyllabus: false,
      syllabus: [
        { module: 'C Basics', topics: ['Variables', 'Data Types', 'Operators', 'Control Flow'] },
        { module: 'C Advanced', topics: ['Pointers', 'Arrays', 'Structures', 'File Handling'] },
        { module: 'C++ Basics', topics: ['OOP Concepts', 'Classes', 'Objects', 'Inheritance'] },
        { module: 'C++ Advanced', topics: ['Polymorphism', 'Templates', 'STL', 'Exception Handling'] }
      ]
    },
    {
      title: 'SQL / PLSQL',
      duration: '2 Months',
      level: 'beginner',
      rating: 4.6,
      students: 1200,
      description: 'Learn database management with SQL and advanced PLSQL programming',
      price: 19999,
      icon: 'fas fa-database',
      showSyllabus: false,
      syllabus: [
        { module: 'SQL Fundamentals', topics: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'Joins'] },
        { module: 'Advanced SQL', topics: ['Subqueries', 'Views', 'Indexes', 'Transactions'] },
        { module: 'PLSQL Basics', topics: ['Procedures', 'Functions', 'Triggers', 'Cursors'] },
        { module: 'PLSQL Advanced', topics: ['Packages', 'Exception Handling', 'Performance Tuning'] }
      ]
    },
    {
      title: 'Data Structure & Algorithms',
      duration: '4 Months',
      level: 'intermediate',
      rating: 4.8,
      students: 1800,
      description: 'Master data structures and algorithms for coding interviews',
      price: 29999,
      icon: 'fas fa-project-diagram',
      showSyllabus: false,
      syllabus: [
        { module: 'Basic DS', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'] },
        { module: 'Advanced DS', topics: ['Trees', 'Graphs', 'Heaps', 'Hash Tables'] },
        { module: 'Algorithms', topics: ['Sorting', 'Searching', 'Recursion', 'Dynamic Programming'] },
        { module: 'Problem Solving', topics: ['Greedy', 'Backtracking', 'Graph Algorithms', 'Interview Prep'] }
      ]
    },
    {
      title: 'DevOps',
      duration: '3 Months',
      level: 'advanced',
      rating: 4.8,
      students: 900,
      description: 'Learn Docker, Kubernetes, Jenkins, CI/CD, and cloud deployment',
      price: 44999,
      icon: 'fas fa-cogs',
      showSyllabus: false,
      syllabus: [
        { module: 'Docker', topics: ['Containers', 'Images', 'Docker Compose', 'Networking'] },
        { module: 'Kubernetes', topics: ['Pods', 'Services', 'Deployments', 'Scaling'] },
        { module: 'CI/CD', topics: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Pipelines'] },
        { module: 'Monitoring', topics: ['Prometheus', 'Grafana', 'ELK Stack', 'Logging'] }
      ]
    },
    {
      title: 'SAP / Unix / Linux',
      duration: '3 Months',
      level: 'intermediate',
      rating: 4.5,
      students: 800,
      description: 'Master SAP modules and Unix/Linux system administration',
      price: 34999,
      icon: 'fas fa-server',
      showSyllabus: false,
      syllabus: [
        { module: 'Unix/Linux Basics', topics: ['Commands', 'File System', 'Permissions', 'Shell Scripting'] },
        { module: 'System Admin', topics: ['User Management', 'Process Management', 'Networking', 'Security'] },
        { module: 'SAP Basics', topics: ['SAP Overview', 'Navigation', 'Modules', 'Configuration'] },
        { module: 'SAP Advanced', topics: ['ABAP', 'Customization', 'Integration', 'Best Practices'] }
      ]
    },
    {
      title: 'Java Programming',
      duration: '4 Months',
      level: 'beginner',
      rating: 4.7,
      students: 2000,
      description: 'Learn Java from basics to advanced with Spring Boot framework',
      price: 32999,
      icon: 'fab fa-java',
      showSyllabus: false,
      syllabus: [
        { module: 'Java Basics', topics: ['Syntax', 'OOP', 'Collections', 'Exception Handling'] },
        { module: 'Advanced Java', topics: ['Multithreading', 'JDBC', 'Servlets', 'JSP'] },
        { module: 'Spring Framework', topics: ['Spring Core', 'Spring MVC', 'Spring Boot', 'REST APIs'] },
        { module: 'Microservices', topics: ['Spring Cloud', 'Docker', 'Kubernetes', 'Deployment'] }
      ]
    },
    {
      title: 'Python Programming',
      duration: '3 Months',
      level: 'beginner',
      rating: 4.9,
      students: 2200,
      description: 'Master Python programming from basics to advanced applications',
      price: 27999,
      icon: 'fab fa-python',
      showSyllabus: false,
      syllabus: [
        { module: 'Python Basics', topics: ['Syntax', 'Data Types', 'Control Flow', 'Functions'] },
        { module: 'Advanced Python', topics: ['OOP', 'Modules', 'File Handling', 'Exception Handling'] },
        { module: 'Libraries', topics: ['NumPy', 'Pandas', 'Matplotlib', 'Requests'] },
        { module: 'Web & Automation', topics: ['Django', 'Flask', 'Web Scraping', 'Automation'] }
      ]
    },
    {
      title: 'AI / ML / Power BI',
      duration: '5 Months',
      level: 'advanced',
      rating: 4.9,
      students: 1600,
      description: 'Learn Artificial Intelligence, Machine Learning, and Power BI analytics',
      price: 54999,
      icon: 'fas fa-brain',
      showSyllabus: false,
      syllabus: [
        { module: 'AI Fundamentals', topics: ['AI Concepts', 'Neural Networks', 'Deep Learning', 'NLP'] },
        { module: 'Machine Learning', topics: ['Supervised Learning', 'Unsupervised Learning', 'Algorithms', 'Model Training'] },
        { module: 'Power BI', topics: ['Data Visualization', 'DAX', 'Reports', 'Dashboards'] },
        { module: 'Projects', topics: ['Real-world Projects', 'Deployment', 'MLOps', 'Best Practices'] }
      ]
    },
    {
      title: 'Data Science',
      duration: '6 Months',
      level: 'advanced',
      rating: 4.8,
      students: 1400,
      description: 'Complete data science with Python, ML, statistics, and visualization',
      price: 49999,
      icon: 'fas fa-chart-line',
      showSyllabus: false,
      syllabus: [
        { module: 'Statistics', topics: ['Descriptive Stats', 'Probability', 'Hypothesis Testing', 'Regression'] },
        { module: 'Python for DS', topics: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] },
        { module: 'Machine Learning', topics: ['Algorithms', 'Model Selection', 'Feature Engineering', 'Evaluation'] },
        { module: 'Big Data', topics: ['Hadoop', 'Spark', 'SQL', 'Data Pipelines'] }
      ]
    },
    {
      title: 'HTML/CSS',
      duration: '2 Months',
      level: 'beginner',
      rating: 4.6,
      students: 2500,
      description: 'Learn web design fundamentals with HTML5 and CSS3',
      price: 14999,
      icon: 'fab fa-html5',
      showSyllabus: false,
      syllabus: [
        { module: 'HTML Basics', topics: ['Tags', 'Elements', 'Attributes', 'Forms', 'Semantic HTML'] },
        { module: 'CSS Basics', topics: ['Selectors', 'Properties', 'Box Model', 'Colors', 'Typography'] },
        { module: 'CSS Advanced', topics: ['Flexbox', 'Grid', 'Animations', 'Transitions', 'Transforms'] },
        { module: 'Responsive Design', topics: ['Media Queries', 'Mobile First', 'Bootstrap', 'Best Practices'] }
      ]
    },
    {
      title: 'React Development',
      duration: '3 Months',
      level: 'intermediate',
      rating: 4.8,
      students: 1900,
      description: 'Master React.js for building modern web applications',
      price: 29999,
      icon: 'fab fa-react',
      showSyllabus: false,
      syllabus: [
        { module: 'React Basics', topics: ['Components', 'JSX', 'Props', 'State'] },
        { module: 'React Hooks', topics: ['useState', 'useEffect', 'useContext', 'Custom Hooks'] },
        { module: 'State Management', topics: ['Redux', 'Context API', 'Redux Toolkit', 'Middleware'] },
        { module: 'Advanced Topics', topics: ['React Router', 'Performance', 'Testing', 'Deployment'] }
      ]
    },
    {
      title: 'Angular Development',
      duration: '3 Months',
      level: 'intermediate',
      rating: 4.7,
      students: 1300,
      description: 'Build enterprise applications with Angular framework',
      price: 32999,
      icon: 'fab fa-angular',
      showSyllabus: false,
      syllabus: [
        { module: 'Angular Basics', topics: ['Components', 'Templates', 'Directives', 'Services'] },
        { module: 'Routing & Forms', topics: ['Router', 'Reactive Forms', 'Template Forms', 'Validation'] },
        { module: 'State Management', topics: ['RxJS', 'Observables', 'NgRx', 'State Patterns'] },
        { module: 'Advanced', topics: ['HTTP Client', 'Interceptors', 'Guards', 'Testing'] }
      ]
    },
    {
      title: 'Node.js Development',
      duration: '3 Months',
      level: 'intermediate',
      rating: 4.7,
      students: 1600,
      description: 'Master backend development with Node.js and Express',
      price: 29999,
      icon: 'fab fa-node-js',
      showSyllabus: false,
      syllabus: [
        { module: 'Node.js Basics', topics: ['Core Modules', 'NPM', 'Event Loop', 'Async Programming'] },
        { module: 'Express.js', topics: ['Routing', 'Middleware', 'REST APIs', 'Error Handling'] },
        { module: 'Database', topics: ['MongoDB', 'Mongoose', 'SQL', 'ORMs'] },
        { module: 'Authentication', topics: ['JWT', 'OAuth', 'Sessions', 'Security'] }
      ]
    },
    {
      title: 'Software Testing',
      duration: '3 Months',
      level: 'beginner',
      rating: 4.6,
      students: 1100,
      description: 'Learn manual and automation testing with Selenium and tools',
      price: 24999,
      icon: 'fas fa-vial',
      showSyllabus: false,
      syllabus: [
        { module: 'Testing Basics', topics: ['SDLC', 'STLC', 'Test Cases', 'Bug Reporting'] },
        { module: 'Manual Testing', topics: ['Functional Testing', 'Regression', 'UAT', 'Test Plans'] },
        { module: 'Automation', topics: ['Selenium', 'WebDriver', 'TestNG', 'Frameworks'] },
        { module: 'Advanced Tools', topics: ['JMeter', 'Postman', 'CI/CD', 'API Testing'] }
      ]
    },
    {
      title: 'Cybersecurity',
      duration: '4 Months',
      level: 'advanced',
      rating: 4.8,
      students: 950,
      description: 'Learn ethical hacking, network security, and cybersecurity practices',
      price: 44999,
      icon: 'fas fa-shield-alt',
      showSyllabus: false,
      syllabus: [
        { module: 'Security Basics', topics: ['CIA Triad', 'Threats', 'Vulnerabilities', 'Risk Management'] },
        { module: 'Network Security', topics: ['Firewalls', 'VPN', 'IDS/IPS', 'Network Protocols'] },
        { module: 'Ethical Hacking', topics: ['Penetration Testing', 'Kali Linux', 'Exploitation', 'Tools'] },
        { module: 'Advanced Security', topics: ['Cryptography', 'Malware Analysis', 'Incident Response', 'Compliance'] }
      ]
    },
    {
      title: 'Azure / AWS / Cloud',
      duration: '3 Months',
      level: 'intermediate',
      rating: 4.7,
      students: 1250,
      description: 'Master cloud computing with Azure, AWS, and Google Cloud',
      price: 39999,
      icon: 'fas fa-cloud',
      showSyllabus: false,
      syllabus: [
        { module: 'Cloud Fundamentals', topics: ['Cloud Concepts', 'Service Models', 'Deployment Models', 'Benefits'] },
        { module: 'AWS', topics: ['EC2', 'S3', 'RDS', 'Lambda', 'IAM'] },
        { module: 'Azure', topics: ['Virtual Machines', 'Storage', 'App Services', 'Functions'] },
        { module: 'DevOps & Cloud', topics: ['Terraform', 'CloudFormation', 'Monitoring', 'Cost Optimization'] }
      ]
    },
    {
      title: 'Digital Marketing',
      duration: '3 Months',
      level: 'beginner',
      rating: 4.5,
      students: 1400,
      description: 'Learn SEO, SEM, social media marketing, and digital strategies',
      price: 22999,
      icon: 'fas fa-bullhorn',
      showSyllabus: false,
      syllabus: [
        { module: 'Digital Marketing Basics', topics: ['Overview', 'Strategies', 'Channels', 'Metrics'] },
        { module: 'SEO', topics: ['On-page SEO', 'Off-page SEO', 'Keywords', 'Analytics'] },
        { module: 'Social Media', topics: ['Facebook', 'Instagram', 'LinkedIn', 'Content Strategy'] },
        { module: 'Paid Marketing', topics: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'ROI'] }
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

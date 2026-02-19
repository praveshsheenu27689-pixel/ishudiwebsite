import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO' },
    { name: 'Priya Sharma', role: 'Head of Training' },
    { name: 'Amit Patel', role: 'Lead Instructor' },
    { name: 'Sneha Reddy', role: 'Placement Head' }
  ];
}

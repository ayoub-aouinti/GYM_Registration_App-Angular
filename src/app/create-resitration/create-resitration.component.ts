import { Component } from '@angular/core';

@Component({
  selector: 'app-create-resitration',
  templateUrl: './create-resitration.component.html',
  styleUrls: ['./create-resitration.component.scss']
})
export class CreateResitrationComponent {
  public packages = ["Monthly","Quarterly","Yearly"];
  public genders = ["Male","Female"];
  public importantList: string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Muscle",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ]
}

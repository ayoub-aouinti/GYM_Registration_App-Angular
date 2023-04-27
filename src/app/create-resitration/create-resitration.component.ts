import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  ];
  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      gender: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: ['']
    });
  }
  submit(){
    console.log(this.registerForm.valid)
  }
}

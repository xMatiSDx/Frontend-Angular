import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Experiences } from 'exp';
import { ExperienceService } from 'src/app/services/experience-service.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  @Output() onAddExp: EventEmitter<Experiences> = new EventEmitter;
  @Output() onToggleAddExp = new EventEmitter;
  img: string = '../../../../assets/images/explogos/add.png';
  showAddExp: boolean = false
  subscription?: Subscription;
  experiences: Experiences[] = [];

  // addForm = new FormGroup({
  //   logo: new FormControl('', [Validators.required]),
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   date: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   employment: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // });


  // get logo(): any {
  //   return this.addForm.get('logo')!.value;
  // }

  // get name(): any {
  //   return this.addForm.get('name')!.value;
  // }

  // get date(): any {
  //   return this.addForm.get('date')!.value;
  // }
  // get employment(): any {
  //   return this.addForm.get('employment')!.value;
  // }
  // get description(): any {
  //   return this.addForm.get('description')!.value;
  // }
  
  addForm: FormGroup;

  constructor(private info: ExperienceService, public fb: FormBuilder) { 
      this.subscription = this.info.onToggle().subscribe(value => this.showAddExp = value)
      this.addForm = this.fb.group({
        logo: [''],
        name: [''],
        date: [''],
        employment: [''],
        description: [''],
       })
    }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.addForm.get('name')!.value) {
      alert("Please add a Experience!");
      return
    }  
     const newExp = this.addForm.value;
     this.onAddExp.emit(newExp);
     console.log(newExp);
    // this.info.addExp(newExp).subscribe((newExp)=>(this.experiences.push(newExp)))
     // add all controls you want to update after http response
      // var formData: any = new FormData();
      // formData.append("logo", this.addForm.get('logo')!.value);
      // formData.append("name", this.addForm.get('name')!.value);
      // formData.append("date", this.addForm.get('date')!.value);
      // formData.append("employment", this.addForm.get('employment')!.value);
      // formData.append("description", this.addForm.get('description')!.value);
      // // this.http.post('http://localhost:3000/exp', formData, httpOptions)
      // console.log(formData.value)
  }

   
  imageUpload() {
    document.getElementById('logo')?.click();
  }

  toggleAddExp() {
    this.onToggleAddExp.emit();
    this.img = "../../../../assets/images/explogos/add.png";
  }

  onFileChange(event:any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.img = reader.result as string;
      };
    
    }
  }

}

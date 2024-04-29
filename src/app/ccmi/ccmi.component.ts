import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-ccmi',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ccmi.component.html',
  styleUrl: './ccmi.component.css'
})
export class CCMIComponent {

}
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ccmi',
  templateUrl: 'ccmi.component.html',
  styleUrls: ['./ccmi.component.css']
})

export class CCMIComponent  {

  constructor() { }
 /*implements OnInit
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const allCards = document.querySelectorAll('.swiper-slide');
      const searchInput = document.getElementById('searchInput');

      if (!searchInput) {
        return; // Si el elemento searchInput no existe, salir del método
      }

      searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.trim().toLowerCase();

        allCards.forEach((card: Element) => {
          const name = (card.querySelector('.name') as HTMLElement).textContent.toLowerCase();
          const cardWrapper = card.closest('.swiper-slide') as HTMLElement;
          const regex = new RegExp(searchValue, 'i'); // 'i' flag for case insensitive search

          if (regex.test(name) || searchValue === '') {
            cardWrapper.style.display = 'block';
          } else {
            cardWrapper.style.display = 'none';
          }
        });
      });
    });
  }


*/
}


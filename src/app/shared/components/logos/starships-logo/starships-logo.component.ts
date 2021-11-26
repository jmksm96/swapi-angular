import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from 'src/app/core/models/starship';
import { StarshipsService } from 'src/app/core/services/starships.service';

@Component({
  selector: 'app-starships-logo',
  templateUrl: './starships-logo.component.html',
  styleUrls: ['./starships-logo.component.scss'],
})
export class StarshipsLogoComponent implements OnInit {
  @Input() id!: number;
  starship!: Starship;

  get img() {
    return `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;
  }

  constructor(
    private route: Router,
    private starshipsService: StarshipsService
  ) {}

  ngOnInit(): void {
    this.getStarshipInfo(this.id);
  }

  getStarshipInfo(id: number) {
    this.starshipsService.getStarship(id).subscribe((res) => {
      this.starship = new Starship(res);
    });
  }
}

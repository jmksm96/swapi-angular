import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from 'src/app/core/models/planet';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  selector: 'app-planets-logo',
  templateUrl: './planets-logo.component.html',
  styleUrls: ['./planets-logo.component.scss'],
})
export class PlanetsLogoComponent implements OnInit {
  @Input() id!: number;
  planet!: Planet;

  get img() {
    return `https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`;
  }

  constructor(private route: Router, private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.getCharacterInfo(this.id);
  }

  getCharacterInfo(id: number) {
    this.planetsService.getPlanet(id).subscribe((res) => {
      this.planet = new Planet(res);
    });
  }
}

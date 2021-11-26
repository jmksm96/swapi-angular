import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeciesItem } from 'src/app/core/models/species';
import { SpeciesService } from 'src/app/core/services/species.service';

@Component({
  selector: 'app-species-logo',
  templateUrl: './species-logo.component.html',
  styleUrls: ['./species-logo.component.scss'],
})
export class PlanetsLogoComponent implements OnInit {
  @Input() id!: number;
  species!: SpeciesItem;

  get img() {
    return `https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`;
  }

  constructor(private route: Router, private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.getCharacterInfo(this.id);
  }

  getCharacterInfo(id: number) {
    this.speciesService.getSpeciesItem(id).subscribe((res) => {
      this.species = new SpeciesItem(res);
    });
  }
}

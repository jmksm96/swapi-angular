import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setID } from 'src/app/core/helpers/set-id';
import { Planet } from 'src/app/core/models/planet';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss'],
})
export class PlanetItemComponent implements OnInit {
  data!: Planet;
  id!: string;
  residentId!: number[];

  get img() {
    return `https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`;
  }

  constructor(
    private planetsService: PlanetsService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res) => {
      this.getPlanetDetails(res.id);
    });
  }

  getPlanetDetails(id: number) {
    this.planetsService.getPlanet(id).subscribe((res) => {
      this.data = new Planet(res);
      this.setResidentID();
    });
  }

  setResidentID() {
    this.residentId = this.data.residents.map((res) => setID(res));
  }
}

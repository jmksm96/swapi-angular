import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setID } from 'src/app/core/helpers/set-id';
import { Planet } from 'src/app/core/models/planet';
import { ImageService } from 'src/app/core/services/image.service';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss'],
})
export class PlanetItemComponent implements OnInit {
  data!: Planet;
  id!: string;
  residentId!: number[];
  img!: string | ArrayBuffer | null;

  get placeholder() {
    return `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;
  }

  constructor(
    private planetsService: PlanetsService,
    private activateRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res) => {
      this.getPlanetDetails(res.id);
      this.imageService.getImg(res.id, 'planets').subscribe(
        (res: any) => {
          this.createImageFromBlob(res);
        },
        (error) => {
          this.imageService
            .getPlaceholder()
            .subscribe((res) => this.createImageFromBlob(res));
        }
      );
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

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.img = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}

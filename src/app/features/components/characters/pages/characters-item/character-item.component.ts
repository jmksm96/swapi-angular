import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, map } from 'rxjs/operators';
import { setID } from 'src/app/core/helpers/set-id';
import { Character } from 'src/app/core/models/character';
import { Film } from 'src/app/core/models/film';
import { Starship } from 'src/app/core/models/starship';
import { Vehicle } from 'src/app/core/models/vehicle';
import { CharactersService } from 'src/app/core/services/characters.service';
import { FilmsService } from 'src/app/core/services/films.service';
import { ImageService } from 'src/app/core/services/image.service';
import { StarshipsService } from 'src/app/core/services/starships.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-character',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharactersItemComponent implements OnInit {
  data!: Character;
  id!: string;
  isLoading!: boolean;
  homeworldId!: number;
  vehiclesId!: number[];
  filmsId!: number[];
  starshipsId!: number[];
  films?: Film[] = [];
  starships?: Starship[] = [];
  vehicles?: Vehicle[] = [];
  img!: string | ArrayBuffer | null;

  constructor(
    private charactersService: CharactersService,
    private filmsService: FilmsService,
    private starshipsService: StarshipsService,
    private vehiclesService: VehiclesService,
    private activateRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res) => {
      this.getCharacterInfo(res.id);
      this.getImg(+res.id, 'characters');
    });
  }

  getImg(id: number, category: string) {
    this.imageService.getImg(id, category).subscribe(
      (res: Blob) => {
        this.createImageFromBlob(res);
      },
      (error) => {
        this.imageService
          .getPlaceholder()
          .subscribe((res) => this.createImageFromBlob(res));
      }
    );
  }

  getElements(externalID?: number[]) {
    switch (externalID) {
      case this.filmsId:
        externalID.forEach((id) => {
          this.filmsService
            .getFilm(id)
            .pipe(map((i) => ({ ...i, id: id })))
            .subscribe((res) => {
              this.films!.push(new Film(res));
            });
        });
        break;

      case this.vehiclesId:
        externalID.forEach((id) => {
          this.vehiclesService
            .getVehicle(id)
            .pipe(map((i) => ({ ...i, id: id })))
            .subscribe((res) => {
              this.vehicles!.push(new Vehicle(res));
            });
        });
        break;

      case this.starshipsId:
        externalID.forEach((id) => {
          this.starshipsService
            .getStarship(id)
            .pipe(map((i) => ({ ...i, id: id })))
            .subscribe((res) => {
              this.starships!.push(new Starship(res));
            });
        });
        break;

      default:
        break;
    }
  }

  getCharacterInfo(id: string) {
    this.isLoading = true;
    this.charactersService
      .getCharacter(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.data = new Character(res);
        this.idHandler();
        this.getElements(this.filmsId);
        this.getElements(this.vehiclesId);
        this.getElements(this.starshipsId);
      });
  }

  idHandler() {
    this.homeworldId = setID(this.data.homeworld);
    this.filmsId = this.data.films.map((res) => setID(res));
    this.vehiclesId = this.data.vehicles.map((res) => setID(res));
    this.starshipsId = this.data.starships.map((res) => setID(res));
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

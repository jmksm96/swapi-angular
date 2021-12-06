import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { setID } from 'src/app/core/helpers/set-id';
import { Character } from 'src/app/core/models/character';
import { FilmResponse } from 'src/app/core/models/film';
import { CharactersService } from 'src/app/core/services/characters.service';
import { FilmsService } from 'src/app/core/services/films.service';
import { ImageService } from 'src/app/core/services/image.service';

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
  films?: FilmResponse[] = [];
  filmsId!: number[];
  starshipsId!: number[];
  message!: string;
  img!: string | ArrayBuffer | null;

  constructor(
    private charactersService: CharactersService,
    private filmsService: FilmsService,
    private activateRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res) => {
      this.getCharacterInfo(res.id);
      this.imageService.getImg(res.id, 'characters').subscribe(
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

  getElements(externalID?: number[]) {
    switch (externalID) {
      case this.filmsId:
        externalID.forEach((id) => {
          this.filmsService.getFilm(id).subscribe((res) => {
            this.films!.push(res);
          });
        });
        break;

      case this.filmsId:
        externalID.forEach((id) => {
          this.filmsService.getFilm(id).subscribe((res) => {
            this.films!.push(res);
          });
        });
        break;

      case this.filmsId:
        externalID.forEach((id) => {
          this.filmsService.getFilm(id).subscribe((res) => {
            this.films!.push(res);
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

    // console.log(this.films);

    this.contentChecker(this.filmsId);
    this.contentChecker(this.vehiclesId);
    this.contentChecker(this.starshipsId);
  }

  contentChecker(id: number[]) {
    if (id.length <= 0) {
      this.message = 'No related content';
    }
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

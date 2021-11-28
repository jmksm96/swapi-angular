import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { setID } from 'src/app/core/helpers/set-id';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters.service';
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
  filmsId!: number[];
  starshipsId!: number[];
  message!: string;
  img!: string | ArrayBuffer | null;

  get placeholder() {
    return `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;
  }

  constructor(
    private charactersService: CharactersService,
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

  getCharacterInfo(id: string) {
    this.isLoading = true;
    this.charactersService
      .getCharacter(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.data = new Character(res);
        this.idHandler();
      });
  }

  idHandler() {
    this.homeworldId = setID(this.data.homeworld);
    this.filmsId = this.data.films.map((res) => setID(res));
    this.vehiclesId = this.data.vehicles.map((res) => setID(res));
    this.starshipsId = this.data.starships.map((res) => setID(res));
    this.contentChecker(this.starshipsId);
    this.contentChecker(this.filmsId);
    this.contentChecker(this.vehiclesId);
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

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Observable} from 'rxjs/Observable';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { DataService } from '../common/data.service';

@Injectable()
export class PostService extends DataService{

  constructor( http : Http) {
    super("https://jsonplaceholder.typicode.com/posts",http);
   }

}

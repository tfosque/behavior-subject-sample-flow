import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from '../models/tutorial.model';
import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';


export class TutorialStateModel {
  tutorials: Tutorial[];

}


@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})
export class TutorialState {

}

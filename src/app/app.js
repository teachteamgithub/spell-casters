import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { WordsService, WordsDatasetCtrlState, WordsDatasetCtrl, WordsDatasetCtrlName } from './words_dataset';
import { InstructionsCtrlState, InstructionsCtrl, InstructionsCtrlName } from './instructions';
import { TimerCtrlState, TimerCtrlName, TimerCtrl } from './timer';
import { DefaultCtrlState, DefaultCtrlName, DefaultCtrl } from './default';
import '../style/app.css';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider,$urlRouterProvider) => {
    $stateProvider
      .state('active-game', WordsDatasetCtrlState)
      .state('timer', TimerCtrlState)
      .state('splash',DefaultCtrlState)
      .state('instructions',InstructionsCtrlState)

    $urlRouterProvider.otherwise('/')
  })
  .directive('app', app)
  .service('WordsService', WordsService)
  .controller('AppCtrl', AppCtrl)
  .controller(DefaultCtrlName, DefaultCtrl)
  .controller(WordsDatasetCtrlName, WordsDatasetCtrl)
  .controller(TimerCtrlName, TimerCtrl)
  .controller(InstructionsCtrlName, InstructionsCtrl)


export default MODULE_NAME;
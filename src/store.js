import {action, computed, observable} from 'mobx';

export default class State {
  @observable work = [];
  @action
      .bound updateWork(i, value) {
    this.work[i] = value;
  }
  @observable thumbnails = [];
  @action
      .bound updateThumbnail(i, thumbnail) {
    this.thumbnails[i] = thumbnail;
  }
}

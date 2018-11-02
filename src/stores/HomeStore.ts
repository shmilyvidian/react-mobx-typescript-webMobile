import { action, observable } from 'mobx';

export class HomeStore {
  @observable public name: string = 'mobile';
  @action public setNewQuertParams(params: string) {
    this.name = params;
  }

}
export default new HomeStore
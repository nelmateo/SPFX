import * as ko from 'knockout';
import styles from './WpKnockout.module.scss';
import { IWpKnockoutWebPartProps } from './WpKnockoutWebPart';

export interface IWpKnockoutBindingContext extends IWpKnockoutWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class WpKnockoutViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public wpKnockoutClass: string = styles.wpKnockout;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IWpKnockoutBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}

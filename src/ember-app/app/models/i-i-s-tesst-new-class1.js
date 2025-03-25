import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-tesst-new-class1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NewClass1Mixin, Validations, {
});

export default Model;

import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTesstNewClass1LForm from './forms/i-i-s-tesst-new-class1-l';
import IISTesstNewClass1EForm from './forms/i-i-s-tesst-new-class1-e';
import IISTesstNewClass1Model from './models/i-i-s-tesst-new-class1';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tesst-new-class1': IISTesstNewClass1Model,
  },

  'application-name': 'Tesst',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Tesst',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Tesst',
          title: 'Tesst',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        tesst: {
          caption: 'Tesst',
          title: 'Tesst',
          'i-i-s-tesst-new-class1-l': {
            caption: 'New class1',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-tesst-new-class1-l': IISTesstNewClass1LForm,
    'i-i-s-tesst-new-class1-e': IISTesstNewClass1EForm,
  },

});

export default translations;

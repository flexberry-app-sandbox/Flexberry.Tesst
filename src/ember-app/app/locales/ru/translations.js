import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
      },

      footer: {
        'application-name': 'Tesst',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Tesst',
          title: 'Tesst',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
    },
    'i-i-s-tesst-new-class1-l': IISTesstNewClass1LForm,
    'i-i-s-tesst-new-class1-e': IISTesstNewClass1EForm,
  },

});

export default translations;

import * as LANGUAGES from "constants/languages"

import _en from './en.json'
import _es from './es.json'
import _fr from './fr.json'
import _zh from './zh.json'

const files = {
    en: _en,
    fr: _fr,
    es: _es,
    zh: _zh
}

/**
 * 
 * option {C} -  capitalize 
 * option {U} -  uppercase 
 * option {L} -  lowercase 
 */

export default function(phrase, count = 1, options = '') {
  const current_language = getLanguage()
  const language = current_language ? current_language : LANGUAGES.ENGLISH

  let translated = files[language] && files[language][phrase] ?
      count > 1 ?
        files[language][phrase + '_plural'] : files[language][phrase]
    : phrase

  switch(options) {
    case 'C': translated = capitalize(translated)
      break;
    case 'U': translated = uppercase(translated)
      break;
    case 'L': translated = lowercase(translated)
      break;
    default: break;
  }

  return translated
}

export function setLanguage(newLang) {
  localStorage.setItem('lang', newLang)
}

export function getLanguage() {
  return localStorage.getItem('lang')
}

// TEXT TRANSFORMS

export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function uppercase(s) {
  if (typeof s !== 'string') return ''
  return s.toUpperCase()
}

export function lowercase(s) {
  if (typeof s !== 'string') return ''
  return s.toLowerCase()
}



/**
 * ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 * █ ▄▀▄ █▀▄▄▀█▀▄▄▀█ ▄▄▀█ ██ ██ █
 * █ █▄█ █ ██ █ ██ █ ██ █ ██ ▀▀ █
 * █▄███▄██▄▄███▄▄██▄██▄█▄▄█▀▀▀▄█
 * ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
 */
import { bindGlobalEvents } from './events';

export * from '@preact/signals-core';
export { createElement, ElementProps } from './element';
export { render, prerender } from './render';
export * from './components/index';
export * from './router/index';

bindGlobalEvents();

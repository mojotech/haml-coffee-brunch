'use strict';

const hamlc = require('haml-coffee');
const sysPath = require('path');

class HamlCoffeeCompiler {
  constructor(config) {
    if (!config) config = {};
    const options = config.plugins && config.plugins.hamlCoffee || {};
    const opts = Object.keys(options).reduce((obj, key) => {
      if ('ignore' !== key) {
        obj[key] = options[key];
      }
      return obj;
    }, {});

    if (!opts.namespace) opts.namespace = 'window.JST';

    this.options = opts;
  }

  compile(params) {
    if (!params) params = {};

    this.options.filename = params.path;
    this.options.name = sysPath.basename(params.path);

    return new Promise((resolve, reject) => {
      try {
        const template = hamlc.template(params.data, this.options.name, 'window.JST');
        resolve(template);
      } catch (error) {
        reject(error);
      }
    });
  }

  compileStatic(params) {
    if (!params) params = {};

    this.options.filename = params.path;
    this.options.name = sysPath.basename(params.path);

    return new Promise((resolve, reject) => {
      let template;

      try {
        template = hamlc.template(params.data, this.options.name, 'window.JST');
        resolve(template);
      } catch (error) {
        reject(error);
      }
    });
  }
}

HamlCoffeeCompiler.prototype.brunchPlugin = true;
HamlCoffeeCompiler.prototype.type = 'template';
HamlCoffeeCompiler.prototype.extension = 'hamlc';
HamlCoffeeCompiler.prototype.staticExtension = 'hamlc';
HamlCoffeeCompiler.prototype.staticTargetExtension = 'jst';

module.exports = HamlCoffeeCompiler;

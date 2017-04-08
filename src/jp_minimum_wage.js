let JP_MINIMUM_WAGE_CACHE;
class JpMinimumWage {
  
  static get version() {
    return '0.0.1';
  }

  static get URL() {
    return 'http://takaya1992.com/jp_minimum_wage_data/minimum_wage.jsonp';
  }

  jsonp(callback) {
    window['$jpMinimumWageCallback'] = data => callback(data);
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', JpMinimumWage.URL);
    document.head.appendChild(script);
  }

  getData(callback) {
    if (JP_MINIMUM_WAGE_CACHE) {
      callback(JP_MINIMUM_WAGE_CACHE);
    } else {
      this.jsonp(data => {
        JP_MINIMUM_WAGE_CACHE = data;
        callback(data);
      });
    }
  }

  static findByName(name, callback) {
    let jpMinimumWage = new JpMinimumWage();
    jpMinimumWage.getData(data => {
      const minimumWage = data.minimum_wages.find(elm => elm.prefecture_name === name);
      callback(minimumWage);
    });
  }

  static findByCode(code, callback) {
    let jpMinimumWage = new JpMinimumWage();
    jpMinimumWage.getData(data => {
      const minimumWage = data.minimum_wages.find(elm => elm.prefecture_code === code);
      callback(minimumWage);
    });
  }

  static all(callback) {
    let jpMinimumWage = new JpMinimumWage();
    jpMinimumWage.getData(data => {
      callback(data.minimum_wages);
    });
  }
}

module.exports = JpMinimumWage;

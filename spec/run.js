import Jasmine from 'jasmine';

const jasmine = new Jasmine();
const Reporter = require('jasmine-console-reporter');
jasmine.jasmine.getEnv().addReporter(new Reporter());
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();

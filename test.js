const assert = require('assert');

const {validate} = require('./validate');
const {barSchema, barObj, barObjF} = require('./examples/bars');
const {carSchema, carObj, carObjF} = require('./examples/cars');
const {personSchema, personObj, personObjF} = require('./examples/persons');

test('validate(barSchema, barObj)', () => {
  assert(validate(barSchema, barObj) === true);
});

test('validate(barSchema, barObjF)', () => {
  assert(validate(barSchema, barObjF) === false);
});

test('validate(carSchema, carObj)', () => {
  assert(validate(carSchema, carObj) === true);
});

test('validate(carSchema, carObjF)', () => {
  assert(validate(carSchema, carObjF) === false);
});

test('validate(personSchema, personObj)', () => {
  assert(validate(personSchema, personObj) === true);
});

test('validate(personSchema, personObjF)', () => {
  assert(validate(personSchema, personObjF) === false);
});

function test(testName, testFn) {
  const stdoutStub = createStdoutStub();
  const stdoutWrite = process.stdout.write.bind(process.stdout);

  stdoutWrite(testName + ': ');
  try {
    stdoutStub.capture();
    testFn();
    stdoutWrite('OK.\n');
  } catch (e) {
    stdoutWrite('FAILED.\n');
  }
  stdoutStub.release();
}

function createStdoutStub() {
  let stdout;
  const stdoutWrite = process.stdout.write;

  return {
    capture() {
      stdout = [];
      process.stdout.write = s => {
        stdout.push(s);
      };
    },
    release() {
      process.stdout.write = stdoutWrite;
      stdout.forEach(s => process.stdout.write(s));
    }
  }
}

import {readFileSync} from 'node:fs';
import isPlainObject from 'npm:lodash.isplainobject';

export function init(filepath: string) {
  const data = readFileSync(filepath, 'utf8');
  console.log({data, isData: isPlainObject(data)});
}

export function version() {
  return '0.0.1';
}

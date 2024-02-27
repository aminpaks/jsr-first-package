import {readFileSync} from 'node:fs';
import isPlainObject from 'npm:lodash.isplainobject@4.0.6';

export function init(filepath: string): void {
  const data = readFileSync(filepath, 'utf8');
  console.log({data, isData: isPlainObject(data)});
}

export function version(): string {
  return '0.0.1';
}

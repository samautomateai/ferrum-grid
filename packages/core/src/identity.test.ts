import { expect, test } from 'vitest';
import { validateRowId } from './identity';
test('preserves stable identity', () => expect(validateRowId('a')).toBe('a'));
test('rejects blank identity', () => expect(() => validateRowId(' ')).toThrow());

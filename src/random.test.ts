import { describe, expect, it } from 'vitest';

describe('basic arithmetic check', () => {
    it('1 + 1 equals 2', () => {  
        const sum = 1 + 2;
        expect(sum).toBe(3);
    })

    it('2 * 2 equals 4', () => {
        const sum = 2 * 2;
        expect(sum).toBe(4);
    })
})
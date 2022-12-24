import {Cache} from "../src/cache";

test('get value', () => {
    const testCache =  new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value);
    expect(testCache.get(key)).toBe(value);
});

test('get value 2', ()=> {
    const testCache = new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value, 2);
    expect(testCache.get(key)).toBe(value);
    expect(testCache.getCount(key)).toBe(1);
});

test('cache decreasing', ()=> {
    const testCache = new Cache();

    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value, 2);
    testCache.get(key);
    expect(testCache.getCount(key)).toBe(1);
});

test('cache decreasing 2', ()=> {
    const testCache = new Cache();
    let key = 'tkey';
    let value = 'tvalue';
    testCache.set(key, value, 3);
    testCache.set(key, 10);
    expect(testCache.getCount(key)).toBe(3);
    expect(testCache.get(key)).toBe(10);
});

test('get null value by end cache count', () => {
    const testCache = new Cache();

    testCache.set('tkey', 'tvalue', 0);
    expect(testCache.get('tkey')).toBeNull();
});

test('get value by undefined key', () => {
    const testCache = new Cache();

    let key = 'tkey';
    expect(testCache.get(key)).toBeNull();
});

test('get count by undefined key', () => {
    const testCache = new Cache();

    let key = 'tkey';
    expect(testCache.getCount(key)).toBeNull();
});

test('get statistics', () => {
    const testCache = new Cache();

    let statistics = 'Set key : value. HitsAmount: 1';
    testCache.set('key', 'value');
    testCache.get('key');
    expect(testCache.statistics[0]).toBe(statistics);
});

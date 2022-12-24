class Cache{
    #cache = [];
    statistics = [];
    constructor(){
    }

    maybePop(element){
      if(element.count == 0){
        this.#cache.pop(element);
        this.statistics.push(`Delete ${element.key} : ${element.value} from cache`);
      }
    }

    set(key, value, count=1){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined)
      {
        this.#cache.push({key: key, value: value, count: count});
        console.log(value);
        this.statistics.push(`Set ${key} : ${value}. HitsAmount: ${count}`);
      }
      else {
          hasKey.value = value;
      }
    }

    get(key){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined){
        return null;
      }
      else {
        if(hasKey.count != 0){
          hasKey.count -= 1;
          this.statistics.push(`Get ${key} : ${hasKey.value}. HitsAmount: ${hasKey.count}`);
          this.maybePop(hasKey);
          return hasKey.value;
        }
        else{
          this.maybePop(hasKey);
          return null;
        }
      }
    }
    getCount(key){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined){
        return null;
      }
      else {
        return hasKey.count;
      }
    }
}
export {Cache}

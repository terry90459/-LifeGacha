export function weightedRandom(items,key){

    const total =
        items.reduce(
            (sum,item)=>sum+item[key],
            0
        );

    let random =
        Math.random()*total;

    for(const item of items){

        random -= item[key];

        if(random <= 0){
            return item;
        }
    }

    return items[0];
}
``

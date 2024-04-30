for (item in statistics) {
    if (item[0] == 'r' || statistics[item] % 2 == 1) {
        console.log(item, ": ", statistics[item]);
    }
}
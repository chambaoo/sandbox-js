// 1から3まで順に1秒ごとに数え上げる

function fetchData(callback) {

    setTimeout(() => {
        
        callback(1);     
        
        setTimeout(() => {
            
            callback(2);

            setTimeout(() => {
                
                callback(3);

            }, 1000);

        }, 1000);

    }, 1000);
}

fetchData((num) => {
    console.log(num);
});

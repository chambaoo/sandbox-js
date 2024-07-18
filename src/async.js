// 1から3まで順に1秒ごとに数え上げる

function fetchData(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 1000);
    });
}

async function getData() {
    console.log(await fetchData(1));
    console.log(await fetchData(2));
    console.log(await fetchData(3));
}

getData();

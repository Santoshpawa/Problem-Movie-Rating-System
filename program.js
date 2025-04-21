movie=[
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, ratings: [5, 4, 5, 5] },
    { title: "Titanic", director: "James Cameron", releaseYear: 1997, ratings: [4, 4, 3, 2, 5] },
    { title: "The Matrix", director: "The Wachowskis", releaseYear: 1999, ratings: [5, 5, 5, 5] },
    { title: "Avatar", director: "James Cameron", releaseYear: 2009, ratings: [3, 2, 4, 3] }
  ];

avgRating= movie.map((ele)=>{
    let totalRating=0
    for(let i=0;i<ele.ratings.length;++i){
        totalRating+=ele.ratings[i];
    }
    let avg=totalRating/ele.ratings.length;
    let obj={
        title: ele.title,
        avgRate: avg
    }
    return obj;
})


console.log("Average Ratings:");
avgRating.forEach(ele => {
    console.log(ele.title, ele.avgRate)
});

avgRating.sort((a,b)=> a.avgRate-b.avgRate);
console.log("Movie with Highest Rating:", avgRating[avgRating.length-1].title,avgRating[avgRating.length-1].avgRate);

console.log("Movie with Lowest Rating:", avgRating[0].title,avgRating[0].avgRate);
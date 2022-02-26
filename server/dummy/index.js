const today = new Date();

// const yyyy = today.getFullYear

// res.json({
//   results: [
//     {
//       graph: [
//         {
//           popularity: 28.494,
//           occured_at: today,
//         },
//         {
//           popularity: 32,
//           occured_at: today,
//         },
//         {
//           popularity: 27,
//           occured_at: today,
//         },
//         {
//           popularity: 41,
//           occured_at: today,
//         },
//       ],
//       adult: false,
//       backdrop_path: "/aGxyr5K9B2GdE7W0xov2azHPwsS.jpg",
//       belongs_to_collection: {
//         id: 148065,
//         name: "도라에몽 시리즈",
//         poster_path: "/4TLSP1KD1uAlp2q1rTrc6SFlktX.jpg",
//         backdrop_path: "/rc6OFcSasL5YxBRPUQVwxmVF6h5.jpg",
//       },
//       budget: 46597700,
//       genres: [
//         {
//           id: 35,
//           name: "코미디",
//         },
//         {
//           id: 16,
//           name: "애니메이션",
//         },
//         {
//           id: 10751,
//           name: "가족",
//         },
//         {
//           id: 12,
//           name: "모험",
//         },
//         {
//           id: 878,
//           name: "SF",
//         },
//         {
//           id: 14,
//           name: "판타지",
//         },
//       ],
//       homepage: "http://doraeiga.com/2015/",
//       id: 350650,
//       imdb_id: "tt4788602",
//       original_language: "ja",
//       original_title: "映画ドラえもん のび太の宇宙英雄記",
//       overview:
//         "버거 감독의 도움을 받아 히어로 영화 속 주인공 ‘미라클 은하방위대’가 된 도라에몽과 친구들! 초능력이 생기는 수트를 입고 본격적인 영화 촬영을 하던 중 외계행성 ‘포클별’의 보안관 아론이 우연히 이를 보게 되고, 도라에몽과 친구들을 진짜 영웅이라 여겨 위험에 처한 포클별을 도와달라는 부탁을 하게 되는데…  아론과 함께 우주여행을 떠난 도라에몽과 친구들은 포클별을 위협하는 우주해적단을 무찌르고 진짜 영웅이 될 수 있을 것인가?!",
//       popularity: 28.494,
//       poster_path: "/k6x6zlMZFuCKd28LQkxyeF1mHGT.jpg",
//       production_companies: [
//         {
//           id: 5141,
//           logo_path: "/fK2QKfHdSdw42Xx4MiD7KhDufBV.png",
//           name: "Shin-Ei Animation",
//           origin_country: "JP",
//         },
//       ],
//       production_countries: [
//         {
//           iso_3166_1: "JP",
//           name: "Japan",
//         },
//       ],
//       release_date: "2015-03-07",
//       revenue: 32700000,
//       runtime: 100,
//       spoken_languages: [
//         {
//           english_name: "Japanese",
//           iso_639_1: "ja",
//           name: "日本語",
//         },
//       ],
//       status: "Released",
//       tagline: "극장판 35주년 기념대작! 이번엔 슈퍼히어로 도라에몽이다!",
//       title: "도라에몽: 진구의 우주영웅기~스페이스 히어로즈~",
//       video: false,
//       vote_average: 6.1,
//       vote_count: 47,
//     },
//   ],
// });

// fn_service__GET__now_playing()
//   .then((data__arr) => {
//     console.log(data__arr);

//     if (data__arr instanceof Array && data__arr.length !== 0) {
//       res.json({
//         results: data__arr,
//       });
//     } else {
//       throw Error("array length 0.");
//     }
//   })
//   .catch((err) => {
//     console.log("api/movies/now_playing");
//     console.error(err);
//   });

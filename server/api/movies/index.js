const router = require("express").Router();
const fn_service__GET__now_playing = require("../../service/movies/now_playing");

/**
 * GET
 */
router.get("/now_playing", (req, res) => {
  console.log("Receive: api/movies/now_playing");

  res.json({
    results: [
      {
        id: 1,
        title: "a",
      },
      {
        id: 2,
        title: "b",
      },
      {
        id: 3,
        title: "c",
      },
    ],
  });

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
});

router.get("/upcoming", (req, res) => {
  console.log("Receive: api/movies/upcoming");

  res.json({
    results: ["d", "e", "g"],
  });

  // fn_service__GET__upcoming()
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
});

module.exports = router;

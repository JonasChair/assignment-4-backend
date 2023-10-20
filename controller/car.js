import db from "../db.js";

const GET_ALL_CARS = async (req, res) => {
    try {
      const cars = await db.query("SELECT * from Cars");
      return res.json({ cars: cars.rows });
    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "something went wrong" });
    }
  };

  const GET_CAR_BY_ID = async (req, res) => {
    try {
      const car = await db.query(
        `SELECT * from Cars WHERE id=${req.params.id} `
      );  
      return res.json({ car: car.rows[0] });
    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "something went wrong" });
    }
  };

  const DELETE_CAR = async (req, res) => {
    try {
      const car = await db.query(`DELETE from Cars WHERE id=${req.params.id}`);
      return res.json({ response: car, status: true });
    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "something went wrong" });
    }
  };

  const ADD_CAR = async (req, res) => {
    try {
      const car = await db.query(`INSERT INTO public.cars(
        title, immage, price, number_plates)
        VALUES ('${req.body.title}', '${req.body.image}', ${req.body.price}, '${req.body.numberplates}')`);
      return res.status(201).json({ status: 201, car });
    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "something went wrong" });
    }
  };

  export { GET_ALL_CARS, GET_CAR_BY_ID, DELETE_CAR, ADD_CAR };
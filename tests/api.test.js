const supertest = require("supertest");
const { app, server } = require("../index");

const api = supertest(app);

describe("API index", () => {
  test.skip("response 200 on index api endpoint", async () => {
    await api
      .get("/v1")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("Location", () => {
  test("return location default", async () => {
    await api
      .get("/location")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("Weather", () => {
  test("Weather response 200", async () => {
    await api
      .get("/current/catamarca")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Weather not response 200", async () => {
    await api
      .get("/current")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Forecast on location", async () => {
    await api
      .get("/forecast/catamarca")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  server.close();
});

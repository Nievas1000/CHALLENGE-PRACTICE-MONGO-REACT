const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

beforeAll(async () => {
  const MONGODB_URI =
    "mongodb+srv://test-shawandpartners:test@cluster0.ub7ny08.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/file", () => {
  test("should return a 400 status code when no CSV file is attached", async () => {
    const response = await request(app).post("/api/files");

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("CSV file not found in the request.");
  });
});

describe("GET /api/users", () => {
  test("Should return a 200 status code when searching by query", async () => {
    const searchTerm = "jhon";
    const response = await request(app)
      .get("/api/users")
      .query({ q: searchTerm });

    expect(response.statusCode).toBe(200);
  });
});

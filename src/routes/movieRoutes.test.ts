import request from "supertest";
import app from "../app";
import { initDatabase } from "../database/db";

describe("Test api routes", () => {
 beforeAll(async () => {
  await initDatabase();
 });

 it("Should return 200 and an array of movies", async () => {
  const response = await request(app).get("/api/movies");
  expect(response.status).toBe(200);
  expect(response.body.success).toBeTruthy();
  expect(response.body).toMatchSnapshot();
 });

 it("Should return 200 and a single movie", async () => {
  const response = await request(app).get("/api/movies/1");
  expect(response.status).toBe(200);
  expect(response.body.data).not.toBeNull();
  expect(response.body).toMatchSnapshot();
 });

 it("Should return 404 for a non-existent movie", async () => {
  const response = await request(app).get("/api/movies/999");
  expect(response.status).toBe(404);
  expect(response.body).toMatchSnapshot();
 });

 it("Should return 400 for an invalid movie ID", async () => {
  const response = await request(app).get("/api/movies/invalid-id");
  expect(response.status).toBe(400);
  expect(response.body).toMatchSnapshot();
 });
});

import request from "supertest";
import app from "../app";
import { initDatabase } from "../database/db";

describe("Test award endpoint", () => {
 beforeAll(() => {
  initDatabase();
 });

 it("Should return 200 and an object of awards", async () => {
  const response = await request(app).get("/api/awards");
  expect(response.status).toBe(200);
  expect(Object.keys(response.body).length).toBeGreaterThan(0);
  expect(response.body.success).toBeTruthy();
 });
});

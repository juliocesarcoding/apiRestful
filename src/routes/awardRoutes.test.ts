import request from "supertest";
import app from "../app";
import { initDatabase } from "../database/db";

describe("Test award endpoint", () => {
 beforeAll(async () => {
  await initDatabase();
 });

 it("Should return 200 and an object of awards", async () => {
  const response = await request(app).get("/api/awards");
  expect(response.status).toBe(200);
  expect(response.body).toMatchSnapshot();
 });
 it("Should ");
});

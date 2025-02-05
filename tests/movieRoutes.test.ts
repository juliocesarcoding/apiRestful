import request from "supertest";
import app from "../src/app";

describe("Testes de Integração - Filmes", () => {
 it("Deve retornar todos os filmes", async () => {
  const res = await request(app).get("/api/movies");
  console.log(res.body);
  expect(res.status).toBe(200); // Garante que a API retorna sucesso
  expect(Array.isArray(res.body)).toBeTruthy(); // Confirma que a resposta é um array
  expect(res.body.length).toBeGreaterThan(0); // Garante que há pelo menos um filme na resposta

  // Valida a estrutura do primeiro item
  expect(res.body[0]).toHaveProperty("id", 1);
  expect(res.body[0]).toHaveProperty("year", 1980);
  expect(res.body[0]).toHaveProperty("title", "Can't Stop the Music");
  expect(res.body[0]).toHaveProperty(
   "studios",
   "Associated Film Distribution"
  );
  expect(res.body[0]).toHaveProperty("producers", "Allan Carr");
  expect(res.body[0]).toHaveProperty("winner", 1);
 });
});

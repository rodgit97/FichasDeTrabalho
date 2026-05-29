app.get("/", (req, res) => {
  res.send("Bem-vindo à Biblioteca!");
});

app.get("/livros", (req, res) => {
  const sql = "SELECT * FROM livros";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.get("/livros/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM livros WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/livros/pesquisa", (req, res) => {
  const titulo = req.query.titulo;
  const categoria = req.query.categoria;
  let sql =
    "SELECT * FROM livros WHERE  titulo LIKE CONCAT('%', ?, '%') AND categoria LIKE CONCAT('%', ?, '%')";
  db.query(sql, [titulo || "", categoria || ""], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post("/livros", (req, res) => {
  const { titulo, autor, categoria } = req.body;
  if (!titulo || !autor || !categoria) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  const sql = "INSERT INTO livros (titulo, autor, categoria) VALUES (?, ?, ?)";

  db.query(sql, [titulo, autor, categoria], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, titulo, autor, categoria });
  });
});

module.exports = app;

app.listen(port, () => {
  console.log(`Servidor a correr na porta ${port}`);
});

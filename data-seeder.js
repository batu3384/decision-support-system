const mysql = require("mysql2/promise");
require("dotenv").config();

const connectionConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "fast_express",
};

const requiredTables = [
  "subeler",
  "kullanicilar",
  "personel",
  "kargo",
  "kargo_tip",
  "personel_gider",
];

async function main() {
  let connection;

  try {
    connection = await mysql.createConnection(connectionConfig);

    const [tables] = await connection.query("SHOW TABLES");
    const tableNames = tables.map((row) => Object.values(row)[0]);
    const missingTables = requiredTables.filter((table) => !tableNames.includes(table));

    if (missingTables.length > 0) {
      throw new Error(
        `Eksik tablolar bulundu: ${missingTables.join(", ")}. Orijinal Fast Express SQL şemasını içe aktarın.`
      );
    }

    console.log("Şema doğrulandı. Temel tablolar mevcut.");

    for (const tableName of requiredTables) {
      const [rows] = await connection.query(`SELECT COUNT(*) AS count FROM \`${tableName}\``);
      console.log(`${tableName}: ${rows[0].count} kayıt`);
    }

    console.log(
      "Not: Public repo tam şema oluşturmaz. Bu yardımcı araç, içe aktarılan course veritabanını doğrulamak için tutulur."
    );
  } catch (error) {
    console.error("Veritabanı doğrulaması başarısız:", error.message);
    process.exitCode = 1;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

main();

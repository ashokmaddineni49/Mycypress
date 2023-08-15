const mysql = require('mysql2/promise');
const { expect } = require('chai');

describe('Database Tests', function () {
  let connection;

  before(async function () {
    // Create a database connection
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'vehiclerentingsystem',
    });
  });

 after(async function () {
    // Close the database connection
    await connection.end();
  });

  it('should insert a new user into the database', async function () {
    const [rows] = await connection.execute(
      'INSERT INTO user_details VALUES (?, ?, ?, ?, ?)',
      ['John','Doe', 'john@example.com','test123','XX0123']
    );
    expect(rows.affectedRows).to.equal(1);
  });

   it('should retrieve user data from the database', async function () {
    const [rows] = await connection.execute('SELECT * FROM user_details');
    expect(rows.length).to.be.greaterThan(0);
  });

  it('should update user data in the database', async function () {
    const [rows] = await connection.execute(
      'UPDATE user_details SET email = ? WHERE firstname = ?',
      ['newemail@example.com', 'John']
    );
    expect(rows.affectedRows).to.equal(1);
  });

  it('should delete a user from the database', async function () {
    const [rows] = await connection.execute('DELETE FROM user_details WHERE firstname = ?', [
      'John']);
    expect(rows.affectedRows).to.equal(1);
  });
});

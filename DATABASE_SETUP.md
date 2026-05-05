# Database Setup

This site uses the MySQL script at `../dating__app__games.sql`.

1. Install and start MySQL.
2. Import the SQL script:

   ```powershell
   mysql -u root -p < ..\dating__app__games.sql
   ```

3. Copy `.env.example` to `.env`.
4. Update `.env` if your MySQL username or password is different.
5. Start the app:

   ```powershell
   npm run dev
   ```

The React site runs through Vite and the API server runs on `http://localhost:3001`.

## Login and Signup

The login/signup API stores password hashes in `users.password_hash`.

If you already imported an older copy of the SQL before this column existed, either re-run the full SQL script or run:

```sql
USE dating_app;
ALTER TABLE users ADD COLUMN password_hash VARCHAR(255) AFTER email;
```

The sample users from the SQL file do not have passwords. Create a new account from the Sign Up screen, then use that account to log in.

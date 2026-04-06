/**
 * Run once to set the admin password.
 * Usage: npx tsx scripts/seed-admin.ts
 *
 * This generates a bcrypt hash and prints it.
 * Copy the hash into your ADMIN_PASSWORD_HASH environment variable.
 */
import bcrypt from "bcryptjs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter admin password: ", async (password) => {
  if (!password || password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 12);

  console.log("\n✅ Password hash generated!\n");
  console.log("Add these to your .env.local and Vercel environment variables:\n");
  console.log(`ADMIN_EMAIL=najegs24@gmail.com`);
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log(
    "\nGenerate a random NEXTAUTH_SECRET with:\n  openssl rand -base64 32\n"
  );

  rl.close();
});

import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const { PORT, DB_URL, RAZOR_PAY_API_KEY, RAZOR_PAY_API_SECRET_KEY } =
  process.env;

export { PORT, DB_URL, RAZOR_PAY_API_KEY, RAZOR_PAY_API_SECRET_KEY };

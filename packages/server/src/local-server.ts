import { serve } from "@hono/node-server";
import app from "./routes";

serve(app, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});

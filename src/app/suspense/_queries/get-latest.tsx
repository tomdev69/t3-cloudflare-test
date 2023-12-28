import { api } from "@/trpc/server";

export async function GetLatest() {
  const start = Date.now();
  const duration = Date.now() - start;
  return <div>latest</div>;
}

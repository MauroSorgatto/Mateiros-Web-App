import type { ActionArgs } from "@remix-run/node";
import { logout } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const headers = await logout(request);
  return new Response(undefined, headers);
}

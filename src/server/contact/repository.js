import { getSupabaseServerClient } from "./supabase";

export async function insertContactRequest(request) {
  const { error } = await getSupabaseServerClient().from("contact_requests").insert(request);
  if (error) throw new Error("Contact request persistence failed");
}

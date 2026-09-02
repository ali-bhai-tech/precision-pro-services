/**
 * Placeholder data layer.
 *
 * The whole site currently reads from local files in `src/data/`.
 * When you're ready for a backend, create a real client here and swap the
 * bodies of the functions below — every component already calls through
 * these helpers, so no UI code needs to change.
 *
 * Example (later):
 *   import { createClient } from "@supabase/supabase-js";
 *   export const supabase = createClient(url, anonKey);
 */

import { services as localServices } from "../data/services";
import { testimonials as localTestimonials } from "../data/testimonials";

export const supabase = null; // no backend connected yet

export const isBackendEnabled = () => Boolean(supabase);

export async function getServices() {
  // later: return (await supabase.from("services").select("*")).data
  return localServices;
}

export async function getServiceBySlug(slug) {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}

export async function getTestimonials() {
  // later: return (await supabase.from("testimonials").select("*")).data
  return localTestimonials;
}

export async function submitContactRequest(payload) {
  // later: return supabase.from("contact_requests").insert(payload)
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, data: payload, error: null };
}

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  requested_date date,
  requested_time text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'completed'))
);

alter table public.contact_requests enable row level security;

-- No public policies are created. The server-side service-role client performs
-- inserts and bypasses RLS; visitors cannot read, update, or delete requests.

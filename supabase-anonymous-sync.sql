-- 格格择校工具：免账号家庭云同步初始化
-- 在 Supabase SQL Editor 执行一次；另外请在 Authentication > Providers 中开启 Anonymous。

create or replace function public.provision_shared_workspace()
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  shared_workspace_id uuid := '11111111-1111-4111-8111-111111111111';
  device_user_id uuid := auth.uid();
begin
  if device_user_id is null then
    raise exception 'anonymous authentication is required';
  end if;

  insert into public.family_workspaces (id, name, created_by)
  values (shared_workspace_id, '格格择校工具家庭共享空间', device_user_id)
  on conflict (id) do nothing;

  insert into public.workspace_members (workspace_id, auth_user_id, display_name, role)
  values (shared_workspace_id, device_user_id, '免账号设备', 'member')
  on conflict do nothing;

  return shared_workspace_id;
end;
$$;

revoke all on function public.provision_shared_workspace() from public;
grant execute on function public.provision_shared_workspace() to authenticated;


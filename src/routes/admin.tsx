import { createFileRoute, Outlet } from '@tanstack/react-router';
import {
  Archive,
  BookCheck,
  BriefcaseBusiness,
  Building2,
  Clipboard,
  Home,
  LayoutGrid,
  UserRoundCog,
  Users,
} from 'lucide-react';

import { CompanyBrand } from '#/components/layouts/company-brand';
import { NavMain } from '#/components/layouts/nav-main';
import { NavUser } from '#/components/layouts/nav-user';
import { SiteHeader } from '#/components/layouts/site-header';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from '#/components/ui/sidebar';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
});

const data = {
  user: {
    name: 'Dian Erdiana',
    email: 'admin@dianerdiana.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      label: 'DASHBOARD',
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: <Home />,
        },
      ],
    },
    {
      label: 'PLATFORM',
      items: [
        {
          title: 'Alat Tes',
          url: '/client-tests',
          icon: <BookCheck />,
        },
        {
          title: 'Modul',
          url: '/modules',
          icon: <Clipboard />,
        },
        {
          title: 'Proyek',
          url: '/projects',
          icon: <Archive />,
        },
        {
          title: 'Peserta',
          url: '/participants',
          icon: <Users />,
        },
        {
          title: 'Kumpulan Tes',
          url: '/tests',
          icon: <LayoutGrid />,
          items: [
            {
              title: 'Semua',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      label: 'PENGATURAN',
      items: [
        {
          title: 'User',
          url: '/users',
          icon: <UserRoundCog />,
        },
        {
          title: 'Klien',
          url: '/clients',
          icon: <BriefcaseBusiness />,
        },
        {
          title: 'Perusahaan',
          url: '/companies',
          icon: <Building2 />,
        },
      ],
    },
  ],
};

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar collapsible='icon'>
        <SidebarHeader>
          <CompanyBrand />
        </SidebarHeader>
        <SidebarContent>
          <NavMain groups={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail className='border-destructive' />
      </Sidebar>
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col bg-accent'>
          <div className='@container/main flex flex-1 flex-col gap-2 bg-accent'>
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

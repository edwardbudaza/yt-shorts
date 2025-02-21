import { DashboardProvider } from './_components/_providers/dashboard-provider';

export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | YT Shorts',
  },
  description: 'Manage your account settings and features.',
  robots: 'noindex, nofollow',
  icons: {
    icon: '/logo.svg',
  },
};

const MainLayout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <DashboardProvider>{children}</DashboardProvider>
    </div>
  );
};

export default MainLayout;

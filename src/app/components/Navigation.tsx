import { Link, useLocation } from "react-router";

interface NavItemProps {
  to: string;
  label: string;
  isActive?: boolean;
}

function NavItem({ to, label, isActive }: NavItemProps) {
  return (
    <Link to={to} className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <div className={`flex flex-col font-['Consolas:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1px] uppercase whitespace-nowrap ${isActive ? 'text-[#0f8]' : 'text-[#6b8fa8]'}`}>
        <p className="leading-[18px]">{label}</p>
      </div>
      <div className={`absolute bottom-[-1px] h-px left-[12px] right-[12px] shadow-[0px_0px_12px_0px_rgba(0,255,136,0.15),0px_0px_32px_0px_rgba(0,255,136,0.15)] ${isActive ? 'bg-[#0f8]' : 'bg-[#6b8fa8]'}`} data-name="::after" />
    </Link>
  );
}

export function Navigation() {
  const location = useLocation();
  
  const isShareActive = location.pathname.startsWith('/share');
  const isDownloadActive = location.pathname.startsWith('/download');
  const isCliActive = location.pathname === '/cli';

  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px relative">
      <NavItem to="/share/note" label="share" isActive={isShareActive} />
      <NavItem to="/download" label="Download" isActive={isDownloadActive} />
      <NavItem to="/cli" label="cli" isActive={isCliActive} />
    </div>
  );
}

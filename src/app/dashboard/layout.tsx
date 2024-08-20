
import { IoLogoElectron, IoHome } from 'react-icons/io5';

const layoutName = 'Page'

const user = {
  name: '',
  email: '',
  position: '',
}

const controls = [
  {
    path: '/',
    name: 'home',
    icon: <IoHome size={30} />
  },
]

const menu = [
  {
    name: 'Main',
    path: '/dashboard/main',
    icon: <IoLogoElectron size={40} />,
    title: 'Dashboard',
    subtitle: ''
  },
]

export default function PageDashboardLayout({ children }: { children: React.ReactNode; }) {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex h-screen w-screen`}>

        {/* SECCION: Sidebar */}
        <div className={`flex-none h-screen bg-neutral-700`}>

          <div className=' w-[300px] '>MENU</div>

        </div>

        {/* SECCION: Página */}
        <div className={`flex-1 h-screen overflow-y-auto`}>

          { children }

        </div>

      </div>

    </>

  );
}
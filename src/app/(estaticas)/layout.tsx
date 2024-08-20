import { NavbarComponent } from "@/components/navbar";

export default function StaticPageLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col items-center w-screen h-screen">

          <div className="z-20 w-screen">
           <NavbarComponent/>
          </div>
            
          <div className="p-4 grow overflow-y-auto w-screen">

            { children }

          </div>

          <div className="w-screen">
            FOOTER
          </div>
        
    </div>
  );
}
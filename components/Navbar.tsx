import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-8 py-4  pattern bg-pink-600 font-work-sans sticky top-0 z-50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-transparent opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      <nav className="flex justify-between items-center max-w-7xl mx-auto relative">
        <Link href="/" className="hover:opacity-90 transition-all duration-300 group">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={144} 
            height={30} 
            priority 
            className="hover:scale-[0.98] transition-all group-hover:brightness-110" 
          />
        </Link>

        <div className="flex items-center gap-8 text-white/90">
          {session && session?.user ? (
            <>
              <Link 
                href="/startup/create" 
                className="hover:text-white transition-all duration-300 flex items-center gap-2 font-medium relative group"
              >
                <span className="max-sm:hidden relative">
                  Crea
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <BadgePlus className="size-5 sm:hidden hover:text-white animate-pulse" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button 
                  type="submit" 
                  className="hover:text-rose-300 transition-all duration-300 flex items-center gap-2 font-medium group"
                >
                  <span className="max-sm:hidden relative">
                    Logout
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <LogOut className="size-5 sm:hidden text-rose-300" />
                </button>
              </form>

              <Link 
                href={`/user/${session?.id}`} 
                className="transition-transform duration-300 hover:scale-105"
              >
                <Avatar className="size-10 ring-2 ring-white/20 ring-offset-2 ring-offset-purple-900 hover:ring-white/40 transition-all duration-300">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                    className="hover:brightness-110"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-violet-400 to-indigo-400 text-white font-medium">
                    AV
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button 
                type="submit" 
                className="relative px-6 py-2.5 rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:opacity-90"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></span>
                <span className="relative font-medium text-white flex items-center gap-2">
                  Login
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                </span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
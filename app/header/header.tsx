import { ChevronDown, Menu, RectangleHorizontal, ShoppingBasket, ShoppingCart, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function HeaderComponent() {
    const navItems = [
        { label: 'HOW IT WORKS', href: '#' },
        { label: 'WORKFLOWS' },
        { label: 'AUDIO CONSOLE' },
        { label: 'PHOTO CONSOLE' },
        { label: 'VIDEO CONSOLE' },
        { label: 'MINI CONSOLE' },
        { label: 'DOWNLOAD', href: '#' },
        { label: 'BLOG', href: '#' },
        { label: 'SUPPORT', href: '#' },
        { label: 'SHOP', href: '#' },
    ];

    return (
        <header className="h-13 bg-navy md:mt-4 md:mx-4 mt-2 mx-2 flex flex-row items-center justify-between px-2 pr-4">
            <div className="flex flex-row items-center gap-3">
            <div className="w-12 h-9 border-2 border-lpeach" />
            <p className="text-lpeach font-semibold text-sm tracking-[2px]">
                MONOGRAM
            </p>
            </div>
            <nav className="hidden md:flex items-center gap-8 ">
                <a href="#" className="text-lpeach text-xs font-light tracking-[2px]">HOW IT WORKS</a>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="text-lpeach text-xs font-light tracking-[2px] flex flex-row items-center gap-1">
                        WORKFLOWS <ChevronDown size={12}/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>AUDIO CONSOLE</DropdownMenuItem>
                        <DropdownMenuItem>PHOTO CONSOLE</DropdownMenuItem>
                        <DropdownMenuItem>VIDEO CONSOLE</DropdownMenuItem>
                        <DropdownMenuItem>MINI CONSOLE</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <a href="#" className="text-lpeach text-xs font-light tracking-[2px]">DOWNLOAD</a>
                <a href="#" className="text-lpeach text-xs font-light tracking-[2px]">BLOG</a>
                <a href="#" className="text-lpeach text-xs font-light tracking-[2px]">SUPPORT</a>
                <a href="#" className="text-lpeach text-xs font-light tracking-[2px]">SHOP</a>    
                <ShoppingCart className="font-light text-lpeach"/>     
                <DropdownMenu modal={false}>
                        <DropdownMenuTrigger className="text-lpeach text-xs font-light tracking-[2px] flex flex-row items-center gap-1">                   
                            USD 
                            <ChevronDown size={12}/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col min-w-0 w-20">
                            <DropdownMenuItem className="flex justify-center w-full">USD ($)</DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center w-full">USD ($)</DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center w-full">USD ($)</DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center w-full">USD ($)</DropdownMenuItem>
                        </DropdownMenuContent>        
                </DropdownMenu>
            </nav>

            
            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                        <Menu className="text-lpeach" />
                        <DropdownMenu>
                            <ShoppingCart className="font-light text-lpeach" />
                            {/* Check trigger wrong */}
                            <DropdownMenuTrigger asChild>     
                            <div className="text-lpeach text-xs font-light tracking-[3px] flex flex-row items-center gap-1 cursor-pointer">         
                                USD 
                                <ChevronDown size={12} />
                            </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="flex flex-col items-center">
                            <DropdownMenuItem>USD ($)</DropdownMenuItem>
                            <DropdownMenuItem>USD ($)</DropdownMenuItem>
                            <DropdownMenuItem>USD ($)</DropdownMenuItem>
                            <DropdownMenuItem>USD ($)</DropdownMenuItem>
                            <DropdownMenuItem>USD ($)</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[350px] sm:w-[300px] bg-navy 
                        [&>button:first-of-type]:text-lpeach border-none">          
                        <SheetTitle className="pt-4 pl-4"> 
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-12 h-9 border-2 border-lpeach" />
                                <p className="text-lpeach font-semibold text-sm tracking-[2px]">
                                    MONOGRAM
                                </p>
                            </div>
                        </SheetTitle>
                        <hr className="border-t-[0.2px] border-white w-full opacity-50" />
                        <nav className="flex flex-col items-end gap-2 pl-7 pr-3">
                            {navItems.map((item, index) => (
                                <div
                                key={index}
                                className={`${['HOW IT WORKS', 'WORKFLOWS', 'DOWNLOAD', 'BLOG', 'SUPPORT', 'SHOP'].includes(item.label) ? 'w-[90%]' : 'w-[80%]'} flex flex-col gap-3`}
                                >
                                {item.href ? (
                                    <a href={item.href} className="text-lpeach text-base tracking-[2px]">{item.label}</a>
                                ) : (
                                    <p className="text-lpeach text-base tracking-[2px]">{item.label}</p>
                                )}
                                {item.label !== 'SHOP' && (
                                    <hr className="border-t-[0.5px] border-divider w-full opacity-50" />
                                )}
                                </div>
                            ))}
                            </nav>
                    </SheetContent>
                </Sheet>
            </div>
            
        </header>
  );
}

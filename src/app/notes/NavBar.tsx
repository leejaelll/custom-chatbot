import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function NavBar() {
  return (
    <div className="p-4 shadow">
      <div className="flex flex-wrap gap-3 items-center justify-between max-w-7xl mx-auto">
        <Link href={"/notes"} className="flex items-center gap-1">
          <Image src={logo} alt="FlowBrain logo" width={40} height={40} />
          <span className="font-bold">FlowBrain</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <Button>
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
          <Button>
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
        </div>
      </div>
    </div>
  );
}
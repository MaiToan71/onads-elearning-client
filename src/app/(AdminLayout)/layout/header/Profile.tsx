"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";

const Profile = () => {
  const { logout, getUserEmail } = useAuth();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    setUserEmail(getUserEmail());
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative group/menu">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/profile/user-1.jpg"
              alt="Profile"
              height={35}
              width={35}
              className="rounded-full"
            />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-56 rounded-sm shadow-md p-2"
        >
          {/* User Email Display */}
          {userEmail && (
            <div className="px-3 py-2 border-b mb-2">
              <p className="text-xs text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {userEmail}
              </p>
            </div>
          )}

          <DropdownMenuItem asChild>
            <Link
              href="/user-profile"
              className="px-3 py-2 flex items-center w-full gap-3 text-darkLink hover:bg-lightprimary hover:text-primary"
            >
              <Icon icon="solar:user-circle-outline" height={20} />
              My Profile
            </Link>
          </DropdownMenuItem>

          <div className="p-3 pt-0">
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="mt-2 w-full hover:bg-destructive hover:text-white"
            >
              <Icon icon="solar:logout-2-outline" height={18} className="mr-2" />
              Logout
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;

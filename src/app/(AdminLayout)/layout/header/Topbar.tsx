"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {


  return (
    <div className="py-3.5 px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,#0f0533_0%,#1b0a5c_100%)]">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left Section */}
        <div className="md:flex hidden items-center gap-5">
           <Link
              target="_blank"
              href="/"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:window-frame-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Home page</h4>
            </Link>
          <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
           
            <Link
              target="_blank"
              href="#"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:question-circle-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Help</h4>
            </Link>
            <Link
              target="_blank"
              href="#"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:case-round-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Hire Us</h4>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="live-preview-drop rounded-lg border border-[#ffffff66] hover:bg-[#5d87ff]">
               
              </div>

              <Link
                target="_blank"
                href="https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56"
                className="flex items-center px-4 py-[11px] rounded-lg gap-2 text-white bg-[#3772ff] hover:bg-[#5d87ff]"
              >
                <Icon icon="solar:crown-linear" width={18} />
                <h4 className="text-base font-normal leading-none text-white">
                  Get Pro
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

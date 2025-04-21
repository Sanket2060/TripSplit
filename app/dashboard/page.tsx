"use client";
import React from "react";
import { useState } from "react";
import { auth } from "@/auth";
import {
  Wallet,
  Settings,
  PlusCircle,
  Bell,
  Search,
  LogOut,
  User,
  Map,
  ChevronDown,
  Calendar,
  Users,
  CreditCard,
  BarChart,
  PieChart,
  Plane,
  Home,
  Coffee,
  Car,
  ShoppingBag,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import DashboardContent from "@/components/DashboardContent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import defaultImage from "@/public/defaultProfileImage.png";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { data, status } = session;
  const user = data?.user;
  console.log("session dAta and status", data, status);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="flex items-center justify-center md:justify-start p-4 border-b border-gray-200">
          <Wallet className="text-blue-600" size={28} />
          <span className="hidden md:block text-xl font-bold text-gray-900 ml-2">
            SplitTrip
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto pt-4">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center p-3 md:px-4 md:py-3 ${
                  activeTab === "dashboard"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <BarChart size={20} />
                <span className="hidden md:block ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("trips")}
                className={`w-full flex items-center p-3 md:px-4 md:py-3 ${
                  activeTab === "trips"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Map size={20} />
                <span className="hidden md:block ml-3">My Trips</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("expenses")}
                className={`w-full flex items-center p-3 md:px-4 md:py-3 ${
                  activeTab === "expenses"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <CreditCard size={20} />
                <span className="hidden md:block ml-3">Expenses</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("statistics")}
                className={`w-full flex items-center p-3 md:px-4 md:py-3 ${
                  activeTab === "statistics"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <PieChart size={20} />
                <span className="hidden md:block ml-3">Statistics</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <LogOut size={20} />
            <span className="hidden md:block ml-3">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-20 md:pl-64">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex-1">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search trips, expenses..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-gray-600 hover:text-gray-900">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-3"
              >
                <Image
                  src={user?.image || defaultImage}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt="Picture of the author"
                />

                {/* <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  JD
                </div> */}
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500"></p>
                </div>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-20">
                  <a
                    href="#"
                    className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <User size={16} className="mr-2" />
                    Profile
                  </a>
                  <a
                    href="#"
                    className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a
                    href="#"
                    className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;

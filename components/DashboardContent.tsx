import React from "react";
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
import { Button } from "./ui/button";
import Link from "next/link";

const DashboardContent = () => {
  // Mock data for charts
  const expensesByMonthData = [
    { name: "Jan", amount: 650 },
    { name: "Feb", amount: 890 },
    { name: "Mar", amount: 420 },
    { name: "Apr", amount: 980 },
    { name: "May", amount: 1200 },
    { name: "Jun", amount: 850 },
  ];

  const categoryData = [
    { name: "Food", value: 35 },
    { name: "Accommodation", value: 40 },
    { name: "Transport", value: 15 },
    { name: "Activities", value: 10 },
  ];

  const groupExpenseData = [
    { name: "You", amount: 380 },
    { name: "Alex", amount: 420 },
    { name: "Sarah", amount: 290 },
    { name: "Mike", amount: 350 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Trip data
  const upcomingTrips = [
    {
      id: 1,
      name: "Weekend in NYC",
      date: "May 24-26, 2025",
      members: 4,
      totalExpense: 1200,
      backdrop: "bg-blue-100",
      icon: <Plane size={22} className="text-blue-600" />,
    },
    {
      id: 2,
      name: "Cabin Retreat",
      date: "Jun 12-15, 2025",
      members: 6,
      totalExpense: 1850,
      backdrop: "bg-green-100",
      icon: <Home size={22} className="text-green-600" />,
    },
  ];

  const pastTrips = [
    {
      id: 3,
      name: "Beach Vacation",
      date: "Apr 5-12, 2025",
      members: 5,
      totalExpense: 3200,
      status: "Settled",
      statusColor: "bg-green-500",
    },
    {
      id: 4,
      name: "Road Trip",
      date: "Mar 20-25, 2025",
      members: 3,
      totalExpense: 980,
      status: "Pending",
      statusColor: "bg-yellow-500",
    },
    {
      id: 5,
      name: "Ski Weekend",
      date: "Feb 14-16, 2025",
      members: 6,
      totalExpense: 2400,
      status: "Settled",
      statusColor: "bg-green-500",
    },
    {
      id: 6,
      name: "City Break",
      date: "Jan 5-8, 2025",
      members: 2,
      totalExpense: 750,
      status: "Settled",
      statusColor: "bg-green-500",
    },
  ];

  const recentExpenses = [
    {
      id: 1,
      description: "Dinner at Luigi's",
      amount: 120,
      paidBy: "You",
      date: "Apr 19, 2025",
      category: "Food",
      icon: <Coffee size={18} className="text-orange-500" />,
    },
    {
      id: 2,
      description: "Uber to Airport",
      amount: 45,
      paidBy: "Alex",
      date: "Apr 18, 2025",
      category: "Transport",
      icon: <Car size={18} className="text-blue-500" />,
    },
    {
      id: 3,
      description: "Groceries",
      amount: 65,
      paidBy: "Sarah",
      date: "Apr 17, 2025",
      category: "Shopping",
      icon: <ShoppingBag size={18} className="text-green-500" />,
    },
  ];

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString("en-US")}`;
  };
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, John! Here's an overview of your trips and expenses.
          </p>
        </div>

        <Button
          asChild
          className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Link href="/create-new-trip" className="flex items-center">
            <PlusCircle size={18} className="mr-2" />
            Create New Trip
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Trips</h3>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Map size={18} className="text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="font-medium">+2</span>
            <span className="ml-1">from last month</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Active Trips</h3>
            <div className="p-2 bg-green-100 rounded-lg">
              <Plane size={18} className="text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="font-medium">On track</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">
              Total Expenses
            </h3>
            <div className="p-2 bg-purple-100 rounded-lg">
              <CreditCard size={18} className="text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {formatCurrency(8430)}
          </p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="font-medium">75%</span>
            <span className="ml-1">settled</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">You are owed</h3>
            <div className="p-2 bg-red-100 rounded-lg">
              <Users size={18} className="text-red-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {formatCurrency(295)}
          </p>
          <p className="text-sm text-yellow-600 flex items-center mt-2">
            <span className="font-medium">3 friends</span>
            <span className="ml-1">to settle up</span>
          </p>
        </div>
      </div>

      {/* Upcoming Trips and Recent Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Upcoming Trips</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View All
            </button>
          </div>

          <div className="space-y-6">
            {upcomingTrips.map((trip) => (
              <div
                key={trip.id}
                className="flex items-center p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${trip.backdrop} flex items-center justify-center mr-4`}
                >
                  {trip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{trip.name}</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {trip.date}
                    <span className="mx-2">•</span>
                    <Users size={14} className="mr-1" />
                    {trip.members} people
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {formatCurrency(trip.totalExpense)}
                  </p>
                  <p className="text-sm text-gray-500">Budget</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="mt-6 w-full py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center"
            asChild
          >
            <Link href="/create-new-trip" className="flex items-center">
              <PlusCircle size={18} className="mr-2" />
              Create New Trip
            </Link>
          </Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Expenses</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {recentExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center p-3 border border-gray-100 rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  {expense.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    {expense.description}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {expense.date} • Paid by {expense.paidBy}
                  </p>
                </div>
                <p className="font-medium text-gray-900">
                  {formatCurrency(expense.amount)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Total Expenses</p>
              <p className="font-bold text-gray-900">{formatCurrency(230)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Past Trips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Expense Analytics
              </h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Last 6 months</option>
                <option>Last 3 months</option>
                <option>Last 30 days</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <h3 className="text-gray-700 font-medium mb-4">
                  Expenses by Month
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={expensesByMonthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                    <Bar
                      dataKey="amount"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>

              <div className="h-64">
                <h3 className="text-gray-700 font-medium mb-4">
                  Expense Breakdown
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Percentage"]}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6 h-64">
              <h3 className="text-gray-700 font-medium mb-4">
                Group Contribution
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={groupExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Past Trips</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {pastTrips.map((trip) => (
              <div
                key={trip.id}
                className="p-4 border border-gray-100 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900">{trip.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${trip.statusColor}`}
                  >
                    {trip.status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {trip.date}
                  </div>
                  <div className="flex items-center mt-1">
                    <Users size={14} className="mr-1" />
                    {trip.members} people • {formatCurrency(trip.totalExpense)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dashboard Content */}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  User,
  Package,
  AlertCircle,
  BarChart3,
  MessageSquare,
  FileText,
  DollarSign as DollarSignIcon,
  Plus,
  Edit,
  Trash,
  Eye,
  X,
  Send,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// --- Helper Functions ---
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  } catch (e) {
    console.error("Error formatting date:", e);
    return "Invalid Date";
  }
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Active":
    case "Replied":
    case "Completed":
      return "bg-purple-100 text-purple-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "New":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const PIE_COLORS = ["#6B46C1", "#808080", "#A9A9A9", "#D3D3D3"];

// --- Main Component ---
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [agreements, setAgreements] = useState([]);
  const [messages, setMessages] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newAgreement, setNewAgreement] = useState({
    client: "",
    email: "",
    project: "",
    amount: "",
    deadline: "",
    status: "Active",
  });
  const [newExpense, setNewExpense] = useState({
    category: "",
    description: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editingAgreement, setEditingAgreement] = useState(null);
  const [replyText, setReplyText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const agreementsRes = await axios.get(
        "http://localhost:5000/api/agreements"
      );
      setAgreements(agreementsRes.data);

      const messagesRes = await axios.get("http://localhost:5000/api/messages");
      setMessages(messagesRes.data);

      const expensesRes = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(expensesRes.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  const handleNewAgreementChange = (e) => {
    const { name, value } = e.target;
    setNewAgreement((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewAgreementSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAgreement) {
        await axios.put(
          `http://localhost:5000/api/agreements/${editingAgreement._id}`,
          {
            clientName: newAgreement.client,
            clientEmail: newAgreement.email,
            project: newAgreement.project,
            totalAmount: parseFloat(newAgreement.amount),
            agreementEnd: newAgreement.deadline,
            status: newAgreement.status,
          }
        );
        alert("Agreement updated successfully!");
        setEditingAgreement(null);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/agreements",
          {
            clientName: newAgreement.client,
            clientEmail: newAgreement.email,
            project: newAgreement.project,
            totalAmount: parseFloat(newAgreement.amount),
            agreementEnd: newAgreement.deadline,
            status: newAgreement.status,
          }
        );
        alert(response.data.msg);
      }
      fetchData();
      setShowModal(false);
      setNewAgreement({
        client: "",
        email: "",
        project: "",
        amount: "",
        deadline: "",
        status: "Active",
      });
    } catch (error) {
      alert("Error saving agreement.");
      console.error("Error saving agreement:", error);
    }
  };

  const handleEditAgreement = (agreement) => {
    setEditingAgreement(agreement);
    setNewAgreement({
      client: agreement.clientName,
      email: agreement.clientEmail || "",
      project: agreement.project,
      amount: agreement.totalAmount,
      deadline: agreement.agreementEnd
        ? agreement.agreementEnd.split("T")[0]
        : "",
      status: agreement.status,
    });
    setModalType("agreement");
    setShowModal(true);
  };

  const handleDeleteAgreement = async (id) => {
    if (window.confirm("Are you sure you want to delete this agreement?")) {
      try {
        await axios.delete(`http://localhost:5000/api/agreements/${id}`);
        alert("Agreement deleted successfully!");
        fetchData();
      } catch (error) {
        alert("Error deleting agreement.");
        console.error("Error deleting agreement:", error);
      }
    }
  };

  const handleNewExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewExpenseSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses", {
        category: newExpense.category,
        description: newExpense.description,
        amount: parseFloat(newExpense.amount),
        date: newExpense.date,
      });
      alert("Expense added successfully!");
      fetchData();
      setShowModal(false);
      setNewExpense({
        category: "",
        description: "",
        amount: "",
        date: new Date().toISOString().slice(0, 10),
      });
    } catch (error) {
      alert("Error adding new expense.");
      console.error("Error adding new expense:", error);
    }
  };

  const handleEditExpense = (expense) => {
    // Implement edit functionality if needed
    // setEditingExpense(expense);
    // setModalType("expense");
    // setShowModal(true);
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        alert("Expense deleted successfully!");
        fetchData();
      } catch (error) {
        alert("Error deleting expense.");
        console.error("Error deleting expense:", error);
      }
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setModalType("view-message");
    setShowModal(true);
  };

  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setModalType("reply-message");
    setShowModal(true);
  };

  const handleSendReply = async () => {
    if (replyText.trim() === "") {
      alert("Please write a reply before sending.");
      return;
    }

    try {
      // Logic to send the reply (e.g., via API call)
      // Note: This is a simulated action as nodemailer is removed
      // In a real application, you would send this to your backend
      // which would then send the email.
      console.log(`Sending reply to ${selectedMessage.email}: ${replyText}`);

      // Update message status to "Replied" on the backend
      await axios.put(
        `http://localhost:5000/api/messages/${selectedMessage._id}`,
        {
          status: "Replied",
          reply: replyText,
        }
      );

      alert("Reply sent successfully! (Note: This is a simulated action)");
      fetchData();
      setShowModal(false);
      setReplyText("");
    } catch (error) {
      alert("Error sending reply.");
      console.error("Error sending reply:", error);
    }
  };

  const expenseCategories = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const expenseChartData = Object.entries(expenseCategories).map(
    ([category, amount]) => ({
      name: category,
      value: parseFloat(amount.toFixed(2)),
    })
  );

  const agreementStatusData = agreements.reduce((acc, agreement) => {
    const status = agreement.status || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const agreementStatusChartData = Object.entries(agreementStatusData).map(
    ([status, count]) => ({
      name: status,
      count: count,
    })
  );

  const dashboardStats = [
    {
      title: "Total Projects",
      value: agreements.length.toString(),
      change: "",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Active Clients",
      value: new Set(agreements.map((a) => a.clientName)).size.toString(),
      change: "",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Messages",
      value: messages.length.toString(),
      change: "",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Total Expenses",
      value: `$${expenses
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2)}`,
      change: "",
      icon: <DollarSignIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4 sm:ml-6">
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                  Stack Fellows Dashboard
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Manage projects, clients, and company finances
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap sm:flex-nowrap overflow-x-auto">
              {[
                {
                  id: "overview",
                  name: "Overview",
                  icon: <BarChart3 className="h-5 w-5" />,
                },
                {
                  id: "agreements",
                  name: "Client Agreements",
                  icon: <FileText className="h-5 w-5" />,
                },
                {
                  id: "messages",
                  name: "Messages",
                  icon: <MessageSquare className="h-5 w-5" />,
                },
                {
                  id: "expenses",
                  name: "Expenses",
                  icon: <DollarSign className="h-5 w-5" />,
                },
                {
                  id: "users",
                  name: "Manage Users",
                  icon: <Users className="h-5 w-5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "border-[#6B46C1] text-[#6B46C1]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-3 sm:px-6 border-b-2 font-medium text-sm flex items-center transition-colors duration-200`}
                >
                  {tab.icon}
                  <span className="ml-1 sm:ml-2">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 sm:p-8">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                  {dashboardStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                    >
                      <div className="flex items-center">
                        <div className="text-[#6B46C1] mr-4">{stat.icon}</div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {stat.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Expense Breakdown
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={expenseChartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {expenseChartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_COLORS[index % PIE_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Agreements by Status
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={agreementStatusChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#6B46C1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "agreements" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                    Client Agreements
                  </h2>
                  <button
                    onClick={() => {
                      setModalType("agreement");
                      setShowModal(true);
                      setEditingAgreement(null);
                      setNewAgreement({
                        client: "",
                        email: "",
                        project: "",
                        amount: "",
                        deadline: "",
                        status: "Active",
                      });
                    }}
                    className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#6B46C1] rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add New Agreement
                  </button>
                </div>
                <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Client</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Project</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Deadline</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {agreements.map((agreement) => (
                        <tr key={agreement._id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {agreement.clientName}
                          </td>
                          <td className="py-3 px-4">{agreement.clientEmail}</td>
                          <td className="py-3 px-4">{agreement.project}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                agreement.status
                              )}`}
                            >
                              {agreement.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            ${agreement.totalAmount}
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(agreement.agreementEnd)}
                          </td>
                          <td className="py-3 px-4 flex space-x-2">
                            <button
                              onClick={() => handleEditAgreement(agreement)}
                              className="text-gray-500 hover:text-[#6B46C1]"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteAgreement(agreement._id)
                              }
                              className="text-gray-500 hover:text-red-500"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "messages" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Contact Messages
                </h2>
                <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {messages.map((message) => (
                        <tr key={message._id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {message.name}
                          </td>
                          <td className="py-3 px-4">{message.email}</td>
                          <td className="py-3 px-4">
                            {message.subject || "N/A"}
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(message.createdAt)}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                message.status
                              )}`}
                            >
                              {message.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 flex space-x-2">
                            <button
                              onClick={() => handleViewMessage(message)}
                              className="text-gray-500 hover:text-[#6B46C1]"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleReplyClick(message)}
                              className="text-gray-500 hover:text-green-500"
                            >
                              <MessageSquare className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "expenses" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                    Company Expenses
                  </h2>
                  <button
                    onClick={() => {
                      setModalType("expense");
                      setShowModal(true);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#6B46C1] rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add New Expense
                  </button>
                </div>
                <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {expenses.map((expense) => (
                        <tr key={expense._id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {expense.category}
                            </span>
                          </td>
                          <td className="py-3 px-4">{expense.description}</td>
                          <td className="py-3 px-4">
                            ${expense.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(expense.date)}
                          </td>
                          <td className="py-3 px-4 flex space-x-2">
                            <button
                              className="text-gray-500 hover:text-[#6B46C1]"
                              onClick={() => handleEditExpense(expense)}
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteExpense(expense._id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "users" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                    Manage Users
                  </h2>
                  <button
                    onClick={() => {
                      setModalType("user");
                      setShowModal(true);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#6B46C1] rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add New User
                  </button>
                </div>
                <p>User list will be displayed here.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Modal for adding new items */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {modalType === "agreement"
                        ? `${
                            editingAgreement ? "Edit" : "Add New"
                          } Client Agreement`
                        : modalType === "expense"
                        ? "Add New Expense"
                        : modalType === "user"
                        ? "Add New User"
                        : modalType === "reply-message"
                        ? "Reply to Message"
                        : "View Message"}
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  {modalType === "view-message" && selectedMessage ? (
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                      <p>
                        <strong className="font-semibold">From:</strong>{" "}
                        {selectedMessage.name}
                      </p>
                      <p className="mt-1">
                        <strong className="font-semibold">Email:</strong>{" "}
                        {selectedMessage.email}
                      </p>
                      <p className="mt-1">
                        <strong className="font-semibold">Subject:</strong>{" "}
                        {selectedMessage.subject || "N/A"}
                      </p>
                      <p className="mt-4 border-t border-gray-200 pt-4">
                        {selectedMessage.message}
                      </p>
                    </div>
                  ) : modalType === "reply-message" && selectedMessage ? (
                    <div className="mt-4">
                      <p>
                        <strong className="font-semibold">To:</strong>{" "}
                        {selectedMessage.email}
                      </p>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Your Reply
                        </label>
                        <textarea
                          rows="4"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                          placeholder="Write your reply here..."
                        ></textarea>
                      </div>
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          onClick={handleSendReply}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#6B46C1] text-base font-medium text-white hover:bg-[#5A3AA8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B46C1] sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                        >
                          <Send className="h-4 w-4 mr-2" /> Send Reply
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      className="mt-4"
                      onSubmit={
                        modalType === "agreement"
                          ? handleNewAgreementSubmit
                          : handleNewExpenseSubmit
                      }
                    >
                      {modalType === "agreement" ? (
                        <>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Client Name
                            </label>
                            <input
                              type="text"
                              name="client"
                              placeholder="Enter client name"
                              value={newAgreement.client}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Client Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter client email"
                              value={newAgreement.email}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Project Title
                            </label>
                            <input
                              type="text"
                              name="project"
                              placeholder="Enter project title"
                              value={newAgreement.project}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              placeholder="Enter amount"
                              value={newAgreement.amount}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Deadline
                            </label>
                            <input
                              type="date"
                              name="deadline"
                              value={newAgreement.deadline}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Status
                            </label>
                            <select
                              name="status"
                              value={newAgreement.status}
                              onChange={handleNewAgreementChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            >
                              <option value="Active">Active</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>
                        </>
                      ) : modalType === "expense" ? (
                        <>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Category
                            </label>
                            <select
                              name="category"
                              value={newExpense.category}
                              onChange={handleNewExpenseChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            >
                              <option value="">Select a category</option>
                              <option>Software Licenses</option>
                              <option>Hosting & Domain</option>
                              <option>Marketing</option>
                              <option>Equipment</option>
                              <option>Office Supplies</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Description
                            </label>
                            <input
                              type="text"
                              name="description"
                              placeholder="Enter description"
                              value={newExpense.description}
                              onChange={handleNewExpenseChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Amount
                            </label>
                            <input
                              type="number"
                              name="amount"
                              placeholder="Enter amount"
                              value={newExpense.amount}
                              onChange={handleNewExpenseChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              value={newExpense.date}
                              onChange={handleNewExpenseChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                              required
                            />
                          </div>
                        </>
                      ) : null}
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#6B46C1] text-base font-medium text-white hover:bg-[#5A3AA8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B46C1] sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                        >
                          {editingAgreement ? "Update" : "Save"}
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          onClick={() => {
                            setShowModal(false);
                            setEditingAgreement(null);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

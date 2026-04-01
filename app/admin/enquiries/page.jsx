"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  MapPin,
  User,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Loader2,
  Download,
  RefreshCw
} from "lucide-react";

export default function AdminEnquiriesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    search: ""
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });
  const [stats, setStats] = useState(null);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/quotes`,
        {
          params: {
            status: filters.status,
            search: filters.search,
            page: pagination.page,
            limit: pagination.limit
          },
         
        }
      );
      
      setQuotes(response.data.data);
      setPagination({
        ...pagination,
        total: response.data.pagination.total,
        pages: response.data.pagination.pages
      });
    } catch (error) {
      toast.error("Failed to fetch enquiries");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/stats`,
        {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_ADMIN_API_KEY
          }
        }
      );
      setStats(response.data.data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
    fetchStats();
  }, [filters.status, filters.search, pagination.page]);

  const handleStatusChange = async (id, newStatus, quoteAmount = null) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/quotes/${id}/status`,
        {
          status: newStatus,
          quoteAmount: quoteAmount
        },
        {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_ADMIN_API_KEY
          }
        }
      );
      
      toast.success("Status updated successfully");
      fetchQuotes();
      fetchStats();
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/quotes/${id}`,
          {
            headers: {
              'x-api-key': process.env.NEXT_PUBLIC_ADMIN_API_KEY
            }
          }
        );
        
        toast.success("Enquiry deleted successfully");
        fetchQuotes();
        fetchStats();
      } catch (error) {
        toast.error("Failed to delete enquiry");
      }
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: "bg-yellow-100 text-yellow-800",
      reviewed: "bg-blue-100 text-blue-800",
      quoted: "bg-green-100 text-green-800",
      accepted: "bg-purple-100 text-purple-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badges[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enquiries Management</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage and track all shipping quote requests
              </p>
            </div>
            <button
              onClick={() => {
                fetchQuotes();
                fetchStats();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Enquiries</p>
                  <p className="text-2xl font-bold mt-1">{stats.total}</p>
                </div>
                <Package className="text-blue-500" size={24} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Pending</p>
                  <p className="text-2xl font-bold mt-1">{stats.pending}</p>
                </div>
                <Clock className="text-yellow-500" size={24} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Reviewed</p>
                  <p className="text-2xl font-bold mt-1">{stats.reviewed}</p>
                </div>
                <Eye className="text-blue-500" size={24} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Quoted</p>
                  <p className="text-2xl font-bold mt-1">{stats.quoted}</p>
                </div>
                <DollarSign className="text-green-500" size={24} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Today</p>
                  <p className="text-2xl font-bold mt-1">{stats.today}</p>
                </div>
                <Calendar className="text-purple-500" size={24} />
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, email, phone or company..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="quoted">Quoted</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enquiry Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shipment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <Loader2 className="animate-spin mx-auto" size={32} />
                    </td>
                  </tr>
                ) : quotes.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      No enquiries found
                    </td>
                  </tr>
                ) : (
                  quotes.map((quote) => (
                    <tr key={quote._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{quote.name}</div>
                          <div className="text-sm text-gray-500">{quote.email}</div>
                          <div className="text-sm text-gray-500">{quote.phone}</div>
                          {quote.company && (
                            <div className="text-xs text-gray-400">{quote.company}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div>Service: {quote.service || 'N/A'}</div>
                          <div>Weight: {quote.weight} kg</div>
                          <div>Dimensions: {quote.length}x{quote.width}x{quote.height} cm</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-green-500" />
                            {quote.pickup}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin size={14} className="text-red-500" />
                            {quote.delivery}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Shipping: {new Date(quote.date).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(quote.status)}
                        {quote.quoteAmount && (
                          <div className="text-sm font-semibold text-green-600 mt-1">
                            ${quote.quoteAmount}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(quote.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedQuote(quote);
                              setShowModal(true);
                            }}
                            className="p-1 text-blue-600 hover:text-blue-800 transition"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(quote._id)}
                            className="p-1 text-red-600 hover:text-red-800 transition"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing {((pagination.page - 1) * pagination.limit) + 1} to{" "}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
                {pagination.total} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                  disabled={pagination.page === 1}
                  className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                  disabled={pagination.page === pagination.pages}
                  className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for viewing/updating quote details */}
      {showModal && selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Enquiry Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <User size={20} /> Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div><strong>Name:</strong> {selectedQuote.name}</div>
                  <div><strong>Email:</strong> {selectedQuote.email}</div>
                  <div><strong>Phone:</strong> {selectedQuote.phone}</div>
                  <div><strong>Company:</strong> {selectedQuote.company || 'N/A'}</div>
                </div>
              </div>
              
              {/* Shipment Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Package size={20} /> Shipment Details
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div><strong>Service Type:</strong> {selectedQuote.service || 'N/A'}</div>
                  <div><strong>Weight:</strong> {selectedQuote.weight} kg</div>
                  <div><strong>Dimensions:</strong> {selectedQuote.length} x {selectedQuote.width} x {selectedQuote.height} cm</div>
                </div>
              </div>
              
              {/* Route Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin size={20} /> Route Information
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div><strong>Pickup:</strong> {selectedQuote.pickup}</div>
                  <div><strong>Delivery:</strong> {selectedQuote.delivery}</div>
                  <div><strong>Shipping Date:</strong> {new Date(selectedQuote.date).toLocaleDateString()}</div>
                </div>
              </div>
              
              {/* Special Instructions */}
              {selectedQuote.specialInstructions && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Special Instructions</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {selectedQuote.specialInstructions}
                  </div>
                </div>
              )}
              
              {/* Status Update */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Update Status</h3>
                <div className="space-y-4">
                  <select
                    id="status"
                    value={selectedQuote.status}
                    onChange={(e) => setSelectedQuote({ ...selectedQuote, status: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="quoted">Quoted</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  
                  {selectedQuote.status === 'quoted' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Quote Amount ($)</label>
                      <input
                        type="number"
                        value={selectedQuote.quoteAmount || ''}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, quoteAmount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Enter quote amount"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Admin Notes</label>
                    <textarea
                      value={selectedQuote.adminNotes || ''}
                      onChange={(e) => setSelectedQuote({ ...selectedQuote, adminNotes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      rows="3"
                      placeholder="Add notes about this enquiry..."
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleStatusChange(
                        selectedQuote._id,
                        selectedQuote.status,
                        selectedQuote.quoteAmount
                      )}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Update Status
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
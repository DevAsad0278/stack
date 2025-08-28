import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const ClientAgreement = () => {
  const [formData, setFormData] = useState({
    serviceProvider: "Stack Fellows",
    spContact: "stackfellows684@gmail.com",
    clientName: "",
    clientAddress: "",
    clientContact: "",
    agreementStart: "",
    agreementEnd: "",
    termOption: "continue",
    totalAmount: "",
    paymentSchedule: "",
    paymentMethod: "",
    latePaymentFee: "",
    latePaymentDays: "",
    terminationDays: "",
    ownershipOption: "client",
    spSignature: "",
    spNameTitle: "CEO",
    spDate: "",
    clientSignature: "",
    clientNameTitle: "",
    clientDate: "",
    digitalMarketing: "",
    hosting: "",
    domain: "",
    vps: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Updated handleSubmit function to send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/agreements",
        formData
      );
      alert(response.data.msg);
    } catch (error) {
      alert(error.response?.data?.msg || "Error submitting agreement.");
      console.error("Agreement Submission Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl mx-4">
        <header className="mb-6 text-center">
          <Link to="/" className="text-purple-600 hover:text-purple-800 mb-2">
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Client Service Agreement
          </h1>
          <p className="text-gray-500 mt-2">
            Please read and complete all sections to finalize your agreement.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Service Provider Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Service Provider
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.serviceProvider}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.spContact}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Client Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="clientName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="clientAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="clientAddress"
                    name="clientAddress"
                    value={formData.clientAddress}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="clientContact"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="clientContact"
                    name="clientContact"
                    value={formData.clientContact}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Agreement Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Agreement Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="agreementStart"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="agreementStart"
                    name="agreementStart"
                    value={formData.agreementStart}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="agreementEnd"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="agreementEnd"
                    name="agreementEnd"
                    value={formData.agreementEnd}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="termOption"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Renewal Option
                  </label>
                  <select
                    id="termOption"
                    name="termOption"
                    value={formData.termOption}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  >
                    <option value="continue">
                      Continue automatically after end date
                    </option>
                    <option value="end">End after end date</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Services
              </h2>
              <div className="space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="digitalMarketing"
                      name="digitalMarketing"
                      type="checkbox"
                      checked={formData.digitalMarketing}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="digitalMarketing"
                      className="font-medium text-gray-700"
                    >
                      Digital Marketing
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="hosting"
                      name="hosting"
                      type="checkbox"
                      checked={formData.hosting}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="hosting"
                      className="font-medium text-gray-700"
                    >
                      Web Hosting
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="domain"
                      name="domain"
                      type="checkbox"
                      checked={formData.domain}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="domain"
                      className="font-medium text-gray-700"
                    >
                      Domain Registration
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="vps"
                      name="vps"
                      type="checkbox"
                      checked={formData.vps}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="vps" className="font-medium text-gray-700">
                      VPS Server
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Payment
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="totalAmount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="totalAmount"
                      name="totalAmount"
                      value={formData.totalAmount}
                      onChange={handleChange}
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="paymentSchedule"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Payment Schedule
                  </label>
                  <select
                    id="paymentSchedule"
                    name="paymentSchedule"
                    value={formData.paymentSchedule}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  >
                    <option value="">Select a schedule</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                    <option value="on_completion">On Completion</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preferred Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  >
                    <option value="">Select a method</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="latePaymentFee"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Late Payment Fee
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="latePaymentFee"
                      name="latePaymentFee"
                      value={formData.latePaymentFee}
                      onChange={handleChange}
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="latePaymentDays"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Days Until Late
                  </label>
                  <input
                    type="number"
                    id="latePaymentDays"
                    name="latePaymentDays"
                    value={formData.latePaymentDays}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Other Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="terminationDays"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Termination Notice (Days)
                  </label>
                  <input
                    type="number"
                    id="terminationDays"
                    name="terminationDays"
                    value={formData.terminationDays}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ownershipOption"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ownership of Work
                  </label>
                  <select
                    id="ownershipOption"
                    name="ownershipOption"
                    value={formData.ownershipOption}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  >
                    <option value="client">Client</option>
                    <option value="sp">Service Provider</option>
                    <option value="joint">Joint</option>
                  </select>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Signatures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SP Signature */}
                    <div className="space-y-2">
                      <label
                        htmlFor="spSignature"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Service Provider Signature
                      </label>
                      <input
                        type="text"
                        id="spSignature"
                        name="spSignature"
                        value={formData.spSignature}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                      />
                      <label
                        htmlFor="spNameTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name & Title
                      </label>
                      <input
                        type="text"
                        id="spNameTitle"
                        name="spNameTitle"
                        value={formData.spNameTitle}
                        onChange={handleChange}
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-gray-50"
                      />
                      <label
                        htmlFor="spDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="spDate"
                        name="spDate"
                        value={formData.spDate}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                      />
                    </div>

                    {/* Client Signature */}
                    <div className="space-y-2">
                      <label
                        htmlFor="clientSignature"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Client Signature
                      </label>
                      <input
                        type="text"
                        id="clientSignature"
                        name="clientSignature"
                        value={formData.clientSignature}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                      />
                      <label
                        htmlFor="clientNameTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name & Title
                      </label>
                      <input
                        type="text"
                        id="clientNameTitle"
                        name="clientNameTitle"
                        value={formData.clientNameTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                      />
                      <label
                        htmlFor="clientDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="clientDate"
                        name="clientDate"
                        value={formData.clientDate}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start mt-6">
            <div className="flex items-center h-5">
              <input
                id="agreed"
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, agreed: e.target.checked }))
                }
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                required
              />
              <label
                htmlFor="agreed"
                className="ml-2 block text-sm text-gray-900"
              >
                I have read and agree to all the terms and conditions.
              </label>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-6 w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Agreement
          </motion.button>
        </form>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>STACK FELLOWS</p>
          <p>
            <a
              href="mailto:stackfellows@gmail.com"
              className="text-purple-600 hover:text-purple-800"
            >
              stackfellows@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ClientAgreement;

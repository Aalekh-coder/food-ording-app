import Customer from "../Models/CustomerDetailsModels.js";

export const createCustomer = async (req, res) => {
  try {
    const { customerName, customerPhone, customerLocation, customerEmail } = req.body;

    if (!customerName || !customerPhone || !customerLocation || !customerEmail) {
      return res.status(400).json({
        success: false,
        message: "All customer details (name, phone, location, email) are required.",
      });
    }

    const newCustomer = new Customer({
      customerName,
      customerPhone,
      customerLocation,
      customerEmail,
    });

    const savedCustomer = await newCustomer.save();

    res.status(201).json({
      success: true,
      message: "Customer details saved successfully!",
      data: savedCustomer,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save customer details.",
      error: error.message,
    });
  }
};

import Customer from "../models/Customer.js"; // adjust path if needed

export const createCustomerNew = async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerLocation,
      customerEmail,
      paymentStatus,
      foodItems,
    } = req.body;

    // Check if customerEmail already exists
    const existingCustomer = await Customer.findOne({ customerEmail });
    if (existingCustomer) {
      return res.status(400).json({ message: "Customer with this email already exists." });
    }

    const newCustomer = await Customer.create({
      customerName,
      customerPhone,
      customerLocation,
      customerEmail,
      paymentStatus,
      foodItems,
    });

    res.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: newCustomer,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Failed to create customer.",
    });
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    const { customerEmail } = req.body;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { customerEmail },
      { paymentStatus: true },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({
      success: true,
      message: "Payment status updated to true",
      data: updatedCustomer,
    });
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating payment status",
    });
  }
};


export const getCustomers = async (req, res) => {
  try {
    // Find all customers in the database
    const customers = await Customer.find({});

    // Send a success response with the list of customers
    res.status(200).json({
      success: true,
      message: "Customers retrieved successfully.",
      count: customers.length,
      data: customers,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching customers:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve customers.",
      error: error.message,
    });
  }
};
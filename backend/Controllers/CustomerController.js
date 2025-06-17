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
import Customer from "../Models/CustomerDetailsModels.js";


export const createCustomerNew = async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerLocation,
      customerEmail,
      paymentStatus,
      foodItems,
      totalAmount
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
      totalAmount
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

export const updatePaymentStatusById = async (req, res) => {
  try {
    const { customerId } = req.params;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { paymentStatus: true },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
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
   const customers = await Customer.find({}).select('_id paymentStatus totalAmount customerPhone customerName');

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

export const getCustomersById = async(req,res)=>{
  
}
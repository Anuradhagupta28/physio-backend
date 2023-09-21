exports.dashboardControllerDetails = (req, res) => {
  try {
    res.json({ status: "success", message: "Welcome to Dashboard" });
    
  } catch (error) {
    console.error('Errror : ', error.message);
    return res.status(500).json({
        "message": 'Internal Server Error',
        error : error.message
    })
  }

};

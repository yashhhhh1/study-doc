const User = require("../modul/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const AuthenticationForSignUp = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //email already exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      // If user doesn't exist
      const newUser = new User({
        fname,
        lname,
        email,
        password: hashedPassword,
      });

      // Save user
      const savedUser = await newUser.save();

      // return with success message
      return res.status(200).json({ message: "Successfully registered", status: 200 });
    } else {
      // If user already exists, respond with error message
      return res.status(404).json({ message: "User already exists", status: 404 });
    }
  } catch (error) {
    // Handle any errors that occur during registration
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Error registering user", status: 500 });
  }
};

const AuthenticationForlogIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required", status: 400 }); // 400 for bad request
  }

  try {
    const userFind = await User.findOne({ email });

    // User not found
    if (!userFind) {
      return res.status(404).json({ message: "User not found", status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, userFind.password);

    // Invalid password
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password", status: 401 }); // 401 for unauthorized access
    }

    // Generate token
    const token = await userFind.generateAuthToken();

    // Set cookie
    res.cookie("usercookie", token, {
      expires: new Date(Date.now() + 9000000), // 2.5 hours
      httpOnly: true,
    });

    const result = {
      user: userFind, // Simplified key name
      token,
    };


    return res.status(200).json({ message: "Login successful", result, status: 200 });
    
  } catch (error) {
    console.error("Error during login:", error); // Log error for debugging
    res.status(500).json({ message: "An error occurred during login", status: 500 }); // 500 for server error
  }
};

module.exports = AuthenticationForlogIn;


module.exports = {
  AuthenticationForSignUp,
  AuthenticationForlogIn,
};

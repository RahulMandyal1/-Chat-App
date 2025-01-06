import User from "../models/user.model.js";

export const findUser = async (req, res) => {
  try {
    const userId = req.query.id; // Get user ID from query parameters

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error in find user controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

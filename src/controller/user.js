export const login = (req, res) => {
  const email =req.body.email
  const password = req.body.password

  res.cookie("user", email, {
    httpOnly: true,
    secure: false
  });
  res.json({
    user: "userId123"
  });
};

export const logout = (req, res) => {
  res.clearCookie("user");

  res.send("Success!");
};
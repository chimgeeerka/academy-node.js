// Шинэ данс үүсгэх
export const createAccount = async (req, res) => {
  const { user_id, account_number, balance } = req.body;
  res.json({});
};

// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (req, res) => {
  const { id, user_id, account_number, balance } = req.body;
  res.json({});
};

// Данс устгах
export const deleteAccount = async (req, res) => {
  const { id } = req.body;
  res.json({});
};

// Бүх дансыг авах
export const getAllAccounts = async (req, res) => {
  // Хэрвээ хэрэглэгчээр шүүх бол:
  const { user_id } = req.body;
  res.json({});
};

// данс авах
export const getAccountByNumber = async (req, res) => {
  const { account_number } = req.body;
  res.json({});
};

// Шинэ гүйлгээ үүсгэх


export const sessionError = async (req, res) => {
  res.render("error/session");
};

export const unfinishedFunctionError = async (req, res) => {
    res.render("error/unfinishedFunctionError");
};

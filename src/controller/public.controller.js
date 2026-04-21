export const ping = async (req, res) => {
  res.send("Mamandoloooooo");
};

export const getIndex = async (req, res) => {
  res.render('index');
};

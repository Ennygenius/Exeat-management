import Jwt from "jsonwebtoken";

/* 
  Thsi block of code is for restricting unauthenticated users
*/

const validateToken = async (req, res, next) => {
  const AuthHeader = req.headers.authorization;

  try {
    if (AuthHeader || AuthHeader.startswith("Bearer")) {
      const token = AuthHeader.split(" ")[1];
      if (!token) {
        return res.json({ ErrMsg: "No token or wrong token" });
      }

      Jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
          return res.json({ ErrMsg: "No token or wrong token" });
        }

        next();
      });
    } else {
      return res.json({ ErrMsg: "An error occured" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default validateToken;

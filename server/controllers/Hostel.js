import Hostel from "../models/hostel.js";

/*
    This controller is for getting all the hostel available in the db collection
    METHOD: GET REQUEST

*/
export const getAllHostels = async (req, res) => {
  try {
    //find and spit out all the hostel in the db
    const hostel = await Hostel.find({});
    res.json({ hostel });
  } catch (error) {
    console.log(error, "An Error Occured");
  }
};

/*
    This controller is for CREATING a hsotel
    METHOD: POST REQUEST

*/
export const createHostels = async (req, res) => {
  /*  
    I destructured the data present in the request.body 
    it was supposed to be like 
    const hostel = Hostel.create({
        chiefPorter: req.body.chiefPorter,
        hostelNumber:req.body.hostelNumber,
    });
  */
  const { chiefPorter, hostelNumber } = req.body;

  //if the fields are empty
  if (!chiefPorter || !hostelNumber) {
    return res.json({ ErrMsg: "The field should not be empty" });
  }

  try {
    //create an instance and save it in the database
    const hostel = await Hostel.create({
      chiefPorter,
      hostelNumber,
    });

    //spit out the data in json format
    return res.json({ hostel });
  } catch (error) {
    console.log(error);
  }
};

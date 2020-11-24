//////////////////////////////////////////////////
////////Create a function which takes ////////////
/////// a given argument consisting of //////////
////////////////numbers, `nums`. /////////////////
///// The output should be a new string //////////
///////that is a valid US phone number. //////////
//////////////////////////////////////////////////
const formatPhone = (num) => {
    const phone =
      num.toString().substring(0, 3) +
      "-" +
      num.toString().substring(3, 6) +
      "-" +
      num.toString().substring(6, num.length);
    return phone;
  };
  const generatePhoneNumber = (nums) => {
    if (Array.isArray(nums)) {
      return formatPhone(nums.join(""));
    } else {
      return formatPhone(nums);
    }
  };
const College = require('../schema/college');

class CollegeModels {
    //get all colleges
    getAllColleges = async () => {
        return await College.find({}).exec();
    }
//getcollege by id
    getCollegeById = async (collegeId) => {
        return await College.findById(collegeId);
    }

//add college
    createCollege = async (college) => {
        return await College.create(college);
    }

//update college
    addStudentsToCollegeById = async (collegeId,studentsId) => {
        return await College.findByIdAndUpdate(collegeId, {
            $push: { studentIds: studentsId },
          });
    }


//college information

}





module.export = new CollegeModels()
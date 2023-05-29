var express = require('express');
const StudentModel = require('../models/StudentModel');
const SubjectModel = require('../models/SubjectModel');
var router = express.Router();

/* GET home page. */
router.get('/student', async (req, res) => {
  const students =  await StudentModel.find();
  res.render("students",{students:students})
})
router.get('/subject', async (req, res) => {
  const subjects = await SubjectModel.find();
  res.send(subjects);
})
router.get('/student/drop' , async (req, res) => {
  await StudentModel.deleteMany()
  .then(() => console.log('ok'))
  .catch(err => console.log('err'))
});
module.exports = router;

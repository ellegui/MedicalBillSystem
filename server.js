import  express from 'express';
import  path  from "path";
import  medicalBills  from "./src/medicalBill.js"

const app = express();
const port = process.env.PORT || 3000;
const medicalBillList = [];

app.use(express.json())

app.get('/items', (req, res) => {
  res.status(200);
  res.json({
    'MEDICAL_BILLS': medicalBillList
  });
});

app.post('/items', (req, res) => {
  let data = req.body;
  let patientName = data.patient_name;
  let address = data.address;
  let hospitalName = data.hospital_name;
  let dateOfService = data.data_of_service;
  let billAmount = data.bill_amount;
  if (!patientName) {
    res.status(400);
    return res.json({
      'SUCCESS': false,
      'REASON': 'missing patientName in request body'
    })
  }
  if (!address) {
    res.status(400);
    return res.json({
      'SUCCESS': false,
      'REASON': 'missing address in request body'
    })
  }
  if (!hospitalName) {
    res.status(400);
    return res.json({
      'SUCCESS': false,
      'REASON': 'missing hospitalName in request body'
    })
  }
  if (!dateOfService) {
    res.status(400);
    return res.json({
      'SUCCESS': false,
      'REASON': 'missing dateOfService in request body'
    })
  }
  if (!billAmount) {
    res.status(400);
    return res.json({
      'SUCCESS': false,
      'REASON': 'missing billAmount in request body'
    })
  }
  try {
    let medicalBill = new medicalBills(patientName, address, hospitalName, dateOfService, billAmount);
    medicalBillList.push(medicalBill);
  } catch(e) {
    console.log(e);
    res.status(500);
    return res.send("Internal Error")
  }
  res.status(200)
  return res.json({
    'SUCCESS': true
  })

});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

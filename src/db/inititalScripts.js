const Group = require('../models/Group');

const populateInititalData = () => {
  console.log('Populating initital data...');
  createDefaultGroup();
}

const createDefaultGroup = async () => {
  await Group.findOneAndUpdate(
    { name: 'Unichat community' },
    { $set: { name : "Unichat community", creator : 'admin'}},
    { upsert:true, returnNewDocument : false }
  )
  .then(group => group ? console.log('Default group found') : console.log('Default group Created'));
}

module.exports = populateInititalData;
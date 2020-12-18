const getCurrentDate = function () {
  let date =(new Date().toLocaleDateString()).split('-');
  return (
    date[0] + "年" + date[1] + "月" + date[2]
  );
};
module.exports = getCurrentDate;

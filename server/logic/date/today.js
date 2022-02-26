exports.fn_val__today__str = () => {
  const time_now__date = new Date();

  const yyyy = time_now__date.getFullYear();
  const mm = time_now__date.getMonth() + 1;
  const dd = time_now__date.getDate();

  return `${yyyy}-${mm}-${dd}`;
};

exports.fn_val__date__str = (_date) => {
  const time_date__date = new Date(_date);

  const yyyy = time_date__date.getFullYear();
  const mm = time_date__date.getMonth() + 1;
  const dd = time_date__date.getDate();

  return `${yyyy}-${mm}-${dd}`;
};

const filterSearch = ({ router, page, sort_by }) => {
  const path = router.pathname;
  const query = router.query;

  if (page) query.page = page;
  if (sort_by) query.sort_by = sort_by;

  router.push({
    pathname: path,
    query: query,
  });
};

export default filterSearch;

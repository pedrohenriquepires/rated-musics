export const addRating = item => ({
  ...item,
  rating: item.votes && Number((item.votes / item.totalVotes).toFixed(1))
})

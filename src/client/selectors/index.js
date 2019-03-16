export const getCurrentRoute = ({ route: { stack } }) => stack[stack.length - 1];

export const getRestaurantOrders = ({ restaurant: { restaurant } }) => {
  return (!restaurant || !restaurant.orders || !restaurant.orders.items)
    ? [] : restaurant.orders.items;
};

export const getRestaurantItems = ({ restaurant: { restaurant } }) => {
  return (!restaurant || !restaurant.items || !restaurant.items.items)
    ? [] : restaurant.items.items;
};

export const getLoading = ({ page: { loading } }, key) => {
  return (!loading || !loading[key]) ? false : loading[key];
};

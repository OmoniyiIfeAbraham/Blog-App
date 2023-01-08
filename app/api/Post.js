import client from "./Client";

export const getFeaturedPosts = async () => {
  try {
    const { data } = await client("/post/featured-posts");
    return data;
  } catch (err) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { err: err.message || err };
  }
};

export const getLatestPosts = async (limit, pageNo) => {
  try {
    const { data } = await client(
      `/post/posts?limit=${limit}&pageNo=${pageNo}`
    );
    return data;
  } catch (err) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { err: err.message || err };
  }
};

export const getSinglePost = async (slug) => {
  try {
    const { data } = await client(`/post/single/${slug}`);
    return data;
  } catch (err) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { err: err.message || err };
  }
};

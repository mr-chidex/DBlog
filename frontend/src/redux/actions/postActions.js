import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILED,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
} from "../constants/postConstants";
import axios from "axios";

export const getPostsAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_REQUEST });

    const { data } = await axios({
      url: `${process.env.REACT_APP_BLOG_API}/api/posts?page=${page}`,
    });

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POST_REQUEST });
    console.log(id);
    const { data } = await axios({
      url: `${process.env.REACT_APP_BLOG_API}/api/posts/${id}`,
    });

    console.log(data);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addPostAction =
  ({ title, image, content }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_POST_REQUEST });
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image.current.files[0]);

      const { data } = await axios({
        url: `${process.env.REACT_APP_BLOG_API}/api/posts`,
        method: "POST",
        data: formData,
        headers: {
          Authorization:
            localStorage.getItem("NODE_USER") &&
            JSON.parse(localStorage.getItem("NODE_USER")).token
              ? JSON.parse(localStorage.getItem("NODE_USER")).token
              : "",
        },
      });

      dispatch({
        type: ADD_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_POST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const editPostAction = (post, postId) => async (dispatch) => {
  try {
    const { title, image, content } = post;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image.current.files) {
      formData.append("image", image.current.files[0]);
    }
    dispatch({ type: EDIT_POST_REQUEST });

    const { data } = await axios({
      url: `${process.env.REACT_APP_BLOG_API}/api/posts/${postId}`,
      method: "PUT",
      data: formData,
      headers: {
        Authorization:
          localStorage.getItem("NODE_USER") &&
          JSON.parse(localStorage.getItem("NODE_USER")).token
            ? JSON.parse(localStorage.getItem("NODE_USER")).token
            : "",
      },
    });

    dispatch({
      type: EDIT_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePostAction = (postId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });

    const { data } = await axios({
      url: `${process.env.REACT_APP_BLOG_API}/api/posts/${postId}`,
      method: "DELETE",
      headers: {
        Authorization:
          localStorage.getItem("NODE_USER") &&
          JSON.parse(localStorage.getItem("NODE_USER")).token
            ? JSON.parse(localStorage.getItem("NODE_USER")).token
            : "",
      },
    });

    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

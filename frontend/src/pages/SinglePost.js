import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TelegramShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch } from "react-redux";
import axios from "axios";

// import { setSnackbar } from "../redux/actions/uiActions";
import SideBar from "../components/SideBar";

const SinglePost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  // const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const size = 45;
  const path = window.location.href;
  const title = `Kaduna to shutdown telecoms services to fight banditry, other security challenges`;
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // setLoading(true);
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BLOG_API}/api/posts/${params.postId}`
        );

        setPost(data?.post);
        // setLoading(false);
      } catch (error) {
        // error.response && error.response.data.message
        //   ? dispatch(setSnackbar(error.response.data.message, "error"))
        //   : dispatch(setSnackbar(error.message, "error"));
        console.log(error);
        // setLoading(false);
      }
    })();
  }, [params, dispatch]);

  return (
    <main className="single-post">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <div className="author">
              <PersonPinIcon /> &nbsp;By:{" "}
              <span> &nbsp;{post?.author?.name || "Mr-Chidex"}&nbsp; </span> -{" "}
              {new Date(post?.createdAt).toDateString()}
            </div>

            <h1 className="title">{post?.title || title}</h1>

            <Box
              sx={{
                backgroundColor: "#bbb",
                color: "#fff",
                height: "400px",
                width: "100%",
                mb: 2,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${
                  post?.image?.url || "https://picsum.photos/200/400"
                })`,
              }}
            />

            <div className="share-btns">
              <ShareIcon fontSize="large" />
              <FacebookShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <FacebookIcon size={size} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <WhatsappIcon size={size} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <TwitterIcon size={size} />
              </TwitterShareButton>
              <EmailShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <EmailIcon size={size} />
              </EmailShareButton>
              <LinkedinShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <LinkedinIcon size={size} />
              </LinkedinShareButton>
              <TelegramShareButton
                url={`${
                  post?.title || title
                }. Check out ${path} for full gist.`}
              >
                <TelegramIcon size={size} />
              </TelegramShareButton>
            </div>

            {post?.content ? (
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post?.content }}
              ></div>
            ) : (
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  impedit, totam explicabo, repudiandae atque! Laboriosam, vel
                  assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consectetur aliquam, dolorum sunt corporis quam soluta
                  harum quia repellendus accusantium doloremque nesciunt
                  consequuntur impedit, totam explicabo, repudiandae atque!
                  <i>Laboriosam, vel assumenda!</i>
                </p>
                <p style={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  <b> impedit, totam explicabo, repudiandae</b> atque!
                  Laboriosam, vel assumenda! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Consectetur aliquam, dolorum
                  sunt corporis quam soluta harum quia repellendus accusantium
                  doloremque nesciunt consequuntur impedit, totam explicabo,
                  repudiandae atque! Laboriosam, vel assumenda!
                </p>

                <h2>What the Governor of Kaduna State is saying</h2>
                <p style={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  impedit, totam explicabo, repudiandae atque! Laboriosam, vel
                  assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consectetur aliquam, dolorum sunt corporis quam soluta
                  harum quia repellendus accusantium doloremque nesciunt
                  consequuntur impedit, totam explicabo, repudiandae atque!
                  Laboriosam, vel assumenda!
                </p>
                <p style={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  impedit, totam explicabo, repudiandae atque! Laboriosam, vel
                  assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consectetur aliquam, dolorum sunt corporis quam soluta
                  harum quia repellendus accusantium doloremque nesciunt
                  consequuntur impedit, totam explicabo, repudiandae atque!
                  Laboriosam, vel assumenda!
                </p>
                <h2>What the Governor of Kaduna State is saying</h2>
                <p style={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  impedit,{" "}
                  <i>
                    totam explicabo, repudiandae atque! Laboriosam, vel
                    assumenda! Lorem ipsum dolor sit amet, consectetur
                  </i>{" "}
                  adipisicing elit. Consectetur aliquam, dolorum sunt corporis
                  quam soluta harum quia repellendus accusantium doloremque
                  nesciunt consequuntur impedit, totam explicabo, repudiandae
                  atque! Laboriosam, vel assumenda!
                </p>
                <p style={{ margin: "1rem 0" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur aliquam, dolorum sunt corporis quam soluta harum
                  quia repellendus accusantium doloremque nesciunt consequuntur
                  impedit, totam explicabo, repudiandae atque! Laboriosam, vel
                  assumenda! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consectetur aliquam, dolorum sunt corporis quam soluta
                  harum quia repellendus accusantium doloremque nesciunt
                  consequuntur impedit, totam explicabo, repudiandae atque!
                  Laboriosam, vel assumenda!
                </p>
              </div>
            )}

            <div className="comments">
              <h2>
                Comments <span>1</span>
              </h2>

              <div className="comments-content">
                <Card className="comments-content-card">
                  <PersonPinIcon className="userIcon" fontSize="large" />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="name"
                      component="div"
                    >
                      James Pete
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography
                      variant="body2"
                      className="date"
                      color="text.secondary"
                    >
                      December 12, 2020 - 12:30am
                    </Typography>

                    {/* <CardActions> */}
                    <IconButton>
                      <span style={{ fontSize: "0.8rem" }}>Reply</span>
                    </IconButton>
                    {/* </CardActions> */}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="reply">
              <h2>Leave a comment</h2>

              <Box component="form" spacing={2} noValidate autoComplete="off">
                <TextField
                  className="input"
                  id="name"
                  required
                  label="Name"
                  variant="outlined"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  // helperText="Incorrect entry."
                  fullWidth
                />
                <TextField
                  id="email"
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                  className="input"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // helperText="Incorrect entry."
                  fullWidth
                />
                <TextField
                  className="input"
                  id="outlined-textarea"
                  label="Comment"
                  placeholder="Enter comment"
                  rows={4}
                  multiline
                  required
                  variant="outlined"
                  fullWidth
                  defaultValue={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button className="post-comment" variant="outlined">
                  Post Comment
                </Button>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default SinglePost;

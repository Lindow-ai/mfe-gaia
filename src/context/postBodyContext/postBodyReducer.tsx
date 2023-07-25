import { useMutation } from "@tanstack/react-query";
import { postBody } from "../../service/apiHelper";

// const postBodyReducer = (type, body, dispatch) => {
//   postBody(type, body)
//     .then((res) => {
//       dispatch({ type: "POST_BODY_SUCCESS", payload: res });
//       dispatch({ type: "POST_BODY_ON_LOAD", payload: false });
//       dispatch({ type: "POST_BODY_ON_ERROR", payload: res });
//     })
//     .catch(error => {
//       console.log("error", error);
//     });
// };

// const mutationPostBody = (type, body, dispatch) =>
//   useMutation({
//     mutationFn: postBody(type, body).then((res) => {
//       dispatch({ type: "POST_BODY_SUCCESS", payload: res });
//       dispatch({ type: "POST_BODY_ON_LOAD", payload: false });
//       dispatch({ type: "POST_BODY_ON_ERROR", payload: res });
//     }),
//     onSuccess: () => {
//         console.log('success');
//     }
//   });

import { getCourse } from "../../services/courseServices"

export const getSingleCourse = (courseId) => {
    return async (dispatch, getState) => {
        const { data } = await getCourse(courseId);
        console.log("data")
        console.log(data)
        await dispatch({ type: "GET_COURSE", payload: data.course });
 
    }
}